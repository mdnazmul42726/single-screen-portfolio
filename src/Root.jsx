import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 p-2 md:p-5 lg:p-10">
                <div className="flex-1">
                    <Link to={'/'}> <h1 className="text-2xl font-semibold text-slate-300">Nazm<span className="text-red-600">ul.</span></h1></Link>
                </div>
                <div className="flex-none">
                    <a href="mailto:nazmulofficial@outlook.com" className="hover:scale-110 transition-all">
                        <img width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/new-post--v2.png" alt="new-post--v2" />
                    </a>
                    <a href="https://www.linkedin.com/in/mdnazmul42726/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                        <img width="35" height="35" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/mdnazmul42726" target="_blank" rel="noreferrer" className="hover:scale-110 transition-all">
                        <img width="40" height="40" src="https://img.icons8.com/pulsar-line/48/github.png" alt="github" />
                    </a>
                </div>
            </div>
            <div className="p-5 md:p-10">

                <div className="md:flex gap-20 mt-6 md:mt-10 lg:mt-20 space-y-10">
                    <div className="md:w-[70%] md:ml-5 lg:ml-16"><Outlet /></div>
                    <div className="md:w-[30%]">
                        <h3 className="text-2xl font-mono text-slate-300">Projects</h3>
                        <div className="mt-5 font-mono space-y-2 ">
                            <NavLink className={({ isActive }) => isActive ? 'text-red-600' : ''} to={'/projects/parcel-sync'}> <p className="hover:scale-105 transition-all cursor-pointer">ParcelSync</p></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-red-600' : ''} to={'/projects/crave-crafter'}> <p className="hover:scale-105 transition-all cursor-pointer">CraveCrafter</p></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-red-600' : ''} to={'/projects/tech-trove'}> <p className="hover:scale-105 transition-all cursor-pointer">TechTrove</p></NavLink>

                        </div>
                    </div>
                </div>

                <div className="right-0 bottom-0 absolute p-3 hidden md:flex">
                    <p className="text-sm">&copy; 2023 - Sheikh Mohammad Nazmul H.</p>
                </div>
                <p className="text-sm mt-10 justify-center flex md:hidden">&copy; 2023 - Sheikh Mohammad Nazmul H.</p>
            </div>

        </div>
    )
};

export default Root;