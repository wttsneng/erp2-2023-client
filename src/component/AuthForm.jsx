import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const LoginSchema = yup.object().shape({
  Login: yup.string().required(),
  password: yup.string().required(),
});
const initialValues = {
  Login: "",
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
      validationSchema={LoginSchema}
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
          style={{ width: "100%", maxWidth: "800px" }}
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
              Добро пожаловать на сайт ***** <br />
              Для продолжения войдите в систему
            </Typography>

            <TextField
              label="Login"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.Login}
              name="Login"
              error={Boolean(touched.Login) && Boolean(errors.Login)}
              helperText={touched.Login && errors.Login}
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
                Login
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default AuthForm;
