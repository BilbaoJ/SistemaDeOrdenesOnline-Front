<template>
    <div class="w-screen h-screen justify-center flex top-1">
        <button @click="goToProductsAdmin()" class="relative border bg-rojo text-white w-96 h-96 top-28 mr-16 text-6xl">Consulta productos!</button>
        <button @click="goToOrdersAdmin()" class="relative border bg-negro text-white w-96 h-96 top-28 ml-16 text-6xl">Consulta ordenes!</button>
    </div>
    <div class="relative flex items-center">
        <Icon icon="material-symbols:arrow-back-ios-rounded"/>
        <button @click="cerrarSesion()">cerrar sesion</button>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import clienteStore from '~/store/ClienteStore';

const router =  useRouter()

onBeforeMount(() => {
    verifyRol()
    clienteStore.validarToken(router);
})

const verifyRol = () => {
    const rol = localStorage.getItem('rol');
    if(rol !== "administrador"){
        navigateTo({path: "/"})
    }
}

const goToProductsAdmin = async () => {
    await navigateTo({path: "/admin/products"})
}

const goToOrdersAdmin = async () => {
    await navigateTo({path: "/admin/orders"})
}

const cerrarSesion = async() =>{
    localStorage.clear();
    await navigateTo({path: "/"});
}

</script>