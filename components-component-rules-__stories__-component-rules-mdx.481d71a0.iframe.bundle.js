"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[8617,6876],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/component-rules/__stories__/component-rules.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_vibe_storybook_components_vibe_storybook_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_component_rules_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/component-rules/__stories__/component-rules.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_home_runner_work_vibe_storybook_components_vibe_storybook_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_component_rules_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"componentrules",children:"ComponentRules"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The ComponentRules component serves as a guide to illustrate the recommended practices and common pitfalls when utilizing a specific component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_component_rules_stories__WEBPACK_IMPORTED_MODULE_4__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_vibe_storybook_components_vibe_storybook_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/component-rules/__stories__/component-rules.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _component_rules__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/component-rules/component-rules.tsx"),_component_name_component_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/component-name/component-name.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_component_rules__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/ComponentRules"},Overview={args:{rules:[{positive:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_name_component_name__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"",children:"Hello world"}),description:"Always capitalize the first letter of the first word in the heading."},negative:{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_name_component_name__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"",children:"Hello World"}),description:"Please avoid capitalizing the first letter of each word in the heading."}}]}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:"{\n  args: {\n    rules: [{\n      positive: {\n        component: <ComponentName className=\"\">Hello world</ComponentName>,\n        description: 'Always capitalize the first letter of the first word in the heading.'\n      },\n      negative: {\n        component: <ComponentName className=\"\">Hello World</ComponentName>,\n        description: 'Please avoid capitalizing the first letter of each word in the heading.'\n      }\n    }]\n  }\n}",...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]}}]);