webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(81),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPPayAPI-image1.d6c38ab.png";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(12);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  /*
   ×使用h5模式
   */
  mode: 'hash',
  routes: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]
}));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(95);
/**
 * Created by root on 17-6-5.
 */



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
  sidebar: 'pro',
  subId: '',
  scrollY: 0,
  configStep: 1
};

const mutations = {
  change_sidebar(state, id) {
    if (state.sidebar !== 'info' && state.sidebar !== 'config') {
      state.subId = '';
    }
    state.sidebar = id;
  },
  change_sub(state, idArray) {
    if (idArray.parentId === 'info') {
      state.sidebar = 'info';
    } else if (idArray.parentId === 'config') {
      state.sidebar = 'config';
    }
    state.subId = idArray.id;
  },
  change_ConfigStep(state, index) {
    state.configStep = index;
  }
};

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state,
  mutations
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(84),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by root on 17-6-2.
 */
const item = [{ text: '关于大赞pro', id: 'pro', subitems: [] }, { text: '小程序注册及认证', id: 'register', subitems: [] }, { text: '开通微信支付', id: 'wechatpay', subitems: [] }, {
  text: '信息获取',
  id: 'info',
  subitems: [{ text: '获取小程序APPID', id: 'appid' }, { text: '获取微信支付商户号', id: 'payid' }, { text: '获取微信支付证书', id: 'paycertificate' }, { text: '获取微信支付商户秘钥', id: 'paypw' }, { text: '推送信息模板ID', id: 'infoid' }]
}, {
  text: '配置',
  id: 'config',
  subitems: [{ text: '小程序关联公众号', id: 'relation' }, { text: '测试支付接口', id: 'test' }, { text: '账户控制权关联', id: 'control' }]
}, { text: '小程序授权', id: 'empower', subitems: [] }, { text: '完成', id: 'complete', subitems: [] }];

/* harmony default export */ __webpack_exports__["a"] = (item);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_beauty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_beauty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_beauty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_beauty_package_style_vue_beauty_min_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_beauty_package_style_vue_beauty_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_beauty_package_style_vue_beauty_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(6);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__webpack_require__(2);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_beauty___default.a);

__webpack_require__(7);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_register__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_register_register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wechatpay_wechatpay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wechatpay_wechatpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_wechatpay_wechatpay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_about_about__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_info_info__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_info_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_info_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_config_config__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_config_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empower_empower__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_empower_empower___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_empower_empower__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_complete_complete__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_complete_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_complete_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_config_relation__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_config_relation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_config_relation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_config_test__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_config_test___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_config_test__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_config_control__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_config_control___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_config_control__);
/**
 * Created by root on 17-6-5.
 */











const routes = [{ path: '/', name: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about___default.a }, { path: '/register', name: 'register', component: __WEBPACK_IMPORTED_MODULE_0__components_register_register___default.a }, { path: '/wechatpay', name: 'wechatpay', component: __WEBPACK_IMPORTED_MODULE_1__components_wechatpay_wechatpay___default.a }, { path: '/info', name: 'info', component: __WEBPACK_IMPORTED_MODULE_3__components_info_info___default.a, alias: ['/appid', '/payid', '/paycertificate', '/paypw', '/infoid'] }, {
  path: '/config',
  component: __WEBPACK_IMPORTED_MODULE_4__components_config_config___default.a,
  children: [{ path: 'relation', name: 'relation', component: __WEBPACK_IMPORTED_MODULE_7__components_config_relation___default.a, alias: ['/', '/relation'] }, { path: 'test', name: 'test', component: __WEBPACK_IMPORTED_MODULE_8__components_config_test___default.a, alias: '/test' }, { path: 'control', name: 'control', component: __WEBPACK_IMPORTED_MODULE_9__components_config_control___default.a, alias: '/control' }]
}, { path: '/empower', name: 'empower', component: __WEBPACK_IMPORTED_MODULE_5__components_empower_empower___default.a }, { path: '/complete', name: 'complete', component: __WEBPACK_IMPORTED_MODULE_6__components_complete_complete___default.a }, { path: '*', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about___default.a }];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head_head__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_head_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer_footer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_footer_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    'pro-head': __WEBPACK_IMPORTED_MODULE_0__components_head_head___default.a,
    'pro-footer': __WEBPACK_IMPORTED_MODULE_1__components_footer_footer___default.a,
    'pro-sidebar': __WEBPACK_IMPORTED_MODULE_2__components_sidebar_sidebar___default.a
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'pro');
    });
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'complete');
    });
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'config'
      //        this.$store.commit('change_sub', {id: 'relation', parentId: 'config'})
      );
    });
  },
  data() {
    return {
      transitionName: 'fade',
      steps: [{ title: '提交', index: 0 }, { title: '测试', index: 1 }, { title: '控制权', index: 2 }]
    };
  },
  computed: {
    current() {
      return this.$store.state.configStep;
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_ConfigStep', 3);
    });
  },
  methods: {
    _back() {
      this.$router.push('test');
    },
    _submit() {
      alert('submit');
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    var checkTemplateId = (rule, value, callback) => {
      var age = parseInt(value, 10);

      setTimeout(() => {
        if (!Number.isInteger(age)) {
          callback(new Error('请输入数字值'));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品秘钥'));
      }
      callback();
    };
    var vaildateAppid = (rule, value, callback) => {
      //检查APPID
      if (value === '') {
        callback(new Error('请输入小程序APPID'));
      }
      callback();
    };
    var checkGoodId = (rule, value, callback) => {
      //检查商品号
      if (value === '') {
        callback(new Error('请输入您的商品号'));
      }
      callback();
    };
    return {
      name: '',
      action: '',
      customForm: {
        appid: '',
        goodsid: '',
        pass: '',
        templateid: ''
      },
      customRules: {
        appid: [{
          required: true,
          message: '请填写您的小程序APPID'
        }, { validator: vaildateAppid }],
        pass: [{
          required: true,
          message: '请填写您的商品秘钥'
        }, { validator: validatePass }],
        templateid: [{
          required: true,
          message: '请填写您的模板ID'
        }, { validator: checkTemplateId }],
        goodsid: [{
          required: true,
          message: '请填写您的商品号'
        }, { vaildator: checkGoodId }],
        certificate: [{
          require: true,
          message: '请上传您的微信支付证书'
        }]
      },
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      this.$router.push('/config/test');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onChange() {}
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info.file.name + ' 上传成功.');
    } else if (info.file.status === 'error') {
      console.log(info.file.name + ' 上传失败.');
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_ConfigStep', 1);
    });
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_ConfigStep', 2);
    });
  },
  methods: {
    _back() {
      this.$router.push('relation');
    },
    _next() {
      this.$router.push('control');
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'empower');
    });
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      fromdiv: 'appid',
      listHeight: [],
      scrollY: 0,
      classMap: ['appid', 'payid', 'paycertificate', 'paypw', 'infoid']
    };
  },
  components: {
    'page-footer': __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default.a
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'info');
      this.$refs.contentWrapper.addEventListener('scroll', this.handleScroll //监听器
      );this._calculateHeight //计算高度
      ();let todiv = this.$route.path.split('/')[1];
      if (todiv === 'appid' || todiv === 'info') {
        return;
      }
      this.scrollTo(this.fromdiv, todiv);
    });
  },
  methods: {
    _calculateHeight() {
      //计算高度
      let infoList = this.$refs.contentWrapper.getElementsByClassName('info-part-hook');

      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < infoList.length; i++) {
        let item = infoList[i];
        height += item.scrollHeight; //获得每个的累加高度
        this.listHeight.push(height);
      }
    },
    handleScroll() {
      this.scrollY = this.$refs.contentWrapper.scrollTop; //监听滚动变化
    },
    scrollTo(fromdiv, todiv) {
      this.fromdiv = todiv;
      let now = document.getElementById(fromdiv).offsetTop;
      let to = document.getElementById(todiv).offsetTop;
      let Speed = (to - now) / (500 / 24); //计算它的滑动速度
      Speed = Speed > 0 ? Math.ceil(Speed) : Math.floor(Speed //进行取整，便于计算
      );const istoBottom = now < to;
      var t = setInterval(function () {
        now = document.getElementsByClassName('info-wrapper')[0].scrollTop;
        // console.log(`now -> ${now} ,  to -> ${to}`, Speed)
        if (istoBottom && now >= to) {
          //添加容错值
          clearInterval(t);
        } else if (!istoBottom && to >= now) {
          clearInterval(t);
        }
        document.getElementsByClassName('info-wrapper')[0].scrollTop += Speed;
      }, 24);
    }
  },
  computed: {},
  watch: {
    scrollY(oldVal, newVal) {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
          let itemName = this.classMap[i];
          this.$store.commit('change_sub', { id: itemName, parentId: 'info' });
          return 0;
        }
        this.$store.commit('change_sub', { id: this.classMap[0], parentId: 'info' });
      }
    },
    '$route'(to, from) {
      let toPath = to.path.split('/')[1];
      //        clearInterval(this.timer)
      this.scrollTo(this.fromdiv, toPath);
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    back: {
      type: String,
      required: true
    },
    next: {
      type: String,
      required: true
    }
  },
  methods: {
    _back() {
      console.log(`goto the ${this.back}`);
      this.$router.push(this.back);
    },
    _next() {
      console.log(`goto the ${this.next}`);
      this.$router.push(this.next);
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'page-footer': __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default.a
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'register');
    });
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: __WEBPACK_IMPORTED_MODULE_0__text__["a" /* default */],
      classMap: ['appid', 'payid', 'paycertificate', 'paypw', 'infoid']
    };
  },
  methods: {
    selectbarId(id) {
      this.$store.commit('change_sidebar', id);
    },
    selectSubSection(id, parentId) {
      /*        if (parentId === 'config') {
       //          console.log(`/${parentId}/${id}`)
       this.$router.push(`${id}`)
       } else if (parentId === 'info') {
       this.$router.push(`${id}`)
       }*/
      this.$router.push(`${id}`);

      this.$store.commit('change_sub', { id: id, parentId: parentId } //vuex传值
      );
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
    subId() {
      return this.$store.state.subId;
    }
  },
  watch: {
    '$route'(to, from) {
      let toPath = to.path.split('/')[1];
      //        console.log('toPath' + toPath)
      for (let i; i < this.classMap.length; i++) {
        if (toPath === this.classMap[i]) {
          this.$store.commit('change_sub', { id: toPath, parentId: 'info' });
          return 0;
        }
      }
      if (toPath === 'info') {
        toPath = 'appid';
        this.$store.commit('change_sub', { id: toPath, parentId: 'info' });
      } else if (toPath === 'config') {
        toPath = 'relation';
        this.$store.commit('change_sub', { id: toPath, parentId: 'config' });
      }
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/*底部组件*/
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'page-footer': __WEBPACK_IMPORTED_MODULE_0__page_footer_page_footer___default.a
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('change_sidebar', 'wechatpay');
    });
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/wx-QRcode.e75d722.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/Logo1.44538b0.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/Logo2.09ecbe8.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPID-image1.1154999.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPID-image2.f9c6101.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPPAYID-image1.f165f58.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPPAYID-image2.3265067.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPPayKey-image1.0813caa.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/APPPayKey-image2.87098f2.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/authentication-image1.b220cf8.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image1.a7cafd5.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image10.b4351d2.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image2.7a10073.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image3.c200361.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image4.bc8cdca.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image5.e2ca02d.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image6.0cd8a27.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image7.fb8f670.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image8.539ac43.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/register-image9.d788077.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/WeChatPay_image1.a651156.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/WeChatPay_image2.fc860e4.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(92),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(88),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(87),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(80),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(90),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(83),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(89),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(82),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(85),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(91),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(86),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "config-wrapper"
  }, [_c('div', {
    staticClass: "config-title"
  }, [_vm._v("配置")]), _vm._v(" "), _c('div', {
    staticClass: "step-wrapper"
  }, [_c('v-steps', {
    attrs: {
      "current": _vm.current - 1
    }
  }, _vm._l((_vm.steps), function(s) {
    return _c('v-step', {
      key: s.index,
      attrs: {
        "title": s.title
      }
    })
  }))], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wechatpay-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('v-timeline', {
    staticClass: "wechatpay-content-wrapper"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "wechatPart"
  }, [_vm._v("完成服务号认证")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("微信支付功能目前仅对完成微信认证的服务号开放申请(企业、媒体、政府及其他组织)。\t若公众帐号符合开放申请要求，可直接进入第二步(微信公众平台提交资料)")]), _vm._v(" "), _c('li', [_vm._v(" 订阅号可先升级为服务号，升级方法：登录 "), _c('a', {
    attrs: {
      "target": "_Blank",
      "href": "https://mp.weixin.qq.com/"
    }
  }, [_vm._v("微信公众平台")]), _vm._v(" —设置—帐号信息—升级为服务号")]), _vm._v(" "), _c('li', [_vm._v(" 未认证的服务号需先完成微信认证。注:商户申请微信认证的主体与申请开通微信支付功能的主体需保持一致。")])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "wechatPart"
  }, [_vm._v("完成申请资料审核")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v(" 1、登录微信公众平台，进入：服务-服务中心-商户功能;")]), _vm._v(" "), _c('li', [_vm._v("2、提交商户基本资料\t请准确选择经营范围，并如实填写出售的商品/服务信息，此处填写的信息将作为日后运营监管的依据;")]), _vm._v(" "), _c('li', [_vm._v("3、提交业务审核资料\t商户提交的资料，主体需与微信认证主体保持一致，以保证运营主体即认证主体")]), _vm._v(" "), _c('li', [_vm._v("4、提交财务审核资料\t商户提交的财务资料，主体需与业务审核资料主体一致，以保证结算主体即运营主体;商户提交的所有资料，需加盖公章。")]), _vm._v(" "), _c('li', [_vm._v("5、资料审核：\n          "), _c('ul', [_c('li', [_vm._v("1)商户申请资料提交成功后，腾讯在7个工作日内反馈审核结果;")]), _vm._v(" "), _c('li', [_vm._v("2)审核结果将以电子邮件的形式告知商户。商户也可登录微信公众平台，点击页面右上角小信封图标查看。\n              "), _c('img', {
    staticClass: "wechat-img",
    attrs: {
      "src": __webpack_require__(63),
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', [_vm._v("\n              3)审核通过的通知邮件中，将包含非常重要的开发参数，请商户牢记申请时填写的“重要邮箱”地址，相关通知一经发送至\t“重要邮箱”地址，则视为腾讯已经向商户履行了通知义务。重要邮箱”是商户在填写“业务审核资料”时设置的：\n              "), _c('img', {
    staticClass: "wechat-img",
    attrs: {
      "src": __webpack_require__(64),
      "alt": ""
    }
  })])])])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "wechatPart"
  }, [_vm._v("功能开发、合同签订")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("1、资料审核通过的商户可以进行功能开发工作：腾讯提供清晰的开发接口文档，帮助商户顺利完成功能开发工作。")]), _vm._v(" "), _c('p', [_vm._v("注：为了不耽误进入申请流程中的第四步，即“缴纳保证金”、“申请发布全网“及”销售商品“流程，建议商户将合同签订与功能开发同步进行。\n          ")])]), _vm._v(" "), _c('li', [_vm._v("2、 签订合同\n          "), _c('ul', [_c('li', [_vm._v("1)资料审核通过后，商户对合同进行盖章确认后请根据指引寄至腾讯。")]), _vm._v(" "), _c('li', [_vm._v("2)若申请开通公众号支付功能，商户需签订《微信公众平台商户功能服务协议》和《微信支付服务协议》。")]), _vm._v(" "), _c('li', [_vm._v("3)若申请开通APP支付功能，商户需签订《微信支付服务协议》，无需签订《微信公众平台商户功能服务协议》。")]), _vm._v(" "), _c('li', [_vm._v("4)若申请同时开通公众号支付和APP支付功能，需签订《微信公众平台商户功能服务协议》和《微信支付服务协议》。")]), _vm._v(" "), _c('li', [_vm._v("5)腾讯在收到商户寄回的合同后，会由专人负责审核，确认无误后，会尽快盖章并按照约定的份数寄还商户。")])]), _vm._v(" "), _c('p', [_vm._v("注：商户盖章时请注意加盖骑缝章。")])])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "wechatPart"
  }, [_vm._v("开通商户功能")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("1、缴纳风险保证金：\n          "), _c('ul', [_c('li', [_vm._v("1)商户登录财付通账户缴纳风险保证金;\t该财付通账户的登录id和密码可在资料审核通过时腾讯发送的通知邮件中查看，登录id即：partnerid，登录密码即：partnerkey。")]), _vm._v(" "), _c('li', [_vm._v("2)未缴纳风险保证金不影响开通商户功能，但保证金足额缴纳是款项结算服务开通的前提。")])])]), _vm._v(" "), _c('li', [_vm._v("2、开通商户功能是指测试白名单之外的微信号也能在商户的公众帐号内使用微信支付功能，开通商户功能之后才能在公众帐号内售卖商品或服务。")])])])], 1), _vm._v(" "), _c('page-footer', {
    attrs: {
      "back": 'register',
      "next": 'info'
    }
  }, [_c('span', {
    slot: "back-text"
  }, [_vm._v("小程序注册及认证")]), _vm._v(" "), _c('span', {
    slot: "next-text"
  }, [_vm._v("信息获取")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wechatpay-title-wrapper"
  }, [_c('h3', {
    staticClass: "wechatpay-title"
  }, [_vm._v("开通微信支付")])])
}]}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "relation-wrapper "
  }, [_c('div', {
    staticClass: "relation-left-wrapper"
  }, [_c('h4', {
    staticClass: "relation-title"
  }, [_vm._v("绑定小程序")]), _vm._v(" "), _c('v-form', {
    ref: "customRuleForm",
    staticClass: "relation-form",
    attrs: {
      "direction": "horizontal",
      "model": _vm.customForm,
      "rules": _vm.customRules
    }
  }, [_c('v-form-item', {
    staticClass: "form-item",
    attrs: {
      "label": "小程序APPID",
      "label-col": _vm.labelCol,
      "wrapper-col": _vm.wrapperCol,
      "prop": "appid",
      "has-feedback": ""
    }
  }, [_c('v-input', {
    attrs: {
      "size": "large",
      "placeholder": "我们需要您的小程序APPID"
    },
    model: {
      value: (_vm.customForm.appid),
      callback: function($$v) {
        _vm.customForm.appid = $$v
      },
      expression: "customForm.appid"
    }
  })], 1), _vm._v(" "), _c('v-form-item', {
    staticClass: "form-item",
    attrs: {
      "label": "微信支付商品号",
      "label-col": _vm.labelCol,
      "wrapper-col": _vm.wrapperCol,
      "prop": "goodsid",
      "has-feedback": ""
    }
  }, [_c('v-input', {
    attrs: {
      "size": "large",
      "placeholder": "我们需要您的商品号"
    },
    model: {
      value: (_vm.customForm.goodsid),
      callback: function($$v) {
        _vm.customForm.goodsid = $$v
      },
      expression: "customForm.goodsid"
    }
  })], 1), _vm._v(" "), _c('v-form-item', {
    staticClass: "form-item",
    attrs: {
      "label": "支付商品秘钥",
      "label-col": _vm.labelCol,
      "wrapper-col": _vm.wrapperCol,
      "prop": "pass",
      "has-feedback": ""
    }
  }, [_c('v-input', {
    attrs: {
      "type": "password",
      "size": "large",
      "placeholder": "我们需要您的商品秘钥"
    },
    model: {
      value: (_vm.customForm.pass),
      callback: function($$v) {
        _vm.customForm.pass = $$v
      },
      expression: "customForm.pass"
    }
  })], 1), _vm._v(" "), _c('v-form-item', {
    staticClass: "form-item",
    attrs: {
      "label": "上传微信支付证书",
      "label-col": _vm.labelCol,
      "wrapper-col": _vm.wrapperCol,
      "prop": "certificate"
    }
  }, [_c('span', {
    staticClass: "from-import-icon"
  }, [_vm._v("*")]), _vm._v(" "), _c('div', {
    staticClass: "upload-area"
  }, [_c('v-upload', {
    attrs: {
      "name": _vm.name,
      "action": _vm.action,
      "drag": ""
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('v-icon', {
    attrs: {
      "type": "plus"
    }
  })], 1)], 1)]), _vm._v(" "), _c('v-form-item', {
    staticClass: "relation-button-wrapper",
    attrs: {
      "wrapper-col": {
        offset: 6,
        span: 14
      }
    }
  }, [_c('v-button', {
    staticClass: "relation-button",
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.submitForm('customRuleForm')
      }
    }
  }, [_vm._v("提交\n        ")]), _vm._v(" "), _c('v-button', {
    staticClass: "relation-button",
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.resetForm('customRuleForm')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "relation-right-wrapper"
  }, [_c('img', {
    staticClass: "relation-img",
    attrs: {
      "src": __webpack_require__(43),
      "alt": ""
    }
  })])
}]}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-footer-wrapper clearfix"
  }, [_c('div', {
    staticClass: "pull-left",
    on: {
      "click": _vm._back
    }
  }, [_c('v-icon', {
    attrs: {
      "type": "arrow-left"
    }
  }), _vm._v(" "), _vm._t("back-text")], 2), _vm._v(" "), _c('div', {
    staticClass: "pull-right",
    on: {
      "click": _vm._next
    }
  }, [_c('v-icon', {
    attrs: {
      "type": "arrow-right"
    }
  }), _vm._v(" "), _vm._t("next-text")], 2)])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro-header-wrapper"
  }, [_c('img', {
    staticClass: "logo-wrapper",
    attrs: {
      "src": __webpack_require__(45),
      "alt": "logo"
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "head-text"
  }, [_vm._v("量身定制你的小程序")])])
}]}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("这是一个页面")])
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('pro-head'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('pro-sidebar'), _vm._v(" "), _c('div', {
    staticClass: "pro-content-wrapper"
  }, [_c('router-view', {
    staticClass: "pro-content"
  })], 1)], 1), _vm._v(" "), _c('pro-footer')], 1)
},staticRenderFns: []}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "contentWrapper",
    staticClass: "info-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "info-content-wrapper"
  }, [_c('div', {
    staticClass: "info-part-hook",
    attrs: {
      "id": "appid"
    }
  }, [_vm._m(1), _vm._v(" "), _c('v-timeline', {
    staticClass: "info-content-part"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("微信小程序账户")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("登录微信公众平台官网首页（"), _c('a', {
    attrs: {
      "href": "http://mp.weixin.qq.com",
      "target": "_Blank"
    }
  }, [_vm._v("mp.weixin.qq.com")]), _vm._v("）—输入已有的账号密码-点击登录\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(46),
      "alt": ""
    }
  })]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("微信扫码验证身份")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("为了保障账号安全，需要微信扫码确认登录")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(47),
      "alt": ""
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "info-part-hook",
    attrs: {
      "id": "payid"
    }
  }, [_vm._m(2), _vm._v(" "), _c('v-timeline', {
    staticClass: "info-content-part"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("登录微信支付商品平台")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("登录微信支付商品平台（"), _c('a', {
    attrs: {
      "href": "http://pay.weixin.qq.com",
      "target": "_blank"
    }
  }, [_vm._v("pay.weixin.qq.com")]), _vm._v("）—通过商户平台登录账号和密码-点击登录\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(48),
      "alt": ""
    }
  })]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付商品号")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("登录成功后，依次点击账户中心—商户信息，在基本账户信息里面就有我们所需要的微信支付商品号")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(49),
      "alt": ""
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "info-part-hook",
    attrs: {
      "id": "paycertificate"
    }
  }, [_vm._m(3), _vm._v(" "), _c('v-timeline', {
    staticClass: "info-content-part"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付证书")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("登录成功后，依次点击账户中心—API安全，在API证书里面点击 下载证书。 下载后请解压其中的 .p12 文件，并将其上传\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(4),
      "alt": ""
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "info-part-hook",
    attrs: {
      "id": "paypw"
    }
  }, [_vm._m(4), _vm._v(" "), _c('v-timeline', {
    staticClass: "info-content-part"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("设置API密钥")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("登录成功后，依次点击账户中心—API安全，在API密钥里面的设置API密钥，点击 设置密钥。\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(50),
      "alt": ""
    }
  })]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付商户密钥")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("点击设置密钥后，按要求填入信息（密钥由自己设置，32个字符），然后就可以使用自己设置的微信支付商品密钥了。\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(51),
      "alt": ""
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "info-part-hook",
    attrs: {
      "id": "infoid"
    }
  }, [_vm._m(5), _vm._v(" "), _c('v-timeline', {
    staticClass: "info-content-part"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "info-content-part-title"
  }, [_vm._v("标题标题标题")]), _vm._v(" "), _c('p', {
    staticClass: "info-content-part-text"
  }, [_vm._v("段落段落段落段落段落段落，段落段落段落段落段落段落段，落段落段落段落段落段落段落段落。\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "info-content-part-img",
    attrs: {
      "src": __webpack_require__(4),
      "alt": ""
    }
  })])], 1)], 1)]), _vm._v(" "), _c('page-footer', {
    attrs: {
      "back": 'wechatpay',
      "next": 'config'
    }
  }, [_c('span', {
    slot: "back-text"
  }, [_vm._v("开通微信支付")]), _vm._v(" "), _c('span', {
    slot: "next-text"
  }, [_vm._v("配置")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-part-wrapper"
  }, [_c('h2', {
    staticClass: "info-part-title"
  }, [_vm._v("信息获取")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-content-part-title-wrapper"
  }, [_c('h3', {
    staticClass: "info-content-part-title"
  }, [_vm._v("小程序APPID获取")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-content-part-title-wrapper"
  }, [_c('h3', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付商品号")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-content-part-title-wrapper"
  }, [_c('h3', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付证书")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-content-part-title-wrapper"
  }, [_c('h3', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取微信支付密钥")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-content-part-title-wrapper"
  }, [_c('h3', {
    staticClass: "info-content-part-title"
  }, [_vm._v("获取推送消息模板ID")])])
}]}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro-sidebar-wrapper"
  }, [_c('div', {
    staticClass: "pro-side-menu"
  }, [_c('ul', _vm._l((_vm.items), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.selectbarId(item.id)
        }
      }
    }, [_c('router-link', {
      staticClass: "sidebar-link",
      class: {
        current: _vm.sidebar == item.id
      },
      attrs: {
        "to": ("/" + (item.id))
      }
    }, [_vm._v(_vm._s(item.text) + "\n          ")]), _vm._v(" "), (item.subitems.length > 0) ? _c('ul', _vm._l((item.subitems), function(subitem) {
      return _c('li', {
        on: {
          "click": function($event) {
            _vm.selectSubSection(subitem.id, item.id)
          }
        }
      }, [_c('a', {
        staticClass: "section-link",
        class: {
          active: _vm.subId == subitem.id
        }
      }, [_vm._v(_vm._s(subitem.text))])])
    })) : _vm._e()], 1)
  }))])])
},staticRenderFns: []}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "control-button-wrapper"
  }, [_c('v-button', {
    staticClass: "control-button",
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm._back
    }
  }, [_vm._v("返回上一步")]), _vm._v(" "), _c('v-button', {
    staticClass: "control-button",
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm._submit
    }
  }, [_vm._v("确认绑定")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "code-wrapper"
  }, [_c('span', [_vm._v("扫码进行账户控制权关联~")]), _vm._v(" "), _c('div', {
    staticClass: "control-code"
  })])
}]}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("这是一个页面")])
},staticRenderFns: []}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro-footer-wrapper"
  }, [_c('div', {
    staticClass: "footer-content-wrapper"
  }, [_c('div', {
    staticClass: "footer-about-wrapper"
  }, [_c('img', {
    staticClass: "footer-about-logo-wrapper",
    attrs: {
      "src": __webpack_require__(44),
      "alt": "logo"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "footer-about-text"
  }, [_vm._v("MOTHIN")])]), _vm._v(" "), _c('div', {
    staticClass: "copyright-text-wrapper"
  }, [_c('span', {
    staticClass: "copyright-text"
  }, [_vm._v("\n      Copyright © 2017 MOTHIN 粤ICP备10046号 | 粤公网安备11010802020134号 | 粤ICP证110507号\n    ")])])])])
}]}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "test-button-wrapper"
  }, [_c('v-button', {
    staticClass: "test-button",
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm._back
    }
  }, [_vm._v("返回上一步")]), _vm._v(" "), _c('v-button', {
    staticClass: "test-button",
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm._next
    }
  }, [_vm._v("前往下一步")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "code-wrapper"
  }, [_c('span', [_vm._v("马上扫码测试吧~")]), _vm._v(" "), _c('div', {
    staticClass: "test-code"
  })])
}]}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('v-timeline', {
    staticClass: "register-content-wrapper"
  }, [_c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("注册小程序账户")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("在"), _c('a', {
    staticStyle: {
      "margin": "0 5px"
    },
    attrs: {
      "target": "_Blank",
      "href": "https://mp.weixin.qq.com/"
    }
  }, [_vm._v("微信公众平台官网首页")]), _vm._v("点击右上角的“立即注册”按钮。\n          "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(53)
    }
  })])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("选择注册的账户类型")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("选择“小程序”，点击“查看类型区别”可查看不同类型帐号的区别和优势。\n          "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(55)
    }
  })])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("填写邮箱和密码")]), _vm._v(" "), _c('li', [_vm._v("请填写未注册过公众平台、开放平台、企业号、未绑定个人号的邮箱。")])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("激活邮箱")]), _vm._v(" "), _c('li', [_vm._v("登录邮箱，查收激活邮件，点击激活链接。")])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("填写主体信息")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("点击激活链接后，继续下一步的注册流程。请选择主体类型选择，完善主体信息和管理员信息。")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("a)选择主体类型"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(56)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("主体类型说明如下：\n          "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(57)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("b)填写主体信息并选择验证方式")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("i、企业类型帐号可选择两种主体验证方式。")]), _vm._v(" "), _c('li', [_vm._v("方式一：需要用公司的对公账户向腾讯公司打款来验证主体身份。打款信息在提交主体信息后可以查看到。 ")]), _vm._v(" "), _c('li', [_vm._v("方式二：通过微信认证验证主体身份，需支付300元认证费。认证通过前，小程序部分功能暂无法使用。\n            "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(58)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("ii、 政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。认证通过前，小程序部分功能暂无法使用。\n            "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(59)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("iii、 微信认证入口：登录小程序 - 设置 - 微信认证详情"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(60)
    }
  })])]), _vm._v(" "), _c('li', [_vm._v("c)填写管理员信息"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(61)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("d)确认主体信息不可变更"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(62)
    }
  })]), _vm._v(" "), _c('li', [_vm._v("e)点击确认完成注册流程"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(54)
    }
  })])])])]), _vm._v(" "), _c('v-timeline-item', [_c('h4', {
    staticClass: "registerPart"
  }, [_vm._v("小程序申请微信认证")]), _vm._v(" "), _c('li', [_vm._v("政府、媒体、其他组织类型帐号，必须通过微信认证验证主体身份。企业类型帐号，可以根据需要确定是否申请微信认证。已认证帐号可使用微信支付权限。")]), _vm._v(" "), _c('li', [_vm._v("个人类型帐号暂不支持微信认证。")]), _vm._v(" "), _c('li', [_vm._v("认证入口：登录小程序—设置—基本设置—微信认证—详情\n        "), _c('img', {
    staticClass: "register-img",
    attrs: {
      "src": __webpack_require__(52)
    }
  })])])], 1), _vm._v(" "), _c('page-footer', {
    attrs: {
      "back": 'about',
      "next": 'wechatpay'
    }
  }, [_c('span', {
    slot: "back-text"
  }, [_vm._v("关于大赞pro ")]), _vm._v(" "), _c('span', {
    slot: "next-text"
  }, [_vm._v("微信支付")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register-title-wrapper"
  }, [_c('h2', {
    staticClass: "register-title"
  }, [_vm._v("小程序注册及认证")])])
}]}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about-wrapper"
  }, [_vm._v("\n  关于大赞pro\n")])
},staticRenderFns: []}

/***/ })
],[11]);