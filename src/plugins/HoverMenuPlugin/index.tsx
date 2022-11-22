import "./index.css";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import useMouse from "../../hooks/useMouse";
import { getHoveredDOMNode, Offset } from "../../utils";
import { $getNearestNodeFromDOMNode, LexicalNode } from "lexical";
import { hoverMenuContext } from "../../context/hoverMenuContext";

interface HoverMenuStyle {
    hoverMenu?: string;
    showMenuAnimation?: string;
    hideMenuAnimation?: string;
}

function hideMenu(menu: HTMLElement | null, style?: HoverMenuStyle) {
    if (!menu) return;
    menu.style.left = "-100px";
    menu.style.top = "-100px";
    menu.classList.remove(
        style?.showMenuAnimation || "defaultShowMenuAnimation"
    );
}

function setMenuPosition(
    element: HTMLElement | null,
    menu: HTMLElement | null,
    offset?: Offset,
    style?: HoverMenuStyle
) {
    if (!menu) return;
    if (!element) {
        hideMenu(menu, style);
        return;
    }
    const elementRect = element.getBoundingClientRect();
    const { x: elementX, y: elementY, height } = elementRect;

    menu.style.left = `${elementX + (offset?.left || 0)}px`;
    menu.style.top = `${elementY + (offset?.top || 0) + window.scrollY}px`;
    menu.classList.add(style?.showMenuAnimation || "defaultShowMenuAnimation");
}

export default function HoverMenuPlugin({
    children,
    offset,
    style,
}: {
    children?: React.ReactNode;
    offset?: Offset;
    style?: HoverMenuStyle;
}) {
    const [editor] = useLexicalComposerContext();
    const hoverMenuRef = useRef<HTMLDivElement | null>(null);
    const [hoveredDOMNode, setHoveredDOMNode] = useState<HTMLElement | null>(
        null
    );
    const [hoveredLexicalNode, setHoveredLexicalNode] =
        useState<LexicalNode | null>(null);

    useMouse((ev) => {
        const domNode = getHoveredDOMNode(ev, editor, offset);
        setHoveredDOMNode(domNode);
        setMenuPosition(domNode, hoverMenuRef.current, offset, style);
        editor.update(() => {
            if (!domNode) return;
            const lexicalNode = $getNearestNodeFromDOMNode(domNode);
            setHoveredLexicalNode(lexicalNode);
        });
    });

    useEffect(() => {
        return editor.registerUpdateListener(({ dirtyElements }) => {
            if (dirtyElements.get("root")) hideMenu(hoverMenuRef.current);
        });
    });

    return createPortal(
        <hoverMenuContext.Provider
            value={{ hoveredDOMNode, hoveredLexicalNode }}
        >
            <div
                className={style?.hoverMenu || "defaultHoverMenu"}
                ref={hoverMenuRef}
            >
                {children}
            </div>
        </hoverMenuContext.Provider>,
        document.body
    );
}
