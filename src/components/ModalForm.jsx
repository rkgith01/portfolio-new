"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import Form from "./Form";
import { dark, light } from "@/../contants/constant";

const ModalForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center justify-center">
        <h2 className="text-pretty text-2xl font-semibold">
          <a href="#and-there's-more">Use the Classic form:</a>
        </h2>
        <Tooltip
          content="click to see the form"
          color="primary"
          className="-z-1"
        >
          <Button
            variant="primary"
            className="border p-1 -z-1"
            onPress={onOpen}
          >
            Form
          </Button>
        </Tooltip>
      </div>
      <section className={"border-2" + dark || light}>
        <div className="container px-6 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="2xl"
              className={"bg-yellow-500 text-gray-100 dark:bg-[#2c2c2c] "}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-black dark:text-white">
                      Classic Form
                    </ModalHeader>
                    <ModalBody>
                      <Form />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="solid" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalForm;
