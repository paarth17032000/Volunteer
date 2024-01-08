"use client";
import useGetUserDetails from "@/utils/hooks/queries/useGetUserDetails";
import { User } from "@/utils/interface/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextDataType {
	accessToken: string;
	userId: string;
	userDetails: User;
	setEnableUserFetch: (enableUserFetch: boolean) => void;
}

const GlobalApplicationContext = createContext<GlobalContextDataType>({} as any);

export const GlobalAppContext = ({ children }: { children: React.ReactNode }) => {
	const accessTokenCookie = document.cookie
		.split(";")
		.find((val) => val.slice(0, 13) == " access-token")
		?.split("=")[1];
	const [userId, setUserId] = useState<string>("");
	const [accessToken, setAccessToken] = useState<string>("");
	const [enableUserFetch, setEnableUserFetch] = useState<boolean>(false);
	const [userDetails, setUserDetails] = useState<User>({} as User);
	const { userDetailsData, userDetailsDataSuccess, status, userDetailsDataLoading } =
		useGetUserDetails(accessToken, enableUserFetch);
	console.log(status, userDetailsDataLoading);
	useEffect(() => {
		if (userDetailsDataSuccess && !userDetailsDataLoading && userDetailsData != undefined) {
			console.log("user details set");
			setUserDetails(userDetailsData.data);
			setUserId(userDetailsData.data._id);
		}
	}, [userDetailsDataSuccess, userDetailsDataLoading, userDetailsData]);

	useEffect(() => {
		if (accessTokenCookie != undefined && accessTokenCookie.length > 0) {
			setAccessToken(accessTokenCookie);
		}
	}, [accessTokenCookie]);

	const value: GlobalContextDataType = {
		accessToken,
		userDetails,
		userId,
		setEnableUserFetch,
	};
	return (
		<GlobalApplicationContext.Provider value={value}>
			{children}
		</GlobalApplicationContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalApplicationContext);
