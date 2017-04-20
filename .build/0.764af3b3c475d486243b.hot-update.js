exports.id = 0;
exports.modules = {

/***/ "./client/component/Header/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _windowOrGlobal = __webpack_require__(22);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _style = __webpack_require__("./client/component/Header/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      floatStyle: {
        transform: 'rotate(0)'
      }
    };
    _this.width = Math.max(_windowOrGlobal2.default.innerWidth);
    _this.floatStyle = _this.floatStyle.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.addEventListener("mousemove", this.floatStyle);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.removeEventListener("mousemove", this.floatStyle);
      }
    }
  }, {
    key: 'floatStyle',
    value: function floatStyle(e) {
      this.setState({
        floatStyle: {
          transform: 'rotate(' + (e.clientX - this.width / 2) + 'deg)'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var randomStyled = function randomStyled() {
        var r = Math.floor(Math.random() * 201) - 80;
        return {
          transition: 'ease-out 15s',
          transform: 'translate(' + r * 2 + 'px, ' + r * 2 + 'px) rotate(' + r * 2 + 'deg)'
        };
      };

      var mapHeader = this.props.smallHeader.map(function (index, i) {
        return _react2.default.createElement(
          'span',
          {
            style: randomStyled(),
            key: i },
          index.data
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _style2.default.header },
        _react2.default.createElement(
          'h1',
          null,
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.floatContainer, style: this.state.floatStyle },
          _react2.default.createElement(
            'span',
            { style: randomStyled(), className: _style2.default.latest },
            this.props.latestHeader
          ),
          mapHeader
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

;

exports.default = Header;

/***/ })

};