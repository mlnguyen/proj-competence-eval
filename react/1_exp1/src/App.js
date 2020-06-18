import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import './App.css';
import firebase from './Firebase/firebase.js'
import queryString from "query-string"
import expParams from './Stimuli/expParams.json'

import Consent from './Components/Consent/Consent.js';
import Demographics from './Components/Demographics/Demographics.js'
import Debrief from './Components/Debrief/Debrief.js'
import Finish from './Components/Finish/Finish.js'
import FirebaseError from './Components/UI/FirebaseError.js'
import Instructions from './Components/Instructions/Instructions.js';
import LoadingSpinner from './Components/UI/LoadingSpinner.js'
import Trials from './Components/Trials/Trials.js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        expStage: 'loading',
        nTrials: 24,
        trialOrder: [],
        stimuli: {},
        images: {},
        userId: '',
        secretKey: '',
        subjResponses: {},
        demographics: {},
        data: {},
        date: '',
        startTime: '',
        error: '',
        progress: 0,
    }
    this.changeExpStageHandler = this.changeExpStageHandler.bind(this)
    this.saveAnswers = this.saveAnswers.bind(this)
    this.randomizeTrials = this.randomizeTrials.bind(this)
    this.loadProfiles = this.loadProfiles.bind(this)
    this.loadImages = this.loadImages.bind(this)
    this.updateProgress = this.updateProgress.bind(this)
  }

    componentDidMount () {

        let condList = [];

        // Load profile data
        let profilePromise = this.loadProfiles();

        // After loading profile data, load image data
        profilePromise.then((profileData) => {
            const groupN = expParams['group']
            const imgPromises = Object.keys(profileData).map((key, index) => {
    
                const cond = expParams[key]['group'+groupN];
                const imgName = expParams[key]['photo'+groupN];

                condList.push([key, imgName, cond])
                return this.loadImages(imgName, profileData[key])
            });

            //after loading all the image data, update the profile data with imgs
            Promise.all([...imgPromises]).then((results) => {  
                let updatedProfileData = {};
                results.forEach((profile) => {
                    updatedProfileData[profile.id] = profile;
                })

                //randomize trials
                const trialOrder = this.randomizeTrials(condList)

                // initialize user data
                this.initUserData(this.state.userId)

                //update state
                this.setState({
                    expStage: 'consent',
                    stimuli: updatedProfileData,
                    trialOrder: trialOrder,
                })
             });
    })}

    initUserData () {        
        
        //Generate secret key
        const secretKey = Math.floor(Math.random() * 100000);

        //Generate subjid
        const UrlData = queryString.parse(window.location.search)
        let userId = UrlData.workerId || secretKey

        userId = userId + Math.floor(Math.random() * 100000); //just in case
        this.setState ({
            secretKey: secretKey,
            date: new Date().toLocaleDateString(),
            startTime: new Date().toLocaleTimeString(),
            userId: userId
        })
    }

    loadProfiles () {
        const databaseRef = firebase.database().ref('stimuli');
        return (
            databaseRef.once('value').then( response => {
                return response.val();
            })
       )
     }


    loadImages (imgName, profile) {
        const storageRef = firebase.storage().ref();
        let imageRef = storageRef.child(imgName)
        return (
            imageRef.getDownloadURL().then(url => {
                let image = new Image();
                image.src = url;
                profile.img = image;
                return profile
    
            })
        )
     }


    randomizeTrials (trialList) {

        let trialOrder = [...trialList];

        // shuffle list to give trial order
        let currentIndex = trialOrder.length, temporaryValue, randomIndex;        
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = trialOrder[currentIndex];
            trialOrder[currentIndex] = trialOrder[randomIndex];
            trialOrder[randomIndex] = temporaryValue;
        }
        return trialOrder
}

    saveAnswers (data) {
        const dataRef = firebase.database().ref('data/group' + expParams['group'] + '/' + this.state.userId);

        // Add fields
        data['secretKey'] = this.state.secretKey;
        data['status'] = "completed"
        data['date'] = this.state.date
        data['startTime'] = this.state.startTime
        data['finishTime'] = new Date().toLocaleTimeString();

        // Create save object
        const saveData = {
            userInfo: data,
            responses: this.state.subjResponses
        }

        dataRef.set(saveData).then(() => {
            console.log('save successful!')
        })
        .catch((error) => {
            this.setState({
                expStage: 'firebaseError',
                error: 'Message: ' + error,
            })
        })  
    }

    updateProgress () {
        this.setState({
            progress: this.state.progress + (90/(this.state.nTrials))
        })
    }

    changeExpStageHandler (event, data) {
        if (this.state.expStage === 'consent'){
            this.setState ({
                expStage: 'instructions',
                progress: 1
            })
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
                  subjResponses: data,
                  progress: 96
            })
            window.scrollTo(0,0)
        } else if (this.state.expStage === 'demographics') {
            this.setState ({
                  expStage: 'debrief',
                  demographics: data,
                  progress: 98
            });
            this.saveAnswers(data);
            window.scrollTo(0,0)
        } else if (this.state.expStage === 'firebaseError') {
            this.setState ({
                  expStage: 'debrief',
                  progress: 98
    
            });
            window.scrollTo(0,0)
        }
        else if (this.state.expStage === 'debrief') {
            this.setState ({
                expStage: 'finish',
                progress: 100,
            })
            window.scrollTo(0,0)
        }
    }

    render() {
        let expStage = null;
        if (this.state.expStage === 'loading'){
            expStage = (<LoadingSpinner/>)
        }
        else if (this.state.expStage === 'consent') {
            expStage = (<Consent clicked={this.changeExpStageHandler} />);
        } 
        else if (this.state.expStage === 'instructions') {
            expStage = (<Instructions clicked={this.changeExpStageHandler} />)
        }
        else if (this.state.expStage === 'trials') {
            expStage = (<Trials nextStage={(event, data) => this.changeExpStageHandler(event, data)} 
                                totalTrials={this.state.nTrials} 
                                stimuli={this.state.stimuli}
                                images={this.state.images} 
                                trialOrder={this.state.trialOrder} 
                                userId={this.state.userId}
                                updateProgress={this.updateProgress}/>);
        }
        else if (this.state.expStage === 'demographics') {
            expStage = (<Demographics clicked={(event,demographics) => 
                this.changeExpStageHandler(event, demographics)} />)
        }
        else if (this.state.expStage === 'firebaseError'){
            expStage = (<FirebaseError errorMsg={this.state.error} 
                                       subjResponses={this.state.subjResponses}
                                       demographics={this.state.demographics}
                                       userId={this.state.userId}
                                       clicked={this.changeExpStageHandler}/>)
        }
        else if (this.state.expStage === 'debrief') {
            expStage = (<Debrief clicked={this.changeExpStageHandler} />)
        }
        else if (this.state.expStage === 'finish'){
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
