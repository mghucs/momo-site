import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from "next/dynamic";
import Slider from "../components/Slider";
// const Slider = dynamic(() => import("../components/Slider"), {
//   ssr: !!false,
// });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl px-4 pt-8 pb-16">
      <div className="flex-grow">
        <Header></Header>
        {/* <Slider></Slider> */}
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </div>
  )
}