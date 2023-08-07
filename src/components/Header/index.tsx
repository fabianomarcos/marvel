import { useSearch } from "@/hooks/useDebounce";
import { Container, Search } from "./styles";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const value = useSearch({ delay: 3000, value: inputValue });
  console.log('value: ', value);

  const getSearchParams = (param: string) => setInputValue(param);

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
