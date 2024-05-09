document.querySelector('#app').innerHTML = "\n\n";
var currentStep = 1;
function nextStep(step) {
    var _a, _b;
    // Validate current step before proceeding
    if (step === 1) {
        var fullName = document.getElementById("fullName");
        var email = document.getElementById("email");
        var phoneNumber = document.getElementById("phoneNumber");
        if (!fullName || !email || !phoneNumber)
            throw new Error('ONE OF THIS VARS "fullNam, email, phoneNumber" AR UNDEFINED');
        if (!fullName.value || !email.value || !phoneNumber.value) {
            alert("Please fill in all fields.");
            return;
        }
    }
    else if (step === 2) {
    }
    else if (step === 3) {
    }
    else if (step === 4) {
    }
    // Hide current step
    (_a = document.getElementById("step" + currentStep)) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
    // Show next step
    currentStep = step + 1;
    (_b = document.getElementById("step" + currentStep)) === null || _b === void 0 ? void 0 : _b.classList.add("active");
}
function confirmationForm() {
    // Retrieve form data and display confirmation
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    document.getElementById("confirmFirstName").textContent = firstName === null || firstName === void 0 ? void 0 : firstName.value;
    document.getElementById("confirmLastName").textContent = lastName === null || lastName === void 0 ? void 0 : lastName.value;
    document.getElementById("confirmEmail").textContent = email === null || email === void 0 ? void 0 : email.value;
    document.getElementById("confirmPhoneNumber").textContent = phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.value;
    // Submit form (you can send data to server here)
    alert("Form submitted successfully!");
}
window.addEventListener("DOMContentLoaded", function () {
    var monthlyOrYearly = new MonthlyOrYearly("#planType");
    monthlyOrYearly;
});
var MonthlyOrYearly = /** @class */ (function () {
    /**
     * @param buttonEl CSS selector of the button to use
     */
    function MonthlyOrYearly(buttonEl) {
        var _a;
        this._planType = "monthly";
        this.button = document.querySelector(buttonEl);
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.planTypeToggle.bind(this));
    }
    Object.defineProperty(MonthlyOrYearly.prototype, "planType", {
        /** Selected planType */
        get: function () {
            return this._planType;
        },
        set: function (value) {
            var _a;
            this._planType = value;
            (_a = this.button) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-labelledby", this._planType);
        },
        enumerable: false,
        configurable: true
    });
    /** Set the planType to monthly or yearly. */
    MonthlyOrYearly.prototype.planTypeToggle = function () {
        this.planType = this.planType === "monthly" ? "yearly" : "monthly";
    };
    return MonthlyOrYearly;
}());
