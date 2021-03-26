const dotenv = require('dotenv');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const axios = require('axios');

dotenv.config();

mailchimp.setConfig({
  apiKey: `${process.env.MAILCHIMP_API}-us1`,
  server: 'us1'
});

const postTwitch = (req, res, next) => {
    // Checks if Renzo is live when user visits page. Should we check this evry so often or...?
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`)
    .then(data => {
        console.log('retrieving access token...');
        axios.get(`https://api.twitch.tv/helix/streams?user_login=renzosuburbn`, {
            headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': `Bearer ${data.data.access_token}`
            }
        })
        .then(data => {
            console.log('checking if renzo is live...');
            if (data.data.length > 0) {
                res.send('is live');
            } else {
                res.send('not live');
            }
        })
        .catch(err => {
        // TODO
        console.log(err);
        });
    })
    .catch(err => {
    // TODO
    console.log(err);
    })
};

const postEmail = (req, res, next) => {
    mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: JSON.parse(JSON.stringify(req.body)).email,
      status: 'subscribed'
    })
}

module.exports.postTwitch = postTwitch;
module.exports.postEmail = postEmail;