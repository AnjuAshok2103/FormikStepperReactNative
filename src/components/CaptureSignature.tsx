import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import Icon from '@react-native-vector-icons/material-design-icons';
import { getIn, useFormikContext } from 'formik';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'; // <-- Import useEffect
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { Button } from 'react-native-paper';
import SignatureView from 'react-native-signature-canvas';
import { useAppTheme } from '../hooks/useAppTheme';
import { CustomThemeContext } from '../context/CustomThemeContext';

interface Props {
  name: string;
  label: string;
  path: string;
}
const { width } = Dimensions.get('window');
export const IMAGE_HEIGHT = 200;

const CaptureSignature = ({ name, path, label }: Props) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const signatureRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const { values, setFieldValue } = useFormikContext<any>();
  const fullPath = `${path}.${name}`;
  const { colors } = useAppTheme();
  const { isDarkTheme } = useContext(CustomThemeContext);

  // Use a single state variable for the file path
  const [signatureFilePath, setSignatureFilePath] = useState<string | null>(
    getIn(values, fullPath),
  );

  useEffect(() => {
    // This effect ensures the component re-renders when Formik's value changes
    setSignatureFilePath(getIn(values, fullPath));
  }, [values, fullPath]);

  const handleClear = () => {
    setSignatureFilePath(null);
    setFieldValue(fullPath, null); // Clear the value in Formik
  };

  const saveBase64ToFile = async (base64: string): Promise<string> => {
    const base64Data = base64.replace('data:image/png;base64,', '');
    const fileName = `signature_${Date.now()}.png`;
    const filePath = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${fileName}`;
    await ReactNativeBlobUtil.fs.writeFile(filePath, base64Data, 'base64');
    return filePath;
  };

  const handleOK = async (signatureBase64: string) => {
    try {
      const newFilePath = await saveBase64ToFile(signatureBase64);
      setSignatureFilePath(newFilePath); // Update the state with the new file path
      setFieldValue(fullPath, newFilePath); // Update Formik's value
      bottomSheetRef.current?.close();
    } catch (error) {
      Alert.alert('Error', 'Failed to save signature.');
      console.error(error);
    }
  };

  const handleEmpty = () => {
    Alert.alert('Please provide a signature.');
  };

  return (
    <View style={{ flex: 1, gap: 10 }}>
      {signatureFilePath && (
        <View style={{ gap: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Signature Captured</Text>
            <TouchableOpacity
              style={{ flexDirection: 'row', gap: 6 }}
              onPress={handleClear}
            >
              <Icon name="trash-can-outline" color={colors.link} size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{ uri: `file://${signatureFilePath}` }}
              style={{
                height: IMAGE_HEIGHT / 2,
                borderWidth: 1,
                borderColor: 'gray',
                backgroundColor: 'white',
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
      <Button
        mode="outlined"
        onPress={() => bottomSheetRef.current?.present()}
        theme={{ roundness: 1 }}
        textColor={colors.utiliron}
        buttonColor="transparent"
        style={[
          {
            borderWidth: 1,
            borderColor: isDarkTheme ? colors.utiliron : colors.link,
          },
        ]}
      >
        Capture Signature
      </Button>
      <BottomSheetModal ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <BottomSheetView style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 1, gap: 10 }}>
            <View
              style={{
                justifyContent: 'flex-end',
                marginTop: 10,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: 'row', gap: 6 }}
                onPress={() => {
                  signatureRef?.current?.clearSignature();
                }}
              >
                <Icon name="redo" color={colors.link} size={20} />
                <Text
                  style={{ fontSize: 14, fontWeight: 400, color: colors.link }}
                >
                  {'Reset'}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                borderRadius: 8,
                overflow: 'hidden',
                marginBottom: 20,
                borderColor: colors.outline,
                height: IMAGE_HEIGHT,
              }}
            >
              <SignatureView
                ref={signatureRef}
                onOK={handleOK}
                onEmpty={handleEmpty}
                webStyle={`.m-signature-pad {box-shadow: none; border: none; } 
                .m-signature-pad--body {border: none;}
                .m-signature-pad--footer {display: none; margin: 0px;}
                body,html {
                width: ${width}px; height: ${IMAGE_HEIGHT}px}`}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Button
                theme={{
                  roundness: 1,
                }}
                mode="contained"
                onPress={() => bottomSheetRef.current?.close()}
                style={{
                  borderColor: isDarkTheme ? colors.utiliron : colors.link,
                }}
                labelStyle={{ fontWeight: '700', fontSize: 16 }}
                textColor={colors.utiliron}
                buttonColor={'transparent'}
              >
                Cancel
              </Button>
              <Button
                theme={{
                  roundness: 1,
                }}
                mode="outlined"
                onPress={() => {
                  signatureRef.current?.readSignature();
                }}
                labelStyle={{ fontWeight: '700', fontSize: 16 }}
                textColor={isDarkTheme ? colors.primaryText : colors.pageBg}
                buttonColor={colors.brandColor}
                style={{
                  borderColor: 'transparent',
                }}
              >
                Save
              </Button>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default CaptureSignature;
