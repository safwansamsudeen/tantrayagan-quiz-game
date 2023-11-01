<script>
    export let currentIndex, questions;
    function changeQuestion(currentQuestionIndex) {
        currentIndex = currentQuestionIndex;
    }
</script>

<nav aria-label="Navigate Questions">
    <ul class="pagination pagination-lg justify-content-center">
        {#each questions as question, index}
            <li class="page-item">
                <button
                    class="page-link {index === currentIndex
                        ? 'active'
                        : ''} {question.correct
                        ? 'correct'
                        : question.attempted
                        ? 'attempted'
                        : ''}"
                    id="paginate-{index}"
                    on:click={() => changeQuestion(index)}>{index + 1}</button
                >
            </li>
        {/each}
    </ul>
</nav>

<style>
    .correct {
        background-color: #198754 !important;
        color: #fff;
    }
    .attempted {
        background-color: #ffc107 !important;
        color: #fff;
    }
</style>
