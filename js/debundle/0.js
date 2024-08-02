var e = require("./1.js");
var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof e == "object" && e.global === e ? e : this;
function s(t, e, a) {
  var s = new XMLHttpRequest();
  s.open("GET", t);
  s.responseType = "blob";
  s.onload = function () {
    o(s.response, e, a);
  };
  s.onerror = function () {
    console.error("could not download file");
  };
  s.send();
}
function r(t) {
  var e = new XMLHttpRequest();
  e.open("HEAD", t, false);
  e.send();
  return e.status >= 200 && e.status <= 299;
}
function i(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch (a) {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    t.dispatchEvent(e);
  }
}
var o = a.saveAs || typeof window != "object" || window !== a ? function () {} : "download" in HTMLAnchorElement.prototype ? function (t, e, o) {
  var l = a.URL || a.webkitURL;
  var n = document.createElement("a");
  e = e || t.name || "download";
  n.download = e;
  n.rel = "noopener";
  if (typeof t == "string") {
    n.href = t;
    if (n.origin !== location.origin) {
      if (r(n.href)) {
        s(t, e, o);
      } else {
        i(n, n.target = "_blank");
      }
    } else {
      i(n);
    }
  } else {
    n.href = l.createObjectURL(t);
    setTimeout(function () {
      l.revokeObjectURL(n.href);
    }, 40000);
    setTimeout(function () {
      i(n);
    }, 0);
  }
} : "msSaveOrOpenBlob" in navigator ? function (t, e, a) {
  e = e || t.name || "download";
  if (typeof t == "string") {
    if (r(t)) {
      s(t, e, a);
    } else {
      var o = document.createElement("a");
      o.href = t;
      o.target = "_blank";
      setTimeout(function () {
        i(o);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(function (t, e = {
      autoBom: false
    }) {
      if (e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)) {
        return new Blob([String.fromCharCode(65279), t], {
          type: t.type
        });
      } else {
        return t;
      }
    }(t, a), e);
  }
} : function (t, e, r, i) {
  if (i = i || open("", "_blank")) {
    i.document.title = i.document.body.innerText = "downloading...";
  }
  if (typeof t == "string") {
    return s(t, e, r);
  }
  var o = t.type === "application/octet-stream";
  var l = /constructor/i.test(a.HTMLElement) || a.safari;
  var n = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((n || o && l) && typeof FileReader == "object") {
    var u = new FileReader();
    u.onloadend = function () {
      var t = u.result;
      t = n ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;");
      if (i) {
        i.location.href = t;
      } else {
        location = t;
      }
      i = null;
    };
    u.readAsDataURL(t);
  } else {
    var d = a.URL || a.webkitURL;
    var c = d.createObjectURL(t);
    if (i) {
      i.location = c;
    } else {
      location.href = c;
    }
    i = null;
    setTimeout(function () {
      d.revokeObjectURL(c);
    }, 40000);
  }
};
a.saveAs = o.saveAs = o;
module.exports = o;