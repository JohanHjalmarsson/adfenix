import React from 'react'
import styles from './result.module.css'

interface props {
    label: string,
    result: string
}

const Result = ({label, result}:props) => {
    return (
        <div className={styles.container}>
            <h2>{label}</h2>
            <h2>{result}</h2>
        </div>
    )
}

export default Result