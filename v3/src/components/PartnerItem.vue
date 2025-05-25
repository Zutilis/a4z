<template>
	<div class="partner-card" :ref="addRef">
		<a :href="partner.url" target="_blank" class="partner-item rounded">
			<img :src="partner.image_src" alt="" :class="['partner-cover', {'shadow rounded': partner.image_shadow}]" />
			<div class="partner-ds">
				<h3>
					{{ partner.name }}
					<img src="/svg/newtab.svg" alt="" class="partner-newtab" />
				</h3>
				<h5>{{ partner.description }}</h5>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		partner: {
			type: Object,
			required: true
		},
		addRef: {
			type: Function,
			required: true
		}
	}
};
</script>

<style scoped>
.partner-card {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	padding: var(--padding-vertical) var(--padding-horizontal);
}

.partner-item {
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	padding: 5% 0;
	gap: 10%;
	cursor: pointer;
	transition: box-shadow 0.5s ease-in-out;
}

.partner-ds {
	width: 45%;
	gap: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}

.partner-newtab {
	position: absolute;
	height: 20px;
	aspect-ratio: 1 / 1;
	transform: translateX(5px);
}

.partner-cover {
	width: 20%;
	min-width: 200px;
	aspect-ratio: 1 / 1;
	object-fit: contain;
	box-sizing: border-box;
}

@media screen and (min-width: 350px) {
	.partner-item:hover {
		box-shadow: -2px 4px 20px 6px rgba(0, 0, 0, 0.3);
	}
}

@media screen and (max-width: 768px) {
	.partner-item {
		flex-direction: column;
		gap: 5vh;
	}

	.partner-ds {
		width: 95%;
	}

	.partner-prospect {
		width: 90%;
	}

	.partner-cover {
		width: 50%;
	}
}

@media screen and (max-width: 350px) {
	.partner-ds h5 {
		display: none;
	}

	.partner-ds h3 img {
		display: none;
	}
}
</style>