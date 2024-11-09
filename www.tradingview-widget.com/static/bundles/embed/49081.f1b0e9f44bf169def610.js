(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [49081], {
        583364: e => {
            e.exports = {
                container: "container-zq7XRf30",
                sell: "sell-zq7XRf30",
                buy: "buy-zq7XRf30",
                "strong-sell": "strong-sell-zq7XRf30",
                "strong-buy": "strong-buy-zq7XRf30",
                neutral: "neutral-zq7XRf30",
                "container-small": "container-small-zq7XRf30",
                textRow: "textRow-zq7XRf30",
                textRowMiddle: "textRowMiddle-zq7XRf30",
                textRowBottom: "textRowBottom-zq7XRf30",
                "container-medium": "container-medium-zq7XRf30",
                "container-large": "container-large-zq7XRf30"
            }
        },
        808576: e => {
            e.exports = {
                "scale-animation-duration": "3000ms",
                container: "container-wEfiUmEM",
                "scale-container": "scale-container-wEfiUmEM",
                "container-small": "container-small-wEfiUmEM",
                border: "border-wEfiUmEM",
                mask: "mask-wEfiUmEM",
                arrow: "arrow-wEfiUmEM",
                icon: "icon-wEfiUmEM",
                "container-medium": "container-medium-wEfiUmEM",
                "container-large": "container-large-wEfiUmEM",
                background: "background-wEfiUmEM",
                arrowWrap: "arrowWrap-wEfiUmEM",
                maskWrap: "maskWrap-wEfiUmEM",
                animated: "animated-wEfiUmEM",
                "tremor-transform": "tremor-transform-wEfiUmEM"
            }
        },
        791510: e => {
            e.exports = {
                container: "container-vLbFM67a",
                "container-small": "container-small-vLbFM67a",
                "container-medium": "container-medium-vLbFM67a",
                "container-large": "container-large-vLbFM67a",
                "text-small": "text-small-vLbFM67a",
                "text-medium": "text-medium-vLbFM67a",
                "text-large": "text-large-vLbFM67a",
                "strong-sell": "strong-sell-vLbFM67a",
                sell: "sell-vLbFM67a",
                neutral: "neutral-vLbFM67a",
                buy: "buy-vLbFM67a",
                "strong-buy": "strong-buy-vLbFM67a",
                "container-strong-sell": "container-strong-sell-vLbFM67a",
                "container-sell": "container-sell-vLbFM67a",
                "container-neutral": "container-neutral-vLbFM67a",
                "container-buy": "container-buy-vLbFM67a",
                "container-strong-buy": "container-strong-buy-vLbFM67a"
            }
        },
        121167: e => {
            e.exports = {
                "square-tab-button": "square-tab-button-huvpscfz",
                selected: "selected-huvpscfz",
                "disable-active-state-styles": "disable-active-state-styles-huvpscfz",
                "disable-focus-outline": "disable-focus-outline-huvpscfz",
                "size-xlarge": "size-xlarge-huvpscfz",
                "tab-hidden-content": "tab-hidden-content-huvpscfz",
                "size-medium": "size-medium-huvpscfz",
                "size-small": "size-small-huvpscfz",
                "size-xsmall": "size-xsmall-huvpscfz",
                fake: "fake-huvpscfz",
                content: "content-huvpscfz",
                "tab-content": "tab-content-huvpscfz"
            }
        },
        535140: e => {
            e.exports = {
                "arrow-icon": "arrow-icon-nV6fm1zO",
                dropped: "dropped-nV6fm1zO"
            }
        },
        550650: e => {
            e.exports = {
                "css-value-square-tabs-xsmall-gap": "4px",
                "css-value-square-tabs-small-gap": "8px",
                "css-value-square-tabs-medium-gap": "12px",
                "css-value-square-tabs-xlarge-gap": "12px"
            }
        },
        558215: e => {
            e.exports = {
                "css-value-square-tabs-xsmall-gap": "4px",
                "css-value-square-tabs-small-gap": "8px",
                "css-value-square-tabs-medium-gap": "12px",
                "css-value-square-tabs-xlarge-gap": "12px",
                "scroll-wrap": "scroll-wrap-mf1FlhVw",
                "enable-scroll": "enable-scroll-mf1FlhVw",
                "square-tabs": "square-tabs-mf1FlhVw",
                content: "content-mf1FlhVw",
                "size-xsmall": "size-xsmall-mf1FlhVw",
                "square-tab-button": "square-tab-button-mf1FlhVw",
                "end-slot-wrap": "end-slot-wrap-mf1FlhVw",
                "size-small": "size-small-mf1FlhVw",
                "size-medium": "size-medium-mf1FlhVw",
                "size-xlarge": "size-xlarge-mf1FlhVw"
            }
        },
        823368: (e, t, n) => {
            "use strict";
            n.d(t, {
                useCollapsible: () => m
            });
            var a = n(50959),
                l = n(277762),
                s = n(444530),
                i = n(746326),
                r = n(238718),
                o = n(774218),
                c = n(551080);

            function u(e) {
                const {
                    itemsList: t,
                    getItemId: n,
                    calcVisibleAndHiddenItems: l,
                    shouldKeepItemVisible: u,
                    onMeasureCallback: m,
                    forceUpdate: b = !1
                } = e, [f, h] = (0, r.useRefsMap)(), v = (0, a.useRef)(null), p = (0, a.useRef)({
                    widthsMap: new Map,
                    containerWidth: 0,
                    moreButtonWidth: 0
                }), [g, w] = (0, a.useState)({
                    visible: t,
                    hidden: []
                }), C = (0, a.useMemo)((() => t.reduce(((e, t, n) => (u(t) && e.push(n), e)), [])), [t, u]), E = (0, a.useCallback)((() => {
                    if (p.current.containerWidth) {
                        const e = l(p.current, C);
                        (function(e, t) {
                            return !d(e.visible, t.visible) || !d(e.hidden, t.hidden)
                        })(g, e) && w(e)
                    }
                }), [p, w, g, C, l]), k = (0, a.useCallback)((() => {
                    p.current.moreButtonWidth = v.current ? (0, i.outerWidth)(v.current, !0) : 0;
                    const e = new Map(p.current.widthsMap);
                    for (const a of t) {
                        const t = n(a),
                            l = f.current.get(t);
                        if (l) {
                            const n = (0, i.outerWidth)(l, !0);
                            e.set(t, n)
                        }
                    }
                    p.current.widthsMap = e, m && m()
                }), [p, t, n, f, m]), M = (0, a.useRef)(null), R = (0, a.useCallback)((([e]) => {
                    e.contentRect.width !== p.current.containerWidth && (M.current && cancelAnimationFrame(M.current), p.current.containerWidth = e.contentRect.width, M.current = requestAnimationFrame((() => {
                        E()
                    })))
                }), [p, E]), x = (0, a.useRef)(null), y = (0, a.useCallback)((([e]) => {
                    x.current && cancelAnimationFrame(x.current), k(), x.current = requestAnimationFrame((() => {
                        E()
                    }))
                }), [k, E]), z = (0, s.useResizeObserver)(y), S = (0, s.useResizeObserver)(R), I = (0, a.useRef)(null), F = (0, c.mergeRefs)([S, I]), T = (0, a.useRef)(t), N = (0, a.useRef)(!0), B = (0, a.useRef)([]);
                return (0, o.useIsomorphicLayoutEffect)((() => {
                    !b && !N.current && d(T.current, t) && d(C, B.current) || (E(), N.current = !1, T.current = t, B.current = C)
                }), [t, E, C, b]), {
                    containerRefCallback: F,
                    moreButtonRef: v,
                    innerContainerRefCallback: z,
                    itemsRefs: f,
                    setItemRef: h,
                    hiddenItems: g.hidden,
                    visibleItems: g.visible,
                    itemsMeasurements: p
                }
            }

            function d(e, t) {
                return e.length === t.length && e.reduce(((e, n, a) => e && n === t[a]), !0)
            }

            function m(e, t, n, s = l.CollapseDirection.EndFirst) {
                const i = (0, a.useCallback)(((n, a) => {
                    const i = e.map((e => {
                        var a;
                        return null !== (a = n.widthsMap.get(t(e))) && void 0 !== a ? a : 0
                    }));
                    return function({
                        items: e,
                        containerWidth: t,
                        elementsWidths: n,
                        menuItemWidth: a,
                        keepVisible: s,
                        direction: i
                    }) {
                        const r = [...e],
                            o = [],
                            c = [];
                        let u = 0;
                        for (const e of n) u += e;
                        if (u <= t) return {
                            visible: r,
                            hidden: c
                        };
                        const d = [...n];
                        if (u = s.map((e => d[e])).reduce(((e, t) => e + t), 0) + a, i === l.CollapseDirection.EndFirst)
                            for (let e = 0; e < r.length; e++) s.includes(e) ? o.push(r[e]) : (u += d[e], u <= t ? o.push(r[e]) : c.push(r[e]));
                        else
                            for (let e = r.length - 1; e >= 0; e--) s.includes(e) ? o.unshift(r[e]) : (u += d[e], u <= t ? o.unshift(r[e]) : c.unshift(r[e]));
                        return {
                            visible: o,
                            hidden: c
                        }
                    }({
                        items: e,
                        containerWidth: n.containerWidth,
                        elementsWidths: i,
                        menuItemWidth: n.moreButtonWidth,
                        keepVisible: a,
                        direction: s
                    })
                }), [e]);
                return u({
                    itemsList: e,
                    getItemId: t,
                    calcVisibleAndHiddenItems: i,
                    shouldKeepItemVisible: n
                })
            }
        },
        718083: (e, t, n) => {
            "use strict";
            n.d(t, {
                useDisclosure: () => c
            });
            var a = n(50959),
                l = n(650151),
                s = n(607423),
                i = n(405964),
                r = n(763341),
                o = n(481058);

            function c(e) {
                const {
                    id: t,
                    listboxId: n,
                    disabled: c,
                    buttonTabIndex: u = 0,
                    onFocus: d,
                    onBlur: m,
                    onClick: b
                } = e, [f, h] = (0, a.useState)(!1), [v, p] = (0, i.useFocus)(), g = v || f, w = (null != n ? n : void 0 !== t) ? (0, o.createDomId)(t, "listbox") : void 0, C = (0, a.useRef)(null), E = (0, a.useCallback)((e => {
                    var t;
                    return null === (t = C.current) || void 0 === t ? void 0 : t.focus(e)
                }), [C]), k = (0, a.useRef)(null), M = (0, a.useCallback)((() => (0, l.ensureNotNull)(k.current).focus()), [k]), R = (0, a.useCallback)((() => h(!0)), [h]), x = (0, a.useCallback)(((e = !1, t = !1) => {
                    h(!1);
                    const {
                        activeElement: n
                    } = document;
                    n && (0, s.isTextEditingField)(n) || t || E({
                        preventScroll: e
                    })
                }), [h, E]), y = (0, a.useCallback)((() => {
                    f ? x() : R()
                }), [f, x, R]), z = c ? [] : [d, p.onFocus], S = c ? [] : [m, p.onBlur], I = c ? [] : [b, y], F = (0, r.createSafeMulticastEventHandler)(...z), T = (0, r.createSafeMulticastEventHandler)(...S), N = (0, r.createSafeMulticastEventHandler)(...I);
                return {
                    listboxId: w,
                    isOpened: f,
                    isFocused: g,
                    buttonTabIndex: c ? -1 : u,
                    listboxTabIndex: -1,
                    open: R,
                    close: x,
                    toggle: y,
                    onOpen: M,
                    buttonFocusBindings: {
                        onFocus: F,
                        onBlur: T
                    },
                    onButtonClick: N,
                    buttonRef: C,
                    listboxRef: k,
                    buttonAria: {
                        "aria-controls": f ? w : void 0,
                        "aria-expanded": f,
                        "aria-disabled": c
                    }
                }
            }
        },
        507017: (e, t, n) => {
            "use strict";
            n.d(t, {
                useItemsKeyboardNavigation: () => i
            });
            var a = n(50959),
                l = n(283657);

            function s(e, t) {
                return e >= 0 ? e % t : (t - Math.abs(e) % t) % t
            }

            function i(e, t, n, i, r, o, c = {}, u) {
                const d = (0, a.useCallback)((e => {
                        const t = n.findIndex(i);
                        if (t === n.length - 1 && !o) return void((null == u ? void 0 : u.onFailNext) && u.onFailNext(e));
                        const a = s(t + 1, n.length);
                        r && r(n[a], "next")
                    }), [n, i, r, o]),
                    m = (0, a.useCallback)((e => {
                        const t = n.findIndex(i);
                        if (0 === t && !o) return void((null == u ? void 0 : u.onFailPrev) && u.onFailPrev(e));
                        const a = s(t - 1, n.length);
                        r && r(n[a], "previous")
                    }), [n, i, r, o]),
                    b = (0, a.useCallback)((() => {
                        r && r(n[0], "first")
                    }), [r, n]),
                    f = (0, a.useCallback)((() => {
                        r && r(n[n.length - 1], "last")
                    }), [r, n]),
                    h = (0, a.useMemo)((() => (e => ({
                        next: [40, () => e() ? 37 : 39],
                        previous: [38, () => e() ? 39 : 37],
                        first: [33, () => e() ? 35 : 36],
                        last: [34, () => e() ? 36 : 35]
                    }))(t)), [t]),
                    {
                        next: v = h.next,
                        previous: p = h.previous,
                        first: g = h.first,
                        last: w = h.last
                    } = c;
                return (0, l.useComposedKeyboardActionHandlers)((0, l.useKeyboardActionHandler)(v, d, (() => !0), e), (0, l.useKeyboardActionHandler)(p, m, (() => !0), e), (0, l.useKeyboardActionHandler)(g, b, (() => !0), e), (0, l.useKeyboardActionHandler)(w, f, (() => !0), e))
            }
        },
        499408: (e, t, n) => {
            "use strict";
            n.d(t, {
                useKeepActiveItemIntoView: () => i
            });
            var a = n(50959),
                l = n(650151),
                s = n(896320);

            function i(e = {}) {
                const {
                    activeItem: t,
                    getKey: n,
                    ...i
                } = e, r = (0, a.useRef)(null), o = (0, a.useRef)(new Map), c = (0, s.useScrollIntoViewHelper)(r.current), u = (0, a.useCallback)((() => {
                    null !== c.current && null !== r.current && c.current.getContainer() !== r.current && c.current.setContainer(r.current)
                }), [c, r]), d = (0, a.useCallback)((e => {
                    r.current = e
                }), [r]), m = (0, a.useCallback)(((e, t) => {
                    const a = n ? n(e) : e;
                    t ? o.current.set(a, t) : o.current.delete(a)
                }), [o, n]), b = (0, a.useCallback)(((e, t) => {
                    if (!e) return;
                    const a = n ? n(e) : e,
                        s = o.current.get(a);
                    s && (u(), (0, l.ensureNotNull)(c.current).scrollTo(s, t))
                }), [o, c, n]);
                return (0, a.useEffect)((() => b(t, i)), [b, t]), [d, m, b]
            }
        },
        846503: (e, t, n) => {
            "use strict";
            n.d(t, {
                useMobileTouchState: () => s
            });
            var a = n(50959),
                l = n(167175);

            function s() {
                const [e, t] = (0,
                    a.useState)(!1);
                return (0, a.useEffect)((() => {
                    t(l.mobiletouch)
                }), []), e
            }
        },
        896320: (e, t, n) => {
            "use strict";
            n.d(t, {
                useScrollIntoViewHelper: () => d
            });
            var a = n(50959),
                l = n(650151),
                s = n(745269);
            const i = {
                    duration: 200,
                    additionalScroll: 0
                },
                r = {
                    vertical: {
                        scrollSize: "scrollHeight",
                        clientSize: "clientHeight",
                        start: "top",
                        end: "bottom",
                        size: "height"
                    },
                    horizontal: {
                        scrollSize: "scrollWidth",
                        clientSize: "clientWidth",
                        start: "left",
                        end: "right",
                        size: "width"
                    }
                };

            function o(e, t) {
                const n = r[e];
                return t[n.scrollSize] > t[n.clientSize]
            }

            function c(e, t, n, a, l, i) {
                const o = function(e, t, n, a = 0) {
                    const l = r[e];
                    return {
                        start: -1 * a,
                        middle: -1 * (Math.floor(n[l.size] / 2) - Math.floor(t[l.size] / 2)),
                        end: -1 * (n[l.size] - t[l.size]) + a
                    }
                }(e, a, l, i.additionalScroll);
                let c = 0;
                if (i.snapToMiddle || function(e, t, n) {
                        const a = r[e];
                        return t[a.start] < n[a.start] - n[a.size] / 2 || t[a.end] > n[a.end] + n[a.size] / 2
                    }(e, a, l)) c = o.middle;
                else {
                    const t = function(e, t, n, a = 0) {
                            const l = r[e],
                                s = t[l.start] + Math.floor(t[l.size] / 2),
                                i = n[l.start] + Math.floor(n[l.size] / 2);
                            return {
                                start: t[l.start] - n[l.start] - a,
                                middle: s - i,
                                end: t[l.end] - n[l.end] + a
                            }
                        }(e, a, l, i.additionalScroll),
                        n = function(e) {
                            const {
                                start: t,
                                middle: n,
                                end: a
                            } = e, l = new Map([
                                [Math.abs(t), {
                                    key: "start",
                                    value: Math.sign(t)
                                }],
                                [Math.abs(n), {
                                    key: "middle",
                                    value: Math.sign(n)
                                }],
                                [Math.abs(a), {
                                    key: "end",
                                    value: Math.sign(a)
                                }]
                            ]), s = Math.min(...l.keys());
                            return l.get(s)
                        }(t);
                    c = void 0 !== n ? o[n.key] : 0
                }
                return i.align && (c = o[i.align]),
                    function(e) {
                        const {
                            additionalScroll: t = 0,
                            duration: n = s.dur,
                            func: a = s.easingFunc.easeInOutCubic,
                            onScrollEnd: l,
                            target: i,
                            wrap: r,
                            direction: o = "vertical"
                        } = e;
                        let {
                            targetRect: c,
                            wrapRect: u
                        } = e;
                        c = null != c ? c : i.getBoundingClientRect(), u = null != u ? u : r.getBoundingClientRect();
                        const d = ("vertical" === o ? c.top - u.top : c.left - u.left) + t,
                            m = "vertical" === o ? "scrollTop" : "scrollLeft",
                            b = r ? r[m] : 0;
                        let f, h = 0;
                        return h = window.requestAnimationFrame((function e(t) {
                                let s;
                                if (f ? s = t - f : (s = 0, f = t), s >= n) return r[m] = b + d, void(l && l());
                                const i = b + d * a(s / n);
                                r[m] = Math.floor(i), h = window.requestAnimationFrame(e)
                            })),
                            function() {
                                window.cancelAnimationFrame(h), l && l()
                            }
                    }({ ...i,
                        target: t,
                        targetRect: a,
                        wrap: n,
                        wrapRect: l,
                        additionalScroll: c,
                        direction: e
                    })
            }
            class u {
                constructor(e = null) {
                    this._container = null, this._lastScrolledElement = null, this._stopVerticalScroll = null, this._stopHorizontalScroll = null, this._container = e
                }
                scrollTo(e, t = i) {
                    if (null !== this._container && null !== e && ! function(e, t, n = 0) {
                            const a = e.getBoundingClientRect(),
                                l = t.getBoundingClientRect();
                            return a.top - l.top >= 0 && l.bottom - a.bottom >= 0 && a.left - l.left >= n && l.right - a.right >= n
                        }(e, this._container, t.visibilityDetectionOffsetInline)) {
                        const n = e.getBoundingClientRect(),
                            a = this._container.getBoundingClientRect();
                        this.stopScroll(), o("vertical", this._container) && (this._stopVerticalScroll = c("vertical", e, this._container, n, a, this._modifyOptions("vertical", t))), o("horizontal", this._container) && (this._stopHorizontalScroll = c("horizontal", e, this._container, n, a, this._modifyOptions("horizontal", t)))
                    }
                    this._lastScrolledElement = e
                }
                scrollToLastElement(e) {
                    this.scrollTo(this._lastScrolledElement, e)
                }
                stopScroll() {
                    null !== this._stopVerticalScroll && this._stopVerticalScroll(), null !== this._stopHorizontalScroll && this._stopHorizontalScroll()
                }
                getContainer() {
                    return this._container
                }
                setContainer(e) {
                    var t;
                    this._container = e, (null === (t = this._container) || void 0 === t ? void 0 : t.contains(this._lastScrolledElement)) || (this._lastScrolledElement = null)
                }
                destroy() {
                    this.stopScroll(), this._container = null, this._lastScrolledElement = null
                }
                _handleScrollEnd(e) {
                    "vertical" === e ? this._stopVerticalScroll = null : this._stopHorizontalScroll = null
                }
                _modifyOptions(e, t) {
                    return Object.assign({}, t, {
                        onScrollEnd: () => {
                            this._handleScrollEnd(e), void 0 !== t.onScrollEnd && t.onScrollEnd()
                        }
                    })
                }
            }

            function d(e) {
                const t = (0, a.useRef)(null);
                return (0, a.useEffect)((() => (t.current = new u(e), () => (0, l.ensureNotNull)(t.current).destroy())), []), t
            }
        },
        321447: (e, t, n) => {
            "use strict";
            n.d(t, {
                useTabs: () => f
            });
            var a = n(50959),
                l = n(561781),
                s = n(763341),
                i = n(405964),
                r = n(499408),
                o = n(650151),
                c = n(283657),
                u = n(507017);

            function d() {
                return !1
            }

            function m(e) {
                const {
                    activationType: t = "manual"
                } = e, n = (0, a.useMemo)((() => t), []);
                return (0, o.assert)(t === n, "Activation type must be invariant."), "automatic" === t ? function(e) {
                    const {
                        isRtl: t,
                        items: n,
                        preventDefaultIfHandled: l = !0,
                        isHighlighted: s,
                        onHighlight: i,
                        onActivate: r,
                        isCollapsed: o = d,
                        orientation: m
                    } = e, b = (0, a.useCallback)((e => {
                        i(e), o(e) || r(e)
                    }), [i, r, o]);
                    return (0, c.useKeyboardEventHandler)([(0, u.useItemsKeyboardNavigation)(m, t, n, s, b, !0)], l)
                }(e) : function(e) {
                    const {
                        isRtl: t,
                        items: n,
                        preventDefaultIfHandled: l = !0,
                        isHighlighted: s,
                        onHighlight: i,
                        onActivate: r,
                        orientation: o
                    } = e, d = n.find(s), m = (0, a.useCallback)((() => {
                        void 0 !== d && r(d)
                    }), [d, r]), b = (0, a.useCallback)((e => i(e)), [i]), f = (0, u.useItemsKeyboardNavigation)(o, t, n, s, b, !0), h = (0, c.useKeyboardActionHandler)([13, 32], m);
                    return (0, c.useKeyboardEventHandler)([f, h], l)
                }(e)
            }
            var b = n(846503);

            function f(e) {
                var t, n, o;
                const {
                    id: c,
                    items: u,
                    orientation: d,
                    activationType: f = "manual",
                    disabled: h,
                    tablistLabelId: v,
                    tablistLabel: p,
                    focusOnHighlight: g = !0,
                    preventDefaultIfKeyboardActionHandled: w = !0,
                    scrollIntoViewOptions: C,
                    isActive: E,
                    onActivate: k,
                    isCollapsed: M,
                    isRtl: R,
                    isDisclosureOpened: x
                } = e, y = (0, b.useMobileTouchState)(), z = x ? null : d || "horizontal", S = (0, a.useRef)(null !== (n = null === (t = e.itemsRefs) || void 0 === t ? void 0 : t.current) && void 0 !== n ? n : new Map), [I, F] = (0, a.useState)(), [T, N] = (0, i.useFocus)(), B = u.find(E), A = (0, a.useCallback)((e => !h && !e.disabled && e === I), [h, I]), H = (0, a.useCallback)((e => {
                    const t = S.current.get(e);
                    g && void 0 !== t && t !== document.activeElement && t.focus()
                }), [g]), _ = (0, a.useRef)(), q = (0, a.useCallback)(((e, t) => {
                    h || e.disabled || (F(e), "number" == typeof t ? (clearTimeout(_.current), _.current = setTimeout((() => H(e)), t)) : H(e))
                }), [h, F, H]), L = (0, a.useCallback)((e => {
                    h || e.disabled || (k(e), A(e) || q(e))
                }), [h, k, A, q]), V = m({
                    isRtl: R,
                    items: (0, a.useMemo)((() => u.filter((e => !h && !e.disabled))), [u, h]),
                    activationType: f,
                    preventDefaultIfHandled: w,
                    onActivate: L,
                    isHighlighted: A,
                    onHighlight: q,
                    isCollapsed: M,
                    orientation: z
                }), O = (0, a.useCallback)((e => {
                    let t = null;
                    for (const [n, a] of S.current.entries())
                        if (e.target === a) {
                            t = n;
                            break
                        }
                    t && !A(t) && ("automatic" === f && M && !M(t) ? L(t) : q(t))
                }), [f, A, q, L, M]);
                (0, a.useEffect)((() => {
                    y || void 0 !== B && F(B)
                }), [B, y]), (0, a.useEffect)((() => {
                    T || F(void 0)
                }), [T]), (0, a.useEffect)((() => () => clearTimeout(_.current)), []);
                const W = null !== (o = null == C ? void 0 : C.additionalScroll) && void 0 !== o ? o : 0,
                    [D, K] = (0, r.useKeepActiveItemIntoView)({ ...C,
                        visibilityDetectionOffsetInline: W + 24,
                        snapToMiddle: !0,
                        activeItem: null != I ? I : B,
                        getKey: (0, a.useCallback)((e => e.id), [])
                    }),
                    U = (0, a.useCallback)(((e, t) => {
                        K(e, t), null !== t ? S.current.set(e, t) : S.current.delete(e)
                    }), [K]),
                    X = u.map((e => {
                        var t, n;
                        const a = A(e),
                            s = E(e),
                            i = null !== (n = null !== (t = e.disabled) && void 0 !== t ? t : h) && void 0 !== n && n,
                            r = !i && (T ? a : s);
                        return { ...(0, l.getTabAttributes)(e.id, r, s, e.tabpanelId, i),
                            highlighted: a,
                            active: s,
                            handleItemRef: U
                        }
                    }));
                return {
                    tabsBindings: X,
                    tablistBinding: { ...(0, l.getTabListAttributes)(c, d, h, v, p),
                        onBlur: N.onBlur,
                        onFocus: (0, s.createSafeMulticastEventHandler)(N.onFocus, O),
                        onKeyDown: V
                    },
                    scrollWrapBinding: {
                        ref: D
                    },
                    onActivate: L,
                    onHighlight: q,
                    isHighlighted: A
                }
            }
        },
        213720: (e, t, n) => {
            "use strict";
            n.d(t, {
                useTabsMainHandlers: () => b
            });
            var a = n(50959),
                l = n(763341),
                s = n(846503),
                i = n(586240),
                r = n(222463);
            var o = n(693427),
                c = n(274001),
                u = n(718083),
                d = n(662929),
                m = n(283657);

            function b(e, t, n) {
                const {
                    id: b,
                    items: f,
                    activationType: h,
                    orientation: v,
                    disabled: p,
                    onActivate: g,
                    isActive: w,
                    overflowBehaviour: C,
                    enableActiveStateStyles: E,
                    tablistLabelId: k,
                    tablistLabel: M
                } = t, R = (0, s.useMobileTouchState)(), x = function(e) {
                    const t = (0, r.useSafeMatchMedia)(i["media-mf-phone-landscape"], !0),
                        n = (0, s.useMobileTouchState)();
                    return null != e ? e : n || !t ? "scroll" : "collapse"
                }(C), y = (0, a.useRef)(!1), z = (0, a.useCallback)((e => e.id), []), S = null != E ? E : !R, {
                    visibleItems: I,
                    hiddenItems: F,
                    containerRefCallback: T,
                    innerContainerRefCallback: N,
                    moreButtonRef: B,
                    setItemRef: A
                } = (0, o.useCollapsible)(f, z, w), H = "collapse" === x ? I : f, _ = (0, a.useMemo)((() => "collapse" === x ? F : []), [x, F]), q = (0, a.useCallback)((e => _.includes(e)), [_]), {
                    isOpened: L,
                    open: V,
                    close: O,
                    onButtonClick: W
                } = (0, u.useDisclosure)({
                    id: b,
                    disabled: p
                }), {
                    tabsBindings: D,
                    tablistBinding: K,
                    scrollWrapBinding: U,
                    onActivate: X,
                    onHighlight: P,
                    isHighlighted: $
                } = (0, c.useTabs)({
                    id: b,
                    items: [...H, ..._],
                    activationType: h,
                    orientation: v,
                    disabled: p,
                    tablistLabelId: k,
                    tablistLabel: M,
                    scrollIntoViewOptions: n.scrollIntoViewOptions,
                    onActivate: g,
                    isActive: w,
                    isCollapsed: q,
                    isRtl: n.isRtl,
                    isDisclosureOpened: L
                }), j = _.find($), G = (0, a.useCallback)((() => {
                    const e = f.find(w);
                    e && P(e)
                }), [P, w, f]), J = (0, a.useCallback)((e => D.find((t => t.id === e.id))), [D]), Q = (0, a.useCallback)((() => {
                    O(), G(), y.current = !0
                }), [O, G]), Y = (0, a.useCallback)((() => {
                    j && (X(j), P(j, 250))
                }), [X, P, j]);
                U.ref = (0, d.useMergedRefs)([U.ref, T]), K.ref = (0, d.useMergedRefs)([K.ref, N]), K.onKeyDown = (0, l.createSafeMulticastEventHandler)((0, m.useKeyboardEventHandler)([(0, m.useKeyboardClose)(L, Q), (0, m.useKeyboardActionHandler)([13, 32], Y, (0, a.useCallback)((() => Boolean(j)), [j]))]), K.onKeyDown);
                const Z = (0, a.useCallback)((e => {
                        y.current = !0, W(e)
                    }), [y, W]),
                    ee = (0, a.useCallback)((e => {
                        e && X(e)
                    }), [X]);
                return (0, a.useEffect)((() => {
                    y.current ? y.current = !1 : (j && !L && V(), !j && L && O())
                }), [j, L, V, O]), {
                    enableActiveStateStyles: S,
                    moreButtonRef: B,
                    setItemRef: A,
                    getBindings: J,
                    handleMoreButtonClick: Z,
                    handleCollapsedItemClick: ee,
                    scrollWrapBinding: U,
                    overflowBehaviour: x,
                    tablistBinding: K,
                    visibleTabs: H,
                    hiddenTabs: _,
                    handleActivate: X,
                    isMobileTouch: R,
                    getItemId: z,
                    isDisclosureOpened: L,
                    isHighlighted: $,
                    closeDisclosure: O
                }
            }
        },
        561781: (e, t, n) => {
            "use strict";

            function a(e, t = "horizontal", n, a, l) {
                return {
                    id: e,
                    role: "tablist",
                    "aria-orientation": t,
                    "aria-label": l,
                    "aria-labelledby": a,
                    "aria-disabled": n
                }
            }

            function l(e, t, n, a, l) {
                return {
                    id: e,
                    role: "tab",
                    tabIndex: t ? 0 : -1,
                    disabled: l,
                    "aria-selected": n,
                    "aria-controls": a,
                    "aria-disabled": l
                }
            }
            n.d(t, {
                TabNames: () => s.TabNames,
                getTabAttributes: () => l,
                getTabListAttributes: () => a
            });
            var s = n(304400)
        },
        127500: (e, t, n) => {
            "use strict";
            n.d(t, {
                useGetPopupMenuPosition: () => i
            });
            var a = n(50959),
                l = n(650151);
            const s = {
                x: 0,
                y: 0
            };

            function i(e, t, n) {
                return (0, a.useCallback)((() => function(e, t, {
                    x: n = s.x,
                    y: a = s.y
                } = s) {
                    const i = (0, l.ensureNotNull)(e).getBoundingClientRect(),
                        r = {
                            x: i.left + n,
                            y: i.top + i.height + a,
                            indentFromWindow: {
                                top: 4,
                                bottom: 4,
                                left: 4,
                                right: 4
                            }
                        };
                    return t && (r.overrideWidth = i.width), r
                }(e.current, t, n)), [e, t])
            }
        },
        329820: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_THEME: () => w,
                Speedometer: () => C
            });
            var a = n(50959),
                l = n(497754),
                s = n.n(l),
                i = n(79205),
                r = n(808576);
            const o = {
                    small: n(726732),
                    medium: n(903067),
                    large: n(182640)
                },
                c = {
                    "strong-sell": -164.85,
                    sell: -127.425,
                    neutral: -90,
                    buy: -52.575,
                    "strong-buy": -15.15
                };

            function u(e) {
                const {
                    size: t,
                    recommendation: n,
                    className: l
                } = e;
                return a.createElement("div", {
                    className: s()(r.container, r[`container-${t}`], r.animated),
                    style: {
                        "--recommendation-degrees": c[n] + "deg"
                    }
                }, a.createElement("div", {
                    className: r["scale-container"]
                }, a.createElement("div", {
                    className: r.border
                }), a.createElement("div", {
                    className: r.maskWrap
                }, a.createElement("div", {
                    className: r.mask
                }, a.createElement("div", {
                    className: s()(r.background, l)
                })))), a.createElement("div", {
                    className: r.arrowWrap
                }, a.createElement("div", {
                    className: r.arrow
                }, a.createElement(i.Icon, {
                    icon: o[t],
                    className: r.icon
                }))))
            }
            var d = n(444372);

            function m() {
                return {
                    "strong-sell": d.t(null, {
                        context: "screener_rating"
                    }, n(652042)),
                    sell: d.t(null, {
                        context: "screener_rating"
                    }, n(71780)),
                    neutral: d.t(null, {
                        context: "screener_rating"
                    }, n(147094)),
                    buy: d.t(null, {
                        context: "screener_rating"
                    }, n(280903)),
                    "strong-buy": d.t(null, {
                        context: "screener_rating"
                    }, n(948826))
                }
            }
            var b = n(583364);
            const f = b;

            function h(e) {
                const {
                    size: t,
                    theme: n = f
                } = e, l = m();
                return a.createElement("div", {
                    className: s()(b.container, b[`container-${t}`])
                }, a.createElement("span", {
                    className: n.neutral
                }, l.neutral), a.createElement("div", {
                    className: s()(b.textRow, b.textRowMiddle)
                }, a.createElement("span", {
                    className: n.sell
                }, l.sell), a.createElement("span", {
                    className: n.buy
                }, l.buy)), a.createElement("div", {
                    className: s()(b.textRow, b.textRowBottom)
                }, a.createElement("span", {
                    className: n["strong-sell"]
                }, l["strong-sell"]), a.createElement("span", {
                    className: n["strong-buy"]
                }, l["strong-buy"])))
            }
            var v = n(791510);
            const p = ["strong-sell", "sell", "neutral", "buy", "strong-buy"];

            function g(e) {
                const {
                    size: t,
                    className: n
                } = e, l = m();
                return a.createElement("div", {
                    className: s()(v.container, v[`container-${e.recommendation}`], v[`container-${t}`])
                }, p.map((e => a.createElement("span", {
                    className: s()(v[`text-${t}`], v[e], n),
                    key: e
                }, l[e]))))
            }
            const w = f;

            function C(e) {
                const {
                    size: t,
                    recommendation: n,
                    theme: l = w
                } = e, {
                    container: s,
                    speedometerText: i,
                    scale: r,
                    ...o
                } = l;
                return a.createElement("div", {
                    className: s
                }, a.createElement(h, {
                    size: t,
                    theme: o
                }), a.createElement(u, {
                    size: t,
                    recommendation: n,
                    className: r
                }), a.createElement(g, {
                    size: t,
                    recommendation: n,
                    className: i
                }))
            }
        },
        55220: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareTabs: () => z
            });
            var a = n(50959),
                l = n(497754),
                s = n(444372),
                i = n(561781),
                r = n(213720),
                o = n(551080),
                c = n(169986);
            const u = (0, a.createContext)("small");
            n(586240), n(435697);
            var d = n(558215);

            function m({
                endSlot: e,
                children: t,
                className: n,
                "aria-hidden": l
            }) {
                return a.createElement("span", {
                    "aria-hidden": l,
                    className: n
                }, t && a.createElement("span", {
                    className: d.content
                }, t), e && a.createElement("span", {
                    className: d["end-slot-wrap"]
                }, e))
            }
            var b = n(121167);
            const f = (0, a.forwardRef)(((e, t) => {
                const n = a.useContext(u),
                    s = (0, a.useContext)(c.CustomBehaviourContext),
                    {
                        id: i,
                        active: r,
                        fake: o,
                        theme: d = b,
                        enableActiveStateStyles: f = s.enableActiveStateStyles,
                        hideFocusOutline: h = !1,
                        endSlot: v,
                        children: p,
                        ...g
                    } = e;
                return a.createElement("button", { ...g,
                    id: i,
                    ref: t,
                    className: l(d["square-tab-button"], r && d.selected, d[`size-${n}`], o && d.fake, !f && d["disable-active-state-styles"], h && d["disable-focus-outline"])
                }, a.createElement(m, {
                    endSlot: v,
                    className: b["tab-content"]
                }, p), a.createElement(m, {
                    "aria-hidden": !0,
                    endSlot: v,
                    className: b["tab-hidden-content"]
                }, p))
            }));
            f.displayName = "SquareTabButton";
            const h = (0, a.forwardRef)(((e, t) => {
                const {
                    item: n,
                    highlighted: l,
                    handleItemRef: s,
                    onClick: i,
                    ...r
                } = e, c = (0, a.useCallback)((() => {
                    i && i(n)
                }), [i, n]), u = (0, a.useCallback)((e => {
                    s && s(n, e), (0, o.isomorphicRef)(t)(e)
                }), [n, s, t]);
                return a.createElement(f, { ...r,
                    id: n.id,
                    onClick: c,
                    ref: u,
                    endSlot: n.endSlot
                }, n.label)
            }));
            h.displayName = "SquareTab";
            var v = n(662929),
                p = n(217802),
                g = n(634993),
                w = n(79205),
                C = n(602948),
                E = n(535140);

            function k(e) {
                const {
                    isDropped: t = !1
                } = e;
                return a.createElement(w.Icon, {
                    icon: C,
                    className: l(E["arrow-icon"], t && E.dropped)
                })
            }

            function M(e) {
                const {
                    disabled: t,
                    isOpened: n,
                    hideFocusOutline: l,
                    fake: s,
                    items: i,
                    buttonContent: r,
                    buttonRef: o,
                    buttonTheme: c,
                    isHighlighted: u,
                    onButtonClick: d,
                    onItemClick: m,
                    onClose: b
                } = e, h = (0, a.useRef)(null), w = (0, v.useMergedRefs)([o, h]);
                return a.createElement(p.PopupMenuDisclosureView, {
                    buttonRef: h,
                    listboxTabIndex: -1,
                    isOpened: n,
                    onClose: b,
                    listboxAria: {
                        "aria-hidden": !0
                    },
                    button: a.createElement(f, {
                        "aria-hidden": !0,
                        disabled: t,
                        active: n,
                        onClick: d,
                        ref: w,
                        tabIndex: -1,
                        theme: c,
                        hideFocusOutline: l,
                        fake: s
                    }, r, a.createElement(k, {
                        isDropped: n
                    })),
                    popupChildren: i.map((e => a.createElement(g.PopupMenuItem, {
                        key: e.id,
                        onClick: m,
                        onClickArg: e,
                        isActive: u(e),
                        label: e.label,
                        isDisabled: e.disabled,
                        dontClosePopup: !0
                    })))
                })
            }
            var R = n(557505),
                x = n(881025),
                y = n(550650);

            function z(e) {
                const {
                    disabled: t,
                    moreButtonContent: o = (() => s.t(null, void 0, n(437117))),
                    size: c = "small",
                    theme: d = R.defaultTheme,
                    className: m,
                    style: b,
                    "data-name": f = "square-tabs-buttons"
                } = e, v = parseInt(y[`css-value-square-tabs-${c}-gap`]), {
                    enableActiveStateStyles: p,
                    moreButtonRef: g,
                    setItemRef: w,
                    getBindings: C,
                    handleMoreButtonClick: E,
                    handleCollapsedItemClick: k,
                    scrollWrapBinding: z,
                    overflowBehaviour: S,
                    tablistBinding: I,
                    visibleTabs: F,
                    hiddenTabs: T,
                    handleActivate: N,
                    isMobileTouch: B,
                    getItemId: A,
                    isDisclosureOpened: H,
                    isHighlighted: _,
                    closeDisclosure: q
                } = (0, r.useTabsMainHandlers)(i.TabNames.SquareButtonTabs, e, {
                    isRtl: x.isRtl,
                    scrollIntoViewOptions: {
                        additionalScroll: v
                    }
                });
                return a.createElement(u.Provider, {
                    value: c
                }, a.createElement("div", { ...z,
                    className: l(d["scroll-wrap"], "scroll" === S && d["enable-scroll"], m),
                    style: b,
                    "data-name": f
                }, a.createElement("div", { ...I,
                    className: l(d["square-tabs"], d[`size-${c}`])
                }, F.map((e => {
                    var t;
                    const {
                        "aria-disabled": n,
                        ...l
                    } = null !== (t = C(e)) && void 0 !== t ? t : {};
                    return a.createElement(h, { ...l,
                        key: e.id,
                        item: e,
                        onClick: () => N(e),
                        theme: d,
                        enableActiveStateStyles: p,
                        hideFocusOutline: B,
                        ref: w(A(e)),
                        ...e.dataId && {
                            "data-id": e.dataId
                        }
                    })
                })), T.map((e => {
                    var t;
                    const {
                        "aria-disabled": n,
                        ...l
                    } = null !== (t = C(e)) && void 0 !== t ? t : {};
                    return a.createElement(h, { ...l,
                        key: e.id,
                        item: e,
                        theme: d,
                        enableActiveStateStyles: p,
                        fake: !0
                    })
                })), "collapse" === S && a.createElement(M, {
                    disabled: t,
                    isOpened: H,
                    items: T,
                    buttonContent: o({
                        hiddenTabs: T
                    }),
                    buttonRef: g,
                    buttonTheme: d,
                    isHighlighted: _,
                    onButtonClick: E,
                    onItemClick: k,
                    onClose: q,
                    hideFocusOutline: B,
                    fake: 0 === T.length
                }))))
            }
        },
        557505: (e, t, n) => {
            "use strict";
            n.d(t, {
                defaultTheme: () => i
            });
            var a = n(995683),
                l = n(558215),
                s = n(121167);
            const i = (0, a.mergeThemes)(s, l)
        },
        182640: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 117" width="12" height="117"><path fill="currentColor" d="M6 0h1.5l1.4 105.74a6 6 0 1 1-5.8 0L4.5 0H6z"/></svg>'
        },
        903067: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 77" width="8" height="77"><path fill="currentColor" d="M4 0h1l.93 69.5a4 4 0 1 1-3.86 0L3 0h1z"/></svg>'
        },
        726732: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 59" width="6" height="59"><path fill="currentColor" d="M1.55 53.37A3 3 0 0 0 3 59a3 3 0 0 0 1.45-5.63L3.75 0h-1.5l-.7 53.37z"/></svg>'
        }
    }
]);