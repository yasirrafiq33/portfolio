import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const Education = (): JSX.Element => {
    const education = [{
        title: 'Bachelor’s Degree (BSIT)',
        time_period: '2011 - 2015',
        institution: 'University of Punjab',
        description: "Over the these four years, I've gained invaluable experience and earned a certified degree. Throughout this journey, I've acquired essential skills in adaptation, communication, and relationship-building, enriching both my personal and professional growth."
    },
    ];
    return (
        <Bounded className="bg-neutral-500">
            <Heading as="h2" size="lg">
                {'Education'}
            </Heading>
            {education.map((item, index) => (
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

export default Education;