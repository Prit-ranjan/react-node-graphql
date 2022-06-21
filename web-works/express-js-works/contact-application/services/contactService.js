class ContactService {
  constructor() {
    this.data = {
      idCounter: 2,
      contacts: [
        {
          id: 1,
          name: "Prit",
          email: "prit@ps.com",
          phone: 8545225441,
          city: "Delhi",
        },
        {
          id: 2,
          name: "Ranjan",
          email: "ranjan@ps.com",
          phone: 8457541222,
          city: "Patna",
        },
      ],
    };
  }

  getContactById(id){
    if(!id || typeof id !== "number")
    {
        throw new Error("please give proper ID");
    }
    const contact =  this.data.contacts.find((contact)=> contact.id === id);
    if(contact)
    {
        return {...contact}
    }
    return null;
  }

  addContact(contact)
  {
    if(!contact || typeof contact !== "object" )
    {
        throw new Error("please give proper contact object");

    }

    contact.id = ++this.data.idCounter;
    this.data.contacts.push(contact);
    return {...contact}
  }

  getAllContact(){
    return [...this.data.contacts];
  }

  deleteContact(id){
    if(!id || typeof id !== "number")
    {
        throw new Error("please give proper ID");
    }
    const index =  this.data.contacts.findIndex((contact)=> contact.id === id);
    if(index)
    {
        this.data.contacts.splice(index,1);
    }
  }
}

module.exports = ContactService;
