
export default function Footer() {
  return (
    <div data-testid='footer' className='flex flex-col md:flex-row justify-center space-y-2 md:space-x-24 bg-footerGrey text-center py-20'>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Albumz</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline links'>Home</li>
                <li className='hover:underline links'>Help Center</li>
                <li className='hover:underline links'>Pricing</li>
                <li className='hover:underline links'>About Us</li>
            </ul>
        </div>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Products</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline links'>MyAlbum Premium</li>
                <li className='hover:underline links'>Photo Books</li>
                <li className='hover:underline links'>iPhone App</li>
                <li className='hover:underline links'>Android App</li>
            </ul>
        </div>
        <div>
            <h1 className='text-hoverPurple capitalize text-3xl font-bold'>Follow us</h1>
            <ul className="list-none mt-2 text-sm">
                <li className='hover:underline links'>Facebook</li>
                <li className='hover:underline links'>Twitter</li>
                <li className='hover:underline links'>Discord</li>
                <li className='hover:underline links'>Instagram</li>
            </ul>
        </div>
    </div>
  )
}
