<template>
	<main>
		<ProjectItem :projectId="this.$route.params.id" />
	</main>
</template>

<script>

import ProjectItem from "@/components/ProjectItem.vue";

export default {
	components: {
		ProjectItem,
	},
};
</script>