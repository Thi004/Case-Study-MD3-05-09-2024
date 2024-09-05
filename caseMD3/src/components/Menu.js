function Menu() {
    return (
        <>
            <div className={'menu'}>
                <div className="dropdown">
                    <button className="drop-btn">MEN</button>
                    <div className="dropdown-content">
                        <a href="#">SHOES</a>
                        <a href="#">CLOTHING</a>
                        <a href="#">HAT</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="drop-btn">WOMEN</button>
                    <div className="dropdown-content">
                        <a href="#">SHOES</a>
                        <a href="#">CLOTHING</a>
                        <a href="#">HAT</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="drop-btn">KIDS</button>
                    <div className="dropdown-content">
                        <a href="#">YOUTH (8-16)</a>
                        <a href="#">KID (4-8)</a>
                        <a href="#">BABY (1-4)</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;