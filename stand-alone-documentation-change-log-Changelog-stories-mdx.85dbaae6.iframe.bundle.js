"use strict";(globalThis.webpackChunkvibe_storybook_components=globalThis.webpackChunkvibe_storybook_components||[]).push([[1606],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./storybook/stand-alone-documentation/change-log/Changelog.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Changelog_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOGraw_namespaceObject="# Changelog\n\n## 0.16.1 (2023-12-05)\n\n#### Bug Fixes\n* [#133](https://github.com/mondaycom/vibe-storybook-components/pull/133) fix: types ([@talkor](https://github.com/talkor))\n\n## 0.16.0 (2023-12-04)\n\n#### New Features\n* [#132](https://github.com/mondaycom/vibe-storybook-components/pull/132) feat(StorybookLink): add size prop ([@talkor](https://github.com/talkor))\n\n## 0.15.1 (2023-12-03)\n\n#### Bug Fixes\n* [#131](https://github.com/mondaycom/vibe-storybook-components/pull/131) fix: export component ([@talkor](https://github.com/talkor))\n\n## 0.15.0 (2023-12-03)\n\n#### New Features\n* [#127](https://github.com/mondaycom/vibe-storybook-components/pull/127) feat: add storybook-link component ([@talkor](https://github.com/talkor))\n\n## 0.14.3 (2023-12-03)\n\n#### Bug Fixes\n* [#130](https://github.com/mondaycom/vibe-storybook-components/pull/130) fix(SidebarItem): add margin to the right ([@talkor](https://github.com/talkor))\n\n## 0.14.2 (2023-11-26)\n\n#### Bug Fixes\n* [#129](https://github.com/mondaycom/vibe-storybook-components/pull/129) fix: <Frame> make className, noBorder, noGutter props not required ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.14.1 (2023-11-24)\n\n#### Bug Fixes\n* [#128](https://github.com/mondaycom/vibe-storybook-components/pull/128) fix: <StoryDescription> make className and headerStyle props not required ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.14.0 (2023-11-20)\n\n#### New Features\n* [#126](https://github.com/mondaycom/vibe-storybook-components/pull/126) feat(DeprecatedWarning): add children ([@talkor](https://github.com/talkor))\n\n## 0.13.0 (2023-11-16)\n\n#### New Features\n* [#125](https://github.com/mondaycom/vibe-storybook-components/pull/125) feat: add linkTarget to <RelatedComponents> ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.12.0 (2023-11-15)\n\n#### New Features\n* [#124](https://github.com/mondaycom/vibe-storybook-components/pull/124) feat: <Link> add target prop ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.11.3 (2023-11-15)\n\n#### Bug Fixes\n* [#123](https://github.com/mondaycom/vibe-storybook-components/pull/123) fix: reduce <InformationBox> line-height from 24px to 20px ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.11.2 (2023-11-12)\n\n#### Bug Fixes\n* [#122](https://github.com/mondaycom/vibe-storybook-components/pull/122) fix: <InformationBoxTitle> Link withoutSpacing ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.11.1 (2023-11-12)\n\n#### Bug Fixes\n* [#120](https://github.com/mondaycom/vibe-storybook-components/pull/120) fix: <DocFooter> use <Link> ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#119](https://github.com/mondaycom/vibe-storybook-components/pull/119) fix: <InformationBoxTitle> use <Link> ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#121](https://github.com/mondaycom/vibe-storybook-components/pull/121) docs: remove hacker theme from storybook ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.11.0 (2023-10-31)\n\n#### New Features\n* [#117](https://github.com/mondaycom/vibe-storybook-components/pull/117) feat, docs: <GithubContributorsList>, use it on welcome page ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.10.3 (2023-10-30)\n\n#### Bug Fixes\n* [#116](https://github.com/mondaycom/vibe-storybook-components/pull/116) chore: cleanup ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#115](https://github.com/mondaycom/vibe-storybook-components/pull/115) docs: add story for < FunctionArguments /> and < InformationBox /> ([@Dhoni77](https://github.com/Dhoni77))\n* [#114](https://github.com/mondaycom/vibe-storybook-components/pull/114) Add story for < Title /> component ([@balajik](https://github.com/balajik))\n* [#112](https://github.com/mondaycom/vibe-storybook-components/pull/112) Created basic story for < SectionName />, < AnchorListItem /> ([@balajik](https://github.com/balajik))\n* [#111](https://github.com/mondaycom/vibe-storybook-components/pull/111) docs: add story for < Link /> and < StoryDescription /> ([@Dhoni77](https://github.com/Dhoni77))\n* [#109](https://github.com/mondaycom/vibe-storybook-components/pull/109) docs: add story for < ComponentRules />, < DocFooter /> ([@Dhoni77](https://github.com/Dhoni77))\n\n#### Internal Changes\n* [#113](https://github.com/mondaycom/vibe-storybook-components/pull/113) Add Tip to preview.tsx ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#110](https://github.com/mondaycom/vibe-storybook-components/pull/110) prettier fix + component-name.stories change text ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.10.2 (2023-10-23)\n\n#### Bug Fixes\n* [#108](https://github.com/mondaycom/vibe-storybook-components/pull/108) fix(SidebarItem): flex the container ([@talkor](https://github.com/talkor))\n\n## 0.10.1 (2023-10-23)\n\n#### Bug Fixes\n* [#100](https://github.com/mondaycom/vibe-storybook-components/pull/100) fix(SidebarItem): add ellipsis to item name ([@talkor](https://github.com/talkor))\n\n#### Documentation\n* [#99](https://github.com/mondaycom/vibe-storybook-components/pull/99) docs: replace logo in storybook ([@talkor](https://github.com/talkor))\n\n## 0.10.0 (2023-10-23)\n\n#### New Features\n* [#83](https://github.com/mondaycom/vibe-storybook-components/pull/83) feat: Migrate < Link />, < StoryDescription /> to ts ([@Dhoni77](https://github.com/Dhoni77))\n\n#### Internal Changes\n* [#106](https://github.com/mondaycom/vibe-storybook-components/pull/106) chore: prettier fix ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#105](https://github.com/mondaycom/vibe-storybook-components/pull/105) chore: migrate <ColorDescription/> to css modules ([@Dhoni77](https://github.com/Dhoni77))\n\n## 0.9.5 (2023-10-23)\n\n#### Bug Fixes\n* [#98](https://github.com/mondaycom/vibe-storybook-components/pull/98) fix createStoryMettasettings fix types ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#93](https://github.com/mondaycom/vibe-storybook-components/pull/93) docs: create basic story for < ComponentDescription />, < UnstyledList /> + < UnstyledListItem /> ([@Dhoni77](https://github.com/Dhoni77))\n* [#95](https://github.com/mondaycom/vibe-storybook-components/pull/95) docs: add story for < TokenTable /> ([@Dhoni77](https://github.com/Dhoni77))\n* [#97](https://github.com/mondaycom/vibe-storybook-components/pull/97) Created story from Paragraph and Frame components ([@balajik](https://github.com/balajik))\n* [#94](https://github.com/mondaycom/vibe-storybook-components/pull/94) docs: Create basic story for < VisualDescription />, < ColorDescription /> ([@Dhoni77](https://github.com/Dhoni77))\n\n#### Internal Changes\n* [#96](https://github.com/mondaycom/vibe-storybook-components/pull/96) Migrated the component to TS ([@balajik](https://github.com/balajik))\n* [#32](https://github.com/mondaycom/vibe-storybook-components/pull/32) ci: add storybook and chromatic workflows ([@talkor](https://github.com/talkor))\n\n## 0.9.4 (2023-10-18)\n\n#### Bug Fixes\n* [#88](https://github.com/mondaycom/vibe-storybook-components/pull/88) fix: dependency issue, upgrade storybook ^7.5.0 ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.9.3 (2023-10-18)\n\n#### Bug Fixes\n* [#87](https://github.com/mondaycom/vibe-storybook-components/pull/87) fix: < ComponentName /> use text-color-fixed-dark ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.9.2 (2023-10-17)\n\n#### Bug Fixes\n* [#86](https://github.com/mondaycom/vibe-storybook-components/pull/86) chore: fix theme switcher type error ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#79](https://github.com/mondaycom/vibe-storybook-components/pull/79) Feat: add theme switching to storybook ([@pedaars](https://github.com/pedaars))\n* [#84](https://github.com/mondaycom/vibe-storybook-components/pull/84) docs: Add story for < ComponentName /> component ([@Dhoni77](https://github.com/Dhoni77))\n\n#### Internal Changes\n* [#85](https://github.com/mondaycom/vibe-storybook-components/pull/85) chore: fix package-lock.json ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#81](https://github.com/mondaycom/vibe-storybook-components/pull/81) Migrated < AnchorListItem />, < ComponentName />, < DocFooter /> to CSS modules ([@balajik](https://github.com/balajik))\n* [#82](https://github.com/mondaycom/vibe-storybook-components/pull/82) Migrated < TokenTable /> , < ColorDescription /> to TS ([@balajik](https://github.com/balajik))\n* [#73](https://github.com/mondaycom/vibe-storybook-components/pull/73) feat: Migrate < ComponentRule />, < ComponentRules /> to css modules ([@Dhoni77](https://github.com/Dhoni77))\n* [#75](https://github.com/mondaycom/vibe-storybook-components/pull/75) Migrated < InformationBox />, < InformationBoxTitle /> to TS ([@balajik](https://github.com/balajik))\n* [#74](https://github.com/mondaycom/vibe-storybook-components/pull/74) Migrated < FunctionArgument />, < FunctionArguments />, < MultipleStoryElementsWrapper /> to TS ([@balajik](https://github.com/balajik))\n* [#65](https://github.com/mondaycom/vibe-storybook-components/pull/65) Convert UnstyledList UnstyledListItem Title to TSX ([@Ryan-Biondo](https://github.com/Ryan-Biondo))\n* [#70](https://github.com/mondaycom/vibe-storybook-components/pull/70) TS migration: < SectionName />, < RelatedComponent />, < RelatedComponents /> ([@Kritik-J](https://github.com/Kritik-J))\n* [#72](https://github.com/mondaycom/vibe-storybook-components/pull/72) infra: add build into test-workflow.yml ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.9.1 (2023-10-16)\n\n#### Bug Fixes\n* [#71](https://github.com/mondaycom/vibe-storybook-components/pull/71) fix: build issues ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Internal Changes\n* [#59](https://github.com/mondaycom/vibe-storybook-components/pull/59) feat: migrated < Paragrapgh />, < MultipleStoryElementsWrapper />, < Link /> to scss modules ([@Dhoni77](https://github.com/Dhoni77))\n* [#67](https://github.com/mondaycom/vibe-storybook-components/pull/67) TS migration: < UsageGuidelines />, < VisualDescription /> ([@Kritik-J](https://github.com/Kritik-J))\n* [#58](https://github.com/mondaycom/vibe-storybook-components/pull/58) Migrated <AnchorListItem>, <ComponentDescription>, <ComponentName> components to TS ([@balajik](https://github.com/balajik))\n* [#60](https://github.com/mondaycom/vibe-storybook-components/pull/60) TS migration: < ComponentRule />, < ComponentRules /> ([@Kritik-J](https://github.com/Kritik-J))\n* [#57](https://github.com/mondaycom/vibe-storybook-components/pull/57) Migrated < DocFooter />, < Frame />, < Paragraph /> and also child component <SectionName /> to TS ([@balajik](https://github.com/balajik))\n* [#55](https://github.com/mondaycom/vibe-storybook-components/pull/55) Migrated < InformationBox />, < InformationBoxTitle />, < Frame /> to CSS modules ([@balajik](https://github.com/balajik))\n* [#54](https://github.com/mondaycom/vibe-storybook-components/pull/54) CSS modules migration: < SectionName />, < RelatedComponent />, < RelatedComponents /> ([@Kritik-J](https://github.com/Kritik-J))\n* [#53](https://github.com/mondaycom/vibe-storybook-components/pull/53) chore: prettier cleanup ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#51](https://github.com/mondaycom/vibe-storybook-components/pull/51) CSS modules migration: < UnstyledList />, < UnstyledListItem />, < Title />  ([@Kritik-J](https://github.com/Kritik-J))\n* [#52](https://github.com/mondaycom/vibe-storybook-components/pull/52) CSS modules migration: < UsageGuidelines />, < VisualDescription /> ([@Kritik-J](https://github.com/Kritik-J))\n\n## 0.9.0 (2023-10-10)\n\n#### New Features\n* [#48](https://github.com/mondaycom/vibe-storybook-components/pull/48) Add sidebar item ([@talkor](https://github.com/talkor))\n\n## 0.8.0 (2023-10-09)\n\n#### New Features\n* [#47](https://github.com/mondaycom/vibe-storybook-components/pull/47) feat: mixin sb-basic-text - disable font smoothing ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.7.1 (2023-10-09)\n\n#### Bug Fixes\n* [#34](https://github.com/mondaycom/vibe-storybook-components/pull/34) Export Tip, AlphaWarning, DeprecatedWarning components ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#36](https://github.com/mondaycom/vibe-storybook-components/pull/36) docs: TYPESCRIPT_MIGRATION.md ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#46](https://github.com/mondaycom/vibe-storybook-components/pull/46) docs: CSS_MODULES_MIGRATION.md ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Internal Changes\n* [#35](https://github.com/mondaycom/vibe-storybook-components/pull/35) Export components withStaticProps ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.7.0 (2023-10-05)\n\n#### New Features\n* [#33](https://github.com/mondaycom/vibe-storybook-components/pull/33) feat: add StatusTag ([@talkor](https://github.com/talkor))\n\n## 0.6.0 (2023-10-05)\n\n#### New Features\n* [#30](https://github.com/mondaycom/vibe-storybook-components/pull/30) feat: createMetastorySettings - string type for ContentElement controls, disable action controls ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.5.0 (2023-10-05)\n\n#### New Features\n* [#28](https://github.com/mondaycom/vibe-storybook-components/pull/28) createStoryMetaSettings.js add ignoreControlsPropNamesArray ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Documentation\n* [#26](https://github.com/mondaycom/vibe-storybook-components/pull/26) docs: contibuting.md + components_documentation_guidelines.md ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#23](https://github.com/mondaycom/vibe-storybook-components/pull/23) docs(Storybook): document UsageGuidelines ([@talkor](https://github.com/talkor))\n\n#### Internal Changes\n* [#27](https://github.com/mondaycom/vibe-storybook-components/pull/27) infra: test-workflow.yml - remove push trigger ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.4.0 (2023-10-02)\n\n#### New Features\n* [#22](https://github.com/mondaycom/vibe-storybook-components/pull/22) Replace Rubik with Noto Sans Hebrew ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.3.0 (2023-10-01)\n\n#### New Features\n* [#20](https://github.com/mondaycom/vibe-storybook-components/pull/20) Add mising color tokens ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.2.2 (2023-10-01)\n\n#### Bug Fixes\n* [#19](https://github.com/mondaycom/vibe-storybook-components/pull/19) fix(UsageGuidelines): wrap content in a span ([@talkor](https://github.com/talkor))\n\n## 0.2.1 (2023-08-28)\n\n#### Bug Fixes\n* [#18](https://github.com/mondaycom/vibe-storybook-components/pull/18) fix: export sb-icon-color ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.2.0 (2023-08-23)\n\n#### New Features\n* [#17](https://github.com/mondaycom/vibe-storybook-components/pull/17) Export scss tokens and mixins ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Internal Changes\n* [#16](https://github.com/mondaycom/vibe-storybook-components/pull/16) Chore: storybook infra cleanup + variables cleanup ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#15](https://github.com/mondaycom/vibe-storybook-components/pull/15) infra: tests in ci/cd ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.1.0 (2023-08-01)\n\n#### Internal Changes\n* [#14](https://github.com/mondaycom/vibe-storybook-components/pull/14) fix: release process - remove require statement from release.mjs script ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#13](https://github.com/mondaycom/vibe-storybook-components/pull/13) fix: release process - __dirname ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#12](https://github.com/mondaycom/vibe-storybook-components/pull/12) fix: Remove boxt from release.mjs ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.0.2 (2023-07-23)\n\n#### Documentation\n* [#9](https://github.com/mondaycom/vibe-storybook-components/pull/9) Changelog story ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n#### Internal Changes\n* [#8](https://github.com/mondaycom/vibe-storybook-components/pull/8) Install lerna-changelog ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#7](https://github.com/mondaycom/vibe-storybook-components/pull/7) Remove test:coverage, prerelease, improve eslint ([@SergeyRoyt](https://github.com/SergeyRoyt))\n* [#6](https://github.com/mondaycom/vibe-storybook-components/pull/6) Fix eslint issues ([@SergeyRoyt](https://github.com/SergeyRoyt))\n\n## 0.0.1 (2023-07-20)\n\n* [Initial PR](https://github.com/mondaycom/vibe-storybook-components/pull/1) \n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Change Log"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOGraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Change Log",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const Changelog_stories=componentMeta}}]);