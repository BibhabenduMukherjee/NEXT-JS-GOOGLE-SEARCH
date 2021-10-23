import HeaderOption from './HeaderOption'
function HeaderOptains() {
    return (
        <div>
            {/* left section */}
             <div className = 'flex space-x-4'>
             <HeaderOption/>
             </div>
            {/* Right section */}

            <div className="flex space-x-4">
                <p className='link '>Setting</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptains
