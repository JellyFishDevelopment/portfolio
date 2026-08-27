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
      <p className="py-8 text-center text-muted-foreground">
        Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="social-name">Nome</Label>
          <Input
            id="social-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            className="rounded-full"
            required
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="social-company">Empresa</Label>
          <Input
            id="social-company"
            type="text"
            name="company"
            placeholder="Nome da empresa"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-email">Email Corporativo</Label>
        <Input
          id="social-email"
          type="email"
          name="email"
          placeholder="voce@empresa.com"
          className="rounded-full"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="social-interest">Tenho interesse em:</Label>
        <Select
          name="interest"
          value={interest}
          onValueChange={setInterest}
          required
        >
          <SelectTrigger
            id="social-interest"
            className="w-full rounded-full"
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
        <Label htmlFor="social-message">Mensagem (Opcional)</Label>
        <textarea
          id="social-message"
          name="message"
          rows={3}
          placeholder="Conte um pouco sobre seu desafio..."
          className={cn(
            "flex min-h-[80px] w-full rounded-2xl border border-input bg-transparent px-4 py-3 text-sm shadow-sm",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "resize-none"
          )}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="glow-ring h-auto w-full rounded-full px-6 py-3"
      >
        Enviar Solicitação
      </Button>
    </form>
  );
}
