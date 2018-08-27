<template>
    <div id="details">
        <h1>What is a Nixie Tube?</h1>
        <p>Usually contained within a vacuum filled with a gas like neon, it contains wire mesh cathodes in the shape of numbers, sometimes even letters and symbols.  The cathodes are stacked 6 7 5 8 4 3 9 2 0 1, from front to back, and each one is heated individually to give it the glow.  In recent years, it has made a revival in the nostalgic and retro scene.  While it is susceptible to damage due to it's glass tube casing, it is more for decoration, and is common in Steampunk aesthetics.</p>
        <p><strong>Fun fact:</strong> The name <em>Nixie</em> derrives from "<strong>N</strong>umeric <strong>I</strong>ndicator e<strong>X</strong>perimental No, 1" by Burroughs Coperation.</p>
        <p>More info available on the <a href="https://en.wikipedia.org/wiki/Nixie_tube">Wikipedia</a> page.</p>
    </div>
</template>

<script> 
export default {
    name: 'Details'
}
</script>

<style scoped>
#details {
    padding: 1em 2em;
}
#details p {
    font-family: sans-serif;
}

a {
    color: orange;
}

a:hover {
    text-shadow: 0 0 1px orange, 0 0 3px orange, 0 0 8px red;
}
</style>