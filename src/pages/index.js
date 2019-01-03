import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

export default () => (
    <Layout>
        <div style={{ height: "100%", padding: "100px" }}>
            <h1 style={{ fontSize: "30px", textAlign: "center" }}>
                Coming soon
            </h1>
        </div>
        <script>{`if (window.netlifyIdentity) {window.netlifyIdentity.on("init", user => if (!user) {window.netlifyIdentity.on("login", () => document.location.href = "/admin/")})}`}</script>
    </Layout>
);
