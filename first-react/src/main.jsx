// import { Fragment } from "react"
import { createRoot } from "react-dom/client"

import HeaderComponent from "./Header"
import MainComponent from "./Content"
import FooterComponent from "./Footer"

const root = createRoot(document.getElementById("root"))
console.log(<h1>Hello, World!</h1>)
root.render(
  <Page />
)

function Page(){
  return (
    <>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </>
  )
}
//Fragments
// if we use div to wrap then in html it will be like
// div id root 
//    div (extra div)
//      then all the components

//by using fragment this thing is not there only div id root then all the content
// Used to wrap all the elements to one parent element that can be rendered


// function NewComponent(){
//   return (
//     // <Fragment>
//     //without fragments just <></> also works
//     <> 
//       <HeaderComponent/>
//       <MainComponent/>
//       <FooterComponent/>
//     </>
//     // </Fragment> 
//   )
// }

// function PageComponent(){
//   return (
//     <main>
//       <h1>Reasons I'm excited to learn React? </h1>
//       <ul>
//         <li>The most popular Javascript Library</li>
//         <li>I am more likely to get a job as a front end developer
//         if I know Reac</li>
//         <li>It is declarative and composable</li>
//         <li>It is cool and crazy</li>
//       </ul>
//     </main>
//   )
// }

// function TemporaryComponent() {
//   return (
//     <main>
//       <img src="src/assets/react-logo.png" width="40px" alt="react-logo" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </main>
//   )
// }
