        this.initUserData();
    initUserData () {
        const UrlData = queryString.parse(window.location.search)
        const userID = UrlData.workerId || "test123"
        
        const userDataRef = firebase.database().ref('data/' + userID)
        const secretKey = Math.floor(Math.random() * 100000);

        const userData = {
            status: "active",
            secretKey: secretKey
        }

        userDataRef.set(userData)
        this.setState ({
            userID: userID,
            secretKey: secretKey
        })
        console.log(userID)
        console.log(secretKey)
    }