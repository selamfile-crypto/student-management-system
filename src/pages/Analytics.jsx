import { useMemo } from "react";

function Analytics({
  students = [],
  teachers = [],
  courses = [],
  schedules = [],
  studentAttendance = [],
  teacherAttendance = [],
}) {
  /* =========================================
     STUDENT ANALYTICS
  ========================================= */

  const studentDepartments = useMemo(() => {
    const departments = {};

    students.forEach((student) => {
      departments[student.department] =
        (departments[student.department] || 0) + 1;
    });

    return Object.entries(departments);
  }, [students]);


  /* =========================================
     TEACHER ANALYTICS
  ========================================= */

  const teacherDepartments = useMemo(() => {
    const departments = {};

    teachers.forEach((teacher) => {
      departments[teacher.department] =
        (departments[teacher.department] || 0) + 1;
    });

    return Object.entries(departments);
  }, [teachers]);


  /* =========================================
     COURSE ANALYTICS
  ========================================= */

  const courseDepartments = useMemo(() => {
    const departments = {};

    courses.forEach((course) => {
      departments[course.department] =
        (departments[course.department] || 0) + 1;
    });

    return Object.entries(departments);
  }, [courses]);


  const totalCredits = courses.reduce(
    (total, course) =>
      total + Number(course.credits || 0),
    0
  );


  /* =========================================
     ATTENDANCE ANALYTICS
  ========================================= */

  const getAttendanceStats = (records) => {
    const total = records.length;

    const present = records.filter(
      (person) => person.status === "Present"
    ).length;

    const absent = records.filter(
      (person) => person.status === "Absent"
    ).length;

    const late = records.filter(
      (person) => person.status === "Late"
    ).length;

    const excused = records.filter(
      (person) => person.status === "Excused"
    ).length;

    const attendanceRate =
      total > 0
        ? Math.round((present / total) * 100)
        : 0;

    return {
      total,
      present,
      absent,
      late,
      excused,
      attendanceRate,
    };
  };


  const studentStats =
    getAttendanceStats(studentAttendance);

  const teacherStats =
    getAttendanceStats(teacherAttendance);


  const combinedAttendance = [
    ...studentAttendance,
    ...teacherAttendance,
  ];

  const overallStats =
    getAttendanceStats(combinedAttendance);


  /* =========================================
     SCHEDULE ANALYTICS
  ========================================= */

  const scheduleDays = useMemo(() => {
    const days = {};

    schedules.forEach((schedule) => {
      days[schedule.day] =
        (days[schedule.day] || 0) + 1;
    });

    return Object.entries(days);
  }, [schedules]);


  const totalPeople =
    students.length + teachers.length;


  return (
    <section className="page analytics-page">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="page-header">

        <div>

          <p className="eyebrow">
            SYSTEM ANALYTICS
          </p>

          <h1>
            Analytics
          </h1>

          <p className="page-description">
            Track the actual academic data of your
            student management system.
          </p>

        </div>

      </div>


      {/* =====================================
          OVERVIEW
      ===================================== */}

      <div className="analytics-overview">

        <div className="analytics-card">

          <div className="analytics-card-icon">
            ♙
          </div>

          <div>
            <span>
              TOTAL STUDENTS
            </span>

            <strong>
              {students.length}
            </strong>

            <small>
              Currently registered
            </small>
          </div>

        </div>


        <div className="analytics-card">

          <div className="analytics-card-icon">
            ♙
          </div>

          <div>
            <span>
              TOTAL TEACHERS
            </span>

            <strong>
              {teachers.length}
            </strong>

            <small>
              Teaching staff
            </small>
          </div>

        </div>


        <div className="analytics-card">

          <div className="analytics-card-icon">
            ▣
          </div>

          <div>
            <span>
              TOTAL COURSES
            </span>

            <strong>
              {courses.length}
            </strong>

            <small>
              Active courses
            </small>
          </div>

        </div>


        <div className="analytics-card">

          <div className="analytics-card-icon">
            ◷
          </div>

          <div>
            <span>
              TOTAL SCHEDULES
            </span>

            <strong>
              {schedules.length}
            </strong>

            <small>
              Scheduled classes
            </small>
          </div>

        </div>

      </div>


      {/* =====================================
          ATTENDANCE
      ===================================== */}

      <div className="analytics-section">

        <div className="analytics-section-header">

          <div>

            <p className="panel-label">
              ATTENDANCE ANALYTICS
            </p>

            <h2>
              Attendance Overview
            </h2>

          </div>

          <div className="analytics-live">
            LIVE DATA
          </div>

        </div>


        <div className="attendance-analytics-grid">

          {/* OVERALL */}

          <div className="attendance-main-card">

            <div className="attendance-circle">

              <strong>
                {overallStats.attendanceRate}%
              </strong>

              <span>
                Overall
              </span>

            </div>

            <div>

              <h3>
                Overall Attendance
              </h3>

              <p>
                Based on {overallStats.total} attendance
                records.
              </p>

            </div>

          </div>


          {/* STUDENTS */}

          <div className="attendance-detail-card">

            <div className="attendance-detail-title">

              <span>
                ♙ Student Attendance
              </span>

              <strong>
                {studentStats.attendanceRate}%
              </strong>

            </div>


            <div className="analytics-progress">

              <div
                style={{
                  width: `${studentStats.attendanceRate}%`,
                }}
              />

            </div>


            <div className="attendance-numbers">

              <span>
                Present <strong>{studentStats.present}</strong>
              </span>

              <span>
                Absent <strong>{studentStats.absent}</strong>
              </span>

              <span>
                Late <strong>{studentStats.late}</strong>
              </span>

              <span>
                Excused <strong>{studentStats.excused}</strong>
              </span>

            </div>

          </div>


          {/* TEACHERS */}

          <div className="attendance-detail-card">

            <div className="attendance-detail-title">

              <span>
                ♙ Teacher Attendance
              </span>

              <strong>
                {teacherStats.attendanceRate}%
              </strong>

            </div>


            <div className="analytics-progress">

              <div
                style={{
                  width: `${teacherStats.attendanceRate}%`,
                }}
              />

            </div>


            <div className="attendance-numbers">

              <span>
                Present <strong>{teacherStats.present}</strong>
              </span>

              <span>
                Absent <strong>{teacherStats.absent}</strong>
              </span>

              <span>
                Late <strong>{teacherStats.late}</strong>
              </span>

              <span>
                Excused <strong>{teacherStats.excused}</strong>
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          DEPARTMENT ANALYTICS
      ===================================== */}

      <div className="analytics-two-column">


        {/* STUDENTS */}

        <div className="analytics-section">

          <div className="analytics-section-header">

            <div>

              <p className="panel-label">
                STUDENTS
              </p>

              <h2>
                Students by Department
              </h2>

            </div>

          </div>


          <div className="department-analytics">

            {studentDepartments.length > 0 ? (

              studentDepartments.map(
                ([department, count]) => {

                  const percentage =
                    students.length > 0
                      ? Math.round(
                          (count / students.length) * 100
                        )
                      : 0;

                  return (
                    <div
                      className="department-item"
                      key={department}
                    >

                      <div className="department-item-top">

                        <span>
                          {department}
                        </span>

                        <strong>
                          {count}
                        </strong>

                      </div>


                      <div className="department-progress">

                        <div
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>


                      <small>
                        {percentage}% of students
                      </small>

                    </div>
                  );
                }
              )

            ) : (

              <div className="analytics-empty">
                No student data available.
              </div>

            )}

          </div>

        </div>


        {/* TEACHERS */}

        <div className="analytics-section">

          <div className="analytics-section-header">

            <div>

              <p className="panel-label">
                TEACHERS
              </p>

              <h2>
                Teachers by Department
              </h2>

            </div>

          </div>


          <div className="department-analytics">

            {teacherDepartments.length > 0 ? (

              teacherDepartments.map(
                ([department, count]) => {

                  const percentage =
                    teachers.length > 0
                      ? Math.round(
                          (count / teachers.length) * 100
                        )
                      : 0;

                  return (
                    <div
                      className="department-item"
                      key={department}
                    >

                      <div className="department-item-top">

                        <span>
                          {department}
                        </span>

                        <strong>
                          {count}
                        </strong>

                      </div>


                      <div className="department-progress">

                        <div
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>


                      <small>
                        {percentage}% of teachers
                      </small>

                    </div>
                  );
                }
              )

            ) : (

              <div className="analytics-empty">
                No teacher data available.
              </div>

            )}

          </div>

        </div>

      </div>


      {/* =====================================
          COURSES + SCHEDULE
      ===================================== */}

      <div className="analytics-two-column">


        {/* COURSES */}

        <div className="analytics-section">

          <div className="analytics-section-header">

            <div>

              <p className="panel-label">
                ACADEMICS
              </p>

              <h2>
                Course Overview
              </h2>

            </div>

          </div>


          <div className="academic-numbers">

            <div>
              <span>
                Total Courses
              </span>

              <strong>
                {courses.length}
              </strong>
            </div>


            <div>
              <span>
                Total Credit Hours
              </span>

              <strong>
                {totalCredits}
              </strong>
            </div>


            <div>
              <span>
                Students
              </span>

              <strong>
                {students.length}
              </strong>
            </div>


            <div>
              <span>
                Teachers
              </span>

              <strong>
                {teachers.length}
              </strong>
            </div>

          </div>


          <div className="course-department-list">

            {courseDepartments.map(
              ([department, count]) => (

                <div
                  className="course-department-item"
                  key={department}
                >

                  <span>
                    {department}
                  </span>

                  <strong>
                    {count} course
                    {count !== 1 ? "s" : ""}
                  </strong>

                </div>

              )
            )}

          </div>

        </div>


        {/* SCHEDULE */}

        <div className="analytics-section">

          <div className="analytics-section-header">

            <div>

              <p className="panel-label">
                SCHEDULE
              </p>

              <h2>
                Classes by Day
              </h2>

            </div>

          </div>


          <div className="schedule-analytics">

            {scheduleDays.length > 0 ? (

              scheduleDays.map(
                ([day, count]) => (

                  <div
                    className="schedule-day"
                    key={day}
                  >

                    <span>
                      {day}
                    </span>

                    <div className="schedule-bar">

                      <div
                        style={{
                          width: `${Math.min(
                            count * 20,
                            100
                          )}%`,
                        }}
                      />

                    </div>

                    <strong>
                      {count}
                    </strong>

                  </div>

                )
              )

            ) : (

              <div className="analytics-empty">
                No schedule data available.
              </div>

            )}

          </div>

        </div>

      </div>


      {/* =====================================
          SYSTEM TOTAL
      ===================================== */}

      <div className="analytics-footer-card">

        <div>

          <p className="panel-label">
            SYSTEM OVERVIEW
          </p>

          <h2>
            {totalPeople} People
          </h2>

          <p>
            {students.length} students and{" "}
            {teachers.length} teachers are
            currently registered in the system.
          </p>

        </div>


        <div className="analytics-footer-number">

          <span>
            Data Status
          </span>

          <strong>
            LIVE
          </strong>

        </div>

      </div>

    </section>
  );
}

export default Analytics;