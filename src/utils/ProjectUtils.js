import data from "@/assets/json/projects.json";

class ProjectUtils {
	static getProject(projectId) {
		return data.projects.find((p) => p.id === projectId) || null;
	}

	static getProjectCoverIndex(project) {
		return project.image_positions.findIndex(
			(item) => item !== null && item === project.image_cover
		);
	}

	static getObjectPosition(project, index) {
		const position = project.image_positions[index];
		return position && position.object_pos
			? position.object_pos : "center";
	}

	static getImageSrc(project, index) {
		const imageIndex = project.image_positions[index].image_index;
		return imageIndex !== null
			? `${project.image_src}${imageIndex}.webp`
			: "";
	}

	static getLowImageSrc(project, index) {
		const imageIndex = project.image_positions[index].image_index;
		return imageIndex !== null
			? `${project.image_low_src}${imageIndex}.webp`
			: "";
	}
}

export default ProjectUtils;