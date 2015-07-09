# AppleEasing

AppleEasing exports easing functions that are configured to match Core Animation's timing functions. They are generally tasteful and probably make sense to use on both iOS and Android.

**This library is currently supported only on React Native.**

## Installation

```
npm install react-apple-easing
```

## Usage

The easing functions can be used with any library that pass in the elapsed time and expect an eased value back. For example, with the [Animated](https://facebook.github.io/react-native/docs/animations.html#animated) library you could write:

```js
let AppleEasing = require('react-apple-easing');

new Animated.Value(0).timing({
  easing: AppleEasing.default,
  duration: 250,
}).start();
```

These are the supported easing functions:

| Core Animation constant             | AppleEasing function |
|-------------------------------------|----------------------|
| kCAMediaTimingFunctionLinear        | None                 |
| kCAMediaTimingFunctionEaseIn        | `easeIn`             |
| kCAMediaTimingFunctionEaseOut       | `easeOut`            |
| kCAMediaTimingFunctionEaseInEaseOut | `easeInOut`          |
| kCAMediaTimingFunctionDefault       | `default`            |

## Note

This project is not affiliated with Apple, Inc.
