'use strict';var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),index=require('./index-1621a98b.js'),styleInject_es=require('./style-inject.es-06def3b0.js');function showPopover(opts) {
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
  return _ref = {}, helpers.Y(_ref, events.click, function (e) {
    if (click) {
      opts.ref = e.target;
      togglePopover(opts);
      e.stopPropagation();
    }
  }), helpers.Y(_ref, events.mousemove, function (e) {
    opts.ref = e.currentTarget;

    if (!hovered) {
      hovered = true;

      if (hover || hoverFocus) {
        showPopover(opts);
      }
    }
  }), helpers.Y(_ref, events.mouseleave, function (e) {
    opts.ref = e.target;

    if (hovered) {
      hovered = false;

      if (hover || hoverFocus && !focused) {
        hidePopover(opts);
      }
    }
  }), helpers.Y(_ref, events.focusin, function (e) {
    opts.ref = e.currentTarget;

    if (!focused) {
      focused = true;

      if (focus || hoverFocus) {
        showPopover(opts);
      }
    }
  }), helpers.Y(_ref, events.focusout, function (e) {
    opts.ref = e.currentTarget;

    if (focused && !helpers.G(opts.ref, e.relatedTarget)) {
      focused = false;

      if (focus || hoverFocus && !hovered) {
        hidePopover(opts);
      }
    }
  }), _ref;
}var script = {
  name: 'CalendarDay',
  emits: ['dayclick', 'daymouseenter', 'daymouseleave', 'dayfocusin', 'dayfocusout', 'daykeydown'],
  mixins: [index.k, index.f],
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
      }) || vue.h('span', helpers.n(helpers.n(helpers.n({}, _this.dayContentProps), {}, {
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
      class: ['vc-day'].concat(helpers.F(this.day.classes), [{
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
      return !!helpers.l(this.backgrounds);
    },
    content: function content() {
      return this.glyphs.content;
    },
    dots: function dots() {
      return this.glyphs.dots;
    },
    hasDots: function hasDots() {
      return !!helpers.l(this.dots);
    },
    bars: function bars() {
      return this.glyphs.bars;
    },
    hasBars: function hasBars() {
      return !!helpers.l(this.bars);
    },
    popovers: function popovers() {
      return this.glyphs.popovers;
    },
    hasPopovers: function hasPopovers() {
      return !!helpers.l(this.popovers);
    },
    dayContentClass: function dayContentClass() {
      return ['vc-day-content vc-focusable', {
        'is-disabled': this.isDisabled
      }, helpers.g(helpers.r(this.content), 'class') || ''];
    },
    dayContentStyle: function dayContentStyle() {
      return helpers.g(helpers.r(this.content), 'style');
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
      return helpers.n(helpers.n({}, this.day), {}, {
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
      return helpers.n(helpers.n({}, this.dayEvent), {}, {
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
      var resolvedPopover = helpers.T({
        key: key,
        customData: customData,
        attribute: attribute
      }, helpers.n({}, popover), {
        visibility: popover.label ? 'hover' : 'click',
        placement: 'bottom',
        isInteractive: !popover.label
      });
      popovers.splice(0, 0, resolvedPopover);
    },
    refreshPopovers: function refreshPopovers() {
      var popoverEvents = {};

      if (helpers.l(this.popovers)) {
        popoverEvents = getPopoverTriggerEvents(helpers.T.apply(void 0, [{
          id: this.dayPopoverId,
          data: this.day,
          isRenderFn: true
        }].concat(helpers.F(this.popovers))));
      }

      this.dayContentEvents = helpers.Z({
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
};var css_248z = ".vc-day {\n  position: relative;\n  min-height: 32px;\n  z-index: 1;\n}\n.vc-day.is-not-in-month * {\n    opacity: 0;\n    pointer-events: none;\n}\n.vc-day-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.vc-day-box-center-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.vc-day-box-left-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n.vc-day-box-right-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n.vc-day-box-center-bottom {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.vc-day-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: var(--rounded-full);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.vc-day-content:hover {\n    background-color: hsla(211, 25%, 84%, 0.3);\n}\n.vc-day-content:focus {\n    font-weight: var(--font-bold);\n    background-color: hsla(211, 25%, 84%, 0.4);\n}\n.vc-day-content.is-disabled {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-day-content:hover {\n      background-color: hsla(216, 15%, 52%, 0.3);\n}\n.vc-is-dark .vc-day-content:focus {\n      background-color: hsla(216, 15%, 52%, 0.4);\n}\n.vc-is-dark .vc-day-content.is-disabled {\n      color: var(--gray-600);\n}\n.vc-highlights {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.vc-highlight {\n  width: 28px;\n  height: 28px;\n}\n.vc-highlight.vc-highlight-base-start {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-right-width: 0 !important;\n}\n.vc-highlight.vc-highlight-base-end {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n}\n.vc-highlight.vc-highlight-base-middle {\n    width: 100%;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n    border-right-width: 0 !important;\n    margin: 0 -1px;\n}\n.vc-dots {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vc-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  transition: all var(--day-content-transition-time);\n}\n.vc-dot:not(:last-child) {\n    margin-right: 3px;\n}\n.vc-bars {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 75%;\n}\n.vc-bar {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 3px;\n  transition: all var(--day-content-transition-time);\n}\n";
styleInject_es.s(css_248z);exports.a=script;exports.g=getPopoverTriggerEvents;exports.h=hidePopover;exports.s=showPopover;exports.t=togglePopover;