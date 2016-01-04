//META{"name":"AutoEmbed"}*//
function AutoEmbed() {
	this.parseChat = function(){
		$(".message .markup>a:not(.AutoEmbed_parsed").filter("[href$='.webm'],[href$='.mp4'],[href$='.ogg']").each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			console.log(url);
			e.parents(".message .body").siblings(".accessory").append("<div class='embed AutoEmbed'><video width='600px' controls><source src='"+url+"'></video></div>")
		}).addClass("AutoEmbed_parsed")
	}
}

AutoEmbed.prototype.getName = function() {
    return "Auto Embed";
};
AutoEmbed.prototype.getDescription = function() {
    return "Embeds <video> compatible links in page";
};
AutoEmbed.prototype.getVersion = function() {
    return "1.0";
};
AutoEmbed.prototype.getAuthor = function() {
    return "Mitchell/megamit";
};

AutoEmbed.prototype.load = function() {};
AutoEmbed.prototype.unload = function() {};
AutoEmbed.prototype.start = function() {
    this.parseChat()
};
AutoEmbed.prototype.stop = function() {
    $(".AutoEmbed").remove();
};
AutoEmbed.prototype.onMessage = function() {
    this.parseChat();
};
AutoEmbed.prototype.onSwitch = function() {
	this.parseChat();
};