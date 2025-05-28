"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { RiSearch2Line } from "react-icons/ri";
import SearchCard from "./SearchCard";

const BlogSearch = ({ posts }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(submittedTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSubmitted(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setSubmittedTerm(searchTerm);
      // clear input
      setSearchTerm("");
      setIsSubmitted(true);
    }
  };

  // 🔁 Reset everything when modal closes
  const handleModalChange = (open) => {
    onOpenChange(open);
    if (!open) {
      setSearchTerm("");
      setSubmittedTerm("");
      setIsSubmitted(false);
    }
  };

  const renderCards = (postList) =>
    postList.length > 0 ? (
      postList.map((post) => <SearchCard key={post.slug} post={post} />)
    ) : (
      <div className="w-full px-6 py-[8rem] rounded-xl bg-amber-300 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-center text-gray-500 dark:text-gray-400">
          No blog posts found for &quot;{submittedTerm}&quot;.
        </p>
      </div>
    );

  return (
    <div>
      <div className="flex flex-col items-center justify-evenly lg:flex-row md:flex-row gap-2 py-4">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
          My Continuous Learnings
        </h1>
        <Button
          variant="light"
          color="ghost"
          onPress={onOpen}
          aria-label="Search"
          className="flex justify-between w-[15rem] text-black hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 bg-yellow-400 hover:bg-yellow-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          endContent={<RiSearch2Line size={20} />}
        >
          Search
        </Button>
      </div>

      {/* Modal */}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={handleModalChange}
        placement="auto"
        size="xl"
        scrollBehavior="inside"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#ca8b08] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46] text-black dark:text-white",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-semibold">
                Blog Search
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full sm:w-2/3 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-transparent bg-yellow-500 dark:bg-[#475569] text-black dark:text-white focus:ring-amber-500 dark:focus:ring-0 placeholder:text-black dark:placeholder:text-white"
                  />
                  <Button
                    type="submit"
                    className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-200 dark:bg-gray-500 dark:hover:bg-slate-700"
                    endContent={<RiSearch2Line size={20} />}
                  ></Button>
                </form>

                {/* Results */}
                {isSubmitted ? (
                  <>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 text-center text-lg font-semibold">
                      Displaying search results for{" "}
                      <span className="text-black dark:text-amber-500">
                        &apos;{submittedTerm}&apos;
                      </span>
                    </p>
                    <div className="flex flex-col gap-2 h-auto overflow-auto">
                      {renderCards(filteredPosts)}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 h-auto overflow-auto">
                    {renderCards(posts)}
                  </div>
                )}
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
  );
};

export default BlogSearch;
