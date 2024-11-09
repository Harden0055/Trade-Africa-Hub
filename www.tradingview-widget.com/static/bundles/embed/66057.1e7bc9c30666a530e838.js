(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [66057], {
        650151: (e, t) => {
            "use strict";

            function n(e, t) {
                if (void 0 === e) throw new Error("".concat(null != t ? t : "Value", " is undefined"));
                return e
            }

            function r(e, t) {
                if (null === e) throw new Error("".concat(null != t ? t : "Value", " is null"));
                return e
            }
            t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
            }, t.ensureDefined = n, t.ensureNotNull = r
        },
        150335: (e, t) => {
            "use strict";

            function n(e) {
                return Math.round(1e10 * e) / 1e10
            }
            t.isNumber = void 0, t.isNumber = function(e) {
                return "number" == typeof e && isFinite(e)
            }
        },
        64531: (e, t) => {
            "use strict";
            var n, r = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function i() {
                if (n) return n;
                if (!r || !window.document.body) return "indeterminate";
                var e = window.document.createElement("div");
                return e.appendChild(document.createTextNode("ABCD")), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), n = "reverse", e.scrollLeft > 0 ? n = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (n = "negative")), document.body.removeChild(e), n
            }
        },
        778785: (e, t, n) => {
            "use strict";
            n.d(t, {
                mobiletouch: () => i,
                setClasses: () => o
            });
            var r = n(167175);
            const i = r.mobiletouch;
            r.touch;

            function o() {
                document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        638456: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                CheckMobile: () => f,
                appVersion: () => l,
                checkPageType: () => m,
                desktopAppVersion: () => d,
                isChrome: () => b,
                isDesktopApp: () => a,
                isEdge: () => y,
                isFF: () => g,
                isLinux: () => u,
                isMac: () => o,
                isSafari: () => h,
                isSymphonyEmbed: () => c,
                isWindows: () => s,
                onGoPro: () => A,
                onMainPage: () => v,
                onWidget: () => p,
                supportTouch: () => w
            });
            var r = n(167175);
            const i = window.TradingView = window.TradingView || {};

            function o() {
                return r.isMac
            }

            function s() {
                return r.isWindows
            }

            function u() {
                return r.isLinux
            }

            function a() {
                return /TVDesktop/i.test(navigator.userAgent)
            }

            function c() {
                return i.isSymphony || !1
            }

            function d() {
                const e = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
                return e && e[1]
            }

            function l() {
                const e = navigator.userAgent.match(/TradingView\/([^\s]+)/);
                return e && e[1]
            }
            const f = {
                Android: () => r.isAndroid,
                BlackBerry: () => r.isBlackBerry,
                iOS: () => r.isIOS,
                Opera: () => r.isOperaMini,
                isIPad: () => r.isIPad,
                any: () => r.isAnyMobile
            };

            function p() {
                const e = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^embed/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$"],
                    t = window.location.pathname.replace(/^\//, "");
                let n;
                for (let r = e.length - 1; r >= 0; r--)
                    if (n = new RegExp(e[r]), n.test(t)) return !0;
                return !1
            }

            function w() {
                return r.mobiletouch || r.touch || r.isAnyMobile
            }

            function m(e) {
                return new URLSearchParams(window.location.search).get("page_type") === e
            }
            i.isMobile = f, i.onWidget = p;
            const b = r.isChrome,
                g = r.isFF,
                y = r.isEdge,
                h = r.isSafari;

            function A() {
                return "/pricing/" === window.location.pathname
            }

            function v() {
                return "/" === window.location.pathname
            }
        },
        444372: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => r.t
            });
            n(466281);
            var r = n(195619)
        },
        632227: (e, t, n) => {
            "use strict";
            ! function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = n(882321)
        },
        50959: (e, t, n) => {
            "use strict";
            e.exports = n(695257)
        },
        764829: (e, t, n) => {
            "use strict";
            var r;
            n.r(t), n.d(t, {
                disable: () => l,
                enable: () => d,
                enabled: () => a,
                getAllFeatures: () => f,
                setEnabled: () => c
            });
            var i = n(111119);
            const o = new Map,
                s = new Map,
                u = new Set;

            function a(e) {
                const t = o.get(e);
                if (void 0 !== t) return t;
                const n = s.get(e);
                return !!n && n.some(a)
            }

            function c(e, t) {
                o.set(String(e), Boolean(t))
            }

            function d(e) {
                c(e, !0)
            }

            function l(e) {
                c(e, !1)
            }

            function f() {
                const e = Object.create(null);
                for (const t of u) e[t] = a(t);
                return e
            }! function() {
                for (const [e, t] of Object.entries(r || (r = n.t(i, 2))))
                    if (u.add(e), "subsets" in t)
                        for (const n of t.subsets) {
                            u.add(n);
                            let t = s.get(n);
                            void 0 === t && (t = [], s.set(n, t)), t.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(l), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(d)
            }()
        },
        124829: function(e, t, n) {
            e = n.nmd(e);
            const {
                clone: r,
                merge: i
            } = n(440837);
            var o, s = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                u = function(e) {
                    return "object" == typeof e && null !== e
                };

            function a(e) {
                return "number" == typeof e && isFinite(e)
            }

            function c(e) {
                return null != e && (e.constructor === Function || "[object Function]" === Object.prototype.toString.call(e))
            }

            function d(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            "undefined" != typeof window ? (o = window.TradingView = window.TradingView || {}, window.isNumber = a, window.isFunction = c, window.inherit = d, window.isArray = s) : o = this.TradingView = this.TradingView || {}, o.isNaN = function(e) {
                return !(e <= 0 || e > 0)
            }, o.isAbsent = function(e) {
                return null == e
            }, o.isExistent = function(e) {
                return null != e
            }, Number.isNaN = Number.isNaN || function(e) {
                return e != e
            }, o.isSameType = function(e, t) {
                return Number.isNaN(e) || Number.isNaN(t) ? Number.isNaN(e) === Number.isNaN(t) : {}.toString.call(e) === {}.toString.call(t)
            }, o.isInteger = function(e) {
                return "number" == typeof e && e % 1 == 0
            }, o.isString = function(e) {
                return null != e && e.constructor === String
            }, o.isInherited = function(e, t) {
                if (null == e || null == e.prototype) throw new TypeError("isInherited: child should be a constructor function");
                if (null == t || null == t.prototype) throw new TypeError("isInherited: parent should be a constructor function");
                return e.prototype instanceof t || e.prototype === t.prototype
            }, o.clone = r, o.deepEquals = function(e, t, n) {
                if (n || (n = ""), e === t) return [!0, n];
                if (c(e) && (e = void 0), c(t) && (t = void 0), void 0 === e && void 0 !== t) return [!1, n];
                if (void 0 === t && void 0 !== e) return [!1, n];
                if (null === e && null !== t) return [!1, n];
                if (null === t && null !== e) return [!1, n];
                if ("object" != typeof e && "object" != typeof t) return [e === t, n];
                if (Array.isArray(e) && Array.isArray(t)) {
                    var r = e.length;
                    if (r !== t.length) return [!1, n];
                    for (var i = 0; i < r; i++) {
                        if (!(a = o.deepEquals(e[i], t[i], n + "[" + i + "]"))[0]) return a
                    }
                    return [!0, n]
                }
                if (s(e) || s(t)) return [!1, n];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, n];
                for (var u in e) {
                    var a;
                    if (!(a = o.deepEquals(e[u], t[u], n + "[" + u + "]"))[0]) return a
                }
                return [!0, n]
            }, o.merge = i, e && e.exports && (e.exports = {
                inherit: d,
                clone: o.clone,
                merge: o.merge,
                isNumber: a,
                isInteger: o.isInteger,
                isString: o.isString,
                isObject: u,
                isHashObject: function(e) {
                    return u(e) && -1 !== e.constructor.toString().indexOf("function Object")
                },
                isPromise: function(e) {
                    return u(e) && e.then
                },
                isNaN: o.isNaN,
                isAbsent: o.isAbsent,
                isExistent: o.isExistent,
                isSameType: o.isSameType,
                isArray: s,
                isFunction: c,
                parseBool: o.parseBool,
                deepEquals: o.deepEquals,
                notNull: function(e) {
                    return null !== e
                },
                notUndefined: function(e) {
                    return void 0 !== e
                },
                isEven: function(e) {
                    return e % 2 == 0
                },
                declareClassAsPureInterface: function(e, t) {
                    for (var n in e.prototype) "function" == typeof e.prototype[n] && e.prototype.hasOwnProperty(n) && (e.prototype[n] = function() {
                        throw new Error(t + "::" + n + " is an interface member declaration and must be overloaded in order to be called")
                    })
                },
                requireFullInterfaceImplementation: function(e, t, n, r) {
                    for (var i in n.prototype)
                        if ("function" == typeof n.prototype[i] && !e.prototype[i]) throw new Error("Interface implementation assertion failed: " + t + " does not implement " + r + "::" + i + " function")
                }
            })
        }
    }
]);