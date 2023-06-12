import router from "@mongez/react-router";
import HomePage from './App';
import BaseLayout from "./Components/BaseLayout";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";


router.partOf(BaseLayout, [
    {
      path: "/",
      component: HomePage,
    },
    {
      path:"/contact" ,
      component:Contact, 
    },
{
    path:"/about",
    component:About
}
  ]);