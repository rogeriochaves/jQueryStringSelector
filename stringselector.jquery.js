// jQuery String Selector
// (c) 2013 - Rogério Chaves
// May be freely distributed according to MIT license.
//
// Yep, the code is that simple, feel free to improve

function getMethods(obj){
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

var methods = getMethods(jQuery.fn);
for(i in methods){
	m = methods[i];
	if(!"string"[m]){
		String.prototype[m] = (function(m){
			return function(){
				elem = $(this.valueOf());
				return elem[m].apply(elem, arguments);
			}
		})(m);
	}
}