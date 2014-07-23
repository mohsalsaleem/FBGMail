var data= require('sdk/self').data;
var text_entry=require('sdk/panel').Panel({
	contentURL:data.url("text-entry.html"),
    contentScriptFile: data.url('get-text.js')
});



 require('sdk/ui/button/action').ActionButton({
	id: "mozilla-link",
    label: "Visit mozila",
    icon:{
	    "16" : "./icon-16.png"
    },
    onClick: handleClick
});
function handleClick(state){
	text_entry.show();
}

text_entry.on("show",function(){
	text_entry.port.emit("show");
});


text_entry.port.on("text-entered",function(text){
	console.log(text);
	text_entry.hide();
});

