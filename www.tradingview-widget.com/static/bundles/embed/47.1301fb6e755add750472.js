(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47], {
        296774: e => {
            e.exports = {}
        },
        764250: (e, t, r) => {
            "use strict";
            r.d(t, {
                ActionGroup: () => o
            });
            class n {
                constructor(e, t) {
                    this._group = e;
                    const {
                        hotkey: r,
                        handler: n,
                        desc: o,
                        isDisabled: s,
                        element: i = null,
                        isRepeatAccepted: a = !1
                    } = t;
                    this.hotkey = r, this.handler = n, this.desc = o, this.element = i, this.isRepeatAccepted = a, this.isDisabled = s ? "function" == typeof s ? s : () => !0 : () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class o {
                constructor(e, t) {
                    this._actions = new Map, this._manager = e, this.modal = !(!t || !t.modal), t && (this.desc = t.desc), t && t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(e) {
                    let t = this._actions.get(e.hotkey);
                    t || (t = [], this._actions.set(e.hotkey, t));
                    const r = new n(this, e);
                    return t.push(r), r
                }
                remove(e) {
                    const t = this._actions.get(e.hotkey);
                    if (!t) return;
                    const r = t.findIndex((t => t === e));
                    r >= 0 && (1 === t.length ? this._actions.delete(e.hotkey) : t.splice(r, 1))
                }
                handleHotkey(e, t) {
                    const r = this._actions.get(e);
                    if (!r) return !1;
                    for (const n of r)
                        if ((!n.element || t.target && n.element.contains(t.target)) && !n.isDisabled(t)) return t.repeat && !n.isRepeatAccepted || (n.handler(t), this._callMatchedHotkeyHandler(e)), t.preventDefault(), !0;
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    for (const [, e] of this._actions)
                        for (const t of e) t.destroy();
                    this._actions.clear(), this._manager.unregisterGroup(this)
                }
                static setMatchedHotkeyHandler(e) {
                    o._matchedHotkeyHandler = e
                }
                _callMatchedHotkeyHandler(e) {
                    o._matchedHotkeyHandler && o._matchedHotkeyHandler(e)
                }
            }
        },
        163586: (e, t, r) => {
            "use strict";
            r.d(t, {
                ActionManager: () => c
            });
            var n = r(91679),
                o = r(591800),
                s = r(607423);
            class i {
                constructor(e, t) {
                    this.modifiers = e, this.code = t
                }
                altOrOptionCode() {
                    return "AltLeft" === this.code || "AltRight" === this.code
                }
                controlOrMetaCode() {
                    return o.isMacKeyboard ? "MetaLeft" === this.code || "MetaRight" === this.code || "OSLeft" === this.code || "OSRight" === this.code : "ControlLeft" === this.code || "ControlRight" === this.code
                }
            }
            class a extends n.WatchedValue {
                setValue(e, t) {
                    const r = this.value();
                    (t || void 0 === r || r.code !== e.code || r.modifiers !== e.modifiers) && super.setValue(e)
                }
            }
            class c {
                constructor() {
                    this._groups = [], this._pressedKeys = new n.WatchedValue(0), this._keyboardPressedKeysState = new a(new i(0)), this._keyDownListener = e => {
                        if (e.defaultPrevented) return;
                        const t = (0, o.hashFromEvent)(e);
                        if (this._pressedKeys.setValue(t), this._keyboardPressedKeysState.setValue(new i((0, o.modifiersFromEvent)(e), e.code)), !(0, s.isNativeUIInteraction)(t, e.target))
                            for (let r = this._groups.length; r-- > 0;) {
                                const n = this._groups[r];
                                if (!n.isDisabled()) {
                                    if (n.handleHotkey(t, e)) return;
                                    if (n.modal) return
                                }
                            }
                    }, this._keyUpListener = e => {
                        const t = (0, o.hashFromEvent)(e);
                        this._pressedKeys.setValue(t), this._keyboardPressedKeysState.setValue(new i((0, o.modifiersFromEvent)(e), ""))
                    }, this._blurEvent = () => {
                        this._pressedKeys.setValue(0), this._keyboardPressedKeysState.setValue(new i(0, ""))
                    }, this._mouseEvent = e => {
                        var t;
                        const r = (0, o.modifiersFromEvent)(e),
                            n = 255 & (null !== (t = this._pressedKeys.value()) && void 0 !== t ? t : 0);
                        this._pressedKeys.setValue(r | n)
                    }
                }
                listen(e) {
                    e.addEventListener("keydown", this._keyDownListener), e.addEventListener("keyup", this._keyUpListener), e.addEventListener("blur", this._blurEvent), e.addEventListener("mousemove", this._mouseEvent)
                }
                unlisten(e) {
                    e.removeEventListener("keydown", this._keyDownListener), e.removeEventListener("keyup", this._keyUpListener), e.removeEventListener("blur", this._blurEvent), e.removeEventListener("mousemove", this._mouseEvent)
                }
                registerGroup(e) {
                    this._groups.push(e)
                }
                unregisterGroup(e) {
                    for (let t = this._groups.length; t--;) this._groups[t] === e && this._groups.splice(t, 1)
                }
                promoteGroup(e) {
                    let t = this._groups.length - 1;
                    for (let r = this._groups.length; r--;) {
                        if (this._groups[r] === e) return void(r !== t && (this._groups.splice(r, 1), this._groups.splice(t, 0, e)));
                        this._groups[r].modal && (t = r - 1)
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
        129592: (e, t, r) => {
            "use strict";
            r.d(t, {
                createGroup: () => i,
                registerWindow: () => a
            });
            var n = r(163586),
                o = r(764250);
            r(591800);
            const s = new n.ActionManager;
            s.pressedKeys(), s.keyboardPressedKeysState();

            function i(e) {
                return new o.ActionGroup(s, e)
            }

            function a(e) {
                s.listen(e)
            }
        },
        591800: (e, t, r) => {
            "use strict";
            r.d(t, {
                Modifiers: () => s,
                hashFromEvent: () => a,
                humanReadableHash: () => d,
                isMacKeyboard: () => o,
                modifiersFromEvent: () => i
            });
            var n = r(167175);
            const o = n.isMac || n.isIOS;
            var s;

            function i(e) {
                let t = 0;
                return e.shiftKey && (t += 1024), e.altKey && (t += 512), e.ctrlKey && (t += 256), e.metaKey && (t += 2048), t
            }

            function a(e) {
                return i(e) | e.keyCode
            }! function(e) {
                e[e.None = 0] = "None", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] = "Shift", e[e.Mod = o ? 2048 : 256] = "Mod", e[e.Control = 256] = "Control", e[e.Meta = 2048] = "Meta"
            }(s || (s = {}));
            const c = {
                    9: "⇥",
                    13: "↵",
                    27: "Esc",
                    8: o ? "⌫" : "Backspace",
                    32: "Space",
                    35: "End",
                    36: "Home",
                    37: "←",
                    38: "↑",
                    39: "→",
                    40: "↓",
                    45: "Ins",
                    46: "Del",
                    188: ",",
                    191: "/"
                },
                l = {
                    9: "Tab",
                    13: "Enter",
                    27: "Esc",
                    8: "Backspace",
                    32: "Space",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Ins",
                    46: "Del",
                    188: ",",
                    191: "/"
                };
            for (let e = 1; e <= 16; e++) c[e + 111] = `F${e}`, l[e + 111] = `F${e}`;

            function d(e) {
                let t = function(e, t = !o) {
                    let r = "";
                    return 256 & e && (r += u(o ? "^" : "Ctrl", t)), 512 & e && (r += u(o ? "⌥" : "Alt", t)), 1024 & e && (r += u(o ? "⇧" : "Shift", t)), 2048 & e && (r += u(o ? "⌘" : "Win", t)), r
                }(e);
                const r = 255 & e;
                return t += r in c ? c[r] : String.fromCharCode(r), t
            }

            function u(e, t) {
                return `${e}${t?" + ":o?" ":""}`
            }
        },
        167175: (e, t, r) => {
            "use strict";
            r.d(t, {
                isAndroid: () => m,
                isAnyMobile: () => v,
                isBlackBerry: () => p,
                isChrome: () => a,
                isEdge: () => l,
                isFF: () => c,
                isIOS: () => f,
                isIPad: () => w,
                isLinux: () => h,
                isMac: () => u,
                isOperaMini: () => y,
                isSafari: () => d,
                isWindows: () => g,
                mobiletouch: () => s,
                touch: () => i
            });
            const n = "undefined" != typeof window && "undefined" != typeof navigator,
                o = n && "ontouchstart" in window,
                s = n && o && "onorientationchange" in window,
                i = n && (o || !!navigator.maxTouchPoints),
                a = n && window.chrome && window.chrome.runtime,
                c = n && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                l = n && /\sEdge\/\d\d\b/.test(navigator.userAgent),
                d = n && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
                u = n && /mac/i.test(navigator.platform),
                g = n && /Win32|Win64/i.test(navigator.platform),
                h = n && /Linux/i.test(navigator.platform),
                m = n && /Android/i.test(navigator.userAgent),
                p = n && /BlackBerry/i.test(navigator.userAgent),
                f = n && /iPhone|iPad|iPod/.test(navigator.platform),
                y = n && /Opera Mini/i.test(navigator.userAgent),
                w = n && ("MacIntel" === navigator.platform && navigator.maxTouchPoints >= 1 || /iPad/.test(navigator.platform)),
                v = m || p || f || y
        },
        195619: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n
            });
            const n = r.i18next
        },
        842060: (e, t, r) => {
            "use strict";
            r.d(t, {
                getStyleClasses: () => i,
                isCircleLogoWithUrlProps: () => a
            });
            var n = r(497754),
                o = r(456057),
                s = r.n(o);

            function i(e, t) {
                return n(s()["tv-circle-logo"], s()[`tv-circle-logo--${e}`], t)
            }

            function a(e) {
                return "logoUrl" in e && null !== e.logoUrl && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
            }
        },
        23580: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return e && e.utm_campaign && (e.utm_campaign += `-${t}`), e
            }
            async function o(e, t, n, o) {
                if ("lentaru" === e) {
                    const {
                        getLentaCopyrightData: e
                    } = await Promise.all([r.e(83035), r.e(1523)]).then(r.bind(r, 466672));
                    return e()
                }
                if ("cmoneycomtw" === e) {
                    const {
                        getCmoneycomtwCopyrightData: e
                    } = await Promise.all([r.e(25558), r.e(18867), r.e(42091)]).then(r.bind(r, 20922));
                    return e(t, n)
                }
                if ("new" === o) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([r.e(30641), r.e(36228)]).then(r.bind(r, 703094));
                    return e(t, n)
                }
                if ("with_border" === o) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([r.e(24328), r.e(37753)]).then(r.bind(r, 513316));
                    return e(t, n)
                }
                if ("large_trade" === o) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([r.e(19545), r.e(47259)]).then(r.bind(r, 203515));
                    return e(t, n)
                } {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([r.e(25558), r.e(53259)]).then(r.bind(r, 88136));
                    return e(t, n)
                }
            }
            r.d(t, {
                addUtmCampaignSource: () => n,
                getCustomerCopyrightData: () => o
            })
        },
        650401: (e, t, r) => {
            "use strict";
            r.d(t, {
                getWidgetSheriffActions: () => l
            });
            var n = r(702598),
                o = r(338619),
                s = r(952598);
            const i = window.WIDGET_SHERIFF_HOST || "https://widget-sheriff.xstaging-widget.tv",
                a = (0, o.getLogger)("WidgetSheriff.Widget");
            let c = null;
            async function l() {
                return null === c && (c = await async function() {
                    const e = function() {
                        if (document.location.ancestorOrigins && document.location.ancestorOrigins.length) return document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1];
                        try {
                            return new URL(document.referrer).origin
                        } catch (e) {
                            return document.location.origin || null
                        }
                    }();
                    if (null === e) return a.logWarn("ancestorOrigin is undefined"), Promise.resolve([]);
                    const t = new URL("/sheriff/api/v1/rules/search", i);
                    t.searchParams.append("origin", e);
                    return (await (0, n.fetch)(t.toJSON()).then((e => {
                        if (!e.ok) throw new Error("Guard request error occured");
                        return 204 === e.status ? Promise.resolve({
                            actions: []
                        }) : e.json()
                    })).catch((e => (a.logWarn(e.message), Promise.resolve({
                        actions: []
                    }))))).actions.filter((e => s.widgetSheriffActions.has(e)))
                }()), Promise.resolve(c)
            }
        },
        175341: (e, t, r) => {
            "use strict";
            r.d(t, {
                createEmbedWidgetWrapper: () => c
            });
            var n = r(650151),
                o = r(650401),
                s = r(351079),
                i = r(23580),
                a = r(952598);

            function c(e, t, r, c = {}) {
                if (null === e.parentElement) return console.warn("Can not wrap 'elWidgetContainer' because it has no parentElement"), e;
                let l = null,
                    d = document.querySelector(".js-embed-widget-body");
                const u = null !== d;
                if (u) {
                    d = (0, n.ensureNotNull)(d), l = (0, n.ensureNotNull)(d.parentElement);
                    let e = document.querySelector(".js-embed-widget-head");
                    null === e && (e = document.createElement("div"), e.classList.add("tv-embed-widget-wrapper__header"), e.classList.add("js-embed-widget-head"), l.insertBefore(e, d))
                } else l = document.createElement("div"), l.classList.add("tv-embed-widget-wrapper"), l.innerHTML = '<div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div><div class="tv-embed-widget-wrapper__body js-embed-widget-body"></div>', d = l.querySelector(".js-embed-widget-body");
                if (c.overflowAuto && d.classList.add("tv-embed-widget-wrapper__body--overflow_auto"), c.showBorderOnTransparent && d.classList.add("tv-embed-widget-wrapper__body--border-on-transparent"), !c.isWhiteLabel) {
                    !async function(e, t, r, c, l = {}) {
                        var d, u;
                        const g = l.isSheriffDisabled ? [] : await (0, o.getWidgetSheriffActions)(),
                            h = g.includes(a.KnownAction.LargeTradeLogo),
                            m = function(e) {
                                return ["crypto-coins-heatmap", "forex-cross-rates", "market-overview", "symbol-overview", "market-quotes", "stock-heatmap", "screener", "forex-heat-map", "crypto-mkt-screener", "events", "hotlists"].includes(e)
                            }(t),
                            p = h && m ? "large_trade" : void 0,
                            f = await (0, i.getCustomerCopyrightData)(l.customer, l.locale, (0, i.addUtmCampaignSource)(c, "logo"), p),
                            y = null !== (u = null != p ? p : null === (d = l.copyrightOptions) || void 0 === d ? void 0 : d.mode) && void 0 !== u ? u : "small_old";
                        (0, n.ensureNotNull)(e).appendChild((0, s.createCopyrightLabel)({
                            sheriffOptions: g,
                            snapToEdge: r,
                            ...l.copyrightOptions,
                            ...f,
                            mode: y
                        }))
                    }(d, t, !document.documentElement.classList.contains("is-transparent") || Boolean(c.showBorderOnTransparent), r, c)
                }
                return u || (e.parentElement.insertBefore(l, e), d.appendChild(e)), e
            }
        },
        901107: (e, t, r) => {
            "use strict";
            r.d(t, {
                createEmbedWidgetWrapper: () => n.createEmbedWidgetWrapper
            });
            r(296774);
            var n = r(175341)
        },
        251954: (e, t, r) => {
            "use strict";
            r.d(t, {
                emit: () => l,
                subscribe: () => c,
                unsubscribe: () => a
            });
            var n = r(942634);
            const o = {},
                s = [],
                i = {};

            function a(e, t, r) {
                o[e].unsubscribe(r, t)
            }

            function c(e, t, r, s) {
                o.hasOwnProperty(e) || (o[e] = new n.Delegate), i[e] ? t.call(r) : o[e].subscribe(r, t, s)
            }

            function l(e, ...t) {
                const r = [e].concat(t);
                s.forEach((e => {
                    e.apply(null, r)
                })), o.hasOwnProperty(e) && o[e].fire.apply(o[e], t)
            }
        },
        799786: (e, t, r) => {
            "use strict";
            r.d(t, {
                createGroup: () => n.createGroup
            });
            var n = r(129592),
                o = r(764250),
                s = r(591800),
                i = r(345848);
            (0, n.registerWindow)(window), o.ActionGroup.setMatchedHotkeyHandler((e => {
                (0, i.trackEvent)("Keyboard Shortcuts", (0, s.humanReadableHash)(e))
            }))
        },
        588948: (e, t, r) => {
            "use strict";
            r.d(t, {
                getInitData: () => o
            });
            r(650151);
            (0, r(338619).getLogger)("Common.InitData");
            const n = window.initData || {};

            function o() {
                return n
            }
        },
        314802: (e, t, r) => {
            "use strict";
            r.d(t, {
                isOnMobileAppPage: () => o
            });
            var n = r(181706);

            function o(e, t = !1) {
                const {
                    searchParams: r
                } = new URL(String(location));
                let o = "true" === r.get("mobileapp_new"),
                    s = "true" === r.get("mobileapp");
                if (!t) {
                    const e = n.get("tv_app") || "";
                    o || (o = ["android", "android_nps"].includes(e)), s || (s = "ios" === e)
                }
                return !("new" !== e && "any" !== e || !o) || !("new" === e || !s)
            }
        },
        439563: (e, t, r) => {
            "use strict";
            async function n() {
                const e = (await Promise.all([r.e(22321), r.e(71289), r.e(36683)]).then(r.bind(r, 469449))).getTrackerInstance();
                return e || null
            }
            r.d(t, {
                getEmbedWidgetTracker: () => n
            })
        },
        995683: (e, t, r) => {
            "use strict";

            function n(e, t, r = {}) {
                return Object.assign({}, e, function(e, t, r = {}) {
                    const n = Object.assign({}, t);
                    for (const o of Object.keys(t)) {
                        const s = r[o] || o;
                        s in e && (n[o] = [e[s], t[o]].join(" "))
                    }
                    return n
                }(e, t, r))
            }
            r.d(t, {
                mergeThemes: () => n
            })
        },
        692558: (e, t, r) => {
            "use strict";
            r.d(t, {
                LOGLEVEL: () => s,
                getLogHistory: () => _,
                getLogLevel: () => f,
                getLogger: () => L,
                getRawLogHistory: () => v,
                isHighRateEnabled: () => y,
                loggingOff: () => S,
                loggingOn: () => O,
                serializeLogHistoryEntry: () => b,
                setLogLevel: () => w
            });
            const n = "undefined" != typeof window ? window : {};
            let o = !1;
            try {
                localStorage.getItem(""), o = !0
            } catch (e) {}
            var s;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(s || (s = {}));
            let i = 0;
            const a = "tv.logger.loglevel",
                c = "tv.logger.logHighRate",
                l = [];
            let d = null,
                u = null,
                g = null,
                h = NaN,
                m = s.WARNING,
                p = !1;

            function f() {
                return m
            }

            function y() {
                return p
            }

            function w(e) {
                e = Math.max(s.ERROR, Math.min(s.DEBUG, e)), m = e, R()
            }

            function v(e, t) {
                let r = l.reduce(((e, t) => e.concat(t)), []);
                return r.sort(((e, t) => e.id - t.id)), void 0 !== t && (r = r.filter((e => e.subSystemId === t))), "number" == typeof e && (r = r.slice(-e)), r
            }

            function b(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }
            const _ = n.lget = (e, t) => function(e, t) {
                let r, n = 0,
                    o = 0;
                for (r = e.length - 1; r >= 1 && (n += 8 * (1 + encodeURIComponent(e[r]).length), !(r - 1 > 0 && (o = 8 * (1 + encodeURIComponent(e[r - 1]).length), n + o > t))); r--);
                return e.slice(r)
            }(v(e, t).map(b), 75497472);

            function E(e, t, r, n) {
                if (t === u && n.id === g) return;
                const o = new Date;
                if (e <= s.NORMAL && function(e, t, r, n, o) {
                        "function" == typeof structuredClone && (t = structuredClone(t));
                        const s = {
                            id: i,
                            message: t,
                            subSystemId: n,
                            timestamp: Number(e)
                        };
                        i += 1, r.push(s), void 0 !== o && r.length > o && r.splice(0, 1)
                    }(o, t, r, n.id, n.maxCount), e <= m && (!n.highRate || y()) && (!d || n.id.match(d))) {
                    const r = o.toISOString() + ":" + n.id + ":" + t;
                    switch (e) {
                        case s.DEBUG:
                            console.debug(r);
                            break;
                        case s.INFO:
                        case s.NORMAL:
                            n.color ? console.log("%c" + r, "color: " + n.color) : console.log(r);
                            break;
                        case s.WARNING:
                            console.warn(r);
                            break;
                        case s.ERROR:
                            console.error(r)
                    }
                    u = t, g = n.id, h && clearTimeout(h), h = setTimeout((() => {
                        u = null, g = null, h = NaN
                    }), 1e3)
                }
            }

            function L(e, t = {}) {
                const r = [];
                l.push(r);
                const n = Object.assign(t, {
                    id: e
                });

                function o(e) {
                    return t => E(e, String(t), r, n)
                }
                return {
                    logDebug: o(s.DEBUG),
                    logError: o(s.ERROR),
                    logInfo: o(s.INFO),
                    logNormal: o(s.NORMAL),
                    logWarn: o(s.WARNING)
                }
            }
            const k = L("logger"),
                O = n.lon = (e, t) => {
                    w(s.DEBUG), k.logNormal("Debug logging enabled"), p = Boolean(e), d = t || null, R()
                },
                S = n.loff = () => {
                    w(s.INFO), k.logInfo("Debug logging disabled")
                };

            function R() {
                try {
                    o && (localStorage.setItem(c, String(p)), localStorage.setItem(a, String(m)))
                } catch (e) {
                    k.logWarn(`Cannot save logger state (level: ${m}, high-rate: ${p}) to localStorage: ${e.message}`)
                }
            }! function() {
                p = !!o && "true" === localStorage.getItem(c);
                let e = parseInt(o && localStorage.getItem(a) || "");
                Number.isNaN(e) && (e = s.WARNING), w(e), k.logNormal(`Init with settings - level: ${m}, high-rate: ${p}`)
            }(), n.performance && n.performance.now ? k.logNormal(`Sync logger and perf times, now is ${n.performance.now()}`) : k.logWarn("Perf time is not available")
        },
        440837: (e, t, r) => {
            "use strict";

            function n(e) {
                if (!e || "object" != typeof e) return e;
                let t;
                t = Array.isArray(e) ? [] : {};
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        const o = e[r];
                        t[r] = o && "object" == typeof o ? n(o) : o
                    }
                return t
            }

            function o(e, t) {
                for (const r in t) null !== t[r] && "object" == typeof t[r] && e.hasOwnProperty(r) ? o(e[r], t[r]) : e[r] = t[r];
                return e
            }
            r.r(t), r.d(t, {
                clone: () => n,
                merge: () => o
            })
        },
        566953: (e, t, r) => {
            r(778785).setClasses();
            var n = r(411963).whenDocumentReady,
                o = r(282616).handleTVLinksClick;
            n((() => {
                o()
            }))
        },
        702598: (e, t, r) => {
            "use strict";
            r.d(t, {
                fetch: () => o
            });
            const n = (0, r(338619).getLogger)("Fetch");

            function o(e, t, r = {}) {
                {
                    const {
                        logOnErrorStatus: o = !0,
                        logBodyOnError: s = !1
                    } = r;
                    t = t || {},
                        function(e) {
                            return new URL(e, document.baseURI).origin === location.origin
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const i = window.fetch(e, t);
                    return i.then((r => {
                        if (!r.ok && o) {
                            let o = "";
                            t.method && (o += `${t.method.toUpperCase()} `), o += e, o += `. Status ${r.status}`, r.statusText && (o += `. ${r.statusText}`), r.headers.via && (o += `. Via: ${r.headers.via}`), s && "string" == typeof t.body && (o += `. Body: ${t.body.slice(0,1024)}`), n.logError(o)
                        }
                        return r
                    }), (r => {
                        if (r && "AbortError" === r.name) return;
                        let o = "";
                        t.method && (o += `${t.method.toUpperCase()} `), o += e, navigator.onLine ? o += `. ${r}` : o += ". User is offline.", n.logError(o)
                    })), i
                }
            }
        },
        226057: (e, t, r) => {
            "use strict";

            function n(e) {
                const t = [];
                for (const r in e) e.hasOwnProperty(r) && null != e[r] && t.push({
                    key: r,
                    pair: encodeURIComponent(r) + "=" + encodeURIComponent(e[r])
                });
                return t.sort(((e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0)).map((e => e.pair)).join("&")
            }
            r.d(t, {
                createUrlParams: () => n
            })
        },
        248213: (e, t, r) => {
            "use strict";
            r.d(t, {
                buildUtmQueryString: () => a,
                filterUtmInfo: () => i
            });
            var n = r(226057),
                o = r(433524);
            const s = ["utm_source", "utm_medium", "utm_campaign"];

            function i(e) {
                const t = {};
                return s.forEach((r => {
                    const n = e[r];
                    "string" == typeof n && "" !== n && (t[r] = (0, o.htmlEscape)(n))
                })), t
            }

            function a(e, t = !1) {
                const r = (0, n.createUrlParams)(e);
                return r && t ? "?" + r : r
            }
        }
    }
]);