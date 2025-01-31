import React from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, selectedCategory, onCategoryChange }) {
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <Filter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
