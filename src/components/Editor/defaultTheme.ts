import { EditorThemeClasses } from "lexical/LexicalEditor";

export const defaultTheme: EditorThemeClasses = {
    characterLimit: 'DefaultEditorTheme__characterLimit',
    code: 'DefaultEditorTheme__code',
    codeHighlight: {
        atrule: 'DefaultEditorTheme__tokenAttr',
        attr: 'DefaultEditorTheme__tokenAttr',
        boolean: 'DefaultEditorTheme__tokenProperty',
        builtin: 'DefaultEditorTheme__tokenSelector',
        cdata: 'DefaultEditorTheme__tokenComment',
        char: 'DefaultEditorTheme__tokenSelector',
        class: 'DefaultEditorTheme__tokenFunction',
        'class-name': 'DefaultEditorTheme__tokenFunction',
        comment: 'DefaultEditorTheme__tokenComment',
        constant: 'DefaultEditorTheme__tokenProperty',
        deleted: 'DefaultEditorTheme__tokenProperty',
        doctype: 'DefaultEditorTheme__tokenComment',
        entity: 'DefaultEditorTheme__tokenOperator',
        function: 'DefaultEditorTheme__tokenFunction',
        important: 'DefaultEditorTheme__tokenVariable',
        inserted: 'DefaultEditorTheme__tokenSelector',
        keyword: 'DefaultEditorTheme__tokenAttr',
        namespace: 'DefaultEditorTheme__tokenVariable',
        number: 'DefaultEditorTheme__tokenProperty',
        operator: 'DefaultEditorTheme__tokenOperator',
        prolog: 'DefaultEditorTheme__tokenComment',
        property: 'DefaultEditorTheme__tokenProperty',
        punctuation: 'DefaultEditorTheme__tokenPunctuation',
        regex: 'DefaultEditorTheme__tokenVariable',
        selector: 'DefaultEditorTheme__tokenSelector',
        string: 'DefaultEditorTheme__tokenSelector',
        symbol: 'DefaultEditorTheme__tokenProperty',
        tag: 'DefaultEditorTheme__tokenProperty',
        url: 'DefaultEditorTheme__tokenOperator',
        variable: 'DefaultEditorTheme__tokenVariable',
    },
    hashtag: 'DefaultEditorTheme__hashtag',
    heading: {
        h1: 'DefaultEditorTheme__h1',
        h2: 'DefaultEditorTheme__h2',
        h3: 'DefaultEditorTheme__h3',
        h4: 'DefaultEditorTheme__h4',
        h5: 'DefaultEditorTheme__h5',
    },
    image: 'editor-image',
    link: 'DefaultEditorTheme__link',
    list: {
        listitem: 'DefaultEditorTheme__listItem',
        listitemChecked: 'DefaultEditorTheme__listItemChecked',
        listitemUnchecked: 'DefaultEditorTheme__listItemUnchecked',
        nested: {
            listitem: 'DefaultEditorTheme__nestedListItem',
        },
        olDepth: [
            'DefaultEditorTheme__ol1',
        'DefaultEditorTheme__ol2',
        'DefaultEditorTheme__ol3',
        'DefaultEditorTheme__ol4',
        'DefaultEditorTheme__ol5',
        ],
ul: 'DefaultEditorTheme__ul',
    },
ltr: 'DefaultEditorTheme__ltr',
    mark: 'DefaultEditorTheme__mark',
        markOverlap: 'DefaultEditorTheme__markOverlap',
            paragraph: 'DefaultEditorTheme__paragraph',
                quote: 'DefaultEditorTheme__quote',
                    rtl: 'DefaultEditorTheme__rtl',
                        table: 'DefaultEditorTheme__table',
                            tableCell: 'DefaultEditorTheme__tableCell',
                                tableCellHeader: 'DefaultEditorTheme__tableCellHeader',
                                    text: {
    bold: 'DefaultEditorTheme__textBold',
        code: 'DefaultEditorTheme__textCode',
            italic: 'DefaultEditorTheme__textItalic',
                strikethrough: 'DefaultEditorTheme__textStrikethrough',
                    subscript: 'DefaultEditorTheme__textSubscript',
                        superscript: 'DefaultEditorTheme__textSuperscript',
                            underline: 'DefaultEditorTheme__textUnderline',
                                underlineStrikethrough: 'DefaultEditorTheme__textUnderlineStrikethrough',
    },
}