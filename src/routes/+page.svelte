<script>
    export let data;
    import Alert from "./Alert.svelte";
    function checkAnswer(e, attempt, question) {
        let color = "danger";
        let props = { color, message: "Try again!" };
        if (attempt === question.answer) {
            color = "success";
            props = {
                color,
                message: `Correct! The answer is indeed "${question[attempt]}".`,
            };
        }

        new Alert({
            target: document.getElementById("alert"),
            props,
        });

        e.target.classList.add(`btn-${color}`);
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Quiz Game" />
</svelte:head>

<section>
    <h1>Welcome to the Quiz Game</h1>
    <div id="alert"></div>
    {#each data.questions as question, index}
        <p>{index + 1}. {question.question}</p>
        <ul>
            {#each ["A", "B", "C", "D"] as option}
                <li>
                    <button
                        class="btn"
                        on:click={(e) => checkAnswer(e, option, question)}
                        >{question[option]}</button
                    >
                </li>
            {/each}
        </ul>
    {/each}
</section>

<style>
    ul {
        list-style-type: none;
        margin: 20px 10px;
    }

    li {
        margin: 5px;
    }

    button {
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

    #alert {
        position: fixed;
        right: 30px;
        bottom: 20px;
        width: 50%;
        z-index: 9999;
        border-radius: 0px;
    }
</style>
