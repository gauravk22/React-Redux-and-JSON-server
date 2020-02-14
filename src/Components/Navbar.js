import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function NavigationBar() {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div>
            <Link 
                to="/page1"
            >
                <Button 
                    outline 
                    color="danger"
                >
                    POSTS
                </Button>
            </Link>
            <Link 
                to="/page2"
            >
                <Button
                    outline
                    color="info"
                >
                    FAVOURITES
                </Button>
            </Link>
        </div>
        </nav>
        </>
    )
}

export default NavigationBar;