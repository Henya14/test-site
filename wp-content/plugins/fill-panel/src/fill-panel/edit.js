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
import { PanelBody, __experimentalUnitControl as UnitControl, ToggleControl, RangeControl } from '@wordpress/components';

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
	const { substractHeader, width, height, zIndex } = attributes
	const substractValue = substractHeader ? "70px" : "0px"
	console.log(attributes)
	return (
		<>
			<InspectorControls>
				<PanelBody title={`Panel Settings`}>
					<ToggleControl
						label="Should substract header"
						checked={substractHeader}
						onChange={(newType) => setAttributes({ substractHeader: newType })}
					/>

					<UnitControl
						label='Panel width (vw)'
						value={width}
						onChange={(value) => setAttributes({ width: value })}
				
					/>
					<UnitControl
						label='Panel height (vh)'
						value={height}
						onChange={(value) => setAttributes({ height: value })}
		
					/>
					<RangeControl
						label='Z index'
						value={zIndex}
						onChange={(value) => setAttributes({ zIndex: value })}
						min={-10}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps} className={`${blockProps.className} fill-wrap`} style={{ marginTop: 0, ...blockProps.style, ...(width? { width: `${width}`} : {}), ...(height? {height: `calc(${height} - ${substractValue})`} : {}), ...(zIndex? {zIndex: `${zIndex}`, position: "relative"} : {}) }} >
				<InnerBlocks />
			</div>
		</>
	);
}
