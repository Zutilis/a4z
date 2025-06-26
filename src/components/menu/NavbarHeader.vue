<template>
	<div class="navbar-header">
		<button class="navbar-header-btn navbar-header-burger" @click="$emit('toggle')">
			<Transition name="fade" mode="out-in">
				<svg v-if="!isOpen" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 18L20 18" />
					<path d="M4 12L20 12" />
					<path d="M4 6L20 6" />
				</svg>

				<svg v-else viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 5L5 19M5.00001 5L19 19" />
				</svg>
			</Transition>
		</button>

		<Transition name="fade">
			<router-link v-if="!isOpen" to="/" class="navbar-header-logo">
				<img src="/images/a4ztrap.webp" alt="A4Z Trap Logo" />
			</router-link>
		</Transition>

		<router-link to="/ticketing" class="navbar-header-btn navbar-header-ticket">
			<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M22.996 11.25h-13.996c-0.414 0-0.75 0.336-0.75 0.75v0 7.605c0 0.414 0.336 0.75 0.75 0.75h13.996c0.414-0 0.75-0.336 0.75-0.75v0-7.605c-0-0.414-0.336-0.75-0.75-0.75v0zM22.246 18.855h-12.496v-6.105h12.496zM30 13.75c0.414-0 0.75-0.336 0.75-0.75v0-5c-0-0.414-0.336-0.75-0.75-0.75h-28c-0.414 0-0.75 0.336-0.75 0.75v0 5c0 0.414 0.336 0.75 0.75 0.75v0c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25v0c-0.414 0-0.75 0.336-0.75 0.75v0 5c0 0.414 0.336 0.75 0.75 0.75h28c0.414-0 0.75-0.336 0.75-0.75v0-5c-0-0.414-0.336-0.75-0.75-0.75v0c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25v0zM29.25 19.674v3.576h-26.5v-3.576c1.724-0.361 3-1.869 3-3.674s-1.276-3.313-2.975-3.67l-0.024-0.004v-3.576h26.5v3.576c-1.724 0.361-3 1.869-3 3.674s1.276 3.313 2.975 3.67l0.024 0.004z" />
			</svg>
		</router-link>
	</div>
</template>

<script setup>
defineProps({
	isOpen: Boolean
})
</script>

<style>
.navbar-header {
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	height: var(--h-navbar-header);
	padding: 0rem var(--space-x-page);
}

.navbar-header-logo {
	height: 55%;
	width: 50%;
}

.navbar-header-logo img {
	object-fit: contain;
	width: 100%;
	height: 100%;
}

.navbar-header-btn {
	width: 3.4375rem;
	height: 3.4375rem;
	aspect-ratio: 1 / 1;
	padding: .85rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.navbar-header-btn.navbar-header-burger,
.navbar-header-btn.navbar-header-close {
	background: var(--color-burger-button-bg);
	border: 1px solid var(--color-burger-button-border);
}

.navbar-header-btn.navbar-header-burger svg,
.navbar-header-btn.navbar-header-close svg {
	stroke: var(--color-burger-button-text) !important;
	stroke-width: 1;
	stroke-linecap: round;
}

.navbar-header-btn.navbar-header-ticket {
	background: var(--color-ticket-button-bg);
	border: 1px solid var(--color-ticket-button-border);
}

.navbar-header-btn.navbar-header-ticket svg {
	fill: var(--color-ticket-button-text) !important;
}
</style>