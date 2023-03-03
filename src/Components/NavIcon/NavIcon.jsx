import React, { useState } from "react";
import whatsapp from "../../Assets/icon/logos_whatsapp-icon.png";
import instagram from "../../Assets/icon/skill-icons_instagram.png";
import kyrgyz from "../../Assets/icon/Язык.png";
import flagRu from "../../Assets/png/pngwing.com.png"
import { useTranslation } from "react-i18next";
import "./NavIcon.css";
export const NavIcon = () => {
	const [lang, setLang] = useState(true);
	const { t, i18n } = useTranslation();
	const changeLanguage = (languge) => {
		i18n.changeLanguage(languge);
		setLang(!lang);
	};
	const ru = () => changeLanguage("ru");
	const kr = () => changeLanguage("kr");
	return (
		<div className="headerIcon">
			<a href="tel: 0705 265 747">0705 265 747</a>
			<nav className="headerLink">
				<a
					href="https://api.whatsapp.com/send/?phone=996705265747"
					target="_blank"
				>
					<img src={whatsapp} alt="" />
				</a>
				<a
					href="https://www.instagram.com/codifylab.kg/"
					target="_blank"
				>
					<img src={instagram} alt="" />
				</a>
				{lang ? (
					<img onClick={kr} className="lang" src={kyrgyz} alt="" />
				) : (
					<img onClick={ru} className="lang" src={flagRu} alt="" />
				)}
				{/* <img src={kyrgyz} alt="" /> */}
			</nav>
		</div>
	);
};
