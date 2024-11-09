"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34052, 10147], {
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
                hide: () => b,
                show: () => v,
                showOnElement: () => p,
                tempForceHide: () => y,
                tooltipClickHandler: () => w,
                updateTooltipText: () => f
            });
            var o = n(778785),
                i = n(650151),
                r = n(799786),
                s = n(112539),
                c = n(630112),
                a = n(471802);
            let d = !1,
                l = null,
                u = null;
            o.mobiletouch || (document.addEventListener("mouseover", h, !0), document.addEventListener("focus", (function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible"))) return;
                h(e, !0)
            }), {
                capture: !0
            }), document.addEventListener("active-descendant-focus", (function(e) {
                e.target instanceof HTMLElement && h(e, !0)
            }), {
                capture: !0
            }));
            const m = new MutationObserver((() => {
                    if (l && l.options.target) {
                        let e;
                        e = "isConnected" in l.options.target ? l.options.target.isConnected : document.body.contains(l.options.target), e || b()
                    }
                })),
                p = (e, t = {}) => {
                    const {
                        content: n,
                        ...o
                    } = k(t), i = a.getDataFromTarget(e), r = Object.assign(i, o);
                    return "none" !== n.type && (r.content = n), !("none" === r.content.type && !r.hotkey) && (r.target = e, v(r), !0)
                },
                v = e => {
                    const t = k(e),
                        n = a.getTooltip(t);
                    if (l = {
                            options: t,
                            element: n
                        }, (0, c.setTooltip)(n), (0, s.clearSchedule)(), !d) return a.hideTooltip(n), void(0, s.scheduleRender)((() => L(n)), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: o
                    } = e;
                    "number" != typeof o || isNaN(o) ? L(n) : (0, s.scheduleRender)((() => L(n)), o)
                },
                f = e => a.updateTooltipTextFromTarget(e);

            function h(e, t) {
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
                                }), t && (n.removeEventListener("blur", i), n.removeEventListener("active-descendant-blur", i)), u && (u.destroy(), u = null), b(s)
                            };
                        n.addEventListener("common-tooltip-update", o), n.addEventListener("mouseleave", i), n.addEventListener("mousedown", i), document.addEventListener("scroll", e, {
                            capture: !0
                        }), t && (n.addEventListener("blur", i), n.addEventListener("active-descendant-blur", i)), null === u && (u = (0, r.createGroup)({
                            desc: "Tooltip"
                        }), u.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: i
                        }));
                        break
                    }
                }
            }

            function w(e) {
                var t;
                o.mobiletouch && (p(e.currentTarget, {
                    tooltipDelay: 0
                }), document.addEventListener("scroll", g), document.addEventListener("touchstart", g), window.addEventListener("orientationchange", g), null === (t = window.screen.orientation) || void 0 === t || t.addEventListener("change", g))
            }

            function g() {
                var e;
                document.removeEventListener("scroll", g), document.removeEventListener("touchstart", g), window.removeEventListener("orientationchange", g), null === (e = window.screen.orientation) || void 0 === e || e.removeEventListener("change", g), b()
            }

            function E() {
                (0, c.empty)(), d = !1, l = null
            }
            const y = () => {
                    if ((0, s.clearSchedule)(), (0, i.ensureNotNull)(m).disconnect(), !l || !d) return;
                    const {
                        element: e
                    } = l;
                    a.hideTooltip(e), E()
                },
                b = (e, t) => {
                    if ((0, s.clearSchedule)(), (0, i.ensureNotNull)(m).disconnect(), !l) return;
                    if (!e && !d) return;
                    const {
                        element: n,
                        options: o
                    } = l, r = () => {
                        n.removeEventListener("mouseleave", r), a.hideTooltip(n), e ? E() : (0, s.scheduleRemove)((() => {
                            E()
                        }), 250), null == t || t()
                    };
                    o.tooltipHideDelay ? (0, s.scheduleHide)((() => {
                        n.querySelector(":hover") ? n.addEventListener("mouseleave", r) : r()
                    }), o.tooltipHideDelay) : r()
                };

            function L(e) {
                const {
                    options: t
                } = (0, i.ensureNotNull)(l);
                if (a.setStyle(e, t), a.showTooltip(e), (0, i.ensureNotNull)(m).observe(document, {
                        childList: !0,
                        subtree: !0
                    }), d = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), b()
                    };
                    document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
                }
            }

            function T(e) {
                return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
            }

            function k(e) {
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
        750532: (e, t, n) => {
            n.r(t);
            var o = n(673747);

            function i(e, t = "x") {
                let n = !1;
                return "x" !== t && "both" !== t || (n = n || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (n = n || e.offsetHeight < e.scrollHeight), n
            }

            function r(e, t = "x") {
                for (const n of Array.from(e.children))
                    if (n instanceof HTMLElement && (i(n, t) || r(n, t))) return !0;
                return !1
            }

            function s(e) {
                let t = "x";
                return e.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : e.matches(".apply-overflow-tooltip--direction_y") && (t = "y"), t
            }

            function c(e) {
                const t = e.getAttribute("data-overflow-tooltip-text");
                let n = "";
                return n = t || (e.matches && e.matches(".apply-overflow-tooltip--allow-text") ? e.textContent || "" : Array.from(e.childNodes).reduce(((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e)), []).join("").trim()), n
            }

            function a(e, t) {
                let n = !1;
                const o = e.children;
                for (let e = 0; e < o.length; e++) {
                    const r = o[e];
                    if (r instanceof HTMLElement && i(r, t)) {
                        n = !0;
                        break
                    }
                }
                return n
            }

            function d(e) {
                const t = e.target;
                if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(".apply-overflow-tooltip-focus"))) {
                    const e = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip"),
                        n = s(e);
                    if (e.matches(".apply-overflow-tooltip--check-children-recursively")) {
                        if (!r(e, n)) return
                    } else if (e.matches(".apply-overflow-tooltip--check-children")) {
                        if (!a(e, n)) return
                    } else if (!i(e, n)) return;
                    (0, o.showOnElement)(t, {
                        text: c(e)
                    });
                    const d = () => {
                        (0, o.hide)(), t.removeEventListener("blur", d), t.removeEventListener("active-descendant-blur", d)
                    };
                    t.addEventListener("blur", d), t.addEventListener("active-descendant-blur", d)
                }
            }(0, n(411963).whenDocumentReady)((() => {
                document.addEventListener("mouseenter", (e => {
                    const t = e.target;
                    if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                        const e = s(t);
                        if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
                            if (!r(t, e)) return
                        } else if (t.matches(".apply-overflow-tooltip--check-children")) {
                            if (!a(t, e)) return
                        } else if (!i(t, e)) return;
                        (0, o.showOnElement)(t, {
                            text: c(t)
                        });
                        const n = () => {
                            (0, o.hide)(), ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, n)))
                        };
                        ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, n)))
                    }
                }), !0), document.addEventListener("focus", d, !0), document.addEventListener("active-descendant-focus", d, !0)
            }))
        },
        638456: (e, t, n) => {
            n.r(t), n.d(t, {
                CheckMobile: () => m,
                appVersion: () => u,
                checkPageType: () => f,
                desktopAppVersion: () => l,
                isChrome: () => h,
                isDesktopApp: () => a,
                isEdge: () => g,
                isFF: () => w,
                isLinux: () => c,
                isMac: () => r,
                isSafari: () => E,
                isSymphonyEmbed: () => d,
                isWindows: () => s,
                onGoPro: () => y,
                onMainPage: () => b,
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

            function a() {
                return /TVDesktop/i.test(navigator.userAgent)
            }

            function d() {
                return i.isSymphony || !1
            }

            function l() {
                const e = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
                return e && e[1]
            }

            function u() {
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

            function f(e) {
                return new URLSearchParams(window.location.search).get("page_type") === e
            }
            i.isMobile = m, i.onWidget = p;
            const h = o.isChrome,
                w = o.isFF,
                g = o.isEdge,
                E = o.isSafari;

            function y() {
                return "/pricing/" === window.location.pathname
            }

            function b() {
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
                        return n = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t, o && (i = o.get(n)), i || (i = n.ownerDocument.createRange(),
                            i.selectNodeContents(n), o && o.set(n, i)), i.createContextualFragment(e)
                    }(e, t),
                    i = n.firstElementChild;
                return null !== i && n.removeChild(i), i
            }
        }
    }
]);