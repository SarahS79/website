 console.log("Authentic Sets");
 const accountSid = 'AC3d8455da0b26a77a057fb03d319f9c0b';
 const authToken = 'ebed784c339a9e1fb300218e549ae302';
 const client = require('twilio')(accountSid, authToken);

 client.messages
     .create({
         body: 'Hello from Twilio',
         from: '+18333871554',
         to: '+18777804236'
     })
     .then(message => console.log(message.sid))
     .done();
 try {
     // Send SMS via Twilio
     const message = await client.messages.create({
         body: `New Form Submission:\nName: ${fullName}\nEmail: ${email}\nPhone Number: ${phone}`,
         from: '+18333871554',
         to: '+14695090414'
     });

     console.log('Message.sid:', message.sid);

     res.send('Form Submitted Successfully!');
 } catch (error) {
     console.error('Error:', error.message);
     res.status(500).send('Something went wrong');
 }
 window.location.href = 'thank-you.html';
 let catchll((to connect registor to thank you page) => {

 })