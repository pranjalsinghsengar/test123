import React, { useState } from "react";

const Items = ({ savedData, setSavedData }) => {
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

  const [selectedItems, setSelectedItems] = useState({
    menu: null,
    category: null,
    items: [],
  });

  const handleMenuClick = (menuName) => {
    setSelectedItems({
      menu: menuName === selectedItems.menu ? null : menuName,
      category: null,
      items: ["item1"],
    });
  };

  const handleSelectedCategory = (categoryName) => {
    setSelectedItems({
      ...selectedItems,
      category: categoryName === selectedItems.category ? null : categoryName,
      items: [],
    });
  };

  const handleSelectedItem = (itemName) => {
    const newItem = selectedItems.items.includes(itemName)
      ? selectedItems.items.filter((item) => item !== itemName)
      : [...selectedItems.items, itemName];

    setSelectedItems({
      ...selectedItems,
      items: newItem,
    });
  };

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
              checked={menu.menuName === selectedItems.menu}
              onChange={() => {}}
            />
            <label>{menu.menuName}</label>
          </div>

          {menu.menuName === selectedItems.menu && (
            <div>
              {menu.categories.map((category, j) => (
                <div key={j} className='ml-5'>
                  <div
                    onClick={() =>
                      handleSelectedCategory(category.categoryName)
                    }
                  >
                    <input
                      type='checkbox'
                      checked={category.categoryName === selectedItems.category}
                      onChange={() => {}}
                    />
                    <label>{category.categoryName}</label>
                  </div>

                  {category.categoryName === selectedItems.category && (
                    <>
                      {category.items.map((item, k) => (
                        <div
                          key={k}
                          className='ml-5'
                          onClick={() => handleSelectedItem(item)}
                        >
                          <input
                            type='checkbox'
                            checked={selectedItems.items.includes(item)}
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
