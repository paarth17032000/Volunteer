import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
	// 		{
	// 			media: "(prefers-color-scheme: dark)",
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
				</QueryWrapper>
			</body>
		</html>
	);
}
