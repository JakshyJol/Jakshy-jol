import React from "react";
import logo from "../../Assets/png/logo.png";
import whatsapp from "../../Assets/icon/logos_whatsapp-icon.png";
import instagram from "../../Assets/icon/skill-icons_instagram.png";
import "./BlockFooter.css";

function BlockFooter() {
	return (
		<div className="BlockFooter">
			<div className="BlockLogo">
				<img src={logo} alt="" />
			</div>
			<div className="BlockInfo">
				<p>Омурбеков Руслан Жакшылыкович</p>
				<p>Инструктор по вождению и преподаватель теории в автошколе</p>
				<p>Codifylab</p>
				<p>7 мкр, 23 стр, дом Атлант ул. Исанова 105/3</p>
			</div>
			<div className="BlockLink">
				<div className="NumberLink">
					<div className="numberPhone">
						<p>0705 (555) 265 747</p>
						<p>0500 (550) 431 430</p>
					</div>
					<div className="socialNetworkImg">
						<img src={whatsapp} alt="" />
						<img src={instagram} alt="" />
					</div>
				</div>
				<a href="#">ruslanjacshyiykov65@gmail.com</a>
			</div>
		</div>
	);
}
export default BlockFooter;
