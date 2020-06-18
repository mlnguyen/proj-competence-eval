import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

import DemographicQs from './DemographicsQs';
import StyledButton from '../UI/StyledButton.js'
import Warning from '../UI/Warning.js'
import '../../App.css'

class Demographics extends Component {

	constructor (props) {
		super(props)
		this.state = {
			gender: '',
			age: '',
			ethnicity: '',
			race: {
				white: false, 
				black: false,
				indian: false,
				asian: false,

				pacificIslander: false,
				other: false},
			english: '',
			showWarning: false
		}
	}


	/* Function to check that all demographic questions have been answered. This
	function gets called when the participant clicks the next button */
	checkAnswers = () => {
		let unansweredQuestions = [];
		let answersCopy = {...this.state}
		
		// iterate through the state
		Object.keys(answersCopy).forEach(function(keyName) {
			//Because the race value is actually another object, need to iterate
			//through this object separately
			if (keyName === 'race') {
				let selectedRaces = [];
				let racesCopy = {...answersCopy.race};
				
				Object.keys(racesCopy).forEach(function(race) {
					if (racesCopy[race]){
						selectedRaces.push(race)
					}
				});

				if (selectedRaces.length === 0) {
					unansweredQuestions.push('race');
				};
							}	
			//Do nothing for show warning
			else if (keyName === 'showWarning') {
				//
			}
			//For all other key/values, check if empty.
			else {
				if (answersCopy[keyName] === '') {
					unansweredQuestions.push(keyName)
				}
			}
		})

		return (unansweredQuestions)
	}

	handleAnswerChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleCheckboxChange = (event) => {
		let userRace = {...this.state.race}
		userRace[event.target.name] = event.target.checked
		this.setState({
			race: userRace
		})
	}

	handleNextButton = (event) => {
		let missingQs = this.checkAnswers()

		if (missingQs.length > 0) {
			this.setState ({
				showWarning: true
			})
		}
		else {
			let demographics = {...this.state}
			delete demographics.showWarning
			this.props.clicked(event, demographics)

			this.setState ({
				showWarning: false
			})
		}
	}


	render () {
	
		return (
			<div className="Page">
				<Typography variant='headline'> Demographics </Typography>

				<DemographicQs 
					answers={this.state} 
					handleAnswerChange={this.handleAnswerChange}
					handleCheckboxChange={this.handleCheckboxChange}/>

				<Warning showWarning={this.state.showWarning} text="Please answer all questions."/>

				<StyledButton clicked={this.handleNextButton} text="Next"/>
			
	
			</div>
		)
	}
}

export default Demographics

