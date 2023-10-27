export function Course({ registered, id, name, toggleCourse, deleteCourse }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={registered}
                    onChange={e => toggleCourse(id, e.target.checked)}
                />
                {name}
            </label>
            <button onClick={() => deleteCourse(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}

export function CourseList({ courses, toggleCourse, deleteCourse }) {
    return (
        <ul>
            {courses.length === 0 && "No courses"}
            {courses.map(course => {
                return (
                    <Course
                        {...course}
                        key={course.id}
                        toggleCourse={toggleCourse}
                        deleteCourse={deleteCourse}
                    />
                )
            })}
        </ul>
    )
}