import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface ICreateNewEvent {
	openCreateNewEvent: boolean;
	setOpenCreateNewEvent: (open: boolean) => void;
	// eventInfo: Event;
}

export default function CreateNewEvent({
	openCreateNewEvent,
	setOpenCreateNewEvent,
}: ICreateNewEvent) {
	return (
		<Dialog
			open={openCreateNewEvent}
			onOpenChange={() => setOpenCreateNewEvent(!openCreateNewEvent)}
		>
			{/* <DialogTrigger>Open</DialogTrigger> */}
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{"eventInfo"}</DialogTitle>
					<DialogDescription>{"desc"}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
