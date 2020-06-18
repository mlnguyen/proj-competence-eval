import React from "react"
import './Profile.css'
import Typography from '@material-ui/core/Typography';

function Awards(props) {

    let awards = "none"
    
    if (props.awards !== "none") {
        awards = (
            props.awards.map(function(item) {
                return (
                  <div key={item.id}> 
                    <Typography variang='body1' style={{fontSize:'16px'}}>             
                        <li> {item.name} | <em> {item.date} </em> </li>
                    </Typography>
                  </div>
                )
        }))
    }

  return (
        <div className='ProfileSection'> 
            <Typography variant='title'> <strong> Awards </strong> </Typography>     
            <ul>
                {awards}
            </ul>
        </div>
  );
}

export default Awards;
