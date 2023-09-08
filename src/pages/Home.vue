<template>
    <div>
        <i class="fa-solid fa-bullhorn"></i>
        <div class="triangle-container">
            <div class="triangle"></div>
            <div class="icon">⚫</div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.triangle-container {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
}

.triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100px 100px 0;
    border-color: #007bff transparent transparent transparent;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
}
</style>
