import { enUS } from "./default-language-collections/default-en-US";
import { ptBR } from "./default-language-collections/default-pr-BR";

export type Dictionary = typeof enUS;

export const defaultDictionary = {
    'en-US': enUS,
    'pt-BR': ptBR
}