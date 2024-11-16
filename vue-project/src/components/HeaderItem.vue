<template>
	<header>
		<div class="header-nav">
			<router-link to="/" class="left" @click.native.stop="closeMenu">
				<ImageItem src="/images/high/main/logo.webp" lowResSrc="/images/low/main/logo.webp" alt=""
					class="header-logo" />
			</router-link>
			<div class="right">
				<p class="header-burger" @click="toggleHeaderContent">Menu</p>
			</div>
		</div>
		<div class="header-content" :class="{ 'active': isHeaderContentVisible }">
			<div class="header-bg"></div>
			<div class="header-links">
				<div class="left">
					<router-link to="/project/a4ztrap" class="header-link" @click.native.stop="closeMenu">
						<h3>A4Z Trap</h3>
					</router-link>
					<router-link to="/partners/" class="header-link" @click.native.stop="closeMenu">
						<h3>Partenaires</h3>
					</router-link>
					<router-link to="/" class="header-link" @click.native.stop="closeMenu">
						<h3>Contact</h3>
					</router-link>
				</div>
				<div class="right">
					<router-link to="/project/gazo" class="header-link" @click.native.stop="closeMenu">
						<h4>Gazo</h4>
					</router-link>
					<router-link to="/project/fave" class="header-link" @click.native.stop="closeMenu">
						<h4>Favé</h4>
					</router-link>
					<router-link to="/project/bekar" class="header-link" @click.native.stop="closeMenu">
						<h4>Bekar</h4>
					</router-link>
					<router-link to="/project/lybro" class="header-link" @click.native.stop="closeMenu">
						<h4>Lybro</h4>
					</router-link>
				</div>
			</div>
			<div class="header-socials">
				<a href="https://a4z.fr" @click.native.stop="closeMenu" class="header-social">
					<img src="/svg/instagram.svg" alt="">
				</a>
				<a href="https://a4z.fr" @click.native.stop="closeMenu" class="header-social">
					<img src="/svg/tiktok.svg" alt="">
				</a>
			</div>
			<div class="header-footer">
				<p>© almost4zutified tous droits réservés</p>
			</div>
		</div>
	</header>
</template>

<script>
import ImageItem from '@/components/ImageItem.vue';

export default {
	data() {
		return {
			isHeaderContentVisible: false,
		};
	},
	components: {
		ImageItem,
	},
	methods: {
		toggleHeaderContent() {
			this.isHeaderContentVisible = !this.isHeaderContentVisible;
		},
		closeMenu() {
			this.isHeaderContentVisible = false;
		},
	},
};
</script>

<style scoped>
header,
.header-links,
.header-socials,
.header-footer,
.header-nav {
	z-index: 20;
}

header,
.header-content,
.header-bg {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	width: 100vw;
}

.header-bg {
	opacity: 0;
	height: 100vh;
	backdrop-filter: blur(150px);
	background-color: rgb(0, 0, 0, 0.2);
	transition: all .2s ease-in-out;
}

.header-footer {
	position: absolute;
	text-align: center;
	bottom: 5%;
	left: 0;
	right: 0;
}

.header-content {
	display: none;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	opacity: 0;
	padding: 0 calc(var(--padding-horizontal) * 4);
	gap: 30px;
}

.header-content.active .header-bg {
	opacity: 1;
}

.header-content.active {
	display: flex;
	opacity: 1;
}

.header-links {
	display: flex;
	justify-content: space-between;
	width: 100%;
	transition: opacity .2s ease-in-out;
}

.header-links .left,
.header-links .right {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.header-links .right {
	text-align: right;
}

.header-socials {
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.header-social {
	width: 50px;
	aspect-ratio: 1 / 1;
}

.header-social img {
	width: 100%;
	height: 100%;
}

.header-nav {
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: space-between;
	user-select: none;
	padding: var(--padding-vertical) var(--padding-horizontal);
}

.header-nav .left {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
}

.header-nav .right {
	position: right;
}

.header-title {
	font-family: ThunderBold;
	font-size: 120px;
	line-height: 110px;
	margin: 0;
	padding: 0;
	transform: translateY(15px);
}

.header-logo {
	height: 120px;
	width: 100px;
}

.header-burger {
	font-family: PoppinsLight;
	font-size: 40px;
	line-height: 40px;
	margin: 0;
	padding: 0;
	transform: translateY(15px);
	cursor: pointer;
}
</style>