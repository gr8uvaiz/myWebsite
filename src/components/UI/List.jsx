import { MoveUpRight } from "lucide-react";

const List = ({ list }) => {
  return (
    <div className="space-y-5">
      {list.map((li, index) => (
        <div key={index} className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-medium text-gray-900 flex items-center">
                {li.heading}
                {li.link ? (
                  <a
                    href={li.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-zinc-400 ml-1">
                    <MoveUpRight size={14} />
                  </a>
                ) : null}
              </h3>
            </div>
            <p className="text-xs text-gray-700">{li.subHeading}</p>
          </div>
          <span className="text-sm text-gray-500 italic">{li.extraInfo}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
