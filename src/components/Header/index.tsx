import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { useSearch } from "@/hooks/useDebounce";
import { useStore } from "@/hooks/store";

import { Container, Search } from "./styles";
import { StorageEnum } from "@/utils/storageEnum";

interface IUser {
  email: string;
}

export default function Header() {
  let user = null
  if (typeof window !== "undefined") {
    user = localStorage.getItem(StorageEnum.user);
  }

  if (user && user !== "undefined") user = JSON.parse(user);
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
      <Search>
        <FiSearch size={20} />
        <input
          placeholder="Busque um agente"
          onChange={(event) => getSearchParams(event.target.value)}
        />
      </Search>
      <span>
        Bem vindo(a) <strong>{(user as unknown as IUser)?.email}</strong>
      </span>
    </Container>
  );
}
