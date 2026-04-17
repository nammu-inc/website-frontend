import React from "react";
import { sharedStyles } from "../styles";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
        <h1 style={styles.title}>Privacy Policy</h1>

        <Section n="1" heading="Introduction">
          <p>
            This Privacy Policy covers how Nammu, Inc. ("Nammu", "we", "our" or "us") collects, uses,
            discloses and stores information about Customer and Customer's authorized users ("Customer"
            or "you") when you (as a visitor, account owner, registered user, or other user) access or
            use our (i) platform located at https://stavis.nammu.ai, together with any other link or
            internet address provided by us (collectively, the "Website"), (ii) Services provided by
            Nammu pursuant to the Agreement via the Website, Nammu platform, or through our application
            programming interface ("API") or otherwise (the web-based application platform and the
            mobile/device App versions, as applicable, the "Services"), and/or (iii) any other product,
            service, or solution provided by Nammu ("Other Solutions" and collectively with the Website,
            and Services, the "Nammu Package Solutions").
          </p>
        </Section>

        <Section n="2" heading="What Information We Collect and How We Collect It">
          <p>
            In order to provide our Nammu Package Solutions to you and to ensure that our Nammu Package
            Solutions operate correctly, we collect various types of information, including information
            that identifies you or may identify you as an individual or the entity you represent
            ("personal information"). When you use our Website, contact us, create an account, or become
            a registered user of our Nammu Package Solutions, we collect the following information:
          </p>
          <SubSection label="A." heading="Information You Provide to Us:">
            <ol type="i" style={styles.romanList}>
              <li>If you use the contact information provided on the Website to contact us directly, we may collect your contact information which includes your email address and may collect your name, title, business association, and reason for contacting us.</li>
              <li>When you sign up for an account, we may collect your name, email, mobile phone number, business association, and password. When you purchase a plan to use our Nammu Package Solutions requiring registration, we may collect your name, email address, mobile phone number, business association, zip code, country, company, and any other information you voluntarily provide to us.</li>
              <li>We collect all information you provide to us when you use our Nammu Package Solutions including (i) and (ii) above, and any information or data you provide to us to or through our Nammu Package Solutions including but not limited to responses to any questions or queries included with or as a result of your use of the Services or your interactions or contributions through our Nammu Package Solutions ("Submitted Data").</li>
            </ol>
          </SubSection>
          <SubSection label="B." heading="Information We Automatically Collect When You Use Our Nammu Package Solutions:">
            <ol type="i" style={styles.romanList}>
              <li><strong>Internet Protocol Address</strong> ("IP address"). We automatically collect information about your IP address when you visit or use our Nammu Package Solutions.</li>
              <li><strong>Usage Data.</strong> Information collected automatically through the Nammu Package Solutions (or third-party services employed in the Nammu Package Solutions) including the domain names of the computers, tablets, mobile phones or other devices used to access Nammu Package Solutions (collectively, "Devices") utilized by the users who use our Nammu Package Solutions (the "Users"), the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Nammu Package Solutions) and the details about the path followed within the Nammu Package Solutions with special reference to the sequence of pages visited, other parameters about the Device operating system and/or the User's IT environment, and any information that constitutes Usage Data. "Usage Data" means all new data, new meta-data, or new information generated by, resulting from, or created by Nammu through analysis or other processing of (i) usage of the Nammu Package Solutions, user activity metrics, and how users utilize the Nammu Package Solutions, (ii) Nammu's performance of Services, uptimes, API calls, and other service metrics, and (iii) all translations, adaptations, arrangements, modifications, derivatives, or any other alteration of the foregoing. Such Usage Data may be provided to us by third party vendors.</li>
              <li><strong>Information collected by cookies and other similar technologies.</strong> We use various technologies to collect information that include saving cookies to Users' Devices. These tools help us understand and improve the performance of the Nammu Package Solutions.</li>
              <li><strong>Your Communications with Us.</strong> We may collect information communicated with us when you request information about our Nammu Package Solutions, or request customer or technical support, or otherwise communicate with us.</li>
            </ol>
          </SubSection>
          <SubSection label="C." heading="Information We Collect From Third Parties.">
            <p>We may receive personal information about you from partners, third-party service providers, external organizations, social media websites, marketing vendors, and other third-party sources.</p>
          </SubSection>
        </Section>

        <Section n="3" heading="How We Use The Information We Collect">
          <SubSection label="A." heading="Services.">
            <p>We use the information we collect in connection with the Nammu Package Solutions we provide. We may use the information we collect to set up User accounts and registered users; provide, operate, and maintain Nammu Package Solutions; customize the User experience and generate output with our Nammu Package Solutions; process and complete transactions; provide customer service and support and respond to inquiries; send communications; prevent fraudulent activity; for registration and authentication purposes; and for any other purpose based on our legitimate interest.</p>
          </SubSection>
          <SubSection label="B." heading="Services Administration and Improvement.">
            <p>We use the information we collect to administer and improve all of our Nammu Package Solutions.</p>
          </SubSection>
          <SubSection label="C." heading="Analytics.">
            <p>We use aggregated information that is collected to understand general information and trends related to our Nammu Package Solutions, such as how many people have visited our Website during a given period of time, the types of Devices Users use with our Nammu Package Solutions, and to correlate Devices and User behavior with User reported information on an aggregated basis. We use this information to help improve our Nammu Package Solutions.</p>
          </SubSection>
          <SubSection label="D." heading="Respond to Inquiries.">
            <p>If you choose to contact us directly using the methods posted on our Website (by email, website form, chat bot, postal mail, or voicemail), we will respond to you using the contact information you provided in your inquiry.</p>
          </SubSection>
          <SubSection label="E." heading="Tag Management.">
            <p>Tag management allows us to manage the tags or scripts needed on the Services in a centralized fashion.</p>
          </SubSection>
          <SubSection label="F." heading="User Database Management.">
            <p>This allows us to build user profiles starting with an email address, mobile phone number, personal name, or other pieces of information provided by the User, and to track user activities through analytics features. This personal data may also be combined with publicly available information about the User (such as social networks' profiles) and used by us to build expanded private profiles, which can be used to display information and improve our Services. Some of these services may also enable the sending of timed messages to the User, such as emails based on specific actions performed on our Services.</p>
          </SubSection>
          <SubSection label="G." heading="Communications and Marketing.">
            <p>When you submit an inquiry on our Website, sign up for our Services or Other Solutions, or access the Nammu API, we may use your information to send you communications from us or via third parties acting on our behalf, including those for marketing purposes. You can opt out of receiving certain marketing or promotional communications from us at any time using the unsubscribe link in the email communications we send.</p>
          </SubSection>
        </Section>

        <Section n="4" heading="Who We Share Your Information With">
          <SubSection label="A.">
            <p>We do not rent, sell or share information about you with other people or non-affiliated companies. We do, however, share and disclose your information (including personal information) in the following instances:</p>
            <ol type="i" style={styles.romanList}>
              <li><strong>Vendors and Service Providers.</strong> We share your information with vendors and service providers with whom we engage to perform tasks on our behalf or to perform certain functions of our Services. This may include third parties having access to your information through the development or use of the Nammu application programming interface. The vendors and service providers are bound by agreement to not further disclose any of your personal information without your approval.</li>
              <li><strong>Business Transactions.</strong> If we are acquired or merged with another company, we will transfer collected information to the acquiring company.</li>
              <li><strong>Public or Government Authorities.</strong> Under certain circumstances, we may be required to disclose your personal information or Submitted Data if necessary to comply with a subpoena, court order or other formal governmental requests, to establish or exercise our legal rights or defend against legal claims, or to cooperate with government and/or law enforcement officials.</li>
              <li><strong>Consent.</strong> We share your personal information if you have asked or intend for us to do so or we have received your consent. For example, with your consent, we may post User testimonials that may identify you.</li>
            </ol>
          </SubSection>
          <SubSection label="B.">
            <p>We may share aggregated, deidentified, or anonymized information (i.e., information that CANNOT be used to identify an individual) for a variety of reasons, including under the following circumstances:</p>
            <ol type="i" style={styles.romanList}>
              <li>To make our Nammu Package Solutions better, refine functions or add features, foster transparency, or for research or development of new services or products.</li>
              <li>If we are acquired or merged with another company, we will transfer aggregate information to the acquiring company.</li>
              <li>We may share aggregate information if necessary to comply with a subpoena, court order, or other formal government request to establish or exercise our legal rights or defend against legal claims, or to cooperate with government and/or law enforcement officials.</li>
              <li>For any lawful basis.</li>
            </ol>
          </SubSection>
        </Section>

        <Section n="5" heading="Cookies">
          <p>The Nammu Package Solutions may place cookies on your browser or, if you use the Services, on your Device, in order to identify you when you return to our Website, log in to our Services, and for other reasons in accordance with our cookie policy in place from time to time.</p>
        </Section>

        <Section n="6" heading="Data Retention, Accessibility & Destruction">
          <p>We will retain your data, including your personal information and Submitted Data, for as long as required by the purpose for which we collected the data, to provide Nammu Package Solutions to you, improve the Nammu Package Solutions, or to the extent required by law. We will make accessible, destroy or transfer to you any or all of your Submitted Data upon written request from you.</p>
        </Section>

        <Section n="7" heading="No Responsibility for Third-Party Services, Websites or Content">
          <SubSection label="A.">
            <p>As a service to our Users, or to enable certain functionalities or features, the Nammu Package Solutions may contain links to third-party websites or applications ("Third-Party Sites") or use third-party content ("Third-Party Content") and may provide third-party services ("Third-Party Services") that you may use in connection with your use of certain of our Nammu Package Solutions. You use Third-Party Sites, Third-Party Content, or Third-Party Services (together, the "Third Party Solutions") at your own risk. We are not responsible for Third Party Sites, Third Party Services, Third Party Content, or for any actions taken or information submitted by you to or through Third Party Solutions.</p>
          </SubSection>
          <SubSection label="B.">
            <p>Nammu makes no claim or representation regarding Third-Party Solutions, and provides them or links to them only as a convenience. Inclusion in the Services or services of Third-Party Solutions does not imply Nammu's endorsement, adoption, or sponsorship of, or affiliation with, such Third-Party Solutions. Nammu accepts no responsibility for reviewing changes or updates to, or the quality, content, policies, nature or reliability of Third-Party Solutions, or websites linking to the Nammu Package Solutions. When you use Third-Party Solutions, the terms and policies of the providers of those Third-Party Solutions apply. You may need to expressly agree to terms of use and privacy policies to access or use some Third-Party Solutions required for certain features or functionalities of the Nammu Package Solutions, and your failure or refusal to accept such terms or policies may prevent or restrict or access or use of some or all of our Nammu Package Solutions. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Solutions, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party or agreement to access or use Third-Party Solutions.</p>
          </SubSection>
          <SubSection label="C.">
            <p>The provider of Third-Party Solutions is solely responsible for such Third-Party Solutions, the content or information therein, any warranties to the extent that such warranties have not been disclaimed, any training, support or maintenance for the Third-Party Solutions, and any claims that you or any other party may have relating to those Third-Party Solutions or your use of them. Nammu is acting as agent in providing such Third-Party Solutions to you; Nammu is not a party to the license, use agreement, or other policies or terms between you and the provider with respect to such Third-Party Solutions; and Nammu is not responsible for such Third-Party Solutions, the content or information therein, or any warranties or claims that you or any other party may have relating to such Third-Party Solutions or your use of them, including as part of the Nammu Package Solutions.</p>
          </SubSection>
        </Section>

        <Section n="8" heading="Security">
          <SubSection label="A.">
            <p>We take security very seriously. To help protect the privacy of data and personal information you transmit through use of our Nammu Package Solutions:</p>
            <ol type="i" style={styles.romanList}>
              <li>We maintain physical, technical and administrative safeguards that are consistent with industry standards and applicable law.</li>
              <li>We update and test our security technology on an ongoing basis.</li>
              <li>We restrict access to your personal data to employees who need to know that information to provide benefits or services to you.</li>
              <li>We train our employees about the importance of confidentiality and maintaining the privacy and security of your information.</li>
              <li>We conduct background checks on our employees before hiring them.</li>
              <li>We use state-of-the-art data centers to store the data we collect. These cloud-based hosting companies maintain ISO/IEC 27001:2013 certifications and undergo SOC 2 Type II external audits of their controls. We understand our responsibilities in our cloud data centers' shared security models.</li>
              <li>We monitor our systems and threat information services, to evaluate and respond to threats that could impact systems and data.</li>
            </ol>
          </SubSection>
        </Section>

        <Section n="9" heading="Encryption">
          <p>All data transmitted between visitors to the Nammu Website and users of the Services is encrypted in transit. Data is encrypted in transit to storage (TLS) and personally identifiable information is encrypted at rest. We may use a trusted Third Party Solution for user identification and access management.</p>
        </Section>

        <Section n="10" heading="Access Control">
          <p>All services related to operations and infrastructure are accessible only through secure connectivity (e.g., SSL, SSH). Privileged systems and accounts require multi-factor authentication. Our back-office, service, and infrastructure password policies require minimum lengths, complexity, and lockout. We grant access to personnel on the basis of least privilege rules, review permissions quarterly and revoke access immediately after employee termination.</p>
        </Section>

        <Section n="11" heading="Employees and Contractors">
          <p>Our employees and contractors undergo national background checks where legal and are required to sign non-disclosure agreements.</p>
        </Section>

        <Section n="12" heading="Incident Management">
          <p>We maintain industry standard security incident response policies and procedures.</p>
        </Section>

        <Section n="13" heading="Legal Basis for Processing Your Information (EEA, UK and Switzerland)">
          <SubSection label="A." heading="General.">
            <p>If you are a User of our Nammu Package Solutions located in the European Economic Area (EEA), United Kingdom or Switzerland, we rely on the following basis for processing:</p>
            <ol type="i" style={styles.romanList}>
              <li><strong>Consent,</strong> where we have your consent to do so;</li>
              <li><strong>Perform Contract,</strong> where we need the personal information to perform a contract with you;</li>
              <li><strong>Legitimate Interest,</strong> where the processing is in our legitimate interests, as described in the "How We Use the Information We Collect" section of this document, and not overridden by your data protection interests or fundamental rights and freedoms; and/or</li>
              <li><strong>Legal Obligation,</strong> where we have a legal obligation to collect or retain personal information or need the personal information to protect your vital interests or those of another person(s).</li>
            </ol>
          </SubSection>
          <SubSection label="B." heading="Controller and Processor.">
            <p>Subject to the terms and conditions set forth in our Data Processing Addendum, which Nammu may adopt and amend from time to time, Nammu, Inc. is the owner of the Nammu Package Solutions. Nammu is both controller and processor of personal data covered by the Privacy Policy for purposes of European data protection legislation.</p>
          </SubSection>
          <SubSection label="C." heading="Data Storage and Data Transfer.">
            <p>We may transfer your personal data to countries other than the one in which you live. To the extent that personal data is transferred abroad, we will ensure compliance with the requirements of the applicable laws in the respective jurisdiction in line with our obligations. We will ensure that an adequate level of protection is provided for the information by using industry-standard security practices and standard contractual clauses where required. If we transfer personal information that originates in the EEA, Switzerland, and/or the United Kingdom to a country outside of such regions, we will use commercially reasonable efforts to ensure that: (i) there are appropriate safeguards in place such as binding corporate rules or the approved EU standard contractual clauses between Nammu and the recipient; (ii) the transfer is to a country that provides an adequate level of protection under applicable laws; (iii) one of the derogations for specific situations found in applicable law applies to the transfer including explicit consent, where such transfer is necessary for the performance of a contract or exercise, or the defense of legal claims; or (iv) the transfer is otherwise consistent with the requirements of applicable law. By using the Nammu Package Solutions, or by providing any information to us, you expressly consent to such transfer and processing.</p>
          </SubSection>
        </Section>

        <Section n="14" heading="Children">
          <p>To the extent prohibited by applicable law, we do not allow use of our Nammu Package Solutions by anyone younger than 18 years old. If you learn that anyone younger than 18 has unlawfully provided us with personal information, please contact us, and we will take steps to delete such information.</p>
        </Section>

        <Section n="15" heading='"Do Not Track"'>
          <p>Do Not Track ("DNT") is a privacy preference that Users can set in certain web browsers. DNT is a way for Users to inform websites and services that they do not want certain information about their webpage visits collected over time and across websites or online services. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.</p>
        </Section>

        <Section n="16" heading="Your Rights">
          <SubSection label="A.">
            <p>You may have certain additional rights subject to applicable state laws, including the rights set forth below.</p>
          </SubSection>
          <SubSection label="B.">
            <p>We will take reasonable steps to allow you to access, review, update, rectify, or delete any personal data we hold about you. If you are a resident of the EEA, United Kingdom or Switzerland, you have the following data protection rights:</p>
            <ol type="i" style={styles.romanList}>
              <li><strong>Right of Access.</strong> The right to obtain access to your personal data.</li>
              <li><strong>Right to Rectification.</strong> The right to erase or rectify inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure.</strong> The right to obtain the deletion and erasure of your personal data in certain circumstances.</li>
              <li><strong>Right to Portability.</strong> The right to move, copy, or transfer personal data.</li>
              <li><strong>Right to Restrict Processing.</strong> The right to restrict or limit our use, disclosure, or processing of personal data.</li>
              <li><strong>Right to Opt Out of Sale or Processing.</strong> The right to opt out of the (a) sale of your personal information, (b) sharing of your personal information for cross-context behavioral advertising purposes, or (c) processing of your personal information for targeted advertising purposes.</li>
            </ol>
          </SubSection>
          <SubSection label="C.">
            <p>Additionally, subject to applicable law, you may receive, in a structured, commonly used and machine-readable format, certain of your personal information that you have provided to us. Subject to applicable law, you may have the right to have this information transmitted to another company, where it is technically feasible.</p>
          </SubSection>
          <SubSection label="D.">
            <p>If you wish to exercise one of these rights, please contact us by using the contact details below. We will ask you to verify your identity before responding to these requests. EEA, United Kingdom and Switzerland residents also have the right to lodge a complaint to a data protection authority. For more information, please contact your local data protection authority.</p>
          </SubSection>
        </Section>

        <Section n="17" heading="Supplemental Notice to California Residents">
          <SubSection label="A.">
            <p>This Supplemental California Privacy Notice only applies to our processing of personal information that is subject to the California Consumer Privacy Act of 2018 ("CCPA"), as amended by the California Privacy Rights Act of 2020 ("CPRA"). The CCPA provides California residents with the right to know what categories of personal information that Nammu has collected about them and whether Nammu disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding 12 months. California residents can find this information below:</p>
            <div style={{ overflowX: "auto", margin: "1rem 0" }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Personal information we collect</th>
                    <th style={styles.th}>CCPA-defined categories</th>
                    <th style={styles.th}>Purposes for which we may collect and use the personal information</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Contact data", "Identifiers", "Operations, Marketing"],
                    ["Login data", "Identifiers, Online identifiers", "Operations"],
                    ["Information you provide to us through use of the Nammu Package Solutions", "Identifiers, Online identifiers", "Operations"],
                    ["Transaction Data and Business Account Information", "Commercial information, Financial information, Identifiers, Online identifiers", "Operations, Marketing"],
                    ["Communications", "Identifiers", "Operations, Marketing"],
                    ["Marketing data and Third-Party Advertising Tools", "Commercial information, Identifiers, Inferences, Internet or network information, Online identifiers", "Operations, Marketing"],
                    ["Device data, Online activity data", "Inferences, Internet or network information, Online identifiers", "Operations, Marketing"],
                  ].map(([info, categories, purposes], i) => (
                    <tr key={i}>
                      <td style={styles.td}>{info}</td>
                      <td style={styles.td}>{categories}</td>
                      <td style={styles.td}>{purposes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SubSection>
          <SubSection label="B.">
            <p>As described above, please note that we may also disclose personal information to our affiliates and third-party service providers, in connection with operations, corporate restructuring, to comply with law, or for compliance, fraud prevention and safety purposes. We do not sell your personal information.</p>
          </SubSection>
          <SubSection label="C.">
            <p>We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to comply with applicable legal, tax or accounting requirements, to enforce our agreements or comply with our legal obligations). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing, until deletion is possible. When processing customer content on behalf of our customers, as applicable, we will retain customer content for as long as our customer instructs us to and/or as required by applicable law.</p>
          </SubSection>
          <SubSection label="D.">
            <p>Except as excluded above, the CCPA grants California residents the following rights:</p>
            <ol type="i" style={styles.romanList}>
              <li><strong>Information.</strong> You can request information about how we have collected, used and shared your personal information during the past 12 months. We have made this information available to California residents without having to request it by including it in this Privacy Policy, in the chart above.</li>
              <li><strong>Access.</strong> You can request a copy of the personal information that we maintain about you.</li>
              <li><strong>Deletion.</strong> You can ask us to delete the personal information that we collected or maintain about you.</li>
            </ol>
          </SubSection>
          <SubSection label="E.">
            <p>Please note that the CCPA limits these rights by, for example, prohibiting us from providing certain sensitive information in response to an access request and limiting the circumstances in which we must comply with a deletion request. If we deny your request, we will communicate our decision to you. To the extent we collect sensitive personal information, we do so only to determine whether we are able to provide our Nammu Package Solutions or as part of our ongoing service packages. The CPRA allows you to limit the use or disclosure of sensitive personal information beyond what is reasonable and proportionate to the requested goods and services provided by Nammu, which you may do by contacting us to make such request. In addition, to the extent applicable under the CPRA: (i) you have the right to opt out of our sale or sharing of personal information; and (ii) if we sell any of your personal information, you have the right, at any time, to tell us not to sell your personal information.</p>
          </SubSection>
          <SubSection label="F.">
            <p>To the extent that the CPRA is applicable to you in respect of your accessing our Nammu Package Solutions, you have the right to request that we rectify inaccurate information about you. By visiting your account settings or otherwise contacting us, you can correct and change certain personal information associated with your account.</p>
          </SubSection>
          <SubSection label="G.">
            <p>You are entitled to exercise the rights described above free from discrimination, and to ask someone else to exercise your privacy rights for you as your authorized agent.</p>
          </SubSection>
          <SubSection label="H.">
            <p>The CCPA requires us to verify the identity of the individual submitting a request to access or delete or rectify personal information (or written permission or other proof that you have appointed an agent to serve on your behalf) before providing a substantive response to the request.</p>
          </SubSection>
        </Section>

        <Section n="18" heading="Supplemental Notice for Nevada Residents">
          <p>If you are a resident of Nevada, you have the right to opt out of the sale of certain personal information to third parties who intend to license or sell that personal information. Please note that we do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A.</p>
        </Section>

        <Section n="19" heading="Direct Marketing">
          <p>When you sign up for our Services or any of our Other Solutions you acknowledge that we can process your personal data to send you communications, including those for marketing purposes. You can opt out of receiving certain marketing or promotional communications from Nammu at any time using the unsubscribe link in the email communications we send.</p>
        </Section>

        <Section n="20" heading="How to Contact Us">
          <p>
            If you have any questions or complaints about this Privacy Policy or its implementation, you can contact us at{" "}
            <a href="mailto:support@nammu.ai" style={{ color: sharedStyles.colors.primary.medium }}>
              support@nammu.ai
            </a>
            .
          </p>
        </Section>

        <Section n="21" heading="Changes to Privacy Laws">
          <p>We may update this Privacy Policy from time to time based on changes to applicable laws and regulations or other legal requirements applicable to us. Nammu reserves the right to change or modify this Privacy Policy upon prior written notice to Customer in order to comply with changes to applicable law.</p>
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

const SubSection = ({ label, heading, children }) => (
  <div style={{ marginTop: "0.75rem" }}>
    <div style={{ display: "flex", gap: "1rem" }}>
      <span style={{ fontWeight: 600, flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1 }}>
        {heading && <strong>{heading} </strong>}
        {children}
      </div>
    </div>
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
  romanList: {
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.875rem",
  },
  th: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "8px 12px",
    textAlign: "left",
    fontWeight: 600,
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px 12px",
    verticalAlign: "top",
  },
};

export default PrivacyPolicy;
