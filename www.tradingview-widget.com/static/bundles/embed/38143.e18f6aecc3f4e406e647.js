(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [38143, 73105], {
        489928: e => {
            e.exports = {}
        },
        972525: e => {
            e.exports = {}
        },
        491751: e => {
            e.exports = {
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
        336748: (e, o, t) => {
            "use strict";
            t.d(o, {
                colorsPalette: () => h
            });
            var r = t(123420),
                s = t(800579),
                l = t(650151);
            const i = { ...r,
                    ...s
                },
                n = {},
                a = Object.keys(i).length,
                c = /^#(([a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i;

            function d(e, o = [], t = i) {
                const r = t[e];
                if (!r) return null;
                if (c.test(r)) return r;
                const s = r;
                return o.push(e), -1 !== o.indexOf(s) ? (console.warn("Colors definitions cycled"), r) : o.length > a ? (console.warn("Too many variables-link in HEX-color search: " + o[0]), null) : d(s, o, t)
            }
            Object.keys(i).forEach((e => {
                const o = d(e);
                n[e] = (0, l.ensureNotNull)(o)
            }));
            const h = n
        },
        790188: (e, o, t) => {
            "use strict";
            t.d(o, {
                colorsPalette: () => r.colorsPalette
            });
            var r = t(336748)
        },
        499994: (e, o, t) => {
            "use strict";
            t.d(o, {
                getTooltipData: () => s,
                setTooltipData: () => l
            });
            const r = new WeakMap;

            function s(e, o) {
                const t = r.get(e);
                return t instanceof Function ? t(o) : t && t[o]
            }

            function l(e, o, t) {
                if (t instanceof Function) return void r.set(e, t);
                const s = r.get(e),
                    l = void 0 === s || s instanceof Function ? {} : s;
                l[o] = t, r.set(e, l)
            }
        },
        471802: (e, o, t) => {
            "use strict";
            t.d(o, {
                getDataFromTarget: () => p,
                getTooltip: () => _,
                hideTooltip: () => y,
                setStyle: () => g,
                showTooltip: () => b
            });
            var r = t(650151),
                s = t(715050),
                l = t(881025),
                i = (t(466281), t(228609)),
                n = t(750139),
                a = t(638456);
            const c = {
                    default: "",
                    white: "theme-white",
                    chart: "theme-chart",
                    "round-shadow": "theme-round-shadow"
                },
                d = Object.keys(c);
            var h = t(499994),
                u = t(604286),
                m = t(491751);

            function p(e) {
                const o = function(e) {
                        const o = e.hasAttribute("data-tooltip") ? e.getAttribute("data-tooltip") : e.getAttribute("title");
                        return o && ((0, h.setTooltipData)(e, "text", o), e.removeAttribute("title")), (0, h.getTooltipData)(e, "text") || ""
                    }(e),
                    t = e.getBoundingClientRect(),
                    r = {
                        h: t.height,
                        w: t.width,
                        x: t.left,
                        y: t.top
                    },
                    s = e.getAttribute("data-color-theme") || "",
                    l = e.classList.contains("common-tooltip-html"),
                    i = parseInt(e.getAttribute("data-tooltip-delay") || ""),
                    n = parseInt(e.getAttribute("data-tooltip-debounce") || "");
                let a = {
                    type: "none"
                };
                return o && (a = {
                    type: l ? "html" : "text",
                    data: o
                }), {
                    above: e.classList.contains("common-tooltip-above"),
                    below: e.classList.contains("common-tooltip-below"),
                    otl: e.classList.contains("common-tooltip-otl"),
                    otr: e.classList.contains("common-tooltip-otr"),
                    vertical: e.classList.contains("common-tooltip-vertical"),
                    hotkey: e.getAttribute("data-tooltip-hotkey"),
                    narrow: e.classList.contains("common-tooltip-narrow"),
                    wide: e.classList.contains("common-tooltip-wide"),
                    colorTheme: s,
                    tooltipDelay: i,
                    tooltipDebounce: n,
                    rect: r,
                    content: a,
                    target: e
                }
            }

            function _(e) {
                const o = (0, r.ensureNotNull)(C).cloneNode(!0),
                    t = F(o),
                    {
                        content: s
                    } = e;
                switch (s.type) {
                    case "element":
                        t.innerHTML = "", t.appendChild(s.data);
                        break;
                    case "html":
                        t.innerHTML = s.data;
                        break;
                    case "text":
                        if (e.hotkey) {
                            const e = (0, r.ensureNotNull)(w).cloneNode(!0);
                            e.innerText = s.data, t.appendChild(e)
                        } else t.innerText = s.data
                }
                if (e.hotkey) {
                    const o = "none" !== s.type,
                        l = (0, r.ensureNotNull)(k).cloneNode(!0),
                        i = (0, u.hotKeyDeserialize)(e.hotkey),
                        n = i.keys.map((e => `<span class="${m["common-tooltip__hotkey-button"]}">${e}</span>`));
                    l.innerHTML = function(e, o) {
                        const t = /{\d}|{hotkey_\d}/gi;
                        return e.replace(t, (e => {
                            const t = Number(e.match(/\d/));
                            return o[t]
                        }))
                    }(i.text, n).replace(/\s\+\s/g, `<span class="${m["common-tooltip__plus-sign"]}">+</span>`), t.classList.add(m["common-tooltip__body--with-hotkey"]), o && l.classList.add(m["common-tooltip__hotkey-block--divider"]), t.appendChild(l)
                }
                return o.addEventListener("contextmenu", i.preventDefault), o
            }

            function g(e, o) {
                const t = o.rect;
                if (!t) return;
                ! function(e, o) {
                    const t = d.includes(o) ? c[o] : "";
                    e.classList.remove(...d.map((e => c[e])).filter((e => !!e))), t && !e.classList.contains(t) && e.classList.add(t)
                }(e, o.colorTheme || "default"), o.addClass && e.classList.add(o.addClass);
                const r = F(e),
                    s = e.querySelector(`.${m["common-tooltip__button-container"]}`);
                r.classList.toggle(m["common-tooltip__body--width_wide"], Boolean(o.wide)), r.classList.toggle(m["common-tooltip__body--no-padding"], Boolean(o.noPadding)), r.classList.toggle(m["common-tooltip__body--width_narrow"], Boolean(o.narrow)), r.classList.toggle(m["common-tooltip__body--no-buttons"], !0), r.style.left = v(0), r.style.width = v(r.clientWidth + (Boolean(o.noPadding) ? 0 : 2));
                const i = document.body.clientWidth,
                    h = a.CheckMobile.iOS() || a.CheckMobile.Android() || (0, a.supportTouch)() && (0,
                        a.isMac)() ? window.innerHeight : document.body.clientHeight,
                    u = o.vertical,
                    p = o.extendMargin || u && t.w < 20 || !u && t.h < 20;
                e.classList.toggle(m["common-tooltip--farther"], p), e.classList.toggle(m["common-tooltip--vertical"], u), e.classList.toggle(m["common-tooltip--horizontal"], !u);
                const _ = function(e) {
                        return e.querySelector(`.${m["common-tooltip__ear-holder"]}`)
                    }(e),
                    g = e.offsetHeight;
                if (u) {
                    const a = 10,
                        c = h - 10,
                        d = 12,
                        u = a + d,
                        p = c - d,
                        b = (0, n.clamp)(t.y + t.h / 2, u, p) - g / 2,
                        y = b + g;
                    e.style.left = v(t.x + t.w), e.style.top = v(b), b < a ? r.style.top = s.style.top = v(a - b) : y > c && (r.style.top = s.style.top = v(c - y));
                    const {
                        right: f
                    } = (e.querySelector(":last-child") || r).getBoundingClientRect(), x = f + 10 > i;
                    e.classList.toggle(m["common-tooltip--direction_reversed"], x), e.classList.toggle(m["common-tooltip--direction_normal"], !x);
                    let N = x ? "after" : "before";
                    (0, l.isRtl)() ? (N = o.otr ? "after" : N, N = o.otl ? "before" : N) : (N = o.otr ? "before" : N, N = o.otl ? "after" : N), _.classList.toggle(m["common-tooltip__ear-holder--before"], "before" === N), _.classList.toggle(m["common-tooltip__ear-holder--after"], "after" === N), "after" === N && (e.style.left = "auto", e.style.right = v(i - t.x))
                } else {
                    const l = t.x - (r.offsetWidth - t.w) / 2,
                        n = i - e.offsetWidth - 20 <= 0 ? (i - e.offsetWidth) / 2 : 10,
                        a = i - n - e.offsetWidth,
                        c = Math.max(n, Math.min(l, a));
                    e.style.left = v(c);
                    const d = a < l;
                    e.classList.toggle(m["common-tooltip--direction_reversed"], d), e.classList.toggle(m["common-tooltip--direction_normal"], !d);
                    const u = function(e, o, t, r) {
                        if (e.above) return E(o, r) ? "above" : "below";
                        if (e.below) return function(e, o, t) {
                            return t.y + t.h + o + 10 < e
                        }(o, t, r) ? "below" : "above";
                        return E(t, r) ? "above" : "below"
                    }(o, h, g, t);
                    "above" === u ? e.style.bottom = v(h - t.y) : e.style.top = v(t.y + t.h), _.classList.add("above" === u ? m["common-tooltip__ear-holder--above"] : m["common-tooltip__ear-holder--below"]);
                    const {
                        left: p
                    } = r.getBoundingClientRect();
                    let b = Math.trunc(t.x + t.w / 2 - (p + r.clientWidth / 2));
                    e.style.left = v(c + b), e.style.width = v(r.clientWidth + s.clientWidth), b = d ? Math.max(0, b) : Math.min(0, b), s.style.left = v(-b), r.style.left = v(-b)
                }
            }

            function b(e) {
                e.classList.toggle(m["common-tooltip--hidden"], !1)
            }

            function y(e) {
                e.classList.toggle(m["common-tooltip--hidden"], !0)
            }

            function v(e) {
                return `${Math.floor(e)}px`
            }
            const f = `\n\t<div id="common-tooltip-wrapper" class="${m["common-tooltip"]}">\n\t\t<div class="${m["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${m["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${m["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                x = `\n\t<div class="${m["common-tooltip__hotkey-block"]}"></div>\n`,
                N = `\n\t<div class="${m["common-tooltip__hotkey-text"]}"></div>\n`,
                C = (0, s.parseHtmlElement)(f),
                k = (0, s.parseHtmlElement)(x),
                w = (0, s.parseHtmlElement)(N);

            function F(e) {
                return e.querySelector(`.${m["common-tooltip__body"]}`)
            }

            function E(e, o) {
                return 10 + e < o.y
            }
        },
        604286: (e, o, t) => {
            "use strict";
            t.d(o, {
                hotKeyDeserialize: () => s
            });
            var r = t(433524);

            function s(e) {
                return JSON.parse((0, r.decodeHTMLEntities)(e))
            }
        },
        630112: (e, o, t) => {
            "use strict";
            t.d(o, {
                empty: () => i,
                setTooltip: () => n
            });
            const r = "tooltip-root-element";
            let s;

            function l() {
                const e = document.getElementById(r);
                e ? s = e : (s = document.createElement("div"), s.id = r, document.body.appendChild(s))
            }

            function i() {
                s && (s.innerHTML = "")
            }

            function n(e) {
                i(), s && s.appendChild(e)
            }
            "interactive" === document.readyState ? l() : document.addEventListener("DOMContentLoaded", l)
        },
        112539: (e, o, t) => {
            "use strict";
            t.d(o, {
                clearSchedule: () => i,
                scheduleHide: () => a,
                scheduleRemove: () => n,
                scheduleRender: () => c
            });
            let r = 0,
                s = 0,
                l = 0;

            function i() {
                clearTimeout(r), clearTimeout(s), clearTimeout(l)
            }

            function n(e, o) {
                l = setTimeout(e, o)
            }

            function a(e, o) {
                s = setTimeout(e, o)
            }

            function c(e, o) {
                r = setTimeout(e, o)
            }
        },
        572570: (e, o, t) => {
            "use strict";

            function r(e) {
                if (null != e && "boolean" != typeof e && !isNaN(Number(e))) return Number(e)
            }
            t.d(o, {
                toNumberOrUndefined: () => r
            })
        },
        780792: (e, o, t) => {
            "use strict";
            t.d(o, {
                AbstractIndicator: () => n
            });
            var r = t(338619),
                s = t(79342),
                l = t(625545);
            t(673747);
            const i = (0, r.getLogger)("GUI.Blocks.AbstractIndicator");
            class n {
                constructor(e) {
                    this._classSuffix = "", this._quoteSessionPrefix = "abstract-indicator", this._shortMode = !1, this._showTooltip = !0, this._subscribed = !1, this._tooltipType = "custom", this._lastTooltipText = "", this._quoteSession = e.quoteSession
                }
                getValue() {
                    return this._value
                }
                getTooltipText() {
                    return this._labelMap[this._value] || ""
                }
                getLabel() {
                    return this._labelMap[this._value] || ""
                }
                getElement() {
                    return this._el
                }
                update(e, o) {
                    this._updateValue(e, o), this._render()
                }
                setTooltipEnabled(e = !1) {
                    this._showTooltip !== e && (this._showTooltip = e, this._renderTooltip())
                }
                enableShortMode() {
                    !0 !== this._shortMode && (this._shortMode = !0, this._render())
                }
                disableShortMode() {
                    !1 !== this._shortMode && (this._shortMode = !1, this._render())
                }
                isShortModeEnabled() {
                    return this._shortMode
                }
                start() {
                    !this._subscribed && this._symbolName && (this._quoteSession || (this._quoteSession = (0, l.getQuoteSessionInstance)("simple")), this._quoteSession.subscribe(this._getQuoteSessionId(), this._symbolName, this.update.bind(this)), this._subscribed = !0)
                }
                stop() {
                    this._subscribed && this._quoteSession && this._symbolName && (this._quoteSession.unsubscribe(this._getQuoteSessionId(), this._symbolName), this._subscribed = !1)
                }
                setSessionStatusIcon(e) {
                    this._sessionStatusIcon !== e && (this._sessionStatusIcon = e, this._render())
                }
                _init(e) {
                    this._el = e.el ? e.el : document.createElement("span"), this._el.innerHTML = "", this._classMap = e.classMap, this._iconClassMap = e.iconClassMap, this._labelMap = e.labelMap, this._showTooltip = e.showTooltip, this._classSuffix = e.classSuffix, this._symbolName = e.symbol, this._sessionStatusIcon = e.sessionStatusIcon, this._onValueChange = e.onValueChange, e.tooltipType && (this._tooltipType = e.tooltipType), this._quoteSessionGUID = (0, s.guid)(), !0 === e.short && this.enableShortMode(), e.data && this._updateValue(e.data)
                }
                _clearClasses() {
                    Object.values(this._classMap).map((e => {
                        this._el.classList.remove(`${e}`), this._el.classList.remove(`${e}${this._classSuffix}`)
                    }))
                }
                _render() {
                    this._renderClasses(), this._renderTooltip(), this._renderLabel()
                }
                _renderLabel() {
                    this._el.textContent = this.getLabel()
                }
                _updateValue(e, o) {
                    var t;
                    const r = this._getValueFromData(e);
                    (o || r !== this._value) && (this._value = r, null === (t = this._onValueChange) || void 0 === t || t.call(this, this._value))
                }
                _renderClasses() {
                    const e = this._el.classList;
                    e.add(this._componentClass, this._componentClass + this._classSuffix);
                    const o = this._classMap[this._value];
                    for (const t in this._classMap) {
                        const r = this._classMap[t];
                        r && (r === o ? (e.add(r, r + this._classSuffix), this._sessionStatusIcon && e.add(r + "__withIcon")) : (e.remove(r, r + this._classSuffix), this._sessionStatusIcon && e.remove(r + "__withIcon")))
                    }!o && this._value && i.logWarn(`no className for status ${this._value}`)
                }
                _renderTooltip() {
                    const e = this._showTooltip ? this.getTooltipText() : "";
                    e !== this._lastTooltipText && (this._lastTooltipText = e, this._el.setAttribute("title", e), "custom" === this._tooltipType && this._el.classList.toggle("apply-common-tooltip", this._showTooltip))
                }
                _getQuoteSessionId() {
                    return `${this._quoteSessionPrefix}.${this._quoteSessionGUID}`
                }
            }
        },
        719240: (e, o, t) => {
            "use strict";
            t.d(o, {
                DataModeIndicator: () => a
            });
            var r = t(444372),
                s = (t(466281), t(489928), t(780792));
            const l = {
                connecting: "tv-data-mode--connecting",
                delayed: "tv-data-mode--delayed",
                delayed_streaming: "tv-data-mode--delayed",
                endofday: "tv-data-mode--endofday",
                forbidden: "tv-data-mode--forbidden",
                realtime: "tv-data-mode--realtime",
                snapshot: "tv-data-mode--snapshot",
                loading: "tv-data-mode--loading",
                replay: "tv-data-mode--replay"
            };

            function i() {
                return {
                    connecting: r.t(null, {
                        context: "data_mode_connecting_letter"
                    }, t(167040)),
                    delayed: r.t(null, {
                        context: "data_mode_delayed_letter"
                    }, t(800919)),
                    delayed_streaming: r.t(null, {
                        context: "data_mode_delayed_streaming_letter"
                    }, t(933088)),
                    endofday: r.t(null, {
                        context: "data_mode_end_of_day_letter"
                    }, t(918400)),
                    forbidden: r.t(null, {
                        context: "data_mode_forbidden_letter"
                    }, t(514149)),
                    realtime: r.t(null, {
                        context: "data_mode_realtime_letter"
                    }, t(650940)),
                    snapshot: r.t(null, {
                        context: "data_mode_snapshot_letter"
                    }, t(756757)),
                    loading: "",
                    replay: r.t(null, {
                        context: "data_mode_replay_letter"
                    }, t(745540))
                }
            }
            const n = {
                streaming: "realtime"
            };
            class a extends s.AbstractIndicator {
                constructor(e) {
                    super(e), this._quoteSessionPrefix = "data-mode-indicator", this._componentClass = "tv-data-mode", this._init(e)
                }
                getLabel() {
                    return !0 === this._shortMode ? this._shortLabelMap[this._value] || "" : super.getLabel()
                }
                setMode(e, o) {
                    this.update({
                        values: {
                            update_mode: e,
                            update_mode_seconds: o
                        }
                    })
                }
                hide() {
                    this._el.classList.add("i-hidden")
                }
                show() {
                    this._el.classList.remove("i-hidden")
                }
                getTooltipText() {
                    let e = "";
                    const o = this.getValue();
                    if ("" === o) return e;
                    switch (o) {
                        case "delayed":
                            e = r.t(null, void 0, t(369539));
                            break;
                        case "delayed_streaming":
                            e = r.t(null, void 0, t(167476));
                            break;
                        default:
                            e = this._labelMap[o] || e
                    }
                    return ["delayed", "delayed_streaming"].includes(o) && (e = e.format({
                        number: String(Math.round(this._modeInterval / 60))
                    })), e
                }
                _init(e = {}) {
                    const o = Object.assign({}, {
                        classMap: l,
                        classSuffix: "",
                        data: {
                            values: {
                                update_mode: "connecting"
                            }
                        },
                        labelMap: {
                            connecting: r.t(null, void 0, t(366891)),
                            delayed: r.t(null, void 0, t(739688)),
                            delayed_streaming: r.t(null, void 0, t(739688)),
                            endofday: r.t(null, void 0, t(328304)),
                            forbidden: r.t(null, void 0, t(909161)),
                            realtime: r.t(null, void 0, t(303058)),
                            snapshot: r.t(null, void 0, t(988408)),
                            loading: "",
                            replay: r.t(null, void 0, t(38822))
                        },
                        modeInterval: 600,
                        short: !1,
                        shortLabelMap: i(),
                        showTooltip: !0,
                        tooltipType: "custom"
                    }, e);
                    this._modeInterval = o.modeInterval || 600, this._shortLabelMap = o.shortLabelMap || i(), super._init(o), this._render()
                }
                _getValueFromData(e) {
                    let o;
                    return o = void 0 !== e.values && void 0 !== e.values.update_mode ? e.values.update_mode : this.getValue(), n[o] || o
                }
                _updateValue(e, o) {
                    void 0 !== e.values && void 0 !== e.values.update_mode_seconds && (this._modeInterval = e.values.update_mode_seconds), super._updateValue(e, o)
                }
            }
        },
        600303: (e, o, t) => {
            "use strict";
            t.d(o, {
                MarketStatusIndicator: () => n
            });
            var r = t(444372),
                s = (t(972525), t(780792));
            const l = {
                    invalid: "tv-market-status--invalid",
                    market: "tv-market-status--market",
                    out_of_session: "tv-market-status--out-of-session",
                    post_market: "tv-market-status--post-market",
                    pre_market: "tv-market-status--pre-market",
                    loading: "tv-market-status--loading",
                    holiday: "tv-market-status--holiday",
                    replay: "tv-market-status--replay",
                    delisted: "tv-market-status--delisted"
                },
                i = {
                    invalid: "tv-market-status__icon--invalid",
                    market: "tv-market-status__icon--market",
                    out_of_session: "tv-market-status__icon--out-of-session",
                    post_market: "tv-market-status__icon--post-market",
                    pre_market: "tv-market-status__icon--pre-market",
                    loading: "tv-market-status__icon--loading",
                    holiday: "tv-market-status__icon--holiday",
                    replay: "tv-market-status__icon--replay",
                    delisted: "tv-market-status__icon--delisted"
                };
            class n extends s.AbstractIndicator {
                constructor(e) {
                    super(e), this._quoteSessionPrefix = "market-status-indicator", this._componentClass = "tv-market-status", this._extraTitle = "", this._init(e)
                }
                setStatus(e, o) {
                    const t = {
                        values: {
                            current_session: "delisted" === this.getValue() ? "delisted" : e
                        }
                    };
                    this.update(t, o)
                }
                getTooltipText() {
                    let e = super.getTooltipText();
                    return "" === e || "" !== this._extraTitle && (e = `${e}, ${this._extraTitle}`), e
                }
                setExtraTitle(e) {
                    this._extraTitle = e
                }
                reset() {
                    this._clearClasses(), this._labelEl.textContent = "", this._extraTitle = "", this._el.setAttribute("title", ""), this._value = ""
                }
                enableShortMode(e = !0) {
                    void 0 !== this._labelEl && this._labelEl.classList.add("i-hidden"), super.enableShortMode()
                }
                disableShortMode() {
                    void 0 !== this._labelEl && this._labelEl.classList.remove("i-hidden"), super.disableShortMode()
                }
                _renderLabel() {
                    this._labelEl.textContent = this.getLabel()
                }
                _getValueFromData(e) {
                    var o, t, r;
                    return (null === (t = null === (o = e.values) || void 0 === o ? void 0 : o.typespecs) || void 0 === t ? void 0 : t.includes("discontinued")) ? "delisted" : void 0 !== (null === (r = e.values) || void 0 === r ? void 0 : r.current_session) ? e.values.current_session : this.getValue()
                }
                _render() {
                    this._renderLabelElement(), this._sessionStatusIcon ? this._renderIconElement() : this._renderDotElement(), super._render()
                }
                _init(e) {
                    const o = Object.assign({}, function() {
                        const e = {
                            invalid: r.t(null, void 0, t(652969)),
                            market: r.t(null, void 0, t(241410)),
                            out_of_session: r.t(null, void 0, t(762464)),
                            post_market: r.t(null, void 0, t(673897)),
                            pre_market: r.t(null, void 0, t(236018)),
                            loading: r.t(null, void 0, t(786726)),
                            holiday: r.t(null, void 0, t(987845)),
                            delisted: r.t(null, void 0, t(254602)),
                            replay: ""
                        };
                        return {
                            classMap: l,
                            iconClassMap: i,
                            classSuffix: "",
                            data: {},
                            extraTitle: "",
                            labelMap: e,
                            short: !1,
                            showTooltip: !0,
                            tooltipType: "custom"
                        }
                    }(), e);
                    super._init(o), this.setExtraTitle(o.extraTitle), this._render()
                }
                _renderLabelElement() {
                    void 0 === this._labelEl && (this._labelEl = document.createElement("span"), this._labelEl.classList.add(`${this._componentClass}__label`), this._labelEl.classList.add(`${this._componentClass}__label${this._classSuffix}`), this._el.appendChild(this._labelEl))
                }
                _renderDotElement() {
                    this._el.contains(this._iconEl) && this._el.removeChild(this._iconEl), void 0 === this._dotEl && (this._dotEl = document.createElement("span"), this._dotEl.classList.add(`${this._componentClass}__dot`), this._dotEl.classList.add(`${this._componentClass}__dot${this._classSuffix}`), this._el.appendChild(this._dotEl))
                }
                _renderIconElement() {
                    this._el.contains(this._dotEl) && this._el.removeChild(this._dotEl), void 0 === this._iconEl && this._value && (this._iconEl = document.createElement("span"), this._iconEl.classList.add(`${this._componentClass}__icon`), this._iconEl.classList.add(`${this._componentClass}__icon${this._classSuffix}`), this._el.appendChild(this._iconEl))
                }
            }
        },
        40763: (e, o, t) => {
            "use strict";

            function r(e) {
                return e.endsWith("_dly")
            }

            function s(e) {
                return !!e && (!(void 0 === e.symbolname || !r(e.symbolname)) || Boolean("permission_denied" === e.status && e.values && void 0 !== e.values.alternative && r(e.values.alternative)))
            }
            t.d(o, {
                isSfQuoteData: () => s
            })
        },
        849204: (e, o, t) => {
            "use strict";
            t.r(o), t.d(o, {
                LogoSize: () => r,
                LogoUrlResolver: () => i,
                getLogoUrlResolver: () => a
            });
            var r, s = t(650151),
                l = t(588948);
            ! function(e) {
                e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large"
            }(r || (r = {}));
            class i {
                constructor(e) {
                    (0, s.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getSymbolLogoUrl(e, o) {
                    switch ((0, s.assert)("" !== e, "logo id must be a non-empty string"), o) {
                        case r.Medium:
                            return this._baseUrl + `${e}.svg`;
                        case r.Large:
                            return this._baseUrl + `${e}--big.svg`
                    }
                }
                getCountryFlagUrl(e, o) {
                    return this.getSymbolLogoUrl("country/" + e, o)
                }
                getCryptoLogoUrl(e, o) {
                    return this.getSymbolLogoUrl("crypto/" + e, o)
                }
                getProviderLogoUrl(e, o) {
                    return this.getSymbolLogoUrl("provider/" + e, o)
                }
                getSourceLogoUrl(e, o) {
                    return this.getSymbolLogoUrl("source/" + e, o)
                }
                getBlockchainContractLogoUrl(e, o) {
                    return this.getSymbolLogoUrl("blockchain/" + e, o)
                }
            }
            let n;

            function a() {
                return function() {
                    if (!n) {
                        const e = (0, l.getInitData)(),
                            o = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                        n = new i(o)
                    }
                    return n
                }()
            }
        },
        416234: (e, o, t) => {
            "use strict";
            t.d(o, {
                SymbolGroup: () => r
            });
            var r;
            t(466281), t(444372);
            ! function(e) {
                e.NseFlag = "nse_free", e.McxFlag = "mcx_free"
            }(r || (r = {}))
        },
        345848: (e, o, t) => {
            "use strict";
            t.d(o, {
                trackEvent: () => i
            });
            t(251954);
            var r = t(764829);
            const s = (0, t(338619).getLogger)("Common.TrackEvent");
            let l = !1;
            const i = (e, o, t) => {
                if (l) return;
                let i = (e ? e + ":" : "") + o;
                t && (i += " " + t), s.logNormal(i), r.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", o, {
                    event_category: e,
                    event_label: t
                })
            };
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = i)
        },
        397566: (e, o, t) => {
            "use strict";
            t.d(o, {
                NumericFormatter: () => l
            });
            var r = t(676323),
                s = t(96900);
            class l {
                constructor(e = {}) {
                    this._options = e
                }
                format(e, o) {
                    if (!Number.isFinite(e)) return String(e);
                    const {
                        ignoreLocaleNumberFormat: t,
                        precision: i,
                        minPrecision: n
                    } = this._options, a = (0, s.getNumberFormat)(t || (null == o ? void 0 : o.ignoreLocaleNumberFormat));
                    return void 0 === i ? l._formatNoEImpl(e, a, i, n) : (0, r.formatNumber)(e, a, i, void 0, n)
                }
                parse(e, o) {
                    const {
                        ignoreLocaleNumberFormat: t,
                        precision: l
                    } = this._options, i = (0, s.getNumberFormat)(t || (null == o ? void 0 : o.ignoreLocaleNumberFormat));
                    let n = (0, r.parseNumber)(e, i);
                    return Number.isFinite(n) ? (l && (n = +n.toFixed(l)), {
                        res: !0,
                        value: n
                    }) : {
                        res: !1
                    }
                }
                static formatNoE(e, o) {
                    return this._formatNoEImpl(e, o)
                }
                static _formatNoEImpl(e, o, t, s) {
                    return Number.isFinite(e) ? (o = null != o ? o : {
                        groupingSeparator: "",
                        decimalSign: "."
                    }, (0, r.formatNumber)(e, o, t, !0, s)) : String(e)
                }
            }
        },
        142567: (e, o, t) => {
            "use strict";
            t.d(o, {
                PercentageFormatter: () => l
            });
            var r = t(735211),
                s = t(881025);
            class l extends r.PriceFormatter {
                constructor(e = {}) {
                    void 0 !== e.decimalPlaces && (e.priceScale = Math.pow(10, e.decimalPlaces)), super(e), this.type = "percentage"
                }
                state() {
                    return { ...super.state(),
                        percent: !0
                    }
                }
                parse(e, o) {
                    return e = e.replace("%", ""), super.parse(e, o)
                }
                format(e, o = {}) {
                    const {
                        useRtlFormat: t = !0
                    } = o, r = super.format(e, { ...o,
                        useRtlFormat: !1
                    }) + "%";
                    return t ? (0, s.forceLTRStr)(r) : r
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new l(e)
                }
            }
        },
        359268: (e, o, t) => {
            "use strict";
            t.d(o, {
                PriceColorer: () => r
            });
            var r, s = t(930203),
                l = t(790188);
            ! function(e) {
                function o(e, o) {
                    return 0 === e ? o && void 0 !== o.neutral ? o.neutral : s.color.black70 : e > 0 ? o && void 0 !== o.up ? o.up : l.colorsPalette["color-success"] : o && void 0 !== o.down ? o.down : l.colorsPalette["color-danger"]
                }
                e.formatSign = o, e.formatDiff = function(e, t) {
                    return o(t - e)
                }, e.domDifference = function(e, o, t = 0, r = "", s = "") {
                    function l(e) {
                        const o = document.createElement("span");
                        return o.innerHTML = e, o
                    }
                    const i = document.createElement("div");
                    if (!t) return i.appendChild(l(e)), i;
                    const n = e + "",
                        a = o + "";
                    let c = null;
                    if (n.length === a.length) {
                        for (let e = 0; e < n.length; e++)
                            if (n.charAt(e) !== a.charAt(e)) {
                                c = e;
                                break
                            }
                    } else c = Number("0");
                    if (null === c) return i.appendChild(l(n)), i;
                    const d = l(n.substring(0, c)),
                        h = document.createElement("span");
                    return h.className = t < 0 ? r : s, h.appendChild(l(n.substring(c))), i.appendChild(d), i.appendChild(h), i
                }
            }(r || (r = {}))
        },
        957365: (e, o, t) => {
            "use strict";
            t.d(o, {
                PLACE_HOLDER: () => i,
                VolumeFormatter: () => n
            });
            var r = t(444372),
                s = t(397566),
                l = t(124829);
            const i = "---";
            class n {
                constructor(e = {}) {
                    this.type = "volume";
                    const {
                        precision: o,
                        minPrecision: t,
                        dimensionPrecision: r,
                        dimensionMinPrecision: l,
                        ignoreLocaleNumberFormat: i,
                        removeSpaceBeforeDimension: n
                    } = e;
                    this._precision = null != o ? o : 0, this._formatter = new s.NumericFormatter({
                        ignoreLocaleNumberFormat: i,
                        precision: this._precision,
                        minPrecision: null != t ? t : 0
                    }), this._dimensionPrecision = null != r ? r : 3, this._dimensionFormatter = new s.NumericFormatter({
                        ignoreLocaleNumberFormat: i,
                        precision: this._dimensionPrecision,
                        minPrecision: null != l ? l : 0
                    }), this._fractionalValues = void 0 !== o && o > 0, this._spaceBeforeDimension = n ? "" : " ", this._options = e
                }
                state() {
                    const {
                        ignoreLocaleNumberFormat: e,
                        ...o
                    } = this._options;
                    return o
                }
                format(e, o) {
                    if (!(0, l.isNumber)(e)) return i;
                    if (Math.abs(e) >= 1e100) return r.t(null, void 0, t(696935));
                    const s = Math.abs(e);
                    let n = "";
                    (e = s < 1e3 ? +e.toFixed(this._precision) : s < 1e6 ? 1e3 * +(e / 1e3).toFixed(this._dimensionPrecision) : s < 1e9 ? 1e6 * +(e / 1e6).toFixed(this._dimensionPrecision) : s < 1e12 ? 1e9 * +(e / 1e9).toFixed(this._dimensionPrecision) : 1e12 * +(e / 1e12).toFixed(this._dimensionPrecision)) < 0 ? n = "−" : e > 0 && (null == o ? void 0 : o.signPositive) && (n = "+"), e = Math.abs(e);
                    const a = !!(null == o ? void 0 : o.ignoreLocaleNumberFormat);
                    let c, d;
                    return e < 1e3 ? c = this._formatNumber(e, a, this._formatter) : e < 1e6 ? (c = this._formatNumber(e / 1e3, a, this._dimensionFormatter), d = "K") : e < 1e9 ? (c = this._formatNumber(e / 1e6, a, this._dimensionFormatter), d = "M") : e < 1e12 ? (c = this._formatNumber(e / 1e9, a, this._dimensionFormatter), d = "B") : (c = this._formatNumber(e / 1e12, a, this._dimensionFormatter), d = "T"), d ? `${n}${c}${this._spaceBeforeDimension}${d}` : `${n}${c}`
                }
                parse(e, o) {
                    if ("---" === e) return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                    const t = {
                            K: 1e3,
                            M: 1e6,
                            B: 1e9,
                            T: 1e12
                        },
                        r = (e = e.replace("−", "-")).slice(-1);
                    if (t.hasOwnProperty(r)) {
                        const s = this._formatter.parse(e.slice(0, -1).trim(), o),
                            i = s.res ? s.value : NaN;
                        return (0, l.isNumber)(i) ? {
                            res: !0,
                            value: i * t[r]
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    } {
                        const t = this._formatter.parse(e.trim(), o),
                            r = t.res ? t.value : NaN;
                        return (0, l.isNumber)(r) ? {
                            res: !0,
                            value: r
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    }
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new n(e)
                }
                _formatNumber(e, o, t) {
                    if (this._fractionalValues && 0 !== e) {
                        const o = 14 - Math.ceil(Math.log10(e)),
                            t = Math.pow(10, o);
                        e = Math.round(e * t) / t
                    }
                    return t.format(e, {
                        ignoreLocaleNumberFormat: o
                    })
                }
            }
        },
        930203: (e, o, t) => {
            "use strict";
            t.d(o, {
                color: () => r.color
            });
            var r = t(745269)
        },
        197439: (e, o, t) => {
            "use strict";
            t.d(o, {
                makeSymbolPageUrl: () => _,
                makeTemplateSymbolUrl: () => m
            });
            var r = t(705526),
                s = t(986830),
                l = t(924225),
                i = t(889267),
                n = t(519073);

            function a(e) {
                const o = { ...e
                };
                if ("spread" === o.type || "expression" === o.type) {
                    const e = o.shortName && c(o.shortName),
                        t = o.proName && c(o.proName);
                    o.type = void 0, o.shortName = e, o.proName = t
                }
                return o
            }

            function c(e) {
                var o;
                return null === (o = (0, i.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === o ? void 0 : o.value
            }

            function d(e) {
                const o = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type,
                    typespecs: e.typespecs,
                    root: e.root
                };
                return o.proName && o.proName.includes(":") && ([o.exchange, o.shortName] = o.proName.split(":")), o
            }

            function h(e, o) {
                const t = encodeURIComponent(o.shortName || ""),
                    r = encodeURIComponent(o.exchange || ""),
                    s = encodeURIComponent(o.proName || ""),
                    l = encodeURIComponent(o.root || "");
                return e.replace("{tvexchange}", r).replace("{tvsymbol}", t).replace("{tvprosymbol}", s).replace("{tvroot}", l)
            }

            function u(e, o = "") {
                const t = d(e),
                    {
                        type: r,
                        typespecs: s,
                        shortName: l,
                        proName: i,
                        exchange: a,
                        root: c
                    } = t;
                return void 0 === l && void 0 === i ? (console.warn("Params missed"), "/") : r || s ? "commodity" === r && s && s.includes("cfd") ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : !c || !s || "futures" !== r || s.includes("continuous") && (null == l ? void 0 : l.endsWith("1!")) || s.includes("exchange-continuous") ? a && ("forex" === r || s && (0,
                    n.hasCryptoTypespec)(s)) ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : a ? `/symbols/{tvexchange}-{tvsymbol}/${o}` : `/symbols/{tvsymbol}/${o}` : `/symbols/{tvexchange}-{tvroot}1!/${o}?contract={tvsymbol}` : a ? `/symbols/{tvexchange}-{tvsymbol}/${o}` : `/symbols/{tvsymbol}/${o}`
            }

            function m(e, o) {
                let t = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let r = "tvprosymbol";
                    void 0 === o.proName && (r = "tvsymbol"), t = `${e}?tvwidgetsymbol={${r}}`
                }
                const r = h(t, d(a(o)));
                if (!(0, l.isSafeUrl)(r)) throw new Error(`The symbol URL ${r} is not allowed.`);
                return r
            }

            function p(e, o, t, l) {
                const i = (window.locale_domains ? (0, s.determineBaseUrl)(window.locale_domains, l) : window.location.origin) + h(e, d(a(o)));
                return t ? (0, r.addUtmToUrl)(i, t) : i
            }

            function _(e, o, t, r) {
                const s = a(e);
                return p(u(s, r), s, o, t)
            }
        },
        817099: (e, o, t) => {
            "use strict";
            t.d(o, {
                QuoteTicker: () => w
            });
            var r = t(45003),
                s = t(338619),
                l = t(124829),
                i = t(142567),
                n = t(359268),
                a = t(735211),
                c = t(957365),
                d = t(600303),
                h = t(719240),
                u = t(257288),
                m = t(621239),
                p = t(625545);
            var _ = t(572570);

            function g(e, o, t) {
                const r = (0, _.toNumberOrUndefined)(e);
                if ("economic" === (null == o ? void 0 : o.type) && 0 === r || void 0 === r) return;
                const s = (null == t ? void 0 : t.customPriceFormatter) || "volume" === o.format && new c.VolumeFormatter({
                        precision: 2
                    }) || new a.PriceFormatter({
                        priceScale: o.pricescale || 100,
                        minMove: o.minmov || 1,
                        fractional: o.fractional,
                        minMove2: o.minmove2
                    }),
                    l = void 0 !== (null == t ? void 0 : t.signPositiveChange) ? t.signPositiveChange : null == t ? void 0 : t.signPositive;
                return ((e, o = !0) => o ? `(${e})` : e)(s.format(r, {
                    signPositive: l,
                    signNegative: null == t ? void 0 : t.signNegative
                }), null == t ? void 0 : t.changeInBrackets)
            }
            var b = t(444372);

            function y(e) {
                return "PCTPAR" === e ? b.t(null, {
                    context: "_max_len_9"
                }, t(46374)) : e
            }
            var v = t(416234);

            function f(e) {
                return e === v.SymbolGroup.McxFlag
            }
            var x = t(40763);
            const N = (0, s.getLogger)("QuoteTicker"),
                C = {
                    addDescriptionTitle: !0,
                    changeDirectionDownClass: "down",
                    changeDirectionUpClass: "up",
                    changeDirectionNeutralClass: "neutral",
                    changeInBrackets: !1,
                    changePercentInBrackets: !1,
                    lastPriceTimeInBrackets: !0,
                    lastReleaseDateTimeInBrackets: !0,
                    rtcTimeInBrackets: !0,
                    clientName: "quote-ticker",
                    dontDyePrice: !1,
                    fallingBg: null,
                    growingBg: null,
                    lastFallingClass: "falling",
                    lastGrowingClass: "growing",
                    quoteSession: null,
                    signNegative: !0,
                    signPositive: !1,
                    customPriceFormatter: null,
                    customTimeFormatter: null,
                    sessionStatusClassSuffix: "--for-ticker",
                    dataModeClassSuffix: "--for-ticker",
                    showInvalidSymbolStatus: !1,
                    indicatorsTooltipType: "custom",
                    lastPriceLastCharSup: !1,
                    lastPriceHighlightDiffOnly: !1,
                    initedHook: void 0,
                    setStateHook: void 0,
                    permissionDeniedHook: void 0,
                    noSuchSymbolHook: void 0
                },
                k = /[KMBT]/;

            function w(e, o, t = {}) {
                this.enabled = !0, this._symbol = e, this._symbolOriginal = null, this._options = (0, r.deepExtend)({}, C, t), !1 !== this._options.signNegative && !0 !== this._options.signNegative && delete this._options.signNegative, t.customPriceFormatter && (this._customPriceFormatter = t.customPriceFormatter), t.customTimeFormatter && (void 0 !== t.customTimeFormatter.lastPrice || void 0 !== t.customTimeFormatter.rtc ? this._timeFormatter = t.customTimeFormatter : this._timeFormatter = {
                        lastPrice: t.customPriceFormatter,
                        rtc: t.customPriceFormatter
                    }),
                    this._percentFormatter = new i.PercentageFormatter, this._defaultPriceFormatter = new a.PriceFormatter({
                        priceScale: 100
                    }), this._priceFormatter = this._customPriceFormatter || this._defaultPriceFormatter, this._volumeFormatter = new c.VolumeFormatter({
                        precision: 2
                    }), this._cache = {}, this._lastPrice = null, this._lastPriceFormatted = "", this._elements = {}, this._textNodes = {}, this._changeVolumeLetter = this._getChangeVolumeLetterCallback(), this._setElements(o), this._highlighters = {}, this._initHighlighters(), this._options.setStateHook && this.setStateHook(this._options.setStateHook), this.quoteSession = this._options.quoteSession || (0, p.getQuoteSessionInstance)("simple"), this._quoteSessionEventHandler = this.onData.bind(this), this._connectTimeoutId = setTimeout(this.connect.bind(this), 0)
            }

            function F(e) {
                const o = e.search(k),
                    t = o >= 0 ? e.slice(o) : "";
                return [o > 0 ? e.substring(o, 0) : 0 === o ? "" : e, t]
            }

            function E(e, o, t, r, s) {
                var l, i = null;

                function n() {
                    if (l && (clearTimeout(l), l = void 0), t || o)
                        for (var i = 0; i < e.length; i++) e[i].style.background = "";
                    if (!t || !o)
                        for (i = 0; i < e.length; i++) r && e[i].classList.remove(r), s && e[i].classList.remove(s)
                }
                return {
                    show: function(a) {
                        var c = 0;
                        if (a !== i) {
                            if (null !== i && null !== a && (c = a - i), n(), l = setTimeout(n, 750), 0 < c) {
                                if (o)
                                    for (var d = 0; d < e.length; d++) e[d].style.background = o;
                                else if (r)
                                    for (d = 0; d < e.length; d++) e[d].classList.add(r)
                            } else if (c < 0)
                                if (t)
                                    for (d = 0; d < e.length; d++) e[d].style.background = t;
                                else if (s)
                                for (d = 0; d < e.length; d++) e[d].classList.add(s);
                            null !== a && (i = a)
                        }
                    },
                    hide: n
                }
            }
            w.prototype._setElements = function(e) {
                this._container = e, this._elements.change = this._findElements(e, ["js-symbol-change", "symbol-change"]), this._elements.changeDirection = this._findElements(e, ["js-symbol-change-direction", "symbol-change-direction"]), this._elements.extHrsChangeDirection = this._findElements(e, ["js-symbol-ext-hrs-change-direction"]), this._elements.changePercent = this._findElements(e, ["js-symbol-change-pt", "symbol-change-pt"]), this._elements.description = this._findElements(e, ["js-symbol-description-name", "symbol-description-name"]), this._elements.extHrsChange = this._findElements(e, "js-symbol-ext-hrs-change"), this._elements.extHrsChangePercent = this._findElements(e, "js-symbol-ext-hrs-change-pt"), this._elements.extHrsClose = this._findElements(e, "js-symbol-ext-hrs-close"), this._elements.industry = this._findElements(e, ["js-symbol-industry", "symbol-industry"]), this._elements.last = this._findElements(e, ["js-symbol-last", "symbol-last"]), this._elements.sector = this._findElements(e, ["js-symbol-sector", "symbol-sector"]), this._elements.sessionStatus = this._findElements(e, "js-symbol-session-status"), this._elements.shortName = this._findElements(e, ["js-symbol-short-name", "symbol-short-name"]), this._elements.updateMode = this._findElements(e, "js-data-mode"), this._elements.lastPeriod = this._findElements(e, "js-symbol-last-period"), this._elements.updateMode.forEach((e => e.classList.add("i-hidden"))), this._textNodes.change = this._getOrCreateTextNodes(this._elements.change), this._textNodes.changePercent = this._getOrCreateTextNodes(this._elements.changePercent),
                    this._textNodes.extHrsChange = this._getOrCreateTextNodes(this._elements.extHrsChange), this._textNodes.extHrsChangePercent = this._getOrCreateTextNodes(this._elements.extHrsChangePercent), this._textNodes.extHrsClose = this._getOrCreateTextNodes(this._elements.extHrsClose), this._textNodes.last = this._getOrCreateTextNodes(this._elements.last), this._textNodes.open = this._findTextNodes(e, "js-symbol-open"), this._textNodes.eps = this._findTextNodes(e, "js-symbol-eps"), this._textNodes.marketCap = this._findTextNodes(e, "js-symbol-market-cap"), this._textNodes.prevClose = this._findTextNodes(e, "js-symbol-prev-close"), this._textNodes.dividends = this._findTextNodes(e, "js-symbol-dividends"), this._textNodes.priceEarnings = this._findTextNodes(e, "js-symbol-pe"), this._textNodes.volume = this._findTextNodes(e, "js-symbol-volume"), this._textNodes.high = this._findTextNodes(e, "js-symbol-high"), this._textNodes.low = this._findTextNodes(e, "js-symbol-low"), this._textNodes.currency = this._findTextNodes(e, "js-symbol-currency"), this._textNodes.lastPriceTime = this._findTextNodes(e, "js-symbol-lp-time"), this._textNodes.lastReleaseDate = this._findTextNodes(e, "js-symbol-last-release-date"), this._textNodes.rtcTime = this._findTextNodes(e, "js-symbol-rtc-time"), this._elements.lastHighlight = this._options.lastPriceHighlightDiffOnly ? this._elements.last.map((e => this._appendAndGetNewElement(e, "span"))) : this._elements.last, this._textNodes.lastHighlight = this._getOrCreateTextNodes(this._elements.lastHighlight), this._elements.lastSup = this._options.lastPriceLastCharSup ? this._elements.lastHighlight.map((e => this._appendAndGetNewElement(e, "sup"))) : [], this._textNodes.lastSup = this._getOrCreateTextNodes(this._elements.lastSup)
            }, w.prototype._findElements = function(e, o) {
                var t = (0, l.isArray)(o) ? o : [o];
                return Array.prototype.concat.apply([], t.map((o => Array.prototype.slice.call(e.getElementsByClassName(o)))))
            }, w.prototype._findTextNodes = function(e, o) {
                return this._getOrCreateTextNodes(this._findElements(e, o))
            }, w.prototype._getOrCreateTextNodes = function(e) {
                return e.map((e => {
                    var o = this._getFirstTextNode(e);
                    return o || (o = e.ownerDocument.createTextNode(""), e.appendChild(o)), o
                }))
            }, w.prototype._appendAndGetNewElement = function(e, o) {
                const t = document.createElement(o);
                return e.appendChild(t), t
            }, w.prototype._getFirstTextNode = function(e) {
                for (var o = e.childNodes, t = o.length - 1; t >= 0; t--)
                    if (3 === o.item(t).nodeType) return o.item(t);
                return null
            }, w.prototype.connect = function(e) {
                this._subscribed || (this._subscribedSymbol = e || this._symbol, this.quoteSession.subscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !0)
            }, w.prototype.disconnect = function() {
                clearTimeout(this._connectTimeoutId), this._subscribed && (this.quoteSession.unsubscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !1)
            }, w.prototype.onData = function(e, o) {
                this.enabled && ("ok" === e.status ? this.successData(e, o) : "permission_denied" === e.status ? this.onPermissionDenied(e) : "error" === e.status && this.errorData(e))
            }, w.prototype.successData = function(e, o) {
                e.values && this.setState(e.values, e, o)
            }, w.prototype.onPermissionDenied = function(e) {
                (0, x.isSfQuoteData)(e) || function(e) {
                    var o;
                    return !!e && (f(e.symbolname) || "permission_denied" === e.status && f(null === (o = e.values) || void 0 === o ? void 0 : o.alternative))
                }(e) ? this._options.permissionDeniedHook ? this._options.permissionDeniedHook(e, this._symbolOriginal || this._symbol) : this.errorData(e): this.downgradeData(e)
            }, w.prototype.errorData = function(e) {
                this._options.showInvalidSymbolStatus && (this.setShortName(this._symbol), this._elements.sessionStatus.map((e => new d.MarketStatusIndicator({
                    classSuffix: this._options.sessionStatusClassSuffix,
                    el: e,
                    data: {
                        values: {
                            current_session: "invalid"
                        }
                    },
                    tooltipType: this._options.indicatorsTooltipType
                })))), this._options.noSuchSymbolHook ? (this._symbolOriginal && this.setShortName(this._symbolOriginal), this._options.noSuchSymbolHook.call(this, e, this._symbolOriginal || this._symbol)) : N.logWarn("No data for: " + this._symbol)
            }, w.prototype.downgradeData = function(e) {
                {
                    const o = e && e.values && e.values.alternative,
                        t = this._symbol === o;
                    if (!(o && -1 !== o.indexOf(":")) || t) return void this.errorData(e);
                    this._symbolOriginal = this._symbol, this._symbol = o, this._subscribed = !1, this.connect()
                }
            }, w.prototype.setState = function(e, o, r) {
                const s = r.values;
                this._isVolumeFormat = "volume" === e.format, null == s.pricescale && null == s.minmov && null == s.fractional && null == s.minmove2 || (this._priceFormatter = this._customPriceFormatter || this._isVolumeFormat && this._volumeFormatter || new a.PriceFormatter({
                    priceScale: e.pricescale || 100,
                    minMove: e.minmov || 1,
                    fractional: e.fractional,
                    minMove2: e.minmove2
                }));
                const l = this._options,
                    i = this._percentFormatter,
                    n = this._priceFormatter,
                    p = this._defaultPriceFormatter,
                    _ = this._volumeFormatter,
                    b = (e, o = !0) => o ? `(${e})` : e,
                    v = void 0 !== l.signPositiveChange ? l.signPositiveChange : l.signPositive,
                    f = e => g(e, s, l),
                    x = e => {
                        const o = i.format(e, {
                            signPositive: v,
                            signNegative: l.signNegative
                        });
                        return b(o, l.changePercentInBrackets)
                    },
                    C = n.format.bind(n),
                    k = p.format.bind(p),
                    w = _.format.bind(_),
                    F = e => null == e ? c.PLACE_HOLDER : k(e);
                l.disableChange || (this._setNodesValue(this._textNodes.change, s.change, f), this._setNodesValue(this._textNodes.changePercent, s.change_percent, x), null != s.change && (l.dontDyePrice || this._setChangeFontColor([].concat(this._elements.change, this._elements.changePercent), s.change, l.changeUpFontColor, l.changeDownFontColor, l.changeNeutralFontColor), this._setChangeDirection(this._elements.changeDirection, s.change)), this._setNodesValue(this._textNodes.extHrsChange, s.rch, f), this._setNodesValue(this._textNodes.extHrsChangePercent, s.rchp, x), null != s.rch && (l.dontDyePrice || this._setChangeFontColor([].concat(this._elements.extHrsChange, this._elements.extHrsChangePercent), s.rch, l.changeUpFontColor, l.changeDownFontColor, l.changeNeutralFontColor), this._setChangeDirection(this._elements.extHrsChangeDirection, s.rch))), this._setNodesValue(this._textNodes.prevClose, s.prev_close_price, C), this._setNodesValue(this._textNodes.dividends, e.dividends_yield, (e => null == e ? c.PLACE_HOLDER : i.format(e, {
                    signPositive: l.signPositive,
                    signNegative: l.signNegative
                })), !0);
                let E = (0,
                    u.getTranslatedSymbolDescription)(s);
                if (E && (E = this._prepareSymbolDescription(E), this._setTextsContent(this._elements.description, E), this._options.addDescriptionTitle))
                    for (var S = 0; S < this._elements.description.length; S++) this._elements.description[S].setAttribute("title", E);
                if ((null != s.short_name || null != s.exchange) && e.short_name) {
                    var T = e.short_name;
                    "QUANDL" === e.exchange && void 0 !== e.short_name.split("/")[1] && (T = e.short_name.split("/")[1] + ", " + e.short_name.split("/")[0]), this.setShortName(T)
                }
                e["reference-last-period"] && this._elements.lastPeriod.length && Promise.all([t.e(43878), t.e(3844)]).then(t.bind(t, 800620)).then((o => {
                    this._setTextsContent(this._elements.lastPeriod, o.periodFormatter(e["reference-last-period"]))
                })), this._elements.lastPeriod.length && void 0 === e["reference-last-period"] && this._setTextsContent(this._elements.lastPeriod, "—"), this._setLastValue(s.last_price, C), this._setNodesValue(this._textNodes.extHrsClose, s.rtc, C), s.rtc && this._highlighters.extHrsClose.show(s.rtc), s.industry && this._setTextsContent(this._elements.industry, e.industry, (e => e)), s.sector && this._setTextsContent(this._elements.sector, e.sector), this._elements.sessionStatus && s.current_session && (this._sessionStatusInstances ? this._sessionStatusInstances.forEach((e => e.setStatus(s.current_session))) : this._sessionStatusInstances = this._elements.sessionStatus.map((o => new d.MarketStatusIndicator({
                    classSuffix: this._options.sessionStatusClassSuffix,
                    el: o,
                    short: !0,
                    data: {
                        values: s
                    },
                    quoteSession: this.quoteSession,
                    symbol: e.original_name,
                    manualUpdate: !0,
                    tooltipType: this._options.indicatorsTooltipType,
                    sessionStatusIcon: this._options.sessionStatusIcon
                })))), this._setNodesValue(this._textNodes.open, s.open_price, C), this._setNodesValue(this._textNodes.high, s.high_price, C), this._setNodesValue(this._textNodes.low, s.low_price, C), this._setNodesValue(this._textNodes.eps, e.earnings_per_share_basic_ttm, F, !0), this._setNodesValue(this._textNodes.priceEarnings, e.price_earnings_ttm, F, !0), this._setNodesValue(this._textNodes.marketCap, e.market_cap_basic, w, !0), this._setNodesValue(this._textNodes.volume, e.volume, w, !0);
                const D = (0, m.prepareCurrencyValue)(s);
                if (D && this._setNodesValue(this._textNodes.currency, D, y, !0), (s.lp_time || e.lp_time) && this._textNodes.lastPriceTime.length && (this._timeFormatter && this._timeFormatter.lastPrice ? this._setNodesValue(this._textNodes.lastPriceTime, b(this._timeFormatter.lastPrice(e.lp_time, e.current_session), this._options.lastPriceTimeInBrackets)) : N.logError("last price time field requested with no formatter provided")), (s.last_release_date || e.last_release_date) && this._textNodes.lastReleaseDate.length && (this._timeFormatter && this._timeFormatter.lastReleaseDate ? this._setNodesValue(this._textNodes.lastReleaseDate, b(this._timeFormatter.lastReleaseDate(e.last_release_date, e.current_session), this._options.lastReleaseDateTimeInBrackets)) : N.logError("lastReleaseDate time field requested with no formatter provided")),
                    (s.rtc_time || e.rtc_time) && this._textNodes.rtcTime.length && (this._timeFormatter && this._timeFormatter.rtc ? this._setNodesValue(this._textNodes.rtcTime, b(this._timeFormatter.rtc(e.rtc_time, e.current_session), this._options.rtcTimeInBrackets)) : N.logError("rtc time field requested with no formatter provided")), null != s.last_price)
                    for (S = 0; S < this._elements.updateMode.length; S++) this._elements.updateMode[S].classList.remove("i-hidden");
                this._elements.updateMode && (s.update_mode || s.update_mode_seconds) && (this._updateModeInstances ? this._updateModeInstances.forEach((o => o.update({
                    values: e
                }))) : this._updateModeInstances = this._elements.updateMode.map((o => new h.DataModeIndicator({
                    classSuffix: this._options.dataModeClassSuffix,
                    el: o,
                    data: {
                        values: e
                    },
                    modeInterval: e.update_mode_seconds,
                    short: !0,
                    tooltipType: this._options.indicatorsTooltipType
                })))), this._setStateHook && this._setStateHook(o.values, r.values, o.complete, this.getOptions()), this._lastPrice ? this._highlighters.last.show(e.last_price) : null === this._lastPrice && (this._container.classList.add("quote-ticker-inited"), "function" == typeof this._options.initedHook && this._options.initedHook("last_price" in e)), this._lastPrice = e.last_price
            }, w.prototype._setNodesValue = function(e, o, t, r) {
                if (null != o || r)
                    for (var s = "function" == typeof t ? t(o) : o, l = 0; l < e.length; l++) e[l].nodeValue = s
            }, w.prototype._setTextsContent = function(e, o, t) {
                if (e && e.length && o)
                    for (var r = "function" == typeof t ? t(o) : o, s = 0; s < e.length; s++) e[s].textContent = r
            }, w.prototype._setLastValue = function(e, o) {
                if (null == e) return;
                const t = "function" == typeof o ? o(e) : String(e);
                if (t === this._lastPriceFormatted) return;
                const [r, s, l] = this._options.lastPriceHighlightDiffOnly ? this._getLastValueStringDiff(this._lastPriceFormatted, t) : ["", t, ""], i = r, [n, a] = this._options.lastPriceLastCharSup ? [s.slice(0, -1), s.slice(-1)] : [s, ""];
                this._options.lastPriceHighlightDiffOnly && (this._isVolumeFormat && this._changeVolumeLetter.call(this, l), this._setNodesValue(this._textNodes.last, i)), this._setNodesValue(this._textNodes.lastHighlight, n), this._setNodesValue(this._textNodes.lastSup, a), this._lastPriceFormatted = t
            }, w.prototype._getChangeVolumeLetterCallback = function() {
                let e;
                return function(o) {
                    o !== e && (e = o, this._elements.last.forEach((o => {
                        3 !== o.childNodes.length ? o.appendChild(document.createTextNode(e)) : o.childNodes[2].nodeValue = e
                    })))
                }
            }, w.prototype._getLastValueStringDiff = function(e, o) {
                if (e === o) {
                    const [e, t] = F(o);
                    return [e, "", t]
                }
                let t = 0;
                for (; e[t] === o[t];) t++;
                const [r, s] = F(o.slice(t));
                return [o.slice(0, t), r, s]
            }, w.prototype._setChangeFontColor = function(e, o, t, r, s) {
                for (var l = n.PriceColorer.formatSign(o, {
                        up: t,
                        down: r,
                        neutral: s
                    }), i = 0; i < e.length; i++) e[i].style.color = l
            }, w.prototype._setChangeDirection = function(e, o) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t].classList;
                    r.toggle(this._options.changeDirectionUpClass, o > 0), r.toggle(this._options.changeDirectionDownClass, o < 0), r.toggle(this._options.changeDirectionNeutralClass, 0 === o)
                }
            }, w.prototype.setShortName = function(e = "") {
                this._setTextsContent(this._elements.shortName, e)
            }, w.prototype._prepareSymbolDescription = function(e) {
                var o = this._getCache("symbol-description:" + e);
                return o || (o = e, this._setCache("symbol-description:" + e, o), o)
            }, w.prototype._initHighlighters = function() {
                this._highlighters.last = new E(this._elements.lastHighlight, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass), this._highlighters.extHrsClose = new E(this._elements.extHrsClose, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass)
            }, w.prototype.disable = function() {
                this.enabled = !1, this.disconnect()
            }, w.prototype.enable = function() {
                this.enabled = !0, this.connect()
            }, w.prototype.setStateHook = function(e) {
                null === e && this._setStateHook ? delete this._setStateHook : "function" == typeof e && (this._setStateHook = e)
            }, w.prototype._setCache = function(e, o) {
                null == o ? delete this._cache[e] : this._cache[e] = o
            }, w.prototype._getCache = function(e) {
                return this._cache && this._cache[e]
            }, w.prototype.getOptions = function() {
                return this._options
            }
        },
        257288: (e, o, t) => {
            "use strict";
            t.d(o, {
                getTranslatedSymbolDescription: () => l
            });
            var r = t(444372);

            function s(e) {
                const o = `#${e}-symbol-description`,
                    s = r.t(o, void 0, t(956316));
                return s === o ? null : s
            }

            function l(e) {
                if (void 0 !== e.pro_name) {
                    const o = s(e.pro_name);
                    if (null !== o) return o;
                    if (void 0 !== e.short_name) {
                        const o = s(e.short_name);
                        if (null !== o) return o
                    }
                }
                return "en" !== e.language && void 0 !== e.local_description && e.language === window.language || "en" === e.language && void 0 !== e.local_description && e.language === window.language ? e.local_description : e.description || ""
            }
        },
        715050: (e, o, t) => {
            "use strict";
            t.d(o, {
                parseHtmlElement: () => s
            });
            const r = new WeakMap;

            function s(e, o) {
                const t = function(e, o) {
                        let t, s;
                        return t = null == o ? document.documentElement : 9 === o.nodeType ? o.documentElement : o, r && (s = r.get(t)), s || (s = t.ownerDocument.createRange(), s.selectNodeContents(t), r && r.set(t, s)), s.createContextualFragment(e)
                    }(e, o),
                    s = t.firstElementChild;
                return null !== s && t.removeChild(s), s
            }
        },
        621239: (e, o, t) => {
            "use strict";

            function r(e) {
                let o = [];
                const t = e.currency_code || e.value_unit_id;
                switch (e.measure) {
                    case "price":
                        o = [t, e.unit_id];
                        break;
                    case "unit":
                        o = ["PCT" === t ? "%" : t, e.unit_id];
                        break;
                    default:
                        o = ["PCT" === t ? "%" : t]
                }
                return o.filter(Boolean).join(" / ")
            }
            t.d(o, {
                prepareCurrencyValue: () => r
            })
        },
        228609: (e, o, t) => {
            "use strict";

            function r(e) {
                e.preventDefault()
            }
            t.d(o, {
                preventDefault: () => r,
                preventDefaultForContextMenu: () => l
            });
            const s = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function l(e) {
                const o = e.target;
                o && !o.closest(s.join(", ")) && e.preventDefault()
            }
        },
        433524: (e, o, t) => {
            "use strict";
            t.d(o, {
                decodeHTMLEntities: () => a,
                getFirstSegmentOrCodePointString: () => d,
                htmlEscape: () => c
            });
            const r = /[<"'&>]/g,
                s = e => `&#${e.charCodeAt(0)};`,
                l = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&apos;": "'",
                    "&amp;": "&",
                    "&#60;": "<",
                    "&#62;": ">",
                    "&#34;": '"',
                    "&#39;": "'",
                    "&#039;": "'",
                    "&#38;": "&"
                },
                i = Object.assign({}, ...Object.entries(l).map((([e, o]) => ({
                    [o]: e
                })))),
                n = new RegExp(Object.keys(l).join("|"), "g");
            new RegExp(Object.keys(i).join("|"), "g");

            function a(e) {
                return e.replace(n, (e => l[e] || e))
            }

            function c(e) {
                return e.replace(r, s)
            }

            function d(e) {
                var o;
                const t = Intl.Segmenter;
                if (t) {
                    const r = new t(void 0, {
                            granularity: "grapheme"
                        }),
                        [{
                            segment: s
                        } = {
                            segment: null
                        }] = r.segment(e);
                    return null !== (o = null == s ? void 0 : s.toUpperCase()) && void 0 !== o ? o : null
                } {
                    const o = e.codePointAt(0);
                    return o ? String.fromCodePoint(o).toUpperCase() : null
                }
            }
        },
        123420: e => {
            "use strict";
            e.exports = JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-transparent":"#00000000","color-cold-gray-50":"#F8F9FD","color-cold-gray-100":"#F0F3FA","color-cold-gray-150":"#E0E3EB","color-cold-gray-200":"#D1D4DC","color-cold-gray-250":"#C1C4CD","color-cold-gray-300":"#B2B5BE","color-cold-gray-350":"#A3A6AF","color-cold-gray-400":"#9598A1","color-cold-gray-450":"#868993","color-cold-gray-500":"#787B86","color-cold-gray-550":"#6A6D78","color-cold-gray-600":"#5D606B","color-cold-gray-650":"#50535E","color-cold-gray-700":"#434651","color-cold-gray-750":"#363A45","color-cold-gray-800":"#2A2E39","color-cold-gray-850":"#1E222D","color-cold-gray-900":"#131722","color-cold-gray-950":"#0C0E15","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#FF9100","color-tan-orange-a600":"#CC7014","color-tan-orange-a700":"#8C541C","color-tan-orange-a800":"#593A1B","color-tan-orange-a900":"#33261A","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a400":"#00E676","color-iguana-green-a700":"#00c853","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#EEDA01","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB2","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-50":"#EDE7F6","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a200":"#7C4DFF","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a400":"#2BD9BC","color-minty-green-a600":"#24B29B","color-minty-green-a700":"#1B7667","color-minty-green-a800":"#10443B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a100":"#EA80FC","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-berry-pink-a400":"#f50057","color-berry-pink-a700":"#c51162","color-sky-blue-50":"#E0F7FA","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-deep-blue-600":"#5E35B1","color-forest-green-50":"#DAF2E6","color-forest-green-100":"#ACE5C9","color-forest-green-200":"#70CC9E","color-forest-green-300":"#42BD7F","color-forest-green-400":"#22AB67","color-forest-green-500":"#089950","color-forest-green-600":"#068043","color-forest-green-700":"#056636","color-forest-green-800":"#004D27","color-forest-green-900":"#1A3326","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-seeking-alpha-brand":"#ff7200"}')
        },
        800579: e => {
            "use strict";
            e.exports = JSON.parse('{"color-header-bg":"color-white","color-body-bg":"color-white","color-body-secondary-bg":"color-cold-gray-100","color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-550","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-halal":"color-iguana-green-400","color-continuous":"color-cold-gray-500","color-tv-calculated-pair":"color-grapes-purple-400","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-primary-symbol":"color-sky-blue-500","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-button-background-active":"color-tv-blue-50","color-toolbar-button-background-active-hover":"color-tv-blue-100","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-200","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-toolbar-divider-background":"color-cold-gray-150","color-popup-background":"color-white","color-popup-element-text":"color-cold-gray-900","color-popup-element-text-hover":"color-cold-gray-900","color-popup-element-background-hover":"color-cold-gray-100","color-popup-element-secondary-text":"color-cold-gray-500","color-popup-element-hint-text":"color-cold-gray-400","color-popup-element-text-active":"color-white","color-popup-element-background-active":"color-tv-blue-500","color-popup-element-toolbox-text":"color-cold-gray-500","color-popup-element-toolbox-text-hover":"color-cold-gray-900","color-popup-element-toolbox-text-active-hover":"color-tv-blue-200","color-popup-element-toolbox-background-hover":"color-cold-gray-150","color-popup-element-toolbox-background-active-hover":"color-tv-blue-700","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-550","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-550","color-icons":"color-cold-gray-550","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-550","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-800","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-delisted-symbol":"color-ripe-red-600","color-delisted-symbol-hover":"color-ripe-red-800","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-350","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-600","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-550","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-550","color-trial-hover":"color-cold-gray-550","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-tan-orange-500","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-boost-button-content-selected":"color-tv-blue-600","color-boost-button-content-hover":"color-cold-gray-900","color-boost-button-bg-hover":"color-cold-gray-150","color-boost-button-border-hover":"color-cold-gray-150","color-boost-button-border-default":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-ripe-red-400","color-legacy-success":"color-minty-green-300","color-collapse-tabs-border":"color-cold-gray-100","color-site-widget-hover":"color-cold-gray-50","color-attention":"color-banana-yellow-700","color-x-twitter-content":"color-cold-gray-900","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100","color-default-gray":"color-cold-gray-550","color-featured-broker-badge-bg":"color-cold-gray-900","color-featured-broker-badge-bg-hover":"color-cold-gray-800","color-featured-broker-badge-text":"color-white"}')
        }
    }
]);