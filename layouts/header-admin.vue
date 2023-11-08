<template>
    <header class="bg-negro h-14 flex items-center justify-between p-2 sticky top-0 z-10">
        <div class="static flex space-x-4 items-center">
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
            <h1 class="text-letra text-xl text-blanco">¡Hola, {{ name }}!</h1>
        </div>
    </header>
    <slot />
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ClienteStore  from "../store/ClienteStore";
const mostrarMenu = ref(false);
const name = ref();
const router = useRouter();
const abrirMenu = () => {
    mostrarMenu.value = !mostrarMenu.value;
}

const cerrarSesion = () =>{
    localStorage.clear();
    router.push({path: "/"});
}

const volverInicio = ()=>{
    router.push({path: "/admin/home"});
}

onBeforeMount( () => {
    name.value = localStorage.getItem("userName");
});

</script>