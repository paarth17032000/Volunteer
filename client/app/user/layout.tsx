import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SidebarLayout from "@/components/Layouts/SidebarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "User profile",
	description: "User Details and Information",
};

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<div className={inter.className}>
		<SidebarLayout> {children}</SidebarLayout>
	</div>
);

export default Layout;
