// Projects created with creat-react-app are configured to compile automatically.
//hello is the component and props is the argument being passed into the component
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old 
      </p>
    </div>
  )
}

//example of passing an argument into another function, callback 
const App = () => {
  const name = prompt('Please input your name')
  const age = prompt('Put input your age')

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <div> 
     Greeting app created by <a href="https://github.com/jmeegan2" target="/blank" >James Meegan</a> 
  </div>
    </>
  )
}

export default App;
