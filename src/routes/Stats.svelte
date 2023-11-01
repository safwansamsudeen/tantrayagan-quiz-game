<script>
    export let stats, NO_OF_Q;
    function prettify(number) {
        return number.toFixed(2);
    }
</script>

<div class="card" style="width: 100%;">
    <div class="card-header text-center"><b>Total Score: {stats.score}</b></div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <b>Total Number Of Attempts</b>: {stats.attempts}
        </li>
        <li class="list-group-item">
            <b>Questions Correct on First Try:</b>
            {stats.questionsCorrectOnFirstTry}
        </li>
        <li class="list-group-item">
            <b>Attempts / Number of Questions</b>
            {prettify(stats.attempts / NO_OF_Q)}
        </li>
        <li class="list-group-item">
            <b>Average Score Per Question:</b>
            {prettify(stats.score / NO_OF_Q)}
        </li>
        <li class="list-group-item">
            <b>Average Score Per Attempt:</b>
            {prettify(stats.score / stats.attempts)}
        </li>
    </ul>
</div>
