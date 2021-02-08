const processMessage = require('../processes/message');
const processPostback = require('../processes/postback');

module.exports = function(app){
  app.get('/webhook', function(req, res) {
     console.log(process.env.VERIFY_TOKEN);
    if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
       console.log('webhook verified');
       res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('verification failed. Token mismatch.');
        res.sendStatus(403);
     }
  });
  
  app.post('/webhook', function(req, res) {
    //checking for page subscription.
    if (req.body.object === 'page'){
       /* Iterate over each entry, there can be multiple entries 
       if callbacks are batched. */       
       req.body.entry.forEach(function(entry) {
       // Iterate over each messaging event
          entry.messaging.forEach(function(event) {
          console.log(event);
          if (event.message){
             processMessage(event);
          }
          else if(event.postback){
            processPostback(event);
          }
      });
    });
    res.sendStatus(200);
   }
  });
}