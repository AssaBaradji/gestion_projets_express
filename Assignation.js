export class Assignation {
  static assignments = [];

  static assign(employee, task, assignmentDate) {
    Assignation.assignments.push({ employee, task, assignmentDate });
    console.log(
      `Task "${task.getTask().nom}" assigned to ${employee.getEmployee().nom} ${
        employee.getEmployee().prenom
      } on ${assignmentDate}.`
    );
  }

  static removeAssignment(employee, task) {
    Assignation.assignments = Assignation.assignments.filter(
      (assign) =>
        assign.employee.getEmployee().nom !== employee.getEmployee().nom ||
        assign.task.getTask().nom !== task.getTask().nom
    );
    console.log(`Task removed for employee.`);
  }

  static getTasksForEmployee(employee) {
    return Assignation.assignments
      .filter(
        (assign) =>
          assign.employee.getEmployee().nom === employee.getEmployee().nom
      )
      .map((assign) => ({
        ...assign.task.getTask(),
        dateAssignation: assign.assignmentDate,
      }));
  }

  static getEmployeesForTask(task) {
    return Assignation.assignments
      .filter((assign) => assign.task.getTask().nom === task.getTask().nom)
      .map((assign) => ({
        ...assign.employee.getEmployee(),
        dateAssignation: assign.assignmentDate,
      }));
  }
}
