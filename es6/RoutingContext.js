import React from 'react';
import createReactClass from "create-react-class";
import RouterContext from './RouterContext';
import warning from './routerWarning';

var RoutingContext = createReactClass({
  displayName: 'RoutingContext',
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? warning(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
  },
  render: function render() {
    return React.createElement(RouterContext, this.props);
  }
});

export default RoutingContext;