const API_URL = "https://192.168.56.167/api/products";

async function loadProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erreur API");
    }
    const products38 = await response.json();
    const tbody = document.querySelector("#table45 tbody");
    tbody.innerHTML = "";
    products38.forEach(p => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.price} $</td>
        <td>
          <button onclick="editProduct(${p.id}, '${p.name}', ${p.price})">Modifier</button>
          <button onclick="deleteProduct(${p.id})">Supprimer</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error(error);
  }
}

async function addProduct() {
  const product56 = {
    name: document.getElementById("name45").value,
    price: parseFloat(document.getElementById("price45").value)
  };
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product56)
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la création de l'enregistrement.");
    }
    const newProduct88 = await response.json();
    console.log("Produit créé :", newProduct88);
    loadProducts();
  } catch (error) {
    console.error(error);
  }
}

async function deleteProduct(id) {
  if (!confirm("Supprimer ce produit ?")) return;
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la suppression.");
    }
    console.log("Produit supprimé :", id);
    loadProducts();
  } catch (error) {
    console.error(error);
  }
}

function editProduct(id, name, price) {
  document.getElementById("name45").value = name;
  document.getElementById("price45").value = price;
  // Remplace le bouton "Enregistrer" par "Mettre à jour"
  const btn = document.querySelector("button[onclick='addProduct()']");
  btn.textContent = "Mettre à jour";
  btn.onclick = () => updateProduct(id);
}

async function updateProduct(id) {
  const updated = {
    id: id,   // ← obligatoire pour ASP.NET
    name: document.getElementById("name45").value,
    price: parseFloat(document.getElementById("price45").value)
  };
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour.");
    }
    console.log("Produit mis à jour :", id);
    // Remettre le bouton en mode "Ajouter"
    const btn = document.querySelector("button[onclick]");
    btn.textContent = "Enregistrer";
    btn.onclick = addProduct;
    loadProducts();
  } catch (error) {
    console.error(error);
  }
}
