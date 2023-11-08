<template>
    <h1 class="capitalize text-3xl text-center italic font-bold">{{ props.ruta }}</h1>
    <br>
    <br>
    <table class="relative w-full table-auto rounded-lg">
        <thead class="">
            <tr class="bg-negro text-center"> 
                <th v-for="(attributeName, index) in titles" :key="index" class="text-white text-center px-6 py-4">{{attributeName}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index" v-bind:class="[index%2==0? 'bg-blanco': 'bg-gris']" class="text-center">
                <td v-for="(attributeName, indexTitles) in titles" :key="indexTitles">{{item[attributeName]}}</td>
            </tr>
        </tbody>
    </table>
    <div class="relative top-28 flex items-center">
        <Icon icon="material-symbols:arrow-back-ios-rounded"/>
        <button @click="goBack()">atras</button>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  ruta: { type: String, required: true }
});

let items: any = ref([]);
let titles: Ref<string[]> = ref([""]);

onBeforeMount(async () => {
    let token:any = localStorage.getItem('token')
    let response: any = await $fetch(`http://localhost:3000/${props.ruta}`, {method: "GET", headers: {token}})
    if(!verifyOrder(props.ruta, response)){
        items.value = response.data
        titles.value = Object.keys(items.value[0]);
    }
})

const verifyOrder = (ruta: string, response: any) => {
    if(ruta === "orders"){
        titles.value = ["Numero orden", "Total de productos", "Precio total"]
        const ordersIdsGenerated: string[] = response.data.map(() => Math.ceil(Math.random() * (5001 - 1000) + 1000))
        const totalProducts: number[] = response.data.map((order:any) => order.products.length);
        const totalPrices: number[] = response.data.map((order: any) => order.totalPrice)
        let itemsOrder = []
        for (let i = 0; i < totalProducts.length; i++) {
            itemsOrder.push({
                "Numero orden": ordersIdsGenerated[i],
                "Total de productos": totalProducts[i],
                "Precio total": "$ " + totalPrices[i]
            })
        }
        items.value =  itemsOrder
        return true;
    }
    return false;
}

const goBack = async() => {
    await navigateTo({path: "/admin/home"})
}


</script>