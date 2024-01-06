"use client";
import useGetUserDetails from "@/utils/hooks/queries/useGetUserDetails";
import { User } from "@/utils/interface/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextDataType {
	userId: string;
	userDetails: User;
	setEnableUserFetch: (enableUserFetch: boolean) => void;
}

const GlobalApplicationContext = createContext<GlobalContextDataType>({} as any);

export const GlobalAppContext = ({ children }: { children: React.ReactNode }) => {
	const accessToken = document.cookie
		.split(";") 
		.find((val) => val.slice(0, 13) == " access-token")
		?.split("=")[1];
	const [enableUserFetch, setEnableUserFetch] = useState<boolean>(false);
	const [userId, setUserId] = useState<string>("");
	const [userDetails, setUserDetails] = useState<User>({} as User);
	const { userDetailsData, userDetailsDataSuccess, userDetailsDataLoading, status } = useGetUserDetails(enableUserFetch);
	useEffect(() => {
		if (userDetailsDataSuccess && userDetailsData != undefined) {
			console.log('user details set')
			setUserDetails(userDetailsData.data);
			setUserId(userDetailsData.data._id);
		}
	}, [userDetailsDataSuccess, status]);

	useEffect(() => {
		if (accessToken != undefined && accessToken.length > 0) {
			setEnableUserFetch(!enableUserFetch);
		}
	}, [accessToken]);

	const value: GlobalContextDataType = {
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
