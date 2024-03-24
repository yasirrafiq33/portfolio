import Biography from "@/components/Biography";
import Bounded from "@/components/Bounded";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

const about = () => {
    return (
        <>
            <Biography />
            <Experience />
            <Education />
        </>
    );
}


export default about;