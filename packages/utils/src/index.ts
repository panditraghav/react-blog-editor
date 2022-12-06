import { LexicalEditor } from "lexical";

export function isHTMLElement(x: any): x is HTMLElement {
    return x instanceof HTMLElement;
}
export interface Offset {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

export function isAboveOrBelowCenter(
    ev: MouseEvent,
    element: HTMLElement
): "above" | "below" {
    const { y: elementY, height: elementHeight } =
        element.getBoundingClientRect();
    const { y: mouseY } = ev;

    const top = elementY;
    const bottom = elementY + elementHeight;
    const center = top + (bottom - top) / 2;

    if (mouseY >= center) {
        return "below";
    } else {
        return "above";
    }
}

export function getTopLevelNodeKey(editor: LexicalEditor): string[] | [] {
    const root = editor.getEditorState()._nodeMap.get("root");
    return root ? root.__children : [];
}

export function getHoveredDOMNode(
    ev: MouseEvent,
    editor: LexicalEditor,
    offset?: Offset
): HTMLElement | null {
    const topKeys = getTopLevelNodeKey(editor);
    let lexicalDOMNode: HTMLElement | null = null;
    let low = 0;
    let high = topKeys.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const element = editor.getElementByKey(topKeys[middle]);
        if (!element) return lexicalDOMNode;
        if (isMouseInside(element, ev, offset)) {
            lexicalDOMNode = element;
            break;
        }

        switch (isAboveOrBelowCenter(ev, element)) {
            case "above":
                high = middle - 1;
                break;
            case "below":
                low = middle + 1;
                break;
        }
    }
    return lexicalDOMNode;
}

export function isMouseInside(
    element: HTMLElement | null,
    ev: MouseEvent,
    offset?: Offset
): boolean {
    if (!element) return false;
    const elementRect = element.getBoundingClientRect();
    const { paddingTop, paddingBottom, marginTop, marginBottom } =
        window.getComputedStyle(element);
    const { x: mouseX, y: mouseY } = ev;
    const {
        x: elementX,
        y: elementY,
        width: elementWidth,
        height: elementHeight,
    } = elementRect;
    if (
        mouseX >= elementX + (offset?.left || 0) &&
        mouseX <= elementX + elementWidth + (offset?.right || 0) &&
        mouseY >= elementY + (offset?.top || 0) &&
        mouseY <= elementY + elementHeight + (offset?.bottom || 0)
    ) {
        return true;
    }
    return false;
}

export * from "./hooks";