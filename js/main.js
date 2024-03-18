// Content of main.js
document.addEventListener("DOMContentLoaded", () => {
  const projectController = new ProjectController();
  projectController.addProject(
    "A Distributed Systems Service",
    "Twinder is a revolutionary gender-free dating service...",
    "https://github.com/kejian-tong/DistributedSystemDatingApp"
  );
  projectController.addProject(
    "FoodDeliveryDiscordBot",
    "DashBot is a discord online food ordering bot...",
    "https://github.com/kejian-tong/FoodDeliveryDiscordBot"
  );

  projectController.displayProjects();
});
