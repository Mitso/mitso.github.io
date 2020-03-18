const { Appointment, Slot } = require('../models/index');
const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "06e12307",
  apiSecret: "vba6YIoJckPUA0oi"
});
const appointmentController = {
  all(req, res) {
    // Returns all appointments
    Appointment.find({}).exec((err, appointments) => res.json(appointments));
  },
  create(req, res) {
    //console.log('CREATED ENTRY::',req, res);
    let requestBody = req.body;
    let newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save();

    // Creates a new record from a submitted form
    let newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id
    });

    let msg = requestBody.name + " " + "this message is to confirm you appointment at" + " " + requestBody.appointment;
    //console.log('FORM',requestBody);
    newappointment.save((err, saved) => {
      //console.log('SAVE',saved);
      if (err) {
        console.log(`Produced:: ${err}`);
      } else {
        /*
          Returns the saved appointment
          After a successful save
        */
        const message = {
          content: {
            type: 'text',
            text: 'Hello from Mpando test application',
          },
        };
        nexmo.channel.send(
          { type: 'whatsapp', number: '27645576224' },
          { type: 'whatsapp', number: '27645576224' },
          message,
          (err, data) => { console.log(data.message_uuid); }
        );

        Appointment.find({ _id: saved._id })
          .populate("slots")
          .exec((err, appointment) => res.json(appointment));


      }
    });
  }
};

module.exports = appointmentController;
