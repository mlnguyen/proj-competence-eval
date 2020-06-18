import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import './App.css'
import firebase from './firebase/firebase.js';
import Consent from './Components/Consent/Consent.js'
import Debrief from './Components/Debrief/Debrief.js'
import Demographics from './Components/Demographics/Demographics.js'
import Finish from './Components/Finish/Finish.js'
import Instructions from './Components/Instructions/Instructions.js'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner.js'
import Trials from './Components/Trials/Trials.js'


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        progress: 0,
        expStage: 'consent',
        userID: '',
        secretKey: '',
        date: '',
        startTime: '',
        trialOrder: '',
        numTrials: 53,
        images: {},
        data: {},
        demographics: {}
    } 
    this.changeExpStageHandler = this.changeExpStageHandler.bind(this)
    this.preloadImages = this.preloadImages.bind(this)
    this.randomizeTrials = this.randomizeTrials.bind(this)
    this.saveAnswers = this.saveAnswers.bind(this)
    this.initUserData = this.initUserData.bind(this)
    this.updateProgress = this.updateProgress.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

    initUserData (userID) {        
        const userDataRef = firebase.database().ref('data/' + userID)
        const secretKey = Math.floor(Math.random() * 100000);

        const userData = {
            status: "active",
            secretKey: secretKey
        }

        userDataRef.set(userData)

        this.setState ({
            secretKey: secretKey,
            date: new Date().toLocaleDateString(),
            startTime: new Date().toLocaleTimeString()
        })
    }

    randomizeTrials () {
        let trialOrder = [...Array(this.state.numTrials+1).keys()].slice(1);
        let repeatOrder = this.shuffle([...trialOrder]);

        let allTrials = this.shuffle(trialOrder.concat(repeatOrder.slice(0,20)))

        this.setState({
            trialOrder: allTrials
        })
    }

    shuffle (array) {
        let origArray = [...array];
        let shuffledArray = [];
        for (let i=0; i<array.length; i++) {
            let randomIndex = Math.floor(Math.random() * origArray.length);
            let newValue = origArray[randomIndex]

            if (i > 0){
                while (newValue === shuffledArray[i-1]) {
                    randomIndex = Math.floor(Math.random() * origArray.length);
                    newValue = origArray[randomIndex];
                }
            }
            shuffledArray.push(newValue);
            origArray.splice(randomIndex, 1);
        }
        return shuffledArray;
    }

    preloadImages () {
        let images = {};
        const storageRef = firebase.storage().ref();

        for (let i=1; i<= this.state.numTrials; i++) {
            let imageRef = storageRef.child(i + '.jpg')
            
            imageRef.getDownloadURL().then(url => {   
                let image = new Image();
                image.src = url;
                images[imageRef.name.slice(0, -4)] = image

                if (Object.keys(images).length === this.state.numTrials) {
                  this.setState ({
                    expStage: 'instructions',
                    images: images,
                  })
            }}) 
        }
    }

    saveAnswers (data) {
        const dataRef = firebase.database().ref('data/' + this.state.userID);
        const trialData = {...this.state};
        delete trialData.expStage;
        delete trialData.images;
        delete trialData.numTrials;
        trialData['demographics'] = data;
        trialData['endTime'] = new Date().toLocaleTimeString();
        trialData['status'] = 'completed';
        trialData['progress'] = 100;

        dataRef.update(trialData).then( () => {
            this.setState ({
                expStage: 'debrief'
            })
        })
    }

    updateProgress () {
        this.setState({
            progress: this.state.progress + (90/(this.state.numTrials+20))
        })
    }


    changeExpStageHandler (event, data) {
        if (this.state.expStage === 'consent'){
            this.setState ({
                userID: data,
                expStage: 'loading',
                progress: 2
            })

            this.randomizeTrials();
            this.preloadImages();
            this.initUserData(data) 

            window.scrollTo(0,0)
        } else if (this.state.expStage === 'instructions'){
            this.setState ({
              expStage: 'trials',
              progress: 4
            })
            window.scrollTo(0,0)
        } else if (this.state.expStage === 'trials'){
            this.setState ({                                                        
              expStage: 'demographics',
              data: data,
              progress: 96
            })
            window.scrollTo(0,0)
        } else if (this.state.expStage === 'demographics') {
            this.setState ({
              expStage: 'loading',
              demographics: data,
              progress: 98
            });
            this.saveAnswers(data)
            window.scrollTo(0,0)
        } else if (this.state.expStage === 'debrief'){
            this.setState ({
                expStage: 'finish',
                progress: 100,
            })
        }
    }

    render() {
        let expStage = null;

        if (this.state.expStage === 'loading'){
            expStage = (<LoadingSpinner />)
        } 
        else if (this.state.expStage === 'consent'){
            expStage = (<Consent clicked={(event, userID) =>
                                    this.changeExpStageHandler(event, userID)}/>)
        } 
        else if (this.state.expStage === 'instructions') {
            expStage = (<Instructions clicked={this.changeExpStageHandler}/>)
        } 
       
        else if (this.state.expStage === 'trials'){
            expStage = (<Trials trialOrder={this.state.trialOrder} 
                                images={this.state.images}
                                updateProgress={this.updateProgress}
                                nextExpStage={(event, data) => 
                                    this.changeExpStageHandler(event, data)}/>)
        } 
        
        else if (this.state.expStage === 'demographics') {
            expStage = (<Demographics clicked={(event,demographics) => 
                            this.changeExpStageHandler(event, demographics)} />)    
        } 
        else if (this.state.expStage === 'debrief') {
            expStage = (<Debrief clicked={this.changeExpStageHandler}/>)
        }
        else if (this.state.expStage === 'finish') {
            expStage = (<Finish secretKey={this.state.secretKey}/>)
        }

    return (  

        <div className="Page">

            <CssBaseline />
            <Grid container direction='column' alignItems='center'>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={6}>
                {expStage}  
                <br /> <br /> 
                <LinearProgress variant="determinate" value={this.state.progress} />
            </Grid>
            </Grid>


            
        </div>
    );
  }
}

export default App;
//            <SmallScreenWarning />
// style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}
