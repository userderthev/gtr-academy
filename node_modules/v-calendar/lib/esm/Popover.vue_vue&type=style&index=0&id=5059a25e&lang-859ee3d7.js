import { f as isFunction_1, F as _toConsumableArray, n as _objectSpread2, o as on, p as off, G as elementContains, D as omit_1 } from './helpers-4f4a4db8.js';
import { h } from 'vue';
import { createPopper } from '@popperjs/core';
import script$1 from './CustomTransition.js';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var script = {
  name: 'Popover',
  emits: ['before-show', 'after-show', 'before-hide', 'after-hide'],
  render: function render() {
    var _this = this;

    return h('div', {
      class: ['vc-popover-content-wrapper', {
        'is-interactive': this.isInteractive
      }],
      ref: 'popover'
    }, [h(script$1, {
      name: this.transition,
      appear: true,
      'on-before-enter': this.beforeEnter,
      'on-after-enter': this.afterEnter,
      'on-before-leave': this.beforeLeave,
      'on-after-leave': this.afterLeave
    }, {
      default: function _default() {
        return _this.isVisible ? h('div', {
          tabindex: -1,
          class: ['vc-popover-content', "direction-".concat(_this.direction), _this.contentClass],
          style: _this.contentStyle
        }, [_this.content, h('span', {
          class: ['vc-popover-caret', "direction-".concat(_this.direction), "align-".concat(_this.alignment)]
        })]) : null;
      }
    })]);
  },
  props: {
    id: {
      type: String,
      required: true
    },
    contentClass: String
  },
  data: function data() {
    return {
      ref: null,
      opts: null,
      data: null,
      transition: 'slide-fade',
      transitionTranslate: '15px',
      transitionDuration: '0.15s',
      placement: 'bottom',
      positionFixed: false,
      modifiers: [],
      isInteractive: false,
      isHovered: false,
      isFocused: false,
      showDelay: 0,
      hideDelay: 110,
      autoHide: false,
      popperEl: null
    };
  },
  computed: {
    content: function content() {
      var _this2 = this;

      return isFunction_1(this.$slots.default) && this.$slots.default({
        direction: this.direction,
        alignment: this.alignment,
        data: this.data,
        updateLayout: this.setupPopper,
        hide: function hide(opts) {
          return _this2.hide(opts);
        }
      }) || this.$slots.default;
    },
    contentStyle: function contentStyle() {
      return {
        '--slide-translate': this.transitionTranslate,
        '--slide-duration': this.transitionDuration
      };
    },
    popperOptions: function popperOptions() {
      return {
        placement: this.placement,
        strategy: this.positionFixed ? 'fixed' : 'absolute',
        modifiers: [{
          name: 'onUpdate',
          enabled: true,
          phase: 'afterWrite',
          fn: this.onPopperUpdate
        }].concat(_toConsumableArray(this.modifiers || [])),
        onFirstUpdate: this.onPopperUpdate
      };
    },
    isVisible: function isVisible() {
      return !!(this.ref && this.content);
    },
    direction: function direction() {
      return this.placement && this.placement.split('-')[0] || 'bottom';
    },
    alignment: function alignment() {
      var isLeftRight = this.direction === 'left' || this.direction === 'right';
      var alignment = this.placement.split('-');
      alignment = alignment.length > 1 ? alignment[1] : '';

      if (['start', 'top', 'left'].includes(alignment)) {
        return isLeftRight ? 'top' : 'left';
      }

      if (['end', 'bottom', 'right'].includes(alignment)) {
        return isLeftRight ? 'bottom' : 'right';
      }

      return isLeftRight ? 'middle' : 'center';
    }
  },
  watch: {
    opts: function opts(val, oldVal) {
      if (oldVal && oldVal.callback) {
        oldVal.callback(_objectSpread2(_objectSpread2({}, oldVal), {}, {
          completed: !val,
          reason: val ? 'Overridden by action' : null
        }));
      }
    }
  },
  mounted: function mounted() {
    this.popoverEl = this.$refs.popover;
    this.addEvents();
  },
  beforeUnmount: function beforeUnmount() {
    this.destroyPopper();
    this.removeEvents();
    this.popoverEl = null;
  },
  methods: {
    addEvents: function addEvents() {
      on(this.popoverEl, 'click', this.onClick);
      on(this.popoverEl, 'mouseover', this.onMouseOver);
      on(this.popoverEl, 'mouseleave', this.onMouseLeave);
      on(this.popoverEl, 'focusin', this.onFocusIn);
      on(this.popoverEl, 'focusout', this.onFocusOut);
      on(document, 'keydown', this.onDocumentKeydown);
      on(document, 'click', this.onDocumentClick);
      on(document, 'show-popover', this.onDocumentShowPopover);
      on(document, 'hide-popover', this.onDocumentHidePopover);
      on(document, 'toggle-popover', this.onDocumentTogglePopover);
      on(document, 'update-popover', this.onDocumentUpdatePopover);
    },
    removeEvents: function removeEvents() {
      off(this.popoverEl, 'click', this.onClick);
      off(this.popoverEl, 'mouseover', this.onMouseOver);
      off(this.popoverEl, 'mouseleave', this.onMouseLeave);
      off(this.popoverEl, 'focusin', this.onFocusIn);
      off(this.popoverEl, 'focusout', this.onFocusOut);
      off(document, 'keydown', this.onDocumentKeydown);
      off(document, 'click', this.onDocumentClick);
      off(document, 'show-popover', this.onDocumentShowPopover);
      off(document, 'hide-popover', this.onDocumentHidePopover);
      off(document, 'toggle-popover', this.onDocumentTogglePopover);
      off(document, 'update-popover', this.onDocumentUpdatePopover);
    },
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onMouseOver: function onMouseOver() {
      this.isHovered = true;
      if (this.isInteractive) this.show();
    },
    onMouseLeave: function onMouseLeave() {
      this.isHovered = false;

      if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) {
        this.hide();
      }
    },
    onFocusIn: function onFocusIn() {
      this.isFocused = true;
      if (this.isInteractive) this.show();
    },
    onFocusOut: function onFocusOut(e) {
      if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
        this.isFocused = false;
        if (!this.isHovered && this.autoHide) this.hide();
      }
    },
    onDocumentClick: function onDocumentClick(e) {
      if (!this.$refs.popover || !this.ref) {
        return;
      } // Don't hide if target element is contained within popover ref or content


      if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) {
        return;
      } // Hide the popover


      this.hide();
    },
    onDocumentKeydown: function onDocumentKeydown(e) {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.hide();
      }
    },
    onDocumentShowPopover: function onDocumentShowPopover(_ref) {
      var detail = _ref.detail;
      if (!detail.id || detail.id !== this.id) return;
      this.show(detail);
    },
    onDocumentHidePopover: function onDocumentHidePopover(_ref2) {
      var detail = _ref2.detail;
      if (!detail.id || detail.id !== this.id) return;
      this.hide(detail);
    },
    onDocumentTogglePopover: function onDocumentTogglePopover(_ref3) {
      var detail = _ref3.detail;
      if (!detail.id || detail.id !== this.id) return;
      this.toggle(detail);
    },
    onDocumentUpdatePopover: function onDocumentUpdatePopover(_ref4) {
      var detail = _ref4.detail;
      if (!detail.id || detail.id !== this.id) return;
      this.update(detail);
    },
    show: function show() {
      var _this3 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.action = 'show';
      var ref = opts.ref || this.ref;
      var delay = opts.showDelay >= 0 ? opts.showDelay : this.showDelay; // Validate options

      if (!ref) {
        if (opts.callback) {
          opts.callback({
            completed: false,
            reason: 'Invalid reference element provided'
          });
        }

        return;
      }

      clearTimeout(this.timeout);
      this.opts = opts;

      var fn = function fn() {
        Object.assign(_this3, omit_1(opts, ['id']));

        _this3.setupPopper();

        _this3.opts = null;
      };

      if (delay > 0) {
        this.timeout = setTimeout(function () {
          return fn();
        }, delay);
      } else {
        fn();
      }
    },
    hide: function hide() {
      var _this4 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.action = 'hide';
      var ref = opts.ref || this.ref;
      var delay = opts.hideDelay >= 0 ? opts.hideDelay : this.hideDelay;

      if (!this.ref || ref !== this.ref) {
        if (opts.callback) {
          opts.callback(_objectSpread2(_objectSpread2({}, opts), {}, {
            completed: false,
            reason: this.ref ? 'Invalid reference element provided' : 'Popover already hidden'
          }));
        }

        return;
      }

      var fn = function fn() {
        _this4.ref = null;
        _this4.opts = null;
      };

      clearTimeout(this.timeout);
      this.opts = opts;

      if (delay > 0) {
        this.timeout = setTimeout(fn, delay);
      } else {
        fn();
      }
    },
    toggle: function toggle() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isVisible && opts.ref === this.ref) {
        this.hide(opts);
      } else {
        this.show(opts);
      }
    },
    update: function update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(this, omit_1(opts, ['id']));
      this.setupPopper();
    },
    setupPopper: function setupPopper() {
      var _this5 = this;

      this.$nextTick(function () {
        if (!_this5.ref || !_this5.$refs.popover) return;

        if (_this5.popper && _this5.popper.reference !== _this5.ref) {
          _this5.destroyPopper();
        }

        if (!_this5.popper) {
          _this5.popper = createPopper(_this5.ref, _this5.popoverEl, _this5.popperOptions);
        } else {
          _this5.popper.update();
        }
      });
    },
    onPopperUpdate: function onPopperUpdate(args) {
      if (args.placement) {
        this.placement = args.placement;
      } else if (args.state) {
        this.placement = args.state.placement;
      }
    },
    beforeEnter: function beforeEnter(e) {
      this.$emit('before-show', e);
    },
    afterEnter: function afterEnter(e) {
      this.$emit('after-show', e);
    },
    beforeLeave: function beforeLeave(e) {
      this.$emit('before-hide', e);
    },
    afterLeave: function afterLeave(e) {
      this.destroyPopper();
      this.$emit('after-hide', e);
    },
    destroyPopper: function destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    }
  }
};

var css_248z = ".vc-popover-content-wrapper {\n  --popover-horizontal-content-offset: 8px;\n  --popover-vertical-content-offset: 10px;\n  --popover-caret-horizontal-offset: 18px;\n  --popover-caret-vertical-offset: 8px;\n\n  position: absolute;\n  display: block;\n  outline: none;\n  z-index: 10;\n}\n.vc-popover-content-wrapper:not(.is-interactive) {\n    pointer-events: none;\n}\n.vc-popover-content {\n  position: relative;\n  outline: none;\n  z-index: 10;\n  box-shadow: var(--shadow-lg);\n}\n.vc-popover-content.direction-bottom {\n    margin-top: var(--popover-vertical-content-offset);\n}\n.vc-popover-content.direction-top {\n    margin-bottom: var(--popover-vertical-content-offset);\n}\n.vc-popover-content.direction-left {\n    margin-right: var(--popover-horizontal-content-offset);\n}\n.vc-popover-content.direction-right {\n    margin-left: var(--popover-horizontal-content-offset);\n}\n.vc-popover-caret {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-top: inherit;\n  border-left: inherit;\n  background-color: inherit;\n  z-index: -1;\n}\n.vc-popover-caret.direction-bottom {\n    top: 0;\n}\n.vc-popover-caret.direction-bottom.align-left {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-bottom.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n              transform: translateX(-50%) translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-bottom.align-right {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-top {\n    top: 100%;\n}\n.vc-popover-caret.direction-top.align-left {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-top.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n              transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-top.align-right {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-left {\n    left: 100%;\n}\n.vc-popover-caret.direction-left.align-top {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-left.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);\n              transform: translateY(-50%) translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-left.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-right {\n    left: 0;\n}\n.vc-popover-caret.direction-right.align-top {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.direction-right.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n              transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.direction-right.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.align-left {\n    left: var(--popover-caret-horizontal-offset);\n}\n.vc-popover-caret.align-center {\n    left: 50%;\n}\n.vc-popover-caret.align-right {\n    right: var(--popover-caret-horizontal-offset);\n}\n.vc-popover-caret.align-top {\n    top: var(--popover-caret-vertical-offset);\n}\n.vc-popover-caret.align-middle {\n    top: 50%;\n}\n.vc-popover-caret.align-bottom {\n    bottom: var(--popover-caret-vertical-offset);\n}\n";
styleInject(css_248z);

export { script as s };
