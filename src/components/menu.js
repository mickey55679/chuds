import React from "react";


const Menu = () => {
  const menuItems = [
    {
      href: "",
      src: "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_1280.jpg",
      alt: "",
      desc: "Add a description of the image here",
    },
    {
      href: "",
      src: "",
      alt: "",
      desc: "Add a description of the image here",
    },
    {
      href: "",
      src: "",
      alt: "",
      desc: "Add a description of the image here",
    },
    {
      href: "",
      src: "",
      alt: "",
      desc: "Add a description of the image here",
    },
  ];

  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-items">
          <a target="_blank" rel="noopener noreferrer" href={item.href}>
            <img src={item.src} alt={item.alt} width="600" height="400" />
          </a>
          <div className="desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
