/*
import {useGetCategoriesQuery} from "../game/gameSlice"

export default function ChooseTopics() {
    const {data: categories} = useGetCategoriesQuery();
    
    return (
        <ul className="categoryList">
          <h1>Pick Your Favorite Three Topics</h1>
          <li>
            {categories.map(category => (
              <>
                <h2>{category.name}</h2>
                <TopicItem key={category.id} category={category} />
              </>
              )
            )}
          </li>
        </ul>
  );
}
*/