<template>
    <NuxtLayout :name="layout">
        <div class="flex flex-col justify-center mt-10 mb-10">
            <div class="w-3/4 self-center flex relative z-0">
                <h1 class="text-letra text-2xl font-bold tracking-widest mx-10">Productos agregados</h1>
                <NuxtLink href="/cliente/home" class="bg-rojo absolute right-20 p-1 w-1/12 rounded-2xl text-blanco flex justify-center">
                    <p>Volver</p>
                </NuxtLink>
            </div>
            <section class="grid grid-cols-8 w-3/4 pt-10 self-center">
                <div class="col-span-5 grid grid-cols-1 gap-y-4">
                    <div v-for="producto in ClienteStore.productos_carrito">
                        <ProductoCarrito :producto="producto"/>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center">
                    <div class="w-3/4 h-fit p-6 bg-gris flex flex-col gap-y-4">
                        <h1 class="text-letra text-2xl font-semibold">Detalle de compra</h1>
                        <p class="text-letra text-lg">Total: {{ ClienteStore.total_compra }} COP</p>
                        <button @click="terminarCompra()" class="bg-rojo text-white rounded-full p-2 w-2/4 self-center">Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import ClienteStore  from "../../store/ClienteStore";
const layout = "header-cliente";

const terminarCompra = async()=>{

}
</script>