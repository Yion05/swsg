import { Link } from "react-router";
import { footerNav } from "../../data/footerComponent";

export const FooterCardOne = () => {
  return (
    <div className="grid grid-cols text-center md:text-start md:grid-cols-5 gap-y-8 gap-x-4 w-full md:w-4/5 md:pl-8">
      {footerNav.map((column) => (
        <div key={column.title} className="flex flex-col">
          <h4 className="text-base font-bold mb-2 uppercase text-text-secondary">
            {column.title}
          </h4>
          <ul className="space-y-2">
            {column.pages.map((page) => (
              <li key={page.page_name}>
                <Link
                  to={page.link}
                  className="text-sm font-normal text-white/90 hover:text-white transition-colors"
                >
                  {page.page_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
