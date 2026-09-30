import { useState } from "react";

function RecentStudents({ students, setStudents }) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const deleteStudent = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      student.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="panel recent-panel">
      <div className="panel-header">
        <div>
          <p className="panel-label">STUDENTS</p>
          <h3>Recent Students</h3>
        </div>
      </div>

      <div className="student-filters">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
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

      <div className="student-list">
        {filteredStudents.map((student) => (
          <div className="student" key={student.id}>
            <div className={`student-avatar ${student.avatarClass}`}>
              {student.initials}
            </div>

            <div className="student-details">
              <strong>{student.name}</strong>
              <span>{student.department}</span>
            </div>

            <button
              type="button"
              className="delete-button"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        ))}

        {filteredStudents.length === 0 && (
          <p className="no-students">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default RecentStudents;