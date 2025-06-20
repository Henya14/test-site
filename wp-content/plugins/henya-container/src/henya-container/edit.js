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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { PanelBody, __experimentalUnitControl as UnitControl, SelectControl, TextControl, ToggleControl, RangeControl } from '@wordpress/components';

const DISPLAY_TYPES = [
	{ label: 'Flex', value: 'flex' },
	{ label: 'Grid', value: 'grid' },
]

const FLEX_DIRECTION_TYPES = [
	{ label: 'Row', value: 'row' },
	{ label: 'Row-reverse', value: 'row-reverse' },
	{ label: 'Column', value: 'column' },
	{ label: 'Column-reverse', value: 'column-reverse' },
]

const FLEX_WRAP_TYPES = [
	{ label: 'No wrap', value: 'nowrap' },
	{ label: 'Wrap', value: 'wrap' },
	{ label: 'Wrap reverse', value: 'wrap-reverse' }
]

const JUSTIFY_CONTENT_TYPES = [
	{ label: 'flex-start', value: 'flex-start' },
	{ label: 'flex-end', value: 'flex-end' },
	{ label: 'start', value: 'start' },
	{ label: 'end', value: 'end' },
	{ label: 'left', value: 'left' },
	{ label: 'right', value: 'right' },
	{ label: 'center', value: 'center' },
	{ label: 'space-between', value: 'space-between' },
	{ label: 'space-around', value: 'space-around' },
	{ label: 'space-evenly', value: 'space-evenly' }
]

const ALIGN_ITEMS_TYPES = [
	{ label: 'stretch', value: 'stretch' },
	{ label: 'flex-start', value: 'flex-start' },
	{ label: 'start', value: 'start' },
	{ label: 'flex-end', value: 'flex-end' },
	{ label: 'end', value: 'end' },
	{ label: 'center', value: 'center' },
	{ label: 'baseline', value: 'baseline' }
]

const ALIGN_CONTENT_TYPES = [
	{ label: 'normal', value: 'normal' },
	{ label: 'stretch', value: 'stretch' },
	{ label: 'flex-start', value: 'flex-start' },
	{ label: 'start', value: 'start' },
	{ label: 'flex-end', value: 'flex-end' },
	{ label: 'end', value: 'end' },
	{ label: 'center', value: 'center' },
	{ label: 'space-between', value: 'space-between' },
	{ label: 'space-around', value: 'space-around' },
	{ label: 'space-evenly', value: 'space-evenly' }
]

const ALIGN_SELF_TYPES = [
	{ label: 'auto', value: 'auto' },
	{ label: 'stretch', value: 'stretch' },
	{ label: 'flex-start', value: 'flex-start' },
	{ label: 'start', value: 'start' },
	{ label: 'flex-end', value: 'flex-end' },
	{ label: 'end', value: 'end' },
	{ label: 'center', value: 'center' },
	{ label: 'baseline', value: 'baseline' }
]

export default function Edit({ attributes, setAttributes }) {

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
		flexGrow,
		minWidth,
		minHeight
	} = attributes
	const props = useBlockProps()

	return (
		<>
			<InspectorControls>
				<PanelBody title={`Container Settings`}>

					<ToggleControl
						label="Auto Width?"
						checked={width === 'auto' || !width}
						onChange={(newType) => setAttributes({ width: newType ? '' : '0px' })}
					/>
					{width !== "auto"  && width && <UnitControl
						label='Container width'
						value={width}
						onChange={(value) => setAttributes({ width: value })}

					/>}
					<ToggleControl
						label="Auto Height?"
						checked={height === 'auto'  || !height}
						onChange={(newType) => setAttributes({ height: newType ? '' : '0px' })}
					/>
					{height !== "auto" && height && <UnitControl
						label='Container height'
						value={height}
						onChange={(value) => setAttributes({ height: value })}

					/>}
					<SelectControl
						label="Display type"
						value={display}
						options={DISPLAY_TYPES}
						onChange={(newType) => setAttributes({ display: newType })}
					/>

					{display === 'flex' &&
						<SelectControl
							label="Flex Direction"
							value={flexDirection}
							options={FLEX_DIRECTION_TYPES}
							onChange={(newType) => setAttributes({ flexDirection: newType })}
						/>
					}
					{display === 'flex' &&
						<SelectControl
							label="Flex Wrap"
							value={flexWrap}
							options={FLEX_WRAP_TYPES}
							onChange={(newType) => setAttributes({ flexWrap: newType })}
						/>
					}

					<SelectControl
						label="Justify Content"
						value={justifyContent}
						options={JUSTIFY_CONTENT_TYPES}
						onChange={(newType) => setAttributes({ justifyContent: newType })}
					/>

					<SelectControl
						label="Align Items"
						value={alignItems}
						options={ALIGN_ITEMS_TYPES}
						onChange={(newType) => setAttributes({ alignItems: newType })}
					/>

					<SelectControl
						label="Align Content"
						value={alignContent}
						options={ALIGN_CONTENT_TYPES}
						onChange={(newType) => setAttributes({ alignContent: newType })}
					/>

					<UnitControl
						label='Row Gap'
						value={rowGap}
						onChange={(value) => setAttributes({ rowGap: value })}
					/>

					<UnitControl
						label='Column Gap'
						value={columnGap}
						onChange={(value) => setAttributes({ columnGap: value })}
					/>
					{display === 'grid' &&
						<>
							<TextControl
								label="Grid Template Columns"
								value={gridTemplateColumns}
								onChange={(value) => setAttributes({ gridTemplateColumns: value })}
							/>
							<TextControl
								label="Grid Template Rows"
								value={gridTemplateRows}
								onChange={(value) => setAttributes({ gridTemplateRows: value })}
							/>
						</>
					}
					<RangeControl
						label='Order'
						value={order}
						onChange={(value) => setAttributes({ order: value })}
						min={0}
						max={100}
					/>
					<SelectControl
						label="Align Self"
						value={alignSelf}
						options={ALIGN_SELF_TYPES}
						onChange={(newType) => setAttributes({ alignSelf: newType })}
					/>
					{display === 'flex' &&
						<RangeControl
							label='Flex Grow'
							value={flexGrow}
							onChange={(value) => setAttributes({ flexGrow: value })}
							min={0}
							max={100}
						/>
					}
					<UnitControl
						label='Min Width'
						value={minWidth}
						onChange={(value) => setAttributes({ minWidth: value })}
					/>
					<UnitControl
						label='Min Height'
						value={minHeight}
						onChange={(value) => setAttributes({ minHeight: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...props} style={{ ...props.style, ...(width? {width} : {}), ...(height? {height}: {}), display, flexDirection, flexWrap, justifyContent, alignItems, alignContent, rowGap, columnGap, gridTemplateColumns, gridTemplateRows, order, alignSelf, flexGrow, minWidth, minHeight }}>
				<InnerBlocks />
			</div>
		</>
	);
}
