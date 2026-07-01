async function loadItems() {
  const res = await fetch("/api/products");
  const items = await res.json();
  document.getElementById("products").innerHTML = items.map(i => `<li>${i.name}</li>`).join("");
}
loadItems();
