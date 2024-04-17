import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Image from "next/image";
import { BiGame } from "react-icons/bi";

const Projects = (): JSX.Element => {
    const projects = [{
        title: 'Experimentation Platform (A/B/...)',
        logo: '/logos/turing.svg',
        company: 'Turing Inc',
        description: "Experimentation is a versatile platform offering turing the capability of a personalized feature flagging and A/B testing system. It includes reporting and analysis features for informed decision-making based on flagged data. Derived from the open-source tool Growthbook, this platform is customized and deployed within Turing for enhanced functionality."
    },
    {
        title: 'Centerlized Logging/Tracking System',
        logo: '/logos/turing.svg',
        company: 'Turing Inc',
        description: "The Centralized Logging/Tracking System is a comprehensive solution that aggregates logs from all products within the company, storing them on GCP and pushing them to bigQuery. By consolidating all company logs into one location, it facilitates proper reporting, analysis, and error handling. This system comprises an npm package/library, platform and is also utilized to track end-user activities."
    },
    {
        title: 'Turing Website And Growth',
        logo: '/logos/turing.svg',
        company: 'Turing Inc',
        description: "I am presently involved in the development of the Turing website and the growth platform. The website is powered by Prismic CMS, while the growth platform utilizes a variety of in-house tools and platforms."
    },
    {
        title: 'Apexchat',
        logo: '/logos/apexchat.png',
        company: 'Venturedive',
        description: "Widget based application that provides chat services to different companies. The widget lands on any web portal for chat communication.",
        bg:'white'
    },
    {
        title: "The Children's Place",
        company: 'Venturedive',
        logo: '/logos/childrenplace.png',
        description: "Shopify for some specific countries and brands. I worked there as a front-end engineer using Reactjs as the main library.",
        bg:'white'
    },
    {
        title: 'Ekomi Voe',
        logo: '/logos/ekomivoe.png',
        company: 'Coeus Solutions Gmbh',
        description: "Developed front -end module for ekomi voe to know about employees interest,  mood and reviews about the company. Voice of employee (VOE) is self descriptive.",
        bg:'white'
    },
    {
        title: 'getBravio.io',
        logo: '/logos/bravo.png',
        company: 'Coeus Solutions Gmbh',
        description: "Rewards based on OKRs, interactive web interface with strong back-end architecture. Defined OKRs against activities.",
        bg:'white'
    },
    {
        title: 'Covetme',
        company: 'Coeus Solutions Gmbh',
        description: `Your voice is more powerful within your group of friends than any other outside noise.
        This application works for brands as a shout-out using influencers (social media
        accounts) and paying them in rewards. I am working on this project as Team Lead and
        developing on both the front end, back end side.`
    },
    ];
    return (
        <Bounded className="bg-slate-800">
            <Heading as="h2" size="lg">
                {'Projects'}
            </Heading>
            <div className="prose-lg prose-invert mt-4">
                <span>{"In addition to these major projects, I've also contributed to numerous other products and initiatives, each offering its own set of challenges and opportunities for growth."}</span>
            </div>
            {projects.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 ml-6 mt-8 md:ml-12 md:mt-16">
                    <div className="flex flex-col">
                        <Heading as="h3" size="sm">
                            {item.title}
                        </Heading>

                        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                            <span>{item.company}</span>
                        </div>
                        <div className="prose prose-lg prose-invert mt-4">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="flex md:justify-end sm:justify-start md:items-start">
                        {item.logo && <Image src={item.logo || ''} width={200}
                            height={200}
                            alt="Company Logo"
                            className={`bg-${item.bg}`}
                            />}
                    </div>

                </div>
            ))}
        </Bounded>
    );
};

export default Projects;