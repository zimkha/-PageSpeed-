const speed = require('psi');
const { WebClient } = require('@slack/web-api');
const config = require('./config');

 class SpeedController {d
   static async Speed (url) {
   return new Promise((resolve, reject) => {
     try {
      const web = new WebClient(config.BotUserToken);
      speed(url)
        .then((result) => {
          const { data } = result;
          console.log('All infoormation', data);

          const web = new WebClient("xoxb-2256143285764-2247083733253-4ysbsAj8d8MNblCukgTbQmYt");
          // web.chat.postMessage({
          //   channel: '#general',
          //   text: "Yep le resulta",
          // })
          // .then((res) => {
          //   console.log("données envoye")
          //   resolve("Done");
          // }).catch((err) => {
          //   reject(err);
          // });
          resolve(data);
        }).catch((err) => {
          reject(err)
        })
     } catch (error) {
        reject(erro)
     }
   })
   }

 }


module.exports = SpeedController;