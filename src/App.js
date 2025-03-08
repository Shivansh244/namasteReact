import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const Contact = lazy(() =>import("./components/Contact"));

const AppLayout = () => (
  <div id="container">
    <Header></Header>
    <Outlet></Outlet>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Contact/>
          </Suspense>
        )
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
  
]);

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<AppLayout />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
// root.render(<App />);