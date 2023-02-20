import React from "react";
import discountBanner from "../../../Assets/png/Mask group.png";
import phone from "../../../Assets/png/Rectangle.png";

import "./Blockbtn.css";
function Blockbtn() {
	return (
		<div className="blockBtn">
			<img className="discountBanner" src={discountBanner} alt="" />
			<div className="btnCall">
				<p>
					Приобрети методичку сейчас и получи теоретический
					онлайн-курс в подарок
				</p>
				<div className="btnCallText">
					<img src={phone} alt="" />
					<button>Приобрести</button>
				</div>
			</div>
		</div>
	);
}
export default Blockbtn;
