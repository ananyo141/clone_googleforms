// Page Contents
import { GetInsights } from "./GetInsights";
import { CreateForm } from "./CreateForm";
import { SendForm } from "./SendForm";
import { AnalyzeResponse } from "./AnalyzeResponse";
import { Respond } from "./Respond";
import { BuildWorkShare } from "./BuildWorkShare";
import { SecurityCompliance } from "./SecurityCompliance";
import { Pricing } from "./Pricing";
import { Templates } from "./Templates";
import { Ready } from "./Ready";

export const Page = () => {
  return (
    <div className="font-roboto space-y-40 px-10 lg:px-16 text-gray-600">
      <GetInsights />
      <CreateForm />
      <SendForm />
      <AnalyzeResponse />
      <Respond />
      <BuildWorkShare />
      <SecurityCompliance />
      <Pricing />
      <Templates />
      <div>
        <hr class="-mt-16" />
      </div>
      <Ready />
    </div>
  );
};
