import React, {
  createContext,
  useCallback,
  useState,
  useContext
} from "react";
import { apiMarvel } from "@/lib/axios";

import { configMarvelApi } from "@/utils/configMarvelApi";
import { IInfoCharacters } from "@/interfaces/types";

interface IGetAgents {
  limit: number;
  name?: string;
}

interface StoreContextData {
  characters: IInfoCharacters[];
  totalCharacters: number;
  getAgents: ({ limit, name = "" }: IGetAgents) => Promise<void>;
}

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

function StoreProvider({ children }: any) {
  const [characters, setCharacters] = useState<IInfoCharacters[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const { timestamp, apiKey, hash } = configMarvelApi;

  const getAgents = useCallback(async ({ limit, name }: IGetAgents) => {
    const nameStartsWith = name ? `&nameStartsWith=${name}` : "";
    const request = apiMarvel.get(
      `/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=${limit}${nameStartsWith}`
    );
    const {
      data: { data },
    } = await request;
    setCharacters(data.results);
    setTotalCharacters(data.total);
  }, []);

  return (
    <StoreContext.Provider value={{ characters, totalCharacters, getAgents }}>
      {children}
    </StoreContext.Provider>
  );
}

function useStore(): StoreContextData {
  const context = useContext(StoreContext);
  return context;
}

export { StoreProvider, useStore };
