const CLIENT_ID = '187816537221-fg63q7jler9phe96h97itcvtktcjljni.apps.googleusercontent.com';
const CLIENT_SECRET = 'fmN9nHAfE_AZEcOI2B93rTIJ';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04OhFmScUer1kCgYIARAAGAQSNwF-L9IroDFmTLUHk_zTDZQ9nlaYf7Mvc-a8PMkPFjCBZD2_UcGYYsToUNrJCPgmVDTMMjKRmug';

const oAuth2Client = gapi.client.init();

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

var GoogleAuth; // Google Auth object.
console.log('executing gmail script')
function initClient() {
    gapi.client.init({
        'apiKey': 'AIzaSyDTEINlGqfhUldyBEbK9FlKq_vcK_MI6K8',
        'clientId': CLIENT_ID,
        'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
    });
}

initClient();

// export async function sendMail(name,email,message) {
//     var message_format = "From: John Doe <anshulraj9823@gmail.com> \n"+
//                         "To: Mary Smith <anshulraj9823@gmail.com> \n"+
//                         "Subject: Saying Hello \n"+
//                         "Date: Fri, 21 Nov 1997 09:55:06 -0600 \n"+
//                         "Message-ID: <1234@local.machine.example> \n\n"+
//                         `Name : ${name}\n\n`+
//                         `Email : ${email}\n\n`+
//                         `Message : ${message}`;

//     const raw_message = Buffer.from(message_format).toString('base64');

//     try{
//         const accessToken = await this.oAuth2Client.getAccessToken().then(e=>{return e.token});
//         console.log(accessToken);

//         var myHeaders = new fetch.Headers();
//         myHeaders.append("Authorization", `Bearer ${accessToken}`);
//         myHeaders.append("Content-Type", "application/json");

//         var raw = JSON.stringify({
//             "raw": raw_message
//         });

//         var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//         };

//         fetch("https://gmail.googleapis.com/gmail/v1/users/anshulraj9823@gmail.com/messages/send", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     }   
//     catch(e){
//         console.log(e)
//         return e;
//     }
// }