import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useDeleteEvent from "@/utils/hooks/mutations/events/useDeleteEvent";
import { useGlobalContext } from "@/context/AppContext";
import useGetUserDetails from "@/utils/hooks/queries/useGetUserDetails";

interface IEventCancelModal {
	eventId: string;
	setEventId: (eventId: string) => void;
	openCancelModal: boolean;
	setopenCancelModal: (openCancelModal: boolean) => void;
}

export default function EventCancelModal({
	eventId,
	setEventId,
	openCancelModal,
	setopenCancelModal,
}: IEventCancelModal) {
	const { accessToken } = useGlobalContext();
	const { refetchUserDetailsData } = useGetUserDetails(accessToken);
	const deleteEventMutation = useDeleteEvent();
	const handleCancelDecision = (deleteEvent: boolean) => {
		if (deleteEvent)
			deleteEventMutation.mutateAsync(eventId, {
				onSuccess: () => refetchUserDetailsData(),
			});
		setEventId("");
		setopenCancelModal(!openCancelModal);
	};
	return (
		<Dialog open={openCancelModal} onOpenChange={() => setopenCancelModal(!openCancelModal)}>
			<DialogContent className="bg-black text-white hover:shadow-2xl hover:shadow-emerald-500/[0.2] border-white/[0.5] rounded-xl p-6 border">
				<div className="mt-4 md:px-6 px-0">
					<h1 className="font-bold text-center text-lg mb-3">
						Are you sure you want to cancel the event ?
					</h1>
					<div className="flex items-center gap-6 mx-10">
						<button
							onClick={() => handleCancelDecision(false)}
							className="text-center cursor-pointer outline-none font-medium mt-5 bg-white/90 text-black px-6 py-3 w-full rounded-md"
						>
							Back
						</button>
						<button
							onClick={() => handleCancelDecision(true)}
							className="text-center cursor-pointer outline-none font-medium mt-5 bg-red-600 text-white px-6 py-3 w-full rounded-md"
						>
							Cancel
						</button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
