import { countTicketTotal } from "./Customers.js"
const eventHub = document.querySelector("#state-fair");

let totalTickets = 0

eventHub.addEventListener("click", event => {
    if(event.target.className === "OneTicket") {
        totalTickets ++
        console.log("ticket btn clicked: ", totalTickets)
        return countTicketTotal(totalTickets)
    }

})