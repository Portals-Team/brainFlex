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
  },
  {
    name: "Music",
  },
  {
    name: "Sports",
  },
  {
    name: "History",
  },
];

const topics = [
  {
    name: "Lord Of The Rings",
  },
  {
    name: "Harry Potter",
  },
  {
    name: "Star Wars",
  },
  {
    name: "The Beatles",
  },
  {
    name: "Beethoven",
  },
  {
    name: "Led Zeplin",
  },
  {
    name: "Football",
  },
  {
    name: "Basketball",
  },
  {
    name: "Hockey",
  },
  {
    name: "World War II",
  },
];

const image_word = [
  {
    topic_word: "Princess Leia",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951200/Fantasy/Star%20Wars/Princess_Leia_27s_characteristic_hairstyle_rn1kjh.jpg",
    topic_id: 3,
    categories_id: 1,
  },
  {
    topic_word: "DarthVader",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951111/Fantasy/Star%20Wars/CW_DarthVaderFinale_Milestone_05__87681.1695056865_qngsjv.jpg",
    topic_id: 3,
    categories_id: 1,
  },
  {
    topic_word: "Jar Jar Binks",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951178/Fantasy/Star%20Wars/databank_jarjarbinks_01_169_c70767ab_bsuwxi.jpg",
    topic_id: 3,
    categories_id: 1,
  },
  {
    topic_word: "Luke Skywalker",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951129/Fantasy/Star%20Wars/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w_a89cmc.jpg",
    topic_id: 3,
    categories_id: 1,
  },
  {
    topic_word: "Anakin Skywalker",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951153/Fantasy/Star%20Wars/636239782868557609-MAG-HAYDEN-7730471_vdqdjv.jpg",
    topic_id: 3,
    categories_id: 1,
  },
  {
    topic_word: "Harry Potter",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950775/Fantasy/Harry%20Potter/Harry_Potter_character_poster_wdc4z9.jpg",
    topic_id: 2,
    categories_id: 1,
  },
  {
    topic_word: "Rubeus Hagrid",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950785/Fantasy/Harry%20Potter/RubeusHagrid_gwlkiw.jpg",
    topic_id: 2,
    categories_id: 1,
  },
  {
    topic_word: "Dumbledore",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950796/Fantasy/Harry%20Potter/220px-Dumbledore_-_Prisoner_of_Azkaban_ncbuap.jpg",
    topic_id: 2,
    categories_id: 1,
  },
  {
    topic_word: "Hermione Granger",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950803/Fantasy/Harry%20Potter/220px-Hermione_Granger_poster_qjyx2c.jpg",
    topic_id: 2,
    categories_id: 1,
  },
  {
    topic_word: "Ronald Weasley",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950819/Fantasy/Harry%20Potter/Ron_Weasley_poster_l3mcts.jpg",
    topic_id: 2,
    categories_id: 1,
  },
  {
    topic_word: "Gollum",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951042/Fantasy/Lord%20Of%20The%20Rings/does-anyone-else-thinks-that-smeagol-has-a-preciously-v0-9vhhn3sq0cua1_dynrkn.jpg",
    topic_id: 1,
    categories_id: 1,
  },
  {
    topic_word: "Gandalfthe",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951001/Fantasy/Lord%20Of%20The%20Rings/gandalf-042223-2000-6eca4461d296452d87f86df0a36ba955_f3erdx.jpg",
    topic_id: 1,
    categories_id: 1,
  },
  {
    topic_word: "Samwise Gamgee",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950947/Fantasy/Lord%20Of%20The%20Rings/88bd700ff25685b947082e676a382694_bxr1jx.jpg",
    topic_id: 1,
    categories_id: 1,
  },
  {
    topic_word: "Frodo Baggins",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950875/Fantasy/Lord%20Of%20The%20Rings/g243_u118192_frodo1_thzcaz.jpg",
    topic_id: 1,
    categories_id: 1,
  },
  {
    topic_word: "Aragorn",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950849/Fantasy/Lord%20Of%20The%20Rings/aragorn_part_01__into_the_dark_forest_by_mheamindesign_dg49kit-fullview.jpg_ad0z8t.jpg",
    topic_id: 1,
    categories_id: 1,
  },
  {
    topic_word: "Jason Peters",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950767/sports/football/jason_peters.jpg",
    topic_id: 7,
    categories_id: 3,
  },
  {
    topic_word: "Devin White",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950745/sports/football/devin_white.jpg",
    topic_id: 7,
    categories_id: 3,
  },
  {
    topic_word: "Marshawn Lynch",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950586/sports/football/marshawn_lynch.jpg",
    topic_id: 7,
    categories_id: 3,
  },
  {
    topic_word: "Brian Dawkins",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950566/sports/football/brian_dawkins.jpg",
    topic_id: 7,
    categories_id: 3,
  },
  {
    topic_word: "Saquon Barkley",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950545/sports/football/saquon_barkley.jpg",
    topic_id: 7,
    categories_id: 3,
  },
  {
    topic_word: "Lebron James",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710952708/sports/basketball/lebron_james.jpg",
    topic_id: 8,
    categories_id: 3,
  },
  {
    topic_word: "Chris Paul",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710952686/sports/basketball/chris_paul.jpg",
    topic_id: 8,
    categories_id: 3,
  },
  {
    topic_word: "Giannis Antetokounmpo",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710952664/sports/basketball/giannis_antetokounmpo.png",
    topic_id: 8,
    categories_id: 3,
  },
  {
    topic_word: "Steph Curry",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710952641/sports/basketball/steph_curry.jpg",
    topic_id: 8,
    categories_id: 3,
  },
  {
    topic_word: "Joel Embiid",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710952612/sports/basketball/joel_embiid.jpg",
    topic_id: 8,
    categories_id: 3,
  },
  {
    topic_word: "Wayne Gretzky",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951496/sports/hockey/wayne_gretzky.jpg",
    topic_id: 9,
    categories_id: 3,
  },
  {
    topic_word: "Connor McDavid",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951482/sports/hockey/connor_mcdavid.jpg",
    topic_id: 9,
    categories_id: 3,
  },
  {
    topic_word: "Alex Ovechkin",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951365/sports/hockey/alex_ovechkin.jpg",
    topic_id: 9,
    categories_id: 3,
  },
  {
    topic_word: "Connor Bedard",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951510/sports/hockey/connor_bedard.jpg",
    topic_id: 9,
    categories_id: 3,
  },
  {
    topic_word: "Leon Draisaitl",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951524/sports/hockey/leon_draistaitl.jpg",
    topic_id: 9,
    categories_id: 3,
  },
  {
    topic_word: "sheet music",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951446/1_ygL2uafx16Xy2mlEOJ5KUg_kwnqzh.jpg",
    topic_id: 5,
    categories_id: 2,
  },
  {
    topic_word: "Ludwig van Beethoven",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951415/Beethoven_s99zw9.jpg",
    topic_id: 5,
    categories_id: 2,
  },
  {
    topic_word: "Bonn Germany",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951375/GettyImages-481567714-a82f149b178e4bb8a5fd6f43807b01b6_p36yaf.jpg",
    topic_id: 5,
    categories_id: 2,
  },
  {
    topic_word: "symphony",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951336/A2SO_stbwap.jpg",
    topic_id: 5,
    categories_id: 2,
  },
  {
    topic_word: "grand piano",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951310/lorenzo-spoleti-MlhJNEUQpBs-unsplash_pbexsw.jpg",
    topic_id: 5,
    categories_id: 2,
  },
  {
    topic_word: "Led Zeppelin 3",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951282/Led-Zeppelin-III-Walmart-Exclusive-Rock-Vinyl-LP-Rhino_975c275c-2679-499a-b278-76603c85a529.f9493c6cee91411c0a40aba88e226794_z6swhb.jpg",
    topic_id: 6,
    categories_id: 2,
  },
  {
    topic_word: "Zoso logo",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951237/B-203Z4S-SET-1_ulxj5c.jpg",
    topic_id: 6,
    categories_id: 2,
  },
  {
    topic_word: "Flight of Icarus",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951163/gowyicarus_abr6m5.jpg",
    topic_id: 6,
    categories_id: 2,
  },
  {
    topic_word: "Hindenburg",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951117/Hindenburg-stadium-Olympic-Berlin-Germany-August-1936_fz0njm.jpg",
    topic_id: 6,
    categories_id: 2,
  },
  {
    topic_word: "Stairway to Heaven",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951075/artworks-6oPOQTZYHoUKgdhv-0TFwFA-t500x500_y1u843.jpg",
    topic_id: 6,
    categories_id: 2,
  },
  {
    topic_word: "Abbey Road",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950721/596109_njnbn3.webp",
    topic_id: 4,
    categories_id: 2,
  },
  {
    topic_word: "Yellow Submarine",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950862/SUB_SUB_009_20drew_20_0_nkbod2.jpg",
    topic_id: 4,
    categories_id: 2,
  },
  {
    topic_word: "Sgt. Pepper",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950902/Paul-Sgt-Pepper_mmjhn9.jpg",
    topic_id: 4,
    categories_id: 2,
  },
  {
    topic_word: "Liverpool",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710950973/IUK-090223-ThreeGracesInLiverpool-Getty481992744_wewxov.jpg",
    topic_id: 4,
    categories_id: 2,
  },
  {
    topic_word: "The Beatles Help",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1710951037/TheBeatles_Help__1copy_f9hcvh.jpg",
    topic_id: 4,
    categories_id: 2,
  },
  {
    topic_word: "Adolf Hitler",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712169943/History/Adolf-Hitler-1933_zlgmid.jpg",
    topic_id: 10,
    categories_id: 4,
  },
  {
    topic_word: "Joseph Stalin",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712169959/History/220px-StalinCropped1943_28b_29_ckgt1w.jpg",
    topic_id: 10,
    categories_id: 4,
  },
  {
    topic_word: "Franklin Roosevelt",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712169977/History/32_franklin_d_roosevelt_bdmr9y.jpg",
    topic_id: 10,
    categories_id: 4,
  },
  {
    topic_word: "Benito Mussolini",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712169995/History/Benito-Mussolini_rhrisf.jpg",
    topic_id: 10,
    categories_id: 4,
  },
  {
    topic_word: "Winston Churchill",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712170022/History/winston-churchill-9248164-1-402_hvmttd.jpg",
    topic_id: 10,
    categories_id: 4,
  },
];

module.exports = { users, topics, categories, image_word };
