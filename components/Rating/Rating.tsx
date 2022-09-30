import cn from "classnames";
import styles from "./Rating.module.css";
import { useState, useEffect } from 'react';
import { RatingProps } from './Rating.props';
import Star from "./Star.svg";


const Rating = ({isChange = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    //в стейте изначально содержится массив из 5 элементов, который мы заполняем реакт.фрагментами(пустые элементы)
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); 

    //useEffect вызывает функцию createRating, когда props "rating" обновляется
    useEffect(() => {
        createRating(rating);
    }, [rating]);


    const createRating = (currentRating: number) => {
        //мапим массив ratingArray, где возвращаем компоненты Star с условием: присвоить класс "starFilled" элементам пока index меньше, 
        //чем rating (это пропс, который определяется сколько звездочек поставили)
        const updateRating = ratingArray.map((elem: JSX.Element, i: number) => {
            return (
                <Star
                className={cn(styles.star, {
                    [styles.starFilled]: i < currentRating,
                })}
                /> 
            );
        });

        //обновляем массив(ratingArray) на новый массив(updateRating)
        setRatingArray(updateRating);
    }; 
    
    return (
        <div {...props}>
            {
                ratingArray.map((elem, i) => (<span key={i}>{elem}</span>))
            }
        </div>

    );
};

export default Rating;