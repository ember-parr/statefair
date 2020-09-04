const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", (customEvent) => {
    addTicketToColumn();
  });
};

const addTicketToColumn = () => {
  contentTarget.innerHTML += `
      <div class="player person"></div>
      `;
};
