<script>
    export let questions, currentIndex, stats;
    import { confetti } from "@neoconfetti/svelte";
    import Alert from "./Alert.svelte";
    import { tick } from "svelte";
    let isConfetti = false;
    function checkAnswer(e, attempt, question) {
        let color = "danger";
        let message = "Try again!";
        stats.attempts += 1;
        if (attempt === question.answer) {
            stats.questionsCorrect += 1;
            color = "success";
            message = `Correct! The answer is indeed "${question[attempt]}".`;
            if (!question.attempted) {
                stats.questionsCorrectOnFirstTry += 1;
                message = `${message} You got it on your first try!`;
                isConfetti = true;
                setTimeout(() => (isConfetti = false), 1000);
            }
        }
        new Alert({
            target: document.getElementById("alert-container"),
            props: {
                color,
                message,
            },
        });
        question.attempted = true;
        e.target.classList.add(`btn-${color}`);
        e.target.disabled = true;
    }
</script>

{#if isConfetti}
    <div use:confetti={{ particleCount: 200, force: 0.3 }} />
{/if}
{#each questions as question, index}
    <div class={index !== currentIndex && "d-none"}>
        <p>{index + 1}. {question.question}</p>
        <ul>
            {#each ["A", "B", "C", "D"] as option}
                <li class="option">
                    <button
                        class="btn option"
                        on:click={(e) => checkAnswer(e, option, question)}
                        >{question[option]}</button
                    >
                </li>
            {/each}
        </ul>
    </div>
{/each}

<style>
    li.option {
        margin: 5px;
    }

    button.option {
        border: 2px dotted black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        width: 100%;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
    }

    ul {
        list-style-type: none;
        margin: 20px 10px;
    }
</style>
