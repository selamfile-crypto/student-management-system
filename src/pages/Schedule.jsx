import { useState } from "react";

function Schedule() {
  const [showForm, setShowForm] = useState(false);

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

  const [schedule, setSchedule] = useState({
    id: "",
    course: "",
    code: "",
    instructor: "",
    day: "",
    startTime: "",
    endTime: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSchedule({
      ...schedule,
      [name]: value,
    });
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();

    const newSchedule = {
      ...schedule,
      id:
        schedule.id ||
        `SCH${String(schedules.length + 1).padStart(3, "0")}`,
    };

    setSchedules((currentSchedules) => [
      newSchedule,
      ...currentSchedules,
    ]);

    setSchedule({
      id: "",
      course: "",
      code: "",
      instructor: "",
      day: "",
      startTime: "",
      endTime: "",
      room: "",
    });

    setShowForm(false);
  };

  const deleteSchedule = (id) => {
    setSchedules((currentSchedules) =>
      currentSchedules.filter(
        (schedule) => schedule.id !== id
      )
    );
  };

  return (
    <section className="page">

      <div className="page-header">

        <div>
          <p className="eyebrow">
            ACADEMIC SCHEDULE
          </p>

          <h1>
            Schedule
          </h1>

          <p className="page-description">
            Manage classes, courses, rooms, and weekly schedules.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          <span>+</span>
          {showForm ? "Close Form" : "Add Schedule"}
        </button>

      </div>


      {showForm && (
        <div className="form-container">

          <form onSubmit={handleAddSchedule}>

            <h2>
              Create New Schedule
            </h2>


            <label>
              Schedule ID
            </label>

            <input
              type="text"
              name="id"
              placeholder="Example: SCH004"
              value={schedule.id}
              onChange={handleChange}
            />


            <label>
              Course Name
            </label>

            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              value={schedule.course}
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
              value={schedule.code}
              onChange={handleChange}
              required
            />


            <label>
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              placeholder="Enter instructor name"
              value={schedule.instructor}
              onChange={handleChange}
              required
            />


            <label>
              Day
            </label>

            <select
              name="day"
              value={schedule.day}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Day
              </option>

              <option value="Monday">
                Monday
              </option>

              <option value="Tuesday">
                Tuesday
              </option>

              <option value="Wednesday">
                Wednesday
              </option>

              <option value="Thursday">
                Thursday
              </option>

              <option value="Friday">
                Friday
              </option>

            </select>


            <label>
              Start Time
            </label>

            <input
              type="time"
              name="startTime"
              value={schedule.startTime}
              onChange={handleChange}
              required
            />


            <label>
              End Time
            </label>

            <input
              type="time"
              name="endTime"
              value={schedule.endTime}
              onChange={handleChange}
              required
            />


            <label>
              Room
            </label>

            <input
              type="text"
              name="room"
              placeholder="Example: Room 204"
              value={schedule.room}
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
                Create Schedule
              </button>

            </div>

          </form>

        </div>
      )}


      <div className="student-management-box">

        <div className="student-box-header">

          <div>
            <p className="panel-label">
              CLASS SCHEDULE
            </p>

            <h2>
              All Schedules
            </h2>

            <p>
              {schedules.length} schedules available
            </p>
          </div>

        </div>


        <div className="student-list-container">

          {schedules.length > 0 ? (

            schedules.map((schedule) => (

              <div
                className="student-row"
                key={schedule.id}
              >

                <div className="student-avatar avatar-one">
                  ◷
                </div>


                <div className="student-main-info">

                  <strong>
                    {schedule.course}
                  </strong>

                  <span>
                    {schedule.code} • {schedule.id}
                  </span>

                </div>


                <div className="student-contact">

                  <span>
                    {schedule.day}
                  </span>

                  <span>
                    {schedule.startTime} - {schedule.endTime}
                  </span>

                </div>


                <div className="student-department">

                  <span className="department-badge">
                    {schedule.room}
                  </span>

                </div>


                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    deleteSchedule(schedule.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))

          ) : (

            <div className="empty-students">

              <p>
                No schedules available.
              </p>

              <span>
                Click Add Schedule to create a new class schedule.
              </span>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Schedule;