(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [68984], {
        491751: t => {
            t.exports = {
                "common-tooltip": "common-tooltip-EJBD96zX",
                "common-tooltip--hidden": "common-tooltip--hidden-EJBD96zX",
                "common-tooltip--horizontal": "common-tooltip--horizontal-EJBD96zX",
                "common-tooltip--farther": "common-tooltip--farther-EJBD96zX",
                "common-tooltip--vertical": "common-tooltip--vertical-EJBD96zX",
                "common-tooltip-farther": "common-tooltip-farther-EJBD96zX",
                "common-tooltip--direction_normal": "common-tooltip--direction_normal-EJBD96zX",
                "common-tooltip__body": "common-tooltip__body-EJBD96zX",
                "common-tooltip__button-container": "common-tooltip__button-container-EJBD96zX",
                "common-tooltip__body--no-buttons": "common-tooltip__body--no-buttons-EJBD96zX",
                "common-tooltip__button": "common-tooltip__button-EJBD96zX",
                "common-tooltip--direction_reversed": "common-tooltip--direction_reversed-EJBD96zX",
                "common-tooltip__ear-holder": "common-tooltip__ear-holder-EJBD96zX",
                "common-tooltip__ear-holder--below": "common-tooltip__ear-holder--below-EJBD96zX",
                "common-tooltip__ear-holder--above": "common-tooltip__ear-holder--above-EJBD96zX",
                "common-tooltip__ear-holder--before": "common-tooltip__ear-holder--before-EJBD96zX",
                "common-tooltip__ear-holder--after": "common-tooltip__ear-holder--after-EJBD96zX",
                "common-tooltip__body--with-hotkey": "common-tooltip__body--with-hotkey-EJBD96zX",
                "common-tooltip__body--width_wide": "common-tooltip__body--width_wide-EJBD96zX",
                "common-tooltip__body--width_narrow": "common-tooltip__body--width_narrow-EJBD96zX",
                "common-tooltip__body--no-padding": "common-tooltip__body--no-padding-EJBD96zX",
                "common-tooltip__hotkey-block": "common-tooltip__hotkey-block-EJBD96zX",
                "common-tooltip__hotkey-block--divider": "common-tooltip__hotkey-block--divider-EJBD96zX",
                "common-tooltip__hotkey-text": "common-tooltip__hotkey-text-EJBD96zX",
                "common-tooltip__hotkey-button": "common-tooltip__hotkey-button-EJBD96zX",
                "common-tooltip__plus-sign": "common-tooltip__plus-sign-EJBD96zX"
            }
        },
        764250: (t, o, e) => {
            "use strict";
            e.d(o, {
                ActionGroup: () => n
            });
            class i {
                constructor(t, o) {
                    this._group = t;
                    const {
                        hotkey: e,
                        handler: i,
                        desc: n,
                        isDisabled: s,
                        element: l = null,
                        isRepeatAccepted: r = !1
                    } = o;
                    this.hotkey = e, this.handler = i, this.desc = n, this.element = l, this.isRepeatAccepted = r, this.isDisabled = s ? "function" == typeof s ? s : () => !0 : () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class n {
                constructor(t, o) {
                    this._actions = new Map, this._manager = t, this.modal = !(!o || !o.modal), o && (this.desc = o.desc), o && o.isDisabled ? "function" == typeof o.isDisabled ? this.isDisabled = o.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(t) {
                    let o = this._actions.get(t.hotkey);
                    o || (o = [], this._actions.set(t.hotkey, o));
                    const e = new i(this, t);
                    return o.push(e), e
                }
                remove(t) {
                    const o = this._actions.get(t.hotkey);
                    if (!o) return;
                    const e = o.findIndex((o => o === t));
                    e >= 0 && (1 === o.length ? this._actions.delete(t.hotkey) : o.splice(e, 1))
                }
                handleHotkey(t, o) {
                    const e = this._actions.get(t);
                    if (!e) return !1;
                    for (const i of e)
                        if ((!i.element || o.target && i.element.contains(o.target)) && !i.isDisabled(o)) return o.repeat && !i.isRepeatAccepted || (i.handler(o), this._callMatchedHotkeyHandler(t)), o.preventDefault(), !0;
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    for (const [, t] of this._actions)
                        for (const o of t) o.destroy();
                    this._actions.clear(), this._manager.unregisterGroup(this)
                }
                static setMatchedHotkeyHandler(t) {
                    n._matchedHotkeyHandler = t
                }
                _callMatchedHotkeyHandler(t) {
                    n._matchedHotkeyHandler && n._matchedHotkeyHandler(t)
                }
            }
        },
        163586: (t, o, e) => {
            "use strict";
            e.d(o, {
                ActionManager: () => c
            });
            var i = e(91679),
                n = e(591800),
                s = e(607423);
            class l {
                constructor(t, o) {
                    this.modifiers = t, this.code = o
                }
                altOrOptionCode() {
                    return "AltLeft" === this.code || "AltRight" === this.code
                }
                controlOrMetaCode() {
                    return n.isMacKeyboard ? "MetaLeft" === this.code || "MetaRight" === this.code || "OSLeft" === this.code || "OSRight" === this.code : "ControlLeft" === this.code || "ControlRight" === this.code
                }
            }
            class r extends i.WatchedValue {
                setValue(t, o) {
                    const e = this.value();
                    (o || void 0 === e || e.code !== t.code || e.modifiers !== t.modifiers) && super.setValue(t)
                }
            }
            class c {
                constructor() {
                    this._groups = [], this._pressedKeys = new i.WatchedValue(0), this._keyboardPressedKeysState = new r(new l(0)), this._keyDownListener = t => {
                        if (t.defaultPrevented) return;
                        const o = (0, n.hashFromEvent)(t);
                        if (this._pressedKeys.setValue(o), this._keyboardPressedKeysState.setValue(new l((0, n.modifiersFromEvent)(t), t.code)), !(0, s.isNativeUIInteraction)(o, t.target))
                            for (let e = this._groups.length; e-- > 0;) {
                                const i = this._groups[e];
                                if (!i.isDisabled()) {
                                    if (i.handleHotkey(o, t)) return;
                                    if (i.modal) return
                                }
                            }
                    }, this._keyUpListener = t => {
                        const o = (0, n.hashFromEvent)(t);
                        this._pressedKeys.setValue(o), this._keyboardPressedKeysState.setValue(new l((0, n.modifiersFromEvent)(t), ""))
                    }, this._blurEvent = () => {
                        this._pressedKeys.setValue(0), this._keyboardPressedKeysState.setValue(new l(0, ""))
                    }, this._mouseEvent = t => {
                        var o;
                        const e = (0, n.modifiersFromEvent)(t),
                            i = 255 & (null !== (o = this._pressedKeys.value()) && void 0 !== o ? o : 0);
                        this._pressedKeys.setValue(e | i)
                    }
                }
                listen(t) {
                    t.addEventListener("keydown", this._keyDownListener), t.addEventListener("keyup", this._keyUpListener), t.addEventListener("blur", this._blurEvent), t.addEventListener("mousemove", this._mouseEvent)
                }
                unlisten(t) {
                    t.removeEventListener("keydown", this._keyDownListener), t.removeEventListener("keyup", this._keyUpListener), t.removeEventListener("blur", this._blurEvent), t.removeEventListener("mousemove", this._mouseEvent)
                }
                registerGroup(t) {
                    this._groups.push(t)
                }
                unregisterGroup(t) {
                    for (let o = this._groups.length; o--;) this._groups[o] === t && this._groups.splice(o, 1)
                }
                promoteGroup(t) {
                    let o = this._groups.length - 1;
                    for (let e = this._groups.length; e--;) {
                        if (this._groups[e] === t) return void(e !== o && (this._groups.splice(e, 1), this._groups.splice(o, 0, t)));
                        this._groups[e].modal && (o = e - 1)
                    }
                }
                pressedKeys() {
                    return this._pressedKeys.readonly()
                }
                keyboardPressedKeysState() {
                    return this._keyboardPressedKeysState.readonly()
                }
            }
        },
        499994: (t, o, e) => {
            "use strict";
            e.d(o, {
                getTooltipData: () => n,
                setTooltipData: () => s
            });
            const i = new WeakMap;

            function n(t, o) {
                const e = i.get(t);
                return e instanceof Function ? e(o) : e && e[o]
            }

            function s(t, o, e) {
                if (e instanceof Function) return void i.set(t, e);
                const n = i.get(t),
                    s = void 0 === n || n instanceof Function ? {} : n;
                s[o] = e, i.set(t, s)
            }
        },
        471802: (t, o, e) => {
            "use strict";
            e.d(o, {
                getDataFromTarget: () => _,
                getTooltip: () => y,
                hideTooltip: () => b,
                setStyle: () => f,
                showTooltip: () => g,
                updateTooltipTextFromTarget: () => u
            });
            var i = e(650151),
                n = e(715050),
                s = e(881025),
                l = (e(466281), e(228609)),
                r = e(750139),
                c = e(638456);
            const a = {
                    default: "",
                    white: "theme-white",
                    chart: "theme-chart",
                    "round-shadow": "theme-round-shadow"
                },
                d = Object.keys(a);
            var m = e(499994),
                h = e(604286),
                p = e(491751);

            function u(t) {
                const o = t.hasAttribute("data-tooltip") ? t.getAttribute("data-tooltip") : t.getAttribute("title");
                return o && ((0, m.setTooltipData)(t, "text", o), t.removeAttribute("title")), (0, m.getTooltipData)(t, "text") || ""
            }

            function _(t) {
                const o = u(t),
                    e = t.getBoundingClientRect(),
                    i = {
                        h: e.height,
                        w: e.width,
                        x: e.left,
                        y: e.top
                    },
                    n = t.getAttribute("data-color-theme") || "",
                    s = t.classList.contains("common-tooltip-html"),
                    l = parseInt(t.getAttribute("data-tooltip-delay") || ""),
                    r = parseInt(t.getAttribute("data-tooltip-debounce") || "");
                let c = {
                    type: "none"
                };
                return o && (c = {
                    type: s ? "html" : "text",
                    data: o
                }), {
                    above: t.classList.contains("common-tooltip-above"),
                    below: t.classList.contains("common-tooltip-below"),
                    otl: t.classList.contains("common-tooltip-otl"),
                    otr: t.classList.contains("common-tooltip-otr"),
                    vertical: t.classList.contains("common-tooltip-vertical"),
                    hotkey: t.getAttribute("data-tooltip-hotkey"),
                    narrow: t.classList.contains("common-tooltip-narrow"),
                    wide: t.classList.contains("common-tooltip-wide"),
                    colorTheme: n,
                    tooltipDelay: l,
                    tooltipDebounce: r,
                    rect: i,
                    content: c,
                    target: t
                }
            }

            function y(t) {
                const o = (0, i.ensureNotNull)(D).cloneNode(!0),
                    e = z(o),
                    {
                        content: n
                    } = t;
                switch (n.type) {
                    case "element":
                        e.innerHTML = "", e.appendChild(n.data);
                        break;
                    case "html":
                        e.innerHTML = n.data;
                        break;
                    case "text":
                        if (t.hotkey) {
                            const t = (0, i.ensureNotNull)(B).cloneNode(!0);
                            t.innerText = n.data, e.appendChild(t)
                        } else e.innerText = n.data
                }
                if (t.hotkey) {
                    const o = "none" !== n.type,
                        s = (0, i.ensureNotNull)(E).cloneNode(!0),
                        l = (0, h.hotKeyDeserialize)(t.hotkey),
                        r = l.keys.map((t => `<span class="${p["common-tooltip__hotkey-button"]}">${t}</span>`));
                    s.innerHTML = function(t, o) {
                        const e = /{\d}|{hotkey_\d}/gi;
                        return t.replace(e, (t => {
                            const e = Number(t.match(/\d/));
                            return o[e]
                        }))
                    }(l.text, r).replace(/\s\+\s/g, `<span class="${p["common-tooltip__plus-sign"]}">+</span>`), e.classList.add(p["common-tooltip__body--with-hotkey"]), o && s.classList.add(p["common-tooltip__hotkey-block--divider"]), e.appendChild(s)
                }
                return o.addEventListener("contextmenu", l.preventDefault), o
            }

            function f(t, o) {
                const e = o.rect;
                if (!e) return;
                ! function(t, o) {
                    const e = d.includes(o) ? a[o] : "";
                    t.classList.remove(...d.map((t => a[t])).filter((t => !!t))), e && !t.classList.contains(e) && t.classList.add(e)
                }(t, o.colorTheme || "default"), o.addClass && t.classList.add(o.addClass);
                const i = z(t),
                    n = t.querySelector(`.${p["common-tooltip__button-container"]}`);
                i.classList.toggle(p["common-tooltip__body--width_wide"], Boolean(o.wide)), i.classList.toggle(p["common-tooltip__body--no-padding"], Boolean(o.noPadding)),
                    i.classList.toggle(p["common-tooltip__body--width_narrow"], Boolean(o.narrow)), i.classList.toggle(p["common-tooltip__body--no-buttons"], !0), i.style.left = v(0), i.style.width = v(i.clientWidth + (Boolean(o.noPadding) ? 0 : 2));
                const l = document.body.clientWidth,
                    m = c.CheckMobile.iOS() || c.CheckMobile.Android() || (0, c.supportTouch)() && (0, c.isMac)() ? window.innerHeight : document.body.clientHeight,
                    h = o.vertical,
                    u = o.extendMargin || h && e.w < 20 || !h && e.h < 20;
                t.classList.toggle(p["common-tooltip--farther"], u), t.classList.toggle(p["common-tooltip--vertical"], h), t.classList.toggle(p["common-tooltip--horizontal"], !h);
                const _ = function(t) {
                        return t.querySelector(`.${p["common-tooltip__ear-holder"]}`)
                    }(t),
                    y = t.offsetHeight;
                if (h) {
                    const c = 10,
                        a = m - 10,
                        d = 12,
                        h = c + d,
                        u = a - d,
                        f = (0, r.clamp)(e.y + e.h / 2, h, u) - y / 2,
                        g = f + y;
                    t.style.left = v(e.x + e.w), t.style.top = v(f), f < c ? i.style.top = n.style.top = v(c - f) : g > a && (i.style.top = n.style.top = v(a - g));
                    const {
                        right: b
                    } = (t.querySelector(":last-child") || i).getBoundingClientRect(), k = b + 10 > l;
                    t.classList.toggle(p["common-tooltip--direction_reversed"], k), t.classList.toggle(p["common-tooltip--direction_normal"], !k);
                    let w = k ? "after" : "before";
                    (0, s.isRtl)() ? (w = o.otr ? "after" : w, w = o.otl ? "before" : w) : (w = o.otr ? "before" : w, w = o.otl ? "after" : w), _.classList.toggle(p["common-tooltip__ear-holder--before"], "before" === w), _.classList.toggle(p["common-tooltip__ear-holder--after"], "after" === w), "after" === w && (t.style.left = "auto", t.style.right = v(l - e.x))
                } else {
                    const s = e.x - (i.offsetWidth - e.w) / 2,
                        r = l - t.offsetWidth - 20 <= 0 ? (l - t.offsetWidth) / 2 : 10,
                        c = l - r - t.offsetWidth,
                        a = Math.max(r, Math.min(s, c));
                    t.style.left = v(a);
                    const d = c < s;
                    t.classList.toggle(p["common-tooltip--direction_reversed"], d), t.classList.toggle(p["common-tooltip--direction_normal"], !d);
                    const h = function(t, o, e, i) {
                        if (t.above) return x(o, i) ? "above" : "below";
                        if (t.below) return function(t, o, e) {
                            return e.y + e.h + o + 10 < t
                        }(o, e, i) ? "below" : "above";
                        return x(e, i) ? "above" : "below"
                    }(o, m, y, e);
                    "above" === h ? t.style.bottom = v(m - e.y) : t.style.top = v(e.y + e.h), _.classList.add("above" === h ? p["common-tooltip__ear-holder--above"] : p["common-tooltip__ear-holder--below"]);
                    const {
                        left: u
                    } = i.getBoundingClientRect();
                    let f = Math.trunc(e.x + e.w / 2 - (u + i.clientWidth / 2));
                    t.style.left = v(a + f), t.style.width = v(i.clientWidth + n.clientWidth), f = d ? Math.max(0, f) : Math.min(0, f), n.style.left = v(-f), i.style.left = v(-f)
                }
            }

            function g(t) {
                t.classList.toggle(p["common-tooltip--hidden"], !1)
            }

            function b(t) {
                t.classList.toggle(p["common-tooltip--hidden"], !0)
            }

            function v(t) {
                return `${Math.floor(t)}px`
            }
            const k = `\n\t<div id="common-tooltip-wrapper" class="${p["common-tooltip"]}">\n\t\t<div class="${p["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${p["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${p["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                w = `\n\t<div class="${p["common-tooltip__hotkey-block"]}"></div>\n`,
                L = `\n\t<div class="${p["common-tooltip__hotkey-text"]}"></div>\n`,
                D = (0, n.parseHtmlElement)(k),
                E = (0, n.parseHtmlElement)(w),
                B = (0, n.parseHtmlElement)(L);

            function z(t) {
                return t.querySelector(`.${p["common-tooltip__body"]}`)
            }

            function x(t, o) {
                return 10 + t < o.y
            }
        },
        630112: (t, o, e) => {
            "use strict";
            e.d(o, {
                empty: () => l,
                setTooltip: () => r
            });
            const i = "tooltip-root-element";
            let n;

            function s() {
                const t = document.getElementById(i);
                t ? n = t : (n = document.createElement("div"), n.id = i, document.body.appendChild(n))
            }

            function l() {
                n && (n.innerHTML = "")
            }

            function r(t) {
                l(), n && n.appendChild(t)
            }
            "interactive" === document.readyState ? s() : document.addEventListener("DOMContentLoaded", s)
        },
        112539: (t, o, e) => {
            "use strict";
            e.d(o, {
                clearSchedule: () => l,
                scheduleHide: () => c,
                scheduleRemove: () => r,
                scheduleRender: () => a
            });
            let i = 0,
                n = 0,
                s = 0;

            function l() {
                clearTimeout(i), clearTimeout(n), clearTimeout(s)
            }

            function r(t, o) {
                s = setTimeout(t, o)
            }

            function c(t, o) {
                n = setTimeout(t, o)
            }

            function a(t, o) {
                i = setTimeout(t, o)
            }
        },
        228609: (t, o, e) => {
            "use strict";

            function i(t) {
                t.preventDefault()
            }
            e.d(o, {
                preventDefault: () => i,
                preventDefaultForContextMenu: () => s
            });
            const n = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function s(t) {
                const o = t.target;
                o && !o.closest(n.join(", ")) && t.preventDefault()
            }
        }
    }
]);