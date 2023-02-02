import CodeRunner from "@/components/CodeRunner";
import { useState } from "react";

const SessionTicketValidationRun = () => {
  const [runned, setRunned] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full xl:w-[420px] gap-4">
      <CodeRunner
        title="Parameter"
        code={`aptoPlay.validateAndGetPlayFabIdBySessionTicket(\n  [sessionTicket]\n)`}
        language="javascript"
        onRun={() => {
          setRunned(true);
        }}
      />
      {runned && (
        <CodeRunner title="Result" code={`E25A3C084C9108E`} runnable={false} />
      )}
    </div>
  );
};

export default SessionTicketValidationRun;
