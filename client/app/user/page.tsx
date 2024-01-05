"use client"
import { useGlobalContext } from "@/context/AppContext";
import React from "react";

export default function UserProfile() {
	const { userDetails } = useGlobalContext();
	console.log(userDetails);
	return <div>UserProfile</div>;
}
