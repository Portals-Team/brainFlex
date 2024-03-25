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
      current_question: 1,
    },
  });
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < 3; j++) {
      await prisma.user_topics.upsert({
        where: { id: i + i },
        update: {},
        create: {
          user_id: i + 1,
          topic_id: j + 1,
        },
      });
    }
  }
  for (let i = 1; i < 4; i++) {
    await prisma.categories_topics.upsert({
      where: { id: i },
      update: {},
      create: {
        category_id: 1,
        topic_id: i,
      },
    });
  }
  for (let i = 4; i < 7; i++) {
    await prisma.categories_topics.upsert({
      where: { id: i },
      update: {},
      create: {
        category_id: 2,
        topic_id: i,
      },
    });
  }
  for (let i = 7; i < 10; i++) {
    await prisma.categories_topics.upsert({
      where: { id: i },
      update: {},
      create: {
        category_id: 3,
        topic_id: i,
      },
    });
  }

  for (let i = 0; i < football_questions.length; i++) {
    const data = football_questions[i];
    await prisma.question.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 3,
        topic_id: 7,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 14; i < ledZeppelinData.length + 14; i++) {
    const data = ledZeppelinData[i - 14];
    await prisma.question.upsert({
      where: { id: i + 15 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 2,
        topic_id: 6,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 24; i < nhlData.length + 24; i++) {
    const data = nhlData[i - 24];
    await prisma.question.upsert({
      where: { id: i + 24 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 3,
        topic_id: 9,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 47; i < beethovenData.length + 47; i++) {
    const data = beethovenData[i - 47];
    await prisma.question.upsert({
      where: { id: i + 47 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 2,
        topic_id: 5,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 57; i < nbaData.length + 57; i++) {
    const data = nbaData[i - 57];
    await prisma.question.upsert({
      where: { id: i + 57 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 3,
        topic_id: 8,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 89; i < harryPotterData.length + 89; i++) {
    const data = harryPotterData[i - 89];
    await prisma.question.upsert({
      where: { id: i + 89 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 1,
        topic_id: 2,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 118; i < starWarsData.length + 118; i++) {
    const data = starWarsData[i - 118];
    await prisma.question.upsert({
      where: { id: i + 118 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 1,
        topic_id: 3,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 145; i < lotrData.length + 145; i++) {
    const data = lotrData[i - 145];
    await prisma.question.upsert({
      where: { id: i + 145 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 1,
        topic_id: 1,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (let i = 184; i < beatlesData.length + 184; i++) {
    const data = beatlesData[i - 184];
    await prisma.question.upsert({
      where: { id: i + 184 },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 2,
        topic_id: 4,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }

  for (let i = 145; i < 155; i++) {
    await prisma.quiz_problems.upsert({
      where: { id: i },
      update: {},
      create: {
        quiz_id: 1,
        user_answer: "A",
        question_id: i,
      },
    });
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
