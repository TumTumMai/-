
const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
// async function main() {
// สร้างออปเจ็ค transporter เพื่อกำหนดการเชื่อมต่อ SMTP และใช้ตอนส่งเมล

// let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     secure: true, // true for 465, false for other ports
//  secure: false, // true for 465, false for other ports
//  auth: { // ข้อมูลการเข้าสู่ระบบ
//    user: 'tyrandzaza123@gmail.com', // email user ของเรา
//    pass: 'gc742899' // email password
//  }
// });

let transporter = nodemailer.createTransport(
    { service: 'Gmail',
    secure: true, // true for 465, false for other ports
    auth: {
    user: 'tyrandzaza123@gmail.com', // generated ethereal user
    pass: 'gc742899'// generated ethereal password
    },
    tls: {
    rejectUnauthorized:false
    }
});
let mailOptions = {
from: '“Sad 👻” <foo@example.com>', // sender address
to: 'sadboy.club222@gmail.com', // list of receivers
subject: 'Hello ✔', // Subject line
text: 'Hello world?', // plain text body
html: '<b>บักเกิบ?</b>' // html body
};

// console.log(mailOptions);


// transporter.verify(function(error, success) {
//     if (error) {
//          console.log(error);
//     } else {
//          console.log('Server is ready to take our messages');
//     }
//  });

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

// transporter.sendMail(mailOptions, (error, result) => {
//     if (error) return console.error(error);
//     return console.log(result);
//   });

// เริ่มทำการส่งอีเมล
// let info = await transporter.sendMail({
// from: '"Fred Foo 👻" <xxxx@gmail.com>', // อีเมลผู้ส่ง
// to: 'sadboy.club222@gmail.com', // อีเมลผู้รับ สามารถกำหนดได้มากกว่า 1 อีเมล โดยขั้นด้วย ,(Comma)
// subject: 'Hello ✔', // หัวข้ออีเมล
// text: 'Hello world?', // plain text body
// html: '<b>Hello world?</b>' // html body
// });
// // log ข้อมูลการส่งว่าส่งได้-ไม่ได้
// console.log('Message sent: %s', info.messageId);
// }
// main().catch(console.info);
