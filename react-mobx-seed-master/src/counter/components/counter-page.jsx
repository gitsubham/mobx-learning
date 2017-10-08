import React from 'react';
import {observer} from 'mobx-react';
import {computed, observable} from 'mobx';


@observer(['counterStore'])
export default class CounterPage extends React.Component {

	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}
	handleIncrement() {
		this.props.counterStore.increment();
	}

	handleDecrement() {
		this.props.counterStore.decrement();
	}

    render() {
        return (
        	<div> 
        		<button onClick={this.handleIncrement}> + </button>
        		<button onClick={this.handleDecrement}> - </button>
        		{this.props.counterStore.counter}
        	</div>
	        );
    }

}
