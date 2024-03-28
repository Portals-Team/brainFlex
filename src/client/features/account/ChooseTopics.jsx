import { useGetTopicsQuery } from "./accountSlice";
import { useGetCategoriesQuery } from "./accountSlice";

export default function ChooseTopics() {
  const { data: topics } = useGetTopicsQuery();
  console.log(topics);
  const { data: categories } = useGetCategoriesQuery();
  console.log(categories);
  //get topics
  //get categories
  //get categories topics
  function CategoriesCard({ category }) {
    return (
      <li>
        <h4>{category.name}</h4>
      </li>
    );
  }
  return (
    <>
      <h1>From our 3 Categoreis pick your Favorite Three Topics</h1>
      <div>
        <h2>Categories:</h2>
        <ul>
          {categories?.map((category) => (
            <CategoriesCard key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </>
  );
}
