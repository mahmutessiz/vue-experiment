<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import data from "../data/data.json"
import deneme from "../deneme.js";

const carData = ref(data);
const deneme1 = ref(deneme);

watch(addValueToDeneme1Array, async ()=>{
   await console.log(deneme1.value.arrayDeneme.sayilar);
});

onMounted(
    () => {
        console.log(deneme1.value.arrayDeneme.sayilar)
    }
);

function addValueToDeneme1Array() {
    deneme1.value.arrayDeneme.sayilar.push("sayi")
}


</script>

<template>
    <div>
        <h1>deneme</h1>
        <ul>
            <li v-for="car in carData" :key="car.id">
                <ul>
                    <h3>Arabalar</h3>
                    <li>marka: {{ car.marka }}</li>
                    <li>model: {{ car.model }}</li>
                    <li>yaş: {{ car.yas }}</li>
                    <li>fiyat: {{ car.fiyat }} ( TL )</li>
                </ul> <br>
            </li>
        </ul>
    </div>

    <!-- xxxxxxxxxx  Bu kısımda başka bir json dosyasına data göndermek istedim. yapamadım. daha sonra tekrar geleceğim. -->
    <p>{{ deneme1.arrayDeneme.sayilar }}</p>
    <button @click="addValueToDeneme1Array">add</button>
</template>


