import Button from "@/components/Button";
import CodeRunner from "@/components/CodeRunner";
import DocumentBox from "@/components/DocumentBox";
import { NextPage } from "next";
import Layout from "../components/Layout";
import useMarkdown from "../utils/useMarkdown";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const ConfigPage: NextPage = () => {
  const markdown = useMarkdown("/docs/1_installation.md");

  return (
    <Layout>
      <div className="w-[440px] flex flex-col gap-6">
        <DocumentBox>{markdown || "Loading..."}</DocumentBox>
        <div className="flex justify-between">
          <Button className="w-20" variant="secondary">
            Prev
          </Button>
          <Button className="w-20" variant="primary">
            Next
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <CodeRunner
          code="$ npm install @supabase/supabase-js"
          title="Example"
          language="bash"
        />
        <CodeRunner code="npm install @supabase/supabase-js" title="Example" />
      </div>
    </Layout>
  );
};

export default ConfigPage;
