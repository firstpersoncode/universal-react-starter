exports.id = 0;
exports.modules = {

/***/ "./client/container/Main/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(2);

var _windowOrGlobal = __webpack_require__(23);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _actions = __webpack_require__("./client/container/Main/actions.js");

var _style = __webpack_require__("./client/container/Main/style.scss");

var _style2 = _interopRequireDefault(_style);

var _Nav = __webpack_require__("./client/component/Nav/index.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__("./client/component/Footer/index.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    _this.state = {
      isMobile: false
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _actions.checkViewport)(Math.max(_windowOrGlobal2.default.innerWidth)));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ isMobile: nextProps.mainState.isMobile });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: _style2.default['Main'] },
        _react2.default.createElement(_reactHelmet2.default, {
          meta: [{ name: "description", content: "Universal ReactJS Starter" }],
          defaultTitle: 'Universal ReactJS Starter',
          titleTemplate: this.state.isMobile ? "URS mobile - %s" : "URS - %s" }),
        this.props.children,
        _react2.default.createElement(
          'small',
          { className: _style2.default.viewportStatus },
          this.props.isMobile ? "Mobile" : "Desktop"
        ),
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    mainState: store.mainState,
    isMobile: store.mainState.isMobile
  };
})(Main);

/***/ })

};