import React from "react";
import logo from "../../Assets/png/logo.png";
import whatsapp from "../../Assets/icon/logos_whatsapp-icon.png";
import instagram from "../../Assets/icon/skill-icons_instagram.png";
import { Link } from "react-scroll";
import "./BlockFooter.css";

function BlockFooter() {
	return (
		<div className="BlockFooter">
			<div className="BlockLogo">
				<Link
					to="header"
					activeClass="active"
					spy={false}
					smooth={true}
				>
					<img src={logo} alt="" />
				</Link>
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
						<a className="number" href="tel: 0705265747">
							0705 (555) 265 747
						</a>
						<a className="number" href="tel: 0550431430">
							0500 (550) 431 430
						</a>
					</div>
					<div className="socialNetworkImg">
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
					</div>
				</div>
				<a className="gmail" href="mailto: ruslanjacshyiykov65@gmail.com">ruslanjacshyiykov65@gmail.com</a>
			</div>
		</div>
	);
}
export default BlockFooter;
