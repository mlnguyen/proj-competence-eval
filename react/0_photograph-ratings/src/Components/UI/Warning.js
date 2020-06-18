import React from 'react'
import Typography from '@material-ui/core/Typography';

const Warning = (props) => {

	let style = {
		color: 'white',
		fontSize: '16px',
		fontWeight: 'bold'
	}
	let text = '.'

	if (props.showWarning) {
		style.color = 'red'
		text = props.text
	} 


	return (
		<div>
			<Typography variant='body1' align='center' style={style}> 
			{text}
			</Typography>
		</div>
	)
}

export default Warning

