import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

export const languageChoice = atom("en");

export const [contentAtom] = atomsWithQuery(() => ({
  queryKey: ["content"],
  queryFn: async () => {
    const res = await fetch(`/content.json`);
    return res.json();
  },
}));
