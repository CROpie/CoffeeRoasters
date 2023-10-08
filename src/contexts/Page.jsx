import React from 'react'

export const PageContext = React.createContext()

export function PageProvider({ children }) {
  // home | about | plan
  const [showPage, setShowPage] = React.useState('home')

  return <PageContext.Provider value={{ showPage, setShowPage }}>{children}</PageContext.Provider>
}
