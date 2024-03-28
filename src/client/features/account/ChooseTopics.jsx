import React, { useState } from "react";
import { useGetCategoriesQuery } from "./accountSlice";

//user can sumbit topics and it will update their acoount PATCH
//create a patch request, if nothing is there patch if something is there then update.
export default function ChooseTopics() {
  const { data: categories } = useGetCategoriesQuery();
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleCheckChange = (topicId, isChecked) => {
    if (isChecked) {
      if (selectedTopics.length < 3) {
        setSelectedTopics([...selectedTopics, topicId]);
      } else {
        alert("You can only choose 3 topics");
      }
    } else {
      setSelectedTopics((prevSelected) =>
        prevSelected.filter((id) => id !== topicId)
      );
    }
  };

  function CategoryItem({ category, onCheckboxChange, selectedTopics }) {
    return (
      <div>
        <h3>{category.name}</h3>
        <ul>
          {category.Category_topics.map(({ topic }) => (
            <li key={topic.id}>
              <label>
                <input
                  type="checkbox"
                  value={topic.id}
                  checked={selectedTopics.includes(topic.id)}
                  onChange={(e) => onCheckboxChange(topic.id, e.target.checked)}
                />
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
            <CategoryItem
              key={category.id}
              category={category}
              onCheckboxChange={handleCheckChange}
              selectedTopics={selectedTopics}
            />
          ))}
        </ul>
      </div>
      <p>Submit Topics</p>
    </>
  );
}
