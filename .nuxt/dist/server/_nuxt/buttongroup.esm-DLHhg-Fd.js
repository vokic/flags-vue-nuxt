import { s as script$2 } from "./basecomponent.esm-L4g1N9Qh.js";
import { B as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot } from "vue";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "vue/server-renderer";
var classes = {
  root: "p-button-group p-component"
};
var ButtonGroupStyle = BaseStyle.extend({
  name: "buttongroup",
  classes
});
var script$1 = {
  name: "BaseButtonGroup",
  "extends": script$2,
  style: ButtonGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ButtonGroup",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root"),
    role: "group"
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=buttongroup.esm-DLHhg-Fd.js.map