//1. make public property for holding the last modified date
//2. make a getter/setter for planets
//3. make a getter/setter for activeSpacecraft
//4. make a getter/setter for planetsLandedOn


var SolarSystem = (function(){
	var planets = ["Earth", "Venus", "Mars"];
	var activeSpacecraft = ["voyager", "cassini", "hubble"];
	var planetsLandedOn = 9;
return{
	modified_Date: new Date(),
			getPlanet: function(){
				return planets;
			},
			setPlanet: function(newPlanets){
				return planets = newPlanets;
			    planets.push(newPlanets);	
			},
			getActiveSpacecraft: function(){
				return activeSpacecraft;
			},
			setActiveSpacecraft: function(newActiveSpacecraft){
				activeSpacecraft.push(newActiveSpacecraft);
			},
			getPlanetsLandedOn: function(){
				return planetsLandedOn;
			},
			setPlanetsLandedOn: function(newPlanetsLandedOn){
				planetsLandedOn.push(newPlanetsLandedOn);
			}
		

}
})();