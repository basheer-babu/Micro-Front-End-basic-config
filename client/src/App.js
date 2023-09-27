
import Page4 from './Pages/Page4';
import React from 'react';
import TopNavBar from './MashreqBank/TopNavBar';
import ComponentCall from './MashreqBank/ComponentCall';
import DocumentTrim from './MashreqBank/DocumentTrim';
import LoginPage from './UserModule/LoginPage';

const Page5=React.lazy(()=>import("microhost/page1"))
const Page6=React.lazy(()=>import("microhost/page2"))

function App() {
  return (
   <div>
    <Page5/>
    <Page6></Page6>
{/* <TopNavBar></TopNavBar> */}
{/* <LoginPage></LoginPage> */}

{/* <ComponentCall></ComponentCall> */}

{/* <DocumentTrim></DocumentTrim> */}
    </div>
  );
}

export default App;
