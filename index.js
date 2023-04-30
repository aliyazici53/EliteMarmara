const express = require('express');
const app = express();
const port = 80;

var nodemailer = require('nodemailer');

app.use(express.static('public'));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'amzyaziciali1@gmail.com',
      pass: 'wqallwswwfepbrwj'
    }
  });

app.post('/', (req, res) => {
    const {parcel} = req.body;      
    var message = `
    AD_SOYAD: ${parcel['names']}, 
    TELEFON: ${parcel['tel']}, 
    EMAİL: ${parcel['email']}, 
    ZİYARETÇİ SAYISI: ${parcel['guestNum']},
    TARİH: ${parcel['date']}, 
    SAAT: ${parcel['time']}
    `;

    var mailDetails = {
        from: 'amzyaziciali1@gmail.com',
        to: 'amzyaziciali1@gmail.com',
        subject: 'Rezervation Informations',
        text: message
    };

    transporter.sendMail(mailDetails, function(err, data) {
        if (err) {
          console.log('An error occurred...', err);
        } else {
          console.log('Verification email was sent to your account');
        }
      });
    }
)


app.post('/info', (req, res) => {
  const {parcel} = req.body;
  var message = `${parcel}`;


  var mailDetails = {
    from: 'amzyaziciali1@gmail.com',
    to: 'amzyaziciali1@gmail.com',
    subject: 'Mail Subscription Elite Marmara',
    text: message
  };

  transporter.sendMail(mailDetails, function(err, data) {
    if (err) {
      console.log('An error occurred...', err);
    } else {
      console.log('Verification email was sent to your account');
    }
  });
})


app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});