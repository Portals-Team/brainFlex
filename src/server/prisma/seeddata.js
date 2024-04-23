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
  {
    name: "Movies",
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
    name: "Led Zeppelin",
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
  {
    name: "World War I",
  },
  {
    name: "The Cold War",
  },
  {
    name: "Comedy Movies",
  },
  {
    name: "Scary Movies",
  },
  {
    name: "Sci-Fi Movies",
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
    topic_word: "Darth Vader",
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
    topic_word: "Gandalf",
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
    topic_word: "Sgt Pepper",
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
  {
    topic_word: "Woodrow Wilson",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712171006/History/28_woodrow_wilson_vlm4lm.jpg",
    topic_id: 11,
    categories_id: 4,
  },
  {
    topic_word: "Franz Ferdinand",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712171026/History/800px-Ferdinand_Schmutzer_-_Franz_Ferdinand_von__C3_96sterreich-Este_2C_um_1914_igdumt.jpg",
    topic_id: 11,
    categories_id: 4,
  },
  {
    topic_word: "David Lloyd George",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712171057/History/800px-David_Lloyd_George_zcljqf.jpg",
    topic_id: 11,
    categories_id: 4,
  },
  {
    topic_word: "Gavrilo Princip",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712171080/History/800px-Gavrilo_Princip_2C_cell_2C_headshot_2C_bw_wj0ewv.jpg",
    topic_id: 11,
    categories_id: 4,
  },
  {
    topic_word: "Paul von Hindenburg",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712171100/History/Paul-von-Hindenburg_hrqfkh.jpg",
    topic_id: 11,
    categories_id: 4,
  },
  {
    topic_word: "Fidel Castro",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712259959/History/Fidel-Castro-2003_nrvaln.jpg",
    topic_id: 12,
    categories_id: 4,
  },
  {
    topic_word: "Mao Zedong",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712259974/History/Mao_Zedong_in_1959__28cropped_29_xhjm4p.jpg",
    topic_id: 12,
    categories_id: 4,
  },
  {
    topic_word: "Margaret Thatcher",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712259987/History/Margaret-Thatcher-1980_qpdxoc.jpg",
    topic_id: 12,
    categories_id: 4,
  },
  {
    topic_word: "John F Kennedy",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712260026/History/35_john_f_kennedy_d8tlbx.jpg",
    topic_id: 12,
    categories_id: 4,
  },
  {
    topic_word: "Nikita Khrushchev",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712260049/History/Nikita-Khrushchev-1960_hrdz61.jpg",
    topic_id: 12,
    categories_id: 4,
  },
  {
    topic_word: "Monty Python and the Holy Grail (1975)",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712261924/Movies/p629_p_v8_af_ynbaik.jpg",
    topic_id: 13,
    categories_id: 5,
  },
  {
    topic_word: "Ferris Bueller's Day Off",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712261873/Movies/Ferris_Bueller_27s_Day_Off_enjoxd.jpg",
    topic_id: 13,
    categories_id: 5,
  },
  {
    topic_word: "Groundhog Day",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712261848/Movies/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY_._V1__wt0kx3.jpg",
    topic_id: 13,
    categories_id: 5,
  },
  {
    topic_word: "Dumb and Dumber",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712261908/Movies/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI_._V1_FMjpg_UX1000__rkgctd.jpg",
    topic_id: 13,
    categories_id: 5,
  },
  {
    topic_word: "The Hangover",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712261891/Movies/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM_._V1__rrdqc8.jpg",
    topic_id: 13,
    categories_id: 5,
  },
  {
    topic_word: "The Shining",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712263288/Movies/p40_v_v12_sk_vgk6a1.jpg",
    topic_id: 14,
    categories_id: 5,
  },
  {
    topic_word: "The Exorcist",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712263301/Movies/MV5BMTNkYjc4YTYtZTVjNS00ZWI5LWI3MjItMWZiYTYzNTVmMWVjXkEyXkFqcGdeQXVyODE5NzE3OTE_._V1_FMjpg_UX1000__v6zcpo.jpg",
    topic_id: 14,
    categories_id: 5,
  },
  {
    topic_word: "The Silence Of The Lambs",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712263313/Movies/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY_._V1__uborh1.jpg",
    topic_id: 14,
    categories_id: 5,
  },
  {
    topic_word: "Get Out",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712263328/Movies/Get_Out_poster_rquzgn.png",
    topic_id: 14,
    categories_id: 5,
  },
  {
    topic_word: "The Conjuring",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712263345/Movies/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ_._V1__wv1b0p.jpg",
    topic_id: 14,
    categories_id: 5,
  },
  {
    topic_word: "Avatar",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712267587/Movies/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc_._V1_FMjpg_UX1000__qwtha6.jpg",
    topic_id: 15,
    categories_id: 5,
  },
  {
    topic_word: "Inception",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712267570/Movies/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw_._V1__znzm0m.jpg",
    topic_id: 15,
    categories_id: 5,
  },
  {
    topic_word: "Alien",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712267557/Movies/7-alien-movie-poster-alien-1979-jean-darmel_teqmf4.jpg",
    topic_id: 15,
    categories_id: 5,
  },
  {
    topic_word: "Matrix",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712267520/Movies/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY_._V1__mab7p3.jpg",
    topic_id: 15,
    categories_id: 5,
  },
  {
    topic_word: "Blade Runner",
    image_url:
      "https://res.cloudinary.com/dzpne110u/image/upload/v1712267504/Movies/Blade_Runner__281982_poster_29_r2ekbl.png",
    topic_id: 15,
    categories_id: 5,
  },
];

module.exports = { users, topics, categories, image_word };
