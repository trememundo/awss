/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"f467ca867ef6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NmIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY0NjdjYTg2N2VmNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux.tsx":
/*!***************************!*\
  !*** ./src/app/redux.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StoreProvider),\n/* harmony export */   makeStore: () => (/* binding */ makeStore),\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./src/state/index.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_state__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/api */ \"(app-pages-browser)/./src/state/api.ts\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n// Reducers combinados\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n    global: (_state__WEBPACK_IMPORTED_MODULE_1___default()),\n    [_state_api__WEBPACK_IMPORTED_MODULE_2__.api.reducerPath]: _state_api__WEBPACK_IMPORTED_MODULE_2__.api.reducer\n});\n// Tienda Redux o Store\nconst makeStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({\n        reducer: rootReducer,\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_state_api__WEBPACK_IMPORTED_MODULE_2__.api.middleware)\n    });\n};\nconst useAppDispatch = ()=>{\n    _s();\n    return (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n};\n_s(useAppDispatch, \"jI3HA1r1Cumjdbu14H7G+TUj798=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch\n    ];\n});\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector;\n// Provider\nfunction StoreProvider(param) {\n    let { children } = param;\n    _s1();\n    const storeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    if (!storeRef.current) {\n        storeRef.current = makeStore();\n        (0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_7__.setupListeners)(storeRef.current.dispatch);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n        store: storeRef.current,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\redux.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s1(StoreProvider, \"EtiU7pDwGhTDZwMnrKEqZbxjqXE=\");\n_c = StoreProvider;\nvar _c;\n$RefreshReg$(_c, \"StoreProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDb0I7QUFDbkQ7QUFDRjtBQUNzQjtBQUN6QjtBQUUvQixzQkFBc0I7QUFDdEIsTUFBTVMsY0FBY1QsaUVBQWVBLENBQUM7SUFDaENVLFFBQVFMLCtDQUFhQTtJQUNyQixDQUFDQywyQ0FBR0EsQ0FBQ0ssV0FBVyxDQUFDLEVBQUVMLDJDQUFHQSxDQUFDTSxPQUFPO0FBQ2xDO0FBRUEsdUJBQXVCO0FBQ2hCLE1BQU1DLFlBQVk7SUFDckIsT0FBT1osZ0VBQWNBLENBQUM7UUFDbEJXLFNBQVNIO1FBQ1RLLFlBQVksQ0FBQ0MsdUJBQ1RBLHVCQUF1QkMsTUFBTSxDQUFDViwyQ0FBR0EsQ0FBQ1EsVUFBVTtJQUNwRDtBQUNKLEVBQUU7QUFLSyxNQUFNRyxpQkFBaUI7O0lBQU1kLE9BQUFBLHdEQUFXQTtBQUFjLEVBQUU7R0FBbERjOztRQUF1QmQsb0RBQVdBOzs7QUFDeEMsTUFBTWUsaUJBQWtEZCxvREFBV0EsQ0FBQztBQUUzRSxXQUFXO0FBQ0ksU0FBU2UsY0FBYyxLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUNsQyxNQUFNQyxXQUFXYiw2Q0FBTUE7SUFDdkIsSUFBSSxDQUFDYSxTQUFTQyxPQUFPLEVBQUU7UUFDbkJELFNBQVNDLE9BQU8sR0FBR1Q7UUFDbkJOLHNFQUFjQSxDQUFDYyxTQUFTQyxPQUFPLENBQUNDLFFBQVE7SUFDNUM7SUFFQSxxQkFDSSw4REFBQ3JCLGlEQUFRQTtRQUFDc0IsT0FBT0gsU0FBU0MsT0FBTztrQkFDNUJGOzs7Ozs7QUFHYjtJQVp3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWR1eC50c3g/ZmU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIFByb3ZpZGVyLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBnbG9iYWxSZWR1Y2VyIGZyb20gJ0Avc3RhdGUnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zdGF0ZS9hcGlcIjtcclxuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFJlZHVjZXJzIGNvbWJpbmFkb3NcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgZ2xvYmFsOiBnbG9iYWxSZWR1Y2VyLFxyXG4gICAgW2FwaS5yZWR1Y2VyUGF0aF06IGFwaS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIFRpZW5kYSBSZWR1eCBvIFN0b3JlXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgICAgIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgICAgICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYXBpLm1pZGRsZXdhcmUpLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbXCJnZXRTdGF0ZVwiXT47XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbXCJkaXNwYXRjaFwiXTtcclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5cclxuLy8gUHJvdmlkZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgICBjb25zdCBzdG9yZVJlZiA9IHVzZVJlZjxBcHBTdG9yZT4oKTtcclxuICAgIGlmICghc3RvcmVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHN0b3JlUmVmLmN1cnJlbnQgPSBtYWtlU3RvcmUoKTtcclxuICAgICAgICBzZXR1cExpc3RlbmVycyhzdG9yZVJlZi5jdXJyZW50LmRpc3BhdGNoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmVSZWYuY3VycmVudH0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJQcm92aWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJnbG9iYWxSZWR1Y2VyIiwiYXBpIiwic2V0dXBMaXN0ZW5lcnMiLCJ1c2VSZWYiLCJyb290UmVkdWNlciIsImdsb2JhbCIsInJlZHVjZXJQYXRoIiwicmVkdWNlciIsIm1ha2VTdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdG9yZVJlZiIsImN1cnJlbnQiLCJkaXNwYXRjaCIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/state/index.ts":
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});