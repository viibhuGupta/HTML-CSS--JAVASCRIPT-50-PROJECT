import './App.css';

function App() {

  function changeFirstNameHAndeler (event) {
    console.log(event.target.value);

    // intermi 30:00
  }


  function changeLastNameHAndeler (event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <form >
        <input type="text"
        placeholder='First Name'
        onChange={changeFirstNameHAndeler}
        />

       <input type="text"
        placeholder='Last Name'
        onChange={changeLastNameHAndeler}
        />
      </form>
    </div>
  );
}

export default App;
