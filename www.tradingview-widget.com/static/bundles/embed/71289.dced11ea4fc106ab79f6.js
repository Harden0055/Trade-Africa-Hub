"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [71289], {
        261030: (e, i, a) => {
            a.d(i, {
                CookieSettings: () => t,
                bannerPrivacyPreferenceKey: () => h,
                checkBannerPrivacyPreferenceKey: () => S,
                cookieSettingsChangeEvent: () => _,
                cookieSettingsReady: () => l,
                getCookieSetting: () => P,
                hideBanner: () => T,
                isBannerVisible: () => V,
                notApplicateBanner: () => A,
                setCookieSetting: () => L,
                showBanner: () => x
            });
            var t, n = a(251954),
                o = a(955273),
                s = a(49437),
                r = a(66974),
                c = a(181706);
            ! function(e) {
                e.Analytics = "analytics", e.Advertising = "advertising"
            }(t || (t = {}));
            const _ = "cookie_settings_changed",
                l = (0, o.createDeferredPromise)(),
                g = window.location.hostname.split("."),
                m = (0, r.isLocal)() ? "" : "." + g.slice(1, g.length).join("."),
                d = "cookieBanner",
                h = (0, r.isProd)() ? "cookiePrivacyPreferenceBannerProduction" : "cookiePrivacyPreferenceBannerLocal",
                u = "accepted",
                p = "ignored",
                w = "notApplicable",
                v = "cookiesSettings",
                b = "localCookiesSettings",
                f = "cookiePrivacyPreferenceBanner",
                k = {
                    [t.Analytics]: !1,
                    [t.Advertising]: !1
                };

            function y() {
                return s.TVLocalStorage.removeItem(d)
            }

            function j(e) {
                return s.TVLocalStorage.getItem(e) === u || s.TVLocalStorage.getItem(e) === w
            }

            function S() {
                return e = h, c.get(e) === u || c.get(e) === w;
                var e
            }

            function T() {
                I(u)
            }

            function x() {
                I(p)
            }

            function A() {
                I(w)
            }

            function I(e) {
                c.set(h, e, 3653, "/", m)
            }

            function V() {
                return c.get(h) === p
            }

            function L(e, i) {
                k[e] = i, c.set((0, r.isProd)() ? v : b, JSON.stringify(k), 3653, "/", m), n.emit(_, e, i)
            }

            function P(e) {
                return k[e]
            }

            function F() {
                return s.TVLocalStorage.removeItem(f)
            }! function() {
                const e = c.get((0, r.isProd)() ? v : b),
                    i = s.TVLocalStorage.getItem(f),
                    a = s.TVLocalStorage.getItem(v);
                if (e) {
                    i && a && (F(), s.TVLocalStorage.removeItem(v)), j(d) && y();
                    try {
                        const i = JSON.parse(e);
                        k[t.Analytics] = (null == i ? void 0 : i[t.Analytics]) || !1, k[t.Advertising] = (null == i ? void 0 : i[t.Advertising]) || !1
                    } catch (e) {}
                } else if (j(d) && (L(t.Analytics, !0), L(t.Advertising, !0), T(), y()), i && a) {
                    const e = JSON.parse(a);
                    I(i), L(t.Analytics, null == e ? void 0 : e[t.Analytics]), L(t.Advertising, null == e ? void 0 : e[t.Advertising]), F(), s.TVLocalStorage.removeItem(v)
                }
            }()
        },
        66974: (e, i, a) => {
            a.r(i), a.d(i, {
                environment: () => o,
                getEnvironmentByHost: () => n,
                isDebug: () => c,
                isLocal: () => s,
                isProd: () => r
            });
            const t = new Set(["battle", "staging", "test", "local"]);

            function n(e) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : "local"
            }

            function o() {
                const e = self.environment;
                return function(e) {
                    t.has(e) || console.warn("Invalid environment " + e)
                }(e), e
            }

            function s() {
                return "local" === o()
            }

            function r() {
                return "battle" === o()
            }

            function c() {
                return !r()
            }
        },
        125226: (e, i, a) => {
            var t = a(49437).TVLocalStorage,
                n = a(942634).Delegate,
                o = a(855385);
            a(638456);
            var s = new n;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new n,
                enableFeature: function(e) {
                    t.setItem(this.force_prefix + e, "true"), s.fire(e)
                },
                disableFeature: function(e) {
                    t.setItem(this.force_prefix + e, "false"), s.fire(e)
                },
                resetFeature: function(e) {
                    t.removeItem(this.force_prefix + e), s.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return s
                }
            }, TradingView.isFeatureEnabled = function(e) {
                var i = "featuretoggle_seed";

                function n(e) {
                    try {
                        var a = o(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = t.getItem(i);
                            return null !== e || (e = Math.floor(1e6 * Math.random()), t.setItem(i, e)), e
                        }());
                        return new DataView(a).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function r(i) {
                    return !("local" !== window.environment || ! function(e) {
                        var i = ["address_validation_enabled", "skip_navigation_on_chart", "tick_intervals", "broker_TRADESTATION", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "details_disable_bid_ask", "vat_disabled", "disable_recaptcha_on_signup", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "braintree-3ds-enabled", "order_presets", "trial_increased_monthly_discounts", "checkout-3ds", "checkout-subscriptions", "checkout_show_instead_of_braintree", "razorpay-card-subscriptions", "razorpay-upi-subscriptions", "dlocal-payments", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "broker_id_session", "modular_broker_use_sync_mapper", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "ignore_mobile_apps_distinguish_pro_full_name", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "hide_ecomonic_events", "load_layouts_without_page_reload", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "disable_tradestation_country_block", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "minds_widget_enabled", "self-replacing-advanced-chart-widget", "disable-calendar-advanced-chart-widget", "disable-lse-data-screener-heatmap-widgets", "symphony_notification_badges", "paper_competition_banner", "paper_competition_started_dialog", "paper_subaccount_custom_currency", "disable_pushstream_connections_for_anonymous_users", "use_staging_verifier", "account_verifier_maintenance", "ibkr_use_new_init_session_api", "tradestation_account_data_streaming", "enable_eventsource_pushstream_transport", "enable_eventsource_pushstream_mobile", "performance_test_mode", "ftx_request_server_logger", "ibkr_request_server_logger", "disallow_concurrent_sessions", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "hide_tweet_drawingtool", "editor_new_save", "replay_lower_resolution", "no_buy_hold_backtesting", "editor_new_save_only", "backtesting_report", "enable_new_custom_public_chats", "bottom_panel_track_events", "ibkr_ws_account_summary", "continuous_front_contract_trading", "vertex-tax-included", "enable_traded_context_linking", "order_context_validation_in_instant_mode", "show_data_problems_in_help_center", "chart_storage_hibernation_delay_60min", "chart_storage_hibernation_delay_10min", "chart_storage_hibernation_delay_5min", "force_disable_jsx_menu_items_rendering", "hide_dom", "enable_sign_in_popup_with_evercookie", "start_replay_right_after_point_selection", "switching_raf_toast", "new_order_size_calculator", "order_type_specific_settings_saving", "hide_position_trade_value", "paper_force_connect_pushstream", "use_broker_logos_from_single_source", "alerts-on-watchlists", "alerts-start-christmas", "alerts-use-http-caching", "alerts-remove-offline-pop-ups", "alerts-remove-clear-alerts-button", "alerts-remove-mark-all-read-button", "forexcom_session_v2", "fxcm_server_logger", "minds_comments_enable_for_free_users", "fxcm_trailing_stop_bracket", "mock_tweet_data_for_tests", "replay_result_sharing", "ibkr_ws_server_logger", "options_strategy_analyzer_tab", "options_details_widget", "options_overlay", "options_product_page", "options_exchange_nse", "options_exchange_cme", "options_exchange_cbot", "options_exchange_comex", "options_exchange_nymex", "options_exchange_bse", "options_exchange_opra", "ibkr_subscribe_to_order_updates_first", "rest_logout_on_429", "amp_oauth_authorization", "blueline_oauth_authorization", "dorman_oauth_authorization", "cqg_oauth_authorization", "ironbeam_oauth_authorization", "optimus_oauth_authorization", "stonex_oauth_authorization", "tickmill_oauth_authorization", "ibkr_ws_account_ledger", "force_max_allowed_pulling_intervals", "fxcm_password_authorization_type", "change_password_suggestion_popup", "ibkr_disable_ws_connect_timeout", "oanda_rest_api", "launch-oanda-country-group-1", "launch-oanda-country-group-2", "launch-oanda-country-group-3", "news_enable_streaming", "news_screener_page_client", "news_enable_streaming_hibernation", "news_streaming_hibernation_delay_60min", "news_streaming_hibernation_delay_10min", "news_streaming_hibernation_delay_5min", "cqg-realtime-bandwidth-limit", "cityindex_spreadbetting", "paper_use_new_auth", "stack_trace_clickable", "oauth2_code_flow_provider_server_logger", "turn_off_ai", "enable_binanceapis_base_url", "unsibscribe_competition_for_participants", "enable_first_touch_is_selection", "paper_delay_trading", "static_dom", "binance_disable_live_account_verification", "enable_forced_email_confirmation", "ylg_oauth_authorization", "order_ticket_resizable_drawer_on", "enable_toast_notifications_groupable", "enable_order_moving_by_price_line", "enable_anchor_for_traded_objects", "renew_token_preemption_30", "renew_token_preemption_60", "renew_token_preemption_120", "do_not_open_ot_from_plus_button", "rest_use_async_mapper", "mockbroker_server_logging", "oanda_rest_server_logging", "broker_awards_vote_2024", "update_availability_for_std", "disable_update_availability_status"],
                            a = "[A-Z]+[a-zA-Z0-9_]+",
                            t = new RegExp(`broker_${a}_dev`, "g"),
                            n = new RegExp(`hide_${a}_on_ios`, "g"),
                            o = new RegExp(`hide_${a}_on_android`, "g"),
                            s = new RegExp(`hide_${a}_on_mobile_web`, "g");
                        return -1 === i.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === t.test(e) && !1 === n.test(e) && !1 === o.test(e) && !1 === s.test(e)
                    }(i)) || (!e[i] || -1 !== e[i]) && (!!("true" === t.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + i]) || !("false" === t.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + i]) && (!!e[i] && (1 === e[i] || n(i) <= e[i])))
                }
                return TradingView.onWidget() || Promise.all([a.e(8592), a.e(34604)]).then(a.bind(a, 8592)).then((i => {
                    i.pushStreamMultiplexer.on("featuretoggle", (function(i) {
                        var a = r(i.name);
                        e[i.name] = i.state, a !== r(i.name) && s.fire(i.name)
                    }))
                })), r
            }(window.featureToggleState || {}), i.FeatureToggle = TradingView.FeatureToggle, i.isFeatureEnabled = TradingView.isFeatureEnabled, i.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        49437: (e, i, a) => {
            const {
                getLogger: t
            } = a(338619), n = t("TVLocalStorage");
            var o = function() {
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
            o.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        i = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const a = this.key(e);
                        i.push({
                            key: a,
                            length: String(this.getItem(a)).length
                        })
                    }
                    i.sort(((e, i) => i.length - e.length));
                    const a = i.slice(0, e);
                    i.sort(((e, i) => i.key.length - e.key.length));
                    const t = i.slice(0, e);
                    n.logNormal(`Total amount of keys in Local Storage: ${this.length}`), n.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(a)}`), n.logNormal(`Top ${e} longest key names: ${JSON.stringify(t)}`);
                    try {
                        navigator.storage.estimate().then((e => {
                            n.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                        }))
                    } catch (e) {}
                }
            }, o.prototype.length = 0, o.prototype.isAvailable = !1, o.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, o.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, i = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && i++;
                    this.length = i
                }
            }, o.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, o.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, o.prototype.setItem = function(e, i) {
                this.isAvailable ? this.localStorage.setItem(e, i) : this.localStorage[e] = i, this._updateLength()
            }, o.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, o.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            }, window.TVLocalStorage = new o, e.exports.TVLocalStorage = window.TVLocalStorage
        },
        188526: (e, i, a) => {
            a.d(i, {
                getSettings: () => d
            });
            var t = a(251954),
                n = a(573034),
                o = a(638456),
                s = a(314802),
                r = a(261030),
                c = a(125226);
            const _ = window.initData.snowplowSettings;
            let l, g = "web",
                m = "";

            function d() {
                if (l) return l
            }(0, o.isDesktopApp)() && (g = "pc", m = "_desktop"), (0, s.isOnMobileAppPage)("old") ? (g = "mob", m = "_ios") : (0, s.isOnMobileAppPage)("new") && (g = "mob", m = "_android"), _ && _.params && _.enabled && (l = {
                collectorId: _.collectorId,
                url: _.url,
                params: {
                    appId: _.params.appId + m,
                    platform: g,
                    discoverRootDomain: !0,
                    contexts: {
                        webPage: !0
                    },
                    eventMethod: "get",
                    maxLocalStorageQueueSize: 30,
                    anonymousTracking: !(0, c.isFeatureEnabled)("snowplow_settings_override") && !(0, r.getCookieSetting)(r.CookieSettings.Analytics) && {
                        withSessionTracking: !0
                    },
                    sessionCookieTimeout: (0, r.getCookieSetting)(r.CookieSettings.Analytics) ? 1800 : 7776e3
                }
            }), t.subscribe(r.cookieSettingsChangeEvent, ((e, i) => {
                (0, c.isFeatureEnabled)("snowplow_settings_override") || e === r.CookieSettings.Analytics && (i ? (0, n.disableAnonymousTracking)() : (0, n.enableAnonymousTracking)({
                    options: {
                        withSessionTracking: !0
                    }
                }))
            }), null)
        },
        54845: (e, i, a) => {
            a.d(i, {
                SnowplowTrackerBase: () => o
            });
            var t = a(638456),
                n = a(573034);
            class o {
                constructor(e, i) {
                    (0, n.newTracker)(e.collectorId, e.url, e.params), this._schemes = i, this._collectorId = e.collectorId, this._setDiscardBrace(!0)
                }
                trackPageView() {
                    (0, n.trackPageView)()
                }
                setUserId(e) {
                    const i = !e || (0, t.isSymphonyEmbed)() ? null : `${e}`;
                    (0, n.setUserId)(i)
                }
                _setDiscardBrace(e) {
                    (0, n.discardBrace)(e)
                }
                _startActivityWatcher(e) {
                    let i = 0;
                    return (0, n.enableActivityTrackingCallback)({
                        minimumVisitLength: e.minimumVisitLength,
                        heartbeatDelay: e.heartbeatDelay,
                        callback: () => {
                            i++
                        }
                    }), {
                        disableTracking: n.disableActivityTracking,
                        flushTrackingResult: () => {
                            const a = i * e.heartbeatDelay;
                            return i = 0, a
                        }
                    }
                }
                _trackSelfDescribingEvent(e, i) {
                    const a = this._schemes[e];
                    if (!a) throw new Error("SelfDescribingEvent must have a schema");
                    const t = {
                        event: {
                            data: i,
                            schema: a.schema
                        }
                    };
                    (0, n.trackSelfDescribingEvent)(t)
                }
            }
        },
        955273: (e, i, a) => {
            function t() {
                let e, i;
                return {
                    promise: new Promise(((a, t) => {
                        e = a, i = t
                    })),
                    reject: i,
                    resolve: e
                }
            }
            a.d(i, {
                createDeferredPromise: () => t
            })
        },
        347915: e => {
            e.exports = JSON.parse('{"permission_dialogs":{"schema":"iglu:com.tradingview/permission_dialogs/jsonschema/1-0-0"},"studies_analytics":{"schema":"iglu:com.tradingview/studies_analytics_v2/jsonschema/1-0-0"},"drawings_analytics":{"schema":"iglu:com.tradingview/drawings_analytics/jsonschema/1-0-0"},"bar_replay_analytics":{"schema":"iglu:com.tradingview/bar_replay_analytics/jsonschema/1-0-0"},"chart_api_drawing_creation":{"schema":"iglu:com.tradingview/chart_api_drawing_creation/jsonschema/1-0-0"},"chart_symbols":{"schema":"iglu:com.tradingview/chart_symbols/jsonschema/1-0-0"},"chart_styles":{"schema":"iglu:com.tradingview/chart_styles/jsonschema/1-0-0"},"dino_dialog":{"schema":"iglu:com.tradingview/dino_dialog/jsonschema/1-0-0"},"solutions_watch":{"schema":"iglu:com.tradingview/solutions_watch/jsonschema/1-0-3"},"solutions_send_ticket":{"schema":"iglu:com.tradingview/solutions_send_ticket/jsonschema/1-0-0"},"solutions_nodes_watch":{"schema":"iglu:com.tradingview/solutions_nodes_watch/jsonschema/1-0-0"},"solutions_skip":{"schema":"iglu:com.tradingview/solutions_skip/jsonschema/1-0-0"},"solutions_reactions":{"schema":"iglu:com.tradingview/solutions_reactions/jsonschema/1-0-0"},"user_signup":{"schema":"iglu:com.tradingview/user_signup/jsonschema/1-0-1"},"trials":{"schema":"iglu:com.tradingview/trials/jsonschema/1-0-2"},"refund_transactions":{"schema":"iglu:com.tradingview/refund_transactions/jsonschema/1-0-1"},"billing":{"schema":"iglu:com.tradingview/billing/jsonschema/1-0-1"},"subscription_renewal":{"schema":"iglu:com.tradingview/subscription_renewal/jsonschema/1-0-1"},"subscription_removal":{"schema":"iglu:com.tradingview/subscription_removal/jsonschema/1-0-0"},"chargeback":{"schema":"iglu:com.tradingview/chargeback/jsonschema/1-0-0"},"news_clicks":{"schema":"iglu:com.tradingview/news_clicks/jsonschema/1-0-0"},"news_events":{"schema":"iglu:com.tradingview/news_events/jsonschema/1-0-0"},"gopro_visits":{"schema":"iglu:com.tradingview/gopro_visits/jsonschema/1-0-0"},"logins":{"schema":"iglu:com.tradingview/logins/jsonschema/1-0-1"},"referral_signup":{"schema":"iglu:com.tradingview/referral_signup/jsonschema/1-0-0"},"referral_income":{"schema":"iglu:com.tradingview/referral_income/jsonschema/1-0-0"},"referral_spending":{"schema":"iglu:com.tradingview/referral_spending/jsonschema/1-0-0"},"referral_ref_link":{"schema":"iglu:com.tradingview/referral_ref_link/jsonschema/1-0-0"},"referral_visits":{"schema":"iglu:com.tradingview/referral_visits/jsonschema/1-0-0"},"follow":{"schema":"iglu:com.tradingview/follow/jsonschema/1-0-0"},"full_featured_chart_button":{"schema":"iglu:com.tradingview/full_featured_chart_button/jsonschema/1-0-0"},"publish_ideas":{"schema":"iglu:com.tradingview/publish_ideas/jsonschema/1-0-0"},"idea_update_created":{"schema":"iglu:com.tradingview/idea_update_created/jsonschema/1-0-0"},"idea_posting_comments":{"schema":"iglu:com.tradingview/idea_posting_comments/jsonschema/1-0-0"},"publish_scripts":{"schema":"iglu:com.tradingview/publish_scripts/jsonschema/1-0-0"},"idea_likes":{"schema":"iglu:com.tradingview/idea_likes/jsonschema/1-0-0"},"trading_broker_connection_status":{"schema":"iglu:com.tradingview/trading_broker_connection_status/jsonschema/1-0-1"},"trading_order_status":{"schema":"iglu:com.tradingview/trading_order_status/jsonschema/1-0-4"},"trading_order_widget":{"schema":"iglu:com.tradingview/trading_order_widget/jsonschema/1-0-4"},"switch_year_to_month_after_fail":{"schema":"iglu:com.tradingview/switch_year_to_month_after_fail/jsonschema/1-0-0"},"switching_yearly_to_monthly":{"schema":"iglu:com.tradingview/switching_yearly_to_monthly/jsonschema/1-0-0"},"phone_verification_dialog":{"schema":"iglu:com.tradingview/phone_verification_dialog/jsonschema/1-0-0"},"copy_reserve_codes":{"schema":"iglu:com.tradingview/copy_reserve_codes/jsonschema/1-0-0"},"tv_coins_dialog_watch":{"schema":"iglu:com.tradingview/tv_coins_dialog_watch/jsonschema/1-0-0"},"set_script_permission":{"schema":"iglu:com.tradingview/set_script_permission/jsonschema/1-0-0"},"remove_script_permission":{"schema":"iglu:com.tradingview/remove_script_permission/jsonschema/1-0-0"},"change_pro_plan":{"schema":"iglu:com.tradingview/change_pro_plan/jsonschema/1-0-0"},"unsubscribe_feedback":{"schema":"iglu:com.tradingview/unsubscribe_feedback/jsonschema/1-0-0"},"unsubscribe_dialog":{"schema":"iglu:com.tradingview/unsubscribe_dialog/jsonschema/1-0-0"},"fail_on_duplicate_bt_payment_method":{"schema":"iglu:com.tradingview/fail_on_duplicate_bt_payment_method/jsonschema/1-0-0"},"trial_block_event":{"schema":"iglu:com.tradingview/trial_block_event/jsonschema/1-0-0"},"chat":{"schema":"iglu:com.tradingview/chat/jsonschema/1-0-0"},"broker_brandig_banner":{"schema":"iglu:com.tradingview/broker_brandig_banner/jsonschema/1-0-0"},"broker_profile_links_click":{"schema":"iglu:com.tradingview/broker_profile_links_click/jsonschema/1-0-0"},"streams_actions":{"schema":"iglu:com.tradingview/streams_actions/jsonschema/1-0-0"},"streams_settings_created":{"schema":"iglu:com.tradingview/streams_settings_created/jsonschema/1-0-0"},"streams_viewing_duration":{"schema":"iglu:com.tradingview/streams_viewing_duration/jsonschema/1-0-0"},"broker_open_account":{"schema":"iglu:com.tradingview/broker_open_account/jsonschema/1-0-3"},"financials_dialog":{"schema":"iglu:com.tradingview/financials_dialog/jsonschema/1-0-0"},"payment_order_dialog_initial":{"schema":"iglu:com.tradingview/payment_order_dialog_initial/jsonschema/1-0-0"},"payment_order_dialog_changes":{"schema":"iglu:com.tradingview/payment_order_dialog_changes/jsonschema/1-0-0"},"gopro_cards_clicks":{"schema":"iglu:com.tradingview/gopro_cards_clicks/jsonschema/1-0-0"},"search_toolbar":{"schema":"iglu:com.tradingview/search_toolbar/jsonschema/1-0-1"},"change_symbol":{"schema":"iglu:com.tradingview/change_symbol/jsonschema/1-0-0"},"burger_menu_click":{"schema":"iglu:com.tradingview/burger_menu_click/jsonschema/1-0-0"},"app_banner":{"schema":"iglu:com.tradingview/app_banner/jsonschema/1-0-0"},"app_link":{"schema":"iglu:com.tradingview/app_link/jsonschema/1-0-0"},"screener_high_level":{"schema":"iglu:com.tradingview/screener_high_level/jsonschema/1-0-0"},"screener_new_clicks":{"schema":"iglu:com.tradingview/screener_new_clicks/jsonschema/1-0-0"},"widget_tv_link_click":{"schema":"iglu:com.tradingview/widget_tv_link_click/jsonschema/1-0-0"},"widgets_without_websocket":{"schema":"iglu:com.tradingview/widgets_without_websocket/jsonschema/1-0-0"},"widget_load_meta_info":{"schema":"iglu:com.tradingview/widget_load_meta_info/jsonschema/1-0-0"},"page_unload":{"schema":"iglu:com.tradingview/page_unload/jsonschema/1-0-0"},"idea_events":{"schema":"iglu:com.tradingview/idea_events/jsonschema/1-0-0"},"idea_rec_feed":{"schema":"iglu:com.tradingview/web_test/jsonschema/1-0-0"},"market_heatmap_events":{"schema":"iglu:com.tradingview/market_heatmap_events/jsonschema/1-0-0"},"toast_dialog":{"schema":"iglu:com.tradingview/toast_dialog/jsonschema/1-0-0"},"ad_dialog":{"schema":"iglu:com.tradingview/ad_dialog/jsonschema/1-0-0"},"toolbar_button_click":{"schema":"iglu:com.tradingview/toolbar_button_click/jsonschema/1-0-0"},"sparks":{"schema":"iglu:com.tradingview/sparks/jsonschema/1-0-0"},"longer_billing_cycle_offer":{"schema":"iglu:com.tradingview/longer_billing_cycle_offer/jsonschema/1-0-0"},"market_data_solution":{"schema":"iglu:com.tradingview/market_data_solution/jsonschema/1-0-0"},"pine_editor_events":{"schema":"iglu:com.tradingview/pine_editor_events/jsonschema/1-0-0"},"backtesting_events":{"schema":"iglu:com.tradingview/backtesting_events/jsonschema/1-0-0"},"three_d_secure":{"schema":"iglu:com.tradingview/three_d_secure/jsonschema/1-0-0"},"careers_link_click":{"schema":"iglu:com.tradingview/careers_link_click/jsonschema/1-0-0"},"featured_placement":{"schema":"iglu:com.tradingview/featured_placement/jsonschema/1-0-1"},"toolbar_indicators":{"schema":"iglu:com.tradingview/toolbar_indicators/jsonschema/1-0-1"},"ui_events":{"schema":"iglu:com.tradingview/ui_events/jsonschema/1-0-0"},"mind_events":{"schema":"iglu:com.tradingview/mind_events/jsonschema/1-0-0"},"signup_popup_dialog":{"schema":"iglu:com.tradingview/signup_popup_dialog/jsonschema/1-0-0"},"solutions_search_events":{"schema":"iglu:com.tradingview/help_desk/jsonschema/1-0-0"},"trading_general_events":{"schema":"iglu:com.tradingview/trading_general_events/jsonschema/1-0-1"},"whats_new_event":{"schema":"iglu:com.tradingview/whats_new/jsonschema/1-0-0"},"get_widget_button":{"schema":"iglu:com.tradingview/get_widget_button/jsonschema/1-0-0"},"device_check_decline":{"schema":"iglu:com.tradingview/device_check_decline/jsonschema/1-0-0"},"run_or_signin_with_feature":{"schema":"iglu:com.tradingview/run_or_signin_with_feature/jsonschema/1-0-0"},"user_declaration_event":{"schema":"iglu:com.tradingview/user_declaration_event/jsonschema/1-0-0"},"partial_refund_offer_event":{"schema":"iglu:com.tradingview/partial_refund_offer_event/jsonschema/1-0-0"},"paper_competition_event":{"schema":"iglu:com.tradingview/paper_competition_event/jsonschema/1-0-2"},"language_selector":{"schema":"iglu:com.tradingview/language_selector/jsonschema/1-0-0"},"promo_banner_event":{"schema":"iglu:com.tradingview/promo_banner/jsonschema/1-0-3"},"ai_news_summary":{"schema":"iglu:com.tradingview/ai_news_summary/jsonschema/1-0-0"},"alerts_creation":{"schema":"iglu:com.tradingview/alerts_creation/jsonschema/1-0-0"},"login_required":{"schema":"iglu:com.tradingview/login_required/jsonschema/1-0-0"},"assistant_chat_action":{"schema":"iglu:com.tradingview/assistant_chat_action/jsonschema/1-0-0"},"options_event":{"schema":"iglu:com.tradingview/options_event/jsonschema/1-0-0"}}')
        }
    }
]);