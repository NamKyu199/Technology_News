import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { languages, AppLanguage } from "~translations/languages";
import AppImage from "~utils/png";
import Text from "./core/Text";
import { ArrowDown2 } from "iconsax-react-native";
import { ActionSheet } from 'react-native-ui-lib';
import { t } from 'i18next';
import { ThemeType } from "~constant/type";
import i18n from "~translations/i18n";

type SelectLanguageProps = {
  onPress?: () => void;
  theme?: ThemeType;
}

const SelectLanguage = ({
  onPress,
  theme = ThemeType.LIGHT,
}: SelectLanguageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [appLanguage, setAppLanguage] = useState<AppLanguage>(AppLanguage.vi);

  const handleChangeLanguage = (selectedLanguage: AppLanguage) => {
    setAppLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage)
    onPress && onPress();
  };

  const openChangeLanguage = () => {
    setIsOpen(true);
  };

  return (
    <TouchableOpacity onPress={openChangeLanguage} style={{ marginTop: 10 }}>
      <View style={styles.buttonChangeLanguage}>
        <Image style={styles.flag} source={appLanguage === AppLanguage.en ? AppImage.en : AppImage.vi} />
        <Text color={theme === ThemeType.LIGHT ? 'black' : 'white'}>
          {appLanguage.toUpperCase()}
        </Text>
        <ArrowDown2
          size="12"
          color={theme === ThemeType.LIGHT ? 'black' : 'white'}
          variant="Bold"
        />
      </View>
      <ActionSheet
        title={t('common:chooseLanguage')}
        useNativeIOS={true}
        cancelButtonIndex={3}
        destructiveButtonIndex={0}
        visible={isOpen}
        onDismiss={() => setIsOpen(false)}
        options={[
          {
            label: languages.en.nativeName,
            onPress: () => handleChangeLanguage(AppLanguage.en),
          },
          {
            label: languages.vi.nativeName,
            onPress: () => handleChangeLanguage(AppLanguage.vi),
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonChangeLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  flag: {
    height: 16,
    width: 24,
    borderRadius: 3,
  },
});

export default SelectLanguage;
