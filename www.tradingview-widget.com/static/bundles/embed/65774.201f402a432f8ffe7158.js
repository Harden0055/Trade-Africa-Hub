(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [65774, 75514], {
        650151: (e, t) => {
            "use strict";

            function r(e, t) {
                if (void 0 === e) throw new Error("".concat(null != t ? t : "Value", " is undefined"));
                return e
            }

            function n(e, t) {
                if (null === e) throw new Error("".concat(null != t ? t : "Value", " is null"));
                return e
            }
            t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
            }, t.ensureDefined = r, t.ensureNotNull = n
        },
        497754: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var u = typeof r;
                            if ("string" === u || "number" === u) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var i = o.apply(null, r);
                                i && e.push(i)
                            } else if ("object" === u)
                                for (var c in r) n.call(r, c) && r[c] && e.push(c)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
                    return o
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        64531: (e, t) => {
            "use strict";
            var r, n = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function o() {
                if (r) return r;
                if (!n || !window.document.body) return "indeterminate";
                var e = window.document.createElement("div");
                return e.appendChild(document.createTextNode("ABCD")), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), r = "reverse", e.scrollLeft > 0 ? r = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (r = "negative")), document.body.removeChild(e), r
            }
        },
        778785: (e, t, r) => {
            "use strict";
            r.d(t, {
                mobiletouch: () => o,
                setClasses: () => u
            });
            var n = r(167175);
            const o = n.mobiletouch;
            n.touch;

            function u() {
                document.documentElement.classList.add(n.touch ? "feature-touch" : "feature-no-touch", n.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        444372: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n.t
            });
            r(466281);
            var n = r(195619)
        },
        39654: (e, t, r) => {
            "use strict"
        },
        904237: (e, t, r) => {
            "use strict";
            var n = r(632227);
            n.createRoot, t.hydrateRoot = n.hydrateRoot
        },
        632227: (e, t, r) => {
            "use strict";
            ! function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = r(882321)
        },
        695257: (e, t) => {
            "use strict";
            var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                u = Symbol.for("react.strict_mode"),
                i = Symbol.for("react.profiler"),
                c = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                a = Symbol.for("react.forward_ref"),
                l = Symbol.for("react.suspense"),
                f = Symbol.for("react.memo"),
                p = Symbol.for("react.lazy"),
                d = Symbol.iterator;
            var y = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = Object.assign,
                m = {};

            function b(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
            }

            function v() {}

            function w(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
            }
            b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, b.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = b.prototype;
            var _ = w.prototype = new v;
            _.constructor = w, h(_, b.prototype), _.isPureReactComponent = !0;
            var g = Array.isArray,
                E = Object.prototype.hasOwnProperty,
                S = {
                    current: null
                },
                O = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function N(e, t, n) {
                var o, u = {},
                    i = null,
                    c = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (i = "" + t.key), t) E.call(t, o) && !O.hasOwnProperty(o) && (u[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s) u.children = n;
                else if (1 < s) {
                    for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2];
                    u.children = a
                }
                if (e && e.defaultProps)
                    for (o in s = e.defaultProps) void 0 === u[o] && (u[o] = s[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: i,
                    ref: c,
                    props: u,
                    _owner: S.current
                }
            }

            function j(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }
            var C = /\/+/g;

            function k(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function A(e, t, o, u, i) {
                var c = typeof e;
                "undefined" !== c && "boolean" !== c || (e = null);
                var s = !1;
                if (null === e) s = !0;
                else switch (c) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case r:
                            case n:
                                s = !0
                        }
                }
                if (s) return i = i(s = e), e = "" === u ? "." + k(s, 0) : u, g(i) ? (o = "", null != e && (o = e.replace(C, "$&/") + "/"), A(i, t, o, "", (function(e) {
                    return e
                }))) : null != i && (j(i) && (i = function(e, t) {
                    return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(C, "$&/") + "/") + e)), t.push(i)), 1;
                if (s = 0, u = "" === u ? "." : u + ":", g(e))
                    for (var a = 0; a < e.length; a++) {
                        var l = u + k(c = e[a], a);
                        s += A(c, t, o, l, i)
                    } else if (l = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof l)
                        for (e = l.call(e), a = 0; !(c = e.next()).done;) s += A(c = c.value, t, o, l = u + k(c, a++), i);
                    else if ("object" === c) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function R(e, t, r) {
                if (null == e) return e;
                var n = [],
                    o = 0;
                return A(e, n, "", "", (function(e) {
                    return t.call(r, e, o++)
                })), n
            }

            function x(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var T = {
                    current: null
                },
                $ = {
                    transition: null
                },
                I = {
                    ReactCurrentDispatcher: T,
                    ReactCurrentBatchConfig: $,
                    ReactCurrentOwner: S
                };
            t.Children = {
                map: R,
                forEach: function(e, t, r) {
                    R(e, (function() {
                        t.apply(this, arguments)
                    }), r)
                },
                count: function(e) {
                    var t = 0;
                    return R(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return R(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = b, t.Fragment = o, t.Profiler = i, t.PureComponent = w, t.StrictMode = u, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                    u = e.key,
                    i = e.ref,
                    c = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, c = S.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (a in t) E.call(t, a) && !O.hasOwnProperty(a) && (o[a] = void 0 === t[a] && void 0 !== s ? s[a] : t[a])
                }
                var a = arguments.length - 2;
                if (1 === a) o.children = n;
                else if (1 < a) {
                    s = Array(a);
                    for (var l = 0; l < a; l++) s[l] = arguments[l + 2];
                    o.children = s
                }
                return {
                    $$typeof: r,
                    type: e.type,
                    key: u,
                    ref: i,
                    props: o,
                    _owner: c
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: c,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = N, t.createFactory = function(e) {
                var t = N.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: a,
                    render: e
                }
            }, t.isValidElement = j, t.lazy = function(e) {
                return {
                    $$typeof: p,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: x
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: f,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = $.transition;
                $.transition = {};
                try {
                    e()
                } finally {
                    $.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return T.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return T.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return T.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return T.current.useEffect(e, t)
            }, t.useId = function() {
                return T.current.useId()
            }, t.useImperativeHandle = function(e, t, r) {
                return T.current.useImperativeHandle(e, t, r)
            }, t.useInsertionEffect = function(e, t) {
                return T.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return T.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return T.current.useMemo(e, t)
            }, t.useReducer = function(e, t, r) {
                return T.current.useReducer(e, t, r)
            }, t.useRef = function(e) {
                return T.current.useRef(e)
            }, t.useState = function(e) {
                return T.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, r) {
                return T.current.useSyncExternalStore(e, t, r)
            }, t.useTransition = function() {
                return T.current.useTransition()
            }, t.version = "18.2.0"
        },
        50959: (e, t, r) => {
            "use strict";
            e.exports = r(695257)
        },
        124829: function(e, t, r) {
            e = r.nmd(e);
            const {
                clone: n,
                merge: o
            } = r(440837);
            var u, i = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                c = function(e) {
                    return "object" == typeof e && null !== e
                };

            function s(e) {
                return "number" == typeof e && isFinite(e)
            }

            function a(e) {
                return null != e && (e.constructor === Function || "[object Function]" === Object.prototype.toString.call(e))
            }

            function l(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            "undefined" != typeof window ? (u = window.TradingView = window.TradingView || {}, window.isNumber = s, window.isFunction = a, window.inherit = l, window.isArray = i) : u = this.TradingView = this.TradingView || {}, u.isNaN = function(e) {
                return !(e <= 0 || e > 0)
            }, u.isAbsent = function(e) {
                return null == e
            }, u.isExistent = function(e) {
                return null != e
            }, Number.isNaN = Number.isNaN || function(e) {
                return e != e
            }, u.isSameType = function(e, t) {
                return Number.isNaN(e) || Number.isNaN(t) ? Number.isNaN(e) === Number.isNaN(t) : {}.toString.call(e) === {}.toString.call(t)
            }, u.isInteger = function(e) {
                return "number" == typeof e && e % 1 == 0
            }, u.isString = function(e) {
                return null != e && e.constructor === String
            }, u.isInherited = function(e, t) {
                if (null == e || null == e.prototype) throw new TypeError("isInherited: child should be a constructor function");
                if (null == t || null == t.prototype) throw new TypeError("isInherited: parent should be a constructor function");
                return e.prototype instanceof t || e.prototype === t.prototype
            }, u.clone = n, u.deepEquals = function(e, t, r) {
                if (r || (r = ""), e === t) return [!0, r];
                if (a(e) && (e = void 0), a(t) && (t = void 0), void 0 === e && void 0 !== t) return [!1, r];
                if (void 0 === t && void 0 !== e) return [!1, r];
                if (null === e && null !== t) return [!1, r];
                if (null === t && null !== e) return [!1, r];
                if ("object" != typeof e && "object" != typeof t) return [e === t, r];
                if (Array.isArray(e) && Array.isArray(t)) {
                    var n = e.length;
                    if (n !== t.length) return [!1, r];
                    for (var o = 0; o < n; o++) {
                        if (!(s = u.deepEquals(e[o], t[o], r + "[" + o + "]"))[0]) return s
                    }
                    return [!0, r]
                }
                if (i(e) || i(t)) return [!1, r];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, r];
                for (var c in e) {
                    var s;
                    if (!(s = u.deepEquals(e[c], t[c], r + "[" + c + "]"))[0]) return s
                }
                return [!0, r]
            }, u.merge = o, e && e.exports && (e.exports = {
                inherit: l,
                clone: u.clone,
                merge: u.merge,
                isNumber: s,
                isInteger: u.isInteger,
                isString: u.isString,
                isObject: c,
                isHashObject: function(e) {
                    return c(e) && -1 !== e.constructor.toString().indexOf("function Object")
                },
                isPromise: function(e) {
                    return c(e) && e.then
                },
                isNaN: u.isNaN,
                isAbsent: u.isAbsent,
                isExistent: u.isExistent,
                isSameType: u.isSameType,
                isArray: i,
                isFunction: a,
                parseBool: u.parseBool,
                deepEquals: u.deepEquals,
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
                    for (var r in e.prototype) "function" == typeof e.prototype[r] && e.prototype.hasOwnProperty(r) && (e.prototype[r] = function() {
                        throw new Error(t + "::" + r + " is an interface member declaration and must be overloaded in order to be called")
                    })
                },
                requireFullInterfaceImplementation: function(e, t, r, n) {
                    for (var o in r.prototype)
                        if ("function" == typeof r.prototype[o] && !e.prototype[o]) throw new Error("Interface implementation assertion failed: " + t + " does not implement " + n + "::" + o + " function")
                }
            })
        },
        466281: (e, t, r) => {
            "use strict";
            var n = r(124829);
            const o = /{(\w+)}/g,
                u = /{(\d+)}/g;
            String.prototype.format = function(...e) {
                const t = (0, n.isObject)(e[0]),
                    r = t ? o : u,
                    i = t ? (t, r) => {
                        const n = e[0];
                        return void 0 !== n[r] ? n[r] : t
                    } : (t, r) => {
                        const n = parseInt(r, 10),
                            o = e[n];
                        return void 0 !== o ? o : t
                    };
                return this.replace(r, i)
            }
        }
    }
]);