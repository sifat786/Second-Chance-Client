import { Accordion } from "flowbite-react";
 


const Question = () => {

    return (
        <div id='faq' className="mt-0 mb-20 md:mt-20 md:mb-10 px-5 md:px-20">
            <h2 className="text-3xl font-semibold text-center dark:text-white lg:text-4xl">Frequently Asked <span className="text-[#075f47]">Questions</span></h2>
            <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-md text-gray-600 dark:text-gray-400 lg:text-base">Have questions about pet adoption? Our FAQ section provides answers to common queries about the adoption process, requirements, support after adoption and preparations. Find the information you need to bring your new furry friend home.</p>

            <Accordion collapseAll>

                <Accordion.Panel>
                    <Accordion.Title className="text-black font-medium text-xl">What is the adoption process like?</Accordion.Title>
                    <Accordion.Content>
                        <p className=" mb-2 text-neutral-600 dark:text-gray-400">The adoption process typically involves submitting an application, undergoing a screening process, and meeting the pet. If approved, you will complete an adoption contract and pay a fee before bringing your new pet home.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className="text-black font-medium text-xl">What are the requirements to adopt a pet?</Accordion.Title>
                    <Accordion.Content>
                        <p className=" mb-2 text-neutral-600 dark:text-gray-400">Requirements vary by organization but generally include being at least 18 years old, having a valid ID, and providing proof of residence. Some shelters may also require a home visit or a landlord&apos;s consent if you rent.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className="text-black font-medium text-xl">What support is available after adoption?</Accordion.Title>
                    <Accordion.Content>
                        <p className=" mb-2 text-neutral-600 dark:text-gray-400">Many organizations offer post-adoption support such as advice on pet care, behavioral training resources, and access to veterinary services. Check with your adoption agency for specific support options.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className="text-black font-medium text-xl">What should I consider before adopting a pet?</Accordion.Title>
                    <Accordion.Content>
                        <p className=" mb-2 text-neutral-600 dark:text-gray-400">Consider your lifestyle, living situation, and long-term commitment. Ensure you have the time, resources, and willingness to care for a pet. Think about the pet&apos;s needs and whether you can meet them.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className="text-black font-medium text-xl">How can I prepare my home for a new pet?</Accordion.Title>
                    <Accordion.Content>
                        <p className=" mb-2 text-neutral-600 dark:text-gray-400">Consider your lifestyle, living situation, and long-term commitment. Prepare your home by pet-proofing it. Remove hazardous items, set up a designated space for your pet with a bed, toys, and food, and ensure you have all necessary supplies like food, a leash, and grooming tools.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>
        </div>
    );
};

export default Question;