import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Custom Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F2",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  frameParent: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    flex: 1,
  },
  goContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  goButton: {
    borderRadius: 11,
    backgroundColor: "#988269",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    flexDirection: "row",
    // alignSelf: "stretch",
  },
  createAccount: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#FFF9F2",
    textAlign: "left",
  },
  pageContainer: {
    backgroundColor: "#FFF9F2",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontFamily: "Bricolage Grotesque",
    color: "#1e1e2d",
    textAlign: "left",
    marginTop: 40,
    marginBottom: 20,
  },
  fieldTitle: {
    fontSize: 20,
    fontFamily: "Bricolage Grotesque",
    fontWeight: "bold",
    color: "#1e1e2d",
    textAlign: "left",
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  input: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    borderRadius: 25,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginBottom: 15,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#988269",
    padding: 15,
    borderRadius: 11,
    marginHorizontal: 5,
  },
  backButton: {
    flex: 1,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    padding: 15,
    borderRadius: 11,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF9F2",
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  backButtonText: {
    color: "#988269",
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },
});

// Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // phone: Yup.string().required("Phone number is required"),
  age: Yup.number().required("Age is required").positive().integer(),
  employmentStatus: Yup.string().required("Employment Status is required"),
  goal: Yup.string().required("Goal is required"),
  goalMonetaryValue: Yup.number().required("Goal Monetary Value is required"),
  goalAchieve: Yup.string().required("Goal Achieve is required"),
  bank: Yup.string().required("Bank is required"),
  occupation: Yup.string().required("Occupation is required"),
  interests: Yup.string().required("Interests are required"),
});

interface IntroFormProps {
  onSubmit: (values: any) => void;
}

const IntroForm: React.FC<IntroFormProps> = ({ onSubmit }) => {
  const [page, setPage] = useState(0);

  const handleNextPage = (formik) => {
    // Validation logic for each page
    const validatePage = () => {
      switch (page) {
        case 1:
          formik.setFieldTouched("firstName", true);
          formik.setFieldTouched("lastName", true);
          formik.setFieldTouched("email", true);
          return (
            !formik.errors.firstName &&
            !formik.errors.lastName &&
            !formik.errors.email
          );
        case 2:
          formik.setFieldTouched("age", true);
          // formik.setFieldTouched("phone", true);
          formik.setFieldTouched("employmentStatus", true);
          return !formik.errors.age && !formik.errors.employmentStatus;
        case 3:
          formik.setFieldTouched("goal", true);
          formik.setFieldTouched("goalMonetaryValue", true);
          formik.setFieldTouched("goalAchieve", true);
          return (
            !formik.errors.goal &&
            !formik.errors.goalMonetaryValue &&
            !formik.errors.goalAchieve
          );
        case 4:
          formik.setFieldTouched("occupation", true);

          return !formik.errors.occupation;
        case 5:
          formik.setFieldTouched("interests", true);
          return !formik.errors.interests;
        case 6:
          formik.setFieldTouched("bank", true);
          return !formik.errors.bank;
        default:
          return true;
      }
    };

    if (validatePage()) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const renderPage = (formik) => {
    switch (page) {
      case 0:
        return (
          <View style={styles.goContainer}>
            <TouchableOpacity
              style={styles.goButton}
              onPress={() => setPage(1)}
            >
              <Text style={styles.createAccount}>Start</Text>
            </TouchableOpacity>
          </View>
        );
      case 1:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>Account Creation</Text>
            <Text style={styles.fieldTitle}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={formik.values.firstName}
              onChangeText={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <Text style={styles.errorText}>{formik.errors.firstName}</Text>
            )}
            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={formik.values.lastName}
              onChangeText={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <Text style={styles.errorText}>{formik.errors.lastName}</Text>
            )}
            <Text style={styles.fieldTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
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
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>
              Help us get to know your situation.
            </Text>
            <Text style={styles.fieldTitle}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Age"
              value={formik.values.age.toString()}
              onChangeText={formik.handleChange("age")}
              onBlur={formik.handleBlur("age")}
              keyboardType="numeric"
            />
            {formik.touched.age && formik.errors.age && (
              <Text style={styles.errorText}>{formik.errors.age}</Text>
            )}
            <Text style={styles.fieldTitle}>Employment Status</Text>
            <TextInput
              style={styles.input}
              placeholder="Student, Part-time, Full-time, etc."
              value={formik.values.employmentStatus.toString()}
              onChangeText={formik.handleChange("employmentStatus")}
              onBlur={formik.handleBlur("employmentStatus")}
            />
            {formik.touched.employmentStatus &&
              formik.errors.employmentStatus && (
                <Text style={styles.errorText}>
                  {formik.errors.employmentStatus}
                </Text>
              )}
            {/* <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formik.values.phone}
              onChangeText={formik.handleChange("phone")}
              onBlur={formik.handleBlur("phone")}
              keyboardType="phone-pad"
            />
            {formik.touched.phone && formik.errors.phone && (
              <Text style={styles.errorText}>{formik.errors.phone}</Text>
            )} */}
          </View>
        );
      case 3:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>
              Let’s narrow our focus to one long-term goal.
            </Text>
            <Text style={styles.fieldTitle}>Title your goal</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Graduating debt-free"
              value={formik.values.goal.toString()}
              onChangeText={formik.handleChange("goal")}
              onBlur={formik.handleBlur("goal")}
            />
            {formik.touched.goal && formik.errors.goal && (
              <Text style={styles.errorText}>{formik.errors.goal}</Text>
            )}
            <Text style={styles.fieldTitle}>Monetary Value</Text>

            <FontAwesome
              name="dollar"
              size={15}
              color="black"
              style={{ position: "absolute", marginTop: 305, marginLeft: 30 }}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 20 }]}
              placeholder="100,000"
              value={formik.values.goalMonetaryValue.toString()}
              onChangeText={formik.handleChange("goalMonetaryValue")}
              onBlur={formik.handleBlur("goalMonetaryValue")}
              keyboardType="numeric"
            />

            {formik.touched.goalMonetaryValue &&
              formik.errors.goalMonetaryValue && (
                <Text style={styles.errorText}>
                  {formik.errors.goalMonetaryValue}
                </Text>
              )}
            <Text style={styles.fieldTitle}>
              When do you want to achieve this goal?
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Your Achievement Date"
              value={formik.values.goalAchieve.toString()}
              onChangeText={formik.handleChange("goalAchieve")}
              onBlur={formik.handleBlur("goalAchieve")}
            />
            {formik.touched.goalAchieve && formik.errors.goalAchieve && (
              <Text style={styles.errorText}>{formik.errors.goalAchieve}</Text>
            )}
          </View>
        );
      case 4:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>
              Please provide your fixed expenses.
            </Text>
            <Text style={{ marginTop: -10 }}>
              Stick with the basics, like rent, insurance, utilities, and
              anything else that you expect to be routinely charged for.
            </Text>
            <Text style={{ marginTop: 10 }}>
              P.S. Please don’t add subscriptions. We’ll take care of those 😉
            </Text>
            <FontAwesome
              name="dollar"
              size={15}
              color="black"
              style={{ position: "absolute", marginTop: 260, marginLeft: 30 }}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 20, marginTop: 10 }]}
              placeholder="Your fixed expenses"
              value={formik.values.occupation}
              onChangeText={formik.handleChange("occupation")}
              onBlur={formik.handleBlur("occupation")}
            />
            {formik.touched.occupation && formik.errors.occupation && (
              <Text style={styles.errorText}>{formik.errors.occupation}</Text>
            )}
          </View>
        );
      case 5:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>
              Please provide your income and/or assets.
            </Text>
            <Text style={{ marginTop: -10 }}>
              Add any relevant income, assets, grants/loans or cash balances
              that can contribute to your budgeting plan.
            </Text>
            <FontAwesome
              name="dollar"
              size={15}
              color="black"
              style={{ position: "absolute", marginTop: 221, marginLeft: 30 }}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 20, marginTop: 10 }]}
              placeholder="Your Income"
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
      case 6:
        return (
          <View style={styles.pageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/flow.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.pageTitle}>
              Link your bank so you never have to track an expense again.
            </Text>
            <Text style={{ marginTop: -10 }}>
              We use the same technology and security measures as
              industry-leaders, such as Plaid.
            </Text>

            <TextInput
              style={[styles.input, { marginTop: 10 }]}
              placeholder="Your Bank"
              value={formik.values.bank}
              onChangeText={formik.handleChange("bank")}
              onBlur={formik.handleBlur("bank")}
            />
            {formik.touched.bank && formik.errors.bank && (
              <Text style={styles.errorText}>{formik.errors.bank}</Text>
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
        email: "",
        // phone: "",
        age: "",
        employmentStatus: "",
        goal: "",
        goalMonetaryValue: "",
        goalAchieve: "",
        bank: "",
        occupation: "",
        interests: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

        // setTimeout(() => {
        // alert("Form Submitted Successfully!");
        onSubmit(values);
        setSubmitting(false);
        // }, 400);
      }}
    >
      {(formik) => (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView
              contentContainerStyle={styles.frameParent}
              keyboardShouldPersistTaps="handled"
            >
              {renderPage(formik)}

              {page > 0 && page < 6 && (
                <View style={styles.navigationContainer}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={handlePreviousPage}
                  >
                    <Text style={styles.backButtonText}>Back</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNextPage(formik)}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              )}

              {page === 6 && (
                <View style={styles.navigationContainer}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={handlePreviousPage}
                  >
                    <Text style={styles.backButtonText}>Back</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button}
                    // onPress={() => {
                    //   // Validate all fields before submission
                    //   formik.validateForm().then((errors) => {
                    //     if (Object.keys(errors).length === 0) {
                    //       console.log("Submitting form...");
                    //       formik.submitForm();
                    //     } else {
                    //       // Optionally, mark all fields as touched to show errors
                    //       console.log("issue!", Object.keys(errors));
                    //       formik.setTouched(
                    //         Object.keys(errors).reduce((acc, key) => {
                    //           acc[key] = true;
                    //           return acc;
                    //         }, {})
                    //       );
                    //     }
                    //   });
                    // }}
                    onPress={() => {
                      console.log("hi");
                      formik.handleSubmit();
                    }}
                  >
                    <Text style={styles.buttonText}>
                      {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default IntroForm;

