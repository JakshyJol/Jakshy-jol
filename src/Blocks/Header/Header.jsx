import React from "react";
import logo from "../../Assets/png/logo.png";
import { NavHeader } from "../../Components/NavHeader/NavHeader";
import { NavIcon } from "../../Components/NavIcon/NavIcon";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<NavHeader />
			<NavIcon />
		</div>
	);
}
export default Header;
