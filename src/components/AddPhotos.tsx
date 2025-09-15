import Icon from '@react-native-vector-icons/material-design-icons';
import { getIn, useFormikContext } from 'formik';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';
import { Button } from 'react-native-paper';

interface Props {
  name: string;
  label: string;
  path: string;
}

const PHOTO_LIMIT = 10;

const AddPhotos = ({ name, path, label }: Props) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const fullPath = `${path}.${name}`;

  // Get the current photos directly from Formik state
  const selectedPhotos: Asset[] = getIn(values, fullPath) || [];

  const handleImagePicker = async (source: 'camera' | 'gallery') => {
    if (selectedPhotos.length >= PHOTO_LIMIT) {
      Alert.alert(
        'Limit Reached',
        `You can only add up to ${PHOTO_LIMIT} photos.`,
      );
      return;
    }

    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
    };

    let result: ImagePickerResponse;
    if (source === 'camera') {
      result = await launchCamera({ ...options, saveToPhotos: true });
    } else {
      result = await launchImageLibrary({
        ...options,
        selectionLimit: PHOTO_LIMIT - selectedPhotos.length,
      });
    }

    if (!result.didCancel && !result.errorCode && result.assets) {
      const newAssets = result.assets;
      const updatedPhotos = [...selectedPhotos, ...newAssets];
      setFieldValue(fullPath, updatedPhotos);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const updatedPhotos = selectedPhotos.filter(
      (_, index) => index !== indexToRemove,
    );
    setFieldValue(fullPath, updatedPhotos);
  };

  const createTwoButtonAlert = () =>
    Alert.alert('Add Photos', '', [
      {
        text: 'Take Photo',
        onPress: () => handleImagePicker('camera'),
      },
      {
        text: 'Choose from Gallery',
        onPress: () => handleImagePicker('gallery'),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

  return (
    <View style={styles.container}>
      {selectedPhotos.length > 0 && (
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {selectedPhotos.map((asset, index) => (
            <View key={asset.uri} style={styles.imageWrapper}>
              <Image source={{ uri: asset.uri }} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeImage(index)}
              >
                <Icon name="close" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      {/* {selectedPhotos.length < PHOTO_LIMIT && ( */}
      <Button
        mode="outlined"
        icon="camera"
        onPress={createTwoButtonAlert}
        style={styles.addButton}
      >
        Add Photos ({selectedPhotos.length}/{PHOTO_LIMIT})
      </Button>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingLeft: 5,
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 15,
  },
  image: {
    width: 80, // A larger, more visible preview
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  deleteButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginTop: 10,
  },
});

export default AddPhotos;
