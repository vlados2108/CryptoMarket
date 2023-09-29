import Header from './shared/header'
import './layout.scss'
import { GlobalContextProvider } from './context'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
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
