function n(t) {
    return o(t.getBoundingClientRect())
}

function o(t) {
    const e = window.innerHeight || document.documentElement.clientHeight,
        i = window.innerWidth || document.documentElement.clientWidth;
    return (t.top > 0 && t.top < e || t.bottom > 0 && t.bottom < e) && (t.left > 0 && t.left < i || t.right > 0 && t.right < i)
}
export {
    o as a, n as i
};