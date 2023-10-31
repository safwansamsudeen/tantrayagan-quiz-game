import questions from "./questions";

export async function load({ url }) {
  const NO_OF_Q = url.searchParams.get("n");
  const name = url.searchParams.get("name") || "";
  if (NO_OF_Q) {
    return {
      questions: questions.sort(() => 0.5 - Math.random()).slice(0, NO_OF_Q),
      NO_OF_Q: +NO_OF_Q,
      name,
    };
  }
  return {
    questions: [],
    NO_OF_Q: -1,
    name,
  };
}
