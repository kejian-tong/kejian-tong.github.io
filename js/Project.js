// Content of Project.js
class Project {
  constructor(title, description, link) {
    this.title = title;
    this.description = description;
    this.link = link;
  }

  render() {
    return `
            <article class="card">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <a href="${this.link}">View Project</a>
            </article>
        `;
  }
}
