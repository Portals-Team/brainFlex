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
  WorldWarTwoData,
  WorldWarOneData,
  theColdWarData,
  ComediesData,
  thrillersData,
  scienceFictionMoviesData,
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
  for (let i = 10; i < 13; i++) {
    await prisma.categories_topics.upsert({
      where: { id: i },
      update: {},
      create: {
        category_id: 4,
        topic_id: i,
      },
    });
  }
  for (let i = 13; i < 16; i++) {
    await prisma.categories_topics.upsert({
      where: { id: i },
      update: {},
      create: {
        category_id: 5,
        topic_id: i,
      },
    });
  }

  let current_question_index = 0;

  for (const question of football_questions) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of ledZeppelinData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of nhlData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of beethovenData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of nbaData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of harryPotterData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of starWarsData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of lotrData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of beatlesData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
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
  for (const question of WorldWarOneData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 4,
        topic_id: 11,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (const question of WorldWarTwoData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 4,
        topic_id: 10,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (const question of theColdWarData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 4,
        topic_id: 12,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (const question of ComediesData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 5,
        topic_id: 13,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (const question of thrillersData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 5,
        topic_id: 14,
        answer_a: data.answer_a,
        answer_b: data.answer_b,
        answer_c: data.answer_c,
        answer_d: data.answer_d,
      },
    });
  }
  for (const question of scienceFictionMoviesData) {
    const data = question;
    current_question_index = current_question_index + 1;
    await prisma.question.upsert({
      where: { id: current_question_index },
      update: {},
      create: {
        difficulty: data.difficulty,
        question: data.question,
        correct_answer: data.correct_answer,
        fun_fact: data.fun_fact,
        category_id: 5,
        topic_id: 15,
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
