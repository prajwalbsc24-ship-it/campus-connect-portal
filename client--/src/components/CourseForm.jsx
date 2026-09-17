import { useState } from "react";

function CourseForm({ onAddCourse }) {
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [credits, setCredits] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      courseName === "" ||
      instructor === "" ||
      credits === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    onAddCourse({
      name: courseName,
      instructor: instructor,
      credits: credits
    });

    setCourseName("");
    setInstructor("");
    setCredits("");
  };

  return (
    <section className="form-section">
      <h2>Add New Course</h2>

      <form onSubmit={handleSubmit}>
        <label>Course Name</label>

        <input
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
        />

        <label>Instructor</label>

        <input
          type="text"
          placeholder="Enter instructor name"
          value={instructor}
          onChange={(event) => setInstructor(event.target.value)}
        />

        <label>Credits</label>

        <input
          type="number"
          placeholder="Enter credits"
          value={credits}
          onChange={(event) => setCredits(event.target.value)}
        />

        <button type="submit">Add Course</button>
      </form>
    </section>
  );
}

export default CourseForm;