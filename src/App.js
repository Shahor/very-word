import React, { Component } from 'react';
import './App.css';

import Dictionary from './dictionary'

const getOptions = () => {
	const dict = Object.keys(Dictionary)
	dict.unshift('__________')

	return dict.map((key, index) => {
		return <option className="word-option" 
			value={key} 
			key={index}
		>
			{key}
		</option>
	})
}

class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			result: 'Something!'
		}
	}

	onChange (event) {
		const { value } = event.target
		this.setState({
			value,
			result: Dictionary[value.toLowerCase()] || 'Something!'
		})
	}

	render() {
		const { value, result } = this.state
		const onChange = this.onChange.bind(this)

		return <section className="App">
			<div>
				<span>
					Don't say : Very
				</span>
				<select className="word-select default-font roboto"
					value={value} 
					onChange={onChange}
				>
					{getOptions()}
				</select>
			</div>
			<p>
				Say : {result}
			</p>
		</section>
	}
}

export default App;
