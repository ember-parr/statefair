const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (clickEvent) => {
  if ((clickEvent.target.id = "rideTicket")) {
    const customEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
            
        </div>
    `;
};
