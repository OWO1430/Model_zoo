export default function ModelBlock() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="border-2 border-black w-full h-24 flex items-center">
        <div className="w-full h-24 flex flex-col items-start justify-center">
          <h1 className="text-black text-xl ml-4 font-medium">Hello</h1>
          <h6 className="text-black text-lg ml-4">I/&apos;m Panda</h6> {/* 调整字体大小 */}
        </div>
      </div>
    </div>
  );
}