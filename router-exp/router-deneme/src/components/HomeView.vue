<script>
import JSConfetti from 'js-confetti';
import VanillaTilt from 'vanilla-tilt';


export default {
    data() {
        return {
            onOf: false,
            deneme: {
                dene: '<img style="width: 50%;"  src="https://wallpapers.com/images/hd/dark-anime-gothic-girl-k1uj3cr7kr9a96nx.jpg" alt="" id="tilt">',
            }

        }
    },
    methods: {
        confeti() {
            const canvas = document.getElementById("canvasId")
            const jsConfetti = new JSConfetti({ canvas })
            jsConfetti.addConfetti({
                emojis: ['ð', 'â¡ï¸', 'ð¥', 'â¨', 'ð«', 'ð¸', "ð", "mahmut eÅsiz", "Edaaaaaaaaaaaaaaaa!!!!!!!!!!!!!"],
                confettiRadius: 6,
                confettiNumber: 500,
                emojiSize: 10,
            });
        }
    },
    mounted() {
        VanillaTilt.init(document.querySelector("#tilt"),{
            max: 25,
            speed: 400,
            perspective: 2000,
            scale: 2 
        })
    },
}

</script>

<template>

    <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1> ana sayfa</h1>
        <button @click="confeti" style="width: 35%;">confeti</button>

        <div>
            {{ deneme.dene }}
        </div>
        <br>
        <canvas id="canvasId" width="500" height="300" style="border:1px solid #000000; position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1000;
    pointer-events: none;"></canvas>
        <div style="margin-left: 30%;" v-html="deneme.dene"></div>
        <img src="https://picsum.photos/160" alt="">
        <img src="https://picsum.photos/160" alt="">
    </div>
    <br><br><br>



</template>