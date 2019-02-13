import React, { Component} from "react"
import Typography from '@material-ui/core/Typography';

import StyledButton from '../UI/StyledButton.js'
import '../../App.css'


class Debrief extends Component {

	render () {
	return (
		<div className="Page">

			<Typography variant='headline'> Study debriefing </Typography>
			<br/>
			<Typography variant='body1' style={{fontSize:'16px'}}>
				TITLE OF RESEARCH: <em> First impressions of others </em> <br /> 
				PRINCIPAL INVESTIGATOR: <em> Alex Todorov (atodorov@princeton.edu) </em> <br />
				PRINCIPAL INVESTIGATOR’S DEPARTMENT: <em> Psychology </em>			
			</Typography>
		
			<br/> 
			<Typography variant='body1' style={{fontSize:'16px'}}>
				Thank you for completing our experiment! Below, you can find more information 
				about the study you just participated in as well as contact information for the 
				esearchers if you have further questions about the study. <br/> <br/>

				<strong> Purpose of the study </strong> <br/>
				There is a lot of evidence that people rapidly and reliably form impressions of 
				thers based solely on their appearance. In this work, we are trying to understand 
				how we combine these appearance-based first impressions with new information that 
				may imply different traits. Ultimately, we want to understand the consequences of 
				these impressions in real-life scenarios. <br/> <br/>

				<strong> Hypothesis </strong> <br/>
				The main hypothesis of this work is that first impressions will continue to bias 
				later impressions and that this may have real-world consequences. For example, if 
				someone is first judged to be incompetent, they may still be viewed as incompetent
				even when there is evidence to the contrary. <br/> <br/>

				<strong> How is this being tested? </strong> <br/>
				In this study, we asked you to view images of people and/or read text about people,
				and then making judgements about them. We may also have asked you to use these
				judgements to make different kinds of decisions about people, such as whether or
				not to interview them for a job. <br/> <br/>
			</Typography>

			<Typography variant='body1' style={{fontSize:'16px'}}>
				<strong> More information </strong> <br/>
				You can find more information about these questions in these papers:
			</Typography>
			<ul style={{marginTop:'0px'}}> 
				<Typography variant='body1' style={{fontSize:'16px'}}>
					<li>Willis & Todorov. (2006). First impressions: Making up your mind after 
					a 100-ms exposure to a face. Psychological Science, 17(7): 592-598. </li>
					<li>Ballew & Todorov. (2007). Predicting political elections from rapid and 
					unreflective face judgements. PNAS. 104(46): 17948-17953. </li>
				</Typography>
			</ul>

			<Typography variant='body1' style={{fontSize:'16px'}}>
				<strong> Contact information </strong> <br/>
			</Typography>
			<ul style={{marginTop:'0px'}}> 
				<Typography variant='body1' style={{fontSize:'16px'}}>
					<li> PRINCIPAL INVESTIGATOR: </li> 
						Alex Todorov, Professor of Psychology <br/>
						Phone: 609-258-7463 <br/>
						Email: todorov@princeton.edu <br/>
					<li> If you have questions regarding your rights as a research subject, 
					or if problems arise which you do not feel you can discuss with the 
					Investigator, please contact the Institutional Review Board at: <br />
						 Assistant Director, Research Integrity and Assurance<br />
						 Phone: (609) 258-8543<br />
						 Email: irb@princeton.edu</li>
				</Typography>
			</ul>
			
			<StyledButton text="Finish" clicked={this.props.clicked}/>


		</div>
	)}
}

export default Debrief