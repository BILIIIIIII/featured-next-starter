export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} Next Starter Kit. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
