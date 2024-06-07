import React from "react";
import {Accordion,AccordionHeader,AccordionBody} from "@material-tailwind/react";
 
function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
}

const Question = () => {

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div id='faq' className="mt-0 mb-20 md:mt-24 md:mb-10 px-5 md:px-20">
            <h2 className="text-3xl font-semibold text-center text-black dark:text-white lg:text-4xl">Frequently Asked <span className="text-[#075f47]">Questions</span></h2>
            <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-md text-gray-600 dark:text-gray-400 lg:text-base">Have questions about pet adoption? Our FAQ section provides answers to common queries about the adoption process, requirements, support after adoption and preparations. Find the information you need to bring your new furry friend home.</p>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className="text-black">What is the adoption process like?</AccordionHeader>
                <AccordionBody className="text-md text-gray-600 dark:text-gray-400 lg:text-base font-medium">
                The adoption process typically involves submitting an application, undergoing a screening process, and meeting the pet. If approved, you will complete an adoption contract and pay a fee before bringing your new pet home.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className="text-black">What are the requirements to adopt a pet?</AccordionHeader>
                <AccordionBody className="text-md text-gray-600 dark:text-gray-400 lg:text-base font-medium">
                Requirements vary by organization but generally include being at least 18 years old, having a valid ID, and providing proof of residence. Some shelters may also require a home visit or a landlord&apos;s consent if you rent.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className="text-black">What support is available after adoption?</AccordionHeader>
                <AccordionBody className="text-md text-gray-600 dark:text-gray-400 lg:text-base font-medium">
                Many organizations offer post-adoption support such as advice on pet care, behavioral training resources, and access to veterinary services. Check with your adoption agency for specific support options.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)} className="text-black">What should I consider before adopting a pet?</AccordionHeader>
                <AccordionBody className="text-md text-gray-600 dark:text-gray-400 lg:text-base font-medium">
                Consider your lifestyle, living situation, and long-term commitment. Ensure you have the time, resources, and willingness to care for a pet. Think about the pet&apos;s needs and whether you can meet them.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)} className="text-black">How can I prepare my home for a new pet?</AccordionHeader>
                <AccordionBody className="text-md text-gray-600 dark:text-gray-400 lg:text-base font-medium">
                Prepare your home by pet-proofing it. Remove hazardous items, set up a designated space for your pet with a bed, toys, and food, and ensure you have all necessary supplies like food, a leash, and grooming tools.
                </AccordionBody>
            </Accordion>

        </div>
    );
};

export default Question;