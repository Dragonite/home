// Create: components/providers/sheet-provider.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface SheetContextType {
  isOpen: boolean
  openSheet: () => void
  closeSheet: () => void
}

const SheetContext = createContext<SheetContextType | undefined>(undefined)

export function SheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openSheet = () => setIsOpen(true)
  const closeSheet = () => setIsOpen(false)

  return (
    <SheetContext.Provider value={{ isOpen, openSheet, closeSheet }}>
      {children}
    </SheetContext.Provider>
  )
}

export function useSheet() {
  const context = useContext(SheetContext)
  if (context === undefined) {
    throw new Error('useSheet must be used within a SheetProvider')
  }
  return context
}