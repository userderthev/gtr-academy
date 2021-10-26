'use strict';Object.defineProperty(exports,'__esModule',{value:true});var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),styleInject_es=require('./style-inject.es-06def3b0.js'),TimeSelect=require('./TimeSelect.js');var script = {
  name: 'TimePicker',
  components: {
    TimeSelect: TimeSelect['default']
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    locale: {
      type: Object,
      required: true
    },
    theme: {
      type: Object,
      required: true
    },
    is24hr: {
      type: Boolean,
      default: true
    },
    minuteIncrement: {
      type: Number,
      default: 1
    },
    showBorder: Boolean
  },
  data: function data() {
    return {
      hours: 0,
      minutes: 0,
      isAM: true
    };
  },
  computed: {
    date: function date() {
      var date = this.locale.normalizeDate(this.modelValue);

      if (this.modelValue.hours === 24) {
        date = new Date(date.getTime() - 1);
      }

      return date;
    },
    hourOptions: function hourOptions() {
      var options12 = [{
        value: 0,
        label: '12'
      }, {
        value: 1,
        label: '1'
      }, {
        value: 2,
        label: '2'
      }, {
        value: 3,
        label: '3'
      }, {
        value: 4,
        label: '4'
      }, {
        value: 5,
        label: '5'
      }, {
        value: 6,
        label: '6'
      }, {
        value: 7,
        label: '7'
      }, {
        value: 8,
        label: '8'
      }, {
        value: 9,
        label: '9'
      }, {
        value: 10,
        label: '10'
      }, {
        value: 11,
        label: '11'
      }];
      var options24 = [{
        value: 0,
        label: '00'
      }, {
        value: 1,
        label: '01'
      }, {
        value: 2,
        label: '02'
      }, {
        value: 3,
        label: '03'
      }, {
        value: 4,
        label: '04'
      }, {
        value: 5,
        label: '05'
      }, {
        value: 6,
        label: '06'
      }, {
        value: 7,
        label: '07'
      }, {
        value: 8,
        label: '08'
      }, {
        value: 9,
        label: '09'
      }, {
        value: 10,
        label: '10'
      }, {
        value: 11,
        label: '11'
      }, {
        value: 12,
        label: '12'
      }, {
        value: 13,
        label: '13'
      }, {
        value: 14,
        label: '14'
      }, {
        value: 15,
        label: '15'
      }, {
        value: 16,
        label: '16'
      }, {
        value: 17,
        label: '17'
      }, {
        value: 18,
        label: '18'
      }, {
        value: 19,
        label: '19'
      }, {
        value: 20,
        label: '20'
      }, {
        value: 21,
        label: '21'
      }, {
        value: 22,
        label: '22'
      }, {
        value: 23,
        label: '23'
      }];
      if (this.is24hr) return options24;
      return options12;
    },
    minuteOptions: function minuteOptions() {
      var options = [];
      var m = 0;
      var added = false;

      while (m <= 59) {
        options.push({
          value: m,
          label: helpers.W(m, 2)
        });
        added = added || m === this.minutes;
        m += this.minuteIncrement; // Add disabled option if interval has skipped it

        if (!added && m > this.minutes) {
          added = true;
          options.push({
            value: this.minutes,
            label: helpers.W(this.minutes, 2),
            disabled: true
          });
        }
      }

      return options;
    }
  },
  watch: {
    modelValue: function modelValue() {
      this.setup();
    },
    hours: function hours() {
      this.updateValue();
    },
    minutes: function minutes() {
      this.updateValue();
    },
    isAM: function isAM() {
      this.updateValue();
    }
  },
  created: function created() {
    this.setup();
  },
  methods: {
    protected: function _protected(fn) {
      var _this = this;

      if (this.busy) return;
      this.busy = true;
      fn();
      this.$nextTick(function () {
        return _this.busy = false;
      });
    },
    setup: function setup() {
      var _this2 = this;

      this.protected(function () {
        var hours = _this2.modelValue.hours;
        if (hours === 24) hours = 0;
        var isAM = true;

        if (!_this2.is24hr && hours >= 12) {
          hours -= 12;
          isAM = false;
        }

        _this2.hours = hours;
        _this2.minutes = _this2.modelValue.minutes;
        _this2.isAM = isAM;
      });
    },
    updateValue: function updateValue() {
      var _this3 = this;

      this.protected(function () {
        var hours = _this3.hours;

        if (!_this3.is24hr && !_this3.isAM) {
          hours += 12;
        }

        _this3.$emit('update:modelValue', helpers.n(helpers.n({}, _this3.modelValue), {}, {
          hours: hours,
          minutes: _this3.minutes,
          seconds: 0,
          milliseconds: 0
        }));
      });
    }
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-63f66eaa");

vue.pushScopeId("data-v-63f66eaa");

var _hoisted_1 = /*#__PURE__*/vue.createVNode("div", null, [/*#__PURE__*/vue.createVNode("svg", {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  class: "vc-time-icon",
  stroke: "currentColor"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1);

var _hoisted_2 = {
  class: "vc-time-content"
};
var _hoisted_3 = {
  key: 0,
  class: "vc-time-date"
};
var _hoisted_4 = {
  class: "vc-time-weekday"
};
var _hoisted_5 = {
  class: "vc-time-month"
};
var _hoisted_6 = {
  class: "vc-time-day"
};
var _hoisted_7 = {
  class: "vc-time-year"
};
var _hoisted_8 = {
  class: "vc-time-select"
};

var _hoisted_9 = /*#__PURE__*/vue.createVNode("span", {
  style: {
    "margin": "0 4px"
  }
}, ":", -1);

var _hoisted_10 = {
  key: 0,
  class: "vc-am-pm"
};

vue.popScopeId();

var render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_time_select = vue.resolveComponent("time-select");

  return vue.openBlock(), vue.createBlock("div", {
    class: ["vc-time-picker", [{
      'vc-invalid': !$props.modelValue.isValid,
      'vc-bordered': $props.showBorder
    }]]
  }, [_hoisted_1, vue.createVNode("div", _hoisted_2, [$options.date ? (vue.openBlock(), vue.createBlock("div", _hoisted_3, [vue.createVNode("span", _hoisted_4, vue.toDisplayString($props.locale.format($options.date, 'WWW')), 1), vue.createVNode("span", _hoisted_5, vue.toDisplayString($props.locale.format($options.date, 'MMM')), 1), vue.createVNode("span", _hoisted_6, vue.toDisplayString($props.locale.format($options.date, 'D')), 1), vue.createVNode("span", _hoisted_7, vue.toDisplayString($props.locale.format($options.date, 'YYYY')), 1)])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_8, [vue.createVNode(_component_time_select, {
    modelValue: $data.hours,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.hours = $event;
    }),
    modelModifiers: {
      number: true
    },
    options: $options.hourOptions
  }, null, 8, ["modelValue", "options"]), _hoisted_9, vue.createVNode(_component_time_select, {
    modelValue: $data.minutes,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.minutes = $event;
    }),
    modelModifiers: {
      number: true
    },
    options: $options.minuteOptions
  }, null, 8, ["modelValue", "options"]), !$props.is24hr ? (vue.openBlock(), vue.createBlock("div", _hoisted_10, [vue.createVNode("button", {
    class: {
      active: $data.isAM
    },
    onClick: _cache[3] || (_cache[3] = vue.withModifiers(function ($event) {
      return $data.isAM = true;
    }, ["prevent"])),
    type: "button"
  }, " AM ", 2), vue.createVNode("button", {
    class: {
      active: !$data.isAM
    },
    onClick: _cache[4] || (_cache[4] = vue.withModifiers(function ($event) {
      return $data.isAM = false;
    }, ["prevent"])),
    type: "button"
  }, " PM ", 2)])) : vue.createCommentVNode("", true)])])], 2);
});var css_248z = ".vc-time-picker[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px;\n}\n.vc-time-picker.vc-invalid[data-v-63f66eaa] {\n    pointer-events: none;\n    opacity: 0.5;\n}\n.vc-time-picker.vc-bordered[data-v-63f66eaa] {\n    border-top: 1px solid var(--gray-400);\n}\n.vc-time-icon[data-v-63f66eaa] {\n  width: 16px;\n  height: 16px;\n  color: var(--gray-600);\n}\n.vc-time-content[data-v-63f66eaa] {\n  margin-left: 8px;\n}\n.vc-time-date[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  text-transform: uppercase;\n  padding: 0 0 4px 4px;\n  margin-top: -4px;\n  line-height: 21px;\n}\n.vc-time-weekday[data-v-63f66eaa] {\n  color: var(--gray-700);\n  letter-spacing: var(--tracking-wide);\n}\n.vc-time-month[data-v-63f66eaa] {\n  color: var(--accent-600);\n  margin-left: 8px;\n}\n.vc-time-day[data-v-63f66eaa] {\n  color: var(--accent-600);\n  margin-left: 4px;\n}\n.vc-time-year[data-v-63f66eaa] {\n  color: var(--gray-500);\n  margin-left: 8px;\n}\n.vc-time-select[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vc-am-pm[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: var(--gray-200);\n  color: var(--gray-800);\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: var(--rounded);\n  height: 30px;\n}\n.vc-am-pm button[data-v-63f66eaa] {\n    font-size: var(--text-sm);\n    font-weight: var(--font-medium);\n    padding: 0 4px;\n    background: transparent;\n    border: 2px solid transparent;\n    border-radius: var(--rounded);\n    line-height: var(--leading-snug);\n}\n.vc-am-pm button[data-v-63f66eaa]:hover {\n      color: var(--gray-600);\n}\n.vc-am-pm button[data-v-63f66eaa]:focus {\n      border-color: var(--accent-400);\n}\n.vc-am-pm button.active[data-v-63f66eaa] {\n      background: var(--accent-600);\n      color: var(--white);\n}\n.vc-am-pm button.active[data-v-63f66eaa]:hover {\n        background: var(--accent-500);\n}\n.vc-am-pm button.active[data-v-63f66eaa]:focus {\n        border-color: var(--accent-400);\n}\n.vc-is-dark .vc-time-picker[data-v-63f66eaa] {\n    border-color: var(--gray-700);\n}\n.vc-is-dark .vc-time-icon[data-v-63f66eaa] {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-time-weekday[data-v-63f66eaa] {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-time-month[data-v-63f66eaa] {\n    color: var(--accent-400);\n}\n.vc-is-dark .vc-time-day[data-v-63f66eaa] {\n    color: var(--accent-400);\n}\n.vc-is-dark .vc-time-year[data-v-63f66eaa] {\n    color: var(--gray-500);\n}\n.vc-is-dark .vc-am-pm[data-v-63f66eaa] {\n    background: var(--gray-700);\n}\n.vc-is-dark .vc-am-pm[data-v-63f66eaa]:focus {\n      border-color: var(--accent-500);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa] {\n      color: var(--gray-100);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:hover {\n        color: var(--gray-400);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:focus {\n        border-color: var(--accent-500);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa] {\n        background: var(--accent-500);\n        color: var(--white);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:hover {\n          background: var(--accent-600);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:focus {\n          border-color: var(--accent-500);\n}\n";
styleInject_es.s(css_248z);script.render = render;
script.__scopeId = "data-v-63f66eaa";exports.default=script;