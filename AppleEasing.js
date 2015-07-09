/**
 * @flow
 */
'use strict';

let { Easing } = require('react-native');

// See Apple's "CAMediaTimingFunction Class Reference" for the Bezier control
// points
exports.easeIn = Easing.bezier(0.42, 0, 1, 1);
exports.easeOut = Easing.bezier(0, 0, 0.58, 1);
exports.easeInOut = Easing.bezier(0.42, 0, 0.58, 1);
exports.default = Easing.bezier(0.25, 0.1, 0.25, 1);
