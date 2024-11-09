(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [8746], {
        686521: e => {
            e.exports = {}
        },
        453917: e => {
            e.exports = {
                "css-value-copyright-transition-params": ".6s 0s cubic-bezier(.4, .01, .22, 1)",
                "css-value-copyright-transition-params-half-time": ".3s 0s cubic-bezier(.4, .01, .22, 1)",
                label: "label-dzbd7lyV",
                logoWrap: "logoWrap-dzbd7lyV",
                expandedWithTransition: "expandedWithTransition-dzbd7lyV",
                expandedByClick: "expandedByClick-dzbd7lyV",
                start: "start-dzbd7lyV",
                end: "end-dzbd7lyV",
                snap: "snap-dzbd7lyV",
                top: "top-dzbd7lyV",
                bottom: "bottom-dzbd7lyV",
                large: "large-dzbd7lyV",
                expanded: "expanded-dzbd7lyV",
                label__link: "label__link-dzbd7lyV"
            }
        },
        296774: e => {
            e.exports = {}
        },
        663384: e => {
            e.exports = {}
        },
        167175: (e, t, n) => {
            "use strict";
            n.d(t, {
                isAndroid: () => h,
                isAnyMobile: () => b,
                isBlackBerry: () => p,
                isChrome: () => s,
                isEdge: () => g,
                isFF: () => l,
                isIOS: () => m,
                isIPad: () => f,
                isLinux: () => _,
                isMac: () => u,
                isOperaMini: () => w,
                isSafari: () => c,
                isWindows: () => d,
                mobiletouch: () => i,
                touch: () => r
            });
            const o = "undefined" != typeof window && "undefined" != typeof navigator,
                a = o && "ontouchstart" in window,
                i = o && a && "onorientationchange" in window,
                r = o && (a || !!navigator.maxTouchPoints),
                s = o && window.chrome && window.chrome.runtime,
                l = o && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                g = o && /\sEdge\/\d\d\b/.test(navigator.userAgent),
                c = o && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
                u = o && /mac/i.test(navigator.platform),
                d = o && /Win32|Win64/i.test(navigator.platform),
                _ = o && /Linux/i.test(navigator.platform),
                h = o && /Android/i.test(navigator.userAgent),
                p = o && /BlackBerry/i.test(navigator.userAgent),
                m = o && /iPhone|iPad|iPod/.test(navigator.platform),
                w = o && /Opera Mini/i.test(navigator.userAgent),
                f = o && ("MacIntel" === navigator.platform && navigator.maxTouchPoints >= 1 || /iPad/.test(navigator.platform)),
                b = h || p || m || w
        },
        195619: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => o
            });
            const o = n.i18next
        },
        62889: (e, t, n) => {
            "use strict";
            n.d(t, {
                CopyrightPosition: () => o,
                copyrightLabel: () => l
            });
            var o, a = n(497754),
                i = n(995683),
                r = n(124829),
                s = n(453917);

            function l({
                svgText: e,
                icon: t,
                theme: n,
                url: l,
                mode: g,
                verticalPosition: c = o.Vertical.Bottom,
                horizontalPosition: u = o.Horizontal.End,
                snapToEdge: d = !0,
                isExpanded: _ = !1,
                className: h
            }) {
                let p;
                switch (g) {
                    case "new":
                    case "with_border":
                    case "large_trade":
                        p = (0, r.clone)(n);
                        break;
                    default:
                        p = (0, i.mergeThemes)((0, r.clone)(s), n)
                }
                const m = document.createElement("span");
                let w;
                l && (w = document.createElement("a"), w.classList.add(...p.label__link.split(/\s/)), w.href = l, w.target = "_blank", w.rel = "noopener noreferrer", w.setAttribute("data-target-type", "copyright"), m.append(w)), m.className = a(p.label, u === o.Horizontal.Start && p.start, u === o.Horizontal.End && p.end, c === o.Vertical.Top && p.top, c === o.Vertical.Bottom && p.bottom, d && "large_trade" !== g && p.snap, "large_old" === g && p.large, (_ || "large_trade" === g) && p.expanded, h, "js-copyright-label"), m.addEventListener("click", (() => {
                    function e() {
                        m.classList.remove(p.expandedByClick), m.removeEventListener("mouseleave", e)
                    }
                    m.classList.contains(p.expandedWithTransition) || m.classList.contains(p.expanded) || (m.classList.contains(p.expandedByClick) ? l || e() : (m.classList.add(p.expandedByClick), m.addEventListener("mouseleave", e)))
                }));
                const f = document.createElement("span");
                f.className = p.logoWrap, f.innerHTML = t;
                const b = document.createElement("span");
                return b.className = p.svgTextWrap, b.innerHTML = e, m.append(f, b), [m, p]
            }! function(e) {
                let t, n;
                ! function(e) {
                    e[e.Bottom = 0] = "Bottom", e[e.Top = 1] = "Top"
                }(t = e.Vertical || (e.Vertical = {})),
                function(e) {
                    e[e.Start = 0] = "Start", e[e.End = 1] = "End"
                }(n = e.Horizontal || (e.Horizontal = {}))
            }(o || (o = {}))
        },
        351079: (e, t, n) => {
            "use strict";
            n.d(t, {
                CopyrightPosition: () => a.CopyrightPosition,
                createCopyrightLabel: () => r
            });
            var o = n(497754),
                a = n(62889),
                i = n(952598);

            function r({
                sheriffOptions: e,
                ...t
            }) {
                const [n, r] = (0, a.copyrightLabel)(t), s = e && e.includes(i.KnownAction.Expand), l = e && e.includes(i.KnownAction.LargeTradeLogo);
                return n.className = o(n.className, (s || l) && r.expandedWithTransition), n
            }
        },
        23580: (e, t, n) => {
            "use strict";

            function o(e, t) {
                return e && e.utm_campaign && (e.utm_campaign += `-${t}`), e
            }
            async function a(e, t, o, a) {
                if ("lentaru" === e) {
                    const {
                        getLentaCopyrightData: e
                    } = await Promise.all([n.e(83035), n.e(1523)]).then(n.bind(n, 466672));
                    return e()
                }
                if ("cmoneycomtw" === e) {
                    const {
                        getCmoneycomtwCopyrightData: e
                    } = await Promise.all([n.e(25558), n.e(18867), n.e(42091)]).then(n.bind(n, 20922));
                    return e(t, o)
                }
                if ("new" === a) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([n.e(30641), n.e(36228)]).then(n.bind(n, 703094));
                    return e(t, o)
                }
                if ("with_border" === a) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([n.e(24328), n.e(37753)]).then(n.bind(n, 513316));
                    return e(t, o)
                }
                if ("large_trade" === a) {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([n.e(19545), n.e(47259)]).then(n.bind(n, 203515));
                    return e(t, o)
                } {
                    const {
                        getTradingViewCopyrightData: e
                    } = await Promise.all([n.e(25558), n.e(53259)]).then(n.bind(n, 88136));
                    return e(t, o)
                }
            }
            n.d(t, {
                addUtmCampaignSource: () => o,
                getCustomerCopyrightData: () => a
            })
        },
        650401: (e, t, n) => {
            "use strict";
            n.d(t, {
                getWidgetSheriffActions: () => g
            });
            var o = n(702598),
                a = n(338619),
                i = n(952598);
            const r = window.WIDGET_SHERIFF_HOST || "https://widget-sheriff.xstaging-widget.tv",
                s = (0, a.getLogger)("WidgetSheriff.Widget");
            let l = null;
            async function g() {
                return null === l && (l = await async function() {
                    const e = function() {
                        if (document.location.ancestorOrigins && document.location.ancestorOrigins.length) return document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1];
                        try {
                            return new URL(document.referrer).origin
                        } catch (e) {
                            return document.location.origin || null
                        }
                    }();
                    if (null === e) return s.logWarn("ancestorOrigin is undefined"), Promise.resolve([]);
                    const t = new URL("/sheriff/api/v1/rules/search", r);
                    t.searchParams.append("origin", e);
                    return (await (0, o.fetch)(t.toJSON()).then((e => {
                        if (!e.ok) throw new Error("Guard request error occured");
                        return 204 === e.status ? Promise.resolve({
                            actions: []
                        }) : e.json()
                    })).catch((e => (s.logWarn(e.message), Promise.resolve({
                        actions: []
                    }))))).actions.filter((e => i.widgetSheriffActions.has(e)))
                }()), Promise.resolve(l)
            }
        },
        952598: (e, t, n) => {
            "use strict";
            var o;
            n.d(t, {
                    KnownAction: () => o,
                    widgetSheriffActions: () => a
                }),
                function(e) {
                    e.Expand = "expand-logo", e.LargeTradeLogo = "large-trade-logo"
                }(o || (o = {}));
            const a = new Set([o.Expand, o.LargeTradeLogo])
        },
        175341: (e, t, n) => {
            "use strict";
            n.d(t, {
                createEmbedWidgetWrapper: () => l
            });
            var o = n(650151),
                a = n(650401),
                i = n(351079),
                r = n(23580),
                s = n(952598);

            function l(e, t, n, l = {}) {
                if (null === e.parentElement) return console.warn("Can not wrap 'elWidgetContainer' because it has no parentElement"), e;
                let g = null,
                    c = document.querySelector(".js-embed-widget-body");
                const u = null !== c;
                if (u) {
                    c = (0, o.ensureNotNull)(c), g = (0, o.ensureNotNull)(c.parentElement);
                    let e = document.querySelector(".js-embed-widget-head");
                    null === e && (e = document.createElement("div"), e.classList.add("tv-embed-widget-wrapper__header"), e.classList.add("js-embed-widget-head"), g.insertBefore(e, c))
                } else g = document.createElement("div"), g.classList.add("tv-embed-widget-wrapper"), g.innerHTML = '<div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div><div class="tv-embed-widget-wrapper__body js-embed-widget-body"></div>', c = g.querySelector(".js-embed-widget-body");
                if (l.overflowAuto && c.classList.add("tv-embed-widget-wrapper__body--overflow_auto"), l.showBorderOnTransparent && c.classList.add("tv-embed-widget-wrapper__body--border-on-transparent"), !l.isWhiteLabel) {
                    !async function(e, t, n, l, g = {}) {
                        var c, u;
                        const d = g.isSheriffDisabled ? [] : await (0, a.getWidgetSheriffActions)(),
                            _ = d.includes(s.KnownAction.LargeTradeLogo),
                            h = function(e) {
                                return ["crypto-coins-heatmap", "forex-cross-rates", "market-overview", "symbol-overview", "market-quotes", "stock-heatmap", "screener", "forex-heat-map", "crypto-mkt-screener", "events", "hotlists"].includes(e)
                            }(t),
                            p = _ && h ? "large_trade" : void 0,
                            m = await (0, r.getCustomerCopyrightData)(g.customer, g.locale, (0, r.addUtmCampaignSource)(l, "logo"), p),
                            w = null !== (u = null != p ? p : null === (c = g.copyrightOptions) || void 0 === c ? void 0 : c.mode) && void 0 !== u ? u : "small_old";
                        (0, o.ensureNotNull)(e).appendChild((0, i.createCopyrightLabel)({
                            sheriffOptions: d,
                            snapToEdge: n,
                            ...g.copyrightOptions,
                            ...m,
                            mode: w
                        }))
                    }(c, t, !document.documentElement.classList.contains("is-transparent") || Boolean(l.showBorderOnTransparent), n, l)
                }
                return u || (e.parentElement.insertBefore(g, e), c.appendChild(e)), e
            }
        },
        901107: (e, t, n) => {
            "use strict";
            n.d(t, {
                createEmbedWidgetWrapper: () => o.createEmbedWidgetWrapper
            });
            n(296774);
            var o = n(175341)
        },
        314802: (e, t, n) => {
            "use strict";
            n.d(t, {
                isOnMobileAppPage: () => a
            });
            var o = n(181706);

            function a(e, t = !1) {
                const {
                    searchParams: n
                } = new URL(String(location));
                let a = "true" === n.get("mobileapp_new"),
                    i = "true" === n.get("mobileapp");
                if (!t) {
                    const e = o.get("tv_app") || "";
                    a || (a = ["android", "android_nps"].includes(e)), i || (i = "ios" === e)
                }
                return !("new" !== e && "any" !== e || !a) || !("new" === e || !i)
            }
        },
        439563: (e, t, n) => {
            "use strict";
            async function o() {
                const e = (await Promise.all([n.e(22321), n.e(71289), n.e(36683)]).then(n.bind(n, 469449))).getTrackerInstance();
                return e || null
            }
            n.d(t, {
                getEmbedWidgetTracker: () => o
            })
        },
        812352: (e, t, n) => {
            "use strict";
            n.d(t, {
                getLocale: () => r,
                getLocaleIso: () => s
            });
            var o = n(650151),
                a = n(882289);
            const i = function() {
                const e = document.querySelectorAll("link[rel~=link-locale][data-locale]");
                if (0 === e.length) return a;
                const t = {};
                return e.forEach((e => {
                    const n = (0, o.ensureNotNull)(e.getAttribute("data-locale"));
                    t[n] = { ...a[n],
                        href: e.href
                    }
                })), t
            }();

            function r(e) {
                return e = e || window.locale, i[e]
            }

            function s(e) {
                var t;
                return e = e || window.locale, null === (t = i[e]) || void 0 === t ? void 0 : t.iso
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function o(e, t, n = {}) {
                return Object.assign({}, e, function(e, t, n = {}) {
                    const o = Object.assign({}, t);
                    for (const a of Object.keys(t)) {
                        const i = n[a] || a;
                        i in e && (o[a] = [e[i], t[a]].join(" "))
                    }
                    return o
                }(e, t, n))
            }
            n.d(t, {
                mergeThemes: () => o
            })
        },
        692558: (e, t, n) => {
            "use strict";
            n.d(t, {
                LOGLEVEL: () => i,
                getLogHistory: () => v,
                getLogLevel: () => m,
                getLogger: () => k,
                getRawLogHistory: () => b,
                isHighRateEnabled: () => w,
                loggingOff: () => O,
                loggingOn: () => N,
                serializeLogHistoryEntry: () => y,
                setLogLevel: () => f
            });
            const o = "undefined" != typeof window ? window : {};
            let a = !1;
            try {
                localStorage.getItem(""), a = !0
            } catch (e) {}
            var i;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(i || (i = {}));
            let r = 0;
            const s = "tv.logger.loglevel",
                l = "tv.logger.logHighRate",
                g = [];
            let c = null,
                u = null,
                d = null,
                _ = NaN,
                h = i.WARNING,
                p = !1;

            function m() {
                return h
            }

            function w() {
                return p
            }

            function f(e) {
                e = Math.max(i.ERROR, Math.min(i.DEBUG, e)), h = e, I()
            }

            function b(e, t) {
                let n = g.reduce(((e, t) => e.concat(t)), []);
                return n.sort(((e, t) => e.id - t.id)), void 0 !== t && (n = n.filter((e => e.subSystemId === t))), "number" == typeof e && (n = n.slice(-e)), n
            }

            function y(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }
            const v = o.lget = (e, t) => function(e, t) {
                let n, o = 0,
                    a = 0;
                for (n = e.length - 1; n >= 1 && (o += 8 * (1 + encodeURIComponent(e[n]).length), !(n - 1 > 0 && (a = 8 * (1 + encodeURIComponent(e[n - 1]).length), o + a > t))); n--);
                return e.slice(n)
            }(b(e, t).map(y), 75497472);

            function L(e, t, n, o) {
                if (t === u && o.id === d) return;
                const a = new Date;
                if (e <= i.NORMAL && function(e, t, n, o, a) {
                        "function" == typeof structuredClone && (t = structuredClone(t));
                        const i = {
                            id: r,
                            message: t,
                            subSystemId: o,
                            timestamp: Number(e)
                        };
                        r += 1, n.push(i), void 0 !== a && n.length > a && n.splice(0, 1)
                    }(a, t, n, o.id, o.maxCount), e <= h && (!o.highRate || w()) && (!c || o.id.match(c))) {
                    const n = a.toISOString() + ":" + o.id + ":" + t;
                    switch (e) {
                        case i.DEBUG:
                            console.debug(n);
                            break;
                        case i.INFO:
                        case i.NORMAL:
                            o.color ? console.log("%c" + n, "color: " + o.color) : console.log(n);
                            break;
                        case i.WARNING:
                            console.warn(n);
                            break;
                        case i.ERROR:
                            console.error(n)
                    }
                    u = t, d = o.id, _ && clearTimeout(_), _ = setTimeout((() => {
                        u = null, d = null, _ = NaN
                    }), 1e3)
                }
            }

            function k(e, t = {}) {
                const n = [];
                g.push(n);
                const o = Object.assign(t, {
                    id: e
                });

                function a(e) {
                    return t => L(e, String(t), n, o)
                }
                return {
                    logDebug: a(i.DEBUG),
                    logError: a(i.ERROR),
                    logInfo: a(i.INFO),
                    logNormal: a(i.NORMAL),
                    logWarn: a(i.WARNING)
                }
            }
            const E = k("logger"),
                N = o.lon = (e, t) => {
                    f(i.DEBUG), E.logNormal("Debug logging enabled"), p = Boolean(e), c = t || null, I()
                },
                O = o.loff = () => {
                    f(i.INFO), E.logInfo("Debug logging disabled")
                };

            function I() {
                try {
                    a && (localStorage.setItem(l, String(p)), localStorage.setItem(s, String(h)))
                } catch (e) {
                    E.logWarn(`Cannot save logger state (level: ${h}, high-rate: ${p}) to localStorage: ${e.message}`)
                }
            }! function() {
                p = !!a && "true" === localStorage.getItem(l);
                let e = parseInt(a && localStorage.getItem(s) || "");
                Number.isNaN(e) && (e = i.WARNING), f(e), E.logNormal(`Init with settings - level: ${h}, high-rate: ${p}`)
            }(), o.performance && o.performance.now ? E.logNormal(`Sync logger and perf times, now is ${o.performance.now()}`) : E.logWarn("Perf time is not available")
        },
        440837: (e, t, n) => {
            "use strict";

            function o(e) {
                if (!e || "object" != typeof e) return e;
                let t;
                t = Array.isArray(e) ? [] : {};
                for (const n in e)
                    if (e.hasOwnProperty(n)) {
                        const a = e[n];
                        t[n] = a && "object" == typeof a ? o(a) : a
                    }
                return t
            }

            function a(e, t) {
                for (const n in t) null !== t[n] && "object" == typeof t[n] && e.hasOwnProperty(n) ? a(e[n], t[n]) : e[n] = t[n];
                return e
            }
            n.r(t), n.d(t, {
                clone: () => o,
                merge: () => a
            })
        },
        375397: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedValue: () => l
            });
            var o = n(805578),
                a = n(692558),
                i = n(728832);
            const r = (0, a.getLogger)("Common.WatchedValue");

            function s(e) {
                r.logError(`${e&&(e.stack||e.message)}`)
            }
            class l {
                constructor(...e) {
                    this._listeners = [], e.length > 0 && (this._value = e[0])
                }
                destroy() {
                    this.unsubscribe()
                }
                value() {
                    return this._owner ? this._owner._value : this._value
                }
                setValue(e, t) {
                    const n = this._owner ? this._owner : this;
                    if (n.writeLock) return;
                    const o = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                    if (!t && o && n.hasOwnProperty("_value")) return;
                    n._value = e;
                    const a = n._listeners.slice();
                    let i = 0;
                    for (let t = 0; t < a.length; t++) {
                        a[t].once && (n._listeners.splice(t - i, 1), i++);
                        try {
                            a[t].cb(e)
                        } catch (e) {
                            s(e)
                        }
                    }
                }
                deleteValue() {
                    this.setValue(void 0)
                }
                subscribe(e, t) {
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    const n = !!t && !!t.once,
                        o = !!t && !!t.callWithLast,
                        a = this._owner ? this._owner : this;
                    if (o && a.hasOwnProperty("_value")) {
                        try {
                            e(a._value)
                        } catch (e) {
                            s(e)
                        }
                        if (n) return
                    }
                    a._listeners.push({
                        cb: e,
                        owner: this,
                        once: !!t && !!t.once
                    })
                }
                unsubscribe(e) {
                    const t = this._owner ? this._owner : this;
                    void 0 === e && (e = null);
                    const n = t._listeners;
                    for (let o = n.length; o--;) n[o].owner !== this && t !== this || n[o].cb !== e && null !== e || n.splice(o, 1)
                }
                readonly() {
                    if (this._readonlyInstance) return this._readonlyInstance;
                    const e = {
                        subscribe: this.subscribe.bind(this),
                        unsubscribe: this.unsubscribe.bind(this),
                        value: this.value.bind(this),
                        when: this.when.bind(this),
                        ownership: this.ownership.bind(this),
                        spawnOwnership: this.spawnOwnership.bind(this),
                        weakReference: this.weakReference.bind(this),
                        spawn: e => this.spawn(e).readonly(),
                        destroy: this.destroy.bind(this)
                    };
                    return this._readonlyInstance = e, e
                }
                spawn(e) {
                    return new g(this._owner || this, e)
                }
                when(e) {
                    (0, i.callWhen)(this, (e => Boolean(e)), (() => {
                        try {
                            e(this.value())
                        } catch (e) {
                            s(e)
                        }
                    }))
                }
                assertNoSubscriptions() {
                    0
                }
                ownership() {
                    return (0, o.ownership)(this)
                }
                spawnOwnership() {
                    return (0, o.ownership)(this.spawn())
                }
                weakReference() {
                    return (0, o.weakReference)(this)
                }
            }
            class g extends l {
                constructor(e, t) {
                    super(), delete this._listeners, this._owner = e, this._onDestroy = t
                }
                destroy() {
                    var e;
                    try {
                        null === (e = this._onDestroy) || void 0 === e || e.call(this)
                    } catch (e) {
                        s(e)
                    }
                    super.destroy()
                }
                readonly() {
                    return super.readonly()
                }
            }
        },
        566953: (e, t, n) => {
            n(778785).setClasses();
            var o = n(411963).whenDocumentReady,
                a = n(282616).handleTVLinksClick;
            o((() => {
                a()
            }))
        },
        779421: (e, t, n) => {
            "use strict";
            n(686521)
        },
        702598: (e, t, n) => {
            "use strict";
            n.d(t, {
                fetch: () => a
            });
            const o = (0, n(338619).getLogger)("Fetch");

            function a(e, t, n = {}) {
                {
                    const {
                        logOnErrorStatus: a = !0,
                        logBodyOnError: i = !1
                    } = n;
                    t = t || {},
                        function(e) {
                            return new URL(e, document.baseURI).origin === location.origin
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const r = window.fetch(e, t);
                    return r.then((n => {
                        if (!n.ok && a) {
                            let a = "";
                            t.method && (a += `${t.method.toUpperCase()} `), a += e, a += `. Status ${n.status}`, n.statusText && (a += `. ${n.statusText}`), n.headers.via && (a += `. Via: ${n.headers.via}`), i && "string" == typeof t.body && (a += `. Body: ${t.body.slice(0,1024)}`), o.logError(a)
                        }
                        return n
                    }), (n => {
                        if (n && "AbortError" === n.name) return;
                        let a = "";
                        t.method && (a += `${t.method.toUpperCase()} `), a += e, navigator.onLine ? a += `. ${n}` : a += ". User is offline.", o.logError(a)
                    })), r
                }
            }
        },
        226057: (e, t, n) => {
            "use strict";

            function o(e) {
                const t = [];
                for (const n in e) e.hasOwnProperty(n) && null != e[n] && t.push({
                    key: n,
                    pair: encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
                });
                return t.sort(((e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0)).map((e => e.pair)).join("&")
            }
            n.d(t, {
                createUrlParams: () => o
            })
        },
        248213: (e, t, n) => {
            "use strict";
            n.d(t, {
                buildUtmQueryString: () => s,
                filterUtmInfo: () => r
            });
            var o = n(226057),
                a = n(433524);
            const i = ["utm_source", "utm_medium", "utm_campaign"];

            function r(e) {
                const t = {};
                return i.forEach((n => {
                    const o = e[n];
                    "string" == typeof o && "" !== o && (t[n] = (0, a.htmlEscape)(o))
                })), t
            }

            function s(e, t = !1) {
                const n = (0, o.createUrlParams)(e);
                return n && t ? "?" + n : n
            }
        },
        282616: (e, t, n) => {
            "use strict";
            n.d(t, {
                handleTVLinksClick: () => r
            });
            var o = n(439563),
                a = n(248213),
                i = n(924225);

            function r() {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(":link");
                    if (!(null == t ? void 0 : t.hostname) || !(0, i.isInternalHost)(t.hostname, "tradingview.com")) return;
                    const n = t.dataset.targetType || null;
                    ! function(e, t) {
                        const n = function() {
                                const e = window.initData.hashSettings;
                                if (Object.keys(e).length > 0) return (0, a.filterUtmInfo)(e);
                                const t = new URLSearchParams(location.href);
                                return {
                                    utm_campaign: t.get("utm_campaign") || void 0,
                                    utm_source: t.get("utm_source") || void 0
                                }
                            }(),
                            i = function(e) {
                                var t;
                                const n = (null === (t = location.ancestorOrigins) || void 0 === t ? void 0 : t[0]) || document.referrer;
                                return e.utm_source || function(e) {
                                    try {
                                        return new URL(e).host
                                    } catch (e) {
                                        return ""
                                    }
                                }(n)
                            }(n);
                        !async function(e) {
                            var t;
                            null === (t = await (0, o.getEmbedWidgetTracker)()) || void 0 === t || t.trackWidgetTVLinkClick(e)
                        }({
                            widget_type: s(n),
                            domain: i,
                            link: e,
                            target_type: t
                        })
                    }(t.href, n)
                }))
            }

            function s(e) {
                if (e.utm_campaign) return e.utm_campaign;
                const t = location.pathname;
                return t.includes("embed-widget") ? t.split("/")[2] : t
            }
        },
        882289: e => {
            "use strict";
            e.exports = JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"sa","geoip_code":"sa","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
        }
    }
]);