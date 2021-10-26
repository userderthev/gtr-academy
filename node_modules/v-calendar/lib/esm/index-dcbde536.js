import { J as isObjectLike_1, K as _baseGetTag, b as isArray_1, L as isSymbol_1, M as isObject_1, N as _baseSet, a as _baseIteratee, O as _baseForOwn, P as _baseAssignValue, c as _arrayMap, Q as _getTag, R as _mapToArray, S as keys_1, j as _createClass, n as _objectSpread2, y as isObject, C as hasAny, T as defaults_1, B as _slicedToArray, h as has, k as _classCallCheck, f as isFunction_1, d as isArrayLikeObject_1, U as mixinOptionalProps, l as arrayHasItems, x as isDate, V as pick_1, W as pad, z as addPages, e as defaultsDeep_1, q as createGuid, X as some, g as get_1 } from './helpers-4f4a4db8.js';
import { reactive, computed } from 'vue';

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

function toDate(argument) {
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
  var date = toDate(dirtyDate);
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
var mapTag = '[object Map]',
    setTag = '[object Set]';

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
    if (tag == mapTag) {
      return _mapToArray(object);
    }
    if (tag == setTag) {
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
      } else if (isObject(config)) {
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
        } else if (isObject(targetConfig)) {
          if (hasAny(targetConfig, displayProps)) {
            root[targetType] = _objectSpread2({}, targetConfig);
          } else {
            root[targetType] = {};
          }
        } // Set the theme color if it is missing


        if (!has(root, "".concat(targetType, ".color"))) {
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
function toDate$1(argument, dirtyOptions) {
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

  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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
  var date = toDate(dirtyDate);
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

    if (!isObject(config)) {
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

      if (isObject(config)) {
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

var PATCH = {
  DATE_TIME: 1,
  DATE: 2,
  TIME: 3
};
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
  } else if (has(config, 'id')) {
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


  config = isObject(config) ? defaultsDeep_1(config, defLocale) : defLocale; // Return resolved config

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
      } else if (isObject(d)) {
        type = 'object';
        result = this.getDateFromParts(d);
      } else {
        type = 'date';
        result = isDate(d) ? new Date(d.getTime()) : null;
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
        return toDate$1(dateString, {
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
        date = toDate$1(dateString, {
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

      if (isDate(arg)) {
        return this.getDateParts(arg);
      }

      if (isObject(arg)) {
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

    this.isComplex = some(this.dates, function (d) {
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
var defaultScreens = {
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
    screens: defaultScreens,
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
const state = reactive(defaultConfig);
const computedLocales = computed(() => {
    return mapValues_1(state.locales, (v) => {
        v.masks = defaultsDeep_1(v.masks, state.masks);
        return v;
    });
});
const getDefault = (path) => {
    if (window && has(window.__vcalendar__, path)) {
        return get_1(window.__vcalendar__, path);
    }
    return get_1(state, path);
};
const setup = (userDefaults) => {
    return defaultsDeep_1(state, userDefaults);
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

      var config = isObject(this.locale) ? this.locale : {
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
      return isDate(value) ? value : null;
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
var rootMixin$1 = rootMixin;
var slotMixin$1 = slotMixin;

export { Attribute as A, PATCH as P, isUndefined_1 as a, toDate as b, toInteger as c, defaultScreens as d, rootMixin$1 as e, slotMixin$1 as f, getDefault as g, isNumber_1 as h, isString_1 as i, addDays as j, childMixin$1 as k, mapValues_1 as m, requiredArgs as r, setup as s, toPairs_1 as t };
