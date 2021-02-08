const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');

const processMessage = (event) => {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        console.log("Received message from senderId: " + senderID);
        console.log("Message is: " + JSON.stringify(message));
        console.log("message.text is: ", message.text);
    // if (message.text == "Comment vas-tu ?") {
    //     // senderAction(senderID);
    //     const messageWithOptions = {
    //             "text": "Très bien et vous ?",
    //             "quick_replies":[
    //               {
    //                 "content_type":"text",
    //                 "title":"Je vais bien, merci ",
    //               },{
    //                 "content_type":"text",
    //                 "title":"Non, ça ne va pas ",
    //               }
    //             ]
    //     };
    //     sendMessage(senderID, messageWithOptions);
    // }
    // else if (message.attachments){
    //   if(message.attachments[0].type == "image")
    //   {
    //     senderAction(senderID);
    //     sendMessage(senderID, { "text": "Je ne sais pas traiter ce type de demande" });
    //     const messageWithOptions = {
    //       "text": "Très bien et vous ?",
    //       "quick_replies":[
    //         {
    //           "content_type":"text",
    //           "title":"Je vais bien, merci ",
    //         },{
    //           "content_type":"text",
    //           "title":"Non, ça ne va pas ",
    //         }
    //       ]
    //     };
    //     sendMessage(senderID, messageWithOptions);
    //   }
    // }
    // else {
        sendMessage(senderID, message);
    // }
}
};
module.exports =  processMessage;