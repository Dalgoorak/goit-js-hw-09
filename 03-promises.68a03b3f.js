!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("iU1Pc");function i(e,n){var t=Math.random()>.3,r={position:e,delay:n};return new Promise((function(e,n){t&&e(r),n(r)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.currentTarget.delay.value),t=Number(e.currentTarget.step.value),r=Number(e.currentTarget.amount.value),u=1;u<=r;u+=1)i(u,n).then((function(e){var n=e.position,t=e.delay;setTimeout((function(){return o.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(e){var n=e.position,t=e.delay;setTimeout((function(){return o.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})),n+=t}))}();
//# sourceMappingURL=03-promises.68a03b3f.js.map
