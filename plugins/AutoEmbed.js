//META{"name":"AutoEmbed"}*//
function AutoEmbed() {
	this.parseChat = function(){
		var m = document.getElementsByClassName("messages")[0];
		$(".message .markup>a:not(.AutoEmbed_parsed").filter("[href$='.webm'],[href$='.mp4'],[href$='.ogg']").each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<div class='embed AutoEmbed'><video width='600px' controls><source src='"+url+"'></video></div>")
			var preH = m.scrollHeight
			e.parents(".message .body").siblings(".accessory").append(vid)
			m.scrollTop+=m.scrollHeight-preH;
		}).addClass("AutoEmbed_parsed")
		$(".message .accessory .attachment>a:not(.AutoEmbed_parsed").filter("[href$='.webm'],[href$='.mp4'],[href$='.ogg']").each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<div class='embed AutoEmbed'><video width='600px' controls><source src='"+url+"'></video></div>")
			var preH = m.scrollHeight
			e.after(vid)
			m.scrollTop+=m.scrollHeight-preH;
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