import { useEffect, useState } from "react";
import axios from 'axios';

const Projects = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {data && data.map(project => (
                <div key={project.id}>
                    <h2 style={{ color: 'white' }}>{project.title}</h2>
                    <p style={{ color: 'white' }}>{project.description}</p>
                    {/* Render other project details here */}
                </div>
            ))}
        </div>
    );
};

export default Projects;
