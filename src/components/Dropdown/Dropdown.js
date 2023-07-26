import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import "./Dropdown.css";
const Dropdown = () => {
  //state to hold data from API
  const [categoryList, setCategory] = useState([]);

  //function to cal API
  const fetchData = async () => {
    const result = await fetch("/categories.json");
    result.json().then((data) => {
      setCategory(data.categories);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <header>
        <nav class="navbar">
          <ul class="menu">
            <li class="drop-down">
              <a href="" class="flex">
                SHOP BY CATEGORY
                <BsChevronDown className="icon" />
              </a>
              {categoryList.map((item) => (
                <ul>
                  <li key={item.menu_id}>
                    <a href="">{item.name}</a>
                    <ul>
                      {item.submenu.map((submenuitem) => (
                        <li>
                          <a href="">{submenuitem.title}</a>
                          <ul>
                            {item.second_submenu.map((secondsubmenuitem) => (
                              <li>
                                <a href="#">{secondsubmenuitem.title}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </li>
            <span>
              <MdLocalOffer className="offer" />
              <span className="offers">OFFERS</span>
            </span>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Dropdown;
