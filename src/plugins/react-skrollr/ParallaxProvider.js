'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skrollr = require('skrollr');

var _skrollr2 = _interopRequireDefault(_skrollr);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialized - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var ParallaxProvider = (function (_React$Component) {
  _inherits(ParallaxProvider, _React$Component);

  function ParallaxProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ParallaxProvider);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret =
        ((_temp =
          ((_this = _possibleConstructorReturn(
            this,
            (_ref =
              ParallaxProvider.__proto__ ||
              Object.getPrototypeOf(ParallaxProvider)).call.apply(
              _ref,
              [this].concat(args)
            )
          )),
          _this)),
        (_this.refresh = function () {
          if (_this.skrollr) _this.skrollr.refresh();
        }),
        (_this.isMobile = function () {
          return (
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
          );
        }),
        (_this.shouldInitOrDestroy = function () {
          var disableOnMobile = _this.props.disableOnMobile;

          if (!disableOnMobile) {
            _this.initSkrollr();
            return;
          }

          if (
            disableOnMobile &&
            _this.isMobile() &&
            _this.skrollr !== undefined
          ) {
            _this.skrollr.destroy();
            _this.skrollr = undefined;
          }

          if (
            disableOnMobile &&
            !_this.isMobile() &&
            _this.skrollr === undefined
          ) {
            _this.initSkrollr();
          }
        }),
        _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(ParallaxProvider, [
    {
      key: 'initSkrollr',
      value: function initSkrollr() {
        this.skrollr = _skrollr2.default.init(this.props.init);
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.shouldInitOrDestroy();
        window.addEventListener('resize', this.shouldInitOrDestroy);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.shouldInitOrDestroy);
        if (this.skrollr) this.skrollr.destroy();
      }
    },
    {
      key: 'getChildContext',
      value: function getChildContext() {
        return { refresh: this.refresh };
      }
    },
    {
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return _react2.default.createElement(
          'div',
          { id: 'skrollr-body' },
          children
        );
      }
    }
  ]);

  return ParallaxProvider;
})(_react2.default.Component);

ParallaxProvider.propTypes = {
  init: _propTypes2.default.object,
  disableOnMobile: _propTypes2.default.bool
};
ParallaxProvider.defaultProps = {
  init: {},
  disableOnMobile: true
};
ParallaxProvider.childContextTypes = {
  refresh: _propTypes2.default.func
};
exports.default = ParallaxProvider;
