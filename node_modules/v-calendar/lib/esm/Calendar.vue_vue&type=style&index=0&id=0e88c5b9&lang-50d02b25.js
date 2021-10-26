import { j as _createClass, k as _classCallCheck, l as arrayHasItems, m as hash, n as _objectSpread2, f as isFunction_1, o as on, p as off, q as createGuid, r as last_1, s as pageIsEqualToPage, t as pageIsBeforePage, u as pageIsAfterPage, v as pageRangeToArray, w as pageIsBetweenPages, x as isDate, y as isObject, z as addPages, A as pageIsValid, B as _slicedToArray, C as hasAny, D as omit_1, E as onSpaceOrEnter } from './helpers-4f4a4db8.js';
import { h } from 'vue';
import { r as requiredArgs, b as toDate, c as toInteger, A as Attribute, e as rootMixin, f as slotMixin, g as getDefault, h as isNumber_1, j as addDays } from './index-dcbde536.js';
import { s as script$1 } from './CalendarPane.vue_vue&type=style&index=0&id=bf16a152&lang-cf3540ec.js';
import { s as script$3, h as head_1 } from './CalendarNav-06749734.js';
import script$4 from './CustomTransition.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import { s as script$2 } from './Popover.vue_vue&type=style&index=0&id=5059a25e&lang-859ee3d7.js';
import script$6 from './PopoverRow.js';
import script$5 from './SvgIcon.js';

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

var AttributeStore = /*#__PURE__*/function () {
  function AttributeStore(theme, locale, attrs) {
    _classCallCheck(this, AttributeStore);

    this.theme = theme;
    this.locale = locale;
    this.map = {};
    this.refresh(attrs, true);
  }

  _createClass(AttributeStore, [{
    key: "destroy",
    value: function destroy() {
      this.theme = null;
      this.locale = null;
      this.map = {};
      this.list = [];
      this.pinAttr = null;
    }
  }, {
    key: "refresh",
    value: function refresh(attrs, reset) {
      var _this = this;

      var map = {};
      var list = [];
      var pinAttr = null; // Keep record of added and deleted attributes

      var adds = [];
      var deletes = reset ? new Set() : new Set(Object.keys(this.map));

      if (arrayHasItems(attrs)) {
        attrs.forEach(function (attr, i) {
          if (!attr || !attr.dates) return;
          var key = attr.key ? attr.key.toString() : i.toString();
          var order = attr.order || 0;
          var hashcode = hash(JSON.stringify(attr));
          var exAttr = _this.map[key]; // If just tracking delta changes and attribute hash hasn't changed

          if (!reset && exAttr && exAttr.hashcode === hashcode) {
            // ...don't need to replace the attribute
            deletes.delete(key);
          } else {
            // Otherwise, create attribute and add to the list of adds
            exAttr = new Attribute(_objectSpread2({
              key: key,
              order: order,
              hashcode: hashcode
            }, attr), _this.theme, _this.locale);
            adds.push(exAttr);
          } // Keep track of attribute to pin for initial page


          if (exAttr && exAttr.pinPage) {
            pinAttr = exAttr;
          } // Add attribute to map and list


          map[key] = exAttr;
          list.push(exAttr);
        });
      }

      this.map = map;
      this.list = list;
      this.pinAttr = pinAttr;
      return {
        adds: adds,
        deletes: Array.from(deletes)
      };
    }
  }]);

  return AttributeStore;
}();

var addHorizontalSwipeHandler = function addHorizontalSwipeHandler(element, handler, _ref) {
  var maxSwipeTime = _ref.maxSwipeTime,
      minHorizontalSwipeDistance = _ref.minHorizontalSwipeDistance,
      maxVerticalSwipeDistance = _ref.maxVerticalSwipeDistance;

  if (!element || !element.addEventListener || !isFunction_1(handler)) {
    return null;
  } // State variables


  var startX = 0;
  var startY = 0;
  var startTime = null;
  var isSwiping = false; // Touch start handler

  function touchStart(e) {
    var t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
    startTime = new Date().getTime();
    isSwiping = true;
  } // Touch end handler


  function touchEnd(e) {
    if (!isSwiping) return;
    isSwiping = false;
    var t = e.changedTouches[0];
    var deltaX = t.screenX - startX;
    var deltaY = t.screenY - startY;
    var deltaTime = new Date().getTime() - startTime;

    if (deltaTime < maxSwipeTime) {
      if (Math.abs(deltaX) >= minHorizontalSwipeDistance && Math.abs(deltaY) <= maxVerticalSwipeDistance) {
        var arg = {
          toLeft: false,
          toRight: false
        };

        if (deltaX < 0) {
          // Swipe to the left
          arg.toLeft = true;
        } else {
          // Swipe to the right
          arg.toRight = true;
        }

        handler(arg);
      }
    }
  } // Add event handlers


  on(element, 'touchstart', touchStart, {
    passive: true
  }); // on(element, 'touchmove', touchmove);

  on(element, 'touchend', touchEnd, {
    passive: true
  }); // Return function that removes event handlers

  return function () {
    off(element, 'touchstart', touchStart); // off(element, 'touchmove', touchmove);

    off(element, 'touchend', touchEnd);
  };
};

var script = {
  name: 'Calendar',
  emits: ['dayfocusin', 'dayfocusout', 'transition-start', 'transition-end', 'update:from-page', 'update:to-page'],
  render: function render() {
    var _this = this;

    // Renderer for calendar panes
    var panes = this.pages.map(function (page, i) {
      var position = i + 1;
      var row = Math.ceil((i + 1) / _this.columns);
      var rowFromEnd = _this.rows - row + 1;
      var column = position % _this.columns || _this.columns;
      var columnFromEnd = _this.columns - column + 1;
      return h(script$1, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        key: page.key,
        attributes: _this.store,
        page: page,
        position: position,
        row: row,
        rowFromEnd: rowFromEnd,
        column: column,
        columnFromEnd: columnFromEnd,
        titlePosition: _this.titlePosition,
        canMove: _this.canMove,
        'onUpdate:page': function onUpdatePage(e) {
          return _this.move(e, {
            position: i + 1
          });
        },
        onDayfocusin: function onDayfocusin(e) {
          _this.lastFocusedDay = e;

          _this.$emit('dayfocusin', e);
        },
        onDayfocusout: function onDayfocusout(e) {
          _this.lastFocusedDay = null;

          _this.$emit('dayfocusout', e);
        }
      }), _this.$slots);
    }); // Renderer for calendar arrows

    var getArrowButton = function getArrowButton(isPrev) {
      var click = function click() {
        return _this.move(isPrev ? -_this.step_ : _this.step_);
      };

      var keydown = function keydown(e) {
        return onSpaceOrEnter(e, click);
      };

      var isDisabled = isPrev ? !_this.canMovePrev : !_this.canMoveNext;
      return h('div', {
        class: ['vc-arrow', "is-".concat(isPrev ? 'left' : 'right'), {
          'is-disabled': isDisabled
        }],
        role: 'button',
        onClick: click,
        onKeydown: keydown
      }, [(isPrev ? _this.safeSlot('header-left-button', {
        click: click
      }) : _this.safeSlot('header-right-button', {
        click: click
      })) || h(script$5, {
        name: isPrev ? 'left-arrow' : 'right-arrow'
      })]);
    }; // Nav popover


    var getNavPopover = function getNavPopover() {
      return h(script$2, {
        id: _this.sharedState.navPopoverId,
        contentClass: 'vc-nav-popover-container',
        ref: 'navPopover'
      }, {
        // Navigation pane
        default: function _default(_ref) {
          var data = _ref.data;
          var position = data.position,
              page = data.page;
          return h(script$3, {
            value: page,
            position: position,
            validator: function validator(e) {
              return _this.canMove(e, {
                position: position
              });
            },
            onInput: function onInput(e) {
              return _this.move(e);
            }
          }, _objectSpread2({}, _this.$slots));
        }
      });
    }; // Day popover


    var getDayPopover = function getDayPopover() {
      return h(script$2, {
        id: _this.sharedState.dayPopoverId,
        contentClass: 'vc-day-popover-container'
      }, {
        default: function _default(_ref2) {
          var day = _ref2.data,
              updateLayout = _ref2.updateLayout,
              hide = _ref2.hide;
          var attributes = Object.values(day.attributes).filter(function (a) {
            return a.popover;
          });
          var masks = _this.$locale.masks;
          var format = _this.formatDate;
          var dayTitle = format(day.date, masks.dayPopover);
          return _this.safeSlot('day-popover', {
            day: day,
            attributes: attributes,
            masks: masks,
            format: format,
            dayTitle: dayTitle,
            updateLayout: updateLayout,
            hide: hide
          }, h('div', [// Show popover header only if format is defined
          masks.dayPopover && h('div', {
            class: ['vc-day-popover-header']
          }, [dayTitle]), attributes.map(function (attribute) {
            return h(script$6, {
              key: attribute.key,
              attribute: attribute
            });
          })]));
        }
      });
    }; // Render calendar container


    return h('div', {
      'data-helptext': 'Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year',
      class: ['vc-container', "vc-".concat(this.$theme.color), {
        'vc-is-expanded': this.isExpanded,
        'vc-is-dark': this.$theme.isDark
      }],
      onKeydown: this.handleKeydown,
      onMouseup: function onMouseup(e) {
        return e.preventDefault();
      },
      ref: 'container'
    }, [getNavPopover(), h('div', {
      class: ['vc-pane-container', {
        'in-transition': this.inTransition
      }]
    }, [h(script$4, {
      name: this.transitionName,
      'on-before-enter': function onBeforeEnter() {
        _this.inTransition = true;
      },
      'on-after-enter': function onAfterEnter() {
        _this.inTransition = false;
      }
    }, {
      default: function _default() {
        return h('div', _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          class: 'vc-pane-layout',
          style: {
            gridTemplateColumns: "repeat(".concat(_this.columns, ", 1fr)")
          },
          key: _this.firstPage ? _this.firstPage.key : ''
        }), panes);
      }
    }), h('div', {
      class: ["vc-arrows-container title-".concat(this.titlePosition)]
    }, [getArrowButton(true), getArrowButton(false)]), this.$slots.footer && this.$slots.footer()]), getDayPopover()]);
  },
  mixins: [rootMixin, slotMixin],
  provide: function provide() {
    return {
      sharedState: this.sharedState
    };
  },
  props: {
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    },
    step: Number,
    titlePosition: {
      type: String,
      default: getDefault('titlePosition')
    },
    isExpanded: Boolean,
    fromDate: Date,
    toDate: Date,
    fromPage: Object,
    toPage: Object,
    minPage: Object,
    maxPage: Object,
    transition: String,
    attributes: [Object, Array],
    trimWeeks: Boolean,
    disablePageSwipe: Boolean
  },
  data: function data() {
    return {
      pages: [],
      store: null,
      lastFocusedDay: null,
      focusableDay: new Date().getDate(),
      transitionName: '',
      inTransition: false,
      sharedState: {
        navPopoverId: createGuid(),
        dayPopoverId: createGuid(),
        theme: {},
        masks: {},
        locale: {}
      }
    };
  },
  computed: {
    firstPage: function firstPage() {
      return head_1(this.pages);
    },
    lastPage: function lastPage() {
      return last_1(this.pages);
    },
    minPage_: function minPage_() {
      return this.minPage || this.pageForDate(this.minDate);
    },
    maxPage_: function maxPage_() {
      return this.maxPage || this.pageForDate(this.maxDate);
    },
    count: function count() {
      return this.rows * this.columns;
    },
    step_: function step_() {
      return this.step || this.count;
    },
    canMovePrev: function canMovePrev() {
      return this.canMove(-this.step_);
    },
    canMoveNext: function canMoveNext() {
      return this.canMove(this.step_);
    }
  },
  watch: {
    $locale: function $locale() {
      this.refreshLocale();
      this.refreshPages({
        page: this.firstPage,
        ignoreCache: true
      });
      this.initStore();
    },
    $theme: function $theme() {
      this.refreshTheme();
      this.initStore();
    },
    fromDate: function fromDate() {
      this.refreshPages();
    },
    fromPage: function fromPage(val) {
      var firstPage = this.pages && this.pages[0];
      if (pageIsEqualToPage(val, firstPage)) return;
      this.refreshPages();
    },
    toPage: function toPage(val) {
      var lastPage = this.pages && this.pages[this.pages.length - 1];
      if (pageIsEqualToPage(val, lastPage)) return;
      this.refreshPages();
    },
    count: function count() {
      this.refreshPages();
    },
    attributes: {
      handler: function handler(val) {
        var _this$store$refresh = this.store.refresh(val),
            adds = _this$store$refresh.adds,
            deletes = _this$store$refresh.deletes;

        this.refreshAttrs(this.pages, adds, deletes);
      },
      deep: true
    },
    pages: function pages(val) {
      this.refreshAttrs(val, this.store.list, null, true);
    },
    disabledAttribute: function disabledAttribute() {
      this.refreshDisabledDays();
    },
    lastFocusedDay: function lastFocusedDay(val) {
      if (val) {
        this.focusableDay = val.day;
        this.refreshFocusableDays();
      }
    },
    inTransition: function inTransition(val) {
      if (val) {
        this.$emit('transition-start');
      } else {
        this.$emit('transition-end');

        if (this.transitionPromise) {
          this.transitionPromise.resolve(true);
          this.transitionPromise = null;
        }
      }
    }
  },
  created: function created() {
    this.refreshLocale();
    this.refreshTheme();
    this.initStore();
    this.refreshPages();
  },
  mounted: function mounted() {
    var _this2 = this;

    if (!this.disablePageSwipe) {
      // Add swipe handler to move to next and previous pages
      this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, function (_ref3) {
        var toLeft = _ref3.toLeft,
            toRight = _ref3.toRight;

        if (toLeft) {
          _this2.moveNext();
        } else if (toRight) {
          _this2.movePrev();
        }
      }, getDefault('touch'));
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.pages = [];
    this.store.destroy();
    this.store = null;
    this.sharedState = null;
    if (this.removeHandlers) this.removeHandlers();
  },
  methods: {
    refreshLocale: function refreshLocale() {
      this.sharedState.locale = this.$locale;
      this.sharedState.masks = this.$locale.masks;
    },
    refreshTheme: function refreshTheme() {
      this.sharedState.theme = this.$theme;
    },
    canMove: function canMove(arg) {
      var _this3 = this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var page = this.firstPage && this.$locale.toPage(arg, this.firstPage);
      if (!page) return false;
      var position = opts.position; // Pin position if arg is number

      if (isNumber_1(arg)) position = 1; // Set position if unspecified and out of current bounds

      if (!position) {
        if (pageIsBeforePage(page, this.firstPage)) {
          position = -1;
        } else if (pageIsAfterPage(page, this.lastPage)) {
          position = 1;
        } else {
          // Page already displayed
          return true;
        }
      } // Calculate new page range without adjusting to min/max


      Object.assign(opts, this.getTargetPageRange(page, {
        position: position,
        force: true
      })); // Verify we can move to any pages in the target range

      return pageRangeToArray(opts.fromPage, opts.toPage).some(function (p) {
        return pageIsBetweenPages(p, _this3.minPage_, _this3.maxPage_);
      });
    },
    movePrev: function movePrev(opts) {
      return this.move(-this.step_, opts);
    },
    moveNext: function moveNext(opts) {
      return this.move(this.step_, opts);
    },
    move: function move(arg) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Reject if we can't move to this page
      var canMove = this.canMove(arg, opts);

      if (!opts.force && !canMove) {
        return Promise.reject(new Error("Move target is disabled: ".concat(JSON.stringify(opts))));
      } // Hide nav popover for good measure


      this.$refs.navPopover.hide({
        hideDelay: 0
      }); // Move to new `fromPage` if it's different from the current one

      if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, this.firstPage)) {
        return this.refreshPages(_objectSpread2(_objectSpread2({}, opts), {}, {
          page: opts.fromPage,
          position: 1,
          force: true
        }));
      }

      return Promise.resolve(true);
    },
    focusDate: function focusDate(date) {
      var _this4 = this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Move to the given date
      return this.move(date, opts).then(function () {
        // Set focus on the element for the date
        var focusableEl = _this4.$el.querySelector(".id-".concat(_this4.$locale.getDayId(date), ".in-month .vc-focusable"));

        if (focusableEl) {
          focusableEl.focus();
          return Promise.resolve(true);
        }

        return Promise.resolve(false);
      });
    },
    showPageRange: function showPageRange(range, opts) {
      var fromPage;
      var toPage;

      if (isDate(range)) {
        fromPage = this.pageForDate(range);
      } else if (isObject(range)) {
        var month = range.month,
            year = range.year;
        var from = range.from,
            to = range.to;

        if (isNumber_1(month) && isNumber_1(year)) {
          fromPage = range;
        } else if (from || to) {
          fromPage = isDate(from) ? this.pageForDate(from) : from;
          toPage = isDate(to) ? this.pageForDate(to) : to;
        }
      } else {
        return Promise.reject(new Error('Invalid page range provided.'));
      }

      var lastPage = this.lastPage;
      var page = fromPage; // Offset page from the desired `toPage`

      if (pageIsAfterPage(toPage, lastPage)) {
        page = addPages(toPage, -(this.pages.length - 1));
      } // But no earlier than the desired `fromPage`


      if (pageIsBeforePage(page, fromPage)) {
        page = fromPage;
      }

      return this.refreshPages(_objectSpread2(_objectSpread2({}, opts), {}, {
        page: page
      }));
    },
    getTargetPageRange: function getTargetPageRange(page) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          position = _ref4.position,
          force = _ref4.force;

      var fromPage = null;
      var toPage = null;

      if (pageIsValid(page)) {
        var pagesToAdd = 0;
        position = +position;

        if (!isNaN(position)) {
          pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
        }

        fromPage = addPages(page, pagesToAdd);
      } else {
        fromPage = this.getDefaultInitialPage();
      }

      toPage = addPages(fromPage, this.count - 1); // Adjust range for min/max if not forced

      if (!force) {
        if (pageIsBeforePage(fromPage, this.minPage_)) {
          fromPage = this.minPage_;
        } else if (pageIsAfterPage(toPage, this.maxPage_)) {
          fromPage = addPages(this.maxPage_, 1 - this.count);
        }

        toPage = addPages(fromPage, this.count - 1);
      }

      return {
        fromPage: fromPage,
        toPage: toPage
      };
    },
    getDefaultInitialPage: function getDefaultInitialPage() {
      // 1. Try the fromPage prop
      var page = this.fromPage || this.pageForDate(this.fromDate);

      if (!pageIsValid(page)) {
        // 2. Try the toPage prop
        var toPage = this.toPage || this.pageForDate(this.toPage);

        if (pageIsValid(toPage)) {
          page = addPages(toPage, 1 - this.count);
        }
      } // 3. Try the first attribute


      if (!pageIsValid(page)) {
        page = this.getPageForAttributes();
      } // 4. Use today's page


      if (!pageIsValid(page)) {
        page = this.pageForThisMonth();
      }

      return page;
    },
    refreshPages: function refreshPages() {
      var _this5 = this;

      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref5.page,
          _ref5$position = _ref5.position,
          position = _ref5$position === void 0 ? 1 : _ref5$position,
          force = _ref5.force,
          transition = _ref5.transition,
          ignoreCache = _ref5.ignoreCache;

      return new Promise(function (resolve, reject) {
        var _this5$getTargetPageR = _this5.getTargetPageRange(page, {
          position: position,
          force: force
        }),
            fromPage = _this5$getTargetPageR.fromPage,
            toPage = _this5$getTargetPageR.toPage; // Create the new pages


        var pages = [];

        for (var i = 0; i < _this5.count; i++) {
          pages.push(_this5.buildPage(addPages(fromPage, i), ignoreCache));
        } // Refresh disabled days for new pages


        _this5.refreshDisabledDays(pages); // Refresh focusable days for new pages


        _this5.refreshFocusableDays(pages); // Assign the transition


        _this5.transitionName = _this5.getPageTransition(_this5.pages[0], pages[0], transition); // Assign the new pages

        _this5.pages = pages; // Emit page update events

        _this5.$emit('update:from-page', fromPage);

        _this5.$emit('update:to-page', toPage);

        if (_this5.transitionName && _this5.transitionName !== 'none') {
          _this5.transitionPromise = {
            resolve: resolve,
            reject: reject
          };
        } else {
          resolve(true);
        }
      });
    },
    refreshDisabledDays: function refreshDisabledDays(pages) {
      var _this6 = this;

      this.getPageDays(pages).forEach(function (d) {
        d.isDisabled = !!_this6.disabledAttribute && _this6.disabledAttribute.intersectsDay(d);
      });
    },
    refreshFocusableDays: function refreshFocusableDays(pages) {
      var _this7 = this;

      this.getPageDays(pages).forEach(function (d) {
        d.isFocusable = d.inMonth && d.day === _this7.focusableDay;
      });
    },
    getPageDays: function getPageDays() {
      var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pages;
      return pages.reduce(function (prev, curr) {
        return prev.concat(curr.days);
      }, []);
    },
    getPageTransition: function getPageTransition(oldPage, newPage) {
      var transition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.transition;
      if (transition === 'none') return transition;

      if (transition === 'fade' || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) {
        return 'fade';
      } // Moving to a previous page


      var movePrev = pageIsBeforePage(newPage, oldPage); // Vertical slide

      if (transition === 'slide-v') {
        return movePrev ? 'slide-down' : 'slide-up';
      } // Horizontal slide


      return movePrev ? 'slide-right' : 'slide-left';
    },
    getPageForAttributes: function getPageForAttributes() {
      var page = null;
      var attr = this.store.pinAttr;

      if (attr && attr.hasDates) {
        var _attr$dates = _slicedToArray(attr.dates, 1),
            date = _attr$dates[0];

        date = date.start || date.date;
        page = this.pageForDate(date);
      }

      return page;
    },
    buildPage: function buildPage(_ref6, ignoreCache) {
      var _this8 = this;

      var month = _ref6.month,
          year = _ref6.year;
      var key = "".concat(year.toString(), "-").concat(month.toString());
      var page = this.pages.find(function (p) {
        return p.key === key;
      });

      if (!page || ignoreCache) {
        var date = new Date(year, month - 1, 15);
        var monthComps = this.$locale.getMonthComps(month, year);
        var prevMonthComps = this.$locale.getPrevMonthComps(month, year);
        var nextMonthComps = this.$locale.getNextMonthComps(month, year);
        page = {
          key: key,
          month: month,
          year: year,
          weeks: this.trimWeeks ? monthComps.weeks : 6,
          title: this.$locale.format(date, this.$locale.masks.title),
          shortMonthLabel: this.$locale.format(date, 'MMM'),
          monthLabel: this.$locale.format(date, 'MMMM'),
          shortYearLabel: year.toString().substring(2),
          yearLabel: year.toString(),
          monthComps: monthComps,
          prevMonthComps: prevMonthComps,
          nextMonthComps: nextMonthComps,
          canMove: function canMove(pg) {
            return _this8.canMove(pg);
          },
          move: function move(pg) {
            return _this8.move(pg);
          },
          moveThisMonth: function moveThisMonth() {
            return _this8.moveThisMonth();
          },
          movePrevMonth: function movePrevMonth() {
            return _this8.move(prevMonthComps);
          },
          moveNextMonth: function moveNextMonth() {
            return _this8.move(nextMonthComps);
          },
          refresh: true
        }; // Assign day info

        page.days = this.$locale.getCalendarDays(page);
      }

      return page;
    },
    initStore: function initStore() {
      // Create a new attribute store
      this.store = new AttributeStore(this.$theme, this.$locale, this.attributes); // Refresh attributes for existing pages

      this.refreshAttrs(this.pages, this.store.list, [], true);
    },
    refreshAttrs: function refreshAttrs() {
      var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var adds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var deletes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var reset = arguments.length > 3 ? arguments[3] : undefined;
      if (!arrayHasItems(pages)) return; // For each page...

      pages.forEach(function (p) {
        // For each day...
        p.days.forEach(function (d) {
          var shouldRefresh = false;
          var map = {}; // If resetting...

          if (reset) {
            shouldRefresh = true;
          } else if (hasAny(d.attributesMap, deletes)) {
            // Delete attributes from the delete list
            map = omit_1(d.attributesMap, deletes); // Flag day for refresh

            shouldRefresh = true;
          } else {
            // Get the existing attributes
            map = d.attributesMap || {};
          } // For each attribute to add...


          adds.forEach(function (attr) {
            // Add it if it includes the current day
            var targetDate = attr.intersectsDay(d);

            if (targetDate) {
              var newAttr = _objectSpread2(_objectSpread2({}, attr), {}, {
                targetDate: targetDate
              });

              map[attr.key] = newAttr; // Flag day for refresh

              shouldRefresh = true;
            }
          }); // Reassign day attributes

          if (shouldRefresh) {
            d.attributesMap = map;
            d.shouldRefresh = true;
          }
        });
      });
    },
    handleKeydown: function handleKeydown(e) {
      var day = this.lastFocusedDay;

      if (day != null) {
        day.event = e;
        this.handleDayKeydown(day);
      }
    },
    handleDayKeydown: function handleDayKeydown(day) {
      var dateFromTime = day.dateFromTime,
          event = day.event; // Set to noon to offset any daylight savings time offset

      var date = dateFromTime(12);
      var newDate = null;

      switch (event.key) {
        case 'ArrowLeft':
          {
            // Move to previous day
            newDate = addDays(date, -1);
            break;
          }

        case 'ArrowRight':
          {
            // Move to next day
            newDate = addDays(date, 1);
            break;
          }

        case 'ArrowUp':
          {
            // Move to previous week
            newDate = addDays(date, -7);
            break;
          }

        case 'ArrowDown':
          {
            // Move to next week
            newDate = addDays(date, 7);
            break;
          }

        case 'Home':
          {
            // Move to first weekday position
            newDate = addDays(date, -day.weekdayPosition + 1);
            break;
          }

        case 'End':
          {
            // Move to last weekday position
            newDate = addDays(date, day.weekdayPositionFromEnd);
            break;
          }

        case 'PageUp':
          {
            if (event.altKey) {
              // Move to previous year w/ Alt/Option key
              newDate = addYears(date, -1);
            } else {
              // Move to previous month
              newDate = addMonths(date, -1);
            }

            break;
          }

        case 'PageDown':
          {
            if (event.altKey) {
              // Move to next year w/ Alt/Option key
              newDate = addYears(date, 1);
            } else {
              // Move to next month
              newDate = addMonths(date, 1);
            }

            break;
          }
      }

      if (newDate) {
        event.preventDefault();
        this.focusDate(newDate).catch();
      }
    }
  }
};

var css_248z = ".vc-container {\n  --white: #ffffff;\n  --black: #000000;\n\n  --gray-100: #f7fafc;\n  --gray-200: #edf2f7;\n  --gray-300: #e2e8f0;\n  --gray-400: #cbd5e0;\n  --gray-500: #a0aec0;\n  --gray-600: #718096;\n  --gray-700: #4a5568;\n  --gray-800: #2d3748;\n  --gray-900: #1a202c;\n\n  --red-100: #fff5f5;\n  --red-200: #fed7d7;\n  --red-300: #feb2b2;\n  --red-400: #fc8181;\n  --red-500: #f56565;\n  --red-600: #e53e3e;\n  --red-700: #c53030;\n  --red-800: #9b2c2c;\n  --red-900: #742a2a;\n\n  --orange-100: #fffaf0;\n  --orange-200: #feebc8;\n  --orange-300: #fbd38d;\n  --orange-400: #f6ad55;\n  --orange-500: #ed8936;\n  --orange-600: #dd6b20;\n  --orange-700: #c05621;\n  --orange-800: #9c4221;\n  --orange-900: #7b341e;\n\n  --yellow-100: #fffff0;\n  --yellow-200: #fefcbf;\n  --yellow-300: #faf089;\n  --yellow-400: #f6e05e;\n  --yellow-500: #ecc94b;\n  --yellow-600: #d69e2e;\n  --yellow-700: #b7791f;\n  --yellow-800: #975a16;\n  --yellow-900: #744210;\n\n  --green-100: #f0fff4;\n  --green-200: #c6f6d5;\n  --green-300: #9ae6b4;\n  --green-400: #68d391;\n  --green-500: #48bb78;\n  --green-600: #38a169;\n  --green-700: #2f855a;\n  --green-800: #276749;\n  --green-900: #22543d;\n\n  --teal-100: #e6fffa;\n  --teal-200: #b2f5ea;\n  --teal-300: #81e6d9;\n  --teal-400: #4fd1c5;\n  --teal-500: #38b2ac;\n  --teal-600: #319795;\n  --teal-700: #2c7a7b;\n  --teal-800: #285e61;\n  --teal-900: #234e52;\n\n  --blue-100: #ebf8ff;\n  --blue-200: #bee3f8;\n  --blue-300: #90cdf4;\n  --blue-400: #63b3ed;\n  --blue-500: #4299e1;\n  --blue-600: #3182ce;\n  --blue-700: #2b6cb0;\n  --blue-800: #2c5282;\n  --blue-900: #2a4365;\n\n  --indigo-100: #ebf4ff;\n  --indigo-200: #c3dafe;\n  --indigo-300: #a3bffa;\n  --indigo-400: #7f9cf5;\n  --indigo-500: #667eea;\n  --indigo-600: #5a67d8;\n  --indigo-700: #4c51bf;\n  --indigo-800: #434190;\n  --indigo-900: #3c366b;\n\n  --purple-100: #faf5ff;\n  --purple-200: #e9d8fd;\n  --purple-300: #d6bcfa;\n  --purple-400: #b794f4;\n  --purple-500: #9f7aea;\n  --purple-600: #805ad5;\n  --purple-700: #6b46c1;\n  --purple-800: #553c9a;\n  --purple-900: #44337a;\n\n  --pink-100: #fff5f7;\n  --pink-200: #fed7e2;\n  --pink-300: #fbb6ce;\n  --pink-400: #f687b3;\n  --pink-500: #ed64a6;\n  --pink-600: #d53f8c;\n  --pink-700: #b83280;\n  --pink-800: #97266d;\n  --pink-900: #702459;\n}\n.vc-container.vc-red {\n    --accent-100: var(--red-100);\n    --accent-200: var(--red-200);\n    --accent-300: var(--red-300);\n    --accent-400: var(--red-400);\n    --accent-500: var(--red-500);\n    --accent-600: var(--red-600);\n    --accent-700: var(--red-700);\n    --accent-800: var(--red-800);\n    --accent-900: var(--red-900);\n}\n.vc-container.vc-orange {\n    --accent-100: var(--orange-100);\n    --accent-200: var(--orange-200);\n    --accent-300: var(--orange-300);\n    --accent-400: var(--orange-400);\n    --accent-500: var(--orange-500);\n    --accent-600: var(--orange-600);\n    --accent-700: var(--orange-700);\n    --accent-800: var(--orange-800);\n    --accent-900: var(--orange-900);\n}\n.vc-container.vc-yellow {\n    --accent-100: var(--yellow-100);\n    --accent-200: var(--yellow-200);\n    --accent-300: var(--yellow-300);\n    --accent-400: var(--yellow-400);\n    --accent-500: var(--yellow-500);\n    --accent-600: var(--yellow-600);\n    --accent-700: var(--yellow-700);\n    --accent-800: var(--yellow-800);\n    --accent-900: var(--yellow-900);\n}\n.vc-container.vc-green {\n    --accent-100: var(--green-100);\n    --accent-200: var(--green-200);\n    --accent-300: var(--green-300);\n    --accent-400: var(--green-400);\n    --accent-500: var(--green-500);\n    --accent-600: var(--green-600);\n    --accent-700: var(--green-700);\n    --accent-800: var(--green-800);\n    --accent-900: var(--green-900);\n}\n.vc-container.vc-teal {\n    --accent-100: var(--teal-100);\n    --accent-200: var(--teal-200);\n    --accent-300: var(--teal-300);\n    --accent-400: var(--teal-400);\n    --accent-500: var(--teal-500);\n    --accent-600: var(--teal-600);\n    --accent-700: var(--teal-700);\n    --accent-800: var(--teal-800);\n    --accent-900: var(--teal-900);\n}\n.vc-container.vc-blue {\n    --accent-100: var(--blue-100);\n    --accent-200: var(--blue-200);\n    --accent-300: var(--blue-300);\n    --accent-400: var(--blue-400);\n    --accent-500: var(--blue-500);\n    --accent-600: var(--blue-600);\n    --accent-700: var(--blue-700);\n    --accent-800: var(--blue-800);\n    --accent-900: var(--blue-900);\n}\n.vc-container.vc-indigo {\n    --accent-100: var(--indigo-100);\n    --accent-200: var(--indigo-200);\n    --accent-300: var(--indigo-300);\n    --accent-400: var(--indigo-400);\n    --accent-500: var(--indigo-500);\n    --accent-600: var(--indigo-600);\n    --accent-700: var(--indigo-700);\n    --accent-800: var(--indigo-800);\n    --accent-900: var(--indigo-900);\n}\n.vc-container.vc-purple {\n    --accent-100: var(--purple-100);\n    --accent-200: var(--purple-200);\n    --accent-300: var(--purple-300);\n    --accent-400: var(--purple-400);\n    --accent-500: var(--purple-500);\n    --accent-600: var(--purple-600);\n    --accent-700: var(--purple-700);\n    --accent-800: var(--purple-800);\n    --accent-900: var(--purple-900);\n}\n.vc-container.vc-pink {\n    --accent-100: var(--pink-100);\n    --accent-200: var(--pink-200);\n    --accent-300: var(--pink-300);\n    --accent-400: var(--pink-400);\n    --accent-500: var(--pink-500);\n    --accent-600: var(--pink-600);\n    --accent-700: var(--pink-700);\n    --accent-800: var(--pink-800);\n    --accent-900: var(--pink-900);\n}\n.vc-container {\n\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n\n  --leading-snug: 1.375;\n\n  --rounded: 0.25rem;\n  --rounded-lg: 0.5rem;\n  --rounded-full: 9999px;\n\n  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n\n  --slide-translate: 22px;\n  --slide-duration: 0.15s;\n  --slide-timing: ease;\n\n  --day-content-transition-time: 0.13s ease-in;\n  --weeknumber-offset: -34px;\n\n  position: relative;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: -webkit-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: max-content;\n  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    'Helvetica', 'Arial', sans-serif;\n  color: var(--gray-900);\n  background-color: var(--white);\n  border: 1px solid;\n  border-color: var(--gray-400);\n  border-radius: var(--rounded-lg);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent;\n}\n.vc-container,\n  .vc-container * {\n    box-sizing: border-box;\n}\n.vc-container:focus, .vc-container *:focus {\n      outline: none;\n}\n.vc-container button,\n  .vc-container [role='button'] {\n    cursor: pointer;\n}\n.vc-container.vc-is-expanded {\n    min-width: 100%;\n}\n/* Hides double border within popovers */\n.vc-container .vc-container {\n    border: none;\n}\n.vc-container.vc-is-dark {\n    color: var(--gray-100);\n    background-color: var(--gray-900);\n    border-color: var(--gray-700);\n}\n.vc-pane-container {\n  width: 100%;\n  position: relative;\n}\n.vc-pane-container.in-transition {\n    overflow: hidden;\n}\n.vc-pane-layout {\n  display: grid;\n}\n.vc-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: auto;\n  color: var(--gray-600);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: var(--rounded);\n  border-color: transparent;\n}\n.vc-arrow:hover {\n    background: var(--gray-200);\n}\n.vc-arrow:focus {\n    border-color: var(--gray-300);\n}\n.vc-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.vc-day-popover-container {\n  color: var(--white);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  padding: 4px 8px;\n  box-shadow: var(--shadow);\n}\n.vc-day-popover-header {\n  font-size: var(--text-xs);\n  color: var(--gray-300);\n  font-weight: var(--font-semibold);\n  text-align: center;\n}\n.vc-arrows-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 10px;\n  pointer-events: none;\n}\n.vc-arrows-container.title-left {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-arrows-container.title-right {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-is-dark .vc-arrow {\n    color: var(--white);\n}\n.vc-is-dark .vc-arrow:hover {\n      background: var(--gray-800);\n}\n.vc-is-dark .vc-arrow:focus {\n      border-color: var(--gray-700);\n}\n.vc-is-dark .vc-day-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n.vc-is-dark .vc-day-popover-header {\n    color: var(--gray-700);\n}\n";
styleInject(css_248z);

export { script as s };
