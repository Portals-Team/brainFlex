const users = [
  {
    username: "Ian",
    password: "foo",
    name: "Ian",
    aggregate_score: 5,
    quiz_count: 1,
  },
  {
    username: "Emma",
    password: "bar",
    name: "Emma",
    aggregate_score: 8,
    quiz_count: 2,
  },
  {
    username: "Liam",
    password: "baz",
    name: "Liam",
    aggregate_score: 7,
    quiz_count: 3,
  },
  {
    username: "Olivia",
    password: "qux",
    name: "Olivia",
    aggregate_score: 6,
    quiz_count: 4,
  },
  {
    username: "Noah",
    password: "quux",
    name: "Noah",
    aggregate_score: 9,
    quiz_count: 5,
  },
  {
    username: "Ava",
    password: "corge",
    name: "Ava",
    aggregate_score: 10,
    quiz_count: 6,
  },
];

const categories = [
  {
    name: "Fantasy",
    description:
      "transports readers into realms where magic reigns supreme, propelling heroes on epic quests against dark forces. In these enchanting worlds, mythical creatures roam ancient landscapes, and destiny is shaped by the wielders of powerful sorcery. Through tales of bravery and wonder, fantasy literature invites readers to journey beyond the confines of reality and explore the boundless depths of imagination.",
  },
  {
    name: "Music",
    description:
      "Music, an art form spanning cultures, combines sounds and silence to express emotions and ideas. It encompasses a variety of genres and instruments, integral to human rituals and celebrations. This universal medium reflects the rich diversity of human experiences.",
  },
  {
    name: "Sports",
    description:
      "Sports encompass competitive physical activities and games, fostering fitness, skill, and teamwork. They range from individual challenges to team confrontations, deeply embedded in global cultures and societies. This dynamic field not only entertains but also unites people across boundaries through shared passions and rivalries.",
  },
];

const topics = [
  {
    name: "Lord Of The Rings",
    description:
      "The Lord of the Rings, by J.R.R. Tolkien, is an epic fantasy saga set in the mythic Middle-earth, exploring themes of courage, friendship, and the fight between good and evil. Its rich narrative and detailed world have made it a pivotal work in fantasy literature and film, enchanting a global audience.",
  },
  {
    name: "Harry Potter",
    description:
      "Harry Potter, a series by J.K. Rowling, weaves the tale of a young wizard's journey through magical education and the battle against dark forces. Set in a richly imagined world blending the mundane and the magical, it explores themes of friendship, bravery, and the complexity of good vs. evil. This beloved series has left a lasting impact on literature and film, captivating readers and viewers worldwide with its enchanting story and characters.",
  },
  {
    name: "Star Wars",
    description:
      "Star Wars, created by George Lucas, is a sprawling space opera set in a galaxy of diverse planets and species, chronicling the battle between the Rebel Alliance and the tyrannical Empire. Blending adventure, fantasy, and science fiction, it explores themes of heroism, destiny, and the struggle between light and dark. This iconic franchise has profoundly influenced popular culture, cinema, and storytelling, captivating audiences around the globe with its epic tales and memorable characters.",
  },
  {
    name: "The Beatles",
    description:
      "The Beatles revolutionized the music industry, captivating audiences worldwide with their innovative sound and timeless melodies. Comprised of John Lennon, Paul McCartney, George Harrison, and Ringo Starr, the band's unparalleled creativity and cultural influence shaped the 1960s and beyond. From the energetic charm of A Hard Day's Night to the psychedelic journey of Sgt. Pepper's Lonely Hearts Club Band, The Beatles' legacy endures as a beacon of artistic brilliance and musical excellence.",
  },
  {
    name: "Beethoven",
    description:
      "Beethoven, a towering figure in classical music, composed symphonies and sonatas that transcend time, stirring the depths of human emotion. His groundbreaking works, such as the transcendent Symphony No. 9 and the poignant Moonlight Sonata, continue to inspire generations with their profound beauty and depth of expression. Despite facing deafness and personal struggles, Beethoven's enduring legacy as a musical genius is marked by his ability to create transcendent masterpieces that resonate with the human spirit.",
  },
  {
    name: "Led Zeplin",
    description:
      "Led Zeppelin, an iconic British rock band, is renowned for its influential fusion of blues, rock, and folk music, setting the foundation for heavy metal. With their virtuosic musicianship and groundbreaking albums, they captivated audiences worldwide, leaving a lasting legacy on rock music. Known for their dynamic sound and complex compositions, Led Zeppelin's impact extends beyond their era, inspiring countless musicians and shaping the genre's evolution.",
  },
  {
    name: "Football",
    description:
      "American football, a contact team sport known for its strategic complexity and physical intensity, involves two teams competing to score points by advancing the ball into the opponent's end zone. Characterized by specialized roles, including quarterbacks, receivers, and linemen, it combines strategy, skill, and athleticism. As a cornerstone of American culture, it brings communities together, especially during the Super Bowl, the sport's pinnacle event, showcasing its widespread appeal and significance in the U.S.",
  },
  {
    name: "Basketball",
    description:
      "Basketball is a high-energy team sport where players score by shooting a ball through the opponent's hoop. Emphasizing speed, skill, and teamwork, its global appeal is evident in leagues like the NBA and international tournaments. This sport unites fans worldwide, showcasing athleticism and competitive spirit.",
  },
  {
    name: "Hockey",
    description:
      "Hockey is a fast-paced sport played on ice, where two teams compete to score goals by shooting a puck into the opposing team's net. Players skillfully maneuver across the rink, using sticks to pass, shoot, and defend, while goalies guard their nets with lightning reflexes. With its combination of speed, strategy, and physicality, hockey captivates fans around the world, delivering exhilarating moments of skill and intensity on the ice.",
  },
];

export default { users, topics, categories };
