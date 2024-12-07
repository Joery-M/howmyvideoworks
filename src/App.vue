<template>
    <div class="text-center hover:text-left">Hi</div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

useDark({ storageKey: 'color' });
</script>
