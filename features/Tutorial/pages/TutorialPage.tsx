import Button from "@/components/Button";
import CodeRunner from "@/components/CodeRunner";
import DocumentBox from "@/components/DocumentBox";
import { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";
import { tutorialSettings } from "../setting";
import useMarkdown from "../utils/useMarkdown";

export function getServerSideProps() {
  return {
    props: {},
  };
}

const TutorialPage: NextPage = () => {
  const [step, setStep] = useState<number>(0);

  const markdown = useMarkdown(tutorialSettings[step || 0]?.doc);

  return (
    <Layout>
      <div className="md:w-[440px] flex flex-col gap-6">
        <DocumentBox>{markdown || "Loading..."}</DocumentBox>
        <div className="flex justify-between">
          <Button
            className="w-20"
            variant="secondary"
            disabled={step === 0}
            onClick={() => setStep((prev) => (prev < 0 ? prev : prev - 1))}
          >
            Prev
          </Button>
          <span>{step}</span>
          {step < tutorialSettings.length - 1 && (
            <Button
              className="w-20"
              variant="primary"
              onClick={() =>
                setStep((prev) =>
                  prev - 1 > tutorialSettings.length ? prev : prev + 1
                )
              }
            >
              Next
            </Button>
          )}
          {step === tutorialSettings.length - 1 && (
            <Button
              className="w-20"
              variant="primary"
              onClick={() => setStep(0)}
            >
              Restart
            </Button>
          )}
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

export default TutorialPage;
