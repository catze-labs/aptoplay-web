import Button from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";
import CodeRunner from "@/components/CodeRunner";
import client from "@/requests/client";
import { authState } from "@/states/auth";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const Statistics1Run = () => {
  const { sessionTicket } = useRecoilValue(authState);
  const router = useRouter();

  const [res, setRes] = useState<any>(null);

  const handleRun = async () => {
    try {
      const res = await client.get("/nft/metadata", {
        params: {
          sessionTicket,
        },
      });
      setRes(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setRes(err.response?.data);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        {!sessionTicket && (
          <Button
            variant="secondary"
            className="w-fit"
            onClick={() => router.push("/login?back=6")}
          >
            Login
          </Button>
        )}
        {sessionTicket && (
          <div className="flex flex-col gap-2 w-full">
            <p className="flex items-center gap-2">
              <CheckCircleIcon className="w-6 text-primary-100" />
              <span className="text-primary-100">Already logged in!</span>
            </p>
            <div className="w-full">
              <CodeBlock title="SessionTicket" code={sessionTicket} />
            </div>
          </div>
        )}
      </div>

      {sessionTicket && (
        <CodeRunner
          title="Parameter"
          code={`aptoPlay.getGameStatisticsByStatisticNamesForNFTMetadata(\n  [userSessionTicket]\n  [usingStatisticNames],\n);`}
          onRun={() => handleRun()}
        />
      )}

      {res && (
        <CodeRunner
          title="Result"
          code={JSON.stringify(res, null, 2)}
          language="json"
          runnable={false}
        />
      )}
    </div>
  );
};

export default Statistics1Run;
