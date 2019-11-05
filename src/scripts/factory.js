const htmlFactory = {
    formFactory: () => {
        return `
        <h1>Enter Contact Information</h1>
            <fieldset>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName--" required>
            </fieldset>
            <fieldset>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName--" required>
            </fieldset>
            <fieldset>
                <label for="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber--" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            </fieldset>
            <fieldset>
                <label for="streetAddress">Street Address</label>
                <input type="text" name="streetAddress" id="address--" required>
            </fieldset>
            <button id="saveContact--">Submit Contact</button>   
        `
    },
    contactFactory: (firstName, lastName, phoneNumber, address) => {
        return {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address
        }
    },
    contactInfoFactory: (contactEntry) => {
        return `
        <div>${contactEntry.firstName} ${contactEntry.lastName}</div>
        <div>${contactEntry.phoneNumber}</div>
        <div>${contactEntry.address}</div>
        `
    }
}
export default htmlFactory