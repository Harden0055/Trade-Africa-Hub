(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [84074], {
        150335: (e, t) => {
            "use strict";

            function n(e) {
                return Math.round(1e10 * e) / 1e10
            }
            t.isNumber = void 0, t.isNumber = function(e) {
                return "number" == typeof e && isFinite(e)
            }
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

            function c(e) {
                return "number" == typeof e && isFinite(e)
            }

            function f(e) {
                return null != e && (e.constructor === Function || "[object Function]" === Object.prototype.toString.call(e))
            }

            function a(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            "undefined" != typeof window ? (o = window.TradingView = window.TradingView || {}, window.isNumber = c, window.isFunction = f, window.inherit = a, window.isArray = s) : o = this.TradingView = this.TradingView || {}, o.isNaN = function(e) {
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
                if (f(e) && (e = void 0), f(t) && (t = void 0), void 0 === e && void 0 !== t) return [!1, n];
                if (void 0 === t && void 0 !== e) return [!1, n];
                if (null === e && null !== t) return [!1, n];
                if (null === t && null !== e) return [!1, n];
                if ("object" != typeof e && "object" != typeof t) return [e === t, n];
                if (Array.isArray(e) && Array.isArray(t)) {
                    var r = e.length;
                    if (r !== t.length) return [!1, n];
                    for (var i = 0; i < r; i++) {
                        if (!(c = o.deepEquals(e[i], t[i], n + "[" + i + "]"))[0]) return c
                    }
                    return [!0, n]
                }
                if (s(e) || s(t)) return [!1, n];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, n];
                for (var u in e) {
                    var c;
                    if (!(c = o.deepEquals(e[u], t[u], n + "[" + u + "]"))[0]) return c
                }
                return [!0, n]
            }, o.merge = i, e && e.exports && (e.exports = {
                inherit: a,
                clone: o.clone,
                merge: o.merge,
                isNumber: c,
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
                isFunction: f,
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
        },
        685459: function(e, t, n) {
            var r;
            ! function(t) {
                "use strict";

                function i() {}
                var o = i.prototype,
                    s = t.EventEmitter;

                function u(e, t) {
                    for (var n = e.length; n--;)
                        if (e[n].listener === t) return n;
                    return -1
                }

                function c(e) {
                    return function() {
                        return this[e].apply(this, arguments)
                    }
                }

                function f(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && f(e.listener)
                }
                o.getListeners = function(e) {
                    var t, n, r = this._getEvents();
                    if (e instanceof RegExp)
                        for (n in t = {}, r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
                    else t = r[e] || (r[e] = []);
                    return t
                }, o.flattenListeners = function(e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                    return n
                }, o.getListenersAsObject = function(e) {
                    var t, n = this.getListeners(e);
                    return n instanceof Array && ((t = {})[e] = n), t || n
                }, o.addListener = function(e, t) {
                    if (!f(t)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(e),
                        i = "object" == typeof t;
                    for (n in r) r.hasOwnProperty(n) && -1 === u(r[n], t) && r[n].push(i ? t : {
                        listener: t,
                        once: !1
                    });
                    return this
                }, o.on = c("addListener"), o.addOnceListener = function(e, t) {
                    return this.addListener(e, {
                        listener: t,
                        once: !0
                    })
                }, o.once = c("addOnceListener"), o.defineEvent = function(e) {
                    return this.getListeners(e), this
                }, o.defineEvents = function(e) {
                    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                    return this
                }, o.removeListener = function(e, t) {
                    var n, r, i = this.getListenersAsObject(e);
                    for (r in i) i.hasOwnProperty(r) && -1 !== (n = u(i[r], t)) && i[r].splice(n, 1);
                    return this
                }, o.off = c("removeListener"), o.addListeners = function(e, t) {
                    return this.manipulateListeners(!1, e, t)
                }, o.removeListeners = function(e, t) {
                    return this.manipulateListeners(!0, e, t)
                }, o.manipulateListeners = function(e, t, n) {
                    var r, i, o = e ? this.removeListener : this.addListener,
                        s = e ? this.removeListeners : this.addListeners;
                    if ("object" != typeof t || t instanceof RegExp)
                        for (r = n.length; r--;) o.call(this, t, n[r]);
                    else
                        for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : s.call(this, r, i));
                    return this
                }, o.removeEvent = function(e) {
                    var t, n = typeof e,
                        r = this._getEvents();
                    if ("string" === n) delete r[e];
                    else if (e instanceof RegExp)
                        for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                    else delete this._events;
                    return this
                }, o.removeAllListeners = c("removeEvent"), o.emitEvent = function(e, t) {
                    var n, r, i, o, s = this.getListenersAsObject(e);
                    for (o in s)
                        if (s.hasOwnProperty(o))
                            for (n = s[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                    return this
                }, o.trigger = c("emitEvent"), o.emit = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(e, t)
                }, o.setOnceReturnValue = function(e) {
                    return this._onceReturnValue = e, this
                }, o._getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, o._getEvents = function() {
                    return this._events || (this._events = {})
                }, i.noConflict = function() {
                    return t.EventEmitter = s, i
                }, void 0 === (r = function() {
                    return i
                }.call(t, n, t, e)) || (e.exports = r)
            }(this || {})
        }
    }
]);