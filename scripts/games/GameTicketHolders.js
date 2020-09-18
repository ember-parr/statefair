const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", (customEvent) => {
    addTicketToColumn("player");
  });
  eventHub.addEventListener("fullPackageTicketPurchased", (customEvent) => {
    addTicketToColumn("bigSpender");
  });
};

const addTicketToColumn =(type)=> {
  contentTarget.innerHTML += `
      <div class="${type} person"></div>
      `;
};
