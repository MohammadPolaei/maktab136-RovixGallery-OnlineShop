"use client";

import * as Popover from "@radix-ui/react-popover";
import React from "react";

type RadixSearchPopoverProps = {
	anchor: React.ReactNode;
	children: React.ReactNode;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	sideOffset?: number;
	alignOffset?: number;
	contentClassName?: string;
	showArrow?: boolean;
	modal?: boolean;
};

export default function RadixSearchPopover({
	anchor,
	children,
	open,
	onOpenChange,
	side = "bottom",
	align = "center",
	sideOffset = 10,
	alignOffset = 0,
	contentClassName = "",
	showArrow = false,
	modal = false,
}: RadixSearchPopoverProps) {
	return (
		<Popover.Root open={open} onOpenChange={onOpenChange} modal={modal}>
			<Popover.Anchor asChild>{anchor}</Popover.Anchor>

			<Popover.Portal>
				<Popover.Content
					side={side}
					align={align}
					sideOffset={sideOffset}
					alignOffset={alignOffset}
					onOpenAutoFocus={(e) => e.preventDefault()}
					className={[
						"z-600 outline-none",
						"data-[state=open]:animate-in data-[state=closed]:animate-out",
						"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
						"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
						"data-[side=bottom]:slide-in-from-top-2",
						"data-[side=top]:slide-in-from-bottom-2",
						"data-[side=left]:slide-in-from-right-2",
						"data-[side=right]:slide-in-from-left-2",
						contentClassName,
					].join(" ")}
				>
					{children}
					{showArrow ? <Popover.Arrow className="fill-white" /> : null}
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
