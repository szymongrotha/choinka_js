	function rysujChoinke(x) {
		for (var i = 0; i < x; i++) {
			var star = "";
			for (var j = 0; j < i * 2 - 1; j++) {
				star += '*';
			}
			console.log(star)
		}
	} 

	rysujChoinke(8)
	