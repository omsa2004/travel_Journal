import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Data from "./components/data"

function App() {
  let cards = Data.map(item => {
    return (
      <Card 
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="cards">{cards}</section>

    </div>
  )
}

export default App
