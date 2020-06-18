import React, { Component} from "react"

import Typography from '@material-ui/core/Typography';

import StyledButton from '../UI/StyledButton.js'
import '../../App.css'


class Instructions extends Component {
	render () {

		return (
			<div className="Page">
			
				<Typography variant="headline"> Study information </Typography> <br />
				
				<Typography variant="body1" style={{fontSize:'16px'}}>
				Thank you for agreeing to participate in this study. In this study, we are
				interested in understanding how people make judgements about other people based
				on different types of information.
				<br />
				<br />
				During this study, you will view pictures of different people. You will then
				rate each person on how COMPETENT they look on a 9-point scale. Some of the 
				photos may be repeated. 
				<br />
				<br />
				This entire study should take approximately 5-10 minutes and pays $0.75. Please 
				complete the entire study in one sitting in a quiet environment. If possible, 
				please do not use a mobile device with a small screen to complete this study. 
				<br />
				<br />
				When you are ready to begin, click the start button below. 
				</Typography>

				<StyledButton text="Start" clicked={this.props.clicked}/>

 			</div>
	)
	}
}


export default Instructions