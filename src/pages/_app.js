import "@/styles/globals.css";
import { NavigationBar } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-500 flex flex-col h-screen">
      <div className="container mt-4">
        <NavigationBar />
      </div>
      <div className="container bg-white rounded-xl my-4 py-8 flex-grow">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
