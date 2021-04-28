import { useState, useEffect } from "react";
import { read, insert, update, remove } from "../services/apiService";

const Student = ({ match, history }) => {
  const [id] = useState(match.params.id);
  const [student, setStudent] = useState({
    _id: "0",
    firstName: "",
    lastName: "",
    yearOfBirth: 0,
    formErrors: {
      firstName: "",
      lastName: "",
      yearOfBirth: 0,
    },
  });

  useEffect(() => {
    if (id !== "0") {
      read("students", id, (data) => {
        if (data) setStudent(data);
      });
    }
  }, [id]);

  const back = () => {
    history.push("/students");
  };

  const save = () => {
    if (id === "0") {
      insert("students", student, (data) => {
        if (data) return history.push("/students");
        console.log("There was an error during saving the data");
      });
    } else {
      update("students", id, student, (data) => {
        if (data) return history.push("/students");
        console.log("There was error during saving data");
      });
    }
  };

  const del = () => {
    remove("students", id, (data) => {
      history.push("/students");
    });
  };

  function changeHandler(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <h2>Student</h2>
      <div className="child">
        <form className="input-form">
          <div style={{ margin: "12px 0" }}>
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              name="firstName"
              value={student.firstName}
              onChange={changeHandler}
              placeholder="Your first name"
            />
          </div>
          <div style={{ margin: "12px 0" }}>
            <label htmlFor="lastName">Last name: </label>
            <input
              type="text"
              name="lastName"
              value={student.lastName}
              onChange={changeHandler}
              placeholder="Your last name"
            />
          </div>
          <div style={{ margin: "12px 0" }}>
            <label htmlFor="yearOfBirth">Year of Birth: </label>
            <input
              type="text"
              name="yearOfBirth"
              value={student.yearOfBirth}
              onChange={changeHandler}
              placeholder="e.g. 1991"
            />
          </div>
          <hr />
          {id !== "0" && (
            <div className="left">
              <button type="button" onClick={del}>
                DELETE
              </button>
            </div>
          )}
          <div className="right">
            <button type="button" onClick={back}>
              BACK
            </button>
          </div>
          &nbsp;&nbsp;
          {student.firstName !== "" &&
            student.lastName !== "" &&
            student.yearOfBirth.length === 4 &&
            !isNaN(student.yearOfBirth) && (
              <div className="right">
                <button type="submit" onClick={save}>
                  SAVE
                </button>
              </div>
            )}
        </form>
      </div>
    </div>
  );
};

export default Student;
