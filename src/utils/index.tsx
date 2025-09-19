// Utility function to safely access nested properties
// export const get = (obj: any, path: string): any => {
//   return path.split('.').reduce((acc, part) => acc && acc[part], obj);
// };
export const get = (obj: any, path: string): any => {
  return path
    .replace(/\[(\d+)\]/g, '.$1') // turn appliances[0] → appliances.0
    .split('.')
    .reduce((acc, part) => (acc ? acc[part] : undefined), obj);
};

export function formatAddress(
  city?: string,
  state?: string,
  zip?: string,
): string {
  const parts = [state, zip].filter(Boolean).join(' ');

  if (city && parts) {
    return `${city}, ${parts}`;
  }

  return city || parts || '';
}

// Convert seconds to MM:SS format
export const formatTimeMM_SS = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export function filterApplianceArray(obj: any) {
  // 1. Base Case: If the current item isn't an object, we can't go deeper.
  //    This stops the recursion.
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  // 2. Iterate Through Keys: Loop through all properties of the current object.
  for (const key in obj) {
    // We use a safe check to ensure we're only looking at the object's own properties.
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // 3. The Condition: Check if the current value is an array named 'appliances'.
      //    This is where we find our target array.
      if (key === 'appliances' && Array.isArray(value)) {
        // 4. Action: If it's the right array, we filter it.
        //    We replace the original array with a new one that only has objects
        //    where either 'inventory' or 'stubs' is greater than 0.
        obj[key] = value.filter(item => item.inventory > 0 || item.stubs > 0);
      }

      // 5. Recursion: If the value is a nested object, we call the function again.
      //    This allows the search to continue down into the next level of the data.
      else if (typeof value === 'object') {
        filterApplianceArray(value);
      }
    }
  }
}

export function filterReview(obj: any) {
  return delete obj.review;
}
// Helper function to convert a string to Title Case
export const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
