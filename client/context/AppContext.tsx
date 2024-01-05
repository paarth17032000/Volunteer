"use client";
import useGetUserDetails from "@/utils/hooks/queries/useGetUserDetails";
import { User } from "@/utils/interface/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextDatType {
	userId: string;
	userDetails: User;
}

const GlobalApplicationContext = createContext<GlobalContextDatType>({} as any);

export const GlobalAppContext = ({ children }: { children: React.ReactNode }) => {
	const [userId, setUserId] = useState<string>("");
	const [userDetails, setUserDetails] = useState<User>({} as User);
	const { userDetailsData, userDetailsDataSuccess } = useGetUserDetails();
	useEffect(() => {
		if (userDetailsDataSuccess && userDetailsData != undefined) {
			setUserDetails(userDetailsData.data);
			setUserId(userDetailsData.data._id);
		}
	}, [userDetailsDataSuccess]);
	const value: GlobalContextDatType = {
		userDetails,
		userId,
	};
	return (
		<GlobalApplicationContext.Provider value={value}>
			{children}
		</GlobalApplicationContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalApplicationContext);
