import {
    DecoratorNode,
    DOMExportOutput,
    EditorConfig,
    LexicalNode,
    NodeKey,
    SerializedLexicalNode,
    LexicalEditor,
    DOMConversionMap,
} from "lexical";
import React from "react";

import { ImageComponent } from "../components";

type SerializedImageNode = {
    altText: string;
    src: string;
    height: number;
    width: number;
    type: "image";
    version: 1;
} & SerializedLexicalNode;

export interface ImageProps {
    src: string;
    altText: string;
    height: number;
    width: number;
    key?: NodeKey;
}

export class ImageNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __altText: string;
    __width: number;
    __height: number;

    static getType(): string {
        return "image";
    }

    constructor(
        src: string,
        altText: string,
        height: number,
        width: number,
        key?: NodeKey
    ) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__height = height;
        this.__width = width;
    }

    static clone(node: ImageNode): ImageNode {
        return new ImageNode(
            node.getSrc(),
            node.getAltText(),
            node.getHeight(),
            node.getWidth(),
            node.getKey()
        );
    }

    static importJSON(serializedNode: SerializedImageNode): ImageNode {
        const { src, altText, height, width } = serializedNode;
        return $createImageNode({
            src,
            altText,
            height,
            width,
        });
    }

    exportJSON(): SerializedImageNode {
        return {
            src: this.getSrc(),
            altText: this.getAltText(),
            height: this.getHeight(),
            width: this.getWidth(),
            type: "image",
            version: 1,
        };
    }

    createDOM(config: EditorConfig, _editor: LexicalEditor): HTMLElement {
        const div = document.createElement("div");
        const className = config.theme.imageContainer;

        if (className) div.className = className;
        return div;
    }

    updateDOM(): false {
        return false;
    }

    exportDOM(): DOMExportOutput {
        const element = document.createElement("img");
        element.setAttribute("src", this.getSrc());
        element.setAttribute("alt", this.getAltText());
        return { element };
    }

    getSrc(): string {
        return this.__src;
    }
    setSrc(src: string): void {
        this.getWritable().__src = src;
    }

    getAltText() {
        return this.__altText;
    }
    setAltText(altText: string): void {
        this.getWritable().__altText = altText;
    }

    getHeight(): number {
        return this.__height;
    }
    setHeight(height: number) {
        this.getWritable().__height = height;
    }
    getWidth(): number {
        return this.__width;
    }
    setWidth(width: number) {
        this.getWritable().__width = width;
    }

    decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
        return (
            <ImageComponent
                src={this.getSrc()}
                alt={this.getAltText()}
                height={this.getHeight()}
                width={this.getWidth()}
                nodeKey={this.getKey()}
            />
        );
    }
}

export function $createImageNode({
    src,
    altText,
    height,
    width,
    key,
}: ImageProps): ImageNode {
    return new ImageNode(src, altText, height, width, key);
}

export function $isImageNode(
    node: LexicalNode | null | undefined
): node is ImageNode {
    return node instanceof ImageNode;
}
