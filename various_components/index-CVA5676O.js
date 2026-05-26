(function () {
    try {
        var n =
                typeof window < "u"
                    ? window
                    : typeof global < "u"
                      ? global
                      : typeof globalThis < "u"
                        ? globalThis
                        : typeof self < "u"
                          ? self
                          : {},
            r = new n.Error().stack;
        r &&
            ((n._sentryDebugIds = n._sentryDebugIds || {}),
            (n._sentryDebugIds[r] = "333cdf24-119e-4cd2-90a2-e7d4026deb76"),
            (n._sentryDebugIdIdentifier = "sentry-dbid-333cdf24-119e-4cd2-90a2-e7d4026deb76"));
    } catch {}
})();
function pS(n, r) {
    for (var i = 0; i < r.length; i++) {
        const o = r[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const u in o)
                if (u !== "default" && !(u in n)) {
                    const f = Object.getOwnPropertyDescriptor(o, u);
                    f && Object.defineProperty(n, u, f.get ? f : { enumerable: !0, get: () => o[u] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) o(u);
    new MutationObserver((u) => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(u) {
        const f = {};
        return (
            u.integrity && (f.integrity = u.integrity),
            u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
            u.crossOrigin === "use-credentials"
                ? (f.credentials = "include")
                : u.crossOrigin === "anonymous"
                  ? (f.credentials = "omit")
                  : (f.credentials = "same-origin"),
            f
        );
    }
    function o(u) {
        if (u.ep) return;
        u.ep = !0;
        const f = i(u);
        fetch(u.href, f);
    }
})();
const yS = "modulepreload",
    gS = function (n) {
        return "/" + n;
    },
    Tg = {},
    vS = function (r, i, o) {
        let u = Promise.resolve();
        if (i && i.length > 0) {
            let p = function (m) {
                return Promise.all(
                    m.map((_) =>
                        Promise.resolve(_).then(
                            (g) => ({ status: "fulfilled", value: g }),
                            (g) => ({ status: "rejected", reason: g })
                        )
                    )
                );
            };
            document.getElementsByTagName("link");
            const d = document.querySelector("meta[property=csp-nonce]"),
                y = d?.nonce || d?.getAttribute("nonce");
            u = p(
                i.map((m) => {
                    if (((m = gS(m)), m in Tg)) return;
                    Tg[m] = !0;
                    const _ = m.endsWith(".css"),
                        g = _ ? '[rel="stylesheet"]' : "";
                    if (document.querySelector(`link[href="${m}"]${g}`)) return;
                    const T = document.createElement("link");
                    if (
                        ((T.rel = _ ? "stylesheet" : yS),
                        _ || (T.as = "script"),
                        (T.crossOrigin = ""),
                        (T.href = m),
                        y && T.setAttribute("nonce", y),
                        document.head.appendChild(T),
                        _)
                    )
                        return new Promise((O, k) => {
                            T.addEventListener("load", O),
                                T.addEventListener("error", () => k(new Error(`Unable to preload CSS for ${m}`)));
                        });
                })
            );
        }
        function f(d) {
            const y = new Event("vite:preloadError", { cancelable: !0 });
            if (((y.payload = d), window.dispatchEvent(y), !y.defaultPrevented)) throw d;
        }
        return u.then((d) => {
            for (const y of d || []) y.status === "rejected" && f(y.reason);
            return r().catch(f);
        });
    };
var ba =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {};
function Ko(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function _S(n) {
    if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
    var r = n.default;
    if (typeof r == "function") {
        var i = function o() {
            var u = !1;
            try {
                u = this instanceof o;
            } catch {}
            return u ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
        };
        i.prototype = r.prototype;
    } else i = {};
    return (
        Object.defineProperty(i, "__esModule", { value: !0 }),
        Object.keys(n).forEach(function (o) {
            var u = Object.getOwnPropertyDescriptor(n, o);
            Object.defineProperty(
                i,
                o,
                u.get
                    ? u
                    : {
                          enumerable: !0,
                          get: function () {
                              return n[o];
                          },
                      }
            );
        }),
        i
    );
}
var Wf = { exports: {} },
    Ro = {};
var xg;
function bS() {
    if (xg) return Ro;
    xg = 1;
    var n = Symbol.for("react.transitional.element"),
        r = Symbol.for("react.fragment");
    function i(o, u, f) {
        var d = null;
        if ((f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), "key" in u)) {
            f = {};
            for (var y in u) y !== "key" && (f[y] = u[y]);
        } else f = u;
        return (u = f.ref), { $$typeof: n, type: o, key: d, ref: u !== void 0 ? u : null, props: f };
    }
    return (Ro.Fragment = r), (Ro.jsx = i), (Ro.jsxs = i), Ro;
}
var wg;
function SS() {
    return wg || ((wg = 1), (Wf.exports = bS())), Wf.exports;
}
var Lt = SS(),
    Ff = { exports: {} },
    St = {};
var Og;
function ES() {
    if (Og) return St;
    Og = 1;
    var n = Symbol.for("react.transitional.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        y = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        g = Symbol.for("react.activity"),
        T = Symbol.iterator;
    function O(E) {
        return E === null || typeof E != "object"
            ? null
            : ((E = (T && E[T]) || E["@@iterator"]), typeof E == "function" ? E : null);
    }
    var k = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        Y = Object.assign,
        R = {};
    function q(E, z, P) {
        (this.props = E), (this.context = z), (this.refs = R), (this.updater = P || k);
    }
    (q.prototype.isReactComponent = {}),
        (q.prototype.setState = function (E, z) {
            if (typeof E != "object" && typeof E != "function" && E != null)
                throw Error(
                    "takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, E, z, "setState");
        }),
        (q.prototype.forceUpdate = function (E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        });
    function w() {}
    w.prototype = q.prototype;
    function x(E, z, P) {
        (this.props = E), (this.context = z), (this.refs = R), (this.updater = P || k);
    }
    var C = (x.prototype = new w());
    (C.constructor = x), Y(C, q.prototype), (C.isPureReactComponent = !0);
    var D = Array.isArray;
    function G() {}
    var U = { H: null, A: null, T: null, S: null },
        Z = Object.prototype.hasOwnProperty;
    function ut(E, z, P) {
        var W = P.ref;
        return { $$typeof: n, type: E, key: z, ref: W !== void 0 ? W : null, props: P };
    }
    function I(E, z) {
        return ut(E.type, z, E.props);
    }
    function $(E) {
        return typeof E == "object" && E !== null && E.$$typeof === n;
    }
    function rt(E) {
        var z = { "=": "=0", ":": "=2" };
        return (
            "$" +
            E.replace(/[=:]/g, function (P) {
                return z[P];
            })
        );
    }
    var at = /\/+/g;
    function mt(E, z) {
        return typeof E == "object" && E !== null && E.key != null ? rt("" + E.key) : z.toString(36);
    }
    function yt(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (
                    (typeof E.status == "string"
                        ? E.then(G, G)
                        : ((E.status = "pending"),
                          E.then(
                              function (z) {
                                  E.status === "pending" && ((E.status = "fulfilled"), (E.value = z));
                              },
                              function (z) {
                                  E.status === "pending" && ((E.status = "rejected"), (E.reason = z));
                              }
                          )),
                    E.status)
                ) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason;
                }
        }
        throw E;
    }
    function V(E, z, P, W, bt) {
        var At = typeof E;
        (At === "undefined" || At === "boolean") && (E = null);
        var Ht = !1;
        if (E === null) Ht = !0;
        else
            switch (At) {
                case "bigint":
                case "string":
                case "number":
                    Ht = !0;
                    break;
                case "object":
                    switch (E.$$typeof) {
                        case n:
                        case r:
                            Ht = !0;
                            break;
                        case _:
                            return (Ht = E._init), V(Ht(E._payload), z, P, W, bt);
                    }
            }
        if (Ht)
            return (
                (bt = bt(E)),
                (Ht = W === "" ? "." + mt(E, 0) : W),
                D(bt)
                    ? ((P = ""),
                      Ht != null && (P = Ht.replace(at, "$&/") + "/"),
                      V(bt, z, P, "", function (Vr) {
                          return Vr;
                      }))
                    : bt != null &&
                      ($(bt) &&
                          (bt = I(
                              bt,
                              P +
                                  (bt.key == null || (E && E.key === bt.key)
                                      ? ""
                                      : ("" + bt.key).replace(at, "$&/") + "/") +
                                  Ht
                          )),
                      z.push(bt)),
                1
            );
        Ht = 0;
        var xe = W === "" ? "." : W + ":";
        if (D(E)) for (var re = 0; re < E.length; re++) (W = E[re]), (At = xe + mt(W, re)), (Ht += V(W, z, P, At, bt));
        else if (((re = O(E)), typeof re == "function"))
            for (E = re.call(E), re = 0; !(W = E.next()).done; )
                (W = W.value), (At = xe + mt(W, re++)), (Ht += V(W, z, P, At, bt));
        else if (At === "object") {
            if (typeof E.then == "function") return V(yt(E), z, P, W, bt);
            throw (
                ((z = String(E)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (z === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : z) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        }
        return Ht;
    }
    function st(E, z, P) {
        if (E == null) return E;
        var W = [],
            bt = 0;
        return (
            V(E, W, "", "", function (At) {
                return z.call(P, At, bt++);
            }),
            W
        );
    }
    function ft(E) {
        if (E._status === -1) {
            var z = E._result;
            (z = z()),
                z.then(
                    function (P) {
                        (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = P));
                    },
                    function (P) {
                        (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = P));
                    }
                ),
                E._status === -1 && ((E._status = 0), (E._result = z));
        }
        if (E._status === 1) return E._result.default;
        throw E._result;
    }
    var Dt =
            typeof reportError == "function"
                ? reportError
                : function (E) {
                      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                          var z = new window.ErrorEvent("error", {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof E == "object" && E !== null && typeof E.message == "string"
                                      ? String(E.message)
                                      : String(E),
                              error: E,
                          });
                          if (!window.dispatchEvent(z)) return;
                      } else if (typeof process == "object" && typeof process.emit == "function") {
                          process.emit("uncaughtException", E);
                          return;
                      }
                      console.error(E);
                  },
        Mt = {
            map: st,
            forEach: function (E, z, P) {
                st(
                    E,
                    function () {
                        z.apply(this, arguments);
                    },
                    P
                );
            },
            count: function (E) {
                var z = 0;
                return (
                    st(E, function () {
                        z++;
                    }),
                    z
                );
            },
            toArray: function (E) {
                return (
                    st(E, function (z) {
                        return z;
                    }) || []
                );
            },
            only: function (E) {
                if (!$(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            },
        };
    return (
        (St.Activity = g),
        (St.Children = Mt),
        (St.Component = q),
        (St.Fragment = i),
        (St.Profiler = u),
        (St.PureComponent = x),
        (St.StrictMode = o),
        (St.Suspense = p),
        (St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
        (St.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (E) {
                return U.H.useMemoCache(E);
            },
        }),
        (St.cache = function (E) {
            return function () {
                return E.apply(null, arguments);
            };
        }),
        (St.cacheSignal = function () {
            return null;
        }),
        (St.cloneElement = function (E, z, P) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var W = Y({}, E.props),
                bt = E.key;
            if (z != null)
                for (At in (z.key !== void 0 && (bt = "" + z.key), z))
                    !Z.call(z, At) ||
                        At === "key" ||
                        At === "__self" ||
                        At === "__source" ||
                        (At === "ref" && z.ref === void 0) ||
                        (W[At] = z[At]);
            var At = arguments.length - 2;
            if (At === 1) W.children = P;
            else if (1 < At) {
                for (var Ht = Array(At), xe = 0; xe < At; xe++) Ht[xe] = arguments[xe + 2];
                W.children = Ht;
            }
            return ut(E.type, bt, W);
        }),
        (St.createContext = function (E) {
            return (
                (E = {
                    $$typeof: d,
                    _currentValue: E,
                    _currentValue2: E,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (E.Provider = E),
                (E.Consumer = { $$typeof: f, _context: E }),
                E
            );
        }),
        (St.createElement = function (E, z, P) {
            var W,
                bt = {},
                At = null;
            if (z != null)
                for (W in (z.key !== void 0 && (At = "" + z.key), z))
                    Z.call(z, W) && W !== "key" && W !== "__self" && W !== "__source" && (bt[W] = z[W]);
            var Ht = arguments.length - 2;
            if (Ht === 1) bt.children = P;
            else if (1 < Ht) {
                for (var xe = Array(Ht), re = 0; re < Ht; re++) xe[re] = arguments[re + 2];
                bt.children = xe;
            }
            if (E && E.defaultProps) for (W in ((Ht = E.defaultProps), Ht)) bt[W] === void 0 && (bt[W] = Ht[W]);
            return ut(E, At, bt);
        }),
        (St.createRef = function () {
            return { current: null };
        }),
        (St.forwardRef = function (E) {
            return { $$typeof: y, render: E };
        }),
        (St.isValidElement = $),
        (St.lazy = function (E) {
            return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: ft };
        }),
        (St.memo = function (E, z) {
            return { $$typeof: m, type: E, compare: z === void 0 ? null : z };
        }),
        (St.startTransition = function (E) {
            var z = U.T,
                P = {};
            U.T = P;
            try {
                var W = E(),
                    bt = U.S;
                bt !== null && bt(P, W),
                    typeof W == "object" && W !== null && typeof W.then == "function" && W.then(G, Dt);
            } catch (At) {
                Dt(At);
            } finally {
                z !== null && P.types !== null && (z.types = P.types), (U.T = z);
            }
        }),
        (St.unstable_useCacheRefresh = function () {
            return U.H.useCacheRefresh();
        }),
        (St.use = function (E) {
            return U.H.use(E);
        }),
        (St.useActionState = function (E, z, P) {
            return U.H.useActionState(E, z, P);
        }),
        (St.useCallback = function (E, z) {
            return U.H.useCallback(E, z);
        }),
        (St.useContext = function (E) {
            return U.H.useContext(E);
        }),
        (St.useDebugValue = function () {}),
        (St.useDeferredValue = function (E, z) {
            return U.H.useDeferredValue(E, z);
        }),
        (St.useEffect = function (E, z) {
            return U.H.useEffect(E, z);
        }),
        (St.useEffectEvent = function (E) {
            return U.H.useEffectEvent(E);
        }),
        (St.useId = function () {
            return U.H.useId();
        }),
        (St.useImperativeHandle = function (E, z, P) {
            return U.H.useImperativeHandle(E, z, P);
        }),
        (St.useInsertionEffect = function (E, z) {
            return U.H.useInsertionEffect(E, z);
        }),
        (St.useLayoutEffect = function (E, z) {
            return U.H.useLayoutEffect(E, z);
        }),
        (St.useMemo = function (E, z) {
            return U.H.useMemo(E, z);
        }),
        (St.useOptimistic = function (E, z) {
            return U.H.useOptimistic(E, z);
        }),
        (St.useReducer = function (E, z, P) {
            return U.H.useReducer(E, z, P);
        }),
        (St.useRef = function (E) {
            return U.H.useRef(E);
        }),
        (St.useState = function (E) {
            return U.H.useState(E);
        }),
        (St.useSyncExternalStore = function (E, z, P) {
            return U.H.useSyncExternalStore(E, z, P);
        }),
        (St.useTransition = function () {
            return U.H.useTransition();
        }),
        (St.version = "19.2.4"),
        St
    );
}
var Dg;
function vl() {
    return Dg || ((Dg = 1), (Ff.exports = ES())), Ff.exports;
}
var wt = vl();
const $t = Ko(wt),
    v4 = pS({ __proto__: null, default: $t }, [wt]);
var $f = { exports: {} },
    No = {},
    Jf = { exports: {} },
    td = {};
var Ag;
function TS() {
    return (
        Ag ||
            ((Ag = 1),
            (function (n) {
                function r(V, st) {
                    var ft = V.length;
                    V.push(st);
                    t: for (; 0 < ft; ) {
                        var Dt = (ft - 1) >>> 1,
                            Mt = V[Dt];
                        if (0 < u(Mt, st)) (V[Dt] = st), (V[ft] = Mt), (ft = Dt);
                        else break t;
                    }
                }
                function i(V) {
                    return V.length === 0 ? null : V[0];
                }
                function o(V) {
                    if (V.length === 0) return null;
                    var st = V[0],
                        ft = V.pop();
                    if (ft !== st) {
                        V[0] = ft;
                        t: for (var Dt = 0, Mt = V.length, E = Mt >>> 1; Dt < E; ) {
                            var z = 2 * (Dt + 1) - 1,
                                P = V[z],
                                W = z + 1,
                                bt = V[W];
                            if (0 > u(P, ft))
                                W < Mt && 0 > u(bt, P)
                                    ? ((V[Dt] = bt), (V[W] = ft), (Dt = W))
                                    : ((V[Dt] = P), (V[z] = ft), (Dt = z));
                            else if (W < Mt && 0 > u(bt, ft)) (V[Dt] = bt), (V[W] = ft), (Dt = W);
                            else break t;
                        }
                    }
                    return st;
                }
                function u(V, st) {
                    var ft = V.sortIndex - st.sortIndex;
                    return ft !== 0 ? ft : V.id - st.id;
                }
                if (
                    ((n.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")
                ) {
                    var f = performance;
                    n.unstable_now = function () {
                        return f.now();
                    };
                } else {
                    var d = Date,
                        y = d.now();
                    n.unstable_now = function () {
                        return d.now() - y;
                    };
                }
                var p = [],
                    m = [],
                    _ = 1,
                    g = null,
                    T = 3,
                    O = !1,
                    k = !1,
                    Y = !1,
                    R = !1,
                    q = typeof setTimeout == "function" ? setTimeout : null,
                    w = typeof clearTimeout == "function" ? clearTimeout : null,
                    x = typeof setImmediate < "u" ? setImmediate : null;
                function C(V) {
                    for (var st = i(m); st !== null; ) {
                        if (st.callback === null) o(m);
                        else if (st.startTime <= V) o(m), (st.sortIndex = st.expirationTime), r(p, st);
                        else break;
                        st = i(m);
                    }
                }
                function D(V) {
                    if (((Y = !1), C(V), !k))
                        if (i(p) !== null) (k = !0), G || ((G = !0), rt());
                        else {
                            var st = i(m);
                            st !== null && yt(D, st.startTime - V);
                        }
                }
                var G = !1,
                    U = -1,
                    Z = 5,
                    ut = -1;
                function I() {
                    return R ? !0 : !(n.unstable_now() - ut < Z);
                }
                function $() {
                    if (((R = !1), G)) {
                        var V = n.unstable_now();
                        ut = V;
                        var st = !0;
                        try {
                            t: {
                                (k = !1), Y && ((Y = !1), w(U), (U = -1)), (O = !0);
                                var ft = T;
                                try {
                                    e: {
                                        for (C(V), g = i(p); g !== null && !(g.expirationTime > V && I()); ) {
                                            var Dt = g.callback;
                                            if (typeof Dt == "function") {
                                                (g.callback = null), (T = g.priorityLevel);
                                                var Mt = Dt(g.expirationTime <= V);
                                                if (((V = n.unstable_now()), typeof Mt == "function")) {
                                                    (g.callback = Mt), C(V), (st = !0);
                                                    break e;
                                                }
                                                g === i(p) && o(p), C(V);
                                            } else o(p);
                                            g = i(p);
                                        }
                                        if (g !== null) st = !0;
                                        else {
                                            var E = i(m);
                                            E !== null && yt(D, E.startTime - V), (st = !1);
                                        }
                                    }
                                    break t;
                                } finally {
                                    (g = null), (T = ft), (O = !1);
                                }
                                st = void 0;
                            }
                        } finally {
                            st ? rt() : (G = !1);
                        }
                    }
                }
                var rt;
                if (typeof x == "function")
                    rt = function () {
                        x($);
                    };
                else if (typeof MessageChannel < "u") {
                    var at = new MessageChannel(),
                        mt = at.port2;
                    (at.port1.onmessage = $),
                        (rt = function () {
                            mt.postMessage(null);
                        });
                } else
                    rt = function () {
                        q($, 0);
                    };
                function yt(V, st) {
                    U = q(function () {
                        V(n.unstable_now());
                    }, st);
                }
                (n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (V) {
                        V.callback = null;
                    }),
                    (n.unstable_forceFrameRate = function (V) {
                        0 > V || 125 < V
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (Z = 0 < V ? Math.floor(1e3 / V) : 5);
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return T;
                    }),
                    (n.unstable_next = function (V) {
                        switch (T) {
                            case 1:
                            case 2:
                            case 3:
                                var st = 3;
                                break;
                            default:
                                st = T;
                        }
                        var ft = T;
                        T = st;
                        try {
                            return V();
                        } finally {
                            T = ft;
                        }
                    }),
                    (n.unstable_requestPaint = function () {
                        R = !0;
                    }),
                    (n.unstable_runWithPriority = function (V, st) {
                        switch (V) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                V = 3;
                        }
                        var ft = T;
                        T = V;
                        try {
                            return st();
                        } finally {
                            T = ft;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (V, st, ft) {
                        var Dt = n.unstable_now();
                        switch (
                            (typeof ft == "object" && ft !== null
                                ? ((ft = ft.delay), (ft = typeof ft == "number" && 0 < ft ? Dt + ft : Dt))
                                : (ft = Dt),
                            V)
                        ) {
                            case 1:
                                var Mt = -1;
                                break;
                            case 2:
                                Mt = 250;
                                break;
                            case 5:
                                Mt = 1073741823;
                                break;
                            case 4:
                                Mt = 1e4;
                                break;
                            default:
                                Mt = 5e3;
                        }
                        return (
                            (Mt = ft + Mt),
                            (V = {
                                id: _++,
                                callback: st,
                                priorityLevel: V,
                                startTime: ft,
                                expirationTime: Mt,
                                sortIndex: -1,
                            }),
                            ft > Dt
                                ? ((V.sortIndex = ft),
                                  r(m, V),
                                  i(p) === null && V === i(m) && (Y ? (w(U), (U = -1)) : (Y = !0), yt(D, ft - Dt)))
                                : ((V.sortIndex = Mt), r(p, V), k || O || ((k = !0), G || ((G = !0), rt()))),
                            V
                        );
                    }),
                    (n.unstable_shouldYield = I),
                    (n.unstable_wrapCallback = function (V) {
                        var st = T;
                        return function () {
                            var ft = T;
                            T = st;
                            try {
                                return V.apply(this, arguments);
                            } finally {
                                T = ft;
                            }
                        };
                    });
            })(td)),
        td
    );
}
var Mg;
function xS() {
    return Mg || ((Mg = 1), (Jf.exports = TS())), Jf.exports;
}
var ed = { exports: {} },
    Be = {};
var Cg;
function wS() {
    if (Cg) return Be;
    Cg = 1;
    var n = vl();
    function r(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var _ = 2; _ < arguments.length; _++) m += "&args[]=" + encodeURIComponent(arguments[_]);
        }
        return (
            "Minified React error #" +
            p +
            "; visit " +
            m +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function i() {}
    var o = {
            d: {
                f: i,
                r: function () {
                    throw Error(r(522));
                },
                D: i,
                C: i,
                L: i,
                m: i,
                X: i,
                S: i,
                M: i,
            },
            p: 0,
            findDOMNode: null,
        },
        u = Symbol.for("react.portal");
    function f(p, m, _) {
        var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: u, key: g == null ? null : "" + g, children: p, containerInfo: m, implementation: _ };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(p, m) {
        if (p === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return (
        (Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
        (Be.createPortal = function (p, m) {
            var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(r(299));
            return f(p, m, null, _);
        }),
        (Be.flushSync = function (p) {
            var m = d.T,
                _ = o.p;
            try {
                if (((d.T = null), (o.p = 2), p)) return p();
            } finally {
                (d.T = m), (o.p = _), o.d.f();
            }
        }),
        (Be.preconnect = function (p, m) {
            typeof p == "string" &&
                (m
                    ? ((m = m.crossOrigin), (m = typeof m == "string" ? (m === "use-credentials" ? m : "") : void 0))
                    : (m = null),
                o.d.C(p, m));
        }),
        (Be.prefetchDNS = function (p) {
            typeof p == "string" && o.d.D(p);
        }),
        (Be.preinit = function (p, m) {
            if (typeof p == "string" && m && typeof m.as == "string") {
                var _ = m.as,
                    g = y(_, m.crossOrigin),
                    T = typeof m.integrity == "string" ? m.integrity : void 0,
                    O = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                _ === "style"
                    ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                          crossOrigin: g,
                          integrity: T,
                          fetchPriority: O,
                      })
                    : _ === "script" &&
                      o.d.X(p, {
                          crossOrigin: g,
                          integrity: T,
                          fetchPriority: O,
                          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                      });
            }
        }),
        (Be.preinitModule = function (p, m) {
            if (typeof p == "string")
                if (typeof m == "object" && m !== null) {
                    if (m.as == null || m.as === "script") {
                        var _ = y(m.as, m.crossOrigin);
                        o.d.M(p, {
                            crossOrigin: _,
                            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                        });
                    }
                } else m == null && o.d.M(p);
        }),
        (Be.preload = function (p, m) {
            if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
                var _ = m.as,
                    g = y(_, m.crossOrigin);
                o.d.L(p, _, {
                    crossOrigin: g,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                    type: typeof m.type == "string" ? m.type : void 0,
                    fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                    referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                    imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                    imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                    media: typeof m.media == "string" ? m.media : void 0,
                });
            }
        }),
        (Be.preloadModule = function (p, m) {
            if (typeof p == "string")
                if (m) {
                    var _ = y(m.as, m.crossOrigin);
                    o.d.m(p, {
                        as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                        crossOrigin: _,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                    });
                } else o.d.m(p);
        }),
        (Be.requestFormReset = function (p) {
            o.d.r(p);
        }),
        (Be.unstable_batchedUpdates = function (p, m) {
            return p(m);
        }),
        (Be.useFormState = function (p, m, _) {
            return d.H.useFormState(p, m, _);
        }),
        (Be.useFormStatus = function () {
            return d.H.useHostTransitionStatus();
        }),
        (Be.version = "19.2.4"),
        Be
    );
}
var Rg;
function OS() {
    if (Rg) return ed.exports;
    Rg = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (r) {
                console.error(r);
            }
    }
    return n(), (ed.exports = wS()), ed.exports;
}
var Ng;
function DS() {
    if (Ng) return No;
    Ng = 1;
    var n = xS(),
        r = vl(),
        i = OS();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
        }
        return (
            "Minified React error #" +
            t +
            "; visit " +
            e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function u(t) {
        return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
    }
    function f(t) {
        var e = t,
            a = t;
        if (t.alternate) for (; e.return; ) e = e.return;
        else {
            t = e;
            do (e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return);
            while (t);
        }
        return e.tag === 3 ? a : null;
    }
    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
                return e.dehydrated;
        }
        return null;
    }
    function y(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
                return e.dehydrated;
        }
        return null;
    }
    function p(t) {
        if (f(t) !== t) throw Error(o(188));
    }
    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (((e = f(t)), e === null)) throw Error(o(188));
            return e !== t ? null : t;
        }
        for (var a = t, s = e; ; ) {
            var l = a.return;
            if (l === null) break;
            var c = l.alternate;
            if (c === null) {
                if (((s = l.return), s !== null)) {
                    a = s;
                    continue;
                }
                break;
            }
            if (l.child === c.child) {
                for (c = l.child; c; ) {
                    if (c === a) return p(l), t;
                    if (c === s) return p(l), e;
                    c = c.sibling;
                }
                throw Error(o(188));
            }
            if (a.return !== s.return) (a = l), (s = c);
            else {
                for (var h = !1, v = l.child; v; ) {
                    if (v === a) {
                        (h = !0), (a = l), (s = c);
                        break;
                    }
                    if (v === s) {
                        (h = !0), (s = l), (a = c);
                        break;
                    }
                    v = v.sibling;
                }
                if (!h) {
                    for (v = c.child; v; ) {
                        if (v === a) {
                            (h = !0), (a = c), (s = l);
                            break;
                        }
                        if (v === s) {
                            (h = !0), (s = c), (a = l);
                            break;
                        }
                        v = v.sibling;
                    }
                    if (!h) throw Error(o(189));
                }
            }
            if (a.alternate !== s) throw Error(o(190));
        }
        if (a.tag !== 3) throw Error(o(188));
        return a.stateNode.current === a ? t : e;
    }
    function _(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null; ) {
            if (((e = _(t)), e !== null)) return e;
            t = t.sibling;
        }
        return null;
    }
    var g = Object.assign,
        T = Symbol.for("react.element"),
        O = Symbol.for("react.transitional.element"),
        k = Symbol.for("react.portal"),
        Y = Symbol.for("react.fragment"),
        R = Symbol.for("react.strict_mode"),
        q = Symbol.for("react.profiler"),
        w = Symbol.for("react.consumer"),
        x = Symbol.for("react.context"),
        C = Symbol.for("react.forward_ref"),
        D = Symbol.for("react.suspense"),
        G = Symbol.for("react.suspense_list"),
        U = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        ut = Symbol.for("react.activity"),
        I = Symbol.for("react.memo_cache_sentinel"),
        $ = Symbol.iterator;
    function rt(t) {
        return t === null || typeof t != "object"
            ? null
            : ((t = ($ && t[$]) || t["@@iterator"]), typeof t == "function" ? t : null);
    }
    var at = Symbol.for("react.client.reference");
    function mt(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === at ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case Y:
                return "Fragment";
            case q:
                return "Profiler";
            case R:
                return "StrictMode";
            case D:
                return "Suspense";
            case G:
                return "SuspenseList";
            case ut:
                return "Activity";
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
                case k:
                    return "Portal";
                case x:
                    return t.displayName || "Context";
                case w:
                    return (t._context.displayName || "Context") + ".Consumer";
                case C:
                    var e = t.render;
                    return (
                        (t = t.displayName),
                        t ||
                            ((t = e.displayName || e.name || ""),
                            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
                        t
                    );
                case U:
                    return (e = t.displayName || null), e !== null ? e : mt(t.type) || "Memo";
                case Z:
                    (e = t._payload), (t = t._init);
                    try {
                        return mt(t(e));
                    } catch {}
            }
        return null;
    }
    var yt = Array.isArray,
        V = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        st = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        ft = { pending: !1, data: null, method: null, action: null },
        Dt = [],
        Mt = -1;
    function E(t) {
        return { current: t };
    }
    function z(t) {
        0 > Mt || ((t.current = Dt[Mt]), (Dt[Mt] = null), Mt--);
    }
    function P(t, e) {
        Mt++, (Dt[Mt] = t.current), (t.current = e);
    }
    var W = E(null),
        bt = E(null),
        At = E(null),
        Ht = E(null);
    function xe(t, e) {
        switch ((P(At, e), P(bt, t), P(W, null), e.nodeType)) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? Vy(t) : 0;
                break;
            default:
                if (((t = e.tagName), (e = e.namespaceURI))) (e = Vy(e)), (t = Py(e, t));
                else
                    switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
        }
        z(W), P(W, t);
    }
    function re() {
        z(W), z(bt), z(At);
    }
    function Vr(t) {
        t.memoizedState !== null && P(Ht, t);
        var e = W.current,
            a = Py(e, t.type);
        e !== a && (P(bt, t), P(W, a));
    }
    function Ma(t) {
        bt.current === t && (z(W), z(bt)), Ht.current === t && (z(Ht), (Do._currentValue = ft));
    }
    var Ri, rs;
    function Bn(t) {
        if (Ri === void 0)
            try {
                throw Error();
            } catch (a) {
                var e = a.stack.trim().match(/\n( *(at )?)/);
                (Ri = (e && e[1]) || ""),
                    (rs =
                        -1 <
                        a.stack.indexOf(`
    at`)
                            ? " (<anonymous>)"
                            : -1 < a.stack.indexOf("@")
                              ? "@unknown:0:0"
                              : "");
            }
        return (
            `
` +
            Ri +
            t +
            rs
        );
    }
    var an = !1;
    function Ni(t, e) {
        if (!t || an) return "";
        an = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var nt = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(nt.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == "object" && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(nt, []);
                                } catch (F) {
                                    var K = F;
                                }
                                Reflect.construct(t, [], nt);
                            } else {
                                try {
                                    nt.call();
                                } catch (F) {
                                    K = F;
                                }
                                t.call(nt.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (F) {
                                K = F;
                            }
                            (nt = t()) && typeof nt.catch == "function" && nt.catch(function () {});
                        }
                    } catch (F) {
                        if (F && K && typeof F.stack == "string") return [F.stack, K.stack];
                    }
                    return [null, null];
                },
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            l &&
                l.configurable &&
                Object.defineProperty(s.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var c = s.DetermineComponentFrameRoot(),
                h = c[0],
                v = c[1];
            if (h && v) {
                var A = h.split(`
`),
                    Q = v.split(`
`);
                for (l = s = 0; s < A.length && !A[s].includes("DetermineComponentFrameRoot"); ) s++;
                for (; l < Q.length && !Q[l].includes("DetermineComponentFrameRoot"); ) l++;
                if (s === A.length || l === Q.length)
                    for (s = A.length - 1, l = Q.length - 1; 1 <= s && 0 <= l && A[s] !== Q[l]; ) l--;
                for (; 1 <= s && 0 <= l; s--, l--)
                    if (A[s] !== Q[l]) {
                        if (s !== 1 || l !== 1)
                            do
                                if ((s--, l--, 0 > l || A[s] !== Q[l])) {
                                    var J =
                                        `
` + A[s].replace(" at new ", " at ");
                                    return (
                                        t.displayName &&
                                            J.includes("<anonymous>") &&
                                            (J = J.replace("<anonymous>", t.displayName)),
                                        J
                                    );
                                }
                            while (1 <= s && 0 <= l);
                        break;
                    }
            }
        } finally {
            (an = !1), (Error.prepareStackTrace = a);
        }
        return (a = t ? t.displayName || t.name : "") ? Bn(a) : "";
    }
    function as(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Bn(t.type);
            case 16:
                return Bn("Lazy");
            case 13:
                return t.child !== e && e !== null ? Bn("Suspense Fallback") : Bn("Suspense");
            case 19:
                return Bn("SuspenseList");
            case 0:
            case 15:
                return Ni(t.type, !1);
            case 11:
                return Ni(t.type.render, !1);
            case 1:
                return Ni(t.type, !0);
            case 31:
                return Bn("Activity");
            default:
                return "";
        }
    }
    function Pr(t) {
        try {
            var e = "",
                a = null;
            do (e += as(t, a)), (a = t), (t = t.return);
            while (t);
            return e;
        } catch (s) {
            return (
                `
Error generating stack: ` +
                s.message +
                `
` +
                s.stack
            );
        }
    }
    var Kr = Object.prototype.hasOwnProperty,
        Zr = n.unstable_scheduleCallback,
        Wr = n.unstable_cancelCallback,
        is = n.unstable_shouldYield,
        os = n.unstable_requestPaint,
        Ne = n.unstable_now,
        ss = n.unstable_getCurrentPriorityLevel,
        zi = n.unstable_ImmediatePriority,
        Bi = n.unstable_UserBlockingPriority,
        Fr = n.unstable_NormalPriority,
        us = n.unstable_LowPriority,
        Ui = n.unstable_IdlePriority,
        ls = n.log,
        cs = n.unstable_setDisableYieldValue,
        ur = null,
        we = null;
    function xn(t) {
        if ((typeof ls == "function" && cs(t), we && typeof we.setStrictMode == "function"))
            try {
                we.setStrictMode(ur, t);
            } catch {}
    }
    var Le = Math.clz32 ? Math.clz32 : Yl,
        Li = Math.log,
        fs = Math.LN2;
    function Yl(t) {
        return (t >>>= 0), t === 0 ? 32 : (31 - ((Li(t) / fs) | 0)) | 0;
    }
    var Ke = 256,
        Ca = 262144,
        Ra = 4194304;
    function wn(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
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
                return 64;
            case 128:
                return 128;
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
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t;
        }
    }
    function Na(t, e, a) {
        var s = t.pendingLanes;
        if (s === 0) return 0;
        var l = 0,
            c = t.suspendedLanes,
            h = t.pingedLanes;
        t = t.warmLanes;
        var v = s & 134217727;
        return (
            v !== 0
                ? ((s = v & ~c),
                  s !== 0
                      ? (l = wn(s))
                      : ((h &= v), h !== 0 ? (l = wn(h)) : a || ((a = v & ~t), a !== 0 && (l = wn(a)))))
                : ((v = s & ~c),
                  v !== 0 ? (l = wn(v)) : h !== 0 ? (l = wn(h)) : a || ((a = s & ~t), a !== 0 && (l = wn(a)))),
            l === 0
                ? 0
                : e !== 0 &&
                    e !== l &&
                    (e & c) === 0 &&
                    ((c = l & -l), (a = e & -e), c >= a || (c === 32 && (a & 4194048) !== 0))
                  ? e
                  : l
        );
    }
    function $r(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function ql(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
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
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function ds() {
        var t = Ra;
        return (Ra <<= 1), (Ra & 62914560) === 0 && (Ra = 4194304), t;
    }
    function Hi(t) {
        for (var e = [], a = 0; 31 > a; a++) e.push(t);
        return e;
    }
    function Jr(t, e) {
        (t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
    }
    function Gl(t, e, a, s, l, c) {
        var h = t.pendingLanes;
        (t.pendingLanes = a),
            (t.suspendedLanes = 0),
            (t.pingedLanes = 0),
            (t.warmLanes = 0),
            (t.expiredLanes &= a),
            (t.entangledLanes &= a),
            (t.errorRecoveryDisabledLanes &= a),
            (t.shellSuspendCounter = 0);
        var v = t.entanglements,
            A = t.expirationTimes,
            Q = t.hiddenUpdates;
        for (a = h & ~a; 0 < a; ) {
            var J = 31 - Le(a),
                nt = 1 << J;
            (v[J] = 0), (A[J] = -1);
            var K = Q[J];
            if (K !== null)
                for (Q[J] = null, J = 0; J < K.length; J++) {
                    var F = K[J];
                    F !== null && (F.lane &= -536870913);
                }
            a &= ~nt;
        }
        s !== 0 && hs(t, s, 0), c !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(h & ~e));
    }
    function hs(t, e, a) {
        (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
        var s = 31 - Le(e);
        (t.entangledLanes |= e), (t.entanglements[s] = t.entanglements[s] | 1073741824 | (a & 261930));
    }
    function ms(t, e) {
        var a = (t.entangledLanes |= e);
        for (t = t.entanglements; a; ) {
            var s = 31 - Le(a),
                l = 1 << s;
            (l & e) | (t[s] & e) && (t[s] |= e), (a &= ~l);
        }
    }
    function ps(t, e) {
        var a = e & -e;
        return (a = (a & 42) !== 0 ? 1 : za(a)), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function za(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
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
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0;
        }
        return t;
    }
    function ki(t) {
        return (t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
    }
    function ys() {
        var t = st.p;
        return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : yg(t.type));
    }
    function gs(t, e) {
        var a = st.p;
        try {
            return (st.p = t), e();
        } finally {
            st.p = a;
        }
    }
    var On = Math.random().toString(36).slice(2),
        Se = "__reactFiber$" + On,
        ze = "__reactProps$" + On,
        lr = "__reactContainer$" + On,
        ji = "__reactEvents$" + On,
        Il = "__reactListeners$" + On,
        Xl = "__reactHandles$" + On,
        vs = "__reactResources$" + On,
        ta = "__reactMarker$" + On;
    function Yi(t) {
        delete t[Se], delete t[ze], delete t[ji], delete t[Il], delete t[Xl];
    }
    function cr(t) {
        var e = t[Se];
        if (e) return e;
        for (var a = t.parentNode; a; ) {
            if ((e = a[lr] || a[Se])) {
                if (((a = e.alternate), e.child !== null || (a !== null && a.child !== null)))
                    for (t = tg(t); t !== null; ) {
                        if ((a = t[Se])) return a;
                        t = tg(t);
                    }
                return e;
            }
            (t = a), (a = t.parentNode);
        }
        return null;
    }
    function fr(t) {
        if ((t = t[Se] || t[lr])) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
        }
        return null;
    }
    function dr(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(o(33));
    }
    function on(t) {
        var e = t[vs];
        return e || (e = t[vs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e;
    }
    function fe(t) {
        t[ta] = !0;
    }
    var Un = new Set(),
        _s = {};
    function sn(t, e) {
        Dn(t, e), Dn(t + "Capture", e);
    }
    function Dn(t, e) {
        for (_s[t] = e, t = 0; t < e.length; t++) Un.add(e[t]);
    }
    var Ql = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        bs = {},
        Ba = {};
    function Vl(t) {
        return Kr.call(Ba, t) ? !0 : Kr.call(bs, t) ? !1 : Ql.test(t) ? (Ba[t] = !0) : ((bs[t] = !0), !1);
    }
    function Ua(t, e, a) {
        if (Vl(e))
            if (a === null) t.removeAttribute(e);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var s = e.toLowerCase().slice(0, 5);
                        if (s !== "data-" && s !== "aria-") {
                            t.removeAttribute(e);
                            return;
                        }
                }
                t.setAttribute(e, "" + a);
            }
    }
    function b(t, e, a) {
        if (a === null) t.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return;
            }
            t.setAttribute(e, "" + a);
        }
    }
    function M(t, e, a, s) {
        if (s === null) t.removeAttribute(a);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return;
            }
            t.setAttributeNS(e, a, "" + s);
        }
    }
    function S(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return "";
        }
    }
    function L(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function j(t, e, a) {
        var s = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var l = s.get,
                c = s.set;
            return (
                Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                        return l.call(this);
                    },
                    set: function (h) {
                        (a = "" + h), c.call(this, h);
                    },
                }),
                Object.defineProperty(t, e, { enumerable: s.enumerable }),
                {
                    getValue: function () {
                        return a;
                    },
                    setValue: function (h) {
                        a = "" + h;
                    },
                    stopTracking: function () {
                        (t._valueTracker = null), delete t[e];
                    },
                }
            );
        }
    }
    function B(t) {
        if (!t._valueTracker) {
            var e = L(t) ? "checked" : "value";
            t._valueTracker = j(t, e, "" + t[e]);
        }
    }
    function tt(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var a = e.getValue(),
            s = "";
        return t && (s = L(t) ? (t.checked ? "true" : "false") : t.value), (t = s), t !== a ? (e.setValue(t), !0) : !1;
    }
    function it(t) {
        if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
        try {
            return t.activeElement || t.body;
        } catch {
            return t.body;
        }
    }
    var lt = /[\n"\\]/g;
    function ot(t) {
        return t.replace(lt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
        });
    }
    function ct(t, e, a, s, l, c, h, v) {
        (t.name = ""),
            h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean"
                ? (t.type = h)
                : t.removeAttribute("type"),
            e != null
                ? h === "number"
                    ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + S(e))
                    : t.value !== "" + S(e) && (t.value = "" + S(e))
                : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
            e != null ? Tt(t, h, S(e)) : a != null ? Tt(t, h, S(a)) : s != null && t.removeAttribute("value"),
            l == null && c != null && (t.defaultChecked = !!c),
            l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"),
            v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean"
                ? (t.name = "" + S(v))
                : t.removeAttribute("name");
    }
    function ht(t, e, a, s, l, c, h, v) {
        if (
            (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
            e != null || a != null)
        ) {
            if (!((c !== "submit" && c !== "reset") || e != null)) {
                B(t);
                return;
            }
            (a = a != null ? "" + S(a) : ""),
                (e = e != null ? "" + S(e) : a),
                v || e === t.value || (t.value = e),
                (t.defaultValue = e);
        }
        (s = s ?? l),
            (s = typeof s != "function" && typeof s != "symbol" && !!s),
            (t.checked = v ? t.checked : !!s),
            (t.defaultChecked = !!s),
            h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h),
            B(t);
    }
    function Tt(t, e, a) {
        (e === "number" && it(t.ownerDocument) === t) || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function Ct(t, e, a, s) {
        if (((t = t.options), e)) {
            e = {};
            for (var l = 0; l < a.length; l++) e["$" + a[l]] = !0;
            for (a = 0; a < t.length; a++)
                (l = e.hasOwnProperty("$" + t[a].value)),
                    t[a].selected !== l && (t[a].selected = l),
                    l && s && (t[a].defaultSelected = !0);
        } else {
            for (a = "" + S(a), e = null, l = 0; l < t.length; l++) {
                if (t[l].value === a) {
                    (t[l].selected = !0), s && (t[l].defaultSelected = !0);
                    return;
                }
                e !== null || t[l].disabled || (e = t[l]);
            }
            e !== null && (e.selected = !0);
        }
    }
    function kt(t, e, a) {
        if (e != null && ((e = "" + S(e)), e !== t.value && (t.value = e), a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return;
        }
        t.defaultValue = a != null ? "" + S(a) : "";
    }
    function ae(t, e, a, s) {
        if (e == null) {
            if (s != null) {
                if (a != null) throw Error(o(92));
                if (yt(s)) {
                    if (1 < s.length) throw Error(o(93));
                    s = s[0];
                }
                a = s;
            }
            a == null && (a = ""), (e = a);
        }
        (a = S(e)), (t.defaultValue = a), (s = t.textContent), s === a && s !== "" && s !== null && (t.value = s), B(t);
    }
    function Kt(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return;
            }
        }
        t.textContent = e;
    }
    var qe = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
        )
    );
    function hr(t, e, a) {
        var s = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === ""
            ? s
                ? t.setProperty(e, "")
                : e === "float"
                  ? (t.cssFloat = "")
                  : (t[e] = "")
            : s
              ? t.setProperty(e, a)
              : typeof a != "number" || a === 0 || qe.has(e)
                ? e === "float"
                    ? (t.cssFloat = a)
                    : (t[e] = ("" + a).trim())
                : (t[e] = a + "px");
    }
    function La(t, e, a) {
        if (e != null && typeof e != "object") throw Error(o(62));
        if (((t = t.style), a != null)) {
            for (var s in a)
                !a.hasOwnProperty(s) ||
                    (e != null && e.hasOwnProperty(s)) ||
                    (s.indexOf("--") === 0 ? t.setProperty(s, "") : s === "float" ? (t.cssFloat = "") : (t[s] = ""));
            for (var l in e) (s = e[l]), e.hasOwnProperty(l) && a[l] !== s && hr(t, l, s);
        } else for (var c in e) e.hasOwnProperty(c) && hr(t, c, e[c]);
    }
    function qi(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Gi = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
        ]),
        Xh =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ha(t) {
        return Xh.test("" + t)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : t;
    }
    function gn() {}
    var ka = null;
    function Pl(t) {
        return (
            (t = t.target || t.srcElement || window),
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === 3 ? t.parentNode : t
        );
    }
    var ja = null,
        Ya = null;
    function Qh(t) {
        var e = fr(t);
        if (e && (t = e.stateNode)) {
            var a = t[ze] || null;
            t: switch (((t = e.stateNode), e.type)) {
                case "input":
                    if (
                        (ct(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                        (e = a.name),
                        a.type === "radio" && e != null)
                    ) {
                        for (a = t; a.parentNode; ) a = a.parentNode;
                        for (
                            a = a.querySelectorAll('input[name="' + ot("" + e) + '"][type="radio"]'), e = 0;
                            e < a.length;
                            e++
                        ) {
                            var s = a[e];
                            if (s !== t && s.form === t.form) {
                                var l = s[ze] || null;
                                if (!l) throw Error(o(90));
                                ct(
                                    s,
                                    l.value,
                                    l.defaultValue,
                                    l.defaultValue,
                                    l.checked,
                                    l.defaultChecked,
                                    l.type,
                                    l.name
                                );
                            }
                        }
                        for (e = 0; e < a.length; e++) (s = a[e]), s.form === t.form && tt(s);
                    }
                    break t;
                case "textarea":
                    kt(t, a.value, a.defaultValue);
                    break t;
                case "select":
                    (e = a.value), e != null && Ct(t, !!a.multiple, e, !1);
            }
        }
    }
    var Kl = !1;
    function Vh(t, e, a) {
        if (Kl) return t(e, a);
        Kl = !0;
        try {
            var s = t(e);
            return s;
        } finally {
            if (
                ((Kl = !1),
                (ja !== null || Ya !== null) && (su(), ja && ((e = ja), (t = Ya), (Ya = ja = null), Qh(e), t)))
            )
                for (e = 0; e < t.length; e++) Qh(t[e]);
        }
    }
    function Ii(t, e) {
        var a = t.stateNode;
        if (a === null) return null;
        var s = a[ze] || null;
        if (s === null) return null;
        a = s[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (s = !s.disabled) ||
                    ((t = t.type), (s = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
                    (t = !s);
                break t;
            default:
                t = !1;
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(o(231, e, typeof a));
        return a;
    }
    var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Zl = !1;
    if (Ln)
        try {
            var Xi = {};
            Object.defineProperty(Xi, "passive", {
                get: function () {
                    Zl = !0;
                },
            }),
                window.addEventListener("test", Xi, Xi),
                window.removeEventListener("test", Xi, Xi);
        } catch {
            Zl = !1;
        }
    var mr = null,
        Wl = null,
        Ss = null;
    function Ph() {
        if (Ss) return Ss;
        var t,
            e = Wl,
            a = e.length,
            s,
            l = "value" in mr ? mr.value : mr.textContent,
            c = l.length;
        for (t = 0; t < a && e[t] === l[t]; t++);
        var h = a - t;
        for (s = 1; s <= h && e[a - s] === l[c - s]; s++);
        return (Ss = l.slice(t, 1 < s ? 1 - s : void 0));
    }
    function Es(t) {
        var e = t.keyCode;
        return (
            "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
            t === 10 && (t = 13),
            32 <= t || t === 13 ? t : 0
        );
    }
    function Ts() {
        return !0;
    }
    function Kh() {
        return !1;
    }
    function Ge(t) {
        function e(a, s, l, c, h) {
            (this._reactName = a),
                (this._targetInst = l),
                (this.type = s),
                (this.nativeEvent = c),
                (this.target = h),
                (this.currentTarget = null);
            for (var v in t) t.hasOwnProperty(v) && ((a = t[v]), (this[v] = a ? a(c) : c[v]));
            return (
                (this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1)
                    ? Ts
                    : Kh),
                (this.isPropagationStopped = Kh),
                this
            );
        }
        return (
            g(e.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a &&
                        (a.preventDefault
                            ? a.preventDefault()
                            : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                        (this.isDefaultPrevented = Ts));
                },
                stopPropagation: function () {
                    var a = this.nativeEvent;
                    a &&
                        (a.stopPropagation
                            ? a.stopPropagation()
                            : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                        (this.isPropagationStopped = Ts));
                },
                persist: function () {},
                isPersistent: Ts,
            }),
            e
        );
    }
    var ea = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
                return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        xs = Ge(ea),
        Qi = g({}, ea, { view: 0, detail: 0 }),
        hb = Ge(Qi),
        Fl,
        $l,
        Vi,
        ws = g({}, Qi, {
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
            getModifierState: tc,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
                return t.relatedTarget === void 0
                    ? t.fromElement === t.srcElement
                        ? t.toElement
                        : t.fromElement
                    : t.relatedTarget;
            },
            movementX: function (t) {
                return "movementX" in t
                    ? t.movementX
                    : (t !== Vi &&
                          (Vi && t.type === "mousemove"
                              ? ((Fl = t.screenX - Vi.screenX), ($l = t.screenY - Vi.screenY))
                              : ($l = Fl = 0),
                          (Vi = t)),
                      Fl);
            },
            movementY: function (t) {
                return "movementY" in t ? t.movementY : $l;
            },
        }),
        Zh = Ge(ws),
        mb = g({}, ws, { dataTransfer: 0 }),
        pb = Ge(mb),
        yb = g({}, Qi, { relatedTarget: 0 }),
        Jl = Ge(yb),
        gb = g({}, ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        vb = Ge(gb),
        _b = g({}, ea, {
            clipboardData: function (t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData;
            },
        }),
        bb = Ge(_b),
        Sb = g({}, ea, { data: 0 }),
        Wh = Ge(Sb),
        Eb = {
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
            MozPrintableKey: "Unidentified",
        },
        Tb = {
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
            224: "Meta",
        },
        xb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function wb(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = xb[t]) ? !!e[t] : !1;
    }
    function tc() {
        return wb;
    }
    var Ob = g({}, Qi, {
            key: function (t) {
                if (t.key) {
                    var e = Eb[t.key] || t.key;
                    if (e !== "Unidentified") return e;
                }
                return t.type === "keypress"
                    ? ((t = Es(t)), t === 13 ? "Enter" : String.fromCharCode(t))
                    : t.type === "keydown" || t.type === "keyup"
                      ? Tb[t.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: tc,
            charCode: function (t) {
                return t.type === "keypress" ? Es(t) : 0;
            },
            keyCode: function (t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            },
            which: function (t) {
                return t.type === "keypress" ? Es(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            },
        }),
        Db = Ge(Ob),
        Ab = g({}, ws, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Fh = Ge(Ab),
        Mb = g({}, Qi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: tc,
        }),
        Cb = Ge(Mb),
        Rb = g({}, ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Nb = Ge(Rb),
        zb = g({}, ws, {
            deltaX: function (t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
            },
            deltaY: function (t) {
                return "deltaY" in t
                    ? t.deltaY
                    : "wheelDeltaY" in t
                      ? -t.wheelDeltaY
                      : "wheelDelta" in t
                        ? -t.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Bb = Ge(zb),
        Ub = g({}, ea, { newState: 0, oldState: 0 }),
        Lb = Ge(Ub),
        Hb = [9, 13, 27, 32],
        ec = Ln && "CompositionEvent" in window,
        Pi = null;
    Ln && "documentMode" in document && (Pi = document.documentMode);
    var kb = Ln && "TextEvent" in window && !Pi,
        $h = Ln && (!ec || (Pi && 8 < Pi && 11 >= Pi)),
        Jh = " ",
        tm = !1;
    function em(t, e) {
        switch (t) {
            case "keyup":
                return Hb.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function nm(t) {
        return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
    }
    var qa = !1;
    function jb(t, e) {
        switch (t) {
            case "compositionend":
                return nm(e);
            case "keypress":
                return e.which !== 32 ? null : ((tm = !0), Jh);
            case "textInput":
                return (t = e.data), t === Jh && tm ? null : t;
            default:
                return null;
        }
    }
    function Yb(t, e) {
        if (qa)
            return t === "compositionend" || (!ec && em(t, e))
                ? ((t = Ph()), (Ss = Wl = mr = null), (qa = !1), t)
                : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which);
                }
                return null;
            case "compositionend":
                return $h && e.locale !== "ko" ? null : e.data;
            default:
                return null;
        }
    }
    var qb = {
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
        week: !0,
    };
    function rm(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!qb[t.type] : e === "textarea";
    }
    function am(t, e, a, s) {
        ja ? (Ya ? Ya.push(s) : (Ya = [s])) : (ja = s),
            (e = mu(e, "onChange")),
            0 < e.length && ((a = new xs("onChange", "change", null, a, s)), t.push({ event: a, listeners: e }));
    }
    var Ki = null,
        Zi = null;
    function Gb(t) {
        Yy(t, 0);
    }
    function Os(t) {
        var e = dr(t);
        if (tt(e)) return t;
    }
    function im(t, e) {
        if (t === "change") return e;
    }
    var om = !1;
    if (Ln) {
        var nc;
        if (Ln) {
            var rc = "oninput" in document;
            if (!rc) {
                var sm = document.createElement("div");
                sm.setAttribute("oninput", "return;"), (rc = typeof sm.oninput == "function");
            }
            nc = rc;
        } else nc = !1;
        om = nc && (!document.documentMode || 9 < document.documentMode);
    }
    function um() {
        Ki && (Ki.detachEvent("onpropertychange", lm), (Zi = Ki = null));
    }
    function lm(t) {
        if (t.propertyName === "value" && Os(Zi)) {
            var e = [];
            am(e, Zi, t, Pl(t)), Vh(Gb, e);
        }
    }
    function Ib(t, e, a) {
        t === "focusin" ? (um(), (Ki = e), (Zi = a), Ki.attachEvent("onpropertychange", lm)) : t === "focusout" && um();
    }
    function Xb(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Os(Zi);
    }
    function Qb(t, e) {
        if (t === "click") return Os(e);
    }
    function Vb(t, e) {
        if (t === "input" || t === "change") return Os(e);
    }
    function Pb(t, e) {
        return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var Ze = typeof Object.is == "function" ? Object.is : Pb;
    function Wi(t, e) {
        if (Ze(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var a = Object.keys(t),
            s = Object.keys(e);
        if (a.length !== s.length) return !1;
        for (s = 0; s < a.length; s++) {
            var l = a[s];
            if (!Kr.call(e, l) || !Ze(t[l], e[l])) return !1;
        }
        return !0;
    }
    function cm(t) {
        for (; t && t.firstChild; ) t = t.firstChild;
        return t;
    }
    function fm(t, e) {
        var a = cm(t);
        t = 0;
        for (var s; a; ) {
            if (a.nodeType === 3) {
                if (((s = t + a.textContent.length), t <= e && s >= e)) return { node: a, offset: e - t };
                t = s;
            }
            t: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t;
                    }
                    a = a.parentNode;
                }
                a = void 0;
            }
            a = cm(a);
        }
    }
    function dm(t, e) {
        return t && e
            ? t === e
                ? !0
                : t && t.nodeType === 3
                  ? !1
                  : e && e.nodeType === 3
                    ? dm(t, e.parentNode)
                    : "contains" in t
                      ? t.contains(e)
                      : t.compareDocumentPosition
                        ? !!(t.compareDocumentPosition(e) & 16)
                        : !1
            : !1;
    }
    function hm(t) {
        t =
            t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
                ? t.ownerDocument.defaultView
                : window;
        for (var e = it(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof e.contentWindow.location.href == "string";
            } catch {
                a = !1;
            }
            if (a) t = e.contentWindow;
            else break;
            e = it(t.document);
        }
        return e;
    }
    function ac(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return (
            e &&
            ((e === "input" &&
                (t.type === "text" ||
                    t.type === "search" ||
                    t.type === "tel" ||
                    t.type === "url" ||
                    t.type === "password")) ||
                e === "textarea" ||
                t.contentEditable === "true")
        );
    }
    var Kb = Ln && "documentMode" in document && 11 >= document.documentMode,
        Ga = null,
        ic = null,
        Fi = null,
        oc = !1;
    function mm(t, e, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        oc ||
            Ga == null ||
            Ga !== it(s) ||
            ((s = Ga),
            "selectionStart" in s && ac(s)
                ? (s = { start: s.selectionStart, end: s.selectionEnd })
                : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
                  (s = {
                      anchorNode: s.anchorNode,
                      anchorOffset: s.anchorOffset,
                      focusNode: s.focusNode,
                      focusOffset: s.focusOffset,
                  })),
            (Fi && Wi(Fi, s)) ||
                ((Fi = s),
                (s = mu(ic, "onSelect")),
                0 < s.length &&
                    ((e = new xs("onSelect", "select", null, e, a)),
                    t.push({ event: e, listeners: s }),
                    (e.target = Ga))));
    }
    function na(t, e) {
        var a = {};
        return (a[t.toLowerCase()] = e.toLowerCase()), (a["Webkit" + t] = "webkit" + e), (a["Moz" + t] = "moz" + e), a;
    }
    var Ia = {
            animationend: na("Animation", "AnimationEnd"),
            animationiteration: na("Animation", "AnimationIteration"),
            animationstart: na("Animation", "AnimationStart"),
            transitionrun: na("Transition", "TransitionRun"),
            transitionstart: na("Transition", "TransitionStart"),
            transitioncancel: na("Transition", "TransitionCancel"),
            transitionend: na("Transition", "TransitionEnd"),
        },
        sc = {},
        pm = {};
    Ln &&
        ((pm = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Ia.animationend.animation,
            delete Ia.animationiteration.animation,
            delete Ia.animationstart.animation),
        "TransitionEvent" in window || delete Ia.transitionend.transition);
    function ra(t) {
        if (sc[t]) return sc[t];
        if (!Ia[t]) return t;
        var e = Ia[t],
            a;
        for (a in e) if (e.hasOwnProperty(a) && a in pm) return (sc[t] = e[a]);
        return t;
    }
    var ym = ra("animationend"),
        gm = ra("animationiteration"),
        vm = ra("animationstart"),
        Zb = ra("transitionrun"),
        Wb = ra("transitionstart"),
        Fb = ra("transitioncancel"),
        _m = ra("transitionend"),
        bm = new Map(),
        uc =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    uc.push("scrollEnd");
    function vn(t, e) {
        bm.set(t, e), sn(e, [t]);
    }
    var Ds =
            typeof reportError == "function"
                ? reportError
                : function (t) {
                      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                          var e = new window.ErrorEvent("error", {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof t == "object" && t !== null && typeof t.message == "string"
                                      ? String(t.message)
                                      : String(t),
                              error: t,
                          });
                          if (!window.dispatchEvent(e)) return;
                      } else if (typeof process == "object" && typeof process.emit == "function") {
                          process.emit("uncaughtException", t);
                          return;
                      }
                      console.error(t);
                  },
        un = [],
        Xa = 0,
        lc = 0;
    function As() {
        for (var t = Xa, e = (lc = Xa = 0); e < t; ) {
            var a = un[e];
            un[e++] = null;
            var s = un[e];
            un[e++] = null;
            var l = un[e];
            un[e++] = null;
            var c = un[e];
            if (((un[e++] = null), s !== null && l !== null)) {
                var h = s.pending;
                h === null ? (l.next = l) : ((l.next = h.next), (h.next = l)), (s.pending = l);
            }
            c !== 0 && Sm(a, l, c);
        }
    }
    function Ms(t, e, a, s) {
        (un[Xa++] = t),
            (un[Xa++] = e),
            (un[Xa++] = a),
            (un[Xa++] = s),
            (lc |= s),
            (t.lanes |= s),
            (t = t.alternate),
            t !== null && (t.lanes |= s);
    }
    function cc(t, e, a, s) {
        return Ms(t, e, a, s), Cs(t);
    }
    function aa(t, e) {
        return Ms(t, null, null, e), Cs(t);
    }
    function Sm(t, e, a) {
        t.lanes |= a;
        var s = t.alternate;
        s !== null && (s.lanes |= a);
        for (var l = !1, c = t.return; c !== null; )
            (c.childLanes |= a),
                (s = c.alternate),
                s !== null && (s.childLanes |= a),
                c.tag === 22 && ((t = c.stateNode), t === null || t._visibility & 1 || (l = !0)),
                (t = c),
                (c = c.return);
        return t.tag === 3
            ? ((c = t.stateNode),
              l &&
                  e !== null &&
                  ((l = 31 - Le(a)),
                  (t = c.hiddenUpdates),
                  (s = t[l]),
                  s === null ? (t[l] = [e]) : s.push(e),
                  (e.lane = a | 536870912)),
              c)
            : null;
    }
    function Cs(t) {
        if (50 < bo) throw ((bo = 0), (bf = null), Error(o(185)));
        for (var e = t.return; e !== null; ) (t = e), (e = t.return);
        return t.tag === 3 ? t.stateNode : null;
    }
    var Qa = {};
    function $b(t, e, a, s) {
        (this.tag = t),
            (this.key = a),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = e),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = s),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function We(t, e, a, s) {
        return new $b(t, e, a, s);
    }
    function fc(t) {
        return (t = t.prototype), !(!t || !t.isReactComponent);
    }
    function Hn(t, e) {
        var a = t.alternate;
        return (
            a === null
                ? ((a = We(t.tag, e, t.key, t.mode)),
                  (a.elementType = t.elementType),
                  (a.type = t.type),
                  (a.stateNode = t.stateNode),
                  (a.alternate = t),
                  (t.alternate = a))
                : ((a.pendingProps = e), (a.type = t.type), (a.flags = 0), (a.subtreeFlags = 0), (a.deletions = null)),
            (a.flags = t.flags & 65011712),
            (a.childLanes = t.childLanes),
            (a.lanes = t.lanes),
            (a.child = t.child),
            (a.memoizedProps = t.memoizedProps),
            (a.memoizedState = t.memoizedState),
            (a.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
            (a.sibling = t.sibling),
            (a.index = t.index),
            (a.ref = t.ref),
            (a.refCleanup = t.refCleanup),
            a
        );
    }
    function Em(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return (
            a === null
                ? ((t.childLanes = 0),
                  (t.lanes = e),
                  (t.child = null),
                  (t.subtreeFlags = 0),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  (t.dependencies = null),
                  (t.stateNode = null))
                : ((t.childLanes = a.childLanes),
                  (t.lanes = a.lanes),
                  (t.child = a.child),
                  (t.subtreeFlags = 0),
                  (t.deletions = null),
                  (t.memoizedProps = a.memoizedProps),
                  (t.memoizedState = a.memoizedState),
                  (t.updateQueue = a.updateQueue),
                  (t.type = a.type),
                  (e = a.dependencies),
                  (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
            t
        );
    }
    function Rs(t, e, a, s, l, c) {
        var h = 0;
        if (((s = t), typeof t == "function")) fc(t) && (h = 1);
        else if (typeof t == "string")
            h = rS(t, a, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
                case ut:
                    return (t = We(31, a, e, l)), (t.elementType = ut), (t.lanes = c), t;
                case Y:
                    return ia(a.children, l, c, e);
                case R:
                    (h = 8), (l |= 24);
                    break;
                case q:
                    return (t = We(12, a, e, l | 2)), (t.elementType = q), (t.lanes = c), t;
                case D:
                    return (t = We(13, a, e, l)), (t.elementType = D), (t.lanes = c), t;
                case G:
                    return (t = We(19, a, e, l)), (t.elementType = G), (t.lanes = c), t;
                default:
                    if (typeof t == "object" && t !== null)
                        switch (t.$$typeof) {
                            case x:
                                h = 10;
                                break t;
                            case w:
                                h = 9;
                                break t;
                            case C:
                                h = 11;
                                break t;
                            case U:
                                h = 14;
                                break t;
                            case Z:
                                (h = 16), (s = null);
                                break t;
                        }
                    (h = 29), (a = Error(o(130, t === null ? "null" : typeof t, ""))), (s = null);
            }
        return (e = We(h, a, e, l)), (e.elementType = t), (e.type = s), (e.lanes = c), e;
    }
    function ia(t, e, a, s) {
        return (t = We(7, t, s, e)), (t.lanes = a), t;
    }
    function dc(t, e, a) {
        return (t = We(6, t, null, e)), (t.lanes = a), t;
    }
    function Tm(t) {
        var e = We(18, null, null, 0);
        return (e.stateNode = t), e;
    }
    function hc(t, e, a) {
        return (
            (e = We(4, t.children !== null ? t.children : [], t.key, e)),
            (e.lanes = a),
            (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
            e
        );
    }
    var xm = new WeakMap();
    function ln(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = xm.get(t);
            return a !== void 0 ? a : ((e = { value: t, source: e, stack: Pr(e) }), xm.set(t, e), e);
        }
        return { value: t, source: e, stack: Pr(e) };
    }
    var Va = [],
        Pa = 0,
        Ns = null,
        $i = 0,
        cn = [],
        fn = 0,
        pr = null,
        An = 1,
        Mn = "";
    function kn(t, e) {
        (Va[Pa++] = $i), (Va[Pa++] = Ns), (Ns = t), ($i = e);
    }
    function wm(t, e, a) {
        (cn[fn++] = An), (cn[fn++] = Mn), (cn[fn++] = pr), (pr = t);
        var s = An;
        t = Mn;
        var l = 32 - Le(s) - 1;
        (s &= ~(1 << l)), (a += 1);
        var c = 32 - Le(e) + l;
        if (30 < c) {
            var h = l - (l % 5);
            (c = (s & ((1 << h) - 1)).toString(32)),
                (s >>= h),
                (l -= h),
                (An = (1 << (32 - Le(e) + l)) | (a << l) | s),
                (Mn = c + t);
        } else (An = (1 << c) | (a << l) | s), (Mn = t);
    }
    function mc(t) {
        t.return !== null && (kn(t, 1), wm(t, 1, 0));
    }
    function pc(t) {
        for (; t === Ns; ) (Ns = Va[--Pa]), (Va[Pa] = null), ($i = Va[--Pa]), (Va[Pa] = null);
        for (; t === pr; )
            (pr = cn[--fn]), (cn[fn] = null), (Mn = cn[--fn]), (cn[fn] = null), (An = cn[--fn]), (cn[fn] = null);
    }
    function Om(t, e) {
        (cn[fn++] = An), (cn[fn++] = Mn), (cn[fn++] = pr), (An = e.id), (Mn = e.overflow), (pr = t);
    }
    var Oe = null,
        te = null,
        Ut = !1,
        yr = null,
        dn = !1,
        yc = Error(o(519));
    function gr(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw (Ji(ln(e, t)), yc);
    }
    function Dm(t) {
        var e = t.stateNode,
            a = t.type,
            s = t.memoizedProps;
        switch (((e[Se] = t), (e[ze] = s), a)) {
            case "dialog":
                Nt("cancel", e), Nt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                Nt("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Eo.length; a++) Nt(Eo[a], e);
                break;
            case "source":
                Nt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                Nt("error", e), Nt("load", e);
                break;
            case "details":
                Nt("toggle", e);
                break;
            case "input":
                Nt("invalid", e), ht(e, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                break;
            case "select":
                Nt("invalid", e);
                break;
            case "textarea":
                Nt("invalid", e), ae(e, s.value, s.defaultValue, s.children);
        }
        (a = s.children),
            (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
            e.textContent === "" + a ||
            s.suppressHydrationWarning === !0 ||
            Xy(e.textContent, a)
                ? (s.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)),
                  s.onScroll != null && Nt("scroll", e),
                  s.onScrollEnd != null && Nt("scrollend", e),
                  s.onClick != null && (e.onclick = gn),
                  (e = !0))
                : (e = !1),
            e || gr(t, !0);
    }
    function Am(t) {
        for (Oe = t.return; Oe; )
            switch (Oe.tag) {
                case 5:
                case 31:
                case 13:
                    dn = !1;
                    return;
                case 27:
                case 3:
                    dn = !0;
                    return;
                default:
                    Oe = Oe.return;
            }
    }
    function Ka(t) {
        if (t !== Oe) return !1;
        if (!Ut) return Am(t), (Ut = !0), !1;
        var e = t.tag,
            a;
        if (
            ((a = e !== 3 && e !== 27) &&
                ((a = e === 5) &&
                    ((a = t.type), (a = !(a !== "form" && a !== "button") || Uf(t.type, t.memoizedProps))),
                (a = !a)),
            a && te && gr(t),
            Am(t),
            e === 13)
        ) {
            if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
            te = Jy(t);
        } else if (e === 31) {
            if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(o(317));
            te = Jy(t);
        } else
            e === 27
                ? ((e = te), Rr(t.type) ? ((t = Yf), (Yf = null), (te = t)) : (te = e))
                : (te = Oe ? mn(t.stateNode.nextSibling) : null);
        return !0;
    }
    function oa() {
        (te = Oe = null), (Ut = !1);
    }
    function gc() {
        var t = yr;
        return t !== null && (Ve === null ? (Ve = t) : Ve.push.apply(Ve, t), (yr = null)), t;
    }
    function Ji(t) {
        yr === null ? (yr = [t]) : yr.push(t);
    }
    var vc = E(null),
        sa = null,
        jn = null;
    function vr(t, e, a) {
        P(vc, e._currentValue), (e._currentValue = a);
    }
    function Yn(t) {
        (t._currentValue = vc.current), z(vc);
    }
    function _c(t, e, a) {
        for (; t !== null; ) {
            var s = t.alternate;
            if (
                ((t.childLanes & e) !== e
                    ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
                    : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
                t === a)
            )
                break;
            t = t.return;
        }
    }
    function bc(t, e, a, s) {
        var l = t.child;
        for (l !== null && (l.return = t); l !== null; ) {
            var c = l.dependencies;
            if (c !== null) {
                var h = l.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var v = c;
                    c = l;
                    for (var A = 0; A < e.length; A++)
                        if (v.context === e[A]) {
                            (c.lanes |= a),
                                (v = c.alternate),
                                v !== null && (v.lanes |= a),
                                _c(c.return, a, t),
                                s || (h = null);
                            break t;
                        }
                    c = v.next;
                }
            } else if (l.tag === 18) {
                if (((h = l.return), h === null)) throw Error(o(341));
                (h.lanes |= a), (c = h.alternate), c !== null && (c.lanes |= a), _c(h, a, t), (h = null);
            } else h = l.child;
            if (h !== null) h.return = l;
            else
                for (h = l; h !== null; ) {
                    if (h === t) {
                        h = null;
                        break;
                    }
                    if (((l = h.sibling), l !== null)) {
                        (l.return = h.return), (h = l);
                        break;
                    }
                    h = h.return;
                }
            l = h;
        }
    }
    function Za(t, e, a, s) {
        t = null;
        for (var l = e, c = !1; l !== null; ) {
            if (!c) {
                if ((l.flags & 524288) !== 0) c = !0;
                else if ((l.flags & 262144) !== 0) break;
            }
            if (l.tag === 10) {
                var h = l.alternate;
                if (h === null) throw Error(o(387));
                if (((h = h.memoizedProps), h !== null)) {
                    var v = l.type;
                    Ze(l.pendingProps.value, h.value) || (t !== null ? t.push(v) : (t = [v]));
                }
            } else if (l === Ht.current) {
                if (((h = l.alternate), h === null)) throw Error(o(387));
                h.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
                    (t !== null ? t.push(Do) : (t = [Do]));
            }
            l = l.return;
        }
        t !== null && bc(e, t, a, s), (e.flags |= 262144);
    }
    function zs(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ze(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next;
        }
        return !1;
    }
    function ua(t) {
        (sa = t), (jn = null), (t = t.dependencies), t !== null && (t.firstContext = null);
    }
    function De(t) {
        return Mm(sa, t);
    }
    function Bs(t, e) {
        return sa === null && ua(t), Mm(t, e);
    }
    function Mm(t, e) {
        var a = e._currentValue;
        if (((e = { context: e, memoizedValue: a, next: null }), jn === null)) {
            if (t === null) throw Error(o(308));
            (jn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288);
        } else jn = jn.next = e;
        return a;
    }
    var Jb =
            typeof AbortController < "u"
                ? AbortController
                : function () {
                      var t = [],
                          e = (this.signal = {
                              aborted: !1,
                              addEventListener: function (a, s) {
                                  t.push(s);
                              },
                          });
                      this.abort = function () {
                          (e.aborted = !0),
                              t.forEach(function (a) {
                                  return a();
                              });
                      };
                  },
        t1 = n.unstable_scheduleCallback,
        e1 = n.unstable_NormalPriority,
        ge = {
            $$typeof: x,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function Sc() {
        return { controller: new Jb(), data: new Map(), refCount: 0 };
    }
    function to(t) {
        t.refCount--,
            t.refCount === 0 &&
                t1(e1, function () {
                    t.controller.abort();
                });
    }
    var eo = null,
        Ec = 0,
        Wa = 0,
        Fa = null;
    function n1(t, e) {
        if (eo === null) {
            var a = (eo = []);
            (Ec = 0),
                (Wa = Of()),
                (Fa = {
                    status: "pending",
                    value: void 0,
                    then: function (s) {
                        a.push(s);
                    },
                });
        }
        return Ec++, e.then(Cm, Cm), e;
    }
    function Cm() {
        if (--Ec === 0 && eo !== null) {
            Fa !== null && (Fa.status = "fulfilled");
            var t = eo;
            (eo = null), (Wa = 0), (Fa = null);
            for (var e = 0; e < t.length; e++) (0, t[e])();
        }
    }
    function r1(t, e) {
        var a = [],
            s = {
                status: "pending",
                value: null,
                reason: null,
                then: function (l) {
                    a.push(l);
                },
            };
        return (
            t.then(
                function () {
                    (s.status = "fulfilled"), (s.value = e);
                    for (var l = 0; l < a.length; l++) (0, a[l])(e);
                },
                function (l) {
                    for (s.status = "rejected", s.reason = l, l = 0; l < a.length; l++) (0, a[l])(void 0);
                }
            ),
            s
        );
    }
    var Rm = V.S;
    V.S = function (t, e) {
        (my = Ne()),
            typeof e == "object" && e !== null && typeof e.then == "function" && n1(t, e),
            Rm !== null && Rm(t, e);
    };
    var la = E(null);
    function Tc() {
        var t = la.current;
        return t !== null ? t : Jt.pooledCache;
    }
    function Us(t, e) {
        e === null ? P(la, la.current) : P(la, e.pool);
    }
    function Nm() {
        var t = Tc();
        return t === null ? null : { parent: ge._currentValue, pool: t };
    }
    var $a = Error(o(460)),
        xc = Error(o(474)),
        Ls = Error(o(542)),
        Hs = { then: function () {} };
    function zm(t) {
        return (t = t.status), t === "fulfilled" || t === "rejected";
    }
    function Bm(t, e, a) {
        switch (((a = t[a]), a === void 0 ? t.push(e) : a !== e && (e.then(gn, gn), (e = a)), e.status)) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw ((t = e.reason), Lm(t), t);
            default:
                if (typeof e.status == "string") e.then(gn, gn);
                else {
                    if (((t = Jt), t !== null && 100 < t.shellSuspendCounter)) throw Error(o(482));
                    (t = e),
                        (t.status = "pending"),
                        t.then(
                            function (s) {
                                if (e.status === "pending") {
                                    var l = e;
                                    (l.status = "fulfilled"), (l.value = s);
                                }
                            },
                            function (s) {
                                if (e.status === "pending") {
                                    var l = e;
                                    (l.status = "rejected"), (l.reason = s);
                                }
                            }
                        );
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw ((t = e.reason), Lm(t), t);
                }
                throw ((fa = e), $a);
        }
    }
    function ca(t) {
        try {
            var e = t._init;
            return e(t._payload);
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((fa = a), $a) : a;
        }
    }
    var fa = null;
    function Um() {
        if (fa === null) throw Error(o(459));
        var t = fa;
        return (fa = null), t;
    }
    function Lm(t) {
        if (t === $a || t === Ls) throw Error(o(483));
    }
    var Ja = null,
        no = 0;
    function ks(t) {
        var e = no;
        return (no += 1), Ja === null && (Ja = []), Bm(Ja, t, e);
    }
    function ro(t, e) {
        (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
    }
    function js(t, e) {
        throw e.$$typeof === T
            ? Error(o(525))
            : ((t = Object.prototype.toString.call(e)),
              Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Hm(t) {
        function e(H, N) {
            if (t) {
                var X = H.deletions;
                X === null ? ((H.deletions = [N]), (H.flags |= 16)) : X.push(N);
            }
        }
        function a(H, N) {
            if (!t) return null;
            for (; N !== null; ) e(H, N), (N = N.sibling);
            return null;
        }
        function s(H) {
            for (var N = new Map(); H !== null; ) H.key !== null ? N.set(H.key, H) : N.set(H.index, H), (H = H.sibling);
            return N;
        }
        function l(H, N) {
            return (H = Hn(H, N)), (H.index = 0), (H.sibling = null), H;
        }
        function c(H, N, X) {
            return (
                (H.index = X),
                t
                    ? ((X = H.alternate),
                      X !== null ? ((X = X.index), X < N ? ((H.flags |= 67108866), N) : X) : ((H.flags |= 67108866), N))
                    : ((H.flags |= 1048576), N)
            );
        }
        function h(H) {
            return t && H.alternate === null && (H.flags |= 67108866), H;
        }
        function v(H, N, X, et) {
            return N === null || N.tag !== 6
                ? ((N = dc(X, H.mode, et)), (N.return = H), N)
                : ((N = l(N, X)), (N.return = H), N);
        }
        function A(H, N, X, et) {
            var gt = X.type;
            return gt === Y
                ? J(H, N, X.props.children, et, X.key)
                : N !== null &&
                    (N.elementType === gt ||
                        (typeof gt == "object" && gt !== null && gt.$$typeof === Z && ca(gt) === N.type))
                  ? ((N = l(N, X.props)), ro(N, X), (N.return = H), N)
                  : ((N = Rs(X.type, X.key, X.props, null, H.mode, et)), ro(N, X), (N.return = H), N);
        }
        function Q(H, N, X, et) {
            return N === null ||
                N.tag !== 4 ||
                N.stateNode.containerInfo !== X.containerInfo ||
                N.stateNode.implementation !== X.implementation
                ? ((N = hc(X, H.mode, et)), (N.return = H), N)
                : ((N = l(N, X.children || [])), (N.return = H), N);
        }
        function J(H, N, X, et, gt) {
            return N === null || N.tag !== 7
                ? ((N = ia(X, H.mode, et, gt)), (N.return = H), N)
                : ((N = l(N, X)), (N.return = H), N);
        }
        function nt(H, N, X) {
            if ((typeof N == "string" && N !== "") || typeof N == "number" || typeof N == "bigint")
                return (N = dc("" + N, H.mode, X)), (N.return = H), N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case O:
                        return (X = Rs(N.type, N.key, N.props, null, H.mode, X)), ro(X, N), (X.return = H), X;
                    case k:
                        return (N = hc(N, H.mode, X)), (N.return = H), N;
                    case Z:
                        return (N = ca(N)), nt(H, N, X);
                }
                if (yt(N) || rt(N)) return (N = ia(N, H.mode, X, null)), (N.return = H), N;
                if (typeof N.then == "function") return nt(H, ks(N), X);
                if (N.$$typeof === x) return nt(H, Bs(H, N), X);
                js(H, N);
            }
            return null;
        }
        function K(H, N, X, et) {
            var gt = N !== null ? N.key : null;
            if ((typeof X == "string" && X !== "") || typeof X == "number" || typeof X == "bigint")
                return gt !== null ? null : v(H, N, "" + X, et);
            if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                    case O:
                        return X.key === gt ? A(H, N, X, et) : null;
                    case k:
                        return X.key === gt ? Q(H, N, X, et) : null;
                    case Z:
                        return (X = ca(X)), K(H, N, X, et);
                }
                if (yt(X) || rt(X)) return gt !== null ? null : J(H, N, X, et, null);
                if (typeof X.then == "function") return K(H, N, ks(X), et);
                if (X.$$typeof === x) return K(H, N, Bs(H, X), et);
                js(H, X);
            }
            return null;
        }
        function F(H, N, X, et, gt) {
            if ((typeof et == "string" && et !== "") || typeof et == "number" || typeof et == "bigint")
                return (H = H.get(X) || null), v(N, H, "" + et, gt);
            if (typeof et == "object" && et !== null) {
                switch (et.$$typeof) {
                    case O:
                        return (H = H.get(et.key === null ? X : et.key) || null), A(N, H, et, gt);
                    case k:
                        return (H = H.get(et.key === null ? X : et.key) || null), Q(N, H, et, gt);
                    case Z:
                        return (et = ca(et)), F(H, N, X, et, gt);
                }
                if (yt(et) || rt(et)) return (H = H.get(X) || null), J(N, H, et, gt, null);
                if (typeof et.then == "function") return F(H, N, X, ks(et), gt);
                if (et.$$typeof === x) return F(H, N, X, Bs(N, et), gt);
                js(N, et);
            }
            return null;
        }
        function dt(H, N, X, et) {
            for (var gt = null, jt = null, pt = N, Ot = (N = 0), Bt = null; pt !== null && Ot < X.length; Ot++) {
                pt.index > Ot ? ((Bt = pt), (pt = null)) : (Bt = pt.sibling);
                var Yt = K(H, pt, X[Ot], et);
                if (Yt === null) {
                    pt === null && (pt = Bt);
                    break;
                }
                t && pt && Yt.alternate === null && e(H, pt),
                    (N = c(Yt, N, Ot)),
                    jt === null ? (gt = Yt) : (jt.sibling = Yt),
                    (jt = Yt),
                    (pt = Bt);
            }
            if (Ot === X.length) return a(H, pt), Ut && kn(H, Ot), gt;
            if (pt === null) {
                for (; Ot < X.length; Ot++)
                    (pt = nt(H, X[Ot], et)),
                        pt !== null && ((N = c(pt, N, Ot)), jt === null ? (gt = pt) : (jt.sibling = pt), (jt = pt));
                return Ut && kn(H, Ot), gt;
            }
            for (pt = s(pt); Ot < X.length; Ot++)
                (Bt = F(pt, H, Ot, X[Ot], et)),
                    Bt !== null &&
                        (t && Bt.alternate !== null && pt.delete(Bt.key === null ? Ot : Bt.key),
                        (N = c(Bt, N, Ot)),
                        jt === null ? (gt = Bt) : (jt.sibling = Bt),
                        (jt = Bt));
            return (
                t &&
                    pt.forEach(function (Lr) {
                        return e(H, Lr);
                    }),
                Ut && kn(H, Ot),
                gt
            );
        }
        function vt(H, N, X, et) {
            if (X == null) throw Error(o(151));
            for (
                var gt = null, jt = null, pt = N, Ot = (N = 0), Bt = null, Yt = X.next();
                pt !== null && !Yt.done;
                Ot++, Yt = X.next()
            ) {
                pt.index > Ot ? ((Bt = pt), (pt = null)) : (Bt = pt.sibling);
                var Lr = K(H, pt, Yt.value, et);
                if (Lr === null) {
                    pt === null && (pt = Bt);
                    break;
                }
                t && pt && Lr.alternate === null && e(H, pt),
                    (N = c(Lr, N, Ot)),
                    jt === null ? (gt = Lr) : (jt.sibling = Lr),
                    (jt = Lr),
                    (pt = Bt);
            }
            if (Yt.done) return a(H, pt), Ut && kn(H, Ot), gt;
            if (pt === null) {
                for (; !Yt.done; Ot++, Yt = X.next())
                    (Yt = nt(H, Yt.value, et)),
                        Yt !== null && ((N = c(Yt, N, Ot)), jt === null ? (gt = Yt) : (jt.sibling = Yt), (jt = Yt));
                return Ut && kn(H, Ot), gt;
            }
            for (pt = s(pt); !Yt.done; Ot++, Yt = X.next())
                (Yt = F(pt, H, Ot, Yt.value, et)),
                    Yt !== null &&
                        (t && Yt.alternate !== null && pt.delete(Yt.key === null ? Ot : Yt.key),
                        (N = c(Yt, N, Ot)),
                        jt === null ? (gt = Yt) : (jt.sibling = Yt),
                        (jt = Yt));
            return (
                t &&
                    pt.forEach(function (mS) {
                        return e(H, mS);
                    }),
                Ut && kn(H, Ot),
                gt
            );
        }
        function Ft(H, N, X, et) {
            if (
                (typeof X == "object" && X !== null && X.type === Y && X.key === null && (X = X.props.children),
                typeof X == "object" && X !== null)
            ) {
                switch (X.$$typeof) {
                    case O:
                        t: {
                            for (var gt = X.key; N !== null; ) {
                                if (N.key === gt) {
                                    if (((gt = X.type), gt === Y)) {
                                        if (N.tag === 7) {
                                            a(H, N.sibling), (et = l(N, X.props.children)), (et.return = H), (H = et);
                                            break t;
                                        }
                                    } else if (
                                        N.elementType === gt ||
                                        (typeof gt == "object" && gt !== null && gt.$$typeof === Z && ca(gt) === N.type)
                                    ) {
                                        a(H, N.sibling), (et = l(N, X.props)), ro(et, X), (et.return = H), (H = et);
                                        break t;
                                    }
                                    a(H, N);
                                    break;
                                } else e(H, N);
                                N = N.sibling;
                            }
                            X.type === Y
                                ? ((et = ia(X.props.children, H.mode, et, X.key)), (et.return = H), (H = et))
                                : ((et = Rs(X.type, X.key, X.props, null, H.mode, et)),
                                  ro(et, X),
                                  (et.return = H),
                                  (H = et));
                        }
                        return h(H);
                    case k:
                        t: {
                            for (gt = X.key; N !== null; ) {
                                if (N.key === gt)
                                    if (
                                        N.tag === 4 &&
                                        N.stateNode.containerInfo === X.containerInfo &&
                                        N.stateNode.implementation === X.implementation
                                    ) {
                                        a(H, N.sibling), (et = l(N, X.children || [])), (et.return = H), (H = et);
                                        break t;
                                    } else {
                                        a(H, N);
                                        break;
                                    }
                                else e(H, N);
                                N = N.sibling;
                            }
                            (et = hc(X, H.mode, et)), (et.return = H), (H = et);
                        }
                        return h(H);
                    case Z:
                        return (X = ca(X)), Ft(H, N, X, et);
                }
                if (yt(X)) return dt(H, N, X, et);
                if (rt(X)) {
                    if (((gt = rt(X)), typeof gt != "function")) throw Error(o(150));
                    return (X = gt.call(X)), vt(H, N, X, et);
                }
                if (typeof X.then == "function") return Ft(H, N, ks(X), et);
                if (X.$$typeof === x) return Ft(H, N, Bs(H, X), et);
                js(H, X);
            }
            return (typeof X == "string" && X !== "") || typeof X == "number" || typeof X == "bigint"
                ? ((X = "" + X),
                  N !== null && N.tag === 6
                      ? (a(H, N.sibling), (et = l(N, X)), (et.return = H), (H = et))
                      : (a(H, N), (et = dc(X, H.mode, et)), (et.return = H), (H = et)),
                  h(H))
                : a(H, N);
        }
        return function (H, N, X, et) {
            try {
                no = 0;
                var gt = Ft(H, N, X, et);
                return (Ja = null), gt;
            } catch (pt) {
                if (pt === $a || pt === Ls) throw pt;
                var jt = We(29, pt, null, H.mode);
                return (jt.lanes = et), (jt.return = H), jt;
            }
        };
    }
    var da = Hm(!0),
        km = Hm(!1),
        _r = !1;
    function wc(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Oc(t, e) {
        (t = t.updateQueue),
            e.updateQueue === t &&
                (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    callbacks: null,
                });
    }
    function br(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Sr(t, e, a) {
        var s = t.updateQueue;
        if (s === null) return null;
        if (((s = s.shared), (qt & 2) !== 0)) {
            var l = s.pending;
            return (
                l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
                (s.pending = e),
                (e = Cs(t)),
                Sm(t, null, a),
                e
            );
        }
        return Ms(t, s, e, a), Cs(t);
    }
    function ao(t, e, a) {
        if (((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))) {
            var s = e.lanes;
            (s &= t.pendingLanes), (a |= s), (e.lanes = a), ms(t, a);
        }
    }
    function Dc(t, e) {
        var a = t.updateQueue,
            s = t.alternate;
        if (s !== null && ((s = s.updateQueue), a === s)) {
            var l = null,
                c = null;
            if (((a = a.firstBaseUpdate), a !== null)) {
                do {
                    var h = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
                    c === null ? (l = c = h) : (c = c.next = h), (a = a.next);
                } while (a !== null);
                c === null ? (l = c = e) : (c = c.next = e);
            } else l = c = e;
            (a = {
                baseState: s.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: c,
                shared: s.shared,
                callbacks: s.callbacks,
            }),
                (t.updateQueue = a);
            return;
        }
        (t = a.lastBaseUpdate), t === null ? (a.firstBaseUpdate = e) : (t.next = e), (a.lastBaseUpdate = e);
    }
    var Ac = !1;
    function io() {
        if (Ac) {
            var t = Fa;
            if (t !== null) throw t;
        }
    }
    function oo(t, e, a, s) {
        Ac = !1;
        var l = t.updateQueue;
        _r = !1;
        var c = l.firstBaseUpdate,
            h = l.lastBaseUpdate,
            v = l.shared.pending;
        if (v !== null) {
            l.shared.pending = null;
            var A = v,
                Q = A.next;
            (A.next = null), h === null ? (c = Q) : (h.next = Q), (h = A);
            var J = t.alternate;
            J !== null &&
                ((J = J.updateQueue),
                (v = J.lastBaseUpdate),
                v !== h && (v === null ? (J.firstBaseUpdate = Q) : (v.next = Q), (J.lastBaseUpdate = A)));
        }
        if (c !== null) {
            var nt = l.baseState;
            (h = 0), (J = Q = A = null), (v = c);
            do {
                var K = v.lane & -536870913,
                    F = K !== v.lane;
                if (F ? (zt & K) === K : (s & K) === K) {
                    K !== 0 && K === Wa && (Ac = !0),
                        J !== null &&
                            (J = J.next = { lane: 0, tag: v.tag, payload: v.payload, callback: null, next: null });
                    t: {
                        var dt = t,
                            vt = v;
                        K = e;
                        var Ft = a;
                        switch (vt.tag) {
                            case 1:
                                if (((dt = vt.payload), typeof dt == "function")) {
                                    nt = dt.call(Ft, nt, K);
                                    break t;
                                }
                                nt = dt;
                                break t;
                            case 3:
                                dt.flags = (dt.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((dt = vt.payload),
                                    (K = typeof dt == "function" ? dt.call(Ft, nt, K) : dt),
                                    K == null)
                                )
                                    break t;
                                nt = g({}, nt, K);
                                break t;
                            case 2:
                                _r = !0;
                        }
                    }
                    (K = v.callback),
                        K !== null &&
                            ((t.flags |= 64),
                            F && (t.flags |= 8192),
                            (F = l.callbacks),
                            F === null ? (l.callbacks = [K]) : F.push(K));
                } else
                    (F = { lane: K, tag: v.tag, payload: v.payload, callback: v.callback, next: null }),
                        J === null ? ((Q = J = F), (A = nt)) : (J = J.next = F),
                        (h |= K);
                if (((v = v.next), v === null)) {
                    if (((v = l.shared.pending), v === null)) break;
                    (F = v), (v = F.next), (F.next = null), (l.lastBaseUpdate = F), (l.shared.pending = null);
                }
            } while (!0);
            J === null && (A = nt),
                (l.baseState = A),
                (l.firstBaseUpdate = Q),
                (l.lastBaseUpdate = J),
                c === null && (l.shared.lanes = 0),
                (Or |= h),
                (t.lanes = h),
                (t.memoizedState = nt);
        }
    }
    function jm(t, e) {
        if (typeof t != "function") throw Error(o(191, t));
        t.call(e);
    }
    function Ym(t, e) {
        var a = t.callbacks;
        if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) jm(a[t], e);
    }
    var ti = E(null),
        Ys = E(0);
    function qm(t, e) {
        (t = Zn), P(Ys, t), P(ti, e), (Zn = t | e.baseLanes);
    }
    function Mc() {
        P(Ys, Zn), P(ti, ti.current);
    }
    function Cc() {
        (Zn = Ys.current), z(ti), z(Ys);
    }
    var Fe = E(null),
        hn = null;
    function Er(t) {
        var e = t.alternate;
        P(de, de.current & 1),
            P(Fe, t),
            hn === null && (e === null || ti.current !== null || e.memoizedState !== null) && (hn = t);
    }
    function Rc(t) {
        P(de, de.current), P(Fe, t), hn === null && (hn = t);
    }
    function Gm(t) {
        t.tag === 22 ? (P(de, de.current), P(Fe, t), hn === null && (hn = t)) : Tr();
    }
    function Tr() {
        P(de, de.current), P(Fe, Fe.current);
    }
    function $e(t) {
        z(Fe), hn === t && (hn = null), z(de);
    }
    var de = E(0);
    function qs(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && ((a = a.dehydrated), a === null || kf(a) || jf(a))) return e;
            } else if (
                e.tag === 19 &&
                (e.memoizedProps.revealOrder === "forwards" ||
                    e.memoizedProps.revealOrder === "backwards" ||
                    e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
                    e.memoizedProps.revealOrder === "together")
            ) {
                if ((e.flags & 128) !== 0) return e;
            } else if (e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
            }
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return null;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
        return null;
    }
    var qn = 0,
        xt = null,
        Zt = null,
        ve = null,
        Gs = !1,
        ei = !1,
        ha = !1,
        Is = 0,
        so = 0,
        ni = null,
        a1 = 0;
    function oe() {
        throw Error(o(321));
    }
    function Nc(t, e) {
        if (e === null) return !1;
        for (var a = 0; a < e.length && a < t.length; a++) if (!Ze(t[a], e[a])) return !1;
        return !0;
    }
    function zc(t, e, a, s, l, c) {
        return (
            (qn = c),
            (xt = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (V.H = t === null || t.memoizedState === null ? wp : Kc),
            (ha = !1),
            (c = a(s, l)),
            (ha = !1),
            ei && (c = Xm(e, a, s, l)),
            Im(t),
            c
        );
    }
    function Im(t) {
        V.H = co;
        var e = Zt !== null && Zt.next !== null;
        if (((qn = 0), (ve = Zt = xt = null), (Gs = !1), (so = 0), (ni = null), e)) throw Error(o(300));
        t === null || _e || ((t = t.dependencies), t !== null && zs(t) && (_e = !0));
    }
    function Xm(t, e, a, s) {
        xt = t;
        var l = 0;
        do {
            if ((ei && (ni = null), (so = 0), (ei = !1), 25 <= l)) throw Error(o(301));
            if (((l += 1), (ve = Zt = null), t.updateQueue != null)) {
                var c = t.updateQueue;
                (c.lastEffect = null),
                    (c.events = null),
                    (c.stores = null),
                    c.memoCache != null && (c.memoCache.index = 0);
            }
            (V.H = Op), (c = e(a, s));
        } while (ei);
        return c;
    }
    function i1() {
        var t = V.H,
            e = t.useState()[0];
        return (
            (e = typeof e.then == "function" ? uo(e) : e),
            (t = t.useState()[0]),
            (Zt !== null ? Zt.memoizedState : null) !== t && (xt.flags |= 1024),
            e
        );
    }
    function Bc() {
        var t = Is !== 0;
        return (Is = 0), t;
    }
    function Uc(t, e, a) {
        (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a);
    }
    function Lc(t) {
        if (Gs) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null), (t = t.next);
            }
            Gs = !1;
        }
        (qn = 0), (ve = Zt = xt = null), (ei = !1), (so = Is = 0), (ni = null);
    }
    function He() {
        var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return ve === null ? (xt.memoizedState = ve = t) : (ve = ve.next = t), ve;
    }
    function he() {
        if (Zt === null) {
            var t = xt.alternate;
            t = t !== null ? t.memoizedState : null;
        } else t = Zt.next;
        var e = ve === null ? xt.memoizedState : ve.next;
        if (e !== null) (ve = e), (Zt = t);
        else {
            if (t === null) throw xt.alternate === null ? Error(o(467)) : Error(o(310));
            (Zt = t),
                (t = {
                    memoizedState: Zt.memoizedState,
                    baseState: Zt.baseState,
                    baseQueue: Zt.baseQueue,
                    queue: Zt.queue,
                    next: null,
                }),
                ve === null ? (xt.memoizedState = ve = t) : (ve = ve.next = t);
        }
        return ve;
    }
    function Xs() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function uo(t) {
        var e = so;
        return (
            (so += 1),
            ni === null && (ni = []),
            (t = Bm(ni, t, e)),
            (e = xt),
            (ve === null ? e.memoizedState : ve.next) === null &&
                ((e = e.alternate), (V.H = e === null || e.memoizedState === null ? wp : Kc)),
            t
        );
    }
    function Qs(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return uo(t);
            if (t.$$typeof === x) return De(t);
        }
        throw Error(o(438, String(t)));
    }
    function Hc(t) {
        var e = null,
            a = xt.updateQueue;
        if ((a !== null && (e = a.memoCache), e == null)) {
            var s = xt.alternate;
            s !== null &&
                ((s = s.updateQueue),
                s !== null &&
                    ((s = s.memoCache),
                    s != null &&
                        (e = {
                            data: s.data.map(function (l) {
                                return l.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (e == null && (e = { data: [], index: 0 }),
            a === null && ((a = Xs()), (xt.updateQueue = a)),
            (a.memoCache = e),
            (a = e.data[e.index]),
            a === void 0)
        )
            for (a = e.data[e.index] = Array(t), s = 0; s < t; s++) a[s] = I;
        return e.index++, a;
    }
    function Gn(t, e) {
        return typeof e == "function" ? e(t) : e;
    }
    function Vs(t) {
        var e = he();
        return kc(e, Zt, t);
    }
    function kc(t, e, a) {
        var s = t.queue;
        if (s === null) throw Error(o(311));
        s.lastRenderedReducer = a;
        var l = t.baseQueue,
            c = s.pending;
        if (c !== null) {
            if (l !== null) {
                var h = l.next;
                (l.next = c.next), (c.next = h);
            }
            (e.baseQueue = l = c), (s.pending = null);
        }
        if (((c = t.baseState), l === null)) t.memoizedState = c;
        else {
            e = l.next;
            var v = (h = null),
                A = null,
                Q = e,
                J = !1;
            do {
                var nt = Q.lane & -536870913;
                if (nt !== Q.lane ? (zt & nt) === nt : (qn & nt) === nt) {
                    var K = Q.revertLane;
                    if (K === 0)
                        A !== null &&
                            (A = A.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: Q.action,
                                    hasEagerState: Q.hasEagerState,
                                    eagerState: Q.eagerState,
                                    next: null,
                                }),
                            nt === Wa && (J = !0);
                    else if ((qn & K) === K) {
                        (Q = Q.next), K === Wa && (J = !0);
                        continue;
                    } else
                        (nt = {
                            lane: 0,
                            revertLane: Q.revertLane,
                            gesture: null,
                            action: Q.action,
                            hasEagerState: Q.hasEagerState,
                            eagerState: Q.eagerState,
                            next: null,
                        }),
                            A === null ? ((v = A = nt), (h = c)) : (A = A.next = nt),
                            (xt.lanes |= K),
                            (Or |= K);
                    (nt = Q.action), ha && a(c, nt), (c = Q.hasEagerState ? Q.eagerState : a(c, nt));
                } else
                    (K = {
                        lane: nt,
                        revertLane: Q.revertLane,
                        gesture: Q.gesture,
                        action: Q.action,
                        hasEagerState: Q.hasEagerState,
                        eagerState: Q.eagerState,
                        next: null,
                    }),
                        A === null ? ((v = A = K), (h = c)) : (A = A.next = K),
                        (xt.lanes |= nt),
                        (Or |= nt);
                Q = Q.next;
            } while (Q !== null && Q !== e);
            if (
                (A === null ? (h = c) : (A.next = v),
                !Ze(c, t.memoizedState) && ((_e = !0), J && ((a = Fa), a !== null)))
            )
                throw a;
            (t.memoizedState = c), (t.baseState = h), (t.baseQueue = A), (s.lastRenderedState = c);
        }
        return l === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
    }
    function jc(t) {
        var e = he(),
            a = e.queue;
        if (a === null) throw Error(o(311));
        a.lastRenderedReducer = t;
        var s = a.dispatch,
            l = a.pending,
            c = e.memoizedState;
        if (l !== null) {
            a.pending = null;
            var h = (l = l.next);
            do (c = t(c, h.action)), (h = h.next);
            while (h !== l);
            Ze(c, e.memoizedState) || (_e = !0),
                (e.memoizedState = c),
                e.baseQueue === null && (e.baseState = c),
                (a.lastRenderedState = c);
        }
        return [c, s];
    }
    function Qm(t, e, a) {
        var s = xt,
            l = he(),
            c = Ut;
        if (c) {
            if (a === void 0) throw Error(o(407));
            a = a();
        } else a = e();
        var h = !Ze((Zt || l).memoizedState, a);
        if (
            (h && ((l.memoizedState = a), (_e = !0)),
            (l = l.queue),
            Gc(Km.bind(null, s, l, t), [t]),
            l.getSnapshot !== e || h || (ve !== null && ve.memoizedState.tag & 1))
        ) {
            if (((s.flags |= 2048), ri(9, { destroy: void 0 }, Pm.bind(null, s, l, a, e), null), Jt === null))
                throw Error(o(349));
            c || (qn & 127) !== 0 || Vm(s, e, a);
        }
        return a;
    }
    function Vm(t, e, a) {
        (t.flags |= 16384),
            (t = { getSnapshot: e, value: a }),
            (e = xt.updateQueue),
            e === null
                ? ((e = Xs()), (xt.updateQueue = e), (e.stores = [t]))
                : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t));
    }
    function Pm(t, e, a, s) {
        (e.value = a), (e.getSnapshot = s), Zm(e) && Wm(t);
    }
    function Km(t, e, a) {
        return a(function () {
            Zm(e) && Wm(t);
        });
    }
    function Zm(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !Ze(t, a);
        } catch {
            return !0;
        }
    }
    function Wm(t) {
        var e = aa(t, 2);
        e !== null && Pe(e, t, 2);
    }
    function Yc(t) {
        var e = He();
        if (typeof t == "function") {
            var a = t;
            if (((t = a()), ha)) {
                xn(!0);
                try {
                    a();
                } finally {
                    xn(!1);
                }
            }
        }
        return (
            (e.memoizedState = e.baseState = t),
            (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Gn, lastRenderedState: t }),
            e
        );
    }
    function Fm(t, e, a, s) {
        return (t.baseState = a), kc(t, Zt, typeof s == "function" ? s : Gn);
    }
    function o1(t, e, a, s, l) {
        if (Zs(t)) throw Error(o(485));
        if (((t = e.action), t !== null)) {
            var c = {
                payload: l,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (h) {
                    c.listeners.push(h);
                },
            };
            V.T !== null ? a(!0) : (c.isTransition = !1),
                s(c),
                (a = e.pending),
                a === null ? ((c.next = e.pending = c), $m(e, c)) : ((c.next = a.next), (e.pending = a.next = c));
        }
    }
    function $m(t, e) {
        var a = e.action,
            s = e.payload,
            l = t.state;
        if (e.isTransition) {
            var c = V.T,
                h = {};
            V.T = h;
            try {
                var v = a(l, s),
                    A = V.S;
                A !== null && A(h, v), Jm(t, e, v);
            } catch (Q) {
                qc(t, e, Q);
            } finally {
                c !== null && h.types !== null && (c.types = h.types), (V.T = c);
            }
        } else
            try {
                (c = a(l, s)), Jm(t, e, c);
            } catch (Q) {
                qc(t, e, Q);
            }
    }
    function Jm(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function"
            ? a.then(
                  function (s) {
                      tp(t, e, s);
                  },
                  function (s) {
                      return qc(t, e, s);
                  }
              )
            : tp(t, e, a);
    }
    function tp(t, e, a) {
        (e.status = "fulfilled"),
            (e.value = a),
            ep(e),
            (t.state = a),
            (e = t.pending),
            e !== null && ((a = e.next), a === e ? (t.pending = null) : ((a = a.next), (e.next = a), $m(t, a)));
    }
    function qc(t, e, a) {
        var s = t.pending;
        if (((t.pending = null), s !== null)) {
            s = s.next;
            do (e.status = "rejected"), (e.reason = a), ep(e), (e = e.next);
            while (e !== s);
        }
        t.action = null;
    }
    function ep(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function np(t, e) {
        return e;
    }
    function rp(t, e) {
        if (Ut) {
            var a = Jt.formState;
            if (a !== null) {
                t: {
                    var s = xt;
                    if (Ut) {
                        if (te) {
                            e: {
                                for (var l = te, c = dn; l.nodeType !== 8; ) {
                                    if (!c) {
                                        l = null;
                                        break e;
                                    }
                                    if (((l = mn(l.nextSibling)), l === null)) {
                                        l = null;
                                        break e;
                                    }
                                }
                                (c = l.data), (l = c === "F!" || c === "F" ? l : null);
                            }
                            if (l) {
                                (te = mn(l.nextSibling)), (s = l.data === "F!");
                                break t;
                            }
                        }
                        gr(s);
                    }
                    s = !1;
                }
                s && (e = a[0]);
            }
        }
        return (
            (a = He()),
            (a.memoizedState = a.baseState = e),
            (s = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: np, lastRenderedState: e }),
            (a.queue = s),
            (a = Ep.bind(null, xt, s)),
            (s.dispatch = a),
            (s = Yc(!1)),
            (c = Pc.bind(null, xt, !1, s.queue)),
            (s = He()),
            (l = { state: e, dispatch: null, action: t, pending: null }),
            (s.queue = l),
            (a = o1.bind(null, xt, l, c, a)),
            (l.dispatch = a),
            (s.memoizedState = t),
            [e, a, !1]
        );
    }
    function ap(t) {
        var e = he();
        return ip(e, Zt, t);
    }
    function ip(t, e, a) {
        if (((e = kc(t, e, np)[0]), (t = Vs(Gn)[0]), typeof e == "object" && e !== null && typeof e.then == "function"))
            try {
                var s = uo(e);
            } catch (h) {
                throw h === $a ? Ls : h;
            }
        else s = e;
        e = he();
        var l = e.queue,
            c = l.dispatch;
        return (
            a !== e.memoizedState && ((xt.flags |= 2048), ri(9, { destroy: void 0 }, s1.bind(null, l, a), null)),
            [s, c, t]
        );
    }
    function s1(t, e) {
        t.action = e;
    }
    function op(t) {
        var e = he(),
            a = Zt;
        if (a !== null) return ip(e, a, t);
        he(), (e = e.memoizedState), (a = he());
        var s = a.queue.dispatch;
        return (a.memoizedState = t), [e, s, !1];
    }
    function ri(t, e, a, s) {
        return (
            (t = { tag: t, create: a, deps: s, inst: e, next: null }),
            (e = xt.updateQueue),
            e === null && ((e = Xs()), (xt.updateQueue = e)),
            (a = e.lastEffect),
            a === null ? (e.lastEffect = t.next = t) : ((s = a.next), (a.next = t), (t.next = s), (e.lastEffect = t)),
            t
        );
    }
    function sp() {
        return he().memoizedState;
    }
    function Ps(t, e, a, s) {
        var l = He();
        (xt.flags |= t), (l.memoizedState = ri(1 | e, { destroy: void 0 }, a, s === void 0 ? null : s));
    }
    function Ks(t, e, a, s) {
        var l = he();
        s = s === void 0 ? null : s;
        var c = l.memoizedState.inst;
        Zt !== null && s !== null && Nc(s, Zt.memoizedState.deps)
            ? (l.memoizedState = ri(e, c, a, s))
            : ((xt.flags |= t), (l.memoizedState = ri(1 | e, c, a, s)));
    }
    function up(t, e) {
        Ps(8390656, 8, t, e);
    }
    function Gc(t, e) {
        Ks(2048, 8, t, e);
    }
    function u1(t) {
        xt.flags |= 4;
        var e = xt.updateQueue;
        if (e === null) (e = Xs()), (xt.updateQueue = e), (e.events = [t]);
        else {
            var a = e.events;
            a === null ? (e.events = [t]) : a.push(t);
        }
    }
    function lp(t) {
        var e = he().memoizedState;
        return (
            u1({ ref: e, nextImpl: t }),
            function () {
                if ((qt & 2) !== 0) throw Error(o(440));
                return e.impl.apply(void 0, arguments);
            }
        );
    }
    function cp(t, e) {
        return Ks(4, 2, t, e);
    }
    function fp(t, e) {
        return Ks(4, 4, t, e);
    }
    function dp(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function () {
                typeof a == "function" ? a() : e(null);
            };
        }
        if (e != null)
            return (
                (t = t()),
                (e.current = t),
                function () {
                    e.current = null;
                }
            );
    }
    function hp(t, e, a) {
        (a = a != null ? a.concat([t]) : null), Ks(4, 4, dp.bind(null, e, t), a);
    }
    function Ic() {}
    function mp(t, e) {
        var a = he();
        e = e === void 0 ? null : e;
        var s = a.memoizedState;
        return e !== null && Nc(e, s[1]) ? s[0] : ((a.memoizedState = [t, e]), t);
    }
    function pp(t, e) {
        var a = he();
        e = e === void 0 ? null : e;
        var s = a.memoizedState;
        if (e !== null && Nc(e, s[1])) return s[0];
        if (((s = t()), ha)) {
            xn(!0);
            try {
                t();
            } finally {
                xn(!1);
            }
        }
        return (a.memoizedState = [s, e]), s;
    }
    function Xc(t, e, a) {
        return a === void 0 || ((qn & 1073741824) !== 0 && (zt & 261930) === 0)
            ? (t.memoizedState = e)
            : ((t.memoizedState = a), (t = yy()), (xt.lanes |= t), (Or |= t), a);
    }
    function yp(t, e, a, s) {
        return Ze(a, e)
            ? a
            : ti.current !== null
              ? ((t = Xc(t, a, s)), Ze(t, e) || (_e = !0), t)
              : (qn & 42) === 0 || ((qn & 1073741824) !== 0 && (zt & 261930) === 0)
                ? ((_e = !0), (t.memoizedState = a))
                : ((t = yy()), (xt.lanes |= t), (Or |= t), e);
    }
    function gp(t, e, a, s, l) {
        var c = st.p;
        st.p = c !== 0 && 8 > c ? c : 8;
        var h = V.T,
            v = {};
        (V.T = v), Pc(t, !1, e, a);
        try {
            var A = l(),
                Q = V.S;
            if ((Q !== null && Q(v, A), A !== null && typeof A == "object" && typeof A.then == "function")) {
                var J = r1(A, s);
                lo(t, e, J, en(t));
            } else lo(t, e, s, en(t));
        } catch (nt) {
            lo(t, e, { then: function () {}, status: "rejected", reason: nt }, en());
        } finally {
            (st.p = c), h !== null && v.types !== null && (h.types = v.types), (V.T = h);
        }
    }
    function l1() {}
    function Qc(t, e, a, s) {
        if (t.tag !== 5) throw Error(o(476));
        var l = vp(t).queue;
        gp(
            t,
            l,
            e,
            ft,
            a === null
                ? l1
                : function () {
                      return _p(t), a(s);
                  }
        );
    }
    function vp(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: ft,
            baseState: ft,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Gn, lastRenderedState: ft },
            next: null,
        };
        var a = {};
        return (
            (e.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Gn, lastRenderedState: a },
                next: null,
            }),
            (t.memoizedState = e),
            (t = t.alternate),
            t !== null && (t.memoizedState = e),
            e
        );
    }
    function _p(t) {
        var e = vp(t);
        e.next === null && (e = t.alternate.memoizedState), lo(t, e.next.queue, {}, en());
    }
    function Vc() {
        return De(Do);
    }
    function bp() {
        return he().memoizedState;
    }
    function Sp() {
        return he().memoizedState;
    }
    function c1(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
                case 24:
                case 3:
                    var a = en();
                    t = br(a);
                    var s = Sr(e, t, a);
                    s !== null && (Pe(s, e, a), ao(s, e, a)), (e = { cache: Sc() }), (t.payload = e);
                    return;
            }
            e = e.return;
        }
    }
    function f1(t, e, a) {
        var s = en();
        (a = { lane: s, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }),
            Zs(t) ? Tp(e, a) : ((a = cc(t, e, a, s)), a !== null && (Pe(a, t, s), xp(a, e, s)));
    }
    function Ep(t, e, a) {
        var s = en();
        lo(t, e, a, s);
    }
    function lo(t, e, a, s) {
        var l = { lane: s, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null };
        if (Zs(t)) Tp(e, l);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && ((c = e.lastRenderedReducer), c !== null))
                try {
                    var h = e.lastRenderedState,
                        v = c(h, a);
                    if (((l.hasEagerState = !0), (l.eagerState = v), Ze(v, h)))
                        return Ms(t, e, l, 0), Jt === null && As(), !1;
                } catch {}
            if (((a = cc(t, e, l, s)), a !== null)) return Pe(a, t, s), xp(a, e, s), !0;
        }
        return !1;
    }
    function Pc(t, e, a, s) {
        if (
            ((s = {
                lane: 2,
                revertLane: Of(),
                gesture: null,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Zs(t))
        ) {
            if (e) throw Error(o(479));
        } else (e = cc(t, a, s, 2)), e !== null && Pe(e, t, 2);
    }
    function Zs(t) {
        var e = t.alternate;
        return t === xt || (e !== null && e === xt);
    }
    function Tp(t, e) {
        ei = Gs = !0;
        var a = t.pending;
        a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)), (t.pending = e);
    }
    function xp(t, e, a) {
        if ((a & 4194048) !== 0) {
            var s = e.lanes;
            (s &= t.pendingLanes), (a |= s), (e.lanes = a), ms(t, a);
        }
    }
    var co = {
        readContext: De,
        use: Qs,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useLayoutEffect: oe,
        useInsertionEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useSyncExternalStore: oe,
        useId: oe,
        useHostTransitionStatus: oe,
        useFormState: oe,
        useActionState: oe,
        useOptimistic: oe,
        useMemoCache: oe,
        useCacheRefresh: oe,
    };
    co.useEffectEvent = oe;
    var wp = {
            readContext: De,
            use: Qs,
            useCallback: function (t, e) {
                return (He().memoizedState = [t, e === void 0 ? null : e]), t;
            },
            useContext: De,
            useEffect: up,
            useImperativeHandle: function (t, e, a) {
                (a = a != null ? a.concat([t]) : null), Ps(4194308, 4, dp.bind(null, e, t), a);
            },
            useLayoutEffect: function (t, e) {
                return Ps(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
                Ps(4, 2, t, e);
            },
            useMemo: function (t, e) {
                var a = He();
                e = e === void 0 ? null : e;
                var s = t();
                if (ha) {
                    xn(!0);
                    try {
                        t();
                    } finally {
                        xn(!1);
                    }
                }
                return (a.memoizedState = [s, e]), s;
            },
            useReducer: function (t, e, a) {
                var s = He();
                if (a !== void 0) {
                    var l = a(e);
                    if (ha) {
                        xn(!0);
                        try {
                            a(e);
                        } finally {
                            xn(!1);
                        }
                    }
                } else l = e;
                return (
                    (s.memoizedState = s.baseState = l),
                    (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: l }),
                    (s.queue = t),
                    (t = t.dispatch = f1.bind(null, xt, t)),
                    [s.memoizedState, t]
                );
            },
            useRef: function (t) {
                var e = He();
                return (t = { current: t }), (e.memoizedState = t);
            },
            useState: function (t) {
                t = Yc(t);
                var e = t.queue,
                    a = Ep.bind(null, xt, e);
                return (e.dispatch = a), [t.memoizedState, a];
            },
            useDebugValue: Ic,
            useDeferredValue: function (t, e) {
                var a = He();
                return Xc(a, t, e);
            },
            useTransition: function () {
                var t = Yc(!1);
                return (t = gp.bind(null, xt, t.queue, !0, !1)), (He().memoizedState = t), [!1, t];
            },
            useSyncExternalStore: function (t, e, a) {
                var s = xt,
                    l = He();
                if (Ut) {
                    if (a === void 0) throw Error(o(407));
                    a = a();
                } else {
                    if (((a = e()), Jt === null)) throw Error(o(349));
                    (zt & 127) !== 0 || Vm(s, e, a);
                }
                l.memoizedState = a;
                var c = { value: a, getSnapshot: e };
                return (
                    (l.queue = c),
                    up(Km.bind(null, s, c, t), [t]),
                    (s.flags |= 2048),
                    ri(9, { destroy: void 0 }, Pm.bind(null, s, c, a, e), null),
                    a
                );
            },
            useId: function () {
                var t = He(),
                    e = Jt.identifierPrefix;
                if (Ut) {
                    var a = Mn,
                        s = An;
                    (a = (s & ~(1 << (32 - Le(s) - 1))).toString(32) + a),
                        (e = "_" + e + "R_" + a),
                        (a = Is++),
                        0 < a && (e += "H" + a.toString(32)),
                        (e += "_");
                } else (a = a1++), (e = "_" + e + "r_" + a.toString(32) + "_");
                return (t.memoizedState = e);
            },
            useHostTransitionStatus: Vc,
            useFormState: rp,
            useActionState: rp,
            useOptimistic: function (t) {
                var e = He();
                e.memoizedState = e.baseState = t;
                var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return (e.queue = a), (e = Pc.bind(null, xt, !0, a)), (a.dispatch = e), [t, e];
            },
            useMemoCache: Hc,
            useCacheRefresh: function () {
                return (He().memoizedState = c1.bind(null, xt));
            },
            useEffectEvent: function (t) {
                var e = He(),
                    a = { impl: t };
                return (
                    (e.memoizedState = a),
                    function () {
                        if ((qt & 2) !== 0) throw Error(o(440));
                        return a.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        Kc = {
            readContext: De,
            use: Qs,
            useCallback: mp,
            useContext: De,
            useEffect: Gc,
            useImperativeHandle: hp,
            useInsertionEffect: cp,
            useLayoutEffect: fp,
            useMemo: pp,
            useReducer: Vs,
            useRef: sp,
            useState: function () {
                return Vs(Gn);
            },
            useDebugValue: Ic,
            useDeferredValue: function (t, e) {
                var a = he();
                return yp(a, Zt.memoizedState, t, e);
            },
            useTransition: function () {
                var t = Vs(Gn)[0],
                    e = he().memoizedState;
                return [typeof t == "boolean" ? t : uo(t), e];
            },
            useSyncExternalStore: Qm,
            useId: bp,
            useHostTransitionStatus: Vc,
            useFormState: ap,
            useActionState: ap,
            useOptimistic: function (t, e) {
                var a = he();
                return Fm(a, Zt, t, e);
            },
            useMemoCache: Hc,
            useCacheRefresh: Sp,
        };
    Kc.useEffectEvent = lp;
    var Op = {
        readContext: De,
        use: Qs,
        useCallback: mp,
        useContext: De,
        useEffect: Gc,
        useImperativeHandle: hp,
        useInsertionEffect: cp,
        useLayoutEffect: fp,
        useMemo: pp,
        useReducer: jc,
        useRef: sp,
        useState: function () {
            return jc(Gn);
        },
        useDebugValue: Ic,
        useDeferredValue: function (t, e) {
            var a = he();
            return Zt === null ? Xc(a, t, e) : yp(a, Zt.memoizedState, t, e);
        },
        useTransition: function () {
            var t = jc(Gn)[0],
                e = he().memoizedState;
            return [typeof t == "boolean" ? t : uo(t), e];
        },
        useSyncExternalStore: Qm,
        useId: bp,
        useHostTransitionStatus: Vc,
        useFormState: op,
        useActionState: op,
        useOptimistic: function (t, e) {
            var a = he();
            return Zt !== null ? Fm(a, Zt, t, e) : ((a.baseState = t), [t, a.queue.dispatch]);
        },
        useMemoCache: Hc,
        useCacheRefresh: Sp,
    };
    Op.useEffectEvent = lp;
    function Zc(t, e, a, s) {
        (e = t.memoizedState),
            (a = a(s, e)),
            (a = a == null ? e : g({}, e, a)),
            (t.memoizedState = a),
            t.lanes === 0 && (t.updateQueue.baseState = a);
    }
    var Wc = {
        enqueueSetState: function (t, e, a) {
            t = t._reactInternals;
            var s = en(),
                l = br(s);
            (l.payload = e), a != null && (l.callback = a), (e = Sr(t, l, s)), e !== null && (Pe(e, t, s), ao(e, t, s));
        },
        enqueueReplaceState: function (t, e, a) {
            t = t._reactInternals;
            var s = en(),
                l = br(s);
            (l.tag = 1),
                (l.payload = e),
                a != null && (l.callback = a),
                (e = Sr(t, l, s)),
                e !== null && (Pe(e, t, s), ao(e, t, s));
        },
        enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var a = en(),
                s = br(a);
            (s.tag = 2), e != null && (s.callback = e), (e = Sr(t, s, a)), e !== null && (Pe(e, t, a), ao(e, t, a));
        },
    };
    function Dp(t, e, a, s, l, c, h) {
        return (
            (t = t.stateNode),
            typeof t.shouldComponentUpdate == "function"
                ? t.shouldComponentUpdate(s, c, h)
                : e.prototype && e.prototype.isPureReactComponent
                  ? !Wi(a, s) || !Wi(l, c)
                  : !0
        );
    }
    function Ap(t, e, a, s) {
        (t = e.state),
            typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, s),
            typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, s),
            e.state !== t && Wc.enqueueReplaceState(e, e.state, null);
    }
    function ma(t, e) {
        var a = e;
        if ("ref" in e) {
            a = {};
            for (var s in e) s !== "ref" && (a[s] = e[s]);
        }
        if ((t = t.defaultProps)) {
            a === e && (a = g({}, a));
            for (var l in t) a[l] === void 0 && (a[l] = t[l]);
        }
        return a;
    }
    function Mp(t) {
        Ds(t);
    }
    function Cp(t) {
        console.error(t);
    }
    function Rp(t) {
        Ds(t);
    }
    function Ws(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, { componentStack: e.stack });
        } catch (s) {
            setTimeout(function () {
                throw s;
            });
        }
    }
    function Np(t, e, a) {
        try {
            var s = t.onCaughtError;
            s(a.value, { componentStack: a.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
        } catch (l) {
            setTimeout(function () {
                throw l;
            });
        }
    }
    function Fc(t, e, a) {
        return (
            (a = br(a)),
            (a.tag = 3),
            (a.payload = { element: null }),
            (a.callback = function () {
                Ws(t, e);
            }),
            a
        );
    }
    function zp(t) {
        return (t = br(t)), (t.tag = 3), t;
    }
    function Bp(t, e, a, s) {
        var l = a.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var c = s.value;
            (t.payload = function () {
                return l(c);
            }),
                (t.callback = function () {
                    Np(e, a, s);
                });
        }
        var h = a.stateNode;
        h !== null &&
            typeof h.componentDidCatch == "function" &&
            (t.callback = function () {
                Np(e, a, s), typeof l != "function" && (Dr === null ? (Dr = new Set([this])) : Dr.add(this));
                var v = s.stack;
                this.componentDidCatch(s.value, { componentStack: v !== null ? v : "" });
            });
    }
    function d1(t, e, a, s, l) {
        if (((a.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
            if (((e = a.alternate), e !== null && Za(e, a, l, !0), (a = Fe.current), a !== null)) {
                switch (a.tag) {
                    case 31:
                    case 13:
                        return (
                            hn === null ? uu() : a.alternate === null && se === 0 && (se = 3),
                            (a.flags &= -257),
                            (a.flags |= 65536),
                            (a.lanes = l),
                            s === Hs
                                ? (a.flags |= 16384)
                                : ((e = a.updateQueue),
                                  e === null ? (a.updateQueue = new Set([s])) : e.add(s),
                                  Tf(t, s, l)),
                            !1
                        );
                    case 22:
                        return (
                            (a.flags |= 65536),
                            s === Hs
                                ? (a.flags |= 16384)
                                : ((e = a.updateQueue),
                                  e === null
                                      ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([s]) }),
                                        (a.updateQueue = e))
                                      : ((a = e.retryQueue), a === null ? (e.retryQueue = new Set([s])) : a.add(s)),
                                  Tf(t, s, l)),
                            !1
                        );
                }
                throw Error(o(435, a.tag));
            }
            return Tf(t, s, l), uu(), !1;
        }
        if (Ut)
            return (
                (e = Fe.current),
                e !== null
                    ? ((e.flags & 65536) === 0 && (e.flags |= 256),
                      (e.flags |= 65536),
                      (e.lanes = l),
                      s !== yc && ((t = Error(o(422), { cause: s })), Ji(ln(t, a))))
                    : (s !== yc && ((e = Error(o(423), { cause: s })), Ji(ln(e, a))),
                      (t = t.current.alternate),
                      (t.flags |= 65536),
                      (l &= -l),
                      (t.lanes |= l),
                      (s = ln(s, a)),
                      (l = Fc(t.stateNode, s, l)),
                      Dc(t, l),
                      se !== 4 && (se = 2)),
                !1
            );
        var c = Error(o(520), { cause: s });
        if (((c = ln(c, a)), _o === null ? (_o = [c]) : _o.push(c), se !== 4 && (se = 2), e === null)) return !0;
        (s = ln(s, a)), (a = e);
        do {
            switch (a.tag) {
                case 3:
                    return (a.flags |= 65536), (t = l & -l), (a.lanes |= t), (t = Fc(a.stateNode, s, t)), Dc(a, t), !1;
                case 1:
                    if (
                        ((e = a.type),
                        (c = a.stateNode),
                        (a.flags & 128) === 0 &&
                            (typeof e.getDerivedStateFromError == "function" ||
                                (c !== null &&
                                    typeof c.componentDidCatch == "function" &&
                                    (Dr === null || !Dr.has(c)))))
                    )
                        return (a.flags |= 65536), (l &= -l), (a.lanes |= l), (l = zp(l)), Bp(l, t, a, s), Dc(a, l), !1;
            }
            a = a.return;
        } while (a !== null);
        return !1;
    }
    var $c = Error(o(461)),
        _e = !1;
    function Ae(t, e, a, s) {
        e.child = t === null ? km(e, null, a, s) : da(e, t.child, a, s);
    }
    function Up(t, e, a, s, l) {
        a = a.render;
        var c = e.ref;
        if ("ref" in s) {
            var h = {};
            for (var v in s) v !== "ref" && (h[v] = s[v]);
        } else h = s;
        return (
            ua(e),
            (s = zc(t, e, a, h, c, l)),
            (v = Bc()),
            t !== null && !_e ? (Uc(t, e, l), In(t, e, l)) : (Ut && v && mc(e), (e.flags |= 1), Ae(t, e, s, l), e.child)
        );
    }
    function Lp(t, e, a, s, l) {
        if (t === null) {
            var c = a.type;
            return typeof c == "function" && !fc(c) && c.defaultProps === void 0 && a.compare === null
                ? ((e.tag = 15), (e.type = c), Hp(t, e, c, s, l))
                : ((t = Rs(a.type, null, s, e, e.mode, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
        }
        if (((c = t.child), !sf(t, l))) {
            var h = c.memoizedProps;
            if (((a = a.compare), (a = a !== null ? a : Wi), a(h, s) && t.ref === e.ref)) return In(t, e, l);
        }
        return (e.flags |= 1), (t = Hn(c, s)), (t.ref = e.ref), (t.return = e), (e.child = t);
    }
    function Hp(t, e, a, s, l) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (Wi(c, s) && t.ref === e.ref)
                if (((_e = !1), (e.pendingProps = s = c), sf(t, l))) (t.flags & 131072) !== 0 && (_e = !0);
                else return (e.lanes = t.lanes), In(t, e, l);
        }
        return Jc(t, e, a, s, l);
    }
    function kp(t, e, a, s) {
        var l = s.children,
            c = t !== null ? t.memoizedState : null;
        if (
            (t === null &&
                e.stateNode === null &&
                (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            s.mode === "hidden")
        ) {
            if ((e.flags & 128) !== 0) {
                if (((c = c !== null ? c.baseLanes | a : a), t !== null)) {
                    for (s = e.child = t.child, l = 0; s !== null; ) (l = l | s.lanes | s.childLanes), (s = s.sibling);
                    s = l & ~c;
                } else (s = 0), (e.child = null);
                return jp(t, e, c, a, s);
            }
            if ((a & 536870912) !== 0)
                (e.memoizedState = { baseLanes: 0, cachePool: null }),
                    t !== null && Us(e, c !== null ? c.cachePool : null),
                    c !== null ? qm(e, c) : Mc(),
                    Gm(e);
            else return (s = e.lanes = 536870912), jp(t, e, c !== null ? c.baseLanes | a : a, a, s);
        } else
            c !== null
                ? (Us(e, c.cachePool), qm(e, c), Tr(), (e.memoizedState = null))
                : (t !== null && Us(e, null), Mc(), Tr());
        return Ae(t, e, l, a), e.child;
    }
    function fo(t, e) {
        return (
            (t !== null && t.tag === 22) ||
                e.stateNode !== null ||
                (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            e.sibling
        );
    }
    function jp(t, e, a, s, l) {
        var c = Tc();
        return (
            (c = c === null ? null : { parent: ge._currentValue, pool: c }),
            (e.memoizedState = { baseLanes: a, cachePool: c }),
            t !== null && Us(e, null),
            Mc(),
            Gm(e),
            t !== null && Za(t, e, s, !0),
            (e.childLanes = l),
            null
        );
    }
    function Fs(t, e) {
        return (
            (e = Js({ mode: e.mode, children: e.children }, t.mode)), (e.ref = t.ref), (t.child = e), (e.return = t), e
        );
    }
    function Yp(t, e, a) {
        return da(e, t.child, null, a), (t = Fs(e, e.pendingProps)), (t.flags |= 2), $e(e), (e.memoizedState = null), t;
    }
    function h1(t, e, a) {
        var s = e.pendingProps,
            l = (e.flags & 128) !== 0;
        if (((e.flags &= -129), t === null)) {
            if (Ut) {
                if (s.mode === "hidden") return (t = Fs(e, s)), (e.lanes = 536870912), fo(null, t);
                if (
                    (Rc(e),
                    (t = te)
                        ? ((t = $y(t, dn)),
                          (t = t !== null && t.data === "&" ? t : null),
                          t !== null &&
                              ((e.memoizedState = {
                                  dehydrated: t,
                                  treeContext: pr !== null ? { id: An, overflow: Mn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (a = Tm(t)),
                              (a.return = e),
                              (e.child = a),
                              (Oe = e),
                              (te = null)))
                        : (t = null),
                    t === null)
                )
                    throw gr(e);
                return (e.lanes = 536870912), null;
            }
            return Fs(e, s);
        }
        var c = t.memoizedState;
        if (c !== null) {
            var h = c.dehydrated;
            if ((Rc(e), l))
                if (e.flags & 256) (e.flags &= -257), (e = Yp(t, e, a));
                else if (e.memoizedState !== null) (e.child = t.child), (e.flags |= 128), (e = null);
                else throw Error(o(558));
            else if ((_e || Za(t, e, a, !1), (l = (a & t.childLanes) !== 0), _e || l)) {
                if (((s = Jt), s !== null && ((h = ps(s, a)), h !== 0 && h !== c.retryLane)))
                    throw ((c.retryLane = h), aa(t, h), Pe(s, t, h), $c);
                uu(), (e = Yp(t, e, a));
            } else
                (t = c.treeContext),
                    (te = mn(h.nextSibling)),
                    (Oe = e),
                    (Ut = !0),
                    (yr = null),
                    (dn = !1),
                    t !== null && Om(e, t),
                    (e = Fs(e, s)),
                    (e.flags |= 4096);
            return e;
        }
        return (
            (t = Hn(t.child, { mode: s.mode, children: s.children })), (t.ref = e.ref), (e.child = t), (t.return = e), t
        );
    }
    function $s(t, e) {
        var a = e.ref;
        if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(o(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816);
        }
    }
    function Jc(t, e, a, s, l) {
        return (
            ua(e),
            (a = zc(t, e, a, s, void 0, l)),
            (s = Bc()),
            t !== null && !_e ? (Uc(t, e, l), In(t, e, l)) : (Ut && s && mc(e), (e.flags |= 1), Ae(t, e, a, l), e.child)
        );
    }
    function qp(t, e, a, s, l, c) {
        return (
            ua(e),
            (e.updateQueue = null),
            (a = Xm(e, s, a, l)),
            Im(t),
            (s = Bc()),
            t !== null && !_e ? (Uc(t, e, c), In(t, e, c)) : (Ut && s && mc(e), (e.flags |= 1), Ae(t, e, a, c), e.child)
        );
    }
    function Gp(t, e, a, s, l) {
        if ((ua(e), e.stateNode === null)) {
            var c = Qa,
                h = a.contextType;
            typeof h == "object" && h !== null && (c = De(h)),
                (c = new a(s, c)),
                (e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
                (c.updater = Wc),
                (e.stateNode = c),
                (c._reactInternals = e),
                (c = e.stateNode),
                (c.props = s),
                (c.state = e.memoizedState),
                (c.refs = {}),
                wc(e),
                (h = a.contextType),
                (c.context = typeof h == "object" && h !== null ? De(h) : Qa),
                (c.state = e.memoizedState),
                (h = a.getDerivedStateFromProps),
                typeof h == "function" && (Zc(e, a, h, s), (c.state = e.memoizedState)),
                typeof a.getDerivedStateFromProps == "function" ||
                    typeof c.getSnapshotBeforeUpdate == "function" ||
                    (typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function") ||
                    ((h = c.state),
                    typeof c.componentWillMount == "function" && c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
                    h !== c.state && Wc.enqueueReplaceState(c, c.state, null),
                    oo(e, s, c, l),
                    io(),
                    (c.state = e.memoizedState)),
                typeof c.componentDidMount == "function" && (e.flags |= 4194308),
                (s = !0);
        } else if (t === null) {
            c = e.stateNode;
            var v = e.memoizedProps,
                A = ma(a, v);
            c.props = A;
            var Q = c.context,
                J = a.contextType;
            (h = Qa), typeof J == "object" && J !== null && (h = De(J));
            var nt = a.getDerivedStateFromProps;
            (J = typeof nt == "function" || typeof c.getSnapshotBeforeUpdate == "function"),
                (v = e.pendingProps !== v),
                J ||
                    (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof c.componentWillReceiveProps != "function") ||
                    ((v || Q !== h) && Ap(e, c, s, h)),
                (_r = !1);
            var K = e.memoizedState;
            (c.state = K),
                oo(e, s, c, l),
                io(),
                (Q = e.memoizedState),
                v || K !== Q || _r
                    ? (typeof nt == "function" && (Zc(e, a, nt, s), (Q = e.memoizedState)),
                      (A = _r || Dp(e, a, A, s, K, Q, h))
                          ? (J ||
                                (typeof c.UNSAFE_componentWillMount != "function" &&
                                    typeof c.componentWillMount != "function") ||
                                (typeof c.componentWillMount == "function" && c.componentWillMount(),
                                typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
                            typeof c.componentDidMount == "function" && (e.flags |= 4194308))
                          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
                            (e.memoizedProps = s),
                            (e.memoizedState = Q)),
                      (c.props = s),
                      (c.state = Q),
                      (c.context = h),
                      (s = A))
                    : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), (s = !1));
        } else {
            (c = e.stateNode),
                Oc(t, e),
                (h = e.memoizedProps),
                (J = ma(a, h)),
                (c.props = J),
                (nt = e.pendingProps),
                (K = c.context),
                (Q = a.contextType),
                (A = Qa),
                typeof Q == "object" && Q !== null && (A = De(Q)),
                (v = a.getDerivedStateFromProps),
                (Q = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") ||
                    (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof c.componentWillReceiveProps != "function") ||
                    ((h !== nt || K !== A) && Ap(e, c, s, A)),
                (_r = !1),
                (K = e.memoizedState),
                (c.state = K),
                oo(e, s, c, l),
                io();
            var F = e.memoizedState;
            h !== nt || K !== F || _r || (t !== null && t.dependencies !== null && zs(t.dependencies))
                ? (typeof v == "function" && (Zc(e, a, v, s), (F = e.memoizedState)),
                  (J = _r || Dp(e, a, J, s, K, F, A) || (t !== null && t.dependencies !== null && zs(t.dependencies)))
                      ? (Q ||
                            (typeof c.UNSAFE_componentWillUpdate != "function" &&
                                typeof c.componentWillUpdate != "function") ||
                            (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, F, A),
                            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, F, A)),
                        typeof c.componentDidUpdate == "function" && (e.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
                      : (typeof c.componentDidUpdate != "function" ||
                            (h === t.memoizedProps && K === t.memoizedState) ||
                            (e.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate != "function" ||
                            (h === t.memoizedProps && K === t.memoizedState) ||
                            (e.flags |= 1024),
                        (e.memoizedProps = s),
                        (e.memoizedState = F)),
                  (c.props = s),
                  (c.state = F),
                  (c.context = A),
                  (s = J))
                : (typeof c.componentDidUpdate != "function" ||
                      (h === t.memoizedProps && K === t.memoizedState) ||
                      (e.flags |= 4),
                  typeof c.getSnapshotBeforeUpdate != "function" ||
                      (h === t.memoizedProps && K === t.memoizedState) ||
                      (e.flags |= 1024),
                  (s = !1));
        }
        return (
            (c = s),
            $s(t, e),
            (s = (e.flags & 128) !== 0),
            c || s
                ? ((c = e.stateNode),
                  (a = s && typeof a.getDerivedStateFromError != "function" ? null : c.render()),
                  (e.flags |= 1),
                  t !== null && s
                      ? ((e.child = da(e, t.child, null, l)), (e.child = da(e, null, a, l)))
                      : Ae(t, e, a, l),
                  (e.memoizedState = c.state),
                  (t = e.child))
                : (t = In(t, e, l)),
            t
        );
    }
    function Ip(t, e, a, s) {
        return oa(), (e.flags |= 256), Ae(t, e, a, s), e.child;
    }
    var tf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function ef(t) {
        return { baseLanes: t, cachePool: Nm() };
    }
    function nf(t, e, a) {
        return (t = t !== null ? t.childLanes & ~a : 0), e && (t |= tn), t;
    }
    function Xp(t, e, a) {
        var s = e.pendingProps,
            l = !1,
            c = (e.flags & 128) !== 0,
            h;
        if (
            ((h = c) || (h = t !== null && t.memoizedState === null ? !1 : (de.current & 2) !== 0),
            h && ((l = !0), (e.flags &= -129)),
            (h = (e.flags & 32) !== 0),
            (e.flags &= -33),
            t === null)
        ) {
            if (Ut) {
                if (
                    (l ? Er(e) : Tr(),
                    (t = te)
                        ? ((t = $y(t, dn)),
                          (t = t !== null && t.data !== "&" ? t : null),
                          t !== null &&
                              ((e.memoizedState = {
                                  dehydrated: t,
                                  treeContext: pr !== null ? { id: An, overflow: Mn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (a = Tm(t)),
                              (a.return = e),
                              (e.child = a),
                              (Oe = e),
                              (te = null)))
                        : (t = null),
                    t === null)
                )
                    throw gr(e);
                return jf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
            }
            var v = s.children;
            return (
                (s = s.fallback),
                l
                    ? (Tr(),
                      (l = e.mode),
                      (v = Js({ mode: "hidden", children: v }, l)),
                      (s = ia(s, l, a, null)),
                      (v.return = e),
                      (s.return = e),
                      (v.sibling = s),
                      (e.child = v),
                      (s = e.child),
                      (s.memoizedState = ef(a)),
                      (s.childLanes = nf(t, h, a)),
                      (e.memoizedState = tf),
                      fo(null, s))
                    : (Er(e), rf(e, v))
            );
        }
        var A = t.memoizedState;
        if (A !== null && ((v = A.dehydrated), v !== null)) {
            if (c)
                e.flags & 256
                    ? (Er(e), (e.flags &= -257), (e = af(t, e, a)))
                    : e.memoizedState !== null
                      ? (Tr(), (e.child = t.child), (e.flags |= 128), (e = null))
                      : (Tr(),
                        (v = s.fallback),
                        (l = e.mode),
                        (s = Js({ mode: "visible", children: s.children }, l)),
                        (v = ia(v, l, a, null)),
                        (v.flags |= 2),
                        (s.return = e),
                        (v.return = e),
                        (s.sibling = v),
                        (e.child = s),
                        da(e, t.child, null, a),
                        (s = e.child),
                        (s.memoizedState = ef(a)),
                        (s.childLanes = nf(t, h, a)),
                        (e.memoizedState = tf),
                        (e = fo(null, s)));
            else if ((Er(e), jf(v))) {
                if (((h = v.nextSibling && v.nextSibling.dataset), h)) var Q = h.dgst;
                (h = Q),
                    (s = Error(o(419))),
                    (s.stack = ""),
                    (s.digest = h),
                    Ji({ value: s, source: null, stack: null }),
                    (e = af(t, e, a));
            } else if ((_e || Za(t, e, a, !1), (h = (a & t.childLanes) !== 0), _e || h)) {
                if (((h = Jt), h !== null && ((s = ps(h, a)), s !== 0 && s !== A.retryLane)))
                    throw ((A.retryLane = s), aa(t, s), Pe(h, t, s), $c);
                kf(v) || uu(), (e = af(t, e, a));
            } else
                kf(v)
                    ? ((e.flags |= 192), (e.child = t.child), (e = null))
                    : ((t = A.treeContext),
                      (te = mn(v.nextSibling)),
                      (Oe = e),
                      (Ut = !0),
                      (yr = null),
                      (dn = !1),
                      t !== null && Om(e, t),
                      (e = rf(e, s.children)),
                      (e.flags |= 4096));
            return e;
        }
        return l
            ? (Tr(),
              (v = s.fallback),
              (l = e.mode),
              (A = t.child),
              (Q = A.sibling),
              (s = Hn(A, { mode: "hidden", children: s.children })),
              (s.subtreeFlags = A.subtreeFlags & 65011712),
              Q !== null ? (v = Hn(Q, v)) : ((v = ia(v, l, a, null)), (v.flags |= 2)),
              (v.return = e),
              (s.return = e),
              (s.sibling = v),
              (e.child = s),
              fo(null, s),
              (s = e.child),
              (v = t.child.memoizedState),
              v === null
                  ? (v = ef(a))
                  : ((l = v.cachePool),
                    l !== null
                        ? ((A = ge._currentValue), (l = l.parent !== A ? { parent: A, pool: A } : l))
                        : (l = Nm()),
                    (v = { baseLanes: v.baseLanes | a, cachePool: l })),
              (s.memoizedState = v),
              (s.childLanes = nf(t, h, a)),
              (e.memoizedState = tf),
              fo(t.child, s))
            : (Er(e),
              (a = t.child),
              (t = a.sibling),
              (a = Hn(a, { mode: "visible", children: s.children })),
              (a.return = e),
              (a.sibling = null),
              t !== null && ((h = e.deletions), h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
              (e.child = a),
              (e.memoizedState = null),
              a);
    }
    function rf(t, e) {
        return (e = Js({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e);
    }
    function Js(t, e) {
        return (t = We(22, t, null, e)), (t.lanes = 0), t;
    }
    function af(t, e, a) {
        return (
            da(e, t.child, null, a), (t = rf(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t
        );
    }
    function Qp(t, e, a) {
        t.lanes |= e;
        var s = t.alternate;
        s !== null && (s.lanes |= e), _c(t.return, e, a);
    }
    function of(t, e, a, s, l, c) {
        var h = t.memoizedState;
        h === null
            ? (t.memoizedState = {
                  isBackwards: e,
                  rendering: null,
                  renderingStartTime: 0,
                  last: s,
                  tail: a,
                  tailMode: l,
                  treeForkCount: c,
              })
            : ((h.isBackwards = e),
              (h.rendering = null),
              (h.renderingStartTime = 0),
              (h.last = s),
              (h.tail = a),
              (h.tailMode = l),
              (h.treeForkCount = c));
    }
    function Vp(t, e, a) {
        var s = e.pendingProps,
            l = s.revealOrder,
            c = s.tail;
        s = s.children;
        var h = de.current,
            v = (h & 2) !== 0;
        if (
            (v ? ((h = (h & 1) | 2), (e.flags |= 128)) : (h &= 1),
            P(de, h),
            Ae(t, e, s, a),
            (s = Ut ? $i : 0),
            !v && t !== null && (t.flags & 128) !== 0)
        )
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && Qp(t, a, e);
                else if (t.tag === 19) Qp(t, a, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break t;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        switch (l) {
            case "forwards":
                for (a = e.child, l = null; a !== null; )
                    (t = a.alternate), t !== null && qs(t) === null && (l = a), (a = a.sibling);
                (a = l),
                    a === null ? ((l = e.child), (e.child = null)) : ((l = a.sibling), (a.sibling = null)),
                    of(e, !1, l, a, c, s);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (a = null, l = e.child, e.child = null; l !== null; ) {
                    if (((t = l.alternate), t !== null && qs(t) === null)) {
                        e.child = l;
                        break;
                    }
                    (t = l.sibling), (l.sibling = a), (a = l), (l = t);
                }
                of(e, !0, a, null, c, s);
                break;
            case "together":
                of(e, !1, null, null, void 0, s);
                break;
            default:
                e.memoizedState = null;
        }
        return e.child;
    }
    function In(t, e, a) {
        if ((t !== null && (e.dependencies = t.dependencies), (Or |= e.lanes), (a & e.childLanes) === 0))
            if (t !== null) {
                if ((Za(t, e, a, !1), (a & e.childLanes) === 0)) return null;
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child, a = Hn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
                (t = t.sibling), (a = a.sibling = Hn(t, t.pendingProps)), (a.return = e);
            a.sibling = null;
        }
        return e.child;
    }
    function sf(t, e) {
        return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && zs(t)));
    }
    function m1(t, e, a) {
        switch (e.tag) {
            case 3:
                xe(e, e.stateNode.containerInfo), vr(e, ge, t.memoizedState.cache), oa();
                break;
            case 27:
            case 5:
                Vr(e);
                break;
            case 4:
                xe(e, e.stateNode.containerInfo);
                break;
            case 10:
                vr(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return (e.flags |= 128), Rc(e), null;
                break;
            case 13:
                var s = e.memoizedState;
                if (s !== null)
                    return s.dehydrated !== null
                        ? (Er(e), (e.flags |= 128), null)
                        : (a & e.child.childLanes) !== 0
                          ? Xp(t, e, a)
                          : (Er(e), (t = In(t, e, a)), t !== null ? t.sibling : null);
                Er(e);
                break;
            case 19:
                var l = (t.flags & 128) !== 0;
                if (((s = (a & e.childLanes) !== 0), s || (Za(t, e, a, !1), (s = (a & e.childLanes) !== 0)), l)) {
                    if (s) return Vp(t, e, a);
                    e.flags |= 128;
                }
                if (
                    ((l = e.memoizedState),
                    l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
                    P(de, de.current),
                    s)
                )
                    break;
                return null;
            case 22:
                return (e.lanes = 0), kp(t, e, a, e.pendingProps);
            case 24:
                vr(e, ge, t.memoizedState.cache);
        }
        return In(t, e, a);
    }
    function Pp(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) _e = !0;
            else {
                if (!sf(t, a) && (e.flags & 128) === 0) return (_e = !1), m1(t, e, a);
                _e = (t.flags & 131072) !== 0;
            }
        else (_e = !1), Ut && (e.flags & 1048576) !== 0 && wm(e, $i, e.index);
        switch (((e.lanes = 0), e.tag)) {
            case 16:
                t: {
                    var s = e.pendingProps;
                    if (((t = ca(e.elementType)), (e.type = t), typeof t == "function"))
                        fc(t)
                            ? ((s = ma(t, s)), (e.tag = 1), (e = Gp(null, e, t, s, a)))
                            : ((e.tag = 0), (e = Jc(null, e, t, s, a)));
                    else {
                        if (t != null) {
                            var l = t.$$typeof;
                            if (l === C) {
                                (e.tag = 11), (e = Up(null, e, t, s, a));
                                break t;
                            } else if (l === U) {
                                (e.tag = 14), (e = Lp(null, e, t, s, a));
                                break t;
                            }
                        }
                        throw ((e = mt(t) || t), Error(o(306, e, "")));
                    }
                }
                return e;
            case 0:
                return Jc(t, e, e.type, e.pendingProps, a);
            case 1:
                return (s = e.type), (l = ma(s, e.pendingProps)), Gp(t, e, s, l, a);
            case 3:
                t: {
                    if ((xe(e, e.stateNode.containerInfo), t === null)) throw Error(o(387));
                    s = e.pendingProps;
                    var c = e.memoizedState;
                    (l = c.element), Oc(t, e), oo(e, s, null, a);
                    var h = e.memoizedState;
                    if (
                        ((s = h.cache),
                        vr(e, ge, s),
                        s !== c.cache && bc(e, [ge], a, !0),
                        io(),
                        (s = h.element),
                        c.isDehydrated)
                    )
                        if (
                            ((c = { element: s, isDehydrated: !1, cache: h.cache }),
                            (e.updateQueue.baseState = c),
                            (e.memoizedState = c),
                            e.flags & 256)
                        ) {
                            e = Ip(t, e, s, a);
                            break t;
                        } else if (s !== l) {
                            (l = ln(Error(o(424)), e)), Ji(l), (e = Ip(t, e, s, a));
                            break t;
                        } else
                            for (
                                t = e.stateNode.containerInfo,
                                    t.nodeType === 9
                                        ? (t = t.body)
                                        : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                                    te = mn(t.firstChild),
                                    Oe = e,
                                    Ut = !0,
                                    yr = null,
                                    dn = !0,
                                    a = km(e, null, s, a),
                                    e.child = a;
                                a;

                            )
                                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
                    else {
                        if ((oa(), s === l)) {
                            e = In(t, e, a);
                            break t;
                        }
                        Ae(t, e, s, a);
                    }
                    e = e.child;
                }
                return e;
            case 26:
                return (
                    $s(t, e),
                    t === null
                        ? (a = ag(e.type, null, e.pendingProps, null))
                            ? (e.memoizedState = a)
                            : Ut ||
                              ((a = e.type),
                              (t = e.pendingProps),
                              (s = pu(At.current).createElement(a)),
                              (s[Se] = e),
                              (s[ze] = t),
                              Me(s, a, t),
                              fe(s),
                              (e.stateNode = s))
                        : (e.memoizedState = ag(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
                    null
                );
            case 27:
                return (
                    Vr(e),
                    t === null &&
                        Ut &&
                        ((s = e.stateNode = eg(e.type, e.pendingProps, At.current)),
                        (Oe = e),
                        (dn = !0),
                        (l = te),
                        Rr(e.type) ? ((Yf = l), (te = mn(s.firstChild))) : (te = l)),
                    Ae(t, e, e.pendingProps.children, a),
                    $s(t, e),
                    t === null && (e.flags |= 4194304),
                    e.child
                );
            case 5:
                return (
                    t === null &&
                        Ut &&
                        ((l = s = te) &&
                            ((s = X1(s, e.type, e.pendingProps, dn)),
                            s !== null
                                ? ((e.stateNode = s), (Oe = e), (te = mn(s.firstChild)), (dn = !1), (l = !0))
                                : (l = !1)),
                        l || gr(e)),
                    Vr(e),
                    (l = e.type),
                    (c = e.pendingProps),
                    (h = t !== null ? t.memoizedProps : null),
                    (s = c.children),
                    Uf(l, c) ? (s = null) : h !== null && Uf(l, h) && (e.flags |= 32),
                    e.memoizedState !== null && ((l = zc(t, e, i1, null, null, a)), (Do._currentValue = l)),
                    $s(t, e),
                    Ae(t, e, s, a),
                    e.child
                );
            case 6:
                return (
                    t === null &&
                        Ut &&
                        ((t = a = te) &&
                            ((a = Q1(a, e.pendingProps, dn)),
                            a !== null ? ((e.stateNode = a), (Oe = e), (te = null), (t = !0)) : (t = !1)),
                        t || gr(e)),
                    null
                );
            case 13:
                return Xp(t, e, a);
            case 4:
                return (
                    xe(e, e.stateNode.containerInfo),
                    (s = e.pendingProps),
                    t === null ? (e.child = da(e, null, s, a)) : Ae(t, e, s, a),
                    e.child
                );
            case 11:
                return Up(t, e, e.type, e.pendingProps, a);
            case 7:
                return Ae(t, e, e.pendingProps, a), e.child;
            case 8:
                return Ae(t, e, e.pendingProps.children, a), e.child;
            case 12:
                return Ae(t, e, e.pendingProps.children, a), e.child;
            case 10:
                return (s = e.pendingProps), vr(e, e.type, s.value), Ae(t, e, s.children, a), e.child;
            case 9:
                return (
                    (l = e.type._context),
                    (s = e.pendingProps.children),
                    ua(e),
                    (l = De(l)),
                    (s = s(l)),
                    (e.flags |= 1),
                    Ae(t, e, s, a),
                    e.child
                );
            case 14:
                return Lp(t, e, e.type, e.pendingProps, a);
            case 15:
                return Hp(t, e, e.type, e.pendingProps, a);
            case 19:
                return Vp(t, e, a);
            case 31:
                return h1(t, e, a);
            case 22:
                return kp(t, e, a, e.pendingProps);
            case 24:
                return (
                    ua(e),
                    (s = De(ge)),
                    t === null
                        ? ((l = Tc()),
                          l === null &&
                              ((l = Jt),
                              (c = Sc()),
                              (l.pooledCache = c),
                              c.refCount++,
                              c !== null && (l.pooledCacheLanes |= a),
                              (l = c)),
                          (e.memoizedState = { parent: s, cache: l }),
                          wc(e),
                          vr(e, ge, l))
                        : ((t.lanes & a) !== 0 && (Oc(t, e), oo(e, null, null, a), io()),
                          (l = t.memoizedState),
                          (c = e.memoizedState),
                          l.parent !== s
                              ? ((l = { parent: s, cache: s }),
                                (e.memoizedState = l),
                                e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l),
                                vr(e, ge, s))
                              : ((s = c.cache), vr(e, ge, s), s !== l.cache && bc(e, [ge], a, !0))),
                    Ae(t, e, e.pendingProps.children, a),
                    e.child
                );
            case 29:
                throw e.pendingProps;
        }
        throw Error(o(156, e.tag));
    }
    function Xn(t) {
        t.flags |= 4;
    }
    function uf(t, e, a, s, l) {
        if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
            if (((t.flags |= 16777216), (l & 335544128) === l))
                if (t.stateNode.complete) t.flags |= 8192;
                else if (by()) t.flags |= 8192;
                else throw ((fa = Hs), xc);
        } else t.flags &= -16777217;
    }
    function Kp(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (((t.flags |= 16777216), !lg(e)))
            if (by()) t.flags |= 8192;
            else throw ((fa = Hs), xc);
    }
    function tu(t, e) {
        e !== null && (t.flags |= 4),
            t.flags & 16384 && ((e = t.tag !== 22 ? ds() : 536870912), (t.lanes |= e), (si |= e));
    }
    function ho(t, e) {
        if (!Ut)
            switch (t.tailMode) {
                case "hidden":
                    e = t.tail;
                    for (var a = null; e !== null; ) e.alternate !== null && (a = e), (e = e.sibling);
                    a === null ? (t.tail = null) : (a.sibling = null);
                    break;
                case "collapsed":
                    a = t.tail;
                    for (var s = null; a !== null; ) a.alternate !== null && (s = a), (a = a.sibling);
                    s === null
                        ? e || t.tail === null
                            ? (t.tail = null)
                            : (t.tail.sibling = null)
                        : (s.sibling = null);
            }
    }
    function ee(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            s = 0;
        if (e)
            for (var l = t.child; l !== null; )
                (a |= l.lanes | l.childLanes),
                    (s |= l.subtreeFlags & 65011712),
                    (s |= l.flags & 65011712),
                    (l.return = t),
                    (l = l.sibling);
        else
            for (l = t.child; l !== null; )
                (a |= l.lanes | l.childLanes), (s |= l.subtreeFlags), (s |= l.flags), (l.return = t), (l = l.sibling);
        return (t.subtreeFlags |= s), (t.childLanes = a), e;
    }
    function p1(t, e, a) {
        var s = e.pendingProps;
        switch ((pc(e), e.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return ee(e), null;
            case 1:
                return ee(e), null;
            case 3:
                return (
                    (a = e.stateNode),
                    (s = null),
                    t !== null && (s = t.memoizedState.cache),
                    e.memoizedState.cache !== s && (e.flags |= 2048),
                    Yn(ge),
                    re(),
                    a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
                    (t === null || t.child === null) &&
                        (Ka(e)
                            ? Xn(e)
                            : t === null ||
                              (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                              ((e.flags |= 1024), gc())),
                    ee(e),
                    null
                );
            case 26:
                var l = e.type,
                    c = e.memoizedState;
                return (
                    t === null
                        ? (Xn(e), c !== null ? (ee(e), Kp(e, c)) : (ee(e), uf(e, l, null, s, a)))
                        : c
                          ? c !== t.memoizedState
                              ? (Xn(e), ee(e), Kp(e, c))
                              : (ee(e), (e.flags &= -16777217))
                          : ((t = t.memoizedProps), t !== s && Xn(e), ee(e), uf(e, l, t, s, a)),
                    null
                );
            case 27:
                if ((Ma(e), (a = At.current), (l = e.type), t !== null && e.stateNode != null))
                    t.memoizedProps !== s && Xn(e);
                else {
                    if (!s) {
                        if (e.stateNode === null) throw Error(o(166));
                        return ee(e), null;
                    }
                    (t = W.current), Ka(e) ? Dm(e) : ((t = eg(l, s, a)), (e.stateNode = t), Xn(e));
                }
                return ee(e), null;
            case 5:
                if ((Ma(e), (l = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== s && Xn(e);
                else {
                    if (!s) {
                        if (e.stateNode === null) throw Error(o(166));
                        return ee(e), null;
                    }
                    if (((c = W.current), Ka(e))) Dm(e);
                    else {
                        var h = pu(At.current);
                        switch (c) {
                            case 1:
                                c = h.createElementNS("http://www.w3.org/2000/svg", l);
                                break;
                            case 2:
                                c = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                break;
                            default:
                                switch (l) {
                                    case "svg":
                                        c = h.createElementNS("http://www.w3.org/2000/svg", l);
                                        break;
                                    case "math":
                                        c = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                        break;
                                    case "script":
                                        (c = h.createElement("div")),
                                            (c.innerHTML = "<script></script>"),
                                            (c = c.removeChild(c.firstChild));
                                        break;
                                    case "select":
                                        (c =
                                            typeof s.is == "string"
                                                ? h.createElement("select", { is: s.is })
                                                : h.createElement("select")),
                                            s.multiple ? (c.multiple = !0) : s.size && (c.size = s.size);
                                        break;
                                    default:
                                        c =
                                            typeof s.is == "string"
                                                ? h.createElement(l, { is: s.is })
                                                : h.createElement(l);
                                }
                        }
                        (c[Se] = e), (c[ze] = s);
                        t: for (h = e.child; h !== null; ) {
                            if (h.tag === 5 || h.tag === 6) c.appendChild(h.stateNode);
                            else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                                (h.child.return = h), (h = h.child);
                                continue;
                            }
                            if (h === e) break t;
                            for (; h.sibling === null; ) {
                                if (h.return === null || h.return === e) break t;
                                h = h.return;
                            }
                            (h.sibling.return = h.return), (h = h.sibling);
                        }
                        e.stateNode = c;
                        t: switch ((Me(c, l, s), l)) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s = !!s.autoFocus;
                                break t;
                            case "img":
                                s = !0;
                                break t;
                            default:
                                s = !1;
                        }
                        s && Xn(e);
                    }
                }
                return ee(e), uf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== s && Xn(e);
                else {
                    if (typeof s != "string" && e.stateNode === null) throw Error(o(166));
                    if (((t = At.current), Ka(e))) {
                        if (((t = e.stateNode), (a = e.memoizedProps), (s = null), (l = Oe), l !== null))
                            switch (l.tag) {
                                case 27:
                                case 5:
                                    s = l.memoizedProps;
                            }
                        (t[Se] = e),
                            (t = !!(
                                t.nodeValue === a ||
                                (s !== null && s.suppressHydrationWarning === !0) ||
                                Xy(t.nodeValue, a)
                            )),
                            t || gr(e, !0);
                    } else (t = pu(t).createTextNode(s)), (t[Se] = e), (e.stateNode = t);
                }
                return ee(e), null;
            case 31:
                if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
                    if (((s = Ka(e)), a !== null)) {
                        if (t === null) {
                            if (!s) throw Error(o(318));
                            if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                                throw Error(o(557));
                            t[Se] = e;
                        } else oa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
                        ee(e), (t = !1);
                    } else
                        (a = gc()),
                            t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                            (t = !0);
                    if (!t) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
                    if ((e.flags & 128) !== 0) throw Error(o(558));
                }
                return ee(e), null;
            case 13:
                if (
                    ((s = e.memoizedState),
                    t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
                ) {
                    if (((l = Ka(e)), s !== null && s.dehydrated !== null)) {
                        if (t === null) {
                            if (!l) throw Error(o(318));
                            if (((l = e.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                                throw Error(o(317));
                            l[Se] = e;
                        } else oa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
                        ee(e), (l = !1);
                    } else
                        (l = gc()),
                            t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
                            (l = !0);
                    if (!l) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
                }
                return (
                    $e(e),
                    (e.flags & 128) !== 0
                        ? ((e.lanes = a), e)
                        : ((a = s !== null),
                          (t = t !== null && t.memoizedState !== null),
                          a &&
                              ((s = e.child),
                              (l = null),
                              s.alternate !== null &&
                                  s.alternate.memoizedState !== null &&
                                  s.alternate.memoizedState.cachePool !== null &&
                                  (l = s.alternate.memoizedState.cachePool.pool),
                              (c = null),
                              s.memoizedState !== null &&
                                  s.memoizedState.cachePool !== null &&
                                  (c = s.memoizedState.cachePool.pool),
                              c !== l && (s.flags |= 2048)),
                          a !== t && a && (e.child.flags |= 8192),
                          tu(e, e.updateQueue),
                          ee(e),
                          null)
                );
            case 4:
                return re(), t === null && Cf(e.stateNode.containerInfo), ee(e), null;
            case 10:
                return Yn(e.type), ee(e), null;
            case 19:
                if ((z(de), (s = e.memoizedState), s === null)) return ee(e), null;
                if (((l = (e.flags & 128) !== 0), (c = s.rendering), c === null))
                    if (l) ho(s, !1);
                    else {
                        if (se !== 0 || (t !== null && (t.flags & 128) !== 0))
                            for (t = e.child; t !== null; ) {
                                if (((c = qs(t)), c !== null)) {
                                    for (
                                        e.flags |= 128,
                                            ho(s, !1),
                                            t = c.updateQueue,
                                            e.updateQueue = t,
                                            tu(e, t),
                                            e.subtreeFlags = 0,
                                            t = a,
                                            a = e.child;
                                        a !== null;

                                    )
                                        Em(a, t), (a = a.sibling);
                                    return P(de, (de.current & 1) | 2), Ut && kn(e, s.treeForkCount), e.child;
                                }
                                t = t.sibling;
                            }
                        s.tail !== null && Ne() > iu && ((e.flags |= 128), (l = !0), ho(s, !1), (e.lanes = 4194304));
                    }
                else {
                    if (!l)
                        if (((t = qs(c)), t !== null)) {
                            if (
                                ((e.flags |= 128),
                                (l = !0),
                                (t = t.updateQueue),
                                (e.updateQueue = t),
                                tu(e, t),
                                ho(s, !0),
                                s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ut)
                            )
                                return ee(e), null;
                        } else
                            2 * Ne() - s.renderingStartTime > iu &&
                                a !== 536870912 &&
                                ((e.flags |= 128), (l = !0), ho(s, !1), (e.lanes = 4194304));
                    s.isBackwards
                        ? ((c.sibling = e.child), (e.child = c))
                        : ((t = s.last), t !== null ? (t.sibling = c) : (e.child = c), (s.last = c));
                }
                return s.tail !== null
                    ? ((t = s.tail),
                      (s.rendering = t),
                      (s.tail = t.sibling),
                      (s.renderingStartTime = Ne()),
                      (t.sibling = null),
                      (a = de.current),
                      P(de, l ? (a & 1) | 2 : a & 1),
                      Ut && kn(e, s.treeForkCount),
                      t)
                    : (ee(e), null);
            case 22:
            case 23:
                return (
                    $e(e),
                    Cc(),
                    (s = e.memoizedState !== null),
                    t !== null ? (t.memoizedState !== null) !== s && (e.flags |= 8192) : s && (e.flags |= 8192),
                    s
                        ? (a & 536870912) !== 0 &&
                          (e.flags & 128) === 0 &&
                          (ee(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                        : ee(e),
                    (a = e.updateQueue),
                    a !== null && tu(e, a.retryQueue),
                    (a = null),
                    t !== null &&
                        t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (a = t.memoizedState.cachePool.pool),
                    (s = null),
                    e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (s = e.memoizedState.cachePool.pool),
                    s !== a && (e.flags |= 2048),
                    t !== null && z(la),
                    null
                );
            case 24:
                return (
                    (a = null),
                    t !== null && (a = t.memoizedState.cache),
                    e.memoizedState.cache !== a && (e.flags |= 2048),
                    Yn(ge),
                    ee(e),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(o(156, e.tag));
    }
    function y1(t, e) {
        switch ((pc(e), e.tag)) {
            case 1:
                return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
            case 3:
                return (
                    Yn(ge),
                    re(),
                    (t = e.flags),
                    (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 26:
            case 27:
            case 5:
                return Ma(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if (($e(e), e.alternate === null)) throw Error(o(340));
                    oa();
                }
                return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
            case 13:
                if (($e(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
                    if (e.alternate === null) throw Error(o(340));
                    oa();
                }
                return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
            case 19:
                return z(de), null;
            case 4:
                return re(), null;
            case 10:
                return Yn(e.type), null;
            case 22:
            case 23:
                return (
                    $e(e),
                    Cc(),
                    t !== null && z(la),
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 24:
                return Yn(ge), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Zp(t, e) {
        switch ((pc(e), e.tag)) {
            case 3:
                Yn(ge), re();
                break;
            case 26:
            case 27:
            case 5:
                Ma(e);
                break;
            case 4:
                re();
                break;
            case 31:
                e.memoizedState !== null && $e(e);
                break;
            case 13:
                $e(e);
                break;
            case 19:
                z(de);
                break;
            case 10:
                Yn(e.type);
                break;
            case 22:
            case 23:
                $e(e), Cc(), t !== null && z(la);
                break;
            case 24:
                Yn(ge);
        }
    }
    function mo(t, e) {
        try {
            var a = e.updateQueue,
                s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var l = s.next;
                a = l;
                do {
                    if ((a.tag & t) === t) {
                        s = void 0;
                        var c = a.create,
                            h = a.inst;
                        (s = c()), (h.destroy = s);
                    }
                    a = a.next;
                } while (a !== l);
            }
        } catch (v) {
            Xt(e, e.return, v);
        }
    }
    function xr(t, e, a) {
        try {
            var s = e.updateQueue,
                l = s !== null ? s.lastEffect : null;
            if (l !== null) {
                var c = l.next;
                s = c;
                do {
                    if ((s.tag & t) === t) {
                        var h = s.inst,
                            v = h.destroy;
                        if (v !== void 0) {
                            (h.destroy = void 0), (l = e);
                            var A = a,
                                Q = v;
                            try {
                                Q();
                            } catch (J) {
                                Xt(l, A, J);
                            }
                        }
                    }
                    s = s.next;
                } while (s !== c);
            }
        } catch (J) {
            Xt(e, e.return, J);
        }
    }
    function Wp(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                Ym(e, a);
            } catch (s) {
                Xt(t, t.return, s);
            }
        }
    }
    function Fp(t, e, a) {
        (a.props = ma(t.type, t.memoizedProps)), (a.state = t.memoizedState);
        try {
            a.componentWillUnmount();
        } catch (s) {
            Xt(t, e, s);
        }
    }
    function po(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var s = t.stateNode;
                        break;
                    case 30:
                        s = t.stateNode;
                        break;
                    default:
                        s = t.stateNode;
                }
                typeof a == "function" ? (t.refCleanup = a(s)) : (a.current = s);
            }
        } catch (l) {
            Xt(t, e, l);
        }
    }
    function Cn(t, e) {
        var a = t.ref,
            s = t.refCleanup;
        if (a !== null)
            if (typeof s == "function")
                try {
                    s();
                } catch (l) {
                    Xt(t, e, l);
                } finally {
                    (t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null);
                }
            else if (typeof a == "function")
                try {
                    a(null);
                } catch (l) {
                    Xt(t, e, l);
                }
            else a.current = null;
    }
    function $p(t) {
        var e = t.type,
            a = t.memoizedProps,
            s = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && s.focus();
                    break t;
                case "img":
                    a.src ? (s.src = a.src) : a.srcSet && (s.srcset = a.srcSet);
            }
        } catch (l) {
            Xt(t, t.return, l);
        }
    }
    function lf(t, e, a) {
        try {
            var s = t.stateNode;
            k1(s, t.type, a, e), (s[ze] = e);
        } catch (l) {
            Xt(t, t.return, l);
        }
    }
    function Jp(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Rr(t.type)) || t.tag === 4;
    }
    function cf(t) {
        t: for (;;) {
            for (; t.sibling === null; ) {
                if (t.return === null || Jp(t.return)) return null;
                t = t.return;
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if ((t.tag === 27 && Rr(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                (t.child.return = t), (t = t.child);
            }
            if (!(t.flags & 2)) return t.stateNode;
        }
    }
    function ff(t, e, a) {
        var s = t.tag;
        if (s === 5 || s === 6)
            (t = t.stateNode),
                e
                    ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)
                    : ((e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
                      e.appendChild(t),
                      (a = a._reactRootContainer),
                      a != null || e.onclick !== null || (e.onclick = gn));
        else if (s !== 4 && (s === 27 && Rr(t.type) && ((a = t.stateNode), (e = null)), (t = t.child), t !== null))
            for (ff(t, e, a), t = t.sibling; t !== null; ) ff(t, e, a), (t = t.sibling);
    }
    function eu(t, e, a) {
        var s = t.tag;
        if (s === 5 || s === 6) (t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (s !== 4 && (s === 27 && Rr(t.type) && (a = t.stateNode), (t = t.child), t !== null))
            for (eu(t, e, a), t = t.sibling; t !== null; ) eu(t, e, a), (t = t.sibling);
    }
    function ty(t) {
        var e = t.stateNode,
            a = t.memoizedProps;
        try {
            for (var s = t.type, l = e.attributes; l.length; ) e.removeAttributeNode(l[0]);
            Me(e, s, a), (e[Se] = t), (e[ze] = a);
        } catch (c) {
            Xt(t, t.return, c);
        }
    }
    var Qn = !1,
        be = !1,
        df = !1,
        ey = typeof WeakSet == "function" ? WeakSet : Set,
        Te = null;
    function g1(t, e) {
        if (((t = t.containerInfo), (zf = Eu), (t = hm(t)), ac(t))) {
            if ("selectionStart" in t) var a = { start: t.selectionStart, end: t.selectionEnd };
            else
                t: {
                    a = ((a = t.ownerDocument) && a.defaultView) || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var l = s.anchorOffset,
                            c = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType, c.nodeType;
                        } catch {
                            a = null;
                            break t;
                        }
                        var h = 0,
                            v = -1,
                            A = -1,
                            Q = 0,
                            J = 0,
                            nt = t,
                            K = null;
                        e: for (;;) {
                            for (
                                var F;
                                nt !== a || (l !== 0 && nt.nodeType !== 3) || (v = h + l),
                                    nt !== c || (s !== 0 && nt.nodeType !== 3) || (A = h + s),
                                    nt.nodeType === 3 && (h += nt.nodeValue.length),
                                    (F = nt.firstChild) !== null;

                            )
                                (K = nt), (nt = F);
                            for (;;) {
                                if (nt === t) break e;
                                if (
                                    (K === a && ++Q === l && (v = h),
                                    K === c && ++J === s && (A = h),
                                    (F = nt.nextSibling) !== null)
                                )
                                    break;
                                (nt = K), (K = nt.parentNode);
                            }
                            nt = F;
                        }
                        a = v === -1 || A === -1 ? null : { start: v, end: A };
                    } else a = null;
                }
            a = a || { start: 0, end: 0 };
        } else a = null;
        for (Bf = { focusedElem: t, selectionRange: a }, Eu = !1, Te = e; Te !== null; )
            if (((e = Te), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) (t.return = e), (Te = t);
            else
                for (; Te !== null; ) {
                    switch (((e = Te), (c = e.alternate), (t = e.flags), e.tag)) {
                        case 0:
                            if ((t & 4) !== 0 && ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null))
                                for (a = 0; a < t.length; a++) (l = t[a]), (l.ref.impl = l.nextImpl);
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && c !== null) {
                                (t = void 0), (a = e), (l = c.memoizedProps), (c = c.memoizedState), (s = a.stateNode);
                                try {
                                    var dt = ma(a.type, l);
                                    (t = s.getSnapshotBeforeUpdate(dt, c)), (s.__reactInternalSnapshotBeforeUpdate = t);
                                } catch (vt) {
                                    Xt(a, a.return, vt);
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)) Hf(t);
                                else if (a === 1)
                                    switch (t.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Hf(t);
                                            break;
                                        default:
                                            t.textContent = "";
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(o(163));
                    }
                    if (((t = e.sibling), t !== null)) {
                        (t.return = e.return), (Te = t);
                        break;
                    }
                    Te = e.return;
                }
    }
    function ny(t, e, a) {
        var s = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Pn(t, a), s & 4 && mo(5, a);
                break;
            case 1:
                if ((Pn(t, a), s & 4))
                    if (((t = a.stateNode), e === null))
                        try {
                            t.componentDidMount();
                        } catch (h) {
                            Xt(a, a.return, h);
                        }
                    else {
                        var l = ma(a.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
                        } catch (h) {
                            Xt(a, a.return, h);
                        }
                    }
                s & 64 && Wp(a), s & 512 && po(a, a.return);
                break;
            case 3:
                if ((Pn(t, a), s & 64 && ((t = a.updateQueue), t !== null))) {
                    if (((e = null), a.child !== null))
                        switch (a.child.tag) {
                            case 27:
                            case 5:
                                e = a.child.stateNode;
                                break;
                            case 1:
                                e = a.child.stateNode;
                        }
                    try {
                        Ym(t, e);
                    } catch (h) {
                        Xt(a, a.return, h);
                    }
                }
                break;
            case 27:
                e === null && s & 4 && ty(a);
            case 26:
            case 5:
                Pn(t, a), e === null && s & 4 && $p(a), s & 512 && po(a, a.return);
                break;
            case 12:
                Pn(t, a);
                break;
            case 31:
                Pn(t, a), s & 4 && iy(t, a);
                break;
            case 13:
                Pn(t, a),
                    s & 4 && oy(t, a),
                    s & 64 &&
                        ((t = a.memoizedState),
                        t !== null && ((t = t.dehydrated), t !== null && ((a = O1.bind(null, a)), V1(t, a))));
                break;
            case 22:
                if (((s = a.memoizedState !== null || Qn), !s)) {
                    (e = (e !== null && e.memoizedState !== null) || be), (l = Qn);
                    var c = be;
                    (Qn = s), (be = e) && !c ? Kn(t, a, (a.subtreeFlags & 8772) !== 0) : Pn(t, a), (Qn = l), (be = c);
                }
                break;
            case 30:
                break;
            default:
                Pn(t, a);
        }
    }
    function ry(t) {
        var e = t.alternate;
        e !== null && ((t.alternate = null), ry(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            t.tag === 5 && ((e = t.stateNode), e !== null && Yi(e)),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
    }
    var ne = null,
        Ie = !1;
    function Vn(t, e, a) {
        for (a = a.child; a !== null; ) ay(t, e, a), (a = a.sibling);
    }
    function ay(t, e, a) {
        if (we && typeof we.onCommitFiberUnmount == "function")
            try {
                we.onCommitFiberUnmount(ur, a);
            } catch {}
        switch (a.tag) {
            case 26:
                be || Cn(a, e),
                    Vn(t, e, a),
                    a.memoizedState
                        ? a.memoizedState.count--
                        : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
                break;
            case 27:
                be || Cn(a, e);
                var s = ne,
                    l = Ie;
                Rr(a.type) && ((ne = a.stateNode), (Ie = !1)), Vn(t, e, a), xo(a.stateNode), (ne = s), (Ie = l);
                break;
            case 5:
                be || Cn(a, e);
            case 6:
                if (((s = ne), (l = Ie), (ne = null), Vn(t, e, a), (ne = s), (Ie = l), ne !== null))
                    if (Ie)
                        try {
                            (ne.nodeType === 9
                                ? ne.body
                                : ne.nodeName === "HTML"
                                  ? ne.ownerDocument.body
                                  : ne
                            ).removeChild(a.stateNode);
                        } catch (c) {
                            Xt(a, e, c);
                        }
                    else
                        try {
                            ne.removeChild(a.stateNode);
                        } catch (c) {
                            Xt(a, e, c);
                        }
                break;
            case 18:
                ne !== null &&
                    (Ie
                        ? ((t = ne),
                          Wy(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
                          pi(t))
                        : Wy(ne, a.stateNode));
                break;
            case 4:
                (s = ne), (l = Ie), (ne = a.stateNode.containerInfo), (Ie = !0), Vn(t, e, a), (ne = s), (Ie = l);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                xr(2, a, e), be || xr(4, a, e), Vn(t, e, a);
                break;
            case 1:
                be || (Cn(a, e), (s = a.stateNode), typeof s.componentWillUnmount == "function" && Fp(a, e, s)),
                    Vn(t, e, a);
                break;
            case 21:
                Vn(t, e, a);
                break;
            case 22:
                (be = (s = be) || a.memoizedState !== null), Vn(t, e, a), (be = s);
                break;
            default:
                Vn(t, e, a);
        }
    }
    function iy(t, e) {
        if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))) {
            t = t.dehydrated;
            try {
                pi(t);
            } catch (a) {
                Xt(e, e.return, a);
            }
        }
    }
    function oy(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
        )
            try {
                pi(t);
            } catch (a) {
                Xt(e, e.return, a);
            }
    }
    function v1(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new ey()), e;
            case 22:
                return (t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new ey()), e;
            default:
                throw Error(o(435, t.tag));
        }
    }
    function nu(t, e) {
        var a = v1(t);
        e.forEach(function (s) {
            if (!a.has(s)) {
                a.add(s);
                var l = D1.bind(null, t, s);
                s.then(l, l);
            }
        });
    }
    function Xe(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var l = a[s],
                    c = t,
                    h = e,
                    v = h;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                        case 27:
                            if (Rr(v.type)) {
                                (ne = v.stateNode), (Ie = !1);
                                break t;
                            }
                            break;
                        case 5:
                            (ne = v.stateNode), (Ie = !1);
                            break t;
                        case 3:
                        case 4:
                            (ne = v.stateNode.containerInfo), (Ie = !0);
                            break t;
                    }
                    v = v.return;
                }
                if (ne === null) throw Error(o(160));
                ay(c, h, l),
                    (ne = null),
                    (Ie = !1),
                    (c = l.alternate),
                    c !== null && (c.return = null),
                    (l.return = null);
            }
        if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) sy(e, t), (e = e.sibling);
    }
    var _n = null;
    function sy(t, e) {
        var a = t.alternate,
            s = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Xe(e, t), Qe(t), s & 4 && (xr(3, t, t.return), mo(3, t), xr(5, t, t.return));
                break;
            case 1:
                Xe(e, t),
                    Qe(t),
                    s & 512 && (be || a === null || Cn(a, a.return)),
                    s & 64 &&
                        Qn &&
                        ((t = t.updateQueue),
                        t !== null &&
                            ((s = t.callbacks),
                            s !== null &&
                                ((a = t.shared.hiddenCallbacks),
                                (t.shared.hiddenCallbacks = a === null ? s : a.concat(s)))));
                break;
            case 26:
                var l = _n;
                if ((Xe(e, t), Qe(t), s & 512 && (be || a === null || Cn(a, a.return)), s & 4)) {
                    var c = a !== null ? a.memoizedState : null;
                    if (((s = t.memoizedState), a === null))
                        if (s === null)
                            if (t.stateNode === null) {
                                t: {
                                    (s = t.type), (a = t.memoizedProps), (l = l.ownerDocument || l);
                                    e: switch (s) {
                                        case "title":
                                            (c = l.getElementsByTagName("title")[0]),
                                                (!c ||
                                                    c[ta] ||
                                                    c[Se] ||
                                                    c.namespaceURI === "http://www.w3.org/2000/svg" ||
                                                    c.hasAttribute("itemprop")) &&
                                                    ((c = l.createElement(s)),
                                                    l.head.insertBefore(c, l.querySelector("head > title"))),
                                                Me(c, s, a),
                                                (c[Se] = t),
                                                fe(c),
                                                (s = c);
                                            break t;
                                        case "link":
                                            var h = sg("link", "href", l).get(s + (a.href || ""));
                                            if (h) {
                                                for (var v = 0; v < h.length; v++)
                                                    if (
                                                        ((c = h[v]),
                                                        c.getAttribute("href") ===
                                                            (a.href == null || a.href === "" ? null : a.href) &&
                                                            c.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                                                            c.getAttribute("title") ===
                                                                (a.title == null ? null : a.title) &&
                                                            c.getAttribute("crossorigin") ===
                                                                (a.crossOrigin == null ? null : a.crossOrigin))
                                                    ) {
                                                        h.splice(v, 1);
                                                        break e;
                                                    }
                                            }
                                            (c = l.createElement(s)), Me(c, s, a), l.head.appendChild(c);
                                            break;
                                        case "meta":
                                            if ((h = sg("meta", "content", l).get(s + (a.content || "")))) {
                                                for (v = 0; v < h.length; v++)
                                                    if (
                                                        ((c = h[v]),
                                                        c.getAttribute("content") ===
                                                            (a.content == null ? null : "" + a.content) &&
                                                            c.getAttribute("name") ===
                                                                (a.name == null ? null : a.name) &&
                                                            c.getAttribute("property") ===
                                                                (a.property == null ? null : a.property) &&
                                                            c.getAttribute("http-equiv") ===
                                                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                                                            c.getAttribute("charset") ===
                                                                (a.charSet == null ? null : a.charSet))
                                                    ) {
                                                        h.splice(v, 1);
                                                        break e;
                                                    }
                                            }
                                            (c = l.createElement(s)), Me(c, s, a), l.head.appendChild(c);
                                            break;
                                        default:
                                            throw Error(o(468, s));
                                    }
                                    (c[Se] = t), fe(c), (s = c);
                                }
                                t.stateNode = s;
                            } else ug(l, t.type, t.stateNode);
                        else t.stateNode = og(l, s, t.memoizedProps);
                    else
                        c !== s
                            ? (c === null
                                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                                  : c.count--,
                              s === null ? ug(l, t.type, t.stateNode) : og(l, s, t.memoizedProps))
                            : s === null && t.stateNode !== null && lf(t, t.memoizedProps, a.memoizedProps);
                }
                break;
            case 27:
                Xe(e, t),
                    Qe(t),
                    s & 512 && (be || a === null || Cn(a, a.return)),
                    a !== null && s & 4 && lf(t, t.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if ((Xe(e, t), Qe(t), s & 512 && (be || a === null || Cn(a, a.return)), t.flags & 32)) {
                    l = t.stateNode;
                    try {
                        Kt(l, "");
                    } catch (dt) {
                        Xt(t, t.return, dt);
                    }
                }
                s & 4 && t.stateNode != null && ((l = t.memoizedProps), lf(t, l, a !== null ? a.memoizedProps : l)),
                    s & 1024 && (df = !0);
                break;
            case 6:
                if ((Xe(e, t), Qe(t), s & 4)) {
                    if (t.stateNode === null) throw Error(o(162));
                    (s = t.memoizedProps), (a = t.stateNode);
                    try {
                        a.nodeValue = s;
                    } catch (dt) {
                        Xt(t, t.return, dt);
                    }
                }
                break;
            case 3:
                if (
                    ((vu = null),
                    (l = _n),
                    (_n = yu(e.containerInfo)),
                    Xe(e, t),
                    (_n = l),
                    Qe(t),
                    s & 4 && a !== null && a.memoizedState.isDehydrated)
                )
                    try {
                        pi(e.containerInfo);
                    } catch (dt) {
                        Xt(t, t.return, dt);
                    }
                df && ((df = !1), uy(t));
                break;
            case 4:
                (s = _n), (_n = yu(t.stateNode.containerInfo)), Xe(e, t), Qe(t), (_n = s);
                break;
            case 12:
                Xe(e, t), Qe(t);
                break;
            case 31:
                Xe(e, t), Qe(t), s & 4 && ((s = t.updateQueue), s !== null && ((t.updateQueue = null), nu(t, s)));
                break;
            case 13:
                Xe(e, t),
                    Qe(t),
                    t.child.flags & 8192 &&
                        (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
                        (au = Ne()),
                    s & 4 && ((s = t.updateQueue), s !== null && ((t.updateQueue = null), nu(t, s)));
                break;
            case 22:
                l = t.memoizedState !== null;
                var A = a !== null && a.memoizedState !== null,
                    Q = Qn,
                    J = be;
                if (((Qn = Q || l), (be = J || A), Xe(e, t), (be = J), (Qn = Q), Qe(t), s & 8192))
                    t: for (
                        e = t.stateNode,
                            e._visibility = l ? e._visibility & -2 : e._visibility | 1,
                            l && (a === null || A || Qn || be || pa(t)),
                            a = null,
                            e = t;
                        ;

                    ) {
                        if (e.tag === 5 || e.tag === 26) {
                            if (a === null) {
                                A = a = e;
                                try {
                                    if (((c = A.stateNode), l))
                                        (h = c.style),
                                            typeof h.setProperty == "function"
                                                ? h.setProperty("display", "none", "important")
                                                : (h.display = "none");
                                    else {
                                        v = A.stateNode;
                                        var nt = A.memoizedProps.style,
                                            K = nt != null && nt.hasOwnProperty("display") ? nt.display : null;
                                        v.style.display = K == null || typeof K == "boolean" ? "" : ("" + K).trim();
                                    }
                                } catch (dt) {
                                    Xt(A, A.return, dt);
                                }
                            }
                        } else if (e.tag === 6) {
                            if (a === null) {
                                A = e;
                                try {
                                    A.stateNode.nodeValue = l ? "" : A.memoizedProps;
                                } catch (dt) {
                                    Xt(A, A.return, dt);
                                }
                            }
                        } else if (e.tag === 18) {
                            if (a === null) {
                                A = e;
                                try {
                                    var F = A.stateNode;
                                    l ? Fy(F, !0) : Fy(A.stateNode, !1);
                                } catch (dt) {
                                    Xt(A, A.return, dt);
                                }
                            }
                        } else if (
                            ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
                            e.child !== null
                        ) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break t;
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t) break t;
                            a === e && (a = null), (e = e.return);
                        }
                        a === e && (a = null), (e.sibling.return = e.return), (e = e.sibling);
                    }
                s & 4 &&
                    ((s = t.updateQueue),
                    s !== null && ((a = s.retryQueue), a !== null && ((s.retryQueue = null), nu(t, a))));
                break;
            case 19:
                Xe(e, t), Qe(t), s & 4 && ((s = t.updateQueue), s !== null && ((t.updateQueue = null), nu(t, s)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                Xe(e, t), Qe(t);
        }
    }
    function Qe(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, s = t.return; s !== null; ) {
                    if (Jp(s)) {
                        a = s;
                        break;
                    }
                    s = s.return;
                }
                if (a == null) throw Error(o(160));
                switch (a.tag) {
                    case 27:
                        var l = a.stateNode,
                            c = cf(t);
                        eu(t, c, l);
                        break;
                    case 5:
                        var h = a.stateNode;
                        a.flags & 32 && (Kt(h, ""), (a.flags &= -33));
                        var v = cf(t);
                        eu(t, v, h);
                        break;
                    case 3:
                    case 4:
                        var A = a.stateNode.containerInfo,
                            Q = cf(t);
                        ff(t, Q, A);
                        break;
                    default:
                        throw Error(o(161));
                }
            } catch (J) {
                Xt(t, t.return, J);
            }
            t.flags &= -3;
        }
        e & 4096 && (t.flags &= -4097);
    }
    function uy(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                uy(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling);
            }
    }
    function Pn(t, e) {
        if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ny(t, e.alternate, e), (e = e.sibling);
    }
    function pa(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    xr(4, e, e.return), pa(e);
                    break;
                case 1:
                    Cn(e, e.return);
                    var a = e.stateNode;
                    typeof a.componentWillUnmount == "function" && Fp(e, e.return, a), pa(e);
                    break;
                case 27:
                    xo(e.stateNode);
                case 26:
                case 5:
                    Cn(e, e.return), pa(e);
                    break;
                case 22:
                    e.memoizedState === null && pa(e);
                    break;
                case 30:
                    pa(e);
                    break;
                default:
                    pa(e);
            }
            t = t.sibling;
        }
    }
    function Kn(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
            var s = e.alternate,
                l = t,
                c = e,
                h = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    Kn(l, c, a), mo(4, c);
                    break;
                case 1:
                    if ((Kn(l, c, a), (s = c), (l = s.stateNode), typeof l.componentDidMount == "function"))
                        try {
                            l.componentDidMount();
                        } catch (Q) {
                            Xt(s, s.return, Q);
                        }
                    if (((s = c), (l = s.updateQueue), l !== null)) {
                        var v = s.stateNode;
                        try {
                            var A = l.shared.hiddenCallbacks;
                            if (A !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < A.length; l++) jm(A[l], v);
                        } catch (Q) {
                            Xt(s, s.return, Q);
                        }
                    }
                    a && h & 64 && Wp(c), po(c, c.return);
                    break;
                case 27:
                    ty(c);
                case 26:
                case 5:
                    Kn(l, c, a), a && s === null && h & 4 && $p(c), po(c, c.return);
                    break;
                case 12:
                    Kn(l, c, a);
                    break;
                case 31:
                    Kn(l, c, a), a && h & 4 && iy(l, c);
                    break;
                case 13:
                    Kn(l, c, a), a && h & 4 && oy(l, c);
                    break;
                case 22:
                    c.memoizedState === null && Kn(l, c, a), po(c, c.return);
                    break;
                case 30:
                    break;
                default:
                    Kn(l, c, a);
            }
            e = e.sibling;
        }
    }
    function hf(t, e) {
        var a = null;
        t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
            (t = null),
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
            t !== a && (t != null && t.refCount++, a != null && to(a));
    }
    function mf(t, e) {
        (t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && to(t));
    }
    function bn(t, e, a, s) {
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ly(t, e, a, s), (e = e.sibling);
    }
    function ly(t, e, a, s) {
        var l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                bn(t, e, a, s), l & 2048 && mo(9, e);
                break;
            case 1:
                bn(t, e, a, s);
                break;
            case 3:
                bn(t, e, a, s),
                    l & 2048 &&
                        ((t = null),
                        e.alternate !== null && (t = e.alternate.memoizedState.cache),
                        (e = e.memoizedState.cache),
                        e !== t && (e.refCount++, t != null && to(t)));
                break;
            case 12:
                if (l & 2048) {
                    bn(t, e, a, s), (t = e.stateNode);
                    try {
                        var c = e.memoizedProps,
                            h = c.id,
                            v = c.onPostCommit;
                        typeof v == "function" &&
                            v(h, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                    } catch (A) {
                        Xt(e, e.return, A);
                    }
                } else bn(t, e, a, s);
                break;
            case 31:
                bn(t, e, a, s);
                break;
            case 13:
                bn(t, e, a, s);
                break;
            case 23:
                break;
            case 22:
                (c = e.stateNode),
                    (h = e.alternate),
                    e.memoizedState !== null
                        ? c._visibility & 2
                            ? bn(t, e, a, s)
                            : yo(t, e)
                        : c._visibility & 2
                          ? bn(t, e, a, s)
                          : ((c._visibility |= 2), ai(t, e, a, s, (e.subtreeFlags & 10256) !== 0 || !1)),
                    l & 2048 && hf(h, e);
                break;
            case 24:
                bn(t, e, a, s), l & 2048 && mf(e.alternate, e);
                break;
            default:
                bn(t, e, a, s);
        }
    }
    function ai(t, e, a, s, l) {
        for (l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
            var c = t,
                h = e,
                v = a,
                A = s,
                Q = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    ai(c, h, v, A, l), mo(8, h);
                    break;
                case 23:
                    break;
                case 22:
                    var J = h.stateNode;
                    h.memoizedState !== null
                        ? J._visibility & 2
                            ? ai(c, h, v, A, l)
                            : yo(c, h)
                        : ((J._visibility |= 2), ai(c, h, v, A, l)),
                        l && Q & 2048 && hf(h.alternate, h);
                    break;
                case 24:
                    ai(c, h, v, A, l), l && Q & 2048 && mf(h.alternate, h);
                    break;
                default:
                    ai(c, h, v, A, l);
            }
            e = e.sibling;
        }
    }
    function yo(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var a = t,
                    s = e,
                    l = s.flags;
                switch (s.tag) {
                    case 22:
                        yo(a, s), l & 2048 && hf(s.alternate, s);
                        break;
                    case 24:
                        yo(a, s), l & 2048 && mf(s.alternate, s);
                        break;
                    default:
                        yo(a, s);
                }
                e = e.sibling;
            }
    }
    var go = 8192;
    function ii(t, e, a) {
        if (t.subtreeFlags & go) for (t = t.child; t !== null; ) cy(t, e, a), (t = t.sibling);
    }
    function cy(t, e, a) {
        switch (t.tag) {
            case 26:
                ii(t, e, a), t.flags & go && t.memoizedState !== null && aS(a, _n, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                ii(t, e, a);
                break;
            case 3:
            case 4:
                var s = _n;
                (_n = yu(t.stateNode.containerInfo)), ii(t, e, a), (_n = s);
                break;
            case 22:
                t.memoizedState === null &&
                    ((s = t.alternate),
                    s !== null && s.memoizedState !== null
                        ? ((s = go), (go = 16777216), ii(t, e, a), (go = s))
                        : ii(t, e, a));
                break;
            default:
                ii(t, e, a);
        }
    }
    function fy(t) {
        var e = t.alternate;
        if (e !== null && ((t = e.child), t !== null)) {
            e.child = null;
            do (e = t.sibling), (t.sibling = null), (t = e);
            while (t !== null);
        }
    }
    function vo(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var s = e[a];
                    (Te = s), hy(s, t);
                }
            fy(t);
        }
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) dy(t), (t = t.sibling);
    }
    function dy(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                vo(t), t.flags & 2048 && xr(9, t, t.return);
                break;
            case 3:
                vo(t);
                break;
            case 12:
                vo(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
                    ? ((e._visibility &= -3), ru(t))
                    : vo(t);
                break;
            default:
                vo(t);
        }
    }
    function ru(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var s = e[a];
                    (Te = s), hy(s, t);
                }
            fy(t);
        }
        for (t = t.child; t !== null; ) {
            switch (((e = t), e.tag)) {
                case 0:
                case 11:
                case 15:
                    xr(8, e, e.return), ru(e);
                    break;
                case 22:
                    (a = e.stateNode), a._visibility & 2 && ((a._visibility &= -3), ru(e));
                    break;
                default:
                    ru(e);
            }
            t = t.sibling;
        }
    }
    function hy(t, e) {
        for (; Te !== null; ) {
            var a = Te;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    xr(8, a, e);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var s = a.memoizedState.cachePool.pool;
                        s != null && s.refCount++;
                    }
                    break;
                case 24:
                    to(a.memoizedState.cache);
            }
            if (((s = a.child), s !== null)) (s.return = a), (Te = s);
            else
                t: for (a = t; Te !== null; ) {
                    s = Te;
                    var l = s.sibling,
                        c = s.return;
                    if ((ry(s), s === a)) {
                        Te = null;
                        break t;
                    }
                    if (l !== null) {
                        (l.return = c), (Te = l);
                        break t;
                    }
                    Te = c;
                }
        }
    }
    var _1 = {
            getCacheForType: function (t) {
                var e = De(ge),
                    a = e.data.get(t);
                return a === void 0 && ((a = t()), e.data.set(t, a)), a;
            },
            cacheSignal: function () {
                return De(ge).controller.signal;
            },
        },
        b1 = typeof WeakMap == "function" ? WeakMap : Map,
        qt = 0,
        Jt = null,
        Rt = null,
        zt = 0,
        It = 0,
        Je = null,
        wr = !1,
        oi = !1,
        pf = !1,
        Zn = 0,
        se = 0,
        Or = 0,
        ya = 0,
        yf = 0,
        tn = 0,
        si = 0,
        _o = null,
        Ve = null,
        gf = !1,
        au = 0,
        my = 0,
        iu = 1 / 0,
        ou = null,
        Dr = null,
        Ee = 0,
        Ar = null,
        ui = null,
        Wn = 0,
        vf = 0,
        _f = null,
        py = null,
        bo = 0,
        bf = null;
    function en() {
        return (qt & 2) !== 0 && zt !== 0 ? zt & -zt : V.T !== null ? Of() : ys();
    }
    function yy() {
        if (tn === 0)
            if ((zt & 536870912) === 0 || Ut) {
                var t = Ca;
                (Ca <<= 1), (Ca & 3932160) === 0 && (Ca = 262144), (tn = t);
            } else tn = 536870912;
        return (t = Fe.current), t !== null && (t.flags |= 32), tn;
    }
    function Pe(t, e, a) {
        ((t === Jt && (It === 2 || It === 9)) || t.cancelPendingCommit !== null) && (li(t, 0), Mr(t, zt, tn, !1)),
            Jr(t, a),
            ((qt & 2) === 0 || t !== Jt) &&
                (t === Jt && ((qt & 2) === 0 && (ya |= a), se === 4 && Mr(t, zt, tn, !1)), Rn(t));
    }
    function gy(t, e, a) {
        if ((qt & 6) !== 0) throw Error(o(327));
        var s = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || $r(t, e),
            l = s ? T1(t, e) : Ef(t, e, !0),
            c = s;
        do {
            if (l === 0) {
                oi && !s && Mr(t, e, 0, !1);
                break;
            } else {
                if (((a = t.current.alternate), c && !S1(a))) {
                    (l = Ef(t, e, !1)), (c = !1);
                    continue;
                }
                if (l === 2) {
                    if (((c = e), t.errorRecoveryDisabledLanes & c)) var h = 0;
                    else (h = t.pendingLanes & -536870913), (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
                    if (h !== 0) {
                        e = h;
                        t: {
                            var v = t;
                            l = _o;
                            var A = v.current.memoizedState.isDehydrated;
                            if ((A && (li(v, h).flags |= 256), (h = Ef(v, h, !1)), h !== 2)) {
                                if (pf && !A) {
                                    (v.errorRecoveryDisabledLanes |= c), (ya |= c), (l = 4);
                                    break t;
                                }
                                (c = Ve), (Ve = l), c !== null && (Ve === null ? (Ve = c) : Ve.push.apply(Ve, c));
                            }
                            l = h;
                        }
                        if (((c = !1), l !== 2)) continue;
                    }
                }
                if (l === 1) {
                    li(t, 0), Mr(t, e, 0, !0);
                    break;
                }
                t: {
                    switch (((s = t), (c = l), c)) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Mr(s, e, tn, !wr);
                            break t;
                        case 2:
                            Ve = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329));
                    }
                    if ((e & 62914560) === e && ((l = au + 300 - Ne()), 10 < l)) {
                        if ((Mr(s, e, tn, !wr), Na(s, 0, !0) !== 0)) break t;
                        (Wn = e),
                            (s.timeoutHandle = Ky(
                                vy.bind(null, s, a, Ve, ou, gf, e, tn, ya, si, wr, c, "Throttled", -0, 0),
                                l
                            ));
                        break t;
                    }
                    vy(s, a, Ve, ou, gf, e, tn, ya, si, wr, c, null, -0, 0);
                }
            }
            break;
        } while (!0);
        Rn(t);
    }
    function vy(t, e, a, s, l, c, h, v, A, Q, J, nt, K, F) {
        if (((t.timeoutHandle = -1), (nt = e.subtreeFlags), nt & 8192 || (nt & 16785408) === 16785408)) {
            (nt = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: gn,
            }),
                cy(e, c, nt);
            var dt = (c & 62914560) === c ? au - Ne() : (c & 4194048) === c ? my - Ne() : 0;
            if (((dt = iS(nt, dt)), dt !== null)) {
                (Wn = c),
                    (t.cancelPendingCommit = dt(Oy.bind(null, t, e, c, a, s, l, h, v, A, J, nt, null, K, F))),
                    Mr(t, c, h, !Q);
                return;
            }
        }
        Oy(t, e, c, a, s, l, h, v, A);
    }
    function S1(t) {
        for (var e = t; ; ) {
            var a = e.tag;
            if (
                (a === 0 || a === 11 || a === 15) &&
                e.flags & 16384 &&
                ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
            )
                for (var s = 0; s < a.length; s++) {
                    var l = a[s],
                        c = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ze(c(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((a = e.child), e.subtreeFlags & 16384 && a !== null)) (a.return = e), (e = a);
            else {
                if (e === t) break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        }
        return !0;
    }
    function Mr(t, e, a, s) {
        (e &= ~yf),
            (e &= ~ya),
            (t.suspendedLanes |= e),
            (t.pingedLanes &= ~e),
            s && (t.warmLanes |= e),
            (s = t.expirationTimes);
        for (var l = e; 0 < l; ) {
            var c = 31 - Le(l),
                h = 1 << c;
            (s[c] = -1), (l &= ~h);
        }
        a !== 0 && hs(t, a, e);
    }
    function su() {
        return (qt & 6) === 0 ? (So(0), !1) : !0;
    }
    function Sf() {
        if (Rt !== null) {
            if (It === 0) var t = Rt.return;
            else (t = Rt), (jn = sa = null), Lc(t), (Ja = null), (no = 0), (t = Rt);
            for (; t !== null; ) Zp(t.alternate, t), (t = t.return);
            Rt = null;
        }
    }
    function li(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && ((t.timeoutHandle = -1), q1(a)),
            (a = t.cancelPendingCommit),
            a !== null && ((t.cancelPendingCommit = null), a()),
            (Wn = 0),
            Sf(),
            (Jt = t),
            (Rt = a = Hn(t.current, null)),
            (zt = e),
            (It = 0),
            (Je = null),
            (wr = !1),
            (oi = $r(t, e)),
            (pf = !1),
            (si = tn = yf = ya = Or = se = 0),
            (Ve = _o = null),
            (gf = !1),
            (e & 8) !== 0 && (e |= e & 32);
        var s = t.entangledLanes;
        if (s !== 0)
            for (t = t.entanglements, s &= e; 0 < s; ) {
                var l = 31 - Le(s),
                    c = 1 << l;
                (e |= t[l]), (s &= ~c);
            }
        return (Zn = e), As(), a;
    }
    function _y(t, e) {
        (xt = null),
            (V.H = co),
            e === $a || e === Ls
                ? ((e = Um()), (It = 3))
                : e === xc
                  ? ((e = Um()), (It = 4))
                  : (It = e === $c ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1),
            (Je = e),
            Rt === null && ((se = 1), Ws(t, ln(e, t.current)));
    }
    function by() {
        var t = Fe.current;
        return t === null
            ? !0
            : (zt & 4194048) === zt
              ? hn === null
              : (zt & 62914560) === zt || (zt & 536870912) !== 0
                ? t === hn
                : !1;
    }
    function Sy() {
        var t = V.H;
        return (V.H = co), t === null ? co : t;
    }
    function Ey() {
        var t = V.A;
        return (V.A = _1), t;
    }
    function uu() {
        (se = 4),
            wr || ((zt & 4194048) !== zt && Fe.current !== null) || (oi = !0),
            ((Or & 134217727) === 0 && (ya & 134217727) === 0) || Jt === null || Mr(Jt, zt, tn, !1);
    }
    function Ef(t, e, a) {
        var s = qt;
        qt |= 2;
        var l = Sy(),
            c = Ey();
        (Jt !== t || zt !== e) && ((ou = null), li(t, e)), (e = !1);
        var h = se;
        t: do
            try {
                if (It !== 0 && Rt !== null) {
                    var v = Rt,
                        A = Je;
                    switch (It) {
                        case 8:
                            Sf(), (h = 6);
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Fe.current === null && (e = !0);
                            var Q = It;
                            if (((It = 0), (Je = null), ci(t, v, A, Q), a && oi)) {
                                h = 0;
                                break t;
                            }
                            break;
                        default:
                            (Q = It), (It = 0), (Je = null), ci(t, v, A, Q);
                    }
                }
                E1(), (h = se);
                break;
            } catch (J) {
                _y(t, J);
            }
        while (!0);
        return (
            e && t.shellSuspendCounter++,
            (jn = sa = null),
            (qt = s),
            (V.H = l),
            (V.A = c),
            Rt === null && ((Jt = null), (zt = 0), As()),
            h
        );
    }
    function E1() {
        for (; Rt !== null; ) Ty(Rt);
    }
    function T1(t, e) {
        var a = qt;
        qt |= 2;
        var s = Sy(),
            l = Ey();
        Jt !== t || zt !== e ? ((ou = null), (iu = Ne() + 500), li(t, e)) : (oi = $r(t, e));
        t: do
            try {
                if (It !== 0 && Rt !== null) {
                    e = Rt;
                    var c = Je;
                    e: switch (It) {
                        case 1:
                            (It = 0), (Je = null), ci(t, e, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (zm(c)) {
                                (It = 0), (Je = null), xy(e);
                                break;
                            }
                            (e = function () {
                                (It !== 2 && It !== 9) || Jt !== t || (It = 7), Rn(t);
                            }),
                                c.then(e, e);
                            break t;
                        case 3:
                            It = 7;
                            break t;
                        case 4:
                            It = 5;
                            break t;
                        case 7:
                            zm(c) ? ((It = 0), (Je = null), xy(e)) : ((It = 0), (Je = null), ci(t, e, c, 7));
                            break;
                        case 5:
                            var h = null;
                            switch (Rt.tag) {
                                case 26:
                                    h = Rt.memoizedState;
                                case 5:
                                case 27:
                                    var v = Rt;
                                    if (h ? lg(h) : v.stateNode.complete) {
                                        (It = 0), (Je = null);
                                        var A = v.sibling;
                                        if (A !== null) Rt = A;
                                        else {
                                            var Q = v.return;
                                            Q !== null ? ((Rt = Q), lu(Q)) : (Rt = null);
                                        }
                                        break e;
                                    }
                            }
                            (It = 0), (Je = null), ci(t, e, c, 5);
                            break;
                        case 6:
                            (It = 0), (Je = null), ci(t, e, c, 6);
                            break;
                        case 8:
                            Sf(), (se = 6);
                            break t;
                        default:
                            throw Error(o(462));
                    }
                }
                x1();
                break;
            } catch (J) {
                _y(t, J);
            }
        while (!0);
        return (jn = sa = null), (V.H = s), (V.A = l), (qt = a), Rt !== null ? 0 : ((Jt = null), (zt = 0), As(), se);
    }
    function x1() {
        for (; Rt !== null && !is(); ) Ty(Rt);
    }
    function Ty(t) {
        var e = Pp(t.alternate, t, Zn);
        (t.memoizedProps = t.pendingProps), e === null ? lu(t) : (Rt = e);
    }
    function xy(t) {
        var e = t,
            a = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = qp(a, e, e.pendingProps, e.type, void 0, zt);
                break;
            case 11:
                e = qp(a, e, e.pendingProps, e.type.render, e.ref, zt);
                break;
            case 5:
                Lc(e);
            default:
                Zp(a, e), (e = Rt = Em(e, Zn)), (e = Pp(a, e, Zn));
        }
        (t.memoizedProps = t.pendingProps), e === null ? lu(t) : (Rt = e);
    }
    function ci(t, e, a, s) {
        (jn = sa = null), Lc(e), (Ja = null), (no = 0);
        var l = e.return;
        try {
            if (d1(t, l, e, a, zt)) {
                (se = 1), Ws(t, ln(a, t.current)), (Rt = null);
                return;
            }
        } catch (c) {
            if (l !== null) throw ((Rt = l), c);
            (se = 1), Ws(t, ln(a, t.current)), (Rt = null);
            return;
        }
        e.flags & 32768
            ? (Ut || s === 1
                  ? (t = !0)
                  : oi || (zt & 536870912) !== 0
                    ? (t = !1)
                    : ((wr = t = !0),
                      (s === 2 || s === 9 || s === 3 || s === 6) &&
                          ((s = Fe.current), s !== null && s.tag === 13 && (s.flags |= 16384))),
              wy(e, t))
            : lu(e);
    }
    function lu(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                wy(e, wr);
                return;
            }
            t = e.return;
            var a = p1(e.alternate, e, Zn);
            if (a !== null) {
                Rt = a;
                return;
            }
            if (((e = e.sibling), e !== null)) {
                Rt = e;
                return;
            }
            Rt = e = t;
        } while (e !== null);
        se === 0 && (se = 5);
    }
    function wy(t, e) {
        do {
            var a = y1(t.alternate, t);
            if (a !== null) {
                (a.flags &= 32767), (Rt = a);
                return;
            }
            if (
                ((a = t.return),
                a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
                !e && ((t = t.sibling), t !== null))
            ) {
                Rt = t;
                return;
            }
            Rt = t = a;
        } while (t !== null);
        (se = 6), (Rt = null);
    }
    function Oy(t, e, a, s, l, c, h, v, A) {
        t.cancelPendingCommit = null;
        do cu();
        while (Ee !== 0);
        if ((qt & 6) !== 0) throw Error(o(327));
        if (e !== null) {
            if (e === t.current) throw Error(o(177));
            if (
                ((c = e.lanes | e.childLanes),
                (c |= lc),
                Gl(t, a, c, h, v, A),
                t === Jt && ((Rt = Jt = null), (zt = 0)),
                (ui = e),
                (Ar = t),
                (Wn = a),
                (vf = c),
                (_f = l),
                (py = s),
                (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                    ? ((t.callbackNode = null),
                      (t.callbackPriority = 0),
                      A1(Fr, function () {
                          return Ry(), null;
                      }))
                    : ((t.callbackNode = null), (t.callbackPriority = 0)),
                (s = (e.flags & 13878) !== 0),
                (e.subtreeFlags & 13878) !== 0 || s)
            ) {
                (s = V.T), (V.T = null), (l = st.p), (st.p = 2), (h = qt), (qt |= 4);
                try {
                    g1(t, e, a);
                } finally {
                    (qt = h), (st.p = l), (V.T = s);
                }
            }
            (Ee = 1), Dy(), Ay(), My();
        }
    }
    function Dy() {
        if (Ee === 1) {
            Ee = 0;
            var t = Ar,
                e = ui,
                a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                (a = V.T), (V.T = null);
                var s = st.p;
                st.p = 2;
                var l = qt;
                qt |= 4;
                try {
                    sy(e, t);
                    var c = Bf,
                        h = hm(t.containerInfo),
                        v = c.focusedElem,
                        A = c.selectionRange;
                    if (h !== v && v && v.ownerDocument && dm(v.ownerDocument.documentElement, v)) {
                        if (A !== null && ac(v)) {
                            var Q = A.start,
                                J = A.end;
                            if ((J === void 0 && (J = Q), "selectionStart" in v))
                                (v.selectionStart = Q), (v.selectionEnd = Math.min(J, v.value.length));
                            else {
                                var nt = v.ownerDocument || document,
                                    K = (nt && nt.defaultView) || window;
                                if (K.getSelection) {
                                    var F = K.getSelection(),
                                        dt = v.textContent.length,
                                        vt = Math.min(A.start, dt),
                                        Ft = A.end === void 0 ? vt : Math.min(A.end, dt);
                                    !F.extend && vt > Ft && ((h = Ft), (Ft = vt), (vt = h));
                                    var H = fm(v, vt),
                                        N = fm(v, Ft);
                                    if (
                                        H &&
                                        N &&
                                        (F.rangeCount !== 1 ||
                                            F.anchorNode !== H.node ||
                                            F.anchorOffset !== H.offset ||
                                            F.focusNode !== N.node ||
                                            F.focusOffset !== N.offset)
                                    ) {
                                        var X = nt.createRange();
                                        X.setStart(H.node, H.offset),
                                            F.removeAllRanges(),
                                            vt > Ft
                                                ? (F.addRange(X), F.extend(N.node, N.offset))
                                                : (X.setEnd(N.node, N.offset), F.addRange(X));
                                    }
                                }
                            }
                        }
                        for (nt = [], F = v; (F = F.parentNode); )
                            F.nodeType === 1 && nt.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
                        for (typeof v.focus == "function" && v.focus(), v = 0; v < nt.length; v++) {
                            var et = nt[v];
                            (et.element.scrollLeft = et.left), (et.element.scrollTop = et.top);
                        }
                    }
                    (Eu = !!zf), (Bf = zf = null);
                } finally {
                    (qt = l), (st.p = s), (V.T = a);
                }
            }
            (t.current = e), (Ee = 2);
        }
    }
    function Ay() {
        if (Ee === 2) {
            Ee = 0;
            var t = Ar,
                e = ui,
                a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                (a = V.T), (V.T = null);
                var s = st.p;
                st.p = 2;
                var l = qt;
                qt |= 4;
                try {
                    ny(t, e.alternate, e);
                } finally {
                    (qt = l), (st.p = s), (V.T = a);
                }
            }
            Ee = 3;
        }
    }
    function My() {
        if (Ee === 4 || Ee === 3) {
            (Ee = 0), os();
            var t = Ar,
                e = ui,
                a = Wn,
                s = py;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                ? (Ee = 5)
                : ((Ee = 0), (ui = Ar = null), Cy(t, t.pendingLanes));
            var l = t.pendingLanes;
            if ((l === 0 && (Dr = null), ki(a), (e = e.stateNode), we && typeof we.onCommitFiberRoot == "function"))
                try {
                    we.onCommitFiberRoot(ur, e, void 0, (e.current.flags & 128) === 128);
                } catch {}
            if (s !== null) {
                (e = V.T), (l = st.p), (st.p = 2), (V.T = null);
                try {
                    for (var c = t.onRecoverableError, h = 0; h < s.length; h++) {
                        var v = s[h];
                        c(v.value, { componentStack: v.stack });
                    }
                } finally {
                    (V.T = e), (st.p = l);
                }
            }
            (Wn & 3) !== 0 && cu(),
                Rn(t),
                (l = t.pendingLanes),
                (a & 261930) !== 0 && (l & 42) !== 0 ? (t === bf ? bo++ : ((bo = 0), (bf = t))) : (bo = 0),
                So(0);
        }
    }
    function Cy(t, e) {
        (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), to(e)));
    }
    function cu() {
        return Dy(), Ay(), My(), Ry();
    }
    function Ry() {
        if (Ee !== 5) return !1;
        var t = Ar,
            e = vf;
        vf = 0;
        var a = ki(Wn),
            s = V.T,
            l = st.p;
        try {
            (st.p = 32 > a ? 32 : a), (V.T = null), (a = _f), (_f = null);
            var c = Ar,
                h = Wn;
            if (((Ee = 0), (ui = Ar = null), (Wn = 0), (qt & 6) !== 0)) throw Error(o(331));
            var v = qt;
            if (
                ((qt |= 4),
                dy(c.current),
                ly(c, c.current, h, a),
                (qt = v),
                So(0, !1),
                we && typeof we.onPostCommitFiberRoot == "function")
            )
                try {
                    we.onPostCommitFiberRoot(ur, c);
                } catch {}
            return !0;
        } finally {
            (st.p = l), (V.T = s), Cy(t, e);
        }
    }
    function Ny(t, e, a) {
        (e = ln(a, e)), (e = Fc(t.stateNode, e, 2)), (t = Sr(t, e, 2)), t !== null && (Jr(t, 2), Rn(t));
    }
    function Xt(t, e, a) {
        if (t.tag === 3) Ny(t, t, a);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    Ny(e, t, a);
                    break;
                } else if (e.tag === 1) {
                    var s = e.stateNode;
                    if (
                        typeof e.type.getDerivedStateFromError == "function" ||
                        (typeof s.componentDidCatch == "function" && (Dr === null || !Dr.has(s)))
                    ) {
                        (t = ln(a, t)), (a = zp(2)), (s = Sr(e, a, 2)), s !== null && (Bp(a, s, e, t), Jr(s, 2), Rn(s));
                        break;
                    }
                }
                e = e.return;
            }
    }
    function Tf(t, e, a) {
        var s = t.pingCache;
        if (s === null) {
            s = t.pingCache = new b1();
            var l = new Set();
            s.set(e, l);
        } else (l = s.get(e)), l === void 0 && ((l = new Set()), s.set(e, l));
        l.has(a) || ((pf = !0), l.add(a), (t = w1.bind(null, t, e, a)), e.then(t, t));
    }
    function w1(t, e, a) {
        var s = t.pingCache;
        s !== null && s.delete(e),
            (t.pingedLanes |= t.suspendedLanes & a),
            (t.warmLanes &= ~a),
            Jt === t &&
                (zt & a) === a &&
                (se === 4 || (se === 3 && (zt & 62914560) === zt && 300 > Ne() - au)
                    ? (qt & 2) === 0 && li(t, 0)
                    : (yf |= a),
                si === zt && (si = 0)),
            Rn(t);
    }
    function zy(t, e) {
        e === 0 && (e = ds()), (t = aa(t, e)), t !== null && (Jr(t, e), Rn(t));
    }
    function O1(t) {
        var e = t.memoizedState,
            a = 0;
        e !== null && (a = e.retryLane), zy(t, a);
    }
    function D1(t, e) {
        var a = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var s = t.stateNode,
                    l = t.memoizedState;
                l !== null && (a = l.retryLane);
                break;
            case 19:
                s = t.stateNode;
                break;
            case 22:
                s = t.stateNode._retryCache;
                break;
            default:
                throw Error(o(314));
        }
        s !== null && s.delete(e), zy(t, a);
    }
    function A1(t, e) {
        return Zr(t, e);
    }
    var fu = null,
        fi = null,
        xf = !1,
        du = !1,
        wf = !1,
        Cr = 0;
    function Rn(t) {
        t !== fi && t.next === null && (fi === null ? (fu = fi = t) : (fi = fi.next = t)),
            (du = !0),
            xf || ((xf = !0), C1());
    }
    function So(t, e) {
        if (!wf && du) {
            wf = !0;
            do
                for (var a = !1, s = fu; s !== null; ) {
                    if (t !== 0) {
                        var l = s.pendingLanes;
                        if (l === 0) var c = 0;
                        else {
                            var h = s.suspendedLanes,
                                v = s.pingedLanes;
                            (c = (1 << (31 - Le(42 | t) + 1)) - 1),
                                (c &= l & ~(h & ~v)),
                                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
                        }
                        c !== 0 && ((a = !0), Hy(s, c));
                    } else
                        (c = zt),
                            (c = Na(s, s === Jt ? c : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1)),
                            (c & 3) === 0 || $r(s, c) || ((a = !0), Hy(s, c));
                    s = s.next;
                }
            while (a);
            wf = !1;
        }
    }
    function M1() {
        By();
    }
    function By() {
        du = xf = !1;
        var t = 0;
        Cr !== 0 && Y1() && (t = Cr);
        for (var e = Ne(), a = null, s = fu; s !== null; ) {
            var l = s.next,
                c = Uy(s, e);
            c === 0
                ? ((s.next = null), a === null ? (fu = l) : (a.next = l), l === null && (fi = a))
                : ((a = s), (t !== 0 || (c & 3) !== 0) && (du = !0)),
                (s = l);
        }
        (Ee !== 0 && Ee !== 5) || So(t), Cr !== 0 && (Cr = 0);
    }
    function Uy(t, e) {
        for (
            var a = t.suspendedLanes, s = t.pingedLanes, l = t.expirationTimes, c = t.pendingLanes & -62914561;
            0 < c;

        ) {
            var h = 31 - Le(c),
                v = 1 << h,
                A = l[h];
            A === -1 ? ((v & a) === 0 || (v & s) !== 0) && (l[h] = ql(v, e)) : A <= e && (t.expiredLanes |= v),
                (c &= ~v);
        }
        if (
            ((e = Jt),
            (a = zt),
            (a = Na(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
            (s = t.callbackNode),
            a === 0 || (t === e && (It === 2 || It === 9)) || t.cancelPendingCommit !== null)
        )
            return s !== null && s !== null && Wr(s), (t.callbackNode = null), (t.callbackPriority = 0);
        if ((a & 3) === 0 || $r(t, a)) {
            if (((e = a & -a), e === t.callbackPriority)) return e;
            switch ((s !== null && Wr(s), ki(a))) {
                case 2:
                case 8:
                    a = Bi;
                    break;
                case 32:
                    a = Fr;
                    break;
                case 268435456:
                    a = Ui;
                    break;
                default:
                    a = Fr;
            }
            return (s = Ly.bind(null, t)), (a = Zr(a, s)), (t.callbackPriority = e), (t.callbackNode = a), e;
        }
        return s !== null && s !== null && Wr(s), (t.callbackPriority = 2), (t.callbackNode = null), 2;
    }
    function Ly(t, e) {
        if (Ee !== 0 && Ee !== 5) return (t.callbackNode = null), (t.callbackPriority = 0), null;
        var a = t.callbackNode;
        if (cu() && t.callbackNode !== a) return null;
        var s = zt;
        return (
            (s = Na(t, t === Jt ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
            s === 0
                ? null
                : (gy(t, s, e), Uy(t, Ne()), t.callbackNode != null && t.callbackNode === a ? Ly.bind(null, t) : null)
        );
    }
    function Hy(t, e) {
        if (cu()) return null;
        gy(t, e, !0);
    }
    function C1() {
        G1(function () {
            (qt & 6) !== 0 ? Zr(zi, M1) : By();
        });
    }
    function Of() {
        if (Cr === 0) {
            var t = Wa;
            t === 0 && ((t = Ke), (Ke <<= 1), (Ke & 261888) === 0 && (Ke = 256)), (Cr = t);
        }
        return Cr;
    }
    function ky(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean"
            ? null
            : typeof t == "function"
              ? t
              : Ha("" + t);
    }
    function jy(t, e) {
        var a = e.ownerDocument.createElement("input");
        return (
            (a.name = e.name),
            (a.value = e.value),
            t.id && a.setAttribute("form", t.id),
            e.parentNode.insertBefore(a, e),
            (t = new FormData(t)),
            a.parentNode.removeChild(a),
            t
        );
    }
    function R1(t, e, a, s, l) {
        if (e === "submit" && a && a.stateNode === l) {
            var c = ky((l[ze] || null).action),
                h = s.submitter;
            h &&
                ((e = (e = h[ze] || null) ? ky(e.formAction) : h.getAttribute("formAction")),
                e !== null && ((c = e), (h = null)));
            var v = new xs("action", "action", null, s, l);
            t.push({
                event: v,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (s.defaultPrevented) {
                                if (Cr !== 0) {
                                    var A = h ? jy(l, h) : new FormData(l);
                                    Qc(a, { pending: !0, data: A, method: l.method, action: c }, null, A);
                                }
                            } else
                                typeof c == "function" &&
                                    (v.preventDefault(),
                                    (A = h ? jy(l, h) : new FormData(l)),
                                    Qc(a, { pending: !0, data: A, method: l.method, action: c }, c, A));
                        },
                        currentTarget: l,
                    },
                ],
            });
        }
    }
    for (var Df = 0; Df < uc.length; Df++) {
        var Af = uc[Df],
            N1 = Af.toLowerCase(),
            z1 = Af[0].toUpperCase() + Af.slice(1);
        vn(N1, "on" + z1);
    }
    vn(ym, "onAnimationEnd"),
        vn(gm, "onAnimationIteration"),
        vn(vm, "onAnimationStart"),
        vn("dblclick", "onDoubleClick"),
        vn("focusin", "onFocus"),
        vn("focusout", "onBlur"),
        vn(Zb, "onTransitionRun"),
        vn(Wb, "onTransitionStart"),
        vn(Fb, "onTransitionCancel"),
        vn(_m, "onTransitionEnd"),
        Dn("onMouseEnter", ["mouseout", "mouseover"]),
        Dn("onMouseLeave", ["mouseout", "mouseover"]),
        Dn("onPointerEnter", ["pointerout", "pointerover"]),
        Dn("onPointerLeave", ["pointerout", "pointerover"]),
        sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        sn(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
        ),
        sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Eo =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        B1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));
    function Yy(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var s = t[a],
                l = s.event;
            s = s.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var h = s.length - 1; 0 <= h; h--) {
                        var v = s[h],
                            A = v.instance,
                            Q = v.currentTarget;
                        if (((v = v.listener), A !== c && l.isPropagationStopped())) break t;
                        (c = v), (l.currentTarget = Q);
                        try {
                            c(l);
                        } catch (J) {
                            Ds(J);
                        }
                        (l.currentTarget = null), (c = A);
                    }
                else
                    for (h = 0; h < s.length; h++) {
                        if (
                            ((v = s[h]),
                            (A = v.instance),
                            (Q = v.currentTarget),
                            (v = v.listener),
                            A !== c && l.isPropagationStopped())
                        )
                            break t;
                        (c = v), (l.currentTarget = Q);
                        try {
                            c(l);
                        } catch (J) {
                            Ds(J);
                        }
                        (l.currentTarget = null), (c = A);
                    }
            }
        }
    }
    function Nt(t, e) {
        var a = e[ji];
        a === void 0 && (a = e[ji] = new Set());
        var s = t + "__bubble";
        a.has(s) || (qy(e, t, 2, !1), a.add(s));
    }
    function Mf(t, e, a) {
        var s = 0;
        e && (s |= 4), qy(a, t, s, e);
    }
    var hu = "_reactListening" + Math.random().toString(36).slice(2);
    function Cf(t) {
        if (!t[hu]) {
            (t[hu] = !0),
                Un.forEach(function (a) {
                    a !== "selectionchange" && (B1.has(a) || Mf(a, !1, t), Mf(a, !0, t));
                });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[hu] || ((e[hu] = !0), Mf("selectionchange", !1, e));
        }
    }
    function qy(t, e, a, s) {
        switch (yg(e)) {
            case 2:
                var l = uS;
                break;
            case 8:
                l = lS;
                break;
            default:
                l = Qf;
        }
        (a = l.bind(null, e, a, t)),
            (l = void 0),
            !Zl || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (l = !0),
            s
                ? l !== void 0
                    ? t.addEventListener(e, a, { capture: !0, passive: l })
                    : t.addEventListener(e, a, !0)
                : l !== void 0
                  ? t.addEventListener(e, a, { passive: l })
                  : t.addEventListener(e, a, !1);
    }
    function Rf(t, e, a, s, l) {
        var c = s;
        if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
            t: for (;;) {
                if (s === null) return;
                var h = s.tag;
                if (h === 3 || h === 4) {
                    var v = s.stateNode.containerInfo;
                    if (v === l) break;
                    if (h === 4)
                        for (h = s.return; h !== null; ) {
                            var A = h.tag;
                            if ((A === 3 || A === 4) && h.stateNode.containerInfo === l) return;
                            h = h.return;
                        }
                    for (; v !== null; ) {
                        if (((h = cr(v)), h === null)) return;
                        if (((A = h.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
                            s = c = h;
                            continue t;
                        }
                        v = v.parentNode;
                    }
                }
                s = s.return;
            }
        Vh(function () {
            var Q = c,
                J = Pl(a),
                nt = [];
            t: {
                var K = bm.get(t);
                if (K !== void 0) {
                    var F = xs,
                        dt = t;
                    switch (t) {
                        case "keypress":
                            if (Es(a) === 0) break t;
                        case "keydown":
                        case "keyup":
                            F = Db;
                            break;
                        case "focusin":
                            (dt = "focus"), (F = Jl);
                            break;
                        case "focusout":
                            (dt = "blur"), (F = Jl);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            F = Jl;
                            break;
                        case "click":
                            if (a.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            F = Zh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            F = pb;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            F = Cb;
                            break;
                        case ym:
                        case gm:
                        case vm:
                            F = vb;
                            break;
                        case _m:
                            F = Nb;
                            break;
                        case "scroll":
                        case "scrollend":
                            F = hb;
                            break;
                        case "wheel":
                            F = Bb;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            F = bb;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            F = Fh;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            F = Lb;
                    }
                    var vt = (e & 4) !== 0,
                        Ft = !vt && (t === "scroll" || t === "scrollend"),
                        H = vt ? (K !== null ? K + "Capture" : null) : K;
                    vt = [];
                    for (var N = Q, X; N !== null; ) {
                        var et = N;
                        if (
                            ((X = et.stateNode),
                            (et = et.tag),
                            (et !== 5 && et !== 26 && et !== 27) ||
                                X === null ||
                                H === null ||
                                ((et = Ii(N, H)), et != null && vt.push(To(N, et, X))),
                            Ft)
                        )
                            break;
                        N = N.return;
                    }
                    0 < vt.length && ((K = new F(K, dt, null, a, J)), nt.push({ event: K, listeners: vt }));
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (
                        ((K = t === "mouseover" || t === "pointerover"),
                        (F = t === "mouseout" || t === "pointerout"),
                        K && a !== ka && (dt = a.relatedTarget || a.fromElement) && (cr(dt) || dt[lr]))
                    )
                        break t;
                    if (
                        (F || K) &&
                        ((K = J.window === J ? J : (K = J.ownerDocument) ? K.defaultView || K.parentWindow : window),
                        F
                            ? ((dt = a.relatedTarget || a.toElement),
                              (F = Q),
                              (dt = dt ? cr(dt) : null),
                              dt !== null &&
                                  ((Ft = f(dt)), (vt = dt.tag), dt !== Ft || (vt !== 5 && vt !== 27 && vt !== 6)) &&
                                  (dt = null))
                            : ((F = null), (dt = Q)),
                        F !== dt)
                    ) {
                        if (
                            ((vt = Zh),
                            (et = "onMouseLeave"),
                            (H = "onMouseEnter"),
                            (N = "mouse"),
                            (t === "pointerout" || t === "pointerover") &&
                                ((vt = Fh), (et = "onPointerLeave"), (H = "onPointerEnter"), (N = "pointer")),
                            (Ft = F == null ? K : dr(F)),
                            (X = dt == null ? K : dr(dt)),
                            (K = new vt(et, N + "leave", F, a, J)),
                            (K.target = Ft),
                            (K.relatedTarget = X),
                            (et = null),
                            cr(J) === Q &&
                                ((vt = new vt(H, N + "enter", dt, a, J)),
                                (vt.target = X),
                                (vt.relatedTarget = Ft),
                                (et = vt)),
                            (Ft = et),
                            F && dt)
                        )
                            e: {
                                for (vt = U1, H = F, N = dt, X = 0, et = H; et; et = vt(et)) X++;
                                et = 0;
                                for (var gt = N; gt; gt = vt(gt)) et++;
                                for (; 0 < X - et; ) (H = vt(H)), X--;
                                for (; 0 < et - X; ) (N = vt(N)), et--;
                                for (; X--; ) {
                                    if (H === N || (N !== null && H === N.alternate)) {
                                        vt = H;
                                        break e;
                                    }
                                    (H = vt(H)), (N = vt(N));
                                }
                                vt = null;
                            }
                        else vt = null;
                        F !== null && Gy(nt, K, F, vt, !1), dt !== null && Ft !== null && Gy(nt, Ft, dt, vt, !0);
                    }
                }
                t: {
                    if (
                        ((K = Q ? dr(Q) : window),
                        (F = K.nodeName && K.nodeName.toLowerCase()),
                        F === "select" || (F === "input" && K.type === "file"))
                    )
                        var jt = im;
                    else if (rm(K))
                        if (om) jt = Vb;
                        else {
                            jt = Xb;
                            var pt = Ib;
                        }
                    else
                        (F = K.nodeName),
                            !F || F.toLowerCase() !== "input" || (K.type !== "checkbox" && K.type !== "radio")
                                ? Q && qi(Q.elementType) && (jt = im)
                                : (jt = Qb);
                    if (jt && (jt = jt(t, Q))) {
                        am(nt, jt, a, J);
                        break t;
                    }
                    pt && pt(t, K, Q),
                        t === "focusout" &&
                            Q &&
                            K.type === "number" &&
                            Q.memoizedProps.value != null &&
                            Tt(K, "number", K.value);
                }
                switch (((pt = Q ? dr(Q) : window), t)) {
                    case "focusin":
                        (rm(pt) || pt.contentEditable === "true") && ((Ga = pt), (ic = Q), (Fi = null));
                        break;
                    case "focusout":
                        Fi = ic = Ga = null;
                        break;
                    case "mousedown":
                        oc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (oc = !1), mm(nt, a, J);
                        break;
                    case "selectionchange":
                        if (Kb) break;
                    case "keydown":
                    case "keyup":
                        mm(nt, a, J);
                }
                var Ot;
                if (ec)
                    t: {
                        switch (t) {
                            case "compositionstart":
                                var Bt = "onCompositionStart";
                                break t;
                            case "compositionend":
                                Bt = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                Bt = "onCompositionUpdate";
                                break t;
                        }
                        Bt = void 0;
                    }
                else
                    qa
                        ? em(t, a) && (Bt = "onCompositionEnd")
                        : t === "keydown" && a.keyCode === 229 && (Bt = "onCompositionStart");
                Bt &&
                    ($h &&
                        a.locale !== "ko" &&
                        (qa || Bt !== "onCompositionStart"
                            ? Bt === "onCompositionEnd" && qa && (Ot = Ph())
                            : ((mr = J), (Wl = "value" in mr ? mr.value : mr.textContent), (qa = !0))),
                    (pt = mu(Q, Bt)),
                    0 < pt.length &&
                        ((Bt = new Wh(Bt, t, null, a, J)),
                        nt.push({ event: Bt, listeners: pt }),
                        Ot ? (Bt.data = Ot) : ((Ot = nm(a)), Ot !== null && (Bt.data = Ot)))),
                    (Ot = kb ? jb(t, a) : Yb(t, a)) &&
                        ((Bt = mu(Q, "onBeforeInput")),
                        0 < Bt.length &&
                            ((pt = new Wh("onBeforeInput", "beforeinput", null, a, J)),
                            nt.push({ event: pt, listeners: Bt }),
                            (pt.data = Ot))),
                    R1(nt, t, Q, a, J);
            }
            Yy(nt, e);
        });
    }
    function To(t, e, a) {
        return { instance: t, listener: e, currentTarget: a };
    }
    function mu(t, e) {
        for (var a = e + "Capture", s = []; t !== null; ) {
            var l = t,
                c = l.stateNode;
            if (
                ((l = l.tag),
                (l !== 5 && l !== 26 && l !== 27) ||
                    c === null ||
                    ((l = Ii(t, a)),
                    l != null && s.unshift(To(t, l, c)),
                    (l = Ii(t, e)),
                    l != null && s.push(To(t, l, c))),
                t.tag === 3)
            )
                return s;
            t = t.return;
        }
        return [];
    }
    function U1(t) {
        if (t === null) return null;
        do t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null;
    }
    function Gy(t, e, a, s, l) {
        for (var c = e._reactName, h = []; a !== null && a !== s; ) {
            var v = a,
                A = v.alternate,
                Q = v.stateNode;
            if (((v = v.tag), A !== null && A === s)) break;
            (v !== 5 && v !== 26 && v !== 27) ||
                Q === null ||
                ((A = Q),
                l
                    ? ((Q = Ii(a, c)), Q != null && h.unshift(To(a, Q, A)))
                    : l || ((Q = Ii(a, c)), Q != null && h.push(To(a, Q, A)))),
                (a = a.return);
        }
        h.length !== 0 && t.push({ event: e, listeners: h });
    }
    var L1 = /\r\n?/g,
        H1 = /\u0000|\uFFFD/g;
    function Iy(t) {
        return (typeof t == "string" ? t : "" + t)
            .replace(
                L1,
                `
`
            )
            .replace(H1, "");
    }
    function Xy(t, e) {
        return (e = Iy(e)), Iy(t) === e;
    }
    function Wt(t, e, a, s, l, c) {
        switch (a) {
            case "children":
                typeof s == "string"
                    ? e === "body" || (e === "textarea" && s === "") || Kt(t, s)
                    : (typeof s == "number" || typeof s == "bigint") && e !== "body" && Kt(t, "" + s);
                break;
            case "className":
                b(t, "class", s);
                break;
            case "tabIndex":
                b(t, "tabindex", s);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                b(t, a, s);
                break;
            case "style":
                La(t, s, c);
                break;
            case "data":
                if (e !== "object") {
                    b(t, "data", s);
                    break;
                }
            case "src":
            case "href":
                if (s === "" && (e !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break;
                }
                if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                    t.removeAttribute(a);
                    break;
                }
                (s = Ha("" + s)), t.setAttribute(a, s);
                break;
            case "action":
            case "formAction":
                if (typeof s == "function") {
                    t.setAttribute(
                        a,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    );
                    break;
                } else
                    typeof c == "function" &&
                        (a === "formAction"
                            ? (e !== "input" && Wt(t, e, "name", l.name, l, null),
                              Wt(t, e, "formEncType", l.formEncType, l, null),
                              Wt(t, e, "formMethod", l.formMethod, l, null),
                              Wt(t, e, "formTarget", l.formTarget, l, null))
                            : (Wt(t, e, "encType", l.encType, l, null),
                              Wt(t, e, "method", l.method, l, null),
                              Wt(t, e, "target", l.target, l, null)));
                if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                    t.removeAttribute(a);
                    break;
                }
                (s = Ha("" + s)), t.setAttribute(a, s);
                break;
            case "onClick":
                s != null && (t.onclick = gn);
                break;
            case "onScroll":
                s != null && Nt("scroll", t);
                break;
            case "onScrollEnd":
                s != null && Nt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
                    if (((a = s.__html), a != null)) {
                        if (l.children != null) throw Error(o(60));
                        t.innerHTML = a;
                    }
                }
                break;
            case "multiple":
                t.multiple = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "muted":
                t.muted = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                    t.removeAttribute("xlink:href");
                    break;
                }
                (a = Ha("" + s)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                s != null && typeof s != "function" && typeof s != "symbol"
                    ? t.setAttribute(a, "" + s)
                    : t.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                s && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                s === !0
                    ? t.setAttribute(a, "")
                    : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol"
                      ? t.setAttribute(a, s)
                      : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s
                    ? t.setAttribute(a, s)
                    : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
                    ? t.removeAttribute(a)
                    : t.setAttribute(a, s);
                break;
            case "popover":
                Nt("beforetoggle", t), Nt("toggle", t), Ua(t, "popover", s);
                break;
            case "xlinkActuate":
                M(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                break;
            case "xlinkArcrole":
                M(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                break;
            case "xlinkRole":
                M(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
                break;
            case "xlinkShow":
                M(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
                break;
            case "xlinkTitle":
                M(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
                break;
            case "xlinkType":
                M(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
                break;
            case "xmlBase":
                M(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                break;
            case "xmlLang":
                M(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                break;
            case "xmlSpace":
                M(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                break;
            case "is":
                Ua(t, "is", s);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
                    ((a = Gi.get(a) || a), Ua(t, a, s));
        }
    }
    function Nf(t, e, a, s, l, c) {
        switch (a) {
            case "style":
                La(t, s, c);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
                    if (((a = s.__html), a != null)) {
                        if (l.children != null) throw Error(o(60));
                        t.innerHTML = a;
                    }
                }
                break;
            case "children":
                typeof s == "string" ? Kt(t, s) : (typeof s == "number" || typeof s == "bigint") && Kt(t, "" + s);
                break;
            case "onScroll":
                s != null && Nt("scroll", t);
                break;
            case "onScrollEnd":
                s != null && Nt("scrollend", t);
                break;
            case "onClick":
                s != null && (t.onclick = gn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!_s.hasOwnProperty(a))
                    t: {
                        if (
                            a[0] === "o" &&
                            a[1] === "n" &&
                            ((l = a.endsWith("Capture")),
                            (e = a.slice(2, l ? a.length - 7 : void 0)),
                            (c = t[ze] || null),
                            (c = c != null ? c[a] : null),
                            typeof c == "function" && t.removeEventListener(e, c, l),
                            typeof s == "function")
                        ) {
                            typeof c != "function" &&
                                c !== null &&
                                (a in t ? (t[a] = null) : t.hasAttribute(a) && t.removeAttribute(a)),
                                t.addEventListener(e, s, l);
                            break t;
                        }
                        a in t ? (t[a] = s) : s === !0 ? t.setAttribute(a, "") : Ua(t, a, s);
                    }
        }
    }
    function Me(t, e, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Nt("error", t), Nt("load", t);
                var s = !1,
                    l = !1,
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var h = a[c];
                        if (h != null)
                            switch (c) {
                                case "src":
                                    s = !0;
                                    break;
                                case "srcSet":
                                    l = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(o(137, e));
                                default:
                                    Wt(t, e, c, h, a, null);
                            }
                    }
                l && Wt(t, e, "srcSet", a.srcSet, a, null), s && Wt(t, e, "src", a.src, a, null);
                return;
            case "input":
                Nt("invalid", t);
                var v = (c = h = l = null),
                    A = null,
                    Q = null;
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        var J = a[s];
                        if (J != null)
                            switch (s) {
                                case "name":
                                    l = J;
                                    break;
                                case "type":
                                    h = J;
                                    break;
                                case "checked":
                                    A = J;
                                    break;
                                case "defaultChecked":
                                    Q = J;
                                    break;
                                case "value":
                                    c = J;
                                    break;
                                case "defaultValue":
                                    v = J;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (J != null) throw Error(o(137, e));
                                    break;
                                default:
                                    Wt(t, e, s, J, a, null);
                            }
                    }
                ht(t, c, v, A, Q, h, l, !1);
                return;
            case "select":
                Nt("invalid", t), (s = h = c = null);
                for (l in a)
                    if (a.hasOwnProperty(l) && ((v = a[l]), v != null))
                        switch (l) {
                            case "value":
                                c = v;
                                break;
                            case "defaultValue":
                                h = v;
                                break;
                            case "multiple":
                                s = v;
                            default:
                                Wt(t, e, l, v, a, null);
                        }
                (e = c), (a = h), (t.multiple = !!s), e != null ? Ct(t, !!s, e, !1) : a != null && Ct(t, !!s, a, !0);
                return;
            case "textarea":
                Nt("invalid", t), (c = l = s = null);
                for (h in a)
                    if (a.hasOwnProperty(h) && ((v = a[h]), v != null))
                        switch (h) {
                            case "value":
                                s = v;
                                break;
                            case "defaultValue":
                                l = v;
                                break;
                            case "children":
                                c = v;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (v != null) throw Error(o(91));
                                break;
                            default:
                                Wt(t, e, h, v, a, null);
                        }
                ae(t, s, l, c);
                return;
            case "option":
                for (A in a)
                    a.hasOwnProperty(A) &&
                        ((s = a[A]), s != null) &&
                        (A === "selected"
                            ? (t.selected = s && typeof s != "function" && typeof s != "symbol")
                            : Wt(t, e, A, s, a, null));
                return;
            case "dialog":
                Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
                break;
            case "iframe":
            case "object":
                Nt("load", t);
                break;
            case "video":
            case "audio":
                for (s = 0; s < Eo.length; s++) Nt(Eo[s], t);
                break;
            case "image":
                Nt("error", t), Nt("load", t);
                break;
            case "details":
                Nt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                Nt("error", t), Nt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (Q in a)
                    if (a.hasOwnProperty(Q) && ((s = a[Q]), s != null))
                        switch (Q) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, e));
                            default:
                                Wt(t, e, Q, s, a, null);
                        }
                return;
            default:
                if (qi(e)) {
                    for (J in a) a.hasOwnProperty(J) && ((s = a[J]), s !== void 0 && Nf(t, e, J, s, a, void 0));
                    return;
                }
        }
        for (v in a) a.hasOwnProperty(v) && ((s = a[v]), s != null && Wt(t, e, v, s, a, null));
    }
    function k1(t, e, a, s) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var l = null,
                    c = null,
                    h = null,
                    v = null,
                    A = null,
                    Q = null,
                    J = null;
                for (F in a) {
                    var nt = a[F];
                    if (a.hasOwnProperty(F) && nt != null)
                        switch (F) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                A = nt;
                            default:
                                s.hasOwnProperty(F) || Wt(t, e, F, null, s, nt);
                        }
                }
                for (var K in s) {
                    var F = s[K];
                    if (((nt = a[K]), s.hasOwnProperty(K) && (F != null || nt != null)))
                        switch (K) {
                            case "type":
                                c = F;
                                break;
                            case "name":
                                l = F;
                                break;
                            case "checked":
                                Q = F;
                                break;
                            case "defaultChecked":
                                J = F;
                                break;
                            case "value":
                                h = F;
                                break;
                            case "defaultValue":
                                v = F;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (F != null) throw Error(o(137, e));
                                break;
                            default:
                                F !== nt && Wt(t, e, K, F, s, nt);
                        }
                }
                ct(t, h, v, A, Q, J, c, l);
                return;
            case "select":
                F = h = v = K = null;
                for (c in a)
                    if (((A = a[c]), a.hasOwnProperty(c) && A != null))
                        switch (c) {
                            case "value":
                                break;
                            case "multiple":
                                F = A;
                            default:
                                s.hasOwnProperty(c) || Wt(t, e, c, null, s, A);
                        }
                for (l in s)
                    if (((c = s[l]), (A = a[l]), s.hasOwnProperty(l) && (c != null || A != null)))
                        switch (l) {
                            case "value":
                                K = c;
                                break;
                            case "defaultValue":
                                v = c;
                                break;
                            case "multiple":
                                h = c;
                            default:
                                c !== A && Wt(t, e, l, c, s, A);
                        }
                (e = v),
                    (a = h),
                    (s = F),
                    K != null
                        ? Ct(t, !!a, K, !1)
                        : !!s != !!a && (e != null ? Ct(t, !!a, e, !0) : Ct(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                F = K = null;
                for (v in a)
                    if (((l = a[v]), a.hasOwnProperty(v) && l != null && !s.hasOwnProperty(v)))
                        switch (v) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Wt(t, e, v, null, s, l);
                        }
                for (h in s)
                    if (((l = s[h]), (c = a[h]), s.hasOwnProperty(h) && (l != null || c != null)))
                        switch (h) {
                            case "value":
                                K = l;
                                break;
                            case "defaultValue":
                                F = l;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (l != null) throw Error(o(91));
                                break;
                            default:
                                l !== c && Wt(t, e, h, l, s, c);
                        }
                kt(t, K, F);
                return;
            case "option":
                for (var dt in a)
                    (K = a[dt]),
                        a.hasOwnProperty(dt) &&
                            K != null &&
                            !s.hasOwnProperty(dt) &&
                            (dt === "selected" ? (t.selected = !1) : Wt(t, e, dt, null, s, K));
                for (A in s)
                    (K = s[A]),
                        (F = a[A]),
                        s.hasOwnProperty(A) &&
                            K !== F &&
                            (K != null || F != null) &&
                            (A === "selected"
                                ? (t.selected = K && typeof K != "function" && typeof K != "symbol")
                                : Wt(t, e, A, K, s, F));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var vt in a)
                    (K = a[vt]), a.hasOwnProperty(vt) && K != null && !s.hasOwnProperty(vt) && Wt(t, e, vt, null, s, K);
                for (Q in s)
                    if (((K = s[Q]), (F = a[Q]), s.hasOwnProperty(Q) && K !== F && (K != null || F != null)))
                        switch (Q) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (K != null) throw Error(o(137, e));
                                break;
                            default:
                                Wt(t, e, Q, K, s, F);
                        }
                return;
            default:
                if (qi(e)) {
                    for (var Ft in a)
                        (K = a[Ft]),
                            a.hasOwnProperty(Ft) && K !== void 0 && !s.hasOwnProperty(Ft) && Nf(t, e, Ft, void 0, s, K);
                    for (J in s)
                        (K = s[J]),
                            (F = a[J]),
                            !s.hasOwnProperty(J) || K === F || (K === void 0 && F === void 0) || Nf(t, e, J, K, s, F);
                    return;
                }
        }
        for (var H in a)
            (K = a[H]), a.hasOwnProperty(H) && K != null && !s.hasOwnProperty(H) && Wt(t, e, H, null, s, K);
        for (nt in s)
            (K = s[nt]),
                (F = a[nt]),
                !s.hasOwnProperty(nt) || K === F || (K == null && F == null) || Wt(t, e, nt, K, s, F);
    }
    function Qy(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1;
        }
    }
    function j1() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
                var l = a[s],
                    c = l.transferSize,
                    h = l.initiatorType,
                    v = l.duration;
                if (c && v && Qy(h)) {
                    for (h = 0, v = l.responseEnd, s += 1; s < a.length; s++) {
                        var A = a[s],
                            Q = A.startTime;
                        if (Q > v) break;
                        var J = A.transferSize,
                            nt = A.initiatorType;
                        J && Qy(nt) && ((A = A.responseEnd), (h += J * (A < v ? 1 : (v - Q) / (A - Q))));
                    }
                    if ((--s, (e += (8 * (c + h)) / (l.duration / 1e3)), t++, 10 < t)) break;
                }
            }
            if (0 < t) return e / t / 1e6;
        }
        return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number") ? t : 5;
    }
    var zf = null,
        Bf = null;
    function pu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Vy(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0;
        }
    }
    function Py(t, e) {
        if (t === 0)
            switch (e) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
        return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Uf(t, e) {
        return (
            t === "textarea" ||
            t === "noscript" ||
            typeof e.children == "string" ||
            typeof e.children == "number" ||
            typeof e.children == "bigint" ||
            (typeof e.dangerouslySetInnerHTML == "object" &&
                e.dangerouslySetInnerHTML !== null &&
                e.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Lf = null;
    function Y1() {
        var t = window.event;
        return t && t.type === "popstate" ? (t === Lf ? !1 : ((Lf = t), !0)) : ((Lf = null), !1);
    }
    var Ky = typeof setTimeout == "function" ? setTimeout : void 0,
        q1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Zy = typeof Promise == "function" ? Promise : void 0,
        G1 =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Zy < "u"
                  ? function (t) {
                        return Zy.resolve(null).then(t).catch(I1);
                    }
                  : Ky;
    function I1(t) {
        setTimeout(function () {
            throw t;
        });
    }
    function Rr(t) {
        return t === "head";
    }
    function Wy(t, e) {
        var a = e,
            s = 0;
        do {
            var l = a.nextSibling;
            if ((t.removeChild(a), l && l.nodeType === 8))
                if (((a = l.data), a === "/$" || a === "/&")) {
                    if (s === 0) {
                        t.removeChild(l), pi(e);
                        return;
                    }
                    s--;
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") s++;
                else if (a === "html") xo(t.ownerDocument.documentElement);
                else if (a === "head") {
                    (a = t.ownerDocument.head), xo(a);
                    for (var c = a.firstChild; c; ) {
                        var h = c.nextSibling,
                            v = c.nodeName;
                        c[ta] ||
                            v === "SCRIPT" ||
                            v === "STYLE" ||
                            (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                            a.removeChild(c),
                            (c = h);
                    }
                } else a === "body" && xo(t.ownerDocument.body);
            a = l;
        } while (a);
        pi(e);
    }
    function Fy(t, e) {
        var a = t;
        t = 0;
        do {
            var s = a.nextSibling;
            if (
                (a.nodeType === 1
                    ? e
                        ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
                        : ((a.style.display = a._stashedDisplay || ""),
                          a.getAttribute("style") === "" && a.removeAttribute("style"))
                    : a.nodeType === 3 &&
                      (e ? ((a._stashedText = a.nodeValue), (a.nodeValue = "")) : (a.nodeValue = a._stashedText || "")),
                s && s.nodeType === 8)
            )
                if (((a = s.data), a === "/$")) {
                    if (t === 0) break;
                    t--;
                } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
            a = s;
        } while (a);
    }
    function Hf(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var a = e;
            switch (((e = e.nextSibling), a.nodeName)) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Hf(a), Yi(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue;
            }
            t.removeChild(a);
        }
    }
    function X1(t, e, a, s) {
        for (; t.nodeType === 1; ) {
            var l = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
            } else if (s) {
                if (!t[ta])
                    switch (e) {
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (((c = t.getAttribute("rel")), c === "stylesheet" && t.hasAttribute("data-precedence")))
                                break;
                            if (
                                c !== l.rel ||
                                t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) ||
                                t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) ||
                                t.getAttribute("title") !== (l.title == null ? null : l.title)
                            )
                                break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (
                                ((c = t.getAttribute("src")),
                                (c !== (l.src == null ? null : l.src) ||
                                    t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                                    t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) &&
                                    c &&
                                    t.hasAttribute("async") &&
                                    !t.hasAttribute("itemprop"))
                            )
                                break;
                            return t;
                        default:
                            return t;
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = l.name == null ? null : "" + l.name;
                if (l.type === "hidden" && t.getAttribute("name") === c) return t;
            } else return t;
            if (((t = mn(t.nextSibling)), t === null)) break;
        }
        return null;
    }
    function Q1(t, e, a) {
        if (e === "") return null;
        for (; t.nodeType !== 3; )
            if (
                ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a) ||
                ((t = mn(t.nextSibling)), t === null)
            )
                return null;
        return t;
    }
    function $y(t, e) {
        for (; t.nodeType !== 8; )
            if (
                ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
                ((t = mn(t.nextSibling)), t === null)
            )
                return null;
        return t;
    }
    function kf(t) {
        return t.data === "$?" || t.data === "$~";
    }
    function jf(t) {
        return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
    }
    function V1(t, e) {
        var a = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e;
        else if (t.data !== "$?" || a.readyState !== "loading") e();
        else {
            var s = function () {
                e(), a.removeEventListener("DOMContentLoaded", s);
            };
            a.addEventListener("DOMContentLoaded", s), (t._reactRetry = s);
        }
    }
    function mn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (
                    ((e = t.data),
                    e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                )
                    break;
                if (e === "/$" || e === "/&") return null;
            }
        }
        return t;
    }
    var Yf = null;
    function Jy(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "/$" || a === "/&") {
                    if (e === 0) return mn(t.nextSibling);
                    e--;
                } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || e++;
            }
            t = t.nextSibling;
        }
        return null;
    }
    function tg(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (e === 0) return t;
                    e--;
                } else (a !== "/$" && a !== "/&") || e++;
            }
            t = t.previousSibling;
        }
        return null;
    }
    function eg(t, e, a) {
        switch (((e = pu(a)), t)) {
            case "html":
                if (((t = e.documentElement), !t)) throw Error(o(452));
                return t;
            case "head":
                if (((t = e.head), !t)) throw Error(o(453));
                return t;
            case "body":
                if (((t = e.body), !t)) throw Error(o(454));
                return t;
            default:
                throw Error(o(451));
        }
    }
    function xo(t) {
        for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
        Yi(t);
    }
    var pn = new Map(),
        ng = new Set();
    function yu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Fn = st.d;
    st.d = { f: P1, r: K1, D: Z1, C: W1, L: F1, m: $1, X: tS, S: J1, M: eS };
    function P1() {
        var t = Fn.f(),
            e = su();
        return t || e;
    }
    function K1(t) {
        var e = fr(t);
        e !== null && e.tag === 5 && e.type === "form" ? _p(e) : Fn.r(t);
    }
    var di = typeof document > "u" ? null : document;
    function rg(t, e, a) {
        var s = di;
        if (s && typeof e == "string" && e) {
            var l = ot(e);
            (l = 'link[rel="' + t + '"][href="' + l + '"]'),
                typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
                ng.has(l) ||
                    (ng.add(l),
                    (t = { rel: t, crossOrigin: a, href: e }),
                    s.querySelector(l) === null &&
                        ((e = s.createElement("link")), Me(e, "link", t), fe(e), s.head.appendChild(e)));
        }
    }
    function Z1(t) {
        Fn.D(t), rg("dns-prefetch", t, null);
    }
    function W1(t, e) {
        Fn.C(t, e), rg("preconnect", t, e);
    }
    function F1(t, e, a) {
        Fn.L(t, e, a);
        var s = di;
        if (s && t && e) {
            var l = 'link[rel="preload"][as="' + ot(e) + '"]';
            e === "image" && a && a.imageSrcSet
                ? ((l += '[imagesrcset="' + ot(a.imageSrcSet) + '"]'),
                  typeof a.imageSizes == "string" && (l += '[imagesizes="' + ot(a.imageSizes) + '"]'))
                : (l += '[href="' + ot(t) + '"]');
            var c = l;
            switch (e) {
                case "style":
                    c = hi(t);
                    break;
                case "script":
                    c = mi(t);
            }
            pn.has(c) ||
                ((t = g({ rel: "preload", href: e === "image" && a && a.imageSrcSet ? void 0 : t, as: e }, a)),
                pn.set(c, t),
                s.querySelector(l) !== null ||
                    (e === "style" && s.querySelector(wo(c))) ||
                    (e === "script" && s.querySelector(Oo(c))) ||
                    ((e = s.createElement("link")), Me(e, "link", t), fe(e), s.head.appendChild(e)));
        }
    }
    function $1(t, e) {
        Fn.m(t, e);
        var a = di;
        if (a && t) {
            var s = e && typeof e.as == "string" ? e.as : "script",
                l = 'link[rel="modulepreload"][as="' + ot(s) + '"][href="' + ot(t) + '"]',
                c = l;
            switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    c = mi(t);
            }
            if (
                !pn.has(c) &&
                ((t = g({ rel: "modulepreload", href: t }, e)), pn.set(c, t), a.querySelector(l) === null)
            ) {
                switch (s) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Oo(c))) return;
                }
                (s = a.createElement("link")), Me(s, "link", t), fe(s), a.head.appendChild(s);
            }
        }
    }
    function J1(t, e, a) {
        Fn.S(t, e, a);
        var s = di;
        if (s && t) {
            var l = on(s).hoistableStyles,
                c = hi(t);
            e = e || "default";
            var h = l.get(c);
            if (!h) {
                var v = { loading: 0, preload: null };
                if ((h = s.querySelector(wo(c)))) v.loading = 5;
                else {
                    (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, a)), (a = pn.get(c)) && qf(t, a);
                    var A = (h = s.createElement("link"));
                    fe(A),
                        Me(A, "link", t),
                        (A._p = new Promise(function (Q, J) {
                            (A.onload = Q), (A.onerror = J);
                        })),
                        A.addEventListener("load", function () {
                            v.loading |= 1;
                        }),
                        A.addEventListener("error", function () {
                            v.loading |= 2;
                        }),
                        (v.loading |= 4),
                        gu(h, e, s);
                }
                (h = { type: "stylesheet", instance: h, count: 1, state: v }), l.set(c, h);
            }
        }
    }
    function tS(t, e) {
        Fn.X(t, e);
        var a = di;
        if (a && t) {
            var s = on(a).hoistableScripts,
                l = mi(t),
                c = s.get(l);
            c ||
                ((c = a.querySelector(Oo(l))),
                c ||
                    ((t = g({ src: t, async: !0 }, e)),
                    (e = pn.get(l)) && Gf(t, e),
                    (c = a.createElement("script")),
                    fe(c),
                    Me(c, "link", t),
                    a.head.appendChild(c)),
                (c = { type: "script", instance: c, count: 1, state: null }),
                s.set(l, c));
        }
    }
    function eS(t, e) {
        Fn.M(t, e);
        var a = di;
        if (a && t) {
            var s = on(a).hoistableScripts,
                l = mi(t),
                c = s.get(l);
            c ||
                ((c = a.querySelector(Oo(l))),
                c ||
                    ((t = g({ src: t, async: !0, type: "module" }, e)),
                    (e = pn.get(l)) && Gf(t, e),
                    (c = a.createElement("script")),
                    fe(c),
                    Me(c, "link", t),
                    a.head.appendChild(c)),
                (c = { type: "script", instance: c, count: 1, state: null }),
                s.set(l, c));
        }
    }
    function ag(t, e, a, s) {
        var l = (l = At.current) ? yu(l) : null;
        if (!l) throw Error(o(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string"
                    ? ((e = hi(a.href)),
                      (a = on(l).hoistableStyles),
                      (s = a.get(e)),
                      s || ((s = { type: "style", instance: null, count: 0, state: null }), a.set(e, s)),
                      s)
                    : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = hi(a.href);
                    var c = on(l).hoistableStyles,
                        h = c.get(t);
                    if (
                        (h ||
                            ((l = l.ownerDocument || l),
                            (h = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            c.set(t, h),
                            (c = l.querySelector(wo(t))) && !c._p && ((h.instance = c), (h.state.loading = 5)),
                            pn.has(t) ||
                                ((a = {
                                    rel: "preload",
                                    as: "style",
                                    href: a.href,
                                    crossOrigin: a.crossOrigin,
                                    integrity: a.integrity,
                                    media: a.media,
                                    hrefLang: a.hrefLang,
                                    referrerPolicy: a.referrerPolicy,
                                }),
                                pn.set(t, a),
                                c || nS(l, t, a, h.state))),
                        e && s === null)
                    )
                        throw Error(o(528, ""));
                    return h;
                }
                if (e && s !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return (
                    (e = a.async),
                    (a = a.src),
                    typeof a == "string" && e && typeof e != "function" && typeof e != "symbol"
                        ? ((e = mi(a)),
                          (a = on(l).hoistableScripts),
                          (s = a.get(e)),
                          s || ((s = { type: "script", instance: null, count: 0, state: null }), a.set(e, s)),
                          s)
                        : { type: "void", instance: null, count: 0, state: null }
                );
            default:
                throw Error(o(444, t));
        }
    }
    function hi(t) {
        return 'href="' + ot(t) + '"';
    }
    function wo(t) {
        return 'link[rel="stylesheet"][' + t + "]";
    }
    function ig(t) {
        return g({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function nS(t, e, a, s) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]")
            ? (s.loading = 1)
            : ((e = t.createElement("link")),
              (s.preload = e),
              e.addEventListener("load", function () {
                  return (s.loading |= 1);
              }),
              e.addEventListener("error", function () {
                  return (s.loading |= 2);
              }),
              Me(e, "link", a),
              fe(e),
              t.head.appendChild(e));
    }
    function mi(t) {
        return '[src="' + ot(t) + '"]';
    }
    function Oo(t) {
        return "script[async]" + t;
    }
    function og(t, e, a) {
        if ((e.count++, e.instance === null))
            switch (e.type) {
                case "style":
                    var s = t.querySelector('style[data-href~="' + ot(a.href) + '"]');
                    if (s) return (e.instance = s), fe(s), s;
                    var l = g({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (s = (t.ownerDocument || t).createElement("style")),
                        fe(s),
                        Me(s, "style", l),
                        gu(s, a.precedence, t),
                        (e.instance = s)
                    );
                case "stylesheet":
                    l = hi(a.href);
                    var c = t.querySelector(wo(l));
                    if (c) return (e.state.loading |= 4), (e.instance = c), fe(c), c;
                    (s = ig(a)), (l = pn.get(l)) && qf(s, l), (c = (t.ownerDocument || t).createElement("link")), fe(c);
                    var h = c;
                    return (
                        (h._p = new Promise(function (v, A) {
                            (h.onload = v), (h.onerror = A);
                        })),
                        Me(c, "link", s),
                        (e.state.loading |= 4),
                        gu(c, a.precedence, t),
                        (e.instance = c)
                    );
                case "script":
                    return (
                        (c = mi(a.src)),
                        (l = t.querySelector(Oo(c)))
                            ? ((e.instance = l), fe(l), l)
                            : ((s = a),
                              (l = pn.get(c)) && ((s = g({}, a)), Gf(s, l)),
                              (t = t.ownerDocument || t),
                              (l = t.createElement("script")),
                              fe(l),
                              Me(l, "link", s),
                              t.head.appendChild(l),
                              (e.instance = l))
                    );
                case "void":
                    return null;
                default:
                    throw Error(o(443, e.type));
            }
        else
            e.type === "stylesheet" &&
                (e.state.loading & 4) === 0 &&
                ((s = e.instance), (e.state.loading |= 4), gu(s, a.precedence, t));
        return e.instance;
    }
    function gu(t, e, a) {
        for (
            var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                l = s.length ? s[s.length - 1] : null,
                c = l,
                h = 0;
            h < s.length;
            h++
        ) {
            var v = s[h];
            if (v.dataset.precedence === e) c = v;
            else if (c !== l) break;
        }
        c
            ? c.parentNode.insertBefore(t, c.nextSibling)
            : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
    }
    function qf(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.title == null && (t.title = e.title);
    }
    function Gf(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.integrity == null && (t.integrity = e.integrity);
    }
    var vu = null;
    function sg(t, e, a) {
        if (vu === null) {
            var s = new Map(),
                l = (vu = new Map());
            l.set(a, s);
        } else (l = vu), (s = l.get(a)), s || ((s = new Map()), l.set(a, s));
        if (s.has(t)) return s;
        for (s.set(t, null), a = a.getElementsByTagName(t), l = 0; l < a.length; l++) {
            var c = a[l];
            if (
                !(c[ta] || c[Se] || (t === "link" && c.getAttribute("rel") === "stylesheet")) &&
                c.namespaceURI !== "http://www.w3.org/2000/svg"
            ) {
                var h = c.getAttribute(e) || "";
                h = t + h;
                var v = s.get(h);
                v ? v.push(c) : s.set(h, [c]);
            }
        }
        return s;
    }
    function ug(t, e, a) {
        (t = t.ownerDocument || t), t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null);
    }
    function rS(t, e, a) {
        if (a === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                    break;
                return e.rel === "stylesheet" ? ((t = e.disabled), typeof e.precedence == "string" && t == null) : !0;
            case "script":
                if (
                    e.async &&
                    typeof e.async != "function" &&
                    typeof e.async != "symbol" &&
                    !e.onLoad &&
                    !e.onError &&
                    e.src &&
                    typeof e.src == "string"
                )
                    return !0;
        }
        return !1;
    }
    function lg(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function aS(t, e, a, s) {
        if (
            a.type === "stylesheet" &&
            (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
            (a.state.loading & 4) === 0
        ) {
            if (a.instance === null) {
                var l = hi(s.href),
                    c = e.querySelector(wo(l));
                if (c) {
                    (e = c._p),
                        e !== null &&
                            typeof e == "object" &&
                            typeof e.then == "function" &&
                            (t.count++, (t = _u.bind(t)), e.then(t, t)),
                        (a.state.loading |= 4),
                        (a.instance = c),
                        fe(c);
                    return;
                }
                (c = e.ownerDocument || e),
                    (s = ig(s)),
                    (l = pn.get(l)) && qf(s, l),
                    (c = c.createElement("link")),
                    fe(c);
                var h = c;
                (h._p = new Promise(function (v, A) {
                    (h.onload = v), (h.onerror = A);
                })),
                    Me(c, "link", s),
                    (a.instance = c);
            }
            t.stylesheets === null && (t.stylesheets = new Map()),
                t.stylesheets.set(a, e),
                (e = a.state.preload) &&
                    (a.state.loading & 3) === 0 &&
                    (t.count++, (a = _u.bind(t)), e.addEventListener("load", a), e.addEventListener("error", a));
        }
    }
    var If = 0;
    function iS(t, e) {
        return (
            t.stylesheets && t.count === 0 && Su(t, t.stylesheets),
            0 < t.count || 0 < t.imgCount
                ? function (a) {
                      var s = setTimeout(function () {
                          if ((t.stylesheets && Su(t, t.stylesheets), t.unsuspend)) {
                              var c = t.unsuspend;
                              (t.unsuspend = null), c();
                          }
                      }, 6e4 + e);
                      0 < t.imgBytes && If === 0 && (If = 62500 * j1());
                      var l = setTimeout(
                          function () {
                              if (
                                  ((t.waitingForImages = !1),
                                  t.count === 0 && (t.stylesheets && Su(t, t.stylesheets), t.unsuspend))
                              ) {
                                  var c = t.unsuspend;
                                  (t.unsuspend = null), c();
                              }
                          },
                          (t.imgBytes > If ? 50 : 800) + e
                      );
                      return (
                          (t.unsuspend = a),
                          function () {
                              (t.unsuspend = null), clearTimeout(s), clearTimeout(l);
                          }
                      );
                  }
                : null
        );
    }
    function _u() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) Su(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                (this.unsuspend = null), t();
            }
        }
    }
    var bu = null;
    function Su(t, e) {
        (t.stylesheets = null),
            t.unsuspend !== null && (t.count++, (bu = new Map()), e.forEach(oS, t), (bu = null), _u.call(t));
    }
    function oS(t, e) {
        if (!(e.state.loading & 4)) {
            var a = bu.get(t);
            if (a) var s = a.get(null);
            else {
                (a = new Map()), bu.set(t, a);
                for (
                    var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0;
                    c < l.length;
                    c++
                ) {
                    var h = l[c];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
                        (a.set(h.dataset.precedence, h), (s = h));
                }
                s && a.set(null, s);
            }
            (l = e.instance),
                (h = l.getAttribute("data-precedence")),
                (c = a.get(h) || s),
                c === s && a.set(null, l),
                a.set(h, l),
                this.count++,
                (s = _u.bind(this)),
                l.addEventListener("load", s),
                l.addEventListener("error", s),
                c
                    ? c.parentNode.insertBefore(l, c.nextSibling)
                    : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(l, t.firstChild)),
                (e.state.loading |= 4);
        }
    }
    var Do = { $$typeof: x, Provider: null, Consumer: null, _currentValue: ft, _currentValue2: ft, _threadCount: 0 };
    function sS(t, e, a, s, l, c, h, v, A) {
        (this.tag = 1),
            (this.containerInfo = t),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Hi(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Hi(0)),
            (this.hiddenUpdates = Hi(null)),
            (this.identifierPrefix = s),
            (this.onUncaughtError = l),
            (this.onCaughtError = c),
            (this.onRecoverableError = h),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = A),
            (this.incompleteTransitions = new Map());
    }
    function cg(t, e, a, s, l, c, h, v, A, Q, J, nt) {
        return (
            (t = new sS(t, e, a, h, A, Q, J, nt, v)),
            (e = 1),
            c === !0 && (e |= 24),
            (c = We(3, null, null, e)),
            (t.current = c),
            (c.stateNode = t),
            (e = Sc()),
            e.refCount++,
            (t.pooledCache = e),
            e.refCount++,
            (c.memoizedState = { element: s, isDehydrated: a, cache: e }),
            wc(c),
            t
        );
    }
    function fg(t) {
        return t ? ((t = Qa), t) : Qa;
    }
    function dg(t, e, a, s, l, c) {
        (l = fg(l)),
            s.context === null ? (s.context = l) : (s.pendingContext = l),
            (s = br(e)),
            (s.payload = { element: a }),
            (c = c === void 0 ? null : c),
            c !== null && (s.callback = c),
            (a = Sr(t, s, e)),
            a !== null && (Pe(a, t, e), ao(a, t, e));
    }
    function hg(t, e) {
        if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e;
        }
    }
    function Xf(t, e) {
        hg(t, e), (t = t.alternate) && hg(t, e);
    }
    function mg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = aa(t, 67108864);
            e !== null && Pe(e, t, 67108864), Xf(t, 67108864);
        }
    }
    function pg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = en();
            e = za(e);
            var a = aa(t, e);
            a !== null && Pe(a, t, e), Xf(t, e);
        }
    }
    var Eu = !0;
    function uS(t, e, a, s) {
        var l = V.T;
        V.T = null;
        var c = st.p;
        try {
            (st.p = 2), Qf(t, e, a, s);
        } finally {
            (st.p = c), (V.T = l);
        }
    }
    function lS(t, e, a, s) {
        var l = V.T;
        V.T = null;
        var c = st.p;
        try {
            (st.p = 8), Qf(t, e, a, s);
        } finally {
            (st.p = c), (V.T = l);
        }
    }
    function Qf(t, e, a, s) {
        if (Eu) {
            var l = Vf(s);
            if (l === null) Rf(t, e, s, Tu, a), gg(t, s);
            else if (fS(l, t, e, a, s)) s.stopPropagation();
            else if ((gg(t, s), e & 4 && -1 < cS.indexOf(t))) {
                for (; l !== null; ) {
                    var c = fr(l);
                    if (c !== null)
                        switch (c.tag) {
                            case 3:
                                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                                    var h = wn(c.pendingLanes);
                                    if (h !== 0) {
                                        var v = c;
                                        for (v.pendingLanes |= 2, v.entangledLanes |= 2; h; ) {
                                            var A = 1 << (31 - Le(h));
                                            (v.entanglements[1] |= A), (h &= ~A);
                                        }
                                        Rn(c), (qt & 6) === 0 && ((iu = Ne() + 500), So(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                (v = aa(c, 2)), v !== null && Pe(v, c, 2), su(), Xf(c, 2);
                        }
                    if (((c = Vf(s)), c === null && Rf(t, e, s, Tu, a), c === l)) break;
                    l = c;
                }
                l !== null && s.stopPropagation();
            } else Rf(t, e, s, null, a);
        }
    }
    function Vf(t) {
        return (t = Pl(t)), Pf(t);
    }
    var Tu = null;
    function Pf(t) {
        if (((Tu = null), (t = cr(t)), t !== null)) {
            var e = f(t);
            if (e === null) t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (((t = d(e)), t !== null)) return t;
                    t = null;
                } else if (a === 31) {
                    if (((t = y(e)), t !== null)) return t;
                    t = null;
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null;
                } else e !== t && (t = null);
            }
        }
        return (Tu = t), null;
    }
    function yg(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (ss()) {
                    case zi:
                        return 2;
                    case Bi:
                        return 8;
                    case Fr:
                    case us:
                        return 32;
                    case Ui:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Kf = !1,
        Nr = null,
        zr = null,
        Br = null,
        Ao = new Map(),
        Mo = new Map(),
        Ur = [],
        cS =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                " "
            );
    function gg(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Nr = null;
                break;
            case "dragenter":
            case "dragleave":
                zr = null;
                break;
            case "mouseover":
            case "mouseout":
                Br = null;
                break;
            case "pointerover":
            case "pointerout":
                Ao.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Mo.delete(e.pointerId);
        }
    }
    function Co(t, e, a, s, l, c) {
        return t === null || t.nativeEvent !== c
            ? ((t = { blockedOn: e, domEventName: a, eventSystemFlags: s, nativeEvent: c, targetContainers: [l] }),
              e !== null && ((e = fr(e)), e !== null && mg(e)),
              t)
            : ((t.eventSystemFlags |= s), (e = t.targetContainers), l !== null && e.indexOf(l) === -1 && e.push(l), t);
    }
    function fS(t, e, a, s, l) {
        switch (e) {
            case "focusin":
                return (Nr = Co(Nr, t, e, a, s, l)), !0;
            case "dragenter":
                return (zr = Co(zr, t, e, a, s, l)), !0;
            case "mouseover":
                return (Br = Co(Br, t, e, a, s, l)), !0;
            case "pointerover":
                var c = l.pointerId;
                return Ao.set(c, Co(Ao.get(c) || null, t, e, a, s, l)), !0;
            case "gotpointercapture":
                return (c = l.pointerId), Mo.set(c, Co(Mo.get(c) || null, t, e, a, s, l)), !0;
        }
        return !1;
    }
    function vg(t) {
        var e = cr(t.target);
        if (e !== null) {
            var a = f(e);
            if (a !== null) {
                if (((e = a.tag), e === 13)) {
                    if (((e = d(a)), e !== null)) {
                        (t.blockedOn = e),
                            gs(t.priority, function () {
                                pg(a);
                            });
                        return;
                    }
                } else if (e === 31) {
                    if (((e = y(a)), e !== null)) {
                        (t.blockedOn = e),
                            gs(t.priority, function () {
                                pg(a);
                            });
                        return;
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        t.blockedOn = null;
    }
    function xu(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var a = Vf(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var s = new a.constructor(a.type, a);
                (ka = s), a.target.dispatchEvent(s), (ka = null);
            } else return (e = fr(a)), e !== null && mg(e), (t.blockedOn = a), !1;
            e.shift();
        }
        return !0;
    }
    function _g(t, e, a) {
        xu(t) && a.delete(e);
    }
    function dS() {
        (Kf = !1),
            Nr !== null && xu(Nr) && (Nr = null),
            zr !== null && xu(zr) && (zr = null),
            Br !== null && xu(Br) && (Br = null),
            Ao.forEach(_g),
            Mo.forEach(_g);
    }
    function wu(t, e) {
        t.blockedOn === e &&
            ((t.blockedOn = null), Kf || ((Kf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, dS)));
    }
    var Ou = null;
    function bg(t) {
        Ou !== t &&
            ((Ou = t),
            n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
                Ou === t && (Ou = null);
                for (var e = 0; e < t.length; e += 3) {
                    var a = t[e],
                        s = t[e + 1],
                        l = t[e + 2];
                    if (typeof s != "function") {
                        if (Pf(s || a) === null) continue;
                        break;
                    }
                    var c = fr(a);
                    c !== null &&
                        (t.splice(e, 3), (e -= 3), Qc(c, { pending: !0, data: l, method: a.method, action: s }, s, l));
                }
            }));
    }
    function pi(t) {
        function e(A) {
            return wu(A, t);
        }
        Nr !== null && wu(Nr, t), zr !== null && wu(zr, t), Br !== null && wu(Br, t), Ao.forEach(e), Mo.forEach(e);
        for (var a = 0; a < Ur.length; a++) {
            var s = Ur[a];
            s.blockedOn === t && (s.blockedOn = null);
        }
        for (; 0 < Ur.length && ((a = Ur[0]), a.blockedOn === null); ) vg(a), a.blockedOn === null && Ur.shift();
        if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
            for (s = 0; s < a.length; s += 3) {
                var l = a[s],
                    c = a[s + 1],
                    h = l[ze] || null;
                if (typeof c == "function") h || bg(a);
                else if (h) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (((l = c), (h = c[ze] || null))) v = h.formAction;
                        else if (Pf(l) !== null) continue;
                    } else v = h.action;
                    typeof v == "function" ? (a[s + 1] = v) : (a.splice(s, 3), (s -= 3)), bg(a);
                }
            }
    }
    function Sg() {
        function t(c) {
            c.canIntercept &&
                c.info === "react-transition" &&
                c.intercept({
                    handler: function () {
                        return new Promise(function (h) {
                            return (l = h);
                        });
                    },
                    focusReset: "manual",
                    scroll: "manual",
                });
        }
        function e() {
            l !== null && (l(), (l = null)), s || setTimeout(a, 20);
        }
        function a() {
            if (!s && !navigation.transition) {
                var c = navigation.currentEntry;
                c &&
                    c.url != null &&
                    navigation.navigate(c.url, { state: c.getState(), info: "react-transition", history: "replace" });
            }
        }
        if (typeof navigation == "object") {
            var s = !1,
                l = null;
            return (
                navigation.addEventListener("navigate", t),
                navigation.addEventListener("navigatesuccess", e),
                navigation.addEventListener("navigateerror", e),
                setTimeout(a, 100),
                function () {
                    (s = !0),
                        navigation.removeEventListener("navigate", t),
                        navigation.removeEventListener("navigatesuccess", e),
                        navigation.removeEventListener("navigateerror", e),
                        l !== null && (l(), (l = null));
                }
            );
        }
    }
    function Zf(t) {
        this._internalRoot = t;
    }
    (Du.prototype.render = Zf.prototype.render =
        function (t) {
            var e = this._internalRoot;
            if (e === null) throw Error(o(409));
            var a = e.current,
                s = en();
            dg(a, s, t, e, null, null);
        }),
        (Du.prototype.unmount = Zf.prototype.unmount =
            function () {
                var t = this._internalRoot;
                if (t !== null) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    dg(t.current, 2, null, t, null, null), su(), (e[lr] = null);
                }
            });
    function Du(t) {
        this._internalRoot = t;
    }
    Du.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = ys();
            t = { blockedOn: null, target: t, priority: e };
            for (var a = 0; a < Ur.length && e !== 0 && e < Ur[a].priority; a++);
            Ur.splice(a, 0, t), a === 0 && vg(t);
        }
    };
    var Eg = r.version;
    if (Eg !== "19.2.4") throw Error(o(527, Eg, "19.2.4"));
    st.findDOMNode = function (t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : ((t = Object.keys(t).join(",")), Error(o(268, t)));
        return (t = m(e)), (t = t !== null ? _(t) : null), (t = t === null ? null : t.stateNode), t;
    };
    var hS = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: V,
        reconcilerVersion: "19.2.4",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Au.isDisabled && Au.supportsFiber)
            try {
                (ur = Au.inject(hS)), (we = Au);
            } catch {}
    }
    return (
        (No.createRoot = function (t, e) {
            if (!u(t)) throw Error(o(299));
            var a = !1,
                s = "",
                l = Mp,
                c = Cp,
                h = Rp;
            return (
                e != null &&
                    (e.unstable_strictMode === !0 && (a = !0),
                    e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (c = e.onCaughtError),
                    e.onRecoverableError !== void 0 && (h = e.onRecoverableError)),
                (e = cg(t, 1, !1, null, null, a, s, null, l, c, h, Sg)),
                (t[lr] = e.current),
                Cf(t),
                new Zf(e)
            );
        }),
        (No.hydrateRoot = function (t, e, a) {
            if (!u(t)) throw Error(o(299));
            var s = !1,
                l = "",
                c = Mp,
                h = Cp,
                v = Rp,
                A = null;
            return (
                a != null &&
                    (a.unstable_strictMode === !0 && (s = !0),
                    a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
                    a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
                    a.onCaughtError !== void 0 && (h = a.onCaughtError),
                    a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
                    a.formState !== void 0 && (A = a.formState)),
                (e = cg(t, 1, !0, e, a ?? null, s, l, A, c, h, v, Sg)),
                (e.context = fg(null)),
                (a = e.current),
                (s = en()),
                (s = za(s)),
                (l = br(s)),
                (l.callback = null),
                Sr(a, l, s),
                (a = s),
                (e.current.lanes = a),
                Jr(e, a),
                Rn(e),
                (t[lr] = e.current),
                Cf(t),
                new Du(e)
            );
        }),
        (No.version = "19.2.4"),
        No
    );
}
var zg;
function AS() {
    if (zg) return $f.exports;
    zg = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (r) {
                console.error(r);
            }
    }
    return n(), ($f.exports = DS()), $f.exports;
}
var MS = AS();
const CS = Ko(MS);
var nd = { exports: {} },
    rd = {};
var Bg;
function RS() {
    if (Bg) return rd;
    Bg = 1;
    var n = vl();
    function r(p, m) {
        return (p === m && (p !== 0 || 1 / p === 1 / m)) || (p !== p && m !== m);
    }
    var i = typeof Object.is == "function" ? Object.is : r,
        o = n.useSyncExternalStore,
        u = n.useRef,
        f = n.useEffect,
        d = n.useMemo,
        y = n.useDebugValue;
    return (
        (rd.useSyncExternalStoreWithSelector = function (p, m, _, g, T) {
            var O = u(null);
            if (O.current === null) {
                var k = { hasValue: !1, value: null };
                O.current = k;
            } else k = O.current;
            O = d(
                function () {
                    function R(D) {
                        if (!q) {
                            if (((q = !0), (w = D), (D = g(D)), T !== void 0 && k.hasValue)) {
                                var G = k.value;
                                if (T(G, D)) return (x = G);
                            }
                            return (x = D);
                        }
                        if (((G = x), i(w, D))) return G;
                        var U = g(D);
                        return T !== void 0 && T(G, U) ? ((w = D), G) : ((w = D), (x = U));
                    }
                    var q = !1,
                        w,
                        x,
                        C = _ === void 0 ? null : _;
                    return [
                        function () {
                            return R(m());
                        },
                        C === null
                            ? void 0
                            : function () {
                                  return R(C());
                              },
                    ];
                },
                [m, _, g, T]
            );
            var Y = o(p, O[0], O[1]);
            return (
                f(
                    function () {
                        (k.hasValue = !0), (k.value = Y);
                    },
                    [Y]
                ),
                y(Y),
                Y
            );
        }),
        rd
    );
}
var Ug;
function NS() {
    return Ug || ((Ug = 1), (nd.exports = RS())), nd.exports;
}
var zS = NS();
function BS(n) {
    n();
}
function US() {
    let n = null,
        r = null;
    return {
        clear() {
            (n = null), (r = null);
        },
        notify() {
            BS(() => {
                let i = n;
                for (; i; ) i.callback(), (i = i.next);
            });
        },
        get() {
            const i = [];
            let o = n;
            for (; o; ) i.push(o), (o = o.next);
            return i;
        },
        subscribe(i) {
            let o = !0;
            const u = (r = { callback: i, next: null, prev: r });
            return (
                u.prev ? (u.prev.next = u) : (n = u),
                function () {
                    !o ||
                        n === null ||
                        ((o = !1),
                        u.next ? (u.next.prev = u.prev) : (r = u.prev),
                        u.prev ? (u.prev.next = u.next) : (n = u.next));
                }
            );
        },
    };
}
var Lg = { notify() {}, get: () => [] };
function LS(n, r) {
    let i,
        o = Lg,
        u = 0,
        f = !1;
    function d(Y) {
        _();
        const R = o.subscribe(Y);
        let q = !1;
        return () => {
            q || ((q = !0), R(), g());
        };
    }
    function y() {
        o.notify();
    }
    function p() {
        k.onStateChange && k.onStateChange();
    }
    function m() {
        return f;
    }
    function _() {
        u++, i || ((i = n.subscribe(p)), (o = US()));
    }
    function g() {
        u--, i && u === 0 && (i(), (i = void 0), o.clear(), (o = Lg));
    }
    function T() {
        f || ((f = !0), _());
    }
    function O() {
        f && ((f = !1), g());
    }
    const k = {
        addNestedSub: d,
        notifyNestedSubs: y,
        handleChangeWrapper: p,
        isSubscribed: m,
        trySubscribe: T,
        tryUnsubscribe: O,
        getListeners: () => o,
    };
    return k;
}
var HS = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    kS = HS(),
    jS = () => typeof navigator < "u" && navigator.product === "ReactNative",
    YS = jS(),
    qS = () => (kS || YS ? wt.useLayoutEffect : wt.useEffect),
    GS = qS(),
    IS = Symbol.for("react-redux-context"),
    XS = typeof globalThis < "u" ? globalThis : {};
function QS() {
    if (!wt.createContext) return {};
    const n = (XS[IS] ??= new Map());
    let r = n.get(wt.createContext);
    return r || ((r = wt.createContext(null)), n.set(wt.createContext, r)), r;
}
var jr = QS();
function VS(n) {
    const { children: r, context: i, serverState: o, store: u } = n,
        f = wt.useMemo(() => {
            const p = LS(u);
            return { store: u, subscription: p, getServerState: o ? () => o : void 0 };
        }, [u, o]),
        d = wt.useMemo(() => u.getState(), [u]);
    GS(() => {
        const { subscription: p } = f;
        return (
            (p.onStateChange = p.notifyNestedSubs),
            p.trySubscribe(),
            d !== u.getState() && p.notifyNestedSubs(),
            () => {
                p.tryUnsubscribe(), (p.onStateChange = void 0);
            }
        );
    }, [f, d]);
    const y = i || jr;
    return wt.createElement(y.Provider, { value: f }, r);
}
var PS = VS;
function rh(n = jr) {
    return function () {
        return wt.useContext(n);
    };
}
var E0 = rh();
function T0(n = jr) {
    const r = n === jr ? E0 : rh(n),
        i = () => {
            const { store: o } = r();
            return o;
        };
    return Object.assign(i, { withTypes: () => i }), i;
}
var KS = T0();
function ZS(n = jr) {
    const r = n === jr ? KS : T0(n),
        i = () => r().dispatch;
    return Object.assign(i, { withTypes: () => i }), i;
}
var WS = ZS(),
    FS = (n, r) => n === r;
function $S(n = jr) {
    const r = n === jr ? E0 : rh(n),
        i = (o, u = {}) => {
            const { equalityFn: f = FS } = typeof u == "function" ? { equalityFn: u } : u,
                d = r(),
                { store: y, subscription: p, getServerState: m } = d;
            wt.useRef(!0);
            const _ = wt.useCallback(
                    {
                        [o.name](T) {
                            return o(T);
                        },
                    }[o.name],
                    [o]
                ),
                g = zS.useSyncExternalStoreWithSelector(p.addNestedSub, y.getState, m || y.getState, _, f);
            return wt.useDebugValue(g), g;
        };
    return Object.assign(i, { withTypes: () => i }), i;
}
var JS = $S();
class tE extends wt.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError(r) {
        return { hasError: !0 };
    }
    componentDidCatch(r, i) {
        console.error("Uncaught error:", r, i);
    }
    render() {
        return this.state.hasError ? Lt.jsx("h1", { children: "Sorry.. there was an error" }) : this.props.children;
    }
}
function Hu(n) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Hu = function (i) {
                  return typeof i;
              })
            : (Hu = function (i) {
                  return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype
                      ? "symbol"
                      : typeof i;
              }),
        Hu(n)
    );
}
function eE(n, r) {
    if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function nE(n, r) {
    for (var i = 0; i < r.length; i++) {
        var o = r[i];
        (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
    }
}
function rE(n, r, i) {
    return r && nE(n.prototype, r), n;
}
function aE(n, r) {
    return r && (Hu(r) === "object" || typeof r == "function") ? r : ku(n);
}
function xd(n) {
    return (
        (xd = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (i) {
                  return i.__proto__ || Object.getPrototypeOf(i);
              }),
        xd(n)
    );
}
function ku(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
}
function iE(n, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    (n.prototype = Object.create(r && r.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })),
        r && wd(n, r);
}
function wd(n, r) {
    return (
        (wd =
            Object.setPrototypeOf ||
            function (o, u) {
                return (o.__proto__ = u), o;
            }),
        wd(n, r)
    );
}
function ju(n, r, i) {
    return (
        r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
        n
    );
}
var x0 = (function (n) {
    iE(r, n);
    function r() {
        var i, o;
        eE(this, r);
        for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++) f[d] = arguments[d];
        return (
            (o = aE(this, (i = xd(r)).call.apply(i, [this].concat(f)))),
            ju(ku(o), "state", { bootstrapped: !1 }),
            ju(ku(o), "_unsubscribe", void 0),
            ju(ku(o), "handlePersistorState", function () {
                var y = o.props.persistor,
                    p = y.getState(),
                    m = p.bootstrapped;
                m &&
                    (o.props.onBeforeLift
                        ? Promise.resolve(o.props.onBeforeLift()).finally(function () {
                              return o.setState({ bootstrapped: !0 });
                          })
                        : o.setState({ bootstrapped: !0 }),
                    o._unsubscribe && o._unsubscribe());
            }),
            o
        );
    }
    return (
        rE(r, [
            {
                key: "componentDidMount",
                value: function () {
                    (this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState)),
                        this.handlePersistorState();
                },
            },
            {
                key: "componentWillUnmount",
                value: function () {
                    this._unsubscribe && this._unsubscribe();
                },
            },
            {
                key: "render",
                value: function () {
                    return typeof this.props.children == "function"
                        ? this.props.children(this.state.bootstrapped)
                        : this.state.bootstrapped
                          ? this.props.children
                          : this.props.loading;
                },
            },
        ]),
        r
    );
})(wt.PureComponent);
ju(x0, "defaultProps", { children: null, loading: null });
function Re(n) {
    return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var oE = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
    Hg = oE,
    ad = () => Math.random().toString(36).substring(7).split("").join("."),
    sE = {
        INIT: `@@redux/INIT${ad()}`,
        REPLACE: `@@redux/REPLACE${ad()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ad()}`,
    },
    rl = sE;
function ah(n) {
    if (typeof n != "object" || n === null) return !1;
    let r = n;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(n) === r || Object.getPrototypeOf(n) === null;
}
function ih(n, r, i) {
    if (typeof n != "function") throw new Error(Re(2));
    if (
        (typeof r == "function" && typeof i == "function") ||
        (typeof i == "function" && typeof arguments[3] == "function")
    )
        throw new Error(Re(0));
    if ((typeof r == "function" && typeof i > "u" && ((i = r), (r = void 0)), typeof i < "u")) {
        if (typeof i != "function") throw new Error(Re(1));
        return i(ih)(n, r);
    }
    let o = n,
        u = r,
        f = new Map(),
        d = f,
        y = 0,
        p = !1;
    function m() {
        d === f &&
            ((d = new Map()),
            f.forEach((R, q) => {
                d.set(q, R);
            }));
    }
    function _() {
        if (p) throw new Error(Re(3));
        return u;
    }
    function g(R) {
        if (typeof R != "function") throw new Error(Re(4));
        if (p) throw new Error(Re(5));
        let q = !0;
        m();
        const w = y++;
        return (
            d.set(w, R),
            function () {
                if (q) {
                    if (p) throw new Error(Re(6));
                    (q = !1), m(), d.delete(w), (f = null);
                }
            }
        );
    }
    function T(R) {
        if (!ah(R)) throw new Error(Re(7));
        if (typeof R.type > "u") throw new Error(Re(8));
        if (typeof R.type != "string") throw new Error(Re(17));
        if (p) throw new Error(Re(9));
        try {
            (p = !0), (u = o(u, R));
        } finally {
            p = !1;
        }
        return (
            (f = d).forEach((w) => {
                w();
            }),
            R
        );
    }
    function O(R) {
        if (typeof R != "function") throw new Error(Re(10));
        (o = R), T({ type: rl.REPLACE });
    }
    function k() {
        const R = g;
        return {
            subscribe(q) {
                if (typeof q != "object" || q === null) throw new Error(Re(11));
                function w() {
                    const C = q;
                    C.next && C.next(_());
                }
                return w(), { unsubscribe: R(w) };
            },
            [Hg]() {
                return this;
            },
        };
    }
    return T({ type: rl.INIT }), { dispatch: T, subscribe: g, getState: _, replaceReducer: O, [Hg]: k };
}
function uE(n) {
    Object.keys(n).forEach((r) => {
        const i = n[r];
        if (typeof i(void 0, { type: rl.INIT }) > "u") throw new Error(Re(12));
        if (typeof i(void 0, { type: rl.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(Re(13));
    });
}
function w0(n) {
    const r = Object.keys(n),
        i = {};
    for (let f = 0; f < r.length; f++) {
        const d = r[f];
        typeof n[d] == "function" && (i[d] = n[d]);
    }
    const o = Object.keys(i);
    let u;
    try {
        uE(i);
    } catch (f) {
        u = f;
    }
    return function (d = {}, y) {
        if (u) throw u;
        let p = !1;
        const m = {};
        for (let _ = 0; _ < o.length; _++) {
            const g = o[_],
                T = i[g],
                O = d[g],
                k = T(O, y);
            if (typeof k > "u") throw (y && y.type, new Error(Re(14)));
            (m[g] = k), (p = p || k !== O);
        }
        return (p = p || o.length !== Object.keys(d).length), p ? m : d;
    };
}
function al(...n) {
    return n.length === 0
        ? (r) => r
        : n.length === 1
          ? n[0]
          : n.reduce(
                (r, i) =>
                    (...o) =>
                        r(i(...o))
            );
}
function lE(...n) {
    return (r) => (i, o) => {
        const u = r(i, o);
        let f = () => {
            throw new Error(Re(15));
        };
        const d = { getState: u.getState, dispatch: (p, ...m) => f(p, ...m) },
            y = n.map((p) => p(d));
        return (f = al(...y)(u.dispatch)), { ...u, dispatch: f };
    };
}
function cE(n) {
    return ah(n) && "type" in n && typeof n.type == "string";
}
var O0 = Symbol.for("immer-nothing"),
    kg = Symbol.for("immer-draftable"),
    Ye = Symbol.for("immer-state");
function Sn(n, ...r) {
    throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`);
}
var nn = Object,
    _i = nn.getPrototypeOf,
    il = "constructor",
    _l = "prototype",
    Od = "configurable",
    ol = "enumerable",
    Yu = "writable",
    qo = "value",
    ar = (n) => !!n && !!n[Ye];
function Tn(n) {
    return n ? D0(n) || Sl(n) || !!n[kg] || !!n[il]?.[kg] || El(n) || Tl(n) : !1;
}
var fE = nn[_l][il].toString(),
    jg = new WeakMap();
function D0(n) {
    if (!n || !oh(n)) return !1;
    const r = _i(n);
    if (r === null || r === nn[_l]) return !0;
    const i = nn.hasOwnProperty.call(r, il) && r[il];
    if (i === Object) return !0;
    if (!vi(i)) return !1;
    let o = jg.get(i);
    return o === void 0 && ((o = Function.toString.call(i)), jg.set(i, o)), o === fE;
}
function bl(n, r, i = !0) {
    Zo(n) === 0
        ? (i ? Reflect.ownKeys(n) : nn.keys(n)).forEach((u) => {
              r(u, n[u], n);
          })
        : n.forEach((o, u) => r(u, o, n));
}
function Zo(n) {
    const r = n[Ye];
    return r ? r.type_ : Sl(n) ? 1 : El(n) ? 2 : Tl(n) ? 3 : 0;
}
var Yg = (n, r, i = Zo(n)) => (i === 2 ? n.has(r) : nn[_l].hasOwnProperty.call(n, r)),
    Dd = (n, r, i = Zo(n)) => (i === 2 ? n.get(r) : n[r]),
    sl = (n, r, i, o = Zo(n)) => {
        o === 2 ? n.set(r, i) : o === 3 ? n.add(i) : (n[r] = i);
    };
function dE(n, r) {
    return n === r ? n !== 0 || 1 / n === 1 / r : n !== n && r !== r;
}
var Sl = Array.isArray,
    El = (n) => n instanceof Map,
    Tl = (n) => n instanceof Set,
    oh = (n) => typeof n == "object",
    vi = (n) => typeof n == "function",
    id = (n) => typeof n == "boolean";
function hE(n) {
    const r = +n;
    return Number.isInteger(r) && String(r) === n;
}
var tr = (n) => n.copy_ || n.base_,
    sh = (n) => (n.modified_ ? n.copy_ : n.base_);
function Ad(n, r) {
    if (El(n)) return new Map(n);
    if (Tl(n)) return new Set(n);
    if (Sl(n)) return Array[_l].slice.call(n);
    const i = D0(n);
    if (r === !0 || (r === "class_only" && !i)) {
        const o = nn.getOwnPropertyDescriptors(n);
        delete o[Ye];
        let u = Reflect.ownKeys(o);
        for (let f = 0; f < u.length; f++) {
            const d = u[f],
                y = o[d];
            y[Yu] === !1 && ((y[Yu] = !0), (y[Od] = !0)),
                (y.get || y.set) && (o[d] = { [Od]: !0, [Yu]: !0, [ol]: y[ol], [qo]: n[d] });
        }
        return nn.create(_i(n), o);
    } else {
        const o = _i(n);
        if (o !== null && i) return { ...n };
        const u = nn.create(o);
        return nn.assign(u, n);
    }
}
function uh(n, r = !1) {
    return (
        xl(n) ||
            ar(n) ||
            !Tn(n) ||
            (Zo(n) > 1 && nn.defineProperties(n, { set: Mu, add: Mu, clear: Mu, delete: Mu }),
            nn.freeze(n),
            r &&
                bl(
                    n,
                    (i, o) => {
                        uh(o, !0);
                    },
                    !1
                )),
        n
    );
}
function mE() {
    Sn(2);
}
var Mu = { [qo]: mE };
function xl(n) {
    return n === null || !oh(n) ? !0 : nn.isFrozen(n);
}
var ul = "MapSet",
    Md = "Patches",
    qg = "ArrayMethods",
    A0 = {};
function Ta(n) {
    const r = A0[n];
    return r || Sn(0, n), r;
}
var Gg = (n) => !!A0[n],
    Go,
    M0 = () => Go,
    pE = (n, r) => ({
        drafts_: [],
        parent_: n,
        immer_: r,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
        handledSet_: new Set(),
        processedForPatches_: new Set(),
        mapSetPlugin_: Gg(ul) ? Ta(ul) : void 0,
        arrayMethodsPlugin_: Gg(qg) ? Ta(qg) : void 0,
    });
function Ig(n, r) {
    r && ((n.patchPlugin_ = Ta(Md)), (n.patches_ = []), (n.inversePatches_ = []), (n.patchListener_ = r));
}
function Cd(n) {
    Rd(n), n.drafts_.forEach(yE), (n.drafts_ = null);
}
function Rd(n) {
    n === Go && (Go = n.parent_);
}
var Xg = (n) => (Go = pE(Go, n));
function yE(n) {
    const r = n[Ye];
    r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function Qg(n, r) {
    r.unfinalizedDrafts_ = r.drafts_.length;
    const i = r.drafts_[0];
    if (n !== void 0 && n !== i) {
        i[Ye].modified_ && (Cd(r), Sn(4)), Tn(n) && (n = Vg(r, n));
        const { patchPlugin_: u } = r;
        u && u.generateReplacementPatches_(i[Ye].base_, n, r);
    } else n = Vg(r, i);
    return gE(r, n, !0), Cd(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), n !== O0 ? n : void 0;
}
function Vg(n, r) {
    if (xl(r)) return r;
    const i = r[Ye];
    if (!i) return ll(r, n.handledSet_, n);
    if (!wl(i, n)) return r;
    if (!i.modified_) return i.base_;
    if (!i.finalized_) {
        const { callbacks_: o } = i;
        if (o) for (; o.length > 0; ) o.pop()(n);
        N0(i, n);
    }
    return i.copy_;
}
function gE(n, r, i = !1) {
    !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && uh(r, i);
}
function C0(n) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
}
var wl = (n, r) => n.scope_ === r,
    vE = [];
function R0(n, r, i, o) {
    const u = tr(n),
        f = n.type_;
    if (o !== void 0 && Dd(u, o, f) === r) {
        sl(u, o, i, f);
        return;
    }
    if (!n.draftLocations_) {
        const y = (n.draftLocations_ = new Map());
        bl(u, (p, m) => {
            if (ar(m)) {
                const _ = y.get(m) || [];
                _.push(p), y.set(m, _);
            }
        });
    }
    const d = n.draftLocations_.get(r) ?? vE;
    for (const y of d) sl(u, y, i, f);
}
function _E(n, r, i) {
    n.callbacks_.push(function (u) {
        const f = r;
        if (!f || !wl(f, u)) return;
        u.mapSetPlugin_?.fixSetContents(f);
        const d = sh(f);
        R0(n, f.draft_ ?? f, d, i), N0(f, u);
    });
}
function N0(n, r) {
    if (
        n.modified_ &&
        !n.finalized_ &&
        (n.type_ === 3 || (n.type_ === 1 && n.allIndicesReassigned_) || (n.assigned_?.size ?? 0) > 0)
    ) {
        const { patchPlugin_: o } = r;
        if (o) {
            const u = o.getPath(n);
            u && o.generatePatches_(n, u, r);
        }
        C0(n);
    }
}
function bE(n, r, i) {
    const { scope_: o } = n;
    if (ar(i)) {
        const u = i[Ye];
        wl(u, o) &&
            u.callbacks_.push(function () {
                qu(n);
                const d = sh(u);
                R0(n, i, d, r);
            });
    } else
        Tn(i) &&
            n.callbacks_.push(function () {
                const f = tr(n);
                n.type_ === 3
                    ? f.has(i) && ll(i, o.handledSet_, o)
                    : Dd(f, r, n.type_) === i &&
                      o.drafts_.length > 1 &&
                      (n.assigned_.get(r) ?? !1) === !0 &&
                      n.copy_ &&
                      ll(Dd(n.copy_, r, n.type_), o.handledSet_, o);
            });
}
function ll(n, r, i) {
    return (
        (!i.immer_.autoFreeze_ && i.unfinalizedDrafts_ < 1) ||
            ar(n) ||
            r.has(n) ||
            !Tn(n) ||
            xl(n) ||
            (r.add(n),
            bl(n, (o, u) => {
                if (ar(u)) {
                    const f = u[Ye];
                    if (wl(f, i)) {
                        const d = sh(f);
                        sl(n, o, d, n.type_), C0(f);
                    }
                } else Tn(u) && ll(u, r, i);
            })),
        n
    );
}
function SE(n, r) {
    const i = Sl(n),
        o = {
            type_: i ? 1 : 0,
            scope_: r ? r.scope_ : M0(),
            modified_: !1,
            finalized_: !1,
            assigned_: void 0,
            parent_: r,
            base_: n,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
            callbacks_: void 0,
        };
    let u = o,
        f = cl;
    i && ((u = [o]), (f = Io));
    const { revoke: d, proxy: y } = Proxy.revocable(u, f);
    return (o.draft_ = y), (o.revoke_ = d), [y, o];
}
var cl = {
        get(n, r) {
            if (r === Ye) return n;
            let i = n.scope_.arrayMethodsPlugin_;
            const o = n.type_ === 1 && typeof r == "string";
            if (o && i?.isArrayOperationMethod(r)) return i.createMethodInterceptor(n, r);
            const u = tr(n);
            if (!Yg(u, r, n.type_)) return EE(n, u, r);
            const f = u[r];
            if (
                n.finalized_ ||
                !Tn(f) ||
                (o && n.operationMethod && i?.isMutatingArrayMethod(n.operationMethod) && hE(r))
            )
                return f;
            if (f === od(n.base_, r)) {
                qu(n);
                const d = n.type_ === 1 ? +r : r,
                    y = zd(n.scope_, f, n, d);
                return (n.copy_[d] = y);
            }
            return f;
        },
        has(n, r) {
            return r in tr(n);
        },
        ownKeys(n) {
            return Reflect.ownKeys(tr(n));
        },
        set(n, r, i) {
            const o = z0(tr(n), r);
            if (o?.set) return o.set.call(n.draft_, i), !0;
            if (!n.modified_) {
                const u = od(tr(n), r),
                    f = u?.[Ye];
                if (f && f.base_ === i) return (n.copy_[r] = i), n.assigned_.set(r, !1), !0;
                if (dE(i, u) && (i !== void 0 || Yg(n.base_, r, n.type_))) return !0;
                qu(n), Nd(n);
            }
            return (
                (n.copy_[r] === i && (i !== void 0 || r in n.copy_)) ||
                    (Number.isNaN(i) && Number.isNaN(n.copy_[r])) ||
                    ((n.copy_[r] = i), n.assigned_.set(r, !0), bE(n, r, i)),
                !0
            );
        },
        deleteProperty(n, r) {
            return (
                qu(n),
                od(n.base_, r) !== void 0 || r in n.base_ ? (n.assigned_.set(r, !1), Nd(n)) : n.assigned_.delete(r),
                n.copy_ && delete n.copy_[r],
                !0
            );
        },
        getOwnPropertyDescriptor(n, r) {
            const i = tr(n),
                o = Reflect.getOwnPropertyDescriptor(i, r);
            return o && { [Yu]: !0, [Od]: n.type_ !== 1 || r !== "length", [ol]: o[ol], [qo]: i[r] };
        },
        defineProperty() {
            Sn(11);
        },
        getPrototypeOf(n) {
            return _i(n.base_);
        },
        setPrototypeOf() {
            Sn(12);
        },
    },
    Io = {};
for (let n in cl) {
    let r = cl[n];
    Io[n] = function () {
        const i = arguments;
        return (i[0] = i[0][0]), r.apply(this, i);
    };
}
Io.deleteProperty = function (n, r) {
    return Io.set.call(this, n, r, void 0);
};
Io.set = function (n, r, i) {
    return cl.set.call(this, n[0], r, i, n[0]);
};
function od(n, r) {
    const i = n[Ye];
    return (i ? tr(i) : n)[r];
}
function EE(n, r, i) {
    const o = z0(r, i);
    return o ? (qo in o ? o[qo] : o.get?.call(n.draft_)) : void 0;
}
function z0(n, r) {
    if (!(r in n)) return;
    let i = _i(n);
    for (; i; ) {
        const o = Object.getOwnPropertyDescriptor(i, r);
        if (o) return o;
        i = _i(i);
    }
}
function Nd(n) {
    n.modified_ || ((n.modified_ = !0), n.parent_ && Nd(n.parent_));
}
function qu(n) {
    n.copy_ || ((n.assigned_ = new Map()), (n.copy_ = Ad(n.base_, n.scope_.immer_.useStrictShallowCopy_)));
}
var TE = class {
    constructor(n) {
        (this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (r, i, o) => {
                if (vi(r) && !vi(i)) {
                    const f = i;
                    i = r;
                    const d = this;
                    return function (p = f, ...m) {
                        return d.produce(p, (_) => i.call(this, _, ...m));
                    };
                }
                vi(i) || Sn(6), o !== void 0 && !vi(o) && Sn(7);
                let u;
                if (Tn(r)) {
                    const f = Xg(this),
                        d = zd(f, r, void 0);
                    let y = !0;
                    try {
                        (u = i(d)), (y = !1);
                    } finally {
                        y ? Cd(f) : Rd(f);
                    }
                    return Ig(f, o), Qg(u, f);
                } else if (!r || !oh(r)) {
                    if (
                        ((u = i(r)),
                        u === void 0 && (u = r),
                        u === O0 && (u = void 0),
                        this.autoFreeze_ && uh(u, !0),
                        o)
                    ) {
                        const f = [],
                            d = [];
                        Ta(Md).generateReplacementPatches_(r, u, { patches_: f, inversePatches_: d }), o(f, d);
                    }
                    return u;
                } else Sn(1, r);
            }),
            (this.produceWithPatches = (r, i) => {
                if (vi(r)) return (d, ...y) => this.produceWithPatches(d, (p) => r(p, ...y));
                let o, u;
                return [
                    this.produce(r, i, (d, y) => {
                        (o = d), (u = y);
                    }),
                    o,
                    u,
                ];
            }),
            id(n?.autoFreeze) && this.setAutoFreeze(n.autoFreeze),
            id(n?.useStrictShallowCopy) && this.setUseStrictShallowCopy(n.useStrictShallowCopy),
            id(n?.useStrictIteration) && this.setUseStrictIteration(n.useStrictIteration);
    }
    createDraft(n) {
        Tn(n) || Sn(8), ar(n) && (n = xE(n));
        const r = Xg(this),
            i = zd(r, n, void 0);
        return (i[Ye].isManual_ = !0), Rd(r), i;
    }
    finishDraft(n, r) {
        const i = n && n[Ye];
        (!i || !i.isManual_) && Sn(9);
        const { scope_: o } = i;
        return Ig(o, r), Qg(void 0, o);
    }
    setAutoFreeze(n) {
        this.autoFreeze_ = n;
    }
    setUseStrictShallowCopy(n) {
        this.useStrictShallowCopy_ = n;
    }
    setUseStrictIteration(n) {
        this.useStrictIteration_ = n;
    }
    shouldUseStrictIteration() {
        return this.useStrictIteration_;
    }
    applyPatches(n, r) {
        let i;
        for (i = r.length - 1; i >= 0; i--) {
            const u = r[i];
            if (u.path.length === 0 && u.op === "replace") {
                n = u.value;
                break;
            }
        }
        i > -1 && (r = r.slice(i + 1));
        const o = Ta(Md).applyPatches_;
        return ar(n) ? o(n, r) : this.produce(n, (u) => o(u, r));
    }
};
function zd(n, r, i, o) {
    const [u, f] = El(r) ? Ta(ul).proxyMap_(r, i) : Tl(r) ? Ta(ul).proxySet_(r, i) : SE(r, i);
    return (
        (i?.scope_ ?? M0()).drafts_.push(u),
        (f.callbacks_ = i?.callbacks_ ?? []),
        (f.key_ = o),
        i && o !== void 0
            ? _E(i, f, o)
            : f.callbacks_.push(function (p) {
                  p.mapSetPlugin_?.fixSetContents(f);
                  const { patchPlugin_: m } = p;
                  f.modified_ && m && m.generatePatches_(f, [], p);
              }),
        u
    );
}
function xE(n) {
    return ar(n) || Sn(10, n), B0(n);
}
function B0(n) {
    if (!Tn(n) || xl(n)) return n;
    const r = n[Ye];
    let i,
        o = !0;
    if (r) {
        if (!r.modified_) return r.base_;
        (r.finalized_ = !0),
            (i = Ad(n, r.scope_.immer_.useStrictShallowCopy_)),
            (o = r.scope_.immer_.shouldUseStrictIteration());
    } else i = Ad(n, !0);
    return (
        bl(
            i,
            (u, f) => {
                sl(i, u, B0(f));
            },
            o
        ),
        r && (r.finalized_ = !1),
        i
    );
}
var wE = new TE(),
    U0 = wE.produce;
function L0(n) {
    return ({ dispatch: i, getState: o }) =>
        (u) =>
        (f) =>
            typeof f == "function" ? f(i, o, n) : u(f);
}
var OE = L0(),
    DE = L0,
    AE =
        typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                  if (arguments.length !== 0) return typeof arguments[0] == "object" ? al : al.apply(null, arguments);
              },
    ME = (n) => n && typeof n.match == "function";
function jo(n, r) {
    function i(...o) {
        if (r) {
            let u = r(...o);
            if (!u) throw new Error(er(0));
            return {
                type: n,
                payload: u.payload,
                ...("meta" in u && { meta: u.meta }),
                ...("error" in u && { error: u.error }),
            };
        }
        return { type: n, payload: o[0] };
    }
    return (i.toString = () => `${n}`), (i.type = n), (i.match = (o) => cE(o) && o.type === n), i;
}
var H0 = class Lo extends Array {
    constructor(...r) {
        super(...r), Object.setPrototypeOf(this, Lo.prototype);
    }
    static get [Symbol.species]() {
        return Lo;
    }
    concat(...r) {
        return super.concat.apply(this, r);
    }
    prepend(...r) {
        return r.length === 1 && Array.isArray(r[0]) ? new Lo(...r[0].concat(this)) : new Lo(...r.concat(this));
    }
};
function Pg(n) {
    return Tn(n) ? U0(n, () => {}) : n;
}
function Cu(n, r, i) {
    return n.has(r) ? n.get(r) : n.set(r, i(r)).get(r);
}
function CE(n) {
    return typeof n == "boolean";
}
var RE = () =>
        function (r) {
            const {
                thunk: i = !0,
                immutableCheck: o = !0,
                serializableCheck: u = !0,
                actionCreatorCheck: f = !0,
            } = r ?? {};
            let d = new H0();
            return i && (CE(i) ? d.push(OE) : d.push(DE(i.extraArgument))), d;
        },
    NE = "RTK_autoBatch",
    Kg = (n) => (r) => {
        setTimeout(r, n);
    },
    zE =
        (n = { type: "raf" }) =>
        (r) =>
        (...i) => {
            const o = r(...i);
            let u = !0,
                f = !1,
                d = !1;
            const y = new Set(),
                p =
                    n.type === "tick"
                        ? queueMicrotask
                        : n.type === "raf"
                          ? typeof window < "u" && window.requestAnimationFrame
                              ? window.requestAnimationFrame
                              : Kg(10)
                          : n.type === "callback"
                            ? n.queueNotification
                            : Kg(n.timeout),
                m = () => {
                    (d = !1), f && ((f = !1), y.forEach((_) => _()));
                };
            return Object.assign({}, o, {
                subscribe(_) {
                    const g = () => u && _(),
                        T = o.subscribe(g);
                    return (
                        y.add(_),
                        () => {
                            T(), y.delete(_);
                        }
                    );
                },
                dispatch(_) {
                    try {
                        return (u = !_?.meta?.[NE]), (f = !u), f && (d || ((d = !0), p(m))), o.dispatch(_);
                    } finally {
                        u = !0;
                    }
                },
            });
        },
    BE = (n) =>
        function (i) {
            const { autoBatch: o = !0 } = i ?? {};
            let u = new H0(n);
            return o && u.push(zE(typeof o == "object" ? o : void 0)), u;
        };
function UE(n) {
    const r = RE(),
        {
            reducer: i = void 0,
            middleware: o,
            devTools: u = !0,
            preloadedState: f = void 0,
            enhancers: d = void 0,
        } = n || {};
    let y;
    if (typeof i == "function") y = i;
    else if (ah(i)) y = w0(i);
    else throw new Error(er(1));
    let p;
    typeof o == "function" ? (p = o(r)) : (p = r());
    let m = al;
    u && (m = AE({ trace: !1, ...(typeof u == "object" && u) }));
    const _ = lE(...p),
        g = BE(_);
    let T = typeof d == "function" ? d(g) : g();
    const O = m(...T);
    return ih(y, f, O);
}
function k0(n) {
    const r = {},
        i = [];
    let o;
    const u = {
        addCase(f, d) {
            const y = typeof f == "string" ? f : f.type;
            if (!y) throw new Error(er(28));
            if (y in r) throw new Error(er(29));
            return (r[y] = d), u;
        },
        addAsyncThunk(f, d) {
            return (
                d.pending && (r[f.pending.type] = d.pending),
                d.rejected && (r[f.rejected.type] = d.rejected),
                d.fulfilled && (r[f.fulfilled.type] = d.fulfilled),
                d.settled && i.push({ matcher: f.settled, reducer: d.settled }),
                u
            );
        },
        addMatcher(f, d) {
            return i.push({ matcher: f, reducer: d }), u;
        },
        addDefaultCase(f) {
            return (o = f), u;
        },
    };
    return n(u), [r, i, o];
}
function LE(n) {
    return typeof n == "function";
}
function HE(n, r) {
    let [i, o, u] = k0(r),
        f;
    if (LE(n)) f = () => Pg(n());
    else {
        const y = Pg(n);
        f = () => y;
    }
    function d(y = f(), p) {
        let m = [i[p.type], ...o.filter(({ matcher: _ }) => _(p)).map(({ reducer: _ }) => _)];
        return (
            m.filter((_) => !!_).length === 0 && (m = [u]),
            m.reduce((_, g) => {
                if (g)
                    if (ar(_)) {
                        const O = g(_, p);
                        return O === void 0 ? _ : O;
                    } else {
                        if (Tn(_)) return U0(_, (T) => g(T, p));
                        {
                            const T = g(_, p);
                            if (T === void 0) {
                                if (_ === null) return _;
                                throw Error("A case reducer on a non-draftable value must not return undefined");
                            }
                            return T;
                        }
                    }
                return _;
            }, y)
        );
    }
    return (d.getInitialState = f), d;
}
var kE = (n, r) => (ME(n) ? n.match(r) : n(r));
function jE(...n) {
    return (r) => n.some((i) => kE(i, r));
}
var YE = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    qE = (n = 21) => {
        let r = "",
            i = n;
        for (; i--; ) r += YE[(Math.random() * 64) | 0];
        return r;
    },
    GE = ["name", "message", "stack", "code"],
    sd = class {
        constructor(n, r) {
            (this.payload = n), (this.meta = r);
        }
        _type;
    },
    Zg = class {
        constructor(n, r) {
            (this.payload = n), (this.meta = r);
        }
        _type;
    },
    IE = (n) => {
        if (typeof n == "object" && n !== null) {
            const r = {};
            for (const i of GE) typeof n[i] == "string" && (r[i] = n[i]);
            return r;
        }
        return { message: String(n) };
    },
    Wg = "External signal was aborted",
    wi = (() => {
        function n(r, i, o) {
            const u = jo(r + "/fulfilled", (p, m, _, g) => ({
                    payload: p,
                    meta: { ...(g || {}), arg: _, requestId: m, requestStatus: "fulfilled" },
                })),
                f = jo(r + "/pending", (p, m, _) => ({
                    payload: void 0,
                    meta: { ...(_ || {}), arg: m, requestId: p, requestStatus: "pending" },
                })),
                d = jo(r + "/rejected", (p, m, _, g, T) => ({
                    payload: g,
                    error: ((o && o.serializeError) || IE)(p || "Rejected"),
                    meta: {
                        ...(T || {}),
                        arg: _,
                        requestId: m,
                        rejectedWithValue: !!g,
                        requestStatus: "rejected",
                        aborted: p?.name === "AbortError",
                        condition: p?.name === "ConditionError",
                    },
                }));
            function y(p, { signal: m } = {}) {
                return (_, g, T) => {
                    const O = o?.idGenerator ? o.idGenerator(p) : qE(),
                        k = new AbortController();
                    let Y, R;
                    function q(x) {
                        (R = x), k.abort();
                    }
                    m && (m.aborted ? q(Wg) : m.addEventListener("abort", () => q(Wg), { once: !0 }));
                    const w = (async function () {
                        let x;
                        try {
                            let D = o?.condition?.(p, { getState: g, extra: T });
                            if ((QE(D) && (D = await D), D === !1 || k.signal.aborted))
                                throw {
                                    name: "ConditionError",
                                    message: "Aborted due to condition callback returning false.",
                                };
                            const G = new Promise((U, Z) => {
                                (Y = () => {
                                    Z({ name: "AbortError", message: R || "Aborted" });
                                }),
                                    k.signal.addEventListener("abort", Y, { once: !0 });
                            });
                            _(f(O, p, o?.getPendingMeta?.({ requestId: O, arg: p }, { getState: g, extra: T }))),
                                (x = await Promise.race([
                                    G,
                                    Promise.resolve(
                                        i(p, {
                                            dispatch: _,
                                            getState: g,
                                            extra: T,
                                            requestId: O,
                                            signal: k.signal,
                                            abort: q,
                                            rejectWithValue: (U, Z) => new sd(U, Z),
                                            fulfillWithValue: (U, Z) => new Zg(U, Z),
                                        })
                                    ).then((U) => {
                                        if (U instanceof sd) throw U;
                                        return U instanceof Zg ? u(U.payload, O, p, U.meta) : u(U, O, p);
                                    }),
                                ]));
                        } catch (D) {
                            x = D instanceof sd ? d(null, O, p, D.payload, D.meta) : d(D, O, p);
                        } finally {
                            Y && k.signal.removeEventListener("abort", Y);
                        }
                        return (o && !o.dispatchConditionRejection && d.match(x) && x.meta.condition) || _(x), x;
                    })();
                    return Object.assign(w, {
                        abort: q,
                        requestId: O,
                        arg: p,
                        unwrap() {
                            return w.then(XE);
                        },
                    });
                };
            }
            return Object.assign(y, { pending: f, rejected: d, fulfilled: u, settled: jE(d, u), typePrefix: r });
        }
        return (n.withTypes = () => n), n;
    })();
function XE(n) {
    if (n.meta && n.meta.rejectedWithValue) throw n.payload;
    if (n.error) throw n.error;
    return n.payload;
}
function QE(n) {
    return n !== null && typeof n == "object" && typeof n.then == "function";
}
var VE = Symbol.for("rtk-slice-createasyncthunk");
function PE(n, r) {
    return `${n}/${r}`;
}
function KE({ creators: n } = {}) {
    const r = n?.asyncThunk?.[VE];
    return function (o) {
        const { name: u, reducerPath: f = u } = o;
        if (!u) throw new Error(er(11));
        const d = (typeof o.reducers == "function" ? o.reducers(WE()) : o.reducers) || {},
            y = Object.keys(d),
            p = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] },
            m = {
                addCase(x, C) {
                    const D = typeof x == "string" ? x : x.type;
                    if (!D) throw new Error(er(12));
                    if (D in p.sliceCaseReducersByType) throw new Error(er(13));
                    return (p.sliceCaseReducersByType[D] = C), m;
                },
                addMatcher(x, C) {
                    return p.sliceMatchers.push({ matcher: x, reducer: C }), m;
                },
                exposeAction(x, C) {
                    return (p.actionCreators[x] = C), m;
                },
                exposeCaseReducer(x, C) {
                    return (p.sliceCaseReducersByName[x] = C), m;
                },
            };
        y.forEach((x) => {
            const C = d[x],
                D = { reducerName: x, type: PE(u, x), createNotation: typeof o.reducers == "function" };
            $E(C) ? tT(D, C, m, r) : FE(D, C, m);
        });
        function _() {
            const [x = {}, C = [], D = void 0] =
                    typeof o.extraReducers == "function" ? k0(o.extraReducers) : [o.extraReducers],
                G = { ...x, ...p.sliceCaseReducersByType };
            return HE(o.initialState, (U) => {
                for (let Z in G) U.addCase(Z, G[Z]);
                for (let Z of p.sliceMatchers) U.addMatcher(Z.matcher, Z.reducer);
                for (let Z of C) U.addMatcher(Z.matcher, Z.reducer);
                D && U.addDefaultCase(D);
            });
        }
        const g = (x) => x,
            T = new Map(),
            O = new WeakMap();
        let k;
        function Y(x, C) {
            return k || (k = _()), k(x, C);
        }
        function R() {
            return k || (k = _()), k.getInitialState();
        }
        function q(x, C = !1) {
            function D(U) {
                let Z = U[x];
                return typeof Z > "u" && C && (Z = Cu(O, D, R)), Z;
            }
            function G(U = g) {
                const Z = Cu(T, C, () => new WeakMap());
                return Cu(Z, U, () => {
                    const ut = {};
                    for (const [I, $] of Object.entries(o.selectors ?? {})) ut[I] = ZE($, U, () => Cu(O, U, R), C);
                    return ut;
                });
            }
            return {
                reducerPath: x,
                getSelectors: G,
                get selectors() {
                    return G(D);
                },
                selectSlice: D,
            };
        }
        const w = {
            name: u,
            reducer: Y,
            actions: p.actionCreators,
            caseReducers: p.sliceCaseReducersByName,
            getInitialState: R,
            ...q(f),
            injectInto(x, { reducerPath: C, ...D } = {}) {
                const G = C ?? f;
                return x.inject({ reducerPath: G, reducer: Y }, D), { ...w, ...q(G, !0) };
            },
        };
        return w;
    };
}
function ZE(n, r, i, o) {
    function u(f, ...d) {
        let y = r(f);
        return typeof y > "u" && o && (y = i()), n(y, ...d);
    }
    return (u.unwrapped = n), u;
}
var lh = KE();
function WE() {
    function n(r, i) {
        return { _reducerDefinitionType: "asyncThunk", payloadCreator: r, ...i };
    }
    return (
        (n.withTypes = () => n),
        {
            reducer(r) {
                return Object.assign(
                    {
                        [r.name](...i) {
                            return r(...i);
                        },
                    }[r.name],
                    { _reducerDefinitionType: "reducer" }
                );
            },
            preparedReducer(r, i) {
                return { _reducerDefinitionType: "reducerWithPrepare", prepare: r, reducer: i };
            },
            asyncThunk: n,
        }
    );
}
function FE({ type: n, reducerName: r, createNotation: i }, o, u) {
    let f, d;
    if ("reducer" in o) {
        if (i && !JE(o)) throw new Error(er(17));
        (f = o.reducer), (d = o.prepare);
    } else f = o;
    u.addCase(n, f)
        .exposeCaseReducer(r, f)
        .exposeAction(r, d ? jo(n, d) : jo(n));
}
function $E(n) {
    return n._reducerDefinitionType === "asyncThunk";
}
function JE(n) {
    return n._reducerDefinitionType === "reducerWithPrepare";
}
function tT({ type: n, reducerName: r }, i, o, u) {
    if (!u) throw new Error(er(18));
    const { payloadCreator: f, fulfilled: d, pending: y, rejected: p, settled: m, options: _ } = i,
        g = u(n, f, _);
    o.exposeAction(r, g),
        d && o.addCase(g.fulfilled, d),
        y && o.addCase(g.pending, y),
        p && o.addCase(g.rejected, p),
        m && o.addMatcher(g.settled, m),
        o.exposeCaseReducer(r, { fulfilled: d || Ru, pending: y || Ru, rejected: p || Ru, settled: m || Ru });
}
function Ru() {}
function er(n) {
    return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const eT = {
        darkMode: !1,
        highContrast: !1,
        cellMode3x3: !1,
        currentLocale: "en",
        currentLocalization: void 0,
        disableAnimation: !1,
        disableSound: !1,
        gameFont: "inter",
        gridStyle: "bordered",
    },
    j0 = lh({
        name: "options",
        initialState: eT,
        reducers: {
            setDarkMode: (n, r) => {
                n.darkMode = r.payload;
            },
            setCurrentLocale: (n, r) => {
                n.currentLocale = r.payload;
            },
            setCurrentLocalization: (n, r) => {
                n.currentLocalization = r.payload;
            },
            setDisableAnimations: (n, r) => {
                n.disableAnimation = r.payload;
            },
            setDisableSound: (n, r) => {
                n.disableSound = r.payload;
            },
            setGameFont: (n, r) => {
                n.gameFont = r.payload;
            },
            setHighContrast: (n, r) => {
                n.highContrast = r.payload;
            },
            setCellMode3x3: (n, r) => {
                n.cellMode3x3 = r.payload;
            },
            setGridStyle: (n, r) => {
                n.gridStyle = r.payload;
            },
        },
    }),
    {
        setDisableSound: _4,
        setDarkMode: b4,
        setHighContrast: S4,
        setCellMode3x3: E4,
        setCurrentLocale: T4,
        setCurrentLocalization: x4,
        setDisableAnimations: w4,
        setGameFont: O4,
        setGridStyle: D4,
    } = j0.actions,
    nT = j0.reducer,
    Y0 = 6048e5,
    rT = 864e5,
    aT = 6e4,
    iT = 36e5,
    oT = 1e3,
    Fg = Symbol.for("constructDateFrom");
function le(n, r) {
    return typeof n == "function"
        ? n(r)
        : n && typeof n == "object" && Fg in n
          ? n[Fg](r)
          : n instanceof Date
            ? new n.constructor(r)
            : new Date(r);
}
function ye(n, r) {
    return le(r || n, n);
}
function Ol(n, r, i) {
    const o = ye(n, i?.in);
    return isNaN(r) ? le(i?.in || n, NaN) : (r && o.setDate(o.getDate() + r), o);
}
let sT = {};
function Oi() {
    return sT;
}
function Yr(n, r) {
    const i = Oi(),
        o =
            r?.weekStartsOn ??
            r?.locale?.options?.weekStartsOn ??
            i.weekStartsOn ??
            i.locale?.options?.weekStartsOn ??
            0,
        u = ye(n, r?.in),
        f = u.getDay(),
        d = (f < o ? 7 : 0) + f - o;
    return u.setDate(u.getDate() - d), u.setHours(0, 0, 0, 0), u;
}
function bi(n, r) {
    return Yr(n, { ...r, weekStartsOn: 1 });
}
function q0(n, r) {
    const i = ye(n, r?.in),
        o = i.getFullYear(),
        u = le(i, 0);
    u.setFullYear(o + 1, 0, 4), u.setHours(0, 0, 0, 0);
    const f = bi(u),
        d = le(i, 0);
    d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0);
    const y = bi(d);
    return i.getTime() >= f.getTime() ? o + 1 : i.getTime() >= y.getTime() ? o : o - 1;
}
function fl(n) {
    const r = ye(n),
        i = new Date(
            Date.UTC(
                r.getFullYear(),
                r.getMonth(),
                r.getDate(),
                r.getHours(),
                r.getMinutes(),
                r.getSeconds(),
                r.getMilliseconds()
            )
        );
    return i.setUTCFullYear(r.getFullYear()), +n - +i;
}
function ch(n, ...r) {
    const i = le.bind(
        null,
        r.find((o) => typeof o == "object")
    );
    return r.map(i);
}
function dl(n, r) {
    const i = ye(n, r?.in);
    return i.setHours(0, 0, 0, 0), i;
}
function G0(n, r, i) {
    const [o, u] = ch(i?.in, n, r),
        f = dl(o),
        d = dl(u),
        y = +f - fl(f),
        p = +d - fl(d);
    return Math.round((y - p) / rT);
}
function uT(n, r) {
    const i = q0(n, r),
        o = le(n, 0);
    return o.setFullYear(i, 0, 4), o.setHours(0, 0, 0, 0), bi(o);
}
function fh(n) {
    return le(n, Date.now());
}
function I0(n, r, i) {
    const [o, u] = ch(i?.in, n, r);
    return +dl(o) == +dl(u);
}
function lT(n) {
    return n instanceof Date || (typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]");
}
function cT(n) {
    return !((!lT(n) && typeof n != "number") || isNaN(+ye(n)));
}
function fT(n, r, i) {
    const [o, u] = ch(i?.in, n, r),
        f = $g(o, u),
        d = Math.abs(G0(o, u));
    o.setDate(o.getDate() - f * d);
    const y = +($g(o, u) === -f),
        p = f * (d - y);
    return p === 0 ? 0 : p;
}
function $g(n, r) {
    const i =
        n.getFullYear() - r.getFullYear() ||
        n.getMonth() - r.getMonth() ||
        n.getDate() - r.getDate() ||
        n.getHours() - r.getHours() ||
        n.getMinutes() - r.getMinutes() ||
        n.getSeconds() - r.getSeconds() ||
        n.getMilliseconds() - r.getMilliseconds();
    return i < 0 ? -1 : i > 0 ? 1 : i;
}
function dT(n) {
    return (r) => {
        const o = (n ? Math[n] : Math.trunc)(r);
        return o === 0 ? 0 : o;
    };
}
function hT(n, r) {
    return +ye(n) - +ye(r);
}
function mT(n, r, i) {
    const o = hT(n, r) / 1e3;
    return dT(i?.roundingMethod)(o);
}
function pT(n, r) {
    const i = ye(n, r?.in);
    return i.setFullYear(i.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i;
}
const yT = {
        lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    gT = (n, r, i) => {
        let o;
        const u = yT[n];
        return (
            typeof u == "string" ? (o = u) : r === 1 ? (o = u.one) : (o = u.other.replace("{{count}}", r.toString())),
            i?.addSuffix ? (i.comparison && i.comparison > 0 ? "in " + o : o + " ago") : o
        );
    };
function ud(n) {
    return (r = {}) => {
        const i = r.width ? String(r.width) : n.defaultWidth;
        return n.formats[i] || n.formats[n.defaultWidth];
    };
}
const vT = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
    _T = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
    bT = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
    },
    ST = {
        date: ud({ formats: vT, defaultWidth: "full" }),
        time: ud({ formats: _T, defaultWidth: "full" }),
        dateTime: ud({ formats: bT, defaultWidth: "full" }),
    },
    ET = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
    },
    TT = (n, r, i, o) => ET[n];
function zo(n) {
    return (r, i) => {
        const o = i?.context ? String(i.context) : "standalone";
        let u;
        if (o === "formatting" && n.formattingValues) {
            const d = n.defaultFormattingWidth || n.defaultWidth,
                y = i?.width ? String(i.width) : d;
            u = n.formattingValues[y] || n.formattingValues[d];
        } else {
            const d = n.defaultWidth,
                y = i?.width ? String(i.width) : n.defaultWidth;
            u = n.values[y] || n.values[d];
        }
        const f = n.argumentCallback ? n.argumentCallback(r) : r;
        return u[f];
    };
}
const xT = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] },
    wT = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    OT = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    DT = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    AT = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
    },
    MT = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
    },
    CT = (n, r) => {
        const i = Number(n),
            o = i % 100;
        if (o > 20 || o < 10)
            switch (o % 10) {
                case 1:
                    return i + "st";
                case 2:
                    return i + "nd";
                case 3:
                    return i + "rd";
            }
        return i + "th";
    },
    RT = {
        ordinalNumber: CT,
        era: zo({ values: xT, defaultWidth: "wide" }),
        quarter: zo({ values: wT, defaultWidth: "wide", argumentCallback: (n) => n - 1 }),
        month: zo({ values: OT, defaultWidth: "wide" }),
        day: zo({ values: DT, defaultWidth: "wide" }),
        dayPeriod: zo({ values: AT, defaultWidth: "wide", formattingValues: MT, defaultFormattingWidth: "wide" }),
    };
function Bo(n) {
    return (r, i = {}) => {
        const o = i.width,
            u = (o && n.matchPatterns[o]) || n.matchPatterns[n.defaultMatchWidth],
            f = r.match(u);
        if (!f) return null;
        const d = f[0],
            y = (o && n.parsePatterns[o]) || n.parsePatterns[n.defaultParseWidth],
            p = Array.isArray(y) ? zT(y, (g) => g.test(d)) : NT(y, (g) => g.test(d));
        let m;
        (m = n.valueCallback ? n.valueCallback(p) : p), (m = i.valueCallback ? i.valueCallback(m) : m);
        const _ = r.slice(d.length);
        return { value: m, rest: _ };
    };
}
function NT(n, r) {
    for (const i in n) if (Object.prototype.hasOwnProperty.call(n, i) && r(n[i])) return i;
}
function zT(n, r) {
    for (let i = 0; i < n.length; i++) if (r(n[i])) return i;
}
function BT(n) {
    return (r, i = {}) => {
        const o = r.match(n.matchPattern);
        if (!o) return null;
        const u = o[0],
            f = r.match(n.parsePattern);
        if (!f) return null;
        let d = n.valueCallback ? n.valueCallback(f[0]) : f[0];
        d = i.valueCallback ? i.valueCallback(d) : d;
        const y = r.slice(u.length);
        return { value: d, rest: y };
    };
}
const UT = /^(\d+)(th|st|nd|rd)?/i,
    LT = /\d+/i,
    HT = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    kT = { any: [/^b/i, /^(a|c)/i] },
    jT = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
    YT = { any: [/1/i, /2/i, /3/i, /4/i] },
    qT = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    GT = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
    },
    IT = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    XT = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    QT = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    VT = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
        },
    },
    PT = {
        ordinalNumber: BT({ matchPattern: UT, parsePattern: LT, valueCallback: (n) => parseInt(n, 10) }),
        era: Bo({ matchPatterns: HT, defaultMatchWidth: "wide", parsePatterns: kT, defaultParseWidth: "any" }),
        quarter: Bo({
            matchPatterns: jT,
            defaultMatchWidth: "wide",
            parsePatterns: YT,
            defaultParseWidth: "any",
            valueCallback: (n) => n + 1,
        }),
        month: Bo({ matchPatterns: qT, defaultMatchWidth: "wide", parsePatterns: GT, defaultParseWidth: "any" }),
        day: Bo({ matchPatterns: IT, defaultMatchWidth: "wide", parsePatterns: XT, defaultParseWidth: "any" }),
        dayPeriod: Bo({ matchPatterns: QT, defaultMatchWidth: "any", parsePatterns: VT, defaultParseWidth: "any" }),
    },
    X0 = {
        code: "en-US",
        formatDistance: gT,
        formatLong: ST,
        formatRelative: TT,
        localize: RT,
        match: PT,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function KT(n, r) {
    const i = ye(n, r?.in);
    return G0(i, pT(i)) + 1;
}
function Q0(n, r) {
    const i = ye(n, r?.in),
        o = +bi(i) - +uT(i);
    return Math.round(o / Y0) + 1;
}
function dh(n, r) {
    const i = ye(n, r?.in),
        o = i.getFullYear(),
        u = Oi(),
        f =
            r?.firstWeekContainsDate ??
            r?.locale?.options?.firstWeekContainsDate ??
            u.firstWeekContainsDate ??
            u.locale?.options?.firstWeekContainsDate ??
            1,
        d = le(r?.in || n, 0);
    d.setFullYear(o + 1, 0, f), d.setHours(0, 0, 0, 0);
    const y = Yr(d, r),
        p = le(r?.in || n, 0);
    p.setFullYear(o, 0, f), p.setHours(0, 0, 0, 0);
    const m = Yr(p, r);
    return +i >= +y ? o + 1 : +i >= +m ? o : o - 1;
}
function ZT(n, r) {
    const i = Oi(),
        o =
            r?.firstWeekContainsDate ??
            r?.locale?.options?.firstWeekContainsDate ??
            i.firstWeekContainsDate ??
            i.locale?.options?.firstWeekContainsDate ??
            1,
        u = dh(n, r),
        f = le(r?.in || n, 0);
    return f.setFullYear(u, 0, o), f.setHours(0, 0, 0, 0), Yr(f, r);
}
function V0(n, r) {
    const i = ye(n, r?.in),
        o = +Yr(i, r) - +ZT(i, r);
    return Math.round(o / Y0) + 1;
}
function Qt(n, r) {
    const i = n < 0 ? "-" : "",
        o = Math.abs(n).toString().padStart(r, "0");
    return i + o;
}
const Hr = {
        y(n, r) {
            const i = n.getFullYear(),
                o = i > 0 ? i : 1 - i;
            return Qt(r === "yy" ? o % 100 : o, r.length);
        },
        M(n, r) {
            const i = n.getMonth();
            return r === "M" ? String(i + 1) : Qt(i + 1, 2);
        },
        d(n, r) {
            return Qt(n.getDate(), r.length);
        },
        a(n, r) {
            const i = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (r) {
                case "a":
                case "aa":
                    return i.toUpperCase();
                case "aaa":
                    return i;
                case "aaaaa":
                    return i[0];
                default:
                    return i === "am" ? "a.m." : "p.m.";
            }
        },
        h(n, r) {
            return Qt(n.getHours() % 12 || 12, r.length);
        },
        H(n, r) {
            return Qt(n.getHours(), r.length);
        },
        m(n, r) {
            return Qt(n.getMinutes(), r.length);
        },
        s(n, r) {
            return Qt(n.getSeconds(), r.length);
        },
        S(n, r) {
            const i = r.length,
                o = n.getMilliseconds(),
                u = Math.trunc(o * Math.pow(10, i - 3));
            return Qt(u, r.length);
        },
    },
    yi = {
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
    },
    Jg = {
        G: function (n, r, i) {
            const o = n.getFullYear() > 0 ? 1 : 0;
            switch (r) {
                case "G":
                case "GG":
                case "GGG":
                    return i.era(o, { width: "abbreviated" });
                case "GGGGG":
                    return i.era(o, { width: "narrow" });
                default:
                    return i.era(o, { width: "wide" });
            }
        },
        y: function (n, r, i) {
            if (r === "yo") {
                const o = n.getFullYear(),
                    u = o > 0 ? o : 1 - o;
                return i.ordinalNumber(u, { unit: "year" });
            }
            return Hr.y(n, r);
        },
        Y: function (n, r, i, o) {
            const u = dh(n, o),
                f = u > 0 ? u : 1 - u;
            if (r === "YY") {
                const d = f % 100;
                return Qt(d, 2);
            }
            return r === "Yo" ? i.ordinalNumber(f, { unit: "year" }) : Qt(f, r.length);
        },
        R: function (n, r) {
            const i = q0(n);
            return Qt(i, r.length);
        },
        u: function (n, r) {
            const i = n.getFullYear();
            return Qt(i, r.length);
        },
        Q: function (n, r, i) {
            const o = Math.ceil((n.getMonth() + 1) / 3);
            switch (r) {
                case "Q":
                    return String(o);
                case "QQ":
                    return Qt(o, 2);
                case "Qo":
                    return i.ordinalNumber(o, { unit: "quarter" });
                case "QQQ":
                    return i.quarter(o, { width: "abbreviated", context: "formatting" });
                case "QQQQQ":
                    return i.quarter(o, { width: "narrow", context: "formatting" });
                default:
                    return i.quarter(o, { width: "wide", context: "formatting" });
            }
        },
        q: function (n, r, i) {
            const o = Math.ceil((n.getMonth() + 1) / 3);
            switch (r) {
                case "q":
                    return String(o);
                case "qq":
                    return Qt(o, 2);
                case "qo":
                    return i.ordinalNumber(o, { unit: "quarter" });
                case "qqq":
                    return i.quarter(o, { width: "abbreviated", context: "standalone" });
                case "qqqqq":
                    return i.quarter(o, { width: "narrow", context: "standalone" });
                default:
                    return i.quarter(o, { width: "wide", context: "standalone" });
            }
        },
        M: function (n, r, i) {
            const o = n.getMonth();
            switch (r) {
                case "M":
                case "MM":
                    return Hr.M(n, r);
                case "Mo":
                    return i.ordinalNumber(o + 1, { unit: "month" });
                case "MMM":
                    return i.month(o, { width: "abbreviated", context: "formatting" });
                case "MMMMM":
                    return i.month(o, { width: "narrow", context: "formatting" });
                default:
                    return i.month(o, { width: "wide", context: "formatting" });
            }
        },
        L: function (n, r, i) {
            const o = n.getMonth();
            switch (r) {
                case "L":
                    return String(o + 1);
                case "LL":
                    return Qt(o + 1, 2);
                case "Lo":
                    return i.ordinalNumber(o + 1, { unit: "month" });
                case "LLL":
                    return i.month(o, { width: "abbreviated", context: "standalone" });
                case "LLLLL":
                    return i.month(o, { width: "narrow", context: "standalone" });
                default:
                    return i.month(o, { width: "wide", context: "standalone" });
            }
        },
        w: function (n, r, i, o) {
            const u = V0(n, o);
            return r === "wo" ? i.ordinalNumber(u, { unit: "week" }) : Qt(u, r.length);
        },
        I: function (n, r, i) {
            const o = Q0(n);
            return r === "Io" ? i.ordinalNumber(o, { unit: "week" }) : Qt(o, r.length);
        },
        d: function (n, r, i) {
            return r === "do" ? i.ordinalNumber(n.getDate(), { unit: "date" }) : Hr.d(n, r);
        },
        D: function (n, r, i) {
            const o = KT(n);
            return r === "Do" ? i.ordinalNumber(o, { unit: "dayOfYear" }) : Qt(o, r.length);
        },
        E: function (n, r, i) {
            const o = n.getDay();
            switch (r) {
                case "E":
                case "EE":
                case "EEE":
                    return i.day(o, { width: "abbreviated", context: "formatting" });
                case "EEEEE":
                    return i.day(o, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                    return i.day(o, { width: "short", context: "formatting" });
                default:
                    return i.day(o, { width: "wide", context: "formatting" });
            }
        },
        e: function (n, r, i, o) {
            const u = n.getDay(),
                f = (u - o.weekStartsOn + 8) % 7 || 7;
            switch (r) {
                case "e":
                    return String(f);
                case "ee":
                    return Qt(f, 2);
                case "eo":
                    return i.ordinalNumber(f, { unit: "day" });
                case "eee":
                    return i.day(u, { width: "abbreviated", context: "formatting" });
                case "eeeee":
                    return i.day(u, { width: "narrow", context: "formatting" });
                case "eeeeee":
                    return i.day(u, { width: "short", context: "formatting" });
                default:
                    return i.day(u, { width: "wide", context: "formatting" });
            }
        },
        c: function (n, r, i, o) {
            const u = n.getDay(),
                f = (u - o.weekStartsOn + 8) % 7 || 7;
            switch (r) {
                case "c":
                    return String(f);
                case "cc":
                    return Qt(f, r.length);
                case "co":
                    return i.ordinalNumber(f, { unit: "day" });
                case "ccc":
                    return i.day(u, { width: "abbreviated", context: "standalone" });
                case "ccccc":
                    return i.day(u, { width: "narrow", context: "standalone" });
                case "cccccc":
                    return i.day(u, { width: "short", context: "standalone" });
                default:
                    return i.day(u, { width: "wide", context: "standalone" });
            }
        },
        i: function (n, r, i) {
            const o = n.getDay(),
                u = o === 0 ? 7 : o;
            switch (r) {
                case "i":
                    return String(u);
                case "ii":
                    return Qt(u, r.length);
                case "io":
                    return i.ordinalNumber(u, { unit: "day" });
                case "iii":
                    return i.day(o, { width: "abbreviated", context: "formatting" });
                case "iiiii":
                    return i.day(o, { width: "narrow", context: "formatting" });
                case "iiiiii":
                    return i.day(o, { width: "short", context: "formatting" });
                default:
                    return i.day(o, { width: "wide", context: "formatting" });
            }
        },
        a: function (n, r, i) {
            const u = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (r) {
                case "a":
                case "aa":
                    return i.dayPeriod(u, { width: "abbreviated", context: "formatting" });
                case "aaa":
                    return i.dayPeriod(u, { width: "abbreviated", context: "formatting" }).toLowerCase();
                case "aaaaa":
                    return i.dayPeriod(u, { width: "narrow", context: "formatting" });
                default:
                    return i.dayPeriod(u, { width: "wide", context: "formatting" });
            }
        },
        b: function (n, r, i) {
            const o = n.getHours();
            let u;
            switch ((o === 12 ? (u = yi.noon) : o === 0 ? (u = yi.midnight) : (u = o / 12 >= 1 ? "pm" : "am"), r)) {
                case "b":
                case "bb":
                    return i.dayPeriod(u, { width: "abbreviated", context: "formatting" });
                case "bbb":
                    return i.dayPeriod(u, { width: "abbreviated", context: "formatting" }).toLowerCase();
                case "bbbbb":
                    return i.dayPeriod(u, { width: "narrow", context: "formatting" });
                default:
                    return i.dayPeriod(u, { width: "wide", context: "formatting" });
            }
        },
        B: function (n, r, i) {
            const o = n.getHours();
            let u;
            switch (
                (o >= 17 ? (u = yi.evening) : o >= 12 ? (u = yi.afternoon) : o >= 4 ? (u = yi.morning) : (u = yi.night),
                r)
            ) {
                case "B":
                case "BB":
                case "BBB":
                    return i.dayPeriod(u, { width: "abbreviated", context: "formatting" });
                case "BBBBB":
                    return i.dayPeriod(u, { width: "narrow", context: "formatting" });
                default:
                    return i.dayPeriod(u, { width: "wide", context: "formatting" });
            }
        },
        h: function (n, r, i) {
            if (r === "ho") {
                let o = n.getHours() % 12;
                return o === 0 && (o = 12), i.ordinalNumber(o, { unit: "hour" });
            }
            return Hr.h(n, r);
        },
        H: function (n, r, i) {
            return r === "Ho" ? i.ordinalNumber(n.getHours(), { unit: "hour" }) : Hr.H(n, r);
        },
        K: function (n, r, i) {
            const o = n.getHours() % 12;
            return r === "Ko" ? i.ordinalNumber(o, { unit: "hour" }) : Qt(o, r.length);
        },
        k: function (n, r, i) {
            let o = n.getHours();
            return o === 0 && (o = 24), r === "ko" ? i.ordinalNumber(o, { unit: "hour" }) : Qt(o, r.length);
        },
        m: function (n, r, i) {
            return r === "mo" ? i.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Hr.m(n, r);
        },
        s: function (n, r, i) {
            return r === "so" ? i.ordinalNumber(n.getSeconds(), { unit: "second" }) : Hr.s(n, r);
        },
        S: function (n, r) {
            return Hr.S(n, r);
        },
        X: function (n, r, i) {
            const o = n.getTimezoneOffset();
            if (o === 0) return "Z";
            switch (r) {
                case "X":
                    return ev(o);
                case "XXXX":
                case "XX":
                    return va(o);
                default:
                    return va(o, ":");
            }
        },
        x: function (n, r, i) {
            const o = n.getTimezoneOffset();
            switch (r) {
                case "x":
                    return ev(o);
                case "xxxx":
                case "xx":
                    return va(o);
                default:
                    return va(o, ":");
            }
        },
        O: function (n, r, i) {
            const o = n.getTimezoneOffset();
            switch (r) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + tv(o, ":");
                default:
                    return "GMT" + va(o, ":");
            }
        },
        z: function (n, r, i) {
            const o = n.getTimezoneOffset();
            switch (r) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + tv(o, ":");
                default:
                    return "GMT" + va(o, ":");
            }
        },
        t: function (n, r, i) {
            const o = Math.trunc(+n / 1e3);
            return Qt(o, r.length);
        },
        T: function (n, r, i) {
            return Qt(+n, r.length);
        },
    };
function tv(n, r = "") {
    const i = n > 0 ? "-" : "+",
        o = Math.abs(n),
        u = Math.trunc(o / 60),
        f = o % 60;
    return f === 0 ? i + String(u) : i + String(u) + r + Qt(f, 2);
}
function ev(n, r) {
    return n % 60 === 0 ? (n > 0 ? "-" : "+") + Qt(Math.abs(n) / 60, 2) : va(n, r);
}
function va(n, r = "") {
    const i = n > 0 ? "-" : "+",
        o = Math.abs(n),
        u = Qt(Math.trunc(o / 60), 2),
        f = Qt(o % 60, 2);
    return i + u + r + f;
}
const nv = (n, r) => {
        switch (n) {
            case "P":
                return r.date({ width: "short" });
            case "PP":
                return r.date({ width: "medium" });
            case "PPP":
                return r.date({ width: "long" });
            default:
                return r.date({ width: "full" });
        }
    },
    P0 = (n, r) => {
        switch (n) {
            case "p":
                return r.time({ width: "short" });
            case "pp":
                return r.time({ width: "medium" });
            case "ppp":
                return r.time({ width: "long" });
            default:
                return r.time({ width: "full" });
        }
    },
    WT = (n, r) => {
        const i = n.match(/(P+)(p+)?/) || [],
            o = i[1],
            u = i[2];
        if (!u) return nv(n, r);
        let f;
        switch (o) {
            case "P":
                f = r.dateTime({ width: "short" });
                break;
            case "PP":
                f = r.dateTime({ width: "medium" });
                break;
            case "PPP":
                f = r.dateTime({ width: "long" });
                break;
            default:
                f = r.dateTime({ width: "full" });
                break;
        }
        return f.replace("{{date}}", nv(o, r)).replace("{{time}}", P0(u, r));
    },
    Bd = { p: P0, P: WT },
    FT = /^D+$/,
    $T = /^Y+$/,
    JT = ["D", "DD", "YY", "YYYY"];
function K0(n) {
    return FT.test(n);
}
function Z0(n) {
    return $T.test(n);
}
function Ud(n, r, i) {
    const o = tx(n, r, i);
    if ((console.warn(o), JT.includes(n))) throw new RangeError(o);
}
function tx(n, r, i) {
    const o = n[0] === "Y" ? "years" : "days of the month";
    return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${o} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ex = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    nx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    rx = /^'([^]*?)'?$/,
    ax = /''/g,
    ix = /[a-zA-Z]/;
function ox(n, r, i) {
    const o = Oi(),
        u = o.locale ?? X0,
        f = o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1,
        d = o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0,
        y = ye(n, i?.in);
    if (!cT(y)) throw new RangeError("Invalid time value");
    let p = r
        .match(nx)
        .map((_) => {
            const g = _[0];
            if (g === "p" || g === "P") {
                const T = Bd[g];
                return T(_, u.formatLong);
            }
            return _;
        })
        .join("")
        .match(ex)
        .map((_) => {
            if (_ === "''") return { isToken: !1, value: "'" };
            const g = _[0];
            if (g === "'") return { isToken: !1, value: sx(_) };
            if (Jg[g]) return { isToken: !0, value: _ };
            if (g.match(ix))
                throw new RangeError("Format string contains an unescaped latin alphabet character `" + g + "`");
            return { isToken: !1, value: _ };
        });
    u.localize.preprocessor && (p = u.localize.preprocessor(y, p));
    const m = { firstWeekContainsDate: f, weekStartsOn: d, locale: u };
    return p
        .map((_) => {
            if (!_.isToken) return _.value;
            const g = _.value;
            (Z0(g) || K0(g)) && Ud(g, r, String(n));
            const T = Jg[g[0]];
            return T(y, g, u.localize, m);
        })
        .join("");
}
function sx(n) {
    const r = n.match(rx);
    return r ? r[1].replace(ax, "'") : n;
}
function ux() {
    return Object.assign({}, Oi());
}
function lx(n, r) {
    const i = ye(n, r?.in).getDay();
    return i === 0 ? 7 : i;
}
function cx(n, r) {
    const i = fx(r) ? new r(0) : le(r, 0);
    return (
        i.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
        i.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()),
        i
    );
}
function fx(n) {
    return typeof n == "function" && n.prototype?.constructor === n;
}
const dx = 10;
class W0 {
    subPriority = 0;
    validate(r, i) {
        return !0;
    }
}
class hx extends W0 {
    constructor(r, i, o, u, f) {
        super(),
            (this.value = r),
            (this.validateValue = i),
            (this.setValue = o),
            (this.priority = u),
            f && (this.subPriority = f);
    }
    validate(r, i) {
        return this.validateValue(r, this.value, i);
    }
    set(r, i, o) {
        return this.setValue(r, i, this.value, o);
    }
}
class mx extends W0 {
    priority = dx;
    subPriority = -1;
    constructor(r, i) {
        super(), (this.context = r || ((o) => le(i, o)));
    }
    set(r, i) {
        return i.timestampIsSet ? r : le(r, cx(r, this.context));
    }
}
class Gt {
    run(r, i, o, u) {
        const f = this.parse(r, i, o, u);
        return f
            ? { setter: new hx(f.value, this.validate, this.set, this.priority, this.subPriority), rest: f.rest }
            : null;
    }
    validate(r, i, o) {
        return !0;
    }
}
class px extends Gt {
    priority = 140;
    parse(r, i, o) {
        switch (i) {
            case "G":
            case "GG":
            case "GGG":
                return o.era(r, { width: "abbreviated" }) || o.era(r, { width: "narrow" });
            case "GGGGG":
                return o.era(r, { width: "narrow" });
            default:
                return (
                    o.era(r, { width: "wide" }) || o.era(r, { width: "abbreviated" }) || o.era(r, { width: "narrow" })
                );
        }
    }
    set(r, i, o) {
        return (i.era = o), r.setFullYear(o, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["R", "u", "t", "T"];
}
const me = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/,
    },
    Nn = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
    };
function pe(n, r) {
    return n && { value: r(n.value), rest: n.rest };
}
function ie(n, r) {
    const i = r.match(n);
    return i ? { value: parseInt(i[0], 10), rest: r.slice(i[0].length) } : null;
}
function zn(n, r) {
    const i = r.match(n);
    if (!i) return null;
    if (i[0] === "Z") return { value: 0, rest: r.slice(1) };
    const o = i[1] === "+" ? 1 : -1,
        u = i[2] ? parseInt(i[2], 10) : 0,
        f = i[3] ? parseInt(i[3], 10) : 0,
        d = i[5] ? parseInt(i[5], 10) : 0;
    return { value: o * (u * iT + f * aT + d * oT), rest: r.slice(i[0].length) };
}
function F0(n) {
    return ie(me.anyDigitsSigned, n);
}
function ce(n, r) {
    switch (n) {
        case 1:
            return ie(me.singleDigit, r);
        case 2:
            return ie(me.twoDigits, r);
        case 3:
            return ie(me.threeDigits, r);
        case 4:
            return ie(me.fourDigits, r);
        default:
            return ie(new RegExp("^\\d{1," + n + "}"), r);
    }
}
function hl(n, r) {
    switch (n) {
        case 1:
            return ie(me.singleDigitSigned, r);
        case 2:
            return ie(me.twoDigitsSigned, r);
        case 3:
            return ie(me.threeDigitsSigned, r);
        case 4:
            return ie(me.fourDigitsSigned, r);
        default:
            return ie(new RegExp("^-?\\d{1," + n + "}"), r);
    }
}
function hh(n) {
    switch (n) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        default:
            return 0;
    }
}
function $0(n, r) {
    const i = r > 0,
        o = i ? r : 1 - r;
    let u;
    if (o <= 50) u = n || 100;
    else {
        const f = o + 50,
            d = Math.trunc(f / 100) * 100,
            y = n >= f % 100;
        u = n + d - (y ? 100 : 0);
    }
    return i ? u : 1 - u;
}
function J0(n) {
    return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class yx extends Gt {
    priority = 130;
    incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
    parse(r, i, o) {
        const u = (f) => ({ year: f, isTwoDigitYear: i === "yy" });
        switch (i) {
            case "y":
                return pe(ce(4, r), u);
            case "yo":
                return pe(o.ordinalNumber(r, { unit: "year" }), u);
            default:
                return pe(ce(i.length, r), u);
        }
    }
    validate(r, i) {
        return i.isTwoDigitYear || i.year > 0;
    }
    set(r, i, o) {
        const u = r.getFullYear();
        if (o.isTwoDigitYear) {
            const d = $0(o.year, u);
            return r.setFullYear(d, 0, 1), r.setHours(0, 0, 0, 0), r;
        }
        const f = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
        return r.setFullYear(f, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
}
class gx extends Gt {
    priority = 130;
    parse(r, i, o) {
        const u = (f) => ({ year: f, isTwoDigitYear: i === "YY" });
        switch (i) {
            case "Y":
                return pe(ce(4, r), u);
            case "Yo":
                return pe(o.ordinalNumber(r, { unit: "year" }), u);
            default:
                return pe(ce(i.length, r), u);
        }
    }
    validate(r, i) {
        return i.isTwoDigitYear || i.year > 0;
    }
    set(r, i, o, u) {
        const f = dh(r, u);
        if (o.isTwoDigitYear) {
            const y = $0(o.year, f);
            return r.setFullYear(y, 0, u.firstWeekContainsDate), r.setHours(0, 0, 0, 0), Yr(r, u);
        }
        const d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
        return r.setFullYear(d, 0, u.firstWeekContainsDate), r.setHours(0, 0, 0, 0), Yr(r, u);
    }
    incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"];
}
class vx extends Gt {
    priority = 130;
    parse(r, i) {
        return hl(i === "R" ? 4 : i.length, r);
    }
    set(r, i, o) {
        const u = le(r, 0);
        return u.setFullYear(o, 0, 4), u.setHours(0, 0, 0, 0), bi(u);
    }
    incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
}
class _x extends Gt {
    priority = 130;
    parse(r, i) {
        return hl(i === "u" ? 4 : i.length, r);
    }
    set(r, i, o) {
        return r.setFullYear(o, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class bx extends Gt {
    priority = 120;
    parse(r, i, o) {
        switch (i) {
            case "Q":
            case "QQ":
                return ce(i.length, r);
            case "Qo":
                return o.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
                return (
                    o.quarter(r, { width: "abbreviated", context: "formatting" }) ||
                    o.quarter(r, { width: "narrow", context: "formatting" })
                );
            case "QQQQQ":
                return o.quarter(r, { width: "narrow", context: "formatting" });
            default:
                return (
                    o.quarter(r, { width: "wide", context: "formatting" }) ||
                    o.quarter(r, { width: "abbreviated", context: "formatting" }) ||
                    o.quarter(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 4;
    }
    set(r, i, o) {
        return r.setMonth((o - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
}
class Sx extends Gt {
    priority = 120;
    parse(r, i, o) {
        switch (i) {
            case "q":
            case "qq":
                return ce(i.length, r);
            case "qo":
                return o.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
                return (
                    o.quarter(r, { width: "abbreviated", context: "standalone" }) ||
                    o.quarter(r, { width: "narrow", context: "standalone" })
                );
            case "qqqqq":
                return o.quarter(r, { width: "narrow", context: "standalone" });
            default:
                return (
                    o.quarter(r, { width: "wide", context: "standalone" }) ||
                    o.quarter(r, { width: "abbreviated", context: "standalone" }) ||
                    o.quarter(r, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 4;
    }
    set(r, i, o) {
        return r.setMonth((o - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
}
class Ex extends Gt {
    incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
    priority = 110;
    parse(r, i, o) {
        const u = (f) => f - 1;
        switch (i) {
            case "M":
                return pe(ie(me.month, r), u);
            case "MM":
                return pe(ce(2, r), u);
            case "Mo":
                return pe(o.ordinalNumber(r, { unit: "month" }), u);
            case "MMM":
                return (
                    o.month(r, { width: "abbreviated", context: "formatting" }) ||
                    o.month(r, { width: "narrow", context: "formatting" })
                );
            case "MMMMM":
                return o.month(r, { width: "narrow", context: "formatting" });
            default:
                return (
                    o.month(r, { width: "wide", context: "formatting" }) ||
                    o.month(r, { width: "abbreviated", context: "formatting" }) ||
                    o.month(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 11;
    }
    set(r, i, o) {
        return r.setMonth(o, 1), r.setHours(0, 0, 0, 0), r;
    }
}
class Tx extends Gt {
    priority = 110;
    parse(r, i, o) {
        const u = (f) => f - 1;
        switch (i) {
            case "L":
                return pe(ie(me.month, r), u);
            case "LL":
                return pe(ce(2, r), u);
            case "Lo":
                return pe(o.ordinalNumber(r, { unit: "month" }), u);
            case "LLL":
                return (
                    o.month(r, { width: "abbreviated", context: "standalone" }) ||
                    o.month(r, { width: "narrow", context: "standalone" })
                );
            case "LLLLL":
                return o.month(r, { width: "narrow", context: "standalone" });
            default:
                return (
                    o.month(r, { width: "wide", context: "standalone" }) ||
                    o.month(r, { width: "abbreviated", context: "standalone" }) ||
                    o.month(r, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 11;
    }
    set(r, i, o) {
        return r.setMonth(o, 1), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"];
}
function xx(n, r, i) {
    const o = ye(n, i?.in),
        u = V0(o, i) - r;
    return o.setDate(o.getDate() - u * 7), ye(o, i?.in);
}
class wx extends Gt {
    priority = 100;
    parse(r, i, o) {
        switch (i) {
            case "w":
                return ie(me.week, r);
            case "wo":
                return o.ordinalNumber(r, { unit: "week" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 53;
    }
    set(r, i, o, u) {
        return Yr(xx(r, o, u), u);
    }
    incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"];
}
function Ox(n, r, i) {
    const o = ye(n, i?.in),
        u = Q0(o, i) - r;
    return o.setDate(o.getDate() - u * 7), o;
}
class Dx extends Gt {
    priority = 100;
    parse(r, i, o) {
        switch (i) {
            case "I":
                return ie(me.week, r);
            case "Io":
                return o.ordinalNumber(r, { unit: "week" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 53;
    }
    set(r, i, o) {
        return bi(Ox(r, o));
    }
    incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
}
const Ax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Mx = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class Cx extends Gt {
    priority = 90;
    subPriority = 1;
    parse(r, i, o) {
        switch (i) {
            case "d":
                return ie(me.date, r);
            case "do":
                return o.ordinalNumber(r, { unit: "date" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        const o = r.getFullYear(),
            u = J0(o),
            f = r.getMonth();
        return u ? i >= 1 && i <= Mx[f] : i >= 1 && i <= Ax[f];
    }
    set(r, i, o) {
        return r.setDate(o), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"];
}
class Rx extends Gt {
    priority = 90;
    subpriority = 1;
    parse(r, i, o) {
        switch (i) {
            case "D":
            case "DD":
                return ie(me.dayOfYear, r);
            case "Do":
                return o.ordinalNumber(r, { unit: "date" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        const o = r.getFullYear();
        return J0(o) ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
    set(r, i, o) {
        return r.setMonth(0, o), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"];
}
function mh(n, r, i) {
    const o = Oi(),
        u =
            i?.weekStartsOn ??
            i?.locale?.options?.weekStartsOn ??
            o.weekStartsOn ??
            o.locale?.options?.weekStartsOn ??
            0,
        f = ye(n, i?.in),
        d = f.getDay(),
        p = ((r % 7) + 7) % 7,
        m = 7 - u,
        _ = r < 0 || r > 6 ? r - ((d + m) % 7) : ((p + m) % 7) - ((d + m) % 7);
    return Ol(f, _, i);
}
class Nx extends Gt {
    priority = 90;
    parse(r, i, o) {
        switch (i) {
            case "E":
            case "EE":
            case "EEE":
                return (
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
            case "EEEEE":
                return o.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
                return (
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
            default:
                return (
                    o.day(r, { width: "wide", context: "formatting" }) ||
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 6;
    }
    set(r, i, o, u) {
        return (r = mh(r, o, u)), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class zx extends Gt {
    priority = 90;
    parse(r, i, o, u) {
        const f = (d) => {
            const y = Math.floor((d - 1) / 7) * 7;
            return ((d + u.weekStartsOn + 6) % 7) + y;
        };
        switch (i) {
            case "e":
            case "ee":
                return pe(ce(i.length, r), f);
            case "eo":
                return pe(o.ordinalNumber(r, { unit: "day" }), f);
            case "eee":
                return (
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
            case "eeeee":
                return o.day(r, { width: "narrow", context: "formatting" });
            case "eeeeee":
                return (
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
            default:
                return (
                    o.day(r, { width: "wide", context: "formatting" }) ||
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 6;
    }
    set(r, i, o, u) {
        return (r = mh(r, o, u)), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
}
class Bx extends Gt {
    priority = 90;
    parse(r, i, o, u) {
        const f = (d) => {
            const y = Math.floor((d - 1) / 7) * 7;
            return ((d + u.weekStartsOn + 6) % 7) + y;
        };
        switch (i) {
            case "c":
            case "cc":
                return pe(ce(i.length, r), f);
            case "co":
                return pe(o.ordinalNumber(r, { unit: "day" }), f);
            case "ccc":
                return (
                    o.day(r, { width: "abbreviated", context: "standalone" }) ||
                    o.day(r, { width: "short", context: "standalone" }) ||
                    o.day(r, { width: "narrow", context: "standalone" })
                );
            case "ccccc":
                return o.day(r, { width: "narrow", context: "standalone" });
            case "cccccc":
                return (
                    o.day(r, { width: "short", context: "standalone" }) ||
                    o.day(r, { width: "narrow", context: "standalone" })
                );
            default:
                return (
                    o.day(r, { width: "wide", context: "standalone" }) ||
                    o.day(r, { width: "abbreviated", context: "standalone" }) ||
                    o.day(r, { width: "short", context: "standalone" }) ||
                    o.day(r, { width: "narrow", context: "standalone" })
                );
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 6;
    }
    set(r, i, o, u) {
        return (r = mh(r, o, u)), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"];
}
function Ux(n, r, i) {
    const o = ye(n, i?.in),
        u = lx(o, i),
        f = r - u;
    return Ol(o, f, i);
}
class Lx extends Gt {
    priority = 90;
    parse(r, i, o) {
        const u = (f) => (f === 0 ? 7 : f);
        switch (i) {
            case "i":
            case "ii":
                return ce(i.length, r);
            case "io":
                return o.ordinalNumber(r, { unit: "day" });
            case "iii":
                return pe(
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                        o.day(r, { width: "short", context: "formatting" }) ||
                        o.day(r, { width: "narrow", context: "formatting" }),
                    u
                );
            case "iiiii":
                return pe(o.day(r, { width: "narrow", context: "formatting" }), u);
            case "iiiiii":
                return pe(
                    o.day(r, { width: "short", context: "formatting" }) ||
                        o.day(r, { width: "narrow", context: "formatting" }),
                    u
                );
            default:
                return pe(
                    o.day(r, { width: "wide", context: "formatting" }) ||
                        o.day(r, { width: "abbreviated", context: "formatting" }) ||
                        o.day(r, { width: "short", context: "formatting" }) ||
                        o.day(r, { width: "narrow", context: "formatting" }),
                    u
                );
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 7;
    }
    set(r, i, o) {
        return (r = Ux(r, o)), r.setHours(0, 0, 0, 0), r;
    }
    incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"];
}
class Hx extends Gt {
    priority = 80;
    parse(r, i, o) {
        switch (i) {
            case "a":
            case "aa":
            case "aaa":
                return (
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            case "aaaaa":
                return o.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return (
                    o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(r, i, o) {
        return r.setHours(hh(o), 0, 0, 0), r;
    }
    incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class kx extends Gt {
    priority = 80;
    parse(r, i, o) {
        switch (i) {
            case "b":
            case "bb":
            case "bbb":
                return (
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            case "bbbbb":
                return o.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return (
                    o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(r, i, o) {
        return r.setHours(hh(o), 0, 0, 0), r;
    }
    incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class jx extends Gt {
    priority = 80;
    parse(r, i, o) {
        switch (i) {
            case "B":
            case "BB":
            case "BBB":
                return (
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            case "BBBBB":
                return o.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
                return (
                    o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "abbreviated", context: "formatting" }) ||
                    o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
        }
    }
    set(r, i, o) {
        return r.setHours(hh(o), 0, 0, 0), r;
    }
    incompatibleTokens = ["a", "b", "t", "T"];
}
class Yx extends Gt {
    priority = 70;
    parse(r, i, o) {
        switch (i) {
            case "h":
                return ie(me.hour12h, r);
            case "ho":
                return o.ordinalNumber(r, { unit: "hour" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 12;
    }
    set(r, i, o) {
        const u = r.getHours() >= 12;
        return (
            u && o < 12
                ? r.setHours(o + 12, 0, 0, 0)
                : !u && o === 12
                  ? r.setHours(0, 0, 0, 0)
                  : r.setHours(o, 0, 0, 0),
            r
        );
    }
    incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class qx extends Gt {
    priority = 70;
    parse(r, i, o) {
        switch (i) {
            case "H":
                return ie(me.hour23h, r);
            case "Ho":
                return o.ordinalNumber(r, { unit: "hour" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 23;
    }
    set(r, i, o) {
        return r.setHours(o, 0, 0, 0), r;
    }
    incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class Gx extends Gt {
    priority = 70;
    parse(r, i, o) {
        switch (i) {
            case "K":
                return ie(me.hour11h, r);
            case "Ko":
                return o.ordinalNumber(r, { unit: "hour" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 11;
    }
    set(r, i, o) {
        return r.getHours() >= 12 && o < 12 ? r.setHours(o + 12, 0, 0, 0) : r.setHours(o, 0, 0, 0), r;
    }
    incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class Ix extends Gt {
    priority = 70;
    parse(r, i, o) {
        switch (i) {
            case "k":
                return ie(me.hour24h, r);
            case "ko":
                return o.ordinalNumber(r, { unit: "hour" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 1 && i <= 24;
    }
    set(r, i, o) {
        const u = o <= 24 ? o % 24 : o;
        return r.setHours(u, 0, 0, 0), r;
    }
    incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class Xx extends Gt {
    priority = 60;
    parse(r, i, o) {
        switch (i) {
            case "m":
                return ie(me.minute, r);
            case "mo":
                return o.ordinalNumber(r, { unit: "minute" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 59;
    }
    set(r, i, o) {
        return r.setMinutes(o, 0, 0), r;
    }
    incompatibleTokens = ["t", "T"];
}
class Qx extends Gt {
    priority = 50;
    parse(r, i, o) {
        switch (i) {
            case "s":
                return ie(me.second, r);
            case "so":
                return o.ordinalNumber(r, { unit: "second" });
            default:
                return ce(i.length, r);
        }
    }
    validate(r, i) {
        return i >= 0 && i <= 59;
    }
    set(r, i, o) {
        return r.setSeconds(o, 0), r;
    }
    incompatibleTokens = ["t", "T"];
}
class Vx extends Gt {
    priority = 30;
    parse(r, i) {
        const o = (u) => Math.trunc(u * Math.pow(10, -i.length + 3));
        return pe(ce(i.length, r), o);
    }
    set(r, i, o) {
        return r.setMilliseconds(o), r;
    }
    incompatibleTokens = ["t", "T"];
}
class Px extends Gt {
    priority = 10;
    parse(r, i) {
        switch (i) {
            case "X":
                return zn(Nn.basicOptionalMinutes, r);
            case "XX":
                return zn(Nn.basic, r);
            case "XXXX":
                return zn(Nn.basicOptionalSeconds, r);
            case "XXXXX":
                return zn(Nn.extendedOptionalSeconds, r);
            default:
                return zn(Nn.extended, r);
        }
    }
    set(r, i, o) {
        return i.timestampIsSet ? r : le(r, r.getTime() - fl(r) - o);
    }
    incompatibleTokens = ["t", "T", "x"];
}
class Kx extends Gt {
    priority = 10;
    parse(r, i) {
        switch (i) {
            case "x":
                return zn(Nn.basicOptionalMinutes, r);
            case "xx":
                return zn(Nn.basic, r);
            case "xxxx":
                return zn(Nn.basicOptionalSeconds, r);
            case "xxxxx":
                return zn(Nn.extendedOptionalSeconds, r);
            default:
                return zn(Nn.extended, r);
        }
    }
    set(r, i, o) {
        return i.timestampIsSet ? r : le(r, r.getTime() - fl(r) - o);
    }
    incompatibleTokens = ["t", "T", "X"];
}
class Zx extends Gt {
    priority = 40;
    parse(r) {
        return F0(r);
    }
    set(r, i, o) {
        return [le(r, o * 1e3), { timestampIsSet: !0 }];
    }
    incompatibleTokens = "*";
}
class Wx extends Gt {
    priority = 20;
    parse(r) {
        return F0(r);
    }
    set(r, i, o) {
        return [le(r, o), { timestampIsSet: !0 }];
    }
    incompatibleTokens = "*";
}
const Fx = {
        G: new px(),
        y: new yx(),
        Y: new gx(),
        R: new vx(),
        u: new _x(),
        Q: new bx(),
        q: new Sx(),
        M: new Ex(),
        L: new Tx(),
        w: new wx(),
        I: new Dx(),
        d: new Cx(),
        D: new Rx(),
        E: new Nx(),
        e: new zx(),
        c: new Bx(),
        i: new Lx(),
        a: new Hx(),
        b: new kx(),
        B: new jx(),
        h: new Yx(),
        H: new qx(),
        K: new Gx(),
        k: new Ix(),
        m: new Xx(),
        s: new Qx(),
        S: new Vx(),
        X: new Px(),
        x: new Kx(),
        t: new Zx(),
        T: new Wx(),
    },
    $x = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Jx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    t2 = /^'([^]*?)'?$/,
    e2 = /''/g,
    n2 = /\S/,
    r2 = /[a-zA-Z]/;
function a2(n, r, i, o) {
    const u = () => le(i, NaN),
        f = ux(),
        d = f.locale ?? X0,
        y = f.firstWeekContainsDate ?? f.locale?.options?.firstWeekContainsDate ?? 1,
        p = f.weekStartsOn ?? f.locale?.options?.weekStartsOn ?? 0,
        m = { firstWeekContainsDate: y, weekStartsOn: p, locale: d },
        _ = [new mx(o?.in, i)],
        g = r
            .match(Jx)
            .map((R) => {
                const q = R[0];
                if (q in Bd) {
                    const w = Bd[q];
                    return w(R, d.formatLong);
                }
                return R;
            })
            .join("")
            .match($x),
        T = [];
    for (let R of g) {
        Z0(R) && Ud(R, r, n), K0(R) && Ud(R, r, n);
        const q = R[0],
            w = Fx[q];
        if (w) {
            const { incompatibleTokens: x } = w;
            if (Array.isArray(x)) {
                const D = T.find((G) => x.includes(G.token) || G.token === q);
                if (D)
                    throw new RangeError(
                        `The format string mustn't contain \`${D.fullToken}\` and \`${R}\` at the same time`
                    );
            } else if (w.incompatibleTokens === "*" && T.length > 0)
                throw new RangeError(`The format string mustn't contain \`${R}\` and any other token at the same time`);
            T.push({ token: q, fullToken: R });
            const C = w.run(n, R, d.match, m);
            if (!C) return u();
            _.push(C.setter), (n = C.rest);
        } else {
            if (q.match(r2))
                throw new RangeError("Format string contains an unescaped latin alphabet character `" + q + "`");
            if ((R === "''" ? (R = "'") : q === "'" && (R = i2(R)), n.indexOf(R) === 0)) n = n.slice(R.length);
            else return u();
        }
    }
    if (n.length > 0 && n2.test(n)) return u();
    const O = _.map((R) => R.priority)
        .sort((R, q) => q - R)
        .filter((R, q, w) => w.indexOf(R) === q)
        .map((R) => _.filter((q) => q.priority === R).sort((q, w) => w.subPriority - q.subPriority))
        .map((R) => R[0]);
    let k = ye(i, o?.in);
    if (isNaN(+k)) return u();
    const Y = {};
    for (const R of O) {
        if (!R.validate(k, m)) return u();
        const q = R.set(k, Y, m);
        Array.isArray(q) ? ((k = q[0]), Object.assign(Y, q[1])) : (k = q);
    }
    return k;
}
function i2(n) {
    return n.match(t2)[1].replace(e2, "'");
}
function o2(n, r) {
    return I0(le(n, n), fh(n));
}
function s2(n, r, i) {
    return Ol(n, -1, i);
}
function u2(n, r) {
    return I0(le(n, n), s2(fh(n)));
}
function l2(n) {
    const r = fh(n?.in),
        i = r.getFullYear(),
        o = r.getMonth(),
        u = r.getDate(),
        f = le(n?.in, 0);
    return f.setFullYear(i, o, u + 1), f.setHours(0, 0, 0, 0), f;
}
const t_ = new Date("2024-02-28T00:00:00");
function ml(n) {
    return fT(n, t_);
}
function A4(n) {
    return Ol(t_, n);
}
const c2 = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
    ],
    f2 =
        (n) =>
        ([r, i]) =>
            (n[i] || [])[r],
    d2 = (n, r, i) =>
        c2
            .map(([o, u]) => [n + o, r + u])
            .map(f2(i))
            .filter((o) => o !== void 0),
    h2 = (n, r) => {
        const i = n.split("");
        let u = r
                .flat(1)
                .filter((d) => d.label === i[0])
                .map((d) => [d]),
            f = [];
        return (
            i.slice(1, i.length).forEach((d) => {
                u.forEach((y) => {
                    const p = y[y.length - 1];
                    d2(p.x, p.y, r)
                        .filter((_) => _.label === d)
                        .filter((_) => !y.some((g) => g.x === _.x && g.y === _.y))
                        .forEach((_) => f.push([...y, _]));
                }),
                    (u = f),
                    (f = []);
            }),
            u
        );
    },
    M4 = (n, r) => {
        if (!n || !r) return;
        const i = [
            { x: 0, y: -1, result: "north" },
            { x: 1, y: -1, result: "north-east" },
            { x: 1, y: 0, result: "east" },
            { x: 1, y: 1, result: "south-east" },
            { x: 0, y: 1, result: "south" },
            { x: -1, y: 1, result: "south-west" },
            { x: -1, y: 0, result: "west" },
            { x: -1, y: -1, result: "north-west" },
        ];
        for (const o of i) if (n.x + o.x === r.x && n.y + o.y === r.y) return o.result;
    },
    m2 = {
        north: "rotate(-90deg)",
        "north-east": "rotate(-45deg)",
        east: "rotate(0deg)",
        "south-east": "rotate(45deg)",
        south: "rotate(90deg)",
        "south-west": "rotate(135deg)",
        west: "rotate(180deg)",
        "north-west": "rotate(225deg)",
    },
    C4 = (n) => m2[n],
    R4 = (n, r) => {
        switch (n) {
            case "east":
            case "north":
            case "west":
            case "south":
                return r ? "var(--vertical-line-3x3)" : "var(--vertical-line)";
            case "north-east":
            case "north-west":
            case "south-east":
            case "south-west":
                return r ? "var(--diagonal-line-3x3)" : "var(--diagonal-line)";
            default:
                return r ? "var(--vertical-line-3x3)" : "var(--vertical-line)";
        }
    },
    N4 = (n, r) => {
        switch (n) {
            case "east":
            case "north":
            case "west":
            case "south":
                return r ? "68px" : "51px";
            case "north-east":
            case "north-west":
            case "south-east":
            case "south-west":
                return r ? "96px" : "72px";
            default:
                return r ? "68px" : "51px";
        }
    },
    z4 = (n, r, i) => {
        const o = {};
        return (
            n.flat(1).forEach((f) => {
                o[`${f.x}-${f.y}`] = { total: 0, first: 0 };
            }),
            r
                .filter((f) => !i.includes(f))
                .forEach((f) => {
                    const d = h2(f, n)[0],
                        y = d[0];
                    (o[`${y.x}-${y.y}`].total += 1),
                        (o[`${y.x}-${y.y}`].first += 1),
                        d.slice(1, d.length).forEach((p) => {
                            o[`${p.x}-${p.y}`].total += 1;
                        });
                }),
            o
        );
    },
    B4 = (n, r, i = 4) => {
        let o = (r % 360) / 90,
            u = n.y,
            f = n.x;
        if (o > 0)
            for (; o > 0; ) {
                const d = i - u - 1,
                    y = f;
                (f = d), (u = y), (o -= 1);
            }
        if (o < 0)
            for (; o < 0; ) {
                const d = u,
                    y = i - f - 1;
                (f = d), (u = y), (o += 1);
            }
        return { x: f, y: u, label: n.label, pX: n.x, pY: n.y };
    },
    p2 = { openModal: void 0, firstRender: !0 },
    e_ = lh({
        name: "navigation",
        initialState: p2,
        reducers: {
            hideModal: (n) => {
                n.openModal = void 0;
            },
            setOpenModal: (n, r) => {
                n.openModal = r.payload;
            },
            markFirstRender: (n) => {
                n.firstRender = !1;
            },
        },
    }),
    { setOpenModal: ph, hideModal: U4, markFirstRender: L4 } = e_.actions,
    y2 = e_.reducer,
    Ce = [];
for (let n = 0; n < 256; ++n) Ce.push((n + 256).toString(16).slice(1));
function g2(n, r = 0) {
    return (
        Ce[n[r + 0]] +
        Ce[n[r + 1]] +
        Ce[n[r + 2]] +
        Ce[n[r + 3]] +
        "-" +
        Ce[n[r + 4]] +
        Ce[n[r + 5]] +
        "-" +
        Ce[n[r + 6]] +
        Ce[n[r + 7]] +
        "-" +
        Ce[n[r + 8]] +
        Ce[n[r + 9]] +
        "-" +
        Ce[n[r + 10]] +
        Ce[n[r + 11]] +
        Ce[n[r + 12]] +
        Ce[n[r + 13]] +
        Ce[n[r + 14]] +
        Ce[n[r + 15]]
    ).toLowerCase();
}
let ld;
const v2 = new Uint8Array(16);
function _2() {
    if (!ld) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
            );
        ld = crypto.getRandomValues.bind(crypto);
    }
    return ld(v2);
}
const b2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    rv = { randomUUID: b2 };
function S2(n, r, i) {
    n = n || {};
    const o = n.random ?? n.rng?.() ?? _2();
    if (o.length < 16) throw new Error("Random bytes length must be >= 16");
    return (o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), g2(o);
}
function E2(n, r, i) {
    return rv.randomUUID && !n ? rv.randomUUID() : S2(n);
}
var Gu = { exports: {} };
function Ho(n) {
    throw new Error(
        'Could not dynamically require "' +
            n +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
}
var Iu = { exports: {} };
const T2 = {},
    x2 = Object.freeze(
        Object.defineProperty({ __proto__: null, default: T2 }, Symbol.toStringTag, { value: "Module" })
    ),
    w2 = _S(x2);
var O2 = Iu.exports,
    av;
function Xr() {
    return (
        av ||
            ((av = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o();
                })(O2, function () {
                    var i =
                        i ||
                        (function (o, u) {
                            var f;
                            if (
                                (typeof window < "u" && window.crypto && (f = window.crypto),
                                typeof self < "u" && self.crypto && (f = self.crypto),
                                typeof globalThis < "u" && globalThis.crypto && (f = globalThis.crypto),
                                !f && typeof window < "u" && window.msCrypto && (f = window.msCrypto),
                                !f && typeof ba < "u" && ba.crypto && (f = ba.crypto),
                                !f && typeof Ho == "function")
                            )
                                try {
                                    f = w2;
                                } catch {}
                            var d = function () {
                                    if (f) {
                                        if (typeof f.getRandomValues == "function")
                                            try {
                                                return f.getRandomValues(new Uint32Array(1))[0];
                                            } catch {}
                                        if (typeof f.randomBytes == "function")
                                            try {
                                                return f.randomBytes(4).readInt32LE();
                                            } catch {}
                                    }
                                    throw new Error(
                                        "Native crypto module could not be used to get secure random number."
                                    );
                                },
                                y =
                                    Object.create ||
                                    (function () {
                                        function w() {}
                                        return function (x) {
                                            var C;
                                            return (w.prototype = x), (C = new w()), (w.prototype = null), C;
                                        };
                                    })(),
                                p = {},
                                m = (p.lib = {}),
                                _ = (m.Base = (function () {
                                    return {
                                        extend: function (w) {
                                            var x = y(this);
                                            return (
                                                w && x.mixIn(w),
                                                (!x.hasOwnProperty("init") || this.init === x.init) &&
                                                    (x.init = function () {
                                                        x.$super.init.apply(this, arguments);
                                                    }),
                                                (x.init.prototype = x),
                                                (x.$super = this),
                                                x
                                            );
                                        },
                                        create: function () {
                                            var w = this.extend();
                                            return w.init.apply(w, arguments), w;
                                        },
                                        init: function () {},
                                        mixIn: function (w) {
                                            for (var x in w) w.hasOwnProperty(x) && (this[x] = w[x]);
                                            w.hasOwnProperty("toString") && (this.toString = w.toString);
                                        },
                                        clone: function () {
                                            return this.init.prototype.extend(this);
                                        },
                                    };
                                })()),
                                g = (m.WordArray = _.extend({
                                    init: function (w, x) {
                                        (w = this.words = w || []),
                                            x != u ? (this.sigBytes = x) : (this.sigBytes = w.length * 4);
                                    },
                                    toString: function (w) {
                                        return (w || O).stringify(this);
                                    },
                                    concat: function (w) {
                                        var x = this.words,
                                            C = w.words,
                                            D = this.sigBytes,
                                            G = w.sigBytes;
                                        if ((this.clamp(), D % 4))
                                            for (var U = 0; U < G; U++) {
                                                var Z = (C[U >>> 2] >>> (24 - (U % 4) * 8)) & 255;
                                                x[(D + U) >>> 2] |= Z << (24 - ((D + U) % 4) * 8);
                                            }
                                        else for (var ut = 0; ut < G; ut += 4) x[(D + ut) >>> 2] = C[ut >>> 2];
                                        return (this.sigBytes += G), this;
                                    },
                                    clamp: function () {
                                        var w = this.words,
                                            x = this.sigBytes;
                                        (w[x >>> 2] &= 4294967295 << (32 - (x % 4) * 8)), (w.length = o.ceil(x / 4));
                                    },
                                    clone: function () {
                                        var w = _.clone.call(this);
                                        return (w.words = this.words.slice(0)), w;
                                    },
                                    random: function (w) {
                                        for (var x = [], C = 0; C < w; C += 4) x.push(d());
                                        return new g.init(x, w);
                                    },
                                })),
                                T = (p.enc = {}),
                                O = (T.Hex = {
                                    stringify: function (w) {
                                        for (var x = w.words, C = w.sigBytes, D = [], G = 0; G < C; G++) {
                                            var U = (x[G >>> 2] >>> (24 - (G % 4) * 8)) & 255;
                                            D.push((U >>> 4).toString(16)), D.push((U & 15).toString(16));
                                        }
                                        return D.join("");
                                    },
                                    parse: function (w) {
                                        for (var x = w.length, C = [], D = 0; D < x; D += 2)
                                            C[D >>> 3] |= parseInt(w.substr(D, 2), 16) << (24 - (D % 8) * 4);
                                        return new g.init(C, x / 2);
                                    },
                                }),
                                k = (T.Latin1 = {
                                    stringify: function (w) {
                                        for (var x = w.words, C = w.sigBytes, D = [], G = 0; G < C; G++) {
                                            var U = (x[G >>> 2] >>> (24 - (G % 4) * 8)) & 255;
                                            D.push(String.fromCharCode(U));
                                        }
                                        return D.join("");
                                    },
                                    parse: function (w) {
                                        for (var x = w.length, C = [], D = 0; D < x; D++)
                                            C[D >>> 2] |= (w.charCodeAt(D) & 255) << (24 - (D % 4) * 8);
                                        return new g.init(C, x);
                                    },
                                }),
                                Y = (T.Utf8 = {
                                    stringify: function (w) {
                                        try {
                                            return decodeURIComponent(escape(k.stringify(w)));
                                        } catch {
                                            throw new Error("Malformed UTF-8 data");
                                        }
                                    },
                                    parse: function (w) {
                                        return k.parse(unescape(encodeURIComponent(w)));
                                    },
                                }),
                                R = (m.BufferedBlockAlgorithm = _.extend({
                                    reset: function () {
                                        (this._data = new g.init()), (this._nDataBytes = 0);
                                    },
                                    _append: function (w) {
                                        typeof w == "string" && (w = Y.parse(w)),
                                            this._data.concat(w),
                                            (this._nDataBytes += w.sigBytes);
                                    },
                                    _process: function (w) {
                                        var x,
                                            C = this._data,
                                            D = C.words,
                                            G = C.sigBytes,
                                            U = this.blockSize,
                                            Z = U * 4,
                                            ut = G / Z;
                                        w ? (ut = o.ceil(ut)) : (ut = o.max((ut | 0) - this._minBufferSize, 0));
                                        var I = ut * U,
                                            $ = o.min(I * 4, G);
                                        if (I) {
                                            for (var rt = 0; rt < I; rt += U) this._doProcessBlock(D, rt);
                                            (x = D.splice(0, I)), (C.sigBytes -= $);
                                        }
                                        return new g.init(x, $);
                                    },
                                    clone: function () {
                                        var w = _.clone.call(this);
                                        return (w._data = this._data.clone()), w;
                                    },
                                    _minBufferSize: 0,
                                }));
                            m.Hasher = R.extend({
                                cfg: _.extend(),
                                init: function (w) {
                                    (this.cfg = this.cfg.extend(w)), this.reset();
                                },
                                reset: function () {
                                    R.reset.call(this), this._doReset();
                                },
                                update: function (w) {
                                    return this._append(w), this._process(), this;
                                },
                                finalize: function (w) {
                                    w && this._append(w);
                                    var x = this._doFinalize();
                                    return x;
                                },
                                blockSize: 16,
                                _createHelper: function (w) {
                                    return function (x, C) {
                                        return new w.init(C).finalize(x);
                                    };
                                },
                                _createHmacHelper: function (w) {
                                    return function (x, C) {
                                        return new q.HMAC.init(w, C).finalize(x);
                                    };
                                },
                            });
                            var q = (p.algo = {});
                            return p;
                        })(Math);
                    return i;
                });
            })(Iu)),
        Iu.exports
    );
}
var Xu = { exports: {} },
    D2 = Xu.exports,
    iv;
function A2() {
    return (
        iv ||
            ((iv = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o(Xr());
                })(D2, function (i) {
                    return (
                        (function () {
                            var o = i,
                                u = o.lib,
                                f = u.WordArray,
                                d = o.enc;
                            d.Base64 = {
                                stringify: function (p) {
                                    var m = p.words,
                                        _ = p.sigBytes,
                                        g = this._map;
                                    p.clamp();
                                    for (var T = [], O = 0; O < _; O += 3)
                                        for (
                                            var k = (m[O >>> 2] >>> (24 - (O % 4) * 8)) & 255,
                                                Y = (m[(O + 1) >>> 2] >>> (24 - ((O + 1) % 4) * 8)) & 255,
                                                R = (m[(O + 2) >>> 2] >>> (24 - ((O + 2) % 4) * 8)) & 255,
                                                q = (k << 16) | (Y << 8) | R,
                                                w = 0;
                                            w < 4 && O + w * 0.75 < _;
                                            w++
                                        )
                                            T.push(g.charAt((q >>> (6 * (3 - w))) & 63));
                                    var x = g.charAt(64);
                                    if (x) for (; T.length % 4; ) T.push(x);
                                    return T.join("");
                                },
                                parse: function (p) {
                                    var m = p.length,
                                        _ = this._map,
                                        g = this._reverseMap;
                                    if (!g) {
                                        g = this._reverseMap = [];
                                        for (var T = 0; T < _.length; T++) g[_.charCodeAt(T)] = T;
                                    }
                                    var O = _.charAt(64);
                                    if (O) {
                                        var k = p.indexOf(O);
                                        k !== -1 && (m = k);
                                    }
                                    return y(p, m, g);
                                },
                                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            };
                            function y(p, m, _) {
                                for (var g = [], T = 0, O = 0; O < m; O++)
                                    if (O % 4) {
                                        var k = _[p.charCodeAt(O - 1)] << ((O % 4) * 2),
                                            Y = _[p.charCodeAt(O)] >>> (6 - (O % 4) * 2),
                                            R = k | Y;
                                        (g[T >>> 2] |= R << (24 - (T % 4) * 8)), T++;
                                    }
                                return f.create(g, T);
                            }
                        })(),
                        i.enc.Base64
                    );
                });
            })(Xu)),
        Xu.exports
    );
}
var Qu = { exports: {} },
    M2 = Qu.exports,
    ov;
function C2() {
    return (
        ov ||
            ((ov = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o(Xr());
                })(M2, function (i) {
                    return (
                        (function (o) {
                            var u = i,
                                f = u.lib,
                                d = f.WordArray,
                                y = f.Hasher,
                                p = u.algo,
                                m = [];
                            (function () {
                                for (var Y = 0; Y < 64; Y++) m[Y] = (o.abs(o.sin(Y + 1)) * 4294967296) | 0;
                            })();
                            var _ = (p.MD5 = y.extend({
                                _doReset: function () {
                                    this._hash = new d.init([1732584193, 4023233417, 2562383102, 271733878]);
                                },
                                _doProcessBlock: function (Y, R) {
                                    for (var q = 0; q < 16; q++) {
                                        var w = R + q,
                                            x = Y[w];
                                        Y[w] =
                                            (((x << 8) | (x >>> 24)) & 16711935) |
                                            (((x << 24) | (x >>> 8)) & 4278255360);
                                    }
                                    var C = this._hash.words,
                                        D = Y[R + 0],
                                        G = Y[R + 1],
                                        U = Y[R + 2],
                                        Z = Y[R + 3],
                                        ut = Y[R + 4],
                                        I = Y[R + 5],
                                        $ = Y[R + 6],
                                        rt = Y[R + 7],
                                        at = Y[R + 8],
                                        mt = Y[R + 9],
                                        yt = Y[R + 10],
                                        V = Y[R + 11],
                                        st = Y[R + 12],
                                        ft = Y[R + 13],
                                        Dt = Y[R + 14],
                                        Mt = Y[R + 15],
                                        E = C[0],
                                        z = C[1],
                                        P = C[2],
                                        W = C[3];
                                    (E = g(E, z, P, W, D, 7, m[0])),
                                        (W = g(W, E, z, P, G, 12, m[1])),
                                        (P = g(P, W, E, z, U, 17, m[2])),
                                        (z = g(z, P, W, E, Z, 22, m[3])),
                                        (E = g(E, z, P, W, ut, 7, m[4])),
                                        (W = g(W, E, z, P, I, 12, m[5])),
                                        (P = g(P, W, E, z, $, 17, m[6])),
                                        (z = g(z, P, W, E, rt, 22, m[7])),
                                        (E = g(E, z, P, W, at, 7, m[8])),
                                        (W = g(W, E, z, P, mt, 12, m[9])),
                                        (P = g(P, W, E, z, yt, 17, m[10])),
                                        (z = g(z, P, W, E, V, 22, m[11])),
                                        (E = g(E, z, P, W, st, 7, m[12])),
                                        (W = g(W, E, z, P, ft, 12, m[13])),
                                        (P = g(P, W, E, z, Dt, 17, m[14])),
                                        (z = g(z, P, W, E, Mt, 22, m[15])),
                                        (E = T(E, z, P, W, G, 5, m[16])),
                                        (W = T(W, E, z, P, $, 9, m[17])),
                                        (P = T(P, W, E, z, V, 14, m[18])),
                                        (z = T(z, P, W, E, D, 20, m[19])),
                                        (E = T(E, z, P, W, I, 5, m[20])),
                                        (W = T(W, E, z, P, yt, 9, m[21])),
                                        (P = T(P, W, E, z, Mt, 14, m[22])),
                                        (z = T(z, P, W, E, ut, 20, m[23])),
                                        (E = T(E, z, P, W, mt, 5, m[24])),
                                        (W = T(W, E, z, P, Dt, 9, m[25])),
                                        (P = T(P, W, E, z, Z, 14, m[26])),
                                        (z = T(z, P, W, E, at, 20, m[27])),
                                        (E = T(E, z, P, W, ft, 5, m[28])),
                                        (W = T(W, E, z, P, U, 9, m[29])),
                                        (P = T(P, W, E, z, rt, 14, m[30])),
                                        (z = T(z, P, W, E, st, 20, m[31])),
                                        (E = O(E, z, P, W, I, 4, m[32])),
                                        (W = O(W, E, z, P, at, 11, m[33])),
                                        (P = O(P, W, E, z, V, 16, m[34])),
                                        (z = O(z, P, W, E, Dt, 23, m[35])),
                                        (E = O(E, z, P, W, G, 4, m[36])),
                                        (W = O(W, E, z, P, ut, 11, m[37])),
                                        (P = O(P, W, E, z, rt, 16, m[38])),
                                        (z = O(z, P, W, E, yt, 23, m[39])),
                                        (E = O(E, z, P, W, ft, 4, m[40])),
                                        (W = O(W, E, z, P, D, 11, m[41])),
                                        (P = O(P, W, E, z, Z, 16, m[42])),
                                        (z = O(z, P, W, E, $, 23, m[43])),
                                        (E = O(E, z, P, W, mt, 4, m[44])),
                                        (W = O(W, E, z, P, st, 11, m[45])),
                                        (P = O(P, W, E, z, Mt, 16, m[46])),
                                        (z = O(z, P, W, E, U, 23, m[47])),
                                        (E = k(E, z, P, W, D, 6, m[48])),
                                        (W = k(W, E, z, P, rt, 10, m[49])),
                                        (P = k(P, W, E, z, Dt, 15, m[50])),
                                        (z = k(z, P, W, E, I, 21, m[51])),
                                        (E = k(E, z, P, W, st, 6, m[52])),
                                        (W = k(W, E, z, P, Z, 10, m[53])),
                                        (P = k(P, W, E, z, yt, 15, m[54])),
                                        (z = k(z, P, W, E, G, 21, m[55])),
                                        (E = k(E, z, P, W, at, 6, m[56])),
                                        (W = k(W, E, z, P, Mt, 10, m[57])),
                                        (P = k(P, W, E, z, $, 15, m[58])),
                                        (z = k(z, P, W, E, ft, 21, m[59])),
                                        (E = k(E, z, P, W, ut, 6, m[60])),
                                        (W = k(W, E, z, P, V, 10, m[61])),
                                        (P = k(P, W, E, z, U, 15, m[62])),
                                        (z = k(z, P, W, E, mt, 21, m[63])),
                                        (C[0] = (C[0] + E) | 0),
                                        (C[1] = (C[1] + z) | 0),
                                        (C[2] = (C[2] + P) | 0),
                                        (C[3] = (C[3] + W) | 0);
                                },
                                _doFinalize: function () {
                                    var Y = this._data,
                                        R = Y.words,
                                        q = this._nDataBytes * 8,
                                        w = Y.sigBytes * 8;
                                    R[w >>> 5] |= 128 << (24 - (w % 32));
                                    var x = o.floor(q / 4294967296),
                                        C = q;
                                    (R[(((w + 64) >>> 9) << 4) + 15] =
                                        (((x << 8) | (x >>> 24)) & 16711935) | (((x << 24) | (x >>> 8)) & 4278255360)),
                                        (R[(((w + 64) >>> 9) << 4) + 14] =
                                            (((C << 8) | (C >>> 24)) & 16711935) |
                                            (((C << 24) | (C >>> 8)) & 4278255360)),
                                        (Y.sigBytes = (R.length + 1) * 4),
                                        this._process();
                                    for (var D = this._hash, G = D.words, U = 0; U < 4; U++) {
                                        var Z = G[U];
                                        G[U] =
                                            (((Z << 8) | (Z >>> 24)) & 16711935) |
                                            (((Z << 24) | (Z >>> 8)) & 4278255360);
                                    }
                                    return D;
                                },
                                clone: function () {
                                    var Y = y.clone.call(this);
                                    return (Y._hash = this._hash.clone()), Y;
                                },
                            }));
                            function g(Y, R, q, w, x, C, D) {
                                var G = Y + ((R & q) | (~R & w)) + x + D;
                                return ((G << C) | (G >>> (32 - C))) + R;
                            }
                            function T(Y, R, q, w, x, C, D) {
                                var G = Y + ((R & w) | (q & ~w)) + x + D;
                                return ((G << C) | (G >>> (32 - C))) + R;
                            }
                            function O(Y, R, q, w, x, C, D) {
                                var G = Y + (R ^ q ^ w) + x + D;
                                return ((G << C) | (G >>> (32 - C))) + R;
                            }
                            function k(Y, R, q, w, x, C, D) {
                                var G = Y + (q ^ (R | ~w)) + x + D;
                                return ((G << C) | (G >>> (32 - C))) + R;
                            }
                            (u.MD5 = y._createHelper(_)), (u.HmacMD5 = y._createHmacHelper(_));
                        })(Math),
                        i.MD5
                    );
                });
            })(Qu)),
        Qu.exports
    );
}
var Vu = { exports: {} },
    Pu = { exports: {} },
    R2 = Pu.exports,
    sv;
function N2() {
    return (
        sv ||
            ((sv = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o(Xr());
                })(R2, function (i) {
                    return (
                        (function () {
                            var o = i,
                                u = o.lib,
                                f = u.WordArray,
                                d = u.Hasher,
                                y = o.algo,
                                p = [],
                                m = (y.SHA1 = d.extend({
                                    _doReset: function () {
                                        this._hash = new f.init([
                                            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                                        ]);
                                    },
                                    _doProcessBlock: function (_, g) {
                                        for (
                                            var T = this._hash.words,
                                                O = T[0],
                                                k = T[1],
                                                Y = T[2],
                                                R = T[3],
                                                q = T[4],
                                                w = 0;
                                            w < 80;
                                            w++
                                        ) {
                                            if (w < 16) p[w] = _[g + w] | 0;
                                            else {
                                                var x = p[w - 3] ^ p[w - 8] ^ p[w - 14] ^ p[w - 16];
                                                p[w] = (x << 1) | (x >>> 31);
                                            }
                                            var C = ((O << 5) | (O >>> 27)) + q + p[w];
                                            w < 20
                                                ? (C += ((k & Y) | (~k & R)) + 1518500249)
                                                : w < 40
                                                  ? (C += (k ^ Y ^ R) + 1859775393)
                                                  : w < 60
                                                    ? (C += ((k & Y) | (k & R) | (Y & R)) - 1894007588)
                                                    : (C += (k ^ Y ^ R) - 899497514),
                                                (q = R),
                                                (R = Y),
                                                (Y = (k << 30) | (k >>> 2)),
                                                (k = O),
                                                (O = C);
                                        }
                                        (T[0] = (T[0] + O) | 0),
                                            (T[1] = (T[1] + k) | 0),
                                            (T[2] = (T[2] + Y) | 0),
                                            (T[3] = (T[3] + R) | 0),
                                            (T[4] = (T[4] + q) | 0);
                                    },
                                    _doFinalize: function () {
                                        var _ = this._data,
                                            g = _.words,
                                            T = this._nDataBytes * 8,
                                            O = _.sigBytes * 8;
                                        return (
                                            (g[O >>> 5] |= 128 << (24 - (O % 32))),
                                            (g[(((O + 64) >>> 9) << 4) + 14] = Math.floor(T / 4294967296)),
                                            (g[(((O + 64) >>> 9) << 4) + 15] = T),
                                            (_.sigBytes = g.length * 4),
                                            this._process(),
                                            this._hash
                                        );
                                    },
                                    clone: function () {
                                        var _ = d.clone.call(this);
                                        return (_._hash = this._hash.clone()), _;
                                    },
                                }));
                            (o.SHA1 = d._createHelper(m)), (o.HmacSHA1 = d._createHmacHelper(m));
                        })(),
                        i.SHA1
                    );
                });
            })(Pu)),
        Pu.exports
    );
}
var Ku = { exports: {} },
    z2 = Ku.exports,
    uv;
function B2() {
    return (
        uv ||
            ((uv = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o(Xr());
                })(z2, function (i) {
                    (function () {
                        var o = i,
                            u = o.lib,
                            f = u.Base,
                            d = o.enc,
                            y = d.Utf8,
                            p = o.algo;
                        p.HMAC = f.extend({
                            init: function (m, _) {
                                (m = this._hasher = new m.init()), typeof _ == "string" && (_ = y.parse(_));
                                var g = m.blockSize,
                                    T = g * 4;
                                _.sigBytes > T && (_ = m.finalize(_)), _.clamp();
                                for (
                                    var O = (this._oKey = _.clone()),
                                        k = (this._iKey = _.clone()),
                                        Y = O.words,
                                        R = k.words,
                                        q = 0;
                                    q < g;
                                    q++
                                )
                                    (Y[q] ^= 1549556828), (R[q] ^= 909522486);
                                (O.sigBytes = k.sigBytes = T), this.reset();
                            },
                            reset: function () {
                                var m = this._hasher;
                                m.reset(), m.update(this._iKey);
                            },
                            update: function (m) {
                                return this._hasher.update(m), this;
                            },
                            finalize: function (m) {
                                var _ = this._hasher,
                                    g = _.finalize(m);
                                _.reset();
                                var T = _.finalize(this._oKey.clone().concat(g));
                                return T;
                            },
                        });
                    })();
                });
            })(Ku)),
        Ku.exports
    );
}
var U2 = Vu.exports,
    lv;
function n_() {
    return (
        lv ||
            ((lv = 1),
            (function (n, r) {
                (function (i, o, u) {
                    n.exports = o(Xr(), N2(), B2());
                })(U2, function (i) {
                    return (
                        (function () {
                            var o = i,
                                u = o.lib,
                                f = u.Base,
                                d = u.WordArray,
                                y = o.algo,
                                p = y.MD5,
                                m = (y.EvpKDF = f.extend({
                                    cfg: f.extend({ keySize: 128 / 32, hasher: p, iterations: 1 }),
                                    init: function (_) {
                                        this.cfg = this.cfg.extend(_);
                                    },
                                    compute: function (_, g) {
                                        for (
                                            var T,
                                                O = this.cfg,
                                                k = O.hasher.create(),
                                                Y = d.create(),
                                                R = Y.words,
                                                q = O.keySize,
                                                w = O.iterations;
                                            R.length < q;

                                        ) {
                                            T && k.update(T), (T = k.update(_).finalize(g)), k.reset();
                                            for (var x = 1; x < w; x++) (T = k.finalize(T)), k.reset();
                                            Y.concat(T);
                                        }
                                        return (Y.sigBytes = q * 4), Y;
                                    },
                                }));
                            o.EvpKDF = function (_, g, T) {
                                return m.create(T).compute(_, g);
                            };
                        })(),
                        i.EvpKDF
                    );
                });
            })(Vu)),
        Vu.exports
    );
}
var Zu = { exports: {} },
    L2 = Zu.exports,
    cv;
function H2() {
    return (
        cv ||
            ((cv = 1),
            (function (n, r) {
                (function (i, o, u) {
                    n.exports = o(Xr(), n_());
                })(L2, function (i) {
                    i.lib.Cipher ||
                        (function (o) {
                            var u = i,
                                f = u.lib,
                                d = f.Base,
                                y = f.WordArray,
                                p = f.BufferedBlockAlgorithm,
                                m = u.enc;
                            m.Utf8;
                            var _ = m.Base64,
                                g = u.algo,
                                T = g.EvpKDF,
                                O = (f.Cipher = p.extend({
                                    cfg: d.extend(),
                                    createEncryptor: function (I, $) {
                                        return this.create(this._ENC_XFORM_MODE, I, $);
                                    },
                                    createDecryptor: function (I, $) {
                                        return this.create(this._DEC_XFORM_MODE, I, $);
                                    },
                                    init: function (I, $, rt) {
                                        (this.cfg = this.cfg.extend(rt)),
                                            (this._xformMode = I),
                                            (this._key = $),
                                            this.reset();
                                    },
                                    reset: function () {
                                        p.reset.call(this), this._doReset();
                                    },
                                    process: function (I) {
                                        return this._append(I), this._process();
                                    },
                                    finalize: function (I) {
                                        I && this._append(I);
                                        var $ = this._doFinalize();
                                        return $;
                                    },
                                    keySize: 128 / 32,
                                    ivSize: 128 / 32,
                                    _ENC_XFORM_MODE: 1,
                                    _DEC_XFORM_MODE: 2,
                                    _createHelper: (function () {
                                        function I($) {
                                            return typeof $ == "string" ? ut : G;
                                        }
                                        return function ($) {
                                            return {
                                                encrypt: function (rt, at, mt) {
                                                    return I(at).encrypt($, rt, at, mt);
                                                },
                                                decrypt: function (rt, at, mt) {
                                                    return I(at).decrypt($, rt, at, mt);
                                                },
                                            };
                                        };
                                    })(),
                                }));
                            f.StreamCipher = O.extend({
                                _doFinalize: function () {
                                    var I = this._process(!0);
                                    return I;
                                },
                                blockSize: 1,
                            });
                            var k = (u.mode = {}),
                                Y = (f.BlockCipherMode = d.extend({
                                    createEncryptor: function (I, $) {
                                        return this.Encryptor.create(I, $);
                                    },
                                    createDecryptor: function (I, $) {
                                        return this.Decryptor.create(I, $);
                                    },
                                    init: function (I, $) {
                                        (this._cipher = I), (this._iv = $);
                                    },
                                })),
                                R = (k.CBC = (function () {
                                    var I = Y.extend();
                                    (I.Encryptor = I.extend({
                                        processBlock: function (rt, at) {
                                            var mt = this._cipher,
                                                yt = mt.blockSize;
                                            $.call(this, rt, at, yt),
                                                mt.encryptBlock(rt, at),
                                                (this._prevBlock = rt.slice(at, at + yt));
                                        },
                                    })),
                                        (I.Decryptor = I.extend({
                                            processBlock: function (rt, at) {
                                                var mt = this._cipher,
                                                    yt = mt.blockSize,
                                                    V = rt.slice(at, at + yt);
                                                mt.decryptBlock(rt, at),
                                                    $.call(this, rt, at, yt),
                                                    (this._prevBlock = V);
                                            },
                                        }));
                                    function $(rt, at, mt) {
                                        var yt,
                                            V = this._iv;
                                        V ? ((yt = V), (this._iv = o)) : (yt = this._prevBlock);
                                        for (var st = 0; st < mt; st++) rt[at + st] ^= yt[st];
                                    }
                                    return I;
                                })()),
                                q = (u.pad = {}),
                                w = (q.Pkcs7 = {
                                    pad: function (I, $) {
                                        for (
                                            var rt = $ * 4,
                                                at = rt - (I.sigBytes % rt),
                                                mt = (at << 24) | (at << 16) | (at << 8) | at,
                                                yt = [],
                                                V = 0;
                                            V < at;
                                            V += 4
                                        )
                                            yt.push(mt);
                                        var st = y.create(yt, at);
                                        I.concat(st);
                                    },
                                    unpad: function (I) {
                                        var $ = I.words[(I.sigBytes - 1) >>> 2] & 255;
                                        I.sigBytes -= $;
                                    },
                                });
                            f.BlockCipher = O.extend({
                                cfg: O.cfg.extend({ mode: R, padding: w }),
                                reset: function () {
                                    var I;
                                    O.reset.call(this);
                                    var $ = this.cfg,
                                        rt = $.iv,
                                        at = $.mode;
                                    this._xformMode == this._ENC_XFORM_MODE
                                        ? (I = at.createEncryptor)
                                        : ((I = at.createDecryptor), (this._minBufferSize = 1)),
                                        this._mode && this._mode.__creator == I
                                            ? this._mode.init(this, rt && rt.words)
                                            : ((this._mode = I.call(at, this, rt && rt.words)),
                                              (this._mode.__creator = I));
                                },
                                _doProcessBlock: function (I, $) {
                                    this._mode.processBlock(I, $);
                                },
                                _doFinalize: function () {
                                    var I,
                                        $ = this.cfg.padding;
                                    return (
                                        this._xformMode == this._ENC_XFORM_MODE
                                            ? ($.pad(this._data, this.blockSize), (I = this._process(!0)))
                                            : ((I = this._process(!0)), $.unpad(I)),
                                        I
                                    );
                                },
                                blockSize: 128 / 32,
                            });
                            var x = (f.CipherParams = d.extend({
                                    init: function (I) {
                                        this.mixIn(I);
                                    },
                                    toString: function (I) {
                                        return (I || this.formatter).stringify(this);
                                    },
                                })),
                                C = (u.format = {}),
                                D = (C.OpenSSL = {
                                    stringify: function (I) {
                                        var $,
                                            rt = I.ciphertext,
                                            at = I.salt;
                                        return (
                                            at
                                                ? ($ = y.create([1398893684, 1701076831]).concat(at).concat(rt))
                                                : ($ = rt),
                                            $.toString(_)
                                        );
                                    },
                                    parse: function (I) {
                                        var $,
                                            rt = _.parse(I),
                                            at = rt.words;
                                        return (
                                            at[0] == 1398893684 &&
                                                at[1] == 1701076831 &&
                                                (($ = y.create(at.slice(2, 4))), at.splice(0, 4), (rt.sigBytes -= 16)),
                                            x.create({ ciphertext: rt, salt: $ })
                                        );
                                    },
                                }),
                                G = (f.SerializableCipher = d.extend({
                                    cfg: d.extend({ format: D }),
                                    encrypt: function (I, $, rt, at) {
                                        at = this.cfg.extend(at);
                                        var mt = I.createEncryptor(rt, at),
                                            yt = mt.finalize($),
                                            V = mt.cfg;
                                        return x.create({
                                            ciphertext: yt,
                                            key: rt,
                                            iv: V.iv,
                                            algorithm: I,
                                            mode: V.mode,
                                            padding: V.padding,
                                            blockSize: I.blockSize,
                                            formatter: at.format,
                                        });
                                    },
                                    decrypt: function (I, $, rt, at) {
                                        (at = this.cfg.extend(at)), ($ = this._parse($, at.format));
                                        var mt = I.createDecryptor(rt, at).finalize($.ciphertext);
                                        return mt;
                                    },
                                    _parse: function (I, $) {
                                        return typeof I == "string" ? $.parse(I, this) : I;
                                    },
                                })),
                                U = (u.kdf = {}),
                                Z = (U.OpenSSL = {
                                    execute: function (I, $, rt, at, mt) {
                                        if ((at || (at = y.random(64 / 8)), mt))
                                            var yt = T.create({ keySize: $ + rt, hasher: mt }).compute(I, at);
                                        else var yt = T.create({ keySize: $ + rt }).compute(I, at);
                                        var V = y.create(yt.words.slice($), rt * 4);
                                        return (yt.sigBytes = $ * 4), x.create({ key: yt, iv: V, salt: at });
                                    },
                                }),
                                ut = (f.PasswordBasedCipher = G.extend({
                                    cfg: G.cfg.extend({ kdf: Z }),
                                    encrypt: function (I, $, rt, at) {
                                        at = this.cfg.extend(at);
                                        var mt = at.kdf.execute(rt, I.keySize, I.ivSize, at.salt, at.hasher);
                                        at.iv = mt.iv;
                                        var yt = G.encrypt.call(this, I, $, mt.key, at);
                                        return yt.mixIn(mt), yt;
                                    },
                                    decrypt: function (I, $, rt, at) {
                                        (at = this.cfg.extend(at)), ($ = this._parse($, at.format));
                                        var mt = at.kdf.execute(rt, I.keySize, I.ivSize, $.salt, at.hasher);
                                        at.iv = mt.iv;
                                        var yt = G.decrypt.call(this, I, $, mt.key, at);
                                        return yt;
                                    },
                                }));
                        })();
                });
            })(Zu)),
        Zu.exports
    );
}
var k2 = Gu.exports,
    fv;
function j2() {
    return (
        fv ||
            ((fv = 1),
            (function (n, r) {
                (function (i, o, u) {
                    n.exports = o(Xr(), A2(), C2(), n_(), H2());
                })(k2, function (i) {
                    return (
                        (function () {
                            var o = i,
                                u = o.lib,
                                f = u.BlockCipher,
                                d = o.algo,
                                y = [],
                                p = [],
                                m = [],
                                _ = [],
                                g = [],
                                T = [],
                                O = [],
                                k = [],
                                Y = [],
                                R = [];
                            (function () {
                                for (var x = [], C = 0; C < 256; C++)
                                    C < 128 ? (x[C] = C << 1) : (x[C] = (C << 1) ^ 283);
                                for (var D = 0, G = 0, C = 0; C < 256; C++) {
                                    var U = G ^ (G << 1) ^ (G << 2) ^ (G << 3) ^ (G << 4);
                                    (U = (U >>> 8) ^ (U & 255) ^ 99), (y[D] = U), (p[U] = D);
                                    var Z = x[D],
                                        ut = x[Z],
                                        I = x[ut],
                                        $ = (x[U] * 257) ^ (U * 16843008);
                                    (m[D] = ($ << 24) | ($ >>> 8)),
                                        (_[D] = ($ << 16) | ($ >>> 16)),
                                        (g[D] = ($ << 8) | ($ >>> 24)),
                                        (T[D] = $);
                                    var $ = (I * 16843009) ^ (ut * 65537) ^ (Z * 257) ^ (D * 16843008);
                                    (O[U] = ($ << 24) | ($ >>> 8)),
                                        (k[U] = ($ << 16) | ($ >>> 16)),
                                        (Y[U] = ($ << 8) | ($ >>> 24)),
                                        (R[U] = $),
                                        D ? ((D = Z ^ x[x[x[I ^ Z]]]), (G ^= x[x[G]])) : (D = G = 1);
                                }
                            })();
                            var q = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                                w = (d.AES = f.extend({
                                    _doReset: function () {
                                        var x;
                                        if (!(this._nRounds && this._keyPriorReset === this._key)) {
                                            for (
                                                var C = (this._keyPriorReset = this._key),
                                                    D = C.words,
                                                    G = C.sigBytes / 4,
                                                    U = (this._nRounds = G + 6),
                                                    Z = (U + 1) * 4,
                                                    ut = (this._keySchedule = []),
                                                    I = 0;
                                                I < Z;
                                                I++
                                            )
                                                I < G
                                                    ? (ut[I] = D[I])
                                                    : ((x = ut[I - 1]),
                                                      I % G
                                                          ? G > 6 &&
                                                            I % G == 4 &&
                                                            (x =
                                                                (y[x >>> 24] << 24) |
                                                                (y[(x >>> 16) & 255] << 16) |
                                                                (y[(x >>> 8) & 255] << 8) |
                                                                y[x & 255])
                                                          : ((x = (x << 8) | (x >>> 24)),
                                                            (x =
                                                                (y[x >>> 24] << 24) |
                                                                (y[(x >>> 16) & 255] << 16) |
                                                                (y[(x >>> 8) & 255] << 8) |
                                                                y[x & 255]),
                                                            (x ^= q[(I / G) | 0] << 24)),
                                                      (ut[I] = ut[I - G] ^ x));
                                            for (var $ = (this._invKeySchedule = []), rt = 0; rt < Z; rt++) {
                                                var I = Z - rt;
                                                if (rt % 4) var x = ut[I];
                                                else var x = ut[I - 4];
                                                rt < 4 || I <= 4
                                                    ? ($[rt] = x)
                                                    : ($[rt] =
                                                          O[y[x >>> 24]] ^
                                                          k[y[(x >>> 16) & 255]] ^
                                                          Y[y[(x >>> 8) & 255]] ^
                                                          R[y[x & 255]]);
                                            }
                                        }
                                    },
                                    encryptBlock: function (x, C) {
                                        this._doCryptBlock(x, C, this._keySchedule, m, _, g, T, y);
                                    },
                                    decryptBlock: function (x, C) {
                                        var D = x[C + 1];
                                        (x[C + 1] = x[C + 3]),
                                            (x[C + 3] = D),
                                            this._doCryptBlock(x, C, this._invKeySchedule, O, k, Y, R, p);
                                        var D = x[C + 1];
                                        (x[C + 1] = x[C + 3]), (x[C + 3] = D);
                                    },
                                    _doCryptBlock: function (x, C, D, G, U, Z, ut, I) {
                                        for (
                                            var $ = this._nRounds,
                                                rt = x[C] ^ D[0],
                                                at = x[C + 1] ^ D[1],
                                                mt = x[C + 2] ^ D[2],
                                                yt = x[C + 3] ^ D[3],
                                                V = 4,
                                                st = 1;
                                            st < $;
                                            st++
                                        ) {
                                            var ft =
                                                    G[rt >>> 24] ^
                                                    U[(at >>> 16) & 255] ^
                                                    Z[(mt >>> 8) & 255] ^
                                                    ut[yt & 255] ^
                                                    D[V++],
                                                Dt =
                                                    G[at >>> 24] ^
                                                    U[(mt >>> 16) & 255] ^
                                                    Z[(yt >>> 8) & 255] ^
                                                    ut[rt & 255] ^
                                                    D[V++],
                                                Mt =
                                                    G[mt >>> 24] ^
                                                    U[(yt >>> 16) & 255] ^
                                                    Z[(rt >>> 8) & 255] ^
                                                    ut[at & 255] ^
                                                    D[V++],
                                                E =
                                                    G[yt >>> 24] ^
                                                    U[(rt >>> 16) & 255] ^
                                                    Z[(at >>> 8) & 255] ^
                                                    ut[mt & 255] ^
                                                    D[V++];
                                            (rt = ft), (at = Dt), (mt = Mt), (yt = E);
                                        }
                                        var ft =
                                                ((I[rt >>> 24] << 24) |
                                                    (I[(at >>> 16) & 255] << 16) |
                                                    (I[(mt >>> 8) & 255] << 8) |
                                                    I[yt & 255]) ^
                                                D[V++],
                                            Dt =
                                                ((I[at >>> 24] << 24) |
                                                    (I[(mt >>> 16) & 255] << 16) |
                                                    (I[(yt >>> 8) & 255] << 8) |
                                                    I[rt & 255]) ^
                                                D[V++],
                                            Mt =
                                                ((I[mt >>> 24] << 24) |
                                                    (I[(yt >>> 16) & 255] << 16) |
                                                    (I[(rt >>> 8) & 255] << 8) |
                                                    I[at & 255]) ^
                                                D[V++],
                                            E =
                                                ((I[yt >>> 24] << 24) |
                                                    (I[(rt >>> 16) & 255] << 16) |
                                                    (I[(at >>> 8) & 255] << 8) |
                                                    I[mt & 255]) ^
                                                D[V++];
                                        (x[C] = ft), (x[C + 1] = Dt), (x[C + 2] = Mt), (x[C + 3] = E);
                                    },
                                    keySize: 256 / 32,
                                }));
                            o.AES = f._createHelper(w);
                        })(),
                        i.AES
                    );
                });
            })(Gu)),
        Gu.exports
    );
}
var Y2 = j2();
const r_ = Ko(Y2);
function yh() {
    return ox(new Date(), "yyyy-MM-dd");
}
function H4(n) {
    return u2(a_(n));
}
function k4(n) {
    return o2(a_(n));
}
function a_(n) {
    return a2(n, "yyyy-MM-dd", new Date());
}
function j4() {
    return mT(l2(), new Date());
}
function Y4(n) {
    const r = n % 60,
        i = Math.floor(n / 60) % 60,
        o = Math.floor(n / 3600),
        u = (f) => f.toString().padStart(2, "0");
    return o === 0 ? `${u(i)}:${u(r)}` : `${u(o)}:${u(i)}:${u(r)}`;
}
const q4 = () => {},
    q2 = (n) => {
        const r = document.createElement("textarea");
        document.body.appendChild(r),
            (r.value = n),
            r.select(),
            document.execCommand("copy"),
            document.body.removeChild(r);
    },
    dv = async (n) => {
        navigator.clipboard ? await navigator.clipboard.writeText(n) : q2(n);
    },
    G2 = () => {
        try {
            return (
                typeof window < "u" &&
                window.isSecureContext !== !1 &&
                typeof navigator < "u" &&
                typeof navigator.share == "function"
            );
        } catch {
            return !1;
        }
    },
    G4 = (n) => {
        const r = n.url
            ? n.text +
              `

` +
              n.url
            : n.text;
        return G2()
            ? navigator.share({ text: r }).then(
                  () => "shared",
                  (i) =>
                      i instanceof DOMException && (i.name === "AbortError" || i.name === "NotAllowedError")
                          ? "copied"
                          : dv(r).then(() => "copied")
              )
            : dv(r).then(() => "copied");
    },
    I4 = (n, r) => {
        if (r <= 0) return "â˜†â˜†â˜†â˜†â˜†";
        let i = 0;
        return (
            n > 0 && (i = 1),
            n >= r * 0.25 && (i = 2),
            n >= r * 0.5 && (i = 3),
            n >= r * 0.75 && (i = 4),
            n >= r && (i = 5),
            "â˜…".repeat(i) + "â˜†".repeat(5 - i)
        );
    },
    I2 = ["8C5a", "9o2Z", "8zjm", "CLHB"];
let cd = null;
function i_() {
    return cd || (cd = I2.join("")), cd;
}
function gh() {
    return "https://squares.org/api/";
}
function o_(n) {
    var r,
        i,
        o = "";
    if (typeof n == "string" || typeof n == "number") o += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var u = n.length;
            for (r = 0; r < u; r++) n[r] && (i = o_(n[r])) && (o && (o += " "), (o += i));
        } else for (i in n) n[i] && (o && (o += " "), (o += i));
    return o;
}
function Sa() {
    for (var n, r, i = 0, o = "", u = arguments.length; i < u; i++)
        (n = arguments[i]) && (r = o_(n)) && (o && (o += " "), (o += r));
    return o;
}
function X2(n) {
    if (typeof document > "u") return;
    let r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
    (i.type = "text/css"),
        r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
        i.styleSheet ? (i.styleSheet.cssText = n) : i.appendChild(document.createTextNode(n));
}
X2(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Wo = (n) => typeof n == "number" && !isNaN(n),
    xa = (n) => typeof n == "string",
    ir = (n) => typeof n == "function",
    Q2 = (n) => xa(n) || Wo(n),
    Ld = (n) => (xa(n) || ir(n) ? n : null),
    V2 = (n, r) => (n === !1 || (Wo(n) && n > 0) ? n : r),
    Hd = (n) => wt.isValidElement(n) || xa(n) || ir(n) || Wo(n);
function P2(n, r, i = 300) {
    let { scrollHeight: o, style: u } = n;
    requestAnimationFrame(() => {
        (u.minHeight = "initial"),
            (u.height = o + "px"),
            (u.transition = `all ${i}ms`),
            requestAnimationFrame(() => {
                (u.height = "0"), (u.padding = "0"), (u.margin = "0"), setTimeout(r, i);
            });
    });
}
function K2({ enter: n, exit: r, appendPosition: i = !1, collapse: o = !0, collapseDuration: u = 300 }) {
    return function ({
        children: f,
        position: d,
        preventExitTransition: y,
        done: p,
        nodeRef: m,
        isIn: _,
        playToast: g,
    }) {
        let T = i ? `${n}--${d}` : n,
            O = i ? `${r}--${d}` : r,
            k = wt.useRef(0);
        return (
            wt.useLayoutEffect(() => {
                let Y = m.current,
                    R = T.split(" "),
                    q = (w) => {
                        w.target === m.current &&
                            (g(),
                            Y.removeEventListener("animationend", q),
                            Y.removeEventListener("animationcancel", q),
                            k.current === 0 && w.type !== "animationcancel" && Y.classList.remove(...R));
                    };
                Y.classList.add(...R), Y.addEventListener("animationend", q), Y.addEventListener("animationcancel", q);
            }, []),
            wt.useEffect(() => {
                let Y = m.current,
                    R = () => {
                        Y.removeEventListener("animationend", R), o ? P2(Y, p, u) : p();
                    };
                _ || (y ? R() : ((k.current = 1), (Y.className += ` ${O}`), Y.addEventListener("animationend", R)));
            }, [_]),
            $t.createElement($t.Fragment, null, f)
        );
    };
}
function hv(n, r) {
    return {
        content: s_(n.content, n.props),
        containerId: n.props.containerId,
        id: n.props.toastId,
        theme: n.props.theme,
        type: n.props.type,
        data: n.props.data || {},
        isLoading: n.props.isLoading,
        icon: n.props.icon,
        reason: n.removalReason,
        status: r,
    };
}
function s_(n, r, i = !1) {
    return wt.isValidElement(n) && !xa(n.type)
        ? wt.cloneElement(n, { closeToast: r.closeToast, toastProps: r, data: r.data, isPaused: i })
        : ir(n)
          ? n({ closeToast: r.closeToast, toastProps: r, data: r.data, isPaused: i })
          : n;
}
function Z2({ closeToast: n, theme: r, ariaLabel: i = "close" }) {
    return $t.createElement(
        "button",
        {
            className: `Toastify__close-button Toastify__close-button--${r}`,
            type: "button",
            onClick: (o) => {
                o.stopPropagation(), n(!0);
            },
            "aria-label": i,
        },
        $t.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            $t.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
        )
    );
}
function W2({
    delay: n,
    isRunning: r,
    closeToast: i,
    type: o = "default",
    hide: u,
    className: f,
    controlledProgress: d,
    progress: y,
    rtl: p,
    isIn: m,
    theme: _,
}) {
    let g = u || (d && y === 0),
        T = { animationDuration: `${n}ms`, animationPlayState: r ? "running" : "paused" };
    d && (T.transform = `scaleX(${y})`);
    let O = Sa(
            "Toastify__progress-bar",
            d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${_}`,
            `Toastify__progress-bar--${o}`,
            { "Toastify__progress-bar--rtl": p }
        ),
        k = ir(f) ? f({ rtl: p, type: o, defaultClassName: O }) : Sa(O, f),
        Y = {
            [d && y >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
                d && y < 1
                    ? null
                    : () => {
                          m && i();
                      },
        };
    return $t.createElement(
        "div",
        { className: "Toastify__progress-bar--wrp", "data-hidden": g },
        $t.createElement("div", {
            className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${o}`,
        }),
        $t.createElement("div", {
            role: "progressbar",
            "aria-hidden": g ? "true" : "false",
            "aria-label": "notification timer",
            className: k,
            style: T,
            ...Y,
        })
    );
}
var F2 = 1,
    u_ = () => `${F2++}`;
function $2(n, r, i) {
    let o = 1,
        u = 0,
        f = [],
        d = [],
        y = r,
        p = new Map(),
        m = new Set(),
        _ = (w) => (m.add(w), () => m.delete(w)),
        g = () => {
            (d = Array.from(p.values())), m.forEach((w) => w());
        },
        T = ({ containerId: w, toastId: x, updateId: C }) => {
            let D = w ? w !== n : n !== 1,
                G = p.has(x) && C == null;
            return D || G;
        },
        O = (w, x) => {
            p.forEach((C) => {
                var D;
                (x == null || x === C.props.toastId) && ((D = C.toggle) == null || D.call(C, w));
            });
        },
        k = (w) => {
            var x, C;
            (C = (x = w.props) == null ? void 0 : x.onClose) == null || C.call(x, w.removalReason), (w.isActive = !1);
        },
        Y = (w) => {
            if (w == null) p.forEach(k);
            else {
                let x = p.get(w);
                x && k(x);
            }
            g();
        },
        R = () => {
            (u -= f.length), (f = []);
        },
        q = (w) => {
            var x, C;
            let { toastId: D, updateId: G } = w.props,
                U = G == null;
            w.staleId && p.delete(w.staleId),
                (w.isActive = !0),
                p.set(D, w),
                g(),
                i(hv(w, U ? "added" : "updated")),
                U && ((C = (x = w.props).onOpen) == null || C.call(x));
        };
    return {
        id: n,
        props: y,
        observe: _,
        toggle: O,
        removeToast: Y,
        toasts: p,
        clearQueue: R,
        buildToast: (w, x) => {
            if (T(x)) return;
            let { toastId: C, updateId: D, data: G, staleId: U, delay: Z } = x,
                ut = D == null;
            ut && u++;
            let I = {
                ...y,
                style: y.toastStyle,
                key: o++,
                ...Object.fromEntries(Object.entries(x).filter(([rt, at]) => at != null)),
                toastId: C,
                updateId: D,
                data: G,
                isIn: !1,
                className: Ld(x.className || y.toastClassName),
                progressClassName: Ld(x.progressClassName || y.progressClassName),
                autoClose: x.isLoading ? !1 : V2(x.autoClose, y.autoClose),
                closeToast(rt) {
                    (p.get(C).removalReason = rt), Y(C);
                },
                deleteToast() {
                    let rt = p.get(C);
                    if (rt != null) {
                        if ((i(hv(rt, "removed")), p.delete(C), u--, u < 0 && (u = 0), f.length > 0)) {
                            q(f.shift());
                            return;
                        }
                        g();
                    }
                },
            };
            (I.closeButton = y.closeButton),
                x.closeButton === !1 || Hd(x.closeButton)
                    ? (I.closeButton = x.closeButton)
                    : x.closeButton === !0 && (I.closeButton = Hd(y.closeButton) ? y.closeButton : !0);
            let $ = { content: w, props: I, staleId: U };
            y.limit && y.limit > 0 && u > y.limit && ut
                ? f.push($)
                : Wo(Z)
                  ? setTimeout(() => {
                        q($);
                    }, Z)
                  : q($);
        },
        setProps(w) {
            y = w;
        },
        setToggle: (w, x) => {
            let C = p.get(w);
            C && (C.toggle = x);
        },
        isToastActive: (w) => {
            var x;
            return (x = p.get(w)) == null ? void 0 : x.isActive;
        },
        getSnapshot: () => d,
    };
}
var ke = new Map(),
    Xo = [],
    kd = new Set(),
    J2 = (n) => kd.forEach((r) => r(n)),
    l_ = () => ke.size > 0;
function tw() {
    Xo.forEach((n) => f_(n.content, n.options)), (Xo = []);
}
var ew = (n, { containerId: r }) => {
    var i;
    return (i = ke.get(r || 1)) == null ? void 0 : i.toasts.get(n);
};
function c_(n, r) {
    var i;
    if (r) return !!((i = ke.get(r)) != null && i.isToastActive(n));
    let o = !1;
    return (
        ke.forEach((u) => {
            u.isToastActive(n) && (o = !0);
        }),
        o
    );
}
function nw(n) {
    if (!l_()) {
        Xo = Xo.filter((r) => n != null && r.options.toastId !== n);
        return;
    }
    if (n == null || Q2(n))
        ke.forEach((r) => {
            r.removeToast(n);
        });
    else if (n && ("containerId" in n || "id" in n)) {
        let r = ke.get(n.containerId);
        r
            ? r.removeToast(n.id)
            : ke.forEach((i) => {
                  i.removeToast(n.id);
              });
    }
}
var rw = (n = {}) => {
    ke.forEach((r) => {
        r.props.limit && (!n.containerId || r.id === n.containerId) && r.clearQueue();
    });
};
function f_(n, r) {
    Hd(n) &&
        (l_() || Xo.push({ content: n, options: r }),
        ke.forEach((i) => {
            i.buildToast(n, r);
        }));
}
function aw(n) {
    var r;
    (r = ke.get(n.containerId || 1)) == null || r.setToggle(n.id, n.fn);
}
function d_(n, r) {
    ke.forEach((i) => {
        (r == null || !(r != null && r.containerId) || r?.containerId === i.id) && i.toggle(n, r?.id);
    });
}
function iw(n) {
    let r = n.containerId || 1;
    return {
        subscribe(i) {
            let o = $2(r, n, J2);
            ke.set(r, o);
            let u = o.observe(i);
            return (
                tw(),
                () => {
                    u(), ke.delete(r);
                }
            );
        },
        setProps(i) {
            var o;
            (o = ke.get(r)) == null || o.setProps(i);
        },
        getSnapshot() {
            var i;
            return (i = ke.get(r)) == null ? void 0 : i.getSnapshot();
        },
    };
}
function ow(n) {
    return (
        kd.add(n),
        () => {
            kd.delete(n);
        }
    );
}
function sw(n) {
    return n && (xa(n.toastId) || Wo(n.toastId)) ? n.toastId : u_();
}
function Fo(n, r) {
    return f_(n, r), r.toastId;
}
function Dl(n, r) {
    return { ...r, type: (r && r.type) || n, toastId: sw(r) };
}
function Al(n) {
    return (r, i) => Fo(r, Dl(n, i));
}
function Vt(n, r) {
    return Fo(n, Dl("default", r));
}
Vt.loading = (n, r) =>
    Fo(n, Dl("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...r }));
function uw(n, { pending: r, error: i, success: o }, u) {
    let f;
    r && (f = xa(r) ? Vt.loading(r, u) : Vt.loading(r.render, { ...u, ...r }));
    let d = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
        y = (m, _, g) => {
            if (_ == null) {
                Vt.dismiss(f);
                return;
            }
            let T = { type: m, ...d, ...u, data: g },
                O = xa(_) ? { render: _ } : _;
            return f ? Vt.update(f, { ...T, ...O }) : Vt(O.render, { ...T, ...O }), g;
        },
        p = ir(n) ? n() : n;
    return p.then((m) => y("success", o, m)).catch((m) => y("error", i, m)), p;
}
Vt.promise = uw;
Vt.success = Al("success");
Vt.info = Al("info");
Vt.error = Al("error");
Vt.warning = Al("warning");
Vt.warn = Vt.warning;
Vt.dark = (n, r) => Fo(n, Dl("default", { theme: "dark", ...r }));
function lw(n) {
    nw(n);
}
Vt.dismiss = lw;
Vt.clearWaitingQueue = rw;
Vt.isActive = c_;
Vt.update = (n, r = {}) => {
    let i = ew(n, r);
    if (i) {
        let { props: o, content: u } = i,
            f = { delay: 100, ...o, ...r, toastId: r.toastId || n, updateId: u_() };
        f.toastId !== n && (f.staleId = n);
        let d = f.render || u;
        delete f.render, Fo(d, f);
    }
};
Vt.done = (n) => {
    Vt.update(n, { progress: 1 });
};
Vt.onChange = ow;
Vt.play = (n) => d_(!0, n);
Vt.pause = (n) => d_(!1, n);
function cw(n) {
    var r;
    let { subscribe: i, getSnapshot: o, setProps: u } = wt.useRef(iw(n)).current;
    u(n);
    let f = (r = wt.useSyncExternalStore(i, o, o)) == null ? void 0 : r.slice();
    function d(y) {
        if (!f) return [];
        let p = new Map();
        return (
            n.newestOnTop && f.reverse(),
            f.forEach((m) => {
                let { position: _ } = m.props;
                p.has(_) || p.set(_, []), p.get(_).push(m);
            }),
            Array.from(p, (m) => y(m[0], m[1]))
        );
    }
    return { getToastToRender: d, isToastActive: c_, count: f?.length };
}
function fw(n) {
    let [r, i] = wt.useState(!1),
        [o, u] = wt.useState(!1),
        f = wt.useRef(null),
        d = wt.useRef({
            start: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            didMove: !1,
        }).current,
        { autoClose: y, pauseOnHover: p, closeToast: m, onClick: _, closeOnClick: g } = n;
    aw({ id: n.toastId, containerId: n.containerId, fn: i }),
        wt.useEffect(() => {
            if (n.pauseOnFocusLoss)
                return (
                    T(),
                    () => {
                        O();
                    }
                );
        }, [n.pauseOnFocusLoss]);
    function T() {
        document.hasFocus() || q(), window.addEventListener("focus", R), window.addEventListener("blur", q);
    }
    function O() {
        window.removeEventListener("focus", R), window.removeEventListener("blur", q);
    }
    function k(U) {
        if (n.draggable === !0 || n.draggable === U.pointerType) {
            w();
            let Z = f.current;
            (d.canCloseOnClick = !0),
                (d.canDrag = !0),
                (Z.style.transition = "none"),
                n.draggableDirection === "x"
                    ? ((d.start = U.clientX), (d.removalDistance = Z.offsetWidth * (n.draggablePercent / 100)))
                    : ((d.start = U.clientY),
                      (d.removalDistance =
                          (Z.offsetHeight *
                              (n.draggablePercent === 80 ? n.draggablePercent * 1.5 : n.draggablePercent)) /
                          100));
        }
    }
    function Y(U) {
        let { top: Z, bottom: ut, left: I, right: $ } = f.current.getBoundingClientRect();
        U.nativeEvent.type !== "touchend" &&
        n.pauseOnHover &&
        U.clientX >= I &&
        U.clientX <= $ &&
        U.clientY >= Z &&
        U.clientY <= ut
            ? q()
            : R();
    }
    function R() {
        i(!0);
    }
    function q() {
        i(!1);
    }
    function w() {
        (d.didMove = !1), document.addEventListener("pointermove", C), document.addEventListener("pointerup", D);
    }
    function x() {
        document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", D);
    }
    function C(U) {
        let Z = f.current;
        if (d.canDrag && Z) {
            (d.didMove = !0),
                r && q(),
                n.draggableDirection === "x" ? (d.delta = U.clientX - d.start) : (d.delta = U.clientY - d.start),
                d.start !== U.clientX && (d.canCloseOnClick = !1);
            let ut = n.draggableDirection === "x" ? `${d.delta}px, var(--y)` : `0, calc(${d.delta}px + var(--y))`;
            (Z.style.transform = `translate3d(${ut},0)`),
                (Z.style.opacity = `${1 - Math.abs(d.delta / d.removalDistance)}`);
        }
    }
    function D() {
        x();
        let U = f.current;
        if (d.canDrag && d.didMove && U) {
            if (((d.canDrag = !1), Math.abs(d.delta) > d.removalDistance)) {
                u(!0), n.closeToast(!0), n.collapseAll();
                return;
            }
            (U.style.transition = "transform 0.2s, opacity 0.2s"),
                U.style.removeProperty("transform"),
                U.style.removeProperty("opacity");
        }
    }
    let G = { onPointerDown: k, onPointerUp: Y };
    return (
        y && p && ((G.onMouseEnter = q), n.stacked || (G.onMouseLeave = R)),
        g &&
            (G.onClick = (U) => {
                _ && _(U), d.canCloseOnClick && m(!0);
            }),
        { playToast: R, pauseToast: q, isRunning: r, preventExitTransition: o, toastRef: f, eventHandlers: G }
    );
}
var dw = typeof window < "u" ? wt.useLayoutEffect : wt.useEffect,
    Ml = ({ theme: n, type: r, isLoading: i, ...o }) =>
        $t.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: n === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`,
            ...o,
        });
function hw(n) {
    return $t.createElement(
        Ml,
        { ...n },
        $t.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
    );
}
function mw(n) {
    return $t.createElement(
        Ml,
        { ...n },
        $t.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
    );
}
function pw(n) {
    return $t.createElement(
        Ml,
        { ...n },
        $t.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
    );
}
function yw(n) {
    return $t.createElement(
        Ml,
        { ...n },
        $t.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
    );
}
function gw() {
    return $t.createElement("div", { className: "Toastify__spinner" });
}
var jd = { info: mw, warning: hw, success: pw, error: yw, spinner: gw },
    vw = (n) => n in jd;
function _w({ theme: n, type: r, isLoading: i, icon: o }) {
    let u = null,
        f = { theme: n, type: r };
    return (
        o === !1 ||
            (ir(o)
                ? (u = o({ ...f, isLoading: i }))
                : wt.isValidElement(o)
                  ? (u = wt.cloneElement(o, f))
                  : i
                    ? (u = jd.spinner())
                    : vw(r) && (u = jd[r](f))),
        u
    );
}
var bw = (n) => {
        let { isRunning: r, preventExitTransition: i, toastRef: o, eventHandlers: u, playToast: f } = fw(n),
            {
                closeButton: d,
                children: y,
                autoClose: p,
                onClick: m,
                type: _,
                hideProgressBar: g,
                closeToast: T,
                transition: O,
                position: k,
                className: Y,
                style: R,
                progressClassName: q,
                updateId: w,
                role: x,
                progress: C,
                rtl: D,
                toastId: G,
                deleteToast: U,
                isIn: Z,
                isLoading: ut,
                closeOnClick: I,
                theme: $,
                ariaLabel: rt,
            } = n,
            at = Sa(
                "Toastify__toast",
                `Toastify__toast-theme--${$}`,
                `Toastify__toast--${_}`,
                { "Toastify__toast--rtl": D },
                { "Toastify__toast--close-on-click": I }
            ),
            mt = ir(Y) ? Y({ rtl: D, position: k, type: _, defaultClassName: at }) : Sa(at, Y),
            yt = _w(n),
            V = !!C || !p,
            st = { closeToast: T, type: _, theme: $ },
            ft = null;
        return (
            d === !1 || (ir(d) ? (ft = d(st)) : wt.isValidElement(d) ? (ft = wt.cloneElement(d, st)) : (ft = Z2(st))),
            $t.createElement(
                O,
                { isIn: Z, done: U, position: k, preventExitTransition: i, nodeRef: o, playToast: f },
                $t.createElement(
                    "div",
                    {
                        id: G,
                        tabIndex: 0,
                        onClick: m,
                        "data-in": Z,
                        className: mt,
                        ...u,
                        style: R,
                        ref: o,
                        ...(Z && { role: x, "aria-label": rt }),
                    },
                    yt != null &&
                        $t.createElement(
                            "div",
                            {
                                className: Sa("Toastify__toast-icon", {
                                    "Toastify--animate-icon Toastify__zoom-enter": !ut,
                                }),
                            },
                            yt
                        ),
                    s_(y, n, !r),
                    ft,
                    !n.customProgressBar &&
                        $t.createElement(W2, {
                            ...(w && !V ? { key: `p-${w}` } : {}),
                            rtl: D,
                            theme: $,
                            delay: p,
                            isRunning: r,
                            isIn: Z,
                            closeToast: T,
                            hide: g,
                            type: _,
                            className: q,
                            controlledProgress: V,
                            progress: C || 0,
                        })
                )
            )
        );
    },
    Sw = (n, r = !1) => ({
        enter: `Toastify--animate Toastify__${n}-enter`,
        exit: `Toastify--animate Toastify__${n}-exit`,
        appendPosition: r,
    }),
    Ew = K2(Sw("bounce", !0)),
    Tw = {
        position: "top-right",
        transition: Ew,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
        "aria-label": "Notifications Alt+T",
        hotKeys: (n) => n.altKey && n.code === "KeyT",
    };
function X4(n) {
    let r = { ...Tw, ...n },
        i = n.stacked,
        [o, u] = wt.useState(!0),
        f = wt.useRef(null),
        { getToastToRender: d, isToastActive: y, count: p } = cw(r),
        { className: m, style: _, rtl: g, containerId: T, hotKeys: O } = r;
    function k(R) {
        let q = Sa("Toastify__toast-container", `Toastify__toast-container--${R}`, {
            "Toastify__toast-container--rtl": g,
        });
        return ir(m) ? m({ position: R, rtl: g, defaultClassName: q }) : Sa(q, Ld(m));
    }
    function Y() {
        i && (u(!0), Vt.play());
    }
    return (
        dw(() => {
            var R;
            if (i) {
                let q = f.current.querySelectorAll('[data-in="true"]'),
                    w = 12,
                    x = (R = r.position) == null ? void 0 : R.includes("top"),
                    C = 0,
                    D = 0;
                Array.from(q)
                    .reverse()
                    .forEach((G, U) => {
                        let Z = G;
                        Z.classList.add("Toastify__toast--stacked"),
                            U > 0 && (Z.dataset.collapsed = `${o}`),
                            Z.dataset.pos || (Z.dataset.pos = x ? "top" : "bot");
                        let ut = C * (o ? 0.2 : 1) + (o ? 0 : w * U);
                        Z.style.setProperty("--y", `${x ? ut : ut * -1}px`),
                            Z.style.setProperty("--g", `${w}`),
                            Z.style.setProperty("--s", `${1 - (o ? D : 0)}`),
                            (C += Z.offsetHeight),
                            (D += 0.025);
                    });
            }
        }, [o, p, i]),
        wt.useEffect(() => {
            function R(q) {
                var w;
                let x = f.current;
                O(q) && ((w = x.querySelector('[tabIndex="0"]')) == null || w.focus(), u(!1), Vt.pause()),
                    q.key === "Escape" &&
                        (document.activeElement === x || (x != null && x.contains(document.activeElement))) &&
                        (u(!0), Vt.play());
            }
            return (
                document.addEventListener("keydown", R),
                () => {
                    document.removeEventListener("keydown", R);
                }
            );
        }, [O]),
        $t.createElement(
            "section",
            {
                ref: f,
                className: "Toastify",
                id: T,
                onMouseEnter: () => {
                    i && (u(!1), Vt.pause());
                },
                onMouseLeave: Y,
                "aria-live": "polite",
                "aria-atomic": "false",
                "aria-relevant": "additions text",
                "aria-label": r["aria-label"],
            },
            d((R, q) => {
                let w = q.length ? { ..._ } : { ..._, pointerEvents: "none" };
                return $t.createElement(
                    "div",
                    { tabIndex: -1, className: k(R), "data-stacked": i, style: w, key: `c-${R}` },
                    q.map(({ content: x, props: C }) =>
                        $t.createElement(
                            bw,
                            { ...C, stacked: i, collapseAll: Y, isIn: y(C.toastId, C.containerId), key: `t-${C.key}` },
                            x
                        )
                    )
                );
            })
        )
    );
}
const xw = ({ title: n, body: r }) =>
        Lt.jsxs("div", {
            className: "toast__container",
            children: [
                Lt.jsx("h2", { className: "toast__header", children: n }),
                Lt.jsx("p", { className: "toast__message", children: r }),
            ],
        }),
    ww = (n, r, i = 6e3) => {
        Vt(Lt.jsx(xw, { title: n, body: r }), {
            position: "top-center",
            autoClose: i,
            className: "toast__base",
            progressClassName: "toast__progress",
        });
    },
    Ow = (n, r = 8e3) => {
        Vt(n, { position: "top-center", autoClose: r, className: "toast__base", progressClassName: "toast__progress" });
    },
    Nu = ({ letter: n, count: r }) =>
        Lt.jsxs("div", {
            className:
                "relative w-[36px] h-[36px] flex items-center justify-center rounded-[5px] bg-[#f6f7f8] dark:bg-[#272729] border border-[#d3d6da] dark:border-[#3a3a3c] text-[14px] font-bold uppercase text-[#121213] dark:text-[#d7dadc]",
            children: [
                n,
                r !== void 0 &&
                    Lt.jsx("span", {
                        className: "absolute bottom-[2px] left-[3px] text-[8px] font-semibold leading-none",
                        style: { color: "var(--star-filled)" },
                        children: r,
                    }),
            ],
        }),
    Dw = () =>
        Lt.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
                Lt.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                        Lt.jsx("div", {
                            className: "w-[28px] h-[28px] flex items-center justify-center rounded-full flex-shrink-0",
                            style: { backgroundColor: "color-mix(in srgb, var(--star-filled) 15%, transparent)" },
                            children: Lt.jsxs("svg", {
                                width: 14,
                                height: 14,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "var(--star-filled)",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    Lt.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                                    Lt.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
                                ],
                            }),
                        }),
                        Lt.jsx("h2", {
                            className: "text-[14px] font-bold text-[#121213] dark:text-[#d7dadc] m-0",
                            children: "Letter Counts Unlocked!",
                        }),
                    ],
                }),
                Lt.jsxs("p", {
                    className: "text-[12px] text-[#555759] dark:text-[#a0a3a6] m-0 leading-relaxed",
                    children: [
                        "Each tile now shows how many remaining words ",
                        Lt.jsx("strong", { children: "start" }),
                        " with that letter.",
                    ],
                }),
                Lt.jsxs("div", {
                    className: "flex items-center gap-[4px] justify-center py-1",
                    children: [
                        Lt.jsx(Nu, { letter: "S", count: 3 }),
                        Lt.jsx(Nu, { letter: "H" }),
                        Lt.jsx(Nu, { letter: "E", count: 1 }),
                        Lt.jsx(Nu, { letter: "D", count: 2 }),
                    ],
                }),
                Lt.jsx("p", {
                    className: "text-[11px] text-[#787c7e] dark:text-[#818384] m-0 text-center",
                    children: "Look for the number in the bottom-left corner",
                }),
            ],
        });
var Wu = { exports: {} },
    Aw = Wu.exports,
    mv;
function Mw() {
    return (
        mv ||
            ((mv = 1),
            (function (n, r) {
                (function (i, o) {
                    n.exports = o(Xr());
                })(Aw, function (i) {
                    return i.enc.Utf8;
                });
            })(Wu)),
        Wu.exports
    );
}
var Cw = Mw();
const Rw = Ko(Cw),
    Nw = {
        isNewPlayer: !0,
        userId: E2(),
        archive: [],
        messageBubble: null,
        currentGameIdx: 0,
        currentStreak: 0,
        bestStreak: 0,
        currentStreak3x3: 0,
        bestStreak3x3: 0,
        puzzlesLoading: !1,
        isReviewAsked: !1,
        drawTrack: [],
        correctTiles: [],
        isSubmiting: !1,
        groupBy: "length",
        isTutorialCompleted: !1,
        todaysPuzzleMissing: !1,
    },
    zw = (n) => (n === 4 ? `Good! +${n}` : n > 4 && n < 7 ? `Great! +${n}` : n >= 7 ? `Amazing! +${n}` : `Good! +${n}`),
    Q4 = wi("game/solveOne", async (n, { getState: r, dispatch: i, fulfillWithValue: o, rejectWithValue: u }) => {
        try {
            i(_h(!1));
            const f = r(),
                d = f.options.cellMode3x3 ?? !1,
                y = f.game.currentGameIdx,
                p = f.game.archive[y],
                m = p.words,
                _ = p.foundWords,
                g = m.slice().filter((T) => !_.includes(T));
            if (g.length > 0) {
                const T = g[Math.floor(Math.random() * g.length)];
                i(vh({ word: T, is3x3: d }));
            }
            if (g.length - 1 === 0) {
                const T = d ? f.game.currentStreak3x3 : f.game.currentStreak,
                    O = d ? f.game.bestStreak3x3 : f.game.bestStreak;
                i(Eh({ date: yh(), isMini: d })),
                    i(bh({ value: Math.max(T + 1, O), isMini: d })),
                    i(Sh({ value: T + 1, isMini: d })),
                    setTimeout(() => i(ph("game-end")), 3e3);
            }
            return o("success");
        } catch (f) {
            return u(f.message);
        }
    }),
    V4 = wi("game/justWin", async (n, { getState: r, dispatch: i, fulfillWithValue: o, rejectWithValue: u }) => {
        try {
            i(_h(!1));
            const f = r(),
                d = f.options.cellMode3x3 ?? !1,
                y = f.game.currentGameIdx,
                p = f.game.archive[y],
                m = p.words,
                _ = p.foundWords;
            m.slice()
                .filter((k) => !_.includes(k))
                .forEach((k) => {
                    i(vh({ word: k, is3x3: d }));
                });
            const T = d ? f.game.currentStreak3x3 : f.game.currentStreak,
                O = d ? f.game.bestStreak3x3 : f.game.bestStreak;
            return (
                i(Eh({ date: yh(), isMini: d })),
                i(bh({ value: Math.max(T + 1, O), isMini: d })),
                i(Sh({ value: T + 1, isMini: d })),
                setTimeout(() => i(ph("game-end")), 3e3),
                o("success")
            );
        } catch (f) {
            return u(f.message);
        }
    }),
    fd = wi("game/submit", async (n, { getState: r, dispatch: i, fulfillWithValue: o, rejectWithValue: u }) => {
        try {
            const f = r(),
                d = f.options.cellMode3x3 ?? !1,
                y = f.game.drawTrack,
                p = y.reduce((Z, ut) => Z + ut.label, ""),
                m = f.options.disableSound,
                _ = f.options.disableAnimation,
                g = f.game.currentGameIdx,
                T = f.game.archive[g],
                O = T.letterStartTriggered,
                k = T.letterTotalTriggered,
                Y = T.words,
                R = T.foundWords,
                q = T.bonusWords,
                w = T.foundBonusWords,
                x = T.x5,
                C = Y.includes(p),
                D = q.includes(p),
                G = x === p;
            let U = null;
            if (
                (!C && !D && (U = { type: "no_word", message: "Word not found" }),
                p.length < (d ? 3 : 4) && (U = { type: "too_short", message: "Too short" }),
                (R.includes(p) || w.includes(p)) && (U = { type: "found", message: "Already found" }),
                !U)
            ) {
                if (C) {
                    const Z = R.length + 1 === Y.length;
                    if (Z) {
                        const I = d ? f.game.currentStreak3x3 : f.game.currentStreak,
                            $ = d ? f.game.bestStreak3x3 : f.game.bestStreak;
                        i(Eh({ date: yh(), isMini: d })),
                            i(bh({ value: Math.max(I + 1, $), isMini: d })),
                            i(Sh({ value: I + 1, isMini: d })),
                            setTimeout(() => i(ph("game-end")), 3e3);
                    }
                    const ut = document.querySelector("html");
                    if (
                        (ut?.style.setProperty("--line-current", "var(--line-correct)"),
                        ut?.style.setProperty("--letter-current", "var(--letter-correct)"),
                        ut?.style.setProperty("--letter-label-current", "var(--letter-label-bright)"),
                        ut?.style.setProperty("--letter-border-current", "var(--letter-correct-border)"),
                        m || (Z ? Lu.soundWin() : Lu.soundCorrect()),
                        _ || i(yv(y.map((I, $) => ({ x: I.pX, y: I.pY, idx: $ })))),
                        await n.good(),
                        i(vh({ word: p, is3x3: d })),
                        i(hd({ type: "good", message: zw(p.length) })),
                        !O)
                    ) {
                        const I = Y.length,
                            $ = R.length;
                        Math.floor(($ / I) * 100) > 40 && (Ow(wt.createElement(Dw)), i(Lw()));
                    }
                }
                if (D) {
                    G && (ww("Found word of the day", "You have found bonus word of the day"), i(Bw(2)));
                    const Z = document.querySelector("html");
                    Z?.style.setProperty("--line-current", "var(--line-bonus)"),
                        Z?.style.setProperty("--letter-current", "var(--letter-bonus)"),
                        Z?.style.setProperty("--letter-label-current", "var(--letter-label-bright)"),
                        Z?.style.setProperty("--letter-border-current", "var(--letter-bonus-border)"),
                        m || Lu.soundBonus(),
                        _ || i(yv(y.map((ut, I) => ({ x: ut.pX, y: ut.pY, idx: I })))),
                        await n.good(),
                        i(Uw({ word: p, is3x3: d })),
                        i(hd({ type: "bonus", message: "Bonus word" }));
                }
            }
            if (U) {
                m || Lu.soundFail();
                const Z = document.querySelector("html");
                Z?.style.setProperty("--line-current", "var(--line-wrong)"),
                    Z?.style.setProperty("--letter-current", "var(--letter-wrong)"),
                    Z?.style.setProperty("--letter-border-current", "var(--letter-wrong-border)"),
                    await n.bad(),
                    i(hd({ type: "bad", message: U.message }));
            }
            if (_)
                setTimeout(() => {
                    const Z = document.querySelector("html");
                    Z?.style.setProperty("--line-current", "var(--line-selected)"),
                        Z?.style.setProperty("--letter-current", "var(--letter-selected)"),
                        Z?.style.setProperty("--letter-label-current", "var(--letter-label-dark)"),
                        Z?.style.setProperty("--letter-border-current", "var(--letter-selected-border)"),
                        i(pv());
                }, 350);
            else {
                const Z = document.querySelector("html");
                Z?.style.setProperty("--line-current", "var(--line-selected)"),
                    Z?.style.setProperty("--letter-current", "var(--letter-selected)"),
                    Z?.style.setProperty("--letter-label-current", "var(--letter-label-dark)"),
                    Z?.style.setProperty("--letter-border-current", "var(--letter-selected-border)"),
                    i(pv());
            }
            return (
                setTimeout(() => {
                    i(Hw());
                }, 900),
                i(_h(!1)),
                o("success")
            );
        } catch (f) {
            return u(f.message);
        }
    }),
    P4 = wi("game/report", async (n, { getState: r, fulfillWithValue: i, rejectWithValue: o }) => {
        try {
            const u = r().game.archive,
                f = r().game.userId,
                d = gh() + "v1/report/send-report";
            if (
                !(
                    await fetch(d, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ userId: f, report: r_.encrypt(JSON.stringify(u), i_()).toString() }),
                    })
                ).ok
            )
                throw new Error("Error while sending report");
            return i("success");
        } catch (u) {
            return o(u.message);
        }
    }),
    K4 = wi("game/feedback", async (n, { getState: r, fulfillWithValue: i, rejectWithValue: o }) => {
        try {
            const u = r().game.userId,
                f = gh() + "v1/mail/send-feedback";
            if (
                !(
                    await fetch(f, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ userId: u, message: n }),
                    })
                ).ok
            )
                throw new Error("Error while sending report");
            return i("success");
        } catch (u) {
            return o(u.message);
        }
    }),

    // hERE A:SLDKJ
    dd = wi("game/loadPuzzles", async (n, { rejectWithValue: r }) => {
        let i = null;
        try {
            const o = gh() + `v1/puzzle/daily?offset=${ml(new Date())}&cell=${n ? "3" : "4"}`,
                u = await fetch(o, { method: "GET", headers: { "Content-Type": "application/json" } }),
                f = await u.json();
            if (!u.ok) throw new Error("Error while loading puzzles from API");
            const y = r_.decrypt(f.puzzles, i_()).toString(Rw);
            i = JSON.parse(y);
        } catch (o) {
            return r({ message: o.message, is3x3: n });
        }
        return { puzzles: i, is3x3: n };
    }),
    h_ = lh({
        name: "game",
        initialState: Nw,
        reducers: {
            toggleReviewAsked: (n) => {
                n.isReviewAsked = !0;
            },
            setIsNewPlayer: (n, r) => {
                n.isNewPlayer = r.payload;
            },
            setBestStreak: (n, r) => {
                r.payload.isMini ? (n.bestStreak3x3 = r.payload.value) : (n.bestStreak = r.payload.value);
            },
            setCurrentStreak: (n, r) => {
                r.payload.isMini ? (n.currentStreak3x3 = r.payload.value) : (n.currentStreak = r.payload.value);
            },
            updateLastDailyPlay: (n, r) => {
                r.payload.isMini ? (n.lastDailyWin3x3 = r.payload.date) : (n.lastDailyWin = r.payload.date);
            },
            setCurrentGame: (n, r) => {
                n.archive.length >= r.payload && (n.currentGameIdx = r.payload);
            },
            setBubble: (n, r) => {
                n.messageBubble = r.payload;
            },
            pushDrawTrack: (n, r) => {
                n.drawTrack = [...n.drawTrack, r.payload];
            },
            popDrawTrack: (n) => {
                n.drawTrack = n.drawTrack.slice(0, -1);
            },
            resetDrawTrack: (n) => {
                n.drawTrack = [];
            },
            setCorrectTiles: (n, r) => {
                n.correctTiles = r.payload;
            },
            clearCorrectTiles: (n) => {
                n.correctTiles = [];
            },
            addToFound: (n, r) => {
                const i = n.archive[n.currentGameIdx];
                i.foundWords = [...i.foundWords, r.payload.word];
            },
            addToBonusFound: (n, r) => {
                const i = n.archive[n.currentGameIdx];
                i.foundBonusWords = [...i.foundBonusWords, r.payload.word];
            },
            triggerShowTotal: (n) => {
                n.archive[n.currentGameIdx].letterTotalTriggered = !0;
            },
            triggerShowStart: (n) => {
                n.archive[n.currentGameIdx].letterStartTriggered = !0;
            },
            consumeHint: (n) => {
                n.archive[n.currentGameIdx].hintsLeft = n.archive[n.currentGameIdx].hintsLeft - 1;
            },
            refillHintsLeft: (n, r) => {
                n.archive[n.currentGameIdx].hintsLeft = n.archive[n.currentGameIdx].hintsLeft + r.payload;
            },
            resetIsSubmitting: (n) => {
                n.isSubmiting = !1;
            },
            setGroupBy: (n, r) => {
                n.groupBy = r.payload;
            },
            triggerShare: (n) => {
                n.archive[n.currentGameIdx].shareUsed = !0;
            },
            completeTutorial: (n) => {
                (n.isTutorialCompleted = !0), (n.isNewPlayer = !1);
            },
            resetPuzzle: (n, r) => {
                r.payload;
                const i = n.archive[n.currentGameIdx];
                (i.foundBonusWords = []), (i.foundWords = []), (i.shareUsed = !1), (i.hintsLeft = 3);
            },
            resetStats: (n, r) => {
                const i = r.payload,
                    o = i ? 3 : 4;
                n.archive.forEach((u, f) => {
                    (u.gridSize ?? u.board.length) === o &&
                        f !== n.currentGameIdx &&
                        ((u.foundWords = []), (u.foundBonusWords = []), (u.totalWords = void 0));
                }),
                    i ? ((n.currentStreak3x3 = 0), (n.bestStreak3x3 = 0)) : ((n.currentStreak = 0), (n.bestStreak = 0));
            },
        },
        extraReducers: (n) => {
            n.addCase(dd.pending, (r) => {
                r.puzzlesLoading = !0;
            }),
                n.addCase(dd.rejected, (r, i) => {
                    r.puzzlesLoading = !1;
                    const u = i.payload?.is3x3 ?? !1,
                        f = ml(new Date()) + 1,
                        d = u ? 3 : 4,
                        y = r.archive
                            .filter((p) => p.idx === f && (p.board.length === d || p.gridSize === d))
                            .slice(-1)[0];
                    y
                        ? ((r.currentGameIdx = r.archive.indexOf(y)), (r.todaysPuzzleMissing = !1))
                        : (r.todaysPuzzleMissing = !0);
                }),
                n.addCase(dd.fulfilled, (r, i) => {
                    const { puzzles: o, is3x3: u } = i.payload,
                        f = r.archive.slice();
                    o.forEach((m) => {
                        const _ = m.board.join("-"),
                            g = m.board.map((w, x) => w.split("").map((C, D) => ({ x: D, y: x, label: C }))),
                            T = m.words,
                            O = m.optionalWords,
                            k = m.definitions || [],
                            Y = Array.isArray(m.x5) ? m.x5[0] : m.x5 || "",
                            R = g.length,
                            q =
                                f.find((w) => w.id === _) ||
                                f.find((w) => w.idx === m.id && (w.gridSize === R || w.board.length === R));
                        q
                            ? ((q.id = _),
                              (q.board = g),
                              (q.words = T),
                              (q.bonusWords = O),
                              (q.definitions = k),
                              (q.x5 = Y),
                              (q.idx = m.id),
                              (q.gridSize = R),
                              (q.totalWords = T.length))
                            : f.push({
                                  id: _,
                                  board: g,
                                  words: T,
                                  idx: m.id,
                                  bonusWords: O,
                                  definitions: k,
                                  x5: Y,
                                  foundBonusWords: [],
                                  foundWords: [],
                                  hintsLeft: 3,
                                  letterStartTriggered: !1,
                                  letterTotalTriggered: !1,
                                  shareUsed: !1,
                                  gridSize: R,
                                  totalWords: T.length,
                              });
                    }),
                        f.forEach((m) => {
                            m.totalWords == null && m.foundWords.length > 0 && (m.totalWords = m.foundWords.length);
                        }),
                        (r.archive = f),
                        (r.puzzlesLoading = !1);
                    const d = ml(new Date()) + 1,
                        y = u ? 3 : 4,
                        p = f.filter((m) => m.idx === d && (m.board.length === y || m.gridSize === y)).slice(-1)[0];
                    p
                        ? ((r.currentGameIdx = f.indexOf(p)), (r.todaysPuzzleMissing = !1))
                        : (r.todaysPuzzleMissing = !0);
                }),
                n.addCase(fd.pending, (r) => {
                    r.isSubmiting = !0;
                }),
                n.addCase(fd.rejected, (r) => {
                    r.isSubmiting = !1;
                }),
                n.addCase(fd.fulfilled, (r) => {
                    r.isSubmiting = !1;
                });
        },
    }),
    {
        resetPuzzle: Z4,
        completeTutorial: W4,
        triggerShare: F4,
        refillHintsLeft: Bw,
        setGroupBy: $4,
        resetIsSubmitting: J4,
        consumeHint: tC,
        addToBonusFound: Uw,
        triggerShowStart: Lw,
        triggerShowTotal: eC,
        addToFound: vh,
        pushDrawTrack: nC,
        popDrawTrack: rC,
        resetDrawTrack: pv,
        toggleReviewAsked: aC,
        setIsNewPlayer: _h,
        setBestStreak: bh,
        setCurrentStreak: Sh,
        updateLastDailyPlay: Eh,
        setCurrentGame: iC,
        setBubble: hd,
        setCorrectTiles: yv,
        clearCorrectTiles: Hw,
        resetStats: oC,
    } = h_.actions,
    kw = h_.reducer,
    sC = (n) => (n.game.archive.length <= n.game.currentGameIdx ? [] : n.game.archive[n.game.currentGameIdx].board),
    uC = (n) =>
        n.game.archive.length <= n.game.currentGameIdx ? [] : n.game.archive[n.game.currentGameIdx].foundWords,
    lC = (n) => (n.game.archive.length <= n.game.currentGameIdx ? [] : n.game.archive[n.game.currentGameIdx]?.words),
    cC = (n) =>
        n.game.archive.length <= n.game.currentGameIdx ? [] : n.game.archive[n.game.currentGameIdx].foundBonusWords,
    fC = (n) =>
        n.game.archive.length <= n.game.currentGameIdx ? [] : n.game.archive[n.game.currentGameIdx].bonusWords,
    dC = (n) => (n.game.archive.length <= n.game.currentGameIdx ? 0 : n.game.archive[n.game.currentGameIdx].idx),
    hC = (n) => {
        const r = ml(new Date());
        return Math.min(n.game.archive.length - 1, r);
    },
    mC = (n) => {
        if (n.game.archive.length <= n.game.currentGameIdx) return !1;
        const r = n.game.archive[n.game.currentGameIdx];
        return !r.words || r.words.length === 0 ? !1 : r.foundWords.length === r.words.length;
    },
    pC = (n) =>
        n.game.archive.length <= n.game.currentGameIdx
            ? !1
            : n.game.archive[n.game.currentGameIdx].letterTotalTriggered,
    yC = (n) =>
        n.game.archive.length <= n.game.currentGameIdx
            ? !1
            : n.game.archive[n.game.currentGameIdx].letterStartTriggered,
    gC = (n) => (n.game.archive.length <= n.game.currentGameIdx ? 0 : n.game.archive[n.game.currentGameIdx].hintsLeft),
    vC = (n) => (n.game.archive.length <= n.game.currentGameIdx ? "" : n.game.archive[n.game.currentGameIdx].x5),
    _C = (n) => (n.game.archive.length <= n.game.currentGameIdx ? !1 : n.game.archive[n.game.currentGameIdx].shareUsed),
    jw = w0({ options: nT, game: kw, navigation: y2 });
var Th = "persist:",
    xh = "persist/FLUSH",
    Cl = "persist/REHYDRATE",
    wh = "persist/PAUSE",
    Oh = "persist/PERSIST",
    Dh = "persist/PURGE",
    Ah = "persist/REGISTER",
    m_ = -1;
function Fu(n) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Fu = function (i) {
                  return typeof i;
              })
            : (Fu = function (i) {
                  return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype
                      ? "symbol"
                      : typeof i;
              }),
        Fu(n)
    );
}
function gv(n, r) {
    var i = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        r &&
            (o = o.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            i.push.apply(i, o);
    }
    return i;
}
function Yw(n) {
    for (var r = 1; r < arguments.length; r++) {
        var i = arguments[r] != null ? arguments[r] : {};
        r % 2
            ? gv(i, !0).forEach(function (o) {
                  qw(n, o, i[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
              : gv(i).forEach(function (o) {
                    Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(i, o));
                });
    }
    return n;
}
function qw(n, r, i) {
    return (
        r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
        n
    );
}
function Gw(n, r, i, o) {
    o.debug;
    var u = Yw({}, i);
    return (
        n &&
            Fu(n) === "object" &&
            Object.keys(n).forEach(function (f) {
                f !== "_persist" && r[f] === i[f] && (u[f] = n[f]);
            }),
        u
    );
}
function Iw(n) {
    var r = n.blacklist || null,
        i = n.whitelist || null,
        o = n.transforms || [],
        u = n.throttle || 0,
        f = "".concat(n.keyPrefix !== void 0 ? n.keyPrefix : Th).concat(n.key),
        d = n.storage,
        y;
    n.serialize === !1
        ? (y = function (D) {
              return D;
          })
        : typeof n.serialize == "function"
          ? (y = n.serialize)
          : (y = Xw);
    var p = n.writeFailHandler || null,
        m = {},
        _ = {},
        g = [],
        T = null,
        O = null,
        k = function (D) {
            Object.keys(D).forEach(function (G) {
                q(G) && m[G] !== D[G] && g.indexOf(G) === -1 && g.push(G);
            }),
                Object.keys(m).forEach(function (G) {
                    D[G] === void 0 && q(G) && g.indexOf(G) === -1 && m[G] !== void 0 && g.push(G);
                }),
                T === null && (T = setInterval(Y, u)),
                (m = D);
        };
    function Y() {
        if (g.length === 0) {
            T && clearInterval(T), (T = null);
            return;
        }
        var C = g.shift(),
            D = o.reduce(function (G, U) {
                return U.in(G, C, m);
            }, m[C]);
        if (D !== void 0)
            try {
                _[C] = y(D);
            } catch (G) {
                console.error("redux-persist/createPersistoid: error serializing state", G);
            }
        else delete _[C];
        g.length === 0 && R();
    }
    function R() {
        Object.keys(_).forEach(function (C) {
            m[C] === void 0 && delete _[C];
        }),
            (O = d.setItem(f, y(_)).catch(w));
    }
    function q(C) {
        return !((i && i.indexOf(C) === -1 && C !== "_persist") || (r && r.indexOf(C) !== -1));
    }
    function w(C) {
        p && p(C);
    }
    var x = function () {
        for (; g.length !== 0; ) Y();
        return O || Promise.resolve();
    };
    return { update: k, flush: x };
}
function Xw(n) {
    return JSON.stringify(n);
}
function Qw(n) {
    var r = n.transforms || [],
        i = "".concat(n.keyPrefix !== void 0 ? n.keyPrefix : Th).concat(n.key),
        o = n.storage;
    n.debug;
    var u;
    return (
        n.deserialize === !1
            ? (u = function (d) {
                  return d;
              })
            : typeof n.deserialize == "function"
              ? (u = n.deserialize)
              : (u = Vw),
        o.getItem(i).then(function (f) {
            if (f)
                try {
                    var d = {},
                        y = u(f);
                    return (
                        Object.keys(y).forEach(function (p) {
                            d[p] = r.reduceRight(function (m, _) {
                                return _.out(m, p, y);
                            }, u(y[p]));
                        }),
                        d
                    );
                } catch (p) {
                    throw p;
                }
            else return;
        })
    );
}
function Vw(n) {
    return JSON.parse(n);
}
function Pw(n) {
    var r = n.storage,
        i = "".concat(n.keyPrefix !== void 0 ? n.keyPrefix : Th).concat(n.key);
    return r.removeItem(i, Kw);
}
function Kw(n) {}
function vv(n, r) {
    var i = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        r &&
            (o = o.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            i.push.apply(i, o);
    }
    return i;
}
function $n(n) {
    for (var r = 1; r < arguments.length; r++) {
        var i = arguments[r] != null ? arguments[r] : {};
        r % 2
            ? vv(i, !0).forEach(function (o) {
                  Zw(n, o, i[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
              : vv(i).forEach(function (o) {
                    Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(i, o));
                });
    }
    return n;
}
function Zw(n, r, i) {
    return (
        r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
        n
    );
}
function Ww(n, r) {
    if (n == null) return {};
    var i = Fw(n, r),
        o,
        u;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(n);
        for (u = 0; u < f.length; u++)
            (o = f[u]), !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(n, o) && (i[o] = n[o]);
    }
    return i;
}
function Fw(n, r) {
    if (n == null) return {};
    var i = {},
        o = Object.keys(n),
        u,
        f;
    for (f = 0; f < o.length; f++) (u = o[f]), !(r.indexOf(u) >= 0) && (i[u] = n[u]);
    return i;
}
var $w = 5e3;
function Jw(n, r) {
    var i = n.version !== void 0 ? n.version : m_;
    n.debug;
    var o = n.stateReconciler === void 0 ? Gw : n.stateReconciler,
        u = n.getStoredState || Qw,
        f = n.timeout !== void 0 ? n.timeout : $w,
        d = null,
        y = !1,
        p = !0,
        m = function (g) {
            return g._persist.rehydrated && d && !p && d.update(g), g;
        };
    return function (_, g) {
        var T = _ || {},
            O = T._persist,
            k = Ww(T, ["_persist"]),
            Y = k;
        if (g.type === Oh) {
            var R = !1,
                q = function (Z, ut) {
                    R || (g.rehydrate(n.key, Z, ut), (R = !0));
                };
            if (
                (f &&
                    setTimeout(function () {
                        !R &&
                            q(
                                void 0,
                                new Error('redux-persist: persist timed out for persist key "'.concat(n.key, '"'))
                            );
                    }, f),
                (p = !1),
                d || (d = Iw(n)),
                O)
            )
                return $n({}, r(Y, g), { _persist: O });
            if (typeof g.rehydrate != "function" || typeof g.register != "function")
                throw new Error(
                    "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
                );
            return (
                g.register(n.key),
                u(n).then(
                    function (U) {
                        var Z =
                            n.migrate ||
                            function (ut, I) {
                                return Promise.resolve(ut);
                            };
                        Z(U, i).then(
                            function (ut) {
                                q(ut);
                            },
                            function (ut) {
                                q(void 0, ut);
                            }
                        );
                    },
                    function (U) {
                        q(void 0, U);
                    }
                ),
                $n({}, r(Y, g), { _persist: { version: i, rehydrated: !1 } })
            );
        } else {
            if (g.type === Dh) return (y = !0), g.result(Pw(n)), $n({}, r(Y, g), { _persist: O });
            if (g.type === xh) return g.result(d && d.flush()), $n({}, r(Y, g), { _persist: O });
            if (g.type === wh) p = !0;
            else if (g.type === Cl) {
                if (y) return $n({}, Y, { _persist: $n({}, O, { rehydrated: !0 }) });
                if (g.key === n.key) {
                    var w = r(Y, g),
                        x = g.payload,
                        C = o !== !1 && x !== void 0 ? o(x, _, w, n) : w,
                        D = $n({}, C, { _persist: $n({}, O, { rehydrated: !0 }) });
                    return m(D);
                }
            }
        }
        if (!O) return r(_, g);
        var G = r(Y, g);
        return G === Y ? _ : m($n({}, G, { _persist: O }));
    };
}
function Yo(n) {
    return (
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (Yo = function (i) {
                  return typeof i;
              })
            : (Yo = function (i) {
                  return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype
                      ? "symbol"
                      : typeof i;
              }),
        Yo(n)
    );
}
function _v(n, r) {
    var i = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        r &&
            (o = o.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            i.push.apply(i, o);
    }
    return i;
}
function bv(n) {
    for (var r = 1; r < arguments.length; r++) {
        var i = arguments[r] != null ? arguments[r] : {};
        r % 2
            ? _v(i, !0).forEach(function (o) {
                  tO(n, o, i[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
              : _v(i).forEach(function (o) {
                    Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(i, o));
                });
    }
    return n;
}
function tO(n, r, i) {
    return (
        r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
        n
    );
}
function eO(n, r, i, o) {
    o.debug;
    var u = bv({}, i);
    return (
        n &&
            Yo(n) === "object" &&
            Object.keys(n).forEach(function (f) {
                if (f !== "_persist" && r[f] === i[f]) {
                    if (nO(i[f])) {
                        u[f] = bv({}, u[f], {}, n[f]);
                        return;
                    }
                    u[f] = n[f];
                }
            }),
        u
    );
}
function nO(n) {
    return n !== null && !Array.isArray(n) && Yo(n) === "object";
}
function Sv(n) {
    return iO(n) || aO(n) || rO();
}
function rO() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function aO(n) {
    if (Symbol.iterator in Object(n) || Object.prototype.toString.call(n) === "[object Arguments]")
        return Array.from(n);
}
function iO(n) {
    if (Array.isArray(n)) {
        for (var r = 0, i = new Array(n.length); r < n.length; r++) i[r] = n[r];
        return i;
    }
}
function Ev(n, r) {
    var i = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(n);
        r &&
            (o = o.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            i.push.apply(i, o);
    }
    return i;
}
function Yd(n) {
    for (var r = 1; r < arguments.length; r++) {
        var i = arguments[r] != null ? arguments[r] : {};
        r % 2
            ? Ev(i, !0).forEach(function (o) {
                  oO(n, o, i[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
              : Ev(i).forEach(function (o) {
                    Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(i, o));
                });
    }
    return n;
}
function oO(n, r, i) {
    return (
        r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
        n
    );
}
var p_ = { registry: [], bootstrapped: !1 },
    sO = function () {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p_,
            i = arguments.length > 1 ? arguments[1] : void 0;
        switch (i.type) {
            case Ah:
                return Yd({}, r, { registry: [].concat(Sv(r.registry), [i.key]) });
            case Cl:
                var o = r.registry.indexOf(i.key),
                    u = Sv(r.registry);
                return u.splice(o, 1), Yd({}, r, { registry: u, bootstrapped: u.length === 0 });
            default:
                return r;
        }
    };
function uO(n, r, i) {
    var o = ih(sO, p_, void 0),
        u = function (p) {
            o.dispatch({ type: Ah, key: p });
        },
        f = function (p, m, _) {
            var g = { type: Cl, payload: m, err: _, key: p };
            n.dispatch(g), o.dispatch(g);
        },
        d = Yd({}, o, {
            purge: function () {
                var p = [];
                return (
                    n.dispatch({
                        type: Dh,
                        result: function (_) {
                            p.push(_);
                        },
                    }),
                    Promise.all(p)
                );
            },
            flush: function () {
                var p = [];
                return (
                    n.dispatch({
                        type: xh,
                        result: function (_) {
                            p.push(_);
                        },
                    }),
                    Promise.all(p)
                );
            },
            pause: function () {
                n.dispatch({ type: wh });
            },
            persist: function () {
                n.dispatch({ type: Oh, register: u, rehydrate: f });
            },
        });
    return d.persist(), d;
}
function lO(n, r) {
    return function (i, o) {
        if (!i) return Promise.resolve(void 0);
        var u = i._persist && i._persist.version !== void 0 ? i._persist.version : m_;
        if (u === o || u > o) return Promise.resolve(i);
        var f = Object.keys(n)
            .map(function (y) {
                return parseInt(y);
            })
            .filter(function (y) {
                return o >= y && y > u;
            })
            .sort(function (y, p) {
                return y - p;
            });
        try {
            var d = f.reduce(function (y, p) {
                return n[p](y);
            }, i);
            return Promise.resolve(d);
        } catch (y) {
            return Promise.reject(y);
        }
    };
}
function cO(n, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = i.whitelist || null,
        u = i.blacklist || null;
    function f(d) {
        return !!((o && o.indexOf(d) === -1) || (u && u.indexOf(d) !== -1));
    }
    return {
        in: function (y, p, m) {
            return !f(p) && n ? n(y, p, m) : y;
        },
        out: function (y, p, m) {
            return !f(p) && r ? r(y, p, m) : y;
        },
    };
}
var md = { exports: {} };
var Tv;
function fO() {
    return (
        Tv ||
            ((Tv = 1),
            (function (n, r) {
                (function (i) {
                    n.exports = i();
                })(function () {
                    return (function i(o, u, f) {
                        function d(m, _) {
                            if (!u[m]) {
                                if (!o[m]) {
                                    var g = typeof Ho == "function" && Ho;
                                    if (!_ && g) return g(m, !0);
                                    if (y) return y(m, !0);
                                    var T = new Error("Cannot find module '" + m + "'");
                                    throw ((T.code = "MODULE_NOT_FOUND"), T);
                                }
                                var O = (u[m] = { exports: {} });
                                o[m][0].call(
                                    O.exports,
                                    function (k) {
                                        var Y = o[m][1][k];
                                        return d(Y || k);
                                    },
                                    O,
                                    O.exports,
                                    i,
                                    o,
                                    u,
                                    f
                                );
                            }
                            return u[m].exports;
                        }
                        for (var y = typeof Ho == "function" && Ho, p = 0; p < f.length; p++) d(f[p]);
                        return d;
                    })(
                        {
                            1: [
                                function (i, o, u) {
                                    (function (f) {
                                        var d = f.MutationObserver || f.WebKitMutationObserver,
                                            y;
                                        if (d) {
                                            var p = 0,
                                                m = new d(k),
                                                _ = f.document.createTextNode("");
                                            m.observe(_, { characterData: !0 }),
                                                (y = function () {
                                                    _.data = p = ++p % 2;
                                                });
                                        } else if (!f.setImmediate && typeof f.MessageChannel < "u") {
                                            var g = new f.MessageChannel();
                                            (g.port1.onmessage = k),
                                                (y = function () {
                                                    g.port2.postMessage(0);
                                                });
                                        } else
                                            "document" in f &&
                                            "onreadystatechange" in f.document.createElement("script")
                                                ? (y = function () {
                                                      var R = f.document.createElement("script");
                                                      (R.onreadystatechange = function () {
                                                          k(),
                                                              (R.onreadystatechange = null),
                                                              R.parentNode.removeChild(R),
                                                              (R = null);
                                                      }),
                                                          f.document.documentElement.appendChild(R);
                                                  })
                                                : (y = function () {
                                                      setTimeout(k, 0);
                                                  });
                                        var T,
                                            O = [];
                                        function k() {
                                            T = !0;
                                            for (var R, q, w = O.length; w; ) {
                                                for (q = O, O = [], R = -1; ++R < w; ) q[R]();
                                                w = O.length;
                                            }
                                            T = !1;
                                        }
                                        o.exports = Y;
                                        function Y(R) {
                                            O.push(R) === 1 && !T && y();
                                        }
                                    }).call(
                                        this,
                                        typeof ba < "u"
                                            ? ba
                                            : typeof self < "u"
                                              ? self
                                              : typeof window < "u"
                                                ? window
                                                : {}
                                    );
                                },
                                {},
                            ],
                            2: [
                                function (i, o, u) {
                                    var f = i(1);
                                    function d() {}
                                    var y = {},
                                        p = ["REJECTED"],
                                        m = ["FULFILLED"],
                                        _ = ["PENDING"];
                                    o.exports = g;
                                    function g(D) {
                                        if (typeof D != "function") throw new TypeError("resolver must be a function");
                                        (this.state = _),
                                            (this.queue = []),
                                            (this.outcome = void 0),
                                            D !== d && Y(this, D);
                                    }
                                    (g.prototype.catch = function (D) {
                                        return this.then(null, D);
                                    }),
                                        (g.prototype.then = function (D, G) {
                                            if (
                                                (typeof D != "function" && this.state === m) ||
                                                (typeof G != "function" && this.state === p)
                                            )
                                                return this;
                                            var U = new this.constructor(d);
                                            if (this.state !== _) {
                                                var Z = this.state === m ? D : G;
                                                O(U, Z, this.outcome);
                                            } else this.queue.push(new T(U, D, G));
                                            return U;
                                        });
                                    function T(D, G, U) {
                                        (this.promise = D),
                                            typeof G == "function" &&
                                                ((this.onFulfilled = G),
                                                (this.callFulfilled = this.otherCallFulfilled)),
                                            typeof U == "function" &&
                                                ((this.onRejected = U), (this.callRejected = this.otherCallRejected));
                                    }
                                    (T.prototype.callFulfilled = function (D) {
                                        y.resolve(this.promise, D);
                                    }),
                                        (T.prototype.otherCallFulfilled = function (D) {
                                            O(this.promise, this.onFulfilled, D);
                                        }),
                                        (T.prototype.callRejected = function (D) {
                                            y.reject(this.promise, D);
                                        }),
                                        (T.prototype.otherCallRejected = function (D) {
                                            O(this.promise, this.onRejected, D);
                                        });
                                    function O(D, G, U) {
                                        f(function () {
                                            var Z;
                                            try {
                                                Z = G(U);
                                            } catch (ut) {
                                                return y.reject(D, ut);
                                            }
                                            Z === D
                                                ? y.reject(D, new TypeError("Cannot resolve promise with itself"))
                                                : y.resolve(D, Z);
                                        });
                                    }
                                    (y.resolve = function (D, G) {
                                        var U = R(k, G);
                                        if (U.status === "error") return y.reject(D, U.value);
                                        var Z = U.value;
                                        if (Z) Y(D, Z);
                                        else {
                                            (D.state = m), (D.outcome = G);
                                            for (var ut = -1, I = D.queue.length; ++ut < I; )
                                                D.queue[ut].callFulfilled(G);
                                        }
                                        return D;
                                    }),
                                        (y.reject = function (D, G) {
                                            (D.state = p), (D.outcome = G);
                                            for (var U = -1, Z = D.queue.length; ++U < Z; ) D.queue[U].callRejected(G);
                                            return D;
                                        });
                                    function k(D) {
                                        var G = D && D.then;
                                        if (
                                            D &&
                                            (typeof D == "object" || typeof D == "function") &&
                                            typeof G == "function"
                                        )
                                            return function () {
                                                G.apply(D, arguments);
                                            };
                                    }
                                    function Y(D, G) {
                                        var U = !1;
                                        function Z(rt) {
                                            U || ((U = !0), y.reject(D, rt));
                                        }
                                        function ut(rt) {
                                            U || ((U = !0), y.resolve(D, rt));
                                        }
                                        function I() {
                                            G(ut, Z);
                                        }
                                        var $ = R(I);
                                        $.status === "error" && Z($.value);
                                    }
                                    function R(D, G) {
                                        var U = {};
                                        try {
                                            (U.value = D(G)), (U.status = "success");
                                        } catch (Z) {
                                            (U.status = "error"), (U.value = Z);
                                        }
                                        return U;
                                    }
                                    g.resolve = q;
                                    function q(D) {
                                        return D instanceof this ? D : y.resolve(new this(d), D);
                                    }
                                    g.reject = w;
                                    function w(D) {
                                        var G = new this(d);
                                        return y.reject(G, D);
                                    }
                                    g.all = x;
                                    function x(D) {
                                        var G = this;
                                        if (Object.prototype.toString.call(D) !== "[object Array]")
                                            return this.reject(new TypeError("must be an array"));
                                        var U = D.length,
                                            Z = !1;
                                        if (!U) return this.resolve([]);
                                        for (var ut = new Array(U), I = 0, $ = -1, rt = new this(d); ++$ < U; )
                                            at(D[$], $);
                                        return rt;
                                        function at(mt, yt) {
                                            G.resolve(mt).then(V, function (st) {
                                                Z || ((Z = !0), y.reject(rt, st));
                                            });
                                            function V(st) {
                                                (ut[yt] = st), ++I === U && !Z && ((Z = !0), y.resolve(rt, ut));
                                            }
                                        }
                                    }
                                    g.race = C;
                                    function C(D) {
                                        var G = this;
                                        if (Object.prototype.toString.call(D) !== "[object Array]")
                                            return this.reject(new TypeError("must be an array"));
                                        var U = D.length,
                                            Z = !1;
                                        if (!U) return this.resolve([]);
                                        for (var ut = -1, I = new this(d); ++ut < U; ) $(D[ut]);
                                        return I;
                                        function $(rt) {
                                            G.resolve(rt).then(
                                                function (at) {
                                                    Z || ((Z = !0), y.resolve(I, at));
                                                },
                                                function (at) {
                                                    Z || ((Z = !0), y.reject(I, at));
                                                }
                                            );
                                        }
                                    }
                                },
                                { 1: 1 },
                            ],
                            3: [
                                function (i, o, u) {
                                    (function (f) {
                                        typeof f.Promise != "function" && (f.Promise = i(2));
                                    }).call(
                                        this,
                                        typeof ba < "u"
                                            ? ba
                                            : typeof self < "u"
                                              ? self
                                              : typeof window < "u"
                                                ? window
                                                : {}
                                    );
                                },
                                { 2: 2 },
                            ],
                            4: [
                                function (i, o, u) {
                                    var f =
                                        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                            ? function (b) {
                                                  return typeof b;
                                              }
                                            : function (b) {
                                                  return b &&
                                                      typeof Symbol == "function" &&
                                                      b.constructor === Symbol &&
                                                      b !== Symbol.prototype
                                                      ? "symbol"
                                                      : typeof b;
                                              };
                                    function d(b, M) {
                                        if (!(b instanceof M)) throw new TypeError("Cannot call a class as a function");
                                    }
                                    function y() {
                                        try {
                                            if (typeof indexedDB < "u") return indexedDB;
                                            if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                                            if (typeof mozIndexedDB < "u") return mozIndexedDB;
                                            if (typeof OIndexedDB < "u") return OIndexedDB;
                                            if (typeof msIndexedDB < "u") return msIndexedDB;
                                        } catch {
                                            return;
                                        }
                                    }
                                    var p = y();
                                    function m() {
                                        try {
                                            if (!p || !p.open) return !1;
                                            var b =
                                                    typeof openDatabase < "u" &&
                                                    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                                                    !/Chrome/.test(navigator.userAgent) &&
                                                    !/BlackBerry/.test(navigator.platform),
                                                M =
                                                    typeof fetch == "function" &&
                                                    fetch.toString().indexOf("[native code") !== -1;
                                            return (!b || M) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
                                        } catch {
                                            return !1;
                                        }
                                    }
                                    function _(b, M) {
                                        (b = b || []), (M = M || {});
                                        try {
                                            return new Blob(b, M);
                                        } catch (B) {
                                            if (B.name !== "TypeError") throw B;
                                            for (
                                                var S =
                                                        typeof BlobBuilder < "u"
                                                            ? BlobBuilder
                                                            : typeof MSBlobBuilder < "u"
                                                              ? MSBlobBuilder
                                                              : typeof MozBlobBuilder < "u"
                                                                ? MozBlobBuilder
                                                                : WebKitBlobBuilder,
                                                    L = new S(),
                                                    j = 0;
                                                j < b.length;
                                                j += 1
                                            )
                                                L.append(b[j]);
                                            return L.getBlob(M.type);
                                        }
                                    }
                                    typeof Promise > "u" && i(3);
                                    var g = Promise;
                                    function T(b, M) {
                                        M &&
                                            b.then(
                                                function (S) {
                                                    M(null, S);
                                                },
                                                function (S) {
                                                    M(S);
                                                }
                                            );
                                    }
                                    function O(b, M, S) {
                                        typeof M == "function" && b.then(M), typeof S == "function" && b.catch(S);
                                    }
                                    function k(b) {
                                        return (
                                            typeof b != "string" &&
                                                (console.warn(b + " used as a key, but it is not a string."),
                                                (b = String(b))),
                                            b
                                        );
                                    }
                                    function Y() {
                                        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
                                            return arguments[arguments.length - 1];
                                    }
                                    var R = "local-forage-detect-blob-support",
                                        q = void 0,
                                        w = {},
                                        x = Object.prototype.toString,
                                        C = "readonly",
                                        D = "readwrite";
                                    function G(b) {
                                        for (
                                            var M = b.length, S = new ArrayBuffer(M), L = new Uint8Array(S), j = 0;
                                            j < M;
                                            j++
                                        )
                                            L[j] = b.charCodeAt(j);
                                        return S;
                                    }
                                    function U(b) {
                                        return new g(function (M) {
                                            var S = b.transaction(R, D),
                                                L = _([""]);
                                            S.objectStore(R).put(L, "key"),
                                                (S.onabort = function (j) {
                                                    j.preventDefault(), j.stopPropagation(), M(!1);
                                                }),
                                                (S.oncomplete = function () {
                                                    var j = navigator.userAgent.match(/Chrome\/(\d+)/),
                                                        B = navigator.userAgent.match(/Edge\//);
                                                    M(B || !j || parseInt(j[1], 10) >= 43);
                                                });
                                        }).catch(function () {
                                            return !1;
                                        });
                                    }
                                    function Z(b) {
                                        return typeof q == "boolean"
                                            ? g.resolve(q)
                                            : U(b).then(function (M) {
                                                  return (q = M), q;
                                              });
                                    }
                                    function ut(b) {
                                        var M = w[b.name],
                                            S = {};
                                        (S.promise = new g(function (L, j) {
                                            (S.resolve = L), (S.reject = j);
                                        })),
                                            M.deferredOperations.push(S),
                                            M.dbReady
                                                ? (M.dbReady = M.dbReady.then(function () {
                                                      return S.promise;
                                                  }))
                                                : (M.dbReady = S.promise);
                                    }
                                    function I(b) {
                                        var M = w[b.name],
                                            S = M.deferredOperations.pop();
                                        if (S) return S.resolve(), S.promise;
                                    }
                                    function $(b, M) {
                                        var S = w[b.name],
                                            L = S.deferredOperations.pop();
                                        if (L) return L.reject(M), L.promise;
                                    }
                                    function rt(b, M) {
                                        return new g(function (S, L) {
                                            if (((w[b.name] = w[b.name] || z()), b.db))
                                                if (M) ut(b), b.db.close();
                                                else return S(b.db);
                                            var j = [b.name];
                                            M && j.push(b.version);
                                            var B = p.open.apply(p, j);
                                            M &&
                                                (B.onupgradeneeded = function (tt) {
                                                    var it = B.result;
                                                    try {
                                                        it.createObjectStore(b.storeName),
                                                            tt.oldVersion <= 1 && it.createObjectStore(R);
                                                    } catch (lt) {
                                                        if (lt.name === "ConstraintError")
                                                            console.warn(
                                                                'The database "' +
                                                                    b.name +
                                                                    '" has been upgraded from version ' +
                                                                    tt.oldVersion +
                                                                    " to version " +
                                                                    tt.newVersion +
                                                                    ', but the storage "' +
                                                                    b.storeName +
                                                                    '" already exists.'
                                                            );
                                                        else throw lt;
                                                    }
                                                }),
                                                (B.onerror = function (tt) {
                                                    tt.preventDefault(), L(B.error);
                                                }),
                                                (B.onsuccess = function () {
                                                    var tt = B.result;
                                                    (tt.onversionchange = function (it) {
                                                        it.target.close();
                                                    }),
                                                        S(tt),
                                                        I(b);
                                                });
                                        });
                                    }
                                    function at(b) {
                                        return rt(b, !1);
                                    }
                                    function mt(b) {
                                        return rt(b, !0);
                                    }
                                    function yt(b, M) {
                                        if (!b.db) return !0;
                                        var S = !b.db.objectStoreNames.contains(b.storeName),
                                            L = b.version < b.db.version,
                                            j = b.version > b.db.version;
                                        if (
                                            (L &&
                                                (b.version !== M &&
                                                    console.warn(
                                                        'The database "' +
                                                            b.name +
                                                            `" can't be downgraded from version ` +
                                                            b.db.version +
                                                            " to version " +
                                                            b.version +
                                                            "."
                                                    ),
                                                (b.version = b.db.version)),
                                            j || S)
                                        ) {
                                            if (S) {
                                                var B = b.db.version + 1;
                                                B > b.version && (b.version = B);
                                            }
                                            return !0;
                                        }
                                        return !1;
                                    }
                                    function V(b) {
                                        return new g(function (M, S) {
                                            var L = new FileReader();
                                            (L.onerror = S),
                                                (L.onloadend = function (j) {
                                                    var B = btoa(j.target.result || "");
                                                    M({ __local_forage_encoded_blob: !0, data: B, type: b.type });
                                                }),
                                                L.readAsBinaryString(b);
                                        });
                                    }
                                    function st(b) {
                                        var M = G(atob(b.data));
                                        return _([M], { type: b.type });
                                    }
                                    function ft(b) {
                                        return b && b.__local_forage_encoded_blob;
                                    }
                                    function Dt(b) {
                                        var M = this,
                                            S = M._initReady().then(function () {
                                                var L = w[M._dbInfo.name];
                                                if (L && L.dbReady) return L.dbReady;
                                            });
                                        return O(S, b, b), S;
                                    }
                                    function Mt(b) {
                                        ut(b);
                                        for (var M = w[b.name], S = M.forages, L = 0; L < S.length; L++) {
                                            var j = S[L];
                                            j._dbInfo.db && (j._dbInfo.db.close(), (j._dbInfo.db = null));
                                        }
                                        return (
                                            (b.db = null),
                                            at(b)
                                                .then(function (B) {
                                                    return (b.db = B), yt(b) ? mt(b) : B;
                                                })
                                                .then(function (B) {
                                                    b.db = M.db = B;
                                                    for (var tt = 0; tt < S.length; tt++) S[tt]._dbInfo.db = B;
                                                })
                                                .catch(function (B) {
                                                    throw ($(b, B), B);
                                                })
                                        );
                                    }
                                    function E(b, M, S, L) {
                                        L === void 0 && (L = 1);
                                        try {
                                            var j = b.db.transaction(b.storeName, M);
                                            S(null, j);
                                        } catch (B) {
                                            if (
                                                L > 0 &&
                                                (!b.db || B.name === "InvalidStateError" || B.name === "NotFoundError")
                                            )
                                                return g
                                                    .resolve()
                                                    .then(function () {
                                                        if (
                                                            !b.db ||
                                                            (B.name === "NotFoundError" &&
                                                                !b.db.objectStoreNames.contains(b.storeName) &&
                                                                b.version <= b.db.version)
                                                        )
                                                            return b.db && (b.version = b.db.version + 1), mt(b);
                                                    })
                                                    .then(function () {
                                                        return Mt(b).then(function () {
                                                            E(b, M, S, L - 1);
                                                        });
                                                    })
                                                    .catch(S);
                                            S(B);
                                        }
                                    }
                                    function z() {
                                        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
                                    }
                                    function P(b) {
                                        var M = this,
                                            S = { db: null };
                                        if (b) for (var L in b) S[L] = b[L];
                                        var j = w[S.name];
                                        j || ((j = z()), (w[S.name] = j)),
                                            j.forages.push(M),
                                            M._initReady || ((M._initReady = M.ready), (M.ready = Dt));
                                        var B = [];
                                        function tt() {
                                            return g.resolve();
                                        }
                                        for (var it = 0; it < j.forages.length; it++) {
                                            var lt = j.forages[it];
                                            lt !== M && B.push(lt._initReady().catch(tt));
                                        }
                                        var ot = j.forages.slice(0);
                                        return g
                                            .all(B)
                                            .then(function () {
                                                return (S.db = j.db), at(S);
                                            })
                                            .then(function (ct) {
                                                return (S.db = ct), yt(S, M._defaultConfig.version) ? mt(S) : ct;
                                            })
                                            .then(function (ct) {
                                                (S.db = j.db = ct), (M._dbInfo = S);
                                                for (var ht = 0; ht < ot.length; ht++) {
                                                    var Tt = ot[ht];
                                                    Tt !== M &&
                                                        ((Tt._dbInfo.db = S.db), (Tt._dbInfo.version = S.version));
                                                }
                                            });
                                    }
                                    function W(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = new g(function (j, B) {
                                            S.ready()
                                                .then(function () {
                                                    E(S._dbInfo, C, function (tt, it) {
                                                        if (tt) return B(tt);
                                                        try {
                                                            var lt = it.objectStore(S._dbInfo.storeName),
                                                                ot = lt.get(b);
                                                            (ot.onsuccess = function () {
                                                                var ct = ot.result;
                                                                ct === void 0 && (ct = null),
                                                                    ft(ct) && (ct = st(ct)),
                                                                    j(ct);
                                                            }),
                                                                (ot.onerror = function () {
                                                                    B(ot.error);
                                                                });
                                                        } catch (ct) {
                                                            B(ct);
                                                        }
                                                    });
                                                })
                                                .catch(B);
                                        });
                                        return T(L, M), L;
                                    }
                                    function bt(b, M) {
                                        var S = this,
                                            L = new g(function (j, B) {
                                                S.ready()
                                                    .then(function () {
                                                        E(S._dbInfo, C, function (tt, it) {
                                                            if (tt) return B(tt);
                                                            try {
                                                                var lt = it.objectStore(S._dbInfo.storeName),
                                                                    ot = lt.openCursor(),
                                                                    ct = 1;
                                                                (ot.onsuccess = function () {
                                                                    var ht = ot.result;
                                                                    if (ht) {
                                                                        var Tt = ht.value;
                                                                        ft(Tt) && (Tt = st(Tt));
                                                                        var Ct = b(Tt, ht.key, ct++);
                                                                        Ct !== void 0 ? j(Ct) : ht.continue();
                                                                    } else j();
                                                                }),
                                                                    (ot.onerror = function () {
                                                                        B(ot.error);
                                                                    });
                                                            } catch (ht) {
                                                                B(ht);
                                                            }
                                                        });
                                                    })
                                                    .catch(B);
                                            });
                                        return T(L, M), L;
                                    }
                                    function At(b, M, S) {
                                        var L = this;
                                        b = k(b);
                                        var j = new g(function (B, tt) {
                                            var it;
                                            L.ready()
                                                .then(function () {
                                                    return (
                                                        (it = L._dbInfo),
                                                        x.call(M) === "[object Blob]"
                                                            ? Z(it.db).then(function (lt) {
                                                                  return lt ? M : V(M);
                                                              })
                                                            : M
                                                    );
                                                })
                                                .then(function (lt) {
                                                    E(L._dbInfo, D, function (ot, ct) {
                                                        if (ot) return tt(ot);
                                                        try {
                                                            var ht = ct.objectStore(L._dbInfo.storeName);
                                                            lt === null && (lt = void 0);
                                                            var Tt = ht.put(lt, b);
                                                            (ct.oncomplete = function () {
                                                                lt === void 0 && (lt = null), B(lt);
                                                            }),
                                                                (ct.onabort = ct.onerror =
                                                                    function () {
                                                                        var Ct = Tt.error
                                                                            ? Tt.error
                                                                            : Tt.transaction.error;
                                                                        tt(Ct);
                                                                    });
                                                        } catch (Ct) {
                                                            tt(Ct);
                                                        }
                                                    });
                                                })
                                                .catch(tt);
                                        });
                                        return T(j, S), j;
                                    }
                                    function Ht(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = new g(function (j, B) {
                                            S.ready()
                                                .then(function () {
                                                    E(S._dbInfo, D, function (tt, it) {
                                                        if (tt) return B(tt);
                                                        try {
                                                            var lt = it.objectStore(S._dbInfo.storeName),
                                                                ot = lt.delete(b);
                                                            (it.oncomplete = function () {
                                                                j();
                                                            }),
                                                                (it.onerror = function () {
                                                                    B(ot.error);
                                                                }),
                                                                (it.onabort = function () {
                                                                    var ct = ot.error ? ot.error : ot.transaction.error;
                                                                    B(ct);
                                                                });
                                                        } catch (ct) {
                                                            B(ct);
                                                        }
                                                    });
                                                })
                                                .catch(B);
                                        });
                                        return T(L, M), L;
                                    }
                                    function xe(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        E(M._dbInfo, D, function (B, tt) {
                                                            if (B) return j(B);
                                                            try {
                                                                var it = tt.objectStore(M._dbInfo.storeName),
                                                                    lt = it.clear();
                                                                (tt.oncomplete = function () {
                                                                    L();
                                                                }),
                                                                    (tt.onabort = tt.onerror =
                                                                        function () {
                                                                            var ot = lt.error
                                                                                ? lt.error
                                                                                : lt.transaction.error;
                                                                            j(ot);
                                                                        });
                                                            } catch (ot) {
                                                                j(ot);
                                                            }
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function re(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        E(M._dbInfo, C, function (B, tt) {
                                                            if (B) return j(B);
                                                            try {
                                                                var it = tt.objectStore(M._dbInfo.storeName),
                                                                    lt = it.count();
                                                                (lt.onsuccess = function () {
                                                                    L(lt.result);
                                                                }),
                                                                    (lt.onerror = function () {
                                                                        j(lt.error);
                                                                    });
                                                            } catch (ot) {
                                                                j(ot);
                                                            }
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function Vr(b, M) {
                                        var S = this,
                                            L = new g(function (j, B) {
                                                if (b < 0) {
                                                    j(null);
                                                    return;
                                                }
                                                S.ready()
                                                    .then(function () {
                                                        E(S._dbInfo, C, function (tt, it) {
                                                            if (tt) return B(tt);
                                                            try {
                                                                var lt = it.objectStore(S._dbInfo.storeName),
                                                                    ot = !1,
                                                                    ct = lt.openKeyCursor();
                                                                (ct.onsuccess = function () {
                                                                    var ht = ct.result;
                                                                    if (!ht) {
                                                                        j(null);
                                                                        return;
                                                                    }
                                                                    b === 0 || ot
                                                                        ? j(ht.key)
                                                                        : ((ot = !0), ht.advance(b));
                                                                }),
                                                                    (ct.onerror = function () {
                                                                        B(ct.error);
                                                                    });
                                                            } catch (ht) {
                                                                B(ht);
                                                            }
                                                        });
                                                    })
                                                    .catch(B);
                                            });
                                        return T(L, M), L;
                                    }
                                    function Ma(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        E(M._dbInfo, C, function (B, tt) {
                                                            if (B) return j(B);
                                                            try {
                                                                var it = tt.objectStore(M._dbInfo.storeName),
                                                                    lt = it.openKeyCursor(),
                                                                    ot = [];
                                                                (lt.onsuccess = function () {
                                                                    var ct = lt.result;
                                                                    if (!ct) {
                                                                        L(ot);
                                                                        return;
                                                                    }
                                                                    ot.push(ct.key), ct.continue();
                                                                }),
                                                                    (lt.onerror = function () {
                                                                        j(lt.error);
                                                                    });
                                                            } catch (ct) {
                                                                j(ct);
                                                            }
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function Ri(b, M) {
                                        M = Y.apply(this, arguments);
                                        var S = this.config();
                                        (b = (typeof b != "function" && b) || {}),
                                            b.name ||
                                                ((b.name = b.name || S.name),
                                                (b.storeName = b.storeName || S.storeName));
                                        var L = this,
                                            j;
                                        if (!b.name) j = g.reject("Invalid arguments");
                                        else {
                                            var B = b.name === S.name && L._dbInfo.db,
                                                tt = B
                                                    ? g.resolve(L._dbInfo.db)
                                                    : at(b).then(function (it) {
                                                          var lt = w[b.name],
                                                              ot = lt.forages;
                                                          lt.db = it;
                                                          for (var ct = 0; ct < ot.length; ct++) ot[ct]._dbInfo.db = it;
                                                          return it;
                                                      });
                                            b.storeName
                                                ? (j = tt.then(function (it) {
                                                      if (it.objectStoreNames.contains(b.storeName)) {
                                                          var lt = it.version + 1;
                                                          ut(b);
                                                          var ot = w[b.name],
                                                              ct = ot.forages;
                                                          it.close();
                                                          for (var ht = 0; ht < ct.length; ht++) {
                                                              var Tt = ct[ht];
                                                              (Tt._dbInfo.db = null), (Tt._dbInfo.version = lt);
                                                          }
                                                          var Ct = new g(function (kt, ae) {
                                                              var Kt = p.open(b.name, lt);
                                                              (Kt.onerror = function (qe) {
                                                                  var hr = Kt.result;
                                                                  hr.close(), ae(qe);
                                                              }),
                                                                  (Kt.onupgradeneeded = function () {
                                                                      var qe = Kt.result;
                                                                      qe.deleteObjectStore(b.storeName);
                                                                  }),
                                                                  (Kt.onsuccess = function () {
                                                                      var qe = Kt.result;
                                                                      qe.close(), kt(qe);
                                                                  });
                                                          });
                                                          return Ct.then(function (kt) {
                                                              ot.db = kt;
                                                              for (var ae = 0; ae < ct.length; ae++) {
                                                                  var Kt = ct[ae];
                                                                  (Kt._dbInfo.db = kt), I(Kt._dbInfo);
                                                              }
                                                          }).catch(function (kt) {
                                                              throw (
                                                                  (($(b, kt) || g.resolve()).catch(function () {}), kt)
                                                              );
                                                          });
                                                      }
                                                  }))
                                                : (j = tt.then(function (it) {
                                                      ut(b);
                                                      var lt = w[b.name],
                                                          ot = lt.forages;
                                                      it.close();
                                                      for (var ct = 0; ct < ot.length; ct++) {
                                                          var ht = ot[ct];
                                                          ht._dbInfo.db = null;
                                                      }
                                                      var Tt = new g(function (Ct, kt) {
                                                          var ae = p.deleteDatabase(b.name);
                                                          (ae.onerror = function () {
                                                              var Kt = ae.result;
                                                              Kt && Kt.close(), kt(ae.error);
                                                          }),
                                                              (ae.onblocked = function () {
                                                                  console.warn(
                                                                      'dropInstance blocked for database "' +
                                                                          b.name +
                                                                          '" until all open connections are closed'
                                                                  );
                                                              }),
                                                              (ae.onsuccess = function () {
                                                                  var Kt = ae.result;
                                                                  Kt && Kt.close(), Ct(Kt);
                                                              });
                                                      });
                                                      return Tt.then(function (Ct) {
                                                          lt.db = Ct;
                                                          for (var kt = 0; kt < ot.length; kt++) {
                                                              var ae = ot[kt];
                                                              I(ae._dbInfo);
                                                          }
                                                      }).catch(function (Ct) {
                                                          throw (($(b, Ct) || g.resolve()).catch(function () {}), Ct);
                                                      });
                                                  }));
                                        }
                                        return T(j, M), j;
                                    }
                                    var rs = {
                                        _driver: "asyncStorage",
                                        _initStorage: P,
                                        _support: m(),
                                        iterate: bt,
                                        getItem: W,
                                        setItem: At,
                                        removeItem: Ht,
                                        clear: xe,
                                        length: re,
                                        key: Vr,
                                        keys: Ma,
                                        dropInstance: Ri,
                                    };
                                    function Bn() {
                                        return typeof openDatabase == "function";
                                    }
                                    var an = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                        Ni = "~~local_forage_type~",
                                        as = /^~~local_forage_type~([^~]+)~/,
                                        Pr = "__lfsc__:",
                                        Kr = Pr.length,
                                        Zr = "arbf",
                                        Wr = "blob",
                                        is = "si08",
                                        os = "ui08",
                                        Ne = "uic8",
                                        ss = "si16",
                                        zi = "si32",
                                        Bi = "ur16",
                                        Fr = "ui32",
                                        us = "fl32",
                                        Ui = "fl64",
                                        ls = Kr + Zr.length,
                                        cs = Object.prototype.toString;
                                    function ur(b) {
                                        var M = b.length * 0.75,
                                            S = b.length,
                                            L,
                                            j = 0,
                                            B,
                                            tt,
                                            it,
                                            lt;
                                        b[b.length - 1] === "=" && (M--, b[b.length - 2] === "=" && M--);
                                        var ot = new ArrayBuffer(M),
                                            ct = new Uint8Array(ot);
                                        for (L = 0; L < S; L += 4)
                                            (B = an.indexOf(b[L])),
                                                (tt = an.indexOf(b[L + 1])),
                                                (it = an.indexOf(b[L + 2])),
                                                (lt = an.indexOf(b[L + 3])),
                                                (ct[j++] = (B << 2) | (tt >> 4)),
                                                (ct[j++] = ((tt & 15) << 4) | (it >> 2)),
                                                (ct[j++] = ((it & 3) << 6) | (lt & 63));
                                        return ot;
                                    }
                                    function we(b) {
                                        var M = new Uint8Array(b),
                                            S = "",
                                            L;
                                        for (L = 0; L < M.length; L += 3)
                                            (S += an[M[L] >> 2]),
                                                (S += an[((M[L] & 3) << 4) | (M[L + 1] >> 4)]),
                                                (S += an[((M[L + 1] & 15) << 2) | (M[L + 2] >> 6)]),
                                                (S += an[M[L + 2] & 63]);
                                        return (
                                            M.length % 3 === 2
                                                ? (S = S.substring(0, S.length - 1) + "=")
                                                : M.length % 3 === 1 && (S = S.substring(0, S.length - 2) + "=="),
                                            S
                                        );
                                    }
                                    function xn(b, M) {
                                        var S = "";
                                        if (
                                            (b && (S = cs.call(b)),
                                            b &&
                                                (S === "[object ArrayBuffer]" ||
                                                    (b.buffer && cs.call(b.buffer) === "[object ArrayBuffer]")))
                                        ) {
                                            var L,
                                                j = Pr;
                                            b instanceof ArrayBuffer
                                                ? ((L = b), (j += Zr))
                                                : ((L = b.buffer),
                                                  S === "[object Int8Array]"
                                                      ? (j += is)
                                                      : S === "[object Uint8Array]"
                                                        ? (j += os)
                                                        : S === "[object Uint8ClampedArray]"
                                                          ? (j += Ne)
                                                          : S === "[object Int16Array]"
                                                            ? (j += ss)
                                                            : S === "[object Uint16Array]"
                                                              ? (j += Bi)
                                                              : S === "[object Int32Array]"
                                                                ? (j += zi)
                                                                : S === "[object Uint32Array]"
                                                                  ? (j += Fr)
                                                                  : S === "[object Float32Array]"
                                                                    ? (j += us)
                                                                    : S === "[object Float64Array]"
                                                                      ? (j += Ui)
                                                                      : M(
                                                                            new Error(
                                                                                "Failed to get type for BinaryArray"
                                                                            )
                                                                        )),
                                                M(j + we(L));
                                        } else if (S === "[object Blob]") {
                                            var B = new FileReader();
                                            (B.onload = function () {
                                                var tt = Ni + b.type + "~" + we(this.result);
                                                M(Pr + Wr + tt);
                                            }),
                                                B.readAsArrayBuffer(b);
                                        } else
                                            try {
                                                M(JSON.stringify(b));
                                            } catch (tt) {
                                                console.error("Couldn't convert value into a JSON string: ", b),
                                                    M(null, tt);
                                            }
                                    }
                                    function Le(b) {
                                        if (b.substring(0, Kr) !== Pr) return JSON.parse(b);
                                        var M = b.substring(ls),
                                            S = b.substring(Kr, ls),
                                            L;
                                        if (S === Wr && as.test(M)) {
                                            var j = M.match(as);
                                            (L = j[1]), (M = M.substring(j[0].length));
                                        }
                                        var B = ur(M);
                                        switch (S) {
                                            case Zr:
                                                return B;
                                            case Wr:
                                                return _([B], { type: L });
                                            case is:
                                                return new Int8Array(B);
                                            case os:
                                                return new Uint8Array(B);
                                            case Ne:
                                                return new Uint8ClampedArray(B);
                                            case ss:
                                                return new Int16Array(B);
                                            case Bi:
                                                return new Uint16Array(B);
                                            case zi:
                                                return new Int32Array(B);
                                            case Fr:
                                                return new Uint32Array(B);
                                            case us:
                                                return new Float32Array(B);
                                            case Ui:
                                                return new Float64Array(B);
                                            default:
                                                throw new Error("Unkown type: " + S);
                                        }
                                    }
                                    var Li = { serialize: xn, deserialize: Le, stringToBuffer: ur, bufferToString: we };
                                    function fs(b, M, S, L) {
                                        b.executeSql(
                                            "CREATE TABLE IF NOT EXISTS " +
                                                M.storeName +
                                                " (id INTEGER PRIMARY KEY, key unique, value)",
                                            [],
                                            S,
                                            L
                                        );
                                    }
                                    function Yl(b) {
                                        var M = this,
                                            S = { db: null };
                                        if (b) for (var L in b) S[L] = typeof b[L] != "string" ? b[L].toString() : b[L];
                                        var j = new g(function (B, tt) {
                                            try {
                                                S.db = openDatabase(S.name, String(S.version), S.description, S.size);
                                            } catch (it) {
                                                return tt(it);
                                            }
                                            S.db.transaction(function (it) {
                                                fs(
                                                    it,
                                                    S,
                                                    function () {
                                                        (M._dbInfo = S), B();
                                                    },
                                                    function (lt, ot) {
                                                        tt(ot);
                                                    }
                                                );
                                            }, tt);
                                        });
                                        return (S.serializer = Li), j;
                                    }
                                    function Ke(b, M, S, L, j, B) {
                                        b.executeSql(
                                            S,
                                            L,
                                            j,
                                            function (tt, it) {
                                                it.code === it.SYNTAX_ERR
                                                    ? tt.executeSql(
                                                          "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                                                          [M.storeName],
                                                          function (lt, ot) {
                                                              ot.rows.length
                                                                  ? B(lt, it)
                                                                  : fs(
                                                                        lt,
                                                                        M,
                                                                        function () {
                                                                            lt.executeSql(S, L, j, B);
                                                                        },
                                                                        B
                                                                    );
                                                          },
                                                          B
                                                      )
                                                    : B(tt, it);
                                            },
                                            B
                                        );
                                    }
                                    function Ca(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = new g(function (j, B) {
                                            S.ready()
                                                .then(function () {
                                                    var tt = S._dbInfo;
                                                    tt.db.transaction(function (it) {
                                                        Ke(
                                                            it,
                                                            tt,
                                                            "SELECT * FROM " + tt.storeName + " WHERE key = ? LIMIT 1",
                                                            [b],
                                                            function (lt, ot) {
                                                                var ct = ot.rows.length ? ot.rows.item(0).value : null;
                                                                ct && (ct = tt.serializer.deserialize(ct)), j(ct);
                                                            },
                                                            function (lt, ot) {
                                                                B(ot);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(B);
                                        });
                                        return T(L, M), L;
                                    }
                                    function Ra(b, M) {
                                        var S = this,
                                            L = new g(function (j, B) {
                                                S.ready()
                                                    .then(function () {
                                                        var tt = S._dbInfo;
                                                        tt.db.transaction(function (it) {
                                                            Ke(
                                                                it,
                                                                tt,
                                                                "SELECT * FROM " + tt.storeName,
                                                                [],
                                                                function (lt, ot) {
                                                                    for (
                                                                        var ct = ot.rows, ht = ct.length, Tt = 0;
                                                                        Tt < ht;
                                                                        Tt++
                                                                    ) {
                                                                        var Ct = ct.item(Tt),
                                                                            kt = Ct.value;
                                                                        if (
                                                                            (kt && (kt = tt.serializer.deserialize(kt)),
                                                                            (kt = b(kt, Ct.key, Tt + 1)),
                                                                            kt !== void 0)
                                                                        ) {
                                                                            j(kt);
                                                                            return;
                                                                        }
                                                                    }
                                                                    j();
                                                                },
                                                                function (lt, ot) {
                                                                    B(ot);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(B);
                                            });
                                        return T(L, M), L;
                                    }
                                    function wn(b, M, S, L) {
                                        var j = this;
                                        b = k(b);
                                        var B = new g(function (tt, it) {
                                            j.ready()
                                                .then(function () {
                                                    M === void 0 && (M = null);
                                                    var lt = M,
                                                        ot = j._dbInfo;
                                                    ot.serializer.serialize(M, function (ct, ht) {
                                                        ht
                                                            ? it(ht)
                                                            : ot.db.transaction(
                                                                  function (Tt) {
                                                                      Ke(
                                                                          Tt,
                                                                          ot,
                                                                          "INSERT OR REPLACE INTO " +
                                                                              ot.storeName +
                                                                              " (key, value) VALUES (?, ?)",
                                                                          [b, ct],
                                                                          function () {
                                                                              tt(lt);
                                                                          },
                                                                          function (Ct, kt) {
                                                                              it(kt);
                                                                          }
                                                                      );
                                                                  },
                                                                  function (Tt) {
                                                                      if (Tt.code === Tt.QUOTA_ERR) {
                                                                          if (L > 0) {
                                                                              tt(wn.apply(j, [b, lt, S, L - 1]));
                                                                              return;
                                                                          }
                                                                          it(Tt);
                                                                      }
                                                                  }
                                                              );
                                                    });
                                                })
                                                .catch(it);
                                        });
                                        return T(B, S), B;
                                    }
                                    function Na(b, M, S) {
                                        return wn.apply(this, [b, M, S, 1]);
                                    }
                                    function $r(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = new g(function (j, B) {
                                            S.ready()
                                                .then(function () {
                                                    var tt = S._dbInfo;
                                                    tt.db.transaction(function (it) {
                                                        Ke(
                                                            it,
                                                            tt,
                                                            "DELETE FROM " + tt.storeName + " WHERE key = ?",
                                                            [b],
                                                            function () {
                                                                j();
                                                            },
                                                            function (lt, ot) {
                                                                B(ot);
                                                            }
                                                        );
                                                    });
                                                })
                                                .catch(B);
                                        });
                                        return T(L, M), L;
                                    }
                                    function ql(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        var B = M._dbInfo;
                                                        B.db.transaction(function (tt) {
                                                            Ke(
                                                                tt,
                                                                B,
                                                                "DELETE FROM " + B.storeName,
                                                                [],
                                                                function () {
                                                                    L();
                                                                },
                                                                function (it, lt) {
                                                                    j(lt);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function ds(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        var B = M._dbInfo;
                                                        B.db.transaction(function (tt) {
                                                            Ke(
                                                                tt,
                                                                B,
                                                                "SELECT COUNT(key) as c FROM " + B.storeName,
                                                                [],
                                                                function (it, lt) {
                                                                    var ot = lt.rows.item(0).c;
                                                                    L(ot);
                                                                },
                                                                function (it, lt) {
                                                                    j(lt);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function Hi(b, M) {
                                        var S = this,
                                            L = new g(function (j, B) {
                                                S.ready()
                                                    .then(function () {
                                                        var tt = S._dbInfo;
                                                        tt.db.transaction(function (it) {
                                                            Ke(
                                                                it,
                                                                tt,
                                                                "SELECT key FROM " +
                                                                    tt.storeName +
                                                                    " WHERE id = ? LIMIT 1",
                                                                [b + 1],
                                                                function (lt, ot) {
                                                                    var ct = ot.rows.length
                                                                        ? ot.rows.item(0).key
                                                                        : null;
                                                                    j(ct);
                                                                },
                                                                function (lt, ot) {
                                                                    B(ot);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(B);
                                            });
                                        return T(L, M), L;
                                    }
                                    function Jr(b) {
                                        var M = this,
                                            S = new g(function (L, j) {
                                                M.ready()
                                                    .then(function () {
                                                        var B = M._dbInfo;
                                                        B.db.transaction(function (tt) {
                                                            Ke(
                                                                tt,
                                                                B,
                                                                "SELECT key FROM " + B.storeName,
                                                                [],
                                                                function (it, lt) {
                                                                    for (var ot = [], ct = 0; ct < lt.rows.length; ct++)
                                                                        ot.push(lt.rows.item(ct).key);
                                                                    L(ot);
                                                                },
                                                                function (it, lt) {
                                                                    j(lt);
                                                                }
                                                            );
                                                        });
                                                    })
                                                    .catch(j);
                                            });
                                        return T(S, b), S;
                                    }
                                    function Gl(b) {
                                        return new g(function (M, S) {
                                            b.transaction(
                                                function (L) {
                                                    L.executeSql(
                                                        "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                                        [],
                                                        function (j, B) {
                                                            for (var tt = [], it = 0; it < B.rows.length; it++)
                                                                tt.push(B.rows.item(it).name);
                                                            M({ db: b, storeNames: tt });
                                                        },
                                                        function (j, B) {
                                                            S(B);
                                                        }
                                                    );
                                                },
                                                function (L) {
                                                    S(L);
                                                }
                                            );
                                        });
                                    }
                                    function hs(b, M) {
                                        M = Y.apply(this, arguments);
                                        var S = this.config();
                                        (b = (typeof b != "function" && b) || {}),
                                            b.name ||
                                                ((b.name = b.name || S.name),
                                                (b.storeName = b.storeName || S.storeName));
                                        var L = this,
                                            j;
                                        return (
                                            b.name
                                                ? (j = new g(function (B) {
                                                      var tt;
                                                      b.name === S.name
                                                          ? (tt = L._dbInfo.db)
                                                          : (tt = openDatabase(b.name, "", "", 0)),
                                                          b.storeName
                                                              ? B({ db: tt, storeNames: [b.storeName] })
                                                              : B(Gl(tt));
                                                  }).then(function (B) {
                                                      return new g(function (tt, it) {
                                                          B.db.transaction(
                                                              function (lt) {
                                                                  function ot(Ct) {
                                                                      return new g(function (kt, ae) {
                                                                          lt.executeSql(
                                                                              "DROP TABLE IF EXISTS " + Ct,
                                                                              [],
                                                                              function () {
                                                                                  kt();
                                                                              },
                                                                              function (Kt, qe) {
                                                                                  ae(qe);
                                                                              }
                                                                          );
                                                                      });
                                                                  }
                                                                  for (
                                                                      var ct = [], ht = 0, Tt = B.storeNames.length;
                                                                      ht < Tt;
                                                                      ht++
                                                                  )
                                                                      ct.push(ot(B.storeNames[ht]));
                                                                  g.all(ct)
                                                                      .then(function () {
                                                                          tt();
                                                                      })
                                                                      .catch(function (Ct) {
                                                                          it(Ct);
                                                                      });
                                                              },
                                                              function (lt) {
                                                                  it(lt);
                                                              }
                                                          );
                                                      });
                                                  }))
                                                : (j = g.reject("Invalid arguments")),
                                            T(j, M),
                                            j
                                        );
                                    }
                                    var ms = {
                                        _driver: "webSQLStorage",
                                        _initStorage: Yl,
                                        _support: Bn(),
                                        iterate: Ra,
                                        getItem: Ca,
                                        setItem: Na,
                                        removeItem: $r,
                                        clear: ql,
                                        length: ds,
                                        key: Hi,
                                        keys: Jr,
                                        dropInstance: hs,
                                    };
                                    function ps() {
                                        try {
                                            return (
                                                typeof localStorage < "u" &&
                                                "setItem" in localStorage &&
                                                !!localStorage.setItem
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    }
                                    function za(b, M) {
                                        var S = b.name + "/";
                                        return b.storeName !== M.storeName && (S += b.storeName + "/"), S;
                                    }
                                    function ki() {
                                        var b = "_localforage_support_test";
                                        try {
                                            return localStorage.setItem(b, !0), localStorage.removeItem(b), !1;
                                        } catch {
                                            return !0;
                                        }
                                    }
                                    function ys() {
                                        return !ki() || localStorage.length > 0;
                                    }
                                    function gs(b) {
                                        var M = this,
                                            S = {};
                                        if (b) for (var L in b) S[L] = b[L];
                                        return (
                                            (S.keyPrefix = za(b, M._defaultConfig)),
                                            ys() ? ((M._dbInfo = S), (S.serializer = Li), g.resolve()) : g.reject()
                                        );
                                    }
                                    function On(b) {
                                        var M = this,
                                            S = M.ready().then(function () {
                                                for (
                                                    var L = M._dbInfo.keyPrefix, j = localStorage.length - 1;
                                                    j >= 0;
                                                    j--
                                                ) {
                                                    var B = localStorage.key(j);
                                                    B.indexOf(L) === 0 && localStorage.removeItem(B);
                                                }
                                            });
                                        return T(S, b), S;
                                    }
                                    function Se(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = S.ready().then(function () {
                                            var j = S._dbInfo,
                                                B = localStorage.getItem(j.keyPrefix + b);
                                            return B && (B = j.serializer.deserialize(B)), B;
                                        });
                                        return T(L, M), L;
                                    }
                                    function ze(b, M) {
                                        var S = this,
                                            L = S.ready().then(function () {
                                                for (
                                                    var j = S._dbInfo,
                                                        B = j.keyPrefix,
                                                        tt = B.length,
                                                        it = localStorage.length,
                                                        lt = 1,
                                                        ot = 0;
                                                    ot < it;
                                                    ot++
                                                ) {
                                                    var ct = localStorage.key(ot);
                                                    if (ct.indexOf(B) === 0) {
                                                        var ht = localStorage.getItem(ct);
                                                        if (
                                                            (ht && (ht = j.serializer.deserialize(ht)),
                                                            (ht = b(ht, ct.substring(tt), lt++)),
                                                            ht !== void 0)
                                                        )
                                                            return ht;
                                                    }
                                                }
                                            });
                                        return T(L, M), L;
                                    }
                                    function lr(b, M) {
                                        var S = this,
                                            L = S.ready().then(function () {
                                                var j = S._dbInfo,
                                                    B;
                                                try {
                                                    B = localStorage.key(b);
                                                } catch {
                                                    B = null;
                                                }
                                                return B && (B = B.substring(j.keyPrefix.length)), B;
                                            });
                                        return T(L, M), L;
                                    }
                                    function ji(b) {
                                        var M = this,
                                            S = M.ready().then(function () {
                                                for (
                                                    var L = M._dbInfo, j = localStorage.length, B = [], tt = 0;
                                                    tt < j;
                                                    tt++
                                                ) {
                                                    var it = localStorage.key(tt);
                                                    it.indexOf(L.keyPrefix) === 0 &&
                                                        B.push(it.substring(L.keyPrefix.length));
                                                }
                                                return B;
                                            });
                                        return T(S, b), S;
                                    }
                                    function Il(b) {
                                        var M = this,
                                            S = M.keys().then(function (L) {
                                                return L.length;
                                            });
                                        return T(S, b), S;
                                    }
                                    function Xl(b, M) {
                                        var S = this;
                                        b = k(b);
                                        var L = S.ready().then(function () {
                                            var j = S._dbInfo;
                                            localStorage.removeItem(j.keyPrefix + b);
                                        });
                                        return T(L, M), L;
                                    }
                                    function vs(b, M, S) {
                                        var L = this;
                                        b = k(b);
                                        var j = L.ready().then(function () {
                                            M === void 0 && (M = null);
                                            var B = M;
                                            return new g(function (tt, it) {
                                                var lt = L._dbInfo;
                                                lt.serializer.serialize(M, function (ot, ct) {
                                                    if (ct) it(ct);
                                                    else
                                                        try {
                                                            localStorage.setItem(lt.keyPrefix + b, ot), tt(B);
                                                        } catch (ht) {
                                                            (ht.name === "QuotaExceededError" ||
                                                                ht.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                                                                it(ht),
                                                                it(ht);
                                                        }
                                                });
                                            });
                                        });
                                        return T(j, S), j;
                                    }
                                    function ta(b, M) {
                                        if (
                                            ((M = Y.apply(this, arguments)),
                                            (b = (typeof b != "function" && b) || {}),
                                            !b.name)
                                        ) {
                                            var S = this.config();
                                            (b.name = b.name || S.name), (b.storeName = b.storeName || S.storeName);
                                        }
                                        var L = this,
                                            j;
                                        return (
                                            b.name
                                                ? (j = new g(function (B) {
                                                      b.storeName ? B(za(b, L._defaultConfig)) : B(b.name + "/");
                                                  }).then(function (B) {
                                                      for (var tt = localStorage.length - 1; tt >= 0; tt--) {
                                                          var it = localStorage.key(tt);
                                                          it.indexOf(B) === 0 && localStorage.removeItem(it);
                                                      }
                                                  }))
                                                : (j = g.reject("Invalid arguments")),
                                            T(j, M),
                                            j
                                        );
                                    }
                                    var Yi = {
                                            _driver: "localStorageWrapper",
                                            _initStorage: gs,
                                            _support: ps(),
                                            iterate: ze,
                                            getItem: Se,
                                            setItem: vs,
                                            removeItem: Xl,
                                            clear: On,
                                            length: Il,
                                            key: lr,
                                            keys: ji,
                                            dropInstance: ta,
                                        },
                                        cr = function (M, S) {
                                            return (
                                                M === S ||
                                                (typeof M == "number" && typeof S == "number" && isNaN(M) && isNaN(S))
                                            );
                                        },
                                        fr = function (M, S) {
                                            for (var L = M.length, j = 0; j < L; ) {
                                                if (cr(M[j], S)) return !0;
                                                j++;
                                            }
                                            return !1;
                                        },
                                        dr =
                                            Array.isArray ||
                                            function (b) {
                                                return Object.prototype.toString.call(b) === "[object Array]";
                                            },
                                        on = {},
                                        fe = {},
                                        Un = { INDEXEDDB: rs, WEBSQL: ms, LOCALSTORAGE: Yi },
                                        _s = [Un.INDEXEDDB._driver, Un.WEBSQL._driver, Un.LOCALSTORAGE._driver],
                                        sn = ["dropInstance"],
                                        Dn = [
                                            "clear",
                                            "getItem",
                                            "iterate",
                                            "key",
                                            "keys",
                                            "length",
                                            "removeItem",
                                            "setItem",
                                        ].concat(sn),
                                        Ql = {
                                            description: "",
                                            driver: _s.slice(),
                                            name: "localforage",
                                            size: 4980736,
                                            storeName: "keyvaluepairs",
                                            version: 1,
                                        };
                                    function bs(b, M) {
                                        b[M] = function () {
                                            var S = arguments;
                                            return b.ready().then(function () {
                                                return b[M].apply(b, S);
                                            });
                                        };
                                    }
                                    function Ba() {
                                        for (var b = 1; b < arguments.length; b++) {
                                            var M = arguments[b];
                                            if (M)
                                                for (var S in M)
                                                    M.hasOwnProperty(S) &&
                                                        (dr(M[S])
                                                            ? (arguments[0][S] = M[S].slice())
                                                            : (arguments[0][S] = M[S]));
                                        }
                                        return arguments[0];
                                    }
                                    var Vl = (function () {
                                            function b(M) {
                                                d(this, b);
                                                for (var S in Un)
                                                    if (Un.hasOwnProperty(S)) {
                                                        var L = Un[S],
                                                            j = L._driver;
                                                        (this[S] = j), on[j] || this.defineDriver(L);
                                                    }
                                                (this._defaultConfig = Ba({}, Ql)),
                                                    (this._config = Ba({}, this._defaultConfig, M)),
                                                    (this._driverSet = null),
                                                    (this._initDriver = null),
                                                    (this._ready = !1),
                                                    (this._dbInfo = null),
                                                    this._wrapLibraryMethodsWithReady(),
                                                    this.setDriver(this._config.driver).catch(function () {});
                                            }
                                            return (
                                                (b.prototype.config = function (S) {
                                                    if ((typeof S > "u" ? "undefined" : f(S)) === "object") {
                                                        if (this._ready)
                                                            return new Error(
                                                                "Can't call config() after localforage has been used."
                                                            );
                                                        for (var L in S) {
                                                            if (
                                                                (L === "storeName" && (S[L] = S[L].replace(/\W/g, "_")),
                                                                L === "version" && typeof S[L] != "number")
                                                            )
                                                                return new Error("Database version must be a number.");
                                                            this._config[L] = S[L];
                                                        }
                                                        return "driver" in S && S.driver
                                                            ? this.setDriver(this._config.driver)
                                                            : !0;
                                                    } else return typeof S == "string" ? this._config[S] : this._config;
                                                }),
                                                (b.prototype.defineDriver = function (S, L, j) {
                                                    var B = new g(function (tt, it) {
                                                        try {
                                                            var lt = S._driver,
                                                                ot = new Error(
                                                                    "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                                                                );
                                                            if (!S._driver) {
                                                                it(ot);
                                                                return;
                                                            }
                                                            for (
                                                                var ct = Dn.concat("_initStorage"),
                                                                    ht = 0,
                                                                    Tt = ct.length;
                                                                ht < Tt;
                                                                ht++
                                                            ) {
                                                                var Ct = ct[ht],
                                                                    kt = !fr(sn, Ct);
                                                                if ((kt || S[Ct]) && typeof S[Ct] != "function") {
                                                                    it(ot);
                                                                    return;
                                                                }
                                                            }
                                                            var ae = function () {
                                                                for (
                                                                    var hr = function (Ha) {
                                                                            return function () {
                                                                                var gn = new Error(
                                                                                        "Method " +
                                                                                            Ha +
                                                                                            " is not implemented by the current driver"
                                                                                    ),
                                                                                    ka = g.reject(gn);
                                                                                return (
                                                                                    T(
                                                                                        ka,
                                                                                        arguments[arguments.length - 1]
                                                                                    ),
                                                                                    ka
                                                                                );
                                                                            };
                                                                        },
                                                                        La = 0,
                                                                        qi = sn.length;
                                                                    La < qi;
                                                                    La++
                                                                ) {
                                                                    var Gi = sn[La];
                                                                    S[Gi] || (S[Gi] = hr(Gi));
                                                                }
                                                            };
                                                            ae();
                                                            var Kt = function (hr) {
                                                                on[lt] &&
                                                                    console.info(
                                                                        "Redefining LocalForage driver: " + lt
                                                                    ),
                                                                    (on[lt] = S),
                                                                    (fe[lt] = hr),
                                                                    tt();
                                                            };
                                                            "_support" in S
                                                                ? S._support && typeof S._support == "function"
                                                                    ? S._support().then(Kt, it)
                                                                    : Kt(!!S._support)
                                                                : Kt(!0);
                                                        } catch (qe) {
                                                            it(qe);
                                                        }
                                                    });
                                                    return O(B, L, j), B;
                                                }),
                                                (b.prototype.driver = function () {
                                                    return this._driver || null;
                                                }),
                                                (b.prototype.getDriver = function (S, L, j) {
                                                    var B = on[S]
                                                        ? g.resolve(on[S])
                                                        : g.reject(new Error("Driver not found."));
                                                    return O(B, L, j), B;
                                                }),
                                                (b.prototype.getSerializer = function (S) {
                                                    var L = g.resolve(Li);
                                                    return O(L, S), L;
                                                }),
                                                (b.prototype.ready = function (S) {
                                                    var L = this,
                                                        j = L._driverSet.then(function () {
                                                            return (
                                                                L._ready === null && (L._ready = L._initDriver()),
                                                                L._ready
                                                            );
                                                        });
                                                    return O(j, S, S), j;
                                                }),
                                                (b.prototype.setDriver = function (S, L, j) {
                                                    var B = this;
                                                    dr(S) || (S = [S]);
                                                    var tt = this._getSupportedDrivers(S);
                                                    function it() {
                                                        B._config.driver = B.driver();
                                                    }
                                                    function lt(ht) {
                                                        return (
                                                            B._extend(ht),
                                                            it(),
                                                            (B._ready = B._initStorage(B._config)),
                                                            B._ready
                                                        );
                                                    }
                                                    function ot(ht) {
                                                        return function () {
                                                            var Tt = 0;
                                                            function Ct() {
                                                                for (; Tt < ht.length; ) {
                                                                    var kt = ht[Tt];
                                                                    return (
                                                                        Tt++,
                                                                        (B._dbInfo = null),
                                                                        (B._ready = null),
                                                                        B.getDriver(kt).then(lt).catch(Ct)
                                                                    );
                                                                }
                                                                it();
                                                                var ae = new Error(
                                                                    "No available storage method found."
                                                                );
                                                                return (B._driverSet = g.reject(ae)), B._driverSet;
                                                            }
                                                            return Ct();
                                                        };
                                                    }
                                                    var ct =
                                                        this._driverSet !== null
                                                            ? this._driverSet.catch(function () {
                                                                  return g.resolve();
                                                              })
                                                            : g.resolve();
                                                    return (
                                                        (this._driverSet = ct
                                                            .then(function () {
                                                                var ht = tt[0];
                                                                return (
                                                                    (B._dbInfo = null),
                                                                    (B._ready = null),
                                                                    B.getDriver(ht).then(function (Tt) {
                                                                        (B._driver = Tt._driver),
                                                                            it(),
                                                                            B._wrapLibraryMethodsWithReady(),
                                                                            (B._initDriver = ot(tt));
                                                                    })
                                                                );
                                                            })
                                                            .catch(function () {
                                                                it();
                                                                var ht = new Error(
                                                                    "No available storage method found."
                                                                );
                                                                return (B._driverSet = g.reject(ht)), B._driverSet;
                                                            })),
                                                        O(this._driverSet, L, j),
                                                        this._driverSet
                                                    );
                                                }),
                                                (b.prototype.supports = function (S) {
                                                    return !!fe[S];
                                                }),
                                                (b.prototype._extend = function (S) {
                                                    Ba(this, S);
                                                }),
                                                (b.prototype._getSupportedDrivers = function (S) {
                                                    for (var L = [], j = 0, B = S.length; j < B; j++) {
                                                        var tt = S[j];
                                                        this.supports(tt) && L.push(tt);
                                                    }
                                                    return L;
                                                }),
                                                (b.prototype._wrapLibraryMethodsWithReady = function () {
                                                    for (var S = 0, L = Dn.length; S < L; S++) bs(this, Dn[S]);
                                                }),
                                                (b.prototype.createInstance = function (S) {
                                                    return new b(S);
                                                }),
                                                b
                                            );
                                        })(),
                                        Ua = new Vl();
                                    o.exports = Ua;
                                },
                                { 3: 3 },
                            ],
                        },
                        {},
                        [4]
                    )(4);
                });
            })(md)),
        md.exports
    );
}
var dO = fO();
const hO = Ko(dO),
    mO = {
        1: (n) => ({ ...n, game: { archive: [], currentGameIdx: 0 } }),
        2: (n) => ({ ...n, game: { ...n.game, archive: n.game.archive.filter((r) => r.idx <= 487) } }),
        3: (n) => ({
            ...n,
            game: {
                ...n.game,
                archive: (n.game?.archive || []).map((r) => ({
                    id: r.id,
                    idx: r.idx,
                    board: [],
                    words: [],
                    bonusWords: [],
                    definitions: [],
                    x5: r.x5 || "",
                    foundWords: r.foundWords || [],
                    foundBonusWords: r.foundBonusWords || [],
                    hintsLeft: r.hintsLeft ?? 3,
                    letterStartTriggered: r.letterStartTriggered ?? !1,
                    letterTotalTriggered: r.letterTotalTriggered ?? !1,
                    shareUsed: r.shareUsed ?? !1,
                })),
            },
        }),
        4: (n) => ({
            ...n,
            game: {
                ...n.game,
                archive: (n.game?.archive || []).map((r) => ({
                    ...r,
                    gridSize: r.gridSize ?? (r.board?.length > 0 ? r.board.length : 4),
                    totalWords: r.totalWords ?? (r.words?.length > 0 ? r.words.length : void 0),
                })),
            },
        }),
        5: (n) => ({
            ...n,
            game: {
                ...n.game,
                archive: (n.game?.archive || []).map((r) => ({
                    ...r,
                    totalWords:
                        r.totalWords != null ? r.totalWords : r.foundWords?.length > 0 ? r.foundWords.length : void 0,
                })),
            },
        }),
    },
    pO = cO(
        (n) =>
            n?.archive
                ? {
                      ...n,
                      archive: n.archive.map((r) => ({
                          id: r.id,
                          idx: r.idx,
                          board: [],
                          words: [],
                          bonusWords: [],
                          definitions: [],
                          x5: r.x5 || "",
                          foundWords: r.foundWords || [],
                          foundBonusWords: r.foundBonusWords || [],
                          hintsLeft: r.hintsLeft ?? 3,
                          letterStartTriggered: r.letterStartTriggered ?? !1,
                          letterTotalTriggered: r.letterTotalTriggered ?? !1,
                          shareUsed: r.shareUsed ?? !1,
                          gridSize: r.gridSize ?? (r.board?.length > 0 ? r.board.length : void 0),
                          totalWords: r.totalWords ?? (r.words?.length > 0 ? r.words.length : void 0),
                      })),
                  }
                : n,
        (n) => n,
        { whitelist: ["game"] }
    ),
    yO = {
        timeout: 0,
        key: "root",
        version: 5,
        storage: hO,
        whitelist: ["options", "game"],
        stateReconciler: eO,
        migrate: lO(mO),
        transforms: [pO],
    },
    gO = Jw(yO, jw),
    y_ = UE({
        reducer: gO,
        middleware: (n) => n({ immutableCheck: !1, serializableCheck: { ignoredActions: [xh, Cl, wh, Oh, Dh, Ah] } }),
        devTools: !1,
    }),
    vO = uO(y_),
    bC = WS,
    SC = JS,
    Et = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Pt = globalThis,
    Ea = "10.46.0";
function Rl() {
    return Nl(Pt), Pt;
}
function Nl(n) {
    const r = (n.__SENTRY__ = n.__SENTRY__ || {});
    return (r.version = r.version || Ea), (r[Ea] = r[Ea] || {});
}
function Di(n, r, i = Pt) {
    const o = (i.__SENTRY__ = i.__SENTRY__ || {}),
        u = (o[Ea] = o[Ea] || {});
    return u[n] || (u[n] = r());
}
const _O = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    bO = "Sentry Logger ",
    pl = {};
function Ai(n) {
    if (!("console" in Pt)) return n();
    const r = Pt.console,
        i = {},
        o = Object.keys(pl);
    o.forEach((u) => {
        const f = pl[u];
        (i[u] = r[u]), (r[u] = f);
    });
    try {
        return n();
    } finally {
        o.forEach((u) => {
            r[u] = i[u];
        });
    }
}
function SO() {
    Ch().enabled = !0;
}
function EO() {
    Ch().enabled = !1;
}
function g_() {
    return Ch().enabled;
}
function TO(...n) {
    Mh("log", ...n);
}
function xO(...n) {
    Mh("warn", ...n);
}
function wO(...n) {
    Mh("error", ...n);
}
function Mh(n, ...r) {
    Et &&
        g_() &&
        Ai(() => {
            Pt.console[n](`${bO}[${n}]:`, ...r);
        });
}
function Ch() {
    return Et ? Di("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const _t = { enable: SO, disable: EO, isEnabled: g_, log: TO, warn: xO, error: wO },
    v_ = 50,
    wa = "?",
    xv = /\(error: (.*)\)/,
    wv = /captureMessage|captureException/;
function __(...n) {
    const r = n.sort((i, o) => i[0] - o[0]).map((i) => i[1]);
    return (i, o = 0, u = 0) => {
        const f = [],
            d = i.split(`
`);
        for (let y = o; y < d.length; y++) {
            let p = d[y];
            p.length > 1024 && (p = p.slice(0, 1024));
            const m = xv.test(p) ? p.replace(xv, "$1") : p;
            if (!m.match(/\S*Error: /)) {
                for (const _ of r) {
                    const g = _(m);
                    if (g) {
                        f.push(g);
                        break;
                    }
                }
                if (f.length >= v_ + u) break;
            }
        }
        return DO(f.slice(u));
    };
}
function OO(n) {
    return Array.isArray(n) ? __(...n) : n;
}
function DO(n) {
    if (!n.length) return [];
    const r = Array.from(n);
    return (
        /sentryWrapped/.test(zu(r).function || "") && r.pop(),
        r.reverse(),
        wv.test(zu(r).function || "") && (r.pop(), wv.test(zu(r).function || "") && r.pop()),
        r.slice(0, v_).map((i) => ({ ...i, filename: i.filename || zu(r).filename, function: i.function || wa }))
    );
}
function zu(n) {
    return n[n.length - 1] || {};
}
const pd = "<anonymous>";
function qr(n) {
    try {
        return !n || typeof n != "function" ? pd : n.name || pd;
    } catch {
        return pd;
    }
}
function Ov(n) {
    const r = n.exception;
    if (r) {
        const i = [];
        try {
            return (
                r.values.forEach((o) => {
                    o.stacktrace.frames && i.push(...o.stacktrace.frames);
                }),
                i
            );
        } catch {
            return;
        }
    }
}
function b_(n) {
    return "__v_isVNode" in n && n.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const $u = {},
    Dv = {};
function Da(n, r) {
    ($u[n] = $u[n] || []), $u[n].push(r);
}
function Aa(n, r) {
    if (!Dv[n]) {
        Dv[n] = !0;
        try {
            r();
        } catch (i) {
            Et && _t.error(`Error while instrumenting ${n}`, i);
        }
    }
}
function En(n, r) {
    const i = n && $u[n];
    if (i)
        for (const o of i)
            try {
                o(r);
            } catch (u) {
                Et &&
                    _t.error(
                        `Error while triggering instrumentation handler.
Type: ${n}
Name: ${qr(o)}
Error:`,
                        u
                    );
            }
}
let yd = null;
function AO(n) {
    const r = "error";
    Da(r, n), Aa(r, MO);
}
function MO() {
    (yd = Pt.onerror),
        (Pt.onerror = function (n, r, i, o, u) {
            return En("error", { column: o, error: u, line: i, msg: n, url: r }), yd ? yd.apply(this, arguments) : !1;
        }),
        (Pt.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let gd = null;
function CO(n) {
    const r = "unhandledrejection";
    Da(r, n), Aa(r, RO);
}
function RO() {
    (gd = Pt.onunhandledrejection),
        (Pt.onunhandledrejection = function (n) {
            return En("unhandledrejection", n), gd ? gd.apply(this, arguments) : !0;
        }),
        (Pt.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
const S_ = Object.prototype.toString;
function zl(n) {
    switch (S_.call(n)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return Gr(n, Error);
    }
}
function Mi(n, r) {
    return S_.call(n) === `[object ${r}]`;
}
function E_(n) {
    return Mi(n, "ErrorEvent");
}
function Av(n) {
    return Mi(n, "DOMError");
}
function NO(n) {
    return Mi(n, "DOMException");
}
function nr(n) {
    return Mi(n, "String");
}
function Rh(n) {
    return typeof n == "object" && n !== null && "__sentry_template_string__" in n && "__sentry_template_values__" in n;
}
function Bl(n) {
    return n === null || Rh(n) || (typeof n != "object" && typeof n != "function");
}
function Qo(n) {
    return Mi(n, "Object");
}
function Ul(n) {
    return typeof Event < "u" && Gr(n, Event);
}
function zO(n) {
    return typeof Element < "u" && Gr(n, Element);
}
function BO(n) {
    return Mi(n, "RegExp");
}
function $o(n) {
    return !!(n?.then && typeof n.then == "function");
}
function UO(n) {
    return Qo(n) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n;
}
function Gr(n, r) {
    try {
        return n instanceof r;
    } catch {
        return !1;
    }
}
function T_(n) {
    return !!(typeof n == "object" && n !== null && (n.__isVue || n._isVue || n.__v_isVNode));
}
function x_(n) {
    return typeof Request < "u" && Gr(n, Request);
}
const Nh = Pt,
    LO = 80;
function w_(n, r = {}) {
    if (!n) return "<unknown>";
    try {
        let i = n;
        const o = 5,
            u = [];
        let f = 0,
            d = 0;
        const y = " > ",
            p = y.length;
        let m;
        const _ = Array.isArray(r) ? r : r.keyAttrs,
            g = (!Array.isArray(r) && r.maxStringLength) || LO;
        for (; i && f++ < o && ((m = HO(i, _)), !(m === "html" || (f > 1 && d + u.length * p + m.length >= g))); )
            u.push(m), (d += m.length), (i = i.parentNode);
        return u.reverse().join(y);
    } catch {
        return "<unknown>";
    }
}
function HO(n, r) {
    const i = n,
        o = [];
    if (!i?.tagName) return "";
    if (Nh.HTMLElement && i instanceof HTMLElement && i.dataset) {
        if (i.dataset.sentryComponent) return i.dataset.sentryComponent;
        if (i.dataset.sentryElement) return i.dataset.sentryElement;
    }
    o.push(i.tagName.toLowerCase());
    const u = r?.length ? r.filter((f) => i.getAttribute(f)).map((f) => [f, i.getAttribute(f)]) : null;
    if (u?.length)
        u.forEach((f) => {
            o.push(`[${f[0]}="${f[1]}"]`);
        });
    else {
        i.id && o.push(`#${i.id}`);
        const f = i.className;
        if (f && nr(f)) {
            const d = f.split(/\s+/);
            for (const y of d) o.push(`.${y}`);
        }
    }
    for (const f of ["aria-label", "type", "name", "title", "alt"]) {
        const d = i.getAttribute(f);
        d && o.push(`[${f}="${d}"]`);
    }
    return o.join("");
}
function zh() {
    try {
        return Nh.document.location.href;
    } catch {
        return "";
    }
}
function kO(n) {
    if (!Nh.HTMLElement) return null;
    let r = n;
    const i = 5;
    for (let o = 0; o < i; o++) {
        if (!r) return null;
        if (r instanceof HTMLElement) {
            if (r.dataset.sentryComponent) return r.dataset.sentryComponent;
            if (r.dataset.sentryElement) return r.dataset.sentryElement;
        }
        r = r.parentNode;
    }
    return null;
}
function rn(n, r, i) {
    if (!(r in n)) return;
    const o = n[r];
    if (typeof o != "function") return;
    const u = i(o);
    typeof u == "function" && O_(u, o);
    try {
        n[r] = u;
    } catch {
        Et && _t.log(`Failed to replace method "${r}" in object`, n);
    }
}
function Ir(n, r, i) {
    try {
        Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 });
    } catch {
        Et && _t.log(`Failed to add non-enumerable property "${r}" to object`, n);
    }
}
function O_(n, r) {
    try {
        const i = r.prototype || {};
        (n.prototype = r.prototype = i), Ir(n, "__sentry_original__", r);
    } catch {}
}
function Bh(n) {
    return n.__sentry_original__;
}
function D_(n) {
    if (zl(n)) return { message: n.message, name: n.name, stack: n.stack, ...Cv(n) };
    if (Ul(n)) {
        const r = { type: n.type, target: Mv(n.target), currentTarget: Mv(n.currentTarget), ...Cv(n) };
        return typeof CustomEvent < "u" && Gr(n, CustomEvent) && (r.detail = n.detail), r;
    } else return n;
}
function Mv(n) {
    try {
        return zO(n) ? w_(n) : Object.prototype.toString.call(n);
    } catch {
        return "<unknown>";
    }
}
function Cv(n) {
    return typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n)) : {};
}
function jO(n) {
    const r = Object.keys(D_(n));
    return r.sort(), r[0] ? r.join(", ") : "[object has no keys]";
}
let gi;
function Ll(n) {
    if (gi !== void 0) return gi ? gi(n) : n();
    const r = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
        i = Pt;
    return r in i && typeof i[r] == "function" ? ((gi = i[r]), gi(n)) : ((gi = null), n());
}
function yl() {
    return Ll(() => Math.random());
}
function Hl() {
    return Ll(() => Date.now());
}
function qd(n, r = 0) {
    return typeof n != "string" || r === 0 || n.length <= r ? n : `${n.slice(0, r)}...`;
}
function Rv(n, r) {
    if (!Array.isArray(n)) return "";
    const i = [];
    for (let o = 0; o < n.length; o++) {
        const u = n[o];
        try {
            T_(u) ? i.push(b_(u)) : i.push(String(u));
        } catch {
            i.push("[value cannot be serialized]");
        }
    }
    return i.join(r);
}
function Ju(n, r, i = !1) {
    return nr(n) ? (BO(r) ? r.test(n) : nr(r) ? (i ? n === r : n.includes(r)) : !1) : !1;
}
function kl(n, r = [], i = !1) {
    return r.some((o) => Ju(n, o, i));
}
function YO() {
    const n = Pt;
    return n.crypto || n.msCrypto;
}
let vd;
function qO() {
    return yl() * 16;
}
function yn(n = YO()) {
    try {
        if (n?.randomUUID) return Ll(() => n.randomUUID()).replace(/-/g, "");
    } catch {}
    return (
        vd || (vd = "10000000100040008000" + 1e11),
        vd.replace(/[018]/g, (r) => (r ^ ((qO() & 15) >> (r / 4))).toString(16))
    );
}
function A_(n) {
    return n.exception?.values?.[0];
}
function _a(n) {
    const { message: r, event_id: i } = n;
    if (r) return r;
    const o = A_(n);
    return o ? (o.type && o.value ? `${o.type}: ${o.value}` : o.type || o.value || i || "<unknown>") : i || "<unknown>";
}
function Gd(n, r, i) {
    const o = (n.exception = n.exception || {}),
        u = (o.values = o.values || []),
        f = (u[0] = u[0] || {});
    f.value || (f.value = r || ""), f.type || (f.type = "Error");
}
function Si(n, r) {
    const i = A_(n);
    if (!i) return;
    const o = { type: "generic", handled: !0 },
        u = i.mechanism;
    if (((i.mechanism = { ...o, ...u, ...r }), r && "data" in r)) {
        const f = { ...u?.data, ...r.data };
        i.mechanism.data = f;
    }
}
function Nv(n) {
    if (GO(n)) return !0;
    try {
        Ir(n, "__sentry_captured__", !0);
    } catch {}
    return !1;
}
function GO(n) {
    try {
        return n.__sentry_captured__;
    } catch {}
}
const M_ = 1e3;
function Jo() {
    return Hl() / M_;
}
function IO() {
    const { performance: n } = Pt;
    if (!n?.now || !n.timeOrigin) return Jo;
    const r = n.timeOrigin;
    return () => (r + Ll(() => n.now())) / M_;
}
let zv;
function rr() {
    return (zv ?? (zv = IO()))();
}
function XO(n) {
    const r = rr(),
        i = {
            sid: yn(),
            init: !0,
            timestamp: r,
            started: r,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => VO(i),
        };
    return n && Ei(i, n), i;
}
function Ei(n, r = {}) {
    if (
        (r.user &&
            (!n.ipAddress && r.user.ip_address && (n.ipAddress = r.user.ip_address),
            !n.did && !r.did && (n.did = r.user.id || r.user.email || r.user.username)),
        (n.timestamp = r.timestamp || rr()),
        r.abnormal_mechanism && (n.abnormal_mechanism = r.abnormal_mechanism),
        r.ignoreDuration && (n.ignoreDuration = r.ignoreDuration),
        r.sid && (n.sid = r.sid.length === 32 ? r.sid : yn()),
        r.init !== void 0 && (n.init = r.init),
        !n.did && r.did && (n.did = `${r.did}`),
        typeof r.started == "number" && (n.started = r.started),
        n.ignoreDuration)
    )
        n.duration = void 0;
    else if (typeof r.duration == "number") n.duration = r.duration;
    else {
        const i = n.timestamp - n.started;
        n.duration = i >= 0 ? i : 0;
    }
    r.release && (n.release = r.release),
        r.environment && (n.environment = r.environment),
        !n.ipAddress && r.ipAddress && (n.ipAddress = r.ipAddress),
        !n.userAgent && r.userAgent && (n.userAgent = r.userAgent),
        typeof r.errors == "number" && (n.errors = r.errors),
        r.status && (n.status = r.status);
}
function QO(n, r) {
    let i = {};
    n.status === "ok" && (i = { status: "exited" }), Ei(n, i);
}
function VO(n) {
    return {
        sid: `${n.sid}`,
        init: n.init,
        started: new Date(n.started * 1e3).toISOString(),
        timestamp: new Date(n.timestamp * 1e3).toISOString(),
        status: n.status,
        errors: n.errors,
        did: typeof n.did == "number" || typeof n.did == "string" ? `${n.did}` : void 0,
        duration: n.duration,
        abnormal_mechanism: n.abnormal_mechanism,
        attrs: { release: n.release, environment: n.environment, ip_address: n.ipAddress, user_agent: n.userAgent },
    };
}
function ts(n, r, i = 2) {
    if (!r || typeof r != "object" || i <= 0) return r;
    if (n && Object.keys(r).length === 0) return n;
    const o = { ...n };
    for (const u in r) Object.prototype.hasOwnProperty.call(r, u) && (o[u] = ts(o[u], r[u], i - 1));
    return o;
}
function Bv() {
    return yn();
}
function C_() {
    return yn().substring(16);
}
const Id = "_sentrySpan";
function Uv(n, r) {
    r ? Ir(n, Id, r) : delete n[Id];
}
function Lv(n) {
    return n[Id];
}
const PO = 100;
class or {
    constructor() {
        (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._attributes = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = { traceId: Bv(), sampleRand: yl() });
    }
    clone() {
        const r = new or();
        return (
            (r._breadcrumbs = [...this._breadcrumbs]),
            (r._tags = { ...this._tags }),
            (r._attributes = { ...this._attributes }),
            (r._extra = { ...this._extra }),
            (r._contexts = { ...this._contexts }),
            this._contexts.flags && (r._contexts.flags = { values: [...this._contexts.flags.values] }),
            (r._user = this._user),
            (r._level = this._level),
            (r._session = this._session),
            (r._transactionName = this._transactionName),
            (r._fingerprint = this._fingerprint),
            (r._eventProcessors = [...this._eventProcessors]),
            (r._attachments = [...this._attachments]),
            (r._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (r._propagationContext = { ...this._propagationContext }),
            (r._client = this._client),
            (r._lastEventId = this._lastEventId),
            (r._conversationId = this._conversationId),
            Uv(r, Lv(this)),
            r
        );
    }
    setClient(r) {
        this._client = r;
    }
    setLastEventId(r) {
        this._lastEventId = r;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(r) {
        this._scopeListeners.push(r);
    }
    addEventProcessor(r) {
        return this._eventProcessors.push(r), this;
    }
    setUser(r) {
        return (
            (this._user = r || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
            this._session && Ei(this._session, { user: r }),
            this._notifyScopeListeners(),
            this
        );
    }
    getUser() {
        return this._user;
    }
    setConversationId(r) {
        return (this._conversationId = r || void 0), this._notifyScopeListeners(), this;
    }
    setTags(r) {
        return (this._tags = { ...this._tags, ...r }), this._notifyScopeListeners(), this;
    }
    setTag(r, i) {
        return this.setTags({ [r]: i });
    }
    setAttributes(r) {
        return (this._attributes = { ...this._attributes, ...r }), this._notifyScopeListeners(), this;
    }
    setAttribute(r, i) {
        return this.setAttributes({ [r]: i });
    }
    removeAttribute(r) {
        return r in this._attributes && (delete this._attributes[r], this._notifyScopeListeners()), this;
    }
    setExtras(r) {
        return (this._extra = { ...this._extra, ...r }), this._notifyScopeListeners(), this;
    }
    setExtra(r, i) {
        return (this._extra = { ...this._extra, [r]: i }), this._notifyScopeListeners(), this;
    }
    setFingerprint(r) {
        return (this._fingerprint = r), this._notifyScopeListeners(), this;
    }
    setLevel(r) {
        return (this._level = r), this._notifyScopeListeners(), this;
    }
    setTransactionName(r) {
        return (this._transactionName = r), this._notifyScopeListeners(), this;
    }
    setContext(r, i) {
        return i === null ? delete this._contexts[r] : (this._contexts[r] = i), this._notifyScopeListeners(), this;
    }
    setSession(r) {
        return r ? (this._session = r) : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(r) {
        if (!r) return this;
        const i = typeof r == "function" ? r(this) : r,
            o = i instanceof or ? i.getScopeData() : Qo(i) ? r : void 0,
            {
                tags: u,
                attributes: f,
                extra: d,
                user: y,
                contexts: p,
                level: m,
                fingerprint: _ = [],
                propagationContext: g,
                conversationId: T,
            } = o || {};
        return (
            (this._tags = { ...this._tags, ...u }),
            (this._attributes = { ...this._attributes, ...f }),
            (this._extra = { ...this._extra, ...d }),
            (this._contexts = { ...this._contexts, ...p }),
            y && Object.keys(y).length && (this._user = y),
            m && (this._level = m),
            _.length && (this._fingerprint = _),
            g && (this._propagationContext = g),
            T && (this._conversationId = T),
            this
        );
    }
    clear() {
        return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._attributes = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._session = void 0),
            (this._conversationId = void 0),
            Uv(this, void 0),
            (this._attachments = []),
            this.setPropagationContext({ traceId: Bv(), sampleRand: yl() }),
            this._notifyScopeListeners(),
            this
        );
    }
    addBreadcrumb(r, i) {
        const o = typeof i == "number" ? i : PO;
        if (o <= 0) return this;
        const u = { timestamp: Jo(), ...r, message: r.message ? qd(r.message, 2048) : r.message };
        return (
            this._breadcrumbs.push(u),
            this._breadcrumbs.length > o &&
                ((this._breadcrumbs = this._breadcrumbs.slice(-o)),
                this._client?.recordDroppedEvent("buffer_overflow", "log_item")),
            this._notifyScopeListeners(),
            this
        );
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(r) {
        return this._attachments.push(r), this;
    }
    clearAttachments() {
        return (this._attachments = []), this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            attributes: this._attributes,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Lv(this),
            conversationId: this._conversationId,
        };
    }
    setSDKProcessingMetadata(r) {
        return (this._sdkProcessingMetadata = ts(this._sdkProcessingMetadata, r, 2)), this;
    }
    setPropagationContext(r) {
        return (this._propagationContext = r), this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(r, i) {
        const o = i?.event_id || yn();
        if (!this._client) return Et && _t.warn("No client configured on scope - will not capture exception!"), o;
        const u = new Error("Sentry syntheticException");
        return (
            this._client.captureException(r, { originalException: r, syntheticException: u, ...i, event_id: o }, this),
            o
        );
    }
    captureMessage(r, i, o) {
        const u = o?.event_id || yn();
        if (!this._client) return Et && _t.warn("No client configured on scope - will not capture message!"), u;
        const f = o?.syntheticException ?? new Error(r);
        return (
            this._client.captureMessage(r, i, { originalException: r, syntheticException: f, ...o, event_id: u }, this),
            u
        );
    }
    captureEvent(r, i) {
        const o = r.event_id || i?.event_id || yn();
        return this._client
            ? (this._client.captureEvent(r, { ...i, event_id: o }, this), o)
            : (Et && _t.warn("No client configured on scope - will not capture event!"), o);
    }
    _notifyScopeListeners() {
        this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((r) => {
                r(this);
            }),
            (this._notifyingListeners = !1));
    }
}
function KO() {
    return Di("defaultCurrentScope", () => new or());
}
function ZO() {
    return Di("defaultIsolationScope", () => new or());
}
const Hv = (n) => n instanceof Promise && !n[R_],
    R_ = Symbol("chained PromiseLike"),
    WO = (n, r, i) => {
        const o = n.then(
            (u) => (r(u), u),
            (u) => {
                throw (i(u), u);
            }
        );
        return Hv(o) && Hv(n) ? o : FO(n, o);
    },
    FO = (n, r) => {
        let i = !1;
        for (const o in n) {
            if (o in r) continue;
            i = !0;
            const u = n[o];
            typeof u == "function"
                ? Object.defineProperty(r, o, {
                      value: (...f) => u.apply(n, f),
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (r[o] = u);
        }
        return i && Object.assign(r, { [R_]: !0 }), r;
    };
class $O {
    constructor(r, i) {
        let o;
        r ? (o = r) : (o = new or());
        let u;
        i ? (u = i) : (u = new or()), (this._stack = [{ scope: o }]), (this._isolationScope = u);
    }
    withScope(r) {
        const i = this._pushScope();
        let o;
        try {
            o = r(i);
        } catch (u) {
            throw (this._popScope(), u);
        }
        return $o(o)
            ? WO(
                  o,
                  () => this._popScope(),
                  () => this._popScope()
              )
            : (this._popScope(), o);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        const r = this.getScope().clone();
        return this._stack.push({ client: this.getClient(), scope: r }), r;
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop();
    }
}
function Ti() {
    const n = Rl(),
        r = Nl(n);
    return (r.stack = r.stack || new $O(KO(), ZO()));
}
function JO(n) {
    return Ti().withScope(n);
}
function t3(n, r) {
    const i = Ti();
    return i.withScope(() => ((i.getStackTop().scope = n), r(n)));
}
function kv(n) {
    return Ti().withScope(() => n(Ti().getIsolationScope()));
}
function e3() {
    return {
        withIsolationScope: kv,
        withScope: JO,
        withSetScope: t3,
        withSetIsolationScope: (n, r) => kv(r),
        getCurrentScope: () => Ti().getScope(),
        getIsolationScope: () => Ti().getIsolationScope(),
    };
}
function Uh(n) {
    const r = Nl(n);
    return r.acs ? r.acs : e3();
}
function sr() {
    const n = Rl();
    return Uh(n).getCurrentScope();
}
function Qr() {
    const n = Rl();
    return Uh(n).getIsolationScope();
}
function n3() {
    return Di("globalScope", () => new or());
}
function r3(...n) {
    const r = Rl(),
        i = Uh(r);
    if (n.length === 2) {
        const [o, u] = n;
        return o ? i.withSetScope(o, u) : i.withScope(u);
    }
    return i.withScope(n[0]);
}
function Ue() {
    return sr().getClient();
}
function a3(n) {
    const r = n.getPropagationContext(),
        { traceId: i, parentSpanId: o, propagationSpanId: u } = r,
        f = { trace_id: i, span_id: u || C_() };
    return o && (f.parent_span_id = o), f;
}
const i3 = "sentry.source",
    o3 = "sentry.sample_rate",
    s3 = "sentry.previous_trace_sample_rate",
    u3 = "sentry.op",
    l3 = "sentry.origin",
    N_ = "sentry.profile_id",
    z_ = "sentry.exclusive_time",
    c3 = "gen_ai.conversation.id",
    f3 = 0,
    d3 = 1,
    h3 = "_sentryScope",
    m3 = "_sentryIsolationScope";
function p3(n) {
    if (n) {
        if (typeof n == "object" && "deref" in n && typeof n.deref == "function")
            try {
                return n.deref();
            } catch {
                return;
            }
        return n;
    }
}
function B_(n) {
    const r = n;
    return { scope: r[h3], isolationScope: p3(r[m3]) };
}
const jv = "sentry-";
function y3(n) {
    const r = g3(n);
    if (!r) return;
    const i = Object.entries(r).reduce((o, [u, f]) => {
        if (u.startsWith(jv)) {
            const d = u.slice(jv.length);
            o[d] = f;
        }
        return o;
    }, {});
    if (Object.keys(i).length > 0) return i;
}
function g3(n) {
    if (!(!n || (!nr(n) && !Array.isArray(n))))
        return Array.isArray(n)
            ? n.reduce((r, i) => {
                  const o = Yv(i);
                  return (
                      Object.entries(o).forEach(([u, f]) => {
                          r[u] = f;
                      }),
                      r
                  );
              }, {})
            : Yv(n);
}
function Yv(n) {
    return n
        .split(",")
        .map((r) => {
            const i = r.indexOf("=");
            if (i === -1) return [];
            const o = r.slice(0, i),
                u = r.slice(i + 1);
            return [o, u].map((f) => {
                try {
                    return decodeURIComponent(f.trim());
                } catch {
                    return;
                }
            });
        })
        .reduce((r, [i, o]) => (i && o && (r[i] = o), r), {});
}
const v3 = /^o(\d+)\./,
    _3 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function b3(n) {
    return n === "http" || n === "https";
}
function es(n, r = !1) {
    const { host: i, path: o, pass: u, port: f, projectId: d, protocol: y, publicKey: p } = n;
    return `${y}://${p}${r && u ? `:${u}` : ""}@${i}${f ? `:${f}` : ""}/${o && `${o}/`}${d}`;
}
function S3(n) {
    const r = _3.exec(n);
    if (!r) {
        Ai(() => {
            console.error(`Invalid Sentry Dsn: ${n}`);
        });
        return;
    }
    const [i, o, u = "", f = "", d = "", y = ""] = r.slice(1);
    let p = "",
        m = y;
    const _ = m.split("/");
    if ((_.length > 1 && ((p = _.slice(0, -1).join("/")), (m = _.pop())), m)) {
        const g = m.match(/^\d+/);
        g && (m = g[0]);
    }
    return U_({ host: f, pass: u, path: p, projectId: m, port: d, protocol: i, publicKey: o });
}
function U_(n) {
    return {
        protocol: n.protocol,
        publicKey: n.publicKey || "",
        pass: n.pass || "",
        host: n.host,
        port: n.port || "",
        path: n.path || "",
        projectId: n.projectId,
    };
}
function E3(n) {
    if (!Et) return !0;
    const { port: r, projectId: i, protocol: o } = n;
    return ["protocol", "publicKey", "host", "projectId"].find((d) =>
        n[d] ? !1 : (_t.error(`Invalid Sentry Dsn: ${d} missing`), !0)
    )
        ? !1
        : i.match(/^\d+$/)
          ? b3(o)
              ? r && isNaN(parseInt(r, 10))
                  ? (_t.error(`Invalid Sentry Dsn: Invalid port ${r}`), !1)
                  : !0
              : (_t.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), !1)
          : (_t.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1);
}
function T3(n) {
    return n.match(v3)?.[1];
}
function x3(n) {
    const r = n.getOptions(),
        { host: i } = n.getDsn() || {};
    let o;
    return r.orgId ? (o = String(r.orgId)) : i && (o = T3(i)), o;
}
function w3(n) {
    const r = typeof n == "string" ? S3(n) : U_(n);
    if (!(!r || !E3(r))) return r;
}
function O3(n) {
    if (typeof n == "boolean") return Number(n);
    const r = typeof n == "string" ? parseFloat(n) : n;
    if (!(typeof r != "number" || isNaN(r) || r < 0 || r > 1)) return r;
}
const L_ = 1;
let qv = !1;
function D3(n) {
    const { spanId: r, traceId: i, isRemote: o } = n.spanContext(),
        u = o ? r : Lh(n).parent_span_id,
        f = B_(n).scope,
        d = o ? f?.getPropagationContext().propagationSpanId || C_() : r;
    return { parent_span_id: u, span_id: d, trace_id: i };
}
function A3(n) {
    if (n && n.length > 0)
        return n.map(({ context: { spanId: r, traceId: i, traceFlags: o, ...u }, attributes: f }) => ({
            span_id: r,
            trace_id: i,
            sampled: o === L_,
            attributes: f,
            ...u,
        }));
}
function Gv(n) {
    return typeof n == "number"
        ? Iv(n)
        : Array.isArray(n)
          ? n[0] + n[1] / 1e9
          : n instanceof Date
            ? Iv(n.getTime())
            : rr();
}
function Iv(n) {
    return n > 9999999999 ? n / 1e3 : n;
}
function Lh(n) {
    if (C3(n)) return n.getSpanJSON();
    const { spanId: r, traceId: i } = n.spanContext();
    if (M3(n)) {
        const { attributes: o, startTime: u, name: f, endTime: d, status: y, links: p } = n,
            m = "parentSpanId" in n ? n.parentSpanId : "parentSpanContext" in n ? n.parentSpanContext?.spanId : void 0;
        return {
            span_id: r,
            trace_id: i,
            data: o,
            description: f,
            parent_span_id: m,
            start_timestamp: Gv(u),
            timestamp: Gv(d) || void 0,
            status: N3(y),
            op: o[u3],
            origin: o[l3],
            links: A3(p),
        };
    }
    return { span_id: r, trace_id: i, start_timestamp: 0, data: {} };
}
function M3(n) {
    const r = n;
    return !!r.attributes && !!r.startTime && !!r.name && !!r.endTime && !!r.status;
}
function C3(n) {
    return typeof n.getSpanJSON == "function";
}
function R3(n) {
    const { traceFlags: r } = n.spanContext();
    return r === L_;
}
function N3(n) {
    if (!(!n || n.code === f3)) return n.code === d3 ? "ok" : n.message || "internal_error";
}
const z3 = "_sentryRootSpan";
function H_(n) {
    return n[z3] || n;
}
function Xv() {
    qv ||
        (Ai(() => {
            console.warn(
                "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
            );
        }),
        (qv = !0));
}
function B3(n) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const r = Ue()?.getOptions();
    return !!r && (r.tracesSampleRate != null || !!r.tracesSampler);
}
function Qv(n) {
    _t.log(`Ignoring span ${n.op} - ${n.description} because it matches \`ignoreSpans\`.`);
}
function Vv(n, r) {
    if (!r?.length || !n.description) return !1;
    for (const i of r) {
        if (L3(i)) {
            if (Ju(n.description, i)) return Et && Qv(n), !0;
            continue;
        }
        if (!i.name && !i.op) continue;
        const o = i.name ? Ju(n.description, i.name) : !0,
            u = i.op ? n.op && Ju(n.op, i.op) : !0;
        if (o && u) return Et && Qv(n), !0;
    }
    return !1;
}
function U3(n, r) {
    const i = r.parent_span_id,
        o = r.span_id;
    if (i) for (const u of n) u.parent_span_id === o && (u.parent_span_id = i);
}
function L3(n) {
    return typeof n == "string" || n instanceof RegExp;
}
const Hh = "production",
    H3 = "_frozenDsc";
function k_(n, r) {
    const i = r.getOptions(),
        { publicKey: o } = r.getDsn() || {},
        u = { environment: i.environment || Hh, release: i.release, public_key: o, trace_id: n, org_id: x3(r) };
    return r.emit("createDsc", u), u;
}
function k3(n, r) {
    const i = r.getPropagationContext();
    return i.dsc || k_(i.traceId, n);
}
function j3(n) {
    const r = Ue();
    if (!r) return {};
    const i = H_(n),
        o = Lh(i),
        u = o.data,
        f = i.spanContext().traceState,
        d = f?.get("sentry.sample_rate") ?? u[o3] ?? u[s3];
    function y(k) {
        return (typeof d == "number" || typeof d == "string") && (k.sample_rate = `${d}`), k;
    }
    const p = i[H3];
    if (p) return y(p);
    const m = f?.get("sentry.dsc"),
        _ = m && y3(m);
    if (_) return y(_);
    const g = k_(n.spanContext().traceId, r),
        T = u[i3],
        O = o.description;
    return (
        T !== "url" && O && (g.transaction = O),
        B3() &&
            ((g.sampled = String(R3(i))),
            (g.sample_rand =
                f?.get("sentry.sample_rand") ?? B_(i).scope?.getPropagationContext().sampleRand.toString())),
        y(g),
        r.emit("createDsc", g, i),
        g
    );
}
function Jn(n, r = 100, i = 1 / 0) {
    try {
        return Xd("", n, r, i);
    } catch (o) {
        return { ERROR: `**non-serializable** (${o})` };
    }
}
function j_(n, r = 3, i = 100 * 1024) {
    const o = Jn(n, r);
    return I3(o) > i ? j_(n, r - 1, i) : o;
}
function Xd(n, r, i = 1 / 0, o = 1 / 0, u = X3()) {
    const [f, d] = u;
    if (r == null || ["boolean", "string"].includes(typeof r) || (typeof r == "number" && Number.isFinite(r))) return r;
    const y = Y3(n, r);
    if (!y.startsWith("[object ")) return y;
    if (r.__sentry_skip_normalization__) return r;
    const p =
        typeof r.__sentry_override_normalization_depth__ == "number" ? r.__sentry_override_normalization_depth__ : i;
    if (p === 0) return y.replace("object ", "");
    if (f(r)) return "[Circular ~]";
    const m = r;
    if (m && typeof m.toJSON == "function")
        try {
            const O = m.toJSON();
            return Xd("", O, p - 1, o, u);
        } catch {}
    const _ = Array.isArray(r) ? [] : {};
    let g = 0;
    const T = D_(r);
    for (const O in T) {
        if (!Object.prototype.hasOwnProperty.call(T, O)) continue;
        if (g >= o) {
            _[O] = "[MaxProperties ~]";
            break;
        }
        const k = T[O];
        (_[O] = Xd(O, k, p - 1, o, u)), g++;
    }
    return d(r), _;
}
function Y3(n, r) {
    try {
        if (n === "domain" && r && typeof r == "object" && r._events) return "[Domain]";
        if (n === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && r === global) return "[Global]";
        if (typeof window < "u" && r === window) return "[Window]";
        if (typeof document < "u" && r === document) return "[Document]";
        if (T_(r)) return b_(r);
        if (UO(r)) return "[SyntheticEvent]";
        if (typeof r == "number" && !Number.isFinite(r)) return `[${r}]`;
        if (typeof r == "function") return `[Function: ${qr(r)}]`;
        if (typeof r == "symbol") return `[${String(r)}]`;
        if (typeof r == "bigint") return `[BigInt: ${String(r)}]`;
        const i = q3(r);
        return /^HTML(\w*)Element$/.test(i) ? `[HTMLElement: ${i}]` : `[object ${i}]`;
    } catch (i) {
        return `**non-serializable** (${i})`;
    }
}
function q3(n) {
    const r = Object.getPrototypeOf(n);
    return r?.constructor ? r.constructor.name : "null prototype";
}
function G3(n) {
    return ~-encodeURI(n).split(/%..|./).length;
}
function I3(n) {
    return G3(JSON.stringify(n));
}
function X3() {
    const n = new WeakSet();
    function r(o) {
        return n.has(o) ? !0 : (n.add(o), !1);
    }
    function i(o) {
        n.delete(o);
    }
    return [r, i];
}
function Ci(n, r = []) {
    return [n, r];
}
function Q3(n, r) {
    const [i, o] = n;
    return [i, [...o, r]];
}
function Qd(n, r) {
    const i = n[1];
    for (const o of i) {
        const u = o[0].type;
        if (r(o, u)) return !0;
    }
    return !1;
}
function V3(n, r) {
    return Qd(n, (i, o) => r.includes(o));
}
function Vd(n) {
    const r = Nl(Pt);
    return r.encodePolyfill ? r.encodePolyfill(n) : new TextEncoder().encode(n);
}
function P3(n) {
    const [r, i] = n;
    let o = JSON.stringify(r);
    function u(f) {
        typeof o == "string"
            ? (o = typeof f == "string" ? o + f : [Vd(o), f])
            : o.push(typeof f == "string" ? Vd(f) : f);
    }
    for (const f of i) {
        const [d, y] = f;
        if (
            (u(`
${JSON.stringify(d)}
`),
            typeof y == "string" || y instanceof Uint8Array)
        )
            u(y);
        else {
            let p;
            try {
                p = JSON.stringify(y);
            } catch {
                p = JSON.stringify(Jn(y));
            }
            u(p);
        }
    }
    return typeof o == "string" ? o : K3(o);
}
function K3(n) {
    const r = n.reduce((u, f) => u + f.length, 0),
        i = new Uint8Array(r);
    let o = 0;
    for (const u of n) i.set(u, o), (o += u.length);
    return i;
}
function Z3(n) {
    const r = typeof n.data == "string" ? Vd(n.data) : n.data;
    return [
        {
            type: "attachment",
            length: r.length,
            filename: n.filename,
            content_type: n.contentType,
            attachment_type: n.attachmentType,
        },
        r,
    ];
}
const Y_ = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric",
};
function W3(n) {
    return n in Y_;
}
function Pv(n) {
    return W3(n) ? Y_[n] : n;
}
function q_(n) {
    if (!n?.sdk) return;
    const { name: r, version: i } = n.sdk;
    return { name: r, version: i };
}
function F3(n, r, i, o) {
    const u = n.sdkProcessingMetadata?.dynamicSamplingContext;
    return {
        event_id: n.event_id,
        sent_at: new Date().toISOString(),
        ...(r && { sdk: r }),
        ...(!!i && o && { dsn: es(o) }),
        ...(u && { trace: u }),
    };
}
function $3(n, r) {
    if (!r) return n;
    const i = n.sdk || {};
    return (
        (n.sdk = {
            ...i,
            name: i.name || r.name,
            version: i.version || r.version,
            integrations: [...(n.sdk?.integrations || []), ...(r.integrations || [])],
            packages: [...(n.sdk?.packages || []), ...(r.packages || [])],
            settings: n.sdk?.settings || r.settings ? { ...n.sdk?.settings, ...r.settings } : void 0,
        }),
        n
    );
}
function J3(n, r, i, o) {
    const u = q_(i),
        f = { sent_at: new Date().toISOString(), ...(u && { sdk: u }), ...(!!o && r && { dsn: es(r) }) },
        d = "aggregates" in n ? [{ type: "sessions" }, n] : [{ type: "session" }, n.toJSON()];
    return Ci(f, [d]);
}
function tD(n, r, i, o) {
    const u = q_(i),
        f = n.type && n.type !== "replay_event" ? n.type : "event";
    $3(n, i?.sdk);
    const d = F3(n, u, o, r);
    return delete n.sdkProcessingMetadata, Ci(d, [[{ type: f }, n]]);
}
const _d = 0,
    Kv = 1,
    Zv = 2;
function ns(n) {
    return new Vo((r) => {
        r(n);
    });
}
function kh(n) {
    return new Vo((r, i) => {
        i(n);
    });
}
class Vo {
    constructor(r) {
        (this._state = _d), (this._handlers = []), this._runExecutor(r);
    }
    then(r, i) {
        return new Vo((o, u) => {
            this._handlers.push([
                !1,
                (f) => {
                    if (!r) o(f);
                    else
                        try {
                            o(r(f));
                        } catch (d) {
                            u(d);
                        }
                },
                (f) => {
                    if (!i) u(f);
                    else
                        try {
                            o(i(f));
                        } catch (d) {
                            u(d);
                        }
                },
            ]),
                this._executeHandlers();
        });
    }
    catch(r) {
        return this.then((i) => i, r);
    }
    finally(r) {
        return new Vo((i, o) => {
            let u, f;
            return this.then(
                (d) => {
                    (f = !1), (u = d), r && r();
                },
                (d) => {
                    (f = !0), (u = d), r && r();
                }
            ).then(() => {
                if (f) {
                    o(u);
                    return;
                }
                i(u);
            });
        });
    }
    _executeHandlers() {
        if (this._state === _d) return;
        const r = this._handlers.slice();
        (this._handlers = []),
            r.forEach((i) => {
                i[0] || (this._state === Kv && i[1](this._value), this._state === Zv && i[2](this._value), (i[0] = !0));
            });
    }
    _runExecutor(r) {
        const i = (f, d) => {
                if (this._state === _d) {
                    if ($o(d)) {
                        d.then(o, u);
                        return;
                    }
                    (this._state = f), (this._value = d), this._executeHandlers();
                }
            },
            o = (f) => {
                i(Kv, f);
            },
            u = (f) => {
                i(Zv, f);
            };
        try {
            r(o, u);
        } catch (f) {
            u(f);
        }
    }
}
function eD(n, r, i, o = 0) {
    try {
        const u = Pd(r, i, n, o);
        return $o(u) ? u : ns(u);
    } catch (u) {
        return kh(u);
    }
}
function Pd(n, r, i, o) {
    const u = i[o];
    if (!n || !u) return n;
    const f = u({ ...n }, r);
    return (
        Et && f === null && _t.log(`Event processor "${u.id || "?"}" dropped event`),
        $o(f) ? f.then((d) => Pd(d, r, i, o + 1)) : Pd(f, r, i, o + 1)
    );
}
let ga, Wv, Fv, kr;
function nD(n) {
    const r = Pt._sentryDebugIds,
        i = Pt._debugIds;
    if (!r && !i) return {};
    const o = r ? Object.keys(r) : [],
        u = i ? Object.keys(i) : [];
    if (kr && o.length === Wv && u.length === Fv) return kr;
    (Wv = o.length), (Fv = u.length), (kr = {}), ga || (ga = {});
    const f = (d, y) => {
        for (const p of d) {
            const m = y[p],
                _ = ga?.[p];
            if (_ && kr && m) (kr[_[0]] = m), ga && (ga[p] = [_[0], m]);
            else if (m) {
                const g = n(p);
                for (let T = g.length - 1; T >= 0; T--) {
                    const k = g[T]?.filename;
                    if (k && kr && ga) {
                        (kr[k] = m), (ga[p] = [k, m]);
                        break;
                    }
                }
            }
        }
    };
    return r && f(o, r), i && f(u, i), kr;
}
function rD(n, r) {
    const { fingerprint: i, span: o, breadcrumbs: u, sdkProcessingMetadata: f } = r;
    aD(n, r), o && sD(n, o), uD(n, i), iD(n, u), oD(n, f);
}
function $v(n, r) {
    const {
        extra: i,
        tags: o,
        attributes: u,
        user: f,
        contexts: d,
        level: y,
        sdkProcessingMetadata: p,
        breadcrumbs: m,
        fingerprint: _,
        eventProcessors: g,
        attachments: T,
        propagationContext: O,
        transactionName: k,
        span: Y,
    } = r;
    Uo(n, "extra", i),
        Uo(n, "tags", o),
        Uo(n, "attributes", u),
        Uo(n, "user", f),
        Uo(n, "contexts", d),
        (n.sdkProcessingMetadata = ts(n.sdkProcessingMetadata, p, 2)),
        y && (n.level = y),
        k && (n.transactionName = k),
        Y && (n.span = Y),
        m.length && (n.breadcrumbs = [...n.breadcrumbs, ...m]),
        _.length && (n.fingerprint = [...n.fingerprint, ..._]),
        g.length && (n.eventProcessors = [...n.eventProcessors, ...g]),
        T.length && (n.attachments = [...n.attachments, ...T]),
        (n.propagationContext = { ...n.propagationContext, ...O });
}
function Uo(n, r, i) {
    n[r] = ts(n[r], i, 1);
}
function G_(n, r) {
    const i = n3().getScopeData();
    return n && $v(i, n.getScopeData()), r && $v(i, r.getScopeData()), i;
}
function aD(n, r) {
    const { extra: i, tags: o, user: u, contexts: f, level: d, transactionName: y } = r;
    Object.keys(i).length && (n.extra = { ...i, ...n.extra }),
        Object.keys(o).length && (n.tags = { ...o, ...n.tags }),
        Object.keys(u).length && (n.user = { ...u, ...n.user }),
        Object.keys(f).length && (n.contexts = { ...f, ...n.contexts }),
        d && (n.level = d),
        y && n.type !== "transaction" && (n.transaction = y);
}
function iD(n, r) {
    const i = [...(n.breadcrumbs || []), ...r];
    n.breadcrumbs = i.length ? i : void 0;
}
function oD(n, r) {
    n.sdkProcessingMetadata = { ...n.sdkProcessingMetadata, ...r };
}
function sD(n, r) {
    (n.contexts = { trace: D3(r), ...n.contexts }),
        (n.sdkProcessingMetadata = { dynamicSamplingContext: j3(r), ...n.sdkProcessingMetadata });
    const i = H_(r),
        o = Lh(i).description;
    o && !n.transaction && n.type === "transaction" && (n.transaction = o);
}
function uD(n, r) {
    (n.fingerprint = n.fingerprint ? (Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint]) : []),
        r && (n.fingerprint = n.fingerprint.concat(r)),
        n.fingerprint.length || delete n.fingerprint;
}
function lD(n, r, i, o, u, f) {
    const { normalizeDepth: d = 3, normalizeMaxBreadth: y = 1e3 } = n,
        p = { ...r, event_id: r.event_id || i.event_id || yn(), timestamp: r.timestamp || Jo() },
        m = i.integrations || n.integrations.map((q) => q.name);
    cD(p, n), hD(p, m), u && u.emit("applyFrameMetadata", r), r.type === void 0 && fD(p, n.stackParser);
    const _ = pD(o, i.captureContext);
    i.mechanism && Si(p, i.mechanism);
    const g = u ? u.getEventProcessors() : [],
        T = G_(f, _),
        O = [...(i.attachments || []), ...T.attachments];
    O.length && (i.attachments = O), rD(p, T);
    const k = [...g, ...T.eventProcessors];
    return (i.data && i.data.__sentry__ === !0 ? ns(p) : eD(k, p, i)).then(
        (q) => (q && dD(q), typeof d == "number" && d > 0 ? mD(q, d, y) : q)
    );
}
function cD(n, r) {
    const { environment: i, release: o, dist: u, maxValueLength: f } = r;
    (n.environment = n.environment || i || Hh), !n.release && o && (n.release = o), !n.dist && u && (n.dist = u);
    const d = n.request;
    d?.url && f && (d.url = qd(d.url, f)),
        f &&
            n.exception?.values?.forEach((y) => {
                y.value && (y.value = qd(y.value, f));
            });
}
function fD(n, r) {
    const i = nD(r);
    n.exception?.values?.forEach((o) => {
        o.stacktrace?.frames?.forEach((u) => {
            u.filename && (u.debug_id = i[u.filename]);
        });
    });
}
function dD(n) {
    const r = {};
    if (
        (n.exception?.values?.forEach((o) => {
            o.stacktrace?.frames?.forEach((u) => {
                u.debug_id &&
                    (u.abs_path ? (r[u.abs_path] = u.debug_id) : u.filename && (r[u.filename] = u.debug_id),
                    delete u.debug_id);
            });
        }),
        Object.keys(r).length === 0)
    )
        return;
    (n.debug_meta = n.debug_meta || {}), (n.debug_meta.images = n.debug_meta.images || []);
    const i = n.debug_meta.images;
    Object.entries(r).forEach(([o, u]) => {
        i.push({ type: "sourcemap", code_file: o, debug_id: u });
    });
}
function hD(n, r) {
    r.length > 0 && ((n.sdk = n.sdk || {}), (n.sdk.integrations = [...(n.sdk.integrations || []), ...r]));
}
function mD(n, r, i) {
    if (!n) return null;
    const o = {
        ...n,
        ...(n.breadcrumbs && {
            breadcrumbs: n.breadcrumbs.map((u) => ({ ...u, ...(u.data && { data: Jn(u.data, r, i) }) })),
        }),
        ...(n.user && { user: Jn(n.user, r, i) }),
        ...(n.contexts && { contexts: Jn(n.contexts, r, i) }),
        ...(n.extra && { extra: Jn(n.extra, r, i) }),
    };
    return (
        n.contexts?.trace &&
            o.contexts &&
            ((o.contexts.trace = n.contexts.trace),
            n.contexts.trace.data && (o.contexts.trace.data = Jn(n.contexts.trace.data, r, i))),
        n.spans && (o.spans = n.spans.map((u) => ({ ...u, ...(u.data && { data: Jn(u.data, r, i) }) }))),
        n.contexts?.flags && o.contexts && (o.contexts.flags = Jn(n.contexts.flags, 3, i)),
        o
    );
}
function pD(n, r) {
    if (!r) return n;
    const i = n ? n.clone() : new or();
    return i.update(r), i;
}
function yD(n, r) {
    return sr().captureException(n, void 0);
}
function I_(n, r) {
    return sr().captureEvent(n, r);
}
function gD(n, r) {
    Qr().setContext(n, r);
}
function Jv(n) {
    const r = Qr(),
        { user: i } = G_(r, sr()),
        { userAgent: o } = Pt.navigator || {},
        u = XO({ user: i, ...(o && { userAgent: o }), ...n }),
        f = r.getSession();
    return f?.status === "ok" && Ei(f, { status: "exited" }), X_(), r.setSession(u), u;
}
function X_() {
    const n = Qr(),
        i = sr().getSession() || n.getSession();
    i && QO(i), Q_(), n.setSession();
}
function Q_() {
    const n = Qr(),
        r = Ue(),
        i = n.getSession();
    i && r && r.captureSession(i);
}
function bd(n = !1) {
    if (n) {
        X_();
        return;
    }
    Q_();
}
const vD = "7";
function _D(n) {
    const r = n.protocol ? `${n.protocol}:` : "",
        i = n.port ? `:${n.port}` : "";
    return `${r}//${n.host}${i}${n.path ? `/${n.path}` : ""}/api/`;
}
function bD(n) {
    return `${_D(n)}${n.projectId}/envelope/`;
}
function SD(n, r) {
    const i = { sentry_version: vD };
    return (
        n.publicKey && (i.sentry_key = n.publicKey),
        r && (i.sentry_client = `${r.name}/${r.version}`),
        new URLSearchParams(i).toString()
    );
}
function ED(n, r, i) {
    return r || `${bD(n)}?${SD(n, i)}`;
}
const t0 = [];
function TD(n) {
    const r = {};
    return (
        n.forEach((i) => {
            const { name: o } = i,
                u = r[o];
            (u && !u.isDefaultInstance && i.isDefaultInstance) || (r[o] = i);
        }),
        Object.values(r)
    );
}
function xD(n) {
    const r = n.defaultIntegrations || [],
        i = n.integrations;
    r.forEach((u) => {
        u.isDefaultInstance = !0;
    });
    let o;
    if (Array.isArray(i)) o = [...r, ...i];
    else if (typeof i == "function") {
        const u = i(r);
        o = Array.isArray(u) ? u : [u];
    } else o = r;
    return TD(o);
}
function wD(n, r) {
    const i = {};
    return (
        r.forEach((o) => {
            o && V_(n, o, i);
        }),
        i
    );
}
function e0(n, r) {
    for (const i of r) i?.afterAllSetup && i.afterAllSetup(n);
}
function V_(n, r, i) {
    if (i[r.name]) {
        Et && _t.log(`Integration skipped because it was already installed: ${r.name}`);
        return;
    }
    if (
        ((i[r.name] = r),
        !t0.includes(r.name) && typeof r.setupOnce == "function" && (r.setupOnce(), t0.push(r.name)),
        r.setup && typeof r.setup == "function" && r.setup(n),
        typeof r.preprocessEvent == "function")
    ) {
        const o = r.preprocessEvent.bind(r);
        n.on("preprocessEvent", (u, f) => o(u, f, n));
    }
    if (typeof r.processEvent == "function") {
        const o = r.processEvent.bind(r),
            u = Object.assign((f, d) => o(f, d, n), { id: r.name });
        n.addEventProcessor(u);
    }
    Et && _t.log(`Integration installed: ${r.name}`);
}
function OD(n) {
    return [{ type: "log", item_count: n.length, content_type: "application/vnd.sentry.items.log+json" }, { items: n }];
}
function DD(n, r, i, o) {
    const u = {};
    return r?.sdk && (u.sdk = { name: r.sdk.name, version: r.sdk.version }), i && o && (u.dsn = es(o)), Ci(u, [OD(n)]);
}
function Kd(n, r) {
    const i = r ?? AD(n) ?? [];
    if (i.length === 0) return;
    const o = n.getOptions(),
        u = DD(i, o._metadata, o.tunnel, n.getDsn());
    P_().set(n, []), n.emit("flushLogs"), n.sendEnvelope(u);
}
function AD(n) {
    return P_().get(n);
}
function P_() {
    return Di("clientToLogBufferMap", () => new WeakMap());
}
function MD(n) {
    return [
        { type: "trace_metric", item_count: n.length, content_type: "application/vnd.sentry.items.trace-metric+json" },
        { items: n },
    ];
}
function CD(n, r, i, o) {
    const u = {};
    return r?.sdk && (u.sdk = { name: r.sdk.name, version: r.sdk.version }), i && o && (u.dsn = es(o)), Ci(u, [MD(n)]);
}
function K_(n, r) {
    const i = r ?? RD(n) ?? [];
    if (i.length === 0) return;
    const o = n.getOptions(),
        u = CD(i, o._metadata, o.tunnel, n.getDsn());
    Z_().set(n, []), n.emit("flushMetrics"), n.sendEnvelope(u);
}
function RD(n) {
    return Z_().get(n);
}
function Z_() {
    return Di("clientToMetricBufferMap", () => new WeakMap());
}
function W_(n) {
    return typeof n == "object" && typeof n.unref == "function" && n.unref(), n;
}
const jh = Symbol.for("SentryBufferFullError");
function Yh(n = 100) {
    const r = new Set();
    function i() {
        return r.size < n;
    }
    function o(d) {
        r.delete(d);
    }
    function u(d) {
        if (!i()) return kh(jh);
        const y = d();
        return (
            r.add(y),
            y.then(
                () => o(y),
                () => o(y)
            ),
            y
        );
    }
    function f(d) {
        if (!r.size) return ns(!0);
        const y = Promise.allSettled(Array.from(r)).then(() => !0);
        if (!d) return y;
        const p = [y, new Promise((m) => W_(setTimeout(() => m(!1), d)))];
        return Promise.race(p);
    }
    return {
        get $() {
            return Array.from(r);
        },
        add: u,
        drain: f,
    };
}
const ND = 60 * 1e3;
function zD(n, r = Hl()) {
    const i = parseInt(`${n}`, 10);
    if (!isNaN(i)) return i * 1e3;
    const o = Date.parse(`${n}`);
    return isNaN(o) ? ND : o - r;
}
function BD(n, r) {
    return n[r] || n.all || 0;
}
function UD(n, r, i = Hl()) {
    return BD(n, r) > i;
}
function LD(n, { statusCode: r, headers: i }, o = Hl()) {
    const u = { ...n },
        f = i?.["x-sentry-rate-limits"],
        d = i?.["retry-after"];
    if (f)
        for (const y of f.trim().split(",")) {
            const [p, m, , , _] = y.split(":", 5),
                g = parseInt(p, 10),
                T = (isNaN(g) ? 60 : g) * 1e3;
            if (!m) u.all = o + T;
            else
                for (const O of m.split(";"))
                    O === "metric_bucket" ? (!_ || _.split(";").includes("custom")) && (u[O] = o + T) : (u[O] = o + T);
        }
    else d ? (u.all = o + zD(d, o)) : r === 429 && (u.all = o + 60 * 1e3);
    return u;
}
const F_ = 64;
function HD(n, r, i = Yh(n.bufferSize || F_)) {
    let o = {};
    const u = (d) => i.drain(d);
    function f(d) {
        const y = [];
        if (
            (Qd(d, (g, T) => {
                const O = Pv(T);
                UD(o, O) ? n.recordDroppedEvent("ratelimit_backoff", O) : y.push(g);
            }),
            y.length === 0)
        )
            return Promise.resolve({});
        const p = Ci(d[0], y),
            m = (g) => {
                if (V3(p, ["client_report"])) {
                    Et && _t.warn(`Dropping client report. Will not send outcomes (reason: ${g}).`);
                    return;
                }
                Qd(p, (T, O) => {
                    n.recordDroppedEvent(g, Pv(O));
                });
            },
            _ = () =>
                r({ body: P3(p) }).then(
                    (g) =>
                        g.statusCode === 413
                            ? (Et &&
                                  _t.error(
                                      "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
                                  ),
                              m("send_error"),
                              g)
                            : (Et &&
                                  g.statusCode !== void 0 &&
                                  (g.statusCode < 200 || g.statusCode >= 300) &&
                                  _t.warn(`Sentry responded with status code ${g.statusCode} to sent event.`),
                              (o = LD(o, g)),
                              g),
                    (g) => {
                        throw (
                            (m("network_error"), Et && _t.error("Encountered error running transport request:", g), g)
                        );
                    }
                );
        return i.add(_).then(
            (g) => g,
            (g) => {
                if (g === jh)
                    return (
                        Et && _t.error("Skipped sending event because buffer is full."),
                        m("queue_overflow"),
                        Promise.resolve({})
                    );
                throw g;
            }
        );
    }
    return { send: f, flush: u };
}
function kD(n, r, i) {
    const o = [{ type: "client_report" }, { timestamp: Jo(), discarded_events: n }];
    return Ci(r ? { dsn: r } : {}, [o]);
}
function $_(n) {
    const r = [];
    n.message && r.push(n.message);
    try {
        const i = n.exception.values[n.exception.values.length - 1];
        i?.value && (r.push(i.value), i.type && r.push(`${i.type}: ${i.value}`));
    } catch {}
    return r;
}
function jD(n) {
    const {
        trace_id: r,
        parent_span_id: i,
        span_id: o,
        status: u,
        origin: f,
        data: d,
        op: y,
    } = n.contexts?.trace ?? {};
    return {
        data: d ?? {},
        description: n.transaction,
        op: y,
        parent_span_id: i,
        span_id: o ?? "",
        start_timestamp: n.start_timestamp ?? 0,
        status: u,
        timestamp: n.timestamp,
        trace_id: r ?? "",
        origin: f,
        profile_id: d?.[N_],
        exclusive_time: d?.[z_],
        measurements: n.measurements,
        is_segment: !0,
    };
}
function YD(n) {
    return {
        type: "transaction",
        timestamp: n.timestamp,
        start_timestamp: n.start_timestamp,
        transaction: n.description,
        contexts: {
            trace: {
                trace_id: n.trace_id,
                span_id: n.span_id,
                parent_span_id: n.parent_span_id,
                op: n.op,
                status: n.status,
                origin: n.origin,
                data: {
                    ...n.data,
                    ...(n.profile_id && { [N_]: n.profile_id }),
                    ...(n.exclusive_time && { [z_]: n.exclusive_time }),
                },
            },
        },
        measurements: n.measurements,
    };
}
const n0 = "Not capturing exception because it's already been captured.",
    r0 = "Discarded session because of missing or non-string release",
    J_ = Symbol.for("SentryInternalError"),
    tb = Symbol.for("SentryDoNotSendEventError"),
    qD = 5e3;
function tl(n) {
    return { message: n, [J_]: !0 };
}
function Sd(n) {
    return { message: n, [tb]: !0 };
}
function a0(n) {
    return !!n && typeof n == "object" && J_ in n;
}
function i0(n) {
    return !!n && typeof n == "object" && tb in n;
}
function o0(n, r, i, o, u) {
    let f = 0,
        d,
        y = !1;
    n.on(i, () => {
        (f = 0), clearTimeout(d), (y = !1);
    }),
        n.on(r, (p) => {
            (f += o(p)),
                f >= 8e5
                    ? u(n)
                    : y ||
                      ((y = !0),
                      (d = W_(
                          setTimeout(() => {
                              u(n);
                          }, qD)
                      )));
        }),
        n.on("flush", () => {
            u(n);
        });
}
class GD {
    constructor(r) {
        if (
            ((this._options = r),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            (this._promiseBuffer = Yh(r.transportOptions?.bufferSize ?? F_)),
            r.dsn ? (this._dsn = w3(r.dsn)) : Et && _t.warn("No DSN provided, client will not send events."),
            this._dsn)
        ) {
            const o = ED(this._dsn, r.tunnel, r._metadata ? r._metadata.sdk : void 0);
            this._transport = r.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...r.transportOptions,
                url: o,
            });
        }
        (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs),
            this._options.enableLogs && o0(this, "afterCaptureLog", "flushLogs", VD, Kd),
            (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) &&
                o0(this, "afterCaptureMetric", "flushMetrics", QD, K_);
    }
    captureException(r, i, o) {
        const u = yn();
        if (Nv(r)) return Et && _t.log(n0), u;
        const f = { event_id: u, ...i };
        return (
            this._process(
                () =>
                    this.eventFromException(r, f)
                        .then((d) => this._captureEvent(d, f, o))
                        .then((d) => d),
                "error"
            ),
            f.event_id
        );
    }
    captureMessage(r, i, o, u) {
        const f = { event_id: yn(), ...o },
            d = Rh(r) ? r : String(r),
            y = Bl(r),
            p = y ? this.eventFromMessage(d, i, f) : this.eventFromException(r, f);
        return this._process(() => p.then((m) => this._captureEvent(m, f, u)), y ? "unknown" : "error"), f.event_id;
    }
    captureEvent(r, i, o) {
        const u = yn();
        if (i?.originalException && Nv(i.originalException)) return Et && _t.log(n0), u;
        const f = { event_id: u, ...i },
            d = r.sdkProcessingMetadata || {},
            y = d.capturedSpanScope,
            p = d.capturedSpanIsolationScope,
            m = s0(r.type);
        return this._process(() => this._captureEvent(r, f, y || o, p), m), f.event_id;
    }
    captureSession(r) {
        this.sendSession(r), Ei(r, { init: !1 });
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    async flush(r) {
        const i = this._transport;
        if (!i) return !0;
        this.emit("flush");
        const o = await this._isClientDoneProcessing(r),
            u = await i.flush(r);
        return o && u;
    }
    async close(r) {
        Kd(this);
        const i = await this.flush(r);
        return (this.getOptions().enabled = !1), this.emit("close"), i;
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(r) {
        this._eventProcessors.push(r);
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({ name: r }) => r.startsWith("Spotlight"))) &&
            this._setupIntegrations();
    }
    getIntegrationByName(r) {
        return this._integrations[r];
    }
    addIntegration(r) {
        const i = this._integrations[r.name];
        V_(this, r, this._integrations), i || e0(this, [r]);
    }
    sendEvent(r, i = {}) {
        this.emit("beforeSendEvent", r, i);
        let o = tD(r, this._dsn, this._options._metadata, this._options.tunnel);
        for (const u of i.attachments || []) o = Q3(o, Z3(u));
        this.sendEnvelope(o).then((u) => this.emit("afterSendEvent", r, u));
    }
    sendSession(r) {
        const { release: i, environment: o = Hh } = this._options;
        if ("aggregates" in r) {
            const f = r.attrs || {};
            if (!f.release && !i) {
                Et && _t.warn(r0);
                return;
            }
            (f.release = f.release || i), (f.environment = f.environment || o), (r.attrs = f);
        } else {
            if (!r.release && !i) {
                Et && _t.warn(r0);
                return;
            }
            (r.release = r.release || i), (r.environment = r.environment || o);
        }
        this.emit("beforeSendSession", r);
        const u = J3(r, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(u);
    }
    recordDroppedEvent(r, i, o = 1) {
        if (this._options.sendClientReports) {
            const u = `${r}:${i}`;
            Et && _t.log(`Recording outcome: "${u}"${o > 1 ? ` (${o} times)` : ""}`),
                (this._outcomes[u] = (this._outcomes[u] || 0) + o);
        }
    }
    on(r, i) {
        const o = (this._hooks[r] = this._hooks[r] || new Set()),
            u = (...f) => i(...f);
        return (
            o.add(u),
            () => {
                o.delete(u);
            }
        );
    }
    emit(r, ...i) {
        const o = this._hooks[r];
        o && o.forEach((u) => u(...i));
    }
    async sendEnvelope(r) {
        if ((this.emit("beforeEnvelope", r), this._isEnabled() && this._transport))
            try {
                return await this._transport.send(r);
            } catch (i) {
                return Et && _t.error("Error while sending envelope:", i), {};
            }
        return Et && _t.error("Transport disabled"), {};
    }
    dispose() {}
    _setupIntegrations() {
        const { integrations: r } = this._options;
        (this._integrations = wD(this, r)), e0(this, r);
    }
    _updateSessionFromEvent(r, i) {
        let o = i.level === "fatal",
            u = !1;
        const f = i.exception?.values;
        if (f) {
            (u = !0), (o = !1);
            for (const p of f)
                if (p.mechanism?.handled === !1) {
                    o = !0;
                    break;
                }
        }
        const d = r.status === "ok";
        ((d && r.errors === 0) || (d && o)) &&
            (Ei(r, { ...(o && { status: "crashed" }), errors: r.errors || Number(u || o) }), this.captureSession(r));
    }
    async _isClientDoneProcessing(r) {
        let i = 0;
        for (; !r || i < r; ) {
            if ((await new Promise((o) => setTimeout(o, 1)), !this._numProcessing)) return !0;
            i++;
        }
        return !1;
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(r, i, o, u) {
        const f = this.getOptions(),
            d = Object.keys(this._integrations);
        return (
            !i.integrations && d?.length && (i.integrations = d),
            this.emit("preprocessEvent", r, i),
            r.type || u.setLastEventId(r.event_id || i.event_id),
            lD(f, r, i, o, this, u).then((y) => {
                if (y === null) return y;
                this.emit("postprocessEvent", y, i),
                    (y.contexts = { trace: { ...y.contexts?.trace, ...a3(o) }, ...y.contexts });
                const p = k3(this, o);
                return (y.sdkProcessingMetadata = { dynamicSamplingContext: p, ...y.sdkProcessingMetadata }), y;
            })
        );
    }
    _captureEvent(r, i = {}, o = sr(), u = Qr()) {
        return (
            Et && Zd(r) && _t.log(`Captured error event \`${$_(r)[0] || "<unknown>"}\``),
            this._processEvent(r, i, o, u).then(
                (f) => f.event_id,
                (f) => {
                    Et && (i0(f) ? _t.log(f.message) : a0(f) ? _t.warn(f.message) : _t.warn(f));
                }
            )
        );
    }
    _processEvent(r, i, o, u) {
        const f = this.getOptions(),
            { sampleRate: d } = f,
            y = eb(r),
            p = Zd(r),
            _ = `before send for type \`${r.type || "error"}\``,
            g = typeof d > "u" ? void 0 : O3(d);
        if (p && typeof g == "number" && yl() > g)
            return (
                this.recordDroppedEvent("sample_rate", "error"),
                kh(Sd(`Discarding event because it's not included in the random sample (sampling rate = ${d})`))
            );
        const T = s0(r.type);
        return this._prepareEvent(r, i, o, u)
            .then((O) => {
                if (O === null)
                    throw (
                        (this.recordDroppedEvent("event_processor", T),
                        Sd("An event processor returned `null`, will not send event."))
                    );
                if (i.data?.__sentry__ === !0) return O;
                const Y = XD(this, f, O, i);
                return ID(Y, _);
            })
            .then((O) => {
                if (O === null) {
                    if ((this.recordDroppedEvent("before_send", T), y)) {
                        const q = 1 + (r.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", q);
                    }
                    throw Sd(`${_} returned \`null\`, will not send event.`);
                }
                const k = o.getSession() || u.getSession();
                if ((p && k && this._updateSessionFromEvent(k, O), y)) {
                    const R = O.sdkProcessingMetadata?.spanCountBeforeProcessing || 0,
                        q = O.spans ? O.spans.length : 0,
                        w = R - q;
                    w > 0 && this.recordDroppedEvent("before_send", "span", w);
                }
                const Y = O.transaction_info;
                if (y && Y && O.transaction !== r.transaction) {
                    const R = "custom";
                    O.transaction_info = { ...Y, source: R };
                }
                return this.sendEvent(O, i), O;
            })
            .then(null, (O) => {
                throw i0(O) || a0(O)
                    ? O
                    : (this.captureException(O, {
                          mechanism: { handled: !1, type: "internal" },
                          data: { __sentry__: !0 },
                          originalException: O,
                      }),
                      tl(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${O}`));
            });
    }
    _process(r, i) {
        this._numProcessing++,
            this._promiseBuffer.add(r).then(
                (o) => (this._numProcessing--, o),
                (o) => (this._numProcessing--, o === jh && this.recordDroppedEvent("queue_overflow", i), o)
            );
    }
    _clearOutcomes() {
        const r = this._outcomes;
        return (
            (this._outcomes = {}),
            Object.entries(r).map(([i, o]) => {
                const [u, f] = i.split(":");
                return { reason: u, category: f, quantity: o };
            })
        );
    }
    _flushOutcomes() {
        Et && _t.log("Flushing outcomes...");
        const r = this._clearOutcomes();
        if (r.length === 0) {
            Et && _t.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            Et && _t.log("No dsn provided, will not send outcomes");
            return;
        }
        Et && _t.log("Sending outcomes:", r);
        const i = kD(r, this._options.tunnel && es(this._dsn));
        this.sendEnvelope(i);
    }
}
function s0(n) {
    return n === "replay_event" ? "replay" : n || "error";
}
function ID(n, r) {
    const i = `${r} must return \`null\` or a valid event.`;
    if ($o(n))
        return n.then(
            (o) => {
                if (!Qo(o) && o !== null) throw tl(i);
                return o;
            },
            (o) => {
                throw tl(`${r} rejected with ${o}`);
            }
        );
    if (!Qo(n) && n !== null) throw tl(i);
    return n;
}
function XD(n, r, i, o) {
    const { beforeSend: u, beforeSendTransaction: f, beforeSendSpan: d, ignoreSpans: y } = r;
    let p = i;
    if (Zd(p) && u) return u(p, o);
    if (eb(p)) {
        if (d || y) {
            const m = jD(p);
            if (y?.length && Vv(m, y)) return null;
            if (d) {
                const _ = d(m);
                _ ? (p = ts(i, YD(_))) : Xv();
            }
            if (p.spans) {
                const _ = [],
                    g = p.spans;
                for (const O of g) {
                    if (y?.length && Vv(O, y)) {
                        U3(g, O);
                        continue;
                    }
                    if (d) {
                        const k = d(O);
                        k ? _.push(k) : (Xv(), _.push(O));
                    } else _.push(O);
                }
                const T = p.spans.length - _.length;
                T && n.recordDroppedEvent("before_send", "span", T), (p.spans = _);
            }
        }
        if (f) {
            if (p.spans) {
                const m = p.spans.length;
                p.sdkProcessingMetadata = { ...i.sdkProcessingMetadata, spanCountBeforeProcessing: m };
            }
            return f(p, o);
        }
    }
    return p;
}
function Zd(n) {
    return n.type === void 0;
}
function eb(n) {
    return n.type === "transaction";
}
function QD(n) {
    let r = 0;
    return n.name && (r += n.name.length * 2), (r += 8), r + nb(n.attributes);
}
function VD(n) {
    let r = 0;
    return n.message && (r += n.message.length * 2), r + nb(n.attributes);
}
function nb(n) {
    if (!n) return 0;
    let r = 0;
    return (
        Object.values(n).forEach((i) => {
            Array.isArray(i) ? (r += i.length * u0(i[0])) : Bl(i) ? (r += u0(i)) : (r += 100);
        }),
        r
    );
}
function u0(n) {
    return typeof n == "string" ? n.length * 2 : typeof n == "number" ? 8 : typeof n == "boolean" ? 4 : 0;
}
function PD(n) {
    return zl(n) && "__sentry_fetch_url_host__" in n && typeof n.__sentry_fetch_url_host__ == "string";
}
function l0(n) {
    return PD(n) ? `${n.message} (${n.__sentry_fetch_url_host__})` : n.message;
}
function KD(n, r) {
    r.debug === !0 &&
        (Et
            ? _t.enable()
            : Ai(() => {
                  console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
              })),
        sr().update(r.initialScope);
    const o = new n(r);
    return ZD(o), o.init(), o;
}
function ZD(n) {
    sr().setClient(n);
}
function Ed(n) {
    if (!n) return {};
    const r = n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!r) return {};
    const i = r[6] || "",
        o = r[8] || "";
    return { host: r[4], path: r[5], protocol: r[2], search: i, hash: o, relative: r[5] + i + o };
}
function WD(n, r = !0) {
    if (n.startsWith("data:")) {
        const i = n.match(/^data:([^;,]+)/),
            o = i ? i[1] : "text/plain",
            u = n.includes(";base64,"),
            f = n.indexOf(",");
        let d = "";
        if (r && f !== -1) {
            const y = n.slice(f + 1);
            d = y.length > 10 ? `${y.slice(0, 10)}... [truncated]` : y;
        }
        return `data:${o}${u ? ",base64" : ""}${d ? `,${d}` : ""}`;
    }
    return n;
}
function FD(n) {
    "aggregates" in n
        ? n.attrs?.ip_address === void 0 && (n.attrs = { ...n.attrs, ip_address: "{{auto}}" })
        : n.ipAddress === void 0 && (n.ipAddress = "{{auto}}");
}
function rb(n, r, i = [r], o = "npm") {
    const u = ((n._metadata = n._metadata || {}).sdk = n._metadata.sdk || {});
    u.name ||
        ((u.name = `sentry.javascript.${r}`),
        (u.packages = i.map((f) => ({ name: `${o}:@sentry/${f}`, version: Ea }))),
        (u.version = Ea));
}
const $D = 100;
function Oa(n, r) {
    const i = Ue(),
        o = Qr();
    if (!i) return;
    const { beforeBreadcrumb: u = null, maxBreadcrumbs: f = $D } = i.getOptions();
    if (f <= 0) return;
    const y = { timestamp: Jo(), ...n },
        p = u ? Ai(() => u(y, r)) : y;
    p !== null && (i.emit && i.emit("beforeAddBreadcrumb", p, r), o.addBreadcrumb(p, f));
}
let c0;
const JD = "FunctionToString",
    f0 = new WeakMap(),
    tA = () => ({
        name: JD,
        setupOnce() {
            c0 = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...n) {
                    const r = Bh(this),
                        i = f0.has(Ue()) && r !== void 0 ? r : this;
                    return c0.apply(i, n);
                };
            } catch {}
        },
        setup(n) {
            f0.set(n, !0);
        },
    }),
    eA = tA,
    nA = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
        /^ResizeObserver loop completed with undelivered notifications.$/,
        /^Cannot redefine property: googletag$/,
        /^Can't find variable: gmo$/,
        /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
        /can't redefine non-configurable property "solana"/,
        /vv\(\)\.getRestrictions is not a function/,
        /Can't find variable: _AutofillCallbackHandler/,
        /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
        /^Java exception was raised during method invocation$/,
    ],
    rA = "EventFilters",
    aA = (n = {}) => {
        let r;
        return {
            name: rA,
            setup(i) {
                const o = i.getOptions();
                r = d0(n, o);
            },
            processEvent(i, o, u) {
                if (!r) {
                    const f = u.getOptions();
                    r = d0(n, f);
                }
                return oA(i, r) ? null : i;
            },
        };
    },
    iA = (n = {}) => ({ ...aA(n), name: "InboundFilters" });
function d0(n = {}, r = {}) {
    return {
        allowUrls: [...(n.allowUrls || []), ...(r.allowUrls || [])],
        denyUrls: [...(n.denyUrls || []), ...(r.denyUrls || [])],
        ignoreErrors: [...(n.ignoreErrors || []), ...(r.ignoreErrors || []), ...(n.disableErrorDefaults ? [] : nA)],
        ignoreTransactions: [...(n.ignoreTransactions || []), ...(r.ignoreTransactions || [])],
    };
}
function oA(n, r) {
    if (n.type) {
        if (n.type === "transaction" && uA(n, r.ignoreTransactions))
            return (
                Et &&
                    _t.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${_a(n)}`),
                !0
            );
    } else {
        if (sA(n, r.ignoreErrors))
            return (
                Et &&
                    _t.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${_a(n)}`),
                !0
            );
        if (dA(n))
            return (
                Et &&
                    _t.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${_a(n)}`),
                !0
            );
        if (lA(n, r.denyUrls))
            return (
                Et &&
                    _t.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${_a(n)}.
Url: ${gl(n)}`),
                !0
            );
        if (!cA(n, r.allowUrls))
            return (
                Et &&
                    _t.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${_a(n)}.
Url: ${gl(n)}`),
                !0
            );
    }
    return !1;
}
function sA(n, r) {
    return r?.length ? $_(n).some((i) => kl(i, r)) : !1;
}
function uA(n, r) {
    if (!r?.length) return !1;
    const i = n.transaction;
    return i ? kl(i, r) : !1;
}
function lA(n, r) {
    if (!r?.length) return !1;
    const i = gl(n);
    return i ? kl(i, r) : !1;
}
function cA(n, r) {
    if (!r?.length) return !0;
    const i = gl(n);
    return i ? kl(i, r) : !0;
}
function fA(n = []) {
    for (let r = n.length - 1; r >= 0; r--) {
        const i = n[r];
        if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
    }
    return null;
}
function gl(n) {
    try {
        const i = [...(n.exception?.values ?? [])]
            .reverse()
            .find((o) => o.mechanism?.parent_id === void 0 && o.stacktrace?.frames?.length)?.stacktrace?.frames;
        return i ? fA(i) : null;
    } catch {
        return Et && _t.error(`Cannot extract url for event ${_a(n)}`), null;
    }
}
function dA(n) {
    return n.exception?.values?.length
        ? !n.message && !n.exception.values.some((r) => r.stacktrace || (r.type && r.type !== "Error") || r.value)
        : !1;
}
function hA(n, r, i, o, u, f) {
    if (!u.exception?.values || !f || !Gr(f.originalException, Error)) return;
    const d = u.exception.values.length > 0 ? u.exception.values[u.exception.values.length - 1] : void 0;
    d && (u.exception.values = Wd(n, r, o, f.originalException, i, u.exception.values, d, 0));
}
function Wd(n, r, i, o, u, f, d, y) {
    if (f.length >= i + 1) return f;
    let p = [...f];
    if (Gr(o[u], Error)) {
        h0(d, y, o);
        const m = n(r, o[u]),
            _ = p.length;
        m0(m, u, _, y), (p = Wd(n, r, i, o[u], u, [m, ...p], m, _));
    }
    return (
        ab(o) &&
            o.errors.forEach((m, _) => {
                if (Gr(m, Error)) {
                    h0(d, y, o);
                    const g = n(r, m),
                        T = p.length;
                    m0(g, `errors[${_}]`, T, y), (p = Wd(n, r, i, m, u, [g, ...p], g, T));
                }
            }),
        p
    );
}
function ab(n) {
    return Array.isArray(n.errors);
}
function h0(n, r, i) {
    n.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...(ab(i) && { is_exception_group: !0 }),
        ...n.mechanism,
        exception_id: r,
    };
}
function m0(n, r, i, o) {
    n.mechanism = { handled: !0, ...n.mechanism, type: "chained", source: r, exception_id: i, parent_id: o };
}
function mA(n) {
    const r = "console";
    Da(r, n), Aa(r, pA);
}
function pA() {
    "console" in Pt &&
        _O.forEach(function (n) {
            n in Pt.console &&
                rn(Pt.console, n, function (r) {
                    return (
                        (pl[n] = r),
                        function (...i) {
                            En("console", { args: i, level: n }), pl[n]?.apply(Pt.console, i);
                        }
                    );
                });
        });
}
function yA(n) {
    return n === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(n) ? n : "log";
}
const gA = "Dedupe",
    vA = () => {
        let n;
        return {
            name: gA,
            processEvent(r) {
                if (r.type) return r;
                try {
                    if (bA(r, n))
                        return (
                            Et && _t.warn("Event dropped due to being a duplicate of previously captured event."), null
                        );
                } catch {}
                return (n = r);
            },
        };
    },
    _A = vA;
function bA(n, r) {
    return r ? !!(SA(n, r) || EA(n, r)) : !1;
}
function SA(n, r) {
    const i = n.message,
        o = r.message;
    return !((!i && !o) || (i && !o) || (!i && o) || i !== o || !ob(n, r) || !ib(n, r));
}
function EA(n, r) {
    const i = p0(r),
        o = p0(n);
    return !(!i || !o || i.type !== o.type || i.value !== o.value || !ob(n, r) || !ib(n, r));
}
function ib(n, r) {
    let i = Ov(n),
        o = Ov(r);
    if (!i && !o) return !0;
    if ((i && !o) || (!i && o) || ((i = i), (o = o), o.length !== i.length)) return !1;
    for (let u = 0; u < o.length; u++) {
        const f = o[u],
            d = i[u];
        if (f.filename !== d.filename || f.lineno !== d.lineno || f.colno !== d.colno || f.function !== d.function)
            return !1;
    }
    return !0;
}
function ob(n, r) {
    let i = n.fingerprint,
        o = r.fingerprint;
    if (!i && !o) return !0;
    if ((i && !o) || (!i && o)) return !1;
    (i = i), (o = o);
    try {
        return i.join("") === o.join("");
    } catch {
        return !1;
    }
}
function p0(n) {
    return n.exception?.values?.[0];
}
const TA = "ConversationId",
    xA = () => ({
        name: TA,
        setup(n) {
            n.on("spanStart", (r) => {
                const i = sr().getScopeData(),
                    o = Qr().getScopeData(),
                    u = i.conversationId || o.conversationId;
                u && r.setAttribute(c3, u);
            });
        },
    }),
    wA = xA;
function sb(n) {
    if (n !== void 0) return n >= 400 && n < 500 ? "warning" : n >= 500 ? "error" : void 0;
}
const Po = Pt;
function OA() {
    return "history" in Po && !!Po.history;
}
function DA() {
    if (!("fetch" in Po)) return !1;
    try {
        return new Headers(), new Request("data:,"), new Response(), !0;
    } catch {
        return !1;
    }
}
function Fd(n) {
    return n && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString());
}
function AA() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!DA()) return !1;
    if (Fd(Po.fetch)) return !0;
    let n = !1;
    const r = Po.document;
    if (r && typeof r.createElement == "function")
        try {
            const i = r.createElement("iframe");
            (i.hidden = !0),
                r.head.appendChild(i),
                i.contentWindow?.fetch && (n = Fd(i.contentWindow.fetch)),
                r.head.removeChild(i);
        } catch (i) {
            Et && _t.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
        }
    return n;
}
function MA(n, r) {
    const i = "fetch";
    Da(i, n), Aa(i, () => CA(void 0, r));
}
function CA(n, r = !1) {
    (r && !AA()) ||
        rn(Pt, "fetch", function (i) {
            return function (...o) {
                const u = new Error(),
                    { method: f, url: d } = RA(o),
                    y = {
                        args: o,
                        fetchData: { method: f, url: d },
                        startTimestamp: rr() * 1e3,
                        virtualError: u,
                        headers: NA(o),
                    };
                return (
                    En("fetch", { ...y }),
                    i.apply(Pt, o).then(
                        async (p) => (En("fetch", { ...y, endTimestamp: rr() * 1e3, response: p }), p),
                        (p) => {
                            En("fetch", { ...y, endTimestamp: rr() * 1e3, error: p }),
                                zl(p) && p.stack === void 0 && ((p.stack = u.stack), Ir(p, "framesToPop", 1));
                            const _ = Ue()?.getOptions().enhanceFetchErrorMessages ?? "always";
                            if (
                                _ !== !1 &&
                                p instanceof TypeError &&
                                (p.message === "Failed to fetch" ||
                                    p.message === "Load failed" ||
                                    p.message === "NetworkError when attempting to fetch resource.")
                            )
                                try {
                                    const O = new URL(y.fetchData.url).host;
                                    _ === "always"
                                        ? (p.message = `${p.message} (${O})`)
                                        : Ir(p, "__sentry_fetch_url_host__", O);
                                } catch {}
                            throw p;
                        }
                    )
                );
            };
        });
}
function el(n, r) {
    return !!n && typeof n == "object" && !!n[r];
}
function y0(n) {
    return typeof n == "string" ? n : n ? (el(n, "url") ? n.url : n.toString ? n.toString() : "") : "";
}
function RA(n) {
    if (n.length === 0) return { method: "GET", url: "" };
    if (n.length === 2) {
        const [i, o] = n;
        return {
            url: y0(i),
            method: el(o, "method")
                ? String(o.method).toUpperCase()
                : x_(i) && el(i, "method")
                  ? String(i.method).toUpperCase()
                  : "GET",
        };
    }
    const r = n[0];
    return { url: y0(r), method: el(r, "method") ? String(r.method).toUpperCase() : "GET" };
}
function NA(n) {
    const [r, i] = n;
    try {
        if (typeof i == "object" && i !== null && "headers" in i && i.headers) return new Headers(i.headers);
        if (x_(r)) return new Headers(r.headers);
    } catch {}
}
function zA() {
    return "npm";
}
const ue = Pt;
let $d = 0;
function ub() {
    return $d > 0;
}
function BA() {
    $d++,
        setTimeout(() => {
            $d--;
        });
}
function xi(n, r = {}) {
    function i(u) {
        return typeof u == "function";
    }
    if (!i(n)) return n;
    try {
        const u = n.__sentry_wrapped__;
        if (u) return typeof u == "function" ? u : n;
        if (Bh(n)) return n;
    } catch {
        return n;
    }
    const o = function (...u) {
        try {
            const f = u.map((d) => xi(d, r));
            return n.apply(this, f);
        } catch (f) {
            throw (
                (BA(),
                r3((d) => {
                    d.addEventProcessor(
                        (y) => (
                            r.mechanism && (Gd(y, void 0), Si(y, r.mechanism)),
                            (y.extra = { ...y.extra, arguments: u }),
                            y
                        )
                    ),
                        yD(f);
                }),
                f)
            );
        }
    };
    try {
        for (const u in n) Object.prototype.hasOwnProperty.call(n, u) && (o[u] = n[u]);
    } catch {}
    O_(o, n), Ir(n, "__sentry_wrapped__", o);
    try {
        Object.getOwnPropertyDescriptor(o, "name").configurable &&
            Object.defineProperty(o, "name", {
                get() {
                    return n.name;
                },
            });
    } catch {}
    return o;
}
function UA() {
    const n = zh(),
        { referrer: r } = ue.document || {},
        { userAgent: i } = ue.navigator || {},
        o = { ...(r && { Referer: r }), ...(i && { "User-Agent": i }) };
    return { url: n, headers: o };
}
function qh(n, r) {
    const i = Gh(n, r),
        o = { type: YA(r), value: qA(r) };
    return (
        i.length && (o.stacktrace = { frames: i }),
        o.type === void 0 && o.value === "" && (o.value = "Unrecoverable error caught"),
        o
    );
}
function LA(n, r, i, o) {
    const f = Ue()?.getOptions().normalizeDepth,
        d = VA(r),
        y = { __serialized__: j_(r, f) };
    if (d) return { exception: { values: [qh(n, d)] }, extra: y };
    const p = {
        exception: {
            values: [
                {
                    type: Ul(r) ? r.constructor.name : o ? "UnhandledRejection" : "Error",
                    value: XA(r, { isUnhandledRejection: o }),
                },
            ],
        },
        extra: y,
    };
    if (i) {
        const m = Gh(n, i);
        m.length && (p.exception.values[0].stacktrace = { frames: m });
    }
    return p;
}
function Td(n, r) {
    return { exception: { values: [qh(n, r)] } };
}
function Gh(n, r) {
    const i = r.stacktrace || r.stack || "",
        o = kA(r),
        u = jA(r);
    try {
        return n(i, o, u);
    } catch {}
    return [];
}
const HA = /Minified React error #\d+;/i;
function kA(n) {
    return n && HA.test(n.message) ? 1 : 0;
}
function jA(n) {
    return typeof n.framesToPop == "number" ? n.framesToPop : 0;
}
function lb(n) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? n instanceof WebAssembly.Exception : !1;
}
function YA(n) {
    const r = n?.name;
    return !r && lb(n)
        ? n.message && Array.isArray(n.message) && n.message.length == 2
            ? n.message[0]
            : "WebAssembly.Exception"
        : r;
}
function qA(n) {
    const r = n?.message;
    return lb(n)
        ? Array.isArray(n.message) && n.message.length == 2
            ? n.message[1]
            : "wasm exception"
        : r
          ? r.error && typeof r.error.message == "string"
              ? l0(r.error)
              : l0(n)
          : "No error message";
}
function GA(n, r, i, o) {
    const u = i?.syntheticException || void 0,
        f = Ih(n, r, u, o);
    return Si(f), (f.level = "error"), i?.event_id && (f.event_id = i.event_id), ns(f);
}
function IA(n, r, i = "info", o, u) {
    const f = o?.syntheticException || void 0,
        d = Jd(n, r, f, u);
    return (d.level = i), o?.event_id && (d.event_id = o.event_id), ns(d);
}
function Ih(n, r, i, o, u) {
    let f;
    if (E_(r) && r.error) return Td(n, r.error);
    if (Av(r) || NO(r)) {
        const d = r;
        if ("stack" in r) f = Td(n, r);
        else {
            const y = d.name || (Av(d) ? "DOMError" : "DOMException"),
                p = d.message ? `${y}: ${d.message}` : y;
            (f = Jd(n, p, i, o)), Gd(f, p);
        }
        return "code" in d && (f.tags = { ...f.tags, "DOMException.code": `${d.code}` }), f;
    }
    return zl(r)
        ? Td(n, r)
        : Qo(r) || Ul(r)
          ? ((f = LA(n, r, i, u)), Si(f, { synthetic: !0 }), f)
          : ((f = Jd(n, r, i, o)), Gd(f, `${r}`), Si(f, { synthetic: !0 }), f);
}
function Jd(n, r, i, o) {
    const u = {};
    if (o && i) {
        const f = Gh(n, i);
        f.length && (u.exception = { values: [{ value: r, stacktrace: { frames: f } }] }), Si(u, { synthetic: !0 });
    }
    if (Rh(r)) {
        const { __sentry_template_string__: f, __sentry_template_values__: d } = r;
        return (u.logentry = { message: f, params: d }), u;
    }
    return (u.message = r), u;
}
function XA(n, { isUnhandledRejection: r }) {
    const i = jO(n),
        o = r ? "promise rejection" : "exception";
    return E_(n)
        ? `Event \`ErrorEvent\` captured as ${o} with message \`${n.message}\``
        : Ul(n)
          ? `Event \`${QA(n)}\` (type=${n.type}) captured as ${o}`
          : `Object captured as ${o} with keys: ${i}`;
}
function QA(n) {
    try {
        const r = Object.getPrototypeOf(n);
        return r ? r.constructor.name : void 0;
    } catch {}
}
function VA(n) {
    for (const r in n)
        if (Object.prototype.hasOwnProperty.call(n, r)) {
            const i = n[r];
            if (i instanceof Error) return i;
        }
}
class PA extends GD {
    constructor(r) {
        const i = KA(r),
            o = ue.SENTRY_SDK_SOURCE || zA();
        rb(i, "browser", ["browser"], o),
            i._metadata?.sdk &&
                (i._metadata.sdk.settings = {
                    infer_ip: i.sendDefaultPii ? "auto" : "never",
                    ...i._metadata.sdk.settings,
                }),
            super(i);
        const {
                sendDefaultPii: u,
                sendClientReports: f,
                enableLogs: d,
                _experiments: y,
                enableMetrics: p,
            } = this._options,
            m = p ?? y?.enableMetrics ?? !0;
        ue.document &&
            (f || d || m) &&
            ue.document.addEventListener("visibilitychange", () => {
                ue.document.visibilityState === "hidden" && (f && this._flushOutcomes(), d && Kd(this), m && K_(this));
            }),
            u && this.on("beforeSendSession", FD);
    }
    eventFromException(r, i) {
        return GA(this._options.stackParser, r, i, this._options.attachStacktrace);
    }
    eventFromMessage(r, i = "info", o) {
        return IA(this._options.stackParser, r, i, o, this._options.attachStacktrace);
    }
    _prepareEvent(r, i, o, u) {
        return (r.platform = r.platform || "javascript"), super._prepareEvent(r, i, o, u);
    }
}
function KA(n) {
    return {
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : ue.SENTRY_RELEASE?.id,
        sendClientReports: !0,
        parentSpanIsAlwaysRootSpan: !0,
        ...n,
    };
}
const ZA = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    je = Pt,
    WA = 1e3;
let g0, th, eh;
function FA(n) {
    Da("dom", n), Aa("dom", $A);
}
function $A() {
    if (!je.document) return;
    const n = En.bind(null, "dom"),
        r = v0(n, !0);
    je.document.addEventListener("click", r, !1),
        je.document.addEventListener("keypress", r, !1),
        ["EventTarget", "Node"].forEach((i) => {
            const u = je[i]?.prototype;
            u?.hasOwnProperty?.("addEventListener") &&
                (rn(u, "addEventListener", function (f) {
                    return function (d, y, p) {
                        if (d === "click" || d == "keypress")
                            try {
                                const m = (this.__sentry_instrumentation_handlers__ =
                                        this.__sentry_instrumentation_handlers__ || {}),
                                    _ = (m[d] = m[d] || { refCount: 0 });
                                if (!_.handler) {
                                    const g = v0(n);
                                    (_.handler = g), f.call(this, d, g, p);
                                }
                                _.refCount++;
                            } catch {}
                        return f.call(this, d, y, p);
                    };
                }),
                rn(u, "removeEventListener", function (f) {
                    return function (d, y, p) {
                        if (d === "click" || d == "keypress")
                            try {
                                const m = this.__sentry_instrumentation_handlers__ || {},
                                    _ = m[d];
                                _ &&
                                    (_.refCount--,
                                    _.refCount <= 0 &&
                                        (f.call(this, d, _.handler, p), (_.handler = void 0), delete m[d]),
                                    Object.keys(m).length === 0 && delete this.__sentry_instrumentation_handlers__);
                            } catch {}
                        return f.call(this, d, y, p);
                    };
                }));
        });
}
function JA(n) {
    if (n.type !== th) return !1;
    try {
        if (!n.target || n.target._sentryId !== eh) return !1;
    } catch {}
    return !0;
}
function tM(n, r) {
    return n !== "keypress"
        ? !1
        : r?.tagName
          ? !(r.tagName === "INPUT" || r.tagName === "TEXTAREA" || r.isContentEditable)
          : !0;
}
function v0(n, r = !1) {
    return (i) => {
        if (!i || i._sentryCaptured) return;
        const o = eM(i);
        if (tM(i.type, o)) return;
        Ir(i, "_sentryCaptured", !0), o && !o._sentryId && Ir(o, "_sentryId", yn());
        const u = i.type === "keypress" ? "input" : i.type;
        JA(i) || (n({ event: i, name: u, global: r }), (th = i.type), (eh = o ? o._sentryId : void 0)),
            clearTimeout(g0),
            (g0 = je.setTimeout(() => {
                (eh = void 0), (th = void 0);
            }, WA));
    };
}
function eM(n) {
    try {
        return n.target;
    } catch {
        return null;
    }
}
let Bu;
function cb(n) {
    const r = "history";
    Da(r, n), Aa(r, nM);
}
function nM() {
    if (
        (je.addEventListener("popstate", () => {
            const r = je.location.href,
                i = Bu;
            if (((Bu = r), i === r)) return;
            En("history", { from: i, to: r });
        }),
        !OA())
    )
        return;
    function n(r) {
        return function (...i) {
            const o = i.length > 2 ? i[2] : void 0;
            if (o) {
                const u = Bu,
                    f = rM(String(o));
                if (((Bu = f), u === f)) return r.apply(this, i);
                En("history", { from: u, to: f });
            }
            return r.apply(this, i);
        };
    }
    rn(je.history, "pushState", n), rn(je.history, "replaceState", n);
}
function rM(n) {
    try {
        return new URL(n, je.location.origin).toString();
    } catch {
        return n;
    }
}
const nl = {};
function aM(n) {
    const r = nl[n];
    if (r) return r;
    let i = je[n];
    if (Fd(i)) return (nl[n] = i.bind(je));
    const o = je.document;
    if (o && typeof o.createElement == "function")
        try {
            const u = o.createElement("iframe");
            (u.hidden = !0), o.head.appendChild(u);
            const f = u.contentWindow;
            f?.[n] && (i = f[n]), o.head.removeChild(u);
        } catch (u) {
            ZA && _t.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `, u);
        }
    return i && (nl[n] = i.bind(je));
}
function iM(n) {
    nl[n] = void 0;
}
const ko = "__sentry_xhr_v3__";
function oM(n) {
    Da("xhr", n), Aa("xhr", sM);
}
function sM() {
    if (!je.XMLHttpRequest) return;
    const n = XMLHttpRequest.prototype;
    (n.open = new Proxy(n.open, {
        apply(r, i, o) {
            const u = new Error(),
                f = rr() * 1e3,
                d = nr(o[0]) ? o[0].toUpperCase() : void 0,
                y = uM(o[1]);
            if (!d || !y) return r.apply(i, o);
            (i[ko] = { method: d, url: y, request_headers: {} }),
                d === "POST" && y.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
            const p = () => {
                const m = i[ko];
                if (m && i.readyState === 4) {
                    try {
                        m.status_code = i.status;
                    } catch {}
                    const _ = { endTimestamp: rr() * 1e3, startTimestamp: f, xhr: i, virtualError: u };
                    En("xhr", _);
                }
            };
            return (
                "onreadystatechange" in i && typeof i.onreadystatechange == "function"
                    ? (i.onreadystatechange = new Proxy(i.onreadystatechange, {
                          apply(m, _, g) {
                              return p(), m.apply(_, g);
                          },
                      }))
                    : i.addEventListener("readystatechange", p),
                (i.setRequestHeader = new Proxy(i.setRequestHeader, {
                    apply(m, _, g) {
                        const [T, O] = g,
                            k = _[ko];
                        return k && nr(T) && nr(O) && (k.request_headers[T.toLowerCase()] = O), m.apply(_, g);
                    },
                })),
                r.apply(i, o)
            );
        },
    })),
        (n.send = new Proxy(n.send, {
            apply(r, i, o) {
                const u = i[ko];
                if (!u) return r.apply(i, o);
                o[0] !== void 0 && (u.body = o[0]);
                const f = { startTimestamp: rr() * 1e3, xhr: i };
                return En("xhr", f), r.apply(i, o);
            },
        }));
}
function uM(n) {
    if (nr(n)) return n;
    try {
        return n.toString();
    } catch {}
}
const lM = 40;
function cM(n, r = aM("fetch")) {
    let i = 0,
        o = 0;
    async function u(f) {
        const d = f.body.length;
        (i += d), o++;
        const y = {
            body: f.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: n.headers,
            keepalive: i <= 6e4 && o < 15,
            ...n.fetchOptions,
        };
        try {
            const p = await r(n.url, y);
            return {
                statusCode: p.status,
                headers: {
                    "x-sentry-rate-limits": p.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": p.headers.get("Retry-After"),
                },
            };
        } catch (p) {
            throw (iM("fetch"), p);
        } finally {
            (i -= d), o--;
        }
    }
    return HD(n, u, Yh(n.bufferSize || lM));
}
const jl = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    fM = 30,
    dM = 50;
function nh(n, r, i, o) {
    const u = { filename: n, function: r === "<anonymous>" ? wa : r, in_app: !0 };
    return i !== void 0 && (u.lineno = i), o !== void 0 && (u.colno = o), u;
}
const hM = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    mM =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    pM = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    yM = /at (.+?) ?\(data:(.+?),/,
    gM = (n) => {
        const r = n.match(yM);
        if (r) return { filename: `<data:${r[2]}>`, function: r[1] };
        const i = hM.exec(n);
        if (i) {
            const [, u, f, d] = i;
            return nh(u, wa, +f, +d);
        }
        const o = mM.exec(n);
        if (o) {
            if (o[2]?.indexOf("eval") === 0) {
                const y = pM.exec(o[2]);
                y && ((o[2] = y[1]), (o[3] = y[2]), (o[4] = y[3]));
            }
            const [f, d] = fb(o[1] || wa, o[2]);
            return nh(d, f, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0);
        }
    },
    vM = [fM, gM],
    _M =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    bM = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    SM = (n) => {
        const r = _M.exec(n);
        if (r) {
            if (r[3] && r[3].indexOf(" > eval") > -1) {
                const f = bM.exec(r[3]);
                f && ((r[1] = r[1] || "eval"), (r[3] = f[1]), (r[4] = f[2]), (r[5] = ""));
            }
            let o = r[3],
                u = r[1] || wa;
            return ([u, o] = fb(u, o)), nh(o, u, r[4] ? +r[4] : void 0, r[5] ? +r[5] : void 0);
        }
    },
    EM = [dM, SM],
    TM = [vM, EM],
    xM = __(...TM),
    fb = (n, r) => {
        const i = n.indexOf("safari-extension") !== -1,
            o = n.indexOf("safari-web-extension") !== -1;
        return i || o
            ? [n.indexOf("@") !== -1 ? n.split("@")[0] : wa, i ? `safari-extension:${r}` : `safari-web-extension:${r}`]
            : [n, r];
    },
    Uu = 1024,
    wM = "Breadcrumbs",
    OM = (n = {}) => {
        const r = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...n };
        return {
            name: wM,
            setup(i) {
                r.console && mA(CM(i)),
                    r.dom && FA(MM(i, r.dom)),
                    r.xhr && oM(RM(i)),
                    r.fetch && MA(NM(i)),
                    r.history && cb(zM(i)),
                    r.sentry && i.on("beforeSendEvent", AM(i));
            },
        };
    },
    DM = OM;
function AM(n) {
    return function (i) {
        Ue() === n &&
            Oa(
                {
                    category: `sentry.${i.type === "transaction" ? "transaction" : "event"}`,
                    event_id: i.event_id,
                    level: i.level,
                    message: _a(i),
                },
                { event: i }
            );
    };
}
function MM(n, r) {
    return function (o) {
        if (Ue() !== n) return;
        let u,
            f,
            d = typeof r == "object" ? r.serializeAttribute : void 0,
            y = typeof r == "object" && typeof r.maxStringLength == "number" ? r.maxStringLength : void 0;
        y &&
            y > Uu &&
            (jl &&
                _t.warn(
                    `\`dom.maxStringLength\` cannot exceed ${Uu}, but a value of ${y} was configured. Sentry will use ${Uu} instead.`
                ),
            (y = Uu)),
            typeof d == "string" && (d = [d]);
        try {
            const m = o.event,
                _ = BM(m) ? m.target : m;
            (u = w_(_, { keyAttrs: d, maxStringLength: y })), (f = kO(_));
        } catch {
            u = "<unknown>";
        }
        if (u.length === 0) return;
        const p = { category: `ui.${o.name}`, message: u };
        f && (p.data = { "ui.component_name": f }), Oa(p, { event: o.event, name: o.name, global: o.global });
    };
}
function CM(n) {
    return function (i) {
        if (Ue() !== n) return;
        const o = {
            category: "console",
            data: { arguments: i.args, logger: "console" },
            level: yA(i.level),
            message: Rv(i.args, " "),
        };
        if (i.level === "assert")
            if (i.args[0] === !1)
                (o.message = `Assertion failed: ${Rv(i.args.slice(1), " ") || "console.assert"}`),
                    (o.data.arguments = i.args.slice(1));
            else return;
        Oa(o, { input: i.args, level: i.level });
    };
}
function RM(n) {
    return function (i) {
        if (Ue() !== n) return;
        const { startTimestamp: o, endTimestamp: u } = i,
            f = i.xhr[ko];
        if (!o || !u || !f) return;
        const { method: d, url: y, status_code: p, body: m } = f,
            _ = { method: d, url: y, status_code: p },
            g = { xhr: i.xhr, input: m, startTimestamp: o, endTimestamp: u },
            T = { category: "xhr", data: _, type: "http", level: sb(p) };
        n.emit("beforeOutgoingRequestBreadcrumb", T, g), Oa(T, g);
    };
}
function NM(n) {
    return function (i) {
        if (Ue() !== n) return;
        const { startTimestamp: o, endTimestamp: u } = i;
        if (u && !(i.fetchData.url.match(/sentry_key/) && i.fetchData.method === "POST"))
            if ((i.fetchData.method, i.fetchData.url, i.error)) {
                const f = i.fetchData,
                    d = { data: i.error, input: i.args, startTimestamp: o, endTimestamp: u },
                    y = { category: "fetch", data: f, level: "error", type: "http" };
                n.emit("beforeOutgoingRequestBreadcrumb", y, d), Oa(y, d);
            } else {
                const f = i.response,
                    d = { ...i.fetchData, status_code: f?.status };
                i.fetchData.request_body_size, i.fetchData.response_body_size, f?.status;
                const y = { input: i.args, response: f, startTimestamp: o, endTimestamp: u },
                    p = { category: "fetch", data: d, type: "http", level: sb(d.status_code) };
                n.emit("beforeOutgoingRequestBreadcrumb", p, y), Oa(p, y);
            }
    };
}
function zM(n) {
    return function (i) {
        if (Ue() !== n) return;
        let o = i.from,
            u = i.to;
        const f = Ed(ue.location.href);
        let d = o ? Ed(o) : void 0;
        const y = Ed(u);
        d?.path || (d = f),
            f.protocol === y.protocol && f.host === y.host && (u = y.relative),
            f.protocol === d.protocol && f.host === d.host && (o = d.relative),
            Oa({ category: "navigation", data: { from: o, to: u } });
    };
}
function BM(n) {
    return !!n && !!n.target;
}
const UM = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "BroadcastChannel",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "SharedWorker",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
    ],
    LM = "BrowserApiErrors",
    HM = (n = {}) => {
        const r = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...n,
        };
        return {
            name: LM,
            setupOnce() {
                r.setTimeout && rn(ue, "setTimeout", _0),
                    r.setInterval && rn(ue, "setInterval", _0),
                    r.requestAnimationFrame && rn(ue, "requestAnimationFrame", jM),
                    r.XMLHttpRequest && "XMLHttpRequest" in ue && rn(XMLHttpRequest.prototype, "send", YM);
                const i = r.eventTarget;
                i && (Array.isArray(i) ? i : UM).forEach((u) => qM(u, r));
            },
        };
    },
    kM = HM;
function _0(n) {
    return function (...r) {
        const i = r[0];
        return (
            (r[0] = xi(i, { mechanism: { handled: !1, type: `auto.browser.browserapierrors.${qr(n)}` } })),
            n.apply(this, r)
        );
    };
}
function jM(n) {
    return function (r) {
        return n.apply(this, [
            xi(r, {
                mechanism: {
                    data: { handler: qr(n) },
                    handled: !1,
                    type: "auto.browser.browserapierrors.requestAnimationFrame",
                },
            }),
        ]);
    };
}
function YM(n) {
    return function (...r) {
        const i = this;
        return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((u) => {
                u in i &&
                    typeof i[u] == "function" &&
                    rn(i, u, function (f) {
                        const d = {
                                mechanism: {
                                    data: { handler: qr(f) },
                                    handled: !1,
                                    type: `auto.browser.browserapierrors.xhr.${u}`,
                                },
                            },
                            y = Bh(f);
                        return y && (d.mechanism.data.handler = qr(y)), xi(f, d);
                    });
            }),
            n.apply(this, r)
        );
    };
}
function qM(n, r) {
    const o = ue[n]?.prototype;
    o?.hasOwnProperty?.("addEventListener") &&
        (rn(o, "addEventListener", function (u) {
            return function (f, d, y) {
                try {
                    GM(d) &&
                        (d.handleEvent = xi(d.handleEvent, {
                            mechanism: {
                                data: { handler: qr(d), target: n },
                                handled: !1,
                                type: "auto.browser.browserapierrors.handleEvent",
                            },
                        }));
                } catch {}
                return (
                    r.unregisterOriginalCallbacks && IM(this, f, d),
                    u.apply(this, [
                        f,
                        xi(d, {
                            mechanism: {
                                data: { handler: qr(d), target: n },
                                handled: !1,
                                type: "auto.browser.browserapierrors.addEventListener",
                            },
                        }),
                        y,
                    ])
                );
            };
        }),
        rn(o, "removeEventListener", function (u) {
            return function (f, d, y) {
                try {
                    const p = d.__sentry_wrapped__;
                    p && u.call(this, f, p, y);
                } catch {}
                return u.call(this, f, d, y);
            };
        }));
}
function GM(n) {
    return typeof n.handleEvent == "function";
}
function IM(n, r, i) {
    n &&
        typeof n == "object" &&
        "removeEventListener" in n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener(r, i);
}
const XM = (n = {}) => {
        const r = n.lifecycle ?? "route";
        return {
            name: "BrowserSession",
            setupOnce() {
                if (typeof ue.document > "u") {
                    jl &&
                        _t.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                    return;
                }
                Jv({ ignoreDuration: !0 }), bd();
                const i = Qr();
                let o = i.getUser();
                i.addScopeListener((u) => {
                    const f = u.getUser();
                    (o?.id !== f?.id || o?.ip_address !== f?.ip_address) && (bd(), (o = f));
                }),
                    r === "route" &&
                        cb(({ from: u, to: f }) => {
                            u !== f && (Jv({ ignoreDuration: !0 }), bd());
                        });
            },
        };
    },
    QM = "CultureContext",
    VM = () => ({
        name: QM,
        preprocessEvent(n) {
            const r = KM();
            r && (n.contexts = { ...n.contexts, culture: { ...r, ...n.contexts?.culture } });
        },
    }),
    PM = VM;
function KM() {
    try {
        const n = ue.Intl;
        if (!n) return;
        const r = n.DateTimeFormat().resolvedOptions();
        return { locale: r.locale, timezone: r.timeZone, calendar: r.calendar };
    } catch {
        return;
    }
}
const ZM = "GlobalHandlers",
    WM = (n = {}) => {
        const r = { onerror: !0, onunhandledrejection: !0, ...n };
        return {
            name: ZM,
            setupOnce() {
                Error.stackTraceLimit = 50;
            },
            setup(i) {
                r.onerror && ($M(i), b0("onerror")), r.onunhandledrejection && (JM(i), b0("onunhandledrejection"));
            },
        };
    },
    FM = WM;
function $M(n) {
    AO((r) => {
        const { stackParser: i, attachStacktrace: o } = db();
        if (Ue() !== n || ub()) return;
        const { msg: u, url: f, line: d, column: y, error: p } = r,
            m = n4(Ih(i, p || u, void 0, o, !1), f, d, y);
        (m.level = "error"),
            I_(m, { originalException: p, mechanism: { handled: !1, type: "auto.browser.global_handlers.onerror" } });
    });
}
function JM(n) {
    CO((r) => {
        const { stackParser: i, attachStacktrace: o } = db();
        if (Ue() !== n || ub()) return;
        const u = t4(r),
            f = Bl(u) ? e4(u) : Ih(i, u, void 0, o, !0);
        (f.level = "error"),
            I_(f, {
                originalException: u,
                mechanism: { handled: !1, type: "auto.browser.global_handlers.onunhandledrejection" },
            });
    });
}
function t4(n) {
    if (Bl(n)) return n;
    try {
        if ("reason" in n) return n.reason;
        if ("detail" in n && "reason" in n.detail) return n.detail.reason;
    } catch {}
    return n;
}
function e4(n) {
    return {
        exception: {
            values: [
                { type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(n)}` },
            ],
        },
    };
}
function n4(n, r, i, o) {
    const u = (n.exception = n.exception || {}),
        f = (u.values = u.values || []),
        d = (f[0] = f[0] || {}),
        y = (d.stacktrace = d.stacktrace || {}),
        p = (y.frames = y.frames || []),
        m = o,
        _ = i,
        g = r4(r) ?? zh();
    return p.length === 0 && p.push({ colno: m, filename: g, function: wa, in_app: !0, lineno: _ }), n;
}
function b0(n) {
    jl && _t.log(`Global Handler attached: ${n}`);
}
function db() {
    return Ue()?.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
function r4(n) {
    if (!(!nr(n) || n.length === 0)) return n.startsWith("data:") ? `<${WD(n, !1)}>` : n;
}
const a4 = () => ({
        name: "HttpContext",
        preprocessEvent(n) {
            if (!ue.navigator && !ue.location && !ue.document) return;
            const r = UA(),
                i = { ...r.headers, ...n.request?.headers };
            n.request = { ...r, ...n.request, headers: i };
        },
    }),
    i4 = "cause",
    o4 = 5,
    s4 = "LinkedErrors",
    u4 = (n = {}) => {
        const r = n.limit || o4,
            i = n.key || i4;
        return {
            name: s4,
            preprocessEvent(o, u, f) {
                const d = f.getOptions();
                hA(qh, d.stackParser, i, r, o, u);
            },
        };
    },
    l4 = u4;
function c4() {
    return f4()
        ? (jl &&
              Ai(() => {
                  console.error(
                      "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
                  );
              }),
          !0)
        : !1;
}
function f4() {
    if (typeof ue.window > "u") return !1;
    const n = ue;
    if (n.nw || !(n.chrome || n.browser)?.runtime?.id) return !1;
    const i = zh(),
        o = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
    return !(ue === ue.top && o.some((f) => i.startsWith(`${f}://`)));
}
function d4(n) {
    return [iA(), eA(), wA(), kM(), DM(), FM(), l4(), _A(), a4(), PM(), XM()];
}
function h4(n = {}) {
    const r = !n.skipBrowserExtensionCheck && c4();
    let i = n.defaultIntegrations == null ? d4() : n.defaultIntegrations;
    const o = {
        ...n,
        enabled: r ? !1 : n.enabled,
        stackParser: OO(n.stackParser || xM),
        integrations: xD({ integrations: n.integrations, defaultIntegrations: i }),
        transport: n.transport || cM,
    };
    return KD(PA, o);
}
function m4(n) {
    const r = { ...n };
    return rb(r, "react"), gD("react", { version: wt.version }), h4(r);
}
const p4 = ["S", "Q", "U", "A", "R", "E", "S"];
function S0() {
    return Lt.jsxs("div", {
        className: "loading-screen",
        children: [
            Lt.jsx("div", {
                className: "loading-tiles",
                children: p4.map((n, r) =>
                    Lt.jsx(
                        "div",
                        { className: "loading-tile", style: { animationDelay: `${r * 0.1}s` }, children: n },
                        r
                    )
                ),
            }),
            Lt.jsx("div", { className: "loading-bar", children: Lt.jsx("div", { className: "loading-bar__fill" }) }),
        ],
    });
}
class y4 {
    ctx = null;
    buffers = new Map();
    current = 0;
    loading = !1;
    resuming = null;
    soundPaths = {
        c1: "/sound/c1.mp3",
        c2: "/sound/c2.mp3",
        c3: "/sound/c3.mp3",
        c4: "/sound/c4.mp3",
        fail: "/sound/cancel.mp3",
        correct: "/sound/correct.mp3",
        bonus: "/sound/bonus.mp3",
        win: "/sound/win.mp3",
    };
    constructor() {
        const r = () => {
            this.ensureContext();
        };
        document.addEventListener("touchstart", r, !0),
            document.addEventListener("touchend", r, !0),
            document.addEventListener("mousedown", r, !0),
            document.addEventListener("click", r, !0),
            document.addEventListener("visibilitychange", () => {
                document.visibilityState === "visible" && this.ctx && this.ensureContext();
            });
    }
    ensureContext() {
        try {
            const r = window.AudioContext || window.webkitAudioContext;
            if (!r) return;
            if (!this.ctx) {
                this.ctx = new r();
                const i = this.ctx.createBuffer(1, 1, 22050),
                    o = this.ctx.createBufferSource();
                (o.buffer = i), o.connect(this.ctx.destination), o.start(0);
            }
            this.ctx.state === "suspended" && this.ctx.resume().catch(() => {}),
                this.loading || ((this.loading = !0), this.preload());
        } catch {}
    }
    async preload() {
        if (!this.ctx) return;
        const r = Object.entries(this.soundPaths);
        await Promise.all(
            r.map(async ([i, o]) => {
                try {
                    const f = await (await fetch(o)).arrayBuffer(),
                        d = await this.ctx.decodeAudioData(f);
                    this.buffers.set(i, d);
                } catch {}
            })
        );
    }
    play(r) {
        if (!this.ctx) return;
        const i = this.buffers.get(r);
        if (i) {
            if (this.ctx.state === "suspended") {
                this.ctx.resume().catch(() => {});
                return;
            }
            if (this.ctx.state === "running")
                try {
                    const o = this.ctx.createBufferSource();
                    (o.buffer = i), o.connect(this.ctx.destination), o.start(0);
                } catch {}
        }
    }
    Click() {
        const r = ["c1", "c2", "c3", "c4"];
        this.play(r[this.current]), (this.current = (this.current + 1) % 4);
    }
    soundFail() {
        this.play("fail");
    }
    soundCorrect() {
        this.play("correct");
    }
    soundBonus() {
        this.play("bonus");
    }
    soundWin() {
        this.play("win");
    }
    PlayMusic() {}
}
m4({
    dsn: "https://a5b1e4fc71822847e3bb0e4f3e5b7335@o4508750331248640.ingest.de.sentry.io/4508750333804624",
    integrations: [],
});
const g4 = $t.lazy(() => vS(() => import("./App-CoJMMPhn.js"), []));
CS.createRoot(document.getElementById("root")).render(
    Lt.jsx($t.StrictMode, {
        children: Lt.jsx(tE, {
            children: Lt.jsx(PS, {
                store: y_,
                children: Lt.jsx(x0, {
                    loading: Lt.jsx(S0, {}),
                    persistor: vO,
                    children: Lt.jsx(wt.Suspense, { fallback: Lt.jsx(S0, {}), children: Lt.jsx(g4, {}) }),
                }),
            }),
        }),
    })
);
const Lu = new y4();
export {
    $4 as $,
    V4 as A,
    Q4 as B,
    dC as C,
    Z4 as D,
    sC as E,
    h2 as F,
    lC as G,
    I4 as H,
    F4 as I,
    Bw as J,
    E4 as K,
    dd as L,
    C4 as M,
    ww as N,
    R4 as O,
    vl as P,
    q4 as Q,
    $t as R,
    _C as S,
    Lu as T,
    hd as U,
    fd as V,
    rC as W,
    nC as X,
    mC as Y,
    gC as Z,
    vC as _,
    OS as a,
    hC as a0,
    A4 as a1,
    yC as a2,
    pC as a3,
    z4 as a4,
    P4 as a5,
    X4 as a6,
    B4 as a7,
    tC as a8,
    W4 as a9,
    S0 as aa,
    L4 as ab,
    J4 as ac,
    pv as ad,
    H4 as ae,
    k4 as af,
    Sh as ag,
    SC as b,
    b4 as c,
    S4 as d,
    _4 as e,
    w4 as f,
    D4 as g,
    O4 as h,
    oC as i,
    Lt as j,
    uC as k,
    fC as l,
    cC as m,
    G4 as n,
    Ko as o,
    N4 as p,
    M4 as q,
    wt as r,
    ph as s,
    v4 as t,
    bC as u,
    j4 as v,
    zS as w,
    Y4 as x,
    ba as y,
    K4 as z,
};
//# sourceMappingURL=index-CVA5676O.js.map
