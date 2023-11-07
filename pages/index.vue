<template>
    <div class="grid grid-cols-2 grid-rows-1s w-full h-screen">
        <section class="bg-blanco flex items-center">
            <img src="../assets/img/bgCompra.png" alt="">
        </section>
        <section class="bg-gris grid grid-cols-1 place-content-center place-items-center gap-y-20">
            <h1 class="text-4xl font-bold font-letra w-2/3 text-center">Bienvenido al sistema de ordenes en línea</h1>
            <form action="" class="w-3/4 flex flex-col space-y-8">
                <div class="flex flex-col">
                    <label for="email" class="text-lg font-letra">Correo</label>
                    <input v-model="registro.email" type="text" id="email" name="email" class="rounded-lg h-8">
                </div>
                <div class="flex flex-col">
                    <label for="password" class="text-lg font-letra">Contraseña</label>
                    <input v-model="registro.encryptedPassword" type="password" id="password" name="password" class="rounded-lg h-8">
                </div>
                <button type="submit" class="bg-rojo text-blanco text-lg font-letra w-2/4 rounded-lg h-8 self-center">Ingresar</button>
            </form>

        </section>
    </div>
</template>
<script setup lang="ts">
const registro = {
    email: "",
    encryptedPassword: ""
}
const logIn = async()=>{
    try {
        
    } catch (error) {
        
    }

}
</script>