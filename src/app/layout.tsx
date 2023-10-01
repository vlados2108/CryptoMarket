import Header from './shared/Header'
import './layout.scss'
import { GlobalContextProvider } from './Context'
import { ReactElement } from 'react'
const RootLayout =({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body>
                <GlobalContextProvider>
                    <Header />
                    {children}
                </GlobalContextProvider>
            </body>
        </html>
    )
}
export default RootLayout
