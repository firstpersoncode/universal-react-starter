exports.id = 0;
exports.modules = {

/***/ "./client/container/Sample/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _actions = __webpack_require__("./client/container/Sample/actions.js");

var _Header = __webpack_require__("./client/component/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _Form = __webpack_require__("./client/component/Form/index.js");

var _Form2 = _interopRequireDefault(_Form);

var _BlackBox = __webpack_require__("./client/component/BlackBox/index.js");

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__("./client/container/Sample/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sample = function (_Component) {
  _inherits(Sample, _Component);

  function Sample() {
    _classCallCheck(this, Sample);

    var _this = _possibleConstructorReturn(this, (Sample.__proto__ || Object.getPrototypeOf(Sample)).call(this));

    _this.state = {
      preview: null
    };
    _this.handlePreview = _this.handlePreview.bind(_this);
    _this.handleSetHeader = _this.handleSetHeader.bind(_this);
    return _this;
  }

  _createClass(Sample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.smallHeader.length) this.props.dispatch((0, _actions.fetchHeaders)());
    }
  }, {
    key: 'handlePreview',
    value: function handlePreview(e) {
      this.setState({ preview: e.target.value });
    }
  }, {
    key: 'handleSetHeader',
    value: function handleSetHeader(e) {
      e.preventDefault();
      var text = this.refs.form.refs.textInput;
      this.props.dispatch((0, _actions.setHeader)({ data: text.value }));
      text.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(_reactHelmet2.default, {
          meta: [{ name: "description", content: "Universal ReactJS Starter" }] }),
        _react2.default.createElement(_Header2.default, { header: this.state.preview, smallHeader: this.props.smallHeader, latestHeader: this.props.header }),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(_Form2.default, {
            ref: 'form',
            handlePreview: this.handlePreview,
            handleSetHeader: this.handleSetHeader })
        ),
        _react2.default.createElement(
          'small',
          { className: _style2.default.viewportStatus },
          this.props.isMobile ? "Mobile" : "Desktop"
        )
      );
    }
  }]);

  return Sample;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    header: store.sampleState.header,
    smallHeader: store.sampleState.smallHeader,
    isMobile: store.mainState.isMobile
  };
})(Sample);

/***/ })

};