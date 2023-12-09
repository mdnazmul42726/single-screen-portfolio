
const CraveCrafter = () => {
    document.title = 'Nazmul | CraveCrafter'

    return (
        <div data-aos="fade-right">
            <div>
                <div className="">
                    <h1 className="text-3xl">CraveCrafter - Restaurant Management Website</h1>
                    <p className="mt-10">CraveCrafter is a full-stack restaurant website that allows users to discover and savor an exquisite array of culinary delights. This project focuses on creating a visually appealing and feature-rich experience for users, enabling them to view, add, modify, and delete food items. Users can also enjoy blog content that answers common questions about web development and databases.
                    </p>

                    <ul className="list-disc ml-10 mt-5">
                        <li>Contribute to the menu by adding new food items.</li>
                        <li>Register and login to access user-specific features.</li>
                        <li> Users can manage profile, including viewing added food items, adding new items, and
                            viewing ordered items.</li>
                    </ul>
                    <div className="flex ml-10 mt-5 gap-3 font-bold text-slate-300">
                        <a href="https://simple-firebase-94d7f.web.app/" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">View Site</p>
                        </a>
                        <a href="https://github.com/mdnazmul42726/CraveCrafter-client/" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">Client Repo</p>
                        </a>
                        <a href="https://github.com/mdnazmul42726/CraveCrafter-server/" target="_blank" rel="noreferrer">
                            <p className="hover:underline cursor-pointer">Server Repo</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraveCrafter;