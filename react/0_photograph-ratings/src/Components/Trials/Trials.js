import React, { Component } from 'react';

import StyledButton from '../UI/StyledButton.js'
import Question from './Question.js'
import Warning from '../UI/Warning.js'
import '../../App.css'


class Trials extends Component {

	constructor (props) {
		super(props);
		this.state = {
			curTrial: 0,
			showWarning: false,
			data: {},
		}
		this.handleNextPage = this.handleNextPage.bind(this)
		this.handleAnswerChange = this.handleAnswerChange.bind(this)
	}

	handleNextPage (event) {
		const trialKey = 'trial' + String(this.state.curTrial).padStart(2,"0");
		const trialData = {...this.state.data[trialKey]}
		if (trialData.rating === undefined){
			this.setState({
				showWarning: true
			})
		}		
		else {
			if (this.state.curTrial+1 < this.props.trialOrder.length){			
				this.setState ({
					curTrial: this.state.curTrial+1,
					showWarning: false
				})
				this.props.updateProgress()
			}
			else {
				this.props.nextExpStage(event, this.state.data)
			}
			window.scrollTo(0,0)
		}
	}

	handleAnswerChange (event) {
		let data = {...this.state.data};
		const trialKey = 'trial' + String(this.state.curTrial).padStart(2,"0");
		const trialData = {
			rating: event.target.value,
			image: this.props.trialOrder[this.state.curTrial]
		}

		data[trialKey] = trialData;
		this.setState({
			data: data
		})
	}

	render () {	
		const imageKey = this.props.trialOrder[this.state.curTrial]
		const trialKey = 'trial' + String(this.state.curTrial).padStart(2,"0");
		const trialData = {...this.state.data[trialKey]}
		const image = <img src={this.props.images[imageKey].src} alt={imageKey} width='150px' />
		return (
			<div className="Page">
				{image}
				<br />
				<Question handleAnswerChange={this.handleAnswerChange} 
				          answer={trialData.rating}/>				
				<Warning showWarning={this.state.showWarning} text="Please answer all questions."/>

				<StyledButton text="Next" clicked={this.handleNextPage}/>

			</div>
		)
	}
}

export default Trials
