"use strict";
(self.webpackChunkjetpack_search = self.webpackChunkjetpack_search || []).push([
    [106], {
        6084: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var r = s(9362),
                a = s(1017);
            class n extends r.Component {
                componentDidMount() {
                    (0, a.UC)(this.handleOverlayOptionsUpdate), (0, a.Tx)(this.props.toggleResults)
                }
                handleOverlayOptionsUpdate = e => {
                    this.props.updateOverlayOptions(e, (() => this.props.showResults()))
                };
                render() {
                    return null
                }
            }
        },
        8165: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r = s(3257),
                a = s.n(r),
                n = s(9362),
                i = s(7152);
            class o extends n.Component {
                constructor() {
                    super(...arguments), this.state = {
                        isComposing: !1,
                        bodyScrollTop: 0,
                        prefersReducedMotion: (0, i.y)(),
                        previousStyle: null,
                        previousBodyStyleAttribute: ""
                    }, this.props.initializeQueryValues()
                }
                componentDidMount() {
                    this.disableUnnecessaryFormAndInputAttributes(), this.addEventListeners()
                }
                componentWillUnmount() {
                    this.removeEventListeners(), this.restoreBodyScroll()
                }
                componentDidUpdate(e) {
                    this.props.isVisible !== e.isVisible && this.fixBodyScroll()
                }
                disableUnnecessaryFormAndInputAttributes() {
                    document.querySelectorAll(this.props.themeOptions.searchInputSelector).forEach((e => {
                        e.removeAttribute("required"), e.removeAttribute("autocomplete"), e.form.removeAttribute("autocomplete")
                    }))
                }
                addEventListeners() {
                    window.addEventListener("popstate", this.handleHistoryNavigation), document.querySelectorAll(this.props.themeOptions.searchInputSelector).forEach((e => {
                        e.form.addEventListener("submit", this.handleSubmit), e.addEventListener("keyup", this.handleKeyup), e.addEventListener("input", this.handleInput), e.addEventListener("compositionstart", this.handleCompositionStart), e.addEventListener("compositionend", this.handleCompositionEnd)
                    })), document.querySelectorAll(this.props.themeOptions.overlayTriggerSelector).forEach((e => {
                        e.addEventListener("click", this.handleOverlayTriggerClick, !0)
                    })), document.querySelectorAll(this.props.themeOptions.filterInputSelector).forEach((e => {
                        e.addEventListener("click", this.handleFilterInputClick)
                    }))
                }
                removeEventListeners() {
                    window.removeEventListener("popstate", this.handleHistoryNavigation), document.querySelectorAll(this.props.themeOptions.searchInputSelector).forEach((e => {
                        e.form.removeEventListener("submit", this.handleSubmit), e.removeEventListener("keyup", this.handleKeyup), e.removeEventListener("input", this.handleInput), e.removeEventListener("compositionstart", this.handleCompositionStart), e.removeEventListener("compositionend", this.handleCompositionEnd)
                    })), document.querySelectorAll(this.props.themeOptions.overlayTriggerSelector).forEach((e => {
                        e.removeEventListener("click", this.handleOverlayTriggerClick, !0)
                    })), document.querySelectorAll(this.props.themeOptions.filterInputSelector).forEach((e => {
                        e.removeEventListener("click", this.handleFilterInputClick)
                    }))
                }
                handleCompositionStart = () => this.setState({
                    isComposing: !0
                });
                handleCompositionEnd = () => this.setState({
                    isComposing: !1
                });
                handleFilterInputClick = e => {
                    e.preventDefault(), e.currentTarget.dataset.filterType && ("taxonomy" === e.currentTarget.dataset.filterType ? this.props.setFilter(e.currentTarget.dataset.taxonomy, e.currentTarget.dataset.val) : this.props.setFilter(e.currentTarget.dataset.filterType, e.currentTarget.dataset.val)), this.props.setSearchQuery(""), this.props.showResults()
                };
                handleHistoryNavigation = () => {
                    this.props.initializeQueryValues({
                        isHistoryNavigation: !0
                    })
                };
                handleInput = a()((e => {
                    e.inputType ? .includes("format") || "" === e.target.value || this.state.isComposing || "submit" === this.props.overlayOptions.overlayTrigger || this.state.prefersReducedMotion || (this.props.setSearchQuery(e.target.value), ["immediate", "results"].includes(this.props.overlayOptions.overlayTrigger) && this.props.showResults())
                }), 200);
                handleKeyup = e => {
                    "Enter" === e.key && (this.props.setSearchQuery(e.target.value), this.props.showResults())
                };
                handleOverlayTriggerClick = e => {
                    e.stopImmediatePropagation(), this.props.setSearchQuery(""), this.props.showResults()
                };
                handleSubmit = e => {
                    if (e.preventDefault(), this.handleInput.flush(), !this.props.isVisible) {
                        const t = e.target.querySelector(this.props.themeOptions.searchInputSelector) ? .value;
                        "string" == typeof t && this.props.setSearchQuery(t), this.props.showResults()
                    }
                };
                fixBodyScroll = () => {
                    this.props.isVisible ? (this.preventBodyScroll(), window ? .scrollTo(0, 0)) : this.props.isVisible || this.restoreBodyScroll()
                };
                preventBodyScroll() {
                    this.setState({
                        bodyScrollTop: parseInt(window.scrollY) || 0,
                        previousStyle: {
                            top: document.body.style.top,
                            left: document.body.style.left,
                            right: document.body.style.right,
                            scrollBehavior: document.documentElement.style.scrollBehavior
                        },
                        previousBodyStyleAttribute: document.body.getAttribute("style")
                    }, (() => {
                        const e = document.documentElement ? .scrollHeight - document.body ? .scrollHeight || 0;
                        document.body.setAttribute("style", "position: fixed !important"), document.body.style.top = `-${this.state.bodyScrollTop-e}px`, document.body.style.left = 0, document.body.style.right = 0
                    }))
                }
                restoreBodyScroll() {
                    this.state.previousBodyStyleAttribute ? document.body.setAttribute("style", this.state.previousBodyStyleAttribute) : document.body.removeAttribute("style"), document.body.style.top = this.state.previousStyle ? .top ? ? "", document.body.style.left = this.state.previousStyle ? .left ? ? "", document.body.style.right = this.state.previousStyle ? .right ? ? "", document.documentElement.style.scrollBehavior = "revert", this.state.bodyScrollTop > 0 && window.scrollTo(0, this.state.bodyScrollTop), document.documentElement.style.scrollBehavior = this.state.previousStyle ? .scrollBehavior ? ? "", this.setState({
                        bodyScrollTop: 0,
                        previousStyle: null,
                        previousBodyStyleAttribute: ""
                    })
                }
                render() {
                    return null
                }
            }
        },
        1539: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            s(8411);
            var r = s(7723),
                a = s(9362),
                n = s.n(a);
            const __ = r.__;
            class i extends a.Component {
                static defaultProps = {
                    "aria-hidden": "false",
                    focusable: "true"
                };
                needsOffset(e, t) {
                    return ["gridicons-calendar", "gridicons-cart", "gridicons-folder", "gridicons-info", "gridicons-posts", "gridicons-star-outline", "gridicons-star"].indexOf(e) >= 0 && t % 18 == 0
                }
                getSVGTitle(e) {
                    if ("title" in this.props) return this.props.title ? n().createElement("title", null, this.props.title) : null;
                    switch (e) {
                        default: return null;
                        case "gridicons-audio":
                                return n().createElement("title", null, __("Has audio.", "jetpack-search-pkg"));
                        case "gridicons-calendar":
                                return n().createElement("title", null, __("Is an event.", "jetpack-search-pkg"));
                        case "gridicons-cart":
                                return n().createElement("title", null, __("Is a product.", "jetpack-search-pkg"));
                        case "chevron-down":
                                return n().createElement("title", null, __("Show filters", "jetpack-search-pkg"));
                        case "gridicons-comment":
                                return n().createElement("title", null, __("Matching comment.", "jetpack-search-pkg"));
                        case "gridicons-cross":
                                return n().createElement("title", null, __("Close search results", "jetpack-search-pkg"));
                        case "gridicons-filter":
                                return n().createElement("title", null, __("Toggle search filters.", "jetpack-search-pkg"));
                        case "gridicons-folder":
                                return n().createElement("title", null, __("Category", "jetpack-search-pkg"));
                        case "gridicons-image-multiple":
                                return n().createElement("title", null, __("Has multiple images.", "jetpack-search-pkg"));
                        case "gridicons-image":
                                return n().createElement("title", null, __("Has an image.", "jetpack-search-pkg"));
                        case "gridicons-page":
                                return n().createElement("title", null, __("Page", "jetpack-search-pkg"));
                        case "gridicons-post":
                                return n().createElement("title", null, __("Post", "jetpack-search-pkg"));
                        case "gridicons-jetpack-search":
                                case "gridicons-search":
                                return n().createElement("title", null, __("Magnifying Glass", "jetpack-search-pkg"));
                        case "gridicons-tag":
                                return n().createElement("title", null, __("Tag", "jetpack-search-pkg"));
                        case "gridicons-video":
                                return n().createElement("title", null, __("Has a video.", "jetpack-search-pkg"))
                    }
                }
                renderIcon(e) {
                    switch (e) {
                        default: return null;
                        case "gridicons-audio":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"
                            }));
                        case "gridicons-block":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"
                            }));
                        case "gridicons-calendar":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"
                            }));
                        case "gridicons-cart":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"
                            }));
                        case "gridicons-checkmark":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"
                            }));
                        case "gridicons-chevron-down":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"
                            }));
                        case "gridicons-comment":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"
                            }));
                        case "gridicons-cross":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"
                            }));
                        case "gridicons-filter":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"
                            }));
                        case "gridicons-folder":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"
                            }));
                        case "gridicons-image":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"
                            }));
                        case "gridicons-image-multiple":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"
                            }));
                        case "gridicons-info":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                            }));
                        case "gridicons-jetpack-search":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"
                            }));
                        case "gridicons-pages":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"
                            }));
                        case "gridicons-posts":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"
                            }));
                        case "gridicons-search":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"
                            }));
                        case "gridicons-star-outline":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"
                            }));
                        case "gridicons-star":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"
                            }));
                        case "gridicons-tag":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"
                            }));
                        case "gridicons-video":
                                return n().createElement("g", null, n().createElement("path", {
                                d: "M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"
                            }))
                    }
                }
                render() {
                    const {
                        size: e = 24,
                        className: t = ""
                    } = this.props, s = this.props.height || e, r = this.props.width || e, a = this.props.style || {
                        height: s,
                        width: r
                    }, i = "gridicons-" + this.props.icon;
                    let o = ["gridicon", i, t];
                    return this.needsOffset(i, e) && o.push("needs-offset"), o = o.join(" "), n().createElement("svg", {
                        "aria-label": this.props.description,
                        className: o,
                        focusable: this.props.focusable,
                        height: s,
                        onClick: this.props.onClick,
                        style: a,
                        viewBox: "0 0 24 24",
                        width: r,
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": this.props["aria-hidden"]
                    }, this.getSVGTitle(i), this.renderIcon(i))
                }
            }
            const o = i
        },
        4120: (e, t, s) => {
            s.d(t, {
                A: () => l
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a);
            const __ = r.__,
                i = "#fff",
                o = n().createElement("svg", {
                    className: "jetpack-instant-search__jetpack-colophon-logo",
                    height: 12,
                    width: 12,
                    viewBox: "0 0 32 32"
                }, n().createElement("path", {
                    className: "jetpack-logo__icon-circle",
                    fill: "#069e08",
                    d: "M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z"
                }), n().createElement("polygon", {
                    className: "jetpack-logo__icon-triangle",
                    fill: i,
                    points: "15,19 7,19 15,3 "
                }), n().createElement("polygon", {
                    className: "jetpack-logo__icon-triangle",
                    fill: i,
                    points: "17,29 17,13 25,13 "
                })),
                l = e => {
                    const t = "string" == typeof e.locale ? e.locale.split("-", 1)[0] : null,
                        s = t && "en" !== t ? "https://" + t + ".jetpack.com/upgrade/search?utm_source=poweredby" : "https://jetpack.com/upgrade/search/?utm_source=poweredby";
                    return n().createElement("div", {
                        className: "jetpack-instant-search__jetpack-colophon"
                    }, n().createElement("a", {
                        href: s,
                        rel: "external noopener noreferrer nofollow",
                        target: "_blank",
                        className: "jetpack-instant-search__jetpack-colophon-link"
                    }, o, n().createElement("span", {
                        className: "jetpack-instant-search__jetpack-colophon-text"
                    }, __("Search powered by Jetpack", "jetpack-search-pkg"))))
                }
        },
        8961: (e, t, s) => {
            s.d(t, {
                A: () => i
            });
            var r = s(9362),
                a = s.n(r),
                n = s(1539);
            const i = ({
                type: e,
                children: t
            }) => "warning" !== e ? null : a().createElement("div", {
                className: "jetpack-instant-search__notice jetpack-instant-search__notice--warning"
            }, a().createElement(n.A, {
                icon: "info",
                size: 20
            }), a().createElement("div", null, t))
        },
        6973: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a),
                i = s(7479);
            const __ = r.__,
                o = e => {
                    const {
                        children: t,
                        closeOverlay: s,
                        colorTheme: r,
                        hasOverlayWidgets: o,
                        isVisible: l
                    } = e;
                    return (0, a.useEffect)((() => {
                        const e = e => {
                                "Escape" === e.key && (e.preventDefault(), s())
                            },
                            t = e => {
                                if ("Tab" === e.key) {
                                    const t = document.getElementsByClassName(i.w4)[0].contains(e.target),
                                        s = document.getElementsByClassName(i.Md)[0],
                                        r = document.getElementById(i.m2);
                                    !0 === e.shiftKey && (e.target !== s && !1 !== t || (e.preventDefault(), r.focus())), !1 === e.shiftKey && (e.target !== r && !1 !== t || (e.preventDefault(), s.focus()))
                                }
                            },
                            r = e => {
                                const t = document.getElementsByClassName("jetpack-instant-search__search-results-wrapper")[0];
                                e.target ? .isConnected && t && !t.contains(e.target) && s()
                            },
                            a = () => {
                                window.removeEventListener("click", r), window.removeEventListener("keydown", e), window.removeEventListener("keydown", t)
                            };
                        return l ? (window.addEventListener("click", r), window.addEventListener("keydown", e), window.addEventListener("keydown", t)) : a(), () => {
                            a()
                        }
                    }), [s, l]), n().createElement("div", {
                        "aria-hidden": !l,
                        "aria-labelledby": "jetpack-instant-search__overlay-title",
                        className: ["jetpack-instant-search", i.w4, `jetpack-instant-search__overlay--${r}`, o ? "" : "jetpack-instant-search__overlay--no-sidebar", l ? "" : "is-hidden"].join(" "),
                        role: "dialog"
                    }, n().createElement("h1", {
                        id: "jetpack-instant-search__overlay-title",
                        className: "screen-reader-text"
                    }, __("Search results", "jetpack-search-pkg")), t)
                }
        },
        413: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var r = s(9362),
                a = s.n(r);
            const n = ({
                className: e,
                onClick: t,
                url: s
            }) => {
                const r = function(e) {
                    const t = e.split("/").filter((e => e.length > 0));
                    return t.shift(), t
                }(s);
                return r.length < 1 ? null : a().createElement("div", {
                    className: `jetpack-instant-search__path-breadcrumb ${e||""}`
                }, a().createElement("a", {
                    className: "jetpack-instant-search__path-breadcrumb-link",
                    href: `//${s}`,
                    onClick: t,
                    tabIndex: "-1",
                    "aria-hidden": "true"
                }, r.map(((e, t, s) => a().createElement("span", {
                    className: "jetpack-instant-search__path-breadcrumb-piece",
                    key: e
                }, decodeURIComponent(e), t !== s.length - 1 ? " › " : "")))))
            }
        },
        2355: (e, t, s) => {
            s.d(t, {
                A: () => l
            });
            var r = s(3691),
                a = s.n(r),
                n = s(9362),
                i = s.n(n),
                o = s(4809);
            const l = e => {
                const {
                    alt: t,
                    isPhotonEnabled: s,
                    maxHeight: r = 600,
                    maxWidth: n = 600,
                    src: l,
                    lazyLoad: c = !0,
                    ...p
                } = e, h = (0, o.g)(l, n, r, s);
                return i().createElement("img", a()({
                    alt: t,
                    src: h,
                    loading: "" + (c ? "lazy" : "eager")
                }, p))
            }
        },
        7846: (e, t, s) => {
            s.d(t, {
                A: () => u
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a),
                i = s(113),
                o = s(1539);
            const __ = r.__,
                l = ["youtube", "ooyala", "anvplayer", "wpvideo", "bc_video", "video", "brightcove", "tp_video", "jwplayer", "tempo-video", "vimeo"],
                c = ["gallery", "ione_media_gallery"],
                p = ["audio", "soundcloud"],
                h = {
                    product: "cart",
                    video: "video",
                    gallery: "image-multiple",
                    event: "calendar",
                    events: "calendar"
                },
                u = ({
                    postType: e,
                    shortcodeTypes: t,
                    iconSize: s = 18
                }) => {
                    if (Object.keys(h).includes(e)) return n().createElement(o.A, {
                        icon: h[e],
                        size: s
                    });
                    const r = (0, i.A)(t, l),
                        a = (0, i.A)(t, p),
                        u = (0, i.A)(t, c);
                    return r ? n().createElement(o.A, {
                        icon: "video",
                        size: s
                    }) : a ? n().createElement(o.A, {
                        icon: "audio",
                        size: s
                    }) : "page" === e ? n().createElement(o.A, {
                        icon: "pages",
                        size: s,
                        description: __("Page", "jetpack-search-pkg")
                    }) : u ? n().createElement(o.A, {
                        icon: "image-multiple",
                        size: s,
                        description: __("Image", "jetpack-search-pkg")
                    }) : null
                }
        },
        2652: (e, t, s) => {
            s.d(t, {
                A: () => i
            });
            var r = s(9362),
                a = s.n(r);
            class n extends r.Component {
                render() {
                    const {
                        formattedPrice: e,
                        formattedSalePrice: t,
                        formattedRegularPrice: s,
                        price: n,
                        salePrice: i
                    } = this.props;
                    return n ? a().createElement("span", {
                        className: "jetpack-instant-search__product-price"
                    }, i > 0 ? a().createElement(r.Fragment, null, a().createElement("s", {
                        className: "jetpack-instant-search__product-price-regular",
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    }), a().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })) : a().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })) : null
                }
            }
            const i = n
        },
        6777: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a),
                i = s(1539);
            const _n = r._n;

            function o({
                rating: e = 0,
                count: t = 0,
                permalink: s
            }) {
                return n().createElement("div", {
                    className: "jetpack-instant-search__product-rating"
                }, n().createElement("span", {
                    "aria-hidden": !0,
                    className: "jetpack-instant-search__product-rating-stars"
                }, Array(5).fill(n().createElement(i.A, {
                    size: 16,
                    icon: "star-outline"
                })).fill(n().createElement(i.A, {
                    size: 16,
                    icon: "star"
                }), 0, e)), " ", n().createElement("a", {
                    "aria-hidden": !0,
                    className: "jetpack-instant-search__product-rating-count",
                    href: s + "#reviews"
                }, (0, r.sprintf)( /* Translators: the placeholder is the number of product reviews. */
                    _n("%d review", "%d reviews", t, "jetpack-search-pkg"), t)), n().createElement("span", {
                    className: "screen-reader-text"
                }, (0, r.sprintf)( /* Translators: the first placeholder is the average product rating out of 5; the second is the number of product reviews. */
                    _n("Average rating of %1$d out of 5 from %2$d review.", "Average rating of %1$d out of 5 from %2$d reviews.", t, "jetpack-search-pkg"), Number(e).toFixed(2), t)))
            }
        },
        3845: (e, t, s) => {
            s.d(t, {
                A: () => p
            });
            var r = s(7723),
                a = s(3257),
                n = s.n(a),
                i = s(9362),
                o = s.n(i),
                l = s(7479);
            const __ = r.__;
            class c extends i.Component {
                scrollElement = document.getElementsByClassName(l.tr)[0];
                componentDidMount() {
                    this.scrollElement.addEventListener("scroll", this.checkScroll)
                }
                componentDidUnmount() {
                    this.scrollElement.removeEventListener("scroll", this.checkScroll)
                }
                checkScroll = n()((() => {
                    const e = this.scrollElement.clientHeight + this.scrollElement.scrollTop + l.ZJ;
                    this.props.enableLoadOnScroll && e >= this.scrollElement.scrollHeight && this.props.onLoadNextPage()
                }), 100);
                render() {
                    return o().createElement("button", {
                        className: "jetpack-instant-search__scroll-button",
                        disabled: this.props.isLoading,
                        onClick: this.props.onLoadNextPage
                    }, this.props.isLoading ? o().createElement("span", null, __("Loading…", "jetpack-search-pkg")) : o().createElement("span", null, __("Load more", "jetpack-search-pkg")))
                }
            }
            const p = c
        },
        459: (e, t, s) => {
            s.d(t, {
                A: () => k
            });
            var r = s(4224),
                a = s.n(r),
                n = s(3257),
                i = s.n(n),
                o = s(9362),
                l = s.n(o),
                c = s(4952),
                p = s(7479),
                h = s(3089),
                u = s(6122),
                d = s(8924),
                m = s(999),
                g = s(538),
                _ = s(6084),
                y = s(8165),
                f = s(6973),
                E = s(8568);
            class v extends o.Component {
                static defaultProps = {
                    overlayOptions: {},
                    widgets: []
                };
                constructor() {
                    super(...arguments), this.state = {
                        isVisible: !!this.props.initialIsVisible,
                        overlayOptionsCustomizerOverride: {}
                    }, this.getResults = i()(this.getResults, 200), this.props.enableAnalytics ? this.initializeAnalytics() : (0, d.Re)(), this.props.shouldIntegrateWithDom ? this.props.initializeQueryValues() : this.props.disableQueryStringIntegration()
                }
                static getDerivedStateFromProps(e, t) {
                    return {
                        overlayOptions: { ...e.overlayOptions,
                            ...t.overlayOptionsCustomizerOverride
                        }
                    }
                }
                componentDidMount() {
                    (this.props.initialShowResults && this.props.initialIsVisible || this.props.isInCustomizer) && this.getResults(), this.props.hasActiveQuery && this.props.overlayOptions.enableFilteringOpensOverlay && this.showResults()
                }
                componentDidUpdate(e, t) {
                    e.searchQuery === this.props.searchQuery && e.sort === this.props.sort && a()(e.filters) === a()(this.props.filters) && a()(e.staticFilters) === a()(this.props.staticFilters) || this.onChangeQueryString(this.props.isHistoryNavigation), t.overlayOptions.defaultSort !== this.state.overlayOptions.defaultSort && this.props.setSort(this.state.overlayOptions.defaultSort), a()(t.overlayOptions.excludedPostTypes) !== a()(this.state.overlayOptions.excludedPostTypes) && this.getResults()
                }
                initializeAnalytics() {
                    (0, d.ze)(), !window[p.O5].preventTrackingCookiesReset && (0, d.kX)(), (0, d.wk)(this.props.options.siteId)
                }
                getResultFormat = () => {
                    if (this.props.staticFilters && this.props.staticFilters.group_id && this.props.staticFilters.group_id !== p.$K) return p.yj;
                    return (0, u.lz)() || this.state.overlayOptions.resultFormat
                };
                initializeStaticFilters = () => {
                    const e = (0, h.PM)();
                    e.length > 0 && 0 === Object.keys(this.props.staticFilters).length && e.forEach((e => this.props.setStaticFilter(e.filter_id, e.selected, !0)))
                };
                hideResults = e => {
                    this.props.shouldIntegrateWithDom && (0, u.fX)(this.props.initialHref, (() => {
                        this.setState({
                            isVisible: !1
                        }), this.props.clearQueryValues()
                    }), e)
                };
                toggleResults = e => {
                    this.props.shouldIntegrateWithDom && this.state.isVisible !== e && (e && this.initializeStaticFilters(), this.setState({
                        isVisible: e
                    }))
                };
                showResults = this.toggleResults.bind(this, !0);
                onChangeQueryString = e => {
                    this.getResults(), this.props.hasActiveQuery && !this.state.isVisible && this.showResults(), !this.props.hasActiveQuery && e && this.hideResults(e), null !== this.props.searchQuery && document.querySelectorAll(this.props.themeOptions.searchInputSelector).forEach((e => {
                        e.value = this.props.searchQuery
                    }))
                };
                loadNextPage = () => {
                    this.props.hasNextPage && this.getResults({
                        pageHandle: this.props.response.page_handle
                    })
                };
                getResults = ({
                    pageHandle: e
                } = {}) => {
                    this.props.makeSearchRequest({
                        aggregations: e ? {} : this.props.aggregations,
                        excludedPostTypes: this.state.overlayOptions.excludedPostTypes,
                        filter: this.props.filters,
                        staticFilters: this.props.staticFilters,
                        pageHandle: e,
                        query: this.props.searchQuery,
                        resultFormat: this.getResultFormat(),
                        siteId: this.props.options.siteId,
                        additionalBlogIds: this.props.options.additionalBlogIds,
                        sort: this.props.sort,
                        postsPerPage: this.props.options.postsPerPage,
                        adminQueryFilter: this.props.options.adminQueryFilter,
                        highlightFields: this.props.options.highlightFields,
                        isInCustomizer: this.props.isInCustomizer
                    })
                };
                updateOverlayOptions = (e, t) => {
                    this.setState((t => ({
                        overlayOptionsCustomizerOverride: { ...t.overlayOptionsCustomizerOverride,
                            ...e
                        }
                    })), t)
                };
                render() {
                    const e = this.getResultFormat(),
                        t = this.props.shouldCreatePortal ? o.createPortal : e => e;
                    return l().createElement(o.Fragment, null, this.props.isInCustomizer && l().createElement(_.A, {
                        showResults: this.showResults,
                        toggleResults: this.toggleResults,
                        updateOverlayOptions: this.updateOverlayOptions
                    }), this.props.shouldIntegrateWithDom && l().createElement(y.A, {
                        initializeQueryValues: this.props.initializeQueryValues,
                        isVisible: this.state.isVisible,
                        overlayOptions: this.state.overlayOptions,
                        setFilter: this.props.setFilter,
                        setSearchQuery: this.props.setSearchQuery,
                        showResults: this.showResults,
                        themeOptions: this.props.themeOptions
                    }), t(l().createElement(f.A, {
                        closeColor: this.state.overlayOptions.closeColor,
                        closeOverlay: this.hideResults,
                        colorTheme: this.state.overlayOptions.colorTheme,
                        hasOverlayWidgets: this.props.hasOverlayWidgets,
                        isVisible: this.state.isVisible
                    }, l().createElement(E.A, {
                        closeOverlay: this.hideResults,
                        enableLoadOnScroll: this.state.overlayOptions.enableInfScroll,
                        enableFilteringOpensOverlay: this.state.overlayOptions.enableFilteringOpensOverlay,
                        enableSort: this.state.overlayOptions.enableSort,
                        filters: this.props.filters,
                        staticFilters: this.props.staticFilters,
                        hasError: this.props.hasError,
                        hasNextPage: this.props.hasNextPage,
                        highlightColor: this.state.overlayOptions.highlightColor,
                        isLoading: this.props.isLoading,
                        isPhotonEnabled: this.props.options.isPhotonEnabled,
                        isPrivateSite: this.props.options.isPrivateSite,
                        isVisible: this.state.isVisible,
                        locale: this.props.options.locale,
                        onChangeSearch: this.props.setSearchQuery,
                        onChangeSort: this.props.setSort,
                        onLoadNextPage: this.loadNextPage,
                        overlayTrigger: this.state.overlayOptions.overlayTrigger,
                        postTypes: this.props.options.postTypes,
                        response: this.props.response,
                        resultFormat: e,
                        searchQuery: this.props.searchQuery,
                        showPoweredBy: this.state.overlayOptions.showPoweredBy,
                        sort: this.props.sort,
                        widgets: this.props.options.widgets,
                        widgetOutsideOverlay: this.props.widgetOutsideOverlay,
                        hasNonSearchWidgets: this.props.options.hasNonSearchWidgets,
                        additionalBlogIds: this.props.options.additionalBlogIds,
                        showPostDate: this.state.overlayOptions.enablePostDate
                    })), document.body))
                }
            }
            const k = (0, c.Ng)(((e, t) => ({
                filters: (0, g.gA)(e),
                staticFilters: (0, g.kJ)(e),
                hasActiveQuery: (0, g.xp)(e),
                hasError: (0, g.JD)(e),
                isHistoryNavigation: (0, g.xk)(e),
                hasNextPage: (0, g.rB)(e),
                isLoading: (0, g.VP)(e),
                response: (0, g.mi)(e),
                searchQuery: (0, g.V8)(e),
                sort: (0, g.FD)(e, t.overlayOptions.defaultSort),
                widgetOutsideOverlay: (0, g.S7)(e)
            })), {
                clearQueryValues: m.Qt,
                disableQueryStringIntegration: m.go,
                initializeQueryValues: m.JF,
                makeSearchRequest: m.oZ,
                setStaticFilter: m.$6,
                setFilter: m.R6,
                setSearchQuery: m.Ri,
                setSort: m.d1
            })(v)
        },
        3297: (e, t, s) => {
            s.d(t, {
                A: () => h
            });
            var r = s(7723),
                a = s(4436),
                n = s.n(a),
                i = s(9362),
                o = s.n(i),
                l = s(7479),
                c = s(1539);
            const __ = r.__;
            let p = null;
            const h = e => {
                const [t] = (0, i.useState)((() => n()("jetpack-instant-search__box-input-"))), s = (0, i.useRef)(null);
                return (0, i.useEffect)((() => {
                    var t;
                    e.isVisible ? (t = s.current, () => {
                        p = t.ownerDocument.activeElement, t.focus()
                    })() : e.shouldRestoreFocus && p && p.focus()
                }), [e.isVisible, e.shouldRestoreFocus]), o().createElement(i.Fragment, null, o().createElement("div", {
                    className: "jetpack-instant-search__box"
                }, o().createElement("label", {
                        className: "jetpack-instant-search__box-label",
                        htmlFor: t
                    }, o().createElement("div", {
                        className: "jetpack-instant-search__box-gridicon"
                    }, o().createElement(c.A, {
                        icon: "search",
                        size: 24
                    })), o().createElement("input", {
                        autoComplete: "off",
                        id: t,
                        className: "search-field " + l.Md,
                        inputMode: "search",
                        onChange: e.isVisible ? e.onChange : null,
                        ref: s,
                        placeholder: __("Search…", "jetpack-search-pkg"),
                        type: "search",
                        value: e.searchQuery ? ? ""
                    }), "string" == typeof e.searchQuery && e.searchQuery.length > 0 &&
                    /* Translators: Button is used to clear the search input query. */
                    o().createElement("input", {
                        type: "button",
                        value: __("clear", "jetpack-search-pkg"),
                        onClick: e.onClear
                    }), o().createElement("button", {
                        className: "screen-reader-text assistive-text",
                        tabIndex: "-1"
                    }, __("Search", "jetpack-search-pkg")))))
            }
        },
        1242: (e, t, s) => {
            s.d(t, {
                A: () => i
            });
            var r = s(9362),
                a = s.n(r),
                n = s(1168);
            const i = e => a().createElement("div", {
                className: "jetpack-instant-search__search-form-controls",
                role: "form"
            }, e.children, e.enableSort && a().createElement(n.A, {
                onChange: e.onChangeSort,
                resultFormat: e.resultFormat,
                value: e.sort
            }))
        },
        5450: (e, t, s) => {
            s.d(t, {
                A: () => m,
                t: () => u
            });
            var r = s(3022),
                a = s(4436),
                n = s.n(a),
                i = s(9362),
                o = s.n(i),
                l = s(4952),
                c = s(1557),
                p = s.n(c),
                h = s(7574);
            const u = e => e.split(" ").join("T");
            class d extends i.Component {
                filtersList = (0, i.createRef)();
                idPrefix = n()("jetpack-instant-search__search-filter-");
                getIdentifier() {
                    return "postType" === this.props.type ? "post_types" : "author" === this.props.type ? "authors" : "blogId" === this.props.type ? "blog_ids" : "date" === this.props.type ? `${this.props.configuration.interval}_${this.props.configuration.field}` : "taxonomy" === this.props.type ? this.props.configuration.taxonomy : "group" === this.props.type ? this.props.configuration.filter_id : void 0
                }
                isChecked(e) {
                    return Boolean(this.props.value && this.props.value.includes(e))
                }
                toggleFilter = () => {
                    this.props.onChange(this.getIdentifier(), (0, h.e)(this.filtersList.current))
                };
                toggleStaticFilter = e => {
                    this.props.onChange(this.getIdentifier(), e.target.value)
                };
                renderDate = ({
                    key_as_string: e,
                    doc_count: t
                }) => {
                    const {
                        locale: s = "en-US"
                    } = this.props;
                    return o().createElement("div", null, o().createElement("input", {
                        checked: this.isChecked(e),
                        disabled: !this.isChecked(e) && 0 === t,
                        id: `${this.idPrefix}-dates-${this.getIdentifier()}-${e}`,
                        name: e,
                        onChange: this.toggleFilter,
                        type: "checkbox",
                        className: "jetpack-instant-search__search-filter-list-input"
                    }), o().createElement("label", {
                        htmlFor: `${this.idPrefix}-dates-${this.getIdentifier()}-${e}`,
                        className: "jetpack-instant-search__search-filter-list-label"
                    }, new Date(u(e)).toLocaleString(s, function(e) {
                        switch (e) {
                            case "day":
                                return {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                };
                            case "month":
                                return {
                                    year: "numeric",
                                    month: "long"
                                };
                            case "year":
                                return {
                                    year: "numeric"
                                }
                        }
                        return {
                            year: "numeric",
                            month: "long"
                        }
                    }(this.props.configuration.interval)), " ", "(", t, ")"))
                };
                renderPostType = ({
                    key: e,
                    doc_count: t
                }) => {
                    const s = e in this.props.postTypes ? this.props.postTypes[e].singular_name : e;
                    return o().createElement("div", null, o().createElement("input", {
                        checked: this.isChecked(e),
                        disabled: !this.isChecked(e) && 0 === t,
                        id: `${this.idPrefix}-post-types-${e}`,
                        name: e,
                        onChange: this.toggleFilter,
                        type: "checkbox",
                        className: "jetpack-instant-search__search-filter-list-input"
                    }), o().createElement("label", {
                        htmlFor: `${this.idPrefix}-post-types-${e}`,
                        className: "jetpack-instant-search__search-filter-list-label"
                    }, p()(s), " (", t, ")"))
                };
                renderAuthor = ({
                    key: e,
                    doc_count: t
                }) => {
                    const [s, r] = e && e.split(/\/(.+)/);
                    return o().createElement("div", null, o().createElement("input", {
                        checked: this.isChecked(s),
                        disabled: !this.isChecked(s) && 0 === t,
                        id: `${this.idPrefix}-authors-${s}`,
                        name: s,
                        onChange: this.toggleFilter,
                        type: "checkbox",
                        className: "jetpack-instant-search__search-filter-list-input"
                    }), o().createElement("label", {
                        htmlFor: `${this.idPrefix}-authors-${s}`,
                        className: "jetpack-instant-search__search-filter-list-label"
                    }, p()(r), " (", t, ")"))
                };
                renderBlogId = ({
                    key: e,
                    doc_count: t
                }) => {
                    const s = e.toString(),
                        r = this.props.blogIdFilteringLabels ? .[e] || s;
                    return o().createElement("div", null, o().createElement("input", {
                        checked: this.isChecked(s),
                        disabled: !this.isChecked(s) && 0 === t,
                        id: `${this.idPrefix}-blog-ids-${s}`,
                        name: s,
                        onChange: this.toggleFilter,
                        type: "checkbox",
                        className: "jetpack-instant-search__search-filter-list-input"
                    }), o().createElement("label", {
                        htmlFor: `${this.idPrefix}-blog-ids-${s}`,
                        className: "jetpack-instant-search__search-filter-list-label"
                    }, p()(r), " (", t, ")"))
                };
                renderTaxonomy = ({
                    key: e,
                    doc_count: t
                }) => {
                    const [s, r] = e && e.split(/\/(.+)/);
                    return o().createElement("div", null, o().createElement("input", {
                        checked: this.isChecked(s),
                        disabled: !this.isChecked(s) && 0 === t,
                        id: `${this.idPrefix}-taxonomies-${s}`,
                        name: s,
                        onChange: this.toggleFilter,
                        type: "checkbox",
                        className: "jetpack-instant-search__search-filter-list-input"
                    }), o().createElement("label", {
                        htmlFor: `${this.idPrefix}-taxonomies-${s}`,
                        className: "jetpack-instant-search__search-filter-list-label"
                    }, p()(r), " (", t, ")"))
                };
                renderGroup = e => o().createElement("div", {
                    className: "jetpack-instant-search__search-filter-group-item"
                }, o().createElement("input", {
                    checked: this.isChecked(e.value),
                    id: `${this.idPrefix}-groups-${e.value}`,
                    name: this.props.configuration.filter_id,
                    onChange: this.toggleStaticFilter,
                    value: e.value,
                    type: "radio",
                    className: "jetpack-instant-search__search-filter-list-input"
                }), o().createElement("label", {
                    htmlFor: `${this.idPrefix}-groups-${e.value}`,
                    className: "jetpack-instant-search__search-filter-list-label"
                }, e.name));
                renderDates() {
                    return [...this.props.aggregation.buckets.filter((e => !!e)).map(this.renderDate)].reverse().slice(0, this.props.configuration.count)
                }
                renderPostTypes() {
                    return this.props.aggregation.buckets.map(this.renderPostType)
                }
                renderAuthors() {
                    return this.props.aggregation.buckets.map(this.renderAuthor)
                }
                renderBlogIds() {
                    return this.props.aggregation.buckets.map(this.renderBlogId)
                }
                renderTaxonomies() {
                    return this.props.aggregation.buckets.map(this.renderTaxonomy)
                }
                renderGroups() {
                    return this.props.configuration.values.map(this.renderGroup)
                }
                render() {
                    return o().createElement("div", {
                        id: `${this.idPrefix}-${this.props.type}`
                    }, o().createElement("h3", {
                        className: "jetpack-instant-search__search-filter-sub-heading"
                    }, this.props.configuration.name), o().createElement("div", {
                        ref: this.filtersList
                    }, o().createElement("div", {
                        className: (0, r.A)("jetpack-instant-search__search-filter-list", "jetpack-instant-search__search-static-filter-list", `jetpack-instant-search__search-static-filter-variation-${this.props.configuration.variation}`)
                    }, "group" === this.props.type && this.renderGroups()), this.props.aggregation && "buckets" in this.props.aggregation && o().createElement("div", {
                        className: "jetpack-instant-search__search-filter-list"
                    }, "date" === this.props.type && this.renderDates(), "postType" === this.props.type && this.renderPostTypes(), "author" === this.props.type && this.renderAuthors(), "blogId" === this.props.type && this.renderBlogIds(), "taxonomy" === this.props.type && this.renderTaxonomies())))
                }
            }
            const m = (0, l.Ng)((e => ({
                blogIdFilteringLabels: e.serverOptions.blogIdFilteringLabels
            })))(d)
        },
        1503: (e, t, s) => {
            s.d(t, {
                A: () => u
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a),
                i = s(4952),
                o = s(3089),
                l = s(8924),
                c = s(999),
                p = s(5450);
            const __ = r.__;
            class h extends a.Component {
                static defaultProps = {
                    showClearFiltersButton: !0,
                    showTitle: !0
                };
                onChangeFilter = (e, t) => {
                    this.props.setFilter(e, t), this.props.onChange && this.props.onChange()
                };
                onChangeStaticFilter = (e, t) => {
                    (0, l.oD)({
                        filterName: e,
                        filterValue: t
                    }), this.props.setStaticFilter(e, t), this.props.onChange && this.props.onChange()
                };
                onClearFilters = e => {
                    e.preventDefault(), this.props.clearFilters(), this.props.onChange && this.props.onChange()
                };
                hasActiveFilters() {
                    return Object.keys(this.props.filters).length > 0
                }
                renderFilterComponent = ({
                    configuration: e,
                    results: t
                }) => t && n().createElement(p.A, {
                    aggregation: t,
                    configuration: e,
                    locale: this.props.locale,
                    onChange: this.onChangeFilter,
                    postTypes: this.props.postTypes,
                    type: (0, o.sm)(e),
                    value: this.props.filters[(0, o.xf)(e)]
                });
                renderStaticFilterComponent = e => Object.hasOwn(e, "visible") && !e.visible ? null : n().createElement(p.A, {
                    aggregation: [],
                    configuration: e,
                    locale: this.props.locale,
                    onChange: this.onChangeStaticFilter,
                    postTypes: this.props.postTypes,
                    type: (0, o.sm)(e),
                    value: this.props.staticFilters[(0, o.xf)(e)]
                });
                render() {
                    if (!this.props.widget) return null;
                    const e = (0, o.PM)("sidebar"),
                        t = this.props.results ? .aggregations;
                    return n().createElement("div", {
                        className: "jetpack-instant-search__search-filters"
                    }, this.props.showTitle && n().createElement("h2", {
                        className: "jetpack-instant-search__search-filters-title"
                    }, __("Filter options", "jetpack-search-pkg")), this.props.showClearFiltersButton && this.hasActiveFilters() && n().createElement("button", {
                        className: "jetpack-instant-search__clear-filters-link",
                        onClick: this.onClearFilters
                    }, __("Clear filters", "jetpack-search-pkg")), this.props.widget ? .filters && this.props.widget.filters.length > 0 && e.map(this.renderStaticFilterComponent), this.props.widget ? .filters ? .map((e => t ? {
                        configuration: e,
                        results: t[e.filter_id]
                    } : null)).filter((e => !!e)).filter((({
                        results: e
                    }) => !!e && Array.isArray(e.buckets) && e.buckets.length > 0)).map(this.renderFilterComponent))
                }
            }
            const u = (0, i.Ng)(null, {
                clearFilters: c.hi,
                setFilter: c.R6,
                setStaticFilter: c.$6
            })(h)
        },
        5846: (e, t, s) => {
            s.d(t, {
                A: () => l
            });
            var r = s(9362),
                a = s.n(r),
                n = s(3297);
            const i = e => e.preventDefault();
            class o extends r.Component {
                onClear = () => this.props.onChangeSearch("");
                onChangeSearch = e => this.props.onChangeSearch(e.currentTarget.value);
                render() {
                    return a().createElement("form", {
                        autoComplete: "off",
                        onSubmit: i,
                        role: "search",
                        className: this.props.className
                    }, a().createElement("div", {
                        className: "jetpack-instant-search__search-form"
                    }, a().createElement(n.A, {
                        isVisible: this.props.isVisible,
                        onChange: this.onChangeSearch,
                        onClear: this.onClear,
                        shouldRestoreFocus: !0,
                        searchQuery: this.props.searchQuery
                    })))
                }
            }
            const l = o
        },
        5260: (e, t, s) => {
            s.d(t, {
                A: () => i
            });
            var r = s(9362),
                a = s.n(r),
                n = s(1539);
            const i = ({
                comments: e,
                iconSize: t = 18
            }) => e ? a().createElement("div", {
                className: "jetpack-instant-search__search-result-comments"
            }, a().createElement(n.A, {
                icon: "comment",
                size: t
            }), a().createElement("span", {
                className: "jetpack-instant-search__search-result-comments-text",
                dangerouslySetInnerHTML: {
                    __html: e.join(" ... ")
                }
            })) : null
        },
        829: (e, t, s) => {
            s.d(t, {
                A: () => p
            });
            var r = s(3832),
                a = s(9362),
                n = s.n(a),
                i = s(413),
                o = s(2355),
                l = s(5450),
                c = s(5260);

            function p(e) {
                const {
                    isMultiSite: t,
                    locale: s = "en-US",
                    showPostDate: a
                } = e, {
                    result_type: p,
                    fields: h,
                    highlight: u
                } = e.result;
                if ("post" !== p) return null;
                const d = Array.isArray(h["image.url.raw"]) ? h["image.url.raw"][0] : h["image.url.raw"];
                return Array.isArray(h.author) && (h.author.length > 3 ? h.author = h.author.slice(0, 3).join(", ") + "..." : h.author = h.author.join(", ")), n().createElement("li", {
                    className: ["jetpack-instant-search__search-result", "jetpack-instant-search__search-result-expanded", `jetpack-instant-search__search-result-expanded--${h.post_type}`, d ? "" : "jetpack-instant-search__search-result-expanded--no-image", t ? "is-multisite" : "", (() => {
                        let e = h["category.name.default"];
                        return e ? (Array.isArray(e) || (e = [e]), e) : []
                    })().map((e => "jetpack-instant-search__search-result-category--" + (0, r.cleanForSlug)(e))).join(" ")].join(" ")
                }, n().createElement("div", {
                    className: "jetpack-instant-search__search-result-expanded__content-container"
                }, n().createElement("div", {
                    className: "jetpack-instant-search__search-result-expanded__copy-container"
                }, n().createElement("h3", {
                    className: "jetpack-instant-search__search-result-title jetpack-instant-search__search-result-expanded__title"
                }, n().createElement("a", {
                    className: "jetpack-instant-search__search-result-title-link jetpack-instant-search__search-result-expanded__title-link",
                    href: `//${h["permalink.url.raw"]}`,
                    onClick: e.onClick
                }, n().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: u.title
                    }
                }), "yes" === h["forum.topic_resolved"] && n().createElement("span", {
                    className: "jetpack-instant-search__search-result-title-checkmark"
                }))), !t && n().createElement(i.A, {
                    className: "jetpack-instant-search__search-result-expanded__path",
                    onClick: e.onClick,
                    url: `//${h["permalink.url.raw"]}`
                }), n().createElement("div", {
                    className: "jetpack-instant-search__search-result-expanded__content",
                    dangerouslySetInnerHTML: {
                        __html: u && "object" == typeof u ? Object.entries(u).filter((([e, t]) => "comments" !== e && "title" !== e && Array.isArray(t))).map((([, e]) => e.join(" ... "))).join(" ... ") : ""
                    }
                }), u.comments && n().createElement(c.A, {
                    comments: u.comments
                })), n().createElement("a", {
                    className: "jetpack-instant-search__search-result-expanded__image-link",
                    href: `//${h["permalink.url.raw"]}`,
                    onClick: e.onClick,
                    tabIndex: "-1",
                    "aria-hidden": "true"
                }, n().createElement("div", {
                    className: "jetpack-instant-search__search-result-expanded__image-container"
                }, d ? n().createElement(o.A, {
                    alt: h["image.alt_text"],
                    className: "jetpack-instant-search__search-result-expanded__image",
                    isPhotonEnabled: e.isPhotonEnabled,
                    src: `//${d}`
                }) : null))), (t || a) && n().createElement("ul", {
                    className: "jetpack-instant-search__search-result-expanded__footer"
                }, t && n().createElement(n().Fragment, null, n().createElement("li", null, n().createElement(o.A, {
                    alt: h.blog_name,
                    className: "jetpack-instant-search__search-result-expanded__footer-blog-image",
                    isPhotonEnabled: !1,
                    height: 24,
                    width: 24,
                    src: h.blog_icon_url,
                    lazyLoad: !1
                }), n().createElement("span", {
                    className: "jetpack-instant-search__search-result-expanded__footer-blog"
                }, h.blog_name)), n().createElement("li", null, n().createElement("span", {
                    className: "jetpack-instant-search__search-result-expanded__footer-author"
                }, h.author))), a && n().createElement("li", null, n().createElement("span", {
                    className: "jetpack-instant-search__search-result-expanded__footer-date"
                }, new Date((0, l.t)(h.date)).toLocaleDateString(s, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })))))
            }
        },
        6485: (e, t, s) => {
            s.d(t, {
                A: () => h
            });
            var r = s(3832),
                a = s(9362),
                n = s.n(a),
                i = s(1539),
                o = s(413),
                l = s(7846),
                c = s(5260);
            class p extends a.Component {
                getIconSize() {
                    return 18
                }
                getTags() {
                    let e = this.props.result.fields["tag.name.default"];
                    return e ? (Array.isArray(e) || (e = [e]), e.slice(0, 5)) : []
                }
                getCategories(e = !1) {
                    let t = this.props.result.fields["category.name.default"];
                    return t ? (Array.isArray(t) || (t = [t]), e ? t : t.slice(0, 5)) : []
                }
                renderNoMatchingContent() {
                    const e = this.getTags(),
                        t = this.getCategories(),
                        s = 0 === e.length && 0 === t.length;
                    return n().createElement("div", {
                        className: "jetpack-instant-search__search-result-minimal-content"
                    }, s && n().createElement(o.A, {
                        url: this.props.result.fields["permalink.url.raw"]
                    }), n().createElement("div", {
                        className: "jetpack-instant-search__search-result-minimal-cats-and-tags"
                    }, 0 !== e.length && n().createElement("ul", {
                        className: "jetpack-instant-search__search-result-minimal-tags"
                    }, e.map((e => n().createElement("li", {
                        className: "jetpack-instant-search__search-result-minimal-tag"
                    }, n().createElement(i.A, {
                        icon: "tag",
                        size: this.getIconSize()
                    }), n().createElement("span", {
                        className: "jetpack-instant-search__search-result-minimal-tag-text"
                    }, e))))), 0 !== t.length && n().createElement("ul", {
                        className: "jetpack-instant-search__search-result-minimal-cats"
                    }, t.map((e => n().createElement("li", {
                        className: "jetpack-instant-search__search-result-minimal-cat"
                    }, n().createElement(i.A, {
                        icon: "folder",
                        size: this.getIconSize()
                    }), n().createElement("span", {
                        className: "jetpack-instant-search__search-result-minimal-cat-text"
                    }, e)))))))
                }
                renderMatchingContent() {
                    return n().createElement("div", {
                        className: "jetpack-instant-search__search-result-minimal-content",
                        dangerouslySetInnerHTML: {
                            __html: this.props.result.highlight && "object" == typeof this.props.result.highlight ? Object.entries(this.props.result.highlight).filter((([e, t]) => "comments" !== e && "title" !== e && Array.isArray(t))).map((([, e]) => e.join(" ... "))).join(" ... ") : ""
                        }
                    })
                }
                render() {
                    const {
                        result_type: e,
                        fields: t,
                        highlight: s
                    } = this.props.result;
                    if ("post" !== e) return null;
                    const a = !s || "object" != typeof s || Object.entries(s).every((([e, t]) => "comments" === e || "title" === e || !Array.isArray(t) || "" === t[0]));
                    return n().createElement("li", {
                        className: ["jetpack-instant-search__search-result", "jetpack-instant-search__search-result-minimal", this.getCategories(!0).map((e => "jetpack-instant-search__search-result-category--" + (0, r.cleanForSlug)(e))).join(" ")].join(" ")
                    }, n().createElement("h3", {
                        className: "jetpack-instant-search__search-result-title jetpack-instant-search__search-result-minimal-title"
                    }, n().createElement(l.A, {
                        postType: t.post_type,
                        shortcodeTypes: t.shortcode_types
                    }), n().createElement("a", {
                        className: "jetpack-instant-search__search-result-title-link jetpack-instant-search__search-result-minimal-title-link",
                        href: `//${t["permalink.url.raw"]}`,
                        onClick: this.props.onClick
                    }, n().createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: s.title
                        }
                    }), "yes" === t["forum.topic_resolved"] && n().createElement("span", {
                        className: "jetpack-instant-search__search-result-title-checkmark"
                    }))), a ? this.renderNoMatchingContent() : this.renderMatchingContent(), n().createElement(c.A, {
                        comments: s && s.comments
                    }))
                }
            }
            const h = p
        },
        9761: (e, t, s) => {
            s.d(t, {
                A: () => u
            });
            var r = s(7723),
                a = s(3832),
                n = s(9362),
                i = s.n(n),
                o = s(1539),
                l = s(2355),
                c = s(2652),
                p = s(6777);
            const __ = r.__;
            class h extends n.Component {
                render() {
                    const {
                        result_type: e,
                        fields: t,
                        highlight: s
                    } = this.props.result;
                    if ("post" !== e) return null;
                    const r = Array.isArray(t["image.url.raw"]) ? t["image.url.raw"][0] : t["image.url.raw"],
                        n = Array.isArray(s.title) && s.title[0].length > 0 ? s.title[0] : __("No title", "jetpack-search-pkg"),
                        h = "string" == typeof this.props.searchQuery && "" !== this.props.searchQuery.trim(),
                        u = n.includes("<mark>"),
                        d = h && !u && "object" == typeof s && Object.entries(s).some((([e, t]) => "title" !== e && "comments" !== e && Array.isArray(t) && t[0] ? .length > 0));
                    return i().createElement("li", {
                        className: ["jetpack-instant-search__search-result", "jetpack-instant-search__search-result-product", (() => {
                            let e = t["category.name.default"];
                            return e ? (Array.isArray(e) || (e = [e]), e) : []
                        })().map((e => "jetpack-instant-search__search-result-category--" + (0, a.cleanForSlug)(e))).join(" ")].join(" ")
                    }, i().createElement("a", {
                        className: "jetpack-instant-search__search-result-product-img-link",
                        href: `//${t["permalink.url.raw"]}`,
                        onClick: this.props.onClick
                    }, i().createElement("div", {
                        className: "jetpack-instant-search__search-result-product-img-container " + (r ? "" : "jetpack-instant-search__search-result-product-img-container--placeholder")
                    }, r ? i().createElement(l.A, {
                        alt: t["image.alt_text"],
                        className: "jetpack-instant-search__search-result-product-img",
                        isPhotonEnabled: this.props.isPhotonEnabled,
                        src: `//${r}`
                    }) : i().createElement("div", {
                        className: "jetpack-instant-search__search-result-product-img"
                    }, i().createElement(o.A, {
                        icon: "block",
                        style: {}
                    }), i().createElement(o.A, {
                        icon: "image",
                        style: {},
                        title: __("Does not have an image", "jetpack-search-pkg")
                    })))), i().createElement("h3", {
                        className: "jetpack-instant-search__search-result-title jetpack-instant-search__search-result-product-title"
                    }, i().createElement("a", {
                        className: "jetpack-instant-search__search-result-title-link",
                        href: `//${t["permalink.url.raw"]}`,
                        onClick: this.props.onClick,
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })), i().createElement(c.A, {
                        price: t["wc.price"],
                        salePrice: t["wc.sale_price"],
                        formattedPrice: t["wc.formatted_price"],
                        formattedRegularPrice: t["wc.formatted_regular_price"],
                        formattedSalePrice: t["wc.formatted_sale_price"]
                    }), !!t["meta._wc_average_rating.double"] && i().createElement(p.A, {
                        count: t["meta._wc_review_count.long"],
                        rating: t["meta._wc_average_rating.double"],
                        permalink: `//${t["permalink.url.raw"]}`
                    }), d && i().createElement("div", {
                        className: "jetpack-instant-search__search-result-product-match"
                    }, i().createElement("mark", null, i().createElement(o.A, {
                        icon: "search",
                        style: {},
                        title: !1
                    }), i().createElement("span", null, "comment" in s ? __("Matches comments", "jetpack-search-pkg") : __("Matches content", "jetpack-search-pkg", 0)))))
                }
            }
            const u = h
        },
        3735: (e, t, s) => {
            s.d(t, {
                A: () => d
            });
            var r = s(3691),
                a = s.n(r),
                n = s(9362),
                i = s.n(n),
                o = s(7479),
                l = s(8924),
                c = s(829),
                p = s(6485),
                h = s(9761);
            class u extends n.Component {
                componentDidMount() {
                    this.props.railcar && (0, l.A8)(this.getCommonTrainTracksProps())
                }
                componentDidUpdate(e) {
                    this.props.railcar !== e.railcar && this.props.railcar && (0, l.A8)(this.getCommonTrainTracksProps())
                }
                getCommonTrainTracksProps() {
                    return {
                        fetch_algo: this.props.railcar.fetch_algo,
                        fetch_position: this.props.railcar.fetch_position,
                        fetch_query: this.props.railcar.fetch_query,
                        railcar: this.props.railcar.railcar,
                        rec_blog_id: this.props.railcar.rec_blog_id,
                        rec_post_id: this.props.railcar.rec_post_id,
                        session_id: this.props.railcar.session_id,
                        ui_algo: "jetpack-instant-search-ui/v1",
                        ui_position: this.props.index
                    }
                }
                onClick = () => {
                    this.props.railcar && (0, l.wH)({ ...this.getCommonTrainTracksProps(),
                        action: "click"
                    })
                };
                render() {
                    return this.props.resultFormat === o.s6 ? i().createElement(h.A, a()({
                        onClick: this.onClick
                    }, this.props)) : this.props.resultFormat === o.yj ? i().createElement(c.A, a()({
                        onClick: this.onClick
                    }, this.props)) : i().createElement(p.A, a()({
                        onClick: this.onClick
                    }, this.props))
                }
            }
            const d = u
        },
        8568: (e, t, s) => {
            s.d(t, {
                A: () => k
            });
            var r = s(7723),
                a = s(3022),
                n = s(9362),
                i = s.n(n),
                o = s(7084),
                l = s(7479),
                c = s(6299),
                p = s(3089),
                h = s(1539),
                u = s(4120),
                d = s(8961),
                m = s(3845),
                g = s(1242),
                _ = s(5846),
                y = s(3735),
                f = s(6097),
                E = s(1080);
            const __ = r.__,
                _n = r._n;
            class v extends n.Component {
                state = {
                    shouldShowMobileSecondary: !1
                };
                toggleMobileSecondary = e => {
                    "click" !== e.type && ("keydown" !== e.type || "Enter" !== e.key && " " !== e.key) || (" " === e.key && e.preventDefault(), this.setState((e => ({
                        shouldShowMobileSecondary: !e.shouldShowMobileSecondary
                    }))))
                };
                hasFilterOptions() {
                    let e = [...this.props.widgets];
                    return this.props.widgetOutsideOverlay ? .filters ? .length > 0 && (e = [this.props.widgetOutsideOverlay, ...e]), e.length > 0
                }
                getSearchTitle() {
                    const {
                        total: e = 0,
                        corrected_query: t = !1
                    } = this.props.response, s = "" !== this.props.searchQuery, a = !1 !== t, n = this.props.staticFilters && this.props.staticFilters.group_id && this.props.staticFilters.group_id !== l.$K;
                    if (this.props.isLoading) return s ? __("Searching…", "jetpack-search-pkg", 0) : __("Loading popular results…", "jetpack-search-pkg");
                    if (0 === e || this.props.hasError) return __("No results found", "jetpack-search-pkg");
                    const i = (new Intl.NumberFormat).format(e);
                    if (s && a) return (0, r.sprintf)( /* translators: %1$s: number of results. %2$s: the corrected search query. */
                        _n('Found %1$s result for "%2$s"', 'Found %1$s results for "%2$s"', e, "jetpack-search-pkg"), i, t);
                    if (n) {
                        const t = (0, p.PM)().find((e => "group_id" === e.filter_id)),
                            s = t ? .filter_id,
                            a = this.props.staticFilters[s],
                            n = t ? .selected,
                            o = t ? .values ? .[0],
                            l = a || n || o ? .value,
                            c = t ? .values ? .find ? .((e => e.value === l));
                        return c ? .name ? (0, r.sprintf)( /* translators: %1$s: number of results. - %2$s: site name. */
                            _n("Found %1$s result in %2$s", "Found %1$s results in %2$s", e, "jetpack-search-pkg"), i, c ? .name) : (0, r.sprintf)( /* translators: %s: number of results. */
                            _n("Found %s result", "Found %s results", e, "jetpack-search-pkg"), i)
                    }
                    return __("Showing popular results", "jetpack-search-pkg")
                }
                renderPrimarySection() {
                    const {
                        highlightColor: e,
                        searchQuery: t
                    } = this.props, {
                        results: s = [],
                        total: a = 0,
                        corrected_query: p = !1
                    } = this.props.response, h = (0, o.d)(e), u = !1 !== p, g = a > 0, _ = this.props.additionalBlogIds ? .length > 0 || this.props.staticFilters && this.props.staticFilters.group_id && this.props.staticFilters.group_id !== l.$K;
                    return i().createElement(n.Fragment, null, i().createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: `\n\t\t\t\t\t\t\t.jetpack-instant-search *::selection,\n\t\t\t\t\t\t\t.jetpack-instant-search .jetpack-instant-search__search-results .jetpack-instant-search__search-results-primary .jetpack-instant-search__search-result mark {\n\t\t\t\t\t\t\t\tcolor: ${h};\n\t\t\t\t\t\t\t\tbackground-color: ${e};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`
                        }
                    }), i().createElement(E.A, null), i().createElement("h2", {
                        className: "jetpack-instant-search__search-results-title"
                    }, this.getSearchTitle()), g && u && i().createElement("p", {
                            className: "jetpack-instant-search__search-results-unused-query"
                        }, /* translators: %s: Search query. */ /* translators: %s: Search query. */
                        (0, r.sprintf)(__('No results for "%s"', "jetpack-search-pkg"), t)), this.props.hasError && i().createElement(d.A, {
                        type: "warning"
                    }, (0, c.u)(this.props.response.error)), g && !this.props.hasError && this.props.response._isOffline && i().createElement(d.A, {
                        type: "warning"
                    }, (0, c.u)({
                        message: "offline"
                    })), g && !this.props.hasError && i().createElement("ol", {
                        className: `jetpack-instant-search__search-results-list is-format-${this.props.resultFormat}`
                    }, s.map(((e, t) => i().createElement(y.A, {
                        index: t,
                        key: t,
                        staticFilters: this.props.staticFilters,
                        isPhotonEnabled: this.props.isPhotonEnabled,
                        locale: this.props.locale,
                        railcar: this.props.isVisible ? e.railcar : null,
                        result: e,
                        resultFormat: this.props.resultFormat,
                        searchQuery: this.props.searchQuery,
                        isMultiSite: _,
                        showPostDate: this.props.showPostDate
                    })))), g && this.props.hasNextPage && i().createElement("div", {
                        className: "jetpack-instant-search__search-results-pagination"
                    }, i().createElement(m.A, {
                        enableLoadOnScroll: this.props.enableLoadOnScroll,
                        isLoading: this.props.isLoading,
                        onLoadNextPage: this.props.onLoadNextPage
                    })))
                }
                renderSecondarySection() {
                    return i().createElement(f.A, {
                        filters: this.props.filters,
                        staticFilters: this.props.staticFilters,
                        isLoading: this.props.isLoading,
                        locale: this.props.locale,
                        postTypes: this.props.postTypes,
                        response: this.props.response,
                        widgets: this.props.widgets,
                        widgetOutsideOverlay: this.props.widgetOutsideOverlay
                    })
                }
                closeOverlay = e => {
                    e.preventDefault(), this.props.closeOverlay()
                };
                onKeyPressHandler = e => {
                    "Enter" === e.key && (e.preventDefault(), this.props.closeOverlay())
                };
                render() {
                    return i().createElement("div", {
                        className: (0, a.A)("jetpack-instant-search__search-results-wrapper", {
                            "has-colophon": this.props.showPoweredBy
                        })
                    }, i().createElement("div", {
                        "aria-hidden": !0 === this.props.isLoading,
                        className: "jetpack-instant-search__search-results"
                    }, i().createElement("div", {
                        className: "jetpack-instant-search__search-results-controls",
                        role: "form"
                    }, i().createElement(_.A, {
                        "aria-controls": "jetpack-instant-search__search-results-content",
                        className: "jetpack-instant-search__search-results-search-form",
                        isVisible: this.props.isVisible,
                        onChangeSearch: this.props.onChangeSearch,
                        searchQuery: this.props.searchQuery
                    }), i().createElement("button", {
                        className: "jetpack-instant-search__overlay-close",
                        onClick: this.closeOverlay,
                        onKeyPress: this.onKeyPressHandler,
                        tabIndex: "0",
                        "aria-label": __("Close search results", "jetpack-search-pkg")
                    }, i().createElement(h.A, {
                        icon: "cross",
                        size: "24",
                        "aria-hidden": "true",
                        focusable: "false"
                    }))), i().createElement(g.A, {
                        enableSort: this.props.enableSort,
                        onChangeSort: this.props.onChangeSort,
                        resultFormat: this.props.resultFormat,
                        sort: this.props.sort
                    }, (this.hasFilterOptions() || this.props.hasNonSearchWidgets) && i().createElement("div", {
                        role: "button",
                        onClick: this.toggleMobileSecondary,
                        onKeyDown: this.toggleMobileSecondary,
                        tabIndex: "0",
                        className: "jetpack-instant-search__search-results-filter-button"
                    }, __("Filters", "jetpack-search-pkg"), i().createElement(h.A, {
                        icon: "chevron-down",
                        size: 16,
                        alt: __("Show search filters", "jetpack-search-pkg"),
                        "aria-hidden": "true"
                    }), i().createElement("span", {
                        className: "screen-reader-text assistive-text"
                    }, this.state.shouldShowMobileSecondary ? __("Hide filters", "jetpack-search-pkg") : __("Show filters", "jetpack-search-pkg")))), i().createElement("div", {
                        "aria-live": "polite",
                        className: "jetpack-instant-search__search-results-content",
                        id: "jetpack-instant-search__search-results-content"
                    }, i().createElement("div", {
                        className: "jetpack-instant-search__search-results-primary"
                    }, this.renderPrimarySection()), i().createElement("div", {
                        className: ["jetpack-instant-search__search-results-secondary", (this.state.shouldShowMobileSecondary ? "jetpack-instant-search__search-results-secondary--show-as-modal" : "") + " "].join(" ")
                    }, this.renderSecondarySection())), i().createElement("button", {
                        id: l.m2,
                        onClick: this.closeOverlay
                    }, "Close Search")), this.props.showPoweredBy && i().createElement(u.A, {
                        locale: this.props.locale
                    }))
                }
            }
            const k = v
        },
        1168: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r = s(7723),
                a = s(9362),
                n = s.n(a),
                i = s(3476);
            const __ = r.__;
            class o extends a.Component {
                handleClick = e => {
                    this.props.value !== e.currentTarget.value && (e.preventDefault(), this.props.onChange(e.currentTarget.dataset.value))
                };
                handleSelectChange = e => {
                    this.props.value !== e.currentTarget.value && (e.preventDefault(), this.props.onChange(e.currentTarget.value))
                };
                render() {
                    const e = (0, i.$)(this.props.resultFormat),
                        t = e.size;
                    let s = 0;
                    return e.size > 3 ? n().createElement("div", {
                        "aria-controls": "jetpack-instant-search__search-results-content",
                        className: "jetpack-instant-search__search-sort jetpack-instant-search__search-sort-with-select"
                    }, n().createElement("label", {
                        htmlFor: "jetpack-instant-search__search-sort-select"
                    }, __("Sort:", "jetpack-search-pkg")), n().createElement("select", {
                        className: "jetpack-instant-search__search-sort-select",
                        id: "jetpack-instant-search__search-sort-select",
                        onBlur: this.handleSelectChange,
                        onChange: this.handleSelectChange
                    }, [...e.entries()].map((([e, t]) => n().createElement("option", {
                        value: e,
                        key: e,
                        selected: this.props.value === e ? "selected" : ""
                    }, t))))) : n().createElement("div", {
                        "aria-controls": "jetpack-instant-search__search-results-content",
                        className: "jetpack-instant-search__search-sort jetpack-instant-search__search-sort-with-links"
                    }, n().createElement("div", {
                        className: "screen-reader-text"
                    }, __("Sort by:", "jetpack-search-pkg"), " "), [...e.entries()].map((([e, r]) => n().createElement(n().Fragment, null, n().createElement("button", {
                        "aria-current": this.props.value === e ? "true" : "false",
                        className: "jetpack-instant-search__search-sort-option " + (this.props.value === e ? "is-selected" : ""),
                        "data-value": e,
                        key: e,
                        onClick: this.handleClick
                    }, r), ++s < t ? n().createElement("span", {
                        "aria-hidden": "true",
                        className: "jetpack-instant-search__search-sort-separator"
                    }, "•") : ""))))
                }
            }
        },
        6097: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r = s(9362),
                a = s.n(r),
                n = s(1503),
                i = s(6465);
            const o = e => a().createElement("div", {
                className: "jetpack-instant-search__sidebar"
            }, a().createElement(n.A, {
                filters: e.filters,
                staticFilters: e.staticFilters,
                loading: e.isLoading,
                locale: e.locale,
                postTypes: e.postTypes,
                results: e.response,
                showClearFiltersButton: !0,
                widget: e.widgetOutsideOverlay
            }), a().createElement(i.A, null), e.widgets.map((t => (0, r.createPortal)(a().createElement("div", {
                id: `${t.widget_id}-portaled-wrapper`,
                className: "jetpack-instant-search__portaled-wrapper"
            }, a().createElement(n.A, {
                filters: e.filters,
                staticFilters: e.staticFilters,
                loading: e.isLoading,
                locale: e.locale,
                postTypes: e.postTypes,
                results: e.response,
                showClearFiltersButton: !1,
                showTitle: !1,
                widget: t
            })), document.getElementById(`${t.widget_id}-wrapper`)))))
        },
        1080: (e, t, s) => {
            s.d(t, {
                A: () => p
            });
            var r = s(9362),
                a = s.n(r),
                n = s(4952),
                i = s(3089),
                o = s(999),
                l = s(5450);
            class c extends r.Component {
                onChangeStaticFilter = (e, t) => {
                    this.props.setStaticFilter(e, t), this.props.onChange && this.props.onChange()
                };
                renderStaticFilterComponent = e => Object.hasOwn(e, "visible") && !e.visible ? null : a().createElement(l.A, {
                    aggregation: [],
                    configuration: e,
                    locale: this.props.locale,
                    onChange: this.onChangeStaticFilter,
                    postTypes: this.props.postTypes,
                    type: (0, i.sm)(e),
                    value: this.props.staticFilters[(0, i.xf)(e)],
                    variation: "tabbed"
                });
                render() {
                    const e = (0, i.PM)("tabbed");
                    return e.length ? a().createElement("div", {
                        className: "jetpack-instant-search__search-tabbed-filters"
                    }, e.map(this.renderStaticFilterComponent)) : null
                }
            }
            const p = (0, n.Ng)((e => ({
                staticFilters: e.staticFilters
            })), {
                setStaticFilter: o.$6
            })(c)
        },
        6465: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var r = s(9362),
                a = s.n(r);
            class n extends r.Component {
                container = (0, r.createRef)();
                componentDidMount() {
                    const e = document.getElementsByClassName("jetpack-instant-search__widget-area")[0];
                    e && (e.style.removeProperty("display"), this.container.current.appendChild(e))
                }
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return a().createElement("div", {
                        className: "jetpack-instant-search__widget-area-container",
                        ref: this.container
                    })
                }
            }
        },
        9355: (e, t, s) => {
            function r(e, t, s) {
                if (!e) return "";
                const r = decodeURIComponent(e);
                return (!t || "false" !== r) && (!(!t || "true" !== r) || (s && 0 * +r == 0 ? +r : r))
            }

            function a(e, t, s) {
                let a, n;
                const i = {},
                    o = e.split("&");
                for (t = void 0 === t || t, s = void 0 === s || s; a = o.shift();) a = a.split("="), n = a.shift(), void 0 !== i[n] ? i[n] = [].concat(i[n], r(a.shift(), t, s)) : i[n] = r(a.shift(), t, s);
                return i
            }
            s.d(t, {
                D: () => a
            })
        },
        9470: (e, t, s) => {
            s.r(t), s.d(t, {
                initialize: () => d
            });
            s(7778);
            var r = s(8864),
                a = s(1918),
                n = s(4952),
                i = s(459),
                o = s(5678),
                l = s(7479),
                c = s(1017),
                p = s(7574),
                h = s(1388);
            const u = () => {
                (0, r.render)(a.Ay.createElement(n.Kq, {
                    store: h.A
                }, a.Ay.createElement(i.A, {
                    aggregations: (0, o.q1)([...window[l.O5].widgets, ...window[l.O5].widgetsOutsideOverlay]),
                    enableAnalytics: !0,
                    hasOverlayWidgets: !!window[l.O5].hasOverlayWidgets,
                    initialHref: window.location.href,
                    initialIsVisible: window[l.O5].showResults,
                    isInCustomizer: (0, c.XH)(),
                    overlayOptions: window[l.O5].overlayOptions,
                    options: window[l.O5],
                    shouldCreatePortal: !0,
                    shouldIntegrateWithDom: !0,
                    themeOptions: (0, p.E)(window[l.O5])
                })), document.body)
            };

            function d() {
                window[l.O5] && "siteId" in window[l.O5] && u()
            }
        },
        7152: (e, t, s) => {
            function r() {
                return !window.matchMedia("(prefers-reduced-motion: no-preference)").matches
            }
            s.d(t, {
                y: () => r
            })
        },
        5678: (e, t, s) => {
            s.d(t, {
                $P: () => b,
                pA: () => g,
                q1: () => m
            });
            s(8411);
            var r = s(4224),
                a = s.n(r),
                n = s(1473),
                i = s(6195),
                o = s(5114),
                l = s(7479),
                c = s(3089);
            let p;
            const h = e => Array.isArray(e) && e.length > 0,
                u = (0, o.A)(30, 5 * l.Az),
                d = (0, o.A)(30, 30 * l.Az);

            function m(e = []) {
                const t = {};
                return e.forEach((({
                    filters: e
                }) => e.forEach((e => {
                    t[e.filter_id] = function(e) {
                        switch (e.type) {
                            case "date_histogram":
                                return {
                                    date_histogram: {
                                        field: "post_date_gmt" === e.field ? "date_gmt" : "date",
                                        interval: e.interval
                                    }
                                };
                            case "taxonomy":
                                {
                                    let t = `taxonomy.${e.taxonomy}.slug_slash_name`;
                                    return "post_tag" === e.taxonomy ? t = "tag.slug_slash_name" : "category" === e.taxonomy && (t = "category.slug_slash_name"),
                                    {
                                        terms: {
                                            field: t,
                                            size: e.count
                                        }
                                    }
                                }
                            case "post_type":
                            case "blog_id":
                                return {
                                    terms: {
                                        field: e.type,
                                        size: e.count
                                    }
                                };
                            case "author":
                                return {
                                    terms: {
                                        field: "author_login_slash_name",
                                        size: e.count
                                    }
                                }
                        }
                    }(e)
                })))), t
            }

            function g(e) {
                return e = e ? ? {}, Object.fromEntries(Object.entries(e).filter((([, e]) => e ? .buckets ? .length > 0)).map((([e, t]) => {
                    const s = t.buckets.map((e => ({ ...e,
                        doc_count: 0
                    })));
                    return [e, { ...t,
                        buckets: s
                    }]
                })))
            }
            S();
            const _ = /(\d{4})-(\d{2})-(\d{2})/;

            function y(e, t, s) {
                let r, a;
                "year" === s && ([, r, , ] = t.match(_)), "month" === s && ([, r, a] = t.match(_));
                let n = "",
                    i = "";
                if (a) {
                    const e = +a + 1;
                    n = `${r}-${a}-01`, i = e <= 12 ? `${r}-${e<10?`0${e}`:`${e}`}-01` : +r + 1 + "-01-01"
                } else r && (n = `${r}-01-01`, i = +r + 1 + "-01-01");
                return {
                    range: {
                        [e]: {
                            gte: n,
                            lt: i
                        }
                    }
                }
            }
            const f = new Map([
                ["post_types", e => ({
                    term: {
                        post_type: e
                    }
                })],
                ["authors", e => ({
                    term: {
                        author_login: e
                    }
                })],
                ["blog_ids", e => ({
                    term: {
                        blog_id: e
                    }
                })],
                ["category", e => ({
                    term: {
                        "category.slug": e
                    }
                })],
                ["post_tag", e => ({
                    term: {
                        "tag.slug": e
                    }
                })],
                ["month_post_date", e => y("date", e, "month")],
                ["month_post_date_gmt", e => y("date_gmt", e, "month")],
                ["month_post_modified", e => y("date", e, "month")],
                ["month_post_modified_gmt", e => y("date_gmt", e, "month")],
                ["year_post_date", e => y("date", e, "year")],
                ["year_post_date_gmt", e => y("date_gmt", e, "year")],
                ["year_post_modified", e => y("date", e, "year")],
                ["year_post_modified_gmt", e => y("date_gmt", e, "year")]
            ]);

            function E(e) {
                const t = {};
                return Object.keys(e).forEach((s => {
                    const r = e[s];
                    "group_id" === s && r !== l.$K && (t[s] = r)
                })), t
            }

            function v(e, t, s) {
                const r = {
                    bool: {
                        must: []
                    }
                };
                return (0, c.Xt)().filter((t => h(e[t]))).forEach((t => {
                    e[t].forEach((e => {
                        f.has(t) ? r.bool.must.push(f.get(t)(e)) : r.bool.must.push({
                            term: {
                                [`taxonomy.${t}.slug`]: e
                            }
                        })
                    }))
                })), t && r.bool.must.push(t), s ? .length > 0 && r.bool.must.push({
                    bool: {
                        must_not: s.map((e => f.get("post_types")(e)))
                    }
                }), r
            }
            const k = new Map([
                ["oldest", "date_asc"],
                ["newest", "date_desc"],
                ["relevance", "score_default"]
            ]);

            function w(e) {
                return ["price_asc", "price_desc", "rating_desc"].includes(e) ? e : k.get(e, "score_default")
            }

            function S() {
                p && p.abort(), p = new AbortController
            }

            function b(e, t) {
                const s = a()(Array.from(arguments));
                if (!navigator.onLine && d.get(s)) return Promise.resolve(d.get(s)).then((e => ({
                    _isCached: !0,
                    _isError: !1,
                    _isOffline: !0,
                    ...e
                })));
                if (u.get(s)) return Promise.resolve(u.get(s)).then((e => ({
                    _isCached: !0,
                    _isError: !1,
                    _isOffline: !1,
                    ...e
                })));
                const r = function({
                        aggregations: e,
                        excludedPostTypes: t,
                        filter: s,
                        staticFilters: r,
                        pageHandle: a,
                        query: o,
                        resultFormat: c,
                        sort: p,
                        postsPerPage: h = 10,
                        adminQueryFilter: u,
                        isInCustomizer: d = !1,
                        additionalBlogIds: m = [],
                        highlightFields: g = ["title", "content", "comments"]
                    }) {
                        null === o && (o = "");
                        let _ = ["date", "permalink.url.raw", "tag.name.default", "category.name.default", "post_type", "shortcode_types", "forum.topic_resolved"];
                        (c !== l.UM || d) && (_ = _.concat(["has.image", "image.url.raw", "image.alt_text"])), (c === l.s6 || d) && (_ = _.concat(["meta._wc_average_rating.double", "meta._wc_review_count.long", "wc.formatted_price", "wc.formatted_regular_price", "wc.formatted_sale_price", "wc.price", "wc.sale_price"])), r && r.group_id && r.group_id !== l.$K && (_ = _.concat(["author", "blog_name", "blog_icon_url"]));
                        let y = {
                            aggregations: e,
                            fields: _,
                            highlight_fields: g,
                            filter: v(s, u, t),
                            query: encodeURIComponent(o),
                            sort: w(p),
                            page_handle: a,
                            size: h
                        };
                        return m ? .length > 0 && (y.fields = _.concat(["author", "blog_name", "blog_icon_url", "blog_id"]), y.additional_blog_ids = m), r && Object.keys(r).length > 0 && (y = { ...y,
                            ...E(r)
                        }), (0, i.l)((0, n.U)(y))
                    }(e),
                    o = (c = s, function(e) {
                        const t = u.get(c) || d.get(c);
                        if ("AbortError" === e.name) return t ? {
                            _isCached: !0,
                            _isError: !1,
                            _isOffline: !1,
                            ...t
                        } : null;
                        if (t) return {
                            _isCached: !0,
                            _isError: !0,
                            _isOffline: !1,
                            ...t
                        };
                        throw e
                    });
                var c;
                const h = function(e, t) {
                        return function(s) {
                            const r = { ...s,
                                requestId: t
                            };
                            return u.set(e, r), d.set(e, r), r
                        }
                    }(s, t),
                    m = `/sites/${e.siteId}/search?${r}`,
                    {
                        apiNonce: g,
                        apiRoot: _,
                        homeUrl: y,
                        isPrivateSite: f,
                        isWpcom: k
                    } = window[l.O5];
                let b = `https://public-api.wordpress.com/rest/v1.3${m}`;
                return f && k ? b = `${y}/wp-json/wpcom-origin/v1.3${m}` : f && (b = `${_}jetpack/v4/search?${r}`), S(), fetch(b, {
                    headers: f ? {
                        "X-WP-Nonce": g
                    } : {},
                    credentials: f ? "include" : "same-origin",
                    signal: p.signal
                }).then((e => 200 !== e.status ? e.json().then((e => {
                    throw new Error(e.error)
                })) : e)).then((e => e.json())).then(h).catch(o)
            }
        },
        113: (e, t, s) => {
            function r(e, t) {
                Array.isArray(e) || (e = [e]);
                return 0 !== e.filter((e => t.includes(e))).length
            }
            s.d(t, {
                A: () => r
            })
        },
        7084: (e, t, s) => {
            function r(e) {
                const t = function(e) {
                    let t;
                    return "#" === e[0] && (t = e.substring(1)), 3 === t.length && (t = t.split("").map((e => `${e}${e}`)).join("")), t
                }(e);
                return (299 * parseInt(t.substr(0, 2), 16) + 587 * parseInt(t.substr(2, 2), 16) + 114 * parseInt(t.substr(4, 2), 16)) / 1e3 >= 128 ? "black" : "white"
            }
            s.d(t, {
                d: () => r
            })
        },
        7574: (e, t, s) => {
            function r(e) {
                return [...e.querySelectorAll('input[type="checkbox"]').values()].filter((e => e.checked)).map((e => e.name))
            }

            function a(e) {
                const t = {
                    searchInputSelector: ['input[name="s"]:not(.jetpack-instant-search__box-input)', "#searchform input.search-field:not(.jetpack-instant-search__box-input)", ".search-form input.search-field:not(.jetpack-instant-search__box-input)", ".searchform input.search-field:not(.jetpack-instant-search__box-input)"].join(", "),
                    filterInputSelector: ["a.jetpack-search-filter__link"],
                    overlayTriggerSelector: [".jetpack-instant-search__open-overlay-button", "header#site-header .search-toggle[data-toggle-target]"].join(",")
                };
                return e.theme_options ? { ...t,
                    ...e.theme_options
                } : t
            }
            s.d(t, {
                E: () => a,
                e: () => r
            })
        },
        9440: (e, t, s) => {
            s.d(t, {
                A: () => a
            });
            const r = () => {},
                a = () => r
        },
        6299: (e, t, s) => {
            s.d(t, {
                u: () => a
            });
            var r = s(7723);
            const __ = r.__;

            function a(e) {
                switch (e ? .message) {
                    case "service_unavailable":
                        return (0, r.sprintf)(
                            // translators: %s: Error code.
                            __("Jetpack Search is currently unavailable. Please try again later. [%s]", "jetpack-search-pkg"), e ? .message);
                    case "offline":
                        return __("It looks like you're offline. Please reconnect to load the latest results.", "jetpack-search-pkg");
                    default:
                        return (0, r.sprintf)(
                            // translators: %s: Error code.
                            __("Jetpack Search has encountered an error. Please contact the site administrator if the issue persists. [%s]", "jetpack-search-pkg"), e ? .message ? ? "unknown")
                }
            }
        },
        3089: (e, t, s) => {
            s.d(t, {
                PM: () => i,
                Xt: () => n,
                hM: () => h,
                hX: () => o,
                i$: () => l,
                sm: () => u,
                xf: () => p
            });
            var r = s(7479);
            const a = Object.freeze(["blog_ids", "authors", "post_types", "category", "post_format", "post_tag", "month_post_date", "month_post_date_gmt", "month_post_modified", "month_post_modified_gmt", "year_post_date", "year_post_date_gmt", "year_post_modified", "year_post_modified_gmt"]);

            function n(e = window[r.O5] ? .widgets, t = window[r.O5] ? .widgetsOutsideOverlay) {
                const s = new Set(a);
                return [...e ? ? [], ...t ? ? []].map((e => e.filters)).filter((e => Array.isArray(e))).reduce(((e, t) => e.concat(t)), []).filter((e => "taxonomy" === e.type)).forEach((e => s.add(e.taxonomy))), [...s]
            }

            function i(e) {
                return window[r.O5] ? .staticFilters ? window[r.O5].staticFilters.filter((t => !e || ("sidebar" === e && !t.variation || !(!e || !t.variation) && t.variation === e))) : []
            }

            function o() {
                const e = i(),
                    t = new Set;
                return e.forEach((e => t.add(e.filter_id))), [...t]
            }

            function l(e = window[r.O5] ? .widgets) {
                const t = function(e = window[r.O5] ? .widgets) {
                    return e ? .map(c).reduce(((e, t) => e.concat(t)), []) ? ? []
                }(e);
                return n().filter((e => !t.includes(e)))
            }

            function c(e) {
                return e.filters.map(p).filter((e => "string" == typeof e))
            }

            function p(e) {
                return "date_histogram" === e.type ? `${e.interval}_${e.field}` : "taxonomy" === e.type ? `${e.taxonomy}` : "post_type" === e.type ? "post_types" : "author" === e.type ? "authors" : "blog_id" === e.type ? "blog_ids" : "group" === e.type ? e.filter_id : null
            }

            function h(e) {
                return e.includes("month") ? {
                    field: e.split("month_").pop(),
                    type: "date_histogram",
                    interval: "month"
                } : e.includes("year") ? {
                    field: e.split("year_").pop(),
                    type: "date_histogram",
                    interval: "year"
                } : "post_types" === e ? {
                    type: "post_type"
                } : "authors" === e ? {
                    type: "author"
                } : "blog_ids" === e ? {
                    type: "blog_id"
                } : "group" === e ? {
                    type: "group"
                } : {
                    type: "taxonomy",
                    taxonomy: e
                }
            }

            function u(e) {
                return "date_histogram" === e.type ? "date" : "taxonomy" === e.type ? "taxonomy" : "post_type" === e.type ? "postType" : "author" === e.type ? "author" : "blog_id" === e.type ? "blogId" : "group" === e.type ? "group" : void 0
            }
        },
        4809: (e, t, s) => {
            s.d(t, {
                g: () => n
            });
            var r = s(4936),
                a = s(9362);

            function n(e, t, s, n = !0) {
                const [i, o] = (0, a.useState)(null), l = (c = e) ? c.split("?", 1)[0] : "";
                var c;
                const p = l ? .substring(l.lastIndexOf(".") + 1).toLowerCase(),
                    h = ["gif", "jpg", "jpeg", "png", "webp", "heic"].includes(p);
                return (0, a.useEffect)((() => {
                    if (n && h) {
                        const a = (0, r.A)(l, {
                            resize: `${t},${s}`
                        });
                        o(a || e)
                    } else o(e)
                }), [e, t, s, n, l, h]), i
            }
        },
        6122: (e, t, s) => {
            s.d(t, {
                $Z: () => o,
                NY: () => l,
                fX: () => p,
                lz: () => c
            });
            var r = s(6195),
                a = s(9355),
                n = s(7479),
                i = s(3089);

            function o(e = window.location.search) {
                return (0, a.D)(e.substring(1), !1, !1)
            }

            function l(e) {
                window.instantSearchSkipPushState || function(e) {
                    if (history.pushState) {
                        const t = new window.URL(window.location.href);
                        window[n.O5] && "homeUrl" in window[n.O5] && (t.href = window[n.O5].homeUrl), t.search = e, window.history.pushState(null, null, t.toString())
                    }
                }((0, r.l)(e))
            }

            function c() {
                const e = o();
                return n.SK.includes(e.result_format) ? e.result_format : null
            }

            function p(e, t, s = !1) {
                if (history.pushState && history.replaceState) {
                    const a = new URL(e),
                        n = o(a.search),
                        l = [...(0, i.Xt)(), ...(0, i.hX)(), "s", "sort"],
                        c = Object.keys(n).some((e => l.includes(e)));
                    if (c && l.forEach((e => delete n[e])), a.search = (0, r.l)(n), s ? window.history.replaceState(null, null, a.toString()) : window.history.pushState(null, null, a.toString()), c) return void window.location.reload();
                    t()
                }
            }
        },
        3476: (e, t, s) => {
            s.d(t, {
                $: () => a
            });
            var r = s(7479);

            function a(e = null) {
                return e !== r.s6 ? r.QB : new Map([...r.QB, ...r.Wq])
            }
        },
        8924: (e, t, s) => {
            s.d(t, {
                A8: () => p,
                Re: () => n,
                kX: () => o,
                oD: () => u,
                wH: () => h,
                wk: () => l,
                ze: () => i
            });
            s(8411);
            let r = !0;
            const a = {};

            function n() {
                r = !1
            }

            function i(e = !1) {
                (e || r) && (window._tkq = window._tkq || [])
            }

            function o(e = !1) {
                (e || r) && window._tkq.push(["clearIdentity"])
            }

            function l(e, t = !1) {
                (t || r) && (a.blog_id = e)
            }

            function c(e, t, s = !1) {
                (s || r) && window._tkq.push(["recordEvent", e, { ...a,
                    ...t
                }])
            }

            function p(e, t = !1) {
                c("jetpack_instant_search_traintracks_render", e, t)
            }

            function h(e, t = !1) {
                c("jetpack_instant_search_traintracks_interact", e, t)
            }

            function u(e, t = !1) {
                c("jetpack_instant_search_static_filter_select", e, t)
            }
        },
        999: (e, t, s) => {
            function r(e) {
                return {
                    type: "MAKE_SEARCH_REQUEST",
                    options: e
                }
            }

            function a({
                options: e,
                response: t
            }) {
                return {
                    type: "RECORD_SUCCESSFUL_SEARCH_REQUEST",
                    options: e,
                    response: t
                }
            }

            function n(e) {
                return {
                    type: "RECORD_FAILED_SEARCH_REQUEST",
                    error: e
                }
            }

            function i({
                isHistoryNavigation: e = !1
            } = {}) {
                return {
                    type: "INITIALIZE_QUERY_VALUES",
                    isHistoryNavigation: e
                }
            }

            function o(e, t = !0) {
                return {
                    type: "SET_SEARCH_QUERY",
                    query: e,
                    propagateToWindow: t
                }
            }

            function l(e, t = !0) {
                return {
                    type: "SET_SORT",
                    sort: e,
                    propagateToWindow: t
                }
            }

            function c(e, t, s = !0) {
                return {
                    type: "SET_FILTER",
                    name: e,
                    value: t,
                    propagateToWindow: s
                }
            }

            function p(e, t, s = !0) {
                return {
                    type: "SET_STATIC_FILTER",
                    name: e,
                    value: t,
                    propagateToWindow: s
                }
            }

            function h(e = !0) {
                return {
                    type: "CLEAR_FILTERS",
                    propagateToWindow: e
                }
            }

            function u() {
                return {
                    type: "CLEAR_QUERY_VALUES"
                }
            }

            function d() {
                return {
                    type: "DISABLE_QUERY_STRING_INTEGRATION"
                }
            }
            s.d(t, {
                $6: () => p,
                H6: () => a,
                JF: () => i,
                Qt: () => u,
                R6: () => c,
                Ri: () => o,
                WL: () => n,
                d1: () => l,
                go: () => d,
                hi: () => h,
                oZ: () => r
            })
        },
        8114: (e, t, s) => {
            s.d(t, {
                A: () => d
            });
            var r = s(3257),
                a = s.n(r),
                n = s(5678),
                i = s(7479),
                o = s(3089),
                l = s(6122),
                c = s(999);
            let p = 0,
                h = !0;
            const u = a()(l.NY, i.$J);
            const d = {
                CLEAR_FILTERS: function(e) {
                    if (!1 === e.propagateToWindow || !h) return;
                    const t = (0, l.$Z)();
                    (0, o.Xt)().forEach((e => delete t[e])), (0, o.hX)().forEach((e => delete t[e])), (0, l.NY)(t)
                },
                DISABLE_QUERY_STRING_INTEGRATION: function() {
                    h = !1
                },
                INITIALIZE_QUERY_VALUES: function(e, t) {
                    const s = (0, l.$Z)();
                    let r;
                    "s" in s ? t.dispatch((0, c.Ri)(s.s, !1)) : t.dispatch((0, c.Ri)(null, !1)), i.Hs.includes(s.sort) ? r = s.sort : "date" === s.orderby ? r = "string" == typeof s.order && s.order.toUpperCase() === i.Ri ? "oldest" : "newest" : "relevance" === s.orderby && (r = "relevance"), "string" == typeof r && t.dispatch((0, c.d1)(r, !1)), t.dispatch((0, c.hi)(!1)), (0, o.Xt)().filter((e => e in s)).forEach((e => t.dispatch((0, c.R6)(e, s[e], !1)))), (0, o.hX)().filter((e => e in s)).forEach((e => t.dispatch((0, c.$6)(e, s[e], !1))))
                },
                MAKE_SEARCH_REQUEST: function(e, t) {
                    p++, (0, n.$P)(e.options, p).then((s => {
                        null !== s && t.dispatch((0, c.H6)({
                            options: e.options,
                            response: s
                        }))
                    })).catch((e => {
                        console.error("Jetpack Search ", e), t.dispatch((0, c.WL)(e))
                    }))
                },
                SET_FILTER: function(e) {
                    if (!1 === e.propagateToWindow || !h) return;
                    if (!(0, o.Xt)().includes(e.name)) return;
                    const t = (0, l.$Z)();
                    t[e.name] = e.value, (0, l.NY)(t)
                },
                SET_STATIC_FILTER: function(e) {
                    if (!1 === e.propagateToWindow) return;
                    if (!(0, o.hX)().includes(e.name)) return;
                    const t = (0, l.$Z)();
                    t[e.name] = e.value, (0, l.NY)(t)
                },
                SET_SEARCH_QUERY: function(e) {
                    if (!1 === e.propagateToWindow || !h) return;
                    const t = (0, l.$Z)();
                    null !== e.query ? t.s = e.query : delete t.s, u(t)
                },
                SET_SORT: function(e) {
                    if (!1 === e.propagateToWindow || !h) return;
                    if (!i.Hs.includes(e.sort)) return;
                    const t = (0, l.$Z)();
                    t.sort = e.sort, delete t.order, delete t.orderby, (0, l.NY)(t)
                }
            }
        },
        1388: (e, t, s) => {
            s.d(t, {
                A: () => c
            });
            var r = s(6556),
                a = s(2047),
                n = s.n(a),
                i = s(8114),
                o = s(2607);
            const l = [n()(i.A)],
                c = (0, r.y$)(o.Ay, {}, (0, r.Tw)(...l))
        },
        1339: (e, t, s) => {
            s.d(t, {
                JD: () => n,
                VP: () => i,
                gw: () => o
            });
            var r = s(5678);
            let a = {};

            function n(e = !1, t) {
                switch (t.type) {
                    case "MAKE_SEARCH_REQUEST":
                    case "RECORD_SUCCESSFUL_SEARCH_REQUEST":
                        return !1;
                    case "RECORD_FAILED_SEARCH_REQUEST":
                        return !0
                }
                return e
            }

            function i(e = !1, t) {
                switch (t.type) {
                    case "MAKE_SEARCH_REQUEST":
                        return !0;
                    case "RECORD_SUCCESSFUL_SEARCH_REQUEST":
                    case "RECORD_FAILED_SEARCH_REQUEST":
                        return !1
                }
                return e
            }

            function o(e = {}, t) {
                switch (t.type) {
                    case "RECORD_SUCCESSFUL_SEARCH_REQUEST":
                        {
                            if ("requestId" in e && "requestId" in t.response && e.requestId > t.response.requestId) return e;
                            const s = { ...t.response
                            };
                            return t.options.pageHandle && (s.aggregations = { ..."aggregations" in e && !Array.isArray(e) ? e.aggregations : {},
                                ...Array.isArray(s.aggregations) ? {} : s.aggregations
                            }, s.results = [..."results" in e ? e.results : [], ...s.results], a = {}),
                            Array.isArray(s.results) && s.results.length > s.total && (s.total = s.results.length),
                            t.options.pageHandle || (s.results ? .length > 0 ? a = (0, r.pA)(s.aggregations) : s.aggregations = a),
                            s
                        }
                    case "RECORD_FAILED_SEARCH_REQUEST":
                        return e.error = t.error, e
                }
                return e
            }
        },
        6035: (e, t, s) => {
            function r(e = !1, t) {
                switch (t.type) {
                    case "INITIALIZE_QUERY_VALUES":
                        return t.isHistoryNavigation;
                    case "SET_SEARCH_QUERY":
                    case "SET_SORT":
                    case "CLEAR_FILTERS":
                    case "SET_FILTER":
                        return !t.propagateToWindow && e
                }
                return e
            }
            s.d(t, {
                x: () => r
            })
        },
        2607: (e, t, s) => {
            s.d(t, {
                Ay: () => l
            });
            var r = s(6556),
                a = s(1339),
                n = s(6035),
                i = s(1253),
                o = s(7647);
            const l = (0, r.HY)({
                filters: i.uW,
                staticFilters: i.gi,
                hasError: a.JD,
                isLoading: a.VP,
                isHistoryNavigation: n.x,
                response: a.gw,
                searchQuery: i.ZF,
                serverOptions: o.o,
                sort: i.di
            })
        },
        1253: (e, t, s) => {
            s.d(t, {
                ZF: () => n,
                di: () => i,
                gi: () => l,
                uW: () => o
            });
            var r = s(7479),
                a = s(3089);

            function n(e = null, t) {
                switch (t.type) {
                    case "SET_SEARCH_QUERY":
                        return t.query;
                    case "CLEAR_QUERY_VALUES":
                        return null
                }
                return e
            }

            function i(e = null, t) {
                switch (t.type) {
                    case "SET_SORT":
                        return r.Hs.includes(t.sort) ? t.sort : e;
                    case "CLEAR_QUERY_VALUES":
                        return null
                }
                return e
            }

            function o(e = {}, t) {
                switch (t.type) {
                    case "CLEAR_FILTERS":
                    case "CLEAR_QUERY_VALUES":
                        return {};
                    case "SET_FILTER":
                        if (!(0, a.Xt)().includes(t.name) || !Array.isArray(t.value) && "string" != typeof t.value) return e;
                        if (0 === t.value.length) {
                            const s = { ...e
                            };
                            return delete s[t.name], s
                        }
                        return { ...e,
                            [t.name]: "string" == typeof t.value ? [t.value] : t.value
                        }
                }
                return e
            }

            function l(e = {}, t) {
                switch (t.type) {
                    case "CLEAR_QUERY_VALUES":
                        return {};
                    case "SET_STATIC_FILTER":
                        return (0, a.hX)().includes(t.name) ? { ...e,
                            [t.name]: t.value
                        } : e
                }
                return e
            }
        },
        7647: (e, t, s) => {
            s.d(t, {
                o: () => a
            });
            var r = s(7479);

            function a(e = window[r.O5] ? ? {}) {
                return e
            }
        },
        538: (e, t, s) => {
            s.d(t, {
                FD: () => p,
                JD: () => i,
                S7: () => m,
                V8: () => c,
                VP: () => l,
                gA: () => h,
                kJ: () => u,
                mi: () => n,
                rB: () => o,
                xk: () => g,
                xp: () => d
            });
            var r = s(7479),
                a = s(3089);

            function n(e) {
                return e.response
            }

            function i(e) {
                return e.hasError
            }

            function o(e) {
                return !i(e) && n(e) ? .page_handle
            }

            function l(e) {
                return e.isLoading
            }

            function c(e) {
                return e.searchQuery
            }

            function p(e, t) {
                return "string" != typeof t && (t = r.x6), "string" == typeof e.sort ? e.sort : t
            }

            function h(e) {
                return e.filters
            }

            function u(e) {
                return e.staticFilters
            }

            function d(e) {
                return null !== c(e) || function(e) {
                    return Object.keys(e.filters).length > 0
                }(e) && e.serverOptions.overlayOptions.enableFilteringOpensOverlay || function(e) {
                    return Object.keys(e.staticFilters).length > 0
                }(e)
            }

            function m(e) {
                if (!e.serverOptions.widgets || !e.filters) return {};
                const t = (0, a.i$)(e.serverOptions.widgets);
                return {
                    filters: Object.keys(e.filters).filter((e => t.includes(e))).map(a.hM)
                }
            }

            function g(e) {
                return e.isHistoryNavigation
            }
        }
    }
]);