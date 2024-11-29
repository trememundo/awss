type HeaderProps = {
  name: string;
};

export const Header = ({ name }: HeaderProps) => {
  return (
    <h1 className="bg-black text-2xl font-semibold text-red-700">{name}</h1>
  );
};
