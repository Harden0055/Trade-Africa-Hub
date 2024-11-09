import {
    A as h
} from "./template_v9f96P.js";
import {
    a as c,
    b as u
} from "./buttonizer_CwlhqX.js";
import {
    i as w
} from "./iselementinviewport_Dt4zcw.js";
class p extends h {
    execute(d = {}) {
        var l;
        if (!this.data.selected_widget || typeof window.Buttonizer.container.groups[this.groupId] > "u") return;
        const t = window.Buttonizer.container.groups[this.groupId].buttons["menu-button"],
            i = t.element.querySelector("[class*=buttonizer-icon]"),
            s = (e = !0) => {
                e && window.Buttonizer.toggleWidget(this.data.selected_widget), i && (i.classList = c(t.stylesheet.classes.icon, t.data.icon)), t.element.removeEventListener("click", s)
            };
        i && (i.classList = c(t.stylesheet.classes.icon, "fas fa-times-circle"), t.element.addEventListener("click", s));
        const a = ({
            widget_id: e
        }) => {
            e === this.data.selected_widget && (s(!1), u().removeHook("buttonizer_widget_closed", a))
        };
        u().addHook("buttonizer_widget_closed", a, !1);
        const g = this.data.is_menu_desktop || this.data.is_menu_mobile;
        let o = (l = this.data.widget_opening_position) != null ? l : "top-end";
        if (o === "auto") {
            let e = this.data.vertical[0],
                n = this.data.horizontal[0];
            e === "bottom" && n === "left" ? o = "top-start" : e === "bottom" && this.data.horizontal[0] === "right" ? o = "top-end" : e === "top" && n === "left" ? o = "bottom-start" : e === "top" && n === "right" && (o = "bottom-end")
        }
        let m = g && t.element && w(t.element) ? t.element : this.button;
        const r = {
            element: o !== "center" ? m : void 0,
            position: o,
            groupId: this.groupId,
            buttonId: this.data.id,
            ...d
        };
        d.showOnly ? window.Buttonizer.showWidget(this.data.selected_widget, r) : window.Buttonizer.toggleWidget(this.data.selected_widget, r)
    }
}
export {
    p as
    default
};