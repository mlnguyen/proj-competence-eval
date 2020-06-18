import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoadingSpinner extends Component {

	render () {
		return (
			<div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            padding: "2em",
            boxSizing: "border-box"}} >
          	
          	<CircularProgress size={100} color="primary"/>
        	
        	</div>

		)
	}
}

export default LoadingSpinner