import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	KeyboardAvoidingView,
	ImageBackground,
	TextInput,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Alert,
	Keyboard,
	Dimensions,
} from "react-native";
import bgImage from "../assets/images/reg-scr-bg.jpg";

const Login = () => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordStatusHidden, setPasswordStatusHidden] = useState(true);
	const [onInputFocus, setOnInputFocus] = useState("");
	const [keyboardStatusHidden, setKeyboardStatusHidden] = useState(true);

	const navigation = useNavigation();

	const onLogin = () => {
		Alert.alert(
			"Login data :",
			`email: ${emailInput}\npassword: ${passwordInput}`
		);
	};

	useEffect(() => {
		const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardStatusHidden(false);
		});
		const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardStatusHidden(true);
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	const togglePasswordStatusHidden = () => {
		setPasswordStatusHidden(!passwordStatusHidden);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<ImageBackground
					style={{
						...styles.bgImage,
						paddingTop: keyboardStatusHidden ? 325 : 275,
					}}
					source={bgImage}
					resizeMode="cover"
				>
					<View style={styles.contentWrapper}>
						<Text style={{ ...styles.sectionTitle }}>Увійти</Text>
						<KeyboardAvoidingView
							behavior={Platform.OS == "ios" ? "padding" : "height"}
							style={{ flex: 1 }}
						>
							<View style={{ ...styles.inputsWrapper, flex: 1 }}>
								<TextInput
									style={
										onInputFocus === "email"
											? { ...styles.input, ...styles.inputFocus }
											: { ...styles.input, ...styles.inputDefault }
									}
									placeholder="Адреса електронної пошти"
									selectionColor={"#FF6C00"}
									onFocus={() => setOnInputFocus("email")}
									value={emailInput}
									onChangeText={setEmailInput}
								/>
								<View>
									<TextInput
										style={
											onInputFocus === "password"
												? { ...styles.input, ...styles.inputFocus }
												: { ...styles.input, ...styles.inputDefault }
										}
										placeholder="Пароль"
										selectionColor={"#FF6C00"}
										onFocus={() => setOnInputFocus("password")}
										secureTextEntry={passwordStatusHidden}
										value={passwordInput}
										onChangeText={setPasswordInput}
									/>
									<TouchableOpacity
										style={styles.passwordStatus}
										onPress={togglePasswordStatusHidden}
									>
										<Text style={{ color: "#1B4371" }}>
											{passwordStatusHidden ? "Показати" : "Сховати"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</KeyboardAvoidingView>
						<View style={{ paddingBottom: 110 }}>
							<Pressable style={styles.registrationButton} onPress={onLogin}>
								<Text style={styles.registrationButtonText}>Увійти</Text>
							</Pressable>
							<Pressable
								style={styles.buttonAlreadyLogin}
								onPress={() => navigation.navigate("Registration")}
							>
								<Text style={styles.loginLink}>
									Немає акаунту?{" "}
									<Text
										style={{
											textDecorationLine: "underline",
											textDecorationStyle: "solid",
											textDecorationColor: "#1B4371",
										}}
									>
										Зареєструватися
									</Text>
								</Text>
							</Pressable>
						</View>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	contentWrapper: {
		flex: 1,
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor: "#FFFFFF",
	},
	bgImage: {
		position: "absolute",
		left: 0,
		top: 0,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		// paddingTop: 263,
		// paddingTop: 325,
		// flex: 1,
		// justifyContent: "flex-end",
	},
	input: {
		marginBottom: 16,
		paddingLeft: 16,
		height: 50,

		borderWidth: 1,
		borderRadius: 10,
	},
	inputDefault: {
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
	},
	inputFocus: {
		backgroundColor: "#F6F6F6",
		borderColor: "#FF6C00",
		color: "#212121",
	},
	inputsWrapper: {
		marginBottom: 27,
	},
	sectionTitle: {
		marginBottom: 32,
		fontFamily: "Roboto-Regular",
		textAlign: "center",
		fontSize: 30,
		color: "#212121",
	},
	registrationButton: {
		height: 51,
		marginBottom: 16,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FF6C00",
		borderRadius: 100,
	},
	registrationButtonText: {
		fontSize: 16,
		color: "#FFFFFF",
	},
	loginLink: {
		color: "#1B4371",
		textAlign: "center",
	},
	passwordStatus: {
		position: "absolute",
		top: 16,
		right: 16,
	},
});

export default Login;
