import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { GlobalAppContext } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Volunteer",
	description: "A app where we can organize our events and find suitable people.",
	// icons: {
	// 	icon: [
	// 		{
	// 			media: "(prefers-color-scheme: light)",
	// 			url: "/images/favicon.ico",
	// 			href: "/images/favicon.ico",
	// 		},
	// 	],
	// },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const QueryWrapper = dynamic(() => import("@/utils/Query"), { ssr: false });
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryWrapper>
					<GlobalAppContext>
						<ToastContainer
							position="bottom-left"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="dark"
						/>
						{children}
					</GlobalAppContext>
				</QueryWrapper>
			</body>
		</html>
	);
}
