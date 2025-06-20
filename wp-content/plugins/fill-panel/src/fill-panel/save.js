/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
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
// export default function save() {
// 	return (
// 		<p { ...useBlockProps.save() }>
// 			{ 'Fill Panel – hello from the saved content!' }
// 		</p>
// 	);
// }

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { substractHeader, width, height, zIndex } = attributes
	const substractValue = substractHeader ? "70px" : "0px"
	console.log(`attriiisss ${JSON.stringify(attributes)}`, attributes)
		return (
			<div  {...blockProps} className={`${blockProps.className} fill-wrap`} style={{  marginTop: 0 , ...blockProps.style, ...(width? { width: `${width}`} : {}), ...(height? {height: `calc(${height} - ${substractValue})`} : {}), ...(zIndex? {zIndex: `${zIndex}`, position: "relative"} : {})}}>
				<InnerBlocks.Content />
			</div>
		);
}

