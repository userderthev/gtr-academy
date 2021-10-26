import { openBlock, createBlock, createVNode } from 'vue';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var _defSize = '26px';
var _defViewBox = '0 0 32 32';
var icons = {
  'left-arrow': {
    viewBox: '0 -1 16 34',
    path: 'M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z'
  },
  'right-arrow': {
    viewBox: '-5 -1 16 34',
    path: 'M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z'
  }
};
var script = {
  props: ['name'],
  data: function data() {
    return {
      width: _defSize,
      height: _defSize,
      viewBox: _defViewBox,
      path: '',
      isBaseline: false
    };
  },
  mounted: function mounted() {
    this.updateIcon();
  },
  watch: {
    name: function name() {
      this.updateIcon();
    }
  },
  methods: {
    updateIcon: function updateIcon() {
      var icon = icons[this.name];

      if (icon) {
        this.width = icon.width || _defSize;
        this.height = icon.height || _defSize;
        this.viewBox = icon.viewBox;
        this.path = icon.path;
      }
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", {
    class: "vc-svg-icon",
    width: $data.width,
    height: $data.height,
    viewBox: $data.viewBox
  }, [createVNode("path", {
    d: $data.path
  }, null, 8, ["d"])], 8, ["width", "height", "viewBox"]);
}

var css_248z = ".vc-svg-icon {\n  display: inline-block;\n  stroke: currentColor;\n  stroke-width: 0;\n}\n.vc-svg-icon path {\n    fill: currentColor;\n}\n";
styleInject(css_248z);

script.render = render;

export default script;
