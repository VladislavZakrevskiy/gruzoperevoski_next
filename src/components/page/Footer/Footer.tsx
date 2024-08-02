import { Typography, VStack } from '@/components/ui'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <VStack gap={8}>
                <Typography.Title color="card" tag="h4" size={24}>
                    Транспортная компания «Грузоперевозки по РФ»
                </Typography.Title>
                <Typography.Paragraph color="card">Коммерческое предложение</Typography.Paragraph>
                <VStack gap={2}>
                    <Typography.Paragraph color="card">ИП Петровский С.С.</Typography.Paragraph>
                    <Typography.Paragraph color="card">ИНН 615489990506</Typography.Paragraph>
                    <Typography.Paragraph color="card">ОГРНИП 321619600142200</Typography.Paragraph>
                </VStack>
            </VStack>
            <VStack gap={3} justifyContent="end">
                <Typography.Paragraph color="card">+7 904-347-24-22</Typography.Paragraph>
                <Typography.Paragraph color="card">elvira-petrovskay@bk.ru</Typography.Paragraph>
                <Typography.Paragraph color="card">@elviralogist</Typography.Paragraph>
            </VStack>
        </footer>
    )
}
