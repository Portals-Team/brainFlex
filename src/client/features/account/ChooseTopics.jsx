import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useUpdateUserTopicsMutation,
} from "./accountSlice";
import { useParams } from "react-router-dom";

export default function ChooseTopics() {
  const { data: categories } = useGetCategoriesQuery();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [updateUserTopics] = useUpdateUserTopicsMutation();
  const { id } = useParams();

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

  const handleSumbit = async () => {
    try {
      console.log(selectedTopics);
      console.log(id);
      await updateUserTopics({ id, topicIds: selectedTopics }).unwrap();
    } catch (error) {
      console.error("Failed to update user topics:", error);
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
      <h2>Pick 3 Favorite Quiz Topics</h2>
      <div>
        <ul id="pickTopics">
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
      <button onClick={handleSumbit}>
        <Link to={`/account/${id}`}>Submit Topics</Link>
      </button>
    </>
  );
}
