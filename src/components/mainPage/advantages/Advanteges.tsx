import styles from './Advanteges.module.scss'
import { MdLocalShipping, MdDirectionsCar, MdCheckCircle } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'

const steps = [
    { icon: <MdLocalShipping />, label: 'Груз загружен' },
    { icon: <MdDirectionsCar />, label: 'В пути' },
    { icon: <MdCheckCircle />, label: 'Доставлен' },
]

export function Advanteges() {
    return (
        <div className={styles.container}>
            <div className={styles.stepContainer}>
                {steps.map((step, index) => {
                    const angle = (index / steps.length) * 360
                    const transform = `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`

                    return (
                        <div key={index} className={styles.step} style={{ transform }}>
                            <div className={styles.icon}>{step.icon}</div>
                            <p>{step.label}</p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.truckIcon}>
                <FaTruck size={24} />
            </div>
        </div>
    )
}
