!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e = e || self).flatpickr = n());
})(this, function () {
  "use strict";
  var e = function () {
    return (e =
      Object.assign ||
      function (e) {
        for (var n, t = 1, a = arguments.length; t < a; t++)
          for (var i in (n = arguments[t]))
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
  };
  function n() {
    for (var e = 0, n = 0, t = arguments.length; n < t; n++)
      e += arguments[n].length;
    var a = Array(e),
      i = 0;
    for (n = 0; n < t; n++)
      for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++)
        a[i] = o[r];
    return a;
  }
  var t = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition",
    ],
    a = {
      _disable: [],
      _enable: [],
      allowInput: !1,
      allowInvalidPreload: !1,
      altFormat: "F j, Y",
      altInput: !1,
      altInputClass: "form-control input",
      animate:
        "object" == typeof window &&
        -1 === window.navigator.userAgent.indexOf("MSIE"),
      ariaDateFormat: "F j, Y",
      autoFillDefaultTime: !0,
      clickOpens: !0,
      closeOnSelect: !0,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: !1,
      enable: [],
      enableSeconds: !1,
      enableTime: !1,
      errorHandler: function (e) {
        return "undefined" != typeof console && void 0;
      },
      getWeek: function (e) {
        var n = new Date(e.getTime());
        n.setHours(0, 0, 0, 0),
          n.setDate(n.getDate() + 3 - ((n.getDay() + 6) % 7));
        var t = new Date(n.getFullYear(), 0, 4);
        return (
          1 +
          Math.round(
            ((n.getTime() - t.getTime()) / 864e5 - 3 + ((t.getDay() + 6) % 7)) /
              7
          )
        );
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: !1,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      monthSelectorType: "dropdown",
      nextArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: !1,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: !1,
      showMonths: 1,
      static: !1,
      time_24hr: !1,
      weekNumbers: !1,
      wrap: !1,
    },
    i = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        longhand: [
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
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function (e) {
        var n = e % 100;
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      monthAriaLabel: "Month",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: !1,
    },
    o = function (e, n) {
      return void 0 === n && (n = 2), ("000" + e).slice(-1 * n);
    },
    r = function (e) {
      return !0 === e ? 1 : 0;
    };
  function l(e, n, t) {
    var a;
    return (
      void 0 === t && (t = !1),
      function () {
        var i = this,
          o = arguments;
        null !== a && clearTimeout(a),
          (a = window.setTimeout(function () {
            (a = null), t || e.apply(i, o);
          }, n)),
          t && !a && e.apply(i, o);
      }
    );
  }
  var c = function (e) {
    return e instanceof Array ? e : [e];
  };
  function d(e, n, t) {
    if (!0 === t) return e.classList.add(n);
    e.classList.remove(n);
  }
  function s(e, n, t) {
    var a = window.document.createElement(e);
    return (
      (n = n || ""),
      (t = t || ""),
      (a.className = n),
      void 0 !== t && (a.textContent = t),
      a
    );
  }
  function u(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function f(e, n) {
    var t = s("div", "numInputWrapper"),
      a = s("input", "numInput " + e),
      i = s("span", "arrowUp"),
      o = s("span", "arrowDown");
    if (
      (-1 === navigator.userAgent.indexOf("MSIE 9.0")
        ? (a.type = "number")
        : ((a.type = "text"), (a.pattern = "\\d*")),
      void 0 !== n)
    )
      for (var r in n) a.setAttribute(r, n[r]);
    return t.appendChild(a), t.appendChild(i), t.appendChild(o), t;
  }
  function m(e) {
    try {
      return "function" == typeof e.composedPath
        ? e.composedPath()[0]
        : e.target;
    } catch (n) {
      return e.target;
    }
  }
  var g = function () {},
    p = function (e, n, t) {
      return t.months[n ? "shorthand" : "longhand"][e];
    },
    h = {
      D: g,
      F: function (e, n, t) {
        e.setMonth(t.months.longhand.indexOf(n));
      },
      G: function (e, n) {
        e.setHours(parseFloat(n));
      },
      H: function (e, n) {
        e.setHours(parseFloat(n));
      },
      J: function (e, n) {
        e.setDate(parseFloat(n));
      },
      K: function (e, n, t) {
        e.setHours(
          (e.getHours() % 12) + 12 * r(new RegExp(t.amPM[1], "i").test(n))
        );
      },
      M: function (e, n, t) {
        e.setMonth(t.months.shorthand.indexOf(n));
      },
      S: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      U: function (e, n) {
        return new Date(1e3 * parseFloat(n));
      },
      W: function (e, n, t) {
        var a = parseInt(n),
          i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
        return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i;
      },
      Y: function (e, n) {
        e.setFullYear(parseFloat(n));
      },
      Z: function (e, n) {
        return new Date(n);
      },
      d: function (e, n) {
        e.setDate(parseFloat(n));
      },
      h: function (e, n) {
        e.setHours(parseFloat(n));
      },
      i: function (e, n) {
        e.setMinutes(parseFloat(n));
      },
      j: function (e, n) {
        e.setDate(parseFloat(n));
      },
      l: g,
      m: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      n: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      s: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      u: function (e, n) {
        return new Date(parseFloat(n));
      },
      w: g,
      y: function (e, n) {
        e.setFullYear(2e3 + parseFloat(n));
      },
    },
    v = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})",
    },
    D = {
      Z: function (e) {
        return e.toISOString();
      },
      D: function (e, n, t) {
        return n.weekdays.shorthand[D.w(e, n, t)];
      },
      F: function (e, n, t) {
        return p(D.n(e, n, t) - 1, !1, n);
      },
      G: function (e, n, t) {
        return o(D.h(e, n, t));
      },
      H: function (e) {
        return o(e.getHours());
      },
      J: function (e, n) {
        return void 0 !== n.ordinal
          ? e.getDate() + n.ordinal(e.getDate())
          : e.getDate();
      },
      K: function (e, n) {
        return n.amPM[r(e.getHours() > 11)];
      },
      M: function (e, n) {
        return p(e.getMonth(), !0, n);
      },
      S: function (e) {
        return o(e.getSeconds());
      },
      U: function (e) {
        return e.getTime() / 1e3;
      },
      W: function (e, n, t) {
        return t.getWeek(e);
      },
      Y: function (e) {
        return o(e.getFullYear(), 4);
      },
      d: function (e) {
        return o(e.getDate());
      },
      h: function (e) {
        return e.getHours() % 12 ? e.getHours() % 12 : 12;
      },
      i: function (e) {
        return o(e.getMinutes());
      },
      j: function (e) {
        return e.getDate();
      },
      l: function (e, n) {
        return n.weekdays.longhand[e.getDay()];
      },
      m: function (e) {
        return o(e.getMonth() + 1);
      },
      n: function (e) {
        return e.getMonth() + 1;
      },
      s: function (e) {
        return e.getSeconds();
      },
      u: function (e) {
        return e.getTime();
      },
      w: function (e) {
        return e.getDay();
      },
      y: function (e) {
        return String(e.getFullYear()).substring(2);
      },
    },
    w = function (e) {
      var n = e.config,
        t = void 0 === n ? a : n,
        o = e.l10n,
        r = void 0 === o ? i : o,
        l = e.isMobile,
        c = void 0 !== l && l;
      return function (e, n, a) {
        var i = a || r;
        return void 0 === t.formatDate || c
          ? n
              .split("")
              .map(function (n, a, o) {
                return D[n] && "\\" !== o[a - 1]
                  ? D[n](e, i, t)
                  : "\\" !== n
                  ? n
                  : "";
              })
              .join("")
          : t.formatDate(e, n, i);
      };
    },
    b = function (e) {
      var n = e.config,
        t = void 0 === n ? a : n,
        o = e.l10n,
        r = void 0 === o ? i : o;
      return function (e, n, i, o) {
        if (0 === e || e) {
          var l,
            c = o || r,
            d = e;
          if (e instanceof Date) l = new Date(e.getTime());
          else if ("string" != typeof e && void 0 !== e.toFixed)
            l = new Date(e);
          else if ("string" == typeof e) {
            var s = n || (t || a).dateFormat,
              u = String(e).trim();
            if ("today" === u) (l = new Date()), (i = !0);
            else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
            else if (t && t.parseDate) l = t.parseDate(e, s);
            else {
              l =
                t && t.noCalendar
                  ? new Date(new Date().setHours(0, 0, 0, 0))
                  : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
              for (
                var f = void 0, m = [], g = 0, p = 0, D = "";
                g < s.length;
                g++
              ) {
                var w = s[g],
                  b = "\\" === w,
                  C = "\\" === s[g - 1] || b;
                if (v[w] && !C) {
                  D += v[w];
                  var M = new RegExp(D).exec(e);
                  M &&
                    (f = !0) &&
                    m["Y" !== w ? "push" : "unshift"]({
                      fn: h[w],
                      val: M[++p],
                    });
                } else b || (D += ".");
                m.forEach(function (e) {
                  var n = e.fn,
                    t = e.val;
                  return (l = n(l, t, c) || l);
                });
              }
              l = f ? l : void 0;
            }
          }
          if (l instanceof Date && !isNaN(l.getTime()))
            return !0 === i && l.setHours(0, 0, 0, 0), l;
          t.errorHandler(new Error("Invalid date provided: " + d));
        }
      };
    };
  function C(e, n, t) {
    return (
      void 0 === t && (t = !0),
      !1 !== t
        ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(n.getTime()).setHours(0, 0, 0, 0)
        : e.getTime() - n.getTime()
    );
  }
  var M = function (e, n, t) {
      return e > Math.min(n, t) && e < Math.max(n, t);
    },
    y = { DAY: 864e5 };
  "function" != typeof Object.assign &&
    (Object.assign = function (e) {
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      if (!e) throw TypeError("Cannot convert undefined or null to object");
      for (
        var a = function (n) {
            n &&
              Object.keys(n).forEach(function (t) {
                return (e[t] = n[t]);
              });
          },
          i = 0,
          o = n;
        i < o.length;
        i++
      ) {
        a(o[i]);
      }
      return e;
    });
  var x = 300;
  function E(g, h) {
    var D = { config: e(e({}, a), T.defaultConfig), l10n: i };

    /* CUSTOM SETTINGS */
    const WEEKDAYS = i.weekdays.longhand.map(d => d.toLowerCase());
    const customInfoElement = document.getElementById("custom_reservation_info");
    const CUSTOM_INFO = !!customInfoElement ? JSON.parse(customInfoElement.dataset.info.replaceAll("'", "\"")) : null;
    const dateSelector = CUSTOM_INFO['date_input_id'] ? document.querySelector(`#${CUSTOM_INFO['date_input_id']} > input`) : null;
    const timeSelector = CUSTOM_INFO['date_input_id'] ? document.querySelector(`#${CUSTOM_INFO['time_input_id']} > input`) : null;
    

    D.config.onReady = [
      function () {
        if(!timeSelector || !dateSelector) return;
        const isDateSelector = D.element.id == dateSelector.id;
        const isTimeSelector = D.element.id == timeSelector.id;

        if (isDateSelector) {
          // Date selector ready
          const reservationGap = CUSTOM_INFO['reservation_gap'];
          D.config.minDate =
            D.now.getHours() > (23-reservationGap) ? new Date().fp_incr(1) : "today";
        }

        if (isTimeSelector) {
          // Time selector ready
          timeSelector.setAttribute('disabled', true);
          timeSelector.style['background-color'] = "#666";
          D.config.minuteIncrement = 15;
          D.minuteElement.setAttribute('step', "15")
        }
      },
    ];

    D.config.onOpen = [
      function () {
        if(!timeSelector || !dateSelector) return;
        const isDateSelector = D.element.id == dateSelector.id;
        const isTimeSelector = D.element.id == timeSelector.id;

        if (isDateSelector) {
          // Date selector open
        }
        if (isTimeSelector) {
          // Time selector open
          const isTodaySelected =
            !!dateSelector.value &&
            new Date(dateSelector.value).getDate() === D.now.getDate();
          const dayOfWeek = new Date(dateSelector.value).getDay();

          D.config.maxTime = CUSTOM_INFO['opening_times'][WEEKDAYS[dayOfWeek]].close;

          if (isTodaySelected) {
            const reservationGap = CUSTOM_INFO['reservation_gap'];
            D.config.minTime = `${D.now.getHours() + reservationGap}:00`;
            D.hourElement.value = D.now.getHours() + reservationGap;
          } else {
            D.config.minTime = CUSTOM_INFO['opening_times'][WEEKDAYS[dayOfWeek]].open;
          }
        }
      },
    ];

    D.config.onChange = [
      function () {
        if(!timeSelector || !dateSelector) return;
        const isDateSelector = D.element.id == dateSelector.id;
        const isTimeSelector = D.element.id == timeSelector.id;

        if (isDateSelector) {
          // Date selector change
          timeSelector.value = "";
          if(timeSelector.hasAttribute('disabled')){
            timeSelector.removeAttribute('disabled');
            timeSelector.style['background-color'] = "#fff";
          }
        }

        if (isTimeSelector) {
          // Time selector change
        }
      },
    ];
    /* END CUSTOM SETTINGS */

    function E(e) {
      return e.bind(D);
    }
    function k() {
      var e = D.config;

      (!1 === e.weekNumbers && 1 === e.showMonths) ||
        (!0 !== e.noCalendar &&
          window.requestAnimationFrame(function () {
            if (
              (void 0 !== D.calendarContainer &&
                ((D.calendarContainer.style.visibility = "hidden"),
                (D.calendarContainer.style.display = "block")),
              void 0 !== D.daysContainer)
            ) {
              var n = (D.days.offsetWidth + 1) * e.showMonths;
              (D.daysContainer.style.width = n + "px"),
                (D.calendarContainer.style.width =
                  n +
                  (void 0 !== D.weekWrapper ? D.weekWrapper.offsetWidth : 0) +
                  "px"),
                D.calendarContainer.style.removeProperty("visibility"),
                D.calendarContainer.style.removeProperty("display");
            }
          }));
    }
    function I(e) {
      if (0 === D.selectedDates.length) {
        var n =
            void 0 !== D.config.minDate
              ? new Date(D.config.minDate.getTime())
              : new Date(),
          t = O(),
          a = t.hours,
          i = t.minutes,
          l = t.seconds;
        n.setHours(a, i, l, 0), D.setDate(n, !1);
      }
      void 0 !== e &&
        "blur" !== e.type &&
        (function (e) {
          e.preventDefault();
          var n = "keydown" === e.type,
            t = m(e),
            a = t;
          void 0 !== D.amPM &&
            t === D.amPM &&
            (D.amPM.textContent =
              D.l10n.amPM[r(D.amPM.textContent === D.l10n.amPM[0])]);
          var i = parseFloat(a.getAttribute("min")),
            l = parseFloat(a.getAttribute("max")),
            c = parseFloat(a.getAttribute("step")),
            d = parseInt(a.value, 10),
            s = e.delta || (n ? (38 === e.which ? 1 : -1) : 0),
            u = d + c * s;
          if (void 0 !== a.value && 2 === a.value.length) {
            var f = a === D.hourElement,
              g = a === D.minuteElement;
            u < i
              ? ((u = l + u + r(!f) + (r(f) && r(!D.amPM))),
                g && j(void 0, -1, D.hourElement))
              : u > l &&
                ((u = a === D.hourElement ? u - l - r(!D.amPM) : i),
                g && j(void 0, 1, D.hourElement)),
              D.amPM &&
                f &&
                (1 === c ? u + d === 23 : Math.abs(u - d) > c) &&
                (D.amPM.textContent =
                  D.l10n.amPM[r(D.amPM.textContent === D.l10n.amPM[0])]),
              (a.value = o(u));
          }
        })(e);
      var c = D._input.value;
      S(), Ce(), D._input.value !== c && D._debouncedChange();
    }
    function S() {
      if (void 0 !== D.hourElement && void 0 !== D.minuteElement) {
        var e,
          n,
          t = (parseInt(D.hourElement.value.slice(-2), 10) || 0) % 24,
          a = (parseInt(D.minuteElement.value, 10) || 0) % 60,
          i =
            void 0 !== D.secondElement
              ? (parseInt(D.secondElement.value, 10) || 0) % 60
              : 0;
        void 0 !== D.amPM &&
          ((e = t),
          (n = D.amPM.textContent),
          (t = (e % 12) + 12 * r(n === D.l10n.amPM[1])));
        var o =
          void 0 !== D.config.minTime ||
          (D.config.minDate &&
            D.minDateHasTime &&
            D.latestSelectedDateObj &&
            0 === C(D.latestSelectedDateObj, D.config.minDate, !0));
        if (
          void 0 !== D.config.maxTime ||
          (D.config.maxDate &&
            D.maxDateHasTime &&
            D.latestSelectedDateObj &&
            0 === C(D.latestSelectedDateObj, D.config.maxDate, !0))
        ) {
          var l =
            void 0 !== D.config.maxTime ? D.config.maxTime : D.config.maxDate;
          (t = Math.min(t, l.getHours())) === l.getHours() &&
            (a = Math.min(a, l.getMinutes())),
            a === l.getMinutes() && (i = Math.min(i, l.getSeconds()));
        }
        if (o) {
          var c =
            void 0 !== D.config.minTime ? D.config.minTime : D.config.minDate;
          (t = Math.max(t, c.getHours())) === c.getHours() &&
            (a = Math.max(a, c.getMinutes())),
            a === c.getMinutes() && (i = Math.max(i, c.getSeconds()));
        }
        F(t, a, i);
      }
    }
    function _(e) {
      var n = e || D.latestSelectedDateObj;
      n && F(n.getHours(), n.getMinutes(), n.getSeconds());
    }
    function O() {
      var e = D.config.defaultHour,
        n = D.config.defaultMinute,
        t = D.config.defaultSeconds;
      if (void 0 !== D.config.minDate) {
        var a = D.config.minDate.getHours(),
          i = D.config.minDate.getMinutes();
        (e = Math.max(e, a)) === a && (n = Math.max(i, n)),
          e === a && n === i && (t = D.config.minDate.getSeconds());
      }
      if (void 0 !== D.config.maxDate) {
        var o = D.config.maxDate.getHours(),
          r = D.config.maxDate.getMinutes();
        (e = Math.min(e, o)) === o && (n = Math.min(r, n)),
          e === o && n === r && (t = D.config.maxDate.getSeconds());
      }
      return { hours: e, minutes: n, seconds: t };
    }
    function F(e, n, t) {
      void 0 !== D.latestSelectedDateObj &&
        D.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0),
        D.hourElement &&
          D.minuteElement &&
          !D.isMobile &&
          ((D.hourElement.value = o(
            D.config.time_24hr ? e : ((12 + e) % 12) + 12 * r(e % 12 == 0)
          )),
          (D.minuteElement.value = o(n)),
          void 0 !== D.amPM && (D.amPM.textContent = D.l10n.amPM[r(e >= 12)]),
          void 0 !== D.secondElement && (D.secondElement.value = o(t)));
    }
    function N(e) {
      var n = m(e),
        t = parseInt(n.value) + (e.delta || 0);
      (t / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(t.toString()))) &&
        X(t);
    }
    function A(e, n, t, a) {
      return n instanceof Array
        ? n.forEach(function (n) {
            return A(e, n, t, a);
          })
        : e instanceof Array
        ? e.forEach(function (e) {
            return A(e, n, t, a);
          })
        : (e.addEventListener(n, t, a),
          void D._handlers.push({
            element: e,
            event: n,
            handler: t,
            options: a,
          }));
    }
    function P() {
      he("onChange");
    }
    function Y(e, n) {
      var t =
          void 0 !== e
            ? D.parseDate(e)
            : D.latestSelectedDateObj ||
              (D.config.minDate && D.config.minDate > D.now
                ? D.config.minDate
                : D.config.maxDate && D.config.maxDate < D.now
                ? D.config.maxDate
                : D.now),
        a = D.currentYear,
        i = D.currentMonth;
      try {
        void 0 !== t &&
          ((D.currentYear = t.getFullYear()), (D.currentMonth = t.getMonth()));
      } catch (e) {
        (e.message = "Invalid date supplied: " + t), D.config.errorHandler(e);
      }
      n && D.currentYear !== a && (he("onYearChange"), U()),
        !n ||
          (D.currentYear === a && D.currentMonth === i) ||
          he("onMonthChange"),
        D.redraw();
    }
    function H(e) {
      var n = m(e);
      ~n.className.indexOf("arrow") &&
        j(e, n.classList.contains("arrowUp") ? 1 : -1);
    }
    function j(e, n, t) {
      var a = e && m(e),
        i = t || (a && a.parentNode && a.parentNode.firstChild),
        o = ve("increment");
      (o.delta = n), i && i.dispatchEvent(o);
    }
    function L(e, n, t, a) {
      var i = ee(n, !0),
        o = s("span", "flatpickr-day " + e, n.getDate().toString());
      return (
        (o.dateObj = n),
        (o.$i = a),
        o.setAttribute("aria-label", D.formatDate(n, D.config.ariaDateFormat)),
        -1 === e.indexOf("hidden") &&
          0 === C(n, D.now) &&
          ((D.todayDateElem = o),
          o.classList.add("today"),
          o.setAttribute("aria-current", "date")),
        i
          ? ((o.tabIndex = -1),
            De(n) &&
              (o.classList.add("selected"),
              (D.selectedDateElem = o),
              "range" === D.config.mode &&
                (d(
                  o,
                  "startRange",
                  D.selectedDates[0] && 0 === C(n, D.selectedDates[0], !0)
                ),
                d(
                  o,
                  "endRange",
                  D.selectedDates[1] && 0 === C(n, D.selectedDates[1], !0)
                ),
                "nextMonthDay" === e && o.classList.add("inRange"))))
          : o.classList.add("flatpickr-disabled"),
        "range" === D.config.mode &&
          (function (e) {
            return (
              !("range" !== D.config.mode || D.selectedDates.length < 2) &&
              C(e, D.selectedDates[0]) >= 0 &&
              C(e, D.selectedDates[1]) <= 0
            );
          })(n) &&
          !De(n) &&
          o.classList.add("inRange"),
        D.weekNumbers &&
          1 === D.config.showMonths &&
          "prevMonthDay" !== e &&
          t % 7 == 1 &&
          D.weekNumbers.insertAdjacentHTML(
            "beforeend",
            "<span class='flatpickr-day'>" + D.config.getWeek(n) + "</span>"
          ),
        he("onDayCreate", o),
        o
      );
    }
    function W(e) {
      e.focus(), "range" === D.config.mode && ie(e);
    }
    function R(e) {
      for (
        var n = e > 0 ? 0 : D.config.showMonths - 1,
          t = e > 0 ? D.config.showMonths : -1,
          a = n;
        a != t;
        a += e
      )
        for (
          var i = D.daysContainer.children[a],
            o = e > 0 ? 0 : i.children.length - 1,
            r = e > 0 ? i.children.length : -1,
            l = o;
          l != r;
          l += e
        ) {
          var c = i.children[l];
          if (-1 === c.className.indexOf("hidden") && ee(c.dateObj)) return c;
        }
    }
    function B(e, n) {
      var t = ne(document.activeElement || document.body),
        a =
          void 0 !== e
            ? e
            : t
            ? document.activeElement
            : void 0 !== D.selectedDateElem && ne(D.selectedDateElem)
            ? D.selectedDateElem
            : void 0 !== D.todayDateElem && ne(D.todayDateElem)
            ? D.todayDateElem
            : R(n > 0 ? 1 : -1);
      void 0 === a
        ? D._input.focus()
        : t
        ? (function (e, n) {
            for (
              var t =
                  -1 === e.className.indexOf("Month")
                    ? e.dateObj.getMonth()
                    : D.currentMonth,
                a = n > 0 ? D.config.showMonths : -1,
                i = n > 0 ? 1 : -1,
                o = t - D.currentMonth;
              o != a;
              o += i
            )
              for (
                var r = D.daysContainer.children[o],
                  l =
                    t - D.currentMonth === o
                      ? e.$i + n
                      : n < 0
                      ? r.children.length - 1
                      : 0,
                  c = r.children.length,
                  d = l;
                d >= 0 && d < c && d != (n > 0 ? c : -1);
                d += i
              ) {
                var s = r.children[d];
                if (
                  -1 === s.className.indexOf("hidden") &&
                  ee(s.dateObj) &&
                  Math.abs(e.$i - d) >= Math.abs(n)
                )
                  return W(s);
              }
            D.changeMonth(i), B(R(i), 0);
          })(a, n)
        : W(a);
    }
    function J(e, n) {
      for (
        var t = (new Date(e, n, 1).getDay() - D.l10n.firstDayOfWeek + 7) % 7,
          a = D.utils.getDaysInMonth((n - 1 + 12) % 12, e),
          i = D.utils.getDaysInMonth(n, e),
          o = window.document.createDocumentFragment(),
          r = D.config.showMonths > 1,
          l = r ? "prevMonthDay hidden" : "prevMonthDay",
          c = r ? "nextMonthDay hidden" : "nextMonthDay",
          d = a + 1 - t,
          u = 0;
        d <= a;
        d++, u++
      )
        o.appendChild(L(l, new Date(e, n - 1, d), d, u));
      for (d = 1; d <= i; d++, u++)
        o.appendChild(L("", new Date(e, n, d), d, u));
      for (
        var f = i + 1;
        f <= 42 - t && (1 === D.config.showMonths || u % 7 != 0);
        f++, u++
      )
        o.appendChild(L(c, new Date(e, n + 1, f % i), f, u));
      var m = s("div", "dayContainer");
      return m.appendChild(o), m;
    }
    function K() {
      if (void 0 !== D.daysContainer) {
        u(D.daysContainer), D.weekNumbers && u(D.weekNumbers);
        for (
          var e = document.createDocumentFragment(), n = 0;
          n < D.config.showMonths;
          n++
        ) {
          var t = new Date(D.currentYear, D.currentMonth, 1);
          t.setMonth(D.currentMonth + n),
            e.appendChild(J(t.getFullYear(), t.getMonth()));
        }
        D.daysContainer.appendChild(e),
          (D.days = D.daysContainer.firstChild),
          "range" === D.config.mode && 1 === D.selectedDates.length && ie();
      }
    }
    function U() {
      if (
        !(D.config.showMonths > 1 || "dropdown" !== D.config.monthSelectorType)
      ) {
        var e = function (e) {
          return (
            !(
              void 0 !== D.config.minDate &&
              D.currentYear === D.config.minDate.getFullYear() &&
              e < D.config.minDate.getMonth()
            ) &&
            !(
              void 0 !== D.config.maxDate &&
              D.currentYear === D.config.maxDate.getFullYear() &&
              e > D.config.maxDate.getMonth()
            )
          );
        };
        (D.monthsDropdownContainer.tabIndex = -1),
          (D.monthsDropdownContainer.innerHTML = "");
        for (var n = 0; n < 12; n++)
          if (e(n)) {
            var t = s("option", "flatpickr-monthDropdown-month");
            (t.value = new Date(D.currentYear, n).getMonth().toString()),
              (t.textContent = p(n, D.config.shorthandCurrentMonth, D.l10n)),
              (t.tabIndex = -1),
              D.currentMonth === n && (t.selected = !0),
              D.monthsDropdownContainer.appendChild(t);
          }
      }
    }
    function q() {
      var e,
        n = s("div", "flatpickr-month"),
        t = window.document.createDocumentFragment();
      D.config.showMonths > 1 || "static" === D.config.monthSelectorType
        ? (e = s("span", "cur-month"))
        : ((D.monthsDropdownContainer = s(
            "select",
            "flatpickr-monthDropdown-months"
          )),
          D.monthsDropdownContainer.setAttribute(
            "aria-label",
            D.l10n.monthAriaLabel
          ),
          A(D.monthsDropdownContainer, "change", function (e) {
            var n = m(e),
              t = parseInt(n.value, 10);
            D.changeMonth(t - D.currentMonth), he("onMonthChange");
          }),
          U(),
          (e = D.monthsDropdownContainer));
      var a = f("cur-year", { tabindex: "-1" }),
        i = a.getElementsByTagName("input")[0];
      i.setAttribute("aria-label", D.l10n.yearAriaLabel),
        D.config.minDate &&
          i.setAttribute("min", D.config.minDate.getFullYear().toString()),
        D.config.maxDate &&
          (i.setAttribute("max", D.config.maxDate.getFullYear().toString()),
          (i.disabled =
            !!D.config.minDate &&
            D.config.minDate.getFullYear() === D.config.maxDate.getFullYear()));
      var o = s("div", "flatpickr-current-month");
      return (
        o.appendChild(e),
        o.appendChild(a),
        t.appendChild(o),
        n.appendChild(t),
        { container: n, yearElement: i, monthElement: e }
      );
    }
    function $() {
      u(D.monthNav),
        D.monthNav.appendChild(D.prevMonthNav),
        D.config.showMonths && ((D.yearElements = []), (D.monthElements = []));
      for (var e = D.config.showMonths; e--; ) {
        var n = q();
        D.yearElements.push(n.yearElement),
          D.monthElements.push(n.monthElement),
          D.monthNav.appendChild(n.container);
      }
      D.monthNav.appendChild(D.nextMonthNav);
    }
    function z() {
      D.weekdayContainer
        ? u(D.weekdayContainer)
        : (D.weekdayContainer = s("div", "flatpickr-weekdays"));
      for (var e = D.config.showMonths; e--; ) {
        var n = s("div", "flatpickr-weekdaycontainer");
        D.weekdayContainer.appendChild(n);
      }
      return G(), D.weekdayContainer;
    }
    function G() {
      if (D.weekdayContainer) {
        var e = D.l10n.firstDayOfWeek,
          t = n(D.l10n.weekdays.shorthand);
        e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
        for (var a = D.config.showMonths; a--; )
          D.weekdayContainer.children[a].innerHTML =
            "\n      <span class='flatpickr-weekday'>\n        " +
            t.join("</span><span class='flatpickr-weekday'>") +
            "\n      </span>\n      ";
      }
    }
    function V(e, n) {
      void 0 === n && (n = !0);
      var t = n ? e : e - D.currentMonth;
      (t < 0 && !0 === D._hidePrevMonthArrow) ||
        (t > 0 && !0 === D._hideNextMonthArrow) ||
        ((D.currentMonth += t),
        (D.currentMonth < 0 || D.currentMonth > 11) &&
          ((D.currentYear += D.currentMonth > 11 ? 1 : -1),
          (D.currentMonth = (D.currentMonth + 12) % 12),
          he("onYearChange"),
          U()),
        K(),
        he("onMonthChange"),
        we());
    }
    function Z(e) {
      return (
        !(!D.config.appendTo || !D.config.appendTo.contains(e)) ||
        D.calendarContainer.contains(e)
      );
    }
    function Q(e) {
      if (D.isOpen && !D.config.inline) {
        var n = m(e),
          t = Z(n),
          a =
            n === D.input ||
            n === D.altInput ||
            D.element.contains(n) ||
            (e.path &&
              e.path.indexOf &&
              (~e.path.indexOf(D.input) || ~e.path.indexOf(D.altInput))),
          i =
            "blur" === e.type
              ? a && e.relatedTarget && !Z(e.relatedTarget)
              : !a && !t && !Z(e.relatedTarget),
          o = !D.config.ignoredFocusElements.some(function (e) {
            return e.contains(n);
          });
        i &&
          o &&
          (void 0 !== D.timeContainer &&
            void 0 !== D.minuteElement &&
            void 0 !== D.hourElement &&
            "" !== D.input.value &&
            void 0 !== D.input.value &&
            I(),
          D.close(),
          D.config &&
            "range" === D.config.mode &&
            1 === D.selectedDates.length &&
            (D.clear(!1), D.redraw()));
      }
    }
    function X(e) {
      if (
        !(
          !e ||
          (D.config.minDate && e < D.config.minDate.getFullYear()) ||
          (D.config.maxDate && e > D.config.maxDate.getFullYear())
        )
      ) {
        var n = e,
          t = D.currentYear !== n;
        (D.currentYear = n || D.currentYear),
          D.config.maxDate && D.currentYear === D.config.maxDate.getFullYear()
            ? (D.currentMonth = Math.min(
                D.config.maxDate.getMonth(),
                D.currentMonth
              ))
            : D.config.minDate &&
              D.currentYear === D.config.minDate.getFullYear() &&
              (D.currentMonth = Math.max(
                D.config.minDate.getMonth(),
                D.currentMonth
              )),
          t && (D.redraw(), he("onYearChange"), U());
      }
    }
    function ee(e, n) {
      void 0 === n && (n = !0);
      var t = D.parseDate(e, void 0, n);
      if (
        (D.config.minDate &&
          t &&
          C(t, D.config.minDate, void 0 !== n ? n : !D.minDateHasTime) < 0) ||
        (D.config.maxDate &&
          t &&
          C(t, D.config.maxDate, void 0 !== n ? n : !D.maxDateHasTime) > 0)
      )
        return !1;
      if (0 === D.config.enable.length && 0 === D.config.disable.length)
        return !0;
      if (void 0 === t) return !1;
      for (
        var a = D.config.enable.length > 0,
          i = a ? D.config.enable : D.config.disable,
          o = 0,
          r = void 0;
        o < i.length;
        o++
      ) {
        if ("function" == typeof (r = i[o]) && r(t)) return a;
        if (r instanceof Date && void 0 !== t && r.getTime() === t.getTime())
          return a;
        if ("string" == typeof r && void 0 !== t) {
          var l = D.parseDate(r, void 0, !0);
          return l && l.getTime() === t.getTime() ? a : !a;
        }
        if (
          "object" == typeof r &&
          void 0 !== t &&
          r.from &&
          r.to &&
          t.getTime() >= r.from.getTime() &&
          t.getTime() <= r.to.getTime()
        )
          return a;
      }
      return !a;
    }
    function ne(e) {
      return (
        void 0 !== D.daysContainer &&
        -1 === e.className.indexOf("hidden") &&
        -1 === e.className.indexOf("flatpickr-disabled") &&
        D.daysContainer.contains(e)
      );
    }
    function te(e) {
      !(e.target === D._input) ||
        (e.relatedTarget && Z(e.relatedTarget)) ||
        D.setDate(
          D._input.value,
          !0,
          e.target === D.altInput ? D.config.altFormat : D.config.dateFormat
        );
    }
    function ae(e) {
      var n = m(e),
        t = D.config.wrap ? g.contains(n) : n === D._input,
        a = D.config.allowInput,
        i = D.isOpen && (!a || !t),
        o = D.config.inline && t && !a;
      if (13 === e.keyCode && t) {
        if (a)
          return (
            D.setDate(
              D._input.value,
              !0,
              n === D.altInput ? D.config.altFormat : D.config.dateFormat
            ),
            n.blur()
          );
        D.open();
      } else if (Z(n) || i || o) {
        var r = !!D.timeContainer && D.timeContainer.contains(n);
        switch (e.keyCode) {
          case 13:
            r ? (e.preventDefault(), I(), ue()) : fe(e);
            break;
          case 27:
            e.preventDefault(), ue();
            break;
          case 8:
          case 46:
            t && !D.config.allowInput && (e.preventDefault(), D.clear());
            break;
          case 37:
          case 39:
            if (r || t) D.hourElement && D.hourElement.focus();
            else if (
              (e.preventDefault(),
              void 0 !== D.daysContainer &&
                (!1 === a ||
                  (document.activeElement && ne(document.activeElement))))
            ) {
              var l = 39 === e.keyCode ? 1 : -1;
              e.ctrlKey
                ? (e.stopPropagation(), V(l), B(R(1), 0))
                : B(void 0, l);
            }
            break;
          case 38:
          case 40:
            e.preventDefault();
            var c = 40 === e.keyCode ? 1 : -1;
            (D.daysContainer && void 0 !== n.$i) ||
            n === D.input ||
            n === D.altInput
              ? e.ctrlKey
                ? (e.stopPropagation(), X(D.currentYear - c), B(R(1), 0))
                : r || B(void 0, 7 * c)
              : n === D.currentYearElement
              ? X(D.currentYear - c)
              : D.config.enableTime &&
                (!r && D.hourElement && D.hourElement.focus(),
                I(e),
                D._debouncedChange());
            break;
          case 9:
            if (r) {
              var d = [D.hourElement, D.minuteElement, D.secondElement, D.amPM]
                  .concat(D.pluginElements)
                  .filter(function (e) {
                    return e;
                  }),
                s = d.indexOf(n);
              if (-1 !== s) {
                var u = d[s + (e.shiftKey ? -1 : 1)];
                e.preventDefault(), (u || D._input).focus();
              }
            } else
              !D.config.noCalendar &&
                D.daysContainer &&
                D.daysContainer.contains(n) &&
                e.shiftKey &&
                (e.preventDefault(), D._input.focus());
        }
      }
      if (void 0 !== D.amPM && n === D.amPM)
        switch (e.key) {
          case D.l10n.amPM[0].charAt(0):
          case D.l10n.amPM[0].charAt(0).toLowerCase():
            (D.amPM.textContent = D.l10n.amPM[0]), S(), Ce();
            break;
          case D.l10n.amPM[1].charAt(0):
          case D.l10n.amPM[1].charAt(0).toLowerCase():
            (D.amPM.textContent = D.l10n.amPM[1]), S(), Ce();
        }
      (t || Z(n)) && he("onKeyDown", e);
    }
    function ie(e) {
      if (
        1 === D.selectedDates.length &&
        (!e ||
          (e.classList.contains("flatpickr-day") &&
            !e.classList.contains("flatpickr-disabled")))
      ) {
        for (
          var n = e
              ? e.dateObj.getTime()
              : D.days.firstElementChild.dateObj.getTime(),
            t = D.parseDate(D.selectedDates[0], void 0, !0).getTime(),
            a = Math.min(n, D.selectedDates[0].getTime()),
            i = Math.max(n, D.selectedDates[0].getTime()),
            o = !1,
            r = 0,
            l = 0,
            c = a;
          c < i;
          c += y.DAY
        )
          ee(new Date(c), !0) ||
            ((o = o || (c > a && c < i)),
            c < t && (!r || c > r)
              ? (r = c)
              : c > t && (!l || c < l) && (l = c));
        for (var d = 0; d < D.config.showMonths; d++)
          for (
            var s = D.daysContainer.children[d],
              u = function (a, i) {
                var c = s.children[a],
                  d = c.dateObj.getTime(),
                  u = (r > 0 && d < r) || (l > 0 && d > l);
                return u
                  ? (c.classList.add("notAllowed"),
                    ["inRange", "startRange", "endRange"].forEach(function (e) {
                      c.classList.remove(e);
                    }),
                    "continue")
                  : o && !u
                  ? "continue"
                  : ([
                      "startRange",
                      "inRange",
                      "endRange",
                      "notAllowed",
                    ].forEach(function (e) {
                      c.classList.remove(e);
                    }),
                    void (
                      void 0 !== e &&
                      (e.classList.add(
                        n <= D.selectedDates[0].getTime()
                          ? "startRange"
                          : "endRange"
                      ),
                      t < n && d === t
                        ? c.classList.add("startRange")
                        : t > n && d === t && c.classList.add("endRange"),
                      d >= r &&
                        (0 === l || d <= l) &&
                        M(d, t, n) &&
                        c.classList.add("inRange"))
                    ));
              },
              f = 0,
              m = s.children.length;
            f < m;
            f++
          )
            u(f);
      }
    }
    function oe() {
      !D.isOpen || D.config.static || D.config.inline || de();
    }
    function re(e) {
      return function (n) {
        var t = (D.config["_" + e + "Date"] = D.parseDate(
            n,
            D.config.dateFormat
          )),
          a = D.config["_" + ("min" === e ? "max" : "min") + "Date"];
        void 0 !== t &&
          (D["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
            t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0),
          D.selectedDates &&
            ((D.selectedDates = D.selectedDates.filter(function (e) {
              return ee(e);
            })),
            D.selectedDates.length || "min" !== e || _(t),
            Ce()),
          D.daysContainer &&
            (se(),
            void 0 !== t
              ? (D.currentYearElement[e] = t.getFullYear().toString())
              : D.currentYearElement.removeAttribute(e),
            (D.currentYearElement.disabled =
              !!a && void 0 !== t && a.getFullYear() === t.getFullYear()));
      };
    }
    function le() {
      return D.config.wrap ? g.querySelector("[data-input]") : g;
    }
    function ce() {
      "object" != typeof D.config.locale &&
        void 0 === T.l10ns[D.config.locale] &&
        D.config.errorHandler(
          new Error("flatpickr: invalid locale " + D.config.locale)
        ),
        (D.l10n = e(
          e({}, T.l10ns.default),
          "object" == typeof D.config.locale
            ? D.config.locale
            : "default" !== D.config.locale
            ? T.l10ns[D.config.locale]
            : void 0
        )),
        (v.K =
          "(" +
          D.l10n.amPM[0] +
          "|" +
          D.l10n.amPM[1] +
          "|" +
          D.l10n.amPM[0].toLowerCase() +
          "|" +
          D.l10n.amPM[1].toLowerCase() +
          ")"),
        void 0 ===
          e(e({}, h), JSON.parse(JSON.stringify(g.dataset || {}))).time_24hr &&
          void 0 === T.defaultConfig.time_24hr &&
          (D.config.time_24hr = D.l10n.time_24hr),
        (D.formatDate = w(D)),
        (D.parseDate = b({ config: D.config, l10n: D.l10n }));
    }
    function de(e) {
      if (void 0 !== D.calendarContainer) {
        he("onPreCalendarPosition");
        var n = e || D._positionElement,
          t = Array.prototype.reduce.call(
            D.calendarContainer.children,
            function (e, n) {
              return e + n.offsetHeight;
            },
            0
          ),
          a = D.calendarContainer.offsetWidth,
          i = D.config.position.split(" "),
          o = i[0],
          r = i.length > 1 ? i[1] : null,
          l = n.getBoundingClientRect(),
          c = window.innerHeight - l.bottom,
          s = "above" === o || ("below" !== o && c < t && l.top > t),
          u = window.pageYOffset + l.top + (s ? -t - 2 : n.offsetHeight + 2);
        if (
          (d(D.calendarContainer, "arrowTop", !s),
          d(D.calendarContainer, "arrowBottom", s),
          !D.config.inline)
        ) {
          var f = window.pageXOffset + l.left,
            m = !1,
            g = !1;
          "center" === r
            ? ((f -= (a - l.width) / 2), (m = !0))
            : "right" === r && ((f -= a - l.width), (g = !0)),
            d(D.calendarContainer, "arrowLeft", !m && !g),
            d(D.calendarContainer, "arrowCenter", m),
            d(D.calendarContainer, "arrowRight", g);
          var p =
              window.document.body.offsetWidth - (window.pageXOffset + l.right),
            h = f + a > window.document.body.offsetWidth,
            v = p + a > window.document.body.offsetWidth;
          if ((d(D.calendarContainer, "rightMost", h), !D.config.static))
            if (((D.calendarContainer.style.top = u + "px"), h))
              if (v) {
                var w = (function () {
                  for (
                    var e = null, n = 0;
                    n < document.styleSheets.length;
                    n++
                  ) {
                    var t = document.styleSheets[n];
                    try {
                      t.cssRules;
                    } catch (e) {
                      continue;
                    }
                    e = t;
                    break;
                  }
                  return null != e
                    ? e
                    : ((a = document.createElement("style")),
                      document.head.appendChild(a),
                      a.sheet);
                  var a;
                })();
                if (void 0 === w) return;
                var b = window.document.body.offsetWidth,
                  C = Math.max(0, b / 2 - a / 2),
                  M = w.cssRules.length,
                  y = "{left:" + l.left + "px;right:auto;}";
                d(D.calendarContainer, "rightMost", !1),
                  d(D.calendarContainer, "centerMost", !0),
                  w.insertRule(
                    ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                      y,
                    M
                  ),
                  (D.calendarContainer.style.left = C + "px"),
                  (D.calendarContainer.style.right = "auto");
              } else
                (D.calendarContainer.style.left = "auto"),
                  (D.calendarContainer.style.right = p + "px");
            else
              (D.calendarContainer.style.left = f + "px"),
                (D.calendarContainer.style.right = "auto");
        }
      }
    }
    function se() {
      D.config.noCalendar || D.isMobile || (U(), we(), K());
    }
    function ue() {
      D._input.focus(),
        -1 !== window.navigator.userAgent.indexOf("MSIE") ||
        void 0 !== navigator.msMaxTouchPoints
          ? setTimeout(D.close, 0)
          : D.close();
    }
    function fe(e) {
      e.preventDefault(), e.stopPropagation();
      var n = (function e(n, t) {
        return t(n) ? n : n.parentNode ? e(n.parentNode, t) : void 0;
      })(m(e), function (e) {
        return (
          e.classList &&
          e.classList.contains("flatpickr-day") &&
          !e.classList.contains("flatpickr-disabled") &&
          !e.classList.contains("notAllowed")
        );
      });
      if (void 0 !== n) {
        var t = n,
          a = (D.latestSelectedDateObj = new Date(t.dateObj.getTime())),
          i =
            (a.getMonth() < D.currentMonth ||
              a.getMonth() > D.currentMonth + D.config.showMonths - 1) &&
            "range" !== D.config.mode;
        if (((D.selectedDateElem = t), "single" === D.config.mode))
          D.selectedDates = [a];
        else if ("multiple" === D.config.mode) {
          var o = De(a);
          o ? D.selectedDates.splice(parseInt(o), 1) : D.selectedDates.push(a);
        } else
          "range" === D.config.mode &&
            (2 === D.selectedDates.length && D.clear(!1, !1),
            (D.latestSelectedDateObj = a),
            D.selectedDates.push(a),
            0 !== C(a, D.selectedDates[0], !0) &&
              D.selectedDates.sort(function (e, n) {
                return e.getTime() - n.getTime();
              }));
        if ((S(), i)) {
          var r = D.currentYear !== a.getFullYear();
          (D.currentYear = a.getFullYear()),
            (D.currentMonth = a.getMonth()),
            r && (he("onYearChange"), U()),
            he("onMonthChange");
        }
        if (
          (we(),
          K(),
          Ce(),
          i || "range" === D.config.mode || 1 !== D.config.showMonths
            ? void 0 !== D.selectedDateElem &&
              void 0 === D.hourElement &&
              D.selectedDateElem &&
              D.selectedDateElem.focus()
            : W(t),
          void 0 !== D.hourElement &&
            void 0 !== D.hourElement &&
            D.hourElement.focus(),
          D.config.closeOnSelect)
        ) {
          var l = "single" === D.config.mode && !D.config.enableTime,
            c =
              "range" === D.config.mode &&
              2 === D.selectedDates.length &&
              !D.config.enableTime;
          (l || c) && ue();
        }
        P();
      }
    }
    (D.parseDate = b({ config: D.config, l10n: D.l10n })),
      (D._handlers = []),
      (D.pluginElements = []),
      (D.loadedPlugins = []),
      (D._bind = A),
      (D._setHoursFromDate = _),
      (D._positionCalendar = de),
      (D.changeMonth = V),
      (D.changeYear = X),
      (D.clear = function (e, n) {
        void 0 === e && (e = !0);
        void 0 === n && (n = !0);
        (D.input.value = ""), void 0 !== D.altInput && (D.altInput.value = "");
        void 0 !== D.mobileInput && (D.mobileInput.value = "");
        (D.selectedDates = []),
          (D.latestSelectedDateObj = void 0),
          !0 === n &&
            ((D.currentYear = D._initialDate.getFullYear()),
            (D.currentMonth = D._initialDate.getMonth()));
        if (!0 === D.config.enableTime) {
          var t = O(),
            a = t.hours,
            i = t.minutes,
            o = t.seconds;
          F(a, i, o);
        }
        D.redraw(), e && he("onChange");
      }),
      (D.close = function () {
        (D.isOpen = !1),
          D.isMobile ||
            (void 0 !== D.calendarContainer &&
              D.calendarContainer.classList.remove("open"),
            void 0 !== D._input && D._input.classList.remove("active"));
        he("onClose");
      }),
      (D._createElement = s),
      (D.destroy = function () {
        void 0 !== D.config && he("onDestroy");
        for (var e = D._handlers.length; e--; ) {
          var n = D._handlers[e];
          n.element.removeEventListener(n.event, n.handler, n.options);
        }
        if (((D._handlers = []), D.mobileInput))
          D.mobileInput.parentNode &&
            D.mobileInput.parentNode.removeChild(D.mobileInput),
            (D.mobileInput = void 0);
        else if (D.calendarContainer && D.calendarContainer.parentNode)
          if (D.config.static && D.calendarContainer.parentNode) {
            var t = D.calendarContainer.parentNode;
            if ((t.lastChild && t.removeChild(t.lastChild), t.parentNode)) {
              for (; t.firstChild; ) t.parentNode.insertBefore(t.firstChild, t);
              t.parentNode.removeChild(t);
            }
          } else
            D.calendarContainer.parentNode.removeChild(D.calendarContainer);
        D.altInput &&
          ((D.input.type = "text"),
          D.altInput.parentNode &&
            D.altInput.parentNode.removeChild(D.altInput),
          delete D.altInput);
        D.input &&
          ((D.input.type = D.input._type),
          D.input.classList.remove("flatpickr-input"),
          D.input.removeAttribute("readonly"));
        [
          "_showTimeInput",
          "latestSelectedDateObj",
          "_hideNextMonthArrow",
          "_hidePrevMonthArrow",
          "__hideNextMonthArrow",
          "__hidePrevMonthArrow",
          "isMobile",
          "isOpen",
          "selectedDateElem",
          "minDateHasTime",
          "maxDateHasTime",
          "days",
          "daysContainer",
          "_input",
          "_positionElement",
          "innerContainer",
          "rContainer",
          "monthNav",
          "todayDateElem",
          "calendarContainer",
          "weekdayContainer",
          "prevMonthNav",
          "nextMonthNav",
          "monthsDropdownContainer",
          "currentMonthElement",
          "currentYearElement",
          "navigationCurrentMonth",
          "selectedDateElem",
          "config",
        ].forEach(function (e) {
          try {
            delete D[e];
          } catch (e) {}
        });
      }),
      (D.isEnabled = ee),
      (D.jumpToDate = Y),
      (D.open = function (e, n) {
        void 0 === n && (n = D._positionElement);
        if (!0 === D.isMobile) {
          if (e) {
            e.preventDefault();
            var t = m(e);
            t && t.blur();
          }
          return (
            void 0 !== D.mobileInput &&
              (D.mobileInput.focus(), D.mobileInput.click()),
            void he("onOpen")
          );
        }
        if (D._input.disabled || D.config.inline) return;
        var a = D.isOpen;
        (D.isOpen = !0),
          a ||
            (D.calendarContainer.classList.add("open"),
            D._input.classList.add("active"),
            he("onOpen"),
            de(n));
        !0 === D.config.enableTime &&
          !0 === D.config.noCalendar &&
          (!1 !== D.config.allowInput ||
            (void 0 !== e && D.timeContainer.contains(e.relatedTarget)) ||
            setTimeout(function () {
              return D.hourElement.select();
            }, 50));
      }),
      (D.redraw = se),
      (D.set = function (e, n) {
        if (null !== e && "object" == typeof e)
          for (var a in (Object.assign(D.config, e), e))
            void 0 !== me[a] &&
              me[a].forEach(function (e) {
                return e();
              });
        else
          (D.config[e] = n),
            void 0 !== me[e]
              ? me[e].forEach(function (e) {
                  return e();
                })
              : t.indexOf(e) > -1 && (D.config[e] = c(n));
        D.redraw(), Ce(!0);
      }),
      (D.setDate = function (e, n, t) {
        void 0 === n && (n = !1);
        void 0 === t && (t = D.config.dateFormat);
        if ((0 !== e && !e) || (e instanceof Array && 0 === e.length))
          return D.clear(n);
        ge(e, t),
          (D.latestSelectedDateObj =
            D.selectedDates[D.selectedDates.length - 1]),
          D.redraw(),
          Y(void 0, n),
          _(),
          0 === D.selectedDates.length && D.clear(!1);
        Ce(n), n && he("onChange");
      }),
      (D.toggle = function (e) {
        if (!0 === D.isOpen) return D.close();
        D.open(e);
      });
    var me = {
      locale: [ce, G],
      showMonths: [$, k, z],
      minDate: [Y],
      maxDate: [Y],
    };
    function ge(e, n) {
      var t = [];
      if (e instanceof Array)
        t = e.map(function (e) {
          return D.parseDate(e, n);
        });
      else if (e instanceof Date || "number" == typeof e)
        t = [D.parseDate(e, n)];
      else if ("string" == typeof e)
        switch (D.config.mode) {
          case "single":
          case "time":
            t = [D.parseDate(e, n)];
            break;
          case "multiple":
            t = e.split(D.config.conjunction).map(function (e) {
              return D.parseDate(e, n);
            });
            break;
          case "range":
            t = e.split(D.l10n.rangeSeparator).map(function (e) {
              return D.parseDate(e, n);
            });
        }
      else
        D.config.errorHandler(
          new Error("Invalid date supplied: " + JSON.stringify(e))
        );
      (D.selectedDates = D.config.allowInvalidPreload
        ? t
        : t.filter(function (e) {
            return e instanceof Date && ee(e, !1);
          })),
        "range" === D.config.mode &&
          D.selectedDates.sort(function (e, n) {
            return e.getTime() - n.getTime();
          });
    }
    function pe(e) {
      return e
        .slice()
        .map(function (e) {
          return "string" == typeof e ||
            "number" == typeof e ||
            e instanceof Date
            ? D.parseDate(e, void 0, !0)
            : e && "object" == typeof e && e.from && e.to
            ? {
                from: D.parseDate(e.from, void 0),
                to: D.parseDate(e.to, void 0),
              }
            : e;
        })
        .filter(function (e) {
          return e;
        });
    }
    function he(e, n) {
      if (void 0 !== D.config) {
        var t = D.config[e];
        if (void 0 !== t && t.length > 0)
          for (var a = 0; t[a] && a < t.length; a++)
            t[a](D.selectedDates, D.input.value, D, n);
        "onChange" === e &&
          (D.input.dispatchEvent(ve("change")),
          D.input.dispatchEvent(ve("input")));
      }
    }
    function ve(e) {
      var n = document.createEvent("Event");
      return n.initEvent(e, !0, !0), n;
    }
    function De(e) {
      for (var n = 0; n < D.selectedDates.length; n++)
        if (0 === C(D.selectedDates[n], e)) return "" + n;
      return !1;
    }
    function we() {
      D.config.noCalendar ||
        D.isMobile ||
        !D.monthNav ||
        (D.yearElements.forEach(function (e, n) {
          var t = new Date(D.currentYear, D.currentMonth, 1);
          t.setMonth(D.currentMonth + n),
            D.config.showMonths > 1 || "static" === D.config.monthSelectorType
              ? (D.monthElements[n].textContent =
                  p(t.getMonth(), D.config.shorthandCurrentMonth, D.l10n) + " ")
              : (D.monthsDropdownContainer.value = t.getMonth().toString()),
            (e.value = t.getFullYear().toString());
        }),
        (D._hidePrevMonthArrow =
          void 0 !== D.config.minDate &&
          (D.currentYear === D.config.minDate.getFullYear()
            ? D.currentMonth <= D.config.minDate.getMonth()
            : D.currentYear < D.config.minDate.getFullYear())),
        (D._hideNextMonthArrow =
          void 0 !== D.config.maxDate &&
          (D.currentYear === D.config.maxDate.getFullYear()
            ? D.currentMonth + 1 > D.config.maxDate.getMonth()
            : D.currentYear > D.config.maxDate.getFullYear())));
    }
    function be(e) {
      return D.selectedDates
        .map(function (n) {
          return D.formatDate(n, e);
        })
        .filter(function (e, n, t) {
          return (
            "range" !== D.config.mode ||
            D.config.enableTime ||
            t.indexOf(e) === n
          );
        })
        .join(
          "range" !== D.config.mode
            ? D.config.conjunction
            : D.l10n.rangeSeparator
        );
    }
    function Ce(e) {
      void 0 === e && (e = !0),
        void 0 !== D.mobileInput &&
          D.mobileFormatStr &&
          (D.mobileInput.value =
            void 0 !== D.latestSelectedDateObj
              ? D.formatDate(D.latestSelectedDateObj, D.mobileFormatStr)
              : ""),
        (D.input.value = be(D.config.dateFormat)),
        void 0 !== D.altInput && (D.altInput.value = be(D.config.altFormat)),
        !1 !== e && he("onValueUpdate");
    }
    function Me(e) {
      var n = m(e),
        t = D.prevMonthNav.contains(n),
        a = D.nextMonthNav.contains(n);
      t || a
        ? V(t ? -1 : 1)
        : D.yearElements.indexOf(n) >= 0
        ? n.select()
        : n.classList.contains("arrowUp")
        ? D.changeYear(D.currentYear + 1)
        : n.classList.contains("arrowDown") && D.changeYear(D.currentYear - 1);
    }
    return (
      (function () {
        (D.element = D.input = g),
          (D.isOpen = !1),
          (function () {
            var n = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
              ],
              i = e(e({}, JSON.parse(JSON.stringify(g.dataset || {}))), h),
              o = {};
            (D.config.parseDate = i.parseDate),
              (D.config.formatDate = i.formatDate),
              Object.defineProperty(D.config, "enable", {
                get: function () {
                  return D.config._enable;
                },
                set: function (e) {
                  D.config._enable = pe(e);
                },
              }),
              Object.defineProperty(D.config, "disable", {
                get: function () {
                  return D.config._disable;
                },
                set: function (e) {
                  D.config._disable = pe(e);
                },
              });
            var r = "time" === i.mode;
            if (!i.dateFormat && (i.enableTime || r)) {
              var l = T.defaultConfig.dateFormat || a.dateFormat;
              o.dateFormat =
                i.noCalendar || r
                  ? "H:i" + (i.enableSeconds ? ":S" : "")
                  : l + " H:i" + (i.enableSeconds ? ":S" : "");
            }
            if (i.altInput && (i.enableTime || r) && !i.altFormat) {
              var d = T.defaultConfig.altFormat || a.altFormat;
              o.altFormat =
                i.noCalendar || r
                  ? "h:i" + (i.enableSeconds ? ":S K" : " K")
                  : d + " h:i" + (i.enableSeconds ? ":S" : "") + " K";
            }
            Object.defineProperty(D.config, "minDate", {
              get: function () {
                return D.config._minDate;
              },
              set: re("min"),
            }),
              Object.defineProperty(D.config, "maxDate", {
                get: function () {
                  return D.config._maxDate;
                },
                set: re("max"),
              });
            var s = function (e) {
              return function (n) {
                D.config["min" === e ? "_minTime" : "_maxTime"] = D.parseDate(
                  n,
                  "H:i:S"
                );
              };
            };
            Object.defineProperty(D.config, "minTime", {
              get: function () {
                return D.config._minTime;
              },
              set: s("min"),
            }),
              Object.defineProperty(D.config, "maxTime", {
                get: function () {
                  return D.config._maxTime;
                },
                set: s("max"),
              }),
              "time" === i.mode &&
                ((D.config.noCalendar = !0), (D.config.enableTime = !0)),
              Object.assign(D.config, o, i);
            for (var u = 0; u < n.length; u++)
              D.config[n[u]] =
                !0 === D.config[n[u]] || "true" === D.config[n[u]];
            t
              .filter(function (e) {
                return void 0 !== D.config[e];
              })
              .forEach(function (e) {
                D.config[e] = c(D.config[e] || []).map(E);
              }),
              (D.isMobile =
                !D.config.disableMobile &&
                !D.config.inline &&
                "single" === D.config.mode &&
                !D.config.disable.length &&
                !D.config.enable.length &&
                !D.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ));
            for (var u = 0; u < D.config.plugins.length; u++) {
              var f = D.config.plugins[u](D) || {};
              for (var m in f)
                t.indexOf(m) > -1
                  ? (D.config[m] = c(f[m]).map(E).concat(D.config[m]))
                  : void 0 === i[m] && (D.config[m] = f[m]);
            }
            i.altInputClass ||
              (D.config.altInputClass =
                le().className + " " + D.config.altInputClass),
              he("onParseConfig");
          })(),
          ce(),
          (D.input = le()),
          D.input
            ? ((D.input._type = D.input.type),
              (D.input.type = "text"),
              D.input.classList.add("flatpickr-input"),
              (D._input = D.input),
              D.config.altInput &&
                ((D.altInput = s(D.input.nodeName, D.config.altInputClass)),
                (D._input = D.altInput),
                (D.altInput.placeholder = D.input.placeholder),
                (D.altInput.disabled = D.input.disabled),
                (D.altInput.required = D.input.required),
                (D.altInput.tabIndex = D.input.tabIndex),
                (D.altInput.type = "text"),
                D.input.setAttribute("type", "hidden"),
                !D.config.static &&
                  D.input.parentNode &&
                  D.input.parentNode.insertBefore(
                    D.altInput,
                    D.input.nextSibling
                  )),
              D.config.allowInput ||
                D._input.setAttribute("readonly", "readonly"),
              (D._positionElement = D.config.positionElement || D._input))
            : D.config.errorHandler(
                new Error("Invalid input element specified")
              ),
          (function () {
            (D.selectedDates = []),
              (D.now = D.parseDate(D.config.now) || new Date());
            var e =
              D.config.defaultDate ||
              (("INPUT" !== D.input.nodeName &&
                "TEXTAREA" !== D.input.nodeName) ||
              !D.input.placeholder ||
              D.input.value !== D.input.placeholder
                ? D.input.value
                : null);
            e && ge(e, D.config.dateFormat),
              (D._initialDate =
                D.selectedDates.length > 0
                  ? D.selectedDates[0]
                  : D.config.minDate &&
                    D.config.minDate.getTime() > D.now.getTime()
                  ? D.config.minDate
                  : D.config.maxDate &&
                    D.config.maxDate.getTime() < D.now.getTime()
                  ? D.config.maxDate
                  : D.now),
              (D.currentYear = D._initialDate.getFullYear()),
              (D.currentMonth = D._initialDate.getMonth()),
              D.selectedDates.length > 0 &&
                (D.latestSelectedDateObj = D.selectedDates[0]),
              void 0 !== D.config.minTime &&
                (D.config.minTime = D.parseDate(D.config.minTime, "H:i")),
              void 0 !== D.config.maxTime &&
                (D.config.maxTime = D.parseDate(D.config.maxTime, "H:i")),
              (D.minDateHasTime =
                !!D.config.minDate &&
                (D.config.minDate.getHours() > 0 ||
                  D.config.minDate.getMinutes() > 0 ||
                  D.config.minDate.getSeconds() > 0)),
              (D.maxDateHasTime =
                !!D.config.maxDate &&
                (D.config.maxDate.getHours() > 0 ||
                  D.config.maxDate.getMinutes() > 0 ||
                  D.config.maxDate.getSeconds() > 0));
          })(),
          (D.utils = {
            getDaysInMonth: function (e, n) {
              return (
                void 0 === e && (e = D.currentMonth),
                void 0 === n && (n = D.currentYear),
                1 === e && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0)
                  ? 29
                  : D.l10n.daysInMonth[e]
              );
            },
          }),
          D.isMobile ||
            (function () {
              var e = window.document.createDocumentFragment();
              if (
                ((D.calendarContainer = s("div", "flatpickr-calendar")),
                (D.calendarContainer.tabIndex = -1),
                !D.config.noCalendar)
              ) {
                if (
                  (e.appendChild(
                    ((D.monthNav = s("div", "flatpickr-months")),
                    (D.yearElements = []),
                    (D.monthElements = []),
                    (D.prevMonthNav = s("span", "flatpickr-prev-month")),
                    (D.prevMonthNav.innerHTML = D.config.prevArrow),
                    (D.nextMonthNav = s("span", "flatpickr-next-month")),
                    (D.nextMonthNav.innerHTML = D.config.nextArrow),
                    $(),
                    Object.defineProperty(D, "_hidePrevMonthArrow", {
                      get: function () {
                        return D.__hidePrevMonthArrow;
                      },
                      set: function (e) {
                        D.__hidePrevMonthArrow !== e &&
                          (d(D.prevMonthNav, "flatpickr-disabled", e),
                          (D.__hidePrevMonthArrow = e));
                      },
                    }),
                    Object.defineProperty(D, "_hideNextMonthArrow", {
                      get: function () {
                        return D.__hideNextMonthArrow;
                      },
                      set: function (e) {
                        D.__hideNextMonthArrow !== e &&
                          (d(D.nextMonthNav, "flatpickr-disabled", e),
                          (D.__hideNextMonthArrow = e));
                      },
                    }),
                    (D.currentYearElement = D.yearElements[0]),
                    we(),
                    D.monthNav)
                  ),
                  (D.innerContainer = s("div", "flatpickr-innerContainer")),
                  D.config.weekNumbers)
                ) {
                  var n = (function () {
                      D.calendarContainer.classList.add("hasWeeks");
                      var e = s("div", "flatpickr-weekwrapper");
                      e.appendChild(
                        s("span", "flatpickr-weekday", D.l10n.weekAbbreviation)
                      );
                      var n = s("div", "flatpickr-weeks");
                      return (
                        e.appendChild(n), { weekWrapper: e, weekNumbers: n }
                      );
                    })(),
                    t = n.weekWrapper,
                    a = n.weekNumbers;
                  D.innerContainer.appendChild(t),
                    (D.weekNumbers = a),
                    (D.weekWrapper = t);
                }
                (D.rContainer = s("div", "flatpickr-rContainer")),
                  D.rContainer.appendChild(z()),
                  D.daysContainer ||
                    ((D.daysContainer = s("div", "flatpickr-days")),
                    (D.daysContainer.tabIndex = -1)),
                  K(),
                  D.rContainer.appendChild(D.daysContainer),
                  D.innerContainer.appendChild(D.rContainer),
                  e.appendChild(D.innerContainer);
              }
              D.config.enableTime &&
                e.appendChild(
                  (function () {
                    //   D.config.maxTime = "22:00";
                    D.calendarContainer.classList.add("hasTime"),
                      D.config.noCalendar &&
                        D.calendarContainer.classList.add("noCalendar"),
                      (D.timeContainer = s("div", "flatpickr-time")),
                      (D.timeContainer.tabIndex = -1);
                    var e = s("span", "flatpickr-time-separator", ":"),
                      n = f("flatpickr-hour", {
                        "aria-label": D.l10n.hourAriaLabel,
                      });
                    D.hourElement = n.getElementsByTagName("input")[0];
                    var t = f("flatpickr-minute", {
                      "aria-label": D.l10n.minuteAriaLabel,
                    });
                    if (
                      ((D.minuteElement = t.getElementsByTagName("input")[0]),
                      (D.hourElement.tabIndex = D.minuteElement.tabIndex = -1),
                      (D.hourElement.value = o(
                        D.latestSelectedDateObj
                          ? D.latestSelectedDateObj.getHours()
                          : D.config.time_24hr
                          ? D.config.defaultHour
                          : (function (e) {
                              switch (e % 24) {
                                case 0:
                                case 12:
                                  return 12;
                                default:
                                  return e % 12;
                              }
                            })(D.config.defaultHour)
                      )),
                      (D.minuteElement.value = o(
                        D.latestSelectedDateObj
                          ? D.latestSelectedDateObj.getMinutes()
                          : D.config.defaultMinute
                      )),
                      D.hourElement.setAttribute(
                        "step",
                        D.config.hourIncrement.toString()
                      ),
                      D.minuteElement.setAttribute(
                        "step",
                        D.config.minuteIncrement.toString()
                      ),
                      D.hourElement.setAttribute(
                        "min",
                        D.config.time_24hr ? "0" : "1"
                      ),
                      D.hourElement.setAttribute(
                        "max",
                        D.config.time_24hr ? "23" : "12"
                      ),
                      D.minuteElement.setAttribute("min", "0"),
                      D.minuteElement.setAttribute("max", "59"),
                      D.timeContainer.appendChild(n),
                      D.timeContainer.appendChild(e),
                      D.timeContainer.appendChild(t),
                      D.config.time_24hr &&
                        D.timeContainer.classList.add("time24hr"),
                      D.config.enableSeconds)
                    ) {
                      D.timeContainer.classList.add("hasSeconds");
                      var a = f("flatpickr-second");
                      (D.secondElement = a.getElementsByTagName("input")[0]),
                        (D.secondElement.value = o(
                          D.latestSelectedDateObj
                            ? D.latestSelectedDateObj.getSeconds()
                            : D.config.defaultSeconds
                        )),
                        D.secondElement.setAttribute(
                          "step",
                          D.minuteElement.getAttribute("step")
                        ),
                        D.secondElement.setAttribute("min", "0"),
                        D.secondElement.setAttribute("max", "59"),
                        D.timeContainer.appendChild(
                          s("span", "flatpickr-time-separator", ":")
                        ),
                        D.timeContainer.appendChild(a);
                    }
                    return (
                      D.config.time_24hr ||
                        ((D.amPM = s(
                          "span",
                          "flatpickr-am-pm",
                          D.l10n.amPM[
                            r(
                              (D.latestSelectedDateObj
                                ? D.hourElement.value
                                : D.config.defaultHour) > 11
                            )
                          ]
                        )),
                        (D.amPM.title = D.l10n.toggleTitle),
                        (D.amPM.tabIndex = -1),
                        D.timeContainer.appendChild(D.amPM)),
                      D.timeContainer
                    );
                  })()
                ),
                d(D.calendarContainer, "rangeMode", "range" === D.config.mode),
                d(D.calendarContainer, "animate", !0 === D.config.animate),
                d(D.calendarContainer, "multiMonth", D.config.showMonths > 1),
                D.calendarContainer.appendChild(e);
              var i =
                void 0 !== D.config.appendTo &&
                void 0 !== D.config.appendTo.nodeType;
              if (
                (D.config.inline || D.config.static) &&
                (D.calendarContainer.classList.add(
                  D.config.inline ? "inline" : "static"
                ),
                D.config.inline &&
                  (!i && D.element.parentNode
                    ? D.element.parentNode.insertBefore(
                        D.calendarContainer,
                        D._input.nextSibling
                      )
                    : void 0 !== D.config.appendTo &&
                      D.config.appendTo.appendChild(D.calendarContainer)),
                D.config.static)
              ) {
                var l = s("div", "flatpickr-wrapper");
                D.element.parentNode &&
                  D.element.parentNode.insertBefore(l, D.element),
                  l.appendChild(D.element),
                  D.altInput && l.appendChild(D.altInput),
                  l.appendChild(D.calendarContainer);
              }
              D.config.static ||
                D.config.inline ||
                (void 0 !== D.config.appendTo
                  ? D.config.appendTo
                  : window.document.body
                ).appendChild(D.calendarContainer);
            })(),
          (function () {
            if (
              (D.config.wrap &&
                ["open", "close", "toggle", "clear"].forEach(function (e) {
                  Array.prototype.forEach.call(
                    D.element.querySelectorAll("[data-" + e + "]"),
                    function (n) {
                      return A(n, "click", D[e]);
                    }
                  );
                }),
              D.isMobile)
            )
              !(function () {
                var e = D.config.enableTime
                  ? D.config.noCalendar
                    ? "time"
                    : "datetime-local"
                  : "date";
                (D.mobileInput = s(
                  "input",
                  D.input.className + " flatpickr-mobile"
                )),
                  (D.mobileInput.tabIndex = 1),
                  (D.mobileInput.type = e),
                  (D.mobileInput.disabled = D.input.disabled),
                  (D.mobileInput.required = D.input.required),
                  (D.mobileInput.placeholder = D.input.placeholder),
                  (D.mobileFormatStr =
                    "datetime-local" === e
                      ? "Y-m-d\\TH:i:S"
                      : "date" === e
                      ? "Y-m-d"
                      : "H:i:S"),
                  D.selectedDates.length > 0 &&
                    (D.mobileInput.defaultValue = D.mobileInput.value =
                      D.formatDate(D.selectedDates[0], D.mobileFormatStr)),
                  D.config.minDate &&
                    (D.mobileInput.min = D.formatDate(
                      D.config.minDate,
                      "Y-m-d"
                    )),
                  D.config.maxDate &&
                    (D.mobileInput.max = D.formatDate(
                      D.config.maxDate,
                      "Y-m-d"
                    )),
                  D.input.getAttribute("step") &&
                    (D.mobileInput.step = String(D.input.getAttribute("step"))),
                  (D.input.type = "hidden"),
                  void 0 !== D.altInput && (D.altInput.type = "hidden");
                try {
                  D.input.parentNode &&
                    D.input.parentNode.insertBefore(
                      D.mobileInput,
                      D.input.nextSibling
                    );
                } catch (e) {}
                A(D.mobileInput, "change", function (e) {
                  D.setDate(m(e).value, !1, D.mobileFormatStr),
                    he("onChange"),
                    he("onClose");
                });
              })();
            else {
              var e = l(oe, 50);
              (D._debouncedChange = l(P, x)),
                D.daysContainer &&
                  !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                  A(D.daysContainer, "mouseover", function (e) {
                    "range" === D.config.mode && ie(m(e));
                  }),
                A(window.document.body, "keydown", ae),
                D.config.inline || D.config.static || A(window, "resize", e),
                void 0 !== window.ontouchstart
                  ? A(window.document, "touchstart", Q)
                  : A(window.document, "click", Q),
                A(window.document, "focus", Q, { capture: !0 }),
                !0 === D.config.clickOpens &&
                  (A(D._input, "focus", D.open), A(D._input, "click", D.open)),
                void 0 !== D.daysContainer &&
                  (A(D.monthNav, "click", Me),
                  A(D.monthNav, ["keyup", "increment"], N),
                  A(D.daysContainer, "click", fe)),
                void 0 !== D.timeContainer &&
                  void 0 !== D.minuteElement &&
                  void 0 !== D.hourElement &&
                  (A(D.timeContainer, ["increment"], I),
                  A(D.timeContainer, "blur", I, { capture: !0 }),
                  A(D.timeContainer, "click", H),
                  A(
                    [D.hourElement, D.minuteElement],
                    ["focus", "click"],
                    function (e) {
                      return m(e).select();
                    }
                  ),
                  void 0 !== D.secondElement &&
                    A(D.secondElement, "focus", function () {
                      return D.secondElement && D.secondElement.select();
                    }),
                  void 0 !== D.amPM &&
                    A(D.amPM, "click", function (e) {
                      I(e), P();
                    })),
                D.config.allowInput && A(D._input, "blur", te);
            }
          })(),
          (D.selectedDates.length || D.config.noCalendar) &&
            (D.config.enableTime &&
              _(
                D.config.noCalendar
                  ? D.latestSelectedDateObj || D.config.minDate
                  : void 0
              ),
            Ce(!1)),
          k();
        var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !D.isMobile && n && de(), he("onReady");
      })(),
      D
    );
  }
  function k(e, n) {
    for (
      var t = Array.prototype.slice.call(e).filter(function (e) {
          return (
            e instanceof HTMLElement || e instanceof window.parent.HTMLElement
          );
        }),
        a = [],
        i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i];
      try {
        if (null !== o.getAttribute("data-fp-omit")) continue;
        void 0 !== o._flatpickr &&
          (o._flatpickr.destroy(), (o._flatpickr = void 0)),
          (o._flatpickr = E(o, n || {})),
          a.push(o._flatpickr);
      } catch (e) {}
    }
    return 1 === a.length ? a[0] : a;
  }
  "undefined" != typeof HTMLElement &&
    "undefined" != typeof HTMLCollection &&
    "undefined" != typeof NodeList &&
    ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
      function (e) {
        return k(this, e);
      }),
    (HTMLElement.prototype.flatpickr = function (e) {
      return k([this], e);
    }));
  var T = function (e, n) {
    return "string" == typeof e
      ? k(window.document.querySelectorAll(e), n)
      : e instanceof Node
      ? k([e], n)
      : k(e, n);
  };
  return (
    (T.defaultConfig = {}),
    (T.l10ns = { en: e({}, i), default: e({}, i) }),
    (T.localize = function (n) {
      T.l10ns.default = e(e({}, T.l10ns.default), n);
    }),
    (T.setDefaults = function (n) {
      T.defaultConfig = e(e({}, T.defaultConfig), n);
    }),
    (T.parseDate = b({})),
    (T.formatDate = w({})),
    (T.compareDates = C),
    "undefined" != typeof jQuery &&
      void 0 !== jQuery.fn &&
      (jQuery.fn.flatpickr = function (e) {
        return k(this, e);
      }),
    (Date.prototype.fp_incr = function (e) {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
      );
    }),
    "undefined" != typeof window && (window.flatpickr = T),
    T
  );
});
