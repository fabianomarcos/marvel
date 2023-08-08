import React, { createContext, useCallback, useState, useContext, useEffect } from 'react'

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
