import React from 'react';
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import warning from './routerWarning';
import invariant from 'invariant';
import Redirect from './Redirect';
import { falsy } from './InternalPropTypes';

var string = PropTypes.string,
    object = PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */

var IndexRedirect = createReactClass({
  displayName: "IndexRedirect",


  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = Redirect.createRouteFromReactElement(element);
      } else {
        process.env.NODE_ENV !== "production" ? warning(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: falsy,
    children: falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== "production" ? invariant(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : invariant(false) : void 0;
  }
});

export default IndexRedirect;