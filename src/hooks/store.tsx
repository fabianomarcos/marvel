import React, { createContext, useCallback, useState, useContext, useEffect } from 'react'
import { apiMarvel } from '@/lib/axios'
import { configMarvelApi } from '@/utils/configMarvelApi'
import { IInfoCharacters } from '@/interfaces/types'

interface StoreContextData {
  characters: IInfoCharacters[]
}

const StoreContext = createContext<StoreContextData>({} as StoreContextData)

function StoreProvider({ children }: any) {
  const [characters, setCharacters] = useState<IInfoCharacters[]>([])
  const { timestamp, apiKey, hash } = configMarvelApi
  const request = apiMarvel.get(
    `/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
  );

  useEffect(() => {
    const getAgents = async () => {
      const { data: { data } } = await request
      setCharacters(data.results);
    }
    getAgents()
  }, [])

  return (
    <StoreContext.Provider
      value={{ characters }}
    >
      {children}
    </StoreContext.Provider>
  )
}

function useStore(): StoreContextData {
  const context = useContext(StoreContext)
  return context
}

export { StoreProvider, useStore }
