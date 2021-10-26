'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),styleInject_es=require('./style-inject.es-06def3b0.js');var script = {
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    options: Array,
    modelValue: null
  }
};var _hoisted_1 = {
  class: "vc-select"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("div", {
  class: "vc-select-arrow"
}, [/*#__PURE__*/vue.createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("select", vue.mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.options, function (option) {
    return vue.openBlock(), vue.createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, vue.toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16, ["value"]), _hoisted_2]);
}var css_248z = ".vc-select {\n  position: relative;\n}\n.vc-select select {\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: block;\n    -webkit-appearance: none;\n            appearance: none;\n    width: 52px;\n    height: 30px;\n    font-size: var(--text-base);\n    font-weight: var(--font-medium);\n    text-align: left;\n    background-color: var(--gray-200);\n    border: 2px solid;\n    border-color: var(--gray-200);\n    color: var(--gray-900);\n    padding: 0 20px 0 8px;\n    border-radius: var(--rounded);\n    line-height: var(--leading-tight);\n    text-indent: 0px;\n    cursor: pointer;\n    -moz-padding-start: 3px;\n}\n.vc-select select:hover {\n      color: var(--gray-600);\n}\n.vc-select select:focus {\n      outline: 0;\n      border-color: var(--accent-400);\n      background-color: var(--white);\n}\n.vc-select-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px 0 0;\n  color: var(--gray-500);\n}\n.vc-select-arrow svg {\n    width: 16px;\n    height: 16px;\n    fill: currentColor;\n}\n.vc-is-dark select {\n    background: var(--gray-700);\n    color: var(--gray-100);\n    border-color: var(--gray-700);\n}\n.vc-is-dark select:hover {\n      color: var(--gray-400);\n}\n.vc-is-dark select:focus {\n      border-color: var(--accent-500);\n      background-color: var(--gray-800);\n}\n";
styleInject_es.s(css_248z);script.render = render;exports.default=script;