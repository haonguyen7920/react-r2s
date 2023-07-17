import React from 'react'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'

const Root = () => {
  
  return (
    <div className='root'>
    <Navigate to="recipes"/>
      <nav>
        <Link to="/">Recipe Book</Link>
        <NavLink to="recipes">Recipes</NavLink>
        <NavLink to="shopping-list">Shopping List</NavLink>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default Root