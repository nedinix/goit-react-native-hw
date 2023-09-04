import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle, Path } from "react-native-svg";
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
	Image,
	Keyboard,
	Dimensions,
	Alert,
} from "react-native";
import bgImage from "../assets/images/reg-scr-bg.jpg";

const Registration = () => {
	const [loginInput, setLogiInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordStatusHidden, setPasswordStatusHidden] = useState(true);
	const [onInputFocus, setOnInputFocus] = useState("");
	const [keyboardStatusHidden, setKeyboardStatusHidden] = useState(true);

	const navigation = useNavigation();

	const onRegister = () => {
		Alert.alert(
			"Login data :",
			`login: ${loginInput}\nemail: ${emailInput}\npassword: ${passwordInput}`
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
						paddingTop: keyboardStatusHidden ? 260 : 150,
					}}
					source={bgImage}
					resizeMode="cover"
				>
					<View
						style={{
							...styles.formWrapper,
						}}
					>
						<View style={{ ...styles.profileImageWrapper }}>
							<Image
								style={styles.profileImage}
								source={require("../assets/images/profile-default.png")}
							/>
							<Svg
								style={styles.profileAddIcon}
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<Circle
									cx="12.5"
									cy="12.5"
									r="12"
									fill="white"
									stroke="#FF6C00"
								/>
								<Path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
									fill="#FF6C00"
								/>
							</Svg>
						</View>
						<Text style={styles.sectionTitle}>Реєстрація</Text>

						<KeyboardAvoidingView
							behavior={Platform.OS == "ios" ? "padding" : "height"}
							style={{ flex: 1 }}
						>
							<View style={styles.inputsWrapper}>
								<TextInput
									style={
										onInputFocus === "login"
											? { ...styles.input, ...styles.inputFocus }
											: { ...styles.input, ...styles.inputDefault }
									}
									placeholder="Логін"
									selectionColor={"#FF6C00"}
									onFocus={() => setOnInputFocus("login")}
									value={loginInput}
									onChangeText={setLogiInput}
								/>
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
						<View>
							<Pressable style={styles.registrationButton} onPress={onRegister}>
								<Text style={styles.registrationButtonText}>
									Зареєструватися
								</Text>
							</Pressable>
							<Pressable
								style={styles.buttonAlreadyLogin}
								onPress={() => navigation.navigate("Login")}
							>
								<Text style={styles.loginLink}>Вже є аккаунт? Увійти</Text>
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
	},
	formWrapper: {
		flex: 1,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 45,
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
		paddingTop: 263,
	},
	profileImageWrapper: {
		marginTop: -60,
		marginBottom: 32,
		width: 120,
		height: 120,

		alignSelf: "center",
		position: "relative",
	},

	profileImage: {
		width: 120,
		height: 120,
	},
	profileAddIcon: {
		position: "absolute",
		left: 107,
		bottom: 14,
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
		// color: "#1B4371",
		color: "#212121",
	},
	registrationButton: {
		height: 51,
		marginBottom: 16,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		// color: "#FFFFFF",
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

export default Registration;
