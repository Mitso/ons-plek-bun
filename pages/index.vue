<script setup>
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
        <div class="content">
            <h1 class="title">Welcome to Ons Plek hub</h1>
            <p class="paragraph">Hello {{ data?.thing }}</p>
        </div>
    </section>
</template>
