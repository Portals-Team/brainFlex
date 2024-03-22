export default function Quiz() {
  return (
    <>
      <h1>Quiz</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        <div>
          <h1>QUESTION:</h1>
          <ol>
            <li>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">ANSWER A</label>
            </li>
            <li>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">ANSWER B</label>
            </li>
            <li>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">ANSWER C</label>
            </li>
            <li>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">ANSWER D</label>
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
    </>
  );
}
