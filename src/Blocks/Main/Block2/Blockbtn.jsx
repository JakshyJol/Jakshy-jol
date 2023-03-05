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
					<a href="tel: 0705 265 747"><button>Приобрести</button></a>
					{/* <a href="tel: 0705 265 747">0705 265 747</a> */}
					{/* <button>Приобрести</button> */}
				</div>
			</div>
		</div>
	);
}
export default Blockbtn;
