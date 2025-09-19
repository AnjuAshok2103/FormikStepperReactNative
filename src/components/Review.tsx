import { useFormikContext } from 'formik';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { toTitleCase } from '../utils';
import { useAppTheme } from '../hooks/useAppTheme';

const Review = () => {
  const { values } = useFormikContext<any>();
  const { colors } = useAppTheme();
  // A simplified function to render data from a single object layer
  const renderItem = (key: string, value: any): React.ReactNode => {
    // Add this check to skip the "review" key
    if (key === 'review') {
      return null;
    }
    // 1. Handle primitive types (string, number, boolean)
    if (
      typeof value === 'number' ||
      typeof value === 'string' ||
      typeof value === 'boolean'
    ) {
      if (key === 'signature') {
        // Correctly return an Image component with the base64 string as source
        return (
          <View key={key} style={styles.signatureContainer}>
            <Text style={styles.sectionTitle}>Signature</Text>
            <Image source={{ uri: value }} style={styles.signatureImage} />
          </View>
        );
      } else {
        // Return a Text component for all other primitive types
        return (
          <View
            key={key}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.fieldLabel}>{`${key}: `}</Text>
            <Text style={styles.fieldLabel}>{`${value}`}</Text>
          </View>
        );
      }
    }
    // 2. Handle arrays
    if (Array.isArray(value)) {
      // a. Special case for photos
      if (key === 'photos') {
        return (
          <View key={key} style={styles.imageContainer}>
            <Text style={styles.sectionTitle}>Photos</Text>
            {value.map((item, index) => (
              <Image
                key={index}
                source={{ uri: item.uri }}
                style={styles.image}
              />
            ))}
          </View>
        );
      }
      // b. Special case for appliances
      if (key === 'appliances') {
        return (
          <View key={key} style={styles.applianceContainer}>
            <Text style={styles.sectionTitle}>Appliances</Text>
            {value.map((item: any, index: number) => (
              <View key={index} style={styles.applianceItem}>
                <Text style={styles.fieldLabel}>{item.name}</Text>
                <Text>{`Inventory: ${item.inventory}`}</Text>
                <Text>{`Stubs: ${item.stubs}`}</Text>
              </View>
            ))}
          </View>
        );
      }
      // c. General case for other string arrays (e.g., multi-select)
      return (
        <View key={key} style={styles.arrayContainer}>
          <Text style={styles.sectionTitle}>{key}</Text>
          {value.map((item: any, index: number) => (
            <Text key={index} style={styles.fieldLabel}>
              - {item}
            </Text>
          ))}
        </View>
      );
    }

    // 3. If it's a nested object, render a new section
    if (typeof value === 'object' && key !== 'confirmation' && value !== null) {
      return (
        <View
          key={key}
          style={[styles.section, { backgroundColor: colors.accentBg }]}
        >
          <Text style={styles.sectionTitle}>{toTitleCase(key)}</Text>
          {Object.entries(value).map(([nestedKey, nestedValue]) =>
            renderItem(nestedKey, nestedValue),
          )}
        </View>
      );
    }
    return null; // Return null for any unhandled types
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(values).map(([key, value]) => renderItem(key, value))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5,
  },
  applianceContainer: {
    marginBottom: 10,
  },
  applianceItem: {
    marginBottom: 5,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#ccc',
  },
  arrayContainer: {
    marginBottom: 10,
  },
  signatureContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  signatureImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Review;
