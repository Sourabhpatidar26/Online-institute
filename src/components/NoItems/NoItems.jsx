import Image from "next/image";
import Typography from "../Typography";
import TrashIcon from "@/app/assets/images/noitems.png";
import Button from "../Button";
import { Fragment } from "react";

const NotFound = ({ className, title, btnLabel }) => {
  const classes = `${className || ''} py-36 grid gap-4 justify-center relative`;

  return (
    <Fragment>
      <div className={classes}>
        <div className="relative">
          <Image src={TrashIcon} alt="trash" />
          <div className="grid gap-4 place-items-center absolute left-0 right-0 top-2/4 mt-5">
            <Typography
              tag="h1"
              className=""
              size="text-3xl"
              weight="font-semibold"
            >
              {title}
            </Typography>
            {btnLabel && (
              <Button
                variant="btn-primary"
                size="btn-sm"
                className="min-w-28 px-0"
              >
                {btnLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
