<template>
    <NuxtLayout :name="layout">
        <div class="flex flex-col justify-center mt-10 mb-10">
            <div class="w-3/4 self-center flex relative z-0">
                <h1 class="text-letra text-2xl font-bold tracking-widest mx-10">Productos agregados</h1>
                <NuxtLink href="/cliente/home" class="bg-rojo absolute right-20 p-1 w-1/12 rounded-2xl text-blanco flex justify-center">
                    <p>Volver</p>
                </NuxtLink>
            </div>
            <section class="grid grid-cols-8 w-3/4 pt-10 self-center">
                <div class="col-span-5 grid grid-cols-1 gap-y-4">
                    <div v-for="producto in ClienteStore.productos_carrito">
                        <ProductoCarrito :producto="producto"/>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center">
                    <div class="w-3/4 h-fit p-6 bg-gris flex flex-col gap-y-4">
                        <h1 class="text-letra text-2xl font-semibold">Detalle de compra</h1>
                        <p class="text-letra text-lg">Total: {{ ClienteStore.total_compra }} COP</p>
                        <button @click="terminarCompra()" class="bg-rojo text-white rounded-full p-2 w-2/4 self-center">Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import { ResponseTypes } from "~/model/enums/ResponseTypes.enum";
import ClienteStore  from "../../store/ClienteStore";
import swal from 'sweetalert2';
const layout = "header-cliente";
const router = useRouter();

const terminarCompra = async()=>{
    try {
        const token:any = localStorage.getItem("token");
        const response:any = await $fetch("http://localhost:3000/orders", {method:"POST", headers:{"token":token}, body: {"products": ClienteStore.productos_carrito}});
        if (response) {
            switch (response.status) {
                case ResponseTypes.OK:{
                    await swal.fire({
                        title:'Hecho!',
                        text: 'Compra registrada',
                        icon: 'success',
                        timer: 1000,
                        showConfirmButton: false
                    });
                    ClienteStore.limpiar();
                    router.push({path:"/cliente/home"});
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
                localStorage.clear();
                router.push({path:"/"});
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