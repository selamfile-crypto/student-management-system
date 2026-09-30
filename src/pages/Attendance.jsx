import { useState } from "react";

function Attendance() {
  const [activeTab, setActiveTab] = useState("students");
  const [date, setDate] = useState("2026-09-30");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [studentAttendance, setStudentAttendance] = useState([
    {
      id: 1,
      name: "Hana Abebe",
      department: "Computer Science",
      status: "Present",
    },
    {
      id: 2,
      name: "Abebe Mekonnen",
      department: "Software Engineering",
      status: "Present",
    },
    {
      id: 3,
      name: "Meron Yohannes",
      department: "Information Technology",
      status: "Late",
    },
    {
      id: 4,
      name: "Dawit Alemu",
      department: "Electrical Engineering",
      status: "Absent",
    },
  ]);

  const [teacherAttendance, setTeacherAttendance] = useState([
    {
      id: 1,
      name: "Dr. Abebe Mekonnen",
      department: "Computer Science",
      status: "Present",
    },
    {
      id: 2,
      name: "Dr. Hana Abebe",
      department: "Software Engineering",
      status: "Present",
    },
    {
      id: 3,
      name: "Mr. Dawit Alemu",
      department: "Information Technology",
      status: "Late",
    },
  ]);

  const updateStudentStatus = (id, status) => {
    setStudentAttendance((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  const updateTeacherStatus = (id, status) => {
    setTeacherAttendance((currentTeachers) =>
      currentTeachers.map((teacher) =>
        teacher.id === id
          ? { ...teacher, status }
          : teacher
      )
    );
  };

  const currentRecords =
    activeTab === "students"
      ? studentAttendance
      : teacherAttendance;

  const filteredRecords = currentRecords.filter((person) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      person.name.toLowerCase().includes(searchText) ||
      person.department.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      person.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const presentCount = currentRecords.filter(
    (person) => person.status === "Present"
  ).length;

  const absentCount = currentRecords.filter(
    (person) => person.status === "Absent"
  ).length;

  const lateCount = currentRecords.filter(
    (person) => person.status === "Late"
  ).length;

  const excusedCount = currentRecords.filter(
    (person) => person.status === "Excused"
  ).length;

  return (
    <section className="page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            ATTENDANCE MANAGEMENT
          </p>

          <h1>
            Attendance
          </h1>

          <p className="page-description">
            Record and monitor attendance for students and teachers.
          </p>
        </div>

      </div>


      <div className="attendance-management-box">

        <div className="attendance-top">

          <div className="attendance-tabs">

            <button
              className={
                activeTab === "students"
                  ? "attendance-tab active"
                  : "attendance-tab"
              }
              onClick={() => {
                setActiveTab("students");
                setSearch("");
                setStatusFilter("All");
              }}
            >
              ♙ Students
            </button>

            <button
              className={
                activeTab === "teachers"
                  ? "attendance-tab active"
                  : "attendance-tab"
              }
              onClick={() => {
                setActiveTab("teachers");
                setSearch("");
                setStatusFilter("All");
              }}
            >
              ♙ Teachers
            </button>

          </div>


          <div className="attendance-date">

            <label>
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

          </div>

        </div>


        <div className="attendance-summary">

          <div className="attendance-stat">
            <span>Present</span>
            <strong>{presentCount}</strong>
          </div>

          <div className="attendance-stat">
            <span>Absent</span>
            <strong>{absentCount}</strong>
          </div>

          <div className="attendance-stat">
            <span>Late</span>
            <strong>{lateCount}</strong>
          </div>

          <div className="attendance-stat">
            <span>Excused</span>
            <strong>{excusedCount}</strong>
          </div>

        </div>


        <div className="attendance-controls">

          <div className="attendance-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder={
                activeTab === "students"
                  ? "Search student..."
                  : "Search teacher..."
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >

            <option value="All">
              All Status
            </option>

            <option value="Present">
              Present
            </option>

            <option value="Absent">
              Absent
            </option>

            <option value="Late">
              Late
            </option>

            <option value="Excused">
              Excused
            </option>

          </select>

        </div>


        <div className="attendance-list">

          <div className="attendance-list-header">

            <span>
              {activeTab === "students"
                ? "STUDENT"
                : "TEACHER"}
            </span>

            <span>
              DEPARTMENT
            </span>

            <span>
              ATTENDANCE STATUS
            </span>

          </div>


          {filteredRecords.length > 0 ? (

            filteredRecords.map((person) => (

              <div
                className="attendance-row"
                key={person.id}
              >

                <div className="attendance-person">

                  <div className="student-avatar avatar-one">
                    {person.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>

                  <div>
                    <strong>
                      {person.name}
                    </strong>

                    <span>
                      {activeTab === "students"
                        ? "Student"
                        : "Teacher"}
                    </span>
                  </div>

                </div>


                <div className="attendance-department">
                  {person.department}
                </div>


                <div className="attendance-actions">

                  <button
                    className={
                      person.status === "Present"
                        ? "status-button present active"
                        : "status-button present"
                    }
                    onClick={() =>
                      activeTab === "students"
                        ? updateStudentStatus(
                            person.id,
                            "Present"
                          )
                        : updateTeacherStatus(
                            person.id,
                            "Present"
                          )
                    }
                  >
                    Present
                  </button>

                  <button
                    className={
                      person.status === "Absent"
                        ? "status-button absent active"
                        : "status-button absent"
                    }
                    onClick={() =>
                      activeTab === "students"
                        ? updateStudentStatus(
                            person.id,
                            "Absent"
                          )
                        : updateTeacherStatus(
                            person.id,
                            "Absent"
                          )
                    }
                  >
                    Absent
                  </button>

                  <button
                    className={
                      person.status === "Late"
                        ? "status-button late active"
                        : "status-button late"
                    }
                    onClick={() =>
                      activeTab === "students"
                        ? updateStudentStatus(
                            person.id,
                            "Late"
                          )
                        : updateTeacherStatus(
                            person.id,
                            "Late"
                          )
                    }
                  >
                    Late
                  </button>

                  <button
                    className={
                      person.status === "Excused"
                        ? "status-button excused active"
                        : "status-button excused"
                    }
                    onClick={() =>
                      activeTab === "students"
                        ? updateStudentStatus(
                            person.id,
                            "Excused"
                          )
                        : updateTeacherStatus(
                            person.id,
                            "Excused"
                          )
                    }
                  >
                    Excused
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="empty-students">

              <p>
                No attendance records found.
              </p>

              <span>
                Try another search or attendance status.
              </span>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Attendance;