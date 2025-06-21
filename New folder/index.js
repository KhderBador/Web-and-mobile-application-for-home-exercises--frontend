import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home.js';
import ProgramPage from './pages/ProgramPage.js';
import DayOfProgram from './pages/DayOfProgram.js';
import Profile from './pages/Profile.js';
import DayBlockMessage from './pages/day_block_message.js';
import CreateAccount from './pages/CreateAccount.js';

import BodyUserInformation from './pages/BodyUserInformation.js';
import ProgramCategories from './pages/ProgramCategories.js';
import ProgramsOfSomeCategory from './pages/ProgramsOfSomeCategory.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SomePractice from './pages/SomePractice.js';
import StartPractice from './pages/StartPractice.js';
import SectionSevice from './components/section_sevice.js';
import FinishAllPracticeScreen from './pages/FinishAllPracticeScreen.js';
import LogIn from './pages/Log_in.js';
import UserPlan from './pages/UserPlan.js';
import DaysOfPlan from './pages/DaysOfPlan.js';
import ArticleCategories from './pages/ArticleCategories.js';
import ArticlesOfSomeCategory from './pages/ArticlesOfSomeCategory.js';
import ArticlePage from './pages/ArticlePage.js';
import SomePlanPractice from './pages/SomePlanPractice.js';
import FinishAllPlanPracticeScreen from './pages/FinishAllPlanPracticeScreen.js';
import DayOfPlan from './pages/DayOfPlan.js';
import ProgramPageForProfile from './pages/ProgramPageForProfile.js';





	









const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Home/>,
  },
  {
    path: "/programpage",
    element:<ProgramPage/>,
  },
  {
    path: "/programpageforprofile",
    element:<ProgramPageForProfile/>,
  },
  {
    path: "/dayofprogram",
    element:<DayOfProgram/>,
  },
  {
    path: "/profile",
    element:<Profile/>,
  },
  {
    path: "/createaccount",
    element:<CreateAccount/>,
  },
  {
    path: "/bodyuserinformation",
    element:< BodyUserInformation/>,
  },
  {
    path: "/pc",
    element:< ProgramCategories/>,
  },
  {
    path: "/pps",
    element:<ProgramsOfSomeCategory />,
  },
  {
    path: "/somepractise",
    element:<SomePractice />,
  },
  {
    path: "/startpractise",
    element:<StartPractice />,
  },
  {
    path: "/finishallpractises",
    element:<FinishAllPracticeScreen />,
  },
  {
    path: "/login",
    element:<LogIn/>,
  },
  {
    path: "/userplan",
    element:<UserPlan/>,
  },
  {
  path: "/daysofplan",
  element:<DaysOfPlan/>,
  },
  {
    path: "/dayofplan",
    element:<DayOfPlan/>,
    },
    {
      path: "/someplanpractise",
      element:<SomePlanPractice/>,
      },
      {
        path: "/finishallplanpractises",
        element:<FinishAllPlanPracticeScreen/>,
        },
  {
    path: "/articlecategories",
    element:<ArticleCategories/>,
    },
    {
      path: "/articlesofsomecategory",
      element:<ArticlesOfSomeCategory/>,
      },
      {
        path: "/articlepage",
        element:<ArticlePage/>,
        }
        , {
          path: "/block",
          element:<DayBlockMessage/>,
          }
          

  // {
  //   path: "/sectionservice/1",
  //   element:<SectionSevice id ="1"/>,
  // },
   
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

