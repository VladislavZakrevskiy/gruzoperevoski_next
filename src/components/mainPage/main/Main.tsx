import { Button, Card, HStack, Typography, VStack } from '@/components/ui'
import styles from './Main.module.scss'
import Image from 'next/image'

export const Main = () => {
    return (
        <HStack tag="section" className={styles.container} gap={4}>
            <Card>
                <VStack gap={20}>
                    <VStack gap={4}>
                        <Typography.Title>Грузоперевозки по РФ</Typography.Title>
                        <Typography.Paragraph>Коммерческое предложение</Typography.Paragraph>
                        <Typography.Paragraph>
                            Доверяйте свою грузоперевозку профессионалам! Мы предлагаем надежные и оперативные перевозки
                            по всей России, гарантируя сохранность вашего груза и соблюдение сроков доставки. Наши
                            опытные водители и современный автопарк обеспечат безопасность и точность выполнения заказа.
                            Независимо от объема и сложности, мы доставим ваш груз в любую точку страны. Выбирайте нас,
                            чтобы сэкономить время и нервы!
                        </Typography.Paragraph>
                    </VStack>
                    <Button>Связаться с нами</Button>
                </VStack>
            </Card>
            <div className={styles.truckContainer}>
                <Image width={2695} height={1820} className={styles.truck} src={'/truck.png'} alt="truck" />
            </div>
        </HStack>
    )
}
