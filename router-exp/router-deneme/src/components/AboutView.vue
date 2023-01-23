<script>
import data from "../data/data.json"
import dataDeneme from "../data/deneme.json"



export default {
    data() {
        return {
            carData: data,
            denemeData: dataDeneme,
        }
    },
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
     <button @click="addValue">Add Value</button>

</template>


