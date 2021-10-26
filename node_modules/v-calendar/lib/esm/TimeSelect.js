import { openBlock, createBlock, createVNode, mergeProps, Fragment, renderList, toDisplayString } from 'vue';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var script = {
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    options: Array,
    modelValue: null
  }
};

var _hoisted_1 = {
  class: "vc-select"
};

var _hoisted_2 = /*#__PURE__*/createVNode("div", {
  class: "vc-select-arrow"
}, [/*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("select", mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), [(openBlock(true), createBlock(Fragment, null, renderList($props.options, function (option) {
    return openBlock(), createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 16, ["value"]), _hoisted_2]);
}

var css_248z = ".vc-select {\n  position: relative;\n}\n.vc-select select {\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: block;\n    -webkit-appearance: none;\n            appearance: none;\n    width: 52px;\n    height: 30px;\n    font-size: var(--text-base);\n    font-weight: var(--font-medium);\n    text-align: left;\n    background-color: var(--gray-200);\n    border: 2px solid;\n    border-color: var(--gray-200);\n    color: var(--gray-900);\n    padding: 0 20px 0 8px;\n    border-radius: var(--rounded);\n    line-height: var(--leading-tight);\n    text-indent: 0px;\n    cursor: pointer;\n    -moz-padding-start: 3px;\n}\n.vc-select select:hover {\n      color: var(--gray-600);\n}\n.vc-select select:focus {\n      outline: 0;\n      border-color: var(--accent-400);\n      background-color: var(--white);\n}\n.vc-select-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px 0 0;\n  color: var(--gray-500);\n}\n.vc-select-arrow svg {\n    width: 16px;\n    height: 16px;\n    fill: currentColor;\n}\n.vc-is-dark select {\n    background: var(--gray-700);\n    color: var(--gray-100);\n    border-color: var(--gray-700);\n}\n.vc-is-dark select:hover {\n      color: var(--gray-400);\n}\n.vc-is-dark select:focus {\n      border-color: var(--accent-500);\n      background-color: var(--gray-800);\n}\n";
styleInject(css_248z);

script.render = render;

export default script;
