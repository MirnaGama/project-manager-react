import baseConnection from "../config/baseConnection";

const ProjectService = {

    createProject: async (project) => {
        project.cost = 0;
        project.services = [];

        return await baseConnection
            .post("/projects", project);
    },

    getProject: async (id) => {
        return await baseConnection
            .get("projects/" + id);
    },

    getProjects: async () => {
        return await baseConnection
            .get("/projects");
    },

    updateProject: async (id, project) => {
        return await baseConnection
            .put("projects/" + id, project);
    },

    deleteProject: async (id) => {
        return await baseConnection
            .delete(`/projects/${id}`);
    },

    getCategories: async () => {
        return await baseConnection
        .get("/categories");
    }
}

export default ProjectService;
