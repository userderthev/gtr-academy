(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CustomTransition = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'CustomTransition',
    emits: ['before-enter', 'before-transition', 'after-enter', 'after-transition'],
    props: {
      name: String,
      appear: Boolean
    },
    computed: {
      name_: function name_() {
        return "vc-".concat(this.name || 'none');
      }
    },
    methods: {
      beforeEnter: function beforeEnter(el) {
        this.$emit('before-enter', el);
        this.$emit('before-transition', el);
      },
      afterEnter: function afterEnter(el) {
        this.$emit('after-enter', el);
        this.$emit('after-transition', el);
      }
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $options.name_,
      appear: $props.appear,
      onBeforeEnter: $options.beforeEnter,
      onAfterEnter: $options.afterEnter
    }, {
      default: vue.withCtx(function () {
        return [vue.renderSlot(_ctx.$slots, "default")];
      }),
      _: 3
    }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vc-none-enter-active,\n.vc-none-leave-active {\n  transition-duration: 0s;\n}\n\n.vc-fade-enter-active,\n.vc-fade-leave-active,\n.vc-slide-left-enter-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-enter-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-enter-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-enter-active,\n.vc-slide-down-leave-active,\n.vc-slide-fade-enter-active,\n.vc-slide-fade-leave-active {\n  transition: opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  pointer-events: none;\n}\n\n.vc-none-leave-active,\n.vc-fade-leave-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-leave-active {\n  position: absolute !important;\n  width: 100%;\n}\n\n.vc-none-enter-from,\n.vc-none-leave-to,\n.vc-fade-enter-from,\n.vc-fade-leave-to,\n.vc-slide-left-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-right-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-up-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-down-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from,\n.vc-slide-fade-leave-to {\n  opacity: 0;\n}\n\n.vc-slide-left-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-fade-enter-from.direction-left,\n.vc-slide-fade-leave-to.direction-left {\n  -webkit-transform: translateX(var(--slide-translate));\n          transform: translateX(var(--slide-translate));\n}\n\n.vc-slide-right-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-fade-enter-from.direction-right,\n.vc-slide-fade-leave-to.direction-right {\n  -webkit-transform: translateX(calc(-1 * var(--slide-translate)));\n          transform: translateX(calc(-1 * var(--slide-translate)));\n}\n\n.vc-slide-up-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from.direction-top,\n.vc-slide-fade-leave-to.direction-top {\n  -webkit-transform: translateY(var(--slide-translate));\n          transform: translateY(var(--slide-translate));\n}\n\n.vc-slide-down-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-fade-enter-from.direction-bottom,\n.vc-slide-fade-leave-to.direction-bottom {\n  -webkit-transform: translateY(calc(-1 * var(--slide-translate)));\n          transform: translateY(calc(-1 * var(--slide-translate)));\n}\n";
  styleInject(css_248z);

  script.render = render;

  exports.default = script;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
