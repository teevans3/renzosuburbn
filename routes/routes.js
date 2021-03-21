// const dotenv = require('dotenv');
// const express = require('express');
// const router = express.Router();
// const mailchimp = require('@mailchimp/mailchimp_marketing');
// const axios = require('axios');

// dotenv.config();

// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API,
//   server: 'us1'
// });

// router.post('/postEmail', function(req, res, next) {
//     console.log(req.headers);
//     const email = JSON.parse(JSON.stringify(req.body)).email;

//     console.log(email);
    
//     mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
//       email_address: email,
//       status: 'subscribed'
//     })
//     .then(response => {
//       console.log(response);
//     })
// });

// router.get('/getTwitch', function(req, res, next) {
//     console.log(req.headers);
//     console.log("YOU HAVE MADE IT TO THE ROUTER! GETTING TWITCH INFO...")
//     // Checks if Renzo is live when user visits page. Should we check this evry so often or...?
//     axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`,)
//         .then(res => res.json())
//         .then(data => {
//         const access_token = data["access_token"];

//         axios.post(`https://api.twitch.tv/helix/streams?user_login=renzosuburbn`, {
//             headers: {
//             'Client-ID': process.env.CLIENT_ID,
//             'Authorization': `Bearer ${access_token}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => {
//             if (data.data.length > 0) {
//                 res.send('is live');
//             } else {
//                 res.send('not live');
//             }
//             })
//             .catch(err => {
//             // TODO
//             console.log(err);
//             });
//         })
//         .catch(err => {
//         // TODO
//         console.log(err);
//         })
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/getTwitch', controllers.getTwitch);
router.post('/postEmail', controllers.postEmail);

module.exports = router;