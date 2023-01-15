<script>
import data from "../data.json"

export default{
    data() {
        return {
            carData : data, 
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

</template>