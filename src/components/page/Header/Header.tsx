import Image from 'next/image'
import styles from './Header.module.scss'
import favicon from '@/app/icon.svg'
import { HStack, Typography } from '@/components/ui'
import { BurgerMenu } from '../Menu/Menu'

export const Header = () => {
    return (
        <header className={styles.header}>
            <HStack justifyContent="space-around">
                <HStack max gap={4} alignItems="center">
                    <Image className={styles.icon} width={60} height={60} alt="icon" src={favicon} />
                    <Typography.Title color="card">Грузоперевозки по РФ</Typography.Title>
                </HStack>

                <BurgerMenu />
            </HStack>
        </header>
    )
}
