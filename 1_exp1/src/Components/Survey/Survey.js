import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Likert from './Likert.js'
import StyledSlider from './StyledSlider.js'

import '../../App.css'

class Survey extends Component {

	constructor(props) {
		super(props)
		this.state = {
			sliderValue: 85000
		}
	}

	render () {
		const QuestionStyle = {
			fontWeight: 'bold',
  			textAlign: 'left',
  			paddingBottom: '0px',
  			fontSize: '16px'
		}

		const imageStyle = {
			width: '200px',
		  	height: '200px',
			border: '2px solid #dddd',
			display: 'block',
		    margin: '0 auto',
		}

		return (
			<div className='Page'>
			<Grid container direction='column' alignItems='center'>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>   

            	<img src={this.props.image.src} alt={this.props.trialN} style={imageStyle}/>
			    <br/>
			    <Typography variant='body1' style={QuestionStyle}> 
			    	1. How likely are you to hire this person as a Senior Marketing Manager?
			    </Typography>
				<Likert
					answer={this.props.hireAnswer}
					handleAnswerChange={(event) => this.props.handleHireQuestion(event, 0)}
					buttonText={[
						'1 Extremely unlikely', 
						'2',
						'3',
						'4', 
						'5 Neutral',
						'6', 
						'7',
						'8',
						'9 Extremely likely']}/>

				<br/> <br/>
				
				<Typography variant='body1' style={QuestionStyle}> 
		    		2. What salary would you offer this person?
		    	</Typography>
		    	<Typography variant="body1" style={{fontSize:'16px'}}>
		    		The average salary for this position is $85,000, and most people with 
		    		this job earn between $60,000 and $110,000.
		    	</Typography>
		    	<br/>
		    	<StyledSlider 
		    		value={this.state.sliderValue}
		    		min={50000}
		    		max={120000}
		    		step={500} 
		    		handleAnswerChange={(event,value) => 
		    			this.props.handleSalaryQuestion(event,value)}/>

			</Grid>
			</Grid>
			</div>
	)}

}

export default Survey
