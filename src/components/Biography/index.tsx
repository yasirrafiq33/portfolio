import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TechList from "../TechList";


const Biography = (): JSX.Element => {
    return (
        <>
            <Bounded>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
                    <Heading size="xl" className="col-start-1">
                        About Yasir
                    </Heading>

                    <div className="prose prose-xl prose-slate prose-invert col-start-1">
                        <p>
                            With over 8 years of experience in Information Technology, I specialize in software engineering and programming. Proficient in JavaScript tools such as Node.js, React.js, Nest.js, Next.js, and Angular, I excel in crafting user-friendly interfaces and robust REST APIs, with a focus on MEAN stack technologies.
                        </p>

                        <p>
                            I have contributed to the success of multinational companies like Turing Inc., collaborating with diverse teams. These experiences have honed my ability to thrive in dynamic environments, where I have played a key role in delivering impactful solutions.
                        </p>

                        <p>
                            Committed to continuous learning, I stay updated on emerging technologies, driving innovation and delivering impactful solutions for business growth. I am dedicated to making meaningful contributions to any organization I join, leveraging my expertise to drive success in the ever-evolving IT landscape.
                        </p>
                    </div>
                    <Button
                        link={'/resume/resume.pdf'}
                        label={'Resume'}
                        download="cv"
                        target="_blank"
                    />

                    <Avatar
                        className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
                    />
                </div>
            </Bounded>
            <TechList />
        </>
    );
};

export default Biography;