import React from "react"
import Typography from '@material-ui/core/Typography';

const DemographicQs = (props) => {
	return (
		<div>
		<Typography variant='body1' style={{fontSize:'16px'}}> 
			<strong> 1. What is your gender? </strong> <br/>
			<input 
				type="radio" 
				value="male"
				name="gender"
				checked={props.answers.gender === "male"}
				onChange={props.handleAnswerChange} /> 
				<label>Male</label><br />
			<input 
				type="radio" 
				value="female" 
				name="gender"
				checked={props.answers.gender === "female"}
				onChange={props.handleAnswerChange} /> 
				<label>Female</label> <br />
			<input 
				type="radio" 
				value="other" 
				name="gender"
				checked={props.answers.gender === "other"}
				onChange={props.handleAnswerChange} /> 
				<label>Other</label> <br />

			<br/>
			<strong> 2. What is your age? </strong> <br/>
			<input 
				type="text"
				value={props.answers.age}
				name="age"
				onChange={props.handleAnswerChange} /><br/>

			<br/>
			<strong> 3. What is your race? (Select all that apply) </strong> <br/>
			<input
				type="checkbox"
				name="white"
				checked={props.answers.race.white}
				onChange={props.handleCheckboxChange} />
				<label>White</label> <br />
			<input
				type="checkbox"
				name="black"
				checked={props.answers.race.black}
				onChange={props.handleCheckboxChange} />
				<label>Black or African-American</label> <br />
			<input
				type="checkbox"
				name="asian"
				checked={props.answers.race.asian}
				onChange={props.handleCheckboxChange} />
				<label>Asian or Asian-American</label><br />
			<input
				type="checkbox"
				name="indian"
				checked={props.answers.race.indian}
				onChange={props.handleCheckboxChange} />
				<label>American Indian or Alaska Native</label><br />
			<input
				type="checkbox"
				name="pacificIslander"
				checked={props.answers.race.pacificIslander}
				onChange={props.handleCheckboxChange} />
				<label>Native Hawaiian or Other Pacific Islander</label><br />
			<input
				type="checkbox"
				name="other"
				checked={props.answers.race.other}
				onChange={props.handleCheckboxChange} />
				<label>Other</label><br />

			<br/>
			<strong> 4. Are you Hispanic or Latinx? </strong> <br/>
			<input 
				type="radio"
				value="yes"
				name="ethnicity"
				checked={props.answers.ethnicity === "yes"}
				onChange={props.handleAnswerChange} />
				<label>Yes</label> <br />
			<input 
				type="radio"
				value="no"
				name="ethnicity"
				checked={props.answers.ethnicity === "no"}
				onChange={props.handleAnswerChange} />
				<label>No</label> <br />

			<br/>
			<strong> 5. Are you a native English speaker? </strong> <br/>
			<input 
				type="radio"
				value="yes"
				name="english"
				checked={props.answers.english === "yes"}
				onChange={props.handleAnswerChange} />
				<label>Yes</label> <br />
			<input 
				type="radio"
				value="no"
				name="english"
				checked={props.answers.english === "no"}
				onChange={props.handleAnswerChange} />
				<label>No</label> <br />
		</Typography>
		</div>
	)
}

export default DemographicQs
