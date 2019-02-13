import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import StyledButton from './StyledButton.js';
import firebase from '../../Firebase/firebase.js'


class FirebaseError extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler () {
        const dataRef = firebase.database().ref('backup/' + this.props.userId);
        const saveData = {
            userInfo: this.props.demographics,
            responses: this.props.subjResponses
        }


        dataRef.set(saveData).then(() => {
            console.log('save successful!')
            this.props.clicked()
        })
        .catch((error) => {
            console.log('error')
        })
    }

	render () {
		return (
            <div className="Page">
            <Typography variant='headline'> Oops! </Typography>
            <br/>
            <Typography variant='body1' style={{fontSize:'16px'}}> 
                
                <strong> Oops, something went wrong. Don't refresh the page! </strong>

                <br/>
                If this is the first time you're seeing this message, retry by clicking
                the button below. If this error persists, return to MTurk and enter
                your Amazon worker ID in place of a secret key. Take a screenshot of the 
                error message below and send it to the researcher at mlnguyen@princeton.edu.

                <br/> <br/> 
                {this.props.errorMsg}
                <br />

                <StyledButton text="Try again" clicked={this.clickHandler}/>

            </Typography>

        	</div>

		)
	}
}

export default FirebaseError