import * as Yup from 'yup';
// const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailValidation = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

export const SignInSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(emailValidation, 'Email không hợp lệ')
        .required('Trường này không được để trống'),
    password: Yup.string()
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .max(15, 'Mật khẩu không được quá 15 ký tự')
        .required('Trường này không được để trống'),
});