// Defines a react component with the name App
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app create by <a href='https://github.com/mluukkai'>muluukai</a>
    </div>
  )
}

const App = () => {
  const friends = [
    'Peter', 'Maya'
  ]

  return (
    <>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </>
  )
}

export default App