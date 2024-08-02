import { Card, Typography, VStack } from '@/components/ui'
import styles from './Park.module.scss'

export const Park = () => {
    return (
        <section className={styles.transportInfo}>
            <Typography.Title tag="h2">Наш автопарк</Typography.Title>
            <Typography.Paragraph>
                Мы предоставляем полный спектр услуг по грузоперевозкам по всей России, используя наш современный
                автопарк, включающий фуры и специализированные зерновозы. С нами ваш груз всегда в надежных руках!
            </Typography.Paragraph>

            <div className={styles.grid}>
                <Card color="primary" borderWidth={5}>
                    <VStack gap={4}>
                        <Typography.Title size={30} tag="h3">
                            Перевозка обычных грузов
                        </Typography.Title>
                        <Typography.Paragraph>
                            Надежная и своевременная доставка разнообразных грузов по всей стране. Наши фуры
                            обеспечивают безопасную транспортировку любых товаров, от строительных материалов до мебели
                            и техники.
                        </Typography.Paragraph>
                    </VStack>
                </Card>

                <Card color="primary" borderWidth={5}>
                    <VStack gap={4}>
                        <Typography.Title size={30} tag="h3">
                            Перевозка скоропортящихся товаров
                        </Typography.Title>
                        <Typography.Paragraph>
                            Для транспортировки продуктов питания и других скоропортящихся товаров мы используем
                            рефрижераторы, которые поддерживают нужную температуру на протяжении всего пути.
                        </Typography.Paragraph>
                    </VStack>
                </Card>

                <Card color="primary" borderWidth={5}>
                    <VStack gap={4}>
                        <Typography.Title size={30} tag="h3">
                            Перевозка зерна
                        </Typography.Title>
                        <Typography.Paragraph>
                            Наши специализированные зерновозы обеспечат качественную и аккуратную перевозку зерновых
                            культур, независимо от объема и расстояния.
                        </Typography.Paragraph>
                    </VStack>
                </Card>

                <Card color="primary" borderWidth={5}>
                    <VStack gap={4}>
                        <Typography.Title size={30} tag="h3">
                            Перевозка сельскохозяйственных продуктов
                        </Typography.Title>
                        <Typography.Paragraph>
                            Морковь, картофель и другие сельскохозяйственные продукты будут доставлены в первозданном
                            виде благодаря нашему оборудованному транспорту.
                        </Typography.Paragraph>
                    </VStack>
                </Card>
            </div>
        </section>
    )
}
