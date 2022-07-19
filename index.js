validateonSubmit() {
    let self = this; // setup calls to the "this" values of the class described in the constructor

    // add a "submit" event listener to the form
    this.form.addEventListener("submit", (e) => {
        // remove default functionality 
        e.preventDefault();
        
        // loop through the fields and check them against a function for validation
        self.fields.forEach((field) => {
            const input = document.querySelector(`#${field}`);
            if (self.validateFields(input) == false) {
                // if a field does not validate, auto-increment our error integer
                error++;
            }
        });
        // if everything validates, error will be 0 and can continue
        if (error == 0) {
            //do login api here or in this case, just submit the form and set a localStorage item
            localStorage.setItem("auth", 1);
            this.form.submit();
        }
    });
}
