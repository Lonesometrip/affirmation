// Form validation utility functions

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// Validate phone number (basic validation)
export const isValidPhone = (phone) => {
  // Allow digits, spaces, parentheses, dashes, and plus sign
  const phoneRegex = /^[0-9\s()+\-]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 6;
};

// Validate required field
export const isNotEmpty = (value) => {
  return value.trim() !== '';
};

// Validate minimum length
export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

// Validate maximum length
export const hasMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
};

// Validate form fields
export const validateForm = (formData, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(fieldName => {
    const fieldRules = validationRules[fieldName];
    const fieldValue = formData[fieldName];
    
    // Check required
    if (fieldRules.required && !isNotEmpty(fieldValue)) {
      errors[fieldName] = fieldRules.requiredMessage || 'Dieses Feld ist erforderlich';
      return;
    }
    
    // Skip other validations if field is empty and not required
    if (!isNotEmpty(fieldValue) && !fieldRules.required) {
      return;
    }
    
    // Check min length
    if (fieldRules.minLength && !hasMinLength(fieldValue, fieldRules.minLength)) {
      errors[fieldName] = fieldRules.minLengthMessage || 
        `Dieses Feld muss mindestens ${fieldRules.minLength} Zeichen enthalten`;
      return;
    }
    
    // Check max length
    if (fieldRules.maxLength && !hasMaxLength(fieldValue, fieldRules.maxLength)) {
      errors[fieldName] = fieldRules.maxLengthMessage || 
        `Dieses Feld darf maximal ${fieldRules.maxLength} Zeichen enthalten`;
      return;
    }
    
    // Check email format
    if (fieldRules.isEmail && !isValidEmail(fieldValue)) {
      errors[fieldName] = fieldRules.emailMessage || 
        'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      return;
    }
    
    // Check phone format
    if (fieldRules.isPhone && !isValidPhone(fieldValue)) {
      errors[fieldName] = fieldRules.phoneMessage || 
        'Bitte geben Sie eine gültige Telefonnummer ein';
      return;
    }
    
    // Custom validation
    if (fieldRules.custom && typeof fieldRules.custom === 'function') {
      const customValidation = fieldRules.custom(fieldValue, formData);
      if (customValidation !== true) {
        errors[fieldName] = customValidation;
        return;
      }
    }
  });
  
  return errors;
};
