const whatsappNumber = "213664916171";
const menuContainer = document.querySelector(".menu-container");

function orderOnWhatsApp(item) {
  const price = item.price ? `${item.price} دج` : "السعر حسب الحجم";
  const message = `السلام عليكم WALID FOOD 👋
نحب نطلب: ${item.name}
السعر: ${price}
الكمية: 1`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

if (menuContainer && Array.isArray(menu)) {
  menu.forEach(section => {
    const sectionElement = document.createElement("section");
    sectionElement.className = "food-section";

    const title = document.createElement("h2");
    title.textContent = section.category;

    const grid = document.createElement("div");
    grid.className = "food-grid";

    section.items.forEach(item => {
      const card = document.createElement("article");
      card.className = "food-card";

      const image = document.createElement("img");
      image.className = "food-image";
      image.src = item.image;
      image.alt = item.name;
      image.loading = "lazy";

      const details = document.createElement("div");
      details.className = "food-details";

      const name = document.createElement("h3");
      name.textContent = item.name;

      const price = document.createElement("p");
      price.className = "food-price";
      price.textContent = item.price ? `${item.price} دج` : item.note;

      const button = document.createElement("button");
      button.className = "btn order-btn";
      button.textContent = "اطلب عبر واتساب";
      button.addEventListener("click", () => orderOnWhatsApp(item));

      details.append(name, price, button);
      card.append(image, details);
      grid.appendChild(card);
    });

    sectionElement.append(title, grid);
    menuContainer.appendChild(sectionElement);
  });
}
