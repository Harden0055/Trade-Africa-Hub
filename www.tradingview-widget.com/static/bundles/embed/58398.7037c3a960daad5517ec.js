"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [58398], {
        129592: (e, t, n) => {
            n.d(t, {
                createGroup: () => o,
                registerWindow: () => a
            });
            var r = n(163586),
                i = n(764250);
            n(591800);
            const s = new r.ActionManager;
            s.pressedKeys(), s.keyboardPressedKeysState();

            function o(e) {
                return new i.ActionGroup(s, e)
            }

            function a(e) {
                s.listen(e)
            }
        },
        591800: (e, t, n) => {
            n.d(t, {
                Modifiers: () => s,
                hashFromEvent: () => a,
                humanReadableHash: () => u,
                isMacKeyboard: () => i,
                modifiersFromEvent: () => o
            });
            var r = n(167175);
            const i = r.isMac || r.isIOS;
            var s;

            function o(e) {
                let t = 0;
                return e.shiftKey && (t += 1024), e.altKey && (t += 512), e.ctrlKey && (t += 256), e.metaKey && (t += 2048), t
            }

            function a(e) {
                return o(e) | e.keyCode
            }! function(e) {
                e[e.None = 0] = "None", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] = "Shift", e[e.Mod = i ? 2048 : 256] = "Mod", e[e.Control = 256] = "Control", e[e.Meta = 2048] = "Meta"
            }(s || (s = {}));
            const c = {
                    9: "⇥",
                    13: "↵",
                    27: "Esc",
                    8: i ? "⌫" : "Backspace",
                    32: "Space",
                    35: "End",
                    36: "Home",
                    37: "←",
                    38: "↑",
                    39: "→",
                    40: "↓",
                    45: "Ins",
                    46: "Del",
                    188: ",",
                    191: "/"
                },
                l = {
                    9: "Tab",
                    13: "Enter",
                    27: "Esc",
                    8: "Backspace",
                    32: "Space",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Ins",
                    46: "Del",
                    188: ",",
                    191: "/"
                };
            for (let e = 1; e <= 16; e++) c[e + 111] = `F${e}`, l[e + 111] = `F${e}`;

            function u(e) {
                let t = function(e, t = !i) {
                    let n = "";
                    return 256 & e && (n += d(i ? "^" : "Ctrl", t)), 512 & e && (n += d(i ? "⌥" : "Alt", t)), 1024 & e && (n += d(i ? "⇧" : "Shift", t)), 2048 & e && (n += d(i ? "⌘" : "Win", t)), n
                }(e);
                const n = 255 & e;
                return t += n in c ? c[n] : String.fromCharCode(n), t
            }

            function d(e, t) {
                return `${e}${t?" + ":i?" ":""}`
            }
        },
        607423: (e, t, n) => {
            n.d(t, {
                isNativeUIInteraction: () => s
            });
            var r = n(591800);

            function i(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function s(e, t) {
                if (!t) return !1;
                const n = 255 & e;
                if (27 === n || n >>> 4 == 7) return !1;
                switch (e ^ n) {
                    case r.Modifiers.Alt:
                        return (38 === n || 40 === n) && "SELECT" === t.tagName || i(t);
                    case r.Modifiers.Alt + r.Modifiers.Shift:
                        return i(t);
                    case r.Modifiers.Mod:
                        if (67 === n || !r.isMacKeyboard && 45 === n) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return i(t);
                    case r.Modifiers.Mod + r.Modifiers.Shift:
                        return n >= 33 && n <= 40 && i(t);
                    case r.Modifiers.Shift:
                    case 0:
                        return 9 === n ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t) || 13 === n || 32 === n || 9 === n) && ("form" in t || t.isContentEditable)
                }
                return !1
            }
        },
        251954: (e, t, n) => {
            n.d(t, {
                emit: () => c,
                subscribe: () => a
            });
            var r = n(942634);
            const i = {},
                s = [],
                o = {};

            function a(e, t, n, s) {
                i.hasOwnProperty(e) || (i[e] = new r.Delegate), o[e] ? t.call(n) : i[e].subscribe(n, t, s)
            }

            function c(e, ...t) {
                const n = [e].concat(t);
                s.forEach((e => {
                    e.apply(null, n)
                })), i.hasOwnProperty(e) && i[e].fire.apply(i[e], t)
            }
        },
        799786: (e, t, n) => {
            n.d(t, {
                createGroup: () => r.createGroup
            });
            var r = n(129592),
                i = n(764250),
                s = n(591800),
                o = n(345848);
            (0, r.registerWindow)(window), i.ActionGroup.setMatchedHotkeyHandler((e => {
                (0,
                    o.trackEvent)("Keyboard Shortcuts", (0, s.humanReadableHash)(e))
            }))
        },
        345848: (e, t, n) => {
            n.d(t, {
                trackEvent: () => o
            });
            n(251954);
            var r = n(764829);
            const i = (0, n(338619).getLogger)("Common.TrackEvent");
            let s = !1;
            const o = (e, t, n) => {
                if (s) return;
                let o = (e ? e + ":" : "") + t;
                n && (o += " " + n), i.logNormal(o), r.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: n
                })
            };
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = o)
        },
        942634: (e, t, n) => {
            n.d(t, {
                Delegate: () => s
            });
            const r = (0, n(692558).getLogger)("Common.Delegate");

            function i(e) {
                return !e.singleShot
            }
            class s {
                constructor() {
                    this.fire = this._fireImpl.bind(this), this._listeners = []
                }
                subscribe(e, t, n) {
                    this._listeners.push({
                        object: e,
                        member: t,
                        singleShot: !!n,
                        skip: !1
                    })
                }
                unsubscribe(e, t) {
                    for (let n = 0; n < this._listeners.length; ++n) {
                        const r = this._listeners[n];
                        if (r.object === e && r.member === t) {
                            r.skip = !0, this._listeners.splice(n, 1);
                            break
                        }
                    }
                }
                unsubscribeAll(e) {
                    for (let t = this._listeners.length - 1; t >= 0; --t) {
                        const n = this._listeners[t];
                        n.object === e && (n.skip = !0, this._listeners.splice(t, 1))
                    }
                }
                destroy() {
                    this._listeners = []
                }
                _fireImpl(...e) {
                    const t = this._listeners;
                    this._listeners = this._listeners.filter(i);
                    const n = t.length;
                    for (let i = 0; i < n; ++i) {
                        const n = t[i];
                        if (!n.skip) try {
                            n.member.apply(n.object || null, e)
                        } catch (e) {
                            r.logError(`${e&&(e.stack||e.message)}`)
                        }
                    }
                }
            }
        },
        750139: (e, t, n) => {
            function r(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }
            n.d(t, {
                clamp: () => r
            })
        }
    }
]);