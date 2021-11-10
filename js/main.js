function Tab(){
    this.$tab = $("#tab");
    this.$btn = this.$tab.find("ul li");
    this.$box = this.$tab.children("div");

    this.$btn.on("click", function(e){
        e.preventDefault();
        this.activation(this);
    }.bind(this));
}

Tab.prototype.activation = function activation(el){
    var target = $(el).children("a").attr("href");

    $btn.removeClass("on");
    $(el).addClass("on");

    $box.hide();
    $(target).show();
}
