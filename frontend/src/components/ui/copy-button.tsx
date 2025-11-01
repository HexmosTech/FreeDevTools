import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./button";
import { IconSvg } from "./IconSvg";

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  title?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  className = "",
  size = "icon",
  disabled = false,
  title = "Copy to clipboard",
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    if (!text.trim()) {
      toast.error("Nothing to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      toast.success("Copied to clipboard!");

      // Reset success state after 2 seconds
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size={size}
      disabled={disabled}
      title={title}
      aria-label={title}
      className={`bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 ${className}`}
    >
      {size === "icon" ? (
        <IconSvg
          iconName="baseline-content-copy"
          width="16"
          height="16"
          className="text-slate-600 dark:text-slate-300"
        />
      ) : (
        <>
          <IconSvg
            iconName="baseline-content-copy"
            width="16"
            height="16"
            className="mr-2 text-slate-600 dark:text-slate-300"
          />
          {copySuccess ? "Copied!" : "Copy"}
        </>
      )}
    </Button>
  );
};

export default CopyButton;
