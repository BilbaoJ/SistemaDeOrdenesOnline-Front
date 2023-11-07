<template>
    <div class="bg-gris flex flex-col justify-center items-center rounded-lg h-80">
        <div class="h-3/4 w-full flex items-center justify-center relative">
            <Icon icon="ph:image-square-thin" class="h-5/6 w-5/6"/>
            <button @click="agregarACarrito()" class="flex absolute top-0 right-0 p-4">
                <Icon icon="material-symbols:add-shopping-cart-outline-rounded" class="h-8 w-8"/>
            </button>
        </div>
        <div class="h-1/4 w-full border-t-2 border-negro flex items-center justify-center overflow-auto">
            <div class="w-1/4 flex items-center justify-center">
                <Icon icon="ph:heart-straight-light" class="w-8 h-8 hover:text-rojo"/>
            </div>
            <div class="flex flex-col w-3/4 items-center justify-center">
                <h2 class="text-lg font-letra font-thin tracking-widest text-negro text-center">{{ props.producto.name }}</h2>
                <h1 class="text-base font-letra font-thin tracking-wide text-negro">${{ props.producto.price }} COP</h1>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ClientStore from "../store/ClienteStore";
import type Product from '~/model/Product';
const props = defineProps({
  producto: { type: Object, required: true }
});

const agregarACarrito = () => {
    ClientStore.agregarProductoCarrito(props.producto as Product);
}
</script>