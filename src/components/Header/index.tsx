import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { useSearch } from "@/hooks/useDebounce";
import { useStore } from "@/hooks/store";

import { Container, Search } from "./styles";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/router";

export default function Header() {
  const { user } = useAuth()
  const router = useRouter()
  const showInputSearch = router.pathname !== '/perfil/[id]'
  const [inputValue, setInputValue] = useState("");
  const { debouncedValue } = useSearch({ delay: 400, value: inputValue });

  const getSearchParams = (param: string) => setInputValue(param);
  const { getAgents, setPage } = useStore();

  useEffect(() => {
    setPage(1);
    getAgents({ limit: 100, name: debouncedValue });
  }, [debouncedValue]);

  return (
    <Container>
      {showInputSearch ? <Search>
        <FiSearch size={20} />
        <input
          placeholder="Busque um agente"
          onChange={(event) => getSearchParams(event.target.value)}
        />
      </Search> : <div />}
      <span>
        Bem vindo(a) <strong>{user?.email}</strong>
      </span>
    </Container>
  );
}
