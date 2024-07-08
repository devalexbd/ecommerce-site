import '../assets/styles/Header.scss'

export default function Header(){

    return(
        <>
            <div className="header">
                <div className="header sub">
                    <div className="elements">
                        <img src="src\images\cart.png" alt="Shopping Cart Icon" className='icon' />
                        <div className="cart-price">
                            <h3>£0.00</h3>
                        </div>
                    </div>

                    <div className="logo-elements">
                        <h1>GAME</h1>
                        <img src="src\images\logo.png" alt="Picture of Logo" className='logo' />
                        <h1>STORE</h1>
                    </div>

                    <div className="elements">
                        <div className="elements more">
                            <img src="src\images\bell.png" alt="Bell Icon" className='icon' />
                            <img src="src\images\wishlist.png" alt="Wishlist Icon" className='icon'/>
                        </div>
                        <img src="src\images\user.png" alt="User Icon" className='icon' />
                    </div>
                </div>
            </div>       
        </>
    )
}