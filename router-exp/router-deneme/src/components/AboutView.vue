<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import data from "../data/data.json"
import deneme from "../deneme.js";

const carData = ref(data);
const deneme1 = ref(deneme);


const addValueToDeneme1Array = () => {
    deneme1.value.arrayDeneme.sayilar.push("sayi");
    console.log("kendim de çalışırım");
}

watch(addValueToDeneme1Array, () => {
    console.log(deneme1.value.arrayDeneme.sayilar);
});

onMounted(
    () => {
        console.log(deneme1.value.arrayDeneme.sayilar)
    }
);




</script>

<template>
    <div style="text-align: center;">
        <h1>Cars</h1>
        <ul>
            <h3>Arabalar</h3>

            <li v-for="car in carData" :key="car.id">
                <ul>

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


