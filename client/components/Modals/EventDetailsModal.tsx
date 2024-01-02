import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Event } from "@/utils/interface/interface";

interface IEventDetailsModal {
	open: boolean;
	setOpen: (open: boolean) => void;
	eventInfo: Event;
}

export default function EventDetailsModal({ open, setOpen, eventInfo }: IEventDetailsModal) {
	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			{/* <DialogTrigger>Open</DialogTrigger> */}
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{eventInfo.eventName}</DialogTitle>
					<DialogDescription>{eventInfo.desc}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
