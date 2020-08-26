import React, { useState, useEffect } from 'react'
import SliderForm from '../slider_form'
import Result from '../result'

const mockCampaingData = {
    pricePerUser: 0.0417,
    minDays: 5,
    maxDays: 20,
    minUsers: 400,
    maxUsers: 5000
}

enum keys {
    PEOPLE = 'people',
    DAYS = 'days'
}

const CampaignContainer = () => {
    const initPrice = (mockCampaingData.minUsers*mockCampaingData.pricePerUser)*mockCampaingData.minDays
    const [totalPrice, setTotalPrice] = useState(Math.round(initPrice))
    const [amountOfUsers, setAmountOfUsers] = useState(mockCampaingData.minUsers)
    const [amountOfDays, setAmountOfDays] = useState(mockCampaingData.minDays)

    const onChange = (val: number, key: string) => {
        switch (key) {
            case keys.PEOPLE:
                setAmountOfUsers(val)
                break
            case keys.DAYS:
                setAmountOfDays(val)
                break
            default:
                return
        }
        const total = Math.round((amountOfUsers*mockCampaingData.pricePerUser)*amountOfDays)
        setTotalPrice(total)
    }

    return (
        <div>
            <Result label="Your campaign cost:" result={`${totalPrice} €`} />
            <SliderForm 
                onChange={onChange}
                sliderModels={
                [{
                    unit: 'people',
                    label: 'I want to reach',
                    value: amountOfUsers,
                    key: keys.PEOPLE,
                    min: mockCampaingData.minUsers,
                    max: mockCampaingData.maxUsers,
                    steps: 100
                },
                {
                    unit: 'days',
                    label: 'I want to run campaign for',
                    value: amountOfDays,
                    key: keys.DAYS,
                    min: mockCampaingData.minDays,
                    max: mockCampaingData.maxDays
                }]
            } />
        </div>
    )
}

export default CampaignContainer