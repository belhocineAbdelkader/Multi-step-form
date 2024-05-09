

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`


let currentStep = 1;

function nextStep(step: number) {
    // Validate current step before proceeding
    if (step === 1) {
        let fullName = document.getElementById("fullName") as HTMLInputElement;
        let email = document.getElementById("email") as HTMLInputElement;
        let phoneNumber = document.getElementById("phoneNumber") as HTMLInputElement;
        
        if (!fullName  || !email || !phoneNumber) throw new Error('ONE OF THIS VARS "fullNam, email, phoneNumber" AR UNDEFINED');

        if (!fullName.value || !email.value || !phoneNumber.value) {
            alert("Please fill in all fields.");
            return;
        }

    } else if (step === 2) {

    }
    else if (step === 3) {

    }else if (step === 4) {

    }

    // Hide current step
    document.getElementById("step" + currentStep)?.classList.remove("active");

    // Show next step
    currentStep = step + 1;
    document.getElementById("step" + currentStep)?.classList.add("active");
}

function confirmationForm() {
    // Retrieve form data and display confirmation
    let firstName = document.getElementById("firstName") as HTMLInputElement;
    let lastName = document.getElementById("lastName") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let phoneNumber = document.getElementById("phoneNumber") as HTMLInputElement;

    document.getElementById("confirmFirstName")!.textContent = firstName?.value;
    document.getElementById("confirmLastName")!.textContent = lastName?.value;
    document.getElementById("confirmEmail")!.textContent = email?.value;
    document.getElementById("confirmPhoneNumber")!.textContent = phoneNumber?.value;

    // Submit form (you can send data to server here)
    alert("Form submitted successfully!");
}



window.addEventListener("DOMContentLoaded",() => {
	const monthlyOrYearly = new MonthlyOrYearly("#planType");
    monthlyOrYearly
});

class MonthlyOrYearly {
	/** Button used for this switch */
	button: HTMLButtonElement | null;

	/**
	 * @param buttonEl CSS selector of the button to use
	 */
	constructor(buttonEl: string) {
		this.button = document.querySelector(buttonEl);
		this.button?.addEventListener("click",this.planTypeToggle.bind(this));
	}
	private _planType: PlanType = "monthly";
	/** Selected planType */
	get planType(): PlanType {
		return this._planType;
	}
	set planType(value: PlanType) {
		this._planType = value;
		this.button?.setAttribute("aria-labelledby",this._planType);
	}
	/** Set the planType to monthly or yearly. */
	planTypeToggle(): void {
		this.planType = this.planType === "monthly" ? "yearly" : "monthly";
	}
}
