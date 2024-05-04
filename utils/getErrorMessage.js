export const getErrorMessage = (errors, inputName) => {
    if (!inputName.includes(".")) {
      return {
        exists: !!errors[inputName]?.message,
        message: errors[inputName]?.message || null
      };
    } else {
      const nameParts = inputName.split(".");
      let errorObj = errors;
      for (const part of nameParts) {
        errorObj = errorObj[part];
        if (!errorObj) return { exists: false, message: null };
      }
      return {
        exists: "message" in errorObj,
        message: errorObj?.message || null
      };
    }
  };