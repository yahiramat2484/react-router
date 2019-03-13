'use strict';

exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _propTypes = require('prop-types');

var func = _propTypes.PropTypes.func,
    object = _propTypes.PropTypes.object,
    arrayOf = _propTypes.PropTypes.arrayOf,
    oneOfType = _propTypes.PropTypes.oneOfType,
    element = _propTypes.PropTypes.element,
    shape = _propTypes.PropTypes.shape,
    string = _propTypes.PropTypes.string;
function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = shape({
  listen: func.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
});

var component = exports.component = oneOfType([func, string]);
var components = exports.components = oneOfType([component, object]);
var route = exports.route = oneOfType([object, element]);
var routes = exports.routes = oneOfType([route, arrayOf(route)]);