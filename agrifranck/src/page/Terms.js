
const conditionsOfUse = `
1. Personal Data Collection: We only collect personal data that is necessary for the provision of our services and with the consent of the user.

2. Lawful Basis: We process personal data based on one or more lawful bases, such as the user's consent, the necessity of processing for the performance of a contract, compliance with a legal obligation, protection of vital interests, or legitimate interests pursued by the data controller.

3. Data Minimization: We only collect and process personal data that is adequate, relevant, and limited to what is necessary for the purposes for which it is processed.

4. Purpose Limitation: We only process personal data for specified, explicit, and legitimate purposes and do not further process it in a manner that is incompatible with those purposes.

5. Data Accuracy: We take reasonable steps to ensure that personal data is accurate, complete, and up-to-date.

6. Data Retention: We retain personal data for no longer than is necessary for the purposes for which it is processed, taking into account legal requirements and business needs.

7. Data Security: We implement appropriate technical and organizational measures to ensure the security of personal data, including protection against unauthorized or unlawful processing and accidental loss, destruction, or damage.

8. Data Subject Rights: We respect the rights of data subjects, including the right to access, rectify, erase, restrict processing, object to processing, and data portability.

9. Data Transfers: We ensure that any transfer of personal data to a third country or an international organization is subject to appropriate safeguards or falls within an exception or derogation.

10. Data Breach Notification: In the event of a personal data breach, we have procedures in place to promptly notify the supervisory authority and affected individuals, where required.

Please note that this is just an example and you should consult legal professionals to ensure compliance with the specific requirements of the GDPR and any other applicable data protection laws.
`;

export default function Terms() {
  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>{conditionsOfUse}</p>
    </div>
  );
}
