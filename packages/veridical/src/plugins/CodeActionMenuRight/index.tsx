import React, { useRef, useEffect } from 'react';
import { $isCodeNode, CodeNode } from '@lexical/code';
import { createPortal } from 'react-dom';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useHoverMenuContext } from '../../utils';

function setMenuPosition(
    menuElement: HTMLDivElement | null,
    codeDomNode: HTMLElement | null,
) {
    if (!menuElement || !codeDomNode) return;
    const {
        top,
        left,
        width: codeNodeWidth,
    } = codeDomNode.getBoundingClientRect();
    menuElement.style.top = `${top + window.scrollY}px`;
    menuElement.style.left = `${left + codeNodeWidth}px`;
    menuElement.style.display = `flex`;
}

function hideMenu(menuElement: HTMLElement | null) {
    if (!menuElement) return;
    menuElement.style.display = 'none';
}

export default function CodeActionMenuRight({
    children,
    container,
}: {
    children?: React.ReactNode;
    container: Element | DocumentFragment;
}) {
    const { hoveredDOMNode, hoveredLexicalNode } = useHoverMenuContext();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if ($isCodeNode(hoveredLexicalNode) && hoveredDOMNode) {
            setMenuPosition(menuRef.current, hoveredDOMNode);
        } else {
            hideMenu(menuRef.current);
        }
        if (menuRef.current) {
            const currentLeft = parseFloat(menuRef.current.style.left);
            const { width } = menuRef.current.getBoundingClientRect();
            menuRef.current.style.left = `${currentLeft - width}px`;
        }
    }, [hoveredLexicalNode, hoveredDOMNode]);

    useEffect(() => {
        return editor.registerMutationListener(CodeNode, (nodes) => {
            for (const [key, value] of nodes) {
                if (value === 'destroyed') {
                    hideMenu(menuRef.current);
                }
            }
        });
    }, [editor]);

    return createPortal(
        <div style={{ position: 'absolute', display: 'none' }} ref={menuRef}>
            {children}
        </div>,
        container,
    );
}
