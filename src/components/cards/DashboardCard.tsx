import { cardVariants } from "../../constants/cardVariants";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: keyof typeof cardVariants;
  badge?: ReactNode;
  footer?: ReactNode;
  className?: string;
  subtitle?: ReactNode;
  trendIcon?: ReactNode;
  onClick?: () => void;
};

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  variant = "neutral",
  badge,
  footer,
  className,
  subtitle,
  onClick,
  trendIcon,
}: DashboardCardProps) => {
  const styles = cardVariants[variant];

  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl p-4 border-2 cursor-pointer
        transition-all hover:shadow-md hover:scale-[1.02]
        ${styles.container} ${className || ""}
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2.5 rounded-lg ${styles.iconBg}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {badge && <div>{badge}</div>}
        {trendIcon && <div>{trendIcon}</div>}
      </div>

      <p className={`text-xs font-medium mb-1 ${styles.subText}`}>{title}</p>

      {value && <p className={`text-2xl font-bold ${styles.text}`}>{value}</p>}

      {subtitle && <div className="text-xs mt-1">{subtitle}</div>}

      {footer && (
        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
