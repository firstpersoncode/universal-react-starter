/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 222);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(52);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlackBox = function BlackBox(props) {

  return _react2.default.createElement(
    'div',
    { className: _style2.default.container, onMouseEnter: props.onMouseEnter ? props.onMouseEnter : null },
    props.children
  );
};

exports.default = BlackBox;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(34);

var _store = __webpack_require__(36);

var _store2 = _interopRequireDefault(_store);

var _layout = __webpack_require__(35);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.INITIAL_STATE || {};
var store = (0, _store2.default)(initialState);

exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_layout2.default, null)
    )
  );
};

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("immutee");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_HEADER = exports.SET_HEADER = 'Home/SET_HEADER';
var FETCH_HEADER = exports.FETCH_HEADER = 'Home/FETCH_HEADER';
var FETCH_HEADER_FAILURE = exports.FETCH_HEADER_FAILURE = 'Home/FETCH_HEADER_FAILURE';

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHotLoader = __webpack_require__(122);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(121);

var _App = __webpack_require__(118);

var _App2 = _interopRequireDefault(_App);

var _main = __webpack_require__(120);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root')); // require("file-loader?name=[name].[ext]!./index.html");


if (false) {
  module.hot.accept("./App", function () {
    (0, _reactDom.render)(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(_App2.default, null)
    ), document.getElementById("root"));
  });
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(33);

var _routes = __webpack_require__(29);

var _routes2 = _interopRequireDefault(_routes);

var _NotFound = __webpack_require__(49);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _routes2.default.map(function (route, i) {
      return _react2.default.createElement(_reactRouter.Route, _extends({ key: i }, route));
    }),
    _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
  );
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(47);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(42);

var _About2 = _interopRequireDefault(_About);

var _Docs = __webpack_require__(44);

var _Docs2 = _interopRequireDefault(_Docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: '/',
  exact: true,
  component: _Home2.default
}, {
  path: '/about',
  exact: true,
  component: _About2.default
}, {
  path: '/documentation',
  exact: true,
  component: _Docs2.default
}];

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Nav = __webpack_require__(41);

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__(37);

var _Footer2 = _interopRequireDefault(_Footer);

var _routers = __webpack_require__(28);

var _routers2 = _interopRequireDefault(_routers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      meta: [{ name: "description", content: "Isomorphic javascript app" }],
      defaultTitle: 'Isomorphic javascript app' }),
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(_routers2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(85);

var _reduxLogger = __webpack_require__(86);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(88);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(87);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducers = __webpack_require__(51);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [(0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger2.default)()];

var createStoreWithMiddleWare = _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore);

exports.default = function (initialState) {
  var store = createStoreWithMiddleWare((0, _redux.combineReducers)(_reducers2.default), initialState);

  if (false) {
    module.hot.accept('../reducers', function () {
      var nextReducer = (0, _redux.combineReducers)(require('../reducers'));
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(53);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {

  return _react2.default.createElement(
    'footer',
    { className: _style2.default.footer },
    'Copyright \xA9 2017 ',
    _react2.default.createElement(
      'a',
      { href: 'https://github.com/firstpersoncode', target: '_blank' },
      'Nasser'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(54);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.form },
        _react2.default.createElement(
          'span',
          null,
          this.props.preview
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.props.handleSetHeader },
          _react2.default.createElement('input', { type: 'text', ref: 'textInput', placeholder: 'type ...', onChange: this.props.handlePreview }),
          _react2.default.createElement('input', { type: 'submit', value: 'submit' })
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

;

exports.default = Form;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(55);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {

  var randomStyled = function randomStyled() {
    var r = Math.floor(Math.random() * 201) - 80;
    return {
      transition: 'ease-out 1s',
      transform: 'translate(' + r * 2 + 'px, ' + r * 2 + 'px) rotate(' + r * 2 + 'deg)'
    };
  };

  var mapHeader = props.smallHeader.map(function (index, i) {
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
      props.header
    ),
    _react2.default.createElement(
      'span',
      { style: randomStyled(), className: _style2.default.latest },
      props.latestHeader
    ),
    mapHeader
  );
};

exports.default = Header;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(56);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(props) {
  return _react2.default.createElement(
    'div',
    { className: _style2.default['Loading'] },
    _react2.default.createElement(
      'div',
      { className: _style2.default["Loading-arc"] },
      _react2.default.createElement('div', { className: _style2.default["Loading-cube"] })
    )
  );
};

exports.default = Loading;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(34);

var _style = __webpack_require__(57);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
  return _react2.default.createElement(
    'nav',
    { className: _style2.default.nav },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/about' },
          'About'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/documentation' },
          'documentation'
        )
      )
    )
  );
};

exports.default = Nav;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(10);

var _BlackBox = __webpack_require__(11);

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__(58);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));
    // this.drag = this.drag.bind(this);
    // this.drag = this.drag.bind(this);
  }

  _createClass(About, [{
    key: 'flee',
    value: function flee(e) {
      // console.log(e.clientY, e.clientX, e.target);
      e.target.style.transform = 'translate(' + e.clientX / 3 + 'px, ' + e.clientY / 3 + 'px)';
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
          { className: _style2.default.flee },
          _react2.default.createElement(
            _BlackBox2.default,
            { onMouseEnter: this.flee },
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

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(14);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(10);

var _reactMarkdownToHtml = __webpack_require__(84);

var _reactMarkdownToHtml2 = _interopRequireDefault(_reactMarkdownToHtml);

var _BlackBox = __webpack_require__(11);

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _Loading = __webpack_require__(40);

var _Loading2 = _interopRequireDefault(_Loading);

var _style = __webpack_require__(59);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Docs = function (_Component) {
  _inherits(Docs, _Component);

  function Docs() {
    _classCallCheck(this, Docs);

    var _this = _possibleConstructorReturn(this, (Docs.__proto__ || Object.getPrototypeOf(Docs)).call(this));

    _this.state = {
      title: 'Isomorphic Javascript App'
    };
    return _this;
  }

  _createClass(Docs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var showHide = function showHide(opt) {
        _this2.refs.loading.style.opacity = "1";
        setTimeout(function () {
          _this2.refs.markdown.style.overflowY = "auto";
          _this2.refs[opt.opt].style.display = "block";
          _this2.refs.loading.style.opacity = "0";
          setTimeout(function () {
            return _this2.refs[opt.opt].style.opacity = "1";
          }, 500);
        }, 2000);
        return opt.rest.map(function (index) {
          _this2.refs.markdown.style.overflowY = "hidden";
          _this2.refs[index].style.transform = "translateX(110%)";
          setTimeout(function () {
            _this2.refs[opt.opt].style.opacity = "0";
            setTimeout(function () {
              return _this2.refs[index].style.display = "none";
            }, 500);
            _this2.refs[opt.opt].style.transform = "translateX(0)";
          }, 1000);
        });
      };

      var options = function options(opt, optLength) {
        var rest = [];
        for (var i = 1; i <= optLength; i++) {
          if (i === opt) {
            continue;
          }
          rest.push("doc-" + i);
        }
        return {
          opt: "doc-" + opt,
          rest: rest
        };
      };

      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(_reactHelmet2.default, {
          meta: [{ name: "description", content: "Docs" }],
          title: 'Docs' }),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(
            'ul',
            { className: _style2.default.navOpt },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(1, 7)) },
                'Overview'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(2, 7)) },
                'Components'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(3, 7)) },
                'Home Container'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(4, 7)) },
                'About Container'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(5, 7)) },
                'NotFound Container'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(6, 7)) },
                'Router Configs & Combine Reducers'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'button',
                { onClick: showHide.bind(this, options(7, 7)) },
                'App Booster'
              )
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            this.state.title
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.markdown, ref: 'markdown' },
            _react2.default.createElement(
              'div',
              { className: _style2.default.loading, ref: 'loading' },
              _react2.default.createElement(_Loading2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-1' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/overview.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-2' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/dumbComponent.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-3' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/smartComponent.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-4' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/smartComponent2.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-5' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/smartComponent3.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-6' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/routerandreducer.md' })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'doc-7' },
              _react2.default.createElement(_reactMarkdownToHtml2.default, { src: 'markdown/app.md' })
            )
          )
        )
      );
    }
  }]);

  return Docs;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(Docs);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(14);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHeader = setHeader;
exports.fetchHeaders = fetchHeaders;

var _axios = __webpack_require__(82);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setHeader(payload) {
  return function (dispatch) {
    return _axios2.default.post('http://localhost:50045/headers', payload).then(function (res) {
      dispatch({
        type: _constants.SET_HEADER,
        payload: payload.data
      });
    }).catch(function () {
      dispatch({
        type: _constants.SET_HEADER,
        payload: payload.data
      });
    });
  };
}

function fetchHeaders() {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:50045/headers').then(function (res) {
      dispatch({
        type: _constants.FETCH_HEADER,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _constants.SET_HEADER,
        payload: err.stack
      });
    });
  };
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _actions = __webpack_require__(46);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _Form = __webpack_require__(38);

var _Form2 = _interopRequireDefault(_Form);

var _BlackBox = __webpack_require__(11);

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__(60);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      preview: 'react + react-redux + react-helmet + react-router-dom + express + mongoose + modular CSS !'
    };
    _this.handlePreview = _this.handlePreview.bind(_this);
    _this.handleSetHeader = _this.handleSetHeader.bind(_this);
    return _this;
  }

  _createClass(Home, [{
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
          meta: [{ name: "description", content: "Isomorphic javascript app" }] }),
        _react2.default.createElement(_Header2.default, { header: this.state.preview, smallHeader: this.props.smallHeader, latestHeader: this.props.header }),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(_Form2.default, {
            ref: 'form',
            handlePreview: this.handlePreview,
            handleSetHeader: this.handleSetHeader })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    header: store.homeState.header,
    smallHeader: store.homeState.smallHeader
  };
})(Home);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    case _constants.SET_HEADER:
      {
        return immutable.set('header', action.payload).merge('smallHeader', [{ data: action.payload }]).done();
        break;
      }
    case _constants.FETCH_HEADER:
      {
        return immutable.merge('smallHeader', action.payload).done();
        break;
      }
    case _constants.FETCH_HEADER_FAILURE:
      {
        return immutable.set('error', action.payload).done();
        break;
      }
    default:
      return state;
  }
};

var _immutee = __webpack_require__(14);

var _immutee2 = _interopRequireDefault(_immutee);

var _constants = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  header: 'react + react-redux + react-helmet + react-router-dom + express + mongoose + modular CSS !',
  smallHeader: [],
  error: null
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(10);

var _BlackBox = __webpack_require__(11);

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__(61);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(_reactHelmet2.default, {
          title: '404 not found' }),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Page Not Found :('
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(NotFound);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(14);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = __webpack_require__(48);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(43);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(45);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(50);

var _reducer8 = _interopRequireDefault(_reducer7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  homeState: _reducer2.default,
  aboutState: _reducer4.default,
  docsState: _reducer6.default,
  notFoundState: _reducer8.default
};

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style_container_df458a19","slideUp":"style_slideUp_daffcee7"};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"style_footer_f2f94845"};

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"style_form_d15b3462"};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"style_header_e0cf661e","slideDown":"style_slideDown_d77bf7b3","latest":"style_latest_f342dc90"};

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Loading":"style_Loading_7dab7dd1","cube":"style_cube_86d73d9d","cube-2d":"style_cube-2d_9616aed9","Loading-arc":"style_Loading-arc_460e77e2","Loading-cube":"style_Loading-cube_9be2615e","cssload-arc":"style_cssload-arc_b7427cbe","test":"style_test_314a14ab"};

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"style_nav_e63b9c1e"};

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bg":"style_bg_dc84fffa"};

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bg":"style_bg_e0a271bc","loading":"style_loading_fab70045","markdown":"style_markdown_7e493797","navOpt":"style_navOpt_f8c6ad80"};

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bg":"style_bg_b568b8f6"};

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bg":"style_bg_deb22ca2"};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = require("react-markdown-to-html");

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });