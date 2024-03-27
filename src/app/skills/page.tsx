import Frameworks from "@/components/Frameworks";
import TechList from "@/components/TechList";


const skills = () => {
    const frameworkList = ['nodejs', 'nestjs', 'js', 'nextjs', 'angular'];
    const toolList = ['github', 'jira', 'jenkins', 'figma', 'code', 'npm', 'yarn'];
    const cloudList = ['google', 'aws', 'digitalocean'];

    const techList = ['ReactJs', 'Redux', 'Jest', 'Underscore', 'MaterialUI', 'Tailwind', 'Three.js', 'charts', 'D3', 'Grafana', 'Looker', 'CI/CD', 'etc'];


    return (
        <>
            <Frameworks heading={'Frameworks'} list={frameworkList} />
            <Frameworks heading={'Tools'} list={toolList} />
            <Frameworks heading={'Cloud'} list={cloudList} />

            <TechList heading={'Libraries'} list={techList} />
        </>
    );
}

export default skills;