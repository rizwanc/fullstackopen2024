const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part1 = {props.part1} exercises1 = {props.exercises1} />
      <Part part2 = {props.part2} exercises2 = {props.exercises2} />
      <Part part3 = {props.part3} exercises3 = {props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 10
    }
  ]
}
console.log(course);

  return (
    <div>
      <Header course = {course.name} />
      <Content  parts = {course.parts} />  
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App