"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"766215219d70\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NmIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjc2NjIxNTIxOWQ3MFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/DashboardWrapper.tsx":
/*!**************************************!*\
  !*** ./src/app/DashboardWrapper.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardWrapper: () => (/* binding */ DashboardWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(components)/Navbar */ \"(app-pages-browser)/./src/app/(components)/Navbar.tsx\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* __next_internal_client_entry_do_not_use__ DashboardWrapper auto */ \nvar _s = $RefreshSig$();\n\n\nconst DashboardLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const isSidebarCollapsed = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.global.isSidebarCoolapsed);\n    const isDarkMode = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.global.isDarkMode);\n    useEffect(()=>{\n        if (isDarkMode) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.add(\"light\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(isDarkMode ? \"dark\" : \"light\", \" flex bg-gray-50 text-gray-900 w-full min-h-screen\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex flex-col w-full h-full py-7 px-9 bg-gray-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\DashboardWrapper.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\DashboardWrapper.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\DashboardWrapper.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"BNlsxlXWQvoYRyZm9iTDsEWGq3A=\", false, function() {\n    return [\n        _redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DashboardLayout;\nconst DashboardWrapper = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardLayout, {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\DashboardWrapper.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Sisten\\\\frontend\\\\src\\\\app\\\\DashboardWrapper.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = DashboardWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardLayout\");\n$RefreshReg$(_c1, \"DashboardWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRGFzaGJvYXJkV3JhcHBlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBDO0FBQ2E7QUFFdkQsTUFBTUcsa0JBQWtCO1FBQUMsRUFBQ0MsUUFBUSxFQUE0Qjs7SUFDNUQsTUFBTUMscUJBQXFCSCxzREFBY0EsQ0FDdkMsQ0FBQ0ksUUFBUUEsTUFBTUMsTUFBTSxDQUFDQyxrQkFBa0I7SUFFMUMsTUFBTUMsYUFBYVAsc0RBQWNBLENBQUMsQ0FBQ0ksUUFBUUEsTUFBTUMsTUFBTSxDQUFDRSxVQUFVO0lBQ2xFQyxVQUFVO1FBQ1IsSUFBR0QsWUFBVztZQUNaRSxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3pDLE9BQUs7WUFDSEgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN6QztJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVcsR0FBaUMsT0FBOUJQLGFBQWEsU0FBUyxTQUFRO2tCQUNqRCw0RUFBQ1E7WUFBS0QsV0FBVTs7OEJBQ1osOERBQUNoQiwwREFBTUE7Ozs7O2dCQUNOSTs7Ozs7Ozs7Ozs7O0FBS1Q7R0FyQk1EOztRQUN1QkQsa0RBQWNBO1FBR3RCQSxrREFBY0E7OztLQUo3QkM7QUF3QkMsTUFBTWUsbUJBQW1CO1FBQUMsRUFBQ2QsUUFBUSxFQUE0QjtJQUNwRSxxQkFDRSw4REFBQ0gsOENBQWFBO2tCQUNaLDRFQUFDRTtzQkFBaUJDOzs7Ozs7Ozs7OztBQUl4QixFQUFDO01BUFljIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvRGFzaGJvYXJkV3JhcHBlci50c3g/ZTM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8oY29tcG9uZW50cykvTmF2YmFyJ1xyXG5pbXBvcnQgU3RvcmVQcm92aWRlciwgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4vcmVkdXgnXHJcblxyXG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoe2NoaWxkcmVufTp7Y2hpbGRyZW46UmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xyXG4gIGNvbnN0IGlzU2lkZWJhckNvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKT0+c3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvb2xhcHNlZFxyXG4gIClcclxuICBjb25zdCBpc0RhcmtNb2RlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUuZ2xvYmFsLmlzRGFya01vZGUpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoaXNEYXJrTW9kZSl7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc0RhcmtNb2RlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCJ9IGZsZXggYmctZ3JheS01MCB0ZXh0LWdyYXktOTAwIHctZnVsbCBtaW4taC1zY3JlZW5gfT5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBweS03IHB4LTkgYmctZ3JheS01MFwiPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21haW4+XHJcbjwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkV3JhcHBlciA9ICh7Y2hpbGRyZW59OntjaGlsZHJlbjpSZWFjdC5SZWFjdE5vZGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICA8RGFzaGJvYXJkTGF5b3V0PntjaGlsZHJlbn08L0Rhc2hib2FyZExheW91dD5cclxuICAgIDwvU3RvcmVQcm92aWRlcj5cclxuXHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJTdG9yZVByb3ZpZGVyIiwidXNlQXBwU2VsZWN0b3IiLCJEYXNoYm9hcmRMYXlvdXQiLCJjaGlsZHJlbiIsImlzU2lkZWJhckNvbGxhcHNlZCIsInN0YXRlIiwiZ2xvYmFsIiwiaXNTaWRlYmFyQ29vbGFwc2VkIiwiaXNEYXJrTW9kZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsIkRhc2hib2FyZFdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DashboardWrapper.tsx\n"));

/***/ })

});