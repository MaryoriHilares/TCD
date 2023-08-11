import React from "react";
import styles from "../../css/tooltip.module.css";

// Information needed to build the tooltip
export type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
  value: number | null;
};

type TooltipProps = {
  interactionData: InteractionData | null;
};

export const Tooltip = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  return (
    <div className={styles.tooltip}
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    > 
      <div>{interactionData.name}</div>
      <div>{interactionData.value !== null ? `Value: ${interactionData.value}` : "No Data"}</div>
    </div>
  );
};
