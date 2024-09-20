import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    imgurl: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and has admin rights
    axios
      .get("/api/auth/check-admin", { withCredentials: true})
      .then((res) => {
        if (res.data.isAdmin) {
          setIsAdmin(true);
        } else {
          navigate("/unauthorized"); // Redirect to an unauthorized page or login page
        }
      })
      .catch(() => navigate("/login")); // Redirect to login if not authenticated
  }, [navigate]);

  useEffect(() => {
    if (isAdmin) {
      axios
        .get("/api/menu")
        .then((res) => {
          setMenuItems(res.data);
          setCategories([...new Set(res.data.map((item) => item.category))]);
        })
        .catch((err) => console.error(err));
    }
  }, [isAdmin]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, imgurl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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

  if (!isAdmin) {
    return <p>Loading...</p>; // Or some other loading state
  }

  return (
    <div>
      <h1 className="admin-dash-header">Admin Dashboard</h1>
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
          className="form-input-img"
          type="file"
          name="imgurl"
          onChange={handleFileChange}
          accept="image/*"
          placeholder="Image URL"
          required
        />
        <select
          className="form-select"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="button-add-menu-item">
          Add Menu Item
        </button>
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
