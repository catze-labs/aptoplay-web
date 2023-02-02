import Button from "@/components/Button";
import DocumentBox from "@/components/DocumentBox";
import { NextPage } from "next";
import Layout from "@/features/Tutorial/components/Layout";
import useMarkdown from "@/features/Tutorial/utils/useMarkdown";
import { useRouter } from "next/router";

interface DocLayoutProps {
  children?: React.ReactNode;
  docUrl: string;
  page: number;
  totalPage: number;
}
const DocLayout: React.FC<DocLayoutProps> = ({
  children,
  docUrl,
  page,
  totalPage,
}) => {
  const router = useRouter();

  const markdown = useMarkdown(docUrl);
  return (
    <Layout>
      <div className="w-full md:w-[600px] flex flex-col gap-6">
        <DocumentBox>{markdown || "Loading..."}</DocumentBox>
        <div className="flex justify-between items-center">
          {page === 1 && (
            <Button
              className="w-fit"
              variant="secondary"
              onClick={() => router.push("/")}
            >
              Back to Main
            </Button>
          )}
          {page > 1 && page <= totalPage && (
            <Button
              className="w-fit"
              variant="secondary"
              onClick={() => router.push(`./${page - 1}`)}
            >
              Prev
            </Button>
          )}
          <span className="text-sm text-primary-100">
            {page} / {totalPage}
          </span>
          {page < totalPage && (
            <Button
              className="w-20"
              variant="primary"
              onClick={() => router.push(`./${page + 1}}`)}
            >
              Next
            </Button>
          )}
          {page === totalPage && (
            <Button
              className="w-20"
              variant="primary"
              onClick={() => router.push("./complete")}
            >
              Complete
            </Button>
          )}
        </div>
      </div>
      <div>{children}</div>
    </Layout>
  );
};

export default DocLayout;
