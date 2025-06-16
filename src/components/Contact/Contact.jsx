import Input from './Input'
function Contact() {
//no need for this api calling but let it be there for revision in future
    const ApiKey = import.meta.env. VITE_API_KEY_WEB3_FORMS_API_KEY

    return (
        <>

            <div className='w-full top-0 z-40 flex items-center justify-center bg-am-50'>
                <div className='w-full flex items-center justify-center z-40'>
                    <div className='lg:w-[80vw] w-[90vw] relative p-4 mt-0 lg:mt-0 flex items-center justify-center gap-4 flex-col capitalize mb-10'>
                        <p className="Bonheur text-7xl relative top-0 text-center mt-26 mb-18"> Get in touch</p>

                        <form action="https://api.web3forms.com/submit" method="POST" className='lg:w-[600px] w-full backdrop-blur-xl lg:p-4  flex justify-center items-center flex-col'>

                            <input
                                type="hidden"
                                name="access_key"
                              value="e23227b3-e9b3-4f57-a2a8-82469f3f248f"
                            />

                            <Input type="text" name="Name" placeholder="eg: deepika" label="Enter your name" className="bg-gray-400/10" required />
                            <Input type="email" name="Email" placeholder="eg: deepika.dev@gmail.com" label="Enter your email" className="bg-gray-400/10" required />
                            <Input type="text" name="Twitter-Id" placeholder="eg: we_deep_126" label="Enter your twitter id*" className="bg-gray-400/10" />

                            <Input type="text" name="Message" placeholder="eg: hey, i am deepika" label="Enter your message" className="bg-gray-400/10 required" />

                            <button
                                className='px-3 py-1 mt-10 rounded rotate-2 shadow-xl shadow-blue-500/30 hover:rotate-0 bg-blue-600 text-xl font-medium '
                            >
                                send <span className='mogra ml-1'>{`:)`}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
