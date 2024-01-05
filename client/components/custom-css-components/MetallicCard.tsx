import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function MetallicCard() {
	return (
		<div className="z-0 inline-flex items-center justify-center transition-colors duration-300 border-glow group relative flex flex-col !items-start overflow-hidden bg-grey-1 bg-template-card p-7 md:p-6 sm:p-5">
			{/* <span className="noise pointer-events-none absolute inset-0 opacity-[0.1]"> */}
			<div className="flex h-16 items-center md:h-14 xs:h-12">
				<div className="relative">
					<Image
						alt="Java"
						width="49"
						height="64"
						className="h-[64px] w-[49px] md:h-[56px] md:w-[42px] xs:h-[48px] xs:w-[36px]"
						style={{ color: "transparent" }}
						src={require("../public/java.svg")}
					/>
				</div>
			</div>
			<h3 className="mt-6 text-xl font-medium text-white ">Java</h3>
			<p className="mb-5 mt-1.5 text-lg font-light leading-snug text-[#9DA8C6] md:mb-4.5 md:mt-1 sm:mb-4">
				Build and test your Java applications
			</p>
			<span className="relative z-10 mt-auto flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white !text-black shadow-[0_6px_16px_rgba(255,255,255,.2)] transition-shadow group-hover:shadow-[0_6px_20px_rgba(255,255,255,.4)] md:h-[30px] md:w-[30px] sm:h-7 sm:w-7">
				<MdKeyboardArrowRight />
			</span>
			{/* </span> */}
		</div>
	);
}

export default MetallicCard;


// css
// .bg-template-card {
// 	background-image: radial-gradient(
// 			121.65% 100% at 32.68% 0,
// 			#3c4155 0,
// 			rgba(60, 65, 85, 0.18) 32.49%,
// 			rgba(60, 65, 85, 0) 51.34%
// 		),
// 		radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%),
// 		radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%);
// }

// .transition-colors {
// 	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
// 	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// 	transition-duration: 0.15s;
// }

// .bg-grey-1 {
// 	--tw-bg-opacity: 1;
// 	background-color: rgb(13 14 18 / var(--tw-bg-opacity));
// }

// .border-glow {
// 	--radius: 16px;
// 	position: relative;
// 	border-radius: var(--radius);
// }

// .border-glow:after,
// .border-glow:before {
// 	pointer-events: none;
// 	position: absolute;
// 	z-index: 50;
// 	mix-blend-mode: overlay;
// 	content: "";
// }

// .border-glow:before {
// 	left: 0;
// 	right: 0;
// 	top: 0;
// 	border-width: 1px;
// 	border-color: rgb(255 255 255 / var(--tw-border-opacity));
// 	--tw-border-opacity: 0.8;
// 	height: var(--radius);
// 	border-bottom: none;
// 	border-radius: var(--radius) var(--radius) 0 0;
// }

// .border-glow:after {
// 	border-width: 1px;
// 	--tw-border-opacity: 1;
// 	border-color: rgb(255 255 255 / var(--tw-border-opacity));
// 	inset: var(--radius) 0 0 0;
// 	border-top: none;
// 	-o-border-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.8) 0, transparent 40%) 1;
// 	border-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.8) 0, transparent 40%) 1;
// }
