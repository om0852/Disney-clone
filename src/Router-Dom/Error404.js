import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
    // alert("error occur")
  return (
    <div>
      <h2>Welcome to error page</h2>
      {/* <button href="/">Go BAck bro</button> */}
      <NavLink to="/home">
        Go back to home
    </NavLink>
    </div>

  )
}

export default Error404
