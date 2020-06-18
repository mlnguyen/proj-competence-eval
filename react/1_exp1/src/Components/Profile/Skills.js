import React from "react"
import './Profile.css'
import Typography from '@material-ui/core/Typography';

function Skills (props) {


    const skills = (
        props.skills.map(function(item,n) {
          return(
            <div key={n}>
                <Typography variant='body1' style={{fontSize:'16px'}}>
                    <li> {item} </li>
                </Typography>
            </div>
          )
        })
    )

  return (
    <div className='ProfileSection'>      
        <Typography variant='title'> <strong> Skills </strong> </Typography>
        <ul>
            {skills}
        </ul>
    </div>
  );
}

export default Skills;
