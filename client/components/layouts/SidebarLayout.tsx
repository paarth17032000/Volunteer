"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
// import logout from "@/api/Auth/_logout";
// import { toastMessage } from "../utils/Toast";

interface LayoutProps {
	children: ReactNode;
}

export default function SidebarLayout({ children }: LayoutProps) {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
	// const isUser = localStorage.getItem("repx-access-token");
	// if (isUser == null || isUser.length == 0) {
	// 	router.push("/");
	// 	return;
	// }
	// if (isUser != null) {
	// 	const checkifTokenExp = JSON.parse(isUser).expirationTime - new Date().getTime();
	// 	if (checkifTokenExp <= 0) {
	// 		localStorage.removeItem("repx-access-token");
	// 		router.push("/");
	// 		toastMessage("Token Expired!", "error");
	// 		return;
	// 	}
	// }

	// logout will be async function request in future
	const logoutUser = async () => {
		// await logout();
		// router.push("/");
		// localStorage.removeItem("repx-access-token");
	};
	return (
		<div className="flex min-h-screen text-white bg-[#141627]">
			<div className="hidden md:block">
				<Sidebar
					isOpenSidebar={isOpenSidebar}
					setIsOpenSidebar={setIsOpenSidebar}
					logoutUser={logoutUser}
				/>
			</div>
			<div className="flex-1 overflow-x-hidden">
				<div className="flex flex-col h-full">
					<div className="ml-0 md:ml-[232px]">
						{/* <Navbar isUser={true} logoutUser={logoutUser} /> */}
						<div className="flex items-center justify-center flex-1 dashboard-container">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="flex flex-col justify-center gap-4 p-4">
<Logo />
</div> */
}

// with sidebar layout
{
	/* <div className="flex min-h-screen text-white bg-[#141627]">
			<div className="hidden md:block">
				<Sidebar
					isOpenSidebar={isOpenSidebar}
					setIsOpenSidebar={setIsOpenSidebar}
					logoutUser={logoutUser}
				/>
			</div>
			<div className="flex-1 overflow-x-hidden">
				<div className="flex flex-col h-full">
					<div className="ml-0 md:ml-[232px]">
						<Navbar isUser={true} logoutUser={logoutUser} />
						<div className="flex items-center justify-center flex-1 dashboard-container">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div> */
}
