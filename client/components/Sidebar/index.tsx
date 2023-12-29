"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Logo from "@/public/assets/Logo";
// import SidenavKeyIcon from "@/public/assets/sidenav/sidenavKeyIcon";
// import SidenavFileIcon from "@/public/assets/sidenav/sidenavFileIcon";
// import SidenavTextIcon from "@/public/assets/sidenav/sidenavTextIcon";
// import SidenavLogoutIcon from "@/public/assets/sidenav/sidenavLogoutIcon";

interface ISidebar {
	isOpenSidebar: boolean;
	setIsOpenSidebar: (isOpenSidebar: boolean) => void;
	logoutUser: () => Promise<void>;
}

export default function Sidebar({ isOpenSidebar, logoutUser }: ISidebar) {
	const pathname = usePathname();

	const shrinkLinks = [
		{ name: "Dashboard", link: "/dashboard" },
		{ name: "Transactions", link: "/transactions" },
	];

	// const getSvg = (name: string, active: boolean) => {
	// 	switch (name) {
	// 		case "API Keys":
	// 			return <SidenavKeyIcon active={active} />;
	// 		case "API Reference":
	// 			return <SidenavFileIcon active={active} />;
	// 		case "Partner Details":
	// 			return <SidenavTextIcon active={active} />;
	// 		default:
	// 			return <SidenavKeyIcon active={active} />;
	// 	}
	// };
	return (
		<div
			className={`fixed top-0 left-0 bottom-0 flex flex-col justify-between bg-[#141627] z-[20] ${
				!isOpenSidebar
					? "w-[232px] border-r-[1px] border-[#2D2F33] py-0"
					: "w-[77px] items-center py-8"
			}`}
		>
			{/* <div
					className={`relative flex rounded-[15px] hover:bg-[#FFFFFF10] p-4 cursor-pointer ${
						isOpenSidebar ? "mx-6" : "justify-center "
					}`}
					onClick={() => setIsOpenSidebar(!isOpenSidebar)}
				>
					{isOpenSidebar ? <SidenavShrinkIcon /> : <SidenavExpandIcon />}
					<span
						className={`${
							isOpenSidebar ? "w-[90%]" : "w-[37px]"
						} absolute h-[2px] bg-[#FFFFFF38] -bottom-8`}
					></span>
				</div> */}
			<div>
				<div className="flex flex-col items-center tracking-widest text-2xl justify-center gap-4 p-4 mt-4">
					VOLUNTEER
				</div>

				{!isOpenSidebar ? (
					<div className="flex flex-col justify-center gap-4 p-4 mx-4">
						{shrinkLinks.map((nav) => {
							const { name, link } = nav;
							return (
								<Link href={link} key={name} passHref>
									<div
										className={`${
											pathname === link
												? "bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] text-white font-bold"
												: "text-[#757590]"
										} flex items-center gap-3 justify-center text-lg whitespace-nowrap hover:bg-primary hover:font-bold px-6 py-2 text-center rounded-[5px] cursor-pointer hover:text-white element-containg-svg`}
										key={name}
									>
										{/* <div className="w-8">{getSvg(name, pathname === link)}</div> */}
										<div className="text-[18px]">{name}</div>
									</div>
								</Link>
							);
						})}
					</div>
				) : (
					<div className="flex flex-col justify-center gap-6">
						{shrinkLinks.map((nav) => {
							const { name, link } = nav;
							return (
								<Link href={link} key={name} passHref>
									<div
										className={`${
											pathname === link ? "bg-primary text-white" : ""
										} flex justify-center hover:bg-primary rounded-[16px] group cursor-pointer h-14 w-14 p-4 text-[#9B9797] hover:text-white element-containg-svg`}
										key={name}
									>
										{/* {getSvg(name, pathname === link)} */}
										<div className="absolute invisible px-3 py-1 ml-6 text-black transition-all -translate-x-3 rounded-md bg-white/90 left-full whitespace-nowrap opacity-20 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
											{name}
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				)}
			</div>

			<div
				className="relative flex  justify-center  rounded-[15px] hover:bg-[#FFFFFF10] p-4 cursor-pointer group"
				onClick={logoutUser}
			>
				{/* <SidenavLogoutIcon /> */}
				<div className="absolute invisible px-3 py-1 ml-6 text-black transition-all -translate-x-3 rounded-md bg-white/90 left-full whitespace-nowrap opacity-20 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
					Logout
				</div>
			</div>
		</div>
	);
}
