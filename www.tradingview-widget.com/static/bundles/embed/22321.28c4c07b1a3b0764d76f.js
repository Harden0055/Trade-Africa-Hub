(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [22321], {
        573034: (e, n, t) => {
            "use strict";
            t.d(n, {
                disableActivityTracking: () => Se,
                disableAnonymousTracking: () => Ce,
                discardBrace: () => ke,
                enableActivityTrackingCallback: () => xe,
                enableAnonymousTracking: () => Oe,
                newTracker: () => Ee,
                setUserId: () => Te,
                trackPageView: () => Ae,
                trackSelfDescribingEvent: () => Ie
            });
            var r = function() {
                return r = Object.assign || function(e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                        for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.create;

            function o(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
                return e.concat(r || Array.prototype.slice.call(n))
            }
            Object.create;
            var i = t(892674);

            function a(e) {
                if (!e) return e;
                switch (4 - e.length % 4) {
                    case 2:
                        e += "==";
                        break;
                    case 3:
                        e += "="
                }
                return function(e) {
                    var n, t, r, o, i, a, u = function(e) {
                            return decodeURIComponent(e.split("").map((function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join(""))
                        },
                        s = 0,
                        l = 0,
                        f = "",
                        d = [];
                    if (!e) return e;
                    e += "";
                    do {
                        n = (a = c.indexOf(e.charAt(s++)) << 18 | c.indexOf(e.charAt(s++)) << 12 | (o = c.indexOf(e.charAt(s++))) << 6 | (i = c.indexOf(e.charAt(s++)))) >> 16 & 255, t = a >> 8 & 255, r = 255 & a, d[l++] = 64 === o ? String.fromCharCode(n) : 64 === i ? String.fromCharCode(n, t) : String.fromCharCode(n, t, r)
                    } while (s < e.length);
                    return f = d.join(""), u(f.replace(/\0+$/, ""))
                }(e.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function u(e) {
                if (!e) return e;
                var n = function(e) {
                    var n, t, r, o, i, a = 0,
                        u = 0,
                        s = [];
                    if (!e) return e;
                    e = unescape(encodeURIComponent(e));
                    do {
                        n = (i = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, t = i >> 12 & 63, r = i >> 6 & 63, o = 63 & i, s[u++] = c.charAt(n) + c.charAt(t) + c.charAt(r) + c.charAt(o)
                    } while (a < e.length);
                    var l = s.join(""),
                        f = e.length % 3;
                    return (f ? l.slice(0, f - 3) : l) + "===".slice(f || 3)
                }(e);
                return n.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            function s() {
                var e, n = {},
                    t = [],
                    r = [],
                    o = [],
                    i = function(e, t) {
                        null != t && "" !== t && (n[e] = t)
                    };
                return {
                    add: i,
                    addDict: function(e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i(n, e[n])
                    },
                    addJson: function(e, n, o) {
                        if (o && f(o)) {
                            var i = {
                                keyIfEncoded: e,
                                keyIfNotEncoded: n,
                                json: o
                            };
                            r.push(i), t.push(i)
                        }
                    },
                    addContextEntity: function(e) {
                        o.push(e)
                    },
                    getPayload: function() {
                        return n
                    },
                    getJson: function() {
                        return t
                    },
                    withJsonProcessor: function(n) {
                        e = n
                    },
                    build: function() {
                        return null == e || e(this, r, o), n
                    }
                }
            }

            function l(e) {
                return function(n, t, r) {
                    for (var i = function(t, r, o) {
                            var i = JSON.stringify(t);
                            e ? n.add(r, u(i)) : n.add(o, i)
                        }, c = function(t, r) {
                            var o = t || function() {
                                var t = n.getPayload();
                                if (e ? t.cx : t.co) return JSON.parse(e ? a(t.cx) : t.co)
                            }();
                            return o ? o.data = o.data.concat(r.data) : o = r, o
                        }, s = void 0, l = 0, f = t; l < f.length; l++) {
                        var d = f[l];
                        "cx" === d.keyIfEncoded ? s = c(s, d.json) : i(d.json, d.keyIfEncoded, d.keyIfNotEncoded)
                    }(t.length = 0, r.length) && (s = c(s, {
                        schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                        data: o([], r, !0)
                    }), r.length = 0);
                    s && i(s, "cx", "co")
                }
            }

            function f(e) {
                if (!d(e)) return !1;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) return !0;
                return !1
            }

            function d(e) {
                return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
            }
            var v, g = "Snowplow: ";
            ! function(e) {
                e[e.none = 0] = "none", e[e.error = 1] = "error", e[e.warn = 2] = "warn", e[e.debug = 3] = "debug", e[e.info = 4] = "info"
            }(v || (v = {}));
            var p = function(e) {
                void 0 === e && (e = v.warn);
                return {
                    setLogLevel: function(n) {
                        e = v[n] ? n : v.warn
                    },
                    warn: function(n, t) {
                        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                        if (e >= v.warn && "undefined" != typeof console) {
                            var a = g + n;
                            t ? console.warn.apply(console, o([a + "\n", t], r, !1)) : console.warn.apply(console, o([a], r, !1))
                        }
                    },
                    error: function(n, t) {
                        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                        if (e >= v.error && "undefined" != typeof console) {
                            var a = g + n + "\n";
                            t ? console.error.apply(console, o([a + "\n", t], r, !1)) : console.error.apply(console, o([a], r, !1))
                        }
                    },
                    debug: function(n) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        e >= v.debug && "undefined" != typeof console && console.debug.apply(console, o([g + n], t, !1))
                    },
                    info: function(n) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        e >= v.info && "undefined" != typeof console && console.info.apply(console, o([g + n], t, !1))
                    }
                }
            }();

            function m() {
                var e = [],
                    n = [],
                    t = function(t) {
                        var r = function(e) {
                                for (var n = e.getJson(), t = 0, r = n; t < r.length; t++) {
                                    var o = r[t];
                                    if ("ue_px" === o.keyIfEncoded && "object" == typeof o.json.data) {
                                        var i = o.json.data.schema;
                                        if ("string" == typeof i) return i
                                    }
                                }
                                return ""
                            }(t),
                            o = function(e) {
                                var n = e.getPayload().e;
                                return "string" == typeof n ? n : ""
                            }(t),
                            i = [],
                            a = E(e, t, o, r);
                        i.push.apply(i, a);
                        var u = function(e, n, t, r) {
                            var o, i = P(e),
                                a = function(e) {
                                    var o = function(e, n, t, r) {
                                        if (T(e)) {
                                            var o = e[0],
                                                i = !1;
                                            try {
                                                i = o({
                                                    event: n.getPayload(),
                                                    eventType: t,
                                                    eventSchema: r
                                                })
                                            } catch (e) {
                                                i = !1
                                            }
                                            if (!0 === i) return E(e[1], n, t, r)
                                        } else if (A(e) && function(e, n) {
                                                var t = 0,
                                                    r = 0,
                                                    o = e.accept;
                                                Array.isArray(o) ? e.accept.some((function(e) {
                                                    return C(e, n)
                                                })) && r++ : "string" == typeof o && C(o, n) && r++;
                                                var i = e.reject;
                                                Array.isArray(i) ? e.reject.some((function(e) {
                                                    return C(e, n)
                                                })) && t++ : "string" == typeof i && C(i, n) && t++;
                                                if (r > 0 && 0 === t) return !0;
                                                if (0 === r && t > 0) return !1;
                                                return !1
                                            }(e[0], r)) return E(e[1], n, t, r);
                                        return []
                                    }(e, n, t, r);
                                    if (o && 0 !== o.length) return o
                                },
                                u = i.map(a);
                            return (o = []).concat.apply(o, u.filter((function(e) {
                                return null != e && e.filter(Boolean)
                            })))
                        }(n, t, o, r);
                        return i.push.apply(i, u), i
                    };
                return {
                    getGlobalPrimitives: function() {
                        return e
                    },
                    getConditionalProviders: function() {
                        return n
                    },
                    addGlobalContexts: function(t) {
                        for (var r = [], o = [], i = 0, a = t; i < a.length; i++) {
                            var u = a[i];
                            I(u) ? r.push(u) : S(u) && o.push(u)
                        }
                        e = e.concat(o), n = n.concat(r)
                    },
                    clearGlobalContexts: function() {
                        n = [], e = []
                    },
                    removeGlobalContexts: function(t) {
                        for (var r = function(t) {
                                I(t) ? n = n.filter((function(e) {
                                    return JSON.stringify(e) !== JSON.stringify(t)
                                })) : S(t) && (e = e.filter((function(e) {
                                    return JSON.stringify(e) !== JSON.stringify(t)
                                })))
                            }, o = 0, i = t; o < i.length; o++) {
                            r(i[o])
                        }
                    },
                    getApplicableContexts: function(e) {
                        return t(e)
                    }
                }
            }

            function h(e) {
                var n = e.split(".");
                return !!(n && n.length > 1) && function(e) {
                    if ("*" === e[0] || "*" === e[1]) return !1;
                    if (e.slice(2).length > 0) {
                        for (var n = !1, t = 0, r = e.slice(2); t < r.length; t++)
                            if ("*" === r[t]) n = !0;
                            else if (n) return !1;
                        return !0
                    }
                    return 2 == e.length
                }(n)
            }

            function y(e) {
                var n = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$").exec(e);
                if (null !== n && h(n[1])) return n.slice(1, 6)
            }

            function w(e) {
                var n = y(e);
                if (n) {
                    var t = n[0];
                    return 5 === n.length && h(t)
                }
                return !1
            }

            function b(e) {
                return function(e) {
                    return Array.isArray(e) && e.every((function(e) {
                        return "string" == typeof e
                    }))
                }(e) ? e.every((function(e) {
                    return w(e)
                })) : "string" == typeof e && w(e)
            }

            function k(e) {
                var n = e;
                return !!(f(n) && "schema" in n && "data" in n) && ("string" == typeof n.schema && "object" == typeof n.data)
            }

            function x(e) {
                return "function" == typeof e && e.length <= 1
            }

            function S(e) {
                return x(e) || k(e)
            }

            function T(e) {
                return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? x(e[0]) && e[1].every(S) : x(e[0]) && S(e[1]))
            }

            function A(e) {
                return !(!Array.isArray(e) || 2 !== e.length) && (!! function(e) {
                    var n = e,
                        t = 0;
                    if (null != e && "object" == typeof e && !Array.isArray(e)) {
                        if (Object.prototype.hasOwnProperty.call(n, "accept")) {
                            if (!b(n.accept)) return !1;
                            t += 1
                        }
                        if (Object.prototype.hasOwnProperty.call(n, "reject")) {
                            if (!b(n.reject)) return !1;
                            t += 1
                        }
                        return t > 0 && t <= 2
                    }
                    return !1
                }(e[0]) && (Array.isArray(e[1]) ? e[1].every(S) : S(e[1])))
            }

            function I(e) {
                return T(e) || A(e)
            }

            function C(e, n) {
                if (!w(e)) return !1;
                var t = y(e),
                    r = function(e) {
                        var n = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$").exec(e);
                        if (null !== n) return n.slice(1, 6)
                    }(n);
                if (t && r) {
                    if (! function(e, n) {
                            var t = n.split("."),
                                r = e.split(".");
                            if (t && r) {
                                if (t.length !== r.length) return !1;
                                for (var o = 0; o < r.length; o++)
                                    if (!O(t[o], r[o])) return !1;
                                return !0
                            }
                            return !1
                        }(t[0], r[0])) return !1;
                    for (var o = 1; o < 5; o++)
                        if (!O(t[o], r[o])) return !1;
                    return !0
                }
                return !1
            }

            function O(e, n) {
                return e && n && "*" === e || e === n
            }

            function P(e) {
                return Array.isArray(e) ? e : Array.of(e)
            }

            function E(e, n, t, r) {
                var o, i = P(e).map((function(e) {
                    var o = function(e, n, t, r) {
                        if (k(e)) return [e];
                        if (x(e)) {
                            var o = function(e, n, t, r) {
                                var o = void 0;
                                try {
                                    return o = e({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: r
                                    }), Array.isArray(o) && o.every(k) || k(o) ? o : void 0
                                } catch (e) {
                                    o = void 0
                                }
                                return o
                            }(e, n, t, r);
                            if (k(o)) return [o];
                            if (Array.isArray(o)) return o
                        }
                        return
                    }(e, n, t, r);
                    if (o && 0 !== o.length) return o
                }));
                return (o = []).concat.apply(o, i.filter((function(e) {
                    return null != e && e.filter(Boolean)
                })))
            }

            function L(e) {
                void 0 === e && (e = {});
                var n = e.base64,
                    t = e.corePlugins,
                    a = e.callback,
                    u = null != t ? t : [],
                    c = function(e, n, t) {
                        var r = function(e) {
                                return {
                                    addPluginContexts: function(n) {
                                        var t = n ? o([], n, !0) : [];
                                        return e.forEach((function(e) {
                                            try {
                                                e.contexts && t.push.apply(t, e.contexts())
                                            } catch (e) {
                                                p.error("Error adding plugin contexts", e)
                                            }
                                        })), t
                                    }
                                }
                            }(n),
                            a = m(),
                            u = e,
                            c = {};

                        function s(e, n) {
                            c[e] = n
                        }
                        var f = {
                            track: function(e, o, s) {
                                e.withJsonProcessor(l(u)), e.add("eid", (0, i.v4)()), e.addDict(c);
                                var f = function(e) {
                                    return null == e ? {
                                        type: "dtm",
                                        value: (new Date).getTime()
                                    } : "number" == typeof e ? {
                                        type: "dtm",
                                        value: e
                                    } : "ttm" === e.type ? {
                                        type: "ttm",
                                        value: e.value
                                    } : {
                                        type: "dtm",
                                        value: e.value || (new Date).getTime()
                                    }
                                }(s);
                                e.add(f.type, f.value.toString());
                                var d = function(e, n) {
                                        var t = a.getApplicableContexts(e),
                                            r = [];
                                        return n && n.length && r.push.apply(r, n), t && t.length && r.push.apply(r, t), r
                                    }(e, r.addPluginContexts(o)),
                                    v = function(e) {
                                        if (e && e.length) return {
                                            schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                                            data: e
                                        }
                                    }(d);
                                void 0 !== v && e.addJson("cx", "co", v), n.forEach((function(n) {
                                    try {
                                        n.beforeTrack && n.beforeTrack(e)
                                    } catch (e) {
                                        p.error("Plugin beforeTrack", e)
                                    }
                                })), "function" == typeof t && t(e);
                                var g = e.build();
                                return n.forEach((function(e) {
                                    try {
                                        e.afterTrack && e.afterTrack(g)
                                    } catch (e) {
                                        p.error("Plugin afterTrack", e)
                                    }
                                })), g
                            },
                            addPayloadPair: s,
                            getBase64Encoding: function() {
                                return u
                            },
                            setBase64Encoding: function(e) {
                                u = e
                            },
                            addPayloadDict: function(e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (c[n] = e[n])
                            },
                            resetPayloadPairs: function(e) {
                                c = d(e) ? e : {}
                            },
                            setTrackerVersion: function(e) {
                                s("tv", e)
                            },
                            setTrackerNamespace: function(e) {
                                s("tna", e)
                            },
                            setAppId: function(e) {
                                s("aid", e)
                            },
                            setPlatform: function(e) {
                                s("p", e)
                            },
                            setUserId: function(e) {
                                s("uid", e)
                            },
                            setScreenResolution: function(e, n) {
                                s("res", e + "x" + n)
                            },
                            setViewport: function(e, n) {
                                s("vp", e + "x" + n)
                            },
                            setColorDepth: function(e) {
                                s("cd", e)
                            },
                            setTimezone: function(e) {
                                s("tz", e)
                            },
                            setLang: function(e) {
                                s("lang", e)
                            },
                            setIpAddress: function(e) {
                                s("ip", e)
                            },
                            setUseragent: function(e) {
                                s("ua", e)
                            },
                            addGlobalContexts: function(e) {
                                a.addGlobalContexts(e)
                            },
                            clearGlobalContexts: function() {
                                a.clearGlobalContexts()
                            },
                            removeGlobalContexts: function(e) {
                                a.removeGlobalContexts(e)
                            }
                        };
                        return f
                    }(null == n || n, u, a),
                    s = r(r({}, c), {
                        addPlugin: function(e) {
                            var n, t, r = e.plugin;
                            u.push(r), null === (n = r.logger) || void 0 === n || n.call(r, p), null === (t = r.activateCorePlugin) || void 0 === t || t.call(r, s)
                        }
                    });
                return null == u || u.forEach((function(e) {
                    var n, t;
                    null === (n = e.logger) || void 0 === n || n.call(e, p), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, s)
                })), s
            }

            function D(e) {
                var n = e.event,
                    t = n.schema,
                    r = n.data,
                    o = s(),
                    i = {
                        schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                        data: {
                            schema: t,
                            data: r
                        }
                    };
                return o.add("e", "ue"), o.addJson("ue_px", "ue_pr", i), o
            }
            var U = t(258101),
                j = t.n(U);

            function R(e, n, t) {
                void 0 === t && (t = 63072e3);
                try {
                    var r = window.localStorage,
                        o = Date.now() + 1e3 * t;
                    return r.setItem("".concat(e, ".expires"), o.toString()), r.setItem(e, n), !0
                } catch (e) {
                    return !1
                }
            }

            function B(e) {
                try {
                    var n = window.localStorage;
                    return n.removeItem(e), n.removeItem(e + ".expires"), !0
                } catch (e) {
                    return !1
                }
            }

            function N(e) {
                try {
                    return window.sessionStorage.getItem(e)
                } catch (e) {
                    return
                }
            }
            var _ = {
                sessionId: !0,
                sourceId: !0,
                sourcePlatform: !1,
                userId: !1,
                reason: !1
            };

            function V(e) {
                return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
            }

            function M(e) {
                return !(!e || "string" != typeof e.valueOf())
            }

            function z(e) {
                return Number.isInteger && Number.isInteger(e) || "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }

            function H(e) {
                if (!M(e)) {
                    e = e.text || "";
                    var n = document.getElementsByTagName("title");
                    n && null != n[0] && (e = n[0].text)
                }
                return e
            }

            function J(e) {
                var n = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
                return n ? n[1] : e
            }

            function q(e) {
                var n = e.length;
                return "." === e.charAt(--n) && (e = e.slice(0, n)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
            }

            function F(e) {
                var n = window,
                    t = X("referrer", n.location.href) || X("referer", n.location.href);
                if (t) return t;
                if (e) return e;
                try {
                    if (n.top) return n.top.document.referrer;
                    if (n.parent) return n.parent.document.referrer
                } catch (e) {}
                return document.referrer
            }

            function G(e, n, t, r) {
                return e.addEventListener ? (e.addEventListener(n, t, r), !0) : e.attachEvent ? e.attachEvent("on" + n, t) : void(e["on" + n] = t)
            }

            function X(e, n) {
                var t = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(n);
                return t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : null
            }

            function W(e, n, t, r) {
                Q(e, "", -1, "/", n, t, r)
            }

            function Y(e) {
                for (var n = document.cookie.split("; "), t = [], r = 0; r < n.length; r++) n[r].substring(0, e.length) === e && t.push(n[r]);
                return t
            }

            function Q(e, n, t, r, o, i, a) {
                return arguments.length > 1 ? document.cookie = e + "=" + encodeURIComponent(null != n ? n : "") + (t ? "; Expires=" + new Date(+new Date + 1e3 * t).toUTCString() : "") + (r ? "; Path=" + r : "") + (o ? "; Domain=" + o : "") + (i ? "; SameSite=" + i : "") + (a ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
            }

            function Z() {
                var e = "modernizr";
                if (! function() {
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            return !0
                        }
                    }()) return !1;
                try {
                    var n = window.localStorage;
                    return n.setItem(e, e), n.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }
            var K = "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                $ = "iglu:com.snowplowanalytics.snowplow/browser_context/jsonschema/2-0-0",
                ee = "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2";

            function ne(e, n, t, r, o, i, a, u, c, s, l, f, d, v, g, m, h, y, w, b) {
                void 0 === y && (y = !0);
                var k, x, S = !1,
                    T = [],
                    A = !1,
                    I = !0 === (r = "string" == typeof r ? r.toLowerCase() : r) || "beacon" === r || "true" === r,
                    C = Boolean(I && window.navigator && "function" == typeof window.navigator.sendBeacon && !(function(e, n) {
                        var t = n.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/");
                        return !(!t || !t.length) && parseInt(t[0]) <= e
                    }(13, x = window.navigator.userAgent) || function(e, n, t) {
                        var r = t.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/");
                        return !(!r || !r.length) && (parseInt(r[0]) <= e || parseInt(r[0]) === e && parseInt(r[1]) <= n)
                    }(10, 15, x) && function(e) {
                        return e.match("Version/.* Safari/") && ! function(e) {
                            return e.match("Chrom(e|ium)")
                        }(e)
                    }(x))) && I,
                    O = "get" === r,
                    P = Boolean(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                    E = !O && P && ("post" === r || I),
                    L = E ? o : "/i",
                    D = "snowplowOutQueue_".concat(e, "_").concat(E ? "post2" : "get");
                if (I && (d = {}), i = t && Z() && E && i || 1, t) try {
                    var U = window.localStorage.getItem(D);
                    T = U ? JSON.parse(U) : []
                } catch (e) {}

                function j(e) {
                    var n = Object.keys(e).map((function(n) {
                        return [n, e[n]]
                    })).reduce((function(e, n) {
                        var t = n[0],
                            r = n[1];
                        return e[t] = r.toString(), e
                    }), {});
                    return {
                        evt: n,
                        bytes: B(JSON.stringify(n))
                    }
                }

                function B(e) {
                    for (var n = 0, t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        r <= 127 ? n += 1 : r <= 2047 ? n += 2 : r >= 55296 && r <= 57343 ? (n += 4, t++) : n += r < 65535 ? 3 : 4
                    }
                    return n
                }
                Array.isArray(T) || (T = []), n.outQueues.push(T), P && i > 1 && n.bufferFlushers.push((function(e) {
                    S || H(e)
                }));
                var N = function(e) {
                    return "object" == typeof e[0] && "evt" in e[0]
                };

                function _(e, n) {
                    var t = q(n, !0, !1),
                        r = G([e.evt]);
                    t.onreadystatechange = function() {
                            4 === t.readyState && (J(t.status) ? null == w || w(r) : null == b || b({
                                status: t.status,
                                message: t.statusText,
                                events: r,
                                willRetry: !1
                            }))
                        },
                        t.send(F(r))
                }

                function V(e) {
                    for (var n = 0; n < e; n++) T.shift();
                    t && R(D, JSON.stringify(T.slice(0, s)))
                }

                function z(e, n, t) {
                    e.onreadystatechange = function() {
                        if (4 === e.readyState)
                            if (clearTimeout(r), J(e.status)) V(n), null == w || w(t), H();
                            else {
                                var o = function(e) {
                                    if (J(e)) return !1;
                                    if (!y) return !1;
                                    if (g.includes(e)) return !0;
                                    return !m.includes(e)
                                }(e.status);
                                o || (p.error("Status ".concat(e.status, ", will not retry.")), V(n)), null == b || b({
                                    status: e.status,
                                    message: e.statusText,
                                    events: t,
                                    willRetry: o
                                }), S = !1
                            }
                    };
                    var r = setTimeout((function() {
                        e.abort(), y || V(n), null == b || b({
                            status: 0,
                            message: "timeout",
                            events: t,
                            willRetry: y
                        }), S = !1
                    }), l)
                }

                function H(e) {
                    for (void 0 === e && (e = !1); T.length && "string" != typeof T[0] && "object" != typeof T[0];) T.shift();
                    if (T.length) {
                        if (!M(k)) throw "No collector configured";
                        if (S = !0, h && !A) {
                            var n = q(h, !1, e);
                            return A = !0, n.timeout = l, n.onreadystatechange = function() {
                                4 === n.readyState && H()
                            }, void n.send()
                        }
                        if (P) {
                            var r = void 0,
                                o = void 0,
                                i = void 0;
                            if (N(T) ? (o = q(r = k, !0, e), i = function(e) {
                                    for (var n = 0, t = 0; n < e.length && !((t += e[n].bytes) >= a);) n += 1;
                                    return n
                                }(T)) : (o = q(r = X(T[0]), !1, e), i = 1), N(T)) {
                                var u = T.slice(0, i);
                                if (u.length > 0) {
                                    var c = !1,
                                        d = u.map((function(e) {
                                            return e.evt
                                        }));
                                    if (C) {
                                        var v = new Blob([F(G(d))], {
                                            type: "application/json"
                                        });
                                        try {
                                            c = window.navigator.sendBeacon(r, v)
                                        } catch (e) {
                                            c = !1
                                        }
                                    }
                                    if (!0 === c) V(i), null == w || w(u), H();
                                    else {
                                        var g = G(d);
                                        z(o, i, g), o.send(F(g))
                                    }
                                }
                            } else z(o, i, [r]), o.send()
                        } else if (f || N(T)) S = !1;
                        else {
                            var p = new Image(1, 1),
                                m = !0;
                            p.onload = function() {
                                m && (m = !1, T.shift(), t && R(D, JSON.stringify(T.slice(0, s))), H())
                            }, p.onerror = function() {
                                m && (m = !1, S = !1)
                            }, p.src = X(T[0]), setTimeout((function() {
                                m && S && (m = !1, H())
                            }), l)
                        }
                    } else S = !1
                }

                function J(e) {
                    return e >= 200 && e < 300
                }

                function q(e, n, t) {
                    var r = new XMLHttpRequest;
                    for (var o in n ? (r.open("POST", e, !t), r.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : r.open("GET", e, !t), r.withCredentials = v, f && r.setRequestHeader("SP-Anonymous", "*"), d) Object.prototype.hasOwnProperty.call(d, o) && r.setRequestHeader(o, d[o]);
                    return r
                }

                function F(e) {
                    return JSON.stringify({
                        schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                        data: e
                    })
                }

                function G(e) {
                    for (var n = (new Date).getTime().toString(), t = 0; t < e.length; t++) e[t].stm = n;
                    return e
                }

                function X(e) {
                    return c ? k + e.replace("?", "?stm=" + (new Date).getTime() + "&") : k + e
                }
                return {
                    enqueueRequest: function(e, n) {
                        k = n + L;
                        var r = function(e, n) {
                            return p.warn("Event (" + e + "B) too big, max is " + n)
                        };
                        if (E) {
                            if ((f = j(e)).bytes >= a) return r(f.bytes, a), void _(f, k);
                            T.push(f)
                        } else {
                            var c = function(e) {
                                var n = "?",
                                    t = {
                                        co: !0,
                                        cx: !0
                                    },
                                    r = !0;
                                for (var o in e) e.hasOwnProperty(o) && !t.hasOwnProperty(o) && (r ? r = !1 : n += "&", n += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                                for (var i in t) e.hasOwnProperty(i) && t.hasOwnProperty(i) && (n += "&" + i + "=" + encodeURIComponent(e[i]));
                                return n
                            }(e);
                            if (u > 0) {
                                var l = B(X(c));
                                if (l >= u) {
                                    var f;
                                    if (r(l, u), P) _(f = j(e), n + o);
                                    return
                                }
                            }
                            T.push(c)
                        }
                        var d = !1;
                        t && (d = R(D, JSON.stringify(T.slice(0, s)))), S || d && !(T.length >= i) || H()
                    },
                    executeQueue: function() {
                        S || H()
                    },
                    setUseLocalStorage: function(e) {
                        t = e
                    },
                    setAnonymousTracking: function(e) {
                        f = e
                    },
                    setCollectorUrl: function(e) {
                        k = e + L
                    },
                    setBufferSize: function(e) {
                        i = e
                    }
                }
            }

            function te(e, n, t) {
                var r, o, i, a;
                return "translate.googleusercontent.com" === e ? ("" === t && (t = n), e = J(n = null !== (o = n, i = "u", r = (a = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(o)) && (null == a ? void 0 : a.length) > 1 ? X(i, a[1]) : null) && void 0 !== r ? r : "")) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e || (e = J(n = document.links[0].href)), [e, n, t]
            }

            function re(e, n) {
                void 0 === n && (n = {
                    memorizedVisitCount: 1
                });
                var t = n.memorizedVisitCount;
                ce(e) ? (e[7] = e[6], e[5] = e[4], e[3]++) : e[3] = t;
                var r = (0, i.v4)();
                return e[6] = r, e[10] = 0, e[8] = "", e[9] = void 0, r
            }

            function oe(e) {
                e[4] = Math.round((new Date).getTime() / 1e3)
            }

            function ie(e, n, t) {
                var r = e[9];
                return {
                    userId: t ? "00000000-0000-0000-0000-000000000000" : e[1],
                    sessionId: e[6],
                    eventIndex: e[10],
                    sessionIndex: e[3],
                    previousSessionId: t ? null : e[7] || null,
                    storageMechanism: "localStorage" == n ? "LOCAL_STORAGE" : "COOKIE_1",
                    firstEventId: e[8] || null,
                    firstEventTimestamp: r ? new Date(r).toISOString() : null
                }
            }

            function ae(e) {
                return e[6]
            }

            function ue(e) {
                return e[3]
            }

            function ce(e) {
                return "0" === e[0]
            }
            var se, le = !1;
            var fe = "x";

            function de() {
                return "ResizeObserver" in window ? (se || (se = ve()), function() {
                    if (!le && document && document.body && document.documentElement) {
                        le = !0;
                        var e = new ResizeObserver((function(e) {
                            for (var n = 0, t = e; n < t.length; n++) {
                                var r = t[n];
                                r.target !== document.body && r.target !== document.documentElement || (se = ve())
                            }
                        }));
                        e.observe(document.body), e.observe(document.documentElement)
                    }
                }(), se) : ve()
            }

            function ve() {
                return {
                    viewport: pe(ge()),
                    documentSize: pe((e = document.documentElement, n = document.body, t = n ? Math.max(n.offsetHeight, n.scrollHeight) : 0, r = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth), o = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, t), isNaN(r) || isNaN(o) ? "" : r + fe + o)),
                    resolution: pe(screen.width + fe + screen.height),
                    colorDepth: screen.colorDepth,
                    devicePixelRatio: window.devicePixelRatio,
                    cookiesEnabled: window.navigator.cookieEnabled,
                    online: window.navigator.onLine,
                    browserLanguage: window.navigator.language || window.navigator.userLanguage,
                    documentLanguage: document.documentElement.lang,
                    webdriver: window.navigator.webdriver,
                    deviceMemory: window.navigator.deviceMemory,
                    hardwareConcurrency: window.navigator.hardwareConcurrency
                };
                var e, n, t, r, o
            }

            function ge() {
                var e, n;
                if ("innerWidth" in window) e = window.innerWidth, n = window.innerHeight;
                else {
                    var t = document.documentElement || document.body;
                    e = t.clientWidth, n = t.clientHeight
                }
                return e >= 0 && n >= 0 ? e + fe + n : null
            }

            function pe(e) {
                return e && e.split(fe).map((function(e) {
                    return Math.floor(Number(e))
                })).join(fe)
            }

            function me(e, n, t, a, u, c) {
                void 0 === c && (c = {});
                var l = [],
                    f = function(e, n, t, a, u, c) {
                        var f, d, v, g, m, h, y, w, b, k, x, S, T, A, I, C, O, P, E, D, U, M, Z, se, le, fe, ve, ge, pe;
                        c.eventMethod = null !== (f = c.eventMethod) && void 0 !== f ? f : "post";
                        var me, he, ye = function(e) {
                                var n;
                                return null !== (n = e.stateStorageStrategy) && void 0 !== n ? n : "cookieAndLocalStorage"
                            },
                            we = function(e) {
                                var n, t;
                                return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withSessionTracking)) && void 0 !== t && t)
                            },
                            be = function(e) {
                                var n, t;
                                return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withServerAnonymisation)) && void 0 !== t && t)
                            },
                            ke = function(e) {
                                return !!e.anonymousTracking
                            },
                            xe = null !== (v = null === (d = null == c ? void 0 : c.contexts) || void 0 === d ? void 0 : d.browser) && void 0 !== v && v,
                            Se = null === (m = null === (g = null == c ? void 0 : c.contexts) || void 0 === g ? void 0 : g.webPage) || void 0 === m || m;
                        l.push((me = function(e) {
                            return fn ? null : e
                        }, he = function(e) {
                            return sn ? e : me(e)
                        }, {
                            beforeTrack: function(e) {
                                var n = Nn("ses"),
                                    t = Qn(),
                                    r = 0 === function(e) {
                                        return e[10]
                                    }(t);
                                if (Ve = !!Pe && !!Q(Pe), an || Ve) Xn();
                                else {
                                    ce(t) ? (Ne = n || "none" == dn ? ae(t) : re(t), gn = ue(t)) : (new Date).getTime() - vn > 1e3 * cn && (gn++, Ne = re(t, {
                                            memorizedVisitCount: gn
                                        })), oe(t),
                                        function(e, n) {
                                            if (0 === e[10]) {
                                                var t = n.build();
                                                e[8] = t.eid;
                                                var r = t.dtm || t.ttm;
                                                e[9] = r ? parseInt(r) : void 0
                                            }
                                        }(t, e),
                                        function(e) {
                                            e[10] += 1
                                        }(t);
                                    var o = de(),
                                        i = o.viewport,
                                        a = o.documentSize;
                                    e.add("vp", i), e.add("ds", a), e.add("vid", he(gn)), e.add("sid", he(Ne)), e.add("duid", me(function(e) {
                                        return e[1]
                                    }(t))), e.add("uid", me(_e)), Ln(), e.add("refr", jn(Te || Ge)), e.add("url", jn(Ae || Fe));
                                    var u = ie(t, dn, fn);
                                    if (!bn || fn && !sn || function(e, n) {
                                            var t = {
                                                schema: ee,
                                                data: n
                                            };
                                            e.addContextEntity(t)
                                        }(e, u), "none" != dn) {
                                        Fn(t);
                                        var c = qn();
                                        n && !r || !c || !kn || xn || (kn(u), xn = !1)
                                    }
                                    vn = (new Date).getTime()
                                }
                            }
                        })), Se && l.push({
                            contexts: function() {
                                return [{
                                    schema: K,
                                    data: {
                                        id: $n()
                                    }
                                }]
                            }
                        }), xe && l.push({
                            contexts: function() {
                                return [{
                                    schema: $,
                                    data: r(r({}, de()), {
                                        tabId: et()
                                    })
                                }]
                            }
                        }), l.push.apply(l, null !== (h = c.plugins) && void 0 !== h ? h : []);
                        var Te, Ae, Ie, Ce, Oe, Pe, Ee, Le, De, Ue, je, Re, Be, Ne, _e, Ve, Me, ze = L({
                                base64: c.encodeBase64,
                                corePlugins: l,
                                callback: function(e) {
                                    an || Ve || pn.enqueueRequest(e.build(), We)
                                }
                            }),
                            He = document.characterSet || document.charset,
                            Je = te(window.location.hostname, window.location.href, F()),
                            qe = q(Je[0]),
                            Fe = Je[1],
                            Ge = Je[2],
                            Xe = null !== (y = c.platform) && void 0 !== y ? y : "web",
                            We = Zn(a),
                            Ye = null !== (w = c.postPath) && void 0 !== w ? w : "/com.snowplowanalytics.snowplow/tp2",
                            Qe = null !== (b = c.appId) && void 0 !== b ? b : "",
                            Ze = document.title,
                            Ke = null === (k = c.resetActivityTrackingOnPageView) || void 0 === k || k,
                            $e = null !== (x = c.cookieName) && void 0 !== x ? x : "_sp_",
                            en = null !== (S = c.cookieDomain) && void 0 !== S ? S : void 0,
                            nn = "/",
                            tn = null !== (T = c.cookieSameSite) && void 0 !== T ? T : "None",
                            rn = null === (A = c.cookieSecure) || void 0 === A || A,
                            on = window.navigator.doNotTrack || window.navigator.msDoNotTrack || window.doNotTrack,
                            an = void 0 !== c.respectDoNotTrack && (c.respectDoNotTrack && ("yes" === on || "1" === on)),
                            un = null !== (I = c.cookieLifetime) && void 0 !== I ? I : 63072e3,
                            cn = null !== (C = c.sessionCookieTimeout) && void 0 !== C ? C : 1800,
                            sn = we(c),
                            ln = be(c),
                            fn = ke(c),
                            dn = ye(c),
                            vn = (new Date).getTime(),
                            gn = 1,
                            pn = ne(e, u, "localStorage" == dn || "cookieAndLocalStorage" == dn, c.eventMethod, Ye, null !== (O = c.bufferSize) && void 0 !== O ? O : 1, null !== (P = c.maxPostBytes) && void 0 !== P ? P : 4e4, null !== (E = c.maxGetBytes) && void 0 !== E ? E : 0, null === (D = c.useStm) || void 0 === D || D, null !== (U = c.maxLocalStorageQueueSize) && void 0 !== U ? U : 1e3, null !== (M = c.connectionTimeout) && void 0 !== M ? M : 5e3, ln, null !== (Z = c.customHeaders) && void 0 !== Z ? Z : {}, null === (se = c.withCredentials) || void 0 === se || se, null !== (le = c.retryStatusCodes) && void 0 !== le ? le : [], (null !== (fe = c.dontRetryStatusCodes) && void 0 !== fe ? fe : []).concat([400, 401, 403, 410, 422]), c.idService, c.retryFailedRequests, c.onRequestSuccess, c.onRequestFailure),
                            mn = !1,
                            hn = null !== (ve = c.preservePageViewIdForUrl) && void 0 !== ve && ve,
                            yn = void 0,
                            wn = {
                                enabled: !1,
                                installed: !1,
                                configurations: {}
                            },
                            bn = null !== (pe = null === (ge = c.contexts) || void 0 === ge ? void 0 : ge.session) && void 0 !== pe && pe,
                            kn = c.onSessionUpdateCallback,
                            xn = !1,
                            Sn = "boolean" == typeof(Me = c.useExtendedCrossDomainLinker || !1) ? {
                                useExtendedCrossDomainLinker: Me
                            } : {
                                useExtendedCrossDomainLinker: !0,
                                collectCrossDomainAttributes: Me
                            },
                            Tn = Sn.useExtendedCrossDomainLinker,
                            An = Sn.collectCrossDomainAttributes;
                        c.hasOwnProperty("discoverRootDomain") && c.discoverRootDomain && (en = function(e, n) {
                            for (var t = window.location.hostname, r = "_sp_root_domain_test_", o = r + (new Date).getTime(), i = "_test_value_" + (new Date).getTime(), a = t.split("."), u = a.length - 2; u >= 0; u--) {
                                var c = a.slice(u).join(".");
                                if (Q(o, i, 0, "/", c, e, n), Q(o) === i) {
                                    W(o, c, e, n);
                                    for (var s = Y(r), l = 0; l < s.length; l++) W(s[l], c, e, n);
                                    return c
                                }
                            }
                            return t
                        }(tn, rn));
                        var In = de(),
                            Cn = In.browserLanguage,
                            On = In.resolution,
                            Pn = In.colorDepth,
                            En = In.cookiesEnabled;

                        function Ln() {
                            (Je = te(window.location.hostname, window.location.href, F()))[1] !== Fe && (Ge = F(Fe)), qe = q(Je[0]), Fe = Je[1]
                        }

                        function Dn(e) {
                            return function(n) {
                                var t = n.currentTarget,
                                    o = function(e, n, t) {
                                        var o, i = (new Date).getTime(),
                                            a = r(r({}, _), n),
                                            u = t.domainUserId,
                                            c = t.userId,
                                            s = t.sessionId,
                                            l = t.sourceId,
                                            f = t.sourcePlatform,
                                            d = t.event,
                                            v = d.currentTarget,
                                            g = "function" == typeof a.reason ? a.reason(d) : null === (o = null == v ? void 0 : v.textContent) || void 0 === o ? void 0 : o.trim();
                                        return e ? [u, i, a.sessionId && s, a.userId && V(c || ""), a.sourceId && V(l || ""), a.sourcePlatform && f, a.reason && V(g || "")].map((function(e) {
                                            return e || ""
                                        })).join(".").replace(/([.]*$)/, "") : t.domainUserId + "." + i
                                    }(e, An, {
                                        domainUserId: Be,
                                        userId: _e || void 0,
                                        sessionId: Ne,
                                        sourceId: Qe,
                                        sourcePlatform: Xe,
                                        event: n
                                    });
                                (null == t ? void 0 : t.href) && (t.href = function(e, n, t) {
                                    var r = n + "=" + t,
                                        o = e.split("#"),
                                        i = o[0].split("?"),
                                        a = i.shift(),
                                        u = i.join("?");
                                    if (u) {
                                        for (var c = !0, s = u.split("&"), l = 0; l < s.length; l++)
                                            if (s[l].substr(0, n.length + 1) === n + "=") {
                                                c = !1, s[l] = r, u = s.join("&");
                                                break
                                            }
                                        c && (u = r + "&" + u)
                                    } else u = r;
                                    return o[0] = a + "?" + u, o.join("#")
                                }(t.href, "_sp", o))
                            }
                        }

                        function Un(e) {
                            for (var n = Dn(Tn), t = 0; t < document.links.length; t++) {
                                var r = document.links[t];
                                !r.spDecorationEnabled && e(r) && (r.addEventListener("click", n, !0), r.addEventListener("mousedown", n, !0), r.spDecorationEnabled = !0)
                            }
                        }

                        function jn(e) {
                            var n;
                            return Ce && (n = new RegExp("#.*"), e = e.replace(n, "")), Oe && (n = new RegExp("[{}]", "g"), e = e.replace(n, "")), e
                        }

                        function Rn(e) {
                            var n = new RegExp("^([a-z]+):").exec(e);
                            return n ? n[1] : null
                        }

                        function Bn(e) {
                            return $e + e + "." + Re
                        }

                        function Nn(e) {
                            var n = Bn(e);
                            return "localStorage" == dn ? function(e) {
                                try {
                                    var n = window.localStorage,
                                        t = n.getItem(e + ".expires");
                                    return null === t || +t > Date.now() ? n.getItem(e) : (n.removeItem(e), void n.removeItem(e + ".expires"))
                                } catch (e) {
                                    return
                                }
                            }(n) : "cookie" == dn || "cookieAndLocalStorage" == dn ? Q(n) : void 0
                        }

                        function _n() {
                            Ln(), Re = j()((en || qe) + (nn || "/")).slice(0, 4)
                        }

                        function Vn() {
                            var e = new Date;
                            Ee = e.getTime()
                        }

                        function Mn() {
                            ! function() {
                                var e = zn(),
                                    n = e[0];
                                n < Le ? Le = n : n > De && (De = n);
                                var t = e[1];
                                t < Ue ? Ue = t : t > je && (je = t)
                            }(), Vn()
                        }

                        function zn() {
                            var e = document.documentElement;
                            return e ? [e.scrollLeft || window.pageXOffset, e.scrollTop || window.pageYOffset] : [0, 0]
                        }

                        function Hn() {
                            var e = zn(),
                                n = e[0];
                            Le = n, De = n;
                            var t = e[1];
                            Ue = t, je = t
                        }

                        function Jn(e) {
                            return Math.round(e)
                        }

                        function qn() {
                            return Gn(Bn("ses"), "*", cn)
                        }

                        function Fn(e) {
                            var n = Bn("id"),
                                t = function(e, n) {
                                    var t = o([], e, !0);
                                    return n && (t[1] = "", t[7] = ""), t.shift(), t.join(".")
                                }(e, fn);
                            return Gn(n, t, un)
                        }

                        function Gn(e, n, t) {
                            return !(fn && !sn) && ("localStorage" == dn ? R(e, n, t) : ("cookie" == dn || "cookieAndLocalStorage" == dn) && (Q(e, n, t, nn, en, tn, rn), -1 !== document.cookie.indexOf("".concat(e, "="))))
                        }

                        function Xn(e) {
                            var n = Bn("id"),
                                t = Bn("ses");
                            B(n), B(t), W(n, en, tn, rn), W(t, en, tn, rn), (null == e ? void 0 : e.preserveSession) || (Ne = (0, i.v4)(), gn = 1), (null == e ? void 0 : e.preserveUser) || (Be = fn ? "" : (0, i.v4)(), _e = null)
                        }

                        function Wn(e) {
                            e && e.stateStorageStrategy && (c.stateStorageStrategy = e.stateStorageStrategy, dn = ye(c)), fn = ke(c), sn = we(c), ln = be(c), pn.setUseLocalStorage("localStorage" == dn || "cookieAndLocalStorage" == dn), pn.setAnonymousTracking(ln)
                        }

                        function Yn() {
                            if (!fn || sn) {
                                var e = "none" != dn && !!Nn("ses"),
                                    n = Qn();
                                Be = function(e, n) {
                                    var t;
                                    return e[1] ? t = e[1] : n ? (t = "", e[1] = t) : (t = (0, i.v4)(), e[1] = t), t
                                }(n, fn), Ne = e ? ae(n) : re(n), gn = ue(n), "none" != dn && (qn(), oe(n), Fn(n))
                            }
                        }

                        function Qn() {
                            return "none" == dn ? ["1", "", 0, 0, 0, void 0, "", "", "", void 0, 0] : function(e, n, t, r) {
                                var o, a = new Date,
                                    u = Math.round(a.getTime() / 1e3);
                                e ? (o = e.split(".")).unshift("0") : o = ["1", n, u, r, u, "", t], o[6] && "undefined" !== o[6] || (o[6] = (0, i.v4)()), o[7] && "undefined" !== o[7] || (o[7] = ""),
                                    o[8] && "undefined" !== o[8] || (o[8] = ""), o[9] && "undefined" !== o[9] || (o[9] = ""), o[10] && "undefined" !== o[10] || (o[10] = 0);
                                var c = function(e, n) {
                                        var t = parseInt(e);
                                        return isNaN(t) ? n : t
                                    },
                                    s = function(e) {
                                        return e ? c(e, void 0) : void 0
                                    };
                                return [o[0], o[1], c(o[2], u), c(o[3], r), c(o[4], u), s(o[5]), o[6], o[7], o[8], s(o[9]), c(o[10], 0)]
                            }(Nn("id") || void 0, Be, Ne, gn)
                        }

                        function Zn(e) {
                            return 0 === e.indexOf("http") ? e : ("https:" === document.location.protocol ? "https" : "http") + "://" + e
                        }

                        function Kn() {
                            mn && null != u.pageViewId || (u.pageViewId = (0, i.v4)(), u.pageViewUrl = Ae || Fe)
                        }

                        function $n() {
                            return function() {
                                if (null == u.pageViewId) return !0;
                                if (mn || !hn) return !1;
                                if (void 0 === u.pageViewUrl) return !0;
                                var e = Ae || Fe;
                                if (!0 === hn || "full" == hn || !("URL" in window)) return u.pageViewUrl != e;
                                var n = new URL(e),
                                    t = new URL(u.pageViewUrl);
                                if ("pathname" == hn) return n.pathname != t.pathname;
                                if ("pathnameAndSearch" == hn) return n.pathname != t.pathname || n.search != t.search;
                                return !1
                            }() && (u.pageViewId = (0, i.v4)(), u.pageViewUrl = Ae || Fe), u.pageViewId
                        }

                        function et() {
                            if ("none" === dn || fn || !Se) return null;
                            var e = "_sp_tab_id",
                                n = N(e);
                            return n || (! function(e, n) {
                                try {
                                    window.sessionStorage.setItem(e, n)
                                } catch (e) {
                                    return !1
                                }
                            }(e, (0, i.v4)()), n = N(e)), n || null
                        }

                        function nt(e, n) {
                            return (e || []).concat(n ? n() : [])
                        }

                        function tt(e) {
                            var n = e.title,
                                t = e.context,
                                r = e.timestamp,
                                o = e.contextCallback;
                            Ln(), yn && yn == $n() && Kn(), yn = $n(), Ze = document.title;
                            var i = H((Ie = null != n ? n : Ie) || Ze);
                            ze.track(function(e) {
                                var n = e.pageUrl,
                                    t = e.pageTitle,
                                    r = e.referrer,
                                    o = s();
                                return o.add("e", "pv"), o.add("url", n), o.add("page", t), o.add("refr", r), o
                            }({
                                pageUrl: jn(Ae || Fe),
                                pageTitle: i,
                                referrer: jn(Te || Ge)
                            }), nt(t, o), r);
                            var a = new Date,
                                u = !1;
                            if (wn.enabled && !wn.installed) {
                                wn.installed = !0, u = !0;
                                var c = {
                                    update: function() {
                                        if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                            var e = !1,
                                                n = Object.defineProperty({}, "passive", {
                                                    get: function() {
                                                        e = !0
                                                    },
                                                    set: function() {}
                                                }),
                                                t = function() {};
                                            window.addEventListener("testPassiveEventSupport", t, n), window.removeEventListener("testPassiveEventSupport", t, n), c.hasSupport = e
                                        }
                                    }
                                };
                                c.update();
                                var l = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                                Object.prototype.hasOwnProperty.call(c, "hasSupport") ? G(document, l, Vn, {
                                    passive: !0
                                }) : G(document, l, Vn), Hn();
                                var f = function(e, n) {
                                    return void 0 === n && (n = Vn),
                                        function(e) {
                                            return G(document, e, n)
                                        }
                                };
                                ["click", "mouseup", "mousedown", "mousemove", "keypress", "keydown", "keyup", "touchend", "touchstart"].forEach(f(document)), ["resize", "focus", "blur"].forEach(f(window)), f(window, Mn)("scroll")
                            }
                            if (wn.enabled && (Ke || u)) {
                                Ee = a.getTime();
                                var d = void 0;
                                for (d in wn.configurations) {
                                    var v = wn.configurations[d];
                                    v && (window.clearInterval(v.activityInterval), rt(v, t, o))
                                }
                            }
                        }

                        function rt(e, n, t) {
                            var r = function(e, n) {
                                    Ln(), e({
                                        context: n,
                                        pageViewId: $n(),
                                        minXOffset: Le,
                                        minYOffset: Ue,
                                        maxXOffset: De,
                                        maxYOffset: je
                                    }), Hn()
                                },
                                o = function() {
                                    var o = new Date;
                                    Ee + e.configHeartBeatTimer > o.getTime() && r(e.callback, nt(n, t))
                                };
                            0 === e.configMinimumVisitLength ? e.activityInterval = window.setInterval(o, e.configHeartBeatTimer) : e.activityInterval = window.setTimeout((function() {
                                var i = new Date;
                                Ee + e.configMinimumVisitLength > i.getTime() && r(e.callback, nt(n, t)), e.activityInterval = window.setInterval(o, e.configHeartBeatTimer)
                            }), e.configMinimumVisitLength)
                        }

                        function ot(e) {
                            var n = e.minimumVisitLength,
                                t = e.heartbeatDelay,
                                r = e.callback;
                            if (z(n) && z(t)) return {
                                configMinimumVisitLength: 1e3 * n,
                                configHeartBeatTimer: 1e3 * t,
                                callback: r
                            };
                            p.error("Activity tracking minimumVisitLength & heartbeatDelay must be integers")
                        }

                        function it(e) {
                            var n = e.context,
                                t = e.minXOffset,
                                r = e.minYOffset,
                                o = e.maxXOffset,
                                i = e.maxYOffset,
                                a = document.title;
                            a !== Ze && (Ze = a, Ie = void 0), ze.track(function(e) {
                                var n = e.pageUrl,
                                    t = e.pageTitle,
                                    r = e.referrer,
                                    o = e.minXOffset,
                                    i = e.maxXOffset,
                                    a = e.minYOffset,
                                    u = e.maxYOffset,
                                    c = s();
                                return c.add("e", "pp"), c.add("url", n), c.add("page", t), c.add("refr", r), o && !isNaN(Number(o)) && c.add("pp_mix", o.toString()), i && !isNaN(Number(i)) && c.add("pp_max", i.toString()), a && !isNaN(Number(a)) && c.add("pp_miy", a.toString()), u && !isNaN(Number(u)) && c.add("pp_may", u.toString()), c
                            }({
                                pageUrl: jn(Ae || Fe),
                                pageTitle: H(Ie || Ze),
                                referrer: jn(Te || Ge),
                                minXOffset: Jn(t),
                                maxXOffset: Jn(o),
                                minYOffset: Jn(r),
                                maxYOffset: Jn(i)
                            }), n)
                        }

                        function at(e) {
                            var n = wn.configurations[e];
                            0 === (null == n ? void 0 : n.configMinimumVisitLength) ? window.clearTimeout(null == n ? void 0 : n.activityInterval) : window.clearInterval(null == n ? void 0 : n.activityInterval), wn.configurations[e] = void 0
                        }
                        ze.setTrackerVersion(t), ze.setTrackerNamespace(n), ze.setAppId(Qe), ze.setPlatform(Xe), ze.addPayloadPair("cookie", En ? "1" : "0"), ze.addPayloadPair("cs", He), ze.addPayloadPair("lang", Cn), ze.addPayloadPair("res", On), ze.addPayloadPair("cd", Pn), _n(), Yn(), c.crossDomainLinker && Un(c.crossDomainLinker);
                        var ut = {
                            getDomainSessionIndex: function() {
                                return gn
                            },
                            getPageViewId: $n,
                            getTabId: et,
                            newSession: function() {
                                var e = Qn();
                                if (ce(e) ? (Ne = "none" != dn ? re(e) : ae(e), gn = ue(e)) : (gn++, Ne = re(e, {
                                        memorizedVisitCount: gn
                                    })), oe(e), "none" != dn) {
                                    var n = ie(e, dn, fn);
                                    Fn(e), qn() && kn && (xn = !0, kn(n))
                                }
                                vn = (new Date).getTime()
                            },
                            getCookieName: function(e) {
                                return Bn(e)
                            },
                            getUserId: function() {
                                return _e
                            },
                            getDomainUserId: function() {
                                return Qn()[1]
                            },
                            getDomainUserInfo: function() {
                                return Qn()
                            },
                            setReferrerUrl: function(e) {
                                Te = e
                            },
                            setCustomUrl: function(e) {
                                Ln(), Ae = function(e, n) {
                                    var t;
                                    return Rn(n) ? n : "/" === n.slice(0, 1) ? Rn(e) + "://" + J(e) + n : ((t = (e = jn(e)).indexOf("?")) >= 0 && (e = e.slice(0, t)), (t = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, t + 1)), e + n)
                                }(Fe, e)
                            },
                            setDocumentTitle: function(e) {
                                Ze = document.title, Ie = e
                            },
                            discardHashTag: function(e) {
                                Ce = e
                            },
                            discardBrace: function(e) {
                                Oe = e
                            },
                            setCookiePath: function(e) {
                                nn = e, _n()
                            },
                            setVisitorCookieTimeout: function(e) {
                                un = e
                            },
                            crossDomainLinker: function(e) {
                                Un(e)
                            },
                            enableActivityTracking: function(e) {
                                wn.configurations.pagePing || (wn.enabled = !0, wn.configurations.pagePing = ot(r(r({}, e), {
                                    callback: it
                                })))
                            },
                            enableActivityTrackingCallback: function(e) {
                                wn.configurations.callback || (wn.enabled = !0, wn.configurations.callback = ot(e))
                            },
                            disableActivityTracking: function() {
                                at("pagePing")
                            },
                            disableActivityTrackingCallback: function() {
                                at("callback")
                            },
                            updatePageActivity: function() {
                                Vn()
                            },
                            setOptOutCookie: function(e) {
                                Pe = e
                            },
                            setUserId: function(e) {
                                _e = e
                            },
                            setUserIdFromLocation: function(e) {
                                Ln(), _e = X(e, Fe)
                            },
                            setUserIdFromReferrer: function(e) {
                                Ln(), _e = X(e, Ge)
                            },
                            setUserIdFromCookie: function(e) {
                                _e = Q(e)
                            },
                            setCollectorUrl: function(e) {
                                We = Zn(e), pn.setCollectorUrl(We)
                            },
                            setBufferSize: function(e) {
                                pn.setBufferSize(e)
                            },
                            flushBuffer: function(e) {
                                void 0 === e && (e = {}), pn.executeQueue(), e.newBufferSize && pn.setBufferSize(e.newBufferSize)
                            },
                            trackPageView: function(e) {
                                void 0 === e && (e = {}), tt(e)
                            },
                            preservePageViewId: function() {
                                mn = !0
                            },
                            preservePageViewIdForUrl: function(e) {
                                hn = e
                            },
                            disableAnonymousTracking: function(e) {
                                c.anonymousTracking = !1, Wn(e), Yn(), pn.executeQueue()
                            },
                            enableAnonymousTracking: function(e) {
                                var n;
                                c.anonymousTracking = null === (n = e && (null == e ? void 0 : e.options)) || void 0 === n || n, Wn(e), sn || Kn()
                            },
                            clearUserData: Xn
                        };
                        return r(r({}, ut), {
                            id: e,
                            namespace: n,
                            core: ze,
                            sharedState: u
                        })
                    }(e, n, t, a, u, c),
                    d = r(r({}, f), {
                        addPlugin: function(e) {
                            var n, t;
                            d.core.addPlugin(e), null === (t = (n = e.plugin).activateBrowserPlugin) || void 0 === t || t.call(n, d)
                        }
                    });
                return l.forEach((function(e) {
                    var n;
                    null === (n = e.activateBrowserPlugin) || void 0 === n || n.call(e, d)
                })), d
            }
            var he = {};

            function ye(e, n) {
                try {
                    (t = null != e ? e : Object.keys(he), we(t, he)).forEach(n)
                } catch (e) {
                    p.error("Function failed", e)
                }
                var t
            }

            function we(e, n) {
                for (var t = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.hasOwnProperty(i) ? t.push(n[i]) : p.warn(i + " not configured")
                }
                return t
            }
            var be = function() {
                this.outQueues = [], this.bufferFlushers = [], this.hasLoaded = !1, this.registeredOnLoadHandlers = []
            };

            function ke(e, n) {
                ye(n, (function(n) {
                    n.discardBrace(e)
                }))
            }

            function xe(e, n) {
                ye(n, (function(n) {
                    n.enableActivityTrackingCallback(e)
                }))
            }

            function Se(e) {
                ye(e, (function(e) {
                    e.disableActivityTracking()
                }))
            }

            function Te(e, n) {
                ye(n, (function(n) {
                    n.setUserId(e)
                }))
            }

            function Ae(e, n) {
                ye(n, (function(n) {
                    n.trackPageView(e)
                }))
            }

            function Ie(e, n) {
                ye(n, (function(n) {
                    n.core.track(D({
                        event: e.event
                    }), e.context, e.timestamp)
                }))
            }

            function Ce(e, n) {
                ye(n, (function(n) {
                    n.disableAnonymousTracking(e)
                }))
            }

            function Oe(e, n) {
                ye(n, (function(n) {
                    n.enableAnonymousTracking(e)
                }))
            }
            var Pe = "undefined" != typeof window ? function() {
                var e = new be,
                    n = document,
                    t = window;

                function r() {
                    var n;
                    if (!e.hasLoaded)
                        for (e.hasLoaded = !0, n = 0; n < e.registeredOnLoadHandlers.length; n++) e.registeredOnLoadHandlers[n]();
                    return !0
                }
                return n.visibilityState && G(n, "visibilitychange", (function() {
                    "hidden" == n.visibilityState && e.bufferFlushers.forEach((function(e) {
                        e(!1)
                    }))
                }), !1), G(t, "beforeunload", (function() {
                    e.bufferFlushers.forEach((function(e) {
                        e(!1)
                    }))
                }), !1), "loading" === document.readyState ? (n.addEventListener ? n.addEventListener("DOMContentLoaded", (function e() {
                    n.removeEventListener("DOMContentLoaded", e, !1), r()
                })) : n.attachEvent && n.attachEvent("onreadystatechange", (function e() {
                    "complete" === n.readyState && (n.detachEvent("onreadystatechange", e), r())
                })), G(t, "load", r, !1)) : r(), e
            }() : void 0;

            function Ee(e, n, t) {
                return void 0 === t && (t = {}), Pe ? function(e, n, t, r, o, i) {
                    return he.hasOwnProperty(e) ? null : (he[e] = me(e, n, t, r, o, i), he[e])
                }(e, e, "js-".concat("3.24.1"), n, Pe, t) : void 0
            }
        },
        306636: e => {
            var n = {
                utf8: {
                    stringToBytes: function(e) {
                        return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                    },
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(n.bin.bytesToString(e)))
                    }
                },
                bin: {
                    stringToBytes: function(e) {
                        for (var n = [], t = 0; t < e.length; t++) n.push(255 & e.charCodeAt(t));
                        return n
                    },
                    bytesToString: function(e) {
                        for (var n = [], t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
                        return n.join("")
                    }
                }
            };
            e.exports = n
        },
        401048: e => {
            var n, t;
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
                rotl: function(e, n) {
                    return e << n | e >>> 32 - n
                },
                rotr: function(e, n) {
                    return e << 32 - n | e >>> n
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
                    for (var n = 0; n < e.length; n++) e[n] = t.endian(e[n]);
                    return e
                },
                randomBytes: function(e) {
                    for (var n = []; e > 0; e--) n.push(Math.floor(256 * Math.random()));
                    return n
                },
                bytesToWords: function(e) {
                    for (var n = [], t = 0, r = 0; t < e.length; t++, r += 8) n[r >>> 5] |= e[t] << 24 - r % 32;
                    return n
                },
                wordsToBytes: function(e) {
                    for (var n = [], t = 0; t < 32 * e.length; t += 8) n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                    return n
                },
                bytesToHex: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push((e[t] >>> 4).toString(16)), n.push((15 & e[t]).toString(16));
                    return n.join("")
                },
                hexToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return n
                },
                bytesToBase64: function(e) {
                    for (var t = [], r = 0; r < e.length; r += 3)
                        for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? t.push(n.charAt(o >>> 6 * (3 - i) & 63)) : t.push("=");
                    return t.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                    return t
                }
            }, e.exports = t
        },
        24654: e => {
            "use strict";
            e.exports = function(e) {
                for (var n = [], t = e.length, r = 0; r < t; r++) {
                    var o = e.charCodeAt(r);
                    if (o >= 55296 && o <= 56319 && t > r + 1) {
                        var i = e.charCodeAt(r + 1);
                        i >= 56320 && i <= 57343 && (o = 1024 * (o - 55296) + i - 56320 + 65536, r += 1)
                    }
                    o < 128 ? n.push(o) : o < 2048 ? (n.push(o >> 6 | 192), n.push(63 & o | 128)) : o < 55296 || o >= 57344 && o < 65536 ? (n.push(o >> 12 | 224), n.push(o >> 6 & 63 | 128), n.push(63 & o | 128)) : o >= 65536 && o <= 1114111 ? (n.push(o >> 18 | 240), n.push(o >> 12 & 63 | 128), n.push(o >> 6 & 63 | 128), n.push(63 & o | 128)) : n.push(239, 191, 189)
                }
                return new Uint8Array(n).buffer
            }
        },
        9995: (e, n, t) => {
            var r = t(939340);
            e.exports = function(e) {
                return e = r(e ^= e >>> 16, 2246822507), e = r(e ^= e >>> 13, 3266489909), (e ^= e >>> 16) >>> 0
            }
        },
        939340: e => {
            "use strict";
            e.exports = Math.imul || function(e, n) {
                var t = 65535 & e,
                    r = 65535 & n;
                return t * r + ((e >>> 16 & 65535) * r + t * (n >>> 16 & 65535) << 16 >>> 0) | 0
            }
        },
        855385: (e, n, t) => {
            var r = t(939340),
                o = t(9995),
                i = t(24654),
                a = new Uint32Array([3432918353, 461845907]);

            function u(e, n) {
                return e << n | e >>> 32 - n
            }
            e.exports = function(e, n) {
                if (n = n ? 0 | n : 0, "string" == typeof e && (e = i(e)), !(e instanceof ArrayBuffer)) throw new TypeError("Expected key to be ArrayBuffer or string");
                var t = new Uint32Array([n]);
                return function(e, n) {
                        for (var t = e.byteLength / 4 | 0, o = new Uint32Array(e, 0, t), i = 0; i < t; i++) o[i] = r(o[i], a[0]), o[i] = u(o[i], 15), o[i] = r(o[i], a[1]), n[0] = n[0] ^ o[i], n[0] = u(n[0], 13), n[0] = r(n[0], 5) + 3864292196
                    }(e, t),
                    function(e, n) {
                        var t = e.byteLength / 4 | 0,
                            o = e.byteLength % 4,
                            i = 0,
                            c = new Uint8Array(e, 4 * t, o);
                        switch (o) {
                            case 3:
                                i ^= c[2] << 16;
                            case 2:
                                i ^= c[1] << 8;
                            case 1:
                                i ^= c[0] << 0, i = u(i = r(i, a[0]), 15), i = r(i, a[1]), n[0] = n[0] ^ i
                        }
                    }(e, t),
                    function(e, n) {
                        n[0] = n[0] ^ e.byteLength, n[0] = o(n[0])
                    }(e, t), t.buffer
            }
        },
        258101: (e, n, t) => {
            var r, o, i, a;
            r = t(401048), o = t(306636).utf8, i = t(306636).bin, (a = function(e, n) {
                var t = r.wordsToBytes(function(e) {
                    e.constructor == String ? e = o.stringToBytes(e) : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                    var n = r.bytesToWords(e),
                        t = 8 * e.length,
                        i = [],
                        a = 1732584193,
                        u = -271733879,
                        c = -1732584194,
                        s = 271733878,
                        l = -1009589776;
                    n[t >> 5] |= 128 << 24 - t % 32, n[15 + (t + 64 >>> 9 << 4)] = t;
                    for (var f = 0; f < n.length; f += 16) {
                        for (var d = a, v = u, g = c, p = s, m = l, h = 0; h < 80; h++) {
                            if (h < 16) i[h] = n[f + h];
                            else {
                                var y = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
                                i[h] = y << 1 | y >>> 31
                            }
                            var w = (a << 5 | a >>> 27) + l + (i[h] >>> 0) + (h < 20 ? 1518500249 + (u & c | ~u & s) : h < 40 ? 1859775393 + (u ^ c ^ s) : h < 60 ? (u & c | u & s | c & s) - 1894007588 : (u ^ c ^ s) - 899497514);
                            l = s, s = c, c = u << 30 | u >>> 2, u = a, a = w
                        }
                        a += d, u += v, c += g, s += p, l += m
                    }
                    return [a, u, c, s, l]
                }(e));
                return n && n.asBytes ? t : n && n.asString ? i.bytesToString(t) : r.bytesToHex(t)
            })._blocksize = 16, a._digestsize = 20, e.exports = a
        },
        892674: (e, n, t) => {
            var r = t(862335),
                o = t(685234),
                i = o;
            i.v1 = r, i.v4 = o, e.exports = i
        },
        140614: e => {
            for (var n = [], t = 0; t < 256; ++t) n[t] = (t + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var r = t || 0,
                    o = n;
                return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
            }
        },
        210537: e => {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var t = new Uint8Array(16);
                e.exports = function() {
                    return n(t), t
                }
            } else {
                var r = new Array(16);
                e.exports = function() {
                    for (var e, n = 0; n < 16; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), r[n] = e >>> ((3 & n) << 3) & 255;
                    return r
                }
            }
        },
        862335: (e, n, t) => {
            var r, o, i = t(210537),
                a = t(140614),
                u = 0,
                c = 0;
            e.exports = function(e, n, t) {
                var s = n && t || 0,
                    l = n || [],
                    f = (e = e || {}).node || r,
                    d = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == f || null == d) {
                    var v = i();
                    null == f && (f = r = [1 | v[0], v[1], v[2], v[3], v[4], v[5]]), null == d && (d = o = 16383 & (v[6] << 8 | v[7]))
                }
                var g = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    p = void 0 !== e.nsecs ? e.nsecs : c + 1,
                    m = g - u + (p - c) / 1e4;
                if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (m < 0 || g > u) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                u = g, c = p, o = d;
                var h = (1e4 * (268435455 & (g += 122192928e5)) + p) % 4294967296;
                l[s++] = h >>> 24 & 255, l[s++] = h >>> 16 & 255, l[s++] = h >>> 8 & 255, l[s++] = 255 & h;
                var y = g / 4294967296 * 1e4 & 268435455;
                l[s++] = y >>> 8 & 255, l[s++] = 255 & y, l[s++] = y >>> 24 & 15 | 16, l[s++] = y >>> 16 & 255, l[s++] = d >>> 8 | 128, l[s++] = 255 & d;
                for (var w = 0; w < 6; ++w) l[s + w] = f[w];
                return n || a(l)
            }
        },
        685234: (e, n, t) => {
            var r = t(210537),
                o = t(140614);
            e.exports = function(e, n, t) {
                var i = n && t || 0;
                "string" == typeof e && (n = "binary" === e ? new Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || r)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n)
                    for (var u = 0; u < 16; ++u) n[i + u] = a[u];
                return n || o(a)
            }
        }
    }
]);