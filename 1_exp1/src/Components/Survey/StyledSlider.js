import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';


class StyledSlider extends Component {

	constructor(props) {
		super(props)
		this.state = {
			value: this.props.value,
			clicked: false
		}
	}

	handleChange = (event, value) =>{
		this.setState ({
			value: value,
			clicked: true
		})
		this.props.handleAnswerChange(event,value)
	}

	render () {
		let selectedValue = 'none'
		if (this.state.clicked){
			selectedValue = '$' + this.state.value.toLocaleString();
		}

		return (
			<div>
				<Typography variant='body1' align='center' style={{fontSize:'16px'}}>
					<strong> Selected: </strong> {selectedValue}
				</Typography>

				<Slider value={this.state.value} 
						onChange={this.handleChange} 
						min={this.props.min}
						max={this.props.max}
						step={this.props.step}
						style={{marginBottom:'0px'}}/>

				<Typography variant='body1' align='left' style={{float:'left'}}> 
					${this.props.min.toLocaleString()} 
				</Typography>
				<Typography variant='body1' align='right' style={{float:'right'}}> 
					${this.props.max.toLocaleString()} 
				</Typography>
			</div>
		)
	}
}

export default StyledSlider