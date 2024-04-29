import store from './store'
import { Provider } from 'react-redux'


// Components 
import Header from './components/Header/Header'
import ToDoBody from './components/ToDoBody/ToDoBody'

function App() {
  return (
    <Provider store={store}>
      <div className="App w-full h-full bg-gray-900">
        <div class="h-screen flex flex-col bg-gray-900 ">
          <div class="h-16 flex bg-gray-900">
            <Header />
          </div>
          <div class="w-full h-full flex flex-1 justify-center mx-auto px-4 text-lg bg-gray-900 shadow-lg mb-4">
            <ToDoBody />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
