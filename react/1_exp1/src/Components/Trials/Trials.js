import React, { Component } from 'react';
import firebase from '../../Firebase/firebase.js'

import Profile from '../Profile/Profile.js'
import Survey from '../Survey/Survey.js'
import StyledButton from '../UI/StyledButton.js';
import Warning from '../UI/Warning.js';
import '../../App.css'

class Trials extends Component {

	constructor (props) {
		super(props);
		this.state = {
			hire: '',
			salary: '',
			sliderClicked: false,
			trialN: 0,
			showProfile: true,
			showWarning: false,
			data: {},	
			startTime: new Date().getTime(),
			profileTime: 0

		}
	}

	handleHireQuestion = (event) => {
		this.setState({
			hire: event.target.value
		})
		//console.log(event.target.value)
	}

	handleSalaryQuestion = (event,value) => {
		this.setState({
			salary: value,
			sliderClicked: true
		})
		//console.log(value)
	}

	saveAnswers = (subjResp, trialN) => {
		const dataRef = firebase.database().ref('data/' + this.props.userId + '/responses');
		let data = {};
		data['trial'+trialN] = subjResp
        dataRef.update(data)
        
	}

	handleNextPage = (event) => {
		// if we are currently displaying a profile (state.showProfile is true), then
		// when the user clicks the next button, we want to update the display with 
		// questions, which happens when state.showprofile is false
		let profileTime = 0
		if (this.state.showProfile) {
			profileTime = new Date().getTime() - this.state.startTime;					
			this.setState({
				showProfile: false,
				showWarning: false,
				trialN: this.state.trialN + 1,
				profileTime: profileTime,
			})
			window.scrollTo(0,0)

		} 

		// If we are in this section, then the survey questions are currently displayed on
		// the screen and the subject has clicked "next" to go to the next trial. 
		else {
			

			// First, we check if the subject answered all the questions on the page. If they
			// haven't, we add any unanswered questions to a new variable and update the state
			// to show a warning. This causes the page to render the warning message until the
			// subject clicks next again
			if (this.state.hire === '' || this.state.sliderClicked === false){
				this.setState ({
					showWarning: true
				})
			} 

			// If the subject has answered all the questions, then we update the state with
			// new trial data and turn off the show warning flag.
			else {
				const curTime = new Date().getTime();
				const totalTrialTime = curTime - this.state.startTime;
				const respTime = totalTrialTime - this.state.profileTime;

				// save answers
				const trialData = {
					hire: this.state.hire,
					salary: this.state.salary,
					trialN: this.state.trialN-1,
					stim: this.props.trialOrder[this.state.trialN-1],
					profileTime: this.state.profileTime/1000,
					respTime: respTime/1000,

				}

	  			let data = {...this.state.data}
		  		data[this.state.trialN-1] = trialData;

				this.setState( (state) => ({
		      		hire: '',
		      		salary: '',
					sliderClicked: false,
		      		showWarning: false,
		      		startTime: curTime,
		      		profileTime: 0,
		      		data: data

		    	}));

			 	// After updating the state, check if the trial number is less than
			 	// the total number of trials. If so, move on to the next trial. If not, then
			 	// the subject has finished all the trials.
			    if (this.state.trialN + 1 <= this.props.totalTrials){
			    	this.setState({
			    		showProfile: true
			    	})
			    	this.props.updateProgress()
			    	window.scrollTo(0,0)

			    } else {
			    	this.props.nextStage(event, data);
			    }
			}
		}		
	}


	render () {
		let trialState = null
		let warning = null
	

		if (this.state.showProfile) {
			const profileKey = this.props.trialOrder[this.state.trialN][0]
			const profile = this.props.stimuli[profileKey]
				trialState = (<Profile profile={profile} 
								   trialN={this.state.trialN}/>)
		} 
		else {
			const profileKey = this.props.trialOrder[this.state.trialN-1][0]
			const profile = this.props.stimuli[profileKey]
			trialState = (<Survey hireAnswer={this.state.hire} 
								  handleHireQuestion={this.handleHireQuestion}
								  handleSalaryQuestion={this.handleSalaryQuestion}
								  image={profile.img}/>
			)
			warning = (<Warning showWarning={this.state.showWarning} 
								text="Please answer all questions."/>)
		}

		
		return (
			<div className="Page">
				{trialState}
				{warning}
				<StyledButton text="Next" clicked={this.handleNextPage}/>
			</div>
		)
	}
}



export default Trials