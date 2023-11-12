import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, RoomDetails } from "./pages";
import { Footer, Header } from "./components";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />
  }
])


function App() {
  return (
    <div className="">
    <Header />
    <RouterProvider router={router} />
    <Footer />
    </div>
  );
}

export default App;
