import Header from '../components/Header';
import Footer from '../components/Footer';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl px-4 pt-8 pb-16">
      <div className="flex-grow">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </div>
  )
}