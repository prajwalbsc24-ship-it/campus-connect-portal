import { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Data Science",
      instructor: "Dr. Kumar",
      credits: 4
    },
    {
      id: 2,
      name: "Machine Learning",
      instructor: "Dr. Sharma",
      credits: 3
    }
  ]);

  const addCourse = (course) => {
    const newCourse = {
      id: Date.now(),
      ...course
    };

    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Student Course Manager</h1>
          <p>React Component-Based Application</p>
        </div>
      </header>

      <main>
        <section className="intro">
          <h2>Manage Your Courses</h2>
          <p>
            Add, view, and remove courses using React components,
            props, state, and event handling.
          </p>
        </section>

        <CourseForm onAddCourse={addCourse} />

        <CourseList
          courses={courses}
          onRemoveCourse={removeCourse}
        />

        <div className="total">
          <strong>Total Courses: {courses.length}</strong>
        </div>
      </main>

      <footer>
        <p>Experiment 5 | Full Stack Development</p>
      </footer>
    </div>
  );
}

export default App;