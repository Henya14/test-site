/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scroll-anim/block.json":
/*!************************************!*\
  !*** ./src/scroll-anim/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/scroll-anim","version":"0.1.0","title":"Scroll Anim","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"anchor":true,"align":true,"alignWide":true,"background":{"backgroundImage":true},"color":{"background":true,"gradients":true},"layout":true,"spacing":{"padding":true,"margin":true},"dimensions":{"minHeight":true,"aspectRatio":true},"position":{"sticky":true}},"attributes":{"enabled":{"type":"boolean","default":false},"flexDirection":{"type":"string","default":"column"},"appearEnabled":{"type":"boolean","default":false},"exitEnabled":{"type":"boolean","default":false},"animationTimeline":{"type":"string","default":"scroll()"},"animationRangeStartType":{"type":"string","default":"cover"},"animationRangeStartPercent":{"type":"number","default":0},"animationRangeEndType":{"type":"string","default":"cover"},"animationRangeEndPercent":{"type":"number","default":100},"animationSettings":{"type":"object","default":{"Appear - Slide In":{"enabled":false,"slideStartX":"-500px","slideEndX":"0px","slideStartY":"-500px","slideEndY":"0px"},"Appear - Fade In":{"enabled":false,"startOpacity":"0%","endOpacity":"100%"},"Appear - Scale":{"enabled":false,"scaleStart":"0%","scaleEnd":"100%"},"Exit - Slide In":{"enabled":false,"slideStartX":"-500px","slideEndX":"0px","slideStartY":"-500px","slideEndY":"0px"},"Exit - Fade In":{"enabled":false,"startOpacity":"0%","endOpacity":"100%"},"Exit - Scale":{"enabled":false,"scaleStart":"0%","scaleEnd":"100%"}}},"animations":{"type":"array","default":[]}},"textdomain":"scroll-anim","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/scroll-anim/edit.js":
/*!*********************************!*\
  !*** ./src/scroll-anim/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/scroll-anim/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
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


const FLEX_DIRECTIONS = [{
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
}, {
  label: 'Initial',
  value: 'initial'
}, {
  label: 'Inherit',
  value: 'inherit'
}];
const ANIMATION_TYPES = [{
  label: 'Slide In',
  value: 'slide-in'
}, {
  label: 'Fade In',
  value: 'fade-in'
}, {
  label: 'Scale',
  value: 'scale'
}];
const ANIMATION_TIMELINE = [{
  label: 'View',
  value: 'view()'
}, {
  label: 'Scroll',
  value: 'scroll()'
}];
const ANIMATION_RANGE_TYPE = [{
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Contain',
  value: 'contain'
}, {
  label: 'Entry',
  value: 'entry'
}, {
  label: 'Entry-crossing',
  value: 'entry-crossing'
}, {
  label: 'Exit',
  value: 'exit'
}, {
  label: 'Exit-crossing',
  value: 'exit-crossing'
}];
const SLIDE_IN_DIRECTIONS = [{
  label: 'Up/Down',
  value: 'Y('
}, {
  label: 'Left/Right',
  value: 'X('
}];
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

function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const {
    enabled,
    appearEnabled,
    exitEnabled,
    animationRangeStartType,
    animationRangeStartPercent,
    animationRangeEndType,
    animationRangeEndPercent,
    animationTimeline,
    animationSettings,
    flexDirection
  } = attributes;
  const appearFadeInAnimationSettings = animationSettings['Appear - Fade In'];
  const appearSlideInAnimationSettings = animationSettings['Appear - Slide In'];
  const appearScaleAnimationSettings = animationSettings['Appear - Scale'];
  const exitFadeInAnimationSettings = animationSettings['Exit - Fade In'];
  const exitSlideInAnimationSettings = animationSettings['Exit - Slide In'];
  const exitScaleAnimationSettings = animationSettings['Exit - Scale'];
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    animationId: Math.random().toString(16).replaceAll('.', "a")
  });
  console.log("STYLE", blockProps.className);
  if (!flexDirection) {
    setState({
      flexDirection: 'column'
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: `Scroll Animation Settings`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Enabled",
          checked: enabled,
          onChange: newType => setAttributes({
            enabled: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Appear animation Enabled",
          checked: appearEnabled,
          onChange: newType => setAttributes({
            appearEnabled: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Exit animation Enabled",
          checked: exitEnabled,
          onChange: newType => setAttributes({
            exitEnabled: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Div Flex Direction",
          value: flexDirection,
          options: FLEX_DIRECTIONS,
          onChange: newType => setAttributes({
            flexDirection: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Animation Type",
          value: animationTimeline,
          options: ANIMATION_TIMELINE,
          onChange: newType => setAttributes({
            animationTimeline: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Animation range start type",
          value: animationRangeStartType,
          options: ANIMATION_RANGE_TYPE,
          onChange: newType => setAttributes({
            animationRangeStartType: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Scroll animation start percent (%)",
          value: animationRangeStartPercent,
          onChange: value => setAttributes({
            animationRangeStartPercent: value
          }),
          min: -50,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: "Animation range end type",
          value: animationRangeEndType,
          options: ANIMATION_RANGE_TYPE,
          onChange: newType => setAttributes({
            animationRangeEndType: newType
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: "Scroll animation end percent (%)",
          value: animationRangeEndPercent,
          onChange: value => setAttributes({
            animationRangeEndPercent: value
          }),
          min: -50,
          max: 300
        }), ["Appear", "Exit"].map(animationLifecycle => {
          return (animationLifecycle === "Appear" && appearEnabled || animationLifecycle === "Exit" && exitEnabled) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: `${animationLifecycle} Settings`,
            children: ANIMATION_TYPES.map(animationType => {
              const animationSettingKey = `${animationLifecycle} - ${animationType.label}`;
              const animationTypeSetting = animationSettings[animationSettingKey];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
                title: `${animationLifecycle} ${animationType.label} Settings`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                  label: "Enable scroll animation",
                  checked: animationTypeSetting.enabled,
                  onChange: newType => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        enabled: newType
                      }
                    }
                  })
                }), animationTypeSetting.slideStartX !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Transition relative start position X axis",
                  value: animationTypeSetting.slideStartX,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        slideStartX: value
                      }
                    }
                  })
                }), animationTypeSetting.slideEndX !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Transition relative end position X axis",
                  value: animationTypeSetting.slideEndX,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        slideEndX: value
                      }
                    }
                  })
                }), animationTypeSetting.slideStartY !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Transition relative start position Y axis",
                  value: animationTypeSetting.slideStartY,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        slideStartY: value
                      }
                    }
                  })
                }), animationTypeSetting.slideEndY !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Transition relative end position Y axis",
                  value: animationTypeSetting.slideEndY,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        slideEndY: value
                      }
                    }
                  })
                }), animationTypeSetting.startOpacity !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Start opacity value",
                  value: animationTypeSetting.startOpacity,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        startOpacity: value
                      }
                    }
                  })
                }), animationTypeSetting.endOpacity !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "End opacity value",
                  value: animationTypeSetting.endOpacity,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        endOpacity: value
                      }
                    }
                  })
                }), animationTypeSetting.scaleStart !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "Start scale value",
                  value: animationTypeSetting.scaleStart,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        scaleStart: value
                      }
                    }
                  })
                }), animationTypeSetting.scaleEnd !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  label: "End scale value",
                  value: animationTypeSetting.scaleEnd,
                  onChange: value => setAttributes({
                    animationSettings: {
                      ...animationSettings,
                      [animationSettingKey]: {
                        ...animationTypeSetting,
                        scaleEnd: value
                      }
                    }
                  }),
                  min: 0,
                  max: 100
                })]
              });
            })
          });
        })]
      })
    }), !enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...blockProps,
      style: {
        ...blockProps.style
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {})
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        ...blockProps.style,
        display: 'flex',
        flexDirection,
        flexGrow: 1,
        backgroundColor: 'unset !important'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
        children: `

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
						
					`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'flex',
          flexDirection,
          animation: `slideIn-${state.animationId} linear`,
          animationTimeline: animationTimeline,
          animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%`
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'flex',
            flexDirection,
            animation: `fade-${state.animationId} linear`,
            animationTimeline: animationTimeline,
            animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: 'flex',
              flexDirection,
              animation: `scale-${state.animationId} linear`,
              animationTimeline: animationTimeline,
              animationRange: `${animationRangeStartType} ${animationRangeStartPercent}% ${animationRangeEndType} ${animationRangeEndPercent}%`
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              ...blockProps,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {})
            })
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scroll-anim/editor.scss":
/*!*************************************!*\
  !*** ./src/scroll-anim/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scroll-anim/index.js":
/*!**********************************!*\
  !*** ./src/scroll-anim/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/scroll-anim/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/scroll-anim/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/scroll-anim/block.json");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, {});
  }
});

/***/ }),

/***/ "./src/scroll-anim/style.scss":
/*!************************************!*\
  !*** ./src/scroll-anim/style.scss ***!
  \************************************/
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 			"scroll-anim/index": 0,
/******/ 			"scroll-anim/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkscroll_anim"] = globalThis["webpackChunkscroll_anim"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["scroll-anim/style-index"], () => (__webpack_require__("./src/scroll-anim/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map