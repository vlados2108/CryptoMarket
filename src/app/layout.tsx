import Header from './header'
import "../styles/css/layout.css"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
