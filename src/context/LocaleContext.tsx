import React, { createContext, useContext } from 'react'

export type Locale = 'en' | 'jp'

interface LocaleContextType {
  locale: Locale
  prefix: string
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = React.useState<Locale>('en')
  const prefix = locale === 'en' ? '' : '/jp'

  return (
    <LocaleContext.Provider value={{ locale, prefix, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
