import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", stock: "" });

  // API'den ürünleri çek
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://babaamet.lm.r.appspot.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Ürünleri çekerken hata:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Formdaki değişiklikleri yakala
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Yeni ürün ekle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://babaamet.lm.r.appspot.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({ name: "", description: "", price: "", stock: "" });
      fetchProducts(); // Ürünleri güncelle
    } catch (error) {
      console.error("Ürün eklerken hata:", error);
    }
  };

  // Ürünü sil
  const handleDelete = async (id) => {
    try {
      await fetch(`https://babaamet.lm.r.appspot.com/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts(); // Ürünleri güncelle
    } catch (error) {
      console.error("Ürün silerken hata:", error);
    }
  };

  return (
    <div style={{
      padding: "30px",
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#f4f7fc",
      minHeight: "100vh",
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "36px",
        color: "#333",
        marginBottom: "40px",
        fontWeight: "700",
      }}>Ürünler Listesi</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              width: "260px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
              transition: "transform 0.3s, box-shadow 0.3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              }
            }}>
              <div>
                <h2 style={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333",
                }}>{product.name}</h2>
                <p style={{ color: "#777", fontSize: "14px" }}>{product.description}</p>
                <p style={{
                  fontWeight: "bold",
                  color: "#28a745",
                  fontSize: "18px",
                  marginTop: "10px",
                }}>{product.price} ₺</p>
                <p style={{ color: "#555", fontSize: "14px" }}>Stok: {product.stock} adet</p>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                style={{
                  marginTop: "20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#c82333"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
              >
                Ürünü Sil
              </button>
            </div>
          ))
        ) : (
          <p style={{
            fontSize: "18px",
            color: "#777",
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "30px",
          }}>Henüz ürün yok.</p>
        )}
      </div>

      <h2 style={{
        marginTop: "60px",
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "600",
        color: "#333",
      }}>Yeni Ürün Ekle</h2>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "450px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
      }}>
        <input
          type="text"
          name="name"
          placeholder="Ürün Adı"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#007bff"}
          onBlur={(e) => e.target.style.borderColor = "#ddd"}
        />
        <input
          type="text"
          name="description"
          placeholder="Ürün Açıklaması"
          value={form.description}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Fiyat (₺)"
          value={form.price}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value={form.stock}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button type="submit" style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          Ürünü Ekle
        </button>
      </form>
    </div>
  );
}

export default App;