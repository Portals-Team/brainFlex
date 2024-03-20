const prisma = require("../prisma");

const { users, topics, categories, image_word } = require("./seeddata.js");

const {
  football_questions,
  ledZeppelinData,
  nhlData,
  beethovenData,
  nbaData,
  harryPotterData,
  starWarsData,
  lotrData,
  beatlesData,
} = require("./questions_seed.js");

for (let i = 1; i < users.length; i++) {}

const seed = async () => {
  for (let i = 0; i < users.length; i++) {
    const data = users[i];
    await prisma.user.upsert({
      where: { username: data.username },
      update: {},
      create: data,
    });
  }
  for (let i = 0; i < categories.length; i++) {
    const data = categories[i];
    await prisma.categories.upsert({
      where: { id: i + 1 },
      update: {},
      create: data,
    });
  }
  for (let i = 0; i < topics.length; i++) {
    const data = topics[i];
    await prisma.topics.upsert({
      where: { id: i + 1 },
      update: {},
      create: data,
    });
  }
  for (let i = 0; i < image_word.length; i++) {
    const data = image_word[i];
    await prisma.image_word.upsert({
      where: { id: i + 1 },
      update: {},
      create: data,
    });
  }
  await prisma.quiz.upsert({
    where: { id: 1 },
    update: {},
    create: {
      user_id: 1,
      category_id: 1,
      topic_id: 1,
      quiz_completed: false,
      image_Word_id: 12,
    },
  });

  // for (let i = 0; i < football_questions.length; i++) {
  //   const data = football_questions[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < ledZeppelinData.length; i++) {
  //   const data = ledZeppelinData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < nhlData.length; i++) {
  //   const data = nhlData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < beethovenData.length; i++) {
  //   const data = beethovenData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < nbaData.length; i++) {
  //   const data = nbaData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < harryPotterData.length; i++) {
  //   const data = harryPotterData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < starWarsData.length; i++) {
  //   const data = starWarsData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < lotrData.length; i++) {
  //   const data = lotrData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
  // for (let i = 0; i < beatlesData.length; i++) {
  //   const data = beatlesData[i];
  //   await prisma.question.upsert({
  //     update: {},
  //     create: data,
  //   });
  // }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
