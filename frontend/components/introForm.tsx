import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .max(120, "Please enter a valid age"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  occupation: Yup.string().required("Occupation is required"),
  interests: Yup.string().required("Interests are required"),
});

interface IntroFormProps {
  onSubmit: (values: any) => void;
}

const IntroForm: React.FC<IntroFormProps> = ({ onSubmit }) => {
  const [page, setPage] = useState(0);

  const handleNextPage = (formik: any) => {
    let isValid = false;

    // Validate current page's fields
    switch (page) {
      case 0:
        // Force validation for first page fields
        formik.setFieldTouched("firstName", true);
        formik.setFieldTouched("lastName", true);
        isValid = !formik.errors.firstName && !formik.errors.lastName;
        break;
      case 1:
        // Force validation for second page fields
        formik.setFieldTouched("age", true);
        formik.setFieldTouched("email", true);
        isValid = !formik.errors.age && !formik.errors.email;
        break;
    }

    if (isValid) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  //style={styles.pageTitle}
  const renderPage = (formik: any) => {
    switch (page) {
      case 0:
        return (
          <View style={styles.pageContainer}>
            <Text>Personal Information</Text>
            <TextInput
              style={[
                styles.input,
                formik.touched.firstName &&
                  formik.errors.firstName &&
                  styles.errorInput,
              ]}
              placeholder="First Name"
              value={formik.values.firstName}
              onChangeText={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Text style={styles.errorText}>{formik.errors.firstName}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                formik.touched.lastName &&
                  formik.errors.lastName &&
                  styles.errorInput,
              ]}
              placeholder="Last Name"
              value={formik.values.lastName}
              onChangeText={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <Text style={styles.errorText}>{formik.errors.lastName}</Text>
            )}
          </View>
        );
      case 1:
        return (
          <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>Additional Details</Text>
            <TextInput
              style={[
                styles.input,
                formik.touched.age && formik.errors.age && styles.errorInput,
              ]}
              placeholder="Age"
              value={formik.values.age.toString()}
              onChangeText={formik.handleChange("age")}
              onBlur={formik.handleBlur("age")}
              keyboardType="numeric"
            />
            {formik.touched.age && formik.errors.age && (
              <Text style={styles.errorText}>{formik.errors.age}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                formik.touched.email &&
                  formik.errors.email &&
                  styles.errorInput,
              ]}
              placeholder="Email Address"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              keyboardType="email-address"
            />
            {formik.touched.email && formik.errors.email && (
              <Text style={styles.errorText}>{formik.errors.email}</Text>
            )}
          </View>
        );
      case 2:
        return (
          <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>Final Details</Text>
            <TextInput
              style={[
                styles.input,
                formik.touched.occupation &&
                  formik.errors.occupation &&
                  styles.errorInput,
              ]}
              placeholder="Occupation"
              value={formik.values.occupation}
              onChangeText={formik.handleChange("occupation")}
              onBlur={formik.handleBlur("occupation")}
            />
            {formik.touched.occupation && formik.errors.occupation && (
              <Text style={styles.errorText}>{formik.errors.occupation}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                formik.touched.interests &&
                  formik.errors.interests &&
                  styles.errorInput,
              ]}
              placeholder="Interests (comma-separated)"
              value={formik.values.interests}
              onChangeText={formik.handleChange("interests")}
              onBlur={formik.handleBlur("interests")}
              multiline
            />
            {formik.touched.interests && formik.errors.interests && (
              <Text style={styles.errorText}>{formik.errors.interests}</Text>
            )}
          </View>
        );
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        occupation: "",
        interests: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

        setTimeout(() => {
          // alert("Form Submitted Successfully!");
          onSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              {renderPage(formik)}

              <View style={styles.navigationContainer}>
                {page > 0 && (
                  <TouchableOpacity
                    style={[styles.button, styles.backButton]}
                    onPress={handlePreviousPage}
                  >
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                )}

                {page < 2 ? (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNextPage(formik)}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.button, styles.submitButton]}
                    onPress={() => formik.handleSubmit()}
                    disabled={formik.isSubmitting}
                  >
                    <Text style={styles.buttonText}>
                      {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  pageContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: "#6c757d",
  },
  submitButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default IntroForm;

