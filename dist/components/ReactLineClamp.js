import { jsxs as W, jsx as b } from "react/jsx-runtime";
import t from "react";
const v = 500, C = {
  useLineClamp(l, s, h, e, o, m) {
    const [n, g] = t.useState(!0), [r, p] = t.useState(null), [a, x] = t.useState(null), [f, d] = t.useState(null), [c, i] = t.useState(!0), [H, u] = t.useState(!1), k = t.useCallback(() => g(!n), [n]);
    t.useEffect(() => {
      s && h && !r && p(
        !!(s.offsetHeight && s.scrollHeight && s.offsetHeight < s.scrollHeight)
      );
    }, [s, h, r]), t.useEffect(() => {
      l && !a && setTimeout(() => {
        l.current && (x(l.current.offsetHeight), d(l.current.offsetHeight));
      }, 0);
    }, [a, l]);
    const B = t.useCallback(() => {
      i(!1), u(!0), setTimeout(() => {
        s && d(s.offsetHeight);
      }, 0), setTimeout(() => u(!1), o);
    }, [s, i, o]), N = t.useCallback(() => {
      u(!0), d(a), setTimeout(() => {
        i(!0), u(!1);
      }, o);
    }, [a, i, o]), S = t.useCallback(() => {
      k(), c ? B() : N();
    }, [c, N, B, k]), R = t.useMemo(
      () => ({
        WebkitLineClamp: c ? e : "none",
        maxHeight: `${f}px`,
        transition: `max-height ${o}ms ${m}`,
        display: "-webkit-box",
        position: "relative",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical"
      }),
      [c, e, f, o, m]
    );
    return {
      collapsedButtonNeeded: r,
      handleButtonClick: S,
      collapsed: n,
      contentWrapperStyle: R,
      animating: H
    };
  }
}, T = (l) => {
  const {
    content: s,
    showMoreButtonContent: h,
    classes: e,
    showLessButtonContent: o = "Show Less",
    hideExpandedButton: m = !1,
    duration: n = v,
    lineClamp: g = 4,
    easing: r = "ease-in-out"
  } = l, p = t.useRef(null), a = t.useRef(null), { handleButtonClick: x, collapsed: f, collapsedButtonNeeded: d, contentWrapperStyle: c, animating: i } = C.useLineClamp(p, a.current, s, g, n, r), H = f ? h : o, u = !(!d || m && !f);
  return /* @__PURE__ */ W("div", { className: e == null ? void 0 : e.blockWrapper, children: [
    /* @__PURE__ */ b("div", { ref: p, className: e == null ? void 0 : e.contentWrapper, style: c, children: /* @__PURE__ */ b("div", { ref: a, className: e == null ? void 0 : e.content, children: s }) }),
    u && /* @__PURE__ */ b("button", { disabled: i, onClick: x, className: e == null ? void 0 : e.button, children: H })
  ] });
};
export {
  T as ReactLineClamp
};
