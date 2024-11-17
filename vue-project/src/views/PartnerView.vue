<template>
	<main>
		<div class="main-bg bg-none">
			<div v-if="visibleItems[0]" :class="['bg-layer blur', { 'no-transition': !transitionEnabled }]" :style="{
				backgroundImage: `url(${visibleItems[0].imgSrc})`,
				opacity: visibleItems[0].opacity,
			}"></div>
			<div v-if="visibleItems[1]" :class="['bg-layer blur', { 'no-transition': !transitionEnabled }]" :style="{
				backgroundImage: `url(${visibleItems[1].imgSrc})`,
				opacity: visibleItems[1].opacity,
			}"></div>
		</div>
		<div class="partner-container">
			<PartnerItem v-for="(item, index) in partnerItems" :key="index" :partner="item" :add-ref="addItemRef" />
		</div>
		<router-link to="/" class="partner-prospect glass shadow">
			<h5>Devenir Partenaire</h5>
		</router-link>
	</main>
</template>

<script>
import partnersData from "@/assets/json/partners.json";
import PartnerItem from "@/components/PartnerItem.vue";

export default {
	components: {
		PartnerItem,
	},
	data() {
		return {
			partnerItems: partnersData.partners,
			itemRefs: [],
			visibleItems: [],
			transitionEnabled: true,
			viewportHeight: window.innerHeight,
			isTicking: false,
		};
	},
	methods: {
		addItemRef(el) {
			if (el && !this.itemRefs.includes(el)) {
				this.itemRefs.push(el);
			}
		},
		handleScroll() {
			if (!this.isTicking) {
				window.requestAnimationFrame(() => {
					this.updateVisibleItems();
					this.isTicking = false;
				});
				this.isTicking = true;
			}
		},
		updateVisibleItems() {
			const items = [];
			this.itemRefs.forEach((item) => {
				const rect = item.getBoundingClientRect();
				const visibilityPercentage = this.calculateVisibility(rect);

				if (visibilityPercentage > 0) {
					const imgSrc = item.querySelector(".partner-cover").getAttribute("src");
					items.push({ imgSrc, opacity: visibilityPercentage });
				}
			});

			this.transitionEnabled = false;
			this.visibleItems = items;

			setTimeout(() => {
				this.transitionEnabled = true;
			}, 10);
		},
		calculateVisibility(rect) {
			if (rect.bottom < 0 || rect.top > this.viewportHeight) return 0;
			const visibleHeight = Math.min(rect.bottom, this.viewportHeight) - Math.max(rect.top, 0);
			return visibleHeight / rect.height;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<style scoped>
.partner-container {
	display: flex;
	flex-direction: column;
}

.partner-prospect {
	position: fixed;
	bottom: var(--padding-vertical);
	left: 50%;
	transform: translateX(-50%);
	padding: 1rem 1.5rem;
}

.partner-prospect h5 {
	text-align: center;
	font-weight: bolder;
}

@media screen and (max-width: 600px) {
	.partner-prospect {
		width: 80%;
	}
}
</style>