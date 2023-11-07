<template>
    <div class="grid grid-cols-3 grid-rows-1">
        <Icon icon="ph:image-square-thin" class=" h-full w-full text-letra"/>
        <div class="flex flex-col justify-center">
            <h1 class="text-2xl">{{ props.producto.name }}</h1>
            <h2 class="text-xl">${{ props.producto.price }} COP</h2>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="text-base">{{ props.producto.description }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  producto: { type: Object, required: true }
});
</script>