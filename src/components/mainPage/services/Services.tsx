import { Typography } from '@/components/ui'
import styles from './Services.module.scss'
const services = [
    { title: 'Обычные грузы', description: 'Доставка по всей России', image: 'truck.png' },
    {
        title: 'Скоропортящиеся товары',
        description: 'Транспортировка скоропортящихся товаров',
        image: '/truck.png',
    },
    { title: 'Зерно', description: 'Качественная перевозка зерна', image: 'truck.png' },
    { title: 'Сельскохозяйственные продукты', description: 'Перевозка свежих продуктов', image: 'truck.png' },
]

export function Services() {
    return (
        <div className={styles.parallaxContainer}>
            {services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                    <Typography.Title size={24} style={{ wordWrap: 'break-word' }}>
                        {service.title}
                    </Typography.Title>
                    <Typography.Paragraph>{service.description}</Typography.Paragraph>
                </div>
            ))}
        </div>
    )
}
