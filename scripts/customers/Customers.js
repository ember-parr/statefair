const contentTarget = document.querySelector(".customers")

export const countTicketTotal = (numberOfTickets) => {
    return contentTarget.innerHTML = `
    <div class="currentTickets"> Total Tickets Purchased: ${numberOfTickets}</div>
    `
}