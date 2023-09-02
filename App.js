import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Registration from "./Screens/RegistrationScreen.jsx";
import Login from "./Screens/LoginScreen.jsx";

const MainStack = createStackNavigator();

export default function App() {
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
				{/* <MainStack.Screen name="Post" component={Post} /> */}
			</MainStack.Navigator>
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<Registration />
		// 	{/* <Text>Open up App.js to start working on your app!</Text>
		// 	<Text>text</Text> */}
		// 	<StatusBar style="auto" />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		justifyContent: "center",
	},
});
