import React, { createContext, useCallback, useState, useContext, useEffect } from 'react'
import { apiMarvel } from '@/lib/axios'
import { configMarvelApi } from '@/utils/configMarvelApi'
import { IInfoCharacters } from '@/interfaces/types'

interface StoreContextData {
  value: string
}

export const SearchContext = createContext<StoreContextData>({} as StoreContextData)

function StoreProvider({ children, value }: any) {
  return (
    <SearchContext.Provider
      value={{ value }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useStore(): StoreContextData {
  const context = useContext(SearchContext)
  return context
}

export { StoreProvider, useStore }
