
import Button from '../Button/Button';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='md:w-3/4 mx-auto'>
            <div className="navbar   p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href={'/'}><li><a>Demos</a></li></Link>
                        <Link href={'/'}><li><a>About</a></li></Link>
                        <Link href={'/'}><li><a>Blog</a></li></Link>
                        <Link href={'/'}><li><a>Pages</a></li></Link>
                        <Link href={'/'}><li><a>Contact</a></li></Link>
                        <Link href={'/'}><li><a>Sign In</a></li></Link>
                        
                            {/* <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case ><a text-xl"href={'/'}>Uniclient</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        
                        <Link href={'/demos'}><li><a>Demos</a></li></Link>
                        <Link href={'/about'}><li><a>About</a></li></Link>
                        <Link href={'/blog'}><li><a>Blog</a></li></Link>
                        <Link href={'/pages'}><li><a>Pages</a></li></Link>
                        <Link href={'/contact'}><li><a>Contact</a></li></Link>
                        {/* <li tabIndex={0}>
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='border-2 rounded-md px-2 py-1 md:block hidden'>sign in</button>
                    <Button text={"Get Started Free"}></Button>
                </div>
            </div>

        </div>
    );
};

export default Header;