import React, { createContext, useCallback, useState, useContext } from "react";
import { apiMarvel } from "@/lib/axios";

import { configMarvelApi } from "@/utils/configMarvelApi";
import { IInfoCharacters } from "@/interfaces/types";

interface IGetAgents {
  limit: number;
  name?: string;
}

interface StoreContextData {
  characters: IInfoCharacters[];
  loading: boolean;
  getAgents: ({ limit, name = "" }: IGetAgents) => Promise<void>;
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

function StoreProvider({ children }: any) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [characters, setCharacters] = useState<IInfoCharacters[]>([]);
  const { timestamp, apiKey, hash } = configMarvelApi;

  const getAgents = useCallback(async ({ limit, name }: IGetAgents) => {
    setLoading(true);
    const nameStartsWith = name ? `&nameStartsWith=${name}` : "";
    const request = apiMarvel.get(
      `/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=${limit}${nameStartsWith}`
    );
    const {
      data: { data },
    } = await request;
    setCharacters(data.results);
    setLoading(false);
    setCount(data.count);
  }, []);

  return (
    <StoreContext.Provider
      value={{ characters, getAgents, loading, count, setPage, page }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStore(): StoreContextData {
  const context = useContext(StoreContext);
  return context;
}

export { StoreProvider, useStore };
