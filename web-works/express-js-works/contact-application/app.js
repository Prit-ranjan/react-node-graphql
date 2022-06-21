const ContactService = require("./services/contactService")

const cs = new ContactService();
// let contact = cs.getContactById(2);
// console.log(contact);

// let addedContact = cs.addContact({
//     name: "Arpit",
//     email: "arpit@ps.com",
//     phone: 5454855455,
//     city: "Pune",
//   })

//   console.log(addedContact);

console.log(cs.getAllContact());

