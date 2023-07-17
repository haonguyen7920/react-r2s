import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='root'>
      <nav>
        <Link to="/">Recipe Book</Link>
        <NavLink to="recipes">Recipes</NavLink>
        <NavLink to="shoppingList">Shopping List</NavLink>
      </nav>
      <div id="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Root