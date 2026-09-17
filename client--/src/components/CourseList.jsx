import CourseCard from "./CourseCard";

function CourseList({ courses, onRemoveCourse }) {
  return (
    <section className="courses-section">
      <h2>My Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onRemove={onRemoveCourse}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseList;