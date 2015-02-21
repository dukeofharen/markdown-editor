function init(){
	var menu = require("./../js/menu.js");
	menu.initMenu();

	global.$(global.window.document).ready(function(){
		var editor = require("./../js/editor.js");
		if(global.gui.App.argv.length > 0){
			editor.loadFile(global.gui.App.argv[0]);
		}
		var textEditor = global.$('#editor');
		textEditor.bind('input propertychange', function() {
			editor.reload();
		});
		tabOverride.set(global.window.document.getElementsByTagName('textarea'));
	});
}