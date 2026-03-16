"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Button } from "./ui/button";
import { Forward } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ params }: { params: { lang: Locale } }) {
  const [state, handleSubmit] = useForm("xdoqalzy");
  const dict = getDictionaryUseClient(params.lang);

  if (state.succeeded) {
    return <p>{dict.site.component.contactForm.alert}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="font-bold">
        {dict.site.component.contactForm.email}
      </label>
      <div className="pt-2 pb-5">
        <Input
          id="email"
          type="email"
          name="email"
          className="email p-2"
          placeholder={dict.site.component.contactForm.emailPlaceholder}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <label htmlFor="subject" className="pt-5 font-bold">
        {dict.site.component.contactForm.subject}
      </label>
      <div className="pt-2 pb-5">
        <Input
          id="subject"
          type="subject"
          name="subject"
          className="subject p-2"
          placeholder={dict.site.component.contactForm.subjectPlaceholder}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>
      <label htmlFor="message" className="font-bold">
        {dict.site.component.contactForm.message}
      </label>
      <div className="pt-2">
        <Textarea
          id="message"
          name="message"
          className="p-2"
          cols={30}
          rows={7}
          placeholder={dict.site.component.contactForm.messagePlaceholder}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <a href={`/${params.lang}/projects`}></a>
      <div className="text-center w-full pt-4">
        <a type="submit" className="text-white w-full">
          <Button className="w-full font-regular">
            <Forward className="mr-2" strokeWidth={1} />
            {dict.site.component.contactForm.submitButton}
          </Button>
        </a>
      </div>
    </form>
  );
}
