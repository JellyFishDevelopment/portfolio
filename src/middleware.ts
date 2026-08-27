import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { i18n } from '@/config/i18n.config';

const intlMiddleware = createMiddleware(i18n);

const CANONICAL: Record<string, string> = {
  'pt-br': 'pt-BR',
  pt: 'pt-BR',
  'en-us': 'en-US',
  en: 'en-US',
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
  const segment = match?.[1];
  const canonical = segment ? CANONICAL[segment.toLowerCase()] : undefined;

  if (canonical && segment !== canonical) {
    const url = request.nextUrl.clone();
    url.pathname = `/${canonical}${match?.[2] ?? ''}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en-US|en-us|en|pt-BR|pt-br|pt)/:path*'],
};