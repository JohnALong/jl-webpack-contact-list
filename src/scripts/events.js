import htmlFactory from "./factory.js"
import api from "./data.js"
import html from "./dom.js"
const formList = document.querySelector("#form")
const contactsList = document.querySelector("container")

const events = {
    saveNewContact: () => {
        formList.addEventListener("click", event => {
            if (event.target.id.startsWith("saveContact--")) {
                console.log("save button clicked")
                let firstName = document.getElementById("firstName--").value
                let lastName = document.getElementById("lastName--").value
                let phoneNumber = document.getElementById("phoneNumber--").value
                let address = document.getElementById("address--").value
                console.log("jisie test", address)
                const contactObject = htmlFactory.contactFactory(firstName, lastName, phoneNumber, address)
                console.log("is this working?", contactObject)
                api.newContact(contactObject).then(api.allContacts).then(html.formToDom())
            } else {
                console.log("not the save button")
            }
        })
    }
}
export default events