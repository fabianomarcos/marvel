import { useState, useEffect } from "react";
import { useStore } from "./store";

interface IInputSearch {
  value: string;
  delay: number;
}

export function useSearch({ delay = 300, value }: IInputSearch) {
  const [debouncedValue, setValue] = useState("");
  const { characters } = useStore();

  useEffect(() => {
    const handler = setTimeout(() => setValue(value), delay);
    return () => clearTimeout(handler);
  }, [value]);

  const results = characters.filter((character) => character.name.includes(debouncedValue))

  return { debouncedValue, results };
}
