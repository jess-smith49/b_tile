function Nav(props){
    const tabs = ['Services', 'Projects', 'About', 'Contact']

    return(
        <header>

            <div>
                <h1>Brockman Tile</h1>
            </div>

            <ul>
                {tabs.map(tab => (
                    <li key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}

                            onClick={() => props.handlePageChange(tab)}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Nav;