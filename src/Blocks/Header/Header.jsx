import React from "react";
import logo from "../../Assets/png/logo.png";
import { NavHeader } from "../../Components/NavHeader/NavHeader";
import { NavIcon } from "../../Components/NavIcon/NavIcon";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
	return (
		<div className="header1">
			<Link to="header" activeClass="active" spy={false} smooth={true}>
				<img className="hedaerImg" src={logo} alt="" />
			</Link>
			<NavHeader />
			<NavIcon />
		</div>
	);
}
export default Header;
