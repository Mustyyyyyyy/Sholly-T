export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
        <div className="w-1 h-2 bg-white/50 rounded-full" />
      </div>
    </div>
  );
}
