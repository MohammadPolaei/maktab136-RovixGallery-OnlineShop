"use client";

import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
	value?: string;
	onChange: (html: string) => void;
}

export default function RichTextEditor({ value = "", onChange }: Props) {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			Heading.configure({ levels: [1, 2, 3] }),
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
		],
		content: value,
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		},
		editorProps: {
			attributes: {
				class:
					"prose max-w-none border border-black/20 rounded-sm p-3 min-h-[150px] focus:outline-none",
			},
		},
	});

	if (!editor) return null;

	return (
		<div className="border border-black/5 rounded-sm p-2 space-y-2">
			{/* Toolbar */}
			<div className="flex flex-wrap gap-2 border-b border-b-black/10 pb-2">
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					active={editor.isActive("bold")}
					label="Bold"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					active={editor.isActive("italic")}
					label="Italic"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					active={editor.isActive("underline")}
					label="Underline"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					active={editor.isActive("bulletList")}
					label="• List"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					active={editor.isActive("orderedList")}
					label="1. List"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					active={editor.isActive("blockquote")}
					label="❝ Quote"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign("right").run()}
					active={editor.isActive({ textAlign: "right" })}
					label="→ Right"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign("center").run()}
					active={editor.isActive({ textAlign: "center" })}
					label="↔ Center"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign("left").run()}
					active={editor.isActive({ textAlign: "left" })}
					label="← Left"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().undo().run()}
					label="Undo"
				/>
				<ToolbarButton
					onClick={() => editor.chain().focus().redo().run()}
					label="Redo"
				/>

				{/* Headings */}
				<ToolbarButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					active={editor.isActive("heading", { level: 1 })}
					label="H1"
				/>
				<ToolbarButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					active={editor.isActive("heading", { level: 2 })}
					label="H2"
				/>
				<ToolbarButton
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					active={editor.isActive("heading", { level: 3 })}
					label="H3"
				/>
			</div>

			<EditorContent editor={editor} />
		</div>
	);
}

function ToolbarButton({
	onClick,
	label,
	active,
}: {
	onClick: () => void;
	label: string;
	active?: boolean;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-2 py-1 text-sm rounded cursor-pointer ${
				active ? "bg-(--color-dark-green) text-white" : "bg-gray-100"
			}`}
		>
			{label}
		</button>
	);
}
