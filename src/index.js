import React from "react"
import ReactDOM from "react-dom"

const FamilyMembers = () => {
  return (
    <div>
      <h2><FamilyMemberRole /></h2>
      <h3><FamilyMemberName /></h3>
    </div>
  )
}

const FamilyMemberRole = () => {
  return (
    <h2>Father</h2>
  )
}

const FamilyMemberName = () => {
  return (
    <h3>Kevin Nelson</h3>
  )
}

ReactDOM.render(<FamilyMembers />, document.getElementById("root"))