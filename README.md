jQuery String Selector - Code cheaper
==================================================

Introduction
--------------------------------------

With jQuery String Selector you can code jQuery without a lot of $ on your code, because you can use jQuery selectors direct on strings

Example
--------------------------------------

```js
"div#button".click(function(){
	"nav.menu".css({background: '#F00'});
	alert("yay!");
});
```

Controversy
--------------------------------------

The problem with this approach is the pollution of the global scope, because that the code basically injects all jQuery methods on the String Prototype. 