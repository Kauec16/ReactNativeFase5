import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import ChoseTransport from "../pages/ChoseTransport";
import Way from "../pages/Way";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

        <Stack.Screen
                name="ChoseTransport"
                component={ChoseTransport}
                options={{headerShown: false}}
            />

        <Stack.Screen
                name="Way"
                component={Way}
                options={{headerShown: false}}
            />


        </Stack.Navigator>
    );
}