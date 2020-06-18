class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      waitingDb: true,
      waitingImg: true,
      imageN: 1,
      images: {},
      nTrials: 60
    } 
  }


  componentDidMount () {
    const storageRef = firebase.storage().ref();
    let images = {};

    for (let imgN=1; imgN<= this.state.nTrials; imgN++) {
    
      let imageRef = storageRef.child('photo' + imgN + '.jpg')
      imageRef.getDownloadURL().then(url => {   
        let image = new Image();
        image.src = url;
        images[imageRef.name.slice(0, -4)] = image

        if (Object.keys(images).length === this.state.nTrials) {
          this.setState ({
            waitingImg: false,
            images: images,
          })
        }
      }) 
    }


  }


  clickhandler = () => {
    this.setState({
      imageN: this.state.imageN+1,
    })
  }

  render() {

    let waitText = 'waiting...'
    let picture = ''
    let words = 'photo' + this.state.imageN
    
    if (!this.state.waitingImg){
      waitText = 'ready'

      picture = <img src={this.state.images["photo" + this.state.imageN].src} width='150px' />
    }

    return (  
      <div className="App">
        <h1> Learn to firebase! </h1>

        {waitText}

        <br />
        {picture}
        <br />
        {words}
        <br />
        <button onClick={this.clickhandler}> Next </button>
        <br />

      </div>
    );
  }