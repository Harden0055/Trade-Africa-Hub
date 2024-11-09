"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [10147], {
        604286: (e, t, n) => {
            n.d(t, {
                hotKeyDeserialize: () => i
            });
            var o = n(433524);

            function i(e) {
                return JSON.parse((0, o.decodeHTMLEntities)(e))
            }
        },
        673747: (e, t, n) => {
            n.r(t), n.d(t, {
                hide: () => L,
                show: () => v,
                showOnElement: () => p,
                tempForceHide: () => b,
                tooltipClickHandler: () => h,
                updateTooltipText: () => g
            });
            var o = n(778785),
                i = n(650151),
                r = n(799786),
                s = n(112539),
                c = n(630112),
                d = n(471802);
            let a = !1,
                u = null,
                l = null;
            o.mobiletouch || (document.addEventListener("mouseover", w, !0), document.addEventListener("focus", (function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible"))) return;
                w(e, !0)
            }), {
                capture: !0
            }), document.addEventListener("active-descendant-focus", (function(e) {
                e.target instanceof HTMLElement && w(e, !0)
            }), {
                capture: !0
            }));
            const m = new MutationObserver((() => {
                    if (u && u.options.target) {
                        let e;
                        e = "isConnected" in u.options.target ? u.options.target.isConnected : document.body.contains(u.options.target), e || L()
                    }
                })),
                p = (e, t = {}) => {
                    const {
                        content: n,
                        ...o
                    } = $(t), i = d.getDataFromTarget(e), r = Object.assign(i, o);
                    return "none" !== n.type && (r.content = n), !("none" === r.content.type && !r.hotkey) && (r.target = e, v(r), !0)
                },
                v = e => {
                    const t = $(e),
                        n = d.getTooltip(t);
                    if (u = {
                            options: t,
                            element: n
                        }, (0, c.setTooltip)(n), (0, s.clearSchedule)(), !a) return d.hideTooltip(n), void(0, s.scheduleRender)((() => y(n)), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: o
                    } = e;
                    "number" != typeof o || isNaN(o) ? y(n) : (0, s.scheduleRender)((() => y(n)), o)
                },
                g = e => d.updateTooltipTextFromTarget(e);

            function w(e, t) {
                var n;
                if ("sourceCapabilities" in e && (null === (n = e.sourceCapabilities) || void 0 === n ? void 0 : n.firesTouchEvents)) return;
                const o = function(e, t, n) {
                    const o = [];
                    for (; e && e !== t;) e.classList && e.classList.contains(n) && o.push(e), e = e.parentElement || T(e.parentNode);
                    return o
                }(e.target, e.currentTarget, "apply-common-tooltip");
                for (const n of o) {
                    if (e instanceof MouseEvent)
                        if ("buttons" in e) {
                            if (1 & e.buttons) continue
                        } else if (1 === e.which) continue;
                    const o = () => p(n);
                    if (o()) {
                        const e = e => i(null, !0),
                            i = (r, s = !1) => {
                                n.removeEventListener("common-tooltip-update", o), n.removeEventListener("mouseleave", i), n.removeEventListener("mousedown", i), document.removeEventListener("scroll", e, {
                                    capture: !0
                                }), t && (n.removeEventListener("blur", i), n.removeEventListener("active-descendant-blur", i)), l && (l.destroy(), l = null), L(s)
                            };
                        n.addEventListener("common-tooltip-update", o), n.addEventListener("mouseleave", i), n.addEventListener("mousedown", i), document.addEventListener("scroll", e, {
                            capture: !0
                        }), t && (n.addEventListener("blur", i), n.addEventListener("active-descendant-blur", i)), null === l && (l = (0, r.createGroup)({
                            desc: "Tooltip"
                        }), l.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: i
                        }));
                        break
                    }
                }
            }

            function h(e) {
                var t;
                o.mobiletouch && (p(e.currentTarget, {
                    tooltipDelay: 0
                }), document.addEventListener("scroll", f), document.addEventListener("touchstart", f), window.addEventListener("orientationchange", f), null === (t = window.screen.orientation) || void 0 === t || t.addEventListener("change", f))
            }

            function f() {
                var e;
                document.removeEventListener("scroll", f), document.removeEventListener("touchstart", f), window.removeEventListener("orientationchange", f), null === (e = window.screen.orientation) || void 0 === e || e.removeEventListener("change", f), L()
            }

            function E() {
                (0, c.empty)(), a = !1, u = null
            }
            const b = () => {
                    if ((0, s.clearSchedule)(), (0, i.ensureNotNull)(m).disconnect(), !u || !a) return;
                    const {
                        element: e
                    } = u;
                    d.hideTooltip(e), E()
                },
                L = (e, t) => {
                    if ((0, s.clearSchedule)(), (0, i.ensureNotNull)(m).disconnect(), !u) return;
                    if (!e && !a) return;
                    const {
                        element: n,
                        options: o
                    } = u, r = () => {
                        n.removeEventListener("mouseleave", r), d.hideTooltip(n), e ? E() : (0, s.scheduleRemove)((() => {
                            E()
                        }), 250), null == t || t()
                    };
                    o.tooltipHideDelay ? (0, s.scheduleHide)((() => {
                        n.querySelector(":hover") ? n.addEventListener("mouseleave", r) : r()
                    }), o.tooltipHideDelay) : r()
                };

            function y(e) {
                const {
                    options: t
                } = (0, i.ensureNotNull)(u);
                if (d.setStyle(e, t), d.showTooltip(e), (0, i.ensureNotNull)(m).observe(document, {
                        childList: !0,
                        subtree: !0
                    }), a = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), L()
                    };
                    document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
                }
            }

            function T(e) {
                return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
            }

            function $(e) {
                if (function(e) {
                        return "content" in e
                    }(e)) return e;
                const {
                    inner: t,
                    html: n,
                    text: o,
                    ...i
                } = e;
                let r = {
                    type: "none"
                };
                return t && (r = {
                    type: "element",
                    data: t
                }), o && (r = {
                    type: n ? "html" : "text",
                    data: o
                }), {
                    content: r,
                    ...i
                }
            }
        },
        638456: (e, t, n) => {
            n.r(t), n.d(t, {
                CheckMobile: () => m,
                appVersion: () => l,
                checkPageType: () => g,
                desktopAppVersion: () => u,
                isChrome: () => w,
                isDesktopApp: () => d,
                isEdge: () => f,
                isFF: () => h,
                isLinux: () => c,
                isMac: () => r,
                isSafari: () => E,
                isSymphonyEmbed: () => a,
                isWindows: () => s,
                onGoPro: () => b,
                onMainPage: () => L,
                onWidget: () => p,
                supportTouch: () => v
            });
            var o = n(167175);
            const i = window.TradingView = window.TradingView || {};

            function r() {
                return o.isMac
            }

            function s() {
                return o.isWindows
            }

            function c() {
                return o.isLinux
            }

            function d() {
                return /TVDesktop/i.test(navigator.userAgent)
            }

            function a() {
                return i.isSymphony || !1
            }

            function u() {
                const e = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
                return e && e[1]
            }

            function l() {
                const e = navigator.userAgent.match(/TradingView\/([^\s]+)/);
                return e && e[1]
            }
            const m = {
                Android: () => o.isAndroid,
                BlackBerry: () => o.isBlackBerry,
                iOS: () => o.isIOS,
                Opera: () => o.isOperaMini,
                isIPad: () => o.isIPad,
                any: () => o.isAnyMobile
            };

            function p() {
                const e = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^embed/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$"],
                    t = window.location.pathname.replace(/^\//, "");
                let n;
                for (let o = e.length - 1; o >= 0; o--)
                    if (n = new RegExp(e[o]), n.test(t)) return !0;
                return !1
            }

            function v() {
                return o.mobiletouch || o.touch || o.isAnyMobile
            }

            function g(e) {
                return new URLSearchParams(window.location.search).get("page_type") === e
            }
            i.isMobile = m, i.onWidget = p;
            const w = o.isChrome,
                h = o.isFF,
                f = o.isEdge,
                E = o.isSafari;

            function b() {
                return "/pricing/" === window.location.pathname
            }

            function L() {
                return "/" === window.location.pathname
            }
        },
        715050: (e, t, n) => {
            n.d(t, {
                parseHtmlElement: () => i
            });
            const o = new WeakMap;

            function i(e, t) {
                const n = function(e, t) {
                        let n, i;
                        return n = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t, o && (i = o.get(n)), i || (i = n.ownerDocument.createRange(), i.selectNodeContents(n), o && o.set(n, i)), i.createContextualFragment(e)
                    }(e, t),
                    i = n.firstElementChild;
                return null !== i && n.removeChild(i), i
            }
        }
    }
]);