"use client"

import { createContext, useContext, ReactNode } from 'react'
import type { GlobalConfig } from '@/lib/schemas'

interface ConfigContextType {
  config: GlobalConfig | null;
}

interface ConfigProviderProps {
  children: ReactNode;
  config: GlobalConfig | null;
}

const ConfigContext = createContext<ConfigContextType>({ config: null})

export function ConfigProvider({ 
  children, 
  config,
}: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={{ config }}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider')
  }
  return context
}