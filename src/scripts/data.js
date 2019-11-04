const api = {
    allContacts: () => {
        return fetch("http://localhost:8088/contacts")
        .then(entries => entries.json())
        .then(parsedEntries => {
            console.log("parsedEntries", parsedEntries)
        })
    }
}
export default api