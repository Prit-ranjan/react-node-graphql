const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "contacts.json");

class ContactService {
  constructor() {
    this.data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
  }

  getContactById(id, callback) {
    if (!callback || typeof callback !== "function") {
      throw new Error("Callback function missing");
    }

    setTimeout(() => {
      if (!id || typeof id !== "number") {
        callback("Please pass Id correctly");
        return;
      }
      const contact = this.data.contacts.find((contact) => contact.id === id);
      if (contact) {
        callback(null,contact);
      }
      else{
        callback(null,null)
      }
    }, 0);
  }
}

module.exports = ContactService;