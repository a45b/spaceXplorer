;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    dCiP: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'LaunchesModule', function () {
          return Wr
        })
      var i = n('ofXK'),
        s = n('yW9e'),
        o = n('Q8cG'),
        r = n('cH1L'),
        a = n('rDax'),
        c = n('fXoL'),
        l = n('3Pt+'),
        h = n('mrSG'),
        d = n('2Suw'),
        u = n('79xS'),
        p = n('/KA4'),
        g = n('FwiY'),
        m = n('XNiG'),
        b = n('1G5W'),
        f = n('JX91'),
        z = n('pLZG'),
        v = n('nLfN')
      let y = (() => {
          class t {
            constructor(t, e) {
              ;(this.elementRef = t),
                (this.renderer = e),
                (this.hidden = null),
                this.renderer.setAttribute(
                  this.elementRef.nativeElement,
                  'hidden',
                  ''
                )
            }
            setHiddenAttribute() {
              !0 === this.hidden
                ? this.renderer.setAttribute(
                    this.elementRef.nativeElement,
                    'hidden',
                    ''
                  )
                : !1 === this.hidden || null === this.hidden
                ? this.renderer.removeAttribute(
                    this.elementRef.nativeElement,
                    'hidden'
                  )
                : 'string' == typeof this.hidden &&
                  this.renderer.setAttribute(
                    this.elementRef.nativeElement,
                    'hidden',
                    this.hidden
                  )
            }
            ngOnChanges() {
              this.setHiddenAttribute()
            }
            ngAfterViewInit() {
              this.setHiddenAttribute()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(c.F))
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['', 'nz-button', ''],
                ['nz-button-group'],
                ['', 'nz-icon', ''],
                ['', 'nz-menu-item', ''],
                ['', 'nz-submenu', ''],
                ['nz-select-top-control'],
                ['nz-select-placeholder'],
                ['nz-input-group'],
              ],
              inputs: { hidden: 'hidden' },
              features: [c.zb],
            })),
            t
          )
        })(),
        _ = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[v.b]],
            })),
            t
          )
        })()
      n('R1ws')
      const C = { disabled: !1 }
      new c.r('nz-wave-global-options', {
        providedIn: 'root',
        factory: function () {
          return C
        },
      })
      let O = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[v.b]],
            })),
            t
          )
        })(),
        w = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, O, g.c, _], _, O],
            })),
            t
          )
        })()
      var S = n('YF2q'),
        I = n('pdGh'),
        x = n('JgHy'),
        T = (n('Se/U'), n('GR68')),
        D = n('Rm4T'),
        k = n('LRne'),
        P = n('lJxs'),
        A = n('ejfv')
      let E = (() => {
        class t {}
        return (
          (t.ɵmod = c.Nb({ type: t })),
          (t.ɵinj = c.Mb({
            factory: function (e) {
              return new (e || t)()
            },
            imports: [[r.a, i.c, l.f, D.c, a.f, g.c, x.c, I.a, w]],
          })),
          t
        )
      })()
      n('n7bz')
      var j = n('jtHE'),
        V = n('VRyK'),
        B = n('FtGj'),
        L = n('8LU1'),
        R = (function () {
          if ('undefined' != typeof Map) return Map
          function t(t, e) {
            var n = -1
            return (
              t.some(function (t, i) {
                return t[0] === e && ((n = i), !0)
              }),
              n
            )
          }
          return (function () {
            function e() {
              this.__entries__ = []
            }
            return (
              Object.defineProperty(e.prototype, 'size', {
                get: function () {
                  return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var n = t(this.__entries__, e),
                  i = this.__entries__[n]
                return i && i[1]
              }),
              (e.prototype.set = function (e, n) {
                var i = t(this.__entries__, e)
                ~i
                  ? (this.__entries__[i][1] = n)
                  : this.__entries__.push([e, n])
              }),
              (e.prototype.delete = function (e) {
                var n = this.__entries__,
                  i = t(n, e)
                ~i && n.splice(i, 1)
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e)
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0)
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null)
                for (var n = 0, i = this.__entries__; n < i.length; n++) {
                  var s = i[n]
                  t.call(e, s[1], s[0])
                }
              }),
              e
            )
          })()
        })(),
        M =
          'undefined' != typeof window &&
          'undefined' != typeof document &&
          window.document === document,
        F =
          'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
            ? self
            : 'undefined' != typeof window && window.Math === Math
            ? window
            : Function('return this')(),
        N =
          'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(F)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now())
                }, 1e3 / 60)
              },
        $ = [
          'top',
          'right',
          'bottom',
          'left',
          'width',
          'height',
          'size',
          'weight',
        ],
        H = 'undefined' != typeof MutationObserver,
        U = (function () {
          function t() {
            ;(this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var n = !1,
                  i = !1,
                  s = 0
                function o() {
                  n && ((n = !1), t()), i && a()
                }
                function r() {
                  N(o)
                }
                function a() {
                  var t = Date.now()
                  if (n) {
                    if (t - s < 2) return
                    i = !0
                  } else (n = !0), (i = !1), setTimeout(r, 20)
                  s = t
                }
                return a
              })(this.refresh.bind(this)))
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_()
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                n = e.indexOf(t)
              ~n && e.splice(n, 1),
                !e.length && this.connected_ && this.disconnect_()
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh()
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive()
              })
              return (
                t.forEach(function (t) {
                  return t.broadcastActive()
                }),
                t.length > 0
              )
            }),
            (t.prototype.connect_ = function () {
              M &&
                !this.connected_ &&
                (document.addEventListener(
                  'transitionend',
                  this.onTransitionEnd_
                ),
                window.addEventListener('resize', this.refresh),
                H
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      'DOMSubtreeModified',
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0))
            }),
            (t.prototype.disconnect_ = function () {
              M &&
                this.connected_ &&
                (document.removeEventListener(
                  'transitionend',
                  this.onTransitionEnd_
                ),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    'DOMSubtreeModified',
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1))
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                n = void 0 === e ? '' : e
              $.some(function (t) {
                return !!~n.indexOf(t)
              }) && this.refresh()
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()), this.instance_
              )
            }),
            (t.instance_ = null),
            t
          )
        })(),
        G = function (t, e) {
          for (var n = 0, i = Object.keys(e); n < i.length; n++) {
            var s = i[n]
            Object.defineProperty(t, s, {
              value: e[s],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            })
          }
          return t
        },
        W = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || F
        },
        Q = X(0, 0, 0, 0)
      function Z(t) {
        return parseFloat(t) || 0
      }
      function J(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        return e.reduce(function (e, n) {
          return e + Z(t['border-' + n + '-width'])
        }, 0)
      }
      var q =
        'undefined' != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof W(t).SVGGraphicsElement
            }
          : function (t) {
              return (
                t instanceof W(t).SVGElement && 'function' == typeof t.getBBox
              )
            }
      function X(t, e, n, i) {
        return { x: t, y: e, width: n, height: i }
      }
      var K = (function () {
          function t(t) {
            ;(this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = X(0, 0, 0, 0)),
              (this.target = t)
          }
          return (
            (t.prototype.isActive = function () {
              var t,
                e =
                  ((t = this.target),
                  M
                    ? q(t)
                      ? (function (t) {
                          var e = t.getBBox()
                          return X(0, 0, e.width, e.height)
                        })(t)
                      : (function (t) {
                          var e = t.clientWidth,
                            n = t.clientHeight
                          if (!e && !n) return Q
                          var i = W(t).getComputedStyle(t),
                            s = (function (t) {
                              for (
                                var e = {},
                                  n = 0,
                                  i = ['top', 'right', 'bottom', 'left'];
                                n < i.length;
                                n++
                              ) {
                                var s = i[n]
                                e[s] = Z(t['padding-' + s])
                              }
                              return e
                            })(i),
                            o = s.left + s.right,
                            r = s.top + s.bottom,
                            a = Z(i.width),
                            c = Z(i.height)
                          if (
                            ('border-box' === i.boxSizing &&
                              (Math.round(a + o) !== e &&
                                (a -= J(i, 'left', 'right') + o),
                              Math.round(c + r) !== n &&
                                (c -= J(i, 'top', 'bottom') + r)),
                            !(function (t) {
                              return t === W(t).document.documentElement
                            })(t))
                          ) {
                            var l = Math.round(a + o) - e,
                              h = Math.round(c + r) - n
                            1 !== Math.abs(l) && (a -= l),
                              1 !== Math.abs(h) && (c -= h)
                          }
                          return X(s.left, s.top, a, c)
                        })(t)
                    : Q)
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              )
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              )
            }),
            t
          )
        })(),
        Y = function (t, e) {
          var n,
            i,
            s,
            o,
            r,
            a,
            c,
            l =
              ((i = (n = e).x),
              (s = n.y),
              (o = n.width),
              (r = n.height),
              (a =
                'undefined' != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (c = Object.create(a.prototype)),
              G(c, {
                x: i,
                y: s,
                width: o,
                height: r,
                top: s,
                right: i + o,
                bottom: r + s,
                left: i,
              }),
              c)
          G(this, { target: t, contentRect: l })
        },
        tt = (function () {
          function t(t, e, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new R()),
              'function' != typeof t)
            )
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.'
              )
            ;(this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = n)
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.')
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(t instanceof W(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".')
                var e = this.observations_
                e.has(t) ||
                  (e.set(t, new K(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh())
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.')
              if ('undefined' != typeof Element && Element instanceof Object) {
                if (!(t instanceof W(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".')
                var e = this.observations_
                e.has(t) &&
                  (e.delete(t), e.size || this.controller_.removeObserver(this))
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }),
            (t.prototype.gatherActive = function () {
              var t = this
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e)
                })
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new Y(t.target, t.broadcastRect())
                  })
                this.callback_.call(t, e, t), this.clearActive()
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0)
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0
            }),
            t
          )
        })(),
        et = 'undefined' != typeof WeakMap ? new WeakMap() : new R(),
        nt = function t(e) {
          if (!(this instanceof t))
            throw new TypeError('Cannot call a class as a function.')
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.')
          var n = U.getInstance(),
            i = new tt(e, n, this)
          et.set(this, i)
        }
      ;['observe', 'unobserve', 'disconnect'].forEach(function (t) {
        nt.prototype[t] = function () {
          var e
          return (e = et.get(this))[t].apply(e, arguments)
        }
      })
      var it = void 0 !== F.ResizeObserver ? F.ResizeObserver : nt,
        st = n('HDdC')
      let ot = (() => {
          class t {
            create(t) {
              return void 0 === it ? null : new it(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = Object(c.Lb)({
              factory: function () {
                return new t()
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        rt = (() => {
          class t {
            constructor(t) {
              ;(this.nzResizeObserverFactory = t),
                (this.observedElements = new Map())
            }
            ngOnDestroy() {
              this.observedElements.forEach((t, e) => this.cleanupObserver(e))
            }
            observe(t) {
              const e = Object(L.e)(t)
              return new st.a((t) => {
                const n = this.observeElement(e).subscribe(t)
                return () => {
                  n.unsubscribe(), this.unobserveElement(e)
                }
              })
            }
            observeElement(t) {
              if (this.observedElements.has(t))
                this.observedElements.get(t).count++
              else {
                const e = new m.a(),
                  n = this.nzResizeObserverFactory.create((t) => e.next(t))
                n && n.observe(t),
                  this.observedElements.set(t, {
                    observer: n,
                    stream: e,
                    count: 1,
                  })
              }
              return this.observedElements.get(t).stream
            }
            unobserveElement(t) {
              this.observedElements.has(t) &&
                (this.observedElements.get(t).count--,
                this.observedElements.get(t).count || this.cleanupObserver(t))
            }
            cleanupObserver(t) {
              if (this.observedElements.has(t)) {
                const { observer: e, stream: n } = this.observedElements.get(t)
                e && e.disconnect(),
                  n.complete(),
                  this.observedElements.delete(t)
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Zb(ot))
            }),
            (t.ɵprov = Object(c.Lb)({
              factory: function () {
                return new t(Object(c.Zb)(ot))
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        at = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[i.c, l.f, D.c, E, I.a]],
            })),
            t
          )
        })(),
        ct = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, l.f, a.f, at, g.c, x.c, S.b, I.a, E, w, at]],
            })),
            t
          )
        })()
      n('Kj3r')
      let lt = (() => {
          class t {
            create(t) {
              return 'undefined' == typeof MutationObserver
                ? null
                : new MutationObserver(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵprov = Object(c.Lb)({
              factory: function () {
                return new t()
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        ht = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [lt],
            })),
            t
          )
        })(),
        dt = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, ht, I.a]],
            })),
            t
          )
        })()
      function ut(t, e) {
        1 & t && c.jc(0)
      }
      const pt = ['*']
      function gt(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzTitle)
        }
      }
      function mt(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 11), c.Ac(1, gt, 2, 1, 'ng-container', 12), c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzTitle)
        }
      }
      function bt(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzExtra)
        }
      }
      function ft(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 13), c.Ac(1, bt, 2, 1, 'ng-container', 12), c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzExtra)
        }
      }
      function zt(t, e) {}
      function vt(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Ac(1, zt, 0, 0, 'ng-template', 14), c.Sb()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('ngTemplateOutlet', t.listOfNzCardTabComponent.template)
        }
      }
      function yt(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 6),
            c.Vb(1, 'div', 7),
            c.Ac(2, mt, 2, 1, 'div', 8),
            c.Ac(3, ft, 2, 1, 'div', 9),
            c.Ub(),
            c.Ac(4, vt, 2, 1, 'ng-container', 10),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(2),
            c.lc('ngIf', t.nzTitle),
            c.Bb(1),
            c.lc('ngIf', t.nzExtra),
            c.Bb(1),
            c.lc('ngIf', t.listOfNzCardTabComponent)
        }
      }
      function _t(t, e) {}
      function Ct(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 15), c.Ac(1, _t, 0, 0, 'ng-template', 14), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngTemplateOutlet', t.nzCover)
        }
      }
      function Ot(t, e) {
        1 & t && (c.Tb(0), c.jc(1), c.Sb())
      }
      function wt(t, e) {
        1 & t && c.Qb(0, 'nz-card-loading')
      }
      function St(t, e) {}
      function It(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'li'),
            c.Vb(1, 'span'),
            c.Ac(2, St, 0, 0, 'ng-template', 14),
            c.Ub(),
            c.Ub()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = c.fc(2)
          c.xc('width', 100 / n.nzActions.length, '%'),
            c.Bb(2),
            c.lc('ngTemplateOutlet', t)
        }
      }
      function xt(t, e) {
        if (
          (1 & t && (c.Vb(0, 'ul', 16), c.Ac(1, It, 3, 3, 'li', 17), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngForOf', t.nzActions)
        }
      }
      function Tt(t, e) {
        1 & t && (c.Vb(0, 'div', 4), c.Qb(1, 'div', 5), c.Ub()),
          2 & t && c.lc('ngClass', e.$implicit)
      }
      function Dt(t, e) {
        if (
          (1 & t && (c.Vb(0, 'div', 2), c.Ac(1, Tt, 2, 1, 'div', 3), c.Ub()),
          2 & t)
        ) {
          const t = e.$implicit
          c.Bb(1), c.lc('ngForOf', t)
        }
      }
      function kt(t, e) {}
      function Pt(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 2), c.Ac(1, kt, 0, 0, 'ng-template', 3), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngTemplateOutlet', t.nzAvatar)
        }
      }
      function At(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzTitle)
        }
      }
      function Et(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 7), c.Ac(1, At, 2, 1, 'ng-container', 8), c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzTitle)
        }
      }
      function jt(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzDescription)
        }
      }
      function Vt(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 9), c.Ac(1, jt, 2, 1, 'ng-container', 8), c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzDescription)
        }
      }
      function Bt(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 4),
            c.Ac(1, Et, 2, 1, 'div', 5),
            c.Ac(2, Vt, 2, 1, 'div', 6),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1),
            c.lc('ngIf', t.nzTitle),
            c.Bb(1),
            c.lc('ngIf', t.nzDescription)
        }
      }
      let Lt = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.nzHoverable = !0),
                this.elementRef.nativeElement.classList.add('ant-card-grid')
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['', 'nz-card-grid', '']],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && c.Hb('ant-card-hoverable', e.nzHoverable)
              },
              inputs: { nzHoverable: 'nzHoverable' },
              exportAs: ['nzCardGrid'],
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzHoverable',
              void 0
            ),
            t
          )
        })(),
        Rt = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-card-tab']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(c.M, 3), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.template = t.first)
                }
              },
              exportAs: ['nzCardTab'],
              ngContentSelectors: pt,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.Ac(0, ut, 1, 0, 'ng-template'))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })()
      const Mt = 'card'
      let Ft = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.nzConfigService = t),
                (this.cdr = e),
                (this.elementRef = n),
                (this.directionality = i),
                (this._nzModuleName = Mt),
                (this.nzBordered = !0),
                (this.nzBorderless = !1),
                (this.nzLoading = !1),
                (this.nzHoverable = !1),
                (this.nzBodyStyle = null),
                (this.nzActions = []),
                (this.nzType = null),
                (this.nzSize = 'default'),
                (this.dir = 'ltr'),
                (this.destroy$ = new m.a()),
                this.elementRef.nativeElement.classList.add('ant-card'),
                this.nzConfigService
                  .getConfigChangeEventForComponent(Mt)
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(() => {
                    this.cdr.markForCheck()
                  })
            }
            ngOnInit() {
              var t
              null === (t = this.directionality.change) ||
                void 0 === t ||
                t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                  ;(this.dir = t), this.cdr.detectChanges()
                }),
                (this.dir = this.directionality.value)
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(d.a), c.Pb(c.h), c.Pb(c.l), c.Pb(r.c, 8))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-card']],
              contentQueries: function (t, e, n) {
                if ((1 & t && (c.Ib(n, Rt, 1), c.Ib(n, Lt, 0)), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.listOfNzCardTabComponent = t.first),
                    c.qc((t = c.dc())) && (e.listOfNzCardGridDirective = t)
                }
              },
              hostVars: 16,
              hostBindings: function (t, e) {
                2 & t &&
                  c.Hb('ant-card-loading', e.nzLoading)(
                    'ant-card-bordered',
                    !1 === e.nzBorderless && e.nzBordered
                  )('ant-card-hoverable', e.nzHoverable)(
                    'ant-card-small',
                    'small' === e.nzSize
                  )(
                    'ant-card-contain-grid',
                    e.listOfNzCardGridDirective &&
                      e.listOfNzCardGridDirective.length
                  )('ant-card-type-inner', 'inner' === e.nzType)(
                    'ant-card-contain-tabs',
                    !!e.listOfNzCardTabComponent
                  )('ant-card-rtl', 'rtl' === e.dir)
              },
              inputs: {
                nzBordered: 'nzBordered',
                nzBorderless: 'nzBorderless',
                nzLoading: 'nzLoading',
                nzHoverable: 'nzHoverable',
                nzBodyStyle: 'nzBodyStyle',
                nzActions: 'nzActions',
                nzType: 'nzType',
                nzSize: 'nzSize',
                nzCover: 'nzCover',
                nzTitle: 'nzTitle',
                nzExtra: 'nzExtra',
              },
              exportAs: ['nzCard'],
              ngContentSelectors: pt,
              decls: 7,
              vars: 6,
              consts: [
                ['class', 'ant-card-head', 4, 'ngIf'],
                ['class', 'ant-card-cover', 4, 'ngIf'],
                [1, 'ant-card-body', 3, 'ngStyle'],
                [4, 'ngIf', 'ngIfElse'],
                ['loadingTemplate', ''],
                ['class', 'ant-card-actions', 4, 'ngIf'],
                [1, 'ant-card-head'],
                [1, 'ant-card-head-wrapper'],
                ['class', 'ant-card-head-title', 4, 'ngIf'],
                ['class', 'ant-card-extra', 4, 'ngIf'],
                [4, 'ngIf'],
                [1, 'ant-card-head-title'],
                [4, 'nzStringTemplateOutlet'],
                [1, 'ant-card-extra'],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-card-cover'],
                [1, 'ant-card-actions'],
                [3, 'width', 4, 'ngFor', 'ngForOf'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (c.kc(),
                    c.Ac(0, yt, 5, 3, 'div', 0),
                    c.Ac(1, Ct, 2, 1, 'div', 1),
                    c.Vb(2, 'div', 2),
                    c.Ac(3, Ot, 2, 0, 'ng-container', 3),
                    c.Ac(4, wt, 1, 0, 'ng-template', null, 4, c.Bc),
                    c.Ub(),
                    c.Ac(6, xt, 2, 1, 'ul', 5)),
                  2 & t)
                ) {
                  const t = c.rc(5)
                  c.lc(
                    'ngIf',
                    e.nzTitle || e.nzExtra || e.listOfNzCardTabComponent
                  ),
                    c.Bb(1),
                    c.lc('ngIf', e.nzCover),
                    c.Bb(1),
                    c.lc('ngStyle', e.nzBodyStyle),
                    c.Bb(1),
                    c.lc('ngIf', !e.nzLoading)('ngIfElse', t),
                    c.Bb(3),
                    c.lc('ngIf', e.nzActions.length)
                }
              },
              directives: function () {
                return [i.n, i.o, I.b, i.s, Nt, i.m]
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.a)(),
                Object(h.b)('design:type', Boolean),
              ],
              t.prototype,
              'nzBordered',
              void 0
            ),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.a)(),
                Object(h.b)('design:type', Boolean),
              ],
              t.prototype,
              'nzBorderless',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzLoading',
              void 0
            ),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.a)(),
                Object(h.b)('design:type', Boolean),
              ],
              t.prototype,
              'nzHoverable',
              void 0
            ),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', String)],
              t.prototype,
              'nzSize',
              void 0
            ),
            t
          )
        })(),
        Nt = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.listOfLoading = [
                  ['ant-col-22'],
                  ['ant-col-8', 'ant-col-15'],
                  ['ant-col-6', 'ant-col-18'],
                  ['ant-col-13', 'ant-col-9'],
                  ['ant-col-4', 'ant-col-3', 'ant-col-16'],
                  ['ant-col-8', 'ant-col-6', 'ant-col-8'],
                ]),
                this.elementRef.nativeElement.classList.add(
                  'ant-card-loading-content'
                )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-card-loading']],
              exportAs: ['nzCardLoading'],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'ant-card-loading-content'],
                [
                  'class',
                  'ant-row',
                  'style',
                  'margin-left: -4px; margin-right: -4px;',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  1,
                  'ant-row',
                  2,
                  'margin-left',
                  '-4px',
                  'margin-right',
                  '-4px',
                ],
                [
                  'style',
                  'padding-left: 4px; padding-right: 4px;',
                  3,
                  'ngClass',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  2,
                  'padding-left',
                  '4px',
                  'padding-right',
                  '4px',
                  3,
                  'ngClass',
                ],
                [1, 'ant-card-loading-block'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'div', 0), c.Ac(1, Dt, 2, 1, 'div', 1), c.Ub()),
                  2 & t && (c.Bb(1), c.lc('ngForOf', e.listOfLoading))
              },
              directives: [i.m, i.l],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        $t = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.nzTitle = null),
                (this.nzDescription = null),
                (this.nzAvatar = null),
                this.elementRef.nativeElement.classList.add('ant-card-meta')
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-card-meta']],
              inputs: {
                nzTitle: 'nzTitle',
                nzDescription: 'nzDescription',
                nzAvatar: 'nzAvatar',
              },
              exportAs: ['nzCardMeta'],
              decls: 2,
              vars: 2,
              consts: [
                ['class', 'ant-card-meta-avatar', 4, 'ngIf'],
                ['class', 'ant-card-meta-detail', 4, 'ngIf'],
                [1, 'ant-card-meta-avatar'],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-card-meta-detail'],
                ['class', 'ant-card-meta-title', 4, 'ngIf'],
                ['class', 'ant-card-meta-description', 4, 'ngIf'],
                [1, 'ant-card-meta-title'],
                [4, 'nzStringTemplateOutlet'],
                [1, 'ant-card-meta-description'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Ac(0, Pt, 2, 1, 'div', 0), c.Ac(1, Bt, 3, 2, 'div', 1)),
                  2 & t &&
                    (c.lc('ngIf', e.nzAvatar),
                    c.Bb(1),
                    c.lc('ngIf', e.nzTitle || e.nzDescription))
              },
              directives: [i.n, i.s, I.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ht = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[i.c, I.a], r.a],
            })),
            t
          )
        })()
      const Ut = ['textEl']
      function Gt(t, e) {
        if ((1 & t && c.Qb(0, 'i', 3), 2 & t)) {
          const t = c.fc()
          c.lc('nzType', t.nzIcon)
        }
      }
      function Wt(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'img', 4),
            c.cc('error', function (e) {
              return c.sc(t), c.fc().imgError(e)
            }),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc()
          c.lc('src', t.nzSrc, c.uc),
            c.Cb('srcset', t.nzSrcSet, c.uc)('alt', t.nzAlt)
        }
      }
      function Qt(t, e) {
        if ((1 & t && (c.Vb(0, 'span', 5, 6), c.Cc(2), c.Ub()), 2 & t)) {
          const t = c.fc()
          c.lc('ngStyle', t.textStyles), c.Bb(2), c.Dc(t.nzText)
        }
      }
      let Zt = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.nzConfigService = t),
                (this.elementRef = e),
                (this.cdr = n),
                (this.platform = i),
                (this._nzModuleName = 'avatar'),
                (this.nzShape = 'circle'),
                (this.nzSize = 'default'),
                (this.nzGap = 4),
                (this.nzError = new c.n()),
                (this.hasText = !1),
                (this.hasSrc = !0),
                (this.hasIcon = !1),
                (this.textStyles = {}),
                (this.classMap = {}),
                (this.customSize = null),
                (this.el = this.elementRef.nativeElement),
                this.elementRef.nativeElement.classList.add('ant-avatar')
            }
            imgError(t) {
              this.nzError.emit(t),
                t.defaultPrevented ||
                  ((this.hasSrc = !1),
                  (this.hasIcon = !1),
                  (this.hasText = !1),
                  this.nzIcon
                    ? (this.hasIcon = !0)
                    : this.nzText && (this.hasText = !0),
                  this.cdr.detectChanges(),
                  this.setSizeStyle(),
                  this.notifyCalc())
            }
            ngOnChanges() {
              ;(this.hasText = !this.nzSrc && !!this.nzText),
                (this.hasIcon = !this.nzSrc && !!this.nzIcon),
                (this.hasSrc = !!this.nzSrc),
                this.setSizeStyle(),
                this.notifyCalc()
            }
            calcStringSize() {
              if (!this.hasText) return
              const t = this.textEl.nativeElement.offsetWidth,
                e = this.el.getBoundingClientRect().width,
                n = 2 * this.nzGap < e ? 2 * this.nzGap : 8
              ;(this.textStyles = {
                transform: `scale(${
                  e - n < t ? (e - n) / t : 1
                }) translateX(-50%)`,
              }),
                this.customSize &&
                  Object.assign(this.textStyles, {
                    lineHeight: this.customSize,
                  }),
                this.cdr.detectChanges()
            }
            notifyCalc() {
              this.platform.isBrowser &&
                setTimeout(() => {
                  this.calcStringSize()
                })
            }
            setSizeStyle() {
              ;(this.customSize =
                'number' == typeof this.nzSize ? `${this.nzSize}px` : null),
                this.cdr.markForCheck()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(d.a), c.Pb(c.l), c.Pb(c.h), c.Pb(v.a))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-avatar']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(Ut, 1), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.textEl = t.first)
                }
              },
              hostVars: 20,
              hostBindings: function (t, e) {
                2 & t &&
                  (c.xc('width', e.customSize)('height', e.customSize)(
                    'line-height',
                    e.customSize
                  )(
                    'font-size',
                    e.hasIcon && e.customSize ? e.nzSize / 2 : null,
                    'px'
                  ),
                  c.Hb('ant-avatar-lg', 'large' === e.nzSize)(
                    'ant-avatar-sm',
                    'small' === e.nzSize
                  )('ant-avatar-square', 'square' === e.nzShape)(
                    'ant-avatar-circle',
                    'circle' === e.nzShape
                  )('ant-avatar-icon', e.nzIcon)('ant-avatar-image', e.hasSrc))
              },
              inputs: {
                nzShape: 'nzShape',
                nzSize: 'nzSize',
                nzGap: 'nzGap',
                nzText: 'nzText',
                nzSrc: 'nzSrc',
                nzSrcSet: 'nzSrcSet',
                nzAlt: 'nzAlt',
                nzIcon: 'nzIcon',
              },
              outputs: { nzError: 'nzError' },
              exportAs: ['nzAvatar'],
              features: [c.zb],
              decls: 3,
              vars: 3,
              consts: [
                ['nz-icon', '', 3, 'nzType', 4, 'ngIf'],
                [3, 'src', 'error', 4, 'ngIf'],
                ['class', 'ant-avatar-string', 3, 'ngStyle', 4, 'ngIf'],
                ['nz-icon', '', 3, 'nzType'],
                [3, 'src', 'error'],
                [1, 'ant-avatar-string', 3, 'ngStyle'],
                ['textEl', ''],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Ac(0, Gt, 1, 1, 'i', 0),
                  c.Ac(1, Wt, 1, 3, 'img', 1),
                  c.Ac(2, Qt, 3, 2, 'span', 2)),
                  2 & t &&
                    (c.lc('ngIf', e.nzIcon && e.hasIcon),
                    c.Bb(1),
                    c.lc('ngIf', e.nzSrc && e.hasSrc),
                    c.Bb(1),
                    c.lc('ngIf', e.nzText && e.hasText))
              },
              directives: [i.n, g.b, i.o],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', String)],
              t.prototype,
              'nzShape',
              void 0
            ),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzSize',
              void 0
            ),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.b)(),
                Object(h.b)('design:type', Object),
              ],
              t.prototype,
              'nzGap',
              void 0
            ),
            t
          )
        })(),
        Jt = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, g.c, v.b]],
            })),
            t
          )
        })()
      var qt = n('2Vo4'),
        Xt = n('itXk'),
        Kt = n('vxfF'),
        Yt = n('eIep'),
        te = n('quSY'),
        ee = n('vkgz'),
        ne = n('IzEk')
      'undefined' != typeof Element && Element
      const ie = new c.r('cdk-focus-monitor-default-options'),
        se = Object(v.e)({ passive: !0, capture: !0 })
      let oe = (() => {
        class t {
          constructor(t, e, n, i) {
            ;(this._ngZone = t),
              (this._platform = e),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._rootNodeFocusListenerCount = new Map()),
              (this._documentKeydownListener = () => {
                ;(this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue('keyboard')
              }),
              (this._documentMousedownListener = (t) => {
                if (!this._lastTouchTarget) {
                  const e = (function (t) {
                    return 0 === t.buttons
                  })(t)
                    ? 'keyboard'
                    : 'mouse'
                  this._setOriginForCurrentEventQueue(e)
                }
              }),
              (this._documentTouchstartListener = (t) => {
                !(function (t) {
                  const e =
                    (t.touches && t.touches[0]) ||
                    (t.changedTouches && t.changedTouches[0])
                  return !(
                    !e ||
                    -1 !== e.identifier ||
                    (null != e.radiusX && 1 !== e.radiusX) ||
                    (null != e.radiusY && 1 !== e.radiusY)
                  )
                })(t)
                  ? (null != this._touchTimeoutId &&
                      clearTimeout(this._touchTimeoutId),
                    (this._lastTouchTarget = re(t)),
                    (this._touchTimeoutId = setTimeout(
                      () => (this._lastTouchTarget = null),
                      650
                    )))
                  : this._lastTouchTarget ||
                    this._setOriginForCurrentEventQueue('keyboard')
              }),
              (this._windowFocusListener = () => {
                ;(this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ))
              }),
              (this._rootNodeFocusAndBlurListener = (t) => {
                const e = re(t),
                  n = 'focus' === t.type ? this._onFocus : this._onBlur
                for (let i = e; i; i = i.parentElement) n.call(this, t, i)
              }),
              (this._document = n),
              (this._detectionMode =
                (null == i ? void 0 : i.detectionMode) || 0)
          }
          monitor(t, e = !1) {
            const n = Object(L.e)(t)
            if (!this._platform.isBrowser || 1 !== n.nodeType)
              return Object(k.a)(null)
            const i = Object(v.c)(n) || this._getDocument(),
              s = this._elementInfo.get(n)
            if (s) return e && (s.checkChildren = !0), s.subject
            const o = { checkChildren: e, subject: new m.a(), rootNode: i }
            return (
              this._elementInfo.set(n, o),
              this._registerGlobalListeners(o),
              o.subject
            )
          }
          stopMonitoring(t) {
            const e = Object(L.e)(t),
              n = this._elementInfo.get(e)
            n &&
              (n.subject.complete(),
              this._setClasses(e),
              this._elementInfo.delete(e),
              this._removeGlobalListeners(n))
          }
          focusVia(t, e, n) {
            const i = Object(L.e)(t)
            i === this._getDocument().activeElement
              ? this._getClosestElementsInfo(i).forEach(([t, n]) =>
                  this._originChanged(t, e, n)
                )
              : (this._setOriginForCurrentEventQueue(e),
                'function' == typeof i.focus && i.focus(n))
          }
          ngOnDestroy() {
            this._elementInfo.forEach((t, e) => this.stopMonitoring(e))
          }
          _getDocument() {
            return this._document || document
          }
          _getWindow() {
            return this._getDocument().defaultView || window
          }
          _toggleClass(t, e, n) {
            n ? t.classList.add(e) : t.classList.remove(e)
          }
          _getFocusOrigin(t) {
            return this._origin
              ? this._origin
              : this._windowFocused && this._lastFocusOrigin
              ? this._lastFocusOrigin
              : this._wasCausedByTouch(t)
              ? 'touch'
              : 'program'
          }
          _setClasses(t, e) {
            this._toggleClass(t, 'cdk-focused', !!e),
              this._toggleClass(t, 'cdk-touch-focused', 'touch' === e),
              this._toggleClass(t, 'cdk-keyboard-focused', 'keyboard' === e),
              this._toggleClass(t, 'cdk-mouse-focused', 'mouse' === e),
              this._toggleClass(t, 'cdk-program-focused', 'program' === e)
          }
          _setOriginForCurrentEventQueue(t) {
            this._ngZone.runOutsideAngular(() => {
              ;(this._origin = t),
                0 === this._detectionMode &&
                  (this._originTimeoutId = setTimeout(
                    () => (this._origin = null),
                    1
                  ))
            })
          }
          _wasCausedByTouch(t) {
            const e = re(t)
            return (
              this._lastTouchTarget instanceof Node &&
              e instanceof Node &&
              (e === this._lastTouchTarget || e.contains(this._lastTouchTarget))
            )
          }
          _onFocus(t, e) {
            const n = this._elementInfo.get(e)
            n &&
              (n.checkChildren || e === re(t)) &&
              this._originChanged(e, this._getFocusOrigin(t), n)
          }
          _onBlur(t, e) {
            const n = this._elementInfo.get(e)
            !n ||
              (n.checkChildren &&
                t.relatedTarget instanceof Node &&
                e.contains(t.relatedTarget)) ||
              (this._setClasses(e), this._emitOrigin(n.subject, null))
          }
          _emitOrigin(t, e) {
            this._ngZone.run(() => t.next(e))
          }
          _registerGlobalListeners(t) {
            if (!this._platform.isBrowser) return
            const e = t.rootNode,
              n = this._rootNodeFocusListenerCount.get(e) || 0
            n ||
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener(
                  'focus',
                  this._rootNodeFocusAndBlurListener,
                  se
                ),
                  e.addEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    se
                  )
              }),
              this._rootNodeFocusListenerCount.set(e, n + 1),
              1 == ++this._monitoredElementCount &&
                this._ngZone.runOutsideAngular(() => {
                  const t = this._getDocument(),
                    e = this._getWindow()
                  t.addEventListener(
                    'keydown',
                    this._documentKeydownListener,
                    se
                  ),
                    t.addEventListener(
                      'mousedown',
                      this._documentMousedownListener,
                      se
                    ),
                    t.addEventListener(
                      'touchstart',
                      this._documentTouchstartListener,
                      se
                    ),
                    e.addEventListener('focus', this._windowFocusListener)
                })
          }
          _removeGlobalListeners(t) {
            const e = t.rootNode
            if (this._rootNodeFocusListenerCount.has(e)) {
              const t = this._rootNodeFocusListenerCount.get(e)
              t > 1
                ? this._rootNodeFocusListenerCount.set(e, t - 1)
                : (e.removeEventListener(
                    'focus',
                    this._rootNodeFocusAndBlurListener,
                    se
                  ),
                  e.removeEventListener(
                    'blur',
                    this._rootNodeFocusAndBlurListener,
                    se
                  ),
                  this._rootNodeFocusListenerCount.delete(e))
            }
            if (!--this._monitoredElementCount) {
              const t = this._getDocument(),
                e = this._getWindow()
              t.removeEventListener(
                'keydown',
                this._documentKeydownListener,
                se
              ),
                t.removeEventListener(
                  'mousedown',
                  this._documentMousedownListener,
                  se
                ),
                t.removeEventListener(
                  'touchstart',
                  this._documentTouchstartListener,
                  se
                ),
                e.removeEventListener('focus', this._windowFocusListener),
                clearTimeout(this._windowFocusTimeoutId),
                clearTimeout(this._touchTimeoutId),
                clearTimeout(this._originTimeoutId)
            }
          }
          _originChanged(t, e, n) {
            this._setClasses(t, e),
              this._emitOrigin(n.subject, e),
              (this._lastFocusOrigin = e)
          }
          _getClosestElementsInfo(t) {
            const e = []
            return (
              this._elementInfo.forEach((n, i) => {
                ;(i === t || (n.checkChildren && i.contains(t))) &&
                  e.push([i, n])
              }),
              e
            )
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Zb(c.A), c.Zb(v.a), c.Zb(i.d, 8), c.Zb(ie, 8))
          }),
          (t.ɵprov = Object(c.Lb)({
            factory: function () {
              return new t(
                Object(c.Zb)(c.A),
                Object(c.Zb)(v.a),
                Object(c.Zb)(i.d, 8),
                Object(c.Zb)(ie, 8)
              )
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      function re(t) {
        return t.composedPath ? t.composedPath()[0] : t.target
      }
      const ae = 'cdk-high-contrast-black-on-white',
        ce = 'cdk-high-contrast-white-on-black',
        le = 'cdk-high-contrast-active'
      let he = (() => {
          class t {
            constructor(t, e) {
              ;(this._platform = t), (this._document = e)
            }
            getHighContrastMode() {
              if (!this._platform.isBrowser) return 0
              const t = this._document.createElement('div')
              ;(t.style.backgroundColor = 'rgb(1,2,3)'),
                (t.style.position = 'absolute'),
                this._document.body.appendChild(t)
              const e = this._document.defaultView || window,
                n = e && e.getComputedStyle ? e.getComputedStyle(t) : null,
                i = ((n && n.backgroundColor) || '').replace(/ /g, '')
              switch ((this._document.body.removeChild(t), i)) {
                case 'rgb(0,0,0)':
                  return 2
                case 'rgb(255,255,255)':
                  return 1
              }
              return 0
            }
            _applyBodyHighContrastModeCssClasses() {
              if (this._platform.isBrowser && this._document.body) {
                const t = this._document.body.classList
                t.remove(le), t.remove(ae), t.remove(ce)
                const e = this.getHighContrastMode()
                1 === e
                  ? (t.add(le), t.add(ae))
                  : 2 === e && (t.add(le), t.add(ce))
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Zb(v.a), c.Zb(i.d))
            }),
            (t.ɵprov = Object(c.Lb)({
              factory: function () {
                return new t(Object(c.Zb)(v.a), Object(c.Zb)(i.d))
              },
              token: t,
              providedIn: 'root',
            })),
            t
          )
        })(),
        de = (() => {
          class t {
            constructor(t) {
              t._applyBodyHighContrastModeCssClasses()
            }
          }
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)(c.Zb(he))
              },
              imports: [[v.b, ht]],
            })),
            t
          )
        })()
      var ue = n('+rOU')
      function pe(t, e) {
        1 & t && c.Qb(0, 'nz-empty', 6),
          2 & t && c.lc('nzNotFoundImage', 'simple')
      }
      function ge(t, e) {
        1 & t && c.Qb(0, 'nz-empty', 7),
          2 & t && c.lc('nzNotFoundImage', 'simple')
      }
      function me(t, e) {
        1 & t && c.Qb(0, 'nz-empty')
      }
      function be(t, e) {
        if (
          (1 & t &&
            (c.Tb(0, 2),
            c.Ac(1, pe, 1, 1, 'nz-empty', 3),
            c.Ac(2, ge, 1, 1, 'nz-empty', 4),
            c.Ac(3, me, 1, 0, 'nz-empty', 5),
            c.Sb()),
          2 & t)
        ) {
          const t = c.fc()
          c.lc('ngSwitch', t.size),
            c.Bb(1),
            c.lc('ngSwitchCase', 'normal'),
            c.Bb(1),
            c.lc('ngSwitchCase', 'small')
        }
      }
      function fe(t, e) {}
      function ze(t, e) {
        if ((1 & t && c.Ac(0, fe, 0, 0, 'ng-template', 8), 2 & t)) {
          const t = c.fc(2)
          c.lc('cdkPortalOutlet', t.contentPortal)
        }
      }
      function ve(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Ec(' ', t.content, ' ')
        }
      }
      function ye(t, e) {
        if (
          (1 & t &&
            (c.Tb(0),
            c.Ac(1, ze, 1, 1, void 0, 1),
            c.Ac(2, ve, 2, 1, 'ng-container', 1),
            c.Sb()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1),
            c.lc('ngIf', 'string' !== t.contentType),
            c.Bb(1),
            c.lc('ngIf', 'string' === t.contentType)
        }
      }
      function _e(t, e) {
        if ((1 & t && (c.Tb(0), c.Qb(1, 'img', 5), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1),
            c.lc(
              'src',
              t.nzNotFoundImage,
              c.uc
            )('alt', t.isContentString ? t.nzNotFoundContent : 'empty')
        }
      }
      function Ce(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Ac(1, _e, 2, 2, 'ng-container', 4), c.Sb()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzNotFoundImage)
        }
      }
      function Oe(t, e) {
        1 & t && c.Qb(0, 'nz-empty-default')
      }
      function we(t, e) {
        1 & t && c.Qb(0, 'nz-empty-simple')
      }
      function Se(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1),
            c.Ec(
              ' ',
              t.isContentString ? t.nzNotFoundContent : t.locale.description,
              ' '
            )
        }
      }
      function Ie(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'p', 6), c.Ac(1, Se, 2, 1, 'ng-container', 4), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzNotFoundContent)
        }
      }
      function xe(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Ec(' ', t.nzNotFoundFooter, ' ')
        }
      }
      function Te(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 7), c.Ac(1, xe, 2, 1, 'ng-container', 4), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzNotFoundFooter)
        }
      }
      const De = new c.r('nz-empty-component-name')
      let ke = (() => {
        class t {
          constructor(t, e, n, i) {
            ;(this.configService = t),
              (this.viewContainerRef = e),
              (this.cdr = n),
              (this.injector = i),
              (this.contentType = 'string'),
              (this.size = ''),
              (this.destroy$ = new m.a())
          }
          ngOnChanges(t) {
            t.nzComponentName &&
              (this.size = (function (t) {
                switch (t) {
                  case 'table':
                  case 'list':
                    return 'normal'
                  case 'select':
                  case 'tree-select':
                  case 'cascader':
                  case 'transfer':
                    return 'small'
                  default:
                    return ''
                }
              })(t.nzComponentName.currentValue)),
              t.specificContent &&
                !t.specificContent.isFirstChange() &&
                ((this.content = t.specificContent.currentValue),
                this.renderEmpty())
          }
          ngOnInit() {
            this.subscribeDefaultEmptyContentChange()
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete()
          }
          renderEmpty() {
            const t = this.content
            if ('string' == typeof t) this.contentType = 'string'
            else if (t instanceof c.M) {
              const e = { $implicit: this.nzComponentName }
              ;(this.contentType = 'template'),
                (this.contentPortal = new ue.e(t, this.viewContainerRef, e))
            } else if (t instanceof c.O) {
              const e = c.s.create({
                parent: this.injector,
                providers: [{ provide: De, useValue: this.nzComponentName }],
              })
              ;(this.contentType = 'component'),
                (this.contentPortal = new ue.b(t, this.viewContainerRef, e))
            } else (this.contentType = 'string'), (this.contentPortal = void 0)
            this.cdr.detectChanges()
          }
          subscribeDefaultEmptyContentChange() {
            this.configService
              .getConfigChangeEventForComponent('empty')
              .pipe(Object(f.a)(!0), Object(b.a)(this.destroy$))
              .subscribe(() => {
                ;(this.content =
                  this.specificContent || this.getUserDefaultEmptyContent()),
                  this.renderEmpty()
              })
          }
          getUserDefaultEmptyContent() {
            return (this.configService.getConfigForComponent('empty') || {})
              .nzDefaultEmptyContent
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Pb(d.a), c.Pb(c.Q), c.Pb(c.h), c.Pb(c.s))
          }),
          (t.ɵcmp = c.Jb({
            type: t,
            selectors: [['nz-embed-empty']],
            inputs: {
              nzComponentName: 'nzComponentName',
              specificContent: 'specificContent',
            },
            exportAs: ['nzEmbedEmpty'],
            features: [c.zb],
            decls: 2,
            vars: 2,
            consts: [
              [3, 'ngSwitch', 4, 'ngIf'],
              [4, 'ngIf'],
              [3, 'ngSwitch'],
              [
                'class',
                'ant-empty-normal',
                3,
                'nzNotFoundImage',
                4,
                'ngSwitchCase',
              ],
              [
                'class',
                'ant-empty-small',
                3,
                'nzNotFoundImage',
                4,
                'ngSwitchCase',
              ],
              [4, 'ngSwitchDefault'],
              [1, 'ant-empty-normal', 3, 'nzNotFoundImage'],
              [1, 'ant-empty-small', 3, 'nzNotFoundImage'],
              [3, 'cdkPortalOutlet'],
            ],
            template: function (t, e) {
              1 & t &&
                (c.Ac(0, be, 4, 3, 'ng-container', 0),
                c.Ac(1, ye, 3, 2, 'ng-container', 1)),
                2 & t &&
                  (c.lc('ngIf', !e.content && null !== e.specificContent),
                  c.Bb(1),
                  c.lc('ngIf', e.content))
            },
            directives: function () {
              return [i.n, i.p, i.q, i.r, Ae, ue.a]
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        )
      })()
      const Pe = ['default', 'simple']
      let Ae = (() => {
          class t {
            constructor(t, e) {
              ;(this.i18n = t),
                (this.cdr = e),
                (this.nzNotFoundImage = 'default'),
                (this.isContentString = !1),
                (this.isImageBuildIn = !0),
                (this.destroy$ = new m.a())
            }
            ngOnChanges(t) {
              const { nzNotFoundContent: e, nzNotFoundImage: n } = t
              if (
                (e &&
                  (this.isContentString = 'string' == typeof e.currentValue),
                n)
              ) {
                const t = n.currentValue || 'default'
                this.isImageBuildIn = Pe.findIndex((e) => e === t) > -1
              }
            }
            ngOnInit() {
              this.i18n.localeChange
                .pipe(Object(b.a)(this.destroy$))
                .subscribe(() => {
                  ;(this.locale = this.i18n.getLocaleData('Empty')),
                    this.cdr.markForCheck()
                })
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(D.e), c.Pb(c.h))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-empty']],
              hostAttrs: [1, 'ant-empty'],
              inputs: {
                nzNotFoundImage: 'nzNotFoundImage',
                nzNotFoundContent: 'nzNotFoundContent',
                nzNotFoundFooter: 'nzNotFoundFooter',
              },
              exportAs: ['nzEmpty'],
              features: [c.zb],
              decls: 6,
              vars: 5,
              consts: [
                [1, 'ant-empty-image'],
                [4, 'ngIf'],
                ['class', 'ant-empty-description', 4, 'ngIf'],
                ['class', 'ant-empty-footer', 4, 'ngIf'],
                [4, 'nzStringTemplateOutlet'],
                [3, 'src', 'alt'],
                [1, 'ant-empty-description'],
                [1, 'ant-empty-footer'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'div', 0),
                  c.Ac(1, Ce, 2, 1, 'ng-container', 1),
                  c.Ac(2, Oe, 1, 0, 'nz-empty-default', 1),
                  c.Ac(3, we, 1, 0, 'nz-empty-simple', 1),
                  c.Ub(),
                  c.Ac(4, Ie, 2, 1, 'p', 2),
                  c.Ac(5, Te, 2, 1, 'div', 3)),
                  2 & t &&
                    (c.Bb(1),
                    c.lc('ngIf', !e.isImageBuildIn),
                    c.Bb(1),
                    c.lc(
                      'ngIf',
                      e.isImageBuildIn && 'simple' !== e.nzNotFoundImage
                    ),
                    c.Bb(1),
                    c.lc(
                      'ngIf',
                      e.isImageBuildIn && 'simple' === e.nzNotFoundImage
                    ),
                    c.Bb(1),
                    c.lc('ngIf', null !== e.nzNotFoundContent),
                    c.Bb(1),
                    c.lc('ngIf', e.nzNotFoundFooter))
              },
              directives: function () {
                return [i.n, I.b, Ee, je]
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ee = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-empty-default']],
              exportAs: ['nzEmptyDefault'],
              decls: 12,
              vars: 0,
              consts: [
                [
                  'width',
                  '184',
                  'height',
                  '152',
                  'viewBox',
                  '0 0 184 152',
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  1,
                  'ant-empty-img-default',
                ],
                ['fill', 'none', 'fill-rule', 'evenodd'],
                ['transform', 'translate(24 31.67)'],
                [
                  'cx',
                  '67.797',
                  'cy',
                  '106.89',
                  'rx',
                  '67.797',
                  'ry',
                  '12.668',
                  1,
                  'ant-empty-img-default-ellipse',
                ],
                [
                  'd',
                  'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                  1,
                  'ant-empty-img-default-path-1',
                ],
                [
                  'd',
                  'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  'transform',
                  'translate(13.56)',
                  1,
                  'ant-empty-img-default-path-2',
                ],
                [
                  'd',
                  'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                  1,
                  'ant-empty-img-default-path-3',
                ],
                [
                  'd',
                  'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                  1,
                  'ant-empty-img-default-path-4',
                ],
                [
                  'd',
                  'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                  1,
                  'ant-empty-img-default-path-5',
                ],
                [
                  'transform',
                  'translate(149.65 15.383)',
                  1,
                  'ant-empty-img-default-g',
                ],
                ['cx', '20.654', 'cy', '3.167', 'rx', '2.849', 'ry', '2.815'],
                ['d', 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.ec(),
                  c.Vb(0, 'svg', 0),
                  c.Vb(1, 'g', 1),
                  c.Vb(2, 'g', 2),
                  c.Qb(3, 'ellipse', 3),
                  c.Qb(4, 'path', 4),
                  c.Qb(5, 'path', 5),
                  c.Qb(6, 'path', 6),
                  c.Qb(7, 'path', 7),
                  c.Ub(),
                  c.Qb(8, 'path', 8),
                  c.Vb(9, 'g', 9),
                  c.Qb(10, 'ellipse', 10),
                  c.Qb(11, 'path', 11),
                  c.Ub(),
                  c.Ub(),
                  c.Ub())
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        je = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-empty-simple']],
              exportAs: ['nzEmptySimple'],
              decls: 6,
              vars: 0,
              consts: [
                [
                  'width',
                  '64',
                  'height',
                  '41',
                  'viewBox',
                  '0 0 64 41',
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  1,
                  'ant-empty-img-simple',
                ],
                [
                  'transform',
                  'translate(0 1)',
                  'fill',
                  'none',
                  'fill-rule',
                  'evenodd',
                ],
                [
                  'cx',
                  '32',
                  'cy',
                  '33',
                  'rx',
                  '32',
                  'ry',
                  '7',
                  1,
                  'ant-empty-img-simple-ellipse',
                ],
                ['fill-rule', 'nonzero', 1, 'ant-empty-img-simple-g'],
                [
                  'd',
                  'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                ],
                [
                  'd',
                  'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                  1,
                  'ant-empty-img-simple-path',
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.ec(),
                  c.Vb(0, 'svg', 0),
                  c.Vb(1, 'g', 1),
                  c.Qb(2, 'ellipse', 2),
                  c.Vb(3, 'g', 3),
                  c.Qb(4, 'path', 4),
                  c.Qb(5, 'path', 5),
                  c.Ub(),
                  c.Ub(),
                  c.Ub())
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ve = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, ue.d, I.a, D.c]],
            })),
            t
          )
        })()
      const Be = ['*']
      function Le(t, e) {
        if (
          (1 & t && (c.Vb(0, 'div', 4), c.Qb(1, 'nz-embed-empty', 5), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('specificContent', t.notFoundContent)
        }
      }
      function Re(t, e) {
        if ((1 & t && c.Qb(0, 'nz-option-item-group', 9), 2 & t)) {
          const t = c.fc().$implicit
          c.lc('nzLabel', t.groupLabel)
        }
      }
      function Me(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'nz-option-item', 10),
            c.cc('itemHover', function (e) {
              return c.sc(t), c.fc(2).onItemHover(e)
            })('itemClick', function (e) {
              return c.sc(t), c.fc(2).onItemClick(e)
            }),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc().$implicit,
            e = c.fc()
          c.lc('icon', e.menuItemSelectedIcon)(
            'customContent',
            t.nzCustomContent
          )('template', t.template)('grouped', !!t.groupLabel)(
            'disabled',
            t.nzDisabled
          )('showState', 'tags' === e.mode || 'multiple' === e.mode)(
            'label',
            t.nzLabel
          )('compareWith', e.compareWith)('activatedValue', e.activatedValue)(
            'listOfSelectedValue',
            e.listOfSelectedValue
          )('value', t.nzValue)
        }
      }
      function Fe(t, e) {
        1 & t &&
          (c.Tb(0, 6),
          c.Ac(1, Re, 1, 1, 'nz-option-item-group', 7),
          c.Ac(2, Me, 1, 11, 'nz-option-item', 8),
          c.Sb()),
          2 & t &&
            (c.lc('ngSwitch', e.$implicit.type),
            c.Bb(1),
            c.lc('ngSwitchCase', 'group'),
            c.Bb(1),
            c.lc('ngSwitchCase', 'item'))
      }
      function Ne(t, e) {}
      function $e(t, e) {
        1 & t && c.jc(0)
      }
      const He = ['inputElement'],
        Ue = ['mirrorElement']
      function Ge(t, e) {
        1 & t && c.Qb(0, 'span', 3, 4)
      }
      function We(t, e) {
        if ((1 & t && c.Qb(0, 'nz-select-item', 6), 2 & t)) {
          const t = c.fc(2)
          c.lc('deletable', !1)('disabled', !1)('removeIcon', t.removeIcon)(
            'label',
            t.listOfTopItem[0].nzLabel
          )('contentTemplateOutlet', t.customTemplate)(
            'contentTemplateOutletContext',
            t.listOfTopItem[0]
          )
        }
      }
      function Qe(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Tb(0),
            c.Vb(1, 'nz-select-search', 4),
            c.cc('isComposingChange', function (e) {
              return c.sc(t), c.fc().isComposingChange(e)
            })('valueChange', function (e) {
              return c.sc(t), c.fc().onInputValueChange(e)
            }),
            c.Ub(),
            c.Ac(2, We, 1, 6, 'nz-select-item', 5),
            c.Sb()
        }
        if (2 & t) {
          const t = c.fc()
          c.Bb(1),
            c.lc('nzId', t.nzId)('disabled', t.disabled)('value', t.inputValue)(
              'showInput',
              t.showSearch
            )('mirrorSync', !1)('autofocus', t.autofocus)(
              'focusTrigger',
              t.open
            ),
            c.Bb(1),
            c.lc('ngIf', t.isShowSingleLabel)
        }
      }
      function Ze(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'nz-select-item', 9),
            c.cc('delete', function () {
              c.sc(t)
              const n = e.$implicit
              return c.fc(2).onDeleteItem(n.contentTemplateOutletContext)
            }),
            c.Ub()
        }
        if (2 & t) {
          const t = e.$implicit,
            n = c.fc(2)
          c.lc('removeIcon', n.removeIcon)('label', t.nzLabel)(
            'disabled',
            t.nzDisabled || n.disabled
          )('contentTemplateOutlet', t.contentTemplateOutlet)('deletable', !0)(
            'contentTemplateOutletContext',
            t.contentTemplateOutletContext
          )
        }
      }
      function Je(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Tb(0),
            c.Ac(1, Ze, 1, 6, 'nz-select-item', 7),
            c.Vb(2, 'nz-select-search', 8),
            c.cc('isComposingChange', function (e) {
              return c.sc(t), c.fc().isComposingChange(e)
            })('valueChange', function (e) {
              return c.sc(t), c.fc().onInputValueChange(e)
            }),
            c.Ub(),
            c.Sb()
        }
        if (2 & t) {
          const t = c.fc()
          c.Bb(1),
            c.lc('ngForOf', t.listOfSlicedItem)('ngForTrackBy', t.trackValue),
            c.Bb(1),
            c.lc('nzId', t.nzId)('disabled', t.disabled)('value', t.inputValue)(
              'autofocus',
              t.autofocus
            )('showInput', !0)('mirrorSync', !0)('focusTrigger', t.open)
        }
      }
      function qe(t, e) {
        if ((1 & t && c.Qb(0, 'nz-select-placeholder', 10), 2 & t)) {
          const t = c.fc()
          c.lc('placeholder', t.placeHolder)
        }
      }
      function Xe(t, e) {
        if ((1 & t && c.Qb(0, 'nz-select-arrow', 5), 2 & t)) {
          const t = c.fc()
          c.lc('loading', t.nzLoading)('search', t.nzOpen && t.nzShowSearch)(
            'suffixIcon',
            t.nzSuffixIcon
          )
        }
      }
      function Ke(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'nz-select-clear', 6),
            c.cc('clear', function () {
              return c.sc(t), c.fc().onClearSelection()
            }),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc()
          c.lc('clearIcon', t.nzClearIcon)
        }
      }
      function Ye(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'nz-option-container', 7),
            c.cc('keydown', function (e) {
              return c.sc(t), c.fc().onKeyDown(e)
            })('itemClick', function (e) {
              return c.sc(t), c.fc().onItemClick(e)
            })('scrollToBottom', function () {
              return c.sc(t), c.fc().nzScrollToBottom.emit()
            }),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc()
          c.Hb(
            'ant-select-dropdown-placement-bottomLeft',
            'bottom' === t.dropDownPosition
          )(
            'ant-select-dropdown-placement-topLeft',
            'top' === t.dropDownPosition
          ),
            c.lc('ngStyle', t.nzDropdownStyle)('itemSize', t.nzOptionHeightPx)(
              'maxItemLength',
              t.nzOptionOverflowSize
            )('matchWidth', t.nzDropdownMatchSelectWidth)(
              '@slideMotion',
              'enter'
            )(
              '@.disabled',
              null == t.noAnimation ? null : t.noAnimation.nzNoAnimation
            )(
              'nzNoAnimation',
              null == t.noAnimation ? null : t.noAnimation.nzNoAnimation
            )('listOfContainerItem', t.listOfContainerItem)(
              'menuItemSelectedIcon',
              t.nzMenuItemSelectedIcon
            )('notFoundContent', t.nzNotFoundContent)(
              'activatedValue',
              t.activatedValue
            )('listOfSelectedValue', t.listOfValue)(
              'dropdownRender',
              t.nzDropdownRender
            )('compareWith', t.compareWith)('mode', t.nzMode)
        }
      }
      function tn(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc()
          c.Bb(1), c.Dc(t.nzLabel)
        }
      }
      function en(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc()
          c.Bb(1), c.Dc(t.label)
        }
      }
      function nn(t, e) {}
      function sn(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Ac(1, nn, 0, 0, 'ng-template', 3), c.Sb()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngTemplateOutlet', t.template)
        }
      }
      function on(t, e) {
        1 & t && c.Qb(0, 'i', 6)
      }
      function rn(t, e) {
        if (
          (1 & t && (c.Vb(0, 'div', 4), c.Ac(1, on, 1, 0, 'i', 5), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngIf', !t.icon)('ngIfElse', t.icon)
        }
      }
      function an(t, e) {
        1 & t && c.Qb(0, 'i', 2)
      }
      function cn(t, e) {
        1 & t && c.Qb(0, 'i', 7)
      }
      function ln(t, e) {
        1 & t && c.Qb(0, 'i', 8)
      }
      function hn(t, e) {
        if (
          (1 & t &&
            (c.Tb(0),
            c.Ac(1, cn, 1, 0, 'i', 5),
            c.Ac(2, ln, 1, 0, 'i', 6),
            c.Sb()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('ngIf', !t.search), c.Bb(1), c.lc('ngIf', t.search)
        }
      }
      function dn(t, e) {
        if ((1 & t && (c.Tb(0), c.Qb(1, 'i', 10), c.Sb()), 2 & t)) {
          const t = e.$implicit
          c.Bb(1), c.lc('nzType', t)
        }
      }
      function un(t, e) {
        if ((1 & t && c.Ac(0, dn, 2, 1, 'ng-container', 9), 2 & t)) {
          const t = c.fc(2)
          c.lc('nzStringTemplateOutlet', t.suffixIcon)
        }
      }
      function pn(t, e) {
        if (
          (1 & t &&
            (c.Ac(0, hn, 3, 2, 'ng-container', 3),
            c.Ac(1, un, 1, 1, 'ng-template', null, 4, c.Bc)),
          2 & t)
        ) {
          const t = c.rc(2),
            e = c.fc()
          c.lc('ngIf', !e.suffixIcon)('ngIfElse', t)
        }
      }
      function gn(t, e) {
        1 & t && c.Qb(0, 'i', 1)
      }
      function mn(t, e) {
        if ((1 & t && (c.Vb(0, 'div', 4), c.Cc(1), c.Ub()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.label)
        }
      }
      function bn(t, e) {
        if ((1 & t && c.Cc(0), 2 & t)) {
          const t = c.fc(2)
          c.Dc(t.label)
        }
      }
      function fn(t, e) {
        if (
          (1 & t &&
            (c.Tb(0),
            c.Ac(1, mn, 2, 1, 'div', 2),
            c.Ac(2, bn, 1, 1, 'ng-template', null, 3, c.Bc),
            c.Sb()),
          2 & t)
        ) {
          const t = c.rc(3),
            e = c.fc()
          c.Bb(1), c.lc('ngIf', e.deletable)('ngIfElse', t)
        }
      }
      function zn(t, e) {
        1 & t && c.Qb(0, 'i', 7)
      }
      function vn(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'span', 5),
            c.cc('click', function (e) {
              return c.sc(t), c.fc().onDelete(e)
            }),
            c.Ac(1, zn, 1, 0, 'i', 6),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc()
          c.Bb(1), c.lc('ngIf', !t.removeIcon)('ngIfElse', t.removeIcon)
        }
      }
      const yn = function (t) {
        return { $implicit: t }
      }
      function _n(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc()
          c.Bb(1), c.Ec(' ', t.placeholder, ' ')
        }
      }
      let Cn = (() => {
          class t {
            constructor() {
              ;(this.nzLabel = null), (this.changes = new m.a())
            }
            ngOnChanges() {
              this.changes.next()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-option-group']],
              inputs: { nzLabel: 'nzLabel' },
              exportAs: ['nzOptionGroup'],
              features: [c.zb],
              ngContentSelectors: Be,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        On = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.notFoundContent = void 0),
                (this.menuItemSelectedIcon = null),
                (this.dropdownRender = null),
                (this.activatedValue = null),
                (this.listOfSelectedValue = []),
                (this.mode = 'default'),
                (this.matchWidth = !0),
                (this.itemSize = 32),
                (this.maxItemLength = 8),
                (this.listOfContainerItem = []),
                (this.itemClick = new c.n()),
                (this.scrollToBottom = new c.n()),
                (this.scrolledIndex = 0),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-dropdown'
                )
            }
            onItemClick(t) {
              this.itemClick.emit(t)
            }
            onItemHover(t) {
              this.activatedValue = t
            }
            trackValue(t, e) {
              return e.key
            }
            onScrolledIndexChange(t) {
              ;(this.scrolledIndex = t),
                t === this.listOfContainerItem.length - this.maxItemLength &&
                  this.scrollToBottom.emit()
            }
            scrollToActivatedValue() {
              const t = this.listOfContainerItem.findIndex((t) =>
                this.compareWith(t.key, this.activatedValue)
              )
              ;(t < this.scrolledIndex ||
                t >= this.scrolledIndex + this.maxItemLength) &&
                this.cdkVirtualScrollViewport.scrollToIndex(t || 0)
            }
            ngOnChanges(t) {
              const { listOfContainerItem: e, activatedValue: n } = t
              ;(e || n) && this.scrollToActivatedValue()
            }
            ngAfterViewInit() {
              setTimeout(() => this.scrollToActivatedValue())
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-option-container']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(Kt.d, 3), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.cdkVirtualScrollViewport = t.first)
                }
              },
              inputs: {
                notFoundContent: 'notFoundContent',
                menuItemSelectedIcon: 'menuItemSelectedIcon',
                dropdownRender: 'dropdownRender',
                activatedValue: 'activatedValue',
                listOfSelectedValue: 'listOfSelectedValue',
                mode: 'mode',
                matchWidth: 'matchWidth',
                itemSize: 'itemSize',
                maxItemLength: 'maxItemLength',
                listOfContainerItem: 'listOfContainerItem',
                compareWith: 'compareWith',
              },
              outputs: {
                itemClick: 'itemClick',
                scrollToBottom: 'scrollToBottom',
              },
              exportAs: ['nzOptionContainer'],
              features: [c.zb],
              decls: 5,
              vars: 14,
              consts: [
                ['class', 'ant-select-item-empty', 4, 'ngIf'],
                [
                  3,
                  'itemSize',
                  'maxBufferPx',
                  'minBufferPx',
                  'scrolledIndexChange',
                ],
                [
                  'cdkVirtualFor',
                  '',
                  3,
                  'cdkVirtualForOf',
                  'cdkVirtualForTrackBy',
                  'cdkVirtualForTemplateCacheSize',
                ],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-select-item-empty'],
                ['nzComponentName', 'select', 3, 'specificContent'],
                [3, 'ngSwitch'],
                [3, 'nzLabel', 4, 'ngSwitchCase'],
                [
                  3,
                  'icon',
                  'customContent',
                  'template',
                  'grouped',
                  'disabled',
                  'showState',
                  'label',
                  'compareWith',
                  'activatedValue',
                  'listOfSelectedValue',
                  'value',
                  'itemHover',
                  'itemClick',
                  4,
                  'ngSwitchCase',
                ],
                [3, 'nzLabel'],
                [
                  3,
                  'icon',
                  'customContent',
                  'template',
                  'grouped',
                  'disabled',
                  'showState',
                  'label',
                  'compareWith',
                  'activatedValue',
                  'listOfSelectedValue',
                  'value',
                  'itemHover',
                  'itemClick',
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'div'),
                  c.Ac(1, Le, 2, 1, 'div', 0),
                  c.Vb(2, 'cdk-virtual-scroll-viewport', 1),
                  c.cc('scrolledIndexChange', function (t) {
                    return e.onScrolledIndexChange(t)
                  }),
                  c.Ac(3, Fe, 3, 3, 'ng-template', 2),
                  c.Ub(),
                  c.Ac(4, Ne, 0, 0, 'ng-template', 3),
                  c.Ub()),
                  2 & t &&
                    (c.Bb(1),
                    c.lc('ngIf', 0 === e.listOfContainerItem.length),
                    c.Bb(1),
                    c.xc(
                      'height',
                      e.listOfContainerItem.length * e.itemSize,
                      'px'
                    )('max-height', e.itemSize * e.maxItemLength, 'px'),
                    c.Hb('full-width', !e.matchWidth),
                    c.lc('itemSize', e.itemSize)(
                      'maxBufferPx',
                      e.itemSize * e.maxItemLength
                    )('minBufferPx', e.itemSize * e.maxItemLength),
                    c.Bb(1),
                    c.lc('cdkVirtualForOf', e.listOfContainerItem)(
                      'cdkVirtualForTrackBy',
                      e.trackValue
                    )('cdkVirtualForTemplateCacheSize', 0),
                    c.Bb(1),
                    c.lc('ngTemplateOutlet', e.dropdownRender))
              },
              directives: function () {
                return [i.n, Kt.d, Kt.a, Kt.c, i.s, ke, i.p, i.q, Dn, kn]
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        wn = (() => {
          class t {
            constructor(t) {
              ;(this.nzOptionGroupComponent = t),
                (this.destroy$ = new m.a()),
                (this.changes = new m.a()),
                (this.groupLabel = null),
                (this.nzLabel = null),
                (this.nzValue = null),
                (this.nzDisabled = !1),
                (this.nzHide = !1),
                (this.nzCustomContent = !1)
            }
            ngOnInit() {
              this.nzOptionGroupComponent &&
                this.nzOptionGroupComponent.changes
                  .pipe(Object(f.a)(!0), Object(b.a)(this.destroy$))
                  .subscribe(() => {
                    this.groupLabel = this.nzOptionGroupComponent.nzLabel
                  })
            }
            ngOnChanges() {
              this.changes.next()
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(Cn, 8))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-option']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(c.M, 3), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.template = t.first)
                }
              },
              inputs: {
                nzLabel: 'nzLabel',
                nzValue: 'nzValue',
                nzDisabled: 'nzDisabled',
                nzHide: 'nzHide',
                nzCustomContent: 'nzCustomContent',
              },
              exportAs: ['nzOption'],
              features: [c.zb],
              ngContentSelectors: Be,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.Ac(0, $e, 1, 0, 'ng-template'))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzDisabled',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzHide',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzCustomContent',
              void 0
            ),
            t
          )
        })(),
        Sn = (() => {
          class t {
            constructor(t, e, n) {
              ;(this.elementRef = t),
                (this.renderer = e),
                (this.focusMonitor = n),
                (this.nzId = null),
                (this.disabled = !1),
                (this.mirrorSync = !1),
                (this.showInput = !0),
                (this.focusTrigger = !1),
                (this.value = ''),
                (this.autofocus = !1),
                (this.valueChange = new c.n()),
                (this.isComposingChange = new c.n()),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-selection-search'
                )
            }
            setCompositionState(t) {
              this.isComposingChange.next(t)
            }
            onValueChange(t) {
              ;(this.value = t),
                this.valueChange.next(t),
                this.mirrorSync && this.syncMirrorWidth()
            }
            clearInputValue() {
              ;(this.inputElement.nativeElement.value = ''),
                this.onValueChange('')
            }
            syncMirrorWidth() {
              const t = this.mirrorElement.nativeElement,
                e = this.elementRef.nativeElement,
                n = this.inputElement.nativeElement
              this.renderer.removeStyle(e, 'width'),
                (t.innerHTML = this.renderer.createText(`${n.value}&nbsp;`)),
                this.renderer.setStyle(e, 'width', `${t.scrollWidth}px`)
            }
            focus() {
              this.focusMonitor.focusVia(this.inputElement, 'keyboard')
            }
            blur() {
              this.inputElement.nativeElement.blur()
            }
            ngOnChanges(t) {
              const e = this.inputElement.nativeElement,
                { focusTrigger: n, showInput: i } = t
              i &&
                (this.showInput
                  ? this.renderer.removeAttribute(e, 'readonly')
                  : this.renderer.setAttribute(e, 'readonly', 'readonly')),
                n &&
                  !0 === n.currentValue &&
                  !1 === n.previousValue &&
                  e.focus()
            }
            ngAfterViewInit() {
              this.mirrorSync && this.syncMirrorWidth(),
                this.autofocus && this.focus()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(c.F), c.Pb(oe))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-search']],
              viewQuery: function (t, e) {
                if ((1 & t && (c.Gc(He, 3), c.Gc(Ue, 1)), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.inputElement = t.first),
                    c.qc((t = c.dc())) && (e.mirrorElement = t.first)
                }
              },
              inputs: {
                nzId: 'nzId',
                disabled: 'disabled',
                mirrorSync: 'mirrorSync',
                showInput: 'showInput',
                focusTrigger: 'focusTrigger',
                value: 'value',
                autofocus: 'autofocus',
              },
              outputs: {
                valueChange: 'valueChange',
                isComposingChange: 'isComposingChange',
              },
              features: [c.Ab([{ provide: l.a, useValue: !1 }]), c.zb],
              decls: 3,
              vars: 7,
              consts: [
                [
                  'autocomplete',
                  'off',
                  1,
                  'ant-select-selection-search-input',
                  3,
                  'ngModel',
                  'disabled',
                  'ngModelChange',
                  'compositionstart',
                  'compositionend',
                ],
                ['inputElement', ''],
                ['class', 'ant-select-selection-search-mirror', 4, 'ngIf'],
                [1, 'ant-select-selection-search-mirror'],
                ['mirrorElement', ''],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'input', 0, 1),
                  c.cc('ngModelChange', function (t) {
                    return e.onValueChange(t)
                  })('compositionstart', function () {
                    return e.setCompositionState(!0)
                  })('compositionend', function () {
                    return e.setCompositionState(!1)
                  }),
                  c.Ub(),
                  c.Ac(2, Ge, 2, 0, 'span', 2)),
                  2 & t &&
                    (c.xc('opacity', e.showInput ? null : 0),
                    c.lc('ngModel', e.value)('disabled', e.disabled),
                    c.Cb('id', e.nzId)(
                      'autofocus',
                      e.autofocus ? 'autofocus' : null
                    ),
                    c.Bb(2),
                    c.lc('ngIf', e.mirrorSync))
              },
              directives: [l.c, l.h, l.i, i.n],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        In = (() => {
          class t {
            constructor(t, e) {
              ;(this.elementRef = t),
                (this.noAnimation = e),
                (this.nzId = null),
                (this.showSearch = !1),
                (this.placeHolder = null),
                (this.open = !1),
                (this.maxTagCount = 1 / 0),
                (this.autofocus = !1),
                (this.disabled = !1),
                (this.mode = 'default'),
                (this.customTemplate = null),
                (this.maxTagPlaceholder = null),
                (this.removeIcon = null),
                (this.listOfTopItem = []),
                (this.tokenSeparators = []),
                (this.tokenize = new c.n()),
                (this.inputValueChange = new c.n()),
                (this.deleteItem = new c.n()),
                (this.listOfSlicedItem = []),
                (this.isShowPlaceholder = !0),
                (this.isShowSingleLabel = !1),
                (this.isComposing = !1),
                (this.inputValue = null),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-selector'
                )
            }
            onHostKeydown(t) {
              t.keyCode === B.b &&
                'default' !== this.mode &&
                !t.target.value &&
                this.listOfTopItem.length > 0 &&
                (t.preventDefault(),
                this.onDeleteItem(
                  this.listOfTopItem[this.listOfTopItem.length - 1]
                ))
            }
            updateTemplateVariable() {
              const t = 0 === this.listOfTopItem.length
              ;(this.isShowPlaceholder =
                t && !this.isComposing && !this.inputValue),
                (this.isShowSingleLabel =
                  !t && !this.isComposing && !this.inputValue)
            }
            isComposingChange(t) {
              ;(this.isComposing = t), this.updateTemplateVariable()
            }
            onInputValueChange(t) {
              t !== this.inputValue &&
                ((this.inputValue = t),
                this.updateTemplateVariable(),
                this.inputValueChange.emit(t),
                this.tokenSeparate(t, this.tokenSeparators))
            }
            tokenSeparate(t, e) {
              if (
                t &&
                t.length &&
                e.length &&
                'default' !== this.mode &&
                ((t, e) => {
                  for (let n = 0; n < e.length; ++n)
                    if (t.lastIndexOf(e[n]) > 0) return !0
                  return !1
                })(t, e)
              ) {
                const n = ((t, e) => {
                  const n = new RegExp(`[${e.join()}]`),
                    i = t.split(n).filter((t) => t)
                  return [...new Set(i)]
                })(t, e)
                this.tokenize.next(n)
              }
            }
            clearInputValue() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.clearInputValue()
            }
            focus() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.focus()
            }
            blur() {
              this.nzSelectSearchComponent &&
                this.nzSelectSearchComponent.blur()
            }
            trackValue(t, e) {
              return e.nzValue
            }
            onDeleteItem(t) {
              this.disabled || t.nzDisabled || this.deleteItem.next(t)
            }
            ngOnChanges(t) {
              const {
                listOfTopItem: e,
                maxTagCount: n,
                customTemplate: i,
                maxTagPlaceholder: s,
              } = t
              if ((e && this.updateTemplateVariable(), e || n || i || s)) {
                const t = this.listOfTopItem
                  .slice(0, this.maxTagCount)
                  .map((t) => ({
                    nzLabel: t.nzLabel,
                    nzValue: t.nzValue,
                    nzDisabled: t.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: t,
                  }))
                if (this.listOfTopItem.length > this.maxTagCount) {
                  const e = `+ ${
                      this.listOfTopItem.length - this.maxTagCount
                    } ...`,
                    n = this.listOfTopItem.map((t) => t.nzValue),
                    i = {
                      nzLabel: e,
                      nzValue: '$$__nz_exceeded_item',
                      nzDisabled: !0,
                      contentTemplateOutlet: this.maxTagPlaceholder,
                      contentTemplateOutletContext: n.slice(this.maxTagCount),
                    }
                  t.push(i)
                }
                this.listOfSlicedItem = t
              }
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(S.a, 9))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-top-control']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(Sn, 1), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.nzSelectSearchComponent = t.first)
                }
              },
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('keydown', function (t) {
                    return e.onHostKeydown(t)
                  })
              },
              inputs: {
                nzId: 'nzId',
                showSearch: 'showSearch',
                placeHolder: 'placeHolder',
                open: 'open',
                maxTagCount: 'maxTagCount',
                autofocus: 'autofocus',
                disabled: 'disabled',
                mode: 'mode',
                customTemplate: 'customTemplate',
                maxTagPlaceholder: 'maxTagPlaceholder',
                removeIcon: 'removeIcon',
                listOfTopItem: 'listOfTopItem',
                tokenSeparators: 'tokenSeparators',
              },
              outputs: {
                tokenize: 'tokenize',
                inputValueChange: 'inputValueChange',
                deleteItem: 'deleteItem',
              },
              exportAs: ['nzSelectTopControl'],
              features: [c.zb],
              decls: 4,
              vars: 3,
              consts: [
                [3, 'ngSwitch'],
                [4, 'ngSwitchCase'],
                [4, 'ngSwitchDefault'],
                [3, 'placeholder', 4, 'ngIf'],
                [
                  3,
                  'nzId',
                  'disabled',
                  'value',
                  'showInput',
                  'mirrorSync',
                  'autofocus',
                  'focusTrigger',
                  'isComposingChange',
                  'valueChange',
                ],
                [
                  3,
                  'deletable',
                  'disabled',
                  'removeIcon',
                  'label',
                  'contentTemplateOutlet',
                  'contentTemplateOutletContext',
                  4,
                  'ngIf',
                ],
                [
                  3,
                  'deletable',
                  'disabled',
                  'removeIcon',
                  'label',
                  'contentTemplateOutlet',
                  'contentTemplateOutletContext',
                ],
                [
                  3,
                  'removeIcon',
                  'label',
                  'disabled',
                  'contentTemplateOutlet',
                  'deletable',
                  'contentTemplateOutletContext',
                  'delete',
                  4,
                  'ngFor',
                  'ngForOf',
                  'ngForTrackBy',
                ],
                [
                  3,
                  'nzId',
                  'disabled',
                  'value',
                  'autofocus',
                  'showInput',
                  'mirrorSync',
                  'focusTrigger',
                  'isComposingChange',
                  'valueChange',
                ],
                [
                  3,
                  'removeIcon',
                  'label',
                  'disabled',
                  'contentTemplateOutlet',
                  'deletable',
                  'contentTemplateOutletContext',
                  'delete',
                ],
                [3, 'placeholder'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Tb(0, 0),
                  c.Ac(1, Qe, 3, 8, 'ng-container', 1),
                  c.Ac(2, Je, 3, 9, 'ng-container', 2),
                  c.Sb(),
                  c.Ac(3, qe, 1, 1, 'nz-select-placeholder', 3)),
                  2 & t &&
                    (c.lc('ngSwitch', e.mode),
                    c.Bb(1),
                    c.lc('ngSwitchCase', 'default'),
                    c.Bb(2),
                    c.lc('ngIf', e.isShowPlaceholder))
              },
              directives: function () {
                return [i.p, i.q, i.r, i.n, Sn, En, i.m, y, jn]
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })()
      const xn = (t, e) =>
        !(!e || !e.nzLabel) &&
        e.nzLabel.toString().toLowerCase().indexOf(t.toLowerCase()) > -1
      let Tn = (() => {
          class t {
            constructor(t, e, n, i, s, o, r) {
              ;(this.nzConfigService = t),
                (this.cdr = e),
                (this.elementRef = n),
                (this.platform = i),
                (this.focusMonitor = s),
                (this.directionality = o),
                (this.noAnimation = r),
                (this._nzModuleName = 'select'),
                (this.nzId = null),
                (this.nzSize = 'default'),
                (this.nzOptionHeightPx = 32),
                (this.nzOptionOverflowSize = 8),
                (this.nzDropdownClassName = null),
                (this.nzDropdownMatchSelectWidth = !0),
                (this.nzDropdownStyle = null),
                (this.nzNotFoundContent = void 0),
                (this.nzPlaceHolder = null),
                (this.nzMaxTagCount = 1 / 0),
                (this.nzDropdownRender = null),
                (this.nzCustomTemplate = null),
                (this.nzSuffixIcon = null),
                (this.nzClearIcon = null),
                (this.nzRemoveIcon = null),
                (this.nzMenuItemSelectedIcon = null),
                (this.nzTokenSeparators = []),
                (this.nzMaxTagPlaceholder = null),
                (this.nzMaxMultipleCount = 1 / 0),
                (this.nzMode = 'default'),
                (this.nzFilterOption = xn),
                (this.compareWith = (t, e) => t === e),
                (this.nzAllowClear = !1),
                (this.nzBorderless = !1),
                (this.nzShowSearch = !1),
                (this.nzLoading = !1),
                (this.nzAutoFocus = !1),
                (this.nzAutoClearSearchValue = !0),
                (this.nzServerSearch = !1),
                (this.nzDisabled = !1),
                (this.nzOpen = !1),
                (this.nzBackdrop = !1),
                (this.nzOptions = []),
                (this.nzOnSearch = new c.n()),
                (this.nzScrollToBottom = new c.n()),
                (this.nzOpenChange = new c.n()),
                (this.nzBlur = new c.n()),
                (this.nzFocus = new c.n()),
                (this.listOfValue$ = new qt.a([])),
                (this.listOfTemplateItem$ = new qt.a([])),
                (this.listOfTagAndTemplateItem = []),
                (this.searchValue = ''),
                (this.isReactiveDriven = !1),
                (this.destroy$ = new m.a()),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.dropDownPosition = 'bottom'),
                (this.triggerWidth = null),
                (this.listOfContainerItem = []),
                (this.listOfTopItem = []),
                (this.activatedValue = null),
                (this.listOfValue = []),
                (this.focused = !1),
                (this.dir = 'ltr'),
                this.elementRef.nativeElement.classList.add('ant-select')
            }
            set nzShowArrow(t) {
              this._nzShowArrow = t
            }
            get nzShowArrow() {
              return void 0 === this._nzShowArrow
                ? 'default' === this.nzMode
                : this._nzShowArrow
            }
            generateTagItem(t) {
              return { nzValue: t, nzLabel: t, type: 'item' }
            }
            onItemClick(t) {
              if (((this.activatedValue = t), 'default' === this.nzMode))
                (0 !== this.listOfValue.length &&
                  this.compareWith(this.listOfValue[0], t)) ||
                  this.updateListOfValue([t]),
                  this.setOpenState(!1)
              else {
                const e = this.listOfValue.findIndex((e) =>
                  this.compareWith(e, t)
                )
                if (-1 !== e) {
                  const t = this.listOfValue.filter((t, n) => n !== e)
                  this.updateListOfValue(t)
                } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                  const e = [...this.listOfValue, t]
                  this.updateListOfValue(e)
                }
                this.focus(), this.nzAutoClearSearchValue && this.clearInput()
              }
            }
            onItemDelete(t) {
              const e = this.listOfValue.filter(
                (e) => !this.compareWith(e, t.nzValue)
              )
              this.updateListOfValue(e), this.clearInput()
            }
            onHostClick() {
              ;(this.nzOpen && this.nzShowSearch) ||
                this.nzDisabled ||
                this.setOpenState(!this.nzOpen)
            }
            updateListOfContainerItem() {
              let t = this.listOfTagAndTemplateItem
                .filter((t) => !t.nzHide)
                .filter(
                  (t) =>
                    !(!this.nzServerSearch && this.searchValue) ||
                    this.nzFilterOption(this.searchValue, t)
                )
              if ('tags' === this.nzMode && this.searchValue) {
                const e = this.listOfTagAndTemplateItem.find(
                  (t) => t.nzLabel === this.searchValue
                )
                if (e) this.activatedValue = e.nzValue
                else {
                  const e = this.generateTagItem(this.searchValue)
                  ;(t = [e, ...t]), (this.activatedValue = e.nzValue)
                }
              }
              const e =
                t.find((t) =>
                  this.compareWith(t.nzValue, this.listOfValue[0])
                ) || t[0]
              this.activatedValue = (e && e.nzValue) || null
              let n = []
              this.isReactiveDriven
                ? (n = [
                    ...new Set(
                      this.nzOptions
                        .filter((t) => t.groupLabel)
                        .map((t) => t.groupLabel)
                    ),
                  ])
                : this.listOfNzOptionGroupComponent &&
                  (n = this.listOfNzOptionGroupComponent.map((t) => t.nzLabel)),
                n.forEach((e) => {
                  const n = t.findIndex((t) => e === t.groupLabel)
                  n > -1 &&
                    t.splice(n, 0, { groupLabel: e, type: 'group', key: e })
                }),
                (this.listOfContainerItem = [...t]),
                this.updateCdkConnectedOverlayPositions()
            }
            clearInput() {
              this.nzSelectTopControlComponent.clearInputValue()
            }
            updateListOfValue(t) {
              const e =
                ((n = t),
                'default' === this.nzMode ? (n.length > 0 ? n[0] : null) : n)
              var n
              this.value !== e &&
                ((this.listOfValue = t),
                this.listOfValue$.next(t),
                (this.value = e),
                this.onChange(this.value))
            }
            onTokenSeparate(t) {
              const e = this.listOfTagAndTemplateItem
                .filter((e) => -1 !== t.findIndex((t) => t === e.nzLabel))
                .map((t) => t.nzValue)
                .filter(
                  (t) =>
                    -1 ===
                    this.listOfValue.findIndex((e) => this.compareWith(e, t))
                )
              if ('multiple' === this.nzMode)
                this.updateListOfValue([...this.listOfValue, ...e])
              else if ('tags' === this.nzMode) {
                const n = t.filter(
                  (t) =>
                    -1 ===
                    this.listOfTagAndTemplateItem.findIndex(
                      (e) => e.nzLabel === t
                    )
                )
                this.updateListOfValue([...this.listOfValue, ...e, ...n])
              }
              this.clearInput()
            }
            onOverlayKeyDown(t) {
              t.keyCode === B.f && this.setOpenState(!1)
            }
            onKeyDown(t) {
              if (this.nzDisabled) return
              const e = this.listOfContainerItem
                  .filter((t) => 'item' === t.type)
                  .filter((t) => !t.nzDisabled),
                n = e.findIndex((t) =>
                  this.compareWith(t.nzValue, this.activatedValue)
                )
              switch (t.keyCode) {
                case B.m:
                  t.preventDefault(),
                    this.nzOpen &&
                      (this.activatedValue =
                        e[n > 0 ? n - 1 : e.length - 1].nzValue)
                  break
                case B.c:
                  t.preventDefault(),
                    this.nzOpen
                      ? (this.activatedValue =
                          e[n < e.length - 1 ? n + 1 : 0].nzValue)
                      : this.setOpenState(!0)
                  break
                case B.e:
                  t.preventDefault(),
                    this.nzOpen
                      ? Object(p.g)(this.activatedValue) &&
                        this.onItemClick(this.activatedValue)
                      : this.setOpenState(!0)
                  break
                case B.k:
                  this.nzOpen || (this.setOpenState(!0), t.preventDefault())
                  break
                case B.l:
                  this.setOpenState(!1)
                  break
                case B.f:
                  break
                default:
                  this.nzOpen || this.setOpenState(!0)
              }
            }
            setOpenState(t) {
              this.nzOpen !== t &&
                ((this.nzOpen = t),
                this.nzOpenChange.emit(t),
                this.onOpenChange(),
                this.cdr.markForCheck())
            }
            onOpenChange() {
              this.updateCdkConnectedOverlayStatus(), this.clearInput()
            }
            onInputValueChange(t) {
              ;(this.searchValue = t),
                this.updateListOfContainerItem(),
                this.nzOnSearch.emit(t),
                this.updateCdkConnectedOverlayPositions()
            }
            onClearSelection() {
              this.updateListOfValue([])
            }
            onClickOutside(t) {
              this.elementRef.nativeElement.contains(t.target) ||
                this.setOpenState(!1)
            }
            focus() {
              this.nzSelectTopControlComponent.focus()
            }
            blur() {
              this.nzSelectTopControlComponent.blur()
            }
            onPositionChange(t) {
              this.dropDownPosition = t.connectionPair.originY
            }
            updateCdkConnectedOverlayStatus() {
              this.platform.isBrowser &&
                this.originElement.nativeElement &&
                Object(A.a)(() => {
                  ;(this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width),
                    this.cdr.markForCheck()
                })
            }
            updateCdkConnectedOverlayPositions() {
              Object(A.a)(() => {
                var t, e
                null ===
                  (e =
                    null === (t = this.cdkConnectedOverlay) || void 0 === t
                      ? void 0
                      : t.overlayRef) ||
                  void 0 === e ||
                  e.updatePosition()
              })
            }
            writeValue(t) {
              if (this.value !== t) {
                this.value = t
                const e = ((t, e) =>
                  null == t ? [] : 'default' === this.nzMode ? [t] : t)(t)
                ;(this.listOfValue = e),
                  this.listOfValue$.next(e),
                  this.cdr.markForCheck()
              }
            }
            registerOnChange(t) {
              this.onChange = t
            }
            registerOnTouched(t) {
              this.onTouched = t
            }
            setDisabledState(t) {
              ;(this.nzDisabled = t),
                t && this.setOpenState(!1),
                this.cdr.markForCheck()
            }
            ngOnChanges(t) {
              const { nzOpen: e, nzDisabled: n, nzOptions: i } = t
              if (
                (e && this.onOpenChange(),
                n && this.nzDisabled && this.setOpenState(!1),
                i)
              ) {
                this.isReactiveDriven = !0
                const t = (this.nzOptions || []).map((t) => ({
                  template: t.label instanceof c.M ? t.label : null,
                  nzLabel:
                    'string' == typeof t.label || 'number' == typeof t.label
                      ? t.label
                      : null,
                  nzValue: t.value,
                  nzDisabled: t.disabled || !1,
                  nzHide: t.hide || !1,
                  nzCustomContent: t.label instanceof c.M,
                  groupLabel: t.groupLabel || null,
                  type: 'item',
                  key: t.value,
                }))
                this.listOfTemplateItem$.next(t)
              }
            }
            ngOnInit() {
              var t
              this.focusMonitor
                .monitor(this.elementRef, !0)
                .pipe(Object(b.a)(this.destroy$))
                .subscribe((t) => {
                  t
                    ? ((this.focused = !0),
                      this.cdr.markForCheck(),
                      this.nzFocus.emit())
                    : ((this.focused = !1),
                      this.cdr.markForCheck(),
                      this.nzBlur.emit(),
                      Promise.resolve().then(() => {
                        this.onTouched()
                      }))
                }),
                Object(Xt.a)([this.listOfValue$, this.listOfTemplateItem$])
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(([t, e]) => {
                    const n = t
                      .filter(() => 'tags' === this.nzMode)
                      .filter(
                        (t) =>
                          -1 ===
                          e.findIndex((e) => this.compareWith(e.nzValue, t))
                      )
                      .map(
                        (t) =>
                          this.listOfTopItem.find((e) =>
                            this.compareWith(e.nzValue, t)
                          ) || this.generateTagItem(t)
                      )
                    ;(this.listOfTagAndTemplateItem = [...e, ...n]),
                      (this.listOfTopItem = this.listOfValue
                        .map((t) =>
                          [
                            ...this.listOfTagAndTemplateItem,
                            ...this.listOfTopItem,
                          ].find((e) => this.compareWith(t, e.nzValue))
                        )
                        .filter((t) => !!t)),
                      this.updateListOfContainerItem()
                  }),
                null === (t = this.directionality.change) ||
                  void 0 === t ||
                  t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                    ;(this.dir = t), this.cdr.detectChanges()
                  }),
                this.nzConfigService
                  .getConfigChangeEventForComponent('select')
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(() => {
                    this.cdr.markForCheck()
                  }),
                (this.dir = this.directionality.value)
            }
            ngAfterContentInit() {
              this.isReactiveDriven ||
                Object(V.a)(
                  this.listOfNzOptionGroupComponent.changes,
                  this.listOfNzOptionComponent.changes
                )
                  .pipe(
                    Object(f.a)(!0),
                    Object(Yt.a)(() =>
                      Object(V.a)(
                        this.listOfNzOptionComponent.changes,
                        this.listOfNzOptionGroupComponent.changes,
                        ...this.listOfNzOptionComponent.map((t) => t.changes),
                        ...this.listOfNzOptionGroupComponent.map(
                          (t) => t.changes
                        )
                      ).pipe(Object(f.a)(!0))
                    ),
                    Object(b.a)(this.destroy$)
                  )
                  .subscribe(() => {
                    const t = this.listOfNzOptionComponent
                      .toArray()
                      .map((t) => {
                        const {
                          template: e,
                          nzLabel: n,
                          nzValue: i,
                          nzDisabled: s,
                          nzHide: o,
                          nzCustomContent: r,
                          groupLabel: a,
                        } = t
                        return {
                          template: e,
                          nzLabel: n,
                          nzValue: i,
                          nzDisabled: s,
                          nzHide: o,
                          nzCustomContent: r,
                          groupLabel: a,
                          type: 'item',
                          key: i,
                        }
                      })
                    this.listOfTemplateItem$.next(t), this.cdr.markForCheck()
                  })
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(d.a),
                c.Pb(c.h),
                c.Pb(c.l),
                c.Pb(v.a),
                c.Pb(oe),
                c.Pb(r.c, 8),
                c.Pb(S.a, 9)
              )
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select']],
              contentQueries: function (t, e, n) {
                if ((1 & t && (c.Ib(n, wn, 1), c.Ib(n, Cn, 1)), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.listOfNzOptionComponent = t),
                    c.qc((t = c.dc())) && (e.listOfNzOptionGroupComponent = t)
                }
              },
              viewQuery: function (t, e) {
                if (
                  (1 & t &&
                    (c.Gc(a.b, 3, c.l),
                    c.Gc(a.a, 3),
                    c.Gc(In, 3),
                    c.Gc(Cn, 3, c.l),
                    c.Gc(In, 3, c.l)),
                  2 & t)
                ) {
                  let t
                  c.qc((t = c.dc())) && (e.originElement = t.first),
                    c.qc((t = c.dc())) && (e.cdkConnectedOverlay = t.first),
                    c.qc((t = c.dc())) &&
                      (e.nzSelectTopControlComponent = t.first),
                    c.qc((t = c.dc())) &&
                      (e.nzOptionGroupComponentElement = t.first),
                    c.qc((t = c.dc())) &&
                      (e.nzSelectTopControlComponentElement = t.first)
                }
              },
              hostVars: 24,
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('click', function () {
                    return e.onHostClick()
                  }),
                  2 & t &&
                    c.Hb('ant-select-lg', 'large' === e.nzSize)(
                      'ant-select-sm',
                      'small' === e.nzSize
                    )('ant-select-show-arrow', e.nzShowArrow)(
                      'ant-select-disabled',
                      e.nzDisabled
                    )(
                      'ant-select-show-search',
                      (e.nzShowSearch || 'default' !== e.nzMode) &&
                        !e.nzDisabled
                    )('ant-select-allow-clear', e.nzAllowClear)(
                      'ant-select-borderless',
                      e.nzBorderless
                    )('ant-select-open', e.nzOpen)(
                      'ant-select-focused',
                      e.nzOpen || e.focused
                    )('ant-select-single', 'default' === e.nzMode)(
                      'ant-select-multiple',
                      'default' !== e.nzMode
                    )('ant-select-rtl', 'rtl' === e.dir)
              },
              inputs: {
                nzId: 'nzId',
                nzSize: 'nzSize',
                nzOptionHeightPx: 'nzOptionHeightPx',
                nzOptionOverflowSize: 'nzOptionOverflowSize',
                nzDropdownClassName: 'nzDropdownClassName',
                nzDropdownMatchSelectWidth: 'nzDropdownMatchSelectWidth',
                nzDropdownStyle: 'nzDropdownStyle',
                nzNotFoundContent: 'nzNotFoundContent',
                nzPlaceHolder: 'nzPlaceHolder',
                nzMaxTagCount: 'nzMaxTagCount',
                nzDropdownRender: 'nzDropdownRender',
                nzCustomTemplate: 'nzCustomTemplate',
                nzSuffixIcon: 'nzSuffixIcon',
                nzClearIcon: 'nzClearIcon',
                nzRemoveIcon: 'nzRemoveIcon',
                nzMenuItemSelectedIcon: 'nzMenuItemSelectedIcon',
                nzTokenSeparators: 'nzTokenSeparators',
                nzMaxTagPlaceholder: 'nzMaxTagPlaceholder',
                nzMaxMultipleCount: 'nzMaxMultipleCount',
                nzMode: 'nzMode',
                nzFilterOption: 'nzFilterOption',
                compareWith: 'compareWith',
                nzAllowClear: 'nzAllowClear',
                nzBorderless: 'nzBorderless',
                nzShowSearch: 'nzShowSearch',
                nzLoading: 'nzLoading',
                nzAutoFocus: 'nzAutoFocus',
                nzAutoClearSearchValue: 'nzAutoClearSearchValue',
                nzServerSearch: 'nzServerSearch',
                nzDisabled: 'nzDisabled',
                nzOpen: 'nzOpen',
                nzBackdrop: 'nzBackdrop',
                nzOptions: 'nzOptions',
                nzShowArrow: 'nzShowArrow',
              },
              outputs: {
                nzOnSearch: 'nzOnSearch',
                nzScrollToBottom: 'nzScrollToBottom',
                nzOpenChange: 'nzOpenChange',
                nzBlur: 'nzBlur',
                nzFocus: 'nzFocus',
              },
              exportAs: ['nzSelect'],
              features: [
                c.Ab([
                  {
                    provide: l.g,
                    useExisting: Object(c.U)(() => t),
                    multi: !0,
                  },
                ]),
                c.zb,
              ],
              decls: 5,
              vars: 24,
              consts: [
                [
                  'cdkOverlayOrigin',
                  '',
                  3,
                  'nzId',
                  'open',
                  'disabled',
                  'mode',
                  'nzNoAnimation',
                  'maxTagPlaceholder',
                  'removeIcon',
                  'placeHolder',
                  'maxTagCount',
                  'customTemplate',
                  'tokenSeparators',
                  'showSearch',
                  'autofocus',
                  'listOfTopItem',
                  'inputValueChange',
                  'tokenize',
                  'deleteItem',
                  'keydown',
                ],
                ['origin', 'cdkOverlayOrigin'],
                [3, 'loading', 'search', 'suffixIcon', 4, 'ngIf'],
                [3, 'clearIcon', 'clear', 4, 'ngIf'],
                [
                  'cdkConnectedOverlay',
                  '',
                  'nzConnectedOverlay',
                  '',
                  3,
                  'cdkConnectedOverlayHasBackdrop',
                  'cdkConnectedOverlayMinWidth',
                  'cdkConnectedOverlayWidth',
                  'cdkConnectedOverlayOrigin',
                  'cdkConnectedOverlayTransformOriginOn',
                  'cdkConnectedOverlayPanelClass',
                  'cdkConnectedOverlayOpen',
                  'overlayKeydown',
                  'overlayOutsideClick',
                  'detach',
                  'positionChange',
                ],
                [3, 'loading', 'search', 'suffixIcon'],
                [3, 'clearIcon', 'clear'],
                [
                  3,
                  'ngStyle',
                  'itemSize',
                  'maxItemLength',
                  'matchWidth',
                  'nzNoAnimation',
                  'listOfContainerItem',
                  'menuItemSelectedIcon',
                  'notFoundContent',
                  'activatedValue',
                  'listOfSelectedValue',
                  'dropdownRender',
                  'compareWith',
                  'mode',
                  'keydown',
                  'itemClick',
                  'scrollToBottom',
                ],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (c.Vb(0, 'nz-select-top-control', 0, 1),
                    c.cc('inputValueChange', function (t) {
                      return e.onInputValueChange(t)
                    })('tokenize', function (t) {
                      return e.onTokenSeparate(t)
                    })('deleteItem', function (t) {
                      return e.onItemDelete(t)
                    })('keydown', function (t) {
                      return e.onKeyDown(t)
                    }),
                    c.Ub(),
                    c.Ac(2, Xe, 1, 3, 'nz-select-arrow', 2),
                    c.Ac(3, Ke, 1, 1, 'nz-select-clear', 3),
                    c.Ac(4, Ye, 1, 19, 'ng-template', 4),
                    c.cc('overlayKeydown', function (t) {
                      return e.onOverlayKeyDown(t)
                    })('overlayOutsideClick', function (t) {
                      return e.onClickOutside(t)
                    })('detach', function () {
                      return e.setOpenState(!1)
                    })('positionChange', function (t) {
                      return e.onPositionChange(t)
                    })),
                  2 & t)
                ) {
                  const t = c.rc(1)
                  c.lc('nzId', e.nzId)('open', e.nzOpen)(
                    'disabled',
                    e.nzDisabled
                  )('mode', e.nzMode)(
                    '@.disabled',
                    null == e.noAnimation ? null : e.noAnimation.nzNoAnimation
                  )(
                    'nzNoAnimation',
                    null == e.noAnimation ? null : e.noAnimation.nzNoAnimation
                  )('maxTagPlaceholder', e.nzMaxTagPlaceholder)(
                    'removeIcon',
                    e.nzRemoveIcon
                  )('placeHolder', e.nzPlaceHolder)(
                    'maxTagCount',
                    e.nzMaxTagCount
                  )('customTemplate', e.nzCustomTemplate)(
                    'tokenSeparators',
                    e.nzTokenSeparators
                  )('showSearch', e.nzShowSearch)('autofocus', e.nzAutoFocus)(
                    'listOfTopItem',
                    e.listOfTopItem
                  ),
                    c.Bb(2),
                    c.lc('ngIf', e.nzShowArrow),
                    c.Bb(1),
                    c.lc(
                      'ngIf',
                      e.nzAllowClear && !e.nzDisabled && e.listOfValue.length
                    ),
                    c.Bb(1),
                    c.lc('cdkConnectedOverlayHasBackdrop', e.nzBackdrop)(
                      'cdkConnectedOverlayMinWidth',
                      e.nzDropdownMatchSelectWidth ? null : e.triggerWidth
                    )(
                      'cdkConnectedOverlayWidth',
                      e.nzDropdownMatchSelectWidth ? e.triggerWidth : null
                    )('cdkConnectedOverlayOrigin', t)(
                      'cdkConnectedOverlayTransformOriginOn',
                      '.ant-select-dropdown'
                    )('cdkConnectedOverlayPanelClass', e.nzDropdownClassName)(
                      'cdkConnectedOverlayOpen',
                      e.nzOpen
                    )
                }
              },
              directives: function () {
                return [y, In, a.b, S.a, i.n, a.a, x.b, Pn, An, On, i.o]
              },
              encapsulation: 2,
              data: { animation: [T.c] },
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzSuffixIcon',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzAllowClear',
              void 0
            ),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.a)(),
                Object(h.b)('design:type', Object),
              ],
              t.prototype,
              'nzBorderless',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzShowSearch',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzLoading',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzAutoFocus',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzAutoClearSearchValue',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzServerSearch',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzDisabled',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzOpen',
              void 0
            ),
            Object(h.a)(
              [
                Object(d.b)(),
                Object(p.a)(),
                Object(h.b)('design:type', Object),
              ],
              t.prototype,
              'nzBackdrop',
              void 0
            ),
            t
          )
        })(),
        Dn = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.nzLabel = null),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-item',
                  'ant-select-item-group'
                )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-option-item-group']],
              inputs: { nzLabel: 'nzLabel' },
              decls: 1,
              vars: 1,
              consts: [[4, 'nzStringTemplateOutlet']],
              template: function (t, e) {
                1 & t && c.Ac(0, tn, 2, 1, 'ng-container', 0),
                  2 & t && c.lc('nzStringTemplateOutlet', e.nzLabel)
              },
              directives: [I.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        kn = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.selected = !1),
                (this.activated = !1),
                (this.grouped = !1),
                (this.customContent = !1),
                (this.template = null),
                (this.disabled = !1),
                (this.showState = !1),
                (this.label = null),
                (this.value = null),
                (this.activatedValue = null),
                (this.listOfSelectedValue = []),
                (this.icon = null),
                (this.itemClick = new c.n()),
                (this.itemHover = new c.n()),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-item',
                  'ant-select-item-option'
                )
            }
            onHostMouseEnter() {
              this.disabled || this.itemHover.next(this.value)
            }
            onHostClick() {
              this.disabled || this.itemClick.next(this.value)
            }
            ngOnChanges(t) {
              const { value: e, activatedValue: n, listOfSelectedValue: i } = t
              ;(e || i) &&
                (this.selected = this.listOfSelectedValue.some((t) =>
                  this.compareWith(t, this.value)
                )),
                (e || n) &&
                  (this.activated = this.compareWith(
                    this.activatedValue,
                    this.value
                  ))
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-option-item']],
              hostVars: 9,
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('mouseenter', function () {
                    return e.onHostMouseEnter()
                  })('click', function () {
                    return e.onHostClick()
                  }),
                  2 & t &&
                    (c.Cb('title', e.label),
                    c.Hb('ant-select-item-option-grouped', e.grouped)(
                      'ant-select-item-option-selected',
                      e.selected && !e.disabled
                    )('ant-select-item-option-disabled', e.disabled)(
                      'ant-select-item-option-active',
                      e.activated && !e.disabled
                    ))
              },
              inputs: {
                grouped: 'grouped',
                customContent: 'customContent',
                template: 'template',
                disabled: 'disabled',
                showState: 'showState',
                label: 'label',
                value: 'value',
                activatedValue: 'activatedValue',
                listOfSelectedValue: 'listOfSelectedValue',
                icon: 'icon',
                compareWith: 'compareWith',
              },
              outputs: { itemClick: 'itemClick', itemHover: 'itemHover' },
              features: [c.zb],
              decls: 4,
              vars: 3,
              consts: [
                [1, 'ant-select-item-option-content'],
                [4, 'ngIf'],
                [
                  'class',
                  'ant-select-item-option-state',
                  'style',
                  'user-select: none',
                  'unselectable',
                  'on',
                  4,
                  'ngIf',
                ],
                [3, 'ngTemplateOutlet'],
                [
                  'unselectable',
                  'on',
                  1,
                  'ant-select-item-option-state',
                  2,
                  'user-select',
                  'none',
                ],
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'check',
                  'class',
                  'ant-select-selected-icon',
                  4,
                  'ngIf',
                  'ngIfElse',
                ],
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'check',
                  1,
                  'ant-select-selected-icon',
                ],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'div', 0),
                  c.Ac(1, en, 2, 1, 'ng-container', 1),
                  c.Ac(2, sn, 2, 1, 'ng-container', 1),
                  c.Ub(),
                  c.Ac(3, rn, 2, 2, 'div', 2)),
                  2 & t &&
                    (c.Bb(1),
                    c.lc('ngIf', !e.customContent),
                    c.Bb(1),
                    c.lc('ngIf', e.customContent),
                    c.Bb(1),
                    c.lc('ngIf', e.showState && e.selected))
              },
              directives: [i.n, i.s, g.b, y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Pn = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.loading = !1),
                (this.search = !1),
                (this.suffixIcon = null),
                this.elementRef.nativeElement.classList.add('ant-select-arrow')
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-arrow']],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && c.Hb('ant-select-arrow-loading', e.loading)
              },
              inputs: {
                loading: 'loading',
                search: 'search',
                suffixIcon: 'suffixIcon',
              },
              decls: 3,
              vars: 2,
              consts: [
                ['nz-icon', '', 'nzType', 'loading', 4, 'ngIf', 'ngIfElse'],
                ['defaultArrow', ''],
                ['nz-icon', '', 'nzType', 'loading'],
                [4, 'ngIf', 'ngIfElse'],
                ['suffixTemplate', ''],
                ['nz-icon', '', 'nzType', 'down', 4, 'ngIf'],
                ['nz-icon', '', 'nzType', 'search', 4, 'ngIf'],
                ['nz-icon', '', 'nzType', 'down'],
                ['nz-icon', '', 'nzType', 'search'],
                [4, 'nzStringTemplateOutlet'],
                ['nz-icon', '', 3, 'nzType'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (c.Ac(0, an, 1, 0, 'i', 0),
                    c.Ac(1, pn, 3, 2, 'ng-template', null, 1, c.Bc)),
                  2 & t)
                ) {
                  const t = c.rc(2)
                  c.lc('ngIf', e.loading)('ngIfElse', t)
                }
              },
              directives: [i.n, g.b, y, I.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        An = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.clearIcon = null),
                (this.clear = new c.n()),
                this.elementRef.nativeElement.classList.add('ant-select-clear')
            }
            onClick(t) {
              t.preventDefault(), t.stopPropagation(), this.clear.emit(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-clear']],
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('click', function (t) {
                    return e.onClick(t)
                  })
              },
              inputs: { clearIcon: 'clearIcon' },
              outputs: { clear: 'clear' },
              decls: 1,
              vars: 2,
              consts: [
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'close-circle',
                  'nzTheme',
                  'fill',
                  'class',
                  'ant-select-close-icon',
                  4,
                  'ngIf',
                  'ngIfElse',
                ],
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'close-circle',
                  'nzTheme',
                  'fill',
                  1,
                  'ant-select-close-icon',
                ],
              ],
              template: function (t, e) {
                1 & t && c.Ac(0, gn, 1, 0, 'i', 0),
                  2 & t && c.lc('ngIf', !e.clearIcon)('ngIfElse', e.clearIcon)
              },
              directives: [i.n, g.b, y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        En = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.disabled = !1),
                (this.label = null),
                (this.deletable = !1),
                (this.removeIcon = null),
                (this.contentTemplateOutletContext = null),
                (this.contentTemplateOutlet = null),
                (this.delete = new c.n()),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-selection-item'
                )
            }
            onDelete(t) {
              t.preventDefault(),
                t.stopPropagation(),
                this.disabled || this.delete.next(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-item']],
              hostVars: 3,
              hostBindings: function (t, e) {
                2 & t &&
                  (c.Cb('title', e.label),
                  c.Hb('ant-select-selection-item-disabled', e.disabled))
              },
              inputs: {
                disabled: 'disabled',
                label: 'label',
                deletable: 'deletable',
                removeIcon: 'removeIcon',
                contentTemplateOutletContext: 'contentTemplateOutletContext',
                contentTemplateOutlet: 'contentTemplateOutlet',
              },
              outputs: { delete: 'delete' },
              decls: 2,
              vars: 5,
              consts: [
                [4, 'nzStringTemplateOutlet', 'nzStringTemplateOutletContext'],
                [
                  'class',
                  'ant-select-selection-item-remove',
                  3,
                  'click',
                  4,
                  'ngIf',
                ],
                [
                  'class',
                  'ant-select-selection-item-content',
                  4,
                  'ngIf',
                  'ngIfElse',
                ],
                ['labelTemplate', ''],
                [1, 'ant-select-selection-item-content'],
                [1, 'ant-select-selection-item-remove', 3, 'click'],
                ['nz-icon', '', 'nzType', 'close', 4, 'ngIf', 'ngIfElse'],
                ['nz-icon', '', 'nzType', 'close'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Ac(0, fn, 4, 2, 'ng-container', 0),
                  c.Ac(1, vn, 2, 2, 'span', 1)),
                  2 & t &&
                    (c.lc('nzStringTemplateOutlet', e.contentTemplateOutlet)(
                      'nzStringTemplateOutletContext',
                      c.oc(3, yn, e.contentTemplateOutletContext)
                    ),
                    c.Bb(1),
                    c.lc('ngIf', e.deletable && !e.disabled))
              },
              directives: [I.b, i.n, g.b, y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        jn = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.placeholder = null),
                this.elementRef.nativeElement.classList.add(
                  'ant-select-selection-placeholder'
                )
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-select-placeholder']],
              inputs: { placeholder: 'placeholder' },
              decls: 1,
              vars: 1,
              consts: [[4, 'nzStringTemplateOutlet']],
              template: function (t, e) {
                1 & t && c.Ac(0, _n, 2, 1, 'ng-container', 0),
                  2 & t && c.lc('nzStringTemplateOutlet', e.placeholder)
              },
              directives: [I.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Vn = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [
                [
                  r.a,
                  i.c,
                  D.c,
                  l.f,
                  v.b,
                  a.f,
                  g.c,
                  I.a,
                  Ve,
                  x.c,
                  S.b,
                  _,
                  Kt.f,
                  de,
                ],
              ],
            })),
            t
          )
        })(),
        Bn = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, O, g.c, I.a]],
            })),
            t
          )
        })()
      const Ln = ['*'],
        Rn = ['inputElement'],
        Mn = ['nz-checkbox', '']
      let Fn = (() => {
          class t {
            constructor(t, e) {
              ;(this.nzOnChange = new c.n()),
                (this.checkboxList = []),
                t.addClass(e.nativeElement, 'ant-checkbox-group')
            }
            addCheckbox(t) {
              this.checkboxList.push(t)
            }
            removeCheckbox(t) {
              this.checkboxList.splice(this.checkboxList.indexOf(t), 1)
            }
            onChange() {
              const t = this.checkboxList
                .filter((t) => t.nzChecked)
                .map((t) => t.nzValue)
              this.nzOnChange.emit(t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.F), c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-checkbox-wrapper']],
              outputs: { nzOnChange: 'nzOnChange' },
              exportAs: ['nzCheckboxWrapper'],
              ngContentSelectors: Ln,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Nn = (() => {
          class t {
            constructor(t, e, n, i, s) {
              ;(this.elementRef = t),
                (this.nzCheckboxWrapperComponent = e),
                (this.cdr = n),
                (this.focusMonitor = i),
                (this.directionality = s),
                (this.dir = 'ltr'),
                (this.destroy$ = new m.a()),
                (this.onChange = () => {}),
                (this.onTouched = () => {}),
                (this.nzCheckedChange = new c.n()),
                (this.nzValue = null),
                (this.nzAutoFocus = !1),
                (this.nzDisabled = !1),
                (this.nzIndeterminate = !1),
                (this.nzChecked = !1),
                this.elementRef.nativeElement.classList.add(
                  'ant-checkbox-wrapper'
                )
            }
            hostClick(t) {
              t.preventDefault(),
                this.focus(),
                this.innerCheckedChange(!this.nzChecked)
            }
            innerCheckedChange(t) {
              this.nzDisabled ||
                ((this.nzChecked = t),
                this.onChange(this.nzChecked),
                this.nzCheckedChange.emit(this.nzChecked),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.onChange())
            }
            writeValue(t) {
              ;(this.nzChecked = t), this.cdr.markForCheck()
            }
            registerOnChange(t) {
              this.onChange = t
            }
            registerOnTouched(t) {
              this.onTouched = t
            }
            setDisabledState(t) {
              ;(this.nzDisabled = t), this.cdr.markForCheck()
            }
            focus() {
              this.focusMonitor.focusVia(this.inputElement, 'keyboard')
            }
            blur() {
              this.inputElement.nativeElement.blur()
            }
            ngOnInit() {
              var t
              this.focusMonitor.monitor(this.elementRef, !0).subscribe((t) => {
                t || Promise.resolve().then(() => this.onTouched())
              }),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.addCheckbox(this),
                null === (t = this.directionality.change) ||
                  void 0 === t ||
                  t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                    ;(this.dir = t), this.cdr.detectChanges()
                  }),
                (this.dir = this.directionality.value)
            }
            ngAfterViewInit() {
              this.nzAutoFocus && this.focus()
            }
            ngOnDestroy() {
              this.focusMonitor.stopMonitoring(this.elementRef),
                this.nzCheckboxWrapperComponent &&
                  this.nzCheckboxWrapperComponent.removeCheckbox(this),
                this.destroy$.next(),
                this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(c.l),
                c.Pb(Fn, 8),
                c.Pb(c.h),
                c.Pb(oe),
                c.Pb(r.c, 8)
              )
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['', 'nz-checkbox', '']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(Rn, 3), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.inputElement = t.first)
                }
              },
              hostVars: 4,
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('click', function (t) {
                    return e.hostClick(t)
                  }),
                  2 & t &&
                    c.Hb('ant-checkbox-wrapper-checked', e.nzChecked)(
                      'ant-checkbox-rtl',
                      'rtl' === e.dir
                    )
              },
              inputs: {
                nzValue: 'nzValue',
                nzAutoFocus: 'nzAutoFocus',
                nzDisabled: 'nzDisabled',
                nzIndeterminate: 'nzIndeterminate',
                nzChecked: 'nzChecked',
              },
              outputs: { nzCheckedChange: 'nzCheckedChange' },
              exportAs: ['nzCheckbox'],
              features: [
                c.Ab([
                  {
                    provide: l.g,
                    useExisting: Object(c.U)(() => t),
                    multi: !0,
                  },
                ]),
              ],
              attrs: Mn,
              ngContentSelectors: Ln,
              decls: 6,
              vars: 10,
              consts: [
                [1, 'ant-checkbox'],
                [
                  'type',
                  'checkbox',
                  1,
                  'ant-checkbox-input',
                  3,
                  'checked',
                  'ngModel',
                  'disabled',
                  'ngModelChange',
                  'click',
                ],
                ['inputElement', ''],
                [1, 'ant-checkbox-inner'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.kc(),
                  c.Vb(0, 'span', 0),
                  c.Vb(1, 'input', 1, 2),
                  c.cc('ngModelChange', function (t) {
                    return e.innerCheckedChange(t)
                  })('click', function (t) {
                    return t.stopPropagation()
                  }),
                  c.Ub(),
                  c.Qb(3, 'span', 3),
                  c.Ub(),
                  c.Vb(4, 'span'),
                  c.jc(5),
                  c.Ub()),
                  2 & t &&
                    (c.Hb(
                      'ant-checkbox-checked',
                      e.nzChecked && !e.nzIndeterminate
                    )('ant-checkbox-disabled', e.nzDisabled)(
                      'ant-checkbox-indeterminate',
                      e.nzIndeterminate
                    ),
                    c.Bb(1),
                    c.lc('checked', e.nzChecked)('ngModel', e.nzChecked)(
                      'disabled',
                      e.nzDisabled
                    ),
                    c.Cb('autofocus', e.nzAutoFocus ? 'autofocus' : null))
              },
              directives: [l.b, l.h, l.i],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzAutoFocus',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzDisabled',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzIndeterminate',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzChecked',
              void 0
            ),
            t
          )
        })(),
        $n = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, l.f, de]],
            })),
            t
          )
        })()
      var Hn = n('0MNC'),
        Un = n('JwMs')
      let Gn = (() => {
          class t {
            constructor(t, e, n, i, s, o, r) {
              ;(this.elementRef = t),
                (this.renderer = e),
                (this.mediaMatcher = n),
                (this.ngZone = i),
                (this.platform = s),
                (this.breakpointService = o),
                (this.directionality = r),
                (this.nzAlign = null),
                (this.nzJustify = null),
                (this.nzGutter = null),
                (this.actualGutter$ = new j.a(1)),
                (this.dir = 'ltr'),
                (this.destroy$ = new m.a()),
                this.elementRef.nativeElement.classList.add('ant-row')
            }
            getGutter() {
              const t = [null, null],
                e = this.nzGutter || 0
              return (
                (Array.isArray(e) ? e : [e, null]).forEach((e, n) => {
                  'object' == typeof e && null !== e
                    ? ((t[n] = null),
                      Object.keys(Un.d).map((i) => {
                        const s = i
                        this.mediaMatcher.matchMedia(Un.d[s]).matches &&
                          e[s] &&
                          (t[n] = e[s])
                      }))
                    : (t[n] = Number(e) || null)
                }),
                t
              )
            }
            setGutterStyle() {
              const [t, e] = this.getGutter()
              this.actualGutter$.next([t, e])
              const n = (t, e) => {
                null !== e &&
                  this.renderer.setStyle(
                    this.elementRef.nativeElement,
                    t,
                    `-${e / 2}px`
                  )
              }
              n('margin-left', t),
                n('margin-right', t),
                n('margin-top', e),
                n('margin-bottom', e)
            }
            ngOnInit() {
              var t
              ;(this.dir = this.directionality.value),
                null === (t = this.directionality.change) ||
                  void 0 === t ||
                  t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                    this.dir = t
                  }),
                this.setGutterStyle()
            }
            ngOnChanges(t) {
              t.nzGutter && this.setGutterStyle()
            }
            ngAfterViewInit() {
              this.platform.isBrowser &&
                this.breakpointService
                  .subscribe(Un.d)
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(() => {
                    this.setGutterStyle()
                  })
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(c.l),
                c.Pb(c.F),
                c.Pb(Hn.b),
                c.Pb(c.A),
                c.Pb(v.a),
                c.Pb(Un.a),
                c.Pb(r.c, 8)
              )
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['', 'nz-row', ''], ['nz-row'], ['nz-form-item']],
              hostVars: 18,
              hostBindings: function (t, e) {
                2 & t &&
                  c.Hb('ant-row-top', 'top' === e.nzAlign)(
                    'ant-row-middle',
                    'middle' === e.nzAlign
                  )('ant-row-bottom', 'bottom' === e.nzAlign)(
                    'ant-row-start',
                    'start' === e.nzJustify
                  )('ant-row-end', 'end' === e.nzJustify)(
                    'ant-row-center',
                    'center' === e.nzJustify
                  )('ant-row-space-around', 'space-around' === e.nzJustify)(
                    'ant-row-space-between',
                    'space-between' === e.nzJustify
                  )('ant-row-rtl', 'rtl' === e.dir)
              },
              inputs: {
                nzAlign: 'nzAlign',
                nzJustify: 'nzJustify',
                nzGutter: 'nzGutter',
              },
              exportAs: ['nzRow'],
              features: [c.zb],
            })),
            t
          )
        })(),
        Wn = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.elementRef = t),
                (this.nzRowDirective = e),
                (this.renderer = n),
                (this.directionality = i),
                (this.classMap = {}),
                (this.destroy$ = new m.a()),
                (this.hostFlexStyle = null),
                (this.dir = 'ltr'),
                (this.nzFlex = null),
                (this.nzSpan = null),
                (this.nzOrder = null),
                (this.nzOffset = null),
                (this.nzPush = null),
                (this.nzPull = null),
                (this.nzXs = null),
                (this.nzSm = null),
                (this.nzMd = null),
                (this.nzLg = null),
                (this.nzXl = null),
                (this.nzXXl = null)
            }
            setHostClassMap() {
              const t = Object.assign(
                {
                  'ant-col': !0,
                  [`ant-col-${this.nzSpan}`]: Object(p.g)(this.nzSpan),
                  [`ant-col-order-${this.nzOrder}`]: Object(p.g)(this.nzOrder),
                  [`ant-col-offset-${this.nzOffset}`]: Object(p.g)(
                    this.nzOffset
                  ),
                  [`ant-col-pull-${this.nzPull}`]: Object(p.g)(this.nzPull),
                  [`ant-col-push-${this.nzPush}`]: Object(p.g)(this.nzPush),
                  'ant-col-rtl': 'rtl' === this.dir,
                },
                this.generateClass()
              )
              for (const e in this.classMap)
                this.classMap.hasOwnProperty(e) &&
                  this.renderer.removeClass(this.elementRef.nativeElement, e)
              this.classMap = Object.assign({}, t)
              for (const e in this.classMap)
                this.classMap.hasOwnProperty(e) &&
                  this.classMap[e] &&
                  this.renderer.addClass(this.elementRef.nativeElement, e)
            }
            setHostFlexStyle() {
              this.hostFlexStyle = this.parseFlex(this.nzFlex)
            }
            parseFlex(t) {
              return 'number' == typeof t
                ? `${t} ${t} auto`
                : 'string' == typeof t && /^\d+(\.\d+)?(px|em|rem|%)$/.test(t)
                ? `0 0 ${t}`
                : t
            }
            generateClass() {
              const t = {}
              return (
                ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'].forEach(
                  (e) => {
                    const n = e.replace('nz', '').toLowerCase()
                    if (Object(p.g)(this[e]))
                      if (
                        'number' == typeof this[e] ||
                        'string' == typeof this[e]
                      )
                        t[`ant-col-${n}-${this[e]}`] = !0
                      else {
                        const i = this[e]
                        ;['span', 'pull', 'push', 'offset', 'order'].forEach(
                          (e) => {
                            t[
                              `ant-col-${n}${'span' === e ? '-' : `-${e}-`}${
                                i[e]
                              }`
                            ] = i && Object(p.g)(i[e])
                          }
                        )
                      }
                  }
                ),
                t
              )
            }
            ngOnInit() {
              ;(this.dir = this.directionality.value),
                this.directionality.change
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe((t) => {
                    ;(this.dir = t), this.setHostClassMap()
                  }),
                this.setHostClassMap(),
                this.setHostFlexStyle()
            }
            ngOnChanges(t) {
              this.setHostClassMap()
              const { nzFlex: e } = t
              e && this.setHostFlexStyle()
            }
            ngAfterViewInit() {
              this.nzRowDirective &&
                this.nzRowDirective.actualGutter$
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(([t, e]) => {
                    const n = (t, e) => {
                      null !== e &&
                        this.renderer.setStyle(
                          this.elementRef.nativeElement,
                          t,
                          e / 2 + 'px'
                        )
                    }
                    n('padding-left', t),
                      n('padding-right', t),
                      n('padding-top', e),
                      n('padding-bottom', e)
                  })
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(c.l),
                c.Pb(Gn, 9),
                c.Pb(c.F),
                c.Pb(r.c, 8)
              )
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['', 'nz-col', ''],
                ['nz-col'],
                ['nz-form-control'],
                ['nz-form-label'],
              ],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && c.xc('flex', e.hostFlexStyle)
              },
              inputs: {
                nzFlex: 'nzFlex',
                nzSpan: 'nzSpan',
                nzOrder: 'nzOrder',
                nzOffset: 'nzOffset',
                nzPush: 'nzPush',
                nzPull: 'nzPull',
                nzXs: 'nzXs',
                nzSm: 'nzSm',
                nzMd: 'nzMd',
                nzLg: 'nzLg',
                nzXl: 'nzXl',
                nzXXl: 'nzXXl',
              },
              exportAs: ['nzCol'],
              features: [c.zb],
            })),
            t
          )
        })(),
        Qn = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, Hn.a, v.b]],
            })),
            t
          )
        })()
      function Zn(t, e) {
        if ((1 & t && (c.Tb(0), c.Qb(1, 'i', 9), c.Sb()), 2 & t)) {
          const t = e.$implicit,
            n = c.fc(2)
          c.Bb(1), c.lc('nzType', t || n.getBackIcon())
        }
      }
      function Jn(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'div', 6),
            c.cc('click', function () {
              return c.sc(t), c.fc().onBack()
            }),
            c.Vb(1, 'div', 7),
            c.Ac(2, Zn, 2, 1, 'ng-container', 8),
            c.Ub(),
            c.Ub()
        }
        if (2 & t) {
          const t = c.fc()
          c.Bb(2), c.lc('nzStringTemplateOutlet', t.nzBackIcon)
        }
      }
      function qn(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzTitle)
        }
      }
      function Xn(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'span', 10), c.Ac(1, qn, 2, 1, 'ng-container', 8), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzTitle)
        }
      }
      function Kn(t, e) {
        1 & t && c.jc(0, 6, ['*ngIf', '!nzTitle'])
      }
      function Yn(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzSubtitle)
        }
      }
      function ti(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'span', 11), c.Ac(1, Yn, 2, 1, 'ng-container', 8), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzSubtitle)
        }
      }
      function ei(t, e) {
        1 & t && c.jc(0, 7, ['*ngIf', '!nzSubtitle'])
      }
      const ni = [
          [['nz-breadcrumb', 'nz-page-header-breadcrumb', '']],
          [['nz-avatar', 'nz-page-header-avatar', '']],
          [['nz-page-header-tags'], ['', 'nz-page-header-tags', '']],
          [['nz-page-header-extra'], ['', 'nz-page-header-extra', '']],
          [['nz-page-header-content'], ['', 'nz-page-header-content', '']],
          [['nz-page-header-footer'], ['', 'nz-page-header-footer', '']],
          [['nz-page-header-title'], ['', 'nz-page-header-title', '']],
          [['nz-page-header-subtitle'], ['', 'nz-page-header-subtitle', '']],
        ],
        ii = [
          'nz-breadcrumb[nz-page-header-breadcrumb]',
          'nz-avatar[nz-page-header-avatar]',
          'nz-page-header-tags, [nz-page-header-tags]',
          'nz-page-header-extra, [nz-page-header-extra]',
          'nz-page-header-content, [nz-page-header-content]',
          'nz-page-header-footer, [nz-page-header-footer]',
          'nz-page-header-title, [nz-page-header-title]',
          'nz-page-header-subtitle, [nz-page-header-subtitle]',
        ]
      let si = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['nz-page-header-title'],
                ['', 'nz-page-header-title', ''],
              ],
              hostAttrs: [1, 'ant-page-header-heading-title'],
              exportAs: ['nzPageHeaderTitle'],
            })),
            t
          )
        })(),
        oi = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['nz-page-header-content'],
                ['', 'nz-page-header-content', ''],
              ],
              hostAttrs: [1, 'ant-page-header-content'],
              exportAs: ['nzPageHeaderContent'],
            })),
            t
          )
        })(),
        ri = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['nz-page-header-tags'],
                ['', 'nz-page-header-tags', ''],
              ],
              hostAttrs: [1, 'ant-page-header-heading-tags'],
              exportAs: ['nzPageHeaderTags'],
            })),
            t
          )
        })(),
        ai = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['nz-page-header-extra'],
                ['', 'nz-page-header-extra', ''],
              ],
              hostAttrs: [1, 'ant-page-header-heading-extra'],
              exportAs: ['nzPageHeaderExtra'],
            })),
            t
          )
        })(),
        ci = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [
                ['nz-page-header-footer'],
                ['', 'nz-page-header-footer', ''],
              ],
              hostAttrs: [1, 'ant-page-header-footer'],
              exportAs: ['nzPageHeaderFooter'],
            })),
            t
          )
        })(),
        li = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['nz-breadcrumb', 'nz-page-header-breadcrumb', '']],
              exportAs: ['nzPageHeaderBreadcrumb'],
            })),
            t
          )
        })(),
        hi = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['nz-avatar', 'nz-page-header-avatar', '']],
              exportAs: ['nzPageHeaderAvatar'],
            })),
            t
          )
        })(),
        di = (() => {
          class t {
            constructor(t, e, n, i, s, o) {
              ;(this.location = t),
                (this.nzConfigService = e),
                (this.elementRef = n),
                (this.nzResizeObserver = i),
                (this.cdr = s),
                (this.directionality = o),
                (this._nzModuleName = 'pageHeader'),
                (this.nzBackIcon = null),
                (this.nzGhost = !0),
                (this.nzBack = new c.n()),
                (this.compact = !1),
                (this.destroy$ = new m.a()),
                (this.dir = 'ltr')
            }
            ngOnInit() {
              var t
              null === (t = this.directionality.change) ||
                void 0 === t ||
                t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                  ;(this.dir = t), this.cdr.detectChanges()
                }),
                (this.dir = this.directionality.value)
            }
            ngAfterViewInit() {
              this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(
                  Object(P.a)(([t]) => t.contentRect.width),
                  Object(b.a)(this.destroy$)
                )
                .subscribe((t) => {
                  ;(this.compact = t < 768), this.cdr.markForCheck()
                })
            }
            onBack() {
              if (this.nzBack.observers.length) this.nzBack.emit()
              else {
                if (!this.location)
                  throw new Error(
                    `${u.a} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`
                  )
                this.location.back()
              }
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
            getBackIcon() {
              return 'rtl' === this.dir ? 'arrow-right' : 'arrow-left'
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(i.j, 8),
                c.Pb(d.a),
                c.Pb(c.l),
                c.Pb(rt),
                c.Pb(c.h),
                c.Pb(r.c, 8)
              )
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-page-header']],
              contentQueries: function (t, e, n) {
                if ((1 & t && (c.Ib(n, ci, 1), c.Ib(n, li, 1)), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.nzPageHeaderFooter = t.first),
                    c.qc((t = c.dc())) && (e.nzPageHeaderBreadcrumb = t.first)
                }
              },
              hostAttrs: [1, 'ant-page-header'],
              hostVars: 10,
              hostBindings: function (t, e) {
                2 & t &&
                  c.Hb('has-footer', e.nzPageHeaderFooter)(
                    'ant-page-header-ghost',
                    e.nzGhost
                  )('has-breadcrumb', e.nzPageHeaderBreadcrumb)(
                    'ant-page-header-compact',
                    e.compact
                  )('ant-page-header-rtl', 'rtl' === e.dir)
              },
              inputs: {
                nzBackIcon: 'nzBackIcon',
                nzGhost: 'nzGhost',
                nzTitle: 'nzTitle',
                nzSubtitle: 'nzSubtitle',
              },
              outputs: { nzBack: 'nzBack' },
              exportAs: ['nzPageHeader'],
              ngContentSelectors: ii,
              decls: 13,
              vars: 5,
              consts: [
                [1, 'ant-page-header-heading'],
                [1, 'ant-page-header-heading-left'],
                ['class', 'ant-page-header-back', 3, 'click', 4, 'ngIf'],
                ['class', 'ant-page-header-heading-title', 4, 'ngIf'],
                [4, 'ngIf'],
                ['class', 'ant-page-header-heading-sub-title', 4, 'ngIf'],
                [1, 'ant-page-header-back', 3, 'click'],
                [
                  'role',
                  'button',
                  'tabindex',
                  '0',
                  1,
                  'ant-page-header-back-button',
                ],
                [4, 'nzStringTemplateOutlet'],
                ['nz-icon', '', 'nzTheme', 'outline', 3, 'nzType'],
                [1, 'ant-page-header-heading-title'],
                [1, 'ant-page-header-heading-sub-title'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.kc(ni),
                  c.jc(0),
                  c.Vb(1, 'div', 0),
                  c.Vb(2, 'div', 1),
                  c.Ac(3, Jn, 3, 1, 'div', 2),
                  c.jc(4, 1),
                  c.Ac(5, Xn, 2, 1, 'span', 3),
                  c.Ac(6, Kn, 1, 0, 'ng-content', 4),
                  c.Ac(7, ti, 2, 1, 'span', 5),
                  c.Ac(8, ei, 1, 0, 'ng-content', 4),
                  c.jc(9, 2),
                  c.Ub(),
                  c.jc(10, 3),
                  c.Ub(),
                  c.jc(11, 4),
                  c.jc(12, 5)),
                  2 & t &&
                    (c.Bb(3),
                    c.lc('ngIf', null !== e.nzBackIcon),
                    c.Bb(2),
                    c.lc('ngIf', e.nzTitle),
                    c.Bb(1),
                    c.lc('ngIf', !e.nzTitle),
                    c.Bb(1),
                    c.lc('ngIf', e.nzSubtitle),
                    c.Bb(1),
                    c.lc('ngIf', !e.nzSubtitle))
              },
              directives: [i.n, I.b, g.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Boolean)],
              t.prototype,
              'nzGhost',
              void 0
            ),
            t
          )
        })(),
        ui = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, I.a, g.c]],
            })),
            t
          )
        })()
      n('xgIS'), n('EY2u'), n('CqXF'), n('3UWI')
      var pi = n('/uUt')
      let gi = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
            })),
            t
          )
        })(),
        mi = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [
                [r.a, i.c, a.f, l.f, w, o.d, g.c, S.b, v.b, x.c, gi, I.a],
                o.d,
              ],
            })),
            t
          )
        })()
      new a.c(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'top' }
      ),
        new a.c(
          { originX: 'start', originY: 'top' },
          { overlayX: 'start', overlayY: 'bottom' }
        ),
        new a.c(
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'bottom' }
        ),
        new a.c(
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'top' }
        )
      var bi = n('kVq8')
      const fi = [bi.F, bi.G, bi.o, bi.A]
      let zi = (() => {
        class t {}
        return (
          (t.ɵmod = c.Nb({ type: t })),
          (t.ɵinj = c.Mb({
            factory: function (e) {
              return new (e || t)()
            },
            providers: [{ provide: g.a, useValue: fi }],
            imports: [[g.c], g.c],
          })),
          t
        )
      })()
      var vi = n('tyNb'),
        yi = n('tk/3'),
        _i = n('AytR')
      let Ci = (() => {
        class t {
          constructor(t) {
            ;(this.http = t),
              (this.apiUrl = _i.a.apiUrl),
              (this.selectedYear$ = new qt.a('All')),
              (this.isSuccessfulLaunch$ = new qt.a(null)),
              (this.isSuccessfulLanding$ = new qt.a(null)),
              (this.filters$ = Object(Xt.a)([
                this.selectedYear$,
                this.isSuccessfulLaunch$,
                this.isSuccessfulLanding$,
              ]))
          }
          fetchData(t, e) {
            let n = new yi.f()
            return (
              null != t && (n = n.append('launch_year', t.toString())),
              null != e && (n = n.append('launch_success', e.toString())),
              this.data$
                ? this.data$.pipe(
                    Object(P.a)((n) =>
                      n
                        .filter((e) =>
                          'All' === t ||
                          t === new Date(e.date_utc).getFullYear()
                            ? e
                            : void 0
                        )
                        .filter((t) => (e ? (e === t.success ? t : void 0) : t))
                    )
                  )
                : ((this.data$ = this.http.get(`${this.apiUrl}/launches`, {
                    params: n,
                  })),
                  this.data$)
            )
          }
          getLaunchById(t) {
            return this.http.get(`${this.apiUrl}/launches/${t}`)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Zb(yi.c))
          }),
          (t.ɵprov = c.Lb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        )
      })()
      var Oi = n('NXyV'),
        wi = n('PqYM'),
        Si = n('zx2A')
      class Ii {
        constructor(t) {
          this.durationSelector = t
        }
        call(t, e) {
          return e.subscribe(new xi(t, this.durationSelector))
        }
      }
      class xi extends Si.b {
        constructor(t, e) {
          super(t), (this.durationSelector = e), (this.hasValue = !1)
        }
        _next(t) {
          try {
            const e = this.durationSelector.call(this, t)
            e && this._tryNext(t, e)
          } catch (e) {
            this.destination.error(e)
          }
        }
        _complete() {
          this.emitValue(), this.destination.complete()
        }
        _tryNext(t, e) {
          let n = this.durationSubscription
          ;(this.value = t),
            (this.hasValue = !0),
            n && (n.unsubscribe(), this.remove(n)),
            (n = Object(Si.c)(e, new Si.a(this))),
            n && !n.closed && this.add((this.durationSubscription = n))
        }
        notifyNext() {
          this.emitValue()
        }
        notifyComplete() {
          this.emitValue()
        }
        emitValue() {
          if (this.hasValue) {
            const t = this.value,
              e = this.durationSubscription
            e &&
              ((this.durationSubscription = void 0),
              e.unsubscribe(),
              this.remove(e)),
              (this.value = void 0),
              (this.hasValue = !1),
              super._next(t)
          }
        }
      }
      function Ti(t, e) {
        1 & t &&
          (c.Vb(0, 'span', 3),
          c.Qb(1, 'i', 4),
          c.Qb(2, 'i', 4),
          c.Qb(3, 'i', 4),
          c.Qb(4, 'i', 4),
          c.Ub())
      }
      function Di(t, e) {}
      function ki(t, e) {
        if ((1 & t && (c.Vb(0, 'div', 8), c.Cc(1), c.Ub()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzTip)
        }
      }
      function Pi(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div'),
            c.Vb(1, 'div', 5),
            c.Ac(2, Di, 0, 0, 'ng-template', 6),
            c.Ac(3, ki, 2, 1, 'div', 7),
            c.Ub(),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc(),
            e = c.rc(1)
          c.Bb(1),
            c.Hb('ant-spin-rtl', 'rtl' === t.dir)(
              'ant-spin-spinning',
              t.isLoading
            )('ant-spin-lg', 'large' === t.nzSize)(
              'ant-spin-sm',
              'small' === t.nzSize
            )('ant-spin-show-text', t.nzTip),
            c.Bb(1),
            c.lc('ngTemplateOutlet', t.nzIndicator || e),
            c.Bb(1),
            c.lc('ngIf', t.nzTip)
        }
      }
      function Ai(t, e) {
        if ((1 & t && (c.Vb(0, 'div', 9), c.jc(1), c.Ub()), 2 & t)) {
          const t = c.fc()
          c.Hb('ant-spin-blur', t.isLoading)
        }
      }
      const Ei = ['*'],
        ji = 'spin'
      let Vi = (() => {
          class t {
            constructor(t, e, n) {
              ;(this.nzConfigService = t),
                (this.cdr = e),
                (this.directionality = n),
                (this._nzModuleName = ji),
                (this.nzIndicator = null),
                (this.nzSize = 'default'),
                (this.nzTip = null),
                (this.nzDelay = 0),
                (this.nzSimple = !1),
                (this.nzSpinning = !0),
                (this.destroy$ = new m.a()),
                (this.spinning$ = new qt.a(this.nzSpinning)),
                (this.delay$ = new j.a(1)),
                (this.isLoading = !1),
                (this.dir = 'ltr')
            }
            ngOnInit() {
              var t
              this.delay$
                .pipe(
                  Object(f.a)(this.nzDelay),
                  Object(pi.a)(),
                  Object(Yt.a)((t) => {
                    return 0 === t
                      ? this.spinning$
                      : this.spinning$.pipe(
                          ((e = (e) => Object(wi.a)(e ? t : 0)),
                          (t) => t.lift(new Ii(e)))
                        )
                    var e
                  }),
                  Object(b.a)(this.destroy$)
                )
                .subscribe((t) => {
                  ;(this.isLoading = t), this.cdr.markForCheck()
                }),
                this.nzConfigService
                  .getConfigChangeEventForComponent(ji)
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(() => this.cdr.markForCheck()),
                null === (t = this.directionality.change) ||
                  void 0 === t ||
                  t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                    ;(this.dir = t), this.cdr.detectChanges()
                  }),
                (this.dir = this.directionality.value)
            }
            ngOnChanges(t) {
              const { nzSpinning: e, nzDelay: n } = t
              e && this.spinning$.next(this.nzSpinning),
                n && this.delay$.next(this.nzDelay)
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(d.a), c.Pb(c.h), c.Pb(r.c, 8))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-spin']],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && c.Hb('ant-spin-nested-loading', !e.nzSimple)
              },
              inputs: {
                nzIndicator: 'nzIndicator',
                nzSize: 'nzSize',
                nzTip: 'nzTip',
                nzDelay: 'nzDelay',
                nzSimple: 'nzSimple',
                nzSpinning: 'nzSpinning',
              },
              exportAs: ['nzSpin'],
              features: [c.zb],
              ngContentSelectors: Ei,
              decls: 4,
              vars: 2,
              consts: [
                ['defaultTemplate', ''],
                [4, 'ngIf'],
                ['class', 'ant-spin-container', 3, 'ant-spin-blur', 4, 'ngIf'],
                [1, 'ant-spin-dot', 'ant-spin-dot-spin'],
                [1, 'ant-spin-dot-item'],
                [1, 'ant-spin'],
                [3, 'ngTemplateOutlet'],
                ['class', 'ant-spin-text', 4, 'ngIf'],
                [1, 'ant-spin-text'],
                [1, 'ant-spin-container'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.kc(),
                  c.Ac(0, Ti, 5, 0, 'ng-template', null, 0, c.Bc),
                  c.Ac(2, Pi, 4, 12, 'div', 1),
                  c.Ac(3, Ai, 2, 2, 'div', 2)),
                  2 & t &&
                    (c.Bb(2),
                    c.lc('ngIf', e.isLoading),
                    c.Bb(1),
                    c.lc('ngIf', !e.nzSimple))
              },
              directives: [i.n, i.s],
              encapsulation: 2,
            })),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzIndicator',
              void 0
            ),
            Object(h.a)(
              [Object(p.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzDelay',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzSimple',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzSpinning',
              void 0
            ),
            t
          )
        })(),
        Bi = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, ht]],
            })),
            t
          )
        })()
      const Li = ['*']
      function Ri(t, e) {
        if ((1 & t && c.Qb(0, 'nz-avatar', 3), 2 & t)) {
          const t = c.fc()
          c.lc('nzSrc', t.nzSrc)
        }
      }
      function Mi(t, e) {
        1 & t && c.jc(0, 0, ['*ngIf', '!nzSrc'])
      }
      function Fi(t, e) {
        if ((1 & t && c.Qb(0, 'nz-list-item-meta-avatar', 3), 2 & t)) {
          const t = c.fc()
          c.lc('nzSrc', t.avatarStr)
        }
      }
      function Ni(t, e) {
        if (
          (1 & t && (c.Vb(0, 'nz-list-item-meta-avatar'), c.Rb(1, 4), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngTemplateOutlet', t.avatarTpl)
        }
      }
      function $i(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzTitle)
        }
      }
      function Hi(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-item-meta-title'),
            c.Ac(1, $i, 2, 1, 'ng-container', 6),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzTitle)
        }
      }
      function Ui(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzDescription)
        }
      }
      function Gi(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-item-meta-description'),
            c.Ac(1, Ui, 2, 1, 'ng-container', 6),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzDescription)
        }
      }
      function Wi(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 5),
            c.Ac(1, Hi, 2, 1, 'nz-list-item-meta-title', 1),
            c.Ac(2, Gi, 2, 1, 'nz-list-item-meta-description', 1),
            c.jc(3, 1),
            c.jc(4, 2),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1),
            c.lc('ngIf', t.nzTitle && !t.titleComponent),
            c.Bb(1),
            c.lc('ngIf', t.nzDescription && !t.descriptionComponent)
        }
      }
      const Qi = [
          [['nz-list-item-meta-avatar']],
          [['nz-list-item-meta-title']],
          [['nz-list-item-meta-description']],
        ],
        Zi = [
          'nz-list-item-meta-avatar',
          'nz-list-item-meta-title',
          'nz-list-item-meta-description',
        ]
      function Ji(t, e) {
        1 & t && c.jc(0)
      }
      const qi = ['nz-list-item-actions', '']
      function Xi(t, e) {}
      function Ki(t, e) {
        1 & t && c.Qb(0, 'em', 3)
      }
      function Yi(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'li'),
            c.Ac(1, Xi, 0, 0, 'ng-template', 1),
            c.Ac(2, Ki, 1, 0, 'em', 2),
            c.Ub()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = e.last
          c.Bb(1), c.lc('ngTemplateOutlet', t), c.Bb(1), c.lc('ngIf', !n)
        }
      }
      function ts(t, e) {}
      const es = function (t, e) {
        return { $implicit: t, index: e }
      }
      function ns(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Ac(1, ts, 0, 0, 'ng-template', 9), c.Sb()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = e.index,
            i = c.fc(2)
          c.Bb(1),
            c.lc('ngTemplateOutlet', i.nzRenderItem)(
              'ngTemplateOutletContext',
              c.pc(2, es, t, n)
            )
        }
      }
      function is(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 7),
            c.Ac(1, ns, 2, 5, 'ng-container', 8),
            c.jc(2, 4),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngForOf', t.nzDataSource)
        }
      }
      function ss(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzHeader)
        }
      }
      function os(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-header'),
            c.Ac(1, ss, 2, 1, 'ng-container', 10),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzHeader)
        }
      }
      function rs(t, e) {
        1 & t && c.Qb(0, 'div'), 2 & t && c.xc('min-height', 53, 'px')
      }
      function as(t, e) {}
      function cs(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 13), c.Ac(1, as, 0, 0, 'ng-template', 9), c.Ub()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = e.index,
            i = c.fc(2)
          c.lc('nzSpan', i.nzGrid.span || null)('nzXs', i.nzGrid.xs || null)(
            'nzSm',
            i.nzGrid.sm || null
          )('nzMd', i.nzGrid.md || null)('nzLg', i.nzGrid.lg || null)(
            'nzXl',
            i.nzGrid.xl || null
          )('nzXXl', i.nzGrid.xxl || null),
            c.Bb(1),
            c.lc('ngTemplateOutlet', i.nzRenderItem)(
              'ngTemplateOutletContext',
              c.pc(9, es, t, n)
            )
        }
      }
      function ls(t, e) {
        if (
          (1 & t && (c.Vb(0, 'div', 11), c.Ac(1, cs, 2, 12, 'div', 12), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.lc('nzGutter', t.nzGrid.gutter || null),
            c.Bb(1),
            c.lc('ngForOf', t.nzDataSource)
        }
      }
      function hs(t, e) {
        if ((1 & t && c.Qb(0, 'nz-list-empty', 14), 2 & t)) {
          const t = c.fc()
          c.lc('nzNoResult', t.nzNoResult)
        }
      }
      function ds(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzFooter)
        }
      }
      function us(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-footer'),
            c.Ac(1, ds, 2, 1, 'ng-container', 10),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzFooter)
        }
      }
      function ps(t, e) {}
      function gs(t, e) {}
      function ms(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-pagination'),
            c.Ac(1, gs, 0, 0, 'ng-template', 6),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('ngTemplateOutlet', t.nzPagination)
        }
      }
      const bs = [
          [['nz-list-header']],
          [['nz-list-footer'], ['', 'nz-list-footer', '']],
          [['nz-list-load-more'], ['', 'nz-list-load-more', '']],
          [['nz-list-pagination'], ['', 'nz-list-pagination', '']],
          '*',
        ],
        fs = [
          'nz-list-header',
          'nz-list-footer, [nz-list-footer]',
          'nz-list-load-more, [nz-list-load-more]',
          'nz-list-pagination, [nz-list-pagination]',
          '*',
        ]
      function zs(t, e) {
        if ((1 & t && c.Qb(0, 'ul', 6), 2 & t)) {
          const t = c.fc(2)
          c.lc('nzActions', t.nzActions)
        }
      }
      function vs(t, e) {
        if ((1 & t && (c.Ac(0, zs, 1, 1, 'ul', 5), c.jc(1)), 2 & t)) {
          const t = c.fc()
          c.lc('ngIf', t.nzActions && t.nzActions.length > 0)
        }
      }
      function ys(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(3)
          c.Bb(1), c.Dc(t.nzContent)
        }
      }
      function _s(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Ac(1, ys, 2, 1, 'ng-container', 8), c.Sb()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzContent)
        }
      }
      function Cs(t, e) {
        if (
          (1 & t &&
            (c.jc(0, 1), c.jc(1, 2), c.Ac(2, _s, 2, 1, 'ng-container', 7)),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(2), c.lc('ngIf', t.nzContent)
        }
      }
      function Os(t, e) {
        1 & t && c.jc(0, 3)
      }
      function ws(t, e) {}
      function Ss(t, e) {}
      function Is(t, e) {}
      function xs(t, e) {}
      function Ts(t, e) {
        if (
          (1 & t &&
            (c.Ac(0, ws, 0, 0, 'ng-template', 9),
            c.Ac(1, Ss, 0, 0, 'ng-template', 9),
            c.Ac(2, Is, 0, 0, 'ng-template', 9),
            c.Ac(3, xs, 0, 0, 'ng-template', 9)),
          2 & t)
        ) {
          const t = c.fc(),
            e = c.rc(3),
            n = c.rc(5),
            i = c.rc(1)
          c.lc('ngTemplateOutlet', e),
            c.Bb(1),
            c.lc('ngTemplateOutlet', t.nzExtra),
            c.Bb(1),
            c.lc('ngTemplateOutlet', n),
            c.Bb(1),
            c.lc('ngTemplateOutlet', i)
        }
      }
      function Ds(t, e) {}
      function ks(t, e) {}
      function Ps(t, e) {}
      function As(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'nz-list-item-extra'),
            c.Ac(1, Ps, 0, 0, 'ng-template', 9),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc(2)
          c.Bb(1), c.lc('ngTemplateOutlet', t.nzExtra)
        }
      }
      function Es(t, e) {}
      function js(t, e) {
        if (
          (1 & t &&
            (c.Tb(0),
            c.Vb(1, 'div', 10),
            c.Ac(2, Ds, 0, 0, 'ng-template', 9),
            c.Ac(3, ks, 0, 0, 'ng-template', 9),
            c.Ub(),
            c.Ac(4, As, 2, 1, 'nz-list-item-extra', 7),
            c.Ac(5, Es, 0, 0, 'ng-template', 9),
            c.Sb()),
          2 & t)
        ) {
          const t = c.fc(),
            e = c.rc(3),
            n = c.rc(1),
            i = c.rc(5)
          c.Bb(2),
            c.lc('ngTemplateOutlet', e),
            c.Bb(1),
            c.lc('ngTemplateOutlet', n),
            c.Bb(1),
            c.lc('ngIf', t.nzExtra),
            c.Bb(1),
            c.lc('ngTemplateOutlet', i)
        }
      }
      const Vs = [
          [['nz-list-item-actions'], ['', 'nz-list-item-actions', '']],
          [['nz-list-item-meta'], ['', 'nz-list-item-meta', '']],
          '*',
          [['nz-list-item-extra'], ['', 'nz-list-item-extra', '']],
        ],
        Bs = [
          'nz-list-item-actions, [nz-list-item-actions]',
          'nz-list-item-meta, [nz-list-item-meta]',
          '*',
          'nz-list-item-extra, [nz-list-item-extra]',
        ]
      let Ls = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item-meta-title']],
              exportAs: ['nzListItemMetaTitle'],
              ngContentSelectors: Li,
              decls: 2,
              vars: 0,
              consts: [[1, 'ant-list-item-meta-title']],
              template: function (t, e) {
                1 & t && (c.kc(), c.Vb(0, 'h4', 0), c.jc(1), c.Ub())
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Rs = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item-meta-description']],
              exportAs: ['nzListItemMetaDescription'],
              ngContentSelectors: Li,
              decls: 2,
              vars: 0,
              consts: [[1, 'ant-list-item-meta-description']],
              template: function (t, e) {
                1 & t && (c.kc(), c.Vb(0, 'div', 0), c.jc(1), c.Ub())
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ms = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item-meta-avatar']],
              inputs: { nzSrc: 'nzSrc' },
              exportAs: ['nzListItemMetaAvatar'],
              ngContentSelectors: Li,
              decls: 3,
              vars: 2,
              consts: [
                [1, 'ant-list-item-meta-avatar'],
                [3, 'nzSrc', 4, 'ngIf'],
                [4, 'ngIf'],
                [3, 'nzSrc'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.kc(),
                  c.Vb(0, 'div', 0),
                  c.Ac(1, Ri, 1, 1, 'nz-avatar', 1),
                  c.Ac(2, Mi, 1, 0, 'ng-content', 2),
                  c.Ub()),
                  2 & t &&
                    (c.Bb(1),
                    c.lc('ngIf', e.nzSrc),
                    c.Bb(1),
                    c.lc('ngIf', !e.nzSrc))
              },
              directives: [i.n, Zt],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Fs = (() => {
          class t {
            constructor(t, e) {
              ;(this.elementRef = t),
                (this.renderer = e),
                (this.avatarStr = ''),
                this.renderer.addClass(t.nativeElement, 'ant-list-item-meta')
            }
            set nzAvatar(t) {
              t instanceof c.M
                ? ((this.avatarStr = ''), (this.avatarTpl = t))
                : (this.avatarStr = t)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(c.F))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item-meta'], ['', 'nz-list-item-meta', '']],
              contentQueries: function (t, e, n) {
                if ((1 & t && (c.Ib(n, Rs, 1), c.Ib(n, Ls, 1)), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.descriptionComponent = t.first),
                    c.qc((t = c.dc())) && (e.titleComponent = t.first)
                }
              },
              inputs: {
                nzAvatar: 'nzAvatar',
                nzTitle: 'nzTitle',
                nzDescription: 'nzDescription',
              },
              exportAs: ['nzListItemMeta'],
              ngContentSelectors: Zi,
              decls: 4,
              vars: 3,
              consts: [
                [3, 'nzSrc', 4, 'ngIf'],
                [4, 'ngIf'],
                ['class', 'ant-list-item-meta-content', 4, 'ngIf'],
                [3, 'nzSrc'],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-list-item-meta-content'],
                [4, 'nzStringTemplateOutlet'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.kc(Qi),
                  c.Ac(0, Fi, 1, 1, 'nz-list-item-meta-avatar', 0),
                  c.Ac(1, Ni, 2, 1, 'nz-list-item-meta-avatar', 1),
                  c.jc(2),
                  c.Ac(3, Wi, 5, 2, 'div', 2)),
                  2 & t &&
                    (c.lc('ngIf', e.avatarStr),
                    c.Bb(1),
                    c.lc('ngIf', e.avatarTpl),
                    c.Bb(2),
                    c.lc(
                      'ngIf',
                      e.nzTitle ||
                        e.nzDescription ||
                        e.descriptionComponent ||
                        e.titleComponent
                    ))
              },
              directives: [i.n, Ms, i.s, Ls, I.b, Rs],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ns = (() => {
          class t {
            constructor() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [
                ['nz-list-item-extra'],
                ['', 'nz-list-item-extra', ''],
              ],
              hostAttrs: [1, 'ant-list-item-extra'],
              exportAs: ['nzListItemExtra'],
              ngContentSelectors: Li,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        $s = (() => {
          class t {
            constructor() {}
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item-action']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(c.M, 1), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.templateRef = t.first)
                }
              },
              exportAs: ['nzListItemAction'],
              ngContentSelectors: Li,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.Ac(0, Ji, 1, 0, 'ng-template'))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Hs = (() => {
          class t {
            constructor(t, e) {
              ;(this.ngZone = t),
                (this.cdr = e),
                (this.nzActions = []),
                (this.actions = []),
                (this.destroy$ = new m.a()),
                (this.inputActionChanges$ = new m.a()),
                (this.contentChildrenChanges$ = Object(Oi.a)(() =>
                  this.nzListItemActions
                    ? Object(k.a)(null)
                    : this.ngZone.onStable.asObservable().pipe(
                        Object(ne.a)(1),
                        Object(Yt.a)(() => this.contentChildrenChanges$)
                      )
                )),
                Object(V.a)(
                  this.contentChildrenChanges$,
                  this.inputActionChanges$
                )
                  .pipe(Object(b.a)(this.destroy$))
                  .subscribe(() => {
                    ;(this.actions = this.nzActions.length
                      ? this.nzActions
                      : this.nzListItemActions.map((t) => t.templateRef)),
                      this.cdr.detectChanges()
                  })
            }
            ngOnChanges() {
              this.inputActionChanges$.next(null)
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.A), c.Pb(c.h))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['ul', 'nz-list-item-actions', '']],
              contentQueries: function (t, e, n) {
                if ((1 & t && c.Ib(n, $s, 0), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.nzListItemActions = t)
                }
              },
              hostAttrs: [1, 'ant-list-item-action'],
              inputs: { nzActions: 'nzActions' },
              exportAs: ['nzListItemActions'],
              features: [c.zb],
              attrs: qi,
              decls: 1,
              vars: 1,
              consts: [
                [4, 'ngFor', 'ngForOf'],
                [3, 'ngTemplateOutlet'],
                ['class', 'ant-list-item-action-split', 4, 'ngIf'],
                [1, 'ant-list-item-action-split'],
              ],
              template: function (t, e) {
                1 & t && c.Ac(0, Yi, 3, 2, 'li', 0),
                  2 & t && c.lc('ngForOf', e.actions)
              },
              directives: [i.m, i.s, i.n],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Us = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-empty']],
              hostAttrs: [1, 'ant-list-empty-text'],
              inputs: { nzNoResult: 'nzNoResult' },
              exportAs: ['nzListHeader'],
              decls: 1,
              vars: 2,
              consts: [[3, 'nzComponentName', 'specificContent']],
              template: function (t, e) {
                1 & t && c.Qb(0, 'nz-embed-empty', 0),
                  2 & t &&
                    c.lc('nzComponentName', 'list')(
                      'specificContent',
                      e.nzNoResult
                    )
              },
              directives: [ke],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Gs = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-header']],
              hostAttrs: [1, 'ant-list-header'],
              exportAs: ['nzListHeader'],
              ngContentSelectors: Li,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Ws = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-footer']],
              hostAttrs: [1, 'ant-list-footer'],
              exportAs: ['nzListFooter'],
              ngContentSelectors: Li,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Qs = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-pagination']],
              hostAttrs: [1, 'ant-list-pagination'],
              exportAs: ['nzListPagination'],
              ngContentSelectors: Li,
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0))
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          )
        })(),
        Zs = (() => {
          class t {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)()
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['nz-list-load-more']],
              exportAs: ['nzListLoadMoreDirective'],
            })),
            t
          )
        })(),
        Js = (() => {
          class t {
            constructor(t, e) {
              ;(this.elementRef = t),
                (this.directionality = e),
                (this.nzBordered = !1),
                (this.nzGrid = ''),
                (this.nzItemLayout = 'horizontal'),
                (this.nzRenderItem = null),
                (this.nzLoading = !1),
                (this.nzLoadMore = null),
                (this.nzSize = 'default'),
                (this.nzSplit = !0),
                (this.hasSomethingAfterLastItem = !1),
                (this.dir = 'ltr'),
                (this.itemLayoutNotifySource = new qt.a(this.nzItemLayout)),
                (this.destroy$ = new m.a()),
                this.elementRef.nativeElement.classList.add('ant-list')
            }
            get itemLayoutNotify$() {
              return this.itemLayoutNotifySource.asObservable()
            }
            ngOnInit() {
              var t
              ;(this.dir = this.directionality.value),
                null === (t = this.directionality.change) ||
                  void 0 === t ||
                  t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                    this.dir = t
                  })
            }
            getSomethingAfterLastItem() {
              return !!(
                this.nzLoadMore ||
                this.nzPagination ||
                this.nzFooter ||
                this.nzListFooterComponent ||
                this.nzListPaginationComponent ||
                this.nzListLoadMoreDirective
              )
            }
            ngOnChanges(t) {
              t.nzItemLayout &&
                this.itemLayoutNotifySource.next(this.nzItemLayout)
            }
            ngOnDestroy() {
              this.itemLayoutNotifySource.unsubscribe(),
                this.destroy$.next(),
                this.destroy$.complete()
            }
            ngAfterContentInit() {
              this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(r.c, 8))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list'], ['', 'nz-list', '']],
              contentQueries: function (t, e, n) {
                if (
                  (1 & t && (c.Ib(n, Ws, 1), c.Ib(n, Qs, 1), c.Ib(n, Zs, 1)),
                  2 & t)
                ) {
                  let t
                  c.qc((t = c.dc())) && (e.nzListFooterComponent = t.first),
                    c.qc((t = c.dc())) &&
                      (e.nzListPaginationComponent = t.first),
                    c.qc((t = c.dc())) && (e.nzListLoadMoreDirective = t.first)
                }
              },
              hostVars: 16,
              hostBindings: function (t, e) {
                2 & t &&
                  c.Hb('ant-list-rtl', 'rtl' === e.dir)(
                    'ant-list-vertical',
                    'vertical' === e.nzItemLayout
                  )('ant-list-lg', 'large' === e.nzSize)(
                    'ant-list-sm',
                    'small' === e.nzSize
                  )('ant-list-split', e.nzSplit)(
                    'ant-list-bordered',
                    e.nzBordered
                  )('ant-list-loading', e.nzLoading)(
                    'ant-list-something-after-last-item',
                    e.hasSomethingAfterLastItem
                  )
              },
              inputs: {
                nzBordered: 'nzBordered',
                nzGrid: 'nzGrid',
                nzItemLayout: 'nzItemLayout',
                nzRenderItem: 'nzRenderItem',
                nzLoading: 'nzLoading',
                nzLoadMore: 'nzLoadMore',
                nzSize: 'nzSize',
                nzSplit: 'nzSplit',
                nzDataSource: 'nzDataSource',
                nzHeader: 'nzHeader',
                nzFooter: 'nzFooter',
                nzPagination: 'nzPagination',
                nzNoResult: 'nzNoResult',
              },
              exportAs: ['nzList'],
              features: [c.zb],
              ngContentSelectors: fs,
              decls: 15,
              vars: 9,
              consts: [
                ['itemsTpl', ''],
                [4, 'ngIf'],
                [3, 'nzSpinning'],
                [3, 'min-height', 4, 'ngIf'],
                ['nz-row', '', 3, 'nzGutter', 4, 'ngIf', 'ngIfElse'],
                [3, 'nzNoResult', 4, 'ngIf'],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-list-items'],
                [4, 'ngFor', 'ngForOf'],
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
                [4, 'nzStringTemplateOutlet'],
                ['nz-row', '', 3, 'nzGutter'],
                [
                  'nz-col',
                  '',
                  3,
                  'nzSpan',
                  'nzXs',
                  'nzSm',
                  'nzMd',
                  'nzLg',
                  'nzXl',
                  'nzXXl',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  'nz-col',
                  '',
                  3,
                  'nzSpan',
                  'nzXs',
                  'nzSm',
                  'nzMd',
                  'nzLg',
                  'nzXl',
                  'nzXXl',
                ],
                [3, 'nzNoResult'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (c.kc(bs),
                    c.Ac(0, is, 3, 1, 'ng-template', null, 0, c.Bc),
                    c.Ac(2, os, 2, 1, 'nz-list-header', 1),
                    c.jc(3),
                    c.Vb(4, 'nz-spin', 2),
                    c.Tb(5),
                    c.Ac(6, rs, 1, 2, 'div', 3),
                    c.Ac(7, ls, 2, 2, 'div', 4),
                    c.Ac(8, hs, 1, 1, 'nz-list-empty', 5),
                    c.Sb(),
                    c.Ub(),
                    c.Ac(9, us, 2, 1, 'nz-list-footer', 1),
                    c.jc(10, 1),
                    c.Ac(11, ps, 0, 0, 'ng-template', 6),
                    c.jc(12, 2),
                    c.Ac(13, ms, 2, 1, 'nz-list-pagination', 1),
                    c.jc(14, 3)),
                  2 & t)
                ) {
                  const t = c.rc(1)
                  c.Bb(2),
                    c.lc('ngIf', e.nzHeader),
                    c.Bb(2),
                    c.lc('nzSpinning', e.nzLoading),
                    c.Bb(2),
                    c.lc(
                      'ngIf',
                      e.nzLoading &&
                        e.nzDataSource &&
                        0 === e.nzDataSource.length
                    ),
                    c.Bb(1),
                    c.lc('ngIf', e.nzGrid && e.nzDataSource)('ngIfElse', t),
                    c.Bb(1),
                    c.lc(
                      'ngIf',
                      !e.nzLoading &&
                        e.nzDataSource &&
                        0 === e.nzDataSource.length
                    ),
                    c.Bb(1),
                    c.lc('ngIf', e.nzFooter),
                    c.Bb(2),
                    c.lc('ngTemplateOutlet', e.nzLoadMore),
                    c.Bb(2),
                    c.lc('ngIf', e.nzPagination)
                }
              },
              directives: [i.n, Vi, i.s, i.m, Gs, I.b, Gn, Wn, Us, Ws, Qs],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzBordered',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzLoading',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzSplit',
              void 0
            ),
            t
          )
        })(),
        qs = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.parentComp = n),
                (this.cdr = i),
                (this.nzActions = []),
                (this.nzExtra = null),
                (this.nzNoFlex = !1),
                e.addClass(t.nativeElement, 'ant-list-item')
            }
            get isVerticalAndExtra() {
              return !(
                'vertical' !== this.itemLayout ||
                (!this.listItemExtraDirective && !this.nzExtra)
              )
            }
            ngAfterViewInit() {
              this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(
                (t) => {
                  ;(this.itemLayout = t), this.cdr.detectChanges()
                }
              )
            }
            ngOnDestroy() {
              this.itemLayout$ && this.itemLayout$.unsubscribe()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l), c.Pb(c.F), c.Pb(Js), c.Pb(c.h))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-list-item'], ['', 'nz-list-item', '']],
              contentQueries: function (t, e, n) {
                if ((1 & t && c.Ib(n, Ns, 1), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.listItemExtraDirective = t.first)
                }
              },
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t && c.Hb('ant-list-item-no-flex', e.nzNoFlex)
              },
              inputs: {
                nzActions: 'nzActions',
                nzExtra: 'nzExtra',
                nzNoFlex: 'nzNoFlex',
                nzContent: 'nzContent',
              },
              exportAs: ['nzListItem'],
              ngContentSelectors: Bs,
              decls: 9,
              vars: 2,
              consts: [
                ['actionsTpl', ''],
                ['contentTpl', ''],
                ['extraTpl', ''],
                ['simpleTpl', ''],
                [4, 'ngIf', 'ngIfElse'],
                ['nz-list-item-actions', '', 3, 'nzActions', 4, 'ngIf'],
                ['nz-list-item-actions', '', 3, 'nzActions'],
                [4, 'ngIf'],
                [4, 'nzStringTemplateOutlet'],
                [3, 'ngTemplateOutlet'],
                [1, 'ant-list-item-main'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (c.kc(Vs),
                    c.Ac(0, vs, 2, 1, 'ng-template', null, 0, c.Bc),
                    c.Ac(2, Cs, 3, 1, 'ng-template', null, 1, c.Bc),
                    c.Ac(4, Os, 1, 0, 'ng-template', null, 2, c.Bc),
                    c.Ac(6, Ts, 4, 4, 'ng-template', null, 3, c.Bc),
                    c.Ac(8, js, 6, 4, 'ng-container', 4)),
                  2 & t)
                ) {
                  const t = c.rc(7)
                  c.Bb(8), c.lc('ngIf', e.isVerticalAndExtra)('ngIfElse', t)
                }
              },
              directives: [i.n, Hs, I.b, i.s, Ns],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Boolean)],
              t.prototype,
              'nzNoFlex',
              void 0
            ),
            t
          )
        })(),
        Xs = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, Bi, Qn, Jt, I.a, Ve]],
            })),
            t
          )
        })()
      const Ks = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
      ]
      function Ys(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'i', 1),
            c.cc('click', function (e) {
              return c.sc(t), c.fc().closeTag(e)
            }),
            c.Ub()
        }
      }
      const to = ['*']
      let eo = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.cdr = t),
                (this.renderer = e),
                (this.elementRef = n),
                (this.directionality = i),
                (this.isPresetColor = !1),
                (this.nzMode = 'default'),
                (this.nzChecked = !1),
                (this.nzOnClose = new c.n()),
                (this.nzCheckedChange = new c.n()),
                (this.dir = 'ltr'),
                (this.destroy$ = new m.a()),
                this.elementRef.nativeElement.classList.add('ant-tag')
            }
            updateCheckedStatus() {
              'checkable' === this.nzMode &&
                ((this.nzChecked = !this.nzChecked),
                this.nzCheckedChange.emit(this.nzChecked))
            }
            closeTag(t) {
              this.nzOnClose.emit(t),
                t.defaultPrevented ||
                  this.renderer.removeChild(
                    this.renderer.parentNode(this.elementRef.nativeElement),
                    this.elementRef.nativeElement
                  )
            }
            ngOnInit() {
              var t
              null === (t = this.directionality.change) ||
                void 0 === t ||
                t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                  ;(this.dir = t), this.cdr.detectChanges()
                }),
                (this.dir = this.directionality.value)
            }
            ngOnChanges(t) {
              const { nzColor: e } = t
              e &&
                (this.isPresetColor =
                  !!this.nzColor &&
                  (-1 !== Ks.indexOf(this.nzColor) ||
                    /^(success|processing|error|default|warning)$/.test(
                      this.nzColor
                    )))
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.h), c.Pb(c.F), c.Pb(c.l), c.Pb(r.c, 8))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-tag']],
              hostVars: 12,
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('click', function () {
                    return e.updateCheckedStatus()
                  }),
                  2 & t &&
                    (c.Db(e.isPresetColor ? 'ant-tag-' + e.nzColor : ''),
                    c.xc('background-color', e.isPresetColor ? '' : e.nzColor),
                    c.Hb('ant-tag-has-color', e.nzColor && !e.isPresetColor)(
                      'ant-tag-checkable',
                      'checkable' === e.nzMode
                    )('ant-tag-checkable-checked', e.nzChecked)(
                      'ant-tag-rtl',
                      'rtl' === e.dir
                    ))
              },
              inputs: {
                nzMode: 'nzMode',
                nzChecked: 'nzChecked',
                nzColor: 'nzColor',
              },
              outputs: {
                nzOnClose: 'nzOnClose',
                nzCheckedChange: 'nzCheckedChange',
              },
              exportAs: ['nzTag'],
              features: [c.zb],
              ngContentSelectors: to,
              decls: 2,
              vars: 1,
              consts: [
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'close',
                  'class',
                  'ant-tag-close-icon',
                  'tabindex',
                  '-1',
                  3,
                  'click',
                  4,
                  'ngIf',
                ],
                [
                  'nz-icon',
                  '',
                  'nzType',
                  'close',
                  'tabindex',
                  '-1',
                  1,
                  'ant-tag-close-icon',
                  3,
                  'click',
                ],
              ],
              template: function (t, e) {
                1 & t && (c.kc(), c.jc(0), c.Ac(1, Ys, 1, 0, 'i', 0)),
                  2 & t && (c.Bb(1), c.lc('ngIf', 'closeable' === e.nzMode))
              },
              directives: [i.n, g.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzChecked',
              void 0
            ),
            t
          )
        })(),
        no = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, l.f, g.c]],
            })),
            t
          )
        })()
      var io = n('D0XW'),
        so = n('Y7HM')
      function oo(t) {
        const { subscriber: e, counter: n, period: i } = t
        e.next(n),
          this.schedule({ subscriber: e, counter: n + 1, period: i }, i)
      }
      var ro = n('eNwd')
      function ao(t, e) {
        for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        return t
      }
      function co(t, e) {
        const n = e ? '' : 'none'
        ao(t.style, {
          touchAction: e ? '' : 'none',
          webkitUserDrag: e ? '' : 'none',
          webkitTapHighlightColor: e ? '' : 'transparent',
          userSelect: n,
          msUserSelect: n,
          webkitUserSelect: n,
          MozUserSelect: n,
        })
      }
      function lo(t, e) {
        const n = t.style
        ;(n.position = e ? '' : 'fixed'),
          (n.top = n.opacity = e ? '' : '0'),
          (n.left = e ? '' : '-999em')
      }
      function ho(t) {
        const e = t.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3
        return parseFloat(t) * e
      }
      function uo(t, e) {
        return t
          .getPropertyValue(e)
          .split(',')
          .map((t) => t.trim())
      }
      function po(t) {
        const e = t.getBoundingClientRect()
        return {
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.width,
          height: e.height,
        }
      }
      function go(t, e, n) {
        const { top: i, bottom: s, left: o, right: r } = t
        return n >= i && n <= s && e >= o && e <= r
      }
      function mo(t, e, n) {
        ;(t.top += e),
          (t.bottom = t.top + t.height),
          (t.left += n),
          (t.right = t.left + t.width)
      }
      function bo(t, e, n, i) {
        const { top: s, right: o, bottom: r, left: a, width: c, height: l } = t,
          h = c * e,
          d = l * e
        return i > s - d && i < r + d && n > a - h && n < o + h
      }
      class fo {
        constructor(t, e) {
          ;(this._document = t),
            (this._viewportRuler = e),
            (this.positions = new Map())
        }
        clear() {
          this.positions.clear()
        }
        cache(t) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition(),
            }),
            t.forEach((t) => {
              this.positions.set(t, {
                scrollPosition: { top: t.scrollTop, left: t.scrollLeft },
                clientRect: po(t),
              })
            })
        }
        handleScroll(t) {
          const e = t.target,
            n = this.positions.get(e)
          if (!n) return null
          const i = e === this._document ? e.documentElement : e,
            s = n.scrollPosition
          let o, r
          if (e === this._document) {
            const t = this._viewportRuler.getViewportScrollPosition()
            ;(o = t.top), (r = t.left)
          } else (o = e.scrollTop), (r = e.scrollLeft)
          const a = s.top - o,
            c = s.left - r
          return (
            this.positions.forEach((t, n) => {
              t.clientRect && e !== n && i.contains(n) && mo(t.clientRect, a, c)
            }),
            (s.top = o),
            (s.left = r),
            { top: a, left: c }
          )
        }
      }
      function zo(t) {
        const e = t.cloneNode(!0),
          n = e.querySelectorAll('[id]'),
          i = t.nodeName.toLowerCase()
        e.removeAttribute('id')
        for (let s = 0; s < n.length; s++) n[s].removeAttribute('id')
        return (
          'canvas' === i
            ? Co(t, e)
            : ('input' !== i && 'select' !== i && 'textarea' !== i) || _o(t, e),
          vo('canvas', t, e, Co),
          vo('input, textarea, select', t, e, _o),
          e
        )
      }
      function vo(t, e, n, i) {
        const s = e.querySelectorAll(t)
        if (s.length) {
          const e = n.querySelectorAll(t)
          for (let t = 0; t < s.length; t++) i(s[t], e[t])
        }
      }
      let yo = 0
      function _o(t, e) {
        'file' !== e.type && (e.value = t.value),
          'radio' === e.type &&
            e.name &&
            (e.name = `mat-clone-${e.name}-${yo++}`)
      }
      function Co(t, e) {
        const n = e.getContext('2d')
        if (n)
          try {
            n.drawImage(t, 0, 0)
          } catch (i) {}
      }
      const Oo = Object(v.e)({ passive: !0 }),
        wo = Object(v.e)({ passive: !1 })
      class So {
        constructor(t, e, n, i, s, o) {
          ;(this._config = e),
            (this._document = n),
            (this._ngZone = i),
            (this._viewportRuler = s),
            (this._dragDropRegistry = o),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._moveEvents = new m.a()),
            (this._pointerMoveSubscription = te.a.EMPTY),
            (this._pointerUpSubscription = te.a.EMPTY),
            (this._scrollSubscription = te.a.EMPTY),
            (this._resizeSubscription = te.a.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = 'ltr'),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new m.a()),
            (this.started = new m.a()),
            (this.released = new m.a()),
            (this.ended = new m.a()),
            (this.entered = new m.a()),
            (this.exited = new m.a()),
            (this.dropped = new m.a()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (t) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const e = this._handles.find((e) => {
                  const n = t.target
                  return !!n && (n === e || e.contains(n))
                })
                !e ||
                  this._disabledHandles.has(e) ||
                  this.disabled ||
                  this._initializeDragSequence(e, t)
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, t)
            }),
            (this._pointerMove = (t) => {
              const e = this._getPointerPositionOnPage(t)
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(e.x - this._pickupPositionOnPage.x) +
                    Math.abs(e.y - this._pickupPositionOnPage.y) >=
                  this._config.dragStartThreshold
                ) {
                  const e =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(t),
                    n = this._dropContainer
                  if (!e) return void this._endDragSequence(t)
                  ;(n && (n.isDragging() || n.isReceiving())) ||
                    (t.preventDefault(),
                    (this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(t)))
                }
                return
              }
              this._boundaryElement &&
                ((this._previewRect &&
                  (this._previewRect.width || this._previewRect.height)) ||
                  (this._previewRect = (
                    this._preview || this._rootElement
                  ).getBoundingClientRect())),
                t.preventDefault()
              const n = this._getConstrainedPointerPosition(e)
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = e),
                this._updatePointerDirectionDelta(n),
                this._dropContainer)
              )
                this._updateActiveDropContainer(n, e)
              else {
                const t = this._activeTransform
                ;(t.x =
                  n.x -
                  this._pickupPositionOnPage.x +
                  this._passiveTransform.x),
                  (t.y =
                    n.y -
                    this._pickupPositionOnPage.y +
                    this._passiveTransform.y),
                  this._applyRootElementTransform(t.x, t.y),
                  'undefined' != typeof SVGElement &&
                    this._rootElement instanceof SVGElement &&
                    this._rootElement.setAttribute(
                      'transform',
                      `translate(${t.x} ${t.y})`
                    )
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: n,
                    event: t,
                    distance: this._getDragDistance(n),
                    delta: this._pointerDirectionDelta,
                  })
                })
            }),
            (this._pointerUp = (t) => {
              this._endDragSequence(t)
            }),
            this.withRootElement(t).withParent(e.parentDragRef || null),
            (this._parentPositions = new fo(n, s)),
            o.registerDragItem(this)
        }
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          )
        }
        set disabled(t) {
          const e = Object(L.c)(t)
          e !== this._disabled &&
            ((this._disabled = e),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((t) => co(t, e)))
        }
        getPlaceholderElement() {
          return this._placeholder
        }
        getRootElement() {
          return this._rootElement
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement()
        }
        withHandles(t) {
          ;(this._handles = t.map((t) => Object(L.e)(t))),
            this._handles.forEach((t) => co(t, this.disabled)),
            this._toggleNativeDragInteractions()
          const e = new Set()
          return (
            this._disabledHandles.forEach((t) => {
              this._handles.indexOf(t) > -1 && e.add(t)
            }),
            (this._disabledHandles = e),
            this
          )
        }
        withPreviewTemplate(t) {
          return (this._previewTemplate = t), this
        }
        withPlaceholderTemplate(t) {
          return (this._placeholderTemplate = t), this
        }
        withRootElement(t) {
          const e = Object(L.e)(t)
          return (
            e !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                e.addEventListener('mousedown', this._pointerDown, wo),
                  e.addEventListener('touchstart', this._pointerDown, Oo)
              }),
              (this._initialTransform = void 0),
              (this._rootElement = e)),
            'undefined' != typeof SVGElement &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          )
        }
        withBoundaryElement(t) {
          return (
            (this._boundaryElement = t ? Object(L.e)(t) : null),
            this._resizeSubscription.unsubscribe(),
            t &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          )
        }
        withParent(t) {
          return (this._parentDragRef = t), this
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && To(this._rootElement),
            To(this._anchor),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeSubscriptions(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null)
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          )
        }
        reset() {
          ;(this._rootElement.style.transform = this._initialTransform || ''),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 })
        }
        disableHandle(t) {
          !this._disabledHandles.has(t) &&
            this._handles.indexOf(t) > -1 &&
            (this._disabledHandles.add(t), co(t, !0))
        }
        enableHandle(t) {
          this._disabledHandles.has(t) &&
            (this._disabledHandles.delete(t), co(t, this.disabled))
        }
        withDirection(t) {
          return (this._direction = t), this
        }
        _withDropContainer(t) {
          this._dropContainer = t
        }
        getFreeDragPosition() {
          const t = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform
          return { x: t.x, y: t.y }
        }
        setFreeDragPosition(t) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = t.x),
            (this._passiveTransform.y = t.y),
            this._dropContainer || this._applyRootElementTransform(t.x, t.y),
            this
          )
        }
        _sortFromLastPointerPosition() {
          const t = this._lastKnownPointerPosition
          t &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(t),
              t
            )
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe()
        }
        _destroyPreview() {
          this._preview && To(this._preview),
            this._previewRef && this._previewRef.destroy(),
            (this._preview = this._previewRef = null)
        }
        _destroyPlaceholder() {
          this._placeholder && To(this._placeholder),
            this._placeholderRef && this._placeholderRef.destroy(),
            (this._placeholder = this._placeholderRef = null)
        }
        _endDragSequence(t) {
          this._dragDropRegistry.isDragging(this) &&
            (this._removeSubscriptions(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight),
            this._hasStartedDragging &&
              (this.released.next({ source: this }),
              this._dropContainer
                ? (this._dropContainer._stopScrolling(),
                  this._animatePreviewToPlaceholder().then(() => {
                    this._cleanupDragArtifacts(t),
                      this._cleanupCachedDimensions(),
                      this._dragDropRegistry.stopDragging(this)
                  }))
                : ((this._passiveTransform.x = this._activeTransform.x),
                  (this._passiveTransform.y = this._activeTransform.y),
                  this._ngZone.run(() => {
                    this.ended.next({
                      source: this,
                      distance: this._getDragDistance(
                        this._getPointerPositionOnPage(t)
                      ),
                    })
                  }),
                  this._cleanupCachedDimensions(),
                  this._dragDropRegistry.stopDragging(this))))
        }
        _startDragSequence(t) {
          Do(t) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions()
          const e = this._dropContainer
          if (e) {
            const t = this._rootElement,
              n = t.parentNode,
              i = (this._preview = this._createPreviewElement()),
              s = (this._placeholder = this._createPlaceholderElement()),
              o = (this._anchor =
                this._anchor || this._document.createComment('')),
              r = this._getShadowRoot()
            n.insertBefore(o, t),
              lo(t, !1),
              this._document.body.appendChild(n.replaceChild(s, t)),
              (function (t, e) {
                return (
                  e ||
                  t.fullscreenElement ||
                  t.webkitFullscreenElement ||
                  t.mozFullScreenElement ||
                  t.msFullscreenElement ||
                  t.body
                )
              })(this._document, r).appendChild(i),
              this.started.next({ source: this }),
              e.start(),
              (this._initialContainer = e),
              (this._initialIndex = e.getItemIndex(this))
          } else
            this.started.next({ source: this }),
              (this._initialContainer = this._initialIndex = void 0)
          this._parentPositions.cache(e ? e.getScrollableParents() : [])
        }
        _initializeDragSequence(t, e) {
          this._parentDragRef && e.stopPropagation()
          const n = this.isDragging(),
            i = Do(e),
            s = !i && 0 !== e.button,
            o = this._rootElement,
            r =
              !i &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now()
          if (
            (e.target &&
              e.target.draggable &&
              'mousedown' === e.type &&
              e.preventDefault(),
            n || s || r)
          )
            return
          this._handles.length &&
            ((this._rootElementTapHighlight =
              o.style.webkitTapHighlightColor || ''),
            (o.style.webkitTapHighlightColor = 'transparent')),
            (this._hasStartedDragging = this._hasMoved = !1),
            this._removeSubscriptions(),
            (this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(
              this._pointerMove
            )),
            (this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(
              this._pointerUp
            )),
            (this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(
              (t) => {
                this._updateOnScroll(t)
              }
            )),
            this._boundaryElement &&
              (this._boundaryRect = po(this._boundaryElement))
          const a = this._previewTemplate
          this._pickupPositionInElement =
            a && a.template && !a.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(t, e)
          const c = (this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(
            e
          ))
          ;(this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: c.x, y: c.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, e)
        }
        _cleanupDragArtifacts(t) {
          lo(this._rootElement, !0),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._boundaryRect = this._previewRect = void 0),
            this._ngZone.run(() => {
              const e = this._dropContainer,
                n = e.getItemIndex(this),
                i = this._getPointerPositionOnPage(t),
                s = this._getDragDistance(this._getPointerPositionOnPage(t)),
                o = e._isOverContainer(i.x, i.y)
              this.ended.next({ source: this, distance: s }),
                this.dropped.next({
                  item: this,
                  currentIndex: n,
                  previousIndex: this._initialIndex,
                  container: e,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: o,
                  distance: s,
                }),
                e.drop(
                  this,
                  n,
                  this._initialIndex,
                  this._initialContainer,
                  o,
                  s
                ),
                (this._dropContainer = this._initialContainer)
            })
        }
        _updateActiveDropContainer({ x: t, y: e }, { x: n, y: i }) {
          let s = this._initialContainer._getSiblingContainerFromPosition(
            this,
            t,
            e
          )
          !s &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(t, e) &&
            (s = this._initialContainer),
            s &&
              s !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer,
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = s),
                  this._dropContainer.enter(
                    this,
                    t,
                    e,
                    s === this._initialContainer && s.sortingDisabled
                      ? this._initialIndex
                      : void 0
                  ),
                  this.entered.next({
                    item: this,
                    container: s,
                    currentIndex: s.getItemIndex(this),
                  })
              }),
            this._dropContainer._startScrollingIfNecessary(n, i),
            this._dropContainer._sortItem(
              this,
              t,
              e,
              this._pointerDirectionDelta
            ),
            (this._preview.style.transform = Io(
              t - this._pickupPositionInElement.x,
              e - this._pickupPositionInElement.y
            ))
        }
        _createPreviewElement() {
          const t = this._previewTemplate,
            e = this.previewClass,
            n = t ? t.template : null
          let i
          if (n && t) {
            const e = t.matchSize
                ? this._rootElement.getBoundingClientRect()
                : null,
              s = t.viewContainer.createEmbeddedView(n, t.context)
            s.detectChanges(),
              (i = ko(s, this._document)),
              (this._previewRef = s),
              t.matchSize
                ? Po(i, e)
                : (i.style.transform = Io(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y
                  ))
          } else {
            const t = this._rootElement
            ;(i = zo(t)), Po(i, t.getBoundingClientRect())
          }
          return (
            ao(i.style, {
              pointerEvents: 'none',
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: `${this._config.zIndex || 1e3}`,
            }),
            co(i, !1),
            i.classList.add('cdk-drag-preview'),
            i.setAttribute('dir', this._direction),
            e &&
              (Array.isArray(e)
                ? e.forEach((t) => i.classList.add(t))
                : i.classList.add(e)),
            i
          )
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve()
          const t = this._placeholder.getBoundingClientRect()
          this._preview.classList.add('cdk-drag-animating'),
            (this._preview.style.transform = Io(t.left, t.top))
          const e = (function (t) {
            const e = getComputedStyle(t),
              n = uo(e, 'transition-property'),
              i = n.find((t) => 'transform' === t || 'all' === t)
            if (!i) return 0
            const s = n.indexOf(i),
              o = uo(e, 'transition-duration'),
              r = uo(e, 'transition-delay')
            return ho(o[s]) + ho(r[s])
          })(this._preview)
          return 0 === e
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((t) => {
                    const n = (e) => {
                        ;(!e ||
                          (e.target === this._preview &&
                            'transform' === e.propertyName)) &&
                          (this._preview.removeEventListener(
                            'transitionend',
                            n
                          ),
                          t(),
                          clearTimeout(i))
                      },
                      i = setTimeout(n, 1.5 * e)
                    this._preview.addEventListener('transitionend', n)
                  })
              )
        }
        _createPlaceholderElement() {
          const t = this._placeholderTemplate,
            e = t ? t.template : null
          let n
          return (
            e
              ? ((this._placeholderRef = t.viewContainer.createEmbeddedView(
                  e,
                  t.context
                )),
                this._placeholderRef.detectChanges(),
                (n = ko(this._placeholderRef, this._document)))
              : (n = zo(this._rootElement)),
            n.classList.add('cdk-drag-placeholder'),
            n
          )
        }
        _getPointerPositionInElement(t, e) {
          const n = this._rootElement.getBoundingClientRect(),
            i = t === this._rootElement ? null : t,
            s = i ? i.getBoundingClientRect() : n,
            o = Do(e) ? e.targetTouches[0] : e,
            r = this._getViewportScrollPosition()
          return {
            x: s.left - n.left + (o.pageX - s.left - r.left),
            y: s.top - n.top + (o.pageY - s.top - r.top),
          }
        }
        _getPointerPositionOnPage(t) {
          const e = this._getViewportScrollPosition(),
            n = Do(t)
              ? t.touches[0] || t.changedTouches[0] || { pageX: 0, pageY: 0 }
              : t,
            i = n.pageX - e.left,
            s = n.pageY - e.top
          if (this._ownerSVGElement) {
            const t = this._ownerSVGElement.getScreenCTM()
            if (t) {
              const e = this._ownerSVGElement.createSVGPoint()
              return (e.x = i), (e.y = s), e.matrixTransform(t.inverse())
            }
          }
          return { x: i, y: s }
        }
        _getConstrainedPointerPosition(t) {
          const e = this._dropContainer ? this._dropContainer.lockAxis : null
          let { x: n, y: i } = this.constrainPosition
            ? this.constrainPosition(t, this)
            : t
          if (
            ('x' === this.lockAxis || 'x' === e
              ? (i = this._pickupPositionOnPage.y)
              : ('y' !== this.lockAxis && 'y' !== e) ||
                (n = this._pickupPositionOnPage.x),
            this._boundaryRect)
          ) {
            const { x: t, y: e } = this._pickupPositionInElement,
              s = this._boundaryRect,
              o = this._previewRect,
              r = s.top + e,
              a = s.bottom - (o.height - e)
            ;(n = xo(n, s.left + t, s.right - (o.width - t))), (i = xo(i, r, a))
          }
          return { x: n, y: i }
        }
        _updatePointerDirectionDelta(t) {
          const { x: e, y: n } = t,
            i = this._pointerDirectionDelta,
            s = this._pointerPositionAtLastDirectionChange,
            o = Math.abs(e - s.x),
            r = Math.abs(n - s.y)
          return (
            o > this._config.pointerDirectionChangeThreshold &&
              ((i.x = e > s.x ? 1 : -1), (s.x = e)),
            r > this._config.pointerDirectionChangeThreshold &&
              ((i.y = n > s.y ? 1 : -1), (s.y = n)),
            i
          )
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return
          const t = this._handles.length > 0 || !this.isDragging()
          t !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = t), co(this._rootElement, t))
        }
        _removeRootElementListeners(t) {
          t.removeEventListener('mousedown', this._pointerDown, wo),
            t.removeEventListener('touchstart', this._pointerDown, Oo)
        }
        _applyRootElementTransform(t, e) {
          const n = Io(t, e)
          null == this._initialTransform &&
            (this._initialTransform = this._rootElement.style.transform || ''),
            (this._rootElement.style.transform = this._initialTransform
              ? n + ' ' + this._initialTransform
              : n)
        }
        _getDragDistance(t) {
          const e = this._pickupPositionOnPage
          return e ? { x: t.x - e.x, y: t.y - e.y } : { x: 0, y: 0 }
        }
        _cleanupCachedDimensions() {
          ;(this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear()
        }
        _containInsideBoundaryOnResize() {
          let { x: t, y: e } = this._passiveTransform
          if (
            (0 === t && 0 === e) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return
          const n = this._boundaryElement.getBoundingClientRect(),
            i = this._rootElement.getBoundingClientRect()
          if (
            (0 === n.width && 0 === n.height) ||
            (0 === i.width && 0 === i.height)
          )
            return
          const s = n.left - i.left,
            o = i.right - n.right,
            r = n.top - i.top,
            a = i.bottom - n.bottom
          n.width > i.width ? (s > 0 && (t += s), o > 0 && (t -= o)) : (t = 0),
            n.height > i.height
              ? (r > 0 && (e += r), a > 0 && (e -= a))
              : (e = 0),
            (t === this._passiveTransform.x &&
              e === this._passiveTransform.y) ||
              this.setFreeDragPosition({ y: e, x: t })
        }
        _getDragStartDelay(t) {
          const e = this.dragStartDelay
          return 'number' == typeof e ? e : Do(t) ? e.touch : e ? e.mouse : 0
        }
        _updateOnScroll(t) {
          const e = this._parentPositions.handleScroll(t)
          if (e) {
            const n = t.target
            this._boundaryRect &&
              (n === this._document ||
                (n !== this._boundaryElement &&
                  n.contains(this._boundaryElement))) &&
              mo(this._boundaryRect, e.top, e.left),
              (this._pickupPositionOnPage.x += e.left),
              (this._pickupPositionOnPage.y += e.top),
              this._dropContainer ||
                ((this._activeTransform.x -= e.left),
                (this._activeTransform.y -= e.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y
                ))
          }
        }
        _getViewportScrollPosition() {
          const t = this._parentPositions.positions.get(this._document)
          return t
            ? t.scrollPosition
            : this._viewportRuler.getViewportScrollPosition()
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = Object(v.c)(this._rootElement)),
            this._cachedShadowRoot
          )
        }
      }
      function Io(t, e) {
        return `translate3d(${Math.round(t)}px, ${Math.round(e)}px, 0)`
      }
      function xo(t, e, n) {
        return Math.max(e, Math.min(n, t))
      }
      function To(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
      }
      function Do(t) {
        return 't' === t.type[0]
      }
      function ko(t, e) {
        const n = t.rootNodes
        if (1 === n.length && n[0].nodeType === e.ELEMENT_NODE) return n[0]
        const i = e.createElement('div')
        return n.forEach((t) => i.appendChild(t)), i
      }
      function Po(t, e) {
        ;(t.style.width = `${e.width}px`),
          (t.style.height = `${e.height}px`),
          (t.style.transform = Io(e.left, e.top))
      }
      function Ao(t, e) {
        return Math.max(0, Math.min(e, t))
      }
      class Eo {
        constructor(t, e, n, i, s) {
          ;(this._dragDropRegistry = e),
            (this._ngZone = i),
            (this._viewportRuler = s),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.autoScrollStep = 2),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new m.a()),
            (this.entered = new m.a()),
            (this.exited = new m.a()),
            (this.dropped = new m.a()),
            (this.sorted = new m.a()),
            (this._isDragging = !1),
            (this._itemPositions = []),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 }),
            (this._draggables = []),
            (this._siblings = []),
            (this._orientation = 'vertical'),
            (this._activeSiblings = new Set()),
            (this._direction = 'ltr'),
            (this._viewportScrollSubscription = te.a.EMPTY),
            (this._verticalScrollDirection = 0),
            (this._horizontalScrollDirection = 0),
            (this._stopScrollTimers = new m.a()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function (t = 0, e = io.a) {
                  return (
                    (!Object(so.a)(t) || t < 0) && (t = 0),
                    (e && 'function' == typeof e.schedule) || (e = io.a),
                    new st.a(
                      (n) => (
                        n.add(
                          e.schedule(oo, t, {
                            subscriber: n,
                            counter: 0,
                            period: t,
                          })
                        ),
                        n
                      )
                    )
                  )
                })(0, ro.a)
                  .pipe(Object(b.a)(this._stopScrollTimers))
                  .subscribe(() => {
                    const t = this._scrollNode,
                      e = this.autoScrollStep
                    1 === this._verticalScrollDirection
                      ? Vo(t, -e)
                      : 2 === this._verticalScrollDirection && Vo(t, e),
                      1 === this._horizontalScrollDirection
                        ? Bo(t, -e)
                        : 2 === this._horizontalScrollDirection && Bo(t, e)
                  })
            }),
            (this.element = Object(L.e)(t)),
            (this._document = n),
            this.withScrollableParents([this.element]),
            e.registerDropContainer(this),
            (this._parentPositions = new fo(n, s))
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this)
        }
        isDragging() {
          return this._isDragging
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings()
        }
        enter(t, e, n, i) {
          let s
          this._draggingStarted(),
            null == i
              ? ((s = this.sortingDisabled ? this._draggables.indexOf(t) : -1),
                -1 === s &&
                  (s = this._getItemIndexFromPointerPosition(t, e, n)))
              : (s = i)
          const o = this._activeDraggables,
            r = o.indexOf(t),
            a = t.getPlaceholderElement()
          let c = o[s]
          if (
            (c === t && (c = o[s + 1]),
            r > -1 && o.splice(r, 1),
            c && !this._dragDropRegistry.isDragging(c))
          ) {
            const e = c.getRootElement()
            e.parentElement.insertBefore(a, e), o.splice(s, 0, t)
          } else if (this._shouldEnterAsFirstChild(e, n)) {
            const e = o[0].getRootElement()
            e.parentNode.insertBefore(a, e), o.unshift(t)
          } else Object(L.e)(this.element).appendChild(a), o.push(t)
          ;(a.style.transform = ''),
            this._cacheItemPositions(),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item: t,
              container: this,
              currentIndex: this.getItemIndex(t),
            })
        }
        exit(t) {
          this._reset(), this.exited.next({ item: t, container: this })
        }
        drop(t, e, n, i, s, o) {
          this._reset(),
            this.dropped.next({
              item: t,
              currentIndex: e,
              previousIndex: n,
              container: this,
              previousContainer: i,
              isPointerOverContainer: s,
              distance: o,
            })
        }
        withItems(t) {
          const e = this._draggables
          return (
            (this._draggables = t),
            t.forEach((t) => t._withDropContainer(this)),
            this.isDragging() &&
              (e.filter((t) => t.isDragging()).every((e) => -1 === t.indexOf(e))
                ? this._reset()
                : this._cacheItems()),
            this
          )
        }
        withDirection(t) {
          return (this._direction = t), this
        }
        connectedTo(t) {
          return (this._siblings = t.slice()), this
        }
        withOrientation(t) {
          return (this._orientation = t), this
        }
        withScrollableParents(t) {
          const e = Object(L.e)(this.element)
          return (
            (this._scrollableElements =
              -1 === t.indexOf(e) ? [e, ...t] : t.slice()),
            this
          )
        }
        getScrollableParents() {
          return this._scrollableElements
        }
        getItemIndex(t) {
          return this._isDragging
            ? jo(
                'horizontal' === this._orientation && 'rtl' === this._direction
                  ? this._itemPositions.slice().reverse()
                  : this._itemPositions,
                (e) => e.drag === t
              )
            : this._draggables.indexOf(t)
        }
        isReceiving() {
          return this._activeSiblings.size > 0
        }
        _sortItem(t, e, n, i) {
          if (
            this.sortingDisabled ||
            !this._clientRect ||
            !bo(this._clientRect, 0.05, e, n)
          )
            return
          const s = this._itemPositions,
            o = this._getItemIndexFromPointerPosition(t, e, n, i)
          if (-1 === o && s.length > 0) return
          const r = 'horizontal' === this._orientation,
            a = jo(s, (e) => e.drag === t),
            c = s[o],
            l = c.clientRect,
            h = a > o ? 1 : -1,
            d = this._getItemOffsetPx(s[a].clientRect, l, h),
            u = this._getSiblingOffsetPx(a, s, h),
            p = s.slice()
          !(function (t, e, n) {
            const i = Ao(e, t.length - 1),
              s = Ao(n, t.length - 1)
            if (i === s) return
            const o = t[i],
              r = s < i ? -1 : 1
            for (let a = i; a !== s; a += r) t[a] = t[a + r]
            t[s] = o
          })(s, a, o),
            this.sorted.next({
              previousIndex: a,
              currentIndex: o,
              container: this,
              item: t,
            }),
            s.forEach((e, n) => {
              if (p[n] === e) return
              const i = e.drag === t,
                s = i ? d : u,
                o = i ? t.getPlaceholderElement() : e.drag.getRootElement()
              ;(e.offset += s),
                r
                  ? ((o.style.transform = `translate3d(${Math.round(
                      e.offset
                    )}px, 0, 0)`),
                    mo(e.clientRect, 0, s))
                  : ((o.style.transform = `translate3d(0, ${Math.round(
                      e.offset
                    )}px, 0)`),
                    mo(e.clientRect, s, 0))
            }),
            (this._previousSwap.overlaps = go(l, e, n)),
            (this._previousSwap.drag = c.drag),
            (this._previousSwap.delta = r ? i.x : i.y)
        }
        _startScrollingIfNecessary(t, e) {
          if (this.autoScrollDisabled) return
          let n,
            i = 0,
            s = 0
          if (
            (this._parentPositions.positions.forEach((o, r) => {
              r !== this._document &&
                o.clientRect &&
                !n &&
                bo(o.clientRect, 0.05, t, e) &&
                (([i, s] = (function (t, e, n, i) {
                  const s = Lo(e, i),
                    o = Ro(e, n)
                  let r = 0,
                    a = 0
                  if (s) {
                    const e = t.scrollTop
                    1 === s
                      ? e > 0 && (r = 1)
                      : t.scrollHeight - e > t.clientHeight && (r = 2)
                  }
                  if (o) {
                    const e = t.scrollLeft
                    1 === o
                      ? e > 0 && (a = 1)
                      : t.scrollWidth - e > t.clientWidth && (a = 2)
                  }
                  return [r, a]
                })(r, o.clientRect, t, e)),
                (i || s) && (n = r))
            }),
            !i && !s)
          ) {
            const {
                width: o,
                height: r,
              } = this._viewportRuler.getViewportSize(),
              a = { width: o, height: r, top: 0, right: o, bottom: r, left: 0 }
            ;(i = Lo(a, e)), (s = Ro(a, t)), (n = window)
          }
          !n ||
            (i === this._verticalScrollDirection &&
              s === this._horizontalScrollDirection &&
              n === this._scrollNode) ||
            ((this._verticalScrollDirection = i),
            (this._horizontalScrollDirection = s),
            (this._scrollNode = n),
            (i || s) && n
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling())
        }
        _stopScrolling() {
          this._stopScrollTimers.next()
        }
        _draggingStarted() {
          const t = Object(L.e)(this.element).style
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              t.msScrollSnapType || t.scrollSnapType || ''),
            (t.scrollSnapType = t.msScrollSnapType = 'none'),
            this._cacheItems(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents()
        }
        _cacheParentPositions() {
          const t = Object(L.e)(this.element)
          this._parentPositions.cache(this._scrollableElements),
            (this._clientRect = this._parentPositions.positions.get(
              t
            ).clientRect)
        }
        _cacheItemPositions() {
          const t = 'horizontal' === this._orientation
          this._itemPositions = this._activeDraggables
            .map((t) => {
              const e = t.getVisibleElement()
              return { drag: t, offset: 0, clientRect: po(e) }
            })
            .sort((e, n) =>
              t
                ? e.clientRect.left - n.clientRect.left
                : e.clientRect.top - n.clientRect.top
            )
        }
        _reset() {
          this._isDragging = !1
          const t = Object(L.e)(this.element).style
          ;(t.scrollSnapType = t.msScrollSnapType = this._initialScrollSnap),
            this._activeDraggables.forEach((t) => {
              const e = t.getRootElement()
              e && (e.style.transform = '')
            }),
            this._siblings.forEach((t) => t._stopReceiving(this)),
            (this._activeDraggables = []),
            (this._itemPositions = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear()
        }
        _getSiblingOffsetPx(t, e, n) {
          const i = 'horizontal' === this._orientation,
            s = e[t].clientRect,
            o = e[t + -1 * n]
          let r = s[i ? 'width' : 'height'] * n
          if (o) {
            const t = i ? 'left' : 'top',
              e = i ? 'right' : 'bottom'
            ;-1 === n
              ? (r -= o.clientRect[t] - s[e])
              : (r += s[t] - o.clientRect[e])
          }
          return r
        }
        _getItemOffsetPx(t, e, n) {
          const i = 'horizontal' === this._orientation
          let s = i ? e.left - t.left : e.top - t.top
          return (
            -1 === n && (s += i ? e.width - t.width : e.height - t.height), s
          )
        }
        _shouldEnterAsFirstChild(t, e) {
          if (!this._activeDraggables.length) return !1
          const n = this._itemPositions,
            i = 'horizontal' === this._orientation
          if (n[0].drag !== this._activeDraggables[0]) {
            const s = n[n.length - 1].clientRect
            return i ? t >= s.right : e >= s.bottom
          }
          {
            const s = n[0].clientRect
            return i ? t <= s.left : e <= s.top
          }
        }
        _getItemIndexFromPointerPosition(t, e, n, i) {
          const s = 'horizontal' === this._orientation,
            o = jo(this._itemPositions, ({ drag: o, clientRect: r }, a, c) => {
              if (o === t) return c.length < 2
              if (i) {
                const t = s ? i.x : i.y
                if (
                  o === this._previousSwap.drag &&
                  this._previousSwap.overlaps &&
                  t === this._previousSwap.delta
                )
                  return !1
              }
              return s
                ? e >= Math.floor(r.left) && e < Math.floor(r.right)
                : n >= Math.floor(r.top) && n < Math.floor(r.bottom)
            })
          return -1 !== o && this.sortPredicate(o, t, this) ? o : -1
        }
        _cacheItems() {
          ;(this._activeDraggables = this._draggables.slice()),
            this._cacheItemPositions(),
            this._cacheParentPositions()
        }
        _isOverContainer(t, e) {
          return null != this._clientRect && go(this._clientRect, t, e)
        }
        _getSiblingContainerFromPosition(t, e, n) {
          return this._siblings.find((i) => i._canReceive(t, e, n))
        }
        _canReceive(t, e, n) {
          if (
            !this._clientRect ||
            !go(this._clientRect, e, n) ||
            !this.enterPredicate(t, this)
          )
            return !1
          const i = this._getShadowRoot().elementFromPoint(e, n)
          if (!i) return !1
          const s = Object(L.e)(this.element)
          return i === s || s.contains(i)
        }
        _startReceiving(t, e) {
          const n = this._activeSiblings
          !n.has(t) &&
            e.every(
              (t) =>
                this.enterPredicate(t, this) || this._draggables.indexOf(t) > -1
            ) &&
            (n.add(t),
            this._cacheParentPositions(),
            this._listenToScrollEvents())
        }
        _stopReceiving(t) {
          this._activeSiblings.delete(t),
            this._viewportScrollSubscription.unsubscribe()
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
            (t) => {
              if (this.isDragging()) {
                const e = this._parentPositions.handleScroll(t)
                e &&
                  (this._itemPositions.forEach(({ clientRect: t }) => {
                    mo(t, e.top, e.left)
                  }),
                  this._itemPositions.forEach(({ drag: t }) => {
                    this._dragDropRegistry.isDragging(t) &&
                      t._sortFromLastPointerPosition()
                  }))
              } else this.isReceiving() && this._cacheParentPositions()
            }
          )
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const t = Object(v.c)(Object(L.e)(this.element))
            this._cachedShadowRoot = t || this._document
          }
          return this._cachedShadowRoot
        }
        _notifyReceivingSiblings() {
          const t = this._activeDraggables.filter((t) => t.isDragging())
          this._siblings.forEach((e) => e._startReceiving(this, t))
        }
      }
      function jo(t, e) {
        for (let n = 0; n < t.length; n++) if (e(t[n], n, t)) return n
        return -1
      }
      function Vo(t, e) {
        t === window ? t.scrollBy(0, e) : (t.scrollTop += e)
      }
      function Bo(t, e) {
        t === window ? t.scrollBy(e, 0) : (t.scrollLeft += e)
      }
      function Lo(t, e) {
        const { top: n, bottom: i, height: s } = t,
          o = 0.05 * s
        return e >= n - o && e <= n + o ? 1 : e >= i - o && e <= i + o ? 2 : 0
      }
      function Ro(t, e) {
        const { left: n, right: i, width: s } = t,
          o = 0.05 * s
        return e >= n - o && e <= n + o ? 1 : e >= i - o && e <= i + o ? 2 : 0
      }
      const Mo = Object(v.e)({ passive: !1, capture: !0 })
      let Fo = (() => {
        class t {
          constructor(t, e) {
            ;(this._ngZone = t),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = []),
              (this._globalListeners = new Map()),
              (this._draggingPredicate = (t) => t.isDragging()),
              (this.pointerMove = new m.a()),
              (this.pointerUp = new m.a()),
              (this.scroll = new m.a()),
              (this._preventDefaultWhileDragging = (t) => {
                this._activeDragInstances.length > 0 && t.preventDefault()
              }),
              (this._persistentTouchmoveListener = (t) => {
                this._activeDragInstances.length > 0 &&
                  (this._activeDragInstances.some(this._draggingPredicate) &&
                    t.preventDefault(),
                  this.pointerMove.next(t))
              }),
              (this._document = e)
          }
          registerDropContainer(t) {
            this._dropInstances.has(t) || this._dropInstances.add(t)
          }
          registerDragItem(t) {
            this._dragInstances.add(t),
              1 === this._dragInstances.size &&
                this._ngZone.runOutsideAngular(() => {
                  this._document.addEventListener(
                    'touchmove',
                    this._persistentTouchmoveListener,
                    Mo
                  )
                })
          }
          removeDropContainer(t) {
            this._dropInstances.delete(t)
          }
          removeDragItem(t) {
            this._dragInstances.delete(t),
              this.stopDragging(t),
              0 === this._dragInstances.size &&
                this._document.removeEventListener(
                  'touchmove',
                  this._persistentTouchmoveListener,
                  Mo
                )
          }
          startDragging(t, e) {
            if (
              !(this._activeDragInstances.indexOf(t) > -1) &&
              (this._activeDragInstances.push(t),
              1 === this._activeDragInstances.length)
            ) {
              const t = e.type.startsWith('touch')
              this._globalListeners
                .set(t ? 'touchend' : 'mouseup', {
                  handler: (t) => this.pointerUp.next(t),
                  options: !0,
                })
                .set('scroll', {
                  handler: (t) => this.scroll.next(t),
                  options: !0,
                })
                .set('selectstart', {
                  handler: this._preventDefaultWhileDragging,
                  options: Mo,
                }),
                t ||
                  this._globalListeners.set('mousemove', {
                    handler: (t) => this.pointerMove.next(t),
                    options: Mo,
                  }),
                this._ngZone.runOutsideAngular(() => {
                  this._globalListeners.forEach((t, e) => {
                    this._document.addEventListener(e, t.handler, t.options)
                  })
                })
            }
          }
          stopDragging(t) {
            const e = this._activeDragInstances.indexOf(t)
            e > -1 &&
              (this._activeDragInstances.splice(e, 1),
              0 === this._activeDragInstances.length &&
                this._clearGlobalListeners())
          }
          isDragging(t) {
            return this._activeDragInstances.indexOf(t) > -1
          }
          ngOnDestroy() {
            this._dragInstances.forEach((t) => this.removeDragItem(t)),
              this._dropInstances.forEach((t) => this.removeDropContainer(t)),
              this._clearGlobalListeners(),
              this.pointerMove.complete(),
              this.pointerUp.complete()
          }
          _clearGlobalListeners() {
            this._globalListeners.forEach((t, e) => {
              this._document.removeEventListener(e, t.handler, t.options)
            }),
              this._globalListeners.clear()
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Zb(c.A), c.Zb(i.d))
          }),
          (t.ɵprov = Object(c.Lb)({
            factory: function () {
              return new t(Object(c.Zb)(c.A), Object(c.Zb)(i.d))
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      const No = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 }
      let $o = (() => {
        class t {
          constructor(t, e, n, i) {
            ;(this._document = t),
              (this._ngZone = e),
              (this._viewportRuler = n),
              (this._dragDropRegistry = i)
          }
          createDrag(t, e = No) {
            return new So(
              t,
              e,
              this._document,
              this._ngZone,
              this._viewportRuler,
              this._dragDropRegistry
            )
          }
          createDropList(t) {
            return new Eo(
              t,
              this._dragDropRegistry,
              this._document,
              this._ngZone,
              this._viewportRuler
            )
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Zb(i.d), c.Zb(c.A), c.Zb(Kt.g), c.Zb(Fo))
          }),
          (t.ɵprov = Object(c.Lb)({
            factory: function () {
              return new t(
                Object(c.Zb)(i.d),
                Object(c.Zb)(c.A),
                Object(c.Zb)(Kt.g),
                Object(c.Zb)(Fo)
              )
            },
            token: t,
            providedIn: 'root',
          })),
          t
        )
      })()
      const Ho = new c.r('CDK_DRAG_PARENT'),
        Uo = new c.r('CDK_DRAG_CONFIG'),
        Go = new c.r('CdkDropList'),
        Wo = new c.r('CdkDragHandle')
      let Qo = (() => {
        class t {
          constructor(t, e) {
            ;(this.element = t),
              (this._stateChanges = new m.a()),
              (this._disabled = !1),
              (this._parentDrag = e)
          }
          get disabled() {
            return this._disabled
          }
          set disabled(t) {
            ;(this._disabled = Object(L.c)(t)), this._stateChanges.next(this)
          }
          ngOnDestroy() {
            this._stateChanges.complete()
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Pb(c.l), c.Pb(Ho, 12))
          }),
          (t.ɵdir = c.Kb({
            type: t,
            selectors: [['', 'cdkDragHandle', '']],
            hostAttrs: [1, 'cdk-drag-handle'],
            inputs: { disabled: ['cdkDragHandleDisabled', 'disabled'] },
            features: [c.Ab([{ provide: Wo, useExisting: t }])],
          })),
          t
        )
      })()
      const Zo = new c.r('CdkDragPlaceholder'),
        Jo = new c.r('CdkDragPreview')
      let qo = (() => {
        class t {
          constructor(e, n, i, s, o, r, a, l, h, d, u) {
            ;(this.element = e),
              (this.dropContainer = n),
              (this._ngZone = s),
              (this._viewContainerRef = o),
              (this._dir = a),
              (this._changeDetectorRef = h),
              (this._selfHandle = d),
              (this._parentDrag = u),
              (this._destroyed = new m.a()),
              (this.started = new c.n()),
              (this.released = new c.n()),
              (this.ended = new c.n()),
              (this.entered = new c.n()),
              (this.exited = new c.n()),
              (this.dropped = new c.n()),
              (this.moved = new st.a((t) => {
                const e = this._dragRef.moved
                  .pipe(
                    Object(P.a)((t) => ({
                      source: this,
                      pointerPosition: t.pointerPosition,
                      event: t.event,
                      delta: t.delta,
                      distance: t.distance,
                    }))
                  )
                  .subscribe(t)
                return () => {
                  e.unsubscribe()
                }
              })),
              (this._dragRef = l.createDrag(e, {
                dragStartThreshold:
                  r && null != r.dragStartThreshold ? r.dragStartThreshold : 5,
                pointerDirectionChangeThreshold:
                  r && null != r.pointerDirectionChangeThreshold
                    ? r.pointerDirectionChangeThreshold
                    : 5,
                zIndex: null == r ? void 0 : r.zIndex,
              })),
              (this._dragRef.data = this),
              t._dragInstances.push(this),
              r && this._assignDefaults(r),
              n &&
                (this._dragRef._withDropContainer(n._dropListRef),
                n.addItem(this)),
              this._syncInputs(this._dragRef),
              this._handleEvents(this._dragRef)
          }
          get disabled() {
            return (
              this._disabled ||
              (this.dropContainer && this.dropContainer.disabled)
            )
          }
          set disabled(t) {
            ;(this._disabled = Object(L.c)(t)),
              (this._dragRef.disabled = this._disabled)
          }
          getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement()
          }
          getRootElement() {
            return this._dragRef.getRootElement()
          }
          reset() {
            this._dragRef.reset()
          }
          getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition()
          }
          ngAfterViewInit() {
            this._ngZone.onStable
              .pipe(Object(ne.a)(1), Object(b.a)(this._destroyed))
              .subscribe(() => {
                this._updateRootElement(),
                  this._handles.changes
                    .pipe(
                      Object(f.a)(this._handles),
                      Object(ee.a)((t) => {
                        const e = t
                          .filter((t) => t._parentDrag === this)
                          .map((t) => t.element)
                        this._selfHandle &&
                          this.rootElementSelector &&
                          e.push(this.element),
                          this._dragRef.withHandles(e)
                      }),
                      Object(Yt.a)((t) =>
                        Object(V.a)(
                          ...t.map((t) => t._stateChanges.pipe(Object(f.a)(t)))
                        )
                      ),
                      Object(b.a)(this._destroyed)
                    )
                    .subscribe((t) => {
                      const e = this._dragRef,
                        n = t.element.nativeElement
                      t.disabled ? e.disableHandle(n) : e.enableHandle(n)
                    }),
                  this.freeDragPosition &&
                    this._dragRef.setFreeDragPosition(this.freeDragPosition)
              })
          }
          ngOnChanges(t) {
            const e = t.rootElementSelector,
              n = t.freeDragPosition
            e && !e.firstChange && this._updateRootElement(),
              n &&
                !n.firstChange &&
                this.freeDragPosition &&
                this._dragRef.setFreeDragPosition(this.freeDragPosition)
          }
          ngOnDestroy() {
            this.dropContainer && this.dropContainer.removeItem(this)
            const e = t._dragInstances.indexOf(this)
            e > -1 && t._dragInstances.splice(e, 1),
              this._destroyed.next(),
              this._destroyed.complete(),
              this._dragRef.dispose()
          }
          _updateRootElement() {
            const t = this.element.nativeElement,
              e = this.rootElementSelector ? Xo(t, this.rootElementSelector) : t
            this._dragRef.withRootElement(e || t)
          }
          _getBoundaryElement() {
            const t = this.boundaryElement
            return t
              ? 'string' == typeof t
                ? Xo(this.element.nativeElement, t)
                : Object(L.e)(t)
              : null
          }
          _syncInputs(e) {
            e.beforeStarted.subscribe(() => {
              if (!e.isDragging()) {
                const t = this._dir,
                  n = this.dragStartDelay,
                  i = this._placeholderTemplate
                    ? {
                        template: this._placeholderTemplate.templateRef,
                        context: this._placeholderTemplate.data,
                        viewContainer: this._viewContainerRef,
                      }
                    : null,
                  s = this._previewTemplate
                    ? {
                        template: this._previewTemplate.templateRef,
                        context: this._previewTemplate.data,
                        matchSize: this._previewTemplate.matchSize,
                        viewContainer: this._viewContainerRef,
                      }
                    : null
                ;(e.disabled = this.disabled),
                  (e.lockAxis = this.lockAxis),
                  (e.dragStartDelay =
                    'object' == typeof n && n ? n : Object(L.f)(n)),
                  (e.constrainPosition = this.constrainPosition),
                  (e.previewClass = this.previewClass),
                  e
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(i)
                    .withPreviewTemplate(s),
                  t && e.withDirection(t.value)
              }
            }),
              e.beforeStarted.pipe(Object(ne.a)(1)).subscribe(() => {
                var n, i
                if (this._parentDrag)
                  return void e.withParent(this._parentDrag._dragRef)
                let s = this.element.nativeElement.parentElement
                for (; s; ) {
                  if (
                    null === (n = s.classList) || void 0 === n
                      ? void 0
                      : n.contains('cdk-drag')
                  ) {
                    e.withParent(
                      (null ===
                        (i = t._dragInstances.find(
                          (t) => t.element.nativeElement === s
                        )) || void 0 === i
                        ? void 0
                        : i._dragRef) || null
                    )
                    break
                  }
                  s = s.parentElement
                }
              })
          }
          _handleEvents(t) {
            t.started.subscribe(() => {
              this.started.emit({ source: this }),
                this._changeDetectorRef.markForCheck()
            }),
              t.released.subscribe(() => {
                this.released.emit({ source: this })
              }),
              t.ended.subscribe((t) => {
                this.ended.emit({ source: this, distance: t.distance }),
                  this._changeDetectorRef.markForCheck()
              }),
              t.entered.subscribe((t) => {
                this.entered.emit({
                  container: t.container.data,
                  item: this,
                  currentIndex: t.currentIndex,
                })
              }),
              t.exited.subscribe((t) => {
                this.exited.emit({ container: t.container.data, item: this })
              }),
              t.dropped.subscribe((t) => {
                this.dropped.emit({
                  previousIndex: t.previousIndex,
                  currentIndex: t.currentIndex,
                  previousContainer: t.previousContainer.data,
                  container: t.container.data,
                  isPointerOverContainer: t.isPointerOverContainer,
                  item: this,
                  distance: t.distance,
                })
              })
          }
          _assignDefaults(t) {
            const {
              lockAxis: e,
              dragStartDelay: n,
              constrainPosition: i,
              previewClass: s,
              boundaryElement: o,
              draggingDisabled: r,
              rootElementSelector: a,
            } = t
            ;(this.disabled = null != r && r),
              (this.dragStartDelay = n || 0),
              e && (this.lockAxis = e),
              i && (this.constrainPosition = i),
              s && (this.previewClass = s),
              o && (this.boundaryElement = o),
              a && (this.rootElementSelector = a)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              c.Pb(c.l),
              c.Pb(Go, 12),
              c.Pb(i.d),
              c.Pb(c.A),
              c.Pb(c.Q),
              c.Pb(Uo, 8),
              c.Pb(r.c, 8),
              c.Pb($o),
              c.Pb(c.h),
              c.Pb(Wo, 10),
              c.Pb(Ho, 12)
            )
          }),
          (t.ɵdir = c.Kb({
            type: t,
            selectors: [['', 'cdkDrag', '']],
            contentQueries: function (t, e, n) {
              if (
                (1 & t && (c.Ib(n, Jo, 1), c.Ib(n, Zo, 1), c.Ib(n, Wo, 1)),
                2 & t)
              ) {
                let t
                c.qc((t = c.dc())) && (e._previewTemplate = t.first),
                  c.qc((t = c.dc())) && (e._placeholderTemplate = t.first),
                  c.qc((t = c.dc())) && (e._handles = t)
              }
            },
            hostAttrs: [1, 'cdk-drag'],
            hostVars: 4,
            hostBindings: function (t, e) {
              2 & t &&
                c.Hb('cdk-drag-disabled', e.disabled)(
                  'cdk-drag-dragging',
                  e._dragRef.isDragging()
                )
            },
            inputs: {
              disabled: ['cdkDragDisabled', 'disabled'],
              dragStartDelay: ['cdkDragStartDelay', 'dragStartDelay'],
              lockAxis: ['cdkDragLockAxis', 'lockAxis'],
              constrainPosition: [
                'cdkDragConstrainPosition',
                'constrainPosition',
              ],
              previewClass: ['cdkDragPreviewClass', 'previewClass'],
              boundaryElement: ['cdkDragBoundary', 'boundaryElement'],
              rootElementSelector: [
                'cdkDragRootElement',
                'rootElementSelector',
              ],
              data: ['cdkDragData', 'data'],
              freeDragPosition: ['cdkDragFreeDragPosition', 'freeDragPosition'],
            },
            outputs: {
              started: 'cdkDragStarted',
              released: 'cdkDragReleased',
              ended: 'cdkDragEnded',
              entered: 'cdkDragEntered',
              exited: 'cdkDragExited',
              dropped: 'cdkDragDropped',
              moved: 'cdkDragMoved',
            },
            exportAs: ['cdkDrag'],
            features: [c.Ab([{ provide: Ho, useExisting: t }]), c.zb],
          })),
          (t._dragInstances = []),
          t
        )
      })()
      function Xo(t, e) {
        let n = t.parentElement
        for (; n; ) {
          if (n.matches ? n.matches(e) : n.msMatchesSelector(e)) return n
          n = n.parentElement
        }
        return null
      }
      let Ko = (() => {
        class t {}
        return (
          (t.ɵmod = c.Nb({ type: t })),
          (t.ɵinj = c.Mb({
            factory: function (e) {
              return new (e || t)()
            },
            providers: [$o],
            imports: [Kt.b],
          })),
          t
        )
      })()
      n('jhN1')
      let Yo = (() => {
        class t {}
        return (
          (t.ɵmod = c.Nb({ type: t })),
          (t.ɵinj = c.Mb({
            factory: function (e) {
              return new (e || t)()
            },
            imports: [[i.c]],
          })),
          t
        )
      })()
      const tr = ['*'],
        er = ['imgRef']
      function nr(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'li', 9),
            c.cc('click', function () {
              return e.$implicit.onClick()
            }),
            c.Qb(1, 'span', 10),
            c.Ub()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = c.fc()
          c.Hb(
            'ant-image-preview-operations-operation-disabled',
            n.zoomOutDisabled && 'zoomOut' === t.type
          ),
            c.Bb(1),
            c.lc('nzType', t.icon)
        }
      }
      function ir(t, e) {
        if ((1 & t && c.Qb(0, 'img', 12, 13), 2 & t)) {
          const t = c.fc().$implicit,
            e = c.fc()
          c.xc('width', t.width)('height', t.height)(
            'transform',
            e.previewImageTransform
          ),
            c.Cb('src', t.src, c.uc)('alt', t.alt)
        }
      }
      function sr(t, e) {
        if ((1 & t && (c.Tb(0), c.Ac(1, ir, 2, 8, 'img', 11), c.Sb()), 2 & t)) {
          const t = e.index,
            n = c.fc()
          c.Bb(1), c.lc('ngIf', n.index === t)
        }
      }
      function or(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Tb(0),
            c.Vb(1, 'div', 14),
            c.cc('click', function (e) {
              return c.sc(t), c.fc().onSwitchLeft(e)
            }),
            c.Qb(2, 'span', 15),
            c.Ub(),
            c.Vb(3, 'div', 16),
            c.cc('click', function (e) {
              return c.sc(t), c.fc().onSwitchRight(e)
            }),
            c.Qb(4, 'span', 17),
            c.Ub(),
            c.Sb()
        }
        if (2 & t) {
          const t = c.fc()
          c.Bb(1),
            c.Hb('ant-image-preview-switch-left-disabled', t.index <= 0),
            c.Bb(2),
            c.Hb(
              'ant-image-preview-switch-right-disabled',
              t.index >= t.images.length - 1
            )
        }
      }
      let rr = (() => {
        class t {
          constructor() {
            this.images = []
          }
          addImage(t) {
            this.images.push(t)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵcmp = c.Jb({
            type: t,
            selectors: [['nz-image-group']],
            exportAs: ['nzImageGroup'],
            ngContentSelectors: tr,
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && (c.kc(), c.jc(0))
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        )
      })()
      const ar = 'image'
      class cr {
        constructor() {
          ;(this.nzKeyboard = !0),
            (this.nzNoAnimation = !1),
            (this.nzMaskClosable = !0),
            (this.nzCloseOnNavigation = !0)
        }
      }
      class lr {
        constructor(t, e, n) {
          ;(this.previewInstance = t),
            (this.config = e),
            (this.overlayRef = n),
            n
              .keydownEvents()
              .pipe(
                Object(z.a)(
                  (t) =>
                    this.config.nzKeyboard &&
                    t.keyCode === B.f &&
                    !Object(B.p)(t)
                )
              )
              .subscribe((t) => {
                t.preventDefault(), this.close()
              }),
            n.detachments().subscribe(() => {
              this.overlayRef.dispose()
            }),
            t.containerClick.pipe(Object(ne.a)(1)).subscribe(() => {
              this.close()
            }),
            t.closeClick.pipe(Object(ne.a)(1)).subscribe(() => {
              this.close()
            }),
            t.animationStateChanged
              .pipe(
                Object(z.a)(
                  (t) => 'done' === t.phaseName && 'leave' === t.toState
                ),
                Object(ne.a)(1)
              )
              .subscribe(() => {
                this.dispose()
              })
        }
        switchTo(t) {
          this.previewInstance.switchTo(t)
        }
        next() {
          this.previewInstance.next()
        }
        prev() {
          this.previewInstance.prev()
        }
        close() {
          this.previewInstance.startLeaveAnimation()
        }
        dispose() {
          this.overlayRef.dispose()
        }
      }
      function hr(t, e, n) {
        const i = t + e,
          s = (e - n) / 2
        let o = null
        return (
          e > n
            ? (t > 0 && (o = s), t < 0 && i < n && (o = -s))
            : (t < 0 || i > n) && (o = t < 0 ? s : -s),
          o
        )
      }
      const dr = { x: 0, y: 0 }
      let ur = (() => {
          class t {
            constructor(t, e, n, i) {
              var s, o
              ;(this.cdr = t),
                (this.nzConfigService = e),
                (this.config = n),
                (this.overlayRef = i),
                (this.images = []),
                (this.index = 0),
                (this.isDragging = !1),
                (this.visible = !0),
                (this.animationState = 'enter'),
                (this.animationStateChanged = new c.n()),
                (this.previewImageTransform = ''),
                (this.previewImageWrapperTransform = ''),
                (this.operations = [
                  {
                    icon: 'close',
                    onClick: () => {
                      this.onClose()
                    },
                    type: 'close',
                  },
                  {
                    icon: 'zoom-in',
                    onClick: () => {
                      this.onZoomIn()
                    },
                    type: 'zoomIn',
                  },
                  {
                    icon: 'zoom-out',
                    onClick: () => {
                      this.onZoomOut()
                    },
                    type: 'zoomOut',
                  },
                  {
                    icon: 'rotate-right',
                    onClick: () => {
                      this.onRotateRight()
                    },
                    type: 'rotateRight',
                  },
                  {
                    icon: 'rotate-left',
                    onClick: () => {
                      this.onRotateLeft()
                    },
                    type: 'rotateLeft',
                  },
                ]),
                (this.zoomOutDisabled = !1),
                (this.position = Object.assign({}, dr)),
                (this.containerClick = new c.n()),
                (this.closeClick = new c.n()),
                (this.destroy$ = new m.a()),
                (this.zoom =
                  null !== (s = this.config.nzZoom) && void 0 !== s ? s : 1),
                (this.rotate =
                  null !== (o = this.config.nzRotate) && void 0 !== o ? o : 0),
                this.updateZoomOutDisabled(),
                this.updatePreviewImageTransform(),
                this.updatePreviewImageWrapperTransform()
            }
            get animationDisabled() {
              var t
              return (
                null !== (t = this.config.nzNoAnimation) && void 0 !== t && t
              )
            }
            get maskClosable() {
              var t, e
              const n = this.nzConfigService.getConfigForComponent(ar) || {}
              return (
                null ===
                  (e =
                    null !== (t = this.config.nzMaskClosable) && void 0 !== t
                      ? t
                      : n.nzMaskClosable) ||
                void 0 === e ||
                e
              )
            }
            setImages(t) {
              ;(this.images = t), this.cdr.markForCheck()
            }
            switchTo(t) {
              ;(this.index = t), this.cdr.markForCheck()
            }
            next() {
              this.index < this.images.length - 1 &&
                (this.reset(),
                this.index++,
                this.updatePreviewImageTransform(),
                this.updatePreviewImageWrapperTransform(),
                this.updateZoomOutDisabled(),
                this.cdr.markForCheck())
            }
            prev() {
              this.index > 0 &&
                (this.reset(),
                this.index--,
                this.updatePreviewImageTransform(),
                this.updatePreviewImageWrapperTransform(),
                this.updateZoomOutDisabled(),
                this.cdr.markForCheck())
            }
            markForCheck() {
              this.cdr.markForCheck()
            }
            onClose() {
              this.closeClick.emit()
            }
            onZoomIn() {
              ;(this.zoom += 1),
                this.updatePreviewImageTransform(),
                this.updateZoomOutDisabled(),
                (this.position = Object.assign({}, dr))
            }
            onZoomOut() {
              this.zoom > 1 &&
                ((this.zoom -= 1),
                this.updatePreviewImageTransform(),
                this.updateZoomOutDisabled(),
                (this.position = Object.assign({}, dr)))
            }
            onRotateRight() {
              ;(this.rotate += 90), this.updatePreviewImageTransform()
            }
            onRotateLeft() {
              ;(this.rotate -= 90), this.updatePreviewImageTransform()
            }
            onSwitchLeft(t) {
              t.preventDefault(), t.stopPropagation(), this.prev()
            }
            onSwitchRight(t) {
              t.preventDefault(), t.stopPropagation(), this.next()
            }
            onContainerClick(t) {
              t.target === t.currentTarget &&
                this.maskClosable &&
                this.containerClick.emit()
            }
            onAnimationStart(t) {
              'enter' === t.toState
                ? this.setEnterAnimationClass()
                : 'leave' === t.toState && this.setLeaveAnimationClass(),
                this.animationStateChanged.emit(t)
            }
            onAnimationDone(t) {
              'enter' === t.toState
                ? this.setEnterAnimationClass()
                : 'leave' === t.toState && this.setLeaveAnimationClass(),
                this.animationStateChanged.emit(t)
            }
            startLeaveAnimation() {
              ;(this.animationState = 'leave'), this.cdr.markForCheck()
            }
            onDragStarted() {
              this.isDragging = !0
            }
            onDragReleased() {
              this.isDragging = !1
              const t = this.imageRef.nativeElement.offsetWidth * this.zoom,
                e = this.imageRef.nativeElement.offsetHeight * this.zoom,
                { left: n, top: i } = (function (t) {
                  const e = t.getBoundingClientRect(),
                    n = document.documentElement
                  return {
                    left:
                      e.left +
                      (window.pageXOffset || n.scrollLeft) -
                      (n.clientLeft || document.body.clientLeft || 0),
                    top:
                      e.top +
                      (window.pageYOffset || n.scrollTop) -
                      (n.clientTop || document.body.clientTop || 0),
                  }
                })(this.imageRef.nativeElement),
                { width: s, height: o } = {
                  width: document.documentElement.clientWidth,
                  height:
                    window.innerHeight || document.documentElement.clientHeight,
                },
                r = this.rotate % 180 != 0,
                a = (function (t) {
                  let e = {}
                  return (
                    t.width <= t.clientWidth &&
                      t.height <= t.clientHeight &&
                      (e = { x: 0, y: 0 }),
                    (t.width > t.clientWidth || t.height > t.clientHeight) &&
                      (e = {
                        x: hr(t.left, t.width, t.clientWidth),
                        y: hr(t.top, t.height, t.clientHeight),
                      }),
                    e
                  )
                })({
                  width: r ? e : t,
                  height: r ? t : e,
                  left: n,
                  top: i,
                  clientWidth: s,
                  clientHeight: o,
                })
              ;(Object(p.g)(a.x) || Object(p.g)(a.y)) &&
                (this.position = Object.assign(
                  Object.assign({}, this.position),
                  a
                ))
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
            updatePreviewImageTransform() {
              this.previewImageTransform = `scale3d(${this.zoom}, ${this.zoom}, 1) rotate(${this.rotate}deg)`
            }
            updatePreviewImageWrapperTransform() {
              this.previewImageWrapperTransform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`
            }
            updateZoomOutDisabled() {
              this.zoomOutDisabled = this.zoom <= 1
            }
            setEnterAnimationClass() {
              if (this.animationDisabled) return
              const t = this.overlayRef.backdropElement
              t &&
                (t.classList.add('ant-fade-enter'),
                t.classList.add('ant-fade-enter-active'))
            }
            setLeaveAnimationClass() {
              if (this.animationDisabled) return
              const t = this.overlayRef.backdropElement
              t &&
                (t.classList.add('ant-fade-leave'),
                t.classList.add('ant-fade-leave-active'))
            }
            reset() {
              ;(this.zoom = 1),
                (this.rotate = 0),
                (this.position = Object.assign({}, dr))
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.h), c.Pb(d.a), c.Pb(cr), c.Pb(a.g))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-image-preview']],
              viewQuery: function (t, e) {
                if ((1 & t && c.Gc(er, 1), 2 & t)) {
                  let t
                  c.qc((t = c.dc())) && (e.imageRef = t.first)
                }
              },
              hostAttrs: ['tabindex', '-1', 'role', 'document'],
              hostVars: 8,
              hostBindings: function (t, e) {
                1 & t &&
                  (c.yc('@fadeMotion.start', function (t) {
                    return e.onAnimationStart(t)
                  })('@fadeMotion.done', function (t) {
                    return e.onAnimationDone(t)
                  }),
                  c.cc('click', function (t) {
                    return e.onContainerClick(t)
                  })),
                  2 & t &&
                    (c.zc('@.disabled', e.config.nzNoAnimation)(
                      '@fadeMotion',
                      e.animationState
                    ),
                    c.xc('z-index', e.config.nzZIndex),
                    c.Hb('ant-image-preview-moving', e.isDragging)(
                      'ant-image-preview-wrap',
                      !0
                    ))
              },
              exportAs: ['nzImagePreview'],
              decls: 10,
              vars: 6,
              consts: [
                [1, 'ant-image-preview'],
                [
                  'tabindex',
                  '0',
                  'aria-hidden',
                  'true',
                  2,
                  'width',
                  '0',
                  'height',
                  '0',
                  'overflow',
                  'hidden',
                  'outline',
                  'none',
                ],
                [1, 'ant-image-preview-content'],
                [1, 'ant-image-preview-body'],
                [1, 'ant-image-preview-operations'],
                [
                  'class',
                  'ant-image-preview-operations-operation',
                  3,
                  'ant-image-preview-operations-operation-disabled',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  'cdkDrag',
                  '',
                  1,
                  'ant-image-preview-img-wrapper',
                  3,
                  'cdkDragFreeDragPosition',
                  'mousedown',
                  'cdkDragReleased',
                ],
                [4, 'ngFor', 'ngForOf'],
                [4, 'ngIf'],
                [1, 'ant-image-preview-operations-operation', 3, 'click'],
                [
                  'nz-icon',
                  '',
                  'nzTheme',
                  'outline',
                  1,
                  'ant-image-preview-operations-icon',
                  3,
                  'nzType',
                ],
                [
                  'cdkDragHandle',
                  '',
                  'class',
                  'ant-image-preview-img',
                  3,
                  'width',
                  'height',
                  'transform',
                  4,
                  'ngIf',
                ],
                ['cdkDragHandle', '', 1, 'ant-image-preview-img'],
                ['imgRef', ''],
                [1, 'ant-image-preview-switch-left', 3, 'click'],
                ['nz-icon', '', 'nzType', 'left', 'nzTheme', 'outline'],
                [1, 'ant-image-preview-switch-right', 3, 'click'],
                ['nz-icon', '', 'nzType', 'right', 'nzTheme', 'outline'],
              ],
              template: function (t, e) {
                1 & t &&
                  (c.Vb(0, 'div', 0),
                  c.Qb(1, 'div', 1),
                  c.Vb(2, 'div', 2),
                  c.Vb(3, 'div', 3),
                  c.Vb(4, 'ul', 4),
                  c.Ac(5, nr, 2, 3, 'li', 5),
                  c.Ub(),
                  c.Vb(6, 'div', 6),
                  c.cc('mousedown', function () {
                    return e.onDragStarted()
                  })('cdkDragReleased', function () {
                    return e.onDragReleased()
                  }),
                  c.Ac(7, sr, 2, 1, 'ng-container', 7),
                  c.Ub(),
                  c.Ac(8, or, 5, 4, 'ng-container', 8),
                  c.Ub(),
                  c.Ub(),
                  c.Qb(9, 'div', 1),
                  c.Ub()),
                  2 & t &&
                    (c.Bb(5),
                    c.lc('ngForOf', e.operations),
                    c.Bb(1),
                    c.xc('transform', e.previewImageWrapperTransform),
                    c.lc('cdkDragFreeDragPosition', e.position),
                    c.Bb(1),
                    c.lc('ngForOf', e.images),
                    c.Bb(1),
                    c.lc('ngIf', e.images.length > 1))
              },
              directives: [i.m, qo, i.n, g.b, Qo],
              encapsulation: 2,
              data: { animation: [T.b] },
              changeDetection: 0,
            })),
            t
          )
        })(),
        pr = (() => {
          class t {
            constructor(t, e, n, i) {
              ;(this.overlay = t),
                (this.injector = e),
                (this.nzConfigService = n),
                (this.directionality = i)
            }
            preview(t, e) {
              return this.display(t, e)
            }
            display(t, e) {
              const n = Object.assign(
                  Object.assign({}, new cr()),
                  null != e ? e : {}
                ),
                i = this.createOverlay(n),
                s = this.attachPreviewComponent(i, n)
              s.setImages(t)
              const o = new lr(s, n, i)
              return (s.previewRef = o), o
            }
            attachPreviewComponent(t, e) {
              const n = c.s.create({
                  parent: this.injector,
                  providers: [
                    { provide: a.g, useValue: t },
                    { provide: cr, useValue: e },
                  ],
                }),
                i = new ue.b(ur, null, n)
              return t.attach(i).instance
            }
            createOverlay(t) {
              var e, n
              const i = this.nzConfigService.getConfigForComponent(ar) || {},
                s = new a.e({
                  hasBackdrop: !0,
                  scrollStrategy: this.overlay.scrollStrategies.block(),
                  positionStrategy: this.overlay.position().global(),
                  disposeOnNavigation:
                    null ===
                      (n =
                        null !== (e = t.nzCloseOnNavigation) && void 0 !== e
                          ? e
                          : i.nzCloseOnNavigation) ||
                    void 0 === n ||
                    n,
                  backdropClass: 'ant-image-preview-mask',
                  direction:
                    t.nzDirection || i.nzDirection || this.directionality.value,
                })
              return this.overlay.create(s)
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Zb(a.d), c.Zb(c.s), c.Zb(d.a), c.Zb(r.c, 8))
            }),
            (t.ɵprov = c.Lb({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        gr = (() => {
          class t {
            constructor(t, e, n, i, s, o, r) {
              ;(this.document = t),
                (this.nzConfigService = e),
                (this.elementRef = n),
                (this.nzImageService = i),
                (this.cdr = s),
                (this.parentGroup = o),
                (this.directionality = r),
                (this._nzModuleName = 'image'),
                (this.nzSrc = ''),
                (this.nzDisablePreview = !1),
                (this.nzFallback = null),
                (this.nzPlaceholder = null),
                (this.status = 'normal'),
                (this.destroy$ = new m.a())
            }
            get previewable() {
              return !this.nzDisablePreview && 'error' !== this.status
            }
            ngOnInit() {
              var t
              this.backLoad(),
                this.parentGroup && this.parentGroup.addImage(this),
                this.directionality &&
                  (null === (t = this.directionality.change) ||
                    void 0 === t ||
                    t.pipe(Object(b.a)(this.destroy$)).subscribe((t) => {
                      ;(this.dir = t), this.cdr.detectChanges()
                    }),
                  (this.dir = this.directionality.value))
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete()
            }
            onPreview() {
              if (this.previewable)
                if (this.parentGroup) {
                  const t = this.parentGroup.images.filter(
                      (t) => t.previewable
                    ),
                    e = t.map((t) => ({ src: t.nzSrc })),
                    n = t.findIndex((t) => this === t)
                  this.nzImageService
                    .preview(e, { nzDirection: this.dir })
                    .switchTo(n)
                } else
                  this.nzImageService.preview([{ src: this.nzSrc }], {
                    nzDirection: this.dir,
                  })
            }
            getElement() {
              return this.elementRef
            }
            ngOnChanges(t) {
              const { nzSrc: e } = t
              e &&
                ((this.getElement().nativeElement.src = e.currentValue),
                this.backLoad())
            }
            backLoad() {
              ;(this.backLoadImage = this.document.createElement('img')),
                (this.backLoadImage.src = this.nzSrc),
                (this.status = 'loading'),
                this.backLoadImage.complete
                  ? ((this.status = 'normal'),
                    (this.getElement().nativeElement.src = this.nzSrc))
                  : ((this.getElement().nativeElement.src = this.nzPlaceholder
                      ? this.nzPlaceholder
                      : this.nzSrc),
                    (this.backLoadImage.onload = () => {
                      ;(this.status = 'normal'),
                        (this.getElement().nativeElement.src = this.nzSrc)
                    }),
                    (this.backLoadImage.onerror = () => {
                      ;(this.status = 'error'),
                        this.nzFallback &&
                          (this.getElement().nativeElement.src = this.nzFallback)
                    }))
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                c.Pb(i.d),
                c.Pb(d.a),
                c.Pb(c.l),
                c.Pb(pr),
                c.Pb(c.h),
                c.Pb(rr, 8),
                c.Pb(r.c, 8)
              )
            }),
            (t.ɵdir = c.Kb({
              type: t,
              selectors: [['img', 'nz-image', '']],
              hostBindings: function (t, e) {
                1 & t &&
                  c.cc('click', function () {
                    return e.onPreview()
                  })
              },
              inputs: {
                nzSrc: 'nzSrc',
                nzDisablePreview: 'nzDisablePreview',
                nzFallback: 'nzFallback',
                nzPlaceholder: 'nzPlaceholder',
              },
              exportAs: ['nzImage'],
              features: [c.zb],
            })),
            Object(h.a)(
              [
                Object(p.a)(),
                Object(d.b)(),
                Object(h.b)('design:type', Boolean),
              ],
              t.prototype,
              'nzDisablePreview',
              void 0
            ),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzFallback',
              void 0
            ),
            Object(h.a)(
              [Object(d.b)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzPlaceholder',
              void 0
            ),
            t
          )
        })(),
        mr = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [pr],
              imports: [[r.a, a.f, ue.d, Ko, i.c, g.c, Yo]],
            })),
            t
          )
        })()
      function br(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 24), c.Cc(1, 'Upcoming'), c.Ub()),
          2 & t && c.lc('nzColor', 'processing')
      }
      function fr(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 24), c.Cc(1, 'Success'), c.Ub()),
          2 & t && c.lc('nzColor', 'success')
      }
      function zr(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 24), c.Cc(1, 'Failed'), c.Ub()),
          2 & t && c.lc('nzColor', 'error')
      }
      const vr = function () {
        return { 'object-fit': 'cover', height: '200px', width: '100%' }
      }
      function yr(t, e) {
        if (
          (1 & t &&
            (c.Tb(0), c.Vb(1, 'div', 26), c.Qb(2, 'img', 27), c.Ub(), c.Sb()),
          2 & t)
        ) {
          const t = e.$implicit,
            n = c.fc(2).ngIf
          c.Bb(1),
            c.lc('nzXs', 24)('nzSm', 12)('nzMd', 6),
            c.Bb(1),
            c.lc('ngStyle', c.nc(6, vr))('nzSrc', t)(
              'alt',
              null == n ? null : n.name
            )
        }
      }
      const _r = function () {
        return [16, 16]
      }
      function Cr(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 6), c.Ac(1, yr, 3, 7, 'ng-container', 25), c.Ub()),
          2 & t)
        ) {
          const t = c.fc().ngIf
          c.lc('nzGutter', c.nc(2, _r)),
            c.Bb(1),
            c.lc(
              'ngForOf',
              null == t || null == t.links || null == t.links.flickr
                ? null
                : t.links.flickr.original
            )
        }
      }
      function Or(t, e) {
        1 & t &&
          (c.Vb(0, 'div', 8),
          c.Vb(1, 'div', 28),
          c.Qb(2, 'nz-empty', 29),
          c.Ub(),
          c.Ub())
      }
      const wr = function () {
          return [16]
        },
        Sr = function () {
          return { height: '64vh' }
        }
      function Ir(t, e) {
        if (1 & t) {
          const t = c.Wb()
          c.Vb(0, 'div'),
            c.Vb(1, 'nz-page-header', 2),
            c.cc('nzBack', function () {
              return c.sc(t), c.fc().onBack()
            }),
            c.Qb(2, 'nz-avatar', 3),
            c.Vb(3, 'nz-page-header-title'),
            c.Cc(4),
            c.Ub(),
            c.Vb(5, 'nz-page-header-tags'),
            c.Ac(6, br, 2, 1, 'nz-tag', 4),
            c.Ac(7, fr, 2, 1, 'nz-tag', 4),
            c.Ac(8, zr, 2, 1, 'nz-tag', 4),
            c.Ub(),
            c.Vb(9, 'nz-page-header-content', 5),
            c.Vb(10, 'div', 6),
            c.Vb(11, 'div', 7),
            c.Vb(12, 'div', 8),
            c.Vb(13, 'div', 9),
            c.Vb(14, 'nz-list', 10),
            c.Vb(15, 'nz-list-item'),
            c.Vb(16, 'nz-list-item-meta', 11),
            c.Vb(17, 'nz-list-item-meta-title'),
            c.Cc(18),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Vb(19, 'nz-list-item'),
            c.Vb(20, 'nz-list-item-meta', 12),
            c.Vb(21, 'nz-list-item-meta-title'),
            c.Cc(22),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Vb(23, 'nz-list-item'),
            c.Vb(24, 'nz-list-item-meta', 13),
            c.Vb(25, 'nz-list-item-meta-title'),
            c.Cc(26),
            c.gc(27, 'date'),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Vb(28, 'nz-list-item'),
            c.Vb(29, 'nz-list-item-meta', 14),
            c.Vb(30, 'nz-list-item-meta-title'),
            c.Cc(31),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Vb(32, 'nz-list-item'),
            c.Vb(33, 'nz-list-item-meta', 15),
            c.Vb(34, 'nz-list-item-meta-title'),
            c.Vb(35, 'div', 16),
            c.Vb(36, 'a', 17),
            c.Qb(37, 'i', 18),
            c.Ub(),
            c.Vb(38, 'a', 17),
            c.Qb(39, 'i', 19),
            c.Ub(),
            c.Vb(40, 'a', 17),
            c.Qb(41, 'i', 20),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Vb(42, 'div', 21),
            c.Ac(43, Cr, 2, 3, 'div', 22),
            c.Ac(44, Or, 3, 0, 'div', 23),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub(),
            c.Ub()
        }
        if (2 & t) {
          const t = e.ngIf
          c.Bb(1),
            c.lc('nzGhost', !0),
            c.Bb(1),
            c.lc(
              'nzSrc',
              null == t || null == t.links || null == t.links.patch
                ? null
                : t.links.patch.small
            ),
            c.Bb(2),
            c.Fc(
              '',
              null == t ? null : t.name,
              ' #',
              null == t ? null : t.flight_number,
              ''
            ),
            c.Bb(2),
            c.lc('ngIf', t.upcoming),
            c.Bb(1),
            c.lc('ngIf', null == t ? null : t.success),
            c.Bb(1),
            c.lc(
              'ngIf',
              !((null != t && t.success) || (null != t && t.upcoming))
            ),
            c.Bb(2),
            c.lc('nzGutter', c.nc(26, wr)),
            c.Bb(1),
            c.lc('nzXs', 24)('nzMd', 12),
            c.Bb(2),
            c.lc('nzSpan', 24),
            c.Bb(5),
            c.Ec(' ', null == t ? null : t.name, ' '),
            c.Bb(4),
            c.Ec(' ', null == t ? null : t.flight_number, ' '),
            c.Bb(4),
            c.Ec(' ', c.ic(27, 23, null == t ? null : t.date_utc, 'long'), ' '),
            c.Bb(5),
            c.Ec(' ', (null == t ? null : t.details) || 'No Record', ' '),
            c.Bb(5),
            c.lc(
              'href',
              null == t || null == t.links ? null : t.links.webcast,
              c.uc
            ),
            c.Bb(2),
            c.lc(
              'href',
              null == t || null == t.links ? null : t.links.article,
              c.uc
            ),
            c.Bb(2),
            c.lc(
              'href',
              null == t || null == t.links || null == t.links.reddit
                ? null
                : t.links.reddit.launch,
              c.uc
            ),
            c.Bb(2),
            c.lc('nzXs', 24)('nzMd', 12)('ngStyle', c.nc(27, Sr)),
            c.Bb(1),
            c.lc(
              'ngIf',
              null == t ||
                null == t.links ||
                null == t.links.flickr ||
                null == t.links.flickr.original
                ? null
                : t.links.flickr.original.length
            ),
            c.Bb(1),
            c.lc(
              'ngIf',
              !(
                null != t &&
                null != t.links &&
                null != t.links.flickr &&
                null != t.links.flickr.original &&
                t.links.flickr.original.length
              )
            )
        }
      }
      let xr = (() => {
        class t {
          constructor(t, e, n) {
            ;(this.router = t), (this.route = e), (this.spacexService = n)
          }
          ngOnInit() {
            this.details$ = this.route.paramMap.pipe(
              Object(ne.a)(1),
              Object(Yt.a)((t) => this.spacexService.getLaunchById(t.get('id')))
            )
          }
          onBack() {
            this.router.navigate(['/'])
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c.Pb(vi.c), c.Pb(vi.a), c.Pb(Ci))
          }),
          (t.ɵcmp = c.Jb({
            type: t,
            selectors: [['app-launch-details']],
            decls: 3,
            vars: 3,
            consts: [
              [1, 'inner-content'],
              [4, 'ngIf'],
              ['nzBackIcon', '', 3, 'nzGhost', 'nzBack'],
              [
                'nz-page-header-avatar',
                '',
                'nzIcon',
                'rocket',
                2,
                'background-color',
                '#000',
                3,
                'nzSrc',
              ],
              [3, 'nzColor', 4, 'ngIf'],
              [1, 'content'],
              ['nz-row', '', 3, 'nzGutter'],
              ['nz-col', '', 1, 'gutter-row', 3, 'nzXs', 'nzMd'],
              ['nz-row', ''],
              ['nz-col', '', 3, 'nzSpan'],
              ['nzItemLayout', 'horizontal'],
              ['nzDescription', 'Name'],
              ['nzDescription', 'Flight number'],
              ['nzDescription', 'Date'],
              ['nzDescription', 'Details'],
              ['nzDescription', 'Links'],
              [1, 'content-link'],
              ['rel', 'noopener noreferrer', 'target', '_blank', 3, 'href'],
              ['nz-icon', '', 'nzType', 'youtube', 'nzTheme', 'outline'],
              ['nz-icon', '', 'nzType', 'link', 'nzTheme', 'outline'],
              ['nz-icon', '', 'nzType', 'reddit', 'nzTheme', 'outline'],
              ['nz-col', '', 1, 'gutter-row', 3, 'nzXs', 'nzMd', 'ngStyle'],
              ['nz-row', '', 3, 'nzGutter', 4, 'ngIf'],
              ['nz-row', '', 4, 'ngIf'],
              [3, 'nzColor'],
              [4, 'ngFor', 'ngForOf'],
              ['nz-col', '', 1, 'gutter-row', 3, 'nzXs', 'nzSm', 'nzMd'],
              ['nz-image', '', 3, 'ngStyle', 'nzSrc', 'alt'],
              [1, 'empty'],
              ['nzNotFoundImage', 'simple', 'nzNotFoundContent', 'No Photos'],
            ],
            template: function (t, e) {
              1 & t &&
                (c.Vb(0, 'div', 0),
                c.Ac(1, Ir, 45, 28, 'div', 1),
                c.gc(2, 'async'),
                c.Ub()),
                2 & t && (c.Bb(1), c.lc('ngIf', c.hc(2, 1, e.details$)))
            },
            directives: [
              i.n,
              di,
              Zt,
              hi,
              si,
              ri,
              oi,
              Gn,
              Wn,
              Js,
              qs,
              Fs,
              Ls,
              g.b,
              y,
              i.o,
              eo,
              i.m,
              gr,
              Ae,
            ],
            pipes: [i.b, i.e],
            styles: [
              '[_nghost-%COMP%]   [nz-carousel-content][_ngcontent-%COMP%]{text-align:center;height:160px;line-height:160px;background:#364d79;color:#fff;overflow:hidden}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;margin-bottom:0}[_nghost-%COMP%]   .content-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-right:10px}',
            ],
          })),
          t
        )
      })()
      function Tr(t, e) {
        if ((1 & t && (c.Tb(0), c.Cc(1), c.Sb()), 2 & t)) {
          const t = c.fc(2)
          c.Bb(1), c.Dc(t.nzText)
        }
      }
      function Dr(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'span', 1), c.Ac(1, Tr, 2, 1, 'ng-container', 2), c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1), c.lc('nzStringTemplateOutlet', t.nzText)
        }
      }
      let kr = (() => {
          class t {
            constructor(t) {
              ;(this.elementRef = t),
                (this.nzType = 'horizontal'),
                (this.nzOrientation = 'center'),
                (this.nzDashed = !1),
                (this.nzPlain = !1),
                this.elementRef.nativeElement.classList.add('ant-divider')
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c.Pb(c.l))
            }),
            (t.ɵcmp = c.Jb({
              type: t,
              selectors: [['nz-divider']],
              hostVars: 16,
              hostBindings: function (t, e) {
                2 & t &&
                  c.Hb('ant-divider-horizontal', 'horizontal' === e.nzType)(
                    'ant-divider-vertical',
                    'vertical' === e.nzType
                  )('ant-divider-with-text', e.nzText)(
                    'ant-divider-plain',
                    e.nzPlain
                  )(
                    'ant-divider-with-text-left',
                    e.nzText && 'left' === e.nzOrientation
                  )(
                    'ant-divider-with-text-right',
                    e.nzText && 'right' === e.nzOrientation
                  )(
                    'ant-divider-with-text-center',
                    e.nzText && 'center' === e.nzOrientation
                  )('ant-divider-dashed', e.nzDashed)
              },
              inputs: {
                nzType: 'nzType',
                nzOrientation: 'nzOrientation',
                nzDashed: 'nzDashed',
                nzPlain: 'nzPlain',
                nzText: 'nzText',
              },
              exportAs: ['nzDivider'],
              decls: 1,
              vars: 1,
              consts: [
                ['class', 'ant-divider-inner-text', 4, 'ngIf'],
                [1, 'ant-divider-inner-text'],
                [4, 'nzStringTemplateOutlet'],
              ],
              template: function (t, e) {
                1 & t && c.Ac(0, Dr, 2, 1, 'span', 0),
                  2 & t && c.lc('ngIf', e.nzText)
              },
              directives: [i.n, I.b],
              encapsulation: 2,
              changeDetection: 0,
            })),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzDashed',
              void 0
            ),
            Object(h.a)(
              [Object(p.a)(), Object(h.b)('design:type', Object)],
              t.prototype,
              'nzPlain',
              void 0
            ),
            t
          )
        })(),
        Pr = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, I.a]],
            })),
            t
          )
        })()
      function Ar(t, e) {
        if ((1 & t && c.Qb(0, 'img', 5), 2 & t)) {
          const t = c.fc()
          c.lc('alt', null == t.data ? null : t.data.name)(
            'nzSrc',
            null == t.data || null == t.data.links || null == t.data.links.patch
              ? null
              : t.data.links.patch.small
          )
        }
      }
      function Er(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 8), c.Cc(1, 'Upcoming'), c.Ub()),
          2 & t && c.lc('nzColor', 'processing')
      }
      function jr(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 8), c.Cc(1, 'Success'), c.Ub()),
          2 & t && c.lc('nzColor', 'success')
      }
      function Vr(t, e) {
        1 & t && (c.Vb(0, 'nz-tag', 8), c.Cc(1, 'Failed'), c.Ub()),
          2 & t && c.lc('nzColor', 'error')
      }
      function Br(t, e) {
        if (
          (1 & t &&
            (c.Vb(0, 'div', 6),
            c.Ac(1, Er, 2, 1, 'nz-tag', 7),
            c.Ac(2, jr, 2, 1, 'nz-tag', 7),
            c.Ac(3, Vr, 2, 1, 'nz-tag', 7),
            c.Ub(),
            c.Vb(4, 'div'),
            c.Vb(5, 'small'),
            c.Cc(6),
            c.gc(7, 'date'),
            c.Ub(),
            c.Ub(),
            c.Vb(8, 'div'),
            c.Cc(9),
            c.Ub()),
          2 & t)
        ) {
          const t = c.fc()
          c.Bb(1),
            c.lc('ngIf', t.data.upcoming),
            c.Bb(1),
            c.lc('ngIf', t.data.success),
            c.Bb(1),
            c.lc('ngIf', !t.data.success && !t.data.upcoming),
            c.Bb(3),
            c.Dc(
              c.ic(7, 6, null == t.data ? null : t.data.date_utc, 'mediumDate')
            ),
            c.Bb(3),
            c.Fc(
              '',
              null == t.data ? null : t.data.name,
              ' #',
              null == t.data ? null : t.data.flight_number,
              ''
            )
        }
      }
      const Lr = function (t) {
        return ['/launches', t]
      }
      let Rr = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)()
          }),
          (t.ɵcmp = c.Jb({
            type: t,
            selectors: [['app-space-card']],
            inputs: { data: 'data' },
            decls: 7,
            vars: 5,
            consts: [
              [1, 'xcard', 3, 'routerLink'],
              ['nzHoverable', '', 3, 'nzCover'],
              [1, 'text-center', 3, 'nzTitle'],
              ['coverTemplate', ''],
              ['metaTemplate', ''],
              [
                'nz-image',
                '',
                'nzDisablePreview',
                'true',
                'nzFallback',
                'assets/spacex.svg',
                3,
                'alt',
                'nzSrc',
              ],
              [1, 'status'],
              [3, 'nzColor', 4, 'ngIf'],
              [3, 'nzColor'],
            ],
            template: function (t, e) {
              if (
                (1 & t &&
                  (c.Vb(0, 'a', 0),
                  c.Vb(1, 'nz-card', 1),
                  c.Qb(2, 'nz-card-meta', 2),
                  c.Ub(),
                  c.Ac(3, Ar, 1, 2, 'ng-template', null, 3, c.Bc),
                  c.Ac(5, Br, 10, 9, 'ng-template', null, 4, c.Bc),
                  c.Ub()),
                2 & t)
              ) {
                const t = c.rc(4),
                  n = c.rc(6)
                c.lc('routerLink', c.oc(3, Lr, e.data.id)),
                  c.Bb(1),
                  c.lc('nzCover', t),
                  c.Bb(1),
                  c.lc('nzTitle', n)
              }
            },
            directives: [vi.e, Ft, $t, gr, i.n, eo],
            pipes: [i.e],
            encapsulation: 2,
          })),
          t
        )
      })()
      function Mr(t, e) {
        if ((1 & t && c.Qb(0, 'nz-option', 10), 2 & t)) {
          const t = e.$implicit
          c.lc('nzValue', t)('nzLabel', t)
        }
      }
      function Fr(t, e) {
        if (
          (1 & t && (c.Tb(0), c.Qb(1, 'app-space-card', 11), c.Sb()), 2 & t)
        ) {
          const t = e.$implicit
          c.Bb(1), c.lc('data', t)
        }
      }
      function Nr(t, e) {
        1 & t &&
          (c.Tb(0), c.Vb(1, 'div', 12), c.Qb(2, 'nz-empty', 13), c.Ub(), c.Sb())
      }
      const $r = [
        {
          path: '',
          component: (() => {
            class t {
              constructor(t) {
                ;(this.spacexService = t),
                  (this.selectedYear = new l.d('All')),
                  (this.onlySuccess = new l.d(!1))
              }
              ngOnInit() {
                ;(this.years = this.getYears(2006, new Date().getFullYear())),
                  (this.subscription$ = this.spacexService.filters$.subscribe(
                    ([t, e]) => {
                      this.list$ = this.spacexService.fetchData(t, e)
                    }
                  )),
                  this.selectedYear.valueChanges.subscribe((t) => {
                    this.spacexService.selectedYear$.next(t)
                  }),
                  this.onlySuccess.valueChanges.subscribe((t) => {
                    this.spacexService.isSuccessfulLaunch$.next(t)
                  })
              }
              getYears(t, e) {
                const n = []
                for (; t < e; ) n.push(t), (t += 1)
                return n.sort((t, e) => t - e)
              }
              ngOnDestroy() {
                this.subscription$.unsubscribe()
              }
            }
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(c.Pb(Ci))
              }),
              (t.ɵcmp = c.Jb({
                type: t,
                selectors: [['app-launches']],
                decls: 18,
                vars: 10,
                consts: [
                  [1, 'inner-content'],
                  [3, 'nzGhost'],
                  ['nz-checkbox', '', 1, 'select-none', 3, 'formControl'],
                  ['nzType', 'vertical'],
                  [3, 'formControl'],
                  ['nzValue', 'All', 'nzLabel', 'All'],
                  [3, 'nzValue', 'nzLabel', 4, 'ngFor', 'ngForOf'],
                  [1, 'content'],
                  [4, 'ngFor', 'ngForOf'],
                  [4, 'ngIf'],
                  [3, 'nzValue', 'nzLabel'],
                  [1, 'item', 3, 'data'],
                  [1, 'empty'],
                  ['nzNotFoundImage', 'simple'],
                ],
                template: function (t, e) {
                  if (
                    (1 & t &&
                      (c.Vb(0, 'div', 0),
                      c.Vb(1, 'nz-page-header', 1),
                      c.Vb(2, 'nz-page-header-title'),
                      c.Cc(3, 'Launches'),
                      c.Ub(),
                      c.Vb(4, 'nz-page-header-extra'),
                      c.Vb(5, 'label', 2),
                      c.Cc(6, 'Only Success'),
                      c.Ub(),
                      c.Qb(7, 'nz-divider', 3),
                      c.Vb(8, 'label'),
                      c.Cc(9, 'Year'),
                      c.Ub(),
                      c.Vb(10, 'nz-select', 4),
                      c.Qb(11, 'nz-option', 5),
                      c.Ac(12, Mr, 1, 2, 'nz-option', 6),
                      c.Ub(),
                      c.Ub(),
                      c.Vb(13, 'nz-page-header-content', 7),
                      c.Ac(14, Fr, 2, 1, 'ng-container', 8),
                      c.gc(15, 'async'),
                      c.Ac(16, Nr, 3, 0, 'ng-container', 9),
                      c.gc(17, 'async'),
                      c.Ub(),
                      c.Ub(),
                      c.Ub()),
                    2 & t)
                  ) {
                    let t = null
                    c.Bb(1),
                      c.lc('nzGhost', !0),
                      c.Bb(4),
                      c.lc('formControl', e.onlySuccess),
                      c.Bb(5),
                      c.lc('formControl', e.selectedYear),
                      c.Bb(2),
                      c.lc('ngForOf', e.years),
                      c.Bb(2),
                      c.lc('ngForOf', c.hc(15, 6, e.list$)),
                      c.Bb(2),
                      c.lc(
                        'ngIf',
                        !(null != (t = c.hc(17, 8, e.list$)) && t.length)
                      )
                  }
                },
                directives: [
                  di,
                  si,
                  ai,
                  Nn,
                  l.h,
                  l.e,
                  kr,
                  Tn,
                  wn,
                  i.m,
                  oi,
                  i.n,
                  Rr,
                  Ae,
                ],
                pipes: [i.b],
                styles: [
                  '[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;width:100%;flex-wrap:wrap;margin:1rem auto;justify-content:space-between}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]:after{content:"";flex:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:.5em;box-sizing:border-box}@media (max-width:700px){[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{width:100%}}@media (min-width:701px) and (max-width:1024px){[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{width:50%}}@media (min-width:1025px) and (max-width:1440px){[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{width:25%}}@media (min-width:1440px){[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{width:25%}}[_nghost-%COMP%]   nz-page-headerdiv[_ngcontent-%COMP%]:first-child{padding:0 .5rem;background:red}',
                ],
              })),
              t
            )
          })(),
        },
        { path: ':id', component: xr },
      ]
      let Hr = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[vi.f.forChild($r)], vi.f],
            })),
            t
          )
        })(),
        Ur = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, a.f, I.a, x.c, S.b]],
            })),
            t
          )
        })()
      new c.r('nz-carousel-custom-strategies')
      let Gr = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [[r.a, i.c, v.b]],
            })),
            t
          )
        })(),
        Wr = (() => {
          class t {}
          return (
            (t.ɵmod = c.Nb({ type: t })),
            (t.ɵinj = c.Mb({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [
                [
                  i.c,
                  l.f,
                  l.j,
                  Hr,
                  zi,
                  s.e,
                  o.d,
                  ct,
                  dt,
                  Ht,
                  Jt,
                  Vn,
                  Bn,
                  $n,
                  Qn,
                  ui,
                  w,
                  mi,
                  mr,
                  Ur,
                  no,
                  Xs,
                  Gr,
                  Pr,
                  Ve,
                ],
              ],
            })),
            t
          )
        })()
    },
  },
])
