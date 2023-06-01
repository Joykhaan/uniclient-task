import React from 'react';
import ReviewCard from './ReviewCard';
import rakibul from "../../../public/gettyimages-693134468.jpg"
import Image from 'next/image';

const Reviews = () => {
    const reviews= [
        {
            name: 'Rakib Khan',
            image: rakibul,
            reviewDetails: "Take Consultation by Video call and Doctor will prescribe the medicine "
        },
        {
            name: 'Azizul Khan',
            image: rakibul,
            reviewDetails: "developing customized nutrition plans, offering nutritional counseling, and more to promote optimal health through individualized nutrition and dietary recommendations."
        },
        {
            name: 'Abu Hanif Arnob',
            image: rakibul,
            reviewDetails: "Personalized workout plans, group fitness classes, fitness coaching, nutritional support, injury prevention education, and specialized training to help individuals achieve their fitness goals"
        },
        {
            name: 'Sohaib Kahan',
            image: rakibul,
            reviewDetails: " Yoga sessions , meditation instruction, breathwork techniques, and guidance on yoga philosophy to promote physical, mental, and emotional well-being through the practice of yoga."
        },
        {
            name: 'Ariful islam Arif',
            image: rakibul,
            reviewDetails: "With reconstructive dentistry, we can repaire and restore the beauty of your smile."
        },
        {
            name: 'Bnath Dada',
            image: rakibul,
            reviewDetails: "Counseling, psychotherapy, and mental health assessments to help individuals overcome emotional and psychological difficulties, improve their mental health and well-being, and enhance their quality of life."
        },


    ]
    return (
        <div className='w-3/4 mx-auto '>
            

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
                {
                    reviews.map((review, id) => <ReviewCard
                        key={id}
                        review={review}
                    />

                    )
                }
            </div>
        </div>
    );
};

export default Reviews;