import nodemailer from "nodemailer";

export default class ContactCtrl {
    static async apiSendEmail (req, res, next) {
        const contactEmail = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: "ida.group.kz@gmail.com",
            pass: "Ukraina1488",
          },
        });
        
        contactEmail.verify((error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Ready to Send");
          }
        });
        
        const name = req.body.name;
        const email = req.body.email;
        const city = req.body.city;
        const phone = req.body.phone; 
        const message = req.body.message; 

        

        const mail = {
          from: name,
          to: "daminov.arslan@gmail.com",
          subject: "Contact Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>City: ${city}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>`,
        };
        
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
    }
}