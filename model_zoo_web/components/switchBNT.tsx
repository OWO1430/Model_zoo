import Image from "next/image"

const ButtonWithImage = () => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Image 
        src='/database.png' 
        alt="Button Image" 
        className="w-16 h-16 filter invert bg-black" 
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      hi
      </button>
    </div>
  );
};

export default function SwitchBNT() {
  return (
    <div className="flex flex-col items-center">
      <Image 
        src='/database.png' 
        alt="Button Image" 
        className="w-16 h-16 filter invert bg-black" 
      />
    </div>
  );
}
