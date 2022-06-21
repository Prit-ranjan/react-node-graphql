const ContactService = require("./services/contactServicePromise");

const cs = new ContactService();

let contact = cs.getContactById(1);

contact.then((data)=> {console.log(data)});