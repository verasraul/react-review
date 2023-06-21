import {Route, Routes} from 'react-router-dom';
import {}


function Container(){
    
    
    
    return (
        <div>
            <Routes>
                <Route path="/" />
                <Route paht="/random" element={<Random />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Container;