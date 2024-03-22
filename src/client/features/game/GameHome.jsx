export default function GameHome() {
  return (
    <>
      <h1>GameHome</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
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
