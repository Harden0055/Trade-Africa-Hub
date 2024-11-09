window.Buttonizer = {
    v: "build-v4.9.2",
    c: "https://cdn.buttonizer.io",
    d: !1,
    init: function(t) {
        return "matchAll" in Symbol == !1 ? (this.initLegacy(t), !1) : !this.d && void(this.d = !0, this.s(t))
    },
    initLegacy: function(t) {
        var i, n, e, c;
        this.d = !0, i = window, n = document, e = t, (c = n.createElement("script")).async = !0, c.src = i.Buttonizer.c + "/polyfill/matchAll.min.js", c.onload = function() {
            i.Buttonizer.s(e)
        }, n.head.appendChild(c)
    },
    s: function(t) {
        var i, n, e, c;
        i = window, n = document, e = t, (c = n.createElement("script")).async = !0, c.src = i.Buttonizer.c + "/static/" + window.Buttonizer.v + "/assets/embed.js", c.type = "module", c.onload = function() {
            i.Buttonizer.init(e)
        }, n.head.appendChild(c)
    }
};