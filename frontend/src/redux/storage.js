// Function to save state to localStorage
export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

// Function to load state from localStorage
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};
