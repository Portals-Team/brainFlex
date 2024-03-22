/*Current question will pull from the API quiz questions to show the tally of how mant questions have been answered in the quiz*/

/*image will be pulled from the API? to show the image for that quiz*/

/*answer grid will fetch the answer word from the API and reveal a letter when the user correctly answers a quiz question*/

/*the solve button will direct the user to the QuizAnswer page to solve the quiz*/

/*ready for next question button will allow the user to toggle back and forth from Quiz component and the GameHome component*/

export default function GameHome() {
  return (
    <>
      <h1>GameHome</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        {/*image will be blurred and come into focus when a question is answered correctly*/}
        <img src="https://picsum.photos/id/237/200/300" />
        <li>Score</li>
      </section>
      <section>
        {/*answer grid should be a controlled form*/}
        <h1>ANSWER GRID</h1>
        <form>
          {/*in CSS resize the width of each input container to be the length 
          of one letter*/}
          <div>
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
          </div>
        </form>
      </section>
      <section>
        <button>SOLVE</button>
        <button>READY FOR NEXT QUESTION</button>
      </section>
    </>
  );
}
