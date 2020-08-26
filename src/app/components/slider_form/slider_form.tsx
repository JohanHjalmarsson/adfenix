import React from 'react'
import Slider from '@material-ui/core/Slider'
import styles from './slider_form.module.css'

type SliderModel = {
    unit: string,
    key: string,
    label: string,
    value: number,
    min: number,
    max: number,
    steps?: number
}

interface props {
    sliderModels: SliderModel[],
    onChange: (val: number, key: string) => void
}

const SliderForm = ({sliderModels, onChange}:props) => {
    const sliderOnChange = (val: number | number[], key: string) => {
        onChange(Array.isArray(val) ? val[0] : val, key)
    }
    return (
        <div>
            <div className={styles.form}>
                {sliderModels.map(sliderModel => {
                    return (
                        <div className={styles.slider_container} key={sliderModel.key}>
                            <label>
                                <div className={styles.label_container}>
                                    <p>{sliderModel.label}</p>
                                    <p>{sliderModel.value} {sliderModel.unit}</p>
                                </div>
                                <Slider 
                                min={sliderModel.min}
                                max={sliderModel.max}
                                step={sliderModel.steps || 1}
                                name={sliderModel.key} 
                                value={sliderModel.value} 
                                onChange={(e: React.ChangeEvent<{}>, val: number | number[]) => 
                                sliderOnChange(val, sliderModel.key)} />
                                <div className={styles.label_container}>
                                    <p>{sliderModel.min} {sliderModel.unit}</p>
                                    <p>{sliderModel.max} {sliderModel.unit}</p>
                                </div>
                            </label>
                            
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default SliderForm