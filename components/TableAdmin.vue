<template>
    <table class="relative w-full table-auto">
        <thead>
            <tr class="bg-gray-800 rounded-tl-lg rounded-tr-lg"> 
                <th v-for="(attributeName, index) in titles" :key="index" class="text-white text-center px-6 py-4">{{attributeName}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index" v-bind:class="[index%2==0? 'bg-gray-200': 'bg-gray-500']">
                <td v-for="(attributeName, indexTitles) in titles" :key="indexTitles">{{item[attributeName]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">

let items: any = [

];
let titles: string[] = [];

onBeforeMount(() => {
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    $fetch("http://localhost:3000/products", {method: "GET", headers: {token}})
    .then((data) => {
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        items = data
    })
    .catch((error) => {
        console.log(error);
        
    });
    
    
    titles = Object.keys(items[0]);
})

onMounted(async () => {
    
})

</script>