import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components/page'
import './global.css'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Грузоперевозки по РФ',
    description: 'Транспортная компания "Грузоперевозки по РФ"',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <body className={classNames(inter.className)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
