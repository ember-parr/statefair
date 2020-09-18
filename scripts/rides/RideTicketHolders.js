const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", (customEvent) => {
    addTicketToColumn("rider");
  });
  eventHub.addEventListener("fullPackageTicketPurchased", (customEvent) => {
    addTicketToColumn("bigSpender");
  });
};

const addTicketToColumn = (type) => {
  contentTarget.innerHTML += `
      <div class="${type} person"></div>
      `;
};
