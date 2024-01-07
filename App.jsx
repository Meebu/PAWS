import { useEffect } from "react";
import { AppRouter } from "./components/extra-components";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <AppRouter />
  )
}