! function() {
    "use strict";
    const e = (e, t, n) => {
            (e instanceof NodeList ? e : [e]).forEach(e => e.addEventListener(t, t => n(t, e)))
        },
        t = (e, t) => {
            r(e, t, "toggle")
        },
        n = (e, t) => {
            r(e, t, "add")
        },
        o = (e, t) => {
            r(e, t, "remove")
        },
        r = (e, t, n) => {
            const o = t.split(" ");
            (e instanceof NodeList ? e : [e]).forEach(e => e.classList[n].apply(e.classList, o))
        };
    let i = null,
        c = 2;
    const s = () => {
            const {
                masonryStatus: e,
                masonryColumns: t,
                blogLayout: n
            } = NeveProperties;
            "enabled" !== e || t < 2 || (i = document.querySelector(".nv-index-posts .posts-wrapper"), null !== i && imagesLoaded(i, () => {
                const e = "article.layout-".concat(n);
                window.nvMasonry = new Masonry(i, {
                    itemSelector: e,
                    columnWidth: e,
                    percentPosition: !0
                })
            }))
        },
        a = () => {
            "enabled" === NeveProperties.infScroll && null !== document.querySelector(".nv-index-posts .posts-wrapper") && ((e, t, n = .5) => {
                if (!e) return;
                new IntersectionObserver(o => {
                    if (o[0].intersectionRatio <= n) return;
                    t();
                    const r = setInterval(() => {
                        const n = e.getBoundingClientRect(),
                            {
                                top: o,
                                left: i,
                                right: c,
                                bottom: s
                            } = n,
                            {
                                innerWidth: a,
                                innerHeight: l
                            } = window;
                        o >= 0 && i >= 0 && c <= a && s <= l ? t() : clearInterval(r)
                    }, 750)
                }).observe(e)
            })(document.querySelector(".infinite-scroll-trigger"), () => {
                if (parent && parent.wp && parent.wp.customize) return parent.wp.customize.requestChangesetUpdate().then(() => {
                    l()
                }), !1;
                l()
            })
        },
        l = () => {
            const e = window.document,
                t = window.NeveProperties,
                n = e.querySelector(".infinite-scroll-trigger");
            if (null === n) return;
            const o = e.querySelector(".nv-loader");
            if (o.style.display = "block", c > t.maxPages) return n.parentNode.removeChild(n), void(o.style.display = "none");
            const r = e.querySelector(".nv-index-posts .posts-wrapper"),
                i = t.lang,
                s = t.endpoint + c,
                a = u(i ? s + "/" + i : s);
            c++;
            const l = e.createElement("div");
            r.appendChild(l), ((e, t, n) => {
                const o = new XMLHttpRequest;
                o.onload = () => {
                    4 === o.readyState && 200 === o.status && t(o.response)
                }, o.onerror = () => {}, o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), o.send(n)
            })(a, e => {
                if (l.outerHTML = JSON.parse(e), "enabled" !== t.masonryStatus) return !1;
                window.nvMasonry.reloadItems(), window.nvMasonry.layout()
            }, t.query)
        },
        u = e => "undefined" == typeof wp || void 0 === wp.customize ? e : (e += "?customize_changeset_uuid=" + wp.customize.settings.changeset.uuid + "&customize_autosaved=on", "undefined" == typeof _wpCustomizeSettings ? e : e += "&customize_preview_nonce=" + _wpCustomizeSettings.nonce.preview),
        d = ["dropdown-open", "active", "nav-clickaway-overlay"],
        p = () => {
            m(), document.addEventListener("click", (function(e) {
                e.target.hash && e.target.hash.includes("#") && window.HFG.toggleMenuSidebar(!1)
            })), v(), g(), b(), window.HFG.initSearch = function() {
                g(), v()
            }
        },
        m = () => {
            const {
                isRTL: e
            } = NeveProperties, t = document.querySelectorAll(".sub-menu, .minimal .nv-nav-search");
            if (0 === t.length) return;
            const n = window.innerWidth;
            t.forEach(t => {
                let o = t.getBoundingClientRect(),
                    r = o.left;
                r < 0 && (t.style.right = e ? "-100%" : "auto", t.style.left = e ? "auto" : 0), r + o.width >= n && (t.style.right = e ? 0 : "100%", t.style.left = "auto"), o = t.getBoundingClientRect(), r = o.left, (r < 0 || r + o.width >= n) && (t.style.transform = "translateX(" + (e ? "-" : "") + (Math.abs(r) + 20) + "px)")
            }), "undefined" != typeof menuCalcEvent && window.dispatchEvent(menuCalcEvent)
        };

    function v() {
        const t = document.querySelectorAll(".caret-wrap");
        e(t, "click", f)
    }

    function f(e, n) {
        e.preventDefault(), e.stopPropagation();
        const o = n.parentNode.parentNode.querySelector(".sub-menu");
        t(n, d[0]), t(o, d[0]), S(document.querySelectorAll(".".concat(d[0])), d[0])
    }
    const y = e => e === document || "none" !== window.getComputedStyle(e, null).display && y(e.parentNode);
    let w = {};

    function h(e) {
        const t = function(e = document) {
                return [...e.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(e => !e.hasAttribute("disabled") && !e.getAttribute("aria-hidden") && y(e))
            }(w.container),
            n = 9 === e.keyCode,
            o = e.shiftKey,
            r = 27 === e.keyCode,
            i = document.activeElement,
            c = t[t.length - 1],
            s = t[0];
        r && (e.preventDefault(), w.backFocus.focus(), window.HFG.toggleMenuSidebar(!1), document.dispatchEvent(new CustomEvent("ftrap-end"))), !o && n && c === i && (e.preventDefault(), s.focus()), o && n && s === i && (e.preventDefault(), c.focus()), n && s === c && e.preventDefault()
    }

    function g() {
        const n = window.document,
            r = n.querySelectorAll(".nv-nav-search") || [],
            i = n.querySelectorAll(".menu-item-nav-search") || [],
            c = n.querySelectorAll(".close-responsive-search") || [];
        e(i, "click", (e, o) => {
            e.preventDefault(), e.stopPropagation(), t(o, d[1]), S(o, d[1]), n.dispatchEvent(new CustomEvent("ftrap-run", {
                detail: {
                    container: o.querySelector(".nv-nav-search"),
                    close: ".close-responsive-search",
                    firstFocus: ".search-field",
                    backFocus: o
                }
            }))
        }), e(r, "click", e => {
            e.stopPropagation()
        }), e(c, "click", e => {
            e.preventDefault(), o(i, d[1]);
            const t = n.querySelector(".".concat(d[2]));
            null !== t && t.parentNode.removeChild(t)
        })
    }

    function b() {
        const e = document.querySelector(".header--row .menu-item-nav-cart");
        if (null === e) return;
        const t = e.querySelector(".nv-nav-cart:not(.cart-off-canvas)");
        null !== t && (t.style.left = e.getBoundingClientRect().left < 350 ? 0 : null)
    }

    function S(e, t) {
        let r = document.querySelector(".".concat(d[2]));
        null !== r && r.parentNode.removeChild(r), r = document.createElement("div"), n(r, d[2]);
        const i = document.querySelector("header.header");
        i.parentNode.insertBefore(r, i), r.addEventListener("click", () => {
            o(e, t), r.parentNode.removeChild(r)
        })
    }
    document.addEventListener("ftrap-run", (function(e) {
        w = e.detail, setTimeout((function(e) {
            e.container.querySelector(e.firstFocus).focus()
        }), 100, w), document.addEventListener("keydown", h)
    })), document.addEventListener("ftrap-end", (function() {
        w = {}, document.removeEventListener("keydown", h)
    })), window.addEventListener("resize", b);
    const q = ".close-sidebar-panel .navbar-toggle",
        E = ["is-menu-sidebar", "hiding-header-menu-sidebar", "is-active"],
        C = function() {
            this.options = {
                menuToggleDuration: 300
            }, this.init()
        },
        k = (e, t = !0) => {
            e.forEach((function(e) {
                t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
            }))
        };

    function L() {
        window.HFG = new C, (() => {
            if (null === document.querySelector(".blog.nv-index-posts")) return !1;
            s(), a()
        })(), p()
    }

    function N() {
        m()
    }
    let A;
    C.prototype.init = function(t = !1) {
        const n = window.document;
        if (!1 === t) {
            const t = n.querySelectorAll(q);
            e(t, "click", () => {
                this.toggleMenuSidebar(!1)
            })
        }
        const o = n.querySelectorAll(".menu-mobile-toggle");
        e(o, "click", e => {
            this.toggleMenuSidebar(!e.target.parentElement.classList.contains("is-active"), e.target)
        });
        const r = n.querySelector(".header-menu-sidebar-overlay");
        r && e(r, "click", function() {
            this.toggleMenuSidebar(!1)
        }.bind(this))
    }, C.prototype.toggleMenuSidebar = function(e, t = null) {
        const r = window.document,
            i = r.querySelectorAll(".menu-mobile-toggle");
        o(r.body, E[1]);
        const c = r.querySelectorAll("#header-menu-sidebar, .hfg-ov"),
            s = r.querySelectorAll(".neve-skip-link, #content, .scroll-to-top, #site-footer, .header--row");
        if (!NeveProperties.isCustomize && r.body.classList.contains(E[0]) || !1 === e) {
            const e = r.querySelector(".nav-clickaway-overlay");
            null !== e && e.parentNode.removeChild(e), n(r.body, E[1]), o(r.body, E[0]), o(i, E[2]), setTimeout(function() {
                o(r.body, E[1])
            }.bind(this), 1e3), k(s, !1), k(c), r.dispatchEvent(new CustomEvent("ftrap-end"))
        } else n(r.body, E[0]), n(i, E[2]), t && r.dispatchEvent(new CustomEvent("ftrap-run", {
            detail: {
                container: r.getElementById("header-menu-sidebar"),
                close: q,
                firstFocus: q + ",.menu-item a",
                backFocus: t
            }
        })), k(c, !1), k(s)
    }, window.addEventListener("load", () => {
        L()
    }), window.addEventListener("resize", () => {
        clearTimeout(A), A = setTimeout(N, 500)
    })
}();