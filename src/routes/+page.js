import questions from "./questions";

export async function load() {
  return { questions: questions.sort(() => 0.5 - Math.random()).slice(0, 10) };
}
