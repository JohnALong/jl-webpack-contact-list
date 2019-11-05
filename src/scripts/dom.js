import html from "./factory.js"

const htmlInfo = {
    formToDom: () => {
        let domForm = html.formFactory()
        document.querySelector("#form").innerHTML = domForm
    },
    contactsToDom: (parsedEntries) => {
        let htmlString = ""
        parsedEntries.forEach(entry => {
            htmlString += html.contactInfoFactory(entry)
        })
        document.querySelector("#container").innerHTML = htmlString
        console.log("contacts array", parsedEntries)
    }
}

export default htmlInfo