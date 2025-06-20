/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useEffect, useState } from 'react';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

const ANIMATION_TYPES = [
    { label: 'Slide In', value: 'slide-in' },
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Zoom In', value: 'zoom-in' },
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { animationType, animationDuration, startPoint, animationOn } = attributes;
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setTimeout(() => setVisible(true), 500); // Trigger animation in editor
	}, []);
	return (<>
	<InspectorControls>
                <PanelBody title="Animation Settings2">
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
		<div className={`${visible ? "show-animation" : ""}`} style={animationOn ? { transform: `translateX(-${startPoint}px)`, transition: `transform ${animationDuration}s ease-in` } : {}}>
			<InnerBlocks />
		</div>
	</>
	);
}
