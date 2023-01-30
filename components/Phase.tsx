import clsx from "clsx";
import React from "react";

export interface PhaseItem {
  name: string;
}

export interface PhaseProps {
  currentPhase?: number;
  phases: PhaseItem[];
  onPhaseClick?: (phase: number) => void;
}

const Phase: React.FC<PhaseProps> = ({
  currentPhase = 0,
  phases,
  onPhaseClick,
}) => {
  return (
    <div className="flex gap-2 p-2">
      {phases.map((phase, index) => {
        return (
          <>
            <button
              className={clsx([
                "px-3.5 py-2 rounded-full flex items-center justify-center text-sm font-bold",
                index === currentPhase
                  ? "bg-primary-200 text-black"
                  : "bg-gray text-black",
              ])}
              onClick={() => {
                if (index !== currentPhase) {
                  onPhaseClick?.(index);
                }
              }}
            >
              {index === currentPhase
                ? `${index + 1}. ${phase.name}`
                : index + 1}
            </button>
            {index < phases.length - 1 && (
              <div className="flex-1 bg-gray h-[1px] self-center"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Phase;
