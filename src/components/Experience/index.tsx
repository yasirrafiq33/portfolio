import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const Experience = (): JSX.Element => {
    const experiences = [{
        title: 'Full Stack Engineer',
        time_period: 'Dec 2021 - Present',
        institution: 'Turing.com',
        description: "In my role as a full-stack developer, I've contributed to two key products: customized GrowthBook for Experimentation Framework, and developed a Centralized Logging API and Platform. Now, transitioning to projects focusing on demand generation and process optimization for enhanced operational efficiency"
    },
    {
        title: 'Senior Software Engineer / Team Lead',
        time_period: 'Feb 2017 - Dec 2021',
        institution: 'Coeus Solutions GmbH',
        description: "At Coeus Solutions GmbH, I've advanced from assistant software engineer to team lead. With a focus on web and mobile app development, I've contributed to diverse projects across our locations in Berlin, Munich, and Lahore."
    },
    {
        title: 'ReactJS/ VueJS developer',
        time_period: 'April 2021 - Jan 2022',
        institution: 'ApexChat',
        description: "It's a chat application based on an admin portal. I was outsourced to this company as a frontend developer for reactJs/vueJs etc."
    },
    {
        title: 'Senior Software Engineer',
        time_period: 'Dec 2020 - April 2021',
        institution: 'VentureDive',
        description: "It's a chat application based on an admin portal. I was outsourced to this company as a frontend developer for reactJs/vueJs etc."
    }
    ];
    return (
        <Bounded className="bg-rose-950">
            <Heading as="h2" size="lg">
                {'Experiences'}
            </Heading>
            {experiences.map((item, index) => (
                <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
                    <Heading as="h3" size="sm">
                        {item.title}
                    </Heading>

                    <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
                        <span>{item.time_period}</span>{" "}
                        <span className="text-3xl font-extralight">/</span>{" "}
                        <span>{item.institution}</span>
                    </div>
                    <div className="prose prose-lg prose-invert mt-4">
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </Bounded>
    );
};

export default Experience;