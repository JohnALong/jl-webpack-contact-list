import html from "./factory.js"

const htmlInfo = {
    formToDom: () => {
        let domForm = html.contactForm()
        document.querySelector("#form").innerHTML = domForm
    }
}
export default htmlInfo