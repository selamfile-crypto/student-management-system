import { useState } from "react";

function Courses() {
  const [showForm, setShowForm] = useState(false);

  const [courses, setCourses] = useState([
    {
      id: "CRS001",
      name: "Data Structures and Algorithms",
      code: "CS201",
      department: "Computer Science",
      instructor: "Dr. Abebe",
      credits: 3,
    },
    {
      id: "CRS002",
      name: "Database Management Systems",
      code: "CS301",
      department: "Computer Science",
      instructor: "Dr. Hana",
      credits: 3,
    },
    {
      id: "CRS003",
      name: "Software Engineering",
      code: "SE201",
      department: "Software Engineering",
      instructor: "Mr. Dawit",
      credits: 4,
    },
  ]);

  const [course, setCourse] = useState({
    id: "",
    name: "",
    code: "",
    department: "",
    instructor: "",
    credits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();

    const newCourse = {
      ...course,
      id: course.id || `CRS${String(courses.length + 1).padStart(3, "0")}`,
    };

    setCourses((currentCourses) => [
      newCourse,
      ...currentCourses,
    ]);

    setCourse({
      id: "",
      name: "",
      code: "",
      department: "",
      instructor: "",
      credits: "",
    });

    setShowForm(false);
  };

  const deleteCourse = (id) => {
    setCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== id)
    );
  };

  return (
    <section className="page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            ACADEMIC MANAGEMENT
          </p>

          <h1>
            Courses
          </h1>

          <p className="page-description">
            Manage courses and academic programs.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          <span>+</span>
          {showForm ? "Close Form" : "Add Course"}
        </button>

      </div>


      {showForm && (
        <div className="form-container">

          <form onSubmit={handleAddCourse}>

            <h2>
              Create New Course
            </h2>

            <label>
              Course ID
            </label>

            <input
              type="text"
              name="id"
              placeholder="Example: CRS004"
              value={course.id}
              onChange={handleChange}
            />


            <label>
              Course Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter course name"
              value={course.name}
              onChange={handleChange}
              required
            />


            <label>
              Course Code
            </label>

            <input
              type="text"
              name="code"
              placeholder="Example: CS401"
              value={course.code}
              onChange={handleChange}
              required
            />


            <label>
              Department
            </label>

            <select
              name="department"
              value={course.department}
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
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              placeholder="Enter instructor name"
              value={course.instructor}
              onChange={handleChange}
              required
            />


            <label>
              Credit Hours
            </label>

            <input
              type="number"
              name="credits"
              placeholder="Example: 3"
              min="1"
              max="6"
              value={course.credits}
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
                Create Course
              </button>

            </div>

          </form>

        </div>
      )}


      <div className="student-management-box">

        <div className="student-box-header">

          <div>
            <p className="panel-label">
              COURSE DIRECTORY
            </p>

            <h2>
              All Courses
            </h2>

            <p>
              {courses.length} courses available
            </p>
          </div>

        </div>


        <div className="student-list-container">

          {courses.length > 0 ? (

            courses.map((course) => (

              <div
                className="student-row"
                key={course.id}
              >

                <div className="student-avatar avatar-one">
                  ▣
                </div>


                <div className="student-main-info">

                  <strong>
                    {course.name}
                  </strong>

                  <span>
                    ID: {course.id}
                  </span>

                </div>


                <div className="student-contact">

                  <span>
                    Code: {course.code}
                  </span>

                  <span>
                    Instructor: {course.instructor}
                  </span>

                </div>


                <div className="student-department">

                  <span className="department-badge">
                    {course.department}
                  </span>

                </div>


                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteCourse(course.id)}
                >
                  Delete
                </button>

              </div>

            ))

          ) : (

            <div className="empty-students">

              <p>
                No courses available.
              </p>

              <span>
                Click Add Course to create a new course.
              </span>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Courses;
