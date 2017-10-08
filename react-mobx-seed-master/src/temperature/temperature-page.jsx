import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import DevTools from 'mobx-react-devtools';

@observer(['temperatureStore'])
export default class TemperaturePage extends React.Component {

	constructor(props) {
		super(props);
		this.setTemperature = this.setTemperature.bind(this);
		this.setUnit = this.setUnit.bind(this);
	}

	setTemperature(e) {
		const temp = e.target.value ? e.target.value : 0;
		this.props.temperatureStore.setTemperatureCelsius(temp);
	}

	setUnit(e) {
		this.props.temperatureStore.setTemperatureUnit(e.target.value);
	}

	render() {
		const temperature = this.props.temperatureStore.temperatureCelsius;
		const unit = this.props.temperatureStore.unit;
		return ( 
			<div>
				<DevTools />
				<div> Temperature in celsius - <input onChange={this.setTemperature} value={temperature} /> </div>
				<div> unit to convert to  - <input onChange={this.setUnit} value={unit} /> </div>
				<div> {this.props.temperatureStore.temperature} </div> 
			</div>
		)
	}
}

//reaction
/*const Temperature = observer(({temperatureStore})=> (
	<div>
		{temperatureStore.temperature}
	</div>
))*/
