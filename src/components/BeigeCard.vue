<template>
	<div class="beige-card" v-bind="$attrs">
		<slot />
	</div>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
</script>

<style scoped>
.beige-card {
	background-color: var(--color-beige-gray);
	box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.5);
	border-radius: .75rem;
	padding: .5rem;
	width: 100%;
}
</style>