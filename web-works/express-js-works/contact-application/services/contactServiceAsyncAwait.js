const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "contacts.json");

class ContactService {
  constructor() {
    this.data = JSON.parse(fs.readFileSync(fileName, "utf-8"));
  }

  async getContactById(id) {
    if (!id || typeof id !== "number") {
      throw new Error("please give proper ID");
    }
    const contact = this.data.contacts.find((contact) => contact.id === id);
    if (contact) {
      return { ...contact };
    }
    return null;
  }
}

module.exports = ContactService;
