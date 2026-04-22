import React from "react";
import { sharedStyles } from "../styles";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        backgroundColor: sharedStyles.colors.white,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: sharedStyles.colors.primary.dark,
          padding: "20px 40px",
        }}
      >
        <Link to="/">
          <img src="/invertedlogo.png" alt="Nammu" style={{ height: "36px" }} />
        </Link>
      </div>

      <div style={styles.page}>
        <h1 style={styles.title}>Terms of Service</h1>

        <p style={{ marginBottom: "1.5rem" }}>
          These Terms of Service ("Terms") govern the access to and use of the
          websites, platform, application programming interface ("API"), and
          other products, services, and solutions (collectively, the
          "Services") made available by Nammu, Inc. ("Nammu", "we", "our", or
          "us"), together with the underlying software, models, systems,
          documentation, data, and related materials owned or licensed by Nammu
          (the "Nammu Technologies"). By accessing or using the Services, the
          accessing party (including any organization on whose behalf it is
          acting and its authorized users, collectively, "Customer" or "you")
          agrees to these Terms and any applicable order form, subscription
          agreement, or statement of work entered into between Customer and
          Nammu (each, an "Agreement"). References in these Terms to "Customer
          Output" mean the outputs generated for Customer through Customer's
          authorized use of the Services, and "Customer Content" means the
          content, data, and materials that Customer submits to the Services.
          Customer's use of the Services is subject to the following:
        </p>

        <Section n="1" heading="Customer Representations and Warranties">
          <p>
            Customer represents and warrants that it and its users shall not,
            directly or indirectly:
          </p>
          <ol type="A" style={styles.letterList}>
            <li>
              use the Services or Nammu Technologies in any way or for any
              purpose, except to the limited extent expressly authorized under
              the Agreement;
            </li>
            <li>
              reverse engineer, decompile, disassemble or otherwise attempt to
              discover the source code, object code, or underlying structure,
              infrastructure, ideas, know-how, language learning models,
              methods, programs, processes, or algorithms relevant to the Nammu
              Technologies or any API, software, systems, documentation or data
              related to the Services;
            </li>
            <li>
              except as expressly permitted herein or otherwise permitted by
              Nammu in writing, modify, copy, port, translate, or create
              derivative works based on the Services or Nammu Technologies
              (excluding any Customer Output), in whole or in part;
            </li>
            <li>
              sell, license, sublicense, assign, distribute, publish, transfer,
              or provide, lease, lend or use the Services or Nammu Technologies
              for timesharing, application service provider, or service bureau
              purposes;
            </li>
            <li>
              use the Services or Nammu Technologies to build or develop, alone
              or with other parties, a similar or competitive website, product,
              platform, solution, software, technology, or services;
            </li>
            <li>
              license, sell, transfer, assign, distribute, host, or otherwise
              commercially exploit the Services or Nammu Technologies except as
              expressly authorized by the Agreement;
            </li>
            <li>
              remove or obscure any copyright, patent, trademark, restricted
              rights, confidentiality or similar notice affixed to or displayed
              with any Services or Nammu Technologies;
            </li>
            <li>
              except as permitted under the Agreement, disclose to third
              parties, without the prior written approval of Nammu, the results
              of any benchmark tests or evaluation of the Services or Nammu
              Technologies;
            </li>
            <li>
              cause the Services or Nammu Technologies to become subject to the
              terms of any open source license agreement;
            </li>
            <li>
              engage in any conduct that restricts or inhibits Nammu's use of
              its Services or Nammu Technologies;
            </li>
            <li>
              knowingly violate the security of, including by using any device,
              software or routine that interferes with the proper functioning
              of the Services or Nammu Technologies;
            </li>
            <li>
              use the content, data, materials, or information from the
              Services or Nammu Technologies (excluding Customer Output) for
              the development of any software program, including, but not
              limited to, training a machine learning or artificial
              intelligence ("AI") system;
            </li>
            <li>
              use any automatic or manual process to monitor or copy any of
              the content, data, materials, or information from the Services
              or Nammu Technologies (excluding Customer Output), or for any
              other purpose not expressly authorized by the Agreement; or
            </li>
            <li>
              use the Services or Nammu Technologies in any manner or for any
              purpose that infringes, misappropriates, or otherwise violates
              any intellectual property right or other right of any person, or
              that violates any applicable law.
            </li>
          </ol>
          <p style={{ marginTop: "1rem" }}>
            Additionally, with respect to the API, Customer shall not, and
            shall ensure its users do not:
          </p>
          <ol style={styles.numberList}>
            <li>
              combine or integrate the API with any software, technology,
              services, or materials not authorized or permitted by Nammu, or
              contemplated or reasonably foreseeable or necessary under the
              Agreement or associated order forms or statements of work (which
              authorization may be provided by Nammu by email after a request
              by Customer to combine or integrate the API with Customer-internal
              software or systems);
            </li>
            <li>
              design or permit applications to disable, override, or otherwise
              interfere with any Nammu-implemented communications to end users,
              consent screens, user settings, security protocols, alerts,
              warnings, or the like;
            </li>
            <li>
              use the API in any applications to replicate or attempt to
              replace the user experience of the Services or Nammu
              Technologies;
            </li>
            <li>
              attempt to cloak or conceal Customer's or any user's identity or
              the identity of applications when using the API; or
            </li>
            <li>
              use the API in connection with or to promote any products,
              services, or materials that constitute, promote, or are used
              primarily for the purpose of dealing in spyware, adware, or other
              malicious programs or code, counterfeit goods, items subject to
              U.S. embargo, unsolicited mass distribution of email ("spam"),
              multi-level marketing proposals, hate materials, hacking,
              surveillance, interception, or descrambling equipment, libelous,
              defamatory, obscene, pornographic, abusive, or otherwise
              offensive content, stolen products, and items used for theft,
              hazardous materials, or any illegal activities.
            </li>
          </ol>
        </Section>

        <Section n="2" heading="Customer Covenants">
          <p>
            Customer additionally agrees for itself and on behalf of its users:
          </p>
          <ol type="A" style={styles.letterList}>
            <li>
              to use the API solely to communicate and interoperate with the
              Nammu Technologies;
            </li>
            <li>
              to carefully monitor its use of the API and ensure that it
              remains within reasonable operational limits for both Customer's
              own server and systems capacity and the capacity of the Nammu
              Technologies;
            </li>
            <li>
              that Nammu may monitor Customer's use of the API and reserves
              the right to rate limit other functionality to prevent abuse,
              spam, denial-of-service attacks, or other security issues in
              Nammu's sole discretion;
            </li>
            <li>
              that Nammu has no responsibility to any person for any use or
              misuse of any Customer Content or Customer Output by any third
              party obtained or transmitted through the API from Customer; and
            </li>
            <li>
              that Nammu may suspend Customer's access to the API without
              notice if Nammu reasonably believes that violation by Customer
              is causing a material security issue for Nammu.
            </li>
          </ol>
        </Section>

        <Section n="3" heading="How to Contact Us">
          <p>
            If you have any questions about these Terms, you can contact us at{" "}
            <a
              href="mailto:support@nammu.ai"
              style={{ color: sharedStyles.colors.primary.medium }}
            >
              support@nammu.ai
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ n, heading, children }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <h2 style={styles.sectionHeading}>
      <span style={{ marginRight: "1rem" }}>{n}.</span>
      <span style={{ textDecoration: "underline" }}>{heading}</span>
    </h2>
    <div style={{ paddingLeft: "2rem" }}>{children}</div>
  </div>
);

const styles = {
  page: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "60px 40px 80px",
    color: "#333",
    lineHeight: "1.7",
    fontSize: "0.95rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
    color: sharedStyles.colors.primary.dark,
  },
  sectionHeading: {
    fontSize: "1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "baseline",
  },
  letterList: {
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
  },
  numberList: {
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
  },
};

export default TermsOfService;
