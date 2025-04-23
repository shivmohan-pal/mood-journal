export const newJSONItem = (itemName, itemValue) => {
  const stringValue = JSON.stringify(itemValue);
  const stringName = String(itemName);
  localStorage.setItem(stringName, stringValue);
};

export const unshiftToJSONItem = (itemName, newValue) => {
  const stringName = String(itemName);
  const localItem = localStorage.getItem(stringName);
  if (!localItem) return false;

  const jsonData = JSON.parse(localItem);
  if (Array.isArray(jsonData)) {
    jsonData.unshift(newValue);
  } else {
    return false;
  }

  const stringValue = JSON.stringify(jsonData);
  localStorage.setItem(itemName, stringValue);

  return true;
};

export const getJSONItem = (itemName) => {
  const stringName = String(itemName);
  const localItem = localStorage.getItem(stringName);
  if (!localItem) return false;

  const jsonData = JSON.parse(localItem);
  
  return jsonData;
};
