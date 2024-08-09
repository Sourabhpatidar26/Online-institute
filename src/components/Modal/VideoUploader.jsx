"use client"

import { Fragment, useState } from 'react';
import './modal.scss'
import CloseIcon from '../../assets/images/svg/closeIcon.svg'
import Image from 'next/image';
import Button from '../Button';
import Uploader from '../Uploader';
import Typography from '../Typography';
import Input from '../Input';

const VideoUploader = ({ id, showModal, setShowModal, modalImage, modalTitle, modalText, btnPrimaryLabel, btnSecondaryLabel, className }) => {
    const closeModal = () => {
      setShowModal(false);
    }

    return (
        <Fragment>
            {showModal && (
              <dialog id="uploader" className="modal" open={showModal}>
                  <div className="modal-box rounded-none py-10 bg-primary-content max-w-5xl w-full card-frame">

                    {/* close button */}
                    <Button
                        size='btn-sm'
                        variant="btn-ghost"
                        className='absolute right-2 top-2'
                        iconPosition='left'
                        icon={CloseIcon}
                        onClick={closeModal}
                    >
                    </Button>
                    <Typography
                        tag="h4"
                        size="text-3xl"
                        weight="font-semibold"
                        color="text-base-content"
                        className="block text-center mb-2"
                        >
                        Edit video Details
                    </Typography>
                    <Typography
                        tag="p"
                        size="text-base"
                        weight="font-medium"
                        color="text-base-200"
                        className="block text-center mb-4"
                        >
                        For best results, video uploads should be at least 1080 (1920x1080 pixels) in MP4 format.
                    </Typography>
                    <Input 
                        type="date"
                        className="input-sm max-w-48 w-full"
                    />
                    <div className='grid grid-cols-2 gap-3'>
                        <Uploader title="Browse or drag and drop video files to upload" fileTypes={["Mp4"]} multiple={true} />
                        <Uploader title="Browse or drag and drop Thumbnail" fileTypes={["jpg"]} />
                    </div>
                  </div>
              </dialog>
            )}
        </Fragment>
    );
};

export default VideoUploader;
