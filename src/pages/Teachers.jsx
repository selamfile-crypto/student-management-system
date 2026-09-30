import { useState } from "react";

function Teachers() {
  const [showForm, setShowForm] = useState(false);

  const [teachers, setTeachers] = useState([
    {
      id: "TCH001",
      name: "Dr. Abebe Mekonnen",
      email: "abebe@university.edu",
      phone: "0912345678",
      department: "Computer Science",
      specialization: "Artificial Intelligence",
    },
    {
      id: "TCH002",
      name: "Dr. Hana Abebe",
      email: "hana@university.edu",
      phone: "0923456789",
      department: "Software Engineering",
      specialization: "Software Development",
    },
    {
      id: "TCH003",
      name: "Mr. Dawit Alemu",
      email: "dawit@university.edu",
      phone: "0934567890",
      department: "Information Technology",
      specialization: "Networking",
    },
  ]);

  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    specialization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();

    const newTeacher = {
      ...teacher,
      id:
        teacher.id ||
        `TCH${String(teachers.length + 1).padStart(3, "0")}`,
    };

    setTeachers((currentTeachers) => [
      newTeacher,
      ...currentTeachers,
    ]);

    setTeacher({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      specialization: "",
    });

    setShowForm(false);
  };

  const deleteTeacher = (id) => {
    setTeachers((currentTeachers) =>
      currentTeachers.filter(
        (teacher) => teacher.id !== id
      )
    );
  };

  return (
    <section className="page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            STAFF MANAGEMENT
          </p>

          <h1>
            Teachers
          </h1>

          <p className="page-description">
            Manage teachers, departments, and teaching staff.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          <span>+</span>
          {showForm ? "Close Form" : "Add Teacher"}
        </button>

      </div>


      {showForm && (
        <div className="form-container">

          <form onSubmit={handleAddTeacher}>

            <h2>
              Create New Teacher
            </h2>

            <label>
              Teacher ID
            </label>

            <input
              type="text"
              name="id"
              placeholder="Example: TCH004"
              value={teacher.id}
              onChange={handleChange}
            />


            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter teacher name"
              value={teacher.name}
              onChange={handleChange}
              required
            />


            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="teacher@university.edu"
              value={teacher.email}
              onChange={handleChange}
              required
            />


            <label>
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="09XXXXXXXX"
              value={teacher.phone}
              onChange={handleChange}
              required
            />


            <label>
              Department
            </label>

            <select
              name="department"
              value={teacher.department}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Department
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


            <label>
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              placeholder="Example: Artificial Intelligence"
              value={teacher.specialization}
              onChange={handleChange}
              required
            />


            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="create-button"
              >
                Create Teacher
              </button>

            </div>

          </form>

        </div>
      )}


      <div className="student-management-box">

        <div className="student-box-header">

          <div>
            <p className="panel-label">
              TEACHER DIRECTORY
            </p>

            <h2>
              All Teachers
            </h2>

            <p>
              {teachers.length} teachers available
            </p>
          </div>

        </div>


        <div className="student-list-container">

          {teachers.length > 0 ? (

            teachers.map((teacher) => (

              <div
                className="student-row"
                key={teacher.id}
              >

                <div className="student-avatar avatar-one">
                  ♙
                </div>


                <div className="student-main-info">

                  <strong>
                    {teacher.name}
                  </strong>

                  <span>
                    ID: {teacher.id}
                  </span>

                </div>


                <div className="student-contact">

                  <span>
                    {teacher.email}
                  </span>

                  <span>
                    {teacher.phone}
                  </span>

                </div>


                <div className="student-department">

                  <span className="department-badge">
                    {teacher.department}
                  </span>

                </div>


                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    deleteTeacher(teacher.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))

          ) : (

            <div className="empty-students">

              <p>
                No teachers available.
              </p>

              <span>
                Click Add Teacher to create a new teacher.
              </span>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Teachers;