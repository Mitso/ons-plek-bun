<script setup lang="ts">
    const { data } = await useFetch('/api/api')
    definePageMeta({
        name: 'Home'
    })
    useSeoMeta({
        title: 'Ons Plek | Home',
        description: 'The Intuitive Vue Framework.'
    })

</script>

<template>
    <section class="home">
        <!-- 
            Server side rendered Page

            1. Navigation 
                a) For Client side rendered Routes => Component  
        -->
       
        <div class="content">
            <h1 class="title">Welcome to Ons Plek hub</h1>
            <p class="paragraph">Hello {{ data?.thing }}</p>
        </div>
    </section>
</template>
