<template>
    <div class="grid grid-cols-3 grid-rows-1 relative">
        <Icon icon="ph:image-square-thin" class=" h-full w-full text-letra"/>
        <div class="flex flex-col justify-center">
            <h1 class="text-2xl">{{ props.producto.name }}</h1>
            <h2 class="text-xl">${{ props.producto.price }} COP</h2>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="text-base">{{ props.producto.description }}</p>
        </div>
        <div class="flex absolute top-0 right-0 ">
            <button @click="eliminarProductoAgregado()" class=" bg-red-50 hover:bg-rojo hover:text-white self-start flex p-2 rounded-lg">
                <Icon icon="material-symbols:delete"/>
                <p class="text-xs">Eliminar</p>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import swal from 'sweetalert2';
import type Product from '~/model/Product';
import clienteStore from '~/store/ClienteStore';

const props = defineProps({
  producto: { type: Object, required: true }
});

const eliminarProductoAgregado = async () => {
    await swal.fire({
        title: 'Estás seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            clienteStore.eliminarProductoCarrito(props.producto as Product);
            clienteStore.calcularPrecioCarrito();
        }
    })
}
</script>