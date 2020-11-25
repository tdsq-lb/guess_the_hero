(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game/game"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/main.js?{"page":"pages%2Fgame%2Fgame"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _game = _interopRequireDefault(__webpack_require__(/*! ./pages/game/game.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_game.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!***************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/pages/game/game.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=0fefbc46& */ 14);
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.vue?vue&type=style&index=0&lang=scss& */ 28);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/game/game.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!**********************************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=template&id=0fefbc46& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game.vue?vue&type=template&id=0fefbc46& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_template_id_0fefbc46___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=template&id=0fefbc46& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.getImgUrl(_vm.topicItem.images)

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.now = _vm.now === 0 ? _vm.audio.length - 1 : _vm.now - 1
    }

    _vm.e1 = function($event) {
      _vm.now = _vm.now === _vm.audio.length - 1 ? 0 : _vm.now + 1
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));









































var _util = __webpack_require__(/*! ../../util/util.js */ 21);


var _power = _interopRequireDefault(__webpack_require__(/*! component/power.vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var Select = function Select() {__webpack_require__.e(/*! require.ensure | component/select-number */ "component/select-number").then((function () {return resolve(__webpack_require__(/*! component/select-number.vue */ 55));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var ImtAudio = function ImtAudio() {__webpack_require__.e(/*! require.ensure | component/imt-audio */ "component/imt-audio").then((function () {return resolve(__webpack_require__(/*! component/imt-audio.vue */ 60));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var Options = function Options() {__webpack_require__.e(/*! require.ensure | component/options-list */ "component/options-list").then((function () {return resolve(__webpack_require__(/*! component/options-list.vue */ 67));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



{
  data: function data() {
    return {
      isLogin: null,
      topicItem: {},
      selectNameArr: [], // 名称选项数组
      now: 0,
      audio: [],
      isCorrect: true, // 是否显示图片
      selectNumber: 3,
      refItem: 1,
      item1: true,
      item2: true,
      item3: true,
      item4: true };

  },
  components: {
    Power: _power.default,
    Select: Select,
    ImtAudio: ImtAudio,
    Options: Options },

  created: function created() {
    this.initData();
    uni.showLoading({
      title: '加载中',
      mask: true });

  },
  methods: {
    // 选择次数 传递给Select子组件
    handleSelectNumber: function handleSelectNumber(val) {
      this.selectNumber = val;
    },
    handleNextQuestion: function handleNextQuestion() {
      this.initData();
    },
    // 获取答题数据
    initData: function initData() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result, data, than;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.isCorrect = true;_context.next = 3;return (
                  _this.$myRequest({
                    url: "/api/topic" }));case 3:result = _context.sent;

                console.log(result.data);
                _this.topicItem = result.data.data;
                _this.selectNameArr = result.data.selectNameArr;
                data = result.data.data;
                _this.audio = [];
                if (data.wav) {
                  than = _this;
                  data.wav.forEach(function (item) {
                    var BASE_URL = 'https://tdsq.top/static/wav/';
                    var srcwav = BASE_URL + item;
                    _this.audio.push(srcwav);
                  });
                }case 10:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 提示
    handleVisible: function handleVisible() {
      this.isLogin = (0, _util.checkIsLogin)();
      if (this.isLogin) {
        if (this.refItem <= 4) {
          this['item' + this.refItem] = false;
          this.refItem = this.refItem + 1;
          // 提示减体力值
          // this.$refs.childPowerRef.handlePowerRef()
        }
      }
    },
    // 回答正确 显示图片
    handleShowMask: function handleShowMask() {
      this.isCorrect = false;
    },
    // 下一题 隐藏图片 关闭提示的图片
    handleHideMask: function handleHideMask() {
      this.isCorrect = true;
      this.refItem = 1;
      for (var i = 4; i >= 1; i--) {
        console.log(i, '=================>>>');
        this['item' + i] = true;
      }

    },
    getImgUrl: function getImgUrl(img) {
      if (img) {
        return "https://tdsq.top/static/lol_img/".concat(img);
      }
    },
    imageLoad: function imageLoad(e) {
      console.log(e.detail, '背景图片加载完成 =====>>>>');
      uni.hideLoading();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/*!***************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/component/power.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./power.vue?vue&type=template&id=d2a16256& */ 23);
/* harmony import */ var _power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./power.vue?vue&type=script&lang=js& */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["render"],
  _power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "component/power.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!**********************************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/component/power.vue?vue&type=template&id=d2a16256& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./power.vue?vue&type=template&id=d2a16256& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_template_id_d2a16256___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/台词猜英雄/guess_the_hero/component/power.vue?vue&type=template&id=d2a16256& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!****************************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/component/power.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./power.vue?vue&type=script&lang=js& */ 26);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_power_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/台词猜英雄/guess_the_hero/component/power.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






var _power_util = __webpack_require__(/*! ../util/power_util.js */ 27); //
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      count: '',
      timer: '' };

  },
  created: function created() {
    console.log(undefined === false);
    var power = (0, _power_util.getPower)();
    if (!power) {
      (0, _power_util.setPower)(5);
      this.$data.count = (0, _power_util.getPower)();
    } else {
      this.$data.count = (0, _power_util.getPower)();
    }
    if (this.$data.count !== 5) {
      var currentTime = Date.parse(new Date()); //	当前时间
      var second = parseInt((currentTime - (0, _power_util.getTimeStamp)()) / 1000 / 60);
      var num = parseInt(second / 2);
      if (!num) {
        console.log('进来这');
        this.$data.count += num;
        this.timers();
      }
    }

  },
  methods: {
    handlePowerRef: function handlePowerRef() {
      var count = this.$data.count - 1;
      if (count >= 0) {
        this.$data.count = count;
        this.timers();
        (0, _power_util.setTimeStamp)();
        (0, _power_util.setPower)(this.$data.count);
      } else {
        uni.showModal({
          showCancel: false,
          content: '体力不足',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            }
          } });

      }
    },
    AddPower: function AddPower() {
      var count = this.$data.count;
      if (count == 5) {
        clearInterval(this.timer);
      } else {
        this.$data.count = count + 1;
        console.log(this.$data.count, '加体力=============>>>>>');
        (0, _power_util.setTimeStamp)();
        (0, _power_util.setPower)(this.$data.count);
      }
    },
    timers: function timers() {
      clearInterval(this.timer);
      this.timer = setInterval(this.AddPower, 10000);
    } },

  mounted: function mounted() {

  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 27 */,
/* 28 */
/*!*************************************************************************************!*\
  !*** F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game.vue?vue&type=style&index=0&lang=scss& */ 29);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/台词猜英雄/guess_the_hero/pages/game/game.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/MjcwNyIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/OGJmYyIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/NzBhZSIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/ZDlhNSIsInVuaS1hcHA6Ly8vcGFnZXMvZ2FtZS9nYW1lLnZ1ZSIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL2NvbXBvbmVudC9wb3dlci52dWU/MDM0NiIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL2NvbXBvbmVudC9wb3dlci52dWU/OGRlZCIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL2NvbXBvbmVudC9wb3dlci52dWU/MmE3NSIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL2NvbXBvbmVudC9wb3dlci52dWU/YjllMiIsInVuaS1hcHA6Ly8vY29tcG9uZW50L3Bvd2VyLnZ1ZSIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/OWNjZiIsIndlYnBhY2s6Ly8vRjov5Y+w6K+N54yc6Iux6ZuEL2d1ZXNzX3RoZV9oZXJvL3BhZ2VzL2dhbWUvZ2FtZS52dWU/YzUzOCJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSx5RjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUg7QUFDakg7QUFDd0Q7QUFDTDtBQUNjOzs7QUFHakU7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBOGxCLENBQWdCLHduQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMENsbkI7OztBQUdBLHdGOzs7O0FBSUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBO0FBR0EsdUJBSEEsRUFHQTtBQUNBLFlBSkE7QUFLQSxlQUxBO0FBTUEscUJBTkEsRUFNQTtBQUNBLHFCQVBBO0FBUUEsZ0JBUkE7QUFTQSxpQkFUQTtBQVVBLGlCQVZBO0FBV0EsaUJBWEE7QUFZQSxpQkFaQTs7QUFjQSxHQWhCQTtBQWlCQTtBQUNBLHlCQURBO0FBRUEsa0JBRkE7QUFHQSxzQkFIQTtBQUlBLG9CQUpBLEVBakJBOztBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTs7QUFJQSxHQTdCQTtBQThCQTtBQUNBO0FBQ0Esc0JBRkEsOEJBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQSxLQUpBO0FBS0Esc0JBTEEsZ0NBS0E7QUFDQTtBQUNBLEtBUEE7QUFRQTtBQUNBLFlBVEEsc0JBU0E7QUFDQSx1Q0FEQTtBQUVBO0FBQ0EscUNBREEsR0FGQSxTQUVBLE1BRkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0Esb0JBUkEsR0FRQSxnQkFSQTtBQVNBO0FBQ0E7QUFDQSxzQkFEQSxHQUNBLEtBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUpBO0FBS0EsaUJBakJBO0FBa0JBLEtBM0JBO0FBNEJBO0FBQ0EsaUJBN0JBLDJCQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkNBO0FBd0NBO0FBQ0Esa0JBekNBLDRCQXlDQTtBQUNBO0FBQ0EsS0EzQ0E7QUE0Q0E7QUFDQSxrQkE3Q0EsNEJBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBckRBO0FBc0RBLGFBdERBLHFCQXNEQSxHQXREQSxFQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMURBO0FBMkRBLGFBM0RBLHFCQTJEQSxDQTNEQSxFQTJEQTtBQUNBO0FBQ0E7QUFDQSxLQTlEQSxFQTlCQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBK2xCLENBQWdCLHluQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09ubkIsdUU7Ozs7OztlQU1BO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7O0FBSUEsR0FOQTtBQU9BLFNBUEEscUJBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0EzQkE7QUE0QkE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsTUFLQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBLDJCQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVJBOztBQVVBO0FBQ0EsS0FwQkE7QUFxQkEsWUFyQkEsc0JBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0JBO0FBZ0NBLFVBaENBLG9CQWdDQTtBQUNBO0FBQ0E7QUFDQSxLQW5DQSxFQTVCQTs7QUFpRUEsU0FqRUEscUJBaUVBOztBQUVBLEdBbkVBO0FBb0VBLGVBcEVBLDJCQW9FQTtBQUNBO0FBQ0EsR0F0RUEsRTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQWdtQyxDQUFnQiwwa0NBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQXBuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2dhbWUvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9nYW1lL2dhbWUudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZlZmJjNDYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9nYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZ2FtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZ2FtZS9nYW1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZlZmJjNDYmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBtMCA9IF92bS5nZXRJbWdVcmwoX3ZtLnRvcGljSXRlbS5pbWFnZXMpXG5cbiAgaWYgKCFfdm0uX2lzTW91bnRlZCkge1xuICAgIF92bS5lMCA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgX3ZtLm5vdyA9IF92bS5ub3cgPT09IDAgPyBfdm0uYXVkaW8ubGVuZ3RoIC0gMSA6IF92bS5ub3cgLSAxXG4gICAgfVxuXG4gICAgX3ZtLmUxID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBfdm0ubm93ID0gX3ZtLm5vdyA9PT0gX3ZtLmF1ZGlvLmxlbmd0aCAtIDEgPyAwIDogX3ZtLm5vdyArIDFcbiAgICB9XG4gIH1cblxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIG0wOiBtMFxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJnYW1lXCI+XHJcblx0XHQ8aW1hZ2UgY2xhc3M9XCJnYW1lLWJnXCIgc3JjPVwiaHR0cHM6Ly90ZHNxLnRvcC9zdGF0aWMvaW1hZ2VzL2JnLmpwZ1wiIG1vZGU9XCJzY2FsZVRvRmlsbFwiIGxhenktbG9hZCBAbG9hZD1cImltYWdlTG9hZFwiIC8+XHJcblx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiZ2FtZS1wb3NpdGlvblwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImdhbWUtcG9zaXRpb24tcG93ZXJcIj5cclxuXHRcdFx0XHQ8UG93ZXIgcmVmPVwiY2hpbGRQb3dlclJlZlwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJnYW1lLXBvc2l0aW9uLXRpbWVzXCI+XHJcblx0XHRcdFx0PFNlbGVjdCA6c2VsZWN0TnVtYmVyPVwic2VsZWN0TnVtYmVyXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PiAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZ2FtZS1jb250ZW50XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZ2FtZS1jb250ZW50LWhlYWRlclwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3RldHgucG5nXCIgbW9kZT1cInNjYWxlVG9GaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiZ2FtZS1jb250ZW50LWhlYWRlci10aXBzXCIgQGNsaWNrPVwiaGFuZGxlVmlzaWJsZVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBpY29uLXRpc2hpXCI+PC90ZXh0PuaPkOekulxyXG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJnYW1lLWNvbnRlbnQtaW1hZ2VcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiaHR0cHM6Ly90ZHNxLnRvcC9zdGF0aWMvaW1hZ2VzL2hlcm9zaG93LnBuZ1wiIG1vZGU9XCJzY2FsZVRvRmlsbFwiIGxhenktbG9hZCBAbG9hZD1cImltYWdlTG9hZFwiIHYtc2hvdz1cImlzQ29ycmVjdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnYW1lLWNvbnRlbnQtaW1hZ2UtZnJhbWVcIiB2LXNob3c9XCIhaXNDb3JyZWN0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImdldEltZ1VybCh0b3BpY0l0ZW0uaW1hZ2VzKVwiIG1vZGU9XCJzY2FsZVRvRmlsbFwiIGxhenktbG9hZD48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cImdhbWUtY29udGVudC1pbWFnZS1mcmFtZS1NYXNrXCIgdi1zaG93PVwiaXNDb3JyZWN0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtc2hvdz1cIml0ZW0xXCIgY2xhc3M9XCJpdGVtIGxlZnRfdG9wXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LXNob3c9XCJpdGVtMlwiIGNsYXNzPVwiaXRlbSByaWdodF90b3BcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtc2hvdz1cIml0ZW0zXCIgY2xhc3M9XCJpdGVtIGxlZnRfYm90dG9tXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LXNob3c9XCJpdGVtNFwiIGNsYXNzPVwiaXRlbSByaWdodF9ib3R0b21cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImdhbWUtY29udGVudC1hdWRpb1wiPlxyXG5cdFx0XHRcdDxJbXRBdWRpbyByZWY9XCJtYWluaW5kZXhcIiA6c3JjPVwiYXVkaW9bbm93XVwiIEBwcmV2PVwibm93ID0gbm93ID09PSAwP2F1ZGlvLmxlbmd0aC0xOm5vdy0xXCIgQG5leHQ9XCJub3cgPSBub3cgPT09IGF1ZGlvLmxlbmd0aC0xPzA6bm93KzFcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZ2FtZS1jb250ZW50LW9wdGlvbnNcIj5cclxuXHRcdFx0XHQ8T3B0aW9ucyBAaGFuZGxlU2VsZWN0TnVtYmVyPVwiaGFuZGxlU2VsZWN0TnVtYmVyXCIgQGhhbmRsZU5leHRRdWVzdGlvbj1cImhhbmRsZU5leHRRdWVzdGlvblwiIEBoYW5kbGVTaG93TWFzaz1cImhhbmRsZVNob3dNYXNrXCJcclxuXHRcdFx0XHQgQGhhbmRsZUhpZGVNYXNrPVwiaGFuZGxlSGlkZU1hc2tcIiA6ZGF0YWl0ZW09XCJzZWxlY3ROYW1lQXJyXCIgOmFuc3dlPVwidG9waWNJdGVtLm5hbWVcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0Y2hlY2tJc0xvZ2luXHJcblx0fSBmcm9tICcuLi8uLi91dGlsL3V0aWwuanMnXHJcblx0aW1wb3J0IFBvd2VyIGZyb20gJ2NvbXBvbmVudC9wb3dlci52dWUnXHJcblx0aW1wb3J0IFNlbGVjdCBmcm9tICdjb21wb25lbnQvc2VsZWN0LW51bWJlci52dWUnXHJcblx0aW1wb3J0IEltdEF1ZGlvIGZyb20gJ2NvbXBvbmVudC9pbXQtYXVkaW8udnVlJ1xyXG5cdGltcG9ydCBPcHRpb25zIGZyb20gJ2NvbXBvbmVudC9vcHRpb25zLWxpc3QudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNMb2dpbjogbnVsbCxcclxuXHRcdFx0XHR0b3BpY0l0ZW06IHt9LFxyXG5cdFx0XHRcdHNlbGVjdE5hbWVBcnI6IFtdLCAvLyDlkI3np7DpgInpobnmlbDnu4RcclxuXHRcdFx0XHRub3c6IDAsXHJcblx0XHRcdFx0YXVkaW86IFtdLFxyXG5cdFx0XHRcdGlzQ29ycmVjdDogdHJ1ZSwgLy8g5piv5ZCm5pi+56S65Zu+54mHXHJcblx0XHRcdFx0c2VsZWN0TnVtYmVyOiAzLFxyXG5cdFx0XHRcdHJlZkl0ZW06IDEsXHJcblx0XHRcdFx0aXRlbTE6IHRydWUsXHJcblx0XHRcdFx0aXRlbTI6IHRydWUsXHJcblx0XHRcdFx0aXRlbTM6IHRydWUsXHJcblx0XHRcdFx0aXRlbTQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0UG93ZXIsXHJcblx0XHRcdFNlbGVjdCxcclxuXHRcdFx0SW10QXVkaW8sXHJcblx0XHRcdE9wdGlvbnNcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmluaXREYXRhKClcclxuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHR0aXRsZTogJ+WKoOi9veS4rScsXHJcblx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOmAieaLqeasoeaVsCDkvKDpgJLnu5lTZWxlY3TlrZDnu4Tku7ZcclxuXHRcdFx0aGFuZGxlU2VsZWN0TnVtYmVyKHZhbCkge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0TnVtYmVyID0gdmFsXHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZU5leHRRdWVzdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLmluaXREYXRhKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W562U6aKY5pWw5o2uXHJcblx0XHRcdGFzeW5jIGluaXREYXRhKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNDb3JyZWN0ID0gdHJ1ZTtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLiRteVJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBgL2FwaS90b3BpY2BcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG5cdFx0XHRcdHRoaXMudG9waWNJdGVtID0gcmVzdWx0LmRhdGEuZGF0YVxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0TmFtZUFyciA9IHJlc3VsdC5kYXRhLnNlbGVjdE5hbWVBcnJcclxuXHRcdFx0XHRjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEuZGF0YVxyXG5cdFx0XHRcdHRoaXMuYXVkaW8gPSBbXVxyXG5cdFx0XHRcdGlmIChkYXRhLndhdikge1xyXG5cdFx0XHRcdFx0bGV0IHRoYW4gPSB0aGlzXHJcblx0XHRcdFx0XHRkYXRhLndhdi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdGRzcS50b3Avc3RhdGljL3dhdi8nXHJcblx0XHRcdFx0XHRcdGNvbnN0IHNyY3dhdiA9IEJBU0VfVVJMICsgaXRlbVxyXG5cdFx0XHRcdFx0XHR0aGlzLmF1ZGlvLnB1c2goc3Jjd2F2KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaPkOekulxyXG5cdFx0XHRoYW5kbGVWaXNpYmxlKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNMb2dpbiA9IGNoZWNrSXNMb2dpbigpXHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMb2dpbikge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucmVmSXRlbSA8PSA0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXNbJ2l0ZW0nICsgdGhpcy5yZWZJdGVtXSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMucmVmSXRlbSA9IHRoaXMucmVmSXRlbSArIDFcclxuXHRcdFx0XHRcdFx0Ly8g5o+Q56S65YeP5L2T5Yqb5YC8XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuJHJlZnMuY2hpbGRQb3dlclJlZi5oYW5kbGVQb3dlclJlZigpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlm57nrZTmraPnoa4g5pi+56S65Zu+54mHXHJcblx0XHRcdGhhbmRsZVNob3dNYXNrKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNDb3JyZWN0ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiL5LiA6aKYIOmakOiXj+WbvueJhyDlhbPpl63mj5DnpLrnmoTlm77niYdcclxuXHRcdFx0aGFuZGxlSGlkZU1hc2soKSB7XHJcblx0XHRcdFx0dGhpcy5pc0NvcnJlY3QgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5yZWZJdGVtID0gMVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSA0OyBpID49IDE7IGktLSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaSwgJz09PT09PT09PT09PT09PT09Pj4+JylcclxuXHRcdFx0XHRcdHRoaXNbJ2l0ZW0nICsgaV0gPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0SW1nVXJsKGltZykge1xyXG5cdFx0XHRcdGlmIChpbWcpIHtcclxuXHRcdFx0XHRcdHJldHVybiBgaHR0cHM6Ly90ZHNxLnRvcC9zdGF0aWMvbG9sX2ltZy8ke2ltZ31gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbWFnZUxvYWQoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLCfog4zmma/lm77niYfliqDovb3lrozmiJAgPT09PT0+Pj4+JylcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHRwYWdlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LmdhbWUge1xyXG5cdFx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ly8gYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdGRzcS50b3Avc3RhdGljL2ltYWdlcy9iZy5qcGcpO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHRcdC5nYW1lLWJnIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogOTkycnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5nYW1lLXBvc2l0aW9uIHtcclxuXHRcdFx0d2lkdGg6IDIwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMjBycHg7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0dG9wOiA0MHJweDtcclxuXHJcblx0XHRcdC5nYW1lLXBvc2l0aW9uLXBvd2VyIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogNTAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMTMxNTE2O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3Rkc3EudG9wL3N0YXRpYy9pbWFnZXMvZW5lbXlfZWNvbm9taWNfbG9zZS45LnBuZyk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmdhbWUtcG9zaXRpb24tdGltZXMge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MCU7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0XHRcdFx0Y29sb3I6ICMxMzE1MTY7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdGRzcS50b3Avc3RhdGljL2ltYWdlcy9lbmVteV9lY25vbWljX3dpbi45LnBuZyk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5nYW1lLWNvbnRlbnQge1xyXG5cdFx0XHR3aWR0aDogOTQlO1xyXG5cdFx0XHRoZWlnaHQ6IDgwJTtcclxuXHRcdFx0Ly8gYm9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVycHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRsZWZ0OiAzJTtcclxuXHRcdFx0cGFkZGluZzogMjBycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHR9XHJcblxyXG5cdFx0LmdhbWUtY29udGVudC1oZWFkZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdFx0LmdhbWUtY29udGVudC1oZWFkZXItdGlwcyB7XHJcblx0XHRcdFx0d2lkdGg6IDIwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjYmE5YTZjO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3Rkc3EudG9wL3N0YXRpYy9pbWFnZXMvdGlwcy5wbmcpO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZ2FtZS1jb250ZW50LWltYWdlIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMzIwcnB4O1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NiMDg5O1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRtYXJnaW46IDIwcnB4IGF1dG87XHJcblx0XHRcdHBhZGRpbmc6IDVycHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdC5nYW1lLWNvbnRlbnQtaW1hZ2UtZnJhbWUge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NiMDg5O1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHQuZ2FtZS1jb250ZW50LWltYWdlLWZyYW1lLU1hc2sge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cclxuXHRcdFx0XHRcdC5pdGVtIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MCU7XHJcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGVmdF90b3Age1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJpZ2h0X3RvcCB7XHJcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmxlZnRfYm90dG9tIHtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yaWdodF9ib3R0b20ge1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5nYW1lLWNvbnRlbnQtYXVkaW8ge1xyXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5nYW1lLWNvbnRlbnQtb3B0aW9ucyB7XHJcblx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XHJcblx0XHRcdG1hcmdpbjogMjBycHggMDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Bvd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMmExNjI1NiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Bvd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG93ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudC9wb3dlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Bvd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMmExNjI1NiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Bvd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9wb3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHTkvZPlipvlgLw6e3tjb3VudH19XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0c2V0VGltZVN0YW1wLFxyXG5cdFx0Z2V0VGltZVN0YW1wLFxyXG5cdFx0c2V0UG93ZXIsXHJcblx0XHRnZXRQb3dlclxyXG5cdH0gZnJvbSAnLi4vdXRpbC9wb3dlcl91dGlsLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y291bnQ6ICcnLFxyXG5cdFx0XHRcdHRpbWVyOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codW5kZWZpbmVkID09PSBmYWxzZSlcclxuXHRcdFx0Y29uc3QgcG93ZXIgPSBnZXRQb3dlcigpXHJcblx0XHRcdGlmICghcG93ZXIpIHtcclxuXHRcdFx0XHRzZXRQb3dlcig1KVxyXG5cdFx0XHRcdHRoaXMuJGRhdGEuY291bnQgPSBnZXRQb3dlcigpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kZGF0YS5jb3VudCA9IGdldFBvd2VyKClcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy4kZGF0YS5jb3VudCAhPT0gNSkge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvL1x05b2T5YmN5pe26Ze0XHJcblx0XHRcdFx0Y29uc3Qgc2Vjb25kID0gcGFyc2VJbnQoKChjdXJyZW50VGltZSAtIGdldFRpbWVTdGFtcCgpKSAvIDEwMDApIC8gNjApXHJcblx0XHRcdFx0bGV0IG51bSA9IHBhcnNlSW50KHNlY29uZCAvIDIpXHJcblx0XHRcdFx0aWYgKCFudW0pIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfov5vmnaXov5knKVxyXG5cdFx0XHRcdFx0dGhpcy4kZGF0YS5jb3VudCArPSBudW1cclxuXHRcdFx0XHRcdHRoaXMudGltZXJzKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRoYW5kbGVQb3dlclJlZigpIHtcclxuXHRcdFx0XHRjb25zdCBjb3VudCA9IHRoaXMuJGRhdGEuY291bnQgLSAxXHJcblx0XHRcdFx0aWYgKGNvdW50ID49IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuJGRhdGEuY291bnQgPSBjb3VudFxyXG5cdFx0XHRcdFx0dGhpcy50aW1lcnMoKVxyXG5cdFx0XHRcdFx0c2V0VGltZVN0YW1wKClcclxuXHRcdFx0XHRcdHNldFBvd2VyKHRoaXMuJGRhdGEuY291bnQpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+S9k+WKm+S4jei2sycsXHJcblx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdEFkZFBvd2VyKCkge1xyXG5cdFx0XHRcdGxldCBjb3VudCA9IHRoaXMuJGRhdGEuY291bnRcclxuXHRcdFx0XHRpZiAoY291bnQgPT0gNSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRkYXRhLmNvdW50ID0gY291bnQgKyAxXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLiRkYXRhLmNvdW50LCAn5Yqg5L2T5YqbPT09PT09PT09PT09PT4+Pj4+JylcclxuXHRcdFx0XHRcdHNldFRpbWVTdGFtcCgpXHJcblx0XHRcdFx0XHRzZXRQb3dlcih0aGlzLiRkYXRhLmNvdW50KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXJzKCkge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5BZGRQb3dlciwgMTAwMDApXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRiZWZvcmVEZXN0cm95KCkge1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2dhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9nYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDYxMTYzNjEzNjBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9