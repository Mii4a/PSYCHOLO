"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _About=_interopRequireDefault(require("@/views/About.vue")),_Home=_interopRequireDefault(require("@/views/Home.vue")),_HomeAfterSignedIn=_interopRequireDefault(require("@/views/HomeAfterSignedIn.vue")),_PsychologyIndex=_interopRequireDefault(require("@/views/PsychologyIndex.vue")),_PsychologyShow=_interopRequireDefault(require("@/views/PsychologyShow.vue")),_Signin=_interopRequireDefault(require("@/views/Signin.vue")),_Signup=_interopRequireDefault(require("@/views/Signup.vue")),_WorkbookShow=_interopRequireDefault(require("@/views/WorkbookShow.vue")),_vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var routes=[{path:"/",name:"Home",component:_Home.default},{path:"/about",name:"About",component:_About.default},{path:"/signup",name:"Signup",component:_Signup.default},{path:"/signin",name:"Signin",component:_Signin.default},{path:"/home",name:"HomeAfterSignedIn",component:_HomeAfterSignedIn.default},{path:"/workbook/:id",name:"WorkbookShow",component:_WorkbookShow.default},{path:"/psychologies",name:"PsychologyIndex",component:_PsychologyIndex.default},{path:"/psychologies/:id",name:"psychologyShow",component:_PsychologyShow.default},{path:"/workbooks/:id",name:"workbookShow",component:_WorkbookShow.default,children:[{path:"/questions"}]}],router=new _vueRouter.default({mode:"history",base:process.env.BASE_URL,routes:routes}),_default=router;exports.default=router;