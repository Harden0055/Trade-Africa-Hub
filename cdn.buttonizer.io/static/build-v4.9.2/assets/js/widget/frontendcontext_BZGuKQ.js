import {
    b as w,
    h as m,
    T as A,
    s as k,
    p as b,
    d as H,
    u as v,
    L,
    F as P,
    q as D
} from "./buttonizer_CwlhqX.js";
const E = {
        widgets: [],
        agents: [],
        visibleWidgets: []
    },
    y = (e, t) => {
        if (!e.widgets.find(r => r.id == t.id)) return console.error(`Buttonizer Widget '${t.id}' doesn't exist or hasn't been initialized yet. Make sure you have published your widget.`), e;
        const i = t.options ? t.options : {},
            n = {
                id: t.id,
                options: i
            };
        if (w().activateHook("buttonizer_widget_opened", {
                widget_id: t.id
            }), i != null && i.hideOthers) return { ...e,
            visibleWidgets: [n]
        };
        const s = [...e.visibleWidgets],
            o = s.findIndex(r => r.id == t.id);
        return o >= 0 ? s[o] = n : s.push(n), { ...e,
            visibleWidgets: s
        }
    },
    _ = (e, t) => {
        const i = [...e.visibleWidgets],
            n = i.findIndex(s => s.id == t.id);
        return n >= 0 ? (w().activateHook("buttonizer_widget_closed", {
            widget_id: i[n].id
        }), i.splice(n, 1)) : t.id || (i.map(s => {
            w().activateHook("buttonizer_widget_closed", {
                widget_id: s.id
            })
        }), i.splice(0, i.length)), { ...e,
            visibleWidgets: i
        }
    };

function F(e, t = {}) {
    switch (t.type) {
        case "init":
            if (t.parseAgents !== null) {
                const i = [...e.agents];
                t.parseAgents.map(n => {
                    const s = i.findIndex(o => o.id == n.id);
                    s >= 0 ? i.splice(s, 1, n) : i.push(n)
                }), e.agents = i
            }
            if (t.parseWidget !== null) {
                const i = [...e.widgets];
                t.parseWidget.map(n => {
                    const s = i.findIndex(o => o.id == n.id);
                    s >= 0 ? i.splice(s, 1, n) : i.push(n)
                }), e.widgets = i
            }
            return e;
        case "toggle":
            return e.visibleWidgets.find(i => i.id === t.id) ? _(e, t) : y(e, t);
        case "show":
            return y(e, t);
        case "hide":
            return _(e, t);
        default:
            return console.error(`Buttonizer Widget action '${t.type}' is not available`), e
    }
}
const x = () =>
    import ("./widget_aVoeWN.js").then(e => e.W);

function M({
    initialWidgets: e,
    initialAgents: t,
    onInitialized: i = null
}) {
    const [n, s] = m(), o = A(() => s(n + 1), []), [{
        widgets: r,
        agents: f,
        visibleWidgets: p
    }, g] = k(F, E), l = (d = null, a = null, h = null, u = null, T = null) => {
        g({
            type: "init",
            parseWidget: d,
            parseAgents: a,
            position: h,
            buttonSize: u,
            widgetPage: T
        }), o()
    }, c = (d, a) => {}, W = (d, a = {}) => {
        g({
            type: "show",
            id: d,
            options: a
        })
    }, I = (d, a) => {
        g({
            type: "toggle",
            id: d,
            options: a
        })
    }, z = d => {
        g({
            type: "hide",
            id: d
        })
    };
    return b(() => {
        l(e, t), e.length >= 0 && x(), window.Buttonizer.container.initWidgets = c, window.Buttonizer.container.initWidget = l, window.Buttonizer.container.showWidget = W, window.Buttonizer.container.hideWidget = z, window.Buttonizer.container.toggleWidget = I, i && i(), w().activateHook("buttonizer_widget_initialized", {
            widgets: e,
            agents: t
        })
    }, []), r.map((d, a) => {
        if (!p.find(u => u.id === d.id)) return null;
        const h = H(d, "agents", []).length > 0 ? f.filter(u => d.agents.indexOf(u.id) >= 0) : [];
        return v(L, {
            loader: x(),
            loaderName: "Widget",
            showLoader: !1,
            ...d,
            agents: h,
            index: a,
            hideWidget: z,
            options: p.find(u => u.id === d.id).options,
            forceRerender: () => {
                window.postMessage({
                    eventType: "buttonizer",
                    messageType: "iframe-resize"
                }, document.location.origin)
            }
        })
    })
}
const B = P();

function O({
    initialWidgets: e = [],
    initialAgents: t = [],
    initParameters: i = [],
    onInitialized: n = null
}) {
    const [s, o] = m(i), [r, f] = m(Date.now()), p = {
        parameters: s,
        parameterRefeshed: r,
        setParameters: o
    };
    return b(() => {
        const g = l => {
            if (!l.isTrusted || typeof l.data.eventType > "u" || l.data.eventType !== "buttonizer") return;
            const {
                messageType: c,
                message: W
            } = l.data;
            c === "preview-update-parameters" ? o(W.parameters) : c === "parameters-updated" && f(Date.now())
        };
        return window.addEventListener("message", g), () => {
            window.removeEventListener("message", g)
        }
    }, []), v(B.Provider, {
        value: p,
        children: v(M, {
            initialWidgets: e,
            initialAgents: t,
            onInitialized: n
        })
    })
}

function R() {
    return D(B)
}
export {
    O as
    default, R as useFrontendContext
};