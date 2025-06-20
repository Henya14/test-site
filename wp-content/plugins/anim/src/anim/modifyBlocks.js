import { addFilter } from '@wordpress/hooks';

const attributes = {
    animationType: {
        type: 'string',
        default: 'slide-in',
    },
    animationDuration: {
        type: 'number',
        default: 1,
    },
}

const modifyAllBlockAttributes = (settings, name) => {
    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            ...attributes,
        },
    };
};

addFilter('blocks.registerBlockType', 'custom/global-settings', modifyAllBlockAttributes);

const modifyAllBlockEdit = (BlockEdit) => (props) => {
    const { attributes, setAttributes } = props;

    return (
        <>
            <BlockEdit {...props} />
            <InspectorControls>
                <PanelBody title="Animation Settings">
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
                        /> : <></>}
                </PanelBody>
            </InspectorControls>
        </>
    );
};

addFilter('editor.BlockEdit', 'custom/global-settings', modifyAllBlockEdit);
