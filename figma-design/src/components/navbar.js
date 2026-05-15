import NikeLogo from './nike-logo-img.jpg';
function navbar(){
    return(
        <div className="flex justify-between text-center mt-2">
            <img src={NikeLogo} alt='error 404' className='w-14 h-10 ml-5'/>
            <div className='flex justify-between text-center'>
                <button className='mr-5 font-semibold hover:opacity-75'>Menu</button>
                <button className='mr-5 font-semibold hover:opacity-75'>Location</button>
                <button className='mr-5 font-semibold hover:opacity-75'>About</button>
                <button className='font-semibold hover:opacity-75'>Contact</button>
            </div>
            <div>
                <button className='bg-red-600 text-white rounded-sm mr-5 hover:opacity-85 w-20 h-8'>
                    Login
                </button>
            </div>
        </div>
    )
}
export default navbar;