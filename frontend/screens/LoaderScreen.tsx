import {Dimensions, Image, View} from "react-native";
import {useEffect, useState} from "react";

export default function LoaderScreen() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const urlImage = 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

    useEffect(() => {
        Image.getSize(urlImage, () => {
            // calculate image width and height
            const screenWidth = Dimensions.get('window').width
            const imageHeight = Dimensions.get('window').height
            setWidth(screenWidth);
            setHeight(imageHeight);
        })
    }, []);


    return (
        <View>
            <Image
                style={{width: width, height: height}}
                source={{uri: urlImage}}
            />
        </View>
    )
}
