<script>
import JSConfetti from 'js-confetti'

export default {
    data() {
        return {
            onOf: false,
            deneme: {
                dene: '<img style="width: 50%;"  src="https://wallpapers.com/images/hd/dark-anime-gothic-girl-k1uj3cr7kr9a96nx.jpg" alt="">',
            }
        }
    },
    methods: {
        confeti() {
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸',"😎"],
            });
        }
    },
}

</script>

<template>

    <div style="width: 100%; display: grid; justify-content: center; align-items: center;">
    <button @click="confeti" style="width: 35%;">confeti</button>

        <div>
            {{ deneme.dene }}
        </div>
        <br>

        <div style="width: 100%;" v-html="deneme.dene"></div>
    </div>
    <br><br><br>
    <h1> ana sayfa</h1>




</template>