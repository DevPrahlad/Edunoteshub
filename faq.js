/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function() {
    "use strict";
    const w = new Map
      , pt = {
        set(e, t, n) {
            w.has(e) || w.set(e, new Map);
            const s = w.get(e);
            s.has(t) || 0 === s.size ? s.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (e,t)=>w.has(e) && w.get(e).get(t) || null,
        remove(e, t) {
            if (!w.has(e))
                return;
            const n = w.get(e);
            n.delete(t),
            0 === n.size && w.delete(e)
        }
    }
      , ft = "transitionend"
      , At = e=>(e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e,t)=>`#${CSS.escape(t)}`)),
    e)
      , zt = e=>{
        e.dispatchEvent(new Event(ft))
    }
      , j = e=>!!e && "object" == typeof e && (void 0 !== e.jquery && (e = e[0]),
    void 0 !== e.nodeType)
      , x = e=>j(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(At(e)) : null
      , V = e=>{
        if (!j(e) || 0 === e.getClientRects().length)
            return !1;
        const n = "visible" === getComputedStyle(e).getPropertyValue("visibility")
          , t = e.closest("details:not([open])");
        if (!t)
            return n;
        if (t !== e) {
            const n = e.closest("summary");
            if (n && n.parentNode !== t)
                return !1;
            if (null === n)
                return !1
        }
        return n
    }
      , O = e=>!e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))
      , Dt = e=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? Dt(e.parentNode) : null
    }
      , ce = ()=>{}
      , oe = e=>{
        e.offsetHeight
    }
      , Bt = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , mt = []
      , d = ()=>"rtl" === document.documentElement.dir
      , u = e=>{
        var t = ()=>{
            const t = Bt();
            if (t) {
                const n = e.NAME
                  , s = t.fn[n];
                t.fn[n] = e.jQueryInterface,
                t.fn[n].Constructor = e,
                t.fn[n].noConflict = ()=>(t.fn[n] = s,
                e.jQueryInterface)
            }
        }
        ;
        "loading" === document.readyState ? (mt.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const e of mt)
                e()
        }
        ),
        mt.push(t)) : t()
    }
      , o = (e,t=[],n=e)=>"function" == typeof e ? e(...t) : n
      , Vt = (e,t,n=!0)=>{
        if (!n)
            return void o(e);
        const a = (e=>{
            if (!e)
                return 0;
            let {transitionDuration: t, transitionDelay: n} = window.getComputedStyle(e);
            const s = Number.parseFloat(t)
              , o = Number.parseFloat(n);
            return s || o ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
        }
        )(t) + 5;
        let s = !1;
        const i = ({target: n})=>{
            n === t && (s = !0,
            t.removeEventListener(ft, i),
            o(e))
        }
        ;
        t.addEventListener(ft, i),
        setTimeout(()=>{
            s || zt(t)
        }
        , a)
    }
      , ht = (e,t,n,s)=>{
        const i = e.length;
        let o = e.indexOf(t);
        return -1 === o ? !n && s ? e[i - 1] : e[0] : (o += n ? 1 : -1,
        s && (o = (o + i) % i),
        e[Math.max(0, Math.min(o, i - 1))])
    }
      , Ko = /[^.]*(?=\..*)\.|.*/
      , Wo = /\..*/
      , Vo = /::\d+$/
      , rt = {};
    let Gt = 1;
    const Zt = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , Eo = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function hn(e, t) {
        return t && `${t}::${Gt++}` || e.uidEvent || Gt++
    }
    function fn(e) {
        const t = hn(e);
        return e.uidEvent = t,
        rt[t] = rt[t] || {},
        rt[t]
    }
    function gn(e, t, n=null) {
        return Object.values(e).find(e=>e.callable === t && e.delegationSelector === n)
    }
    function bn(e, t, n) {
        const o = "string" == typeof t
          , i = o ? n : t || n;
        let s = wn(e);
        return Eo.has(s) || (s = e),
        [o, i, s]
    }
    function jn(t, n, s, o, i) {
        if ("string" != typeof n || !t)
            return;
        let[c,a,l] = bn(n, s, o);
        if (n in Zt) {
            const e = e=>function(t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
                    return e.call(this, t)
            }
            ;
            a = e(a)
        }
        const u = fn(t)
          , h = u[l] || (u[l] = {})
          , d = gn(h, a, c ? s : null);
        if (d)
            return void (d.oneOff = d.oneOff && i);
        const m = hn(a, n.replace(Ko, ""))
          , r = c ? function(t, n, s) {
            return function o(i) {
                const a = t.querySelectorAll(n);
                for (let {target: r} = i; r && r !== this; r = r.parentNode)
                    for (const c of a)
                        if (c === r)
                            return Ge(i, {
                                delegateTarget: r
                            }),
                            o.oneOff && e.off(t, i.type, n, s),
                            s.apply(r, [i])
            }
        }(t, s, a) : function(t, n) {
            return function s(o) {
                return Ge(o, {
                    delegateTarget: t
                }),
                s.oneOff && e.off(t, o.type, n),
                n.apply(t, [o])
            }
        }(t, a);
        r.delegationSelector = c ? s : null,
        r.callable = a,
        r.oneOff = i,
        r.uidEvent = m,
        h[m] = r,
        t.addEventListener(l, r, c)
    }
    function Ze(e, t, n, s, o) {
        const i = gn(t[n], s, o);
        i && (e.removeEventListener(n, i, Boolean(o)),
        delete t[n][i.uidEvent])
    }
    function uo(e, t, n, s) {
        const o = t[n] || {};
        for (const [a,i] of Object.entries(o))
            a.includes(s) && Ze(e, t, n, i.callable, i.delegationSelector)
    }
    function wn(e) {
        return e = e.replace(Wo, ""),
        Zt[e] || e
    }
    const e = {
        on(e, t, n, s) {
            jn(e, t, n, s, !1)
        },
        one(e, t, n, s) {
            jn(e, t, n, s, !0)
        },
        off(e, t, n, s) {
            if ("string" != typeof t || !e)
                return;
            const [c,a,i] = bn(t, n, s)
              , l = i !== t
              , o = fn(e)
              , r = o[i] || {}
              , d = t.startsWith(".");
            if (void 0 === a) {
                if (d)
                    for (const n of Object.keys(o))
                        uo(e, o, n, t.slice(1));
                for (const [s,n] of Object.entries(r)) {
                    const a = s.replace(Vo, "");
                    l && !t.includes(a) || Ze(e, o, i, n.callable, n.delegationSelector)
                }
            } else {
                if (!Object.keys(r).length)
                    return;
                Ze(e, o, i, a, c ? n : null)
            }
        },
        trigger(e, t, n) {
            if ("string" != typeof t || !e)
                return null;
            const i = Bt();
            let s = null
              , a = !0
              , r = !0
              , c = !1;
            t !== wn(t) && i && (s = i.Event(t, n),
            i(e).trigger(s),
            a = !s.isPropagationStopped(),
            r = !s.isImmediatePropagationStopped(),
            c = s.isDefaultPrevented());
            const o = Ge(new Event(t,{
                bubbles: a,
                cancelable: !0
            }), n);
            return c && o.preventDefault(),
            r && e.dispatchEvent(o),
            o.defaultPrevented && s && s.preventDefault(),
            o
        }
    };
    function Ge(e, t={}) {
        for (const [n,s] of Object.entries(t))
            try {
                e[n] = s
            } catch {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: ()=>s
                })
            }
        return e
    }
    function On(e) {
        if ("true" === e)
            return !0;
        if ("false" === e)
            return !1;
        if (e === Number(e).toString())
            return Number(e);
        if ("" === e || "null" === e)
            return null;
        if ("string" != typeof e)
            return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch {
            return e
        }
    }
    function Ye(e) {
        return e.replace(/[A-Z]/g, e=>`-${e.toLowerCase()}`)
    }
    const b = {
        setDataAttribute(e, t, n) {
            e.setAttribute(`data-bs-${Ye(t)}`, n)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${Ye(t)}`)
        },
        getDataAttributes(e) {
            if (!e)
                return {};
            const t = {}
              , n = Object.keys(e.dataset).filter(e=>e.startsWith("bs") && !e.startsWith("bsConfig"));
            for (const o of n) {
                let s = o.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length),
                t[s] = On(e.dataset[o])
            }
            return t
        },
        getDataAttribute: (e,t)=>On(e.getAttribute(`data-bs-${Ye(t)}`))
    };
    class Q {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            const n = j(t) ? b.getDataAttribute(t, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof n ? n : {},
                ...j(t) ? b.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t=this.constructor.DefaultType) {
            for (const [s,o] of Object.entries(t)) {
                const i = e[s]
                  , a = j(i) ? "element" : null == (n = i) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(o).test(a))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`)
            }
            var n
        }
    }
    class h extends Q {
        constructor(e, t) {
            super(),
            (e = x(e)) && (this._element = e,
            this._config = this._getConfig(t),
            pt.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            pt.remove(this._element, this.constructor.DATA_KEY),
            e.off(this._element, this.constructor.EVENT_KEY);
            for (const e of Object.getOwnPropertyNames(this))
                this[e] = null
        }
        _queueCallback(e, t, n=!0) {
            Vt(e, t, n)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        static getInstance(e) {
            return pt.get(x(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t={}) {
            return this.getInstance(e) || new this(e,"object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.3.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }
    const qe = e=>{
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
            let n = e.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            t = n && "#" !== n ? At(n.trim()) : null
        }
        return t
    }
      , t = {
        find: (e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e,t=document.documentElement)=>Element.prototype.querySelector.call(t, e),
        children: (e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),
        parents(e, t) {
            const s = [];
            let n = e.parentNode.closest(t);
            for (; n; )
                s.push(n),
                n = n.parentNode.closest(t);
            return s
        },
        prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");
            return this.find(t, e).filter(e=>!O(e) && V(e))
        },
        getSelectorFromElement(e) {
            const n = qe(e);
            return n && t.findOne(n) ? n : null
        },
        getElementFromSelector(e) {
            const n = qe(e);
            return n ? t.findOne(n) : null
        },
        getMultipleElementsFromSelector(e) {
            const n = qe(e);
            return n ? t.find(n) : []
        }
    }
      , ve = (n,s="hide")=>{
        const i = `click.dismiss${n.EVENT_KEY}`
          , o = n.NAME;
        e.on(document, i, `[data-bs-dismiss="${o}"]`, function(e) {
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            O(this))
                return;
            const i = t.getElementFromSelector(this) || this.closest(`.${o}`);
            n.getOrCreateInstance(i)[s]()
        })
    }
      , kn = ".bs.alert"
      , to = `close${kn}`
      , Us = `closed${kn}`;
    class ue extends h {
        static get NAME() {
            return "alert"
        }
        close() {
            if (e.trigger(this._element, to).defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            e.trigger(this._element, Us),
            this.dispose()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = ue.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    ve(ue, "close"),
    u(ue);
    const Hn = '[data-bs-toggle="button"]';
    class be extends h {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = be.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }
    e.on(document, "click.bs.button.data-api", Hn, e=>{
        e.preventDefault();
        const t = e.target.closest(Hn);
        be.getOrCreateInstance(t).toggle()
    }
    ),
    u(be);
    const X = ".bs.swipe"
      , ks = `touchstart${X}`
      , xs = `touchmove${X}`
      , us = `touchend${X}`
      , ds = `pointerdown${X}`
      , cs = `pointerup${X}`
      , os = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , ls = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class $e extends Q {
        constructor(e, t) {
            super(),
            this._element = e,
            e && $e.isSupported() && (this._config = this._getConfig(t),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return os
        }
        static get DefaultType() {
            return ls
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            e.off(this._element, X)
        }
        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            o(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const e = Math.abs(this._deltaX);
            if (e <= 40)
                return;
            const t = e / this._deltaX;
            this._deltaX = 0,
            t && o(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (e.on(this._element, ds, e=>this._start(e)),
            e.on(this._element, cs, e=>this._end(e)),
            this._element.classList.add("pointer-event")) : (e.on(this._element, ks, e=>this._start(e)),
            e.on(this._element, xs, e=>this._move(e)),
            e.on(this._element, us, e=>this._end(e)))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const _ = ".bs.carousel"
      , Ln = ".data-api"
      , re = "next"
      , W = "prev"
      , $ = "left"
      , de = "right"
      , zs = `slide${_}`
      , Ve = `slid${_}`
      , Ds = `keydown${_}`
      , es = `mouseenter${_}`
      , ao = `mouseleave${_}`
      , fo = `dragstart${_}`
      , jo = `load${_}${Ln}`
      , yo = `click${_}${Ln}`
      , dn = "carousel"
      , ye = "active"
      , nn = ".active"
      , tn = ".carousel-item"
      , Ro = nn + tn
      , Po = {
        ArrowLeft: de,
        ArrowRight: $
    }
      , Ho = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , Io = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Z extends h {
        constructor(e, n) {
            super(e, n),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = t.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === dn && this.cycle()
        }
        static get Default() {
            return Ho
        }
        static get DefaultType() {
            return Io
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(re)
        }
        nextWhenVisible() {
            !document.hidden && V(this._element) && this.next()
        }
        prev() {
            this._slide(W)
        }
        pause() {
            this._isSliding && zt(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? e.one(this._element, Ve, ()=>this.cycle()) : this.cycle())
        }
        to(t) {
            const n = this._getItems();
            if (t > n.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void e.one(this._element, Ve, ()=>this.to(t));
            const s = this._getItemIndex(this._getActive());
            if (s === t)
                return;
            const o = t > s ? re : W;
            this._slide(o, n[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval,
            e
        }
        _addEventListeners() {
            this._config.keyboard && e.on(this._element, Ds, e=>this._keydown(e)),
            "hover" === this._config.pause && (e.on(this._element, es, ()=>this.pause()),
            e.on(this._element, ao, ()=>this._maybeEnableCycle())),
            this._config.touch && $e.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const n of t.find(".carousel-item img", this._element))
                e.on(n, fo, e=>e.preventDefault());
            const n = {
                leftCallback: ()=>this._slide(this._directionToOrder($)),
                rightCallback: ()=>this._slide(this._directionToOrder(de)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new $e(this._element,n)
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName))
                return;
            const t = Po[e.key];
            t && (e.preventDefault(),
            this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement)
                return;
            const s = t.findOne(nn, this._indicatorsElement);
            s.classList.remove(ye),
            s.removeAttribute("aria-current");
            const n = t.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            n && (n.classList.add(ye),
            n.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const e = this._activeElement || this._getActive();
            if (!e)
                return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(t, n=null) {
            if (this._isSliding)
                return;
            const o = this._getActive()
              , a = t === re
              , s = n || ht(this._getItems(), o, a, this._config.wrap);
            if (s === o)
                return;
            const c = this._getItemIndex(s)
              , l = n=>e.trigger(this._element, n, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(o),
                to: c
            });
            if (l(zs).defaultPrevented)
                return;
            if (!o || !s)
                return;
            const d = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(c),
            this._activeElement = s;
            const i = a ? "carousel-item-start" : "carousel-item-end"
              , r = a ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(r),
            oe(s),
            o.classList.add(i),
            s.classList.add(i),
            this._queueCallback(()=>{
                s.classList.remove(i, r),
                s.classList.add(ye),
                o.classList.remove(ye, r, i),
                this._isSliding = !1,
                l(Ve)
            }
            , o, this._isAnimated()),
            d && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return t.findOne(Ro, this._element)
        }
        _getItems() {
            return t.find(tn, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(e) {
            return d() ? e === $ ? W : re : e === $ ? re : W
        }
        _orderToDirection(e) {
            return d() ? e === W ? $ : de : e === W ? de : $
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = Z.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else
                    t.to(e)
            })
        }
    }
    e.on(document, yo, "[data-bs-slide], [data-bs-slide-to]", function(e) {
        const s = t.getElementFromSelector(this);
        if (!s || !s.classList.contains(dn))
            return;
        e.preventDefault();
        const n = Z.getOrCreateInstance(s)
          , o = this.getAttribute("data-bs-slide-to");
        return o ? (n.to(o),
        void n._maybeEnableCycle()) : "next" === b.getDataAttribute(this, "slide") ? (n.next(),
        void n._maybeEnableCycle()) : (n.prev(),
        void n._maybeEnableCycle())
    }),
    e.on(window, jo, ()=>{
        const e = t.find('[data-bs-ride="carousel"]');
        for (const t of e)
            Z.getOrCreateInstance(t)
    }
    ),
    u(Z);
    const ie = ".bs.collapse"
      , Bo = `show${ie}`
      , $o = `shown${ie}`
      , Uo = `hide${ie}`
      , Yo = `hidden${ie}`
      , Go = `click${ie}.data-api`
      , De = "show"
      , L = "collapse"
      , je = "collapsing"
      , oi = `:scope .${L} .${L}`
      , Pe = '[data-bs-toggle="collapse"]'
      , ii = {
        parent: null,
        toggle: !0
    }
      , ai = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class ae extends h {
        constructor(e, n) {
            super(e, n),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const s = t.find(Pe);
            for (const e of s) {
                const n = t.getSelectorFromElement(e)
                  , o = t.find(n).filter(e=>e === this._element);
                null !== n && o.length && this._triggerArray.push(e)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return ii
        }
        static get DefaultType() {
            return ai
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let n = [];
            if (this._config.parent && (n = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e !== this._element).map(e=>ae.getOrCreateInstance(e, {
                toggle: !1
            }))),
            n.length && n[0]._isTransitioning)
                return;
            if (e.trigger(this._element, Bo).defaultPrevented)
                return;
            for (const e of n)
                e.hide();
            const t = this._getDimension();
            this._element.classList.remove(L),
            this._element.classList.add(je),
            this._element.style[t] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const s = `scroll${t[0].toUpperCase() + t.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(je),
                this._element.classList.add(L, De),
                this._element.style[t] = "",
                e.trigger(this._element, $o)
            }
            , this._element, !0),
            this._element.style[t] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (e.trigger(this._element, Uo).defaultPrevented)
                return;
            const n = this._getDimension();
            this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`,
            oe(this._element),
            this._element.classList.add(je),
            this._element.classList.remove(L, De);
            for (const e of this._triggerArray) {
                const n = t.getElementFromSelector(e);
                n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0,
            this._element.style[n] = "",
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(je),
                this._element.classList.add(L),
                e.trigger(this._element, Yo)
            }
            , this._element, !0)
        }
        _isShown(e=this._element) {
            return e.classList.contains(De)
        }
        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle),
            e.parent = x(e.parent),
            e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const e = this._getFirstLevelChildren(Pe);
            for (const n of e) {
                const s = t.getElementFromSelector(n);
                s && this._addAriaAndCollapsedClass([n], this._isShown(s))
            }
        }
        _getFirstLevelChildren(e) {
            const n = t.find(oi, this._config.parent);
            return t.find(e, this._config.parent).filter(e=>!n.includes(e))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (const n of e)
                    n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            const t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function() {
                const n = ae.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            })
        }
    }
    e.on(document, Go, Pe, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        for (const e of t.getMultipleElementsFromSelector(this))
            ae.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
    }),
    u(ae);
    var J, n = "top", a = "bottom", i = "right", s = "left", ge = "auto", D = [n, a, i, s], z = "start", U = "end", Tt = "clippingParents", Qe = "viewport", I = "popper", Mt = "reference", et = D.reduce(function(e, t) {
        return e.concat([t + "-" + z, t + "-" + U])
    }, []), tt = [].concat(D, [ge]).reduce(function(e, t) {
        return e.concat([t, t + "-" + z, t + "-" + U])
    }, []), St = "beforeRead", kt = "read", Ct = "afterRead", xt = "beforeMain", wt = "main", _t = "afterMain", yt = "beforeWrite", jt = "write", bt = "afterWrite", Wn = [St, kt, Ct, xt, wt, _t, yt, jt, bt], Ht, Wt, Kt, Re;
    function p(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function r(e) {
        if (e == null)
            return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }
    function S(e) {
        return e instanceof r(e).Element || e instanceof Element
    }
    function c(e) {
        return e instanceof r(e).HTMLElement || e instanceof HTMLElement
    }
    function Je(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
    }
    const ut = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function(e) {
                var o = t.styles[e] || {}
                  , s = t.attributes[e] || {}
                  , n = t.elements[e];
                c(n) && p(n) && (Object.assign(n.style, o),
                Object.keys(s).forEach(function(e) {
                    var t = s[e];
                    !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t)
                }))
            })
        },
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach(function(e) {
                    var s = t.elements[e]
                      , o = t.attributes[e] || {}
                      , i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                        return e[t] = "",
                        e
                    }, {});
                    c(s) && p(s) && (Object.assign(s.style, i),
                    Object.keys(o).forEach(function(e) {
                        s.removeAttribute(e)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    function f(e) {
        return e.split("-")[0]
    }
    var T = Math.max
      , xe = Math.min
      , q = Math.round;
    function at() {
        var e = navigator.userAgentData;
        return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
            return e.brand + "/" + e.version
        }).join(" ") : navigator.userAgent
    }
    function Ot() {
        return !/^((?!chrome|android).)*safari/i.test(at())
    }
    function Y(e, t, n) {
        void 0 === t && (t = !1),
        void 0 === n && (n = !1);
        var s = e.getBoundingClientRect()
          , i = 1
          , a = 1;
        t && c(e) && (i = e.offsetWidth > 0 && q(s.width) / e.offsetWidth || 1,
        a = e.offsetHeight > 0 && q(s.height) / e.offsetHeight || 1);
        var o = (S(e) ? r(e) : window).visualViewport
          , u = !Ot() && n
          , l = (s.left + (u && o ? o.offsetLeft : 0)) / i
          , d = (s.top + (u && o ? o.offsetTop : 0)) / a
          , h = s.width / i
          , m = s.height / a;
        return {
            width: h,
            height: m,
            top: d,
            right: l + h,
            bottom: d + m,
            left: l,
            x: l,
            y: d
        }
    }
    function ot(e) {
        var t = Y(e)
          , n = e.offsetWidth
          , s = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - s) <= 1 && (s = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: s
        }
    }
    function Et(e, t) {
        var n, s = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (s && Je(s)) {
            n = t;
            do {
                if (n && e.isSameNode(n))
                    return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }
    function v(e) {
        return r(e).getComputedStyle(e)
    }
    function li(e) {
        return ["table", "td", "th"].indexOf(p(e)) >= 0
    }
    function C(e) {
        return ((S(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function ke(e) {
        return "html" === p(e) ? e : e.assignedSlot || e.parentNode || (Je(e) ? e.host : null) || C(e)
    }
    function Ft(e) {
        return c(e) && "fixed" !== v(e).position ? e.offsetParent : null
    }
    function ne(e) {
        for (var n = r(e), t = Ft(e); t && li(t) && "static" === v(t).position; )
            t = Ft(t);
        return t && ("html" === p(t) || "body" === p(t) && "static" === v(t).position) ? n : t || function(e) {
            var t, n, s = /firefox/i.test(at());
            if (/Trident/i.test(at()) && c(e) && "fixed" === v(e).position)
                return null;
            t = ke(e);
            for (Je(t) && (t = t.host); c(t) && ["html", "body"].indexOf(p(t)) < 0; ) {
                if (n = v(t),
                "none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || s && "filter" === n.willChange || s && n.filter && "none" !== n.filter)
                    return t;
                t = t.parentNode
            }
            return null
        }(e) || n
    }
    function Ie(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    function se(e, t, n) {
        return T(e, xe(t, n))
    }
    function Nt(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }
    function Lt(e, t) {
        return t.reduce(function(t, n) {
            return t[n] = e,
            t
        }, {})
    }
    const Rt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var l, t = e.state, j = e.name, k = e.options, u = t.elements.arrow, d = t.modifiersData.popperOffsets, h = f(t.placement), o = Ie(h), r = [s, i].indexOf(h) >= 0 ? "height" : "width";
            if (u && d) {
                var p = function(e, t) {
                    return Nt("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : e) ? e : Lt(e, D))
                }(k.padding, t)
                  , g = ot(u)
                  , E = "y" === o ? n : s
                  , w = "y" === o ? a : i
                  , _ = t.rects.reference[r] + t.rects.reference[o] - d[o] - t.rects.popper[r]
                  , y = d[o] - t.rects.reference[o]
                  , c = ne(u)
                  , b = c ? "y" === o ? c.clientHeight || 0 : c.clientWidth || 0 : 0
                  , O = _ / 2 - y / 2
                  , x = p[E]
                  , C = b - g[r] - p[w]
                  , v = b / 2 - g[r] / 2 + O
                  , m = se(x, v, C)
                  , A = o;
                t.modifiersData[j] = ((l = {})[A] = m,
                l.centerOffset = m - v,
                l)
            }
        },
        effect: function(e) {
            var n = e.state
              , s = e.options.element
              , t = void 0 === s ? "[data-popper-arrow]" : s;
            t != null && ("string" != typeof t || (t = n.elements.popper.querySelector(t))) && Et(n.elements.popper, t) && (n.elements.arrow = t)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function H(e) {
        return e.split("-")[1]
    }
    Ht = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function It(e) {
        var h, f, b, y, u = e.popper, T = e.popperRect, l = e.placement, S = e.variation, m = e.offsets, A = e.position, g = e.gpuAcceleration, w = e.adaptive, j = e.roundOffsets, k = e.isFixed, D = m.x, t = void 0 === D ? 0 : D, z = m.y, o = void 0 === z ? 0 : z, E = "function" == typeof j ? j({
            x: t,
            y: o
        }) : {
            x: t,
            y: o
        }, t = E.x, o = E.y, O = m.hasOwnProperty("x"), x = m.hasOwnProperty("y"), p = s, _ = n, c = window;
        if (w) {
            var d = ne(u)
              , M = "clientHeight"
              , F = "clientWidth";
            d === r(u) && "static" !== v(d = C(u)).position && "absolute" === A && (M = "scrollHeight",
            F = "scrollWidth"),
            (l === n || (l === s || l === i) && S === U) && (_ = a,
            o -= (k && d === c && c.visualViewport ? c.visualViewport.height : d[M]) - T.height,
            o *= g ? 1 : -1),
            l !== s && (l !== n && l !== a || S !== U) || (p = i,
            t -= (k && d === c && c.visualViewport ? c.visualViewport.width : d[F]) - T.width,
            t *= g ? 1 : -1)
        }
        return y = Object.assign({
            position: A
        }, w && Ht),
        b = !0 === j ? function(e, t) {
            var s = e.x
              , o = e.y
              , n = t.devicePixelRatio || 1;
            return {
                x: q(s * n) / n || 0,
                y: q(o * n) / n || 0
            }
        }({
            x: t,
            y: o
        }, r(u)) : {
            x: t,
            y: o
        },
        t = b.x,
        o = b.y,
        g ? Object.assign({}, y, ((h = {})[_] = x ? "0" : "",
        h[p] = O ? "0" : "",
        h.transform = (c.devicePixelRatio || 1) <= 1 ? "translate(" + t + "px, " + o + "px)" : "translate3d(" + t + "px, " + o + "px, 0)",
        h)) : Object.assign({}, y, ((f = {})[_] = x ? o + "px" : "",
        f[p] = O ? t + "px" : "",
        f.transform = "",
        f))
    }
    const ze = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , n = e.options
              , s = n.gpuAcceleration
              , c = void 0 === s || s
              , o = n.adaptive
              , l = void 0 === o || o
              , i = n.roundOffsets
              , a = void 0 === i || i
              , r = {
                placement: f(t.placement),
                variation: H(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: c,
                isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, It(Object.assign({}, r, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: l,
                roundOffsets: a
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, It(Object.assign({}, r, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    };
    J = {
        passive: !0
    };
    const Fe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var n = e.state
              , t = e.instance
              , s = e.options
              , o = s.scroll
              , i = void 0 === o || o
              , a = s.resize
              , c = void 0 === a || a
              , l = r(n.elements.popper)
              , d = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return i && d.forEach(function(e) {
                e.addEventListener("scroll", t.update, J)
            }),
            c && l.addEventListener("resize", t.update, J),
            function() {
                i && d.forEach(function(e) {
                    e.removeEventListener("scroll", t.update, J)
                }),
                c && l.removeEventListener("resize", t.update, J)
            }
        },
        data: {}
    };
    Wt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Ee(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return Wt[e]
        })
    }
    Kt = {
        start: "end",
        end: "start"
    };
    function qt(e) {
        return e.replace(/start|end/g, function(e) {
            return Kt[e]
        })
    }
    function Se(e) {
        var t = r(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function Me(e) {
        return Y(C(e)).left + Se(e).scrollLeft
    }
    function Te(e) {
        var t = v(e)
          , n = t.overflow
          , s = t.overflowX
          , o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + s)
    }
    function Qt(e) {
        return ["html", "body", "#document"].indexOf(p(e)) >= 0 ? e.ownerDocument.body : c(e) && Te(e) ? e : Qt(ke(e))
    }
    function ee(e, t) {
        void 0 === t && (t = []);
        var s, n = Qt(e), o = n === (null == (s = e.ownerDocument) ? void 0 : s.body), i = r(n), a = o ? [i].concat(i.visualViewport || [], Te(n) ? n : []) : n, c = t.concat(a);
        return o ? c : c.concat(ee(ke(a)))
    }
    function Ne(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function en(e, t, n) {
        return t === Qe ? Ne(function(e, t) {
            var s, d = r(e), o = C(e), n = d.visualViewport, i = o.clientWidth, a = o.clientHeight, c = 0, l = 0;
            return n && (i = n.width,
            a = n.height,
            s = Ot(),
            (s || !s && "fixed" === t) && (c = n.offsetLeft,
            l = n.offsetTop)),
            {
                width: i,
                height: a,
                x: c + Me(e),
                y: l
            }
        }(e, n)) : S(t) ? function(e, t) {
            var n = Y(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop,
            n.left = n.left + e.clientLeft,
            n.bottom = n.top + e.clientHeight,
            n.right = n.left + e.clientWidth,
            n.width = e.clientWidth,
            n.height = e.clientHeight,
            n.x = n.left,
            n.y = n.top,
            n
        }(t, n) : Ne(function(e) {
            var s, n = C(e), o = Se(e), t = null == (s = e.ownerDocument) ? void 0 : s.body, i = T(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), r = T(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), a = -o.scrollLeft + Me(e), c = -o.scrollTop;
            return "rtl" === v(t || n).direction && (a += T(n.clientWidth, t ? t.clientWidth : 0) - i),
            {
                width: i,
                height: r,
                x: a,
                y: c
            }
        }(C(e)))
    }
    function gt(e) {
        var o, r, l, t = e.reference, c = e.element, d = e.placement, u = d ? f(d) : null, p = d ? H(d) : null, h = t.x + t.width / 2 - c.width / 2, m = t.y + t.height / 2 - c.height / 2;
        switch (u) {
        case n:
            o = {
                x: h,
                y: t.y - c.height
            };
            break;
        case a:
            o = {
                x: h,
                y: t.y + t.height
            };
            break;
        case i:
            o = {
                x: t.x + t.width,
                y: m
            };
            break;
        case s:
            o = {
                x: t.x - c.width,
                y: m
            };
            break;
        default:
            o = {
                x: t.x,
                y: t.y
            }
        }
        if (r = u ? Ie(u) : null,
        r != null)
            switch (l = "y" === r ? "height" : "width",
            p) {
            case z:
                o[r] = o[r] - (t[l] / 2 - c[l] / 2);
                break;
            case U:
                o[r] = o[r] + (t[l] / 2 - c[l] / 2)
            }
        return o
    }
    function R(e, t) {
        void 0 === t && (t = {});
        var x, s = t, y = s.placement, w = void 0 === y ? e.placement : y, g = s.strategy, P = void 0 === g ? e.strategy : g, b = s.boundary, M = void 0 === b ? Tt : b, k = s.rootBoundary, R = void 0 === k ? Qe : k, A = s.elementContext, l = void 0 === A ? I : A, f = s.altBoundary, L = void 0 !== f && f, _ = s.padding, u = void 0 === _ ? 0 : _, o = Nt("number" != typeof u ? u : Lt(u, D)), N = l === I ? Mt : I, E = e.rects.popper, m = e.elements[L ? N : l], r = function(e, t, n, s) {
            var a = "clippingParents" === t ? function(e) {
                var n = ee(ke(e))
                  , t = ["absolute", "fixed"].indexOf(v(e).position) >= 0 && c(e) ? ne(e) : e;
                return S(t) ? n.filter(function(e) {
                    return S(e) && Et(e, t) && "body" !== p(e)
                }) : []
            }(e) : [].concat(t)
              , i = [].concat(a, [n])
              , r = i[0]
              , o = i.reduce(function(t, n) {
                var o = en(e, n, s);
                return t.top = T(o.top, t.top),
                t.right = xe(o.right, t.right),
                t.bottom = xe(o.bottom, t.bottom),
                t.left = T(o.left, t.left),
                t
            }, en(e, r, s));
            return o.width = o.right - o.left,
            o.height = o.bottom - o.top,
            o.x = o.left,
            o.y = o.top,
            o
        }(S(m) ? m : m.contextElement || C(e.elements.popper), M, R, P), O = Y(e.elements.reference), F = gt({
            reference: O,
            element: E,
            strategy: "absolute",
            placement: w
        }), z = Ne(Object.assign({}, E, F)), d = l === I ? z : O, h = {
            top: r.top - d.top + o.top,
            bottom: d.bottom - r.bottom + o.bottom,
            left: r.left - d.left + o.left,
            right: d.right - r.right + o.right
        }, j = e.modifiersData.offset;
        return l === I && j && (x = j[w],
        Object.keys(h).forEach(function(e) {
            var t = [i, a].indexOf(e) >= 0 ? 1 : -1
              , s = [n, a].indexOf(e) >= 0 ? "y" : "x";
            h[e] += x[s] * t
        })),
        h
    }
    function No(e, t) {
        void 0 === t && (t = {});
        var s, n = t, c = n.placement, l = n.boundary, d = n.rootBoundary, u = n.padding, h = n.flipVariations, i = n.allowedAutoPlacements, m = void 0 === i ? tt : i, a = H(c), r = a ? h ? et : et.filter(function(e) {
            return H(e) === a
        }) : D, o = r.filter(function(e) {
            return m.indexOf(e) >= 0
        });
        return 0 === o.length && (o = r),
        s = o.reduce(function(t, n) {
            return t[n] = R(e, {
                placement: n,
                boundary: l,
                rootBoundary: d,
                padding: u
            })[f(n)],
            t
        }, {}),
        Object.keys(s).sort(function(e, t) {
            return s[e] - s[t]
        })
    }
    const on = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , o = e.options
              , y = e.name;
            if (!t.modifiersData[y]._skip) {
                for (var r, d, _, O, w = o.mainAxis, I = void 0 === w || w, C = o.altAxis, D = void 0 === C || C, N = o.fallbackPlacements, j = o.padding, b = o.boundary, x = o.rootBoundary, $ = o.altBoundary, S = o.flipVariations, p = void 0 === S || S, W = o.allowedAutoPlacements, l = t.options.placement, V = f(l), B = N || (V !== l && p ? function(e) {
                    if (f(e) === ge)
                        return [];
                    var t = Ee(e);
                    return [qt(e), t, qt(t)]
                }(l) : [Ee(l)]), m = [l].concat(B).reduce(function(e, n) {
                    return e.concat(f(n) === ge ? No(t, {
                        placement: n,
                        boundary: b,
                        rootBoundary: x,
                        padding: j,
                        flipVariations: p,
                        allowedAutoPlacements: W
                    }) : n)
                }, []), P = t.rects.reference, L = t.rects.popper, k = new Map, A = !0, h = m[0], v = 0; v < m.length; v++) {
                    var c = m[v]
                      , T = f(c)
                      , F = H(c) === z
                      , M = [n, a].indexOf(T) >= 0
                      , E = M ? "width" : "height"
                      , g = R(t, {
                        placement: c,
                        boundary: b,
                        rootBoundary: x,
                        altBoundary: $,
                        padding: j
                    })
                      , u = M ? F ? i : s : F ? a : n;
                    if (P[E] > L[E] && (u = Ee(u)),
                    O = Ee(u),
                    r = [],
                    I && r.push(g[T] <= 0),
                    D && r.push(g[u] <= 0, g[O] <= 0),
                    r.every(function(e) {
                        return e
                    })) {
                        h = c,
                        A = !1;
                        break
                    }
                    k.set(c, r)
                }
                if (A)
                    for (_ = function(e) {
                        var t = m.find(function(t) {
                            var n = k.get(t);
                            if (n)
                                return n.slice(0, e).every(function(e) {
                                    return e
                                })
                        });
                        if (t)
                            return h = t,
                            "break"
                    }
                    ,
                    d = p ? 3 : 1; d > 0 && "break" !== _(d); d--)
                        ;
                t.placement !== h && (t.modifiersData[y]._skip = !0,
                t.placement = h,
                t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function an(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function rn(e) {
        return [n, i, a, s].some(function(t) {
            return e[t] >= 0
        })
    }
    const cn = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state
              , a = e.name
              , r = t.rects.reference
              , c = t.rects.popper
              , l = t.modifiersData.preventOverflow
              , d = R(t, {
                elementContext: "reference"
            })
              , u = R(t, {
                altBoundary: !0
            })
              , n = an(d, r)
              , s = an(u, c, l)
              , o = rn(n)
              , i = rn(s);
            t.modifiersData[a] = {
                referenceClippingOffsets: n,
                popperEscapeOffsets: s,
                isReferenceHidden: o,
                hasPopperEscaped: i
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": o,
                "data-popper-escaped": i
            })
        }
    }
      , ln = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state
              , c = e.options
              , l = e.name
              , o = c.offset
              , d = void 0 === o ? [0, 0] : o
              , a = tt.reduce(function(e, o) {
                return e[o] = function(e, t, o) {
                    var c = f(e)
                      , d = [s, n].indexOf(c) >= 0 ? -1 : 1
                      , l = "function" == typeof o ? o(Object.assign({}, t, {
                        placement: e
                    })) : o
                      , a = l[0]
                      , r = l[1];
                    return a = a || 0,
                    r = (r || 0) * d,
                    [s, i].indexOf(c) >= 0 ? {
                        x: r,
                        y: a
                    } : {
                        x: a,
                        y: r
                    }
                }(o, t.rects, d),
                e
            }, {})
              , r = a[t.placement]
              , u = r.x
              , h = r.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u,
            t.modifiersData.popperOffsets.y += h),
            t.modifiersData[l] = a
        }
    }
      , Le = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state
              , n = e.name;
            t.modifiersData[n] = gt({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , un = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , c = e.options
              , ge = e.name
              , G = c.mainAxis
              , he = void 0 === G || G
              , oe = c.altAxis
              , ie = void 0 !== oe && oe
              , ve = c.boundary
              , be = c.rootBoundary
              , je = c.altBoundary
              , ye = c.padding
              , D = c.tether
              , u = void 0 === D || D
              , F = c.tetherOffset
              , C = void 0 === F ? 0 : F
              , _ = R(t, {
                boundary: ve,
                rootBoundary: be,
                padding: ye,
                altBoundary: je
            })
              , M = f(t.placement)
              , x = H(t.placement)
              , J = !x
              , o = Ie(M)
              , g = "x" === o ? "y" : "x"
              , v = t.modifiersData.popperOffsets
              , d = t.rects.reference
              , p = t.rects.popper
              , w = "function" == typeof C ? C(Object.assign({}, t.rects, {
                placement: t.placement
            })) : C
              , m = "number" == typeof w ? {
                mainAxis: w,
                altAxis: w
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, w)
              , y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
              , E = {
                x: 0,
                y: 0
            };
            if (v) {
                if (he) {
                    var L, A = "y" === o ? n : s, I = "y" === o ? a : i, r = "y" === o ? "height" : "width", h = v[o], $ = h + _[A], W = h - _[I], S = u ? -p[r] / 2 : 0, pe = x === z ? d[r] : p[r], fe = x === z ? -p[r] : -d[r], Y = t.elements.arrow, me = u && Y ? ot(Y) : {
                        width: 0,
                        height: 0
                    }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, Q = X[A], Z = X[I], b = se(0, d[r], me[r]), le = J ? d[r] / 2 - S - b - Q - m.mainAxis : pe - b - Q - m.mainAxis, ce = J ? -d[r] / 2 + S + b + Z + m.mainAxis : fe + b + Z + m.mainAxis, O = t.elements.arrow && ne(t.elements.arrow), ae = O ? "y" === o ? O.clientTop || 0 : O.clientLeft || 0 : 0, U = null != (L = y?.[o]) ? L : 0, re = h + ce - U, te = se(u ? xe($, h + le - U - ae) : $, h, u ? T(W, re) : W);
                    v[o] = te,
                    E[o] = te - h
                }
                if (ie) {
                    var ee, de = "x" === o ? n : s, ue = "x" === o ? a : i, l = v[g], j = "y" === g ? "height" : "width", q = l + _[de], K = l - _[ue], k = -1 !== [n, s].indexOf(M), V = null != (ee = y?.[g]) ? ee : 0, B = k ? q : l - d[j] - p[j] - V + m.altAxis, P = k ? l + d[j] + p[j] - V - m.altAxis : K, N = u && k ? function(e, t, n) {
                        var s = se(e, t, n);
                        return s > n ? n : s
                    }(B, l, P) : se(u ? B : q, l, u ? P : K);
                    v[g] = N,
                    E[g] = N - l
                }
                t.modifiersData[ge] = E
            }
        },
        requiresIfExists: ["offset"]
    };
    function Co(e, t, n) {
        void 0 === n && (n = !1);
        var s, d, u = c(t), h = c(t) && function(e) {
            var t = e.getBoundingClientRect()
              , n = q(t.width) / e.offsetWidth || 1
              , s = q(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== s
        }(t), a = C(t), i = Y(e, h, n), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, o = {
            x: 0,
            y: 0
        };
        return (u || !u && !n) && (("body" !== p(t) || Te(a)) && (l = (s = t) !== r(s) && c(s) ? {
            scrollLeft: (d = s).scrollLeft,
            scrollTop: d.scrollTop
        } : Se(s)),
        c(t) ? ((o = Y(t, !0)).x += t.clientLeft,
        o.y += t.clientTop) : a && (o.x = Me(a))),
        {
            x: i.left + l.scrollLeft - o.x,
            y: i.top + l.scrollTop - o.y,
            width: i.width,
            height: i.height
        }
    }
    function _o(e) {
        var n = new Map
          , t = new Set
          , s = [];
        function o(e) {
            t.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                if (!t.has(e)) {
                    var s = n.get(e);
                    s && o(s)
                }
            }),
            s.push(e)
        }
        return e.forEach(function(e) {
            n.set(e.name, e)
        }),
        e.forEach(function(e) {
            t.has(e.name) || o(e)
        }),
        s
    }
    Re = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function pn() {
        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
            n[e] = arguments[e];
        return !n.some(function(e) {
            return !e || "function" != typeof e.getBoundingClientRect
        })
    }
    function le(e) {
        void 0 === e && (e = {});
        var n = e
          , s = n.defaultModifiers
          , i = void 0 === s ? [] : s
          , o = n.defaultOptions
          , t = void 0 === o ? Re : o;
        return function(e, n, s) {
            void 0 === s && (s = t);
            var r, d, o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Re, t),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: n
                },
                attributes: {},
                styles: {}
            }, c = [], l = !1, a = {
                state: o,
                setOptions: function(s) {
                    var r, l, d, h = "function" == typeof s ? s(o.options) : s;
                    return u(),
                    o.options = Object.assign({}, t, o.options, h),
                    o.scrollParents = {
                        reference: S(e) ? ee(e) : e.contextElement ? ee(e.contextElement) : [],
                        popper: ee(n)
                    },
                    d = function(e) {
                        var t = _o(e);
                        return Wn.reduce(function(e, n) {
                            return e.concat(t.filter(function(e) {
                                return e.phase === n
                            }))
                        }, [])
                    }((l = [].concat(i, o.options.modifiers),
                    r = l.reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t,
                        e
                    }, {}),
                    Object.keys(r).map(function(e) {
                        return r[e]
                    }))),
                    o.orderedModifiers = d.filter(function(e) {
                        return e.enabled
                    }),
                    o.orderedModifiers.forEach(function(e) {
                        var s, i = e.name, t = e.options, r = void 0 === t ? {} : t, n = e.effect;
                        "function" == typeof n && (s = n({
                            state: o,
                            name: i,
                            instance: a,
                            options: r
                        }),
                        c.push(s || function() {}
                        ))
                    }),
                    a.update()
                },
                forceUpdate: function() {
                    if (!l) {
                        var s = o.elements
                          , i = s.reference
                          , t = s.popper;
                        if (pn(i, t)) {
                            o.rects = {
                                reference: Co(i, ne(t), "fixed" === o.options.strategy),
                                popper: ot(t)
                            },
                            o.reset = !1,
                            o.placement = o.options.placement,
                            o.orderedModifiers.forEach(function(e) {
                                return o.modifiersData[e.name] = Object.assign({}, e.data)
                            });
                            for (e = 0; e < o.orderedModifiers.length; e++)
                                if (!0 !== o.reset) {
                                    var e, n = o.orderedModifiers[e], r = n.fn, c = n.options, d = void 0 === c ? {} : c, u = n.name;
                                    "function" == typeof r && (o = r({
                                        state: o,
                                        options: d,
                                        name: u,
                                        instance: a
                                    }) || o)
                                } else
                                    o.reset = !1,
                                    e = -1
                        }
                    }
                },
                update: (d = function() {
                    return new Promise(function(e) {
                        a.forceUpdate(),
                        e(o)
                    }
                    )
                }
                ,
                function() {
                    return r || (r = new Promise(function(e) {
                        Promise.resolve().then(function() {
                            r = void 0,
                            e(d())
                        })
                    }
                    )),
                    r
                }
                ),
                destroy: function() {
                    u(),
                    l = !0
                }
            };
            if (!pn(e, n))
                return a;
            function u() {
                c.forEach(function(e) {
                    return e()
                }),
                c = []
            }
            return a.setOptions(s).then(function(e) {
                !l && s.onFirstUpdate && s.onFirstUpdate(e)
            }),
            a
        }
    }
    var vo = le()
      , po = le({
        defaultModifiers: [Fe, Le, ze, ut]
    })
      , He = le({
        defaultModifiers: [Fe, Le, ze, ut, ln, on, un, Rt, cn]
    });
    const yn = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: _t,
        afterRead: Ct,
        afterWrite: bt,
        applyStyles: ut,
        arrow: Rt,
        auto: ge,
        basePlacements: D,
        beforeMain: xt,
        beforeRead: St,
        beforeWrite: yt,
        bottom: a,
        clippingParents: Tt,
        computeStyles: ze,
        createPopper: He,
        createPopperBase: vo,
        createPopperLite: po,
        detectOverflow: R,
        end: U,
        eventListeners: Fe,
        flip: on,
        hide: cn,
        left: s,
        main: wt,
        modifierPhases: Wn,
        offset: ln,
        placements: tt,
        popper: I,
        popperGenerator: le,
        popperOffsets: Le,
        preventOverflow: un,
        read: kt,
        reference: Mt,
        right: i,
        start: z,
        top: n,
        variationPlacements: et,
        viewport: Qe,
        write: jt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , _n = "dropdown"
      , M = ".bs.dropdown"
      , Be = ".data-api"
      , oo = "ArrowUp"
      , Cn = "ArrowDown"
      , so = `hide${M}`
      , no = `hidden${M}`
      , Ks = `show${M}`
      , Hs = `shown${M}`
      , Mn = `click${M}${Be}`
      , Fn = `keydown${M}${Be}`
      , Ps = `keyup${M}${Be}`
      , B = "show"
      , k = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ts = `${k}.${B}`
      , fe = ".dropdown-menu"
      , Fs = d() ? "top-end" : "top-start"
      , Ss = d() ? "top-start" : "top-end"
      , As = d() ? "bottom-end" : "bottom-start"
      , Os = d() ? "bottom-start" : "bottom-end"
      , ws = d() ? "left-start" : "right-start"
      , ps = d() ? "right-start" : "left-start"
      , fs = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , hs = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class m extends h {
        constructor(e, n) {
            super(e, n),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = t.next(this._element, fe)[0] || t.prev(this._element, fe)[0] || t.findOne(fe, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return fs
        }
        static get DefaultType() {
            return hs
        }
        static get NAME() {
            return _n
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (O(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!e.trigger(this._element, Ks, t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        e.on(t, "mouseover", ce);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(B),
                this._element.classList.add(B),
                e.trigger(this._element, Hs, t)
            }
        }
        hide() {
            if (O(this._element) || !this._isShown())
                return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!e.trigger(this._element, so, t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        e.off(t, "mouseover", ce);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(B),
                this._element.classList.remove(B),
                this._element.setAttribute("aria-expanded", "false"),
                b.removeDataAttribute(this._menu, "popper"),
                e.trigger(this._element, no, t)
            }
        }
        _getConfig(e) {
            if ("object" == typeof (e = super._getConfig(e)).reference && !j(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                throw new TypeError(`${_n.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper() {
            if (void 0 === yn)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : j(this._config.reference) ? e = x(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const t = this._getPopperConfig();
            this._popper = He(e, this._menu, t)
        }
        _isShown() {
            return this._menu.classList.contains(B)
        }
        _getPlacement() {
            const e = this._parent;
            if (e.classList.contains("dropend"))
                return ws;
            if (e.classList.contains("dropstart"))
                return ps;
            if (e.classList.contains("dropup-center"))
                return "top";
            if (e.classList.contains("dropdown-center"))
                return "bottom";
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? Ss : Fs : t ? Os : As
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (b.setDataAttribute(this._menu, "popper", "static"),
            e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...e,
                ...o(this._config.popperConfig, [e])
            }
        }
        _selectMenuItem({key: e, target: n}) {
            const s = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e=>V(e));
            s.length && ht(s, n, e === Cn, !s.includes(n)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = m.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key)
                return;
            const n = t.find(Ts);
            for (const a of n) {
                const t = m.getInstance(a);
                if (!t || !1 === t._config.autoClose)
                    continue;
                const s = e.composedPath()
                  , o = s.includes(t._menu);
                if (s.includes(t._element) || "inside" === t._config.autoClose && !o || "outside" === t._config.autoClose && o)
                    continue;
                if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))
                    continue;
                const i = {
                    relatedTarget: t._element
                };
                "click" === e.type && (i.clickEvent = e),
                t._completeHide(i)
            }
        }
        static dataApiKeydownHandler(e) {
            const a = /input|textarea/i.test(e.target.tagName)
              , s = "Escape" === e.key
              , o = [oo, Cn].includes(e.key);
            if (!o && !s)
                return;
            if (a && !s)
                return;
            e.preventDefault();
            const i = this.matches(k) ? this : t.prev(this, k)[0] || t.next(this, k)[0] || t.findOne(k, e.delegateTarget.parentNode)
              , n = m.getOrCreateInstance(i);
            if (o)
                return e.stopPropagation(),
                n.show(),
                void n._selectMenuItem(e);
            n._isShown() && (e.stopPropagation(),
            n.hide(),
            i.focus())
        }
    }
    e.on(document, Fn, k, m.dataApiKeydownHandler),
    e.on(document, Fn, fe, m.dataApiKeydownHandler),
    e.on(document, Mn, m.clearMenus),
    e.on(document, Ps, m.clearMenus),
    e.on(document, Mn, k, function(e) {
        e.preventDefault(),
        m.getOrCreateInstance(this).toggle()
    }),
    u(m);
    const Kn = "backdrop"
      , qn = "show"
      , Yn = `mousedown.bs.${Kn}`
      , rs = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , is = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Qn extends Q {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return rs
        }
        static get DefaultType() {
            return is
        }
        static get NAME() {
            return Kn
        }
        show(e) {
            if (!this._config.isVisible)
                return void o(e);
            this._append();
            const t = this._getElement();
            this._config.isAnimated && oe(t),
            t.classList.add(qn),
            this._emulateAnimation(()=>{
                o(e)
            }
            )
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(qn),
            this._emulateAnimation(()=>{
                this.dispose(),
                o(e)
            }
            )) : o(e)
        }
        dispose() {
            this._isAppended && (e.off(this._element, Yn),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className,
                this._config.isAnimated && e.classList.add("fade"),
                this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = x(e.rootElement),
            e
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            e.on(t, Yn, ()=>{
                o(this._config.clickCallback)
            }
            ),
            this._isAppended = !0
        }
        _emulateAnimation(e) {
            Vt(e, this._getElement(), this._config.isAnimated)
        }
    }
    const _e = ".bs.focustrap"
      , ts = `focusin${_e}`
      , io = `keydown.tab${_e}`
      , vt = "backward"
      , ns = {
        autofocus: !0,
        trapElement: null
    }
      , ss = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Zn extends Q {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return ns
        }
        static get DefaultType() {
            return ss
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            e.off(document, _e),
            e.on(document, ts, e=>this._handleFocusin(e)),
            e.on(document, io, e=>this._handleKeydown(e)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            e.off(document, _e))
        }
        _handleFocusin(e) {
            const {trapElement: n} = this._config;
            if (e.target === document || e.target === n || n.contains(e.target))
                return;
            const s = t.focusableChildren(n);
            0 === s.length ? n.focus() : this._lastTabNavDirection === vt ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? vt : "forward")
        }
    }
    const Xn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Gn = ".sticky-top"
      , Oe = "padding-right"
      , Un = "margin-right";
    class We {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Oe, t=>t + e),
            this._setElementAttributes(Xn, Oe, t=>t + e),
            this._setElementAttributes(Gn, Un, t=>t - e)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Oe),
            this._resetElementAttributes(Xn, Oe),
            this._resetElementAttributes(Gn, Un)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, n) {
            const s = this.getWidth();
            this._applyManipulationCallback(e, e=>{
                if (e !== this._element && window.innerWidth > e.clientWidth + s)
                    return;
                this._saveInitialAttribute(e, t);
                const o = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(o))}px`)
            }
            )
        }
        _saveInitialAttribute(e, t) {
            const n = e.style.getPropertyValue(t);
            n && b.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, e=>{
                const n = b.getDataAttribute(e, t);
                null !== n ? (b.removeDataAttribute(e, t),
                e.style.setProperty(t, n)) : e.style.removeProperty(t)
            }
            )
        }
        _applyManipulationCallback(e, n) {
            if (j(e))
                n(e);
            else
                for (const s of t.find(e, this._element))
                    n(s)
        }
    }
    const l = ".bs.modal"
      , Jn = `hide${l}`
      , ms = `hidePrevented${l}`
      , $n = `hidden${l}`
      , Vn = `show${l}`
      , gs = `shown${l}`
      , vs = `resize${l}`
      , bs = `click.dismiss${l}`
      , js = `mousedown.dismiss${l}`
      , ys = `keydown.dismiss${l}`
      , _s = `click${l}.data-api`
      , Bn = "modal-open"
      , In = "show"
      , Ue = "modal-static"
      , Cs = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , Es = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class G extends h {
        constructor(e, n) {
            super(e, n),
            this._dialog = t.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new We,
            this._addEventListeners()
        }
        static get Default() {
            return Cs
        }
        static get DefaultType() {
            return Es
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(t) {
            this._isShown || this._isTransitioning || e.trigger(this._element, Vn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(Bn),
            this._adjustDialog(),
            this._backdrop.show(()=>this._showElement(t)))
        }
        hide() {
            this._isShown && !this._isTransitioning && (e.trigger(this._element, Jn).defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(In),
            this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())))
        }
        dispose() {
            e.off(window, l),
            e.off(this._dialog, l),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Qn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Zn({
                trapElement: this._element
            })
        }
        _showElement(n) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const s = t.findOne(".modal-body", this._dialog);
            s && (s.scrollTop = 0),
            oe(this._element),
            this._element.classList.add(In),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                e.trigger(this._element, gs, {
                    relatedTarget: n
                })
            }
            , this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            e.on(this._element, ys, e=>{
                "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }
            ),
            e.on(window, vs, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            ),
            e.on(this._element, js, t=>{
                e.one(this._element, bs, e=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                )
            }
            )
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(Bn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                e.trigger(this._element, $n)
            }
            )
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (e.trigger(this._element, ms).defaultPrevented)
                return;
            const n = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(Ue) || (n || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Ue),
            this._queueCallback(()=>{
                this._element.classList.remove(Ue),
                this._queueCallback(()=>{
                    this._element.style.overflowY = t
                }
                , this._dialog)
            }
            , this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , n = e > 0;
            if (n && !t) {
                const t = d() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!n && t) {
                const t = d() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each(function() {
                const n = G.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw new TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            })
        }
    }
    e.on(document, _s, '[data-bs-toggle="modal"]', function(n) {
        const s = t.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        e.one(s, Vn, t=>{
            t.defaultPrevented || e.one(s, $n, ()=>{
                V(this) && this.focus()
            }
            )
        }
        );
        const o = t.findOne(".modal.show");
        o && G.getInstance(o).hide(),
        G.getOrCreateInstance(s).toggle(this)
    }),
    ve(G),
    u(G);
    const g = ".bs.offcanvas"
      , Pn = ".data-api"
      , Ms = `load${g}${Pn}`
      , Rn = "show"
      , Nn = "showing"
      , Dn = "hiding"
      , zn = ".offcanvas.show"
      , Ns = `show${g}`
      , Ls = `shown${g}`
      , Rs = `hide${g}`
      , Tn = `hidePrevented${g}`
      , Sn = `hidden${g}`
      , Is = `resize${g}`
      , Bs = `click${g}${Pn}`
      , Vs = `keydown.dismiss${g}`
      , $s = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Ws = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class E extends h {
        constructor(e, t) {
            super(e, t),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return $s
        }
        static get DefaultType() {
            return Ws
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(t) {
            this._isShown || e.trigger(this._element, Ns, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new We).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Nn),
            this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(Rn),
                this._element.classList.remove(Nn),
                e.trigger(this._element, Ls, {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && (e.trigger(this._element, Rs).defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(Dn),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.classList.remove(Rn, Dn),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new We).reset(),
                e.trigger(this._element, Sn)
            }
            , this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Qn({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : e.trigger(this._element, Tn)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Zn({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            e.on(this._element, Vs, t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : e.trigger(this._element, Tn))
            }
            )
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = E.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    e.on(document, Bs, '[data-bs-toggle="offcanvas"]', function(n) {
        const s = t.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        O(this))
            return;
        e.one(s, Sn, ()=>{
            V(this) && this.focus()
        }
        );
        const o = t.findOne(zn);
        o && o !== s && E.getInstance(o).hide(),
        E.getOrCreateInstance(s).toggle(this)
    }),
    e.on(window, Ms, ()=>{
        for (const e of t.find(zn))
            E.getOrCreateInstance(e).show()
    }
    ),
    e.on(window, Is, ()=>{
        for (const e of t.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(e).position && E.getOrCreateInstance(e).hide()
    }
    ),
    ve(E),
    u(E);
    const An = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , qs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Ys = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
      , Gs = (e,t)=>{
        const n = e.nodeName.toLowerCase();
        return t.includes(n) ? !qs.has(n) || Boolean(Ys.test(e.nodeValue)) : t.filter(e=>e instanceof RegExp).some(e=>e.test(n))
    }
      , Xs = {
        allowList: An,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , Qs = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , Zs = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Js extends Q {
        constructor(e) {
            super(),
            this._config = this._getConfig(e)
        }
        static get Default() {
            return Xs
        }
        static get DefaultType() {
            return Qs
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(e) {
            return this._checkContent(e),
            this._config.content = {
                ...this._config.content,
                ...e
            },
            this
        }
        toHtml() {
            const e = document.createElement("div");
            e.innerHTML = this._maybeSanitize(this._config.template);
            for (const [t,n] of Object.entries(this._config.content))
                this._setContent(e, n, t);
            const t = e.children[0]
              , n = this._resolvePossibleFunction(this._config.extraClass);
            return n && t.classList.add(...n.split(" ")),
            t
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e),
            this._checkContent(e.content)
        }
        _checkContent(e) {
            for (const [t,n] of Object.entries(e))
                super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, Zs)
        }
        _setContent(e, n, s) {
            const o = t.findOne(s, e);
            o && ((n = this._resolvePossibleFunction(n)) ? j(n) ? this._putElementInTemplate(x(n), o) : this._config.html ? o.innerHTML = this._maybeSanitize(n) : o.textContent = n : o.remove())
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, n) {
                if (!e.length)
                    return e;
                if (n && "function" == typeof n)
                    return n(e);
                const s = (new window.DOMParser).parseFromString(e, "text/html")
                  , o = [].concat(...s.body.querySelectorAll("*"));
                for (const e of o) {
                    const n = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(n)) {
                        e.remove();
                        continue
                    }
                    const s = [].concat(...e.attributes)
                      , i = [].concat(t["*"] || [], t[n] || []);
                    for (const t of s)
                        Gs(t, i) || e.removeAttribute(t.nodeName)
                }
                return s.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) {
            return o(e, [this])
        }
        _putElementInTemplate(e, t) {
            if (this._config.html)
                return t.innerHTML = "",
                void t.append(e);
            t.textContent = e.textContent
        }
    }
    const eo = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ke = "fade"
      , he = "show"
      , En = ".modal"
      , xn = "hide.bs.modal"
      , te = "hover"
      , Xe = "focus"
      , ro = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: d() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: d() ? "right" : "left"
    }
      , co = {
        allowList: An,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , lo = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class P extends h {
        constructor(e, t) {
            if (void 0 === yn)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return co
        }
        static get DefaultType() {
            return lo
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            e.off(this._element.closest(En), xn, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const n = e.trigger(this._element, this.constructor.eventName("show"))
              , s = (Dt(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (n.defaultPrevented || !s)
                return;
            this._disposePopper();
            const t = this._getTipElement();
            this._element.setAttribute("aria-describedby", t.getAttribute("id"));
            const {container: o} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (o.append(t),
            e.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(t),
            t.classList.add(he),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    e.on(t, "mouseover", ce);
            this._queueCallback(()=>{
                e.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            , this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !e.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(he),
                "ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        e.off(t, "mouseover", ce);
                this._activeTrigger.click = !1,
                this._activeTrigger[Xe] = !1,
                this._activeTrigger[te] = !1,
                this._isHovered = null,
                this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    e.trigger(this._element, this.constructor.eventName("hidden")))
                }
                , this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(e) {
            const t = this._getTemplateFactory(e).toHtml();
            if (!t)
                return null;
            t.classList.remove(Ke, he),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
            const n = (e=>{
                do
                    e += Math.floor(1e6 * Math.random());
                while (document.getElementById(e))return e
            }
            )(this.constructor.NAME).toString();
            return t.setAttribute("id", n),
            this._isAnimated() && t.classList.add(Ke),
            t
        }
        setContent(e) {
            this._newContent = e,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Js({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Ke)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(he)
        }
        _createPopper(e) {
            const t = o(this._config.placement, [this, e, this._element])
              , n = ro[t.toUpperCase()];
            return He(this._element, e, this._getPopperConfig(n))
        }
        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return o(e, [this._element])
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e=>{
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {
                ...t,
                ...o(this._config.popperConfig, [t])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const n of t)
                if ("click" === n)
                    e.on(this._element, this.constructor.eventName("click"), this._config.selector, e=>{
                        this._initializeOnDelegatedTarget(e).toggle()
                    }
                    );
                else if ("manual" !== n) {
                    const t = n === te ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , s = n === te ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    e.on(this._element, t, this._config.selector, e=>{
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? Xe : te] = !0,
                        t._enter()
                    }
                    ),
                    e.on(this._element, s, this._config.selector, e=>{
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? Xe : te] = t._element.contains(e.relatedTarget),
                        t._leave()
                    }
                    )
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            e.on(this._element.closest(En), xn, this._hideModalHandler)
        }
        _fixTitle() {
            const e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(()=>{
                this._isHovered && this.show()
            }
            , this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(()=>{
                this._isHovered || this.hide()
            }
            , this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            const t = b.getDataAttributes(this._element);
            for (const e of Object.keys(t))
                eo.has(e) && delete t[e];
            return e = {
                ...t,
                ..."object" == typeof e && e ? e : {}
            },
            e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : x(e.container),
            "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
        }
        _getDelegateConfig() {
            const e = {};
            for (const [t,n] of Object.entries(this._config))
                this.constructor.Default[t] !== n && (e[t] = n);
            return e.selector = !1,
            e.trigger = "manual",
            e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = P.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    u(P);
    const ho = {
        ...P.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , mo = {
        ...P.DefaultType,
        content: "(null|string|element|function)"
    };
    class Ae extends P {
        static get Default() {
            return ho
        }
        static get DefaultType() {
            return mo
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = Ae.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    u(Ae);
    const nt = ".bs.scrollspy"
      , go = `activate${nt}`
      , vn = `click${nt}`
      , bo = `load${nt}.data-api`
      , K = "active"
      , st = "[href]"
      , mn = ".nav-link"
      , wo = `${mn}, .nav-item > ${mn}, .list-group-item`
      , Oo = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , xo = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class me extends h {
        constructor(e, t) {
            super(e, t),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return Oo
        }
        static get DefaultType() {
            return xo
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const e of this._observableSections.values())
                this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = x(e.target) || document.body,
            e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin,
            "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e=>Number.parseFloat(e))),
            e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (e.off(this._config.target, vn),
            e.on(this._config.target, vn, st, e=>{
                const t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    const n = this._rootElement || window
                      , s = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo)
                        return void n.scrollTo({
                            top: s,
                            behavior: "smooth"
                        });
                    n.scrollTop = s
                }
            }
            ))
        }
        _getNewObserver() {
            const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver(e=>this._observerCallback(e),e)
        }
        _observerCallback(e) {
            const n = e=>this._targetLinks.get(`#${e.target.id}`)
              , s = e=>{
                this._previousScrollData.visibleEntryTop = e.target.offsetTop,
                this._process(n(e))
            }
              , t = (this._rootElement || document.documentElement).scrollTop
              , o = t >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = t;
            for (const i of e) {
                if (!i.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(n(i));
                    continue
                }
                const a = i.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (o && a) {
                    if (s(i),
                    !t)
                        return
                } else
                    o || a || s(i)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const e = t.find(st, this._config.target);
            for (const n of e) {
                if (!n.hash || O(n))
                    continue;
                const s = t.findOne(decodeURI(n.hash), this._element);
                V(s) && (this._targetLinks.set(decodeURI(n.hash), n),
                this._observableSections.set(n.hash, s))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(K),
            this._activateParents(t),
            e.trigger(this._element, go, {
                relatedTarget: t
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item"))
                t.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(K);
            else
                for (const n of t.parents(e, ".nav, .list-group"))
                    for (const e of t.prev(n, wo))
                        e.classList.add(K)
        }
        _clearActiveClass(e) {
            e.classList.remove(K);
            const n = t.find(`${st}.${K}`, e);
            for (const e of n)
                e.classList.remove(K)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = me.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    e.on(window, bo, ()=>{
        for (const e of t.find('[data-bs-spy="scroll"]'))
            me.getOrCreateInstance(e)
    }
    ),
    u(me);
    const A = ".bs.tab"
      , ko = `hide${A}`
      , Ao = `hidden${A}`
      , So = `show${A}`
      , Mo = `shown${A}`
      , Fo = `click${A}`
      , To = `keydown${A}`
      , zo = `load${A}`
      , Do = "ArrowLeft"
      , sn = "ArrowRight"
      , Lo = "ArrowUp"
      , Jt = "ArrowDown"
      , it = "Home"
      , Xt = "End"
      , F = "active"
      , Yt = "fade"
      , ct = "show"
      , Ut = ".dropdown-toggle"
      , lt = `:not(${Ut})`
      , $t = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , dt = `.nav-link${lt}, .list-group-item${lt}, [role="tab"]${lt}, ${$t}`
      , qo = `.${F}[data-bs-toggle="tab"], .${F}[data-bs-toggle="pill"], .${F}[data-bs-toggle="list"]`;
    class N extends h {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            e.on(this._element, To, e=>this._keydown(e)))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const n = this._getActiveElem()
              , s = n ? e.trigger(n, ko, {
                relatedTarget: t
            }) : null;
            e.trigger(t, So, {
                relatedTarget: n
            }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t),
            this._activate(t, n))
        }
        _activate(n, s) {
            n && (n.classList.add(F),
            this._activate(t.getElementFromSelector(n)),
            this._queueCallback(()=>{
                "tab" === n.getAttribute("role") ? (n.removeAttribute("tabindex"),
                n.setAttribute("aria-selected", !0),
                this._toggleDropDown(n, !0),
                e.trigger(n, Mo, {
                    relatedTarget: s
                })) : n.classList.add(ct)
            }
            , n, n.classList.contains(Yt)))
        }
        _deactivate(n, s) {
            n && (n.classList.remove(F),
            n.blur(),
            this._deactivate(t.getElementFromSelector(n)),
            this._queueCallback(()=>{
                "tab" === n.getAttribute("role") ? (n.setAttribute("aria-selected", !1),
                n.setAttribute("tabindex", "-1"),
                this._toggleDropDown(n, !1),
                e.trigger(n, Ao, {
                    relatedTarget: s
                })) : n.classList.remove(ct)
            }
            , n, n.classList.contains(Yt)))
        }
        _keydown(e) {
            if (![Do, sn, Lo, Jt, it, Xt].includes(e.key))
                return;
            e.stopPropagation(),
            e.preventDefault();
            const n = this._getChildren().filter(e=>!O(e));
            let t;
            if ([it, Xt].includes(e.key))
                t = n[e.key === it ? 0 : n.length - 1];
            else {
                const s = [sn, Jt].includes(e.key);
                t = ht(n, e.target, s, !0)
            }
            t && (t.focus({
                preventScroll: !0
            }),
            N.getOrCreateInstance(t).show())
        }
        _getChildren() {
            return t.find(dt, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(e=>this._elemIsActive(e)) || null
        }
        _setInitialAttributes(e, t) {
            this._setAttributeIfNotExists(e, "role", "tablist");
            for (const e of t)
                this._setInitialAttributesOnChild(e)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            const t = this._elemIsActive(e)
              , n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t),
            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            const n = t.getElementFromSelector(e);
            n && (this._setAttributeIfNotExists(n, "role", "tabpanel"),
            e.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${e.id}`))
        }
        _toggleDropDown(e, n) {
            const s = this._getOuterElement(e);
            if (!s.classList.contains("dropdown"))
                return;
            const o = (e,o)=>{
                const i = t.findOne(e, s);
                i && i.classList.toggle(o, n)
            }
            ;
            o(Ut, F),
            o(".dropdown-menu", ct),
            s.setAttribute("aria-expanded", n)
        }
        _setAttributeIfNotExists(e, t, n) {
            e.hasAttribute(t) || e.setAttribute(t, n)
        }
        _elemIsActive(e) {
            return e.classList.contains(F)
        }
        _getInnerElement(e) {
            return e.matches(dt) ? e : t.findOne(dt, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = N.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    e.on(document, Fo, $t, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        O(this) || N.getOrCreateInstance(this).show()
    }),
    e.on(window, zo, ()=>{
        for (const e of t.find(qo))
            N.getOrCreateInstance(e)
    }
    ),
    u(N);
    const y = ".bs.toast"
      , Xo = `mouseover${y}`
      , Qo = `mouseout${y}`
      , Zo = `focusin${y}`
      , Jo = `focusout${y}`
      , ei = `hide${y}`
      , ti = `hidden${y}`
      , ni = `show${y}`
      , si = `shown${y}`
      , Pt = "hide"
      , Ce = "show"
      , pe = "showing"
      , ri = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ci = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class we extends h {
        constructor(e, t) {
            super(e, t),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return ci
        }
        static get DefaultType() {
            return ri
        }
        static get NAME() {
            return "toast"
        }
        show() {
            e.trigger(this._element, ni).defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Pt),
            oe(this._element),
            this._element.classList.add(Ce, pe),
            this._queueCallback(()=>{
                this._element.classList.remove(pe),
                e.trigger(this._element, si),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (e.trigger(this._element, ei).defaultPrevented || (this._element.classList.add(pe),
            this._queueCallback(()=>{
                this._element.classList.add(Pt),
                this._element.classList.remove(pe, Ce),
                e.trigger(this._element, ti)
            }
            , this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Ce),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Ce)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = t
            }
            if (t)
                return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            e.on(this._element, Xo, e=>this._onInteraction(e, !0)),
            e.on(this._element, Qo, e=>this._onInteraction(e, !1)),
            e.on(this._element, Zo, e=>this._onInteraction(e, !0)),
            e.on(this._element, Jo, e=>this._onInteraction(e, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each(function() {
                const t = we.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    return ve(we),
    u(we),
    {
        Alert: ue,
        Button: be,
        Carousel: Z,
        Collapse: ae,
        Dropdown: m,
        Modal: G,
        Offcanvas: E,
        Popover: Ae,
        ScrollSpy: me,
        Tab: N,
        Toast: we,
        Tooltip: P
    }
}),
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".video-frame").forEach(function(e) {
        let t = e.parentNode.offsetWidth - 48
          , n = t / 16 * 9;
        e.setAttribute("height", n),
        e.setAttribute("width", t)
    })
})
