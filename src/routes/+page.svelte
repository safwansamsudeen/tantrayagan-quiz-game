<script>
    export let data;
    import Alert from "./Alert.svelte";
    import StartGame from "./StartGame.svelte";
    import Pagination from "./Pagination.svelte";
    import Questions from "./Questions.svelte";
    import Stats from "./Stats.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (data.name) {
            new Alert({
                target: document.getElementById("alert-container"),
                props: {
                    color: "success",
                    message: `Hello ${data.name}!`,
                },
            });
        }
    });

    let currentIndex = 0;
    let stats = {
        attempts: 0,
        questionsCorrect: 0,
        questionsCorrectOnFirstTry: 0,
        score: 0,
    };
    $: gameCompleted = stats.questionsCorrect === data.NO_OF_Q;
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Quiz Game" />
</svelte:head>

<section>
    <h1>Welcome to the Tantrayagan Quiz Game</h1>
    <div id="alert-container"></div>
    {#if data.NO_OF_Q === -1}
        <StartGame />
    {/if}
    <div class="container">
        <div class="row">
            {#if data.NO_OF_Q !== -1}
                <div class="col quiz-container">
                    <h3 class="text-center">Current Quiz</h3>
                    <Pagination bind:currentIndex questions={data.questions} />
                    <Questions
                        bind:stats
                        questions={data.questions}
                        {currentIndex}
                    />
                </div>
            {/if}
            <div class={gameCompleted ? "col-md-4" : "d-none"}>
                <h3 class="text-center">Stats</h3>
                <Stats {stats} NO_OF_Q={data.NO_OF_Q} />
            </div>
        </div>
    </div>
</section>

<style>
    #alert-container {
        position: fixed;
        right: 30px;
        top: 20px;
        width: 50%;
        z-index: 9999;
        border-radius: 0px;
    }
</style>
