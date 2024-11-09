(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20750], {
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
        62889: (e, t, n) => {
            "use strict";
            n.d(t, {
                copyrightLabel: () => l
            });
            var s, r = n(497754),
                i = n(995683),
                a = n(124829),
                o = n(453917);

            function l({
                svgText: e,
                icon: t,
                theme: n,
                url: l,
                mode: c,
                verticalPosition: d = s.Vertical.Bottom,
                horizontalPosition: u = s.Horizontal.End,
                snapToEdge: h = !0,
                isExpanded: p = !1,
                className: b
            }) {
                let g;
                switch (c) {
                    case "new":
                    case "with_border":
                    case "large_trade":
                        g = (0, a.clone)(n);
                        break;
                    default:
                        g = (0, i.mergeThemes)((0, a.clone)(o), n)
                }
                const m = document.createElement("span");
                let f;
                l && (f = document.createElement("a"), f.classList.add(...g.label__link.split(/\s/)), f.href = l, f.target = "_blank", f.rel = "noopener noreferrer", f.setAttribute("data-target-type", "copyright"), m.append(f)), m.className = r(g.label, u === s.Horizontal.Start && g.start, u === s.Horizontal.End && g.end, d === s.Vertical.Top && g.top, d === s.Vertical.Bottom && g.bottom, h && "large_trade" !== c && g.snap, "large_old" === c && g.large, (p || "large_trade" === c) && g.expanded, b, "js-copyright-label"), m.addEventListener("click", (() => {
                    function e() {
                        m.classList.remove(g.expandedByClick), m.removeEventListener("mouseleave", e)
                    }
                    m.classList.contains(g.expandedWithTransition) || m.classList.contains(g.expanded) || (m.classList.contains(g.expandedByClick) ? l || e() : (m.classList.add(g.expandedByClick), m.addEventListener("mouseleave", e)))
                }));
                const _ = document.createElement("span");
                _.className = g.logoWrap, _.innerHTML = t;
                const y = document.createElement("span");
                return y.className = g.svgTextWrap, y.innerHTML = e, m.append(_, y), [m, g]
            }! function(e) {
                let t, n;
                ! function(e) {
                    e[e.Bottom = 0] = "Bottom", e[e.Top = 1] = "Top"
                }(t = e.Vertical || (e.Vertical = {})),
                function(e) {
                    e[e.Start = 0] = "Start", e[e.End = 1] = "End"
                }(n = e.Horizontal || (e.Horizontal = {}))
            }(s || (s = {}))
        },
        351079: (e, t, n) => {
            "use strict";
            n.d(t, {
                createCopyrightLabel: () => a
            });
            var s = n(497754),
                r = n(62889),
                i = n(952598);

            function a({
                sheriffOptions: e,
                ...t
            }) {
                const [n, a] = (0, r.copyrightLabel)(t), o = e && e.includes(i.KnownAction.Expand), l = e && e.includes(i.KnownAction.LargeTradeLogo);
                return n.className = s(n.className, (o || l) && a.expandedWithTransition), n
            }
        },
        952598: (e, t, n) => {
            "use strict";
            var s;
            n.d(t, {
                    KnownAction: () => s,
                    widgetSheriffActions: () => r
                }),
                function(e) {
                    e.Expand = "expand-logo", e.LargeTradeLogo = "large-trade-logo"
                }(s || (s = {}));
            const r = new Set([s.Expand, s.LargeTradeLogo])
        },
        889267: (e, t, n) => {
            "use strict";
            n.d(t, {
                tokenize: () => i
            });
            const s = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: n(173777).SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                r = new RegExp(Object.values(s).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function i(e) {
                if (!e) return [];
                const t = [],
                    n = Object.keys(s);
                let i;
                for (; i = r.exec(e);) {
                    let e = !1;
                    for (let s = n.length; s--;)
                        if (i[s + 1]) {
                            n[s] && t.push({
                                value: i[s + 1],
                                type: n[s],
                                precedence: 0,
                                offset: i.index
                            }), e = !0;
                            break
                        }
                    e || t.push({
                        value: i[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: i.index
                    })
                }
                return t
            }
        },
        942634: (e, t, n) => {
            "use strict";
            n.d(t, {
                Delegate: () => i
            });
            const s = (0, n(692558).getLogger)("Common.Delegate");

            function r(e) {
                return !e.singleShot
            }
            class i {
                constructor() {
                    this.fire = this._fireImpl.bind(this), this._listeners = []
                }
                subscribe(e, t, n) {
                    this._listeners.push({
                        object: e,
                        member: t,
                        singleShot: !!n,
                        skip: !1
                    })
                }
                unsubscribe(e, t) {
                    for (let n = 0; n < this._listeners.length; ++n) {
                        const s = this._listeners[n];
                        if (s.object === e && s.member === t) {
                            s.skip = !0, this._listeners.splice(n, 1);
                            break
                        }
                    }
                }
                unsubscribeAll(e) {
                    for (let t = this._listeners.length - 1; t >= 0; --t) {
                        const n = this._listeners[t];
                        n.object === e && (n.skip = !0, this._listeners.splice(t, 1))
                    }
                }
                destroy() {
                    this._listeners = []
                }
                _fireImpl(...e) {
                    const t = this._listeners;
                    this._listeners = this._listeners.filter(r);
                    const n = t.length;
                    for (let r = 0; r < n; ++r) {
                        const n = t[r];
                        if (!n.skip) try {
                            n.member.apply(n.object || null, e)
                        } catch (e) {
                            s.logError(`${e&&(e.stack||e.message)}`)
                        }
                    }
                }
            }
        },
        375397: (e, t, n) => {
            "use strict";
            n.d(t, {
                WatchedValue: () => l
            });
            var s = n(805578),
                r = n(692558),
                i = n(728832);
            const a = (0, r.getLogger)("Common.WatchedValue");

            function o(e) {
                a.logError(`${e&&(e.stack||e.message)}`)
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
                    const s = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                    if (!t && s && n.hasOwnProperty("_value")) return;
                    n._value = e;
                    const r = n._listeners.slice();
                    let i = 0;
                    for (let t = 0; t < r.length; t++) {
                        r[t].once && (n._listeners.splice(t - i, 1), i++);
                        try {
                            r[t].cb(e)
                        } catch (e) {
                            o(e)
                        }
                    }
                }
                deleteValue() {
                    this.setValue(void 0)
                }
                subscribe(e, t) {
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    const n = !!t && !!t.once,
                        s = !!t && !!t.callWithLast,
                        r = this._owner ? this._owner : this;
                    if (s && r.hasOwnProperty("_value")) {
                        try {
                            e(r._value)
                        } catch (e) {
                            o(e)
                        }
                        if (n) return
                    }
                    r._listeners.push({
                        cb: e,
                        owner: this,
                        once: !!t && !!t.once
                    })
                }
                unsubscribe(e) {
                    const t = this._owner ? this._owner : this;
                    void 0 === e && (e = null);
                    const n = t._listeners;
                    for (let s = n.length; s--;) n[s].owner !== this && t !== this || n[s].cb !== e && null !== e || n.splice(s, 1)
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
                    return new c(this._owner || this, e)
                }
                when(e) {
                    (0, i.callWhen)(this, (e => Boolean(e)), (() => {
                        try {
                            e(this.value())
                        } catch (e) {
                            o(e)
                        }
                    }))
                }
                assertNoSubscriptions() {
                    0
                }
                ownership() {
                    return (0, s.ownership)(this)
                }
                spawnOwnership() {
                    return (0, s.ownership)(this.spawn())
                }
                weakReference() {
                    return (0, s.weakReference)(this)
                }
            }
            class c extends l {
                constructor(e, t) {
                    super(), delete this._listeners, this._owner = e, this._onDestroy = t
                }
                destroy() {
                    var e;
                    try {
                        null === (e = this._onDestroy) || void 0 === e || e.call(this)
                    } catch (e) {
                        o(e)
                    }
                    super.destroy()
                }
                readonly() {
                    return super.readonly()
                }
            }
        },
        79342: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                guid: () => r,
                randomHash: () => i,
                randomHashN: () => a
            });
            const s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function r() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function i() {
                return a(12)
            }

            function a(e) {
                let t = "";
                for (let n = 0; n < e; ++n) {
                    const e = Math.floor(Math.random() * s.length);
                    t += s[e]
                }
                return t
            }
        },
        282616: (e, t, n) => {
            "use strict";
            n.d(t, {
                handleTVLinksClick: () => a
            });
            var s = n(439563),
                r = n(248213),
                i = n(924225);

            function a() {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(":link");
                    if (!(null == t ? void 0 : t.hostname) || !(0, i.isInternalHost)(t.hostname, "tradingview.com")) return;
                    const n = t.dataset.targetType || null;
                    ! function(e, t) {
                        const n = function() {
                                const e = window.initData.hashSettings;
                                if (Object.keys(e).length > 0) return (0, r.filterUtmInfo)(e);
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
                            null === (t = await (0, s.getEmbedWidgetTracker)()) || void 0 === t || t.trackWidgetTVLinkClick(e)
                        }({
                            widget_type: o(n),
                            domain: i,
                            link: e,
                            target_type: t
                        })
                    }(t.href, n)
                }))
            }

            function o(e) {
                if (e.utm_campaign) return e.utm_campaign;
                const t = location.pathname;
                return t.includes("embed-widget") ? t.split("/")[2] : t
            }
        },
        135732: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackWidgetLoadMetaInfo: () => r
            });
            var s = n(439563);
            async function r(e) {
                var t;
                Math.random() > .005 || null === (t = await (0, s.getEmbedWidgetTracker)()) || void 0 === t || t.trackWidgetLoadMetaInfo(e)
            }
        }
    }
]);