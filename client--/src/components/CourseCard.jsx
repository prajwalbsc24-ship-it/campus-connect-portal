function CourseCard({ course, onRemove }) {
  return (
    <div className="course-card">
      <div className="course-icon">📚</div>

      <h3>{course.name}</h3>

      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>

      <p>
        <strong>Credits:</strong> {course.credits}
      </p>

      <button
        className="remove-btn"
        onClick={() => onRemove(course.id)}
      >
        Remove Course
      </button>
    </div>
  );
}

export default CourseCard;