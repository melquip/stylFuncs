var objFonts = function(){
	return function(style){
		var nodes = this.nodes;
		style.define('objFonts', function() {
			var fontTypes = {
				'L': 'light',
				'R': 'regular',
				'B': 'bold',
			};
			var fonts = {};
			for(var i=1; i<10; i++) {
				fonts['font'+i] = {};
				keys = Object.keys(fontTypes);
				console.log(keys);
				for(var t=0; t<keys; t++) {
					var type = keys[t];
					fonts['font'+i][type] = { name: '', path: '', extensions: '', alt: '', }
				}
			}
			console.log(fonts, fontTypes, fontTypes.lenght);
			return JSON.stringify(fonts);
		});
	};
};
module.exports = objFonts;

