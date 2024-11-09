import {
    e as R,
    l as v,
    y as H,
    f as D,
    $ as L,
    j as lt,
    _ as E,
    p as C,
    u as p,
    h as k,
    E as zt,
    B as M,
    C as T,
    d as j,
    a as $,
    L as V,
    b as xt
} from "./buttonizer_CwlhqX.js";
import {
    a as St
} from "./iselementinviewport_Dt4zcw.js";
const Pt = "_widget_10ma8_1",
    Rt = "_fullscreen_10ma8_17",
    Wt = "_container_10ma8_28",
    Ht = "_hidden_10ma8_40",
    Et = "_inLeft_10ma8_50",
    $t = "_inRight_10ma8_53",
    At = "_inUp_10ma8_56",
    Ut = "_inDown_10ma8_59",
    _ = {
        widget: Pt,
        fullscreen: Rt,
        container: Wt,
        hidden: Ht,
        inLeft: Et,
        inRight: $t,
        inUp: At,
        inDown: Ut
    };

function rt(t, n) {
    for (var e in n) t[e] = n[e];
    return t
}

function ut(t, n) {
    for (var e in t)
        if (e !== "__source" && !(e in n)) return !0;
    for (var o in n)
        if (o !== "__source" && t[o] !== n[o]) return !0;
    return !1
}

function at(t) {
    this.props = t
}(at.prototype = new R).isPureReactComponent = !0, at.prototype.shouldComponentUpdate = function(t, n) {
    return ut(this.props, t) || ut(this.state, n)
};
var ct = v.__b;
v.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), ct && ct(t)
};
var Bt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Dt(t) {
    function n(e) {
        var o = rt({}, e);
        return delete o.ref, t(o, e.ref || null)
    }
    return n.$$typeof = Bt, n.render = n, n.prototype.isReactComponent = n.__f = !0, n.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", n
}
var Lt = v.__e;
v.__e = function(t, n, e, o) {
    if (t.then) {
        for (var i, l = n; l = l.__;)
            if ((i = l.__c) && i.__c) return n.__e == null && (n.__e = e.__e, n.__k = e.__k), i.__c(t, n)
    }
    Lt(t, n, e, o)
};
var dt = v.unmount;

function st(t, n, e) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
        typeof o.__c == "function" && o.__c()
    }), t.__c.__H = null), (t = rt({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
        return st(o, n, e)
    })), t
}

function _t(t, n, e) {
    return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
        return _t(o, n, e)
    }), t.__c && t.__c.__P === n && (t.__e && e.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = e)), t
}

function F() {
    this.__u = 0, this.t = null, this.__b = null
}

function ft(t) {
    var n = t.__.__c;
    return n && n.__a && n.__a(t)
}

function A() {
    this.u = null, this.o = null
}
v.unmount = function(t) {
    var n = t.__c;
    n && n.__R && n.__R(), n && 32 & t.__u && (t.type = null), dt && dt(t)
}, (F.prototype = new R).__c = function(t, n) {
    var e = n.__c,
        o = this;
    o.t == null && (o.t = []), o.t.push(e);
    var i = ft(o.__v),
        l = !1,
        u = function() {
            l || (l = !0, e.__R = null, i ? i(c) : c())
        };
    e.__R = u;
    var c = function() {
        if (!--o.__u) {
            if (o.state.__a) {
                var d = o.state.__a;
                o.__v.__k[0] = _t(d, d.__c.__P, d.__c.__O)
            }
            var s;
            for (o.setState({
                    __a: o.__b = null
                }); s = o.t.pop();) s.forceUpdate()
        }
    };
    o.__u++ || 32 & n.__u || o.setState({
        __a: o.__b = o.__v.__k[0]
    }), t.then(u, u)
}, F.prototype.componentWillUnmount = function() {
    this.t = []
}, F.prototype.render = function(t, n) {
    if (this.__b) {
        if (this.__v.__k) {
            var e = document.createElement("div"),
                o = this.__v.__k[0].__c;
            this.__v.__k[0] = st(this.__b, e, o.__O = o.__P)
        }
        this.__b = null
    }
    var i = n.__a && H(D, null, t.fallback);
    return i && (i.__u &= -33), [H(D, null, n.__a ? null : t.children), i]
};
var pt = function(t, n, e) {
    if (++e[1] === e[0] && t.o.delete(n), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
        for (e = t.u; e;) {
            for (; e.length > 3;) e.pop()();
            if (e[1] < e[0]) break;
            t.u = e = e[2]
        }
};

function Mt(t) {
    return this.getChildContext = function() {
        return t.context
    }, t.children
}

function Tt(t) {
    var n = this,
        e = t.i;
    n.componentWillUnmount = function() {
        lt(null, n.l), n.l = null, n.i = null
    }, n.i && n.i !== e && n.componentWillUnmount(), n.l || (n.i = e, n.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function(o) {
            this.childNodes.push(o), n.i.appendChild(o)
        },
        insertBefore: function(o, i) {
            this.childNodes.push(o), n.i.appendChild(o)
        },
        removeChild: function(o) {
            this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), n.i.removeChild(o)
        }
    }), lt(H(Mt, {
        context: n.context
    }, t.__v), n.l)
}

function vt(t, n) {
    var e = H(Tt, {
        __v: t,
        i: n
    });
    return e.containerInfo = n, e
}(A.prototype = new R).__a = function(t) {
    var n = this,
        e = ft(n.__v),
        o = n.o.get(t);
    return o[0]++,
        function(i) {
            var l = function() {
                n.props.revealOrder ? (o.push(i), pt(n, t, o)) : i()
            };
            e ? e(l) : l()
        }
}, A.prototype.render = function(t) {
    this.u = null, this.o = new Map;
    var n = L(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && n.reverse();
    for (var e = n.length; e--;) this.o.set(n[e], this.u = [1, 0, this.u]);
    return t.children
}, A.prototype.componentDidUpdate = A.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach(function(n, e) {
        pt(t, e, n)
    })
};
var jt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    Vt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Ft = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    It = /[A-Z0-9]/g,
    Zt = typeof document < "u",
    qt = function(t) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t)
    };
R.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(R.prototype, t, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + t]
        },
        set: function(n) {
            Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: n
            })
        }
    })
});
var ht = v.event;

function Xt() {}

function Yt() {
    return this.cancelBubble
}

function Gt() {
    return this.defaultPrevented
}
v.event = function(t) {
    return ht && (t = ht(t)), t.persist = Xt, t.isPropagationStopped = Yt, t.isDefaultPrevented = Gt, t.nativeEvent = t
};
var Jt = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    mt = v.vnode;
v.vnode = function(t) {
    typeof t.type == "string" && function(n) {
        var e = n.props,
            o = n.type,
            i = {};
        for (var l in e) {
            var u = e[l];
            if (!(l === "value" && "defaultValue" in e && u == null || Zt && l === "children" && o === "noscript" || l === "class" || l === "className")) {
                var c = l.toLowerCase();
                l === "defaultValue" && "value" in e && e.value == null ? l = "value" : l === "download" && u === !0 ? u = "" : c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || qt(e.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : Ft.test(l) ? l = c : o.indexOf("-") === -1 && Vt.test(l) ? l = l.replace(It, "-$&").toLowerCase() : u === null && (u = void 0) : c = l = "oninput", c === "oninput" && i[l = c] && (l = "oninputCapture"), i[l] = u
            }
        }
        o == "select" && i.multiple && Array.isArray(i.value) && (i.value = L(e.children).forEach(function(d) {
            d.props.selected = i.value.indexOf(d.props.value) != -1
        })), o == "select" && i.defaultValue != null && (i.value = L(e.children).forEach(function(d) {
            d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value
        })), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", Jt)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), n.props = i
    }(t), t.$$typeof = jt, mt && mt(t)
};
var gt = v.__r;
v.__r = function(t) {
    gt && gt(t), t.__c
};
var bt = v.diffed;
v.diffed = function(t) {
    bt && bt(t);
    var n = t.props,
        e = t.__e;
    e != null && t.type === "textarea" && "value" in n && n.value !== e.value && (e.value = n.value == null ? "" : n.value)
};
const Kt = "_iframe_1nhzb_1",
    Qt = "_body_1nhzb_8",
    yt = {
        iframe: Kt,
        body: Qt
    };

function tn({
    children: t,
    onHeightChange: n = () => {}
}) {
    const e = E();
    return C(() => {
        const o = new ResizeObserver(i => {
            var l, u;
            n((u = (l = i[0]) == null ? void 0 : l.contentRect) == null ? void 0 : u.height)
        });
        return e.current && o.observe(e.current), () => {
            e.current && o.unobserve(e.current), o.disconnect()
        }
    }, [e]), p("div", {
        ref: e,
        children: t
    })
}

function nn(t) {
    var n, e, o, i, l;
    const [u, c] = k(null), [d, s] = k(null), r = (e = (n = u == null ? void 0 : u.contentWindow) == null ? void 0 : n.document) == null ? void 0 : e.body, f = u != null && u.contentDocument ? u == null ? void 0 : u.contentDocument : (o = u == null ? void 0 : u.contentWindow) == null ? void 0 : o.document, b = (l = (i = u == null ? void 0 : u.contentWindow) == null ? void 0 : i.document) == null ? void 0 : l.head, g = t.children.filter(h => h).map(h => zt(h, {
        iframeWindow: u == null ? void 0 : u.contentWindow
    }));
    return f && f != null && f.body && (f.body.className = `${yt.body}`), p("iframe", {
        ref: c,
        className: yt.iframe,
        style: {
            height: d
        },
        children: [r && vt(p(tn, {
            onHeightChange: h => {
                s(h), t.onHeightReceived && setTimeout(() => {
                    t.onHeightReceived()
                }, 51)
            },
            children: g
        }), r), b && vt(p(D, {
            children: t.head()
        }), b)]
    })
}
const m = t => `${Math.round(t)}px`,
    U = t => typeof t > "u";

function en(t) {
    var i, l;
    var n;
    const e = (n = document == null ? void 0 : document.body) == null ? void 0 : n.clientWidth,
        o = window == null ? void 0 : window.innerHeight;
    if (t != null && t.element) {
        let u = "top-end";
        ["left-start", "left", "left-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end"].indexOf(t == null ? void 0 : t.position) >= 0 && (u = t == null ? void 0 : t.position);
        let c = t != null && t.offset ? t == null ? void 0 : t.offset : 15,
            d = t == null ? void 0 : t.element;
        if (typeof d == "string") {
            let h = document.querySelector(d);
            h === null && console.error("Buttonizer: The element couldn't be found on the webpage"), d = h || document.body
        }
        const s = u.split("-"),
            r = d.getBoundingClientRect(),
            f = s.length === 1,
            b = St(r),
            g = [r.top < (window.innerHeight || document.documentElement.clientHeight) ? "top" : "bottom", m(c)];
        if (s[0] === "left") return {
            horizontal: ["right", m(e - (r == null ? void 0 : r.left) + c)],
            vertical: b ? s[1] === "end" ? ["bottom", m(o - (r == null ? void 0 : r.bottom))] : ["top", m((r == null ? void 0 : r.top) + (f ? (r == null ? void 0 : r.height) / 2 : 0))] : g,
            verticalAlign: b && f && "center"
        };
        if (s[0] === "top") return {
            horizontal: s[1] === "end" ? ["right", m(e - (r == null ? void 0 : r.right))] : ["left", m((r == null ? void 0 : r.left) + (f ? (r == null ? void 0 : r.width) / 2 : 0))],
            vertical: b ? ["bottom", m(o - (r == null ? void 0 : r.top) + c)] : g,
            horizontalAlign: f && "center"
        };
        if (s[0] === "right") return {
            horizontal: ["left", m((r == null ? void 0 : r.right) + c)],
            vertical: b ? s[1] === "end" ? ["bottom", m(o - (r == null ? void 0 : r.bottom))] : ["top", m((r == null ? void 0 : r.top) + (f ? (r == null ? void 0 : r.height) / 2 : 0))] : g,
            verticalAlign: b && f && "center"
        };
        if (s[0] === "bottom") return {
            horizontal: s[1] === "end" ? ["right", m(e - (r == null ? void 0 : r.right))] : ["left", m((r == null ? void 0 : r.left) + (f ? (r == null ? void 0 : r.width) / 2 : 0))],
            vertical: b ? ["top", m((r == null ? void 0 : r.bottom) + c)] : g,
            horizontalAlign: f && "center"
        }
    }
    if ((t == null ? void 0 : t.position) === "center" || (t == null ? void 0 : t.position) === "center-center") return {
        vertical: ["top", "50%"],
        verticalAlign: "center",
        horizontal: ["left", "50%"],
        horizontalAlign: "center"
    };
    if (!U(t == null ? void 0 : t.left) || !U(t == null ? void 0 : t.right) || !U(t == null ? void 0 : t.top) || !U(t == null ? void 0 : t.bottom)) {
        let u = typeof(t == null ? void 0 : t.right) < "u" ? "right" : "left",
            c = typeof(t == null ? void 0 : t.top) < "u" ? "top" : "bottom";
        return {
            horizontal: [u, (i = t[u]) != null ? i : 0],
            vertical: [c, (l = t[c]) != null ? l : 0]
        }
    }
    return {
        horizontal: ["right", "15px"],
        vertical: ["bottom", "15px"]
    }
}

function on(t, n) {
    var e = 0;
    return function(...o) {
        var i = new Date;
        i - e >= n && (t(...o), e = i)
    }
}
const ln = ["whatsapp", "signal", "telegram", "contact_form", "messenger"],
    rn = {
        whatsapp: "buttonizer-whatsapp-widget",
        messenger: "buttonizer-meta-messenger-widget",
        contact_form: "buttonizer-contact-widget"
    };

function un(t) {
    var Z;
    var n, e;
    const [o, i] = k(null), [l, u] = k(!1), [c, d] = k(!1), [s, r] = k(!1), [f, b] = k(!1), g = E(!1), h = E(!1), z = E({}), y = t.options, I = t.agents.length > 1, w = (Z = (e = (n = y == null ? void 0 : y.position) == null ? void 0 : n.split("-")) == null ? void 0 : e.shift()) != null ? Z : "top", B = () => {
        d(!0), setTimeout(() => {
            u(!1), d(!1), t.hideWidget(t.id)
        }, 250)
    };
    C(() => {
        t.agents.length === 1 && i(t.agents[0].id), u(!0)
    }, []), C(() => {
        g.current && !(t != null && t.enableBackgroundOverlay) ? (M.toggleBackdrop(!1), g.current = !1) : !g.current && t != null && t.enableBackgroundOverlay && (M.toggleBackdrop(!0), g.current = !0)
    }, [t == null ? void 0 : t.enableBackgroundOverlay]), C(() => {
        t != null && t.closeOnOutsideClick ? (z.current = {
            name: t.name,
            id: t.id,
            element: this.base,
            type: "widget"
        }, T.subscribe(z.current), h.current = !0) : h.current && !(t != null && t.closeOnOutsideClick) && (h.current = !1, T.unsubscribe(z.current), z.current = {})
    }, [t == null ? void 0 : t.closeOnOutsideClick]), C(() => () => {
        h.current && T.unsubscribe(z.current), g.current && M.toggleBackdrop(!1)
    }, []), C(() => {
        const a = () => {
            const W = wt({ ...y,
                position: en(y)
            });
            r(W)
        };
        a();
        const x = on(a, 100);
        return document.addEventListener("scroll", x), () => {
            document.removeEventListener("scroll", x)
        }
    }, [y]);
    const wt = a => {
        var x, W, q, X, Y, G, J, K;
        if ((t == null ? void 0 : t.fullscreen) === !0) return {};
        if (a != null && a.position && (x = a == null ? void 0 : a.position) != null && x.horizontal && (W = a == null ? void 0 : a.position) != null && W.vertical) {
            const kt = (a == null ? void 0 : a.isStaticElement) === !0 && typeof((q = a == null ? void 0 : a.position) == null ? void 0 : q.isStaticElement) < "u" && ((X = a == null ? void 0 : a.position) == null ? void 0 : X.isStaticElement) !== !1,
                S = (Y = a == null ? void 0 : a.position) == null ? void 0 : Y.horizontal,
                N = (G = a == null ? void 0 : a.position) == null ? void 0 : G.vertical,
                Q = S[0] === "right" ? "left" : "right",
                tt = N[0] === "bottom" ? "top" : "bottom",
                P = /^(-)?([0-9]+)(px|%)/,
                nt = S[1].match(P)[3],
                et = S[1].match(P)[2],
                ot = N[1].match(P)[3],
                Nt = `${Math.max(0,Number(N[1].match(P)[2]))}${ot}`,
                it = window.innerHeight - an(Number(N[1].match(P)[2]), ot) - 40;
            let O = "",
                Ot = (J = a == null ? void 0 : a.position) == null ? void 0 : J.verticalAlign,
                Ct = (K = a == null ? void 0 : a.position) == null ? void 0 : K.horizontalAlign;
            return Ot === "center" && (O += "translateY(-50%)"), Ct === "center" && (O += "translateX(-50%)"), it < 150 ? {
                [Q]: "unset",
                [S[0]]: `${et}${nt}`,
                [tt]: "0px",
                [N[0]]: "unset",
                transform: O !== "" ? O : void 0
            } : {
                [Q]: "unset",
                [tt]: "unset",
                [S[0]]: `${et}${nt}`,
                [N[0]]: `${Nt}`,
                maxHeight: w !== "center" ? it : "",
                transform: O !== "" ? O : void 0,
                position: kt ? "absolute" : void 0
            }
        }
        return {}
    };
    if (["iframe", "youtube_video"].indexOf(t.type) >= 0) {
        const a = (t == null ? void 0 : t.fullscreen) === !0 ? {} : {
            minWidth: 100,
            height: j(t, "height", 300),
            width: j(t, "width", 500)
        };
        return p("div", {
            className: $(_.widget, (t == null ? void 0 : t.fullscreen) && _.fullscreen),
            style: { ...s,
                ...a
            },
            children: p("div", {
                className: $(_.container, (!l || c) && _.hidden, y == null ? void 0 : y.className, w === "left" && _.inLeft, w === "top" && _.inUp, w === "bottom" && _.inDown, w === "right" && _.inRight),
                children: p(V, {
                    loader: import ("./iframewidget_DbZOq9.js"),
                    loaderName: "IframeWidget",
                    onHide: B,
                    ...t
                })
            })
        })
    }
    return p("div", {
        className: $(_.widget, (y == null ? void 0 : y.fullscreen) && _.fullscreen),
        style: s,
        children: p("div", {
            className: $(_.container, (!l || c || !s || !f) && _.hidden, y == null ? void 0 : y.className, w === "left" && _.inLeft, w === "top" && _.inUp, w === "bottom" && _.inDown, w === "right" && _.inRight, j(rn, t.type, null)),
            children: p(nn, {
                head: () => [p("style", {
                    children: xt().container.getCSS()
                }), p("link", {
                    href: "https://cdn.buttonizer.io/fonts/roboto/font.css",
                    rel: "stylesheet"
                }), p("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })],
                onHeightReceived: () => {
                    b(!0)
                },
                style: {
                    margin: 0
                },
                children: [o && ln.indexOf(t.type) >= 0 && p(V, {
                    loader: import ("./chatwidget_BpCyqe.js"),
                    loaderName: "ChatWidget",
                    ...t,
                    agent: t.agents.find(a => a.id == o),
                    onHide: B,
                    onPrevious: () => i(null),
                    hasPrevious: I
                }), t.type === "contact_form" && p(V, {
                    loader: import ("./simpleformwidget_DcLKWh.js"),
                    loaderName: "SimpleFormWidget",
                    ...t,
                    onHide: B,
                    onPrevious: () => i(null),
                    hasPrevious: I
                })]
            })
        })
    })
}
const an = (t, n) => {
        if (n === "%") {
            const e = window.innerHeight / 100 * t;
            return Math.round(e)
        }
        return t
    },
    cn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: un
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Dt as N, cn as W
};