import { useParams } from 'react-router-dom';

export default function Category() {
    const { category } = useParams();

    return (
        <div>
            <h1>Explore Gadgets in {category}</h1>
        </div>
    );
};
