import React from "react"
import ReactDOM from "react-dom"

const Animals = () => {
  return (
    <div>
      <AnimalType />
      <AnimalBreed />
    </div>
  )
}

const AnimalType = () => {
  return (
    <h2>Big Cat</h2>
  )
}

const AnimalBreed = () => {
  return (
    <h3>Lion</h3>
  )
}

ReactDOM.render(<Animals />, document.getElementById("root"))