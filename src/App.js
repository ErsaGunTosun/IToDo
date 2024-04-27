import store from './store'
import { Provider } from 'react-redux'


// Components 
import Header from './components/Header/Header'
import ToDoBody from './components/ToDoBody/ToDoBody'

function App() {
  return (
    <Provider store={store}>
      <div className="App w-full h-full bg-black">
        <div class="h-screen flex flex-col bg-gray-900">
          <div class="h-16 flex bg-gray-800">
            <Header />
          </div>
          <div class="w-full h-full flex flex-1 justify-center mx-auto p-4 text-lg bg-gray-800 shadow-lg">
            <ToDoBody />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
