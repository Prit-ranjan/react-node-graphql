const ContactService = require("./services/contactServiceAsync");

const cs = new ContactService();

cs.getContactById(1,(err,contact)=>{console.log(contact)});