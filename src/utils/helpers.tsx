import { ArrowRight, ArrowLeft } from "lucide-react";

export const getTrendIcon = (value: number) => {
  if (value > 0) return <ArrowRight className="w-4 h-4 text-green-600" />;
  if (value < 0) return <ArrowLeft className="w-4 h-4 text-red-600" />;
  return null;
};

export const getTrendColor = (value: number) => {
  if (value > 0) return "text-green-600";
  if (value < 0) return "text-red-600";
  return "text-gray-500";
};
