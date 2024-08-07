"use client"

import Image from "next/image";
import Typography from "../Typography";
import Select from "../Input/Select";
import Button from "../Button";
import Modal from "../Modal";
import GridIcon from '../../assets/images/svg/grid.svg';
import ListIcon from '../../assets/images/svg/list.svg';
import UploadIcon from '../../assets/images/svg/upload.svg';
import './filter.scss';
import { Fragment, useState } from "react";

const Filter = ({ title, className, view, setView }) => {
  const classes = `${className || ''}`;
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="flex justify-between items-center flex-wrap ">
        <Typography
          tag="h1"
          size="text-3xl"
          weight="font-semibold"
          color="text-base-content"
          className="block text-left"
        >
          {title}
        </Typography>
        <div className="filter-wrapper flex justify-between items-center flex-wrap gap-2">
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <Button icon={UploadIcon} iconPosition="left" className="btn-primary btn-sm" onClick={() => setShowModal(true)}>Upload Video</Button>
          <Select label="Sort by" options={["Date", "Size"]} />
          <Select label="All Videos" options={["Live Session", "Assignment video"]} />
          <div className={`layout-view ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')}>
            <Image src={GridIcon} alt="grid view" className="cursor-pointer" />
          </div>
          <div className={`layout-view ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
            <Image src={ListIcon} alt="list view" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
