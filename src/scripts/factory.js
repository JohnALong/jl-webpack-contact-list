const htmlFactory = {
    contactForm: () => {
        return `
        <h1>Enter Contact Information</h1>
        <form action="">
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
                <input type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            </fieldset>
            <fieldset>
                <label for="streetAddress">Street Address</label>
                <input type="text" name="streetAddress" id="streetAddress--" required>
            </fieldset>    
        `
    }
}
export default htmlFactory