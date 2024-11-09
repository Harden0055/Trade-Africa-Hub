(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34597], {
        456057: e => {
            e.exports = {
                "tv-circle-logo": "tv-circle-logo-PsAlMQQF",
                "tv-circle-logo--xxxsmall": "tv-circle-logo--xxxsmall-PsAlMQQF",
                "tv-circle-logo--xxsmall": "tv-circle-logo--xxsmall-PsAlMQQF",
                "tv-circle-logo--xsmall": "tv-circle-logo--xsmall-PsAlMQQF",
                "tv-circle-logo--small": "tv-circle-logo--small-PsAlMQQF",
                "tv-circle-logo--medium": "tv-circle-logo--medium-PsAlMQQF",
                "tv-circle-logo--large": "tv-circle-logo--large-PsAlMQQF",
                "tv-circle-logo--xlarge": "tv-circle-logo--xlarge-PsAlMQQF",
                "tv-circle-logo--xxlarge": "tv-circle-logo--xxlarge-PsAlMQQF",
                "tv-circle-logo--xxxlarge": "tv-circle-logo--xxxlarge-PsAlMQQF",
                "tv-circle-logo--visually-hidden": "tv-circle-logo--visually-hidden-PsAlMQQF"
            }
        },
        553853: e => {
            e.exports = {
                table: "table-hvDpy38G",
                tableWrapper: "tableWrapper-hvDpy38G",
                container: "container-hvDpy38G",
                title: "title-hvDpy38G",
                link: "link-hvDpy38G",
                icon: "icon-hvDpy38G",
                header: "header-hvDpy38G",
                row: "row-hvDpy38G",
                cell: "cell-hvDpy38G",
                largePadding: "largePadding-hvDpy38G",
                phoneLandscape: "phoneLandscape-hvDpy38G",
                tabletVertical: "tabletVertical-hvDpy38G",
                tabletLandscape: "tabletLandscape-hvDpy38G",
                buyColor: "buyColor-hvDpy38G",
                sellColor: "sellColor-hvDpy38G",
                neutralColor: "neutralColor-hvDpy38G"
            }
        },
        802166: e => {
            e.exports = {}
        },
        518561: e => {
            e.exports = {
                scrollWrap: "scrollWrap-FaOvTD2r"
            }
        },
        131987: e => {
            e.exports = {
                container: "container-Tv7LSjUz",
                overlayScrollWrap: "overlayScrollWrap-Tv7LSjUz",
                wrapper: "wrapper-Tv7LSjUz"
            }
        },
        151810: e => {
            e.exports = {
                wrap: "wrap-vSb6C0Bj",
                "wrap--horizontal": "wrap--horizontal-vSb6C0Bj",
                bar: "bar-vSb6C0Bj",
                barInner: "barInner-vSb6C0Bj",
                "barInner--horizontal": "barInner--horizontal-vSb6C0Bj",
                "bar--horizontal": "bar--horizontal-vSb6C0Bj"
            }
        },
        667797: e => {
            e.exports = {
                menuWrap: "menuWrap-Kq3ruQo8",
                isMeasuring: "isMeasuring-Kq3ruQo8",
                scrollWrap: "scrollWrap-Kq3ruQo8",
                momentumBased: "momentumBased-Kq3ruQo8",
                menuBox: "menuBox-Kq3ruQo8",
                isHidden: "isHidden-Kq3ruQo8"
            }
        },
        509059: e => {
            e.exports = {
                "tablet-small-breakpoint": "(max-width: 430px)",
                item: "item-jFqVJoPk",
                hovered: "hovered-jFqVJoPk",
                isDisabled: "isDisabled-jFqVJoPk",
                isActive: "isActive-jFqVJoPk",
                shortcut: "shortcut-jFqVJoPk",
                toolbox: "toolbox-jFqVJoPk",
                withIcon: "withIcon-jFqVJoPk",
                "round-icon": "round-icon-jFqVJoPk",
                icon: "icon-jFqVJoPk",
                labelRow: "labelRow-jFqVJoPk",
                label: "label-jFqVJoPk",
                showOnHover: "showOnHover-jFqVJoPk",
                "disclosure-item-circle-logo": "disclosure-item-circle-logo-jFqVJoPk",
                showOnFocus: "showOnFocus-jFqVJoPk"
            }
        },
        488587: e => {
            e.exports = {
                "container-strong-sell": "container-strong-sell-Tat_6ZmA",
                "strong-sell": "strong-sell-Tat_6ZmA",
                speedometerText: "speedometerText-Tat_6ZmA",
                "container-sell": "container-sell-Tat_6ZmA",
                sell: "sell-Tat_6ZmA",
                "container-neutral": "container-neutral-Tat_6ZmA",
                neutral: "neutral-Tat_6ZmA",
                "container-buy": "container-buy-Tat_6ZmA",
                buy: "buy-Tat_6ZmA",
                "container-strong-buy": "container-strong-buy-Tat_6ZmA",
                "strong-buy": "strong-buy-Tat_6ZmA",
                speedometerTextDefault: "speedometerTextDefault-Tat_6ZmA",
                scale: "scale-Tat_6ZmA"
            }
        },
        607423: (e, t, r) => {
            "use strict";
            r.d(t, {
                isNativeUIInteraction: () => a,
                isTextEditingField: () => o
            });
            var n = r(591800);

            function o(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function a(e, t) {
                if (!t) return !1;
                const r = 255 & e;
                if (27 === r || r >>> 4 == 7) return !1;
                switch (e ^ r) {
                    case n.Modifiers.Alt:
                        return (38 === r || 40 === r) && "SELECT" === t.tagName || o(t);
                    case n.Modifiers.Alt + n.Modifiers.Shift:
                        return o(t);
                    case n.Modifiers.Mod:
                        if (67 === r || !n.isMacKeyboard && 45 === r) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return o(t);
                    case n.Modifiers.Mod + n.Modifiers.Shift:
                        return r >= 33 && r <= 40 && o(t);
                    case n.Modifiers.Shift:
                    case 0:
                        return 9 === r ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t) || 13 === r || 32 === r || 9 === r) && ("form" in t || t.isContentEditable)
                }
                return !1
            }
        },
        745269: (e, t, r) => {
            "use strict";
            r.d(t, {
                dur: () => n,
                easingFunc: () => o
            });
            const n = 350,
                o = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => --e * e * e + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - --e * e * e * e,
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 + --e * e * e * e * e,
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                }
        },
        277762: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    CollapseDirection: () => n
                }),
                function(e) {
                    e.StartFirst = "start-first", e.EndFirst = "end-first"
                }(n || (n = {}))
        },
        774218: (e, t, r) => {
            "use strict";
            r.d(t, {
                useIsomorphicLayoutEffect: () => o
            });
            var n = r(50959);

            function o(e, t) {
                ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(e, t)
            }
        },
        940194: (e, t, r) => {
            "use strict";

            function n(e, t, r, n, o) {
                function a(o) {
                    if (e > o.timeStamp) return;
                    const a = o.target;
                    void 0 !== r && null !== t && null !== a && a.ownerDocument === n && (t.contains(a) || r(o))
                }
                return o.click && n.addEventListener("click", a, !1), o.mouseDown && n.addEventListener("mousedown", a, !1), o.touchEnd && n.addEventListener("touchend", a, !1), o.touchStart && n.addEventListener("touchstart", a, !1), () => {
                    n.removeEventListener("click", a, !1), n.removeEventListener("mousedown", a, !1), n.removeEventListener("touchend", a, !1), n.removeEventListener("touchstart", a, !1)
                }
            }
            r.d(t, {
                addOutsideEventListener: () => n
            })
        },
        31241: (e, t, r) => {
            "use strict";
            r.d(t, {
                useOutsideEvent: () => i
            });
            var n = r(50959),
                o = r(774218),
                a = r(940194);

            function i(e) {
                const {
                    click: t,
                    mouseDown: r,
                    touchEnd: i,
                    touchStart: s,
                    handler: l,
                    reference: c
                } = e, u = (0, n.useRef)(null), m = (0, n.useRef)("undefined" == typeof window ? 0 : new window.CustomEvent("timestamp").timeStamp);
                return (0, o.useIsomorphicLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: r,
                            touchEnd: i,
                            touchStart: s
                        },
                        n = c ? c.current : u.current;
                    return (0, a.addOutsideEventListener)(m.current, n, l, document, e)
                }), [t, r, i, s, l]), c || u
            }
        },
        906481: (e, t, r) => {
            "use strict";
            r.d(t, {
                SubmenuContext: () => o,
                SubmenuHandler: () => a
            });
            var n = r(50959);
            const o = n.createContext(null);

            function a(e) {
                const [t, r] = (0,
                    n.useState)(null), a = (0, n.useRef)(null), i = (0, n.useRef)(new Map);
                return (0, n.useEffect)((() => () => {
                    null !== a.current && clearTimeout(a.current)
                }), []), n.createElement(o.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== a.current && (clearTimeout(a.current), a.current = null);
                            null === t ? r(e) : a.current = setTimeout((() => {
                                a.current = null, r(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return i.current.set(e, t), () => {
                                i.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(i.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        910958: (e, t, r) => {
            "use strict";
            r.d(t, {
                Portal: () => n.Portal,
                PortalContext: () => n.PortalContext
            });
            var n = r(74446)
        },
        74446: (e, t, r) => {
            "use strict";
            r.d(t, {
                Portal: () => c,
                PortalContext: () => u
            });
            var n = r(50959),
                o = r(632227),
                a = r(925931),
                i = r(351290),
                s = r(593110),
                l = r(474647);
            class c extends n.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.nanoid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "";
                    const t = this.props.className;
                    return t && ("string" == typeof t ? e.classList.add(t) : e.classList.add(...t)), this.props.shouldTrapFocus && !e.hasAttribute(s.FOCUS_TRAP_DATA_ATTRIBUTE) && e.setAttribute(s.FOCUS_TRAP_DATA_ATTRIBUTE, "true"), this.props["aria-hidden"] && e.setAttribute("aria-hidden", "true"), o.createPortal(n.createElement(u.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, i.getRootOverlapManager)() : this.context
                }
            }
            c.contextType = l.SlotContext;
            const u = n.createContext(null)
        },
        474647: (e, t, r) => {
            "use strict";
            r.d(t, {
                Slot: () => n.Slot,
                SlotContext: () => n.SlotContext
            });
            var n = r(581585)
        },
        581585: (e, t, r) => {
            "use strict";
            r.d(t, {
                Slot: () => o,
                SlotContext: () => a
            });
            var n = r(50959);
            class o extends n.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return n.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const a = n.createContext(null)
        },
        304400: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    TabNames: () => n
                }),
                function(e) {
                    e.SquareButtonTabs = "square-button-tabs", e.UnderlineButtonTabs = "underline-button-tabs", e.UnderlineAnchorTabs = "underline-anchor-tabs", e.RoundAnchorTabs = "round-anchor-tabs", e.RoundButtonTabs = "round-button-tabs", e.LightButtonTabs = "light-button-tabs"
                }(n || (n = {}))
        },
        593110: (e, t, r) => {
            "use strict";
            r.d(t, {
                FOCUS_TRAP_DATA_ATTRIBUTE: () => n
            });
            const n = "data-focus-trap"
        },
        184277: (e, t, r) => {
            "use strict";

            function n(e) {
                return 0 === e.detail
            }
            r.d(t, {
                isKeyboardClick: () => n
            })
        },
        763341: (e, t, r) => {
            "use strict";

            function n(...e) {
                return t => {
                    for (const r of e) void 0 !== r && r(t)
                }
            }
            r.d(t, {
                createSafeMulticastEventHandler: () => n
            })
        },
        849204: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                LogoSize: () => n,
                LogoUrlResolver: () => i,
                getLogoUrlResolver: () => l
            });
            var n, o = r(650151),
                a = r(588948);
            ! function(e) {
                e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large"
            }(n || (n = {}));
            class i {
                constructor(e) {
                    (0,
                        o.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getSymbolLogoUrl(e, t) {
                    switch ((0, o.assert)("" !== e, "logo id must be a non-empty string"), t) {
                        case n.Medium:
                            return this._baseUrl + `${e}.svg`;
                        case n.Large:
                            return this._baseUrl + `${e}--big.svg`
                    }
                }
                getCountryFlagUrl(e, t) {
                    return this.getSymbolLogoUrl("country/" + e, t)
                }
                getCryptoLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("crypto/" + e, t)
                }
                getProviderLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("provider/" + e, t)
                }
                getSourceLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("source/" + e, t)
                }
                getBlockchainContractLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("blockchain/" + e, t)
                }
            }
            let s;

            function l() {
                return function() {
                    if (!s) {
                        const e = (0, a.getInitData)(),
                            t = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                        s = new i(t)
                    }
                    return s
                }()
            }
        },
        345848: (e, t, r) => {
            "use strict";
            r.d(t, {
                trackEvent: () => i
            });
            r(251954);
            var n = r(764829);
            const o = (0, r(338619).getLogger)("Common.TrackEvent");
            let a = !1;
            const i = (e, t, r) => {
                if (a) return;
                let i = (e ? e + ":" : "") + t;
                r && (i += " " + r), o.logNormal(i), n.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: r
                })
            };
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = i)
        },
        224743: (e, t, r) => {
            "use strict";
            r.d(t, {
                globalCloseDelegate: () => n,
                globalCloseMenu: () => o
            });
            const n = new(r(942634).Delegate);

            function o() {
                n.fire()
            }
        },
        377318: (e, t, r) => {
            "use strict";
            r.d(t, {
                MenuContext: () => n
            });
            const n = r(50959).createContext(null)
        },
        175071: (e, t, r) => {
            "use strict";
            r.d(t, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => S
            });
            var n = r(50959),
                o = r(497754),
                a = r.n(o),
                i = r(650151),
                s = r(750139),
                l = r(228609),
                c = r(670797),
                u = r(224743),
                m = r(351290),
                d = r(799786),
                p = r(906481),
                g = r(377318),
                h = r(667797);
            const v = h;
            class S extends n.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new m.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleCustomRemeasureDelegate = () => {
                        this._resizeForced(), this._handleMeasure()
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var r, n, o, a, l, c, u, m, d, p, g, h;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: v
                        } = this.props, S = (0, i.ensureNotNull)(this._containerRef);
                        let E = S.getBoundingClientRect();
                        const f = document.documentElement.clientHeight,
                            b = document.documentElement.clientWidth,
                            y = null !== (r = this.props.closeOnScrollOutsideOffset) && void 0 !== r ? r : 0;
                        let x = f - 0 - y;
                        const T = E.height > x;
                        if (T) {
                            (0, i.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", E = S.getBoundingClientRect()
                        }
                        const {
                            width: C,
                            height: M
                        } = E, A = "function" == typeof v ? v({
                            contentWidth: C,
                            contentHeight: M,
                            availableWidth: b,
                            availableHeight: f
                        }) : v, R = null !== (o = null === (n = null == A ? void 0 : A.indentFromWindow) || void 0 === n ? void 0 : n.left) && void 0 !== o ? o : 0, k = b - (null !== (a = A.overrideWidth) && void 0 !== a ? a : C) - (null !== (c = null === (l = null == A ? void 0 : A.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== c ? c : 0), _ = (0, s.clamp)(A.x, R, Math.max(R, k)), N = (null !== (m = null === (u = null == A ? void 0 : A.indentFromWindow) || void 0 === u ? void 0 : u.top) && void 0 !== m ? m : 0) + y, w = f - (null !== (d = A.overrideHeight) && void 0 !== d ? d : M) - (null !== (g = null === (p = null == A ? void 0 : A.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== g ? g : 0);
                        let P = (0, s.clamp)(A.y, N, Math.max(N, w));
                        if (A.forbidCorrectYCoord && P < A.y && (x -= A.y - P, P = A.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && A.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const D = null !== (h = A.overrideHeight) && void 0 !== h ? h : T ? x : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : D,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : A.overrideWidth,
                            appearingPosition: {
                                x: _,
                                y: P
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this.props.doNotRestorePosition || this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, i.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, i.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
                    }, this._resizeForced = () => {
                        this.setState({
                            appearingMenuHeight: void 0,
                            appearingMenuWidth: void 0,
                            appearingPosition: void 0,
                            isMeasureValid: void 0
                        })
                    }, this._resize = () => {
                        null === this._raf && (this._raf = requestAnimationFrame((() => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0
                            }), this._raf = null
                        })))
                    }, this._handleGlobalClose = e => {
                        this.props.onClose(e)
                    }, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }, this._handleScroll = () => {
                        this._scroll = (0, i.ensureNotNull)(this._scrollWrapRef).scrollTop
                    }, this._handleScrollOutsideEnd = () => {
                        clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            })
                        }), 80)
                    }, this._handleScrollOutside = e => {
                        e.target !== this._scrollWrapRef && (this._handleScrollOutsideEnd(), null === this._scrollRaf && (this._scrollRaf = requestAnimationFrame((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            }), this._scrollRaf = null
                        }))))
                    }, this.state = {}
                }
                componentDidMount() {
                    this._handleMeasure({
                        callback: this.props.onOpen
                    });
                    const {
                        customCloseDelegate: e = u.globalCloseDelegate,
                        customRemeasureDelegate: t
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), null == t || t.subscribe(null, this._handleCustomRemeasureDelegate), window.addEventListener("resize", this._resize);
                    const r = null !== this.context;
                    this._hotkeys || r || (this._hotkeys = d.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => {
                            this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleGlobalClose()
                        }
                    })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    })
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = u.globalCloseDelegate,
                        customRemeasureDelegate: t
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), null == t || t.unsubscribe(null, this._handleCustomRemeasureDelegate), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": r,
                        "aria-labelledby": o,
                        "aria-activedescendant": i,
                        "aria-hidden": s,
                        "aria-describedby": u,
                        "aria-invalid": m,
                        children: d,
                        minWidth: v,
                        theme: S = h,
                        className: f,
                        maxHeight: b,
                        onMouseOver: y,
                        onMouseOut: x,
                        onKeyDown: T,
                        onFocus: C,
                        onBlur: M
                    } = this.props, {
                        appearingMenuHeight: A,
                        appearingMenuWidth: R,
                        appearingPosition: k,
                        isMeasureValid: _
                    } = this.state, N = {
                        "--ui-kit-menu-max-width": `${k&&k.x}px`,
                        maxWidth: "calc(100vw - var(--ui-kit-menu-max-width) - 6px)"
                    };
                    return n.createElement(g.MenuContext.Provider, {
                        value: this
                    }, n.createElement(p.SubmenuHandler, null, n.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, n.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": r,
                        "aria-labelledby": o,
                        "aria-activedescendant": i,
                        "aria-hidden": s,
                        "aria-describedby": u,
                        "aria-invalid": m,
                        className: a()(f, S.menuWrap, !_ && S.isMeasuring),
                        style: {
                            height: A,
                            left: k && k.x,
                            minWidth: v,
                            position: "fixed",
                            top: k && k.y,
                            width: R,
                            ...this.props.limitMaxWidth && N
                        },
                        "data-name": this.props["data-name"],
                        "data-tooltip-show-on-focus": this.props["data-tooltip-show-on-focus"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: y,
                        onMouseOut: x,
                        onKeyDown: T,
                        onFocus: C,
                        onBlur: M
                    }, n.createElement("div", {
                        className: a()(S.scrollWrap, !this.props.noMomentumBasedScroll && S.momentumBased),
                        style: {
                            overflowY: void 0 !== A ? "scroll" : "auto",
                            maxHeight: b
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, n.createElement(E, {
                        className: S.menuBox
                    }, d)))), n.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
                focus(e) {
                    var t;
                    null === (t = this._containerRef) || void 0 === t || t.focus(e)
                }
                blur() {
                    var e;
                    null === (e = this._containerRef) || void 0 === e || e.blur()
                }
            }

            function E(e) {
                const t = (0, i.ensureNotNull)((0, n.useContext)(p.SubmenuContext)),
                    r = n.useRef(null);
                return n.createElement("div", {
                    ref: r,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (n = e.target, null === (o = r.current) || void 0 === o ? void 0 : o.contains(n)))) return;
                        var n, o;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            S.contextType = p.SubmenuContext
        },
        320116: (e, t, r) => {
            "use strict";
            r.d(t, {
                CloseDelegateContext: () => a
            });
            var n = r(50959),
                o = r(224743);
            const a = n.createContext(o.globalCloseDelegate)
        },
        707533: (e, t, r) => {
            "use strict";
            r.d(t, {
                Portal: () => n.Portal,
                PortalContext: () => n.PortalContext
            });
            var n = r(910958)
        },
        670797: (e, t, r) => {
            "use strict";
            r.d(t, {
                Slot: () => n.Slot,
                SlotContext: () => n.SlotContext
            });
            var n = r(474647)
        },
        284978: e => {
            e.exports = {
                mainWrapper: "mainWrapper-WQhUXl5J"
            }
        },
        607029: e => {
            e.exports = {
                container: "container-h_9QHVVc",
                "tablet-vertical": "tablet-vertical-h_9QHVVc",
                "tablet-landscape": "tablet-landscape-h_9QHVVc",
                laptop: "laptop-h_9QHVVc",
                short: "short-h_9QHVVc",
                oscillators: "oscillators-h_9QHVVc",
                summary: "summary-h_9QHVVc",
                movingAverages: "movingAverages-h_9QHVVc"
            }
        },
        679052: e => {
            e.exports = {
                speedometerWrapper: "speedometerWrapper-uRyD4N_Y",
                laptop: "laptop-uRyD4N_Y",
                countersWrapper: "countersWrapper-uRyD4N_Y",
                counterWrapper: "counterWrapper-uRyD4N_Y",
                counterNumber: "counterNumber-uRyD4N_Y",
                small: "small-uRyD4N_Y",
                medium: "medium-uRyD4N_Y",
                large: "large-uRyD4N_Y",
                counterTitle: "counterTitle-uRyD4N_Y",
                buyColor: "buyColor-uRyD4N_Y",
                sellColor: "sellColor-uRyD4N_Y",
                neutralColor: "neutralColor-uRyD4N_Y",
                gaugeTitle: "gaugeTitle-uRyD4N_Y"
            }
        },
        827964: e => {
            e.exports = {
                tabsWrap: "tabsWrap-F6VayVuW",
                "horizontal-scroll": "horizontal-scroll-F6VayVuW",
                tabsSquish: "tabsSquish-F6VayVuW",
                background: "background-F6VayVuW",
                speedometersContainer: "speedometersContainer-F6VayVuW",
                alignStart: "alignStart-F6VayVuW",
                topMargin: "topMargin-F6VayVuW",
                speedometersContainerNoData: "speedometersContainerNoData-F6VayVuW",
                speedometerWrapper: "speedometerWrapper-F6VayVuW",
                summary: "summary-F6VayVuW",
                speedometerTitle: "speedometerTitle-F6VayVuW"
            }
        },
        661945: (e, t, r) => {
            "use strict";
            r(566953);
            var n = r(444372),
                o = r(50959),
                a = r(632227),
                i = (r(668159), r(625545));
            const s = new(r(375397).WatchedValue);
            s.subscribe((e => {
                ! function(e, t = window) {
                    const r = "theme-" + e,
                        n = t.document.documentElement.classList;
                    for (const e of Array.from(n)) e.startsWith("theme-") && e !== r && n.remove(e);
                    n.add(r)
                }(e, window)
            }));
            var l = r(497754),
                c = r(650151),
                u = (r(466281), r(881025)),
                m = r(433524),
                d = r(79205),
                p = r(455800);
            r(802166);

            function g(e) {
                return o.createElement("div", {
                    className: "tv-error-card"
                }, o.createElement(d.Icon, {
                    className: "tv-error-card__icon",
                    icon: p
                }), o.createElement("div", {
                    className: "tv-error-card__message"
                }, e.text ? e.text : n.t(null, void 0, r(653273))), e.verticalAlignShift ? o.createElement("div", {
                    style: {
                        paddingBottom: e.verticalAlignShift
                    }
                }) : null)
            }
            var h = r(735211);
            r(151810);
            r(518561);
            r(638456);
            r(131987);
            var v;
            r(117818), r(553853);
            ! function(e) {
                e.Buy = "buyColor", e.Sell = "sellColor", e.Neutral = "neutralColor"
            }(v || (v = {}));
            const S = e => e.hasOwnProperty("cssClass");
            o.PureComponent;
            const E = {
                    STRONG_BUY: {
                        key: "Strong Buy",
                        get title() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(632309))
                        },
                        get shortTitle() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(632309))
                        },
                        cssClass: "tv-screener-table__signal--strong-buy"
                    },
                    BUY: {
                        key: "Buy",
                        get title() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(280903))
                        },
                        get shortTitle() {
                            return n.t(null, {
                                context: "first_letter_of_Buy"
                            }, r(355777))
                        },
                        cssClass: "tv-screener-table__signal--buy"
                    },
                    STRONG_SELL: {
                        key: "Strong Sell",
                        get title() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(488234))
                        },
                        get shortTitle() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(488234))
                        },
                        cssClass: "tv-screener-table__signal--strong-sell"
                    },
                    SELL: {
                        key: "Sell",
                        get title() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(71780))
                        },
                        get shortTitle() {
                            return n.t(null, {
                                context: "first_letter_of_Sell"
                            }, r(992949))
                        },
                        cssClass: "tv-screener-table__signal--sell"
                    },
                    NEUTRAL: {
                        key: "Neutral",
                        get title() {
                            return n.t(null, {
                                context: "screener_rating"
                            }, r(147094))
                        },
                        get shortTitle() {
                            return n.t(null, {
                                context: "first_letter_of_Neutral"
                            }, r(695879))
                        },
                        cssClass: "tv-screener-table__signal--neutral"
                    }
                },
                f = {
                    computeMASignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e < t && (r = E.BUY), e > t && (r = E.SELL), r
                    },
                    computeRSISignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e < 30 && t < e && (r = E.BUY), e > 70 && t > e && (r = E.SELL), r
                    },
                    computeStochSignal: (e, t, r, n) => {
                        let o = E.NEUTRAL;
                        return e < 20 && t < 20 && e > t && r < n && (o = E.BUY), e > 80 && t > 80 && e < t && r > n && (o = E.SELL), o
                    },
                    computeCCI20Signal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e < -100 && e > t && (r = E.BUY), e > 100 && e < t && (r = E.SELL), r
                    },
                    computeADXSignal: (e, t, r, n, o) => {
                        let a = E.NEUTRAL;
                        return e > 20 && n < o && t > r && (a = E.BUY), e > 20 && n > o && t < r && (a = E.SELL), a
                    },
                    computeAOSignal: (e, t, r) => {
                        let n = E.NEUTRAL;
                        return (e > 0 && t < 0 || e > 0 && t > 0 && e > t && r > t) && (n = E.BUY), (e < 0 && t > 0 || e < 0 && t < 0 && e < t && r < t) && (n = E.SELL), n
                    },
                    computeMomSignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e > t && (r = E.BUY), e < t && (r = E.SELL), r
                    },
                    computeMACDSignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e > t && (r = E.BUY), e < t && (r = E.SELL), r
                    },
                    computeBBBuySignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e < t && (r = E.BUY), r
                    },
                    computeBBSellSignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e > t && (r = E.SELL), r
                    },
                    computePSARSignal: (e, t) => {
                        let r = E.NEUTRAL;
                        return e < t && (r = E.BUY), e > t && (r = E.SELL), r
                    },
                    computeRecommendSignal: e => {
                        let t;
                        return e >= -1 && e < -.5 && (t = E.STRONG_SELL), e >= -.5 && e < -.1 && (t = E.SELL), e >= -.1 && e <= .1 && (t = E.NEUTRAL), e > .1 && e <= .5 && (t = E.BUY), e > .5 && e <= 1 && (t = E.STRONG_BUY), t
                    },
                    computeSimpleSignal: e => {
                        let t = E.NEUTRAL;
                        return -1 === e && (t = E.SELL), 1 === e && (t = E.BUY), t
                    }
                },
                b = {
                    "Recommend.Other": {
                        get title() {
                            return n.t(null, void 0, r(869945))
                        },
                        signalComputation: f.computeRecommendSignal
                    },
                    "Recommend.All": {
                        get title() {
                            return n.t(null, void 0, r(489415))
                        },
                        signalComputation: f.computeRecommendSignal
                    },
                    "Recommend.MA": {
                        get title() {
                            return n.t(null, void 0, r(510759))
                        },
                        signalComputation: f.computeRecommendSignal
                    },
                    RSI: {
                        get title() {
                            return n.t(null, void 0, r(444554))
                        },
                        additionalColumns: ["RSI", "RSI[1]"],
                        signalComputation: f.computeRSISignal
                    },
                    "Stoch.K": {
                        get title() {
                            return n.t(null, void 0, r(855483))
                        },
                        additionalColumns: ["Stoch.K", "Stoch.D", "Stoch.K[1]", "Stoch.D[1]"],
                        signalComputation: f.computeStochSignal
                    },
                    CCI20: {
                        get title() {
                            return n.t(null, void 0, r(893733))
                        },
                        additionalColumns: ["CCI20", "CCI20[1]"],
                        signalComputation: f.computeCCI20Signal
                    },
                    ADX: {
                        get title() {
                            return n.t(null, void 0, r(500627))
                        },
                        additionalColumns: ["ADX", "ADX+DI", "ADX-DI", "ADX+DI[1]", "ADX-DI[1]"],
                        signalComputation: f.computeADXSignal
                    },
                    AO: {
                        get title() {
                            return n.t(null, void 0, r(510206))
                        },
                        additionalColumns: ["AO", "AO[1]", "AO[2]"],
                        signalComputation: f.computeAOSignal
                    },
                    Mom: {
                        get title() {
                            return n.t(null, void 0, r(468222))
                        },
                        additionalColumns: ["Mom", "Mom[1]"],
                        signalComputation: f.computeMomSignal
                    },
                    "MACD.macd": {
                        get title() {
                            return n.t(null, void 0, r(526469))
                        },
                        additionalColumns: ["MACD.macd", "MACD.signal"],
                        signalComputation: f.computeMACDSignal
                    },
                    "Stoch.RSI.K": {
                        get title() {
                            return n.t(null, void 0, r(209288))
                        },
                        additionalColumns: ["Rec.Stoch.RSI"],
                        signalComputation: f.computeSimpleSignal
                    },
                    "W.R": {
                        get title() {
                            return n.t(null, void 0, r(31110))
                        },
                        additionalColumns: ["Rec.WR"],
                        signalComputation: f.computeSimpleSignal
                    },
                    BBPower: {
                        get title() {
                            return n.t(null, {
                                context: "study"
                            }, r(961333))
                        },
                        additionalColumns: ["Rec.BBPower"],
                        signalComputation: f.computeSimpleSignal
                    },
                    UO: {
                        get title() {
                            return n.t(null, void 0, r(297506))
                        },
                        additionalColumns: ["Rec.UO"],
                        signalComputation: f.computeSimpleSignal
                    },
                    EMA10: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "10"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA10", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA10: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "10"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA10", "close"],
                        signalComputation: f.computeMASignal
                    },
                    EMA20: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "20"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA20", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA20: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "20"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA20", "close"],
                        signalComputation: f.computeMASignal
                    },
                    EMA30: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "30"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA30", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA30: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "30"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA30", "close"],
                        signalComputation: f.computeMASignal
                    },
                    EMA50: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "50"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA50", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA50: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "50"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA50", "close"],
                        signalComputation: f.computeMASignal
                    },
                    EMA100: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "100"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA100", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA100: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "100"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA100", "close"],
                        signalComputation: f.computeMASignal
                    },
                    EMA200: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "200"
                                }
                            }, r(513079))
                        },
                        additionalColumns: ["EMA200", "close"],
                        signalComputation: f.computeMASignal
                    },
                    SMA200: {
                        get title() {
                            return n.t(null, {
                                replace: {
                                    number: "200"
                                }
                            }, r(141337))
                        },
                        additionalColumns: ["SMA200", "close"],
                        signalComputation: f.computeMASignal
                    },
                    "Ichimoku.BLine": {
                        get title() {
                            return n.t(null, void 0, r(286153))
                        },
                        additionalColumns: ["Rec.Ichimoku"],
                        signalComputation: f.computeSimpleSignal
                    },
                    VWMA: {
                        get title() {
                            return n.t(null, void 0, r(991039))
                        },
                        additionalColumns: ["Rec.VWMA"],
                        signalComputation: f.computeSimpleSignal
                    },
                    HullMA9: {
                        get title() {
                            return n.t(null, void 0, r(831572))
                        },
                        additionalColumns: ["Rec.HullMA9"],
                        signalComputation: f.computeSimpleSignal
                    },
                    "Pivot.M.Classic.S3": {
                        get title() {
                            return n.t(null, void 0, r(540685))
                        }
                    },
                    "Pivot.M.Classic.S2": {
                        get title() {
                            return n.t(null, void 0, r(403135))
                        }
                    },
                    "Pivot.M.Classic.S1": {
                        get title() {
                            return n.t(null, void 0, r(223647))
                        }
                    },
                    "Pivot.M.Classic.Middle": {
                        get title() {
                            return n.t(null, void 0, r(654807))
                        }
                    },
                    "Pivot.M.Classic.R1": {
                        get title() {
                            return n.t(null, void 0, r(232015))
                        }
                    },
                    "Pivot.M.Classic.R2": {
                        get title() {
                            return n.t(null, void 0, r(974467))
                        }
                    },
                    "Pivot.M.Classic.R3": {
                        get title() {
                            return n.t(null, void 0, r(903801))
                        }
                    },
                    "Pivot.M.Fibonacci.S3": {
                        get title() {
                            return n.t(null, void 0, r(4937))
                        }
                    },
                    "Pivot.M.Fibonacci.S2": {
                        get title() {
                            return n.t(null, void 0, r(79698))
                        }
                    },
                    "Pivot.M.Fibonacci.S1": {
                        get title() {
                            return n.t(null, void 0, r(990180))
                        }
                    },
                    "Pivot.M.Fibonacci.Middle": {
                        get title() {
                            return n.t(null, void 0, r(628462))
                        }
                    },
                    "Pivot.M.Fibonacci.R1": {
                        get title() {
                            return n.t(null, void 0, r(992200))
                        }
                    },
                    "Pivot.M.Fibonacci.R2": {
                        get title() {
                            return n.t(null, void 0, r(530871))
                        }
                    },
                    "Pivot.M.Fibonacci.R3": {
                        get title() {
                            return n.t(null, void 0, r(693496))
                        }
                    },
                    "Pivot.M.Camarilla.S3": {
                        get title() {
                            return n.t(null, void 0, r(142703))
                        }
                    },
                    "Pivot.M.Camarilla.S2": {
                        get title() {
                            return n.t(null, void 0, r(128938))
                        }
                    },
                    "Pivot.M.Camarilla.S1": {
                        get title() {
                            return n.t(null, void 0, r(28429))
                        }
                    },
                    "Pivot.M.Camarilla.Middle": {
                        get title() {
                            return n.t(null, void 0, r(197758))
                        }
                    },
                    "Pivot.M.Camarilla.R1": {
                        get title() {
                            return n.t(null, void 0, r(962748))
                        }
                    },
                    "Pivot.M.Camarilla.R2": {
                        get title() {
                            return n.t(null, void 0, r(518732))
                        }
                    },
                    "Pivot.M.Camarilla.R3": {
                        get title() {
                            return n.t(null, void 0, r(879438))
                        }
                    },
                    "Pivot.M.Woodie.S3": {
                        get title() {
                            return n.t(null, void 0, r(891660))
                        }
                    },
                    "Pivot.M.Woodie.S2": {
                        get title() {
                            return n.t(null, void 0, r(203566))
                        }
                    },
                    "Pivot.M.Woodie.S1": {
                        get title() {
                            return n.t(null, void 0, r(536510))
                        }
                    },
                    "Pivot.M.Woodie.Middle": {
                        get title() {
                            return n.t(null, void 0, r(357527))
                        }
                    },
                    "Pivot.M.Woodie.R1": {
                        get title() {
                            return n.t(null, void 0, r(192732))
                        }
                    },
                    "Pivot.M.Woodie.R2": {
                        get title() {
                            return n.t(null, void 0, r(574023))
                        }
                    },
                    "Pivot.M.Woodie.R3": {
                        get title() {
                            return n.t(null, void 0, r(212993))
                        }
                    },
                    "Pivot.M.Demark.S1": {
                        get title() {
                            return n.t(null, void 0, r(46685))
                        }
                    },
                    "Pivot.M.Demark.Middle": {
                        get title() {
                            return n.t(null, void 0, r(695847))
                        }
                    },
                    "Pivot.M.Demark.R1": {
                        get title() {
                            return n.t(null, void 0, r(742575))
                        }
                    }
                };

            function y(e) {
                const t = new Set;
                return e.forEach((e => {
                    const r = b[e];
                    if (r) {
                        (r.additionalColumns || []).forEach((e => {
                            t.add(e)
                        }))
                    }
                    t.add(e)
                })), Array.from(t)
            }
            const x = e => {
                switch (e) {
                    case "Sell":
                    case "Strong Sell":
                        return v.Sell;
                    case "Buy":
                    case "Strong Buy":
                        return v.Buy;
                    case "Neutral":
                        return v.Neutral;
                    default:
                        return ""
                }
            };

            function T(e) {
                const t = [0, 0, 0];
                return e.forEach((e => {
                    const r = e.action;
                    if (S(r)) switch (r.cssClass) {
                        case v.Sell:
                            t[0]++;
                            break;
                        case v.Buy:
                            t[2]++;
                            break;
                        default:
                            t[1]++
                    }
                })), t
            }
            const C = ["Recommend.Other", "Recommend.All", "Recommend.MA"],
                M = ["RSI", "Stoch.K", "CCI20", "ADX", "AO", "Mom", "MACD.macd", "Stoch.RSI.K", "W.R", "BBPower", "UO"],
                A = ["EMA10", "SMA10", "EMA20", "SMA20", "EMA30", "SMA30", "EMA50", "SMA50", "EMA100", "SMA100", "EMA200", "SMA200", "Ichimoku.BLine", "VWMA", "HullMA9"],
                R = ["Pivot.M.Classic.S3", "Pivot.M.Classic.S2", "Pivot.M.Classic.S1", "Pivot.M.Classic.Middle", "Pivot.M.Classic.R1", "Pivot.M.Classic.R2", "Pivot.M.Classic.R3", "Pivot.M.Fibonacci.S3", "Pivot.M.Fibonacci.S2", "Pivot.M.Fibonacci.S1", "Pivot.M.Fibonacci.Middle", "Pivot.M.Fibonacci.R1", "Pivot.M.Fibonacci.R2", "Pivot.M.Fibonacci.R3", "Pivot.M.Camarilla.S3", "Pivot.M.Camarilla.S2", "Pivot.M.Camarilla.S1", "Pivot.M.Camarilla.Middle", "Pivot.M.Camarilla.R1", "Pivot.M.Camarilla.R2", "Pivot.M.Camarilla.R3", "Pivot.M.Woodie.S3", "Pivot.M.Woodie.S2", "Pivot.M.Woodie.S1", "Pivot.M.Woodie.Middle", "Pivot.M.Woodie.R1", "Pivot.M.Woodie.R2", "Pivot.M.Woodie.R3", "Pivot.M.Demark.S1", "Pivot.M.Demark.Middle", "Pivot.M.Demark.R1"];

            function k() {
                return [{
                    id: "1m",
                    title: n.t(null, {
                        plural: "{number} minutes",
                        count: 1,
                        replace: {
                            number: String(1)
                        }
                    }, r(532547)),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(768430))}</sup>`,
                    value: 1
                }, {
                    id: "5m",
                    title: n.t(null, {
                        plural: "{number} minutes",
                        count: 5,
                        replace: {
                            number: String(5)
                        }
                    }, r(532547)),
                    shortTitle: `5<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(768430))}</sup>`,
                    value: 5
                }, {
                    id: "15m",
                    title: n.t(null, {
                        plural: "{number} minutes",
                        count: 15,
                        replace: {
                            number: String(15)
                        }
                    }, r(532547)),
                    shortTitle: `15<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(768430))}</sup>`,
                    value: 15
                }, {
                    id: "30m",
                    title: n.t(null, {
                        plural: "{number} minutes",
                        count: 30,
                        replace: {
                            number: String(30)
                        }
                    }, r(532547)),
                    shortTitle: `30<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(768430))}</sup>`,
                    value: 30
                }, {
                    id: "1h",
                    title: n.t(null, {
                        plural: "{number} hours",
                        count: 1,
                        replace: {
                            number: String(1)
                        }
                    }, r(844646)),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(438048))}</sup>`,
                    value: 60
                }, {
                    id: "2h",
                    title: n.t(null, {
                        plural: "{number} hours",
                        count: 2,
                        replace: {
                            number: String(2)
                        }
                    }, r(844646)),
                    shortTitle: `2<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(438048))}</sup>`,
                    value: 120
                }, {
                    id: "4h",
                    title: n.t(null, {
                        plural: "{number} hours",
                        count: 4,
                        replace: {
                            number: String(4)
                        }
                    }, r(844646)),
                    shortTitle: `4<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(438048))}</sup>`,
                    value: 240
                }, {
                    id: "1D",
                    title: n.t(null, {
                        plural: "{number} days",
                        count: 1,
                        replace: {
                            number: String(1)
                        }
                    }, r(839501)),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(38691))}</sup>`,
                    value: null
                }, {
                    id: "1W",
                    title: n.t(null, {
                        plural: "{number} weeks",
                        count: 1,
                        replace: {
                            number: String(1)
                        }
                    }, r(718396)),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(307408))}</sup>`,
                    value: "1W"
                }, {
                    id: "1M",
                    title: n.t(null, {
                        plural: "{number} months",
                        count: 1,
                        replace: {
                            number: String(1)
                        }
                    }, r(277186)),
                    shortTitle: `1<sup class="tv-screener-toolbar__interval-sup">${n.t(null,{context:"interval_short"},r(977995))}</sup>`,
                    value: "1M"
                }]
            }
            var _ = r(702598);

            function N() {
                return window.SCREENER_HOST || "https://scanner.tradingview.com"
            }
            class w {
                constructor(e) {
                    this._status = e.status, this._statusText = e.statusText || ""
                }
                getInfo() {
                    return {
                        name: this.name,
                        status: this._status,
                        statusText: this._statusText,
                        message: this.message
                    }
                }
            }
            class P extends w {
                constructor(e) {
                    super(e), this.name = "BadRequestError", e.error ? this.message = e.error : this.message = "unknown error"
                }
            }
            class D extends w {
                constructor(e) {
                    super(e), this.name = "HttpErrorResponse", this._status >= 200 && this._status < 300 ? this.message = `Http failure during parsing for ${e.url||"(unknown url)"}` : this.message = `Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`
                }
            }
            class L extends w {
                constructor(e) {
                    super(e), this.name = "SymbolDoesNotExistError", this.message = e.error || "symbol does not exist"
                }
            }

            function z(e, t, r, n, o = !0, a = !1) {
                const i = function(e, t, r, n, o) {
                        const a = N(),
                            i = {
                                symbol: e,
                                fields: t
                            };
                        n && (i.no_404 = "true"), o && (i.price_conversion = "disabled"), r && (i["label-product"] = r);
                        const s = new URL(`${a}/symbol`);
                        return Object.keys(i).forEach((e => {
                            s.searchParams.append(e, i[e])
                        })), s.toString()
                    }(t, r.join(","), n, o, a),
                    s = {
                        signal: e,
                        method: "GET",
                        credentials: "include",
                        headers: {
                            Accept: "application/json"
                        }
                    };
                return (0, _.fetch)(i, s, {
                    logOnErrorStatus: !1
                }).then((e => {
                    if (400 === e.status) {
                        const {
                            status: t,
                            statusText: r
                        } = e;
                        return e.json().then((e => {
                            const n = e.errmsg;
                            throw new P({
                                status: t,
                                statusText: r,
                                error: n
                            })
                        }))
                    }
                    if (404 === e.status) {
                        const {
                            status: t,
                            statusText: r
                        } = e;
                        return e.json().then((n => {
                            if ("symbol_not_exists" === n.code) {
                                const e = n.errmsg;
                                throw new L({
                                    status: t,
                                    statusText: r,
                                    error: e
                                })
                            }
                            throw new D(e)
                        }))
                    }
                    if (e.ok) return e.json().then((e => e));
                    throw new D(e)
                }))
            }
            const B = JSON.parse('{"us":{"title":"USA","screenerName":"america","screenerTimezone":"America/New_York","defaultExchange":"US","exchangesForHotlist":["AMEX","NASDAQ","NYSE","OTC","US"],"exchangesStocks":["NASDAQ","NYSE","NYSE ARCA","OTC"],"group":"North America","marketRoute":"usa/"},"ae":{"title":"United Arab Emirates","screenerName":"uae","screenerTimezone":"Asia/Dubai","defaultExchange":"ADX","exchangesForHotlist":["DFM","ADX"],"exchangesStocks":["DFM","ADX","NASDAQDUBAI"],"group":"Middle East / Africa","marketRoute":"uae/"},"ar":{"title":"Argentina","screenerName":"argentina","screenerTimezone":"America/Argentina/Buenos_Aires","exchangesForHotlist":["BCBA"],"exchangesStocks":["BYMA","BCBA"],"defaultExchange":"BCBA","group":"Mexico and South America","marketRoute":"argentina/"},"at":{"title":"Austria","screenerName":"austria","screenerTimezone":"Europe/Vienna","exchangesForHotlist":["VIE"],"exchangesStocks":["VIE"],"defaultExchange":"VIE","group":"Europe","marketRoute":"austria/"},"au":{"title":"Australia","screenerName":"australia","screenerTimezone":"Australia/Sydney","exchangesStocks":["ASX"],"group":"Asia / Pacific","marketRoute":"australia/"},"bd":{"title":"Bangladesh","screenerName":"bangladesh","screenerTimezone":"Asia/Dhaka","exchangesStocks":["DSEBD"],"exchangesForHotlist":["DSEBD"],"group":"Asia / Pacific","marketRoute":"bangladesh/"},"be":{"title":"Belgium","screenerName":"belgium","screenerTimezone":"Europe/Brussels","exchangesForHotlist":["EURONEXT_BRU"],"exchangesStocks":["EURONEXTBRU"],"defaultExchange":"EURONEXT_BRU","group":"Europe","marketRoute":"belgium/"},"bh":{"title":"Bahrain","screenerName":"bahrain","screenerTimezone":"Asia/Bahrain","exchangesStocks":["BAHRAIN"],"group":"Middle East / Africa","marketRoute":"bahrain/"},"br":{"title":"Brazil","screenerName":"brazil","screenerTimezone":"America/Sao_Paulo","exchangesStocks":["BMFBOVESPA"],"group":"Mexico and South America","marketRoute":"brazil/"},"ca":{"title":"Canada","screenerName":"canada","screenerTimezone":"America/Toronto","exchangesStocks":["TSX","TSXV","CSE","NEO"],"group":"North America","marketRoute":"canada/"},"ch":{"title":"Switzerland","screenerName":"switzerland","screenerTimezone":"Europe/Zurich","exchangesStocks":["SIX","BX"],"group":"Europe","marketRoute":"switzerland/"},"cl":{"title":"Chile","screenerName":"chile","screenerTimezone":"America/Santiago","exchangesStocks":["BCS"],"group":"Mexico and South America","marketRoute":"chile/"},"cn":{"title":"China","tvLocale":"zh_CN","screenerName":"china","screenerTimezone":"Asia/Hong_Kong","exchangesForHotlist":["SSE","SZSE"],"exchangesStocks":["SSE","SZSE","SHFE","ZCE","CFFEX"],"group":"Asia / Pacific","marketRoute":"china/"},"co":{"title":"Colombia","screenerName":"colombia","screenerTimezone":"America/Bogota","exchangesStocks":["BVC"],"group":"Mexico and South America","marketRoute":"colombia/"},"cy":{"title":"Cyprus","screenerName":"cyprus","screenerTimezone":"Europe/Cyprus","exchangesStocks":["CSECY"],"exchangesForHotlist":["CSECY"],"group":"Europe","marketRoute":"cyprus/"},"cz":{"title":"Czech Republic","screenerName":"czech","screenerTimezone":"Europe/Czech","exchangesStocks":["PSECZ"],"exchangesForHotlist":["PSECZ"],"group":"Europe","marketRoute":"czech/"},"de":{"title":"Germany","tvLocale":"de_DE","screenerName":"germany","screenerTimezone":"Europe/Berlin","defaultExchange":"XETR","exchangesStocks":["FWB","SWB","XETR","BER","DUS","HAM","HAN","MUN","TRADEGATE"],"group":"Europe","marketRoute":"germany/"},"dk":{"title":"Denmark","screenerName":"denmark","screenerTimezone":"Europe/Copenhagen","exchangesStocks":["OMXCOP"],"group":"Europe","marketRoute":"denmark/"},"ee":{"title":"Estonia","screenerName":"estonia","screenerTimezone":"Europe/Tallinn","exchangesStocks":["OMXTSE"],"group":"Europe","marketRoute":"estonia/"},"eg":{"title":"Egypt","screenerName":"egypt","screenerTimezone":"Africa/Cairo","exchangesStocks":["EGX"],"group":"Middle East / Africa","marketRoute":"egypt/"},"es":{"title":"Spain","screenerName":"spain","screenerTimezone":"Europe/Madrid","exchangesStocks":["BME"],"group":"Europe","marketRoute":"spain/"},"eu":{"title":"European Union","screenerName":"euronext","screenerTimezone":"Europe/Paris","exchangesForHotlist":[],"exchangesStocks":["EURONEXT","EURONEXTCOMM"]},"fi":{"title":"Finland","screenerName":"finland","screenerTimezone":"Europe/Helsinki","exchangesStocks":["OMXHEX"],"group":"Europe","marketRoute":"finland/"},"fr":{"title":"France","screenerName":"france","screenerTimezone":"Europe/Paris","exchangesForHotlist":["EURONEXT_PAR"],"exchangesStocks":["EURONEXTPAR"],"defaultExchange":"EURONEXT_PAR","group":"Europe","marketRoute":"france/"},"ge":{"title":"Georgia"},"gr":{"title":"Greece","screenerName":"greece","screenerTimezone":"Europe/Athens","exchangesStocks":["ATHEX"],"group":"Europe","marketRoute":"greece/"},"hk":{"title":"Hong Kong","screenerName":"hongkong","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["HKEX"],"group":"Asia / Pacific","marketRoute":"hong-kong/"},"hu":{"title":"Hungary","screenerName":"hungary","screenerTimezone":"Europe/Budapest","exchangesStocks":["BET"],"exchangesForHotlist":["BET"],"defaultExchange":"BET","group":"Europe","marketRoute":"hungary/"},"id":{"title":"Indonesia","screenerName":"indonesia","screenerTimezone":"Asia/Jakarta","exchangesStocks":["IDX"],"group":"Asia / Pacific","marketRoute":"indonesia/"},"ie":{"title":"Ireland"},"il":{"title":"Israel","tvLocale":"he_IL","screenerName":"israel","screenerTimezone":"Asia/Jerusalem","exchangesStocks":["TASE"],"group":"Middle East / Africa","marketRoute":"israel/"},"in":{"title":"India","screenerName":"india","screenerTimezone":"Asia/Kolkata","exchangesStocks":["BSE","NSE"],"group":"Asia / Pacific","marketRoute":"india/"},"ir":{"title":"Iran"},"is":{"title":"Iceland","screenerName":"iceland","screenerTimezone":"Atlantic/Reykjavik","exchangesStocks":["OMXICE"],"group":"Europe","marketRoute":"iceland/"},"it":{"title":"Italy","screenerName":"italy","screenerTimezone":"Europe/Rome","exchangesForHotlist":["MIL","EUROTLX"],"exchangesStocks":["MIL","EUROTLX"],"group":"Europe","marketRoute":"italy/"},"jp":{"title":"Japan","tvLocale":"ja","screenerName":"japan","screenerTimezone":"Asia/Tokyo","defaultExchange":"TSE","exchangesForHotlist":["NAG","TSE"],"exchangesStocks":["TSE","NAG","FSE","SAPSE"],"group":"Asia / Pacific","marketRoute":"japan/"},"ke":{"title":"Kenya","screenerName":"kenya","screenerTimezone":"Africa/Nairobi","exchangesStocks":["NSEKE"],"group":"Middle East / Africa","marketRoute":"kenya/"},"kp":{"title":"Noth Korea"},"kr":{"title":"South Korea","tvLocale":"kr","screenerName":"korea","screenerTimezone":"Asia/Seoul","exchangesStocks":["KRX"],"group":"Asia / Pacific","marketRoute":"korea/"},"kw":{"title":"Kuwait","screenerName":"kuwait","screenerTimezone":"Asia/Kuwait","exchangesStocks":["KSE"],"group":"Middle East / Africa","marketRoute":"kuwait/"},"lk":{"title":"Sri Lanka","screenerName":"srilanka","screenerTimezone":"Asia/Colombo","exchangesStocks":["CSELK"],"group":"Asia / Pacific","marketRoute":"sri-lanka/"},"lt":{"title":"Lithuania","screenerName":"lithuania","screenerTimezone":"Europe/Vilnius","exchangesStocks":["OMXVSE"],"group":"Europe","marketRoute":"lithuania/"},"lv":{"title":"Latvia","screenerName":"latvia","screenerTimezone":"Europe/Riga","exchangesStocks":["OMXRSE"],"group":"Europe","marketRoute":"latvia/"},"lu":{"title":"Luxembourg","screenerName":"luxembourg","screenerTimezone":"Europe/Luxembourg","exchangesStocks":["LUXSE"],"exchangesForHotlist":["LUXSE"],"defaultExchange":"LUXSE","group":"Europe","marketRoute":"luxembourg/"},"mx":{"title":"Mexico","screenerName":"mexico","screenerTimezone":"America/Mexico_City","exchangesStocks":["BMV","BIVA"],"group":"Mexico and South America","marketRoute":"mexico/"},"ma":{"title":"Morocco","screenerName":"morocco","screenerTimezone":"Africa/Morocco","exchangesStocks":["CSEMA"],"exchangesForHotlist":["CSEMA"],"group":"Middle East / Africa","marketRoute":"morocco/"},"my":{"title":"Malaysia","tvLocale":"ms_MY","screenerName":"malaysia","screenerTimezone":"Asia/Singapore","exchangesStocks":["MYX"],"group":"Asia / Pacific","marketRoute":"malaysia/"},"ng":{"title":"Nigeria","screenerName":"nigeria","screenerTimezone":"Africa/Lagos","exchangesStocks":["NSENG"],"group":"Middle East / Africa","marketRoute":"nigeria/"},"nl":{"title":"Netherlands","screenerName":"netherlands","screenerTimezone":"Europe/Amsterdam","exchangesForHotlist":["EURONEXT_AMS"],"exchangesStocks":["EURONEXTAMS"],"defaultExchange":"EURONEXT_AMS","group":"Europe","marketRoute":"netherlands/"},"no":{"title":"Norway","screenerName":"norway","screenerTimezone":"Europe/Oslo","exchangesForHotlist":["OSL"],"exchangesStocks":["EURONEXTOSE"],"defaultExchange":"OSL","group":"Europe","marketRoute":"norway/"},"nz":{"title":"New Zealand","screenerName":"newzealand","screenerTimezone":"Pacific/Auckland","exchangesStocks":["NZX"],"group":"Asia / Pacific","marketRoute":"new-zealand/"},"pe":{"title":"Peru","screenerName":"peru","screenerTimezone":"America/Lima","exchangesStocks":["BVL"],"group":"Mexico and South America","marketRoute":"peru/"},"ph":{"title":"Philippines","screenerName":"philippines","screenerTimezone":"Philippines/Manila","exchangesStocks":["PSE"],"group":"Asia / Pacific","marketRoute":"philippines/"},"pk":{"title":"Pakistan","screenerName":"pakistan","screenerTimezone":"Asia/Karachi","exchangesForHotlist":["PSX"],"exchangesStocks":["PSX"],"defaultExchange":"PSX","group":"Asia / Pacific","marketRoute":"pakistan/"},"pl":{"title":"Poland","screenerName":"poland","screenerTimezone":"Europe/Warsaw","exchangesStocks":["GPW","NEWCONNECT"],"group":"Europe","marketRoute":"poland/"},"pt":{"title":"Portugal","screenerName":"portugal","screenerTimezone":"Europe/Lisbon","exchangesForHotlist":["EURONEXT_LIS"],"exchangesStocks":["EURONEXTLIS"],"defaultExchange":"EURONEXT_LIS","group":"Europe","marketRoute":"portugal/"},"qa":{"title":"Qatar","screenerName":"qatar","screenerTimezone":"Asia/Qatar","exchangesStocks":["QSE"],"group":"Middle East / Africa","marketRoute":"qatar/"},"ro":{"title":"Romania","screenerName":"romania","screenerTimezone":"Europe/Bucharest","exchangesStocks":["BVB"],"exchangesForHotlist":["BVB"],"defaultExchange":"BVB","group":"Europe","marketRoute":"romania/"},"rs":{"title":"Serbia","screenerName":"serbia","screenerTimezone":"Europe/Belgrade","exchangesStocks":["BELEX"],"group":"Europe","marketRoute":"serbia/"},"ru":{"title":"Russia","screenerName":"russia","screenerTimezone":"Europe/Moscow","exchangesStocks":["RUS"],"group":"Europe","marketRoute":"russia/"},"sa":{"title":"Saudi Arabia","tvLocale":"ar_AE","screenerName":"ksa","screenerTimezone":"Asia/Riyadh","exchangesStocks":["TADAWUL"],"group":"Middle East / Africa","marketRoute":"ksa/"},"se":{"title":"Sweden","tvLocale":"sv_SE","screenerName":"sweden","screenerTimezone":"Europe/Stockholm","exchangesStocks":["NGM","OMXSTO"],"exchangesForHotlist":["NGM","OMXSTO"],"group":"Europe","marketRoute":"sweden/"},"sg":{"title":"Singapore","screenerName":"singapore","screenerTimezone":"Asia/Singapore","exchangesStocks":["SGX"],"group":"Asia / Pacific","marketRoute":"singapore/"},"sk":{"title":"Slovakia","screenerName":"slovakia","screenerTimezone":"Europe/Bratislava","exchangesStocks":["BSSE"],"group":"Europe","marketRoute":"slovakia/"},"th":{"title":"Thailand","tvLocale":"th_TH","screenerName":"thailand","screenerTimezone":"Asia/Bangkok","exchangesStocks":["SET"],"group":"Asia / Pacific","marketRoute":"thailand/"},"tn":{"title":"Tunisia","screenerName":"tunisia","screenerTimezone":"Africa/Tunis","exchangesStocks":["BVMT"],"group":"Middle East / Africa","marketRoute":"tunisia/"},"tr":{"title":"Turkey","screenerName":"turkey","screenerTimezone":"Europe/Istanbul","exchangesStocks":["BIST"],"group":"Europe","marketRoute":"turkey/"},"tw":{"title":"Taiwan","tvLocale":"zh_TW","screenerName":"taiwan","screenerTimezone":"Asia/Taipei","exchangesStocks":["TWSE","TPEX"],"group":"Asia / Pacific","marketRoute":"taiwan/"},"gb":{"title":"United Kingdom","screenerName":"uk","screenerTimezone":"Europe/London","defaultExchange":"LSE","exchangesStocks":["LSE","LSIN"],"group":"Europe","marketRoute":"united-kingdom/"},"ve":{"title":"Venezuela","screenerName":"venezuela","screenerTimezone":"America/Caracas","exchangesStocks":["BVCV"],"group":"Mexico and South America","marketRoute":"venezuela/"},"vn":{"title":"Vietnam","tvLocale":"vi_VN","screenerName":"vietnam","screenerTimezone":"Asia/Ho_Chi_Minh","exchangesStocks":["HOSE","HNX","UPCOM"],"group":"Asia / Pacific","marketRoute":"vietnam/"},"za":{"title":"South Africa","screenerName":"rsa","screenerTimezone":"Africa/Johannesburg","exchangesStocks":["JSE"],"group":"Middle East / Africa","marketRoute":"south-africa/"},"ww":{"title":"Worldwide","screenerName":"global","exchangesStocks":[]}}'),
                U = [];
            for (const e in B) B.hasOwnProperty(e) && B[e].hasOwnProperty("exchangesStocks") && B[e].exchangesStocks.forEach((e => {
                U.push(e)
            }));
            var O = r(55220),
                I = r(778785),
                W = r(444530);

            function F(e) {
                const [t, r] = (0, o.useState)(null), n = (0, o.useCallback)((([e]) => {
                    const n = e.target.getBoundingClientRect();
                    n.width === (null == t ? void 0 : t.width) && n.height === t.height || r(n)
                }), [t]);
                return [(0, W.useResizeObserver)({
                    callback: n,
                    ref: e
                }), t]
            }
            var V = r(995683),
                H = r(329820),
                X = r(488587);

            function Q(e) {
                const {
                    neutralTextColor: t
                } = e, r = (0, V.mergeThemes)(H.DEFAULT_THEME, {
                    container: X[`container-${e.recommendation}`],
                    speedometerText: t ? X.speedometerTextDefault : X.speedometerText,
                    scale: X.scale,
                    "strong-sell": t ? void 0 : X["strong-sell"],
                    sell: t ? void 0 : X.sell,
                    neutral: t ? void 0 : X.neutral,
                    buy: t ? void 0 : X.buy,
                    "strong-buy": t ? void 0 : X["strong-buy"]
                });
                return o.createElement(H.Speedometer, { ...e,
                    theme: r
                })
            }
            const j = {
                Buy: "buy",
                "Strong Buy": "strong-buy",
                Sell: "sell",
                "Strong Sell": "strong-sell",
                Neutral: "neutral"
            };
            var q = r(679052);

            function Y(e) {
                const {
                    type: t,
                    size: r,
                    title: n,
                    counter: a
                } = e;
                return o.createElement("div", {
                    className: q.counterWrapper
                }, o.createElement("span", {
                    className: l(q.counterTitle, q[r])
                }, n), o.createElement("span", {
                    className: l(q.counterNumber, q[r], q[t])
                }, a))
            }

            function G(e, t) {
                return "small" === e || "small" === t ? "small" : "medium" === e || "medium" === t ? "medium" : "large"
            }

            function $(e, t, r, n) {
                const o = function(e) {
                        const t = e + 2;
                        return t < 425 ? "small" : t < 500 ? "medium" : "large"
                    }(e),
                    a = function(e, t, r) {
                        const n = e + ((t ? 0 : 48) + (r ? 0 : 54) + ("br" === window.locale ? 24 : 0)) - 2;
                        return n < 411 ? "small" : n < 479 ? "medium" : "large"
                    }(t, r, n);
                return G(o, a)
            }
            const K = {};

            function J(e) {
                var t, a, i;
                const {
                    className: s,
                    rating: c,
                    counters: u,
                    showingTabs: m,
                    showingTitle: d,
                    gaugeTitle: p
                } = e, [g, h] = F(), [S, E, f] = u, b = null !== (t = e.forceSize) && void 0 !== t ? t : function(e, t, r, n) {
                    var o;
                    const a = $(e, t, r, n),
                        i = document.querySelector("#widget-technical-analysis-container");
                    if (!i) return a;
                    const s = `${i.getBoundingClientRect().width}-${i.getBoundingClientRect().height}`,
                        l = G(a, null !== (o = K[s]) && void 0 !== o ? o : "large");
                    return K[s] = l, l
                }(null !== (a = null == h ? void 0 : h.width) && void 0 !== a ? a : 425, null !== (i = e.measuredHeight) && void 0 !== i ? i : 450, d, m);
                return o.createElement("div", {
                    className: l(q.speedometerWrapper, s),
                    ref: g
                }, p ? o.createElement("span", {
                    className: q.gaugeTitle
                }, p) : "", o.createElement(Q, {
                    size: b,
                    recommendation: c ? j[c.key] : j.Neutral
                }), o.createElement("div", {
                    className: q.countersWrapper
                }, o.createElement(Y, {
                    type: v.Sell,
                    title: n.t(null, {
                        context: "screener_rating"
                    }, r(71780)),
                    counter: S,
                    size: b
                }), o.createElement(Y, {
                    type: v.Neutral,
                    title: n.t(null, {
                        context: "screener_rating"
                    }, r(147094)),
                    counter: E,
                    size: b
                }), o.createElement(Y, {
                    type: v.Buy,
                    title: n.t(null, {
                        context: "screener_rating"
                    }, r(280903)),
                    counter: f,
                    size: b
                })))
            }
            var Z, ee = r(827964);
            ! function(e) {
                e.Single = "single", e.Multiple = "multiple"
            }(Z || (Z = {}));
            var te = r(607029);
            const re = 1280,
                ne = 768,
                oe = 1024;

            function ae(e) {
                return e < 425 ? "small" : "medium"
            }

            function ie(e, t) {
                return t ? function(e) {
                    return e > re ? "medium" : e > oe ? "small" : ae(e)
                }(e) : function(e) {
                    return e > re ? "medium" : e <= ne ? ae(e) : "large"
                }(e)
            }
            const se = {};

            function le(e) {
                var t;
                const {
                    className: a,
                    ratings: i,
                    counters: s,
                    showingTabs: c,
                    showingTitle: u,
                    measuredHeight: m
                } = e, [d, p] = F(), g = (null != m ? m : 500) <= 600;
                const h = (null !== (t = null == p ? void 0 : p.width) && void 0 !== t ? t : 425) + 2,
                    [v, S] = function(e, t) {
                        var r;
                        const n = ie(e, t),
                            o = document.querySelector("#widget-technical-analysis-container");
                        if (!o) return [n, "small"];
                        const a = `${o.getBoundingClientRect().width}-${o.getBoundingClientRect().height}-${t}`,
                            i = null !== (r = se[a]) && void 0 !== r ? r : "large",
                            s = (c = i, "small" === (l = n) || "small" === c ? "small" : "medium" === l || "medium" === c ? "medium" : "large");
                        var l, c;
                        return se[a] = s, [s, "small"]
                    }(h, g),
                    E = function(e) {
                        return e <= ne ? "" : e <= oe ? te["tablet-vertical"] : e <= re ? te["tablet-landscape"] : te.laptop
                    }(h),
                    f = g ? te.short : "";
                return o.createElement("div", {
                    className: l(te.container, a, f, E),
                    ref: d
                }, o.createElement(J, {
                    key: "oscillators",
                    rating: i.osc,
                    counters: s.osc,
                    showingTitle: u,
                    showingTabs: c,
                    forceSize: S,
                    className: te.oscillators,
                    gaugeTitle: n.t(null, void 0, r(749128))
                }), o.createElement(J, {
                    key: "summary",
                    rating: i.sum,
                    counters: s.sum,
                    showingTitle: u,
                    showingTabs: c,
                    forceSize: v,
                    className: te.summary,
                    gaugeTitle: n.t(null, void 0, r(821778))
                }), o.createElement(J, {
                    key: "moving-averages",
                    rating: i.ma,
                    counters: s.ma,
                    showingTitle: u,
                    showingTabs: c,
                    forceSize: S,
                    className: te.movingAverages,
                    gaugeTitle: n.t(null, void 0, r(72543))
                }))
            }
            class ce extends o.PureComponent {
                constructor(e) {
                    super(e), this._request = null, this._intervalChange = e => {
                        this.state.interval !== e && this.setState({
                            interval: e
                        }, (() => this._requestData(e)))
                    }, this.state = {
                        isInitialized: !1,
                        dataMapped: {},
                        noData: !1,
                        interval: e.interval
                    }
                }
                componentWillUnmount() {
                    this._request = null
                }
                componentDidMount() {
                    this._requestData(this.state.interval)
                }
                render() {
                    if (!this.state.isInitialized) return o.createElement("div", null);
                    const {
                        noTitle: e,
                        showIntervalTabs: t,
                        symbol: a,
                        symbolUrl: i,
                        noDataUrl: s,
                        displayMode: c,
                        shortName: u
                    } = this.props, d = this._generateRowsWithSignals(M), p = this._generateRowsWithSignals(A), h = this._getRecommendData(), v = T(d), S = T(p), E = S.map(((e, t) => e + v[t])), f = e ? "" : function(e, t) {
                        let o;
                        o = "" !== t && void 0 !== t ? `<a href="${(0,m.htmlEscape)(t)}" target="_blank">${(0,m.htmlEscape)(e)}</a>` : (0, m.htmlEscape)(e);
                        return n.t(null, void 0, r(912437)).format({
                            symbol: o
                        })
                    }(null != u ? u : a, s && this.state.noData ? s : i), b = !e, y = {
                        sum: E,
                        osc: v,
                        ma: S
                    }, x = {
                        osc: h[0],
                        sum: h[1],
                        ma: h[2]
                    };
                    return o.createElement("div", {
                        className: ee.background
                    }, o.createElement("div", {
                        className: l(ee.speedometersContainer, ee.alignStart, ee.topMargin, {
                            [ee.speedometersContainerNoData]: this.state.noData
                        })
                    }, o.createElement("div", {
                        className: l(ee.speedometerWrapper, ee.summary)
                    }, o.createElement(o.Fragment, null, o.createElement("span", {
                        className: l({
                            [ee.speedometerTitle]: b
                        }),
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    }), this.state.noData ? o.createElement(g, {
                        verticalAlignShift: "15px"
                    }) : o.createElement(o.Fragment, null, t ? o.createElement(ue, {
                        interval: this.props.interval,
                        onTabActivate: this._intervalChange
                    }) : null, c === Z.Multiple ? o.createElement(le, {
                        ratings: x,
                        counters: y,
                        className: ee.summary,
                        showingTabs: t,
                        showingTitle: b,
                        measuredHeight: this.props.measuredHeight
                    }) : o.createElement(J, {
                        rating: x.sum,
                        counters: E,
                        className: ee.summary,
                        showingTabs: t,
                        showingTitle: b,
                        measuredHeight: this.props.measuredHeight
                    }))))))
                }
                _generateRowsWithSignals(e) {
                    const t = new h.PriceFormatter({
                            priceScale: this.props.pricescale
                        }),
                        r = this.state.dataMapped;
                    return Object.keys(r).length ? e.map((e => {
                        const n = b[e],
                            o = {
                                name: n.title,
                                value: "—",
                                action: "—"
                            };
                        let a = null;
                        const i = (0, c.ensureDefined)(b[e].additionalColumns).map((e => r[e])),
                            s = r[e];
                        return null !== s && i.some((e => null !== e)) && (a = (0, c.ensureDefined)(n.signalComputation)(...i), o.value = (0, u.forceLTRStr)(t.format(s)), a && a.title && (o.action = {
                            content: a.title,
                            cssClass: x(a.key)
                        })), o
                    })) : e.map((e => ({
                        name: b[e].title,
                        value: "—",
                        action: "—"
                    })))
                }
                _getRecommendData() {
                    return C.map((e => {
                        const t = b[e],
                            r = this.state.dataMapped[e];
                        return t && void 0 !== t.signalComputation && null !== r ? t.signalComputation(r) : E.NEUTRAL
                    }))
                }
                _requestData(e) {
                    const t = k().find((t => t.id === e));
                    if (!t) throw new Error(`Can't find interval with id ${this.state.interval}`);
                    const {
                        symbol: r,
                        type: n,
                        exchange: o
                    } = this.props, a = [...C, ...M, ...A, ...R], i = t.value ? function(e, t) {
                        return y(e).map((e => t ? e + "|" + t : e))
                    }(a, t.value) : y(a);
                    if ("stock" !== n || (e => (e = {
                            OSL: "EURONEXTOSE",
                            BCBA: "BYMA",
                            AMEX: "NYSE ARCA"
                        }[e] || e, U.includes(e)))(o)) {
                        const e = this._request = z(null, r, i, "external-widgets").then((r => {
                            if (e === this._request) {
                                if (!r || 0 === Object.keys(r).length) return this._setNoData(), void this.setState({
                                    isInitialized: !0
                                });
                                const e = {};
                                Object.entries(r).forEach((([r, n]) => {
                                    const o = function(e, t) {
                                        const r = e.split("|");
                                        return t && 2 === r.length ? r[0] : e
                                    }(r, t.value);
                                    e[o] = n
                                })), this.setState({
                                    isInitialized: !0
                                }, (() => {
                                    this.setState({
                                        dataMapped: e
                                    })
                                }))
                            }
                        }));
                        e.catch((() => {
                            e === this._request && (this._setNoData(), this.setState({
                                isInitialized: !0
                            }))
                        }))
                    } else this._setNoData(), this.setState({
                        isInitialized: !0
                    })
                }
                _setNoData() {
                    this.props.onNoData && this.props.onNoData(), this.setState({
                        noData: !0
                    })
                }
            }

            function ue(e) {
                var t;
                const {
                    interval: r,
                    onTabActivate: n
                } = e, [a, i] = (0, o.useState)(r), [s, c] = F(), u = (0, o.useCallback)((e => e.id === a), [a]), m = (0, o.useCallback)((e => {
                    i(e.id), n(e.id)
                }), [i, n]), d = null !== (t = null == c ? void 0 : c.width) && void 0 !== t ? t : 425, p = ["en", "in", "fr", "es", "br", "ja"].includes(window.locale) && Math.abs(425 - d) <= 10, g = (0, o.useMemo)((() => k().map((e => ({
                    id: e.id,
                    label: e.title
                })))), []);
                return o.createElement("div", {
                    className: l(ee.tabsWrap, I.mobiletouch && ee["horizontal-scroll"], p && ee.tabsSquish),
                    ref: s
                }, o.createElement(O.SquareTabs, {
                    id: "technicals-summary-interval-tabs",
                    items: g,
                    size: "small",
                    onActivate: m,
                    isActive: u,
                    overflowBehaviour: I.mobiletouch ? "scroll" : "collapse"
                }))
            }
            ce.defaultProps = {
                showIntervalTabs: !1
            };
            var me = r(248213),
                de = r(901107),
                pe = r(705526),
                ge = r(986830),
                he = r(924225),
                ve = r(889267),
                Se = r(519073);

            function Ee(e) {
                const t = { ...e
                };
                if ("spread" === t.type || "expression" === t.type) {
                    const e = t.shortName && fe(t.shortName),
                        r = t.proName && fe(t.proName);
                    t.type = void 0, t.shortName = e, t.proName = r
                }
                return t
            }

            function fe(e) {
                var t;
                return null === (t = (0, ve.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value
            }

            function be(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type,
                    typespecs: e.typespecs,
                    root: e.root
                };
                return t.proName && t.proName.includes(":") && ([t.exchange, t.shortName] = t.proName.split(":")), t
            }

            function ye(e, t) {
                const r = encodeURIComponent(t.shortName || ""),
                    n = encodeURIComponent(t.exchange || ""),
                    o = encodeURIComponent(t.proName || ""),
                    a = encodeURIComponent(t.root || "");
                return e.replace("{tvexchange}", n).replace("{tvsymbol}", r).replace("{tvprosymbol}", o).replace("{tvroot}", a)
            }

            function xe(e, t = "") {
                const r = be(e),
                    {
                        type: n,
                        typespecs: o,
                        shortName: a,
                        proName: i,
                        exchange: s,
                        root: l
                    } = r;
                return void 0 === a && void 0 === i ? (console.warn("Params missed"), "/") : n || o ? "commodity" === n && o && o.includes("cfd") ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : !l || !o || "futures" !== n || o.includes("continuous") && (null == a ? void 0 : a.endsWith("1!")) || o.includes("exchange-continuous") ? s && ("forex" === n || o && (0, Se.hasCryptoTypespec)(o)) ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : s ? `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}` : `/symbols/{tvexchange}-{tvroot}1!/${t}?contract={tvsymbol}` : s ? `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}`
            }

            function Te(e, t, r, n) {
                const o = (window.locale_domains ? (0, ge.determineBaseUrl)(window.locale_domains, n) : window.location.origin) + ye(e, be(Ee(t)));
                return r ? (0, pe.addUtmToUrl)(o, r) : o
            }

            function Ce(e, t, r, n) {
                const o = Ee(e);
                return Te(xe(o, n), o, t, r)
            }
            const Me = {
                whitelabel: !0,
                permissionOverrides: !0
            };
            var Ae, Re;
            ! function(e) {
                let t;
                ! function(e) {
                    e.SetSymbol = "set-symbol", e.SetInterval = "set-interval"
                }(t = e.Names || (e.Names = {}))
            }(Ae || (Ae = {})),
            function(e) {
                let t;
                ! function(e) {
                    e.SymbolClick = "tv-widget-symbol-click", e.WidgetLoad = "tv-widget-load", e.WidgetReady = "tv-widget-ready", e.ResizeIframe = "tv-widget-resize-iframe", e.NoData = "tv-widget-no-data"
                }(t = e.Names || (e.Names = {}))
            }(Re || (Re = {}));
            const ke = window.initData.hashSettings || {},
                _e = "string" == typeof ke.frameElementId ? ke.frameElementId : null;
            var Ne = r(284978),
                we = r(135732);
            const Pe = function(e, t = [], r) {
                    return function(e, t, r, n = [], o) {
                        const a = r.slice(1),
                            i = decodeURIComponent(a);
                        let s = {};
                        try {
                            "" !== i && (s = JSON.parse(i), void 0 !== o && o(e, s), Object.keys(s).forEach((e => {
                                (Me[e] || n.includes(e)) && delete s[e]
                            })))
                        } catch (e) {
                            s = {}, console.warn("Hash params parsing error! Hash params ignored.")
                        }
                        const l = t.slice(1),
                            c = t.includes("%") ? decodeURIComponent(l) : t,
                            u = new URLSearchParams(c);
                        let m = {};
                        try {
                            u.forEach(((e, t) => {
                                n.includes(t) || (m[t] = e)
                            })), void 0 !== o && o(e, m)
                        } catch (e) {
                            m = {}, console.warn("Search query params parsing error! Search query params ignored.")
                        }
                        return Object.assign({}, e, s, m)
                    }(e, location.search, location.hash, t, r)
                }(window.initData.widgetDefaults, ["noLinks", "noHeader"]),
                De = n.t(null, void 0, r(314285)),
                Le = e => {
                    var t, r;
                    const [n, a] = F(), i = null !== (t = null == a ? void 0 : a.height) && void 0 !== t ? t : 450;
                    return e.symbolInfo.symbolProName && e.symbolInfo.exchange && "undefined" !== e.symbolInfo.type ? o.createElement("div", {
                        className: Ne.mainWrapper,
                        ref: n
                    }, o.createElement(ce, {
                        symbol: e.symbolInfo.symbolProName,
                        symbolUrl: e.symbolUrl,
                        noDataUrl: e.noDataUrl,
                        exchange: e.symbolInfo.exchange,
                        type: e.symbolInfo.type,
                        typespecs: e.symbolInfo.typespecs,
                        pricescale: e.symbolInfo.pricescale,
                        interval: e.interval,
                        showIntervalTabs: e.showIntervalTabs,
                        noTitle: e.noHeader,
                        onNoData: e.onNoData,
                        measuredHeight: i,
                        displayMode: e.displayMode,
                        shortName: null !== (r = e.symbolInfo.shortName) && void 0 !== r ? r : e.symbolInfo.symbolProName
                    })) : o.createElement(g, {
                        text: De
                    })
                };
            try {
                (0, we.trackWidgetLoadMetaInfo)({
                    widget_id: "technical-analysis",
                    symbols: JSON.stringify([Pe.symbol]),
                    customer: Pe.customer
                })
            } catch (e) {}
            const ze = document.querySelector("#widget-technical-analysis-container"),
                Be = (0, me.filterUtmInfo)(Pe),
                Ue = (0, de.createEmbedWidgetWrapper)(ze, "technical-analysis", Be, {
                    isWhiteLabel: Pe.whitelabel,
                    locale: (0, m.htmlEscape)(Pe.locale),
                    copyrightOptions: {
                        mode: "small_old"
                    }
                });
            var Oe;
            Oe = Pe.colorTheme, s.setValue(Oe);
            const Ie = {
                    symbol: Pe.symbol,
                    urlTemplate: Pe.largeChartUrl,
                    locale: Pe.locale,
                    noLinks: Pe.noLinks,
                    utm: Be
                },
                We = (0, m.htmlEscape)(Pe.symbol),
                Fe = {};

            function Ve() {
                var e;
                a.render(o.createElement(Le, {
                    symbol: We,
                    interval: (0, m.htmlEscape)(Pe.interval),
                    symbolUrl: He({ ...Ie,
                        symbolInfo: Fe
                    }),
                    noDataUrl: Pe.largeChartUrl ? void 0 : He({ ...Ie,
                        symbolInfo: Fe,
                        forceOverviewTab: !0
                    }),
                    locale: (0, m.htmlEscape)(Pe.locale),
                    showIntervalTabs: Boolean(Pe.showIntervalTabs),
                    displayMode: null !== (e = Pe.displayMode) && void 0 !== e ? e : Z.Single,
                    noHeader: Boolean(Pe.noHeader),
                    symbolInfo: Fe,
                    onNoData: Xe
                }), ze)
            }

            function He(e) {
                if (e.noLinks) return "";
                if (void 0 !== e.urlTemplate) try {
                    return function(e, t) {
                        let r = e;
                        if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                            let n = "tvprosymbol";
                            void 0 === t.proName && (n = "tvsymbol"), r = `${e}?tvwidgetsymbol={${n}}`
                        }
                        const n = ye(r, be(Ee(t)));
                        if (!(0, he.isSafeUrl)(n)) throw new Error(`The symbol URL ${n} is not allowed.`);
                        return n
                    }(e.urlTemplate, Fe)
                } catch (e) {
                    console.error(e.message)
                }
                return e.forceOverviewTab ? Ce(Fe, e.utm, e.locale) : function(e, t, r) {
                    return Ce(e, t, r, "technicals/")
                }(Fe, e.utm, e.locale)
            }

            function Xe() {
                ! function(e, t, r) {
                    const n = {
                        name: e,
                        frameElementId: t,
                        data: r
                    };
                    window.parent.postMessage(n, "*")
                }(Re.Names.NoData, _e, void 0)
            }(0, i.getQuoteSessionInstance)("simple").snapshot(Pe.symbol).then((e => {
                Fe.pricescale = e.pricescale, Fe.type = e.type, Fe.exchange = e.listed_exchange, Fe.symbolProName = e.pro_name, Fe.typespecs = e.typespecs, Fe.shortName = e.short_name, "futures" === e.type && (Pe.showIntervalTabs = !1, Pe.interval = "1D"), Ve()
            })).catch((() => {
                Ve(), Xe(), ze.style.tableLayout = "fixed"
            })), Ue.parentElement.style.height = "100%"
        },
        881025: (e, t, r) => {
            "use strict";
            r.d(t, {
                forceLTRStr: () => l,
                isRtl: () => n,
                stripLTRMarks: () => s
            });
            r(64531);
            const n = () => "rtl" === window.document.dir,
                o = "‪",
                a = "‬",
                i = new RegExp("‎|‪|‫|‬", "g");

            function s(e) {
                return "" !== e && n() && null != e ? e.replace(i, "") : e
            }

            function l(e) {
                return "" !== e && n() && null != e ? o + e + a : e
            }
        },
        228609: (e, t, r) => {
            "use strict";
            r.d(t, {
                preventDefaultForContextMenu: () => o
            });
            const n = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function o(e) {
                const t = e.target;
                t && !t.closest(n.join(", ")) && e.preventDefault()
            }
        },
        433524: (e, t, r) => {
            "use strict";
            r.d(t, {
                getFirstSegmentOrCodePointString: () => l,
                htmlEscape: () => s
            });
            const n = /[<"'&>]/g,
                o = e => `&#${e.charCodeAt(0)};`,
                a = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&apos;": "'",
                    "&amp;": "&",
                    "&#60;": "<",
                    "&#62;": ">",
                    "&#34;": '"',
                    "&#39;": "'",
                    "&#039;": "'",
                    "&#38;": "&"
                },
                i = Object.assign({}, ...Object.entries(a).map((([e, t]) => ({
                    [t]: e
                }))));
            new RegExp(Object.keys(a).join("|"), "g"), new RegExp(Object.keys(i).join("|"), "g");

            function s(e) {
                return e.replace(n, o)
            }

            function l(e) {
                var t;
                const r = Intl.Segmenter;
                if (r) {
                    const n = new r(void 0, {
                            granularity: "grapheme"
                        }),
                        [{
                            segment: o
                        } = {
                            segment: null
                        }] = n.segment(e);
                    return null !== (t = null == o ? void 0 : o.toUpperCase()) && void 0 !== t ? t : null
                } {
                    const t = e.codePointAt(0);
                    return t ? String.fromCodePoint(t).toUpperCase() : null
                }
            }
        },
        117818: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.56 4.5a.75.75 0 1 0-1.12 1l1.12-1zM10.5 9l.56.5a.75.75 0 0 0 0-1l-.56.5zm-4.06 3.5a.75.75 0 0 0 1.12 1l-1.12-1zm0-7l3.5 4 1.12-1-3.5-4-1.12 1zm3.5 3l-3.5 4 1.12 1 3.5-4-1.12-1z"/></svg>'
        },
        455800: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 55" width="90" height="55"><g fill="none" transform="translate(1 1)"><path stroke="currentColor" stroke-width="2" d="M58.743 14.659a15.71 15.71 0 0 1 6.08-1.217c8.75 0 15.863 7.152 16.014 16.034C85.057 31.389 88 35.699 88 40.71 88 47.498 82.6 53 75.94 53H16.017C7.171 53 0 45.692 0 36.678c0-9.015 7.171-16.323 16.017-16.323h.096C17.158 8.937 26.587 0 38.064 0c9.482 0 17.566 6.1 20.68 14.659z"/><circle fill="currentColor" cx="31" cy="23" r="3"/><circle fill="currentColor" cx="45" cy="23" r="3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M25.5 38c4.167-2.667 8.333-4 12.5-4s8.333 1.333 12.5 4"/></g></svg>'
        }
    },
    e => {
        e.O(0, [53060, 93703, 2520, 53953, 49481, 40142, 16190, 41563, 85758, 6633, 89259, 96589, 38169, 96312, 47479, 20634, 79774, 4126, 69267, 80977, 66057, 68159, 50875, 47, 19508, 49081, 63299, 20750], (() => {
            return t = 661945, e(e.s = t);
            var t
        }));
        e.O()
    }
]);