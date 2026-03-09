"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const INTEREST_OPTIONS = [
  "Gestão de Social Media",
  "Tráfego Pago (Ads)",
  "Branding & Design",
  "Consultoria Completa",
];

export function SocialContactForm() {
  const [state, handleSubmit] = useForm("xdoqalzy");
  const [interest, setInterest] = React.useState("");

  if (state.succeeded) {
    return (
      <p className="text-center text-gray-600 py-8">
        Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="social-name" className="text-gray-700">
            Nome
          </Label>
          <Input
            id="social-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            className="rounded-xl bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            required
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="social-company" className="text-gray-700">
            Empresa
          </Label>
          <Input
            id="social-company"
            type="text"
            name="company"
            placeholder="Nome da empresa"
            className="rounded-xl bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-email" className="text-gray-700">
          Email Corporativo
        </Label>
        <Input
          id="social-email"
          type="email"
          name="email"
          placeholder="voce@empresa.com"
          className="rounded-xl bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-interest" className="text-gray-700">
          Tenho interesse em:
        </Label>
        <Select
          name="interest"
          value={interest}
          onValueChange={setInterest}
          required
        >
          <SelectTrigger
            id="social-interest"
            className="w-full rounded-xl bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          >
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            {INTEREST_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="interest" value={interest} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-message" className="text-gray-700">
          Mensagem (Opcional)
        </Label>
        <textarea
          id="social-message"
          name="message"
          rows={3}
          placeholder="Conte um pouco sobre seu desafio..."
          className={cn(
            "flex w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm",
            "focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all",
            "resize-none"
          )}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full py-4 px-6 rounded-xl bg-brand-dark text-white font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all"
      >
        Enviar Solicitação
      </Button>
    </form>
  );
}
