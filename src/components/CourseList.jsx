function CourseList({ courses = [] }) {
  return (
    <div className="panel dashboard-course-panel">

      <div className="panel-header">

        <div>
          <p className="panel-label">
            ACADEMIC MANAGEMENT
          </p>

          <h3>
            Course List
          </h3>

          <p className="course-panel-description">
            Recently available courses
          </p>
        </div>

        <div className="course-total">
          {courses.length}
        </div>

      </div>


      <div className="dashboard-course-list">

        {courses.length > 0 ? (

          courses.slice(0, 5).map((course) => (

            <div
              className="dashboard-course-item"
              key={course.id}
            >

              <div className="dashboard-course-icon">
                ▣
              </div>


              <div className="dashboard-course-info">

                <strong>
                  {course.name}
                </strong>

                <span>
                  {course.code}
                </span>

              </div>


              <div className="dashboard-course-meta">

                <span className="dashboard-course-department">
                  {course.department}
                </span>

                <span className="dashboard-course-instructor">
                  {course.instructor}
                </span>

              </div>


              <div className="dashboard-course-credits">

                <strong>
                  {course.credits}
                </strong>

                <span>
                  Credits
                </span>

              </div>

            </div>

          ))

        ) : (

          <div className="dashboard-course-empty">

            <div className="dashboard-course-empty-icon">
              ▣
            </div>

            <strong>
              No Courses Yet
            </strong>

            <span>
              Add courses from the Courses page.
            </span>

          </div>

        )}

      </div>


      {courses.length > 5 && (
        <div className="course-panel-footer">
          Showing 5 of {courses.length} courses
        </div>
      )}

    </div>
  );
}

export default CourseList;
