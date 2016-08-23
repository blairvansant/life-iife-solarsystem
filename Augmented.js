//1. getter/setter for closest stars to the sun
//2. getter/setter for age of solar system
//3. getter/setter for known dwarf planets






var SolarSystem =(function(newSolarSystem){
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["apple", "banana"]
                             //bite me is to let you know if augmented.js is linked
	newSolarSystem.greeting = "bite me";
	
		newSolarSystem.getStars = function(){
			return closestStars;
		};
		newSolarSystem.setStars = function(newStars){
			return closestStars = newStars;
			closestStars.push(newStars)
		}
		newSolarSystem.getAge = function(){
			return ageOfSolarSystem;
		}
		newSolarSystem.setAge =function(newAge){
			return ageOfSolarSystem = newAge;
			ageOfSolarSystem.push(newAge)
		}
		newSolarSystem.getDwarf = function(){
			return dwarfPlanets; 
		}
		newSolarSystem.setDwarf = function(){
			return dwarfPlanets = newDwarf;
			dwarfPlanets.push(newDwarf)
		}
	
	
    return newSolarSystem;

})(SolarSystem || {});