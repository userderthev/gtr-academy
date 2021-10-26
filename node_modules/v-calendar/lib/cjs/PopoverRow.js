'use strict';Object.defineProperty(exports,'__esModule',{value:true});var helpers=require('./helpers-1afc4b71.js'),vue=require('vue'),index=require('./index-1621a98b.js'),styleInject_es=require('./style-inject.es-06def3b0.js');var script = {
  name: 'PopoverRow',
  mixins: [index.k],
  props: {
    attribute: Object
  },
  computed: {
    indicator: function indicator() {
      var _this$attribute = this.attribute,
          highlight = _this$attribute.highlight,
          dot = _this$attribute.dot,
          bar = _this$attribute.bar,
          popover = _this$attribute.popover;
      if (popover && popover.hideIndicator) return null;

      if (highlight) {
        var _highlight$start = highlight.start,
            color = _highlight$start.color,
            isDark = _highlight$start.isDark;
        return {
          style: helpers.n(helpers.n({}, this.theme.bgAccentHigh({
            color: color,
            isDark: !isDark
          })), {}, {
            width: '10px',
            height: '5px',
            borderRadius: '3px'
          })
        };
      }

      if (dot) {
        var _dot$start = dot.start,
            _color = _dot$start.color,
            _isDark = _dot$start.isDark;
        return {
          style: helpers.n(helpers.n({}, this.theme.bgAccentHigh({
            color: _color,
            isDark: !_isDark
          })), {}, {
            width: '5px',
            height: '5px',
            borderRadius: '50%'
          })
        };
      }

      if (bar) {
        var _bar$start = bar.start,
            _color2 = _bar$start.color,
            _isDark2 = _bar$start.isDark;
        return {
          style: helpers.n(helpers.n({}, this.theme.bgAccentHigh({
            color: _color2,
            isDark: !_isDark2
          })), {}, {
            width: '10px',
            height: '3px'
          })
        };
      }

      return null;
    }
  }
};var _hoisted_1 = {
  class: "vc-day-popover-row"
};
var _hoisted_2 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
var _hoisted_3 = {
  class: "vc-day-popover-row-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [$options.indicator ? (vue.openBlock(), vue.createBlock("div", _hoisted_2, [vue.createVNode("span", {
    style: $options.indicator.style,
    class: $options.indicator.class
  }, null, 6)])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "default", {}, function () {
    return [vue.createTextVNode(vue.toDisplayString($props.attribute.popover ? $props.attribute.popover.label : 'No content provided'), 1
    /* TEXT */
    )];
  })])]);
}var css_248z = ".vc-day-popover-row {\n  --day-content-transition-time: 0.13s ease-in;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row:not(:first-child) {\n    margin-top: 3px;\n}\n.vc-day-popover-row-indicator {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  width: 15px;\n  margin-right: 3px;\n}\n.vc-day-popover-row-indicator span {\n    transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: none;\n      -ms-flex-wrap: none;\n          flex-wrap: none;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: -webkit-max-content;\n  width: max-content;\n}\n";
styleInject_es.s(css_248z);script.render = render;exports.default=script;