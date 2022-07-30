import { useState } from 'react'
import './App.css'

export function App() {

  return (
    <div>
        <Header/>
        <div>
          <Pesquisa/>
        </div>
        <div>
          <ResultTask/>
        </div>
    </div>
  )
}