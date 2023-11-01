import questions from "./questions";

export async function load({ url }) {
  const NO_OF_Q = url.searchParams.get("n");
  const name = url.searchParams.get("name") || "";
  // Get NO_OF_Q random questions from questions, and then add random scores to them.
  let selectedQuestions = questions
    .sort(() => 0.5 - Math.random())
    .slice(0, NO_OF_Q)
    .map((q) => ({ ...q, marks: Math.ceil(Math.random() * 10) }));
  if (NO_OF_Q) {
    if (+NO_OF_Q < 0) {
      return {
        questions: [],
        NO_OF_Q: -1,
        name,
        alert: {
          message: "Please provide a positive number!",
          color: "danger",
        },
      };
    }
    return {
      NO_OF_Q: +NO_OF_Q,
      questions: selectedQuestions,
      name,
    };
  }
  return {
    questions: [],
    NO_OF_Q: -1,
    name,
  };
}
