const sendMessage = require('../templates/sendMessage');

const processMessage = (event) => {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        console.log("Received message from senderId: " + senderID);
        console.log("Message is: " + JSON.stringify(message));
    if (message.text === "Comment vas-tu ?") {
      const response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [{
              "title": " Très bien et vous ?",
              "subtitle": "Tapper une button pour répondre.",
              "buttons": [
                {
                  "type": "postback",
                  "title": " Je vais bien, Merci !",
                  "payload": "yes",
                },
                {
                  "type": "postback",
                  "title": "Non, ça ne va pas !",
                  "payload": "no",
                }
              ],
            }]
          }
        }
      }
        sendMessage(senderID, response);
    }
    else if (message.attachments){
      if(message.attachments[0].type == "image")
      {
        sendMessage(senderID, { "text": "Je ne sais pas traiter ce type de demande" });
      }
    }
    else {
        // We send back any text inputs  received from the user  !
        sendMessage(senderID, { "text": message.text });
    }
}
};
module.exports =  processMessage;