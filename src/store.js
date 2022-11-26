import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

export const [contentAtom] = atomsWithQuery(() => ({
  queryKey: ["content"],
  queryFn: async () => {
    const res = await fetch(`/content.json`);
    return res.json();
  },
}));

const languageChoice = atom(localStorage.getItem("languageChoice") ?? "en");

export const languageChoiceWithPersistence = atom(
  (get) => get(languageChoice),
  (get, set, newStr) => {
    set(languageChoice, newStr);
    localStorage.setItem("languageChoice", newStr);
  }
);
