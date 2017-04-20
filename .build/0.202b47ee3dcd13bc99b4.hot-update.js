exports.id = 0;
exports.modules = {

/***/ "./client/container/About/index.js":
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

var _BlackBox = __webpack_require__("./client/component/BlackBox/index.js");

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__("./client/container/About/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this.state = {
      float: {
        transform: 'translateX(0) translateY(0) rotate(0)'
      }
    };
    _this.float = _this.float.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.width > 1025) {
        this.docs.addEventListener("mousemove", this.float);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.width > 1025) {
        this.docs.removeEventListener("mousemove", this.float);
      }
    }
  }, {
    key: 'float',
    value: function float(e) {
      this.setState({
        style: {
          transform: 'translateX(' + (e.clientX - this.width / 2) + 'px) translateY(' + (e.clientY - this.height / 2) + 'px) rotate(' + (e.clientX - this.width / 2) * 2 + 'deg)'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(_reactHelmet2.default, {
          meta: [{ name: "description", content: "About" }],
          title: 'About' }),
        _react2.default.createElement(
          'div',
          { className: _style2.default.flee, style: this.state.float },
          _react2.default.createElement(
            _BlackBox2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Isomorphic Javascript App'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Copyright \xA9 2017 Nasser'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(About);

/***/ })

};