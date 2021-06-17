(function(){

	function C() {
		console.log("OOPS!");
	}

	function E() {
		console.log("E");
		F();
	}

	function A() {
		console.log("A");
		B();
	};

	function G() {
		console.log("G");
		H();
	}

	function H() {
		console.log("H");
		I();
	}

	function D() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
	}

	function B() {
		console.log("B");
		C();
	};

	function F() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split(""), fns = {};
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			fns[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					fns[rest[i+1]]();
				}
			};
		})(i);
	}

	function J() {
		console.log("J");
		fns.K();
	}

	function C() {
		console.log("C");
		D();
	}

	return A;

})(window)();
