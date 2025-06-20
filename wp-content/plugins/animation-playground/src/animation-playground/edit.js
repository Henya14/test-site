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
import { RangeControl, Panel, PanelBody, ToggleControl, Button, Flex } from "@wordpress/components"

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useEffect, useState } from 'react';

const ANIMATION_TYPES = [
	{ label: 'Slide In', value: 'slide-in' },
	{ label: 'Fade In', value: 'fade-in' },
	{ label: 'Zoom In', value: 'zoom-in' },
];

function appendToTransform(transform, valueToAppend) {
	if (!valueToAppend) {
		return transform
	}

	if (!transform) {
		return valueToAppend
	}

	transform += ` ${valueToAppend}`
	return transform
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()
	console.log(blockProps)
	const { animationSettings } = attributes
	const [visible, setVisible] = useState(false)
	const [state, setState] = useState({ drawId: Math.round(Math.random() * 100000) })
	useEffect(() => {
		setVisible(false)
		setTimeout(() => setVisible(true), 500); // Trigger animation in editor
	}, [state, animationSettings]);
	console.log(animationSettings)

	const slideInAnimationSettings = animationSettings['Slide In']
	const slideInStartStyles = !slideInAnimationSettings.enabled ? {} : { transform: `translateX(${slideInAnimationSettings.animationStart}px)` }
	const slideInEndStyles = !slideInAnimationSettings.enabled ? {} : { transform: `translateX(${slideInAnimationSettings.animationEnd}px)`, transition: `transform ${slideInAnimationSettings.duration}ms ease-in` }

	const fadeInAnimationSettings = animationSettings['Fade In']
	const fadeInStartStyles = !fadeInAnimationSettings.enabled ? {} : { opacity: `${fadeInAnimationSettings.startOpacity}%`, }
	const fadeInEndStyles = !fadeInAnimationSettings.enabled ? {} : { opacity: `${fadeInAnimationSettings.endOpacity}%`, transition: `opacity ${fadeInAnimationSettings.duration}ms ease-in` }

	const zoomInAnimationSettings = animationSettings['Zoom In']
	const zoomInStartStyles = !zoomInAnimationSettings.enabled ? {} : { transform: `scale(${zoomInAnimationSettings.animationStart}%)`, }
	const zoomInEndStyles = !zoomInAnimationSettings.enabled ? {} : { transform: `scale(${zoomInAnimationSettings.animationEnd}%)`, transition: `transform ${fadeInAnimationSettings.duration}ms ease-in` }

	return (
		<>
			<InspectorControls>
				<PanelBody title="Animation Settings">
					<button className="button-redraw" type='primary' onClick={() => setState({ drawId: Math.round(Math.random() * 100000) })}>Redraw</button>
					{ANIMATION_TYPES.map(animationType => {
						const animationTypeSetting = animationSettings[animationType.label]

						return <PanelBody title={`${animationType.label} Settings`}>
							<ToggleControl
								label="Enabled"
								checked={animationTypeSetting.enabled}
								onChange={(newType) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, enabled: newType } } })}
							/>
							<RangeControl
								label='Transition duration (ms)'
								value={animationTypeSetting.duration}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, duration: value } } })}
								min={100}
								max={5000}
							/>
							<RangeControl
								label='Transition delay (ms)'
								value={animationTypeSetting.delay}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, delay: value } } })}
								min={0}
								max={5000}
							/>
							{animationTypeSetting.animationStart !== undefined && <RangeControl
								label='Transition relative start position (px)'
								value={animationTypeSetting.animationStart}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, animationStart: value } } })}
								min={-500}
								max={500}
							/>
							}
							{animationTypeSetting.animationEnd !== undefined && <RangeControl
								label='Transition relative end position (px)'
								value={animationTypeSetting.animationEnd}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, animationEnd: value } } })}
								min={-500}
								max={500}
							/>
							}
							{animationTypeSetting.startOpacity !== undefined && <RangeControl
								label='Start opacity value'
								value={animationTypeSetting.startOpacity}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, startOpacity: value } } })}
								min={0}
								max={100}
							/>
							}
							{animationTypeSetting.endOpacity !== undefined && <RangeControl
								label='End opacity value'
								value={animationTypeSetting.endOpacity}
								onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationType.label]: { ...animationTypeSetting, endOpacity: value } } })}
								min={0}
								max={100}
							/>
							}
						</PanelBody>

					})
					}
				</PanelBody>
			</InspectorControls>
			<div>

				<div style={visible ? { ...slideInEndStyles, display: 'flex' } : { ...slideInStartStyles, display: 'flex' }} >
					<div style={visible ? { ...fadeInEndStyles, display: 'flex' } : { ...fadeInStartStyles, display: 'flex' }}>
						<div style={visible ? { ...zoomInEndStyles, display: 'flex' } : { ...zoomInStartStyles, display: 'flex' }}>
							<div {...blockProps}>
								<InnerBlocks />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
