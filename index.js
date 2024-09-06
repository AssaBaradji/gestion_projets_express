import express from "express";
import bodyParser from "body-parser";
import { Employe } from "./gestionEmploye.js";
import { Tache } from "./gestionTache.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3080;

app.use(bodyParser.json());

app.get("/app", (req, res) => {
  const employee1 = Employe.createEmployee({
    nom: "Thimbo",
    prenom: "Abdurahmane",
    email: "oumar@gmail.com",
    poste: "Dev Web",
    dateEmbauche: "10-12-2024",
    statut: "CDD",
  });

  const employee2 = Employe.createEmployee({
    nom: "Ly",
    prenom: "Ousmane",
    email: "ousmane@gmail.com",
    poste: "DevOps",
    dateEmbauche: "10-11-2024",
    statut: "CDI",
  });

  const tache1 = Tache.createTask({
    nom: "Integration de la maquette",
    description: "Intégrer la maquette améliorée",
    dateDebut: "01-02-2023",
    dateFin: "01-02-2025",
    statut: "A faire",
    priorite: "Elevée",
  });

  const tache2 = Tache.createTask({
    nom: "Rédiger le rapport mensuel",
    description: "Informer le client de l'avancement du projet",
    dateDebut: "11-12-2023",
    dateFin: "11-12-2026",
    statut: "En cours",
    priorite: "Elevée",
  });

  const dateAssignation1 = "10-12-2024";
  const dateAssignation2 = "11-12-2024";

  Assignation.assign(employee1, tache1, dateAssignation1);
  Assignation.assign(employee1, tache2, dateAssignation2);
  Assignation.assign(employee2, tache1, dateAssignation1);

  const assignmentsForEmployee1 = Assignation.getTasksForEmployee(employee1);
  const employeesForTask1 = Assignation.getEmployeesForTask(tache1);

  res.status(200).json({
    employee1: employee1.getEmployee(),
    employee2: employee2.getEmployee(),
    task1: tache1.getTask(),
    task2: tache2.getTask(),
    assignmentsForEmployee1,
    employeesForTask1,
  });
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
