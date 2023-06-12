import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getReviews } from '../services/movies-api';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(movieId).then(data => {
            setReviews(data.results);
        });
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviews.length > 0 ? (
                        reviews.map((review) => (
                            < li key={review.id} >
                                <h4>{review.author}</h4>
                                <p>{review.content}</p>
                            </li>))
                        ) : (<h4>We don't have any reviews for this movie.</h4>)}
                </ul>
            
    </div>
    );
}