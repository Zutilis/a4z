<template>
	<header>
		<div class="header-nav">
			<router-link to="/" class="left" @click.native.stop="closeMenu">
				<ImageItem src="/images/high/main/logo.webp" lowResSrc="/images/low/main/logo.webp" alt=""
					class="header-logo" />
			</router-link>
			<div class="right">
				<h4 class="header-burger" @click="toggleHeaderContent">Menu</h4>
			</div>
		</div>
		<nav class="header-content" :class="{ 'active': isHeaderContentVisible }">
			<div class="header-bg"></div>
			<div class="header-links">
				<div class="left">
					<router-link to="/project/a4ztrap" class="header-link" @click.native.stop="closeMenu">
						<h3>A4Z Trap</h3>
					</router-link>
					<router-link to="/partners/" class="header-link" @click.native.stop="closeMenu">
						<h3>Partenaires</h3>
					</router-link>
					<a href="mailto:contact@a4z.fr" target="_blank" class="header-link">
						<h3>Contact</h3>
					</a>
				</div>
				<div class="right">
					<router-link to="/project/gazo/" class="header-link" @click.native.stop="closeMenu">
						<h4>Gazo</h4>
					</router-link>
					<router-link to="/project/fave/" class="header-link" @click.native.stop="closeMenu">
						<h4>Favé</h4>
					</router-link>
					<router-link to="/project/bekar/" class="header-link" @click.native.stop="closeMenu">
						<h4>Bekar</h4>
					</router-link>
					<router-link to="/project/lybro/" class="header-link" @click.native.stop="closeMenu">
						<h4>Lybro</h4>
					</router-link>
				</div>
			</div>
			<div class="header-socials">
				<a href="https://www.instagram.com/a4z.fr/" target="_blank" @click.native.stop="closeMenu" class="header-social">
					<img src="/svg/instagram.svg" alt="">
				</a>
				<a href="https://www.tiktok.com/@a4z.fr" target="_blank" @click.native.stop="closeMenu" class="header-social">
					<img src="/svg/tiktok.svg" alt="">
				</a>
			</div>
			<div class="header-footer">
				<p>Copyright © 2024 Almost4zutified. Tous droits réservés.</p>
				<p><router-link to="/legal/" @click.native.stop="closeMenu">Mentions Légales</router-link></p>
			</div>
		</nav>
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
}

.header-footer {
	position: absolute;
	text-align: center;
	text-wrap: wrap;
	bottom: var(--padding-vertical);
	left: 50%;
	transform: translateX(-50%);
	gap: 5px;
}

.header-footer p {
	opacity: 0.7;
}

.header-content {
	display: none;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	opacity: 0;
	padding: var(--padding-vertical) calc(var(--padding-horizontal) * 4);
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

.header-link {
	pointer-events: auto;
	cursor: pointer;
}

.header-socials {
	display: flex;
	flex-direction: row;
	gap: 20px;
}

.header-social {
	display: flex;
	width: 40px;
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
	margin: 0;
	padding: 0;
	transform: translateY(15px);
	cursor: pointer;
}

@media screen and (max-width: 768px) and (max-height: 550px) {
	.header-links .right {
		display: none;
	}
}

@media screen and (max-height: 550px) {
	.header-logo {
		height: 100px;
		width: 80px;
	}

	.header-socials {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	.header-logo {
		height: 100px;
		width: 80px;
	}

	.header-content {
		justify-content: flex-end;
		padding: var(--padding-vertical) var(--padding-horizontal);
		gap: 4vh;
	}

	.header-links .left,
	.header-links .right {
		gap: 2.5vh;
	}

	.header-links {
		flex-direction: column;
		justify-content: center;
		height: 60%;
		gap: 2.5vh;
		width: auto;
	}

	.header-links .right {
		text-align: left;
	}

	.header-socials {
		align-self: flex-end;
	}

	.header-footer {
		position: relative;
		bottom: 0;
	}
}
</style>