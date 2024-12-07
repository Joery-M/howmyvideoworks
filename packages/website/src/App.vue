<template>
    <div class="text-center hover:text-left">Hi</div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { greet } from 'vp9-binding';
import { onMounted } from 'vue';

onMounted(async () => {
    greet();
});
useDark({ storageKey: 'color' });
</script>
