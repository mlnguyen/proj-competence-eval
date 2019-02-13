import React from "react"
import './Profile.css'
import Typography from '@material-ui/core/Typography';

function Experience(props) {

    const experience = (
        props.experience.map(function(entry){
            return (
                <div key={entry.id}>
                    <Typography variant='body1' style={{fontSize:'16px'}}>
                        <strong> {entry.title} </strong> | {entry.company} <br />
                        <em> {entry.location} </em> | <em> {entry.dates} </em> <br />
                    </Typography>

                    <ul>
                        <Typography variant='body1' style={{fontSize:'16px'}}>
                        {entry.description.map(function(item, n){
                          return (
                                <li key={n}> {item} </li> 
                          )
                        })}
                        </Typography>
                    </ul>
                </div>
          )
    }))

    return (
        <div className='ProfileSection'> 
            <Typography variant='title'> <strong> Experience </strong> </Typography>
            {experience}
        </div>
    );
}


export default Experience;




