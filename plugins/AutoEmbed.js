//META{"name":"AutoEmbed"}*//
function AutoEmbed() {
	this.parseChat = function(){
		var m = document.getElementsByClassName("messages")[0];
		var audio = "\
			a[href $='.ogg'],a[href $='.OGG'],\
			a[href $='.mid'],a[href $='.MID'],\
			a[href $='.midi'],a[href $='.MIDI'],\
			a[href $='.mp3'],a[href $='.MP3'],\
			a[href $='.m3u'],a[href $='.M3U'],\
			a[href $='.wav'],a[href $='.WAV'],\
			a[href $='.wma'],a[href $='.WMA'],\
			a[href $='.ra'],a[href $='.RA'],\
			a[href $='.m4a'],a[href $='.M4A'],\
			a[href $='.ape'],a[href $='.APE'],\
			a[href $='.asf'],a[href $='.ASF'],\
			a[href $='.flac'],a[href $='.FLAC'],\
			a[href $='.speex'],a[href $='.SPEEX'],\
			a[href $='.aac'],a[href $='.aac']\
		";
		var video = "\
			a[href $='.ogm'],a[href $='.OGM'],\
			a[href $='.avi'],a[href $='.AVI'],\
			a[href $='.mpeg'],a[href $='.MPEG'],\
			a[href $='.mpg'],a[href $='.MPG'],\
			a[href $='.mkv'],a[href $='.MKV'],\
			a[href $='.mov'],a[href $='.MOV'],\
			a[href $='.wmv'],a[href $='.WMV'],\
			a[href $='.flv'],a[href $='.FLV'],\
			a[href $='.rm'],a[href $='.RM'],\
			a[href $='.divx'],a[href $='.DIVX'],\
			a[href $='.xvid'],a[href $='.XVID'],\
			a[href $='.m4v'],a[href $='.M4V'],\
			a[href $='.mp4'],a[href $='.MP4']\
		";
		//Audio
		$(".message .markup>a:not(.AutoEmbed_parsed").filter(audio).each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<audio controls preload='metadata'><source src='"+url+"'></audio>")
			var preH = m.scrollHeight
			e.parents(".message .body").siblings(".accessory").append(vid)
			m.scrollTop+=m.scrollHeight-preH;
		}).addClass("AutoEmbed_parsed")
		$(".message .accessory .attachment>a:not(.AutoEmbed_parsed").filter(audio).each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<audio controls preload='metadata'><source src='"+url+"'></audio>")
			var preH = m.scrollHeight
			e.after(vid)
			m.scrollTop+=m.scrollHeight-preH;
		}).addClass("AutoEmbed_parsed")
		//Video
		$(".message .markup>a:not(.AutoEmbed_parsed").filter(video).each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<div class='embed AutoEmbed'><video width='600px' controls preload='metadata'><source src='"+url+"'></video></div>")
			var preH = m.scrollHeight
			e.parents(".message .body").siblings(".accessory").append(vid)
			m.scrollTop+=m.scrollHeight-preH;
		}).addClass("AutoEmbed_parsed")
		$(".message .accessory .attachment>a:not(.AutoEmbed_parsed").filter(video).each(function(i,el){
			var e = $(el);
			var url = e.attr("href").replace(/http:\/\//gi,"https://")
			var vid = $("<div class='embed AutoEmbed'><video width='600px' controls preload='metadata'><source src='"+url+"'></video></div>")
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