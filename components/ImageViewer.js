import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ PlaceholderImageScource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImageScource

    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});