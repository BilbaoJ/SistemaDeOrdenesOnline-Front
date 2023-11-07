<template>
    <div class="grid grid-cols-2 grid-rows-1s w-full h-screen">
        <section class="bg-blanco flex items-center">
            <img src="../assets/img/bgCompra.png" alt="">
        </section>
        <section class="bg-gris grid grid-cols-1 place-content-center place-items-center gap-y-20">
            <h1 class="text-4xl font-bold font-letra w-2/3 text-center">Bienvenido al sistema de ordenes en línea</h1>
            <form @submit.prevent="logIn()" class="w-3/4 flex flex-col space-y-8">
                <div class="flex flex-col">
                    <label for="email" class="text-lg font-letra">Correo</label>
                    <input v-model="registro.email" type="text" id="email" name="email" class="rounded-lg h-8 p-2" required>
                </div>
                <div class="flex flex-col">
                    <label for="password" class="text-lg font-letra">Contraseña</label>
                    <input v-model="registro.encryptedPassword" type="password" id="password" name="password" class="rounded-lg h-8 p-2" required>
                </div>
                <button type="submit" class="bg-rojo text-blanco text-lg font-letra w-2/4 rounded-lg h-8 self-center">Ingresar</button>
            </form>

        </section>
    </div>
</template>
<script setup lang="ts">
import { ResponseTypes } from "../model/enums/ResponseTypes.enum";
import swal from 'sweetalert2';

const registro = {
    email: "",
    encryptedPassword: ""
}
const logIn = async()=>{
    try {
        const response:any = await $fetch("http://localhost:3000/auth/login", {method:"POST", body: registro});
        if (response) {        
            switch (response.status) {
                case ResponseTypes.ACCEPTED:{
                    await swal.fire({
                        title:'Bienvenido',
                        icon: 'success',
                        timer: 1000,
                        showConfirmButton: false
                        });
                    const token = response.userConToken.token;
                    const rol = response.userConToken.user.rol;
                    localStorage.setItem('token', token);
                    localStorage.setItem('rol', rol);
                    if (rol === "administrador") {
                        await navigateTo({ path: "/admin/home" });
                    } else {
                        await navigateTo({ path: "/cliente/home" });
                    }
                    break;
                }
                
                case ResponseTypes.FORBIDDEN:{
                    await swal.fire({
                        title:'Error',
                        text: response.data.message,
                        icon: 'error',
                        timer: 1000,
                        showConfirmButton: false
                        });
                    break;
                }
                default:
                    break;
            }
        }
    } catch (error:any) {
        switch (error.statusCode) {
          case ResponseTypes.BAD_REQUEST: {
              await swal.fire({
                title:'Ocurrió un error iniciando sesión, revise los datos ingresados',
                icon: 'error',
                timer: 1000,
                showConfirmButton: false
              });
              break;
            }

            case ResponseTypes.NOT_FOUND: {
              await swal.fire({
                title:'Error',
                text: error.data.message,
                icon: 'error',
                timer: 1000,
                showConfirmButton: false
              });
              break;
            }

          case ResponseTypes.INTERNAL_SERVER_ERROR: {
            await swal.fire({
                  title: 'Error',
                  text: error.data.message,
                  icon: 'error',
                  timer: 1000,
                  showConfirmButton: false
              });
            break;
          }

          case ResponseTypes.UNAUTHORIZED: {
            await swal.fire({
                  title: 'Error',
                  text: error.data.message,
                  icon: 'error',
                  timer: 1000,
                  showConfirmButton: false
              });
            break;
          }

          default:
            await swal.fire({
              title:'Ocurrió un error inesperado',
              text:error,
              icon: 'error',
              timer: 1000,
              showConfirmButton: false
            });
            break;
        } 
    }

}
</script>