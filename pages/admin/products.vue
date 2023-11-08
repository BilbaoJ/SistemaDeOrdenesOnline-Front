<template>
    <NuxtLayout :name="layout">
        <div class="w-screen h-screen grid content-center px-32">
            <TableAdmin :ruta = "'products'"/>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import TableAdmin from '~/components/TableAdmin.vue';

const layout = "header-admin";

onBeforeMount(() => {
    verifyRol()
})
const verifyRol = () => {
    const rol = localStorage.getItem('rol');
    if(rol !== "administrador"){
        navigateTo({path: "/"})
    }
}
</script>