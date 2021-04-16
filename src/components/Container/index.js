import React, {useState} from 'react';

import Nav from '../Nav';
import About from '../About';
import Services from '../Services';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

function Container(){
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {

        switch(currentPage){
            case 'Services':
                return <Services/>
            case 'Projects':
                return <Projects/>
            case 'Contact':
                return <Contact/>
            default:
                return <About/>
        }
    };

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
            <Footer></Footer>
        </div>
    )
}

export default Container;