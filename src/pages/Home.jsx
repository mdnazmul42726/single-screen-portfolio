import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-slate-300">Welcome.</h1>
                <div className="mt-10">
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Sheikh Mohammad Nazmul Hasan, a detail-oriented Front-End Developer with expertise in React.js, Next.js, Node.js, Express.js, and MongoDB. My passion lies in crafting pixel-perfect user interfaces that seamlessly blend creativity with functionality. From concept to deployment, I thrive on turning ideas into immersive digital experiences. Let's build the future together!"
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '17px', display: 'inline-block' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;