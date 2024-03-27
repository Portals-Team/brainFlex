/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*image will be fetch from the database Image_Word table to show the image for that quiz*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

/*answer grid will fetch the topic_word from the database Image_Word table and reveal a letter when the user correctly answers a quiz question*/

/*the solve button will direct the user to the QuizAnswer component to solve the quiz*/

/*ready for next question button will allow the user to toggle back and forth from Quiz component and the GameHome component*/

import { useGetImageWordQuery, useGetGameQuery,} from "../game/gameSlice"
import { useParams } from "react-router-dom";

export default function GameHome() {
  const { id } = useParams();
  const { data: quiz } = useGetGameQuery(+id);
  const {data: image_word} = useGetImageWordQuery(quiz?.image_Word_id);
  const gameWord = image_word?.topic_word;

 

  return (
    <>
      {console.log(image_word)}
      <h1>GameHome</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        {/*image will be blurred and come into focus when a question is answered correctly*/}
        <img className="mainGameImage" src={image_word?.image_url} />
        <li>Score</li>
      </section>
      <section>
        {/*answer grid should be a controlled form*/}
        <h1>ANSWER GRID</h1>
        <form>
          {/*in CSS resize the width of each input container to be the length 
          of one letter*/}
          <div>
            {console.log(gameWord?.split(""))}
            {gameWord?.split("").map(letter => {
              return <input maxLength="1"/>
            })}
            
          </div>
        </form>
      </section>
      <section>
        {/* <Link to="/game/submit">SOLVE</Link>
        <Link to="/game/quiz">READY FOR NEXT QUESTION</Link> */}
      </section>
    </>
  );
}
