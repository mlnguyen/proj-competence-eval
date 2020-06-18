import React from "react"
import Typography from '@material-ui/core/Typography';

const ConsentText = () => {
	return (
		<div>
			<Typography variant="headline"> ADULT CONSENT FORM </Typography>
			<Typography variant="headline"> Princeton University </Typography>
				
			<br />
			
			<Typography variant="body1" style={{fontSize:'16px'}}>
		 
				TITLE OF RESEARCH: <em> First impressions of others </em> <br /> 
				PRINCIPAL INVESTIGATOR: <em> Alex Todorov (atodorov@princeton.edu) </em> <br />
				PRINCIPAL INVESTIGATOR’S DEPARTMENT: <em> Psychology </em><br />	
				
				<br /> 
				You are being invited to take part in a research study being conducted 
				by the Todorov Lab in the Department of Psychology at Princeton University. 
				Before you decide to participate in this study, it is important that you 
				understand why the research is being done and what it will involve. Please 
				take the time to read the following information carefully, as it contains 
				important information about the study and your rights as a research 
				participant. <br />

				<br />
				<strong> Purpose of the research: </strong> <br />
				You have been asked to participate in a study to learn more how we use 
				different pieces of information to form and update impressions of other 
				people. <br />
				
				<br />
				<strong> Study Procedures: </strong> <br />
				If you choose to participate in this study, you will be asked to view images 
				of people and/or read text such as phrases, sentences, stories, or reports 
				about people on a computer. After viewing the images and/or text, you may be 
				asked to answer various questions about the stimuli. For example, you may be 
				asked to make judgements about the people in the images and/or text. You may 
				also be asked to complete additional questionnaires that measure your memory 
				for stimuli, your confidence in your ratings, or implicit/explicit biases. <br />
				
				<br />
				Your total expected time commitment for this study is 15 – 60 minutes. <br />
			
				<br />		
				<strong> Benefits and Risks: </strong> <br />
				There are no foreseeable benefits and/or risk to taking part in this study 
				other than what is typical of daily life. <br />

				<br />		
				<strong> Confidentiality: </strong> <br />
				All records from this study will be kept confidential. Your responses will 
				be kept private, and we will not include any information that will make it 
				possible to identify you in any report we might publish. Research records 
				will be stored securely in a locked cabinet and/or on password-protected 
				computers. The research team will be the only party that will have access to 
				your data. <br />

				<br />
				Anonymous data (without your name) may be presented at research meetings and
				published in research journals. <br />

				<br />
				<strong> Compensation: </strong> <br />
				You will be paid $3/hour (prorated) for participation.
			</Typography>

			<hr />

			<Typography variant="body1" style={{fontSize:'16px'}}>
				<strong> Who to contact with questions: </strong> 
			</Typography>
				<ol> 
				<Typography variant="body1" style={{fontSize:'16px'}}>

					<li>PRINCIPAL INVESTIGATOR: <br /> </li>
					Alex Todorov, Professor of Psychology <br />
					Phone: 609-258-7463 <br />
					Email: atodorov@princeton.edu <br />
					<br />

					<li>  RESEARCHER: <br /> </li>
					Mai Nguyen, Graduate Student <br />
					Email: mlnguyen@princeton.edu <br />
					<br />

					<li> If you have questions regarding your rights as a research subject, 
					or if problems arise which you do not feel you can discuss with the 
					Investigator, please contact the Institutional Review Board at: <br /> </li>
					Assistant Director, Research Integrity and Assurance <br />
					Phone: (609) 258-8543 <br />
					Email: irb@princeton.edu <br />
				</Typography>
				</ol>

			<hr />

			<Typography variant="body1" style={{fontSize:'16px'}}>
				I understand the information that was presented and that:
			</Typography>

			<ol type="A">
				<Typography variant="body1" style={{fontSize:'16px'}}>
					<li> My participation is voluntary, and I may withdraw my consent and 
					discontinue participation in the project at any time.  My refusal to 
					participate will not result in any penalty. </li>
					<br />
					<li>I do not waive any legal rights or release Princeton University, its 
					agents, or you from liability for negligence. </li>
				</Typography>
			</ol>
		</div>
	)
}

export default ConsentText