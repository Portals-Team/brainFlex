import React, { useState } from "react";
import { useGetCategoriesQuery } from "./accountSlice";

//create a checkbox for each topic
//let a user only select three topics
//user can sumbit topics and it will update their acoount PATCH
export default function ChooseTopics() {
  const { data: categories } = useGetCategoriesQuery();

  function CategoryItem({ category }) {
    return (
      <div>
        <h3>{category.name}</h3>
        <ul>
          {category.Category_topics.map(({ topic }) => (
            <li key={topic.id}>
              <label>
                <input type="checkbox" value={topic.id} />
                {topic.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <h1>from our 3 Categories pick your favorite three topics</h1>
      <div>
        <h2>Categories:</h2>
        <ul>
          {categories?.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </>
  );
}
