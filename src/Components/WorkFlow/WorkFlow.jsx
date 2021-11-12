import React from "react";

// style
import { WorkFlowContainer, WorkFlowContent, Flow } from "./WorkFlow.style";

// images
import Discover from "../../Resources/Icons/discover.png";
import Define from "../../Resources/Icons/define.png";
import Ideate from "../../Resources/Icons/ideate.png";
import Prototype from "../../Resources/Icons/prototype.png";
import Implement from "../../Resources/Icons/implement.png";

const WorkFlow = () => {
  return (
    <WorkFlowContainer>
      <h2 className="work-flow-heading">My Work Flow</h2>
      <WorkFlowContent>
        <Flow>
          <p className="flow-heading">Discover</p>
          <img className="flow-image" src={Discover} alt="work-flow" />
        </Flow>
        <Flow>
          <p className="flow-heading">Define</p>
          <img className="flow-image" src={Define} alt="work-flow" />
        </Flow>
        <Flow>
          <p className="flow-heading">Ideate</p>
          <img className="flow-image" src={Ideate} alt="work-flow" />
        </Flow>
        <Flow>
          <p className="flow-heading">Prototype</p>
          <img className="flow-image" src={Prototype} alt="work-flow" />
        </Flow>
        <Flow>
          <p className="flow-heading">Implement</p>
          <img className="flow-image" src={Implement} alt="work-flow" />
        </Flow>
      </WorkFlowContent>
    </WorkFlowContainer>
  );
};

export default WorkFlow;
