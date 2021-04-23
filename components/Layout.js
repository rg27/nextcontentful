import Link from 'next/link'

const Layout = ({children}) => {
    return (  
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <span>ASPO</span>
                            <span>Food House</span>
                        </h1>
                        {/* <h2>Spread The Joy</h2> */}
                    </a>
                </Link>
            </header>

            <div className="page-content">
                {children}  
            </div>

            <footer>
                <p>Copyright 2021</p>
            </footer>
        </div>
    );
}
 
export default Layout;