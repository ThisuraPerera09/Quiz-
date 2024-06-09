import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-primary px-5 shadow sticky-top">
		<div className="container-fluid">
		  <NavLink className="navbar-brand text-white" to={"/"}>
			Online Quiz App
		  </NavLink>
		  <button
			className="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item">
				<NavLink className="nav-link text-white" to={"/admin"}>
				  Admin
				</NavLink>
			  </li>
			  <li className="nav-item">
				<NavLink className="nav-link text-white" to={"/quiz-stepper"}>
				  Take Quiz
				</NavLink>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	)
}

export default Navbar
