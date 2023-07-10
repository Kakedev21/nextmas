import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  link: Array<string>;
};

const FooterColumn = ({ title, link }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {link.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={115} height={38} alt="flex" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            voluptatibus.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            link={footerLinks[0].links}
          />
          <div className="flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              link={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              link={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            link={footerLinks[3].links}
          />

          <div className="flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              link={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              link={footerLinks[5].links}
            />
          </div>

          <div className="flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[6].title}
              link={footerLinks[6].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              link={footerLinks[2].links}
            />
          </div>
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2023 all rights reserves</p>
        <p className="text-gray">
          <span className="text-black font-semibold">2023 Projects</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
