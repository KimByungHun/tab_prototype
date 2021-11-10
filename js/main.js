
function Tab(selector){
    this.$tab = $(selector);
    this.$btn = this.$tab.find("ul li");
    this.$box = this.$tab.children("div");

    this.$btn.on("click", function(e){
        e.preventDefault();
        this.activation(this);
    }.bind(this));
}

Tab.prototype.activation = function activation(el){
    var target = $(el).children("a").attr("href");

    this.$btn.removeClass("on");
    $(el).addClass("on");

    this.$box.hide();
    $(target).show();
}
