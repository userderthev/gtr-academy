'use strict';var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),index=require('./index-1621a98b.js'),styleInject_es=require('./style-inject.es-06def3b0.js'),SvgIcon=require('./SvgIcon.js');/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

var head_1 = head;var _yearGroupCount = 12;
var script = {
  name: 'CalendarNav',
  emits: ['input'],
  components: {
    SvgIcon: SvgIcon['default']
  },
  mixins: [index.k],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          month: 0,
          year: 0
        };
      }
    },
    validator: {
      type: Function,
      default: function _default() {
        return function () {
          return true;
        };
      }
    }
  },
  data: function data() {
    return {
      monthMode: true,
      yearIndex: 0,
      yearGroupIndex: 0,
      onSpaceOrEnter: helpers.E
    };
  },
  computed: {
    month: function month() {
      return this.value ? this.value.month || 0 : 0;
    },
    year: function year() {
      return this.value ? this.value.year || 0 : 0;
    },
    title: function title() {
      return this.monthMode ? this.yearIndex : "".concat(this.firstYear, " - ").concat(this.lastYear);
    },
    monthItems: function monthItems() {
      return this.getMonthItems(this.yearIndex);
    },
    yearItems: function yearItems() {
      return this.getYearItems(this.yearGroupIndex);
    },
    prevItemsEnabled: function prevItemsEnabled() {
      return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled;
    },
    nextItemsEnabled: function nextItemsEnabled() {
      return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled;
    },
    prevMonthItemsEnabled: function prevMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex - 1).some(function (i) {
        return !i.isDisabled;
      });
    },
    nextMonthItemsEnabled: function nextMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex + 1).some(function (i) {
        return !i.isDisabled;
      });
    },
    prevYearItemsEnabled: function prevYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex - 1).some(function (i) {
        return !i.isDisabled;
      });
    },
    nextYearItemsEnabled: function nextYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex + 1).some(function (i) {
        return !i.isDisabled;
      });
    },
    activeItems: function activeItems() {
      return this.monthMode ? this.monthItems : this.yearItems;
    },
    firstYear: function firstYear() {
      return head_1(this.yearItems.map(function (i) {
        return i.year;
      }));
    },
    lastYear: function lastYear() {
      return helpers.r(this.yearItems.map(function (i) {
        return i.year;
      }));
    }
  },
  watch: {
    year: function year() {
      this.yearIndex = this.year;
    },
    yearIndex: function yearIndex(val) {
      this.yearGroupIndex = this.getYearGroupIndex(val);
    },
    value: function value() {
      this.focusFirstItem();
    }
  },
  created: function created() {
    this.yearIndex = this.year;
  },
  mounted: function mounted() {
    this.focusFirstItem();
  },
  methods: {
    focusFirstItem: function focusFirstItem() {
      var _this = this;

      this.$nextTick(function () {
        // Set focus on the first enabled nav item
        var focusableEl = _this.$refs.navContainer.querySelector('.vc-nav-item:not(.is-disabled)');

        if (focusableEl) {
          focusableEl.focus();
        }
      });
    },
    getItemClasses: function getItemClasses(_ref) {
      var isActive = _ref.isActive,
          isCurrent = _ref.isCurrent,
          isDisabled = _ref.isDisabled;
      var classes = ['vc-nav-item'];

      if (isActive) {
        classes.push('is-active');
      } else if (isCurrent) {
        classes.push('is-current');
      }

      if (isDisabled) {
        classes.push('is-disabled');
      }

      return classes;
    },
    getYearGroupIndex: function getYearGroupIndex(year) {
      return Math.floor(year / _yearGroupCount);
    },
    getMonthItems: function getMonthItems(year) {
      var _this2 = this;

      var _this$pageForDate = this.pageForDate(new Date()),
          thisMonth = _this$pageForDate.month,
          thisYear = _this$pageForDate.year;

      return this.locale.getMonthDates().map(function (d, i) {
        var month = i + 1;
        return {
          month: month,
          year: year,
          id: "".concat(year, ".").concat(helpers.W(month, 2)),
          label: _this2.locale.format(d, _this2.masks.navMonths),
          ariaLabel: _this2.locale.format(d, 'MMMM YYYY'),
          isActive: month === _this2.month && year === _this2.year,
          isCurrent: month === thisMonth && year === thisYear,
          isDisabled: !_this2.validator({
            month: month,
            year: year
          }),
          click: function click() {
            return _this2.monthClick(month, year);
          }
        };
      });
    },
    getYearItems: function getYearItems(yearGroupIndex) {
      var _this3 = this;

      var _this$pageForDate2 = this.pageForDate(new Date()),
          _ = _this$pageForDate2._,
          thisYear = _this$pageForDate2.year;

      var startYear = yearGroupIndex * _yearGroupCount;
      var endYear = startYear + _yearGroupCount;
      var items = [];

      var _loop = function _loop(year) {
        var enabled = false;

        for (var month = 1; month < 12; month++) {
          enabled = _this3.validator({
            month: month,
            year: year
          });
          if (enabled) break;
        }

        items.push({
          year: year,
          id: year,
          label: year,
          ariaLabel: year,
          isActive: year === _this3.year,
          isCurrent: year === thisYear,
          isDisabled: !enabled,
          click: function click() {
            return _this3.yearClick(year);
          }
        });
      };

      for (var year = startYear; year < endYear; year += 1) {
        _loop(year);
      }

      return items;
    },
    monthClick: function monthClick(month, year) {
      if (this.validator({
        month: month,
        year: year
      })) {
        this.$emit('input', {
          month: month,
          year: year
        });
      }
    },
    yearClick: function yearClick(year) {
      this.yearIndex = year;
      this.monthMode = true;
      this.focusFirstItem();
    },
    toggleMode: function toggleMode() {
      this.monthMode = !this.monthMode;
    },
    movePrev: function movePrev() {
      if (!this.prevItemsEnabled) return;

      if (this.monthMode) {
        this.movePrevYear();
      }

      this.movePrevYearGroup();
    },
    moveNext: function moveNext() {
      if (!this.nextItemsEnabled) return;

      if (this.monthMode) {
        this.moveNextYear();
      }

      this.moveNextYearGroup();
    },
    movePrevYear: function movePrevYear() {
      this.yearIndex--;
    },
    moveNextYear: function moveNextYear() {
      this.yearIndex++;
    },
    movePrevYearGroup: function movePrevYearGroup() {
      this.yearGroupIndex--;
    },
    moveNextYearGroup: function moveNextYearGroup() {
      this.yearGroupIndex++;
    }
  }
};var _hoisted_1 = {
  class: "vc-nav-container",
  ref: "navContainer"
};
var _hoisted_2 = {
  class: "vc-nav-header"
};
var _hoisted_3 = {
  class: "vc-nav-items"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_icon = vue.resolveComponent("svg-icon");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [vue.createVNode("span", {
    role: "button",
    class: ["vc-nav-arrow is-left", {
      'is-disabled': !$options.prevItemsEnabled
    }],
    tabindex: $options.prevItemsEnabled ? 0 : undefined,
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.movePrev.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function (e) {
      return $data.onSpaceOrEnter(e, $options.movePrev);
    })
  }, [vue.renderSlot(_ctx.$slots, "nav-left-button", {}, function () {
    return [vue.createVNode(_component_svg_icon, {
      name: "left-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 42, ["tabindex"]), vue.createVNode("span", {
    role: "button",
    class: ["vc-nav-title vc-grid-focus", {
      'is-disabled': !$options.nextItemsEnabled
    }],
    style: {
      whiteSpace: 'nowrap'
    },
    tabindex: $options.nextItemsEnabled ? 0 : undefined,
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.toggleMode.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function (e) {
      return $data.onSpaceOrEnter(e, $options.toggleMode);
    })
  }, vue.toDisplayString($options.title), 43, ["tabindex"]), vue.createVNode("span", {
    role: "button",
    class: "vc-nav-arrow is-right",
    tabindex: "0",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.moveNext.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function (e) {
      return $data.onSpaceOrEnter(e, $options.moveNext);
    })
  }, [vue.renderSlot(_ctx.$slots, "nav-right-button", {}, function () {
    return [vue.createVNode(_component_svg_icon, {
      name: "right-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 32)]), vue.createVNode("div", _hoisted_3, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.activeItems, function (item) {
    return vue.openBlock(), vue.createBlock("span", {
      key: item.label,
      role: "button",
      "data-id": item.id,
      "aria-label": item.ariaLabel,
      class: $options.getItemClasses(item),
      tabindex: item.isDisabled ? undefined : 0,
      onClick: item.click,
      onKeydown: function onKeydown(e) {
        return $data.onSpaceOrEnter(e, item.click);
      }
    }, vue.toDisplayString(item.label), 43, ["data-id", "aria-label", "tabindex", "onClick", "onKeydown"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 512);
}var css_248z = ".vc-nav-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.vc-nav-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: var(--leading-snug);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n}\n.vc-nav-arrow.is-left {\n    margin-right: auto;\n}\n.vc-nav-arrow.is-right {\n    margin-left: auto;\n}\n.vc-nav-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.vc-nav-arrow:hover {\n    background-color: var(--gray-900);\n}\n.vc-nav-arrow:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-title {\n  color: var(--accent-100);\n  font-weight: var(--font-bold);\n  line-height: var(--leading-snug);\n  padding: 4px 8px;\n  border-radius: var(--rounded);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-nav-title:hover {\n    background-color: var(--gray-900);\n}\n.vc-nav-title:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-items {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 2px;\n  grid-column-gap: 5px;\n}\n.vc-nav-item {\n  width: 48px;\n  text-align: center;\n  line-height: var(--leading-snug);\n  font-weight: var(--font-semibold);\n  padding: 4px 0;\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-nav-item:hover {\n    color: var(--white);\n    background-color: var(--gray-900);\n    box-shadow: var(--shadow-inner);\n}\n.vc-nav-item.is-active {\n    color: var(--accent-900);\n    background: var(--accent-100);\n    font-weight: var(--font-bold);\n    box-shadow: var(--shadow);\n}\n.vc-nav-item.is-current {\n    color: var(--accent-100);\n    font-weight: var(--bold);\n    border-color: var(--accent-100);\n}\n.vc-nav-item:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-item.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n}\n.vc-is-dark .vc-nav-title {\n    color: var(--gray-900);\n}\n.vc-is-dark .vc-nav-title:hover {\n      background-color: var(--gray-200);\n}\n.vc-is-dark .vc-nav-title:focus {\n      border-color: var(--accent-400);\n}\n.vc-is-dark .vc-nav-arrow:hover {\n      background-color: var(--gray-200);\n}\n.vc-is-dark .vc-nav-arrow:focus {\n      border-color: var(--accent-400);\n}\n.vc-is-dark .vc-nav-item:hover {\n      color: var(--gray-900);\n      background-color: var(--gray-200);\n      box-shadow: none;\n}\n.vc-is-dark .vc-nav-item.is-active {\n      color: var(--white);\n      background: var(--accent-500);\n}\n.vc-is-dark .vc-nav-item.is-current {\n      color: var(--accent-600);\n      border-color: var(--accent-500);\n}\n.vc-is-dark .vc-nav-item:focus {\n      border-color: var(--accent-400);\n}\n";
styleInject_es.s(css_248z);script.render = render;exports.h=head_1;exports.s=script;