import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import {
    $getSelection,
    $isParagraphNode,
    $isRangeSelection,
    LexicalEditor,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import AddNodeBtn from "./AddNodeBtn";
import {
    AddNodeDialog,
    AddNodeDialogStyle,
    AddNodeOption,
} from "@markor/components";
import { useHoverMenuContext } from "..";

function useAddNodeButtonPlugin(
    editor: LexicalEditor,
    addNodeOptions?: AddNodeOption[],
    style?: AddNodeDialogStyle
) {
    const { hoveredDOMNode, hoveredLexicalNode } = useHoverMenuContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <AddNodeBtn
                onClick={() => {
                    setIsDialogOpen(true);
                }}
            />
            <AddNodeDialog
                editor={editor}
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                lexicalNode={hoveredLexicalNode}
                addNodeOptions={addNodeOptions}
            />
        </>
    );
}

export default function AddNodeButtonPlugin({
    addNodeOptions,
    style,
}: {
    addNodeOptions?: AddNodeOption[];
    style?: AddNodeDialogStyle;
}) {
    const [editor] = useLexicalComposerContext();
    return useAddNodeButtonPlugin(editor, addNodeOptions, style);
}