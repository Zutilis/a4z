import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

export function setHead(title, description, image = '/images/favicon.ico') {
	const route = useRoute()
	const fullUrl = 'https://a4z.fr' + route.path

	useHead({
		title,
		meta: [
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:image', content: 'https://a4z.fr' + image },
			{ property: 'og:url', content: fullUrl },
			{ property: 'og:type', content: 'website' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:image', content: 'https://a4z.fr' + image }
		],
		link: [
			{ rel: 'canonical', href: fullUrl }
		]
	})
}