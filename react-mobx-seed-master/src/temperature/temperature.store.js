import {action, observable, computed, transaction} from 'mobx';

/*
	4 basic concepts of mobx - 
	1. Actions
	 >> Any piece of code that modifies the state is an action.
	 >> @action is used to explicitly mark in our code, where actions lives.
	 >> action leads to reactions, as they modify the state which causes computed values to trigger if there is a reaction in place.
	 >> useStrict(true) is used to restrict updation of state apart from @actions annotated methods.
	 >> actions can be named,  these names show up in mobx dev tools (if we enable the changelog) 
	 >> Action automatically applies transaction.
	
	2. Observable state (piece of app state)
	3. Reaction
	>> never produce a value, they produce side effect.
	>> Side effect of observer decorator is that it flushes rendering to DOM.

	4. Computations-
	>> Derives itself from the observable state
	>> not allowed to have side effects i.e. changing state or making network requests. They should be pure functions
	>> By default, MobX does NOT try to keep the computed value upto date. The reason is mobX always try to defer computation of computed properties until they are needed to render/ or at some other place
	>> TO make a computed value reactive (or react to the state change), we have to consume them in mobX reactions.

	Best practice - find the smallest amount of state neeeded and derive the rest of info from it. 
*/

export class TemperatureStore {
    @observable unit = 'C';
    @observable temperatureCelsius = 25;


    @computed get temperatureKelvin() {
    	console.log("calculating kelvin");
    	return this.temperatureCelsius *(9/5) +32;
    }

    @computed get temperatureFarehn() {
    	console.log("calculating Farehn");
    	return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
    	console.log("calculating temperature");
    	switch(this.unit) {
    		case 'C' : return this.temperatureCelsius + 'C'; 
    		case 'K' : return this.temperatureKelvin+ 'K'; 
    		case 'F' : return this.temperatureFarehn+ 'F'; 
    	}
    }

    @action('sets temperature in celsius')
    setTemperatureCelsius(temp) {
		this.temperatureCelsius = parseInt(temp);
    }    

	@action
	setTemperatureUnit(unit) {
		this.unit = unit;
	}

	/* 
	  It will implement transaction. 
	   Above method is similar to 
       transaction(() => {t.temperatureCelsius =55; t.unit='K'})
       If we execute => t.temperatureCelsius =55; t.unit='K', there will be two reactions
       transaction ensures 1 reaction. 

	*/
	@action('set both celsius temp and unit')
	setTemperatureCelsiusAndUnit(temp, unit) {
		this.setTemperatureCelsius(temp);
		this.setTemperatureUnit(unit);
	}
	

}


let temperatureStore = new TemperatureStore();
// for debugging
window.temp = temperatureStore;
window.temp.transaction =transaction;

export default temperatureStore;
