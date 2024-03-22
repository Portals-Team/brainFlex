/*
import {useGetCategoriesQuery} from "../game/gameSlice"

export default function ChooseTopics() {
    const {data: categories} = useGetCategoriesQuery();
    
    return (
        <ul className="categoryList">
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