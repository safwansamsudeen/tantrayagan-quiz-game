<script>
    export let currentIndex, NO_OF_Q;
    function changeQuestion(currentQuestionIndex) {
        currentIndex = currentQuestionIndex;
    }
</script>

<nav aria-label="Navigate Questions">
    <ul class="pagination pagination-lg justify-content-center">
        {#each { length: NO_OF_Q } as _, index}
            <li class="page-item">
                <button
                    class="page-link {index === currentIndex ? 'active' : ''}"
                    id="paginate-{index}"
                    on:click={() => changeQuestion(index)}>{index + 1}</button
                >
            </li>
        {/each}
    </ul>
</nav>
