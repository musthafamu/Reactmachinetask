import './App.css';
import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom';
import {CssBaseline,Box} from '@mui/material'
import Main from  './pages/Home'
import Support from './pages/Support';
import Plugins from './pages/Plugins';
import { general } from './theme/colors';
import Help from './pages/Help';

function App() {

  return (
    <BrowserRouter>  
    <Box sx={{background:general.mainbg}} minHeight='100vh'  width='100%' >

    <CssBaseline >
     <Routes>
      <Route path='/'  element={<Main/>}/>
      <Route path='/support'  element={<Support/>}/>
      <Route  path='/plugins' element={<Plugins/>}/>
      <Route  path='/help' element={<Help/>}/>
     </Routes>
    </CssBaseline>
    </Box>
     </BrowserRouter>
  );
}

export default App;
