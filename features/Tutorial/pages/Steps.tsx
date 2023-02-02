import { NextPage } from "next";
import DocLayout from "@/features/Tutorial/components/DocLayout";
import SignInRun from "../components/SignInRun";
import SessionTicketValidationRun from "../components/SessionTicketValidationRun";
import Statistics1Run from "../components/Statistics1Run";
import MintingRun from "../components/MintingRun";

const totalPage = 8;

const Steps = [
  <DocLayout
    key={0}
    docUrl="/docs/1-installation.md"
    page={1}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/2-configuration.md"
    page={2}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/3-registerUser.md"
    page={3}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/4-signInUser.md"
    page={4}
    totalPage={totalPage}
  >
    <SignInRun />
  </DocLayout>,
  <DocLayout
    key={1}
    docUrl="/docs/5-validateSessionTicket.md"
    page={5}
    totalPage={totalPage}
  >
    <SessionTicketValidationRun />
  </DocLayout>,
  <DocLayout
    key={1}
    docUrl="/docs/6-getGameStatisticsForNFTMetadata-1.md"
    page={6}
    totalPage={totalPage}
  >
    <Statistics1Run />
  </DocLayout>,
  <DocLayout
    key={1}
    docUrl="/docs/7-getGameStatisticsForNFTMetadata-2.md"
    page={7}
    totalPage={totalPage}
  />,
  <DocLayout
    key={1}
    docUrl="/docs/8-mintToSystemWallet.md"
    page={8}
    totalPage={totalPage}
  >
    <MintingRun />
  </DocLayout>,
];

export default Steps;
