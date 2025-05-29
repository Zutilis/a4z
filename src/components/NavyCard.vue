<template>
	<div class="navy-card-wrapper">
		<div class="navy-card" v-bind="$attrs">
			<slot />
		</div>
	</div>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
</script>

<style scoped>
.navy-card-wrapper {
	background-color: var(--color-black);
	box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.5);
	border-radius: .75rem;
	padding: .5rem;
}

.navy-card {
	background-color: var(--color-navy-blue);
	color: var(--color-light-blue);
	border-radius: 1rem;
	padding: 1rem .75rem;
	width: 100%;
}
</style>