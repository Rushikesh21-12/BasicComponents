import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default function ImagePickerScreen(){

    const [image, setImage] = useState('https://reactjs.org/logo-og.png')

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path)
        });          
    }

    const choosePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
        });
    }

    return(
        <View>
            <Text>Image Picker</Text>

            <Button 
                title = 'Take Photo'
                onPress = {takePhotoFromCamera}
            />
            <Button 
                title = 'Choose Form Gallery'
                onPress = {choosePhotoFromGallery}
            />
            
            <Image
                source = {{uri : image}}
                style={{width: 400, height: 400}}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
 
});