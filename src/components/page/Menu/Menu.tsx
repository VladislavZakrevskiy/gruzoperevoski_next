'use client'
import { useState } from 'react'
import styles from './Menu.module.scss'
import { Button, Card, HStack, Typography, VStack } from '@/components/ui'

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <HStack justifyContent="center" alignItems="center">
                <div className={styles.burger} onClick={toggleMenu}>
                    <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
                </div>
            </HStack>
            <div className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
                <nav className={styles.nav}>
                    <div className={styles.opened_burger} onClick={toggleMenu}>
                        <div className={`${styles.line} ${styles.open}`}></div>
                        <div className={`${styles.line} ${styles.open}`}></div>
                        <div className={`${styles.line} ${styles.open}`}></div>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Typography.Link className={styles.link} href="#">
                                Услуги
                            </Typography.Link>
                        </li>
                        <li className={styles.listItem}>
                            <Typography.Link className={styles.link} href="#">
                                Перевозки
                            </Typography.Link>
                        </li>
                        <li className={styles.listItem}>
                            <Typography.Link className={styles.link} href="#">
                                Тарифы
                            </Typography.Link>
                        </li>
                        <li className={styles.listItem}>
                            <Typography.Link className={styles.link} href="#">
                                Контакты
                            </Typography.Link>
                        </li>
                    </ul>

                    <Card>
                        <VStack gap={8}>
                            <Typography.Paragraph>+7 904-347-24-22</Typography.Paragraph>
                            <Button>Связаться</Button>
                        </VStack>
                    </Card>
                </nav>
            </div>
        </>
    )
}
