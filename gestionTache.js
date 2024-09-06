export class Tache {
  #nom;
  #description;
  #dateDebut;
  #dateFin;
  #priorite;
  #statut;

  constructor(tache) {
    this.#nom = tache.nom;
    this.#description = tache.description;
    this.#dateDebut = tache.dateDebut;
    this.#dateFin = tache.dateFin;
    this.#priorite = tache.priorite;
    this.#statut = tache.statut;
  }

  static createTask(tache) {
    const newTask = new Tache(tache);
    console.log("Task created:", newTask.getTask());
    return newTask;
  }

  getTask() {
    return {
      nom: this.#nom,
      description: this.#description,
      dateDebut: this.#dateDebut,
      dateFin: this.#dateFin,
      priorite: this.#priorite,
      statut: this.#statut,
    };
  }

  static editTask(task, newTask) {
    task.#nom = newTask.nom;
    task.#description = newTask.description;
    task.#dateDebut = newTask.dateDebut;
    task.#dateFin = newTask.dateFin;
    task.#priorite = newTask.priorite;
    task.#statut = newTask.statut;
    console.log("Task edited:", task.getTask());
  }

  static deleteTask(task) {
    console.log(`Task deleted: ${task.#nom}`);
  }
}
