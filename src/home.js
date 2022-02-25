import React from 'react'
import './home.css'
import Banner from './banner'
import Card from './card'

import img from '../src/images/IT-learn.jpg'
import imgs from '../src/images/fly.jpg'
import imge from '../src/images/fashion.jpg'

import imgy from '../src/images/tech-jobs.jpg'
import imgg from '../src/images/HR-jobs.jpg'
import imgj from '../src/images/film-jobs.jpg'

function home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home_section'>
                <Card 
                    src={img}
                    title='IT Learnerships'
                    description='Its a 12 month Learnership
                     in woodstock, for all tech lovers' />
                <Card
                    src={imgs}
                    title='Pilot'
                    description='Its a 3 month helicopter liecense
                    in Muzienburg, for all who enjoy flying' />
                <Card 
                    src={imge}
                    title='Fashion Bursary'
                    description='Its a great oppurtunity for all designers
                    if your dream is to rule the runway, apply for the 
                    FDISA bursary'/>
            </div>
            <div className='home_section'>
                <Card
                src={imgy}
                title='Entry level tech jobs'
                description='R7000/month' />
                <Card
                    src={imgg}
                    title='Entry level HR jobs'
                    description='R5980/month' />
                <Card 
                    src={imgj}
                    title='Entry level Film jobs'
                    description='R10000/month'/>
            </div>
        </div>
    )
}

export default home
