(() => {
  var K_ = Object.create;
  var on = Object.defineProperty;
  var Y_ = Object.getOwnPropertyDescriptor;
  var $_ = Object.getOwnPropertyNames;
  var Q_ = Object.getPrototypeOf,
    Z_ = Object.prototype.hasOwnProperty;
  var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) on(e, r, { get: t[r], enumerable: !0 });
    },
    Ns = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of $_(t))
          !Z_.call(e, i) &&
            i !== r &&
            on(e, i, {
              get: () => t[i],
              enumerable: !(n = Y_(t, i)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
      (r = e != null ? K_(Q_(e)) : {}),
      Ns(
        t || !e || !e.__esModule
          ? on(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Ns(on({}, "__esModule", { value: !0 }), e);
  var Pi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, y) {
        var O = new G.Bare();
        return O.init(l, y);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function n(l) {
        var y = parseInt(l.slice(1), 16),
          O = (y >> 16) & 255,
          S = (y >> 8) & 255,
          b = 255 & y;
        return [O, S, b];
      }
      function i(l, y, O) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | O).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, y) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function s(l, y, O) {
        f("Units do not match [" + l + "]: " + y + ", " + O);
      }
      function u(l, y, O) {
        if ((y !== void 0 && (O = y), l === void 0)) return O;
        var S = O;
        return (
          St.test(l) || !ft.test(l)
            ? (S = parseInt(l, 10))
            : ft.test(l) && (S = 1e3 * parseFloat(l)),
          0 > S && (S = 0),
          S === S ? S : O
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function v(l) {
        for (var y = -1, O = l ? l.length : 0, S = []; ++y < O; ) {
          var b = l[y];
          b && S.push(b);
        }
        return S;
      }
      var d = (function (l, y, O) {
          function S(ae) {
            return typeof ae == "object";
          }
          function b(ae) {
            return typeof ae == "function";
          }
          function C() {}
          function te(ae, ve) {
            function K() {
              var Ce = new se();
              return b(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function se() {}
            ve === O && ((ve = ae), (ae = Object)), (K.Bare = se);
            var ue,
              Te = (C[l] = ae[l]),
              tt = (se[l] = K[l] = new C());
            return (
              (tt.constructor = K),
              (K.mixin = function (Ce) {
                return (se[l] = K[l] = te(K, Ce)[l]), K;
              }),
              (K.open = function (Ce) {
                if (
                  ((ue = {}),
                  b(Ce) ? (ue = Ce.call(K, tt, Te, K, ae)) : S(Ce) && (ue = Ce),
                  S(ue))
                )
                  for (var mr in ue) y.call(ue, mr) && (tt[mr] = ue[mr]);
                return b(tt.init) || (tt.init = ae), K;
              }),
              K.open(ve)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, y, O, S) {
              var b = (l /= S) * l,
                C = b * l;
              return (
                y +
                O * (-2.75 * C * b + 11 * b * b + -15.5 * C + 8 * b + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, O, S) {
              var b = (l /= S) * l,
                C = b * l;
              return y + O * (-1 * C * b + 3 * b * b + -3 * C + 2 * b);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, O, S) {
              var b = (l /= S) * l,
                C = b * l;
              return (
                y +
                O * (0.3 * C * b + -1.6 * b * b + 2.2 * C + -1.8 * b + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, O, S) {
              var b = (l /= S) * l,
                C = b * l;
              return y + O * (2 * C * b + -5 * b * b + 2 * C + 2 * b);
            },
          ],
          linear: [
            "linear",
            function (l, y, O, S) {
              return (O * l) / S + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, O, S) {
              return O * (l /= S) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, O, S) {
              return -O * (l /= S) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, O, S) {
              return (l /= S / 2) < 1
                ? (O / 2) * l * l + y
                : (-O / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, O, S) {
              return O * (l /= S) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, O, S) {
              return O * ((l = l / S - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, O, S) {
              return (l /= S / 2) < 1
                ? (O / 2) * l * l * l + y
                : (O / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, O, S) {
              return O * (l /= S) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, O, S) {
              return -O * ((l = l / S - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, O, S) {
              return (l /= S / 2) < 1
                ? (O / 2) * l * l * l * l + y
                : (-O / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, O, S) {
              return O * (l /= S) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, O, S) {
              return O * ((l = l / S - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, O, S) {
              return (l /= S / 2) < 1
                ? (O / 2) * l * l * l * l * l + y
                : (O / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, O, S) {
              return -O * Math.cos((l / S) * (Math.PI / 2)) + O + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, O, S) {
              return O * Math.sin((l / S) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, O, S) {
              return (-O / 2) * (Math.cos((Math.PI * l) / S) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, O, S) {
              return l === 0 ? y : O * Math.pow(2, 10 * (l / S - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, O, S) {
              return l === S
                ? y + O
                : O * (-Math.pow(2, (-10 * l) / S) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, O, S) {
              return l === 0
                ? y
                : l === S
                ? y + O
                : (l /= S / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (O / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, O, S) {
              return -O * (Math.sqrt(1 - (l /= S) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, O, S) {
              return O * Math.sqrt(1 - (l = l / S - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, O, S) {
              return (l /= S / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (O / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, O, S, b) {
              return (
                b === void 0 && (b = 1.70158),
                O * (l /= S) * l * ((b + 1) * l - b) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, O, S, b) {
              return (
                b === void 0 && (b = 1.70158),
                O * ((l = l / S - 1) * l * ((b + 1) * l + b) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, O, S, b) {
              return (
                b === void 0 && (b = 1.70158),
                (l /= S / 2) < 1
                  ? (O / 2) * l * l * (((b *= 1.525) + 1) * l - b) + y
                  : (O / 2) *
                      ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) +
                    y
              );
            },
          ],
        },
        h = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        _ = window,
        P = "bkwld-tram",
        A = /[\-\.0-9]/g,
        R = /[A-Z]/,
        x = "number",
        N = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        z = /(deg|rad|turn)$/,
        Y = "unitless",
        Z = /(all|none) 0s ease 0s/,
        re = /^(width|height)$/,
        ne = " ",
        M = m.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        $ = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var y,
            O,
            S = "",
            b = l.split("-");
          for (y = 0; y < b.length; y++)
            S += b[y].charAt(0).toUpperCase() + b[y].slice(1);
          for (y = 0; y < w.length; y++)
            if (((O = w[y] + S), O in M.style))
              return { dom: O, css: F[y] + l };
        },
        j = (t.support = {
          bind: Function.prototype.bind,
          transform: $("transform"),
          transition: $("transition"),
          backface: $("backface-visibility"),
          timing: $("transition-timing-function"),
        });
      if (j.transition) {
        var V = j.timing.dom;
        if (((M.style[V] = E["ease-in-back"][0]), !M.style[V]))
          for (var H in h) E[H][0] = h[H];
      }
      var T = (t.frame = (function () {
          var l =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return l && j.bind
            ? l.bind(_)
            : function (y) {
                _.setTimeout(y, 16);
              };
        })()),
        W = (t.now = (function () {
          var l = _.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && j.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        X = d(function (l) {
          function y(ie, le) {
            var me = v(("" + ie).split(ne)),
              de = me[0];
            le = le || {};
            var Ne = Q[de];
            if (!Ne) return f("Unsupported property: " + de);
            if (!le.weak || !this.props[de]) {
              var ke = Ne[0],
                Me = this.props[de];
              return (
                Me || (Me = this.props[de] = new ke.Bare()),
                Me.init(this.$el, me, Ne, le),
                Me
              );
            }
          }
          function O(ie, le, me) {
            if (ie) {
              var de = typeof ie;
              if (
                (le ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && le)
              )
                return (
                  (this.timer = new J({
                    duration: ie,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && le) {
                switch (ie) {
                  case "hide":
                    K.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    y.call(this, ie, me && me[1]);
                }
                return C.call(this);
              }
              if (de == "function") return void ie.call(this, this);
              if (de == "object") {
                var Ne = 0;
                tt.call(
                  this,
                  ie,
                  function (be, z_) {
                    be.span > Ne && (Ne = be.span), be.stop(), be.animate(z_);
                  },
                  function (be) {
                    "wait" in be && (Ne = u(be.wait, 0));
                  }
                ),
                  Te.call(this),
                  Ne > 0 &&
                    ((this.timer = new J({ duration: Ne, context: this })),
                    (this.active = !0),
                    le && (this.timer.complete = C));
                var ke = this,
                  Me = !1,
                  nn = {};
                T(function () {
                  tt.call(ke, ie, function (be) {
                    be.active && ((Me = !0), (nn[be.name] = be.nextStyle));
                  }),
                    Me && ke.$el.css(nn);
                });
              }
            }
          }
          function S(ie) {
            (ie = u(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new J({
                    duration: ie,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function b(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = C))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              O.call(this, ie.options, !0, ie.args);
            }
          }
          function te(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var le;
            typeof ie == "string"
              ? ((le = {}), (le[ie] = 1))
              : (le = typeof ie == "object" && ie != null ? ie : this.props),
              tt.call(this, le, Ce),
              Te.call(this);
          }
          function ae(ie) {
            te.call(this, ie), tt.call(this, ie, mr, B_);
          }
          function ve(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function K() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, P),
              (this.$el = this.el = null);
          }
          function Te() {
            var ie,
              le,
              me = [];
            this.upstream && me.push(this.upstream);
            for (ie in this.props)
              (le = this.props[ie]), le.active && me.push(le.string);
            (me = me.join(",")),
              this.style !== me &&
                ((this.style = me), (this.el.style[j.transition.dom] = me));
          }
          function tt(ie, le, me) {
            var de,
              Ne,
              ke,
              Me,
              nn = le !== Ce,
              be = {};
            for (de in ie)
              (ke = ie[de]),
                de in ge
                  ? (be.transform || (be.transform = {}),
                    (be.transform[de] = ke))
                  : (R.test(de) && (de = r(de)),
                    de in Q ? (be[de] = ke) : (Me || (Me = {}), (Me[de] = ke)));
            for (de in be) {
              if (((ke = be[de]), (Ne = this.props[de]), !Ne)) {
                if (!nn) continue;
                Ne = y.call(this, de);
              }
              le.call(this, Ne, ke);
            }
            me && Me && me.call(this, Me);
          }
          function Ce(ie) {
            ie.stop();
          }
          function mr(ie, le) {
            ie.set(le);
          }
          function B_(ie) {
            this.$el.css(ie);
          }
          function Xe(ie, le) {
            l[ie] = function () {
              return this.children
                ? j_.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function j_(ie, le) {
            var me,
              de = this.children.length;
            for (me = 0; de > me; me++) ie.apply(this.children[me], le);
            return this;
          }
          (l.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var le = B(this.el, "transition");
              le && !Z.test(le) && (this.upstream = le);
            }
            j.backface &&
              oe.hideBackface &&
              g(this.el, j.backface.css, "hidden");
          }),
            Xe("add", y),
            Xe("start", O),
            Xe("wait", S),
            Xe("then", b),
            Xe("next", C),
            Xe("stop", te),
            Xe("set", ae),
            Xe("show", ve),
            Xe("hide", K),
            Xe("redraw", se),
            Xe("destroy", ue);
        }),
        G = d(X, function (l) {
          function y(O, S) {
            var b = e.data(O, P) || e.data(O, P, new X.Bare());
            return b.el || b.init(O), S ? b.start(S) : b;
          }
          l.init = function (O, S) {
            var b = e(O);
            if (!b.length) return this;
            if (b.length === 1) return y(b[0], S);
            var C = [];
            return (
              b.each(function (te, ae) {
                C.push(y(ae, S));
              }),
              (this.children = C),
              this
            );
          };
        }),
        D = d(function (l) {
          function y() {
            var C = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(C), te;
          }
          function O(C, te, ae) {
            return te !== void 0 && (ae = te), C in E ? C : ae;
          }
          function S(C) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return (te ? i(te[1], te[2], te[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var b = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (C, te, ae, ve) {
            (this.$el = C), (this.el = C[0]);
            var K = te[0];
            ae[2] && (K = ae[2]),
              ee[K] && (K = ee[K]),
              (this.name = K),
              (this.type = ae[1]),
              (this.duration = u(te[1], this.duration, b.duration)),
              (this.ease = O(te[2], this.ease, b.ease)),
              (this.delay = u(te[3], this.delay, b.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = re.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ne +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ne + E[this.ease][0] : "") +
                    (this.delay ? ne + this.delay + "ms" : "")));
          }),
            (l.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (l.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = y.call(this))),
                (this.nextStyle = C);
            }),
            (l.fallback = function (C) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  C == "auto" && (C = y.call(this))),
                (this.tween = new I({
                  from: te,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return B(this.el, this.name);
            }),
            (l.update = function (C) {
              g(this.el, this.name, C);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                g(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (l.convert = function (C, te) {
              if (C == "auto" && this.auto) return C;
              var ae,
                ve = typeof C == "number",
                K = typeof C == "string";
              switch (te) {
                case x:
                  if (ve) return C;
                  if (K && C.replace(A, "") === "") return +C;
                  ae = "number(unitless)";
                  break;
                case N:
                  if (K) {
                    if (C === "" && this.original) return this.original;
                    if (te.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : S(C);
                  }
                  ae = "hex or rgb string";
                  break;
                case q:
                  if (ve) return C + this.unit;
                  if (K && te.test(C)) return C;
                  ae = "number(px) or string(unit)";
                  break;
                case L:
                  if (ve) return C + this.unit;
                  if (K && te.test(C)) return C;
                  ae = "number(px) or string(unit or %)";
                  break;
                case z:
                  if (ve) return C + this.angle;
                  if (K && te.test(C)) return C;
                  ae = "number(deg) or string(angle)";
                  break;
                case Y:
                  if (ve || (K && L.test(C))) return C;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, C), C;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = d(D, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        U = d(D, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        k = d(D, function (l, y) {
          function O(S, b) {
            var C, te, ae, ve, K;
            for (C in S)
              (ve = ge[C]),
                (ae = ve[0]),
                (te = ve[1] || C),
                (K = this.convert(S[C], ae)),
                b.call(this, te, K, ae);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ge.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  g(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (S) {
              O.call(this, S, function (b, C) {
                this.current[b] = C;
              }),
                g(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (S) {
              var b = this.values(S);
              this.tween = new ce({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                te = {};
              for (C in this.current) te[C] = C in b ? b[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (l.fallback = function (S) {
              var b = this.values(S);
              this.tween = new ce({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              g(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (S) {
              var b,
                C = "";
              for (b in S) C += b + "(" + S[b] + ") ";
              return C;
            }),
            (l.values = function (S) {
              var b,
                C = {};
              return (
                O.call(this, S, function (te, ae, ve) {
                  (C[te] = ae),
                    this.current[te] === void 0 &&
                      ((b = 0),
                      ~te.indexOf("scale") && (b = 1),
                      (this.current[te] = this.convert(b, ve)));
                }),
                C
              );
            });
        }),
        I = d(function (l) {
          function y(K) {
            ae.push(K) === 1 && T(O);
          }
          function O() {
            var K,
              se,
              ue,
              Te = ae.length;
            if (Te)
              for (T(O), se = W(), K = Te; K--; )
                (ue = ae[K]), ue && ue.render(se);
          }
          function S(K) {
            var se,
              ue = e.inArray(K, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function b(K) {
            return Math.round(K * ve) / ve;
          }
          function C(K, se, ue) {
            return i(
              K[0] + ue * (se[0] - K[0]),
              K[1] + ue * (se[1] - K[1]),
              K[2] + ue * (se[2] - K[2])
            );
          }
          var te = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (K) {
            (this.duration = K.duration || 0), (this.delay = K.delay || 0);
            var se = K.ease || te.ease;
            E[se] && (se = E[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = K.update || o),
              (this.complete = K.complete || o),
              (this.context = K.context || this),
              (this.name = K.name);
            var ue = K.from,
              Te = K.to;
            ue === void 0 && (ue = te.from),
              Te === void 0 && (Te = te.to),
              (this.unit = K.unit || ""),
              typeof ue == "number" && typeof Te == "number"
                ? ((this.begin = ue), (this.change = Te - ue))
                : this.format(Te, ue),
              (this.value = this.begin + this.unit),
              (this.start = W()),
              K.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = W()), (this.active = !0), y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (l.render = function (K) {
              var se,
                ue = K - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var Te = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? C(this.startRGB, this.endRGB, Te)
                    : b(this.begin + Te * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (K, se) {
              if (((se += ""), (K += ""), K.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(K)),
                  (this.endHex = K),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(A, ""),
                  Te = K.replace(A, "");
                ue !== Te && s("tween", se, K), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (K = parseFloat(K)),
                (this.begin = this.value = se),
                (this.change = K - se);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ve = 1e3;
        }),
        J = d(I, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var O = y - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ce = d(I, function (l, y) {
          (l.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var S, b;
            for (S in O.values)
              (b = O.values[S]),
                this.current[S] !== b &&
                  this.tweens.push(
                    new I({
                      name: S,
                      from: this.current[S],
                      to: b,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (O) {
              var S,
                b,
                C = this.tweens.length,
                te = !1;
              for (S = C; S--; )
                (b = this.tweens[S]),
                  b.context &&
                    (b.render(O), (this.current[b.name] = b.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var O,
                  S = this.tweens.length;
                for (O = S; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !j.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!j.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var y = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new I(l);
        }),
        (t.delay = function (l, y, O) {
          return new J({ complete: y, duration: l, context: O });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var g = e.style,
        B = e.css,
        ee = { transform: j.transform && j.transform.css },
        Q = {
          color: [p, N],
          background: [p, N, "background-color"],
          "outline-color": [p, N],
          "border-color": [p, N],
          "border-top-color": [p, N],
          "border-right-color": [p, N],
          "border-bottom-color": [p, N],
          "border-left-color": [p, N],
          "border-width": [D, q],
          "border-top-width": [D, q],
          "border-right-width": [D, q],
          "border-bottom-width": [D, q],
          "border-left-width": [D, q],
          "border-spacing": [D, q],
          "letter-spacing": [D, q],
          margin: [D, q],
          "margin-top": [D, q],
          "margin-right": [D, q],
          "margin-bottom": [D, q],
          "margin-left": [D, q],
          padding: [D, q],
          "padding-top": [D, q],
          "padding-right": [D, q],
          "padding-bottom": [D, q],
          "padding-left": [D, q],
          "outline-width": [D, q],
          opacity: [D, x],
          top: [D, L],
          right: [D, L],
          bottom: [D, L],
          left: [D, L],
          "font-size": [D, L],
          "text-indent": [D, L],
          "word-spacing": [D, L],
          width: [D, L],
          "min-width": [D, L],
          "max-width": [D, L],
          height: [D, L],
          "min-height": [D, L],
          "max-height": [D, L],
          "line-height": [D, Y],
          "scroll-top": [U, x, "scrollTop"],
          "scroll-left": [U, x, "scrollLeft"],
        },
        ge = {};
      j.transform &&
        ((Q.transform = [k]),
        (ge = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [z],
          rotateX: [z],
          rotateY: [z],
          scale: [x],
          scaleX: [x],
          scaleY: [x],
          skew: [z],
          skewX: [z],
          skewY: [z],
        })),
        j.transform &&
          j.backface &&
          ((ge.z = [L, "translateZ"]),
          (ge.rotateZ = [z]),
          (ge.scaleZ = [x]),
          (ge.perspective = [q]));
      var St = /ms/,
        ft = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ps = c((VH, Ls) => {
    "use strict";
    var J_ = window.$,
      eT = Pi() && J_.tram;
    Ls.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        v = r.forEach,
        d = r.map,
        E = r.reduce,
        h = r.reduceRight,
        m = r.filter,
        _ = r.every,
        P = r.some,
        A = r.indexOf,
        R = r.lastIndexOf,
        x = Array.isArray,
        N = Object.keys,
        q = i.bind,
        L =
          (e.each =
          e.forEach =
            function (w, F, $) {
              if (w == null) return w;
              if (v && w.forEach === v) w.forEach(F, $);
              else if (w.length === +w.length) {
                for (var j = 0, V = w.length; j < V; j++)
                  if (F.call($, w[j], j, w) === t) return;
              } else
                for (var H = e.keys(w), j = 0, V = H.length; j < V; j++)
                  if (F.call($, w[H[j]], H[j], w) === t) return;
              return w;
            });
      (e.map = e.collect =
        function (w, F, $) {
          var j = [];
          return w == null
            ? j
            : d && w.map === d
            ? w.map(F, $)
            : (L(w, function (V, H, T) {
                j.push(F.call($, V, H, T));
              }),
              j);
        }),
        (e.find = e.detect =
          function (w, F, $) {
            var j;
            return (
              z(w, function (V, H, T) {
                if (F.call($, V, H, T)) return (j = V), !0;
              }),
              j
            );
          }),
        (e.filter = e.select =
          function (w, F, $) {
            var j = [];
            return w == null
              ? j
              : m && w.filter === m
              ? w.filter(F, $)
              : (L(w, function (V, H, T) {
                  F.call($, V, H, T) && j.push(V);
                }),
                j);
          });
      var z =
        (e.some =
        e.any =
          function (w, F, $) {
            F || (F = e.identity);
            var j = !1;
            return w == null
              ? j
              : P && w.some === P
              ? w.some(F, $)
              : (L(w, function (V, H, T) {
                  if (j || (j = F.call($, V, H, T))) return t;
                }),
                !!j);
          });
      (e.contains = e.include =
        function (w, F) {
          return w == null
            ? !1
            : A && w.indexOf === A
            ? w.indexOf(F) != -1
            : z(w, function ($) {
                return $ === F;
              });
        }),
        (e.delay = function (w, F) {
          var $ = a.call(arguments, 2);
          return setTimeout(function () {
            return w.apply(null, $);
          }, F);
        }),
        (e.defer = function (w) {
          return e.delay.apply(e, [w, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (w) {
          var F, $, j;
          return function () {
            F ||
              ((F = !0),
              ($ = arguments),
              (j = this),
              eT.frame(function () {
                (F = !1), w.apply(j, $);
              }));
          };
        }),
        (e.debounce = function (w, F, $) {
          var j,
            V,
            H,
            T,
            W,
            X = function () {
              var G = e.now() - T;
              G < F
                ? (j = setTimeout(X, F - G))
                : ((j = null), $ || ((W = w.apply(H, V)), (H = V = null)));
            };
          return function () {
            (H = this), (V = arguments), (T = e.now());
            var G = $ && !j;
            return (
              j || (j = setTimeout(X, F)),
              G && ((W = w.apply(H, V)), (H = V = null)),
              W
            );
          };
        }),
        (e.defaults = function (w) {
          if (!e.isObject(w)) return w;
          for (var F = 1, $ = arguments.length; F < $; F++) {
            var j = arguments[F];
            for (var V in j) w[V] === void 0 && (w[V] = j[V]);
          }
          return w;
        }),
        (e.keys = function (w) {
          if (!e.isObject(w)) return [];
          if (N) return N(w);
          var F = [];
          for (var $ in w) e.has(w, $) && F.push($);
          return F;
        }),
        (e.has = function (w, F) {
          return f.call(w, F);
        }),
        (e.isObject = function (w) {
          return w === Object(w);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var Y = /(.)^/,
        Z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        re = /\\|'|\r|\n|\u2028|\u2029/g,
        ne = function (w) {
          return "\\" + Z[w];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (w, F, $) {
          !F && $ && (F = $), (F = e.defaults({}, F, e.templateSettings));
          var j = RegExp(
              [
                (F.escape || Y).source,
                (F.interpolate || Y).source,
                (F.evaluate || Y).source,
              ].join("|") + "|$",
              "g"
            ),
            V = 0,
            H = "__p+='";
          w.replace(j, function (G, D, p, U, k) {
            return (
              (H += w.slice(V, k).replace(re, ne)),
              (V = k + G.length),
              D
                ? (H +=
                    `'+
((__t=(` +
                    D +
                    `))==null?'':_.escape(__t))+
'`)
                : p
                ? (H +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':__t)+
'`)
                : U &&
                  (H +=
                    `';
` +
                    U +
                    `
__p+='`),
              G
            );
          }),
            (H += `';
`);
          var T = F.variable;
          if (T) {
            if (!M.test(T))
              throw new Error("variable is not a bare identifier: " + T);
          } else
            (H =
              `with(obj||{}){
` +
              H +
              `}
`),
              (T = "obj");
          H =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            H +
            `return __p;
`;
          var W;
          try {
            W = new Function(F.variable || "obj", "_", H);
          } catch (G) {
            throw ((G.source = H), G);
          }
          var X = function (G) {
            return W.call(this, G, e);
          };
          return (
            (X.source =
              "function(" +
              T +
              `){
` +
              H +
              "}"),
            X
          );
        }),
        e
      );
    })();
  });
  var Fe = c((HH, Hs) => {
    "use strict";
    var pe = {},
      Ht = {},
      Wt = [],
      Mi = window.Webflow || [],
      mt = window.jQuery,
      je = mt(window),
      tT = mt(document),
      nt = mt.isFunction,
      Be = (pe._ = Ps()),
      Ms = (pe.tram = Pi() && mt.tram),
      sn = !1,
      Di = !1;
    Ms.config.hideBackface = !1;
    Ms.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Ht[e] && Fs(Ht[e]);
      var n = (Ht[e] = t(mt, Be, r) || {});
      return Ds(n), n;
    };
    pe.require = function (e) {
      return Ht[e];
    };
    function Ds(e) {
      pe.env() &&
        (nt(e.design) && je.on("__wf_design", e.design),
        nt(e.preview) && je.on("__wf_preview", e.preview)),
        nt(e.destroy) && je.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && rT(e);
    }
    function rT(e) {
      if (sn) {
        e.ready();
        return;
      }
      Be.contains(Wt, e.ready) || Wt.push(e.ready);
    }
    function Fs(e) {
      nt(e.design) && je.off("__wf_design", e.design),
        nt(e.preview) && je.off("__wf_preview", e.preview),
        nt(e.destroy) && je.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && nT(e);
    }
    function nT(e) {
      Wt = Be.filter(Wt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (sn) {
        nt(e) && e();
        return;
      }
      Mi.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var an = navigator.userAgent.toLowerCase(),
      Gs = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      iT = (pe.env.chrome =
        /chrome/.test(an) &&
        /Google/.test(navigator.vendor) &&
        parseInt(an.match(/chrome\/(\d+)\./)[1], 10)),
      oT = (pe.env.ios = /(ipod|iphone|ipad)/.test(an));
    pe.env.safari = /safari/.test(an) && !iT && !oT;
    var qi;
    Gs &&
      tT.on("touchstart mousedown", function (e) {
        qi = e.target;
      });
    pe.validClick = Gs
      ? function (e) {
          return e === qi || mt.contains(e, qi);
        }
      : function () {
          return !0;
        };
    var Us = "resize.webflow orientationchange.webflow load.webflow",
      aT = "scroll.webflow " + Us;
    pe.resize = Fi(je, Us);
    pe.scroll = Fi(je, aT);
    pe.redraw = Fi();
    function Fi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Be.throttle(function (i) {
          Be.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Be.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Be.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (sn = !0), Di ? sT() : Be.each(Wt, qs), Be.each(Mi, qs), pe.resize.up();
    };
    function qs(e) {
      nt(e) && e();
    }
    function sT() {
      (Di = !1), Be.each(Ht, Ds);
    }
    var Rt;
    pe.load = function (e) {
      Rt.then(e);
    };
    function Vs() {
      Rt && (Rt.reject(), je.off("load", Rt.resolve)),
        (Rt = new mt.Deferred()),
        je.on("load", Rt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Di = !0),
        je.triggerHandler("__wf_destroy"),
        e.domready != null && (sn = e.domready),
        Be.each(Ht, Fs),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (Wt = []),
        (Mi = []),
        Rt.state() === "pending" && Vs();
    };
    mt(pe.ready);
    Vs();
    Hs.exports = window.Webflow = pe;
  });
  var ks = c((WH, Xs) => {
    "use strict";
    var Ws = Fe();
    Ws.define(
      "brand",
      (Xs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var h = n.attr("data-wf-status"),
            m = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(m) && a.hostname !== m && (h = !0),
            h &&
              !s &&
              ((f = f || d()),
              E(),
              setTimeout(E, 500),
              e(r).off(u, v).on(u, v));
        };
        function v() {
          var h =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", h ? "display: none !important;" : "");
        }
        function E() {
          var h = i.children(o),
            m = h.length && h.get(0) === f,
            _ = Ws.env("editor");
          if (m) {
            _ && h.remove();
            return;
          }
          h.length && h.remove(), _ || i.append(f);
        }
        return t;
      })
    );
  });
  var js = c((XH, Bs) => {
    "use strict";
    var Gi = Fe();
    Gi.define(
      "edit",
      (Bs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Gi.env("test") || Gi.env("frame")) && !r.fixture && !uT())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || E,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, d).triggerHandler(s);
        function d() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            R(function (N) {
              e.ajax({
                url: A("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: h(N),
              });
            });
        }
        function h(N) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = N),
              m(P(q.bugReporterScriptPath), function () {
                m(P(q.scriptPath), function () {
                  window.WebflowEditor(q);
                });
              });
          };
        }
        function m(N, q) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            q,
            _
          );
        }
        function _(N, q, L) {
          throw (console.error("Could not load editor script: " + q), L);
        }
        function P(N) {
          return N.indexOf("//") >= 0
            ? N
            : A("https://editor-api.webflow.com" + N);
        }
        function A(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function R(N) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var L = function (z) {
            z.data === "WF_third_party_cookies_unsupported"
              ? (x(q, L), N(!1))
              : z.data === "WF_third_party_cookies_supported" &&
                (x(q, L), N(!0));
          };
          (q.onerror = function () {
            x(q, L), N(!1);
          }),
            window.addEventListener("message", L, !1),
            window.document.body.appendChild(q);
        }
        function x(N, q) {
          window.removeEventListener("message", q, !1), N.remove();
        }
        return n;
      })
    );
    function uT() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ks = c((kH, zs) => {
    "use strict";
    var cT = Fe();
    cT.define(
      "focus-visible",
      (zs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(x) {
            return !!(
              x &&
              x !== document &&
              x.nodeName !== "HTML" &&
              x.nodeName !== "BODY" &&
              "classList" in x &&
              "contains" in x.classList
            );
          }
          function u(x) {
            var N = x.type,
              q = x.tagName;
            return !!(
              (q === "INPUT" && a[N] && !x.readOnly) ||
              (q === "TEXTAREA" && !x.readOnly) ||
              x.isContentEditable
            );
          }
          function f(x) {
            x.getAttribute("data-wf-focus-visible") ||
              x.setAttribute("data-wf-focus-visible", "true");
          }
          function v(x) {
            x.getAttribute("data-wf-focus-visible") &&
              x.removeAttribute("data-wf-focus-visible");
          }
          function d(x) {
            x.metaKey ||
              x.altKey ||
              x.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function h(x) {
            s(x.target) && (n || u(x.target)) && f(x.target);
          }
          function m(x) {
            s(x.target) &&
              x.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              v(x.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), P());
          }
          function P() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function A() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(x) {
            (x.target.nodeName && x.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", _, !0),
            P(),
            r.addEventListener("focus", h, !0),
            r.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Qs = c((BH, $s) => {
    "use strict";
    var Ys = Fe();
    Ys.define(
      "focus",
      ($s.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ys.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var ln = c((jH, Js) => {
    "use strict";
    var Ui = window.jQuery,
      it = {},
      un = [],
      Zs = ".w-ix",
      cn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + Zs, OUTRO: "w-ix-outro" + Zs };
    it.init = function () {
      for (var e = un.length, t = 0; t < e; t++) {
        var r = un[t];
        r[0](0, r[1]);
      }
      (un = []), Ui.extend(it.triggers, cn);
    };
    it.async = function () {
      for (var e in cn) {
        var t = cn[e];
        cn.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            un.push([t, n]);
          });
      }
    };
    it.async();
    Js.exports = it;
  });
  var tu = c((zH, eu) => {
    "use strict";
    var ze = Fe(),
      fn = ln();
    ze.define(
      "ix",
      (eu.exports = function (e, t) {
        var r = {},
          n,
          i = e(window),
          o = ".w-ix",
          a = e.tram,
          s = ze.env,
          u = s(),
          f = s.chrome && s.chrome < 35,
          v = "none 0s ease 0s",
          d = e(),
          E = {},
          h = [],
          m = [],
          _ = [],
          P,
          A = 1,
          R = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav",
          };
        (r.init = function (V) {
          setTimeout(function () {
            x(V);
          }, 1);
        }),
          (r.preview = function () {
            (n = !1),
              (A = 100),
              setTimeout(function () {
                x(window.__wf_ix);
              }, 1);
          }),
          (r.design = function () {
            (n = !0), r.destroy();
          }),
          (r.destroy = function () {
            (P = !0),
              d.each(Y),
              ze.scroll.off(Z),
              fn.async(),
              (h = []),
              (m = []),
              (_ = []);
          }),
          (r.ready = function () {
            if (u) return s("design") ? r.design() : r.preview();
            E && P && ((P = !1), N());
          }),
          (r.run = M),
          (r.style = u ? F : $);
        function x(V) {
          V &&
            ((E = {}),
            t.each(V, function (H) {
              E[H.slug] = H.value;
            }),
            N());
        }
        function N() {
          q(), fn.init(), ze.redraw.up();
        }
        function q() {
          var V = e("[data-ix]");
          V.length &&
            (V.each(Y),
            V.each(L),
            h.length && (ze.scroll.on(Z), setTimeout(Z, 1)),
            m.length && ze.load(re),
            _.length && setTimeout(ne, A));
        }
        function L(V, H) {
          var T = e(H),
            W = T.attr("data-ix"),
            X = E[W];
          if (X) {
            var G = X.triggers;
            G &&
              (r.style(T, X.style),
              t.each(G, function (D) {
                var p = {},
                  U = D.type,
                  k = D.stepsB && D.stepsB.length;
                function I() {
                  M(D, T, { group: "A" });
                }
                function J() {
                  M(D, T, { group: "B" });
                }
                if (U === "load") {
                  D.preload && !u ? m.push(I) : _.push(I);
                  return;
                }
                if (U === "click") {
                  T.on("click" + o, function (g) {
                    ze.validClick(g.currentTarget) &&
                      (T.attr("href") === "#" && g.preventDefault(),
                      M(D, T, { group: p.clicked ? "B" : "A" }),
                      k && (p.clicked = !p.clicked));
                  }),
                    (d = d.add(T));
                  return;
                }
                if (U === "hover") {
                  T.on("mouseenter" + o, I),
                    T.on("mouseleave" + o, J),
                    (d = d.add(T));
                  return;
                }
                if (U === "scroll") {
                  h.push({
                    el: T,
                    trigger: D,
                    state: { active: !1 },
                    offsetTop: z(D.offsetTop),
                    offsetBot: z(D.offsetBot),
                  });
                  return;
                }
                var ce = R[U];
                if (ce) {
                  var oe = T.closest(ce);
                  oe.on(fn.types.INTRO, I).on(fn.types.OUTRO, J),
                    (d = d.add(oe));
                  return;
                }
              }));
          }
        }
        function z(V) {
          if (!V) return 0;
          V = String(V);
          var H = parseInt(V, 10);
          return H !== H
            ? 0
            : (V.indexOf("%") > 0 && ((H /= 100), H >= 1 && (H = 0.999)), H);
        }
        function Y(V, H) {
          e(H).off(o);
        }
        function Z() {
          for (
            var V = i.scrollTop(), H = i.height(), T = h.length, W = 0;
            W < T;
            W++
          ) {
            var X = h[W],
              G = X.el,
              D = X.trigger,
              p = D.stepsB && D.stepsB.length,
              U = X.state,
              k = G.offset().top,
              I = G.outerHeight(),
              J = X.offsetTop,
              ce = X.offsetBot;
            J < 1 && J > 0 && (J *= H), ce < 1 && ce > 0 && (ce *= H);
            var oe = k + I - J >= V && k + ce <= V + H;
            oe !== U.active &&
              ((oe === !1 && !p) ||
                ((U.active = oe), M(D, G, { group: oe ? "A" : "B" })));
          }
        }
        function re() {
          for (var V = m.length, H = 0; H < V; H++) m[H]();
        }
        function ne() {
          for (var V = _.length, H = 0; H < V; H++) _[H]();
        }
        function M(V, H, T, W) {
          T = T || {};
          var X = T.done,
            G = V.preserve3d;
          if (n && !T.force) return;
          var D = T.group || "A",
            p = V["loop" + D],
            U = V["steps" + D];
          if (!U || !U.length) return;
          if ((U.length < 2 && (p = !1), !W)) {
            var k = V.selector;
            k &&
              (V.descend
                ? (H = H.find(k))
                : V.siblings
                ? (H = H.siblings(k))
                : (H = e(k)),
              u && H.attr("data-ix-affect", 1)),
              f && H.addClass("w-ix-emptyfix"),
              G && H.css("transform-style", "preserve-3d");
          }
          for (var I = a(H), J = { omit3d: !G }, ce = 0; ce < U.length; ce++)
            w(I, U[ce], J);
          function oe() {
            if (p) return M(V, H, T, !0);
            J.width === "auto" && I.set({ width: "auto" }),
              J.height === "auto" && I.set({ height: "auto" }),
              X && X();
          }
          J.start ? I.then(oe) : oe();
        }
        function w(V, H, T) {
          var W = "add",
            X = "start";
          T.start && (W = X = "then");
          var G = H.transition;
          if (G) {
            G = G.split(",");
            for (var D = 0; D < G.length; D++) {
              var p = G[D];
              V[W](p);
            }
          }
          var U = j(H, T) || {};
          if (
            (U.width != null && (T.width = U.width),
            U.height != null && (T.height = U.height),
            G == null)
          ) {
            T.start
              ? V.then(function () {
                  var J = this.queue;
                  this.set(U),
                    U.display && (V.redraw(), ze.redraw.up()),
                    (this.queue = J),
                    this.next();
                })
              : (V.set(U), U.display && (V.redraw(), ze.redraw.up()));
            var k = U.wait;
            k != null && (V.wait(k), (T.start = !0));
          } else {
            if (U.display) {
              var I = U.display;
              delete U.display,
                T.start
                  ? V.then(function () {
                      var J = this.queue;
                      this.set({ display: I }).redraw(),
                        ze.redraw.up(),
                        (this.queue = J),
                        this.next();
                    })
                  : (V.set({ display: I }).redraw(), ze.redraw.up());
            }
            V[X](U), (T.start = !0);
          }
        }
        function F(V, H) {
          var T = a(V);
          if (!e.isEmptyObject(H)) {
            V.css("transition", "");
            var W = V.css("transition");
            W === v && (W = T.upstream = null),
              (T.upstream = v),
              T.set(j(H)),
              (T.upstream = W);
          }
        }
        function $(V, H) {
          a(V).set(j(H));
        }
        function j(V, H) {
          var T = H && H.omit3d,
            W = {},
            X = !1;
          for (var G in V)
            G !== "transition" &&
              G !== "keysort" &&
              ((T &&
                (G === "z" ||
                  G === "rotateX" ||
                  G === "rotateY" ||
                  G === "scaleZ")) ||
                ((W[G] = V[G]), (X = !0)));
          return X ? W : null;
        }
        return r;
      })
    );
  });
  var pn = c((KH, iu) => {
    "use strict";
    var Vi = ln();
    function ru(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var lT = window.jQuery,
      dn = {},
      nu = ".w-ix",
      fT = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), ru(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), ru(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + nu, OUTRO: "w-ix-outro" + nu };
    lT.extend(dn.triggers, fT);
    iu.exports = dn;
  });
  var ou = c((YH, dt) => {
    function Hi(e) {
      return (
        (dt.exports = Hi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Hi(e)
      );
    }
    (dt.exports = Hi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var vn = c(($H, _r) => {
    var dT = ou().default;
    function au(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (au = function (i) {
        return i ? r : t;
      })(e);
    }
    function pT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (dT(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = au(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (_r.exports = pT),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var su = c((QH, Tr) => {
    function vT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = vT),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ye = c((ZH, uu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    uu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Xt = c((JH, cu) => {
    cu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ct = c((eW, lu) => {
    var gT = Xt();
    lu.exports = !gT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = c((tW, fu) => {
    var br = Function.prototype.call;
    fu.exports = br.bind
      ? br.bind(br)
      : function () {
          return br.apply(br, arguments);
        };
  });
  var gu = c((vu) => {
    "use strict";
    var du = {}.propertyIsEnumerable,
      pu = Object.getOwnPropertyDescriptor,
      hT = pu && !du.call({ 1: 2 }, 1);
    vu.f = hT
      ? function (t) {
          var r = pu(this, t);
          return !!r && r.enumerable;
        }
      : du;
  });
  var Wi = c((nW, hu) => {
    hu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ke = c((iW, yu) => {
    var Eu = Function.prototype,
      Xi = Eu.bind,
      ki = Eu.call,
      ET = Xi && Xi.bind(ki);
    yu.exports = Xi
      ? function (e) {
          return e && ET(ki, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return ki.apply(e, arguments);
            }
          );
        };
  });
  var Tu = c((oW, _u) => {
    var mu = Ke(),
      yT = mu({}.toString),
      mT = mu("".slice);
    _u.exports = function (e) {
      return mT(yT(e), 8, -1);
    };
  });
  var Iu = c((aW, bu) => {
    var _T = ye(),
      TT = Ke(),
      bT = Xt(),
      IT = Tu(),
      Bi = _T.Object,
      OT = TT("".split);
    bu.exports = bT(function () {
      return !Bi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return IT(e) == "String" ? OT(e, "") : Bi(e);
        }
      : Bi;
  });
  var ji = c((sW, Ou) => {
    var wT = ye(),
      AT = wT.TypeError;
    Ou.exports = function (e) {
      if (e == null) throw AT("Can't call method on " + e);
      return e;
    };
  });
  var Ir = c((uW, wu) => {
    var xT = Iu(),
      ST = ji();
    wu.exports = function (e) {
      return xT(ST(e));
    };
  });
  var ot = c((cW, Au) => {
    Au.exports = function (e) {
      return typeof e == "function";
    };
  });
  var kt = c((lW, xu) => {
    var RT = ot();
    xu.exports = function (e) {
      return typeof e == "object" ? e !== null : RT(e);
    };
  });
  var Or = c((fW, Su) => {
    var zi = ye(),
      CT = ot(),
      NT = function (e) {
        return CT(e) ? e : void 0;
      };
    Su.exports = function (e, t) {
      return arguments.length < 2 ? NT(zi[e]) : zi[e] && zi[e][t];
    };
  });
  var Cu = c((dW, Ru) => {
    var LT = Ke();
    Ru.exports = LT({}.isPrototypeOf);
  });
  var Lu = c((pW, Nu) => {
    var PT = Or();
    Nu.exports = PT("navigator", "userAgent") || "";
  });
  var Uu = c((vW, Gu) => {
    var Fu = ye(),
      Ki = Lu(),
      Pu = Fu.process,
      qu = Fu.Deno,
      Mu = (Pu && Pu.versions) || (qu && qu.version),
      Du = Mu && Mu.v8,
      Ye,
      En;
    Du &&
      ((Ye = Du.split(".")),
      (En = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1])));
    !En &&
      Ki &&
      ((Ye = Ki.match(/Edge\/(\d+)/)),
      (!Ye || Ye[1] >= 74) &&
        ((Ye = Ki.match(/Chrome\/(\d+)/)), Ye && (En = +Ye[1])));
    Gu.exports = En;
  });
  var Yi = c((gW, Hu) => {
    var Vu = Uu(),
      qT = Xt();
    Hu.exports =
      !!Object.getOwnPropertySymbols &&
      !qT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Vu && Vu < 41)
        );
      });
  });
  var $i = c((hW, Wu) => {
    var MT = Yi();
    Wu.exports = MT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Qi = c((EW, Xu) => {
    var DT = ye(),
      FT = Or(),
      GT = ot(),
      UT = Cu(),
      VT = $i(),
      HT = DT.Object;
    Xu.exports = VT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = FT("Symbol");
          return GT(t) && UT(t.prototype, HT(e));
        };
  });
  var Bu = c((yW, ku) => {
    var WT = ye(),
      XT = WT.String;
    ku.exports = function (e) {
      try {
        return XT(e);
      } catch {
        return "Object";
      }
    };
  });
  var zu = c((mW, ju) => {
    var kT = ye(),
      BT = ot(),
      jT = Bu(),
      zT = kT.TypeError;
    ju.exports = function (e) {
      if (BT(e)) return e;
      throw zT(jT(e) + " is not a function");
    };
  });
  var Yu = c((_W, Ku) => {
    var KT = zu();
    Ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : KT(r);
    };
  });
  var Qu = c((TW, $u) => {
    var YT = ye(),
      Zi = hn(),
      Ji = ot(),
      eo = kt(),
      $T = YT.TypeError;
    $u.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e)))) ||
        (Ji((r = e.valueOf)) && !eo((n = Zi(r, e)))) ||
        (t !== "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e))))
      )
        return n;
      throw $T("Can't convert object to primitive value");
    };
  });
  var Ju = c((bW, Zu) => {
    Zu.exports = !1;
  });
  var yn = c((IW, tc) => {
    var ec = ye(),
      QT = Object.defineProperty;
    tc.exports = function (e, t) {
      try {
        QT(ec, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ec[e] = t;
      }
      return t;
    };
  });
  var mn = c((OW, nc) => {
    var ZT = ye(),
      JT = yn(),
      rc = "__core-js_shared__",
      eb = ZT[rc] || JT(rc, {});
    nc.exports = eb;
  });
  var to = c((wW, oc) => {
    var tb = Ju(),
      ic = mn();
    (oc.exports = function (e, t) {
      return ic[e] || (ic[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: tb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var sc = c((AW, ac) => {
    var rb = ye(),
      nb = ji(),
      ib = rb.Object;
    ac.exports = function (e) {
      return ib(nb(e));
    };
  });
  var _t = c((xW, uc) => {
    var ob = Ke(),
      ab = sc(),
      sb = ob({}.hasOwnProperty);
    uc.exports =
      Object.hasOwn ||
      function (t, r) {
        return sb(ab(t), r);
      };
  });
  var ro = c((SW, cc) => {
    var ub = Ke(),
      cb = 0,
      lb = Math.random(),
      fb = ub((1).toString);
    cc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + fb(++cb + lb, 36);
    };
  });
  var no = c((RW, vc) => {
    var db = ye(),
      pb = to(),
      lc = _t(),
      vb = ro(),
      fc = Yi(),
      pc = $i(),
      Bt = pb("wks"),
      Nt = db.Symbol,
      dc = Nt && Nt.for,
      gb = pc ? Nt : (Nt && Nt.withoutSetter) || vb;
    vc.exports = function (e) {
      if (!lc(Bt, e) || !(fc || typeof Bt[e] == "string")) {
        var t = "Symbol." + e;
        fc && lc(Nt, e)
          ? (Bt[e] = Nt[e])
          : pc && dc
          ? (Bt[e] = dc(t))
          : (Bt[e] = gb(t));
      }
      return Bt[e];
    };
  });
  var yc = c((CW, Ec) => {
    var hb = ye(),
      Eb = hn(),
      gc = kt(),
      hc = Qi(),
      yb = Yu(),
      mb = Qu(),
      _b = no(),
      Tb = hb.TypeError,
      bb = _b("toPrimitive");
    Ec.exports = function (e, t) {
      if (!gc(e) || hc(e)) return e;
      var r = yb(e, bb),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = Eb(r, e, t)), !gc(n) || hc(n))
        )
          return n;
        throw Tb("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), mb(e, t);
    };
  });
  var io = c((NW, mc) => {
    var Ib = yc(),
      Ob = Qi();
    mc.exports = function (e) {
      var t = Ib(e, "string");
      return Ob(t) ? t : t + "";
    };
  });
  var ao = c((LW, Tc) => {
    var wb = ye(),
      _c = kt(),
      oo = wb.document,
      Ab = _c(oo) && _c(oo.createElement);
    Tc.exports = function (e) {
      return Ab ? oo.createElement(e) : {};
    };
  });
  var so = c((PW, bc) => {
    var xb = Ct(),
      Sb = Xt(),
      Rb = ao();
    bc.exports =
      !xb &&
      !Sb(function () {
        return (
          Object.defineProperty(Rb("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var uo = c((Oc) => {
    var Cb = Ct(),
      Nb = hn(),
      Lb = gu(),
      Pb = Wi(),
      qb = Ir(),
      Mb = io(),
      Db = _t(),
      Fb = so(),
      Ic = Object.getOwnPropertyDescriptor;
    Oc.f = Cb
      ? Ic
      : function (t, r) {
          if (((t = qb(t)), (r = Mb(r)), Fb))
            try {
              return Ic(t, r);
            } catch {}
          if (Db(t, r)) return Pb(!Nb(Lb.f, t, r), t[r]);
        };
  });
  var wr = c((MW, Ac) => {
    var wc = ye(),
      Gb = kt(),
      Ub = wc.String,
      Vb = wc.TypeError;
    Ac.exports = function (e) {
      if (Gb(e)) return e;
      throw Vb(Ub(e) + " is not an object");
    };
  });
  var Ar = c((Rc) => {
    var Hb = ye(),
      Wb = Ct(),
      Xb = so(),
      xc = wr(),
      kb = io(),
      Bb = Hb.TypeError,
      Sc = Object.defineProperty;
    Rc.f = Wb
      ? Sc
      : function (t, r, n) {
          if ((xc(t), (r = kb(r)), xc(n), Xb))
            try {
              return Sc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw Bb("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var _n = c((FW, Cc) => {
    var jb = Ct(),
      zb = Ar(),
      Kb = Wi();
    Cc.exports = jb
      ? function (e, t, r) {
          return zb.f(e, t, Kb(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var lo = c((GW, Nc) => {
    var Yb = Ke(),
      $b = ot(),
      co = mn(),
      Qb = Yb(Function.toString);
    $b(co.inspectSource) ||
      (co.inspectSource = function (e) {
        return Qb(e);
      });
    Nc.exports = co.inspectSource;
  });
  var qc = c((UW, Pc) => {
    var Zb = ye(),
      Jb = ot(),
      eI = lo(),
      Lc = Zb.WeakMap;
    Pc.exports = Jb(Lc) && /native code/.test(eI(Lc));
  });
  var fo = c((VW, Dc) => {
    var tI = to(),
      rI = ro(),
      Mc = tI("keys");
    Dc.exports = function (e) {
      return Mc[e] || (Mc[e] = rI(e));
    };
  });
  var Tn = c((HW, Fc) => {
    Fc.exports = {};
  });
  var Xc = c((WW, Wc) => {
    var nI = qc(),
      Hc = ye(),
      po = Ke(),
      iI = kt(),
      oI = _n(),
      vo = _t(),
      go = mn(),
      aI = fo(),
      sI = Tn(),
      Gc = "Object already initialized",
      Eo = Hc.TypeError,
      uI = Hc.WeakMap,
      bn,
      xr,
      In,
      cI = function (e) {
        return In(e) ? xr(e) : bn(e, {});
      },
      lI = function (e) {
        return function (t) {
          var r;
          if (!iI(t) || (r = xr(t)).type !== e)
            throw Eo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    nI || go.state
      ? ((Tt = go.state || (go.state = new uI())),
        (Uc = po(Tt.get)),
        (ho = po(Tt.has)),
        (Vc = po(Tt.set)),
        (bn = function (e, t) {
          if (ho(Tt, e)) throw new Eo(Gc);
          return (t.facade = e), Vc(Tt, e, t), t;
        }),
        (xr = function (e) {
          return Uc(Tt, e) || {};
        }),
        (In = function (e) {
          return ho(Tt, e);
        }))
      : ((Lt = aI("state")),
        (sI[Lt] = !0),
        (bn = function (e, t) {
          if (vo(e, Lt)) throw new Eo(Gc);
          return (t.facade = e), oI(e, Lt, t), t;
        }),
        (xr = function (e) {
          return vo(e, Lt) ? e[Lt] : {};
        }),
        (In = function (e) {
          return vo(e, Lt);
        }));
    var Tt, Uc, ho, Vc, Lt;
    Wc.exports = { set: bn, get: xr, has: In, enforce: cI, getterFor: lI };
  });
  var jc = c((XW, Bc) => {
    var yo = Ct(),
      fI = _t(),
      kc = Function.prototype,
      dI = yo && Object.getOwnPropertyDescriptor,
      mo = fI(kc, "name"),
      pI = mo && function () {}.name === "something",
      vI = mo && (!yo || (yo && dI(kc, "name").configurable));
    Bc.exports = { EXISTS: mo, PROPER: pI, CONFIGURABLE: vI };
  });
  var Qc = c((kW, $c) => {
    var gI = ye(),
      zc = ot(),
      hI = _t(),
      Kc = _n(),
      EI = yn(),
      yI = lo(),
      Yc = Xc(),
      mI = jc().CONFIGURABLE,
      _I = Yc.get,
      TI = Yc.enforce,
      bI = String(String).split("String");
    ($c.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (zc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!hI(r, "name") || (mI && r.name !== s)) && Kc(r, "name", s),
          (u = TI(r)),
          u.source || (u.source = bI.join(typeof s == "string" ? s : ""))),
        e === gI)
      ) {
        o ? (e[t] = r) : EI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (zc(this) && _I(this).source) || yI(this);
    });
  });
  var _o = c((BW, Zc) => {
    var II = Math.ceil,
      OI = Math.floor;
    Zc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? OI : II)(t);
    };
  });
  var el = c((jW, Jc) => {
    var wI = _o(),
      AI = Math.max,
      xI = Math.min;
    Jc.exports = function (e, t) {
      var r = wI(e);
      return r < 0 ? AI(r + t, 0) : xI(r, t);
    };
  });
  var rl = c((zW, tl) => {
    var SI = _o(),
      RI = Math.min;
    tl.exports = function (e) {
      return e > 0 ? RI(SI(e), 9007199254740991) : 0;
    };
  });
  var il = c((KW, nl) => {
    var CI = rl();
    nl.exports = function (e) {
      return CI(e.length);
    };
  });
  var To = c((YW, al) => {
    var NI = Ir(),
      LI = el(),
      PI = il(),
      ol = function (e) {
        return function (t, r, n) {
          var i = NI(t),
            o = PI(i),
            a = LI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    al.exports = { includes: ol(!0), indexOf: ol(!1) };
  });
  var Io = c(($W, ul) => {
    var qI = Ke(),
      bo = _t(),
      MI = Ir(),
      DI = To().indexOf,
      FI = Tn(),
      sl = qI([].push);
    ul.exports = function (e, t) {
      var r = MI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !bo(FI, o) && bo(r, o) && sl(i, o);
      for (; t.length > n; ) bo(r, (o = t[n++])) && (~DI(i, o) || sl(i, o));
      return i;
    };
  });
  var On = c((QW, cl) => {
    cl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var fl = c((ll) => {
    var GI = Io(),
      UI = On(),
      VI = UI.concat("length", "prototype");
    ll.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return GI(t, VI);
      };
  });
  var pl = c((dl) => {
    dl.f = Object.getOwnPropertySymbols;
  });
  var gl = c((eX, vl) => {
    var HI = Or(),
      WI = Ke(),
      XI = fl(),
      kI = pl(),
      BI = wr(),
      jI = WI([].concat);
    vl.exports =
      HI("Reflect", "ownKeys") ||
      function (t) {
        var r = XI.f(BI(t)),
          n = kI.f;
        return n ? jI(r, n(t)) : r;
      };
  });
  var El = c((tX, hl) => {
    var zI = _t(),
      KI = gl(),
      YI = uo(),
      $I = Ar();
    hl.exports = function (e, t) {
      for (var r = KI(t), n = $I.f, i = YI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        zI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var ml = c((rX, yl) => {
    var QI = Xt(),
      ZI = ot(),
      JI = /#|\.prototype\./,
      Sr = function (e, t) {
        var r = tO[eO(e)];
        return r == nO ? !0 : r == rO ? !1 : ZI(t) ? QI(t) : !!t;
      },
      eO = (Sr.normalize = function (e) {
        return String(e).replace(JI, ".").toLowerCase();
      }),
      tO = (Sr.data = {}),
      rO = (Sr.NATIVE = "N"),
      nO = (Sr.POLYFILL = "P");
    yl.exports = Sr;
  });
  var Tl = c((nX, _l) => {
    var Oo = ye(),
      iO = uo().f,
      oO = _n(),
      aO = Qc(),
      sO = yn(),
      uO = El(),
      cO = ml();
    _l.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        v;
      if (
        (n
          ? (a = Oo)
          : i
          ? (a = Oo[r] || sO(r, {}))
          : (a = (Oo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((v = iO(a, s)), (u = v && v.value)) : (u = a[s]),
            (o = cO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            uO(f, u);
          }
          (e.sham || (u && u.sham)) && oO(f, "sham", !0), aO(a, s, f, e);
        }
    };
  });
  var Il = c((iX, bl) => {
    var lO = Io(),
      fO = On();
    bl.exports =
      Object.keys ||
      function (t) {
        return lO(t, fO);
      };
  });
  var wl = c((oX, Ol) => {
    var dO = Ct(),
      pO = Ar(),
      vO = wr(),
      gO = Ir(),
      hO = Il();
    Ol.exports = dO
      ? Object.defineProperties
      : function (t, r) {
          vO(t);
          for (var n = gO(r), i = hO(r), o = i.length, a = 0, s; o > a; )
            pO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var xl = c((aX, Al) => {
    var EO = Or();
    Al.exports = EO("document", "documentElement");
  });
  var Ml = c((sX, ql) => {
    var yO = wr(),
      mO = wl(),
      Sl = On(),
      _O = Tn(),
      TO = xl(),
      bO = ao(),
      IO = fo(),
      Rl = ">",
      Cl = "<",
      Ao = "prototype",
      xo = "script",
      Ll = IO("IE_PROTO"),
      wo = function () {},
      Pl = function (e) {
        return Cl + xo + Rl + e + Cl + "/" + xo + Rl;
      },
      Nl = function (e) {
        e.write(Pl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      OO = function () {
        var e = bO("iframe"),
          t = "java" + xo + ":",
          r;
        return (
          (e.style.display = "none"),
          TO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Pl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      wn,
      An = function () {
        try {
          wn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && wn
              ? Nl(wn)
              : OO()
            : Nl(wn);
        for (var e = Sl.length; e--; ) delete An[Ao][Sl[e]];
        return An();
      };
    _O[Ll] = !0;
    ql.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((wo[Ao] = yO(t)), (n = new wo()), (wo[Ao] = null), (n[Ll] = t))
            : (n = An()),
          r === void 0 ? n : mO(n, r)
        );
      };
  });
  var Fl = c((uX, Dl) => {
    var wO = no(),
      AO = Ml(),
      xO = Ar(),
      So = wO("unscopables"),
      Ro = Array.prototype;
    Ro[So] == null && xO.f(Ro, So, { configurable: !0, value: AO(null) });
    Dl.exports = function (e) {
      Ro[So][e] = !0;
    };
  });
  var Gl = c(() => {
    "use strict";
    var SO = Tl(),
      RO = To().includes,
      CO = Fl();
    SO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return RO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    CO("includes");
  });
  var Vl = c((fX, Ul) => {
    var NO = ye(),
      LO = Ke();
    Ul.exports = function (e, t) {
      return LO(NO[e].prototype[t]);
    };
  });
  var Wl = c((dX, Hl) => {
    Gl();
    var PO = Vl();
    Hl.exports = PO("Array", "includes");
  });
  var kl = c((pX, Xl) => {
    var qO = Wl();
    Xl.exports = qO;
  });
  var jl = c((vX, Bl) => {
    var MO = kl();
    Bl.exports = MO;
  });
  var Co = c((gX, zl) => {
    var DO =
      typeof global == "object" && global && global.Object === Object && global;
    zl.exports = DO;
  });
  var $e = c((hX, Kl) => {
    var FO = Co(),
      GO = typeof self == "object" && self && self.Object === Object && self,
      UO = FO || GO || Function("return this")();
    Kl.exports = UO;
  });
  var jt = c((EX, Yl) => {
    var VO = $e(),
      HO = VO.Symbol;
    Yl.exports = HO;
  });
  var Jl = c((yX, Zl) => {
    var $l = jt(),
      Ql = Object.prototype,
      WO = Ql.hasOwnProperty,
      XO = Ql.toString,
      Rr = $l ? $l.toStringTag : void 0;
    function kO(e) {
      var t = WO.call(e, Rr),
        r = e[Rr];
      try {
        e[Rr] = void 0;
        var n = !0;
      } catch {}
      var i = XO.call(e);
      return n && (t ? (e[Rr] = r) : delete e[Rr]), i;
    }
    Zl.exports = kO;
  });
  var tf = c((mX, ef) => {
    var BO = Object.prototype,
      jO = BO.toString;
    function zO(e) {
      return jO.call(e);
    }
    ef.exports = zO;
  });
  var bt = c((_X, of) => {
    var rf = jt(),
      KO = Jl(),
      YO = tf(),
      $O = "[object Null]",
      QO = "[object Undefined]",
      nf = rf ? rf.toStringTag : void 0;
    function ZO(e) {
      return e == null
        ? e === void 0
          ? QO
          : $O
        : nf && nf in Object(e)
        ? KO(e)
        : YO(e);
    }
    of.exports = ZO;
  });
  var No = c((TX, af) => {
    function JO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    af.exports = JO;
  });
  var Lo = c((bX, sf) => {
    var ew = No(),
      tw = ew(Object.getPrototypeOf, Object);
    sf.exports = tw;
  });
  var pt = c((IX, uf) => {
    function rw(e) {
      return e != null && typeof e == "object";
    }
    uf.exports = rw;
  });
  var Po = c((OX, lf) => {
    var nw = bt(),
      iw = Lo(),
      ow = pt(),
      aw = "[object Object]",
      sw = Function.prototype,
      uw = Object.prototype,
      cf = sw.toString,
      cw = uw.hasOwnProperty,
      lw = cf.call(Object);
    function fw(e) {
      if (!ow(e) || nw(e) != aw) return !1;
      var t = iw(e);
      if (t === null) return !0;
      var r = cw.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && cf.call(r) == lw;
    }
    lf.exports = fw;
  });
  var ff = c((qo) => {
    "use strict";
    Object.defineProperty(qo, "__esModule", { value: !0 });
    qo.default = dw;
    function dw(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var df = c((Do, Mo) => {
    "use strict";
    Object.defineProperty(Do, "__esModule", { value: !0 });
    var pw = ff(),
      vw = gw(pw);
    function gw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zt;
    typeof self < "u"
      ? (zt = self)
      : typeof window < "u"
      ? (zt = window)
      : typeof global < "u"
      ? (zt = global)
      : typeof Mo < "u"
      ? (zt = Mo)
      : (zt = Function("return this")());
    var hw = (0, vw.default)(zt);
    Do.default = hw;
  });
  var Fo = c((Cr) => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = hf;
    var Ew = Po(),
      yw = gf(Ew),
      mw = df(),
      pf = gf(mw);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var vf = (Cr.ActionTypes = { INIT: "@@redux/INIT" });
    function hf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(hf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function v() {
        return o;
      }
      function d(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var P = !0;
        return (
          f(),
          s.push(_),
          function () {
            if (P) {
              (P = !1), f();
              var R = s.indexOf(_);
              s.splice(R, 1);
            }
          }
        );
      }
      function E(_) {
        if (!(0, yw.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var P = (a = s), A = 0; A < P.length; A++) P[A]();
        return _;
      }
      function h(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), E({ type: vf.INIT });
      }
      function m() {
        var _,
          P = d;
        return (
          (_ = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function x() {
                R.next && R.next(v());
              }
              x();
              var N = P(x);
              return { unsubscribe: N };
            },
          }),
          (_[pf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        E({ type: vf.INIT }),
        (n = { dispatch: E, subscribe: d, getState: v, replaceReducer: h }),
        (n[pf.default] = m),
        n
      );
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = _w;
    function _w(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var mf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = ww;
    var Ef = Fo(),
      Tw = Po(),
      SX = yf(Tw),
      bw = Uo(),
      RX = yf(bw);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Iw(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Ow(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Ef.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ef.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function ww(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Ow(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var E = !1, h = {}, m = 0; m < o.length; m++) {
          var _ = o[m],
            P = r[_],
            A = f[_],
            R = P(A, v);
          if (typeof R > "u") {
            var x = Iw(_, v);
            throw new Error(x);
          }
          (h[_] = R), (E = E || R !== A);
        }
        return E ? h : f;
      };
    }
  });
  var Tf = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = Aw;
    function _f(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Aw(e, t) {
      if (typeof e == "function") return _f(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = _f(a, t));
      }
      return n;
    }
  });
  var Xo = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = xw;
    function xw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var bf = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    var Sw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    ko.default = Lw;
    var Rw = Xo(),
      Cw = Nw(Rw);
    function Nw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Lw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            v = {
              getState: s.getState,
              dispatch: function (E) {
                return u(E);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(v);
            })),
            (u = Cw.default.apply(void 0, f)(s.dispatch)),
            Sw({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Bo = c((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
        void 0;
    var Pw = Fo(),
      qw = Kt(Pw),
      Mw = mf(),
      Dw = Kt(Mw),
      Fw = Tf(),
      Gw = Kt(Fw),
      Uw = bf(),
      Vw = Kt(Uw),
      Hw = Xo(),
      Ww = Kt(Hw),
      Xw = Uo(),
      qX = Kt(Xw);
    function Kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = qw.default;
    He.combineReducers = Dw.default;
    He.bindActionCreators = Gw.default;
    He.applyMiddleware = Vw.default;
    He.compose = Ww.default;
  });
  var Qe,
    jo,
    at,
    kw,
    Bw,
    zo,
    jw,
    If = Ee(() => {
      "use strict";
      (Qe = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (jo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (kw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Bw = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (zo = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (jw = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var We,
    zw,
    Ko = Ee(() => {
      "use strict";
      (We = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (zw = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Kw,
    Of = Ee(() => {
      "use strict";
      Kw = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Yw,
    $w,
    Qw,
    Zw,
    Jw,
    eA,
    tA,
    Yo,
    wf = Ee(() => {
      "use strict";
      Ko();
      ({
        TRANSFORM_MOVE: Yw,
        TRANSFORM_SCALE: $w,
        TRANSFORM_ROTATE: Qw,
        TRANSFORM_SKEW: Zw,
        STYLE_SIZE: Jw,
        STYLE_FILTER: eA,
        STYLE_FONT_VARIATION: tA,
      } = We),
        (Yo = {
          [Yw]: !0,
          [$w]: !0,
          [Qw]: !0,
          [Zw]: !0,
          [Jw]: !0,
          [eA]: !0,
          [tA]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yA,
    IX2_ANIMATION_FRAME_CHANGED: () => dA,
    IX2_CLEAR_REQUESTED: () => cA,
    IX2_ELEMENT_STATE_CHANGED: () => EA,
    IX2_EVENT_LISTENER_ADDED: () => lA,
    IX2_EVENT_STATE_CHANGED: () => fA,
    IX2_INSTANCE_ADDED: () => vA,
    IX2_INSTANCE_REMOVED: () => hA,
    IX2_INSTANCE_STARTED: () => gA,
    IX2_MEDIA_QUERIES_DEFINED: () => _A,
    IX2_PARAMETER_CHANGED: () => pA,
    IX2_PLAYBACK_REQUESTED: () => sA,
    IX2_PREVIEW_REQUESTED: () => aA,
    IX2_RAW_DATA_IMPORTED: () => rA,
    IX2_SESSION_INITIALIZED: () => nA,
    IX2_SESSION_STARTED: () => iA,
    IX2_SESSION_STOPPED: () => oA,
    IX2_STOP_REQUESTED: () => uA,
    IX2_TEST_FRAME_RENDERED: () => TA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => mA,
  });
  var rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    EA,
    yA,
    mA,
    _A,
    TA,
    Af = Ee(() => {
      "use strict";
      (rA = "IX2_RAW_DATA_IMPORTED"),
        (nA = "IX2_SESSION_INITIALIZED"),
        (iA = "IX2_SESSION_STARTED"),
        (oA = "IX2_SESSION_STOPPED"),
        (aA = "IX2_PREVIEW_REQUESTED"),
        (sA = "IX2_PLAYBACK_REQUESTED"),
        (uA = "IX2_STOP_REQUESTED"),
        (cA = "IX2_CLEAR_REQUESTED"),
        (lA = "IX2_EVENT_LISTENER_ADDED"),
        (fA = "IX2_EVENT_STATE_CHANGED"),
        (dA = "IX2_ANIMATION_FRAME_CHANGED"),
        (pA = "IX2_PARAMETER_CHANGED"),
        (vA = "IX2_INSTANCE_ADDED"),
        (gA = "IX2_INSTANCE_STARTED"),
        (hA = "IX2_INSTANCE_REMOVED"),
        (EA = "IX2_ELEMENT_STATE_CHANGED"),
        (yA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (mA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (_A = "IX2_MEDIA_QUERIES_DEFINED"),
        (TA = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  De(Re, {
    ABSTRACT_NODE: () => mx,
    AUTO: () => ux,
    BACKGROUND: () => rx,
    BACKGROUND_COLOR: () => tx,
    BAR_DELIMITER: () => fx,
    BORDER_COLOR: () => nx,
    BOUNDARY_SELECTOR: () => AA,
    CHILDREN: () => dx,
    COLON_DELIMITER: () => lx,
    COLOR: () => ix,
    COMMA_DELIMITER: () => cx,
    CONFIG_UNIT: () => qA,
    CONFIG_VALUE: () => CA,
    CONFIG_X_UNIT: () => NA,
    CONFIG_X_VALUE: () => xA,
    CONFIG_Y_UNIT: () => LA,
    CONFIG_Y_VALUE: () => SA,
    CONFIG_Z_UNIT: () => PA,
    CONFIG_Z_VALUE: () => RA,
    DISPLAY: () => ox,
    FILTER: () => QA,
    FLEX: () => ax,
    FONT_VARIATION_SETTINGS: () => ZA,
    HEIGHT: () => ex,
    HTML_ELEMENT: () => Ex,
    IMMEDIATE_CHILDREN: () => px,
    IX2_ID_DELIMITER: () => bA,
    OPACITY: () => $A,
    PARENT: () => gx,
    PLAIN_OBJECT: () => yx,
    PRESERVE_3D: () => hx,
    RENDER_GENERAL: () => Tx,
    RENDER_PLUGIN: () => Ix,
    RENDER_STYLE: () => bx,
    RENDER_TRANSFORM: () => _x,
    ROTATE_X: () => kA,
    ROTATE_Y: () => BA,
    ROTATE_Z: () => jA,
    SCALE_3D: () => XA,
    SCALE_X: () => VA,
    SCALE_Y: () => HA,
    SCALE_Z: () => WA,
    SIBLINGS: () => vx,
    SKEW: () => zA,
    SKEW_X: () => KA,
    SKEW_Y: () => YA,
    TRANSFORM: () => MA,
    TRANSLATE_3D: () => UA,
    TRANSLATE_X: () => DA,
    TRANSLATE_Y: () => FA,
    TRANSLATE_Z: () => GA,
    WF_PAGE: () => IA,
    WIDTH: () => JA,
    WILL_CHANGE: () => sx,
    W_MOD_IX: () => wA,
    W_MOD_JS: () => OA,
  });
  var bA,
    IA,
    OA,
    wA,
    AA,
    xA,
    SA,
    RA,
    CA,
    NA,
    LA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    UA,
    VA,
    HA,
    WA,
    XA,
    kA,
    BA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    vx,
    gx,
    hx,
    Ex,
    yx,
    mx,
    _x,
    Tx,
    bx,
    Ix,
    xf = Ee(() => {
      "use strict";
      (bA = "|"),
        (IA = "data-wf-page"),
        (OA = "w-mod-js"),
        (wA = "w-mod-ix"),
        (AA = ".w-dyn-item"),
        (xA = "xValue"),
        (SA = "yValue"),
        (RA = "zValue"),
        (CA = "value"),
        (NA = "xUnit"),
        (LA = "yUnit"),
        (PA = "zUnit"),
        (qA = "unit"),
        (MA = "transform"),
        (DA = "translateX"),
        (FA = "translateY"),
        (GA = "translateZ"),
        (UA = "translate3d"),
        (VA = "scaleX"),
        (HA = "scaleY"),
        (WA = "scaleZ"),
        (XA = "scale3d"),
        (kA = "rotateX"),
        (BA = "rotateY"),
        (jA = "rotateZ"),
        (zA = "skew"),
        (KA = "skewX"),
        (YA = "skewY"),
        ($A = "opacity"),
        (QA = "filter"),
        (ZA = "font-variation-settings"),
        (JA = "width"),
        (ex = "height"),
        (tx = "backgroundColor"),
        (rx = "background"),
        (nx = "borderColor"),
        (ix = "color"),
        (ox = "display"),
        (ax = "flex"),
        (sx = "willChange"),
        (ux = "AUTO"),
        (cx = ","),
        (lx = ":"),
        (fx = "|"),
        (dx = "CHILDREN"),
        (px = "IMMEDIATE_CHILDREN"),
        (vx = "SIBLINGS"),
        (gx = "PARENT"),
        (hx = "preserve-3d"),
        (Ex = "HTML_ELEMENT"),
        (yx = "PLAIN_OBJECT"),
        (mx = "ABSTRACT_NODE"),
        (_x = "RENDER_TRANSFORM"),
        (Tx = "RENDER_GENERAL"),
        (bx = "RENDER_STYLE"),
        (Ix = "RENDER_PLUGIN");
    });
  var Sf = {};
  De(Sf, {
    ActionAppliesTo: () => zw,
    ActionTypeConsts: () => We,
    EventAppliesTo: () => jo,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => kw,
    EventLimitAffectedElements: () => Bw,
    EventTypeConsts: () => Qe,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => Kw,
    QuickEffectDirectionConsts: () => jw,
    QuickEffectIds: () => zo,
    ReducedMotionTypes: () => Yo,
  });
  var Ge = Ee(() => {
    "use strict";
    If();
    Ko();
    Of();
    wf();
    Af();
    xf();
  });
  var Ox,
    Rf,
    Cf = Ee(() => {
      "use strict";
      Ge();
      ({ IX2_RAW_DATA_IMPORTED: Ox } = Ie),
        (Rf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Ox:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Yt = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var wx =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    _e.clone = Sn;
    _e.addLast = Pf;
    _e.addFirst = qf;
    _e.removeLast = Mf;
    _e.removeFirst = Df;
    _e.insert = Ff;
    _e.removeAt = Gf;
    _e.replaceAt = Uf;
    _e.getIn = Rn;
    _e.set = Cn;
    _e.setIn = Nn;
    _e.update = Hf;
    _e.updateIn = Wf;
    _e.merge = Xf;
    _e.mergeDeep = kf;
    _e.mergeIn = Bf;
    _e.omit = jf;
    _e.addDefaults = zf;
    var Nf = "INVALID_ARGS";
    function Lf(e) {
      throw new Error(e);
    }
    function $o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Ax = {}.hasOwnProperty;
    function Sn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ue(e, t, r) {
      var n = r;
      n == null && Lf(Nf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var v = $o(f);
          if (v.length)
            for (var d = 0; d <= v.length; d++) {
              var E = v[d];
              if (!(e && n[E] !== void 0)) {
                var h = f[E];
                t && xn(n[E]) && xn(h) && (h = Ue(e, t, n[E], h)),
                  !(h === void 0 || h === n[E]) &&
                    (i || ((i = !0), (n = Sn(n))), (n[E] = h));
              }
            }
        }
      }
      return n;
    }
    function xn(e) {
      var t = typeof e > "u" ? "undefined" : wx(e);
      return e != null && (t === "object" || t === "function");
    }
    function Pf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function qf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Mf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Df(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ff(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Gf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Uf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && Lf(Nf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Cn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Sn(i);
      return (o[t] = r), o;
    }
    function Vf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Vf(a, t, r, n + 1);
      }
      return Cn(e, o, i);
    }
    function Nn(e, t, r) {
      return t.length ? Vf(e, t, r, 0) : r;
    }
    function Hf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Cn(e, t, i);
    }
    function Wf(e, t, r) {
      var n = Rn(e, t),
        i = r(n);
      return Nn(e, t, i);
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ue(!1, !1, e, t, r, n, i, o);
    }
    function kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ue(!1, !0, e, t, r, n, i, o);
    }
    function Bf(e, t, r, n, i, o, a) {
      var s = Rn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          v = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        v[d - 7] = arguments[d];
      return (
        v.length
          ? (u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(v)))
          : (u = Ue(!1, !1, s, r, n, i, o, a)),
        Nn(e, t, u)
      );
    }
    function jf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Ax.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = $o(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function zf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ue(!0, !1, e, t, r, n, i, o);
    }
    var xx = {
      clone: Sn,
      addLast: Pf,
      addFirst: qf,
      removeLast: Mf,
      removeFirst: Df,
      insert: Ff,
      removeAt: Gf,
      replaceAt: Uf,
      getIn: Rn,
      set: Cn,
      setIn: Nn,
      update: Hf,
      updateIn: Wf,
      merge: Xf,
      mergeDeep: kf,
      mergeIn: Bf,
      omit: jf,
      addDefaults: zf,
    };
    _e.default = xx;
  });
  var Yf,
    Sx,
    Rx,
    Cx,
    Nx,
    Lx,
    Kf,
    $f,
    Qf = Ee(() => {
      "use strict";
      Ge();
      (Yf = fe(Yt())),
        ({
          IX2_PREVIEW_REQUESTED: Sx,
          IX2_PLAYBACK_REQUESTED: Rx,
          IX2_STOP_REQUESTED: Cx,
          IX2_CLEAR_REQUESTED: Nx,
        } = Ie),
        (Lx = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Kf = Object.create(null, {
          [Sx]: { value: "preview" },
          [Rx]: { value: "playback" },
          [Cx]: { value: "stop" },
          [Nx]: { value: "clear" },
        })),
        ($f = (e = Lx, t) => {
          if (t.type in Kf) {
            let r = [Kf[t.type]];
            return (0, Yf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Le,
    Px,
    qx,
    Mx,
    Dx,
    Fx,
    Gx,
    Ux,
    Vx,
    Hx,
    Wx,
    Zf,
    Xx,
    Jf,
    ed = Ee(() => {
      "use strict";
      Ge();
      (Le = fe(Yt())),
        ({
          IX2_SESSION_INITIALIZED: Px,
          IX2_SESSION_STARTED: qx,
          IX2_TEST_FRAME_RENDERED: Mx,
          IX2_SESSION_STOPPED: Dx,
          IX2_EVENT_LISTENER_ADDED: Fx,
          IX2_EVENT_STATE_CHANGED: Gx,
          IX2_ANIMATION_FRAME_CHANGED: Ux,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Vx,
          IX2_VIEWPORT_WIDTH_CHANGED: Hx,
          IX2_MEDIA_QUERIES_DEFINED: Wx,
        } = Ie),
        (Zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Xx = 20),
        (Jf = (e = Zf, t) => {
          switch (t.type) {
            case Px: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Le.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case qx:
              return (0, Le.set)(e, "active", !0);
            case Mx: {
              let {
                payload: { step: r = Xx },
              } = t;
              return (0, Le.set)(e, "tick", e.tick + r);
            }
            case Dx:
              return Zf;
            case Ux: {
              let {
                payload: { now: r },
              } = t;
              return (0, Le.set)(e, "tick", r);
            }
            case Fx: {
              let r = (0, Le.addLast)(e.eventListeners, t.payload);
              return (0, Le.set)(e, "eventListeners", r);
            }
            case Gx: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Le.setIn)(e, ["eventState", r], n);
            }
            case Vx: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Le.setIn)(e, ["playbackState", r], n);
            }
            case Hx: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Le.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Wx:
              return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var rd = c((ZX, td) => {
    function kx() {
      (this.__data__ = []), (this.size = 0);
    }
    td.exports = kx;
  });
  var Ln = c((JX, nd) => {
    function Bx(e, t) {
      return e === t || (e !== e && t !== t);
    }
    nd.exports = Bx;
  });
  var Nr = c((ek, id) => {
    var jx = Ln();
    function zx(e, t) {
      for (var r = e.length; r--; ) if (jx(e[r][0], t)) return r;
      return -1;
    }
    id.exports = zx;
  });
  var ad = c((tk, od) => {
    var Kx = Nr(),
      Yx = Array.prototype,
      $x = Yx.splice;
    function Qx(e) {
      var t = this.__data__,
        r = Kx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : $x.call(t, r, 1), --this.size, !0;
    }
    od.exports = Qx;
  });
  var ud = c((rk, sd) => {
    var Zx = Nr();
    function Jx(e) {
      var t = this.__data__,
        r = Zx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    sd.exports = Jx;
  });
  var ld = c((nk, cd) => {
    var eS = Nr();
    function tS(e) {
      return eS(this.__data__, e) > -1;
    }
    cd.exports = tS;
  });
  var dd = c((ik, fd) => {
    var rS = Nr();
    function nS(e, t) {
      var r = this.__data__,
        n = rS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    fd.exports = nS;
  });
  var Lr = c((ok, pd) => {
    var iS = rd(),
      oS = ad(),
      aS = ud(),
      sS = ld(),
      uS = dd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = iS;
    $t.prototype.delete = oS;
    $t.prototype.get = aS;
    $t.prototype.has = sS;
    $t.prototype.set = uS;
    pd.exports = $t;
  });
  var gd = c((ak, vd) => {
    var cS = Lr();
    function lS() {
      (this.__data__ = new cS()), (this.size = 0);
    }
    vd.exports = lS;
  });
  var Ed = c((sk, hd) => {
    function fS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    hd.exports = fS;
  });
  var md = c((uk, yd) => {
    function dS(e) {
      return this.__data__.get(e);
    }
    yd.exports = dS;
  });
  var Td = c((ck, _d) => {
    function pS(e) {
      return this.__data__.has(e);
    }
    _d.exports = pS;
  });
  var st = c((lk, bd) => {
    function vS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    bd.exports = vS;
  });
  var Qo = c((fk, Id) => {
    var gS = bt(),
      hS = st(),
      ES = "[object AsyncFunction]",
      yS = "[object Function]",
      mS = "[object GeneratorFunction]",
      _S = "[object Proxy]";
    function TS(e) {
      if (!hS(e)) return !1;
      var t = gS(e);
      return t == yS || t == mS || t == ES || t == _S;
    }
    Id.exports = TS;
  });
  var wd = c((dk, Od) => {
    var bS = $e(),
      IS = bS["__core-js_shared__"];
    Od.exports = IS;
  });
  var Sd = c((pk, xd) => {
    var Zo = wd(),
      Ad = (function () {
        var e = /[^.]+$/.exec((Zo && Zo.keys && Zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function OS(e) {
      return !!Ad && Ad in e;
    }
    xd.exports = OS;
  });
  var Jo = c((vk, Rd) => {
    var wS = Function.prototype,
      AS = wS.toString;
    function xS(e) {
      if (e != null) {
        try {
          return AS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Rd.exports = xS;
  });
  var Nd = c((gk, Cd) => {
    var SS = Qo(),
      RS = Sd(),
      CS = st(),
      NS = Jo(),
      LS = /[\\^$.*+?()[\]{}|]/g,
      PS = /^\[object .+?Constructor\]$/,
      qS = Function.prototype,
      MS = Object.prototype,
      DS = qS.toString,
      FS = MS.hasOwnProperty,
      GS = RegExp(
        "^" +
          DS.call(FS)
            .replace(LS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function US(e) {
      if (!CS(e) || RS(e)) return !1;
      var t = SS(e) ? GS : PS;
      return t.test(NS(e));
    }
    Cd.exports = US;
  });
  var Pd = c((hk, Ld) => {
    function VS(e, t) {
      return e?.[t];
    }
    Ld.exports = VS;
  });
  var It = c((Ek, qd) => {
    var HS = Nd(),
      WS = Pd();
    function XS(e, t) {
      var r = WS(e, t);
      return HS(r) ? r : void 0;
    }
    qd.exports = XS;
  });
  var Pn = c((yk, Md) => {
    var kS = It(),
      BS = $e(),
      jS = kS(BS, "Map");
    Md.exports = jS;
  });
  var Pr = c((mk, Dd) => {
    var zS = It(),
      KS = zS(Object, "create");
    Dd.exports = KS;
  });
  var Ud = c((_k, Gd) => {
    var Fd = Pr();
    function YS() {
      (this.__data__ = Fd ? Fd(null) : {}), (this.size = 0);
    }
    Gd.exports = YS;
  });
  var Hd = c((Tk, Vd) => {
    function $S(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Vd.exports = $S;
  });
  var Xd = c((bk, Wd) => {
    var QS = Pr(),
      ZS = "__lodash_hash_undefined__",
      JS = Object.prototype,
      e0 = JS.hasOwnProperty;
    function t0(e) {
      var t = this.__data__;
      if (QS) {
        var r = t[e];
        return r === ZS ? void 0 : r;
      }
      return e0.call(t, e) ? t[e] : void 0;
    }
    Wd.exports = t0;
  });
  var Bd = c((Ik, kd) => {
    var r0 = Pr(),
      n0 = Object.prototype,
      i0 = n0.hasOwnProperty;
    function o0(e) {
      var t = this.__data__;
      return r0 ? t[e] !== void 0 : i0.call(t, e);
    }
    kd.exports = o0;
  });
  var zd = c((Ok, jd) => {
    var a0 = Pr(),
      s0 = "__lodash_hash_undefined__";
    function u0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = a0 && t === void 0 ? s0 : t),
        this
      );
    }
    jd.exports = u0;
  });
  var Yd = c((wk, Kd) => {
    var c0 = Ud(),
      l0 = Hd(),
      f0 = Xd(),
      d0 = Bd(),
      p0 = zd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = c0;
    Qt.prototype.delete = l0;
    Qt.prototype.get = f0;
    Qt.prototype.has = d0;
    Qt.prototype.set = p0;
    Kd.exports = Qt;
  });
  var Zd = c((Ak, Qd) => {
    var $d = Yd(),
      v0 = Lr(),
      g0 = Pn();
    function h0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new $d(),
          map: new (g0 || v0)(),
          string: new $d(),
        });
    }
    Qd.exports = h0;
  });
  var ep = c((xk, Jd) => {
    function E0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Jd.exports = E0;
  });
  var qr = c((Sk, tp) => {
    var y0 = ep();
    function m0(e, t) {
      var r = e.__data__;
      return y0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    tp.exports = m0;
  });
  var np = c((Rk, rp) => {
    var _0 = qr();
    function T0(e) {
      var t = _0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    rp.exports = T0;
  });
  var op = c((Ck, ip) => {
    var b0 = qr();
    function I0(e) {
      return b0(this, e).get(e);
    }
    ip.exports = I0;
  });
  var sp = c((Nk, ap) => {
    var O0 = qr();
    function w0(e) {
      return O0(this, e).has(e);
    }
    ap.exports = w0;
  });
  var cp = c((Lk, up) => {
    var A0 = qr();
    function x0(e, t) {
      var r = A0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    up.exports = x0;
  });
  var qn = c((Pk, lp) => {
    var S0 = Zd(),
      R0 = np(),
      C0 = op(),
      N0 = sp(),
      L0 = cp();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = S0;
    Zt.prototype.delete = R0;
    Zt.prototype.get = C0;
    Zt.prototype.has = N0;
    Zt.prototype.set = L0;
    lp.exports = Zt;
  });
  var dp = c((qk, fp) => {
    var P0 = Lr(),
      q0 = Pn(),
      M0 = qn(),
      D0 = 200;
    function F0(e, t) {
      var r = this.__data__;
      if (r instanceof P0) {
        var n = r.__data__;
        if (!q0 || n.length < D0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new M0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    fp.exports = F0;
  });
  var ea = c((Mk, pp) => {
    var G0 = Lr(),
      U0 = gd(),
      V0 = Ed(),
      H0 = md(),
      W0 = Td(),
      X0 = dp();
    function Jt(e) {
      var t = (this.__data__ = new G0(e));
      this.size = t.size;
    }
    Jt.prototype.clear = U0;
    Jt.prototype.delete = V0;
    Jt.prototype.get = H0;
    Jt.prototype.has = W0;
    Jt.prototype.set = X0;
    pp.exports = Jt;
  });
  var gp = c((Dk, vp) => {
    var k0 = "__lodash_hash_undefined__";
    function B0(e) {
      return this.__data__.set(e, k0), this;
    }
    vp.exports = B0;
  });
  var Ep = c((Fk, hp) => {
    function j0(e) {
      return this.__data__.has(e);
    }
    hp.exports = j0;
  });
  var mp = c((Gk, yp) => {
    var z0 = qn(),
      K0 = gp(),
      Y0 = Ep();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new z0(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = K0;
    Mn.prototype.has = Y0;
    yp.exports = Mn;
  });
  var Tp = c((Uk, _p) => {
    function $0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _p.exports = $0;
  });
  var Ip = c((Vk, bp) => {
    function Q0(e, t) {
      return e.has(t);
    }
    bp.exports = Q0;
  });
  var ta = c((Hk, Op) => {
    var Z0 = mp(),
      J0 = Tp(),
      eR = Ip(),
      tR = 1,
      rR = 2;
    function nR(e, t, r, n, i, o) {
      var a = r & tR,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        v = o.get(t);
      if (f && v) return f == t && v == e;
      var d = -1,
        E = !0,
        h = r & rR ? new Z0() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var m = e[d],
          _ = t[d];
        if (n) var P = a ? n(_, m, d, t, e, o) : n(m, _, d, e, t, o);
        if (P !== void 0) {
          if (P) continue;
          E = !1;
          break;
        }
        if (h) {
          if (
            !J0(t, function (A, R) {
              if (!eR(h, R) && (m === A || i(m, A, r, n, o))) return h.push(R);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(m === _ || i(m, _, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    Op.exports = nR;
  });
  var Ap = c((Wk, wp) => {
    var iR = $e(),
      oR = iR.Uint8Array;
    wp.exports = oR;
  });
  var Sp = c((Xk, xp) => {
    function aR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    xp.exports = aR;
  });
  var Cp = c((kk, Rp) => {
    function sR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Rp.exports = sR;
  });
  var Mp = c((Bk, qp) => {
    var Np = jt(),
      Lp = Ap(),
      uR = Ln(),
      cR = ta(),
      lR = Sp(),
      fR = Cp(),
      dR = 1,
      pR = 2,
      vR = "[object Boolean]",
      gR = "[object Date]",
      hR = "[object Error]",
      ER = "[object Map]",
      yR = "[object Number]",
      mR = "[object RegExp]",
      _R = "[object Set]",
      TR = "[object String]",
      bR = "[object Symbol]",
      IR = "[object ArrayBuffer]",
      OR = "[object DataView]",
      Pp = Np ? Np.prototype : void 0,
      ra = Pp ? Pp.valueOf : void 0;
    function wR(e, t, r, n, i, o, a) {
      switch (r) {
        case OR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case IR:
          return !(e.byteLength != t.byteLength || !o(new Lp(e), new Lp(t)));
        case vR:
        case gR:
        case yR:
          return uR(+e, +t);
        case hR:
          return e.name == t.name && e.message == t.message;
        case mR:
        case TR:
          return e == t + "";
        case ER:
          var s = lR;
        case _R:
          var u = n & dR;
          if ((s || (s = fR), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= pR), a.set(e, t);
          var v = cR(s(e), s(t), n, i, o, a);
          return a.delete(e), v;
        case bR:
          if (ra) return ra.call(e) == ra.call(t);
      }
      return !1;
    }
    qp.exports = wR;
  });
  var Dn = c((jk, Dp) => {
    function AR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Dp.exports = AR;
  });
  var we = c((zk, Fp) => {
    var xR = Array.isArray;
    Fp.exports = xR;
  });
  var na = c((Kk, Gp) => {
    var SR = Dn(),
      RR = we();
    function CR(e, t, r) {
      var n = t(e);
      return RR(e) ? n : SR(n, r(e));
    }
    Gp.exports = CR;
  });
  var Vp = c((Yk, Up) => {
    function NR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Up.exports = NR;
  });
  var ia = c(($k, Hp) => {
    function LR() {
      return [];
    }
    Hp.exports = LR;
  });
  var oa = c((Qk, Xp) => {
    var PR = Vp(),
      qR = ia(),
      MR = Object.prototype,
      DR = MR.propertyIsEnumerable,
      Wp = Object.getOwnPropertySymbols,
      FR = Wp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                PR(Wp(e), function (t) {
                  return DR.call(e, t);
                }));
          }
        : qR;
    Xp.exports = FR;
  });
  var Bp = c((Zk, kp) => {
    function GR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    kp.exports = GR;
  });
  var zp = c((Jk, jp) => {
    var UR = bt(),
      VR = pt(),
      HR = "[object Arguments]";
    function WR(e) {
      return VR(e) && UR(e) == HR;
    }
    jp.exports = WR;
  });
  var Mr = c((eB, $p) => {
    var Kp = zp(),
      XR = pt(),
      Yp = Object.prototype,
      kR = Yp.hasOwnProperty,
      BR = Yp.propertyIsEnumerable,
      jR = Kp(
        (function () {
          return arguments;
        })()
      )
        ? Kp
        : function (e) {
            return XR(e) && kR.call(e, "callee") && !BR.call(e, "callee");
          };
    $p.exports = jR;
  });
  var Zp = c((tB, Qp) => {
    function zR() {
      return !1;
    }
    Qp.exports = zR;
  });
  var Fn = c((Dr, er) => {
    var KR = $e(),
      YR = Zp(),
      tv = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      Jp = tv && typeof er == "object" && er && !er.nodeType && er,
      $R = Jp && Jp.exports === tv,
      ev = $R ? KR.Buffer : void 0,
      QR = ev ? ev.isBuffer : void 0,
      ZR = QR || YR;
    er.exports = ZR;
  });
  var Gn = c((rB, rv) => {
    var JR = 9007199254740991,
      eC = /^(?:0|[1-9]\d*)$/;
    function tC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? JR),
        !!t &&
          (r == "number" || (r != "symbol" && eC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    rv.exports = tC;
  });
  var Un = c((nB, nv) => {
    var rC = 9007199254740991;
    function nC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rC;
    }
    nv.exports = nC;
  });
  var ov = c((iB, iv) => {
    var iC = bt(),
      oC = Un(),
      aC = pt(),
      sC = "[object Arguments]",
      uC = "[object Array]",
      cC = "[object Boolean]",
      lC = "[object Date]",
      fC = "[object Error]",
      dC = "[object Function]",
      pC = "[object Map]",
      vC = "[object Number]",
      gC = "[object Object]",
      hC = "[object RegExp]",
      EC = "[object Set]",
      yC = "[object String]",
      mC = "[object WeakMap]",
      _C = "[object ArrayBuffer]",
      TC = "[object DataView]",
      bC = "[object Float32Array]",
      IC = "[object Float64Array]",
      OC = "[object Int8Array]",
      wC = "[object Int16Array]",
      AC = "[object Int32Array]",
      xC = "[object Uint8Array]",
      SC = "[object Uint8ClampedArray]",
      RC = "[object Uint16Array]",
      CC = "[object Uint32Array]",
      he = {};
    he[bC] =
      he[IC] =
      he[OC] =
      he[wC] =
      he[AC] =
      he[xC] =
      he[SC] =
      he[RC] =
      he[CC] =
        !0;
    he[sC] =
      he[uC] =
      he[_C] =
      he[cC] =
      he[TC] =
      he[lC] =
      he[fC] =
      he[dC] =
      he[pC] =
      he[vC] =
      he[gC] =
      he[hC] =
      he[EC] =
      he[yC] =
      he[mC] =
        !1;
    function NC(e) {
      return aC(e) && oC(e.length) && !!he[iC(e)];
    }
    iv.exports = NC;
  });
  var sv = c((oB, av) => {
    function LC(e) {
      return function (t) {
        return e(t);
      };
    }
    av.exports = LC;
  });
  var cv = c((Fr, tr) => {
    var PC = Co(),
      uv = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Gr = uv && typeof tr == "object" && tr && !tr.nodeType && tr,
      qC = Gr && Gr.exports === uv,
      aa = qC && PC.process,
      MC = (function () {
        try {
          var e = Gr && Gr.require && Gr.require("util").types;
          return e || (aa && aa.binding && aa.binding("util"));
        } catch {}
      })();
    tr.exports = MC;
  });
  var Vn = c((aB, dv) => {
    var DC = ov(),
      FC = sv(),
      lv = cv(),
      fv = lv && lv.isTypedArray,
      GC = fv ? FC(fv) : DC;
    dv.exports = GC;
  });
  var sa = c((sB, pv) => {
    var UC = Bp(),
      VC = Mr(),
      HC = we(),
      WC = Fn(),
      XC = Gn(),
      kC = Vn(),
      BC = Object.prototype,
      jC = BC.hasOwnProperty;
    function zC(e, t) {
      var r = HC(e),
        n = !r && VC(e),
        i = !r && !n && WC(e),
        o = !r && !n && !i && kC(e),
        a = r || n || i || o,
        s = a ? UC(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || jC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              XC(f, u))
          ) &&
          s.push(f);
      return s;
    }
    pv.exports = zC;
  });
  var Hn = c((uB, vv) => {
    var KC = Object.prototype;
    function YC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || KC;
      return e === r;
    }
    vv.exports = YC;
  });
  var hv = c((cB, gv) => {
    var $C = No(),
      QC = $C(Object.keys, Object);
    gv.exports = QC;
  });
  var Wn = c((lB, Ev) => {
    var ZC = Hn(),
      JC = hv(),
      eN = Object.prototype,
      tN = eN.hasOwnProperty;
    function rN(e) {
      if (!ZC(e)) return JC(e);
      var t = [];
      for (var r in Object(e)) tN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ev.exports = rN;
  });
  var Pt = c((fB, yv) => {
    var nN = Qo(),
      iN = Un();
    function oN(e) {
      return e != null && iN(e.length) && !nN(e);
    }
    yv.exports = oN;
  });
  var Ur = c((dB, mv) => {
    var aN = sa(),
      sN = Wn(),
      uN = Pt();
    function cN(e) {
      return uN(e) ? aN(e) : sN(e);
    }
    mv.exports = cN;
  });
  var Tv = c((pB, _v) => {
    var lN = na(),
      fN = oa(),
      dN = Ur();
    function pN(e) {
      return lN(e, dN, fN);
    }
    _v.exports = pN;
  });
  var Ov = c((vB, Iv) => {
    var bv = Tv(),
      vN = 1,
      gN = Object.prototype,
      hN = gN.hasOwnProperty;
    function EN(e, t, r, n, i, o) {
      var a = r & vN,
        s = bv(e),
        u = s.length,
        f = bv(t),
        v = f.length;
      if (u != v && !a) return !1;
      for (var d = u; d--; ) {
        var E = s[d];
        if (!(a ? E in t : hN.call(t, E))) return !1;
      }
      var h = o.get(e),
        m = o.get(t);
      if (h && m) return h == t && m == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var P = a; ++d < u; ) {
        E = s[d];
        var A = e[E],
          R = t[E];
        if (n) var x = a ? n(R, A, E, t, e, o) : n(A, R, E, e, t, o);
        if (!(x === void 0 ? A === R || i(A, R, r, n, o) : x)) {
          _ = !1;
          break;
        }
        P || (P = E == "constructor");
      }
      if (_ && !P) {
        var N = e.constructor,
          q = t.constructor;
        N != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    Iv.exports = EN;
  });
  var Av = c((gB, wv) => {
    var yN = It(),
      mN = $e(),
      _N = yN(mN, "DataView");
    wv.exports = _N;
  });
  var Sv = c((hB, xv) => {
    var TN = It(),
      bN = $e(),
      IN = TN(bN, "Promise");
    xv.exports = IN;
  });
  var Cv = c((EB, Rv) => {
    var ON = It(),
      wN = $e(),
      AN = ON(wN, "Set");
    Rv.exports = AN;
  });
  var ua = c((yB, Nv) => {
    var xN = It(),
      SN = $e(),
      RN = xN(SN, "WeakMap");
    Nv.exports = RN;
  });
  var Xn = c((mB, Gv) => {
    var ca = Av(),
      la = Pn(),
      fa = Sv(),
      da = Cv(),
      pa = ua(),
      Fv = bt(),
      rr = Jo(),
      Lv = "[object Map]",
      CN = "[object Object]",
      Pv = "[object Promise]",
      qv = "[object Set]",
      Mv = "[object WeakMap]",
      Dv = "[object DataView]",
      NN = rr(ca),
      LN = rr(la),
      PN = rr(fa),
      qN = rr(da),
      MN = rr(pa),
      qt = Fv;
    ((ca && qt(new ca(new ArrayBuffer(1))) != Dv) ||
      (la && qt(new la()) != Lv) ||
      (fa && qt(fa.resolve()) != Pv) ||
      (da && qt(new da()) != qv) ||
      (pa && qt(new pa()) != Mv)) &&
      (qt = function (e) {
        var t = Fv(e),
          r = t == CN ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case NN:
              return Dv;
            case LN:
              return Lv;
            case PN:
              return Pv;
            case qN:
              return qv;
            case MN:
              return Mv;
          }
        return t;
      });
    Gv.exports = qt;
  });
  var jv = c((_B, Bv) => {
    var va = ea(),
      DN = ta(),
      FN = Mp(),
      GN = Ov(),
      Uv = Xn(),
      Vv = we(),
      Hv = Fn(),
      UN = Vn(),
      VN = 1,
      Wv = "[object Arguments]",
      Xv = "[object Array]",
      kn = "[object Object]",
      HN = Object.prototype,
      kv = HN.hasOwnProperty;
    function WN(e, t, r, n, i, o) {
      var a = Vv(e),
        s = Vv(t),
        u = a ? Xv : Uv(e),
        f = s ? Xv : Uv(t);
      (u = u == Wv ? kn : u), (f = f == Wv ? kn : f);
      var v = u == kn,
        d = f == kn,
        E = u == f;
      if (E && Hv(e)) {
        if (!Hv(t)) return !1;
        (a = !0), (v = !1);
      }
      if (E && !v)
        return (
          o || (o = new va()),
          a || UN(e) ? DN(e, t, r, n, i, o) : FN(e, t, u, r, n, i, o)
        );
      if (!(r & VN)) {
        var h = v && kv.call(e, "__wrapped__"),
          m = d && kv.call(t, "__wrapped__");
        if (h || m) {
          var _ = h ? e.value() : e,
            P = m ? t.value() : t;
          return o || (o = new va()), i(_, P, r, n, o);
        }
      }
      return E ? (o || (o = new va()), GN(e, t, r, n, i, o)) : !1;
    }
    Bv.exports = WN;
  });
  var ga = c((TB, Yv) => {
    var XN = jv(),
      zv = pt();
    function Kv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!zv(e) && !zv(t))
        ? e !== e && t !== t
        : XN(e, t, r, n, Kv, i);
    }
    Yv.exports = Kv;
  });
  var Qv = c((bB, $v) => {
    var kN = ea(),
      BN = ga(),
      jN = 1,
      zN = 2;
    function KN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          v = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var d = new kN();
          if (n) var E = n(f, v, u, e, t, d);
          if (!(E === void 0 ? BN(v, f, jN | zN, n, d) : E)) return !1;
        }
      }
      return !0;
    }
    $v.exports = KN;
  });
  var ha = c((IB, Zv) => {
    var YN = st();
    function $N(e) {
      return e === e && !YN(e);
    }
    Zv.exports = $N;
  });
  var eg = c((OB, Jv) => {
    var QN = ha(),
      ZN = Ur();
    function JN(e) {
      for (var t = ZN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, QN(i)];
      }
      return t;
    }
    Jv.exports = JN;
  });
  var Ea = c((wB, tg) => {
    function eL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    tg.exports = eL;
  });
  var ng = c((AB, rg) => {
    var tL = Qv(),
      rL = eg(),
      nL = Ea();
    function iL(e) {
      var t = rL(e);
      return t.length == 1 && t[0][2]
        ? nL(t[0][0], t[0][1])
        : function (r) {
            return r === e || tL(r, e, t);
          };
    }
    rg.exports = iL;
  });
  var Vr = c((xB, ig) => {
    var oL = bt(),
      aL = pt(),
      sL = "[object Symbol]";
    function uL(e) {
      return typeof e == "symbol" || (aL(e) && oL(e) == sL);
    }
    ig.exports = uL;
  });
  var Bn = c((SB, og) => {
    var cL = we(),
      lL = Vr(),
      fL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      dL = /^\w*$/;
    function pL(e, t) {
      if (cL(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        lL(e)
        ? !0
        : dL.test(e) || !fL.test(e) || (t != null && e in Object(t));
    }
    og.exports = pL;
  });
  var ug = c((RB, sg) => {
    var ag = qn(),
      vL = "Expected a function";
    function ya(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(vL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ya.Cache || ag)()), r;
    }
    ya.Cache = ag;
    sg.exports = ya;
  });
  var lg = c((CB, cg) => {
    var gL = ug(),
      hL = 500;
    function EL(e) {
      var t = gL(e, function (n) {
          return r.size === hL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    cg.exports = EL;
  });
  var dg = c((NB, fg) => {
    var yL = lg(),
      mL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      _L = /\\(\\)?/g,
      TL = yL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(mL, function (r, n, i, o) {
            t.push(i ? o.replace(_L, "$1") : n || r);
          }),
          t
        );
      });
    fg.exports = TL;
  });
  var ma = c((LB, pg) => {
    function bL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    pg.exports = bL;
  });
  var mg = c((PB, yg) => {
    var vg = jt(),
      IL = ma(),
      OL = we(),
      wL = Vr(),
      AL = 1 / 0,
      gg = vg ? vg.prototype : void 0,
      hg = gg ? gg.toString : void 0;
    function Eg(e) {
      if (typeof e == "string") return e;
      if (OL(e)) return IL(e, Eg) + "";
      if (wL(e)) return hg ? hg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -AL ? "-0" : t;
    }
    yg.exports = Eg;
  });
  var Tg = c((qB, _g) => {
    var xL = mg();
    function SL(e) {
      return e == null ? "" : xL(e);
    }
    _g.exports = SL;
  });
  var Hr = c((MB, bg) => {
    var RL = we(),
      CL = Bn(),
      NL = dg(),
      LL = Tg();
    function PL(e, t) {
      return RL(e) ? e : CL(e, t) ? [e] : NL(LL(e));
    }
    bg.exports = PL;
  });
  var nr = c((DB, Ig) => {
    var qL = Vr(),
      ML = 1 / 0;
    function DL(e) {
      if (typeof e == "string" || qL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -ML ? "-0" : t;
    }
    Ig.exports = DL;
  });
  var jn = c((FB, Og) => {
    var FL = Hr(),
      GL = nr();
    function UL(e, t) {
      t = FL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[GL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Og.exports = UL;
  });
  var zn = c((GB, wg) => {
    var VL = jn();
    function HL(e, t, r) {
      var n = e == null ? void 0 : VL(e, t);
      return n === void 0 ? r : n;
    }
    wg.exports = HL;
  });
  var xg = c((UB, Ag) => {
    function WL(e, t) {
      return e != null && t in Object(e);
    }
    Ag.exports = WL;
  });
  var Rg = c((VB, Sg) => {
    var XL = Hr(),
      kL = Mr(),
      BL = we(),
      jL = Gn(),
      zL = Un(),
      KL = nr();
    function YL(e, t, r) {
      t = XL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = KL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && zL(i) && jL(a, i) && (BL(e) || kL(e)));
    }
    Sg.exports = YL;
  });
  var Ng = c((HB, Cg) => {
    var $L = xg(),
      QL = Rg();
    function ZL(e, t) {
      return e != null && QL(e, t, $L);
    }
    Cg.exports = ZL;
  });
  var Pg = c((WB, Lg) => {
    var JL = ga(),
      eP = zn(),
      tP = Ng(),
      rP = Bn(),
      nP = ha(),
      iP = Ea(),
      oP = nr(),
      aP = 1,
      sP = 2;
    function uP(e, t) {
      return rP(e) && nP(t)
        ? iP(oP(e), t)
        : function (r) {
            var n = eP(r, e);
            return n === void 0 && n === t ? tP(r, e) : JL(t, n, aP | sP);
          };
    }
    Lg.exports = uP;
  });
  var Kn = c((XB, qg) => {
    function cP(e) {
      return e;
    }
    qg.exports = cP;
  });
  var _a = c((kB, Mg) => {
    function lP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Mg.exports = lP;
  });
  var Fg = c((BB, Dg) => {
    var fP = jn();
    function dP(e) {
      return function (t) {
        return fP(t, e);
      };
    }
    Dg.exports = dP;
  });
  var Ug = c((jB, Gg) => {
    var pP = _a(),
      vP = Fg(),
      gP = Bn(),
      hP = nr();
    function EP(e) {
      return gP(e) ? pP(hP(e)) : vP(e);
    }
    Gg.exports = EP;
  });
  var Ot = c((zB, Vg) => {
    var yP = ng(),
      mP = Pg(),
      _P = Kn(),
      TP = we(),
      bP = Ug();
    function IP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? _P
        : typeof e == "object"
        ? TP(e)
          ? mP(e[0], e[1])
          : yP(e)
        : bP(e);
    }
    Vg.exports = IP;
  });
  var Ta = c((KB, Hg) => {
    var OP = Ot(),
      wP = Pt(),
      AP = Ur();
    function xP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!wP(t)) {
          var o = OP(r, 3);
          (t = AP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Hg.exports = xP;
  });
  var ba = c((YB, Wg) => {
    function SP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Wg.exports = SP;
  });
  var kg = c(($B, Xg) => {
    var RP = /\s/;
    function CP(e) {
      for (var t = e.length; t-- && RP.test(e.charAt(t)); );
      return t;
    }
    Xg.exports = CP;
  });
  var jg = c((QB, Bg) => {
    var NP = kg(),
      LP = /^\s+/;
    function PP(e) {
      return e && e.slice(0, NP(e) + 1).replace(LP, "");
    }
    Bg.exports = PP;
  });
  var Yn = c((ZB, Yg) => {
    var qP = jg(),
      zg = st(),
      MP = Vr(),
      Kg = 0 / 0,
      DP = /^[-+]0x[0-9a-f]+$/i,
      FP = /^0b[01]+$/i,
      GP = /^0o[0-7]+$/i,
      UP = parseInt;
    function VP(e) {
      if (typeof e == "number") return e;
      if (MP(e)) return Kg;
      if (zg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = zg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = qP(e);
      var r = FP.test(e);
      return r || GP.test(e) ? UP(e.slice(2), r ? 2 : 8) : DP.test(e) ? Kg : +e;
    }
    Yg.exports = VP;
  });
  var Zg = c((JB, Qg) => {
    var HP = Yn(),
      $g = 1 / 0,
      WP = 17976931348623157e292;
    function XP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = HP(e)), e === $g || e === -$g)) {
        var t = e < 0 ? -1 : 1;
        return t * WP;
      }
      return e === e ? e : 0;
    }
    Qg.exports = XP;
  });
  var Ia = c((e5, Jg) => {
    var kP = Zg();
    function BP(e) {
      var t = kP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Jg.exports = BP;
  });
  var th = c((t5, eh) => {
    var jP = ba(),
      zP = Ot(),
      KP = Ia(),
      YP = Math.max;
    function $P(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : KP(r);
      return i < 0 && (i = YP(n + i, 0)), jP(e, zP(t, 3), i);
    }
    eh.exports = $P;
  });
  var Oa = c((r5, rh) => {
    var QP = Ta(),
      ZP = th(),
      JP = QP(ZP);
    rh.exports = JP;
  });
  var oh = {};
  De(oh, {
    ELEMENT_MATCHES: () => eq,
    FLEX_PREFIXED: () => wa,
    IS_BROWSER_ENV: () => Ze,
    TRANSFORM_PREFIXED: () => wt,
    TRANSFORM_STYLE_PREFIXED: () => Qn,
    withBrowser: () => $n,
  });
  var ih,
    Ze,
    $n,
    eq,
    wa,
    wt,
    nh,
    Qn,
    Zn = Ee(() => {
      "use strict";
      (ih = fe(Oa())),
        (Ze = typeof window < "u"),
        ($n = (e, t) => (Ze ? e() : t)),
        (eq = $n(() =>
          (0, ih.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (wa = $n(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (wt = $n(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (nh = wt.split("transform")[0]),
        (Qn = nh ? nh + "TransformStyle" : "transformStyle");
    });
  var Aa = c((n5, lh) => {
    var tq = 4,
      rq = 0.001,
      nq = 1e-7,
      iq = 10,
      Wr = 11,
      Jn = 1 / (Wr - 1),
      oq = typeof Float32Array == "function";
    function ah(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function sh(e, t) {
      return 3 * t - 6 * e;
    }
    function uh(e) {
      return 3 * e;
    }
    function ei(e, t, r) {
      return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e;
    }
    function ch(e, t, r) {
      return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t);
    }
    function aq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ei(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > nq && ++s < iq);
      return a;
    }
    function sq(e, t, r, n) {
      for (var i = 0; i < tq; ++i) {
        var o = ch(t, r, n);
        if (o === 0) return t;
        var a = ei(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    lh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = oq ? new Float32Array(Wr) : new Array(Wr);
      if (t !== r || n !== i)
        for (var a = 0; a < Wr; ++a) o[a] = ei(a * Jn, t, n);
      function s(u) {
        for (var f = 0, v = 1, d = Wr - 1; v !== d && o[v] <= u; ++v) f += Jn;
        --v;
        var E = (u - o[v]) / (o[v + 1] - o[v]),
          h = f + E * Jn,
          m = ch(h, t, n);
        return m >= rq ? sq(u, h, t, n) : m === 0 ? h : aq(u, f, f + Jn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ei(s(f), r, i);
      };
    };
  });
  var kr = {};
  De(kr, {
    bounce: () => Xq,
    bouncePast: () => kq,
    ease: () => uq,
    easeIn: () => cq,
    easeInOut: () => fq,
    easeOut: () => lq,
    inBack: () => qq,
    inCirc: () => Cq,
    inCubic: () => gq,
    inElastic: () => Fq,
    inExpo: () => xq,
    inOutBack: () => Dq,
    inOutCirc: () => Lq,
    inOutCubic: () => Eq,
    inOutElastic: () => Uq,
    inOutExpo: () => Rq,
    inOutQuad: () => vq,
    inOutQuart: () => _q,
    inOutQuint: () => Iq,
    inOutSine: () => Aq,
    inQuad: () => dq,
    inQuart: () => yq,
    inQuint: () => Tq,
    inSine: () => Oq,
    outBack: () => Mq,
    outBounce: () => Pq,
    outCirc: () => Nq,
    outCubic: () => hq,
    outElastic: () => Gq,
    outExpo: () => Sq,
    outQuad: () => pq,
    outQuart: () => mq,
    outQuint: () => bq,
    outSine: () => wq,
    swingFrom: () => Hq,
    swingFromTo: () => Vq,
    swingTo: () => Wq,
  });
  function dq(e) {
    return Math.pow(e, 2);
  }
  function pq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function vq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function gq(e) {
    return Math.pow(e, 3);
  }
  function hq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Eq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function yq(e) {
    return Math.pow(e, 4);
  }
  function mq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function _q(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Tq(e) {
    return Math.pow(e, 5);
  }
  function bq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Iq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Oq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function wq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Aq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function xq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Sq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Rq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Cq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Nq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Lq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Pq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function qq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Mq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Dq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Fq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Gq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Uq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Vq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Hq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Wq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Xq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Xr,
    vt,
    uq,
    cq,
    lq,
    fq,
    xa = Ee(() => {
      "use strict";
      (Xr = fe(Aa())),
        (vt = 1.70158),
        (uq = (0, Xr.default)(0.25, 0.1, 0.25, 1)),
        (cq = (0, Xr.default)(0.42, 0, 1, 1)),
        (lq = (0, Xr.default)(0, 0, 0.58, 1)),
        (fq = (0, Xr.default)(0.42, 0, 0.58, 1));
    });
  var dh = {};
  De(dh, {
    applyEasing: () => jq,
    createBezierEasing: () => Bq,
    optimizeFloat: () => Br,
  });
  function Br(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Bq(e) {
    return (0, fh.default)(...e);
  }
  function jq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Br(r ? (t > 0 ? r(t) : t) : t > 0 && e && kr[e] ? kr[e](t) : t);
  }
  var fh,
    Sa = Ee(() => {
      "use strict";
      xa();
      fh = fe(Aa());
    });
  var gh = {};
  De(gh, {
    createElementState: () => vh,
    ixElements: () => aM,
    mergeActionState: () => Ra,
  });
  function vh(e, t, r, n, i) {
    let o =
      r === zq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ir.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ra(e, t, r, n, i) {
    let o = uM(i);
    return (0, ir.mergeIn)(e, [t, oM, r], n, o);
  }
  function uM(e) {
    let { config: t } = e;
    return sM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ir,
    o5,
    zq,
    a5,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    eM,
    tM,
    rM,
    nM,
    iM,
    ph,
    oM,
    aM,
    sM,
    hh = Ee(() => {
      "use strict";
      ir = fe(Yt());
      Ge();
      ({
        HTML_ELEMENT: o5,
        PLAIN_OBJECT: zq,
        ABSTRACT_NODE: a5,
        CONFIG_X_VALUE: Kq,
        CONFIG_Y_VALUE: Yq,
        CONFIG_Z_VALUE: $q,
        CONFIG_VALUE: Qq,
        CONFIG_X_UNIT: Zq,
        CONFIG_Y_UNIT: Jq,
        CONFIG_Z_UNIT: eM,
        CONFIG_UNIT: tM,
      } = Re),
        ({
          IX2_SESSION_STOPPED: rM,
          IX2_INSTANCE_ADDED: nM,
          IX2_ELEMENT_STATE_CHANGED: iM,
        } = Ie),
        (ph = {}),
        (oM = "refState"),
        (aM = (e = ph, t = {}) => {
          switch (t.type) {
            case rM:
              return ph;
            case nM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ir.getIn)(u, [r, n]) !== n && (u = vh(u, n, a, r, o)),
                Ra(u, r, s, i, o)
              );
            }
            case iM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ra(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      sM = [
        [Kq, Zq],
        [Yq, Jq],
        [$q, eM],
        [Qq, tM],
      ];
    });
  var Eh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var cM = (e) => e.value;
    Ae.getPluginConfig = cM;
    var lM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Ae.getPluginDuration = lM;
    var fM = (e) => e || { value: 0 };
    Ae.getPluginOrigin = fM;
    var dM = (e) => ({ value: e.value });
    Ae.getPluginDestination = dM;
    var pM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Ae.createPluginInstance = pM;
    var vM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Ae.renderPlugin = vM;
    var gM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Ae.clearPlugin = gM;
  });
  var mh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var hM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      EM = () => window.Webflow.require("spline"),
      yM = (e, t) => e.filter((r) => !t.includes(r)),
      mM = (e, t) => e.value[t];
    xe.getPluginConfig = mM;
    var _M = () => null;
    xe.getPluginDuration = _M;
    var yh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      TM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = yM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = yh[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = yh[a]), o), {});
      };
    xe.getPluginOrigin = TM;
    var bM = (e) => e.value;
    xe.getPluginDestination = bM;
    var IM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? hM(i) : null;
    };
    xe.createPluginInstance = IM;
    var OM = (e, t, r) => {
      let n = EM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    xe.renderPlugin = OM;
    var wM = () => null;
    xe.clearPlugin = wM;
  });
  var Th = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = _h;
    Oe.renderPlugin = void 0;
    function _h(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let v = (1 - Math.abs(2 * f - 1)) * u,
          d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - v / 2,
          h,
          m,
          _;
        s >= 0 && s < 60
          ? ((h = v), (m = d), (_ = 0))
          : s >= 60 && s < 120
          ? ((h = d), (m = v), (_ = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (m = v), (_ = d))
          : s >= 180 && s < 240
          ? ((h = 0), (m = d), (_ = v))
          : s >= 240 && s < 300
          ? ((h = d), (m = 0), (_ = v))
          : ((h = v), (m = 0), (_ = d)),
          (t = Math.round((h + E) * 255)),
          (r = Math.round((m + E) * 255)),
          (n = Math.round((_ + E) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          v = (1 - Math.abs(2 * f - 1)) * u,
          d = v * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = f - v / 2,
          h,
          m,
          _;
        s >= 0 && s < 60
          ? ((h = v), (m = d), (_ = 0))
          : s >= 60 && s < 120
          ? ((h = d), (m = v), (_ = 0))
          : s >= 120 && s < 180
          ? ((h = 0), (m = v), (_ = d))
          : s >= 180 && s < 240
          ? ((h = 0), (m = d), (_ = v))
          : s >= 240 && s < 300
          ? ((h = d), (m = 0), (_ = v))
          : ((h = v), (m = 0), (_ = d)),
          (t = Math.round((h + E) * 255)),
          (r = Math.round((m + E) * 255)),
          (n = Math.round((_ + E) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var AM = (e, t) => e.value[t];
    Oe.getPluginConfig = AM;
    var xM = () => null;
    Oe.getPluginDuration = xM;
    var SM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return _h(i);
    };
    Oe.getPluginOrigin = SM;
    var RM = (e) => e.value;
    Oe.getPluginDestination = RM;
    var CM = () => null;
    Oe.createPluginInstance = CM;
    var NM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: v } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          f != null &&
          u != null &&
          v != null &&
          (d = `rgba(${s}, ${u}, ${f}, ${v})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    Oe.renderPlugin = NM;
    var LM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = LM;
  });
  var bh = c((ti) => {
    "use strict";
    var Na = vn().default;
    Object.defineProperty(ti, "__esModule", { value: !0 });
    ti.pluginMethodMap = void 0;
    var Ca = (Ge(), rt(Sf)),
      PM = Na(Eh()),
      qM = Na(mh()),
      MM = Na(Th()),
      DM = new Map([
        [Ca.ActionTypeConsts.PLUGIN_LOTTIE, { ...PM }],
        [Ca.ActionTypeConsts.PLUGIN_SPLINE, { ...qM }],
        [Ca.ActionTypeConsts.PLUGIN_VARIABLE, { ...MM }],
      ]);
    ti.pluginMethodMap = DM;
  });
  var Ih = {};
  De(Ih, {
    clearPlugin: () => Fa,
    createPluginInstance: () => GM,
    getPluginConfig: () => Pa,
    getPluginDestination: () => Ma,
    getPluginDuration: () => FM,
    getPluginOrigin: () => qa,
    isPluginType: () => Mt,
    renderPlugin: () => Da,
  });
  function Mt(e) {
    return La.pluginMethodMap.has(e);
  }
  var La,
    Dt,
    Pa,
    qa,
    FM,
    Ma,
    GM,
    Da,
    Fa,
    Ga = Ee(() => {
      "use strict";
      Zn();
      La = fe(bh());
      (Dt = (e) => (t) => {
        if (!Ze) return () => null;
        let r = La.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Pa = Dt("getPluginConfig")),
        (qa = Dt("getPluginOrigin")),
        (FM = Dt("getPluginDuration")),
        (Ma = Dt("getPluginDestination")),
        (GM = Dt("createPluginInstance")),
        (Da = Dt("renderPlugin")),
        (Fa = Dt("clearPlugin"));
    });
  var wh = c((d5, Oh) => {
    function UM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Oh.exports = UM;
  });
  var xh = c((p5, Ah) => {
    function VM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ah.exports = VM;
  });
  var Rh = c((v5, Sh) => {
    function HM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Sh.exports = HM;
  });
  var Nh = c((g5, Ch) => {
    var WM = Rh(),
      XM = WM();
    Ch.exports = XM;
  });
  var Ua = c((h5, Lh) => {
    var kM = Nh(),
      BM = Ur();
    function jM(e, t) {
      return e && kM(e, t, BM);
    }
    Lh.exports = jM;
  });
  var qh = c((E5, Ph) => {
    var zM = Pt();
    function KM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!zM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Ph.exports = KM;
  });
  var Va = c((y5, Mh) => {
    var YM = Ua(),
      $M = qh(),
      QM = $M(YM);
    Mh.exports = QM;
  });
  var Fh = c((m5, Dh) => {
    function ZM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Dh.exports = ZM;
  });
  var Uh = c((_5, Gh) => {
    var JM = xh(),
      e1 = Va(),
      t1 = Ot(),
      r1 = Fh(),
      n1 = we();
    function i1(e, t, r) {
      var n = n1(e) ? JM : r1,
        i = arguments.length < 3;
      return n(e, t1(t, 4), r, i, e1);
    }
    Gh.exports = i1;
  });
  var Hh = c((T5, Vh) => {
    var o1 = ba(),
      a1 = Ot(),
      s1 = Ia(),
      u1 = Math.max,
      c1 = Math.min;
    function l1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = s1(r)), (i = r < 0 ? u1(n + i, 0) : c1(i, n - 1))),
        o1(e, a1(t, 3), i, !0)
      );
    }
    Vh.exports = l1;
  });
  var Xh = c((b5, Wh) => {
    var f1 = Ta(),
      d1 = Hh(),
      p1 = f1(d1);
    Wh.exports = p1;
  });
  function kh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function g1(e, t) {
    if (kh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!v1.call(t, r[i]) || !kh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var v1,
    Ha,
    Bh = Ee(() => {
      "use strict";
      v1 = Object.prototype.hasOwnProperty;
      Ha = g1;
    });
  var uE = {};
  De(uE, {
    cleanupHTMLElement: () => dD,
    clearAllStyles: () => fD,
    clearObjectCache: () => L1,
    getActionListProgress: () => vD,
    getAffectedElements: () => ja,
    getComputedStyle: () => V1,
    getDestinationValues: () => z1,
    getElementId: () => D1,
    getInstanceId: () => q1,
    getInstanceOrigin: () => X1,
    getItemConfigByKey: () => j1,
    getMaxDurationItemIndex: () => sE,
    getNamespacedParameterId: () => ED,
    getRenderType: () => iE,
    getStyleProp: () => K1,
    mediaQueriesEqual: () => mD,
    observeStore: () => U1,
    reduceListToGroup: () => gD,
    reifyState: () => F1,
    renderHTMLElement: () => Y1,
    shallowEqual: () => Ha,
    shouldAllowMediaQuery: () => yD,
    shouldNamespaceEventParameter: () => hD,
    stringifyTarget: () => _D,
  });
  function L1() {
    ri.clear();
  }
  function q1() {
    return "i" + P1++;
  }
  function D1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + M1++;
  }
  function F1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ai.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function U1({ store: e, select: t, onChange: r, comparator: n = G1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function ja({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (M, w) =>
          M.concat(
            ja({
              config: { target: w },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: v,
        matchSelector: d,
        elementContains: E,
        isSiblingNode: h,
      } = i,
      { target: m } = e;
    if (!m) return [];
    let {
      id: _,
      objectId: P,
      selector: A,
      selectorGuids: R,
      appliesTo: x,
      useEventTarget: N,
    } = Kh(m);
    if (P) return [ri.has(P) ? ri.get(P) : ri.set(P, {}).get(P)];
    if (x === jo.PAGE) {
      let M = a(_);
      return M ? [M] : [];
    }
    let L = (t?.action?.config?.affectedElements ?? {})[_ || A] || {},
      z = !!(L.id || L.selector),
      Y,
      Z,
      re,
      ne = t && s(Kh(t.target));
    if (
      (z
        ? ((Y = L.limitAffectedElements), (Z = ne), (re = s(L)))
        : (Z = re = s({ id: _, selector: A, selectorGuids: R })),
      t && N)
    ) {
      let M = r && (re || N === !0) ? [r] : u(ne);
      if (re) {
        if (N === R1) return u(re).filter((w) => M.some((F) => E(w, F)));
        if (N === jh) return u(re).filter((w) => M.some((F) => E(F, w)));
        if (N === zh) return u(re).filter((w) => M.some((F) => h(F, w)));
      }
      return M;
    }
    return Z == null || re == null
      ? []
      : Ze && n
      ? u(re).filter((M) => n.contains(M))
      : Y === jh
      ? u(Z, re)
      : Y === S1
      ? f(u(Z)).filter(d(re))
      : Y === zh
      ? v(u(Z)).filter(d(re))
      : u(re);
  }
  function V1({ element: e, actionItem: t }) {
    if (!Ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case cr:
      case lr:
      case fr:
      case dr:
      case ui:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function X1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return qa(a)(t[a], n);
    switch (n.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case Yr:
        return t[n.actionTypeId] || za[n.actionTypeId];
      case $r:
        return H1(t[n.actionTypeId], n.config.filters);
      case Qr:
        return W1(t[n.actionTypeId], n.config.fontVariations);
      case tE:
        return { value: (0, gt.default)(parseFloat(o(e, ii)), 1) };
      case cr: {
        let s = o(e, ut),
          u = o(e, ct),
          f,
          v;
        return (
          n.config.widthUnit === At
            ? (f = Yh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (v = Yh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (v = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: v }
        );
      }
      case lr:
      case fr:
      case dr:
        return uD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ui:
        return { value: (0, gt.default)(o(e, oi), r.display) };
      case N1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function z1({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case Yr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case cr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Ze) return { widthValue: u, heightValue: f };
        if (a === At) {
          let v = n(e, ut);
          i(e, ut, ""), (u = o(e, "offsetWidth")), i(e, ut, v);
        }
        if (s === At) {
          let v = n(e, ct);
          i(e, ct, ""), (f = o(e, "offsetHeight")), i(e, ct, v);
        }
        return { widthValue: u, heightValue: f };
      }
      case lr:
      case fr:
      case dr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case $r:
        return t.config.filters.reduce(k1, {});
      case Qr:
        return t.config.fontVariations.reduce(B1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function iE(e) {
    if (/^TRANSFORM_/.test(e)) return Jh;
    if (/^STYLE_/.test(e)) return ka;
    if (/^GENERAL_/.test(e)) return Xa;
    if (/^PLUGIN_/.test(e)) return eE;
  }
  function K1(e, t) {
    return e === ka ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function Y1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Jh:
        return eD(e, t, r, i, a);
      case ka:
        return cD(e, t, r, i, o, a);
      case Xa:
        return lD(e, i, a);
      case eE: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return Da(f)(u, t, i);
      }
    }
  }
  function eD(e, t, r, n, i) {
    let o = J1.map((s) => {
        let u = za[s],
          {
            xValue: f = u.xValue,
            yValue: v = u.yValue,
            zValue: d = u.zValue,
            xUnit: E = "",
            yUnit: h = "",
            zUnit: m = "",
          } = t[s] || {};
        switch (s) {
          case ar:
            return `${y1}(${f}${E}, ${v}${h}, ${d}${m})`;
          case sr:
            return `${m1}(${f}${E}, ${v}${h}, ${d}${m})`;
          case ur:
            return `${_1}(${f}${E}) ${T1}(${v}${h}) ${b1}(${d}${m})`;
          case Yr:
            return `${I1}(${f}${E}, ${v}${h})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Ft(e, wt, i), a(e, wt, o), nD(n, r) && a(e, Qn, O1);
  }
  function tD(e, t, r, n) {
    let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${Z1(u, r)})`, ""),
      { setStyle: o } = n;
    Ft(e, jr, n), o(e, jr, i);
  }
  function rD(e, t, r, n) {
    let i = (0, ai.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ft(e, zr, n), o(e, zr, i);
  }
  function nD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === ar && n !== void 0) ||
      (e === sr && n !== void 0) ||
      (e === ur && (t !== void 0 || r !== void 0))
    );
  }
  function sD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function uD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ba[t],
      o = n(e, i),
      a = oD.test(o) ? o : r[i],
      s = sD(aD, a).split(Kr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function cD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case cr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: v } = r;
        f !== void 0 && (s === At && (s = "px"), Ft(e, ut, o), a(e, ut, f + s)),
          v !== void 0 &&
            (u === At && (u = "px"), Ft(e, ct, o), a(e, ct, v + u));
        break;
      }
      case $r: {
        tD(e, r, n.config, o);
        break;
      }
      case Qr: {
        rD(e, r, n.config, o);
        break;
      }
      case lr:
      case fr:
      case dr: {
        let s = Ba[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          v = Math.round(r.bValue),
          d = r.aValue;
        Ft(e, s, o),
          a(e, s, d >= 1 ? `rgb(${u},${f},${v})` : `rgba(${u},${f},${v},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ft(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function lD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ui: {
        let { value: i } = t.config;
        i === w1 && Ze ? n(e, oi, wa) : n(e, oi, i);
        return;
      }
    }
  }
  function Ft(e, t, r) {
    if (!Ze) return;
    let n = nE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    if (!a) {
      o(e, or, n);
      return;
    }
    let s = a.split(Kr).map(rE);
    s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Kr));
  }
  function oE(e, t, r) {
    if (!Ze) return;
    let n = nE[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        or,
        a
          .split(Kr)
          .map(rE)
          .filter((s) => s !== n)
          .join(Kr)
      );
  }
  function fD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && $h({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        $h({ actionList: i[o], elementApi: t });
      });
  }
  function $h({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Qh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Qh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Qh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => Fa(o)(u, i))
        : (s = aE({ effect: pD, actionTypeId: o, elementApi: r })),
        ja({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function dD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === cr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ut, ""), a.heightUnit === At && n(e, ct, "");
    }
    i(e, or) && aE({ effect: oE, actionTypeId: o, elementApi: r })(e);
  }
  function pD(e, t, r) {
    let { setStyle: n } = r;
    oE(e, t, r), n(e, t, ""), t === wt && n(e, Qn, "");
  }
  function sE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function vD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: v } = u,
          d = v[sE(v)],
          { config: E, actionTypeId: h } = d;
        i.id === d.id && (s = a + o);
        let m = iE(h) === Xa ? 0 : E.duration;
        a += E.delay + m;
      }),
      a > 0 ? Br(s / a) : 0
    );
  }
  function gD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, si.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, si.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function hD(e, { basedOn: t }) {
    return (
      (e === Qe.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Qe.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function ED(e, t) {
    return e + C1 + t;
  }
  function yD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function mD(e, t) {
    return Ha(e && e.sort(), t && t.sort());
  }
  function _D(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Wa + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Wa + r + Wa + n;
  }
  var gt,
    ai,
    ni,
    si,
    h1,
    E1,
    y1,
    m1,
    _1,
    T1,
    b1,
    I1,
    O1,
    w1,
    ii,
    jr,
    zr,
    ut,
    ct,
    Zh,
    A1,
    x1,
    jh,
    S1,
    zh,
    R1,
    oi,
    or,
    At,
    Kr,
    C1,
    Wa,
    Jh,
    Xa,
    ka,
    eE,
    ar,
    sr,
    ur,
    Yr,
    tE,
    $r,
    Qr,
    cr,
    lr,
    fr,
    dr,
    ui,
    N1,
    rE,
    Ba,
    nE,
    ri,
    P1,
    M1,
    G1,
    Yh,
    H1,
    W1,
    k1,
    B1,
    j1,
    za,
    $1,
    Q1,
    Z1,
    J1,
    iD,
    oD,
    aD,
    aE,
    cE = Ee(() => {
      "use strict";
      (gt = fe(wh())), (ai = fe(Uh())), (ni = fe(Xh())), (si = fe(Yt()));
      Ge();
      Bh();
      Sa();
      Ga();
      Zn();
      ({
        BACKGROUND: h1,
        TRANSFORM: E1,
        TRANSLATE_3D: y1,
        SCALE_3D: m1,
        ROTATE_X: _1,
        ROTATE_Y: T1,
        ROTATE_Z: b1,
        SKEW: I1,
        PRESERVE_3D: O1,
        FLEX: w1,
        OPACITY: ii,
        FILTER: jr,
        FONT_VARIATION_SETTINGS: zr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: Zh,
        BORDER_COLOR: A1,
        COLOR: x1,
        CHILDREN: jh,
        IMMEDIATE_CHILDREN: S1,
        SIBLINGS: zh,
        PARENT: R1,
        DISPLAY: oi,
        WILL_CHANGE: or,
        AUTO: At,
        COMMA_DELIMITER: Kr,
        COLON_DELIMITER: C1,
        BAR_DELIMITER: Wa,
        RENDER_TRANSFORM: Jh,
        RENDER_GENERAL: Xa,
        RENDER_STYLE: ka,
        RENDER_PLUGIN: eE,
      } = Re),
        ({
          TRANSFORM_MOVE: ar,
          TRANSFORM_SCALE: sr,
          TRANSFORM_ROTATE: ur,
          TRANSFORM_SKEW: Yr,
          STYLE_OPACITY: tE,
          STYLE_FILTER: $r,
          STYLE_FONT_VARIATION: Qr,
          STYLE_SIZE: cr,
          STYLE_BACKGROUND_COLOR: lr,
          STYLE_BORDER: fr,
          STYLE_TEXT_COLOR: dr,
          GENERAL_DISPLAY: ui,
          OBJECT_VALUE: N1,
        } = We),
        (rE = (e) => e.trim()),
        (Ba = Object.freeze({ [lr]: Zh, [fr]: A1, [dr]: x1 })),
        (nE = Object.freeze({
          [wt]: E1,
          [Zh]: h1,
          [ii]: ii,
          [jr]: jr,
          [ut]: ut,
          [ct]: ct,
          [zr]: zr,
        })),
        (ri = new Map());
      P1 = 1;
      M1 = 1;
      G1 = (e, t) => e === t;
      (Yh = /px/),
        (H1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = $1[n.type]), r),
            e || {}
          )),
        (W1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = Q1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (k1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (B1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (j1 = (e, t, r) => {
          if (Mt(e)) return Pa(e)(r, t);
          switch (e) {
            case $r: {
              let n = (0, ni.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Qr: {
              let n = (0, ni.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (za = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Yr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        ($1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (Q1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (Z1 = (e, t) => {
          let r = (0, ni.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (J1 = Object.keys(za));
      (iD = "\\(([^)]+)\\)"), (oD = /^rgb/), (aD = RegExp(`rgba?${iD}`));
      aE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case ar:
            case sr:
            case ur:
            case Yr:
              e(n, wt, r);
              break;
            case $r:
              e(n, jr, r);
              break;
            case Qr:
              e(n, zr, r);
              break;
            case tE:
              e(n, ii, r);
              break;
            case cr:
              e(n, ut, r), e(n, ct, r);
              break;
            case lr:
            case fr:
            case dr:
              e(n, Ba[t], r);
              break;
            case ui:
              e(n, oi, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var pr = vn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var TD = pr((Zn(), rt(oh)));
    Pe.IX2BrowserSupport = TD;
    var bD = pr((xa(), rt(kr)));
    Pe.IX2Easings = bD;
    var ID = pr((Sa(), rt(dh)));
    Pe.IX2EasingUtils = ID;
    var OD = pr((hh(), rt(gh)));
    Pe.IX2ElementsReducer = OD;
    var wD = pr((Ga(), rt(Ih)));
    Pe.IX2VanillaPlugins = wD;
    var AD = pr((cE(), rt(uE)));
    Pe.IX2VanillaUtils = AD;
  });
  var li,
    ht,
    xD,
    SD,
    RD,
    CD,
    ND,
    LD,
    ci,
    lE,
    PD,
    qD,
    Ka,
    MD,
    DD,
    FD,
    GD,
    fE,
    dE = Ee(() => {
      "use strict";
      Ge();
      (li = fe(Gt())),
        (ht = fe(Yt())),
        ({
          IX2_RAW_DATA_IMPORTED: xD,
          IX2_SESSION_STOPPED: SD,
          IX2_INSTANCE_ADDED: RD,
          IX2_INSTANCE_STARTED: CD,
          IX2_INSTANCE_REMOVED: ND,
          IX2_ANIMATION_FRAME_CHANGED: LD,
        } = Ie),
        ({
          optimizeFloat: ci,
          applyEasing: lE,
          createBezierEasing: PD,
        } = li.IX2EasingUtils),
        ({ RENDER_GENERAL: qD } = Re),
        ({
          getItemConfigByKey: Ka,
          getRenderType: MD,
          getStyleProp: DD,
        } = li.IX2VanillaUtils),
        (FD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: v,
              skipToValue: d,
            } = e,
            { parameters: E } = t.payload,
            h = Math.max(1 - a, 0.01),
            m = E[n];
          m == null && ((h = 1), (m = s));
          let _ = Math.max(m, 0) || 0,
            P = ci(_ - r),
            A = v ? d : ci(r + P * h),
            R = A * 100;
          if (A === r && e.current) return e;
          let x, N, q, L;
          for (let Y = 0, { length: Z } = i; Y < Z; Y++) {
            let { keyframe: re, actionItems: ne } = i[Y];
            if ((Y === 0 && (x = ne[0]), R >= re)) {
              x = ne[0];
              let M = i[Y + 1],
                w = M && R !== re;
              (N = w ? M.actionItems[0] : null),
                w && ((q = re / 100), (L = (M.keyframe - re) / 100));
            }
          }
          let z = {};
          if (x && !N)
            for (let Y = 0, { length: Z } = o; Y < Z; Y++) {
              let re = o[Y];
              z[re] = Ka(u, re, x.config);
            }
          else if (x && N && q !== void 0 && L !== void 0) {
            let Y = (A - q) / L,
              Z = x.config.easing,
              re = lE(Z, Y, f);
            for (let ne = 0, { length: M } = o; ne < M; ne++) {
              let w = o[ne],
                F = Ka(u, w, x.config),
                V = (Ka(u, w, N.config) - F) * re + F;
              z[w] = V;
            }
          }
          return (0, ht.merge)(e, { position: A, current: z });
        }),
        (GD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: v,
              pluginDuration: d,
              instanceDelay: E,
              customEasingFn: h,
              skipMotion: m,
            } = e,
            _ = u.config.easing,
            { duration: P, delay: A } = u.config;
          d != null && (P = d),
            (A = E ?? A),
            a === qD ? (P = 0) : (o || m) && (P = A = 0);
          let { now: R } = t.payload;
          if (r && n) {
            let x = R - (i + A);
            if (s) {
              let Y = R - i,
                Z = P + A,
                re = ci(Math.min(Math.max(0, Y / Z), 1));
              e = (0, ht.set)(e, "verboseTimeElapsed", Z * re);
            }
            if (x < 0) return e;
            let N = ci(Math.min(Math.max(0, x / P), 1)),
              q = lE(_, N, h),
              L = {},
              z = null;
            return (
              v.length &&
                (z = v.reduce((Y, Z) => {
                  let re = f[Z],
                    ne = parseFloat(n[Z]) || 0,
                    w = (parseFloat(re) - ne) * q + ne;
                  return (Y[Z] = w), Y;
                }, {})),
              (L.current = z),
              (L.position = N),
              N === 1 && ((L.active = !1), (L.complete = !0)),
              (0, ht.merge)(e, L)
            );
          }
          return e;
        }),
        (fE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case xD:
              return t.payload.ixInstances || Object.freeze({});
            case SD:
              return Object.freeze({});
            case RD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: v,
                  origin: d,
                  destination: E,
                  immediate: h,
                  verbose: m,
                  continuous: _,
                  parameterId: P,
                  actionGroups: A,
                  smoothing: R,
                  restingValue: x,
                  pluginInstance: N,
                  pluginDuration: q,
                  instanceDelay: L,
                  skipMotion: z,
                  skipToValue: Y,
                } = t.payload,
                { actionTypeId: Z } = i,
                re = MD(Z),
                ne = DD(re, Z),
                M = Object.keys(E).filter(
                  (F) => E[F] != null && typeof E[F] != "string"
                ),
                { easing: w } = i.config;
              return (0, ht.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: E,
                destinationKeys: M,
                immediate: h,
                verbose: m,
                current: null,
                actionItem: i,
                actionTypeId: Z,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: re,
                isCarrier: v,
                styleProp: ne,
                continuous: _,
                parameterId: P,
                actionGroups: A,
                smoothing: R,
                restingValue: x,
                pluginInstance: N,
                pluginDuration: q,
                instanceDelay: L,
                skipMotion: z,
                skipToValue: Y,
                customEasingFn:
                  Array.isArray(w) && w.length === 4 ? PD(w) : void 0,
              });
            }
            case CD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ht.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case ND: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case LD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? FD : GD;
                r = (0, ht.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var UD,
    VD,
    HD,
    pE,
    vE = Ee(() => {
      "use strict";
      Ge();
      ({
        IX2_RAW_DATA_IMPORTED: UD,
        IX2_SESSION_STOPPED: VD,
        IX2_PARAMETER_CHANGED: HD,
      } = Ie),
        (pE = (e = {}, t) => {
          switch (t.type) {
            case UD:
              return t.payload.ixParameters || {};
            case VD:
              return {};
            case HD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var EE = {};
  De(EE, { default: () => XD });
  var gE,
    hE,
    WD,
    XD,
    yE = Ee(() => {
      "use strict";
      gE = fe(Bo());
      Cf();
      Qf();
      ed();
      hE = fe(Gt());
      dE();
      vE();
      ({ ixElements: WD } = hE.IX2ElementsReducer),
        (XD = (0, gE.combineReducers)({
          ixData: Rf,
          ixRequest: $f,
          ixSession: Jf,
          ixElements: WD,
          ixInstances: fE,
          ixParameters: pE,
        }));
    });
  var _E = c((U5, mE) => {
    var kD = bt(),
      BD = we(),
      jD = pt(),
      zD = "[object String]";
    function KD(e) {
      return typeof e == "string" || (!BD(e) && jD(e) && kD(e) == zD);
    }
    mE.exports = KD;
  });
  var bE = c((V5, TE) => {
    var YD = _a(),
      $D = YD("length");
    TE.exports = $D;
  });
  var OE = c((H5, IE) => {
    var QD = "\\ud800-\\udfff",
      ZD = "\\u0300-\\u036f",
      JD = "\\ufe20-\\ufe2f",
      eF = "\\u20d0-\\u20ff",
      tF = ZD + JD + eF,
      rF = "\\ufe0e\\ufe0f",
      nF = "\\u200d",
      iF = RegExp("[" + nF + QD + tF + rF + "]");
    function oF(e) {
      return iF.test(e);
    }
    IE.exports = oF;
  });
  var PE = c((W5, LE) => {
    var AE = "\\ud800-\\udfff",
      aF = "\\u0300-\\u036f",
      sF = "\\ufe20-\\ufe2f",
      uF = "\\u20d0-\\u20ff",
      cF = aF + sF + uF,
      lF = "\\ufe0e\\ufe0f",
      fF = "[" + AE + "]",
      Ya = "[" + cF + "]",
      $a = "\\ud83c[\\udffb-\\udfff]",
      dF = "(?:" + Ya + "|" + $a + ")",
      xE = "[^" + AE + "]",
      SE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      RE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      pF = "\\u200d",
      CE = dF + "?",
      NE = "[" + lF + "]?",
      vF = "(?:" + pF + "(?:" + [xE, SE, RE].join("|") + ")" + NE + CE + ")*",
      gF = NE + CE + vF,
      hF = "(?:" + [xE + Ya + "?", Ya, SE, RE, fF].join("|") + ")",
      wE = RegExp($a + "(?=" + $a + ")|" + hF + gF, "g");
    function EF(e) {
      for (var t = (wE.lastIndex = 0); wE.test(e); ) ++t;
      return t;
    }
    LE.exports = EF;
  });
  var ME = c((X5, qE) => {
    var yF = bE(),
      mF = OE(),
      _F = PE();
    function TF(e) {
      return mF(e) ? _F(e) : yF(e);
    }
    qE.exports = TF;
  });
  var FE = c((k5, DE) => {
    var bF = Wn(),
      IF = Xn(),
      OF = Pt(),
      wF = _E(),
      AF = ME(),
      xF = "[object Map]",
      SF = "[object Set]";
    function RF(e) {
      if (e == null) return 0;
      if (OF(e)) return wF(e) ? AF(e) : e.length;
      var t = IF(e);
      return t == xF || t == SF ? e.size : bF(e).length;
    }
    DE.exports = RF;
  });
  var UE = c((B5, GE) => {
    var CF = "Expected a function";
    function NF(e) {
      if (typeof e != "function") throw new TypeError(CF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    GE.exports = NF;
  });
  var Qa = c((j5, VE) => {
    var LF = It(),
      PF = (function () {
        try {
          var e = LF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    VE.exports = PF;
  });
  var Za = c((z5, WE) => {
    var HE = Qa();
    function qF(e, t, r) {
      t == "__proto__" && HE
        ? HE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    WE.exports = qF;
  });
  var kE = c((K5, XE) => {
    var MF = Za(),
      DF = Ln(),
      FF = Object.prototype,
      GF = FF.hasOwnProperty;
    function UF(e, t, r) {
      var n = e[t];
      (!(GF.call(e, t) && DF(n, r)) || (r === void 0 && !(t in e))) &&
        MF(e, t, r);
    }
    XE.exports = UF;
  });
  var zE = c((Y5, jE) => {
    var VF = kE(),
      HF = Hr(),
      WF = Gn(),
      BE = st(),
      XF = nr();
    function kF(e, t, r, n) {
      if (!BE(e)) return e;
      t = HF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = XF(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var v = s[u];
          (f = n ? n(v, u, s) : void 0),
            f === void 0 && (f = BE(v) ? v : WF(t[i + 1]) ? [] : {});
        }
        VF(s, u, f), (s = s[u]);
      }
      return e;
    }
    jE.exports = kF;
  });
  var YE = c(($5, KE) => {
    var BF = jn(),
      jF = zE(),
      zF = Hr();
    function KF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = BF(e, a);
        r(s, a) && jF(o, zF(a, e), s);
      }
      return o;
    }
    KE.exports = KF;
  });
  var QE = c((Q5, $E) => {
    var YF = Dn(),
      $F = Lo(),
      QF = oa(),
      ZF = ia(),
      JF = Object.getOwnPropertySymbols,
      e2 = JF
        ? function (e) {
            for (var t = []; e; ) YF(t, QF(e)), (e = $F(e));
            return t;
          }
        : ZF;
    $E.exports = e2;
  });
  var JE = c((Z5, ZE) => {
    function t2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    ZE.exports = t2;
  });
  var ty = c((J5, ey) => {
    var r2 = st(),
      n2 = Hn(),
      i2 = JE(),
      o2 = Object.prototype,
      a2 = o2.hasOwnProperty;
    function s2(e) {
      if (!r2(e)) return i2(e);
      var t = n2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !a2.call(e, n))) || r.push(n);
      return r;
    }
    ey.exports = s2;
  });
  var ny = c((ej, ry) => {
    var u2 = sa(),
      c2 = ty(),
      l2 = Pt();
    function f2(e) {
      return l2(e) ? u2(e, !0) : c2(e);
    }
    ry.exports = f2;
  });
  var oy = c((tj, iy) => {
    var d2 = na(),
      p2 = QE(),
      v2 = ny();
    function g2(e) {
      return d2(e, v2, p2);
    }
    iy.exports = g2;
  });
  var sy = c((rj, ay) => {
    var h2 = ma(),
      E2 = Ot(),
      y2 = YE(),
      m2 = oy();
    function _2(e, t) {
      if (e == null) return {};
      var r = h2(m2(e), function (n) {
        return [n];
      });
      return (
        (t = E2(t)),
        y2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ay.exports = _2;
  });
  var cy = c((nj, uy) => {
    var T2 = Ot(),
      b2 = UE(),
      I2 = sy();
    function O2(e, t) {
      return I2(e, b2(T2(t)));
    }
    uy.exports = O2;
  });
  var fy = c((ij, ly) => {
    var w2 = Wn(),
      A2 = Xn(),
      x2 = Mr(),
      S2 = we(),
      R2 = Pt(),
      C2 = Fn(),
      N2 = Hn(),
      L2 = Vn(),
      P2 = "[object Map]",
      q2 = "[object Set]",
      M2 = Object.prototype,
      D2 = M2.hasOwnProperty;
    function F2(e) {
      if (e == null) return !0;
      if (
        R2(e) &&
        (S2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          C2(e) ||
          L2(e) ||
          x2(e))
      )
        return !e.length;
      var t = A2(e);
      if (t == P2 || t == q2) return !e.size;
      if (N2(e)) return !w2(e).length;
      for (var r in e) if (D2.call(e, r)) return !1;
      return !0;
    }
    ly.exports = F2;
  });
  var py = c((oj, dy) => {
    var G2 = Za(),
      U2 = Ua(),
      V2 = Ot();
    function H2(e, t) {
      var r = {};
      return (
        (t = V2(t, 3)),
        U2(e, function (n, i, o) {
          G2(r, i, t(n, i, o));
        }),
        r
      );
    }
    dy.exports = H2;
  });
  var gy = c((aj, vy) => {
    function W2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vy.exports = W2;
  });
  var Ey = c((sj, hy) => {
    var X2 = Kn();
    function k2(e) {
      return typeof e == "function" ? e : X2;
    }
    hy.exports = k2;
  });
  var my = c((uj, yy) => {
    var B2 = gy(),
      j2 = Va(),
      z2 = Ey(),
      K2 = we();
    function Y2(e, t) {
      var r = K2(e) ? B2 : j2;
      return r(e, z2(t));
    }
    yy.exports = Y2;
  });
  var Ty = c((cj, _y) => {
    var $2 = $e(),
      Q2 = function () {
        return $2.Date.now();
      };
    _y.exports = Q2;
  });
  var Oy = c((lj, Iy) => {
    var Z2 = st(),
      Ja = Ty(),
      by = Yn(),
      J2 = "Expected a function",
      eG = Math.max,
      tG = Math.min;
    function rG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        v = !1,
        d = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(J2);
      (t = by(t) || 0),
        Z2(r) &&
          ((v = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? eG(by(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function h(L) {
        var z = n,
          Y = i;
        return (n = i = void 0), (f = L), (a = e.apply(Y, z)), a;
      }
      function m(L) {
        return (f = L), (s = setTimeout(A, t)), v ? h(L) : a;
      }
      function _(L) {
        var z = L - u,
          Y = L - f,
          Z = t - z;
        return d ? tG(Z, o - Y) : Z;
      }
      function P(L) {
        var z = L - u,
          Y = L - f;
        return u === void 0 || z >= t || z < 0 || (d && Y >= o);
      }
      function A() {
        var L = Ja();
        if (P(L)) return R(L);
        s = setTimeout(A, _(L));
      }
      function R(L) {
        return (s = void 0), E && n ? h(L) : ((n = i = void 0), a);
      }
      function x() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function N() {
        return s === void 0 ? a : R(Ja());
      }
      function q() {
        var L = Ja(),
          z = P(L);
        if (((n = arguments), (i = this), (u = L), z)) {
          if (s === void 0) return m(u);
          if (d) return clearTimeout(s), (s = setTimeout(A, t)), h(u);
        }
        return s === void 0 && (s = setTimeout(A, t)), a;
      }
      return (q.cancel = x), (q.flush = N), q;
    }
    Iy.exports = rG;
  });
  var Ay = c((fj, wy) => {
    var nG = Oy(),
      iG = st(),
      oG = "Expected a function";
    function aG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(oG);
      return (
        iG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        nG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    wy.exports = aG;
  });
  var Sy = {};
  De(Sy, {
    actionListPlaybackChanged: () => gr,
    animationFrameChanged: () => di,
    clearRequested: () => NG,
    elementStateChanged: () => ss,
    eventListenerAdded: () => fi,
    eventStateChanged: () => is,
    instanceAdded: () => os,
    instanceRemoved: () => as,
    instanceStarted: () => pi,
    mediaQueriesDefined: () => cs,
    parameterChanged: () => vr,
    playbackRequested: () => RG,
    previewRequested: () => SG,
    rawDataImported: () => es,
    sessionInitialized: () => ts,
    sessionStarted: () => rs,
    sessionStopped: () => ns,
    stopRequested: () => CG,
    testFrameRendered: () => LG,
    viewportWidthChanged: () => us,
  });
  var xy,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    hG,
    EG,
    yG,
    mG,
    _G,
    TG,
    bG,
    IG,
    OG,
    wG,
    AG,
    xG,
    es,
    ts,
    rs,
    ns,
    SG,
    RG,
    CG,
    NG,
    fi,
    LG,
    is,
    di,
    vr,
    os,
    pi,
    as,
    ss,
    gr,
    us,
    cs,
    vi = Ee(() => {
      "use strict";
      Ge();
      (xy = fe(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: sG,
          IX2_SESSION_INITIALIZED: uG,
          IX2_SESSION_STARTED: cG,
          IX2_SESSION_STOPPED: lG,
          IX2_PREVIEW_REQUESTED: fG,
          IX2_PLAYBACK_REQUESTED: dG,
          IX2_STOP_REQUESTED: pG,
          IX2_CLEAR_REQUESTED: vG,
          IX2_EVENT_LISTENER_ADDED: gG,
          IX2_TEST_FRAME_RENDERED: hG,
          IX2_EVENT_STATE_CHANGED: EG,
          IX2_ANIMATION_FRAME_CHANGED: yG,
          IX2_PARAMETER_CHANGED: mG,
          IX2_INSTANCE_ADDED: _G,
          IX2_INSTANCE_STARTED: TG,
          IX2_INSTANCE_REMOVED: bG,
          IX2_ELEMENT_STATE_CHANGED: IG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: OG,
          IX2_VIEWPORT_WIDTH_CHANGED: wG,
          IX2_MEDIA_QUERIES_DEFINED: AG,
        } = Ie),
        ({ reifyState: xG } = xy.IX2VanillaUtils),
        (es = (e) => ({ type: sG, payload: { ...xG(e) } })),
        (ts = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: uG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (rs = () => ({ type: cG })),
        (ns = () => ({ type: lG })),
        (SG = ({ rawData: e, defer: t }) => ({
          type: fG,
          payload: { defer: t, rawData: e },
        })),
        (RG = ({
          actionTypeId: e = We.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: dG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (CG = (e) => ({ type: pG, payload: { actionListId: e } })),
        (NG = () => ({ type: vG })),
        (fi = (e, t) => ({
          type: gG,
          payload: { target: e, listenerParams: t },
        })),
        (LG = (e = 1) => ({ type: hG, payload: { step: e } })),
        (is = (e, t) => ({ type: EG, payload: { stateKey: e, newState: t } })),
        (di = (e, t) => ({ type: yG, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: mG, payload: { key: e, value: t } })),
        (os = (e) => ({ type: _G, payload: { ...e } })),
        (pi = (e, t) => ({ type: TG, payload: { instanceId: e, time: t } })),
        (as = (e) => ({ type: bG, payload: { instanceId: e } })),
        (ss = (e, t, r, n) => ({
          type: IG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (gr = ({ actionListId: e, isPlaying: t }) => ({
          type: OG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (us = ({ width: e, mediaQueries: t }) => ({
          type: wG,
          payload: { width: e, mediaQueries: t },
        })),
        (cs = () => ({ type: AG }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => ds,
    getChildElements: () => WG,
    getClosestElement: () => Zr,
    getProperty: () => FG,
    getQuerySelector: () => fs,
    getRefType: () => ps,
    getSiblingElements: () => XG,
    getStyle: () => DG,
    getValidDocument: () => UG,
    isSiblingNode: () => HG,
    matchSelector: () => GG,
    queryDocument: () => VG,
    setStyle: () => MG,
  });
  function MG(e, t, r) {
    e.style[t] = r;
  }
  function DG(e, t) {
    return e.style[t];
  }
  function FG(e, t) {
    return e[t];
  }
  function GG(e) {
    return (t) => t[ls](e);
  }
  function fs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ry) !== -1) {
        let n = e.split(Ry),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ny)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function UG(e) {
    return e == null || e === document.documentElement.getAttribute(Ny)
      ? document
      : null;
  }
  function VG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ds(e, t) {
    return e.contains(t);
  }
  function HG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function WG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function XG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ps(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? PG
        : qG
      : null;
  }
  var Cy,
    ls,
    Ry,
    PG,
    qG,
    Ny,
    Zr,
    Ly = Ee(() => {
      "use strict";
      Cy = fe(Gt());
      Ge();
      ({ ELEMENT_MATCHES: ls } = Cy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ry,
          HTML_ELEMENT: PG,
          PLAIN_OBJECT: qG,
          WF_PAGE: Ny,
        } = Re);
      Zr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ls] && r[ls](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var vs = c((vj, qy) => {
    var kG = st(),
      Py = Object.create,
      BG = (function () {
        function e() {}
        return function (t) {
          if (!kG(t)) return {};
          if (Py) return Py(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    qy.exports = BG;
  });
  var gi = c((gj, My) => {
    function jG() {}
    My.exports = jG;
  });
  var Ei = c((hj, Dy) => {
    var zG = vs(),
      KG = gi();
    function hi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    hi.prototype = zG(KG.prototype);
    hi.prototype.constructor = hi;
    Dy.exports = hi;
  });
  var Vy = c((Ej, Uy) => {
    var Fy = jt(),
      YG = Mr(),
      $G = we(),
      Gy = Fy ? Fy.isConcatSpreadable : void 0;
    function QG(e) {
      return $G(e) || YG(e) || !!(Gy && e && e[Gy]);
    }
    Uy.exports = QG;
  });
  var Xy = c((yj, Wy) => {
    var ZG = Dn(),
      JG = Vy();
    function Hy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = JG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Hy(s, t - 1, r, n, i)
            : ZG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Wy.exports = Hy;
  });
  var By = c((mj, ky) => {
    var eU = Xy();
    function tU(e) {
      var t = e == null ? 0 : e.length;
      return t ? eU(e, 1) : [];
    }
    ky.exports = tU;
  });
  var zy = c((_j, jy) => {
    function rU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    jy.exports = rU;
  });
  var $y = c((Tj, Yy) => {
    var nU = zy(),
      Ky = Math.max;
    function iU(e, t, r) {
      return (
        (t = Ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), nU(e, this, s);
        }
      );
    }
    Yy.exports = iU;
  });
  var Zy = c((bj, Qy) => {
    function oU(e) {
      return function () {
        return e;
      };
    }
    Qy.exports = oU;
  });
  var tm = c((Ij, em) => {
    var aU = Zy(),
      Jy = Qa(),
      sU = Kn(),
      uU = Jy
        ? function (e, t) {
            return Jy(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: aU(t),
              writable: !0,
            });
          }
        : sU;
    em.exports = uU;
  });
  var nm = c((Oj, rm) => {
    var cU = 800,
      lU = 16,
      fU = Date.now;
    function dU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = fU(),
          i = lU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= cU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    rm.exports = dU;
  });
  var om = c((wj, im) => {
    var pU = tm(),
      vU = nm(),
      gU = vU(pU);
    im.exports = gU;
  });
  var sm = c((Aj, am) => {
    var hU = By(),
      EU = $y(),
      yU = om();
    function mU(e) {
      return yU(EU(e, void 0, hU), e + "");
    }
    am.exports = mU;
  });
  var lm = c((xj, cm) => {
    var um = ua(),
      _U = um && new um();
    cm.exports = _U;
  });
  var dm = c((Sj, fm) => {
    function TU() {}
    fm.exports = TU;
  });
  var gs = c((Rj, vm) => {
    var pm = lm(),
      bU = dm(),
      IU = pm
        ? function (e) {
            return pm.get(e);
          }
        : bU;
    vm.exports = IU;
  });
  var hm = c((Cj, gm) => {
    var OU = {};
    gm.exports = OU;
  });
  var hs = c((Nj, ym) => {
    var Em = hm(),
      wU = Object.prototype,
      AU = wU.hasOwnProperty;
    function xU(e) {
      for (
        var t = e.name + "", r = Em[t], n = AU.call(Em, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    ym.exports = xU;
  });
  var mi = c((Lj, mm) => {
    var SU = vs(),
      RU = gi(),
      CU = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = CU),
        (this.__views__ = []);
    }
    yi.prototype = SU(RU.prototype);
    yi.prototype.constructor = yi;
    mm.exports = yi;
  });
  var Tm = c((Pj, _m) => {
    function NU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    _m.exports = NU;
  });
  var Im = c((qj, bm) => {
    var LU = mi(),
      PU = Ei(),
      qU = Tm();
    function MU(e) {
      if (e instanceof LU) return e.clone();
      var t = new PU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = qU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    bm.exports = MU;
  });
  var Am = c((Mj, wm) => {
    var DU = mi(),
      Om = Ei(),
      FU = gi(),
      GU = we(),
      UU = pt(),
      VU = Im(),
      HU = Object.prototype,
      WU = HU.hasOwnProperty;
    function _i(e) {
      if (UU(e) && !GU(e) && !(e instanceof DU)) {
        if (e instanceof Om) return e;
        if (WU.call(e, "__wrapped__")) return VU(e);
      }
      return new Om(e);
    }
    _i.prototype = FU.prototype;
    _i.prototype.constructor = _i;
    wm.exports = _i;
  });
  var Sm = c((Dj, xm) => {
    var XU = mi(),
      kU = gs(),
      BU = hs(),
      jU = Am();
    function zU(e) {
      var t = BU(e),
        r = jU[t];
      if (typeof r != "function" || !(t in XU.prototype)) return !1;
      if (e === r) return !0;
      var n = kU(r);
      return !!n && e === n[0];
    }
    xm.exports = zU;
  });
  var Lm = c((Fj, Nm) => {
    var Rm = Ei(),
      KU = sm(),
      YU = gs(),
      Es = hs(),
      $U = we(),
      Cm = Sm(),
      QU = "Expected a function",
      ZU = 8,
      JU = 32,
      eV = 128,
      tV = 256;
    function rV(e) {
      return KU(function (t) {
        var r = t.length,
          n = r,
          i = Rm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(QU);
          if (i && !a && Es(o) == "wrapper") var a = new Rm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = Es(o),
            u = s == "wrapper" ? YU(o) : void 0;
          u &&
          Cm(u[0]) &&
          u[1] == (eV | ZU | JU | tV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[Es(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Cm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            v = f[0];
          if (a && f.length == 1 && $U(v)) return a.plant(v).value();
          for (var d = 0, E = r ? t[d].apply(this, f) : v; ++d < r; )
            E = t[d].call(this, E);
          return E;
        };
      });
    }
    Nm.exports = rV;
  });
  var qm = c((Gj, Pm) => {
    var nV = Lm(),
      iV = nV();
    Pm.exports = iV;
  });
  var Dm = c((Uj, Mm) => {
    function oV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Mm.exports = oV;
  });
  var Gm = c((Vj, Fm) => {
    var aV = Dm(),
      ys = Yn();
    function sV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ys(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ys(t)), (t = t === t ? t : 0)),
        aV(ys(e), t, r)
      );
    }
    Fm.exports = sV;
  });
  var zm,
    Km,
    Ym,
    $m,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    vV,
    gV,
    hV,
    EV,
    yV,
    mV,
    _V,
    TV,
    bV,
    Qm,
    Zm,
    IV,
    OV,
    wV,
    Jm,
    AV,
    xV,
    e_,
    SV,
    ms,
    t_,
    Um,
    Vm,
    r_,
    en,
    RV,
    lt,
    n_,
    CV,
    Ve,
    Je,
    tn,
    i_,
    _s,
    Hm,
    Ts,
    NV,
    Jr,
    LV,
    PV,
    qV,
    o_,
    Wm,
    MV,
    Xm,
    DV,
    FV,
    GV,
    km,
    Ti,
    bi,
    Bm,
    jm,
    a_,
    s_ = Ee(() => {
      "use strict";
      (zm = fe(qm())), (Km = fe(zn())), (Ym = fe(Gm()));
      Ge();
      bs();
      vi();
      ($m = fe(Gt())),
        ({
          MOUSE_CLICK: uV,
          MOUSE_SECOND_CLICK: cV,
          MOUSE_DOWN: lV,
          MOUSE_UP: fV,
          MOUSE_OVER: dV,
          MOUSE_OUT: pV,
          DROPDOWN_CLOSE: vV,
          DROPDOWN_OPEN: gV,
          SLIDER_ACTIVE: hV,
          SLIDER_INACTIVE: EV,
          TAB_ACTIVE: yV,
          TAB_INACTIVE: mV,
          NAVBAR_CLOSE: _V,
          NAVBAR_OPEN: TV,
          MOUSE_MOVE: bV,
          PAGE_SCROLL_DOWN: Qm,
          SCROLL_INTO_VIEW: Zm,
          SCROLL_OUT_OF_VIEW: IV,
          PAGE_SCROLL_UP: OV,
          SCROLLING_IN_VIEW: wV,
          PAGE_FINISH: Jm,
          ECOMMERCE_CART_CLOSE: AV,
          ECOMMERCE_CART_OPEN: xV,
          PAGE_START: e_,
          PAGE_SCROLL: SV,
        } = Qe),
        (ms = "COMPONENT_ACTIVE"),
        (t_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Um } = Re),
        ({ getNamespacedParameterId: Vm } = $m.IX2VanillaUtils),
        (r_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (en = r_(({ element: e, nativeEvent: t }) => e === t.target)),
        (RV = r_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, zm.default)([en, RV])),
        (n_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !NV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (CV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!n_(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = n_(e, u);
          return (
            f &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Um + n.split(Um)[1],
                actionListId: (0, Km.default)(f, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            rn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (tn = { handler: Je(lt, Ve) }),
        (i_ = { ...tn, types: [ms, t_].join(" ") }),
        (_s = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Hm = "mouseover mouseout"),
        (Ts = { types: _s }),
        (NV = { PAGE_START: e_, PAGE_FINISH: Jm }),
        (Jr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Ym.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (LV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (PV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (qV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Jr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return LV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (o_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ms, t_].indexOf(n) !== -1 ? n === ms : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Wm = (e) => (t, r) => {
          let n = { elementHovered: PV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (MV = (e) => (t, r) => {
          let n = { ...r, elementVisible: qV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Xm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Jr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              v = f === "PX",
              d = i - o,
              E = Number((n / d).toFixed(2));
            if (r && r.percentTop === E) return r;
            let h = (v ? u : (o * (u || 0)) / 100) / d,
              m,
              _,
              P = 0;
            r &&
              ((m = E > r.percentTop),
              (_ = r.scrollingDown !== m),
              (P = _ ? E : r.anchorTop));
            let A = s === Qm ? E >= P + h : E <= P - h,
              R = {
                ...r,
                percentTop: E,
                inBounds: A,
                anchorTop: P,
                scrollingDown: m,
              };
            return (r && A && (_ || R.inBounds !== r.inBounds) && e(t, R)) || R;
          }),
        (DV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (FV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (GV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (km =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ti = (e = !0) => ({
          ...i_,
          handler: Je(
            e ? lt : en,
            o_((t, r) => (r.isActive ? tn.handler(t, r) : r))
          ),
        })),
        (bi = (e = !0) => ({
          ...i_,
          handler: Je(
            e ? lt : en,
            o_((t, r) => (r.isActive ? r : tn.handler(t, r)))
          ),
        })),
        (Bm = {
          ...Ts,
          handler: MV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Zm) === r
              ? (Ve(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (jm = 0.05),
        (a_ = {
          [hV]: Ti(),
          [EV]: bi(),
          [gV]: Ti(),
          [vV]: bi(),
          [TV]: Ti(!1),
          [_V]: bi(!1),
          [yV]: Ti(),
          [mV]: bi(),
          [xV]: { types: "ecommerce-cart-open", handler: Je(lt, Ve) },
          [AV]: { types: "ecommerce-cart-close", handler: Je(lt, Ve) },
          [uV]: {
            types: "click",
            handler: Je(
              lt,
              km((e, { clickCount: t }) => {
                CV(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [cV]: {
            types: "click",
            handler: Je(
              lt,
              km((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [lV]: { ...tn, types: "mousedown" },
          [fV]: { ...tn, types: "mouseup" },
          [dV]: {
            types: Hm,
            handler: Je(
              lt,
              Wm((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [pV]: {
            types: Hm,
            handler: Je(
              lt,
              Wm((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [bV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: v = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: E = o.clientY,
                  pageX: h = o.pageX,
                  pageY: m = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                P = n.type === "mouseout",
                A = v / 100,
                R = u,
                x = !1;
              switch (a) {
                case at.VIEWPORT: {
                  A = _
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: N,
                    scrollTop: q,
                    scrollWidth: L,
                    scrollHeight: z,
                  } = Jr();
                  A = _ ? Math.min(N + h, L) / L : Math.min(q + m, z) / z;
                  break;
                }
                case at.ELEMENT:
                default: {
                  R = Vm(i, u);
                  let N = n.type.indexOf("mouse") === 0;
                  if (N && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let q = t.getBoundingClientRect(),
                    { left: L, top: z, width: Y, height: Z } = q;
                  if (!N && !DV({ left: d, top: E }, q)) break;
                  (x = !0), (A = _ ? (d - L) / Y : (E - z) / Z);
                  break;
                }
              }
              return (
                P && (A > 1 - jm || A < jm) && (A = Math.round(A)),
                (a !== at.ELEMENT || x || x !== o.elementHovered) &&
                  ((A = f ? 1 - A : A), e.dispatch(vr(R, A))),
                {
                  elementHovered: x,
                  clientX: d,
                  clientY: E,
                  pageX: h,
                  pageY: m,
                }
              );
            },
          },
          [SV]: {
            types: _s,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Jr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(vr(r, s));
            },
          },
          [wV]: {
            types: _s,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = Jr(),
                {
                  basedOn: v,
                  selectedAxis: d,
                  continuousParameterGroupId: E,
                  startsEntering: h,
                  startsExiting: m,
                  addEndOffset: _,
                  addStartOffset: P,
                  addOffsetValue: A = 0,
                  endOffsetValue: R = 0,
                } = r,
                x = d === "X_AXIS";
              if (v === at.VIEWPORT) {
                let N = x ? o / s : a / u;
                return (
                  N !== i.scrollPercent && t.dispatch(vr(E, N)),
                  { scrollPercent: N }
                );
              } else {
                let N = Vm(n, E),
                  q = e.getBoundingClientRect(),
                  L = (P ? A : 0) / 100,
                  z = (_ ? R : 0) / 100;
                (L = h ? L : 1 - L), (z = m ? z : 1 - z);
                let Y = q.top + Math.min(q.height * L, f),
                  re = q.top + q.height * z - Y,
                  ne = Math.min(f + re, u),
                  w = Math.min(Math.max(0, f - Y), ne) / ne;
                return (
                  w !== i.scrollPercent && t.dispatch(vr(N, w)),
                  { scrollPercent: w }
                );
              }
            },
          },
          [Zm]: Bm,
          [IV]: Bm,
          [Qm]: {
            ...Ts,
            handler: Xm((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [OV]: {
            ...Ts,
            handler: Xm((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [Jm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(en, FV(Ve)),
          },
          [e_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(en, GV(Ve)),
          },
        });
    });
  var O_ = {};
  De(O_, {
    observeRequests: () => iH,
    startActionGroup: () => rn,
    startEngine: () => Si,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => T_,
    stopEngine: () => Ri,
  });
  function iH(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: sH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: uH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: cH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: lH });
  }
  function oH(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ri(e),
          E_({ store: e, elementApi: qe }),
          Si({ store: e, allowEvents: !0 }),
          y_();
      },
    });
  }
  function aH(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function sH({ rawData: e, defer: t }, r) {
    let n = () => {
      Si({ store: r, rawData: e, allowEvents: !0 }), y_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function y_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function uH(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: v } = e;
    if (n && i && v && s) {
      let d = v.actionLists[n];
      d && (v = zV({ actionList: d, actionItemId: i, rawData: v }));
    }
    if (
      (Si({ store: t, rawData: v, allowEvents: a, testManual: u }),
      (n && r === We.GENERAL_START_ACTION) || Is(r))
    ) {
      hr({ store: t, actionListId: n }),
        __({ store: t, actionListId: n, eventId: o });
      let d = rn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(gr({ actionListId: n, isPlaying: !s }));
    }
  }
  function cH({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : T_({ store: t }), Ri(t);
  }
  function lH(e, t) {
    Ri(t), E_({ store: t, elementApi: qe });
  }
  function Si({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(es(t)),
      i.active ||
        (e.dispatch(
          ts({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (hH(e), fH(), e.getState().ixSession.hasDefinedMediaQueries && oH(e)),
        e.dispatch(rs()),
        dH(e, n));
  }
  function fH() {
    let { documentElement: e } = document;
    e.className.indexOf(u_) === -1 && (e.className += ` ${u_}`);
  }
  function dH(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(di(n, o)), t ? aH(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ri(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(pH), QV(), e.dispatch(ns());
    }
  }
  function pH({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function vH({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: v } = e.getState(),
      { events: d } = f,
      E = d[n],
      { eventTypeId: h } = E,
      m = {},
      _ = {},
      P = [],
      { continuousActionGroups: A } = a,
      { id: R } = a;
    KV(h, i) && (R = YV(t, R));
    let x = v.hasBoundaryNodes && r ? Zr(r, Oi) : null;
    A.forEach((N) => {
      let { keyframe: q, actionItems: L } = N;
      L.forEach((z) => {
        let { actionTypeId: Y } = z,
          { target: Z } = z.config;
        if (!Z) return;
        let re = Z.boundaryMode ? x : null,
          ne = ZV(Z) + Os + Y;
        if (((_[ne] = gH(_[ne], q, z)), !m[ne])) {
          m[ne] = !0;
          let { config: M } = z;
          wi({
            config: M,
            event: E,
            eventTarget: r,
            elementRoot: re,
            elementApi: qe,
          }).forEach((w) => {
            P.push({ element: w, key: ne });
          });
        }
      });
    }),
      P.forEach(({ element: N, key: q }) => {
        let L = _[q],
          z = (0, Et.default)(L, "[0].actionItems[0]", {}),
          { actionTypeId: Y } = z,
          Z = xi(Y) ? As(Y)(N, z) : null,
          re = ws({ element: N, actionItem: z, elementApi: qe }, Z);
        xs({
          store: e,
          element: N,
          eventId: n,
          actionListId: o,
          actionItem: z,
          destination: re,
          continuous: !0,
          parameterId: R,
          actionGroups: L,
          smoothing: s,
          restingValue: u,
          pluginInstance: Z,
        });
      });
  }
  function gH(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function hH(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    m_(e),
      (0, Er.default)(r, (i, o) => {
        let a = a_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        bH({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && yH(e);
  }
  function yH(e) {
    let t = () => {
      m_(e);
    };
    EH.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(fi(window, [r, t]));
    }),
      t();
  }
  function m_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(us({ width: n, mediaQueries: i }));
    }
  }
  function bH({ logic: e, store: t, events: r }) {
    IH(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = mH(r, TH);
    if (!(0, f_.default)(s)) return;
    (0, Er.default)(s, (d, E) => {
      let h = r[E],
        { action: m, id: _, mediaQueries: P = o.mediaQueryKeys } = h,
        { actionListId: A } = m.config;
      JV(P, o.mediaQueryKeys) || t.dispatch(cs()),
        m.actionTypeId === We.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(h.config) ? h.config : [h.config]).forEach((x) => {
            let { continuousParameterGroupId: N } = x,
              q = (0, Et.default)(a, `${A}.continuousParameterGroups`, []),
              L = (0, l_.default)(q, ({ id: Z }) => Z === N),
              z = (x.smoothing || 0) / 100,
              Y = (x.restingState || 0) / 100;
            L &&
              d.forEach((Z, re) => {
                let ne = _ + Os + re;
                vH({
                  store: t,
                  eventStateKey: ne,
                  eventTarget: Z,
                  eventId: _,
                  eventConfig: x,
                  actionListId: A,
                  parameterGroup: L,
                  smoothing: z,
                  restingValue: Y,
                });
              });
          }),
        (m.actionTypeId === We.GENERAL_START_ACTION || Is(m.actionTypeId)) &&
          __({ store: t, actionListId: A, eventId: _ });
    });
    let u = (d) => {
        let { ixSession: E } = t.getState();
        _H(s, (h, m, _) => {
          let P = r[m],
            A = E.eventState[_],
            { action: R, mediaQueries: x = o.mediaQueryKeys } = P;
          if (!Ai(x, E.mediaQueryKey)) return;
          let N = (q = {}) => {
            let L = i(
              {
                store: t,
                element: h,
                event: P,
                eventConfig: q,
                nativeEvent: d,
                eventStateKey: _,
              },
              A
            );
            eH(L, A) || t.dispatch(is(_, L));
          };
          R.actionTypeId === We.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(N)
            : N();
        });
      },
      f = (0, g_.default)(u, nH),
      v = ({ target: d = document, types: E, throttle: h }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((m) => {
            let _ = h ? f : u;
            d.addEventListener(m, _), t.dispatch(fi(d, [m, _]));
          });
      };
    Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
  }
  function IH(e) {
    if (!rH) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = fs(o);
      t[a] ||
        ((i === Qe.MOUSE_CLICK || i === Qe.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function __({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, Et.default)(u, "actionItemGroups[0].actionItems", []),
        v = (0, Et.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(v, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: E, actionTypeId: h } = d,
          m =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : E,
          _ = wi({ config: m, event: s, elementApi: qe }),
          P = xi(h);
        _.forEach((A) => {
          let R = P ? As(h)(A, d) : null;
          xs({
            destination: ws({ element: A, actionItem: d, elementApi: qe }, R),
            immediate: !0,
            store: e,
            element: A,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: R,
          });
        });
      });
    }
  }
  function T_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ss(r, e), i && e.dispatch(gr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Zr(r, Oi) : null;
    (0, Er.default)(o, (u) => {
      let f = (0, Et.default)(u, "actionItem.config.target.boundaryMode"),
        v = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && v) {
        if (s && f && !ds(s, u.element)) return;
        Ss(u, e),
          u.verbose && e.dispatch(gr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function rn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: v } = u,
      d = v[t] || {},
      { mediaQueries: E = u.mediaQueryKeys } = d,
      h = (0, Et.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: m, useFirstGroupAsInitialState: _ } = h;
    if (!m || !m.length) return !1;
    o >= m.length && (0, Et.default)(d, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let A =
        (o === 0 || (o === 1 && _)) && Is(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      R = (0, Et.default)(m, [o, "actionItems"], []);
    if (!R.length || !Ai(E, f.mediaQueryKey)) return !1;
    let x = f.hasBoundaryNodes && r ? Zr(r, Oi) : null,
      N = kV(R),
      q = !1;
    return (
      R.forEach((L, z) => {
        let { config: Y, actionTypeId: Z } = L,
          re = xi(Z),
          { target: ne } = Y;
        if (!ne) return;
        let M = ne.boundaryMode ? x : null;
        wi({
          config: Y,
          event: d,
          eventTarget: r,
          elementRoot: M,
          elementApi: qe,
        }).forEach((F, $) => {
          let j = re ? As(Z)(F, L) : null,
            V = re ? tH(Z)(F, L) : null;
          q = !0;
          let H = N === z && $ === 0,
            T = BV({ element: F, actionItem: L }),
            W = ws({ element: F, actionItem: L, elementApi: qe }, j);
          xs({
            store: e,
            element: F,
            actionItem: L,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: H,
            computedStyle: T,
            destination: W,
            immediate: a,
            verbose: s,
            pluginInstance: j,
            pluginDuration: V,
            instanceDelay: A,
          });
        });
      }),
      q
    );
  }
  function xs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: v,
      } = n,
      d = !u,
      E = WV(),
      { ixElements: h, ixSession: m, ixData: _ } = t.getState(),
      P = HV(h, i),
      { refState: A } = h[P] || {},
      R = ps(i),
      x = m.reducedMotion && Yo[o.actionTypeId],
      N;
    if (x && u)
      switch (_.events[v]?.eventTypeId) {
        case Qe.MOUSE_MOVE:
        case Qe.MOUSE_MOVE_IN_VIEWPORT:
          N = f;
          break;
        default:
          N = 0.5;
          break;
      }
    let q = jV(i, A, r, o, qe, s);
    if (
      (t.dispatch(
        os({
          instanceId: E,
          elementId: P,
          origin: q,
          refType: R,
          skipMotion: x,
          skipToValue: N,
          ...n,
        })
      ),
      b_(document.body, "ix2-animation-started", E),
      a)
    ) {
      OH(t, E);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: L }) => L[E], onChange: I_ }),
      d && t.dispatch(pi(E, m.tick));
  }
  function Ss(e, t) {
    b_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === h_ && $V(o, n, qe), t.dispatch(as(e.id));
  }
  function b_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function OH(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
    let { ixInstances: n } = e.getState();
    I_(n[t], e);
  }
  function I_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: v,
        eventId: d,
        eventTarget: E,
        eventStateKey: h,
        actionListId: m,
        isCarrier: _,
        styleProp: P,
        verbose: A,
        pluginInstance: R,
      } = e,
      { ixData: x, ixSession: N } = t.getState(),
      { events: q } = x,
      L = q[d] || {},
      { mediaQueries: z = x.mediaQueryKeys } = L;
    if (Ai(z, N.mediaQueryKey) && (n || r || i)) {
      if (f || (u === VV && i)) {
        t.dispatch(ss(o, s, f, a));
        let { ixElements: Y } = t.getState(),
          { ref: Z, refType: re, refState: ne } = Y[o] || {},
          M = ne && ne[s];
        (re === h_ || xi(s)) && XV(Z, ne, M, d, a, P, qe, u, R);
      }
      if (i) {
        if (_) {
          let Y = rn({
            store: t,
            eventId: d,
            eventTarget: E,
            eventStateKey: h,
            actionListId: m,
            groupIndex: v + 1,
            verbose: A,
          });
          A && !Y && t.dispatch(gr({ actionListId: m, isPlaying: !1 }));
        }
        Ss(e, t);
      }
    }
  }
  var l_,
    Et,
    f_,
    d_,
    p_,
    v_,
    Er,
    g_,
    Ii,
    UV,
    Is,
    Os,
    Oi,
    h_,
    VV,
    u_,
    wi,
    HV,
    ws,
    Ut,
    WV,
    XV,
    E_,
    kV,
    BV,
    jV,
    zV,
    KV,
    YV,
    Ai,
    $V,
    QV,
    ZV,
    JV,
    eH,
    xi,
    As,
    tH,
    c_,
    rH,
    nH,
    EH,
    mH,
    _H,
    TH,
    bs = Ee(() => {
      "use strict";
      (l_ = fe(Oa())),
        (Et = fe(zn())),
        (f_ = fe(FE())),
        (d_ = fe(cy())),
        (p_ = fe(fy())),
        (v_ = fe(py())),
        (Er = fe(my())),
        (g_ = fe(Ay()));
      Ge();
      Ii = fe(Gt());
      vi();
      Ly();
      s_();
      (UV = Object.keys(zo)),
        (Is = (e) => UV.includes(e)),
        ({
          COLON_DELIMITER: Os,
          BOUNDARY_SELECTOR: Oi,
          HTML_ELEMENT: h_,
          RENDER_GENERAL: VV,
          W_MOD_IX: u_,
        } = Re),
        ({
          getAffectedElements: wi,
          getElementId: HV,
          getDestinationValues: ws,
          observeStore: Ut,
          getInstanceId: WV,
          renderHTMLElement: XV,
          clearAllStyles: E_,
          getMaxDurationItemIndex: kV,
          getComputedStyle: BV,
          getInstanceOrigin: jV,
          reduceListToGroup: zV,
          shouldNamespaceEventParameter: KV,
          getNamespacedParameterId: YV,
          shouldAllowMediaQuery: Ai,
          cleanupHTMLElement: $V,
          clearObjectCache: QV,
          stringifyTarget: ZV,
          mediaQueriesEqual: JV,
          shallowEqual: eH,
        } = Ii.IX2VanillaUtils),
        ({
          isPluginType: xi,
          createPluginInstance: As,
          getPluginDuration: tH,
        } = Ii.IX2VanillaPlugins),
        (c_ = navigator.userAgent),
        (rH = c_.match(/iPad/i) || c_.match(/iPhone/)),
        (nH = 12);
      EH = ["resize", "orientationchange"];
      (mH = (e, t) => (0, d_.default)((0, v_.default)(e, t), p_.default)),
        (_H = (e, t) => {
          (0, Er.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Os + o;
              t(i, n, a);
            });
          });
        }),
        (TH = (e) => {
          let t = { target: e.target, targets: e.targets };
          return wi({ config: t, elementApi: qe });
        });
    });
  var A_ = c((yt) => {
    "use strict";
    var wH = vn().default,
      AH = su().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = w_;
    yt.init = NH;
    yt.setEnv = CH;
    yt.store = void 0;
    jl();
    var xH = Bo(),
      SH = AH((yE(), rt(EE))),
      Rs = (bs(), rt(O_)),
      RH = wH((vi(), rt(Sy)));
    yt.actions = RH;
    var Ci = (0, xH.createStore)(SH.default);
    yt.store = Ci;
    function CH(e) {
      e() && (0, Rs.observeRequests)(Ci);
    }
    function NH(e) {
      w_(), (0, Rs.startEngine)({ store: Ci, rawData: e, allowEvents: !0 });
    }
    function w_() {
      (0, Rs.stopEngine)(Ci);
    }
  });
  var C_ = c((Yj, R_) => {
    "use strict";
    var x_ = Fe(),
      S_ = A_();
    S_.setEnv(x_.env);
    x_.define(
      "ix2",
      (R_.exports = function () {
        return S_;
      })
    );
  });
  var L_ = c(($j, N_) => {
    "use strict";
    var yr = Fe();
    yr.define(
      "links",
      (N_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          v = /\/$/,
          d,
          E;
        r.ready = r.design = r.preview = h;
        function h() {
          (i = o && yr.env("design")),
            (E = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(_),
            (d = []);
          for (var A = document.links, R = 0; R < A.length; ++R) m(A[R]);
          d.length && (yr.scroll.on(_), _());
        }
        function m(A) {
          var R =
            (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var x = e(A);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var N = e(s.hash);
              N.length && d.push({ link: x, sec: N, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var q = s.href === a.href || R === E || (f.test(R) && v.test(E));
              P(x, u, q);
            }
          }
        }
        function _() {
          var A = n.scrollTop(),
            R = n.height();
          t.each(d, function (x) {
            var N = x.link,
              q = x.sec,
              L = q.offset().top,
              z = q.outerHeight(),
              Y = R * 0.5,
              Z = q.is(":visible") && L + z - Y >= A && L + Y <= A + R;
            x.active !== Z && ((x.active = Z), P(N, u, Z));
          });
        }
        function P(A, R, x) {
          var N = A.hasClass(R);
          (x && N) || (!x && !N) || (x ? A.addClass(R) : A.removeClass(R));
        }
        return r;
      })
    );
  });
  var q_ = c((Qj, P_) => {
    "use strict";
    var Ni = Fe();
    Ni.define(
      "scroll",
      (P_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = m() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = Ni.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          h = document.createElement("style");
        h.appendChild(document.createTextNode(E));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function P(M) {
          return _.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function x(M, w) {
          var F;
          switch (w) {
            case "add":
              (F = M.attr("tabindex")),
                F
                  ? M.attr("data-wf-tabindex-swap", F)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (F = M.attr("data-wf-tabindex-swap")),
                F
                  ? (M.attr("tabindex", F),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", w === "add");
        }
        function N(M) {
          var w = M.currentTarget;
          if (
            !(
              Ni.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(w.className))
            )
          ) {
            var F = P(w) ? w.hash : "";
            if (F !== "") {
              var $ = e(F);
              $.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                q(F, M),
                window.setTimeout(
                  function () {
                    L($, function () {
                      x($, "add"),
                        $.get(0).focus({ preventScroll: !0 }),
                        x($, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function q(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Ni.env.chrome && r.protocol === "file:")
          ) {
            var w = n.state && n.state.hash;
            w !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function L(M, w) {
          var F = i.scrollTop(),
            $ = z(M);
          if (F !== $) {
            var j = Y(M, F, $),
              V = Date.now(),
              H = function () {
                var T = Date.now() - V;
                window.scroll(0, Z(F, $, T, j)),
                  T <= j ? s(H) : typeof w == "function" && w();
              };
            s(H);
          }
        }
        function z(M) {
          var w = e(f),
            F = w.css("position") === "fixed" ? w.outerHeight() : 0,
            $ = M.offset().top - F;
          if (M.data("scroll") === "mid") {
            var j = i.height() - F,
              V = M.outerHeight();
            V < j && ($ -= Math.round((j - V) / 2));
          }
          return $;
        }
        function Y(M, w, F) {
          if (R()) return 0;
          var $ = 1;
          return (
            a.add(M).each(function (j, V) {
              var H = parseFloat(V.getAttribute("data-scroll-time"));
              !isNaN(H) && H >= 0 && ($ = H);
            }),
            (472.143 * Math.log(Math.abs(w - F) + 125) - 2e3) * $
          );
        }
        function Z(M, w, F, $) {
          return F > $ ? w : M + (w - M) * re(F / $);
        }
        function re(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function ne() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: w } = t;
          o.on(w, d, N),
            o.on(M, v, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(h, document.head.firstChild);
        }
        return { ready: ne };
      })
    );
  });
  var D_ = c((Zj, M_) => {
    "use strict";
    var LH = Fe();
    LH.define(
      "touch",
      (M_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            v;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", h, !1),
            o.addEventListener("touchcancel", m, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", h, !1),
            o.addEventListener("mouseout", m, !1);
          function d(P) {
            var A = P.touches;
            (A && A.length > 1) ||
              ((a = !0),
              A ? ((s = !0), (f = A[0].clientX)) : (f = P.clientX),
              (v = f));
          }
          function E(P) {
            if (a) {
              if (s && P.type === "mousemove") {
                P.preventDefault(), P.stopPropagation();
                return;
              }
              var A = P.touches,
                R = A ? A[0].clientX : P.clientX,
                x = R - v;
              (v = R),
                Math.abs(x) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", P, { direction: x > 0 ? "right" : "left" }), m());
            }
          }
          function h(P) {
            if (a && ((a = !1), s && P.type === "mouseup")) {
              P.preventDefault(), P.stopPropagation(), (s = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", h, !1),
              o.removeEventListener("touchcancel", m, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", h, !1),
              o.removeEventListener("mouseout", m, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var U_ = c((Jj, G_) => {
    "use strict";
    var Vt = Fe(),
      PH = pn(),
      et = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      F_ = !0,
      qH = /^#[a-zA-Z0-9\-_]+$/;
    Vt.define(
      "dropdown",
      (G_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Vt.env(),
          o = !1,
          a,
          s = Vt.env.touch,
          u = ".w-dropdown",
          f = "w--open",
          v = PH.triggers,
          d = 900,
          E = "focusout" + u,
          h = "keydown" + u,
          m = "mouseenter" + u,
          _ = "mousemove" + u,
          P = "mouseleave" + u,
          A = (s ? "click" : "mouseup") + u,
          R = "w-close" + u,
          x = "setting" + u,
          N = e(document),
          q;
        (n.ready = L),
          (n.design = function () {
            o && w(), (o = !1), L();
          }),
          (n.preview = function () {
            (o = !0), L();
          });
        function L() {
          (a = i && Vt.env("design")), (q = N.find(u)), q.each(z);
        }
        function z(p, U) {
          var k = e(U),
            I = e.data(U, u);
          I ||
            (I = e.data(U, u, {
              open: !1,
              el: k,
              config: {},
              selectedIdx: -1,
            })),
            (I.toggle = I.el.children(".w-dropdown-toggle")),
            (I.list = I.el.children(".w-dropdown-list")),
            (I.links = I.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (I.complete = j(I)),
            (I.mouseLeave = H(I)),
            (I.mouseUpOutside = $(I)),
            (I.mouseMoveOutside = T(I)),
            Y(I);
          var J = I.toggle.attr("id"),
            ce = I.list.attr("id");
          J || (J = "w-dropdown-toggle-" + p),
            ce || (ce = "w-dropdown-list-" + p),
            I.toggle.attr("id", J),
            I.toggle.attr("aria-controls", ce),
            I.toggle.attr("aria-haspopup", "menu"),
            I.toggle.attr("aria-expanded", "false"),
            I.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            I.toggle.prop("tagName") !== "BUTTON" &&
              (I.toggle.attr("role", "button"),
              I.toggle.attr("tabindex") || I.toggle.attr("tabindex", "0")),
            I.list.attr("id", ce),
            I.list.attr("aria-labelledby", J),
            I.links.each(function (g, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                qH.test(B.hash) && B.addEventListener("click", M.bind(null, I));
            }),
            I.el.off(u),
            I.toggle.off(u),
            I.nav && I.nav.off(u);
          var oe = re(I, F_);
          a && I.el.on(x, Z(I)),
            a ||
              (i && ((I.hovering = !1), M(I)),
              I.config.hover && I.toggle.on(m, V(I)),
              I.el.on(R, oe),
              I.el.on(h, W(I)),
              I.el.on(E, D(I)),
              I.toggle.on(A, oe),
              I.toggle.on(h, G(I)),
              (I.nav = I.el.closest(".w-nav")),
              I.nav.on(R, oe));
        }
        function Y(p) {
          var U = Number(p.el.css("z-index"));
          (p.manageZ = U === d || U === d + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function Z(p) {
          return function (U, k) {
            (k = k || {}),
              Y(p),
              k.open === !0 && ne(p, !0),
              k.open === !1 && M(p, { immediate: !0 });
          };
        }
        function re(p, U) {
          return r(function (k) {
            if (p.open || (k && k.type === "w-close"))
              return M(p, { forceClose: U });
            ne(p);
          });
        }
        function ne(p) {
          if (!p.open) {
            F(p),
              (p.open = !0),
              p.list.addClass(f),
              p.toggle.addClass(f),
              p.toggle.attr("aria-expanded", "true"),
              v.intro(0, p.el[0]),
              Vt.redraw.up(),
              p.manageZ && p.el.css("z-index", d + 1);
            var U = Vt.env("editor");
            a || N.on(A, p.mouseUpOutside),
              p.hovering && !U && p.el.on(P, p.mouseLeave),
              p.hovering && U && N.on(_, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function M(p, { immediate: U, forceClose: k } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !k)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var I = p.config;
            if (
              (v.outro(0, p.el[0]),
              N.off(A, p.mouseUpOutside),
              N.off(_, p.mouseMoveOutside),
              p.el.off(P, p.mouseLeave),
              window.clearTimeout(p.delayId),
              !I.delay || U)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, I.delay);
          }
        }
        function w() {
          N.find(u).each(function (p, U) {
            e(U).triggerHandler(R);
          });
        }
        function F(p) {
          var U = p.el[0];
          q.each(function (k, I) {
            var J = e(I);
            J.is(U) || J.has(U).length || J.triggerHandler(R);
          });
        }
        function $(p) {
          return (
            p.mouseUpOutside && N.off(A, p.mouseUpOutside),
            r(function (U) {
              if (p.open) {
                var k = e(U.target);
                if (!k.closest(".w-dropdown-toggle").length) {
                  var I = e.inArray(p.el[0], k.parents(u)) === -1,
                    J = Vt.env("editor");
                  if (I) {
                    if (J) {
                      var ce =
                          k.parents().length === 1 &&
                          k.parents("svg").length === 1,
                        oe = k.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ce || oe) return;
                    }
                    M(p);
                  }
                }
              }
            })
          );
        }
        function j(p) {
          return function () {
            p.list.removeClass(f),
              p.toggle.removeClass(f),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function V(p) {
          return function () {
            (p.hovering = !0), ne(p);
          };
        }
        function H(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || M(p);
          };
        }
        function T(p) {
          return r(function (U) {
            if (p.open) {
              var k = e(U.target),
                I = e.inArray(p.el[0], k.parents(u)) === -1;
              if (I) {
                var J = k.parents(".w-editor-bem-EditorHoverControls").length,
                  ce = k.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  g =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (J || ce || g) return;
                (p.hovering = !1), M(p);
              }
            }
          });
        }
        function W(p) {
          return function (U) {
            if (!(a || !p.open))
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                U.keyCode)
              ) {
                case et.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), X(p), U.preventDefault())
                    : void 0;
                case et.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      X(p),
                      U.preventDefault())
                    : void 0;
                case et.ESCAPE:
                  return M(p), p.toggle.focus(), U.stopPropagation();
                case et.ARROW_RIGHT:
                case et.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    X(p),
                    U.preventDefault()
                  );
                case et.ARROW_LEFT:
                case et.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    X(p),
                    U.preventDefault()
                  );
              }
          };
        }
        function X(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function G(p) {
          var U = re(p, F_);
          return function (k) {
            if (!a) {
              if (!p.open)
                switch (k.keyCode) {
                  case et.ARROW_UP:
                  case et.ARROW_DOWN:
                    return k.stopPropagation();
                }
              switch (k.keyCode) {
                case et.SPACE:
                case et.ENTER:
                  return U(), k.stopPropagation(), k.preventDefault();
              }
            }
          };
        }
        function D(p) {
          return r(function (U) {
            var { relatedTarget: k, target: I } = U,
              J = p.el[0],
              ce = J.contains(k) || J.contains(I);
            return ce || M(p), U.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var V_ = c((Cs) => {
    "use strict";
    Object.defineProperty(Cs, "__esModule", { value: !0 });
    Cs.default = MH;
    function MH(e, t, r, n, i, o, a, s, u, f, v, d, E) {
      return function (h) {
        e(h);
        var m = h.form,
          _ = {
            name: m.attr("data-name") || m.attr("name") || "Untitled Form",
            pageId: m.attr("data-wf-page-id") || "",
            elementId: m.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              m.html()
            ),
            trackingCookies: n(),
          };
        let P = m.attr("data-wf-flow");
        P && (_.wfFlow = P), i(h);
        var A = o(m, _.fields);
        if (A) return a(A);
        if (((_.fileUploads = s(m)), u(h), !f)) {
          v(h);
          return;
        }
        d.ajax({
          url: E,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (h.success = !0), v(h);
          })
          .fail(function () {
            v(h);
          });
      };
    }
  });
  var W_ = c((tz, H_) => {
    "use strict";
    var Li = Fe();
    Li.define(
      "forms",
      (H_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          d = window.alert,
          E = Li.env(),
          h,
          m,
          _,
          P = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !E && !h && N();
            };
        function R() {
          (u = e("html").attr("data-wf-site")),
            (m = "https://webflow.com/api/v1/form/" + u),
            a &&
              m.indexOf("https://webflow.com") >= 0 &&
              (m = m.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (_ = `${m}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(x);
        }
        function x(T, W) {
          var X = e(W),
            G = e.data(W, s);
          G || (G = e.data(W, s, { form: X })), q(G);
          var D = X.closest("div.w-form");
          (G.done = D.find("> .w-form-done")),
            (G.fail = D.find("> .w-form-fail")),
            (G.fileUploads = D.find(".w-file-upload")),
            G.fileUploads.each(function (k) {
              j(k, G);
            });
          var p =
            G.form.attr("aria-label") || G.form.attr("data-name") || "Form";
          G.done.attr("aria-label") || G.form.attr("aria-label", p),
            G.done.attr("tabindex", "-1"),
            G.done.attr("role", "region"),
            G.done.attr("aria-label") ||
              G.done.attr("aria-label", p + " success"),
            G.fail.attr("tabindex", "-1"),
            G.fail.attr("role", "region"),
            G.fail.attr("aria-label") ||
              G.fail.attr("aria-label", p + " failure");
          var U = (G.action = X.attr("action"));
          if (
            ((G.handler = null),
            (G.redirect = X.attr("data-redirect")),
            P.test(U))
          ) {
            G.handler = w;
            return;
          }
          if (!U) {
            if (u) {
              G.handler = (() => {
                let k = V_().default;
                return k(q, o, Li, re, $, z, d, Y, L, u, F, e, m);
              })();
              return;
            }
            A();
          }
        }
        function N() {
          (h = !0),
            n.on("submit", s + " form", function (k) {
              var I = e.data(this, s);
              I.handler && ((I.evt = k), I.handler(I));
            });
          let T = ".w-checkbox-input",
            W = ".w-radio-input",
            X = "w--redirected-checked",
            G = "w--redirected-focus",
            D = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            U = [
              ["checkbox", T],
              ["radio", W],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + T + ")",
            (k) => {
              e(k.target).siblings(T).toggleClass(X);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (k) => {
              e(`input[name="${k.target.name}"]:not(${T})`).map((J, ce) =>
                e(ce).siblings(W).removeClass(X)
              );
              let I = e(k.target);
              I.hasClass("w-radio-input") || I.siblings(W).addClass(X);
            }),
            U.forEach(([k, I]) => {
              n.on(
                "focus",
                s + ` form input[type="${k}"]:not(` + I + ")",
                (J) => {
                  e(J.target).siblings(I).addClass(G),
                    e(J.target).filter(p).siblings(I).addClass(D);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${k}"]:not(` + I + ")",
                  (J) => {
                    e(J.target).siblings(I).removeClass(`${G} ${D}`);
                  }
                );
            });
        }
        function q(T) {
          var W = (T.btn = T.form.find(':input[type="submit"]'));
          (T.wait = T.btn.attr("data-wait") || null),
            (T.success = !1),
            W.prop("disabled", !1),
            T.label && W.val(T.label);
        }
        function L(T) {
          var W = T.btn,
            X = T.wait;
          W.prop("disabled", !0), X && ((T.label = W.val()), W.val(X));
        }
        function z(T, W) {
          var X = null;
          return (
            (W = W || {}),
            T.find(':input:not([type="submit"]):not([type="file"])').each(
              function (G, D) {
                var p = e(D),
                  U = p.attr("type"),
                  k =
                    p.attr("data-name") || p.attr("name") || "Field " + (G + 1),
                  I = p.val();
                if (U === "checkbox") I = p.is(":checked");
                else if (U === "radio") {
                  if (W[k] === null || typeof W[k] == "string") return;
                  I =
                    T.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof I == "string" && (I = e.trim(I)),
                  (W[k] = I),
                  (X = X || ne(p, U, k, I));
              }
            ),
            X
          );
        }
        function Y(T) {
          var W = {};
          return (
            T.find(':input[type="file"]').each(function (X, G) {
              var D = e(G),
                p = D.attr("data-name") || D.attr("name") || "File " + (X + 1),
                U = D.attr("data-value");
              typeof U == "string" && (U = e.trim(U)), (W[p] = U);
            }),
            W
          );
        }
        let Z = { _mkto_trk: "marketo" };
        function re() {
          return document.cookie.split("; ").reduce(function (W, X) {
            let G = X.split("="),
              D = G[0];
            if (D in Z) {
              let p = Z[D],
                U = G.slice(1).join("=");
              W[p] = U;
            }
            return W;
          }, {});
        }
        function ne(T, W, X, G) {
          var D = null;
          return (
            W === "password"
              ? (D = "Passwords cannot be submitted.")
              : T.attr("required")
              ? G
                ? f.test(T.attr("type")) &&
                  (v.test(G) ||
                    (D = "Please enter a valid email address for: " + X))
                : (D = "Please fill out the required field: " + X)
              : X === "g-recaptcha-response" &&
                !G &&
                (D = "Please confirm you\u2019re not a robot."),
            D
          );
        }
        function M(T) {
          $(T), F(T);
        }
        function w(T) {
          q(T);
          var W = T.form,
            X = {};
          if (/^https/.test(o.href) && !/^https/.test(T.action)) {
            W.attr("method", "post");
            return;
          }
          $(T);
          var G = z(W, X);
          if (G) return d(G);
          L(T);
          var D;
          t.each(X, function (I, J) {
            f.test(J) && (X.EMAIL = I),
              /^((full[ _-]?)?name)$/i.test(J) && (D = I),
              /^(first[ _-]?name)$/i.test(J) && (X.FNAME = I),
              /^(last[ _-]?name)$/i.test(J) && (X.LNAME = I);
          }),
            D &&
              !X.FNAME &&
              ((D = D.split(" ")),
              (X.FNAME = D[0]),
              (X.LNAME = X.LNAME || D[1]));
          var p = T.action.replace("/post?", "/post-json?") + "&c=?",
            U = p.indexOf("u=") + 2;
          U = p.substring(U, p.indexOf("&", U));
          var k = p.indexOf("id=") + 3;
          (k = p.substring(k, p.indexOf("&", k))),
            (X["b_" + U + "_" + k] = ""),
            e
              .ajax({ url: p, data: X, dataType: "jsonp" })
              .done(function (I) {
                (T.success = I.result === "success" || /already/.test(I.msg)),
                  T.success || console.info("MailChimp error: " + I.msg),
                  F(T);
              })
              .fail(function () {
                F(T);
              });
        }
        function F(T) {
          var W = T.form,
            X = T.redirect,
            G = T.success;
          if (G && X) {
            Li.location(X);
            return;
          }
          T.done.toggle(G),
            T.fail.toggle(!G),
            G ? T.done.focus() : T.fail.focus(),
            W.toggle(!G),
            q(T);
        }
        function $(T) {
          T.evt && T.evt.preventDefault(), (T.evt = null);
        }
        function j(T, W) {
          if (!W.fileUploads || !W.fileUploads[T]) return;
          var X,
            G = e(W.fileUploads[T]),
            D = G.find("> .w-file-upload-default"),
            p = G.find("> .w-file-upload-uploading"),
            U = G.find("> .w-file-upload-success"),
            k = G.find("> .w-file-upload-error"),
            I = D.find(".w-file-upload-input"),
            J = D.find(".w-file-upload-label"),
            ce = J.children(),
            oe = k.find(".w-file-upload-error-msg"),
            g = U.find(".w-file-upload-file"),
            B = U.find(".w-file-remove-link"),
            ee = g.find(".w-file-upload-file-name"),
            Q = oe.attr("data-w-size-error"),
            ge = oe.attr("data-w-type-error"),
            St = oe.attr("data-w-generic-error");
          if (
            (E ||
              J.on("click keydown", function (b) {
                (b.type === "keydown" && b.which !== 13 && b.which !== 32) ||
                  (b.preventDefault(), I.click());
              }),
            J.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            I.on("click", function (b) {
              b.preventDefault();
            }),
              J.on("click", function (b) {
                b.preventDefault();
              }),
              ce.on("click", function (b) {
                b.preventDefault();
              });
          else {
            B.on("click keydown", function (b) {
              if (b.type === "keydown") {
                if (b.which !== 13 && b.which !== 32) return;
                b.preventDefault();
              }
              I.removeAttr("data-value"),
                I.val(""),
                ee.html(""),
                D.toggle(!0),
                U.toggle(!1),
                J.focus();
            }),
              I.on("change", function (b) {
                (X = b.target && b.target.files && b.target.files[0]),
                  X &&
                    (D.toggle(!1),
                    k.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    ee.text(X.name),
                    S() || L(W),
                    (W.fileUploads[T].uploading = !0),
                    V(X, y));
              });
            var ft = J.outerHeight();
            I.height(ft), I.width(1);
          }
          function l(b) {
            var C = b.responseJSON && b.responseJSON.msg,
              te = St;
            typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0
              ? (te = ge)
              : typeof C == "string" &&
                C.indexOf("MaxFileSizeError") === 0 &&
                (te = Q),
              oe.text(te),
              I.removeAttr("data-value"),
              I.val(""),
              p.toggle(!1),
              D.toggle(!0),
              k.toggle(!0),
              k.focus(),
              (W.fileUploads[T].uploading = !1),
              S() || q(W);
          }
          function y(b, C) {
            if (b) return l(b);
            var te = C.fileName,
              ae = C.postData,
              ve = C.fileId,
              K = C.s3Url;
            I.attr("data-value", ve), H(K, ae, X, te, O);
          }
          function O(b) {
            if (b) return l(b);
            p.toggle(!1),
              U.css("display", "inline-block"),
              U.focus(),
              (W.fileUploads[T].uploading = !1),
              S() || q(W);
          }
          function S() {
            var b = (W.fileUploads && W.fileUploads.toArray()) || [];
            return b.some(function (C) {
              return C.uploading;
            });
          }
        }
        function V(T, W) {
          var X = new URLSearchParams({ name: T.name, size: T.size });
          e.ajax({ type: "GET", url: `${_}?${X}`, crossDomain: !0 })
            .done(function (G) {
              W(null, G);
            })
            .fail(function (G) {
              W(G);
            });
        }
        function H(T, W, X, G, D) {
          var p = new FormData();
          for (var U in W) p.append(U, W[U]);
          p.append("file", X, G),
            e
              .ajax({
                type: "POST",
                url: T,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                D(null);
              })
              .fail(function (k) {
                D(k);
              });
        }
        return r;
      })
    );
  });
  var k_ = c((rz, X_) => {
    "use strict";
    var xt = Fe(),
      DH = pn(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (X_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          v,
          d = xt.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          h = ".w-nav",
          m = "w--open",
          _ = "w--nav-dropdown-open",
          P = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          x = DH.triggers,
          N = e();
        (r.ready = r.design = r.preview = q),
          (r.destroy = function () {
            (N = e()), L(), u && u.length && u.each(re);
          });
        function q() {
          (f = d && xt.env("design")),
            (v = xt.env("editor")),
            (s = e(document.body)),
            (u = o.find(h)),
            u.length && (u.each(Z), L(), z());
        }
        function L() {
          xt.resize.off(Y);
        }
        function z() {
          xt.resize.on(Y);
        }
        function Y() {
          u.each(D);
        }
        function Z(g, B) {
          var ee = e(B),
            Q = e.data(B, h);
          Q ||
            (Q = e.data(B, h, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (Q.menu = ee.find(".w-nav-menu")),
            (Q.links = Q.menu.find(".w-nav-link")),
            (Q.dropdowns = Q.menu.find(".w-dropdown")),
            (Q.dropdownToggle = Q.menu.find(".w-dropdown-toggle")),
            (Q.dropdownList = Q.menu.find(".w-dropdown-list")),
            (Q.button = ee.find(".w-nav-button")),
            (Q.container = ee.find(".w-container")),
            (Q.overlayContainerId = "w-nav-overlay-" + g),
            (Q.outside = X(Q));
          var ge = ee.find(".w-nav-brand");
          ge &&
            ge.attr("href") === "/" &&
            ge.attr("aria-label") == null &&
            ge.attr("aria-label", "home"),
            Q.button.attr("style", "-webkit-user-select: text;"),
            Q.button.attr("aria-label") == null &&
              Q.button.attr("aria-label", "menu"),
            Q.button.attr("role", "button"),
            Q.button.attr("tabindex", "0"),
            Q.button.attr("aria-controls", Q.overlayContainerId),
            Q.button.attr("aria-haspopup", "menu"),
            Q.button.attr("aria-expanded", "false"),
            Q.el.off(h),
            Q.button.off(h),
            Q.menu.off(h),
            w(Q),
            f
              ? (ne(Q), Q.el.on("setting" + h, F(Q)))
              : (M(Q),
                Q.button.on("click" + h, T(Q)),
                Q.menu.on("click" + h, "a", W(Q)),
                Q.button.on("keydown" + h, $(Q)),
                Q.el.on("keydown" + h, j(Q))),
            D(g, B);
        }
        function re(g, B) {
          var ee = e.data(B, h);
          ee && (ne(ee), e.removeData(B, h));
        }
        function ne(g) {
          g.overlay && (oe(g, !0), g.overlay.remove(), (g.overlay = null));
        }
        function M(g) {
          g.overlay ||
            ((g.overlay = e(E).appendTo(g.el)),
            g.overlay.attr("id", g.overlayContainerId),
            (g.parent = g.menu.parent()),
            oe(g, !0));
        }
        function w(g) {
          var B = {},
            ee = g.config || {},
            Q = (B.animation = g.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(Q)),
            (B.animDirect = /left$/.test(Q) ? -1 : 1),
            ee.animation !== Q && g.open && t.defer(H, g),
            (B.easing = g.el.attr("data-easing") || "ease"),
            (B.easing2 = g.el.attr("data-easing2") || "ease");
          var ge = g.el.attr("data-duration");
          (B.duration = ge != null ? Number(ge) : 400),
            (B.docHeight = g.el.attr("data-doc-height")),
            (g.config = B);
        }
        function F(g) {
          return function (B, ee) {
            ee = ee || {};
            var Q = i.width();
            w(g),
              ee.open === !0 && J(g, !0),
              ee.open === !1 && oe(g, !0),
              g.open &&
                t.defer(function () {
                  Q !== i.width() && H(g);
                });
          };
        }
        function $(g) {
          return function (B) {
            switch (B.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return T(g)(), B.preventDefault(), B.stopPropagation();
              case Se.ESCAPE:
                return oe(g), B.preventDefault(), B.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return g.open
                  ? (B.keyCode === Se.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    V(g),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function j(g) {
          return function (B) {
            if (g.open)
              switch (
                ((g.selectedIdx = g.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    B.keyCode === Se.END
                      ? (g.selectedIdx = g.links.length - 1)
                      : (g.selectedIdx = 0),
                    V(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(g),
                    g.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (g.selectedIdx = Math.max(-1, g.selectedIdx - 1)),
                    V(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (g.selectedIdx = Math.min(
                      g.links.length - 1,
                      g.selectedIdx + 1
                    )),
                    V(g),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function V(g) {
          if (g.links[g.selectedIdx]) {
            var B = g.links[g.selectedIdx];
            B.focus(), W(B);
          }
        }
        function H(g) {
          g.open && (oe(g, !0), J(g, !0));
        }
        function T(g) {
          return a(function () {
            g.open ? oe(g) : J(g);
          });
        }
        function W(g) {
          return function (B) {
            var ee = e(this),
              Q = ee.attr("href");
            if (!xt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            Q && Q.indexOf("#") === 0 && g.open && oe(g);
          };
        }
        function X(g) {
          return (
            g.outside && o.off("click" + h, g.outside),
            function (B) {
              var ee = e(B.target);
              (v && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                G(g, ee);
            }
          );
        }
        var G = a(function (g, B) {
          if (g.open) {
            var ee = B.closest(".w-nav-menu");
            g.menu.is(ee) || oe(g);
          }
        });
        function D(g, B) {
          var ee = e.data(B, h),
            Q = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !Q && !f && oe(ee, !0), ee.container.length)) {
            var ge = U(ee);
            ee.links.each(ge), ee.dropdowns.each(ge);
          }
          ee.open && ce(ee);
        }
        var p = "max-width";
        function U(g) {
          var B = g.container.css(p);
          return (
            B === "none" && (B = ""),
            function (ee, Q) {
              (Q = e(Q)), Q.css(p, ""), Q.css(p) === "none" && Q.css(p, B);
            }
          );
        }
        function k(g, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function I(g, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function J(g, B) {
          if (g.open) return;
          (g.open = !0),
            g.menu.each(k),
            g.links.addClass(R),
            g.dropdowns.addClass(_),
            g.dropdownToggle.addClass(P),
            g.dropdownList.addClass(A),
            g.button.addClass(m);
          var ee = g.config,
            Q = ee.animation;
          (Q === "none" || !n.support.transform || ee.duration <= 0) &&
            (B = !0);
          var ge = ce(g),
            St = g.menu.outerHeight(!0),
            ft = g.menu.outerWidth(!0),
            l = g.el.height(),
            y = g.el[0];
          if (
            (D(0, y),
            x.intro(0, y),
            xt.redraw.up(),
            f || o.on("click" + h, g.outside),
            B)
          ) {
            b();
            return;
          }
          var O = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (g.overlay &&
              ((N = g.menu.prev()), g.overlay.show().append(g.menu)),
            ee.animOver)
          ) {
            n(g.menu)
              .add(O)
              .set({ x: ee.animDirect * ft, height: ge })
              .start({ x: 0 })
              .then(b),
              g.overlay && g.overlay.width(ft);
            return;
          }
          var S = l + St;
          n(g.menu).add(O).set({ y: -S }).start({ y: 0 }).then(b);
          function b() {
            g.button.attr("aria-expanded", "true");
          }
        }
        function ce(g) {
          var B = g.config,
            ee = B.docHeight ? o.height() : s.height();
          return (
            B.animOver
              ? g.menu.height(ee)
              : g.el.css("position") !== "fixed" &&
                (ee -= g.el.outerHeight(!0)),
            g.overlay && g.overlay.height(ee),
            ee
          );
        }
        function oe(g, B) {
          if (!g.open) return;
          (g.open = !1), g.button.removeClass(m);
          var ee = g.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (B = !0),
            x.outro(0, g.el[0]),
            o.off("click" + h, g.outside),
            B)
          ) {
            n(g.menu).stop(), y();
            return;
          }
          var Q = "transform " + ee.duration + "ms " + ee.easing2,
            ge = g.menu.outerHeight(!0),
            St = g.menu.outerWidth(!0),
            ft = g.el.height();
          if (ee.animOver) {
            n(g.menu)
              .add(Q)
              .start({ x: St * ee.animDirect })
              .then(y);
            return;
          }
          var l = ft + ge;
          n(g.menu).add(Q).start({ y: -l }).then(y);
          function y() {
            g.menu.height(""),
              n(g.menu).set({ x: 0, y: 0 }),
              g.menu.each(I),
              g.links.removeClass(R),
              g.dropdowns.removeClass(_),
              g.dropdownToggle.removeClass(P),
              g.dropdownList.removeClass(A),
              g.overlay &&
                g.overlay.children().length &&
                (N.length ? g.menu.insertAfter(N) : g.menu.prependTo(g.parent),
                g.overlay.attr("style", "").hide()),
              g.el.triggerHandler("w-close"),
              g.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  ks();
  js();
  Ks();
  Qs();
  ln();
  tu();
  pn();
  C_();
  L_();
  q_();
  D_();
  U_();
  W_();
  k_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
  {
    slug: "new-interaction",
    name: "New Interaction",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".left-diagonal-line",
          loopA: true,
          preserve3d: true,
          stepsA: [
            {
              transition: "transform 10s ease-in-out 0",
              rotateX: "0deg",
              rotateY: "0deg",
              rotateZ: "0deg",
            },
            {
              transition: "transform 10s ease-in-out 0",
              rotateX: "0deg",
              rotateY: "0deg",
              rotateZ: "45deg",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".right-diagonal-line",
          loopA: true,
          preserve3d: true,
          stepsA: [
            {
              transition: "transform 10s ease-in-out 0",
              rotateX: "0deg",
              rotateY: "0deg",
              rotateZ: "0deg",
            },
            {
              transition: "transform 10s ease-in-out 0",
              rotateX: "0deg",
              rotateY: "0deg",
              rotateZ: "-45deg",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".menu__dropdown--toggle.icon",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d618",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu__dropdown--toggle.icon",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d618",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546210928952,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".menu__dropdown--toggle.icon",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d618",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu__dropdown--toggle.icon",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d618",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546210928953,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".menu__dropdown--toggle",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d631",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu__dropdown--toggle",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d631",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546278885157,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".menu__dropdown--toggle",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d631",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu__dropdown--toggle",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d631",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546278885158,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".finder__close--trigger",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d6af",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".finder__close--trigger",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d6af",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546364124001,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style__trigger.aqua",
        originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d6a0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style__trigger.aqua",
          originalId: "f40b4f10-c4ff-1479-5f6f-c5768857d6a0",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546707212923,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item",
        originalId: "ed269c23-692c-b3ac-4b4a-9de013adb0fa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item",
          originalId: "ed269c23-692c-b3ac-4b4a-9de013adb0fa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546831321969,
    },
    "e-220": {
      id: "e-220",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item",
        originalId: "ed269c23-692c-b3ac-4b4a-9de013adb0fa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item",
          originalId: "ed269c23-692c-b3ac-4b4a-9de013adb0fa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1546831321971,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button__wrap",
        originalId:
          "5bac0565754dd6469578aebb|a9becd3d-bc3e-58f6-ac32-6df17a1ff435",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button__wrap",
          originalId:
            "5bac0565754dd6469578aebb|a9becd3d-bc3e-58f6-ac32-6df17a1ff435",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547423184673,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button__wrap",
        originalId:
          "5bac0565754dd6469578aebb|a9becd3d-bc3e-58f6-ac32-6df17a1ff435",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button__wrap",
          originalId:
            "5bac0565754dd6469578aebb|a9becd3d-bc3e-58f6-ac32-6df17a1ff435",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547423184675,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-242",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".window__close--trigger",
        originalId: "45a54e84-53fa-9ae1-8502-5c1da6f8f1c3",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".window__close--trigger",
          originalId: "45a54e84-53fa-9ae1-8502-5c1da6f8f1c3",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547669510037,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".finder__empty-trash--trigger",
        originalId: "774f966e-0143-3b31-8cc2-640ff7a37ef2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".finder__empty-trash--trigger",
          originalId: "774f966e-0143-3b31-8cc2-640ff7a37ef2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547675565323,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-246",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.empty--trash",
        originalId: "38321c1d-da71-3687-f8ad-b6ab47441837",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.empty--trash",
          originalId: "38321c1d-da71-3687-f8ad-b6ab47441837",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547676632965,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.trash--full",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c371",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.trash--full",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c371",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-251",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.trash--full",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c371",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.trash--full",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c371",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-254",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.read--me",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c358",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.read--me",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c358",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-254": {
      id: "e-254",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-253",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.read--me",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c358",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.read--me",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c358",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-256",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.trash--empty",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c379",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.trash--empty",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c379",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-255",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.trash--empty",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c379",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.trash--empty",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c379",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547677420229,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-258",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.webflow",
        originalId:
          "5bac0565754dd6857878aec2|384c5cbb-3035-9d8c-132b-892125eec24f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.webflow",
          originalId:
            "5bac0565754dd6857878aec2|384c5cbb-3035-9d8c-132b-892125eec24f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547678395746,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.mpm-hd",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c350",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.mpm-hd",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c350",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547678411800,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.mpm-hd",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c350",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.mpm-hd",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c350",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547678411804,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.projects",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c360",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.projects",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c360",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547678517945,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-261",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.projects",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c360",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.projects",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c360",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547678517949,
    },
    "e-264": {
      id: "e-264",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-263",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5bac0565754dd6857878aec2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5bac0565754dd6857878aec2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547679256564,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: null,
        originalId: "38321c1d-da71-3687-f8ad-b6ab4744186e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: null,
          originalId: "38321c1d-da71-3687-f8ad-b6ab4744186e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547679772804,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.view--projects",
        originalId: "009d3f0e-a1e4-c8a1-52d3-dc2abd0ed9a2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.view--projects",
          originalId: "009d3f0e-a1e4-c8a1-52d3-dc2abd0ed9a2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547680052312,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.project--form",
        originalId: "7093c98d-4384-127f-cb27-34429d87775f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.project--form",
          originalId: "7093c98d-4384-127f-cb27-34429d87775f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547680197238,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.read--me",
        originalId: "38321c1d-da71-3687-f8ad-b6ab47441825",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.read--me",
          originalId: "38321c1d-da71-3687-f8ad-b6ab47441825",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547680458090,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--videos",
        originalId: "90d3035a-cee9-f902-8979-210c4b376135",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--videos",
          originalId: "90d3035a-cee9-f902-8979-210c4b376135",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547682212392,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--videos",
        originalId: "90d3035a-cee9-f902-8979-210c4b376135",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--videos",
          originalId: "90d3035a-cee9-f902-8979-210c4b376135",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547682212396,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.is--link",
        originalId: "90d3035a-cee9-f902-8979-210c4b376111",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.is--link",
          originalId: "90d3035a-cee9-f902-8979-210c4b376111",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547682318937,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.webflow",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c368",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.webflow",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c368",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547688378994,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.webflow",
        originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c368",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.webflow",
          originalId: "7f82a94b-0f47-c676-ddef-f1e0cd69c368",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547688378999,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.all-videos",
        originalId: "8078b09d-7b26-4f8c-9740-5c9eaf77f43b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.all-videos",
          originalId: "8078b09d-7b26-4f8c-9740-5c9eaf77f43b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547690225958,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.all-tutorials",
        originalId: "db66ceae-2fe9-30a2-5d41-02256928c7b2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.all-tutorials",
          originalId: "db66ceae-2fe9-30a2-5d41-02256928c7b2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547691688791,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.all-articles",
        originalId: "95f5e48e-e3a4-8558-5e88-d0e061b78125",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.all-articles",
          originalId: "95f5e48e-e3a4-8558-5e88-d0e061b78125",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547691759352,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--tutorials",
        originalId: "90d3035a-cee9-f902-8979-210c4b37613d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--tutorials",
          originalId: "90d3035a-cee9-f902-8979-210c4b37613d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547691946507,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--tutorials",
        originalId: "90d3035a-cee9-f902-8979-210c4b37613d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--tutorials",
          originalId: "90d3035a-cee9-f902-8979-210c4b37613d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547691946509,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--articles",
        originalId: "90d3035a-cee9-f902-8979-210c4b376145",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--articles",
          originalId: "90d3035a-cee9-f902-8979-210c4b376145",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547692047457,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.my--articles",
        originalId: "90d3035a-cee9-f902-8979-210c4b376145",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.my--articles",
          originalId: "90d3035a-cee9-f902-8979-210c4b376145",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547692047460,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c3119d4edb5fd12aeb20450",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c3119d4edb5fd12aeb20450",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697373535,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c311a5bcb585f47d7454bd6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c311a5bcb585f47d7454bd6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697440716,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c32bb8612134291ac04086a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c32bb8612134291ac04086a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697473362,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c3116aa7569f510ecfc1306",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c3116aa7569f510ecfc1306",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697497604,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c311a067569f5799afc15b2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c311a067569f5799afc15b2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697529661,
    },
    "e-312": {
      id: "e-312",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-311",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c3118d432c1874030044a9b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c3118d432c1874030044a9b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547697565047,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style__trigger.orange",
        originalId: "38321c1d-da71-3687-f8ad-b6ab47441920",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style__trigger.orange",
          originalId: "38321c1d-da71-3687-f8ad-b6ab47441920",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547746181009,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style__trigger.graphite",
        originalId: "38321c1d-da71-3687-f8ad-b6ab47441922",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style__trigger.graphite",
          originalId: "38321c1d-da71-3687-f8ad-b6ab47441922",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1547746531135,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5bac0565754dd6857878aec2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5bac0565754dd6857878aec2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548099741036,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.contact",
        originalId: "07bd6eca-3602-a1f2-4e27-218b4d86c528",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.contact",
          originalId: "07bd6eca-3602-a1f2-4e27-218b4d86c528",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548386269644,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.favorites",
        originalId: "79f1b1dc-f3fa-3063-5e43-8ddfb18aa006",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.favorites",
          originalId: "79f1b1dc-f3fa-3063-5e43-8ddfb18aa006",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548452709519,
    },
    "e-324": {
      id: "e-324",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-323",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.favorites",
        originalId: "79f1b1dc-f3fa-3063-5e43-8ddfb18aa006",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.favorites",
          originalId: "79f1b1dc-f3fa-3063-5e43-8ddfb18aa006",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548452709522,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "31266b7e-95f6-f995-2ad5-35294c7e174c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "31266b7e-95f6-f995-2ad5-35294c7e174c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548515883101,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.weflow--weekly",
        originalId: "90d3035a-cee9-f902-8979-210c4b376135",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.weflow--weekly",
          originalId: "90d3035a-cee9-f902-8979-210c4b376135",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548518054229,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-329",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.weflow--weekly",
        originalId: "90d3035a-cee9-f902-8979-210c4b376135",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.weflow--weekly",
          originalId: "90d3035a-cee9-f902-8979-210c4b376135",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548518054232,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.ww-feed",
        originalId: "75acb14b-3211-6c64-b033-d9f5d83b79e9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.ww-feed",
          originalId: "75acb14b-3211-6c64-b033-d9f5d83b79e9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548518324866,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.webflow-weekly-content",
        originalId: "379fbc5b-57aa-c17a-9b22-34bfe96c0e70",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.webflow-weekly-content",
          originalId: "379fbc5b-57aa-c17a-9b22-34bfe96c0e70",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548529990000,
    },
    "e-334": {
      id: "e-334",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".icon__wrap.webflow-weekly-content",
        originalId: "379fbc5b-57aa-c17a-9b22-34bfe96c0e70",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".icon__wrap.webflow-weekly-content",
          originalId: "379fbc5b-57aa-c17a-9b22-34bfe96c0e70",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548529990003,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-59",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-340",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.shutdown",
        originalId: "38321c1d-da71-3687-f8ad-b6ab47441845",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.shutdown",
          originalId: "38321c1d-da71-3687-f8ad-b6ab47441845",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548534972451,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-342",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button.cancel",
        originalId: "db063187-9e97-7d9f-96ac-1075d518fa8f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button.cancel",
          originalId: "db063187-9e97-7d9f-96ac-1075d518fa8f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548536640953,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-344",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".button__wrap.shutdown",
        originalId: "db063187-9e97-7d9f-96ac-1075d518fa92",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button__wrap.shutdown",
          originalId: "db063187-9e97-7d9f-96ac-1075d518fa92",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548536695078,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-354",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".classic-menu_item.lougout",
        originalId: "38321c1d-da71-3687-f8ad-b6ab4744183e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".classic-menu_item.lougout",
          originalId: "38321c1d-da71-3687-f8ad-b6ab4744183e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548890207523,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-61", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".sl__nav--link",
        originalId: "956ec2e7-d46b-e765-bf20-14c2a6a62e02",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".sl__nav--link",
          originalId: "956ec2e7-d46b-e765-bf20-14c2a6a62e02",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-61-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-61-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1585619414649,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-62", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5e8556f625aced4e2d212afd|da62e045-0422-daf2-194f-e11170857c00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5e8556f625aced4e2d212afd|da62e045-0422-daf2-194f-e11170857c00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-62-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1585800677838,
    },
  },
  actionLists: {
    "a-7": {
      id: "a-7",
      title: "Icon [hover over]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__logo--icon",
                  selectorGuids: ["15c2e3c0-f2da-ef1d-9cb6-8302914686e1"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546210933136,
    },
    "a-8": {
      id: "a-8",
      title: "Icon [hover out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__logo--icon",
                  selectorGuids: ["15c2e3c0-f2da-ef1d-9cb6-8302914686e1"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546210933136,
    },
    "a-9": {
      id: "a-9",
      title: "Dropdown Toggle [hover over]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle",
                  selectorGuids: ["56e4f02d-1476-ea53-1b96-6cffd52e8533"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.orange",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "19974c0e-f61a-1641-3993-2f8e70b7986a",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.aqua",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "a2735cd5-bc5a-c06a-0602-8bbf705395c9",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-9-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.graphite",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "15cab916-d896-7467-dd23-a226a1251def",
                  ],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546278891691,
    },
    "a-10": {
      id: "a-10",
      title: "Dropdown Toggle [hover off]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle",
                  selectorGuids: ["56e4f02d-1476-ea53-1b96-6cffd52e8533"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.orange",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "19974c0e-f61a-1641-3993-2f8e70b7986a",
                  ],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.aqua",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "a2735cd5-bc5a-c06a-0602-8bbf705395c9",
                  ],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu__dropdown--toggle--text.graphite",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "15cab916-d896-7467-dd23-a226a1251def",
                  ],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546278891691,
    },
    "a-29": {
      id: "a-29",
      title: "Window trigger [close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-finder_bar-close-inner",
                  selectorGuids: ["30e90dba-cdad-0861-eebd-05dbfadc3926"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-finder_bar-close-inner",
                  selectorGuids: ["30e90dba-cdad-0861-eebd-05dbfadc3926"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-27",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-4": {
      id: "a-4",
      title: "Color [aqua]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__container",
                  selectorGuids: ["e9edcf70-349f-9d16-9a49-c6f82777c73f"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-22",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__close--border",
                  selectorGuids: ["cc40a93e-8d02-22cd-54bf-74be999ef20e"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-21",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_dropdown",
                  selectorGuids: ["21f2069a-9830-4e1b-8ed2-173ada93667e"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_divider",
                  selectorGuids: ["b09f5ee7-e7c0-2c40-ea45-c2e6f0704475"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__wrap",
                  selectorGuids: ["3efd872d-53d8-95b6-2ae5-bf44f668915a"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".desktop__wrap",
                  selectorGuids: ["1054300a-4658-546e-4856-dadcf2a2fd8c"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".color-background",
                  selectorGuids: ["4d1320ae-9e9a-b28c-6ecb-a41b05d925cb"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.graphite",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "3edd3e0f-7841-3315-4d57-15bc98865524",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.blue",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "45a6b44d-a4b8-5397-e698-e18e5fbaf92b",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-4-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.orange",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "fb2088db-a83d-c3d9-4b2d-11e2d29dd417",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-16",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.graphite",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "15cab916-d896-7467-dd23-a226a1251def",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-15",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.aqua",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "a2735cd5-bc5a-c06a-0602-8bbf705395c9",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-4-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.orange",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "19974c0e-f61a-1641-3993-2f8e70b7986a",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.graphite",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "a6b45075-aa51-719b-f21f-b9842f9345f6",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.aqua",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "b204dd54-82a3-ff09-6249-72c3e0b6ce66",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-4-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.orange",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "559f3d84-76dd-75dd-1275-b4dc804b0d5d",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-23",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__graphite",
                  selectorGuids: ["1b9546d0-9fa0-e132-5d2a-4f62af621752"],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-26",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__aqua",
                  selectorGuids: ["3950b013-0a8c-b27e-e698-b43b978312ae"],
                },
                value: "block",
              },
            },
            {
              id: "a-4-n-25",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__orange",
                  selectorGuids: ["1990583d-43b2-a813-1930-920e991da2de"],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-27",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__title--wrap",
                  selectorGuids: ["f80a6495-3035-bb70-4732-a8c4b3152f40"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-31",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-32",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".aqua--title",
                  selectorGuids: ["7bd6ad05-8057-2b88-3400-64f9e014ee6a"],
                },
                value: "block",
              },
            },
            {
              id: "a-4-n-33",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".orange--title",
                  selectorGuids: ["c03567fc-4e69-8316-8d6d-12ba8ed25019"],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-35",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-34",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-36",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap",
                  selectorGuids: ["00ef25d7-e825-eb5e-b907-f420efaf3b64"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-37",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-38",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-39",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash--trigger",
                  selectorGuids: ["4a678af7-c408-e13b-f550-23a76a315328"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-40",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash",
                  selectorGuids: ["198c80c6-fa8f-603a-a3f4-e4ad55b20346"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-41",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".alert__box--inner",
                  selectorGuids: ["ae2e6a65-cdff-ae92-fd6a-c3d18865242d"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-42",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap.published--link",
                  selectorGuids: [
                    "00ef25d7-e825-eb5e-b907-f420efaf3b64",
                    "15988016-23ce-9d1e-f260-308dbf3dff73",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-4-n-43",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-45",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--video",
                  selectorGuids: ["1f6f9385-975c-dc0b-781b-da15d0e47c8b"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-44",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-46",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__button",
                  selectorGuids: ["004c2d5b-dcc6-d32b-91a9-a9e53fb3b447"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1536812771669,
    },
    "a-15": {
      id: "a-15",
      title: "Menu Item [hover over]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aqua--title",
                  selectorGuids: ["7bd6ad05-8057-2b88-3400-64f9e014ee6a"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orange--title",
                  selectorGuids: ["c03567fc-4e69-8316-8d6d-12ba8ed25019"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546831591527,
    },
    "a-16": {
      id: "a-16",
      title: "Menu Item [hover off]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aqua--title",
                  selectorGuids: ["7bd6ad05-8057-2b88-3400-64f9e014ee6a"],
                },
                globalSwatchId: "f859181f",
                rValue: 54,
                bValue: 197,
                gValue: 133,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orange--title",
                  selectorGuids: ["c03567fc-4e69-8316-8d6d-12ba8ed25019"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546831591527,
    },
    "a-27": {
      id: "a-27",
      title: "Button [hover over]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".color-background",
                  selectorGuids: ["4d1320ae-9e9a-b28c-6ecb-a41b05d925cb"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1547423195404,
    },
    "a-28": {
      id: "a-28",
      title: "Button [hover off]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".color-background",
                  selectorGuids: ["4d1320ae-9e9a-b28c-6ecb-a41b05d925cb"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1547423195404,
    },
    "a-31": {
      id: "a-31",
      title: "Empty Trash",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap.trash--full",
                  selectorGuids: [
                    "48b1df49-dd80-940b-4b87-0126415b1360",
                    "351e7e99-1563-9aae-3d36-385700beb14f",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-31-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.trash-full",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "8a840b48-a981-7057-042e-06d431f6a90f",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap.trash--empty",
                  selectorGuids: [
                    "48b1df49-dd80-940b-4b87-0126415b1360",
                    "f3e6d32a-e43a-2c29-5e24-1848b10bbb7f",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1547676442904,
    },
    "a-12": {
      id: "a-12",
      title: "Icon [first-click]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "3dac", value: 100, unit: "%" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546731801670,
    },
    "a-32": {
      id: "a-32",
      title: "Window - Trash Full [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.trash-full",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "8a840b48-a981-7057-042e-06d431f6a90f",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-38": {
      id: "a-38",
      title: "Window - Read Me [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.read--me",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "082bc220-f293-2007-96d3-0d754e910bc9",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-33": {
      id: "a-33",
      title: "Window - Trash Empty [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.trash-empty",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "b31a6257-9030-3b5b-a6b7-722163d90045",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-30": {
      id: "a-30",
      title: "Window - MPM HD [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.mpm--hd",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "8680887d-9d2f-9af1-1bc4-b21ab94c8c66",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-39": {
      id: "a-39",
      title: "Window - Projects [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.projects",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "5b7f2cf6-59b9-551b-2da0-3557606233a2",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-40": {
      id: "a-40",
      title: "Emphasize Color Buttons [loop]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 10000,
                easing: "outCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.orange",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "8df5b35d-fca3-a49b-aef5-98e6df7dfbe1",
                  ],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.orange",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "8df5b35d-fca3-a49b-aef5-98e6df7dfbe1",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-40-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.aqua",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "064fff6a-d9a8-aa5a-d9a6-21452e3a29a4",
                  ],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.aqua",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "064fff6a-d9a8-aa5a-d9a6-21452e3a29a4",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-40-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.graphite",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "e42a0f71-d78b-4ef7-a447-5e79e0fe2442",
                  ],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 200,
                target: {
                  selector: ".style__trigger.graphite",
                  selectorGuids: [
                    "7e0f7ef8-9b93-65f2-435f-8ab7143e2907",
                    "e42a0f71-d78b-4ef7-a447-5e79e0fe2442",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1547679267270,
    },
    "a-41": {
      id: "a-41",
      title: "Window - Project Form [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-41-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.project--form",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "00d49993-08a9-7353-4e02-59b4d7514ec6",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-43": {
      id: "a-43",
      title: "Window - My Videos [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow--videos",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "a3761fae-b3ba-e81b-0aed-0649b4f2527b",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-42": {
      id: "a-42",
      title: "Window - Webflow [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-42-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-42-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "e1e2b19f-23ce-52b2-3371-9f3c257c82e6",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-44": {
      id: "a-44",
      title: "Window - My Tuts [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow--tutorials",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "7ea1cba4-f398-2af8-27af-3ba9036ab26e",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-45": {
      id: "a-45",
      title: "Window - My Articles [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow--articles",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "38d978bd-2b8b-132c-62a4-ea1b1b17aae0",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-50": {
      id: "a-50",
      title: "Color [orange]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-50-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__container",
                  selectorGuids: ["e9edcf70-349f-9d16-9a49-c6f82777c73f"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__close--border",
                  selectorGuids: ["cc40a93e-8d02-22cd-54bf-74be999ef20e"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_dropdown",
                  selectorGuids: ["21f2069a-9830-4e1b-8ed2-173ada93667e"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_divider",
                  selectorGuids: ["b09f5ee7-e7c0-2c40-ea45-c2e6f0704475"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__wrap",
                  selectorGuids: ["3efd872d-53d8-95b6-2ae5-bf44f668915a"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".desktop__wrap",
                  selectorGuids: ["1054300a-4658-546e-4856-dadcf2a2fd8c"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".color-background",
                  selectorGuids: ["4d1320ae-9e9a-b28c-6ecb-a41b05d925cb"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.graphite",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "3edd3e0f-7841-3315-4d57-15bc98865524",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.blue",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "45a6b44d-a4b8-5397-e698-e18e5fbaf92b",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.orange",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "fb2088db-a83d-c3d9-4b2d-11e2d29dd417",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-50-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.graphite",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "15cab916-d896-7467-dd23-a226a1251def",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.aqua",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "a2735cd5-bc5a-c06a-0602-8bbf705395c9",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.orange",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "19974c0e-f61a-1641-3993-2f8e70b7986a",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-50-n-15",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.graphite",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "a6b45075-aa51-719b-f21f-b9842f9345f6",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-16",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.aqua",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "b204dd54-82a3-ff09-6249-72c3e0b6ce66",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.orange",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "559f3d84-76dd-75dd-1275-b4dc804b0d5d",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-50-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__graphite",
                  selectorGuids: ["1b9546d0-9fa0-e132-5d2a-4f62af621752"],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__aqua",
                  selectorGuids: ["3950b013-0a8c-b27e-e698-b43b978312ae"],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__orange",
                  selectorGuids: ["1990583d-43b2-a813-1930-920e991da2de"],
                },
                value: "block",
              },
            },
            {
              id: "a-50-n-21",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__title--wrap",
                  selectorGuids: ["f80a6495-3035-bb70-4732-a8c4b3152f40"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-22",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-23",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".aqua--title",
                  selectorGuids: ["7bd6ad05-8057-2b88-3400-64f9e014ee6a"],
                },
                value: "none",
              },
            },
            {
              id: "a-50-n-24",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".orange--title",
                  selectorGuids: ["c03567fc-4e69-8316-8d6d-12ba8ed25019"],
                },
                value: "block",
              },
            },
            {
              id: "a-50-n-25",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-26",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-27",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap",
                  selectorGuids: ["00ef25d7-e825-eb5e-b907-f420efaf3b64"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-28",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-29",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-30",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash--trigger",
                  selectorGuids: ["4a678af7-c408-e13b-f550-23a76a315328"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-31",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash",
                  selectorGuids: ["198c80c6-fa8f-603a-a3f4-e4ad55b20346"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-32",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".alert__box--inner",
                  selectorGuids: ["ae2e6a65-cdff-ae92-fd6a-c3d18865242d"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-33",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap.published--link",
                  selectorGuids: [
                    "00ef25d7-e825-eb5e-b907-f420efaf3b64",
                    "15988016-23ce-9d1e-f260-308dbf3dff73",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-50-n-37",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--video",
                  selectorGuids: ["1f6f9385-975c-dc0b-781b-da15d0e47c8b"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-36",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-35",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
            {
              id: "a-50-n-38",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__button",
                  selectorGuids: ["004c2d5b-dcc6-d32b-91a9-a9e53fb3b447"],
                },
                globalSwatchId: "b26a8958",
                rValue: 243,
                bValue: 37,
                gValue: 119,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1536812771669,
    },
    "a-51": {
      id: "a-51",
      title: "Color [graphite]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-51-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__container",
                  selectorGuids: ["e9edcf70-349f-9d16-9a49-c6f82777c73f"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__close--border",
                  selectorGuids: ["cc40a93e-8d02-22cd-54bf-74be999ef20e"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_dropdown",
                  selectorGuids: ["21f2069a-9830-4e1b-8ed2-173ada93667e"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-menu_divider",
                  selectorGuids: ["b09f5ee7-e7c0-2c40-ea45-c2e6f0704475"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__wrap",
                  selectorGuids: ["3efd872d-53d8-95b6-2ae5-bf44f668915a"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".desktop__wrap",
                  selectorGuids: ["1054300a-4658-546e-4856-dadcf2a2fd8c"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".color-background",
                  selectorGuids: ["4d1320ae-9e9a-b28c-6ecb-a41b05d925cb"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.graphite",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "3edd3e0f-7841-3315-4d57-15bc98865524",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-51-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.blue",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "45a6b44d-a4b8-5397-e698-e18e5fbaf92b",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__logo--icon.orange",
                  selectorGuids: [
                    "15c2e3c0-f2da-ef1d-9cb6-8302914686e1",
                    "fb2088db-a83d-c3d9-4b2d-11e2d29dd417",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.graphite",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "15cab916-d896-7467-dd23-a226a1251def",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-51-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.aqua",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "a2735cd5-bc5a-c06a-0602-8bbf705395c9",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__dropdown--toggle--text.orange",
                  selectorGuids: [
                    "f773777a-f2a5-3b68-896f-fad91849ad05",
                    "19974c0e-f61a-1641-3993-2f8e70b7986a",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-15",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.graphite",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "a6b45075-aa51-719b-f21f-b9842f9345f6",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-51-n-16",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.aqua",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "b204dd54-82a3-ff09-6249-72c3e0b6ce66",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".read--me__icon.orange",
                  selectorGuids: [
                    "56daa6c4-bb65-391f-dbf9-077f77b7ef58",
                    "559f3d84-76dd-75dd-1275-b4dc804b0d5d",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__graphite",
                  selectorGuids: ["1b9546d0-9fa0-e132-5d2a-4f62af621752"],
                },
                value: "block",
              },
            },
            {
              id: "a-51-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__aqua",
                  selectorGuids: ["3950b013-0a8c-b27e-e698-b43b978312ae"],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__orange",
                  selectorGuids: ["1990583d-43b2-a813-1930-920e991da2de"],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-21",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__title--wrap",
                  selectorGuids: ["f80a6495-3035-bb70-4732-a8c4b3152f40"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-22",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".graphite--title",
                  selectorGuids: ["7d9180d4-c19c-e0a9-f531-da2b60f3e21e"],
                },
                value: "block",
              },
            },
            {
              id: "a-51-n-23",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".aqua--title",
                  selectorGuids: ["7bd6ad05-8057-2b88-3400-64f9e014ee6a"],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-24",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".orange--title",
                  selectorGuids: ["c03567fc-4e69-8316-8d6d-12ba8ed25019"],
                },
                value: "none",
              },
            },
            {
              id: "a-51-n-25",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-26",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-field",
                  selectorGuids: ["9c6b03f3-2de7-8b62-82f2-99003b539c4d"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-27",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap",
                  selectorGuids: ["00ef25d7-e825-eb5e-b907-f420efaf3b64"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-28",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-29",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button",
                  selectorGuids: ["ac15a559-4df0-c9fa-29cc-9c3285bdad10"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-30",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash--trigger",
                  selectorGuids: ["4a678af7-c408-e13b-f550-23a76a315328"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-31",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".finder__empty-trash",
                  selectorGuids: ["198c80c6-fa8f-603a-a3f4-e4ad55b20346"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-32",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".alert__box--inner",
                  selectorGuids: ["ae2e6a65-cdff-ae92-fd6a-c3d18865242d"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-33",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button__wrap.published--link",
                  selectorGuids: [
                    "00ef25d7-e825-eb5e-b907-f420efaf3b64",
                    "15988016-23ce-9d1e-f260-308dbf3dff73",
                  ],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-51-n-34",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-36",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--video",
                  selectorGuids: ["1f6f9385-975c-dc0b-781b-da15d0e47c8b"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-35",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".ww__item--img",
                  selectorGuids: ["b1d31143-265a-9ac5-2f5a-47881c325c55"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
            {
              id: "a-51-n-37",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu__button",
                  selectorGuids: ["004c2d5b-dcc6-d32b-91a9-a9e53fb3b447"],
                },
                globalSwatchId: "bd7477f8",
                rValue: 40,
                bValue: 37,
                gValue: 39,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1536812771669,
    },
    "a-53": {
      id: "a-53",
      title: "Homepage Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-53-n-34",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "ab6f7944-e0b4-2244-b7d5-1c59050f147e" },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1536812771669,
    },
    "a-54": {
      id: "a-54",
      title: "Window - Contact Form [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-54-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-54-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "ba29bc35-f2ce-9fc2-1d26-e213369e33aa" },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-55": {
      id: "a-55",
      title: "Window - Favorites [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.favorites",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "a23a27c0-e7fc-5d82-cadc-2303ce627e37",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-56": {
      id: "a-56",
      title: "Window - Webflow Weekly [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-56-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-56-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-56-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow-weekly",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "613fa39e-ec79-d9fe-9dc4-962e01ac15c3",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-57": {
      id: "a-57",
      title: "Window - Webflow Weekly Feed [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".icon__wrap",
                  selectorGuids: ["48b1df49-dd80-940b-4b87-0126415b1360"],
                },
                filters: [
                  { type: "invert", filterId: "d134", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.webflow--weekly-feed",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "d9a2176a-5e23-6558-f215-a6dc3550d7ef",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1546364128013,
    },
    "a-59": {
      id: "a-59",
      title: "Shutdown Alert",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-59-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-59-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.shutdown-alert",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "23a9856b-3bc5-1cc6-ecae-9ba98ffad84c",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1548534975898,
    },
    "a-58": {
      id: "a-58",
      title: "Shutdown",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-58-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.3,
                yValue: 0.3,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.2,
                yValue: 0.2,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0.1,
                yValue: 0.1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-58-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 50,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 5000,
                easing: "",
                duration: 0,
                target: {
                  selector: ".classic-page_wrap",
                  selectorGuids: ["0d356f68-7857-895d-bb87-b73afe9d8165"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-58-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 5000,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.after--shutdown.open",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "de0dc735-3e71-0b45-554c-890df7349af9",
                    "f42f2d42-3cbb-13af-e835-c4d61d28a521",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1548534975898,
    },
    "a-60": {
      id: "a-60",
      title: "Logout Alert",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-60-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap",
                  selectorGuids: ["00356371-7ecd-9ccb-2145-a23c60728cd0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-60-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".window__position--wrap.logout",
                  selectorGuids: [
                    "00356371-7ecd-9ccb-2145-a23c60728cd0",
                    "4b48d855-0c11-ae25-99db-0d5dbb453238",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1548534975898,
    },
    "a-61": {
      id: "a-61",
      title: "sl__nav--link [hover]",
      continuousParameterGroups: [
        {
          id: "a-61-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-61-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    xValue: -2,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    xValue: -2,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-61-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    xValue: -1,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    xValue: -1,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-61-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    xValue: 1,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    xValue: 1,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-61-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    xValue: 2,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    xValue: 2,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-61-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-61-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    yValue: -2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    yValue: -2,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-61-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    yValue: -1,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    yValue: -1,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-61-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    yValue: 1,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    yValue: 1,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-61-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--item",
                      selectorGuids: ["0c67f4e9-6e94-bcf1-88e2-ff5d5529e61a"],
                    },
                    yValue: 2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-61-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuad",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sl__nav--icon",
                      selectorGuids: ["9c22fb47-b8e7-9b40-fa5d-8cbc76c7e32c"],
                    },
                    yValue: 2,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1585619418504,
    },
    "a-62": {
      id: "a-62",
      title: "New Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-62-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-62-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".test-shadow-wrap",
                      selectorGuids: ["9fb5c1bb-21b6-2ce0-04b6-1d38e76aa0dc"],
                    },
                    xValue: 8,
                    yValue: 8,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-62-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".test-shadow-wrap",
                      selectorGuids: ["9fb5c1bb-21b6-2ce0-04b6-1d38e76aa0dc"],
                    },
                    xValue: 8,
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1585800682630,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
