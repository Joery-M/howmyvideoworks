<template>
    <div class="text-center">Hi</div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

useDark({ storageKey: 'color' });
</script>

<style scoped></style>
