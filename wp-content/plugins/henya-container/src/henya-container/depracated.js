

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

const v1 = {
    attributes: {
        width: {
            type: "string",
            default: "auto"
        },
        height: {
            type: "string",
            default: "auto"
        },
        display: {
            type: "string",
            default: "flex"
        },
        flexDirection: {
            type: "string",
            default: "row"
        },
        flexWrap: {
            type: "string",
            default: "nowwrap"
        },
        justifyContent: {
            type: "string",
            default: "flex-start"
        },
        alignItems: {
            type: "string",
            default: "strech"
        },
        alignContent: {
            type: "string",
            default: "normal"
        },
        rowGap: {
            type: "string",
            default: "0px"
        },
        columnGap: {
            type: "string",
            default: "0px"
        },
        gridTemplateColumns: {
            type: "string",
            default: ""
        },
        gridTemplateRows: {
            type: "string",
            default: ""
        },
        order: {
            type: "number",
            default: 0
        },
        alignSelf: {
            type: "string",
            default: "auto"
        },
        flexGrow: {
            type: "number",
            default: 0
        }
    },
    save: ({ attributes }) => {
        const props = useBlockProps.save()
        const {
            width,
            height,
            display,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            alignContent,
            rowGap,
            columnGap,
            gridTemplateColumns,
            gridTemplateRows,
            order,
            alignSelf,
            flexGrow } = attributes
        return (
            <div {...props} style={{ ...props.style, width, height, display, flexDirection, flexWrap, justifyContent, alignItems, alignContent, rowGap, columnGap, gridTemplateColumns, gridTemplateRows, order, alignSelf, flexGrow }}>
                <InnerBlocks.Content />
            </div>
        );
    }

}

export default [v1]