import axios from "axios";

export default axios.create({
    base:'https://9c96-103-106-239-104.ap.ngrok.sio/',
    headers:{"ngrok-skin-brother-warning": "true"}
})