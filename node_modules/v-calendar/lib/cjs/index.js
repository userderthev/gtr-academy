'use strict';Object.defineProperty(exports,'__esModule',{value:true});var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),index=require('./index-1621a98b.js'),Calendar_vue_vue_type_style_index_0_id_0e88c5b9_lang=require('./Calendar.vue_vue&type=style&index=0&id=0e88c5b9&lang-6ae4b39f.js');require('@popperjs/core'),require('./CalendarPane.vue_vue&type=style&index=0&id=bf16a152&lang-8a8157ef.js'),require('./CalendarNav-0346c78f.js'),require('./CustomTransition.js'),require('./style-inject.es-06def3b0.js');var Popover_vue_vue_type_style_index_0_id_5059a25e_lang=require('./Popover.vue_vue&type=style&index=0&id=5059a25e&lang-1a220d5a.js'),PopoverRow=require('./PopoverRow.js');require('./SvgIcon.js'),require('./CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-7fc31eb8.js'),require('./TimeSelect.js'),require('./TimePicker.js');var DatePicker_vue_vue_type_script_lang=require('./DatePicker.vue_vue&type=script&lang-72786c17.js');/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = helpers.i(collection) ? Array(collection.length) : [];

  helpers._(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;/**
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
  var func = helpers.b(collection) ? helpers.c : _baseMap;
  return func(collection, helpers.a(iteratee));
}

var map_1 = map;var components=/*#__PURE__*/Object.freeze({__proto__:null,Calendar: Calendar_vue_vue_type_style_index_0_id_0e88c5b9_lang.s,DatePicker: DatePicker_vue_vue_type_script_lang.s,Popover: Popover_vue_vue_type_style_index_0_id_5059a25e_lang.s,PopoverRow: PopoverRow['default']});// This function gratuitously borrowed from TailwindCSS
// https://github.com/tailwindcss/tailwindcss/blob/master/src/util/buildMediaQuery.js
function buildMediaQuery(screens) {
    // Default min width
    if (index.i(screens)) {
        screens = { min: screens };
    }
    // Wrap in array
    if (!helpers.d(screens)) {
        screens = [screens];
    }
    return screens
        .map((screen) => {
        if (helpers.h(screen, 'raw')) {
            return screen.raw;
        }
        return map_1(screen, (value, feature) => {
            feature = helpers.g({
                min: 'min-width',
                max: 'max-width',
            }, feature, feature);
            return `(${feature}: ${value})`;
        }).join(' and ');
    })
        .join(', ');
}var screensPlugin = {
    install: (app, screens) => {
        screens = helpers.e(screens, window && window.__screens__, index.d);
        let shouldRefreshQueries = true;
        const state = vue.reactive({
            matches: [],
            queries: [],
        });
        const refreshMatches = () => {
            state.matches = index.t(state.queries)
                .filter((p) => p[1].matches)
                .map((p) => p[0]);
        };
        const refreshQueries = () => {
            if (!shouldRefreshQueries || !window || !window.matchMedia)
                return;
            state.queries = index.m(screens, (v) => {
                const query = window.matchMedia(buildMediaQuery(v));
                if (helpers.f(query.addEventListener)) {
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
                    return (config, def) => state.matches.reduce((prev, curr) => (helpers.h(config, curr) ? config[curr] : prev), index.a(def) ? config.default : def);
                },
            },
        });
    },
};var setup = (app, defaults) => {
    // Setup defaults
    defaults = index.s(defaults);
    // Use screens plugin
    app.use(screensPlugin, defaults.screens);
    return defaults;
};const install = (app, defaults) => {
    defaults = setup(app, defaults);
    for (const componentKey in components) {
        const component = components[componentKey];
        app.component(`${defaults.componentPrefix}${component.name}`, component);
    }
};exports.Calendar=Calendar_vue_vue_type_style_index_0_id_0e88c5b9_lang.s;exports.Popover=Popover_vue_vue_type_style_index_0_id_5059a25e_lang.s;exports.PopoverRow=PopoverRow['default'];exports.DatePicker=DatePicker_vue_vue_type_script_lang.s;exports.Screens=screensPlugin;exports.SetupCalendar=setup;exports.default=install;