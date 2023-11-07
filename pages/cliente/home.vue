<template>
    <NuxtLayout :name="layout">
        <div class="flex justify-center mt-10 mb-10">
            <section class="grid grid-cols-3 auto-rows-auto gap-y-10 gap-x-16 w-3/4">
                <div v-for="producto in ClienteStore.productos">
                    <Producto :producto="producto"/>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import { ResponseTypes } from "~/model/enums/ResponseTypes.enum";
import ClienteStore  from "../../store/ClienteStore";
import swal from 'sweetalert2';
import type Product from "~/model/Product";
const layout = "header-cliente";
const router = useRouter();

onBeforeMount(async () => {
    await consultarProductos();
});

const consultarProductos = async()=>{
    try {
        const token:any = localStorage.getItem("token");
        const response:any = await $fetch("http://localhost:3000/products", {method:"GET", headers:{"token":token}});
        if (response) {
            switch (response.status) {
                case ResponseTypes.OK:{
                    ClienteStore.actualizarProductos(response.data as Product[]);
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

            case ResponseTypes.FORBIDDEN:{
                await swal.fire({
                    title:'Error',
                    text: error.data.message,
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false
                    });
                router.push({path:"/"});
                localStorage.clear();
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