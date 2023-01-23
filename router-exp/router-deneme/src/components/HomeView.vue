<script>
import JSConfetti from 'js-confetti'

export default {
    data() {
        return {
            onOf: false,
        }
    },
    methods: {
        confeti() {
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            });
        }
    },
}

</script>

<template>
    <br><br><br>
    <h1> ana sayfa</h1>

    <button @click="confeti">confeti</button>

</template>