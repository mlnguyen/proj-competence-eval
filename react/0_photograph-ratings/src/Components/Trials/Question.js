import React from 'react'
import Typography from '@material-ui/core/Typography';
import './Trials.css'

const Question = (props) => {

	const QuestionStyle = {
		fontWeight: 'bold',
  		textAlign: 'center',
  		paddingBottom: '20px',
  		fontSize: '16px'
	}

	return (
		<div>

	    <Typography variant='body1' style={QuestionStyle}> How competent? </Typography>
	    
	    <ul className='likert'>
	    	<Typography variant='body1' style={{fontSize:'16px'}}>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="1" 
		    		checked={props.answer === "1"}
					onChange={props.handleAnswerChange} /> 
		        <label>1 Extremely incompetent </label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="2" 
		    		checked={props.answer === "2"}
					onChange={props.handleAnswerChange} /> 
		        <label>2</label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="3" 
		    		checked={props.answer === "3"}
					onChange={props.handleAnswerChange} /> 
		        <label>3</label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="4" 
		    		checked={props.answer === "4"}
					onChange={props.handleAnswerChange} /> 
		        <label> 4 </label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="5" 
		    		checked={props.answer === "5"}
					onChange={props.handleAnswerChange} /> 
		        <label>5 Neutral</label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="6" 
		    		checked={props.answer === "6"}
					onChange={props.handleAnswerChange} /> 
		        <label>6</label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="7" 
		    		checked={props.answer === "7"}
					onChange={props.handleAnswerChange} /> 
		        <label>7</label>
		    </li>
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="8" 
		    		checked={props.answer === "8"}
					onChange={props.handleAnswerChange} /> 
		        <label>8</label>
		    </li>				    				    				    				    
		    <li>
		    	<input 
		    		type="radio" 
		    		name="likert" 
		    		value="9" 
		    		checked={props.answer === "9"}
					onChange={props.handleAnswerChange} /> 
		        <label>9 Extremely competent</label>
		    </li>
		    </Typography>
	    </ul>
	</div>
	)
}

export default Question