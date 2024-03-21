-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "aggregate_score" INTEGER NOT NULL,
    "quiz_count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "date_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quiz_completed" BOOLEAN NOT NULL,
    "image_Word_id" INTEGER NOT NULL,
    CONSTRAINT "Quiz_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Quiz_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Quiz_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Quiz_image_Word_id_fkey" FOREIGN KEY ("image_Word_id") REFERENCES "Image_word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Quiz_problems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quiz_id" INTEGER NOT NULL,
    "user_answer" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    CONSTRAINT "Quiz_problems_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Quiz_problems_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "difficulty" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correct_answer" TEXT NOT NULL,
    "fun_fact" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "answer_a" TEXT NOT NULL,
    "answer_b" TEXT NOT NULL,
    "answer_c" TEXT NOT NULL,
    "answer_d" TEXT NOT NULL,
    CONSTRAINT "Question_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image_word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic_word" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,
    CONSTRAINT "Image_word_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Image_word_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_topics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    CONSTRAINT "User_topics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_topics_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categories_topics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    CONSTRAINT "Categories_topics_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Categories_topics_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
