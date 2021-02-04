var React = require('react');
var notistack = require('notistack');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var NetworkCheck = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NetworkCheck, _React$Component);

  function NetworkCheck(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.checkNetwork = function () {
      _this.props.getData('/me?fields=id').then(function () {
        if (_this.isOfflineMessage) {
          _this.props.closeSnackbar(_this.isOfflineMessage);

          _this.isOfflineMessage = null;

          _this.props.enqueueSnackbar("You're back online", {
            variant: 'success'
          });
        }
      })["catch"](function () {
        if (!_this.isOfflineMessage) _this.isOfflineMessage = _this.props.enqueueSnackbar("You're now offline", {
          variant: 'error',
          persist: true
        });
      });
    };

    if (_this.props.intervalMs) setInterval(_this.checkNetwork, _this.props.intervalMs);
    return _this;
  }

  var _proto = NetworkCheck.prototype;

  _proto.render = function render() {
    return null;
  };

  return NetworkCheck;
}(React.Component);

var index = notistack.withSnackbar(NetworkCheck);

module.exports = index;
//# sourceMappingURL=index.js.map
