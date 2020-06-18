import React from "react"
import Typography from '@material-ui/core/Typography';

import '../../App.css'

const Finish = (props) => {

	return (
		<div className="Page">
		
		<Typography variant='headline'> Thank you! </Typography> <br/>
		<Typography variant='body1' style={{fontSize:'16px'}}>
			Thank you for completing the study! Please return to Amazon Mechanical Turk and
			enter the secret key displayed below for payment. If the key did not appear, please 
			enter your MTurk ID instead. You should receive payment for completing the study
			within 1-2 days.
		</Typography>

		<br/> 
		<Typography variant='body1' align='center' style={{fontSize: '16px'}}>
			<strong> SECRET KEY: {props.secretKey} </strong>
		</Typography>
		
		</div>

	)
}

export default Finish