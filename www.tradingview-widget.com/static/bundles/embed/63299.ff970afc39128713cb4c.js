(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [63299], {
        884566: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogo: () => i
            });
            var o = n(50959),
                r = n(842060),
                s = n(456057);
            n.n(s)()["tv-circle-logo--visually-hidden"];

            function i(e) {
                var t, n;
                const s = (0, r.getStyleClasses)(e.size, e.className),
                    i = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
                return (0, r.isCircleLogoWithUrlProps)(e) ? o.createElement("img", {
                    className: s,
                    crossOrigin: "",
                    src: e.logoUrl,
                    alt: i,
                    title: e.title,
                    loading: e.loading,
                    "aria-label": e["aria-label"],
                    "aria-hidden": e["aria-hidden"]
                }) : o.createElement("span", {
                    className: s,
                    title: e.title,
                    "aria-label": e["aria-label"],
                    "aria-hidden": e["aria-hidden"]
                }, e.placeholderLetter)
            }
        },
        465201: (e, t, n) => {
            "use strict";
            n.d(t, {
                CustomBehaviourContext: () => o
            });
            const o = (0, n(50959).createContext)({
                enableActiveStateStyles: !0
            });
            o.displayName = "CustomBehaviourContext"
        },
        169986: (e, t, n) => {
            "use strict";
            n.d(t, {
                CustomBehaviourContext: () => o.CustomBehaviourContext
            });
            var o = n(465201);
            n(741083)
        },
        741083: (e, t, n) => {
            "use strict"
        },
        693427: (e, t, n) => {
            "use strict";
            n.d(t, {
                useCollapsible: () => o.useCollapsible
            });
            n(277762);
            var o = n(823368)
        },
        283657: (e, t, n) => {
            "use strict";
            n.d(t, {
                useComposedKeyboardActionHandlers: () => a,
                useKeyboardActionHandler: () => i,
                useKeyboardClose: () => c,
                useKeyboardEventHandler: () => l
            });
            var o = n(50959),
                r = n(591800);
            const s = () => !0;

            function i(e, t, n = s, r) {
                return (0, o.useCallback)((o => {
                    if (r) {
                        if ("horizontal" === r && (40 === o || 38 === o)) return;
                        if ("vertical" === r && (37 === o || 39 === o)) return
                    }
                    const s = e.map((e => "function" == typeof e ? e() : e));
                    return !(!n(o) || !s.includes(o)) && (t(o), !0)
                }), [...e, t, n])
            }

            function a(...e) {
                return (0, o.useCallback)((t => {
                    for (const n of e)
                        if (n(t)) return !0;
                    return !1
                }), [...e])
            }

            function l(e, t = !0) {
                const n = a(...e);
                return (0, o.useCallback)((e => {
                    n((0, r.hashFromEvent)(e)) && t && e.preventDefault()
                }), [n])
            }

            function c(e, t) {
                return i([9, (0, o.useCallback)((() => r.Modifiers.Shift + 9), []), 27], t, (0, o.useCallback)((() => e), [e]))
            }
        },
        405964: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFocus: () => r
            });
            var o = n(50959);

            function r(e, t) {
                const [n, r] = (0, o.useState)(!1);
                (0, o.useEffect)((() => {
                    t && n && r(!1)
                }), [t, n]);
                const s = {
                    onFocus: (0, o.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || r(!0)
                    }), [e]),
                    onBlur: (0, o.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || r(!1)
                    }), [e])
                };
                return [n, s]
            }
        },
        267521: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFunctionalRefObject: () => s
            });
            var o = n(50959),
                r = n(774218);

            function s(e) {
                const t = (0, o.useMemo)((() => function(e) {
                        const t = n => {
                            e(n), t.current = n
                        };
                        return t.current = null, t
                    }((e => {
                        a.current(e)
                    }))), []),
                    n = (0, o.useRef)(null),
                    s = t => {
                        if (null === t) return i(n.current, t), void(n.current = null);
                        n.current !== e && (n.current = e, i(n.current, t))
                    },
                    a = (0, o.useRef)(s);
                return a.current = s, (0, r.useIsomorphicLayoutEffect)((() => {
                    if (null !== t.current) return a.current(t.current), () => a.current(null)
                }), [e]), t
            }

            function i(e, t) {
                null !== e && ("function" == typeof e ? e(t) : e.current = t)
            }
        },
        222463: (e, t, n) => {
            "use strict";
            n.d(t, {
                useSafeMatchMedia: () => r
            });
            var o = n(50959);

            function r(e, t = !1) {
                const [n, r] = (0, o.useState)(t);
                return (0, o.useEffect)((() => {
                    const t = window.matchMedia(e);

                    function n() {
                        r(t.matches)
                    }
                    return n(),
                        t.addEventListener("change", n), () => {
                            t.removeEventListener("change", n)
                        }
                }), [e]), n
            }
        },
        662929: (e, t, n) => {
            "use strict";
            n.d(t, {
                useMergedRefs: () => s
            });
            var o = n(50959),
                r = n(551080);

            function s(e) {
                return (0, o.useCallback)((0, r.mergeRefs)(e), e)
            }
        },
        853970: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => o.useOutsideEvent
            });
            var o = n(31241)
        },
        238718: (e, t, n) => {
            "use strict";
            n.d(t, {
                useRefsMap: () => r
            });
            var o = n(50959);

            function r() {
                const e = (0, o.useRef)(new Map),
                    t = (0, o.useCallback)((t => n => {
                        null !== n ? e.current.set(t, n) : e.current.delete(t)
                    }), [e]);
                return [e, t]
            }
        },
        444530: (e, t, n) => {
            "use strict";
            n.d(t, {
                useResizeObserver: () => i
            });
            var o = n(50959),
                r = n(774218),
                s = n(267521);

            function i(e, t = []) {
                const {
                    callback: n,
                    ref: i = null
                } = function(e) {
                    return "function" == typeof e ? {
                        callback: e
                    } : e
                }(e), a = (0, o.useRef)(null), l = (0, o.useRef)(n);
                l.current = n;
                const c = (0, s.useFunctionalRefObject)(i),
                    u = (0, o.useCallback)((e => {
                        c(e), null !== a.current && (a.current.disconnect(), null !== e && a.current.observe(e))
                    }), [c, a]);
                return (0, r.useIsomorphicLayoutEffect)((() => (a.current = new ResizeObserver(((e, t) => {
                    l.current(e, t)
                })), c.current && u(c.current), () => {
                    var e;
                    null === (e = a.current) || void 0 === e || e.disconnect()
                })), [c, ...t]), u
            }
        },
        274001: (e, t, n) => {
            "use strict";
            n.d(t, {
                useTabs: () => o.useTabs
            });
            var o = n(321447)
        },
        132734: (e, t, n) => {
            "use strict";
            n.d(t, {
                Icon: () => r
            });
            var o = n(50959);
            const r = o.forwardRef(((e, t) => {
                const {
                    icon: n = "",
                    title: r,
                    ariaLabel: s,
                    ariaLabelledby: i,
                    ariaHidden: a,
                    ...l
                } = e, c = !!(r || s || i);
                return o.createElement("span", {
                    role: "img",
                    ...l,
                    ref: t,
                    "aria-label": s,
                    "aria-labelledby": i,
                    "aria-hidden": a || !c,
                    title: r,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            }))
        },
        79205: (e, t, n) => {
            "use strict";
            n.d(t, {
                Icon: () => o.Icon
            });
            var o = n(132734)
        },
        600586: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuWidthContext: () => o
            });
            const o = n(50959).createContext({
                setMenuMaxWidth: !1
            })
        },
        481058: (e, t, n) => {
            "use strict";
            n.d(t, {
                createDomId: () => l
            });
            const o = /\s/g;

            function r(e) {
                return "string" == typeof e
            }

            function s(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "number":
                    case "bigint":
                        return e.toString(10);
                    case "boolean":
                    case "symbol":
                        return e.toString();
                    default:
                        return null
                }
            }

            function i(e) {
                return e.trim().length > 0
            }

            function a(e) {
                return e.replace(o, "-")
            }

            function l(...e) {
                const t = e.map(s).filter(r).filter(i).map(a);
                return (t.length > 0 && t[0].startsWith("id_") ? t : ["id", ...t]).join("_")
            }
        },
        746326: (e, t, n) => {
            "use strict";

            function o(e, t = !1) {
                const n = getComputedStyle(e),
                    o = [n.width];
                return "border-box" !== n.boxSizing && o.push(n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth), t && o.push(n.marginLeft, n.marginRight), o.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }
            n.d(t, {
                outerWidth: () => o
            })
        },
        551080: (e, t, n) => {
            "use strict";

            function o(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function r(e) {
                return o([e])
            }
            n.d(t, {
                isomorphicRef: () => r,
                mergeRefs: () => o
            })
        },
        351290: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => i,
                getRootOverlapManager: () => l
            });
            var o = n(650151),
                r = n(593110);
            class s {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter((t => e !== t))
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class i {
                constructor(e = document) {
                    this._storage = new s, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        n = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, n), this._container = n
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const n = this._windows.get(e);
                    if (void 0 !== n) return n;
                    this.registerWindow(e);
                    const o = this._document.createElement("div");
                    if (o.style.position = t.position, o.style.zIndex = this._index.toString(), o.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(o);
                        else if (t.index <= 0) this._container.insertBefore(o, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(o, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(o, this._container.firstChild) : this._container.appendChild(o);
                    return this._windows.set(e, o), ++this._index, o
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveLastWindowToTop() {
                    const e = this._storage.getItems(),
                        t = e[e.length - 1];
                    t && this.moveToTop(t)
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        const t = this.ensureWindow(e);
                        this._windows.forEach(((e, n) => {
                            e.hasAttribute(r.FOCUS_TRAP_DATA_ATTRIBUTE) && e.setAttribute(r.FOCUS_TRAP_DATA_ATTRIBUTE, e === t ? "true" : "false")
                        })), t.style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const a = new WeakMap;

            function l(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, o.ensureDefined)(a.get(t)); {
                    const t = new i(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return a.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        495217: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogo: () => o.CircleLogo
            });
            var o = n(884566)
        },
        217802: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenuDisclosureView: () => l
            });
            var o = n(50959),
                r = n(45968),
                s = n(127500),
                i = n(586240);
            const a = parseInt(i["size-header-height"]);

            function l(e) {
                const {
                    button: t,
                    popupChildren: n,
                    buttonRef: i,
                    listboxId: l,
                    listboxClassName: c,
                    listboxTabIndex: u,
                    matchButtonAndListboxWidths: d,
                    isOpened: h,
                    scrollWrapReference: f,
                    listboxReference: p,
                    onClose: m,
                    onOpen: g,
                    onListboxFocus: b,
                    onListboxBlur: v,
                    onListboxKeyDown: C,
                    listboxAria: x,
                    repositionOnScroll: w = !0,
                    closeOnHeaderOverlap: y = !1,
                    popupPositionCorrection: _ = {
                        x: 0,
                        y: 0
                    },
                    popupPosition: E
                } = e, O = (0, s.useGetPopupMenuPosition)(i, d, _), M = y ? a : 0;
                return o.createElement(o.Fragment, null, t, o.createElement(r.PopupMenu, { ...x,
                    id: l,
                    className: c,
                    tabIndex: u,
                    isOpened: h,
                    position: E || O,
                    repositionOnScroll: w,
                    onClose: m,
                    onOpen: g,
                    doNotCloseOn: i.current,
                    reference: p,
                    scrollWrapReference: f,
                    onFocus: b,
                    onBlur: v,
                    onKeyDown: C,
                    closeOnScrollOutsideOffset: M
                }, n))
            }
        },
        435697: (e, t, n) => {
            "use strict";
            n(222463)
        },
        634993: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenuItem: () => d
            });
            var o = n(50959),
                r = n(497754),
                s = n(345848),
                i = n(224743),
                a = n(495217),
                l = n(184277),
                c = n(509059);

            function u(e) {
                e.stopPropagation()
            }

            function d(e) {
                const {
                    id: t,
                    role: n,
                    className: d,
                    title: h,
                    labelRowClassName: f,
                    labelClassName: p,
                    toolboxClassName: m,
                    shortcut: g,
                    forceShowShortcuts: b,
                    icon: v,
                    iconClassname: C,
                    isActive: x,
                    isDisabled: w,
                    isHovered: y,
                    appearAsDisabled: _,
                    label: E,
                    link: O,
                    showToolboxOnHover: M,
                    showToolboxOnFocus: k,
                    target: R,
                    rel: N,
                    toolbox: L,
                    toolboxRole: T,
                    reference: I,
                    onMouseOut: S,
                    onMouseOver: W,
                    onKeyDown: D,
                    suppressToolboxClick: A = !0,
                    theme: B = c,
                    tabIndex: P,
                    tagName: F,
                    renderComponent: z,
                    roundedIcon: K,
                    iconAriaProps: H,
                    circleLogo: U,
                    dontClosePopup: j,
                    onClick: Z,
                    onClickArg: $,
                    trackEventObject: G,
                    trackMouseWheelClick: J,
                    trackRightClick: V,
                    ...q
                } = e, Q = (0, o.useRef)(null), X = (0, o.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: n,
                            ...r
                        } = t, s = null != e ? e : r.href ? "a" : "div", i = "a" === s ? r : function(e) {
                            const {
                                download: t,
                                href: n,
                                hrefLang: o,
                                media: r,
                                ping: s,
                                rel: i,
                                target: a,
                                type: l,
                                referrerPolicy: c,
                                ...u
                            } = e;
                            return u
                        }(r);
                        return o.createElement(s, { ...i,
                            ref: n
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(F)), [F]), Y = null != z ? z : X;
                return o.createElement(Y, { ...q,
                    id: t,
                    role: n,
                    className: r(d, B.item, v && B.withIcon, {
                        [B.isActive]: x,
                        [B.isDisabled]: w || _,
                        [B.hovered]: y
                    }),
                    title: h,
                    href: O,
                    target: R,
                    rel: N,
                    reference: function(e) {
                        Q.current = e, "function" == typeof I && I(e);
                        "object" == typeof I && (I.current = e)
                    },
                    onClick: function(e) {
                        if (w) return;
                        G && (0, s.trackEvent)(G.category, G.event, G.label);
                        Z && Z($, e);
                        j || (e.currentTarget.dispatchEvent(new CustomEvent("popup-menu-close-event", {
                            bubbles: !0,
                            detail: {
                                clickType: (0, l.isKeyboardClick)(e) ? "keyboard" : "mouse"
                            }
                        })), (0, i.globalCloseMenu)())
                    },
                    onContextMenu: function(e) {
                        G && V && (0, s.trackEvent)(G.category, G.event, `${G.label}_rightClick`)
                    },
                    onMouseUp: function(e) {
                        if (1 === e.button && O && G) {
                            let e = G.label;
                            J && (e += "_mouseWheelClick"), (0, s.trackEvent)(G.category, G.event, e)
                        }
                    },
                    onMouseOver: W,
                    onMouseOut: S,
                    onKeyDown: D,
                    tabIndex: P
                }, U && o.createElement(a.CircleLogo, { ...H,
                    className: c["disclosure-item-circle-logo"],
                    size: "xxxsmall",
                    logoUrl: U.logoUrl,
                    placeholderLetter: "placeholderLetter" in U ? U.placeholderLetter : void 0
                }), v && o.createElement("span", {
                    "aria-label": H && H["aria-label"],
                    "aria-hidden": H && Boolean(H["aria-hidden"]),
                    className: r(B.icon, K && c["round-icon"], C),
                    dangerouslySetInnerHTML: {
                        __html: v
                    }
                }), o.createElement("span", {
                    className: r(B.labelRow, f)
                }, o.createElement("span", {
                    className: r(B.label, p)
                }, E)), (void 0 !== g || b) && o.createElement("span", {
                    className: B.shortcut
                }, (ee = g) && ee.split("+").join(" + ")), void 0 !== L && o.createElement("span", {
                    role: T,
                    onClick: A ? u : void 0,
                    className: r(m, B.toolbox, {
                        [B.showOnHover]: M,
                        [B.showOnFocus]: k
                    })
                }, L));
                var ee
            }
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => h
            });
            var o = n(50959),
                r = n(632227),
                s = n(688987),
                i = n(707533),
                a = n(175071),
                l = n(320116),
                c = n(685715),
                u = n(853970),
                d = n(600586);

            function h(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: h,
                    closeOnClickOutside: f = !0,
                    doNotCloseOn: p,
                    onClickOutside: m,
                    onClose: g,
                    onKeyboardClose: b,
                    "data-name": v = "popup-menu-container",
                    ...C
                } = e, x = (0, o.useContext)(l.CloseDelegateContext), w = o.useContext(d.MenuWidthContext), y = (0, o.useContext)(c.RemeasureDelegateContext), _ = (0, u.useOutsideEvent)({
                    handler: function(e) {
                        m && m(e);
                        if (!f) return;
                        const t = (0, s.default)(p) ? p() : null == p ? [] : [p];
                        if (t.length > 0 && e.target instanceof Node)
                            for (const n of t) {
                                const t = r.findDOMNode(n);
                                if (t instanceof Node && t.contains(e.target)) return
                            }
                        g()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return h ? o.createElement(i.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, o.createElement("span", {
                    ref: _,
                    style: {
                        pointerEvents: "auto"
                    }
                }, o.createElement(a.Menu, { ...C,
                    onClose: g,
                    onKeyboardClose: b,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: x,
                    customRemeasureDelegate: y,
                    ref: t,
                    "data-name": v,
                    limitMaxWidth: w.setMenuMaxWidth,
                    "data-tooltip-show-on-focus": "true"
                }, n))) : null
            }
        },
        685715: (e, t, n) => {
            "use strict";
            n.d(t, {
                RemeasureDelegateContext: () => o
            });
            const o = n(50959).createContext(void 0)
        },
        602948: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.92 7.83 9 12.29l5.08-4.46-1-1.13L9 10.29l-4.09-3.6-.99 1.14Z"/></svg>'
        },
        586240: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","media-mf-phone-landscape":"all and (min-width: 568px)"}')
        }
    }
]);