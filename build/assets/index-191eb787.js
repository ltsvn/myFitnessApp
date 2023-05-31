(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {childList: !0, subtree: !0});

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();
var V0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Bd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var So = {}, R0 = {
    get exports() {
        return So
    }, set exports(e) {
        So = e
    }
}, us = {}, O = {}, L0 = {
    get exports() {
        return O
    }, set exports(e) {
        O = e
    }
}, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti = Symbol.for("react.element"), M0 = Symbol.for("react.portal"), D0 = Symbol.for("react.fragment"),
    N0 = Symbol.for("react.strict_mode"), _0 = Symbol.for("react.profiler"), O0 = Symbol.for("react.provider"),
    F0 = Symbol.for("react.context"), I0 = Symbol.for("react.forward_ref"), z0 = Symbol.for("react.suspense"),
    B0 = Symbol.for("react.memo"), U0 = Symbol.for("react.lazy"), vc = Symbol.iterator;

function j0(e) {
    return e === null || typeof e != "object" ? null : (e = vc && e[vc] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Ud = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, jd = Object.assign, Hd = {};

function kr(e, t, n) {
    this.props = e, this.context = t, this.refs = Hd, this.updater = n || Ud
}

kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
kr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Wd() {
}

Wd.prototype = kr.prototype;

function Ua(e, t, n) {
    this.props = e, this.context = t, this.refs = Hd, this.updater = n || Ud
}

var ja = Ua.prototype = new Wd;
ja.constructor = Ua;
jd(ja, kr.prototype);
ja.isPureReactComponent = !0;
var yc = Array.isArray, Qd = Object.prototype.hasOwnProperty, Ha = {current: null},
    Yd = {key: !0, ref: !0, __self: !0, __source: !0};

function Gd(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Qd.call(t, r) && !Yd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n; else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {$$typeof: Ti, type: e, key: o, ref: s, props: i, _owner: Ha.current}
}

function H0(e, t) {
    return {$$typeof: Ti, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function Wa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ti
}

function W0(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var wc = /\/+/g;

function Fs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? W0("" + e.key) : t.toString(36)
}

function ro(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (o) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case Ti:
                case M0:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + Fs(s, 0) : r, yc(i) ? (n = "", e != null && (n = e.replace(wc, "$&/") + "/"), ro(i, t, n, "", function (u) {
        return u
    })) : i != null && (Wa(i) && (i = H0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(wc, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", yc(e)) for (var l = 0; l < e.length; l++) {
        o = e[l];
        var a = r + Fs(o, l);
        s += ro(o, t, n, a, i)
    } else if (a = j0(e), typeof a == "function") for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + Fs(o, l++), s += ro(o, t, n, a, i); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Fi(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return ro(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }), r
}

function Q0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Fe = {current: null}, io = {transition: null},
    Y0 = {ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: io, ReactCurrentOwner: Ha};
b.Children = {
    map: Fi, forEach: function (e, t, n) {
        Fi(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Fi(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Fi(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Wa(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = kr;
b.Fragment = D0;
b.Profiler = _0;
b.PureComponent = Ua;
b.StrictMode = N0;
b.Suspense = z0;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y0;
b.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = jd({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = Ha.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Qd.call(t, a) && !Yd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n; else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {$$typeof: Ti, type: e.type, key: i, ref: o, props: r, _owner: s}
};
b.createContext = function (e) {
    return e = {
        $$typeof: F0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: O0, _context: e}, e.Consumer = e
};
b.createElement = Gd;
b.createFactory = function (e) {
    var t = Gd.bind(null, e);
    return t.type = e, t
};
b.createRef = function () {
    return {current: null}
};
b.forwardRef = function (e) {
    return {$$typeof: I0, render: e}
};
b.isValidElement = Wa;
b.lazy = function (e) {
    return {$$typeof: U0, _payload: {_status: -1, _result: e}, _init: Q0}
};
b.memo = function (e, t) {
    return {$$typeof: B0, type: e, compare: t === void 0 ? null : t}
};
b.startTransition = function (e) {
    var t = io.transition;
    io.transition = {};
    try {
        e()
    } finally {
        io.transition = t
    }
};
b.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
b.useCallback = function (e, t) {
    return Fe.current.useCallback(e, t)
};
b.useContext = function (e) {
    return Fe.current.useContext(e)
};
b.useDebugValue = function () {
};
b.useDeferredValue = function (e) {
    return Fe.current.useDeferredValue(e)
};
b.useEffect = function (e, t) {
    return Fe.current.useEffect(e, t)
};
b.useId = function () {
    return Fe.current.useId()
};
b.useImperativeHandle = function (e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
};
b.useInsertionEffect = function (e, t) {
    return Fe.current.useInsertionEffect(e, t)
};
b.useLayoutEffect = function (e, t) {
    return Fe.current.useLayoutEffect(e, t)
};
b.useMemo = function (e, t) {
    return Fe.current.useMemo(e, t)
};
b.useReducer = function (e, t, n) {
    return Fe.current.useReducer(e, t, n)
};
b.useRef = function (e) {
    return Fe.current.useRef(e)
};
b.useState = function (e) {
    return Fe.current.useState(e)
};
b.useSyncExternalStore = function (e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
};
b.useTransition = function () {
    return Fe.current.useTransition()
};
b.version = "18.2.0";
(function (e) {
    e.exports = b
})(L0);
const pt = Bd(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0 = O, X0 = Symbol.for("react.element"), b0 = Symbol.for("react.fragment"),
    K0 = Object.prototype.hasOwnProperty, $0 = G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Z0 = {key: !0, ref: !0, __self: !0, __source: !0};

function Xd(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) K0.call(t, r) && !Z0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {$$typeof: X0, type: e, key: o, ref: s, props: i, _owner: $0.current}
}

us.Fragment = b0;
us.jsx = Xd;
us.jsxs = Xd;
(function (e) {
    e.exports = us
})(R0);
const T = So.jsx, G = So.jsxs;
var Tl = {}, Pl = {}, q0 = {
    get exports() {
        return Pl
    }, set exports(e) {
        Pl = e
    }
}, Ze = {}, Vl = {}, J0 = {
    get exports() {
        return Vl
    }, set exports(e) {
        Vl = e
    }
}, bd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(N, W) {
        var Q = N.length;
        N.push(W);
        e:for (; 0 < Q;) {
            var re = Q - 1 >>> 1, pe = N[re];
            if (0 < i(pe, W)) N[re] = W, N[Q] = pe, Q = re; else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var W = N[0], Q = N.pop();
        if (Q !== W) {
            N[0] = Q;
            e:for (var re = 0, pe = N.length, zn = pe >>> 1; re < zn;) {
                var Tt = 2 * (re + 1) - 1, Ar = N[Tt], st = Tt + 1, Ut = N[st];
                if (0 > i(Ar, Q)) st < pe && 0 > i(Ut, Ar) ? (N[re] = Ut, N[st] = Q, re = st) : (N[re] = Ar, N[Tt] = Q, re = Tt); else if (st < pe && 0 > i(Ut, Q)) N[re] = Ut, N[st] = Q, re = st; else break e
            }
        }
        return W
    }

    function i(N, W) {
        var Q = N.sortIndex - W.sortIndex;
        return Q !== 0 ? Q : N.id - W.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var s = Date, l = s.now();
        e.unstable_now = function () {
            return s.now() - l
        }
    }
    var a = [], u = [], c = 1, p = null, f = 3, g = !1, v = !1, x = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(N) {
        for (var W = n(u); W !== null;) {
            if (W.callback === null) r(u); else if (W.startTime <= N) r(u), W.sortIndex = W.expirationTime, t(a, W); else break;
            W = n(u)
        }
    }

    function w(N) {
        if (x = !1, m(N), !v) if (n(a) !== null) v = !0, q(C); else {
            var W = n(u);
            W !== null && de(w, W.startTime - N)
        }
    }

    function C(N, W) {
        v = !1, x && (x = !1, h(S), S = -1), g = !0;
        var Q = f;
        try {
            for (m(W), p = n(a); p !== null && (!(p.expirationTime > W) || N && !Y());) {
                var re = p.callback;
                if (typeof re == "function") {
                    p.callback = null, f = p.priorityLevel;
                    var pe = re(p.expirationTime <= W);
                    W = e.unstable_now(), typeof pe == "function" ? p.callback = pe : p === n(a) && r(a), m(W)
                } else r(a);
                p = n(a)
            }
            if (p !== null) var zn = !0; else {
                var Tt = n(u);
                Tt !== null && de(w, Tt.startTime - W), zn = !1
            }
            return zn
        } finally {
            p = null, f = Q, g = !1
        }
    }

    var P = !1, R = null, S = -1, D = 5, M = -1;

    function Y() {
        return !(e.unstable_now() - M < D)
    }

    function j() {
        if (R !== null) {
            var N = e.unstable_now();
            M = N;
            var W = !0;
            try {
                W = R(!0, N)
            } finally {
                W ? B() : (P = !1, R = null)
            }
        } else P = !1
    }

    var B;
    if (typeof d == "function") B = function () {
        d(j)
    }; else if (typeof MessageChannel < "u") {
        var K = new MessageChannel, X = K.port2;
        K.port1.onmessage = j, B = function () {
            X.postMessage(null)
        }
    } else B = function () {
        E(j, 0)
    };

    function q(N) {
        R = N, P || (P = !0, B())
    }

    function de(N, W) {
        S = E(function () {
            N(e.unstable_now())
        }, W)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (N) {
        N.callback = null
    }, e.unstable_continueExecution = function () {
        v || g || (v = !0, q(C))
    }, e.unstable_forceFrameRate = function (N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return f
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, e.unstable_next = function (N) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var W = 3;
                break;
            default:
                W = f
        }
        var Q = f;
        f = W;
        try {
            return N()
        } finally {
            f = Q
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (N, W) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var Q = f;
        f = N;
        try {
            return W()
        } finally {
            f = Q
        }
    }, e.unstable_scheduleCallback = function (N, W, Q) {
        var re = e.unstable_now();
        switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? re + Q : re) : Q = re, N) {
            case 1:
                var pe = -1;
                break;
            case 2:
                pe = 250;
                break;
            case 5:
                pe = 1073741823;
                break;
            case 4:
                pe = 1e4;
                break;
            default:
                pe = 5e3
        }
        return pe = Q + pe, N = {
            id: c++,
            callback: W,
            priorityLevel: N,
            startTime: Q,
            expirationTime: pe,
            sortIndex: -1
        }, Q > re ? (N.sortIndex = Q, t(u, N), n(a) === null && N === n(u) && (x ? (h(S), S = -1) : x = !0, de(w, Q - re))) : (N.sortIndex = pe, t(a, N), v || g || (v = !0, q(C))), N
    }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function (N) {
        var W = f;
        return function () {
            var Q = f;
            f = W;
            try {
                return N.apply(this, arguments)
            } finally {
                f = Q
            }
        }
    }
})(bd);
(function (e) {
    e.exports = bd
})(J0);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd = O, Ke = Vl;

function V(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var $d = new Set, oi = {};

function Nn(e, t) {
    pr(e, t), pr(e + "Capture", t)
}

function pr(e, t) {
    for (oi[e] = t, e = 0; e < t.length; e++) $d.add(t[e])
}

var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Rl = Object.prototype.hasOwnProperty,
    eg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    xc = {}, Sc = {};

function tg(e) {
    return Rl.call(Sc, e) ? !0 : Rl.call(xc, e) ? !1 : eg.test(e) ? Sc[e] = !0 : (xc[e] = !0, !1)
}

function ng(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function rg(e, t, n, r) {
    if (t === null || typeof t > "u" || ng(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ie(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}

var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Pe[e] = new Ie(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Pe[t] = new Ie(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Pe[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Pe[e] = new Ie(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Pe[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Pe[e] = new Ie(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Pe[e] = new Ie(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Pe[e] = new Ie(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Pe[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Qa = /[\-:]([a-z])/g;

function Ya(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Qa, Ya);
    Pe[t] = new Ie(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Qa, Ya);
    Pe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Qa, Ya);
    Pe[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Pe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Pe.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Pe[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ga(e, t, n, r) {
    var i = Pe.hasOwnProperty(t) ? Pe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rg(t, n, i, r) && (n = null), r || i === null ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Bt = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ii = Symbol.for("react.element"),
    Wn = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"),
    Ll = Symbol.for("react.profiler"), Zd = Symbol.for("react.provider"), qd = Symbol.for("react.context"),
    ba = Symbol.for("react.forward_ref"), Ml = Symbol.for("react.suspense"), Dl = Symbol.for("react.suspense_list"),
    Ka = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Jd = Symbol.for("react.offscreen"),
    kc = Symbol.iterator;

function Tr(e) {
    return e === null || typeof e != "object" ? null : (e = kc && e[kc] || e["@@iterator"], typeof e == "function" ? e : null)
}

var ae = Object.assign, Is;

function Ir(e) {
    if (Is === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Is = t && t[1] || ""
    }
    return `
` + Is + e
}

var zs = !1;

function Bs(e, t) {
    if (!e || zs) return "";
    zs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--) if (i[s] !== o[l]) {
                if (s !== 1 || l !== 1) do if (s--, l--, 0 > l || i[s] !== o[l]) {
                    var a = `
` + i[s].replace(" at new ", " at ");
                    return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                } while (1 <= s && 0 <= l);
                break
            }
        }
    } finally {
        zs = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ir(e) : ""
}

function ig(e) {
    switch (e.tag) {
        case 5:
            return Ir(e.type);
        case 16:
            return Ir("Lazy");
        case 13:
            return Ir("Suspense");
        case 19:
            return Ir("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Bs(e.type, !1), e;
        case 11:
            return e = Bs(e.type.render, !1), e;
        case 1:
            return e = Bs(e.type, !0), e;
        default:
            return ""
    }
}

function Nl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Qn:
            return "Fragment";
        case Wn:
            return "Portal";
        case Ll:
            return "Profiler";
        case Xa:
            return "StrictMode";
        case Ml:
            return "Suspense";
        case Dl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case qd:
            return (e.displayName || "Context") + ".Consumer";
        case Zd:
            return (e._context.displayName || "Context") + ".Provider";
        case ba:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ka:
            return t = e.displayName || null, t !== null ? t : Nl(e.type) || "Memo";
        case Qt:
            t = e._payload, e = e._init;
            try {
                return Nl(e(t))
            } catch {
            }
    }
    return null
}

function og(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Nl(t);
        case 8:
            return t === Xa ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function an(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function ep(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function sg(e) {
    var t = ep(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return i.call(this)
            }, set: function (s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function zi(e) {
    e._valueTracker || (e._valueTracker = sg(e))
}

function tp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ep(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ko(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function _l(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Cc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = an(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function np(e, t) {
    t = t.checked, t != null && Ga(e, "checked", t, !1)
}

function Ol(e, t) {
    np(e, t);
    var n = an(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ec(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Fl(e, t, n) {
    (t !== "number" || ko(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var zr = Array.isArray;

function or(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + an(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
    return ae({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function Ac(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(V(92));
            if (zr(n)) {
                if (1 < n.length) throw Error(V(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: an(n)}
}

function rp(e, t) {
    var n = an(t.value), r = an(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Tc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ip(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function zl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ip(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Bi, op = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Bi = Bi || document.createElement("div"), Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function si(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Qr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, lg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
    lg.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Qr[t] = Qr[e]
    })
});

function sp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qr.hasOwnProperty(e) && Qr[e] ? ("" + t).trim() : t + "px"
}

function lp(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = sp(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
    }
}

var ag = ae({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Bl(e, t) {
    if (t) {
        if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(V(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(V(62))
    }
}

function Ul(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var jl = null;

function $a(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Hl = null, sr = null, lr = null;

function Pc(e) {
    if (e = Ri(e)) {
        if (typeof Hl != "function") throw Error(V(280));
        var t = e.stateNode;
        t && (t = hs(t), Hl(e.stateNode, e.type, t))
    }
}

function ap(e) {
    sr ? lr ? lr.push(e) : lr = [e] : sr = e
}

function up() {
    if (sr) {
        var e = sr, t = lr;
        if (lr = sr = null, Pc(e), t) for (e = 0; e < t.length; e++) Pc(t[e])
    }
}

function cp(e, t) {
    return e(t)
}

function fp() {
}

var Us = !1;

function dp(e, t, n) {
    if (Us) return e(t, n);
    Us = !0;
    try {
        return cp(e, t, n)
    } finally {
        Us = !1, (sr !== null || lr !== null) && (fp(), up())
    }
}

function li(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = hs(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(V(231, t, typeof n));
    return n
}

var Wl = !1;
if (Ot) try {
    var Pr = {};
    Object.defineProperty(Pr, "passive", {
        get: function () {
            Wl = !0
        }
    }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr)
} catch {
    Wl = !1
}

function ug(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}

var Yr = !1, Co = null, Eo = !1, Ql = null, cg = {
    onError: function (e) {
        Yr = !0, Co = e
    }
};

function fg(e, t, n, r, i, o, s, l, a) {
    Yr = !1, Co = null, ug.apply(cg, arguments)
}

function dg(e, t, n, r, i, o, s, l, a) {
    if (fg.apply(this, arguments), Yr) {
        if (Yr) {
            var u = Co;
            Yr = !1, Co = null
        } else throw Error(V(198));
        Eo || (Eo = !0, Ql = u)
    }
}

function _n(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function pp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Vc(e) {
    if (_n(e) !== e) throw Error(V(188))
}

function pg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = _n(e), t === null) throw Error(V(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Vc(i), e;
                if (o === r) return Vc(i), t;
                o = o.sibling
            }
            throw Error(V(188))
        }
        if (n.return !== r.return) n = i, r = o; else {
            for (var s = !1, l = i.child; l;) {
                if (l === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (l === r) {
                    s = !0, r = i, n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (l === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(V(189))
            }
        }
        if (n.alternate !== r) throw Error(V(190))
    }
    if (n.tag !== 3) throw Error(V(188));
    return n.stateNode.current === n ? e : t
}

function hp(e) {
    return e = pg(e), e !== null ? mp(e) : null
}

function mp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = mp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var gp = Ke.unstable_scheduleCallback, Rc = Ke.unstable_cancelCallback, hg = Ke.unstable_shouldYield,
    mg = Ke.unstable_requestPaint, me = Ke.unstable_now, gg = Ke.unstable_getCurrentPriorityLevel,
    Za = Ke.unstable_ImmediatePriority, vp = Ke.unstable_UserBlockingPriority, Ao = Ke.unstable_NormalPriority,
    vg = Ke.unstable_LowPriority, yp = Ke.unstable_IdlePriority, cs = null, kt = null;

function yg(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function") try {
        kt.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var ht = Math.clz32 ? Math.clz32 : Sg, wg = Math.log, xg = Math.LN2;

function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wg(e) / xg | 0) | 0
}

var Ui = 64, ji = 4194304;

function Br(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function To(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = Br(l) : (o &= s, o !== 0 && (r = Br(o)))
    } else s = n & ~i, s !== 0 ? r = Br(s) : o !== 0 && (r = Br(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ht(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function kg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Cg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - ht(o), l = 1 << s, a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = kg(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wp() {
    var e = Ui;
    return Ui <<= 1, !(Ui & 4194240) && (Ui = 64), e
}

function js(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Pi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n
}

function Eg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - ht(n), o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function qa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ht(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

var Z = 0;

function xp(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var Sp, Ja, kp, Cp, Ep, Gl = !1, Hi = [], Jt = null, en = null, tn = null, ai = new Map, ui = new Map, Xt = [],
    Ag = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Lc(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Jt = null;
            break;
        case"dragenter":
        case"dragleave":
            en = null;
            break;
        case"mouseover":
        case"mouseout":
            tn = null;
            break;
        case"pointerover":
        case"pointerout":
            ai.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            ui.delete(t.pointerId)
    }
}

function Vr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = Ri(t), t !== null && Ja(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Tg(e, t, n, r, i) {
    switch (t) {
        case"focusin":
            return Jt = Vr(Jt, e, t, n, r, i), !0;
        case"dragenter":
            return en = Vr(en, e, t, n, r, i), !0;
        case"mouseover":
            return tn = Vr(tn, e, t, n, r, i), !0;
        case"pointerover":
            var o = i.pointerId;
            return ai.set(o, Vr(ai.get(o) || null, e, t, n, r, i)), !0;
        case"gotpointercapture":
            return o = i.pointerId, ui.set(o, Vr(ui.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Ap(e) {
    var t = Sn(e.target);
    if (t !== null) {
        var n = _n(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = pp(n), t !== null) {
                    e.blockedOn = t, Ep(e.priority, function () {
                        kp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            jl = r, n.target.dispatchEvent(r), jl = null
        } else return t = Ri(n), t !== null && Ja(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Mc(e, t, n) {
    oo(e) && n.delete(t)
}

function Pg() {
    Gl = !1, Jt !== null && oo(Jt) && (Jt = null), en !== null && oo(en) && (en = null), tn !== null && oo(tn) && (tn = null), ai.forEach(Mc), ui.forEach(Mc)
}

function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gl || (Gl = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Pg)))
}

function ci(e) {
    function t(i) {
        return Rr(i, e)
    }

    if (0 < Hi.length) {
        Rr(Hi[0], e);
        for (var n = 1; n < Hi.length; n++) {
            var r = Hi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Jt !== null && Rr(Jt, e), en !== null && Rr(en, e), tn !== null && Rr(tn, e), ai.forEach(t), ui.forEach(t), n = 0; n < Xt.length; n++) r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null);) Ap(n), n.blockedOn === null && Xt.shift()
}

var ar = Bt.ReactCurrentBatchConfig, Po = !0;

function Vg(e, t, n, r) {
    var i = Z, o = ar.transition;
    ar.transition = null;
    try {
        Z = 1, eu(e, t, n, r)
    } finally {
        Z = i, ar.transition = o
    }
}

function Rg(e, t, n, r) {
    var i = Z, o = ar.transition;
    ar.transition = null;
    try {
        Z = 4, eu(e, t, n, r)
    } finally {
        Z = i, ar.transition = o
    }
}

function eu(e, t, n, r) {
    if (Po) {
        var i = Xl(e, t, n, r);
        if (i === null) Zs(e, t, r, Vo, n), Lc(e, r); else if (Tg(i, e, t, n, r)) r.stopPropagation(); else if (Lc(e, r), t & 4 && -1 < Ag.indexOf(e)) {
            for (; i !== null;) {
                var o = Ri(i);
                if (o !== null && Sp(o), o = Xl(e, t, n, r), o === null && Zs(e, t, r, Vo, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Zs(e, t, r, null, n)
    }
}

var Vo = null;

function Xl(e, t, n, r) {
    if (Vo = null, e = $a(r), e = Sn(e), e !== null) if (t = _n(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = pp(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Vo = e, null
}

function Tp(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (gg()) {
                case Za:
                    return 1;
                case vp:
                    return 4;
                case Ao:
                case vg:
                    return 16;
                case yp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Kt = null, tu = null, so = null;

function Pp() {
    if (so) return so;
    var e, t = tu, n = t.length, r, i = "value" in Kt ? Kt.value : Kt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return so = i.slice(e, 1 < r ? 1 - r : void 0)
}

function lo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Wi() {
    return !0
}

function Dc() {
    return !1
}

function qe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Wi : Dc, this.isPropagationStopped = Dc, this
    }

    return ae(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wi)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wi)
        }, persist: function () {
        }, isPersistent: Wi
    }), t
}

var Cr = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, nu = qe(Cr), Vi = ae({}, Cr, {view: 0, detail: 0}), Lg = qe(Vi), Hs, Ws, Lr, fs = ae({}, Vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ru,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (Hs = e.screenX - Lr.screenX, Ws = e.screenY - Lr.screenY) : Ws = Hs = 0, Lr = e), Hs)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ws
        }
    }), Nc = qe(fs), Mg = ae({}, fs, {dataTransfer: 0}), Dg = qe(Mg), Ng = ae({}, Vi, {relatedTarget: 0}), Qs = qe(Ng),
    _g = ae({}, Cr, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), Og = qe(_g), Fg = ae({}, Cr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), Ig = qe(Fg), zg = ae({}, Cr, {data: 0}), _c = qe(zg), Bg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ug = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, jg = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function Hg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jg[e]) ? !!t[e] : !1
}

function ru() {
    return Hg
}

var Wg = ae({}, Vi, {
    key: function (e) {
        if (e.key) {
            var t = Bg[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ug[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function (e) {
        return e.type === "keypress" ? lo(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), Qg = qe(Wg), Yg = ae({}, fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Oc = qe(Yg), Gg = ae({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru
}), Xg = qe(Gg), bg = ae({}, Cr, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), Kg = qe(bg), $g = ae({}, fs, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), Zg = qe($g), qg = [9, 13, 27, 32], iu = Ot && "CompositionEvent" in window, Gr = null;
Ot && "documentMode" in document && (Gr = document.documentMode);
var Jg = Ot && "TextEvent" in window && !Gr, Vp = Ot && (!iu || Gr && 8 < Gr && 11 >= Gr), Fc = String.fromCharCode(32),
    Ic = !1;

function Rp(e, t) {
    switch (e) {
        case"keyup":
            return qg.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function Lp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var Yn = !1;

function ev(e, t) {
    switch (e) {
        case"compositionend":
            return Lp(t);
        case"keypress":
            return t.which !== 32 ? null : (Ic = !0, Fc);
        case"textInput":
            return e = t.data, e === Fc && Ic ? null : e;
        default:
            return null
    }
}

function tv(e, t) {
    if (Yn) return e === "compositionend" || !iu && Rp(e, t) ? (e = Pp(), so = tu = Kt = null, Yn = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return Vp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var nv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nv[e.type] : t === "textarea"
}

function Mp(e, t, n, r) {
    ap(r), t = Ro(t, "onChange"), 0 < t.length && (n = new nu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Xr = null, fi = null;

function rv(e) {
    Hp(e, 0)
}

function ds(e) {
    var t = bn(e);
    if (tp(t)) return e
}

function iv(e, t) {
    if (e === "change") return t
}

var Dp = !1;
if (Ot) {
    var Ys;
    if (Ot) {
        var Gs = "oninput" in document;
        if (!Gs) {
            var Bc = document.createElement("div");
            Bc.setAttribute("oninput", "return;"), Gs = typeof Bc.oninput == "function"
        }
        Ys = Gs
    } else Ys = !1;
    Dp = Ys && (!document.documentMode || 9 < document.documentMode)
}

function Uc() {
    Xr && (Xr.detachEvent("onpropertychange", Np), fi = Xr = null)
}

function Np(e) {
    if (e.propertyName === "value" && ds(fi)) {
        var t = [];
        Mp(t, fi, e, $a(e)), dp(rv, t)
    }
}

function ov(e, t, n) {
    e === "focusin" ? (Uc(), Xr = t, fi = n, Xr.attachEvent("onpropertychange", Np)) : e === "focusout" && Uc()
}

function sv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ds(fi)
}

function lv(e, t) {
    if (e === "click") return ds(t)
}

function av(e, t) {
    if (e === "input" || e === "change") return ds(t)
}

function uv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var gt = typeof Object.is == "function" ? Object.is : uv;

function di(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Rl.call(t, i) || !gt(e[i], t[i])) return !1
    }
    return !0
}

function jc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Hc(e, t) {
    var n = jc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = jc(n)
    }
}

function _p(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _p(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Op() {
    for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = ko(e.document)
    }
    return t
}

function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function cv(e) {
    var t = Op(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _p(n.ownerDocument.documentElement, n)) {
        if (r !== null && ou(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length, o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Hc(n, o);
                var s = Hc(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var fv = Ot && "documentMode" in document && 11 >= document.documentMode, Gn = null, bl = null, br = null, Kl = !1;

function Wc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Kl || Gn == null || Gn !== ko(r) || (r = Gn, "selectionStart" in r && ou(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), br && di(br, r) || (br = r, r = Ro(bl, "onSelect"), 0 < r.length && (t = new nu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Gn)))
}

function Qi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Xn = {
    animationend: Qi("Animation", "AnimationEnd"),
    animationiteration: Qi("Animation", "AnimationIteration"),
    animationstart: Qi("Animation", "AnimationStart"),
    transitionend: Qi("Transition", "TransitionEnd")
}, Xs = {}, Fp = {};
Ot && (Fp = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);

function ps(e) {
    if (Xs[e]) return Xs[e];
    if (!Xn[e]) return e;
    var t = Xn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fp) return Xs[e] = t[n];
    return e
}

var Ip = ps("animationend"), zp = ps("animationiteration"), Bp = ps("animationstart"), Up = ps("transitionend"),
    jp = new Map,
    Qc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function dn(e, t) {
    jp.set(e, t), Nn(t, [e])
}

for (var bs = 0; bs < Qc.length; bs++) {
    var Ks = Qc[bs], dv = Ks.toLowerCase(), pv = Ks[0].toUpperCase() + Ks.slice(1);
    dn(dv, "on" + pv)
}
dn(Ip, "onAnimationEnd");
dn(zp, "onAnimationIteration");
dn(Bp, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Up, "onTransitionEnd");
pr("onMouseEnter", ["mouseout", "mouseover"]);
pr("onMouseLeave", ["mouseout", "mouseover"]);
pr("onPointerEnter", ["pointerout", "pointerover"]);
pr("onPointerLeave", ["pointerout", "pointerover"]);
Nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    hv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));

function Yc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, dg(r, t, void 0, e), e.currentTarget = null
}

function Hp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var l = r[s], a = l.instance, u = l.currentTarget;
                if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
                Yc(i, l, u), o = a
            } else for (s = 0; s < r.length; s++) {
                if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
                Yc(i, l, u), o = a
            }
        }
    }
    if (Eo) throw e = Ql, Eo = !1, Ql = null, e
}

function te(e, t) {
    var n = t[ea];
    n === void 0 && (n = t[ea] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wp(t, e, 2, !1), n.add(r))
}

function $s(e, t, n) {
    var r = 0;
    t && (r |= 4), Wp(n, e, r, t)
}

var Yi = "_reactListening" + Math.random().toString(36).slice(2);

function pi(e) {
    if (!e[Yi]) {
        e[Yi] = !0, $d.forEach(function (n) {
            n !== "selectionchange" && (hv.has(n) || $s(n, !1, e), $s(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Yi] || (t[Yi] = !0, $s("selectionchange", !1, t))
    }
}

function Wp(e, t, n, r) {
    switch (Tp(t)) {
        case 1:
            var i = Vg;
            break;
        case 4:
            i = Rg;
            break;
        default:
            i = eu
    }
    n = i.bind(null, t, n, e), i = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
}

function Zs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var a = s.tag;
                if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                s = s.return
            }
            for (; l !== null;) {
                if (s = Sn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = o = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    dp(function () {
        var u = o, c = $a(n), p = [];
        e:{
            var f = jp.get(e);
            if (f !== void 0) {
                var g = nu, v = e;
                switch (e) {
                    case"keypress":
                        if (lo(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        g = Qg;
                        break;
                    case"focusin":
                        v = "focus", g = Qs;
                        break;
                    case"focusout":
                        v = "blur", g = Qs;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        g = Qs;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        g = Nc;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        g = Dg;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        g = Xg;
                        break;
                    case Ip:
                    case zp:
                    case Bp:
                        g = Og;
                        break;
                    case Up:
                        g = Kg;
                        break;
                    case"scroll":
                        g = Lg;
                        break;
                    case"wheel":
                        g = Zg;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        g = Ig;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        g = Oc
                }
                var x = (t & 4) !== 0, E = !x && e === "scroll", h = x ? f !== null ? f + "Capture" : null : f;
                x = [];
                for (var d = u, m; d !== null;) {
                    m = d;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w, h !== null && (w = li(d, h), w != null && x.push(hi(d, w, m)))), E) break;
                    d = d.return
                }
                0 < x.length && (f = new g(f, v, null, n, c), p.push({event: f, listeners: x}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== jl && (v = n.relatedTarget || n.fromElement) && (Sn(v) || v[Ft])) break e;
                if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = u, v = v ? Sn(v) : null, v !== null && (E = _n(v), v !== E || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = u), g !== v)) {
                    if (x = Nc, w = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Oc, w = "onPointerLeave", h = "onPointerEnter", d = "pointer"), E = g == null ? f : bn(g), m = v == null ? f : bn(v), f = new x(w, d + "leave", g, n, c), f.target = E, f.relatedTarget = m, w = null, Sn(c) === u && (x = new x(h, d + "enter", v, n, c), x.target = m, x.relatedTarget = E, w = x), E = w, g && v) t:{
                        for (x = g, h = v, d = 0, m = x; m; m = Un(m)) d++;
                        for (m = 0, w = h; w; w = Un(w)) m++;
                        for (; 0 < d - m;) x = Un(x), d--;
                        for (; 0 < m - d;) h = Un(h), m--;
                        for (; d--;) {
                            if (x === h || h !== null && x === h.alternate) break t;
                            x = Un(x), h = Un(h)
                        }
                        x = null
                    } else x = null;
                    g !== null && Gc(p, f, g, x, !1), v !== null && E !== null && Gc(p, E, v, x, !0)
                }
            }
            e:{
                if (f = u ? bn(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var C = iv; else if (zc(f)) if (Dp) C = av; else {
                    C = sv;
                    var P = ov
                } else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = lv);
                if (C && (C = C(e, u))) {
                    Mp(p, C, n, c);
                    break e
                }
                P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Fl(f, "number", f.value)
            }
            switch (P = u ? bn(u) : window, e) {
                case"focusin":
                    (zc(P) || P.contentEditable === "true") && (Gn = P, bl = u, br = null);
                    break;
                case"focusout":
                    br = bl = Gn = null;
                    break;
                case"mousedown":
                    Kl = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    Kl = !1, Wc(p, n, c);
                    break;
                case"selectionchange":
                    if (fv) break;
                case"keydown":
                case"keyup":
                    Wc(p, n, c)
            }
            var R;
            if (iu) e:{
                switch (e) {
                    case"compositionstart":
                        var S = "onCompositionStart";
                        break e;
                    case"compositionend":
                        S = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        S = "onCompositionUpdate";
                        break e
                }
                S = void 0
            } else Yn ? Rp(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
            S && (Vp && n.locale !== "ko" && (Yn || S !== "onCompositionStart" ? S === "onCompositionEnd" && Yn && (R = Pp()) : (Kt = c, tu = "value" in Kt ? Kt.value : Kt.textContent, Yn = !0)), P = Ro(u, S), 0 < P.length && (S = new _c(S, e, null, n, c), p.push({
                event: S,
                listeners: P
            }), R ? S.data = R : (R = Lp(n), R !== null && (S.data = R)))), (R = Jg ? ev(e, n) : tv(e, n)) && (u = Ro(u, "onBeforeInput"), 0 < u.length && (c = new _c("onBeforeInput", "beforeinput", null, n, c), p.push({
                event: c,
                listeners: u
            }), c.data = R))
        }
        Hp(p, t)
    })
}

function hi(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function Ro(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e, o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = li(e, n), o != null && r.unshift(hi(e, o, i)), o = li(e, t), o != null && r.push(hi(e, o, i))), e = e.return
    }
    return r
}

function Un(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Gc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var l = n, a = l.alternate, u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, i ? (a = li(n, o), a != null && s.unshift(hi(n, a, l))) : i || (a = li(n, o), a != null && s.push(hi(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var mv = /\r\n?/g, gv = /\u0000|\uFFFD/g;

function Xc(e) {
    return (typeof e == "string" ? e : "" + e).replace(mv, `
`).replace(gv, "")
}

function Gi(e, t, n) {
    if (t = Xc(t), Xc(e) !== t && n) throw Error(V(425))
}

function Lo() {
}

var $l = null, Zl = null;

function ql(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Jl = typeof setTimeout == "function" ? setTimeout : void 0,
    vv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bc = typeof Promise == "function" ? Promise : void 0,
    yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof bc < "u" ? function (e) {
        return bc.resolve(null).then(e).catch(wv)
    } : Jl;

function wv(e) {
    setTimeout(function () {
        throw e
    })
}

function qs(e, t) {
    var n = t, r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), ci(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ci(t)
}

function nn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Kc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var Er = Math.random().toString(36).slice(2), xt = "__reactFiber$" + Er, mi = "__reactProps$" + Er,
    Ft = "__reactContainer$" + Er, ea = "__reactEvents$" + Er, xv = "__reactListeners$" + Er,
    Sv = "__reactHandles$" + Er;

function Sn(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ft] || n[xt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Kc(e); e !== null;) {
                if (n = e[xt]) return n;
                e = Kc(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ri(e) {
    return e = e[xt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function bn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(V(33))
}

function hs(e) {
    return e[mi] || null
}

var ta = [], Kn = -1;

function pn(e) {
    return {current: e}
}

function ne(e) {
    0 > Kn || (e.current = ta[Kn], ta[Kn] = null, Kn--)
}

function ee(e, t) {
    Kn++, ta[Kn] = e.current, e.current = t
}

var un = {}, Me = pn(un), je = pn(!1), Vn = un;

function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function He(e) {
    return e = e.childContextTypes, e != null
}

function Mo() {
    ne(je), ne(Me)
}

function $c(e, t, n) {
    if (Me.current !== un) throw Error(V(168));
    ee(Me, t), ee(je, n)
}

function Qp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(V(108, og(e) || "Unknown", i));
    return ae({}, n, r)
}

function Do(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, Vn = Me.current, ee(Me, e), ee(je, je.current), !0
}

function Zc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(V(169));
    n ? (e = Qp(e, t, Vn), r.__reactInternalMemoizedMergedChildContext = e, ne(je), ne(Me), ee(Me, e)) : ne(je), ee(je, n)
}

var Lt = null, ms = !1, Js = !1;

function Yp(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}

function kv(e) {
    ms = !0, Yp(e)
}

function hn() {
    if (!Js && Lt !== null) {
        Js = !0;
        var e = 0, t = Z;
        try {
            var n = Lt;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Lt = null, ms = !1
        } catch (i) {
            throw Lt !== null && (Lt = Lt.slice(e + 1)), gp(Za, hn), i
        } finally {
            Z = t, Js = !1
        }
    }
    return null
}

var $n = [], Zn = 0, No = null, _o = 0, et = [], tt = 0, Rn = null, Mt = 1, Dt = "";

function vn(e, t) {
    $n[Zn++] = _o, $n[Zn++] = No, No = e, _o = t
}

function Gp(e, t, n) {
    et[tt++] = Mt, et[tt++] = Dt, et[tt++] = Rn, Rn = e;
    var r = Mt;
    e = Dt;
    var i = 32 - ht(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - ht(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Mt = 1 << 32 - ht(t) + i | n << i | r, Dt = o + e
    } else Mt = 1 << o | n << i | r, Dt = e
}

function su(e) {
    e.return !== null && (vn(e, 1), Gp(e, 1, 0))
}

function lu(e) {
    for (; e === No;) No = $n[--Zn], $n[Zn] = null, _o = $n[--Zn], $n[Zn] = null;
    for (; e === Rn;) Rn = et[--tt], et[tt] = null, Dt = et[--tt], et[tt] = null, Mt = et[--tt], et[tt] = null
}

var Ge = null, Ye = null, oe = !1, ft = null;

function Xp(e, t) {
    var n = nt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function qc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ye = nn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ye = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? {
                id: Mt,
                overflow: Dt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ye = null, !0) : !1;
        default:
            return !1
    }
}

function na(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ra(e) {
    if (oe) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!qc(e, t)) {
                if (na(e)) throw Error(V(418));
                t = nn(n.nextSibling);
                var r = Ge;
                t && qc(e, t) ? Xp(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Ge = e)
            }
        } else {
            if (na(e)) throw Error(V(418));
            e.flags = e.flags & -4097 | 2, oe = !1, Ge = e
        }
    }
}

function Jc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ge = e
}

function Xi(e) {
    if (e !== Ge) return !1;
    if (!oe) return Jc(e), oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ql(e.type, e.memoizedProps)), t && (t = Ye)) {
        if (na(e)) throw bp(), Error(V(418));
        for (; t;) Xp(e, t), t = nn(t.nextSibling)
    }
    if (Jc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = nn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else Ye = Ge ? nn(e.stateNode.nextSibling) : null;
    return !0
}

function bp() {
    for (var e = Ye; e;) e = nn(e.nextSibling)
}

function mr() {
    Ye = Ge = null, oe = !1
}

function au(e) {
    ft === null ? ft = [e] : ft.push(e)
}

var Cv = Bt.ReactCurrentBatchConfig;

function ut(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var Oo = pn(null), Fo = null, qn = null, uu = null;

function cu() {
    uu = qn = Fo = null
}

function fu(e) {
    var t = Oo.current;
    ne(Oo), e._currentValue = t
}

function ia(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function ur(e, t) {
    Fo = e, uu = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null)
}

function it(e) {
    var t = e._currentValue;
    if (uu !== e) if (e = {context: e, memoizedValue: t, next: null}, qn === null) {
        if (Fo === null) throw Error(V(308));
        qn = e, Fo.dependencies = {lanes: 0, firstContext: e}
    } else qn = qn.next = e;
    return t
}

var kn = null;

function du(e) {
    kn === null ? kn = [e] : kn.push(e)
}

function Kp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, du(t)) : (n.next = i.next, i.next = n), t.interleaved = n, It(e, r)
}

function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var Yt = !1;

function pu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function $p(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Nt(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, $ & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, It(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, du(r)) : (t.next = i.next, i.next = t), r.interleaved = t, It(e, n)
}

function ao(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n)
    }
}

function ef(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Io(e, t, n, r) {
    var i = e.updateQueue;
    Yt = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l, u = a.next;
        a.next = null, s === null ? o = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var p = i.baseState;
        s = 0, c = u = a = null, l = o;
        do {
            var f = l.lane, g = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e:{
                    var v = e, x = l;
                    switch (f = t, g = n, x.tag) {
                        case 1:
                            if (v = x.payload, typeof v == "function") {
                                p = v.call(g, p, f);
                                break e
                            }
                            p = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = x.payload, f = typeof v == "function" ? v.call(g, p, f) : v, f == null) break e;
                            p = ae({}, p, f);
                            break e;
                        case 2:
                            Yt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [l] : f.push(l))
            } else g = {
                eventTime: g,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = g, a = p) : c = c.next = g, s |= f;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                f = l, l = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = p), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Mn |= s, e.lanes = s, e.memoizedState = p
    }
}

function tf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(V(191, i));
            i.call(r)
        }
    }
}

var Zp = new Kd.Component().refs;

function oa(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var gs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? _n(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Oe(), i = sn(e), o = Nt(r, i);
        o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (mt(t, e, i, r), ao(t, e, i))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Oe(), i = sn(e), o = Nt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = rn(e, o, i), t !== null && (mt(t, e, i, r), ao(t, e, i))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Oe(), r = sn(e), i = Nt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = rn(e, i, r), t !== null && (mt(t, e, r, n), ao(t, e, r))
    }
};

function nf(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !di(n, r) || !di(i, o) : !0
}

function qp(e, t, n) {
    var r = !1, i = un, o = t.contextType;
    return typeof o == "object" && o !== null ? o = it(o) : (i = He(t) ? Vn : Me.current, r = t.contextTypes, o = (r = r != null) ? hr(e, i) : un), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function rf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gs.enqueueReplaceState(t, t.state, null)
}

function sa(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Zp, pu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = it(o) : (o = He(t) ? Vn : Me.current, i.context = hr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (oa(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && gs.enqueueReplaceState(i, i.state, null), Io(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Mr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(V(309));
                var r = n.stateNode
            }
            if (!r) throw Error(V(147, e));
            var i = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var l = i.refs;
                l === Zp && (l = i.refs = {}), s === null ? delete l[o] : l[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(V(284));
        if (!n._owner) throw Error(V(290, e))
    }
    return e
}

function bi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function of(e) {
    var t = e._init;
    return t(e._payload)
}

function Jp(e) {
    function t(h, d) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [d], h.flags |= 16) : m.push(d)
        }
    }

    function n(h, d) {
        if (!e) return null;
        for (; d !== null;) t(h, d), d = d.sibling;
        return null
    }

    function r(h, d) {
        for (h = new Map; d !== null;) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
        return h
    }

    function i(h, d) {
        return h = ln(h, d), h.index = 0, h.sibling = null, h
    }

    function o(h, d, m) {
        return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < d ? (h.flags |= 2, d) : m) : (h.flags |= 2, d)) : (h.flags |= 1048576, d)
    }

    function s(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function l(h, d, m, w) {
        return d === null || d.tag !== 6 ? (d = sl(m, h.mode, w), d.return = h, d) : (d = i(d, m), d.return = h, d)
    }

    function a(h, d, m, w) {
        var C = m.type;
        return C === Qn ? c(h, d, m.props.children, w, m.key) : d !== null && (d.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Qt && of(C) === d.type) ? (w = i(d, m.props), w.ref = Mr(h, d, m), w.return = h, w) : (w = mo(m.type, m.key, m.props, null, h.mode, w), w.ref = Mr(h, d, m), w.return = h, w)
    }

    function u(h, d, m, w) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = ll(m, h.mode, w), d.return = h, d) : (d = i(d, m.children || []), d.return = h, d)
    }

    function c(h, d, m, w, C) {
        return d === null || d.tag !== 7 ? (d = Pn(m, h.mode, w, C), d.return = h, d) : (d = i(d, m), d.return = h, d)
    }

    function p(h, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = sl("" + d, h.mode, m), d.return = h, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Ii:
                    return m = mo(d.type, d.key, d.props, null, h.mode, m), m.ref = Mr(h, null, d), m.return = h, m;
                case Wn:
                    return d = ll(d, h.mode, m), d.return = h, d;
                case Qt:
                    var w = d._init;
                    return p(h, w(d._payload), m)
            }
            if (zr(d) || Tr(d)) return d = Pn(d, h.mode, m, null), d.return = h, d;
            bi(h, d)
        }
        return null
    }

    function f(h, d, m, w) {
        var C = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return C !== null ? null : l(h, d, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ii:
                    return m.key === C ? a(h, d, m, w) : null;
                case Wn:
                    return m.key === C ? u(h, d, m, w) : null;
                case Qt:
                    return C = m._init, f(h, d, C(m._payload), w)
            }
            if (zr(m) || Tr(m)) return C !== null ? null : c(h, d, m, w, null);
            bi(h, m)
        }
        return null
    }

    function g(h, d, m, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return h = h.get(m) || null, l(d, h, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Ii:
                    return h = h.get(w.key === null ? m : w.key) || null, a(d, h, w, C);
                case Wn:
                    return h = h.get(w.key === null ? m : w.key) || null, u(d, h, w, C);
                case Qt:
                    var P = w._init;
                    return g(h, d, m, P(w._payload), C)
            }
            if (zr(w) || Tr(w)) return h = h.get(m) || null, c(d, h, w, C, null);
            bi(d, w)
        }
        return null
    }

    function v(h, d, m, w) {
        for (var C = null, P = null, R = d, S = d = 0, D = null; R !== null && S < m.length; S++) {
            R.index > S ? (D = R, R = null) : D = R.sibling;
            var M = f(h, R, m[S], w);
            if (M === null) {
                R === null && (R = D);
                break
            }
            e && R && M.alternate === null && t(h, R), d = o(M, d, S), P === null ? C = M : P.sibling = M, P = M, R = D
        }
        if (S === m.length) return n(h, R), oe && vn(h, S), C;
        if (R === null) {
            for (; S < m.length; S++) R = p(h, m[S], w), R !== null && (d = o(R, d, S), P === null ? C = R : P.sibling = R, P = R);
            return oe && vn(h, S), C
        }
        for (R = r(h, R); S < m.length; S++) D = g(R, h, S, m[S], w), D !== null && (e && D.alternate !== null && R.delete(D.key === null ? S : D.key), d = o(D, d, S), P === null ? C = D : P.sibling = D, P = D);
        return e && R.forEach(function (Y) {
            return t(h, Y)
        }), oe && vn(h, S), C
    }

    function x(h, d, m, w) {
        var C = Tr(m);
        if (typeof C != "function") throw Error(V(150));
        if (m = C.call(m), m == null) throw Error(V(151));
        for (var P = C = null, R = d, S = d = 0, D = null, M = m.next(); R !== null && !M.done; S++, M = m.next()) {
            R.index > S ? (D = R, R = null) : D = R.sibling;
            var Y = f(h, R, M.value, w);
            if (Y === null) {
                R === null && (R = D);
                break
            }
            e && R && Y.alternate === null && t(h, R), d = o(Y, d, S), P === null ? C = Y : P.sibling = Y, P = Y, R = D
        }
        if (M.done) return n(h, R), oe && vn(h, S), C;
        if (R === null) {
            for (; !M.done; S++, M = m.next()) M = p(h, M.value, w), M !== null && (d = o(M, d, S), P === null ? C = M : P.sibling = M, P = M);
            return oe && vn(h, S), C
        }
        for (R = r(h, R); !M.done; S++, M = m.next()) M = g(R, h, S, M.value, w), M !== null && (e && M.alternate !== null && R.delete(M.key === null ? S : M.key), d = o(M, d, S), P === null ? C = M : P.sibling = M, P = M);
        return e && R.forEach(function (j) {
            return t(h, j)
        }), oe && vn(h, S), C
    }

    function E(h, d, m, w) {
        if (typeof m == "object" && m !== null && m.type === Qn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ii:
                    e:{
                        for (var C = m.key, P = d; P !== null;) {
                            if (P.key === C) {
                                if (C = m.type, C === Qn) {
                                    if (P.tag === 7) {
                                        n(h, P.sibling), d = i(P, m.props.children), d.return = h, h = d;
                                        break e
                                    }
                                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Qt && of(C) === P.type) {
                                    n(h, P.sibling), d = i(P, m.props), d.ref = Mr(h, P, m), d.return = h, h = d;
                                    break e
                                }
                                n(h, P);
                                break
                            } else t(h, P);
                            P = P.sibling
                        }
                        m.type === Qn ? (d = Pn(m.props.children, h.mode, w, m.key), d.return = h, h = d) : (w = mo(m.type, m.key, m.props, null, h.mode, w), w.ref = Mr(h, d, m), w.return = h, h = w)
                    }
                    return s(h);
                case Wn:
                    e:{
                        for (P = m.key; d !== null;) {
                            if (d.key === P) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                                n(h, d.sibling), d = i(d, m.children || []), d.return = h, h = d;
                                break e
                            } else {
                                n(h, d);
                                break
                            } else t(h, d);
                            d = d.sibling
                        }
                        d = ll(m, h.mode, w), d.return = h, h = d
                    }
                    return s(h);
                case Qt:
                    return P = m._init, E(h, d, P(m._payload), w)
            }
            if (zr(m)) return v(h, d, m, w);
            if (Tr(m)) return x(h, d, m, w);
            bi(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(h, d.sibling), d = i(d, m), d.return = h, h = d) : (n(h, d), d = sl(m, h.mode, w), d.return = h, h = d), s(h)) : n(h, d)
    }

    return E
}

var gr = Jp(!0), eh = Jp(!1), Li = {}, Ct = pn(Li), gi = pn(Li), vi = pn(Li);

function Cn(e) {
    if (e === Li) throw Error(V(174));
    return e
}

function hu(e, t) {
    switch (ee(vi, t), ee(gi, e), ee(Ct, Li), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zl(t, e)
    }
    ne(Ct), ee(Ct, t)
}

function vr() {
    ne(Ct), ne(gi), ne(vi)
}

function th(e) {
    Cn(vi.current);
    var t = Cn(Ct.current), n = zl(t, e.type);
    t !== n && (ee(gi, e), ee(Ct, n))
}

function mu(e) {
    gi.current === e && (ne(Ct), ne(gi))
}

var se = pn(0);

function zo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var el = [];

function gu() {
    for (var e = 0; e < el.length; e++) el[e]._workInProgressVersionPrimary = null;
    el.length = 0
}

var uo = Bt.ReactCurrentDispatcher, tl = Bt.ReactCurrentBatchConfig, Ln = 0, le = null, we = null, ke = null, Bo = !1,
    Kr = !1, yi = 0, Ev = 0;

function Ve() {
    throw Error(V(321))
}

function vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0
}

function yu(e, t, n, r, i, o) {
    if (Ln = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, uo.current = e === null || e.memoizedState === null ? Vv : Rv, e = n(r, i), Kr) {
        o = 0;
        do {
            if (Kr = !1, yi = 0, 25 <= o) throw Error(V(301));
            o += 1, ke = we = null, t.updateQueue = null, uo.current = Lv, e = n(r, i)
        } while (Kr)
    }
    if (uo.current = Uo, t = we !== null && we.next !== null, Ln = 0, ke = we = le = null, Bo = !1, t) throw Error(V(300));
    return e
}

function wu() {
    var e = yi !== 0;
    return yi = 0, e
}

function yt() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return ke === null ? le.memoizedState = ke = e : ke = ke.next = e, ke
}

function ot() {
    if (we === null) {
        var e = le.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = we.next;
    var t = ke === null ? le.memoizedState : ke.next;
    if (t !== null) ke = t, we = e; else {
        if (e === null) throw Error(V(310));
        we = e, e = {
            memoizedState: we.memoizedState,
            baseState: we.baseState,
            baseQueue: we.baseQueue,
            queue: we.queue,
            next: null
        }, ke === null ? le.memoizedState = ke = e : ke = ke.next = e
    }
    return ke
}

function wi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function nl(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(V(311));
    n.lastRenderedReducer = e;
    var r = we, i = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var l = s = null, a = null, u = o;
        do {
            var c = u.lane;
            if ((Ln & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var p = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p, s = r) : a = a.next = p, le.lanes |= c, Mn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l, gt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, le.lanes |= o, Mn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function rl(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(V(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        gt(o, t.memoizedState) || (Be = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function nh() {
}

function rh(e, t) {
    var n = le, r = ot(), i = t(), o = !gt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Be = !0), r = r.queue, xu(sh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ke !== null && ke.memoizedState.tag & 1) {
        if (n.flags |= 2048, xi(9, oh.bind(null, n, r, i, t), void 0, null), Ce === null) throw Error(V(349));
        Ln & 30 || ih(n, t, i)
    }
    return i
}

function ih(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function oh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, lh(t) && ah(e)
}

function sh(e, t, n) {
    return n(function () {
        lh(t) && ah(e)
    })
}

function lh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}

function ah(e) {
    var t = It(e, 1);
    t !== null && mt(t, e, 1, -1)
}

function sf(e) {
    var t = yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Pv.bind(null, le, e), [t.memoizedState, e]
}

function xi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function uh() {
    return ot().memoizedState
}

function co(e, t, n, r) {
    var i = yt();
    le.flags |= e, i.memoizedState = xi(1 | t, n, void 0, r === void 0 ? null : r)
}

function vs(e, t, n, r) {
    var i = ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (we !== null) {
        var s = we.memoizedState;
        if (o = s.destroy, r !== null && vu(r, s.deps)) {
            i.memoizedState = xi(t, n, o, r);
            return
        }
    }
    le.flags |= e, i.memoizedState = xi(1 | t, n, o, r)
}

function lf(e, t) {
    return co(8390656, 8, e, t)
}

function xu(e, t) {
    return vs(2048, 8, e, t)
}

function ch(e, t) {
    return vs(4, 2, e, t)
}

function fh(e, t) {
    return vs(4, 4, e, t)
}

function dh(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function ph(e, t, n) {
    return n = n != null ? n.concat([e]) : null, vs(4, 4, dh.bind(null, t, e), n)
}

function Su() {
}

function hh(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function mh(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function gh(e, t, n) {
    return Ln & 21 ? (gt(n, t) || (n = wp(), le.lanes |= n, Mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n)
}

function Av(e, t) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = tl.transition;
    tl.transition = {};
    try {
        e(!1), t()
    } finally {
        Z = n, tl.transition = r
    }
}

function vh() {
    return ot().memoizedState
}

function Tv(e, t, n) {
    var r = sn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, yh(e)) wh(t, n); else if (n = Kp(e, t, n, r), n !== null) {
        var i = Oe();
        mt(n, e, r, i), xh(n, t, r)
    }
}

function Pv(e, t, n) {
    var r = sn(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (yh(e)) wh(t, i); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState, l = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = l, gt(l, s)) {
                var a = t.interleaved;
                a === null ? (i.next = i, du(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {
        } finally {
        }
        n = Kp(e, t, i, r), n !== null && (i = Oe(), mt(n, e, r, i), xh(n, t, r))
    }
}

function yh(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le
}

function wh(e, t) {
    Kr = Bo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n)
    }
}

var Uo = {
    readContext: it,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1
}, Vv = {
    readContext: it, useCallback: function (e, t) {
        return yt().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: it, useEffect: lf, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, co(4194308, 4, dh.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return co(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return co(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = yt();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = yt();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = Tv.bind(null, le, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = yt();
        return e = {current: e}, t.memoizedState = e
    }, useState: sf, useDebugValue: Su, useDeferredValue: function (e) {
        return yt().memoizedState = e
    }, useTransition: function () {
        var e = sf(!1), t = e[0];
        return e = Av.bind(null, e[1]), yt().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = le, i = yt();
        if (oe) {
            if (n === void 0) throw Error(V(407));
            n = n()
        } else {
            if (n = t(), Ce === null) throw Error(V(349));
            Ln & 30 || ih(r, t, n)
        }
        i.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return i.queue = o, lf(sh.bind(null, r, o, e), [e]), r.flags |= 2048, xi(9, oh.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = yt(), t = Ce.identifierPrefix;
        if (oe) {
            var n = Dt, r = Mt;
            n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = Ev++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, Rv = {
    readContext: it,
    useCallback: hh,
    useContext: it,
    useEffect: xu,
    useImperativeHandle: ph,
    useInsertionEffect: ch,
    useLayoutEffect: fh,
    useMemo: mh,
    useReducer: nl,
    useRef: uh,
    useState: function () {
        return nl(wi)
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
        var t = ot();
        return gh(t, we.memoizedState, e)
    },
    useTransition: function () {
        var e = nl(wi)[0], t = ot().memoizedState;
        return [e, t]
    },
    useMutableSource: nh,
    useSyncExternalStore: rh,
    useId: vh,
    unstable_isNewReconciler: !1
}, Lv = {
    readContext: it,
    useCallback: hh,
    useContext: it,
    useEffect: xu,
    useImperativeHandle: ph,
    useInsertionEffect: ch,
    useLayoutEffect: fh,
    useMemo: mh,
    useReducer: rl,
    useRef: uh,
    useState: function () {
        return rl(wi)
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
        var t = ot();
        return we === null ? t.memoizedState = e : gh(t, we.memoizedState, e)
    },
    useTransition: function () {
        var e = rl(wi)[0], t = ot().memoizedState;
        return [e, t]
    },
    useMutableSource: nh,
    useSyncExternalStore: rh,
    useId: vh,
    unstable_isNewReconciler: !1
};

function yr(e, t) {
    try {
        var n = "", r = t;
        do n += ig(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: i, digest: null}
}

function il(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function la(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var Mv = typeof WeakMap == "function" ? WeakMap : Map;

function Sh(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        Ho || (Ho = !0, va = r), la(e, t)
    }, n
}

function kh(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            la(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        la(e, t), typeof r != "function" && (on === null ? on = new Set([this]) : on.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function af(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Mv;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Yv.bind(null, e, t, n), t.then(e, e))
}

function uf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function cf(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e)
}

var Dv = Bt.ReactCurrentOwner, Be = !1;

function Ne(e, t, n, r) {
    t.child = e === null ? eh(t, null, n, r) : gr(t, e.child, n, r)
}

function ff(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return ur(t, i), r = yu(e, t, n, r, o, i), n = wu(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (oe && n && su(t), t.flags |= 1, Ne(e, t, r, i), t.child)
}

function df(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Ru(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ch(e, t, o, r, i)) : (e = mo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : di, n(s, r) && e.ref === t.ref) return zt(e, t, i)
    }
    return t.flags |= 1, e = ln(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ch(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (di(o, r) && e.ref === t.ref) if (Be = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Be = !0); else return t.lanes = e.lanes, zt(e, t, i)
    }
    return aa(e, t, n, r, i)
}

function Eh(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, ee(er, Qe), Qe |= n; else {
        if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, ee(er, Qe), Qe |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, ee(er, Qe), Qe |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ee(er, Qe), Qe |= r;
    return Ne(e, t, i, n), t.child
}

function Ah(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function aa(e, t, n, r, i) {
    var o = He(n) ? Vn : Me.current;
    return o = hr(t, o), ur(t, i), n = yu(e, t, n, r, o, i), r = wu(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, zt(e, t, i)) : (oe && r && su(t), t.flags |= 1, Ne(e, t, n, i), t.child)
}

function pf(e, t, n, r, i) {
    if (He(n)) {
        var o = !0;
        Do(t)
    } else o = !1;
    if (ur(t, i), t.stateNode === null) fo(e, t), qp(t, n, r), sa(t, n, r, i), r = !0; else if (e === null) {
        var s = t.stateNode, l = t.memoizedProps;
        s.props = l;
        var a = s.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = it(u) : (u = He(n) ? Vn : Me.current, u = hr(t, u));
        var c = n.getDerivedStateFromProps,
            p = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && rf(t, s, r, u), Yt = !1;
        var f = t.memoizedState;
        s.state = f, Io(t, r, s, i), a = t.memoizedState, l !== r || f !== a || je.current || Yt ? (typeof c == "function" && (oa(t, n, c, r), a = t.memoizedState), (l = Yt || nf(t, n, l, r, f, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, $p(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ut(t.type, l), s.props = u, p = t.pendingProps, f = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = He(n) ? Vn : Me.current, a = hr(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || f !== a) && rf(t, s, r, a), Yt = !1, f = t.memoizedState, s.state = f, Io(t, r, s, i);
        var v = t.memoizedState;
        l !== p || f !== v || je.current || Yt ? (typeof g == "function" && (oa(t, n, g, r), v = t.memoizedState), (u = Yt || nf(t, n, u, r, f, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ua(e, t, n, r, o, i)
}

function ua(e, t, n, r, i, o) {
    Ah(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Zc(t, n, !1), zt(e, t, o);
    r = t.stateNode, Dv.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = gr(t, e.child, null, o), t.child = gr(t, null, l, o)) : Ne(e, t, l, o), t.memoizedState = r.state, i && Zc(t, n, !0), t.child
}

function Th(e) {
    var t = e.stateNode;
    t.pendingContext ? $c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $c(e, t.context, !1), hu(e, t.containerInfo)
}

function hf(e, t, n, r, i) {
    return mr(), au(i), t.flags |= 256, Ne(e, t, n, r), t.child
}

var ca = {dehydrated: null, treeContext: null, retryLane: 0};

function fa(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Ph(e, t, n) {
    var r = t.pendingProps, i = se.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ee(se, i & 1), e === null) return ra(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = xs(s, r, 0, null), e = Pn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = fa(n), t.memoizedState = ca, e) : ku(t, s));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Nv(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
        var a = {mode: "hidden", children: r.children};
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = ln(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = ln(l, o) : (o = Pn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? fa(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ca, r
    }
    return o = e.child, e = o.sibling, r = ln(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ku(e, t) {
    return t = xs({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Ki(e, t, n, r) {
    return r !== null && au(r), gr(t, e.child, null, n), e = ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Nv(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = il(Error(V(422))), Ki(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xs({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Pn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && gr(t, e.child, null, s), t.child.memoizedState = fa(s), t.memoizedState = ca, o);
    if (!(t.mode & 1)) return Ki(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, o = Error(V(419)), r = il(o, r, void 0), Ki(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Be || l) {
        if (r = Ce, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, It(e, i), mt(r, e, i, -1))
        }
        return Vu(), r = il(Error(V(421))), Ki(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gv.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ye = nn(i.nextSibling), Ge = t, oe = !0, ft = null, e !== null && (et[tt++] = Mt, et[tt++] = Dt, et[tt++] = Rn, Mt = e.id, Dt = e.overflow, Rn = t), t = ku(t, r.children), t.flags |= 4096, t)
}

function mf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ia(e.return, t, n)
}

function ol(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Vh(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ne(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && mf(e, n, t); else if (e.tag === 19) mf(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ee(se, r), !(t.mode & 1)) t.memoizedState = null; else switch (i) {
        case"forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && zo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ol(t, !1, i, n, o);
            break;
        case"backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && zo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            ol(t, !0, n, null, o);
            break;
        case"together":
            ol(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function fo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function zt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(V(153));
    if (t.child !== null) {
        for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function _v(e, t, n) {
    switch (t.tag) {
        case 3:
            Th(t), mr();
            break;
        case 5:
            th(t);
            break;
        case 1:
            He(t.type) && Do(t);
            break;
        case 4:
            hu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, i = t.memoizedProps.value;
            ee(Oo, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ph(e, t, n) : (ee(se, se.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
            ee(se, se.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Vh(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ee(se, se.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Eh(e, t, n)
    }
    return zt(e, t, n)
}

var Rh, da, Lh, Mh;
Rh = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
da = function () {
};
Lh = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Cn(Ct.current);
        var o = null;
        switch (n) {
            case"input":
                i = _l(e, i), r = _l(e, r), o = [];
                break;
            case"select":
                i = ae({}, i, {value: void 0}), r = ae({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                i = Il(e, i), r = Il(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Lo)
        }
        Bl(n, r);
        var s;
        n = null;
        for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
            var l = i[u];
            for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (oi.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
                for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
            } else n || (o || (o = []), o.push(u, n)), n = a; else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (oi.hasOwnProperty(u) ? (a != null && u === "onScroll" && te("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Mh = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Dr(e, t) {
    if (!oe) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ov(e, t, n) {
    var r = t.pendingProps;
    switch (lu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return He(t.type) && Mo(), Re(t), null;
        case 3:
            return r = t.stateNode, vr(), ne(je), ne(Me), gu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (xa(ft), ft = null))), da(e, t), Re(t), null;
        case 5:
            mu(t);
            var i = Cn(vi.current);
            if (n = t.type, e !== null && t.stateNode != null) Lh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(V(166));
                    return Re(t), null
                }
                if (e = Cn(Ct.current), Xi(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[xt] = t, r[mi] = o, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            te("cancel", r), te("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            te("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (i = 0; i < Ur.length; i++) te(Ur[i], r);
                            break;
                        case"source":
                            te("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            te("error", r), te("load", r);
                            break;
                        case"details":
                            te("toggle", r);
                            break;
                        case"input":
                            Cc(r, o), te("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, te("invalid", r);
                            break;
                        case"textarea":
                            Ac(r, o), te("invalid", r)
                    }
                    Bl(n, o), i = null;
                    for (var s in o) if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Gi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Gi(r.textContent, l, e), i = ["children", "" + l]) : oi.hasOwnProperty(s) && l != null && s === "onScroll" && te("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            zi(r), Ec(r, o, !0);
                            break;
                        case"textarea":
                            zi(r), Tc(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Lo)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ip(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[xt] = t, e[mi] = r, Rh(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = Ul(n, r), n) {
                            case"dialog":
                                te("cancel", e), te("close", e), i = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                te("load", e), i = r;
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < Ur.length; i++) te(Ur[i], e);
                                i = r;
                                break;
                            case"source":
                                te("error", e), i = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                te("error", e), te("load", e), i = r;
                                break;
                            case"details":
                                te("toggle", e), i = r;
                                break;
                            case"input":
                                Cc(e, r), i = _l(e, r), te("invalid", e);
                                break;
                            case"option":
                                i = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, i = ae({}, r, {value: void 0}), te("invalid", e);
                                break;
                            case"textarea":
                                Ac(e, r), i = Il(e, r), te("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Bl(n, i), l = i;
                        for (o in l) if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? lp(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && op(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && si(e, a) : typeof a == "number" && si(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (oi.hasOwnProperty(o) ? a != null && o === "onScroll" && te("scroll", e) : a != null && Ga(e, o, a, s))
                        }
                        switch (n) {
                            case"input":
                                zi(e), Ec(e, r, !1);
                                break;
                            case"textarea":
                                zi(e), Tc(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + an(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? or(e, !!r.multiple, o, !1) : r.defaultValue != null && or(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Lo)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Mh(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
                if (n = Cn(vi.current), Cn(Ct.current), Xi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[xt] = t, (o = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
                        case 3:
                            Gi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Gi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xt] = t, t.stateNode = r
            }
            return Re(t), null;
        case 13:
            if (ne(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (oe && Ye !== null && t.mode & 1 && !(t.flags & 128)) bp(), mr(), t.flags |= 98560, o = !1; else if (o = Xi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(V(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(V(317));
                        o[xt] = t
                    } else mr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Re(t), o = !1
                } else ft !== null && (xa(ft), ft = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? xe === 0 && (xe = 3) : Vu())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
        case 4:
            return vr(), da(e, t), e === null && pi(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return fu(t.type._context), Re(t), null;
        case 17:
            return He(t.type) && Mo(), Re(t), null;
        case 19:
            if (ne(se), o = t.memoizedState, o === null) return Re(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Dr(o, !1); else {
                if (xe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (s = zo(e), s !== null) {
                        for (t.flags |= 128, Dr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return ee(se, se.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && me() > wr && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = zo(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !oe) return Re(t), null
                } else 2 * me() - o.renderingStartTime > wr && n !== 1073741824 && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = me(), t.sibling = null, n = se.current, ee(se, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
        case 22:
        case 23:
            return Pu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(V(156, t.tag))
}

function Fv(e, t) {
    switch (lu(t), t.tag) {
        case 1:
            return He(t.type) && Mo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return vr(), ne(je), ne(Me), gu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return mu(t), null;
        case 13:
            if (ne(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(V(340));
                mr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ne(se), null;
        case 4:
            return vr(), null;
        case 10:
            return fu(t.type._context), null;
        case 22:
        case 23:
            return Pu(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var $i = !1, Le = !1, Iv = typeof WeakSet == "function" ? WeakSet : Set, F = null;

function Jn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        ce(e, t, r)
    } else n.current = null
}

function pa(e, t, n) {
    try {
        n()
    } catch (r) {
        ce(e, t, r)
    }
}

var gf = !1;

function zv(e, t) {
    if ($l = Po, e = Op(), ou(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, l = -1, a = -1, u = 0, c = 0, p = e, f = null;
                t:for (; ;) {
                    for (var g; p !== n || i !== 0 && p.nodeType !== 3 || (l = s + i), p !== o || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (g = p.firstChild) !== null;) f = p, p = g;
                    for (; ;) {
                        if (p === e) break t;
                        if (f === n && ++u === i && (l = s), f === o && ++c === r && (a = s), (g = p.nextSibling) !== null) break;
                        p = f, f = p.parentNode
                    }
                    p = g
                }
                n = l === -1 || a === -1 ? null : {start: l, end: a}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Zl = {
        focusedElem: e,
        selectionRange: n
    }, Po = !1, F = t; F !== null;) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e; else for (; F !== null;) {
        t = F;
        try {
            var v = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (v !== null) {
                        var x = v.memoizedProps, E = v.memoizedState, h = t.stateNode,
                            d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ut(t.type, x), E);
                        h.__reactInternalSnapshotBeforeUpdate = d
                    }
                    break;
                case 3:
                    var m = t.stateNode.containerInfo;
                    m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(V(163))
            }
        } catch (w) {
            ce(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, F = e;
            break
        }
        F = t.return
    }
    return v = gf, gf = !1, v
}

function $r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && pa(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function ys(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ha(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Dh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[mi], delete t[ea], delete t[xv], delete t[Sv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Nh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function vf(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Nh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Lo)); else if (r !== 4 && (e = e.child, e !== null)) for (ma(e, t, n), e = e.sibling; e !== null;) ma(e, t, n), e = e.sibling
}

function ga(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (ga(e, t, n), e = e.sibling; e !== null;) ga(e, t, n), e = e.sibling
}

var Ae = null, ct = !1;

function jt(e, t, n) {
    for (n = n.child; n !== null;) _h(e, t, n), n = n.sibling
}

function _h(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
        kt.onCommitFiberUnmount(cs, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            Le || Jn(n, t);
        case 6:
            var r = Ae, i = ct;
            Ae = null, jt(e, t, n), Ae = r, ct = i, Ae !== null && (ct ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
            break;
        case 18:
            Ae !== null && (ct ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? qs(e.parentNode, n) : e.nodeType === 1 && qs(e, n), ci(e)) : qs(Ae, n.stateNode));
            break;
        case 4:
            r = Ae, i = ct, Ae = n.stateNode.containerInfo, ct = !0, jt(e, t, n), Ae = r, ct = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i, s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && pa(n, t, s), i = i.next
                } while (i !== r)
            }
            jt(e, t, n);
            break;
        case 1:
            if (!Le && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                ce(n, t, l)
            }
            jt(e, t, n);
            break;
        case 21:
            jt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, jt(e, t, n), Le = r) : jt(e, t, n);
            break;
        default:
            jt(e, t, n)
    }
}

function yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Iv), t.forEach(function (r) {
            var i = Xv.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function lt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, s = t, l = s;
            e:for (; l !== null;) {
                switch (l.tag) {
                    case 5:
                        Ae = l.stateNode, ct = !1;
                        break e;
                    case 3:
                        Ae = l.stateNode.containerInfo, ct = !0;
                        break e;
                    case 4:
                        Ae = l.stateNode.containerInfo, ct = !0;
                        break e
                }
                l = l.return
            }
            if (Ae === null) throw Error(V(160));
            _h(o, s, i), Ae = null, ct = !1;
            var a = i.alternate;
            a !== null && (a.return = null), i.return = null
        } catch (u) {
            ce(i, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Oh(t, e), t = t.sibling
}

function Oh(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (lt(t, e), vt(e), r & 4) {
                try {
                    $r(3, e, e.return), ys(3, e)
                } catch (x) {
                    ce(e, e.return, x)
                }
                try {
                    $r(5, e, e.return)
                } catch (x) {
                    ce(e, e.return, x)
                }
            }
            break;
        case 1:
            lt(t, e), vt(e), r & 512 && n !== null && Jn(n, n.return);
            break;
        case 5:
            if (lt(t, e), vt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    si(i, "")
                } catch (x) {
                    ce(e, e.return, x)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && np(i, o), Ul(l, s);
                    var u = Ul(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s], p = a[s + 1];
                        c === "style" ? lp(i, p) : c === "dangerouslySetInnerHTML" ? op(i, p) : c === "children" ? si(i, p) : Ga(i, c, p, u)
                    }
                    switch (l) {
                        case"input":
                            Ol(i, o);
                            break;
                        case"textarea":
                            rp(i, o);
                            break;
                        case"select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var g = o.value;
                            g != null ? or(i, !!o.multiple, g, !1) : f !== !!o.multiple && (o.defaultValue != null ? or(i, !!o.multiple, o.defaultValue, !0) : or(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[mi] = o
                } catch (x) {
                    ce(e, e.return, x)
                }
            }
            break;
        case 6:
            if (lt(t, e), vt(e), r & 4) {
                if (e.stateNode === null) throw Error(V(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (x) {
                    ce(e, e.return, x)
                }
            }
            break;
        case 3:
            if (lt(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ci(t.containerInfo)
            } catch (x) {
                ce(e, e.return, x)
            }
            break;
        case 4:
            lt(t, e), vt(e);
            break;
        case 13:
            lt(t, e), vt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Au = me())), r & 4 && yf(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (u = Le) || c, lt(t, e), Le = u) : lt(t, e), vt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (F = e, c = e.child; c !== null;) {
                    for (p = F = c; F !== null;) {
                        switch (f = F, g = f.child, f.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $r(4, f, f.return);
                                break;
                            case 1:
                                Jn(f, f.return);
                                var v = f.stateNode;
                                if (typeof v.componentWillUnmount == "function") {
                                    r = f, n = f.return;
                                    try {
                                        t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                    } catch (x) {
                                        ce(r, n, x)
                                    }
                                }
                                break;
                            case 5:
                                Jn(f, f.return);
                                break;
                            case 22:
                                if (f.memoizedState !== null) {
                                    xf(p);
                                    continue
                                }
                        }
                        g !== null ? (g.return = f, F = g) : xf(p)
                    }
                    c = c.sibling
                }
                e:for (c = null, p = e; ;) {
                    if (p.tag === 5) {
                        if (c === null) {
                            c = p;
                            try {
                                i = p.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = sp("display", s))
                            } catch (x) {
                                ce(e, e.return, x)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (c === null) try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        c === p && (c = null), p = p.return
                    }
                    c === p && (c = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            lt(t, e), vt(e), r & 4 && yf(e);
            break;
        case 21:
            break;
        default:
            lt(t, e), vt(e)
    }
}

function vt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (Nh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(V(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (si(i, ""), r.flags &= -33);
                    var o = vf(e);
                    ga(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, l = vf(e);
                    ma(e, l, s);
                    break;
                default:
                    throw Error(V(161))
            }
        } catch (a) {
            ce(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Bv(e, t, n) {
    F = e, Fh(e)
}

function Fh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var i = F, o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || $i;
            if (!s) {
                var l = i.alternate, a = l !== null && l.memoizedState !== null || Le;
                l = $i;
                var u = Le;
                if ($i = s, (Le = a) && !u) for (F = i; F !== null;) s = F, a = s.child, s.tag === 22 && s.memoizedState !== null ? Sf(i) : a !== null ? (a.return = s, F = a) : Sf(i);
                for (; o !== null;) F = o, Fh(o), o = o.sibling;
                F = i, $i = l, Le = u
            }
            wf(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, F = o) : wf(e)
    }
}

function wf(e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Le || ys(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Le) if (n === null) r.componentDidMount(); else {
                            var i = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && tf(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            tf(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case"img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && ci(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(V(163))
                }
                Le || t.flags & 512 && ha(t)
            } catch (f) {
                ce(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function xf(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function Sf(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ys(4, t)
                    } catch (a) {
                        ce(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            ce(t, i, a)
                        }
                    }
                    var o = t.return;
                    try {
                        ha(t)
                    } catch (a) {
                        ce(t, o, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        ha(t)
                    } catch (a) {
                        ce(t, s, a)
                    }
            }
        } catch (a) {
            ce(t, t.return, a)
        }
        if (t === e) {
            F = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, F = l;
            break
        }
        F = t.return
    }
}

var Uv = Math.ceil, jo = Bt.ReactCurrentDispatcher, Cu = Bt.ReactCurrentOwner, rt = Bt.ReactCurrentBatchConfig, $ = 0,
    Ce = null, ve = null, Te = 0, Qe = 0, er = pn(0), xe = 0, Si = null, Mn = 0, ws = 0, Eu = 0, Zr = null, ze = null,
    Au = 0, wr = 1 / 0, Rt = null, Ho = !1, va = null, on = null, Zi = !1, $t = null, Wo = 0, qr = 0, ya = null,
    po = -1, ho = 0;

function Oe() {
    return $ & 6 ? me() : po !== -1 ? po : po = me()
}

function sn(e) {
    return e.mode & 1 ? $ & 2 && Te !== 0 ? Te & -Te : Cv.transition !== null ? (ho === 0 && (ho = wp()), ho) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tp(e.type)), e) : 1
}

function mt(e, t, n, r) {
    if (50 < qr) throw qr = 0, ya = null, Error(V(185));
    Pi(e, n, r), (!($ & 2) || e !== Ce) && (e === Ce && (!($ & 2) && (ws |= n), xe === 4 && bt(e, Te)), We(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (wr = me() + 500, ms && hn()))
}

function We(e, t) {
    var n = e.callbackNode;
    Cg(e, t);
    var r = To(e, e === Ce ? Te : 0);
    if (r === 0) n !== null && Rc(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Rc(n), t === 1) e.tag === 0 ? kv(kf.bind(null, e)) : Yp(kf.bind(null, e)), yv(function () {
            !($ & 6) && hn()
        }), n = null; else {
            switch (xp(r)) {
                case 1:
                    n = Za;
                    break;
                case 4:
                    n = vp;
                    break;
                case 16:
                    n = Ao;
                    break;
                case 536870912:
                    n = yp;
                    break;
                default:
                    n = Ao
            }
            n = Qh(n, Ih.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ih(e, t) {
    if (po = -1, ho = 0, $ & 6) throw Error(V(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n) return null;
    var r = To(e, e === Ce ? Te : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Qo(e, r); else {
        t = r;
        var i = $;
        $ |= 2;
        var o = Bh();
        (Ce !== e || Te !== t) && (Rt = null, wr = me() + 500, Tn(e, t));
        do try {
            Wv();
            break
        } catch (l) {
            zh(e, l)
        } while (1);
        cu(), jo.current = o, $ = i, ve !== null ? t = 0 : (Ce = null, Te = 0, t = xe)
    }
    if (t !== 0) {
        if (t === 2 && (i = Yl(e), i !== 0 && (r = i, t = wa(e, i))), t === 1) throw n = Si, Tn(e, 0), bt(e, r), We(e, me()), n;
        if (t === 6) bt(e, r); else {
            if (i = e.current.alternate, !(r & 30) && !jv(i) && (t = Qo(e, r), t === 2 && (o = Yl(e), o !== 0 && (r = o, t = wa(e, o))), t === 1)) throw n = Si, Tn(e, 0), bt(e, r), We(e, me()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(V(345));
                case 2:
                    yn(e, ze, Rt);
                    break;
                case 3:
                    if (bt(e, r), (r & 130023424) === r && (t = Au + 500 - me(), 10 < t)) {
                        if (To(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Oe(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Jl(yn.bind(null, e, ze, Rt), t);
                        break
                    }
                    yn(e, ze, Rt);
                    break;
                case 4:
                    if (bt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - ht(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uv(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Jl(yn.bind(null, e, ze, Rt), r);
                        break
                    }
                    yn(e, ze, Rt);
                    break;
                case 5:
                    yn(e, ze, Rt);
                    break;
                default:
                    throw Error(V(329))
            }
        }
    }
    return We(e, me()), e.callbackNode === n ? Ih.bind(null, e) : null
}

function wa(e, t) {
    var n = Zr;
    return e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256), e = Qo(e, t), e !== 2 && (t = ze, ze = n, t !== null && xa(t)), e
}

function xa(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}

function jv(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!gt(o(), i)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function bt(e, t) {
    for (t &= ~Eu, t &= ~ws, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ht(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function kf(e) {
    if ($ & 6) throw Error(V(327));
    cr();
    var t = To(e, 0);
    if (!(t & 1)) return We(e, me()), null;
    var n = Qo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yl(e);
        r !== 0 && (t = r, n = wa(e, r))
    }
    if (n === 1) throw n = Si, Tn(e, 0), bt(e, t), We(e, me()), n;
    if (n === 6) throw Error(V(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, ze, Rt), We(e, me()), null
}

function Tu(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n, $ === 0 && (wr = me() + 500, ms && hn())
    }
}

function Dn(e) {
    $t !== null && $t.tag === 0 && !($ & 6) && cr();
    var t = $;
    $ |= 1;
    var n = rt.transition, r = Z;
    try {
        if (rt.transition = null, Z = 1, e) return e()
    } finally {
        Z = r, rt.transition = n, $ = t, !($ & 6) && hn()
    }
}

function Pu() {
    Qe = er.current, ne(er)
}

function Tn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, vv(n)), ve !== null) for (n = ve.return; n !== null;) {
        var r = n;
        switch (lu(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Mo();
                break;
            case 3:
                vr(), ne(je), ne(Me), gu();
                break;
            case 5:
                mu(r);
                break;
            case 4:
                vr();
                break;
            case 13:
                ne(se);
                break;
            case 19:
                ne(se);
                break;
            case 10:
                fu(r.type._context);
                break;
            case 22:
            case 23:
                Pu()
        }
        n = n.return
    }
    if (Ce = e, ve = e = ln(e.current, null), Te = Qe = t, xe = 0, Si = null, Eu = ws = Mn = 0, ze = Zr = null, kn !== null) {
        for (t = 0; t < kn.length; t++) if (n = kn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var s = o.next;
                o.next = i, r.next = s
            }
            n.pending = r
        }
        kn = null
    }
    return e
}

function zh(e, t) {
    do {
        var n = ve;
        try {
            if (cu(), uo.current = Uo, Bo) {
                for (var r = le.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Bo = !1
            }
            if (Ln = 0, ke = we = le = null, Kr = !1, yi = 0, Cu.current = null, n === null || n.return === null) {
                xe = 1, Si = t, ve = null;
                break
            }
            e:{
                var o = e, s = n.return, l = n, a = t;
                if (t = Te, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a, c = l, p = c.tag;
                    if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var g = uf(s);
                    if (g !== null) {
                        g.flags &= -257, cf(g, s, l, o, t), g.mode & 1 && af(o, u, t), t = g, a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a), t.updateQueue = x
                        } else v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            af(o, u, t), Vu();
                            break e
                        }
                        a = Error(V(426))
                    }
                } else if (oe && l.mode & 1) {
                    var E = uf(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), cf(E, s, l, o, t), au(yr(a, l));
                        break e
                    }
                }
                o = a = yr(a, l), xe !== 4 && (xe = 2), Zr === null ? Zr = [o] : Zr.push(o), o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var h = Sh(o, a, t);
                            ef(o, h);
                            break e;
                        case 1:
                            l = a;
                            var d = o.type, m = o.stateNode;
                            if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (on === null || !on.has(m)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = kh(o, l, t);
                                ef(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            jh(n)
        } catch (C) {
            t = C, ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (1)
}

function Bh() {
    var e = jo.current;
    return jo.current = Uo, e === null ? Uo : e
}

function Vu() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ce === null || !(Mn & 268435455) && !(ws & 268435455) || bt(Ce, Te)
}

function Qo(e, t) {
    var n = $;
    $ |= 2;
    var r = Bh();
    (Ce !== e || Te !== t) && (Rt = null, Tn(e, t));
    do try {
        Hv();
        break
    } catch (i) {
        zh(e, i)
    } while (1);
    if (cu(), $ = n, jo.current = r, ve !== null) throw Error(V(261));
    return Ce = null, Te = 0, xe
}

function Hv() {
    for (; ve !== null;) Uh(ve)
}

function Wv() {
    for (; ve !== null && !hg();) Uh(ve)
}

function Uh(e) {
    var t = Wh(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, t === null ? jh(e) : ve = t, Cu.current = null
}

function jh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Fv(n, t), n !== null) {
                n.flags &= 32767, ve = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                xe = 6, ve = null;
                return
            }
        } else if (n = Ov(n, t, Qe), n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    xe === 0 && (xe = 5)
}

function yn(e, t, n) {
    var r = Z, i = rt.transition;
    try {
        rt.transition = null, Z = 1, Qv(e, t, n, r)
    } finally {
        rt.transition = i, Z = r
    }
    return null
}

function Qv(e, t, n, r) {
    do cr(); while ($t !== null);
    if ($ & 6) throw Error(V(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Eg(e, o), e === Ce && (ve = Ce = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zi || (Zi = !0, Qh(Ao, function () {
        return cr(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = rt.transition, rt.transition = null;
        var s = Z;
        Z = 1;
        var l = $;
        $ |= 4, Cu.current = null, zv(e, n), Oh(n, e), cv(Zl), Po = !!$l, Zl = $l = null, e.current = n, Bv(n), mg(), $ = l, Z = s, rt.transition = o
    } else e.current = n;
    if (Zi && (Zi = !1, $t = e, Wo = i), o = e.pendingLanes, o === 0 && (on = null), yg(n.stateNode), We(e, me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
        componentStack: i.stack,
        digest: i.digest
    });
    if (Ho) throw Ho = !1, e = va, va = null, e;
    return Wo & 1 && e.tag !== 0 && cr(), o = e.pendingLanes, o & 1 ? e === ya ? qr++ : (qr = 0, ya = e) : qr = 0, hn(), null
}

function cr() {
    if ($t !== null) {
        var e = xp(Wo), t = rt.transition, n = Z;
        try {
            if (rt.transition = null, Z = 16 > e ? 16 : e, $t === null) var r = !1; else {
                if (e = $t, $t = null, Wo = 0, $ & 6) throw Error(V(331));
                var i = $;
                for ($ |= 4, F = e.current; F !== null;) {
                    var o = F, s = o.child;
                    if (F.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (F = u; F !== null;) {
                                    var c = F;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $r(8, c, o)
                                    }
                                    var p = c.child;
                                    if (p !== null) p.return = c, F = p; else for (; F !== null;) {
                                        c = F;
                                        var f = c.sibling, g = c.return;
                                        if (Dh(c), c === u) {
                                            F = null;
                                            break
                                        }
                                        if (f !== null) {
                                            f.return = g, F = f;
                                            break
                                        }
                                        F = g
                                    }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var E = x.sibling;
                                        x.sibling = null, x = E
                                    } while (x !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, F = s; else e:for (; F !== null;) {
                        if (o = F, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                $r(9, o, o.return)
                        }
                        var h = o.sibling;
                        if (h !== null) {
                            h.return = o.return, F = h;
                            break e
                        }
                        F = o.return
                    }
                }
                var d = e.current;
                for (F = d; F !== null;) {
                    s = F;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null) m.return = s, F = m; else e:for (s = d; F !== null;) {
                        if (l = F, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ys(9, l)
                            }
                        } catch (C) {
                            ce(l, l.return, C)
                        }
                        if (l === s) {
                            F = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, F = w;
                            break e
                        }
                        F = l.return
                    }
                }
                if ($ = i, hn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
                    kt.onPostCommitFiberRoot(cs, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            Z = n, rt.transition = t
        }
    }
    return !1
}

function Cf(e, t, n) {
    t = yr(n, t), t = Sh(e, t, 1), e = rn(e, t, 1), t = Oe(), e !== null && (Pi(e, 1, t), We(e, t))
}

function ce(e, t, n) {
    if (e.tag === 3) Cf(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            Cf(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
                e = yr(n, e), e = kh(t, e, 1), t = rn(t, e, 1), e = Oe(), t !== null && (Pi(t, 1, e), We(t, e));
                break
            }
        }
        t = t.return
    }
}

function Yv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Te & n) === n && (xe === 4 || xe === 3 && (Te & 130023424) === Te && 500 > me() - Au ? Tn(e, 0) : Eu |= n), We(e, t)
}

function Hh(e, t) {
    t === 0 && (e.mode & 1 ? (t = ji, ji <<= 1, !(ji & 130023424) && (ji = 4194304)) : t = 1);
    var n = Oe();
    e = It(e, t), e !== null && (Pi(e, t, n), We(e, n))
}

function Gv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hh(e, n)
}

function Xv(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(V(314))
    }
    r !== null && r.delete(t), Hh(e, n)
}

var Wh;
Wh = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || je.current) Be = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, _v(e, t, n);
        Be = !!(e.flags & 131072)
    } else Be = !1, oe && t.flags & 1048576 && Gp(t, _o, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            fo(e, t), e = t.pendingProps;
            var i = hr(t, Me.current);
            ur(t, n), i = yu(null, t, r, e, i, n);
            var o = wu();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (o = !0, Do(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, pu(t), i.updater = gs, t.stateNode = i, i._reactInternals = t, sa(t, r, e, n), t = ua(null, t, r, !0, o, n)) : (t.tag = 0, oe && o && su(t), Ne(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (fo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Kv(r), e = ut(r, e), i) {
                    case 0:
                        t = aa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = pf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ff(null, t, r, e, n);
                        break e;
                    case 14:
                        t = df(null, t, r, ut(r.type, e), n);
                        break e
                }
                throw Error(V(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), aa(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), pf(e, t, r, i, n);
        case 3:
            e:{
                if (Th(t), e === null) throw Error(V(387));
                r = t.pendingProps, o = t.memoizedState, i = o.element, $p(e, t), Io(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated) if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    i = yr(Error(V(423)), t), t = hf(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = yr(Error(V(424)), t), t = hf(e, t, r, n, i);
                    break e
                } else for (Ye = nn(t.stateNode.containerInfo.firstChild), Ge = t, oe = !0, ft = null, n = eh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (mr(), r === i) {
                        t = zt(e, t, n);
                        break e
                    }
                    Ne(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return th(t), e === null && ra(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ql(r, i) ? s = null : o !== null && ql(r, o) && (t.flags |= 32), Ah(e, t), Ne(e, t, s, n), t.child;
        case 6:
            return e === null && ra(t), null;
        case 13:
            return Ph(e, t, n);
        case 4:
            return hu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gr(t, null, r, n) : Ne(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), ff(e, t, r, i, n);
        case 7:
            return Ne(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ne(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ee(Oo, r._currentValue), r._currentValue = s, o !== null) if (gt(o.value, s)) {
                    if (o.children === i.children && !je.current) {
                        t = zt(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var l = o.dependencies;
                    if (l !== null) {
                        s = o.child;
                        for (var a = l.firstContext; a !== null;) {
                            if (a.context === r) {
                                if (o.tag === 1) {
                                    a = Nt(-1, n & -n), a.tag = 2;
                                    var u = o.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var c = u.pending;
                                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                    }
                                }
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ia(o.return, n, t), l.lanes |= n;
                                break
                            }
                            a = a.next
                        }
                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (s = o.return, s === null) throw Error(V(341));
                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), ia(s, n, t), s = o.sibling
                    } else s = o.child;
                    if (s !== null) s.return = o; else for (s = o; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (o = s.sibling, o !== null) {
                            o.return = s.return, s = o;
                            break
                        }
                        s = s.return
                    }
                    o = s
                }
                Ne(e, t, i.children, n), t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, ur(t, n), i = it(i), r = r(i), t.flags |= 1, Ne(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = ut(r, t.pendingProps), i = ut(r.type, i), df(e, t, r, i, n);
        case 15:
            return Ch(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ut(r, i), fo(e, t), t.tag = 1, He(r) ? (e = !0, Do(t)) : e = !1, ur(t, n), qp(t, r, i), sa(t, r, i, n), ua(null, t, r, !0, e, n);
        case 19:
            return Vh(e, t, n);
        case 22:
            return Eh(e, t, n)
    }
    throw Error(V(156, t.tag))
};

function Qh(e, t) {
    return gp(e, t)
}

function bv(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function nt(e, t, n, r) {
    return new bv(e, t, n, r)
}

function Ru(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Kv(e) {
    if (typeof e == "function") return Ru(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ba) return 11;
        if (e === Ka) return 14
    }
    return 2
}

function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function mo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Ru(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case Qn:
            return Pn(n.children, i, o, t);
        case Xa:
            s = 8, i |= 8;
            break;
        case Ll:
            return e = nt(12, n, t, i | 2), e.elementType = Ll, e.lanes = o, e;
        case Ml:
            return e = nt(13, n, t, i), e.elementType = Ml, e.lanes = o, e;
        case Dl:
            return e = nt(19, n, t, i), e.elementType = Dl, e.lanes = o, e;
        case Jd:
            return xs(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Zd:
                    s = 10;
                    break e;
                case qd:
                    s = 9;
                    break e;
                case ba:
                    s = 11;
                    break e;
                case Ka:
                    s = 14;
                    break e;
                case Qt:
                    s = 16, r = null;
                    break e
            }
            throw Error(V(130, e == null ? e : typeof e, ""))
    }
    return t = nt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Pn(e, t, n, r) {
    return e = nt(7, e, r, t), e.lanes = n, e
}

function xs(e, t, n, r) {
    return e = nt(22, e, r, t), e.elementType = Jd, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function sl(e, t, n) {
    return e = nt(6, e, null, t), e.lanes = n, e
}

function ll(e, t, n) {
    return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function $v(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = js(0), this.expirationTimes = js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = js(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Lu(e, t, n, r, i, o, s, l, a) {
    return e = new $v(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pu(o), e
}

function Zv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: Wn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Yh(e) {
    if (!e) return un;
    e = e._reactInternals;
    e:{
        if (_n(e) !== e || e.tag !== 1) throw Error(V(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (He(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(V(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n)) return Qp(e, n, t)
    }
    return t
}

function Gh(e, t, n, r, i, o, s, l, a) {
    return e = Lu(n, r, !0, e, i, o, s, l, a), e.context = Yh(null), n = e.current, r = Oe(), i = sn(n), o = Nt(r, i), o.callback = t ?? null, rn(n, o, i), e.current.lanes = i, Pi(e, i, r), We(e, r), e
}

function Ss(e, t, n, r) {
    var i = t.current, o = Oe(), s = sn(i);
    return n = Yh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(i, t, s), e !== null && (mt(e, i, s, o), ao(e, i, s)), s
}

function Yo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ef(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Mu(e, t) {
    Ef(e, t), (e = e.alternate) && Ef(e, t)
}

function qv() {
    return null
}

var Xh = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Du(e) {
    this._internalRoot = e
}

ks.prototype.render = Du.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(V(409));
    Ss(e, t, null, null)
};
ks.prototype.unmount = Du.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dn(function () {
            Ss(null, e, null, null)
        }), t[Ft] = null
    }
};

function ks(e) {
    this._internalRoot = e
}

ks.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Cp();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
        Xt.splice(n, 0, e), n === 0 && Ap(e)
    }
};

function Nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Cs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Af() {
}

function Jv(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = Yo(s);
                o.call(u)
            }
        }
        var s = Gh(t, r, e, 0, null, !1, !1, "", Af);
        return e._reactRootContainer = s, e[Ft] = s.current, pi(e.nodeType === 8 ? e.parentNode : e), Dn(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = Yo(a);
            l.call(u)
        }
    }
    var a = Lu(e, 0, !1, null, null, !1, !1, "", Af);
    return e._reactRootContainer = a, e[Ft] = a.current, pi(e.nodeType === 8 ? e.parentNode : e), Dn(function () {
        Ss(t, a, n, r)
    }), a
}

function Es(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function () {
                var a = Yo(s);
                l.call(a)
            }
        }
        Ss(t, s, e, i)
    } else s = Jv(n, t, e, i, r);
    return Yo(s)
}

Sp = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Br(t.pendingLanes);
                n !== 0 && (qa(t, n | 1), We(t, me()), !($ & 6) && (wr = me() + 500, hn()))
            }
            break;
        case 13:
            Dn(function () {
                var r = It(e, 1);
                if (r !== null) {
                    var i = Oe();
                    mt(r, e, 1, i)
                }
            }), Mu(e, 1)
    }
};
Ja = function (e) {
    if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
            var n = Oe();
            mt(t, e, 134217728, n)
        }
        Mu(e, 134217728)
    }
};
kp = function (e) {
    if (e.tag === 13) {
        var t = sn(e), n = It(e, t);
        if (n !== null) {
            var r = Oe();
            mt(n, e, t, r)
        }
        Mu(e, t)
    }
};
Cp = function () {
    return Z
};
Ep = function (e, t) {
    var n = Z;
    try {
        return Z = e, t()
    } finally {
        Z = n
    }
};
Hl = function (e, t, n) {
    switch (t) {
        case"input":
            if (Ol(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = hs(r);
                        if (!i) throw Error(V(90));
                        tp(r), Ol(r, i)
                    }
                }
            }
            break;
        case"textarea":
            rp(e, n);
            break;
        case"select":
            t = n.value, t != null && or(e, !!n.multiple, t, !1)
    }
};
cp = Tu;
fp = Dn;
var ey = {usingClientEntryPoint: !1, Events: [Ri, bn, hs, ap, up, Tu]},
    Nr = {findFiberByHostInstance: Sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, ty = {
        bundleType: Nr.bundleType,
        version: Nr.version,
        rendererPackageName: Nr.rendererPackageName,
        rendererConfig: Nr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Bt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = hp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Nr.findFiberByHostInstance || qv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qi.isDisabled && qi.supportsFiber) try {
        cs = qi.inject(ty), kt = qi
    } catch {
    }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ey;
Ze.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nu(t)) throw Error(V(200));
    return Zv(e, t, null, n)
};
Ze.createRoot = function (e, t) {
    if (!Nu(e)) throw Error(V(299));
    var n = !1, r = "", i = Xh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Lu(e, 1, !1, null, null, n, !1, r, i), e[Ft] = t.current, pi(e.nodeType === 8 ? e.parentNode : e), new Du(t)
};
Ze.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
    return e = hp(t), e = e === null ? null : e.stateNode, e
};
Ze.flushSync = function (e) {
    return Dn(e)
};
Ze.hydrate = function (e, t, n) {
    if (!Cs(t)) throw Error(V(200));
    return Es(null, e, t, !0, n)
};
Ze.hydrateRoot = function (e, t, n) {
    if (!Nu(e)) throw Error(V(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Xh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Gh(t, null, e, 1, n ?? null, i, !1, o, s), e[Ft] = t.current, pi(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ks(t)
};
Ze.render = function (e, t, n) {
    if (!Cs(t)) throw Error(V(200));
    return Es(null, e, t, !1, n)
};
Ze.unmountComponentAtNode = function (e) {
    if (!Cs(e)) throw Error(V(40));
    return e._reactRootContainer ? (Dn(function () {
        Es(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Ft] = null
        })
    }), !0) : !1
};
Ze.unstable_batchedUpdates = Tu;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Cs(n)) throw Error(V(200));
    if (e == null || e._reactInternals === void 0) throw Error(V(38));
    return Es(e, t, n, !1, r)
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (n) {
            console.error(n)
        }
    }

    t(), e.exports = Ze
})(q0);
var Tf = Pl;
Tl.createRoot = Tf.createRoot, Tl.hydrateRoot = Tf.hydrateRoot;
const Hn = O;

function ny({title: e, titleId: t, ...n}, r) {
    return Hn.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? Hn.createElement("title", {id: t}, e) : null, Hn.createElement("path", {d: "M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"}), Hn.createElement("path", {d: "M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"}), Hn.createElement("path", {d: "M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"}))
}

const ry = Hn.forwardRef(ny);
var iy = ry;
const go = O;

function oy({title: e, titleId: t, ...n}, r) {
    return go.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? go.createElement("title", {id: t}, e) : null, go.createElement("path", {
        fillRule: "evenodd",
        d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
        clipRule: "evenodd"
    }))
}

const sy = go.forwardRef(oy);
var ly = sy;
const jr = O;

function ay({title: e, titleId: t, ...n}, r) {
    return jr.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? jr.createElement("title", {id: t}, e) : null, jr.createElement("path", {d: "M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z"}), jr.createElement("path", {
        fillRule: "evenodd",
        d: "M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z",
        clipRule: "evenodd"
    }))
}

const uy = jr.forwardRef(ay);
var cy = uy;
const Hr = O;

function fy({title: e, titleId: t, ...n}, r) {
    return Hr.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? Hr.createElement("title", {id: t}, e) : null, Hr.createElement("path", {
        fillRule: "evenodd",
        d: "M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z",
        clipRule: "evenodd"
    }), Hr.createElement("path", {d: "M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"}))
}

const dy = Hr.forwardRef(fy);
var py = dy;
const vo = O;

function hy({title: e, titleId: t, ...n}, r) {
    return vo.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? vo.createElement("title", {id: t}, e) : null, vo.createElement("path", {
        fillRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        clipRule: "evenodd"
    }))
}

const my = vo.forwardRef(hy);
var gy = my, vy = iy, yy = ly, wy = cy, xy = py, Sy = gy;
const bh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAYCAYAAADNhRJCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX6SURBVHgB7VldchtFEO6RRBXFk3IDiQvEnACZC8ThiUpZeJ3CIRVTWOYAseQDxAoVqBSk8NoWKZ6wfQGscAEEB8DLCSyeeIik4eudmd3Z9ay0kghJVfZzrXd3fnpn+uvp6R4RFShQoECBAgUYgt4QfEJUKxFV+ZoQDZ8TDWhOsIwKLn5eVMbrhGy18E9W6eU/OyRkA0UroKiKwiFRaUByckaT8rl4+jSw+4UkNok83A5zfYhoFZ328NjQRf0TlGW196DUMdGleS8T1X2iQNcxYTv8KLXyLXCbPtp3TPsM+aEM9IcGqDpNxgbRDbT9U7dDF/oKY++mZa4rvRzi34aecwfPHQptI8QVZL4PmcMp42LUx+p7LOOiR/RRVnv54HO+gbxJWxGXCYm/jvj2u44pKNECkGpCBo31mNBrGBG1rVffjwlkcn+DrLaDQAaXeWhzAflrLtmQsWJk0HUCEzLuoC0YuML7vq5joh56qX5NVeEZAoHLXnIOjBuQ+ZCmAPUC1y+UA3J7S4C8Q6y+7gwC1bgFdLa99YMpcJHI1uVnXeymMKk+Ja3QqWT1RfowGizREd89ReAFWeShro/rsTaQviWiBhmnd0LXEiOHjDNbBia6dqKeu5Z8JuMRXRtyRJAUSYO10coy3mY0RKdxJiAf3OOvwLMJj+aC2JTb98KxVxy1Q0x2c5YIVpZ2qzzrDQ/W6qfcSzM5kUCTH65OYU0Qitx8rowkgpciCe7rFLe61YfrjNUOMZ7bvST5oQwY3Smuc7OapHKj+yImwAMZx9z3U/W+Z3kG/1gbngNCKLL7qW8y6rNWajiW+/fZQdepPNmjxdCCjK8XcqeMirJoQ1p1pPakNKLBCa1ET60s46p4k9lNE8hAQSCTxlSDkm/xg14BNUt2K02gkQESPrDdYU/dwhVrukMJjzwK3VJdxmOW5dj1ZqHRTM0b/QXm9CXlWIUgTyxBIENQabzjWonVZmRQqW9i8r7e03AfQplHQgUmpO9t0zal6MBY9DjpgoY/OgILAyamqcgJ+0jlts/Jct8oG5xkrxYnKhwDwk1OlDFVpdpbW3wXsdx9f0pARcqA2RPwvsp7/dBT5bz6W5QfN2kZCHHLtRJ5YIeuK0UAK8O3+6X2CM967psHmdzDZqYAaPO7o2+0+UPpf2X19fSY+LL3VJ9CD5AOcg5mBDPpcZmVHAU5E7UKf46b0F2ajRVaDrWF3SnDVyT0zbvZI72UyyxnBwezIjHGcEb9VVYFlLuGcVzwVVYuLoIjyDGYFsxEbcqKxEC/h0GOVKmSIeVITl/J/xlc7jR4mZH3vetQqM6hGvo1tPqRCtENorRCtx+aOpFj37CjWzz/rR+HlryFLdkR5ITjPc7hnsfKeO4KlUYIbcA1XX3JhjuyArGsARDrRuTYP7MxcK7EnyDYdfkOEnVAEVhFniutMHgnGfpXm1P2D08ppWHehYpQGWdW2cq0PHUaOMiBAvoiHj+r9de8fYWae18XNUiNN1zJo1yrkD8nz2kpiMFS7pTioUREaTda0+WDdNTo61MUq+jARaSngo0LqygKjnpJ5YXkmsj1/0RZuVXe92zjDo7zBlqTssT1mBaHpLHYz4pOD7N7hTmXvZrCdGOsotPEHlfKiDwx8c1Uon4AEjYQFLzgF5ByMx1Eoc9t+x31u+U4V+QI86ypUgcOhNhlc9TXoFcIn8Io/JLinFliXB/n7Y8zUJJfbAXcH+t3h+aFwFaAc1QniZSRYmhwNJgg0VfpRpT8a2RaJNoHHvZdm0gd3rv2tzCR91ORLB9uI+Jc1YcANV3cENnE/UGvAOxW19XRIRvt5byH7uLJ91Juf7YLDUDvpY38PSe+ePKsTbTg2akLlesJ+1Q3gcbBidr4N8m9fzB5HT4wdyXyDFYY6le1O8+SwcdwqydT8tFl0VNX+3jOfNVAfPNM4sjBw8qaFRUDkgOqXfSJDkIEvSHw1KlPuBJHOpCiOWH/FLWojNeJ8BiOx18a3wKpONCYWD9FYYUL8YIq73VFtzsr7SpQoECBAgXeSvwLNGoT+J0cw4MAAAAASUVORK5CYII=";
var Sa = {}, ky = {
    get exports() {
        return Sa
    }, set exports(e) {
        Sa = e
    }
};
(function (e, t) {
    (function (r, i) {
        e.exports = i(O)
    })(typeof self < "u" ? self : V0, function (n) {
        return function (r) {
            var i = {};

            function o(s) {
                if (i[s]) return i[s].exports;
                var l = i[s] = {i: s, l: !1, exports: {}};
                return r[s].call(l.exports, l, l.exports, o), l.l = !0, l.exports
            }

            return o.m = r, o.c = i, o.d = function (s, l, a) {
                o.o(s, l) || Object.defineProperty(s, l, {configurable: !1, enumerable: !0, get: a})
            }, o.n = function (s) {
                var l = s && s.__esModule ? function () {
                    return s.default
                } : function () {
                    return s
                };
                return o.d(l, "a", l), l
            }, o.o = function (s, l) {
                return Object.prototype.hasOwnProperty.call(s, l)
            }, o.p = "", o(o.s = 0)
        }([function (r, i, o) {
            Object.defineProperty(i, "__esModule", {value: !0});
            var s = o(1), l = a(s);

            function a(u) {
                return u && u.__esModule ? u : {default: u}
            }

            i.default = l.default
        }, function (r, i, o) {
            Object.defineProperty(i, "__esModule", {value: !0});
            var s = Object.assign || function (E) {
                for (var h = 1; h < arguments.length; h++) {
                    var d = arguments[h];
                    for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (E[m] = d[m])
                }
                return E
            }, l = function () {
                function E(h, d) {
                    for (var m = 0; m < d.length; m++) {
                        var w = d[m];
                        w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(h, w.key, w)
                    }
                }

                return function (h, d, m) {
                    return d && E(h.prototype, d), m && E(h, m), h
                }
            }(), a = o(2), u = c(a);

            function c(E) {
                return E && E.__esModule ? E : {default: E}
            }

            function p(E, h) {
                var d = {};
                for (var m in E) h.indexOf(m) >= 0 || Object.prototype.hasOwnProperty.call(E, m) && (d[m] = E[m]);
                return d
            }

            function f(E, h) {
                if (!(E instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function g(E, h) {
                if (!E) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return h && (typeof h == "object" || typeof h == "function") ? h : E
            }

            function v(E, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                E.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: E,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(E, h) : E.__proto__ = h)
            }

            var x = function (E) {
                v(h, E);

                function h(d) {
                    f(this, h);
                    var m = g(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, d));
                    return m.smoothScroll = m.smoothScroll.bind(m), m
                }

                return l(h, [{
                    key: "componentDidMount", value: function () {
                        o(3).polyfill()
                    }
                }, {
                    key: "smoothScroll", value: function (m) {
                        var w = this;
                        m.preventDefault();
                        var C = function () {
                            return 0
                        };
                        typeof this.props.offset < "u" && (this.props.offset && this.props.offset.constructor && this.props.offset.apply ? C = this.props.offset : C = function () {
                            return parseInt(w.props.offset)
                        });
                        var P = m.currentTarget.getAttribute("href").slice(1), R = document.getElementById(P),
                            S = R.getBoundingClientRect().top + window.pageYOffset;
                        window.scroll({top: S - C(), behavior: "smooth"}), this.props.onClick && this.props.onClick(m)
                    }
                }, {
                    key: "render", value: function () {
                        var m = this.props;
                        m.offset;
                        var w = p(m, ["offset"]);
                        return u.default.createElement("a", s({}, w, {onClick: this.smoothScroll}))
                    }
                }]), h
            }(a.Component);
            i.default = x
        }, function (r, i) {
            r.exports = n
        }, function (r, i, o) {
            (function () {
                function s() {
                    var l = window, a = document;
                    if ("scrollBehavior" in a.documentElement.style && l.__forceSmoothScrollPolyfill__ !== !0) return;
                    var u = l.HTMLElement || l.Element, c = 468, p = {
                        scroll: l.scroll || l.scrollTo,
                        scrollBy: l.scrollBy,
                        elementScroll: u.prototype.scroll || x,
                        scrollIntoView: u.prototype.scrollIntoView
                    }, f = l.performance && l.performance.now ? l.performance.now.bind(l.performance) : Date.now;

                    function g(S) {
                        var D = ["MSIE ", "Trident/", "Edge/"];
                        return new RegExp(D.join("|")).test(S)
                    }

                    var v = g(l.navigator.userAgent) ? 1 : 0;

                    function x(S, D) {
                        this.scrollLeft = S, this.scrollTop = D
                    }

                    function E(S) {
                        return .5 * (1 - Math.cos(Math.PI * S))
                    }

                    function h(S) {
                        if (S === null || typeof S != "object" || S.behavior === void 0 || S.behavior === "auto" || S.behavior === "instant") return !0;
                        if (typeof S == "object" && S.behavior === "smooth") return !1;
                        throw new TypeError("behavior member of ScrollOptions " + S.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }

                    function d(S, D) {
                        if (D === "Y") return S.clientHeight + v < S.scrollHeight;
                        if (D === "X") return S.clientWidth + v < S.scrollWidth
                    }

                    function m(S, D) {
                        var M = l.getComputedStyle(S, null)["overflow" + D];
                        return M === "auto" || M === "scroll"
                    }

                    function w(S) {
                        var D = d(S, "Y") && m(S, "Y"), M = d(S, "X") && m(S, "X");
                        return D || M
                    }

                    function C(S) {
                        var D;
                        do S = S.parentNode, D = S === a.body; while (D === !1 && w(S) === !1);
                        return D = null, S
                    }

                    function P(S) {
                        var D = f(), M, Y, j, B = (D - S.startTime) / c;
                        B = B > 1 ? 1 : B, M = E(B), Y = S.startX + (S.x - S.startX) * M, j = S.startY + (S.y - S.startY) * M, S.method.call(S.scrollable, Y, j), (Y !== S.x || j !== S.y) && l.requestAnimationFrame(P.bind(l, S))
                    }

                    function R(S, D, M) {
                        var Y, j, B, K, X = f();
                        S === a.body ? (Y = l, j = l.scrollX || l.pageXOffset, B = l.scrollY || l.pageYOffset, K = p.scroll) : (Y = S, j = S.scrollLeft, B = S.scrollTop, K = x), P({
                            scrollable: Y,
                            method: K,
                            startTime: X,
                            startX: j,
                            startY: B,
                            x: D,
                            y: M
                        })
                    }

                    l.scroll = l.scrollTo = function () {
                        if (arguments[0] !== void 0) {
                            if (h(arguments[0]) === !0) {
                                p.scroll.call(l, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : l.scrollX || l.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : l.scrollY || l.pageYOffset);
                                return
                            }
                            R.call(l, a.body, arguments[0].left !== void 0 ? ~~arguments[0].left : l.scrollX || l.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : l.scrollY || l.pageYOffset)
                        }
                    }, l.scrollBy = function () {
                        if (arguments[0] !== void 0) {
                            if (h(arguments[0])) {
                                p.scrollBy.call(l, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
                                return
                            }
                            R.call(l, a.body, ~~arguments[0].left + (l.scrollX || l.pageXOffset), ~~arguments[0].top + (l.scrollY || l.pageYOffset))
                        }
                    }, u.prototype.scroll = u.prototype.scrollTo = function () {
                        if (arguments[0] !== void 0) {
                            if (h(arguments[0]) === !0) {
                                if (typeof arguments[0] == "number" && arguments[1] === void 0) throw new SyntaxError("Value could not be converted");
                                p.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
                                return
                            }
                            var S = arguments[0].left, D = arguments[0].top;
                            R.call(this, this, typeof S > "u" ? this.scrollLeft : ~~S, typeof D > "u" ? this.scrollTop : ~~D)
                        }
                    }, u.prototype.scrollBy = function () {
                        if (arguments[0] !== void 0) {
                            if (h(arguments[0]) === !0) {
                                p.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                                return
                            }
                            this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            })
                        }
                    }, u.prototype.scrollIntoView = function () {
                        if (h(arguments[0]) === !0) {
                            p.scrollIntoView.call(this, arguments[0] === void 0 ? !0 : arguments[0]);
                            return
                        }
                        var S = C(this), D = S.getBoundingClientRect(), M = this.getBoundingClientRect();
                        S !== a.body ? (R.call(this, S, S.scrollLeft + M.left - D.left, S.scrollTop + M.top - D.top), l.getComputedStyle(S).position !== "fixed" && l.scrollBy({
                            left: D.left,
                            top: D.top,
                            behavior: "smooth"
                        })) : l.scrollBy({left: M.left, top: M.top, behavior: "smooth"})
                    }
                }

                r.exports = {polyfill: s}
            })()
        }])
    })
})(ky);
const As = Bd(Sa), Ht = ({page: e, selectedPage: t, setSelectedPage: n}) => {
    const r = e.toLowerCase().replace(/ /g, "");
    return T(As, {
        className: `${t === r ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`,
        href: `#${r}`,
        onClick: () => n(r),
        children: e
    })
}, Kh = e => {
    const [t, n] = O.useState(!1);
    return O.useEffect(() => {
        const r = window.matchMedia(e);
        r.matches !== t && n(r.matches);
        const i = () => n(r.matches);
        return window.addEventListener("resize", i), () => window.removeEventListener("resize", i)
    }, [t, e]), t
};
var Xe = (e => (e.Home = "home", e.Benefits = "benefits", e.OurClasses = "ourclasses", e.ContactUs = "contactus", e))(Xe || {});
const _u = ({
                children: e,
                setSelectedPage: t
            }) => T("div", {
        children: T(As, {
            className: "rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white",
            onClick: () => t(Xe.ContactUs),
            href: `#${Xe.ContactUs}`,
            children: e
        })
    }), Cy = ({selectedPage: e, setSelectedPage: t, isTopOfPage: n}) => {
        const r = "flex items-center justify-between", [i, o] = O.useState(!1), s = Kh("(min-width: 1060px)");
        return G("nav", {
            children: [T("div", {
                className: `${r} ${n ? "" : "bg-primary-100 drop-shadow-xl"} fixed top-0 z-30 w-full py-6`,
                children: T("div", {
                    className: `${r} mx-auto w-5/6`,
                    children: G("div", {
                        className: `${r} w-full gap-16`,
                        children: [T("img", {alt: "logo", src: bh}), s ? G("div", {
                            className: `${r} w-full`,
                            children: [G("div", {
                                className: `${r} gap-8 text-sm`,
                                children: [T(Ht, {
                                    page: "Home",
                                    selectedPage: e,
                                    setSelectedPage: t
                                }), T(Ht, {
                                    page: "Benefits",
                                    selectedPage: e,
                                    setSelectedPage: t
                                }), T(Ht, {
                                    page: "Our Classes",
                                    selectedPage: e,
                                    setSelectedPage: t
                                }), T(Ht, {page: "Contact Us", selectedPage: e, setSelectedPage: t})]
                            }), G("div", {
                                className: `${r} gap-8`,
                                children: [T("p", {children: "Sing In"}), T(_u, {
                                    setSelectedPage: t,
                                    children: "Become a member"
                                })]
                            })]
                        }) : T("button", {
                            className: "rounded-full bg-secondary-500 p-2",
                            onClick: () => o(!i),
                            children: T(yy, {className: "h-6 w-6 text-white"})
                        })]
                    })
                })
            }), !s && i && G("div", {
                className: "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl",
                children: [T("div", {
                    className: "flex justify-end p-12",
                    children: T("button", {onClick: () => o(!i), children: T(Sy, {className: "h-6 w-6 text-grey-400"})})
                }), G("div", {
                    className: "ml-[33%] flex flex-col gap-10 text-2xl",
                    children: [T(Ht, {page: "Home", selectedPage: e, setSelectedPage: t}), T(Ht, {
                        page: "Benefits",
                        selectedPage: e,
                        setSelectedPage: t
                    }), T(Ht, {page: "Our Classes", selectedPage: e, setSelectedPage: t}), T(Ht, {
                        page: "Contact Us",
                        selectedPage: e,
                        setSelectedPage: t
                    })]
                })]
            })]
        })
    }, Ey = "/assets/HomePageText-13d208fd.png", Ay = "/assets/HomePageGraphic-cc6a9640.png",
    Ty = "/assets/SponsorRedBull-9908d131.png",
    Py = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAcCAYAAAB8pKH7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA02SURBVHgB3VoLcFTVGT7n3ru7dzfmsRCEAikFgRYsUgiVUnHE+po6mEDHCHktwWpaZup0qo6O1VHUiXVGWx+oIBVMsnnZRaWi1aJToqLWUgdLcXwQETRQJZCEPPbu697T7+wj3sdZkjDWgv/M3Xvvuef85//P/5//dZZGa2q+R75i8NTXf0BOAThWWZnnk+ViRsg5eD3ka2zcQk4jUAzDeJcw5iFfIbCyMoWGQjr5GoGtXj0unEj8SCFkLoSxkDH2AzRPAm+U4gHX07idXsKJxGKLPG73YsrYLXj/VpZ+R8DcAJhmuA/iXcLzmbgX8mdyCgAE80MQ8qDB2FRCIY+kSExAqYucZqD429p24747EghA2dg6YS/DuEltbm4wN/WXlY1zeTznGpTWYRnmkv8z5ASDf2ElJa9H8/PvgOLc4OjAWIKcZjCk9VFNa2HZOklSv70tNxTqUpuaXvBGIsVQ1BfJKQD0uef6oSwPQMl67N9gYwfIaQZDwskPhbph2o6JOoHZaDYE3Ld4VLUUu+df5BSA5zXtcyhLr70djMbJaQYWfwGmDgl7MXZCxujGjXGMvZOcAnBVKhDpIt8AUMwvMGvHRZ2YJA1rr92a9kJUVfcDxzT7t8Grr57oikYn6ZSqhiyHfYbxGQ0Gj5BRAFuyRIlOmTKFGobbEwy+P9QO3NFY7OwEorL44OA//Fu38l3zPzdh4ZUri6gsz8TajHMT0qeDJ3dOzgdcUUcyHhGtm/h8RZphFLokSUFAE9MZO+KPxzszka4lpIlUV7+Exb3Mjofo+hJvS8trw00Yrq6ugM135TQ2NpKSkjMi+fk3o7kC11QHcYTskSm9r6+398/j4Cts3yhZuXJyWFGKZUk6D2Z1IZoX4PIiOPmdt7n5t3D+uVp+fiMYKM3wgZ+PPJHI7IjHsx1m4Ce2KeslXd+qS1IVnovRdwL6uDHXezDn61RF2ULr63uH5TEQWIH+t+Hx+/ZvsB5doO8uTzS6PlsqcaSmZkKert+EeX+O1zxBl37wu8PF2MMW4WBxt6Fhqa2zDu24wNfQ8Ia5cQCTyInEter06XV07VrD8m3VqtWyYdSRL0PzL0B4HdP1PuBagzkWmrp3SInEMk9r63v8RauuvgWE34g+Y4gIIBxVkjZEKH0F5naG+RPGtfmCwfJwVdVOzHceGR0cQs63PKe5eZfoIwO/UV1vxRxL0nP1QkgPSpTuw/PdFovB2HbV7y+h69ZZfDXWdzHoCuH7hDSOQ+BzPdqOMsNYhPcApakcAAJ61uJz8CI2X4wZjjZdnwtVuYu0t1twQLOug2CeIBnBUBplicRytbFxHTS+4VgkciGIeNM0ZDpTlJ2xqqpkOB6Ox5vcjPG4/kMhKZRKGoRgFwynCIJ7iGSHvVSSLgPdl+C5jjpD60mISl/VVq26yD5woLx8fCSReC0jmDRft3ubmu6EiW3B4qyyDKD0Uq23t4GZLFP/ihWzMOeOjGBw19DvZ95gsA5r8zhw1aDt/GR7GuwJpFMIQKPouiXKZsXFLpmxKnvHWHX1AizQH8x4kRTu8LW2vpV5LwqF+OTXmxHiuQARRTOrrfWNbWv7TEGIDiJrUp+IjW9aDo4XOYiEeYLw3yZZAN8/UhsatsM8v4IFuQ2McgWwC8gLDW7uXbPGn2n4U1mZLCtKEBObleGQV1U3DA2KRDh/3WZEWIBSuImk0NjatZLidj8GHIqJnj1eTXvHPMbX3PwGdmKVCYedByfAjxT01NQUdJeV5WMBC7VZs67HRJWWgbW1LvTbRE0EpAYb2+z4vGedtUtibJ+NmdlaOHzPUB9J2g9NG7SPxYIWQTgf4mETiG3hfoa3o++jNAv9IvBOn/4UeLjf3g4c4z39/Tdm3ku93hLcLrH1CZkdf9K/MGZRDBCi4lbLn7V9+yaCvsXWiagXv7J9fiRofwX+nfx5JKUXGVq2WdX13dCWdzRNexcCuJfYgoloOHwRFu4c21iG2TvsCJM+SpL+Zm8GwUvZ0qW+JJGRSBTCjjnGUtriOXp0LszANfAvlSg9cVt9lR6NPkdOAJJNcJwGqusbwIQmmGNI8RCF3ej4TsjrgraPiRNmahUVU3CfwmxKi/6zox5PLdbMso4TgsFBtG2Gif3YIhzDtuAmYt/HgHewCzqgAf2iUgg4Xy4YqsHOHxbhBNP/dMyDqC5SUFDMn/1+f5wKfCBofIu++OKQo6WbNnVDSKEzQqHPyQkA5tXRpra0fIrWT4mTlyl9gcDY3ooKP3hf4KBTkg4KxohSgzHE7Z6qpCyAnQAFAlsXCwSaBgOBeRa6gsF6z7RpN1ukCXuHtXcwocPB3+pubv47f/m8ujoH8d91kOrtjIe2XxI3jzoJjhnxuDDnkGT5Ewjb0QxNOItwzezpYUxVmUNbRMHJSIBSBypuBrFtPsPjd+3fZF2fhlB/PB7d9m9xw2hARBjBGsjpHSEDfz5hAheZSORoXu8e5HnHQEKhvQOYqYCJv0ILBJ5PJBJbzujrewn9wpxTq1ljTMQAScjyUDvfdtDUe0HGDlvXmYKxCV1VI0QAIEqYU1DOJIecHKH/kJJlspMCoQmHMnaL2mGOC6kgP+MADU4KzOBpBkpbuMIIJP7DrYv9Ap6efOxu8MUDpWw+MReElCuStCXq978Zr6o6nzdadg4mUwTaTxF+OhiDP3gWEv/pEMGU5gl513WhprNsJSHDGHKSVBA9Yt4RO30zSALnm5yDUiEdugyN1HW36FtC10vyWltHdaCoer33I+CZjPl+SbL5eppkbi4qKc8jpL/CnueIzjxkEOogslvTmnG7EHlOptTg2CGMF7QZEy4KTvnExVRJSuFxu7lWOgUh2N0jAbtDzgDWwydqlwzjOGgRCg6R5FgySuDRHYKYX2GNV+L1/RP1BdN52J2tFuFgLbyizsjgHe08X0G+8GomfMXYg4KhStzlEuKkiiJc5HjazPAEgIp3iVDYwwGYFQoHVYEzHY3cVuXm7jV0vUc0Bso6n5wMDcCMpDWkRiJzMMV5mKdRqIApEiZahUNprhBplnYbiKIvjy8azRPiNAxRe9xDaVLIxT09XDKO7Z9tkYcDMOuwCryYCt6KHJ0p/ahg/foel9u9KwuulWwUOzhaXV0WDQRKh9AjL/I1Nb2JnbQKDM4Eom0iGQ0xjySSZKtnwW4Nu40Rqr4laFbjkvQdUX84UMeiYP79XyCPSr74/XxrOQQBn3Ny/3eQJIdwtEmTeCnFcTSPZXqF3/kfVVgqmrPDPERrC8gIAfZ5OVKHtbxSYP+GA8sOFGtXIDx3FJbNnTnxE0XI4RtzyLAU6FuZrYSRnIDSs+06wRUBTu9Ce18I+Ml0eYccHxjwGKks20pLFh8xLKQjLBtt5cTmZ6HBvbDDd5ne6wTY4Hakh/pXrx5HRgjYobMGOzouFX4Dz+D9ZXt7UjiolZGBwcEZRBwQcDgXmkJOBDltbYdR3r9f8KnEKCy0mgBuYqBNliZCXvP29T2WeXdTmkMFPhCI8nCGQ0YLzJavJEtRlAasZCGJkqS7zWdNvs7OTbiJzNsiJZHYimR1pmAuyivQWLP7TM0e2NDHwtdcM1mAiztSiyUB77uVcGUlZfv3uxRZ/g0R+ybesQRfrkQ5/2k8YxYkt/X1jn6HDx58YMLkyRdATcxnQgtil19+sQbNUJEHhpF4RjXtYmiSeZd2enU9wP8DgGSMIMKjMUoXKwL/gt20mEczYLwf8zDkXGQkQG2Kp6rqHcR8JgPBYDc8imLkI5Zx7e2JKI5AdBwXgOY5NrQ/xrnLXhQ4X+CVC7zzE+H8iGFcDK2fz/gxCVBk6kOM500oM2lVVdernZ07OW7+PVZZuQzjzbXKGIi5gTP/SHTGjPkIWxYSmtXHQZHpk7j/AtceXHcTQRI5tb090l1bu0INhx9H/zKS2pkScP8RuGvwvBfXlbD/N6cVgf/sxE8VRSkljYabuwAEU0LEi7wwEo/zBPhVkioQPkNGAoyN7S8vP1tyudw4dONnShXsy2+8vHKPp6vr9ygNOep5noaG96CYpeBhI/peRKxlLhfwLEPDsjQu/jsAwazp7OpqgzliYSv987A2L0eKinZBwbo1Ss+UUkriTS8IP42+1tvQ0K7gqJX/4zOMBdsxAhYlBAdz+gYHsxZMx2zceBwHUzUxXX/a4H9RYmw+mPo2FHM7EpsuDJzAUqHOu9DUh109PVuo6SSUl4GM1MHV3mxzpI49aTGuo6LvGL/NRakMJzyVpkowvP94l6K8zXjeJUlqWjB9oOcZ+L8N2IFZjxs4IG345FBtbalf07gQfg28c81/xkznE4eTSqwoT3jr6w8M0UvprVDQHeD3cr5+lP/ZEWYxU1FiqR33Aeh9yifLQdrQ8DGBRTiphG40gLPyMQlVncOPHRKGQd1I7rAr/k1bW4+SrwF48RLbfjZKUIUwEypsu47a2AAEdcB94EAHNy3kJIChxoicbDoEW4BdEvPGYgcp/O6IxnL9KitLBTu5uQrZvHlAdNzxXy/q1+QfPFz/AAAAAElFTkSuQmCC",
    Vy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAaCAYAAACATbNJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAecSURBVHgB7VpvbFvVFT/3vWf7OYnbDLbSisBUOrZ16lb+bmjsA2Nr+TBW8WEZA2zXo90HmPhTVKGiAioIEOUDIBUVFNQmtZWkUooQREjlj0QBIUEFqEBLCypt+CMopG1oUsd+z77v8LsOz3qOX4nt2Ekt8ZOe7593fd6959xz7r3nXJGOx1dThWgxzT7R1TXurWNmYSUSyxwp16P4OyFEGGmWhDggmB8KLVq0U2zY4JyK5ng8/jDaXVn2glmCxqfScV5ute1nxMDASb//j1xzTXs4Eullol9QZWDS9WvDPT1DEwUiuXixlrvkkrdKvk70WEsqtT0Xj6vyX/PMG73vZT6/oq2//5tixY03qmRONpd7xfsxR4inWpPJrSpvxWIq+T2YscVLS5fy5mBf37tuRToaFUge0IRYRhWMx9CYn6YKkRkZeQnJ58V/b9hgZGKx2yG4h/AEPE1bwYbLwYhnMwcPPsGJxHrR05P1o4nv/wrtLi17IdQ46DJd027ImmZiPBZbCaZ+Xvb/QEADUy5G67OoMrDI542SikCh694+sEY0X2XkRLlt8ntbCLOE6tiYmhAamealk8anxl0QopAFaiFMohJaUtNaSv4zkZxLfnzxGY9G04B1+PAtSB7BEzhFkyCEuyYnZYymhyugrW9mrr/+PGo+/DnT2bmQGoiahQjtMh3HWQ8hiSmaCsy/+zgeP5OmAyE6WIibof3TmnizAE2Ew1dTA2GU1TCnwawjfo1Z1/NuPq+0g6goGLW2QFu6DE0bkMz/dJhv8Qh4QcZxliPtpykAOu+z4wwKTWsDvU4I72z3naZp/zt64MCjyH7l1s2ZPz9tnzjxWF5KZfJIh5lD/9dOGtMW9Odrt9Ri28dp5iBg7q9DuommA+wxsO/Y4fOGDZ/GfWD4Wj86Z0iZdvPYcJxfSooP26HQXeEtW47zmjVvWsPDyyGQ3xbJatpvqBI4zgetvb33qCzM5/NYP16kH8w16M1pCwTUd4tCFJs2WUiKm44Tq1adEbTttZMGuS3Q2/sGzRIwGS+C5WrP2fZ3VCOgDR+6fJmMMiFCeawze3tHaQrAlJolllSIsdHR0UwhP3euxceOHSvs8Vwwh6hK5EOhvXoudwLf+blbhx1bOzUfghkpl4HZA9QAnPbrCwToUPNDzfbrjI0bp9o/1IRm2yQ0M67Irlt3NjUAPwlxhgAVbMfB/0pqAMrWRKx17XYicYFbtqS0IqnUfpoN5PMCq2rAa4PyjtMQkzQDUJt1JcSPqAbAM3bRyWj08SIxXf+4ddu2J1W+fGND9B/sPP/llg3m15FcRbOAINFfsCDOdcsYCMG78Q01KXR1LNO0PqoNi3B8us0tCMd5AUlBiOXmVAgD3DLdh5WbaBbAq1efBQHeSZ4+4pw4FCH6hJoU4OW5FvPFVGeclmtiNh6/LWtZ7yD7J289nAA9Ipk8Rs2Fg548FFG7luoMw6cuDQ3MuAWcy0ZopsG8CL8dk2o/wcH0SWoywIQOIgJyu+u9wsH/DyRqWtaPgMQ7bgFesWLUw8/ttsM0jHWemizNPHbi+T/9YCkwZNsxjL+L7u5vqbnAitlQhH0wpUsKNaI2CeJvb5jJ5L/93pVvbDRtDGGjIzSLCOXzuzOGcRSjnafKYEDQkFJ5bb6gJoMKPmETMggzuoQahNNyTRT9/UeFx1wogBkrqEkBTemlBuK0PewjErGzpMy8gmOxVmpCaHv27McAvqQGwaAaoVGJe7vus0F3nFcdTQXti+viBTaRCq7upZnBj65dpq4zVYjchReqtoMgeBNNA9zZ6VtfO+91PV3yAaL5Ha2thSsSY4cO/Qyun3mlPeBxqgLBUGhIK/VuaHBb1f2MpSSVX7pUMTldUs28mFVA23FU2O0c739U47AQ6Uq/ETAMxrMd2RzVCmaBSW34PTVroi3l3kDpRmseXHRPZVeufA7nORXMPb+0D1yV605s3To2Ho2+j13ZEg+Rf4BOEnUVa0EVUBpePJfCnMcysVgGa/OXYnKQmehbSiYrDiwbkYg64+7Oj45+Sp4YazXAgC+3gsHX/V7VLMSIEO9lmQ9BWOd5PnQVNLDMRQdR7ztq2y9Q9VA30G7w0Fl2PBpVkYD6ri9cWBm68fNHz20EE5lbfc50DMF2iwmFrAgIXJMVj1s4agw6zDUJEViAby7wqa/9opRIpdQ1DnWenMpESKj8/ecMDGSoSkghdoFhxSsh4Fp7m65fRnWG2dJCoXC4G8eAKaP/YOSwlPJxqhI8gV3kGU+9MK39SEsqpSLVq/Cc6iaAWgdvCi9cuINqQFskMgSHqddtpQRZd7eV6Ooikc3aIWZ1yXQXHr9ANEMA++F9We69b1oBChqLSUJB03wNmv0V1RkIUpRtfU9SFQinUqlsNLobWnkHevs3oe5oMo+hs2/DMt0PL8OPOqzhXHgG68UBtww31Z7iu82bT1qJxL0s5VK3zpFyRN14O9WF5Dmjo5msaT5YbK8GaRhTOglgWQhHmM9MoqstIf6LkNxKVP9ywlcm1Pq3HW6/zWjn7zUaHlZelSx1dDzgrUYkZl+BBCaKFYuloTV3o0+/LvnvpP7xxJr/PL49RBXgewuB6q/y43dkAAAAAElFTkSuQmCC",
    Ou = O.createContext({transformPagePoint: e => e, isStatic: !1, reducedMotion: "never"}), Ts = O.createContext({});

function Ry() {
    return O.useContext(Ts).visualElement
}

const Ps = O.createContext(null), On = typeof document < "u", al = On ? O.useLayoutEffect : O.useEffect,
    $h = O.createContext({strict: !1});

function Ly(e, t, n, r) {
    const i = Ry(), o = O.useContext($h), s = O.useContext(Ps), l = O.useContext(Ou).reducedMotion, a = O.useRef();
    r = r || o.renderer, !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: s ? s.id : void 0,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    return al(() => {
        u && u.render()
    }), al(() => {
        u && u.animationState && u.animationState.animateChanges()
    }), al(() => () => u && u.notify("Unmount"), []), u
}

function tr(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function My(e, t, n) {
    return O.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : tr(n) && (n.current = r))
    }, [t])
}

function ki(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Vs(e) {
    return typeof e == "object" && typeof e.start == "function"
}

const Dy = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

function Rs(e) {
    return Vs(e.animate) || Dy.some(t => ki(e[t]))
}

function Zh(e) {
    return !!(Rs(e) || e.variants)
}

function Ny(e, t) {
    if (Rs(e)) {
        const {initial: n, animate: r} = e;
        return {initial: n === !1 || ki(n) ? n : void 0, animate: ki(r) ? r : void 0}
    }
    return e.inherit !== !1 ? t : {}
}

function _y(e) {
    const {initial: t, animate: n} = Ny(e, O.useContext(Ts));
    return O.useMemo(() => ({initial: t, animate: n}), [Pf(t), Pf(n)])
}

function Pf(e) {
    return Array.isArray(e) ? e.join(" ") : e
}

const Pt = e => ({isEnabled: t => e.some(n => !!t[n])}), Ci = {
    measureLayout: Pt(["layout", "layoutId", "drag"]),
    animation: Pt(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
    exit: Pt(["exit"]),
    drag: Pt(["drag", "dragControls"]),
    focus: Pt(["whileFocus"]),
    hover: Pt(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: Pt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: Pt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    inView: Pt(["whileInView", "onViewportEnter", "onViewportLeave"])
};

function Oy(e) {
    for (const t in e) t === "projectionNodeConstructor" ? Ci.projectionNodeConstructor = e[t] : Ci[t].Component = e[t]
}

function Fu(e) {
    const t = O.useRef(null);
    return t.current === null && (t.current = e()), t.current
}

const Jr = {hasAnimatedSinceResize: !0, hasEverUpdated: !1};
let Fy = 1;

function Iy() {
    return Fu(() => {
        if (Jr.hasEverUpdated) return Fy++
    })
}

const qh = O.createContext({});

class zy extends pt.Component {
    getSnapshotBeforeUpdate() {
        const {visualElement: t, props: n} = this.props;
        return t && t.setProps(n), null
    }

    componentDidUpdate() {
    }

    render() {
        return this.props.children
    }
}

const Jh = O.createContext({}), By = Symbol.for("motionComponentSymbol");

function Uy({
                preloadedFeatures: e,
                createVisualElement: t,
                projectionNodeConstructor: n,
                useRender: r,
                useVisualState: i,
                Component: o
            }) {
    e && Oy(e);

    function s(a, u) {
        const c = {...O.useContext(Ou), ...a, layoutId: jy(a)}, {isStatic: p} = c;
        let f = null;
        const g = _y(a), v = p ? void 0 : Iy(), x = i(a, p);
        if (!p && On) {
            g.visualElement = Ly(o, x, c, t);
            const E = O.useContext($h).strict, h = O.useContext(Jh);
            g.visualElement && (f = g.visualElement.loadFeatures(c, E, e, v, n || Ci.projectionNodeConstructor, h))
        }
        return O.createElement(zy, {
            visualElement: g.visualElement,
            props: c
        }, f, O.createElement(Ts.Provider, {value: g}, r(o, a, v, My(x, g.visualElement, u), x, p, g.visualElement)))
    }

    const l = O.forwardRef(s);
    return l[By] = o, l
}

function jy({layoutId: e}) {
    const t = O.useContext(qh).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function Hy(e) {
    function t(r, i = {}) {
        return Uy(e(r, i))
    }

    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))})
}

const Wy = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Iu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Wy.indexOf(e) > -1 || /[A-Z]/.test(e))
}

const Go = {};

function Qy(e) {
    Object.assign(Go, e)
}

const Xo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Fn = new Set(Xo);

function em(e, {layout: t, layoutId: n}) {
    return Fn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Go[e] || e === "opacity")
}

const At = e => !!(e != null && e.getVelocity),
    Yy = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"},
    Gy = (e, t) => Xo.indexOf(e) - Xo.indexOf(t);

function Xy({transform: e, transformKeys: t}, {enableHardwareAcceleration: n = !0, allowTransformNone: r = !0}, i, o) {
    let s = "";
    t.sort(Gy);
    for (const l of t) s += `${Yy[l] || l}(${e[l]}) `;
    return n && !e.z && (s += "translateZ(0)"), s = s.trim(), o ? s = o(e, i ? "" : s) : r && i && (s = "none"), s
}

function tm(e) {
    return e.startsWith("--")
}

const by = (e, t) => t && typeof e == "number" ? t.transform(e) : e, xr = (e, t, n) => Math.min(Math.max(n, e), t),
    In = {test: e => typeof e == "number", parse: parseFloat, transform: e => e},
    ei = {...In, transform: e => xr(0, 1, e)}, Ji = {...In, default: 1}, ti = e => Math.round(e * 1e5) / 1e5,
    Ei = /(-)?([\d]*\.?[\d])+/g,
    ka = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    Ky = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function Mi(e) {
    return typeof e == "string"
}

const Di = e => ({
        test: t => Mi(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }), Wt = Di("deg"), Et = Di("%"), H = Di("px"), $y = Di("vh"), Zy = Di("vw"),
    Vf = {...Et, parse: e => Et.parse(e) / 100, transform: e => Et.transform(e * 100)},
    Rf = {...In, transform: Math.round}, nm = {
        borderWidth: H,
        borderTopWidth: H,
        borderRightWidth: H,
        borderBottomWidth: H,
        borderLeftWidth: H,
        borderRadius: H,
        radius: H,
        borderTopLeftRadius: H,
        borderTopRightRadius: H,
        borderBottomRightRadius: H,
        borderBottomLeftRadius: H,
        width: H,
        maxWidth: H,
        height: H,
        maxHeight: H,
        size: H,
        top: H,
        right: H,
        bottom: H,
        left: H,
        padding: H,
        paddingTop: H,
        paddingRight: H,
        paddingBottom: H,
        paddingLeft: H,
        margin: H,
        marginTop: H,
        marginRight: H,
        marginBottom: H,
        marginLeft: H,
        rotate: Wt,
        rotateX: Wt,
        rotateY: Wt,
        rotateZ: Wt,
        scale: Ji,
        scaleX: Ji,
        scaleY: Ji,
        scaleZ: Ji,
        skew: Wt,
        skewX: Wt,
        skewY: Wt,
        distance: H,
        translateX: H,
        translateY: H,
        translateZ: H,
        x: H,
        y: H,
        z: H,
        perspective: H,
        transformPerspective: H,
        opacity: ei,
        originX: Vf,
        originY: Vf,
        originZ: H,
        zIndex: Rf,
        fillOpacity: ei,
        strokeOpacity: ei,
        numOctaves: Rf
    };

function zu(e, t, n, r) {
    const {style: i, vars: o, transform: s, transformKeys: l, transformOrigin: a} = e;
    l.length = 0;
    let u = !1, c = !1, p = !0;
    for (const f in t) {
        const g = t[f];
        if (tm(f)) {
            o[f] = g;
            continue
        }
        const v = nm[f], x = by(g, v);
        if (Fn.has(f)) {
            if (u = !0, s[f] = x, l.push(f), !p) continue;
            g !== (v.default || 0) && (p = !1)
        } else f.startsWith("origin") ? (c = !0, a[f] = x) : i[f] = x
    }
    if (t.transform || (u || r ? i.transform = Xy(e, n, p, r) : i.transform && (i.transform = "none")), c) {
        const {originX: f = "50%", originY: g = "50%", originZ: v = 0} = a;
        i.transformOrigin = `${f} ${g} ${v}`
    }
}

const Bu = () => ({style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {}});

function rm(e, t, n) {
    for (const r in t) !At(t[r]) && !em(r, n) && (e[r] = t[r])
}

function qy({transformTemplate: e}, t, n) {
    return O.useMemo(() => {
        const r = Bu();
        return zu(r, t, {enableHardwareAcceleration: !n}, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Jy(e, t, n) {
    const r = e.style || {}, i = {};
    return rm(i, r, e), Object.assign(i, qy(e, t, n)), e.transformValues ? e.transformValues(i) : i
}

function e1(e, t, n) {
    const r = {}, i = Jy(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = i, r
}

const t1 = ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"],
    n1 = ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    r1 = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    i1 = ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
    o1 = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", ...i1, ...n1, ...t1, ...r1]);

function bo(e) {
    return o1.has(e)
}

let im = e => !bo(e);

function s1(e) {
    e && (im = t => t.startsWith("on") ? !bo(t) : e(t))
}

try {
    s1(require("@emotion/is-prop-valid").default)
} catch {
}

function l1(e, t, n) {
    const r = {};
    for (const i in e) (im(i) || n === !0 && bo(i) || !t && !bo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function Lf(e, t, n) {
    return typeof e == "string" ? e : H.transform(t + n * e)
}

function a1(e, t, n) {
    const r = Lf(t, e.x, e.width), i = Lf(n, e.y, e.height);
    return `${r} ${i}`
}

const u1 = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
    c1 = {offset: "strokeDashoffset", array: "strokeDasharray"};

function f1(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? u1 : c1;
    e[o.offset] = H.transform(-r);
    const s = H.transform(t), l = H.transform(n);
    e[o.array] = `${s} ${l}`
}

function Uu(e, {
    attrX: t,
    attrY: n,
    originX: r,
    originY: i,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...a
}, u, c, p) {
    if (zu(e, a, u, p), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {attrs: f, style: g, dimensions: v} = e;
    f.transform && (v && (g.transform = f.transform), delete f.transform), v && (r !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = a1(v, r !== void 0 ? r : .5, i !== void 0 ? i : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), o !== void 0 && f1(f, o, s, l, !1)
}

const om = () => ({...Bu(), attrs: {}}), ju = e => typeof e == "string" && e.toLowerCase() === "svg";

function d1(e, t, n, r) {
    const i = O.useMemo(() => {
        const o = om();
        return Uu(o, t, {enableHardwareAcceleration: !1}, ju(r), e.transformTemplate), {...o.attrs, style: {...o.style}}
    }, [t]);
    if (e.style) {
        const o = {};
        rm(o, e.style, e), i.style = {...o, ...i.style}
    }
    return i
}

function p1(e = !1) {
    return (n, r, i, o, {latestValues: s}, l) => {
        const u = (Iu(n) ? d1 : e1)(r, s, l, n), p = {...l1(r, typeof n == "string", e), ...u, ref: o};
        return i && (p["data-projection-id"] = i), O.createElement(n, p)
    }
}

const Hu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function sm(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}

const lm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function am(e, t, n, r) {
    sm(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(lm.has(i) ? i : Hu(i), t.attrs[i])
}

function Wu(e) {
    const {style: t} = e, n = {};
    for (const r in t) (At(t[r]) || em(r, e)) && (n[r] = t[r]);
    return n
}

function um(e) {
    const t = Wu(e);
    for (const n in e) if (At(e[n])) {
        const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
        t[r] = e[n]
    }
    return t
}

function Qu(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t
}

const Ko = e => Array.isArray(e), h1 = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    m1 = e => Ko(e) ? e[e.length - 1] || 0 : e;

function yo(e) {
    const t = At(e) ? e.get() : e;
    return h1(t) ? t.toValue() : t
}

function g1({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const s = {latestValues: v1(r, i, o, e), renderState: t()};
    return n && (s.mount = l => n(r, l, s)), s
}

const cm = e => (t, n) => {
    const r = O.useContext(Ts), i = O.useContext(Ps), o = () => g1(e, t, r, i);
    return n ? o() : Fu(o)
};

function v1(e, t, n, r) {
    const i = {}, o = r(e);
    for (const f in o) i[f] = yo(o[f]);
    let {initial: s, animate: l} = e;
    const a = Rs(e), u = Zh(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const p = c ? l : s;
    return p && typeof p != "boolean" && !Vs(p) && (Array.isArray(p) ? p : [p]).forEach(g => {
        const v = Qu(e, g);
        if (!v) return;
        const {transitionEnd: x, transition: E, ...h} = v;
        for (const d in h) {
            let m = h[d];
            if (Array.isArray(m)) {
                const w = c ? m.length - 1 : 0;
                m = m[w]
            }
            m !== null && (i[d] = m)
        }
        for (const d in x) i[d] = x[d]
    }), i
}

const y1 = {
    useVisualState: cm({
        scrapeMotionValuesFromProps: um,
        createRenderState: om,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            try {
                n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
            } catch {
                n.dimensions = {x: 0, y: 0, width: 0, height: 0}
            }
            Uu(n, r, {enableHardwareAcceleration: !1}, ju(t.tagName), e.transformTemplate), am(t, n)
        }
    })
}, w1 = {useVisualState: cm({scrapeMotionValuesFromProps: Wu, createRenderState: Bu})};

function x1(e, {forwardMotionProps: t = !1}, n, r, i) {
    return {
        ...Iu(e) ? y1 : w1,
        preloadedFeatures: n,
        useRender: p1(t),
        createVisualElement: r,
        projectionNodeConstructor: i,
        Component: e
    }
}

var J;
(function (e) {
    e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
})(J || (J = {}));

function Ls(e, t, n, r = {passive: !0}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Ca(e, t, n, r) {
    O.useEffect(() => {
        const i = e.current;
        if (n && i) return Ls(i, t, n, r)
    }, [e, t, n, r])
}

function S1({whileFocus: e, visualElement: t}) {
    const {animationState: n} = t, r = () => {
        n && n.setActive(J.Focus, !0)
    }, i = () => {
        n && n.setActive(J.Focus, !1)
    };
    Ca(t, "focus", e ? r : void 0), Ca(t, "blur", e ? i : void 0)
}

function fm(e) {
    return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent
}

function dm(e) {
    return !!e.touches
}

function k1(e) {
    return t => {
        const n = t instanceof MouseEvent;
        (!n || n && t.button === 0) && e(t)
    }
}

const C1 = {pageX: 0, pageY: 0};

function E1(e, t = "page") {
    const r = e.touches[0] || e.changedTouches[0] || C1;
    return {x: r[t + "X"], y: r[t + "Y"]}
}

function A1(e, t = "page") {
    return {x: e[t + "X"], y: e[t + "Y"]}
}

function Yu(e, t = "page") {
    return {point: dm(e) ? E1(e, t) : A1(e, t)}
}

const pm = (e, t = !1) => {
        const n = r => e(r, Yu(r));
        return t ? k1(n) : n
    }, T1 = () => On && window.onpointerdown === null, P1 = () => On && window.ontouchstart === null,
    V1 = () => On && window.onmousedown === null, R1 = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
    }, L1 = {pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel"};

function hm(e) {
    return T1() ? e : P1() ? L1[e] : V1() ? R1[e] : e
}

function fr(e, t, n, r) {
    return Ls(e, hm(t), pm(n, t === "pointerdown"), r)
}

function $o(e, t, n, r) {
    return Ca(e, hm(t), n && pm(n, t === "pointerdown"), r)
}

function mm(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}

const Mf = mm("dragHorizontal"), Df = mm("dragVertical");

function gm(e) {
    let t = !1;
    if (e === "y") t = Df(); else if (e === "x") t = Mf(); else {
        const n = Mf(), r = Df();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function vm() {
    const e = gm(!0);
    return e ? (e(), !1) : !0
}

function Nf(e, t, n) {
    return (r, i) => {
        !fm(r) || vm() || (e.animationState && e.animationState.setActive(J.Hover, t), n && n(r, i))
    }
}

function M1({onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r}) {
    $o(r, "pointerenter", e || n ? Nf(r, !0, e) : void 0, {passive: !e}), $o(r, "pointerleave", t || n ? Nf(r, !1, t) : void 0, {passive: !t})
}

const ym = (e, t) => t ? e === t ? !0 : ym(e, t.parentElement) : !1;

function wm(e) {
    return O.useEffect(() => () => e(), [])
}

const D1 = (e, t) => n => t(e(n)), Ms = (...e) => e.reduce(D1);

function N1({onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: i}) {
    const o = e || t || n || r, s = O.useRef(!1), l = O.useRef(null), a = {passive: !(t || e || n || g)};

    function u() {
        l.current && l.current(), l.current = null
    }

    function c() {
        return u(), s.current = !1, i.animationState && i.animationState.setActive(J.Tap, !1), !vm()
    }

    function p(v, x) {
        c() && (ym(i.current, v.target) ? e && e(v, x) : n && n(v, x))
    }

    function f(v, x) {
        c() && n && n(v, x)
    }

    function g(v, x) {
        u(), !s.current && (s.current = !0, l.current = Ms(fr(window, "pointerup", p, a), fr(window, "pointercancel", f, a)), i.animationState && i.animationState.setActive(J.Tap, !0), t && t(v, x))
    }

    $o(i, "pointerdown", o ? g : void 0, a), wm(u)
}

const _1 = "production", O1 = typeof process > "u" || process.env === void 0 ? _1 : "production", _f = new Set;

function F1(e, t, n) {
    e || _f.has(t) || (console.warn(t), n && console.warn(n), _f.add(t))
}

const Ea = new WeakMap, ul = new WeakMap, I1 = e => {
    const t = Ea.get(e.target);
    t && t(e)
}, z1 = e => {
    e.forEach(I1)
};

function B1({root: e, ...t}) {
    const n = e || document;
    ul.has(n) || ul.set(n, {});
    const r = ul.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(z1, {root: e, ...t})), r[i]
}

function U1(e, t, n) {
    const r = B1(t);
    return Ea.set(e, n), r.observe(e), () => {
        Ea.delete(e), r.unobserve(e)
    }
}

function j1({visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: i = {}}) {
    const o = O.useRef({hasEnteredView: !1, isInView: !1});
    let s = !!(t || n || r);
    i.once && o.current.hasEnteredView && (s = !1), (typeof IntersectionObserver > "u" ? Q1 : W1)(s, o.current, e, i)
}

const H1 = {some: 0, all: 1};

function W1(e, t, n, {root: r, margin: i, amount: o = "some", once: s}) {
    O.useEffect(() => {
        if (!e || !n.current) return;
        const l = {root: r == null ? void 0 : r.current, rootMargin: i, threshold: typeof o == "number" ? o : H1[o]},
            a = u => {
                const {isIntersecting: c} = u;
                if (t.isInView === c || (t.isInView = c, s && !c && t.hasEnteredView)) return;
                c && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(J.InView, c);
                const p = n.getProps(), f = c ? p.onViewportEnter : p.onViewportLeave;
                f && f(u)
            };
        return U1(n.current, l, a)
    }, [e, r, i, o])
}

function Q1(e, t, n, {fallback: r = !0}) {
    O.useEffect(() => {
        !e || !r || (O1 !== "production" && F1(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
            t.hasEnteredView = !0;
            const {onViewportEnter: i} = n.getProps();
            i && i(null), n.animationState && n.animationState.setActive(J.InView, !0)
        }))
    }, [e])
}

const Zt = e => t => (e(t), null), Y1 = {inView: Zt(j1), tap: Zt(N1), focus: Zt(S1), hover: Zt(M1)};

function xm() {
    const e = O.useContext(Ps);
    if (e === null) return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e, i = O.useId();
    return O.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}

function Sm(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0
}

const G1 = e => /^\-?\d*\.?\d+$/.test(e), X1 = e => /^0[^.\s]+$/.test(e), _t = {delta: 0, timestamp: 0},
    km = 1 / 60 * 1e3, b1 = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    Cm = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(b1()), km);

function K1(e) {
    let t = [], n = [], r = 0, i = !1, o = !1;
    const s = new WeakSet, l = {
        schedule: (a, u = !1, c = !1) => {
            const p = c && i, f = p ? t : n;
            return u && s.add(a), f.indexOf(a) === -1 && (f.push(a), p && i && (r = t.length)), a
        }, cancel: a => {
            const u = n.indexOf(a);
            u !== -1 && n.splice(u, 1), s.delete(a)
        }, process: a => {
            if (i) {
                o = !0;
                return
            }
            if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r) for (let u = 0; u < r; u++) {
                const c = t[u];
                c(a), s.has(c) && (l.schedule(c), e())
            }
            i = !1, o && (o = !1, l.process(a))
        }
    };
    return l
}

const $1 = 40;
let Aa = !0, Ai = !1, Ta = !1;
const Ni = ["read", "update", "preRender", "render", "postRender"],
    Ds = Ni.reduce((e, t) => (e[t] = K1(() => Ai = !0), e), {}), be = Ni.reduce((e, t) => {
        const n = Ds[t];
        return e[t] = (r, i = !1, o = !1) => (Ai || q1(), n.schedule(r, i, o)), e
    }, {}), cn = Ni.reduce((e, t) => (e[t] = Ds[t].cancel, e), {}),
    cl = Ni.reduce((e, t) => (e[t] = () => Ds[t].process(_t), e), {}), Z1 = e => Ds[e].process(_t), Em = e => {
        Ai = !1, _t.delta = Aa ? km : Math.max(Math.min(e - _t.timestamp, $1), 1), _t.timestamp = e, Ta = !0, Ni.forEach(Z1), Ta = !1, Ai && (Aa = !1, Cm(Em))
    }, q1 = () => {
        Ai = !0, Aa = !0, Ta || Cm(Em)
    };

function Gu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Xu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

class bu {
    constructor() {
        this.subscriptions = []
    }

    add(t) {
        return Gu(this.subscriptions, t), () => Xu(this.subscriptions, t)
    }

    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i) if (i === 1) this.subscriptions[0](t, n, r); else for (let o = 0; o < i; o++) {
            const s = this.subscriptions[o];
            s && s(t, n, r)
        }
    }

    getSize() {
        return this.subscriptions.length
    }

    clear() {
        this.subscriptions.length = 0
    }
}

function Ku(e, t) {
    return t ? e * (1e3 / t) : 0
}

const J1 = e => !isNaN(parseFloat(e));

class ew {
    constructor(t, n = {}) {
        this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            this.prev = this.current, this.current = r;
            const {delta: o, timestamp: s} = _t;
            this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, be.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => be.postRender(this.velocityCheck), this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = J1(this.current), this.owner = n.owner
    }

    onChange(t) {
        return this.on("change", t)
    }

    on(t, n) {
        return this.events[t] || (this.events[t] = new bu), this.events[t].add(n)
    }

    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }

    attach(t) {
        this.passiveEffect = t
    }

    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }

    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }

    get() {
        return this.current
    }

    getPrevious() {
        return this.prev
    }

    getVelocity() {
        return this.canTrackVelocity ? Ku(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }

    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.stopAnimation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }

    stop() {
        this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }

    isAnimating() {
        return !!this.stopAnimation
    }

    clearAnimation() {
        this.stopAnimation = null
    }

    destroy() {
        this.clearListeners(), this.stop()
    }
}

function Sr(e, t) {
    return new ew(e, t)
}

const $u = (e, t) => n => !!(Mi(n) && Ky.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Am = (e, t, n) => r => {
        if (!Mi(r)) return r;
        const [i, o, s, l] = r.match(Ei);
        return {[e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: l !== void 0 ? parseFloat(l) : 1}
    }, tw = e => xr(0, 255, e), fl = {...In, transform: e => Math.round(tw(e))}, En = {
        test: $u("rgb", "red"),
        parse: Am("red", "green", "blue"),
        transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + fl.transform(e) + ", " + fl.transform(t) + ", " + fl.transform(n) + ", " + ti(ei.transform(r)) + ")"
    };

function nw(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}

const Pa = {test: $u("#"), parse: nw, transform: En.transform}, nr = {
    test: $u("hsl", "hue"),
    parse: Am("hue", "saturation", "lightness"),
    transform: ({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: r = 1
                }) => "hsla(" + Math.round(e) + ", " + Et.transform(ti(t)) + ", " + Et.transform(ti(n)) + ", " + ti(ei.transform(r)) + ")"
}, De = {
    test: e => En.test(e) || Pa.test(e) || nr.test(e),
    parse: e => En.test(e) ? En.parse(e) : nr.test(e) ? nr.parse(e) : Pa.parse(e),
    transform: e => Mi(e) ? e : e.hasOwnProperty("red") ? En.transform(e) : nr.transform(e)
}, Tm = "${c}", Pm = "${n}";

function rw(e) {
    var t, n;
    return isNaN(e) && Mi(e) && (((t = e.match(Ei)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ka)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}

function Zo(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0, r = 0;
    const i = e.match(ka);
    i && (n = i.length, e = e.replace(ka, Tm), t.push(...i.map(De.parse)));
    const o = e.match(Ei);
    return o && (r = o.length, e = e.replace(Ei, Pm), t.push(...o.map(In.parse))), {
        values: t,
        numColors: n,
        numNumbers: r,
        tokenised: e
    }
}

function Vm(e) {
    return Zo(e).values
}

function Rm(e) {
    const {values: t, numColors: n, tokenised: r} = Zo(e), i = t.length;
    return o => {
        let s = r;
        for (let l = 0; l < i; l++) s = s.replace(l < n ? Tm : Pm, l < n ? De.transform(o[l]) : ti(o[l]));
        return s
    }
}

const iw = e => typeof e == "number" ? 0 : e;

function ow(e) {
    const t = Vm(e);
    return Rm(e)(t.map(iw))
}

const fn = {test: rw, parse: Vm, createTransformer: Rm, getAnimatableNone: ow},
    sw = new Set(["brightness", "contrast", "saturate", "opacity"]);

function lw(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Ei) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = sw.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}

const aw = /([a-z-]*)\(.*?\)/g, Va = {
    ...fn, getAnimatableNone: e => {
        const t = e.match(aw);
        return t ? t.map(lw).join(" ") : e
    }
}, uw = {
    ...nm,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: Va,
    WebkitFilter: Va
}, Zu = e => uw[e];

function qu(e, t) {
    var n;
    let r = Zu(e);
    return r !== Va && (r = fn), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
}

const Lm = e => t => t.test(e), cw = {test: e => e === "auto", parse: e => e}, Mm = [In, H, Et, Wt, Zy, $y, cw],
    _r = e => Mm.find(Lm(e)), fw = [...Mm, De, fn], dw = e => fw.find(Lm(e));

function pw(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function hw(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function Ns(e, t, n) {
    const r = e.getProps();
    return Qu(r, t, n !== void 0 ? n : r.custom, pw(e), hw(e))
}

function mw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Sr(n))
}

function gw(e, t) {
    const n = Ns(e, t);
    let {transitionEnd: r = {}, transition: i = {}, ...o} = n ? e.makeTargetAnimatable(n, !1) : {};
    o = {...o, ...r};
    for (const s in o) {
        const l = m1(o[s]);
        mw(e, s, l)
    }
}

function vw(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter(l => !e.hasValue(l)), s = o.length;
    if (s) for (let l = 0; l < s; l++) {
        const a = o[l], u = t[a];
        let c = null;
        Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]), c != null && (typeof c == "string" && (G1(c) || X1(c)) ? c = parseFloat(c) : !dw(c) && fn.test(u) && (c = qu(a, u)), e.addValue(a, Sr(c, {owner: e})), n[a] === void 0 && (n[a] = c), c !== null && e.setBaseTarget(a, c))
    }
}

function yw(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function ww(e, t, n) {
    var r;
    const i = {};
    for (const o in e) {
        const s = yw(o, t);
        i[o] = s !== void 0 ? s : (r = n.getValue(o)) === null || r === void 0 ? void 0 : r.get()
    }
    return i
}

function qo(e) {
    return !!(At(e) && e.add)
}

const xw = (e, t) => `${e}: ${t}`;

function Sw(e, t) {
    const {MotionAppearAnimations: n} = window, r = xw(e, Fn.has(t) ? "transform" : t), i = n && n.get(r);
    return i ? (be.render(() => {
        try {
            i.cancel(), n.delete(r)
        } catch {
        }
    }), i.currentTime || 0) : 0
}

const kw = "framerAppearId", Cw = "data-" + Hu(kw);
var Ew = function () {
}, Jo = function () {
};
const wo = e => e * 1e3, Aw = {current: !1}, Ju = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    ec = e => t => 1 - e(1 - t), tc = e => e * e, Tw = ec(tc), nc = Ju(tc), fe = (e, t, n) => -n * e + n * t + e;

function dl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Pw({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t) i = o = s = n; else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
        i = dl(a, l, e + 1 / 3), o = dl(a, l, e), s = dl(a, l, e - 1 / 3)
    }
    return {red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r}
}

const pl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}, Vw = [Pa, En, nr], Rw = e => Vw.find(t => t.test(e));

function Of(e) {
    const t = Rw(e);
    let n = t.parse(e);
    return t === nr && (n = Pw(n)), n
}

const Dm = (e, t) => {
    const n = Of(e), r = Of(t), i = {...n};
    return o => (i.red = pl(n.red, r.red, o), i.green = pl(n.green, r.green, o), i.blue = pl(n.blue, r.blue, o), i.alpha = fe(n.alpha, r.alpha, o), En.transform(i))
};

function Nm(e, t) {
    return typeof e == "number" ? n => fe(e, t, n) : De.test(e) ? Dm(e, t) : Om(e, t)
}

const _m = (e, t) => {
    const n = [...e], r = n.length, i = e.map((o, s) => Nm(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}, Lw = (e, t) => {
    const n = {...e, ...t}, r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Nm(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}, Om = (e, t) => {
    const n = fn.createTransformer(t), r = Zo(e), i = Zo(t);
    return r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Ms(_m(r.values, i.values), n) : s => `${s > 0 ? t : e}`
}, es = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}, Ff = (e, t) => n => fe(e, t, n);

function Mw(e) {
    return typeof e == "number" ? Ff : typeof e == "string" ? De.test(e) ? Dm : Om : Array.isArray(e) ? _m : typeof e == "object" ? Lw : Ff
}

function Dw(e, t, n) {
    const r = [], i = n || Mw(e[0]), o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] : t;
            l = Ms(a, l)
        }
        r.push(l)
    }
    return r
}

function Fm(e, t, {clamp: n = !0, ease: r, mixer: i} = {}) {
    const o = e.length;
    Jo(o === t.length), Jo(!r || !Array.isArray(r) || r.length === o - 1), e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = Dw(t, r, i), l = s.length, a = u => {
        let c = 0;
        if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++) ;
        const p = es(e[c], e[c + 1], u);
        return s[c](p)
    };
    return n ? u => a(xr(e[0], e[o - 1], u)) : a
}

const rc = e => e, Im = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Nw = 1e-7, _w = 12;

function Ow(e, t, n, r, i) {
    let o, s, l = 0;
    do s = t + (n - t) / 2, o = Im(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > Nw && ++l < _w);
    return s
}

function zm(e, t, n, r) {
    if (e === t && n === r) return rc;
    const i = o => Ow(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Im(i(o), t, r)
}

const Bm = e => 1 - Math.sin(Math.acos(e)), ic = ec(Bm), Fw = Ju(ic), Um = zm(.33, 1.53, .69, .99), oc = ec(Um),
    Iw = Ju(oc), zw = e => (e *= 2) < 1 ? .5 * oc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))), Bw = {
        linear: rc,
        easeIn: tc,
        easeInOut: nc,
        easeOut: Tw,
        circIn: Bm,
        circInOut: Fw,
        circOut: ic,
        backIn: oc,
        backInOut: Iw,
        backOut: Um,
        anticipate: zw
    }, If = e => {
        if (Array.isArray(e)) {
            Jo(e.length === 4);
            const [t, n, r, i] = e;
            return zm(t, n, r, i)
        } else if (typeof e == "string") return Bw[e];
        return e
    }, Uw = e => Array.isArray(e) && typeof e[0] != "number";

function jw(e, t) {
    return e.map(() => t || nc).splice(0, e.length - 1)
}

function Hw(e) {
    const t = e.length;
    return e.map((n, r) => r !== 0 ? r / (t - 1) : 0)
}

function Ww(e, t) {
    return e.map(n => n * t)
}

function ts({keyframes: e, ease: t = nc, times: n, duration: r = 300}) {
    e = [...e];
    const i = ts[0], o = Uw(t) ? t.map(If) : If(t), s = {done: !1, value: i},
        l = Ww(n && n.length === ts.length ? n : Hw(e), r);

    function a() {
        return Fm(l, e, {ease: Array.isArray(o) ? o : jw(e, o)})
    }

    let u = a();
    return {
        next: c => (s.value = u(c), s.done = c >= r, s), flipTarget: () => {
            e.reverse(), u = a()
        }
    }
}

const hl = .001, Qw = .01, zf = 10, Yw = .05, Gw = 1;

function Xw({duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1}) {
    let i, o;
    Ew(e <= zf * 1e3);
    let s = 1 - t;
    s = xr(Yw, Gw, s), e = xr(Qw, zf, e / 1e3), s < 1 ? (i = u => {
        const c = u * s, p = c * e, f = c - n, g = Ra(u, s), v = Math.exp(-p);
        return hl - f / g * v
    }, o = u => {
        const p = u * s * e, f = p * n + n, g = Math.pow(s, 2) * Math.pow(u, 2) * e, v = Math.exp(-p),
            x = Ra(Math.pow(u, 2), s);
        return (-i(u) + hl > 0 ? -1 : 1) * ((f - g) * v) / x
    }) : (i = u => {
        const c = Math.exp(-u * e), p = (u - n) * e + 1;
        return -hl + c * p
    }, o = u => {
        const c = Math.exp(-u * e), p = (n - u) * (e * e);
        return c * p
    });
    const l = 5 / e, a = Kw(i, o, l);
    if (e = e * 1e3, isNaN(a)) return {stiffness: 100, damping: 10, duration: e};
    {
        const u = Math.pow(a, 2) * r;
        return {stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e}
    }
}

const bw = 12;

function Kw(e, t, n) {
    let r = n;
    for (let i = 1; i < bw; i++) r = r - e(r) / t(r);
    return r
}

function Ra(e, t) {
    return e * Math.sqrt(1 - t * t)
}

const $w = ["duration", "bounce"], Zw = ["stiffness", "damping", "mass"];

function Bf(e, t) {
    return t.some(n => e[n] !== void 0)
}

function qw(e) {
    let t = {velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e};
    if (!Bf(e, Zw) && Bf(e, $w)) {
        const n = Xw(e);
        t = {...t, ...n, velocity: 0, mass: 1}, t.isResolvedFromDuration = !0
    }
    return t
}

const Jw = 5;

function jm({keyframes: e, restSpeed: t = 2, restDelta: n = .01, ...r}) {
    let i = e[0], o = e[e.length - 1];
    const s = {done: !1, value: i}, {
        stiffness: l,
        damping: a,
        mass: u,
        velocity: c,
        duration: p,
        isResolvedFromDuration: f
    } = qw(r);
    let g = ex, v = c ? -(c / 1e3) : 0;
    const x = a / (2 * Math.sqrt(l * u));

    function E() {
        const h = o - i, d = Math.sqrt(l / u) / 1e3;
        if (n === void 0 && (n = Math.min(Math.abs(o - i) / 100, .4)), x < 1) {
            const m = Ra(d, x);
            g = w => {
                const C = Math.exp(-x * d * w);
                return o - C * ((v + x * d * h) / m * Math.sin(m * w) + h * Math.cos(m * w))
            }
        } else if (x === 1) g = m => o - Math.exp(-d * m) * (h + (v + d * h) * m); else {
            const m = d * Math.sqrt(x * x - 1);
            g = w => {
                const C = Math.exp(-x * d * w), P = Math.min(m * w, 300);
                return o - C * ((v + x * d * h) * Math.sinh(P) + m * h * Math.cosh(P)) / m
            }
        }
    }

    return E(), {
        next: h => {
            const d = g(h);
            if (f) s.done = h >= p; else {
                let m = v;
                if (h !== 0) if (x < 1) {
                    const P = Math.max(0, h - Jw);
                    m = Ku(d - g(P), h - P)
                } else m = 0;
                const w = Math.abs(m) <= t, C = Math.abs(o - d) <= n;
                s.done = w && C
            }
            return s.value = s.done ? o : d, s
        }, flipTarget: () => {
            v = -v, [i, o] = [o, i], E()
        }
    }
}

jm.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const ex = e => 0;

function tx({
                keyframes: e = [0],
                velocity: t = 0,
                power: n = .8,
                timeConstant: r = 350,
                restDelta: i = .5,
                modifyTarget: o
            }) {
    const s = e[0], l = {done: !1, value: s};
    let a = n * t;
    const u = s + a, c = o === void 0 ? u : o(u);
    return c !== u && (a = c - s), {
        next: p => {
            const f = -a * Math.exp(-p / r);
            return l.done = !(f > i || f < -i), l.value = l.done ? c : c + f, l
        }, flipTarget: () => {
        }
    }
}

const nx = {decay: tx, keyframes: ts, tween: ts, spring: jm};

function Hm(e, t, n = 0) {
    return e - t - n
}

function rx(e, t = 0, n = 0, r = !0) {
    return r ? Hm(t + -e, t, n) : t - (e - t) + n
}

function ix(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}

const ox = e => {
    const t = ({delta: n}) => e(n);
    return {start: () => be.update(t, !0), stop: () => cn.update(t)}
};

function ns({
                duration: e,
                driver: t = ox,
                elapsed: n = 0,
                repeat: r = 0,
                repeatType: i = "loop",
                repeatDelay: o = 0,
                keyframes: s,
                autoplay: l = !0,
                onPlay: a,
                onStop: u,
                onComplete: c,
                onRepeat: p,
                onUpdate: f,
                type: g = "keyframes",
                ...v
            }) {
    var x, E;
    let h, d = 0, m = e, w, C = !1, P = !0, R;
    const S = nx[s.length > 2 ? "keyframes" : g], D = s[0], M = s[s.length - 1];
    !((E = (x = S).needsInterpolation) === null || E === void 0) && E.call(x, D, M) && (R = Fm([0, 100], [D, M], {clamp: !1}), s = [0, 100]);
    const Y = S({...v, duration: e, keyframes: s});

    function j() {
        d++, i === "reverse" ? (P = d % 2 === 0, n = rx(n, m, o, P)) : (n = Hm(n, m, o), i === "mirror" && Y.flipTarget()), C = !1, p && p()
    }

    function B() {
        h.stop(), c && c()
    }

    function K(q) {
        if (P || (q = -q), n += q, !C) {
            const de = Y.next(Math.max(0, n));
            w = de.value, R && (w = R(w)), C = P ? de.done : n <= 0
        }
        f && f(w), C && (d === 0 && (m = m !== void 0 ? m : n), d < r ? ix(n, m, o, P) && j() : B())
    }

    function X() {
        a && a(), h = t(K), h.start()
    }

    return l && X(), {
        stop: () => {
            u && u(), h.stop()
        }, sample: q => Y.next(Math.max(0, q))
    }
}

function sx(e) {
    return !e || Array.isArray(e) || typeof e == "string" && Wm[e]
}

const Wr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Wm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Wr([0, .65, .55, 1]),
    circOut: Wr([.55, 0, 1, .45]),
    backIn: Wr([.31, .01, .66, -.59]),
    backOut: Wr([.33, 1.53, .69, .99])
};

function lx(e) {
    if (e) return Array.isArray(e) ? Wr(e) : Wm[e]
}

function ax(e, t, n, {delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: l, times: a} = {}) {
    return e.animate({[t]: n, offset: a}, {
        delay: r,
        duration: i,
        easing: lx(l),
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

const eo = 10;

function ux(e, t, {onUpdate: n, onComplete: r, ...i}) {
    let {keyframes: o, duration: s = .3, elapsed: l = 0, ease: a} = i;
    if (i.type === "spring" || !sx(i.ease)) {
        const c = ns(i);
        let p = {done: !1, value: o[0]};
        const f = [];
        let g = 0;
        for (; !p.done;) p = c.sample(g), f.push(p.value), g += eo;
        o = f, s = g - eo, a = "linear"
    }
    const u = ax(e.owner.current, t, o, {...i, delay: -l, duration: s, ease: a});
    return u.onfinish = () => {
        e.set(o[o.length - 1]), r && r()
    }, () => {
        const {currentTime: c} = u;
        if (c) {
            const p = ns(i);
            e.setWithVelocity(p.sample(c - eo).value, p.sample(c).value, eo)
        }
        be.update(() => u.cancel())
    }
}

function Qm(e, t) {
    const n = performance.now(), r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (cn.read(r), e(o - t))
    };
    return be.read(r, !0), () => cn.read(r)
}

function cx({keyframes: e, elapsed: t, onUpdate: n, onComplete: r}) {
    const i = () => (n && n(e[e.length - 1]), r && r(), () => {
    });
    return t ? Qm(i, -t) : i()
}

function fx({
                keyframes: e,
                velocity: t = 0,
                min: n,
                max: r,
                power: i = .8,
                timeConstant: o = 750,
                bounceStiffness: s = 500,
                bounceDamping: l = 10,
                restDelta: a = 1,
                modifyTarget: u,
                driver: c,
                onUpdate: p,
                onComplete: f,
                onStop: g
            }) {
    const v = e[0];
    let x;

    function E(w) {
        return n !== void 0 && w < n || r !== void 0 && w > r
    }

    function h(w) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - w) < Math.abs(r - w) ? n : r
    }

    function d(w) {
        x == null || x.stop(), x = ns({
            keyframes: [0, 1], velocity: 0, ...w, driver: c, onUpdate: C => {
                var P;
                p == null || p(C), (P = w.onUpdate) === null || P === void 0 || P.call(w, C)
            }, onComplete: f, onStop: g
        })
    }

    function m(w) {
        d({type: "spring", stiffness: s, damping: l, restDelta: a, ...w})
    }

    if (E(v)) m({velocity: t, keyframes: [v, h(v)]}); else {
        let w = i * t + v;
        typeof u < "u" && (w = u(w));
        const C = h(w), P = C === n ? -1 : 1;
        let R, S;
        const D = M => {
            R = S, S = M, t = Ku(M - R, _t.delta), (P === 1 && M > C || P === -1 && M < C) && m({
                keyframes: [M, C],
                velocity: t
            })
        };
        d({
            type: "decay",
            keyframes: [v, 0],
            velocity: t,
            timeConstant: o,
            power: i,
            restDelta: a,
            modifyTarget: u,
            onUpdate: E(w) ? D : void 0
        })
    }
    return {stop: () => x == null ? void 0 : x.stop()}
}

const mn = () => ({type: "spring", stiffness: 500, damping: 25, restSpeed: 10}),
    to = e => ({type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
    ml = () => ({type: "keyframes", ease: "linear", duration: .3}), dx = {type: "keyframes", duration: .8}, Uf = {
        x: mn,
        y: mn,
        z: mn,
        rotate: mn,
        rotateX: mn,
        rotateY: mn,
        rotateZ: mn,
        scaleX: to,
        scaleY: to,
        scale: to,
        opacity: ml,
        backgroundColor: ml,
        color: ml,
        default: to
    }, px = (e, {keyframes: t}) => t.length > 2 ? dx : (Uf[e] || Uf.default)(t[1]),
    La = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && fn.test(t) && !t.startsWith("url("));

function hx({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: l,
                from: a,
                ...u
            }) {
    return !!Object.keys(u).length
}

function jf(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}

function Hf(e) {
    return typeof e == "number" ? 0 : qu("", e)
}

function Ym(e, t) {
    return e[t] || e.default || e
}

function mx(e, t, n, r) {
    const i = La(t, n);
    let o = r.from !== void 0 ? r.from : e.get();
    return o === "none" && i && typeof n == "string" ? o = qu(t, n) : jf(o) && typeof n == "string" ? o = Hf(n) : !Array.isArray(n) && jf(n) && typeof o == "string" && (n = Hf(o)), Array.isArray(n) ? (n[0] === null && (n[0] = o), n) : [o, n]
}

const Wf = {waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")}, gl = {}, Gm = {};
for (const e in Wf) Gm[e] = () => (gl[e] === void 0 && (gl[e] = Wf[e]()), gl[e]);
const gx = new Set(["opacity"]), sc = (e, t, n, r = {}) => i => {
    const o = Ym(r, e) || {}, s = o.delay || r.delay || 0;
    let {elapsed: l = 0} = r;
    l = l - wo(s);
    const a = mx(t, e, n, o), u = a[0], c = a[a.length - 1], p = La(e, u), f = La(e, c);
    let g = {
        keyframes: a, velocity: t.getVelocity(), ...o, elapsed: l, onUpdate: h => {
            t.set(h), o.onUpdate && o.onUpdate(h)
        }, onComplete: () => {
            i(), o.onComplete && o.onComplete()
        }
    };
    if (!p || !f || Aw.current || o.type === !1) return cx(g);
    if (o.type === "inertia") {
        const h = fx(g);
        return () => h.stop()
    }
    hx(o) || (g = {...g, ...px(e, g)}), g.duration && (g.duration = wo(g.duration)), g.repeatDelay && (g.repeatDelay = wo(g.repeatDelay));
    const v = t.owner, x = v && v.current;
    if (Gm.waapi() && gx.has(e) && !g.repeatDelay && g.repeatType !== "mirror" && g.damping !== 0 && v && x instanceof HTMLElement && !v.getProps().onUpdate) return ux(t, e, g);
    {
        const h = ns(g);
        return () => h.stop()
    }
};

function vx(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Ma(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Ma(e, t, n); else {
        const i = typeof t == "function" ? Ns(e, t, n.custom) : t;
        r = Xm(e, i, n)
    }
    return r.then(() => e.notify("AnimationComplete", t))
}

function Ma(e, t, n = {}) {
    var r;
    const i = Ns(e, t, n.custom);
    let {transition: o = e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Xm(e, i, n) : () => Promise.resolve(),
        l = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u = 0) => {
            const {delayChildren: c = 0, staggerChildren: p, staggerDirection: f} = o;
            return yx(e, t, c + u, p, f, n)
        } : () => Promise.resolve(), {when: a} = o;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then(c)
    } else return Promise.all([s(), l(n.delay)])
}

function Xm(e, t, {delay: n = 0, transitionOverride: r, type: i} = {}) {
    var o;
    let {transition: s = e.getDefaultTransition(), transitionEnd: l, ...a} = e.makeTargetAnimatable(t);
    const u = e.getValue("willChange");
    r && (s = r);
    const c = [], p = i && ((o = e.animationState) === null || o === void 0 ? void 0 : o.getState()[i]);
    for (const f in a) {
        const g = e.getValue(f), v = a[f];
        if (!g || v === void 0 || p && xx(p, f)) continue;
        let x = {delay: n, elapsed: 0, ...s};
        if (e.shouldReduceMotion && Fn.has(f) && (x = {...x, type: !1, delay: 0}), !g.hasAnimated) {
            const h = e.getProps()[Cw];
            h && (x.elapsed = Sw(h, f))
        }
        let E = g.start(sc(f, g, v, x));
        qo(u) && (u.add(f), E = E.then(() => u.remove(f))), c.push(E)
    }
    return Promise.all(c).then(() => {
        l && gw(e, l)
    })
}

function yx(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
    return Array.from(e.variantChildren).sort(wx).forEach((u, c) => {
        s.push(Ma(u, t, {...o, delay: n + a(c)}).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function wx(e, t) {
    return e.sortNodePosition(t)
}

function xx({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

const lc = [J.Animate, J.InView, J.Focus, J.Hover, J.Tap, J.Drag, J.Exit], Sx = [...lc].reverse(), kx = lc.length;

function Cx(e) {
    return t => Promise.all(t.map(({animation: n, options: r}) => vx(e, n, r)))
}

function Ex(e) {
    let t = Cx(e);
    const n = Tx();
    let r = !0;
    const i = (a, u) => {
        const c = Ns(e, u);
        if (c) {
            const {transition: p, transitionEnd: f, ...g} = c;
            a = {...a, ...g, ...f}
        }
        return a
    };

    function o(a) {
        t = a(e)
    }

    function s(a, u) {
        const c = e.getProps(), p = e.getVariantContext(!0) || {}, f = [], g = new Set;
        let v = {}, x = 1 / 0;
        for (let h = 0; h < kx; h++) {
            const d = Sx[h], m = n[d], w = c[d] !== void 0 ? c[d] : p[d], C = ki(w), P = d === u ? m.isActive : null;
            P === !1 && (x = h);
            let R = w === p[d] && w !== c[d] && C;
            if (R && r && e.manuallyAnimateOnMount && (R = !1), m.protectedKeys = {...v}, !m.isActive && P === null || !w && !m.prevProp || Vs(w) || typeof w == "boolean") continue;
            const S = Ax(m.prevProp, w);
            let D = S || d === u && m.isActive && !R && C || h > x && C;
            const M = Array.isArray(w) ? w : [w];
            let Y = M.reduce(i, {});
            P === !1 && (Y = {});
            const {prevResolvedValues: j = {}} = m, B = {...j, ...Y}, K = X => {
                D = !0, g.delete(X), m.needsAnimating[X] = !0
            };
            for (const X in B) {
                const q = Y[X], de = j[X];
                v.hasOwnProperty(X) || (q !== de ? Ko(q) && Ko(de) ? !Sm(q, de) || S ? K(X) : m.protectedKeys[X] = !0 : q !== void 0 ? K(X) : g.add(X) : q !== void 0 && g.has(X) ? K(X) : m.protectedKeys[X] = !0)
            }
            m.prevProp = w, m.prevResolvedValues = Y, m.isActive && (v = {...v, ...Y}), r && e.blockInitialAnimation && (D = !1), D && !R && f.push(...M.map(X => ({
                animation: X,
                options: {type: d, ...a}
            })))
        }
        if (g.size) {
            const h = {};
            g.forEach(d => {
                const m = e.getBaseTarget(d);
                m !== void 0 && (h[d] = m)
            }), f.push({animation: h})
        }
        let E = !!f.length;
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1), r = !1, E ? t(f) : Promise.resolve()
    }

    function l(a, u, c) {
        var p;
        if (n[a].isActive === u) return Promise.resolve();
        (p = e.variantChildren) === null || p === void 0 || p.forEach(g => {
            var v;
            return (v = g.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u)
        }), n[a].isActive = u;
        const f = s(c, a);
        for (const g in n) n[g].protectedKeys = {};
        return f
    }

    return {animateChanges: s, setActive: l, setAnimateFunction: o, getState: () => n}
}

function Ax(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sm(t, e) : !1
}

function gn(e = !1) {
    return {isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
}

function Tx() {
    return {
        [J.Animate]: gn(!0),
        [J.InView]: gn(),
        [J.Hover]: gn(),
        [J.Tap]: gn(),
        [J.Drag]: gn(),
        [J.Focus]: gn(),
        [J.Exit]: gn()
    }
}

const Px = {
    animation: Zt(({visualElement: e, animate: t}) => {
        e.animationState || (e.animationState = Ex(e)), Vs(t) && O.useEffect(() => t.subscribe(e), [t])
    }), exit: Zt(e => {
        const {custom: t, visualElement: n} = e, [r, i] = xm(), o = O.useContext(Ps);
        O.useEffect(() => {
            n.isPresent = r;
            const s = n.animationState && n.animationState.setActive(J.Exit, !r, {custom: o && o.custom || t});
            s && !r && s.then(i)
        }, [r])
    })
}, Qf = (e, t) => Math.abs(e - t);

function Vx(e, t) {
    const n = Qf(e.x, t.x), r = Qf(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}

class bm {
    constructor(t, n, {transformPagePoint: r} = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const u = yl(this.lastMoveEventInfo, this.history), c = this.startEvent !== null,
                p = Vx(u.offset, {x: 0, y: 0}) >= 3;
            if (!c && !p) return;
            const {point: f} = u, {timestamp: g} = _t;
            this.history.push({...f, timestamp: g});
            const {onStart: v, onMove: x} = this.handlers;
            c || (v && v(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, u)
        }, this.handlePointerMove = (u, c) => {
            if (this.lastMoveEvent = u, this.lastMoveEventInfo = vl(c, this.transformPagePoint), fm(u) && u.buttons === 0) {
                this.handlePointerUp(u, c);
                return
            }
            be.update(this.updatePoint, !0)
        }, this.handlePointerUp = (u, c) => {
            this.end();
            const {onEnd: p, onSessionEnd: f} = this.handlers, g = yl(vl(c, this.transformPagePoint), this.history);
            this.startEvent && p && p(u, g), f && f(u, g)
        }, dm(t) && t.touches.length > 1) return;
        this.handlers = n, this.transformPagePoint = r;
        const i = Yu(t), o = vl(i, this.transformPagePoint), {point: s} = o, {timestamp: l} = _t;
        this.history = [{...s, timestamp: l}];
        const {onSessionStart: a} = n;
        a && a(t, yl(o, this.history)), this.removeListeners = Ms(fr(window, "pointermove", this.handlePointerMove), fr(window, "pointerup", this.handlePointerUp), fr(window, "pointercancel", this.handlePointerUp))
    }

    updateHandlers(t) {
        this.handlers = t
    }

    end() {
        this.removeListeners && this.removeListeners(), cn.update(this.updatePoint)
    }
}

function vl(e, t) {
    return t ? {point: t(e.point)} : e
}

function Yf(e, t) {
    return {x: e.x - t.x, y: e.y - t.y}
}

function yl({point: e}, t) {
    return {point: e, delta: Yf(e, Km(t)), offset: Yf(e, Rx(t)), velocity: Lx(t, .1)}
}

function Rx(e) {
    return e[0]
}

function Km(e) {
    return e[e.length - 1]
}

function Lx(e, t) {
    if (e.length < 2) return {x: 0, y: 0};
    let n = e.length - 1, r = null;
    const i = Km(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > wo(t)));) n--;
    if (!r) return {x: 0, y: 0};
    const o = (i.timestamp - r.timestamp) / 1e3;
    if (o === 0) return {x: 0, y: 0};
    const s = {x: (i.x - r.x) / o, y: (i.y - r.y) / o};
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function $e(e) {
    return e.max - e.min
}

function Da(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function Gf(e, t, n, r = .5) {
    e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = $e(n) / $e(t), (Da(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (Da(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function ni(e, t, n, r) {
    Gf(e.x, t.x, n.x, r == null ? void 0 : r.originX), Gf(e.y, t.y, n.y, r == null ? void 0 : r.originY)
}

function Xf(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + $e(t)
}

function Mx(e, t, n) {
    Xf(e.x, t.x, n.x), Xf(e.y, t.y, n.y)
}

function bf(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + $e(t)
}

function ri(e, t, n) {
    bf(e.x, t.x, n.x), bf(e.y, t.y, n.y)
}

function Dx(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e
}

function Kf(e, t, n) {
    return {min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0}
}

function Nx(e, {top: t, left: n, bottom: r, right: i}) {
    return {x: Kf(e.x, n, i), y: Kf(e.y, t, r)}
}

function $f(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {min: n, max: r}
}

function _x(e, t) {
    return {x: $f(e.x, t.x), y: $f(e.y, t.y)}
}

function Ox(e, t) {
    let n = .5;
    const r = $e(e), i = $e(t);
    return i > r ? n = es(t.min, t.max - r, e.min) : r > i && (n = es(e.min, e.max - i, t.min)), xr(0, 1, n)
}

function Fx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}

const Na = .35;

function Ix(e = Na) {
    return e === !1 ? e = 0 : e === !0 && (e = Na), {x: Zf(e, "left", "right"), y: Zf(e, "top", "bottom")}
}

function Zf(e, t, n) {
    return {min: qf(e, t), max: qf(e, n)}
}

function qf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}

const Jf = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}), ii = () => ({x: Jf(), y: Jf()}),
    ed = () => ({min: 0, max: 0}), ye = () => ({x: ed(), y: ed()});

function wt(e) {
    return [e("x"), e("y")]
}

function $m({top: e, left: t, right: n, bottom: r}) {
    return {x: {min: t, max: n}, y: {min: e, max: r}}
}

function zx({x: e, y: t}) {
    return {top: t.min, right: e.max, bottom: t.max, left: e.min}
}

function Bx(e, t) {
    if (!t) return e;
    const n = t({x: e.left, y: e.top}), r = t({x: e.right, y: e.bottom});
    return {top: n.y, left: n.x, bottom: r.y, right: r.x}
}

function wl(e) {
    return e === void 0 || e === 1
}

function _a({scale: e, scaleX: t, scaleY: n}) {
    return !wl(e) || !wl(t) || !wl(n)
}

function wn(e) {
    return _a(e) || Zm(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function Zm(e) {
    return td(e.x) || td(e.y)
}

function td(e) {
    return e && e !== "0%"
}

function rs(e, t, n) {
    const r = e - n, i = t * r;
    return n + i
}

function nd(e, t, n, r, i) {
    return i !== void 0 && (e = rs(e, i, r)), rs(e, n, r) + t
}

function Oa(e, t = 0, n = 1, r, i) {
    e.min = nd(e.min, t, n, r, i), e.max = nd(e.max, t, n, r, i)
}

function qm(e, {x: t, y: n}) {
    Oa(e.x, t.translate, t.scale, t.originPoint), Oa(e.y, n.translate, n.scale, n.originPoint)
}

function Ux(e, t, n, r = !1) {
    var i, o;
    const s = n.length;
    if (!s) return;
    t.x = t.y = 1;
    let l, a;
    for (let u = 0; u < s; u++) l = n[u], a = l.projectionDelta, ((o = (i = l.instance) === null || i === void 0 ? void 0 : i.style) === null || o === void 0 ? void 0 : o.display) !== "contents" && (r && l.options.layoutScroll && l.scroll && l !== l.root && rr(e, {
        x: -l.scroll.offset.x,
        y: -l.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, qm(e, a)), r && wn(l.latestValues) && rr(e, l.latestValues));
    t.x = rd(t.x), t.y = rd(t.y)
}

function rd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Gt(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function id(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : .5, s = fe(e.min, e.max, o);
    Oa(e, t[n], t[r], s, t.scale)
}

const jx = ["x", "scaleX", "originX"], Hx = ["y", "scaleY", "originY"];

function rr(e, t) {
    id(e.x, t, jx), id(e.y, t, Hx)
}

function Jm(e, t) {
    return $m(Bx(e.getBoundingClientRect(), t))
}

function Wx(e, t, n) {
    const r = Jm(e, n), {scroll: i} = t;
    return i && (Gt(r.x, i.offset.x), Gt(r.y, i.offset.y)), r
}

const Qx = new WeakMap;

class Yx {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ye(), this.visualElement = t
    }

    start(t, {snapToCursor: n = !1} = {}) {
        if (this.visualElement.isPresent === !1) return;
        const r = l => {
            this.stopAnimation(), n && this.snapToCursor(Yu(l, "page").point)
        }, i = (l, a) => {
            var u;
            const {drag: c, dragPropagation: p, onDragStart: f} = this.getProps();
            c && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = gm(c), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), wt(g => {
                var v, x;
                let E = this.getAxisMotionValue(g).get() || 0;
                if (Et.test(E)) {
                    const h = (x = (v = this.visualElement.projection) === null || v === void 0 ? void 0 : v.layout) === null || x === void 0 ? void 0 : x.layoutBox[g];
                    h && (E = $e(h) * (parseFloat(E) / 100))
                }
                this.originPoint[g] = E
            }), f == null || f(l, a), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(J.Drag, !0))
        }, o = (l, a) => {
            const {dragPropagation: u, dragDirectionLock: c, onDirectionLock: p, onDrag: f} = this.getProps();
            if (!u && !this.openGlobalLock) return;
            const {offset: g} = a;
            if (c && this.currentDirection === null) {
                this.currentDirection = Gx(g), this.currentDirection !== null && (p == null || p(this.currentDirection));
                return
            }
            this.updateAxis("x", a.point, g), this.updateAxis("y", a.point, g), this.visualElement.render(), f == null || f(l, a)
        }, s = (l, a) => this.stop(l, a);
        this.panSession = new bm(t, {
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: s
        }, {transformPagePoint: this.visualElement.getTransformPagePoint()})
    }

    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o == null || o(t, n)
    }

    cancel() {
        var t, n;
        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(J.Drag, !1)
    }

    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !no(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = Dx(s, this.constraints[t], this.elastic[t])), o.set(s)
    }

    resolveConstraints() {
        const {dragConstraints: t, dragElastic: n} = this.getProps(), {layout: r} = this.visualElement.projection || {},
            i = this.constraints;
        t && tr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Nx(r.layoutBox, t) : this.constraints = !1, this.elastic = Ix(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && wt(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = Fx(r.layoutBox[o], this.constraints[o]))
        })
    }

    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !tr(t)) return !1;
        const r = t.current, {projection: i} = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = Wx(r, i.root, this.visualElement.getTransformPagePoint());
        let s = _x(i.layout.layoutBox, o);
        if (n) {
            const l = n(zx(s));
            this.hasMutatedConstraints = !!l, l && (s = $m(l))
        }
        return s
    }

    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: l
        } = this.getProps(), a = this.constraints || {}, u = wt(c => {
            if (!no(c, n, this.currentDirection)) return;
            let p = (a == null ? void 0 : a[c]) || {};
            s && (p = {min: 0, max: 0});
            const f = i ? 200 : 1e6, g = i ? 40 : 1e7, v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10, ...o, ...p
            };
            return this.startAxisValueAnimation(c, v)
        });
        return Promise.all(u).then(l)
    }

    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(sc(t, r, 0, n))
    }

    stopAnimation() {
        wt(t => this.getAxisMotionValue(t).stop())
    }

    getAxisMotionValue(t) {
        var n;
        const r = "_drag" + t.toUpperCase(), i = this.visualElement.getProps()[r];
        return i || this.visualElement.getValue(t, ((n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) || 0)
    }

    snapToCursor(t) {
        wt(n => {
            const {drag: r} = this.getProps();
            if (!no(n, r, this.currentDirection)) return;
            const {projection: i} = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - fe(s, l, .5))
            }
        })
    }

    scalePositionWithinConstraints() {
        var t;
        if (!this.visualElement.current) return;
        const {drag: n, dragConstraints: r} = this.getProps(), {projection: i} = this.visualElement;
        if (!tr(r) || !i || !this.constraints) return;
        this.stopAnimation();
        const o = {x: 0, y: 0};
        wt(l => {
            const a = this.getAxisMotionValue(l);
            if (a) {
                const u = a.get();
                o[l] = Ox({min: u, max: u}, this.constraints[l])
            }
        });
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", (t = i.root) === null || t === void 0 || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), wt(l => {
            if (!no(l, n, null)) return;
            const a = this.getAxisMotionValue(l), {min: u, max: c} = this.constraints[l];
            a.set(fe(u, c, o[l]))
        })
    }

    addListeners() {
        var t;
        if (!this.visualElement.current) return;
        Qx.set(this.visualElement, this);
        const n = this.visualElement.current, r = fr(n, "pointerdown", u => {
            const {drag: c, dragListener: p = !0} = this.getProps();
            c && p && this.start(u)
        }), i = () => {
            const {dragConstraints: u} = this.getProps();
            tr(u) && (this.constraints = this.resolveRefConstraints())
        }, {projection: o} = this.visualElement, s = o.addEventListener("measure", i);
        o && !o.layout && ((t = o.root) === null || t === void 0 || t.updateScroll(), o.updateLayout()), i();
        const l = Ls(window, "resize", () => this.scalePositionWithinConstraints()),
            a = o.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
                this.isDragging && c && (wt(p => {
                    const f = this.getAxisMotionValue(p);
                    f && (this.originPoint[p] += u[p].translate, f.set(f.get() + u[p].translate))
                }), this.visualElement.render())
            });
        return () => {
            l(), r(), s(), a == null || a()
        }
    }

    getProps() {
        const t = this.visualElement.getProps(), {
            drag: n = !1,
            dragDirectionLock: r = !1,
            dragPropagation: i = !1,
            dragConstraints: o = !1,
            dragElastic: s = Na,
            dragMomentum: l = !0
        } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}

function no(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function Gx(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}

function Xx(e) {
    const {dragControls: t, visualElement: n} = e, r = Fu(() => new Yx(n));
    O.useEffect(() => t && t.subscribe(r), [r, t]), O.useEffect(() => r.addListeners(), [r])
}

function bx({onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: i}) {
    const o = e || t || n || r, s = O.useRef(null), {transformPagePoint: l} = O.useContext(Ou), a = {
        onSessionStart: r, onStart: t, onMove: e, onEnd: (c, p) => {
            s.current = null, n && n(c, p)
        }
    };
    O.useEffect(() => {
        s.current !== null && s.current.updateHandlers(a)
    });

    function u(c) {
        s.current = new bm(c, a, {transformPagePoint: l})
    }

    $o(i, "pointerdown", o && u), wm(() => s.current && s.current.end())
}

const Kx = {pan: Zt(bx), drag: Zt(Xx)};

function Fa(e) {
    return typeof e == "string" && e.startsWith("var(--")
}

const e0 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function $x(e) {
    const t = e0.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r]
}

function Ia(e, t, n = 1) {
    const [r, i] = $x(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    return o ? o.trim() : Fa(i) ? Ia(i, t, n + 1) : i
}

function Zx(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {target: t, transitionEnd: n};
    n && (n = {...n}), e.values.forEach(i => {
        const o = i.get();
        if (!Fa(o)) return;
        const s = Ia(o, r);
        s && i.set(s)
    });
    for (const i in t) {
        const o = t[i];
        if (!Fa(o)) continue;
        const s = Ia(o, r);
        s && (t[i] = s, n && n[i] === void 0 && (n[i] = o))
    }
    return {target: t, transitionEnd: n}
}

const qx = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), t0 = e => qx.has(e),
    Jx = e => Object.keys(e).some(t0), n0 = (e, t) => {
        e.set(t, !1), e.set(t)
    }, od = e => e === In || e === H;
var sd;
(function (e) {
    e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
})(sd || (sd = {}));
const ld = (e, t) => parseFloat(e.split(", ")[t]), ad = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r) return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i) return ld(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? ld(o[1], e) : 0
    }
}, eS = new Set(["x", "y", "z"]), tS = Xo.filter(e => !eS.has(e));

function nS(e) {
    const t = [];
    return tS.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}

const ud = {
    width: ({x: e}, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t = "0", paddingBottom: n = "0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: ad(4, 13),
    y: ad(5, 14)
}, rS = (e, t, n) => {
    const r = t.measureViewportBox(), i = t.current, o = getComputedStyle(i), {display: s} = o, l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(u => {
        l[u] = ud[u](r, o)
    }), t.render();
    const a = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        n0(c, l[u]), e[u] = ud[u](a, o)
    }), e
}, iS = (e, t, n = {}, r = {}) => {
    t = {...t}, r = {...r};
    const i = Object.keys(t).filter(t0);
    let o = [], s = !1;
    const l = [];
    if (i.forEach(a => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a], p = _r(c);
        const f = t[a];
        let g;
        if (Ko(f)) {
            const v = f.length, x = f[0] === null ? 1 : 0;
            c = f[x], p = _r(c);
            for (let E = x; E < v; E++) g ? Jo(_r(f[E]) === g) : g = _r(f[E])
        } else g = _r(f);
        if (p !== g) if (od(p) && od(g)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)), typeof f == "string" ? t[a] = parseFloat(f) : Array.isArray(f) && g === H && (t[a] = f.map(parseFloat))
        } else p != null && p.transform && (g != null && g.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(g.transform(c)) : t[a] = p.transform(f) : (s || (o = nS(e), s = !0), l.push(a), r[a] = r[a] !== void 0 ? r[a] : t[a], n0(u, f))
    }), l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null, u = rS(t, e, l);
        return o.length && o.forEach(([c, p]) => {
            e.getValue(c).set(p)
        }), e.render(), On && a !== null && window.scrollTo({top: a}), {target: u, transitionEnd: r}
    } else return {target: t, transitionEnd: r}
};

function oS(e, t, n, r) {
    return Jx(t) ? iS(e, t, n, r) : {target: t, transitionEnd: r}
}

const sS = (e, t, n, r) => {
    const i = Zx(e, t, r);
    return t = i.target, r = i.transitionEnd, oS(e, t, n, r)
}, za = {current: null}, r0 = {current: !1};

function lS() {
    if (r0.current = !0, !!On) if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => za.current = e.matches;
        e.addListener(t), t()
    } else za.current = !1
}

function aS(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const o = t[i], s = n[i];
        if (At(o)) e.addValue(i, o), qo(r) && r.add(i); else if (At(s)) e.addValue(i, Sr(o, {owner: e})), qo(r) && r.remove(i); else if (s !== o) if (e.hasValue(i)) {
            const l = e.getValue(i);
            !l.hasAnimated && l.set(o)
        } else {
            const l = e.getStaticValue(i);
            e.addValue(i, Sr(l !== void 0 ? l : o))
        }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}

const i0 = Object.keys(Ci), uS = i0.length,
    cd = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];

class cS {
    constructor({parent: t, props: n, reducedMotionConfig: r, visualState: i}, o = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => be.render(this.render, !1, !0);
        const {latestValues: s, renderState: l} = i;
        this.latestValues = s, this.baseTarget = {...s}, this.initialValues = n.initial ? {...s} : {}, this.renderState = l, this.parent = t, this.props = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.isControllingVariants = Rs(n), this.isVariantNode = Zh(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: a, ...u} = this.scrapeMotionValuesFromProps(n);
        for (const c in u) {
            const p = u[c];
            s[c] !== void 0 && At(p) && (p.set(s[c], !1), qo(a) && a.add(c))
        }
    }

    scrapeMotionValuesFromProps(t) {
        return {}
    }

    mount(t) {
        var n;
        this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), r0.current || lS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : za.current, this.parent && this.parent.children.add(this), this.setProps(this.props)
    }

    unmount() {
        var t, n, r;
        (t = this.projection) === null || t === void 0 || t.unmount(), cn.update(this.notifyUpdate), cn.render(this.render), this.valueSubscriptions.forEach(i => i()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
        for (const i in this.events) this.events[i].clear();
        this.current = null
    }

    bindToMotionValue(t, n) {
        const r = Fn.has(t), i = n.on("change", s => {
            this.latestValues[t] = s, this.props.onUpdate && be.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
        }), o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), o()
        })
    }

    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }

    loadFeatures(t, n, r, i, o, s) {
        const l = [];
        for (let a = 0; a < uS; a++) {
            const u = i0[a], {isEnabled: c, Component: p} = Ci[u];
            c(t) && p && l.push(O.createElement(p, {key: u, ...t, visualElement: this}))
        }
        if (!this.projection && o) {
            this.projection = new o(i, this.latestValues, this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: c, dragConstraints: p, layoutScroll: f} = t;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || p && tr(p),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: f
            })
        }
        return l
    }

    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }

    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ye()
    }

    getStaticValue(t) {
        return this.latestValues[t]
    }

    setStaticValue(t, n) {
        this.latestValues[t] = n
    }

    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }

    setProps(t) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
        for (let n = 0; n < cd.length; n++) {
            const r = cd[n];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
            const i = t["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i))
        }
        this.prevMotionValues = aS(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
    }

    getProps() {
        return this.props
    }

    getVariant(t) {
        var n;
        return (n = this.props.variants) === null || n === void 0 ? void 0 : n[t]
    }

    getDefaultTransition() {
        return this.props.transition
    }

    getTransformPagePoint() {
        return this.props.transformPagePoint
    }

    getClosestVariantNode() {
        var t;
        return this.isVariantNode ? this : (t = this.parent) === null || t === void 0 ? void 0 : t.getClosestVariantNode()
    }

    getVariantContext(t = !1) {
        var n, r;
        if (t) return (n = this.parent) === null || n === void 0 ? void 0 : n.getVariantContext();
        if (!this.isControllingVariants) {
            const o = ((r = this.parent) === null || r === void 0 ? void 0 : r.getVariantContext()) || {};
            return this.props.initial !== void 0 && (o.initial = this.props.initial), o
        }
        const i = {};
        for (let o = 0; o < fS; o++) {
            const s = o0[o], l = this.props[s];
            (ki(l) || l === !1) && (i[s] = l)
        }
        return i
    }

    addVariantChild(t) {
        var n;
        const r = this.getClosestVariantNode();
        if (r) return (n = r.variantChildren) === null || n === void 0 || n.add(t), () => r.variantChildren.delete(t)
    }

    addValue(t, n) {
        this.hasValue(t) && this.removeValue(t), this.values.set(t, n), this.latestValues[t] = n.get(), this.bindToMotionValue(t, n)
    }

    removeValue(t) {
        var n;
        this.values.delete(t), (n = this.valueSubscriptions.get(t)) === null || n === void 0 || n(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }

    hasValue(t) {
        return this.values.has(t)
    }

    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Sr(n, {owner: this}), this.addValue(t, r)), r
    }

    readValue(t) {
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options)
    }

    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }

    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props,
            i = typeof r == "string" || typeof r == "object" ? (n = Qu(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !At(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }

    on(t, n) {
        return this.events[t] || (this.events[t] = new bu), this.events[t].add(n)
    }

    notify(t, ...n) {
        var r;
        (r = this.events[t]) === null || r === void 0 || r.notify(...n)
    }
}

const o0 = ["initial", ...lc], fS = o0.length;

class s0 extends cS {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }

    getBaseTargetFromProps(t, n) {
        var r;
        return (r = t.style) === null || r === void 0 ? void 0 : r[n]
    }

    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t], delete r[t]
    }

    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: i}, o) {
        let s = ww(r, t || {}, this);
        if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
            vw(this, r, s);
            const l = sS(this, r, s, n);
            n = l.transitionEnd, r = l.target
        }
        return {transition: t, transitionEnd: n, ...r}
    }
}

function dS(e) {
    return window.getComputedStyle(e)
}

class pS extends s0 {
    readValueFromInstance(t, n) {
        if (Fn.has(n)) {
            const r = Zu(n);
            return r && r.default || 0
        } else {
            const r = dS(t), i = (tm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }

    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Jm(t, n)
    }

    build(t, n, r, i) {
        zu(t, n, r, i.transformTemplate)
    }

    scrapeMotionValuesFromProps(t) {
        return Wu(t)
    }

    renderInstance(t, n, r, i) {
        sm(t, n, r, i)
    }
}

class hS extends s0 {
    constructor() {
        super(...arguments), this.isSVGTag = !1
    }

    getBaseTargetFromProps(t, n) {
        return t[n]
    }

    readValueFromInstance(t, n) {
        var r;
        return Fn.has(n) ? ((r = Zu(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = lm.has(n) ? n : Hu(n), t.getAttribute(n))
    }

    measureInstanceViewportBox() {
        return ye()
    }

    scrapeMotionValuesFromProps(t) {
        return um(t)
    }

    build(t, n, r, i) {
        Uu(t, n, r, this.isSVGTag, i.transformTemplate)
    }

    renderInstance(t, n, r, i) {
        am(t, n, r, i)
    }

    mount(t) {
        this.isSVGTag = ju(t.tagName), super.mount(t)
    }
}

const mS = (e, t) => Iu(e) ? new hS(t, {enableHardwareAcceleration: !1}) : new pS(t, {enableHardwareAcceleration: !0});

function fd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}

const Or = {
    correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string") if (H.test(e)) e = parseFloat(e); else return e;
        const n = fd(e, t.target.x), r = fd(e, t.target.y);
        return `${n}% ${r}%`
    }
}, dd = "_$css", gS = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e, i = e.includes("var("), o = [];
        i && (e = e.replace(e0, g => (o.push(g), dd)));
        const s = fn.parse(e);
        if (s.length > 5) return r;
        const l = fn.createTransformer(e), a = typeof s[0] != "number" ? 1 : 0, u = n.x.scale * t.x,
            c = n.y.scale * t.y;
        s[0 + a] /= u, s[1 + a] /= c;
        const p = fe(u, c, .5);
        typeof s[2 + a] == "number" && (s[2 + a] /= p), typeof s[3 + a] == "number" && (s[3 + a] /= p);
        let f = l(s);
        if (i) {
            let g = 0;
            f = f.replace(dd, () => {
                const v = o[g];
                return g++, v
            })
        }
        return f
    }
};

class vS extends pt.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props, {projection: o} = t;
        Qy(wS), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({...o.options, onExitComplete: () => this.safeToRemove()})), Jr.hasEverUpdated = !0
    }

    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || be.postRender(() => {
            var l;
            !((l = s.getStack()) === null || l === void 0) && l.members.length || this.safeToRemove()
        }))), null
    }

    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
    }

    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props, {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(i), r != null && r.deregister && r.deregister(i))
    }

    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t == null || t()
    }

    render() {
        return null
    }
}

function yS(e) {
    const [t, n] = xm(), r = O.useContext(qh);
    return pt.createElement(vS, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: O.useContext(Jh),
        isPresent: t,
        safeToRemove: n
    })
}

const wS = {
    borderRadius: {
        ...Or,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Or,
    borderTopRightRadius: Or,
    borderBottomLeftRadius: Or,
    borderBottomRightRadius: Or,
    boxShadow: gS
}, xS = {measureLayout: yS};

function SS(e, t, n = {}) {
    const r = At(e) ? e : Sr(e);
    return r.start(sc("", r, t, n)), {stop: () => r.stop(), isAnimating: () => r.isAnimating()}
}

const l0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], kS = l0.length,
    pd = e => typeof e == "string" ? parseFloat(e) : e, hd = e => typeof e == "number" || H.test(e);

function CS(e, t, n, r, i, o) {
    i ? (e.opacity = fe(0, n.opacity !== void 0 ? n.opacity : 1, ES(r)), e.opacityExit = fe(t.opacity !== void 0 ? t.opacity : 1, 0, AS(r))) : o && (e.opacity = fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < kS; s++) {
        const l = `border${l0[s]}Radius`;
        let a = md(t, l), u = md(n, l);
        if (a === void 0 && u === void 0) continue;
        a || (a = 0), u || (u = 0), a === 0 || u === 0 || hd(a) === hd(u) ? (e[l] = Math.max(fe(pd(a), pd(u), r), 0), (Et.test(u) || Et.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r))
}

function md(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}

const ES = a0(0, .5, ic), AS = a0(.5, .95, rc);

function a0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(es(e, t, r))
}

function gd(e, t) {
    e.min = t.min, e.max = t.max
}

function at(e, t) {
    gd(e.x, t.x), gd(e.y, t.y)
}

function vd(e, t, n, r, i) {
    return e -= t, e = rs(e, 1 / n, r), i !== void 0 && (e = rs(e, 1 / i, r)), e
}

function TS(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Et.test(t) && (t = parseFloat(t), t = fe(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let l = fe(o.min, o.max, r);
    e === o && (l -= t), e.min = vd(e.min, t, n, l, i), e.max = vd(e.max, t, n, l, i)
}

function yd(e, t, [n, r, i], o, s) {
    TS(e, t[n], t[r], t[i], t.scale, o, s)
}

const PS = ["x", "scaleX", "originX"], VS = ["y", "scaleY", "originY"];

function wd(e, t, n, r) {
    yd(e.x, t, PS, n == null ? void 0 : n.x, r == null ? void 0 : r.x), yd(e.y, t, VS, n == null ? void 0 : n.y, r == null ? void 0 : r.y)
}

function xd(e) {
    return e.translate === 0 && e.scale === 1
}

function u0(e) {
    return xd(e.x) && xd(e.y)
}

function c0(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function Sd(e) {
    return $e(e.x) / $e(e.y)
}

class RS {
    constructor() {
        this.members = []
    }

    add(t) {
        Gu(this.members, t), t.scheduleRender()
    }

    remove(t) {
        if (Xu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }

    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }

    promote(t, n) {
        var r;
        const i = this.lead;
        if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, n && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: o} = t.options;
            o === !1 && i.hide()
        }
    }

    exitAnimationComplete() {
        this.members.forEach(t => {
            var n, r, i, o, s;
            (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n), (s = (i = t.resumingFrom) === null || i === void 0 ? void 0 : (o = i.options).onExitComplete) === null || s === void 0 || s.call(o)
        })
    }

    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }

    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function kd(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (r += `rotate(${a}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x, l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none"
}

const LS = (e, t) => e.depth - t.depth;

class MS {
    constructor() {
        this.children = [], this.isDirty = !1
    }

    add(t) {
        Gu(this.children, t), this.isDirty = !0
    }

    remove(t) {
        Xu(this.children, t), this.isDirty = !0
    }

    forEach(t) {
        this.isDirty && this.children.sort(LS), this.isDirty = !1, this.children.forEach(t)
    }
}

const Cd = ["", "X", "Y", "Z"], Ed = 1e3;
let DS = 0;

function f0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s, l = {}, a = t == null ? void 0 : t()) {
            this.id = DS++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.nodes.forEach(OS), this.nodes.forEach(zS), this.nodes.forEach(BS)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = s, this.latestValues = l, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0, s && this.root.registerPotentialNode(s, this);
            for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new MS)
        }

        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new bu), this.eventHandlers.get(s).add(l)
        }

        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a == null || a.notify(...l)
        }

        hasListeners(s) {
            return this.eventHandlers.has(s)
        }

        registerPotentialNode(s, l) {
            this.potentialNodes.set(s, l)
        }

        mount(s, l = !1) {
            var a;
            if (this.instance) return;
            this.isSVG = s instanceof SVGElement && s.tagName !== "svg", this.instance = s;
            const {layoutId: u, layout: c, visualElement: p} = this.options;
            if (p && !p.current && p.mount(s), this.root.nodes.add(this), (a = this.parent) === null || a === void 0 || a.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), l && (c || u) && (this.isLayoutDirty = !0), e) {
                let f;
                const g = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = Qm(g, 250), Jr.hasAnimatedSinceResize && (Jr.hasAnimatedSinceResize = !1, this.nodes.forEach(Td))
                })
            }
            u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && p && (u || c) && this.addEventListener("didUpdate", ({
                                                                                                                                                delta: f,
                                                                                                                                                hasLayoutChanged: g,
                                                                                                                                                hasRelativeTargetChanged: v,
                                                                                                                                                layout: x
                                                                                                                                            }) => {
                var E, h, d, m, w;
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const C = (h = (E = this.options.transition) !== null && E !== void 0 ? E : p.getDefaultTransition()) !== null && h !== void 0 ? h : QS, {
                    onLayoutAnimationStart: P,
                    onLayoutAnimationComplete: R
                } = p.getProps(), S = !this.targetLayout || !c0(this.targetLayout, x) || v, D = !g && v;
                if (!((d = this.resumeFrom) === null || d === void 0) && d.instance || D || g && (S || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, D);
                    const M = {...Ym(C, "layout"), onPlay: P, onComplete: R};
                    p.shouldReduceMotion && (M.delay = 0, M.type = !1), this.startAnimation(M)
                } else !g && this.animationProgress === 0 && Td(this), this.isLead() && ((w = (m = this.options).onExitComplete) === null || w === void 0 || w.call(m));
                this.targetLayout = x
            })
        }

        unmount() {
            var s, l;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (s = this.getStack()) === null || s === void 0 || s.remove(this), (l = this.parent) === null || l === void 0 || l.children.delete(this), this.instance = void 0, cn.preRender(this.updateProjection)
        }

        blockUpdate() {
            this.updateManuallyBlocked = !0
        }

        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }

        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }

        isTreeAnimationBlocked() {
            var s;
            return this.isAnimationBlocked || ((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimationBlocked()) || !1
        }

        startUpdate() {
            var s;
            this.isUpdateBlocked() || (this.isUpdating = !0, (s = this.nodes) === null || s === void 0 || s.forEach(US), this.animationId++)
        }

        willUpdate(s = !0) {
            var l, a, u;
            if (this.root.isUpdateBlocked()) {
                (a = (l = this.options).onExitComplete) === null || a === void 0 || a.call(l);
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                v.shouldResetTransform = !0, v.updateScroll("snapshot")
            }
            const {layoutId: c, layout: p} = this.options;
            if (c === void 0 && !p) return;
            const f = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
            this.prevTransformTemplateValue = f == null ? void 0 : f(this.latestValues, ""), this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }

        didUpdate() {
            if (this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ad);
                return
            }
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(YS), this.potentialNodes.clear()), this.nodes.forEach(IS), this.nodes.forEach(NS), this.nodes.forEach(_S), this.clearAllSnapshots(), cl.update(), cl.preRender(), cl.render())
        }

        clearAllSnapshots() {
            this.nodes.forEach(FS), this.sharedNodes.forEach(jS)
        }

        scheduleUpdateProjection() {
            be.preRender(this.updateProjection, !1, !0)
        }

        scheduleCheckAfterUnmount() {
            be.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }

        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }

        updateLayout() {
            var s;
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance) for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
            const l = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (s = this.options.visualElement) === null || s === void 0 || s.notify("LayoutMeasure", this.layout.layoutBox, l == null ? void 0 : l.layoutBox)
        }

        updateScroll(s = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }

        resetTransform() {
            var s;
            if (!i) return;
            const l = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !u0(this.projectionDelta),
                u = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate,
                c = u == null ? void 0 : u(this.latestValues, ""), p = c !== this.prevTransformTemplateValue;
            l && (a || wn(this.latestValues) || p) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }

        measure(s = !0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)), GS(a), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }

        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s) return ye();
            const l = s.measureViewportBox(), {scroll: a} = this.root;
            return a && (Gt(l.x, a.offset.x), Gt(l.y, a.offset.y)), l
        }

        removeElementScroll(s) {
            const l = ye();
            at(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a], {scroll: c, options: p} = u;
                if (u !== this.root && c && p.layoutScroll) {
                    if (c.isRoot) {
                        at(l, s);
                        const {scroll: f} = this.root;
                        f && (Gt(l.x, -f.offset.x), Gt(l.y, -f.offset.y))
                    }
                    Gt(l.x, c.offset.x), Gt(l.y, c.offset.y)
                }
            }
            return l
        }

        applyTransform(s, l = !1) {
            const a = ye();
            at(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && rr(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), wn(c.latestValues) && rr(a, c.latestValues)
            }
            return wn(this.latestValues) && rr(a, this.latestValues), a
        }

        removeTransform(s) {
            var l;
            const a = ye();
            at(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !wn(c.latestValues)) continue;
                _a(c.latestValues) && c.updateSnapshot();
                const p = ye(), f = c.measurePageBox();
                at(p, f), wd(a, c.latestValues, (l = c.snapshot) === null || l === void 0 ? void 0 : l.layoutBox, p)
            }
            return wn(this.latestValues) && wd(a, this.latestValues), a
        }

        setTargetDelta(s) {
            this.targetDelta = s, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
        }

        setOptions(s) {
            this.options = {...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0}
        }

        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }

        resolveTargetDelta() {
            var s;
            const l = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {layout: a, layoutId: u} = this.options;
            if (!(!this.layout || !(a || u))) {
                if (!this.targetDelta && !this.relativeTarget) {
                    const c = this.getClosestProjectingParent();
                    c && c.layout ? (this.relativeParent = c, this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), ri(this.relativeTargetOrigin, this.layout.layoutBox, c.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ye(), this.targetWithTransforms = ye()), this.relativeTarget && this.relativeTargetOrigin && (!((s = this.relativeParent) === null || s === void 0) && s.target) ? Mx(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), qm(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const c = this.getClosestProjectingParent();
                    c && !!c.resumingFrom == !!this.resumingFrom && !c.options.layoutScroll && c.target ? (this.relativeParent = c, this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), ri(this.relativeTargetOrigin, this.target, c.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }

        getClosestProjectingParent() {
            if (!(!this.parent || _a(this.parent.latestValues) || Zm(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
        }

        calcProjection() {
            var s;
            const {isProjectionDirty: l, isTransformDirty: a} = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const u = this.getLead(), c = !!this.resumingFrom || this !== u;
            let p = !0;
            if (l && (p = !1), c && a && (p = !1), p) return;
            const {layout: f, layoutId: g} = this.options;
            if (this.isTreeAnimating = !!(!((s = this.parent) === null || s === void 0) && s.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || g)) return;
            at(this.layoutCorrected, this.layout.layoutBox), Ux(this.layoutCorrected, this.treeScale, this.path, c);
            const {target: v} = u;
            if (!v) return;
            this.projectionDelta || (this.projectionDelta = ii(), this.projectionDeltaWithTransform = ii());
            const x = this.treeScale.x, E = this.treeScale.y, h = this.projectionTransform;
            ni(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = kd(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== x || this.treeScale.y !== E) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v))
        }

        hide() {
            this.isVisible = !1
        }

        show() {
            this.isVisible = !0
        }

        scheduleRender(s = !0) {
            var l, a, u;
            (a = (l = this.options).scheduleRender) === null || a === void 0 || a.call(l), s && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }

        setAnimationOrigin(s, l = !1) {
            var a, u;
            const c = this.snapshot, p = (c == null ? void 0 : c.latestValues) || {}, f = {...this.latestValues},
                g = ii();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !l;
            const v = ye(),
                x = (c == null ? void 0 : c.source) !== ((a = this.layout) === null || a === void 0 ? void 0 : a.source),
                E = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1,
                h = !!(x && !E && this.options.crossfade === !0 && !this.path.some(WS));
            this.animationProgress = 0, this.mixTargetDelta = d => {
                var m;
                const w = d / 1e3;
                Pd(g.x, s.x, w), Pd(g.y, s.y, w), this.setTargetDelta(g), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((m = this.relativeParent) === null || m === void 0) && m.layout) && (ri(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), HS(this.relativeTarget, this.relativeTargetOrigin, v, w)), x && (this.animationValues = f, CS(f, p, this.latestValues, w, h, E)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w
            }, this.mixTargetDelta(0)
        }

        startAnimation(s) {
            var l, a;
            this.notifyListeners("animationStart"), (l = this.currentAnimation) === null || l === void 0 || l.stop(), this.resumingFrom && ((a = this.resumingFrom.currentAnimation) === null || a === void 0 || a.stop()), this.pendingAnimation && (cn.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = be.update(() => {
                Jr.hasAnimatedSinceResize = !0, this.currentAnimation = SS(0, Ed, {
                    ...s, onUpdate: u => {
                        var c;
                        this.mixTargetDelta(u), (c = s.onUpdate) === null || c === void 0 || c.call(s, u)
                    }, onComplete: () => {
                        var u;
                        (u = s.onComplete) === null || u === void 0 || u.call(s), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }

        completeAnimation() {
            var s;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (s = this.getStack()) === null || s === void 0 || s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }

        finishAnimation() {
            var s;
            this.currentAnimation && ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, Ed), this.currentAnimation.stop()), this.completeAnimation()
        }

        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && d0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ye();
                    const p = $e(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min, a.x.max = a.x.min + p;
                    const f = $e(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min, a.y.max = a.y.min + f
                }
                at(l, a), rr(l, c), ni(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }

        registerSharedNode(s, l) {
            var a, u, c;
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new RS), this.sharedNodes.get(s).add(l), l.promote({
                transition: (a = l.options.initialPromotionConfig) === null || a === void 0 ? void 0 : a.transition,
                preserveFollowOpacity: (c = (u = l.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || c === void 0 ? void 0 : c.call(u, l)
            })
        }

        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }

        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }

        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }

        getStack() {
            const {layoutId: s} = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }

        promote({needsReset: s, transition: l, preserveFollowOpacity: a} = {}) {
            const u = this.getStack();
            u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({transition: l})
        }

        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }

        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s) return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l) return;
            const u = {};
            for (let c = 0; c < Cd.length; c++) {
                const p = "rotate" + Cd[c];
                a[p] && (u[p] = a[p], s.setStaticValue(p, 0))
            }
            s == null || s.render();
            for (const c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }

        getProjectionStyles(s = {}) {
            var l, a, u;
            const c = {};
            if (!this.instance || this.isSVG) return c;
            if (this.isVisible) c.visibility = ""; else return {visibility: "hidden"};
            const p = (l = this.options.visualElement) === null || l === void 0 ? void 0 : l.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = yo(s.pointerEvents) || "", c.transform = p ? p(this.latestValues, "") : "none", c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const E = {};
                return this.options.layoutId && (E.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, E.pointerEvents = yo(s.pointerEvents) || ""), this.hasProjected && !wn(this.latestValues) && (E.transform = p ? p({}, "") : "none", this.hasProjected = !1), E
            }
            const g = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = kd(this.projectionDeltaWithTransform, this.treeScale, g), p && (c.transform = p(g, c.transform));
            const {x: v, y: x} = this.projectionDelta;
            c.transformOrigin = `${v.origin * 100}% ${x.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (u = (a = g.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : c.opacity = f === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const E in Go) {
                if (g[E] === void 0) continue;
                const {correct: h, applyTo: d} = Go[E], m = h(g[E], f);
                if (d) {
                    const w = d.length;
                    for (let C = 0; C < w; C++) c[d[C]] = m
                } else c[E] = m
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? yo(s.pointerEvents) || "" : "none"), c
        }

        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }

        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(Ad), this.root.sharedNodes.clear()
        }
    }
}

function NS(e) {
    e.updateLayout()
}

function _S(e) {
    var t, n, r;
    const i = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: s} = e.layout, {animationType: l} = e.options,
            a = i.source !== e.layout.source;
        l === "size" ? wt(g => {
            const v = a ? i.measuredBox[g] : i.layoutBox[g], x = $e(v);
            v.min = o[g].min, v.max = v.min + x
        }) : d0(l, i.layoutBox, o) && wt(g => {
            const v = a ? i.measuredBox[g] : i.layoutBox[g], x = $e(o[g]);
            v.max = v.min + x
        });
        const u = ii();
        ni(u, o, i.layoutBox);
        const c = ii();
        a ? ni(c, e.applyTransform(s, !0), i.measuredBox) : ni(c, o, i.layoutBox);
        const p = !u0(u);
        let f = !1;
        if (!e.resumeFrom) {
            const g = e.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {snapshot: v, layout: x} = g;
                if (v && x) {
                    const E = ye();
                    ri(E, i.layoutBox, v.layoutBox);
                    const h = ye();
                    ri(h, o, x.layoutBox), c0(E, h) || (f = !0)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: i,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: f
        })
    } else e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
    e.options.transition = void 0
}

function OS(e) {
    e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty))
}

function FS(e) {
    e.clearSnapshot()
}

function Ad(e) {
    e.clearMeasurements()
}

function IS(e) {
    const {visualElement: t} = e.options;
    t != null && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Td(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
}

function zS(e) {
    e.resolveTargetDelta()
}

function BS(e) {
    e.calcProjection()
}

function US(e) {
    e.resetRotation()
}

function jS(e) {
    e.removeLeadSnapshot()
}

function Pd(e, t, n) {
    e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Vd(e, t, n, r) {
    e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r)
}

function HS(e, t, n, r) {
    Vd(e.x, t.x, n.x, r), Vd(e.y, t.y, n.y, r)
}

function WS(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}

const QS = {duration: .45, ease: [.4, 0, .1, 1]};

function YS(e, t) {
    let n = e.root;
    for (let o = e.path.length - 1; o >= 0; o--) if (e.path[o].instance) {
        n = e.path[o];
        break
    }
    const i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    i && e.mount(i, !0)
}

function Rd(e) {
    e.min = Math.round(e.min), e.max = Math.round(e.max)
}

function GS(e) {
    Rd(e.x), Rd(e.y)
}

function d0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Da(Sd(t), Sd(n), .2)
}

const XS = f0({
        attachResizeListener: (e, t) => Ls(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }), xl = {current: void 0}, bS = f0({
        measureScroll: e => ({x: e.scrollLeft, y: e.scrollTop}), defaultParent: () => {
            if (!xl.current) {
                const e = new XS(0, {});
                e.mount(window), e.setOptions({layoutScroll: !0}), xl.current = e
            }
            return xl.current
        }, resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }, checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }), KS = {...Px, ...Y1, ...Kx, ...xS}, Ue = Hy((e, t) => x1(e, t, KS, mS, bS)), $S = ({setSelectedPage: e}) => {
        const t = Kh("(min-width: 1060px)");
        return G("section", {
            id: "home", className: "gap-16 bg-gray-20 py-10 md:h-full md:pb-0", children: [G(Ue.div, {
                className: "md:flex mx-auto w-5/6 items-center justify-center md:h-5/6",
                onViewportEnter: () => e(Xe.Home),
                children: [G("div", {
                    className: "z-10 mt-32 md:basis-3/5",
                    children: [G(Ue.div, {
                        className: "md:-mt-20",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0, amount: .5},
                        transition: {duration: .5},
                        variants: {hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}},
                        children: [T("div", {
                            className: "relative",
                            children: T("div", {
                                className: "before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext",
                                children: T("img", {alt: "home-page-text", src: Ey})
                            })
                        }), T("p", {
                            className: "mt-8 text-sm",
                            children: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now."
                        })]
                    }), G(Ue.div, {
                        className: " mt-8 flex items-center gap-8 justify-start",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0, amount: .5},
                        transition: {delay: .2, duration: .5},
                        variants: {hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}},
                        children: [T(_u, {
                            setSelectedPage: e,
                            children: "Join Now"
                        }), T(As, {
                            className: "text-sm font-bold text-primary-500 underline hover:text-secondary-500",
                            onClick: () => e(Xe.ContactUs),
                            href: `#${Xe.ContactUs}`,
                            children: "Learn More"
                        })]
                    })]
                }), T("div", {
                    className: "flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end",
                    children: T("img", {alt: "home-pageGraphic", src: Ay})
                })]
            }), t && T("div", {
                className: "h-[150px] w-full bg-primary-100 py-10",
                children: T("div", {
                    className: "mx-auto w-5/6",
                    children: G("div", {
                        className: "flex w-3/5 items-center justify-between gap-8",
                        children: [T("img", {alt: "redbull-sponsor", src: Ty}), T("img", {
                            alt: "forbes-sponsor",
                            src: Py
                        }), T("img", {alt: "fortune-sponsor", src: Vy})]
                    })
                })
            })]
        })
    }, is = ({children: e}) => T("h1", {className: "basis-3/5 font-montserrat text-3xl font-bold", children: e}),
    ZS = {hidden: {opacity: 0, scale: .9}, visible: {opacity: 1, scale: 1}},
    qS = ({icon: e, title: t, description: n, setSelectedPage: r}) => G(Ue.div, {
        variants: ZS,
        className: "mt-5 rounded-md border-2 border-grey-100 px-5 py-16 text-center",
        children: [T("div", {
            className: " mb-4 flex justify-center",
            children: T("div", {className: "rounded-full border-2 border-grey-100 bg-primary-100 p-4", children: e})
        }), T("h4", {className: "font-bold", children: t}), T("p", {
            className: "my-3",
            children: n
        }), T(As, {
            className: "text-sm font-bold text-primary-500 underline hover:text-secondary-500",
            onClick: () => r(Xe.ContactUs),
            href: `#${Xe.ContactUs}`,
            children: T("p", {children: "Learn More"})
        })]
    }), JS = [{
        icon: T(wy, {className: "h-6 w-6"}),
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    }, {
        icon: T(xy, {className: "h-6 w-6"}),
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
    }, {
        icon: T(vy, {className: "h-6 w-6"}),
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
    }], ek = {hidden: {}, visible: {transition: {staggerChildren: .2}}}, tk = ({setSelectedPage: e}) => T("section", {
        id: "benefits", className: "mx-auto min-h-full w-5/6 py-20", children: G(Ue.div, {
            onViewportEnter: () => e(Xe.Benefits),
            children: [G("div", {
                className: "md:w--3/5 md:my-5",
                children: [T(is, {children: "MORE THAN JUST GYM."}), T("p", {
                    className: "my-5 text-sm",
                    children: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member."
                })]
            }), T(Ue.div, {
                className: "mt-5 items-center justify-between",
                initial: "hidden",
                whileInView: "visible",
                viewport: {once: !0, amount: .5},
                variants: ek,
                children: JS.map(t => T(qS, {
                    icon: t.icon,
                    title: t.title,
                    description: t.description,
                    setSelectedPage: e
                }, t.title))
            }), G("div", {
                children: [T("img", {}), G("div", {
                    children: [T("div", {
                        className: "relative",
                        children: T("div", {
                            className: "before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves",
                            children: T(Ue.div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {once: !0, amount: .5},
                                transition: {duration: .5},
                                variants: {hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}},
                                children: G(is, {
                                    children: ["MILLIONS OF HAPPY MEMBERS GETTING", " ", T("span", {
                                        className: "text-primary-500",
                                        children: "FIT"
                                    })]
                                })
                            })
                        })
                    }), G(Ue.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0, amount: .5},
                        transition: {delay: .2, duration: .5},
                        variants: {hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}},
                        children: [T("p", {
                            className: "my-5",
                            children: "Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio."
                        }), T("p", {
                            className: "mb-5",
                            children: "Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc."
                        })]
                    }), T("div", {
                        className: "relative mt-16",
                        children: T("div", {
                            className: "before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles",
                            children: T(_u, {setSelectedPage: e, children: "Join Now"})
                        })
                    })]
                })]
            })]
        })
    });
var _i = e => e.type === "checkbox", ir = e => e instanceof Date, _e = e => e == null;
const p0 = e => typeof e == "object";
var Se = e => !_e(e) && !Array.isArray(e) && p0(e) && !ir(e),
    nk = e => Se(e) && e.target ? _i(e.target) ? e.target.checked : e.target.value : e,
    rk = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ik = (e, t) => e.has(rk(t)), ok = e => {
        const t = e.constructor && e.constructor.prototype;
        return Se(t) && t.hasOwnProperty("isPrototypeOf")
    }, ac = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function xn(e) {
    let t;
    const n = Array.isArray(e);
    if (e instanceof Date) t = new Date(e); else if (e instanceof Set) t = new Set(e); else if (!(ac && (e instanceof Blob || e instanceof FileList)) && (n || Se(e))) if (t = n ? [] : {}, !Array.isArray(e) && !ok(e)) t = e; else for (const r in e) t[r] = xn(e[r]); else return e;
    return t
}

var Oi = e => Array.isArray(e) ? e.filter(Boolean) : [], ge = e => e === void 0, z = (e, t, n) => {
    if (!t || !Se(e)) return n;
    const r = Oi(t.split(/[,[\].]+?/)).reduce((i, o) => _e(i) ? i : i[o], e);
    return ge(r) || r === e ? ge(e[t]) ? n : e[t] : r
};
const Ld = {BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change"},
    dt = {onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all"}, Vt = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    };
pt.createContext(null);
var sk = (e, t, n, r = !0) => {
    const i = {defaultValues: t._defaultValues};
    for (const o in e) Object.defineProperty(i, o, {
        get: () => {
            const s = o;
            return t._proxyFormState[s] !== dt.all && (t._proxyFormState[s] = !r || dt.all), n && (n[s] = !0), e[s]
        }
    });
    return i
}, Je = e => Se(e) && !Object.keys(e).length, lk = (e, t, n, r) => {
    n(e);
    const {name: i, ...o} = e;
    return Je(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find(s => t[s] === (!r || dt.all))
}, Sl = e => Array.isArray(e) ? e : [e];

function ak(e) {
    const t = pt.useRef(e);
    t.current = e, pt.useEffect(() => {
        const n = !e.disabled && t.current.subject && t.current.subject.subscribe({next: t.current.next});
        return () => {
            n && n.unsubscribe()
        }
    }, [e.disabled])
}

var St = e => typeof e == "string",
    uk = (e, t, n, r, i) => St(e) ? (r && t.watch.add(e), z(n, e, i)) : Array.isArray(e) ? e.map(o => (r && t.watch.add(o), z(n, o))) : (r && (t.watchAll = !0), n),
    uc = e => /^\w*$/.test(e), h0 = e => Oi(e.replace(/["|']|\]/g, "").split(/\.|\[/));

function ie(e, t, n) {
    let r = -1;
    const i = uc(t) ? [t] : h0(t), o = i.length, s = o - 1;
    for (; ++r < o;) {
        const l = i[r];
        let a = n;
        if (r !== s) {
            const u = e[l];
            a = Se(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : []
        }
        e[l] = a, e = e[l]
    }
    return e
}

var ck = (e, t, n, r, i) => t ? {...n[e], types: {...n[e] && n[e].types ? n[e].types : {}, [r]: i || !0}} : {};
const Ba = (e, t, n) => {
    for (const r of n || Object.keys(e)) {
        const i = z(e, r);
        if (i) {
            const {_f: o, ...s} = i;
            if (o && t(o.name)) {
                if (o.ref.focus) {
                    o.ref.focus();
                    break
                } else if (o.refs && o.refs[0].focus) {
                    o.refs[0].focus();
                    break
                }
            } else Se(s) && Ba(s, t)
        }
    }
};
var Md = e => ({
        isOnSubmit: !e || e === dt.onSubmit,
        isOnBlur: e === dt.onBlur,
        isOnChange: e === dt.onChange,
        isOnAll: e === dt.all,
        isOnTouch: e === dt.onTouched
    }),
    Dd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))),
    fk = (e, t, n) => {
        const r = Oi(z(e, n));
        return ie(r, "root", t[n]), ie(e, n, r), e
    }, dr = e => typeof e == "boolean", cc = e => e.type === "file", qt = e => typeof e == "function", os = e => {
        if (!ac) return !1;
        const t = e ? e.ownerDocument : 0;
        return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    }, xo = e => St(e), fc = e => e.type === "radio", ss = e => e instanceof RegExp;
const Nd = {value: !1, isValid: !1}, _d = {value: !0, isValid: !0};
var m0 = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
            return {value: t, isValid: !!t.length}
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !ge(e[0].attributes.value) ? ge(e[0].value) || e[0].value === "" ? _d : {
            value: e[0].value,
            isValid: !0
        } : _d : Nd
    }
    return Nd
};
const Od = {isValid: !1, value: null};
var g0 = e => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
    isValid: !0,
    value: n.value
} : t, Od) : Od;

function Fd(e, t, n = "validate") {
    if (xo(e) || Array.isArray(e) && e.every(xo) || dr(e) && !e) return {type: n, message: xo(e) ? e : "", ref: t}
}

var jn = e => Se(e) && !ss(e) ? e : {value: e, message: ""}, Id = async (e, t, n, r, i) => {
    const {
        ref: o,
        refs: s,
        required: l,
        maxLength: a,
        minLength: u,
        min: c,
        max: p,
        pattern: f,
        validate: g,
        name: v,
        valueAsNumber: x,
        mount: E,
        disabled: h
    } = e._f, d = z(t, v);
    if (!E || h) return {};
    const m = s ? s[0] : o, w = j => {
            r && m.reportValidity && (m.setCustomValidity(dr(j) ? "" : j || ""), m.reportValidity())
        }, C = {}, P = fc(o), R = _i(o), S = P || R,
        D = (x || cc(o)) && ge(o.value) && ge(d) || os(o) && o.value === "" || d === "" || Array.isArray(d) && !d.length,
        M = ck.bind(null, v, n, C), Y = (j, B, K, X = Vt.maxLength, q = Vt.minLength) => {
            const de = j ? B : K;
            C[v] = {type: j ? X : q, message: de, ref: o, ...M(j ? X : q, de)}
        };
    if (i ? !Array.isArray(d) || !d.length : l && (!S && (D || _e(d)) || dr(d) && !d || R && !m0(s).isValid || P && !g0(s).isValid)) {
        const {value: j, message: B} = xo(l) ? {value: !!l, message: l} : jn(l);
        if (j && (C[v] = {type: Vt.required, message: B, ref: m, ...M(Vt.required, B)}, !n)) return w(B), C
    }
    if (!D && (!_e(c) || !_e(p))) {
        let j, B;
        const K = jn(p), X = jn(c);
        if (!_e(d) && !isNaN(d)) {
            const q = o.valueAsNumber || d && +d;
            _e(K.value) || (j = q > K.value), _e(X.value) || (B = q < X.value)
        } else {
            const q = o.valueAsDate || new Date(d), de = Q => new Date(new Date().toDateString() + " " + Q),
                N = o.type == "time", W = o.type == "week";
            St(K.value) && d && (j = N ? de(d) > de(K.value) : W ? d > K.value : q > new Date(K.value)), St(X.value) && d && (B = N ? de(d) < de(X.value) : W ? d < X.value : q < new Date(X.value))
        }
        if ((j || B) && (Y(!!j, K.message, X.message, Vt.max, Vt.min), !n)) return w(C[v].message), C
    }
    if ((a || u) && !D && (St(d) || i && Array.isArray(d))) {
        const j = jn(a), B = jn(u), K = !_e(j.value) && d.length > +j.value, X = !_e(B.value) && d.length < +B.value;
        if ((K || X) && (Y(K, j.message, B.message), !n)) return w(C[v].message), C
    }
    if (f && !D && St(d)) {
        const {value: j, message: B} = jn(f);
        if (ss(j) && !d.match(j) && (C[v] = {
            type: Vt.pattern,
            message: B,
            ref: o, ...M(Vt.pattern, B)
        }, !n)) return w(B), C
    }
    if (g) {
        if (qt(g)) {
            const j = await g(d, t), B = Fd(j, m);
            if (B && (C[v] = {...B, ...M(Vt.validate, B.message)}, !n)) return w(B.message), C
        } else if (Se(g)) {
            let j = {};
            for (const B in g) {
                if (!Je(j) && !n) break;
                const K = Fd(await g[B](d, t), m, B);
                K && (j = {...K, ...M(B, K.message)}, w(K.message), n && (C[v] = j))
            }
            if (!Je(j) && (C[v] = {ref: m, ...j}, !n)) return C
        }
    }
    return w(!0), C
};

function dk(e, t) {
    const n = t.slice(0, -1).length;
    let r = 0;
    for (; r < n;) e = ge(e) ? r++ : e[t[r++]];
    return e
}

function pk(e) {
    for (const t in e) if (!ge(e[t])) return !1;
    return !0
}

function Ee(e, t) {
    const n = Array.isArray(t) ? t : uc(t) ? [t] : h0(t), r = n.length === 1 ? e : dk(e, n), i = n.length - 1, o = n[i];
    return r && delete r[o], i !== 0 && (Se(r) && Je(r) || Array.isArray(r) && pk(r)) && Ee(e, n.slice(0, -1)), e
}

function kl() {
    let e = [];
    return {
        get observers() {
            return e
        }, next: i => {
            for (const o of e) o.next && o.next(i)
        }, subscribe: i => (e.push(i), {
            unsubscribe: () => {
                e = e.filter(o => o !== i)
            }
        }), unsubscribe: () => {
            e = []
        }
    }
}

var ls = e => _e(e) || !p0(e);

function An(e, t) {
    if (ls(e) || ls(t)) return e === t;
    if (ir(e) && ir(t)) return e.getTime() === t.getTime();
    const n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (const i of n) {
        const o = e[i];
        if (!r.includes(i)) return !1;
        if (i !== "ref") {
            const s = t[i];
            if (ir(o) && ir(s) || Se(o) && Se(s) || Array.isArray(o) && Array.isArray(s) ? !An(o, s) : o !== s) return !1
        }
    }
    return !0
}

var v0 = e => e.type === "select-multiple", hk = e => fc(e) || _i(e), Cl = e => os(e) && e.isConnected, y0 = e => {
    for (const t in e) if (qt(e[t])) return !0;
    return !1
};

function as(e, t = {}) {
    const n = Array.isArray(e);
    if (Se(e) || n) for (const r in e) Array.isArray(e[r]) || Se(e[r]) && !y0(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, as(e[r], t[r])) : _e(e[r]) || (t[r] = !0);
    return t
}

function w0(e, t, n) {
    const r = Array.isArray(e);
    if (Se(e) || r) for (const i in e) Array.isArray(e[i]) || Se(e[i]) && !y0(e[i]) ? ge(t) || ls(n[i]) ? n[i] = Array.isArray(e[i]) ? as(e[i], []) : {...as(e[i])} : w0(e[i], _e(t) ? {} : t[i], n[i]) : n[i] = !An(e[i], t[i]);
    return n
}

var El = (e, t) => w0(e, t, as(t)), x0 = (e, {
    valueAsNumber: t,
    valueAsDate: n,
    setValueAs: r
}) => ge(e) ? e : t ? e === "" ? NaN : e && +e : n && St(e) ? new Date(e) : r ? r(e) : e;

function Al(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled)) return cc(t) ? t.files : fc(t) ? g0(e.refs).value : v0(t) ? [...t.selectedOptions].map(({value: n}) => n) : _i(t) ? m0(e.refs).value : x0(ge(t.value) ? e.ref.value : t.value, e)
}

var mk = (e, t, n, r) => {
        const i = {};
        for (const o of e) {
            const s = z(t, o);
            s && ie(i, o, s._f)
        }
        return {criteriaMode: n, names: [...e], fields: i, shouldUseNativeValidation: r}
    }, Fr = e => ge(e) ? e : ss(e) ? e.source : Se(e) ? ss(e.value) ? e.value.source : e.value : e,
    gk = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function zd(e, t, n) {
    const r = z(e, n);
    if (r || uc(n)) return {error: r, name: n};
    const i = n.split(".");
    for (; i.length;) {
        const o = i.join("."), s = z(t, o), l = z(e, o);
        if (s && !Array.isArray(s) && n !== o) return {name: n};
        if (l && l.type) return {name: o, error: l};
        i.pop()
    }
    return {name: n}
}

var vk = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0,
    yk = (e, t) => !Oi(z(e, t)).length && Ee(e, t);
const wk = {mode: dt.onSubmit, reValidateMode: dt.onChange, shouldFocusError: !0};

function xk(e = {}, t) {
    let n = {...wk, ...e}, r = {
            submitCount: 0,
            isDirty: !1,
            isLoading: qt(n.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {}
        }, i = {}, o = Se(n.defaultValues) || Se(n.values) ? xn(n.defaultValues || n.values) || {} : {},
        s = n.shouldUnregister ? {} : xn(o), l = {action: !1, mount: !1, watch: !1},
        a = {mount: new Set, unMount: new Set, array: new Set, watch: new Set}, u, c = 0;
    const p = {isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1},
        f = {values: kl(), array: kl(), state: kl()}, g = e.resetOptions && e.resetOptions.keepDirtyValues,
        v = Md(n.mode), x = Md(n.reValidateMode), E = n.criteriaMode === dt.all, h = y => k => {
            clearTimeout(c), c = setTimeout(y, k)
        }, d = async y => {
            if (p.isValid || y) {
                const k = n.resolver ? Je((await D()).errors) : await Y(i, !0);
                k !== r.isValid && f.state.next({isValid: k})
            }
        }, m = y => p.isValidating && f.state.next({isValidating: y}), w = (y, k = [], A, I, _ = !0, L = !0) => {
            if (I && A) {
                if (l.action = !0, L && Array.isArray(z(i, y))) {
                    const U = A(z(i, y), I.argA, I.argB);
                    _ && ie(i, y, U)
                }
                if (L && Array.isArray(z(r.errors, y))) {
                    const U = A(z(r.errors, y), I.argA, I.argB);
                    _ && ie(r.errors, y, U), yk(r.errors, y)
                }
                if (p.touchedFields && L && Array.isArray(z(r.touchedFields, y))) {
                    const U = A(z(r.touchedFields, y), I.argA, I.argB);
                    _ && ie(r.touchedFields, y, U)
                }
                p.dirtyFields && (r.dirtyFields = El(o, s)), f.state.next({
                    name: y,
                    isDirty: B(y, k),
                    dirtyFields: r.dirtyFields,
                    errors: r.errors,
                    isValid: r.isValid
                })
            } else ie(s, y, k)
        }, C = (y, k) => {
            ie(r.errors, y, k), f.state.next({errors: r.errors})
        }, P = (y, k, A, I) => {
            const _ = z(i, y);
            if (_) {
                const L = z(s, y, ge(A) ? z(o, y) : A);
                ge(L) || I && I.defaultChecked || k ? ie(s, y, k ? L : Al(_._f)) : q(y, L), l.mount && d()
            }
        }, R = (y, k, A, I, _) => {
            let L = !1, U = !1;
            const ue = {name: y};
            if (!A || I) {
                p.isDirty && (U = r.isDirty, r.isDirty = ue.isDirty = B(), L = U !== ue.isDirty);
                const he = An(z(o, y), k);
                U = z(r.dirtyFields, y), he ? Ee(r.dirtyFields, y) : ie(r.dirtyFields, y, !0), ue.dirtyFields = r.dirtyFields, L = L || p.dirtyFields && U !== !he
            }
            if (A) {
                const he = z(r.touchedFields, y);
                he || (ie(r.touchedFields, y, A), ue.touchedFields = r.touchedFields, L = L || p.touchedFields && he !== A)
            }
            return L && _ && f.state.next(ue), L ? ue : {}
        }, S = (y, k, A, I) => {
            const _ = z(r.errors, y), L = p.isValid && dr(k) && r.isValid !== k;
            if (e.delayError && A ? (u = h(() => C(y, A)), u(e.delayError)) : (clearTimeout(c), u = null, A ? ie(r.errors, y, A) : Ee(r.errors, y)), (A ? !An(_, A) : _) || !Je(I) || L) {
                const U = {...I, ...L && dr(k) ? {isValid: k} : {}, errors: r.errors, name: y};
                r = {...r, ...U}, f.state.next(U)
            }
            m(!1)
        }, D = async y => n.resolver(s, n.context, mk(y || a.mount, i, n.criteriaMode, n.shouldUseNativeValidation)),
        M = async y => {
            const {errors: k} = await D();
            if (y) for (const A of y) {
                const I = z(k, A);
                I ? ie(r.errors, A, I) : Ee(r.errors, A)
            } else r.errors = k;
            return k
        }, Y = async (y, k, A = {valid: !0}) => {
            for (const I in y) {
                const _ = y[I];
                if (_) {
                    const {_f: L, ...U} = _;
                    if (L) {
                        const ue = a.array.has(L.name), he = await Id(_, s, E, n.shouldUseNativeValidation && !k, ue);
                        if (he[L.name] && (A.valid = !1, k)) break;
                        !k && (z(he, L.name) ? ue ? fk(r.errors, he, L.name) : ie(r.errors, L.name, he[L.name]) : Ee(r.errors, L.name))
                    }
                    U && await Y(U, k, A)
                }
            }
            return A.valid
        }, j = () => {
            for (const y of a.unMount) {
                const k = z(i, y);
                k && (k._f.refs ? k._f.refs.every(A => !Cl(A)) : !Cl(k._f.ref)) && st(y)
            }
            a.unMount = new Set
        }, B = (y, k) => (y && k && ie(s, y, k), !An(re(), o)),
        K = (y, k, A) => uk(y, a, {...l.mount ? s : ge(k) ? o : St(y) ? {[y]: k} : k}, A, k),
        X = y => Oi(z(l.mount ? s : o, y, e.shouldUnregister ? z(o, y, []) : [])), q = (y, k, A = {}) => {
            const I = z(i, y);
            let _ = k;
            if (I) {
                const L = I._f;
                L && (!L.disabled && ie(s, y, x0(k, L)), _ = os(L.ref) && _e(k) ? "" : k, v0(L.ref) ? [...L.ref.options].forEach(U => U.selected = _.includes(U.value)) : L.refs ? _i(L.ref) ? L.refs.length > 1 ? L.refs.forEach(U => (!U.defaultChecked || !U.disabled) && (U.checked = Array.isArray(_) ? !!_.find(ue => ue === U.value) : _ === U.value)) : L.refs[0] && (L.refs[0].checked = !!_) : L.refs.forEach(U => U.checked = U.value === _) : cc(L.ref) ? L.ref.value = "" : (L.ref.value = _, L.ref.type || f.values.next({
                    name: y,
                    values: {...s}
                })))
            }
            (A.shouldDirty || A.shouldTouch) && R(y, _, A.shouldTouch, A.shouldDirty, !0), A.shouldValidate && Q(y)
        }, de = (y, k, A) => {
            for (const I in k) {
                const _ = k[I], L = `${y}.${I}`, U = z(i, L);
                (a.array.has(y) || !ls(_) || U && !U._f) && !ir(_) ? de(L, _, A) : q(L, _, A)
            }
        }, N = (y, k, A = {}) => {
            const I = z(i, y), _ = a.array.has(y), L = xn(k);
            ie(s, y, L), _ ? (f.array.next({
                name: y,
                values: {...s}
            }), (p.isDirty || p.dirtyFields) && A.shouldDirty && f.state.next({
                name: y,
                dirtyFields: El(o, s),
                isDirty: B(y, L)
            })) : I && !I._f && !_e(L) ? de(y, L, A) : q(y, L, A), Dd(y, a) && f.state.next({...r}), f.values.next({
                name: y,
                values: {...s}
            }), !l.mount && t()
        }, W = async y => {
            const k = y.target;
            let A = k.name, I = !0;
            const _ = z(i, A), L = () => k.type ? Al(_._f) : nk(y);
            if (_) {
                let U, ue;
                const he = L(), Bn = y.type === Ld.BLUR || y.type === Ld.FOCUS_OUT,
                    A0 = !gk(_._f) && !n.resolver && !z(r.errors, A) && !_._f.deps || vk(Bn, z(r.touchedFields, A), r.isSubmitted, x, v),
                    _s = Dd(A, a, Bn);
                ie(s, A, he), Bn ? (_._f.onBlur && _._f.onBlur(y), u && u(0)) : _._f.onChange && _._f.onChange(y);
                const Os = R(A, he, Bn, !1), T0 = !Je(Os) || _s;
                if (!Bn && f.values.next({
                    name: A,
                    type: y.type,
                    values: {...s}
                }), A0) return p.isValid && d(), T0 && f.state.next({name: A, ..._s ? {} : Os});
                if (!Bn && _s && f.state.next({...r}), m(!0), n.resolver) {
                    const {errors: mc} = await D([A]), P0 = zd(r.errors, i, A), gc = zd(mc, i, P0.name || A);
                    U = gc.error, A = gc.name, ue = Je(mc)
                } else U = (await Id(_, s, E, n.shouldUseNativeValidation))[A], I = isNaN(he) || he === z(s, A, he), I && (U ? ue = !1 : p.isValid && (ue = await Y(i, !0)));
                I && (_._f.deps && Q(_._f.deps), S(A, ue, U, Os))
            }
        }, Q = async (y, k = {}) => {
            let A, I;
            const _ = Sl(y);
            if (m(!0), n.resolver) {
                const L = await M(ge(y) ? y : _);
                A = Je(L), I = y ? !_.some(U => z(L, U)) : A
            } else y ? (I = (await Promise.all(_.map(async L => {
                const U = z(i, L);
                return await Y(U && U._f ? {[L]: U} : U)
            }))).every(Boolean), !(!I && !r.isValid) && d()) : I = A = await Y(i);
            return f.state.next({
                ...!St(y) || p.isValid && A !== r.isValid ? {} : {name: y}, ...n.resolver || !y ? {isValid: A} : {},
                errors: r.errors,
                isValidating: !1
            }), k.shouldFocus && !I && Ba(i, L => L && z(r.errors, L), y ? _ : a.mount), I
        }, re = y => {
            const k = {...o, ...l.mount ? s : {}};
            return ge(y) ? k : St(y) ? z(k, y) : y.map(A => z(k, A))
        }, pe = (y, k) => ({
            invalid: !!z((k || r).errors, y),
            isDirty: !!z((k || r).dirtyFields, y),
            isTouched: !!z((k || r).touchedFields, y),
            error: z((k || r).errors, y)
        }), zn = y => {
            y && Sl(y).forEach(k => Ee(r.errors, k)), f.state.next({errors: y ? r.errors : {}})
        }, Tt = (y, k, A) => {
            const I = (z(i, y, {_f: {}})._f || {}).ref;
            ie(r.errors, y, {...k, ref: I}), f.state.next({
                name: y,
                errors: r.errors,
                isValid: !1
            }), A && A.shouldFocus && I && I.focus && I.focus()
        }, Ar = (y, k) => qt(y) ? f.values.subscribe({next: A => y(K(void 0, k), A)}) : K(y, k, !0), st = (y, k = {}) => {
            for (const A of y ? Sl(y) : a.mount) a.mount.delete(A), a.array.delete(A), k.keepValue || (Ee(i, A), Ee(s, A)), !k.keepError && Ee(r.errors, A), !k.keepDirty && Ee(r.dirtyFields, A), !k.keepTouched && Ee(r.touchedFields, A), !n.shouldUnregister && !k.keepDefaultValue && Ee(o, A);
            f.values.next({values: {...s}}), f.state.next({...r, ...k.keepDirty ? {isDirty: B()} : {}}), !k.keepIsValid && d()
        }, Ut = (y, k = {}) => {
            let A = z(i, y);
            const I = dr(k.disabled);
            return ie(i, y, {
                ...A || {},
                _f: {...A && A._f ? A._f : {ref: {name: y}}, name: y, mount: !0, ...k}
            }), a.mount.add(y), A ? I && ie(s, y, k.disabled ? void 0 : z(s, y, Al(A._f))) : P(y, !0, k.value), {
                ...I ? {disabled: k.disabled} : {}, ...n.shouldUseNativeValidation ? {
                    required: !!k.required,
                    min: Fr(k.min),
                    max: Fr(k.max),
                    minLength: Fr(k.minLength),
                    maxLength: Fr(k.maxLength),
                    pattern: Fr(k.pattern)
                } : {}, name: y, onChange: W, onBlur: W, ref: _ => {
                    if (_) {
                        Ut(y, k), A = z(i, y);
                        const L = ge(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _,
                            U = hk(L), ue = A._f.refs || [];
                        if (U ? ue.find(he => he === L) : L === A._f.ref) return;
                        ie(i, y, {
                            _f: {
                                ...A._f, ...U ? {
                                    refs: [...ue.filter(Cl), L, ...Array.isArray(z(o, y)) ? [{}] : []],
                                    ref: {type: L.type, name: y}
                                } : {ref: L}
                            }
                        }), P(y, !1, void 0, L)
                    } else A = z(i, y, {}), A._f && (A._f.mount = !1), (n.shouldUnregister || k.shouldUnregister) && !(ik(a.array, y) && l.action) && a.unMount.add(y)
                }
            }
        }, dc = () => n.shouldFocusError && Ba(i, y => y && z(r.errors, y), a.mount), S0 = (y, k) => async A => {
            A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
            let I = xn(s);
            if (f.state.next({isSubmitting: !0}), n.resolver) {
                const {errors: _, values: L} = await D();
                r.errors = _, I = L
            } else await Y(i);
            Ee(r.errors, "root"), Je(r.errors) ? (f.state.next({errors: {}}), await y(I, A)) : (k && await k({...r.errors}, A), dc(), setTimeout(dc)), f.state.next({
                isSubmitted: !0,
                isSubmitting: !1,
                isSubmitSuccessful: Je(r.errors),
                submitCount: r.submitCount + 1,
                errors: r.errors
            })
        }, k0 = (y, k = {}) => {
            z(i, y) && (ge(k.defaultValue) ? N(y, z(o, y)) : (N(y, k.defaultValue), ie(o, y, k.defaultValue)), k.keepTouched || Ee(r.touchedFields, y), k.keepDirty || (Ee(r.dirtyFields, y), r.isDirty = k.defaultValue ? B(y, z(o, y)) : B()), k.keepError || (Ee(r.errors, y), p.isValid && d()), f.state.next({...r}))
        }, pc = (y, k = {}) => {
            const A = y || o, I = xn(A), _ = y && !Je(y) ? I : o;
            if (k.keepDefaultValues || (o = A), !k.keepValues) {
                if (k.keepDirtyValues || g) for (const L of a.mount) z(r.dirtyFields, L) ? ie(_, L, z(s, L)) : N(L, z(_, L)); else {
                    if (ac && ge(y)) for (const L of a.mount) {
                        const U = z(i, L);
                        if (U && U._f) {
                            const ue = Array.isArray(U._f.refs) ? U._f.refs[0] : U._f.ref;
                            if (os(ue)) {
                                const he = ue.closest("form");
                                if (he) {
                                    he.reset();
                                    break
                                }
                            }
                        }
                    }
                    i = {}
                }
                s = e.shouldUnregister ? k.keepDefaultValues ? xn(o) : {} : I, f.array.next({values: {..._}}), f.values.next({values: {..._}})
            }
            a = {
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, !l.mount && t(), l.mount = !p.isValid || !!k.keepIsValid, l.watch = !!e.shouldUnregister, f.state.next({
                submitCount: k.keepSubmitCount ? r.submitCount : 0,
                isDirty: k.keepDirty ? r.isDirty : !!(k.keepDefaultValues && !An(y, o)),
                isSubmitted: k.keepIsSubmitted ? r.isSubmitted : !1,
                dirtyFields: k.keepDirtyValues ? r.dirtyFields : k.keepDefaultValues && y ? El(o, y) : {},
                touchedFields: k.keepTouched ? r.touchedFields : {},
                errors: k.keepErrors ? r.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1
            })
        }, hc = (y, k) => pc(qt(y) ? y(s) : y, k), C0 = (y, k = {}) => {
            const A = z(i, y), I = A && A._f;
            if (I) {
                const _ = I.refs ? I.refs[0] : I.ref;
                _.focus && (_.focus(), k.shouldSelect && _.select())
            }
        }, E0 = y => {
            r = {...r, ...y}
        };
    return qt(n.defaultValues) && n.defaultValues().then(y => {
        hc(y, n.resetOptions), f.state.next({isLoading: !1})
    }), {
        control: {
            register: Ut,
            unregister: st,
            getFieldState: pe,
            _executeSchema: D,
            _getWatch: K,
            _getDirty: B,
            _updateValid: d,
            _removeUnmounted: j,
            _updateFieldArray: w,
            _getFieldArray: X,
            _reset: pc,
            _updateFormState: E0,
            _subjects: f,
            _proxyFormState: p,
            get _fields() {
                return i
            },
            get _formValues() {
                return s
            },
            get _state() {
                return l
            },
            set _state(y) {
                l = y
            },
            get _defaultValues() {
                return o
            },
            get _names() {
                return a
            },
            set _names(y) {
                a = y
            },
            get _formState() {
                return r
            },
            set _formState(y) {
                r = y
            },
            get _options() {
                return n
            },
            set _options(y) {
                n = {...n, ...y}
            }
        },
        trigger: Q,
        register: Ut,
        handleSubmit: S0,
        watch: Ar,
        setValue: N,
        getValues: re,
        reset: hc,
        resetField: k0,
        clearErrors: zn,
        unregister: st,
        setError: Tt,
        setFocus: C0,
        getFieldState: pe
    }
}

function Sk(e = {}) {
    const t = pt.useRef(), [n, r] = pt.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: qt(e.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        errors: {},
        defaultValues: qt(e.defaultValues) ? void 0 : e.defaultValues
    });
    t.current || (t.current = {...xk(e, () => r(o => ({...o}))), formState: n});
    const i = t.current.control;
    return i._options = e, ak({
        subject: i._subjects.state, next: o => {
            lk(o, i._proxyFormState, i._updateFormState, !0) && r({...i._formState})
        }
    }), pt.useEffect(() => {
        e.values && !An(e.values, i._defaultValues) && i._reset(e.values, i._options.resetOptions)
    }, [e.values, i]), pt.useEffect(() => {
        i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({...i._formState})), i._removeUnmounted()
    }), t.current.formState = sk(n, i), t.current
}

const kk = "/assets/ContactUsPageGraphic-bd146e02.png", Ck = ({setSelectedPage: e}) => {
        const t = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`, {register: n, trigger: r, formState: {errors: i}} = Sk(), o = async s => {
            await r() || s.preventDefault()
        };
        return T("section", {
            id: "contactus", className: "mx-auto w-5/6 pt-24 pb-32", children: G(Ue.div, {
                onViewportEnter: () => e(Xe.ContactUs),
                children: [G(Ue.div, {
                    className: "md:w-3/5",
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {once: !0, amount: .5},
                    transition: {duration: .5},
                    variants: {hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}},
                    children: [G(is, {
                        children: [T("span", {
                            className: "text-primary-500",
                            children: "JOIN NOW"
                        }), " TO GET IN SHAPE"]
                    }), T("p", {
                        className: "my-5",
                        children: "Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis."
                    })]
                }), G("div", {
                    className: "mt-10 justify-between gap-8 md:flex", children: [T(Ue.div, {
                        className: "mt-10 basis-3/5 md:mt-0",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0, amount: .5},
                        transition: {duration: .5},
                        variants: {hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}},
                        children: G("form", {
                            target: "_blank",
                            onSubmit: o,
                            action: "https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e",
                            method: "POST",
                            children: [T("input", {
                                className: t,
                                type: "text",
                                placeholder: "NAME", ...n("name", {required: !0, maxLength: 100})
                            }), i.name && G("p", {
                                className: "mt-1 text-primary-500",
                                children: [i.name.type === "required" && "This field is required.", i.name.type === "maxLength" && "Max length is 100 char."]
                            }), T("input", {
                                className: t, type: "text", placeholder: "EMAIL", ...n("email", {
                                    required: !0,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })
                            }), i.email && G("p", {
                                className: "mt-1 text-primary-500",
                                children: [i.email.type === "required" && "This field is required.", i.email.type === "pattern" && "Invalid email address."]
                            }), T("textarea", {
                                className: t,
                                placeholder: "MESSAGE",
                                rows: 4,
                                cols: 50, ...n("message", {required: !0, maxLength: 2e3})
                            }), i.message && G("p", {
                                className: "mt-1 text-primary-500",
                                children: [i.message.type === "required" && "This field is required.", i.message.type === "maxLength" && "Max length is 2000 char."]
                            }), T("button", {
                                type: "submit",
                                className: "mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white",
                                children: "SUBMIT"
                            })]
                        })
                    }), T(Ue.div, {
                        className: "relative mt-16 basis-2/5 md:mt-0",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0, amount: .5},
                        transition: {delay: .2, duration: .5},
                        variants: {hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}},
                        children: T("div", {
                            className: "w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext",
                            children: T("img", {className: "w-full", alt: "contact-us-page-graphic", src: kk})
                        })
                    })]
                })]
            })
        })
    }, Ek = () => T("footer", {
        className: "bg-primary-100 py-16",
        children: G("div", {
            className: "justify-content mx-auto w-5/6 gap-16 md:flex",
            children: [G("div", {
                className: "mt-16 basis-1/2 md:mt-0",
                children: [T("img", {alt: "logo", src: bh}), T("p", {
                    className: "my-5",
                    children: "Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique."
                }), T("p", {children: "© Evogym All Rights Reserved."})]
            }), G("div", {
                className: "mt-16 basis-1/4 md:mt-0",
                children: [T("h4", {className: "font-bold", children: "Links"}), T("p", {
                    className: "my-5",
                    children: "Massa orci senectus"
                }), T("p", {
                    className: "my-5",
                    children: "Et gravida id et etiam"
                }), T("p", {children: "Ullamcorper vivamus"})]
            }), G("div", {
                className: "mt-16 basis-1/4 md:mt-0",
                children: [T("h4", {className: "font-bold", children: "Contact Us"}), T("p", {
                    className: "my-5",
                    children: "Tempus metus mattis risus volutpat egestas."
                }), T("p", {children: "(333)425-6825"})]
            })]
        })
    }), Ak = "/assets/image1-98a598cf.png", Tk = "/assets/image2-23dbc9b2.png", Pk = "/assets/image3-cac8a8b1.png",
    Vk = "/assets/image4-c6886faa.png", Rk = "/assets/image5-06bcad69.png", Lk = "/assets/image6-6cb99f4d.png",
    Mk = ({name: e, description: t, image: n}) => G("li", {
        className: "relative mx-5 inline-block h-[380px] w-[450px]", children: [G("div", {
            className: `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`,
            children: [T("p", {className: "text-2xl", children: e}), T("p", {className: "mt-5", children: t})]
        }), T("img", {alt: `${n}`, src: n})]
    }), Dk = [{
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Ak
    }, {name: "Yoga Classes", image: Tk}, {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Pk
    }, {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Vk
    }, {name: "Fitness Classes", image: Rk}, {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Lk
    }], Nk = ({setSelectedPage: e}) => T("section", {
        id: "ourclasses",
        className: "w-full bg-primary-100 py-40",
        children: G(Ue.div, {
            onViewportEnter: () => e(Xe.OurClasses),
            children: [T(Ue.div, {
                className: "mx-auto w-5/6",
                initial: "hidden",
                whileInView: "visible",
                viewport: {once: !0, amount: .5},
                transition: {duration: .5},
                variants: {hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}},
                children: G("div", {
                    className: "md:w-3/5",
                    children: [T(is, {children: "OUR CLASSES"}), T("p", {
                        className: "py-5",
                        children: "Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc."
                    })]
                })
            }), T("div", {
                className: "mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden",
                children: T("ul", {
                    className: "w-[2800px] whitespace-nowrap",
                    children: Dk.map((t, n) => T(Mk, {
                        name: t.name,
                        description: t.description,
                        image: t.image
                    }, `${t.name}-${n}`))
                })
            })]
        })
    });

function _k() {
    const [e, t] = O.useState(Xe.Home), [n, r] = O.useState(!0);
    return O.useEffect(() => {
        const i = () => {
            switch (window.scrollY) {
                case 0:
                    r(!0), t(Xe.Home);
                    break;
                default:
                    r(!1);
                    break
            }
        };
        return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
    }, []), G("div", {
        className: "app bg-gray-20 bg-",
        children: [T(Cy, {
            isTopOfPage: n,
            selectedPage: e,
            setSelectedPage: t
        }), T($S, {setSelectedPage: t}), T(tk, {setSelectedPage: t}), T(Nk, {setSelectedPage: t}), T(Ck, {setSelectedPage: t}), T(Ek, {})]
    })
}

Tl.createRoot(document.getElementById("root")).render(T(pt.StrictMode, {children: T(_k, {})}));
