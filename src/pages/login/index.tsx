import PublicLayout from "@/layouts/PublicLayout";
import LoginPage from "@/views/LoginPage";
import React from "react";

function Login() {
  return <LoginPage />;
}

Login.getLayout = function getLayout(page: any) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Login;
