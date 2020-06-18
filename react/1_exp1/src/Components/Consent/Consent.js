import React, { Component } from "react"
import Typography from '@material-ui/core/Typography';

import ConsentText from './ConsentText.js'
import StyledButton from '../UI/StyledButton.js';
import Warning from '../UI/Warning.js';
import '../../App.css'

class Consent extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
			isChecked: false,
			showWarning: false
		}
	}

	checkboxHandler = () => {
		this.setState ({
			isChecked: !this.state.isChecked,
		})
	}

	nextButtonHandler = (event) => {
		if (this.state.isChecked) {
			this.props.clicked()
		}
		else {
			this.setState ({
				showWarning: true
			})
		}
	}

	render () {


		return (
			<div className='Page'>
				<ConsentText />
	
				<Typography variant='body1' style={{fontSize:'16px'}}>
					<input type="checkbox" 
						value="consent" 
						checked={this.state.isChecked}
						onClick={this.checkboxHandler} /> 

					<strong> I hereby give my consent to be the subject of your research. </strong>
				</Typography>
				
				<Warning showWarning={this.state.showWarning} text="Please give consent to continue."/>
 				
 				<Typography variant='body1' style={{fontSize:'16px'}}> 
 					{new Date().toLocaleDateString()} 
 				</Typography>

 				<StyledButton text="Next" clicked={this.nextButtonHandler}/>


			</div>
		)
	}
}

export default Consent