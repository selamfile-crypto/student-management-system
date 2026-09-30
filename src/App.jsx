import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import StatCard from "./components/StatCard";
import AttendanceChart from "./components/AttendanceChart";
import RecentStudents from "./components/RecentStudents";
import Schedule from "./components/Schedule";
import StudentPerformance from "./components/StudentPerformance";
import CourseList from "./components/CourseList";
import StudentForm from "./components/StudentForm";

import Students from "./pages/Students";
import Courses from "./pages/courses";
import Teachers from "./pages/Teachers";
import SchedulePage from "./pages/Schedule";
import Attendance from "./pages/Attendance";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";


function Dashboard({
  students,
  setStudents,
  handleAddStudent,
  showForm,
  setShowForm,
  teachers,
  courses,
  studentAttendance,
  teacherAttendance,
}) {
  const calculateAttendance = (records) => {
    if (records.length === 0) {
      return 0;
    }

    const present = records.filter(
      (person) => person.status === "Present"
    ).length;

    return Math.round(
      (present / records.length) * 100
    );
  };

  const studentAttendanceRate =
    calculateAttendance(studentAttendance);

  const teacherAttendanceRate =
    calculateAttendance(teacherAttendance);

  const overallAttendance =
    studentAttendance.length + teacherAttendance.length > 0
      ? Math.round(
          (
            studentAttendance.filter(
              (person) => person.status === "Present"
            ).length +
            teacherAttendance.filter(
              (person) => person.status === "Present"
            ).length
          ) /
            (studentAttendance.length +
              teacherAttendance.length) *
            100
        )
      : 0;

  return (
    <section className="dashboard">

      <div className="welcome">

        <div>
          <p className="eyebrow">
            STUDENT MANAGEMENT SYSTEM
          </p>

          <h1>
            Welcome , <span></span>
          </h1>

          <p className="welcome-text">
            Monitor students, teachers, courses, schedules,
            and attendance from one place.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(true)}
        >
          <span>+</span>
          Add Student
        </button>

      </div>


      {showForm && (
        <div className="form-container">

          <StudentForm
            onAddStudent={handleAddStudent}
            onCancel={() => setShowForm(false)}
          />

        </div>
      )}


      <section className="stats">

        <StatCard
          icon="♙"
          iconClass="students"
          growth="Live"
          title="Total Students"
          value={students.length}
          progress="100%"
          description="Students currently registered"
        />

        <StatCard
          icon="▣"
          iconClass="courses"
          growth="Live"
          title="Total Courses"
          value={courses.length}
          progress="100%"
          description="Courses currently available"
        />

        <StatCard
          icon="♙"
          iconClass="teachers"
          growth="Live"
          title="Total Teachers"
          value={teachers.length}
          progress="100%"
          description="Teaching staff members"
        />

        <StatCard
          icon="◉"
          iconClass="attendance"
          growth="Live"
          title="Attendance"
          value={`${overallAttendance}%`}
          progress={`${overallAttendance}%`}
          description="Overall attendance rate"
        />

      </section>


      <section className="content-grid">

        <AttendanceChart />

        <RecentStudents
          students={students}
          setStudents={setStudents}
        />

      </section>


      <section className="bottom-grid">

        <Schedule />

        <CourseList
          courses={courses}
        />

      </section>


      <section className="bottom-grid">

        <StudentPerformance />

      </section>


      <div
        style={{
          display: "none",
        }}
      >
        {studentAttendanceRate}
        {teacherAttendanceRate}
      </div>

    </section>
  );
}


function App() {
  const [showForm, setShowForm] = useState(false);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Hana Abebe",
      email: "hana@gmail.com",
      phone: "0912345678",
      department: "Computer Science",
      initials: "HA",
      avatarClass: "avatar-one",
    },
    {
      id: 2,
      name: "Abebe Mekonnen",
      email: "abebe@gmail.com",
      phone: "0923456789",
      department: "Software Engineering",
      initials: "AM",
      avatarClass: "avatar-two",
    },
    {
      id: 3,
      name: "Meron Yohannes",
      email: "meron@gmail.com",
      phone: "0934567890",
      department: "Information Technology",
      initials: "MY",
      avatarClass: "avatar-three",
    },
    {
      id: 4,
      name: "Dawit Alemu",
      email: "dawit@gmail.com",
      phone: "0945678901",
      department: "Electrical Engineering",
      initials: "DA",
      avatarClass: "avatar-four",
    },
  ]);


  const handleAddStudent = (newStudent) => {
    const studentWithInitials = {
      ...newStudent,

      initials: newStudent.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(),

      avatarClass: "avatar-one",
    };

    setStudents((prevStudents) => [
      studentWithInitials,
      ...prevStudents,
    ]);
  };


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


  const [schedules, setSchedules] = useState([
    {
      id: "SCH001",
      course: "Data Structures and Algorithms",
      code: "CS201",
      instructor: "Dr. Abebe",
      day: "Monday",
      startTime: "08:00",
      endTime: "10:00",
      room: "Room 201",
    },
    {
      id: "SCH002",
      course: "Database Management Systems",
      code: "CS301",
      instructor: "Dr. Hana",
      day: "Tuesday",
      startTime: "10:00",
      endTime: "12:00",
      room: "Room 305",
    },
    {
      id: "SCH003",
      course: "Software Engineering",
      code: "SE201",
      instructor: "Mr. Dawit",
      day: "Wednesday",
      startTime: "14:00",
      endTime: "16:00",
      room: "Room 102",
    },
  ]);


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


  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="main-content">

          <Navbar />

          <Routes>

            <Route
              path="/"
              element={
                <Navigate
                  to="/dashboard"
                  replace
                />
              }
            />


            <Route
              path="/dashboard"
              element={
                <Dashboard
                  students={students}
                  setStudents={setStudents}
                  handleAddStudent={handleAddStudent}
                  showForm={showForm}
                  setShowForm={setShowForm}
                  teachers={teachers}
                  courses={courses}
                  studentAttendance={studentAttendance}
                  teacherAttendance={teacherAttendance}
                />
              }
            />


            <Route
              path="/students"
              element={
                <Students
                  students={students}
                  setStudents={setStudents}
                  onAddStudent={handleAddStudent}
                />
              }
            />


            <Route
              path="/courses"
              element={
                <Courses
                  courses={courses}
                  setCourses={setCourses}
                />
              }
            />


            <Route
              path="/teachers"
              element={
                <Teachers
                  teachers={teachers}
                  setTeachers={setTeachers}
                />
              }
            />


            <Route
              path="/schedule"
              element={
                <SchedulePage
                  schedules={schedules}
                  setSchedules={setSchedules}
                />
              }
            />


            <Route
              path="/attendance"
              element={
                <Attendance
                  studentAttendance={studentAttendance}
                  setStudentAttendance={setStudentAttendance}
                  teacherAttendance={teacherAttendance}
                  setTeacherAttendance={setTeacherAttendance}
                />
              }
            />


            <Route
              path="/analytics"
              element={
                <Analytics
                  students={students}
                  teachers={teachers}
                  courses={courses}
                  schedules={schedules}
                  studentAttendance={studentAttendance}
                  teacherAttendance={teacherAttendance}
                />
              }
            />


            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}


export default App;

