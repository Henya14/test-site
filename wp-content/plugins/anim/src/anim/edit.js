/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
    InnerBlocks,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    ToggleControl
} from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const ANIMATION_TYPES = [
    { label: 'Slide In', value: 'slide-in' },
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Zoom In', value: 'zoom-in' },
];

export default function Edit({ attributes, setAttributes }) {
    const { animationType, animationDuration, animationOn } = attributes;

    return (
        <>
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
            <div className={`animate-${animationType}`} style={{ animationDuration: `${animationDuration}s` }}>
                <InnerBlocks />
            </div>
        </>
    );
}