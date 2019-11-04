import html from "./dom.js"
const api = {
    allContacts: () => {
        return fetch("http://localhost:8088/contacts")
        .then(entries => entries.json())
        .then(parsedEntries => {
            html.contactsToDom(parsedEntries)
            console.log("1st parsedEntries", parsedEntries)
        })
    },
    newContact: (contactObject) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
    }
}
export default api