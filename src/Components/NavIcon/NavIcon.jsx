import React from "react";
// import whatsapp from "../../Assets/icon/logos_whatsapp-icon.png";
// import instagram from "../../Assets/icon/skill-icons_instagram.png";
// import kyrgyz from "../../Assets/icon/Язык.png";
import { useTranslation } from "react-i18next";
import "./NavIcon.css";
export const NavIcon = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (languge) => {
		i18n.changeLanguage(languge);
	};
	return (
		<div className="headerIcon">
			<a href="tel: 0705 265 747">0705 265 747</a>
			<nav className="headerLink">
				{/* <a
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
				</a> */}
				<button onClick={() => changeLanguage("ru")}>ru</button>
				<button onClick={() => changeLanguage("kr")}>kr</button>
				<div>{t("text")}</div>
				{/* <img src={kyrgyz} alt="" /> */}
			</nav>
		</div>
	);
};
