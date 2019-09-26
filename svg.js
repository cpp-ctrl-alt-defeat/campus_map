var rsr = Raphael('rsr', '1186.81', '759.34');

var buildings = [];

var group_a = rsr.set();


var B5 = rsr.path("M 278.44 227.12 278.63 264.76 282.54 264.74 282.56 269.27 291 269.23 290.97 264.08 315.66 263.96 315.47 226.93 278.44 227.12 z").attr({id: 'B5',class: 'cls-44',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': 'gold'}).data({'id': 'B5', 'building': 'B5'});

//var B8 = rsr.path("M 314.28 173.65 314.3 178.38 315.53 178.38 315.68 208 289.14 208.13 288.92 164.11 315.45 163.98 315.5 173.65 314.28 173.65 z").attr({id: 'B8',class: 'cls-44',parent: 'group_a','stroke-width': '0','stroke-opacity': '1','fill': '#ff0000'}).data({'id': 'B8', 'building': 'B8'});
var B8 = rsr.path("M 314.28 173.65 314.3 178.38 315.53 178.38 315.68 208 289.14 208.13 288.92 164.11 315.45 163.98 315.5 173.65 314.28 173.65 z").attr({id: 'B8',class: 'cls-44',"clip-path": 'url(#clip-path)',parent: 'g4219','stroke-width': '0','stroke-opacity': '1','fill': '#ff0000'}).data({'id': 'B8', 'building': 'B8'});
     // Iterate through the building
     buildings.push(B8);

     buildings.push(B5);

for (var i = 0;
 i < buildings.length;
 i++) {

	// Change Yorkshire's fill colour to gold
    if (buildings[i].data('id') == 'B8') {
        buildings[i].node.setAttribute('fill', 'gold');
        buildings[i].mousedown(function(e){
        
            alert("Hello from Building 8");
    
        });
    }

    if (buildings[i].data('id') == 'B5') {
        buildings[i].node.setAttribute('fill', 'gold');
        buildings[i].mousedown(function(e){
        
            alert("Hello from Building 5");
    
        });
    }

    // Showing off
    buildings[i].mouseover(function(e){
		this.node.style.opacity = 0.7;

		document.getElementById('region-name').innerHTML = this.data('building');

	});


	buildings[i].mouseout(function(e){
		this.node.style.opacity = 1;

    });


    
    



}