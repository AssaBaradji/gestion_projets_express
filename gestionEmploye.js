export class Employe {
  #nom;
  #prenom;
  #email;
  #poste;
  #dateEmbauche;
  #statut;

  constructor(employe) {
    this.#nom = employe.nom;
    this.#prenom = employe.prenom;
    this.#email = employe.email;
    this.#poste = employe.poste;
    this.#dateEmbauche = employe.dateEmbauche;
    this.#statut = employe.statut;
  }

  static createEmployee(employe) {
    const newEmployee = new Employe(employe);
    console.log("Employee created:", newEmployee.getEmployee());
    return newEmployee;
  }

  getEmployee() {
    return {
      nom: this.#nom,
      prenom: this.#prenom,
      email: this.#email,
      poste: this.#poste,
      dateEmbauche: this.#dateEmbauche,
      statut: this.#statut,
    };
  }

  static editEmployee(employee, newEmployee) {
    employee.#nom = newEmployee.nom;
    employee.#prenom = newEmployee.prenom;
    employee.#email = newEmployee.email;
    employee.#poste = newEmployee.poste;
    employee.#dateEmbauche = newEmployee.dateEmbauche;
    employee.#statut = newEmployee.statut;
    console.log("Employee edited:", employee.getEmployee());
  }

  static deleteEmployee(employee) {
    console.log(`Employee deleted: ${employee.#nom}`);
  }
}
