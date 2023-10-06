import React from "react";
import Layout from "../components/Layout";

// markup
const NotFoundPage: React.FC = () => {
  return (
    <Layout pageTitle="404 Not Found">
      <p>ページが見つかりませんでした。</p>
    </Layout>
  );
};

export default NotFoundPage;
