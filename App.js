import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import Registration from "./Screens/RegistrationScreen.jsx";
import Login from "./Screens/LoginScreen.jsx";
import Post from "./Screens/PostScreen.jsx";

const MainStack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
	});
	if (!fontsLoaded) return null;

	return (
		<NavigationContainer>
			<MainStack.Navigator
				initialRouteName="Registration"
				screenOptions={{
					headerShown: false,
				}}
			>
				<MainStack.Screen name="Registration" component={Registration} />
				<MainStack.Screen name="Login" component={Login} />
				<MainStack.Screen name="Post" component={Post} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
});
