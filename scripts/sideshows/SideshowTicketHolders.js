const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const SideshowTicketHolders = () => {
  eventHub.addEventListener("sideshowTicketPurchased", (customEvent) => {
    addTicketToColumn("gawker");
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
