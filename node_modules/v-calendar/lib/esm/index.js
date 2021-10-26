import { i as isArrayLike_1, _ as _baseEach, a as _baseIteratee, b as isArray_1, c as _arrayMap, d as isArrayLikeObject_1, h as has, g as get_1, e as defaultsDeep_1, f as isFunction_1 } from './helpers-4f4a4db8.js';
import { reactive } from 'vue';
import { i as isString_1, d as defaultScreens, a as isUndefined_1, m as mapValues_1, t as toPairs_1, s as setup$1 } from './index-dcbde536.js';
import { s as script } from './Calendar.vue_vue&type=style&index=0&id=0e88c5b9&lang-50d02b25.js';
export { s as Calendar } from './Calendar.vue_vue&type=style&index=0&id=0e88c5b9&lang-50d02b25.js';
import '@popperjs/core';
import './CalendarPane.vue_vue&type=style&index=0&id=bf16a152&lang-cf3540ec.js';
import './CalendarNav-06749734.js';
import './CustomTransition.js';
import './style-inject.es-1f59c1d0.js';
import { s as script$2 } from './Popover.vue_vue&type=style&index=0&id=5059a25e&lang-859ee3d7.js';
export { s as Popover } from './Popover.vue_vue&type=style&index=0&id=5059a25e&lang-859ee3d7.js';
import script$3 from './PopoverRow.js';
export { default as PopoverRow } from './PopoverRow.js';
import './SvgIcon.js';
import './CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-704d2dff.js';
import './TimeSelect.js';
import './TimePicker.js';
import { s as script$1 } from './DatePicker.vue_vue&type=script&lang-1361c5a7.js';
export { s as DatePicker } from './DatePicker.vue_vue&type=script&lang-1361c5a7.js';

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Calendar: script,
  DatePicker: script$1,
  Popover: script$2,
  PopoverRow: script$3
});

// This function gratuitously borrowed from TailwindCSS
// https://github.com/tailwindcss/tailwindcss/blob/master/src/util/buildMediaQuery.js
function buildMediaQuery(screens) {
    // Default min width
    if (isString_1(screens)) {
        screens = { min: screens };
    }
    // Wrap in array
    if (!isArrayLikeObject_1(screens)) {
        screens = [screens];
    }
    return screens
        .map((screen) => {
        if (has(screen, 'raw')) {
            return screen.raw;
        }
        return map_1(screen, (value, feature) => {
            feature = get_1({
                min: 'min-width',
                max: 'max-width',
            }, feature, feature);
            return `(${feature}: ${value})`;
        }).join(' and ');
    })
        .join(', ');
}

var screensPlugin = {
    install: (app, screens) => {
        screens = defaultsDeep_1(screens, window && window.__screens__, defaultScreens);
        let shouldRefreshQueries = true;
        const state = reactive({
            matches: [],
            queries: [],
        });
        const refreshMatches = () => {
            state.matches = toPairs_1(state.queries)
                .filter((p) => p[1].matches)
                .map((p) => p[0]);
        };
        const refreshQueries = () => {
            if (!shouldRefreshQueries || !window || !window.matchMedia)
                return;
            state.queries = mapValues_1(screens, (v) => {
                const query = window.matchMedia(buildMediaQuery(v));
                if (isFunction_1(query.addEventListener)) {
                    query.addEventListener('change', refreshMatches);
                }
                else {
                    // Deprecated 'MediaQueryList' API, < Safari 14, < Edge 16
                    query.addListener(refreshMatches);
                }
                return query;
            });
            shouldRefreshQueries = false;
            refreshMatches();
        };
        // Global mixin that
        // 1) Refreshes queries on first component mount
        // 2) Provides '$screens' utility method that refreshes any time the screen matches update
        app.mixin({
            mounted() {
                refreshQueries();
            },
            computed: {
                $screens() {
                    return (config, def) => state.matches.reduce((prev, curr) => (has(config, curr) ? config[curr] : prev), isUndefined_1(def) ? config.default : def);
                },
            },
        });
    },
};

var setup = (app, defaults) => {
    // Setup defaults
    defaults = setup$1(defaults);
    // Use screens plugin
    app.use(screensPlugin, defaults.screens);
    return defaults;
};

const install = (app, defaults) => {
    defaults = setup(app, defaults);
    for (const componentKey in components) {
        const component = components[componentKey];
        app.component(`${defaults.componentPrefix}${component.name}`, component);
    }
};

export default install;
export { screensPlugin as Screens, setup as SetupCalendar };
