import { useFonts } from "expo-font";


const fuentes = () => {
    const [loaded] = useFonts({
        Sansation: require('./assets/fonts/Sansation_Regular.ttf')
    })
}

export default fuentes