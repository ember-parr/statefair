const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
    addTicketToColumn();
  });
};

const addTicketToColumn = () => {
  contentTarget.innerHTML += `
    <div class="rider person"></div>
    `;
};
