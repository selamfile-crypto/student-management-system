import { useState } from "react";

function StudentForm({ onAddStudent, onCancel }) {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddStudent(student);

    setStudent({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
    });

    onCancel();
  };

  return (
    <div className="form-container">
      <h2>Create Student</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID</label>
          <input
            type="text"
            name="id"
            value={student.id}
            onChange={handleChange}
            placeholder="e.g. STU001"
            required
          />
        </div>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="student@example.com"
            required
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            placeholder="e.g. 0912345678"
            required
          />
        </div>

        <div>
          <label>Department</label>

          <select
            name="department"
            value={student.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
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

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="create-button"
          >
            Create Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;