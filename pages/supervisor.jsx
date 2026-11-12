import Layout, { PageHeading } from "../components/Layout";
import SupervisorProfiles from "../components/SupervisorProfiles";
export default function Supervisors() {
  return (
    <Layout title="Supervisors">
      <PageHeading title="Supervisors">
        <p>
          I am being supervised by <strong>Dr. Prabha Mandayam</strong> and
          co-supervised by <strong>Dr. Siddharth Dhomkar</strong> at IITM. Links
          to their web pages are given below.
        </p>
      </PageHeading>
      <SupervisorProfiles />
    </Layout>
  );
}
