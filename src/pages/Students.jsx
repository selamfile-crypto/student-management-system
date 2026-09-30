import { useState } from "react";

function Students({ students, setStudents }) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const deleteStudent = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.phone.toLowerCase().includes(searchText) ||
      student.department.toLowerCase().includes(searchText) ||
      student.id.toString().toLowerCase().includes(searchText);

    const matchesDepartment =
      department === "All" ||
      student.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="page students-page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            STUDENT MANAGEMENT
          </p>

          <h1>
            Students
          </h1>

          <p className="page-description">
            Manage student information, departments, and records.
          </p>
        </div>

        <button className="add-button">
          <span>+</span>
          Add Student
        </button>

      </div>


      <div className="student-management-box">

        <div className="student-box-header">

          <div>
            <p className="panel-label">
              STUDENT DIRECTORY
            </p>

            <h2>
              All Students
            </h2>

            <p>
              {filteredStudents.length} of {students.length} students
            </p>
          </div>

        </div>


        <div className="student-controls">

          <div className="student-page-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          <select
            className="student-page-filter"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >

            <option value="All">
              All Departments
            </option>

            <option value="Computer Science">
              Computer Science
            </option>

            <option value="Software Engineering">
              Software Engineering
            </option>

            <option value="Information Technology">
              Information Technology
            </option>

            <option value="Electrical Engineering">
              Electrical Engineering
            </option>

          </select>

        </div>


        <div className="student-list-container">

          {filteredStudents.length > 0 ? (

            filteredStudents.map((student) => (

              <div
                className="student-row"
                key={student.id}
              >

                <div
                  className={`student-avatar ${student.avatarClass}`}
                >
                  {student.initials}
                </div>


                <div className="student-main-info">

                  <strong>
                    {student.name}
                  </strong>

                  <span>
                    ID: {student.id}
                  </span>

                </div>


                <div className="student-contact">

                  <span>
                    {student.email}
                  </span>

                  <span>
                    {student.phone}
                  </span>

                </div>


                <div className="student-department">

                  <span className="department-badge">
                    {student.department}
                  </span>

                </div>


                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))

          ) : (

            <div className="empty-students">

              <p>
                No students found.
              </p>

              <span>
                Try another name, ID, email, phone number, or department.
              </span>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Students;