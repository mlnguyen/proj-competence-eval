import React from 'react'
import Button from '@material-ui/core/Button';


const StyledButton = (props) => {
	const styleButton = {
		marginTop: '10px',
		marginBottom: '10px',
		float: 'right',
		clear: 'left'
	}

	return (						
		<Button 
			style={styleButton}
			variant="contained"
			color="primary"
			size="medium"
			onClick={props.clicked}> 
		{props.text} 
		</Button>

	);
}

export default StyledButton