"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [59267], {
        91679: (e, _) => {
            _.WatchedValue = void 0;
            var t = function() {
                function e(e, _) {
                    void 0 === _ && (_ = {}), this._listeners = [], void 0 !== e && (this._value = e), this._onDestroy = _.onDestroy
                }
                return e.prototype.destroy = function() {
                    this.unsubscribe(), delete this._value, delete this._readonlyInstance, this._onDestroy && this._onDestroy()
                }, e.prototype.value = function() {
                    return this._value
                }, e.prototype.setValue = function(e, _) {
                    var t = this._value === e || Number.isNaN(this._value) && Number.isNaN(e);
                    !_ && t || (this._value = e, this._notifyListeners())
                }, e.prototype.subscribe = function(e, _) {
                    var t, o, s = this;
                    if (!(null === (t = null == _ ? void 0 : _.signal) || void 0 === t ? void 0 : t.aborted)) {
                        if ((null == _ ? void 0 : _.callWithLast) && void 0 !== this._value) {
                            try {
                                e(this._value)
                            } catch (e) {
                                _.onError && _.onError(e)
                            }
                            if (_.once) return
                        }(null == _ ? void 0 : _.signal) && _.signal.addEventListener("abort", (function() {
                            s.unsubscribe(e)
                        }), {
                            once: !0
                        }), this._listeners.push({
                            callback: e,
                            signal: null == _ ? void 0 : _.signal,
                            once: null !== (o = null == _ ? void 0 : _.once) && void 0 !== o && o,
                            onError: null == _ ? void 0 : _.onError
                        })
                    }
                }, e.prototype.unsubscribe = function(e) {
                    for (var _ = this._listeners.length; _--;) {
                        e !== this._listeners[_].callback && void 0 !== e || this._listeners.splice(_, 1)
                    }
                }, e.prototype.readonly = function() {
                    return this._readonlyInstance || (this._readonlyInstance = new s(this)), this._readonlyInstance
                }, e.prototype.when = function(e, _) {
                    var t, o = this;
                    if (!e) return new Promise((function(e, _) {
                        if (void 0 === o._value) {
                            var t = function(_) {
                                void 0 !== _ && (e(_), o.unsubscribe(t))
                            };
                            o.subscribe(t, {
                                onError: _
                            })
                        } else e(o._value)
                    }));
                    if (!(null === (t = null == _ ? void 0 : _.signal) || void 0 === t ? void 0 : t.aborted))
                        if (void 0 === this._value) {
                            var s = function(_) {
                                void 0 !== _ && (e(_), o.unsubscribe(s))
                            };
                            this.subscribe(s, _)
                        } else try {
                            e(this._value)
                        } catch (e) {
                            (null == _ ? void 0 : _.onError) && _.onError(e)
                        }
                }, e.prototype._notifyListeners = function() {
                    for (var e, _, t = 0, o = this._listeners; t < o.length; t++) {
                        var s = o[t];
                        if ((s.once || (null === (e = s.signal) || void 0 === e ? void 0 : e.aborted)) && this.unsubscribe(s.callback), !(null === (_ = s.signal) || void 0 === _ ? void 0 : _.aborted)) try {
                            s.callback(this._value)
                        } catch (e) {
                            s.onError && s.onError(e)
                        }
                    }
                }, e
            }();
            _.WatchedValue = t;
            var o = "Using destroyed WatchedValueReadonly instance is not allowed",
                s = function() {
                    function e(e) {
                        this._owner = e
                    }
                    return e.prototype.value = function() {
                        var e;
                        if (!this._owner) throw new Error(o);
                        return null === (e = this._owner) || void 0 === e ? void 0 : e.value()
                    }, e.prototype.destroy = function() {
                        delete this._owner
                    }, e.prototype.subscribe = function(e, _) {
                        if (!this._owner) throw new Error(o);
                        this._owner.subscribe(e, _)
                    }, e.prototype.unsubscribe = function(e) {
                        if (!this._owner) throw new Error(o);
                        this._owner.unsubscribe(e)
                    }, e.prototype.when = function(e, _) {
                        if (!this._owner) throw new Error(o);
                        return void 0 !== e ? this._owner.when(e, _) : this._owner.when()
                    }, e
                }()
        },
        764829: (e, _, t) => {
            var o;
            t.d(_, {
                enabled: () => i
            });
            var s = t(111119);
            const r = new Map,
                a = new Map,
                n = new Set;

            function i(e) {
                const _ = r.get(e);
                if (void 0 !== _) return _;
                const t = a.get(e);
                return !!t && t.some(i)
            }

            function l(e, _) {
                r.set(String(e), Boolean(_))
            }

            function d(e) {
                l(e, !0)
            }

            function c(e) {
                l(e, !1)
            }! function() {
                for (const [e, _] of Object.entries(o || (o = t.t(s, 2))))
                    if (n.add(e), "subsets" in _)
                        for (const t of _.subsets) {
                            n.add(t);
                            let _ = a.get(t);
                            void 0 === _ && (_ = [], a.set(t, _)), _.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(c), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(d)
            }()
        },
        111119: e => {
            e.exports = JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_quick_search":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_quick_search","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"right_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend","legend_inplace_edit"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"legend_inplace_edit":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"mobile_app_action_open_details_webview":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{"subsets":["use_last_visible_bar_value_in_legend"]},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"legend_last_day_change":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"watchlist_context_menu":{},"accessible_keyboard_shortcuts":{},"app_phone":{},"app_tablet":{},"mobile_app_hide_replay_toolbar":{},"tv_production":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","right_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","adaptive_trading_sources","chart_style_hilo_last_price"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","right_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","right_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo","request_only_visible_range_on_reset","clear_price_scale_on_error_or_empty_bars","show_symbol_logo_in_legend","show_symbol_logo_for_compare_studies","library_custom_color_themes"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","adaptive_trading_sources","watchlist_context_menu","show_symbol_logo_in_account_manager","watchlist_sections","prefer_quote_short_name","enable_dom_data_for_untradable_symbols","prefer_symbol_name_over_fullname"]}}')
        }
    }
]);