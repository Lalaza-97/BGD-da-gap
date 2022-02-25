import React from 'react'
import './searchPage.css'
import {Button } from '@material-ui/core'
import SearchResult from './searchResult'


import bat from '../src/images/int-ang.png'
import company1 from '../src/images/int-kzn.jpg'
import Liv from '../src/images/int-met.png'
import company2 from '../src/images/int-photo.jpg'
import option from '../src/images/int-TFG.png'

function searchPage() {
    return (
        <div className='searchPage'> 
           <div className='searchPage_info'>
               <p>22 new jobs Cape Town | 26 february to 30 march | Job search</p>
               <h1>Latest job post </h1> 
               <Button variant='outlined'>Cancelation</Button>
               <Button variant='outlined'>City</Button>
               <Button variant='outlined'>Amount</Button>
               <Button variant='outlined'>Application</Button>
               <Button variant='outlined'>More</Button>
               <div>
                   <SearchResult
                        img={company1}
                        location='Durban'
                        title=''
                        description=''
                   />
                    <SearchResult
                        img={Liv}
                        location='Cape Town CBD'
                        title='Intern'
                        description=''
                        price='R1825 / month'
                        total='R21899 total'
                   />
                       <SearchResult
                        img={company2}
                        location=''
                        title='Fashion Bursary'
                        description='Includes food allowance'
                        price='R1599 / night'
                        total='R31799 total'
                   />
                       <SearchResult
                        img={bat}
                        location=''
                        title='Health care'
                        description=''
                        price='R6998 / weekly'
                   />
                       <SearchResult
                        img={option}
                        location=''
                        title='Photographer'
                        description=''
                        price='R4820 / month'
                   />
                       <SearchResult
                        img={company2}
                        location=''
                        title='Construction artistian'
                        description=''
                        price='R39 / hour'
                        total='R18899 total'
                   />
               </div>
           </div>
        </div>
    )
}

export default searchPage
