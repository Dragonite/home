"use client"

import { createContext, useContext, ReactNode } from 'react'
import type { GlobalConfig } from '@/lib/schemas'

interface ConfigContextType {
  config: GlobalConfig | null;
  mediaRoot: string;
}

interface ConfigProviderProps {
  children: ReactNode;
  config: GlobalConfig | null;
  mediaRoot: string;
}

const ConfigContext = createContext<ConfigContextType>({ config: null, mediaRoot: 'http://127.0.0.1:8080' })

export function ConfigProvider({ 
  children, 
  config,
  mediaRoot,
}: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={{ config, mediaRoot }}>
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