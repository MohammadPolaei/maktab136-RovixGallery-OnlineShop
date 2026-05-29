"use client";

import * as Popover from "@radix-ui/react-popover";
import React from "react";

export type AppPopoverProps = {
	/** المانی که popover را باز می‌کند */
	trigger: React.ReactNode;

	/** محتوای داخل popover */
	children: React.ReactNode;

	/** (اختیاری) کنترل از بیرون */
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;

	/** تنظیمات موقعیت */
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	sideOffset?: number;
	alignOffset?: number;

	/** استایل‌ها */
	contentClassName?: string;

	/** نمایش arrow */
	showArrow?: boolean;

	/** اگر true باشد، با کلیک روی محتوا (مثلاً لینک‌ها) popover بسته می‌شود */
	closeOnInteract?: boolean;

	/** کنترل برخوردها */
	modal?: boolean;
};

export function RadixNavabrMenu({
	trigger,
	children,
	open,
	defaultOpen,
	onOpenChange,
	side = "bottom",
	align = "start",
	sideOffset = 10,
	alignOffset = 0,
	contentClassName = "",
	showArrow = true,
	closeOnInteract = false,
	modal = false,
}: AppPopoverProps) {
	return (
		<Popover.Root
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange}
			modal={modal}
		>
			<Popover.Trigger asChild>{trigger}</Popover.Trigger>

			<Popover.Portal>
				<Popover.Content
					side={side}
					align={align}
					sideOffset={sideOffset}
					alignOffset={alignOffset}
					onInteractOutside={() => {
						// Radix خودش می‌بندد، اینجا لازم نیست چیزی کنیم
					}}
					onOpenAutoFocus={(e) => {
						// برای هدر معمولاً بهتره فوکوس خودکار نپره داخل پنل
						e.preventDefault();
					}}
					className={[
						"z-50 rounded-2xl border bg-white shadow-xl outline-none",
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
					{closeOnInteract ? (
						<Popover.Close asChild>
							<div className="contents">{children}</div>
						</Popover.Close>
					) : (
						children
					)}

					{showArrow ? <Popover.Arrow className="fill-white" /> : null}
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
