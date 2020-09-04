const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const FoodTicketHolders = () => {
  eventHub.addEventListener("foodTicketPurchased", (customEvent) => {
    addTicketToColumn();
  });
};

const addTicketToColumn = () => {
  contentTarget.innerHTML += `
      <div class="eater person"></div>
      `;
};
