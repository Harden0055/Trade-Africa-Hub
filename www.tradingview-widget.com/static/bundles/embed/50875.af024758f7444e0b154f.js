"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [50875], {
        509077: (e, t, i) => {
            i.d(t, {
                getNewPeveCloseMode: () => o
            });
            let r = !1;

            function o() {
                return r
            }
        },
        194001: (e, t, i) => {
            i.d(t, {
                QuoteSession: () => o
            });
            var r = i(79342);
            class o {
                constructor(e, t = (0, r.randomHash)()) {
                    this._sessionstarted = !1, this._globalHandler = null, this._chartApi = e, this._sessionid = "qs_" + t
                }
                destroy() {
                    this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
                }
                connected() {
                    return this._chartApi.connected()
                }
                connect(e) {
                    this._globalHandler = e, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
                }
                disconnect() {
                    this._chartApi.disconnect()
                }
                quoteAddSymbols(e) {
                    this._chartApi.quoteAddSymbols(this._sessionid, e)
                }
                quoteRemoveSymbols(e) {
                    this._chartApi.quoteRemoveSymbols(this._sessionid, e)
                }
                quoteFastSymbols(e) {
                    this._chartApi.quoteFastSymbols(this._sessionid, e)
                }
                quoteSetFields(e) {
                    this._chartApi.quoteSetFields(this._sessionid, e)
                }
                onMessage(e) {
                    var t;
                    switch (e.method) {
                        case "connected":
                            this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
                            break;
                        case "disconnected":
                            this._sessionstarted = !1
                    }
                    null === (t = this._globalHandler) || void 0 === t || t.call(this, e)
                }
                quoteHibernateAll() {
                    this._chartApi.quoteHibernateAll(this._sessionid)
                }
            }
            window.TradingView.QuoteSession = o
        },
        360451: (e, t, i) => {
            e = i.nmd(e);
            var r = i(920057).default,
                o = i(290484).default,
                s = i(735211).PriceFormatter;
            const {
                uniq: a
            } = i(523863);
            var n = i(79342);
            const {
                normalizeUpdateMode: _
            } = i(307239);
            var l = i(45003).deepExtend;
            const {
                QUOTE_FIELDS_CACHE: c,
                QUOTE_FIELDS: m
            } = i(176637);
            var u, d = i(942634).Delegate,
                p = i(509077).getNewPeveCloseMode;

            function h(e, t) {
                this.options = Object.assign({
                    throttleTimeout: 125
                }, t), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new d, this.onDisconnect = new d, this._quoteApi = new u(window.ChartApiInstance), this._type = e || "full", this._delayUpdateFastSymbols = o(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this._waitingForSnapshot = {}, this.connect()
            }
            u = i(194001).QuoteSession, h.prototype.destroy = function() {
                    this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
                }, h.prototype.typeFields = {}, h.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "typespecs", "update_mode", "volume", "variable_tick_size", "value_unit_id", "unit_id", "measure"],
                h.prototype.typeFields.simpleDetailed = [].concat(h.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]), h.prototype.typeFields.full = [], h.prototype.typeFields.watchlist = [].concat(h.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id"]), h.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description", "local_description", "language", "sector", "type", "typespecs", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_calc", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm", "format", "value_unit_id", "unit_id", "measure"], h.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", "symbol-primaryname", "type", "typespecs"], h.prototype.typeFields.estimates = ["fundamental_data", "type", "typespecs", "earnings_per_share_forecast_next_symbol_currency_fq", "earnings_release_next_aligned_date", "earnings_release_next_calendar_date", "earnings_release_next_date"], h.prototype.typeFields.economic = ["reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id", "measure"], h.prototype.connect = function(e) {
                    this._quoteApi.connect(this.quoteHandler.bind(this))
                }, h.prototype.quoteHandler = function(e) {
                    var t = e.method,
                        i = e.params;
                    switch (t) {
                        case "connected":
                            this._connected || (this._connected = !0, this.onConnected());
                            break;
                        case "quote_list_fields":
                            break;
                        case "quote_symbol_data":
                            this._connected && this.onSymbolData(i[0]);
                            break;
                        case "quote_completed":
                            this._connected && this.onSymbolData({
                                symbolname: i[0],
                                complete: performance.now(),
                                values: {}
                            });
                            break;
                        case "disconnected":
                            this._connected && (this._connected = !1, this.onDisconnect.fire())
                    }
                }, h.prototype.onConnected = function() {
                    this.setFields();
                    var e = Object.keys(this._symbol_data);
                    e.length && (this._quoteApi.quoteAddSymbols(e), this._delayUpdateFastSymbols()), this.onConnect.fire()
                }, h.prototype.setFields = function() {
                    var e = h.prototype.typeFields[this._type];
                    e && e.length && this._quoteApi.quoteSetFields(e)
                }, h.prototype.onSymbolData = function(e) {
                    try {
                        e.status && c.update(e, m, !1)
                    } catch (e) {}
                    var t = e.symbolname,
                        i = this._throttledSymbolData[t];
                    p() && (delete e.values.prev_close_price, void 0 !== e.values.regular_close && (e.values.prev_close_price = e.values.regular_close)), i || (i = this._throttledSymbolData[t] = {
                        fnDispatch: r(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
                    }), i.cache ? l(i.cache, e) : i.cache = e, i.fnDispatch(t)
                }, h.prototype._parseUpdateMode = function(e) {
                    _(e)
                },
                h.prototype.dipatchSymbolData = function(e) {
                    var t = this._symbol_data[e],
                        i = this._throttledSymbolData[e].cache;
                    if (delete this._throttledSymbolData[e].cache, this._symbol_data[e])
                        for (var r in l(t, i), t.values && this._parseUpdateMode(t.values), this._subscriptions) {
                            var o = this._subscriptions[r];
                            o.has(e) && [...o.get(e)].forEach((function(e) {
                                e(t, i)
                            }))
                        }
                }, h.prototype.subscribe = function(e, t, i) {
                    this._subscriptions[e] = this._subscriptions[e] || new Map;
                    var r = this._subscriptions[e];
                    t = [].concat(t);
                    var o = [];
                    t.forEach((function(e) {
                        this._symbol_data[e] ? r && r.has(e) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[e] = {
                            subscribers_count: 1
                        }, o.push(e)), r.has(e) || r.set(e, []), r.get(e).push(i), r.get(e).fast = !0, this._symbol_data[e] && this._symbol_data[e].values && i(this._symbol_data[e], this._symbol_data[e])
                    }), this), o.length && this._connected && (this._quoteApi.quoteAddSymbols(o), this._delayUpdateFastSymbols())
                }, h.prototype.unsubscribe = function(e, t, i) {
                    t = [].concat(t);
                    for (var r = this._subscriptions[e], o = [], s = 0; s < t.length; s++) {
                        var a = t[s];
                        if (r)
                            if (r.has(a) && i) {
                                var n = r.get(a).indexOf(i);
                                ~n && r.get(a).splice(n, 1), r.get(a).length || r.delete(a)
                            } else r.delete(a);
                        r && 0 === r.size && delete this._subscriptions[e], this._symbol_data.hasOwnProperty(a) && (r && !r.has(a) && this._symbol_data[a].subscribers_count--, this._symbol_data[a].subscribers_count || (delete this._symbol_data[a], o.push(a)))
                    }
                    o.length && this._connected && (this._quoteApi.quoteRemoveSymbols(o), this._delayUpdateFastSymbols())
                }, h.prototype.setFastSymbols = function(e, t) {
                    if (this._subscriptions[e])
                        for (var i = this._subscriptions[e], r = Array.from(i.keys()), o = 0; o < r.length; ++o) {
                            var s = r[o];
                            i.get(s).fast = -1 !== t.indexOf(s)
                        }
                    this._delayUpdateFastSymbols()
                }, h.prototype._updateFastSymbols = function() {
                    if (this._connected) {
                        var e = this._fastSymbols();
                        0 === e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(e)
                    }
                }, h.prototype._delayUpdateFastSymbols = h.prototype._updateFastSymbols, h.prototype._fastSymbols = function() {
                    var e = [];
                    for (var t in this._subscriptions)
                        for (var i = this._subscriptions[t], r = Array.from(i.keys()), o = 0; o < r.length; ++o) {
                            var s = r[o];
                            i.get(s).fast && e.push(s)
                        }
                    return e = a(e)
                }, h.prototype.formatter = function(e, t) {
                    var i = this;
                    if (this._waitingForFormatters[e]) return this._waitingForFormatters[e];

                    function r(e) {
                        var i = t && !e.fractional ? 1 : e.minmov;
                        return new s({
                            priceScale: e.pricescale,
                            minMove: i,
                            fractional: e.fractional,
                            minMove2: e.minmove2
                        })
                    }
                    var o = new Promise((function(t, o) {
                        if (i._formatterValuesCache[e]) t(r(i._formatterValuesCache[e]));
                        else {
                            var s = n.guid();
                            i.subscribe(s, [e], (function(a) {
                                "error" === a.status && (i._waitingForFormatters[e] = null, o("Quotes snapshot is not received")),
                                    function(e) {
                                        return e && null != e.pricescale && null != e.minmov
                                    }(a.values) && (i._waitingForFormatters[e] = null, i._formatterValuesCache[e] = a.values, t(r(a.values)), i.unsubscribe(s, e))
                            }))
                        }
                    }));
                    return this._waitingForFormatters[e] = o, o
                }, h.prototype.snapshot = function(e) {
                    var t = this;
                    if (this._waitingForSnapshot[e]) return this._waitingForSnapshot[e];
                    var i = new Promise((function(i, r) {
                        if (t._snapshotValuesCache[e]) i(t._snapshotValuesCache[e]);
                        else {
                            var o = n.guid();
                            t.subscribe(o, [e], (function(s) {
                                "error" === s.status && (t._waitingForSnapshot[e] = null, r("Quotes snapshot is not received"));
                                var a = s.values;
                                a && a.minmov && a.pricescale && a.description && (t._waitingForSnapshot[e] = null, t._snapshotValuesCache[e] = a, i(a), t.unsubscribe(o, e))
                            }))
                        }
                    }));
                    return this._waitingForSnapshot[e] = i, i
                }, TradingView.QuoteSessionMultiplexer = h, e && e.exports && (e.exports = h)
        },
        805578: (e, t, i) => {
            function r(e) {
                const t = Object.create(e);
                return t.release = () => {}, t.ownership = () => t, t
            }

            function o(e) {
                const t = Object.create(e);
                return t.release = () => e.destroy(), t.ownership = () => t, t
            }
            i.d(t, {
                ownership: () => o,
                weakReference: () => r
            })
        },
        728832: (e, t, i) => {
            function r(e, t, i) {
                if (t(e.value())) return void i();
                const r = o => {
                    t(o) && (e.unsubscribe(r), i())
                };
                e.subscribe(r, {
                    callWithLast: !0
                })
            }
            i.d(t, {
                callWhen: () => r
            })
        },
        676323: (e, t, i) => {
            i.d(t, {
                formatNumber: () => o,
                parseNumber: () => a
            });
            var r = i(960521);

            function o(e, t, i, o, s) {
                if (!Number.isFinite(e)) return `${e}`;
                const a = -1 === Math.sign(e) ? "-" : "";
                e = Math.abs(e);
                let n = void 0 === i ? e.toString() : e.toFixed(i);
                if (n.includes("e")) {
                    if (!o) return `${a}${n.replace(".",t.decimalSign)}`; {
                        const t = new r.Big(e);
                        n = t.lt(1) ? t.toFixed() : t.toString()
                    }
                }
                const _ = n.split("."),
                    l = _[0];
                let c = _[1];
                const m = function(e, t) {
                    let i = e.length;
                    const r = [];
                    for (; i > 0;) r.unshift(e.slice(Math.max(i - 3, 0), i)), i -= 3;
                    return r.join(t)
                }(l, t.groupingSeparator);
                return void 0 !== i && (c = 0 === i ? void 0 : e.toFixed(i).slice(-i)), void 0 !== s && void 0 !== c && (c = function(e, t) {
                    let i = e.length - 1;
                    for (let r = i; r >= t && "0" === e[r]; r -= 1) i -= 1;
                    return e.slice(0, i + 1)
                }(c, s)), c ? `${a}${m}${t.decimalSign}${c}` : `${a}${m}`
            }
            const s = (0, i(259332).default)((e => {
                const t = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                return new RegExp(t, "gm")
            }));

            function a(e, t) {
                if (/^(NaN|[+|-]?Infinity)$/.test(e)) return parseFloat(e);
                const i = s(t.groupingSeparator);
                return i && (e = e.replace(i, "")), e = e.replace(t.decimalSign, "."), /^(\+|-)?\d+(\.\d+|\.)?(e(\+|-)?\d+)?$/.test(e) ? parseFloat(e) : NaN
            }
        },
        96900: (e, t, i) => {
            let r;
            i.d(t, {
                formatterOptions: () => o,
                getNumberFormat: () => c
            });
            const o = {
                decimalSign: ".",
                decimalSignFractional: "'"
            };
            const s = {
                    groupingSeparator: ",",
                    decimalSign: "."
                },
                a = {
                    groupingSeparator: ".",
                    decimalSign: ","
                },
                n = {
                    groupingSeparator: " ",
                    decimalSign: ","
                },
                _ = {
                    groupingSeparator: "",
                    decimalSign: "."
                },
                l = new Map([
                    ["en", s],
                    ["th", s],
                    ["ja", s],
                    ["ko", s],
                    ["zh", s],
                    ["zh_TW", s],
                    ["ar", s],
                    ["he_IL", s],
                    ["ms_MY", s],
                    ["vi", s],
                    ["de", a],
                    ["es", a],
                    ["it", a],
                    ["tr", a],
                    ["pt", a],
                    ["id_ID", a],
                    ["fr", n],
                    ["pl", n],
                    ["ru", n]
                ]);

            function c(e) {
                var t;
                if (e) return {
                    decimalSign: o.decimalSign,
                    groupingSeparator: ""
                };
                const i = r || window.language || "";
                return null !== (t = l.get(i)) && void 0 !== t ? t : _
            }
        },
        801786: (e, t, i) => {
            i.d(t, {
                DecimalPriceFormatterImpl: () => c
            });
            var r = i(960521),
                o = i(338619),
                s = i(798791),
                a = i(676323),
                n = i(574313),
                _ = i(96900);
            const l = (0, o.getLogger)("Chart.DecimalPriceFormatter");
            class c extends s.PriceFormatterImplementationBase {
                constructor(e) {
                    super(e);
                    const {
                        minMove2: t,
                        ignoreLocaleNumberFormat: i
                    } = e;
                    void 0 !== t && 10 !== t && 0 !== t && 1 !== t && l.logDebug("invalid minmove2"), this._ignoreLocaleNumberFormat = i
                }
                hasForexAdditionalPrecision() {
                    return 10 === this._minMove2
                }
                _parseUnsigned(e, t) {
                    return this._parseAsDecimal(e, t)
                }
                _formatUnsigned(e, t, i, r, o, a) {
                    const n = {
                        price: Math.abs(e),
                        priceScale: this._priceScale,
                        minMove: this._minMove,
                        fractionalLength: this._fractionalLength,
                        tailSize: t,
                        cutFractionalByPrecision: i,
                        ignoreLocaleNumberFormat: o,
                        removeAllEndingZeros: a
                    };
                    return void 0 !== this._variableMinTickData && (Object.assign(n, (0, s.variableMinTickParamsByPrice)(!1, this._variableMinTickData, null != r ? r : n.price)), this._ignoreMinMove && (n.minMove = 1)), this._formatAsDecimal(n)
                }
                _formatAsExponential(e, t) {
                    const i = Math.floor(.75 * Math.log10(this._priceScale)),
                        r = e * Math.pow(10, i),
                        o = `e-${i}`,
                        s = Math.log10(this._priceScale) - i;
                    return `${r.toFixed(s).replace(".",t.decimalSign)}${o}`
                }
                _formatAsDecimal(e) {
                    const {
                        price: t,
                        priceScale: i,
                        minMove: o,
                        fractionalLength: s = 0,
                        tailSize: l = 0,
                        cutFractionalByPrecision: c,
                        ignoreLocaleNumberFormat: m,
                        removeAllEndingZeros: u
                    } = e, d = (0, _.getNumberFormat)(this._ignoreLocaleNumberFormat || m);
                    if (t >= 1e21) return t.toString().replace(".", d.decimalSign);
                    if (i > 1e15) return this._formatAsExponential(t, d);
                    const p = Math.pow(10, l) * i / (c ? 1 : o),
                        h = 1 / p;
                    let g;
                    if (p > 1) g = Math.floor(t);
                    else {
                        const e = Math.floor(Math.round(t / h) * h);
                        g = 0 === Math.round((t - e) / h) ? e : e + h
                    }
                    let S = "";
                    if (p > 1) {
                        let e = c ? new r.Big(t).mul(p).round(void 0, 0).minus(new r.Big(g).mul(p)).toNumber() : parseFloat((Math.round(t * p) - g * p).toFixed(s));
                        e >= p && (e -= p, g += 1), e = c ? new r.Big(e).round(s, 0).toNumber() : parseFloat(e.toFixed(s)) * o;
                        const i = (0, n.numberToStringWithLeadingZero)(e, s + l),
                            a = this._removeEndingZeros(i, u ? i.length : l);
                        S = a ? d.decimalSign + a : a
                    }
                    return (0, a.formatNumber)(g, d) + S
                }
                _parseAsDecimal(e, t = {}) {
                    const {
                        ignoreLocaleNumberFormat: i
                    } = t, r = (0, _.getNumberFormat)(this._ignoreLocaleNumberFormat || i), o = (0, a.parseNumber)(e, r);
                    return Number.isFinite(o) ? {
                        value: o,
                        res: !0,
                        suggest: this.formatImpl(o)
                    } : {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
            }
        },
        93500: (e, t, i) => {
            i.d(t, {
                FractionalPriceFormatterImpl: () => l
            });
            var r = i(650151),
                o = i(338619),
                s = i(798791),
                a = i(574313),
                n = i(96900);
            const _ = (0, o.getLogger)("Chart.FractionalPriceFormatter");
            class l extends s.PriceFormatterImplementationBase {
                constructor(e) {
                    super(e);
                    const {
                        minMove2: t
                    } = e;
                    null != t && t > 0 && 2 !== t && 4 !== t && 8 !== t && _.logDebug("invalid minmove2")
                }
                hasForexAdditionalPrecision() {
                    return !1
                }
                _parseUnsigned(e) {
                    return this._minMove2 ? this._parseAsDoubleFractional(e) : this._parseAsSingleFractional(e)
                }
                _formatUnsigned(e, t, i, o) {
                    const a = {
                        price: Math.abs(e),
                        priceScale: this._priceScale,
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        fractionalLength: (0, r.ensureDefined)(this._fractionalLength),
                        tailSize: t
                    };
                    return void 0 !== this._variableMinTickData && Object.assign(a, (0, s.variableMinTickParamsByPrice)(!0, this._variableMinTickData, null != o ? o : a.price)), this._formatAsFractional(a)
                }
                _parseAsSingleFractional(e) {
                    let t = s.intRegexp.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.formatImpl(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + n.formatterOptions.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = this._priceScale,
                            o = this._patchFractPart(parseInt(t[3]), 1, r);
                        if (o >= r || o < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        let s = i + o / r;
                        return e && (s = -s), {
                            value: s,
                            res: !0,
                            suggest: this.formatImpl(s)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _parseAsDoubleFractional(e) {
                    let t = s.intRegexp.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.formatImpl(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + n.formatterOptions.decimalSignFractional + "([0-9]+)\\" + n.formatterOptions.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = void 0 !== this._minMove2 && null !== this._minMove2 ? this._minMove2 : NaN,
                            o = this._priceScale / r,
                            s = this._minMove2,
                            a = this._patchFractPart(parseInt(t[3]), 1, o),
                            n = this._patchFractPart(parseInt(t[4]), 2, s);
                        if (a >= o || a < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        if (null != s && n >= s || n < 0) return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                        let _ = null != s ? i + a / o + n / (o * s) : NaN;
                        return e && (_ = -_), {
                            value: _,
                            res: !0,
                            suggest: this.formatImpl(_)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _patchFractPart(e, t, i) {
                    const r = {
                            0: 0,
                            5: 1
                        },
                        o = {
                            0: 0,
                            2: 1,
                            5: 2,
                            7: 3
                        },
                        s = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            5: 4,
                            6: 5,
                            7: 6,
                            8: 7
                        };
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === o[e] ? -1 : o[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
                _formatAsFractional(e) {
                    const {
                        price: t,
                        tailSize: i,
                        priceScale: r,
                        minMove: o,
                        minMove2: s,
                        fractionalLength: _
                    } = e, l = r / o;
                    let c = Math.floor(t),
                        m = i ? Math.floor(t * l) - c * l : Math.round(t * l) - c * l;
                    m === l && (m = 0, c += 1);
                    let u = "";
                    if (i) {
                        let e = (t - c - m / l) * l;
                        e = Math.round(e * Math.pow(10, i)), u = (0, a.numberToStringWithLeadingZero)(e, i), u = this._removeEndingZeros(u, i)
                    }
                    if (!_) throw new Error("_fractionalLength is not calculated");
                    let d = "";
                    if (s) {
                        const e = m % s;
                        m = (m - e) / s;
                        const t = (0, a.numberToStringWithLeadingZero)(m, _),
                            i = this._getFractPart(e, 2, s);
                        d = t + n.formatterOptions.decimalSignFractional + i
                    } else m = this._getFractPart(m, 1, r), d = (0, a.numberToStringWithLeadingZero)(m * o, _);
                    return c.toString() + n.formatterOptions.decimalSignFractional + d + u
                }
                _getFractPart(e, t, i) {
                    const r = [0, 5],
                        o = [0, 2, 5, 7],
                        s = [0, 1, 2, 3, 5, 6, 7, 8];
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === o[e] ? -1 : o[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
            }
        },
        798791: (e, t, i) => {
            i.d(t, {
                PriceFormatterImplementationBase: () => c,
                calculateDecimal: () => _,
                intRegexp: () => n,
                variableMinTickParamsByPrice: () => l
            });
            var r = i(650151),
                o = i(444372),
                s = i(296244),
                a = i(881025);
            const n = new RegExp(/^(-?)[0-9]+$/);

            function _(e, t, i, r) {
                let o = 0;
                if (e > 0 && t > 0) {
                    let t = e;
                    for (i && r && (t /= r); t > 1;) t /= 10, o++
                }
                return o
            }

            function l(e, t, i) {
                const o = (0, r.ensureNotNull)((0, s.getMinTickData)({
                        price: i,
                        minTick: null,
                        variableMinTickData: t,
                        shouldCheckForEquality: !0
                    })),
                    {
                        priceScale: a,
                        minMove: n,
                        minMove2: l
                    } = o;
                return {
                    priceScale: a,
                    minMove: n,
                    fractionalLength: _(a, n, e, l)
                }
            }
            class c {
                constructor(e) {
                    this._formatterErrors = {
                        custom: o.t(null, void 0, i(366123)),
                        fraction: o.t(null, void 0, i(339643)),
                        secondFraction: o.t(null, void 0, i(370784))
                    };
                    const {
                        priceScale: t,
                        minMove: r,
                        minMove2: a,
                        ignoreMinMove: n,
                        variableMinTick: _,
                        fractionalLength: l
                    } = e;
                    this._priceScale = t, this._minMove = r, this._minMove2 = a, this._ignoreMinMove = n, this._variableMinTickData = void 0 === _ ? void 0 : (0, s.makeVariableMinTickData)({
                        priceScale: t,
                        minMove: r,
                        minMove2: a
                    }, _), this._fractionalLength = l
                }
                formatImpl(e, t = {}) {
                    const {
                        signPositive: i,
                        signNegative: r = !0,
                        tailSize: o,
                        cutFractionalByPrecision: s = !1,
                        useRtlFormat: n = !0,
                        variableMinTickDataPrice: _,
                        ignoreLocaleNumberFormat: l,
                        removeAllEndingZeros: c
                    } = t;
                    let m = "";
                    e < 0 ? m = !1 === r ? "" : "−" : e && !0 === i && (m = "+");
                    const u = m + this._formatUnsigned(Math.abs(e), o, s, _, l, c);
                    return n ? (0, a.forceLTRStr)(u) : u
                }
                parse(e, t) {
                    return "+" === (e = (e = (0, a.stripLTRMarks)(e)).replace("−", "-"))[0] && (e = e.substring(1)), this._parseUnsigned(e, t)
                }
                _removeEndingZeros(e, t) {
                    for (let i = 0; i < t && "0" === e[e.length - 1]; i++) e = e.substring(0, e.length - 1);
                    return e
                }
            }
        },
        181706: (e, t, i) => {
            function r(e, t, i, r, o) {
                let s = "";
                if (r = r ? "; path=" + r : "", o = o ? "; domain=" + o : "", i) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3), s = "; expires=" + e.toUTCString()
                } else s = "";
                document.cookie = e + "=" + t + s + o + r
            }

            function o(e) {
                const t = e + "=",
                    i = document.cookie.split(";");
                for (let e = 0; e < i.length; e++) {
                    let r = i[e];
                    for (;
                        " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            }
            i.d(t, {
                get: () => o,
                set: () => r
            })
        },
        45003: (e, t, i) => {
            function r(e, ...t) {
                return e && "object" == typeof e ? (0 === t.length || t.forEach((t => {
                    null != t && "object" == typeof t && Object.keys(t).forEach((i => {
                        const s = e[i],
                            a = t[i];
                        if (a === e) return;
                        const n = Array.isArray(a);
                        if (a && (o(a) || n)) {
                            let t;
                            t = n ? s && Array.isArray(s) ? s : [] : s && o(s) ? s : {}, e[i] = r(t, a)
                        } else void 0 !== a && (e[i] = a)
                    }))
                })), e) : e
            }

            function o(e) {
                if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                if (!t) return !0;
                const i = Object.hasOwnProperty.toString,
                    r = t.hasOwnProperty("constructor") && t.constructor;
                return "function" == typeof r && i.call(r) === i.call(Object)
            }
            i.d(t, {
                deepExtend: () => r
            })
        },
        411963: (e, t, i) => {
            function r(e, t = !1) {
                "loading" !== document.readyState ? t ? setTimeout((() => e()), 1) : e() : document.addEventListener("DOMContentLoaded", (() => e()))
            }
            i.d(t, {
                whenDocumentReady: () => r
            });
            new Promise((e => {
                r(e)
            }))
        },
        770605: e => {
            e.exports = JSON.parse('{"adx":"widget_user_token-adx","adxD":"widget_user_token-adxD","agencialbmcombr":"widget_user_token-agencialbmcombr","aljaziracapitalD":"widget_user_token-aljaziracapitalD","aljaziracapitalRT":"widget_user_token-aljaziracapitalRT","ambito":"widget_user_token-ambito","artechecom":"widget_user_token-ArtecheD","atlcapital":"widget_user_token-atlcapital","bankirosru":"widget_user_token-bankirosru","bbvach":"widget_user_token-bbvach","beeksgroup":"widget_user_token-beeksgroup","belugagroupru":"widget_user_token-belugagroupru","bivacom":"widget_user_token-bivacom","bluefield":"widget_user_token-bluefield","bluelinefutures":"widget_user_token-bluelinefutures","bovespa":"widget_user_token-bmfbovespacombr","bytetravel":"widget_user_token-bytetravel","championnatbourse":"widget_user_token-championnatbourse","cincodias":"widget_user_token-cincodias","ceocaD":"widget_user_token-ceocaD","ceocaRT":"widget_user_token-ceocaRT","copees":"widget_user_token-copees","cselk":"widget_user_token-cselk","dailyfx":"widget_user_token-dailyfx","derayahcom":"widget_user_token-derayahcom","dfmaeD":"widget_user_token-dfmaeD","dfmaeRT":"widget_user_token-dfmaeRT","dolarhoy":"widget_user_token-dolarhoy","easynvestcombr":"widget_user_token-easynvestcombr","elconfidencial":"widget_user_token-elconfidencial","elespanolcom":"widget_user_token-elespanolcom","elobreroes":"widget_user_token-elobreroes","elnacionalD":"widget_user_token-ElNacionalD","elpaisfinanciero":"widget_user_token-elpaisfinanciero","elperiodicodelaenergia":"widget_user_token-elperiodicodelaenergia","euqueroinvestir":"widget_user_token-euqueroinvestircom","eurex":"widget_user_token-eurex","eurofins":"widget_user_token-eurofins","epe":"widget_user_token-epe","europapresses":"widget_user_token-europapresses","finanzasD":"widget_user_token-FinanzasD","forbescombr":"widget_user_token-forbescombr","genialinvestimentos":"widget_user_token-genialinvestimentos","healthitalia":"widget_user_token-healthitalia","hegnarno":"widget_user_token-hegnarno","hipotecariocomar":"widget_user_token-hipotecariocomar","investegatecouk":"widget_user_token-investegatecouk","investopedia":"widget_user_token-investopedia","ivsgroup":"widget_user_token-ivsgroup","boersenzeitung":"widget_user_token-boersenzeitung","lainformacioncom":"widget_user_token-lainformacioncom","marcopolocombr":"widget_user_token-marcopolocombr","mercadofinancierocom":"widget_user_token-mercadofinancierocom","moex":"widget_user_token-moex","moneytimescombr":"widget_user_token-moneytimescombr","monitordomercadoD":"widget_user_token-monitordomercadoD","negocios":"widget_user_token-negocios","NGX":"widget_user_token-NGX","NoticiasagricolaD":"widget_user_token-noticiasagricolaD","nsecokr":"widget_user_token-nsecokr","okdiario":"widget_user_token-okdiario","panafricanresourcescom":"widget_user_token-panafricanresourcescom","pse":"widget_user_token-pse","poder360":"widget_user_token-poder360","pseD":"widget_user_token-pseD","riyadhcapitalD":"widget_user_token-riyadhcapitalD","riyadhcapitalRT":"widget_user_token-riyadhcapitalRT","qecomqa":"widget_user_token-qecomqa","samolet":"widget_user_token-samolet","seeingmachinescom":"widget_user_token-seeingmachinescom","seudinheiro":"widget_user_token-seudinheiro","softwareag":"widget_user_token-softwareag","sogeclair":"widget_user_token-sogeclair","sgcompanyit":"widget_user_token-sgcompanyit","sharejunction":"widget_user_token-sharejunction","smartlab-custom":"widget_user_token-smartlab","smartlab":"widget_user_token-smartlab","spacemoneycombr":"widget_user_token-spacemoneycombr","thecsecom":"widget_user_token-thecsecom","tradersclubbrasil":"widget_user_token-tradersclubbrasil","tradersclubbrasilD":"widget_user_token-tradersclubbrasilD","tradingview":"widget_user_token-tradingview","xtools":"widget_user_token-xtools","twitter":"widget_user_token-twitter","velocitycompositescom":"widget_user_token-velocitycompositescom","vocesaabrilcombr":"widget_user_token-vocesaabrilcombr","xCrtyJksp":"widget_user_token-xCrtyJksp","xpicombr":"widget_user_token-xpicombr"}')
        },
        874851: e => {
            e.exports = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}')
        },
        105291: e => {
            e.exports = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":2},"FUNDAMENTALS_ON_CHART":{"limit":1},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":800,"child_limit":1},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":1,"complex_limit":1,"primitive_limit":5},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":2},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":1},"WATCHLIST_SYMBOLS":{"limit":30},"VIDEO_IDEAS_LENGTH":{"limit":20}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"MARKET_DATA_LIMITS":{"limit":2,"primitive_limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"FUNDAMENTALS_ON_CHART":{"limit":4},"TV_PROSTUDIES":{"study_packages":["tv-chartpatterns"]},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":800,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":20,"complex_limit":20,"primitive_limit":20},"SCREENER_AUTO_REFRESH":{},"SCREENER_NEW_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_NEW_EXPORT_CSV_DATA":{},"SCREENER_NEW_SHOW_RESTRICTED_DATA":{},"SHOW_BONDS_RESTRICTED_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{"disable_on_lite_plan":"exclude_mobile"},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":10},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":1},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":7},"INTRADAY_EXCHANGE":{},"VOLUME_PROFILE":{},"STREAMS_ACCESS":{"followers":10},"SMS_2FA_VERIFICATION":{"disable_on_trial":true},"SOCIAL_ACTIVITY":{"disable_on_trial":true},"WATCHLIST_SYMBOLS":{"limit":1000},"FIELDS_PERMISSIONS":{"items":["refbonds"]},"CUSTOM_RANGE_BARS":{},"FASTEST_DATA_FLOW":{},"SESSION_VOLUME_PROFILE":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"MARKET_DATA_LIMITS":{"limit":4,"primitive_limit":4},"INDICATORS_ON_CHART":{"limit":10},"FUNDAMENTALS_ON_CHART":{"limit":7},"TV_PROSTUDIES":{"study_packages":["tv-prostudies","tv-chartpatterns"]},"STUDY_ON_STUDY":{"limit":800,"child_limit":9},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":100,"complex_limit":100,"primitive_limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"BACKEND_CONNECTIONS":{"limit":20},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"KAGI_RENKO":{},"INTRADAY_SPREAD":{},"CUSTOM_CHATS":{},"BACKTESTING_EXPORT":{}},"pro_premium":{"extends":"pro_realtime","USE_BAR_MAGNIFIER":{},"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"MARKET_DATA_LIMITS":{"limit":6,"primitive_limit":6},"INDICATORS_ON_CHART":{"limit":25},"FUNDAMENTALS_ON_CHART":{"limit":10},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns","tv-chart_patterns"]},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":800,"child_limit":24},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":400,"complex_limit":400,"primitive_limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"BACKEND_CONNECTIONS":{"limit":50},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":4},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{},"TPO_PERIODIC":{"study_packages":["tv-volumebyprice"]},"TPO_CHART_STYLE":{},"VOLUME_CANDLES":{},"VIDEO_IDEAS_LENGTH":{"limit":60},"VOLUME_FOOTPRINT":{}},"pro_expert":{"extends":"pro_premium","INDICATORS_ON_CHART":{"limit":30},"FUNDAMENTALS_ON_CHART":{"limit":15},"STUDY_ON_STUDY":{"limit":800,"child_limit":29},"MULTIPLE_CHARTS":{"limit":10},"MARKET_DATA_LIMITS":{"limit":12,"primitive_limit":12},"HISTORICAL_BARS":{"limit":25},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":600,"complex_limit":600,"primitive_limit":600,"watchlist_limit":5,"overall_watchlist_limit":10},"BACKEND_CONNECTIONS":{"limit":80},"BAR_REPLAY_INTRADAY":{"limit":6},"EXPORT_FINANCIALS_DATA":{},"TICK_INTERVALS":{},"FIRST_PRIORITY_SUPPORT":{},"BUY_PRO_DATA":{}},"pro_premium_expert":{"extends":"pro_expert","INDICATORS_ON_CHART":{"limit":50},"FUNDAMENTALS_ON_CHART":{"limit":25},"STUDY_ON_STUDY":{"limit":800,"child_limit":49},"MULTIPLE_CHARTS":{"limit":16},"MARKET_DATA_LIMITS":{"limit":99999,"primitive_limit":25},"HISTORICAL_BARS":{"limit":40},"SERVER_SIDE_ALERTS":{"overall_limit":4000,"limit":1000,"complex_limit":1000,"primitive_limit":1000,"watchlist_limit":5,"overall_watchlist_limit":10},"BACKEND_CONNECTIONS":{"limit":200},"BAR_REPLAY_INTRADAY":{"limit":10}}}')
        }
    }
]);