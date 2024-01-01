"use client";
import React from "react";
import useGetAllEvents from "@/utils/hooks/queries/useGetAllEvents";

export default function Feed() {
	const { allEventsData } = useGetAllEvents();
	console.log(allEventsData);
	return (
		<div className="min-h-screen p-24 w-full">
			<div className="flex flex-col gap-y-6">
				{allEventsData != undefined &&
					allEventsData.data.map((eventObj: any) => (
						<div className="flex flex-col bg-[#1C1F37] rounded-md px-10 py-5">
							<div className="text-white text-lg font-medium capitalize">
								{eventObj.eventName}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
// #1C1F37
