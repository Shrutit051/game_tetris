var Stats = function () {
  function s(a, g, d) {
    var f, c, e;
    for (c = 0; c < 30; c++) {
      for (f = 0; f < 73; f++) {
        e = (f + c * 74) * 4;
        a[e]     = a[e + 4];
        a[e + 1] = a[e + 5];
        a[e + 2] = a[e + 6];
      }
      e = (73 + c * 74) * 4;
      if (c < g) {
        a[e]     = b[d].bg.r;
        a[e + 1] = b[d].bg.g;
        a[e + 2] = b[d].bg.b;
      } else {
        a[e]     = b[d].fg.r;
        a[e + 1] = b[d].fg.g;
        a[e + 2] = b[d].fg.b;
      }
    }
  }

  var r = 0,
      t = 2,
      g, u = 0,
      j = (new Date).getTime(),
      F = j,
      v = j,
      l = 0,
      w = 1000,
      x = 0,
      k, d, a, m, y, n = 0,
      z = 1000,
      A = 0, f, c, o, B, p = 0,
      C = 1000, D = 0, h, i, q, E,
      b = {
        fps: { bg: { r: 16, g: 16, b: 48 }, fg: { r: 0, g: 255, b: 255 } },
        ms:  { bg: { r: 16, g: 48, b: 16 }, fg: { r: 0, g: 255, b: 0   } },
        mb:  { bg: { r: 48, g: 16, b: 26 }, fg: { r: 255, g: 0, b: 128 } }
      };

  g = document.createElement("div");
  g.style.cursor = "pointer";
  g.style.width = "80px";
  g.style.opacity = "0.9";
  g.style.zIndex = "10001";
  g.addEventListener("click", function () {
    r++;
    if (r == t) r = 0;

    k.style.display = "none";
    f.style.display = "none";
    h.style.display = "none";

    switch (r) {
      case 0:
        k.style.display = "block";
        break;
      case 1:
        f.style.display = "block";
        break;
      case 2:
        h.style.display = "block";
        break;
    }
  }, false);

  // FPS panel
  k = document.createElement("div");
  k.style.backgroundColor = "rgb(" +
    Math.floor(b.fps.bg.r / 2) + "," +
    Math.floor(b.fps.bg.g / 2) + "," +
    Math.floor(b.fps.bg.b / 2) + ")";
  k.style.padding = "2px 0px 3px 0px";
  g.appendChild(k);

  d = document.createElement("div");
  d.style.fontFamily = "Helvetica, Arial, sans-serif";
  d.style.textAlign = "left";
  d.style.fontSize = "9px";
  d.style.color = "rgb(" +
    b.fps.fg.r + "," +
    b.fps.fg.g + "," +
    b.fps.fg.b + ")";
  d.style.margin = "0px 0px 1px 3px";
  d.innerHTML = '<span style="font-weight:bold">FPS</span>';
  k.appendChild(d);

  a = document.createElement("canvas");
  a.width = 74;
  a.height = 30;
  a.style.display = "block";
  a.style.marginLeft = "3px";
  k.appendChild(a);

  m = a.getContext("2d");
  m.fillStyle = "rgb(" +
    b.fps.bg.r + "," +
    b.fps.bg.g + "," +
    b.fps.bg.b + ")";
  m.fillRect(0, 0, a.width, a.height);
  y = m.getImageData(0, 0, a.width, a.height);

  // MS panel
  f = document.createElement("div");
  f.style.backgroundColor = "rgb(" +
    Math.floor(b.ms.bg.r / 2) + "," +
    Math.floor(b.ms.bg.g / 2) + "," +
    Math.floor(b.ms.bg.b / 2) + ")";
  f.style.padding = "2px 0px 3px 0px";
  f.style.display = "none";
  g.appendChild(f);

  c = document.createElement("div");
  c.style.fontFamily = "Helvetica, Arial, sans-serif";
  c.style.textAlign = "left";
  c.style.fontSize = "9px";
  c.style.color = "rgb(" +
    b.ms.fg.r + "," +
    b.ms.fg.g + "," +
    b.ms.fg.b + ")";
  c.style.margin = "0px 0px 1px 3px";
  c.innerHTML = '<span style="font-weight:bold">MS</span>';
  f.appendChild(c);

  a = document.createElement("canvas");
  a.width = 74;
  a.height = 30;
  a.style.display = "block";
  a.style.marginLeft = "3px";
  f.appendChild(a);

  o = a.getContext("2d");
  o.fillStyle = "rgb(" +
    b.ms.bg.r + "," +
    b.ms.bg.g + "," +
    b.ms.bg.b + ")";
  o.fillRect(0, 0, a.width, a.height);
  B = o.getImageData(0, 0, a.width, a.height);

  // MB panel (memory)
  try {
    if (performance && performance.memory && performance.memory.totalJSHeapSize) {
      t = 3;
    }
  } catch (G) {}

  h = document.createElement("div");
  h.style.backgroundColor = "rgb(" +
    Math.floor(b.mb.bg.r / 2) + "," +
    Math.floor(b.mb.bg.g / 2) + "," +
    Math.floor(b.mb.bg.b / 2) + ")";
  h.style.padding = "2px 0px 3px 0px";
  h.style.display = "none";
  g.appendChild(h);

  i = document.createElement("div");
  i.style.fontFamily = "Helvetica, Arial, sans-serif";
  i.style.textAlign = "left";
  i.style.fontSize = "9px";
  i.style.color = "rgb(" +
    b.mb.fg.r + "," +
    b.mb.fg.g + "," +
    b.mb.fg.b + ")";
  i.style.margin = "0px 0px 1px 3px";
  i.innerHTML = '<span style="font-weight:bold">MB</span>';
  h.appendChild(i);

  a = document.createElement("canvas");
  a.width = 74;
  a.height = 30;
  a.style.display = "block";
  a.style.marginLeft = "3px";
  h.appendChild(a);

  q = a.getContext("2d");
  q.fillStyle = "#301010";
  q.fillRect(0, 0, a.width, a.height);
  E = q.getImageData(0, 0, a.width, a.height);

  return {
    domElement: g,
    update: function () {
      u++;
      j = (new Date).getTime();
      n = j - F;
      z = Math.min(z, n);
      A = Math.max(A, n);

      s(B.data, Math.min(30, 30 - n / 200 * 30), "ms");
      c.innerHTML = '<span style="font-weight:bold">' + n + " MS</span> (" + z + "-" + A + ")";
      o.putImageData(B, 0, 0);
      F = j;

      if (j > v + 1000) {
        l = Math.round(u * 1000 / (j - v));
        w = Math.min(w, l);
        x = Math.max(x, l);

        s(y.data, Math.min(30, 30 - l / 100 * 30), "fps");
        d.innerHTML = '<span style="font-weight:bold">' + l + " FPS</span> (" + w + "-" + x + ")";
        m.putImageData(y, 0, 0);

        if (t === 3) {
          p = performance.memory.usedJSHeapSize * 9.54e-7;
          C = Math.min(C, p);
          D = Math.max(D, p);

          s(E.data, Math.min(30, 30 - p / 2), "mb");
          i.innerHTML = '<span style="font-weight:bold">' + Math.round(p) + " MB</span> (" + Math.round(C) + "-" + Math.round(D) + ")";
          q.putImageData(E, 0, 0);
        }

        v = j;
        u = 0;
      }
    }
  };
};
