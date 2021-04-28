function Validation(student) {
  let errors = {};

  if (!student.firstName.trim()) {
    errors.firstName = "First name required";
  }

  if (!student.lastName.trim()) {
    errors.firstName = "Last name required";
  }

  if (!student.yearOfBirth.trim()) {
    errors.firstName = "Last name required";
  }
  return errors;
}

export default Validation;
