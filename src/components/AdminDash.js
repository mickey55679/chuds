import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDash = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    imgurl: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get("/api/menu")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/menu", form)
      .then((res) => {
        setMenuItems([...menuItems, { id: res.data.id, ...form }]);
        setForm({ name: "", price: "", imgurl: "", category: "" });
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id, category) => {
    axios
      .delete(`/api/menu/${id}/${category}`)
      .then(() => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1 className="admin-dash-header">Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            className="form-input"
            name="imgurl"
            value={form.imgurl}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <input
            className="form-input"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
        </form>

        <button type="submit">Add Menu Item</button>
      </form>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => handleDelete(item.id, item.category)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDash;
