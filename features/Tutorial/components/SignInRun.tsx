import CodeRunner from "@/components/CodeRunner";
import { useState } from "react";

const SignInRun = () => {
  const [runned, setRunned] = useState<boolean>(false);

  const jsonExample = {
    sessionTicket:
      "E25A3C084C9108E-54451EB113976F20-8889B16454D70C18-5059E-8DB0407169CF364-LTei9ij7UsVCQHk/F5HGNgW+J+1XaAsfym1sL3/PsBg=",
    playFabId: "E25A3C084C9108E",
    newlyCreated: false,
    settingsForUser: {
      needsAttribution: false,
      gatherDeviceInfo: true,
      gatherFocusInfo: true,
    },
    lastLoginTime: "2023-02-01T03:13:04.337Z",
    entityToken: {
      entityToken:
        "NHxIdVFUckNRN1pXYUFlNUZwUElVVGpWd1pWbUxWNjgwYWk5RjVqQXFWMk80PXx7ImkiOiIyMDIzLTAyLTAxVDAzOjQ3OjQ5LjM3MjQwMDRaIiwiaWRwIjoiUGxheUZhYiIsImUiOiIyMDIzLTAyLTAyVDAzOjQ3OjQ5LjM3MjQwMDRaIiwidGlkIjoiYzlmODUyZDgzNzMwNGQ5MmI4NjFiZWQwNjNlMWVkZGMiLCJpZGkiOiJFMjVBM0MwODRDOTEwOEUiLCJoIjoiQzQ4REZBNkRBODA0OUQ4QSIsImVjIjoidGl0bGVfcGxheWVyX2FjY291bnQhNTQ0NTFFQjExMzk3NkYyMC81MDU5RS9FMjVBM0MwODRDOTEwOEUvODg4OUIxNjQ1NEQ3MEMxOC8iLCJlaSI6Ijg4ODlCMTY0NTRENzBDMTgiLCJldCI6InRpdGxlX3BsYXllcl9hY2NvdW50In0=",
      tokenExpiration: "2023-02-02T03:47:49.372Z",
      entity: {
        id: "8889B16454D70C18",
        type: "title_player_account",
        typeString: "title_player_account",
      },
    },
    treatmentAssignment: {
      variants: {},
      variables: {},
    },
  };

  return (
    <div className="flex flex-col gap-4 ">
      <CodeRunner
        title="Parameter"
        code={`aptoplay.login(\n  'john@doe.com', 'password!'\n)`}
        runnable={!runned}
        onRun={() => {
          setRunned(true);
        }}
      />
      {runned && (
        <CodeRunner
          title="Result"
          code={JSON.stringify(jsonExample, null, 2)}
          runnable={false}
        />
      )}
    </div>
  );
};

export default SignInRun;
