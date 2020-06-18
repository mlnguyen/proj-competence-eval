import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import BasicInfo from "./BasicInfo"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Awards from "./Awards"
import './Profile.css'


class  Profile extends Component {


	render() {

		const basicInfo = {
			name: this.props.profile.name,
			occupation: this.props.profile.occupation,
			company: this.props.profile.company,
			trialN: this.props.trialN,
			image: this.props.profile.img,
		}

		const paperStyle = {
			paddingLeft: '40px',
			paddingRight: '40px',
			paddingTop: '20px',
			paddingBottom: '10px',
			marginBottom: '10px'
		}

		return (
			<div>

				<Paper elevation={1} style={paperStyle}> 
					<BasicInfo basicInfo={basicInfo} />	
				</Paper>

				<Paper elevation={1} style={paperStyle}> 
					<Education education={this.props.profile.education} />	
				</Paper>

				<Paper elevation={1} style={paperStyle}> 
					<Experience experience={this.props.profile.experience} />
				</Paper>

				<Paper elevation={1} style={paperStyle}> 
					<Skills skills={this.props.profile.skills} />
				</Paper>

				<Paper elevation={1} style={paperStyle}> 
					<Awards awards={this.props.profile.awards} />
				</Paper>
			</div>
		)
	}
}

export default Profile

