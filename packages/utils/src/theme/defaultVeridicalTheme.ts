import { VeridicalThemeClasses } from ".";

export let defaultVeridicalTheme: VeridicalThemeClasses = {
    editorContainer: "max-w-[800px] m-auto",
    characterLimit: "DefaultEditorTheme__characterLimit",
    code: "DefaultEditorTheme__code",
    codeHighlight: {
        atrule: "DefaultEditorTheme__tokenAttr",
        attr: "DefaultEditorTheme__tokenAttr",
        boolean: "DefaultEditorTheme__tokenProperty",
        builtin: "DefaultEditorTheme__tokenSelector",
        cdata: "DefaultEditorTheme__tokenComment",
        char: "DefaultEditorTheme__tokenSelector",
        class: "DefaultEditorTheme__tokenFunction",
        "class-name": "DefaultEditorTheme__tokenFunction",
        comment: "DefaultEditorTheme__tokenComment",
        constant: "DefaultEditorTheme__tokenProperty",
        deleted: "DefaultEditorTheme__tokenProperty",
        doctype: "DefaultEditorTheme__tokenComment",
        entity: "DefaultEditorTheme__tokenOperator",
        function: "DefaultEditorTheme__tokenFunction",
        important: "DefaultEditorTheme__tokenVariable",
        inserted: "DefaultEditorTheme__tokenSelector",
        keyword: "DefaultEditorTheme__tokenAttr",
        namespace: "DefaultEditorTheme__tokenVariable",
        number: "DefaultEditorTheme__tokenProperty",
        operator: "DefaultEditorTheme__tokenOperator",
        prolog: "DefaultEditorTheme__tokenComment",
        property: "DefaultEditorTheme__tokenProperty",
        punctuation: "DefaultEditorTheme__tokenPunctuation",
        regex: "DefaultEditorTheme__tokenVariable",
        selector: "DefaultEditorTheme__tokenSelector",
        string: "DefaultEditorTheme__tokenSelector",
        symbol: "DefaultEditorTheme__tokenProperty",
        tag: "DefaultEditorTheme__tokenProperty",
        url: "DefaultEditorTheme__tokenOperator",
        variable: "DefaultEditorTheme__tokenVariable",
    },
    hashtag: "DefaultEditorTheme__hashtag",
    heading: {
        h1: "text-6xl text-title-light dark:text-title-dark font-bold mt-8 mb-12",
        h2: "text-5xl font-bold text-h2-light dark:text-h2-dark my-6",
        h3: "text-3xl font-semibold text-h3-light dark:text-h3-dark my-4",
    },
    image: "DefaultVeridicalImage",
    imageSelected: "DefaultVeridicalImageSelected",
    imageContainer: "DefaultVeridicalImageContainer",
    imageFallback: "DefaultVeridicalImageFallback",
    link: "text-blue-800 underline",
    list: {
        ol: "my-2 pl-8",
        ul: "my-2 pl-8",
        listitem: "text-xl my-1 mx-2 text-p-light dark:text-p-dark",
        listitemChecked: "DefaultEditorTheme__listItemChecked",
        listitemUnchecked: "DefaultEditorTheme__listItemUnchecked",
        nested: {
            listitem: "list-none",
        },
        olDepth: [
            "list-decimal",
            "list-[upper-alpha]",
            "list-[lower-alpha]",
            "list-[upper-roman]",
            "list-[lower-roman]",
        ],
        ulDepth: [
            "list-disc",
            "list-[square]",
            "list-[circle]",
            "list-[circle]",
        ]
    },
    ltr: "DefaultEditorTheme__ltr",
    mark: "DefaultEditorTheme__mark",
    markOverlap: "DefaultEditorTheme__markOverlap",
    paragraph: "text-xl text-p-light dark:text-p-dark my-2",
    quote: "DefaultEditorTheme__quote",
    rtl: "DefaultEditorTheme__rtl",
    table: "DefaultEditorTheme__table",
    tableCell: "DefaultEditorTheme__tableCell",
    tableCellHeader: "DefaultEditorTheme__tableCellHeader",
    text: {
        bold: "font-bold",
        code: "DefaultEditorTheme__textCode",
        italic: "DefaultEditorTheme__textItalic",
        strikethrough: "DefaultEditorTheme__textStrikethrough",
        subscript: "DefaultEditorTheme__textSubscript",
        superscript: "DefaultEditorTheme__textSuperscript",
        underline: "DefaultEditorTheme__textUnderline",
        underlineStrikethrough:
            "DefaultEditorTheme__textUnderlineStrikethrough",
    },
    placeholder: "DefaultEditorTheme__Placeholder",
    backdrop: "DefaultVeridicalBackdrop",
    dialog: {
        dialog: "DefaultVeridicalDialog",
        animation: "DefaultVeridicalDialogAnimation",
    },
    button: {
        base: "DefaultButton",
        primary: "DefaultButton_Primary",
        secondary: "DefaultButton_Secondary",
        disabled: "DefaultButton_Disabled",
    },
    addNodeDialog: {
        dialog: "DefaultVeridicalAddNodeDialog",
        searchInput: "DefaultAddNodeDialogSearchInput",
        nodeOptions: "DefaultAddNodeDialogNodeOptionsContainer",
        nodeOption: {
            selected: "DefaultAddNodeDialogOptionSelected",
            container: "DefaultAddNodeDialogNodeOption",
            icon: "DefaultAddNodeDialogNodeOptionImage",
            text: {
                container: "DefaultAddNodeDialogNodeOptionText",
                name: "DefaultAddNodeDialogNodeOptionName",
                description: "DefaultAddNodeDialogNodeOptionDescription",
            },
        },
    },
    addImageDialog: {
        dialog: "DefaultAddImageDialog",
        title: "DefaultAddImageDialogTitle",
        imageInput: {
            container: "DefaultAddImageDialog_ImageInputGroup",
            urlInput: "DefaultAddImageDialog_LinkInput",
            fileInput: "DefaultAddImageDialog_ImageFileInput",
            fileInputLabel: "DefaultAddImageDialog_ImageFileInputLabel",
        },
        altTextInput: "DefaultAddImageDialog_LinkInput",
        actionButtonGroup: "DefaultAddImageDialog_ActionButtonGroup",
    },
    hoverMenu: {
        animation: "animate-appear",
    },
    hoverBlockOption: {
        container: "flex",
        addNodeButton: {
            button: "bg-transparent border-none flex justify-center items-center",
            icon: "dark:fill-icon-dark dark:hover:fill-icon-dark-hover fill-icon-light hover:fill-icon-light-hover"
        },
        dragNodeButton: {
            button: "bg-transparent border-none flex justify-center items-center hover:cursor-pointer",
            icon: "dark:fill-icon-dark dark:hover:fill-icon-dark-hover fill-icon-light hover:fill-icon-light-hover"
        }
    },
    imageResizer: {
        container: "DefaultImageResizerContainer",
        paddle: "DefaultImageResizerPaddle",
    },
    codeActionMenu: {
        menuLeft: "DefaultCodeActionMenuLeft",
        menuRight: "DefaultCodeActionMenuRight",
    },
    codeLanguageSelection: {
        container: "DefaultCodeLanguageSelectionContainer",
        icon: "DefaultCodeLanguageSelectionIcon",
        name: "DefaultCodeLanguageSelectionName",
        menu: {
            container: "DefaultCodeLanguageSelectionMenuContainer",
            search: "DefaultCodeLanguageSelectionMenuSearch",
            optionContainer: "DefaultCodeLanguageSelectionMenuOptionContainer",
            option: "DefaultCodeLanguageSelectionMenuOption",
            optionSelected: "DefaultCodeLanguageSelectionMenuOptionSelected",
            animation: "DefaultVeridicalDialogAnimation",
        },
    },
    copyCodeButton: "DefaultCopyCodeButton",
    highlightMenu: {
        menu: "bg-bg-dark dark:bg-bg-light flex rounded-md drop-shadow-sm",
        menuButton: "bg-transparent cursor-pointer border-none p-0 my-0.5 mx-0",
        menuButtonIcon: "fill-icon-dark-hover dark:fill-icon-light my-2 mx-1",
        menuButtonIconSelected: "my-2 mx-1 fill-icon-dark-selected dark:fill-icon-light-selected",
        animation: "animate-appear"
    },
    addLinkDialog: {
        input: "bg-bg-dark dark:bg-bg-light drop-shadow-sm rounded-sm p-2 text-h3-dark dark:text-h3-light text-sm focus:outline-none",
        animation: "animate-appear"
    },
};
