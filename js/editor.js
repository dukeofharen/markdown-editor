exports.reload = function(){
	var marked = require("marked");
	marked.setOptions({
	renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	});
	var resultDiv = global.$('.md_result');
	var textEditor = global.$('#editor');
	var text = textEditor.val();
	resultDiv.html(marked(text));
};

exports.loadText = function(text){
	var textEditor = global.$('#editor');
	textEditor.val(text);
	exports.reload();
};

exports.loadFile = function(file){
	var fs = require('fs');
	fs.readFile(file, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		exports.loadText(data);
	});
};

exports.chooseFile = function(name, callback) {
	var chooser = global.$(name);
	chooser.change(function(evt) {
		callback(global.$(this).val());
	});

	chooser.trigger('click');
};