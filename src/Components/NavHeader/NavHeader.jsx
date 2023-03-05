import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import "./NavHeader.css";
export const NavHeader = () => {
	const { t } = useTranslation();
	return (
		<nav className="headerLinkText">
			<Link activeClass="active" to="mainCar" spy={false} smooth={true}>
			Главная
			</Link>
			<Link activeClass="active" to="quiz" spy={true} smooth={true}>
				Онлайн тест
			</Link>
			<Link activeClass="active" to="Cards" spy={true} smooth={true}>
			О авторе
			</Link>
			<Link
				activeClass="active"
				to="WhiteBlockBook"
				spy={true}
				smooth={true}
			>
				Mетодичка
			</Link>
		</nav>
	);
};
