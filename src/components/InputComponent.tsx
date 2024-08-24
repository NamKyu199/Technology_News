import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HelperText, TextInput } from 'react-native-paper';

const InputComponent = (props: any) => {
    const {
        onChangeValueInput,
        field: { name },
        form: { touched, errors, values, handleChange, handleBlur },
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];

    const handleOnChangeText = (text: string) => {
        handleChange(name)(text);
        onChangeValueInput && onChangeValueInput(text);
    };

    return (
        <View style={styles.groupTextInput}>
            <TextInput
                theme={{
                    colors: {
                        onSurfaceVariant: '#0000004',
                    },
                }}
                outlineColor='#D9D9D9'
                mode="outlined"
                value={values[name]}
                onChangeText={handleOnChangeText}
                onBlur={handleBlur(name)}
                {...inputProps}
            />
            {hasError && <HelperText type='error'>{errors[name]}</HelperText>}
        </View>
    );
};

const styles = StyleSheet.create({
    groupTextInput: {
        paddingVertical: 5,
    },
});

export default InputComponent;