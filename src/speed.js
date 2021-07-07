const speed = require('psi');


 class SpeedController {
   static async Speed (url) {
   return new Promise((resolve, reject) => {
    speed(url)
      .then((result) => {
        const { data } = result;
        console.log('All infoormation', data);
        
        resolve(data);
      }).catch((err) => {
        reject(err)
      })
      speed.output(url)
        .then(() => {
          resolve('Done')
        }).catch((err) => {
          reject(err)
        })
    // console.log('Speed score:', data.lighthouseResult.categories.performance.score);
    
 
    //  await speed.output(url);
    //  const data2 = await psi('https://theverge.com', {
    //    nokey: 'true',
    //    strategy: 'desktop'
    //  });
    //  return;
   })
   // console.log('Speed score:', data2);
   }
 }


module.exports = SpeedController;