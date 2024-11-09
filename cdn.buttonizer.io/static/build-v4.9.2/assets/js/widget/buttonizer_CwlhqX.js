var Il = Object.defineProperty,
    Ll = (e, t, n) => t in e ? Il(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Pi = (e, t, n) => (Ll(e, typeof t != "symbol" ? t + "" : t, n), n);

function Ri(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: Bl
} = Object.prototype, {
    getPrototypeOf: Mn
} = Object, Qe = (e => t => {
    const n = Bl.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), Ot = e => (e = e.toLowerCase(), t => Qe(t) === e), Ze = e => t => typeof t === e, {
    isArray: Xt
} = Array, xe = Ze("undefined");

function Nl(e) {
    return e !== null && !xe(e) && e.constructor !== null && !xe(e.constructor) && dt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Ai = Ot("ArrayBuffer");

function Dl(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ai(e.buffer), t
}
const Fl = Ze("string"),
    dt = Ze("function"),
    Ci = Ze("number"),
    tn = e => e !== null && typeof e == "object",
    Ul = e => e === !0 || e === !1,
    en = e => {
        if (Qe(e) !== "object") return !1;
        const t = Mn(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    Hl = Ot("Date"),
    Ml = Ot("File"),
    Wl = Ot("Blob"),
    ql = Ot("FileList"),
    Gl = e => tn(e) && dt(e.pipe),
    Vl = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || dt(e.append) && ((t = Qe(e)) === "formdata" || t === "object" && dt(e.toString) && e.toString() === "[object FormData]"))
    },
    Jl = Ot("URLSearchParams"),
    Kl = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function ke(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if (typeof e != "object" && (e = [e]), Xt(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = o.length;
        let a;
        for (r = 0; r < s; r++) a = o[r], t.call(null, e[a], a, e)
    }
}

function Ti(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
const $i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    Ii = e => !xe(e) && e !== $i;

function Wn() {
    const {
        caseless: e
    } = Ii(this) && this || {}, t = {}, n = (r, i) => {
        const o = e && Ti(t, i) || i;
        en(t[o]) && en(r) ? t[o] = Wn(t[o], r) : en(r) ? t[o] = Wn({}, r) : Xt(r) ? t[o] = r.slice() : t[o] = r
    };
    for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && ke(arguments[r], n);
    return t
}
const Xl = (e, t, n, {
        allOwnKeys: r
    } = {}) => (ke(t, (i, o) => {
        n && dt(i) ? e[o] = Ri(i, n) : e[o] = i
    }, {
        allOwnKeys: r
    }), e),
    Yl = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ql = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    Zl = (e, t, n, r) => {
        let i, o, s;
        const a = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) s = i[o], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
            e = n !== !1 && Mn(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    tu = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    eu = e => {
        if (!e) return null;
        if (Xt(e)) return e;
        let t = e.length;
        if (!Ci(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    nu = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Mn(Uint8Array)),
    ru = (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (;
            (r = n.next()) && !r.done;) {
            const i = r.value;
            t.call(e, i[0], i[1])
        }
    },
    iu = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    ou = Ot("HTMLFormElement"),
    su = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, r) {
        return n.toUpperCase() + r
    }),
    Li = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    au = Ot("RegExp"),
    Bi = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        ke(n, (i, o) => {
            let s;
            (s = t(i, o, e)) !== !1 && (r[o] = s || i)
        }), Object.defineProperties(e, r)
    },
    lu = e => {
        Bi(e, (t, n) => {
            if (dt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (dt(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    uu = (e, t) => {
        const n = {},
            r = i => {
                i.forEach(o => {
                    n[o] = !0
                })
            };
        return Xt(e) ? r(e) : r(String(e).split(t)), n
    },
    cu = () => {},
    du = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    qn = "abcdefghijklmnopqrstuvwxyz",
    Ni = "0123456789",
    Di = {
        DIGIT: Ni,
        ALPHA: qn,
        ALPHA_DIGIT: qn + qn.toUpperCase() + Ni
    },
    hu = (e = 16, t = Di.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function pu(e) {
    return !!(e && dt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const fu = e => {
        const t = new Array(10),
            n = (r, i) => {
                if (tn(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const o = Xt(r) ? [] : {};
                        return ke(r, (s, a) => {
                            const l = n(s, i + 1);
                            !xe(l) && (o[a] = l)
                        }), t[i] = void 0, o
                    }
                }
                return r
            };
        return n(e, 0)
    },
    mu = Ot("AsyncFunction"),
    gu = e => e && (tn(e) || dt(e)) && dt(e.then) && dt(e.catch),
    y = {
        isArray: Xt,
        isArrayBuffer: Ai,
        isBuffer: Nl,
        isFormData: Vl,
        isArrayBufferView: Dl,
        isString: Fl,
        isNumber: Ci,
        isBoolean: Ul,
        isObject: tn,
        isPlainObject: en,
        isUndefined: xe,
        isDate: Hl,
        isFile: Ml,
        isBlob: Wl,
        isRegExp: au,
        isFunction: dt,
        isStream: Gl,
        isURLSearchParams: Jl,
        isTypedArray: nu,
        isFileList: ql,
        forEach: ke,
        merge: Wn,
        extend: Xl,
        trim: Kl,
        stripBOM: Yl,
        inherits: Ql,
        toFlatObject: Zl,
        kindOf: Qe,
        kindOfTest: Ot,
        endsWith: tu,
        toArray: eu,
        forEachEntry: ru,
        matchAll: iu,
        isHTMLForm: ou,
        hasOwnProperty: Li,
        hasOwnProp: Li,
        reduceDescriptors: Bi,
        freezeMethods: lu,
        toObjectSet: uu,
        toCamelCase: su,
        noop: cu,
        toFiniteNumber: du,
        findKey: Ti,
        global: $i,
        isContextDefined: Ii,
        ALPHABET: Di,
        generateString: hu,
        isSpecCompliantForm: pu,
        toJSONObject: fu,
        isAsyncFn: mu,
        isThenable: gu
    };

function D(e, t, n, r, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}
y.inherits(D, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: y.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Fi = D.prototype,
    Ui = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Ui[e] = {
        value: e
    }
}), Object.defineProperties(D, Ui), Object.defineProperty(Fi, "isAxiosError", {
    value: !0
}), D.from = (e, t, n, r, i, o) => {
    const s = Object.create(Fi);
    return y.toFlatObject(e, s, function(a) {
        return a !== Error.prototype
    }, a => a !== "isAxiosError"), D.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s
};
const bu = null;

function Gn(e) {
    return y.isPlainObject(e) || y.isArray(e)
}

function Hi(e) {
    return y.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Mi(e, t, n) {
    return e ? e.concat(t).map(function(r, i) {
        return r = Hi(r), !n && i ? "[" + r + "]" : r
    }).join(n ? "." : "") : t
}

function _u(e) {
    return y.isArray(e) && !e.some(Gn)
}
const yu = y.toFlatObject(y, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function nn(e, t, n) {
    if (!y.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = y.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(g, b) {
        return !y.isUndefined(b[g])
    });
    const r = n.metaTokens,
        i = n.visitor || u,
        o = n.dots,
        s = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
    if (!y.isFunction(i)) throw new TypeError("visitor must be a function");

    function l(g) {
        if (g === null) return "";
        if (y.isDate(g)) return g.toISOString();
        if (!a && y.isBlob(g)) throw new D("Blob is not supported. Use a Buffer instead.");
        return y.isArrayBuffer(g) || y.isTypedArray(g) ? a && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }

    function u(g, b, w) {
        let x = g;
        if (g && !w && typeof g == "object") {
            if (y.endsWith(b, "{}")) b = r ? b : b.slice(0, -2), g = JSON.stringify(g);
            else if (y.isArray(g) && _u(g) || (y.isFileList(g) || y.endsWith(b, "[]")) && (x = y.toArray(g))) return b = Hi(b), x.forEach(function(S, A) {
                !(y.isUndefined(S) || S === null) && t.append(s === !0 ? Mi([b], A, o) : s === null ? b : b + "[]", l(S))
            }), !1
        }
        return Gn(g) ? !0 : (t.append(Mi(w, b, o), l(g)), !1)
    }
    const c = [],
        d = Object.assign(yu, {
            defaultVisitor: u,
            convertValue: l,
            isVisitable: Gn
        });

    function m(g, b) {
        if (!y.isUndefined(g)) {
            if (c.indexOf(g) !== -1) throw Error("Circular reference detected in " + b.join("."));
            c.push(g), y.forEach(g, function(w, x) {
                (!(y.isUndefined(w) || w === null) && i.call(t, w, y.isString(x) ? x.trim() : x, b, d)) === !0 && m(w, b ? b.concat(x) : [x])
            }), c.pop()
        }
    }
    if (!y.isObject(e)) throw new TypeError("data must be an object");
    return m(e), t
}

function Wi(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
        return t[n]
    })
}

function Vn(e, t) {
    this._pairs = [], e && nn(e, this, t)
}
const qi = Vn.prototype;
qi.append = function(e, t) {
    this._pairs.push([e, t])
}, qi.toString = function(e) {
    const t = e ? function(n) {
        return e.call(this, n, Wi)
    } : Wi;
    return this._pairs.map(function(n) {
        return t(n[0]) + "=" + t(n[1])
    }, "").join("&")
};

function vu(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Gi(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || vu,
        i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = y.isURLSearchParams(t) ? t.toString() : new Vn(t, n).toString(r), o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class Vi {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        y.forEach(this.handlers, function(n) {
            n !== null && t(n)
        })
    }
}
const Ji = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    wu = typeof URLSearchParams < "u" ? URLSearchParams : Vn,
    xu = typeof FormData < "u" ? FormData : null,
    ku = typeof Blob < "u" ? Blob : null,
    Su = {
        isBrowser: !0,
        classes: {
            URLSearchParams: wu,
            FormData: xu,
            Blob: ku
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Ki = typeof window < "u" && typeof document < "u",
    Ou = (e => Ki && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    ju = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    zu = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Ki,
        hasStandardBrowserEnv: Ou,
        hasStandardBrowserWebWorkerEnv: ju
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    jt = { ...zu,
        ...Su
    };

function Eu(e, t) {
    return nn(e, new jt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return jt.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function Pu(e) {
    return y.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function Ru(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
    return t
}

function Xi(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        if (s === "__proto__") return !0;
        const a = Number.isFinite(+s),
            l = o >= n.length;
        return s = !s && y.isArray(i) ? i.length : s, l ? (y.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a) : ((!i[s] || !y.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && y.isArray(i[s]) && (i[s] = Ru(i[s])), !a)
    }
    if (y.isFormData(e) && y.isFunction(e.entries)) {
        const n = {};
        return y.forEachEntry(e, (r, i) => {
            t(Pu(r), i, n, 0)
        }), n
    }
    return null
}

function Au(e, t, n) {
    if (y.isString(e)) try {
        return (t || JSON.parse)(e), y.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const Se = {
    transitional: Ji,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, t) {
        const n = t.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            i = y.isObject(e);
        if (i && y.isHTMLForm(e) && (e = new FormData(e)), y.isFormData(e)) return r ? JSON.stringify(Xi(e)) : e;
        if (y.isArrayBuffer(e) || y.isBuffer(e) || y.isStream(e) || y.isFile(e) || y.isBlob(e)) return e;
        if (y.isArrayBufferView(e)) return e.buffer;
        if (y.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let o;
        if (i) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return Eu(e, this.formSerializer).toString();
            if ((o = y.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const s = this.env && this.env.FormData;
                return nn(o ? {
                    "files[]": e
                } : e, s && new s, this.formSerializer)
            }
        }
        return i || r ? (t.setContentType("application/json", !1), Au(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || Se.transitional,
            n = t && t.forcedJSONParsing,
            r = this.responseType === "json";
        if (e && y.isString(e) && (n && !this.responseType || r)) {
            const i = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e)
            } catch (o) {
                if (i) throw o.name === "SyntaxError" ? D.from(o, D.ERR_BAD_RESPONSE, this, null, this.response) : o
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: jt.classes.FormData,
        Blob: jt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Se.headers[e] = {}
});
const Cu = y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Tu = e => {
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(o) {
            i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && Cu[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Yi = Symbol("internals");

function Oe(e) {
    return e && String(e).trim().toLowerCase()
}

function rn(e) {
    return e === !1 || e == null ? e : y.isArray(e) ? e.map(rn) : String(e)
}

function $u(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const Iu = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Jn(e, t, n, r, i) {
    if (y.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), !!y.isString(t)) {
        if (y.isString(r)) return t.indexOf(r) !== -1;
        if (y.isRegExp(r)) return r.test(t)
    }
}

function Lu(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function Bu(e, t) {
    const n = y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    })
}
class ht {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;

        function o(a, l, u) {
            const c = Oe(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const d = y.findKey(i, c);
            (!d || i[d] === void 0 || u === !0 || u === void 0 && i[d] !== !1) && (i[d || l] = rn(a))
        }
        const s = (a, l) => y.forEach(a, (u, c) => o(u, c, l));
        return y.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : y.isString(t) && (t = t.trim()) && !Iu(t) ? s(Tu(t), n) : t != null && o(n, t, r), this
    }
    get(t, n) {
        if (t = Oe(t), t) {
            const r = y.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return $u(i);
                if (y.isFunction(n)) return n.call(this, i, r);
                if (y.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Oe(t), t) {
            const r = y.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Jn(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;

        function o(s) {
            if (s = Oe(s), s) {
                const a = y.findKey(r, s);
                a && (!n || Jn(r, r[a], a, n)) && (delete r[a], i = !0)
            }
        }
        return y.isArray(t) ? t.forEach(o) : o(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--;) {
            const o = n[r];
            (!t || Jn(this, this[o], o, t, !0)) && (delete this[o], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            r = {};
        return y.forEach(this, (i, o) => {
            const s = y.findKey(r, o);
            if (s) {
                n[s] = rn(i), delete n[o];
                return
            }
            const a = t ? Lu(o) : String(o).trim();
            a !== o && delete n[o], n[a] = rn(i), r[a] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return y.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && y.isArray(r) ? r.join(", ") : r)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)), r
    }
    static accessor(t) {
        const n = (this[Yi] = this[Yi] = {
                accessors: {}
            }).accessors,
            r = this.prototype;

        function i(o) {
            const s = Oe(o);
            n[s] || (Bu(r, o), n[s] = !0)
        }
        return y.isArray(t) ? t.forEach(i) : i(t), this
    }
}
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), y.reduceDescriptors(ht.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}), y.freezeMethods(ht);

function Kn(e, t) {
    const n = this || Se,
        r = t || n,
        i = ht.from(r.headers);
    let o = r.data;
    return y.forEach(e, function(s) {
        o = s.call(n, o, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), o
}

function Qi(e) {
    return !!(e && e.__CANCEL__)
}

function je(e, t, n) {
    D.call(this, e != null ? e : "canceled", D.ERR_CANCELED, t, n), this.name = "CanceledError"
}
y.inherits(je, D, {
    __CANCEL__: !0
});

function Nu(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new D("Request failed with status code " + n.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const Du = jt.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        y.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), y.isString(r) && s.push("path=" + r), y.isString(i) && s.push("domain=" + i), o === !0 && s.push("secure"), document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function Fu(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function Uu(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Zi(e, t) {
    return e && !Fu(t) ? Uu(e, t) : t
}
const Hu = jt.hasStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
    let n;

    function r(i) {
        let o = i;
        return e && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
        }
    }
    return n = r(window.location.href),
        function(i) {
            const o = y.isString(i) ? r(i) : i;
            return o.protocol === n.protocol && o.host === n.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function Mu(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function Wu(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        o = 0,
        s;
    return t = t !== void 0 ? t : 1e3,
        function(a) {
            const l = Date.now(),
                u = r[o];
            s || (s = l), n[i] = a, r[i] = l;
            let c = o,
                d = 0;
            for (; c !== i;) d += n[c++], c = c % e;
            if (i = (i + 1) % e, i === o && (o = (o + 1) % e), l - s < t) return;
            const m = u && l - u;
            return m ? Math.round(d * 1e3 / m) : void 0
        }
}

function to(e, t) {
    let n = 0;
    const r = Wu(50, 250);
    return i => {
        const o = i.loaded,
            s = i.lengthComputable ? i.total : void 0,
            a = o - n,
            l = r(a),
            u = o <= s;
        n = o;
        const c = {
            loaded: o,
            total: s,
            progress: s ? o / s : void 0,
            bytes: a,
            rate: l || void 0,
            estimated: l && s && u ? (s - o) / l : void 0,
            event: i
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}
const qu = typeof XMLHttpRequest < "u",
    Gu = qu && function(e) {
        return new Promise(function(t, n) {
            let r = e.data;
            const i = ht.from(e.headers).normalize();
            let {
                responseType: o,
                withXSRFToken: s
            } = e, a;

            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
            }
            let u;
            if (y.isFormData(r)) {
                if (jt.hasStandardBrowserEnv || jt.hasStandardBrowserWebWorkerEnv) i.setContentType(!1);
                else if ((u = i.getContentType()) !== !1) {
                    const [b, ...w] = u ? u.split(";").map(x => x.trim()).filter(Boolean) : [];
                    i.setContentType([b || "multipart/form-data", ...w].join("; "))
                }
            }
            let c = new XMLHttpRequest;
            if (e.auth) {
                const b = e.auth.username || "",
                    w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                i.set("Authorization", "Basic " + btoa(b + ":" + w))
            }
            const d = Zi(e.baseURL, e.url);
            c.open(e.method.toUpperCase(), Gi(d, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;

            function m() {
                if (!c) return;
                const b = ht.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
                    w = {
                        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
                        status: c.status,
                        statusText: c.statusText,
                        headers: b,
                        config: e,
                        request: c
                    };
                Nu(function(x) {
                    t(x), l()
                }, function(x) {
                    n(x), l()
                }, w), c = null
            }
            if ("onloadend" in c ? c.onloadend = m : c.onreadystatechange = function() {
                    !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m)
                }, c.onabort = function() {
                    c && (n(new D("Request aborted", D.ECONNABORTED, e, c)), c = null)
                }, c.onerror = function() {
                    n(new D("Network Error", D.ERR_NETWORK, e, c)), c = null
                }, c.ontimeout = function() {
                    let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const w = e.transitional || Ji;
                    e.timeoutErrorMessage && (b = e.timeoutErrorMessage), n(new D(b, w.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, e, c)), c = null
                }, jt.hasStandardBrowserEnv && (s && y.isFunction(s) && (s = s(e)), s || s !== !1 && Hu(d))) {
                const b = e.xsrfHeaderName && e.xsrfCookieName && Du.read(e.xsrfCookieName);
                b && i.set(e.xsrfHeaderName, b)
            }
            r === void 0 && i.setContentType(null), "setRequestHeader" in c && y.forEach(i.toJSON(), function(b, w) {
                c.setRequestHeader(w, b)
            }), y.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", to(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", to(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = b => {
                c && (n(!b || b.type ? new je(null, e, c) : b), c.abort(), c = null)
            }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
            const g = Mu(d);
            if (g && jt.protocols.indexOf(g) === -1) {
                n(new D("Unsupported protocol " + g + ":", D.ERR_BAD_REQUEST, e));
                return
            }
            c.send(r || null)
        })
    },
    Xn = {
        http: bu,
        xhr: Gu
    };
y.forEach(Xn, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (n) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const eo = e => `- ${e}`,
    Vu = e => y.isFunction(e) || e === null || e === !1,
    no = {
        getAdapter: e => {
            e = y.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, r;
            const i = {};
            for (let o = 0; o < t; o++) {
                n = e[o];
                let s;
                if (r = n, !Vu(n) && (r = Xn[(s = String(n)).toLowerCase()], r === void 0)) throw new D(`Unknown adapter '${s}'`);
                if (r) break;
                i[s || "#" + o] = r
            }
            if (!r) {
                const o = Object.entries(i).map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                let s = t ? o.length > 1 ? `since :
` + o.map(eo).join(`
`) : " " + eo(o[0]) : "as no adapter specified";
                throw new D("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: Xn
    };

function Yn(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new je(null, e)
}

function ro(e) {
    return Yn(e), e.headers = ht.from(e.headers), e.data = Kn.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), no.getAdapter(e.adapter || Se.adapter)(e).then(function(t) {
        return Yn(e), t.data = Kn.call(e, e.transformResponse, t), t.headers = ht.from(t.headers), t
    }, function(t) {
        return Qi(t) || (Yn(e), t && t.response && (t.response.data = Kn.call(e, e.transformResponse, t.response), t.response.headers = ht.from(t.response.headers))), Promise.reject(t)
    })
}
const io = e => e instanceof ht ? { ...e
} : e;

function Yt(e, t) {
    t = t || {};
    const n = {};

    function r(u, c, d) {
        return y.isPlainObject(u) && y.isPlainObject(c) ? y.merge.call({
            caseless: d
        }, u, c) : y.isPlainObject(c) ? y.merge({}, c) : y.isArray(c) ? c.slice() : c
    }

    function i(u, c, d) {
        if (y.isUndefined(c)) {
            if (!y.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, c, d)
    }

    function o(u, c) {
        if (!y.isUndefined(c)) return r(void 0, c)
    }

    function s(u, c) {
        if (y.isUndefined(c)) {
            if (!y.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }

    function a(u, c, d) {
        if (d in t) return r(u, c);
        if (d in e) return r(void 0, u)
    }
    const l = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (u, c) => i(io(u), io(c), !0)
    };
    return y.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
        const c = l[u] || i,
            d = c(e[u], t[u], u);
        y.isUndefined(d) && c !== a || (n[u] = d)
    }), n
}
const oo = "1.6.8",
    Qn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Qn[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const so = {};
Qn.transitional = function(e, t, n) {
    function r(i, o) {
        return "[Axios v" + oo + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "")
    }
    return (i, o, s) => {
        if (e === !1) throw new D(r(o, " has been removed" + (t ? " in " + t : "")), D.ERR_DEPRECATED);
        return t && !so[o] && (so[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(i, o, s) : !0
    }
};

function Ju(e, t, n) {
    if (typeof e != "object") throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0;) {
        const o = r[i],
            s = t[o];
        if (s) {
            const a = e[o],
                l = a === void 0 || s(a, o, e);
            if (l !== !0) throw new D("option " + o + " must be " + l, D.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new D("Unknown option " + o, D.ERR_BAD_OPTION)
    }
}
const Zn = {
        assertOptions: Ju,
        validators: Qn
    },
    It = Zn.validators;
class Ht {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Vi,
            response: new Vi
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Yt(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: i,
            headers: o
        } = n;
        r !== void 0 && Zn.assertOptions(r, {
            silentJSONParsing: It.transitional(It.boolean),
            forcedJSONParsing: It.transitional(It.boolean),
            clarifyTimeoutError: It.transitional(It.boolean)
        }, !1), i != null && (y.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : Zn.assertOptions(i, {
            encode: It.function,
            serialize: It.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && y.merge(o.common, o[n.method]);
        o && y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete o[b]
        }), n.headers = ht.concat(s, o);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(b) {
            typeof b.runWhen == "function" && b.runWhen(n) === !1 || (l = l && b.synchronous, a.unshift(b.fulfilled, b.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(b) {
            u.push(b.fulfilled, b.rejected)
        });
        let c, d = 0,
            m;
        if (!l) {
            const b = [ro.bind(this), void 0];
            for (b.unshift.apply(b, a), b.push.apply(b, u), m = b.length, c = Promise.resolve(n); d < m;) c = c.then(b[d++], b[d++]);
            return c
        }
        m = a.length;
        let g = n;
        for (d = 0; d < m;) {
            const b = a[d++],
                w = a[d++];
            try {
                g = b(g)
            } catch (x) {
                w.call(this, x);
                break
            }
        }
        try {
            c = ro.call(this, g)
        } catch (b) {
            return Promise.reject(b)
        }
        for (d = 0, m = u.length; d < m;) c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(t) {
        t = Yt(this.defaults, t);
        const n = Zi(t.baseURL, t.url);
        return Gi(n, t.params, t.paramsSerializer)
    }
}
y.forEach(["delete", "get", "head", "options"], function(e) {
    Ht.prototype[e] = function(t, n) {
        return this.request(Yt(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
}), y.forEach(["post", "put", "patch"], function(e) {
    function t(n) {
        return function(r, i, o) {
            return this.request(Yt(o || {}, {
                method: e,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: i
            }))
        }
    }
    Ht.prototype[e] = t(), Ht.prototype[e + "Form"] = t(!0)
});
class Si {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        });
        const r = this;
        this.promise.then(i => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](i);
            r._listeners = null
        }), this.promise.then = i => {
            let o;
            const s = new Promise(a => {
                r.subscribe(a), o = a
            }).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }, s
        }, t(function(i, o, s) {
            r.reason || (r.reason = new je(i, o, s), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Si(function(n) {
                t = n
            }),
            cancel: t
        }
    }
}

function Ku(e) {
    return function(t) {
        return e.apply(null, t)
    }
}

function Xu(e) {
    return y.isObject(e) && e.isAxiosError === !0
}
const tr = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(tr).forEach(([e, t]) => {
    tr[t] = e
});

function ao(e) {
    const t = new Ht(e),
        n = Ri(Ht.prototype.request, t);
    return y.extend(n, Ht.prototype, t, {
        allOwnKeys: !0
    }), y.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(r) {
        return ao(Yt(e, r))
    }, n
}
const X = ao(Se);
X.Axios = Ht, X.CanceledError = je, X.CancelToken = Si, X.isCancel = Qi, X.VERSION = oo, X.toFormData = nn, X.AxiosError = D, X.Cancel = X.CanceledError, X.all = function(e) {
    return Promise.all(e)
}, X.spread = Ku, X.isAxiosError = Xu, X.mergeConfig = Yt, X.AxiosHeaders = ht, X.formToJSON = e => Xi(y.isHTMLForm(e) ? new FormData(e) : e), X.getAdapter = no.getAdapter, X.HttpStatusCode = tr, X.default = X;
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Lt(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Yu() {
    this.__data__ = [], this.size = 0
}
var Qu = Yu;

function Zu(e, t) {
    return e === t || e !== e && t !== t
}
var Ee = Zu,
    tc = Ee;

function ec(e, t) {
    for (var n = e.length; n--;)
        if (tc(e[n][0], t)) return n;
    return -1
}
var on = ec,
    nc = on,
    rc = Array.prototype,
    ic = rc.splice;

function oc(e) {
    var t = this.__data__,
        n = nc(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : ic.call(t, n, 1), --this.size, !0
}
var sc = oc,
    ac = on;

function lc(e) {
    var t = this.__data__,
        n = ac(t, e);
    return n < 0 ? void 0 : t[n][1]
}
var uc = lc,
    cc = on;

function dc(e) {
    return cc(this.__data__, e) > -1
}
var hc = dc,
    pc = on;

function fc(e, t) {
    var n = this.__data__,
        r = pc(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
}
var mc = fc,
    gc = Qu,
    bc = sc,
    _c = uc,
    yc = hc,
    vc = mc;

function Qt(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
Qt.prototype.clear = gc, Qt.prototype.delete = bc, Qt.prototype.get = _c, Qt.prototype.has = yc, Qt.prototype.set = vc;
var sn = Qt,
    wc = sn;

function xc() {
    this.__data__ = new wc, this.size = 0
}
var kc = xc;

function Sc(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}
var Oc = Sc;

function jc(e) {
    return this.__data__.get(e)
}
var zc = jc;

function Ec(e) {
    return this.__data__.has(e)
}
var Pc = Ec,
    Rc = typeof ze == "object" && ze && ze.Object === Object && ze,
    lo = Rc,
    Ac = lo,
    Cc = typeof self == "object" && self && self.Object === Object && self,
    Tc = Ac || Cc || Function("return this")(),
    zt = Tc,
    $c = zt,
    Ic = $c.Symbol,
    Zt = Ic,
    uo = Zt,
    co = Object.prototype,
    Lc = co.hasOwnProperty,
    Bc = co.toString,
    Pe = uo ? uo.toStringTag : void 0;

function Nc(e) {
    var t = Lc.call(e, Pe),
        n = e[Pe];
    try {
        e[Pe] = void 0;
        var r = !0
    } catch (o) {}
    var i = Bc.call(e);
    return r && (t ? e[Pe] = n : delete e[Pe]), i
}
var Dc = Nc,
    Fc = Object.prototype,
    Uc = Fc.toString;

function Hc(e) {
    return Uc.call(e)
}
var Mc = Hc,
    ho = Zt,
    Wc = Dc,
    qc = Mc,
    Gc = "[object Null]",
    Vc = "[object Undefined]",
    po = ho ? ho.toStringTag : void 0;

function Jc(e) {
    return e == null ? e === void 0 ? Vc : Gc : po && po in Object(e) ? Wc(e) : qc(e)
}
var te = Jc;

function Kc(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Rt = Kc,
    Xc = te,
    Yc = Rt,
    Qc = "[object AsyncFunction]",
    Zc = "[object Function]",
    td = "[object GeneratorFunction]",
    ed = "[object Proxy]";

function nd(e) {
    if (!Yc(e)) return !1;
    var t = Xc(e);
    return t == Zc || t == td || t == Qc || t == ed
}
var er = nd,
    rd = zt,
    id = rd["__core-js_shared__"],
    od = id,
    nr = od,
    fo = function() {
        var e = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

function sd(e) {
    return !!fo && fo in e
}
var ad = sd,
    ld = Function.prototype,
    ud = ld.toString;

function cd(e) {
    if (e != null) {
        try {
            return ud.call(e)
        } catch (t) {}
        try {
            return e + ""
        } catch (t) {}
    }
    return ""
}
var mo = cd,
    dd = er,
    hd = ad,
    pd = Rt,
    fd = mo,
    md = /[\\^$.*+?()[\]{}|]/g,
    gd = /^\[object .+?Constructor\]$/,
    bd = Function.prototype,
    _d = Object.prototype,
    yd = bd.toString,
    vd = _d.hasOwnProperty,
    wd = RegExp("^" + yd.call(vd).replace(md, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function xd(e) {
    if (!pd(e) || hd(e)) return !1;
    var t = dd(e) ? wd : gd;
    return t.test(fd(e))
}
var kd = xd;

function Sd(e, t) {
    return e == null ? void 0 : e[t]
}
var Od = Sd,
    jd = kd,
    zd = Od;

function Ed(e, t) {
    var n = zd(e, t);
    return jd(n) ? n : void 0
}
var Mt = Ed,
    Pd = Mt,
    Rd = zt,
    Ad = Pd(Rd, "Map"),
    rr = Ad,
    Cd = Mt,
    Td = Cd(Object, "create"),
    an = Td,
    go = an;

function $d() {
    this.__data__ = go ? go(null) : {}, this.size = 0
}
var Id = $d;

function Ld(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}
var Bd = Ld,
    Nd = an,
    Dd = "__lodash_hash_undefined__",
    Fd = Object.prototype,
    Ud = Fd.hasOwnProperty;

function Hd(e) {
    var t = this.__data__;
    if (Nd) {
        var n = t[e];
        return n === Dd ? void 0 : n
    }
    return Ud.call(t, e) ? t[e] : void 0
}
var Md = Hd,
    Wd = an,
    qd = Object.prototype,
    Gd = qd.hasOwnProperty;

function Vd(e) {
    var t = this.__data__;
    return Wd ? t[e] !== void 0 : Gd.call(t, e)
}
var Jd = Vd,
    Kd = an,
    Xd = "__lodash_hash_undefined__";

function Yd(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Kd && t === void 0 ? Xd : t, this
}
var Qd = Yd,
    Zd = Id,
    th = Bd,
    eh = Md,
    nh = Jd,
    rh = Qd;

function ee(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ee.prototype.clear = Zd, ee.prototype.delete = th, ee.prototype.get = eh, ee.prototype.has = nh, ee.prototype.set = rh;
var ih = ee,
    bo = ih,
    oh = sn,
    sh = rr;

function ah() {
    this.size = 0, this.__data__ = {
        hash: new bo,
        map: new(sh || oh),
        string: new bo
    }
}
var lh = ah;

function uh(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var ch = uh,
    dh = ch;

function hh(e, t) {
    var n = e.__data__;
    return dh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
var ln = hh,
    ph = ln;

function fh(e) {
    var t = ph(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}
var mh = fh,
    gh = ln;

function bh(e) {
    return gh(this, e).get(e)
}
var _h = bh,
    yh = ln;

function vh(e) {
    return yh(this, e).has(e)
}
var wh = vh,
    xh = ln;

function kh(e, t) {
    var n = xh(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}
var Sh = kh,
    Oh = lh,
    jh = mh,
    zh = _h,
    Eh = wh,
    Ph = Sh;

function ne(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ne.prototype.clear = Oh, ne.prototype.delete = jh, ne.prototype.get = zh, ne.prototype.has = Eh, ne.prototype.set = Ph;
var ir = ne,
    Rh = sn,
    Ah = rr,
    Ch = ir,
    Th = 200;

function $h(e, t) {
    var n = this.__data__;
    if (n instanceof Rh) {
        var r = n.__data__;
        if (!Ah || r.length < Th - 1) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Ch(r)
    }
    return n.set(e, t), this.size = n.size, this
}
var Ih = $h,
    Lh = sn,
    Bh = kc,
    Nh = Oc,
    Dh = zc,
    Fh = Pc,
    Uh = Ih;

function re(e) {
    var t = this.__data__ = new Lh(e);
    this.size = t.size
}
re.prototype.clear = Bh, re.prototype.delete = Nh, re.prototype.get = Dh, re.prototype.has = Fh, re.prototype.set = Uh;
var or = re,
    Hh = Mt,
    Mh = function() {
        try {
            var e = Hh(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (t) {}
    }(),
    _o = Mh,
    yo = _o;

function Wh(e, t, n) {
    t == "__proto__" && yo ? yo(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var sr = Wh,
    qh = sr,
    Gh = Ee;

function Vh(e, t, n) {
    (n !== void 0 && !Gh(e[t], n) || n === void 0 && !(t in e)) && qh(e, t, n)
}
var vo = Vh;

function Jh(e) {
    return function(t, n, r) {
        for (var i = -1, o = Object(t), s = r(t), a = s.length; a--;) {
            var l = s[e ? a : ++i];
            if (n(o[l], l, o) === !1) break
        }
        return t
    }
}
var Kh = Jh,
    Xh = Kh,
    Yh = Xh(),
    Qh = Yh,
    un = {
        exports: {}
    };
un.exports,
    function(e, t) {
        var n = zt,
            r = t && !t.nodeType && t,
            i = r && !0 && e && !e.nodeType && e,
            o = i && i.exports === r,
            s = o ? n.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function l(u, c) {
            if (c) return u.slice();
            var d = u.length,
                m = a ? a(d) : new u.constructor(d);
            return u.copy(m), m
        }
        e.exports = l
    }(un, un.exports);
var wo = un.exports,
    Zh = zt,
    tp = Zh.Uint8Array,
    xo = tp,
    ko = xo;

function ep(e) {
    var t = new e.constructor(e.byteLength);
    return new ko(t).set(new ko(e)), t
}
var ar = ep,
    np = ar;

function rp(e, t) {
    var n = t ? np(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var So = rp;

function ip(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}
var lr = ip,
    op = Rt,
    Oo = Object.create,
    sp = function() {
        function e() {}
        return function(t) {
            if (!op(t)) return {};
            if (Oo) return Oo(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }(),
    ap = sp;

function lp(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var jo = lp,
    up = jo,
    cp = up(Object.getPrototypeOf, Object),
    ur = cp,
    dp = Object.prototype;

function hp(e) {
    var t = e && e.constructor,
        n = typeof t == "function" && t.prototype || dp;
    return e === n
}
var cr = hp,
    pp = ap,
    fp = ur,
    mp = cr;

function gp(e) {
    return typeof e.constructor == "function" && !mp(e) ? pp(fp(e)) : {}
}
var zo = gp;

function bp(e) {
    return e != null && typeof e == "object"
}
var At = bp,
    _p = te,
    yp = At,
    vp = "[object Arguments]";

function wp(e) {
    return yp(e) && _p(e) == vp
}
var xp = wp,
    Eo = xp,
    kp = At,
    Po = Object.prototype,
    Sp = Po.hasOwnProperty,
    Op = Po.propertyIsEnumerable,
    jp = Eo(function() {
        return arguments
    }()) ? Eo : function(e) {
        return kp(e) && Sp.call(e, "callee") && !Op.call(e, "callee")
    },
    cn = jp,
    zp = Array.isArray,
    Et = zp,
    Ep = 9007199254740991;

function Pp(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ep
}
var dr = Pp,
    Rp = er,
    Ap = dr;

function Cp(e) {
    return e != null && Ap(e.length) && !Rp(e)
}
var dn = Cp,
    Tp = dn,
    $p = At;

function Ip(e) {
    return $p(e) && Tp(e)
}
var Lp = Ip,
    hn = {
        exports: {}
    };

function Bp() {
    return !1
}
var Np = Bp;
hn.exports,
    function(e, t) {
        var n = zt,
            r = Np,
            i = t && !t.nodeType && t,
            o = i && !0 && e && !e.nodeType && e,
            s = o && o.exports === i,
            a = s ? n.Buffer : void 0,
            l = a ? a.isBuffer : void 0,
            u = l || r;
        e.exports = u
    }(hn, hn.exports);
var pn = hn.exports,
    Dp = te,
    Fp = ur,
    Up = At,
    Hp = "[object Object]",
    Mp = Function.prototype,
    Wp = Object.prototype,
    Ro = Mp.toString,
    qp = Wp.hasOwnProperty,
    Gp = Ro.call(Object);

function Vp(e) {
    if (!Up(e) || Dp(e) != Hp) return !1;
    var t = Fp(e);
    if (t === null) return !0;
    var n = qp.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Ro.call(n) == Gp
}
var Ao = Vp,
    Jp = te,
    Kp = dr,
    Xp = At,
    Yp = "[object Arguments]",
    Qp = "[object Array]",
    Zp = "[object Boolean]",
    tf = "[object Date]",
    ef = "[object Error]",
    nf = "[object Function]",
    rf = "[object Map]",
    of = "[object Number]",
    sf = "[object Object]",
    af = "[object RegExp]",
    lf = "[object Set]",
    uf = "[object String]",
    cf = "[object WeakMap]",
    df = "[object ArrayBuffer]",
    hf = "[object DataView]",
    pf = "[object Float32Array]",
    ff = "[object Float64Array]",
    mf = "[object Int8Array]",
    gf = "[object Int16Array]",
    bf = "[object Int32Array]",
    _f = "[object Uint8Array]",
    yf = "[object Uint8ClampedArray]",
    vf = "[object Uint16Array]",
    wf = "[object Uint32Array]",
    G = {};
G[pf] = G[ff] = G[mf] = G[gf] = G[bf] = G[_f] = G[yf] = G[vf] = G[wf] = !0, G[Yp] = G[Qp] = G[df] = G[Zp] = G[hf] = G[tf] = G[ef] = G[nf] = G[rf] = G[ of ] = G[sf] = G[af] = G[lf] = G[uf] = G[cf] = !1;

function xf(e) {
    return Xp(e) && Kp(e.length) && !!G[Jp(e)]
}
var kf = xf;

function Sf(e) {
    return function(t) {
        return e(t)
    }
}
var fn = Sf,
    mn = {
        exports: {}
    };
mn.exports,
    function(e, t) {
        var n = lo,
            r = t && !t.nodeType && t,
            i = r && !0 && e && !e.nodeType && e,
            o = i && i.exports === r,
            s = o && n.process,
            a = function() {
                try {
                    var l = i && i.require && i.require("util").types;
                    return l || s && s.binding && s.binding("util")
                } catch (u) {}
            }();
        e.exports = a
    }(mn, mn.exports);
var hr = mn.exports,
    Of = kf,
    jf = fn,
    Co = hr,
    To = Co && Co.isTypedArray,
    zf = To ? jf(To) : Of,
    pr = zf;

function Ef(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
}
var $o = Ef,
    Pf = sr,
    Rf = Ee,
    Af = Object.prototype,
    Cf = Af.hasOwnProperty;

function Tf(e, t, n) {
    var r = e[t];
    (!(Cf.call(e, t) && Rf(r, n)) || n === void 0 && !(t in e)) && Pf(e, t, n)
}
var fr = Tf,
    $f = fr,
    If = sr;

function Lf(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s;) {
        var a = t[o],
            l = r ? r(n[a], e[a], a, n, e) : void 0;
        l === void 0 && (l = e[a]), i ? If(n, a, l) : $f(n, a, l)
    }
    return n
}
var ie = Lf;

function Bf(e, t) {
    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
    return r
}
var Nf = Bf,
    Df = 9007199254740991,
    Ff = /^(?:0|[1-9]\d*)$/;

function Uf(e, t) {
    var n = typeof e;
    return t = t != null ? t : Df, !!t && (n == "number" || n != "symbol" && Ff.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var gn = Uf,
    Hf = Nf,
    Mf = cn,
    Wf = Et,
    qf = pn,
    Gf = gn,
    Vf = pr,
    Jf = Object.prototype,
    Kf = Jf.hasOwnProperty;

function Xf(e, t) {
    var n = Wf(e),
        r = !n && Mf(e),
        i = !n && !r && qf(e),
        o = !n && !r && !i && Vf(e),
        s = n || r || i || o,
        a = s ? Hf(e.length, String) : [],
        l = a.length;
    for (var u in e)(t || Kf.call(e, u)) && !(s && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Gf(u, l))) && a.push(u);
    return a
}
var Io = Xf;

function Yf(e) {
    var t = [];
    if (e != null)
        for (var n in Object(e)) t.push(n);
    return t
}
var Qf = Yf,
    Zf = Rt,
    tm = cr,
    em = Qf,
    nm = Object.prototype,
    rm = nm.hasOwnProperty;

function im(e) {
    if (!Zf(e)) return em(e);
    var t = tm(e),
        n = [];
    for (var r in e) r == "constructor" && (t || !rm.call(e, r)) || n.push(r);
    return n
}
var om = im,
    sm = Io,
    am = om,
    lm = dn;

function um(e) {
    return lm(e) ? sm(e, !0) : am(e)
}
var Re = um,
    cm = ie,
    dm = Re;

function hm(e) {
    return cm(e, dm(e))
}
var pm = hm,
    Lo = vo,
    fm = wo,
    mm = So,
    gm = lr,
    bm = zo,
    Bo = cn,
    No = Et,
    _m = Lp,
    ym = pn,
    vm = er,
    wm = Rt,
    xm = Ao,
    km = pr,
    Do = $o,
    Sm = pm;

function Om(e, t, n, r, i, o, s) {
    var a = Do(e, n),
        l = Do(t, n),
        u = s.get(l);
    if (u) {
        Lo(e, n, u);
        return
    }
    var c = o ? o(a, l, n + "", e, t, s) : void 0,
        d = c === void 0;
    if (d) {
        var m = No(l),
            g = !m && ym(l),
            b = !m && !g && km(l);
        c = l, m || g || b ? No(a) ? c = a : _m(a) ? c = gm(a) : g ? (d = !1, c = fm(l, !0)) : b ? (d = !1, c = mm(l, !0)) : c = [] : xm(l) || Bo(l) ? (c = a, Bo(a) ? c = Sm(a) : (!wm(a) || vm(a)) && (c = bm(l))) : d = !1
    }
    d && (s.set(l, c), i(c, l, r, o, s), s.delete(l)), Lo(e, n, c)
}
var jm = Om,
    zm = or,
    Em = vo,
    Pm = Qh,
    Rm = jm,
    Am = Rt,
    Cm = Re,
    Tm = $o;

function Fo(e, t, n, r, i) {
    e !== t && Pm(t, function(o, s) {
        if (i || (i = new zm), Am(o)) Rm(e, t, s, n, Fo, r, i);
        else {
            var a = r ? r(Tm(e, s), o, s + "", e, t, i) : void 0;
            a === void 0 && (a = o), Em(e, s, a)
        }
    }, Cm)
}
var $m = Fo;

function Im(e) {
    return e
}
var Uo = Im;

function Lm(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}
var Bm = Lm,
    Nm = Bm,
    Ho = Math.max;

function Dm(e, t, n) {
    return t = Ho(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, o = Ho(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(s), Nm(e, this, a)
        }
}
var Mo = Dm;

function Fm(e) {
    return function() {
        return e
    }
}
var Um = Fm,
    Hm = Um,
    Wo = _o,
    Mm = Uo,
    Wm = Wo ? function(e, t) {
        return Wo(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Hm(t),
            writable: !0
        })
    } : Mm,
    qm = Wm,
    Gm = 800,
    Vm = 16,
    Jm = Date.now;

function Km(e) {
    var t = 0,
        n = 0;
    return function() {
        var r = Jm(),
            i = Vm - (r - n);
        if (n = r, i > 0) {
            if (++t >= Gm) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}
var Xm = Km,
    Ym = qm,
    Qm = Xm,
    Zm = Qm(Ym),
    qo = Zm,
    tg = Uo,
    eg = Mo,
    ng = qo;

function rg(e, t) {
    return ng(eg(e, t, tg), e + "")
}
var ig = rg,
    og = Ee,
    sg = dn,
    ag = gn,
    lg = Rt;

function ug(e, t, n) {
    if (!lg(n)) return !1;
    var r = typeof t;
    return (r == "number" ? sg(n) && ag(t, n.length) : r == "string" && t in n) ? og(n[t], e) : !1
}
var cg = ug,
    dg = ig,
    hg = cg;

function pg(e) {
    return dg(function(t, n) {
        var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : void 0,
            s = i > 2 ? n[2] : void 0;
        for (o = e.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && hg(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
            var a = n[r];
            a && e(t, a, r, o)
        }
        return t
    })
}
var fg = pg,
    mg = $m,
    gg = fg,
    bg = gg(function(e, t, n) {
        mg(e, t, n)
    }),
    _g = bg;
const I = Lt(_g);

function Go(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = Go(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Ct() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Go(e)) && (r && (r += " "), r += t);
    return r
}
const yg = "_editButton_169xd_1",
    vg = "_group_169xd_12",
    wg = "_buttonizerButtonSpoof_169xd_16",
    xg = "_opened_169xd_22",
    kg = "_buttonizerEditTooltip_169xd_35",
    Sg = "_buttonizerEditIcon_169xd_69",
    Og = "_showEditButton_169xd_89",
    J = {
        editButton: yg,
        group: vg,
        buttonizerButtonSpoof: wg,
        opened: xg,
        buttonizerEditTooltip: kg,
        buttonizerEditIcon: Sg,
        showEditButton: Og
    };
class gt {
    constructor() {
        this.subscriptions = [], this.name = "unknown"
    }
    subscribe(t) {
        if (this.subscriptions.indexOf(t) > 0) return console.error(`This object is already subscribed to the ${this.name} extension.`), !1;
        this.subscriptions.push(t), this.onSubscribe(t)
    }
    unsubscribe(t) {
        let n = this.subscriptions.indexOf(t);
        if (n === -1) return console.error(`This object is not subscribed to the ${this.name} extension.`), !1;
        this.onUnsubscribe(t), this.subscriptions.splice(n, 1)
    }
    onSubscribe(t) {}
    onUnsubscribe(t) {}
}
const jg = "_itemIsSelected_1fclv_1",
    zg = "_itemIsNotSelected_1fclv_5",
    Eg = "_buttonIsNotSelected_1fclv_13",
    Tt = {
        itemIsSelected: jg,
        itemIsNotSelected: zg,
        buttonIsNotSelected: Eg
    };
class Pg extends gt {
    constructor() {
        super(), super.name = "highlight a group or button when editing", this.init(), this.groupId = null, this.buttonId = null, this.buttonsPreviouslyShown = [], this.groupsPreviouslyAltered = [], this.nonRenderedElements = {}, this.currentTimeout = setTimeout(() => {}, 0)
    }
    init() {
        window.addEventListener("message", ({
            data: t
        }) => {
            const {
                eventType: n,
                messageType: r,
                message: i
            } = t;
            n === "buttonizer" && r === "editor_selected_item" && this.notify(i)
        })
    }
    getGroupId() {
        return this.groupId
    }
    getButtonId() {
        return this.buttonId
    }
    getPreviouslyAlteredGroups() {
        return this.groupsPreviouslyAltered
    }
    watchPotentialAlteredGroup(t) {
        this.groupsPreviouslyAltered.indexOf(t) === -1 && this.groupsPreviouslyAltered.push(t)
    }
    addNonRenderedElements(t, n = null) {
        typeof this.nonRenderedElements[t] > "u" && (this.nonRenderedElements[t] = []), n !== null && this.nonRenderedElements[t].indexOf(n) === -1 && this.nonRenderedElements[t].push(n)
    }
    shouldRerenderGroup(t, n = null, r = !1) {
        return typeof this.nonRenderedElements[t] > "u" ? !1 : this.nonRenderedElements[t].length === 0 ? (this.watchPotentialAlteredGroup(t), r === !1) : n && this.nonRenderedElements[t].indexOf(n) >= 0 && this.buttonsPreviouslyShown.indexOf(n) === -1 ? (this.buttonsPreviouslyShown.push(n), this.watchPotentialAlteredGroup(t), !0) : this.buttonsPreviouslyShown.length >= 1 && this.buttonsPreviouslyShown.indexOf(n) === -1 ? (this.buttonsPreviouslyShown = [], this.watchPotentialAlteredGroup(t), !0) : (r === !1 && this.watchPotentialAlteredGroup(t), r === !1)
    }
    hasAlteredElements(t) {
        if (t === this.groupId) return !1;
        const n = this.groupsPreviouslyAltered.indexOf(t);
        return n >= 0 ? (this.groupsPreviouslyAltered.splice(n, 1), !0) : !1
    }
    onSubscribe(t) {
        this.checkState(t)
    }
    notify({
        groupId: t = null,
        buttonId: n = null
    }) {
        this.groupId = t, this.buttonId = n, this.subscriptions.forEach(r => this.checkState(r))
    }
    checkState(t) {
        if (t.element && t.element.classList) {
            const n = this.getGroupId() === t.data.id;
            this.groupId === null ? (t.element.classList.remove(Tt.itemIsNotSelected), t.element.classList.remove(J.showEditButton)) : n && (t.element.classList.contains(Tt.itemIsNotSelected) || !t.element.classList.contains(J.showEditButton)) ? (t.element.classList.remove(Tt.itemIsNotSelected), t.element.classList.add(J.showEditButton)) : !n && (!t.element.classList.contains(Tt.itemIsNotSelected) || t.element.classList.contains(J.showEditButton)) && (t.element.classList.add(Tt.itemIsNotSelected), t.element.classList.remove(J.showEditButton)), this.updateGroupButtons(t, n)
        }
    }
    updateGroupButtons(t, n) {
        Object.keys(t.buttons).map(r => {
            const i = t.buttons[r],
                o = this.getButtonId() === r;
            this.buttonId === null || !n || o && i.element.classList.contains(Tt.buttonIsNotSelected) ? i.element.classList.remove(Tt.buttonIsNotSelected) : !o && !i.element.classList.contains(Tt.buttonIsNotSelected) && i.element.classList.add(Tt.buttonIsNotSelected)
        })
    }
    createTimeout(t) {
        clearTimeout(this.currentTimeout), this.currentTimeout = setTimeout(() => t(), 250)
    }
}
const bt = new Pg;

function oe(e, t = void 0) {
    var r, i;
    let n = "";
    return e.transform_rotate && (n += `rotate(${e.transform_rotate}deg) `), (e.transform_horizontal || e.transform_vertical) && (n += `translate(${(r=e.transform_horizontal)!=null?r:0}, ${(i=e.transform_vertical)!=null?i:0})`), n !== "" ? n : t
}

function k(e, t, n, r, i) {
    for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
    return e === i ? n : e
}

function E() {
    return typeof buttonizer_ajax > "u" || !buttonizer_ajax ? document.location.href.indexOf("buttonizer-preview=1") >= 0 && document.location.href.indexOf("identifier=") >= 0 : buttonizer_ajax.in_preview === "1"
}
class Vo {
    constructor(t, n) {
        var r, i;
        this.id = null, this.groups = [], this.allGroupsMustBeTrue = !1, this.cachedResult = null, this.debugResults = [], this.id = t, this.groups = n.groups, this.allGroupsMustBeTrue = (i = (r = n.matchesAll) != null ? r : n.type === "and") != null ? i : !1
    }
    getId() {
        return this.id
    }
    isTriggered() {
        if (this.cachedResult !== null) return this.cachedResult;
        let t = !1;
        if (this.groups.length > 0) {
            const n = this.calculateGroups();
            this.allGroupsMustBeTrue ? n === this.groups.length && (t = !0) : n > 0 && (t = !0)
        } else t = !0;
        return this.cachedResult = t, t
    }
    calculateGroups() {
        let t = 0;
        return this.groups.map((n, r) => {
            const i = n.type ? n.type === "and" : !0,
                o = n.rules ? n.rules.length : 0;
            let s;
            if (pt().debug() && (this.debugResults[r] = {
                    triggered: null,
                    type: n.type ? n.type : "and",
                    rules: []
                }), o > 0) {
                let a = this.calculateRules(n.rules, o, r);
                i === !0 ? a === o && (t++, s = !0) : a > 0 && (t++, s = !0)
            } else o === 0 && (t++, s = !0);
            pt().debug() && (this.debugResults[r].triggered = s)
        }), t
    }
    calculateRules(t, n, r) {
        const i = pt().getCurrentPageData();
        let o = n;
        return t.map(s => {
            var m;
            if (s.value === "") {
                pt().debug() && this.debugResults[r].rules.push({
                    type: s.type,
                    operator: s.operator,
                    value: "Empty value",
                    received: "Value was empty. Trigger by default",
                    triggered: !0
                });
                return
            }
            let a = s.operator,
                l = s.value,
                u = null;
            switch (s.type) {
                case "page_title":
                case "blog_title":
                    l = typeof s.value == "string" ? s.value.toLowerCase() : s.value, u = i.title;
                    break;
                case "path":
                    u = i.path;
                    break;
                case "path_query":
                    u = i.fullPath;
                    break;
                case "url":
                    u = i.url;
                    break;
                case "url_query":
                    u = i.url;
                    break;
                case "page":
                case "blog":
                    u = [pt().getCustomPageData("page_id")];
                    break;
                case "user_roles":
                    u = pt().getCustomPageData("user_roles", []);
                    break;
                case "category":
                    u = pt().getCustomPageData("categories", []);
                    break;
                case "country":
                    u = [(m = i == null ? void 0 : i.country) != null ? m : "unknown"];
                    break
            }
            const [c, d] = this.operatorCompare(a, l, u);
            pt().debug() && this.debugResults[r].rules.push({ ...d,
                type: s.type
            }), !c && o--
        }), o
    }
    operatorCompare(t, n, r) {
        let i = !1;
        switch (t) {
            case "contains":
                i = r.indexOf(n) >= 0;
                break;
            case "not_contains":
                i = r.indexOf(n) === -1;
                break;
            case "ends_with":
                i = n === r.substring(r.length - n.length);
                break;
            case "begins_with":
                i = n === r.substring(0, n.length);
                break;
            case "match":
                i = n === r;
                break;
            case "not_match":
                i = n !== r;
                break;
            case "is_any":
                i = r.some(o => n.includes(o));
                break;
            case "is_not_any":
                i = r.every(o => !n.includes(o));
                break;
            case "match_regex":
            case "not_match_regex":
                try {
                    i = new RegExp(n).test(r), t === "not_match_regex" && (i = !i)
                } catch (o) {
                    r = "Invalid RegEx, triggered by default"
                }
                break
        }
        return [i, {
            type: null,
            operator: t,
            value: n,
            received: r,
            triggered: i
        }]
    }
    getDebugResults() {
        return this.debugResults
    }
}
class Rg {
    constructor(t = !1) {
        this.pageRules = [], this.simulatedPageData = null, this.debugPageRules = !1, this.debugPageRules = t, E() && (this.debugPageRules = !0)
    }
    push(t) {
        this.pageRules = Object.keys(t).map(n => new Vo(n, t[n]))
    }
    debug() {
        return this.debugPageRules
    }
    debugResult(t, n = null) {
        this.debugPageRules = !0;
        const r = new Vo(t.id, t);
        this.simulatedPageData = n;
        const i = r.isTriggered();
        return this.simulatedPageData = null, {
            groups: r.getDebugResults(),
            triggered: i
        }
    }
    getCurrentPageData() {
        var r, i;
        var t;
        if (this.simulatedPageData !== null) return this.simulatedPageData;
        const n = E() && window != null && window.previewPath ? window.previewPath.split("?")[0] : window.location.pathname;
        return {
            title: document.title.toLowerCase(),
            path: n,
            fullPath: E() ? (r = window == null ? void 0 : window.previewPath) != null ? r : "" : `${window.location.pathname}${window.location.search}`,
            url: E() ? window == null ? void 0 : window.previewFullUrl : document.location.href,
            country: (i = (t = B()) == null ? void 0 : t.getCountry()) != null ? i : "unknown",
            extra: window._buttonizer && window._buttonizer.data ? window._buttonizer.data : null
        }
    }
    getCustomPageData(t, n = "") {
        return !window._buttonizer || window._buttonizer && !window._buttonizer.data ? n : k(window._buttonizer.data, t, n)
    }
    isTriggered(t) {
        const n = this.pageRules.find(r => r.getId() === t);
        return n ? n.isTriggered() : !0
    }
}
let mr = null;

function pt() {
    return mr === null && (mr = new Rg), mr
}

function gr(e, t = !1) {
    const n = pt().isTriggered(e);
    return t ? n : !n
}

function Ag(e) {
    (!e || e === null) && (e = new Date);
    const t = (n, r) => {
        for (var i = String(n); i.length < r;) i = "0" + i;
        return i
    };
    return typeof e == "string" ? e : `${e.getDate()}-${t(e.getMonth()+1,2)}-${e.getFullYear()}`
}
let bn;
const Cg = new Uint8Array(16);

function Tg() {
    if (!bn && (bn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !bn)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return bn(Cg)
}
const rt = [];
for (let e = 0; e < 256; ++e) rt.push((e + 256).toString(16).slice(1));

function $g(e, t = 0) {
    return rt[e[t + 0]] + rt[e[t + 1]] + rt[e[t + 2]] + rt[e[t + 3]] + "-" + rt[e[t + 4]] + rt[e[t + 5]] + "-" + rt[e[t + 6]] + rt[e[t + 7]] + "-" + rt[e[t + 8]] + rt[e[t + 9]] + "-" + rt[e[t + 10]] + rt[e[t + 11]] + rt[e[t + 12]] + rt[e[t + 13]] + rt[e[t + 14]] + rt[e[t + 15]]
}
const Ig = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    Jo = {
        randomUUID: Ig
    };

function Lg(e, t, n) {
    if (Jo.randomUUID && !t && !e) return Jo.randomUUID();
    e = e || {};
    const r = e.random || (e.rng || Tg)();
    return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, $g(r)
}

function _n() {
    return Lg()
}
class Bg {
    constructor(t, n) {
        this.id = null, this.cachedResult = null, this.id = t, this.scheduleData = n
    }
    getId() {
        return this.id
    }
    isTriggered() {
        return this.cachedResult !== null ? this.cachedResult : this.scheduleData.activatesAt !== null && new Date <= new Date(this.scheduleData.activatesAt) ? (this.cachedResult = !1, !1) : this.scheduleData.disablesAt && new Date().getTime() >= new Date(this.scheduleData.disablesAt).getTime() ? (this.cachedResult = !1, !1) : (this.getDatesResult(), this.cachedResult === null && this.checkWeekdayResult(), this.cachedResult)
    }
    getDatesResult() {
        const t = this.scheduleData.excluded.find(n => n.date === se().getCurrentDate());
        t && (this.cachedResult = this.isScheduleObjectTriggered(t))
    }
    checkWeekdayResult() {
        const t = this.scheduleData.weekdays.find(n => n.weekday === se().getCurrentDayOfWeek());
        t && (this.cachedResult = this.isScheduleObjectTriggered(t))
    }
    isScheduleObjectTriggered(t) {
        return t.opened ? this.timeChecker(t.open, t.close) : !1
    }
    timeChecker(t = "10:00", n = "17:00") {
        const r = t.split(":"),
            i = n.split(":"),
            o = se().getCurrentHour(),
            s = se().getCurrentMinute();
        return !(o < Number(r[0]) || o == Number(r[0]) && s < Number(r[1]) || o > Number(i[0]) || o == Number(i[0]) && s > Number(i[1]) - 1)
    }
}
class Ng {
    constructor() {
        this.timeschedules = [], this.currentHour = null, this.currentMinute = null, this.currentDayOfWeek = null, this.currentDate = null, this.updateCurrentDate()
    }
    updateCurrentDate() {
        const t = new Date(new Date().toLocaleString("en-US", {
            timeZone: B().getLocalSiteTimezone()
        }));
        this.currentHour = t.getHours(), this.currentMinute = t.getMinutes(), this.currentDayOfWeek = this.getWeekdayString(t.getDay()), this.currentDate = Ag(t)
    }
    push(t) {
        this.timeschedules = Object.keys(t).map(n => new Bg(n, t[n]))
    }
    isTriggered(t) {
        const n = this.timeschedules.find(r => r.getId() === t);
        return n ? n.isTriggered() : !0
    }
    getWeekdayString(t) {
        switch (t) {
            case 1:
                return "monday";
            case 2:
                return "tuesday";
            case 3:
                return "wednesday";
            case 4:
                return "thursday";
            case 5:
                return "friday";
            case 6:
                return "saturday";
            case 7:
                return "sunday";
            default:
                return "sunday"
        }
    }
    getCurrentDate() {
        return this.currentDate
    }
    getCurrentHour() {
        return this.currentHour
    }
    getCurrentMinute() {
        return this.currentMinute
    }
    getCurrentDayOfWeek() {
        return this.currentDayOfWeek
    }
}
let br = null;

function se() {
    return br === null && (br = new Ng), br
}

function _r(e, t = !1) {
    const n = se().isTriggered(e);
    return t ? n : !n
}
class Dg {
    constructor(t) {
        this.container = t, this._isStandAlone = !1, this.allowGoogleAnalyticsTracking = !1, this.debug = [], this.storedParameterValues = {}, this._hasChat = !1
    }
    log() {
        this.debug.forEach(t => {
            console.warn(t)
        })
    }
    init(t) {
        if (window._buttonizer_initialized) {
            if (window._buttonizer_initialized === t) {
                console.warn("Buttonizer: Double integrationcode has been detected. Please check your websites source code or templates and remove double integration codes.");
                return
            }
            console.error("Buttonizer has already been initialized. Only one instance per site/page is supported.", `Current running instance: ${window._buttonizer_initialized}. You wanted to initialize instance: ${t}`), console.warn("Buttonizer: Please check your websites source code or templates and remove double integration codes of Buttonizer.");
            return
        }
        window._buttonizer_initialized = t, this._isStandAlone = !0, this.container.initStandAlone(t)
    }
    isStandalone() {
        return this._isStandAlone
    }
    inPreview() {
        return E()
    }
    hasPremium() {
        return this.container.hasPremium()
    }
    getCountry() {
        return this.container.visitorCountry
    }
    getLocalSiteTimezone() {
        return this.container.getLocalSiteTimezone()
    }
    groups() {
        return Object.keys(this.container.groups).map(t => this.options(t))
    }
    shouldIgnoreExtensions() {
        return this.container.ignoreExtensions
    }
    getParameters() {
        return this.container.parameters
    }
    getParameterValue(t) {
        return typeof this.storedParameterValues[t] < "u" ? this.storedParameterValues[t] : k(window, `_buttonizer.data.${t}`, null)
    }
    setParameter(t, n) {
        return (typeof this.storedParameterValues[t] > "u" || this.storedParameterValues[t] != n) && (this.storedParameterValues[t] = n, this.container.reload(), window.postMessage({
            eventType: "buttonizer",
            messageType: "parameters-updated"
        }, document.location.origin)), this.storedParameterValues
    }
    dump() {
        const t = () => {
            const n = new WeakSet;
            return (r, i) => {
                if (typeof i == "object" && i !== null) {
                    if (n.has(i)) return `[cyclic ${i.constructor.name}]${k(i,"data.id",!1)!=null?", id: ":""}${k(i,"data.id","")}`;
                    n.add(i)
                }
                return i
            }
        };
        return JSON.stringify(Object.assign({}, this.container.groups), t(), 2)
    }
    open(t = null) {
        if (this.container.startIgnoringExtensions(), !t) Object.keys(this.container.groups).map(n => {
            const r = this.options(n);
            r.open && r.open()
        });
        else {
            if (!Object.keys(this.container.groups).includes(t)) return;
            const n = this.options(t);
            n.open && n.open()
        }
        return !0
    }
    close(t = null) {
        if (this.container.startIgnoringExtensions(), !t) Object.keys(this.container.groups).map(n => {
            const r = this.options(n);
            r.close && r.close()
        });
        else {
            const n = this.options(t);
            n.close && n.close()
        }
        return !0
    }
    toggle(t = null) {
        if (this.container.startIgnoringExtensions(), !t) Object.keys(this.container.groups).map(n => {
            const r = this.options(n);
            r.toggle && r.toggle()
        });
        else {
            const n = this.options(t);
            n.toggle && n.toggle()
        }
        return !0
    }
    options(t) {
        const n = k(this.container.groups, t, null);
        let r = {};
        return !n || n === null ? (this.debug.push(`Buttonizer: Group ${t} does not exists.`), console.error(`Buttonizer: Group ${t} does not exists.`), null) : (n && n.state && (r = {
            isOpened: () => n.state.isOpened(),
            toggle: () => n.state.toggle(),
            open: () => n.state.open(),
            close: () => n.state.close()
        }), {
            id: t,
            element: n.element,
            ...r
        })
    }
    getButton(t, n) {
        const r = k(this.container.groups, n, null);
        return r && typeof r.buttons[t] < "u" ? {
            element: r.buttons[t].element,
            action: r.buttons[t].action
        } : {}
    }
    activateHook(t, n) {
        window.dispatchEvent(new CustomEvent(t, {
            detail: n
        }))
    }
    addHook(t, n, r = !0) {
        window.addEventListener(t, i => n(i.detail), {
            once: r
        })
    }
    removeHook(t, n) {
        window.removeEventListener(t, n)
    }
    showWidget(t, n = {}) {
        if (!this.container.showWidget) {
            console.error("Buttonizer Widgets are not initialized.");
            return
        }
        this.container.showWidget(t, n)
    }
    hideWidget(t, n = {}) {
        if (!this.container.hideWidget) {
            console.error("Buttonizer Widgets are not initialized.");
            return
        }
        this.container.hideWidget(t, n)
    }
    toggleWidget(t, n = {}) {
        if (!this.container.hideWidget) {
            console.error("Buttonizer Widgets are not initialized.");
            return
        }
        this.container.toggleWidget(t, n)
    }
    setHasChat(t) {
        this._hasChat = t
    }
    getHasChat() {
        return this._hasChat
    }
    checkPageRuleTriggered(t, n = !1) {
        return gr(t, n)
    }
    checkTimeScheduleTriggered(t, n = !1) {
        return _r(t, n)
    }
}
let yn = null;
const Fg = (e = null) => (yn !== null || !yn && !e || (yn = new Dg(e)), yn),
    B = Fg;
class Ug {
    constructor({
        data: t,
        stylesheet: n,
        generators: r = [],
        renderExtender: i = [],
        extensions: o = [],
        menu_button: s,
        buttons: a
    }) {
        if (this.data = t, this.buttons = a, this.element = document.createElement("div"), this.generators = r, this.renderExtender = i, this.extensions = o, this.menuButton = null, this.stylesheet = n, typeof a > "u" || a.length === 0) {
            console.error("Oh no, I have no buttons!", this.data.id);
            return
        }
        this.menuButton = Object.keys(s)[0], I(this.buttons, s), this.generators.forEach(async l => await l.generate(this)), this.extensions.forEach(async l => await l.subscribe(this))
    }
    getHasCustomElement() {
        return B().hasPremium() && this.data.position_type === "custom" && !E()
    }
    getRenderElement() {
        return this.getHasCustomElement() ? document.querySelector(`[data-buttonizer-widget-id="${this.data.id}"]`) : document.body
    }
    async render() {
        if (this.stylesheet.update({
                group: {
                    [this.data.horizontal[0]]: this.getHasCustomElement() ? void 0 : this.data.horizontal[1],
                    [this.data.vertical[0]]: this.getHasCustomElement() ? void 0 : this.data.vertical[1],
                    flexDirection: this.data.vertical[0] === "bottom" ? "column-reverse" : "column",
                    "align-items": this.data.horizontal[0] === "right" ? "flex-end" : "flex-start",
                    position: this.data.position_type !== "fixed" ? this.getHasCustomElement() ? "relative" : "absolute" : void 0,
                    transform: oe(this.data),
                    transformOrigin: this.data.transform_position !== "center center" ? this.data.transform_position : void 0
                }
            }), !(this.buttons[this.menuButton].data.show_desktop === !1 && this.buttons[this.menuButton].data.show_mobile === !1)) {
            const {
                element: n
            } = await this.buttons[this.menuButton].render();
            n.classList.add("buttonizer-head"), this.element.appendChild(n)
        }
        const t = Object.values(this.buttons);
        for (const n of t) {
            if (n.data.id === this.menuButton) continue;
            const r = await n.render();
            this.element.appendChild(r.element)
        }
        return this.element.className = Ct(this.element.className, "buttonizer", "buttonizer-group", this.stylesheet.classes.group, bt.getGroupId() === this.data.id && J.showEditButton), this.data.custom_class && this.element.classList.add(...this.data.custom_class.replace(/\s+/g, " ").trim().split(" ")), this.data.custom_id && (this.element.id = this.data.custom_id), this.data.show_desktop || this.setHide("desktop"), this.data.show_mobile || this.setHide("mobile"), this.renderExtender.forEach(n => n.extend(this)), this.stylesheet.attach(), this.element
    }
    async destroy() {
        this.extensions.forEach(t => t.unsubscribe(this)), await this.stylesheet.detach(), Object.keys(this.buttons).forEach(t => {
            (t !== this.menuButton || t !== this.menuButton && !(this.buttons[this.menuButton].data.show_desktop === !1 && this.buttons[this.menuButton].data.show_mobile === !1)) && this.buttons[t].stylesheet.detach()
        }), this.element && this.element.remove()
    }
    setHide(t) {
        let n = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        this.stylesheet.update({
            group: {
                [`@media screen and (${n})`]: {
                    display: "none"
                }
            }
        })
    }
}
class Hg extends gt {
    constructor() {
        super(), super.name = "close on click outside", this.watchClick()
    }
    watchClick() {
        document.addEventListener("click", t => {
            this.notify(t.target)
        })
    }
    notify(t) {
        B().shouldIgnoreExtensions() || this.subscriptions.forEach(({
            type: n = "group",
            ...r
        }) => {
            if (n === "widget") {
                r.element.contains(t) || B().hideWidget(r.id);
                return
            }
            r && r.state && r.state.isOpened() && !r.element.contains(t) && r.state.close()
        })
    }
}
const Ko = new Hg;
class Mg extends gt {
    constructor() {
        super(), super.name = "close on click inside"
    }
    onSubscribe(t) {
        const n = t.buttons[k(t, "menuButton", null)];
        Object.values(t.buttons).forEach(r => {
            n.data.id !== r.data.id && r.element.addEventListener("click", i => {
                i.target.className.includes("buttonizer-edit-action") || i.target.parentElement.className.includes("buttonizer-edit-action") || E() && r.disableClickInPreview || this.notify(t)
            })
        })
    }
    notify(t) {
        B().shouldIgnoreExtensions() || t && t.state && t.state.isOpened() && t.state.close()
    }
}
const Wg = new Mg;

function Ae() {
    const e = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "phone" : "desktop"
}
class qg extends gt {
    constructor() {
        super(), super.name = "open on hover", this.timer = []
    }
    onSubscribe(t) {
        ["tablet", "phone"].indexOf(Ae()) >= 0 || (this.timer[t.id] = setTimeout(() => {}, 10), t.element.addEventListener("mouseover", () => {
            clearTimeout(this.timer[t.id]), this.toggle(t, !0)
        }), k(t.buttons[t.menuButton].data, "close_on_mouseleave", !0) === !0 && t.element.addEventListener("mouseout", () => {
            clearTimeout(this.timer[t.id]), this.timer[t.id] = setTimeout(() => this.toggle(t, !1), 750)
        }))
    }
    toggle(t, n = !0) {
        t && t.state && (!t.state.isOpened() && n ? t.state.open() : t.state.isOpened() && !n && t.state.close())
    }
}
const Gg = new qg;
let _t = class {
    constructor(e = {}) {
        this.mobileSingleButton = k(e, "mobileSingleButton", !1), this.desktopSingleButton = k(e, "desktopSingleButton", !1)
    }
    generate(e) {
        this.createJss(e, "mobile", e.data.is_menu_mobile, e.data.is_menu_mobile ? e.data.button_size : e.data.group_size), this.createJss(e, "desktop", e.data.is_menu_desktop, e.data.is_menu_desktop ? e.data.button_size : e.data.group_size)
    }
    createJss() {}
};
class yr {
    constructor(t = {}) {
        this.group = t
    }
    extend() {}
    createJss() {}
}
class Xo extends yr {
    extend(t) {
        t.stylesheet.update(this.getJSS(t, "mobile", t.data.is_menu_mobile, t.data.is_menu_mobile ? t.data.button_size : t.data.group_size)), t.stylesheet.update(this.getJSS(t, "desktop", t.data.is_menu_desktop, t.data.is_menu_desktop ? t.data.button_size : t.data.group_size))
    }
    getJSS(t, n, r, i) {
        return I({}, this.setPadding(t, n, r, i), this.setSameHeightLabels(t, n, r, i))
    }
    setSameHeightLabels(t, n, r, i) {
        return {
            label: {
                [n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)"]: {
                    height: i,
                    "line-height": i + "px"
                }
            }
        }
    }
    setPadding(t, n) {
        const r = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)",
            i = k(t, "data.label_padding.0", "5px 15px 5px 15px"),
            o = k(t, "data.label_padding.1", i),
            s = [...i.matchAll(/(?<top>\d+?[.,]?\d*?(px|%))( (?<right>\d+?[.,]?\d*?(px|%)) (?<bottom>\d+?[.,]?\d*?(px|%)) (?<left>\d+?[.,]?\d*?(px|%)))?/g)][0].groups,
            a = [...o.matchAll(/(?<top>\d+?[.,]?\d*?(px|%))( (?<right>\d+?[.,]?\d*?(px|%)) (?<bottom>\d+?[.,]?\d*?(px|%)) (?<left>\d+?[.,]?\d*?(px|%)))?/g)][0].groups;
        return {
            label: {
                [r]: {
                    padding: `0px ${s.right} 0px ${s.left}`
                }
            },
            button: {
                [r]: {
                    "&:hover": {
                        "& $label": {
                            padding: `0px ${a.right} 0px ${a.left}`
                        }
                    }
                }
            }
        }
    }
}

function Bt(e = "", t = "horizontal") {
    const n = {
            horizontal: ["left", "right"],
            vertical: ["top", "bottom"]
        },
        r = /(?<top>\d+)?(px|%)( (?<left>\d+)?(px|%) (?<bottom>\d+)?(px|%) (?<right>\d+)?(px|%))?/g;
    if (typeof e == "number") return e;
    const i = [...e.matchAll(r)],
        o = parseInt(k(i, `0.groups.${n[t][0]}`, k(i, "0.groups.top", "0"))),
        s = parseInt(k(i, `0.groups.${n[t][1]}`, k(i, "0.groups.top", "0")));
    return o + s
}
class vn extends _t {
    constructor({
        button: t,
        visibility: n,
        hideMenu: r
    }) {
        super(), this.visibility = n, this.button = t, this.hideMenu = r
    }
    generate(t) {
        let n;
        t.data.label_same_height === !0 && t.data.label_inside === !1 && (n = new Xo().getJSS({
            data: { ...t.buttons[this.button].data,
                width: t.data.group_size,
                height: t.data.group_size
            }
        }));
        const r = t.buttons[this.button].data.horizontal_position_label === "auto" ? t.buttons[this.button].data.horizontal[0] : t.buttons[this.button].data.horizontal_position_label,
            i = {
                width: t.data.group_size,
                height: t.data.group_size,
                [`margin-${t.data.vertical[0]}`]: "0 !important",
                [t.data.horizontal[0]]: "0px !important",
                visibility: "visible !important",
                opacity: "1 !important",
                "pointer-events": "unset !important",
                "&:hover": {
                    "& $label": {
                        [r]: t.buttons[this.button].data.label_spacing + (t.buttons[this.button].data.label_inside ? 0 : Bt(t.buttons[this.button].data.button_padding[1]) + t.data.group_size) + "px !important"
                    }
                },
                ...k(n, "button", {})
            },
            o = {
                [r]: t.buttons[this.button].data.label_spacing + (t.buttons[this.button].data.label_inside ? 0 : Bt(t.buttons[this.button].data.button_padding[0]) + t.data.group_size),
                ...k(n, "label", {})
            },
            s = {
                display: "none !important"
            };
        switch (this.visibility) {
            case "desktop":
                I(t.buttons[this.button].JSS, {
                    button: {
                        "@media screen and (min-width: 770px)": i
                    },
                    label: {
                        "@media screen and (min-width: 770px)": o
                    }
                }), t.menuButton && (I(t.buttons[t.menuButton].JSS, {
                    button: {
                        "@media screen and (min-width: 770px)": s
                    }
                }), this.hideMenu && I(t.buttons[t.menuButton].JSS, {
                    button: {
                        "@media screen and (max-width: 769px)": s
                    }
                }));
                break;
            case "mobile":
                I(t.buttons[this.button].JSS, {
                    button: {
                        "@media screen and (max-width: 769px)": i
                    },
                    label: {
                        "@media screen and (max-width: 769px)": o
                    }
                }), t.menuButton && (I(t.buttons[t.menuButton].JSS, {
                    button: {
                        "@media screen and (max-width: 769px)": s
                    }
                }), this.hideMenu && I(t.buttons[t.menuButton].JSS, {
                    button: {
                        "@media screen and (min-width: 770px)": s
                    }
                }));
                break
        }
    }
}

function Yo(e, t) {
    const n = sessionStorage && sessionStorage.getItem(e) ? JSON.parse(sessionStorage.getItem(e)) : [];
    return n.indexOf(t) >= 0 ? !1 : (n.push(t), sessionStorage.setItem(e, JSON.stringify(n)), !0)
}
class wn {
    constructor(t) {
        Pi(this, "storageKey", "buttonizer_exit_intent_triggered"), this.group = t, this.groupId = t.data.id, this.animatedButtons = [], this.menuButton = k(t.buttons, t.menuButton, null), t.generators.forEach(r => {
            r instanceof vn && this.animatedButtons.push({
                button: t.buttons[r.button],
                visibility: r.visibility
            })
        }), this.menuButton !== null && this.animatedButtons.push({
            button: this.menuButton
        }), this.isTriggered = !1;
        const n = k(t, "data.exit_intent_trigger_amount", "once_page");
        this.alwaysTrigger = n === "always", this.triggerOncePerSession = n === "once_session", this.init()
    }
    trigger(t) {
        const n = k(this.group, "data.exit_intent_trigger_leaving_window", !0),
            r = k(this.group, "data.exit_intent_trigger_inactive", !0),
            i = k(this.group, "data.exit_intent_trigger_scroll_up", !0);
        if (t === "mouse-leave" && n || t === "timeout" && r || t === "scroll-up" && i) {
            if (!this.alwaysTrigger && this.isTriggered === !0 || this.triggerOncePerSession && !Yo(this.storageKey, this.groupId)) return;
            this.isTriggered = !0, this.execute()
        }
    }
    init() {}
    execute() {
        this.animatedButtons.forEach(t => {
            t.button.element.classList.contains(t.button.stylesheet.classes.exit_intent_animate) || (this.group.state.close(), t.button.element.classList.add(t.button.stylesheet.classes.exit_intent_animate), setTimeout(() => {
                this.group.state.open(), t.button.element.classList.remove(t.button.stylesheet.classes.exit_intent_animate)
            }, 1e3))
        })
    }
}
class Vg extends wn {
    execute() {
        !this.menuButton || this.menuButton.element.classList.contains(this.menuButton.stylesheet.classes.opened) || this.group.state.open()
    }
}
var Ce = {},
    Kt = Kt || {};
Kt.stringify = function() {
    var e = {
        "visit_linear-gradient": function(t) {
            return e.visit_gradient(t)
        },
        "visit_repeating-linear-gradient": function(t) {
            return e.visit_gradient(t)
        },
        "visit_radial-gradient": function(t) {
            return e.visit_gradient(t)
        },
        "visit_repeating-radial-gradient": function(t) {
            return e.visit_gradient(t)
        },
        visit_gradient: function(t) {
            var n = e.visit(t.orientation);
            return n && (n += ", "), t.type + "(" + n + e.visit(t.colorStops) + ")"
        },
        visit_shape: function(t) {
            var n = t.value,
                r = e.visit(t.at),
                i = e.visit(t.style);
            return i && (n += " " + i), r && (n += " at " + r), n
        },
        "visit_default-radial": function(t) {
            var n = "",
                r = e.visit(t.at);
            return r && (n += r), n
        },
        "visit_extent-keyword": function(t) {
            var n = t.value,
                r = e.visit(t.at);
            return r && (n += " at " + r), n
        },
        "visit_position-keyword": function(t) {
            return t.value
        },
        visit_position: function(t) {
            return e.visit(t.value.x) + " " + e.visit(t.value.y)
        },
        "visit_%": function(t) {
            return t.value + "%"
        },
        visit_em: function(t) {
            return t.value + "em"
        },
        visit_px: function(t) {
            return t.value + "px"
        },
        visit_literal: function(t) {
            return e.visit_color(t.value, t)
        },
        visit_hex: function(t) {
            return e.visit_color("#" + t.value, t)
        },
        visit_rgb: function(t) {
            return e.visit_color("rgb(" + t.value.join(", ") + ")", t)
        },
        visit_rgba: function(t) {
            return e.visit_color("rgba(" + t.value.join(", ") + ")", t)
        },
        visit_color: function(t, n) {
            var r = t,
                i = e.visit(n.length);
            return i && (r += " " + i), r
        },
        visit_angular: function(t) {
            return t.value + "deg"
        },
        visit_directional: function(t) {
            return "to " + t.value
        },
        visit_array: function(t) {
            var n = "",
                r = t.length;
            return t.forEach(function(i, o) {
                n += e.visit(i), o < r - 1 && (n += ", ")
            }), n
        },
        visit: function(t) {
            if (!t) return "";
            var n = "";
            if (t instanceof Array) return e.visit_array(t, n);
            if (t.type) {
                var r = e["visit_" + t.type];
                if (r) return r(t);
                throw Error("Missing visitor visit_" + t.type)
            } else throw Error("Invalid node.")
        }
    };
    return function(t) {
        return e.visit(t)
    }
}();
var Kt = Kt || {};
Kt.parse = function() {
    var e = {
            linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
            repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
            radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
            repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
            sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
            extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
            positionKeywords: /^(left|center|right|top|bottom)/i,
            pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
            percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
            emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
            angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
            startCall: /^\(/,
            endCall: /^\)/,
            comma: /^,/,
            hexColor: /^\#([0-9a-fA-F]+)/,
            literalColor: /^([a-zA-Z]+)/,
            rgbColor: /^rgb/i,
            rgbaColor: /^rgba/i,
            number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
        },
        t = "";

    function n(j) {
        var F = new Error(t + ": " + j);
        throw F.source = t, F
    }

    function r() {
        var j = i();
        return t.length > 0 && n("Invalid input not EOF"), j
    }

    function i() {
        return C(o)
    }

    function o() {
        return s("linear-gradient", e.linearGradient, l) || s("repeating-linear-gradient", e.repeatingLinearGradient, l) || s("radial-gradient", e.radialGradient, d) || s("repeating-radial-gradient", e.repeatingRadialGradient, d)
    }

    function s(j, F, W) {
        return a(F, function(lt) {
            var ve = W();
            return ve && (xt(e.comma) || n("Missing comma before color stops")), {
                type: j,
                orientation: ve,
                colorStops: C(L)
            }
        })
    }

    function a(j, F) {
        var W = xt(j);
        if (W) {
            xt(e.startCall) || n("Missing (");
            var lt = F(W);
            return xt(e.endCall) || n("Missing )"), lt
        }
    }

    function l() {
        return u() || c()
    }

    function u() {
        return at("directional", e.sideOrCorner, 1)
    }

    function c() {
        return at("angular", e.angleValue, 1)
    }

    function d() {
        var j, F = m(),
            W;
        return F && (j = [], j.push(F), W = t, xt(e.comma) && (F = m(), F ? j.push(F) : t = W)), j
    }

    function m() {
        var j = g() || b();
        if (j) j.at = x();
        else {
            var F = w();
            if (F) {
                j = F;
                var W = x();
                W && (j.at = W)
            } else {
                var lt = S();
                lt && (j = {
                    type: "default-radial",
                    at: lt
                })
            }
        }
        return j
    }

    function g() {
        var j = at("shape", /^(circle)/i, 0);
        return j && (j.style = _e() || w()), j
    }

    function b() {
        var j = at("shape", /^(ellipse)/i, 0);
        return j && (j.style = Ut() || w()), j
    }

    function w() {
        return at("extent-keyword", e.extentKeywords, 1)
    }

    function x() {
        if (at("position", /^at/, 0)) {
            var j = S();
            return j || n("Missing positioning value"), j
        }
    }

    function S() {
        var j = A();
        if (j.x || j.y) return {
            type: "position",
            value: j
        }
    }

    function A() {
        return {
            x: Ut(),
            y: Ut()
        }
    }

    function C(j) {
        var F = j(),
            W = [];
        if (F)
            for (W.push(F); xt(e.comma);) F = j(), F ? W.push(F) : n("One extra comma");
        return W
    }

    function L() {
        var j = V();
        return j || n("Expected color definition"), j.length = Ut(), j
    }

    function V() {
        return st() || tt() || ct() || vt()
    }

    function vt() {
        return at("literal", e.literalColor, 0)
    }

    function st() {
        return at("hex", e.hexColor, 1)
    }

    function ct() {
        return a(e.rgbColor, function() {
            return {
                type: "rgb",
                value: C(wt)
            }
        })
    }

    function tt() {
        return a(e.rgbaColor, function() {
            return {
                type: "rgba",
                value: C(wt)
            }
        })
    }

    function wt() {
        return xt(e.number)[1]
    }

    function Ut() {
        return at("%", e.percentageValue, 1) || Dn() || _e()
    }

    function Dn() {
        return at("position-keyword", e.positionKeywords, 1)
    }

    function _e() {
        return at("px", e.pixelValue, 1) || at("em", e.emValue, 1)
    }

    function at(j, F, W) {
        var lt = xt(F);
        if (lt) return {
            type: j,
            value: lt[W]
        }
    }

    function xt(j) {
        var F, W;
        return W = /^[\n\r\t\s]+/.exec(t), W && ye(W[0].length), F = j.exec(t), F && ye(F[0].length), F
    }

    function ye(j) {
        t = t.substr(j)
    }
    return function(j) {
        return t = j.toString(), r()
    }
}(), Ce.parse = Kt.parse, Ce.stringify = Kt.stringify;
const Jg = e => {
        var t = vr(e).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/);
        if (t) {
            var n = parseInt(t[1], 10),
                r = parseInt(t[2], 10),
                i = parseInt(t[3], 10);
            return `${n},${r},${i}`
        }
        return console.error("Invalid RGBA color format"), null
    },
    Kg = e => {
        const t = vr(e).match(/^rgba?\((\d+), (\d+), (\d+)(, [\d.]+)?\)$/);
        if (!t) return console.error("Invalid color format. Please provide RGB or RGBA values."), "black";
        const [n, r, i] = t.slice(1, 4).map(Number);
        return .2126 * Math.pow(n / 255, 2.2) + .7152 * Math.pow(r / 255, 2.2) + .0722 * Math.pow(i / 255, 2.2) > .5 ? "black" : "white"
    },
    vr = (e, t = !0, n) => {
        if (t && (e = Zo(e)), !/^#[0-9A-F]{6}$/i.test(e)) return e;
        var r = parseInt(e.slice(1, 3), 16),
            i = parseInt(e.slice(3, 5), 16),
            o = parseInt(e.slice(5, 7), 16);
        return n === void 0 && (n = 1), `rgba(${r}, ${i}, ${o}, ${n})`
    },
    Qo = e => e == null ? "solid" : /radial/.test(e) ? "radial" : /linear/.test(e) ? "linear" : "solid",
    Xg = e => {
        if (e == null) return {
            palette: null,
            angle: 90
        };
        const t = Qo(e);
        if (t === "solid") return {
            palette: e,
            angle: 90
        };
        if (t === "linear") {
            const n = Ce.parse(e)[0];
            return {
                palette: n.colorStops.map(r => r.type === "hex" ? {
                    color: `#${r.value}`,
                    offset: Number(r.length.value) / 100
                } : {
                    color: `${r.type}(${r.value.join(", ")})`,
                    offset: Number(r.length.value) / 100
                }),
                angle: Number(n.orientation.value)
            }
        }
        if (t === "radial") return {
            palette: Ce.parse(e)[0].colorStops.map(n => n.type === "hex" ? {
                color: `#${n.value}`,
                offset: Number(n.length.value) / 100
            } : {
                color: `${n.type}(${n.value.join(", ")})`,
                offset: Number(n.length.value) / 100
            }),
            angle: 90
        }
    },
    Zo = e => {
        if (Qo(e) === "solid") return e;
        const t = Ce.parse(e)[0].colorStops[0];
        return t.type === "hex" ? `#${t.value}` : `${t.type}(${t.value.join(", ")})`
    };

function Yg(e) {
    if (e) {
        if (e.toLowerCase() === "transparent") return {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        };
        if (e[0] === "#") return e.length < 7 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (e.length > 4 ? e[4] + e[4] : "")), {
            r: parseInt(e.substr(1, 2), 16),
            g: parseInt(e.substr(3, 2), 16),
            b: parseInt(e.substr(5, 2), 16),
            a: e.length > 7 ? parseInt(e.substr(7, 2), 16) / 255 : 1
        };
        if (e.indexOf("rgb") === -1) {
            var t = document.body.appendChild(document.createElement("fictum")),
                n = "rgb(1, 2, 3)";
            if (t.style.color = n, t.style.color !== n || (t.style.color = e, t.style.color === n || t.style.color === "")) return;
            e = getComputedStyle(t).color, document.body.removeChild(t)
        }
        if (e.indexOf("rgb") === 0) {
            e.indexOf("rgba") === -1 && (e += ",1");
            const r = e.match(/[\.\d]+/g).map(function(i) {
                return +i
            });
            return {
                r: r[0],
                g: r[1],
                b: r[2],
                a: r[3]
            }
        }
    }
}
const Qg = {
        general: {
            show_mobile: !0,
            show_desktop: !0,
            label: "",
            action: "#",
            type: "url",
            action_new_tab: !1,
            widget_opening_position: "auto"
        },
        styling: {
            icon: ["fas fa-home"],
            icon_type: "icon",
            icon_image: [""],
            icon_size: [20],
            icon_image_size: [16],
            background_is_image: [!1],
            background_image: [],
            border_radius: ["50%"],
            background_color: ["#2f7789", "#f08419"],
            icon_spacing: [15],
            icon_color: ["#fff"],
            icon_image_border_radius: [50],
            label_background_color: ["#4e4c4c"],
            label_color: ["#fff"],
            label_border_radius: ["3px"],
            label_font_size: [12],
            label_margin: ["0px 0px 0px 0px"],
            label_padding: ["5px 15px 5px 15px"],
            label_font_family: "",
            label_spacing: 9,
            horizontal_position_label: "auto",
            label_text_align: "auto",
            box_shadow: ["0px 2px 6px 1px rgba(0, 0, 0, 0.20)", "0px 5px 11px 1px rgba(0, 0, 0, 0.25)"],
            box_shadow_enabled: [!0],
            label_box_shadow_enabled: [!1],
            label_box_shadow: ["0px 0px 0px 0px rgba(0, 0, 0, 1)"],
            label_same_height: !1,
            label_inside: !1,
            button_padding: ["0px"]
        }
    },
    Zg = {
        general: {
            horizontal: "right: 5%",
            vertical: "bottom: 5%",
            menu_style: "default",
            position_type: "fixed",
            transform_position: "center center",
            entrance_animation: "no_animation"
        },
        advanced: {
            menu_animation: "none",
            menu_animation_delay: 10,
            menu_animation_repeat_count: 0,
            show_on_schedule_trigger: !0,
            show_on_rule_trigger: !0,
            advanced_timeout_once: !0,
            advanced_timeout_hide: !1,
            advanced_scroll_hide: !1,
            exit_intent: !1,
            exit_intent_trigger_leaving_window: !1,
            exit_intent_trigger_inactive: !1,
            exit_intent_trigger_scroll_up: !1,
            exit_intent_animation: "focused",
            exit_intent_trigger_amount: "once_page"
        },
        styling: {
            button_size: 42,
            group_size: 56,
            show_label_mobile: "always",
            show_label_desktop: "always",
            label_same_width: !1,
            space: 10
        }
    },
    tb = {
        general: {
            name: "Menu button",
            type: "opengroup",
            menu_opening_animation: "default",
            start_opened: !1,
            open_and_close_attention: !1,
            backdrop_when_opened: !1,
            close_on_click_outside: !0,
            close_on_click_inside: !0,
            open_on_mouseover: !1,
            close_on_mouseleave: !0
        },
        styling: {
            icon: ["fas fa-plus"],
            icon_size: [25],
            icon_image_size: [25],
            space: 0
        }
    },
    ot = {
        button: Qg,
        group: Zg,
        menu_button: tb
    },
    eb = {
        group: {},
        button: {}
    },
    wr = {
        box_shadow_enabled: [!1],
        label_box_shadow_enabled: [!1],
        border_radius: ["0px"],
        label_spacing: 0,
        label_border_radius: ["0px"]
    },
    nb = {
        button: { ...wr
        },
        menu_button: { ...wr
        },
        group: { ...wr,
            group_size: 56,
            button_size: 56,
            show_label_desktop: "hover",
            show_label_mobile: "hide",
            label_same_height: !0,
            space: 0
        }
    },
    xr = {
        group_size: 56,
        button_size: 56,
        box_shadow_enabled: [!1],
        label_box_shadow_enabled: [!1],
        border_radius: ["0px"],
        label_spacing: 0,
        label_border_radius: ["0px"]
    },
    rb = {
        button: { ...xr
        },
        menu_button: { ...xr
        },
        group: { ...xr,
            label_same_width: !0,
            label_same_height: !0,
            space: 0
        }
    },
    ib = {
        button: {
            border_radius: ["10px"],
            label_spacing: 0
        },
        menu_button: {
            border_radius: ["10px"],
            label_spacing: 0
        },
        group: {
            border_radius: ["10px"],
            label_inside: !0,
            label_spacing: 0,
            group_size: 42
        }
    },
    ob = {
        group: {
            border_radius: ["10px"],
            label_inside: !0,
            label_spacing: 0,
            group_size: 42,
            icon_type: "off"
        },
        button: {
            border_radius: ["10px"],
            label_spacing: 0,
            icon_type: "off"
        },
        menu_button: {
            border_radius: ["10px"],
            label_spacing: 0,
            icon_type: "off"
        }
    },
    sb = {
        default: eb,
        square: nb,
        rectangle: rb,
        "text-icon": ib,
        text: ob
    },
    ae = {
        get button() {
            const e = {};
            return Object.entries(ot.button).map(t => {
                I(e, t[1])
            }), e
        },
        get group() {
            const e = {};
            return Object.entries(I({}, ot.button, ot.group)).map(t => {
                I(e, t[1])
            }), e
        },
        get menu_button() {
            const e = {};
            return Object.entries(I({}, ot.button, ot.menu_button)).map(t => {
                I(e, t[1])
            }), e
        },
        get formatted() {
            const e = {};
            return Object.entries(I({}, ot.button, ot.group)).map(t => {
                I(e, t[1])
            }), Object.entries(e).filter(t => Array.isArray(t[1])).map(([t]) => t)
        },
        get menuStyle() {
            return sb
        }
    };
class ab extends wn {
    init() {
        this.animatedButtons.forEach(t => {
            this.addColor(t.button, k(t, "visibility", !1))
        })
    }
    addColor(t, n = !1) {
        const r = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)",
            i = Xg(k(t, "data.background_color.0", k(this.group, "data.background_color.0", ae.group.background_color[0]))),
            o = typeof i.palette[0] == "string" ? i.palette : i.palette[0].color,
            s = Yg(o),
            a = "rgba(" + [s.r, s.g, s.b, 0].join(",") + ")",
            l = "rgba(" + [s.r, s.g, s.b, .32].join(",") + ")";
        if (k(t.stylesheet, "keyframes.focus_exit_intent", !1) || t.stylesheet.addRule("keyframes", {
                "@global": {
                    "@keyframes focus_exit_intent": {
                        "0%": {
                            boxShadow: `0 0 0 1600px ${a}`
                        },
                        "15%": {
                            boxShadow: `0 0 0 1600px ${l}`
                        },
                        "100%": {
                            boxShadow: `0 0 0 0 ${l}`
                        }
                    }
                }
            }), this.animationClassName = t.stylesheet.keyframes.focus_exit_intent, n) {
            t.stylesheet.update({
                exit_intent_animate: {
                    [r]: {
                        animation: `${this.animationClassName} 1s`
                    }
                }
            });
            return
        }
        t.stylesheet.update({
            exit_intent_animate: {
                animation: `${this.animationClassName} 1s`
            }
        })
    }
}
class lb extends wn {
    init() {
        this.animatedButtons.forEach(t => {
            let n = t.visibility === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
            if (t.visibility) {
                t.button.stylesheet.update({
                    exit_intent_animate: {
                        [n]: {
                            animation: "buttonizer-flip 1s linear"
                        }
                    }
                });
                return
            }
            t.button.stylesheet.update({
                exit_intent_animate: {
                    animation: "buttonizer-flip 1s linear"
                }
            })
        })
    }
}
class ub extends wn {
    init() {
        this.animatedButtons.forEach(t => {
            let n = t.visibility === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
            if (t.visibility) {
                t.button.stylesheet.update({
                    exit_intent_animate: {
                        [n]: {
                            animation: "buttonizer-jump 1s linear"
                        }
                    }
                });
                return
            }
            t.button.stylesheet.update({
                exit_intent_animate: {
                    animation: "buttonizer-jump 1s linear"
                }
            })
        })
    }
}
const cb = {
    open_menu: Vg,
    focused: ab,
    flip: lb,
    jump: ub
};
class db extends gt {
    constructor() {
        super(), super.name = "exit intent", this.timer = setTimeout(() => {}), this.watchLeavingWindow(), this.watchInactivity(), this.watchScrollUp()
    }
    watchLeavingWindow() {
        document.addEventListener("mouseout", t => {
            this.subscriptions.length > 0 && t.clientY < 10 && this.notify("mouse-leave")
        })
    }
    watchInactivity() {
        document.addEventListener("mousemove", () => {
            this.subscriptions.length > 0 && (clearInterval(this.timer), this.timer = setTimeout(() => {
                this.notify("timeout")
            }, 12e4))
        })
    }
    watchScrollUp() {
        let t = window.pageYOffset,
            n = 150,
            r = setTimeout(() => {}, 1),
            i = setTimeout(() => {}, 1);
        const o = () => {
            t - n > window.pageYOffset && this.notify("scroll-up"), clearTimeout(r), r = setTimeout(() => {
                t = window.pageYOffset
            }, 1e3)
        };
        document.addEventListener("scroll", () => {
            clearTimeout(i), i = setTimeout(() => {
                o()
            }, 50)
        })
    }
    onSubscribe(t) {
        const n = k(t, "data.exit_intent_animation", "open_menu"),
            r = k(cb, n, null);
        if (r === null) {
            console.warn(`Buttonizer: Sorry, the exit intent '${n}' doesn't exist`);
            return
        }
        t.exitIntent = new r(t)
    }
    onUnsubscribe(t) {
        delete t.exitIntent
    }
    notify(t) {
        this.subscriptions.map(n => {
            n.exitIntent && n.exitIntent.trigger(t)
        })
    }
}
const hb = new db;
class pb extends gt {
    constructor() {
        super(), super.name = "show on scroll", this.watchScroll()
    }
    notify(t, n) {
        for (let r of this.subscriptions) this.onScroll(r, t, n)
    }
    watchScroll() {
        window.addEventListener("scroll", () => {
            let t = this.currentScrollPercentage();
            this.notify(t, window.scrollY)
        })
    }
    currentScrollPercentage() {
        var t = document.body.parentNode,
            n = (document.body.scrollTop || t.scrollTop) / (t.scrollHeight - t.clientHeight) * 100;
        return n
    }
    onSubscribe(t) {
        this.onScroll(t, this.currentScrollPercentage(), window.scrollY)
    }
    onScroll(t, n, r) {
        let i = k(t.data, "advanced_scroll", 0),
            o = k(t.data, "advanced_scroll_hide", !1),
            s = k(t.data, "advanced_scroll_pixel_percent", "percentage") === "pixel" ? r : n;
        o !== !0 ? s >= i && t.element.classList.contains(t.stylesheet.classes.hiddenScroll) ? t.element.classList.remove(t.stylesheet.classes.hiddenScroll) : s < i && !t.element.classList.contains(t.stylesheet.classes.hiddenScroll) && t.element.classList.add(t.stylesheet.classes.hiddenScroll) : s >= i && !t.element.classList.contains(t.stylesheet.classes.hiddenScroll) ? t.element.classList.add(t.stylesheet.classes.hiddenScroll) : s < i && t.element.classList.contains(t.stylesheet.classes.hiddenScroll) && t.element.classList.remove(t.stylesheet.classes.hiddenScroll)
    }
}
const fb = new pb;

function kr(e) {
    const t = `; ${document.cookie}`.split(`; ${e}=`);
    return t.length === 2 ? t.pop().split(";").shift() : !1
}

function mb(e, t) {
    document.cookie = e + "=" + t
}
class gb extends gt {
    constructor() {
        super(), super.name = "show on timeout", this.arrivalTime = null
    }
    createCookie() {
        if (E()) {
            this.arrivalTime = new Date().getTime();
            return
        }(this.arrivalTime === null || E()) && (kr("buttonizer-first-visit") ? this.arrivalTime = Number(kr("buttonizer-first-visit")) : (this.arrivalTime = new Date().getTime(), document.cookie = `buttonizer-first-visit=${this.arrivalTime};path=/`))
    }
    onSubscribe(t) {
        if (!k(t, "data.advanced_timeout_once", !0)) {
            setTimeout(() => {
                k(t, "data.advanced_timeout_hide", !1) ? t.element.classList.add(t.stylesheet.classes.hiddenTimeout) : t.element.classList.remove(t.stylesheet.classes.hiddenTimeout)
            }, Number(k(t, "data.advanced_timeout", 0))), k(t, "data.advanced_timeout_hide", !1) || t.element.classList.add(t.stylesheet.classes.hiddenTimeout);
            return
        }
        this.createCookie();
        let n = this.arrivalTime + Number(k(t, "data.advanced_timeout", 0)) - Date.now();
        n > 0 ? (setTimeout(() => {
            k(t, "data.advanced_timeout_hide", !1) ? t.element.classList.add(t.stylesheet.classes.hiddenTimeout) : t.element.classList.remove(t.stylesheet.classes.hiddenTimeout)
        }, n), k(t, "data.advanced_timeout_hide", !1) || t.element.classList.add(t.stylesheet.classes.hiddenTimeout)) : k(t, "data.advanced_timeout_hide", !1) && t.element.classList.add(t.stylesheet.classes.hiddenTimeout)
    }
}
const bb = new gb;
class ts extends _t {
    constructor(t) {
        super(), this.callback = t, this.button, this.mouseoverListener = () => this.callback(!0), this.mouseoutListener = () => this.callback(!1)
    }
    generate({
        element: t = this.button
    } = {}) {
        this.button = t, this.button.addEventListener("mouseover", this.mouseoverListener), this.button.addEventListener("mouseout", this.mouseoutListener)
    }
    disable() {
        this.button.removeEventListener("mouseover", this.mouseoverListener), this.button.removeEventListener("mouseout", this.mouseoutListener)
    }
}
class es {
    constructor({
        data: t,
        generators: n = [],
        stylesheet: r
    }) {
        this.data = t, this.generators = n, this.stylesheet = r
    }
    render() {
        return this.element = document.createElement("i"), this.element.setAttribute("aria-hidden", "true"), this.JSS = {
            icon: {
                color: this.data.icon_color[0],
                "font-size": this.data.icon_size[0]
            },
            button: {
                "&:hover": {
                    "& $icon": {
                        color: this.data.icon_color[1],
                        "font-size": this.data.icon_size[1] == null ? this.data.icon_size[0] : this.data.icon_size[1]
                    }
                }
            }
        }, this.element.className = Ct(this.data.icon[0] || ae[this.data.model].icon[0], this.stylesheet.classes.icon), this.data.icon[1] && this.generators.push(new ts(t => this.setHoverIcon(t))), this
    }
    setHoverIcon(t) {
        t ? this.element.className = Ct(this.data.icon[1], this.stylesheet.classes.icon) : this.element.className = Ct(this.data.icon[0] || ae[this.data.model].icon[0], this.stylesheet.classes.icon)
    }
}
class _b {
    constructor({
        data: t,
        generators: n = [],
        stylesheet: r
    }) {
        this.data = t, this.generators = n, this.stylesheet = r
    }
    render() {
        return this.element = document.createElement("img"), this.stylesheet.update({
            image: {
                width: this.data.icon_image_size[0],
                "border-radius": this.data.icon_image_border_radius[0]
            },
            button: {
                "&:hover": {
                    "& $image": {
                        width: this.data.icon_image_size[1],
                        "border-radius": this.data.icon_image_border_radius[1]
                    }
                }
            }
        }), this.element.src = this.data.icon_image[0], this.element.className = Ct(this.stylesheet.classes.image), this.data.icon_image[1] && this.generators.push(new ts(t => this.setHoverImage(t))), this
    }
    setHoverImage(t) {
        t ? this.element.src = this.data.icon_image[1] : this.element.src = this.data.icon_image[0]
    }
}
var Te, T, ns, Wt, rs, is, Sr, os, $e = {},
    ss = [],
    yb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    xn = Array.isArray;

function $t(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function as(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function ls(e, t, n) {
    var r, i, o, s = {};
    for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Te.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
        for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
    return Ie(e, s, r, i, null)
}

function Ie(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i != null ? i : ++ns,
        __i: -1,
        __u: 0
    };
    return i == null && T.vnode != null && T.vnode(o), o
}

function Le(e) {
    return e.children
}

function Be(e, t) {
    this.props = e, this.context = t
}

function le(e, t) {
    if (t == null) return e.__ ? le(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? le(e) : null
}

function us(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return us(e)
    }
}

function Or(e) {
    (!e.__d && (e.__d = !0) && Wt.push(e) && !kn.__r++ || rs !== T.debounceRendering) && ((rs = T.debounceRendering) || is)(kn)
}

function kn() {
    var e, t, n, r, i, o, s, a, l;
    for (Wt.sort(Sr); e = Wt.shift();) e.__d && (t = Wt.length, r = void 0, o = (i = (n = e).__v).__e, a = [], l = [], (s = n.__P) && ((r = $t({}, i)).__v = i.__v + 1, T.vnode && T.vnode(r), jr(s, r, i, n.__n, s.ownerSVGElement !== void 0, 32 & i.__u ? [o] : null, a, o != null ? o : le(i), !!(32 & i.__u), l), r.__.__k[r.__i] = r, gs(a, r, l), r.__e != o && us(r)), Wt.length > t && Wt.sort(Sr));
    kn.__r = 0
}

function cs(e, t, n, r, i, o, s, a, l, u, c) {
    var d, m, g, b, w, x = r && r.__k || ss,
        S = t.length;
    for (n.__d = l, vb(n, t, x), l = n.__d, d = 0; d < S; d++)(g = n.__k[d]) != null && typeof g != "boolean" && typeof g != "function" && (m = g.__i === -1 ? $e : x[g.__i] || $e, g.__i = d, jr(e, g, m, i, o, s, a, l, u, c), b = g.__e, g.ref && m.ref != g.ref && (m.ref && zr(m.ref, null, g), c.push(g.ref, g.__c || b, g)), w == null && b != null && (w = b), 65536 & g.__u || m.__k === g.__k ? l = ds(g, l, e) : typeof g.type == "function" && g.__d !== void 0 ? l = g.__d : b && (l = b.nextSibling), g.__d = void 0, g.__u &= -196609);
    n.__d = l, n.__e = w
}

function vb(e, t, n) {
    var r, i, o, s, a, l = t.length,
        u = n.length,
        c = u,
        d = 0;
    for (e.__k = [], r = 0; r < l; r++)(i = e.__k[r] = (i = t[r]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Ie(null, i, null, null, i) : xn(i) ? Ie(Le, {
        children: i
    }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? Ie(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = e, i.__b = e.__b + 1, a = wb(i, n, s = r + d, c), i.__i = a, o = null, a !== -1 && (c--, (o = n[a]) && (o.__u |= 131072)), o == null || o.__v === null ? (a == -1 && d--, typeof i.type != "function" && (i.__u |= 65536)) : a !== s && (a === s + 1 ? d++ : a > s ? c > l - s ? d += a - s : d-- : d = a < s && a == s - 1 ? a - s : 0, a !== r + d && (i.__u |= 65536))) : (o = n[r]) && o.key == null && o.__e && (o.__e == e.__d && (e.__d = le(o)), Er(o, o, !1), n[r] = null, c--);
    if (c)
        for (r = 0; r < u; r++)(o = n[r]) != null && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = le(o)), Er(o, o))
}

function ds(e, t, n) {
    var r, i;
    if (typeof e.type == "function") {
        for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = e, t = ds(r[i], t, n));
        return t
    }
    return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling
}

function hs(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (xn(e) ? e.some(function(n) {
        hs(n, t)
    }) : t.push(e)), t
}

function wb(e, t, n, r) {
    var i = e.key,
        o = e.type,
        s = n - 1,
        a = n + 1,
        l = t[n];
    if (l === null || l && i == l.key && o === l.type) return n;
    if (r > (l != null && !(131072 & l.__u) ? 1 : 0))
        for (; s >= 0 || a < t.length;) {
            if (s >= 0) {
                if ((l = t[s]) && !(131072 & l.__u) && i == l.key && o === l.type) return s;
                s--
            }
            if (a < t.length) {
                if ((l = t[a]) && !(131072 & l.__u) && i == l.key && o === l.type) return a;
                a++
            }
        }
    return -1
}

function ps(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n != null ? n : "") : e[t] = n == null ? "" : typeof n != "number" || yb.test(t) ? n : n + "px"
}

function Sn(e, t, n, r, i) {
    var o;
    t: if (t === "style")
        if (typeof n == "string") e.style.cssText = n;
        else {
            if (typeof r == "string" && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || ps(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || ps(e.style, t, n[t])
        }
    else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, o ? ms : fs, o)) : e.removeEventListener(t, o ? ms : fs, o);
    else {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e) try {
            e[t] = n != null ? n : "";
            break t
        } catch (s) {}
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
}

function fs(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= t.u) return
    } else e.t = Date.now();
    return t(T.event ? T.event(e) : e)
}

function ms(e) {
    return this.l[e.type + !0](T.event ? T.event(e) : e)
}

function jr(e, t, n, r, i, o, s, a, l, u) {
    var c, d, m, g, b, w, x, S, A, C, L, V, vt, st, ct, tt = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && (l = !!(32 & n.__u), o = [a = t.__e = n.__e]), (c = T.__b) && c(t);
    t: if (typeof tt == "function") try {
        if (S = t.props, A = (c = tt.contextType) && r[c.__c], C = c ? A ? A.props.value : c.__ : r, n.__c ? x = (d = t.__c = n.__c).__ = d.__E : ("prototype" in tt && tt.prototype.render ? t.__c = d = new tt(S, C) : (t.__c = d = new Be(S, C), d.constructor = tt, d.render = kb), A && A.sub(d), d.props = S, d.state || (d.state = {}), d.context = C, d.__n = r, m = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), tt.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = $t({}, d.__s)), $t(d.__s, tt.getDerivedStateFromProps(S, d.__s))), g = d.props, b = d.state, d.__v = t, m) tt.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
            if (tt.getDerivedStateFromProps == null && S !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(S, C), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(S, d.__s, C) === !1 || t.__v === n.__v)) {
                for (t.__v !== n.__v && (d.props = S, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(wt) {
                        wt && (wt.__ = t)
                    }), L = 0; L < d._sb.length; L++) d.__h.push(d._sb[L]);
                d._sb = [], d.__h.length && s.push(d);
                break t
            }
            d.componentWillUpdate != null && d.componentWillUpdate(S, d.__s, C), d.componentDidUpdate != null && d.__h.push(function() {
                d.componentDidUpdate(g, b, w)
            })
        }
        if (d.context = C, d.props = S, d.__P = e, d.__e = !1, V = T.__r, vt = 0, "prototype" in tt && tt.prototype.render) {
            for (d.state = d.__s, d.__d = !1, V && V(t), c = d.render(d.props, d.state, d.context), st = 0; st < d._sb.length; st++) d.__h.push(d._sb[st]);
            d._sb = []
        } else
            do d.__d = !1, V && V(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++vt < 25);
        d.state = d.__s, d.getChildContext != null && (r = $t($t({}, r), d.getChildContext())), m || d.getSnapshotBeforeUpdate == null || (w = d.getSnapshotBeforeUpdate(g, b)), cs(e, xn(ct = c != null && c.type === Le && c.key == null ? c.props.children : c) ? ct : [ct], t, n, r, i, o, s, a, l, u), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), x && (d.__E = d.__ = null)
    } catch (wt) {
        t.__v = null, l || o != null ? (t.__e = a, t.__u |= l ? 160 : 32, o[o.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), T.__e(wt, t, n)
    } else o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xb(n.__e, t, n, r, i, o, s, l, u);
    (c = T.diffed) && c(t)
}

function gs(e, t, n) {
    t.__d = void 0;
    for (var r = 0; r < n.length; r++) zr(n[r], n[++r], n[++r]);
    T.__c && T.__c(t, e), e.some(function(i) {
        try {
            e = i.__h, i.__h = [], e.some(function(o) {
                o.call(i)
            })
        } catch (o) {
            T.__e(o, i.__v)
        }
    })
}

function xb(e, t, n, r, i, o, s, a, l) {
    var u, c, d, m, g, b, w, x = n.props,
        S = t.props,
        A = t.type;
    if (A === "svg" && (i = !0), o != null) {
        for (u = 0; u < o.length; u++)
            if ((g = o[u]) && "setAttribute" in g == !!A && (A ? g.localName === A : g.nodeType === 3)) {
                e = g, o[u] = null;
                break
            }
    }
    if (e == null) {
        if (A === null) return document.createTextNode(S);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", A) : document.createElement(A, S.is && S), o = null, a = !1
    }
    if (A === null) x === S || a && e.data === S || (e.data = S);
    else {
        if (o = o && Te.call(e.childNodes), x = n.props || $e, !a && o != null)
            for (x = {}, u = 0; u < e.attributes.length; u++) x[(g = e.attributes[u]).name] = g.value;
        for (u in x) g = x[u], u == "children" || (u == "dangerouslySetInnerHTML" ? d = g : u === "key" || u in S || Sn(e, u, null, g, i));
        for (u in S) g = S[u], u == "children" ? m = g : u == "dangerouslySetInnerHTML" ? c = g : u == "value" ? b = g : u == "checked" ? w = g : u === "key" || a && typeof g != "function" || x[u] === g || Sn(e, u, g, x[u], i);
        if (c) a || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
        else if (d && (e.innerHTML = ""), cs(e, xn(m) ? m : [m], t, n, r, i && A !== "foreignObject", o, s, o ? o[0] : n.__k && le(n, 0), a, l), o != null)
            for (u = o.length; u--;) o[u] != null && as(o[u]);
        a || (u = "value", b !== void 0 && (b !== e[u] || A === "progress" && !b || A === "option" && b !== x[u]) && Sn(e, u, b, x[u], !1), u = "checked", w !== void 0 && w !== e[u] && Sn(e, u, w, x[u], !1))
    }
    return e
}

function zr(e, t, n) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (r) {
        T.__e(r, n)
    }
}

function Er(e, t, n) {
    var r, i;
    if (T.unmount && T.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || zr(r, null, t)), (r = e.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (o) {
            T.__e(o, t)
        }
        r.base = r.__P = null, e.__c = void 0
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && Er(r[i], t, n || typeof e.type != "function");
    n || e.__e == null || as(e.__e), e.__ = e.__e = e.__d = void 0
}

function kb(e, t, n) {
    return this.constructor(e, n)
}

function bs(e, t, n) {
    var r, i, o, s;
    T.__ && T.__(e, t), i = (r = typeof n == "function") ? null : t.__k, o = [], s = [], jr(t, e = (!r && n || t).__k = ls(Le, null, [e]), i || $e, $e, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Te.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r, s), gs(o, e, s)
}

function Sb(e, t, n) {
    var r, i, o, s, a = $t({}, e.props);
    for (o in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o] === void 0 && s !== void 0 ? s[o] : t[o];
    return arguments.length > 2 && (a.children = arguments.length > 3 ? Te.call(arguments, 2) : n), Ie(e.type, a, r || e.key, i || e.ref, null)
}

function Ob(e, t) {
    var n = {
        __c: t = "__cC" + os++,
        __: e,
        Consumer: function(r, i) {
            return r.children(i)
        },
        Provider: function(r) {
            var i, o;
            return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
                return o
            }, this.shouldComponentUpdate = function(s) {
                this.props.value !== s.value && i.some(function(a) {
                    a.__e = !0, Or(a)
                })
            }, this.sub = function(s) {
                i.push(s);
                var a = s.componentWillUnmount;
                s.componentWillUnmount = function() {
                    i.splice(i.indexOf(s), 1), a && a.call(s)
                }
            }), r.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Te = ss.slice, T = {
    __e: function(e, t, n, r) {
        for (var i, o, s; t = t.__;)
            if ((i = t.__c) && !i.__) try {
                if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), s = i.__d), s) return i.__E = i
            } catch (a) {
                e = a
            }
        throw e
    }
}, ns = 0, Be.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $t({}, this.state), typeof e == "function" && (e = e($t({}, n), this.props)), e && $t(n, e), e != null && this.__v && (t && this._sb.push(t), Or(this))
}, Be.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Or(this))
}, Be.prototype.render = Le, Wt = [], is = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Sr = function(e, t) {
    return e.__v.__b - t.__v.__b
}, kn.__r = 0, os = 0;
var _s = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })(ze, function() {
        var n = /\r\n?/g,
            r = /\t/g,
            i = /\f/g,
            o = function(h) {
                return h.replace(n, `
`).replace(i, "").replace(r, "    ")
            },
            s = function(h, f) {
                var p = h || {};
                if (f != null)
                    for (var v in f) Object.prototype.hasOwnProperty.call(f, v) && (p[v] = f[v]);
                return p
            },
            a = function(h, f) {
                var p = Object.keys(h).filter(function(P) {
                    var z = h[P];
                    if (z == null || z.match == null) return !1;
                    var U = z.order;
                    return (typeof U != "number" || !isFinite(U)) && typeof console < "u" && console.warn("simple-markdown: Invalid order for rule `" + P + "`: " + String(U)), !0
                });
                p.sort(function(P, z) {
                    var U = h[P],
                        q = h[z],
                        N = U.order,
                        K = q.order;
                    if (N !== K) return N - K;
                    var et = U.quality ? 0 : 1,
                        nt = q.quality ? 0 : 1;
                    return et !== nt ? et - nt : P < z ? -1 : P > z ? 1 : 0
                });
                var v, O = function(P, z) {
                        var U = [];
                        for (z = z || v, v = z; P;) {
                            var q = null,
                                N = null,
                                K = null,
                                et = NaN,
                                nt = 0,
                                it = p[0],
                                Z = h[it];
                            do {
                                var kt = Z.order,
                                    mt = z.prevCapture == null ? "" : z.prevCapture[0],
                                    St = Z.match(P, z, mt);
                                if (St) {
                                    var Ye = Z.quality ? Z.quality(St, z, mt) : 0;
                                    Ye <= et || (q = it, N = Z, K = St, et = Ye)
                                }
                                nt++, it = p[nt], Z = h[it]
                            } while (Z && (!K || Z.order === kt && Z.quality));
                            if (N == null || K == null) throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + p[p.length - 1] + `'. It seems to not match the following source:
` + P);
                            if (K.index) throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
                            var Pt = N.parse(K, O, z);
                            Array.isArray(Pt) ? Array.prototype.push.apply(U, Pt) : (Pt.type == null && (Pt.type = q), U.push(Pt)), z.prevCapture = K, P = P.substring(z.prevCapture[0].length)
                        }
                        return U
                    },
                    R = function(P, z) {
                        return v = s(z, f), !v.inline && !v.disableAutoBlockNewlines && (P = P + `

`), v.prevCapture = null, O(o(P), v)
                    };
                return R
            },
            l = function(h) {
                var f = function(p, v) {
                    return v.inline ? h.exec(p) : null
                };
                return f.regex = h, f
            },
            u = function(h) {
                var f = function(p, v) {
                    return v.inline ? null : h.exec(p)
                };
                return f.regex = h, f
            },
            c = function(h) {
                var f = function(p, v) {
                    return h.exec(p)
                };
                return f.regex = h, f
            },
            d = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103,
            m = function(h, f, p) {
                var v = {
                    $$typeof: d,
                    type: h,
                    key: f != null ? f : void 0,
                    ref: null,
                    props: p,
                    _owner: null
                };
                return v
            },
            g = function(h, f, p, v) {
                p = p || {}, v = typeof v < "u" ? v : !0;
                var O = "";
                for (var R in p) {
                    var P = p[R];
                    Object.prototype.hasOwnProperty.call(p, R) && P && (O += " " + A(R) + '="' + A(P) + '"')
                }
                var z = "<" + h + O + ">";
                return v ? z + f + "</" + h + ">" : z
            },
            b = {},
            w = function(h) {
                if (h == null) return null;
                try {
                    var f = decodeURIComponent(h).replace(/[^A-Za-z0-9/:]/g, "").toLowerCase();
                    if (f.indexOf("javascript:") === 0 || f.indexOf("vbscript:") === 0 || f.indexOf("data:") === 0) return null
                } catch (p) {
                    return null
                }
                return h
            },
            x = /[<>&"']/g,
            S = {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;",
                "`": "&#96;"
            },
            A = function(h) {
                return String(h).replace(x, function(f) {
                    return S[f]
                })
            },
            C = /\\([^0-9A-Za-z\s])/g,
            L = function(h) {
                return h.replace(C, "$1")
            },
            V = function(h, f, p) {
                var v = p.inline || !1;
                p.inline = !0;
                var O = h(f, p);
                return p.inline = v, O
            },
            vt = function(h, f, p) {
                var v = p.inline || !1;
                p.inline = !1;
                var O = h(f + `

`, p);
                return p.inline = v, O
            },
            st = function(h, f, p) {
                return {
                    content: V(f, h[1], p)
                }
            },
            ct = function() {
                return {}
            },
            tt = "(?:[*+-]|\\d+\\.)",
            wt = "( *)(" + tt + ") +",
            Ut = new RegExp("^" + wt),
            Dn = new RegExp(wt + "[^\\n]*(?:\\n(?!\\1" + tt + ` )[^\\n]*)*(
|$)`, "gm"),
            _e = /\n{2,}$/,
            at = /^ (?= *`)|(` *) $/g,
            xt = _e,
            ye = / *\n+$/,
            j = new RegExp("^( *)(" + tt + `) [\\s\\S]+?(?:
{2,}(?! )(?!\\1` + tt + ` )\\n*|\\s*
*$)`),
            F = /(?:^|\n)( *)$/,
            W = function() {
                var h = /^ *\| *| *\| *$/g,
                    f = / *$/,
                    p = /^ *-+: *$/,
                    v = /^ *:-+: *$/,
                    O = /^ *:-+ *$/,
                    R = function(N) {
                        return p.test(N) ? "right" : v.test(N) ? "center" : O.test(N) ? "left" : null
                    },
                    P = function(N, K, et, nt) {
                        nt && (N = N.replace(h, ""));
                        var it = N.trim().split("|");
                        return it.map(R)
                    },
                    z = function(N, K, et, nt) {
                        var it = et.inTable;
                        et.inTable = !0;
                        var Z = K(N.trim(), et);
                        et.inTable = it;
                        var kt = [
                            []
                        ];
                        return Z.forEach(function(mt, St) {
                            mt.type === "tableSeparator" ? (!nt || St !== 0 && St !== Z.length - 1) && kt.push([]) : (mt.type === "text" && (Z[St + 1] == null || Z[St + 1].type === "tableSeparator") && (mt.content = mt.content.replace(f, "")), kt[kt.length - 1].push(mt))
                        }), kt
                    },
                    U = function(N, K, et, nt) {
                        var it = N.trim().split(`
`);
                        return it.map(function(Z) {
                            return z(Z, K, et, nt)
                        })
                    },
                    q = function(N) {
                        return function(K, et, nt) {
                            nt.inline = !0;
                            var it = z(K[1], et, nt, N),
                                Z = P(K[2], et, nt, N),
                                kt = U(K[3], et, nt, N);
                            return nt.inline = !1, {
                                type: "table",
                                header: it,
                                align: Z,
                                cells: kt
                            }
                        }
                    };
                return {
                    parseTable: q(!0),
                    parseNpTable: q(!1),
                    TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                    NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                }
            }(),
            lt = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
            ve = `\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*`,
            jl = /mailto:/i,
            Oi = function(h, f, p) {
                var v = (h[2] || h[1]).replace(/\s+/g, " ").toLowerCase();
                if (f._defs && f._defs[v]) {
                    var O = f._defs[v];
                    p.target = O.target, p.title = O.title
                }
                return f._refs = f._refs || {}, f._refs[v] = f._refs[v] || [], f._refs[v].push(p), p
            },
            H = 0,
            we = {
                Array: {
                    react: function(h, f, p) {
                        for (var v = p.key, O = [], R = 0, P = 0; R < h.length; R++, P++) {
                            p.key = "" + R;
                            var z = h[R];
                            if (z.type === "text")
                                for (z = {
                                        type: "text",
                                        content: z.content
                                    }; R + 1 < h.length && h[R + 1].type === "text"; R++) z.content += h[R + 1].content;
                            O.push(f(z, p))
                        }
                        return p.key = v, O
                    },
                    html: function(h, f, p) {
                        for (var v = "", O = 0; O < h.length; O++) {
                            var R = h[O];
                            if (R.type === "text")
                                for (R = {
                                        type: "text",
                                        content: R.content
                                    }; O + 1 < h.length && h[O + 1].type === "text"; O++) R.content += h[O + 1].content;
                            v += f(R, p)
                        }
                        return v
                    }
                },
                heading: {
                    order: H++,
                    match: u(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                    parse: function(h, f, p) {
                        return {
                            level: h[1].length,
                            content: V(f, h[2].trim(), p)
                        }
                    },
                    react: function(h, f, p) {
                        return m("h" + h.level, p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("h" + h.level, f(h.content, p))
                    }
                },
                nptable: {
                    order: H++,
                    match: u(W.NPTABLE_REGEX),
                    parse: W.parseNpTable,
                    react: null,
                    html: null
                },
                lheading: {
                    order: H++,
                    match: u(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                    parse: function(h, f, p) {
                        return {
                            type: "heading",
                            level: h[2] === "=" ? 1 : 2,
                            content: V(f, h[1], p)
                        }
                    },
                    react: null,
                    html: null
                },
                hr: {
                    order: H++,
                    match: u(/^( *[-*_]){3,} *(?:\n *)+\n/),
                    parse: ct,
                    react: function(h, f, p) {
                        return m("hr", p.key, b)
                    },
                    html: function(h, f, p) {
                        return "<hr>"
                    }
                },
                codeBlock: {
                    order: H++,
                    match: u(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                    parse: function(h, f, p) {
                        var v = h[0].replace(/^    /gm, "").replace(/\n+$/, "");
                        return {
                            lang: void 0,
                            content: v
                        }
                    },
                    react: function(h, f, p) {
                        var v = h.lang ? "markdown-code-" + h.lang : void 0;
                        return m("pre", p.key, {
                            children: m("code", null, {
                                className: v,
                                children: h.content
                            })
                        })
                    },
                    html: function(h, f, p) {
                        var v = h.lang ? "markdown-code-" + h.lang : void 0,
                            O = g("code", A(h.content), {
                                class: v
                            });
                        return g("pre", O)
                    }
                },
                fence: {
                    order: H++,
                    match: u(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                    parse: function(h, f, p) {
                        return {
                            type: "codeBlock",
                            lang: h[2] || void 0,
                            content: h[3]
                        }
                    },
                    react: null,
                    html: null
                },
                blockQuote: {
                    order: H++,
                    match: u(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                    parse: function(h, f, p) {
                        var v = h[0].replace(/^ *> ?/gm, "");
                        return {
                            content: f(v, p)
                        }
                    },
                    react: function(h, f, p) {
                        return m("blockquote", p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("blockquote", f(h.content, p))
                    }
                },
                list: {
                    order: H++,
                    match: function(h, f) {
                        var p = f.prevCapture == null ? "" : f.prevCapture[0],
                            v = F.exec(p),
                            O = f._list || !f.inline;
                        return v && O ? (h = v[1] + h, j.exec(h)) : null
                    },
                    parse: function(h, f, p) {
                        var v = h[2],
                            O = v.length > 1,
                            R = O ? +v : void 0,
                            P = h[0].replace(xt, `
`).match(Dn),
                            z = !1,
                            U = P.map(function(q, N) {
                                var K = Ut.exec(q),
                                    et = K ? K[0].length : 0,
                                    nt = new RegExp("^ {1," + et + "}", "gm"),
                                    it = q.replace(nt, "").replace(Ut, ""),
                                    Z = N === P.length - 1,
                                    kt = it.indexOf(`

`) !== -1,
                                    mt = kt || Z && z;
                                z = mt;
                                var St = p.inline,
                                    Ye = p._list;
                                p._list = !0;
                                var Pt;
                                mt ? (p.inline = !1, Pt = it.replace(ye, `

`)) : (p.inline = !0, Pt = it.replace(ye, ""));
                                var $l = f(Pt, p);
                                return p.inline = St, p._list = Ye, $l
                            });
                        return {
                            ordered: O,
                            start: R,
                            items: U
                        }
                    },
                    react: function(h, f, p) {
                        var v = h.ordered ? "ol" : "ul";
                        return m(v, p.key, {
                            start: h.start,
                            children: h.items.map(function(O, R) {
                                return m("li", "" + R, {
                                    children: f(O, p)
                                })
                            })
                        })
                    },
                    html: function(h, f, p) {
                        var v = h.items.map(function(P) {
                                return g("li", f(P, p))
                            }).join(""),
                            O = h.ordered ? "ol" : "ul",
                            R = {
                                start: h.start
                            };
                        return g(O, v, R)
                    }
                },
                def: {
                    order: H++,
                    match: u(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                    parse: function(h, f, p) {
                        var v = h[1].replace(/\s+/g, " ").toLowerCase(),
                            O = h[2],
                            R = h[3];
                        return p._refs && p._refs[v] && p._refs[v].forEach(function(P) {
                            P.target = O, P.title = R
                        }), p._defs = p._defs || {}, p._defs[v] = {
                            target: O,
                            title: R
                        }, {
                            def: v,
                            target: O,
                            title: R
                        }
                    },
                    react: function() {
                        return null
                    },
                    html: function() {
                        return ""
                    }
                },
                table: {
                    order: H++,
                    match: u(W.TABLE_REGEX),
                    parse: W.parseTable,
                    react: function(h, f, p) {
                        var v = function(P) {
                                return h.align[P] == null ? {} : {
                                    textAlign: h.align[P]
                                }
                            },
                            O = h.header.map(function(P, z) {
                                return m("th", "" + z, {
                                    style: v(z),
                                    scope: "col",
                                    children: f(P, p)
                                })
                            }),
                            R = h.cells.map(function(P, z) {
                                return m("tr", "" + z, {
                                    children: P.map(function(U, q) {
                                        return m("td", "" + q, {
                                            style: v(q),
                                            children: f(U, p)
                                        })
                                    })
                                })
                            });
                        return m("table", p.key, {
                            children: [m("thead", "thead", {
                                children: m("tr", null, {
                                    children: O
                                })
                            }), m("tbody", "tbody", {
                                children: R
                            })]
                        })
                    },
                    html: function(h, f, p) {
                        var v = function(U) {
                                return h.align[U] == null ? "" : "text-align:" + h.align[U] + ";"
                            },
                            O = h.header.map(function(U, q) {
                                return g("th", f(U, p), {
                                    style: v(q),
                                    scope: "col"
                                })
                            }).join(""),
                            R = h.cells.map(function(U) {
                                var q = U.map(function(N, K) {
                                    return g("td", f(N, p), {
                                        style: v(K)
                                    })
                                }).join("");
                                return g("tr", q)
                            }).join(""),
                            P = g("thead", g("tr", O)),
                            z = g("tbody", R);
                        return g("table", P + z)
                    }
                },
                newline: {
                    order: H++,
                    match: u(/^(?:\n *)*\n/),
                    parse: ct,
                    react: function(h, f, p) {
                        return `
`
                    },
                    html: function(h, f, p) {
                        return `
`
                    }
                },
                paragraph: {
                    order: H++,
                    match: u(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                    parse: st,
                    react: function(h, f, p) {
                        return m("div", p.key, {
                            className: "paragraph",
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        var v = {
                            class: "paragraph"
                        };
                        return g("div", f(h.content, p), v)
                    }
                },
                escape: {
                    order: H++,
                    match: l(/^\\([^0-9A-Za-z\s])/),
                    parse: function(h, f, p) {
                        return {
                            type: "text",
                            content: h[1]
                        }
                    },
                    react: null,
                    html: null
                },
                tableSeparator: {
                    order: H++,
                    match: function(h, f) {
                        return f.inTable ? /^ *\| */.exec(h) : null
                    },
                    parse: function() {
                        return {
                            type: "tableSeparator"
                        }
                    },
                    react: function() {
                        return " | "
                    },
                    html: function() {
                        return " &vert; "
                    }
                },
                autolink: {
                    order: H++,
                    match: l(/^<([^: >]+:\/[^ >]+)>/),
                    parse: function(h, f, p) {
                        return {
                            type: "link",
                            content: [{
                                type: "text",
                                content: h[1]
                            }],
                            target: h[1]
                        }
                    },
                    react: null,
                    html: null
                },
                mailto: {
                    order: H++,
                    match: l(/^<([^ >]+@[^ >]+)>/),
                    parse: function(h, f, p) {
                        var v = h[1],
                            O = h[1];
                        return jl.test(O) || (O = "mailto:" + O), {
                            type: "link",
                            content: [{
                                type: "text",
                                content: v
                            }],
                            target: O
                        }
                    },
                    react: null,
                    html: null
                },
                url: {
                    order: H++,
                    match: l(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                    parse: function(h, f, p) {
                        return {
                            type: "link",
                            content: [{
                                type: "text",
                                content: h[1]
                            }],
                            target: h[1],
                            title: void 0
                        }
                    },
                    react: null,
                    html: null
                },
                link: {
                    order: H++,
                    match: l(new RegExp("^\\[(" + lt + ")\\]\\(" + ve + "\\)")),
                    parse: function(h, f, p) {
                        var v = {
                            content: f(h[1], p),
                            target: L(h[2]),
                            title: h[3]
                        };
                        return v
                    },
                    react: function(h, f, p) {
                        return m("a", p.key, {
                            href: w(h.target),
                            title: h.title,
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        var v = {
                            href: w(h.target),
                            title: h.title
                        };
                        return g("a", f(h.content, p), v)
                    }
                },
                image: {
                    order: H++,
                    match: l(new RegExp("^!\\[(" + lt + ")\\]\\(" + ve + "\\)")),
                    parse: function(h, f, p) {
                        var v = {
                            alt: h[1],
                            target: L(h[2]),
                            title: h[3]
                        };
                        return v
                    },
                    react: function(h, f, p) {
                        return m("img", p.key, {
                            src: w(h.target),
                            alt: h.alt,
                            title: h.title
                        })
                    },
                    html: function(h, f, p) {
                        var v = {
                            src: w(h.target),
                            alt: h.alt,
                            title: h.title
                        };
                        return g("img", "", v, !1)
                    }
                },
                reflink: {
                    order: H++,
                    match: l(new RegExp("^\\[(" + lt + ")\\]\\s*\\[([^\\]]*)\\]")),
                    parse: function(h, f, p) {
                        return Oi(h, p, {
                            type: "link",
                            content: f(h[1], p)
                        })
                    },
                    react: null,
                    html: null
                },
                refimage: {
                    order: H++,
                    match: l(new RegExp("^!\\[(" + lt + ")\\]\\s*\\[([^\\]]*)\\]")),
                    parse: function(h, f, p) {
                        return Oi(h, p, {
                            type: "image",
                            alt: h[1]
                        })
                    },
                    react: null,
                    html: null
                },
                em: {
                    order: H,
                    match: l(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),
                    quality: function(h) {
                        return h[0].length + .2
                    },
                    parse: function(h, f, p) {
                        return {
                            content: f(h[2] || h[1], p)
                        }
                    },
                    react: function(h, f, p) {
                        return m("em", p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("em", f(h.content, p))
                    }
                },
                strong: {
                    order: H,
                    match: l(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                    quality: function(h) {
                        return h[0].length + .1
                    },
                    parse: st,
                    react: function(h, f, p) {
                        return m("strong", p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("strong", f(h.content, p))
                    }
                },
                u: {
                    order: H++,
                    match: l(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                    quality: function(h) {
                        return h[0].length
                    },
                    parse: st,
                    react: function(h, f, p) {
                        return m("u", p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("u", f(h.content, p))
                    }
                },
                del: {
                    order: H++,
                    match: l(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),
                    parse: st,
                    react: function(h, f, p) {
                        return m("del", p.key, {
                            children: f(h.content, p)
                        })
                    },
                    html: function(h, f, p) {
                        return g("del", f(h.content, p))
                    }
                },
                inlineCode: {
                    order: H++,
                    match: l(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                    parse: function(h, f, p) {
                        return {
                            content: h[2].replace(at, "$1")
                        }
                    },
                    react: function(h, f, p) {
                        return m("code", p.key, {
                            children: h.content
                        })
                    },
                    html: function(h, f, p) {
                        return g("code", A(h.content))
                    }
                },
                br: {
                    order: H++,
                    match: c(/^ {2,}\n/),
                    parse: ct,
                    react: function(h, f, p) {
                        return m("br", p.key, b)
                    },
                    html: function(h, f, p) {
                        return "<br>"
                    }
                },
                text: {
                    order: H++,
                    match: c(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                    parse: function(h, f, p) {
                        return {
                            content: h[0]
                        }
                    },
                    react: function(h, f, p) {
                        return h.content
                    },
                    html: function(h, f, p) {
                        return A(h.content)
                    }
                }
            },
            zl = function(h, f) {
                !f && typeof console < "u" && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");
                var p = function(v, O, R) {
                    return h[v.type][f](v, O, R)
                };
                return p
            },
            El = function(h) {
                var f = function(p, v) {
                    if (v = v || {}, Array.isArray(p)) {
                        for (var O = v.key, R = [], P = null, z = 0; z < p.length; z++) {
                            v.key = "" + z;
                            var U = f(p[z], v);
                            typeof U == "string" && typeof P == "string" ? (P = P + U, R[R.length - 1] = P) : (R.push(U), P = U)
                        }
                        return v.key = O, R
                    } else return h(p, f, v)
                };
                return f
            },
            Pl = function(h) {
                var f = function(p, v) {
                    return v = v || {}, Array.isArray(p) ? p.map(function(O) {
                        return f(O, v)
                    }).join("") : h(p, f, v)
                };
                return f
            },
            Fn = function(h, f, p) {
                if (!f) throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
                var v, O = h.Array || we.Array,
                    R = O[f];
                if (!R) throw new Error("simple-markdown: outputFor: to join nodes of type `" + f + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
                var P = R,
                    z = function(q, N) {
                        return N = N || v, v = N, Array.isArray(q) ? P(q, z, N) : h[q.type][f](q, z, N)
                    },
                    U = function(q, N) {
                        return v = s(N, p), z(q, v)
                    };
                return U
            },
            Xe = a(we),
            Un = function(h, f) {
                return f = f || {}, f.inline = !1, Xe(h, f)
            },
            Rl = function(h, f) {
                return f = f || {}, f.inline = !0, Xe(h, f)
            },
            ji = function(h, f) {
                var p = _e.test(h);
                return f = f || {}, f.inline = !p, Xe(h, f)
            },
            Hn = Fn(we, "react"),
            zi = Fn(we, "html"),
            Ei = function(h, f) {
                return Hn(Un(h, f), f)
            },
            Al = function(h, f) {
                return zi(Un(h, f), f)
            },
            Cl = function(h) {
                var f = {};
                for (var p in h) p !== "source" && Object.prototype.hasOwnProperty.call(h, p) && (f[p] = h[p]);
                return f.children = Ei(h.source), m("div", null, f)
            },
            Tl = {
                defaultRules: we,
                parserFor: a,
                outputFor: Fn,
                inlineRegex: l,
                blockRegex: u,
                anyScopeRegex: c,
                parseInline: V,
                parseBlock: vt,
                markdownToReact: Ei,
                markdownToHtml: Al,
                ReactMarkdown: Cl,
                defaultBlockParse: Un,
                defaultInlineParse: Rl,
                defaultImplicitParse: ji,
                defaultReactOutput: Hn,
                defaultHtmlOutput: zi,
                preprocess: o,
                sanitizeText: A,
                sanitizeUrl: w,
                unescapeUrl: L,
                htmlTag: g,
                reactElement: m,
                defaultRawParse: Xe,
                ruleOutput: zl,
                reactFor: El,
                htmlFor: Pl,
                defaultParse: function() {
                    return typeof console < "u" && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"), ji.apply(null, arguments)
                },
                defaultOutput: function() {
                    return typeof console < "u" && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"), Hn.apply(null, arguments)
                }
            };
        return Tl
    })
})(_s);
var ue = _s.exports;
const ft = Lt(ue);

function ys(e, t = !1) {
    let n = {
        strong: { ...ft.defaultRules.strong,
            match: o => /^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/.exec(o),
            order: 1
        },
        em: { ...ft.defaultRules.em,
            match: o => /^\b_((?:__|\\[\s\S]|[^\\_])+?)_\b|^\*(?=\S)((?:\*\*|\\[\s\S]|\s+(?:\\[\s\S]|[^\s\*\\]|\*\*)|[^\s\*\\])+?)\*(?!\*)/.exec(o),
            order: 2
        },
        u: { ...ft.defaultRules.u,
            match: function(o) {
                return /^__([\s\S]+?)__(?!_)/.exec(o)
            },
            order: 3
        },
        del: { ...ft.defaultRules.del,
            match: function(o) {
                return /^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/.exec(o)
            },
            order: 4
        },
        newline: { ...ft.defaultRules.newline,
            match: o => /^(?<string>.*?)(?<newLine>\r?\n)/.exec(o),
            parse: (o, s, a) => ({
                capture: o,
                string: ue.parseInline(s, o.groups.string, a)
            }),
            react: function(o, s, a) {
                return `${s(o.string,a)}<br />`
            },
            html: function(o, s, a) {
                return `${s(o.string,a)}<br />`
            },
            order: 9
        },
        text: ft.defaultRules.text
    };
    t || (n = { ...n,
        list: { ...ft.defaultRules.list,
            order: 5
        },
        heading: { ...ft.defaultRules.heading,
            match: o => /^(?<level>#+) (?<content>.+)/.exec(o),
            parse: (o, s, a) => ({
                level: o.groups.level.length,
                content: ue.parseInline(s, o.groups.content, a),
                capture: o[0]
            }),
            html: (o, s, a) => o.level > 6 ? o.capture : ue.htmlTag("h" + o.level, s(o.content, a)),
            order: 6
        },
        url: { ...ft.defaultRules.url,
            match: o => /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/.exec(o),
            order: 7
        },
        link: { ...ft.defaultRules.link,
            match: o => /^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:\([^)]*\)|[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/.exec(o),
            html: (o, s, a) => {
                let l = {
                    href: ue.sanitizeUrl(o.target),
                    title: o.title,
                    target: "_blank"
                };
                return ue.htmlTag("a", s(o.content, a), l)
            },
            order: 8
        }
    });
    const r = ft.parserFor(n, {
            disableAutoBlockNewlines: !0
        }),
        i = function(o) {
            return r(o, {
                inline: !1
            })
        };
    return ft.outputFor(n, "html")(i(e))
}
const jb = "_paragraph_jgug6_1",
    zb = {
        paragraph: jb
    },
    Eb = /{(?<param>[a-zA-Z0-9\.\_]*)(\|(?<default>([^}]*)))?}/gm;

function Pr(e, t = null) {
    var n;
    let r = e;
    t || (t = B().getParameters());
    const i = [{
        parameter: "page_title",
        replacement: document == null ? void 0 : document.title,
        editorValue: "Demo Page title",
        isDefault: !0
    }, {
        parameter: "page_url",
        replacement: (n = document == null ? void 0 : document.location) == null ? void 0 : n.href,
        editorValue: "https://domain.tld/path",
        isDefault: !0
    }, {
        parameter: "product_id",
        replacement: Rb,
        editorValue: "12345",
        isDefault: !0
    }, {
        parameter: "product_name",
        replacement: Ab,
        editorValue: "Product name",
        isDefault: !0
    }];
    return Pb(r, [...i, ...t])
}

function Pb(e, t = []) {
    var o, s, a, l, u;
    let n, r = e,
        i = B().hasPremium();
    for (;
        (n = Eb.exec(e)) !== null;) {
        const c = t.find(w => w.parameter === n.groups.param);
        if (!c) {
            (!E() || n.groups.default) && (r = r.replace(n[0], (o = n.groups.default) != null ? o : ""));
            continue
        }
        const {
            replacement: d,
            editorValue: m = "",
            default_value: g = "",
            isDefault: b
        } = c;
        b ? r = r.replace(n[0], E() ? (s = n.groups.default) != null ? s : m : typeof d == "function" ? d() : d) : r = r.replace(n[0], E() || !i ? (a = n.groups.default) != null ? a : g : (u = (l = B().getParameterValue(n.groups.param)) != null ? l : n.groups.default) != null ? u : g)
    }
    return r
}

function Rb() {
    var e, t, n, r, i, o;
    return window != null && window.Shopify && (e = window == null ? void 0 : window.meta) != null && e.product ? (t = window == null ? void 0 : window.meta) == null ? void 0 : t.product.id : window != null && window._buttonizer && (r = (n = window == null ? void 0 : window._buttonizer) == null ? void 0 : n.data) != null && r.product_id ? (o = (i = window == null ? void 0 : window._buttonizer) == null ? void 0 : i.data) == null ? void 0 : o.product_id : ""
}

function Ab() {
    var e, t, n, r, i, o;
    return window != null && window.Shopify && (e = window == null ? void 0 : window.meta) != null && e.product ? (t = window == null ? void 0 : window.meta) == null ? void 0 : t.product.name : window != null && window._buttonizer && (r = (n = window == null ? void 0 : window._buttonizer) == null ? void 0 : n.data) != null && r.product_name ? (o = (i = window == null ? void 0 : window._buttonizer) == null ? void 0 : i.data) == null ? void 0 : o.product_name : ""
}

function Cb(e = "") {
    return e.indexOf("{") >= 0 ? Pr(e) : e
}
var Tb = 0;

function yt(e, t, n, r, i, o) {
    var s, a, l = {};
    for (a in t) a == "ref" ? s = t[a] : l[a] = t[a];
    var u = {
        type: e,
        props: l,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --Tb,
        __i: -1,
        __u: 0,
        __source: i,
        __self: o
    };
    if (typeof e == "function" && (s = e.defaultProps))
        for (a in s) l[a] === void 0 && (l[a] = s[a]);
    return T.vnode && T.vnode(u), u
}

function vs({
    text: e,
    output: t = "react",
    isLabel: n = !1,
    customParameters: r = null
}) {
    return e.indexOf("{") >= 0 && (e = Pr(e, r)), t === "html" ? ys(e, n) : yt("div", {
        className: zb.paragraph,
        dangerouslySetInnerHTML: {
            __html: ys(e, n)
        }
    })
}
class $b {
    constructor({
        data: t,
        stylesheet: n
    }) {
        this.data = t, this.stylesheet = n, this.element = document.createElement("div"), this.generators = [], this.JSS = {}
    }
    render() {
        return this.element.innerHTML = vs({
            text: this.data.label,
            output: "html",
            isLabel: !0
        }), this.setJSS(), this.element.className = Ct(this.element.className, "buttonizer-label", this.stylesheet.classes.label), this.element.id = this.stylesheet.classes.button + "-label", this
    }
    setJSS() {
        const t = this.data.horizontal_position_label === "auto" ? this.data.horizontal[0] : this.data.horizontal_position_label;
        return this.JSS = {
            label: {
                color: this.data.label_color[0],
                background: this.data.label_background_color[0],
                "font-size": this.data.label_font_size[0],
                [t]: this.data.label_spacing + (this.data.label_inside ? 0 : Bt(this.data.button_padding[0]) + this.data.button_size),
                "border-radius": this.data.label_border_radius[0],
                "text-align": this.data.label_text_align !== "auto" ? this.data.label_text_align : this.data.horizontal[0] === "right" ? "end" : "start"
            },
            button: {
                "&:hover": {
                    "& $label": {
                        color: this.data.label_color[1],
                        background: !this.data.label_inside && this.data.label_background_color[1],
                        [t]: this.data.label_spacing + (this.data.label_inside ? 0 : Bt(this.data.button_padding[1]) + this.data.button_size)
                    }
                }
            }
        }, this.data.label_box_shadow_enabled[0] === !1 && I(this.JSS, {
            label: {
                "box-shadow": "none"
            }
        }), k(this.data.label_box_shadow_enabled, "1", this.data.label_box_shadow_enabled[0]) === !1 && I(this.JSS, {
            button: {
                "&:hover": {
                    "& $label": {
                        "box-shadow": "none"
                    }
                }
            }
        }), I(this.JSS, {
            label: { ...this.boxShadow(0)
            },
            button: {
                "&:hover": {
                    "& $label": { ...this.boxShadow(1)
                    }
                }
            }
        }), I(this.JSS, {
            label: {
                "font-family": this.data.label_font_family,
                margin: this.data.label_margin[0],
                padding: this.data.label_padding[0]
            },
            button: {
                "&:hover": {
                    "& $label": {
                        color: this.data.label_color[1],
                        background: !this.data.label_inside && this.data.label_background_color[1],
                        "font-size": this.data.label_font_size[1],
                        "border-radius": this.data.label_border_radius[1],
                        margin: this.data.label_margin[1],
                        padding: this.data.label_padding[1]
                    }
                }
            }
        }), this.data.is_menu_desktop || this.setMenuStyling("desktop"), this.data.is_menu_mobile || this.setMenuStyling("mobile"), this.data.label_inside || (this.data.show_label_desktop === "always" && this.setShow("desktop"), this.data.show_label_desktop === "hide" && this.setHide("desktop"), this.data.show_label_desktop === "hover" && this.setHover(), this.data.show_label_mobile === "always" && this.setShow("mobile"), this.data.show_label_mobile === "hide" && this.setHide("mobile")), this.JSS
    }
    setMenuStyling(t) {
        const n = this.data.horizontal_position_label === "auto" ? this.data.horizontal[0] : this.data.horizontal_position_label,
            r = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        this.stylesheet.update({
            label: {
                [`@media screen and (${r})`]: {
                    [n]: this.data.label_spacing + (this.data.label_inside ? 0 : Bt(this.data.button_padding[0]) + this.data.group_size)
                }
            },
            button: {
                "&:hover": {
                    "& $label": {
                        [`@media screen and (${r})`]: {
                            [n]: this.data.label_spacing + (this.data.label_inside ? 0 : Bt(this.data.button_padding[1]) + this.data.group_size)
                        }
                    }
                }
            }
        })
    }
    setShow(t) {
        let n = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        this.JSS = I(this.JSS, {
            label: {
                [`@media screen and (${n})`]: {
                    opacity: 1,
                    visibility: "visible"
                }
            }
        })
    }
    setHide(t) {
        let n = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        I(this.JSS, {
            label: {
                [`@media screen and (${n})`]: {
                    opacity: 0,
                    visibility: "hidden"
                }
            }
        })
    }
    setHover() {
        I(this.JSS, {
            label: {
                "@media screen and (min-width: 770px)": {
                    opacity: 0,
                    visibility: "hidden"
                }
            },
            button: {
                "@media screen and (min-width: 770px)": {
                    "&:hover $label": {
                        opacity: 1,
                        visibility: "visible"
                    }
                }
            }
        })
    }
    hasBoxShadow(t = 0) {
        return t === 1 ? this.data.label_box_shadow_enabled[1] === !0 || this.data.label_box_shadow_enabled[0] === !0 && this.data.label_box_shadow_enabled[1] == null : this.data.label_box_shadow_enabled[0] === !0
    }
    boxShadow(t = 0) {
        if (this.data.label_box_shadow) {
            let n = this.data.label_box_shadow[t];
            return n == null ? {} : this.hasBoxShadow(t) ? {
                "box-shadow": n
            } : {}
        }
        return {}
    }
}
const Rr = () =>
    import ("./websiteurl_DkvXA1.js"),
    Ib = () =>
    import ("./phone_B8NaTp.js"),
    Lb = () =>
    import ("./mail_CDrXhz.js"),
    Bb = () =>
    import ("./whatsappchat_IHwON0.js"),
    Nb = () =>
    import ("./backtotop_Bgdxs8.js"),
    Db = () =>
    import ("./gotobottom_D0ywrb.js"),
    Fb = () =>
    import ("./gobackpage_Ci6J6z.js"),
    Ub = () =>
    import ("./javascriptpro_Dqutry.js"),
    Hb = () =>
    import ("./sms_DICvbK.js"),
    Mb = () =>
    import ("./messengerchat_2DhRad.js"),
    Wb = () =>
    import ("./messengerlink_Dqwdp-.js"),
    qb = () =>
    import ("./twitterdm_D1EHqS.js"),
    Gb = () =>
    import ("./skype_B5n1Sy.js"),
    Vb = () =>
    import ("./line_DsnSJM.js"),
    Jb = () =>
    import ("./telegram_SlI_C8.js"),
    Kb = () =>
    import ("./viber_Dfp-3S.js"),
    Xb = () =>
    import ("./facebook_Bv6N6P.js"),
    Yb = () =>
    import ("./twitter_BJDmzr.js"),
    Qb = () =>
    import ("./instagram_Dfsvnr.js"),
    Zb = () =>
    import ("./snapchat_EVY12I.js"),
    t_ = () =>
    import ("./linkedin_DmC4cX.js"),
    e_ = () =>
    import ("./vk_Cij4Hh.js"),
    n_ = () =>
    import ("./waze_BBucSB.js"),
    r_ = () =>
    import ("./elementorpopup_B5Y7-_.js"),
    i_ = () =>
    import ("./popupmaker_BDmQuL.js"),
    o_ = () =>
    import ("./popups_CVoiWw.js"),
    s_ = () =>
    import ("./wppopups_BGI5k-.js"),
    a_ = () =>
    import ("./print_C5vlzl.js"),
    l_ = () =>
    import ("./clipboard_BPL7yd.js"),
    u_ = () =>
    import ("./poptin_CYS6Q8.js"),
    c_ = () =>
    import ("./opengroup_R1deMC.js"),
    d_ = () =>
    import ("./socialsharing_Bt0hck.js"),
    h_ = () =>
    import ("./signalgroupchat_59Hipy.js"),
    p_ = () =>
    import ("./tiktok_CuVpga.js"),
    f_ = () =>
    import ("./googlemaps_DnmJO0.js"),
    m_ = () =>
    import ("./wechat_i4FcLt.js"),
    g_ = () =>
    import ("./slack_BKXe_s.js"),
    b_ = () =>
    import ("./search_HzXr02.js"),
    __ = () =>
    import ("./widget_BCcoYR.js"),
    y_ = () =>
    import ("./youtube_DMbLY8.js"),
    v_ = () =>
    import ("./sharemenu_Dv8lws.js"),
    w_ = () =>
    import ("./discord_XoXnh6.js"),
    x_ = () =>
    import ("./behance_DjNMv5.js"),
    k_ = () =>
    import ("./scrolltosection_Cur_s5.js"),
    S_ = () =>
    import ("./formillachat_Apikce.js"),
    O_ = () =>
    import ("./formillapopup_C92i_x.js"),
    j_ = () =>
    import ("./zalo_CSUUfO.js"),
    z_ = {
        url: Rr,
        page: Rr,
        download: Rr,
        phone: Ib,
        mail: Lb,
        whatsapp: Bb,
        backtotop: Nb,
        gotobottom: Db,
        gobackpage: Fb,
        javascript_pro: Ub,
        sms: Hb,
        messenger_chat: Mb,
        messenger: Wb,
        twitter_dm: qb,
        skype: Gb,
        line: Vb,
        telegram: Jb,
        viber: Kb,
        facebook: Xb,
        twitter: Yb,
        instagram: Qb,
        snapchat: Zb,
        linkedin: t_,
        vk: e_,
        waze: n_,
        tiktok: p_,
        poptin: u_,
        elementor_popup: r_,
        popup_maker: i_,
        popups: o_,
        wppopups: s_,
        print: a_,
        clipboard: l_,
        opengroup: c_,
        socialsharing: d_,
        signal_group: h_,
        google_maps: f_,
        wechat: m_,
        slack: g_,
        search: b_,
        widgets: __,
        youtube: y_,
        share_menu: v_,
        discord: w_,
        behance: x_,
        scroll_to_section: k_,
        formilla_chat: S_,
        formilla_popup: O_,
        zalo: j_
    };

function E_(e) {
    if ("gtag" in window && typeof gtag == "function") {
        gtag("event", "Buttonizer", e);
        return
    }
    window.dataLayer.push({
        event: "Buttonizer",
        ...e
    })
}

function Ar(e) {
    if (B().allowGoogleAnalyticsTracking) try {
        if ("gtag" in window && typeof gtag == "function" || "ga" in window || "dataLayer" in window && typeof window.dataLayer == "object" && typeof window.dataLayer.push == "function") {
            let t = {};
            if (e.type === "group-open-close" ? (t.groupName = e.name, t.action = e.interaction) : e.type === "button-click" && (t.groupName = e.groupName, t.action = "Clicked button: " + e.buttonName), "gtag" in window && typeof gtag == "function" || "dataLayer" in window && typeof window.dataLayer == "object" && typeof window.dataLayer.push == "function") E_({
                event_category: "Buttonizer group: " + t.groupName,
                event_action: t.action,
                event_label: document.title,
                page_url: document.location.href
            });
            else if ("ga" in window) try {
                let n = ga.getAll()[0];
                if (n) n.send("event", "Buttonizer group: " + t.groupName, t.action, document.title);
                else throw "No tracker found"
            } catch (n) {
                console.error("Buttonizer Google Analytics: Last try to push to Google Analytics."), console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17"), ga("send", "event", {
                    eventCategory: "Buttonizer group: " + t.groupName,
                    eventAction: t.action,
                    eventLabel: document.title
                })
            } else console.error("Buttonizer Google Analytics: Unable to push data to Google Analytics"), console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17")
        }
    } catch (t) {}
}

function ut(e, t) {
    try {
        window.parent.postMessage({
            eventType: "buttonizer",
            messageType: e,
            message: t
        }, document.location.origin)
    } catch (n) {
        console.error("Buttonizer tried to warn you in the front-end editor. But the message didn't came through. Well. Doesn't matter, it's just an extra function. It's nice to have."), console.error(n)
    }
}

function P_(e, t) {
    if (!B().isStandalone() || E()) return;
    const n = B().container;
    if (!n.enableTrackClicks) return;
    const r = window.development ? window.development.api : "https://api.buttonizer.io",
        i = Math.round((new Date().getTime() - n.pageArrivalTime) / 1e3);
    X({
        url: `${r}/collect/${n.standAloneId}/click`,
        method: "POST",
        data: {
            gid: e,
            bid: t,
            d: Ae(),
            l: `https://${window.location.host}${window.location.pathname}${window.location.search}`,
            s: i
        }
    }).then(() => {}).catch(() => {})
}
const R_ = ["poptin", "elementor_popup", "popup_maker", "popups", "wppopups", "javascript_pro", "clipboard", "download", "scroll_to_section"];
class A_ {
    constructor({
        data: t,
        label: n = !1,
        groupName: r,
        groupId: i,
        icon: o = !1,
        generators: s,
        renderExtender: a,
        stylesheet: l
    }) {
        this.data = t, this.label = n, this.icon = o, this.stylesheet = l, this.groupId = i, this.groupName = r || !1, this.action = null, this.JSS = {}, this.JSSImage = {}, this.JSSImageHover = {}, this.generators = s || [], this.renderExtender = a || [], this.element = document.createElement("a"), this.element.setAttribute("role", "button"), this.visibility = {
            desktop: () => k(t, "show_desktop", !0),
            mobile: () => k(t, "show_mobile", !0)
        }, E() && (this.disableClickInPreview = !0)
    }
    async preloadAction() {
        await z_[k(this.data, "type", "url")]().then(t => {
            const n = t.default;
            this.action = new n(this.data, this.element, this.stylesheet, this.groupId, this.generators)
        })
    }
    async render() {
        return await this.preloadAction(), this.icon && (this.element.appendChild(this.icon.render().element), this.generators.push(...this.icon.generators)), this.label && this.data.label.length !== 0 && (this.element.appendChild(this.label.render().element), this.generators.push(...this.label.generators)), this.generators.forEach(t => t.generate(this)), this.data.background_is_image[0] === !1 && I(this.JSS, {
            button: {
                "&::before": {
                    visibility: "hidden",
                    opacity: "0"
                }
            }
        }), k(this.data.background_is_image, "1", this.data.background_is_image[0]) === !1 && I(this.JSS, {
            button: {
                "&:hover": {
                    "&::before": {
                        visibility: "hidden",
                        opacity: "0"
                    }
                }
            }
        }), this.data.box_shadow_enabled[0] === !1 && I(this.JSS, {
            button: {
                "box-shadow": "none"
            }
        }), k(this.data.box_shadow_enabled, "1", this.data.box_shadow_enabled[0]) === !1 && I(this.JSS, {
            button: {
                "&:hover": {
                    "box-shadow": "none"
                }
            }
        }), I(this.JSS, {
            button: { ...this.background(0),
                ...this.backgroundImage(0),
                ...this.boxShadow(0),
                "&:hover": { ...this.background(1),
                    ...this.backgroundImage(1),
                    ...this.boxShadow(1)
                }
            }
        }), I(this.JSS, {
            button: {
                width: this.data.label_inside ? "unset" : this.data.button_size,
                height: this.data.button_size,
                padding: this.data.button_padding[0],
                "border-radius": this.data.border_radius[0],
                [`margin-${this.data.vertical[0]}`]: this.data.space,
                "&::before": {
                    "border-radius": this.data.border_radius_override ? this.data.border_radius_override : this.data.border_radius[0]
                }
            }
        }, this.icon.JSS, this.label.JSS), I(this.JSS, {
            button: {
                "&:hover": {
                    "&::before": {
                        "border-radius": this.data.border_radius_override ? this.data.border_radius_override : this.data.border_radius[1]
                    },
                    "border-radius": this.data.border_radius[1],
                    padding: this.data.button_padding[1]
                }
            }
        }), this.stylesheet.update(this.JSS), this.data.show_desktop || this.setHide("desktop"), this.data.show_mobile || this.setHide("mobile"), this.data.is_menu_desktop || this.setMenuStyling("desktop"), this.data.is_menu_mobile || this.setMenuStyling("mobile"), this.renderExtender.forEach(t => t.extend(this)), this.action && this.setAction(this.action), this.element.className = Ct(this.element.className, "buttonizer-button", this.stylesheet.classes.button), this.element.classList.add(this.stylesheet.classes.button), this.data.custom_class && this.element.classList.add(...this.data.custom_class.replace(/\s+/g, " ").trim().split(" ")), this.data.custom_id && (this.element.id = this.data.custom_id), this.renderExtender.forEach(t => t.extend(this)), this.label && this.data.label.length !== 0 ? this.element.setAttribute("aria-describedby", this.stylesheet.classes.button + "-label") : this.element.setAttribute("aria-label", this.data.label !== "" ? this.data.label : this.data.name !== "" ? this.data.name : `Unnamed button with icon: ${this.icon.data.icon[0]}`), this.stylesheet.attach(), this
    }
    setAction(t) {
        t.addAttr() && t.addAttr().attr && this.element.setAttribute(t.addAttr().attr, t.addAttr().val), this.element.removeEventListener("click", () => this.action.execute()), this.action = t, E() && this.element.addEventListener("contextmenu", n => {
            if (n.preventDefault(), R_.indexOf(this.data.type) >= 0) {
                ut("action-disabled", this.data.type);
                return
            }
            this.disableClickInPreview = !1, this.element.click()
        }), this.element.addEventListener("click", n => {
            if (E() && this.disableClickInPreview || n.target.hasAttribute("data-no-action")) {
                n.preventDefault();
                return
            }
            B().hasPremium() && B().activateHook("buttonizer_button_clicked", {
                action: this.action,
                button_id: this.data.id
            }), this.groupName && Ar({
                type: "button-click",
                groupName: this.groupName,
                buttonName: this.data.name
            }), P_(this.groupId, this.data.id), this.action.execute(), E() && (this.disableClickInPreview = !0)
        })
    }
    setHide(t) {
        const n = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        this.stylesheet.update({
            button: {
                [`@media screen and (${n})`]: {
                    display: "none"
                }
            }
        })
    }
    setMenuStyling(t) {
        const n = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        this.stylesheet.update({
            button: {
                [`@media screen and (${n})`]: {
                    width: this.data.label_inside ? "unset" : this.data.group_size,
                    height: this.data.group_size,
                    visibility: "visible",
                    opacity: "1"
                }
            }
        })
    }
    hasBackgroundImage(t = 0) {
        return t === 1 ? this.data.background_is_image[1] === !0 || this.data.background_is_image[0] === !0 && this.data.background_is_image[1] == null : this.data.background_is_image[0] === !0
    }
    background(t = 0) {
        let n = this.data.background_color[t];
        return t === 1 && (n = k(this.data.background_color, "1", this.data.background_color[0])), n == null ? {} : n.includes("gradient") ? {
            "background-image": n,
            "background-color": Zo(n)
        } : {
            "background-image": "none",
            "background-color": n
        }
    }
    backgroundImage(t = 0) {
        const n = this.data.background_image[t];
        return this.hasBackgroundImage(t) ? {
            "&::before": {
                visibility: "visible",
                opacity: "1",
                background: n != null ? `url(${n})` : void 0
            }
        } : {}
    }
    hasBoxShadow(t = 0) {
        return t === 1 ? this.data.box_shadow_enabled[1] === !0 || this.data.box_shadow_enabled[0] === !0 && this.data.box_shadow_enabled[1] == null : this.data.box_shadow_enabled[0] === !0
    }
    boxShadow(t = 0) {
        if (this.data.box_shadow) {
            let n = this.data.box_shadow[t];
            return n == null ? {} : this.hasBoxShadow(t) ? {
                "box-shadow": n
            } : {}
        }
        return {}
    }
}
var C_ = "__lodash_hash_undefined__";

function T_(e) {
    return this.__data__.set(e, C_), this
}
var $_ = T_;

function I_(e) {
    return this.__data__.has(e)
}
var L_ = I_,
    B_ = ir,
    N_ = $_,
    D_ = L_;

function On(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new B_; ++t < n;) this.add(e[t])
}
On.prototype.add = On.prototype.push = N_, On.prototype.has = D_;
var F_ = On;

function U_(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}
var H_ = U_;

function M_(e, t) {
    return e.has(t)
}
var W_ = M_,
    q_ = F_,
    G_ = H_,
    V_ = W_,
    J_ = 1,
    K_ = 2;

function X_(e, t, n, r, i, o) {
    var s = n & J_,
        a = e.length,
        l = t.length;
    if (a != l && !(s && l > a)) return !1;
    var u = o.get(e),
        c = o.get(t);
    if (u && c) return u == t && c == e;
    var d = -1,
        m = !0,
        g = n & K_ ? new q_ : void 0;
    for (o.set(e, t), o.set(t, e); ++d < a;) {
        var b = e[d],
            w = t[d];
        if (r) var x = s ? r(w, b, d, t, e, o) : r(b, w, d, e, t, o);
        if (x !== void 0) {
            if (x) continue;
            m = !1;
            break
        }
        if (g) {
            if (!G_(t, function(S, A) {
                    if (!V_(g, A) && (b === S || i(b, S, n, r, o))) return g.push(A)
                })) {
                m = !1;
                break
            }
        } else if (!(b === w || i(b, w, n, r, o))) {
            m = !1;
            break
        }
    }
    return o.delete(e), o.delete(t), m
}
var ws = X_;

function Y_(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r, i) {
        n[++t] = [i, r]
    }), n
}
var Q_ = Y_;

function Z_(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }), n
}
var ty = Z_,
    xs = Zt,
    ks = xo,
    ey = Ee,
    ny = ws,
    ry = Q_,
    iy = ty,
    oy = 1,
    sy = 2,
    ay = "[object Boolean]",
    ly = "[object Date]",
    uy = "[object Error]",
    cy = "[object Map]",
    dy = "[object Number]",
    hy = "[object RegExp]",
    py = "[object Set]",
    fy = "[object String]",
    my = "[object Symbol]",
    gy = "[object ArrayBuffer]",
    by = "[object DataView]",
    Ss = xs ? xs.prototype : void 0,
    Cr = Ss ? Ss.valueOf : void 0;

function _y(e, t, n, r, i, o, s) {
    switch (n) {
        case by:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case gy:
            return !(e.byteLength != t.byteLength || !o(new ks(e), new ks(t)));
        case ay:
        case ly:
        case dy:
            return ey(+e, +t);
        case uy:
            return e.name == t.name && e.message == t.message;
        case hy:
        case fy:
            return e == t + "";
        case cy:
            var a = ry;
        case py:
            var l = r & oy;
            if (a || (a = iy), e.size != t.size && !l) return !1;
            var u = s.get(e);
            if (u) return u == t;
            r |= sy, s.set(e, t);
            var c = ny(a(e), a(t), r, i, o, s);
            return s.delete(e), c;
        case my:
            if (Cr) return Cr.call(e) == Cr.call(t)
    }
    return !1
}
var yy = _y;

function vy(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var Tr = vy,
    wy = Tr,
    xy = Et;

function ky(e, t, n) {
    var r = t(e);
    return xy(e) ? r : wy(r, n(e))
}
var Os = ky;

function Sy(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
        var s = e[n];
        t(s, n, e) && (o[i++] = s)
    }
    return o
}
var Oy = Sy;

function jy() {
    return []
}
var js = jy,
    zy = Oy,
    Ey = js,
    Py = Object.prototype,
    Ry = Py.propertyIsEnumerable,
    zs = Object.getOwnPropertySymbols,
    Ay = zs ? function(e) {
        return e == null ? [] : (e = Object(e), zy(zs(e), function(t) {
            return Ry.call(e, t)
        }))
    } : Ey,
    $r = Ay,
    Cy = jo,
    Ty = Cy(Object.keys, Object),
    $y = Ty,
    Iy = cr,
    Ly = $y,
    By = Object.prototype,
    Ny = By.hasOwnProperty;

function Dy(e) {
    if (!Iy(e)) return Ly(e);
    var t = [];
    for (var n in Object(e)) Ny.call(e, n) && n != "constructor" && t.push(n);
    return t
}
var Fy = Dy,
    Uy = Io,
    Hy = Fy,
    My = dn;

function Wy(e) {
    return My(e) ? Uy(e) : Hy(e)
}
var Ir = Wy,
    qy = Os,
    Gy = $r,
    Vy = Ir;

function Jy(e) {
    return qy(e, Vy, Gy)
}
var Es = Jy,
    Ps = Es,
    Ky = 1,
    Xy = Object.prototype,
    Yy = Xy.hasOwnProperty;

function Qy(e, t, n, r, i, o) {
    var s = n & Ky,
        a = Ps(e),
        l = a.length,
        u = Ps(t),
        c = u.length;
    if (l != c && !s) return !1;
    for (var d = l; d--;) {
        var m = a[d];
        if (!(s ? m in t : Yy.call(t, m))) return !1
    }
    var g = o.get(e),
        b = o.get(t);
    if (g && b) return g == t && b == e;
    var w = !0;
    o.set(e, t), o.set(t, e);
    for (var x = s; ++d < l;) {
        m = a[d];
        var S = e[m],
            A = t[m];
        if (r) var C = s ? r(A, S, m, t, e, o) : r(S, A, m, e, t, o);
        if (!(C === void 0 ? S === A || i(S, A, n, r, o) : C)) {
            w = !1;
            break
        }
        x || (x = m == "constructor")
    }
    if (w && !x) {
        var L = e.constructor,
            V = t.constructor;
        L != V && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof V == "function" && V instanceof V) && (w = !1)
    }
    return o.delete(e), o.delete(t), w
}
var Zy = Qy,
    tv = Mt,
    ev = zt,
    nv = tv(ev, "DataView"),
    rv = nv,
    iv = Mt,
    ov = zt,
    sv = iv(ov, "Promise"),
    av = sv,
    lv = Mt,
    uv = zt,
    cv = lv(uv, "Set"),
    dv = cv,
    hv = Mt,
    pv = zt,
    fv = hv(pv, "WeakMap"),
    mv = fv,
    Lr = rv,
    Br = rr,
    Nr = av,
    Dr = dv,
    Fr = mv,
    Rs = te,
    ce = mo,
    As = "[object Map]",
    gv = "[object Object]",
    Cs = "[object Promise]",
    Ts = "[object Set]",
    $s = "[object WeakMap]",
    Is = "[object DataView]",
    bv = ce(Lr),
    _v = ce(Br),
    yv = ce(Nr),
    vv = ce(Dr),
    wv = ce(Fr),
    qt = Rs;
(Lr && qt(new Lr(new ArrayBuffer(1))) != Is || Br && qt(new Br) != As || Nr && qt(Nr.resolve()) != Cs || Dr && qt(new Dr) != Ts || Fr && qt(new Fr) != $s) && (qt = function(e) {
    var t = Rs(e),
        n = t == gv ? e.constructor : void 0,
        r = n ? ce(n) : "";
    if (r) switch (r) {
        case bv:
            return Is;
        case _v:
            return As;
        case yv:
            return Cs;
        case vv:
            return Ts;
        case wv:
            return $s
    }
    return t
});
var jn = qt,
    Ur = or,
    xv = ws,
    kv = yy,
    Sv = Zy,
    Ls = jn,
    Bs = Et,
    Ns = pn,
    Ov = pr,
    jv = 1,
    Ds = "[object Arguments]",
    Fs = "[object Array]",
    zn = "[object Object]",
    zv = Object.prototype,
    Us = zv.hasOwnProperty;

function Ev(e, t, n, r, i, o) {
    var s = Bs(e),
        a = Bs(t),
        l = s ? Fs : Ls(e),
        u = a ? Fs : Ls(t);
    l = l == Ds ? zn : l, u = u == Ds ? zn : u;
    var c = l == zn,
        d = u == zn,
        m = l == u;
    if (m && Ns(e)) {
        if (!Ns(t)) return !1;
        s = !0, c = !1
    }
    if (m && !c) return o || (o = new Ur), s || Ov(e) ? xv(e, t, n, r, i, o) : kv(e, t, l, n, r, i, o);
    if (!(n & jv)) {
        var g = c && Us.call(e, "__wrapped__"),
            b = d && Us.call(t, "__wrapped__");
        if (g || b) {
            var w = g ? e.value() : e,
                x = b ? t.value() : t;
            return o || (o = new Ur), i(w, x, n, r, o)
        }
    }
    return m ? (o || (o = new Ur), Sv(e, t, n, r, i, o)) : !1
}
var Pv = Ev,
    Rv = Pv,
    Hs = At;

function Ms(e, t, n, r, i) {
    return e === t ? !0 : e == null || t == null || !Hs(e) && !Hs(t) ? e !== e && t !== t : Rv(e, t, n, r, Ms, i)
}
var Av = Ms,
    Cv = Av;

function Tv(e, t) {
    return Cv(e, t)
}
var $v = Tv;
const Ws = Lt($v);

function Q() {
    return Q = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Q.apply(this, arguments)
}
var qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    Ne = (typeof window > "u" ? "undefined" : qs(window)) === "object" && (typeof document > "u" ? "undefined" : qs(document)) === "object" && document.nodeType === 9;

function De(e) {
    "@babel/helpers - typeof";
    return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, De(e)
}

function Iv(e, t) {
    if (De(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (De(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function Lv(e) {
    var t = Iv(e, "string");
    return De(t) == "symbol" ? t : String(t)
}

function Bv(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Lv(r.key), r)
    }
}

function Gs(e, t, n) {
    return t && Bv(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Hr(e, t) {
    return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n
    }, Hr(e, t)
}

function Vs(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hr(e, t)
}

function Js(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Nv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var Dv = {}.constructor;

function Mr(e) {
    if (e == null || typeof e != "object") return e;
    if (Array.isArray(e)) return e.map(Mr);
    if (e.constructor !== Dv) return e;
    var t = {};
    for (var n in e) t[n] = Mr(e[n]);
    return t
}

function En(e, t, n) {
    e === void 0 && (e = "unnamed");
    var r = n.jss,
        i = Mr(t),
        o = r.plugins.onCreateRule(e, i, n);
    return o || (e[0], null)
}
var Ks = function(e, t) {
        for (var n = "", r = 0; r < e.length && e[r] !== "!important"; r++) n && (n += t), n += e[r];
        return n
    },
    Gt = function(e) {
        if (!Array.isArray(e)) return e;
        var t = "";
        if (Array.isArray(e[0]))
            for (var n = 0; n < e.length && e[n] !== "!important"; n++) t && (t += ", "), t += Ks(e[n], " ");
        else t = Ks(e, ", ");
        return e[e.length - 1] === "!important" && (t += " !important"), t
    };

function de(e) {
    return e && e.format === !1 ? {
        linebreak: "",
        space: ""
    } : {
        linebreak: `
`,
        space: " "
    }
}

function Fe(e, t) {
    for (var n = "", r = 0; r < t; r++) n += "  ";
    return n + e
}

function Ue(e, t, n) {
    n === void 0 && (n = {});
    var r = "";
    if (!t) return r;
    var i = n,
        o = i.indent,
        s = o === void 0 ? 0 : o,
        a = t.fallbacks;
    n.format === !1 && (s = -1 / 0);
    var l = de(n),
        u = l.linebreak,
        c = l.space;
    if (e && s++, a)
        if (Array.isArray(a))
            for (var d = 0; d < a.length; d++) {
                var m = a[d];
                for (var g in m) {
                    var b = m[g];
                    b != null && (r && (r += u), r += Fe(g + ":" + c + Gt(b) + ";", s))
                }
            } else
                for (var w in a) {
                    var x = a[w];
                    x != null && (r && (r += u), r += Fe(w + ":" + c + Gt(x) + ";", s))
                }
    for (var S in t) {
        var A = t[S];
        A != null && S !== "fallbacks" && (r && (r += u), r += Fe(S + ":" + c + Gt(A) + ";", s))
    }
    return !r && !n.allowEmpty || !e ? r : (s--, r && (r = "" + u + r + u), Fe("" + e + c + "{" + r, s) + Fe("}", s))
}
var Fv = /([[\].#*$><+~=|^:(),"'`\s])/g,
    Xs = typeof CSS < "u" && CSS.escape,
    Wr = function(e) {
        return Xs ? Xs(e) : e.replace(Fv, "\\$1")
    },
    Ys = function() {
        function e(n, r, i) {
            this.type = "style", this.isProcessed = !1;
            var o = i.sheet,
                s = i.Renderer;
            this.key = n, this.options = i, this.style = r, o ? this.renderer = o.renderer : s && (this.renderer = new s)
        }
        var t = e.prototype;
        return t.prop = function(n, r, i) {
            if (r === void 0) return this.style[n];
            var o = i ? i.force : !1;
            if (!o && this.style[n] === r) return this;
            var s = r;
            (!i || i.process !== !1) && (s = this.options.jss.plugins.onChangeValue(r, n, this));
            var a = s == null || s === !1,
                l = n in this.style;
            if (a && !l && !o) return this;
            var u = a && l;
            if (u ? delete this.style[n] : this.style[n] = s, this.renderable && this.renderer) return u ? this.renderer.removeProperty(this.renderable, n) : this.renderer.setProperty(this.renderable, n, s), this;
            var c = this.options.sheet;
            return c && c.attached, this
        }, e
    }(),
    qr = function(e) {
        Vs(t, e);

        function t(r, i, o) {
            var s;
            s = e.call(this, r, i, o) || this;
            var a = o.selector,
                l = o.scoped,
                u = o.sheet,
                c = o.generateId;
            return a ? s.selectorText = a : l !== !1 && (s.id = c(Js(Js(s)), u), s.selectorText = "." + Wr(s.id)), s
        }
        var n = t.prototype;
        return n.applyTo = function(r) {
            var i = this.renderer;
            if (i) {
                var o = this.toJSON();
                for (var s in o) i.setProperty(r, s, o[s])
            }
            return this
        }, n.toJSON = function() {
            var r = {};
            for (var i in this.style) {
                var o = this.style[i];
                typeof o != "object" ? r[i] = o : Array.isArray(o) && (r[i] = Gt(o))
            }
            return r
        }, n.toString = function(r) {
            var i = this.options.sheet,
                o = i ? i.options.link : !1,
                s = o ? Q({}, r, {
                    allowEmpty: !0
                }) : r;
            return Ue(this.selectorText, this.style, s)
        }, Gs(t, [{
            key: "selector",
            set: function(r) {
                if (r !== this.selectorText) {
                    this.selectorText = r;
                    var i = this.renderer,
                        o = this.renderable;
                    if (!(!o || !i)) {
                        var s = i.setSelector(o, r);
                        s || i.replaceRule(o, this)
                    }
                }
            },
            get: function() {
                return this.selectorText
            }
        }]), t
    }(Ys),
    Uv = {
        onCreateRule: function(e, t, n) {
            return e[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new qr(e, t, n)
        }
    },
    Gr = {
        indent: 1,
        children: !0
    },
    Hv = /@([\w-]+)/,
    Mv = function() {
        function e(n, r, i) {
            this.type = "conditional", this.isProcessed = !1, this.key = n;
            var o = n.match(Hv);
            this.at = o ? o[1] : "unknown", this.query = i.name || "@" + this.at, this.options = i, this.rules = new Pn(Q({}, i, {
                parent: this
            }));
            for (var s in r) this.rules.add(s, r[s]);
            this.rules.process()
        }
        var t = e.prototype;
        return t.getRule = function(n) {
            return this.rules.get(n)
        }, t.indexOf = function(n) {
            return this.rules.indexOf(n)
        }, t.addRule = function(n, r, i) {
            var o = this.rules.add(n, r, i);
            return o ? (this.options.jss.plugins.onProcessRule(o), o) : null
        }, t.replaceRule = function(n, r, i) {
            var o = this.rules.replace(n, r, i);
            return o && this.options.jss.plugins.onProcessRule(o), o
        }, t.toString = function(n) {
            n === void 0 && (n = Gr);
            var r = de(n),
                i = r.linebreak;
            if (n.indent == null && (n.indent = Gr.indent), n.children == null && (n.children = Gr.children), n.children === !1) return this.query + " {}";
            var o = this.rules.toString(n);
            return o ? this.query + " {" + i + o + i + "}" : ""
        }, e
    }(),
    Wv = /@container|@media|@supports\s+/,
    qv = {
        onCreateRule: function(e, t, n) {
            return Wv.test(e) ? new Mv(e, t, n) : null
        }
    },
    Vr = {
        indent: 1,
        children: !0
    },
    Gv = /@keyframes\s+([\w-]+)/,
    Jr = function() {
        function e(n, r, i) {
            this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
            var o = n.match(Gv);
            o && o[1] ? this.name = o[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = i;
            var s = i.scoped,
                a = i.sheet,
                l = i.generateId;
            this.id = s === !1 ? this.name : Wr(l(this, a)), this.rules = new Pn(Q({}, i, {
                parent: this
            }));
            for (var u in r) this.rules.add(u, r[u], Q({}, i, {
                parent: this
            }));
            this.rules.process()
        }
        var t = e.prototype;
        return t.toString = function(n) {
            n === void 0 && (n = Vr);
            var r = de(n),
                i = r.linebreak;
            if (n.indent == null && (n.indent = Vr.indent), n.children == null && (n.children = Vr.children), n.children === !1) return this.at + " " + this.id + " {}";
            var o = this.rules.toString(n);
            return o && (o = "" + i + o + i), this.at + " " + this.id + " {" + o + "}"
        }, e
    }(),
    Vv = /@keyframes\s+/,
    Jv = /\$([\w-]+)/g,
    Kr = function(e, t) {
        return typeof e == "string" ? e.replace(Jv, function(n, r) {
            return r in t ? t[r] : n
        }) : e
    },
    Qs = function(e, t, n) {
        var r = e[t],
            i = Kr(r, n);
        i !== r && (e[t] = i)
    },
    Kv = {
        onCreateRule: function(e, t, n) {
            return typeof e == "string" && Vv.test(e) ? new Jr(e, t, n) : null
        },
        onProcessStyle: function(e, t, n) {
            return t.type !== "style" || !n || ("animation-name" in e && Qs(e, "animation-name", n.keyframes), "animation" in e && Qs(e, "animation", n.keyframes)), e
        },
        onChangeValue: function(e, t, n) {
            var r = n.options.sheet;
            if (!r) return e;
            switch (t) {
                case "animation":
                    return Kr(e, r.keyframes);
                case "animation-name":
                    return Kr(e, r.keyframes);
                default:
                    return e
            }
        }
    },
    Xv = function(e) {
        Vs(t, e);

        function t() {
            return e.apply(this, arguments) || this
        }
        var n = t.prototype;
        return n.toString = function(r) {
            var i = this.options.sheet,
                o = i ? i.options.link : !1,
                s = o ? Q({}, r, {
                    allowEmpty: !0
                }) : r;
            return Ue(this.key, this.style, s)
        }, t
    }(Ys),
    Yv = {
        onCreateRule: function(e, t, n) {
            return n.parent && n.parent.type === "keyframes" ? new Xv(e, t, n) : null
        }
    },
    Qv = function() {
        function e(n, r, i) {
            this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = n, this.style = r, this.options = i
        }
        var t = e.prototype;
        return t.toString = function(n) {
            var r = de(n),
                i = r.linebreak;
            if (Array.isArray(this.style)) {
                for (var o = "", s = 0; s < this.style.length; s++) o += Ue(this.at, this.style[s]), this.style[s + 1] && (o += i);
                return o
            }
            return Ue(this.at, this.style, n)
        }, e
    }(),
    Zv = /@font-face/,
    t0 = {
        onCreateRule: function(e, t, n) {
            return Zv.test(e) ? new Qv(e, t, n) : null
        }
    },
    e0 = function() {
        function e(n, r, i) {
            this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = n, this.style = r, this.options = i
        }
        var t = e.prototype;
        return t.toString = function(n) {
            return Ue(this.key, this.style, n)
        }, e
    }(),
    n0 = {
        onCreateRule: function(e, t, n) {
            return e === "@viewport" || e === "@-ms-viewport" ? new e0(e, t, n) : null
        }
    },
    r0 = function() {
        function e(n, r, i) {
            this.type = "simple", this.isProcessed = !1, this.key = n, this.value = r, this.options = i
        }
        var t = e.prototype;
        return t.toString = function(n) {
            if (Array.isArray(this.value)) {
                for (var r = "", i = 0; i < this.value.length; i++) r += this.key + " " + this.value[i] + ";", this.value[i + 1] && (r += `
`);
                return r
            }
            return this.key + " " + this.value + ";"
        }, e
    }(),
    i0 = {
        "@charset": !0,
        "@import": !0,
        "@namespace": !0
    },
    o0 = {
        onCreateRule: function(e, t, n) {
            return e in i0 ? new r0(e, t, n) : null
        }
    },
    Zs = [Uv, qv, Kv, Yv, t0, n0, o0],
    s0 = {
        process: !0
    },
    ta = {
        force: !0,
        process: !0
    },
    Pn = function() {
        function e(n) {
            this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = n, this.classes = n.classes, this.keyframes = n.keyframes
        }
        var t = e.prototype;
        return t.add = function(n, r, i) {
            var o = this.options,
                s = o.parent,
                a = o.sheet,
                l = o.jss,
                u = o.Renderer,
                c = o.generateId,
                d = o.scoped,
                m = Q({
                    classes: this.classes,
                    parent: s,
                    sheet: a,
                    jss: l,
                    Renderer: u,
                    generateId: c,
                    scoped: d,
                    name: n,
                    keyframes: this.keyframes,
                    selector: void 0
                }, i),
                g = n;
            n in this.raw && (g = n + "-d" + this.counter++), this.raw[g] = r, g in this.classes && (m.selector = "." + Wr(this.classes[g]));
            var b = En(g, r, m);
            if (!b) return null;
            this.register(b);
            var w = m.index === void 0 ? this.index.length : m.index;
            return this.index.splice(w, 0, b), b
        }, t.replace = function(n, r, i) {
            var o = this.get(n),
                s = this.index.indexOf(o);
            o && this.remove(o);
            var a = i;
            return s !== -1 && (a = Q({}, i, {
                index: s
            })), this.add(n, r, a)
        }, t.get = function(n) {
            return this.map[n]
        }, t.remove = function(n) {
            this.unregister(n), delete this.raw[n.key], this.index.splice(this.index.indexOf(n), 1)
        }, t.indexOf = function(n) {
            return this.index.indexOf(n)
        }, t.process = function() {
            var n = this.options.jss.plugins;
            this.index.slice(0).forEach(n.onProcessRule, n)
        }, t.register = function(n) {
            this.map[n.key] = n, n instanceof qr ? (this.map[n.selector] = n, n.id && (this.classes[n.key] = n.id)) : n instanceof Jr && this.keyframes && (this.keyframes[n.name] = n.id)
        }, t.unregister = function(n) {
            delete this.map[n.key], n instanceof qr ? (delete this.map[n.selector], delete this.classes[n.key]) : n instanceof Jr && delete this.keyframes[n.name]
        }, t.update = function() {
            var n, r, i;
            if (typeof(arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (n = arguments.length <= 0 ? void 0 : arguments[0], r = arguments.length <= 1 ? void 0 : arguments[1], i = arguments.length <= 2 ? void 0 : arguments[2]) : (r = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], n = null), n) this.updateOne(this.get(n), r, i);
            else
                for (var o = 0; o < this.index.length; o++) this.updateOne(this.index[o], r, i)
        }, t.updateOne = function(n, r, i) {
            i === void 0 && (i = s0);
            var o = this.options,
                s = o.jss.plugins,
                a = o.sheet;
            if (n.rules instanceof e) {
                n.rules.update(r, i);
                return
            }
            var l = n.style;
            if (s.onUpdate(r, n, a, i), i.process && l && l !== n.style) {
                s.onProcessStyle(n.style, n, a);
                for (var u in n.style) {
                    var c = n.style[u],
                        d = l[u];
                    c !== d && n.prop(u, c, ta)
                }
                for (var m in l) {
                    var g = n.style[m],
                        b = l[m];
                    g == null && g !== b && n.prop(m, null, ta)
                }
            }
        }, t.toString = function(n) {
            for (var r = "", i = this.options.sheet, o = i ? i.options.link : !1, s = de(n), a = s.linebreak, l = 0; l < this.index.length; l++) {
                var u = this.index[l],
                    c = u.toString(n);
                !c && !o || (r && (r += a), r += c)
            }
            return r
        }, e
    }(),
    ea = function() {
        function e(n, r) {
            this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = Q({}, r, {
                sheet: this,
                parent: this,
                classes: this.classes,
                keyframes: this.keyframes
            }), r.Renderer && (this.renderer = new r.Renderer(this)), this.rules = new Pn(this.options);
            for (var i in n) this.rules.add(i, n[i]);
            this.rules.process()
        }
        var t = e.prototype;
        return t.attach = function() {
            return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this)
        }, t.detach = function() {
            return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this
        }, t.addRule = function(n, r, i) {
            var o = this.queue;
            this.attached && !o && (this.queue = []);
            var s = this.rules.add(n, r, i);
            return s ? (this.options.jss.plugins.onProcessRule(s), this.attached ? (this.deployed && (o ? o.push(s) : (this.insertRule(s), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), s) : (this.deployed = !1, s)) : null
        }, t.replaceRule = function(n, r, i) {
            var o = this.rules.get(n);
            if (!o) return this.addRule(n, r, i);
            var s = this.rules.replace(n, r, i);
            return s && this.options.jss.plugins.onProcessRule(s), this.attached ? (this.deployed && this.renderer && (s ? o.renderable && this.renderer.replaceRule(o.renderable, s) : this.renderer.deleteRule(o)), s) : (this.deployed = !1, s)
        }, t.insertRule = function(n) {
            this.renderer && this.renderer.insertRule(n)
        }, t.addRules = function(n, r) {
            var i = [];
            for (var o in n) {
                var s = this.addRule(o, n[o], r);
                s && i.push(s)
            }
            return i
        }, t.getRule = function(n) {
            return this.rules.get(n)
        }, t.deleteRule = function(n) {
            var r = typeof n == "object" ? n : this.rules.get(n);
            return !r || this.attached && !r.renderable ? !1 : (this.rules.remove(r), this.attached && r.renderable && this.renderer ? this.renderer.deleteRule(r.renderable) : !0)
        }, t.indexOf = function(n) {
            return this.rules.indexOf(n)
        }, t.deploy = function() {
            return this.renderer && this.renderer.deploy(), this.deployed = !0, this
        }, t.update = function() {
            var n;
            return (n = this.rules).update.apply(n, arguments), this
        }, t.updateOne = function(n, r, i) {
            return this.rules.updateOne(n, r, i), this
        }, t.toString = function(n) {
            return this.rules.toString(n)
        }, e
    }(),
    a0 = function() {
        function e() {
            this.plugins = {
                internal: [],
                external: []
            }, this.registry = {}
        }
        var t = e.prototype;
        return t.onCreateRule = function(n, r, i) {
            for (var o = 0; o < this.registry.onCreateRule.length; o++) {
                var s = this.registry.onCreateRule[o](n, r, i);
                if (s) return s
            }
            return null
        }, t.onProcessRule = function(n) {
            if (!n.isProcessed) {
                for (var r = n.options.sheet, i = 0; i < this.registry.onProcessRule.length; i++) this.registry.onProcessRule[i](n, r);
                n.style && this.onProcessStyle(n.style, n, r), n.isProcessed = !0
            }
        }, t.onProcessStyle = function(n, r, i) {
            for (var o = 0; o < this.registry.onProcessStyle.length; o++) r.style = this.registry.onProcessStyle[o](r.style, r, i)
        }, t.onProcessSheet = function(n) {
            for (var r = 0; r < this.registry.onProcessSheet.length; r++) this.registry.onProcessSheet[r](n)
        }, t.onUpdate = function(n, r, i, o) {
            for (var s = 0; s < this.registry.onUpdate.length; s++) this.registry.onUpdate[s](n, r, i, o)
        }, t.onChangeValue = function(n, r, i) {
            for (var o = n, s = 0; s < this.registry.onChangeValue.length; s++) o = this.registry.onChangeValue[s](o, r, i);
            return o
        }, t.use = function(n, r) {
            r === void 0 && (r = {
                queue: "external"
            });
            var i = this.plugins[r.queue];
            i.indexOf(n) === -1 && (i.push(n), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(o, s) {
                for (var a in s) a in o && o[a].push(s[a]);
                return o
            }, {
                onCreateRule: [],
                onProcessRule: [],
                onProcessStyle: [],
                onProcessSheet: [],
                onChangeValue: [],
                onUpdate: []
            }))
        }, e
    }(),
    na = function() {
        function e() {
            this.registry = []
        }
        var t = e.prototype;
        return t.add = function(n) {
            var r = this.registry,
                i = n.options.index;
            if (r.indexOf(n) === -1) {
                if (r.length === 0 || i >= this.index) {
                    r.push(n);
                    return
                }
                for (var o = 0; o < r.length; o++)
                    if (r[o].options.index > i) {
                        r.splice(o, 0, n);
                        return
                    }
            }
        }, t.reset = function() {
            this.registry = []
        }, t.remove = function(n) {
            var r = this.registry.indexOf(n);
            this.registry.splice(r, 1)
        }, t.toString = function(n) {
            for (var r = n === void 0 ? {} : n, i = r.attached, o = Nv(r, ["attached"]), s = de(o), a = s.linebreak, l = "", u = 0; u < this.registry.length; u++) {
                var c = this.registry[u];
                i != null && c.attached !== i || (l && (l += a), l += c.toString(o))
            }
            return l
        }, Gs(e, [{
            key: "index",
            get: function() {
                return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index
            }
        }]), e
    }(),
    He = new na,
    Xr = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(),
    Yr = "2f1acc6c3a606b082e5eef5e54414ffb";
Xr[Yr] == null && (Xr[Yr] = 0);
var ra = Xr[Yr]++,
    ia = function(e) {
        e === void 0 && (e = {});
        var t = 0,
            n = function(r, i) {
                t += 1;
                var o = "",
                    s = "";
                return i && (i.options.classNamePrefix && (s = i.options.classNamePrefix), i.options.jss.id != null && (o = String(i.options.jss.id))), e.minify ? "" + (s || "c") + ra + o + t : s + r.key + "-" + ra + (o ? "-" + o : "") + "-" + t
            };
        return n
    },
    oa = function(e) {
        var t;
        return function() {
            return t || (t = e()), t
        }
    },
    l0 = function(e, t) {
        try {
            return e.attributeStyleMap ? e.attributeStyleMap.get(t) : e.style.getPropertyValue(t)
        } catch (n) {
            return ""
        }
    },
    u0 = function(e, t, n) {
        try {
            var r = n;
            if (Array.isArray(n) && (r = Gt(n)), e.attributeStyleMap) e.attributeStyleMap.set(t, r);
            else {
                var i = r ? r.indexOf("!important") : -1,
                    o = i > -1 ? r.substr(0, i - 1) : r;
                e.style.setProperty(t, o, i > -1 ? "important" : "")
            }
        } catch (s) {
            return !1
        }
        return !0
    },
    c0 = function(e, t) {
        try {
            e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t)
        } catch (n) {}
    },
    d0 = function(e, t) {
        return e.selectorText = t, e.selectorText === t
    },
    sa = oa(function() {
        return document.querySelector("head")
    });

function h0(e, t) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.attached && r.options.index > t.index && r.options.insertionPoint === t.insertionPoint) return r
    }
    return null
}

function p0(e, t) {
    for (var n = e.length - 1; n >= 0; n--) {
        var r = e[n];
        if (r.attached && r.options.insertionPoint === t.insertionPoint) return r
    }
    return null
}

function f0(e) {
    for (var t = sa(), n = 0; n < t.childNodes.length; n++) {
        var r = t.childNodes[n];
        if (r.nodeType === 8 && r.nodeValue.trim() === e) return r
    }
    return null
}

function m0(e) {
    var t = He.registry;
    if (t.length > 0) {
        var n = h0(t, e);
        if (n && n.renderer) return {
            parent: n.renderer.element.parentNode,
            node: n.renderer.element
        };
        if (n = p0(t, e), n && n.renderer) return {
            parent: n.renderer.element.parentNode,
            node: n.renderer.element.nextSibling
        }
    }
    var r = e.insertionPoint;
    if (r && typeof r == "string") {
        var i = f0(r);
        if (i) return {
            parent: i.parentNode,
            node: i.nextSibling
        }
    }
    return !1
}

function g0(e, t) {
    var n = t.insertionPoint,
        r = m0(t);
    if (r !== !1 && r.parent) {
        r.parent.insertBefore(e, r.node);
        return
    }
    if (n && typeof n.nodeType == "number") {
        var i = n,
            o = i.parentNode;
        o && o.insertBefore(e, i.nextSibling);
        return
    }
    sa().appendChild(e)
}
var b0 = oa(function() {
        var e = document.querySelector('meta[property="csp-nonce"]');
        return e ? e.getAttribute("content") : null
    }),
    aa = function(e, t, n) {
        try {
            "insertRule" in e ? e.insertRule(t, n) : "appendRule" in e && e.appendRule(t)
        } catch (r) {
            return !1
        }
        return e.cssRules[n]
    },
    la = function(e, t) {
        var n = e.cssRules.length;
        return t === void 0 || t > n ? n : t
    },
    _0 = function() {
        var e = document.createElement("style");
        return e.textContent = `
`, e
    },
    y0 = function() {
        function e(n) {
            this.getPropertyValue = l0, this.setProperty = u0, this.removeProperty = c0, this.setSelector = d0, this.hasInsertedRules = !1, this.cssRules = [], n && He.add(n), this.sheet = n;
            var r = this.sheet ? this.sheet.options : {},
                i = r.media,
                o = r.meta,
                s = r.element;
            this.element = s || _0(), this.element.setAttribute("data-jss", ""), i && this.element.setAttribute("media", i), o && this.element.setAttribute("data-meta", o);
            var a = b0();
            a && this.element.setAttribute("nonce", a)
        }
        var t = e.prototype;
        return t.attach = function() {
            if (!(this.element.parentNode || !this.sheet)) {
                g0(this.element, this.sheet.options);
                var n = !!(this.sheet && this.sheet.deployed);
                this.hasInsertedRules && n && (this.hasInsertedRules = !1, this.deploy())
            }
        }, t.detach = function() {
            if (this.sheet) {
                var n = this.element.parentNode;
                n && n.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`)
            }
        }, t.deploy = function() {
            var n = this.sheet;
            if (n) {
                if (n.options.link) {
                    this.insertRules(n.rules);
                    return
                }
                this.element.textContent = `
` + n.toString() + `
`
            }
        }, t.insertRules = function(n, r) {
            for (var i = 0; i < n.index.length; i++) this.insertRule(n.index[i], i, r)
        }, t.insertRule = function(n, r, i) {
            if (i === void 0 && (i = this.element.sheet), n.rules) {
                var o = n,
                    s = i;
                if (n.type === "conditional" || n.type === "keyframes") {
                    var a = la(i, r);
                    if (s = aa(i, o.toString({
                            children: !1
                        }), a), s === !1) return !1;
                    this.refCssRule(n, a, s)
                }
                return this.insertRules(o.rules, s), s
            }
            var l = n.toString();
            if (!l) return !1;
            var u = la(i, r),
                c = aa(i, l, u);
            return c === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(n, u, c), c)
        }, t.refCssRule = function(n, r, i) {
            n.renderable = i, n.options.parent instanceof ea && this.cssRules.splice(r, 0, i)
        }, t.deleteRule = function(n) {
            var r = this.element.sheet,
                i = this.indexOf(n);
            return i === -1 ? !1 : (r.deleteRule(i), this.cssRules.splice(i, 1), !0)
        }, t.indexOf = function(n) {
            return this.cssRules.indexOf(n)
        }, t.replaceRule = function(n, r) {
            var i = this.indexOf(n);
            return i === -1 ? !1 : (this.element.sheet.deleteRule(i), this.cssRules.splice(i, 1), this.insertRule(r, i))
        }, t.getRules = function() {
            return this.element.sheet.cssRules
        }, e
    }(),
    v0 = 0,
    w0 = function() {
        function e(n) {
            this.id = v0++, this.version = "10.10.0", this.plugins = new a0, this.options = {
                id: {
                    minify: !1
                },
                createGenerateId: ia,
                Renderer: Ne ? y0 : null,
                plugins: []
            }, this.generateId = ia({
                minify: !1
            });
            for (var r = 0; r < Zs.length; r++) this.plugins.use(Zs[r], {
                queue: "internal"
            });
            this.setup(n)
        }
        var t = e.prototype;
        return t.setup = function(n) {
            return n === void 0 && (n = {}), n.createGenerateId && (this.options.createGenerateId = n.createGenerateId), n.id && (this.options.id = Q({}, this.options.id, n.id)), (n.createGenerateId || n.id) && (this.generateId = this.options.createGenerateId(this.options.id)), n.insertionPoint != null && (this.options.insertionPoint = n.insertionPoint), "Renderer" in n && (this.options.Renderer = n.Renderer), n.plugins && this.use.apply(this, n.plugins), this
        }, t.createStyleSheet = function(n, r) {
            r === void 0 && (r = {});
            var i = r,
                o = i.index;
            typeof o != "number" && (o = He.index === 0 ? 0 : He.index + 1);
            var s = new ea(n, Q({}, r, {
                jss: this,
                generateId: r.generateId || this.generateId,
                insertionPoint: this.options.insertionPoint,
                Renderer: this.options.Renderer,
                index: o
            }));
            return this.plugins.onProcessSheet(s), s
        }, t.removeStyleSheet = function(n) {
            return n.detach(), He.remove(n), this
        }, t.createRule = function(n, r, i) {
            if (r === void 0 && (r = {}), i === void 0 && (i = {}), typeof n == "object") return this.createRule(void 0, n, r);
            var o = Q({}, i, {
                name: n,
                jss: this,
                Renderer: this.options.Renderer
            });
            o.generateId || (o.generateId = this.generateId), o.classes || (o.classes = {}), o.keyframes || (o.keyframes = {});
            var s = En(n, r, o);
            return s && this.plugins.onProcessRule(s), s
        }, t.use = function() {
            for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return i.forEach(function(s) {
                n.plugins.use(s)
            }), this
        }, e
    }(),
    x0 = function(e) {
        return new w0(e)
    },
    Qr = typeof CSS == "object" && CSS != null && "number" in CSS;
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
var ua = x0();
class k0 {
    constructor() {
        this.sheets = new na
    }
    add(t) {
        this.sheets.add(t), this.generateStyleSheet()
    }
    remove(t) {
        this.sheets.remove(t), this.generateStyleSheet()
    }
    generateStyleSheet() {
        if (document.getElementById("buttonizer-styling")) return document.getElementById("buttonizer-styling").innerHTML = this.sheets.toString({
            format: !1
        });
        const t = document.createElement("style");
        t.id = "buttonizer-styling", t.innerHTML = this.sheets.toString({
            format: !1
        }), document.head.appendChild(t)
    }
}
const ca = new k0;
class da {
    constructor(t, n) {
        this.cachedData = t;
        const r = ua.createStyleSheet(Object.keys(t).reduce((i, o) => ({ ...i,
            [o]: s => s[o]
        }), {}), {
            link: !0,
            element: !1,
            classNamePrefix: "buttonizer-",
            ...n
        });
        return r.oldUpdate = r.update, r.update = i => {
            I(this.cachedData, i)
        }, r.attach = () => {
            r.oldUpdate(this.cachedData), ca.add(r)
        }, r.detach = () => {
            ca.remove(r)
        }, r.getCachedData = () => this.cachedData, r
    }
}

function S0() {
    return new da({
        button: {
            display: "block",
            cursor: "pointer",
            outline: "none",
            position: "relative",
            width: 42,
            height: 42,
            maxWidth: "none !important",
            color: "#fff",
            "background-color": "#48A4DC",
            "box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
            textAlign: "center",
            textDecoration: "none",
            margin: "0 auto 0 auto",
            "border-radius": "50%",
            transition: "ease-in-out 250ms",
            visibility: "visible",
            outline: "none !important",
            userSelect: "none",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "&::before": {
                content: "''",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center center",
                "border-radius": "50%",
                position: "absolute",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                left: 0,
                top: 0,
                transition: "all 250ms ease-in-out 0s"
            },
            "&:hover": {
                "&::before": {
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                    "background-position": "center center"
                },
                "background-color": "#F08419",
                "box-shadow": "0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-position": "center center"
            }
        },
        icon: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            "font-size": "16px",
            color: "#fff",
            "text-align": "center",
            transition: "all 0.2s ease-out",
            "z-index": 1
        },
        image: {
            width: 16,
            "max-width": "unset",
            transition: "all 0.2s ease-out",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "50%",
            left: "50%",
            "z-index": 1
        },
        label: {
            color: "#FFFFFFFF",
            background: "#4E4C4CFF",
            "font-size": 12,
            "font-family": "unset",
            "border-radius": "3px 3px 3px 3px",
            margin: "0px 0px 0px 0px",
            padding: "5px 15px 5px 15px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            "line-height": "initial",
            "white-space": "nowrap",
            transition: "all 250ms ease-in-out",
            "& img": {
                "max-width": "initial"
            },
            "z-index": 1
        },
        opened: {},
        closed: {},
        exit_intent_animate: {}
    }, {
        link: !0
    })
}

function O0(e) {
    var o;
    let t = {
            visibility: "hidden",
            pointerEvents: "none"
        },
        n = "ease-in-out 250ms";
    const r = (o = e.entrance_animation) != null ? o : "no_animation",
        i = r.indexOf("swing") >= 0;
    return r === "no_animation" && (t = { ...t,
        opacity: 0,
        transform: oe({ ...e,
            transform_vertical: "50px"
        })
    }), r === "zoom" && (t.transform = `${oe(e,"")} scale(0)`, t.transitionDuration = "400ms"), r.indexOf("fade") >= 0 && (t.opacity = 0), i && (t.opacity = 0, t.transform = oe({ ...e,
        transform_rotate: r === "swing_down" ? 160 : -160
    }, ""), n = "1s"), !i && (r.indexOf("_up") >= 0 || r.indexOf("_down") >= 0) ? t.transform = oe({ ...e,
        transform_vertical: r.indexOf("_up") >= 0 ? "50px" : "-50px"
    }) : (r.indexOf("_left") >= 0 || r.indexOf("_right") >= 0) && (t.transform = oe({ ...e,
        transform_horizontal: r.indexOf("_right") >= 0 ? "50px" : "-50px"
    })), new da({
        group: {
            position: "fixed",
            display: "flex",
            visibility: "hidden",
            "z-index": 99999,
            transition: n
        },
        hiddenScroll: t,
        hiddenTimeout: t,
        hiddenFormilla: t,
        hiddenEntrance: r === "no_animation" ? {} : t
    }, {
        link: !0
    })
}
class j0 extends _t {
    constructor() {
        super()
    }
    createJss(t, n, r, i) {
        const o = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
        let s = 0,
            a = 0;
        Object.keys(t.buttons).map(l => {
            const u = t.buttons[l],
                c = n === "mobile" ? u.visibility.mobile() : u.visibility.desktop();
            if (l === t.menuButton) s = u.data.group_size, u.stylesheet.update({
                button: {
                    "z-index": 9999
                }
            }), u.stylesheet.update({
                opened: {
                    [o]: {
                        "& $icon": {
                            transform: "translate(-50%, -50%) rotate(45deg)"
                        },
                        "& $label": {
                            visibility: "hidden",
                            opacity: "0"
                        }
                    }
                }
            });
            else if (r) {
                const d = parseInt(i) / 2 + parseInt(s) / 2;
                s = i;
                let m = {
                    [`margin-${t.data.vertical[0]}`]: `-${d}px`,
                    opacity: 0,
                    visibility: "hidden",
                    "pointer-events": "none",
                    "& $label": {
                        visibility: "hidden",
                        opacity: "0"
                    }
                };
                E() && u.data.label_inside && (m.width = 0), u.stylesheet.update({
                    closed: {
                        [o]: m
                    }
                })
            } else a === 0 && u.stylesheet.update({
                button: {
                    [o]: {
                        [`margin-${t.data.vertical[0]}`]: 0
                    }
                }
            }), c && a++
        })
    }
}
class z0 extends _t {
    constructor() {
        super()
    }
    createJss(t, n, r) {
        let i = 0;
        const o = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
        Object.keys(t.buttons).map(s => {
            const a = t.buttons[s],
                l = n === "mobile" ? a.visibility.mobile() : a.visibility.desktop();
            if (s === t.menuButton) a.stylesheet.update({
                button: {
                    width: 56,
                    height: 56,
                    "z-index": 9999
                }
            }), a.icon && a.icon.stylesheet.update({
                icon: {
                    "font-size": "25px",
                    transition: "all ease-in-out 250ms"
                }
            }), a.stylesheet.update({
                opened: {
                    [o]: {
                        "& $icon": {
                            transform: "translate(-50%, -50%) rotate(45deg)"
                        },
                        "& $label": {
                            visibility: "hidden",
                            opacity: 0
                        }
                    }
                }
            });
            else if (l)
                if (r) {
                    let u = {
                        transform: "scale(0)",
                        opacity: 0,
                        visibility: "hidden",
                        "pointer-events": "none",
                        "& $label": {
                            visibility: "hidden",
                            opacity: "0"
                        }
                    };
                    E() && a.data.label_inside && (u.width = 0), a.stylesheet.update({
                        closed: {
                            [o]: u
                        }
                    }), a.stylesheet.update({
                        opened: {
                            [o]: {
                                opacity: 1,
                                visibility: "visible",
                                transform: "scale(1)",
                                transition: `all 300ms ease-in, transform 200ms ${i*35}ms,
              opacity 200ms ${i*35}ms`
                            }
                        }
                    }), l && i++
                } else i === 0 && a.stylesheet.update({
                    button: {
                        [o]: {
                            [`margin-${t.data.vertical[0]}`]: 0
                        }
                    }
                }), l && i++
        })
    }
}
class E0 extends _t {
    constructor() {
        super()
    }
    createJss(t, n, r) {
        let i = 0;
        const o = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
        Object.keys(t.buttons).map(s => {
            const a = t.buttons[s],
                l = n === "mobile" ? a.visibility.mobile() : a.visibility.desktop();
            if (s === t.menuButton) a.stylesheet.update({
                button: {
                    "z-index": 9999999
                }
            }), a.stylesheet.update({
                opened: {
                    [o]: {
                        "& $icon": {
                            transform: "translate(-50%, -50%) rotate(45deg)"
                        },
                        "& $label": {
                            visibility: "hidden",
                            opacity: "0"
                        }
                    }
                }
            });
            else if (l)
                if (r) {
                    let u = {
                        [t.data.horizontal[0]]: "-50px",
                        opacity: 0,
                        visibility: "hidden",
                        transition: "all 300ms ease-in",
                        "pointer-events": "none",
                        "& $label": {
                            visibility: "hidden",
                            opacity: "0"
                        }
                    };
                    E() && a.data.label_inside && (u.width = 0), a.stylesheet.update({
                        closed: {
                            [o]: u
                        }
                    }), a.stylesheet.update({
                        opened: {
                            [o]: {
                                [t.data.horizontal[0]]: "0px",
                                opacity: 1,
                                visibility: "visible",
                                transition: `all 300ms ease-in, ${t.data.horizontal[0]} 300ms ${i*150}ms,
              opacity 300ms ${i*150}ms`
                            }
                        }
                    }), l && i++
                } else i === 0 && a.stylesheet.update({
                    button: {
                        [o]: {
                            [`margin-${t.data.vertical[0]}`]: 0
                        }
                    }
                }), l && i++
        })
    }
}
class P0 extends _t {
    constructor() {
        super()
    }
    createJss(t, n, r, i) {
        let o = 56,
            s = 0;
        const a = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
        Object.keys(t.buttons).map(l => {
            const u = t.buttons[l],
                c = n === "mobile" ? u.visibility.mobile() : u.visibility.desktop();
            if (l === t.menuButton) o = u.data.group_size, u.stylesheet.update({
                button: {
                    "z-index": 9999
                }
            }), u.stylesheet.update({
                opened: {
                    [a]: {
                        "& $icon": {
                            transform: "translate(-50%, -50%) rotate(45deg)"
                        },
                        "& $label": {
                            visibility: "hidden",
                            opacity: 0
                        }
                    }
                }
            });
            else if (c)
                if (r) {
                    const d = parseInt(i) / 2 + parseInt(o) / 2;
                    o = i;
                    let m = {
                        "pointer-events": "none",
                        [`margin-${t.data.vertical[0]}`]: `-${d}px`,
                        opacity: 0,
                        visibility: "hidden",
                        "& $label": {
                            visibility: "hidden",
                            opacity: "0"
                        }
                    };
                    E() && u.data.label_inside && (m.width = 0), u.stylesheet.update({
                        closed: {
                            [a]: m
                        }
                    }), u.stylesheet.update({
                        opened: {
                            [a]: {
                                transition: `all ease-in-out 250ms, margin-${t.data.vertical[0]} 200ms ${s*150}ms,
              opacity 200ms ${s*150}ms`,
                                opacity: 1,
                                visibility: "visible"
                            }
                        }
                    }), c && s++
                } else s === 0 && u.stylesheet.update({
                    button: {
                        [a]: {
                            [`margin-${t.data.vertical[0]}`]: 0
                        }
                    }
                }), c && s++
        })
    }
}

function R0(e = 0, t, n) {
    let r = 0,
        i = 1.2,
        o, s = -1,
        a = 1,
        l = 0;
    do s = Math.round(70 * Math.cos(.5 * (l - r) * Math.PI / (a + 1))), o = Math.round(70 * Math.sin(.5 * (l - r) * Math.PI / (a + 1))), l++, s < 0 && (l--, r = l, i += .9, a += 1); while (l <= e);
    return s = i * s, o = i * o, t === "right" && (s = -s), n === "bottom" && (o = -o), [s, o]
}
class A0 extends _t {
    constructor() {
        super()
    }
    createJss(t, n, r, i) {
        let o = 56,
            s = 0;
        const a = n === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
        Object.keys(t.buttons).map(l => {
            const u = t.buttons[l],
                c = n === "mobile" ? u.visibility.mobile() : u.visibility.desktop();
            if (l === t.menuButton) o = u.data.group_size, u.stylesheet.update({
                button: {
                    "z-index": 9999
                }
            }), u.stylesheet.update({
                opened: {
                    [a]: {
                        "& $icon": {
                            transform: "translate(-50%, -50%) rotate(45deg)"
                        },
                        "& $label": {
                            visibility: "hidden",
                            opacity: 0,
                            pointerEvents: "none"
                        }
                    }
                }
            });
            else if (c)
                if (r) {
                    const d = parseInt(i) / 2 + parseInt(o) / 2;
                    o = i;
                    const m = R0(s, t.data.horizontal[0], t.data.vertical[0]);
                    u.stylesheet.update({
                        closed: {
                            [a]: {
                                opacity: 0,
                                visibility: "hidden",
                                "pointer-events": "none",
                                "& $label": {
                                    visibility: "hidden",
                                    opacity: "0"
                                },
                                [`margin-${t.data.vertical[0]}`]: `-${d}px`
                            }
                        }
                    }), u.stylesheet.update({
                        opened: {
                            [a]: {
                                opacity: 1,
                                visibility: "visible",
                                [`margin-${t.data.vertical[0]}`]: `-${d}px`,
                                transform: `translate(${m[0]}px, ${m[1]}px)`,
                                transition: `all ease-in-out 250ms, transform 200ms ${s*150}ms, opacity 200ms ${s*150}ms`,
                                "& $label": {
                                    visibility: "hidden",
                                    opacity: 0,
                                    pointerEvents: "none"
                                },
                                "&:hover": {
                                    "z-index": 1
                                },
                                "&:hover $label": {
                                    visibility: "visible",
                                    opacity: 1
                                }
                            }
                        }
                    }), c && s++
                } else s === 0 && u.stylesheet.update({
                    button: {
                        [a]: {
                            [`margin-${t.data.vertical[0]}`]: 0
                        }
                    }
                }), c && s++
        })
    }
}
const ha = {
    default: j0,
    pop: z0,
    faded: E0,
    "building-up": P0,
    "corner-circle": A0
};
class C0 extends _t {
    constructor({
        data: t
    }) {
        super(), this.groupAnimationDelay = t.menu_animation_delay, this.animationRepeatCount = t.menu_animation_repeat_count, this.animationCount = 0, this.animation = t.menu_animation, this.menuButtonId = "", this.animationClasses = {}, this.animatedButtons = []
    }
    generate(t) {
        t.generators.forEach(n => {
            n instanceof vn && this.animatedButtons.push({
                button: t.buttons[n.button],
                device: n.visibility
            })
        }), this.animatedButtons.push({
            button: t.buttons[t.menuButton]
        }), this.menuButtonId = t.menuButton, this.animatedButtons.forEach(n => {
            const r = n.device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
            if (this.animation === "pulse") {
                const i = n.button.data.border_radius.length >= 1 && n.button.data.border_radius[0] != "" ? n.button.data.border_radius[0] : n.button.stylesheet.getCachedData().button["border-radius"],
                    o = document.createElement("span");
                o.className = "buttonizer-pulse-animation", n.button.element.appendChild(o);
                const s = {
                        "@global .buttonizer-pulse-animation": {
                            "&:before, &:after": {
                                content: '""',
                                position: "absolute",
                                opacity: .8,
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                "z-index": -3,
                                display: "block",
                                background: k(n.button.data, "background_color.0", k(t.data, "background_color.0", n.button.stylesheet.getCachedData().button.background)),
                                "border-radius": i
                            },
                            "&:before": {
                                animation: "buttonizer-pulse 1.8s 0s ease-out"
                            },
                            "&:after": {
                                animation: "buttonizer-pulse 1.8s 0.333s ease-out"
                            }
                        }
                    },
                    a = n.device ? {
                        [r]: s
                    } : s,
                    l = n.device ? `animate-${n.device}` : "animate";
                this.animationClasses[n.button.data.id] ? this.animationClasses[n.button.data.id].push(n.button.stylesheet.addRule(l, a).id) : this.animationClasses[n.button.data.id] = [n.button.stylesheet.addRule(l, a).id]
            } else {
                const i = {
                        animation: `buttonizer-${this.animation} ${this.animation==="hello"?"2s":"1s"} linear`
                    },
                    o = n.device ? {
                        [r]: i
                    } : i,
                    s = n.device ? `animate-${n.device}` : "animate";
                this.animationClasses[n.button.data.id] ? this.animationClasses[n.button.data.id].push(n.button.stylesheet.addRule(s, o).id) : this.animationClasses[n.button.data.id] = [n.button.stylesheet.addRule(s, o).id]
            }
        }), this.animate()
    }
    animate() {
        this.animationRepeatCount !== 0 && this.animationRepeatCount <= this.animationCount || (this.animationCount += 1, this.animatedButtons.forEach(t => {
            t.button.element.classList.contains(t.button.stylesheet.classes.opened) || t.button.element.classList.add(...this.animationClasses[t.button.data.id])
        }), setTimeout(() => {
            this.stopAnimation()
        }, 2e3), setTimeout(() => this.animate(), this.groupAnimationDelay * 1e3 + 2e3))
    }
    stopAnimation(t = !1) {
        this.animatedButtons.forEach(n => {
            t && n.button.data.id === this.menuButtonId || n.button.element.classList.remove(...this.animationClasses[n.button.data.id])
        })
    }
}
class T0 extends yr {
    extend(t) {
        B().addHook("buttonizer_loaded", ({
            groups: n
        }) => {
            this.extendButtons(n[t.data.id].buttons)
        }), E() && B().addHook("buttonizer_live_update", ({
            groups: n,
            groupId: r,
            key: i
        }) => {
            r === t.data.id && (i === "label" || i === "menu_style") && this.extendOutside(n[t.data.id].buttons)
        })
    }
    extendButtons(t) {
        this.extendInside(t), this.extendOutside(t)
    }
    extendInside(t) {
        const n = Object.values(t).filter(r => r.data.label_inside);
        n.length > 0 && (this.setSameWidthIcons(n), this.setSameWidthButtons(n))
    }
    extendOutside(t) {
        const n = Object.values(t).filter(r => !r.data.label_inside);
        n.length > 0 && this.setSameWidthLabels(n)
    }
    setSameWidthLabels(t) {
        const n = Object.keys(t).reduce((r, i) => {
            const o = t[i];
            return o.label ? Math.max(o.label.element.clientWidth, r) : r
        }, 0);
        Object.values(t).forEach(r => {
            const i = r.data.horizontal_position_label === "auto" ? r.data.horizontal[0] : r.data.horizontal_position_label;
            r.stylesheet.update({
                label: {
                    "min-width": n,
                    "text-align": r.data.label_text_align !== "auto" ? r.data.label_text_align : i === "right" ? "end" : "start"
                }
            }), r.stylesheet.attach()
        })
    }
    setSameWidthButtons(t) {
        const n = Object.keys(t).reduce((r, i) => {
            const o = t[i];
            return o.element ? Math.max(o.element.clientWidth, r) : r
        }, 0);
        Object.values(t).forEach(r => {
            const i = r.data.horizontal_position_label === "auto" ? r.data.horizontal[0] : r.data.horizontal_position_label;
            r.stylesheet.update({
                button: {
                    "min-width": n,
                    "text-align": r.data.label_text_align !== "auto" ? r.data.label_text_align : i === "right" ? "end" : "start"
                }
            }), r.stylesheet.attach()
        })
    }
    setSameWidthIcons(t) {
        const n = Object.keys(t).reduce((i, o) => {
                const s = t[o];
                return k(s, "data.icon_size.0", !1) ? Math.max(s.data.icon_size[0], i) : i
            }, 0),
            r = Object.keys(t).reduce((i, o) => {
                const s = t[o];
                return k(s, "data.icon_size.1", !1) ? Math.max(s.data.icon_size[1], i) : i
            }, 0);
        Object.values(t).forEach(i => {
            const o = i.data.horizontal_position_label === "auto" ? i.data.horizontal[0] : i.data.horizontal_position_label;
            i.stylesheet.update({
                icon: {
                    "min-width": Math.max(n, r)
                },
                image: {
                    "margin-left": (Math.max(n, r) - i.data.icon_size) / 2 + (o === "right" ? 0 : 15),
                    "margin-right": (Math.max(n, r) - i.data.icon_size) / 2 + (o === "left" ? 0 : 15)
                }
            }), i.stylesheet.attach()
        })
    }
}
class $0 extends yr {
    extend(t) {
        this.setLabelInsideButton(t)
    }
    setLabelInsideButton(t) {
        const n = t.data.horizontal_position_label === "auto" ? t.data.horizontal[0] : t.data.horizontal_position_label;
        t.stylesheet.update({
            button: {
                display: "flex",
                "align-items": "center",
                "margin-right": 0,
                "margin-left": 0,
                "flex-direction": n === "right" ? "row-reverse" : "row",
                "min-width": "fit-content",
                "&:hover": {
                    "& $label": {
                        background: "transparent",
                        margin: "0px",
                        padding: "0px",
                        "box-shadow": "unset"
                    },
                    "& $icon": {
                        [`margin-${n==="right"?"left":"right"}`]: t.data.icon_spacing[1]
                    },
                    "& $image": {
                        [`margin-${n==="right"?"left":"right"}`]: t.data.icon_spacing[1]
                    }
                }
            },
            icon: {
                top: 0,
                position: "initial",
                transform: "initial",
                margin: "0",
                [`margin-${n==="right"?"left":"right"}`]: t.data.icon_spacing[0]
            },
            image: {
                top: 0,
                position: "initial",
                transform: "initial",
                margin: "0",
                [`margin-${n==="right"?"left":"right"}`]: t.data.icon_spacing[0]
            },
            label: {
                display: "inline-block",
                opacity: 1,
                visibility: "visible",
                position: "initial",
                height: `${t.data.height}px`,
                "line-height": `${t.data.height}px`,
                top: 0,
                transform: "initial",
                background: "transparent",
                margin: "0px",
                padding: "0px",
                "box-shadow": "unset",
                background: "unset"
            },
            opened: {
                "& $icon": {
                    transform: "initial"
                },
                "& $label": {
                    visibility: "visible",
                    opacity: "1"
                }
            },
            closed: {
                "& $label": {
                    visibility: "visible",
                    opacity: "1"
                }
            }
        })
    }
}
class I0 extends _t {
    constructor() {
        super()
    }
    generate(t) {
        const n = t.data.is_menu_desktop || t.data.is_menu_mobile;
        t.stylesheet.update({
            group: {
                "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    inset: n ? "unset" : 0,
                    "z-index": -1,
                    display: "block",
                    background: " #f08419",
                    visibility: "hidden",
                    inset: n ? "unset" : 0,
                    "border-radius": n ? "50%" : "10px",
                    height: n ? t.data.group_size : "unset",
                    width: n ? t.data.group_size : "unset"
                },
                "&::before": {
                    animation: `${n?"buttonizer-pulse-new-group-circle":"buttonizer-pulse-new-group-square"} 1s 0s ease-out`
                },
                "&:after": {
                    animation: `${n?"buttonizer-pulse-new-group-circle":"buttonizer-pulse-new-group-square"} 1s 0.185s ease-out`
                }
            }
        })
    }
}
class L0 extends _t {
    constructor({
        horizontal: t,
        vertical: n
    }) {
        super(), this.horizontal = t[0] === "left" && Number(t[1].match(/^[0-9]+/g)[0]) <= "50" || t[0] === "right" && Number(t[1].match(/^[0-9]+/g)[0]) >= "50" ? "right" : "left", this.vertical = n[0] === "bottom" && Number(n[1].match(/^[0-9]+/g)[0]) <= "50" || n[0] === "top" && Number(n[1].match(/^[0-9]+/g)[0]) >= "50" ? "top" : "bottom"
    }
    generate(t) {
        this.createBorder(t, !0), Object.values(t.buttons).map(n => {
            this.editAction(n, t.data.id, n.data.id === t.menuButton), this.createBorder(n)
        })
    }
    editAction(t, n, r) {
        let i = {};
        r ? i = {
            type: "to-menu",
            data: {
                group: n
            }
        } : i = {
            type: "to-button",
            data: {
                group: n,
                button: t.data.id
            }
        }, t.element.addEventListener("click", o => {
            t.disableClickInPreview && (o.preventDefault(), ut("admin-link-redirect", i))
        })
    }
    createBorder({
        element: t,
        stylesheet: n,
        data: r,
        buttons: i
    }, o = !1) {
        const s = document.createElement("div");
        s.className = J.editButton;
        const a = document.createElement("div");
        a.className = J.buttonizerEditIcon, a.innerHTML = '<i class="fa fa-pencil-alt fa fa-pencil" data-no-action="true"></i>';
        const l = document.createElement("span");
        l.className = J.buttonizerEditTooltip;
        const u = document.createElement("div");
        u.className = J.buttonizerButtonSpoof, u.appendChild(l), u.appendChild(a), s.appendChild(u), o ? (s.classList.add(J.group), l.innerHTML = "Edit group", s.addEventListener("click", () => {
            ut("admin-link-redirect", {
                type: "to-group",
                data: {
                    group: r.id
                }
            })
        }), i["menu-button"].element.addEventListener("mouseenter", c => {
            c.stopPropagation(), s.classList.add("menuHover")
        }), i["menu-button"].element.addEventListener("mouseleave", c => {
            c.stopPropagation(), s.classList.remove("menuHover")
        }), n.update({
            group: {
                [`& .${J.editButton}.${J.group}`]: {
                    maxHeight: Bt(i["menu-button"].data.button_padding[0], "vertical") + r.group_size,
                    position: "absolute",
                    "&.menuHover": {
                        maxHeight: Bt(i["menu-button"].data.button_padding[1], "vertical") + r.group_size
                    }
                },
                "&:hover": {
                    [`& > .${J.editButton}`]: {
                        opacity: 1
                    }
                }
            }
        }), r.is_menu_desktop || this.forceMaxHeight("desktop", n), r.is_menu_mobile || this.forceMaxHeight("mobile", n)) : (l.innerHTML = "Edit button", n.update({
            button: {
                "&:hover": {
                    [`& .${J.editButton}`]: {
                        opacity: 1
                    },
                    [`& .${J.buttonizerEditTooltip}`]: {
                        transition: "opacity 150ms ease-in 1s",
                        opacity: 1
                    }
                }
            }
        })), t.appendChild(s)
    }
    forceMaxHeight(t, n) {
        const r = t === "desktop" ? "min-width: 770px" : "max-width: 769px";
        n.update({
            group: {
                [`& .${J.editButton}.${J.group}`]: {
                    [`@media screen and (${r})`]: {
                        maxHeight: "100%"
                    }
                }
            }
        })
    }
}

function pa() {
    const e = kr(`buttonizer_${E()?"dashboard":"live"}_groups_opened`);
    return e ? JSON.parse(e) : {}
}

function B0(e, t = E()) {
    const n = pa();
    return typeof n[e] < "u" ? n[e] : t
}

function fa(e, t = !0) {
    const n = pa();
    return n[e] = t, mb(`buttonizer_${E()?"dashboard":"live"}_groups_opened`, JSON.stringify(n)), null
}
class N0 extends gt {
    constructor({
        menu_button: t
    }) {
        super(), this.group, this.opened = !1, this.menu_button = t, super.name = "open group functions"
    }
    onSubscribe(t) {
        this.group = t, (this.menu_button.data.start_opened === !0 || E()) && B0(this.group.data.id, this.menu_button.data.start_opened) === !0 ? this.open(!1) : this.close(!1), this.group.state = this
    }
    open(t = !0, n = !0) {
        if (B().activateHook("buttonizer_group_opened", {
                open: !0,
                group_id: this.group.data.id
            }), n && Ar({
                type: "group-open-close",
                name: this.group.data.name,
                interaction: "open"
            }), Object.keys(this.group.buttons).map(r => {
                const i = this.group.buttons[r],
                    o = i.stylesheet.classes.opened,
                    s = i.stylesheet.classes.closed;
                o && !i.element.classList.contains(o) && i.element.classList.add(o), s && i.element.classList.contains(s) && i.element.classList.remove(s)
            }), E()) {
            const r = this.group.element.querySelector(`.${J.editButton}`);
            r && !r.classList.contains(J.opened) && r.classList.add(J.opened)
        }(t && this.menu_button.data.start_opened || E()) && fa(this.group.data.id, !0), this.opened = !0
    }
    close(t = !0, n = !0) {
        if (B().activateHook("buttonizer_group_opened", {
                open: !1,
                group_id: this.group.data.id
            }), n && Ar({
                type: "group-open-close",
                name: this.group.data.name,
                interaction: "close"
            }), Object.keys(this.group.buttons).map(r => {
                const i = this.group.buttons[r],
                    o = i.stylesheet.classes.opened,
                    s = i.stylesheet.classes.closed;
                o && i.element.classList.contains(o) && i.element.classList.remove(o), s && !i.element.classList.contains(s) && i.element.classList.add(s)
            }), E()) {
            const r = this.group.element.querySelector(`.${J.editButton}`);
            r && r.classList.contains(J.opened) && r.classList.remove(J.opened)
        }(t && this.menu_button.data.start_opened || E()) && fa(this.group.data.id, !1), this.opened = !1
    }
    toggle() {
        this.opened ? this.close() : this.open()
    }
    isOpened() {
        return this.opened
    }
}

function D0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
    return i
}
var Zr = D0;

function F0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
    return e
}
var U0 = F0,
    H0 = ie,
    M0 = Ir;

function W0(e, t) {
    return e && H0(t, M0(t), e)
}
var q0 = W0,
    G0 = ie,
    V0 = Re;

function J0(e, t) {
    return e && G0(t, V0(t), e)
}
var K0 = J0,
    X0 = ie,
    Y0 = $r;

function Q0(e, t) {
    return X0(e, Y0(e), t)
}
var Z0 = Q0,
    tw = Tr,
    ew = ur,
    nw = $r,
    rw = js,
    iw = Object.getOwnPropertySymbols,
    ow = iw ? function(e) {
        for (var t = []; e;) tw(t, nw(e)), e = ew(e);
        return t
    } : rw,
    ma = ow,
    sw = ie,
    aw = ma;

function lw(e, t) {
    return sw(e, aw(e), t)
}
var uw = lw,
    cw = Os,
    dw = ma,
    hw = Re;

function pw(e) {
    return cw(e, hw, dw)
}
var ba = pw,
    fw = Object.prototype,
    mw = fw.hasOwnProperty;

function gw(e) {
    var t = e.length,
        n = new e.constructor(t);
    return t && typeof e[0] == "string" && mw.call(e, "index") && (n.index = e.index, n.input = e.input), n
}
var bw = gw,
    _w = ar;

function yw(e, t) {
    var n = t ? _w(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength)
}
var vw = yw,
    ww = /\w*$/;

function xw(e) {
    var t = new e.constructor(e.source, ww.exec(e));
    return t.lastIndex = e.lastIndex, t
}
var kw = xw,
    _a = Zt,
    ya = _a ? _a.prototype : void 0,
    va = ya ? ya.valueOf : void 0;

function Sw(e) {
    return va ? Object(va.call(e)) : {}
}
var Ow = Sw,
    jw = ar,
    zw = vw,
    Ew = kw,
    Pw = Ow,
    Rw = So,
    Aw = "[object Boolean]",
    Cw = "[object Date]",
    Tw = "[object Map]",
    $w = "[object Number]",
    Iw = "[object RegExp]",
    Lw = "[object Set]",
    Bw = "[object String]",
    Nw = "[object Symbol]",
    Dw = "[object ArrayBuffer]",
    Fw = "[object DataView]",
    Uw = "[object Float32Array]",
    Hw = "[object Float64Array]",
    Mw = "[object Int8Array]",
    Ww = "[object Int16Array]",
    qw = "[object Int32Array]",
    Gw = "[object Uint8Array]",
    Vw = "[object Uint8ClampedArray]",
    Jw = "[object Uint16Array]",
    Kw = "[object Uint32Array]";

function Xw(e, t, n) {
    var r = e.constructor;
    switch (t) {
        case Dw:
            return jw(e);
        case Aw:
        case Cw:
            return new r(+e);
        case Fw:
            return zw(e, n);
        case Uw:
        case Hw:
        case Mw:
        case Ww:
        case qw:
        case Gw:
        case Vw:
        case Jw:
        case Kw:
            return Rw(e, n);
        case Tw:
            return new r;
        case $w:
        case Bw:
            return new r(e);
        case Iw:
            return Ew(e);
        case Lw:
            return new r;
        case Nw:
            return Pw(e)
    }
}
var Yw = Xw,
    Qw = jn,
    Zw = At,
    t1 = "[object Map]";

function e1(e) {
    return Zw(e) && Qw(e) == t1
}
var n1 = e1,
    r1 = n1,
    i1 = fn,
    wa = hr,
    xa = wa && wa.isMap,
    o1 = xa ? i1(xa) : r1,
    s1 = o1,
    a1 = jn,
    l1 = At,
    u1 = "[object Set]";

function c1(e) {
    return l1(e) && a1(e) == u1
}
var d1 = c1,
    h1 = d1,
    p1 = fn,
    ka = hr,
    Sa = ka && ka.isSet,
    f1 = Sa ? p1(Sa) : h1,
    m1 = f1,
    g1 = or,
    b1 = U0,
    _1 = fr,
    y1 = q0,
    v1 = K0,
    w1 = wo,
    x1 = lr,
    k1 = Z0,
    S1 = uw,
    O1 = Es,
    j1 = ba,
    z1 = jn,
    E1 = bw,
    P1 = Yw,
    R1 = zo,
    A1 = Et,
    C1 = pn,
    T1 = s1,
    $1 = Rt,
    I1 = m1,
    L1 = Ir,
    B1 = Re,
    N1 = 1,
    D1 = 2,
    F1 = 4,
    Oa = "[object Arguments]",
    U1 = "[object Array]",
    H1 = "[object Boolean]",
    M1 = "[object Date]",
    W1 = "[object Error]",
    ja = "[object Function]",
    q1 = "[object GeneratorFunction]",
    G1 = "[object Map]",
    V1 = "[object Number]",
    za = "[object Object]",
    J1 = "[object RegExp]",
    K1 = "[object Set]",
    X1 = "[object String]",
    Y1 = "[object Symbol]",
    Q1 = "[object WeakMap]",
    Z1 = "[object ArrayBuffer]",
    tx = "[object DataView]",
    ex = "[object Float32Array]",
    nx = "[object Float64Array]",
    rx = "[object Int8Array]",
    ix = "[object Int16Array]",
    ox = "[object Int32Array]",
    sx = "[object Uint8Array]",
    ax = "[object Uint8ClampedArray]",
    lx = "[object Uint16Array]",
    ux = "[object Uint32Array]",
    M = {};
M[Oa] = M[U1] = M[Z1] = M[tx] = M[H1] = M[M1] = M[ex] = M[nx] = M[rx] = M[ix] = M[ox] = M[G1] = M[V1] = M[za] = M[J1] = M[K1] = M[X1] = M[Y1] = M[sx] = M[ax] = M[lx] = M[ux] = !0, M[W1] = M[ja] = M[Q1] = !1;

function Rn(e, t, n, r, i, o) {
    var s, a = t & N1,
        l = t & D1,
        u = t & F1;
    if (n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0) return s;
    if (!$1(e)) return e;
    var c = A1(e);
    if (c) {
        if (s = E1(e), !a) return x1(e, s)
    } else {
        var d = z1(e),
            m = d == ja || d == q1;
        if (C1(e)) return w1(e, a);
        if (d == za || d == Oa || m && !i) {
            if (s = l || m ? {} : R1(e), !a) return l ? S1(e, v1(s, e)) : k1(e, y1(s, e))
        } else {
            if (!M[d]) return i ? e : {};
            s = P1(e, d, a)
        }
    }
    o || (o = new g1);
    var g = o.get(e);
    if (g) return g;
    o.set(e, s), I1(e) ? e.forEach(function(x) {
        s.add(Rn(x, t, n, x, e, o))
    }) : T1(e) && e.forEach(function(x, S) {
        s.set(S, Rn(x, t, n, S, e, o))
    });
    var b = u ? l ? j1 : O1 : l ? B1 : L1,
        w = c ? void 0 : b(e);
    return b1(w || e, function(x, S) {
        w && (S = x, x = e[S]), _1(s, S, Rn(x, t, n, S, e, o))
    }), s
}
var cx = Rn,
    dx = te,
    hx = At,
    px = "[object Symbol]";

function fx(e) {
    return typeof e == "symbol" || hx(e) && dx(e) == px
}
var ti = fx,
    mx = Et,
    gx = ti,
    bx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    _x = /^\w*$/;

function yx(e, t) {
    if (mx(e)) return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || gx(e) ? !0 : _x.test(e) || !bx.test(e) || t != null && e in Object(t)
}
var vx = yx,
    Ea = ir,
    wx = "Expected a function";

function ei(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(wx);
    var n = function() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o, s
    };
    return n.cache = new(ei.Cache || Ea), n
}
ei.Cache = Ea;
var xx = ei,
    kx = xx,
    Sx = 500;

function Ox(e) {
    var t = kx(e, function(r) {
            return n.size === Sx && n.clear(), r
        }),
        n = t.cache;
    return t
}
var jx = Ox,
    zx = jx,
    Ex = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Px = /\\(\\)?/g,
    Rx = zx(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ex, function(n, r, i, o) {
            t.push(i ? o.replace(Px, "$1") : r || n)
        }), t
    }),
    Ax = Rx,
    Pa = Zt,
    Cx = Zr,
    Tx = Et,
    $x = ti,
    Ix = 1 / 0,
    Ra = Pa ? Pa.prototype : void 0,
    Aa = Ra ? Ra.toString : void 0;

function Ca(e) {
    if (typeof e == "string") return e;
    if (Tx(e)) return Cx(e, Ca) + "";
    if ($x(e)) return Aa ? Aa.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -Ix ? "-0" : t
}
var Lx = Ca,
    Bx = Lx;

function Nx(e) {
    return e == null ? "" : Bx(e)
}
var Dx = Nx,
    Fx = Et,
    Ux = vx,
    Hx = Ax,
    Mx = Dx;

function Wx(e, t) {
    return Fx(e) ? e : Ux(e, t) ? [e] : Hx(Mx(e))
}
var he = Wx;

function qx(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var Gx = qx,
    Vx = ti,
    Jx = 1 / 0;

function Kx(e) {
    if (typeof e == "string" || Vx(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -Jx ? "-0" : t
}
var An = Kx,
    Xx = he,
    Yx = An;

function Qx(e, t) {
    t = Xx(t, e);
    for (var n = 0, r = t.length; e != null && n < r;) e = e[Yx(t[n++])];
    return n && n == r ? e : void 0
}
var Ta = Qx;

function Zx(e, t, n) {
    var r = -1,
        i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++r < i;) o[r] = e[r + t];
    return o
}
var tk = Zx,
    ek = Ta,
    nk = tk;

function rk(e, t) {
    return t.length < 2 ? e : ek(e, nk(t, 0, -1))
}
var ik = rk,
    ok = he,
    sk = Gx,
    ak = ik,
    lk = An;

function uk(e, t) {
    return t = ok(t, e), e = ak(e, t), e == null || delete e[lk(sk(t))]
}
var ck = uk,
    dk = Ao;

function hk(e) {
    return dk(e) ? void 0 : e
}
var pk = hk,
    $a = Zt,
    fk = cn,
    mk = Et,
    Ia = $a ? $a.isConcatSpreadable : void 0;

function gk(e) {
    return mk(e) || fk(e) || !!(Ia && e && e[Ia])
}
var bk = gk,
    _k = Tr,
    yk = bk;

function La(e, t, n, r, i) {
    var o = -1,
        s = e.length;
    for (n || (n = yk), i || (i = []); ++o < s;) {
        var a = e[o];
        t > 0 && n(a) ? t > 1 ? La(a, t - 1, n, r, i) : _k(i, a) : r || (i[i.length] = a)
    }
    return i
}
var vk = La,
    wk = vk;

function xk(e) {
    var t = e == null ? 0 : e.length;
    return t ? wk(e, 1) : []
}
var kk = xk,
    Sk = kk,
    Ok = Mo,
    jk = qo;

function zk(e) {
    return jk(Ok(e, void 0, Sk), e + "")
}
var Ba = zk,
    Ek = Zr,
    Pk = cx,
    Rk = ck,
    Ak = he,
    Ck = ie,
    Tk = pk,
    $k = Ba,
    Ik = ba,
    Lk = 1,
    Bk = 2,
    Nk = 4,
    Dk = $k(function(e, t) {
        var n = {};
        if (e == null) return n;
        var r = !1;
        t = Ek(t, function(o) {
            return o = Ak(o, e), r || (r = o.length > 1), o
        }), Ck(e, Ik(e), n), r && (n = Pk(n, Lk | Bk | Nk, Tk));
        for (var i = t.length; i--;) Rk(n, t[i]);
        return n
    }),
    Fk = Dk;
const Uk = Lt(Fk);
var Hk = fr,
    Mk = he,
    Wk = gn,
    Na = Rt,
    qk = An;

function Gk(e, t, n, r) {
    if (!Na(e)) return e;
    t = Mk(t, e);
    for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
        var l = qk(t[i]),
            u = n;
        if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
        if (i != s) {
            var c = a[l];
            u = r ? r(c, l, a) : void 0, u === void 0 && (u = Na(c) ? c : Wk(t[i + 1]) ? [] : {})
        }
        Hk(a, l, u), a = a[l]
    }
    return e
}
var Vk = Gk,
    Jk = Ta,
    Kk = Vk,
    Xk = he;

function Yk(e, t, n) {
    for (var r = -1, i = t.length, o = {}; ++r < i;) {
        var s = t[r],
            a = Jk(e, s);
        n(a, s) && Kk(o, Xk(s, e), a)
    }
    return o
}
var Qk = Yk;

function Zk(e, t) {
    return e != null && t in Object(e)
}
var tS = Zk,
    eS = he,
    nS = cn,
    rS = Et,
    iS = gn,
    oS = dr,
    sS = An;

function aS(e, t, n) {
    t = eS(t, e);
    for (var r = -1, i = t.length, o = !1; ++r < i;) {
        var s = sS(t[r]);
        if (!(o = e != null && n(e, s))) break;
        e = e[s]
    }
    return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && oS(i) && iS(s, i) && (rS(e) || nS(e)))
}
var lS = aS,
    uS = tS,
    cS = lS;

function dS(e, t) {
    return e != null && cS(e, t, uS)
}
var hS = dS,
    pS = Qk,
    fS = hS;

function mS(e, t) {
    return pS(e, t, function(n, r) {
        return fS(e, r)
    })
}
var gS = mS,
    bS = gS,
    _S = Ba,
    yS = _S(function(e, t) {
        return e == null ? {} : bS(e, t)
    }),
    vS = yS;
const wS = Lt(vS);

function xS(e, t, n, r) {
    for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
        if (t(e[o], o, e)) return o;
    return -1
}
var kS = xS;

function SS(e) {
    return e !== e
}
var OS = SS;

function jS(e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i;)
        if (e[r] === t) return r;
    return -1
}
var zS = jS,
    ES = kS,
    PS = OS,
    RS = zS;

function AS(e, t, n) {
    return t === t ? RS(e, t, n) : ES(e, PS, n)
}
var CS = AS;

function TS(e, t, n, r) {
    for (var i = n - 1, o = e.length; ++i < o;)
        if (r(e[i], t)) return i;
    return -1
}
var $S = TS,
    IS = Zr,
    LS = CS,
    BS = $S,
    NS = fn,
    DS = lr,
    FS = Array.prototype,
    Da = FS.splice;

function US(e, t, n, r) {
    var i = r ? BS : LS,
        o = -1,
        s = t.length,
        a = e;
    for (e === t && (t = DS(t)), n && (a = IS(e, NS(n))); ++o < s;)
        for (var l = 0, u = t[o], c = n ? n(u) : u;
            (l = i(a, c, l, r)) > -1;) a !== e && Da.call(a, l, 1), Da.call(e, l, 1);
    return e
}
var HS = US,
    MS = HS;

function WS(e, t) {
    return e && e.length && t && t.length ? MS(e, t) : e
}
var qS = WS;
const GS = Lt(qS),
    VS = {
        normal_hover: {
            format: (e, t) => [e, t].map(n => n === "unset" ? "" : n != null ? n : "").filter((n, r, i) => r === 0 || n !== "" && n !== i[0]).join(";") || "unset",
            parse: e => {
                let t = e;
                return typeof e == "boolean" && (t = String(e)), typeof e == "number" && (t = String(e)), typeof e > "u" ? [] : (typeof e == "object" && e.length <= 2 && (t = e.join(";")), typeof t != "string" ? (console.trace(), console.log(typeof t, t), []) : t.split(";").map(n => {
                    if (n) return n === "true" ? !0 : n === "false" ? !1 : isNaN(Number(n)) ? n : Number(n)
                }).map((n, r, i) => r === 0 ? n : n === i[0] ? void 0 : n))
            }
        },
        fourSidesPx: {
            format: (e, t, n, r) => `${e}px ${t}px ${n}px ${r}px`,
            parse: e => {
                const t = /\d+/g;
                return e.match(t)
            }
        },
        position: {
            format: (e, t, n) => `${e}: ${n}${t}`
        }
    },
    ni = {
        get button() {
            const e = {
                general: [],
                styling: [],
                advanced: []
            };
            return Object.entries(ot.button).map(t => {
                I(e, {
                    [t[0]]: Object.entries(t[1]).map(([n]) => n)
                })
            }), e
        },
        get menu_button() {
            const e = {
                general: [],
                styling: [],
                advanced: []
            };
            return Object.entries(ot.menu_button).map(t => {
                I(e, {
                    [t[0]]: Object.entries(t[1]).map(([n]) => n)
                })
            }), e
        },
        get group() {
            const e = {
                general: [],
                styling: [],
                advanced: []
            };
            return Object.entries(ot.group).map(t => {
                I(e, {
                    [t[0]]: Object.entries(t[1]).map(([n]) => n)
                })
            }), e
        },
        get allSettings() {
            const e = {
                general: [],
                styling: [],
                advanced: []
            };
            return Object.entries(I({}, ot.button, ot.menu_button, ot.group)).map(t => {
                I(e, {
                    [t[0]]: Object.entries(t[1]).map(([n]) => n)
                })
            }), e
        },
        get stylingHover() {
            return Object.entries(I({}, ot.button.styling, ot.group.styling)).filter(e => Array.isArray(e[1])).map(([e]) => e)
        }
    };

function ri({
    data: e = {},
    model: t = "button",
    menu_style: n = "default",
    position: r = {},
    group: i = !1,
    buttonCount: o
}) {
    const s = k(ae.menuStyle, n, k(ae.menuStyle, "default", {})),
        a = I({}, I({}, ae[t]), k(s, t, {}), wS(i, GS(ni.allSettings.styling, t === "menu_button" && ni.menu_button.styling))),
        l = {
            horizontal: Fa(r.horizontal || a.horizontal),
            vertical: Fa(r.vertical || a.vertical)
        };
    s.extraJSS && (s.extraJSS.setPosition = l);
    const u = Uk(k(s, "extraJSS", {}), ["position", "setPosition"]),
        c = e;
    if (ni.stylingHover.forEach(d => {
            if (Array.isArray(c[d])) return;
            const m = VS.normal_hover.parse(c[d]);
            if (!m) {
                c[d] = [void 0, void 0];
                return
            }
            if (m.length === 1) {
                c[d] = [m[0], m[0]];
                return
            }
            c[d] = m
        }), c.horizontal = l.horizontal, c.vertical = l.vertical, typeof c.id != "string" && (c.id = _n()), t === "menu_button" && (o.mobile === 0 && (c.show_mobile = !1), o.desktop === 0 && (c.show_desktop = !1)), k(c, "label_inside", a.label_inside) && (c.label || (c.label = t === "menu_button" ? "Menu button's label" : c.name + "'s label"), t !== "group")) {
        const d = I([], a.button_padding, c.button_padding);
        c.button_padding = d.map(m => m === "0px" ? "0px 20px 0px 20px" : m)
    }
    return {
        parsedData: I({}, a, c),
        extraJSS: u
    }
}

function Fa(e) {
    return typeof e == "string" && (e = e.match(/(.+): ?(.+)/).splice(1, 2), e[1] = e[1].replace("undefined", "%"), isNaN(parseFloat(e[1])) && (e[1] = "5%")), e
}
class JS extends _t {
    constructor() {
        super(...arguments), Pi(this, "storageKey", "open_and_close_attention")
    }
    generate(t) {
        const n = t.data.id;
        setTimeout(() => {
            t.state.isOpened() || !Yo(this.storageKey, n) || (t.state.open(!1, !1), setTimeout(() => {
                t.state.isOpened() && t.state.close(!1, !1)
            }, 1e3))
        }, 500)
    }
}
const KS = "_backdrop_ygqhd_1",
    XS = "_desktop_ygqhd_11",
    YS = "_mobile_ygqhd_18",
    Me = {
        backdrop: KS,
        desktop: XS,
        mobile: YS
    };
class QS extends gt {
    constructor() {
        super(), super.name = "show backdrop when opened", this.backdropElement = !1, this.widgetBackdropOpened = 0, this.init()
    }
    init() {
        const t = document.createElement("div");
        t.id = "buttonizer-backdrop", t.className = Me.backdrop, t.style.transition = "visibility 0s linear 150ms, opacity 150ms", t.style.opacity = 0, t.style.visibility = "hidden", this.el = t, document.body.appendChild(this.el), window.addEventListener("buttonizer_group_opened", n => {
            this.notify(n)
        })
    }
    onSubscribe() {
        this.notify()
    }
    async notify(t = {
        detail: {
            open: !0
        }
    }) {
        let n = !1,
            r = !1;
        this.widgetBackdropOpened > 0 && (n = !0, r = !0);
        const i = t.detail.group_id,
            o = t.detail.open;
        await Promise.all(Object.values(this.subscriptions).map(async s => {
            const a = i === s.data.id;
            a && o === !1 || (s && s.state && s.state.isOpened() || a && o) && (!n && s.data.is_menu_desktop && (n = !0), !r && s.data.is_menu_mobile && (r = !0))
        })), this.show(n, r)
    }
    show(t, n) {
        t ? this.el.classList.add(Me.desktop) : this.el.classList.remove(Me.desktop), n ? this.el.classList.add(Me.mobile) : this.el.classList.remove(Me.mobile)
    }
    toggleBackdrop(t) {
        this.widgetBackdropOpened = t ? this.widgetBackdropOpened + 1 : this.widgetBackdropOpened - 1, this.notify()
    }
}
const Ua = new QS;
class ZS extends gt {
    constructor() {
        super(), super.name = "entrance animation", this.animated = [], this.registeredHook = !1, this.awaitLoading = [], this.alreadyLoaded = !1
    }
    onSubscribe(t) {
        this.registeredHook || (this.registeredHook = !0, this.registerHook());
        const n = t.data.id;
        this.animated.indexOf(n) >= 0 || (this.animated.push(n), t.element.classList.add(t.stylesheet.classes.hiddenEntrance), this.awaitLoading.push(t), this.alreadyLoaded && setTimeout(() => this.animate(t), 150))
    }
    registerHook() {
        B().addHook("buttonizer_loaded", () => {
            this.awaitLoading.map(t => this.animate(t)), this.alreadyLoaded = !0
        })
    }
    animate(t) {
        setTimeout(() => t.element.classList.remove(t.stylesheet.classes.hiddenEntrance), 1)
    }
    resetEntranceAnimated(t) {
        const n = this.animated.indexOf(t);
        return n >= 0 ? (this.animated.splice(n, 1), !0) : !1
    }
}
const ii = new ZS;
class tO extends gt {
    constructor() {
        super(), super.name = "hide on formilla popup", this.opened = !1, this.currentFormillaVerticalPosition = "bottom", this.currentFormillaHorizontalPosition = "right"
    }
    getIsOpened() {
        return this.opened
    }
    setCurrentFormillaPosition(t) {
        let n = t.split("-");
        this.currentFormillaVerticalPosition = n[0], this.currentFormillaHorizontalPosition = n[1]
    }
    notify(t) {
        this.opened = t === "opened", this.subscriptions.map(n => {
            if (n.data.vertical[0] !== this.currentFormillaVerticalPosition || n.data.horizontal[0] !== this.currentFormillaHorizontalPosition) {
                this.reshowHiddenGroupCheck(n);
                return
            }
            t === "opened" && !n.element.classList.contains(n.stylesheet.classes.hiddenFormilla) ? n.element.classList.add(n.stylesheet.classes.hiddenFormilla) : t === "closed" && n.element.classList.remove(n.stylesheet.classes.hiddenFormilla)
        })
    }
    reshowHiddenGroupCheck(t) {
        t.element.classList.contains(t.stylesheet.classes.hiddenFormilla) && t.element.classList.remove(t.stylesheet.classes.hiddenFormilla)
    }
}
const pe = new tO;

function Ha(e, t) {
    return (t == null ? void 0 : t.type) === "formilla_chat" && !E() && (Ae() === "phone" && t.show_mobile === !0 && e.show_mobile === !0 || Ae() !== "phone" && t.show_desktop === !0 && e.show_desktop === !0)
}

function Ma({
    data: e,
    buttons: t,
    menu_button: n = {}
} = {}) {
    var S, A;
    const r = [],
        i = [],
        o = [],
        s = [],
        a = O0(e);
    let l = !1;
    const {
        parsedData: u,
        extraJSS: c
    } = ri({
        data: e,
        model: "group",
        menu_style: e.menu_style,
        position: {
            horizontal: e.horizontal,
            vertical: e.vertical
        }
    });
    if (t = t.filter(C => {
            var L, V;
            return !(C != null && C.selected_page_rule) && !(C != null && C.selected_schedule) ? (Ha(e, C) && (l = !0), !0) : E() && bt.getButtonId() === C.id ? !0 : C != null && C.selected_page_rule && !gr(C.selected_page_rule, (L = C.show_on_rule_trigger) != null ? L : !0) || C != null && C.selected_schedule && !_r(C.selected_schedule, (V = C.show_on_schedule_trigger) != null ? V : !0) ? (E() && bt.addNonRenderedElements(e == null ? void 0 : e.id, C == null ? void 0 : C.id), !1) : (Ha(e, C) && (l = !0), !0)
        }), (!E() || E() && bt.getGroupId() !== e.id) && (e != null && e.selected_page_rule && !gr(e == null ? void 0 : e.selected_page_rule, (S = e == null ? void 0 : e.show_on_rule_trigger) != null ? S : !0) || e != null && e.selected_schedule && !_r(e.selected_schedule, (A = e.show_on_schedule_trigger) != null ? A : !0))) return E() && bt.addNonRenderedElements(e == null ? void 0 : e.id), ii.resetEntranceAnimated(e == null ? void 0 : e.id), null;
    l && B().setHasChat(!0), a.update(c);
    let d, m;
    d = Object.values(t).filter(C => C.show_mobile === !0), m = Object.values(t).filter(C => C.show_desktop === !0), d.length === 1 && (typeof d[0].id != "string" && (d[0].id = _n()), i.push(new vn({
        button: d[0].id,
        visibility: "mobile",
        hideMenu: m.length < 1
    }))), m.length === 1 && (typeof m[0].id != "string" && (m[0].id = _n()), i.push(new vn({
        button: m[0].id,
        visibility: "desktop",
        hideMenu: d.length < 1
    }))), u.label_same_width === !0 && o.push(new T0), n = Wa({
        group: u,
        menu_style: e.menu_style,
        data: { ...n,
            id: "menu-button"
        },
        pos: {
            horizontal: u.horizontal,
            vertical: u.vertical
        },
        model: "menu_button",
        buttonCount: {
            mobile: d.length,
            desktop: m.length
        }
    });
    const g = n[Object.keys(n)[0]].data.show_mobile && d.length > 1,
        b = n[Object.keys(n)[0]].data.show_desktop && m.length > 1;
    r.push(new N0({
        menu_button: n[Object.keys(n)[0]]
    })), r.push(pe), n[Object.keys(n)[0]].data.open_and_close_attention && i.push(new JS), n[Object.keys(n)[0]].data.close_on_click_outside && t.length > 1 && (b || g) && (n[Object.keys(n)[0]].data.open_on_mouseover === !1 || n[Object.keys(n)[0]].data.close_on_mouseleave === !1 && n[Object.keys(n)[0]].data.open_on_mouseover === !0) && r.push(Ko), n[Object.keys(n)[0]].data.close_on_click_inside && n[Object.keys(n)[0]].data.open_on_mouseover === !1 && t.length > 1 && (b || g) && r.push(Wg), n[Object.keys(n)[0]].data.backdrop_when_opened && (b || g) && r.push(Ua), u.exit_intent && r.push(hb), u.advanced_scroll && r.push(fb), u.advanced_timeout && r.push(bb), ri.entrance_animation !== "no_animation" && r.push(ii), k(n[Object.keys(n)[0]].data, "open_on_mouseover", !1) && r.push(Gg), (b || g) && Object.values(t).length > 1 && Object.keys(ha).includes(n[Object.keys(n)[0]].data.menu_opening_animation) && (u.label_inside && n[Object.keys(n)[0]].data.menu_opening_animation === "corner-circle" && (n[Object.keys(n)[0]].data.menu_opening_animation = "default"), i.push(new ha[n[Object.keys(n)[0]].data.menu_opening_animation]({
        data: u,
        buttons: t
    }))), u.menu_animation !== "none" && i.push(new C0({
        data: u,
        mobileSingleButton: d,
        desktopSingleButton: m
    })), E() && (i.push(new L0({
        horizontal: u.horizontal,
        vertical: u.vertical,
        mobileSingleButton: d.length === 1 ? d[0].id : !1,
        desktopSingleButton: m.length === 1 ? m[0].id : !1
    })), k(Buttonizer, "container.newestGroupId", !1) === u.id && i.push(new I0), r.push(bt)), t = t.reduce((C, L) => ({ ...C,
        ...Wa({
            group: u,
            menu_style: e.menu_style,
            data: { ...L,
                is_menu_mobile: g,
                is_menu_desktop: b
            },
            pos: {
                horizontal: u.horizontal,
                vertical: u.vertical
            }
        })
    }), {});
    const w = {
        data: { ...u,
            is_menu_mobile: g,
            is_menu_desktop: b
        },
        stylesheet: a,
        extensions: r,
        generators: i,
        renderExtender: o,
        actions: s,
        buttons: t,
        menu_button: n
    };
    let x = new Ug(w);
    return {
        [u.id]: x
    }
}

function Wa({
    data: e,
    menu_style: t,
    generators: n = [],
    pos: r,
    model: i = "button",
    group: o,
    buttonCount: s
} = {}) {
    const {
        parsedData: a,
        extraJSS: l
    } = ri({
        data: e,
        model: i,
        menu_style: t,
        position: r,
        group: o,
        buttonCount: s
    }), u = [], c = [], d = S0();
    d.update(l);
    const m = {
        groupName: k(o, "name", null),
        groupId: k(o, "id", null),
        data: { ...a,
            ...r
        },
        stylesheet: d,
        extensions: u,
        generators: n,
        renderExtender: c
    };
    a.label_same_height === !0 && a.label_inside === !1 && m.renderExtender.push(new Xo), a.label_inside === !0 && m.renderExtender.push(new $0), a.icon_type !== "off" && (!Ws(a.icon, [""]) && a.icon_type === "icon" ? m.icon = new es({
        stylesheet: d,
        data: {
            icon: a.icon,
            icon_color: a.icon_color,
            icon_size: a.icon_size,
            model: i
        }
    }) : !Ws(a.icon_image, [""]) && a.icon_type === "image" && (m.icon = new _b({
        stylesheet: d,
        data: {
            icon_image: a.icon_image,
            icon_image_size: a.icon_image_size,
            icon_image_border_radius: a.icon_image_border_radius
        }
    }), a.icon !== "unset" && !m.icon && (m.icon = new es({
        stylesheet: d,
        data: {
            icon: a.icon,
            icon_color: a.icon_color,
            icon_size: a.icon_size
        }
    })))), a.label && (m.label = new $b({
        stylesheet: d,
        data: { ...a,
            ...r
        }
    }));
    let g = new A_(m);
    return {
        [a.id]: g
    }
}
var qa = Date.now(),
    oi = "fnValues" + qa,
    si = "fnStyle" + ++qa,
    eO = function() {
        return {
            onCreateRule: function(e, t, n) {
                if (typeof t != "function") return null;
                var r = En(e, {}, n);
                return r[si] = t, r
            },
            onProcessStyle: function(e, t) {
                if (oi in t || si in t) return e;
                var n = {};
                for (var r in e) {
                    var i = e[r];
                    typeof i == "function" && (delete e[r], n[r] = i)
                }
                return t[oi] = n, e
            },
            onUpdate: function(e, t, n, r) {
                var i = t,
                    o = i[si];
                o && (i.style = o(e) || {});
                var s = i[oi];
                if (s)
                    for (var a in s) i.prop(a, s[a](e), r)
            }
        }
    };

function nO(e) {
    var t, n = e.Symbol;
    return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
}
var fe;
typeof self < "u" ? fe = self : typeof window < "u" ? fe = window : typeof global < "u" ? fe = global : typeof module < "u" ? fe = module : fe = Function("return this")();
var Ga = nO(fe),
    Va = function(e) {
        return e && e[Ga] && e === e[Ga]()
    },
    rO = function(e) {
        return {
            onCreateRule: function(t, n, r) {
                if (!Va(n)) return null;
                var i = n,
                    o = En(t, {}, r);
                return i.subscribe(function(s) {
                    for (var a in s) o.prop(a, s[a], e)
                }), o
            },
            onProcessRule: function(t) {
                if (!(t && t.type !== "style")) {
                    var n = t,
                        r = n.style,
                        i = function(a) {
                            var l = r[a];
                            if (!Va(l)) return "continue";
                            delete r[a], l.subscribe({
                                next: function(u) {
                                    n.prop(a, u, e)
                                }
                            })
                        };
                    for (var o in r) var s = i(o)
                }
            }
        }
    },
    iO = /;\n/,
    oO = function(e) {
        for (var t = {}, n = e.split(iO), r = 0; r < n.length; r++) {
            var i = (n[r] || "").trim();
            if (i) {
                var o = i.indexOf(":");
                if (o !== -1) {
                    var s = i.substr(0, o).trim(),
                        a = i.substr(o + 1).trim();
                    t[s] = a
                }
            }
        }
        return t
    },
    sO = function(e) {
        typeof e.style == "string" && (e.style = oO(e.style))
    };

function aO() {
    return {
        onProcessRule: sO
    }
}
var Nt = "@global",
    ai = "@global ",
    lO = function() {
        function e(n, r, i) {
            this.type = "global", this.at = Nt, this.isProcessed = !1, this.key = n, this.options = i, this.rules = new Pn(Q({}, i, {
                parent: this
            }));
            for (var o in r) this.rules.add(o, r[o]);
            this.rules.process()
        }
        var t = e.prototype;
        return t.getRule = function(n) {
            return this.rules.get(n)
        }, t.addRule = function(n, r, i) {
            var o = this.rules.add(n, r, i);
            return o && this.options.jss.plugins.onProcessRule(o), o
        }, t.replaceRule = function(n, r, i) {
            var o = this.rules.replace(n, r, i);
            return o && this.options.jss.plugins.onProcessRule(o), o
        }, t.indexOf = function(n) {
            return this.rules.indexOf(n)
        }, t.toString = function(n) {
            return this.rules.toString(n)
        }, e
    }(),
    uO = function() {
        function e(n, r, i) {
            this.type = "global", this.at = Nt, this.isProcessed = !1, this.key = n, this.options = i;
            var o = n.substr(ai.length);
            this.rule = i.jss.createRule(o, r, Q({}, i, {
                parent: this
            }))
        }
        var t = e.prototype;
        return t.toString = function(n) {
            return this.rule ? this.rule.toString(n) : ""
        }, e
    }(),
    cO = /\s*,\s*/g;

function Ja(e, t) {
    for (var n = e.split(cO), r = "", i = 0; i < n.length; i++) r += t + " " + n[i].trim(), n[i + 1] && (r += ", ");
    return r
}

function dO(e, t) {
    var n = e.options,
        r = e.style,
        i = r ? r[Nt] : null;
    if (i) {
        for (var o in i) t.addRule(o, i[o], Q({}, n, {
            selector: Ja(o, e.selector)
        }));
        delete r[Nt]
    }
}

function hO(e, t) {
    var n = e.options,
        r = e.style;
    for (var i in r)
        if (!(i[0] !== "@" || i.substr(0, Nt.length) !== Nt)) {
            var o = Ja(i.substr(Nt.length), e.selector);
            t.addRule(o, r[i], Q({}, n, {
                selector: o
            })), delete r[i]
        }
}

function pO() {
    function e(n, r, i) {
        if (!n) return null;
        if (n === Nt) return new lO(n, r, i);
        if (n[0] === "@" && n.substr(0, ai.length) === ai) return new uO(n, r, i);
        var o = i.parent;
        return o && (o.type === "global" || o.options.parent && o.options.parent.type === "global") && (i.scoped = !1), !i.selector && i.scoped === !1 && (i.selector = n), null
    }

    function t(n, r) {
        n.type !== "style" || !r || (dO(n, r), hO(n, r))
    }
    return {
        onCreateRule: e,
        onProcessRule: t
    }
}
var Cn = function(e) {
        return e && typeof e == "object" && !Array.isArray(e)
    },
    li = "extendCurrValue" + Date.now();

function fO(e, t, n, r) {
    var i = typeof e.extend;
    if (i === "string") {
        if (!n) return;
        var o = n.getRule(e.extend);
        if (!o || o === t) return;
        var s = o.options.parent;
        if (s) {
            var a = s.rules.raw[e.extend];
            Vt(a, t, n, r)
        }
        return
    }
    if (Array.isArray(e.extend)) {
        for (var l = 0; l < e.extend.length; l++) {
            var u = e.extend[l],
                c = typeof u == "string" ? Q({}, e, {
                    extend: u
                }) : e.extend[l];
            Vt(c, t, n, r)
        }
        return
    }
    for (var d in e.extend) {
        if (d === "extend") {
            Vt(e.extend.extend, t, n, r);
            continue
        }
        if (Cn(e.extend[d])) {
            d in r || (r[d] = {}), Vt(e.extend[d], t, n, r[d]);
            continue
        }
        r[d] = e.extend[d]
    }
}

function mO(e, t, n, r) {
    for (var i in e)
        if (i !== "extend") {
            if (Cn(r[i]) && Cn(e[i])) {
                Vt(e[i], t, n, r[i]);
                continue
            }
            if (Cn(e[i])) {
                r[i] = Vt(e[i], t, n);
                continue
            }
            r[i] = e[i]
        }
}

function Vt(e, t, n, r) {
    return r === void 0 && (r = {}), fO(e, t, n, r), mO(e, t, n, r), r
}

function gO() {
    function e(n, r, i) {
        return "extend" in n ? Vt(n, r, i) : n
    }

    function t(n, r, i) {
        if (r !== "extend") return n;
        if (n == null || n === !1) {
            for (var o in i[li]) i.prop(o, null);
            return i[li] = null, null
        }
        if (typeof n == "object") {
            for (var s in n) i.prop(s, n[s]);
            i[li] = n
        }
        return null
    }
    return {
        onProcessStyle: e,
        onChangeValue: t
    }
}
var Ka = /\s*,\s*/g,
    bO = /&/g,
    _O = /\$([\w-]+)/g;

function yO() {
    function e(i, o) {
        return function(s, a) {
            var l = i.getRule(a) || o && o.getRule(a);
            return l ? l.selector : a
        }
    }

    function t(i, o) {
        for (var s = o.split(Ka), a = i.split(Ka), l = "", u = 0; u < s.length; u++)
            for (var c = s[u], d = 0; d < a.length; d++) {
                var m = a[d];
                l && (l += ", "), l += m.indexOf("&") !== -1 ? m.replace(bO, c) : c + " " + m
            }
        return l
    }

    function n(i, o, s) {
        if (s) return Q({}, s, {
            index: s.index + 1
        });
        var a = i.options.nestingLevel;
        a = a === void 0 ? 1 : a + 1;
        var l = Q({}, i.options, {
            nestingLevel: a,
            index: o.indexOf(i) + 1
        });
        return delete l.name, l
    }

    function r(i, o, s) {
        if (o.type !== "style") return i;
        var a = o,
            l = a.options.parent,
            u, c;
        for (var d in i) {
            var m = d.indexOf("&") !== -1,
                g = d[0] === "@";
            if (!(!m && !g)) {
                if (u = n(a, l, u), m) {
                    var b = t(d, a.selector);
                    c || (c = e(l, s)), b = b.replace(_O, c);
                    var w = a.key + "-" + d;
                    "replaceRule" in l ? l.replaceRule(w, i[d], Q({}, u, {
                        selector: b
                    })) : l.addRule(w, i[d], Q({}, u, {
                        selector: b
                    }))
                } else g && l.addRule(d, {}, u).addRule(a.key, i[d], {
                    selector: a.selector
                });
                delete i[d]
            }
        }
        return i
    }
    return {
        onProcessStyle: r
    }
}

function ui(e, t) {
    if (!t) return !0;
    if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++) {
            var r = ui(e, t[n]);
            if (!r) return !1
        }
        return !0
    }
    if (t.indexOf(" ") > -1) return ui(e, t.split(" "));
    var i = e.options.parent;
    if (t[0] === "$") {
        var o = i.getRule(t.substr(1));
        return !o || o === e ? !1 : (i.classes[e.key] += " " + i.classes[o.key], !0)
    }
    return i.classes[e.key] += " " + t, !0
}

function vO() {
    function e(t, n) {
        return "composes" in t && (ui(n, t.composes), delete t.composes), t
    }
    return {
        onProcessStyle: e
    }
}
var wO = /[A-Z]/g,
    xO = /^ms-/,
    ci = {};

function kO(e) {
    return "-" + e.toLowerCase()
}

function Xa(e) {
    if (ci.hasOwnProperty(e)) return ci[e];
    var t = e.replace(wO, kO);
    return ci[e] = xO.test(t) ? "-" + t : t
}

function Tn(e) {
    var t = {};
    for (var n in e) {
        var r = n.indexOf("--") === 0 ? n : Xa(n);
        t[r] = e[n]
    }
    return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(Tn) : t.fallbacks = Tn(e.fallbacks)), t
}

function SO() {
    function e(n) {
        if (Array.isArray(n)) {
            for (var r = 0; r < n.length; r++) n[r] = Tn(n[r]);
            return n
        }
        return Tn(n)
    }

    function t(n, r, i) {
        if (r.indexOf("--") === 0) return n;
        var o = Xa(r);
        return r === o ? n : (i.prop(o, n), null)
    }
    return {
        onProcessStyle: e,
        onChangeValue: t
    }
}
var _ = Qr && CSS ? CSS.px : "px",
    $n = Qr && CSS ? CSS.ms : "ms",
    me = Qr && CSS ? CSS.percent : "%",
    OO = {
        "animation-delay": $n,
        "animation-duration": $n,
        "background-position": _,
        "background-position-x": _,
        "background-position-y": _,
        "background-size": _,
        border: _,
        "border-bottom": _,
        "border-bottom-left-radius": _,
        "border-bottom-right-radius": _,
        "border-bottom-width": _,
        "border-left": _,
        "border-left-width": _,
        "border-radius": _,
        "border-right": _,
        "border-right-width": _,
        "border-top": _,
        "border-top-left-radius": _,
        "border-top-right-radius": _,
        "border-top-width": _,
        "border-width": _,
        "border-block": _,
        "border-block-end": _,
        "border-block-end-width": _,
        "border-block-start": _,
        "border-block-start-width": _,
        "border-block-width": _,
        "border-inline": _,
        "border-inline-end": _,
        "border-inline-end-width": _,
        "border-inline-start": _,
        "border-inline-start-width": _,
        "border-inline-width": _,
        "border-start-start-radius": _,
        "border-start-end-radius": _,
        "border-end-start-radius": _,
        "border-end-end-radius": _,
        margin: _,
        "margin-bottom": _,
        "margin-left": _,
        "margin-right": _,
        "margin-top": _,
        "margin-block": _,
        "margin-block-end": _,
        "margin-block-start": _,
        "margin-inline": _,
        "margin-inline-end": _,
        "margin-inline-start": _,
        padding: _,
        "padding-bottom": _,
        "padding-left": _,
        "padding-right": _,
        "padding-top": _,
        "padding-block": _,
        "padding-block-end": _,
        "padding-block-start": _,
        "padding-inline": _,
        "padding-inline-end": _,
        "padding-inline-start": _,
        "mask-position-x": _,
        "mask-position-y": _,
        "mask-size": _,
        height: _,
        width: _,
        "min-height": _,
        "max-height": _,
        "min-width": _,
        "max-width": _,
        bottom: _,
        left: _,
        top: _,
        right: _,
        inset: _,
        "inset-block": _,
        "inset-block-end": _,
        "inset-block-start": _,
        "inset-inline": _,
        "inset-inline-end": _,
        "inset-inline-start": _,
        "box-shadow": _,
        "text-shadow": _,
        "column-gap": _,
        "column-rule": _,
        "column-rule-width": _,
        "column-width": _,
        "font-size": _,
        "font-size-delta": _,
        "letter-spacing": _,
        "text-decoration-thickness": _,
        "text-indent": _,
        "text-stroke": _,
        "text-stroke-width": _,
        "word-spacing": _,
        motion: _,
        "motion-offset": _,
        outline: _,
        "outline-offset": _,
        "outline-width": _,
        perspective: _,
        "perspective-origin-x": me,
        "perspective-origin-y": me,
        "transform-origin": me,
        "transform-origin-x": me,
        "transform-origin-y": me,
        "transform-origin-z": me,
        "transition-delay": $n,
        "transition-duration": $n,
        "vertical-align": _,
        "flex-basis": _,
        "shape-margin": _,
        size: _,
        gap: _,
        grid: _,
        "grid-gap": _,
        "row-gap": _,
        "grid-row-gap": _,
        "grid-column-gap": _,
        "grid-template-rows": _,
        "grid-template-columns": _,
        "grid-auto-rows": _,
        "grid-auto-columns": _,
        "box-shadow-x": _,
        "box-shadow-y": _,
        "box-shadow-blur": _,
        "box-shadow-spread": _,
        "font-line-height": _,
        "text-shadow-x": _,
        "text-shadow-y": _,
        "text-shadow-blur": _
    };

function Ya(e) {
    var t = /(-[a-z])/g,
        n = function(o) {
            return o[1].toUpperCase()
        },
        r = {};
    for (var i in e) r[i] = e[i], r[i.replace(t, n)] = e[i];
    return r
}
var jO = Ya(OO);

function We(e, t, n) {
    if (t == null) return t;
    if (Array.isArray(t))
        for (var r = 0; r < t.length; r++) t[r] = We(e, t[r], n);
    else if (typeof t == "object")
        if (e === "fallbacks")
            for (var i in t) t[i] = We(i, t[i], n);
        else
            for (var o in t) t[o] = We(e + "-" + o, t[o], n);
    else if (typeof t == "number" && isNaN(t) === !1) {
        var s = n[e] || jO[e];
        return s && !(t === 0 && s === _) ? typeof s == "function" ? s(t).toString() : "" + t + s : t.toString()
    }
    return t
}

function zO(e) {
    e === void 0 && (e = {});
    var t = Ya(e);

    function n(i, o) {
        if (o.type !== "style") return i;
        for (var s in i) i[s] = We(s, i[s], t);
        return i
    }

    function r(i, o) {
        return We(o, i, t)
    }
    return {
        onProcessStyle: n,
        onChangeValue: r
    }
}
var EO = {
        "background-size": !0,
        "background-position": !0,
        border: !0,
        "border-bottom": !0,
        "border-left": !0,
        "border-top": !0,
        "border-right": !0,
        "border-radius": !0,
        "border-image": !0,
        "border-width": !0,
        "border-style": !0,
        "border-color": !0,
        "box-shadow": !0,
        flex: !0,
        margin: !0,
        padding: !0,
        outline: !0,
        "transform-origin": !0,
        transform: !0,
        transition: !0
    },
    PO = {
        position: !0,
        size: !0
    },
    In = {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        background: {
            attachment: null,
            color: null,
            image: null,
            position: null,
            repeat: null
        },
        border: {
            width: null,
            style: null,
            color: null
        },
        "border-top": {
            width: null,
            style: null,
            color: null
        },
        "border-right": {
            width: null,
            style: null,
            color: null
        },
        "border-bottom": {
            width: null,
            style: null,
            color: null
        },
        "border-left": {
            width: null,
            style: null,
            color: null
        },
        outline: {
            width: null,
            style: null,
            color: null
        },
        "list-style": {
            type: null,
            position: null,
            image: null
        },
        transition: {
            property: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null
        },
        animation: {
            name: null,
            duration: null,
            "timing-function": null,
            timingFunction: null,
            delay: null,
            "iteration-count": null,
            iterationCount: null,
            direction: null,
            "fill-mode": null,
            fillMode: null,
            "play-state": null,
            playState: null
        },
        "box-shadow": {
            x: 0,
            y: 0,
            blur: 0,
            spread: 0,
            color: null,
            inset: null
        },
        "text-shadow": {
            x: 0,
            y: 0,
            blur: null,
            color: null
        }
    },
    di = {
        border: {
            radius: "border-radius",
            image: "border-image",
            width: "border-width",
            style: "border-style",
            color: "border-color"
        },
        "border-bottom": {
            width: "border-bottom-width",
            style: "border-bottom-style",
            color: "border-bottom-color"
        },
        "border-top": {
            width: "border-top-width",
            style: "border-top-style",
            color: "border-top-color"
        },
        "border-left": {
            width: "border-left-width",
            style: "border-left-style",
            color: "border-left-color"
        },
        "border-right": {
            width: "border-right-width",
            style: "border-right-style",
            color: "border-right-color"
        },
        background: {
            size: "background-size",
            image: "background-image"
        },
        font: {
            style: "font-style",
            variant: "font-variant",
            weight: "font-weight",
            stretch: "font-stretch",
            size: "font-size",
            family: "font-family",
            lineHeight: "line-height",
            "line-height": "line-height"
        },
        flex: {
            grow: "flex-grow",
            basis: "flex-basis",
            direction: "flex-direction",
            wrap: "flex-wrap",
            flow: "flex-flow",
            shrink: "flex-shrink"
        },
        align: {
            self: "align-self",
            items: "align-items",
            content: "align-content"
        },
        grid: {
            "template-columns": "grid-template-columns",
            templateColumns: "grid-template-columns",
            "template-rows": "grid-template-rows",
            templateRows: "grid-template-rows",
            "template-areas": "grid-template-areas",
            templateAreas: "grid-template-areas",
            template: "grid-template",
            "auto-columns": "grid-auto-columns",
            autoColumns: "grid-auto-columns",
            "auto-rows": "grid-auto-rows",
            autoRows: "grid-auto-rows",
            "auto-flow": "grid-auto-flow",
            autoFlow: "grid-auto-flow",
            row: "grid-row",
            column: "grid-column",
            "row-start": "grid-row-start",
            rowStart: "grid-row-start",
            "row-end": "grid-row-end",
            rowEnd: "grid-row-end",
            "column-start": "grid-column-start",
            columnStart: "grid-column-start",
            "column-end": "grid-column-end",
            columnEnd: "grid-column-end",
            area: "grid-area",
            gap: "grid-gap",
            "row-gap": "grid-row-gap",
            rowGap: "grid-row-gap",
            "column-gap": "grid-column-gap",
            columnGap: "grid-column-gap"
        }
    };

function RO(e, t, n) {
    return e.map(function(r) {
        return Za(r, t, n, !1, !0)
    })
}

function Qa(e, t, n, r) {
    return n[t] == null ? e : e.length === 0 ? [] : Array.isArray(e[0]) ? Qa(e[0], t, n, r) : typeof e[0] == "object" ? RO(e, t, r) : [e]
}

function Za(e, t, n, r, i) {
    if (!(In[t] || di[t])) return [];
    var o = [];
    if (di[t] && (e = AO(e, n, di[t], r)), Object.keys(e).length)
        for (var s in In[t]) {
            if (e[s]) {
                Array.isArray(e[s]) ? o.push(PO[s] === null ? e[s] : e[s].join(" ")) : o.push(e[s]);
                continue
            }
            In[t][s] != null && o.push(In[t][s])
        }
    return !o.length || i ? o : [o]
}

function AO(e, t, n, r) {
    for (var i in n) {
        var o = n[i];
        if (typeof e[i] < "u" && (r || !t.prop(o))) {
            var s, a = qe((s = {}, s[o] = e[i], s), t)[o];
            r ? t.style.fallbacks[o] = a : t.style[o] = a
        }
        delete e[i]
    }
    return e
}

function qe(e, t, n) {
    for (var r in e) {
        var i = e[r];
        if (Array.isArray(i)) {
            if (!Array.isArray(i[0])) {
                if (r === "fallbacks") {
                    for (var o = 0; o < e.fallbacks.length; o++) e.fallbacks[o] = qe(e.fallbacks[o], t, !0);
                    continue
                }
                e[r] = Qa(i, r, EO, t), e[r].length || delete e[r]
            }
        } else if (typeof i == "object") {
            if (r === "fallbacks") {
                e.fallbacks = qe(e.fallbacks, t, !0);
                continue
            }
            e[r] = Za(i, r, t, n), e[r].length || delete e[r]
        } else e[r] === "" && delete e[r]
    }
    return e
}

function CO() {
    function e(t, n) {
        if (!t || n.type !== "style") return t;
        if (Array.isArray(t)) {
            for (var r = 0; r < t.length; r++) t[r] = qe(t[r], n);
            return t
        }
        return qe(t, n)
    }
    return {
        onProcessStyle: e
    }
}

function hi(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function TO(e) {
    if (Array.isArray(e)) return hi(e)
}

function $O(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function IO(e, t) {
    if (e) {
        if (typeof e == "string") return hi(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hi(e, t)
    }
}

function LO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function BO(e) {
    return TO(e) || $O(e) || IO(e) || LO()
}
var Ge = "",
    pi = "",
    tl = "",
    el = "",
    NO = Ne && "ontouchstart" in document.documentElement;
if (Ne) {
    var fi = {
            Moz: "-moz-",
            ms: "-ms-",
            O: "-o-",
            Webkit: "-webkit-"
        },
        DO = document.createElement("p"),
        mi = DO.style,
        FO = "Transform";
    for (var gi in fi)
        if (gi + FO in mi) {
            Ge = gi, pi = fi[gi];
            break
        }
    Ge === "Webkit" && "msHyphens" in mi && (Ge = "ms", pi = fi.ms, el = "edge"), Ge === "Webkit" && "-apple-trailing-word" in mi && (tl = "apple")
}
var $ = {
    js: Ge,
    css: pi,
    vendor: tl,
    browser: el,
    isTouch: NO
};

function UO(e) {
    return e[1] === "-" || $.js === "ms" ? e : "@" + $.css + "keyframes" + e.substr(10)
}
var HO = {
        noPrefill: ["appearance"],
        supportedProperty: function(e) {
            return e !== "appearance" ? !1 : $.js === "ms" ? "-webkit-" + e : $.css + e
        }
    },
    MO = {
        noPrefill: ["color-adjust"],
        supportedProperty: function(e) {
            return e !== "color-adjust" ? !1 : $.js === "Webkit" ? $.css + "print-" + e : e
        }
    },
    WO = /[-\s]+(.)?/g;

function qO(e, t) {
    return t ? t.toUpperCase() : ""
}

function bi(e) {
    return e.replace(WO, qO)
}

function Dt(e) {
    return bi("-" + e)
}
var GO = {
        noPrefill: ["mask"],
        supportedProperty: function(e, t) {
            if (!/^mask/.test(e)) return !1;
            if ($.js === "Webkit") {
                var n = "mask-image";
                if (bi(n) in t) return e;
                if ($.js + Dt(n) in t) return $.css + e
            }
            return e
        }
    },
    VO = {
        noPrefill: ["text-orientation"],
        supportedProperty: function(e) {
            return e !== "text-orientation" ? !1 : $.vendor === "apple" && !$.isTouch ? $.css + e : e
        }
    },
    JO = {
        noPrefill: ["transform"],
        supportedProperty: function(e, t, n) {
            return e !== "transform" ? !1 : n.transform ? e : $.css + e
        }
    },
    KO = {
        noPrefill: ["transition"],
        supportedProperty: function(e, t, n) {
            return e !== "transition" ? !1 : n.transition ? e : $.css + e
        }
    },
    XO = {
        noPrefill: ["writing-mode"],
        supportedProperty: function(e) {
            return e !== "writing-mode" ? !1 : $.js === "Webkit" || $.js === "ms" && $.browser !== "edge" ? $.css + e : e
        }
    },
    YO = {
        noPrefill: ["user-select"],
        supportedProperty: function(e) {
            return e !== "user-select" ? !1 : $.js === "Moz" || $.js === "ms" || $.vendor === "apple" ? $.css + e : e
        }
    },
    QO = {
        supportedProperty: function(e, t) {
            if (!/^break-/.test(e)) return !1;
            if ($.js === "Webkit") {
                var n = "WebkitColumn" + Dt(e);
                return n in t ? $.css + "column-" + e : !1
            }
            if ($.js === "Moz") {
                var r = "page" + Dt(e);
                return r in t ? "page-" + e : !1
            }
            return !1
        }
    },
    ZO = {
        supportedProperty: function(e, t) {
            if (!/^(border|margin|padding)-inline/.test(e)) return !1;
            if ($.js === "Moz") return e;
            var n = e.replace("-inline", "");
            return $.js + Dt(n) in t ? $.css + n : !1
        }
    },
    tj = {
        supportedProperty: function(e, t) {
            return bi(e) in t ? e : !1
        }
    },
    ej = {
        supportedProperty: function(e, t) {
            var n = Dt(e);
            return e[0] === "-" || e[0] === "-" && e[1] === "-" ? e : $.js + n in t ? $.css + e : $.js !== "Webkit" && "Webkit" + n in t ? "-webkit-" + e : !1
        }
    },
    nj = {
        supportedProperty: function(e) {
            return e.substring(0, 11) !== "scroll-snap" ? !1 : $.js === "ms" ? "" + $.css + e : e
        }
    },
    rj = {
        supportedProperty: function(e) {
            return e !== "overscroll-behavior" ? !1 : $.js === "ms" ? $.css + "scroll-chaining" : e
        }
    },
    ij = {
        "flex-grow": "flex-positive",
        "flex-shrink": "flex-negative",
        "flex-basis": "flex-preferred-size",
        "justify-content": "flex-pack",
        order: "flex-order",
        "align-items": "flex-align",
        "align-content": "flex-line-pack"
    },
    oj = {
        supportedProperty: function(e, t) {
            var n = ij[e];
            return n && $.js + Dt(n) in t ? $.css + n : !1
        }
    },
    nl = {
        flex: "box-flex",
        "flex-grow": "box-flex",
        "flex-direction": ["box-orient", "box-direction"],
        order: "box-ordinal-group",
        "align-items": "box-align",
        "flex-flow": ["box-orient", "box-direction"],
        "justify-content": "box-pack"
    },
    sj = Object.keys(nl),
    aj = function(e) {
        return $.css + e
    },
    lj = {
        supportedProperty: function(e, t, n) {
            var r = n.multiple;
            if (sj.indexOf(e) > -1) {
                var i = nl[e];
                if (!Array.isArray(i)) return $.js + Dt(i) in t ? $.css + i : !1;
                if (!r) return !1;
                for (var o = 0; o < i.length; o++)
                    if (!($.js + Dt(i[0]) in t)) return !1;
                return i.map(aj)
            }
            return !1
        }
    },
    rl = [HO, MO, GO, VO, JO, KO, XO, YO, QO, ZO, tj, ej, nj, rj, oj, lj],
    il = rl.filter(function(e) {
        return e.supportedProperty
    }).map(function(e) {
        return e.supportedProperty
    }),
    uj = rl.filter(function(e) {
        return e.noPrefill
    }).reduce(function(e, t) {
        return e.push.apply(e, BO(t.noPrefill)), e
    }, []),
    Ve, Jt = {};
if (Ne) {
    Ve = document.createElement("p");
    var _i = window.getComputedStyle(document.documentElement, "");
    for (var yi in _i) isNaN(yi) || (Jt[_i[yi]] = _i[yi]);
    uj.forEach(function(e) {
        return delete Jt[e]
    })
}

function vi(e, t) {
    if (t === void 0 && (t = {}), !Ve) return e;
    if (Jt[e] != null) return Jt[e];
    (e === "transition" || e === "transform") && (t[e] = e in Ve.style);
    for (var n = 0; n < il.length && (Jt[e] = il[n](e, Ve.style, t), !Jt[e]); n++);
    try {
        Ve.style[e] = ""
    } catch (r) {
        return !1
    }
    return Jt[e]
}
var ge = {},
    cj = {
        transition: 1,
        "transition-property": 1,
        "-webkit-transition": 1,
        "-webkit-transition-property": 1
    },
    dj = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,
    Ft;

function hj(e, t, n) {
    if (t === "var") return "var";
    if (t === "all") return "all";
    if (n === "all") return ", all";
    var r = t ? vi(t) : ", " + vi(n);
    return r || t || n
}
Ne && (Ft = document.createElement("p"));

function ol(e, t) {
    var n = t;
    if (!Ft || e === "content") return t;
    if (typeof n != "string" || !isNaN(parseInt(n, 10))) return n;
    var r = e + n;
    if (ge[r] != null) return ge[r];
    try {
        Ft.style[e] = n
    } catch (i) {
        return ge[r] = !1, !1
    }
    if (cj[e]) n = n.replace(dj, hj);
    else if (Ft.style[e] === "" && (n = $.css + n, n === "-ms-flex" && (Ft.style[e] = "-ms-flexbox"), Ft.style[e] = n, Ft.style[e] === "")) return ge[r] = !1, !1;
    return Ft.style[e] = "", ge[r] = n, ge[r]
}

function pj() {
    function e(i) {
        if (i.type === "keyframes") {
            var o = i;
            o.at = UO(o.at)
        }
    }

    function t(i) {
        for (var o in i) {
            var s = i[o];
            if (o === "fallbacks" && Array.isArray(s)) {
                i[o] = s.map(t);
                continue
            }
            var a = !1,
                l = vi(o);
            l && l !== o && (a = !0);
            var u = !1,
                c = ol(l, Gt(s));
            c && c !== s && (u = !0), (a || u) && (a && delete i[o], i[l || o] = c || s)
        }
        return i
    }

    function n(i, o) {
        return o.type !== "style" ? i : t(i)
    }

    function r(i, o) {
        return ol(o, Gt(i)) || i
    }
    return {
        onProcessRule: e,
        onProcessStyle: n,
        onChangeValue: r
    }
}

function fj() {
    var e = function(t, n) {
        return t.length === n.length ? t > n ? 1 : -1 : t.length - n.length
    };
    return {
        onProcessStyle: function(t, n) {
            if (n.type !== "style") return t;
            for (var r = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++) r[i[o]] = t[i[o]];
            return r
        }
    }
}
var mj = function(e) {
        return e === void 0 && (e = {}), {
            plugins: [eO(), rO(e.observable), aO(), pO(), gO(), yO(), vO(), SO(), zO(e.defaultUnit), CO(), pj(), fj()]
        }
    },
    gj = ":not(#\\20)",
    bj = {
        repeat: 3
    },
    _j = function(e) {
        var t = Object.assign({}, bj, e),
            n = Array(t.repeat + 1).join(gj);

        function r(i, o) {
            var s = i.options.parent;
            o.options.increaseSpecificity === !1 || i.type !== "style" || s && s.type === "keyframes" || (i.selectorText = n + i.selectorText)
        }
        return {
            onProcessRule: r
        }
    };
const yj = Lt(_j);
var be, Y, wi, sl, Je = 0,
    al = [],
    Ln = [],
    ll = T.__b,
    ul = T.__r,
    cl = T.diffed,
    dl = T.__c,
    hl = T.unmount;

function Bn(e, t) {
    T.__h && T.__h(Y, e, Je || t), Je = 0;
    var n = Y.__H || (Y.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: Ln
    }), n.__[e]
}

function pl(e) {
    return Je = 1, fl(yl, e)
}

function fl(e, t, n) {
    var r = Bn(be++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : yl(void 0, t), function(a) {
            var l = r.__N ? r.__N[0] : r.__[0],
                u = r.t(l, a);
            l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}))
        }], r.__c = Y, !Y.u)) {
        var i = function(a, l, u) {
            if (!r.__c.__H) return !0;
            var c = r.__c.__H.__.filter(function(m) {
                return m.__c
            });
            if (c.every(function(m) {
                    return !m.__N
                })) return !o || o.call(this, a, l, u);
            var d = !1;
            return c.forEach(function(m) {
                if (m.__N) {
                    var g = m.__[0];
                    m.__ = m.__N, m.__N = void 0, g !== m.__[0] && (d = !0)
                }
            }), !(!d && r.__c.props === a) && (!o || o.call(this, a, l, u))
        };
        Y.u = !0;
        var o = Y.shouldComponentUpdate,
            s = Y.componentWillUpdate;
        Y.componentWillUpdate = function(a, l, u) {
            if (this.__e) {
                var c = o;
                o = void 0, i(a, l, u), o = c
            }
            s && s.call(this, a, l, u)
        }, Y.shouldComponentUpdate = i
    }
    return r.__N || r.__
}

function ml(e, t) {
    var n = Bn(be++, 3);
    !T.__s && _l(n.__H, t) && (n.__ = e, n.i = t, Y.__H.__h.push(n))
}

function vj(e) {
    return Je = 5, gl(function() {
        return {
            current: e
        }
    }, [])
}

function gl(e, t) {
    var n = Bn(be++, 7);
    return _l(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
}

function wj(e, t) {
    return Je = 8, gl(function() {
        return e
    }, t)
}

function xj(e) {
    var t = Y.context[e.__c],
        n = Bn(be++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(Y)), t.props.value) : e.__
}

function kj() {
    for (var e; e = al.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(Nn), e.__H.__h.forEach(xi), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], T.__e(t, e.__v)
        }
}
T.__b = function(e) {
    Y = null, ll && ll(e)
}, T.__r = function(e) {
    ul && ul(e), be = 0;
    var t = (Y = e.__c).__H;
    t && (wi === Y ? (t.__h = [], Y.__h = [], t.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = Ln, n.__N = n.i = void 0
    })) : (t.__h.forEach(Nn), t.__h.forEach(xi), t.__h = [], be = 0)), wi = Y
}, T.diffed = function(e) {
    cl && cl(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (al.push(t) !== 1 && sl === T.requestAnimationFrame || ((sl = T.requestAnimationFrame) || Sj)(kj)), t.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== Ln && (n.__ = n.__V), n.i = void 0, n.__V = Ln
    })), wi = Y = null
}, T.__c = function(e, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(Nn), n.__h = n.__h.filter(function(r) {
                return !r.__ || xi(r)
            })
        } catch (r) {
            t.some(function(i) {
                i.__h && (i.__h = [])
            }), t = [], T.__e(r, n.__v)
        }
    }), dl && dl(e, t)
}, T.unmount = function(e) {
    hl && hl(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
        try {
            Nn(r)
        } catch (i) {
            t = i
        }
    }), n.__H = void 0, t && T.__e(t, n.__v))
};
var bl = typeof requestAnimationFrame == "function";

function Sj(e) {
    var t, n = function() {
            clearTimeout(r), bl && cancelAnimationFrame(t), setTimeout(e)
        },
        r = setTimeout(n, 100);
    bl && (t = requestAnimationFrame(n))
}

function Nn(e) {
    var t = Y,
        n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), Y = t
}

function xi(e) {
    var t = Y;
    e.__c = e.__(), Y = t
}

function _l(e, t) {
    return !e || e.length !== t.length || t.some(function(n, r) {
        return n !== e[r]
    })
}

function yl(e, t) {
    return typeof t == "function" ? t(e) : t
}
const Oj = "_loading_1vqjt_1",
    jj = {
        loading: Oj
    };

function zj() {
    return yt("svg", {
        width: "36",
        height: "36",
        stroke: "#5b5b5b",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: [yt("style", {
            children: ".spnr{transform-origin:center;animation:spnra 2s linear infinite}.spnr circle{stroke-linecap:round;animation:spnra2 1.5s ease-in-out infinite}@keyframes spnra{100%{transform:rotate(360deg)}}@keyframes spnra2{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}"
        }), yt("g", {
            class: "spnr",
            children: yt("circle", {
                cx: "12",
                cy: "12",
                r: "9.5",
                fill: "none",
                "stroke-width": "3"
            })
        })]
    })
}

function vl({
    style: e,
    className: t = null
}) {
    return yt("div", {
        className: Ct(jj.loading, t),
        style: e,
        children: yt(zj, {})
    })
}
let wl = {};

function xl({
    loader: e,
    loaderName: t = "",
    showLoader: n = !0,
    ...r
}) {
    const [i, o] = pl(!1);
    if (ml(() => {
            e.then(s => {
                wl[t] = s.default, o(!0)
            })
        }, []), i) {
        const s = wl[t];
        return yt(s, { ...r
        })
    }
    return n ? yt(vl, {}) : null
}
let kl = setTimeout(() => {}, 1),
    ki = !1;

function Ej(e, t) {
    Ol(),
        function(n, r) {
            if (!n.getElementById(r)) {
                var i = n.createElement("script"),
                    o = !1;
                i.id = r, i.async = !0, i.src = "https://www.formilla.com/scripts/feedback.js", i.onload = function() {
                    !o && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (o = !0, Formilla.isSPA = !0, Formilla.isForcedSSL = !0, Sl(), Formilla.guid = e, Formilla.eventListener = s => {
                        var a;
                        switch (s.name) {
                            case "FormillaLoaded":
                                t(), pe.setCurrentFormillaPosition((a = s == null ? void 0 : s.data) == null ? void 0 : a.ButtonLocation), pe.getIsOpened() && window.Formilla.FormillaShowChatWidget();
                                break;
                            case "ChatWidgetOpened":
                            case "SnippetOpened":
                                pe.notify("opened");
                                break;
                            case "SnippetClosed":
                            case "ChatWidgetClosed":
                                pe.notify("closed");
                                break
                        }
                    }, Formilla.loadWidgets())
                }, n.head.appendChild(i)
            }
        }(document, "buttonizer_formilla_script")
}

function Sl() {
    Formilla.isChatActionEnabled = window.Buttonizer.getHasChat(), E() && (Formilla.editorPageURL = window == null ? void 0 : window.previewFullUrl, ut("current-editor-url", Formilla.editorPageURL))
}

function Pj() {
    if (!window.Formilla) return !1;
    window.Formilla.Unload(), Sl(), window.Formilla.loadWidgets()
}

function Ol() {
    var e, t, n;
    if (!E()) return;
    let r = window.inPreviewDesktop;
    const i = ((n = (t = (e = window.Buttonizer.container) == null ? void 0 : e.previewData) == null ? void 0 : t.result) == null ? void 0 : n.findIndex(o => {
        var A, C;
        var s, a, l, u, c, d, m, g, b, w;
        const x = typeof((s = o == null ? void 0 : o.data) == null ? void 0 : s.show_mobile) < "u" && ((a = o == null ? void 0 : o.data) == null ? void 0 : a.show_mobile) == !1,
            S = typeof((l = o == null ? void 0 : o.data) == null ? void 0 : l.show_desktop) < "u" && ((u = o == null ? void 0 : o.data) == null ? void 0 : u.show_desktop) == !1;
        return x && S || r && S || !r && x || (c = o == null ? void 0 : o.data) != null && c.selected_page_rule && !window.Buttonizer.checkPageRuleTriggered((d = o == null ? void 0 : o.data) == null ? void 0 : d.selected_page_rule, (A = (m = o == null ? void 0 : o.data) == null ? void 0 : m.show_on_rule_trigger) != null ? A : !0) || (g = o == null ? void 0 : o.data) != null && g.selected_schedule && !window.Buttonizer.checkTimeScheduleTriggered((b = o == null ? void 0 : o.data) == null ? void 0 : b.selected_schedule, (C = (w = o == null ? void 0 : o.data) == null ? void 0 : w.show_on_schedule_trigger) != null ? C : !0) ? !1 : (o == null ? void 0 : o.buttons.findIndex(L => {
            var st, ct;
            const V = typeof(L == null ? void 0 : L.show_mobile) < "u" && (L == null ? void 0 : L.show_mobile) == !1,
                vt = typeof(L == null ? void 0 : L.show_desktop) < "u" && (L == null ? void 0 : L.show_desktop) == !1;
            return V && vt || S && V || x && vt || r && vt || !r && V || L != null && L.selected_page_rule && !window.Buttonizer.checkPageRuleTriggered(L.selected_page_rule, (st = L.show_on_rule_trigger) != null ? st : !0) || L != null && L.selected_schedule && !window.Buttonizer.checkTimeScheduleTriggered(L.selected_schedule, (ct = L.show_on_schedule_trigger) != null ? ct : !0) ? !1 : (L == null ? void 0 : L.type) === "formilla_chat"
        })) >= 0
    })) >= 0;
    (i !== window.Buttonizer.getHasChat() || ki) && (window.Buttonizer.setHasChat(i), Pj(), ki = !1, i || pe.notify("closed"))
}

function Ke(e = !1) {
    clearTimeout(kl), e && (ki = !0), kl = setTimeout(() => {
        Ol()
    }, 250)
}
const Rj = () =>
    import ("./frontendcontext_BZGuKQ.js");
let Aj = class {
    constructor() {
        if (ua.setup(mj()).use(yj()), this.firstTimeInitialize = !0, this.previewInitialized = !1, this.settingsLoading = !1, this.isInPreviewContainer = !1, this.doNotSkipReloadRequest = !1, this.newestGroupId = null, this.standAloneId = null, this.iconLibrary = null, this.localSiteTime = "UTC", this.widgetsInitialized = !1, this.parameters = [], this.ignoreExtensions = !1, this.ignoreExtensionsTimer = setTimeout(() => {}, 0), this.premium = !1, this.groups = [], this.data = {}, this.previewData = {}, this.liveData = {}, this.previewRerenderGroup = {}, this.formillaInitialized = !1, this.formillaInitializing = !1, E()) {
            let e = document.createElement("style");
            e.innerHTML = "html { margin-top: 0 !important; font-family: Arial, Helvetica, sans-serif; }", window.document.head.appendChild(e);
            const t = new URL(document.location.href);
            t.searchParams && t.searchParams.get("domain") && (window.previewDomain = t.searchParams.get("domain"), window.previewFullUrl = `https://${window.previewDomain}/`)
        }
        this.css = "", this.enableTrackClicks = !1, this.visitorCountry = "unknown", this.pageArrivalTime = new Date().getTime(), this.api = B(this), window.Buttonizer = this.api, B().activateHook("buttonizer_script_loaded"), this.initUrlWatcher()
    }
    initUrlWatcher() {
        if (window._buttonizer && window._buttonizer.urlWatcher === !1 || E()) return;

        function e() {
            return `${document.location.pathname}${document.location.search}`
        }
        let t = setTimeout(() => {}, 0),
            n = e();
        const r = () => {
            this.premium && (clearTimeout(t), t = setTimeout(() => {
                n !== e() && (n = e(), this.reload())
            }, 500))
        };
        window.addEventListener("click", r), window.addEventListener("popstate", r)
    }
    initStandAlone(e) {
        if ((typeof window.buttonizer_ajax < "u" || typeof window.buttonizer_data < "u") && E()) return ut("standalone_conflict"), null;
        B().activateHook("buttonizer_loading"), this.settingsLoading = !0, this.standAloneId = e;
        const t = window.development ? window.development.api : "https://api.buttonizer.io";
        if (B().activateHook("buttonizer_get_data_start"), document.querySelector("#buttonizer-animations-css") === null) {
            const n = document.createElement("style");
            n.id = "buttonizer-animations-css", document.head.appendChild(n), X({
                url: window.development ? window.development.stylesheet : "https://cdn.buttonizer.io/static/build-v4.9.2/assets/embed.css",
                method: "GET"
            }).then(({
                data: r
            }) => {
                n.innerText = r, this.css = r
            }).catch(() => {
                console.error("Buttonizer: Cannot load CSS stylesheet!")
            })
        }
        X({
            url: `${t}/serve/${e}`,
            method: "POST",
            data: {
                preview: E() ? 1 : 0
            },
            withCredentials: E() && !1
        }).then(({
            data: n
        }) => {
            B().activateHook("buttonizer_get_data_end", {
                data: n
            }), this.init(n)
        }).catch(n => {
            var r, i, o, s;
            this.settingsLoading = !1, (i = (r = n == null ? void 0 : n.response) == null ? void 0 : r.data) != null && i.formilla && this.initializeFormilla((s = (o = n == null ? void 0 : n.response) == null ? void 0 : o.data) == null ? void 0 : s.formilla), console.error("Buttonizer: We could not load Buttonizer on your website. Information:"), console.error(n.result && n.result.message ? n.result.message : n), console.error("Buttonizer: Visit our community if you have any questions https://community.buttonizer.pro/")
        })
    }
    async init(e) {
        var i, o;
        var t, n, r;
        if (window.location.search.indexOf("hideButtonizer=true") >= 0) return !1;
        if (E() && !this.previewInitialized && (this.isInPreviewContainer = !0, this.listenToPreview(), window.onerror = (...s) => {
                const a = s[4];
                ut("error", {
                    name: a.name,
                    message: a.message,
                    column: a.column,
                    line: a.line,
                    sourceURL: a.sourceURL,
                    stack: a.stack,
                    extra: this.api.dump()
                })
            }), E() && (this.previewData = e, e.result && (this.data = {}, e.result.map(s => {
                this.data[s.data.id] = s
            }))), E() || (this.liveData = e), this.premium = e.premium === "true" || e.premium, this.parameters = e.parameters, e.misc && e.misc.country && (this.visitorCountry = e.misc.country), this.premium && e.page_rules && pt().push(e.page_rules), this.premium && e.time_schedules && (this.localSiteTime = (i = (t = e == null ? void 0 : e.misc) == null ? void 0 : t.timezone) != null ? i : "UTC", se().push(e.time_schedules)), e.result && e.result.length > 0 && (this.groups = e.result.reduce((s, a) => ({ ...s,
                ...Ma(a)
            }), {}), await Promise.all(Object.values(this.groups).map(async s => {
                let a = s.getRenderElement();
                const l = await s.render();
                a && a.appendChild(l)
            })), this.api.allowGoogleAnalyticsTracking = !0, this.firstTimeInitialize && this.buttonizerInitialized()), E() && this.previewInitialized && (ut("(re)loaded", !0), ut("warning", (o = e.warning) != null ? o : [])), e.misc && e.misc.collect_analytics && (this.enableTrackClicks = !0), e.misc && e.misc.icon_lib) {
            if (this.iconLibrary === null) {
                const s = document.createElement("link");
                s.rel = "stylesheet", s.href = e.misc.icon_lib.url, s.type = "text/css", s.id = "buttonizer-icon-library-css", document.head.appendChild(s), this.iconLibrary = s
            }
        } else this.iconLibrary !== null && this.iconLibrary.remove();
        e.widget_data && e.widget_data.widgets && e.widget_data.widgets.length >= 0 && this.initWidgets(e.widget_data.widgets, e.widget_data.agents), B().activateHook("buttonizer_loaded", {
            groups: this.groups
        }), (n = e == null ? void 0 : e.misc) != null && n.formilla && this.initializeFormilla((r = e == null ? void 0 : e.misc) == null ? void 0 : r.formilla), this.settingsLoading = !1
    }
    initializeFormilla(e) {
        this.formillaInitialized || this.formillaInitializing || (this.formillaInitializing = !1, Ej(e, () => {
            var t;
            this.formillaInitialized = !0, this.formillaInitializing = !1, E() && ut("current-editor-url", (t = pt().getCurrentPageData()) == null ? void 0 : t.url)
        }))
    }
    listenToPreview() {
        this.previewInitialized = !0, window.addEventListener("message", async e => {
            var i, o, s;
            var t;
            if (!e.isTrusted || typeof e.data.eventType > "u" || e.data.eventType !== "buttonizer") return;
            const {
                messageType: n,
                message: r
            } = e.data;
            if (n === "preview-data-update" && await this.updateLivePreviewData(r), n === "get-visible-formilla-guid" && ut("current-editor-url", (t = pt().getCurrentPageData()) == null ? void 0 : t.url), n === "reload-formilla" && this.formillaInitialized && (window.Formilla.Unload(), window.Formilla.loadWidgets()), n === "formilla-preview-update" && this.formillaInitialized && (window.Formilla.isMobilePreviewMode = r === "mobile", Ke(!0)), n === "preview-widget-update" && (this.widgetsInitialized || await this.initWidgets(r.widget, r.agents), this.initWidget(r.widget, r.agents, (i = r.position) != null ? i : null, (o = r.buttonSize) != null ? o : null, (s = r.widgetPage) != null ? s : null)), n === "update-pr-ts") {
                if (r.pageRules) {
                    let a = {};
                    r.pageRules.map(({
                        id: l,
                        ...u
                    }) => a[l] = u), this.previewData.page_rules = a
                }
                if (r.timeSchedules) {
                    let a = {};
                    r.timeSchedules.map(({
                        id: l,
                        ...u
                    }) => {
                        var c;
                        return a[l] = { ...u,
                            excluded: (c = u.dates) != null ? c : u.excluded,
                            dates: void 0
                        }
                    }), this.previewData.time_schedules = a
                }
                Ke(), this.reload()
            }
            if (n === "preview-widget-hide") {
                if (!this.hideWidget) return;
                this.hideWidget()
            }
            if (n === "preview-widget-show" || n === "preview-widget-update" && r.openWidget && r.position) {
                if (!this.showWidget) return;
                let a = typeof r.position == "object" ? r.position : r;
                setTimeout(() => {
                    var u, c;
                    const {
                        action: l
                    } = B().getButton(a.buttonId, a.groupId);
                    l != null && l.execute && l.execute({
                        showOnly: !0,
                        hideOthers: (u = r.hideOthers) != null ? u : !1,
                        widgetPage: (c = r.widgetPage) != null ? c : null
                    })
                }, r != null && r.withDelay ? 1e3 : 100)
            }
            n === "full-reload-required" && (console.log("full reloaded request"), this.doNotSkipReloadRequest = !0, this.newestGroupId = r.newGroupId, this.previewData.result = r.updatedResult, Ke(), this.reload()), n === "preview-update-parameters" && (this.previewData.parameters = r.parameters, this.reload()), n === "toggle-button-group" && (r.action === "open" ? B().open(r.groupId) : B().close(r.groupId)), n === "editor_selected_item" && bt.createTimeout(async () => {
                r.groupId && bt.shouldRerenderGroup(r.groupId, r.buttonId, typeof this.groups[r.groupId] < "u") && await this.regenerateGroup(r.groupId), bt.getPreviouslyAlteredGroups().forEach(async a => {
                    bt.hasAlteredElements(a) && await this.regenerateGroup(a)
                })
            })
        }, !1)
    }
    reload() {
        if (B().activateHook("buttonizer_reload"), this.settingsLoading) {
            console.log("[Buttonizer] Request too quick, first finish the previous one"), setTimeout(() => this.reload(), 500);
            return
        }
        this.settingsLoading = !0, Object.values(this.groups).forEach(t => t.destroy());
        let e = document.querySelectorAll(".buttonizer-group");
        for (let t = 0; t < e.length; t++) e[t].remove();
        if (!E()) return this.init(this.liveData);
        setTimeout(() => {
            this.groups = [], this.standAloneId !== null && this.init(this.previewData), this.settingsLoading = !1
        }, 50)
    }
    async updateLivePreviewData({
        model: e,
        id: t,
        key: n,
        value: r
    }) {
        let i = e === "group" ? t : null;
        if (e === "group") {
            if (typeof this.data[t] > "u") {
                console.log("Did not update, ID undefined", t), ut("reload");
                return
            }
            r === "unset" ? delete this.data[t].data[n] : this.data[t].data[n] = r, ["selected_page_rule", "show_on_rule_trigger", "selected_schedule", "show_on_schedule_trigger"].indexOf(n) >= 0 && bt.watchPotentialAlteredGroup(t), ["show_mobile", "show_desktop", "selected_page_rule", "show_on_rule_trigger", "selected_schedule", "show_on_schedule_trigger"].indexOf(n) >= 0 && Ke(), n === "entrance_animation" && ii.resetEntranceAnimated(t), await this.regenerateGroup(t), B().activateHook("buttonizer_loaded", {
                groups: this.groups
            })
        } else if (e === "menu_button") {
            if (typeof this.data[t] > "u") {
                console.log("Did not update, ID of group undefined", t), ut("reload");
                return
            }
            typeof this.data[t].menu_button > "u" && (this.data[t].menu_button = {}), r === "unset" ? delete this.data[t].menu_button[n] : this.data[t].menu_button[n] = r, await this.regenerateGroup(t), B().activateHook("buttonizer_loaded", {
                groups: this.groups
            })
        } else {
            let o = null;
            i = Object.keys(this.data).find(s => this.data[s].buttons.find((a, l) => (a.id === t && (o = l), o !== null))), i && o != null && (r === "unset" ? delete this.data[i].buttons[o][n] : this.data[i].buttons[o][n] = r, await this.regenerateGroup(i), B().activateHook("buttonizer_loaded", {
                groups: this.groups
            })), Ke()
        }
        B().activateHook("buttonizer_live_update", {
            groups: this.groups,
            model: e,
            groupId: i,
            buttonId: e === "group" ? null : t,
            key: n,
            value: r
        })
    }
    async regenerateGroup(e, t = !1) {
        if (typeof this.previewRerenderGroup[e] < "u" && !t) {
            console.log("[EDITOR][WARN] Double render prevented"), this.previewRerenderGroup[e] = () => this.regenerateGroup(e, !0);
            return
        }
        this.previewRerenderGroup[e] = "working", await this.destroyGroup(e);
        const n = Ma(this.data[e]);
        n !== null && (this.groups[e] = n[e], document.body.appendChild(await this.groups[e].render())), typeof this.previewRerenderGroup[e] == "function" && await this.previewRerenderGroup[e](), delete this.previewRerenderGroup[e]
    }
    async destroyGroup(e) {
        typeof this.groups[e] < "u" && (await this.groups[e].destroy(), delete this.groups[e])
    }
    hasPremium() {
        return this.premium
    }
    isStandalone() {
        return this.standAloneId !== null
    }
    getLocalSiteTimezone() {
        return this.localSiteTime
    }
    buttonizerInitialized() {
        this.firstTimeInitialize && (B().activateHook("buttonizer_initialized", {
            groups: this.groups
        }), this.firstTimeInitialize = !1)
    }
    inPreview() {
        return this.isInPreviewContainer
    }
    async initWidgets(e, t) {
        this.widgetsInitialized = !0;
        const n = document.createElement("div");
        return n.id = "buttonizer-widgets", document.body.appendChild(n), new Promise(r => {
            bs(yt(xl, {
                loader: Rj(),
                loaderName: "FrontendContextProvider",
                initParameters: this.parameters,
                initialWidgets: e,
                initialAgents: t,
                onInitialized: () => r(),
                showLoader: !1
            }), n)
        })
    }
    startIgnoringExtensions() {
        clearTimeout(this.ignoreExtensionsTimer), this.ignoreExtensions = !0, this.ignoreExtensionsTimer = setTimeout(() => {
            this.ignoreExtensions = !1
        }, 500)
    }
    getCSS() {
        return this.css
    }
};
new Aj;
export {
    hs as $, Ua as B, Ko as C, Sb as E, Ob as F, _n as G, xl as L, vs as R, wj as T, vj as _, Ct as a, B as b, Cb as c, k as d, Be as e, Le as f, Lt as g, pl as h, E as i, bs as j, Pr as k, T as l, ut as m, vl as n, Jg as o, ml as p, xj as q, Kg as r, fl as s, Ae as t, yt as u, vr as v, X as w, ls as y
};