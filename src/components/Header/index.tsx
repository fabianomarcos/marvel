import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { useSearch } from "@/hooks/useDebounce";
import { useStore } from "@/hooks/store";

import { Container, Search } from "./styles";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const { debouncedValue } = useSearch({ delay: 400, value: inputValue });

  const getSearchParams = (param: string) => setInputValue(param);
  const { getAgents } = useStore()

  useEffect(() => {
    getAgents({ limit: 10, name: debouncedValue })
  }, [debouncedValue])

  return (
    <Container>
      <Search>
        <FiSearch size={20} />
        <input
          placeholder="Busque um agente"
          onChange={(event) => getSearchParams(event.target.value)}
        />
      </Search>
    </Container>
  );
}
