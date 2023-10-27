import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { App2, MovieList, MovieListItem, Title } from './listing11.2.jsx';
import { CourseList, Course } from './course.jsx';
import { useEffect } from "react"
import { YKForm } from "./form.jsx"

//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [courses, setcourses] = useState(() => {//initially empty list of courses
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(courses))
  }, [courses])
  function addCourse(name) {
    setcourses(currentCourses => {//current statte of courses
      return [
        ...currentCourses,
        { id: crypto.randomUUID(), name, registered: false },//unique identifier for each ID
      ]
    })
  }
  function toggleCourse(id, registered) {
    setcourses(currentCourses => {//current array of courses
      return currentCourses.map(course => { //js function map, works like for-each
        if (course.id === id) {
          return { ...course, registered }
        }
        return course
      })
    })
  }
  function deleteCourse(id) {
    setcourses(currentcourses => {
      return currentcourses.filter(course => course.id !== id)
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Let's <code>src/App.jsx</code> change this to test it out.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <App2 />
      <YKForm onSubmit={addCourse} />
      <h1 className="header">My Course List</h1>
      <CourseList courses={courses} toggleCourse={toggleCourse}
        deleteCourse={deleteCourse} />
    </>
  );
}
export default App;


