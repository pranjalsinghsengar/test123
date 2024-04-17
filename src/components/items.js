import React, { useState } from "react";

const Items = ({ selectedItems, setSelectedItems }) => {
  const MenuSchema = [
    {
      menuName: "menu1",
      categories: [
        {
          categoryName: "category1",
          items: ["item1", "item2", "item3"],
        },
        {
          categoryName: "category2",
          items: ["item4", "item5"],
        },
      ],
    },
    {
      menuName: "menu2",
      categories: [
        {
          categoryName: "category3",
          items: ["item6", "item7"],
        },
      ],
    },
    {
      menuName: "menu3",
      categories: [
        {
          categoryName: "category4",
          items: ["item8", "item9", "item10"],
        },
        {
          categoryName: "category5",
          items: ["item11"],
        },
      ],
    },
  ];

  const selection = {
    menu: null,
    category: null,
    items: [],
  };

  const handleMenuClick = (menuName) => {
    const isMenuSelected =
      Array.isArray(selectedItems) &&
      selectedItems.some((item) => item.menu === menuName);

    let updatedItems;

    if (isMenuSelected) {
      updatedItems = selectedItems.filter((item) => item.menu !== menuName);
    } else {
      updatedItems = [
        ...selectedItems,
        { menu: menuName, category: null, items: [] },
      ];
    }

    setSelectedItems(updatedItems);
  };

  const handleSelectedCategory = (menuName, categoryName) => {
    const isCategorySelected =
      Array.isArray(selectedItems) &&
      selectedItems.some(
        (item) => item.category === categoryName && item.menu === menuName
      );

    let updatedItems;

    if (isCategorySelected) {
      updatedItems = selectedItems.filter(
        (item) => !(item.menu === menuName && item.category === categoryName)
      );
    } else {
      updatedItems = [
        ...selectedItems,
        { menu: menuName, category: categoryName, items: [] },
      ];
    }

    setSelectedItems(updatedItems);
  };

  // const handleSelectedItem = (itemName) => {
  //   const newItem = selectedItems.items.includes(itemName)
  //     ? selectedItems.items.filter((item) => item !== itemName)
  //     : [...selectedItems.items, itemName];

  //   setSelectedItems({
  //     ...selectedItems,
  //     items: newItem,
  //   });
  // };

  return (
    <div>
      {MenuSchema.map((menu, i) => (
        <div key={i}>
          <div
            className='bg-red-100'
            onClick={() => handleMenuClick(menu.menuName)}
          >
            <input
              type='checkbox'
              checked={selectedItems.some(
                (item) => item.menu === menu.menuName
              )}
              onChange={() => {}}
            />
            <label>{menu.menuName}</label>
          </div>

          {selectedItems.some((item) => item.menu === menu.menuName) && (
            <div>
              {menu.categories.map((category, j) => (
                <div key={j} className='ml-5'>
                  <div
                    onClick={() =>
                      handleSelectedCategory(
                        menu.menuName,
                        category.categoryName
                      )
                    }
                  >
                    <input
                      type='checkbox'
                      checked={category.categoryName === selectedItems.category}
                      onChange={() => {}}
                    />
                    <label>{category.categoryName}</label>
                  </div>

                  {selectedItems.some(
                    (item) => item.category === category.categoryName
                  ) && (
                    <>
                      {category.items.map((item, k) => (
                        <div
                          key={k}
                          className='ml-5'
                          // onClick={() => handleSelectedItem(item)}
                        >
                          <input
                            type='checkbox'
                            // checked={selectedItems.items.includes(item)}
                            onChange={() => {}}
                          />
                          <label>{item}</label>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
    </div>
  );
};

export default Items;
