
const ParcelSync = () => {
    document.title = 'Nazmul | ParcelSync';

    return (
        <div data-aos="fade-right">
            <div className="">
                <h1 className="text-3xl">ParcelSync - Parcel Management System</h1>
                <p className="mt-10">This project is a full-stack delivery system web application built to streamline parcel bookings,deliveries, and management. It includes features for users, delivery personnel, and administrators.
                </p>
                <ul className="list-disc ml-10 mt-5">
                    <li>Multi-User Roles and Permissions.</li>
                    <li>Dynamic Parcel Assignment and Delivery Tracking.</li>
                    <li> Comprehensive Analytics Dashboard.</li>
                </ul>
                <div className="flex ml-10 mt-5 gap-3 font-bold text-slate-300">
                    <a href="https://simple-firebase-recap-e8453.firebaseapp.com/" target="_blank" rel="noreferrer">
                        <p className="hover:underline cursor-pointer">View Site</p>
                    </a>
                    <a href="https://github.com/mdnazmul42726/ParcelSync-client/" target="_blank" rel="noreferrer">
                        <p className="hover:underline cursor-pointer">Client Repo</p>
                    </a>
                    <a href="https://github.com/mdnazmul42726/ParcelSync-server" target="_blank" rel="noreferrer">
                        <p className="hover:underline cursor-pointer">Server Repo</p>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ParcelSync;