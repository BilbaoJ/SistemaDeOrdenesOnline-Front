<template>
    <NuxtLayout :name="layout">
        <div class="w-screen h-screen justify-center flex top-1">
            <button @click="goToProductsAdmin()" class="relative border bg-rojo text-white w-96 h-96 top-28 mr-16 text-6xl">Consulta productos!</button>
            <button @click="goToOrdersAdmin()" class="relative border bg-negro text-white w-96 h-96 top-28 ml-16 text-6xl">Consulta ordenes!</button>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import clienteStore from '~/store/ClienteStore';

const layout = "header-admin";
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
</script>