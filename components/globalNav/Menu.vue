<script setup>
    const listElemStyle = computed(() => {
        return ['first:pl-0', 'px-2', 'uppercase', 'text-sm', 'text-black']
    })
    const anchorElemStyle = computed(() => {
        return ['text-[#444444]', 'hover:underline', 'font-semibold']
    })
</script>


<template>
    <!--
        bg-[#f2f2f2]
    -->
    <div class="menu">
        <div class="primary-menu relative bg-[url('/assets/images/general/tree-1.png')] h-[200px] bg-[-640px_-760px] bg-no-repeat">
            <p class="app-slogan flex justify-center items-center text-white">Ons Plek - Indawo Yethu</p>
        </div>
        <div class="second-menu py-4 flex items-center justify-center border-b border-t-[15px] border-t-black border-b-[#e6e6e6]">
            <!-- <div class="logo w-[10%]">
                    <img src="/assets/images/general/tlc-hair.png" alt="TLC Hair" class="w-[150px]" />
                </div>
            -->
            <nav class="navigation">
                <ul class="menu-list flex font-normal">
                    <li class="menu-list__item" :class="listElemStyle">
                        <NuxtLink to="/" :class="anchorElemStyle" exact-path>Home</NuxtLink>
                        <!-- <a class="menu-list__anchor" :class="anchorElemStyle" href="/">Home</a> -->
                    </li>
                    <li class="menu-list__anchor" :class="listElemStyle">
                        <NuxtLink to="/about" :class="anchorElemStyle" exact-path>About</NuxtLink>
                    </li>
                    <li class="menu-list__anchor" :class="listElemStyle">
                        <NuxtLink to="/resources" :class="anchorElemStyle" exact-path>Social Links</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<style lang="css">
    .router-link-active {
        text-decoration: underline;
    }
    .app-slogan {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px 5px 0px 5px;
        background: #000;
        width: 380px;
        display: block;
        color: #fff;
        margin: 0 auto;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>