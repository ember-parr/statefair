const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const FoodTicketHolders = () => {
  eventHub.addEventListener("foodTicketPurchased", (customEvent) => {
    addTicketToColumn("eater");
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
