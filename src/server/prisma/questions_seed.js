const football_questions = [
  {
    difficulty: "Medium",
    question:
      "Who holds the record for the longest field goal in NFL playoff history?",
    correct_answer: "D",
    fun_fact:
      "Robbie Gould holds the record for the longest field goal in NFL playoff history at 58 yards.",
    answer_a: "Adam Vinatieri",
    answer_b: "Matt Prater",
    answer_c: "Justin Tucker",
    answer_d: "Robbie Gould",
  },
  {
    difficulty: "Hard",
    question:
      "Who is the only player in NFL history to have a 99-yard touchdown run and a 99-yard touchdown reception in their career?",
    correct_answer: "C",
    fun_fact:
      "Derrick Henry is the only player in NFL history to accomplish both a 99-yard touchdown run and a 99-yard touchdown reception.",
    answer_a: "Adrian Peterson",
    answer_b: "Chris Johnson",
    answer_c: "Derrick Henry",
    answer_d: "Marshawn Lynch",
  },
  {
    difficulty: "Medium",
    question:
      "Who was the first NFL player to rush for 2,000 yards in a single season?",
    correct_answer: "B",
    fun_fact:
      "O.J. Simpson was the first NFL player to rush for over 2,000 yards in a single season, achieving the feat in 1973 with the Buffalo Bills.",
    answer_a: "Barry Sanders",
    answer_b: "O.J. Simpson",
    answer_c: "Eric Dickerson",
    answer_d: "Walter Payton",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the first NFL player to rush for 2,000 yards in a single season twice?",
    correct_answer: "A",
    fun_fact:
      "Barry Sanders is the only NFL player to rush for 2,000 yards in a single season twice.",
    answer_a: "Barry Sanders",
    answer_b: "Eric Dickerson",
    answer_c: "O.J. Simpson",
    answer_d: "Adrian Peterson",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the first NFL player to rush for 100 touchdowns in his career?",
    correct_answer: "A",
    fun_fact:
      "Emmitt Smith was the first NFL player to rush for 100 touchdowns in his career.",
    answer_a: "Barry Sanders",
    answer_b: "Walter Payton",
    answer_c: "Emmitt Smith",
    answer_d: "LaDainian Tomlinson",
  },
  {
    difficulty: "Medium",
    question:
      "Who holds the record for the longest touchdown pass in NFL history?",
    correct_answer: "A",
    fun_fact:
      "Brett Favre holds the record for the longest touchdown pass in NFL history, throwing a 99-yard touchdown pass in 2008.",
    answer_a: "Brett Favre",
    answer_b: "Tom Brady",
    answer_c: "Patrick Mahomes",
    answer_d: "Peyton Manning",
  },
  {
    difficulty: "Easy",
    question: "Which NFL team has never appeared in a Super Bowl?",
    correct_answer: "D",
    fun_fact:
      "The Detroit Lions are the only team in the NFL that has never appeared in a Super Bowl.",
    answer_a: "Cleveland Browns",
    answer_b: "Jacksonville Jaguars",
    answer_c: "Houston Texans",
    answer_d: "Detroit Lions",
  },
  {
    difficulty: "Medium",
    question: "Who holds the record for the most career receptions?",
    correct_answer: "A",
    fun_fact:
      "Jerry Rice holds the record for the most career receptions with 1,549 receptions.",
    answer_a: "Jerry Rice",
    answer_b: "Larry Fitzgerald",
    answer_c: "Tony Gonzalez",
    answer_d: "Marvin Harrison",
  },
  {
    difficulty: "Easy",
    question: "Who is the youngest quarterback to win a Super Bowl?",
    correct_answer: "B",
    fun_fact:
      "Ben Roethlisberger became the youngest quarterback to win a Super Bowl when he led the Pittsburgh Steelers to victory in Super Bowl XL at the age of 23.",
    answer_a: "Joe Montana",
    answer_b: "Ben Roethlisberger",
    answer_c: "Tom Brady",
    answer_d: "Patrick Mahomes",
  },
  {
    difficulty: "Hard",
    question:
      "Who is the only player in NFL history to have won five Super Bowl rings as a player?",
    correct_answer: "D",
    fun_fact:
      "Charles Haley is the only player in NFL history to have won five Super Bowl rings as a player, two with the San Francisco 49ers and three with the Dallas Cowboys.",
    answer_a: "Joe Montana",
    answer_b: "Tom Brady",
    answer_c: "Jerry Rice",
    answer_d: "Charles Haley",
  },
  {
    difficulty: "Easy",
    question: "Who was the first overall pick in the 2019 NFL Draft?",
    correct_answer: "A",
    fun_fact:
      "Kyler Murray was selected as the first overall pick by the Arizona Cardinals in the 2019 NFL Draft.",
    answer_a: "Kyler Murray",
    answer_b: "Baker Mayfield",
    answer_c: "Joe Burrow",
    answer_d: "Trevor Lawrence",
  },
  {
    difficulty: "Hard",
    question: "Which NFL player has the most career fumble recoveries?",
    correct_answer: "B",
    fun_fact:
      "Jim Marshall holds the record for the most career fumble recoveries with 30 recoveries.",
    answer_a: "Lawrence Taylor",
    answer_b: "Jim Marshall",
    answer_c: "Derrick Thomas",
    answer_d: "Alan Page",
  },
  {
    difficulty: "Easy",
    question:
      "Who was the first African American head coach to win a Super Bowl?",
    correct_answer: "B",
    fun_fact:
      "Tony Dungy became the first African American head coach to win a Super Bowl when his Indianapolis Colts won Super Bowl XLI in 2007.",
    answer_a: "Mike Tomlin",
    answer_b: "Tony Dungy",
    answer_c: "Lovie Smith",
    answer_d: "Dennis Green",
  },
];

const nhlData = [
  {
    difficulty: "Medium",
    question: "Who holds the record for the most career points in NHL history?",
    correct_answer: "A",
    fun_fact:
      "Wayne Gretzky holds the record for the most career points in NHL history with 2,857 points.",
    answer_a: "Wayne Gretzky",
    answer_b: "Mario Lemieux",
    answer_c: "Jaromir Jagr",
    answer_d: "Mark Messier",
  },
  {
    difficulty: "Hard",
    question: "Who is the youngest player to win the Hart Memorial Trophy?",
    correct_answer: "C",
    fun_fact:
      "Sidney Crosby is the youngest player to win the Hart Memorial Trophy, awarded to the NHL's most valuable player.",
    answer_a: "Connor McDavid",
    answer_b: "Alex Ovechkin",
    answer_c: "Sidney Crosby",
    answer_d: "Patrick Kane",
  },
  {
    difficulty: "Easy",
    question: "Which team has won the most Stanley Cup championships?",
    correct_answer: "A",
    fun_fact:
      "The Montreal Canadiens have won the most Stanley Cup championships with 24 titles.",
    answer_a: "Montreal Canadiens",
    answer_b: "Toronto Maple Leafs",
    answer_c: "Detroit Red Wings",
    answer_d: "Boston Bruins",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the first goaltender to score a goal by shooting the puck into the opponent's net?",
    correct_answer: "B",
    fun_fact:
      "Ron Hextall was the first goaltender to score a goal by shooting the puck into the opponent's net.",
    answer_a: "Martin Brodeur",
    answer_b: "Ron Hextall",
    answer_c: "Dominik Hasek",
    answer_d: "Patrick Roy",
  },
  {
    difficulty: "Medium",
    question:
      "Who holds the record for the most career goals by a defenseman in NHL history?",
    correct_answer: "D",
    fun_fact:
      "Ray Bourque holds the record for the most career goals by a defenseman in NHL history with 410 goals.",
    answer_a: "Chris Chelios",
    answer_b: "Paul Coffey",
    answer_c: "Nicklas Lidstrom",
    answer_d: "Ray Bourque",
  },
  {
    difficulty: "Easy",
    question: "Which player is known as 'The Great One'?",
    correct_answer: "A",
    fun_fact:
      "Wayne Gretzky is known as 'The Great One' and is considered one of the greatest hockey players of all time.",
    answer_a: "Wayne Gretzky",
    answer_b: "Mario Lemieux",
    answer_c: "Bobby Orr",
    answer_d: "Gordie Howe",
  },
  {
    difficulty: "Medium",
    question: "Which team has the longest Stanley Cup drought in NHL history?",
    correct_answer: "B",
    fun_fact:
      "The Toronto Maple Leafs have the longest Stanley Cup drought in NHL history, last winning the championship in 1967.",
    answer_a: "Chicago Blackhawks",
    answer_b: "Toronto Maple Leafs",
    answer_c: "Vancouver Canucks",
    answer_d: "Buffalo Sabres",
  },
  {
    difficulty: "Hard",
    question:
      "Who is the only NHL player to score 50 goals in 50 games on two separate occasions?",
    correct_answer: "A",
    fun_fact:
      "Mike Bossy is the only NHL player to score 50 goals in 50 games on two separate occasions.",
    answer_a: "Mike Bossy",
    answer_b: "Wayne Gretzky",
    answer_c: "Bobby Hull",
    answer_d: "Maurice Richard",
  },
  {
    difficulty: "Medium",
    question:
      "Which NHL team was the first expansion team to win the Stanley Cup?",
    correct_answer: "C",
    fun_fact:
      "The Philadelphia Flyers were the first expansion team to win the Stanley Cup in 1974.",
    answer_a: "St. Louis Blues",
    answer_b: "Los Angeles Kings",
    answer_c: "Philadelphia Flyers",
    answer_d: "Pittsburgh Penguins",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the most penalty minutes in a single NHL season?",
    correct_answer: "D",
    fun_fact:
      "Dave Schultz holds the record for the most penalty minutes in a single NHL season with 472 penalty minutes in the 1974-75 season.",
    answer_a: "Tie Domi",
    answer_b: "Marty McSorley",
    answer_c: "Tiger Williams",
    answer_d: "Dave Schultz",
  },
  {
    difficulty: "Medium",
    question:
      "Which NHL goaltender holds the record for the most career shutouts?",
    correct_answer: "B",
    fun_fact:
      "Martin Brodeur holds the record for the most career shutouts by an NHL goaltender with 125 shutouts.",
    answer_a: "Terry Sawchuk",
    answer_b: "Martin Brodeur",
    answer_c: "Dominik Hasek",
    answer_d: "Patrick Roy",
  },
  {
    difficulty: "Easy",
    question: "Which NHL team has the most Stanley Cup Final appearances?",
    correct_answer: "C",
    fun_fact:
      "The Montreal Canadiens have the most Stanley Cup Final appearances with 34 appearances.",
    answer_a: "Toronto Maple Leafs",
    answer_b: "Detroit Red Wings",
    answer_c: "Montreal Canadiens",
    answer_d: "Boston Bruins",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the first European-born player to win the Conn Smythe Trophy?",
    correct_answer: "A",
    fun_fact:
      "Jaroslav Pouzar was the first European-born player to win the Conn Smythe Trophy in 1984.",
    answer_a: "Jaroslav Pouzar",
    answer_b: "Nicklas Lidstrom",
    answer_c: "Henrik Zetterberg",
    answer_d: "Pavel Datsyuk",
  },
  {
    difficulty: "Medium",
    question: "Which NHL player holds the record for the most career assists?",
    correct_answer: "D",
    fun_fact:
      "Wayne Gretzky holds the record for the most career assists in NHL history with 1,963 assists.",
    answer_a: "Joe Thornton",
    answer_b: "Mark Messier",
    answer_c: "Ron Francis",
    answer_d: "Wayne Gretzky",
  },
  {
    difficulty: "Easy",
    question: "Who was the first NHL player to score 50 goals in one season?",
    correct_answer: "B",
    fun_fact:
      "Maurice Richard was the first NHL player to score 50 goals in one season in 1944-45.",
    answer_a: "Gordie Howe",
    answer_b: "Maurice Richard",
    answer_c: "Bobby Hull",
    answer_d: "Wayne Gretzky",
  },
  {
    difficulty: "Hard",
    question:
      "Which NHL team holds the record for the longest undefeated streak?",
    correct_answer: "C",
    fun_fact:
      "The Philadelphia Flyers hold the record for the longest undefeated streak in NHL history with 35 games without a loss in the 1979-80 season.",
    answer_a: "Chicago Blackhawks",
    answer_b: "Montreal Canadiens",
    answer_c: "Philadelphia Flyers",
    answer_d: "Boston Bruins",
  },
  {
    difficulty: "Medium",
    question: "Who was the first NHL player to score 100 points in a season?",
    correct_answer: "A",
    fun_fact:
      "Phil Esposito was the first NHL player to score 100 points in a season in 1968-69.",
    answer_a: "Phil Esposito",
    answer_b: "Bobby Orr",
    answer_c: "Gordie Howe",
    answer_d: "Wayne Gretzky",
  },
  {
    difficulty: "Easy",
    question: "Which NHL team was known as the 'Broad Street Bullies'?",
    correct_answer: "B",
    fun_fact:
      "The Philadelphia Flyers were known as the 'Broad Street Bullies' for their aggressive style of play, particularly during the 1970s.",
    answer_a: "Chicago Blackhawks",
    answer_b: "Philadelphia Flyers",
    answer_c: "Boston Bruins",
    answer_d: "Detroit Red Wings",
  },
  {
    difficulty: "Medium",
    question: "Which NHL player was known as 'Mr. Hockey'?",
    correct_answer: "C",
    fun_fact:
      "Gordie Howe, also known as 'Mr. Hockey,' is considered one of the greatest players in NHL history.",
    answer_a: "Maurice Richard",
    answer_b: "Bobby Orr",
    answer_c: "Gordie Howe",
    answer_d: "Jean Beliveau",
  },
  {
    difficulty: "Hard",
    question: "Who was the first NHL player to score 50 goals in 50 games?",
    correct_answer: "B",
    fun_fact:
      "Maurice Richard was the first NHL player to score 50 goals in 50 games in the 1944-45 season.",
    answer_a: "Bobby Hull",
    answer_b: "Maurice Richard",
    answer_c: "Gordie Howe",
    answer_d: "Wayne Gretzky",
  },
  {
    difficulty: "Medium",
    question: "Which NHL goaltender holds the record for the most career wins?",
    correct_answer: "C",
    fun_fact:
      "Martin Brodeur holds the record for the most career wins by an NHL goaltender with 691 wins.",
    answer_a: "Patrick Roy",
    answer_b: "Terry Sawchuk",
    answer_c: "Martin Brodeur",
    answer_d: "Dominik Hasek",
  },
  {
    difficulty: "Easy",
    question: "Who was the first NHL player to score 500 goals?",
    correct_answer: "A",
    fun_fact:
      "Maurice Richard was the first NHL player to score 500 goals in his career.",
    answer_a: "Maurice Richard",
    answer_b: "Gordie Howe",
    answer_c: "Bobby Hull",
    answer_d: "Wayne Gretzky",
  },
  {
    difficulty: "Hard",
    question:
      "Which NHL player holds the record for the most points in a single season?",
    correct_answer: "D",
    fun_fact:
      "Wayne Gretzky holds the record for the most points in a single NHL season with 215 points.",
    answer_a: "Mario Lemieux",
    answer_b: "Phil Esposito",
    answer_c: "Bobby Orr",
    answer_d: "Wayne Gretzky",
  },
];

const nbaData = [
  {
    difficulty: "Medium",
    question: "Who holds the record for the most career points in NBA history?",
    correct_answer: "D",
    fun_fact:
      "Kareem Abdul-Jabbar holds the record for the most career points in NBA history with 38,387 points.",
    answer_a: "LeBron James",
    answer_b: "Kobe Bryant",
    answer_c: "Michael Jordan",
    answer_d: "Kareem Abdul-Jabbar",
  },
  {
    difficulty: "Hard",
    question:
      "Who is the youngest player to win the NBA Most Valuable Player (MVP) award?",
    correct_answer: "B",
    fun_fact:
      "Derrick Rose is the youngest player to win the NBA MVP award at the age of 22.",
    answer_a: "LeBron James",
    answer_b: "Derrick Rose",
    answer_c: "Kevin Durant",
    answer_d: "Giannis Antetokounmpo",
  },
  {
    difficulty: "Easy",
    question: "Which team has won the most NBA championships?",
    correct_answer: "A",
    fun_fact:
      "The Boston Celtics have won the most NBA championships with 17 titles.",
    answer_a: "Boston Celtics",
    answer_b: "Los Angeles Lakers",
    answer_c: "Chicago Bulls",
    answer_d: "Golden State Warriors",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the most points scored in a single NBA game?",
    correct_answer: "C",
    fun_fact:
      "Wilt Chamberlain holds the record for the most points scored in a single NBA game with 100 points.",
    answer_a: "Kobe Bryant",
    answer_b: "Michael Jordan",
    answer_c: "Wilt Chamberlain",
    answer_d: "LeBron James",
  },
  {
    difficulty: "Medium",
    question: "Who holds the record for the most assists in NBA history?",
    correct_answer: "A",
    fun_fact:
      "John Stockton holds the record for the most assists in NBA history with 15,806 assists.",
    answer_a: "John Stockton",
    answer_b: "Magic Johnson",
    answer_c: "Jason Kidd",
    answer_d: "Steve Nash",
  },
  {
    difficulty: "Easy",
    question: "Which NBA player is known as 'The King'?",
    correct_answer: "B",
    fun_fact:
      "LeBron James is known as 'The King' and is considered one of the greatest basketball players of all time.",
    answer_a: "Michael Jordan",
    answer_b: "LeBron James",
    answer_c: "Kobe Bryant",
    answer_d: "Magic Johnson",
  },
  {
    difficulty: "Medium",
    question: "Which NBA team has the longest championship drought?",
    correct_answer: "C",
    fun_fact:
      "The Sacramento Kings have the longest championship drought in NBA history, last winning a championship in 1951.",
    answer_a: "Los Angeles Clippers",
    answer_b: "Phoenix Suns",
    answer_c: "Sacramento Kings",
    answer_d: "Utah Jazz",
  },
  {
    difficulty: "Hard",
    question: "Who holds the record for the most steals in NBA history?",
    correct_answer: "C",
    fun_fact:
      "John Stockton holds the record for the most steals in NBA history with 3,265 steals.",
    answer_a: "Kobe Bryant",
    answer_b: "Michael Jordan",
    answer_c: "John Stockton",
    answer_d: "Gary Payton",
  },
  {
    difficulty: "Medium",
    question:
      "Which NBA player has won the most Defensive Player of the Year awards?",
    correct_answer: "B",
    fun_fact:
      "Dwight Howard has won the most Defensive Player of the Year awards with 3 awards.",
    answer_a: "Ben Wallace",
    answer_b: "Dwight Howard",
    answer_c: "Dikembe Mutombo",
    answer_d: "Rudy Gobert",
  },
  {
    difficulty: "Hard",
    question:
      "Who is the only player to win NBA MVP, Coach of the Year, and Executive of the Year?",
    correct_answer: "D",
    fun_fact:
      "Larry Bird is the only player to win NBA MVP, Coach of the Year, and Executive of the Year.",
    answer_a: "Magic Johnson",
    answer_b: "Michael Jordan",
    answer_c: "LeBron James",
    answer_d: "Larry Bird",
  },
  {
    difficulty: "Medium",
    question: "Which NBA player has won the most NBA championships?",
    correct_answer: "C",
    fun_fact:
      "Bill Russell has won the most NBA championships with 11 titles as a player.",
    answer_a: "Kareem Abdul-Jabbar",
    answer_b: "Michael Jordan",
    answer_c: "Bill Russell",
    answer_d: "Magic Johnson",
  },
  {
    difficulty: "Easy",
    question:
      "Who was the first NBA player to win MVP, Coach of the Year, and Executive of the Year?",
    correct_answer: "A",
    fun_fact:
      "Bill Sharman was the first NBA player to win MVP, Coach of the Year, and Executive of the Year.",
    answer_a: "Bill Sharman",
    answer_b: "Larry Bird",
    answer_c: "Magic Johnson",
    answer_d: "Jerry West",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the most triple-doubles in NBA history?",
    correct_answer: "A",
    fun_fact:
      "Russell Westbrook holds the record for the most triple-doubles in NBA history with over 180 triple-doubles.",
    answer_a: "Russell Westbrook",
    answer_b: "Magic Johnson",
    answer_c: "Oscar Robertson",
    answer_d: "LeBron James",
  },
  {
    difficulty: "Medium",
    question: "Which NBA player has the most career three-pointers made?",
    correct_answer: "C",
    fun_fact:
      "Ray Allen holds the record for the most career three-pointers made in NBA history with 2,973 three-pointers.",
    answer_a: "Stephen Curry",
    answer_b: "Reggie Miller",
    answer_c: "Ray Allen",
    answer_d: "Kyle Korver",
  },
  {
    difficulty: "Easy",
    question:
      "Who was the first player to be drafted directly from high school to the NBA?",
    correct_answer: "B",
    fun_fact:
      "Moses Malone was the first player to be drafted directly from high school to the NBA in 1974.",
    answer_a: "Kobe Bryant",
    answer_b: "Moses Malone",
    answer_c: "LeBron James",
    answer_d: "Kevin Garnett",
  },
  {
    difficulty: "Medium",
    question: "Which NBA team has the longest playoff streak in NBA history?",
    correct_answer: "A",
    fun_fact:
      "The Syracuse Nationals/Philadelphia 76ers hold the record for the longest playoff streak in NBA history with 22 consecutive playoff appearances from 1950 to 1971.",
    answer_a: "Philadelphia 76ers",
    answer_b: "San Antonio Spurs",
    answer_c: "Los Angeles Lakers",
    answer_d: "Boston Celtics",
  },
  {
    difficulty: "Hard",
    question: "Who was the shortest player to ever play in the NBA?",
    correct_answer: "A",
    fun_fact:
      "Tyrone 'Muggsy' Bogues is the shortest player to ever play in the NBA at 5 feet 3 inches tall.",
    answer_a: "Tyrone 'Muggsy' Bogues",
    answer_b: "Nate Robinson",
    answer_c: "Spud Webb",
    answer_d: "Earl Boykins",
  },
  {
    difficulty: "Medium",
    question: "Who holds the record for the most blocks in a single NBA game?",
    correct_answer: "B",
    fun_fact:
      "Elmore Smith holds the record for the most blocks in a single NBA game with 17 blocks.",
    answer_a: "Hakeem Olajuwon",
    answer_b: "Elmore Smith",
    answer_c: "Manute Bol",
    answer_d: "Dikembe Mutombo",
  },
  {
    difficulty: "Easy",
    question: "Who is the NBA's all-time leading scorer in playoff history?",
    correct_answer: "C",
    fun_fact:
      "LeBron James is the NBA's all-time leading scorer in playoff history.",
    answer_a: "Michael Jordan",
    answer_b: "Kareem Abdul-Jabbar",
    answer_c: "LeBron James",
    answer_d: "Kobe Bryant",
  },
  {
    difficulty: "Medium",
    question:
      "Which NBA player won the NBA Finals MVP while playing for the losing team?",
    correct_answer: "D",
    fun_fact:
      "Jerry West won the NBA Finals MVP while playing for the losing team, the Los Angeles Lakers, in the 1969 NBA Finals.",
    answer_a: "Shaquille O'Neal",
    answer_b: "Magic Johnson",
    answer_c: "Kobe Bryant",
    answer_d: "Jerry West",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the most points scored in a single NBA playoff game?",
    correct_answer: "A",
    fun_fact:
      "Michael Jordan holds the record for the most points scored in a single NBA playoff game with 63 points against the Boston Celtics on April 20, 1986.",
    answer_a: "Michael Jordan",
    answer_b: "LeBron James",
    answer_c: "Kobe Bryant",
    answer_d: "Wilt Chamberlain",
  },
  {
    difficulty: "Medium",
    question:
      "Who was the first international player to be drafted first overall in the NBA Draft?",
    correct_answer: "A",
    fun_fact:
      "Yao Ming was the first international player to be drafted first overall in the NBA Draft in 2002.",
    answer_a: "Yao Ming",
    answer_b: "Pau Gasol",
    answer_c: "Dirk Nowitzki",
    answer_d: "Manu Ginobili",
  },
  {
    difficulty: "Hard",
    question:
      "Which NBA team had the longest winning streak in a single season?",
    correct_answer: "C",
    fun_fact:
      "The Los Angeles Lakers hold the record for the longest winning streak in a single NBA season with 33 consecutive wins in the 1971-1972 season.",
    answer_a: "Golden State Warriors",
    answer_b: "Chicago Bulls",
    answer_c: "Los Angeles Lakers",
    answer_d: "Boston Celtics",
  },
  {
    difficulty: "Medium",
    question:
      "Who was the first NBA player to be unanimously selected as the NBA MVP?",
    correct_answer: "B",
    fun_fact:
      "Stephen Curry was the first NBA player to be unanimously selected as the NBA MVP in the 2015-2016 season.",
    answer_a: "Michael Jordan",
    answer_b: "Stephen Curry",
    answer_c: "LeBron James",
    answer_d: "Kevin Durant",
  },
  {
    difficulty: "Easy",
    question:
      "Who holds the record for the most points scored in a single NBA game?",
    correct_answer: "D",
    fun_fact:
      "Wilt Chamberlain holds the record for the most points scored in a single NBA game with 100 points.",
    answer_a: "Michael Jordan",
    answer_b: "Kobe Bryant",
    answer_c: "LeBron James",
    answer_d: "Wilt Chamberlain",
  },
  {
    difficulty: "Medium",
    question: "Which NBA player has the most career rebounds?",
    correct_answer: "A",
    fun_fact:
      "Wilt Chamberlain holds the record for the most career rebounds in NBA history with 23,924 rebounds.",
    answer_a: "Wilt Chamberlain",
    answer_b: "Bill Russell",
    answer_c: "Kareem Abdul-Jabbar",
    answer_d: "Tim Duncan",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the most steals in a single NBA season?",
    correct_answer: "C",
    fun_fact:
      "Alvin Robertson holds the record for the most steals in a single NBA season with 301 steals in the 1985-1986 season.",
    answer_a: "Michael Jordan",
    answer_b: "Gary Payton",
    answer_c: "Alvin Robertson",
    answer_d: "Chris Paul",
  },
  {
    difficulty: "Medium",
    question:
      "Which NBA player has won the most NBA championships as a player?",
    correct_answer: "B",
    fun_fact:
      "Bill Russell has won the most NBA championships as a player with 11 championships.",
    answer_a: "Michael Jordan",
    answer_b: "Bill Russell",
    answer_c: "Magic Johnson",
    answer_d: "Kobe Bryant",
  },
  {
    difficulty: "Easy",
    question:
      "Who was the first player to be drafted as the number one pick in the NBA Draft?",
    correct_answer: "A",
    fun_fact:
      "Clifton McNeely was the first player to be drafted as the number one pick in the NBA Draft in 1947.",
    answer_a: "Clifton McNeely",
    answer_b: "Joe Smith",
    answer_c: "LeBron James",
    answer_d: "Kwame Brown",
  },
  {
    difficulty: "Medium",
    question: "Which NBA player won the most NBA Finals MVP awards?",
    correct_answer: "A",
    fun_fact:
      "Michael Jordan won the most NBA Finals MVP awards with 6 awards.",
    answer_a: "Michael Jordan",
    answer_b: "LeBron James",
    answer_c: "Magic Johnson",
    answer_d: "Shaquille O'Neal",
  },
  {
    difficulty: "Hard",
    question:
      "Who holds the record for the highest career scoring average in NBA history?",
    correct_answer: "B",
    fun_fact:
      "Michael Jordan holds the record for the highest career scoring average in NBA history with 30.12 points per game.",
    answer_a: "Kareem Abdul-Jabbar",
    answer_b: "Michael Jordan",
    answer_c: "Wilt Chamberlain",
    answer_d: "LeBron James",
  },
  {
    difficulty: "Medium",
    question:
      "Which NBA player holds the record for the most points scored in a single NBA All-Star Game?",
    correct_answer: "A",
    fun_fact:
      "Wilt Chamberlain holds the record for the most points scored in a single NBA All-Star Game with 42 points.",
    answer_a: "Wilt Chamberlain",
    answer_b: "Michael Jordan",
    answer_c: "LeBron James",
    answer_d: "Kobe Bryant",
  },
];

const lotrData = [
  {
    difficulty: "Medium",
    question: "Who is the author of 'The Lord of the Rings'?",
    correct_answer: "C",
    fun_fact:
      "J.R.R. Tolkien is the author of 'The Lord of the Rings' trilogy, first published in the mid-20th century.",
    answer_a: "C.S. Lewis",
    answer_b: "George R.R. Martin",
    answer_c: "J.R.R. Tolkien",
    answer_d: "Terry Brooks",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the volcano where the One Ring is destroyed?",
    correct_answer: "A",
    fun_fact:
      "Mount Doom, located in the land of Mordor, is the volcano where the One Ring is ultimately destroyed.",
    answer_a: "Mount Doom",
    answer_b: "Mount Erebor",
    answer_c: "Mount Celebdil",
    answer_d: "Mount Gundabad",
  },
  {
    difficulty: "Easy",
    question: "What is the name of Gandalf's sword?",
    correct_answer: "B",
    fun_fact:
      "Gandalf's sword is named Glamdring, also known as the 'Foe-Hammer'.",
    answer_a: "Sting",
    answer_b: "Glamdring",
    answer_c: "Anduril",
    answer_d: "Orcrist",
  },
  {
    difficulty: "Hard",
    question: "Who was the first ruler of Gondor?",
    correct_answer: "C",
    fun_fact:
      "Elendil was the first ruler of Gondor, who founded the kingdom after the fall of Númenor.",
    answer_a: "Isildur",
    answer_b: "Anárion",
    answer_c: "Elendil",
    answer_d: "Aragorn",
  },
  {
    difficulty: "Medium",
    question: "What is the name of Aragorn's sword?",
    correct_answer: "D",
    fun_fact:
      "Aragorn's sword is named Anduril, forged from the shards of Narsil.",
    answer_a: "Glamdring",
    answer_b: "Sting",
    answer_c: "Orcrist",
    answer_d: "Anduril",
  },
  {
    difficulty: "Easy",
    question: "What is the name of Bilbo Baggins' home?",
    correct_answer: "C",
    fun_fact: "Bilbo Baggins' home is named Bag End, located in the Shire.",
    answer_a: "Hobbiton",
    answer_b: "Rivendell",
    answer_c: "Bag End",
    answer_d: "The Prancing Pony",
  },
  {
    difficulty: "Medium",
    question: "What creature is Gollum?",
    correct_answer: "A",
    fun_fact:
      "Gollum, originally a hobbit-like creature named Sméagol, was corrupted by the One Ring and transformed over centuries into a twisted, pitiful creature.",
    answer_a: "Hobbit",
    answer_b: "Elf",
    answer_c: "Dwarf",
    answer_d: "Orc",
  },
  {
    difficulty: "Hard",
    question: "Who is the mother of Arwen Evenstar?",
    correct_answer: "B",
    fun_fact:
      "Arwen Evenstar's mother is Celebrian, daughter of Celeborn and Galadriel.",
    answer_a: "Galadriel",
    answer_b: "Celebrian",
    answer_c: "Arwen",
    answer_d: "Eowyn",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the giant spider in 'The Lord of the Rings'?",
    correct_answer: "C",
    fun_fact:
      "Shelob is a giant spider, offspring of Ungoliant, who dwells in the pass of Cirith Ungol.",
    answer_a: "Ungoliant",
    answer_b: "Arachne",
    answer_c: "Shelob",
    answer_d: "Aragog",
  },
  {
    difficulty: "Easy",
    question: "Who is the creator of the One Ring?",
    correct_answer: "A",
    fun_fact:
      "Sauron, the Dark Lord of Mordor, forged the One Ring in the fires of Mount Doom.",
    answer_a: "Sauron",
    answer_b: "Morgoth",
    answer_c: "Gollum",
    answer_d: "Saruman",
  },
  {
    difficulty: "Medium",
    question:
      "Who becomes the ruler of the Shire after the events of 'The Lord of the Rings'?",
    correct_answer: "B",
    fun_fact:
      "After the events of 'The Lord of the Rings', Samwise Gamgee becomes the mayor of the Shire.",
    answer_a: "Frodo Baggins",
    answer_b: "Samwise Gamgee",
    answer_c: "Merry Brandybuck",
    answer_d: "Pippin Took",
  },
  {
    difficulty: "Hard",
    question: "What is the name of the fortress of Saruman?",
    correct_answer: "C",
    fun_fact:
      "Orthanc is the name of the tower-fortress of Saruman, located in Isengard.",
    answer_a: "Barad-dûr",
    answer_b: "Minas Morgul",
    answer_c: "Orthanc",
    answer_d: "Cirith Ungol",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the mountain range that separates Rohan from Gondor?",
    correct_answer: "D",
    fun_fact:
      "The White Mountains, also known as the Ered Nimrais, separate Rohan from Gondor.",
    answer_a: "Misty Mountains",
    answer_b: "Grey Mountains",
    answer_c: "Blue Mountains",
    answer_d: "White Mountains",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the wizard who leads the Fellowship of the Ring?",
    correct_answer: "B",
    fun_fact:
      "Gandalf, also known as Mithrandir, leads the Fellowship of the Ring.",
    answer_a: "Radagast",
    answer_b: "Gandalf",
    answer_c: "Saruman",
    answer_d: "Alatar",
  },
  {
    difficulty: "Medium",
    question: "What is the name of Legolas' father?",
    correct_answer: "A",
    fun_fact:
      "Thranduil is the father of Legolas Greenleaf, and the King of the Woodland Realm.",
    answer_a: "Thranduil",
    answer_b: "Elrond",
    answer_c: "Celeborn",
    answer_d: "Galadriel",
  },
  {
    difficulty: "Hard",
    question: "Who is the oldest of the Ainur?",
    correct_answer: "C",
    fun_fact:
      "Tom Bombadil, a mysterious figure who dwells in the Old Forest, is considered one of the oldest beings in Middle-earth.",
    answer_a: "Manwe",
    answer_b: "Melian",
    answer_c: "Tom Bombadil",
    answer_d: "Ulmo",
  },
  {
    difficulty: "Medium",
    question: "What gift does Galadriel give to Legolas?",
    correct_answer: "D",
    fun_fact:
      "Galadriel gives Legolas a bow of the Galadhrim and a quiver of arrows.",
    answer_a: "Elven cloak",
    answer_b: "Mithril shirt",
    answer_c: "Lembas bread",
    answer_d: "Bow and arrows",
  },
  {
    difficulty: "Easy",
    question: "What is the name of the river that flows through Lothlórien?",
    correct_answer: "C",
    fun_fact: "The river that flows through Lothlórien is named Celebrant.",
    answer_a: "Anduin",
    answer_b: "Bruinen",
    answer_c: "Celebrant",
    answer_d: "Entwash",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the Ents' forest?",
    correct_answer: "A",
    fun_fact:
      "Fangorn Forest, also known as Entwood, is the ancient forest home of the Ents.",
    answer_a: "Fangorn Forest",
    answer_b: "Old Forest",
    answer_c: "Mirkwood",
    answer_d: "Lothlórien",
  },
  {
    difficulty: "Hard",
    question: "What is the name of the fortress of the Witch-king of Angmar?",
    correct_answer: "B",
    fun_fact:
      "Carn Dûm is the fortress of the Witch-king of Angmar, located in the northern wastes of Middle-earth.",
    answer_a: "Minas Morgul",
    answer_b: "Carn Dûm",
    answer_c: "Barad-dûr",
    answer_d: "Orthanc",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the river that flows through Gondor?",
    correct_answer: "C",
    fun_fact: "The river that flows through Gondor is named Anduin.",
    answer_a: "Bruinen",
    answer_b: "Celebrant",
    answer_c: "Anduin",
    answer_d: "Entwash",
  },
  {
    difficulty: "Easy",
    question: "What is the name of the fortress-city of Gondor?",
    correct_answer: "D",
    fun_fact:
      "Minas Tirith, also known as the White City, is the fortress-city of Gondor.",
    answer_a: "Edoras",
    answer_b: "Minas Morgul",
    answer_c: "Osgiliath",
    answer_d: "Minas Tirith",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the dragon who attacks the Lonely Mountain?",
    correct_answer: "A",
    fun_fact:
      "Smaug, the Golden, is the dragon who attacks the Lonely Mountain and captures the treasure within.",
    answer_a: "Smaug",
    answer_b: "Glaurung",
    answer_c: "Ancalagon",
    answer_d: "Scatha",
  },
  {
    difficulty: "Hard",
    question: "Who was the first ruler of Númenor?",
    correct_answer: "C",
    fun_fact:
      "Elros Tar-Minyatur, brother of Elrond, was the first ruler of Númenor.",
    answer_a: "Tar-Palantir",
    answer_b: "Tar-Aldarion",
    answer_c: "Elros Tar-Minyatur",
    answer_d: "Tar-Elendil",
  },
  {
    difficulty: "Medium",
    question: "What is the name of Aragorn's mother?",
    correct_answer: "A",
    fun_fact: "Gilraen is the mother of Aragorn, also known as Strider.",
    answer_a: "Gilraen",
    answer_b: "Morwen",
    answer_c: "Finduilas",
    answer_d: "Ioreth",
  },
  {
    difficulty: "Easy",
    question: "What is the name of the river that flows through Rivendell?",
    correct_answer: "B",
    fun_fact:
      "The river that flows through Rivendell is named Bruinen, also known as the Loudwater.",
    answer_a: "Anduin",
    answer_b: "Bruinen",
    answer_c: "Celebrant",
    answer_d: "Entwash",
  },
  {
    difficulty: "Medium",
    question: "Who is the father of Legolas?",
    correct_answer: "C",
    fun_fact:
      "Thranduil, King of the Woodland Realm, is the father of Legolas Greenleaf.",
    answer_a: "Celeborn",
    answer_b: "Elrond",
    answer_c: "Thranduil",
    answer_d: "Galadriel",
  },
  {
    difficulty: "Hard",
    question: "What is the name of Gandalf's sword?",
    correct_answer: "B",
    fun_fact:
      "Gandalf's sword is named Glamdring, also known as the 'Foe-Hammer'.",
    answer_a: "Sting",
    answer_b: "Glamdring",
    answer_c: "Anduril",
    answer_d: "Orcrist",
  },
  {
    difficulty: "Medium",
    question: "Who is the leader of the Nazgûl?",
    correct_answer: "A",
    fun_fact:
      "The Witch-king of Angmar, also known as the Lord of the Nazgûl, is the chief among Sauron's servants.",
    answer_a: "Witch-king of Angmar",
    answer_b: "Khamûl the Easterling",
    answer_c: "Morgomir",
    answer_d: "The Mouth of Sauron",
  },
  {
    difficulty: "Easy",
    question: "What is the name of the inn in Bree?",
    correct_answer: "C",
    fun_fact:
      "The Prancing Pony is the name of the inn in Bree where Frodo Baggins and company meet Strider.",
    answer_a: "The Green Dragon",
    answer_b: "The Dancing Bear",
    answer_c: "The Prancing Pony",
    answer_d: "The Golden Perch",
  },
  {
    difficulty: "Medium",
    question: "Who is the father of Boromir and Faramir?",
    correct_answer: "A",
    fun_fact:
      "Denethor II, Steward of Gondor, is the father of Boromir and Faramir.",
    answer_a: "Denethor II",
    answer_b: "Théoden",
    answer_c: "Thranduil",
    answer_d: "Elrond",
  },
  {
    difficulty: "Hard",
    question: "What is the name of the horse of Éomer?",
    correct_answer: "D",
    fun_fact: "Éomer's horse is named Firefoot.",
    answer_a: "Shadowfax",
    answer_b: "Windfola",
    answer_c: "Arod",
    answer_d: "Firefoot",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the fortress of the King of Rohan?",
    correct_answer: "B",
    fun_fact:
      "Edoras is the name of the fortress of the King of Rohan, located atop the hill of Meduseld.",
    answer_a: "Hornburg",
    answer_b: "Edoras",
    answer_c: "Helms Deep",
    answer_d: "Dunharrow",
  },
  {
    difficulty: "Easy",
    question: "Who is the chief antagonist in 'The Lord of the Rings'?",
    correct_answer: "C",
    fun_fact:
      "Sauron, the Dark Lord of Mordor, is the chief antagonist in 'The Lord of the Rings'.",
    answer_a: "Gollum",
    answer_b: "Saruman",
    answer_c: "Sauron",
    answer_d: "The Witch-king of Angmar",
  },
  {
    difficulty: "Medium",
    question: "Who is the steward of Gondor during the War of the Ring?",
    correct_answer: "D",
    fun_fact:
      "Denethor II serves as the steward of Gondor during the War of the Ring, until his tragic end.",
    answer_a: "Boromir",
    answer_b: "Faramir",
    answer_c: "Théoden",
    answer_d: "Denethor II",
  },
  {
    difficulty: "Hard",
    question: "Who is the father of Aragorn?",
    correct_answer: "A",
    fun_fact: "Aragorn's father is Arathorn II, chieftain of the Dúnedain.",
    answer_a: "Arathorn II",
    answer_b: "Elendil",
    answer_c: "Isildur",
    answer_d: "Thengel",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the lake-city of the Men of Gondor?",
    correct_answer: "B",
    fun_fact:
      "Minas Tirith, also known as the White City, is the lake-city of the Men of Gondor.",
    answer_a: "Osgiliath",
    answer_b: "Minas Tirith",
    answer_c: "Minas Morgul",
    answer_d: "Dol Amroth",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the mountain where Frodo and Sam begin their journey to Mordor?",
    correct_answer: "A",
    fun_fact:
      "Mount Doom, also known as Orodruin, is the mountain where Frodo and Sam begin their journey to destroy the One Ring.",
    answer_a: "Mount Doom",
    answer_b: "Mount Caradhras",
    answer_c: "Mount Gundabad",
    answer_d: "Mount Celebdil",
  },
  {
    difficulty: "Medium",
    question: "Who is the Lord of Lothlórien?",
    correct_answer: "C",
    fun_fact: "Celeborn, husband of Galadriel, is the Lord of Lothlórien.",
    answer_a: "Galadriel",
    answer_b: "Haldir",
    answer_c: "Celeborn",
    answer_d: "Legolas",
  },
];

const harryPotterData = [
  {
    difficulty: "Medium",
    question:
      "What is the name of the main protagonist in the Harry Potter series?",
    correct_answer: "A",
    fun_fact:
      "Harry Potter, also known as 'The Boy Who Lived,' is the main protagonist of the series.",
    answer_a: "Harry Potter",
    answer_b: "Ron Weasley",
    answer_c: "Hermione Granger",
    answer_d: "Neville Longbottom",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the actress who portrays Hermione Granger in the film adaptations?",
    correct_answer: "C",
    fun_fact:
      "Emma Watson portrays Hermione Granger in the Harry Potter film adaptations.",
    answer_a: "Bonnie Wright",
    answer_b: "Evanna Lynch",
    answer_c: "Emma Watson",
    answer_d: "Helena Bonham Carter",
  },
  {
    difficulty: "Easy",
    question: "What is the name of Harry Potter's owl?",
    correct_answer: "B",
    fun_fact: "Hedwig is Harry Potter's loyal snowy owl companion.",
    answer_a: "Errol",
    answer_b: "Hedwig",
    answer_c: "Crookshanks",
    answer_d: "Pigwidgeon",
  },
  {
    difficulty: "Medium",
    question: "Who is the Half-Blood Prince?",
    correct_answer: "D",
    fun_fact:
      "Severus Snape is revealed to be the mysterious Half-Blood Prince in the sixth book, 'Harry Potter and the Half-Blood Prince.'",
    answer_a: "Albus Dumbledore",
    answer_b: "Harry Potter",
    answer_c: "Tom Riddle",
    answer_d: "Severus Snape",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the dragon that Harry faces in the Triwizard Tournament?",
    correct_answer: "A",
    fun_fact:
      "The Hungarian Horntail is one of the most dangerous dragon breeds and is faced by Harry in the Triwizard Tournament.",
    answer_a: "Hungarian Horntail",
    answer_b: "Norwegian Ridgeback",
    answer_c: "Swedish Short-Snout",
    answer_d: "Chinese Fireball",
  },
  {
    difficulty: "Medium",
    question:
      "What position does Harry Potter play on the Gryffindor Quidditch team?",
    correct_answer: "C",
    fun_fact:
      "Harry Potter plays as the Seeker, whose primary goal is to catch the Golden Snitch.",
    answer_a: "Chaser",
    answer_b: "Beater",
    answer_c: "Seeker",
    answer_d: "Keeper",
  },
  {
    difficulty: "Easy",
    question: "What is the name of the school that Harry Potter attends?",
    correct_answer: "D",
    fun_fact:
      "Hogwarts School of Witchcraft and Wizardry is the magical school attended by Harry Potter and his friends.",
    answer_a: "Beauxbatons Academy of Magic",
    answer_b: "Durmstrang Institute",
    answer_c: "Ilvermorny School of Witchcraft and Wizardry",
    answer_d: "Hogwarts School of Witchcraft and Wizardry",
  },
  {
    difficulty: "Medium",
    question: "What does the acronym O.W.L. stand for in the wizarding world?",
    correct_answer: "A",
    fun_fact:
      "O.W.L. stands for Ordinary Wizarding Level, which are important exams taken by fifth-year students at Hogwarts.",
    answer_a: "Ordinary Wizarding Level",
    answer_b: "Outstanding Wizarding Lore",
    answer_c: "Official Wizarding License",
    answer_d: "Ordinance of Wizarding Laws",
  },
  {
    difficulty: "Hard",
    question: "What is the core of Harry Potter's wand?",
    correct_answer: "B",
    fun_fact:
      "The core of Harry Potter's wand is a phoenix feather, which also shares the same core as Lord Voldemort's wand.",
    answer_a: "Unicorn Hair",
    answer_b: "Phoenix Feather",
    answer_c: "Dragon Heartstring",
    answer_d: "Veela Hair",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the magical creature that can transform into anyone's worst fear?",
    correct_answer: "C",
    fun_fact:
      "A Boggart is a shapeshifting magical creature that takes on the form of whatever is most feared by the viewer.",
    answer_a: "Dementor",
    answer_b: "Hippogriff",
    answer_c: "Boggart",
    answer_d: "Thestral",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the train station where the Hogwarts Express departs?",
    correct_answer: "A",
    fun_fact:
      "Platform 9¾ is a magical platform at King's Cross Station in London that serves as the departure point for the Hogwarts Express.",
    answer_a: "Platform 9¾",
    answer_b: "Platform 7½",
    answer_c: "Platform 8⅓",
    answer_d: "Platform 10½",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the three-headed dog that guards the Philosopher's Stone?",
    correct_answer: "B",
    fun_fact:
      "Fluffy is the three-headed dog that guards the trapdoor leading to the Philosopher's Stone.",
    answer_a: "Fang",
    answer_b: "Fluffy",
    answer_c: "Norbert",
    answer_d: "Aragog",
  },
  {
    difficulty: "Hard",
    question: "What are the names of the Weasley twins?",
    correct_answer: "D",
    fun_fact:
      "Fred and George Weasley are mischievous twins known for their pranks and inventions.",
    answer_a: "Percy and Charlie",
    answer_b: "Bill and Ron",
    answer_c: "Arthur and Fred",
    answer_d: "Fred and George",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the house-elf who serves the Malfoy family?",
    correct_answer: "A",
    fun_fact:
      "Dobby is a loyal house-elf who initially serves the Malfoy family before becoming a free elf.",
    answer_a: "Dobby",
    answer_b: "Kreacher",
    answer_c: "Winky",
    answer_d: "Hokey",
  },
  {
    difficulty: "Easy",
    question: "What magical artifact allows its possessor to become invisible?",
    correct_answer: "C",
    fun_fact:
      "The Invisibility Cloak is a powerful magical artifact that renders the wearer invisible.",
    answer_a: "Time-Turner",
    answer_b: "Elder Wand",
    answer_c: "Invisibility Cloak",
    answer_d: "Marauder's Map",
  },
  {
    difficulty: "Medium",
    question:
      "What type of dragon does Hagrid raise in 'Harry Potter and the Philosopher's Stone'?",
    correct_answer: "D",
    fun_fact:
      "Norbert, or Norberta in the case of a female, is a Norwegian Ridgeback dragon that Hagrid hatches from an egg.",
    answer_a: "Hungarian Horntail",
    answer_b: "Chinese Fireball",
    answer_c: "Swedish Short-Snout",
    answer_d: "Norwegian Ridgeback",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the goblin who helps Harry, Ron, and Hermione break into Gringotts Bank?",
    correct_answer: "B",
    fun_fact:
      "Griphook is a goblin who assists Harry, Ron, and Hermione in breaking into Gringotts Bank in 'Harry Potter and the Deathly Hallows.'",
    answer_a: "Gornuk",
    answer_b: "Griphook",
    answer_c: "Bogrod",
    answer_d: "Travers",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the spell used to conjure a Patronus?",
    correct_answer: "C",
    fun_fact:
      "Expecto Patronum is the incantation used to summon a Patronus, a guardian of positive energy.",
    answer_a: "Expelliarmus",
    answer_b: "Lumos",
    answer_c: "Expecto Patronum",
    answer_d: "Alohomora",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the magical creature that serves as the Hogwarts caretaker?",
    correct_answer: "A",
    fun_fact:
      "Argus Filch is the cantankerous caretaker of Hogwarts School of Witchcraft and Wizardry.",
    answer_a: "Argus Filch",
    answer_b: "Rubeus Hagrid",
    answer_c: "Severus Snape",
    answer_d: "Poppy Pomfrey",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the final Horcrux that Harry destroys?",
    correct_answer: "B",
    fun_fact:
      "Nagini, Voldemort's snake, is the final Horcrux that Harry destroys, leading to Voldemort's ultimate defeat.",
    answer_a: "Tom Riddle's Diary",
    answer_b: "Nagini",
    answer_c: "Helga Hufflepuff's Cup",
    answer_d: "Rowena Ravenclaw's Diadem",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the house-elf who serves the House of Black?",
    correct_answer: "C",
    fun_fact:
      "Kreacher is the loyal house-elf who serves the House of Black, initially under the command of Sirius Black.",
    answer_a: "Hokey",
    answer_b: "Dobby",
    answer_c: "Kreacher",
    answer_d: "Winky",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the potion that allows a person to transform into someone else?",
    correct_answer: "A",
    fun_fact:
      "Polyjuice Potion is a complex concoction that allows the drinker to assume the appearance of another person.",
    answer_a: "Polyjuice Potion",
    answer_b: "Felix Felicis",
    answer_c: "Amortentia",
    answer_d: "Veritaserum",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the red-headed youngest child in the Weasley family?",
    correct_answer: "C",
    fun_fact:
      "Ginny Weasley is the youngest child and only daughter of the Weasley family.",
    answer_a: "Percy",
    answer_b: "Charlie",
    answer_c: "Ginny",
    answer_d: "Ron",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the secretive organization founded by Albus Dumbledore to oppose Voldemort?",
    correct_answer: "A",
    fun_fact:
      "The Order of the Phoenix is a secret society founded by Albus Dumbledore to fight against Voldemort and his Death Eaters.",
    answer_a: "The Order of the Phoenix",
    answer_b: "The Deathly Hallows",
    answer_c: "The Marauders",
    answer_d: "The Ministry of Magic",
  },
  {
    difficulty: "Hard",
    question: "What is the name of the wizarding prison guarded by Dementors?",
    correct_answer: "D",
    fun_fact:
      "Azkaban is a wizarding prison guarded by Dementors, where dark wizards and witches are imprisoned.",
    answer_a: "Nurmengard",
    answer_b: "Durmstrang",
    answer_c: "Beauxbatons",
    answer_d: "Azkaban",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the headmaster of Hogwarts when Harry Potter attends the school?",
    correct_answer: "A",
    fun_fact:
      "Albus Dumbledore serves as the wise and benevolent headmaster of Hogwarts during Harry Potter's time at the school.",
    answer_a: "Albus Dumbledore",
    answer_b: "Severus Snape",
    answer_c: "Minerva McGonagall",
    answer_d: "Dolores Umbridge",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the sport played on flying broomsticks in the wizarding world?",
    correct_answer: "B",
    fun_fact:
      "Quidditch is a popular sport played on flying broomsticks, consisting of seven players on each team.",
    answer_a: "Broomstick Racing",
    answer_b: "Quidditch",
    answer_c: "Wizardball",
    answer_d: "Broomstick Polo",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the vault in Gringotts Bank where the Philosopher's Stone was kept?",
    correct_answer: "C",
    fun_fact:
      "The Philosopher's Stone was kept in Vault 713 at Gringotts Bank before being retrieved by Harry Potter.",
    answer_a: "Vault 101",
    answer_b: "Vault 619",
    answer_c: "Vault 713",
    answer_d: "Vault 819",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the pub in Hogsmeade frequented by Hogwarts students?",
    correct_answer: "A",
    fun_fact:
      "The Three Broomsticks is a popular pub in Hogsmeade where Hogwarts students often visit to enjoy butterbeer.",
    answer_a: "The Three Broomsticks",
    answer_b: "The Leaky Cauldron",
    answer_c: "The Hog's Head",
    answer_d: "The Cauldron Inn",
  },
];

const starWarsData = [
  {
    difficulty: "Medium",
    question: "Who is Luke Skywalker's father?",
    correct_answer: "C",
    fun_fact:
      "Darth Vader, formerly known as Anakin Skywalker, is revealed to be Luke Skywalker's father in 'The Empire Strikes Back.'",
    answer_a: "Obi-Wan Kenobi",
    answer_b: "Emperor Palpatine",
    answer_c: "Darth Vader",
    answer_d: "Han Solo",
  },
  {
    difficulty: "Hard",
    question: "What is the name of Boba Fett's ship?",
    correct_answer: "A",
    fun_fact:
      "Boba Fett's iconic ship is called the Slave I, a Firespray-31-class patrol and attack craft.",
    answer_a: "Slave I",
    answer_b: "Millennium Falcon",
    answer_c: "TIE Fighter",
    answer_d: "X-wing Starfighter",
  },
  {
    difficulty: "Easy",
    question: "What is the primary weapon of a Jedi knight?",
    correct_answer: "B",
    fun_fact:
      "A lightsaber is the signature weapon of a Jedi knight, typically emitting a colored blade made of plasma.",
    answer_a: "Blaster",
    answer_b: "Lightsaber",
    answer_c: "Bowcaster",
    answer_d: "Ion Blaster",
  },
  {
    difficulty: "Medium",
    question:
      "Who is the Supreme Leader of the First Order in the sequel trilogy?",
    correct_answer: "D",
    fun_fact:
      "Supreme Leader Snoke initially leads the First Order before being succeeded by Kylo Ren.",
    answer_a: "General Hux",
    answer_b: "Captain Phasma",
    answer_c: "Kylo Ren",
    answer_d: "Supreme Leader Snoke",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the planet destroyed by the First Order's Starkiller Base in 'The Force Awakens'?",
    correct_answer: "C",
    fun_fact:
      "Hosnian Prime serves as the capital of the New Republic and is obliterated by the Starkiller Base's superweapon.",
    answer_a: "Tatooine",
    answer_b: "Coruscant",
    answer_c: "Hosnian Prime",
    answer_d: "Naboo",
  },
  {
    difficulty: "Medium",
    question: "What species is Yoda?",
    correct_answer: "A",
    fun_fact:
      "Yoda is a member of the species known as the Jedi Master Yoda, renowned for his wisdom and mastery of the Force.",
    answer_a: "Unknown / Yoda's species",
    answer_b: "Human",
    answer_c: "Wookiee",
    answer_d: "Rodian",
  },
  {
    difficulty: "Easy",
    question: "Who is the pilot of the Millennium Falcon?",
    correct_answer: "D",
    fun_fact:
      "Han Solo is the skilled pilot of the Millennium Falcon, famously making the Kessel Run in less than twelve parsecs.",
    answer_a: "Lando Calrissian",
    answer_b: "Chewbacca",
    answer_c: "Leia Organa",
    answer_d: "Han Solo",
  },
  {
    difficulty: "Medium",
    question: "Who is the leader of the Rebel Alliance?",
    correct_answer: "B",
    fun_fact:
      "Mon Mothma serves as the leader of the Rebel Alliance, playing a key role in its formation and operations against the Empire.",
    answer_a: "Princess Leia",
    answer_b: "Mon Mothma",
    answer_c: "Admiral Ackbar",
    answer_d: "Bail Organa",
  },
  {
    difficulty: "Hard",
    question: "What is the name of the Wookiee home planet?",
    correct_answer: "C",
    fun_fact:
      "Kashyyyk is the lush forested home world of the Wookiees, known for its towering trees and diverse wildlife.",
    answer_a: "Endor",
    answer_b: "Tatooine",
    answer_c: "Kashyyyk",
    answer_d: "Naboo",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of Darth Sidious' Sith apprentice before Anakin Skywalker?",
    correct_answer: "A",
    fun_fact:
      "Darth Maul is the Sith apprentice trained by Darth Sidious, also known as Emperor Palpatine.",
    answer_a: "Darth Maul",
    answer_b: "Darth Tyranus",
    answer_c: "Darth Plagueis",
    answer_d: "Darth Revan",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the desert planet that Luke Skywalker calls home?",
    correct_answer: "B",
    fun_fact:
      "Tatooine is a remote desert planet known for its twin suns and the birthplace of Anakin Skywalker.",
    answer_a: "Naboo",
    answer_b: "Tatooine",
    answer_c: "Jakku",
    answer_d: "Hoth",
  },
  {
    difficulty: "Medium",
    question:
      "Who is the bounty hunter who captures Han Solo in 'The Empire Strikes Back'?",
    correct_answer: "C",
    fun_fact:
      "Boba Fett is the notorious bounty hunter who successfully captures Han Solo and delivers him to Jabba the Hutt.",
    answer_a: "IG-88",
    answer_b: "Bossk",
    answer_c: "Boba Fett",
    answer_d: "Dengar",
  },
  {
    difficulty: "Hard",
    question: "What is the name of Anakin Skywalker's Jedi Master?",
    correct_answer: "B",
    fun_fact:
      "Qui-Gon Jinn is the Jedi Master who discovers Anakin Skywalker on Tatooine and believes him to be the Chosen One.",
    answer_a: "Obi-Wan Kenobi",
    answer_b: "Qui-Gon Jinn",
    answer_c: "Mace Windu",
    answer_d: "Yoda",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the forest moon that serves as the sanctuary for the Rebel Alliance base in 'Return of the Jedi'?",
    correct_answer: "D",
    fun_fact:
      "Endor is the forested moon where the Rebel Alliance launches a mission to destroy the second Death Star.",
    answer_a: "Yavin 4",
    answer_b: "Dagobah",
    answer_c: "Hoth",
    answer_d: "Endor",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the astromech droid that accompanies Luke Skywalker?",
    correct_answer: "A",
    fun_fact:
      "R2-D2 is a resourceful and courageous astromech droid who plays a key role in many pivotal moments of the Star Wars saga.",
    answer_a: "R2-D2",
    answer_b: "C-3PO",
    answer_c: "BB-8",
    answer_d: "K-2SO",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the mineral substance used to power lightsabers?",
    correct_answer: "B",
    fun_fact:
      "Kyber crystals are Force-attuned crystals used by Jedi and Sith to power their lightsabers.",
    answer_a: "Phrik",
    answer_b: "Kyber crystal",
    answer_c: "Cortosis",
    answer_d: "Adegan",
  },
  {
    difficulty: "Hard",
    question:
      "What is the homeworld of the Zabrak species, including Darth Maul?",
    correct_answer: "C",
    fun_fact:
      "Iridonia is the homeworld of the Zabrak species, known for their distinct facial tattoos and resilient nature.",
    answer_a: "Dathomir",
    answer_b: "Ziost",
    answer_c: "Iridonia",
    answer_d: "Lothal",
  },
  {
    difficulty: "Medium",
    question: "What type of creature is Chewbacca's species?",
    correct_answer: "A",
    fun_fact:
      "Chewbacca belongs to the Wookiee species, known for their strength, loyalty, and distinctive fur-covered appearance.",
    answer_a: "Wookiee",
    answer_b: "Trandoshan",
    answer_c: "Rodian",
    answer_d: "Twi'lek",
  },
  {
    difficulty: "Easy",
    question:
      "What is the name of the sinister Sith Lord who rules the Galactic Empire?",
    correct_answer: "C",
    fun_fact:
      "Emperor Palpatine, also known as Darth Sidious, is the Sith Lord who manipulates events to rise to power as the Emperor of the Galactic Empire.",
    answer_a: "Darth Vader",
    answer_b: "Count Dooku",
    answer_c: "Emperor Palpatine",
    answer_d: "Darth Maul",
  },
  {
    difficulty: "Medium",
    question: "What is the name of the gas giant home to Cloud City?",
    correct_answer: "B",
    fun_fact:
      "Bespin is a gas giant in the Star Wars galaxy, home to Cloud City, a mining colony and tourist destination.",
    answer_a: "Endor",
    answer_b: "Bespin",
    answer_c: "Hoth",
    answer_d: "Dagobah",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the Mandalorian bounty hunter featured in the Disney+ series 'The Mandalorian'?",
    correct_answer: "A",
    fun_fact:
      "Din Djarin, also known as the Mandalorian or Mando, is the protagonist of the Disney+ series 'The Mandalorian.'",
    answer_a: "Din Djarin",
    answer_b: "Boba Fett",
    answer_c: "Jango Fett",
    answer_d: "Cad Bane",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the mysterious energy field that binds the galaxy together?",
    correct_answer: "A",
    fun_fact:
      "The Force is an energy field that connects all living things in the galaxy, granting certain individuals special abilities such as telekinesis and precognition.",
    answer_a: "The Force",
    answer_b: "The Dark Side",
    answer_c: "The Jedi Code",
    answer_d: "The Sith Code",
  },
  {
    difficulty: "Easy",
    question: "Who is Princess Leia's adoptive father?",
    correct_answer: "B",
    fun_fact:
      "Bail Organa, Senator and Viceroy of Alderaan, adopts Leia Organa, raising her as his daughter alongside his wife Queen Breha Organa.",
    answer_a: "Han Solo",
    answer_b: "Bail Organa",
    answer_c: "Obi-Wan Kenobi",
    answer_d: "Anakin Skywalker",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the crime lord who puts a bounty on Han Solo's head?",
    correct_answer: "D",
    fun_fact:
      "Jabba the Hutt is a notorious crime lord based on the desert planet of Tatooine, known for his vast criminal empire and ruthless demeanor.",
    answer_a: "Greedo",
    answer_b: "Boba Fett",
    answer_c: "Dengar",
    answer_d: "Jabba the Hutt",
  },
  {
    difficulty: "Hard",
    question:
      "What is the designation of the Imperial stormtrooper who defects from the First Order in 'The Force Awakens'?",
    correct_answer: "C",
    fun_fact:
      "Finn, formerly known as FN-2187, defects from the First Order after witnessing their atrocities and joins the Resistance.",
    answer_a: "TK-421",
    answer_b: "FN-2000",
    answer_c: "FN-2187",
    answer_d: "TK-333",
  },
  {
    difficulty: "Medium",
    question:
      "What is the name of the home planet of the Sith Lord Darth Maul?",
    correct_answer: "B",
    fun_fact:
      "Dathomir is a remote and mysterious planet in the Outer Rim, home to the Nightbrothers and the Nightsisters, including Darth Maul.",
    answer_a: "Korriban",
    answer_b: "Dathomir",
    answer_c: "Kashyyyk",
    answer_d: "Mandalore",
  },
  {
    difficulty: "Easy",
    question: "Who is the co-pilot of the Millennium Falcon?",
    correct_answer: "C",
    fun_fact:
      "Chewbacca, a Wookiee from the planet Kashyyyk, serves as the loyal co-pilot and companion of Han Solo aboard the Millennium Falcon.",
    answer_a: "Lando Calrissian",
    answer_b: "R2-D2",
    answer_c: "Chewbacca",
    answer_d: "C-3PO",
  },
];

const ledZeppelinData = [
  {
    difficulty: "Medium",
    question: "Who was the lead guitarist of Led Zeppelin?",
    correct_answer: "B",
    fun_fact:
      "Jimmy Page is widely recognized as the lead guitarist of Led Zeppelin and is known for his innovative guitar playing and songwriting.",
    answer_a: "Robert Plant",
    answer_b: "Jimmy Page",
    answer_c: "John Paul Jones",
    answer_d: "John Bonham",
  },
  {
    difficulty: "Hard",
    question:
      "Which Led Zeppelin song contains the lyrics 'And as we wind on down the road'?",
    correct_answer: "C",
    fun_fact:
      "'Stairway to Heaven' is one of Led Zeppelin's most iconic songs and is known for its epic guitar solos and mystical lyrics.",
    answer_a: "Black Dog",
    answer_b: "Whole Lotta Love",
    answer_c: "Stairway to Heaven",
    answer_d: "Kashmir",
  },
  {
    difficulty: "Easy",
    question: "Who was the drummer of Led Zeppelin?",
    correct_answer: "D",
    fun_fact:
      "John Bonham, often referred to as 'Bonzo,' was the drummer of Led Zeppelin, known for his powerful drumming style and innovative techniques.",
    answer_a: "Robert Plant",
    answer_b: "Jimmy Page",
    answer_c: "John Paul Jones",
    answer_d: "John Bonham",
  },
  {
    difficulty: "Medium",
    question: "Which Led Zeppelin album features the song 'Immigrant Song'?",
    correct_answer: "A",
    fun_fact:
      "'Led Zeppelin III' is the band's third studio album, released in 1970, and features the iconic track 'Immigrant Song.'",
    answer_a: "Led Zeppelin III",
    answer_b: "Led Zeppelin IV",
    answer_c: "Physical Graffiti",
    answer_d: "Houses of the Holy",
  },
  {
    difficulty: "Hard",
    question: "What was the name of Led Zeppelin's manager?",
    correct_answer: "B",
    fun_fact:
      "Peter Grant served as Led Zeppelin's manager and played a crucial role in the band's success, negotiating groundbreaking deals and protecting their interests.",
    answer_a: "Brian Epstein",
    answer_b: "Peter Grant",
    answer_c: "Andrew Loog Oldham",
    answer_d: "Allen Klein",
  },
  {
    difficulty: "Medium",
    question: "What is the title of Led Zeppelin's debut album?",
    correct_answer: "C",
    fun_fact:
      "'Led Zeppelin' was released in 1969 and features iconic tracks such as 'Good Times Bad Times' and 'Dazed and Confused.'",
    answer_a: "Led Zeppelin II",
    answer_b: "Led Zeppelin III",
    answer_c: "Led Zeppelin",
    answer_d: "Led Zeppelin IV",
  },
  {
    difficulty: "Easy",
    question: "Who was the bassist and keyboardist of Led Zeppelin?",
    correct_answer: "C",
    fun_fact:
      "John Paul Jones was the multi-talented bassist, keyboardist, and occasional mandolin player of Led Zeppelin, contributing to the band's diverse sound.",
    answer_a: "Robert Plant",
    answer_b: "Jimmy Page",
    answer_c: "John Paul Jones",
    answer_d: "John Bonham",
  },
  {
    difficulty: "Medium",
    question:
      "Which Led Zeppelin song features a famous guitar riff often played during sporting events?",
    correct_answer: "D",
    fun_fact:
      "'Kashmir' is known for its distinctive guitar riff and has been frequently used as entrance music for sports teams and events.",
    answer_a: "Black Dog",
    answer_b: "Whole Lotta Love",
    answer_c: "Rock and Roll",
    answer_d: "Kashmir",
  },
  {
    difficulty: "Hard",
    question:
      "What is the name of the residence where Led Zeppelin recorded their fourth album?",
    correct_answer: "A",
    fun_fact:
      "Headley Grange, a former poorhouse in Hampshire, England, served as the recording location for Led Zeppelin's untitled fourth album, commonly known as 'Led Zeppelin IV.'",
    answer_a: "Headley Grange",
    answer_b: "Bron-Yr-Aur",
    answer_c: "Clearwell Castle",
    answer_d: "Stargroves",
  },
  {
    difficulty: "Medium",
    question:
      "Which Led Zeppelin song features the lyrics 'The hammer of the gods'?",
    correct_answer: "B",
    fun_fact:
      "'The Immigrant Song' is known for its Viking-inspired lyrics and driving rhythm, with references to Norse mythology and exploration.",
    answer_a: "Black Dog",
    answer_b: "The Immigrant Song",
    answer_c: "When the Levee Breaks",
    answer_d: "Good Times Bad Times",
  },
];

const beatlesData = [
  {
    difficulty: "Medium",
    question: "Who was the lead guitarist of The Beatles?",
    correct_answer: "B",
    fun_fact:
      "George Harrison served as the lead guitarist of The Beatles, known for his distinctive guitar solos and songwriting contributions.",
    answer_a: "John Lennon",
    answer_b: "George Harrison",
    answer_c: "Paul McCartney",
    answer_d: "Ringo Starr",
  },
  {
    difficulty: "Hard",
    question:
      "What was the title of The Beatles' final studio album released in 1970?",
    correct_answer: "C",
    fun_fact:
      "'Let It Be' was The Beatles' final studio album, recorded before the band's breakup and released after their dissolution in 1970.",
    answer_a: "Rubber Soul",
    answer_b: "Revolver",
    answer_c: "Let It Be",
    answer_d: "Abbey Road",
  },
  {
    difficulty: "Easy",
    question: "Who was the drummer of The Beatles?",
    correct_answer: "D",
    fun_fact:
      "Ringo Starr, born Richard Starkey, served as the drummer for The Beatles, known for his distinctive drumming style and charming personality.",
    answer_a: "John Lennon",
    answer_b: "George Harrison",
    answer_c: "Paul McCartney",
    answer_d: "Ringo Starr",
  },
  {
    difficulty: "Medium",
    question:
      "What was the title of The Beatles' first studio album released in 1963?",
    correct_answer: "A",
    fun_fact:
      "'Please Please Me' was The Beatles' debut studio album, released in 1963, and featured hit singles such as 'Love Me Do' and 'Twist and Shout.'",
    answer_a: "Please Please Me",
    answer_b: "With The Beatles",
    answer_c: "A Hard Day's Night",
    answer_d: "Beatles for Sale",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the manager of The Beatles throughout most of their career?",
    correct_answer: "C",
    fun_fact:
      "Brian Epstein served as the manager of The Beatles from 1962 until his untimely death in 1967, playing a crucial role in the band's success and shaping their image.",
    answer_a: "Andrew Loog Oldham",
    answer_b: "Allen Klein",
    answer_c: "Brian Epstein",
    answer_d: "George Martin",
  },
  {
    difficulty: "Medium",
    question:
      "Which Beatles album features the cover artwork of the band crossing a zebra crossing?",
    correct_answer: "D",
    fun_fact:
      "'Abbey Road' is one of The Beatles' most iconic albums, featuring the famous cover photograph of the band members walking across a zebra crossing outside Abbey Road Studios.",
    answer_a: "Sgt. Pepper's Lonely Hearts Club Band",
    answer_b: "Rubber Soul",
    answer_c: "Revolver",
    answer_d: "Abbey Road",
  },
  {
    difficulty: "Easy",
    question: "Who was the bassist of The Beatles?",
    correct_answer: "C",
    fun_fact:
      "Paul McCartney served as the bassist of The Beatles, in addition to his role as a vocalist, guitarist, and songwriter.",
    answer_a: "John Lennon",
    answer_b: "George Harrison",
    answer_c: "Paul McCartney",
    answer_d: "Ringo Starr",
  },
  {
    difficulty: "Medium",
    question:
      "Which song by The Beatles features the lyrics 'All you need is love'?",
    correct_answer: "A",
    fun_fact:
      "'All You Need Is Love' was written by John Lennon and performed by The Beatles, serving as a message of love and unity during the tumultuous 1960s.",
    answer_a: "All You Need Is Love",
    answer_b: "Let It Be",
    answer_c: "Hey Jude",
    answer_d: "Yesterday",
  },
  {
    difficulty: "Hard",
    question: "Who produced most of The Beatles' studio albums?",
    correct_answer: "D",
    fun_fact:
      "George Martin, often referred to as the 'Fifth Beatle,' served as the primary producer for The Beatles' studio albums, contributing significantly to their innovative sound.",
    answer_a: "Phil Spector",
    answer_b: "Rick Rubin",
    answer_c: "Quincy Jones",
    answer_d: "George Martin",
  },
  {
    difficulty: "Medium",
    question: "Which song by The Beatles was inspired by a circus poster?",
    correct_answer: "B",
    fun_fact:
      "'Being for the Benefit of Mr. Kite!' was inspired by a Victorian circus poster that John Lennon had purchased, featuring bizarre and whimsical imagery.",
    answer_a: "Penny Lane",
    answer_b: "Being for the Benefit of Mr. Kite!",
    answer_c: "Lucy in the Sky with Diamonds",
    answer_d: "A Day in the Life",
  },
];

const beethovenData = [
  {
    difficulty: "Medium",
    question: "In what year was Ludwig van Beethoven born?",
    correct_answer: "A",
    fun_fact:
      "Ludwig van Beethoven was born in Bonn, Germany, in 1770, during the Classical period of music.",
    answer_a: "1770",
    answer_b: "1756",
    answer_c: "1809",
    answer_d: "1827",
  },
  {
    difficulty: "Hard",
    question: "Which symphony by Beethoven is also known as the 'Eroica'?",
    correct_answer: "C",
    fun_fact:
      "Beethoven's Symphony No. 3 in E-flat major, Op. 55, is commonly known as the 'Eroica Symphony' and is regarded as a landmark work in the history of music.",
    answer_a: "Symphony No. 5",
    answer_b: "Symphony No. 6",
    answer_c: "Symphony No. 3",
    answer_d: "Symphony No. 9",
  },
  {
    difficulty: "Easy",
    question: "Which instrument did Beethoven primarily play?",
    correct_answer: "D",
    fun_fact:
      "Ludwig van Beethoven was primarily a pianist and composer, known for his virtuosic piano playing and innovative compositions.",
    answer_a: "Violin",
    answer_b: "Cello",
    answer_c: "Flute",
    answer_d: "Piano",
  },
  {
    difficulty: "Medium",
    question:
      "Which famous piece by Beethoven is known for its use of 'Ode to Joy'?",
    correct_answer: "B",
    fun_fact:
      "Beethoven's Symphony No. 9 in D minor, Op. 125, is renowned for its final movement, which features the 'Ode to Joy' melody, based on a poem by Friedrich Schiller.",
    answer_a: "Moonlight Sonata",
    answer_b: "Symphony No. 9",
    answer_c: "Für Elise",
    answer_d: "Pathétique Sonata",
  },
  {
    difficulty: "Hard",
    question: "Which opera did Beethoven compose?",
    correct_answer: "C",
    fun_fact:
      "Beethoven's only opera is 'Fidelio,' which tells the story of a woman who disguises herself as a man to rescue her husband from political imprisonment.",
    answer_a: "The Magic Flute",
    answer_b: "Carmen",
    answer_c: "Fidelio",
    answer_d: "Don Giovanni",
  },
  {
    difficulty: "Medium",
    question: "Which famous piano concerto did Beethoven compose in C minor?",
    correct_answer: "A",
    fun_fact:
      "Beethoven's Piano Concerto No. 3 in C minor, Op. 37, is one of his most celebrated works for piano and orchestra, known for its dramatic and virtuosic passages.",
    answer_a: "Piano Concerto No. 3",
    answer_b: "Piano Concerto No. 5",
    answer_c: "Piano Concerto No. 1",
    answer_d: "Piano Concerto No. 4",
  },
  {
    difficulty: "Easy",
    question: "Who was Beethoven's music teacher in his early years?",
    correct_answer: "B",
    fun_fact:
      "Ludwig van Beethoven's early music education was overseen by his father, Johann van Beethoven, who was a singer and instrumentalist.",
    answer_a: "Johann Sebastian Bach",
    answer_b: "Johann van Beethoven",
    answer_c: "Wolfgang Amadeus Mozart",
    answer_d: "Joseph Haydn",
  },
  {
    difficulty: "Medium",
    question: "What is the name of Beethoven's only violin concerto?",
    correct_answer: "C",
    fun_fact:
      "Beethoven's Violin Concerto in D major, Op. 61, is considered one of the greatest violin concertos in the repertoire, known for its lyrical melodies and technical challenges.",
    answer_a: "Violin Concerto in E minor",
    answer_b: "Violin Concerto in A minor",
    answer_c: "Violin Concerto in D major",
    answer_d: "Violin Concerto in G major",
  },
  {
    difficulty: "Hard",
    question: "Which of Beethoven's symphonies is nicknamed the 'Pastoral'?",
    correct_answer: "B",
    fun_fact:
      "Beethoven's Symphony No. 6 in F major, Op. 68, is often referred to as the 'Pastoral Symphony' due to its evocation of the countryside and nature.",
    answer_a: "Symphony No. 3",
    answer_b: "Symphony No. 6",
    answer_c: "Symphony No. 7",
    answer_d: "Symphony No. 9",
  },
  {
    difficulty: "Medium",
    question: "What was Beethoven's nationality?",
    correct_answer: "D",
    fun_fact:
      "Ludwig van Beethoven was born in Bonn, which was then part of the Electorate of Cologne, a principality within the Holy Roman Empire. He is often associated with German music.",
    answer_a: "Austrian",
    answer_b: "French",
    answer_c: "Italian",
    answer_d: "German",
  },
];
const WorldWarTwoData = [
  {
    difficulty: "Easy",
    question: "Which event marked the beginning of World War II?",
    correct_answer: "B",
    fun_fact:
      "The invasion of Poland by Germany on September 1, 1939, marked the beginning of World War II in Europe.",
    answer_a: "Attack on Pearl Harbor",
    answer_b: "Invasion of Poland",
    answer_c: "Battle of Stalingrad",
    answer_d: "D-Day Invasion",
  },
  {
    difficulty: "Medium",
    question:
      "Who was the Supreme Commander of the Allied Expeditionary Force during World War II?",
    correct_answer: "C",
    fun_fact:
      "Dwight D. Eisenhower served as the Supreme Commander of the Allied Expeditionary Force during World War II and later became the 34th President of the United States.",
    answer_a: "Winston Churchill",
    answer_b: "Adolf Hitler",
    answer_c: "Dwight D. Eisenhower",
    answer_d: "Joseph Stalin",
  },
  {
    difficulty: "Hard",
    question:
      "What was the code name for the German invasion of the Soviet Union?",
    correct_answer: "A",
    fun_fact:
      "Operation Barbarossa was the largest military operation in human history in terms of manpower and casualties.",
    answer_a: "Operation Barbarossa",
    answer_b: "Operation Overlord",
    answer_c: "Operation Sea Lion",
    answer_d: "Operation Market Garden",
  },
  {
    difficulty: "Easy",
    question:
      "Which country was not a member of the Axis powers during World War II?",
    correct_answer: "D",
    fun_fact:
      "The Soviet Union was initially allied with Germany under the Molotov-Ribbentrop Pact but later joined the Allies after Operation Barbarossa.",
    answer_a: "Germany",
    answer_b: "Italy",
    answer_c: "Japan",
    answer_d: "Soviet Union",
  },
  {
    difficulty: "Medium",
    question:
      "Which battle is often considered the turning point of the war in the Pacific?",
    correct_answer: "B",
    fun_fact:
      "The Battle of Midway was a decisive naval battle in the Pacific Theater of World War II, resulting in a significant victory for the Allies.",
    answer_a: "Battle of Stalingrad",
    answer_b: "Battle of Midway",
    answer_c: "Battle of Iwo Jima",
    answer_d: "Battle of Okinawa",
  },
  {
    difficulty: "Hard",
    question:
      "What was the name of the project to develop the atomic bomb during World War II?",
    correct_answer: "D",
    fun_fact:
      "The Manhattan Project was a research and development undertaking during World War II that produced the first nuclear weapons.",
    answer_a: "Operation Paperclip",
    answer_b: "Project Apollo",
    answer_c: "Operation Overlord",
    answer_d: "Manhattan Project",
  },
  {
    difficulty: "Easy",
    question: "Who was the leader of Nazi Germany during World War II?",
    correct_answer: "C",
    fun_fact:
      "Adolf Hitler served as the Chancellor of Germany from 1933 to 1945 and Führer ('Leader') from 1934 to 1945.",
    answer_a: "Benito Mussolini",
    answer_b: "Joseph Stalin",
    answer_c: "Adolf Hitler",
    answer_d: "Winston Churchill",
  },
  {
    difficulty: "Medium",
    question: "Which country did Japan attack to initiate the Pacific War?",
    correct_answer: "A",
    fun_fact:
      "The attack on Pearl Harbor on December 7, 1941, led to the United States' entry into World War II.",
    answer_a: "United States",
    answer_b: "China",
    answer_c: "Australia",
    answer_d: "Philippines",
  },
  {
    difficulty: "Hard",
    question:
      "Which battle marked the end of Nazi Germany's last major offensive on the Western Front?",
    correct_answer: "D",
    fun_fact:
      "The Battle of the Bulge was the largest and bloodiest single battle fought by the United States during World War II.",
    answer_a: "Battle of Stalingrad",
    answer_b: "Battle of Kursk",
    answer_c: "Battle of El Alamein",
    answer_d: "Battle of the Bulge",
  },
  {
    difficulty: "Easy",
    question:
      "Which country surrendered to Germany on June 22, 1940, effectively ending the Battle of France?",
    correct_answer: "B",
    fun_fact:
      "The Fall of France resulted in the occupation of France by Nazi Germany during World War II.",
    answer_a: "United Kingdom",
    answer_b: "France",
    answer_c: "Italy",
    answer_d: "Soviet Union",
  },
  {
    difficulty: "Medium",
    question:
      "What was the name of the American strategy for island-hopping in the Pacific Theater?",
    correct_answer: "C",
    fun_fact:
      "The island-hopping strategy involved bypassing heavily fortified Japanese positions and seizing strategically important islands.",
    answer_a: "Operation Overlord",
    answer_b: "Operation Market Garden",
    answer_c: "Island-Hopping",
    answer_d: "Operation Torch",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the commander of the German Afrika Korps during the North African Campaign?",
    correct_answer: "A",
    fun_fact:
      "Erwin Rommel, also known as the Desert Fox, was a highly respected military leader known for his innovative tactics.",
    answer_a: "Erwin Rommel",
    answer_b: "Heinz Guderian",
    answer_c: "Ernst Röhm",
    answer_d: "Hermann Göring",
  },
  {
    difficulty: "Easy",
    question: "Which event prompted the United States to enter World War II?",
    correct_answer: "D",
    fun_fact:
      "The attack on Pearl Harbor by the Imperial Japanese Navy on December 7, 1941, led to the United States' declaration of war on Japan.",
    answer_a: "Battle of Stalingrad",
    answer_b: "D-Day Invasion",
    answer_c: "Bombing of London",
    answer_d: "Attack on Pearl Harbor",
  },
  {
    difficulty: "Medium",
    question: "Who was the British Prime Minister during most of World War II?",
    correct_answer: "B",
    fun_fact:
      "Winston Churchill's leadership and oratory skills played a crucial role in rallying the British people during the war.",
    answer_a: "Neville Chamberlain",
    answer_b: "Winston Churchill",
    answer_c: "Clement Attlee",
    answer_d: "Anthony Eden",
  },
  {
    difficulty: "Hard",
    question: "What was the main objective of the D-Day Invasion?",
    correct_answer: "C",
    fun_fact:
      "The D-Day Invasion was the largest amphibious assault in history and marked the beginning of the liberation of German-occupied France.",
    answer_a: "Capture Berlin",
    answer_b: "Defeat Italy",
    answer_c: "Establish a Western Front",
    answer_d: "Secure North Africa",
  },
  {
    difficulty: "Easy",
    question:
      "Which city was the target of the atomic bomb dropped by the United States during World War II?",
    correct_answer: "A",
    fun_fact:
      "The atomic bomb was dropped on Hiroshima on August 6, 1945, leading to significant casualties and the surrender of Japan.",
    answer_a: "Hiroshima",
    answer_b: "Tokyo",
    answer_c: "Nagasaki",
    answer_d: "Osaka",
  },
  {
    difficulty: "Medium",
    question: "Which country was invaded by Germany to begin World War II?",
    correct_answer: "B",
    fun_fact:
      "The invasion of Poland by Germany on September 1, 1939, marked the beginning of World War II in Europe.",
    answer_a: "France",
    answer_b: "Poland",
    answer_c: "Belgium",
    answer_d: "Netherlands",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the Japanese Prime Minister during most of World War II?",
    correct_answer: "D",
    fun_fact:
      "Hideki Tojo served as the Prime Minister of Japan during most of World War II and was later convicted of war crimes by an international tribunal.",
    answer_a: "Hirohito",
    answer_b: "Emperor Meiji",
    answer_c: "Yamamoto Isoroku",
    answer_d: "Hideki Tojo",
  },
  {
    difficulty: "Easy",
    question: "Which battle is known as the largest naval battle in history?",
    correct_answer: "C",
    fun_fact:
      "The Battle of Leyte Gulf was a series of naval engagements fought between the Allies and the Imperial Japanese Navy.",
    answer_a: "Battle of Midway",
    answer_b: "Battle of Okinawa",
    answer_c: "Battle of Leyte Gulf",
    answer_d: "Battle of the Atlantic",
  },
  {
    difficulty: "Medium",
    question: "Which country was the first to declare war in World War II?",
    correct_answer: "A",
    fun_fact:
      "Germany's invasion of Poland on September 1, 1939, prompted both the United Kingdom and France to declare war on Germany.",
    answer_a: "United Kingdom",
    answer_b: "France",
    answer_c: "Soviet Union",
    answer_d: "United States",
  },
  {
    difficulty: "Hard",
    question:
      "What was the main objective of the Tehran Conference held during World War II?",
    correct_answer: "D",
    fun_fact:
      "The Tehran Conference was a meeting between the leaders of the United States, the United Kingdom, and the Soviet Union to plan the final strategy for the war.",
    answer_a: "Discuss post-war reconstruction",
    answer_b: "Coordinate military operations",
    answer_c: "Negotiate peace terms",
    answer_d: "Plan the opening of a second front in Europe",
  },
  {
    difficulty: "Easy",
    question:
      "Which country did Germany invade on April 9, 1940, to begin the Battle of Norway?",
    correct_answer: "C",
    fun_fact:
      "The German invasion of Norway and Denmark marked the first time in history that paratroopers were used in large-scale combat.",
    answer_a: "Sweden",
    answer_b: "Finland",
    answer_c: "Denmark",
    answer_d: "Netherlands",
  },
  {
    difficulty: "Medium",
    question: "Which battle is often called the 'Stalingrad of the Pacific'?",
    correct_answer: "A",
    fun_fact:
      "The Battle of Okinawa was one of the bloodiest battles of the Pacific Theater and resulted in significant casualties on both sides.",
    answer_a: "Battle of Okinawa",
    answer_b: "Battle of Iwo Jima",
    answer_c: "Battle of Midway",
    answer_d: "Battle of Leyte Gulf",
  },
  {
    difficulty: "Hard",
    question:
      "What was the code name for the Allied invasion of Sicily during World War II?",
    correct_answer: "B",
    fun_fact:
      "Operation Husky was the largest amphibious operation in the Mediterranean theater of World War II.",
    answer_a: "Operation Overlord",
    answer_b: "Operation Husky",
    answer_c: "Operation Torch",
    answer_d: "Operation Avalanche",
  },
  {
    difficulty: "Easy",
    question: "Who was the leader of the Soviet Union during World War II?",
    correct_answer: "B",
    fun_fact:
      "Joseph Stalin served as the General Secretary of the Communist Party of the Soviet Union from 1922 until his death in 1953.",
    answer_a: "Leon Trotsky",
    answer_b: "Joseph Stalin",
    answer_c: "Vladimir Lenin",
    answer_d: "Nikita Khrushchev",
  },
  {
    difficulty: "Medium",
    question:
      "Which country was not occupied by Nazi Germany during World War II?",
    correct_answer: "C",
    fun_fact:
      "Switzerland remained neutral during World War II and avoided occupation by Nazi Germany despite its proximity to Axis-controlled territory.",
    answer_a: "France",
    answer_b: "Netherlands",
    answer_c: "Switzerland",
    answer_d: "Belgium",
  },
  {
    difficulty: "Hard",
    question:
      "Who was the British General responsible for the successful defense of Malta during World War II?",
    correct_answer: "D",
    fun_fact:
      "Bernard Montgomery, also known as Monty, was one of the most successful British military commanders of World War II.",
    answer_a: "Douglas MacArthur",
    answer_b: "George S. Patton",
    answer_c: "Erwin Rommel",
    answer_d: "Bernard Montgomery",
  },
  {
    difficulty: "Easy",
    question:
      "What was the name of the treaty that ended World War II in Europe?",
    correct_answer: "A",
    fun_fact:
      "The signing of the unconditional surrender of Germany took place on May 7-8, 1945, in Reims, France.",
    answer_a: "Treaty of Reims",
    answer_b: "Treaty of Versailles",
    answer_c: "Yalta Agreement",
    answer_d: "Molotov-Ribbentrop Pact",
  },
  {
    difficulty: "Medium",
    question:
      "Which battle was the last major German offensive on the Western Front during World War II?",
    correct_answer: "C",
    fun_fact:
      "The Battle of the Bulge was the largest and bloodiest single battle fought by the United States during World War II.",
    answer_a: "Battle of Stalingrad",
    answer_b: "Battle of Kursk",
    answer_c: "Battle of the Bulge",
    answer_d: "Battle of El Alamein",
  },
  {
    difficulty: "Hard",
    question: "Which city was the site of the Potsdam Conference in 1945?",
    correct_answer: "D",
    fun_fact:
      "The Potsdam Conference was a meeting of the Allied leaders to discuss post-war Europe and the administration of Germany.",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Moscow",
    answer_d: "Berlin",
  },
];

module.exports = {
  football_questions,
  ledZeppelinData,
  nhlData,
  beethovenData,
  nbaData,
  harryPotterData,
  starWarsData,
  lotrData,
  beatlesData,
  WorldWarTwoData,
};
