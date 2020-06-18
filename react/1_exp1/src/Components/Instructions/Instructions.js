import React, { Component} from "react"
import Typography from '@material-ui/core/Typography';

import StyledButton from '../UI/StyledButton.js';
import '../../App.css'


class Instructions extends Component {

	constructor(props) {
		super(props)
		this.state = {
			sliderValue: 85000
		}
	}

	render () {
		return (
			<div className="Page">
				<Typography variant='headline'> Study information </Typography>
				<br/>
				<Typography variant='body1' style={{fontSize:'16px'}}> 
					Thank you for agreeing to participate in this study. In this study, we are
					interested in understanding how people evaluate resumes and other online 
					information about potential job candidates. 
					
					<br/><br/>
					During the study, you will be evaluating the resumes of potential job
					candidates for a position as a Senior Marketing Manager 
					at a retail company based in the midwest. The average salary for this position
					in the midwest is approximately $85,000, with a typical range of $60,000 - 
					$120,000.
					
					<br/><br/>
					You will review the resume of each candidate. Take as long as you need to form 
					an impression of the candidate. On the next page, you will then be asked to how
					likely you would be to hire the candiate and what salary you would offer them.

					<br/><br/>
					This entire study should take approximately 30 minutes and pays $1.50. Please 
					complete the entire study in one sitting in a quiet environment. If possible, 
					please do not use a mobile device with a small screen to complete this study. 
					
					<br/><br/>
					When you are ready to begin, click the start button below. 
				</Typography>

 				<StyledButton text="Start" clicked={this.props.clicked}/>

 			</div>
	)
	}
}


export default Instructions