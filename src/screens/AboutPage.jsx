import MainLayout from '../layouts/MainLayout';
import React from "react"
import { Button } from "react-native"
// import MainLayout from '../layouts/MainLayout';

// import { Button } from "react-native"

function AboutScreen({ navigation }) {
    // ...
    return (
        <MainLayout>
            /* ... */
            <Button title="Go to About"
            onPress={() => navigation.navigate('About')}/>
            /* ... */
        </MainLayout>
    );
}
export default AboutScreen;