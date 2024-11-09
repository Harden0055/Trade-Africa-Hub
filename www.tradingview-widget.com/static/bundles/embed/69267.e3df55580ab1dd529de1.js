(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [69267], {
        960521: function(r, t, e) {
            var n;
            ! function(i) {
                "use strict";
                var o, s = 1e6,
                    c = 1e6,
                    f = "[big.js] ",
                    u = f + "Invalid ",
                    h = u + "decimal places",
                    l = f + "Division by zero",
                    a = {},
                    p = void 0,
                    v = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function g(r, t, e, n) {
                    var i = r.c;
                    if (e === p && (e = r.constructor.RM), 0 !== e && 1 !== e && 2 !== e && 3 !== e) throw Error("[big.js] Invalid rounding mode");
                    if (t < 1) n = 3 === e && (n || !!i[0]) || 0 === t && (1 === e && i[0] >= 5 || 2 === e && (i[0] > 5 || 5 === i[0] && (n || i[1] !== p))), i.length = 1, n ? (r.e = r.e - t + 1, i[0] = 1) : i[0] = r.e = 0;
                    else if (t < i.length) {
                        if (n = 1 === e && i[t] >= 5 || 2 === e && (i[t] > 5 || 5 === i[t] && (n || i[t + 1] !== p || 1 & i[t - 1])) || 3 === e && (n || !!i[0]), i.length = t--, n)
                            for (; ++i[t] > 9;) i[t] = 0, t-- || (++r.e, i.unshift(1));
                        for (t = i.length; !i[--t];) i.pop()
                    }
                    return r
                }

                function w(r, t, e) {
                    var n = r.e,
                        i = r.c.join(""),
                        o = i.length;
                    if (t) i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
                    else if (n < 0) {
                        for (; ++n;) i = "0" + i;
                        i = "0." + i
                    } else if (n > 0)
                        if (++n > o)
                            for (n -= o; n--;) i += "0";
                        else n < o && (i = i.slice(0, n) + "." + i.slice(n));
                    else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
                    return r.s < 0 && e ? "-" + i : i
                }
                a.abs = function() {
                    var r = new this.constructor(this);
                    return r.s = 1, r
                }, a.cmp = function(r) {
                    var t, e = this,
                        n = e.c,
                        i = (r = new e.constructor(r)).c,
                        o = e.s,
                        s = r.s,
                        c = e.e,
                        f = r.e;
                    if (!n[0] || !i[0]) return n[0] ? o : i[0] ? -s : 0;
                    if (o != s) return o;
                    if (t = o < 0, c != f) return c > f ^ t ? 1 : -1;
                    for (s = (c = n.length) < (f = i.length) ? c : f, o = -1; ++o < s;)
                        if (n[o] != i[o]) return n[o] > i[o] ^ t ? 1 : -1;
                    return c == f ? 0 : c > f ^ t ? 1 : -1
                }, a.div = function(r) {
                    var t = this,
                        e = t.constructor,
                        n = t.c,
                        i = (r = new e(r)).c,
                        o = t.s == r.s ? 1 : -1,
                        c = e.DP;
                    if (c !== ~~c || c < 0 || c > s) throw Error(h);
                    if (!i[0]) throw Error(l);
                    if (!n[0]) return r.s = o, r.c = [r.e = 0], r;
                    var f, u, a, v, w, d = i.slice(),
                        m = f = i.length,
                        E = n.length,
                        b = n.slice(0, f),
                        P = b.length,
                        y = r,
                        x = y.c = [],
                        j = 0,
                        A = c + (y.e = t.e - r.e) + 1;
                    for (y.s = o, o = A < 0 ? 0 : A, d.unshift(0); P++ < f;) b.push(0);
                    do {
                        for (a = 0; a < 10; a++) {
                            if (f != (P = b.length)) v = f > P ? 1 : -1;
                            else
                                for (w = -1, v = 0; ++w < f;)
                                    if (i[w] != b[w]) {
                                        v = i[w] > b[w] ? 1 : -1;
                                        break
                                    } if (!(v < 0)) break;
                            for (u = P == f ? i : d; P;) {
                                if (b[--P] < u[P]) {
                                    for (w = P; w && !b[--w];) b[w] = 9;
                                    --b[w], b[P] += 10
                                }
                                b[P] -= u[P]
                            }
                            for (; !b[0];) b.shift()
                        }
                        x[j++] = v ? a : ++a, b[0] && v ? b[P] = n[m] || 0 : b = [n[m]]
                    } while ((m++ < E || b[0] !== p) && o--);
                    return x[0] || 1 == j || (x.shift(), y.e--, A--), j > A && g(y, A, e.RM, b[0] !== p), y
                }, a.eq = function(r) {
                    return 0 === this.cmp(r)
                }, a.gt = function(r) {
                    return this.cmp(r) > 0
                }, a.gte = function(r) {
                    return this.cmp(r) > -1
                }, a.lt = function(r) {
                    return this.cmp(r) < 0
                }, a.lte = function(r) {
                    return this.cmp(r) < 1
                }, a.minus = a.sub = function(r) {
                    var t, e, n, i, o = this,
                        s = o.constructor,
                        c = o.s,
                        f = (r = new s(r)).s;
                    if (c != f) return r.s = -f, o.plus(r);
                    var u = o.c.slice(),
                        h = o.e,
                        l = r.c,
                        a = r.e;
                    if (!u[0] || !l[0]) return l[0] ? r.s = -f : u[0] ? r = new s(o) : r.s = 1, r;
                    if (c = h - a) {
                        for ((i = c < 0) ? (c = -c, n = u) : (a = h, n = l), n.reverse(), f = c; f--;) n.push(0);
                        n.reverse()
                    } else
                        for (e = ((i = u.length < l.length) ? u : l).length, c = f = 0; f < e; f++)
                            if (u[f] != l[f]) {
                                i = u[f] < l[f];
                                break
                            } if (i && (n = u, u = l, l = n, r.s = -r.s), (f = (e = l.length) - (t = u.length)) > 0)
                        for (; f--;) u[t++] = 0;
                    for (f = t; e > c;) {
                        if (u[--e] < l[e]) {
                            for (t = e; t && !u[--t];) u[t] = 9;
                            --u[t], u[e] += 10
                        }
                        u[e] -= l[e]
                    }
                    for (; 0 === u[--f];) u.pop();
                    for (; 0 === u[0];) u.shift(), --a;
                    return u[0] || (r.s = 1, u = [a = 0]), r.c = u, r.e = a, r
                }, a.mod = function(r) {
                    var t, e = this,
                        n = e.constructor,
                        i = e.s,
                        o = (r = new n(r)).s;
                    if (!r.c[0]) throw Error(l);
                    return e.s = r.s = 1, t = 1 == r.cmp(e), e.s = i, r.s = o, t ? new n(e) : (i = n.DP, o = n.RM, n.DP = n.RM = 0, e = e.div(r), n.DP = i, n.RM = o, this.minus(e.times(r)))
                }, a.plus = a.add = function(r) {
                    var t, e, n, i = this,
                        o = i.constructor;
                    if (r = new o(r), i.s != r.s) return r.s = -r.s, i.minus(r);
                    var s = i.e,
                        c = i.c,
                        f = r.e,
                        u = r.c;
                    if (!c[0] || !u[0]) return u[0] || (c[0] ? r = new o(i) : r.s = i.s), r;
                    if (c = c.slice(), t = s - f) {
                        for (t > 0 ? (f = s, n = u) : (t = -t, n = c), n.reverse(); t--;) n.push(0);
                        n.reverse()
                    }
                    for (c.length - u.length < 0 && (n = u, u = c, c = n), t = u.length, e = 0; t; c[t] %= 10) e = (c[--t] = c[t] + u[t] + e) / 10 | 0;
                    for (e && (c.unshift(e), ++f), t = c.length; 0 === c[--t];) c.pop();
                    return r.c = c, r.e = f, r
                }, a.pow = function(r) {
                    var t = this,
                        e = new t.constructor("1"),
                        n = e,
                        i = r < 0;
                    if (r !== ~~r || r < -1e6 || r > c) throw Error(u + "exponent");
                    for (i && (r = -r); 1 & r && (n = n.times(t)), r >>= 1;) t = t.times(t);
                    return i ? e.div(n) : n
                }, a.prec = function(r, t) {
                    if (r !== ~~r || r < 1 || r > s) throw Error(u + "precision");
                    return g(new this.constructor(this), r, t)
                }, a.round = function(r, t) {
                    if (r === p) r = 0;
                    else if (r !== ~~r || r < -s || r > s) throw Error(h);
                    return g(new this.constructor(this), r + this.e + 1, t)
                }, a.sqrt = function() {
                    var r, t, e, n = this,
                        i = n.constructor,
                        o = n.s,
                        s = n.e,
                        c = new i("0.5");
                    if (!n.c[0]) return new i(n);
                    if (o < 0) throw Error(f + "No square root");
                    0 === (o = Math.sqrt(n + "")) || o === 1 / 0 ? ((t = n.c.join("")).length + s & 1 || (t += "0"), s = ((s + 1) / 2 | 0) - (s < 0 || 1 & s), r = new i(((o = Math.sqrt(t)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s)) : r = new i(o + ""), s = r.e + (i.DP += 4);
                    do {
                        e = r, r = c.times(e.plus(n.div(e)))
                    } while (e.c.slice(0, s).join("") !== r.c.slice(0, s).join(""));
                    return g(r, (i.DP -= 4) + r.e + 1, i.RM)
                }, a.times = a.mul = function(r) {
                    var t, e = this,
                        n = e.constructor,
                        i = e.c,
                        o = (r = new n(r)).c,
                        s = i.length,
                        c = o.length,
                        f = e.e,
                        u = r.e;
                    if (r.s = e.s == r.s ? 1 : -1, !i[0] || !o[0]) return r.c = [r.e = 0], r;
                    for (r.e = f + u, s < c && (t = i, i = o, o = t, u = s, s = c, c = u), t = new Array(u = s + c); u--;) t[u] = 0;
                    for (f = c; f--;) {
                        for (c = 0, u = s + f; u > f;) c = t[u] + o[f] * i[u - f - 1] + c, t[u--] = c % 10, c = c / 10 | 0;
                        t[u] = c
                    }
                    for (c ? ++r.e : t.shift(), f = t.length; !t[--f];) t.pop();
                    return r.c = t, r
                }, a.toExponential = function(r, t) {
                    var e = this,
                        n = e.c[0];
                    if (r !== p) {
                        if (r !== ~~r || r < 0 || r > s) throw Error(h);
                        for (e = g(new e.constructor(e), ++r, t); e.c.length < r;) e.c.push(0)
                    }
                    return w(e, !0, !!n)
                }, a.toFixed = function(r, t) {
                    var e = this,
                        n = e.c[0];
                    if (r !== p) {
                        if (r !== ~~r || r < 0 || r > s) throw Error(h);
                        for (r = r + (e = g(new e.constructor(e), r + e.e + 1, t)).e + 1; e.c.length < r;) e.c.push(0)
                    }
                    return w(e, !1, !!n)
                }, a.toJSON = a.toString = function() {
                    var r = this,
                        t = r.constructor;
                    return w(r, r.e <= t.NE || r.e >= t.PE, !!r.c[0])
                }, a.toNumber = function() {
                    var r = Number(w(this, !0, !0));
                    if (!0 === this.constructor.strict && !this.eq(r.toString())) throw Error(f + "Imprecise conversion");
                    return r
                }, a.toPrecision = function(r, t) {
                    var e = this,
                        n = e.constructor,
                        i = e.c[0];
                    if (r !== p) {
                        if (r !== ~~r || r < 1 || r > s) throw Error(u + "precision");
                        for (e = g(new n(e), r, t); e.c.length < r;) e.c.push(0)
                    }
                    return w(e, r <= e.e || e.e <= n.NE || e.e >= n.PE, !!i)
                }, a.valueOf = function() {
                    var r = this,
                        t = r.constructor;
                    if (!0 === t.strict) throw Error(f + "valueOf disallowed");
                    return w(r, r.e <= t.NE || r.e >= t.PE, !0)
                }, o = function r() {
                    function t(e) {
                        var n = this;
                        if (!(n instanceof t)) return e === p ? r() : new t(e);
                        if (e instanceof t) n.s = e.s, n.e = e.e,
                            n.c = e.c.slice();
                        else {
                            if ("string" != typeof e) {
                                if (!0 === t.strict) throw TypeError(u + "number");
                                e = 0 === e && 1 / e < 0 ? "-0" : String(e)
                            }! function(r, t) {
                                var e, n, i;
                                if (!v.test(t)) throw Error(u + "number");
                                r.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (e = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                                (n = t.search(/e/i)) > 0 ? (e < 0 && (e = n), e += +t.slice(n + 1), t = t.substring(0, n)) : e < 0 && (e = t.length);
                                for (i = t.length, n = 0; n < i && "0" == t.charAt(n);) ++n;
                                if (n == i) r.c = [r.e = 0];
                                else {
                                    for (; i > 0 && "0" == t.charAt(--i););
                                    for (r.e = e - n - 1, r.c = [], e = 0; n <= i;) r.c[e++] = +t.charAt(n++)
                                }
                            }(n, e)
                        }
                        n.constructor = t
                    }
                    return t.prototype = a, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
                }(), o.default = o.Big = o, void 0 === (n = function() {
                    return o
                }.call(t, e, t, r)) || (r.exports = n)
            }()
        },
        497754: (r, t) => {
            var e;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var r = [], t = 0; t < arguments.length; t++) {
                        var e = arguments[t];
                        if (e) {
                            var o = typeof e;
                            if ("string" === o || "number" === o) r.push(e);
                            else if (Array.isArray(e) && e.length) {
                                var s = i.apply(null, e);
                                s && r.push(s)
                            } else if ("object" === o)
                                for (var c in e) n.call(e, c) && e[c] && r.push(c)
                        }
                    }
                    return r.join(" ")
                }
                r.exports ? (i.default = i, r.exports = i) : void 0 === (e = function() {
                    return i
                }.apply(t, [])) || (r.exports = e)
            }()
        },
        466281: (r, t, e) => {
            "use strict";
            var n = e(124829);
            const i = /{(\w+)}/g,
                o = /{(\d+)}/g;
            String.prototype.format = function(...r) {
                const t = (0, n.isObject)(r[0]),
                    e = t ? i : o,
                    s = t ? (t, e) => {
                        const n = r[0];
                        return void 0 !== n[e] ? n[e] : t
                    } : (t, e) => {
                        const n = parseInt(e, 10),
                            i = r[n];
                        return void 0 !== i ? i : t
                    };
                return this.replace(e, s)
            }
        }
    }
]);