function formatDate(date, format) {
  const map = {
    dd: date.getDate().toString().padStart(2, "0"),
    MM: (date.getMonth() + 1).toString().padStart(2, "0"),
    yyyy: date.getFullYear(),
  };

  return format.replace(/dd|MM|yyyy/gi, (matched) => map[matched]);
}

const today = new Date();

const orderDate = document.querySelector("#formatDate");
orderDate.textContent = "Order date: " + formatDate(today, "dd.MM.yyyy");
