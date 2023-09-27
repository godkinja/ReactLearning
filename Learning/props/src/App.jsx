import React from 'react'

export default function App() {

  const firstName = 'John'
  const lastName = 'Doe'

  const date = new Date()

  return (
    <>
      <h1>Hello {firstName} {lastName}!</h1>

      <h1>It is currently about {date.getHours() % 12} o'clock!</h1>

    </>
  )
}