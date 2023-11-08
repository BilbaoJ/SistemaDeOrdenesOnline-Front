<template>
    <div class="w-screen h-screen grid content-center px-32">
        <TableAdmin :ruta = "'products'"/>
    </div>
</template>

<script>
import TableAdmin from '~/components/TableAdmin.vue';

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