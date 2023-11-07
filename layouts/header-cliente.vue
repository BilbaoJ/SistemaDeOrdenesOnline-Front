<template>
    <header class="bg-negro h-14 flex items-center justify-between p-2">
        <div class="static">
            <button @click="abrirMenu()" class="rounded-full bg-blanco h-fit w-fit p-1 ml-5">
                <Icon icon="lucide:user" class="w-8 h-8"/>
            </button>
            <div v-if="mostrarMenu" class="absolute top-14 left-8 bg-negro w-36 h-fit rounded-b-lg flex flex-col items-center p-2 ">
                <button @click="volverInicio()" class="hover:bg-gris w-full rounded-lg">
                    <p class="text-blanco font-letra tracking-wide text-center hover:text-negro">Inicio</p>
                </button>
                <p class="text-blanco font-letra tracking-wide text-center hover:bg-gris hover:text-negro w-full rounded-lg">Perfil</p>
                <button @click="cerrarSesion()" class="hover:bg-gris w-full rounded-lg">
                    <p class="text-blanco font-letra tracking-wide text-center hover:text-negro">Cerrar sesión</p>
                </button>
            </div>
        </div>

        <div class="flex items-center">
            <NuxtLink href="/" class="relative">
                <Icon icon="humbleicons:cart" class="h-12 w-12 text-blanco"/>
                <div class="rounded-full bg-rojo absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-blanco">{{ ClienteStore.productos_carrito.length }}</div>
            </NuxtLink>
        </div>
        
    </header>
    <slot />
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ClienteStore  from "../store/ClienteStore";
const mostrarMenu = ref(false);
const router = useRouter();
const abrirMenu = () => {
    mostrarMenu.value = !mostrarMenu.value;
}

const cerrarSesion = () =>{
    localStorage.clear();
    router.push({path: "/"});
}

const volverInicio = ()=>{
    router.push({path: "/cliente/home"});
}

</script>