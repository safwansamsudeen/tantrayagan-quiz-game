<script>
    import { enhance } from "$app/forms";
</script>

<form action="/" use:enhance>
    <input
        class="form-control my-3"
        type="number"
        name="n"
        placeholder="Number of Questions"
    />
    <input class="form-control my-3" name="name" placeholder="Your Name" />
    <button class="btn btn-outline-primary btn-large" type="submit"
        >Start Game</button
    >
</form>
