const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "rideTicket") {
    const customEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (clickEvent.target.id === "foodTicket") {
    const customEvent = new CustomEvent("foodTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (clickEvent.target.id === "gameTicket") {
    const customEvent = new CustomEvent("gameTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (clickEvent.target.id === "sideshowTicket") {
    const customEvent = new CustomEvent("sideshowTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (clickEvent.target.id === "fullPackageTicket") {
    const customEvent = new CustomEvent("fullPackageTicketPurchased", {
      detail: {
        numberOfTickets: 1,
      },
    });
    eventHub.dispatchEvent(customEvent)
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket" class="OneTicket">Ride Ticket</button>
        <button id="foodTicket" class="OneTicket">Food Ticket</button>
        <button id="gameTicket" class="OneTicket">Game Ticket</button>
        <button id="sideshowTicket" class="OneTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket" class="OneTicket">Full Package Ticket</button>
        </div>
    `;
};
