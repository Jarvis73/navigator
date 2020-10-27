$(".left-menu-btn")["hover"](function () {
  $('#tow-nav')["fadeIn"](200);
}, function () {
  $("#tow-nav")["hover"](function () {
    $('#tow-nav')["fadeIn"](0);
  }, function () {
    $('#tow-nav')["fadeOut"](0);
  });
  $('#tow-nav')["fadeOut"](0);
});
var mIysiyja1 = browserRedirect();

function browserRedirect() {
  var zAIB_f2 = navigator["userAgent"]["toLowerCase"]();
  var sKRsHeICD3 = zAIB_f2["match"](/ipad/i) == "ipad";
  var _zKUNh4 = zAIB_f2["match"](/iphone os/i) == "iphone os";
  var LCVkvJ5 = zAIB_f2["match"](/midp/i) == "midp";
  var jMVJ6 = zAIB_f2["match"](/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var FHw7 = zAIB_f2["match"](/ucweb/i) == "ucweb";
  var _r8 = zAIB_f2["match"](/android/i) == "android";
  var jDlget9 = zAIB_f2["match"](/windows ce/i) == "windows ce";
  var CD10 = zAIB_f2["match"](/windows mobile/i) == "windows mobile";
  if (sKRsHeICD3 || _zKUNh4 || LCVkvJ5 || jMVJ6 || FHw7 || _r8 || jDlget9 || CD10) {
    return 'phone';
  } else {
    return 'pc';
  }
}
(function () {
  window["onresize"] = function () {
    ShowHideElement("i-link-box", "linkList-item", 845);
  };
  window["%6f%6e%6c%6f%61%64"] = function () {
    ShowHideElement("i-link-box", "linkList-item", 845);
  };

  function ShowHideElement(Wjvsi1, WgNudrB2, B3) {
    var Xhq4 = window["document"]["getElementsByClassName"](Wjvsi1);
    var eCpX5 = window["document"]["getElementsByClassName"](WgNudrB2);
    var YsMnV6 = window["innerHeight"] || window["document"]["body"]["clientHeight"];
    for (var NUH7 = 6; NUH7 < Xhq4["length"]; NUH7++) {
      if (YsMnV6 <= B3 && deviceVal === "pc") {
        Xhq4[NUH7]["style"]["display"] = "none";
        eCpX5[0]["style"]["marginTop"] = "5px";
      } else {
        Xhq4[NUH7]["style"]["display"] = "block";
        eCpX5[0]["style"]["marginTop"] = "0px";
      }
    }
  }
  window["ShowHideElement"] = ShowHideElement;
}());
var now = -1;
var resLength = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './images/baidu.jpg';
var storage = window.localStorage;
if (!storage.stopHot) {
  storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn').addClass('off') : $('#hot-btn').removeClass('off');
var ssData = storage.searchEngine;
if (storage.searchEngine !== undefined) {
  ssData = ssData.split(',');
  thisSearch = ssData[0];
  $('.search-icon').attr('src', ssData[1])
}
$('#txt').keydown(function (ev) {
  if (ev.keyCode == 40) {
    now++;
    if (now > resLength - 1) {
      now = 0
    }
    $('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
    $('#txt').val($('#box ul li').eq(now).text())
  }
  if (ev.keyCode == 38) {
    if (now == -1 || now === 0) {
      now = resLength
    }
    now--;
    $('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
    $('#txt').val($('#box ul li').eq(now).text())
  }
  if (ev.keyCode == 13) {
    var textValue = $('#txt').val();
    if (mIysiyja1 == "phone" && thisSearch.search("bilibili") != -1) {
      thisSearch = "https://m.bilibili.com/search?keyword=";
    }
    window.open(thisSearch + $('#txt').val());
    $('#box ul').html('')
  }
});

$(function () {
  $.ajax({
  type: 'get',
  url: 'https://v1.hitokoto.cn/',
  data: { encode: "text" }
  }).done(function(msg) {
  document.getElementById('hitokoto').innerHTML = msg;
})});

$(function () {
  var search = {
    data: [{
      name: '百度',
      img: '/images/baidu.jpg',
      url: 'https://www.baidu.com/s?wd='
    }, {
      name: '谷歌',
      img: '/images/google.jpg',
      url: 'https://www.google.com/search?q='
    }, {
      name: '必应',
      img: '/images/bing.ico',
      url: 'https://cn.bing.com/search?q='
    }, {
      name: '知乎',
      img: '/images/zhihu.jpg',
      url: 'https://www.zhihu.com/search?q='
    }, {
      name: '有道',
      img: '/images/youdao.jpg',
      url: 'https://dict.youdao.com/w/eng/'
    }, {
      name: 'Bilibili',
      img: '/images/bilibili.jpg',
      url: 'https://search.bilibili.com/all?keyword='
    }, {
      name: 'Github',
      img: '/images/github.jpg',
      url: 'https://github.com/search?q='
    }]
  };
  for (var i = 0; i < search.data.length; i++) {
    var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>';
    $('.search-engine-list').append(addList)
  }
  $('.search-icon, .search-engine').hover(function () {
    $('.search-engine').css('display', 'block')
  }, function () {
    $('.search-engine').css('display', 'none')
  });
  $('#hot-btn').on('click', function () {
    $(this).toggleClass('off');
    if (storage.stopHot == 'true') {
      storage.stopHot = false
    } else {
      storage.stopHot = true
    }
    console.log(storage.stopHot)
  });
  $('.search-engine-list li').click(function () {
    var _index = $(this).index();
    var thisImg = $(this).children().attr('src');
    $('.search-icon').attr('src', thisImg);
    thisSearch = search.data[_index].url;
    $('.search-engine').css('display', 'none');
    storage.searchEngine = [thisSearch, thisImg]
  })
});
$("#search-btn").click(function () {
  var textValue = $('#txt').val();
  if (mIysiyja1 == "phone" && thisSearch.search("bilibili") != -1) {
    thisSearch = "https://m.bilibili.com/search?keyword=";
  }
  window.open(thisSearch + $('#txt').val());
  $('#box ul').html('')
});
'use strict';
$(function () {
  if (deviceVal == 'phone') {
    $('#menu').css({
      'overflow': 'hidden',
      'overflow-y': 'scroll'
    });
    return
  }
  var api1 = new myApi();
  api1.mouseScroll.inte($('#menu'), 30)
})

function myApi() {
  this.mouseScroll = {
    inte: function (obj, value) {
      this.OBJ = obj;
      this.addscroll(obj);
      var outH = obj.outerHeight(),
        oScrollcontent = obj.children(':first'),
        contentH = oScrollcontent.outerHeight(),
        oYscrollinnerH = outH / contentH * outH,
        oYscrollouter = obj.find('#Yscrollouter'),
        oYscrollinner = obj.find('#Yscrollinner');
      obj.css({
        'position': 'relative',
        'overflow': 'hidden'
      });
      oScrollcontent.css('position', 'absolute');
      if (contentH > outH) {
        this.mousehover(obj, oYscrollouter, oYscrollinner);
        this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH);
        this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH)
      }
    },
    addscroll: function (obj, value) {
      obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>');
      $('#Yscrollinner').css('cursor', 'pointer')
    },
    mousehover: function (obj, outer, inner) {
      obj.hover(function () {
        outer.fadeIn(400)
      }, function () {
        outer.fadeOut(400)
      });
      inner.hover(function () {
        $('body').css({
          '-moz-user-select': 'none',
          '-webkit-user-select': 'none',
          '-ms-user-select': 'none',
          '-khtml-user-select': 'none',
          'user-select': 'none',
        })
      }, function () {
        $('body').css({
          '-moz-user-select': 'auto',
          '-webkit-user-select': 'auto',
          '-ms-user-select': 'auto',
          '-khtml-user-select': 'auto',
          'user-select': 'auto',
        })
      })
    },
    mousewheel: function (obj, value, O, inner, H1, H2, H3) {
      var oScrollcontentVal = value / (H1 - H3) * (H2 - H1);
      inner.height(H3);
      obj.on('mousewheel', function (event, delta) {
        event.preventDefault();
        var delta = event.originalEvent.wheelDelta;
        var oYscrollinnerTop = inner.position().top;
        var oScrollcontentTop = O.position().top;
        if (delta > 0) {
          if (oYscrollinnerTop - value < 0) {
            inner.css('top', 0);
            O.css('top', 0)
          } else {
            inner.css('top', oYscrollinnerTop - value);
            O.css('top', oScrollcontentTop + oScrollcontentVal)
          }
        } else {
          if (oYscrollinnerTop + value > H1 - H3) {
            inner.css('top', H1 - H3);
            O.css('top', H1 - H2)
          } else {
            inner.css('top', oYscrollinnerTop + value);
            O.css('top', oScrollcontentTop - oScrollcontentVal)
          }
        }
      })
    },
    mousemoved: function (obj, O, outer, inner, H1, H2, H3) {
      inner.on('mousedown', function (event) {
        var clientY = event.clientY,
          oYscrollinnerTop = inner.position().top,
          oScrollcontentTop = O.position().top,
          moveY = 0;
        $(document).on('mousemove', function (event) {
          moveY = event.clientY - clientY;
          var oScrollcontentMove = moveY / (H1 - H3) * (H2 - H1);
          if (oYscrollinnerTop + moveY < 0) {
            inner.css('top', 0);
            O.css('top', 0)
          } else if (oYscrollinnerTop + moveY > H1 - H3) {
            inner.css('top', H1 - H3);
            O.css('top', H1 - H2)
          } else {
            inner.css('top', oYscrollinnerTop + moveY);
            O.css('top', oScrollcontentTop - oScrollcontentMove)
          }
        });
        $(document).on('mouseup', function (event) {
          $(document).off('mousemove')
        })
      })
    }
  }
}
