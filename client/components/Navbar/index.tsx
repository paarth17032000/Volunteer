import React from "react";
// import ProfileMenu from "../ProfileMenu";
// import Logo from "@/public/assets/Logo";

// interface INavbar {
// 	isUser: boolean;
// 	logoutUser: () => Promise<void>;
// }

export default function Navbar() {
	return (
		// add: px-6 md:px-24 remove: px-dashboard-container
		<div className="flex items-center justify-between navbar h-[86px] dashboard-container">
			{/* <div className="text-2xl text-white">
				<span className="text-[#666A87]">Welcome, </span>Paarth
			</div> */}

			<div className="flex flex-col -ml-6">
				VOLUNTEER
			</div>
			{/* for case if there is any user or auth */}
			{/* {isUser ? (
				<ProfileMenu logoutUser={logoutUser} />
			) : (
				<div className="flex gap-4">
					<button className="px-6 py-2 border rounded-lg text-white/90 border-white/20">
						Go to App
					</button>
				</div>
			)} */}
		</div>
	);
}
