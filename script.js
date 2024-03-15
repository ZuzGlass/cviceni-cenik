const selectPlan = (planNumber) => {
    const zrusVyber = document.querySelector(".plan--selected")
    zrusVyber.classList.remove("plan--selected")
    
    const vyber = document.querySelector(`#plan${planNumber}`)
    vyber.classList.add("plan--selected")
    }

const var1 = selectPlan(1) 
const var2 = selectPlan(2)
const var3 = selectPlan(3)

