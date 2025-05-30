<template>
	<div class="beige-card" v-bind="$attrs">
		<slot />
	</div>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
</script>

<style>
.beige-card {
	background-color: var(--color-beige);
	box-shadow: var(--shadow-black-on-white);
	border-radius: .75rem;
	padding: .75rem 1rem;
	width: 100%;
}
</style>