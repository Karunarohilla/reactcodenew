import react from 'react';
export default function NavbarPractice(props){
    return(
        <>
            <div className="container-fluid mt-4">
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>Navbar Practice</h1>
                <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 1</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 2</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 3</a>
                        </li>
                    </ul>

                    <form className="form-inline" style={{paddingLeft: '65em'}}>
                        
                        <div className="custom-control custom-switch ml-5">
                            <input type="checkbox" className="custom-control-input" id="switch1" name="example" onClick={props.toggleMode} />
                            <label className="custom-control-label" htmlFor="switch1"></label>
                        </div>
                    </form>

                </nav>
            </div>
            
        </>
    );
}