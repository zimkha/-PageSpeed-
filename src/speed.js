const speed = require('psi');
const { WebClient } = require('@slack/web-api');
const config = require('./config');

 class SpeedController {
   static async Speed (url) {
   return new Promise((resolve, reject) => {
     try {
      const web = new WebClient(config.BotUserToken);
      speed(url)
        .then((result) => {
          const { data } = result;
          console.log('All infoormation', data);
           (async () => {
              await this.SpeedToSlack
              resolve(data)
           })();
          //resolve(data);
        }).catch((err) => {
          reject(err)
        })
     } catch (error) {
        reject(erro)
     }
   })
   }

   static async  SpeedToSlack(){
    try {
      const web = new WebClient(config.BotUserToken);
      await web.chat.postMessage({
        channel: '#general',
        text: `The current time is `,
      });
    } catch (error) {
      console.log(error);
    }
  
    console.log('Message posted!');
   }
 }


module.exports = SpeedController;