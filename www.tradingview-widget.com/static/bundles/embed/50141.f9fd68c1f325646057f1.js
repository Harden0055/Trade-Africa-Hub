(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [50141], {
        650151: (e, t) => {
            "use strict";

            function o(e, t) {
                if (void 0 === e) throw new Error("".concat(null != t ? t : "Value", " is undefined"));
                return e
            }

            function r(e, t) {
                if (null === e) throw new Error("".concat(null != t ? t : "Value", " is null"));
                return e
            }
            t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
            }, t.ensureDefined = o, t.ensureNotNull = r
        },
        78217: e => {
            e.exports = {
                "tv-circle-logo-pair": "tv-circle-logo-pair-ocURKVwI",
                "tv-circle-logo-pair--xxxxsmall": "tv-circle-logo-pair--xxxxsmall-ocURKVwI",
                "tv-circle-logo-pair--xxxsmall": "tv-circle-logo-pair--xxxsmall-ocURKVwI",
                "tv-circle-logo-pair--xxsmall": "tv-circle-logo-pair--xxsmall-ocURKVwI",
                "tv-circle-logo-pair--xsmall": "tv-circle-logo-pair--xsmall-ocURKVwI",
                "tv-circle-logo-pair--small": "tv-circle-logo-pair--small-ocURKVwI",
                "tv-circle-logo-pair--medium": "tv-circle-logo-pair--medium-ocURKVwI",
                "tv-circle-logo-pair--large": "tv-circle-logo-pair--large-ocURKVwI",
                "tv-circle-logo-pair--xlarge": "tv-circle-logo-pair--xlarge-ocURKVwI",
                "tv-circle-logo-pair--xxlarge": "tv-circle-logo-pair--xxlarge-ocURKVwI",
                "tv-circle-logo-pair--xxxlarge": "tv-circle-logo-pair--xxxlarge-ocURKVwI",
                "tv-circle-logo-pair__logo": "tv-circle-logo-pair__logo-ocURKVwI",
                "tv-circle-logo-pair__logo--xxxxsmall": "tv-circle-logo-pair__logo--xxxxsmall-ocURKVwI",
                "tv-circle-logo-pair__logo--xxxsmall": "tv-circle-logo-pair__logo--xxxsmall-ocURKVwI",
                "tv-circle-logo-pair__logo--xxsmall": "tv-circle-logo-pair__logo--xxsmall-ocURKVwI",
                "tv-circle-logo-pair__logo--xsmall": "tv-circle-logo-pair__logo--xsmall-ocURKVwI",
                "tv-circle-logo-pair__logo--small": "tv-circle-logo-pair__logo--small-ocURKVwI",
                "tv-circle-logo-pair__logo--medium": "tv-circle-logo-pair__logo--medium-ocURKVwI",
                "tv-circle-logo-pair__logo--large": "tv-circle-logo-pair__logo--large-ocURKVwI",
                "tv-circle-logo-pair__logo--xlarge": "tv-circle-logo-pair__logo--xlarge-ocURKVwI",
                "tv-circle-logo-pair__logo--xxlarge": "tv-circle-logo-pair__logo--xxlarge-ocURKVwI",
                "tv-circle-logo-pair__logo--xxxlarge": "tv-circle-logo-pair__logo--xxxlarge-ocURKVwI",
                "tv-circle-logo-pair__logo-empty": "tv-circle-logo-pair__logo-empty-ocURKVwI"
            }
        },
        456057: e => {
            e.exports = {
                "tv-circle-logo": "tv-circle-logo-PsAlMQQF",
                "tv-circle-logo--xxxsmall": "tv-circle-logo--xxxsmall-PsAlMQQF",
                "tv-circle-logo--xxsmall": "tv-circle-logo--xxsmall-PsAlMQQF",
                "tv-circle-logo--xsmall": "tv-circle-logo--xsmall-PsAlMQQF",
                "tv-circle-logo--small": "tv-circle-logo--small-PsAlMQQF",
                "tv-circle-logo--medium": "tv-circle-logo--medium-PsAlMQQF",
                "tv-circle-logo--large": "tv-circle-logo--large-PsAlMQQF",
                "tv-circle-logo--xlarge": "tv-circle-logo--xlarge-PsAlMQQF",
                "tv-circle-logo--xxlarge": "tv-circle-logo--xxlarge-PsAlMQQF",
                "tv-circle-logo--xxxlarge": "tv-circle-logo--xxxlarge-PsAlMQQF",
                "tv-circle-logo--visually-hidden": "tv-circle-logo--visually-hidden-PsAlMQQF"
            }
        },
        607423: (e, t, o) => {
            "use strict";
            o.d(t, {
                isNativeUIInteraction: () => n
            });
            var r = o(591800);

            function i(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function n(e, t) {
                if (!t) return !1;
                const o = 255 & e;
                if (27 === o || o >>> 4 == 7) return !1;
                switch (e ^ o) {
                    case r.Modifiers.Alt:
                        return (38 === o || 40 === o) && "SELECT" === t.tagName || i(t);
                    case r.Modifiers.Alt + r.Modifiers.Shift:
                        return i(t);
                    case r.Modifiers.Mod:
                        if (67 === o || !r.isMacKeyboard && 45 === o) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return i(t);
                    case r.Modifiers.Mod + r.Modifiers.Shift:
                        return o >= 33 && o <= 40 && i(t);
                    case r.Modifiers.Shift:
                    case 0:
                        return 9 === o ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t) || 13 === o || 32 === o || 9 === o) && ("form" in t || t.isContentEditable)
                }
                return !1
            }
        },
        467236: (e, t, o) => {
            "use strict";
            o.d(t, {
                getCircleLogoAnyHtml: () => n
            });
            var r = o(857430),
                i = o(348091);

            function n(e) {
                const {
                    logoUrls: t,
                    ...o
                } = e;
                return 1 === t.length ? (0, r.getCircleLogoHtml)({
                    logoUrl: t[0],
                    ...o
                }) : 2 === t.length ? (0, i.getCircleLogoPairHtml)({
                    primaryLogoUrl: t[0],
                    secondaryLogoUrl: t[1],
                    ...o
                }) : (0, r.getCircleLogoHtml)({
                    logoUrl: void 0,
                    ...o
                })
            }
        },
        348091: (e, t, o) => {
            "use strict";
            o.d(t, {
                getCircleLogoPairHtml: () => i
            });
            var r = o(115078);

            function i(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: o,
                    size: i,
                    className: s
                } = e;
                return `<span class="${(0,r.getBlockStyleClasses)(i,s)}">\n\t\t\t${n({logoUrl:o,size:i})}\n\t\t\t${n({logoUrl:t,size:i})}\n\t\t</span>`
            }

            function n(e) {
                const {
                    logoUrl: t,
                    size: o
                } = e, i = (0, r.getLogoStyleClasses)(o, Boolean(t));
                return void 0 === t ? `<span class="${i}"></span>` : `<img class="${i}" crossorigin src="${t}" alt="" />`
            }
        },
        115078: (e, t, o) => {
            "use strict";
            o.d(t, {
                getBlockStyleClasses: () => s,
                getLogoStyleClasses: () => l
            });
            var r = o(497754),
                i = o(78217),
                n = o.n(i);

            function s(e, t) {
                return r(n()["tv-circle-logo-pair"], n()[`tv-circle-logo-pair--${e}`], t)
            }

            function l(e, t = !0) {
                return r(n()["tv-circle-logo-pair__logo"], n()[`tv-circle-logo-pair__logo--${e}`], !t && n()["tv-circle-logo-pair__logo-empty"])
            }
        },
        857430: (e, t, o) => {
            "use strict";
            o.d(t, {
                getCircleLogoHtml: () => i
            });
            var r = o(842060);
            o(456057);

            function i(e) {
                const t = (0, r.getStyleClasses)(e.size, e.className);
                return (0, r.isCircleLogoWithUrlProps)(e) ? `<img class="${t}" crossorigin src="${e.logoUrl}" alt="">` : `<span class="${t}">${e.placeholderLetter||""}</span>`
            }
        },
        745269: (e, t, o) => {
            "use strict";
            o.d(t, {
                color: () => r
            });
            const r = {
                black70: "#4A4A4A",
                black80: "#535353"
            }
        },
        673747: (e, t, o) => {
            "use strict";
            o.d(t, {
                hide: () => v,
                showOnElement: () => h
            });
            var r = o(778785),
                i = o(650151),
                n = o(799786),
                s = o(112539),
                l = o(630112),
                c = o(471802);
            let a = !1,
                u = null,
                d = null;
            r.mobiletouch || (document.addEventListener("mouseover", p, !0), document.addEventListener("focus", (function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible"))) return;
                p(e, !0)
            }), {
                capture: !0
            }), document.addEventListener("active-descendant-focus", (function(e) {
                e.target instanceof HTMLElement && p(e, !0)
            }), {
                capture: !0
            }));
            const g = new MutationObserver((() => {
                    if (u && u.options.target) {
                        let e;
                        e = "isConnected" in u.options.target ? u.options.target.isConnected : document.body.contains(u.options.target), e || v()
                    }
                })),
                h = (e, t = {}) => {
                    const {
                        content: o,
                        ...r
                    } = b(t), i = c.getDataFromTarget(e), n = Object.assign(i, r);
                    return "none" !== o.type && (n.content = o), !("none" === n.content.type && !n.hotkey) && (n.target = e, m(n), !0)
                },
                m = e => {
                    const t = b(e),
                        o = c.getTooltip(t);
                    if (u = {
                            options: t,
                            element: o
                        }, (0, l.setTooltip)(o), (0, s.clearSchedule)(), !a) return c.hideTooltip(o), void(0, s.scheduleRender)((() => _(o)), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: r
                    } = e;
                    "number" != typeof r || isNaN(r) ? _(o) : (0, s.scheduleRender)((() => _(o)), r)
                };

            function p(e, t) {
                var o;
                if ("sourceCapabilities" in e && (null === (o = e.sourceCapabilities) || void 0 === o ? void 0 : o.firesTouchEvents)) return;
                const r = function(e, t, o) {
                    const r = [];
                    for (; e && e !== t;) e.classList && e.classList.contains(o) && r.push(e), e = e.parentElement || y(e.parentNode);
                    return r
                }(e.target, e.currentTarget, "apply-common-tooltip");
                for (const o of r) {
                    if (e instanceof MouseEvent)
                        if ("buttons" in e) {
                            if (1 & e.buttons) continue
                        } else if (1 === e.which) continue;
                    const r = () => h(o);
                    if (r()) {
                        const e = e => i(null, !0),
                            i = (n, s = !1) => {
                                o.removeEventListener("common-tooltip-update", r), o.removeEventListener("mouseleave", i), o.removeEventListener("mousedown", i), document.removeEventListener("scroll", e, {
                                    capture: !0
                                }), t && (o.removeEventListener("blur", i), o.removeEventListener("active-descendant-blur", i)), d && (d.destroy(), d = null), v(s)
                            };
                        o.addEventListener("common-tooltip-update", r), o.addEventListener("mouseleave", i), o.addEventListener("mousedown", i), document.addEventListener("scroll", e, {
                            capture: !0
                        }), t && (o.addEventListener("blur", i), o.addEventListener("active-descendant-blur", i)), null === d && (d = (0, n.createGroup)({
                            desc: "Tooltip"
                        }), d.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: i
                        }));
                        break
                    }
                }
            }

            function f() {
                (0, l.empty)(), a = !1, u = null
            }
            const v = (e, t) => {
                if ((0, s.clearSchedule)(), (0, i.ensureNotNull)(g).disconnect(), !u) return;
                if (!e && !a) return;
                const {
                    element: o,
                    options: r
                } = u, n = () => {
                    o.removeEventListener("mouseleave", n), c.hideTooltip(o), e ? f() : (0, s.scheduleRemove)((() => {
                        f()
                    }), 250), null == t || t()
                };
                r.tooltipHideDelay ? (0, s.scheduleHide)((() => {
                    o.querySelector(":hover") ? o.addEventListener("mouseleave", n) : n()
                }), r.tooltipHideDelay) : n()
            };

            function _(e) {
                const {
                    options: t
                } = (0, i.ensureNotNull)(u);
                if (c.setStyle(e, t), c.showTooltip(e), (0, i.ensureNotNull)(g).observe(document, {
                        childList: !0,
                        subtree: !0
                    }), a = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), v()
                    };
                    document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
                }
            }

            function y(e) {
                return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
            }

            function b(e) {
                if (function(e) {
                        return "content" in e
                    }(e)) return e;
                const {
                    inner: t,
                    html: o,
                    text: r,
                    ...i
                } = e;
                let n = {
                    type: "none"
                };
                return t && (n = {
                    type: "element",
                    data: t
                }), r && (n = {
                    type: o ? "html" : "text",
                    data: r
                }), {
                    content: n,
                    ...i
                }
            }
        },
        750532: (e, t, o) => {
            "use strict";
            var r = o(673747);

            function i(e, t = "x") {
                let o = !1;
                return "x" !== t && "both" !== t || (o = o || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (o = o || e.offsetHeight < e.scrollHeight), o
            }

            function n(e, t = "x") {
                for (const o of Array.from(e.children))
                    if (o instanceof HTMLElement && (i(o, t) || n(o, t))) return !0;
                return !1
            }

            function s(e) {
                let t = "x";
                return e.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : e.matches(".apply-overflow-tooltip--direction_y") && (t = "y"), t
            }

            function l(e) {
                const t = e.getAttribute("data-overflow-tooltip-text");
                let o = "";
                return o = t || (e.matches && e.matches(".apply-overflow-tooltip--allow-text") ? e.textContent || "" : Array.from(e.childNodes).reduce(((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e)), []).join("").trim()), o
            }

            function c(e, t) {
                let o = !1;
                const r = e.children;
                for (let e = 0; e < r.length; e++) {
                    const n = r[e];
                    if (n instanceof HTMLElement && i(n, t)) {
                        o = !0;
                        break
                    }
                }
                return o
            }

            function a(e) {
                const t = e.target;
                if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(".apply-overflow-tooltip-focus"))) {
                    const e = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip"),
                        o = s(e);
                    if (e.matches(".apply-overflow-tooltip--check-children-recursively")) {
                        if (!n(e, o)) return
                    } else if (e.matches(".apply-overflow-tooltip--check-children")) {
                        if (!c(e, o)) return
                    } else if (!i(e, o)) return;
                    (0, r.showOnElement)(t, {
                        text: l(e)
                    });
                    const a = () => {
                        (0, r.hide)(), t.removeEventListener("blur", a), t.removeEventListener("active-descendant-blur", a)
                    };
                    t.addEventListener("blur", a), t.addEventListener("active-descendant-blur", a)
                }
            }(0, o(411963).whenDocumentReady)((() => {
                document.addEventListener("mouseenter", (e => {
                    const t = e.target;
                    if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                        const e = s(t);
                        if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
                            if (!n(t, e)) return
                        } else if (t.matches(".apply-overflow-tooltip--check-children")) {
                            if (!c(t, e)) return
                        } else if (!i(t, e)) return;
                        (0, r.showOnElement)(t, {
                            text: l(t)
                        });
                        const o = () => {
                            (0, r.hide)(), ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, o)))
                        };
                        ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, o)))
                    }
                }), !0), document.addEventListener("focus", a, !0), document.addEventListener("active-descendant-focus", a, !0)
            }))
        },
        780237: (e, t, o) => {
            "use strict";
            o.d(t, {
                TickerItemAbstract: () => u
            });
            o(750532);
            var r = o(338619),
                i = o(817099),
                n = o(903972),
                s = o(942634),
                l = o(881025),
                c = o(17966);
            const a = (0, r.getLogger)("WidgetTicker");
            class u {
                constructor(e, t, o) {
                    this.onInit = new s.Delegate, this.onComplete = new s.Delegate, this.onError = new s.Delegate, this._quoteTickerComplete = null, this._isRunning = !1, this._prevQuoteSymbol = null, this._el = t || document.createElement("a"), this._symbolData = e, this._options = o || {}, (0, n.validateSymbolData)(e) ? (this.render(), this.start()) : a.logError("symbolData is not valid")
                }
                render() {
                    this._el.classList.add(this._getClass()), this._el.innerHTML = this._getView(), this._setTitle(), this._setLink()
                }
                start() {
                    this._isRunning || (this._startQuoteTicker(), this._isRunning = !0)
                }
                stop() {
                    this._isRunning && (this._stopQuoteTicker(), this._isRunning = !1)
                }
                getElement() {
                    return this._el
                }
                changeSymbol(e) {
                    const t = e.includes(":") ? {
                        proName: e
                    } : {
                        shortName: e
                    };
                    this._prevQuoteSymbol = this._getSymbolName(), this._symbolData = t, this._setTitle(), this._setLink(), this.stop(), this.start()
                }
                quoteTicker() {
                    return this._quoteTicker
                }
                displayPlaceholderLetter() {
                    this._renderSymbolLogo([], "xxxsmall")
                }
                _getElementClass(e) {
                    return this._getClass() + "__" + e
                }
                _getSymbolName() {
                    return this._symbolData.proName || this._symbolData.shortName
                }
                _renderSymbolLogo(e, t) {
                    const o = this._el.querySelector(".js-header-icon"),
                        r = 0 === e.length ? this._getPlaceholderLetter() : void 0;
                    o && this._setSymbolLogoHtml(o, e, t, r)
                }
                _getPlaceholderLetter() {
                    const e = this._symbolData.proName,
                        t = e && e.split(":")[1];
                    return (this._symbolData.title || this._symbolData.description || t || "" || " ")[0]
                }
                _setSymbolLogoHtml(e, t, o, r) {
                    if (t.length > 0 || void 0 !== r) {
                        const i = (0, c.getCircleLogoAnyHtml)({
                            logoUrls: t,
                            size: o,
                            className: this._getElementClass("icon"),
                            placeholderLetter: r
                        });
                        e.innerHTML = i
                    } else e.innerHTML = ""
                }
                _setTitle() {
                    const e = this._getElTitle();
                    if (!e) return;
                    const t = this._symbolData.title || this._symbolData.description || "" || this._symbolData.shortName || this._symbolData.proName || "",
                        o = (0, l.detectAutoDirection)(t);
                    o && (e.dir = o), e.textContent = t
                }
                _setLink() {
                    if (!(this._el instanceof HTMLAnchorElement)) return;
                    const e = this._symbolData.linkPage;
                    e && (this._el.href = e), this._options.isEmbedWidget && (this._el.target = "_blank", this._el.rel = "external noopener")
                }
                _startQuoteTicker() {
                    if (!this._quoteTicker) return void this._createQuoteTicker();
                    const e = this._getSymbolName();
                    this._prevQuoteSymbol !== e ? (this._destroyQuoteTicker(), this._createQuoteTicker()) : this._quoteTicker.enable()
                }
                _stopQuoteTicker() {
                    this._quoteTicker && (this._quoteTicker.disable(), this._quoteTickerComplete = null)
                }
                _createQuoteTicker() {
                    const e = this._getSymbolName(),
                        t = this._getTickerOptions(),
                        o = t.initedHook,
                        r = t.setStateHook;
                    this._quoteTickerComplete = null, this._quoteTicker = new i.QuoteTicker(e, this._el, {
                        noSuchSymbolHook: () => this.onError.fire("no_symbol"),
                        permissionDeniedHook: () => this.onError.fire("permission_denied"),
                        ...t,
                        initedHook: (...e) => {
                            null == o || o(...e), this.onInit.fire(...e)
                        },
                        setStateHook: (e, t, o) => {
                            null == r || r(e, t, o), o && null === this._quoteTickerComplete && (this._quoteTickerComplete = o, this.onComplete.fire())
                        }
                    })
                }
                _destroyQuoteTicker() {
                    this._stopQuoteTicker(), delete this._quoteTicker
                }
                _getElTitle() {
                    return this._el.querySelector(`.${this._getElementClass("title")}`)
                }
            }
        },
        903972: (e, t, o) => {
            "use strict";

            function r(e) {
                return Boolean(e) && ("string" == typeof e.proName || "string" == typeof e.shortName)
            }
            o.d(t, {
                validateSymbolData: () => r
            })
        },
        778785: (e, t, o) => {
            "use strict";
            o.d(t, {
                mobiletouch: () => i,
                setClasses: () => n
            });
            var r = o(167175);
            const i = r.mobiletouch;
            r.touch;

            function n() {
                document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        626333: (e, t, o) => {
            "use strict";

            function r(e, t = window) {
                const o = "theme-" + e,
                    r = t.document.documentElement.classList;
                for (const e of Array.from(r)) e.startsWith("theme-") && e !== o && r.remove(e);
                r.add(o)
            }
            o.d(t, {
                applyTheme: () => r
            })
        },
        331633: (e, t, o) => {
            "use strict";
            o.d(t, {
                setTheme: () => s
            });
            var r = o(375397),
                i = o(626333);
            const n = new r.WatchedValue;

            function s(e) {
                n.setValue(e)
            }
            n.subscribe((e => {
                (0, i.applyTheme)(e, window)
            }))
        },
        444372: (e, t, o) => {
            "use strict";
            o.d(t, {
                t: () => r.t
            });
            o(466281);
            var r = o(195619)
        },
        889267: (e, t, o) => {
            "use strict";
            o.d(t, {
                isSpread: () => l,
                tokenize: () => n
            });
            const r = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: o(173777).SEPARATOR_PREFIX,
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
                i = new RegExp(Object.values(r).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function n(e) {
                if (!e) return [];
                const t = [],
                    o = Object.keys(r);
                let n;
                for (; n = i.exec(e);) {
                    let e = !1;
                    for (let r = o.length; r--;)
                        if (n[r + 1]) {
                            o[r] && t.push({
                                value: n[r + 1],
                                type: o[r],
                                precedence: 0,
                                offset: n.index
                            }), e = !0;
                            break
                        }
                    e || t.push({
                        value: n[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: n.index
                    })
                }
                return t
            }

            function s(e) {
                return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e
            }

            function l(e) {
                return e.length > 1 && e.some((e => s(e.type)))
            }
        },
        17966: (e, t, o) => {
            "use strict";
            o.d(t, {
                getCircleLogoAnyHtml: () => r.getCircleLogoAnyHtml
            });
            var r = o(467236)
        },
        607546: (e, t, o) => {
            "use strict";
            o.d(t, {
                getLogoUrlsHook: () => r.getLogoUrlsHook
            });
            var r = o(526639)
        },
        526639: (e, t, o) => {
            "use strict";
            o.d(t, {
                getLogoUrlsHook: () => n
            });
            var r = o(849204);
            const i = (0, r.getLogoUrlResolver)();

            function n(e, t) {
                let o = !1;
                return (n, l, c) => {
                    const a = n["currency-logoid"] && n["base-currency-logoid"];
                    if (!o && (n.logoid || a || c)) {
                        o = !0;
                        const l = function(e) {
                            if (2 !== e.length) return e;
                            if (function(e) {
                                    return e.some((e => s(e)))
                                }(e) && ! function(e) {
                                    return e.some((e => e.includes("country") && !s(e)))
                                }(e)) return e.filter((e => !s(e)));
                            return e
                        }(function(e, t = r.LogoSize.Medium) {
                            const o = e.logoid,
                                n = e["base-currency-logoid"],
                                s = e["currency-logoid"],
                                l = o && i.getSymbolLogoUrl(o, t);
                            if (l) return [l];
                            const c = n && i.getSymbolLogoUrl(n, t),
                                a = s && i.getSymbolLogoUrl(s, t);
                            return c && a ? [c, a] : c ? [c] : a ? [a] : []
                        }({
                            logoid: n.logoid,
                            "base-currency-logoid": n["base-currency-logoid"],
                            "currency-logoid": n["currency-logoid"]
                        }, t));
                        e(l)
                    }
                }
            }

            function s(e) {
                return e.includes("country/US")
            }
        },
        942634: (e, t, o) => {
            "use strict";
            o.d(t, {
                Delegate: () => n
            });
            const r = (0, o(692558).getLogger)("Common.Delegate");

            function i(e) {
                return !e.singleShot
            }
            class n {
                constructor() {
                    this.fire = this._fireImpl.bind(this), this._listeners = []
                }
                subscribe(e, t, o) {
                    this._listeners.push({
                        object: e,
                        member: t,
                        singleShot: !!o,
                        skip: !1
                    })
                }
                unsubscribe(e, t) {
                    for (let o = 0; o < this._listeners.length; ++o) {
                        const r = this._listeners[o];
                        if (r.object === e && r.member === t) {
                            r.skip = !0, this._listeners.splice(o, 1);
                            break
                        }
                    }
                }
                unsubscribeAll(e) {
                    for (let t = this._listeners.length - 1; t >= 0; --t) {
                        const o = this._listeners[t];
                        o.object === e && (o.skip = !0, this._listeners.splice(t, 1))
                    }
                }
                destroy() {
                    this._listeners = []
                }
                _fireImpl(...e) {
                    const t = this._listeners;
                    this._listeners = this._listeners.filter(i);
                    const o = t.length;
                    for (let i = 0; i < o; ++i) {
                        const o = t[i];
                        if (!o.skip) try {
                            o.member.apply(o.object || null, e)
                        } catch (e) {
                            r.logError(`${e&&(e.stack||e.message)}`)
                        }
                    }
                }
            }
        },
        764829: (e, t, o) => {
            "use strict";
            var r;
            o.r(t), o.d(t, {
                disable: () => d,
                enable: () => u,
                enabled: () => c,
                getAllFeatures: () => g,
                setEnabled: () => a
            });
            var i = o(111119);
            const n = new Map,
                s = new Map,
                l = new Set;

            function c(e) {
                const t = n.get(e);
                if (void 0 !== t) return t;
                const o = s.get(e);
                return !!o && o.some(c)
            }

            function a(e, t) {
                n.set(String(e), Boolean(t))
            }

            function u(e) {
                a(e, !0)
            }

            function d(e) {
                a(e, !1)
            }

            function g() {
                const e = Object.create(null);
                for (const t of l) e[t] = c(t);
                return e
            }! function() {
                for (const [e, t] of Object.entries(r || (r = o.t(i, 2))))
                    if (l.add(e), "subsets" in t)
                        for (const o of t.subsets) {
                            l.add(o);
                            let t = s.get(o);
                            void 0 === t && (t = [], s.set(o, t)), t.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(d), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(u)
            }()
        },
        375397: (e, t, o) => {
            "use strict";
            o.d(t, {
                WatchedValue: () => c
            });
            var r = o(805578),
                i = o(692558),
                n = o(728832);
            const s = (0, i.getLogger)("Common.WatchedValue");

            function l(e) {
                s.logError(`${e&&(e.stack||e.message)}`)
            }
            class c {
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
                    const o = this._owner ? this._owner : this;
                    if (o.writeLock) return;
                    const r = o._value === e || Number.isNaN(o._value) && Number.isNaN(e);
                    if (!t && r && o.hasOwnProperty("_value")) return;
                    o._value = e;
                    const i = o._listeners.slice();
                    let n = 0;
                    for (let t = 0; t < i.length; t++) {
                        i[t].once && (o._listeners.splice(t - n, 1), n++);
                        try {
                            i[t].cb(e)
                        } catch (e) {
                            l(e)
                        }
                    }
                }
                deleteValue() {
                    this.setValue(void 0)
                }
                subscribe(e, t) {
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    const o = !!t && !!t.once,
                        r = !!t && !!t.callWithLast,
                        i = this._owner ? this._owner : this;
                    if (r && i.hasOwnProperty("_value")) {
                        try {
                            e(i._value)
                        } catch (e) {
                            l(e)
                        }
                        if (o) return
                    }
                    i._listeners.push({
                        cb: e,
                        owner: this,
                        once: !!t && !!t.once
                    })
                }
                unsubscribe(e) {
                    const t = this._owner ? this._owner : this;
                    void 0 === e && (e = null);
                    const o = t._listeners;
                    for (let r = o.length; r--;) o[r].owner !== this && t !== this || o[r].cb !== e && null !== e || o.splice(r, 1)
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
                    return new a(this._owner || this, e)
                }
                when(e) {
                    (0, n.callWhen)(this, (e => Boolean(e)), (() => {
                        try {
                            e(this.value())
                        } catch (e) {
                            l(e)
                        }
                    }))
                }
                assertNoSubscriptions() {
                    0
                }
                ownership() {
                    return (0, r.ownership)(this)
                }
                spawnOwnership() {
                    return (0, r.ownership)(this.spawn())
                }
                weakReference() {
                    return (0, r.weakReference)(this)
                }
            }
            class a extends c {
                constructor(e, t) {
                    super(), delete this._listeners, this._owner = e, this._onDestroy = t
                }
                destroy() {
                    var e;
                    try {
                        null === (e = this._onDestroy) || void 0 === e || e.call(this)
                    } catch (e) {
                        l(e)
                    }
                    super.destroy()
                }
                readonly() {
                    return super.readonly()
                }
            }
        },
        881025: (e, t, o) => {
            "use strict";
            o.d(t, {
                detectAutoDirection: () => d,
                forceLTRStr: () => c,
                isRtl: () => r,
                stripLTRMarks: () => l
            });
            o(64531);
            const r = () => "rtl" === window.document.dir,
                i = "‪",
                n = "‬",
                s = new RegExp("‎|‪|‫|‬", "g");

            function l(e) {
                return "" !== e && r() && null != e ? e.replace(s, "") : e
            }

            function c(e) {
                return "" !== e && r() && null != e ? i + e + n : e
            }
            const a = /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
                u = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

            function d(e) {
                const t = a.exec(e);
                return t ? u.test(t[0]) ? "rtl" : "ltr" : ""
            }
        },
        777383: (e, t, o) => {
            "use strict";

            function r(e) {
                return e.replace("{{shortName}}", "{tvsymbol}").replace("{{proName}}", "{tvprosymbol}").replace("{{symbol}}", "{tvsymbol}").replace("{{exchange}}", "{tvexchange}")
            }
            o.d(t, {
                replaceOldPlaceholders: () => r
            })
        },
        282616: (e, t, o) => {
            "use strict";
            o.d(t, {
                handleTVLinksClick: () => s
            });
            var r = o(439563),
                i = o(248213),
                n = o(924225);

            function s() {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(":link");
                    if (!(null == t ? void 0 : t.hostname) || !(0, n.isInternalHost)(t.hostname, "tradingview.com")) return;
                    const o = t.dataset.targetType || null;
                    ! function(e, t) {
                        const o = function() {
                                const e = window.initData.hashSettings;
                                if (Object.keys(e).length > 0) return (0, i.filterUtmInfo)(e);
                                const t = new URLSearchParams(location.href);
                                return {
                                    utm_campaign: t.get("utm_campaign") || void 0,
                                    utm_source: t.get("utm_source") || void 0
                                }
                            }(),
                            n = function(e) {
                                var t;
                                const o = (null === (t = location.ancestorOrigins) || void 0 === t ? void 0 : t[0]) || document.referrer;
                                return e.utm_source || function(e) {
                                    try {
                                        return new URL(e).host
                                    } catch (e) {
                                        return ""
                                    }
                                }(o)
                            }(o);
                        !async function(e) {
                            var t;
                            null === (t = await (0, r.getEmbedWidgetTracker)()) || void 0 === t || t.trackWidgetTVLinkClick(e)
                        }({
                            widget_type: l(o),
                            domain: n,
                            link: e,
                            target_type: t
                        })
                    }(t.href, o)
                }))
            }

            function l(e) {
                if (e.utm_campaign) return e.utm_campaign;
                const t = location.pathname;
                return t.includes("embed-widget") ? t.split("/")[2] : t
            }
        },
        135732: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackWidgetLoadMetaInfo: () => i
            });
            var r = o(439563);
            async function i(e) {
                var t;
                Math.random() > .005 || null === (t = await (0, r.getEmbedWidgetTracker)()) || void 0 === t || t.trackWidgetLoadMetaInfo(e)
            }
        },
        120762: (e, t, o) => {
            "use strict";
            o.d(t, {
                extractWidgetSettingsFromInitData: () => r
            });

            function r() {
                const e = window;
                return { ...e.initData.widgetDefaults,
                    ...e.initData.hashSettings,
                    ...e.initData.querySettings
                }
            }
        },
        461512: (e, t, o) => {
            "use strict";
            o.d(t, {
                makeWidgetSymbolLink: () => s
            });
            var r = o(777383),
                i = o(197439),
                n = o(889267);

            function s(e) {
                var t;
                const {
                    customUrl: o,
                    utmInfo: s,
                    path: l,
                    typespecs: c
                } = e;
                let a, u, d = e.symbol;
                const g = (0, n.tokenize)(d);
                return (0, n.isSpread)(g) && (d = (null === (t = g.find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value) || d), d.includes(":") ? [u, a] = d.split(":") : a = d, o ? (0, i.makeTemplateSymbolUrl)((0, r.replaceOldPlaceholders)(o), {
                    proName: d
                }) : (0, i.makeSymbolPageUrl)({
                    shortName: a,
                    exchange: u,
                    typespecs: c
                }, s, void 0, l)
            }
        }
    }
]);