const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const SideshowTicketHolders = () => {
  eventHub.addEventListener("sideshowTicketPurchased", (customEvent) => {
    addTicketToColumn();
  });
};

const addTicketToColumn = () => {
  contentTarget.innerHTML += `
      <div class="eater person"></div>
      `;
};
