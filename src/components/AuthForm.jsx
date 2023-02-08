import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const loginSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});
const initialValues = {
  login: "",
  password: "",
};
function AuthForm({ onSubmit }) {
  const theme = useTheme();
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <Box
            display="grid"
            gap="30px"
            sx={{
              border: `1px solid ${theme.palette.grey[300]}`,
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h6"
              component={"h1"}
              gridColumn={"span 4"}
              gap="10px"
              sx={{ textAlign: "center" }}
            >
              Authorization
            </Typography>

            <TextField
              label="login"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.login}
              name="login"
              error={Boolean(touched.login) && Boolean(errors.login)}
              helperText={touched.login && errors.login}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
            <Box gridColumn={"span 4"}>
              <Button fullWidth type="submit" variant="contained">
                login
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default AuthForm;
