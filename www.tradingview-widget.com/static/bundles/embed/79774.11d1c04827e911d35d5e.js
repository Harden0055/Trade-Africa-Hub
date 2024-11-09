"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [79774], {
        613106: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            var _ = a(824824),
                o = a(770597),
                r = a(903262),
                s = a(520334),
                n = a(537080);

            function l(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var _ = e[t];
                    this.set(_[0], _[1])
                }
            }
            l.prototype.clear = _.default, l.prototype.delete = o.default, l.prototype.get = r.default, l.prototype.has = s.default, l.prototype.set = n.default;
            const i = l
        },
        557699: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            var _ = a(898968),
                o = a(869735),
                r = a(360648),
                s = a(454600),
                n = a(924977);

            function l(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var _ = e[t];
                    this.set(_[0], _[1])
                }
            }
            l.prototype.clear = _.default, l.prototype.delete = o.default, l.prototype.get = r.default, l.prototype.has = s.default, l.prototype.set = n.default;
            const i = l
        },
        19385: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(352918),
                o = a(799615);
            const r = (0, _.default)(o.default, "Map")
        },
        441083: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            var _ = a(712380),
                o = a(967067),
                r = a(609240),
                s = a(127323),
                n = a(853843);

            function l(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var _ = e[t];
                    this.set(_[0], _[1])
                }
            }
            l.prototype.clear = _.default, l.prototype.delete = o.default, l.prototype.get = r.default, l.prototype.has = s.default, l.prototype.set = n.default;
            const i = l
        },
        87593: (e, t, a) => {
            a.d(t, {
                default: () => c
            });
            var _ = a(557699);
            const o = function() {
                this.__data__ = new _.default, this.size = 0
            };
            const r = function(e) {
                var t = this.__data__,
                    a = t.delete(e);
                return this.size = t.size, a
            };
            const s = function(e) {
                return this.__data__.get(e)
            };
            const n = function(e) {
                return this.__data__.has(e)
            };
            var l = a(19385),
                i = a(441083);
            const d = function(e, t) {
                var a = this.__data__;
                if (a instanceof _.default) {
                    var o = a.__data__;
                    if (!l.default || o.length < 199) return o.push([e, t]), this.size = ++a.size, this;
                    a = this.__data__ = new i.default(o)
                }
                return a.set(e, t), this.size = a.size, this
            };

            function u(e) {
                var t = this.__data__ = new _.default(e);
                this.size = t.size
            }
            u.prototype.clear = o, u.prototype.delete = r, u.prototype.get = s, u.prototype.has = n, u.prototype.set = d;
            const c = u
        },
        366711: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = a(799615).default.Symbol
        },
        216299: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = a(799615).default.Uint8Array
        },
        919608: (e, t, a) => {
            a.d(t, {
                default: () => d
            });
            var _ = a(974650),
                o = a(154404),
                r = a(456052),
                s = a(232437),
                n = a(399313),
                l = a(109125),
                i = Object.prototype.hasOwnProperty;
            const d = function(e, t) {
                var a = (0, r.default)(e),
                    d = !a && (0, o.default)(e),
                    u = !a && !d && (0, s.default)(e),
                    c = !a && !d && !u && (0, l.default)(e),
                    f = a || d || u || c,
                    h = f ? (0, _.default)(e.length, String) : [],
                    p = h.length;
                for (var b in e) !t && !i.call(e, b) || f && ("length" == b || u && ("offset" == b || "parent" == b) || c && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || (0, n.default)(b, p)) || h.push(b);
                return h
            }
        },
        218573: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e, t) {
                for (var a = -1, _ = t.length, o = e.length; ++a < _;) e[o + a] = t[a];
                return e
            }
        },
        365363: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(554523);
            const o = function(e, t) {
                for (var a = e.length; a--;)
                    if ((0, _.default)(e[a][0], t)) return a;
                return -1
            }
        },
        296909: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(218573),
                o = a(456052);
            const r = function(e, t, a) {
                var r = t(e);
                return (0, o.default)(e) ? r : (0, _.default)(r, a(e))
            }
        },
        194138: (e, t, a) => {
            a.d(t, {
                default: () => n
            });
            var _ = a(366711),
                o = a(633161),
                r = a(495863),
                s = _.default ? _.default.toStringTag : void 0;
            const n = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? (0, o.default)(e) : (0, r.default)(e)
            }
        },
        263062: (e, t, a) => {
            a.d(t, {
                default: () => f
            });
            var _ = a(688987),
                o = a(832632),
                r = a(182433),
                s = a(265114),
                n = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                i = Object.prototype,
                d = l.toString,
                u = i.hasOwnProperty,
                c = RegExp("^" + d.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const f = function(e) {
                return !(!(0, r.default)(e) || (0, o.default)(e)) && ((0, _.default)(e) ? c : n).test((0, s.default)(e))
            }
        },
        589815: (e, t, a) => {
            a.d(t, {
                default: () => s
            });
            var _ = a(5196);
            const o = (0, a(245635).default)(Object.keys, Object);
            var r = Object.prototype.hasOwnProperty;
            const s = function(e) {
                if (!(0, _.default)(e)) return o(e);
                var t = [];
                for (var a in Object(e)) r.call(e, a) && "constructor" != a && t.push(a);
                return t
            }
        },
        974650: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e, t) {
                for (var a = -1, _ = Array(e); ++a < e;) _[a] = t(a);
                return _
            }
        },
        805467: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        620712: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = a(799615).default["__core-js_shared__"]
        },
        97889: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = "object" == typeof global && global && global.Object === Object && global
        },
        438366: (e, t, a) => {
            a.d(t, {
                default: () => s
            });
            var _ = a(296909),
                o = a(21578),
                r = a(377251);
            const s = function(e) {
                return (0, _.default)(e, r.default, o.default)
            }
        },
        510791: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(46861);
            const o = function(e, t) {
                var a = e.__data__;
                return (0, _.default)(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
            }
        },
        352918: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(263062),
                o = a(192716);
            const r = function(e, t) {
                var a = (0, o.default)(e, t);
                return (0, _.default)(a) ? a : void 0
            }
        },
        633161: (e, t, a) => {
            a.d(t, {
                default: () => l
            });
            var _ = a(366711),
                o = Object.prototype,
                r = o.hasOwnProperty,
                s = o.toString,
                n = _.default ? _.default.toStringTag : void 0;
            const l = function(e) {
                var t = r.call(e, n),
                    a = e[n];
                try {
                    e[n] = void 0;
                    var _ = !0
                } catch (e) {}
                var o = s.call(e);
                return _ && (t ? e[n] = a : delete e[n]), o
            }
        },
        21578: (e, t, a) => {
            a.d(t, {
                default: () => n
            });
            const _ = function(e, t) {
                for (var a = -1, _ = null == e ? 0 : e.length, o = 0, r = []; ++a < _;) {
                    var s = e[a];
                    t(s, a, e) && (r[o++] = s)
                }
                return r
            };
            var o = a(469043),
                r = Object.prototype.propertyIsEnumerable,
                s = Object.getOwnPropertySymbols;
            const n = s ? function(e) {
                return null == e ? [] : (e = Object(e), _(s(e), (function(t) {
                    return r.call(e, t)
                })))
            } : o.default
        },
        881296: (e, t, a) => {
            a.d(t, {
                default: () => x
            });
            var _ = a(352918),
                o = a(799615);
            const r = (0, _.default)(o.default, "DataView");
            var s = a(19385);
            const n = (0, _.default)(o.default, "Promise");
            const l = (0, _.default)(o.default, "Set");
            const i = (0, _.default)(o.default, "WeakMap");
            var d = a(194138),
                u = a(265114),
                c = "[object Map]",
                f = "[object Promise]",
                h = "[object Set]",
                p = "[object WeakMap]",
                b = "[object DataView]",
                m = (0, u.default)(r),
                y = (0, u.default)(s.default),
                g = (0, u.default)(n),
                v = (0, u.default)(l),
                w = (0, u.default)(i),
                j = d.default;
            (r && j(new r(new ArrayBuffer(1))) != b || s.default && j(new s.default) != c || n && j(n.resolve()) != f || l && j(new l) != h || i && j(new i) != p) && (j = function(e) {
                var t = (0, d.default)(e),
                    a = "[object Object]" == t ? e.constructor : void 0,
                    _ = a ? (0, u.default)(a) : "";
                if (_) switch (_) {
                    case m:
                        return b;
                    case y:
                        return c;
                    case g:
                        return f;
                    case v:
                        return h;
                    case w:
                        return p
                }
                return t
            });
            const x = j
        },
        192716: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        824824: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(219620);
            const o = function() {
                this.__data__ = _.default ? (0, _.default)(null) : {}, this.size = 0
            }
        },
        770597: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        903262: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(219620),
                o = Object.prototype.hasOwnProperty;
            const r = function(e) {
                var t = this.__data__;
                if (_.default) {
                    var a = t[e];
                    return "__lodash_hash_undefined__" === a ? void 0 : a
                }
                return o.call(t, e) ? t[e] : void 0
            }
        },
        520334: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(219620),
                o = Object.prototype.hasOwnProperty;
            const r = function(e) {
                var t = this.__data__;
                return _.default ? void 0 !== t[e] : o.call(t, e)
            }
        },
        537080: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(219620);
            const o = function(e, t) {
                var a = this.__data__;
                return this.size += this.has(e) ? 0 : 1, a[e] = _.default && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        399313: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = /^(?:0|[1-9]\d*)$/;
            const o = function(e, t) {
                var a = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == a || "symbol" != a && _.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
        },
        46861: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        832632: (e, t, a) => {
            a.d(t, {
                default: () => s
            });
            var _, o = a(620712),
                r = (_ = /[^.]+$/.exec(o.default && o.default.keys && o.default.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _ : "";
            const s = function(e) {
                return !!r && r in e
            }
        },
        5196: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = Object.prototype;
            const o = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || _)
            }
        },
        898968: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function() {
                this.__data__ = [], this.size = 0
            }
        },
        869735: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(365363),
                o = Array.prototype.splice;
            const r = function(e) {
                var t = this.__data__,
                    a = (0, _.default)(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : o.call(t, a, 1), --this.size, !0)
            }
        },
        360648: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(365363);
            const o = function(e) {
                var t = this.__data__,
                    a = (0, _.default)(t, e);
                return a < 0 ? void 0 : t[a][1]
            }
        },
        454600: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(365363);
            const o = function(e) {
                return (0, _.default)(this.__data__, e) > -1
            }
        },
        924977: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(365363);
            const o = function(e, t) {
                var a = this.__data__,
                    o = (0, _.default)(a, e);
                return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this
            }
        },
        712380: (e, t, a) => {
            a.d(t, {
                default: () => s
            });
            var _ = a(613106),
                o = a(557699),
                r = a(19385);
            const s = function() {
                this.size = 0, this.__data__ = {
                    hash: new _.default,
                    map: new(r.default || o.default),
                    string: new _.default
                }
            }
        },
        967067: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(510791);
            const o = function(e) {
                var t = (0,
                    _.default)(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        609240: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(510791);
            const o = function(e) {
                return (0, _.default)(this, e).get(e)
            }
        },
        127323: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(510791);
            const o = function(e) {
                return (0, _.default)(this, e).has(e)
            }
        },
        853843: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = a(510791);
            const o = function(e, t) {
                var a = (0, _.default)(this, e),
                    o = a.size;
                return a.set(e, t), this.size += a.size == o ? 0 : 1, this
            }
        },
        219620: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = (0, a(352918).default)(Object, "create")
        },
        292350: (e, t, a) => {
            a.d(t, {
                default: () => n
            });
            var _ = a(97889),
                o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof module && module && !module.nodeType && module,
                s = r && r.exports === o && _.default.process;
            const n = function() {
                try {
                    var e = r && r.require && r.require("util").types;
                    return e || s && s.binding && s.binding("util")
                } catch (e) {}
            }()
        },
        495863: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = Object.prototype.toString;
            const o = function(e) {
                return _.call(e)
            }
        },
        245635: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e, t) {
                return function(a) {
                    return e(t(a))
                }
            }
        },
        799615: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(97889),
                o = "object" == typeof self && self && self.Object === Object && self;
            const r = _.default || o || Function("return this")()
        },
        265114: (e, t, a) => {
            a.d(t, {
                default: () => o
            });
            var _ = Function.prototype.toString;
            const o = function(e) {
                if (null != e) {
                    try {
                        return _.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        290484: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            var _ = a(182433),
                o = a(799615);
            const r = function() {
                return o.default.Date.now()
            };
            var s = a(678677),
                n = Math.max,
                l = Math.min;
            const i = function(e, t, a) {
                var o, i, d, u, c, f, h = 0,
                    p = !1,
                    b = !1,
                    m = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function y(t) {
                    var a = o,
                        _ = i;
                    return o = i = void 0, h = t, u = e.apply(_, a)
                }

                function g(e) {
                    return h = e, c = setTimeout(w, t), p ? y(e) : u
                }

                function v(e) {
                    var a = e - f;
                    return void 0 === f || a >= t || a < 0 || b && e - h >= d
                }

                function w() {
                    var e = r();
                    if (v(e)) return j(e);
                    c = setTimeout(w, function(e) {
                        var a = t - (e - f);
                        return b ? l(a, d - (e - h)) : a
                    }(e))
                }

                function j(e) {
                    return c = void 0, m && o ? y(e) : (o = i = void 0, u)
                }

                function x() {
                    var e = r(),
                        a = v(e);
                    if (o = arguments, i = this, f = e, a) {
                        if (void 0 === c) return g(f);
                        if (b) return clearTimeout(c), c = setTimeout(w, t), y(f)
                    }
                    return void 0 === c && (c = setTimeout(w, t)), u
                }
                return t = (0, s.default)(t) || 0, (0, _.default)(a) && (p = !!a.leading, d = (b = "maxWait" in a) ? n((0, s.default)(a.maxWait) || 0, t) : d, m = "trailing" in a ? !!a.trailing : m), x.cancel = function() {
                    void 0 !== c && clearTimeout(c), h = 0, o = f = i = c = void 0
                }, x.flush = function() {
                    return void 0 === c ? u : j(r())
                }, x
            }
        },
        554523: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e, t) {
                return e === t || e != e && t != t
            }
        },
        154404: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            var _ = a(194138),
                o = a(513795);
            const r = function(e) {
                return (0, o.default)(e) && "[object Arguments]" == (0, _.default)(e)
            };
            var s = Object.prototype,
                n = s.hasOwnProperty,
                l = s.propertyIsEnumerable;
            const i = r(function() {
                return arguments
            }()) ? r : function(e) {
                return (0, o.default)(e) && n.call(e, "callee") && !l.call(e, "callee")
            }
        },
        456052: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = Array.isArray
        },
        649634: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(688987),
                o = a(965743);
            const r = function(e) {
                return null != e && (0, o.default)(e.length) && !(0, _.default)(e)
            }
        },
        232437: (e, t, a) => {
            a.d(t, {
                default: () => l
            });
            var _ = a(799615);
            const o = function() {
                return !1
            };
            var r = "object" == typeof exports && exports && !exports.nodeType && exports,
                s = r && "object" == typeof module && module && !module.nodeType && module,
                n = s && s.exports === r ? _.default.Buffer : void 0;
            const l = (n ? n.isBuffer : void 0) || o
        },
        688987: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(194138),
                o = a(182433);
            const r = function(e) {
                if (!(0, o.default)(e)) return !1;
                var t = (0, _.default)(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        965743: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        182433: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        513795: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function(e) {
                return null != e && "object" == typeof e
            }
        },
        898111: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(194138),
                o = a(513795);
            const r = function(e) {
                return "symbol" == typeof e || (0, o.default)(e) && "[object Symbol]" == (0, _.default)(e)
            }
        },
        109125: (e, t, a) => {
            a.d(t, {
                default: () => u
            });
            var _ = a(194138),
                o = a(965743),
                r = a(513795),
                s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
            const n = function(e) {
                return (0, r.default)(e) && (0, o.default)(e.length) && !!s[(0, _.default)(e)]
            };
            var l = a(805467),
                i = a(292350),
                d = i.default && i.default.isTypedArray;
            const u = d ? (0, l.default)(d) : n
        },
        377251: (e, t, a) => {
            a.d(t, {
                default: () => s
            });
            var _ = a(919608),
                o = a(589815),
                r = a(649634);
            const s = function(e) {
                return (0, r.default)(e) ? (0, _.default)(e) : (0, o.default)(e)
            }
        },
        259332: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(441083);

            function o(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var a = function() {
                    var _ = arguments,
                        o = t ? t.apply(this, _) : _[0],
                        r = a.cache;
                    if (r.has(o)) return r.get(o);
                    var s = e.apply(this, _);
                    return a.cache = r.set(o, s) || r, s
                };
                return a.cache = new(o.Cache || _.default), a
            }
            o.Cache = _.default;
            const r = o
        },
        469043: (e, t, a) => {
            a.d(t, {
                default: () => _
            });
            const _ = function() {
                return []
            }
        },
        920057: (e, t, a) => {
            a.d(t, {
                default: () => r
            });
            var _ = a(290484),
                o = a(182433);
            const r = function(e, t, a) {
                var r = !0,
                    s = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return (0, o.default)(a) && (r = "leading" in a ? !!a.leading : r, s = "trailing" in a ? !!a.trailing : s), (0, _.default)(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: s
                })
            }
        },
        678677: (e, t, a) => {
            a.d(t, {
                default: () => f
            });
            var _ = /\s/;
            const o = function(e) {
                for (var t = e.length; t-- && _.test(e.charAt(t)););
                return t
            };
            var r = /^\s+/;
            const s = function(e) {
                return e ? e.slice(0, o(e) + 1).replace(r, "") : e
            };
            var n = a(182433),
                l = a(898111),
                i = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt;
            const f = function(e) {
                if ("number" == typeof e) return e;
                if ((0, l.default)(e)) return NaN;
                if ((0, n.default)(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = (0, n.default)(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = s(e);
                var a = d.test(e);
                return a || u.test(e) ? c(e.slice(2), a ? 2 : 8) : i.test(e) ? NaN : +e
            }
        },
        111119: e => {
            e.exports = JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_quick_search":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_quick_search","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"right_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend","legend_inplace_edit"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"legend_inplace_edit":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"mobile_app_action_open_details_webview":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{"subsets":["use_last_visible_bar_value_in_legend"]},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"legend_last_day_change":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"watchlist_context_menu":{},"accessible_keyboard_shortcuts":{},"app_phone":{},"app_tablet":{},"mobile_app_hide_replay_toolbar":{},"tv_production":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","right_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","adaptive_trading_sources","chart_style_hilo_last_price"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","right_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","right_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo","request_only_visible_range_on_reset","clear_price_scale_on_error_or_empty_bars","show_symbol_logo_in_legend","show_symbol_logo_for_compare_studies","library_custom_color_themes"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","adaptive_trading_sources","watchlist_context_menu","show_symbol_logo_in_account_manager","watchlist_sections","prefer_quote_short_name","enable_dom_data_for_untradable_symbols","prefer_symbol_name_over_fullname"]}}')
        }
    }
]);