var $tab = $("#tab");
var $btn = $tab.find("ul li");
var $box = $tab.children("div");

$btn.on("click", function(e){
    e.preventDefault();

    activation(this);
});

// 탭 활성화 함수 정의
function activation(el){
    var target = $(el).children("a").attr("href");

    $btn.removeClass("on");
    $(el).addClass("on");

    $box.hide();
    $(target).show();
}