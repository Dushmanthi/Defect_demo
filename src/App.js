import React from 'react';
import './tasks/addDefects.css';
import './tasks/defectConfig.css';
//import Transitions from './tasks/defectConfig';
import CompanyPrivillege from './tasks/companyPrivillege';
import TransitionsModal from './tasks/addDefects';
//import { Grid} from 'react-bootstrap';
//import { G rid, Row, Col, Table } from "react-bootstrap";
import DenseTable from './tasks/DefectTable';
import Transitions from './tasks/defectConfig';
function App() {
  return (
    <div >
       <TransitionsModal/>  
     {/* <MaterialTableDemo/> */} 

     {/* <CompanyPrivillege/> */}
      <DenseTable/>  

    
    </div>
  );
}

export default App;
 