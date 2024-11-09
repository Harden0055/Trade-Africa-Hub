(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [68159], {
        425271: (e, t, s) => {
            e.exports = [{
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(398361)),
                value: "",
                search_type: "undefined"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(965331)),
                value: "stocks",
                search_type: "stocks"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(589740)),
                value: "funds",
                search_type: "funds"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(141504)),
                value: "futures",
                search_type: "futures"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(570135)),
                value: "forex",
                search_type: "forex"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(869328)),
                value: "cfd",
                search_type: "cfd"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(125354)),
                value: "bitcoin,crypto",
                search_type: "crypto"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(875313)),
                value: "index",
                search_type: "index"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(207586)),
                value: "bond",
                search_type: "bond"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(2380)),
                value: "economic",
                search_type: "economic"
            }, {
                name: s.i18next(null, {
                    context: "symbols_type"
                }, s(703374)),
                value: "options",
                search_type: "options"
            }]
        },
        518782: (e, t, s) => {
            "use strict";
            s.d(t, {
                AuthToken: () => a
            });
            var n = s(942634),
                o = s(338619),
                i = s(702598);
            const r = (0, o.getLogger)("ChartApi.AuthToken", {
                color: "#173"
            });
            class a {
                constructor() {
                    this.invalidated = new n.Delegate, this._tid = 0, window.loginStateChange || (window.loginStateChange = new n.Delegate), window.loginStateChange.subscribe(this, (e => {
                        e || (this._set(window.user.auth_token), this.invalidated.fire())
                    })), this._set(window.user.auth_token)
                }
                get(e) {
                    return window.is_authenticated ? !e && performance.now() < this._cache.monoValidThru && Date.now() < this._cache.wallValidThru ? (r.logInfo(`Using cached token ${this._cache.token}`), Promise.resolve(this._cache.token)) : this._fetch(Boolean(e), 0).then((e => {
                        if (!window.is_authenticated) throw new Error("User logged out while the request was in flight");
                        return this._set(e), e
                    })).catch((e => (r.logError(`Error fetching new token: ${e&&e.message}`), ""))) : Promise.resolve("")
                }
                reset() {
                    this._set(void 0), this.invalidated.fire()
                }
                _set(e) {
                    if (window.is_authenticated && void 0 !== e) {
                        const t = function(e) {
                            if ("" === e) return 144e5;
                            try {
                                const t = JSON.parse(atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))),
                                    s = 1e3 * (t.exp - t.iat);
                                if (!isFinite(s)) throw new Error("invalid expiration");
                                return Math.max(s - 3e5, 3e5)
                            } catch (t) {
                                return r.logError(`${e} is invalid: ${t.message}`), 144e5
                            }
                        }(e);
                        this._cache = {
                            token: e,
                            monoValidThru: performance.now() + t,
                            wallValidThru: Date.now() + t
                        }, clearTimeout(this._tid), this._tid = setTimeout((() => this.reset()), t), r.logInfo(`Cached for ${t} ms: ${e}`)
                    } else this._cache = {
                        token: "",
                        monoValidThru: -1 / 0,
                        wallValidThru: -1 / 0
                    }, clearTimeout(this._tid), r.logInfo("Cache dropped")
                }
                _fetch(e, t) {
                    return r.logNormal(`Fetching a new token, grabSession=${e}`), (0, i.fetch)("/quote_token/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: e ? "grabSession=true" : ""
                    }).then((e => {
                        if (!e.ok) throw new Error(`Response status is not ok: ${e.status}`);
                        return e.json().then(String)
                    }), (s => {
                        if (t >= 3) throw s;
                        return r.logWarn("Request failed, will retry"),
                            function(e) {
                                return new Promise((t => setTimeout(t, 1e3 * e)))
                            }(t).then((() => this._fetch(e, t + 1)))
                    }))
                }
            }
        },
        789246: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                TVChartApiBase: () => U
            });
            var n = s(290484),
                o = s(569708),
                i = s(154834),
                r = s(650151),
                a = s(770605),
                d = s(778016),
                u = s(125226),
                c = s(314802),
                l = s(518782),
                h = s(764829),
                _ = s(955273),
                p = s(887744),
                m = s(375397);
            class f {
                constructor(e) {
                    this._cache = e
                }
                async getValue(e) {
                    const t = await this._cache.match(e);
                    if (!t) return null;
                    return "application/json" === (0, r.ensureNotNull)(t.headers.get("Content-Type")) ? t.json() : t.text()
                }
                async setValue(e, t) {
                    return "string" == typeof t ? this._cache.put(e, new Response(t, {
                        headers: {
                            "content-type": "text/plain"
                        }
                    })) : this._cache.put(e, new Response(JSON.stringify(t), {
                        headers: {
                            "content-type": "application/json"
                        }
                    }))
                }
                async migrateValue(e, t) {
                    const s = await this.getValue(e);
                    s && (await this.setValue(t, s), await this._cache.delete(e))
                }
            }
            class g {
                constructor() {
                    this._data = new Map
                }
                async getValue(e) {
                    var t;
                    return null !== (t = this._data.get(e)) && void 0 !== t ? t : null
                }
                async setValue(e, t) {
                    this._data.set(e, t)
                }
                async migrateValue(e, t) {
                    this._data.has(e) && (this._data.set(t, this._data.get(e)), this._data.delete(e))
                }
            }
            var y = s(750139),
                w = s(338619),
                v = s(175203);

            function b(e) {
                return e.index = e.i, e.value = e.v, delete e.i, delete e.v, e
            }

            function C(e) {
                for (const t of Object.keys(e)) e[t].t && (e[t].turnaround = e[t].t), e[t].s && !e[t].series && (e[t].series = e[t].s.map(b)), e[t].st && !e[t].series && (e[t].series = e[t].st.map(b))
            }
            class S {
                set_broker(e) {
                    return [e]
                }
                set_data_quality() {
                    return ["low"]
                }
                quote_create_session(e) {
                    return [e]
                }
                quote_delete_session(e) {
                    return [e]
                }
                quote_set_fields(e, t) {
                    return [e].concat(t)
                }
                quote_add_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_remove_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_fast_symbols(e, t) {
                    return [e].concat(t)
                }
                quote_hibernate_all(e) {
                    return [e]
                }
                depth_create_session(e, t, s) {
                    return [e, t, s]
                }
                depth_delete_session(e) {
                    return [e]
                }
                depth_set_symbol(e, t) {
                    return [e, t]
                }
                depth_clear_symbol(e) {
                    return [e]
                }
                depth_set_scale(e, t) {
                    return [e, t]
                }
                chart_create_session(e, t) {
                    return [e, t ? "disable_statistics" : ""]
                }
                chart_delete_session(e) {
                    return [e]
                }
                set_auth_token(e) {
                    return [e]
                }
                set_locale(e, t) {
                    return [e, t]
                }
                switch_timezone(e, t) {
                    return [e, t]
                }
                resolve_symbol(e, t, s) {
                    return [e, t, s]
                }
                create_series(e, t, s, n, o, i, r) {
                    return [e, t, s = s || "", n, o, i, r]
                }
                remove_series(e, t) {
                    return [e, t]
                }
                modify_series(e, t, s, n, o, i) {
                    return [e, t, s = s || "", n, o, i]
                }
                request_more_data(e, t, s) {
                    return [e, t, s]
                }
                set_future_tickmarks_mode(e, t) {
                    return [e, t]
                }
                request_studies_metadata(e) {
                    return [e]
                }
                create_study(e, t, s, n, o, i) {
                    return [e, t, s = s || "", n, o].concat(i)
                }
                create_child_study(e, t, s, n, o, i) {
                    return this.create_study(e, t, s, n, o, i)
                }
                remove_study(e, t) {
                    return [e, t]
                }
                modify_study(e, t, s, n) {
                    return [e, t, s = s || ""].concat(n)
                }
                notify_study(e, t, s, n) {
                    return [e, t, s = s || "", n]
                }
                create_pointset(e, t, s, n, o, i) {
                    return [e, t, s = s || "", n, o].concat(i)
                }
                modify_pointset(e, t, s, n) {
                    return [e, t, s = s || ""].concat(n)
                }
                remove_pointset(e, t) {
                    return [e, t]
                }
                request_more_tickmarks(e, t, s) {
                    return [e, t, s]
                }
                get_first_bar_time(e, t, s) {
                    return [e, t, s]
                }
                replay_create_session(e) {
                    return [e]
                }
                replay_delete_session(e) {
                    return [e]
                }
                replay_reset(e, t, s) {
                    return [e, t, s]
                }
                replay_start(e, t, s) {
                    return [e, t, s]
                }
                replay_stop(e, t) {
                    return [e, t]
                }
                replay_step(e, t, s) {
                    return [e, t, s]
                }
                replay_add_series(e, t, s, n) {
                    return [e, t, s, n]
                }
                replay_remove_series(e, t, s, n) {
                    return [e, t, s, n]
                }
                replay_set_resolution(e, t, s) {
                    return [e, t, s]
                }
                replay_get_depth(e, t, s, n) {
                    return [e, t, s, n]
                }
                convertTimescaleResponse(e) {
                    const t = e.marks.map((e => ({
                            span: e[0],
                            time: e[1],
                            index: e[2]
                        }))),
                        s = void 0 === e.index_diff ? [] : e.index_diff.map((e => ({
                            old: e[0],
                            new: e[1]
                        })));
                    return { ...e,
                        marks: t,
                        index_diff: s
                    }
                }
                getDataUpdateObjects(e) {
                    return this.getTimescaleObjects(e)
                }
                getTimescaleObjects(e) {
                    return e.params[0]
                }
                getTimescaleChangeset(e) {
                    return e.params[1]
                }
                prepareDataUpdateObjects(e, t, s) {
                    for (const n of Object.keys(t)) {
                        const o = t[n],
                            i = {
                                customId: n,
                                turnaround: o.turnaround,
                                plots: o.series ? o.series : o.plots
                            };
                        o.ns && (i.nonseries = o.ns), o.lbs && (i.lastBar = {
                            closeTime: o.lbs.bar_close_time
                        });
                        for (const e of i.plots)
                            for (let t = 0; t < e.value.length; ++t) {
                                const s = e.value[t];
                                s && Math.abs(s) >= 1e100 && (e.value[t] = void 0)
                            }
                        s(e, n, {
                            method: "data_update",
                            params: i
                        })
                    }
                }
                unpack(e) {
                    const t = JSON.parse(e);
                    t.m && t.p && (t.method = t.m, t.params = t.p, t.time = t.t);
                    const s = t.params[1];
                    switch (t.method) {
                        case "qsd":
                            t.method = "quote_symbol_data", s.symbolname = s.n, s.status = s.s, s.values = s.v, s.values.change = s.v.ch, s.values.last_price = s.v.lp, s.values.change_percent = s.v.chp, delete s.n, delete s.s, delete s.v, delete s.values.ch, delete s.values.lp, delete s.values.chp;
                            break;
                        case "du":
                            t.method = "data_update", C(s);
                            break;
                        case "clear_data":
                            for (const e of Object.keys(s)) s[e].turnaround = s[e].t;
                            break;
                        case "timescale_update":
                            C(s)
                    }
                    return t
                }
                prepareEncodeMessage(e, t) {
                    return JSON.stringify({
                        m: e,
                        p: t
                    })
                }
                request_data_problems() {
                    return []
                }
            }
            var k = s(545437),
                q = s(625703),
                R = s(633339);
            const T = (0, w.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
                    color: "#606"
                }),
                M = (0, w.getLogger)("ChartApi.TrafficMeter", {
                    maxCount: 20,
                    color: "#268"
                }),
                N = !(0, c.isOnMobileAppPage)("any"),
                I = (0, u.isFeatureEnabled)("broker_id_session");
            let D = !1;
            const A = ["", "KB", "MB", "GB", "TB"];

            function L(e) {
                if (0 === e) return "0";
                const t = (0, y.toInt)(Math.floor(Math.log(e) / Math.log(1024)));
                return (e / Math.pow(1024, t)).toFixed(2) + A[t]
            }

            function P(e, t) {
                return `${e}__${t}`
            }

            function x(e, t, s) {
                var n;
                const o = null !== (n = t[s]) && void 0 !== n ? n : 0;
                t[s] = o + e
            }
            const E = x.bind(null, 1),
                H = x.bind(null, -1),
                O = h.enabled("widget") ? "studies_metadata_widget" : "studies_metadata",
                B = "/chart-api/pro_hash",
                V = h.enabled("widget") ? "/chart-api/studies_metadata_widget" : "/chart-api/studies_metadata";
            class U {
                constructor(e, t, s, n) {
                    this.sessionid = null, this._banInfo = new m.WatchedValue(null), this._isAuthTokenLoaded = !1, this._authTokenDfd = null, this._serverTimeBasePoint = Date.now() - performance.now(), this._initCachePromise = async function(e) {
                            try {
                                const t = await caches.open(e);
                                return new f(t)
                            } catch (e) {
                                return new g
                            }
                        }("TVChartApi"), this._trafficStats = {
                            total: 0,
                            sinceConnect: 0,
                            lastChunk: 0
                        }, this._lowQualityEnabled = !1, this._brokerId = "", this._sendingQueuedRequestsCount = 0, this._modifyStudyMap = new Map, this._disconnectCount = 0, this._isConnected = !1, this._metadataDeferredPromise = null, this._dataHandleModule = new S, this._sessions = {}, this._notificationHandlers = {}, this._pendingMessagesQueue = [],
                        this._loadNewBars = !1, this._metadataRequestNextNumber = 1, this._fundamentalCounter = {}, this._studyCounter = {}, this._childStudyCounter = {}, this._studySpecs = new Map, this._connectionsLimitReached = new m.WatchedValue(!1), this._sentMethodsCounters = new Map, this._wsBackendConnection = e, this._chartSessionLog = t, this._chartApiLog = s, this._quoteSessionLog = n, this._wsBackendConnection.onReconnect(this._bindSocketEvents.bind(this)), this._wsBackendConnection.setLogger(s, w.getLogHistory), this._wsBackendConnection.setTelemetry(v.telemetry), this._bindSocketEvents(), this._isNonCountedStudy = () => !0, setInterval((() => {
                            M.logNormal("Last 30 seconds:" + L(this._trafficStats.lastChunk) + " Since last connect:" + L(this._trafficStats.sinceConnect) + " Total traffic:" + L(this._trafficStats.total)), this._trafficStats.lastChunk = 0
                        }), 3e4), this._connectionsLimitReached.subscribe((e => {
                            e && this.disconnect()
                        }))
                }
                connect(e) {
                    this._connectOnlyOptions = e, this._wsBackendConnection.isConnected() || this._wsBackendConnection.isConnecting() || this._wsBackendConnection.connect()
                }
                disconnect() {
                    this._wsBackendConnection.disconnect()
                }
                sentMethodsCounters() {
                    return this._sentMethodsCounters
                }
                availablePriceSources() {
                    return Promise.resolve([])
                }
                createSession(e, t) {
                    this._sessions[e] = t, this._notificationHandlers[e] = {}, this.connected() && this._isAuthTokenLoaded && t.onMessage({
                        method: "connected",
                        params: []
                    })
                }
                removeSession(e) {
                    delete this._sessions[e], delete this._notificationHandlers[e]
                }
                connectionBanInfo() {
                    return this._banInfo.readonly()
                }
                connectionsLimitReached() {
                    return this._connectionsLimitReached.readonly()
                }
                serverTime() {
                    return Math.round(this._serverTimeBasePoint + performance.now())
                }
                compensateConnectionLag(e) {
                    const t = this.serverTime(),
                        s = Math.floor(e - t);
                    s > 0 && (this._serverTimeBasePoint += s)
                }
                setBroker(e) {
                    return e === this._brokerId || (this._brokerId = e, this._sendBrokerIdToSession(this._brokerId))
                }
                resolveSymbol(e, t, s, n) {
                    return v.telemetry.timeCounters.series["resolve_symbol_" + e] = window.performance.now(), this._notificationHandlers[e][t] = new q.HandlerInfo(n, t, !0), this._sendRequest("resolve_symbol", [e, t, s])
                }
                requestFirstBarTime(e, t, s, n) {
                    return this._notificationHandlers[e][t] = new q.HandlerInfo(n, t, !0), this._sendRequest("get_first_bar_time", [e, t, s])
                }
                getStudyCounter(e) {
                    var t;
                    return null !== (t = this._studyCounter[e]) && void 0 !== t ? t : 0
                }
                getFundamentalCounter(e) {
                    var t;
                    return null !== (t = this._fundamentalCounter[e]) && void 0 !== t ? t : 0
                }
                requestMoreTickmarks(e, t, s, n) {
                    return n && (this._notificationHandlers[e][t] = new q.HandlerInfo(n, t)), this._sendRequest("request_more_tickmarks", [e, t, s])
                }
                setFutureTickmarksMode(e, t) {
                    this._sendRequest("set_future_tickmarks_mode", [e, t])
                }
                async requestMetadata() {
                    return null === this._metadataDeferredPromise && (this._metadataDeferredPromise = (0, _.createDeferredPromise)(), this._metadataDeferredPromise.promise.finally((() => {
                        this._metadataDeferredPromise = null
                    })), this._requestMetadata()), this._metadataDeferredPromise.promise
                }
                setLoadNew(e) {
                    this._loadNewBars = !!e
                }
                setIsNonCountedStudyFn(e) {
                    this._isNonCountedStudy = e
                }
                canCreateStudy(e, t, s) {
                    var n;
                    const {
                        id: o,
                        child: i,
                        fundamental: a
                    } = t, u = (0, r.ensureNotNull)((0,
                        d.getConfig)("STUDY_ON_STUDY")).child_limit;
                    if (i && (!(0, d.enabled)("STUDY_ON_STUDY") || (null !== (n = this._childStudyCounter[e]) && void 0 !== n ? n : 0) >= u)) return {
                        success: !1,
                        reason: "child",
                        limitValue: u
                    };
                    if (s) return {
                        success: !0
                    };
                    const c = (0, r.ensureNotNull)((0, d.getConfig)("FUNDAMENTALS_ON_CHART")).limit;
                    if (a && (!(0, d.enabled)("FUNDAMENTALS_ON_CHART") || this.getFundamentalCounter(e) >= c)) return {
                        success: !1,
                        reason: "fundamental",
                        limitValue: c
                    };
                    const l = (0, r.ensureNotNull)((0, d.getConfig)("INDICATORS_ON_CHART")).limit;
                    return a || this._isNonCountedStudy(o) || (0, d.enabled)("INDICATORS_ON_CHART") && !(this.getStudyCounter(e) >= l) ? {
                        success: !0
                    } : {
                        success: !1,
                        reason: "general",
                        limitValue: l
                    }
                }
                createStudy(e, t, s, n, o, i, r, a) {
                    const d = this.canCreateStudy(e, a);
                    return d.success || "child" !== d.reason ? (this._notificationHandlers[e][t] = new q.HandlerInfo(r, t), this._sendRequest("create_study", [e, t, s, n, o, i]), a.fundamental ? E(this._fundamentalCounter, e) : this._isNonCountedStudy(a.id) || E(this._studyCounter, e), a.child && E(this._childStudyCounter, e), this._studySpecs.set(P(e, t), a), !0) : ((0, k.showTooManyStudiesNotice)(d.limitValue), !1)
                }
                modifyStudy(e, t, s, o, i, a) {
                    var d, u;
                    x(a = null != a ? a : 0, this._childStudyCounter, e), 0 !== a && ((0, r.ensureDefined)(this._studySpecs.get(P(e, t))).child = a > 0), this._notificationHandlers[e][t] = new q.HandlerInfo(i, t);
                    const c = e + t;
                    if (this._modifyStudyMap.has(c)) {
                        return null === (d = (0, r.ensureDefined)(this._modifyStudyMap.get(c))(e, t, s, o)) || void 0 === d || d
                    } {
                        const i = (0, n.default)(((e, t, s, n) => this._sendRequest("modify_study", [e, t, s, n])), 500, {
                            maxWait: 550
                        });
                        return this._modifyStudyMap.set(c, i), null === (u = i(e, t, s, o)) || void 0 === u || u
                    }
                }
                notifyStudy(e, t, s, n) {
                    return this._chartApiLog.logNormal(`Send notify_study, [${e}, ${t}, ${s}, ${JSON.stringify(n)}]`), this._sendRequest("notify_study", [e, t, s, JSON.stringify(n)])
                }
                removeStudy(e, t) {
                    var s;
                    const n = e + t;
                    delete this._notificationHandlers[e][t], null === (s = this._modifyStudyMap.get(n)) || void 0 === s || s.flush();
                    const o = this._sendRequest("remove_study", [e, t]);
                    if (!1 === o) return !1;
                    this._modifyStudyMap.delete(n);
                    const i = P(e, t),
                        a = (0, r.ensureDefined)(this._studySpecs.get(i));
                    return this._studySpecs.delete(i), a.fundamental ? H(this._fundamentalCounter, e) : this._isNonCountedStudy(a.id) || H(this._studyCounter, e), a.child && H(this._childStudyCounter, e), o
                }
                createPointset(e, t, s, n, o, i, r) {
                    return this._notificationHandlers[e][t] = new q.HandlerInfo(r, t), this._sendRequest("create_pointset", [e, t, s, n, o, i])
                }
                modifyPointset(e, t, s, n, o) {
                    return this._notificationHandlers[e][t] = new q.HandlerInfo(o, t), this._sendRequest("modify_pointset", [e, t, s, n])
                }
                removePointset(e, t) {
                    return delete this._notificationHandlers[e][t], this._sendRequest("remove_pointset", [e, t])
                }
                unpack(e) {
                    return this._dataHandleModule.unpack(e)
                }
                sendRequest(e, t) {
                    return this._sendRequest(e, t)
                }
                enableLowQualityMode() {
                    this._lowQualityEnabled = !0, this._sendLowQualityModeIfEnabled()
                }
                _init() {
                    this._notificationHandlers = {}, this._studyCounter = {}, this._childStudyCounter = {}, this._fundamentalCounter = {}, this._modifyStudyMap = new Map
                }
                _sendRequest(e, t) {
                    var s;
                    const n = null !== (s = this._sentMethodsCounters.get(e)) && void 0 !== s ? s : 0;
                    if (this._sentMethodsCounters.set(e, n + 1), 0 !== this._sendingQueuedRequestsCount) return this._pendingMessagesQueue.push({
                        method: e,
                        args: t
                    }), !0;
                    const o = this._dataHandleModule[e].apply(this._dataHandleModule, t),
                        i = {
                            m: e,
                            p: o
                        },
                        r = JSON.stringify(i);
                    if (o.length > 0) {
                        const e = o[0];
                        e.startsWith("qs_") ? this._quoteSessionLog.logNormal("send: " + r) : e.startsWith("cs_") && this._chartSessionLog.logNormal("send: " + r)
                    } else this._chartApiLog.logNormal("send: " + r);
                    const a = this._dataHandleModule.prepareEncodeMessage(e, o);
                    return this._wsBackendConnection.send(a)
                }
                _onConnect() {
                    if (this.connected()) return;
                    if (this._trafficStats.sinceConnect = 0, this._isAuthTokenLoaded = !1, this._connectOnlyOptions = this._connectOnlyOptions || {}, this._authTokenDfd = this._getAuthTokenDfd(this._connectOnlyOptions.tokenGrabSession), this._connectOnlyOptions = {}, this.sessionid = this._wsBackendConnection.getSessionId(), !this.sessionid || this._isConnected) return;
                    this._pendingMessagesQueue = [], this._sendingQueuedRequestsCount = 0, this._studyCounter = {}, this._childStudyCounter = {}, this._fundamentalCounter = {}, this._studySpecs.clear(), this._isConnected = !0, this._banInfo.setValue(null), this._connectionsLimitReached.setValue(!1);
                    const e = JSON.parse(this.sessionid);
                    this._sendLowQualityModeIfEnabled(), this._metadataServerHash = e.studies_metadata_hash || null;
                    const t = this._wsBackendConnection.getConnectionEstablished();
                    try {
                        this._serverTimeBasePoint = Math.round(e.timestampMs - t)
                    } catch (e) {
                        this._serverTimeBasePoint = Date.now() - performance.now()
                    }
                    if (this._chartApiLog.logInfo("Time shift with server: " + this._formatTime(this.serverTime() - Date.now())), this._authTokenDfd) {
                        this._sendingQueuedRequestsCount += 1, this._chartApiLog.logInfo("Wait for auth token before send messages");
                        const e = this._authTokenDfd;
                        e.then((t => {
                            if (null !== this._authTokenDfd && this._authTokenDfd === e) {
                                if (this._chartApiLog.logNormal("Auth token request is finished, token: " + Boolean(t)), this._authTokenDfd = null, t) {
                                    const e = [{
                                        method: "set_auth_token",
                                        args: [t]
                                    }];
                                    if (N) {
                                        const t = window.initData && window.initData.currentLocaleInfo;
                                        t && e.push({
                                            method: "set_locale",
                                            args: [t.iso, t.flag.toUpperCase()]
                                        })
                                    }
                                    this._pendingMessagesQueue.unshift(...e)
                                }
                                this._onSendingQueueRequestFinished(), this._isAuthTokenLoaded = !0, this._notifySessions({
                                    method: "connected",
                                    params: []
                                })
                            } else this._chartApiLog.logNormal("Comes auth token after requesting new token or after socket disconnected")
                        })).catch((e => {
                            this._chartApiLog.logNormal((0, p.errorToString)(e))
                        }))
                    } else this._chartApiLog.logWarn("Deferred auth token object is not valid"), this._isAuthTokenLoaded = !0;
                    "" !== this._brokerId && this._sendBrokerIdToSession(this._brokerId);
                    const s = this._wsBackendConnection.getConnectionStart();
                    window.TradingView.WEB_SOCKET_WAS_CONNECTED = !0, v.telemetry.setSessionInfo(this.sessionid), v.telemetry.sendChartReport("websocket_connected"), v.telemetry.sendChartReport("websocket_connection_time_frame", {
                            value: t - s
                        }), v.telemetry.sendChartReport("reconnect_count_frame", {
                            value: this._wsBackendConnection.getReconnectCount()
                        }), v.telemetry.sendChartReport("redirect_count_frame", {
                            value: this._wsBackendConnection.getRedirectCount()
                        }),
                        D || (D = !0, v.telemetry.sendChartReport("before_websocket_connection_time_frame", {
                            value: s
                        })), this._wsBackendConnection.resetCounters(), clearTimeout(this._telemetryDisconnectTimeout)
                }
                _formatTime(e) {
                    return `${(e/1e3).toFixed(2)} seconds.`
                }
                _onMessage(e) {
                    this._calcTrafficStats(e);
                    const t = this.unpack(e);
                    "t_ms" in t && (0, o.default)(t.t_ms) && window.ChartApiInstance.compensateConnectionLag(t.t_ms), "protocol_switched" !== t.method ? "protocol_error" !== t.method ? this._dispatchNotification(t, e) : this._processProtocolError(t) : this._chartApiLog.logError("Unexpected protocol changing request, try skipping. Requested protocol:" + t.params[0])
                }
                async _processedMetadata(e) {
                    const t = (0, r.ensureNotNull)(this._metadataDeferredPromise),
                        s = await this._initCachePromise,
                        n = window.pro.hash(),
                        o = h.enabled("widget");
                    try {
                        await s.setValue(V, (0, i.default)(e));
                        const r = Array.from(new Set(e.params[1].metainfo.map((e => {
                            return `${(t=(0,R.parseIdString)(e.id)).packageId}-${t.version}`;
                            var t
                        }))));
                        if (this._chartApiLog.logNormal(`Updated studies_metadata cache, unique package ids: ${r.join(", ")}`), !o) try {
                            await s.setValue(B, (0, i.default)(n)), this._chartApiLog.logNormal("Updated pro_hash cache")
                        } catch (e) {
                            t.reject(), this._chartApiLog.logError("Cannot update pro_hash cache, reason: " + e)
                        }
                    } catch (e) {
                        t.reject(), this._chartApiLog.logError("Cannot update studies_metadata cache, reason: " + e)
                    }
                    t.resolve((0, i.default)(e))
                }
                _invokeNotificationHandler(e, t, s) {
                    var n;
                    if (void 0 === t) return;
                    const o = this._notificationHandlers[e][t];
                    void 0 !== o && (o.singleShot && delete this._notificationHandlers[e][t], null === (n = o.handler) || void 0 === n || n.call(o, s))
                }
                async _requestMetadata() {
                    const e = this._makeNextRequestId();
                    T.logNormal(`Requesting metainfo #${e}`);
                    const t = (0, r.ensureNotNull)(this._metadataDeferredPromise),
                        s = window.pro,
                        n = s.hash(),
                        o = h.enabled("widget");
                    this._chartApiLog.logNormal("Requesting pro hash");
                    try {
                        const r = await this._initCachePromise;
                        await r.migrateValue("pro_hash", B), await r.migrateValue(O, V);
                        const a = await r.getValue(B);
                        if (null !== a && a === n || o) {
                            this._chartApiLog.logNormal("Pro hash has not changed, requesting from local");
                            const o = await r.getValue(V),
                                a = null !== o && o.params[1].hash || null;
                            if (null === a || null === this._metadataServerHash || this._metadataServerHash !== a) this._chartApiLog.logNormal("Metadata hash has changed (cached:'" + a + "', server:'" + this._metadataServerHash + "'')"), this._requestMetadataFromServer(e);
                            else {
                                if (!s.hasPackage("tv-volumebyprice") || void 0 !== o.params[1].metainfo.find((e => e.id.includes("@tv-volumebyprice")))) return this._chartApiLog.logNormal("Using studies_metadata from browser cache"), void t.resolve((0, i.default)(o));
                                this._chartApiLog.logNormal("De-sync detected! pro.hash contains VbPR studies, but data from cache doesn't and pro.hash isn't changed, pro.hash=" + n), this._requestMetadataFromServer(e)
                            }
                        } else this._chartApiLog.logNormal("Pro hash has changed (cached: '" + a + "', current:'" + n + "')"), this._requestMetadataFromServer(e)
                    } catch (t) {
                        this._chartApiLog.logError("Cannot get studies_metadata, reason: " + t), this._requestMetadataFromServer(e)
                    } finally {
                        T.logNormal(`Requesting studies metadata #${e} finished`)
                    }
                }
                _makeNextRequestId() {
                    return "metadata_" + this._metadataRequestNextNumber++
                }
                _processProtocolError(e) {
                    const t = e.params[0];
                    this._chartApiLog.logError(`Protocol error. Reason=${t}.`), "banned" !== t && "banned by user_id" !== t && "banned by ip" !== t || (this._banInfo.setValue({
                        reason: t
                    }), this.disconnect()), this._connectionsLimitReached.setValue("user connections limit reached" === t)
                }
                _requestMetadataFromServer(e) {
                    return this._chartApiLog.logNormal("Request studies_metadata from server"), this._sendRequest("request_studies_metadata", [e])
                }
                _bindSocketEvents() {
                    this.connectDfd = new Promise(((e, t) => {
                        this._wsBackendConnection.on("connect", (() => {
                            this._onConnect(), e()
                        })), this._wsBackendConnection.on("message", this._onMessage.bind(this)), this._wsBackendConnection.on("disconnect", (() => {
                            this._authTokenDfd && (this._authTokenDfd = null), this._onDataProblemsPromiseErrback && this._onDataProblemsPromiseErrback(), this._isConnected = !1, this._notifySessions({
                                method: "disconnected",
                                params: []
                            }), this._banInfo.value() || (this._metadataDeferredPromise = null), this._disconnectCount = (this._disconnectCount || 0) + 1, this._wsBackendConnection.isConnected() && (this._telemetryDisconnectTimeout = setTimeout((() => {
                                v.telemetry.sendChartReport("disconnect")
                            }), 5e3), this._wsBackendConnection.isMaxReconnects() && (this._notifySessions({
                                method: "reconnect_bailout",
                                params: []
                            }), t(), v.telemetry.sendChartReport("reconnect_bailout")))
                        }))
                    }))
                }
                _calcTrafficStats(e) {
                    const t = e.length;
                    this._trafficStats.total += t, this._trafficStats.sinceConnect += t, this._trafficStats.lastChunk += t
                }
                _sendBrokerIdToSession(e) {
                    return !I || this._sendRequest("set_broker", [e])
                }
                _sendLowQualityModeIfEnabled() {
                    this._lowQualityEnabled && this.connected() && this._sendRequest("set_data_quality", [])
                }
                _getAuthTokenDfd(e) {
                    if (this._loadNewBars) return Promise.resolve("load_new_token");
                    if (h.enabled("widget") || -1 !== window.location.search.indexOf("widget_token") || -1 !== window.location.hash.indexOf("widget_token")) {
                        const e = window.TradingView && window.TradingView.widgetCustomer || "";
                        return Promise.resolve(a[e] || "widget_user_token")
                    }
                    return window.is_authenticated ? (this._authTokenManager || (this._authTokenManager = new l.AuthToken, this._authTokenManager.invalidated.subscribe(null, (() => {
                        var e;
                        null === (e = this._authTokenManager) || void 0 === e || e.get().then((e => {
                            e && this.connected() && this._sendRequest("set_auth_token", [e])
                        }))
                    }))), this._authTokenManager.get(e)) : Promise.resolve("unauthorized_user_token")
                }
                _onSendingQueueRequestFinished() {
                    this._sendingQueuedRequestsCount -= 1, this._chartApiLog.logInfo(`Sending queue request finished. Remaining pending requests=${this._sendingQueuedRequestsCount}`), this._sendingQueuedRequestsCount < 0 && this._chartApiLog.logError(`Invalid queue state=${this._sendingQueuedRequestsCount}`), 0 === this._sendingQueuedRequestsCount && this._flushPendingMessages()
                }
                _flushPendingMessages() {
                    this._chartApiLog.logInfo(`Flush pending messages. Count=${this._pendingMessagesQueue.length}`), this._pendingMessagesQueue.forEach((e => this._sendRequest(e.method, e.args))), this._pendingMessagesQueue = []
                }
            }
        },
        569366: (e, t, s) => {
            "use strict";
            var n = s(124829).declareClassAsPureInterface;

            function o() {}
            TradingView.WEB_SOCKET_WAS_CONNECTED = !1, o.prototype.defaultResolutions = function() {}, o.prototype.availableCurrencies = function() {}, o.prototype.availableUnits = function() {}, o.prototype.supportedSymbolsTypes = function() {}, o.prototype.symbolsGrouping = function() {}, o.prototype.quoteCreateSession = function(e) {}, o.prototype.quoteDeleteSession = function(e) {}, o.prototype.quoteSetFields = function(e, t) {}, o.prototype.quoteAddSymbols = function(e, t) {}, o.prototype.quoteRemoveSymbols = function(e, t) {}, o.prototype.quoteFastSymbols = function(e, t) {}, o.prototype.depthCreateSession = function(e, t, s) {}, o.prototype.depthDeleteSession = function(e) {}, o.prototype.depthSetSymbol = function(e, t) {}, o.prototype.depthClearSymbol = function(e) {}, o.prototype.depthSetScale = function(e, t) {}, o.prototype.chartCreateSession = function(e, t) {}, o.prototype.chartDeleteSession = function(e) {}, o.prototype.createSession = function(e, t) {}, o.prototype.removeSession = function(e) {}, o.prototype.connected = function() {}, o.prototype.connect = function() {}, o.prototype.disconnect = function() {}, o.prototype.switchTimezone = function(e, t) {}, o.prototype.resolveSymbol = function(e, t, s, n) {}, o.prototype.createSeries = function(e, t, s, n, o, i, r, a) {}, o.prototype.removeSeries = function(e, t, s) {}, o.prototype.modifySeries = function(e, t, s, n, o, i, r) {}, o.prototype.requestMoreData = function(e, t, s, n) {}, o.prototype.requestMetadata = function(e) {}, o.prototype.canCreateStudy = function(e, t, s) {}, o.prototype.createStudy = function(e, t, s, n, o, i, r, a) {}, o.prototype.getStudyCounter = function(e) {}, o.prototype.getFundamentalCounter = function(e) {}, o.prototype.removeStudy = function(e, t) {}, o.prototype.modifyStudy = function(e, t, s, n, o) {}, o.prototype.createPointset = function(e, t, s, n, o, i, r) {}, o.prototype.modifyPointset = function(e, t, s, n, o) {}, o.prototype.removePointset = function(e, t, s) {}, o.prototype.requestMoreTickmarks = function(e, t, s, n) {}, o.prototype.requestFirstBarTime = function(e, t, s, n) {}, o.prototype._sendRequest = function(e, t) {}, o.prototype._onMessage = function(e) {}, o.prototype._dispatchNotification = function(e) {}, o.prototype._invokeNotificationHandler = function(e, t, s) {}, o.prototype._notifySessions = function(e) {}, o.prototype.unpack = function(e) {}, o.prototype.searchSymbols = function(e, t, s, n, o, i, r, a, d, u) {}, o.prototype.getMarks = function(e, t, s, n, o) {}, o.prototype.getTimescaleMarks = function(e, t, s, n, o) {}, n(o, "ChartApiInterface"), e.exports.ChartApiInterface = o
        },
        668159: (e, t, s) => {
            "use strict";
            e = s.nmd(e);
            var n = !1,
                o = !1,
                i = s(569366).ChartApiInterface;
            const {
                HandlerInfo: r
            } = s(625703);
            var a = s(66974),
                d = s(175203).telemetry,
                u = s(666070).getDefaultResolutions,
                c = s(19308),
                l = s(124829).requireFullInterfaceImplementation,
                h = s(363361).ResponseMethods,
                _ = s(338619),
                p = _.getLogger("ChartApi.Core", {
                    color: "#706"
                }),
                m = _.getLogger("ChartApi.ChartSession", {
                    color: "#706"
                }),
                f = _.getLogger("ChartApi.ChartSession", {
                    highRate: !0,
                    maxCount: 100,
                    color: "#706"
                }),
                g = _.getLogger("ChartApi.ChartSession", {
                    maxCount: 0,
                    color: "#706"
                }),
                y = _.getLogger("ChartApi.ChartSession", {
                    maxCount: 50,
                    color: "#706"
                }),
                w = _.getLogger("ChartApi.QuoteSession", {
                    maxCount: 50,
                    color: "#660"
                }),
                v = _.getLogger("ChartApi.QuoteSession", {
                    highRate: !0,
                    maxCount: 10,
                    color: "#660"
                }),
                b = s(425271),
                C = s(702598).fetch,
                S = s(570701).TIMEFRAMETYPE,
                {
                    getLogoUrlResolver: k,
                    LogoSize: q
                } = s(849204);
            const {
                TVChartApiBase: R
            } = s(789246);
            var T = null;

            function M() {
                if (null === T) {
                    const e = document.querySelector('link[rel~="conversions-config"]'),
                        t = new URL(e.href);
                    T = C(t.toString(), {
                        method: "GET"
                    }).then((function(e) {
                        if (!e.ok) throw new Error("Response status is not success");
                        return e.json()
                    })).then((e => {
                        const t = k();
                        return e.currencies.forEach((e => {
                            void 0 !== e.logoid && (e.logoUrl = t.getSymbolLogoUrl(e.logoid, q.Medium))
                        })), e
                    }))
                }
                return T
            }

            function N(e) {
                if (null === e) return "";
                if (e.type === S.PeriodBack) {
                    var t = e.value;
                    return "YTD" !== t && "D" === t.slice(-1) && (t = t.slice(0, -1)), t
                }
                return "r," + e.from + ":" + e.to
            }
            class I extends R {
                constructor(e) {
                    super(e, m, p, w)
                }
                defaultResolutions() {
                    return u()
                }
                availableCurrencies() {
                    return M().then((e => e.currencies))
                }
                availableUnits() {
                    return M().then((e => {
                        const t = {};
                        for (const s of e.units) t[s.type] || (t[s.type] = []), t[s.type].push(s);
                        return t
                    }))
                }
                supportedSymbolsTypes() {
                    return "bovespa" === TradingView.widgetCustomer ? b.filter((function(e) {
                        return -1 !== ["", "stock", "futures", "index"].indexOf(e.value)
                    })) : "cme" === TradingView.widgetCustomer ? b.filter((function(e) {
                        return e.value !== c.types.QUANDL
                    })) : b
                }
                symbolsGrouping() {
                    return {
                        futures: /^(.+?)([12]!|\w\d{4})?$/
                    }
                }
                quoteCreateSession(e) {
                    return this._sendRequest("quote_create_session", [e])
                }
                quoteDeleteSession(e) {
                    return this._sendRequest("quote_delete_session", [e])
                }
                quoteSetFields(e, t) {
                    return this._sendRequest("quote_set_fields", [e, t])
                }
                quoteAddSymbols(e, t) {
                    return this._sendRequest("quote_add_symbols", [e, t])
                }
                quoteRemoveSymbols(e, t) {
                    return this._sendRequest("quote_remove_symbols", [e, t])
                }
                quoteFastSymbols(e, t) {
                    return this._sendRequest("quote_fast_symbols", [e, t])
                }
                quoteHibernateAll(e) {
                    return this._sendRequest("quote_hibernate_all", [e])
                }
                depthCreateSession(e, t, s) {
                    return this._sendRequest("depth_create_session", [e, t, s])
                }
                depthDeleteSession(e) {
                    return this._sendRequest("depth_delete_session", [e])
                }
                depthSetSymbol(e, t) {
                    return this._sendRequest("depth_set_symbol", [e, t])
                }
                depthClearSymbol(e) {
                    return this._sendRequest("depth_clear_symbol", [e])
                }
                depthSetScale(e, t) {
                    return this._sendRequest("depth_set_scale", [e, t])
                }
                chartCreateSession(e, t) {
                    return this._sendRequest("chart_create_session", [e, t])
                }
                chartDeleteSession(e) {
                    return this._sendRequest("chart_delete_session", [e])
                }
                connected() {
                    return !!this._isConnected
                }
                switchTimezone(e, t) {
                    return this._sendRequest("switch_timezone", [e, t])
                }
                createSeries(e, t, s, n, o, i, a, u) {
                    this._notificationHandlers[e][t] = new r(u, t), d.timeCounters.series.marks.push("create_series_" + e);
                    const c = N(a);
                    return this._sendRequest("create_series", [e, t, s, n, o, i, c])
                }
                removeSeries(e, t) {
                    return delete this._notificationHandlers[e][t], this._sendRequest("remove_series", [e, t])
                }
                modifySeries(e, t, s, n, o, i, a, d) {
                    this._notificationHandlers[e][t] = new r(d, t);
                    const u = N(a);
                    return this._sendRequest("modify_series", [e, t, s, n, o, u])
                }
                requestMoreData(e, t, s, n) {
                    if ("number" != typeof s) throw new Error("unsupported request to load more data, bars=" + s);
                    return this._notificationHandlers[e][t] = new r(n, t), this._sendRequest("request_more_data", [e, t, s])
                }
                authTokenManager() {
                    return this._authTokenManager
                }
                disconnectCount() {
                    return this._disconnectCount || 0
                }
                _convertTimescaleResponse(e) {
                    return this._dataHandleModule.convertTimescaleResponse(e)
                }
                _appendDuration(e, t) {
                    return e ? t + ", duration: " + this._formatTime(this.serverTime() - 1e3 * e) : t
                }
                _dispatchNotification(e, t) {
                    if ("request_data_problems" === e.method && this._onDataProblemsPromiseCb) this._onDataProblemsPromiseCb(e.params);
                    else if ("studies_metadata" !== e.method || null === this._metadataDeferredPromise) {
                        var s = e.params.shift();
                        if (this._notificationHandlers[s]) {
                            var i = e.params[0];
                            if ("symbol_resolved" === e.method) {
                                var r = e.params[1].full_name;
                                d.sendChartReport("symbol_resolved", {
                                    count: 1,
                                    additional: {
                                        symbol: r
                                    }
                                });
                                var a = d.timeCounters.series["resolve_symbol_" + s];
                                "number" == typeof a && d.sendChartReport("symbol_resolve_time_frame", {
                                    value: window.performance.now() - a,
                                    additional: {
                                        symbol: r
                                    }
                                })
                            }
                            if (["series_error", "series_completed"].includes(e.method) && d.timeCounters.series.marks.length > 0) {
                                var u = "create_series_" + s,
                                    c = d.timeCounters.series.marks.indexOf(u);
                                c >= 0 && d.timeCounters.series.marks.splice(c, 1)
                            }
                            o || "series_error" !== e.method || (o = !0);
                            var l = this._wsBackendConnection.getConnectionEstablished();
                            if (null !== l && "series_completed" === e.method && (o || (o = !0, d.sendChartReport("first_series_full_time_frame", {
                                    value: window.performance.now() - l
                                }), d.timeCounters.series.marks = []), n || (n = !0, d.sendChartReport("page_full_load_time_frame", {
                                    value: window.performance.now()
                                }))), s.startsWith("cs_")) {
                                var b = "recv: " + t;
                                "data_update" === e.method ? (b = _.isHighRateEnabled() ? b : b.slice(0, 500), f.logNormal(this._appendDuration(e.time, b))) : "study_loading" === e.method ? g.logNormal(this._appendDuration(e.time, b)) : "tickmark_update" === e.method ? y.logNormal(this._appendDuration(e.time, b)) : m.logNormal(this._appendDuration(e.time, b))
                            }
                            if (s.startsWith("qs_"))("quote_symbol_data" === e.method ? v.logNormal : w.logNormal)("recv: " + t);
                            switch (e.method) {
                                case "timescale_update":
                                    var C = this._dataHandleModule.getTimescaleObjects(e),
                                        k = this._dataHandleModule.getTimescaleChangeset(e);
                                    (q = this._convertTimescaleResponse(k)).clear = 0 === q.changes.length && 0 === q.index_diff.length && 0 === q.marks.length, this._sessions[s].onMessage({
                                        method: "timescale_update",
                                        params: q
                                    }), this._dataHandleModule.prepareDataUpdateObjects(s, C, function(e, t, s) {
                                        this._invokeNotificationHandler(e, t, s)
                                    }.bind(this));
                                    break;
                                case "tickmark_update":
                                    var q;
                                    (q = this._convertTimescaleResponse(e.params[0])).changes = [], this._sessions[s].onMessage({
                                        method: "timescale_update",
                                        params: q
                                    });
                                    break;
                                case "data_update":
                                    C = this._dataHandleModule.getDataUpdateObjects(e);
                                    this._dataHandleModule.prepareDataUpdateObjects(s, C, function(e, t, s) {
                                        this._invokeNotificationHandler(e, t, s)
                                    }.bind(this));
                                    break;
                                case "index_update":
                                    for (var R in e.params[0]) {
                                        var T = {
                                            method: "index_update",
                                            params: e.params[0][R]
                                        };
                                        this._invokeNotificationHandler(s, R, T)
                                    }
                                    break;
                                case "critical_error":
                                    p.logInfo(new Date + " critical_error session:" + this.sessionid + " reason:" + e.params[0]), d.sendChartReport("critical_error"),
                                        this._sessions[s].onMessage({
                                            method: "critical_error",
                                            params: e.params
                                        });
                                    break;
                                case "timescale_completed":
                                case "quote_symbol_data":
                                case "quote_list_fields":
                                case "quote_completed":
                                case "depth_symbol_error":
                                case "depth_symbol_success":
                                case "dd":
                                case "dpu":
                                case "depth_bar_last_value":
                                    this._sessions[s].onMessage({
                                        method: e.method,
                                        params: e.params
                                    });
                                    break;
                                case "clear_data":
                                    for (var M in e.params[0]) this._invokeNotificationHandler(s, M, {
                                        method: "clear_data",
                                        params: e.params[0][M]
                                    });
                                    break;
                                case h.point:
                                case h.resolutions:
                                case h.endOfData:
                                case h.instanceId:
                                case h.replayDepth:
                                case h.error:
                                case h.ok:
                                case h.depth:
                                    this._sessions[s].onMessage(e);
                                    break;
                                case "series_timeframe":
                                    e.params[4] = function(e) {
                                        if (null == e) return null;
                                        var t = /r,(\d+):(\d+)/.exec(e);
                                        return null !== t ? {
                                            from: Number(t[1]),
                                            to: Number(t[2]),
                                            type: S.TimeRange
                                        } : {
                                            value: e,
                                            type: S.PeriodBack
                                        }
                                    }(e.params[4]), this._invokeNotificationHandler(s, i, e);
                                    break;
                                case "symbol_resolved":
                                    ! function(e) {
                                        if (void 0 === e.corrections) {
                                            var t = e.subsessions.find((function(t) {
                                                return t.id === e.subsession_id
                                            }));
                                            void 0 !== t && (e.corrections = t["session-correction"])
                                        }
                                    }(e.params[1]), this._invokeNotificationHandler(s, i, e);
                                    break;
                                default:
                                    this._invokeNotificationHandler(s, i, e)
                            }
                        }
                    } else this._processedMetadata(e)
                }
                _notifySessions(e) {
                    for (var t in this._sessions) {
                        if (!this._sessions.hasOwnProperty(t)) return;
                        var s = this._sessions[t];
                        "function" == typeof s.onMessage && s.onMessage(e)
                    }
                }
                searchSymbols(e, t, s, n, o, i, r, u, l, h) {
                    var _ = this;
                    this._symbolSearchRequest && this._symbolSearchRequest.abort();
                    var p = location.protocol + "//" + window.SS_HOST;
                    a.isProd() ? p += "/symbol_search/" : p += "/local_search/", window.SS_URL && (p = window.SS_URL);
                    var m = {
                        text: e,
                        exchange: t,
                        type: s,
                        hl: o,
                        lang: n
                    };
                    window.SS_DOMAIN_PARAMETER && (m.domain = window.SS_DOMAIN_PARAMETER), i && (m.strict = 1), s === c.types.QUANDL && (p = "https://quandlapi.tradingview.com/api/v3/datasets.json", m = {
                        query: e,
                        database_code: t
                    }), r && (m.broker = r, u && (m.tradable = !0), l && (m.unhide = l));
                    var f = Object.keys(m).map((function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(m[e])
                        })).join("&"),
                        g = new XMLHttpRequest;
                    g.open("GET", p + "?" + f);
                    var y = window.performance.now();

                    function w() {
                        d.sendChartReport("symbol_search_time_frame", {
                            value: window.performance.now() - y
                        })
                    }

                    function v() {
                        w(), d.sendChartReport("symbol_search_http_error"), _._symbolSearchRequest = null
                    }
                    g.addEventListener("load", (function() {
                        var e = JSON.parse(g.responseText);
                        h && h(e), w(), d.sendChartReport("symbol_search_http_status", {
                            value: g.status
                        }), _._symbolSearchRequest = null
                    })), g.addEventListener("error", v), g.addEventListener("timeout", v), this._symbolSearchRequest = g, g.send()
                }
                getMarks(e, t, s, n, o) {
                    throw Error("This method is not implemented")
                }
                getTimescaleMarks(e, t, s, n, o) {
                    throw Error("This method is not implemented")
                }
                getPingInfo() {
                    return this._wsBackendConnection.getPingInfo()
                }
                requestDataProblems() {
                    return this._requestDataProblemsPromise || (this._requestDataProblemsPromise = this.connectDfd.then((() => new Promise(((e, t) => {
                            this._onDataProblemsPromiseErrback = t, this._sendRequest("request_data_problems", []) ? this._onDataProblemsPromiseCb = e : t()
                        })))).finally((() => {
                            this._requestDataProblemsPromise = null
                        }))),
                        this._requestDataProblemsPromise
                }
            }
            l(I, "TVChartApi", i, "ChartApiInterface"), window.ChartApiInstance = new I(window.WSBackendConnection), e && e.exports && (e.exports = I)
        },
        625703: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                HandlerInfo: () => n
            });
            class n {
                constructor(e, t, s) {
                    this.handler = e, this.customId = t, this.singleShot = s
                }
            }
        },
        363361: (e, t, s) => {
            "use strict";
            var n, o;
            s.d(t, {
                    ResponseMethods: () => n
                }),
                function(e) {
                    e.error = "replay_error", e.point = "replay_point", e.ok = "replay_ok", e.resolutions = "replay_resolutions", e.endOfData = "replay_data_end", e.instanceId = "replay_instance_id", e.replayDepth = "replay_depth"
                }(n || (n = {})),
                function(e) {
                    e.tooSmallDelay = "too_small_delay", e.alreadyInAutoplay = "already_in_autoplay", e.nothingToStop = "nothing_to_stop", e.pointTooDeep = "point_too_deep", e.alreadyInSession = "already_in_session", e.thereIsNoSuchSeries = "no_series", e.notAllowedInAutoplay = "not_allow_in_autoplay", e.invalidResolution = "invalid_resolution"
                }(o || (o = {}))
        },
        666070: (e, t, s) => {
            "use strict";
            s.d(t, {
                getDefaultResolutions: () => a
            });
            var n = s(125226),
                o = s(638456);
            const i = (0, n.isFeatureEnabled)("tick_intervals") && !(0, o.onWidget)(),
                r = s(764829);

            function a() {
                const e = ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M", "3M", "6M", "12M", "1R", "10R", "100R", "1000R"];
                if (!r.enabled("widget")) {
                    let t = ["1S", "5S", "10S", "15S", "30S", "45s"];
                    return i && (t = ["1T", "10T", "100T", "1000T"].concat(t)), t.concat(e)
                }
                return e
            }
        },
        19308: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                types: () => n
            });
            const n = {
                ECONOMIC: "economic",
                QUANDL: "quandl"
            }
        },
        633339: (e, t, s) => {
            "use strict";

            function n(e) {
                const t = {};
                if (-1 === e.indexOf("@")) t.shortId = e, t.packageId = "tv-basicstudies", t.id = e + "@" + t.packageId, t.version = 1;
                else {
                    const s = e.split("@");
                    t.shortId = s[0];
                    const n = s[1].split("-");
                    if (3 === n.length) t.packageId = n.slice(0, 2).join("-"), t.id = t.shortId + "@" + t.packageId, t.version = parseInt(n[2]);
                    else if (1 === n.length && "decisionbar" === n[0]) t.packageId = "les-" + n[0], t.id = t.shortId + "@" + t.packageId, t.version = 1;
                    else {
                        if (1 !== n.length) throw new Error("unexpected study id:" + e);
                        t.packageId = "tv-" + n[0], t.id = t.shortId + "@" + t.packageId, t.version = 1
                    }
                }
                if (t.fullId = t.id + "-" + t.version, "tv-scripting" === t.packageId) {
                    const e = t.shortId;
                    if (0 === e.indexOf("Script$") || 0 === e.indexOf("StrategyScript$")) {
                        const s = e.indexOf("_");
                        t.productId = s >= 0 ? e.substring(0, s) : t.packageId
                    } else t.productId = t.packageId
                } else t.productId = t.packageId;
                return t
            }
            s.d(t, {
                parseIdString: () => n
            })
        },
        887744: (e, t, s) => {
            "use strict";

            function n(e) {
                if (void 0 === e) return "";
                if (e instanceof Error) {
                    let t = e.message;
                    return e.stack && (t += " " + e.stack), t
                }
                return "string" == typeof e ? e.toString() : JSON.stringify(e)
            }
            s.d(t, {
                errorToString: () => n
            })
        }
    }
]);