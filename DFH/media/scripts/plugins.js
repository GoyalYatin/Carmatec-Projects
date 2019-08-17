(function (a) {
    a.fn.extend({
        productShowcase: function (l) {
            var d = {
                containerClass: "wrapContainer",
                initShow: false,
                initZoomEffect: true,
                showCloseButton: true,
                closeButtonClass: "right",
                showArrow: true,
                arrowAutoHiden: true
            };
            if (l) {
                a.extend(d, l)
            }
            var e = this;
            e.wrap('<div class="' + d.containerClass + '"/>');
            var g = e.parent();
            g.hide();
            var k = a(".bigImages", e);
            var b = a(".thumbnails", e);
            var c = a(".bigImages ul li", e).size();
            var i = a(".thumbnails ul li", e).size();
            var f = Math.max(c, i);
            var j = [];
            var h = [];
            e.popover = function () {
                if (Modernizr.csstransitions) {
                    e.show();
                    g.show();
                    g.removeClass("pulseHide pulse animated2").addClass("animated pulse")
                } else {
                    e.fadeIn("slow");
                    g.fadeIn("slow")
                }
            };
            return this.each(function () {
                k.find("ul li").each(function (v) {
                    j[v] = a(this);
                    if (v != 0) {
                        a(this).hide()
                    }
                    a(this).css("opacity", 0)
                });
                b.find("ul li").each(function (v) {
                    h[v] = a(this);
                    a(this).css("cursor", "pointer");
                    a(this).attr("rel", v);
                    a(this).bind("click", function (x) {
                        if (a(this).hasClass("active")) {
                            return false
                        }
                        var w = a(this).attr("rel");
                        t(w)
                    })
                });
                var u, n;
                if (d.showCloseButton) {
                    n = a('<div class="' + d.closeButtonClass + ' closeButton"></div>');
                    g.append(n);
                    n.css("cursor", "pointer");
                    n.bind("click", function (v) {
                        if (Modernizr.csstransitions) {
                            g.removeClass("pulseHide pulse animated").addClass("pulseHide animated2")
                        } else {
                            g.fadeOut("slow")
                        }
                        setTimeout(function () {
                            g.hide()
                        }, 500)
                    })
                }
                if (d.showArrow) {
                    u = a('<div class="arrowButton"><div class="prevArrow"></div><div class="nextArrow"></div></div>');
                    e.append(u);
                    var q = a(".nextArrow", u).bind("click", function (v) {
                        r()
                    });
                    var m = a(".prevArrow", u).bind("click", function (v) {
                        o()
                    })
                }
                var s = -1;

                function r() {
                    var v = s;
                    v++;
                    if (v > f - 1) {
                        v = 0
                    }
                    t(v)
                }
                function o() {
                    var v = s;
                    v--;
                    if (v < 0) {
                        v = f - 1
                    }
                    t(v)
                }
                function t(w) {
                    var v = s;
                    j[w].show();
                    j[w].animate({
                        opacity: 1
                    }, 250);
                    if (j[v]) {
                        j[v].animate({
                            opacity: 0
                        }, 400)
                    }
                    if (h[v]) {
                        h[v].removeClass("active")
                    }
                    h[w].addClass("active");
                    s = w
                }
                t(0);

                function p() {
                    if (Modernizr.csstransitions) {
                        if (d.initZoomEffect) {
                            e.show();
                            g.show();
                            g.removeClass("pulseHide pulse animated2").addClass("animated pulse")
                        } else {
                            e.fadeIn("slow");
                            g.fadeIn("slow")
                        }
                    } else {
                        e.fadeIn("slow");
                        g.fadeIn("slow")
                    }
                }
                if (d.initShow) {
                    p()
                }
                g.mouseover(function (v) {
                    if (u) {
                        u.fadeIn()
                    }
                });
                g.mouseleave(function (v) {
                    if (u) {
                        u.fadeOut()
                    }
                });
                e.touchwipe({
                    wipeLeft: r,
                    wipeRight: o,
                    preventDefaultEvents: true
                })
            })
        }
    })
})(jQuery);

(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {},
            wipeRight: function () {},
            wipeUp: function () {},
            wipeDown: function () {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }
            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }
            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);