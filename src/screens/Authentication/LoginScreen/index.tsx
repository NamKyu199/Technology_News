import { View, Text, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Eye, EyeSlash, ProfileCircle, ShieldSecurity } from 'iconsax-react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-ui-lib';
import styles from './styles';
import SelectLanguage from '~components/SelectLanguage';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { SignInSchema } from '~utils/Validation';
import InputComponent from '~components/InputComponent';
import LottieView from 'lottie-react-native';
import { ANIMATION } from '~utils/svg';
import AppImage from '~utils/png';
import CheckBox from '~components/CheckBox';

const LoginScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleLogin = async (phoneNumber: string, password: string) => { };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
          <SelectLanguage />
        </View>
        <View style={styles.content}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              marginBottom: 10,
            }}>
            <LottieView
              source={ANIMATION.lines}
              loop
              autoPlay
              style={{ width: 200, height: 200, position: 'absolute' }}
            />
            <View
              style={[
                {
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Avatar.Image size={110} source={AppImage.avatarDefault} />
            </View>
          </View>
          <Image style={styles.logo} source={AppImage.logoDefault} />
          <Text style={styles.textGetting}>{t('common:getting')}</Text>

          <Formik
            initialValues={{ phoneNumber: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={values =>
              handleLogin(values.phoneNumber, values.password)
            }>
            {({ handleSubmit, isValid }) => (
              <View>
                <Field
                  component={InputComponent}
                  name="phoneNumber"
                  keyboardType="numeric"
                  label={t('label:email')}
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <ProfileCircle
                          size={20}
                          color={'#6655D0'}
                        />
                      )}
                    />
                  }
                />
                <Field
                  component={InputComponent}
                  name="password"
                  label={t('label:password')}
                  secureTextEntry={!isShowPassword}
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <ShieldSecurity
                          size={20}
                          color={'#6655D0'}
                        />
                      )}
                    />
                  }
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                          {isShowPassword ? (
                            <Eye size={20} color="#9FADC0" />
                          ) : (
                            <EyeSlash size={20} color="#9FADC0" />
                          )}
                        </TouchableOpacity>
                      )}
                    />
                  }
                />
                <View style={styles.formOption}>
                  <CheckBox
                    title={t('common:rememberMe')}
                    isChecked={checked}
                    onPress={() => setChecked(!checked)}
                  />
                  <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPassword}>
                      {t('common:forgotPassword')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, gap: 5 }}>
                  <Button
                    style={styles.button}
                    mode="contained"
                    buttonColor="#D252A5"
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                  >
                    {t('button:signIn')}
                  </Button>
                  <Button
                    style={styles.button}
                    mode="contained"
                    buttonColor="#6655D0"
                    onPress={handleRegister}
                  >
                    {t('button:signUp')}
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <View
          style={{
            gap: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen