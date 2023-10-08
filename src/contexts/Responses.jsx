import React from 'react'

export const ResponsesContext = React.createContext()

export function ResponsesProvider({ children }) {
  const [responses, setResponses] = React.useState([
    { id: undefined, option: '____' },
    { id: undefined, option: '____' },
    { id: undefined, option: '____' },
    { id: undefined, option: '____' },
    { id: undefined, option: '____' },
  ])

  return (
    <ResponsesContext.Provider value={{ responses, setResponses }}>
      {children}
    </ResponsesContext.Provider>
  )
}
