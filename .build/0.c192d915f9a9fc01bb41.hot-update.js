exports.id = 0;
exports.modules = {

/***/ "./client/container/Home/index.js":
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

var _style = __webpack_require__("./client/container/Home/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Home'
          ),
          _react2.default.createElement('link', { rel: 'canonical', href: 'https://github.com/firstpersoncode/universal-react-starter' })
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.header },
          _react2.default.createElement(
            'h1',
            null,
            'Universal ReactJS Starter'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Packed with'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://facebook.github.io/react', target: '_blank' },
                'React'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://redux.js.org/', target: '_blank' },
                'Redux'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://www.npmjs.com/package/redux-universal', target: '_blank' },
                'Redux Universal !'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://reacttraining.com/react-router', target: '_blank' },
                'React Router v4 !'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://expressjs.com/', target: '_blank' },
                'Express'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://mongoosejs.com/', target: '_blank' },
                'Mongoose'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://webpack.github.io/', target: '_blank' },
                'Webpack v2'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/diruuu/immutee', target: '_blank' },
                'Immutee'
              )
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { className: _style2.default.paragraph },
          'modular sass + plop generator + hot reload + server side rendering !',
          _react2.default.createElement('br', null),
          'Easy project structure, SEO friendly, fast performance, and easy maintain.'
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(Home);

/***/ })

};