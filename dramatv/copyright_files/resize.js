(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            if (clientWidth >= 720) docEl.style.fontSize = '200px';
        };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    win.onunload = function () {
        win.removeEventListener(resizeEvt, recalc, false);
        doc.removeEventListener('DOMContentLoaded', recalc, false);
    }
})(document, window);