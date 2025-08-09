'use client'
export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--background)]">
      <style jsx>{`
        .spinner-dot {
          width: 2rem;
          height: 2rem;
          background-color: var(--foreground);
          border-radius: 50%;
          animation: spin 1.2s infinite ease-in-out;
        }

        @keyframes spin {
          0%, 100% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
        }
      `}</style>
      <div className="spinner-dot"></div>
    </div>
  );
};