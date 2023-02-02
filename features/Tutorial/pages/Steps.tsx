import { NextPage } from "next";
import DocLayout from "@/features/Tutorial/components/DocLayout";

const totalPage = 6;

const Steps = [
  <DocLayout
    key={0}
    docUrl="/docs/1_installation.md"
    page={1}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/2_configuration.md"
    page={2}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/3_registerUser.md"
    page={3}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/5_signInUser.md"
    page={4}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/7_validateSessionTicket.md"
    page={5}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/9_getGameStatisticsForNFTMetadata.md"
    page={6}
    totalPage={totalPage}
  />,
];

export default Steps;
