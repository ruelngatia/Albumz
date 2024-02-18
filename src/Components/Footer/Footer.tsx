
export default function Footer() {
  return (
    <div data-testid='footer' className='flex flex-col md:flex-row justify-center space-y-2 md:space-x-24 bg-footerGrey text-center py-20'>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Albumz</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>Help Center</li>
                <li className='hover:underline'>Pricing</li>
                <li className='hover:underline'>About Us</li>
            </ul>
        </div>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Products</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline'>MyAlbum Premium</li>
                <li className='hover:underline'>Photo Books</li>
                <li className='hover:underline'>iPhone App</li>
                <li className='hover:underline'>Android App</li>
            </ul>
        </div>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Follow us</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline'>Facebook</li>
                <li className='hover:underline'>Twitter</li>
                <li className='hover:underline'>Discord</li>
                <li className='hover:underline'>Instagram</li>
            </ul>
        </div>
    </div>
  )
}
