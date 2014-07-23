var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
	id:'facebook',
	label:'Visit FB',
	icon:{
	    "16":"./fb.png"
	},
    onClick: handleClick
});


var button1 = buttons.ActionButton({
	        id:'gmail',
            label:'Visit Gmail',
            icon:{
		                "16":"./gmail.png"
	        },
        onClick: handleClick1
});

function handleClick(state){
	tabs.open("https://fb.com");
}


function handleClick1(state){
	        tabs.open("https://gmail.com");
}

