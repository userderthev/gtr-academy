(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CalendarPane = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var childMixin = {
    inject: ['sharedState'],
    computed: {
      masks: function masks() {
        return this.sharedState.masks;
      },
      theme: function theme() {
        return this.sharedState.theme;
      },
      locale: function locale() {
        return this.sharedState.locale;
      },
      dayPopoverId: function dayPopoverId() {
        return this.sharedState.dayPopoverId;
      }
    },
    methods: {
      format: function format(date, mask) {
        return this.locale.format(date, mask);
      },
      pageForDate: function pageForDate(date) {
        return this.locale.getDateParts(this.locale.normalizeDate(date));
      }
    }
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
  }

  var isBoolean_1 = isBoolean;

  /** `Object#toString` result references. */
  var numberTag = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike_1(value) && _baseGetTag(value) == numberTag);
  }

  var isNumber_1 = isNumber;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
  }

  var isString_1 = isString;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike_1(value) && isArrayLike_1(value);
  }

  var isArrayLikeObject_1 = isArrayLikeObject;

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
  function isUndefined(value) {
    return value === undefined;
  }

  var isUndefined_1 = isUndefined;

  /** `Object#toString` result references. */
  var dateTag = '[object Date]';

  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */
  function baseIsDate(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == dateTag;
  }

  var _baseIsDate = baseIsDate;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsDate = _nodeUtil && _nodeUtil.isDate;

  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */
  var isDate = nodeIsDate ? _baseUnary(nodeIsDate) : _baseIsDate;

  var isDate_1 = isDate;

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  var _baseClamp = baseClamp;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /**
   * Clamps `number` within the inclusive `lower` and `upper` bounds.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Number
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   * @example
   *
   * _.clamp(-10, -5, 5);
   * // => -5
   *
   * _.clamp(10, -5, 5);
   * // => 5
   */
  function clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      lower = undefined;
    }
    if (upper !== undefined) {
      upper = toNumber_1(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
      lower = toNumber_1(lower);
      lower = lower === lower ? lower : 0;
    }
    return _baseClamp(toNumber_1(number), lower, upper);
  }

  var clamp_1 = clamp;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol_1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /* Built-in method references that are verified to be native. */
  var Map = _getNative(_root, 'Map');

  var _Map = Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || _MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = _MapCache;

  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize_1(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = _memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }
    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }
    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = _castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty$1 = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty$1) {
      _defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject_1(object)) {
      return object;
    }
    path = _castPath(path, object);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = _toKey(path[index]),
          newValue = value;

      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject_1(objValue)
            ? objValue
            : (_isIndex(path[index + 1]) ? [] : {});
        }
      }
      _assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }

  var _baseSet = baseSet;

  /**
   * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
   * it's created. Arrays are created for missing index properties while objects
   * are created for all other missing properties. Use `_.setWith` to customize
   * `path` creation.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.set(object, 'a[0].b.c', 4);
   * console.log(object.a[0].b.c);
   * // => 4
   *
   * _.set(object, ['x', '0', 'y', 'z'], 5);
   * console.log(object.x[0].y.z);
   * // => 5
   */
  function set(object, path, value) {
    return object == null ? object : _baseSet(object, path, value);
  }

  var set_1 = set;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = _createBaseFor();

  var _baseFor = baseFor;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag$1] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag$1] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$6.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);
    return this;
  }

  var _setCacheAdd = setCacheAdd;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new _MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
  SetCache.prototype.has = _setCacheHas;

  var _SetCache = SetCache;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!_arraySome(other, function(othValue, othIndex) {
              if (!_cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays;

  /** Built-in value references. */
  var Uint8Array = _root.Uint8Array;

  var _Uint8Array = Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      mapTag$1 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$1:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$1:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag$2:
      case dateTag$2:
      case numberTag$2:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq_1(+object, +other);

      case errorTag$1:
        return object.name == other.name && object.message == other.message;

      case regexpTag$1:
      case stringTag$2:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag$1:
        var convert = _mapToArray;

      case setTag$1:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = _setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = _getAllKeys(object),
        objLength = objProps.length,
        othProps = _getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects;

  /* Built-in method references that are verified to be native. */
  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */
  var Promise = _getNative(_root, 'Promise');

  var _Promise = Promise;

  /* Built-in method references that are verified to be native. */
  var Set = _getNative(_root, 'Set');

  var _Set = Set;

  /* Built-in method references that are verified to be native. */
  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = _baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (_Map && getTag(new _Map) != mapTag$2) ||
      (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
      (_Set && getTag(new _Set) != setTag$2) ||
      (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$2;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$2;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$2 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_1(object),
        othIsArr = isArray_1(other),
        objTag = objIsArr ? arrayTag$1 : _getTag(object),
        othTag = othIsArr ? arrayTag$1 : _getTag(other);

    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

    var objIsObj = objTag == objectTag$2,
        othIsObj = othTag == objectTag$2,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer_1(object)) {
      if (!isBuffer_1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new _Stack);
      return (objIsArr || isTypedArray_1(object))
        ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new _Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new _Stack);
    return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
      return value !== value && other !== other;
    }
    return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  var _baseIsEqual = baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new _Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  var _baseIsMatch = baseIsMatch;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject_1(value);
  }

  var _isStrictComparable = isStrictComparable;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys_1(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, _isStrictComparable(value)];
    }
    return result;
  }

  var _getMatchData = getMatchData;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = _getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || _baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = _castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = _toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_1(length) && _isIndex(key, length) &&
      (isArray_1(object) || isArguments_1(object));
  }

  var _hasPath = hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && _hasPath(object, path, _baseHasIn);
  }

  var hasIn_1 = hasIn;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (_isKey(path) && _isStrictComparable(srcValue)) {
      return _matchesStrictComparable(_toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get_1(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn_1(object, path)
        : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return _baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
  }

  var property_1 = property;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity_1;
    }
    if (typeof value == 'object') {
      return isArray_1(value)
        ? _baseMatchesProperty(value[0], value[1])
        : _baseMatches(value);
    }
    return property_1(value);
  }

  var _baseIteratee = baseIteratee;

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = _baseIteratee(iteratee);

    _baseForOwn(object, function(value, key, object) {
      _baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  var mapValues_1 = mapValues;

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return _arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  var _baseToPairs = baseToPairs;

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  var _setToPairs = setToPairs;

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
      setTag$3 = '[object Set]';

  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */
  function createToPairs(keysFunc) {
    return function(object) {
      var tag = _getTag(object);
      if (tag == mapTag$3) {
        return _mapToArray(object);
      }
      if (tag == setTag$3) {
        return _setToPairs(object);
      }
      return _baseToPairs(object, keysFunc(object));
    };
  }

  var _createToPairs = createToPairs;

  /**
   * Creates an array of own enumerable string keyed-value pairs for `object`
   * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
   * entries are returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias entries
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the key-value pairs.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.toPairs(new Foo);
   * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
   */
  var toPairs = _createToPairs(keys_1);

  var toPairs_1 = toPairs;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
    return _defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$e.hasOwnProperty;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = _baseRest(function(object, sources) {
    object = Object(object);

    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn_1(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined ||
            (eq_1(value, objectProto$e[key]) && !hasOwnProperty$b.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  var defaults_1 = defaults;

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq_1(object[key], value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignMergeValue = assignMergeValue;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */
  var objectTag$3 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$f = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  var _safeGet = safeGet;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return _copyObject(value, keysIn_1(value));
  }

  var toPlainObject_1 = toPlainObject;

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = _safeGet(object, key),
        srcValue = _safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      _assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray_1(srcValue),
          isBuff = !isArr && isBuffer_1(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_1(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject_1(objValue)) {
          newValue = _copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = _cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = _cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
        newValue = objValue;
        if (isArguments_1(objValue)) {
          newValue = toPlainObject_1(objValue);
        }
        else if (!isObject_1(objValue) || isFunction_1(objValue)) {
          newValue = _initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    _assignMergeValue(object, key, newValue);
  }

  var _baseMergeDeep = baseMergeDeep;

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    _baseFor(source, function(srcValue, key) {
      stack || (stack = new _Stack);
      if (isObject_1(srcValue)) {
        _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        _assignMergeValue(object, key, newValue);
      }
    }, keysIn_1);
  }

  var _baseMerge = baseMerge;

  /**
   * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
   * objects into destination objects that are passed thru.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to merge.
   * @param {Object} object The parent object of `objValue`.
   * @param {Object} source The parent object of `srcValue`.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
    if (isObject_1(objValue) && isObject_1(srcValue)) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, objValue);
      _baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
      stack['delete'](srcValue);
    }
    return objValue;
  }

  var _customDefaultsMerge = customDefaultsMerge;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return _baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner;

  /**
   * This method is like `_.merge` except that it accepts `customizer` which
   * is invoked to produce the merged values of the destination and source
   * properties. If `customizer` returns `undefined`, merging is handled by the
   * method instead. The `customizer` is invoked with six arguments:
   * (objValue, srcValue, key, object, source, stack).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   if (_.isArray(objValue)) {
   *     return objValue.concat(srcValue);
   *   }
   * }
   *
   * var object = { 'a': [1], 'b': [2] };
   * var other = { 'a': [3], 'b': [4] };
   *
   * _.mergeWith(object, other, customizer);
   * // => { 'a': [1, 3], 'b': [2, 4] }
   */
  var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
    _baseMerge(object, source, srcIndex, customizer);
  });

  var mergeWith_1 = mergeWith;

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = _baseRest(function(args) {
    args.push(undefined, _customDefaultsMerge);
    return _apply(mergeWith_1, undefined, args);
  });

  var defaultsDeep_1 = defaultsDeep;

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = _baseGet(object, path);

      if (predicate(value, path)) {
        _baseSet(result, _castPath(path, object), value);
      }
    }
    return result;
  }

  var _basePickBy = basePickBy;

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return _basePickBy(object, paths, function(value, path) {
      return hasIn_1(object, path);
    });
  }

  var _basePick = basePick;

  /** Built-in value references. */
  var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray_1(value) || isArguments_1(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  var _isFlattenable = isFlattenable;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = _isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          _arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  var _baseFlatten = baseFlatten;

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? _baseFlatten(array, 1) : [];
  }

  var flatten_1 = flatten;

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return _setToString(_overRest(func, undefined, flatten_1), func + '');
  }

  var _flatRest = flatRest;

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = _flatRest(function(object, paths) {
    return object == null ? {} : _basePick(object, paths);
  });

  var pick_1 = pick;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
    var result = [];
    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /** Used for built-in method references. */
  var objectProto$g = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$g.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /** `Object#toString` result references. */
  var boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      mapTag$4 = '[object Map]',
      numberTag$3 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return _cloneArrayBuffer(object);

      case boolTag$3:
      case dateTag$3:
        return new Ctor(+object);

      case dataViewTag$3:
        return _cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$4:
        return new Ctor;

      case numberTag$3:
      case stringTag$3:
        return new Ctor(object);

      case regexpTag$2:
        return _cloneRegExp(object);

      case setTag$4:
        return new Ctor;

      case symbolTag$2:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** `Object#toString` result references. */
  var mapTag$5 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$5;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */
  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

  var isMap_1 = isMap;

  /** `Object#toString` result references. */
  var setTag$5 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$5;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */
  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$4 = '[object Boolean]',
      dateTag$4 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$6 = '[object Map]',
      numberTag$4 = '[object Number]',
      objectTag$4 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$6 = '[object Set]',
      stringTag$4 = '[object String]',
      symbolTag$3 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
  cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
  cloneableTags[boolTag$4] = cloneableTags[dateTag$4] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] =
  cloneableTags[numberTag$4] = cloneableTags[objectTag$4] =
  cloneableTags[regexpTag$3] = cloneableTags[setTag$6] =
  cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject_1(value)) {
      return value;
    }
    var isArr = isArray_1(value);
    if (isArr) {
      result = _initCloneArray(value);
      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$4 || tag == argsTag$3 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : _initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? _copySymbolsIn(value, _baseAssignIn(result, value))
            : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = _initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_1(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? _getAllKeysIn : _getAllKeys)
      : (isFlat ? keysIn_1 : keys_1);

    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  var last_1 = last;

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  var _baseSlice = baseSlice;

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
  }

  var _parent = parent;

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = _castPath(path, object);
    object = _parent(object, path);
    return object == null || delete object[_toKey(last_1(path))];
  }

  var _baseUnset = baseUnset;

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject_1(value) ? undefined : value;
  }

  var _customOmitClone = customOmitClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG$1 = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = _flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = _arrayMap(paths, function(path) {
      path = _castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    _copyObject(object, _getAllKeysIn(object), result);
    if (isDeep) {
      result = _baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      _baseUnset(result, paths[length]);
    }
    return result;
  });

  /** Used for built-in method references. */
  var objectProto$h = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$e = objectProto$h.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty$e.call(object, key);
  }

  var _baseHas = baseHas;

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': 2 } };
   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b');
   * // => true
   *
   * _.has(object, ['a', 'b']);
   * // => true
   *
   * _.has(other, 'a');
   * // => false
   */
  function has(object, path) {
    return object != null && _hasPath(object, path, _baseHas);
  }

  var has_1 = has;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = _createBaseEach(_baseForOwn);

  var _baseEach = baseEach;

  /**
   * The base implementation of `_.some` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function baseSome(collection, predicate) {
    var result;

    _baseEach(collection, function(value, index, collection) {
      result = predicate(value, index, collection);
      return !result;
    });
    return !!result;
  }

  var _baseSome = baseSome;

  /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * Iteration is stopped once `predicate` returns truthy. The predicate is
   * invoked with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.some(users, ['active', false]);
   * // => true
   *
   * // The `_.property` iteratee shorthand.
   * _.some(users, 'active');
   * // => true
   */
  function some(collection, predicate, guard) {
    var func = isArray_1(collection) ? _arraySome : _baseSome;
    if (guard && _isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, _baseIteratee(predicate));
  }

  var some_1 = some;

  // Type utils
  // Type checkers
  const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
  const isDate$1 = (value) => isDate_1(value) && !isNaN(value.getTime());
  const isObject$1 = (value) => getType(value) === 'Object';
  // Object utils
  const has$1 = has_1;
  const hasAny = (obj, props) => some_1(props, p => has_1(obj, p));
  // Collection utils
  const some$1 = some_1;

  var targetProps = ['base', 'start', 'end', 'startEnd'];
  var displayProps = ['class', 'contentClass', 'style', 'contentStyle', 'color', 'fillMode'];
  var defConfig = {
    color: 'blue',
    isDark: false,
    highlight: {
      base: {
        fillMode: 'light'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    dot: {
      base: {
        fillMode: 'solid'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    bar: {
      base: {
        fillMode: 'solid'
      },
      start: {
        fillMode: 'solid'
      },
      end: {
        fillMode: 'solid'
      }
    },
    content: {
      base: {},
      start: {},
      end: {}
    }
  };

  var Theme = /*#__PURE__*/function () {
    function Theme(config) {
      _classCallCheck(this, Theme);

      Object.assign(this, defConfig, config);
    } // Normalizes attribute config to the structure defined by the properties


    _createClass(Theme, [{
      key: "normalizeAttr",
      value: function normalizeAttr(_ref) {
        var config = _ref.config,
            type = _ref.type;
        var rootColor = this.color;
        var root = {}; // Get the normalized root config

        var normAttr = this[type];

        if (config === true || isString_1(config)) {
          // Assign default color for booleans or strings
          rootColor = isString_1(config) ? config : rootColor; // Set the default root

          root = _objectSpread2({}, normAttr);
        } else if (isObject$1(config)) {
          if (hasAny(config, targetProps)) {
            // Mixin target configs
            root = _objectSpread2({}, config);
          } else {
            // Mixin display configs
            root = {
              base: _objectSpread2({}, config),
              start: _objectSpread2({}, config),
              end: _objectSpread2({}, config)
            };
          }
        } else {
          return null;
        } // Fill in missing targets


        defaults_1(root, {
          start: root.startEnd,
          end: root.startEnd
        }, normAttr); // Normalize each target

        toPairs_1(root).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              targetType = _ref3[0],
              targetConfig = _ref3[1];

          var targetColor = rootColor;

          if (targetConfig === true || isString_1(targetConfig)) {
            targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
            root[targetType] = {
              color: targetColor
            };
          } else if (isObject$1(targetConfig)) {
            if (hasAny(targetConfig, displayProps)) {
              root[targetType] = _objectSpread2({}, targetConfig);
            } else {
              root[targetType] = {};
            }
          } // Set the theme color if it is missing


          if (!has$1(root, "".concat(targetType, ".color"))) {
            set_1(root, "".concat(targetType, ".color"), targetColor);
          }
        });
        return root;
      }
    }, {
      key: "normalizeHighlight",
      value: function normalizeHighlight(config) {
        var _this = this;

        var highlight = this.normalizeAttr({
          config: config,
          type: 'highlight'
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

        toPairs_1(highlight).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              _ = _ref5[0],
              targetConfig = _ref5[1];

          var c = defaults_1(targetConfig, {
            isDark: _this.isDark,
            color: _this.color
          });
          targetConfig.style = _objectSpread2(_objectSpread2({}, _this.getHighlightBgStyle(c)), targetConfig.style);
          targetConfig.contentStyle = _objectSpread2(_objectSpread2({}, _this.getHighlightContentStyle(c)), targetConfig.contentStyle);
        });
        return highlight;
      }
    }, {
      key: "getHighlightBgStyle",
      value: function getHighlightBgStyle(_ref6) {
        var fillMode = _ref6.fillMode,
            color = _ref6.color,
            isDark = _ref6.isDark;

        switch (fillMode) {
          case 'outline':
          case 'none':
            return {
              backgroundColor: isDark ? 'var(--gray-900)' : 'var(--white)',
              border: '2px solid',
              borderColor: isDark ? "var(--".concat(color, "-200)") : "var(--".concat(color, "-700)"),
              borderRadius: 'var(--rounded-full)'
            };

          case 'light':
            return {
              backgroundColor: isDark ? "var(--".concat(color, "-800)") : "var(--".concat(color, "-200)"),
              opacity: isDark ? 0.75 : 1,
              borderRadius: 'var(--rounded-full)'
            };

          case 'solid':
            return {
              backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)"),
              borderRadius: 'var(--rounded-full)'
            };

          default:
            return {
              borderRadius: 'var(--rounded-full)'
            };
        }
      }
    }, {
      key: "getHighlightContentStyle",
      value: function getHighlightContentStyle(_ref7) {
        var fillMode = _ref7.fillMode,
            color = _ref7.color,
            isDark = _ref7.isDark;

        switch (fillMode) {
          case 'outline':
          case 'none':
            return {
              fontWeight: 'var(--font-bold)',
              color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
            };

          case 'light':
            return {
              fontWeight: 'var(--font-bold)',
              color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
            };

          case 'solid':
            return {
              fontWeight: 'var(--font-bold)',
              color: 'var(--white)'
            };

          default:
            return '';
        }
      }
    }, {
      key: "bgAccentHigh",
      value: function bgAccentHigh(_ref8) {
        var color = _ref8.color,
            isDark = _ref8.isDark;
        return {
          backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)")
        };
      }
    }, {
      key: "contentAccent",
      value: function contentAccent(_ref9) {
        var color = _ref9.color,
            isDark = _ref9.isDark;
        if (!color) return null;
        return {
          fontWeight: 'var(--font-bold)',
          color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
        };
      }
    }, {
      key: "normalizeDot",
      value: function normalizeDot(config) {
        return this.normalizeNonHighlight('dot', config, this.bgAccentHigh);
      }
    }, {
      key: "normalizeBar",
      value: function normalizeBar(config) {
        return this.normalizeNonHighlight('bar', config, this.bgAccentHigh);
      }
    }, {
      key: "normalizeContent",
      value: function normalizeContent(config) {
        return this.normalizeNonHighlight('content', config, this.contentAccent);
      }
    }, {
      key: "normalizeNonHighlight",
      value: function normalizeNonHighlight(type, config, styleFn) {
        var _this2 = this;

        var attr = this.normalizeAttr({
          type: type,
          config: config
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

        toPairs_1(attr).forEach(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              _ = _ref11[0],
              targetConfig = _ref11[1];

          defaults_1(targetConfig, {
            isDark: _this2.isDark,
            color: _this2.color
          });
          targetConfig.style = _objectSpread2(_objectSpread2({}, styleFn(targetConfig)), targetConfig.style);
        });
        return attr;
      }
    }]);

    return Theme;
  }();

  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }

    var number = Number(dirtyNumber);

    if (isNaN(number)) {
      return number;
    }

    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  var MILLISECONDS_IN_MINUTE = 60000;

  function getDateMillisecondsPart(date) {
    return date.getTime() % MILLISECONDS_IN_MINUTE;
  }
  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */


  function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
    date.setSeconds(0, 0);
    var hasNegativeUTCOffset = baseTimezoneOffset > 0;
    var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
  }

  /**
   * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
   * `date` as it will be rendered in the `timeZone`.
   */
  function tzTokenizeDate(date, timeZone) {
    var dtf = getDateTimeFormat(timeZone);
    return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
  }

  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };

  function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];

      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled
  }

  function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, '');
    var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
  }

  // Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
  // to get deterministic local date/time output according to the `en-US` locale which
  // can be used to extract local time parts as necessary.
  var dtfCache = {};
  function getDateTimeFormat(timeZone) {
    if (!dtfCache[timeZone]) {
      // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
      var testDateFormatted = new Intl.DateTimeFormat('en-US', {
        hour12: false,
        timeZone: 'America/New_York',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date('2014-06-25T04:00:00.123Z'));
      var hourCycleSupported =
        testDateFormatted === '06/25/2014, 00:00:00' ||
        testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';

      dtfCache[timeZone] = hourCycleSupported
        ? new Intl.DateTimeFormat('en-US', {
            hour12: false,
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        : new Intl.DateTimeFormat('en-US', {
            hourCycle: 'h23',
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
    }
    return dtfCache[timeZone]
  }

  var MILLISECONDS_IN_HOUR = 3600000;
  var MILLISECONDS_IN_MINUTE$1 = 60000;

  var patterns = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
    timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
  };

  // Parse various time zone offset formats to an offset in milliseconds
  function tzParseTimezone(timezoneString, date) {
    var token;
    var absoluteOffset;

    // Z
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
      return 0
    }

    var hours;

    // ±hh
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
      hours = parseInt(token[2], 10);

      if (!validateTimezone()) {
        return NaN
      }

      absoluteOffset = hours * MILLISECONDS_IN_HOUR;
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    // ±hh:mm or ±hhmm
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
      hours = parseInt(token[2], 10);
      var minutes = parseInt(token[3], 10);

      if (!validateTimezone(hours, minutes)) {
        return NaN
      }

      absoluteOffset =
        hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    // IANA time zone
    token = patterns.timezoneIANA.exec(timezoneString);
    if (token) {
      // var [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timezoneString)
      var tokens = tzTokenizeDate(date, timezoneString);
      var asUTC = Date.UTC(
        tokens[0],
        tokens[1] - 1,
        tokens[2],
        tokens[3],
        tokens[4],
        tokens[5]
      );
      var timestampWithMsZeroed = date.getTime() - (date.getTime() % 1000);
      return -(asUTC - timestampWithMsZeroed)
    }

    return 0
  }

  function validateTimezone(hours, minutes) {
    if (minutes != null && (minutes < 0 || minutes > 59)) {
      return false
    }

    return true
  }

  var MILLISECONDS_IN_HOUR$1 = 3600000;
  var MILLISECONDS_IN_MINUTE$2 = 60000;
  var DEFAULT_ADDITIONAL_DIGITS = 2;

  var patterns$1 = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    timeZoneDelimeter: /[Z ]/i,

    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
      /^([+-]\d{2})$/, // 0 additional digits
      /^([+-]\d{3})$/, // 1 additional digit
      /^([+-]\d{4})$/ // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
      /^([+-]\d{4})/, // 0 additional digits
      /^([+-]\d{5})/, // 1 additional digit
      /^([+-]\d{6})/ // 2 additional digits
    ],

    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,

    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

    // timezone tokens (to identify the presence of a tz)
    timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
  };

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If an argument is a string, the function tries to parse it.
   * Function accepts complete ISO 8601 formats as well as partial implementations.
   * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
   * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
   *
   * @param {Date|String|Number} argument - the value to convert
   * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
   * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
   * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
   *
   * @example
   * // Convert string '2014-02-11T11:30:30' to date:
   * var result = toDate('2014-02-11T11:30:30')
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert string '+02014101' to date,
   * // if the additional number of digits in the extended year format is 1:
   * var result = toDate('+02014101', {additionalDigits: 1})
   * //=> Fri Apr 11 2014 00:00:00
   */
  function toDate(argument, dirtyOptions) {
    if (arguments.length < 1) {
      throw new TypeError(
        '1 argument required, but only ' + arguments.length + ' present'
      )
    }

    if (argument === null) {
      return new Date(NaN)
    }

    var options = dirtyOptions || {};

    var additionalDigits =
      options.additionalDigits == null
        ? DEFAULT_ADDITIONAL_DIGITS
        : toInteger(options.additionalDigits);
    if (
      additionalDigits !== 2 &&
      additionalDigits !== 1 &&
      additionalDigits !== 0
    ) {
      throw new RangeError('additionalDigits must be 0, 1 or 2')
    }

    // Clone the date
    if (
      argument instanceof Date ||
      (typeof argument === 'object' &&
        Object.prototype.toString.call(argument) === '[object Date]')
    ) {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime())
    } else if (
      typeof argument === 'number' ||
      Object.prototype.toString.call(argument) === '[object Number]'
    ) {
      return new Date(argument)
    } else if (
      !(
        typeof argument === 'string' ||
        Object.prototype.toString.call(argument) === '[object String]'
      )
    ) {
      return new Date(NaN)
    }

    var dateStrings = splitDateString(argument);

    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;

    var date = parseDate(restDateString, year);

    if (isNaN(date)) {
      return new Date(NaN)
    }

    if (date) {
      var timestamp = date.getTime();
      var time = 0;
      var offset;

      if (dateStrings.time) {
        time = parseTime(dateStrings.time);

        if (isNaN(time)) {
          return new Date(NaN)
        }
      }

      if (dateStrings.timezone || options.timeZone) {
        offset = tzParseTimezone(
          dateStrings.timezone || options.timeZone,
          new Date(timestamp + time)
        );
        if (isNaN(offset)) {
          return new Date(NaN)
        }
        offset = tzParseTimezone(
          dateStrings.timezone || options.timeZone,
          new Date(timestamp + time + offset)
        );
        if (isNaN(offset)) {
          return new Date(NaN)
        }
      } else {
        // get offset accurate to hour in timezones that change offset
        offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
        offset = getTimezoneOffsetInMilliseconds(
          new Date(timestamp + time + offset)
        );
      }

      return new Date(timestamp + time + offset)
    } else {
      return new Date(NaN)
    }
  }

  function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns$1.dateTimeDelimeter);
    var timeString;

    if (patterns$1.plainTime.test(array[0])) {
      dateStrings.date = null;
      timeString = array[0];
    } else {
      dateStrings.date = array[0];
      timeString = array[1];
      dateStrings.timezone = array[2];
      if (patterns$1.timeZoneDelimeter.test(dateStrings.date)) {
        dateStrings.date = dateString.split(patterns$1.timeZoneDelimeter)[0];
        timeString = dateString.substr(dateStrings.date.length, dateString.length);
      }
    }

    if (timeString) {
      var token = patterns$1.timezone.exec(timeString);
      if (token) {
        dateStrings.time = timeString.replace(token[1], '');
        dateStrings.timezone = token[1];
      } else {
        dateStrings.time = timeString;
      }
    }

    return dateStrings
  }

  function parseYear(dateString, additionalDigits) {
    var patternYYY = patterns$1.YYY[additionalDigits];
    var patternYYYYY = patterns$1.YYYYY[additionalDigits];

    var token;

    // YYYY or ±YYYYY
    token = patterns$1.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
      var yearString = token[1];
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length)
      }
    }

    // YY or ±YYY
    token = patterns$1.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
      var centuryString = token[1];
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length)
      }
    }

    // Invalid ISO-formatted year
    return {
      year: null
    }
  }

  function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) {
      return null
    }

    var token;
    var date;
    var month;
    var week;

    // YYYY
    if (dateString.length === 0) {
      date = new Date(0);
      date.setUTCFullYear(year);
      return date
    }

    // YYYY-MM
    token = patterns$1.MM.exec(dateString);
    if (token) {
      date = new Date(0);
      month = parseInt(token[1], 10) - 1;

      if (!validateDate(year, month)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, month);
      return date
    }

    // YYYY-DDD or YYYYDDD
    token = patterns$1.DDD.exec(dateString);
    if (token) {
      date = new Date(0);
      var dayOfYear = parseInt(token[1], 10);

      if (!validateDayOfYearDate(year, dayOfYear)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, 0, dayOfYear);
      return date
    }

    // yyyy-MM-dd or YYYYMMDD
    token = patterns$1.MMDD.exec(dateString);
    if (token) {
      date = new Date(0);
      month = parseInt(token[1], 10) - 1;
      var day = parseInt(token[2], 10);

      if (!validateDate(year, month, day)) {
        return new Date(NaN)
      }

      date.setUTCFullYear(year, month, day);
      return date
    }

    // YYYY-Www or YYYYWww
    token = patterns$1.Www.exec(dateString);
    if (token) {
      week = parseInt(token[1], 10) - 1;

      if (!validateWeekDate(year, week)) {
        return new Date(NaN)
      }

      return dayOfISOWeekYear(year, week)
    }

    // YYYY-Www-D or YYYYWwwD
    token = patterns$1.WwwD.exec(dateString);
    if (token) {
      week = parseInt(token[1], 10) - 1;
      var dayOfWeek = parseInt(token[2], 10) - 1;

      if (!validateWeekDate(year, week, dayOfWeek)) {
        return new Date(NaN)
      }

      return dayOfISOWeekYear(year, week, dayOfWeek)
    }

    // Invalid ISO-formatted date
    return null
  }

  function parseTime(timeString) {
    var token;
    var hours;
    var minutes;

    // hh
    token = patterns$1.HH.exec(timeString);
    if (token) {
      hours = parseFloat(token[1].replace(',', '.'));

      if (!validateTime(hours)) {
        return NaN
      }

      return (hours % 24) * MILLISECONDS_IN_HOUR$1
    }

    // hh:mm or hhmm
    token = patterns$1.HHMM.exec(timeString);
    if (token) {
      hours = parseInt(token[1], 10);
      minutes = parseFloat(token[2].replace(',', '.'));

      if (!validateTime(hours, minutes)) {
        return NaN
      }

      return (
        (hours % 24) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2
      )
    }

    // hh:mm:ss or hhmmss
    token = patterns$1.HHMMSS.exec(timeString);
    if (token) {
      hours = parseInt(token[1], 10);
      minutes = parseInt(token[2], 10);
      var seconds = parseFloat(token[3].replace(',', '.'));

      if (!validateTime(hours, minutes, seconds)) {
        return NaN
      }

      return (
        (hours % 24) * MILLISECONDS_IN_HOUR$1 +
        minutes * MILLISECONDS_IN_MINUTE$2 +
        seconds * 1000
      )
    }

    // Invalid ISO-formatted time
    return null
  }

  function dayOfISOWeekYear(isoWeekYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date
  }

  // Validation functions

  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function isLeapYearIndex(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  }

  function validateDate(year, month, date) {
    if (month < 0 || month > 11) {
      return false
    }

    if (date != null) {
      if (date < 1) {
        return false
      }

      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
        return false
      }
      if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
        return false
      }
    }

    return true
  }

  function validateDayOfYearDate(year, dayOfYear) {
    if (dayOfYear < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) {
      return false
    }
    if (!isLeapYear && dayOfYear > 365) {
      return false
    }

    return true
  }

  function validateWeekDate(year, week, day) {
    if (week < 0 || week > 52) {
      return false
    }

    if (day != null && (day < 0 || day > 6)) {
      return false
    }

    return true
  }

  function validateTime(hours, minutes, seconds) {
    if (hours != null && (hours < 0 || hours >= 25)) {
      return false
    }

    if (minutes != null && (minutes < 0 || minutes >= 60)) {
      return false
    }

    if (seconds != null && (seconds < 0 || seconds >= 60)) {
      return false
    }

    return true
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate$1(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name startOfWeek
   * @category Week Helpers
   * @summary Return the start of a week for the given date.
   *
   * @description
   * Return the start of a week for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the start of a week
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   *
   * @example
   * // The start of a week for 2 September 2014 11:55:00:
   * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sun Aug 31 2014 00:00:00
   *
   * @example
   * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
   * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
   * //=> Mon Sep 01 2014 00:00:00
   */

  function startOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate$1(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name startOfISOWeek
   * @category ISO Week Helpers
   * @summary Return the start of an ISO week for the given date.
   *
   * @description
   * Return the start of an ISO week for the given date.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of an ISO week
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of an ISO week for 2 September 2014 11:55:00:
   * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Mon Sep 01 2014 00:00:00
   */

  function startOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return startOfWeek(dirtyDate, {
      weekStartsOn: 1
    });
  }

  /**
   * @name getISOWeekYear
   * @category ISO Week-Numbering Year Helpers
   * @summary Get the ISO week-numbering year of the given date.
   *
   * @description
   * Get the ISO week-numbering year of the given date,
   * which always starts 3 days before the year's first Thursday.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - The function was renamed from `getISOYear` to `getISOWeekYear`.
   *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
   *   This change makes the name consistent with
   *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
   *
   * @param {Date|Number} date - the given date
   * @returns {Number} the ISO week-numbering year
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Which ISO-week numbering year is 2 January 2005?
   * var result = getISOWeekYear(new Date(2005, 0, 2))
   * //=> 2004
   */

  function getISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  /**
   * @name startOfISOWeekYear
   * @category ISO Week-Numbering Year Helpers
   * @summary Return the start of an ISO week-numbering year for the given date.
   *
   * @description
   * Return the start of an ISO week-numbering year,
   * which always starts 3 days before the year's first Thursday.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of an ISO week-numbering year
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of an ISO week-numbering year for 2 July 2005:
   * var result = startOfISOWeekYear(new Date(2005, 6, 2))
   * //=> Mon Jan 03 2005 00:00:00
   */

  function startOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    return date;
  }

  var MILLISECONDS_IN_WEEK = 604800000;
  /**
   * @name getISOWeek
   * @category ISO Week Helpers
   * @summary Get the ISO week of the given date.
   *
   * @description
   * Get the ISO week of the given date.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @returns {Number} the ISO week
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Which week of the ISO-week numbering year is 2 January 2005?
   * var result = getISOWeek(new Date(2005, 0, 2))
   * //=> 53
   */

  function getISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  /**
   * @name getWeekYear
   * @category Week-Numbering Year Helpers
   * @summary Get the local week-numbering year of the given date.
   *
   * @description
   * Get the local week-numbering year of the given date.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Number} the local week-numbering year
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // Which week numbering year is 26 December 2004 with the default settings?
   * var result = getWeekYear(new Date(2004, 11, 26))
   * //=> 2005
   *
   * @example
   * // Which week numbering year is 26 December 2004 if week starts on Saturday?
   * var result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
   * //=> 2004
   *
   * @example
   * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
   * var result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
   * //=> 2004
   */

  function getWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var year = date.getFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  /**
   * @name startOfWeekYear
   * @category Week-Numbering Year Helpers
   * @summary Return the start of a local week-numbering year for the given date.
   *
   * @description
   * Return the start of a local week-numbering year.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Date} the start of a week-numbering year
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // The start of an a week-numbering year for 2 July 2005 with default settings:
   * var result = startOfWeekYear(new Date(2005, 6, 2))
   * //=> Sun Dec 26 2004 00:00:00
   *
   * @example
   * // The start of a week-numbering year for 2 July 2005
   * // if Monday is the first day of week
   * // and 4 January is always in the first week of the year:
   * var result = startOfWeekYear(new Date(2005, 6, 2), {
   *   weekStartsOn: 1,
   *   firstWeekContainsDate: 4
   * })
   * //=> Mon Jan 03 2005 00:00:00
   */

  function startOfWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek(firstWeek, dirtyOptions);
    return date;
  }

  var MILLISECONDS_IN_WEEK$1 = 604800000;
  /**
   * @name getWeek
   * @category Week Helpers
   * @summary Get the local week index of the given date.
   *
   * @description
   * Get the local week index of the given date.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Number} the week
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // Which week of the local week numbering year is 2 January 2005 with default options?
   * var result = getISOWeek(new Date(2005, 0, 2))
   * //=> 2
   *
   * // Which week of the local week numbering year is 2 January 2005,
   * // if Monday is the first day of the week,
   * // and the first week of the year always contains 4 January?
   * var result = getISOWeek(new Date(2005, 0, 2), {
   *   weekStartsOn: 1,
   *   firstWeekContainsDate: 4
   * })
   * //=> 53
   */

  function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }

  var MILLISECONDS_IN_WEEK$2 = 604800000;
  /**
   * @name differenceInCalendarWeeks
   * @category Week Helpers
   * @summary Get the number of calendar weeks between the given dates.
   *
   * @description
   * Get the number of calendar weeks between the given dates.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Number} the number of calendar weeks
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   *
   * @example
   * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
   * var result = differenceInCalendarWeeks(
   *   new Date(2014, 6, 20),
   *   new Date(2014, 6, 5)
   * )
   * //=> 3
   *
   * @example
   * // If the week starts on Monday,
   * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
   * var result = differenceInCalendarWeeks(
   *   new Date(2014, 6, 20),
   *   new Date(2014, 6, 5),
   *   { weekStartsOn: 1 }
   * )
   * //=> 2
   */

  function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
    requiredArgs(2, arguments);
    var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
    var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
    var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2);
  }

  /**
   * @name lastDayOfMonth
   * @category Month Helpers
   * @summary Return the last day of a month for the given date.
   *
   * @description
   * Return the last day of a month for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the last day of a month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The last day of a month for 2 September 2014 11:55:00:
   * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 00:00:00
   */

  function lastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name startOfMonth
   * @category Month Helpers
   * @summary Return the start of a month for the given date.
   *
   * @description
   * Return the start of a month for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of a month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of a month for 2 September 2014 11:55:00:
   * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Mon Sep 01 2014 00:00:00
   */

  function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate$1(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name getWeeksInMonth
   * @category Week Helpers
   * @summary Get the number of calendar weeks a month spans.
   *
   * @description
   * Get the number of calendar weeks the month in the given date spans.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Number} the number of calendar weeks
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   *
   * @example
   * // How many calendar weeks does February 2015 span?
   * var result = getWeeksInMonth(new Date(2015, 1, 8))
   * //=> 4
   *
   * @example
   * // If the week starts on Monday,
   * // how many calendar weeks does July 2017 span?
   * var result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
   * //=> 6
   */

  function getWeeksInMonth(date, options) {
    requiredArgs(1, arguments);
    return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
  }

  /**
   * @name addDays
   * @category Day Helpers
   * @summary Add the specified number of days to the given date.
   *
   * @description
   * Add the specified number of days to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the days added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 10 days to 1 September 2014:
   * var result = addDays(new Date(2014, 8, 1), 10)
   * //=> Thu Sep 11 2014 00:00:00
   */

  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate$1(dirtyDate);
    var amount = toInteger(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 days, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    date.setDate(date.getDate() + amount);
    return date;
  }

  const pad = (val, len, char = '0') => {
      val = val !== null && val !== undefined ? String(val) : '';
      len = len || 2;
      while (val.length < len) {
          val = `${char}${val}`;
      }
      return val;
  };
  const mergeEvents = (...args) => {
      const result = {};
      args.forEach(e => Object.entries(e).forEach(([key, value]) => {
          if (!result[key]) {
              result[key] = value;
          }
          else if (isArrayLikeObject_1(result[key])) {
              result[key].push(value);
          }
          else {
              result[key] = [result[key], value];
          }
      }));
      return result;
  };
  const addPages = ({ month, year }, count) => {
      const incr = count > 0 ? 1 : -1;
      for (let i = 0; i < Math.abs(count); i++) {
          month += incr;
          if (month > 12) {
              month = 1;
              year++;
          }
          else if (month < 1) {
              month = 12;
              year--;
          }
      }
      return {
          month,
          year,
      };
  };
  const arrayHasItems = (array) => isArrayLikeObject_1(array) && array.length > 0;
  const mixinOptionalProps = (source, target, props) => {
      const assigned = [];
      props.forEach(p => {
          const name = p.name || p.toString();
          const mixin = p.mixin;
          const validate = p.validate;
          if (Object.prototype.hasOwnProperty.call(source, name)) {
              const value = validate ? validate(source[name]) : source[name];
              target[name] = mixin && isObject$1(value) ? { ...mixin, ...value } : value;
              assigned.push(name);
          }
      });
      return {
          target,
          assigned: assigned.length ? assigned : null,
      };
  };
  const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
  /* eslint-disable no-bitwise */
  const createGuid = () => {
      function S4() {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };
  /* eslint-enable no-bitwise */

  var millisecondsPerDay = 24 * 60 * 60 * 1000;

  var DateInfo = /*#__PURE__*/function () {
    function DateInfo(config) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$order = _ref.order,
          order = _ref$order === void 0 ? 0 : _ref$order,
          locale = _ref.locale,
          isFullDay = _ref.isFullDay;

      _classCallCheck(this, DateInfo);

      this.isDateInfo = true;
      this.order = order;
      this.locale = locale instanceof Locale ? locale : new Locale(locale);
      this.firstDayOfWeek = this.locale.firstDayOfWeek; // Adjust config for simple dates

      if (!isObject$1(config)) {
        var date = this.locale.normalizeDate(config);

        if (isFullDay) {
          config = {
            start: date,
            end: date
          };
        } else {
          config = {
            startOn: date,
            endOn: date
          };
        }
      }

      var start = null;
      var end = null;

      if (config.start) {
        start = this.locale.normalizeDate(config.start, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '00:00:00'
        }));
      } else if (config.startOn) {
        start = this.locale.normalizeDate(config.startOn, this.opts);
      }

      if (config.end) {
        end = this.locale.normalizeDate(config.end, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '23:59:59'
        }));
      } else if (config.endOn) {
        end = this.locale.normalizeDate(config.endOn, this.opts);
      } // Reconfigure start and end dates if needed


      if (start && end && start > end) {
        var temp = start;
        start = end;
        end = temp;
      } else if (start && config.span >= 1) {
        end = addDays(start, config.span - 1);
      } // Assign start and end dates


      this.start = start;
      this.startTime = start ? start.getTime() : NaN;
      this.end = end;
      this.endTime = end ? end.getTime() : NaN;
      this.isDate = this.startTime && this.startTime === this.endTime;
      this.isRange = !this.isDate; // Assign 'and' condition

      var andOpt = mixinOptionalProps(config, {}, DateInfo.patternProps);

      if (andOpt.assigned) {
        this.on = {
          and: andOpt.target
        };
      } // Assign 'or' conditions


      if (config.on) {
        var or = (isArrayLikeObject_1(config.on) ? config.on : [config.on]).map(function (o) {
          if (isFunction_1(o)) return o;
          var opt = mixinOptionalProps(o, {}, DateInfo.patternProps);
          return opt.assigned ? opt.target : null;
        }).filter(function (o) {
          return o;
        });
        if (or.length) this.on = _objectSpread2(_objectSpread2({}, this.on), {}, {
          or: or
        });
      } // Assign flag if date is complex


      this.isComplex = !!this.on;
    }

    _createClass(DateInfo, [{
      key: "toDateInfo",
      value: function toDateInfo(date) {
        return date.isDateInfo ? date : new DateInfo(date, this.opts);
      }
    }, {
      key: "startOfWeek",
      value: function startOfWeek(date) {
        var day = date.getDay() + 1;
        var daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
        return addDays(date, daysToAdd);
      }
    }, {
      key: "diffInDays",
      value: function diffInDays(d1, d2) {
        return Math.round((d2 - d1) / millisecondsPerDay);
      }
    }, {
      key: "diffInWeeks",
      value: function diffInWeeks(d1, d2) {
        return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
      }
    }, {
      key: "diffInYears",
      value: function diffInYears(d1, d2) {
        return d2.getUTCFullYear() - d1.getUTCFullYear();
      }
    }, {
      key: "diffInMonths",
      value: function diffInMonths(d1, d2) {
        return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
      }
    }, {
      key: "iterateDatesInRange",
      value: function iterateDatesInRange(_ref2, fn) {
        var start = _ref2.start,
            end = _ref2.end;
        if (!start || !end || !isFunction_1(fn)) return null;
        start = this.locale.normalizeDate(start, _objectSpread2(_objectSpread2({}, this.opts), {}, {
          time: '00:00:00'
        }));
        var state = {
          i: 0,
          date: start,
          day: this.locale.getDateParts(start),
          finished: false
        };
        var result = null;

        for (; !state.finished && state.date <= end; state.i++) {
          result = fn(state);
          state.date = addDays(state.date, 1);
          state.day = this.locale.getDateParts(state.date);
        }

        return result;
      }
    }, {
      key: "shallowIntersectingRange",
      value: function shallowIntersectingRange(other) {
        return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
      } // Returns a date range that intersects two DateInfo objects
      // NOTE: This is a shallow calculation (does not take patterns into account),
      //   so this method should only really be called for special conditions
      //   where absolute accuracy is not necessarily needed

    }, {
      key: "rangeShallowIntersectingRange",
      value: function rangeShallowIntersectingRange(date1, date2) {
        if (!this.dateShallowIntersectsDate(date1, date2)) {
          return null;
        }

        var thisRange = date1.toRange();
        var otherRange = date2.toRange(); // Start with infinite start and end dates

        var start = null;
        var end = null; // This start date exists

        if (thisRange.start) {
          // Use this definite start date if other start date is infinite
          if (!otherRange.start) {
            start = thisRange.start;
          } else {
            // Otherwise, use the latest start date
            start = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
          } // Other start date exists

        } else if (otherRange.start) {
          // Use other definite start date as this one is infinite
          start = otherRange.start;
        } // This end date exists


        if (thisRange.end) {
          // Use this definite end date if other end date is infinite
          if (!otherRange.end) {
            end = thisRange.end;
          } else {
            // Otherwise, use the earliest end date
            end = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
          } // Other end date exists

        } else if (otherRange.end) {
          // Use other definite end date as this one is infinite
          end = otherRange.end;
        } // Return calculated range


        return {
          start: start,
          end: end
        };
      } // ========================================================
      // Determines if this date partially intersects another date
      // NOTE: This is a deep test (patterns tested)

    }, {
      key: "intersectsDate",
      value: function intersectsDate(other) {
        var _this = this;

        var date = this.toDateInfo(other);
        if (!this.shallowIntersectsDate(date)) return null;
        if (!this.on) return this;
        var range = this.rangeShallowIntersectingRange(this, date);
        var result = false;
        this.iterateDatesInRange(range, function (state) {
          if (_this.matchesDay(state.day)) {
            result = result || date.matchesDay(state.day);
            state.finished = result;
          }
        });
        return result;
      } // ========================================================
      // Determines if this date partially intersects another date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "shallowIntersectsDate",
      value: function shallowIntersectsDate(other) {
        return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
      } // ========================================================
      // Determines if first date partially intersects second date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "dateShallowIntersectsDate",
      value: function dateShallowIntersectsDate(date1, date2) {
        if (date1.isDate) {
          return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
        }

        if (date2.isDate) {
          return this.dateShallowIncludesDate(date1, date2);
        } // Both ranges


        if (date1.start && date2.end && date1.start > date2.end) {
          return false;
        }

        if (date1.end && date2.start && date1.end < date2.start) {
          return false;
        }

        return true;
      } // ========================================================
      // Determines if this date completely includes another date
      // NOTE: This is a deep test (patterns tested)

    }, {
      key: "includesDate",
      value: function includesDate(other) {
        var _this2 = this;

        var date = this.toDateInfo(other);

        if (!this.shallowIncludesDate(date)) {
          return false;
        }

        if (!this.on) {
          return true;
        }

        var range = this.rangeShallowIntersectingRange(this, date);
        var result = true;
        this.iterateDatesInRange(range, function (state) {
          if (_this2.matchesDay(state.day)) {
            result = result && date.matchesDay(state.day);
            state.finished = !result;
          }
        });
        return result;
      } // ========================================================
      // Determines if this date completely includes another date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "shallowIncludesDate",
      value: function shallowIncludesDate(other) {
        return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo(other, this.opts));
      } // ========================================================
      // Determines if first date completely includes second date
      // NOTE: This is a shallow test (no patterns tested)

    }, {
      key: "dateShallowIncludesDate",
      value: function dateShallowIncludesDate(date1, date2) {
        // First date is simple date
        if (date1.isDate) {
          if (date2.isDate) {
            return date1.startTime === date2.startTime;
          }

          if (!date2.startTime || !date2.endTime) {
            return false;
          }

          return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
        } // Second date is simple date and first is date range


        if (date2.isDate) {
          if (date1.start && date2.start < date1.start) {
            return false;
          }

          if (date1.end && date2.start > date1.end) {
            return false;
          }

          return true;
        } // Both dates are date ranges


        if (date1.start && (!date2.start || date2.start < date1.start)) {
          return false;
        }

        if (date1.end && (!date2.end || date2.end > date1.end)) {
          return false;
        }

        return true;
      }
    }, {
      key: "intersectsDay",
      value: function intersectsDay(day) {
        // Date is outside general range - return null
        if (!this.shallowIntersectsDate(day.range)) return null; // Return this date if patterns match

        return this.matchesDay(day) ? this : null;
      }
    }, {
      key: "matchesDay",
      value: function matchesDay(day) {
        var _this3 = this;

        // No patterns to test
        if (!this.on) return true; // Fail if 'and' condition fails

        if (this.on.and && !DateInfo.testConfig(this.on.and, day, this)) {
          return false;
        } // Fail if every 'or' condition fails


        if (this.on.or && !this.on.or.some(function (or) {
          return DateInfo.testConfig(or, day, _this3);
        })) {
          return false;
        } // Patterns match


        return true;
      }
    }, {
      key: "toRange",
      value: function toRange() {
        return new DateInfo({
          start: this.start,
          end: this.end
        }, this.opts);
      } // Build the 'compare to other' function

    }, {
      key: "compare",
      value: function compare(other) {
        if (this.order !== other.order) return this.order - other.order;
        if (this.isDate !== other.isDate) return this.isDate ? 1 : -1;
        if (this.isDate) return 0;
        var diff = this.start - other.start;
        return diff !== 0 ? diff : this.end - other.end;
      }
    }, {
      key: "opts",
      get: function get() {
        return {
          order: this.order,
          locale: this.locale
        };
      }
    }], [{
      key: "testConfig",
      value: function testConfig(config, day, dateInfo) {
        if (isFunction_1(config)) return config(day);

        if (isObject$1(config)) {
          return Object.keys(config).every(function (k) {
            return DateInfo.patterns[k].test(day, config[k], dateInfo);
          });
        }

        return null;
      }
    }, {
      key: "patterns",
      get: function get() {
        return {
          dailyInterval: {
            test: function test(day, interval, di) {
              return di.diffInDays(di.start || new Date(), day.date) % interval === 0;
            }
          },
          weeklyInterval: {
            test: function test(day, interval, di) {
              return di.diffInWeeks(di.start || new Date(), day.date) % interval === 0;
            }
          },
          monthlyInterval: {
            test: function test(day, interval, di) {
              return di.diffInMonths(di.start || new Date(), day.date) % interval === 0;
            }
          },
          yearlyInterval: {
            test: function test() {
              return function (day, interval, di) {
                return di.diffInYears(di.start || new Date(), day.date) % interval === 0;
              };
            }
          },
          days: {
            validate: function validate(days) {
              return isArrayLikeObject_1(days) ? days : [parseInt(days, 10)];
            },
            test: function test(day, days) {
              return days.includes(day.day) || days.includes(-day.dayFromEnd);
            }
          },
          weekdays: {
            validate: function validate(weekdays) {
              return isArrayLikeObject_1(weekdays) ? weekdays : [parseInt(weekdays, 10)];
            },
            test: function test(day, weekdays) {
              return weekdays.includes(day.weekday);
            }
          },
          ordinalWeekdays: {
            validate: function validate(ordinalWeekdays) {
              return Object.keys(ordinalWeekdays).reduce(function (obj, ck) {
                var weekdays = ordinalWeekdays[ck];
                if (!weekdays) return obj;
                obj[ck] = isArrayLikeObject_1(weekdays) ? weekdays : [parseInt(weekdays, 10)];
                return obj;
              }, {});
            },
            test: function test(day, ordinalWeekdays) {
              return Object.keys(ordinalWeekdays).map(function (k) {
                return parseInt(k, 10);
              }).find(function (k) {
                return ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd);
              });
            }
          },
          weekends: {
            validate: function validate(config) {
              return config;
            },
            test: function test(day) {
              return day.weekday === 1 || day.weekday === 7;
            }
          },
          workweek: {
            validate: function validate(config) {
              return config;
            },
            test: function test(day) {
              return day.weekday >= 2 && day.weekday <= 6;
            }
          },
          weeks: {
            validate: function validate(weeks) {
              return isArrayLikeObject_1(weeks) ? weeks : [parseInt(weeks, 10)];
            },
            test: function test(day, weeks) {
              return weeks.includes(day.week) || weeks.includes(-day.weekFromEnd);
            }
          },
          months: {
            validate: function validate(months) {
              return isArrayLikeObject_1(months) ? months : [parseInt(months, 10)];
            },
            test: function test(day, months) {
              return months.includes(day.month);
            }
          },
          years: {
            validate: function validate(years) {
              return isArrayLikeObject_1(years) ? years : [parseInt(years, 10)];
            },
            test: function test(day, years) {
              return years.includes(day.year);
            }
          }
        };
      }
    }, {
      key: "patternProps",
      get: function get() {
        return Object.keys(DateInfo.patterns).map(function (k) {
          return {
            name: k,
            validate: DateInfo.patterns[k].validate
          };
        });
      }
    }]);

    return DateInfo;
  }();

  const locales = {
      // Arabic
      ar: { dow: 7, L: 'D/\u200FM/\u200FYYYY' },
      // Bulgarian
      bg: { dow: 2, L: 'D.MM.YYYY' },
      // Catalan
      ca: { dow: 2, L: 'DD/MM/YYYY' },
      // Chinese (China)
      'zh-CN': { dow: 2, L: 'YYYY/MM/DD' },
      // Chinese (Taiwan)
      'zh-TW': { dow: 1, L: 'YYYY/MM/DD' },
      // Croatian
      hr: { dow: 2, L: 'DD.MM.YYYY' },
      // Czech
      cs: { dow: 2, L: 'DD.MM.YYYY' },
      // Danish
      da: { dow: 2, L: 'DD.MM.YYYY' },
      // Dutch
      nl: { dow: 2, L: 'DD-MM-YYYY' },
      // English (US)
      'en-US': { dow: 1, L: 'MM/DD/YYYY' },
      // English (Australia)
      'en-AU': { dow: 2, L: 'DD/MM/YYYY' },
      // English (Canada)
      'en-CA': { dow: 1, L: 'YYYY-MM-DD' },
      // English (Great Britain)
      'en-GB': { dow: 2, L: 'DD/MM/YYYY' },
      // English (Ireland)
      'en-IE': { dow: 2, L: 'DD-MM-YYYY' },
      // English (New Zealand)
      'en-NZ': { dow: 2, L: 'DD/MM/YYYY' },
      // English (South Africa)
      'en-ZA': { dow: 1, L: 'YYYY/MM/DD' },
      // Esperanto
      eo: { dow: 2, L: 'YYYY-MM-DD' },
      // Estonian
      et: { dow: 2, L: 'DD.MM.YYYY' },
      // Finnish
      fi: { dow: 2, L: 'DD.MM.YYYY' },
      // French
      fr: { dow: 2, L: 'DD/MM/YYYY' },
      // French (Canada)
      'fr-CA': { dow: 1, L: 'YYYY-MM-DD' },
      // French (Switzerland)
      'fr-CH': { dow: 2, L: 'DD.MM.YYYY' },
      // German
      de: { dow: 2, L: 'DD.MM.YYYY' },
      // Hebrew
      he: { dow: 1, L: 'DD.MM.YYYY' },
      // Indonesian
      id: { dow: 2, L: 'DD/MM/YYYY' },
      // Italian
      it: { dow: 2, L: 'DD/MM/YYYY' },
      // Japanese
      ja: { dow: 1, L: 'YYYY年M月D日' },
      // Korean
      ko: { dow: 1, L: 'YYYY.MM.DD' },
      // Latvian
      lv: { dow: 2, L: 'DD.MM.YYYY' },
      // Lithuanian
      lt: { dow: 2, L: 'DD.MM.YYYY' },
      // Macedonian
      mk: { dow: 2, L: 'D.MM.YYYY' },
      // Norwegian
      nb: { dow: 2, L: 'D. MMMM YYYY' },
      nn: { dow: 2, L: 'D. MMMM YYYY' },
      // Polish
      pl: { dow: 2, L: 'DD.MM.YYYY' },
      // Portuguese
      pt: { dow: 2, L: 'DD/MM/YYYY' },
      // Romanian
      ro: { dow: 2, L: 'DD.MM.YYYY' },
      // Russian
      ru: { dow: 2, L: 'DD.MM.YYYY' },
      // Slovak
      sk: { dow: 2, L: 'DD.MM.YYYY' },
      // Spanish (Spain)
      'es-ES': { dow: 2, L: 'DD/MM/YYYY' },
      // Spanish (Mexico)
      'es-MX': { dow: 2, L: 'DD/MM/YYYY' },
      // Swedish
      sv: { dow: 2, L: 'YYYY-MM-DD' },
      // Thai
      th: { dow: 1, L: 'DD/MM/YYYY' },
      // Turkish
      tr: { dow: 2, L: 'DD.MM.YYYY' },
      // Ukrainian
      uk: { dow: 2, L: 'DD.MM.YYYY' },
      // Vietnam
      vi: { dow: 2, L: 'DD/MM/YYYY' },
  };
  locales.en = locales['en-US'];
  locales.es = locales['es-ES'];
  locales.no = locales.nb;
  locales.zh = locales['zh-CN'];
  // Remap from abbr. to intuitive property names
  toPairs_1(locales).forEach(([id, { dow, L }]) => {
      locales[id] = {
          id,
          firstDayOfWeek: dow,
          masks: { L },
      };
  });

  var PATCH_KEYS = {
    1: ['year', 'month', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'],
    2: ['year', 'month', 'day'],
    3: ['hours', 'minutes', 'seconds', 'milliseconds']
  };
  var token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm; // eslint-disable-next-line @typescript-eslint/no-empty-function

  var noop = function noop() {};

  var monthUpdate = function monthUpdate(arrName) {
    return function (d, v, l) {
      var index = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

      if (~index) {
        d.month = index;
      }
    };
  };

  var maskMacros = ['L', 'iso'];
  var daysInWeek = 7;
  var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var formatFlags = {
    D: function D(d) {
      return d.day;
    },
    DD: function DD(d) {
      return pad(d.day);
    },
    Do: function Do(d, l) {
      return l.DoFn(d.day);
    },
    d: function d(_d) {
      return _d.weekday - 1;
    },
    dd: function dd(d) {
      return pad(d.weekday - 1);
    },
    W: function W(d, l) {
      return l.dayNamesNarrow[d.weekday - 1];
    },
    WW: function WW(d, l) {
      return l.dayNamesShorter[d.weekday - 1];
    },
    WWW: function WWW(d, l) {
      return l.dayNamesShort[d.weekday - 1];
    },
    WWWW: function WWWW(d, l) {
      return l.dayNames[d.weekday - 1];
    },
    M: function M(d) {
      return d.month;
    },
    MM: function MM(d) {
      return pad(d.month);
    },
    MMM: function MMM(d, l) {
      return l.monthNamesShort[d.month - 1];
    },
    MMMM: function MMMM(d, l) {
      return l.monthNames[d.month - 1];
    },
    YY: function YY(d) {
      return String(d.year).substr(2);
    },
    YYYY: function YYYY(d) {
      return pad(d.year, 4);
    },
    h: function h(d) {
      return d.hours % 12 || 12;
    },
    hh: function hh(d) {
      return pad(d.hours % 12 || 12);
    },
    H: function H(d) {
      return d.hours;
    },
    HH: function HH(d) {
      return pad(d.hours);
    },
    m: function m(d) {
      return d.minutes;
    },
    mm: function mm(d) {
      return pad(d.minutes);
    },
    s: function s(d) {
      return d.seconds;
    },
    ss: function ss(d) {
      return pad(d.seconds);
    },
    S: function S(d) {
      return Math.round(d.milliseconds / 100);
    },
    SS: function SS(d) {
      return pad(Math.round(d.milliseconds / 10), 2);
    },
    SSS: function SSS(d) {
      return pad(d.milliseconds, 3);
    },
    a: function a(d, l) {
      return d.hours < 12 ? l.amPm[0] : l.amPm[1];
    },
    A: function A(d, l) {
      return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
    },
    Z: function Z() {
      return 'Z';
    },
    ZZ: function ZZ(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60), 2));
    },
    ZZZ: function ZZZ(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4));
    },
    ZZZZ: function ZZZZ(d) {
      var o = d.timezoneOffset;
      return "".concat(o > 0 ? '-' : '+').concat(pad(Math.floor(Math.abs(o) / 60), 2), ":").concat(pad(Math.abs(o) % 60, 2));
    }
  };
  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    d: [twoDigits, noop],
    W: [word, noop],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    YY: [twoDigits, function (d, v) {
      var da = new Date();
      var cent = +da.getFullYear().toString().substr(0, 2);
      d.year = "".concat(v > 68 ? cent - 1 : cent).concat(v);
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    a: [word, function (d, v, l) {
      var val = v.toLowerCase();

      if (val === l.amPm[0]) {
        d.isPm = false;
      } else if (val === l.amPm[1]) {
        d.isPm = true;
      }
    }],
    Z: [/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = "".concat(v).match(/([+-]|\d\d)/gi);

      if (parts) {
        var minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.DD = parseFlags.D;
  parseFlags.dd = parseFlags.d;
  parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
  parseFlags.MM = parseFlags.M;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;
  parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
  function resolveConfig(config, locales) {
    // Get the detected locale string
    var detLocale = new Intl.DateTimeFormat().resolvedOptions().locale; // Resolve the locale id

    var id;

    if (isString_1(config)) {
      id = config;
    } else if (has$1(config, 'id')) {
      id = config.id;
    }

    id = (id || detLocale).toLowerCase();
    var localeKeys = Object.keys(locales);

    var validKey = function validKey(k) {
      return localeKeys.find(function (lk) {
        return lk.toLowerCase() === k;
      });
    };

    id = validKey(id) || validKey(id.substring(0, 2)) || detLocale; // Add fallback and spread default locale to prevent repetitive update loops

    var defLocale = _objectSpread2(_objectSpread2(_objectSpread2({}, locales['en-IE']), locales[id]), {}, {
      id: id
    }); // Assign or merge defaults with provided config


    config = isObject$1(config) ? defaultsDeep_1(config, defLocale) : defLocale; // Return resolved config

    return config;
  }

  var Locale = /*#__PURE__*/function () {
    function Locale(config) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$locales = _ref.locales,
          locales$1 = _ref$locales === void 0 ? locales : _ref$locales,
          timezone = _ref.timezone;

      _classCallCheck(this, Locale);

      var _resolveConfig = resolveConfig(config, locales$1),
          id = _resolveConfig.id,
          firstDayOfWeek = _resolveConfig.firstDayOfWeek,
          masks = _resolveConfig.masks;

      this.id = id;
      this.daysInWeek = daysInWeek;
      this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
      this.masks = masks;
      this.timezone = timezone || undefined;
      this.dayNames = this.getDayNames('long');
      this.dayNamesShort = this.getDayNames('short');
      this.dayNamesShorter = this.dayNamesShort.map(function (s) {
        return s.substring(0, 2);
      });
      this.dayNamesNarrow = this.getDayNames('narrow');
      this.monthNames = this.getMonthNames('long');
      this.monthNamesShort = this.getMonthNames('short');
      this.amPm = ['am', 'pm'];
      this.monthData = {}; // Bind methods

      this.getMonthComps = this.getMonthComps.bind(this);
      this.parse = this.parse.bind(this);
      this.format = this.format.bind(this);
      this.toPage = this.toPage.bind(this);
    }

    _createClass(Locale, [{
      key: "format",
      value: function format(date, mask) {
        var _this = this;

        date = this.normalizeDate(date);
        if (!date) return '';
        mask = this.normalizeMasks(mask)[0];
        var literals = []; // Make literals inactive by replacing them with ??

        mask = mask.replace(literal, function ($0, $1) {
          literals.push($1);
          return '??';
        });
        var timezone = /Z$/.test(mask) ? 'utc' : this.timezone;
        var dateParts = this.getDateParts(date, timezone); // Apply formatting rules

        mask = mask.replace(token, function ($0) {
          return $0 in formatFlags ? formatFlags[$0](dateParts, _this) : $0.slice(1, $0.length - 1);
        }); // Inline literal values back into the formatted value

        return mask.replace(/\?\?/g, function () {
          return literals.shift();
        });
      }
    }, {
      key: "parse",
      value: function parse(dateString, mask) {
        var _this2 = this;

        var masks = this.normalizeMasks(mask);
        return masks.map(function (m) {
          if (typeof m !== 'string') {
            throw new Error('Invalid mask in fecha.parse');
          } // Reset string value


          var str = dateString; // Avoid regular expression denial of service, fail early for really long strings
          // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

          if (str.length > 1000) {
            return false;
          }

          var isValid = true;
          var dateInfo = {};
          m.replace(token, function ($0) {
            if (parseFlags[$0]) {
              var info = parseFlags[$0];
              var index = str.search(info[0]);

              if (!~index) {
                isValid = false;
              } else {
                str.replace(info[0], function (result) {
                  info[1](dateInfo, result, _this2);
                  str = str.substr(index + result.length);
                  return result;
                });
              }
            }

            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
          });

          if (!isValid) {
            return false;
          }

          var today = new Date();

          if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
          } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
          }

          var date;

          if (dateInfo.timezoneOffset != null) {
            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
          } else {
            date = _this2.getDateFromParts({
              year: dateInfo.year || today.getFullYear(),
              month: (dateInfo.month || 0) + 1,
              day: dateInfo.day || 1,
              hours: dateInfo.hour || 0,
              minutes: dateInfo.minute || 0,
              seconds: dateInfo.second || 0,
              milliseconds: dateInfo.millisecond || 0
            });
          }

          return date;
        }).find(function (d) {
          return d;
        }) || new Date(dateString);
      } // Normalizes mask(s) as an array with replaced mask macros

    }, {
      key: "normalizeMasks",
      value: function normalizeMasks(masks) {
        var _this3 = this;

        return (arrayHasItems(masks) && masks || [isString_1(masks) && masks || 'YYYY-MM-DD']).map(function (m) {
          return maskMacros.reduce(function (prev, curr) {
            return prev.replace(curr, _this3.masks[curr] || '');
          }, m);
        });
      }
    }, {
      key: "normalizeDate",
      value: function normalizeDate(d) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var result = null;
        var type = config.type,
            fillDate = config.fillDate;
        var mask = config.mask,
            patch = config.patch,
            time = config.time;
        var auto = type === 'auto' || !type;

        if (isNumber_1(d)) {
          type = 'number';
          result = new Date(+d);
        } else if (isString_1(d)) {
          type = 'string';
          result = d ? this.parse(d, mask || 'iso') : null;
        } else if (isObject$1(d)) {
          type = 'object';
          result = this.getDateFromParts(d);
        } else {
          type = 'date';
          result = isDate$1(d) ? new Date(d.getTime()) : null;
        }

        if (result && patch) {
          fillDate = fillDate == null ? new Date() : this.normalizeDate(fillDate);

          var parts = _objectSpread2(_objectSpread2({}, this.getDateParts(fillDate)), pick_1(this.getDateParts(result), PATCH_KEYS[patch]));

          result = this.getDateFromParts(parts);
        }

        if (auto) config.type = type;

        if (result && !isNaN(result.getTime())) {
          if (time) {
            result = this.adjustTimeForDate(result, {
              timeAdjust: time
            });
          }

          return result;
        }

        return null;
      }
    }, {
      key: "denormalizeDate",
      value: function denormalizeDate(date) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            type = _ref2.type,
            mask = _ref2.mask;

        switch (type) {
          case 'number':
            return date ? date.getTime() : NaN;

          case 'string':
            return date ? this.format(date, mask || 'iso') : '';

          default:
            return date ? new Date(date) : null;
        }
      }
    }, {
      key: "adjustTimeForDate",
      value: function adjustTimeForDate(date, _ref3) {
        var timeAdjust = _ref3.timeAdjust;

        if (timeAdjust) {
          var dateParts = this.getDateParts(date);

          if (timeAdjust === 'now') {
            var timeParts = this.getDateParts(new Date());
            dateParts.hours = timeParts.hours;
            dateParts.minutes = timeParts.minutes;
            dateParts.seconds = timeParts.seconds;
            dateParts.milliseconds = timeParts.milliseconds;
          } else {
            var d = new Date("2000-01-01T".concat(timeAdjust, "Z"));
            dateParts.hours = d.getUTCHours();
            dateParts.minutes = d.getUTCMinutes();
            dateParts.seconds = d.getUTCSeconds();
            dateParts.milliseconds = d.getUTCMilliseconds();
          }

          date = this.getDateFromParts(dateParts);
        }

        return date;
      }
    }, {
      key: "normalizeDates",
      value: function normalizeDates(dates, opts) {
        opts = opts || {};
        opts.locale = this; // Assign dates

        return (isArrayLikeObject_1(dates) ? dates : [dates]).map(function (d) {
          return d && (d instanceof DateInfo ? d : new DateInfo(d, opts));
        }).filter(function (d) {
          return d;
        });
      }
    }, {
      key: "getDateParts",
      value: function getDateParts(date) {
        var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.timezone;
        if (!date) return null;
        var tzDate = date;

        if (timezone) {
          var normDate = new Date(date.toLocaleString('en-US', {
            timeZone: timezone
          }));
          normDate.setMilliseconds(date.getMilliseconds());
          var diff = normDate.getTime() - date.getTime();
          tzDate = new Date(date.getTime() + diff);
        }

        var milliseconds = tzDate.getMilliseconds();
        var seconds = tzDate.getSeconds();
        var minutes = tzDate.getMinutes();
        var hours = tzDate.getHours();
        var month = tzDate.getMonth() + 1;
        var year = tzDate.getFullYear();
        var comps = this.getMonthComps(month, year);
        var day = tzDate.getDate();
        var dayFromEnd = comps.days - day + 1;
        var weekday = tzDate.getDay() + 1;
        var weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
        var weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
        var week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
        var weekFromEnd = comps.weeks - week + 1;
        var parts = {
          milliseconds: milliseconds,
          seconds: seconds,
          minutes: minutes,
          hours: hours,
          day: day,
          dayFromEnd: dayFromEnd,
          weekday: weekday,
          weekdayOrdinal: weekdayOrdinal,
          weekdayOrdinalFromEnd: weekdayOrdinalFromEnd,
          week: week,
          weekFromEnd: weekFromEnd,
          month: month,
          year: year,
          date: date,
          isValid: true
        };
        parts.timezoneOffset = this.getTimezoneOffset(parts);
        return parts;
      }
    }, {
      key: "getDateFromParts",
      value: function getDateFromParts(parts) {
        if (!parts) return null;
        var d = new Date();
        var _parts$year = parts.year,
            year = _parts$year === void 0 ? d.getFullYear() : _parts$year,
            _parts$month = parts.month,
            month = _parts$month === void 0 ? d.getMonth() + 1 : _parts$month,
            _parts$day = parts.day,
            day = _parts$day === void 0 ? d.getDate() : _parts$day,
            _parts$hours = parts.hours,
            hrs = _parts$hours === void 0 ? 0 : _parts$hours,
            _parts$minutes = parts.minutes,
            min = _parts$minutes === void 0 ? 0 : _parts$minutes,
            _parts$seconds = parts.seconds,
            sec = _parts$seconds === void 0 ? 0 : _parts$seconds,
            _parts$milliseconds = parts.milliseconds,
            ms = _parts$milliseconds === void 0 ? 0 : _parts$milliseconds;

        if (this.timezone) {
          var dateString = "".concat(pad(year, 4), "-").concat(pad(month, 2), "-").concat(pad(day, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
          return toDate(dateString, {
            timeZone: this.timezone
          });
        }

        return new Date(year, month - 1, day, hrs, min, sec, ms);
      }
    }, {
      key: "getTimezoneOffset",
      value: function getTimezoneOffset(parts) {
        var y = parts.year,
            m = parts.month,
            d = parts.day,
            _parts$hours2 = parts.hours,
            hrs = _parts$hours2 === void 0 ? 0 : _parts$hours2,
            _parts$minutes2 = parts.minutes,
            min = _parts$minutes2 === void 0 ? 0 : _parts$minutes2,
            _parts$seconds2 = parts.seconds,
            sec = _parts$seconds2 === void 0 ? 0 : _parts$seconds2,
            _parts$milliseconds2 = parts.milliseconds,
            ms = _parts$milliseconds2 === void 0 ? 0 : _parts$milliseconds2;
        var date;
        var utcDate = new Date(Date.UTC(y, m - 1, d, hrs, min, sec, ms));

        if (this.timezone) {
          var dateString = "".concat(pad(y, 4), "-").concat(pad(m, 2), "-").concat(pad(d, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
          date = toDate(dateString, {
            timeZone: this.timezone
          });
        } else {
          date = new Date(y, m - 1, d, hrs, min, sec, ms);
        }

        return (date - utcDate) / 60000;
      }
    }, {
      key: "toPage",
      value: function toPage(arg, fromPage) {
        if (isNumber_1(arg)) {
          return addPages(fromPage, arg);
        }

        if (isString_1(arg)) {
          return this.getDateParts(this.normalizeDate(arg));
        }

        if (isDate$1(arg)) {
          return this.getDateParts(arg);
        }

        if (isObject$1(arg)) {
          return arg;
        }

        return null;
      }
    }, {
      key: "getMonthDates",
      value: function getMonthDates() {
        var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
        var dates = [];

        for (var i = 0; i < 12; i++) {
          dates.push(new Date(year, i, 15));
        }

        return dates;
      }
    }, {
      key: "getMonthNames",
      value: function getMonthNames(length) {
        var dtf = new Intl.DateTimeFormat(this.id, {
          month: length,
          timezome: 'UTC'
        });
        return this.getMonthDates().map(function (d) {
          return dtf.format(d);
        });
      }
    }, {
      key: "getWeekdayDates",
      value: function getWeekdayDates() {
        var firstDayOfWeek = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.firstDayOfWeek;
        var dates = [];
        var year = 2020;
        var month = 1;
        var day = 5 + firstDayOfWeek - 1;

        for (var i = 0; i < daysInWeek; i++) {
          dates.push(this.getDateFromParts({
            year: year,
            month: month,
            day: day + i,
            hours: 12
          }));
        }

        return dates;
      }
    }, {
      key: "getDayNames",
      value: function getDayNames(length) {
        var dtf = new Intl.DateTimeFormat(this.id, {
          weekday: length,
          timeZone: this.timezone
        });
        return this.getWeekdayDates(1).map(function (d) {
          return dtf.format(d);
        });
      } // Days/month/year components for a given month and year

    }, {
      key: "getMonthComps",
      value: function getMonthComps(month, year) {
        var key = "".concat(month, "-").concat(year);
        var comps = this.monthData[key];

        if (!comps) {
          var inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
          var firstDayOfMonth = new Date(year, month - 1, 1);
          var firstWeekday = firstDayOfMonth.getDay() + 1;
          var days = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
          var weekStartsOn = this.firstDayOfWeek - 1;
          var weeks = getWeeksInMonth(firstDayOfMonth, {
            weekStartsOn: weekStartsOn
          });
          var weeknumbers = [];
          var isoWeeknumbers = [];

          for (var i = 0; i < weeks; i++) {
            var date = addDays(firstDayOfMonth, i * 7);
            weeknumbers.push(getWeek(date, {
              weekStartsOn: weekStartsOn
            }));
            isoWeeknumbers.push(getISOWeek(date));
          }

          comps = {
            firstDayOfWeek: this.firstDayOfWeek,
            inLeapYear: inLeapYear,
            firstWeekday: firstWeekday,
            days: days,
            weeks: weeks,
            month: month,
            year: year,
            weeknumbers: weeknumbers,
            isoWeeknumbers: isoWeeknumbers
          };
          this.monthData[key] = comps;
        }

        return comps;
      } // Days/month/year components for today's month

    }, {
      key: "getThisMonthComps",
      value: function getThisMonthComps() {
        var _this$getDateParts = this.getDateParts(new Date()),
            month = _this$getDateParts.month,
            year = _this$getDateParts.year;

        return this.getMonthComps(month, year);
      } // Day/month/year components for previous month

    }, {
      key: "getPrevMonthComps",
      value: function getPrevMonthComps(month, year) {
        if (month === 1) return this.getMonthComps(12, year - 1);
        return this.getMonthComps(month - 1, year);
      } // Day/month/year components for next month

    }, {
      key: "getNextMonthComps",
      value: function getNextMonthComps(month, year) {
        if (month === 12) return this.getMonthComps(1, year + 1);
        return this.getMonthComps(month + 1, year);
      }
    }, {
      key: "getDayId",
      value: function getDayId(date) {
        return this.format(date, 'YYYY-MM-DD');
      } // Builds day components for a given page

    }, {
      key: "getCalendarDays",
      value: function getCalendarDays(_ref4) {
        var _this4 = this;

        var weeks = _ref4.weeks,
            monthComps = _ref4.monthComps,
            prevMonthComps = _ref4.prevMonthComps,
            nextMonthComps = _ref4.nextMonthComps;
        var days = [];
        var firstDayOfWeek = monthComps.firstDayOfWeek,
            firstWeekday = monthComps.firstWeekday,
            isoWeeknumbers = monthComps.isoWeeknumbers,
            weeknumbers = monthComps.weeknumbers;
        var prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
        var prevMonth = true;
        var thisMonth = false;
        var nextMonth = false; // Formatter for aria labels

        var formatter = new Intl.DateTimeFormat(this.id, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }); // Init counters with previous month's data

        var day = prevMonthComps.days - prevMonthDaysToShow + 1;
        var dayFromEnd = prevMonthComps.days - day + 1;
        var weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
        var weekdayOrdinalFromEnd = 1;
        var week = prevMonthComps.weeks;
        var weekFromEnd = 1;
        var month = prevMonthComps.month;
        var year = prevMonthComps.year; // Store todays comps

        var today = new Date();
        var todayDay = today.getDate();
        var todayMonth = today.getMonth() + 1;
        var todayYear = today.getFullYear();

        var dft = function dft(y, m, d) {
          return function (hours, minutes, seconds, milliseconds) {
            return _this4.normalizeDate({
              year: y,
              month: m,
              day: d,
              hours: hours,
              minutes: minutes,
              seconds: seconds,
              milliseconds: milliseconds
            });
          };
        }; // Cycle through 6 weeks (max in month)


        for (var w = 1; w <= weeks; w++) {
          // Cycle through days in week
          for (var i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
            // We need to know when to start counting actual month days
            if (prevMonth && weekday === firstWeekday) {
              // Reset counters for current month
              day = 1;
              dayFromEnd = monthComps.days;
              weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
              weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
              week = 1;
              weekFromEnd = monthComps.weeks;
              month = monthComps.month;
              year = monthComps.year; // ...and flag we're tracking actual month days

              prevMonth = false;
              thisMonth = true;
            } // Append day info for the current week
            // Note: this might or might not be an actual month day
            //  We don't know how the UI wants to display various days,
            //  so we'll supply all the data we can


            var dateFromTime = dft(year, month, day);
            var range = {
              start: dateFromTime(0, 0, 0),
              end: dateFromTime(23, 59, 59, 999)
            };
            var date = range.start;
            var id = "".concat(pad(year, 4), "-").concat(pad(month, 2), "-").concat(pad(day, 2));
            var weekdayPosition = i;
            var weekdayPositionFromEnd = daysInWeek - i;
            var weeknumber = weeknumbers[w - 1];
            var isoWeeknumber = isoWeeknumbers[w - 1];
            var isToday = day === todayDay && month === todayMonth && year === todayYear;
            var isFirstDay = thisMonth && day === 1;
            var isLastDay = thisMonth && day === monthComps.days;
            var onTop = w === 1;
            var onBottom = w === weeks;
            var onLeft = i === 1;
            var onRight = i === daysInWeek;
            days.push({
              id: id,
              label: day.toString(),
              ariaLabel: formatter.format(new Date(year, month - 1, day)),
              day: day,
              dayFromEnd: dayFromEnd,
              weekday: weekday,
              weekdayPosition: weekdayPosition,
              weekdayPositionFromEnd: weekdayPositionFromEnd,
              weekdayOrdinal: weekdayOrdinal,
              weekdayOrdinalFromEnd: weekdayOrdinalFromEnd,
              week: week,
              weekFromEnd: weekFromEnd,
              weeknumber: weeknumber,
              isoWeeknumber: isoWeeknumber,
              month: month,
              year: year,
              dateFromTime: dateFromTime,
              date: date,
              range: range,
              isToday: isToday,
              isFirstDay: isFirstDay,
              isLastDay: isLastDay,
              inMonth: thisMonth,
              inPrevMonth: prevMonth,
              inNextMonth: nextMonth,
              onTop: onTop,
              onBottom: onBottom,
              onLeft: onLeft,
              onRight: onRight,
              classes: ["id-".concat(id), "day-".concat(day), "day-from-end-".concat(dayFromEnd), "weekday-".concat(weekday), "weekday-position-".concat(weekdayPosition), "weekday-ordinal-".concat(weekdayOrdinal), "weekday-ordinal-from-end-".concat(weekdayOrdinalFromEnd), "week-".concat(week), "week-from-end-".concat(weekFromEnd), {
                'is-today': isToday,
                'is-first-day': isFirstDay,
                'is-last-day': isLastDay,
                'in-month': thisMonth,
                'in-prev-month': prevMonth,
                'in-next-month': nextMonth,
                'on-top': onTop,
                'on-bottom': onBottom,
                'on-left': onLeft,
                'on-right': onRight
              }]
            }); // See if we've hit the last day of the month

            if (thisMonth && isLastDay) {
              thisMonth = false;
              nextMonth = true; // Reset counters to next month's data

              day = 1;
              dayFromEnd = nextMonthComps.days;
              weekdayOrdinal = 1;
              weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
              week = 1;
              weekFromEnd = nextMonthComps.weeks;
              month = nextMonthComps.month;
              year = nextMonthComps.year; // Still in the middle of the month (hasn't ended yet)
            } else {
              day++;
              dayFromEnd--;
              weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
              weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
            }
          } // Append week days


          week++;
          weekFromEnd--;
        }

        return days;
      }
    }]);

    return Locale;
  }();

  var Attribute = /*#__PURE__*/function () {
    function Attribute(_ref, theme, locale) {
      var key = _ref.key,
          hashcode = _ref.hashcode,
          highlight = _ref.highlight,
          content = _ref.content,
          dot = _ref.dot,
          bar = _ref.bar,
          popover = _ref.popover,
          dates = _ref.dates,
          excludeDates = _ref.excludeDates,
          excludeMode = _ref.excludeMode,
          customData = _ref.customData,
          order = _ref.order,
          pinPage = _ref.pinPage;

      _classCallCheck(this, Attribute);

      this.key = isUndefined_1(key) ? createGuid() : key;
      this.hashcode = hashcode;
      this.customData = customData;
      this.order = order || 0;
      this.dateOpts = {
        order: order,
        locale: locale
      };
      this.pinPage = pinPage; // Normalize attribute types

      if (highlight) {
        this.highlight = theme.normalizeHighlight(highlight);
      }

      if (content) {
        this.content = theme.normalizeContent(content);
      }

      if (dot) {
        this.dot = theme.normalizeDot(dot);
      }

      if (bar) {
        this.bar = theme.normalizeBar(bar);
      }

      if (popover) {
        this.popover = popover;
      } // Assign dates


      this.dates = locale.normalizeDates(dates, this.dateOpts);
      this.hasDates = !!arrayHasItems(this.dates); // Assign exclude dates

      this.excludeDates = locale.normalizeDates(excludeDates, this.dateOpts);
      this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
      this.excludeMode = excludeMode || 'intersects'; // Add infinite date range if excluded dates exist

      if (this.hasExcludeDates && !this.hasDates) {
        this.dates.push(new DateInfo({}, this.dateOpts));
        this.hasDates = true;
      }

      this.isComplex = some$1(this.dates, function (d) {
        return d.isComplex;
      });
    } // Accepts: Date or date range object
    // Returns: First date that partially intersects the given date


    _createClass(Attribute, [{
      key: "intersectsDate",
      value: function intersectsDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find(function (d) {
          return d.intersectsDate(date);
        }) || false);
      } // Accepts: Date or date range object
      // Returns: First date that completely includes the given date

    }, {
      key: "includesDate",
      value: function includesDate(date) {
        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return !this.excludesDate(date) && (this.dates.find(function (d) {
          return d.includesDate(date);
        }) || false);
      }
    }, {
      key: "excludesDate",
      value: function excludesDate(date) {
        var _this = this;

        date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
        return this.hasExcludeDates && this.excludeDates.find(function (ed) {
          return _this.excludeMode === 'intersects' && ed.intersectsDate(date) || _this.excludeMode === 'includes' && ed.includesDate(date);
        });
      } // Accepts: Day object
      // Returns: First attribute date info that occurs on given day.

    }, {
      key: "intersectsDay",
      value: function intersectsDay(day) {
        return !this.excludesDay(day) && (this.dates.find(function (d) {
          return d.intersectsDay(day);
        }) || false);
      }
    }, {
      key: "excludesDay",
      value: function excludesDay(day) {
        return this.hasExcludeDates && this.excludeDates.find(function (ed) {
          return ed.intersectsDay(day);
        });
      }
    }]);

    return Attribute;
  }();

  var maxSwipeTime = 300;
  var minHorizontalSwipeDistance = 60;
  var maxVerticalSwipeDistance = 80;
  var touch = {
  	maxSwipeTime: maxSwipeTime,
  	minHorizontalSwipeDistance: minHorizontalSwipeDistance,
  	maxVerticalSwipeDistance: maxVerticalSwipeDistance
  };

  var title = "MMMM YYYY";
  var weekdays = "W";
  var navMonths = "MMM";
  var input = [
  	"L",
  	"YYYY-MM-DD",
  	"YYYY/MM/DD"
  ];
  var inputDateTime = [
  	"L h:mm A",
  	"YYYY-MM-DD h:mm A",
  	"YYYY/MM/DD h:mm A"
  ];
  var inputDateTime24hr = [
  	"L HH:mm",
  	"YYYY-MM-DD HH:mm",
  	"YYYY/MM/DD HH:mm"
  ];
  var inputTime = [
  	"h:mm A"
  ];
  var inputTime24hr = [
  	"HH:mm"
  ];
  var dayPopover = "WWW, MMM D, YYYY";
  var data = [
  	"L",
  	"YYYY-MM-DD",
  	"YYYY/MM/DD"
  ];
  var model = "iso";
  var iso = "YYYY-MM-DDTHH:mm:ssXXX";
  var masks = {
  	title: title,
  	weekdays: weekdays,
  	navMonths: navMonths,
  	input: input,
  	inputDateTime: inputDateTime,
  	inputDateTime24hr: inputDateTime24hr,
  	inputTime: inputTime,
  	inputTime24hr: inputTime24hr,
  	dayPopover: dayPopover,
  	data: data,
  	model: model,
  	iso: iso
  };

  var sm = "640px";
  var md = "768px";
  var lg = "1024px";
  var xl = "1280px";
  var screens = {
  	sm: sm,
  	md: md,
  	lg: lg,
  	xl: xl
  };

  const defaultConfig = {
      componentPrefix: 'v',
      color: 'blue',
      isDark: false,
      navVisibility: 'click',
      titlePosition: 'center',
      transition: 'slide-h',
      touch,
      masks,
      screens,
      locales,
      datePicker: {
          updateOnInput: true,
          inputDebounce: 1000,
          popover: {
              visibility: 'hover-focus',
              placement: 'bottom-start',
              keepVisibleOnInput: false,
              isInteractive: true,
          },
      },
  };
  const state = vue.reactive(defaultConfig);
  const computedLocales = vue.computed(() => {
      return mapValues_1(state.locales, (v) => {
          v.masks = defaultsDeep_1(v.masks, state.masks);
          return v;
      });
  });
  const getDefault = (path) => {
      if (window && has$1(window.__vcalendar__, path)) {
          return get_1(window.__vcalendar__, path);
      }
      return get_1(state, path);
  };

  var rootMixin = {
    props: {
      color: {
        type: String,
        default: getDefault('color')
      },
      isDark: {
        type: Boolean,
        default: getDefault('isDark')
      },
      firstDayOfWeek: Number,
      masks: Object,
      locale: [String, Object],
      timezone: String,
      minDate: null,
      maxDate: null,
      minDateExact: null,
      maxDateExact: null,
      disabledDates: null,
      availableDates: null,
      theme: null
    },
    computed: {
      $theme: function $theme() {
        // Return the theme prop if it is an instance of the Theme class
        if (this.theme instanceof Theme) return this.theme; // Create the theme

        return new Theme({
          color: this.color,
          isDark: this.isDark
        });
      },
      $locale: function $locale() {
        // Return the locale prop if it is an instance of the Locale class
        if (this.locale instanceof Locale) return this.locale; // Build up a base config from component props

        var config = isObject$1(this.locale) ? this.locale : {
          id: this.locale,
          firstDayOfWeek: this.firstDayOfWeek,
          masks: this.masks
        }; // Return new locale

        return new Locale(config, {
          locales: computedLocales.value,
          timezone: this.timezone
        });
      },
      disabledDates_: function disabledDates_() {
        var dates = this.normalizeDates(this.disabledDates);
        var minDate = this.minDate,
            minDateExact = this.minDateExact,
            maxDate = this.maxDate,
            maxDateExact = this.maxDateExact; // Add disabled range for min date

        if (minDateExact || minDate) {
          var end = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, {
            time: '00:00:00'
          });
          dates.push({
            start: null,
            end: new Date(end.getTime() - 1000)
          });
        } // Add disabled range for min date


        if (maxDateExact || maxDate) {
          var start = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, {
            time: '23:59:59'
          });
          dates.push({
            start: new Date(start.getTime() + 1000),
            end: null
          });
        }

        return dates;
      },
      availableDates_: function availableDates_() {
        return this.normalizeDates(this.availableDates);
      },
      disabledAttribute: function disabledAttribute() {
        return new Attribute({
          key: 'disabled',
          dates: this.disabledDates_,
          excludeDates: this.availableDates_,
          excludeMode: 'includes',
          order: 100
        }, this.$theme, this.$locale);
      }
    },
    // created() {
    //   setupScreens(this.$defaults.screens);
    // },
    methods: {
      formatDate: function formatDate(date, mask) {
        return this.$locale ? this.$locale.format(date, mask) : '';
      },
      parseDate: function parseDate(text, mask) {
        if (!this.$locale) return null;
        var value = this.$locale.parse(text, mask);
        return isDate$1(value) ? value : null;
      },
      normalizeDate: function normalizeDate(date, config) {
        return this.$locale ? this.$locale.normalizeDate(date, config) : date;
      },
      normalizeDates: function normalizeDates(dates) {
        return this.$locale.normalizeDates(dates, {
          isFullDay: true
        });
      },
      pageForDate: function pageForDate(date) {
        return this.$locale.getDateParts(this.normalizeDate(date));
      },
      pageForThisMonth: function pageForThisMonth() {
        return this.pageForDate(new Date());
      }
    }
  };

  var slotMixin = {
    methods: {
      safeSlot: function safeSlot(name, args) {
        var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return isFunction_1(this.$slots[name]) ? this.$slots[name](args) : def;
      }
    }
  };

  var childMixin$1 = childMixin;
  var slotMixin$1 = slotMixin;

  function showPopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('show-popover', {
        detail: opts
      }));
    }
  }
  function hidePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('hide-popover', {
        detail: opts
      }));
    }
  }
  function togglePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('toggle-popover', {
        detail: opts
      }));
    }
  }
  function updatePopover(opts) {
    if (document) {
      document.dispatchEvent(new CustomEvent('update-popover', {
        detail: opts
      }));
    }
  }
  function getPopoverTriggerEvents(opts) {
    var _ref;

    var visibility = opts.visibility;
    var click = visibility === 'click';
    var hover = visibility === 'hover';
    var hoverFocus = visibility === 'hover-focus';
    var focus = visibility === 'focus';
    opts.autoHide = !click;
    var hovered = false;
    var focused = false;
    var isRenderFn = opts.isRenderFn;
    var events = {
      click: isRenderFn ? 'onClick' : 'click',
      mousemove: isRenderFn ? 'onMousemove' : 'mousemove',
      mouseleave: isRenderFn ? 'onMouseleave' : 'mouseleave',
      focusin: isRenderFn ? 'onFocusin' : 'focusin',
      focusout: isRenderFn ? 'onFocusout' : 'focusout'
    };
    return _ref = {}, _defineProperty(_ref, events.click, function (e) {
      if (click) {
        opts.ref = e.target;
        togglePopover(opts);
        e.stopPropagation();
      }
    }), _defineProperty(_ref, events.mousemove, function (e) {
      opts.ref = e.currentTarget;

      if (!hovered) {
        hovered = true;

        if (hover || hoverFocus) {
          showPopover(opts);
        }
      }
    }), _defineProperty(_ref, events.mouseleave, function (e) {
      opts.ref = e.target;

      if (hovered) {
        hovered = false;

        if (hover || hoverFocus && !focused) {
          hidePopover(opts);
        }
      }
    }), _defineProperty(_ref, events.focusin, function (e) {
      opts.ref = e.currentTarget;

      if (!focused) {
        focused = true;

        if (focus || hoverFocus) {
          showPopover(opts);
        }
      }
    }), _defineProperty(_ref, events.focusout, function (e) {
      opts.ref = e.currentTarget;

      if (focused && !elementContains(opts.ref, e.relatedTarget)) {
        focused = false;

        if (focus || hoverFocus && !hovered) {
          hidePopover(opts);
        }
      }
    }), _ref;
  }

  var script = {
    name: 'CalendarDay',
    emits: ['dayclick', 'daymouseenter', 'daymouseleave', 'dayfocusin', 'dayfocusout', 'daykeydown'],
    mixins: [childMixin$1, slotMixin$1],
    inheritAttrs: false,
    render: function render() {
      var _this = this;

      // Backgrounds layer
      var backgroundsLayer = function backgroundsLayer() {
        return _this.hasBackgrounds && vue.h('div', {
          class: 'vc-highlights vc-day-layer'
        }, _this.backgrounds.map(function (_ref) {
          var key = _ref.key,
              wrapperClass = _ref.wrapperClass,
              bgClass = _ref.class,
              style = _ref.style;
          return vue.h('div', {
            key: key,
            class: wrapperClass
          }, [vue.h('div', {
            class: bgClass,
            style: style
          })]);
        }));
      }; // Content layer


      var contentLayer = function contentLayer() {
        return _this.safeSlot('day-content', {
          day: _this.day,
          attributes: _this.day.attributes,
          attributesMap: _this.day.attributesMap,
          dayProps: _this.dayContentProps,
          dayEvents: _this.dayContentEvents
        }) || vue.h('span', _objectSpread2(_objectSpread2(_objectSpread2({}, _this.dayContentProps), {}, {
          class: _this.dayContentClass,
          style: _this.dayContentStyle
        }, _this.dayContentEvents), {}, {
          ref: 'content'
        }), [_this.day.label]);
      }; // Dots layer


      var dotsLayer = function dotsLayer() {
        return _this.hasDots && vue.h('div', {
          class: 'vc-day-layer vc-day-box-center-bottom'
        }, [vue.h('div', {
          class: 'vc-dots'
        }, _this.dots.map(function (_ref2) {
          var key = _ref2.key,
              bgClass = _ref2.class,
              style = _ref2.style;
          return vue.h('span', {
            key: key,
            class: bgClass,
            style: style
          });
        }))]);
      }; // Bars layer


      var barsLayer = function barsLayer() {
        return _this.hasBars && vue.h('div', {
          class: 'vc-day-layer vc-day-box-center-bottom'
        }, [vue.h('div', {
          class: 'vc-bars'
        }, _this.bars.map(function (_ref3) {
          var key = _ref3.key,
              bgClass = _ref3.class,
              style = _ref3.style;
          return vue.h('span', {
            key: key,
            class: bgClass,
            style: style
          });
        }))]);
      }; // Root layer


      return vue.h('div', {
        class: ['vc-day'].concat(_toConsumableArray(this.day.classes), [{
          'vc-day-box-center-center': !this.$slots['day-content']
        }, {
          'is-not-in-month': !this.inMonth
        }])
      }, [backgroundsLayer(), contentLayer(), dotsLayer(), barsLayer()]);
    },
    inject: ['sharedState'],
    props: {
      day: {
        type: Object,
        required: true
      }
    },
    data: function data() {
      return {
        glyphs: {},
        dayContentEvents: {}
      };
    },
    computed: {
      label: function label() {
        return this.day.label;
      },
      startTime: function startTime() {
        return this.day.range.start.getTime();
      },
      endTime: function endTime() {
        return this.day.range.end.getTime();
      },
      inMonth: function inMonth() {
        return this.day.inMonth;
      },
      isDisabled: function isDisabled() {
        return this.day.isDisabled;
      },
      backgrounds: function backgrounds() {
        return this.glyphs.backgrounds;
      },
      hasBackgrounds: function hasBackgrounds() {
        return !!arrayHasItems(this.backgrounds);
      },
      content: function content() {
        return this.glyphs.content;
      },
      dots: function dots() {
        return this.glyphs.dots;
      },
      hasDots: function hasDots() {
        return !!arrayHasItems(this.dots);
      },
      bars: function bars() {
        return this.glyphs.bars;
      },
      hasBars: function hasBars() {
        return !!arrayHasItems(this.bars);
      },
      popovers: function popovers() {
        return this.glyphs.popovers;
      },
      hasPopovers: function hasPopovers() {
        return !!arrayHasItems(this.popovers);
      },
      dayContentClass: function dayContentClass() {
        return ['vc-day-content vc-focusable', {
          'is-disabled': this.isDisabled
        }, get_1(last_1(this.content), 'class') || ''];
      },
      dayContentStyle: function dayContentStyle() {
        return get_1(last_1(this.content), 'style');
      },
      dayContentProps: function dayContentProps() {
        var tabindex;

        if (this.day.isFocusable) {
          tabindex = '0';
        } else if (this.day.inMonth) {
          tabindex = '-1';
        }

        return {
          tabindex: tabindex,
          'aria-label': this.day.ariaLabel,
          'aria-disabled': this.day.isDisabled ? 'true' : 'false',
          role: 'button'
        };
      },
      dayEvent: function dayEvent() {
        return _objectSpread2(_objectSpread2({}, this.day), {}, {
          el: this.$refs.content,
          popovers: this.popovers
        });
      }
    },
    watch: {
      theme: function theme() {
        this.refresh();
      },
      popovers: function popovers() {
        this.refreshPopovers();
      },
      'day.shouldRefresh': function dayShouldRefresh() {
        this.refresh();
      }
    },
    mounted: function mounted() {
      this.refreshPopovers();
      this.refresh();
    },
    methods: {
      getDayEvent: function getDayEvent(origEvent) {
        return _objectSpread2(_objectSpread2({}, this.dayEvent), {}, {
          event: origEvent
        });
      },
      click: function click(e) {
        this.$emit('dayclick', this.getDayEvent(e));
      },
      mouseenter: function mouseenter(e) {
        this.$emit('daymouseenter', this.getDayEvent(e));
      },
      mouseleave: function mouseleave(e) {
        this.$emit('daymouseleave', this.getDayEvent(e));
      },
      focusin: function focusin(e) {
        this.$emit('dayfocusin', this.getDayEvent(e));
      },
      focusout: function focusout(e) {
        this.$emit('dayfocusout', this.getDayEvent(e));
      },
      keydown: function keydown(e) {
        this.$emit('daykeydown', this.getDayEvent(e));
      },
      refresh: function refresh() {
        var _this2 = this;

        if (!this.day.shouldRefresh) return;
        /* eslint-disable vue/no-mutating-props */

        this.day.shouldRefresh = false;
        var glyphs = {
          backgrounds: [],
          dots: [],
          bars: [],
          popovers: [],
          content: []
        };
        this.day.attributes = Object.values(this.day.attributesMap || {}).sort(function (a, b) {
          return a.order - b.order;
        });
        this.day.attributes.forEach(function (attr) {
          // Add glyphs for each attribute
          var targetDate = attr.targetDate;
          var isDate = targetDate.isDate,
              isComplex = targetDate.isComplex,
              startTime = targetDate.startTime,
              endTime = targetDate.endTime;
          var onStart = _this2.startTime <= startTime;
          var onEnd = _this2.endTime >= endTime;
          var onStartAndEnd = onStart && onEnd;
          var onStartOrEnd = onStart || onEnd;
          var dateInfo = {
            isDate: isDate,
            isComplex: isComplex,
            onStart: onStart,
            onEnd: onEnd,
            onStartAndEnd: onStartAndEnd,
            onStartOrEnd: onStartOrEnd
          };

          _this2.processHighlight(attr, dateInfo, glyphs);

          _this2.processNonHighlight(attr, 'content', dateInfo, glyphs.content);

          _this2.processNonHighlight(attr, 'dot', dateInfo, glyphs.dots);

          _this2.processNonHighlight(attr, 'bar', dateInfo, glyphs.bars);

          _this2.processPopover(attr, glyphs);
        });
        this.glyphs = glyphs;
      },
      processHighlight: function processHighlight(_ref4, _ref5, _ref6) {
        var key = _ref4.key,
            highlight = _ref4.highlight;
        var isDate = _ref5.isDate,
            isComplex = _ref5.isComplex,
            onStart = _ref5.onStart,
            onEnd = _ref5.onEnd,
            onStartAndEnd = _ref5.onStartAndEnd;
        var backgrounds = _ref6.backgrounds,
            content = _ref6.content;
        if (!highlight) return;
        var base = highlight.base,
            start = highlight.start,
            end = highlight.end;

        if (isDate || isComplex) {
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onStartAndEnd) {
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onStart) {
          backgrounds.push({
            key: "".concat(key, "-base"),
            wrapperClass: 'vc-day-layer vc-day-box-right-center',
            class: ['vc-highlight vc-highlight-base-start', base.class],
            style: base.style
          });
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', start.class],
            style: start.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: start.contentClass,
            style: start.contentStyle
          });
        } else if (onEnd) {
          backgrounds.push({
            key: "".concat(key, "-base"),
            wrapperClass: 'vc-day-layer vc-day-box-left-center',
            class: ['vc-highlight vc-highlight-base-end', base.class],
            style: base.style
          });
          backgrounds.push({
            key: key,
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight', end.class],
            style: end.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: end.contentClass,
            style: end.contentStyle
          });
        } else {
          backgrounds.push({
            key: "".concat(key, "-middle"),
            wrapperClass: 'vc-day-layer vc-day-box-center-center',
            class: ['vc-highlight vc-highlight-base-middle', base.class],
            style: base.style
          });
          content.push({
            key: "".concat(key, "-content"),
            class: base.contentClass,
            style: base.contentStyle
          });
        }
      },
      processNonHighlight: function processNonHighlight(attr, itemKey, _ref7, list) {
        var isDate = _ref7.isDate,
            onStart = _ref7.onStart,
            onEnd = _ref7.onEnd;
        if (!attr[itemKey]) return;
        var key = attr.key;
        var className = "vc-".concat(itemKey);
        var _attr$itemKey = attr[itemKey],
            base = _attr$itemKey.base,
            start = _attr$itemKey.start,
            end = _attr$itemKey.end;

        if (isDate || onStart) {
          list.push({
            key: key,
            class: [className, start.class],
            style: start.style
          });
        } else if (onEnd) {
          list.push({
            key: key,
            class: [className, end.class],
            style: end.style
          });
        } else {
          list.push({
            key: key,
            class: [className, base.class],
            style: base.style
          });
        }
      },
      processPopover: function processPopover(attribute, _ref8) {
        var popovers = _ref8.popovers;
        var key = attribute.key,
            customData = attribute.customData,
            popover = attribute.popover;
        if (!popover) return;
        var resolvedPopover = defaults_1({
          key: key,
          customData: customData,
          attribute: attribute
        }, _objectSpread2({}, popover), {
          visibility: popover.label ? 'hover' : 'click',
          placement: 'bottom',
          isInteractive: !popover.label
        });
        popovers.splice(0, 0, resolvedPopover);
      },
      refreshPopovers: function refreshPopovers() {
        var popoverEvents = {};

        if (arrayHasItems(this.popovers)) {
          popoverEvents = getPopoverTriggerEvents(defaults_1.apply(void 0, [{
            id: this.dayPopoverId,
            data: this.day,
            isRenderFn: true
          }].concat(_toConsumableArray(this.popovers))));
        }

        this.dayContentEvents = mergeEvents({
          onClick: this.click,
          onMouseenter: this.mouseenter,
          onMouseleave: this.mouseleave,
          onFocusin: this.focusin,
          onFocusout: this.focusout,
          onKeydown: this.keydown
        }, popoverEvents);
        updatePopover({
          id: this.dayPopoverId,
          data: this.day
        });
      }
    }
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vc-day {\n  position: relative;\n  min-height: 32px;\n  z-index: 1;\n}\n  .vc-day.is-not-in-month * {\n    opacity: 0;\n    pointer-events: none;\n  }\n  .vc-day-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n  .vc-day-box-center-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n  .vc-day-box-left-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n  .vc-day-box-right-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n  .vc-day-box-center-bottom {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n  .vc-day-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: var(--rounded-full);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n  .vc-day-content:hover {\n    background-color: hsla(211, 25%, 84%, 0.3);\n  }\n  .vc-day-content:focus {\n    font-weight: var(--font-bold);\n    background-color: hsla(211, 25%, 84%, 0.4);\n  }\n  .vc-day-content.is-disabled {\n    color: var(--gray-400);\n  }\n  .vc-is-dark .vc-day-content:hover {\n      background-color: hsla(216, 15%, 52%, 0.3);\n    }\n  .vc-is-dark .vc-day-content:focus {\n      background-color: hsla(216, 15%, 52%, 0.4);\n    }\n  .vc-is-dark .vc-day-content.is-disabled {\n      color: var(--gray-600);\n    }\n  .vc-highlights {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n  .vc-highlight {\n  width: 28px;\n  height: 28px;\n}\n  .vc-highlight.vc-highlight-base-start {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-right-width: 0 !important;\n  }\n  .vc-highlight.vc-highlight-base-end {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n  }\n  .vc-highlight.vc-highlight-base-middle {\n    width: 100%;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n    border-right-width: 0 !important;\n    margin: 0 -1px;\n  }\n  .vc-dots {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n  .vc-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  transition: all var(--day-content-transition-time);\n}\n  .vc-dot:not(:last-child) {\n    margin-right: 3px;\n  }\n  .vc-bars {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 75%;\n}\n  .vc-bar {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 3px;\n  transition: all var(--day-content-transition-time);\n}\n";
  styleInject(css_248z);

  var script$1 = {
    name: 'CalendarPane',
    emits: ['update:page', 'weeknumberclick'],
    mixins: [childMixin$1, slotMixin$1],
    inheritAttrs: false,
    render: function render() {
      var _this = this;

      // Header
      var header = this.safeSlot('header', this.page) || // Default header
      vue.h('div', {
        class: "vc-header align-".concat(this.titlePosition)
      }, [// Header title
      vue.h('div', _objectSpread2({
        class: 'vc-title'
      }, this.navPopoverEvents), [this.safeSlot('header-title', this.page, this.page.title)])]); // Weekday cells

      var weekdayCells = this.weekdayLabels.map(function (wl, i) {
        return vue.h('div', {
          key: i + 1,
          class: 'vc-weekday'
        }, [wl]);
      });
      var showWeeknumbersLeft = this.showWeeknumbers_.startsWith('left');
      var showWeeknumbersRight = this.showWeeknumbers_.startsWith('right');

      if (showWeeknumbersLeft) {
        weekdayCells.unshift(vue.h('div', {
          class: 'vc-weekday'
        }));
      } else if (showWeeknumbersRight) {
        weekdayCells.push(vue.h('div', {
          class: 'vc-weekday'
        }));
      } // Weeknumber cell


      var getWeeknumberCell = function getWeeknumberCell(weeknumber) {
        return vue.h('div', {
          class: ['vc-weeknumber']
        }, [vue.h('span', {
          class: ['vc-weeknumber-content', "is-".concat(_this.showWeeknumbers_)],
          onClick: function onClick(event) {
            _this.$emit('weeknumberclick', {
              weeknumber: weeknumber,
              days: _this.page.days.filter(function (d) {
                return d[_this.weeknumberKey] === weeknumber;
              }),
              event: event
            });
          }
        }, [weeknumber])]);
      }; // Day cells


      var dayCells = [];
      var daysInWeek = this.locale.daysInWeek;
      this.page.days.forEach(function (day, i) {
        var mod = i % daysInWeek; // Inset weeknumber cell on left side if needed

        if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek) {
          dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
        }

        dayCells.push(vue.h(script, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          day: day
        }), _this.$slots)); // Insert weeknumber cell on right side if needed

        if (showWeeknumbersRight && mod === daysInWeek - 1) {
          dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
        }
      }); // Weeks

      var weeks = vue.h('div', {
        class: {
          'vc-weeks': true,
          'vc-show-weeknumbers': this.showWeeknumbers_,
          'is-left': showWeeknumbersLeft,
          'is-right': showWeeknumbersRight
        }
      }, [weekdayCells, dayCells]);
      return vue.h('div', {
        class: ['vc-pane', "row-from-end-".concat(this.rowFromEnd), "column-from-end-".concat(this.columnFromEnd)],
        ref: 'pane'
      }, [header, weeks]);
    },
    props: {
      page: Object,
      position: Number,
      row: Number,
      rowFromEnd: Number,
      column: Number,
      columnFromEnd: Number,
      titlePosition: String,
      navVisibility: {
        type: String,
        default: getDefault('navVisibility')
      },
      showWeeknumbers: [Boolean, String],
      showIsoWeeknumbers: [Boolean, String]
    },
    computed: {
      weeknumberKey: function weeknumberKey() {
        return this.showWeeknumbers ? 'weeknumber' : 'isoWeeknumber';
      },
      showWeeknumbers_: function showWeeknumbers_() {
        var showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
        if (showWeeknumbers == null) return '';

        if (isBoolean_1(showWeeknumbers)) {
          return showWeeknumbers ? 'left' : '';
        }

        if (showWeeknumbers.startsWith('right')) {
          return this.columnFromEnd > 1 ? 'right' : showWeeknumbers;
        }

        return this.column > 1 ? 'left' : showWeeknumbers;
      },
      navPlacement: function navPlacement() {
        switch (this.titlePosition) {
          case 'left':
            return 'bottom-start';

          case 'right':
            return 'bottom-end';

          default:
            return 'bottom';
        }
      },
      navPopoverEvents: function navPopoverEvents() {
        var sharedState = this.sharedState,
            navVisibility = this.navVisibility,
            navPlacement = this.navPlacement,
            page = this.page,
            position = this.position;
        return getPopoverTriggerEvents({
          id: sharedState.navPopoverId,
          visibility: navVisibility,
          placement: navPlacement,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: ['bottom']
            }
          }],
          data: {
            page: page,
            position: position
          },
          isInteractive: true,
          isRenderFn: true
        });
      },
      weekdayLabels: function weekdayLabels() {
        var _this2 = this;

        return this.locale.getWeekdayDates().map(function (d) {
          return _this2.format(d, _this2.masks.weekdays);
        });
      }
    }
  };

  var css_248z$1 = ".vc-pane {\n  min-width: 250px;\n}\n\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.vc-title:hover {\n    opacity: 0.75;\n  }\n\n.vc-weeknumber {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.vc-weeknumber-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  font-style: italic;\n  width: 28px;\n  height: 28px;\n  margin-top: 2px;\n  color: var(--gray-500);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vc-weeknumber-content.is-left-outside {\n    position: absolute;\n    left: var(--weeknumber-offset);\n  }\n\n.vc-weeknumber-content.is-right-outside {\n    position: absolute;\n    right: var(--weeknumber-offset);\n  }\n\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  /* overflow: auto; */\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n  min-width: 250px;\n}\n\n.vc-weeks.vc-show-weeknumbers {\n    grid-template-columns: auto repeat(7, 1fr);\n  }\n\n.vc-weeks.vc-show-weeknumbers.is-right {\n      grid-template-columns: repeat(7, 1fr) auto;\n    }\n\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n  }\n\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n  }\n\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n  }\n\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n  }\n";
  styleInject(css_248z$1);

  exports.default = script$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
