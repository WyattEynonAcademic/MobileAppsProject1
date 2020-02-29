// JavaScript Document

(function () {
	// eslint-disable-line no-unused-vars
	var mockDatabase = [
		{ _id: '100', name: 'The Classic Open Toe', open: true, price: 20, img: "sandals/AllT.jpg", des: "Add this in last"},
		{ _id: '40', name: 'Shaggy Shoe', open: false, price: 15, img: "sandals/closed2.jpg" },
		{ _id: '69', name: 'Livin? Like Larry', open: true, price: 60, img: "sandals/closed4.jpg"},
		{ _id: '54', name: 'Standard Schlub', open: true, price: 17, img:"sandals/schlub.jpg" },
		{ _id: '48', name: 'The Open Toad', open: true, price: 30, img:"sandals/open.jfif" },
		{ _id: '10', name: 'The Watergate Sandal', open: false, price: 72 , img:"sandals/watergate.jpg"},
		{ _id: '82', name: 'Smith Slippers', open: true, price: 12, img:"sandals/closed 5.jpg" },
		{ _id: '37', name: 'All Terrain', open: false, price: 36,  img:"sandals/bladerunner.jpg"},
		{ _id: '88', name: 'Arizona Beauty', open: true, price: 13, img:"sandals/arizona.jpg" },
	];
	
	function renderList(theData){ // eslint-disable-line no-unused-vars
		
		var viewSpace = document.querySelector("#productViewingSpace");
		viewSpace.innerHTML="";
		var cards = theData.map(function (result, index) { // eslint-disable-line no-unused-vars
			return '<div class="card"><img src="'+result.img+'" class="productImg">'+
			'<div class="product-data"><h3>'+result.name+'</h3><div class="price"> $'+result.price+'</div></div></div>';
		});
		cards.forEach(function(row){
		viewSpace.innerHTML += row;
		});
	}
	renderList(mockDatabase);
	
	function orderBy(sortValue){ // eslint-disable-line no-unused-vars
		var results;
		//var iterationCount = 0;
		if (sortValue === 'name'){
			results = mockDatabase.sort(function (a,b) { // eslint-disable-line no-unused-vars
				var row1n = a.name.toLowerCase();
				var row2n = b.name.toLowerCase();
				if (row1n < row2n){
					return -1;
				}
				if( row1n >= row2n){
					return 1;
				}
			});
		}
		else{
			results = mockDatabase.sort(function(a,b){ // eslint-disable-line no-unused-vars
										return (a[sortValue]-b[sortValue]);
										});
		}
		renderList(results);
		
	}
		document.querySelector("#orderBy").addEventListener('change',function(event){ // eslint-disable-line no-unused-vars
					orderBy(event.target.value);
		});
		
		function filterPrice (priceType){ // eslint-disable-line no-unused-vars
			
			//var priceGuides = [0,15,25,40,50,100];
			var filteredResults = mockDatabase.filter(function (row) { // eslint-disable-line no-unused-vars
				//var comparedEnity;
				if (priceType == 1){
					return (row.price > 0 && row.price < 25);
				}
				else if(priceType == 2){
					return (row.price > 25 && row.price <50);
				}
				else if(priceType == 3){
					return (row.price > 50 && row.price < 100);
				}
			});
			renderList(filteredResults);
		}
		document.querySelector('#priceType').addEventListener('change', function (event) { // eslint-disable-line no-unused-vars
		filterPrice(event.target.value);});
	
		function filterOpen (openType){ // eslint-disable-line no-unused-vars
			
			//var priceGuides = [0,15,25,40,50,100];
			var filteredResults = mockDatabase.filter(function (row) { // eslint-disable-line no-unused-vars
				//var comparedEnity;
				if (openType == 1){
					return (row.open == true);
				}
				else if(openType == 0){
					return (row.open == false);
				}
				
			});
			renderList(filteredResults);
		}
		
		document.querySelector('#openType').addEventListener('change', function (event) { // eslint-disable-line no-unused-vars
		filterOpen(event.target.value);});
})(); 