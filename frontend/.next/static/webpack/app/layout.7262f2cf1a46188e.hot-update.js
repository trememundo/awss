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

/***/ "(app-pages-browser)/./src/state/api.ts":
/*!**************************!*\
  !*** ./src/state/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   useCreateProductMutation: () => (/* binding */ useCreateProductMutation),\n/* harmony export */   useGetProductsQuery: () => (/* binding */ useGetProductsQuery),\n/* harmony export */   useGetPurchasesQuery: () => (/* binding */ useGetPurchasesQuery),\n/* harmony export */   useGetSalesQuery: () => (/* binding */ useGetSalesQuery),\n/* harmony export */   useGetSalesSummaryQuery: () => (/* binding */ useGetSalesSummaryQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n// Crear la API de Redux Toolkit\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL\n    }),\n    reducerPath: \"api\",\n    tagTypes: [\n        \"Products\",\n        \"Sales\",\n        \"Purchases\",\n        \"SalesSummary\"\n    ],\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (search)=>({\n                        url: \"/products\",\n                        params: search ? {\n                            search\n                        } : {}\n                    }),\n                providesTags: [\n                    \"Products\"\n                ]\n            }),\n            createProduct: build.mutation({\n                query: (newProduct)=>({\n                        url: \"/products\",\n                        method: \"POST\",\n                        body: newProduct\n                    }),\n                invalidatesTags: [\n                    \"Products\"\n                ]\n            }),\n            getSales: build.query({\n                query: ()=>\"/sales\",\n                providesTags: [\n                    \"Sales\"\n                ]\n            }),\n            getPurchases: build.query({\n                query: ()=>\"/purchases\",\n                providesTags: [\n                    \"Purchases\"\n                ]\n            }),\n            // Nuevo endpoint para obtener el resumen de ventas por producto\n            getSalesSummary: build.query({\n                query: ()=>\"/sales-summary\",\n                providesTags: [\n                    \"SalesSummary\"\n                ]\n            })\n        })\n});\nconst { useGetProductsQuery, useCreateProductMutation, useGetSalesQuery, useGetPurchasesQuery, useGetSalesSummaryQuery } = api;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdGF0ZS9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlFO0FBMEN6RSxnQ0FBZ0M7QUFDekIsTUFBTUUsTUFBTUYsdUVBQVNBLENBQUM7SUFDM0JHLFdBQVdGLDRFQUFjQSxDQUFDO1FBQUVHLFNBQVNDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0Msd0JBQXdCO0lBQUM7SUFDMUVDLGFBQWE7SUFDYkMsVUFBVTtRQUFDO1FBQVk7UUFBUztRQUFhO0tBQWU7SUFDNURDLFdBQVcsQ0FBQ0MsUUFBVztZQUNyQkMsYUFBYUQsTUFBTUUsS0FBSyxDQUEyQjtnQkFDakRBLE9BQU8sQ0FBQ0MsU0FBWTt3QkFDbEJDLEtBQUs7d0JBQ0xDLFFBQVFGLFNBQVM7NEJBQUVBO3dCQUFPLElBQUksQ0FBQztvQkFDakM7Z0JBQ0FHLGNBQWM7b0JBQUM7aUJBQVc7WUFDNUI7WUFDQUMsZUFBZVAsTUFBTVEsUUFBUSxDQUFzQjtnQkFDakROLE9BQU8sQ0FBQ08sYUFBZ0I7d0JBQ3RCTCxLQUFLO3dCQUNMTSxRQUFRO3dCQUNSQyxNQUFNRjtvQkFDUjtnQkFDQUcsaUJBQWlCO29CQUFDO2lCQUFXO1lBQy9CO1lBQ0FDLFVBQVViLE1BQU1FLEtBQUssQ0FBZ0I7Z0JBQ25DQSxPQUFPLElBQU07Z0JBQ2JJLGNBQWM7b0JBQUM7aUJBQVE7WUFDekI7WUFDQVEsY0FBY2QsTUFBTUUsS0FBSyxDQUFtQjtnQkFDMUNBLE9BQU8sSUFBTTtnQkFDYkksY0FBYztvQkFBQztpQkFBWTtZQUM3QjtZQUNBLGdFQUFnRTtZQUNoRVMsaUJBQWlCZixNQUFNRSxLQUFLLENBQXVCO2dCQUNqREEsT0FBTyxJQUFNO2dCQUNiSSxjQUFjO29CQUFDO2lCQUFlO1lBQ2hDO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUNYVSxtQkFBbUIsRUFDbkJDLHdCQUF3QixFQUN4QkMsZ0JBQWdCLEVBQ2hCQyxvQkFBb0IsRUFDcEJDLHVCQUF1QixFQUN4QixHQUFHN0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RhdGUvYXBpLnRzPzBjODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XHJcblxyXG4vLyBJbnRlcmZhY2VzIHJlbGFjaW9uYWRhcyBjb24gbG9zIHByb2R1Y3RvcyB5IGxhcyB2ZW50YXMvcGVkaWRvc1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIHN0b2NrUXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdWN0IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICByYXRpbmc/OiBudW1iZXI7XHJcbiAgc3RvY2tRdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhbGVzIHtcclxuICBzYWxlSWQ6IHN0cmluZztcclxuICBwcm9kdWN0SWQ6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG4gIHVuaXRQcmljZTogbnVtYmVyO1xyXG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2Uge1xyXG4gIHB1cmNoYXNlSWQ6IHN0cmluZztcclxuICBwcm9kdWN0SWQ6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG4gIHVuaXRDb3N0OiBudW1iZXI7XHJcbiAgdG90YWxDb3N0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIFJlc3VtZW4gZGUgdmVudGFzIHBvciBwcm9kdWN0byAocHVlZGUgaW5jbHVpciBtw6FzIGRldGFsbGVzIHNpIGVzIG5lY2VzYXJpbylcclxuZXhwb3J0IGludGVyZmFjZSBTYWxlc1N1bW1hcnkge1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIHByb2R1Y3ROYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxBbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuLy8gQ3JlYXIgbGEgQVBJIGRlIFJlZHV4IFRvb2xraXRcclxuZXhwb3J0IGNvbnN0IGFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCB9KSwgXHJcbiAgcmVkdWNlclBhdGg6IFwiYXBpXCIsXHJcbiAgdGFnVHlwZXM6IFtcIlByb2R1Y3RzXCIsIFwiU2FsZXNcIiwgXCJQdXJjaGFzZXNcIiwgXCJTYWxlc1N1bW1hcnlcIl0sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8UHJvZHVjdFtdLCBzdHJpbmcgfCB2b2lkPih7XHJcbiAgICAgIHF1ZXJ5OiAoc2VhcmNoKSA9PiAoe1xyXG4gICAgICAgIHVybDogXCIvcHJvZHVjdHNcIixcclxuICAgICAgICBwYXJhbXM6IHNlYXJjaCA/IHsgc2VhcmNoIH0gOiB7fSxcclxuICAgICAgfSksXHJcbiAgICAgIHByb3ZpZGVzVGFnczogW1wiUHJvZHVjdHNcIl0sXHJcbiAgICB9KSxcclxuICAgIGNyZWF0ZVByb2R1Y3Q6IGJ1aWxkLm11dGF0aW9uPFByb2R1Y3QsIE5ld1Byb2R1Y3Q+KHtcclxuICAgICAgcXVlcnk6IChuZXdQcm9kdWN0KSA9PiAoe1xyXG4gICAgICAgIHVybDogXCIvcHJvZHVjdHNcIixcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IG5ld1Byb2R1Y3QsXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbnZhbGlkYXRlc1RhZ3M6IFtcIlByb2R1Y3RzXCJdLFxyXG4gICAgfSksXHJcbiAgICBnZXRTYWxlczogYnVpbGQucXVlcnk8U2FsZXNbXSwgdm9pZD4oe1xyXG4gICAgICBxdWVyeTogKCkgPT4gXCIvc2FsZXNcIixcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJTYWxlc1wiXSxcclxuICAgIH0pLFxyXG4gICAgZ2V0UHVyY2hhc2VzOiBidWlsZC5xdWVyeTxQdXJjaGFzZVtdLCB2b2lkPih7XHJcbiAgICAgIHF1ZXJ5OiAoKSA9PiBcIi9wdXJjaGFzZXNcIixcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJQdXJjaGFzZXNcIl0sXHJcbiAgICB9KSxcclxuICAgIC8vIE51ZXZvIGVuZHBvaW50IHBhcmEgb2J0ZW5lciBlbCByZXN1bWVuIGRlIHZlbnRhcyBwb3IgcHJvZHVjdG9cclxuICAgIGdldFNhbGVzU3VtbWFyeTogYnVpbGQucXVlcnk8U2FsZXNTdW1tYXJ5W10sIHZvaWQ+KHtcclxuICAgICAgcXVlcnk6ICgpID0+IFwiL3NhbGVzLXN1bW1hcnlcIiwgXHJcbiAgICAgIHByb3ZpZGVzVGFnczogW1wiU2FsZXNTdW1tYXJ5XCJdLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICB1c2VHZXRQcm9kdWN0c1F1ZXJ5LFxyXG4gIHVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbixcclxuICB1c2VHZXRTYWxlc1F1ZXJ5LFxyXG4gIHVzZUdldFB1cmNoYXNlc1F1ZXJ5LFxyXG4gIHVzZUdldFNhbGVzU3VtbWFyeVF1ZXJ5LCBcclxufSA9IGFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJyZWR1Y2VyUGF0aCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5Iiwic2VhcmNoIiwidXJsIiwicGFyYW1zIiwicHJvdmlkZXNUYWdzIiwiY3JlYXRlUHJvZHVjdCIsIm11dGF0aW9uIiwibmV3UHJvZHVjdCIsIm1ldGhvZCIsImJvZHkiLCJpbnZhbGlkYXRlc1RhZ3MiLCJnZXRTYWxlcyIsImdldFB1cmNoYXNlcyIsImdldFNhbGVzU3VtbWFyeSIsInVzZUdldFByb2R1Y3RzUXVlcnkiLCJ1c2VDcmVhdGVQcm9kdWN0TXV0YXRpb24iLCJ1c2VHZXRTYWxlc1F1ZXJ5IiwidXNlR2V0UHVyY2hhc2VzUXVlcnkiLCJ1c2VHZXRTYWxlc1N1bW1hcnlRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/state/api.ts\n"));

/***/ })

});