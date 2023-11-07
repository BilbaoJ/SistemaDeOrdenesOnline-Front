<template>
    <table>
        <thead>
            <tr> 
                <th v-for="(attributeName, index) in titles" :key="index">{{attributeName}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td v-for="(attributeName, indexTittles) in titles" :key="indexTitles">{{item[attributeName]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">


</script>