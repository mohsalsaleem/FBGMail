var textArea=document.getElementById('edit-box');
textArea.addEventListener('keyup',function onKeyup(event){
	if(event.keyCode==13){
		text=textArea.value.replace(/(\r\n|\n|\n|\r)/gm,"");
		self,port.emit("text-entered",text);
		textArea.value='';
	}
},false);
self.port.on("show",function onShow(){
	textArea.focus();
});

