"use client"

import React, { useState } from "react";
import styles from "./sidebar.module.css";

const Sidebar = ({ onMenuClick, menuOptions }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu, submenu) => {
    console.log(`Selected menu: ${menu}`);
    setActiveMenu(activeMenu === menu ? null : menu);
    
		if (submenu) {
			console.log(`Selected menu: ${menu} ${submenu}`);
			onMenuClick(`${menu} ${submenu}`)
		} else {
			onMenuClick(menu);
		}
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebar__menu}>
        {menuOptions.map((menuOption) => (
          <li
            key={menuOption.key}
            className={`${styles.sidebar__item} ${
              activeMenu === menuOption.value ? styles.active : ""
            }`}
            onClick={() => handleMenuClick(menuOption.value, null)}
          >
            {menuOption.label}
            {activeMenu === menuOption.value && (
              <ul className={styles.sidebar__submenu}>
                {menuOption.submenu.map((submenuItem) => (
                  <li
                    key={submenuItem.key}
                    className={styles.submenu__item}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick(menuOption.value, submenuItem.value);
                    }}
                  >
                    {submenuItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;