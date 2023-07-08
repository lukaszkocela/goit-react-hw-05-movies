import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';
import { Author } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

     const handleReviews = async () => {
      try {
        setReviews(await getReviews(id));
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    handleReviews();
  }, [reviews]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <Author>Author: {review.author}</Author>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;