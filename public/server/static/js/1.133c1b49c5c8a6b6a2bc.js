webpackJsonp([1],{Cb4U:function(t,i){},"H/Rf":function(t,i){},K6LP:function(t,i){},hc5b:function(t,i){},nU8l:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("4YfN"),n=e.n(a),_=e("9rMa"),r=e("YnBf"),s=[{title:"个人信息查询",href:"../integratedQuery/identity.html",icon:"mdi-account-circle",index:"identity",authority:r.a.IS_DISTRICT_COMPANY_LEVEL},{title:"执业证管理",icon:"mdi-account-card-details",index:"WORK_ROOT",children:[{title:"执业证信息管理",index:"workPermit",authority:r.a.IS_DISTRICT_COMPANY_LEVEL},{title:"执业证导入追踪",index:"workPermitTrack",authority:r.a.IS_SBX_LEVEL}]},{title:"诚信信息记录",icon:"mdi-book-variant",index:"integrity",children:[{title:"单个录入",index:"integrityAdd",authority:r.a.IS_DISTRICT_COMPANY_LEVEL},{title:"批量导入",index:"integrityMultiAdd",authority:r.a.IS_DISTRICT_COMPANY_LEVEL},{title:"我的提交",index:"mySubmit",authority:r.a.IS_DISTRICT_COMPANY_LEVEL},{title:"记录审核",index:"review",authority:r.a.IS_SBX_LEVEL},{title:"诚信记录单个查询",index:"integrityRecord",authority:r.a.IS_DISTRICT_COMPANY_LEVEL}]},{title:"综合查询",icon:"mdi-file-find",index:"QUERY_ROOT",children:[{title:"从业人员流动监测",index:"monitor",authority:r.a.IS_SBX_LEVEL},{title:"人员信息批量查询",index:"PERSON_QUERY_ROOT",authority:r.a.IS_SBX_LEVEL,children:[{title:"入职人员清单",index:"workTrack_stastics_3",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"在职人员清单",index:"workTrack_stastics_1",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"离职人员清单",index:"workTrack_stastics_2",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"入职人员来源清单",index:"workTrack_stastics_6",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"离职人员去向清单",index:"workTrack_stastics_4",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"入职人员来源统计",index:"workTrack_stastics_7",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"离职人员去向统计",index:"workTrack_stastics_5",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"离入职人数对比统计",index:"workTrack_stastics_8",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"各类人数汇总统计",index:"SUMMARY_ROOT",children:[{title:"入职人数汇总统计",index:"summary_stastic_1_1",authority:r.a.IS_SBX_LEVEL},{title:"在职人数汇总统计",index:"summary_stastic_1_2",authority:r.a.IS_SBX_LEVEL},{title:"离职人数汇总统计",index:"summary_stastic_1_3",authority:r.a.IS_SBX_LEVEL},{title:"离职人员去向汇总统计",index:"summary_stastic_2",authority:r.a.IS_SBX_LEVEL},{title:"入职人员来源汇总统计",index:"summary_stastic_3",authority:r.a.IS_SBX_LEVEL},{title:"离入职人数比较汇总统计",index:"summary_stastic_4",authority:r.a.IS_SBX_LEVEL}]}]},{title:"诚信信息批量查询",index:"INTEGRITY_IMPORT_ROOT",authority:r.a.IS_SBX_LEVEL,children:[{title:"诚信级别批量查询",index:"INTEGRITY_LEVEL_QUERY_ROOT",authority:r.a.IS_SBX_LEVEL,children:[{title:"在职人员最新诚信级别",index:"integrity_stastics1_1",authority:r.a.IS_SBX_LEVEL},{title:"离职人员离职时的诚信级别",index:"integrity_stastics1_2",authority:r.a.IS_SBX_LEVEL},{title:"在职人员诚信级别分布",index:"integrity_stastics1_3",authority:r.a.IS_SBX_LEVEL},{title:"离职人员诚信级别分布",index:"integrity_stastics1_4",authority:r.a.IS_SBX_LEVEL},{title:"诚信级别对应在职人员信息",index:"integrity_stastics1_5",authority:r.a.IS_SBX_LEVEL},{title:"诚信级别对应离职人员信息",index:"integrity_stastics1_6",authority:r.a.IS_SBX_LEVEL},{title:"各级诚信级别人数分布汇总统计",index:"summary_stastic_5",authority:r.a.IS_SBX_LEVEL}]},{title:"诚信行为批量查询",index:"INTEGRITY_ACTION_QUERY_ROOT",authority:r.a.IS_SBX_LEVEL,children:[{title:"各类诚信行为对应人员清单",index:"integrity_stastics2_1",authority:r.a.IS_SBX_LEVEL},{title:"各类诚信行为数量及占比",index:"integrity_stastics2_2",authority:r.a.IS_SBX_LEVEL},{title:"在职人员诚信记录清单",index:"integrity_stastics2_3",authority:r.a.IS_SBX_LEVEL},{title:"多次获评同一诚信级别人员清单",index:"integrity_stastics2_4",authority:r.a.IS_SBX_LEVEL},{title:"导致公司经济损失的人员清单",index:"integrity_stastics2_5",authority:r.a.IS_SBX_LEVEL},{title:"各类诚信行为汇总统计",index:"summary_stastic_6",authority:r.a.IS_SBX_LEVEL}]}]},{title:"被解约名单库",index:"ILLEGAL_QUERY_ROOT",authority:r.a.IS_SBX_LEVEL,children:[{title:"批量导入",index:"illegal_import",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"批量查询",index:"illegal_batch_query",authority:r.a.IS_PROVINCE_COMPANY_LEVEL}]}]},{title:"系统管理",icon:"mdi-account-multiple",index:"SYSTEM_MANAGE_ROOT",children:[{title:"账号管理",index:"accout_manage",authority:r.a.IS_SBX_LEVEL},{title:"机构管理",index:"company_manage",authority:r.a.IS_SBX_LEVEL}]},{title:"分类培训管理",icon:"mdi-pencil",index:"TRAINING_ROOT",children:[{title:"培训汇总导入",index:"training_summary_import",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"培训汇总查询",index:"training_summary_query",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"培训计划报送",index:"training_plan_sumbit",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"培训计划查询",index:"training_plan_query",authority:r.a.IS_PROVINCE_COMPANY_LEVEL}]},{title:"被解约名单库",icon:"mdi-alert",index:"ILLEGAL_ROOT",children:[{title:"单个查询",index:"illegal_single_query",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"被解约名单统计",index:"illegal_stastic",authority:r.a.IS_PROVINCE_COMPANY_LEVEL}]},{title:"客户投诉管理",icon:"mdi-information",index:"CLIENT_COMPLAIN_ROOT",children:[{title:"批量导入",index:"client_complain_import",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"单个查询",index:"client_complain_single_query",authority:r.a.IS_PROVINCE_COMPANY_LEVEL},{title:"批量查询",index:"client_complain_batch_query",authority:r.a.IS_DSXH_LEVEL},{title:"客户投诉量统计",index:"client_complain_stastic",authority:r.a.IS_PROVINCE_COMPANY_LEVEL}]}];var l={name:"NavMenu",props:["navMenus"],data:function(){return{}},methods:{},computed:n()({},Object(_.c)(["authority"]))},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"navMenu"},t._l(t.navMenus,function(i){return e("label",{key:i.id},[!i.children&&t.authority<=(i.authority||0)?e("el-menu-item",{key:i.index,staticClass:"single_menu",attrs:{index:i.index}},[e("i",{staticClass:"mdi mdi-24px menu_icon",class:i.icon}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(i.title))])]):t._e(),t._v(" "),i.children?e("el-submenu",{key:i.index,attrs:{index:i.index}},[e("template",{slot:"title"},[e("i",{staticClass:"mdi mdi-24px menu_icon",class:i.icon}),t._v(" "),e("span",[t._v(" "+t._s(i.title))])]),t._v(" "),e("NavMenu",{attrs:{navMenus:i.children}})],2):t._e()],1)}))},staticRenderFns:[]};var d={name:"slider_menu",data:function(){return{menuData:s}},methods:{},components:{MenuItem:e("Z0/y")(l,o,!1,function(t){e("K6LP")},null,null).exports},computed:n()({},Object(_.c)(["show_menu"]))},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"menu_wrap"}},[this._m(0),this._v(" "),i("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":"identity","text-color":"#222","unique-opened":"",router:"","active-text-color":"#7cb342"}},[i("MenuItem",{attrs:{navMenus:this.menuData}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo_wrap",staticStyle:{"background-image":"url('static/img/sidebar_head_bg.png')"}},[i("h1",[this._v("省保协综合平台")])])}]};var u=e("Z0/y")(d,c,!1,function(t){e("H/Rf")},"data-v-eb252fea",null).exports,E=e("MS2J"),m={name:"myheader",data:function(){return{}},methods:n()({},Object(_.d)({toggleMenu:"SET_SHOW_MENU"}),{handleUserPanel:function(t){"logoff"===t&&this.logoff()},logoff:function(t){var i=this;this.$message({message:"注销成功",type:"success"}),setTimeout(function(){Object(E.c)(),i.$router.push("/login")},1e3)},fullScreen:function(){}}),computed:n()({},Object(_.c)(["user","show_menu"]),{menu_icon:function(){return this.show_menu?"mdi-arrow-left ":"mdi-view-sequential"}})},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header_main_wrap"},[e("div",{staticClass:"header_left",on:{click:t.toggleMenu}},[e("div",{staticClass:"menu_log",class:{toggleMenu:!t.show_menu}},[e("i",{staticClass:"mdi mdi-24px",class:[t.show_menu?"mdi-arrow-left":"mdi-view-sequential"]})])]),t._v(" "),e("div",{staticClass:"header_right"},[e("el-dropdown",{attrs:{"split-button":"",size:"small",divided:""}},[t._v("\n  手册下载\n  "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("a",{staticClass:"down_link",attrs:{download:"",href:"/static/template/销售从业人员综合信息管理平台使用手册 1.0.docx"}},[t._v("操作手册 1.0")])]),t._v(" "),e("el-dropdown-item",[e("a",{staticClass:"down_link",attrs:{download:"",href:"/static/template/销售从业人员综合信息管理平台Q&A-2.0.docx"}},[t._v("管理平台Q&A 2.0")])]),t._v(" "),e("el-dropdown-item",[e("a",{staticClass:"down_link",attrs:{download:"",href:"/static/template/广东保险销售从业人员综合信息管理平台机构架构变更申请表.xls"}},[t._v("机构架构变更申请表")])])],1)],1),t._v(" "),e("i",{staticClass:"mdi mdi-crop-free mdi-24px full-screen",on:{click:function(i){return i.stopPropagation(),t.fullScreen(i)}}}),t._v(" "),e("el-badge",{staticClass:"noti_wrap is_link",attrs:{value:3}},[e("i",{staticClass:"mdi mdi-bell mdi-24px "})]),t._v(" "),e("el-dropdown",{on:{command:t.handleUserPanel}},[e("div",{staticClass:"login_state_wrap is_link"},[e("i",{staticClass:"mdi mdi-account-circle mdi-24px"}),t._v(" "),e("span",{staticClass:"login_name"},[t._v(t._s(t.user.LoginID))])]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"personal"}},[t._v("个人")]),t._v(" "),e("el-dropdown-item",{attrs:{command:"changepw"}},[t._v("修改密码")]),t._v(" "),e("el-dropdown-item",{attrs:{command:"logoff"}},[t._v("注销")])],1)],1)],1)])},staticRenderFns:[]};var L={name:"home",data:function(){return{minHeight:0}},components:{SliderMenu:u,MyHeader:e("Z0/y")(m,h,!1,function(t){e("Cb4U")},"data-v-ebda9ecc",null).exports},methods:n()({},Object(_.b)(["setUser"])),computed:n()({},Object(_.c)(["show_menu"]),{menuLeft:function(){return this.show_menu?"290px":"0px"}}),mounted:function(){}},y={render:function(){var t=this.$createElement,i=this._self._c||t;return i("el-container",{staticClass:"main"},[i("el-aside",{staticClass:"side",attrs:{width:this.menuLeft}},[i("SliderMenu")],1),this._v(" "),i("el-container",[i("el-header",{ref:"myHeader",staticStyle:{background:"#1976d2",height:"60px","box-shadow":"10px 10px 999px #000"}},[i("MyHeader")],1),this._v(" "),i("el-main",{staticStyle:{"background-color":"rgb(238, 241, 246)"}},[i("router-view")],1)],1)],1)},staticRenderFns:[]};var S=e("Z0/y")(L,y,!1,function(t){e("hc5b")},"data-v-2bcd18f5",null);i.default=S.exports}});