<script>
    let value;
    import Alert from "./Alert.svelte";

    function handleSubmit(e) {
        if (value <= 0 || value > 25) {
            e.preventDefault();
            new Alert({
                target: document.getElementById("alert-container"),
                props: {
                    color: "danger",
                    message: "Please enter a number between 1 and 25!",
                },
            });
        }
    }
</script>

<form action="/" class="my-5" on:submit={handleSubmit}>
    <input
        class="form-control form-control-lg my-3"
        type="number"
        min="0"
        max="25"
        name="n"
        bind:value
        placeholder="Number of Questions"
    />
    <input
        class="form-control my-3 form-control-lg"
        name="name"
        placeholder="Your Name"
    />
    <div class="d-grid gap-2">
        <button class="btn btn-success py-4 my-3" type="submit"
            >Start Game</button
        >
    </div>
</form>
