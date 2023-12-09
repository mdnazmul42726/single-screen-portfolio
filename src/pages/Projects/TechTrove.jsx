
const TechTrove = () => {
    document.title = 'Nazmul | TechTrove';

    return (
        <div data-aos="fade-right">
            <div>
                <div className="">
                    <h1 className="text-3xl">TechTrove</h1>
                    <p className="mt-10">This is an e-commerce website built using React Router, MongoDB, and Node.js. It allows users to view product details, update product information, add products to their cart, and manage their cart contents. To access certain features, users must be logged in.</p>
                    <ul className="list-disc ml-10 mt-5">
                        <li>Users can sign up and log in to access product details, update product information, and add products to their cart.</li>
                        <li>Unauthenticated users can only browse products without access to specific details.</li>
                        <li> Cart contents are saved in MongoDB and displayed on the "My Cart" page.</li>
                    </ul>
                    <div className="flex ml-10 mt-5 gap-3 font-bold text-slate-300">
                        <a href="https://meem-146ca.web.app/" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">View Site</p>
                        </a>
                        <a href="https://github.com/mdnazmul42726/TechTrove-client" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">Client Repo</p>
                        </a>
                        <a href="https://github.com/mdnazmul42726/TechTrove-server" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">Server Repo</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechTrove;