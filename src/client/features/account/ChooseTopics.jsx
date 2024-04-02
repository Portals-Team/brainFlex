import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useUpdateUserTopicsMutation,
} from "./accountSlice";
import { useParams } from "react-router-dom";

import "./account.css";

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
      <section id="categoryCard">
        <h3 id="categoryName">{category.name}</h3>
        <ul>
          {category.Category_topics.map(({ topic }) => (
            <li key={topic.id}>
              <label id="topicsNames">
                <input
                  id="checkbox"
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
      </section>
    );
  }

  return (
    <>
      <header id="chooseTopicsHeadline">Favorite Quiz Topics:</header>
      <p id="chooseTopicsTag">Pick 3</p>
      <article>
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
        <div id="buttonSection">
          <button id="submitTopicsButton" onClick={handleSumbit}>
            <Link to={`/account/${id}`}>Submit Topics</Link>
          </button>
        </div>
      </article>
    </>
  );
}
