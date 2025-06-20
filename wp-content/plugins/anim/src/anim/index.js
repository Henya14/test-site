/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import {
    InnerBlocks,
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    SelectControl,
    ToggleControl
} from '@wordpress/components';
import { cloneElement, createElement } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

import { addFilter } from '@wordpress/hooks';


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save,
    attributes: {
        animationType: {
            type: 'string',
            default: 'fade-in',
        },
        animationDuration: {
            type: 'number',
            default: 1.0,
        },
        animationOn: {
        type: 'boolean',
        default: false,
    },
    }
});



const attributes = {
    animationType: {
        type: 'string',
        default: 'fade-in',
    },
    animationDuration: {
        type: 'number',
        default: 1.0,
    },
    animationOn: {
        type: 'boolean',
        default: false,
    },
}

const modifyAllBlockAttributes = (settings, name) => {
    if (name !== 'core/group') {
        return settings;
    }
    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            ...attributes,
        },
    };
};




//addFilter('blocks.registerBlockType', 'custom/global-settings', modifyAllBlockAttributes);

const ANIMATION_TYPES = [
    { label: 'Slide In', value: 'slide-in' },
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Zoom In', value: 'zoom-in' }
];
const modifyAllBlockEdit = (BlockEdit) => (props) => {
    const { attributes, setAttributes } = props;
    const { animationType, animationDuration, animationOn } = attributes;
    return (
        <>
            <BlockEdit {...props} />
            <InspectorControls>
                <PanelBody title="Animation Settings">
                    <ToggleControl
                        label="Animation on"
                        checked={animationOn}
                        onChange={(newType) => setAttributes({ animationOn: newType, animationType: newType ? 'slide-in' : undefined, animationDuration: 1.0 })}
                    />
                    {animationOn ?
                        <>
                            <SelectControl
                                label="Animation Type"
                                value={animationType}
                                options={ANIMATION_TYPES}
                                onChange={(newType) => setAttributes({ animationType: newType })}
                            />
                            {animationType === 'slide-in' || true ?
                                <RangeControl
                                    label="Animation Duration (seconds)"
                                    value={animationDuration}
                                    onChange={(newDuration) => setAttributes({ animationDuration: newDuration })}
                                    min={0.5}
                                    max={5}

                                    step={0.1}
                                /> : <></>} </> :
                        <>

                        </>
                    }
                </PanelBody>
            </InspectorControls>
        </>
    );
};

//addFilter('editor.BlockEdit', 'custom/global-settings', modifyAllBlockEdit);


function modifySave(props, name, attributes) {

    let { animationType, animationDuration, animationOn } = attributes;
    if (name.name.startsWith("core/he")){
        console.log("HEEEEE", attributes)
    }
    if (!animationOn ) {
        return props
    }

    if(!animationType) {
        animationType = 'slide-in'
    }
    let newProps = { ...props }
    let className = (newProps.className != undefined) ? newProps.className : '';
    let style = (newProps.style != undefined) ? newProps.style : {};
    if (animationType) {
        className = className.split(" ").filter(cl => !cl.startsWith("animate-")).join(" ")
        className += ` animate-${animationType}`
        props.className = className
    
    }

    if(!animationDuration) {
        animationDuration = 1.0
    }

    if (animationDuration) {
        style = { ...style, animationDuration: `${animationDuration}s` }
        props.style = style
    }
    console.log("SAVEEEEEE", props)
    return props
}



//addFilter('blocks.getSaveContent.extraProps', 'custom/extra-save-content', modifySave)

// import { createHigherOrderComponent } from '@wordpress/compose';
// const withAnimation = createHigherOrderComponent(
//     (BlockListBlock) => {

//         return (props) => {

//             const {
//                 name: blockName,
//                 attributes: { animationType, animationDuration },
//             } = props;
//             if (!animationType || !animationDuration) {
//                 console.log("ITTTTT", animationType, animationDuration)
//                 return <BlockListBlock {...props} />
//             }
//             let className = (props.className != undefined) ? props.className : '';
//             let style = (props.style != undefined) ? props.style : {};


//             // Setup new props to add inline rotate style
//             const newProps = {
//                 ...props,
//             };
//             console.log("VALAMI", props.className, props.style, style)
//             if (animationType) {
//                 className += ` animate-${animationType}`
//                 Object.assign(newProps, { className })
//             }

//             if (animationDuration) {
//                 style = { ...style, animationDuration: `${animationDuration}s` }
//                 Object.assign(newProps, { style })
//             }

//             return <BlockListBlock {...newProps} />;
//         }
//     },
//     'withAnimation'
// );



const modifyEditorBlockList = (BlockListBlock) => (props) => {
    let {
        attributes: { animationType, animationDuration, animationOn },
    } = props;

    if(!animationOn) {
        return createElement(BlockListBlock, {
        ...props,
    });
    }

    if (!animationType) {
        animationType = 'slide-in'
    }

    if (!animationDuration) {
        animationDuration = 1.0
    }
    let className = (props.className != undefined) ? props.className : '';
    let style = (props.style != undefined) ? props.style : {};
    const newProps = {
        ...props,
    };
    if (animationType) {
        className += ` animate-${animationType}`
        Object.assign(newProps, { className: className.trim() })
    }

    if (animationDuration) {
        style = { ...style, animationDuration: `${animationDuration}s` }
        Object.assign(newProps, { style })
    }

    console.log("EDITORRR", newProps)

    return <BlockListBlock {...newProps} wrapperProps={{style: {...style, animationDuration: `${animationDuration}s`}}} />;
};

// wp.hooks.addFilter(
//     'editor.BlockListBlock',
//     'gutrs/with-rotate-style',
//     modifyEditorBlockList
// );


// const addCustomAttributeToSaveElement = (element, blockType, attributes) => {
//     let { animationType, animationDuration, animationOn } = attributes;
//     console.log("GEEEEE", attributes,blockType)
//     if (!animationOn) {
//         return element
//     }

//     if (!animationType) {
//         animationType = 'slide-in'
//     }

//     if (!animationDuration) {
//         animationDuration = 1.0
//     }
//     let className = (props.className != undefined) ? props.className : '';
//     let style = (props.style != undefined) ? props.style : {};
//     const newProps = {
//         ...props,
//     };
//     if (animationType) {
//         className += ` animate-${animationType}`
//         Object.assign(newProps, { className })
//     }

//     if (animationDuration) {
//         style = { ...style, animationDuration: `${animationDuration}s` }
//         Object.assign(newProps, { style })
//     }
//     if (blockType.name.startsWith('core/') && attributes.customAttribute) {
//         return React.cloneElement(element, { ...newProps });
//     }
//     return element;
// };
// addFilter('blocks.getSaveElement', 'custom/custom-attribute-save', addCustomAttributeToSaveElement);

// Modify block editor appearance based on the custom attribute
// const withCustomEditorStyles = createHigherOrderComponent((BlockListBlock) => {
//     return (props) => {
//         console.log("NAAAA", props)
//         let {
//             attributes: { animationType, animationDuration, animationOn },
//         } = props;

//         if (!animationOn) {
//             return  <BlockListBlock {...props} />
//         }

//         if (!animationType) {
//             animationType = 'slide-in'
//         }

//         if (!animationDuration) {
//             animationDuration = 1.0
//         }
//         let className = (props.className != undefined) ? props.className : '';
//         let style = (props.style != undefined) ? props.style : {};
//         const newProps = {
//             ...props,
//         };
//         if (animationType) {
//             className += ` animate-${animationType}`
//             Object.assign(newProps, { className })
//         }

//         if (animationDuration) {
//             style = { ...style, animationDuration: `${animationDuration}s` }
//             Object.assign(newProps, { style })
        
//         }
//         console.log("JOGEYYY")

//         return <BlockListBlock {...newProps} />;
//     };
// }, 'withCustomEditorStyles');

// addFilter('editor.BlockListBlock', 'custom/custom-attribute-editor-styles', withCustomEditorStyles);