"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [19508], {
        173777: (e, t, n) => {
            n.d(t, {
                SEPARATOR_PREFIX: () => i
            });
            const i = "###"
        },
        66974: (e, t, n) => {
            n.r(t), n.d(t, {
                environment: () => r,
                getEnvironmentByHost: () => _,
                isDebug: () => s,
                isLocal: () => a,
                isProd: () => o
            });
            const i = new Set(["battle", "staging", "test", "local"]);

            function _(e) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : "local"
            }

            function r() {
                const e = self.environment;
                return function(e) {
                    i.has(e) || console.warn("Invalid environment " + e)
                }(e), e
            }

            function a() {
                return "local" === r()
            }

            function o() {
                return "battle" === r()
            }

            function s() {
                return !o()
            }
        },
        778016: (e, t, n) => {
            n.d(t, {
                enabled: () => o,
                getConfig: () => l
            });
            n(650151);
            var i = n(105291),
                _ = n(874851),
                r = n(638456),
                a = n(549358);

            function o(e, t, n) {
                let i = window.user;
                n && (i = n);
                const _ = l(e, t, i);
                if (!_) return !1;
                if (_.disable_on_trial && (!i || i.is_trial)) return !1;
                const a = _.disable_on_lite_plan;
                if (a && i.is_lite_plan) {
                    if ("all" === a) return !1;
                    if ("exclude_mobile" === a && !r.CheckMobile.any()) return !1
                }
                return !0
            }

            function s(e) {
                const t = i[e];
                return t ? t.extends ? Object.assign({}, s(t.extends), t) : t : null
            }

            function l(e, t, n) {
                var i, r;
                let o = s(t || (null !== (i = function(e) {
                    let t = window.user;
                    "undefined" != typeof window && window.user && (t = window.user), e && (t = e);
                    let n = (null == t ? void 0 : t.pro_plan) || "free";
                    return "free" !== n && !(0, a.isTrialProduct)(n) || (n = (0, a.getProductForTrial)(n)), n
                }(n)) && void 0 !== i ? i : ""));
                if (!o) return null;
                const l = null === (r = window.TradingView) || void 0 === r ? void 0 : r.widgetCustomer;
                return l && _[l] && (o = Object.assign({}, o, _[l])), o && o[e] || null
            }
        },
        125226: (e, t, n) => {
            var i = n(49437).TVLocalStorage,
                _ = n(942634).Delegate,
                r = n(855385);
            n(638456);
            var a = new _;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new _,
                enableFeature: function(e) {
                    i.setItem(this.force_prefix + e, "true"), a.fire(e)
                },
                disableFeature: function(e) {
                    i.setItem(this.force_prefix + e, "false"), a.fire(e)
                },
                resetFeature: function(e) {
                    i.removeItem(this.force_prefix + e), a.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return a
                }
            }, TradingView.isFeatureEnabled = function(e) {
                var t = "featuretoggle_seed";

                function _(e) {
                    try {
                        var n = r(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = i.getItem(t);
                            return null !== e || (e = Math.floor(1e6 * Math.random()), i.setItem(t, e)), e
                        }());
                        return new DataView(n).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function o(t) {
                    return !("local" !== window.environment || ! function(e) {
                        var t = ["address_validation_enabled", "skip_navigation_on_chart", "tick_intervals", "broker_TRADESTATION", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "details_disable_bid_ask", "vat_disabled", "disable_recaptcha_on_signup", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "braintree-3ds-enabled", "order_presets", "trial_increased_monthly_discounts", "checkout-3ds", "checkout-subscriptions", "checkout_show_instead_of_braintree", "razorpay-card-subscriptions", "razorpay-upi-subscriptions", "dlocal-payments", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "broker_id_session", "modular_broker_use_sync_mapper", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "ignore_mobile_apps_distinguish_pro_full_name", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "hide_ecomonic_events", "load_layouts_without_page_reload", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "disable_tradestation_country_block", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "minds_widget_enabled", "self-replacing-advanced-chart-widget", "disable-calendar-advanced-chart-widget", "disable-lse-data-screener-heatmap-widgets", "symphony_notification_badges", "paper_competition_banner", "paper_competition_started_dialog", "paper_subaccount_custom_currency", "disable_pushstream_connections_for_anonymous_users", "use_staging_verifier", "account_verifier_maintenance", "ibkr_use_new_init_session_api", "tradestation_account_data_streaming", "enable_eventsource_pushstream_transport", "enable_eventsource_pushstream_mobile", "performance_test_mode", "ftx_request_server_logger", "ibkr_request_server_logger", "disallow_concurrent_sessions", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "hide_tweet_drawingtool", "editor_new_save", "replay_lower_resolution", "no_buy_hold_backtesting", "editor_new_save_only", "backtesting_report", "enable_new_custom_public_chats", "bottom_panel_track_events", "ibkr_ws_account_summary", "continuous_front_contract_trading", "vertex-tax-included", "enable_traded_context_linking", "order_context_validation_in_instant_mode", "show_data_problems_in_help_center", "chart_storage_hibernation_delay_60min", "chart_storage_hibernation_delay_10min", "chart_storage_hibernation_delay_5min", "force_disable_jsx_menu_items_rendering", "hide_dom", "enable_sign_in_popup_with_evercookie", "start_replay_right_after_point_selection", "switching_raf_toast", "new_order_size_calculator", "order_type_specific_settings_saving", "hide_position_trade_value", "paper_force_connect_pushstream", "use_broker_logos_from_single_source", "alerts-on-watchlists", "alerts-start-christmas", "alerts-use-http-caching", "alerts-remove-offline-pop-ups", "alerts-remove-clear-alerts-button", "alerts-remove-mark-all-read-button", "forexcom_session_v2", "fxcm_server_logger", "minds_comments_enable_for_free_users", "fxcm_trailing_stop_bracket", "mock_tweet_data_for_tests", "replay_result_sharing", "ibkr_ws_server_logger", "options_strategy_analyzer_tab", "options_details_widget", "options_overlay", "options_product_page", "options_exchange_nse", "options_exchange_cme", "options_exchange_cbot", "options_exchange_comex", "options_exchange_nymex", "options_exchange_bse", "options_exchange_opra", "ibkr_subscribe_to_order_updates_first", "rest_logout_on_429", "amp_oauth_authorization", "blueline_oauth_authorization", "dorman_oauth_authorization", "cqg_oauth_authorization", "ironbeam_oauth_authorization", "optimus_oauth_authorization", "stonex_oauth_authorization", "tickmill_oauth_authorization", "ibkr_ws_account_ledger", "force_max_allowed_pulling_intervals", "fxcm_password_authorization_type", "change_password_suggestion_popup", "ibkr_disable_ws_connect_timeout", "oanda_rest_api", "launch-oanda-country-group-1", "launch-oanda-country-group-2", "launch-oanda-country-group-3", "news_enable_streaming", "news_screener_page_client", "news_enable_streaming_hibernation", "news_streaming_hibernation_delay_60min", "news_streaming_hibernation_delay_10min", "news_streaming_hibernation_delay_5min", "cqg-realtime-bandwidth-limit", "cityindex_spreadbetting", "paper_use_new_auth", "stack_trace_clickable", "oauth2_code_flow_provider_server_logger", "turn_off_ai", "enable_binanceapis_base_url", "unsibscribe_competition_for_participants", "enable_first_touch_is_selection", "paper_delay_trading", "static_dom", "binance_disable_live_account_verification", "enable_forced_email_confirmation", "ylg_oauth_authorization", "order_ticket_resizable_drawer_on", "enable_toast_notifications_groupable", "enable_order_moving_by_price_line", "enable_anchor_for_traded_objects", "renew_token_preemption_30", "renew_token_preemption_60", "renew_token_preemption_120", "do_not_open_ot_from_plus_button", "rest_use_async_mapper", "mockbroker_server_logging", "oanda_rest_server_logging", "broker_awards_vote_2024", "update_availability_for_std", "disable_update_availability_status"],
                            n = "[A-Z]+[a-zA-Z0-9_]+",
                            i = new RegExp(`broker_${n}_dev`, "g"),
                            _ = new RegExp(`hide_${n}_on_ios`, "g"),
                            r = new RegExp(`hide_${n}_on_android`, "g"),
                            a = new RegExp(`hide_${n}_on_mobile_web`, "g");
                        return -1 === t.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === i.test(e) && !1 === _.test(e) && !1 === r.test(e) && !1 === a.test(e)
                    }(t)) || (!e[t] || -1 !== e[t]) && (!!("true" === i.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + t]) || !("false" === i.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + t]) && (!!e[t] && (1 === e[t] || _(t) <= e[t])))
                }
                return TradingView.onWidget() || Promise.all([n.e(8592), n.e(34604)]).then(n.bind(n, 8592)).then((t => {
                    t.pushStreamMultiplexer.on("featuretoggle", (function(t) {
                        var n = o(t.name);
                        e[t.name] = t.state, n !== o(t.name) && a.fire(t.name)
                    }))
                })), o
            }(window.featureToggleState || {}), TradingView.FeatureToggle, t.isFeatureEnabled = TradingView.isFeatureEnabled, TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        49437: (e, t, n) => {
            const {
                getLogger: i
            } = n(338619), _ = i("TVLocalStorage");
            var r = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (e) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (e) {}
            };
            r.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        t = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const n = this.key(e);
                        t.push({
                            key: n,
                            length: String(this.getItem(n)).length
                        })
                    }
                    t.sort(((e, t) => t.length - e.length));
                    const n = t.slice(0, e);
                    t.sort(((e, t) => t.key.length - e.key.length));
                    const i = t.slice(0, e);
                    _.logNormal(`Total amount of keys in Local Storage: ${this.length}`), _.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(n)}`), _.logNormal(`Top ${e} longest key names: ${JSON.stringify(i)}`);
                    try {
                        navigator.storage.estimate().then((e => {
                            _.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                        }))
                    } catch (e) {}
                }
            }, r.prototype.length = 0, r.prototype.isAvailable = !1, r.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, r.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, t = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                    this.length = t
                }
            }, r.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, r.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, r.prototype.setItem = function(e, t) {
                this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
            }, r.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, r.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            }, window.TVLocalStorage = new r, e.exports.TVLocalStorage = window.TVLocalStorage
        },
        659863: (e, t, n) => {
            new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        519073: (e, t, n) => {
            function i(e) {
                return void 0 !== e && e.includes("crypto")
            }
            n.d(t, {
                hasCryptoTypespec: () => i
            })
        },
        175203: (e, t, n) => {
            n.d(t, {
                telemetry: () => c
            });
            var i = n(942634),
                _ = n(702598),
                r = n(638456),
                a = n(314802);
            n(659863);
            const o = (0, n(338619).getLogger)("Common.Telemetry"),
                s = {
                    default: 15e3,
                    site: 3e5
                },
                l = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const c = new class {
                constructor() {
                    this.reportSent = new i.Delegate, this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(e) {
                    const t = this._parseCluster(e);
                    null !== t && (this._commonAdditionalData.cluster = t)
                }
                sendReport(e, t, n) {
                    var i;
                    if (!this._isAbleToSendReport(t)) return;
                    const _ = this._getSubserviceType(e),
                        r = this._getHost(e, _);
                    if (null !== r) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, t, r), !this._timeoutIds[e]) {
                            const t = null !== (i = s[e]) && void 0 !== i ? i : s.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, r), t)
                        }
                    } else o.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${_}`)
                }
                sendChartReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("charts", e, t, n)
                }
                sendLineToolsStorageReport(e, t, n = !0) {
                    this._sendServiceSpecifiedReport("line_tools_storage", e, t, n)
                }
                _sendServiceSpecifiedReport(e, t, n, i = !0) {
                    this._updateUserInfo(), n = void 0 === n ? {
                        count: 1
                    } : n, i && (n = this._appendCommonAdditionalInfo(n, ["cluster", "userId"])), this.sendReport(e, t, n)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        n = l.includes(e),
                        i = Boolean(window.TradingView.onChartPage || (0, r.onWidget)());
                    return t && (!n || i)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            n = this._renameAllParams(e),
                            i = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        o.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, _.fetch)(`${t}/report`, {
                            method: "POST",
                            body: JSON.stringify(i)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const n = window.TELEMETRY_HOSTS,
                        i = n[e] && n[e][t];
                    return Boolean(i) ? i : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const n = window.user.is_pro;
                    return "charts" === e && (0, a.isOnMobileAppPage)("old") ? t = n ? "ios_pro" : "ios_free" : "charts" === e && (0, a.isOnMobileAppPage)("new") ? t = n ? "android_pro" : "android_free" : (0, r.onWidget)() ? t = "widget" : n && (t = "pro"), t
                }
                _parseCluster(e) {
                    let t;
                    try {
                        t = JSON.parse(e).session_id
                    } catch (e) {
                        return o.logError("Could not parse cluster id (session id)"), null
                    }
                    const n = /(.*@)(.*)/gi.exec(t);
                    return null !== n && n.length >= 3 ? n[2] : null
                }
                _appendCommonAdditionalInfo(e, t) {
                    return t.forEach((t => {
                        t in this._commonAdditionalData && (e.additional = e.additional || {}, e.additional[t] = this._commonAdditionalData[t])
                    })), e
                }
                _cropParams(e) {
                    var t;
                    for (const n in e) e.hasOwnProperty(n) && e[n].length > 1e3 && (e.too_much_metrics_frame = null !== (t = e.too_much_metrics_frame) && void 0 !== t ? t : [], e.too_much_metrics_frame.push({
                        value: e[n].length,
                        additional: {
                            event: n
                        }
                    }), delete e[n]);
                    return e
                }
                _renameAllParams(e) {
                    const t = {};
                    for (const n in e) e.hasOwnProperty(n) && (t[n] = [], e[n].forEach((e => {
                        t[n].push(this._renameEntryParams(e))
                    })));
                    return t
                }
                _renameEntryParams(e) {
                    const t = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(e).reduce(((n, i) => (n[t[i]] = e[i], n)), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const n in e)
                        if (e.hasOwnProperty(n)) {
                            t[n] = [];
                            const i = {
                                c: 0
                            };
                            e[n].forEach((e => {
                                const _ = this._cleanEntryParams(e),
                                    r = Object.keys(_).length;
                                1 === r && void 0 !== _.c ? i.c += _.c : r > 0 && t[n].push(_)
                            })), i.c > 0 && t[n].push(i), 0 === t[n].length && delete t[n]
                        }
                    return t
                }
                _cleanEntryParams(e) {
                    const t = Object.keys(e).reduce(((t, n) => "c" !== n && "t" !== n || e[n] ? (t[n] = e[n], t) : t), {});
                    return "c" in t || "v" in t || "t" in t ? t : {}
                }
                _addReportToStash(e, t, n) {
                    n in this._reportStash || (this._reportStash[n] = {}), t in this._reportStash[n] || (this._reportStash[n][t] = []), Object.keys(e).length > 0 && this._reportStash[n][t].push(e)
                }
            }
        },
        779923: (e, t, n) => {
            async function i(e, t) {
                const i = await Promise.all([n.e(61560), n.e(75816), n.e(93703), n.e(46445), n.e(62093), n.e(44524), n.e(21356), n.e(53953), n.e(62564), n.e(46489), n.e(53799), n.e(75826), n.e(74600), n.e(25480), n.e(88015), n.e(78687), n.e(48694), n.e(601), n.e(16828), n.e(30614), n.e(87473), n.e(80977), n.e(62526), n.e(7922), n.e(8845), n.e(38890)]).then(n.bind(n, 541262));
                return i.showSimpleDialog(e, i.warningModule, t)
            }
            n.d(t, {
                showWarning: () => i
            })
        },
        570701: (e, t, n) => {
            var i, _;
            n.d(t, {
                    TIMEFRAMETYPE: () => _
                }),
                function(e) {
                    e.extractErrorReason = function(e) {
                        return e.params[1]
                    }
                }(i || (i = {})),
                function(e) {
                    e.PeriodBack = "period-back", e.TimeRange = "time-range"
                }(_ || (_ = {}))
        },
        176637: (e, t, n) => {
            n.r(t), n.d(t, {
                QUOTE_FIELDS: () => r,
                QUOTE_FIELDS_CACHE: () => a,
                QuoteCache: () => _
            });
            var i = n(650151);
            class _ {
                constructor(e) {
                    this._cache = new Map, this._fields = [...e.fields]
                }
                update(e, t, n) {
                    const _ = (0, i.ensureDefined)(e.symbolname);
                    if (this._cache.has(_) || this._cache.set(_, {
                            symbolname: _,
                            status: e.status,
                            values: {}
                        }), "error" === e.status) return;
                    const r = (0, i.ensureDefined)(this._cache.get(_));
                    r.status = e.status;
                    for (const i of this._fields) t.has(i) && (n || void 0 !== e.values[i]) && (r.values[i] = e.values[i])
                }
                get(e) {
                    var t;
                    return null !== (t = this._cache.get(e)) && void 0 !== t ? t : null
                }
                fields() {
                    return this._fields
                }
            }
            const r = new Set(["pro_name", "base_name", "logoid", "currency-logoid", "base-currency-logoid", "source-logoid", "short_name", "web_site_url", "pro_perm", "timezone", "current_session", "last_price", "lp_time", "prev_close_price", "open_price", "high_price", "low_price", "price_52_week_high", "price_52_week_low", "ask", "ask_size", "bid", "bid_size", "rch", "rchp", "rtc", "rtc_time", "data_frequency", "reference-last-period-start", "business_description", "web_site_url", "figi", "number_of_employees", "float_shares_outstanding", "earnings_release_next_calendar_date", "root", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "visible-plots-set", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "variable_tick_size", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "market_cap_calc", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_publication_type_next_fq", "earnings_release_date", "earnings_per_share_fq", "earnings_per_share_forecast_fq", "forecast_raw", "last_release_date", "next_release_date", "reference_last_period", "fundamental_currency_code", "number_of_employees", "web_site_url", "business_description", "founded", "ceo", "float_shares_outstanding", "total_shares_outstanding", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "total_revenue_fq_h", "total_revenue_fy_h", "net_income_fy_h", "net_income_fq_h", "total_assets_fy_h", "total_assets_fq_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_next_date_fq", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_fq_h", "earnings_per_share_fq_h", "earnings_fiscal_period_fq_h", "next_earnings_fiscal_period_fq", "is_next_earnings_release_date_estimated", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "measure", "value_unit_id", "value-unit-id", "update_mode", "language", "local_description", "short_description", "source", "source2", "format", "recommendation_mark", "last_report_frequency", "price_target_estimates_num", "price_target_average", "update_mode_seconds", "recommendation_total", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_high", "price_target_low", "rates_pt", "rates_pt", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy", "fiscal_period_fq", "fiscal_period_fh", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "earnings_release_time", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "revenue_seg_by_business_h", "revenue_seg_by_region_h", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h", "total_revenue_fy", "total_revenue_fq", "total_revenue_fh", "gross_profit_fy", "gross_profit_fq", "gross_profit_fh", "ebitda_fy", "ebit_fy", "net_income_fy", "net_income_fq", "net_income_fh", "total_debt_fy_h", "total_debt_fq_h", "total_debt_fh_h", "free_cash_flow_fy_h", "free_cash_flow_fq_h", "free_cash_flow_fh_h", "cash_n_equivalents_fy_h", "cash_n_equivalents_fq_h", "cash_n_equivalents_fh_h", "total_current_assets_fy", "total_current_assets_fq", "total_current_assets_fh", "total_current_liabilities_fy", "total_current_liabilities_fq", "total_current_liabilities_fh", "total_non_current_assets_fy", "total_non_current_assets_fq", "total_non_current_assets_fh", "total_non_current_liabilities_fy", "total_non_current_liabilities_fq", "total_non_current_liabilities_fh", "loans_net_fy", "loans_net_fy_h", "loans_net_fq_h", "loans_net_fh_h", "total_deposits_fy", "total_deposits_fy_h", "total_deposits_fq_h", "total_deposits_fh_h", "loan_loss_allowances_fy", "loan_loss_allowances_fy_h", "loan_loss_allowances_fq_h", "loan_loss_allowances_fh_h", "reserve_to_total_capital_fy_h", "reserve_to_total_capital_fq_h", "reserve_to_total_capital_fh_h", "unearned_premium_to_total_capital_fy_h", "unearned_premium_to_total_capital_fq_h", "unearned_premium_to_total_capital_fh_h", "insurance_reserves_fy_h", "insurance_reserves_fq_h", "insurance_reserves_fh_h", "policy_claims_fy_h", "policy_claims_fq_h", "policy_claims_fh_h", "premiums_earned_fy_h", "premiums_earned_fq_h", "premiums_earned_fh_h", "price_earnings_fq_h", "price_earnings_fy_h", "price_earnings_fh_h", "price_sales_fq_h", "price_sales_fy_h", "price_sales_fh_h", "diluted_net_income_ttm", "total_revenue_ttm", "price_earnings_current", "price_sales_current", "isin-displayed", "interest_income_fy_h", "interest_income_fq_h", "interest_income_fh_h", "non_interest_income_fy_h", "non_interest_income_fq_h", "non_interest_income_fh_h", "website", "doc", "explorer", "sources", "contracts", "crypto_common_categories", "crypto_asset", "community", "dividends_availability", "earnings_availability", "financials_availability", "etf_asset_type_exposure", "etf_region_exposure", "top_holdings", "unit-id", "options-info", "interest_income_fy", "interest_income_fq", "interest_income_fh", "non_interest_income_fy", "non_interest_income_fq", "non_interest_income_fh", "interest_expense_fy", "interest_expense_fq", "interest_expense_fh", "loan_loss_provision_fy", "loan_loss_provision_fq", "loan_loss_provision_fh", "non_interest_expense_fy", "non_interest_expense_fq", "non_interest_expense_fh", "non_oper_income_fy", "non_oper_income_fq", "non_oper_income_fh", "unusual_expense_inc_fy", "unusual_expense_inc_fq", "unusual_expense_inc_fh", "pretax_income_fy", "pretax_income_fq", "pretax_income_fh", "income_tax_fy", "income_tax_fq", "income_tax_fh", "after_tax_other_income_fy", "after_tax_other_income_fq", "after_tax_other_income_fh", "total_non_oper_income_fy", "total_non_oper_income_fq", "total_non_oper_income_fh", "oper_income_fy", "oper_income_fq", "oper_income_fh", "operating_expenses_fy", "operating_expenses_fq", "operating_expenses_fh", "cost_of_goods_fy", "cost_of_goods_fq", "cost_of_goods_fh", "equity_in_earnings_fy", "equity_in_earnings_fq", "equity_in_earnings_fh", "minority_interest_exp_fy", "minority_interest_exp_fq", "minority_interest_exp_fh", "discontinued_operations_fy", "discontinued_operations_fq", "discontinued_operations_fh", "front_contract", "pointvalue", "unit_id", "expiration", "aum", "asset_class", "focus", "expense_ratio", "launch_date", "issuer", "brand", "homepage", "index_tracked", "actively_managed", "fund_view_mode", "common_equity_tier1_ratio_fy_h", "common_equity_tier1_ratio_fq_h", "common_equity_tier1_ratio_fh_h", "tier1_capital_ratio_fy_h", "tier1_capital_ratio_fq_h", "tier1_capital_ratio_fh_h", "total_capital_ratio_fy_h", "total_capital_ratio_fq_h", "total_capital_ratio_fh_h", "preferred_stock_carrying_value_fh", "preferred_stock_carrying_value_fq", "total_debt_fq", "minority_interest_fh", "minority_interest_fq", "cash_n_short_term_invest_fq", "cash_n_due_f_banks_fh", "cash_n_due_f_banks_fq", "enterprise_value_current", "etf_holdings_count", "contract-description", "reference-last-period", "all_time_high", "all_time_high_day", "all_time_low", "all_time_low_day", "outstanding_amount", "nominal_value", "denom_min", "current_coupon", "coupon_type_general", "coupon_frequency", "yield_to_maturity", "maturity-date", "days_to_maturity", "bond_issuer", "issue_date", "bond_issuer_stock_symbol", "total_issued_amount", "paid_amount", "bond_snp_rating_lt_h", "placement_type", "duration_type", "maturity_type", "offer_type", "redemption_type", "conversion_option", "sinking_fund", "ownership_form", "daily-summary-ast", "coupon_h", "sinking_fund_next_date", "sinking_fund_min_amount_next", "call_next_date", "redemptions_h", "call_notice_days", "put_next_date", "put_notice_days_min", "seniority_level", "inflation_protection", "pledge_status", "bond_issuer_country_of_risk", "bond_issuer_cr_parent", "credit_enhancement_type", "credit_enhancement_status", "use_of_proceeds", "bond_issuer_snp_rating_lt_h", "bond_issuer_snp_rating_st_h", "bond_agents_tr", "first_bar_time_1d"]),
                a = new _({
                    fields: r
                })
        },
        625545: (e, t, n) => {
            n.d(t, {
                getQuoteSessionInstance: () => r
            });
            var i = n(360451);
            const _ = {};

            function r(e = "full") {
                return _[e] || function(e = "full", t) {
                    _[e] = t
                }(e, new i(e)), _[e]
            }
        },
        307239: (e, t, n) => {
            function i(e) {
                if (void 0 === e) return null;
                const t = e.match(/(delayed_streaming)_(\d+)/);
                return null === t ? null : {
                    mode: t[1],
                    interval: parseInt(t[2])
                }
            }

            function _(e) {
                const t = i(e.update_mode);
                return null === t || (e.update_mode = t.mode, e.update_mode_seconds = t.interval), e
            }
            n.r(t), n.d(t, {
                normalizeUpdateMode: () => _,
                parseUpdateMode: () => i
            })
        },
        750139: (e, t, n) => {
            function i(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }

            function _(e) {
                return e > 0 ? Math.floor(e) : Math.ceil(e)
            }
            n.d(t, {
                clamp: () => i,
                toInt: () => _
            })
        },
        641066: (e, t, n) => {
            n.d(t, {
                numOfDecimalPlaces: () => _
            });
            var i = n(960521);

            function _(e) {
                return (new i.Big(e).toFixed().split(".")[1] || "").length
            }
        },
        296244: (e, t, n) => {
            n.d(t, {
                getMinTickData: () => s,
                makeVariableMinTickData: () => c
            });
            var i = n(960521),
                _ = n(150335),
                r = n(124829),
                a = n(641066);

            function o(e) {
                return e ? (0, i.Big)(e.minMove).div(e.priceScale).toNumber() : NaN
            }

            function s(e) {
                const {
                    minTick: t,
                    price: n,
                    variableMinTickData: i,
                    shouldCheckForEquality: r
                } = e, a = (0, _.isNumber)(t) ? l(t) : t;
                return void 0 === i ? a : function(e, t, n = !1) {
                    for (let i = 0; i < t.length; i++) {
                        if (e < t[i].price) return t[i].minTick;
                        if (n && e === t[i].price) return t[i].minTick
                    }
                    return t[t.length - 1].minTick
                }(n, i, r)
            }

            function l(e) {
                const t = (0, a.numOfDecimalPlaces)(e),
                    n = Math.pow(10, t);
                return {
                    priceScale: n,
                    minMove: (0, i.Big)(e).mul(n).toNumber()
                }
            }

            function c(e, t) {
                var n, a, s, c, d;
                const u = [{
                    minTick: (0, _.isNumber)(e) ? l(e) : e,
                    price: 1 / 0,
                    maxIndex: 1 / 0
                }];
                try {
                    const e = t.split(" ").map(((e, t) => (0, r.isEven)(t) ? function(e) {
                        const t = Number(e);
                        if (Number.isFinite(t)) return l(t); {
                            const t = e.split("/");
                            if (t.length < 2 || t.length > 3) throw new Error(`Unexpected mintick: ${e}`);
                            const n = Number(t[1]),
                                i = Number(t[0]);
                            if (!Number.isFinite(n) || !Number.isFinite(i)) throw new Error(`Unexpected mintick: ${e}`);
                            const _ = 3 === t.length ? Number(t[2]) : void 0;
                            if (void 0 !== _ && !Number.isFinite(_)) throw new Error(`Unexpected mintick: ${e}`);
                            const r = {
                                priceScale: n,
                                minMove: i
                            };
                            return void 0 !== _ && (r.minMove2 = _), r
                        }
                    }(e) : function(e) {
                        const t = Number(e);
                        if (Number.isNaN(t)) throw new Error(`Unexpected price limit: ${e}`);
                        return t
                    }(e)));
                    if ((0, r.isEven)(e.length)) throw new Error("Theme must not be event number of elements");
                    const _ = [];
                    for (let t = 0; t < e.length; t += 2) {
                        const r = null !== (n = e[t + 1]) && void 0 !== n ? n : 1 / 0,
                            l = null !== (s = null === (a = _[_.length - 1]) || void 0 === a ? void 0 : a.price) && void 0 !== s ? s : 0,
                            u = null !== (d = null === (c = _[_.length - 1]) || void 0 === c ? void 0 : c.maxIndex) && void 0 !== d ? d : 0,
                            h = r === 1 / 0 ? 1 / 0 : new i.Big(r).minus(l).div(o(e[t])).plus(u).toNumber();
                        _.push({
                            minTick: e[t],
                            price: r,
                            maxIndex: h
                        })
                    }
                    return _
                } catch (e) {
                    return u
                }
            }
        },
        574313: (e, t, n) => {
            n.d(t, {
                numberToStringWithLeadingZero: () => _
            });
            var i = n(124829);

            function _(e, t) {
                if (!(0, i.isNumber)(e)) return "n/a";
                if (!(0, i.isInteger)(t)) throw new TypeError("invalid length");
                if (t < 0 || t > 24) throw new TypeError("invalid length");
                if (0 === t) return e.toString();
                return ("0000000000000000" + e.toString()).slice(-t)
            }
        },
        735211: (e, t, n) => {
            n.d(t, {
                PriceFormatter: () => o
            });
            var i = n(801786),
                _ = n(93500),
                r = n(124829),
                a = n(798791);
            class o {
                constructor(e = {}) {
                    this.type = "price";
                    const {
                        minMove2: t,
                        fractional: n,
                        variableMinTick: o,
                        ignoreMinMove: s,
                        ignoreLocaleNumberFormat: l
                    } = e, c = !e.minMove || s ? 1 : e.minMove, d = (0, r.isNumber)(e.priceScale) && (0, r.isInteger)(e.priceScale) ? e.priceScale : 100, u = (0, a.calculateDecimal)(d, c, n, t), h = { ...e,
                        minMove: c,
                        priceScale: d,
                        fractionalLength: u
                    };
                    if (d < 0) throw new TypeError("invalid base");
                    this._priceScale = d, this._minMove = c, this._minMove2 = t, this._fractional = n, this._variableMinTick = o, this._ignoreMinMove = s, this._fractionalLength = u, this._ignoreLocaleNumberFormat = l, this._implementation = n ? new _.FractionalPriceFormatterImpl(h) : new i.DecimalPriceFormatterImpl(h)
                }
                isFractional() {
                    return !!this._fractional
                }
                state() {
                    return {
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        priceScale: this._priceScale,
                        variableMinTick: this._variableMinTick,
                        ignoreMinMove: this._ignoreMinMove,
                        fractional: this._fractional
                    }
                }
                formatChange(e, t, n) {
                    return this._implementation.formatImpl(e - t, { ...n,
                        variableMinTickDataPrice: Math.min(Math.abs(e), Math.abs(t))
                    })
                }
                format(e, t) {
                    return this._implementation.formatImpl(e, t)
                }
                parse(e, t) {
                    return this._implementation.parse(e, t)
                }
                hasForexAdditionalPrecision() {
                    return this._implementation.hasForexAdditionalPrecision()
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new o(e)
                }
            }
        },
        338619: (e, t, n) => {
            n.r(t), n.d(t, {
                LOGLEVEL: () => i.LOGLEVEL,
                getLogHistory: () => i.getLogHistory,
                getLogLevel: () => i.getLogLevel,
                getLogger: () => i.getLogger,
                getRawLogHistory: () => i.getRawLogHistory,
                isHighRateEnabled: () => i.isHighRateEnabled,
                loggingOff: () => i.loggingOff,
                loggingOn: () => i.loggingOn,
                serializeLogHistoryEntry: () => i.serializeLogHistoryEntry,
                setLogLevel: () => i.setLogLevel
            });
            var i = n(692558)
        },
        776456: (e, t, n) => {
            var i;
            ! function(e) {
                e.Monthly = "m", e.ThreeMonths = "3m", e.OneYear = "y", e.TwoYears = "2y"
            }(i || (i = {}))
        },
        986830: (e, t, n) => {
            function i(e, t) {
                const n = t || window.locale || "en";
                let i = e[n] ? e[n] : e.en;
                return i = "tradingview.com" === i ? "www.tradingview.com" : i, i ? document.location.protocol + "//" + i : ""
            }
            n.d(t, {
                determineBaseUrl: () => i
            })
        },
        545437: (e, t, n) => {
            n.d(t, {
                showTooManyStudiesNotice: () => r
            });
            var i = n(444372),
                _ = n(779923);

            function r(e) {
                (0, _.showWarning)({
                    title: i.t(null, void 0, n(966719)),
                    text: i.t(null, {
                        replace: {
                            number: `${e}`
                        }
                    }, n(586146))
                })
            }
        },
        549358: (e, t, n) => {
            n.d(t, {
                getProductForTrial: () => r,
                isTrialProduct: () => _
            });
            n(466281), n(444372), n(776456);
            const i = "_trial";

            function _(e) {
                return new RegExp("_trial$").test(e)
            }

            function r(e) {
                return e.split(i)[0]
            }
        },
        955273: (e, t, n) => {
            function i() {
                let e, t;
                return {
                    promise: new Promise(((n, i) => {
                        e = n, t = i
                    })),
                    reject: t,
                    resolve: e
                }
            }
            n.d(t, {
                createDeferredPromise: () => i
            })
        },
        523863: (e, t, n) => {
            function i(e) {
                return e.reduce((function(e, t, n) {
                    return ~e.indexOf(t) || e.push(t), e
                }), [])
            }
            n.r(t), n.d(t, {
                uniq: () => i
            })
        },
        924225: (e, t, n) => {
            function i(e) {
                const t = new URL(e, document.baseURI);
                return r(t) && _(t)
            }
            n.d(t, {
                isInternalHost: () => a,
                isSafeUrl: () => i
            });
            const _ = e => !e.username,
                r = e => "http:" === e.protocol || "https:" === e.protocol;

            function a(e, t = window.location.hostname) {
                const n = "." === t.slice(-1) ? 3 : 2,
                    i = t.toLowerCase().split(".").slice(-n),
                    _ = e.toLowerCase().split(".").slice(-i.length);
                return i.join(".") === _.join(".")
            }
        },
        705526: (e, t, n) => {
            n.d(t, {
                addUtmToUrl: () => _
            });
            var i = n(248213);

            function _(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const n = (0, i.buildUtmQueryString)(t);
                if ("" === n) return e;
                const _ = e.indexOf("?"),
                    r = e.indexOf("#"),
                    a = -1 !== r;
                if (-1 !== _ && (!a || _ < r)) {
                    return `${e.slice(0,_)}?${a?e.slice(_+1,r):e.slice(_+1)}&${n}${a?e.slice(r):""}`
                }
                if (a) {
                    return `${e.slice(0,r)}?${n}${e.slice(r)}`
                }
                return `${e}?${n}`
            }
        }
    }
]);