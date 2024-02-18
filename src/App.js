import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider, useActionData } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>
{
    const[userName,setUserName]=useState(" ")
    useEffect(()=>{
        const data={
            name:"Priya A"
        }
        setUserName(data.name)
        console.log(data.name)

    },[])
    return(
        // <UserContext.Provider value={{loggedInUser:userName}}>
        // <div className="App">
        //     <UserContext.Provider value={{loggedInUser:"Ridhan R"}}>
        //     <Header/>
           
        //     </UserContext.Provider>
        //     <Outlet/>
            
        // </div>
        // </UserContext.Provider>
        <div className="App">
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
            
            
        </div>
        
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
path:"/grocery",
element:(
    <Suspense fallback={<h1>Loading....</h1>}><Grocery></Grocery></Suspense>
)
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }

        ],
        errorElement:<Error/>

    },
    

])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)