import Image from "next/image";

interface CardAuthor {
  avatar: string;
  name: string;
  role: string;
}

interface CardData {
  id: string | number;
  author: CardAuthor;
  quote: string;
}

interface CardsProps {
  cards_data: CardData[];
}

const Cards = ({ cards_data }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {cards_data.map(({ id, author, quote }) => (
        <div
          key={id}
          className="space-y-5 rounded-3xl border border-neutral-100 bg-white p-6"
        >
          <Image
            src={author.avatar}
            alt={`${author.name} avatar`}
            width={80}
            height={80}
          />
          <div>
            <h3 className="text-[20px] font-semibold">{author.name}</h3>
            <p className="text-xl text-primary-600">{author.role}</p>
          </div>
          <p className="text-lg text-neutral-400">&quot;{quote}&quot;</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
