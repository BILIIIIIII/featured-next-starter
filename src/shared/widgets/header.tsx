// src/shared/widgets/header.tsx (or wherever your header is)
import { ThemeSwitcher } from "@/features/theme/components/ThemeSwitcher";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div>Next Starter kit</div>
      <nav>{/* Navigation links go here */}</nav>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
