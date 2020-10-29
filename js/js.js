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
var deviceVal = browserRedirect();

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
    $('#suggest_list ul li').eq(now).addClass('current').siblings().removeClass('current');
    $('#txt').val($('#suggest_list ul li').eq(now).text())
  }
  if (ev.keyCode == 38) {
    if (now == -1 || now === 0) {
      now = resLength
    }
    now--;
    $('#suggest_list ul li').eq(now).addClass('current').siblings().removeClass('current');
    $('#txt').val($('#suggest_list ul li').eq(now).text())
  }
  if (ev.keyCode == 13) {
    var textValue = $('#txt').val();
    if (deviceVal == "phone" && thisSearch.search("bilibili") != -1) {
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
  if (deviceVal == "phone" && thisSearch.search("bilibili") != -1) {
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

$(function () {
  document.getElementById('txt').oninput = function() { txt_oninput(); }
  document.getElementById('txt').onblur = function () { txt_blur(); }

  function txt_oninput() {
    var content = document.getElementById('txt').value;
    var do_suggest = 0;

    if (content.length > 0 && thisSearch.search('google') != -1) {
      url = 'https://suggestqueries.google.com/complete/search?client=youtube&q=' + content + '&jsonp=suggest_google';
      do_suggest = 1;
    }
    else if (content.length > 0 && thisSearch.search('baidu') != -1) {
      url = 'http://suggestion.baidu.com/su?wd=' + content + '&cb=suggest_baidu';
      do_suggest = 1;
    }
    else if (content.length > 0 && thisSearch.search('bing') != -1) {
      url = 'http://api.bing.com/qsonhs.aspx?type=cb&q=' + content + '&cb=suggest_bing';
      do_suggest = 1;
    }

    if (do_suggest == 1) {
      var script = document.createElement('script');
      script.setAttribute('src', url);
      script.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('head')[0].appendChild(script);

      now = -1;
    }
  }

  function txt_blur() {
    $('#suggest_list').css("display", "none");
    $(".search-box").css("border-radius", "10px");
  }
});

function suggest_google(json) {
  var suggestion = [];
  for (var i = 0; i < json[1].length; ++i)
  {
    suggestion.push(json[1][i][0]);
  }
  // console.log(suggestion);
  if (suggestion.length > 0) {
    getConfirm('https://www.google.com/search?q=', suggestion);
    resLength = suggestion.length;
  }
}

function suggest_baidu(obj) {
  suggestion = obj['s']
  // console.log(obj['s']);
  if (suggestion.length > 0) {
    getConfirm('https://www.baidu.com/s?wd=', suggestion);
    resLength = suggestion.length;
  }
}

function suggest_bing(obj) {
  if (obj["AS"]["FullResults"] > 0)
  {
    var res = obj["AS"]["Results"][0]["Suggests"];
    var suggestion = [];
    for (var i = 0; i < res.length; ++i)
    {
      suggestion.push(res[i]["Txt"]);
    }
    getConfirm('https://cn.bing.com/search?q=', suggestion);
    resLength = suggestion.length;
  }
}

function getConfirm(url, arr){
	// 删除，保证每次都是最新的数据
  $(".on_changes li").remove();
  var display = $('#suggest_list');
  var search_box = $('.search-box');

  if (arr.length == 0) {
    if (display.css("display") == "block") {
      display.css("display", "none");
      search_box.css("border-radius", "10px");
    }
  }
  else {
    $.each(arr,function(idx,item){
      //组装数据
      //alert(item);
      var li = "<li onmousedown='get(&apos;"+url+item+"&apos;)' onmouseover='this.style.backgroundColor=\"#eee\";'onmouseout='this.style.backgroundColor=\"#fff\";'>"+item+"</li>";
      //alert(li);
      $(".on_changes").append(li);
    });
    // 控制下拉框显示
    $(".on_changes").css("width", (parseInt($("#txt").css("width")) + parseInt($('#search-btn').css("width"))).toString() + "px");//设置加载的下拉列表宽度同输入框
    if(display.css("display") == "none"){
      display.css("display", "block");
      search_box.css("border-radius", "10px 10px 0px 0px");
    }
  }
}

function get(url) {
  console.log(url);
  window.open(url);
	$("#suggest_list").css("display", "none");
  $(".search-box").css("border-radius", "10px");
}
