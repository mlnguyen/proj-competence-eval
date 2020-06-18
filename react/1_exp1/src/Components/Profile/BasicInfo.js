import React from "react"
import './Profile.css'
import Typography from '@material-ui/core/Typography';


function BasicInfo(props) {
    
    // const image = <img src={props.basicInfo.image.src} 
    //                    alt={props.trialN} 
    //                    border={['5px', 'outset']}/>

    return (
  		<div className="ProfileSection">

          <img src={props.basicInfo.image.src} alt={props.trialN}/>
      		<Typography variant='headline'> 
                <strong> {props.basicInfo.name} </strong>
            </Typography>
            
            <Typography variant='subheading' style={{marginBottom: '10px'}}> 
                <strong> {props.basicInfo.occupation} - {props.basicInfo.company} </strong>
            </Typography>	

        </div>
     
  );
}

export default BasicInfo;

