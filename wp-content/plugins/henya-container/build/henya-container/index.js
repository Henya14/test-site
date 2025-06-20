/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/henya-container/block.json":
/*!****************************************!*\
  !*** ./src/henya-container/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/henya-container","version":"0.1.0","title":"Henya Container","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":true,"alignWide":true,"background":{"backgroundImage":true},"className":true,"color":{"background":true},"customClassName":true,"position":{"sticky":true},"dimensions":{"minHeight":true},"spacing":{"margin":true,"padding":true}},"attributes":{"width":{"type":"string","default":""},"height":{"type":"string","default":""},"display":{"type":"string","default":"flex"},"flexDirection":{"type":"string","default":"row"},"flexWrap":{"type":"string","default":"nowwrap"},"justifyContent":{"type":"string","default":"flex-start"},"alignItems":{"type":"string","default":"strech"},"alignContent":{"type":"string","default":"normal"},"rowGap":{"type":"string","default":"0px"},"columnGap":{"type":"string","default":"0px"},"gridTemplateColumns":{"type":"string","default":""},"gridTemplateRows":{"type":"string","default":""},"order":{"type":"number","default":0},"alignSelf":{"type":"string","default":"auto"},"flexGrow":{"type":"number","default":0},"minWidth":{"type":"string","default":"0px"},"minHeight":{"type":"string","default":"0px"}},"textdomain":"henya-container","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/henya-container/depracated.js":
/*!*******************************************!*\
  !*** ./src/henya-container/depracated.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


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
  save: ({
    attributes
  }) => {
    const props = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
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
      flexGrow
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ...props,
      style: {
        ...props.style,
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
        flexGrow
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([v1]);

/***/ }),

/***/ "./src/henya-container/edit.js":
/*!*************************************!*\
  !*** ./src/henya-container/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/henya-container/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
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


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


const DISPLAY_TYPES = [{
  label: 'Flex',
  value: 'flex'
}, {
  label: 'Grid',
  value: 'grid'
}];
const FLEX_DIRECTION_TYPES = [{
  label: 'Row',
  value: 'row'
}, {
  label: 'Row-reverse',
  value: 'row-reverse'
}, {
  label: 'Column',
  value: 'column'
}, {
  label: 'Column-reverse',
  value: 'column-reverse'
}];
const FLEX_WRAP_TYPES = [{
  label: 'No wrap',
  value: 'nowrap'
}, {
  label: 'Wrap',
  value: 'wrap'
}, {
  label: 'Wrap reverse',
  value: 'wrap-reverse'
}];
const JUSTIFY_CONTENT_TYPES = [{
  label: 'flex-start',
  value: 'flex-start'
}, {
  label: 'flex-end',
  value: 'flex-end'
}, {
  label: 'start',
  value: 'start'
}, {
  label: 'end',
  value: 'end'
}, {
  label: 'left',
  value: 'left'
}, {
  label: 'right',
  value: 'right'
}, {
  label: 'center',
  value: 'center'
}, {
  label: 'space-between',
  value: 'space-between'
}, {
  label: 'space-around',
  value: 'space-around'
}, {
  label: 'space-evenly',
  value: 'space-evenly'
}];
const ALIGN_ITEMS_TYPES = [{
  label: 'stretch',
  value: 'stretch'
}, {
  label: 'flex-start',
  value: 'flex-start'
}, {
  label: 'start',
  value: 'start'
}, {
  label: 'flex-end',
  value: 'flex-end'
}, {
  label: 'end',
  value: 'end'
}, {
  label: 'center',
  value: 'center'
}, {
  label: 'baseline',
  value: 'baseline'
}];
const ALIGN_CONTENT_TYPES = [{
  label: 'normal',
  value: 'normal'
}, {
  label: 'stretch',
  value: 'stretch'
}, {
  label: 'flex-start',
  value: 'flex-start'
}, {
  label: 'start',
  value: 'start'
}, {
  label: 'flex-end',
  value: 'flex-end'
}, {
  label: 'end',
  value: 'end'
}, {
  label: 'center',
  value: 'center'
}, {
  label: 'space-between',
  value: 'space-between'
}, {
  label: 'space-around',
  value: 'space-around'
}, {
  label: 'space-evenly',
  value: 'space-evenly'
}];
const ALIGN_SELF_TYPES = [{
  label: 'auto',
  value: 'auto'
}, {
  label: 'stretch',
  value: 'stretch'
}, {
  label: 'flex-start',
  value: 'flex-start'
}, {
  label: 'start',
  value: 'start'
}, {
  label: 'flex-end',
  value: 'flex-end'
}, {
  label: 'end',
  value: 'end'
}, {
  label: 'center',
  value: 'center'
}, {
  label: 'baseline',
  value: 'baseline'
}];
function Edit({
  attributes,
  setAttributes
}) {
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
  } = attributes;
  const props = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: `Container Settings`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: "Auto Width?",
          checked: width === 'auto' || !width,
          onChange: newType => setAttributes({
            width: newType ? '' : '0px'
          })
        }), width !== "auto" && width && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Container width",
          value: width,
          onChange: value => setAttributes({
            width: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: "Auto Height?",
          checked: height === 'auto' || !height,
          onChange: newType => setAttributes({
            height: newType ? '' : '0px'
          })
        }), height !== "auto" && height && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Container height",
          value: height,
          onChange: value => setAttributes({
            height: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Display type",
          value: display,
          options: DISPLAY_TYPES,
          onChange: newType => setAttributes({
            display: newType
          })
        }), display === 'flex' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Flex Direction",
          value: flexDirection,
          options: FLEX_DIRECTION_TYPES,
          onChange: newType => setAttributes({
            flexDirection: newType
          })
        }), display === 'flex' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Flex Wrap",
          value: flexWrap,
          options: FLEX_WRAP_TYPES,
          onChange: newType => setAttributes({
            flexWrap: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Justify Content",
          value: justifyContent,
          options: JUSTIFY_CONTENT_TYPES,
          onChange: newType => setAttributes({
            justifyContent: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Align Items",
          value: alignItems,
          options: ALIGN_ITEMS_TYPES,
          onChange: newType => setAttributes({
            alignItems: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Align Content",
          value: alignContent,
          options: ALIGN_CONTENT_TYPES,
          onChange: newType => setAttributes({
            alignContent: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Row Gap",
          value: rowGap,
          onChange: value => setAttributes({
            rowGap: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Column Gap",
          value: columnGap,
          onChange: value => setAttributes({
            columnGap: value
          })
        }), display === 'grid' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Grid Template Columns",
            value: gridTemplateColumns,
            onChange: value => setAttributes({
              gridTemplateColumns: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Grid Template Rows",
            value: gridTemplateRows,
            onChange: value => setAttributes({
              gridTemplateRows: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Order",
          value: order,
          onChange: value => setAttributes({
            order: value
          }),
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Align Self",
          value: alignSelf,
          options: ALIGN_SELF_TYPES,
          onChange: newType => setAttributes({
            alignSelf: newType
          })
        }), display === 'flex' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Flex Grow",
          value: flexGrow,
          onChange: value => setAttributes({
            flexGrow: value
          }),
          min: 0,
          max: 100
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Min Width",
          value: minWidth,
          onChange: value => setAttributes({
            minWidth: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: "Min Height",
          value: minHeight,
          onChange: value => setAttributes({
            minHeight: value
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...props,
      style: {
        ...props.style,
        ...(width ? {
          width
        } : {}),
        ...(height ? {
          height
        } : {}),
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
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {})
    })]
  });
}

/***/ }),

/***/ "./src/henya-container/editor.scss":
/*!*****************************************!*\
  !*** ./src/henya-container/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/henya-container/index.js":
/*!**************************************!*\
  !*** ./src/henya-container/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/henya-container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/henya-container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/henya-container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/henya-container/block.json");
/* harmony import */ var _depracated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./depracated */ "./src/henya-container/depracated.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _depracated__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/henya-container/save.js":
/*!*************************************!*\
  !*** ./src/henya-container/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  const props = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
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
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...props,
    style: {
      ...props.style,
      ...(width ? {
        width
      } : {}),
      ...(height ? {
        height
      } : {}),
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
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/henya-container/style.scss":
/*!****************************************!*\
  !*** ./src/henya-container/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"henya-container/index": 0,
/******/ 			"henya-container/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkhenya_container"] = globalThis["webpackChunkhenya_container"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["henya-container/style-index"], () => (__webpack_require__("./src/henya-container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map