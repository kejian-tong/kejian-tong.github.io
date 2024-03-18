// Content of ProjectController.js

console.log("ProjectController loaded");

class ProjectController {
  constructor() {
    this.projects = [];
  }

  addProject(title, description, link) {
    const project = new Project(title, description, link);
    this.projects.push(project);
  }

  displayProjects() {
    const container = document.getElementById("project-container");
    this.projects.forEach((project) => {
      container.innerHTML += project.render();
    });
  }
}
