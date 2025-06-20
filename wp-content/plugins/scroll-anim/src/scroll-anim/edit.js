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
import { RangeControl, __experimentalUnitControl as UnitControl, PanelBody, ToggleControl, Button, SelectControl } from "@wordpress/components"



const FLEX_DIRECTIONS = [
	{ label: 'Row', value: 'row' },
	{ label: 'Row-reverse', value: 'row-reverse' },
	{ label: 'Column', value: 'column' },
	{ label: 'Column-reverse', value: 'column-reverse' },
	{ label: 'Initial', value: 'initial' },
	{ label: 'Inherit', value: 'inherit' },
];
	
const ANIMATION_TYPES = [
	{ label: 'Slide In', value: 'slide-in' },
	{ label: 'Fade In', value: 'fade-in' },
	{ label: 'Scale', value: 'scale' },
];

const ANIMATION_TIMELINE = [
	{ label: 'View', value: 'view()' },
	{ label: 'Scroll', value: 'scroll()' },
];

const ANIMATION_RANGE_TYPE = [
	{ label: 'Cover', value: 'cover' },
	{ label: 'Contain', value: 'contain' },
	{ label: 'Entry', value: 'entry' },
	{ label: 'Entry-crossing', value: 'entry-crossing' },
	{ label: 'Exit', value: 'exit' },
	{ label: 'Exit-crossing', value: 'exit-crossing' },
];


const SLIDE_IN_DIRECTIONS = [
	{ label: 'Up/Down', value: 'Y(' },
	{ label: 'Left/Right', value: 'X(' },
];
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useState } from 'react';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { enabled,
		appearEnabled,
		exitEnabled,
		animationRangeStartType,
		animationRangeStartPercent,
		animationRangeEndType,
		animationRangeEndPercent,
		animationTimeline,
		animationSettings,
		flexDirection
	} = attributes


	const appearFadeInAnimationSettings = animationSettings['Appear - Fade In'];
	const appearSlideInAnimationSettings = animationSettings['Appear - Slide In'];
	const appearScaleAnimationSettings = animationSettings['Appear - Scale'];
	const exitFadeInAnimationSettings = animationSettings['Exit - Fade In'];
	const exitSlideInAnimationSettings = animationSettings['Exit - Slide In'];
	const exitScaleAnimationSettings = animationSettings['Exit - Scale'];
	const [state, setState] = useState({ animationId: Math.random().toString(16).replaceAll('.', "a") })
	console.log("STYLE", blockProps.className)
	if(!flexDirection) {
		setState({flexDirection: 'column'})
	}
	return (
		<>
			<InspectorControls>

				<PanelBody title={`Scroll Animation Settings`}>
					<ToggleControl
						label="Enabled"
						checked={enabled}
						onChange={(newType) => setAttributes({ enabled: newType })}
					/>

					<ToggleControl
						label="Appear animation Enabled"
						checked={appearEnabled}
						onChange={(newType) => setAttributes({ appearEnabled: newType })}
					/>

					<ToggleControl
						label="Exit animation Enabled"
						checked={exitEnabled}
						onChange={(newType) => setAttributes({ exitEnabled: newType })}
					/>
					<SelectControl
						label="Div Flex Direction"
						value={flexDirection}
						options={FLEX_DIRECTIONS}
						onChange={(newType) => setAttributes({ flexDirection: newType })}
					/>

					<SelectControl
						label="Animation Type"
						value={animationTimeline}
						options={ANIMATION_TIMELINE}
						onChange={(newType) => setAttributes({ animationTimeline: newType })}
					/>
					<SelectControl
						label="Animation range start type"
						value={animationRangeStartType}
						options={ANIMATION_RANGE_TYPE}
						onChange={(newType) => setAttributes({ animationRangeStartType: newType })}
					/>
					
					<RangeControl
						label='Scroll animation start percent (%)'
						value={animationRangeStartPercent}
						onChange={(value) => setAttributes({ animationRangeStartPercent: value })}
						min={-50}
						max={300}
					/>
					<SelectControl
						label="Animation range end type"
						value={animationRangeEndType}
						options={ANIMATION_RANGE_TYPE}
						onChange={(newType) => setAttributes({ animationRangeEndType: newType })}
					/>
					<RangeControl
						label='Scroll animation end percent (%)'
						value={animationRangeEndPercent}
						onChange={(value) => setAttributes({ animationRangeEndPercent: value })}
						min={-50}
						max={300}
					/>
					{
						["Appear", "Exit"].map((animationLifecycle) => {
							return ((animationLifecycle === "Appear" && appearEnabled) || (animationLifecycle === "Exit" && exitEnabled)) &&
								<PanelBody title={`${animationLifecycle} Settings`}>
									{ANIMATION_TYPES.map(animationType => {
										const animationSettingKey = `${animationLifecycle} - ${animationType.label}`
										const animationTypeSetting = animationSettings[animationSettingKey]
										return <PanelBody title={`${animationLifecycle} ${animationType.label} Settings`}>
											<ToggleControl
												label="Enable scroll animation"
												checked={animationTypeSetting.enabled}
												onChange={(newType) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, enabled: newType } } })}
											/>

											{animationTypeSetting.slideStartX !== undefined && <UnitControl
												label='Transition relative start position X axis'
												value={animationTypeSetting.slideStartX}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, slideStartX: value } } })}

											/>
											}
											{animationTypeSetting.slideEndX !== undefined && <UnitControl
												label='Transition relative end position X axis'
												value={animationTypeSetting.slideEndX}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, slideEndX: value } } })}
											/>
											}
											{animationTypeSetting.slideStartY !== undefined && <UnitControl
												label='Transition relative start position Y axis'
												value={animationTypeSetting.slideStartY}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, slideStartY: value } } })}

											/>
											}
											{animationTypeSetting.slideEndY !== undefined && <UnitControl
												label='Transition relative end position Y axis'
												value={animationTypeSetting.slideEndY}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, slideEndY: value } } })}
											/>
											}
											{animationTypeSetting.startOpacity !== undefined && <UnitControl
												label='Start opacity value'
												value={animationTypeSetting.startOpacity}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, startOpacity: value } } })}
											/>
											}
											{animationTypeSetting.endOpacity !== undefined && <UnitControl
												label='End opacity value'
												value={animationTypeSetting.endOpacity}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, endOpacity: value } } })}
											/>
											}
											{animationTypeSetting.scaleStart !== undefined && <UnitControl
												label='Start scale value'
												value={animationTypeSetting.scaleStart}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, scaleStart: value } } })}
											/>
											}
											{animationTypeSetting.scaleEnd !== undefined && <UnitControl
												label='End scale value'
												value={animationTypeSetting.scaleEnd}
												onChange={(value) => setAttributes({ animationSettings: { ...animationSettings, [animationSettingKey]: { ...animationTypeSetting, scaleEnd: value } } })}
												min={0}
												max={100}
											/>
											}
										</PanelBody>


									})}
								</PanelBody>
						})
					}

				</PanelBody>

			</InspectorControls>


			{!enabled ?
				<div {...blockProps} style={{ ...blockProps.style }}>
					<InnerBlocks />
				</div> :
				<div style={{...blockProps.style, display: 'flex', flexDirection,  flexGrow: 1, backgroundColor: 'unset !important'}}>
					<style>
						{`

								@keyFrames slideIn-${state.animationId} {
									0% {
										${appearSlideInAnimationSettings.enabled ? `transform: translateX(${appearSlideInAnimationSettings.slideStartX}) translateY(${appearSlideInAnimationSettings.slideStartY});` : ''}
									}

									${exitSlideInAnimationSettings.enabled ? '50%' : '100%'} {
										${appearSlideInAnimationSettings.enabled ? `transform: translateX(${appearSlideInAnimationSettings.slideEndX}) translateY(${appearSlideInAnimationSettings.slideEndY});` : exitSlideInAnimationSettings.enabled ? `transform: translateX(${exitSlideInAnimationSettings.slideStartX}) translateY(${exitSlideInAnimationSettings.slideStartY});` : ''}
									}
									
									${exitSlideInAnimationSettings.enabled ? `100% {
											transform: translateX(${exitSlideInAnimationSettings.slideEndX})  translateY(${exitSlideInAnimationSettings.slideEndY});
										}` : ''} 

									
								}

								@keyframes fade-${state.animationId} {
									0% {
										${appearFadeInAnimationSettings.enabled ? `opacity: ${appearFadeInAnimationSettings.startOpacity};` : ''}
									}

									${exitFadeInAnimationSettings.enabled ? '50%' : '100%'} {
										${appearFadeInAnimationSettings.enabled ? `opacity: ${appearFadeInAnimationSettings.endOpacity};` : exitFadeInAnimationSettings.enabled ? `opacity: ${exitFadeInAnimationSettings.startOpacity};` : ''}
									}
									
									${exitFadeInAnimationSettings.enabled ? `100% {
											opacity: ${exitFadeInAnimationSettings.endOpacity};
									}` : ''} 
								}
								@keyframes scale-${state.animationId} {
									0% {
										${appearScaleAnimationSettings.enabled ? `transform: scale(${appearScaleAnimationSettings.scaleStart});` : ''}
									}

									${exitScaleAnimationSettings.enabled ? '50%' : '100%'} {
										${appearScaleAnimationSettings.enabled ? `transform: scale(${appearScaleAnimationSettings.scaleEnd});` : exitScaleAnimationSettings.enabled ? `transform: scale(${exitScaleAnimationSettings.slideStart});` : ''}
									}
									
									${exitScaleAnimationSettings.enabled ? `100% {
											transform: scale(${exitScaleAnimationSettings.scaleEnd})
									}` : ''} 
								}
						
					`}
					</style>
					<div style={{ display: 'flex', flexDirection, animation: `slideIn-${state.animationId} linear`, animationTimeline: animationTimeline, animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%` }}>
						<div style={{ display: 'flex', flexDirection,  animation: `fade-${state.animationId} linear`, animationTimeline: animationTimeline, animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%` }}>
							<div style={{ display: 'flex', flexDirection, animation: `scale-${state.animationId} linear`, animationTimeline: animationTimeline, animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%` }}>
								<div {...blockProps} >
									<InnerBlocks />
								</div>
							</div>
						</div>
					</div>
				</div>
			}


		</>
	);
}
