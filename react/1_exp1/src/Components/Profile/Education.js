import React from "react"
import './Profile.css'
import Typography from '@material-ui/core/Typography';

function Education(props) {
    const education = (
        props.education.map(function(entry){
          return (
            <div key={entry.id}>
                <Typography variant='body1' style={{fontSize:'16px'}}>
                    <strong> {entry.degree} </strong>| <em> {entry.school} </em>
                </Typography>

                <ul>
                <Typography variant='body1' style={{fontSize:'16px'}}>
                    <li> {entry.dates} </li>
                    <li> GPA: {entry.gpa} </li>
                </Typography>
                </ul>
            </div>
          )
     }))

    return (
        <div className='ProfileSection'> 
            <Typography variant='title'> <strong> Education </strong> </Typography>
            {education}
        </div>
      );
}


export default Education;

