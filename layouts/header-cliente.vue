<template>
    <header class="bg-negro h-14 flex items-center justify-between p-2">
        <div class="static">
            <button @click="abrirMenu()" class="rounded-full bg-blanco h-fit w-fit p-1 ml-5">
                <Icon icon="lucide:user" class="w-8 h-8"/>
            </button>
            <div v-if="mostrarMenu" class="absolute top-14 left-10 bg-negro w-36 h-10 rounded-lg flex items-center p-2">
                <p class="text-blanco font-letra tracking-wide text-center hover:bg-gris hover:text-negro w-full rounded-lg">Cerrar sesión</p>
            </div>
        </div>
        
        <div class="flex items-center">
            <NuxtLink href="/" class="relative">
                <Icon icon="humbleicons:cart" class="h-12 w-12 text-blanco"/>
                <div class="rounded-full bg-rojo absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-blanco">{{ ClienteStore.productos_carrito.length }}</div>
            </NuxtLink>
            <button @click="cerrarSesion()">
                <p class="text-blanco font-letra">Cerrar sesión</p>
            </button>
        </div>
        
    </header>
    <slot />
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ClienteStore  from "../store/ClienteStore";
var mostrarMenu = false;
const router = useRouter();
const abrirMenu = () => {
    mostrarMenu = !mostrarMenu;
}

const cerrarSesion = () =>{
    localStorage.clear();
    router.push({path: "/"});
}

</script>