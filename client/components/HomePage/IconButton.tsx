import Link from 'next/link';
import { ReactElement } from 'react';

interface HomePageIconButtonProps {
  href: string;
  icon: ReactElement;
  className?: string;
}

const HomePageIconButton = ({ href, icon, className = "" }: HomePageIconButtonProps) => {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <div className="w-6 h-6 hover:opacity-70 transition-opacity duration-200">
        {icon}
      </div>
    </Link>
  );
};

export default HomePageIconButton;