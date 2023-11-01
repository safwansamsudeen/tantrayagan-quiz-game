<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    <h1>About this app</h1>
    <p class="mb-5">
        This is a <a href="https://kit.svelte.dev">SvelteKit</a> web app made by
        Rayhan Ahmad and Safwan Samsudeen. We hope you like it!
    </p>

    <p>
        <b>Why did we use Svelte + SvelteKit?</b>
        <br />
        Svelte is a JS framework that is a bit like React.js. It's extremely fast,
        allows for great reactivity, and is a beautiful framework to work with. We've
        used it in the frontend
        <br />
        SvelteKit is the backend of our website - it is the official backend used
        for Svelte apps.
    </p>
    <p>
        <b>Where did I get the questions from?</b>
        <br />
        In today's world, Open Source Software (OSS) is becoming more and more common
        (indeed, this app itself is now open source!).
        <br />
        A lot of OSS is found online on GitHub, where anybody can take and use it.
        I found this questions on it, and extend my gratitude to the author.
    </p>
    <p>
        <b>How do I make the confetti?</b>
        <br />
        If you get a question correct the first time, you'll enjoy a spray of confetti!
        We use <code>neo-confetti</code>, another Open Source Library.
    </p>
    <p>
        <b>How does the point system work?</b>
        <br />
        To add a hint of interactivity, questions are randomly assigned points from
        1 - 10. When you get the question correct the first time, you get double
        the number of points.
        <br />
        Otherwise, you get that many points for the questions.
    </p>
</div>

<style>
    p {
        font-size: 18px;
    }
</style>
