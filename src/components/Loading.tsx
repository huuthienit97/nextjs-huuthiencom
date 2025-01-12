import Image from 'next/image';

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Logo container */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-white rounded-full animate-[spin_1s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 animate-pulse">
                <Image
                  src="/logo.svg"
                  alt="Loading"
                  fill
                  className="opacity-80"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loading text with dots animation */}
        <div className="flex items-center space-x-2">
          <span className="text-white/80 text-lg">Đang tải</span>
          <span className="flex space-x-1">
            <span className="w-2 h-2 bg-white/80 rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 bg-white/80 rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 bg-white/80 rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0.4s' }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading; 