import api from "./data.js"
import html from "./dom.js"
import events from "./events.js"


html.formToDom()
api.allContacts()
// .then(html.contactsToDom())
events.saveNewContact()
// html.contactsToDom()
