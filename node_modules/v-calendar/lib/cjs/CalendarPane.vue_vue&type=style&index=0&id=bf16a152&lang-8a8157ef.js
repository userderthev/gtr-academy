'use strict';var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),index=require('./index-1621a98b.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang=require('./CalendarDay.vue_vue&type=style&index=0&id=07b52efe&lang-7fc31eb8.js');/** `Object#toString` result references. */
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
    (helpers.J(value) && helpers.K(value) == boolTag);
}

var isBoolean_1 = isBoolean;var script = {
  name: 'CalendarPane',
  emits: ['update:page', 'weeknumberclick'],
  mixins: [index.k, index.f],
  inheritAttrs: false,
  render: function render() {
    var _this = this;

    // Header
    var header = this.safeSlot('header', this.page) || // Default header
    vue.h('div', {
      class: "vc-header align-".concat(this.titlePosition)
    }, [// Header title
    vue.h('div', helpers.n({
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

      dayCells.push(vue.h(CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.a, helpers.n(helpers.n({}, _this.$attrs), {}, {
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
      default: index.g('navVisibility')
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
      return CalendarDay_vue_vue_type_style_index_0_id_07b52efe_lang.g({
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
};var css_248z = ".vc-pane {\n  min-width: 250px;\n}\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.vc-title:hover {\n    opacity: 0.75;\n}\n.vc-weeknumber {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n.vc-weeknumber-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  font-style: italic;\n  width: 28px;\n  height: 28px;\n  margin-top: 2px;\n  color: var(--gray-500);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weeknumber-content.is-left-outside {\n    position: absolute;\n    left: var(--weeknumber-offset);\n}\n.vc-weeknumber-content.is-right-outside {\n    position: absolute;\n    right: var(--weeknumber-offset);\n}\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  /* overflow: auto; */\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n  min-width: 250px;\n}\n.vc-weeks.vc-show-weeknumbers {\n    grid-template-columns: auto repeat(7, 1fr);\n}\n.vc-weeks.vc-show-weeknumbers.is-right {\n      grid-template-columns: repeat(7, 1fr) auto;\n}\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n}\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n}\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n}\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n";
styleInject_es.s(css_248z);exports.s=script;