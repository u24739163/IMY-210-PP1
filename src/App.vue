<!--u24739163 Mulondi Makhado-->
<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="nav-container">
    <div class="top-nav">
        <nav>
          <ul>
            <li><RouterLink to="/"><img src="./assets/sudo.png" /></RouterLink></li>
          </ul>
        </nav>  
    </div>
    <RouterView name="bottomNav"/> 
</div>
<RouterView/>
</template>

<style>
@import './assets/styles/modal.css';
@import './assets/styles/buttons.css';
@import './assets/styles/header.css';
@import './assets/styles/body.css';
</style>