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
