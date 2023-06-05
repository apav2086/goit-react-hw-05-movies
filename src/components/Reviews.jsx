import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getReviews } from 'services/movies-api';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(movieId).then(data => {
            setReviews(data.results);
        })
    }, [movieId])

    return <div>
        {reviews && <ul>{reviews.map(review => (
            < li key={review.id} >
                    <p>{review.results}</p>
            </li>))}
        </ul>}
    </div>
}