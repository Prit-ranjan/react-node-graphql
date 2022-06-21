const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "contacts.json");

class ContactService {
  constructor() {
    this.data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
  }

  getContactById(id) {
    return new Promise((resolve, reject) => {
      if (!id || typeof id !== "number") {
        reject("please give proper ID");
      }
      const contact = this.data.contacts.find((contact) => contact.id === id);
      if (contact) {
        resolve({...contact})
      }
    });
  }
}

module.exports = ContactService;
