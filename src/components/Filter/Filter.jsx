import Image from "next/image";
import Typography from "../Typography";
import Select from "../Input/Select";
import GridIcon from '../../assets/images/svg/grid.svg';
import ListIcon from '../../assets/images/svg/list.svg';
import './filter.scss';
import { Fragment } from "react";

const Filter = ({ className }) => {
  const classes = `${className || ''}`;

  return (
    <Fragment>
      <div className="flex justify-between items-center flex-wrap">
        <Typography
          tag="h1"
          size="text-3xl"
          weight="font-semibold"
          color="text-base-content"
          className="block text-left"
        >
          Live Session
        </Typography>
        <div className="filter-wrapper flex justify-between items-center flex-wrap gap-2">
          <Select label="Sort by" options={["Date", "Size"]} />
          <Select label="All Videos" options={["Live Session", "Assignment video"]} />
          <div className="layout-view active">
            <Image src={GridIcon} alt="grid view" className="cursor-pointer" />
          </div>
          <div className="layout-view">
            <Image src={ListIcon} alt="list view" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
