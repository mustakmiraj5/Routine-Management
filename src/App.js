import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Ct from './Components/Ct/Ct';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Notes from './Components/Notes&Recordings/Notes';
import Routine from './Components/Routine/Routine'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path: '/routine',
      element:<Routine></Routine>
    },
    {
      path:'/ct',
      element: <Ct></Ct>
    },
    {
      path:'/resources',
      element:<Notes></Notes>
    }
  ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
