import {createBrowserRouter,} from "react-router-dom";
import Login from "../Login & Register/Login";
import Home from "../Components/Home/Home";
import Root from './../Root/Root';
import AddCraftItem from './../Components/CraftsItemsComponents/AddCraftItem';
import Register from './../Login & Register/Register';
import UpdateCraftItem from './../Components/CraftsItemsComponents/UpdateCraftItem';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import MyArtCraftList from './../Components/CraftsItemsComponents/MyArtCraftList';
import AllArtCraftItem from './../Components/CraftsItemsComponents/AllArtCraftItem';
import ViewDetails from "../Components/CraftsItemsComponents/ViewDetails";

import SubcategoryPage from "../Components/CraftsItemsComponents/SubcategoryPage";
import Error from "../Shared/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/addCraftItem')
      },{
        path:'/allArtCraftItems',
        element:<AllArtCraftItem></AllArtCraftItem>,
        loader:()=>fetch('http://localhost:5000/allCraftItems')
        
      },
      {
        path:'/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/allCraftItems/${params.id}`)
        
      },
      {
        path:'/addCraftItem',
        element:<PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path:'/myArtCraftList',
        element:<PrivateRoute>
         <MyArtCraftList></MyArtCraftList>
        </PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/myCraftItem')
      },
      {
        path:'/subcategoryPage',
        element:<SubcategoryPage></SubcategoryPage>,
        loader:()=>fetch('http://localhost:5000/allCraftItems')
      
      },
      {
        path:'/updateCraftItem/:id',
        element:<PrivateRoute><UpdateCraftItem></UpdateCraftItem></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/myCraftItem/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
    },
  ]);

  export default router;